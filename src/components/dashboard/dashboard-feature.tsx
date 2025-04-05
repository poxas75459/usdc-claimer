/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5Javjgkb6u1gnRGRdAeLrAYnCJXYXLdhicc7Z9VyE3HTPkXaxABJYt4Fiefcdsqqp28QFYhzJT7tkZ4h4yPHnn34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pr5mcBN1haPPABZyiRbgVuKJND4KsAQXuAenAxYpfuvvnbnELKBnUepX4KDFDjXaDHdZFASrkpjQHULMDp5qRat",
  "key1": "2KKfrub7vfYeWbyMTNvM7vWoCQszzto2TGkCCScG6DrbJ1miDWj2qLF5QXEdn8Cr6hRAQuLkkNK5UnUX6w25dGPx",
  "key2": "4WZ42z1GjrNzi1qWzLDG4dk1ptFTut57QegVzLEXNo8tVam7xXEJ5aSEBheJ631b8Sf6zZpCMVEV9M8fX2mQyMw4",
  "key3": "2JvB5pZVXA4zQKiYkhJic36FgfTmzCRk42vV937pgBTJHF3LnhtgQKDrGPdtpV3F9DHvFVeDCPrSrLpsBPY8kunP",
  "key4": "53u7sPeUcdFCjvt646b6hHhG1SYnwQahA1vzYPrrMTMgbYB4XmTzTdPBuRhJKhzaAQmnaRN2BihV7ecJ63toFHhF",
  "key5": "2GvEXFUz5pDVqP2R7qMUjvMv1uXExZ6CoSns4u3rNgF9MSmKHC4UjdpaBfa7TAZvm8yVgvgwbXhoo1LmgSk7ckEf",
  "key6": "nsxUYbaNkCdxB2gUbD9UNTiWLDdS2xKpVWsQTV48vurvJQHFXih8Yd3LCXw3brGQrD2L3un8NaAdGvmNm91hqHV",
  "key7": "4sD7NXDBshgtAxf83etV2rDtMjbbiXTvp6YfE9uWsfv6kpR9gUXmph4jiZq4CskKRPorSXtU5VcgrbXiiczPMRwb",
  "key8": "3sXfdcbrDfzLj4sfSrWCoLaiDUmzoJfWhDHjkxjsPCcxMHqZerDv79Aw1XUvFyDuiSaBbxX2MJSaDGAkEviqBw7p",
  "key9": "M35m8j2YZV9dA7Qmxx5ZjVQLo5FKEveW47XL4xeQW9aK7EFKj3UtZxtRXjusD93jUL6xSkyqKCJdmjACLMY7hXZ",
  "key10": "4J534UJXErNM6H12eTvFSNRvqr8HUCxPhemVaCQq3vPtPBTcfofzAXGR8iMsE56tvNq3vnA8nRajvfAfFnQuNkQ2",
  "key11": "3B8Pn3x2s4BJQ4NtEQBBxghfAnSJ5CqSGBFuzu7ip2iPSNXufaPiJyzEjvGG9QrfsTYPikiVgEdMRFuU2qRsbA3R",
  "key12": "5oJJXA4m2Jcqo1AijkSXuLKAqCXwubrhdYGYzGHVYJTUqJhBeCy5wvcQERXpjy1LNUmKUL93i2YoesmYX1QdtKMp",
  "key13": "5quk6YYmAz2aPvkMfEgLQCL9d2NLMTJf7a2oeR9ePDmJfRbEbbgnJ2fkH6p4WUK7h5PUFB3d8woWSe3Fxg6zKsaZ",
  "key14": "31tPEpMKQXChw4ZJGKsmCq9iFPpkc1PzZ9vowhNGgS3E2d25Zie6oSXGSps2JxvPYUsYXr8s753UinM9W1nFMeEg",
  "key15": "3TAjvG8Ltekhnyd6nTsgmJpB9DCVwVontbjFPSLpYURmPyt2WxE7cFoqkMofr68zDoy4wTAEUSnk746VzNLz4imx",
  "key16": "5RYsBXZf2UhszCwVPXXmtDo7Z6zqh9cKUTYwRoB6UAuchB8PY9ZWqoRQBp8fJ6dPnCYCUuFEkRtPnXRXCAEepXKT",
  "key17": "5ViaQRrNYN9MBfz47n2beG6hcUFoCZ11rK3aW4xGUfex7aV7jJkDwogB1t5hYxu4KiJmfqzcVkKapEVMZpj48Fhz",
  "key18": "3prweECTCRbZ7gvfoa22qeHFcgb2DKswWy8P7qJuJwxDHo852ho5wqv3VK5da6XCyVt4G2gV3XqWoiADJMxiUS22",
  "key19": "ygtx5qdvdqr4sWUaS1RLUTLbXh2jtczXy8q6J4KC6gWL42LvPYmvDhPvoksR59sNUi9qkYsZbTQuTqTruQP7vB2",
  "key20": "EFxp5sQpPhEXJDzVKQ19NEfq8TwtTjkoMTpmEj1wcgQa75qxKbZDVZRqxgfzinytkJwM32dGg2EsY4mh6p5M8o8",
  "key21": "mPMFA5aoHxK5xzLchM5CtLMHMfvQTkKNaPnGfChZcxkd4Y8c7gC4KEfbgX1r7pg8d4hkeV91a8oHtJM8S3hAY5E",
  "key22": "3629eu7xouLhkVU3Xs8JJkJSD2XtuUq63L6nt554Gb5ZeahbfQ3dgtGooBANqBi1jLeQbE3Aj3M5DDAAvQwPj6ks",
  "key23": "4ftEMiXmmXvgtjVQnvpDeXQXA7xvJDMQ7rLDrpsaErZAjzfPZbkWXm2SdethhQ4LSuVtLXtdAWb6S5X6n2Cdck26",
  "key24": "2tQB6J4zeSWWL4eRasU1WfcNxbXEJpZkaLahnC9s3YYsE5AfJchzUyjqm9maPufKMuasJScEcQUij3EyWmcfePdq",
  "key25": "5whtbbnU47BmRc1ojQQHtwB1vsSv3TfGYYa2bKjhYyyUK6gcybaXkfzFf5b9L4nFcUxtGFisyMg6bqPPp6JNu5Un",
  "key26": "5QmLQsMbn17DnBpAxt6ggjxaEdeNxKLCrBdcN1HQLiGXonM6JACALN5hoWZBU84jK3tvsJa1RAmXNYWtzz3bcLpg",
  "key27": "438p5u8uJ3vTFZXcE5HxsMn9AxSKNq4ge1KMGHm7cKqbmMc1N364DgSuGhxePPrre2ayugqorkPhhs7USjLFFUwf",
  "key28": "3ZQCyodQUUjMyqko8LEMuUyW4SC2UxZLKXRPLX2qApjATkbFYXTfk7Q9LbyM5ovX1AB8kBHty2kKALABsfJSnG9r",
  "key29": "4DuVYj9gapWxYxBy48yDhMTChi3uKmrpiwmGtXZzMjrRptZqtQcddKhupDgydQoPb1WSNBP99M2MhUDLhy278rx4",
  "key30": "2Swqc91jCP2cZJwpVgkXrfUzfPWupJjrCoPmuQmF8Y4fkKy2VjHphHUci11MgnWepqz5Gt3ryr1ySYWKKX6uTCVc",
  "key31": "3ZZkkJ5UAwLmEsZszYK8nPGRmZNXnK31A2DETi13WNB7F7vqWeBC1jMf7SkS1c9S7HiejhAkvtqnd3yhBethtU7e"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
