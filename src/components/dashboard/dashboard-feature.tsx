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
    "4eo82SesH1HQE7c1bXUGY1x2AqFj2VjhfwMUvrNg25HdZbrgimLwqNVrxU6ABDXDhhrTJ3DqPdH7mo9bdHYNbNqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCvDSKVV2qLin96VpB3bgXL9w9bYuUToGNCpkyW8koJNBTA3e56BZ51yhQ5WPMi6zoi2XkaHfXiarzt7UH73YgA",
  "key1": "5h5W6DGXNT7u13VU3i9LyU7JRRK9Xzmw84HfFR2ZqgZgrfiYTgWNVJxiSV4M4UVBtMLYP1Up12FhhVBgrrEfKcGR",
  "key2": "4DMA3R41kopbJ5iUFm8DwxQ6hhBKDXitjSvytPJUDFojU9fFXiepxMCZkioMWVomZxoWjYH9Q3SATmaywYKWiSUz",
  "key3": "2CXWP9TUdv16SZtPdhuo967nHKgEsSufuhDYnENmCXcQhuvjo2w7LDAF2tfc2XeZevsu45wofMHYtKZVTwmhywvV",
  "key4": "31CSVJd85u7h7hoUzSyUp64wDVMnFy6SgyCgTop9PDwU3fMdRdixQrxFBnec82QJ1uB2CTJLX683hpzfNs6icQCh",
  "key5": "43ALV79BzJPNMjs8ziux1d7DkRmwiMkvLjXPsvjhiQajxTZreCoZSoiJ2qoHupQCP7KmpgYjvFyzXXS2Vngu3rrY",
  "key6": "4bA958X2w1PX4rW8HNZjFY1xF962mUVuFUs3EpT3MeJVzP5u6oHTYvMAh7xVe46Uke1RZeeHMbrRw74M348QBeK7",
  "key7": "3TjGf5RC5znM23aJxj3r2JqjhvAnb5tM68z3hVT5BdyVuM8y4FHjwCMU5SRJXMqSc7JkRZQUsTW95NRpEZ2MN6df",
  "key8": "VRG7tuBTuz2PaLqLHzFLAw177AJHeCkXk1hujBNEebsnvmXzEs1VgDf3M8Hrz5AVRa4DtUGtK6F8dnYrpYhXtyw",
  "key9": "4DC9W37yNs15nWQHAu5BQYV6mfyaxpPYH8mhCNVzhqcuvpWnXJ1x1RyYhMwFLaRhkafXJh3pEig1PcjZV3A2Xj7p",
  "key10": "5XdNtn9rjKd8jT5Dctc1ChzvFfH7YZGYb2eDSHtFXn8XM4UJ85ftNKQ6HfzMxp3AzKmKNTMChn6AJxtsN3CyBP7i",
  "key11": "5L5bAamrwQZmJnZYUfBbMgJWpsauFqz3Ht1f9GD5c9M3jvE3rWQoKQuMxkzj5CiSzAB4YYEU3Gz1BetwUebhvEa6",
  "key12": "4NwpPuxFcG4NHukrjsiuqz4HVY1msvL1vyTxGVC92MqqCtegJVRUoxojA55yAXy8iTB8WCP8MAHk1mAhFMd5Csng",
  "key13": "5nqMoqSahLVnVmLjmAxD2YqfwipLChRioVGUCLoBG1AB1F8Y72D5Hrp7udobFQEejwGAJb3EMwUeWJGKhJ9rDdYk",
  "key14": "2TfyctHDmiQpKt5t4anuxrgUjQXkYMpy2Jvab9kBaddG7aJPDD1TBJVCk1T1ebdRYnj6MxjLojrQqbZUnWbVYP1U",
  "key15": "3JscbAV1aZGUwE1xdsXZw6mLmBA4TQ7MHgjCJRxmWrNsBuBvWPZjviEKxDCQidPNFwnPqmhLaPRgxAXUQqV9jcWk",
  "key16": "4xYcAikP3RTcwg4LCM9ayqnzk8GwHEUqVjGBr7xXgs3gaq3iUp8DPcXgmBHDTQPafjFSR4r77g3ahYGCBagsLcoK",
  "key17": "5tsh4feaMMaSedt9YxGVB4zjagYJg9Gs7Ky3DeUpj2sUkdnYQjp1J2kEaZ6pCtz8bysZY7WBoxKtQEXyJcuPQWKL",
  "key18": "vpALWLq9tiyA8xCEWjNXm8xwiUhydKKLj8XKCy6tjCj41zNubW61agA7eAdHpfgP6b5KHjCP1xtTo9NXucd97b6",
  "key19": "Apktjpqc2zyZYP84xr3JwzKtNCeBx3bWT2eq4wRobSkNCo7L7DT3TopNmsXrJyFXjMTKuPDn1oLMEMoUBjiX2EH",
  "key20": "35vwXNgTPbeci5AhSErVPuCUSEvH259SVVP9nhCzfqQ7JizENKUrMU1nbCca7ajMBz7L5DBRN7p6pGpX9bnmpq2S",
  "key21": "4KdshDf2yUdSjg5cgfaExR7EGTqN1PQXRgSNys24gpwoQycmyAix4wBkdAz9aiwd3ENvPYX8ysFopNubPY4sNB5H",
  "key22": "4r7QCGhobPmDvXL2Zg4WEXFFMMy7YHfiZDw3QbGTYJDyWNuFwnV1Nme5hVnokSegCi6nXApEyVPY1XgMPmaWpdEK",
  "key23": "2JeHnsn8kpz83F58FhvcqShSa86fYphTk6YSJBbmGGq6XqyBuTvRwygi62MWQKKxGsNN87Xoxm43XEeCcSpK69NM",
  "key24": "2syLCajvKSQ4ceRseihinPeercvPBKwZrnu5xk7YJjn3NjLt7s8gLqkx8sVoN76ZunuJf3hidUF6o3eAtAjAA3Re",
  "key25": "3cCS5VSpHcx31qd1nw85cXz78kBsfo2jaYoLUpWDqe6egf3QnRW94VHyjaQzxBALnWfKRzTtTi43D4VwRZVr7NmX",
  "key26": "2AKUxqe21iLNG1GsYRvhiQRjGzPt8WLVvhfUcfthtR7shv3yRkXgSpMv1cAb9SduMa1YH7KTYSDxFom5xs8xH7Ts",
  "key27": "3vzfqmUDAbi8SfsoVwF4hZ2F6en8Q2D5U2BMrpTX7TMftWbz8tV7wcXFDnrgfog171ercouuqwJiDrfemivwBQXZ",
  "key28": "3Hc8XYJ9gBhw225qcjSYikBL79YAnjftLWpNsDqp9C1aEqMA2UM63TgZwQ8RVM7AibpAGNXwXDXWn7jPLCgTiEJZ",
  "key29": "4mTX13RSRZtZ7mbiHQTuaxN7rYyzaj6KC7uQ468xR6q8phcaskR2ToRZ6omxko9Z36FKiMdQKEg551vHKb2u5i5k",
  "key30": "4JnJnDV5L9NLwEjhqHg1kEEM36K3hz1GEPzuFeYWoHk5jUC3SiadKGYaZB85shw2XW2KdnfLS7e5FqzqdsQVnrue",
  "key31": "61WnwBHL55D1qYU8n9KZk4duGn7zoEca1WJD1UBpHsjy4f68gGDfUn6GuK9xgLFhVBufPFxn5jLbaBzGCSjdQFH",
  "key32": "45pHX6rw527kw6rVjwXBRsMnqudyo4BTUyiUehiwyKJMUoXMKU7rGX3rkMBbzUtksgQGS9Exa3Hr7ZbQLmtMU2q5",
  "key33": "41hRXKEtFN17pxSX5TRTbTNmhFqRq36yQPUg8BkUeQ4yhSgPr4rHzzDgKAaojnmA6ebrbmPJ2KKoujok5e5SzSJL",
  "key34": "2CEwj6pz28h71hu8F5fLdcffxpYqYdefARbEbz8cqR91yvDh7NZggdbZrwswUQrwoaAeZs7xXK15DGLk3obdTqzS",
  "key35": "2D6sPfX6FPp9EX28Dadd9ST8YC8LnyrrKxTXeMwGBEb7SnovKSqzAKBAf9evy1VueMi7fAyLMAKYeBZH2QRsBmNf",
  "key36": "3bzYT525fvk74sq1E6avVLAH1zZkbEojcQ1vfh5iR7u9ik26HkyN3CnYK3hGvYswjbEZ7uhdpmGaw5W29VJpMuHa",
  "key37": "4ofGG1nrCFfQmCSzakicPnHaZ7Dso5FkVV6qR56tG8Uu7UcGRubJUADsnsFcQk1TVd2tYUgV2igWkGfKZDdQvbfT",
  "key38": "2T6wnFiWWcUWtTViZRcGkTkoAp6Ebof19YkKGAC29Nn86FMi5i2yytDkBa5LxG3sL3Y1eoeQU8Uk1veqfUmQMxd",
  "key39": "3Zu7u7zxbngYEbY4pe4wktM2mAa72Gn9qiecSgxUsUD4oSX45Fgr7rr3vj9JzHNd6T9nLY1vpTkaMWp3tqEb1t88",
  "key40": "3XMiexPdL88jh5nsGeEXCSCeXmmTN5KbbZ4kmxsjPtwxMLbwTZg6PALNCNso9xdzVSh5155miWRPhMbUThGomJ4D",
  "key41": "4sF6dqtsoaWXTMnoZaXJmG32X5q485DbZdGVpBXMY8Rb3AzuP7XJAhd3NVh5nFfVUAVARuNwcRye7ohbENxk7Rqi",
  "key42": "3Jr7vVhvamm1rJTDcsrnqBLEDGnNt3cQs2W5WKfzmyhEsmKSo99JYpLqNG79nxNLytSNi9MdmzkB5t8FGZhe4py7",
  "key43": "21TgVAvjmSDrii1nnqAF8cdDjhDRjks1i2kYBYHe4WkwZKp8AR9ykxAdJtx8bMCec2xsvoofsCAs4W2HvWcKQrwH",
  "key44": "qM8ZMhpBFX9qZtLLACrGHUk4di5L5XJss2VaSEfq2PhN73dyXxYzfGqrL6bC5QJfcmEc5zfRgpp4examXscqf73"
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
