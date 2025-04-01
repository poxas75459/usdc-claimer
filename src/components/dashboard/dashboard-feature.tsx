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
    "S5HsgRRUr3uErivksGoh5iazZVKSBQfek21RjAC5J9fHZgLDRwfYhrcGEU86ZFTghk3WGxcryt3ysv6GC3GwH1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCkNzWidu9agREKMBXFMfEoYkBJwgREDFTLkPnSzYiyTs6cmeXT2sD5TZdzHww2WxRGPziWSSiCV8AoAGtyjnQ4",
  "key1": "2BrXh7wcicXfgWYb1k7WvzTcuENWYpoW2esEqwLrGDYEGDYUbnrga698cj8uNzdaRdw8aUbSg9LWBZAKQARyTSnq",
  "key2": "25SYBiAMyNLh6NbkRMcoVQYQb2CTuz8on7fHiSyz4mqMKbLbBAmtPy1SZbKnKd8CmUTpyg4LBxF7jwAKayYw11x5",
  "key3": "hZd5uwaGMB6zwPSAXkphPP2rnWArtgXcKSCWJCsqg5dsYD9qr8nUreiwTrDUyKo7vYwfPfzc7vSCXxD8UpqYcRH",
  "key4": "2M1Lsak6VC8ctsv5waJ8GvD21dE984G8YUtxpFtUJu6rtdZU8kPdR2HLdUY2ZZoTAM5UGzS9snawhBZoby3fjFWZ",
  "key5": "4HF7Hr868YvFJHbQL1Jqg6rh1UGTy7Ei6jSzdMgrDi1cpRWbTFJ5i72ZRDsETtHxyMqVDPqNd1ikFgEAkf6UB5dS",
  "key6": "9gtm8HUXp7q1Hu1m9ay2787Sbu8XnAMTQinMxmHB3XW3yycvY83jY8Pf4Ju5ZM88poVgMDCY5cpE6igthNJsfoV",
  "key7": "2vBweJFjmCbD13r6BLJ6kcd8KDNRTiJ84sFnLZHB5BsX4tWZksRL1Wg5NP1nhiwxBU8FwtkRxyVdHCG4jS4q1M1p",
  "key8": "2XJ1i4Sbx3h3MFdFZ2NmvshorGUsxm1aSqst33hSjBpfX9Q7bP79G29CoCj1yzumibPx7oHNRDK3MuovLtginsK",
  "key9": "4Fst8gQNjLVp1jJZMoUK1rEHrUMMaK6S8wa5C2eUZvBRmNNfpXs3GNtPV543mxRrtv8zsxk5WPARZHRZgdQSAzyT",
  "key10": "25ymdr2BL4ZV2dj6YRCQtTU3FfBEUxQEKXntj8bYh1rpivDRCHT6eZ2vv8zSiGkbAaDs3uQVo31xnAqcvTHzmLQX",
  "key11": "3RFT5W3Zk4oMMtizUN3nvZQGVTLSFBSAg9xeqighc25GEazSjpkUcUP5poFJRB1Ma22YriJwmx4WdxUtEhYdeMPL",
  "key12": "5VTDZZMph2j6t55Di1vLUc6vZvAArxeVAcdSeBof9evpYcdNkr5Ms3uuMvo8HcgqvXhBFPWBu4yw6LtL3e7ffyz",
  "key13": "dD1L6pXj8dSRsHZRWREdVC7EMLXLrLXMUMxLbSBzXP66ETkvFGBJH9pzo2TmeadAdM4iysiK1q3cLSyUAak71c1",
  "key14": "7d3jiP974CgxddfbwKUw6QsDeAmr7oL5n53tG515mQGHLr1VqamzQngGDtSBZuu8SFyGVfbJfDe9mSCY7mcUmCT",
  "key15": "cXrMCRuL5vaC9bfHP8U4pXkagF6Aro77pCpc9kyRu27XRM2V3N57YzDq8AW2ZHSarGUN4U51QJwAp7T88LrqvbB",
  "key16": "5vh7rww9f4Ww7TpwVf8HNwV1d63CULEFcJycGSRaVNGfm8HCt9w5MEqDwZetSMKWRsVt1xVD7BheTfb2Wiv8EdYK",
  "key17": "2cvNbz6x831zfxXSuMMw3oVHibKt7ReF3VSJNQAHbCofMafUQnegc6vPce9BgeY6qRRpsjd7y8D6ZYpogdboNLyT",
  "key18": "3FRtMbuvsvbiJp69qVNttaKE6JsH652W7kSVqU4zixxe7E95jS2qoB8tm7jHC87jMHxUKWY4CWBycChTzPv2czDM",
  "key19": "32VNir3Yn3RfBufyfvdTQRbXPWW5GENhnhTy2vKR7WBd263CT33rh3oPSCpCQanHnU2tyJ5F54VTtVdhP8uwyo4w",
  "key20": "5tRbaMtnXCGopdcgNf6ekZH2sRNhzFXZVe7mfZt8G4qGADY62hAa4ixTT3KwwVVtq5bnMYMC2C816TCzHxMhRGuz",
  "key21": "3jQuEMAar5361N4UM8d8FnuFvWid5cPQ9TTHao3Jmg2LQuXN8pxqfmmf9vByZFVPNSqrHR1UKmXa7CJvZfnnsu3d",
  "key22": "zdvz6SbUSQtTSXeEyWoLZWcbGCwg2HACnEkbVNTf9HryHqyqsDrKuG8i11ZivzohK3iNvK3YEbJ9Yozt6qAkKDq",
  "key23": "3JSYcND9jbefGCj23VnfFsb653Q9JAsvxwJAreLaxHwQ6E1RBsmmiC4yz6FYHqnSqNetrhYCzB6Lf7USmTvHF1NR",
  "key24": "35qoMkvSC5pJcVKv5dMoQ7arBvEQFyNEbazqUQt9eqs2UBREWMVjScw4wN4vovinSjqVDaM8hiaQQop1xEL6Ak3c",
  "key25": "31GZdXDkd5qJUyBHssMZtRzCcf5QKPMuqDxCL9Hvp65iqSX7n3vXLqpzG1G4rZnETwLU86BASqej81jftn58dCpy",
  "key26": "7PC7uZv9xQ6bhu8LuyQavGojjbzNPmwxJN9xyURCXy8nhpKz4qq7YxEJZ529EzmKJ7FiyrBDwvtRP71mf4WENMw",
  "key27": "x316TVgLs6svuevoVHJt2bPbyAWMdNrVbaJZ8CeNiFepvV2MmA33UAHjErzUH2BM7w9NhuxBEd9MZjhnRSXeim3",
  "key28": "4TCUqT1fgLGadn8U6hUgS7HjwfM7tEPk9HENXbpQZuHqLhRCCtx6Y4uy1oTcqigxCREzTXABoweq34RYnwb3e2Vw"
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
