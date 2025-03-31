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
    "5cbhSYsg3GkGUgAJsgPWqm8zKcBVBZYFsppHqjRsRMG8iMKDBangMBCTnCoe8YwRCQYGfSu1hdQpy9PesMRfshwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BtXC6cuYT96bcXCGokikRDX3jXchPMtBHocuAbELhEiuKJNNCvSo49KL3wKmjmX4HfqCroibopqjMkon85e6fyW",
  "key1": "4XBXEN97Aq5DGdjFQHZ7ug8gC1HjUTMdQqMe7CMMFAePABBZGg6n5X8hXsiXSz939zgjLzDD1DzDTXV7kEMCT9DB",
  "key2": "5a218rurksJ7eNUzYZSShXgyDgPUQSJFxD7eXRT6PrC7CEJcysJjhg22bQ3joQoNZspaJxFvjmaYtrtUCghNGcG6",
  "key3": "tSjH1R1LD6gmxVAbu9eRkt16T2vmXr4fHTg5N7BYpTY5xnMHjtZ6QLrQBTJ5Fo1uYYHTRAdX25x1DDf6LWsawgC",
  "key4": "3pGyjScYY8Wf3VGf3cF3vfy6pmhxxYjKdAapur8w26kPVZUroM7KTbpNjcMcoF43cDfqPXVkB7hYqEBVyTT7kBGY",
  "key5": "EnBkx4DKDsDHoYhnjYodGuojyiHs4jFcLkKZePggJ4LCeJVwxhYXPcN8unFfCe8hrmGH5kCUCLyniV67ZbAejHx",
  "key6": "3RLNUx7SGGxfvfQyMSEexLF5cMVruzcRnxD1fm96afVfeMTpjcpcKVPqjDQQVuMsDQYWjJmmvT2q2ycrmxWFstyV",
  "key7": "2ujmaK8vwDDxYDooEq2wgiNhr3GrvMTR59AYhhF8dB8oMHV87r6Vurdfx1uqtAp8pahgbGUe27RGUpwp1qxdzHxC",
  "key8": "25zagCYoQBmNdairbAUeGvg7zuTicAd14ZyRmZPP1NZT6cGGBDnfAMjf32dYYUqy1pox4w35EekV3i3pyEqnHiXb",
  "key9": "Yr1guuAzZiqfpQmkbbRfNjuHt7FBrpELnfKT2q9vBNhSo8DBfY73bVPV37MEBiE5kZNb8djAQBYeeCDFFSvvwWR",
  "key10": "3AqxQzBk6iuLg8ntmN8KKX2kDJDCjwjiQu43U3ZMuw97KHs3XecAJKrxNGbYrJPT4oA4RhQP4P9o5ke8xU4wHc6G",
  "key11": "26Zr4Lth7n9tfE2y4MHbuVMAwfZsUNytvi379NhuB4BuJ9Xz7y3GdHuufuJWQQnbd8rX9L6Cq3NZ6Losxrq9wUZa",
  "key12": "2r5F8s5jNJ7oJF1AZMyBjxL523mjfgJbfRQNRY5RdELukyKb9jNzj9mL9ZfJsDTeWHYN7kYWkjH7xJKQBYDTRsps",
  "key13": "5AoBAXJAvAb227qYbg9G3Ws8ZCxgndBNjuq9nTz4SjKEJtiqnKM3AtBtgmYNLVRXjquPCDeGm7EuTYBNDACotm4p",
  "key14": "3KUxArmKgXjmbtUx6QDARTffe9AowM9Fhzx4Nu3pQUFRTSEn4Nk4jnHDtH3y2MWwLYpo84MZ7wediKBhRXWR8an8",
  "key15": "5MQpL7P7eXM9QSBeSQBfxRWvtMQa7D6z33hRobAYq9eK1ypRD8L8RNYcyDAw2TZWmv5tahsRpSL9j5RTZUzkfZjF",
  "key16": "3j8wDr5ZEjU6BhV7wJboL84ZSgPyCJ916GQfsSoo13hjtdWorcvJCj6w1KMjn8Zb239D7g5NwXxwWbjejuxhCjjR",
  "key17": "55g22sWfMfrgpHiCPHNymthJmbMjSY8u2n6csn1xBC9cxfvLCz5SiSfbw1W33wPzzk5hsZtSKzbDdHwwzFn3Gn2J",
  "key18": "x8EqpvTzWaPJcbbAcETebQNhJtNibkisCvxh5XRt2bNR29J5mC2sYUWcS4bYvF9i14KLkbEKhzw1W9TehnzgFLv",
  "key19": "5VgF7JLoGz99ebNP6sy5HWWKW2Bc3nkhUXD4gVLW9W6o7XjveT11gvEMQcA1GQMum27DXaFWR86JqpD3wPpYjt9Q",
  "key20": "5biZMg4jj8Gt2WPoT8qB3praNDVn2T8bK1yV1LhUnz5sB7nMyYUAxDY4ZoPi9fWFSG3snmVpgCT2k779V8fesokW",
  "key21": "4juqx5NDJJtfYroATPrNmTRsctYDWJQLYbeCxiVr5AukP248M8fBorLPVMFEoEHfNHAdfDvvi3Hosixcs3y8pEvi",
  "key22": "nd4QsxoZcHnKvUwewjNQopcMJKz3HoBPdbDQTaTL27qKvxd51c7Lc2zLrHZkncsgewuyrbaSo3ui2bFBw3baFqC",
  "key23": "54s4XV3YU3wNHoNeP14HjBXJKJFisNZjDVP99mSQABqqMUaHYEWGrDfo3HgUeWgP581dpiNqCMASjA7xdRT16YK1",
  "key24": "so9GabxMoP9QvBKFaq69Go5nirTMuQSgBU688U18oBjQto9xBhVHaX5HQ4VGnd6U97KLrijh3qwBT2S8qWpdE8C",
  "key25": "3dbpwRS8FBdv8FZz7NZPRkawtYmmjwVVH7quXp5QFqNDH4KToLyoKc1aBdJwx4NZzn7cSSnKuQM2C5vbp1Ctjnbq",
  "key26": "AwyMhuv933CTWnsydqUbkgFRY4zEcNt1BG6EpxNc1M8xyrhMCTAwYYtCRGLVQtuCGCLGBVRHCyiXAQr9RnAXp39",
  "key27": "3L8Vm8q9qEMb3Fwx5qiRvVuiMAqBYRren7JZUjR3n6VxfaWpn1zeKLHrvJHddYmc9j2AkMm8tYgFD2k6qvjTfAJq",
  "key28": "4s9VttQDPbyudfbWkXa6HvYxQjCNNHLSYCRn8hrepZjVrpvACc3JHGNutSoFX7Vz65oTnpgwAzHEkN7dqAGhGqvP",
  "key29": "32Uac6qUbVqwcEfW6HidrhZTnBSDj4U7AnAm55b1odJanWJUmNzATGhVHQXoYt782cvhXn4aKAGT7FTDiNFWnsyT",
  "key30": "289ANzyt8Mg9mbj91j91SQknNsN5Jq6Li3PHheSrmJgYTdZVn2fMQS2n7WJZyYcgNNRLFoz3LWNyewHnYZBxXWyN",
  "key31": "5RQJPydaKSurT3e8NTK81HaWojjZvvcDYDMHFfbPxoQLaU2wGmcyMDGt2EJXpyQX81T7Fx1oAqN88qPaaMLfeA1V",
  "key32": "dymWjemyj4ciTjxR9e9efgU9He4cC46M5YrT5oaHddiCvjaYujWtWUA8eb5WqG86LyEAQawNTvKudtSho7NTKMj",
  "key33": "x23d1mX75rgxkZBdiu9qcSoqydTHXnhPBvLMXHNnaZsT82EDCy1FoG6EdVPQ5V7bW57JR8EzbdRfjtSY83AMKGJ",
  "key34": "3CdjEYyD5a19cs56ciMH8pVsjpjChXFih5HyA9yba3r7wws6JvcfVCX7txcrTezvPZNDyeojEgozv8HWwHp6W3S9",
  "key35": "3K3br4ZckeCFehMnmwdoafHBShM9TbvCNMAyyesWXbSnx9NgSuWcs89A2khDgX3tR6r2GQKKaf53cBvKJ2KmJEKf",
  "key36": "5pmB6N4kcLn7Q9pocLfPrQ4v2fvDCgLzbz3M3zHoUyjqesJ2ovybCnwMLFw7V8z2vQLNVBwBedcFZ8ccDq5NFCYj",
  "key37": "4ZjZCcXYoobXVfXCqks8t1YDLfvMfATNa3fHaRaPzxJs6xz1CxA36Mj9o1Xjm9weZK5cyn9CppNTV9QcaWQiDaMf",
  "key38": "5sfo19E34pusnJv9GCGDZz2hUS6tFEUmbKYCB1o8dJXDGKBoG3V4jpdFXYo7Z5Q6qdLz1SUXMQrPrqM4ZpyMCzdU",
  "key39": "3srbZ8muvbBHG1b3MxnZ34xKRjpDsnvxSX4LRDFsDBSALA45yAAwxA8hwtDfsXZdJXjgJW9SRXvs1JfdTxgitP7r",
  "key40": "2yFzEDSdJe69JL24nZcsjuKgrY3wAxpnmGEjxxa3M7ALc4P7Eeq5VA4WxDSo1dEiRNx1YEY5pwG3VuVwuqniWopK",
  "key41": "5BzAUnZPm3C856KJX3yoLrUFEkL61N1zgcux3cd17WpSjGs8uUXHKRPep1yPgQJoN8pYvAu1Y97CGhj3s6UXfzWB",
  "key42": "5YW5A6DZ2pRoVo6YR6d3YWRkXvmqzifPxhSx8tNE1K1REDmUXZgbT5KKK6rdqYfGWDgDwDybZyp7JSvsA6dFjbUo",
  "key43": "5DY3wPGVfFACmNE6EvdcfwKGtFPJWkVxG79dG2b1m85rBx2ecz9ydSZ3KAKCfwwu9745oFyS27iivGxxEqCGvbvD",
  "key44": "5WmVUhoi9BAeSUxa9EDBih1v4pmGud44h34HSCHwgmsWz7nZDgZA2mSpLA6unwqjETEpk9eoMxG7bk7LmkMd9YEV",
  "key45": "UWMbTSKC5qHeNdJqkpqfi5RQigwvZJrtiwgfPtBC9uzGf4yzSsHJqsVfxEDEDZAQR4zAcqsmZWctwp4ccDg7d1e",
  "key46": "2iobp4S4KpM8824pRd79ttHWE95ZcteaTgzJDVhQFCyHumzR7ZW6VB8o69VwCUrQqjM7vM5UnZrPfsVytSvKwHJL",
  "key47": "35dzsbjXt467BcBQi3UbYJHi6sG7p9jh5uSMSgvtqXymwkr8TaHbA2VjPv36DsWQD72xG4YFzvddvWUjZegATDoU",
  "key48": "4FRPcK3UhYKiQxvEPhQEwXPDySxEtq1SWr5cK5Frtj4Ng6LKTrfLi339H4PxXYswN3Pm9bK9CcEbu7F3SWRHzcTD",
  "key49": "56PProW44AoZQM45DdUVPjWEzN5JvcHn9beQTddfXgTw3mGDJorfBZy5TdN3kX1x5RWDHRDmCJ2YqC8SS1caMVs"
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
