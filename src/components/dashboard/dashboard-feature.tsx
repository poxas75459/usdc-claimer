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
    "3AXrVrDGC9pRLCN2Cdoi9vk1APd9SH5Uk1RyiZdKxUQQAXrJHUzN33htkBtnNdqKsbErmwEuQ3KNdxhJHNowFPhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iERLKQ4MxcbBaTLTSEXXeWU1n59YziUgKZaVWTZg9JoWnSg5crkKryRezQ1qWW9MbyfY6YCLAH2kSUnU4ymDzUz",
  "key1": "55ndMPnMtquqroqhzy4gd2Ux7egFyAA8xwDuDcYpZQ37o13M8fL7D1AkAwNGDqfpyitzB9DVMykTRTWU52PG26dH",
  "key2": "3v6x5mrgz415wWraH5s72gH2svGqw8y8NEoeTRpvVQQH1LhzM56xL5z29HH4kjoq14i8VS3bPeixQt8t5VBpYSXM",
  "key3": "3QftAPyPfaSZqFMcFzg9e39jfTUU6phSx7Z3mxDvgtx5cihFCNiDKqwHWSMPaf31bSycP3D5FFtuLdTfuULDNupE",
  "key4": "5tn2ptAuUQtfWWPuQJJL5hKYMok3GZciHxtJ7vuwYwjFz8NVypGdKz6rAAwPmXiCBjgjfshjaCAHxzwzmVbaY8zk",
  "key5": "2hGCxvtfrNwKZ9X4JeCLZQtipGGsjRvu1wEbVhmLXJF3nitw2trtbhA2dKQiX3dhtHncueXcxLGVw5x6UAxzn5A3",
  "key6": "2RtZzDmL1pXgnDGVBjji9jPfpNDyvpY73u5AtHv8MdTzBREkkZFRea6XRN61F8bP83Kbx4rC1NbAbmf1GD3DciCg",
  "key7": "3KLEXYSML9kwj37frVv9dXBziS5wYd2MD1N4DaQUVh1bgNj9fGvCBYAEJmgZF7GAar1GykNQcBL84bCYUbdh9KyC",
  "key8": "4Mtev9tELievnRZPSmLqN2rv8de1obcgoJ25ioQkMCyGQkz8HpxvgoDCyLmENPkwB3Qq4yTmSbyDVHdhKCuNQwfM",
  "key9": "6DKwEdrBNRLh43hY31j1CeGxRxpq8sGT96w5Hp2tAnRrmDjhR8X5gh2cTeXYUhjgwc4uo3yn473YUczRGXLLfvi",
  "key10": "2hvXnL7y4aanpAFTMokiuNVm9v5SjGjKRJ8X66Z7ZiyKGawGBo361krs4WXssriJnLnL4HwxhrEW9rJgJ2FotE8z",
  "key11": "62FVMM2p13bCDp1R6Wd4qwrpZ7sXX5mZNsk6HG2KCMduvzLxne5c7tx5SwJtnWFzffgNTkJn1xosMrHdSD3Tw9Fh",
  "key12": "2qJKqydPMnWQLmLDbEHcX11idT3YkoDP25R7SwwiRtAss3cqNecqtYwAKiAdhhShJ5PEz6LQeHu8LwaSmQNzYj3a",
  "key13": "4UnNtosxPq2RWyXANYmaStkZRUfAQr19UPBdNvcUHDXZ3F7VgxhRYuYahq5hd4P9eVQpeTJmyYbkHaxZVVHHDVGh",
  "key14": "32HVqgSYq5idEKcUbRWToys385AjyRNBY9NRv8YvbaMBzDmh4rMdgwKaMQdDLpLMmMJ5XLjGk1ykSAKUDaKB6UKK",
  "key15": "5kFv3csHcTE4v7LBfa6HZJvSL2Z9RDYMkEtpXXHApiZ6AMHCuPrnycen6vVxLoQv7WQeDBGoRNDpz6NTj5oJfvVB",
  "key16": "2sDGou9EQb6quBnwW2PMmcMzmddWf95cu868zeqqgM8MhEoqFLjXUViUWuZfMA14TjXF5KmLeJPgWFd6wQrozyKR",
  "key17": "3Kqf2dCcj3tJYFgu1MxQ6U8zKPWyDVfrdvxd9aqGL5dvDCtKTDmkkkWbBzedQVFntZarJgx2U8yhoYTeiLqRS1QF",
  "key18": "336Y9zba9zdy2QVRacmh1TnhxzrKMJ3FwCN49dD8MkXDwfFtBsZhAYSUodGvWPZaFp1ocyh7nzbZcpsyXCiBfwie",
  "key19": "3HUV6rfc1jtfM72SA5nCTm8DrrxYPSrW7uAJKpa3RJPvg9jkA7QtvGUw1kYXo8NNUoV6teCaRdubkdfXtxLkGmV5",
  "key20": "5CyY8KVzDCKrNVctBRb33cPRMK1jZiYU962GJ2dWp7zikmq4JLwyGUXp2befFRfftmpr6babv3vigSKm7VTDuvKm",
  "key21": "5ZmZkxqX51pTxBTMRioBoi7gbZxGmeZcx6uoSTaikPKQ7rmJSgo9ExnTiNELcaMwpENMn8bVc2jDvWc2cCUVLwMt",
  "key22": "4TLeuFCQqMr4BeeosF5SbjGafGRZdfnMwqxXrgsahuyzBDmx8txUMNmAF6TZ2H5pHio6qev5Zv2X9pEFh5v32Ymv",
  "key23": "5uBm7ZmBmFWaYaP3yzfWB4fZEBpYaGLRQPNktjrN3uKJbkBVV9DCsi6S7debBYVHSi5GmZJiN3xjeMLV7VJGjk9D",
  "key24": "5GbQLytu5EdU75icQ5L5TQKeKhXiyws5QmUx75L8q5oN2gis9HcZB5odh9q7xAtv1FDjwPSKtWmZehHigBDuTxFm",
  "key25": "kprnGGgm9pwpKWTkeLdcYdaeSkNQ4ByK3v8YqNrZCT5a4aCeJL1E4eevtXN9Z4uQhoZ958ueQpFHQRDxmSBEayH",
  "key26": "3GozxaQ5Nv3C56nFr1QRFghfomQZ4uwsz1KUoZtM67Wb1pBYMw3JPghEiajpBZe1ubtXQGu5UctwQmVUPd9UruXv",
  "key27": "3vdtshkAQ7bDYXxiAfyMCMUfm5YYeA5e3UfYc2turSncxjR7LuDnmNVNe8JK4b9TXc9ega2NwH4Wh4noknpVwjB4",
  "key28": "5JfHYWSfeBTUhYfqMzbofubr2ssDmcAqaWmoyQFzsxkTDC5m2FUawASh18EWTk6FTeX3dJXvpmaFFWvpSNSysjXH",
  "key29": "o248AZzbmQNMy1SsUPmRdaFDBasL27q1xtmuS4Gs5TjZLzZLdRhXJTwWoyFAbFTTL2U27mSsaEaVvapTi8j5NzL",
  "key30": "4qqCM1AXQcFVyrmfXfABGwzcDpHxicxq9eMqhKL6EeRepmVuKSg4BL7csswL5H8JRd6gdKYP7hBfJdLPGxiJvPRE",
  "key31": "2oZ7DSANcSasSYHgaaEk3HzMh2nzAz1qK23LWkRewNM6Z1ezyQiESVvqYiKD4ZNLGx6PJgS5Z6FqHA246HzCGdQ7",
  "key32": "3imnofnRkBd4JFFRzCKrBmLHnDQTaPhpLBcH1Ff9mABc1gEMWFvwx5E2pFuRDDcrUNLPbDJASdv9TV6bVv8vpeNF",
  "key33": "2cU9yy3N7A5K67Jp81nF2WhrRxRWu27zhgJTZAag5PJjpFWRVMTBfi1o9A4bAWKo4Rgmtfh6tvD6SVEEUMvcEZS7",
  "key34": "2X6rSXDjFkweMQ1B9nnfwksg78XyrRWc82Z9c2SFdyWwMrrYkjAsYWKT9BUX365fjuBXiyeg8kh6bKTgS8pcgVmf",
  "key35": "5djXwpgVqjWRJepWnbghmKB9xwSU9L85sgJTzw5KfGoi1Me8Jis9NqTN9XXaSRegxx8s7FR7HMTrfJFEoUhBBSAj",
  "key36": "4VCU4e1tcHShuDfaueChvVv9voiXq1Goguqvsd7sz9CeWAehrud2X58tSNECKwds5mfeFtsxENj6Y63WkbGpsDLd",
  "key37": "4BCFHVADZTxGLima589Nx5FD87pSVjeZ9y4g9W59mt4vgEXJ3BgQJtHPzcEXL8StXPY6QBivVti8xwsQJiwytKx4",
  "key38": "2kYW2B46SU8wALmYpaUvQJ1EHES8G84QifLe4ewJW9UDtmRXjZMowfh8kBaSn4S5Joz2jk6mQKGJbdYG5M6WpiJC",
  "key39": "rN4qNJj58ff2nz3DvBj3Xk5qLNDdyLH1LszcG3ivvE9AZCyw67V7zbn7fHM8xrUVFUMTHm3PzNSnBfyKHum4bQg",
  "key40": "4eUxnfWzAcP9ucLXx6m3UAdXirpKRRow3AUPbuJkqzYqzTzcPL8FPHteQR8bmUEKZTmK3d9a1PHzi8NGFJW2MCo4",
  "key41": "7R7qVjC3xiefZQmzPdd98v7oSFrCAj9J1tQPsdQ1aYdaWTJ69AgtCD37XY8HHpcUSCp5agzZRinRhpdA2Fo6Uxf",
  "key42": "3u7RVAZJ7GXAVi7PBHiuCmfMWbATWqWunuN4QzyCfBrtiS7ZPoqQfXV2W6wyFxdqoDTKnTFLFTXLdGyFXb3r1udX",
  "key43": "22j2dEW6QgbxbiGuEzzKNvqCVsFoi4Wpss5x4MkU8AvUEdQEsLdFxSXW11HP4oNdZ5djQfnqmJH4G9hNeXNkDqdF",
  "key44": "5JaheUoxR2DEPc9QtK5A82mNQUqicCi98jaYe5YHqspR4Pnhc8h9X88hfevzVMFzVRdf3gX7pqLvufjy6ygM9q5N"
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
