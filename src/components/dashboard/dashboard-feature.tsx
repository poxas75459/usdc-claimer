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
    "YeWtYJ6yDpo46MJNFXHujo2NJLai2Ex74ZaQ9L84sdK4kaxZwrT48PTXpiJsDTawEHDUPweBoThRePghd3yUTtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fxo4zEBhF9YDUih4DPgGvnDkMVjnYuVHeG4gHGMwH4ks3cmew3axQP3By1HXqw3CuiM1chuoGvJswW9obwjHCPn",
  "key1": "4hqm8VRBrFwcQ3drCTjnQBXrH7gQext131Qg6EyVDP58QzJtpyhXgU74yKfwgijs4yKrSESL9b4qavYbjqv3Yy7Q",
  "key2": "5mVjfVRzLUGv4b4BH1ATUes5rLrcz1f7dtUFXtVa8ALKn9PJ9V7uKbRC2etUVJuEApLudPdfuUL565DiFm8qq6fC",
  "key3": "2wSvsxHDsv9cL83bk2C1SHbMES7W9bw9sXtoPFuuWbRtMWbnuRYowyfjf5h1eosd1UXNpQafzwcK5CxQYzbSF6pt",
  "key4": "4Hy81uFhf4YkBvB2cEXLSi2YdY1ie3y9D4R7eDDM1cE1zkyaHJa7nsxKBaoRuW9rYmTCwyMc8K9x1WqWzN6eGu2d",
  "key5": "YQGfixuhsNriirhi9YEmsxwjGgsKpjRKjcSZViq92mfnbVuYaQWsisJEwnRewTvpe5jVjb7wx1rhZ7CyqRRz8wo",
  "key6": "mBcuTuYPxwBygCXnBHfieUumKjYJSzgJUxPLyr6pdBbP4MBTWfiBqF6p9ZR5H9q6qZE48sh8tGUGfXuVEPJQwkx",
  "key7": "HX7XCd7pyYM4TTVbX8FqSmUhbrLvnLyjU86AyWva8EHE74rHs1y7AGBgsespBiqQhkmZGHCZuvDn65qPVw9W5qr",
  "key8": "4xQi7KisyDukQoZV8pjRgNBBptgVojQTz29Dyop6iEaSPXeb9nEyLiXFXoyTh7qGp3ZQhdyhRUtV3DmPZVm1Q4bS",
  "key9": "4pmNG5KXTh6AEXGRXSxaGopmmDvBLVx7UK8VkdrFpyZ9LSz8gkza1NJ1ETuy9Um6P6CRDpy583jEPZZoXpK7FAzi",
  "key10": "CmiEYuu82ZWxqnBWN2zbcTERCmo3nmyQVtQKY7iq64qGGX8pc48DciNQ7FLvuhBAXjMRqpRBiFJttzj8JVVuSQK",
  "key11": "5UWrxqJSjwEFi55YtDbypDyMEesBYoT7EsjEVvwBBTnhieyZCn1VSwQihk5opdpjzTnH7DTZZMSgzciArXY3x4Dv",
  "key12": "2ZtfM3F7vYNEVyJNdtMpFAt9r2LnCjbyH6w4Dr2sbcaWEzTm5fcYeejSscZu6g3PkwM9BkwE65WSB9gc5EBxRb11",
  "key13": "2pAP7hTTWmTdqMitiPrMut1w5xxvqgdVVeKdCopPA5hxwu3a3iAHKqTBTj6apjZtso7hxVgbsBrxfdbVRerw4y6q",
  "key14": "3mzzjKwcJM28SRFwDqjMAo4L96uuPPGKDZAPjgTuqZVA59VJSe7W3kqHyDWQQAWwLnUjKhr6DxLPx4Quoz3MKbk5",
  "key15": "5mVjsXqnz5Q5YqPJJZBpD23ASm19vBdpwcyN1Nf5ZY9H8dCULUK58ubFsu363LHyjNqYP57ZqdHb9WEThGhRsqPN",
  "key16": "5JCDwULHSrqU88xohQm8Hd3SAbnTAZRqQLNxPyxvuJsrEzY5F6Fcxyh2Rsb9iq4WvV9yGYoUjdMCBSr9FSJKbNU4",
  "key17": "2F9MrgjFtpDBFYe7TtKvwB8NbAaaKpZEUGf8K4Vf4kxgZwTfgepH46Romg6j6A6YXZpxg1gFxznZ6HntaTBnNFxc",
  "key18": "51yZQ3E1Msyv5UBFkwT34XFZvs1fa8cW3mR5qz9nS9JQ3YQM3ehujgkg8mbV5cCh2ZK9Kro2zViZ2ZuXYXhZ1jnc",
  "key19": "5VrPjx2V6pE72Vtqr8XVsSeM3jm6qhEwL8TnVybY8jonfpD7coKM1pGtoLCpJjHQ12DisryC8f1wjxiYKT6LHQQT",
  "key20": "4SBo7kG6QD4hmVERnM72nDFMJKq2QPqbFPSaCSprndNCvEGdtYDPRgPD9ubCPryTNPZ9FvJHGmVzpCggMGYEzVXL",
  "key21": "2pRJBT9yKg4H5GFoZGnWU7fqtkRF4MHhYeoxJgqYFtyTgMS91XGSFVjzbrRRmGicy2KqrGQYQ3aqqyc1e6WawAwQ",
  "key22": "2DcNTod7GWTPrMdqRjrZ5JrNEGEyyiBDMJJsbQTitu66Urfjb8nYyPxzHdqmr8ajBpCBkMgBDHbPFv1W76YZrxxV",
  "key23": "3dv5Uu5xEUsMw6jUnwLJUxczTHJgXTYejoKuTuyXqMt5UHAaGoVmX4Vb2STAm8HDZoZkDoZzgS4N4WXNAA17SwL5",
  "key24": "5Cfgo4rTnJu6vCxzFQgAma2wnJjvk1TSEAjEcVBqc8EQ1vq38Tro16qkT2mhB2DSnyk1o5Jsb3KtHA3CgBQZdLqX",
  "key25": "qcJwXdfivZ4cdJPdz1EfsaJ3ACaUVgaB39HWczLwzurhn89basFRweFeRYDRn1vJzx8Ghb78sbJxY1iV3nsHPaS",
  "key26": "2fDEi6zgDYhtpqqqgX4grrB1vp95jdXgKXY2kG6ksgTXpWxpsCKpgB76VCxi4wtiyGZ8gH1c3oFqJK9sECnq4pEA",
  "key27": "5Tu3eoDH3X5rqXXdCMciTGGzDhvSB2szazzFYJA96AAzzvWkJ3rZZNYRaGoLPPVGf2ZxDKcAdFVMH6Yy7kbGxzVW",
  "key28": "imhMVffptQDxyAvhNdKhdkJm2D9K2amkSVihUpCqpVeU3vAEQrRAYcFJwYEqxNfGGCjQVESwHnpwknLaK9W1Xis",
  "key29": "66nwBgSJRABYpq6bj1Kbp8XiLUi5WXyLuuJuKuRcCc8Dh2VPAudJbNL6SgK7LwKBCpD1gSAmmRp5pkgqsRftSRVp",
  "key30": "4MRQAezQW1W5SA98TGZWFgbp1PnhmRFgJs5dUQMqtpCvzQtepARRQ6gG3t9EqaVy16nsEddFC6K1ki291rNPDv6d",
  "key31": "5wauF2RxPhhatYBpJbFQx1xNgZn79WM31TPxV97hktzAe4q8q3LiL8NNNq2epYrPdkyGwPtAXfAak6xg3pqtSvTN",
  "key32": "SXkgtPiJPbKn3UFCiT9RGCH6tC4L7XDNhk5NRXnDscQAoy538aXrWE1HWvDPGrME6a1Dhvmnx4M9evDr1JDP3Rq",
  "key33": "3u5y9sqaoqNzvR5ta161SZ5MpWzukxEDwEJDJiADHCsG1iWdQvzHR5R6Z3DvUGN85BQDRat6XdUg6hrexfCxRXBE",
  "key34": "3FCYnxkgPUEbTew69VbvBZiabXuWU47ttiYKU6sbv8KcyTR18HZ7BFCY2wieTz3Er5zg4pBsop8m1k4vTHMctsn8",
  "key35": "4pMfYxjGRTotj4bZ8vSMUH869xdQiok4ZgAqKoxC3iMDB5Fv2CZnxevo99KztX5xiNPVDEqNi1NBjR4vK8cGhLrx",
  "key36": "5SVLftsxpVLu4cmCby4az8iotejkC9mzAcyBE5WXG1yNwwvxGbnXeBDtPJXmy6z1DQ2zfEdMRW5q6cmtdhhPpAwK",
  "key37": "5bcwLfgiSbkQpQo1j6HSiaEymFmsAqQwQVYKbB1SpasL73Ey4HbYoAqfjtozGUc8bzyGcJG1T3csR3yKaHKLMoZd",
  "key38": "5nXKXDzAN91LhxjhEJCuZnpyg13PPhjQhanGbbjq6rUiLGCRBMG5HbNZeQ3pR163AAfEoVfKjNPP2aEF1C3bY2D7",
  "key39": "4WSUc9vs4zMxbNacZosRw6jZKQsgynpSJZ9qTaueQCTJTHSMy5vP39pPiGwrvn2np6zRBpqHSRczGoUa2MthDHMa",
  "key40": "58RrGz6jWbBJwJwphK4UCVywDofndfJfdj9hvwAEM5sUAcTe8g6V2CT4yCZrjFCFrJybVe9G6irnFsWbJUQ2LHww",
  "key41": "43EN52ajn8M3U4pEw9WN77hTdjMWM2TMudCjSNYnrK52dunznJTsnHXf9QDM1CWQVXa8xyRuMuRHXhrsQ1C2UxT2",
  "key42": "2EwXvgtq8hKejFNrLfNo6dJLvXhoKzV9Dmhcn3tN7MrYNm2irNZHAfwm74AXwUPgPsS7xqe8zQHNztPK86TxwDyo",
  "key43": "3dUFHFVzLNfXNXUdMBP95GcmcqP57desj4QX3Q6kYULsjPGKrWjw9hDdLe1exgqTfueuS7cpwKwk2URhPbC8FfmV",
  "key44": "43euRKcCTLKTmsn7EFjdr1UxBGPeKNrwYYZfkFMxkXmmXg6t7BiUdoQJSdwPJCt4AKmCnpdWLX2tqQUV8sS6mod4"
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
