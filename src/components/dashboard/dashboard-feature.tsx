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
    "4UVaaMUpkUFe3gucGDGB6qwZkD1PvbGTBtguzyM3pCXkrcGLvCnEtTWdTpi3XNG3tPPbZfB5yWuNUQaa3EQ2mfkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyAj5rKSQNfwZc36QsdQ5cYRAWersFQzfXDTHob386Hu3Mydw28Zs8kvd9ezhD5wFhYesork6STV8fW2wj2AynE",
  "key1": "9CpqzMfgKfAJYPCTtQ5LavM6c1kH9SK6XDqvFQQRcsupE5u3VYMrUaUFroSaeZhyjuHD9knQWjXU6y6mc9rUEEL",
  "key2": "2KNSfxLaDfiq2wnbspFyUMohBpK9saRZ5QN15zm7K3ybCqaE7X8Qpa1dcVLRP7zQaudJhy938686fbFtbnA1TTh9",
  "key3": "rsnzXndetXMG52imk2fTAQFAib3GZafAzz5kttNt7HMdr2uYFkDckrPt7WbnG5mACRB9UGw4N78TKoyd6GRok68",
  "key4": "3nuwb7PKxXqVAr5fchsCQQmnyJB5fXWfBrSvZUzkfi9XCanA6rMC3kNbmMBFhPkYkcYu5rDuJmgM1z5v1EhiqSDs",
  "key5": "2k1subJwLHVWbAWSg4K2QuDgMVoWGwak47ytBLEXuC1LKC7vGUJXZWBg1BNtuRNzaxsmnDuq44bxyKmCYTANWGUh",
  "key6": "5FXp3JsYUhFpY8V1yvJGwpy1RzBeoBLLJkMiHUn7Ca9gQHPqCSLdP36cKidN8PaidmazPJZbWPfSK2L8SVupsyRA",
  "key7": "Vt2NJfVzLivovyPt4a82EdvHFQoUS7i2sPPtqM2ouw4NFuvrBL3uDMV86ScsnRfqMkGg8pYSzwRNn5qrWz8eaMs",
  "key8": "D6fydt4LxaURRdH5BiaNQ1P4fLzReguurZTJ8xSsD6qqhVYLR1wSmrBSfRVE1y92eVYmq46cbYpzBkqCx3CmKXA",
  "key9": "211wSqN6KW5ywKJrs5TkqNLR6oYyReraFvP817U6UGnhPcvB44JidvQN2yz9D2hnxup7su8BybGKkL43Wufgijik",
  "key10": "3QB5M4Ewvzt34GU6chokfoPNmQuQAabbi9CZVhGCnxNRE1BRc6QdwTczhHyi4xsPSMVa8g2sdqX7rGRhhgAZjuSp",
  "key11": "4M4ckB1r8Li9mn36Zx2MWJAEjA4EWCRFPSNWXtM9EpPAYc337XgcBWNudBmNeSstWo659f8ks6i6BA8xHehdQ8ts",
  "key12": "5nLcvQDURbJ6Eb1tTXagTFDhumQwRU3mQAm9ovythKpASgQndpHtYsMi1evfPMKgUfqzLVQMeBGwBJ8yxnLRyZEb",
  "key13": "Udc8F5VjEru2ij54B7vSpHWtxuTTZeuDex3TL5D5GCdBCE1Enk4JEntz5NU2ZDvxYR7RWNcvMxERM3moi9KUaxR",
  "key14": "4kmqosQSUc3rNszeqC6cD4LPb52ZFW9wXuvZCFZ6DTAz5mp6bH6zzBqAsXDNgASTJgoe5kGgvV8u9jNpKRWoDrff",
  "key15": "4vQb9H7hxVbByd5oEhMgs7dUnik5SuzSvrF9xt9zd3CBPFYbkNTf5JkJS98p7jzMtp2VijPwZ2MN8KUUu2qTgpF1",
  "key16": "5T2ZsnjLA1WQbka7pvkVKDm1ibXqExoPU9mMdiEUXxED3Pdc4TukrwEZ4nsYCzeHutEAR8GTJgQLdJR7RzxMvvQv",
  "key17": "2aZ2H73w5naUpkti8YqNdEPWXAJH2KME6NUPw3XCFEfoza5F6Cc9YyXRCZD1Yr68ygLWLKgNA4xQmuf1SQchSqN2",
  "key18": "3N2W1u5UVdKhamZEd55JT2dYkYGxE5jYaFFr4mkzaFYUyjbigS1DKJREhyPsLMvi1f1YMNQxDi9bmoBppCfmvcV5",
  "key19": "679RfawFfH1AykXMJYFjoqjuaT288UkESdMwsiAMkXnjCN7dH526XQbGzJsSNgFvUSLQZgdSs8V94cwReyDKMVy7",
  "key20": "4pvgNeXQT7K2Qci7m8ZZtaoqiCHKqTYECzurkTt9E5SHvNZKRXFjYVKmaqqoMpCX1C7ucsVgETBb9zRWESZgbJeo",
  "key21": "2VCzMek3SeJCgPbPHH2ZxT5nBgFMQMcLpXhKX3kcsLHcj1GNxmcc3DGNzGAUXz68my6ejh9Fvh8o2KybH1fcBbUb",
  "key22": "5FZmH6qSYdALsTXT8VvbPdRPAx5Pmo6L9rcZcbS7NygxE1utEqqPqzGhJ6civTj8RJXVmjyYTAhAUVudPPzLKCB3",
  "key23": "2LWka6HtXNqArQt8X7La95Zy1vqEGu1k3qTvYAxpqUprGZWrwoWwAp1TgiLvSq1WksC2yFFSjYY5PooWR5g4M2ME",
  "key24": "vPi6Ah6XTSqPCEpMWL4vZnKweoixzPkrsaodchXsC3V3fyN1L5896TfJ1UiCouvN59QBKNyi3Q77s1GuydYw4nD",
  "key25": "3cGof4d6m1cfoJnLNZ4vTeEzAQ8wFBySHoeoYGW6CQjDbQ6aK9wRiZZUdPUg1FKdHscffshkkVLo7VUnq985YVUm",
  "key26": "2kQn7Qzvyn6gJdGd7kR32nsmdWBUXY5HFexnNRTa3p5P3BAQhYqLATZrqNpyBsjif4N2LMGNiajLkjf1g22zaC78",
  "key27": "469WhKgPcf7Bj4p8BryuvASBe6ribMXG6Yd5592YFVKCYJ6ey8iBnjFKJbQnFHLckVKaddYbLWCnqy4B1izWZ9ka",
  "key28": "MJ7pzhN6ZjfXLwMRuK9QKRCZ7rz8BJREH1XzjE9FATdDEfXpnhuZL2EDw4zXfy7rBraDHHspXRfmGBtHHzqNKzH",
  "key29": "65ZzToKSNGGCu2krjTPhe6hMEguBRk46bj8AFEms9Xf6zTRWyfMg7wpSoPD57nCaVUhj9NGY7fvCAcwipDULhARa",
  "key30": "2VRaBNyr2wVKMY2LxnW6kSuejDLxMqzq9oBSms6HV86QPSHQoe5zXkWsTwz3UPuAF2DnUQ1UPDmh2jmNj4LeRG4u",
  "key31": "2WsR6PvALoHwiLJyfvGW6ZRDQ8QeDQVNNHjVwVi9nW6fhKFx3H7j9oiTYpP9HkPziz2gxcw3NKmXu4LUjNd8ZERG",
  "key32": "am9H3QKCqM8Lyyfnb7ZkAyMYrpKTDQoUYTKauijByhEvY13AQ8S4BU9nsvF5ELmb37rMjCXgb3wfdWL2ECgx9x1",
  "key33": "FKLRLSwrzt9cfPuBqZFw23PfqFwkBdhWz8bT65QkqXkK64ciLVHN8dfbJCnF9wBKzRmLriSoVupVCYZ6SfeZczu",
  "key34": "4DJ3D3fx7Soos86hVS8K7yePYauTugE9Up8oN1X99WA1DEBukgYKFRubGdZvZm5F9AgqZZ5FGFfGY83V7dnVVaP5",
  "key35": "4u6ioV6FkznFqGguC4RAnRa3eWiqMceBkrKDQSbZyyibcLU5RQTYPDRJbF88NG6zMugwEVBQTnhbjZ5YjJzhzXXE",
  "key36": "4gkoZHsY2H663SjEazUkTfj8A7onEbvuWgnKyKFrTRooxE3iKepv9RgJHWrXtiprqGxRiKHrz6GoVNuXyJEykDKi",
  "key37": "3fsY4KgXF1dojWJcYUp21A39VSgypwCx6odws8KbYASDkZuyhn2go2NLFkZYns4TvTq4svZspNESf22FjHMVnoEN",
  "key38": "5KFTdwR8UEVjVgf2EmSsUPT6KjrUHSKiE2gxVgePAhNsXukNtzdAE9mozaFFNcV2kMFjVm8aupbA3Gx2n7VyVC4G",
  "key39": "4iywPE7inC1RkGsA24tZTRgW9Y2JmhJDbB4CEZpzsadBKPVce5YYi9Rgpr3wmJ2Pwi4mPFdhuxvAHiTQwyXdVw8H",
  "key40": "3khU6pPnZzAdtPNutzJ2TjULZB16t2X5hXGMhWtHC3oJAPjwumUgtJ6PsaJVtaAMApr9nGmQMxPSeVRC74LeTc8c",
  "key41": "3CKjnaYoHspLXXyZW3mF5m8kWQFfzXtZsTcUqWZj1Cx9qi7pPk4uVwTGsHbod4A2qx8DC7rDJft7xgQu7V3pBtMm",
  "key42": "25Usycoqj7rEKURTejwoDEJrKrFPibDPmTCSem1eYLHNkzr5f4ryQMfnqtK5YuExxLCTWnWJrCKKiXjQkCizVLBR",
  "key43": "cPG9o5HyDNa5TNz8rBitaBVFcfdfqaqCR6sHsPuiauQWd6pyHZZxmYcVU4NAzc3UkzBCDjnHBM2dDZB47XiqHsJ",
  "key44": "2q23ByhGPZmHU4xWgPxe7baye16LXpqqHCQsMWdfrRSCQkC659tmenxF2K6s4qzYX34ztnMJCvp5jK46FVq7XAV9",
  "key45": "3aKEiDMHmmKnhcax3mEoTMk6cRm8PTaRwEpVPY5yVL7i8V9vLchKhguEcpL9NTyd94ericHHpQyLkLvg4sNaca8T",
  "key46": "ZagN6wFYGseX1rYntPDQtEd9KxJ3X1tXMbDsHdu1NKKpzHt3sisYZTsQiLvZZwJZ2mRJ6Zu72s9emt9TSxLtkDb"
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
