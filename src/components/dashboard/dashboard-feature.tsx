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
    "ZxndaS3jyv1RyE8U1N4hpBvMP8RFFAmcqQyboXdJLURiQuzgAH23zVezfRrVrxc1BTE7r1MaDPfGQeu2Xgu9wgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bedq2opzmBpKCxeLAEzK7JXZnTPCS1qdqnHWp8ErR8LPu5zpGqB7a1f5ASAyyJqP7nBm7bXNJr4XtwwY41GEtFP",
  "key1": "4V5wrzyCoVR51Fwr4bs3VuuVKNm46FgfErz4nMH3iP3mcyApibqXVfZQQsBztDH9UMDtuknM3ivRSEXG4sUnM12e",
  "key2": "NYmMLyoDLr1bDP4uijeGf1neTXNohxjEKpAoxVLFFjcnq9D23qwxLFBfqTKBf667SvMDbd6G3QyRNxStpLXGkaD",
  "key3": "3aPCe4JH7QaPm7wxTRmwwLoucC4ty9ARo3meZjRUL1kd5DreiCcVjZFSsirM7wD9GmMHMH2wiq1v4Fr8VEknNbSW",
  "key4": "65viMD36NytBVDmE4JGsHkGMY4xejK2BpRWmXH37gkxZTpV5Ehq76jWRuub9ETW5g2jhqjpJpxQ2SM5NqKvceamE",
  "key5": "5R5EYeMhMezjFtKBnnvDqp9E458DYrzFdjs7gcwTPThoGZ3XTx52wHFWwzjypyYqgDA1E8DWDyfdgujhQ41bmtfV",
  "key6": "5qTaghcXdXdYjAAime6CqzxNvazys1Loto7pZzLkR6qXW8jTYfShFUXxuZ6rZZLceRZoR3RjTEnVUNwX9NZqMjCo",
  "key7": "2GM6Mp1YQzWxooyrjwmimuuDQBCNh42Q94vJFrRz7pJj7DXK7hmGetEFKvnWECyX3R5yj71BvZ17tZ8tzb34sSJc",
  "key8": "5KqW7XWujGsEBsmPymT4ixqBDAhEYuagAQSRcPD75oFYdRZWvZ69BNwWvf9QsCSVDutsBw3NPEaZVbwFZz5z8PFB",
  "key9": "4MVU46ddFSwFSFMk4aMB3tWKYLTYp3128t8TreJSMwk2yGohf9VmB8y1CknmSdEePT79viE6p4cuurKZyc4BcJ1D",
  "key10": "2tKub9VX5B7PtkxyjXw2hS3jZjGgxmcKGLDrS8QGv5mo2yF4uouLBBVosSnu7swarEjMHBDTBYXPomGwhSuhXdyR",
  "key11": "2b52coW6yNhmReva8E4jtJTGse5EX4NwNvFqfiBUmhFDbJcwbAQs1yBTdgJQcEZhdSu4zzpeS8aWnH6CexerYpmU",
  "key12": "tBrwb1HsauEHUibxdCD8yabUjgnVeEwfYDckQ51Rp4Z8QRzXPfXFrugGLcJkiKYka7k9xEJg1vKcYeEUKTrktTM",
  "key13": "3RjANQghY1V8PEmNiYSeVtzun7wuMLfgxMHuz8Yh15Z6KxqJzWP1XewTUdBu4mVM7ySdFTZg1ESbXMq6zENKcSTv",
  "key14": "5xRqgzwn5dPGx9yo7vuRagZ4rwhdj2fCRQAc396XX5g7UXZnzpQr94C4dwcn4SLqJbaZofrLGVUTQ6vjjQ6VtatQ",
  "key15": "3obywWJKGJeAL4ajBhovKWCTYenzpKF8Jx9RNeJkaVohHEaC8jzrp27bvShEy1d7n6KkCtt8oVwcqajcty32Kehi",
  "key16": "njNjEPMPxxPBK5DPnjLT4pkmPGm1RavsCKL8fasmudm3LktYpagx3gN5c9XxYj7mt8ScCa1vZeLBDKqSKgNEhnD",
  "key17": "2t9gm6EHDhNU6ubiJcz4GQZ7wD4GYhfjbPEttS7eUs3hRdQmJvvfyk6xKfMPqKLARoP87kGetE5X8hdz5HytxiU2",
  "key18": "j641Li9TCsX7q4C1ANA9DoXuhBGymVV27peThSXMT8yFCFjLoTkxHT5bxqMFyT9fjUtUoyDToEcpXYVx4WoDWLJ",
  "key19": "3Q8VL9f3aHFGehooNto4vnC6jhf24zvvYvePpK2p47qXC23TDFMVLzagFwaRaeyNY1tpX1RQW9s9HgLJT2nzzj9X",
  "key20": "49ZK9DnznvWQ3pnqj6CjdFihdcXr4WWbJB1HaBDswNw6EjbST1NQ5sXpTvLNvD2BuR4fAtqrtYMcGxxvEdrotNkg",
  "key21": "2EbdS3mwxSsMGy44AndFEG9MP1mBv895zTwaUAajmNBgNzEVaVscrY7Q77LRGMeNkDnetAx4BZ1GG6jB2mMJBURu",
  "key22": "2YufiHBGLFSF393EBYcq53BjjNL5nWmmK9ep61H4BVpjjMsLje7cXAMDC3TgYFWY7snoAEUhqVutPvuCyTNvKwe3",
  "key23": "36EbFdabMyktbk2iF4YiyrmnnD5u9eC2RwyESBDcEvxsu5za8ZuJU7CDtdNXCcBW8isdeHUcdnsQtozpUSjT5aZT",
  "key24": "3Z3dkYvvgygpaNEsAjQQSccZTxHfiTKX5VVZo379r7GHtLTuYZ2FnVRd6s19PNBWxn6jpWEvoQe6aptoNMGT1dfA",
  "key25": "5bf1WPbDdbPvNZFLag7okDVC9EN1RV6Brnd8biD8FyDrfvyNhrGTx3AAi8fY1geSedePKNAji5FSMp6aewuo9JbH",
  "key26": "2ACSrqJYkAH6zAUaJrEbgkm1YeAnXcy1yXUt6ZyT15u9azooDkDJUDvx3WowgNbDtBn6tQm8Gg4W1gwWz8znyDVG",
  "key27": "4miHak4H5UWfz7pRBNxdVWfqavaRLZNmRVoBptgU5Yt3ohMLtoRtW6NRpWEaT2RYZyUrQNxmiMY1DNnLQa1qWs5o",
  "key28": "4MAoQRqbzio8mngF3TXFWhstRDmZCjtqHMc8P2tcFPtUCeiWFbCZbsp4KxLUvWFtk9gqmhdYG19qrb98WrRn3knG",
  "key29": "2EAHgd4gjdP8i5dj4MjBrXFqHnXqdt2CSUWSwcfX3iRUUE4B3eBfuvgXuTf6bFftpobfmG2EFYkrj53AjSBkxyg",
  "key30": "5WHSJQmRrxEdmiVk9HVq5JKkxJJkHqevRoughtZTAJUePvmroKU1qKKMwyKbjNdhoFSbnRitnp1aySH765EWraKy",
  "key31": "nZmonHFwhV9R7LZ1xGfiapCcenYcPTKuiXPmTPqdjTbfsTgoe4jWUw912kPYereZ3j54HFSmxosGXTz5C5ktYR7",
  "key32": "N1jY8Jq8jwU1RGspi9xmAyAabr25iG1QYwyn2rbUF5p4bk4hnmGNWadSj3SgZ2NYLupxESqJaMHf2UayN7tmm1v",
  "key33": "3RvLBTuHGS75PABkij9WhCrNaeWcPuLSa4QAGvxUjyN2GRcN3jd7fHdRXtJ2WQV2YmbCd1UWdrXPnN8hXBSaYD9J",
  "key34": "8WpwELjvTCdmBoWztcDKYhtrgaNouBiCnbqHt18JMQYGGMNi2XssSPfDwmRpDCi49SPUJMDfKYwL54RcJRWPtSQ",
  "key35": "3GhhH87Pgovt4qRh5EJpofQ3wnN9JSKPHwa6icY7r6CC3mPxGVgPdnXmLY3NAzukxszbjnp5PGLyrzKGvyA2GAyS",
  "key36": "4XaGbQdefGcavx3qeuYdNAmvoSk4EXv2rCfowHfot2J3QwRBFyPqXBVD5ApsAc2FijPkGjAZbBLphnqo6UuqSmnc",
  "key37": "3jJqV9D8qtbqb1h2j4HWgzounzvd3gZN1N5Yi6X6ifFmAWEbYaCzCa9ZsxHy6ncntnsn5b53DhCXzzV5dQ19H6EX",
  "key38": "2CZt7LeJca9UXYJ6j3bG1fnHL5H5gHZnNAfbri2qzaFnAUbwifdFdouoD9ZoXups8FMi3U8tb5G7Km6MARksxwpo",
  "key39": "4XivsxHeXdmmSAsADjtoY3UKmZDkerwtWE4mGcynhG39Nre976rU2Apruiub2VNMAEgwWsUyTtEsbVH5nQ1yotBH",
  "key40": "E8ukMZA12uuw75ZJ4XdqfGwNhBwJTULwVazbThF5Eqb8yWMi9EfjUTHS3HJFwn2aChd28qYGDJFV6jSwjaoHA7X",
  "key41": "5F64qSbokW7CrmidhJy1FDVmYCU6FvUPyNeRA1mAB2fniqZsXayLwQBmnSEhc68eZjeVoV8YGNrg3y49DvoE5M4B"
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
