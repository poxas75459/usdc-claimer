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
    "MSfrmhGLiKZ6TuwdiETt3oYuoZCs7rCEmRRN4p79Gw1L9mnCfEzkMxDfNGsXwanzpEhJmCGT9VFHNMJc2pApfG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HTb2DcyQL9utGrmdbQTQkgjv4F3jTJzBmxovgV66oeYF7Ehts9rkRz4LCVRu4WfJ8gPwyAzg7Hb7RJ9VnsTt2wP",
  "key1": "xXZ1W9Gt89EqtThfBzvZfoPTiFx77zQB7miNmwMKgcBJqyP8EpXkXEv8uZNuMinpYvFfQoTheAWKGRdXWi89QsQ",
  "key2": "4txPAk4t1XxqryKXJ5qD5H3Er1Y6j27cWzRp1HaVn698T8LuG74VaadpsLY1nq7d88V759u6ZjCLRbDQFpAso5AR",
  "key3": "4PWq5hcCLfSv77WVD8oRU7Sj6X4YQk7eZimrYuFn2wSN2Yrk46xTwS6pfZGrWRwNDqEumey4Vzx7jzMS11mnNYgo",
  "key4": "36sdFB7JXZJN6bXdML11qBzpyZ53NWmbkHQ8EbGpQTmg2jj3nkAmUxwK8kGtjTT1iE3j4i4gW42pcDd5eEKAg2Uw",
  "key5": "XjqknVaYSSvGBMejJ3QVkL7H14cwVScUaM1x5LWLBp3utxjvZT1jvJz1KDAtxGZeurhMNZgN8bPXSGMkc4cyPhV",
  "key6": "9p1f97K9uWYeP4nENLXpnHnAenpBF7qWqwu11cuDLAiQ81Q5aaGiub99afdnczgCeuDMkbjDwjmvJQrAAV3oY2H",
  "key7": "4CeNrBnUm2oFud5PENDnzC5yXBSExNhvv8qQkFJkseSVFh2DHaaZ23J2ejwm6KNyZppQ2qQL2eDhQGbEtXbv9LnX",
  "key8": "38xiwvXBGfF39vcwbDh7ZEGjk7yqEQtoMDYwhw4b3a4Bk1FadkWf27V6WnV4f42AhgD5dnWDozC2PwXEgAXJaD8U",
  "key9": "3jG6qdPvCnSezv61dqBCBNxToGQ3NvudueS9bd474eEKddbuxkCj3BJEbr5Mx7b9jsHjCbohViJZgW9NVBb8Zfeb",
  "key10": "4yvJYTvcvUC19FyQn36uYaCrPJVGZJUjE5a2zTudkQLoYdtR33dDLvkLqqz2yDJGnwC6mnEa9i4jJuXX4s6bQMLW",
  "key11": "38b6Bov3z1DEG13k4YiWVGPsoQMAak6Nghgyqei8RnaB5KLJ17qXBK6z1azuqDZR6wdfydJbyrDWBdcaV68QTkdP",
  "key12": "2VQrBNnUD2FmyRoLhQrqzMD1e43cskJHJE5bcX9HEpyd3gStC1BUfmyuiMfA6b7DjDBoYFJFXYbGUUvsZJcz4sDS",
  "key13": "2fjBmcuUVo34F7Saw6RDsLDVM92DmpNBRs1ZrEhKfmN3HzJg8JC5eYktzKwuiaztT9pMTtZXxJMFSavVsXx2epX3",
  "key14": "3zVTSEmSRbL3CpA7vFDaxUDZonojTXHeBsdecNzfFZeniA2x8yoSmSqZ1fmdbfpSvuZVJLJYzhyvJ62f25qZoE8U",
  "key15": "4BZ5mSSArC3bHcisWnzaGULaczbWb2nZ8bYzWzQbFqxxnWu5xBDPnZAoFfvZqErzt3H4LNFRfMphVeVJm2DbcixN",
  "key16": "3prpMkHo2YbFJi9A2W72QUPMmSAMjXEBkx5xM7eRVZ1n6a5RBjERqL2ACwu6ddutBzCiXwrLnEW6UTMfCB6PZgRJ",
  "key17": "5ZcVYey51eehdXYTPagyYkuT4HdEQiceGPkfEvpLBvxpNmZgjBVnaAevnT19j3eW2N3GFbmqGSobFFEHbpEiu2gf",
  "key18": "5Yaz8tuYA1VFVXA62VbsAjpf3QgSjuLSLsJYw4vFLxv4PFzE6rciMMzzB8iM5Q8LqpTcjeXg8DsAM8vcuRA9JC7n",
  "key19": "wBQDo1cBii43sVpjk6p9yHs8eJuYskspmoVrzW9CV4eJRC2JLqawyLY7feTdrtwwqbjACbqeJpZ7gzQqEVSWNVT",
  "key20": "MpEf98pNsE3AdARSGFH36AoL2XUVwhTJKRCJiS6w9NW3KubT3r8WFFPXzvfBgE3Sn8g8pgtDtFH5dhchAznNjBY",
  "key21": "vQRDbjyYmnJyiYr3um4A7PYnSERePjUbAi99qJpRipQeRDBYXDd8TtrJrqzyysRnrCH359wfLoC7rGZEAsimSaY",
  "key22": "3RPnArSU3wZYcmGQxdYi4cjHpTe949GC4CL3pacXyg8HmXxY9FLZ5Mg7fXgQAvJf5vBG4S8wgdcPMZGzxv4GRv5f",
  "key23": "33ypneo7MVe6cYRWFmnseQ7fRtwh6KraAfmenMH3hkHkVfiukT1jcc6nZQi6afhUquHWiYRN5TmvBeMRZZcCC9X7",
  "key24": "59VdoP1axFpufdsLxF8TPMpCtGjTHBFbhpSEufMCi4Tu4syKstTYVyZcDfAfTgzbKbdg9iAqXHqjSCFr17d921wF",
  "key25": "2eHHW6cJmvK7VdKM49WRTL5KAsgzj8frxigZrFNg7muZuwWbuQgZ1VsvzMRzyWa2WeGMPHrjaHP2mFCMvRHqkhqh",
  "key26": "HmEoVWLCaDmXd3CnSX1j96xPTtexoUrhjTQwPRoSDXqvpw6q4ZfoaUozkx6pgJPhrWyf6oofEVVncVW37qAq1WQ",
  "key27": "4yfbYEpE9RZpSYKN3fjeBsfBAAtMZiyucQankMbMgPVofYwXkhJnNh1RrUScUzqAVSw6iHojZhYP9cgcezJCqohn",
  "key28": "4qxWcaYfRVBdqPru1np2LvGFtw4Zs49A3PYLMX3yQzZQAZ9dJcE1vcBYGVxmf4oMsvLcvrFxnej5pJS3FFxqntFa",
  "key29": "44hAAJZDxqiK2E7iVeh1nqYt3ZWi6KdsB28WqK3eVbJtpqvTT95uhcCu2k1jiwFKzP3LrpEg8LWKZgmTfUSnPF2G",
  "key30": "4vWbecyKG7UwW2RvSctyxei3Wa1g1FU7kA6TmdQiVknzaFhLdTnsKDyxQ9m7EmGZgdwLTJqX1B5P1GAsMcEWSqgi",
  "key31": "5GDfVN6Ci83iSU478AEL7HNwRUQaB9EGvvqdr9VMkB1ESEwKKiJssNP5x8WXKgBevgoDLpuBmNSbaygJC1bvaDf9",
  "key32": "4SvHXE9XvoYoy9epTwoD43ASBasLe9Aw5rNQc1gttXy8PvnfZ3L5gk5Z8m4fDmCQses4zEesbUgoAE3bao8CvunU",
  "key33": "2k6bJY2AnDRyaxZmULpEwHyBYyChZE4rYBNLL85kU1oydpoZwteFNQfB9SLKVct5XqMt7Tf6J4kRbBd9WHUZujMN",
  "key34": "4NN5nfiwRCLwWZfe3qiYE9924cMHxcWFqS2x2ghjtYjdrW9nd7MaeyaHqwbxk8v5HBVE6FjJBw4PSeqQWibztBGL",
  "key35": "2cULZWoeC9Yv2mdXAT24NGswnRwbQoUwsMN9LiVrVYhiGCu3fwHEdVWSiyKZGHZwnjYvkS94wpt7NYBhidxmzp1Q",
  "key36": "2oqgch97zTKh2G9dJMLFyyt9g2Pb9N4DWaZQ2S8bAoPWAJu2CZqeBMBWBUrTcsZywoDKWzAoLsVSNUREdWhbDPra",
  "key37": "3ZnVHaaSCDbgqeuR8oq7o42MryNs12tCheVAWFejpZGMsDwm7SMQsekBNfJobe4votsnH9QFURFGuCMWX9aYubgC",
  "key38": "2tk7r5pw97kBw2zfYctQC8oxh3kju9rthHZLdb6EMEqBidrNL73mbCCZg2cdEmkKVrqCGDj57cDAVAopASyQ9CDt",
  "key39": "3SRpu9SGQ1KxPgbMiTH5xFZm3DksYzgpxQqwvLFTbP1NEEV6gUnPB1ayn8jCM5XALZaNBFRpSVfzmpFj7mMBLzmg",
  "key40": "31kmrw1efZYuNc7ZshCtLidkYVfZWuGH1vuf1afiaUgG4wLZRRSVWxgwUHzHMgQ1ecY9AbRVDeZ5WT7qQr7Cw9PE",
  "key41": "2dUBjtYqXgBvRC18rPpA46tknBS8veAoqTEfGvZuLD8htxHj4aFbd55jDTsg8u3P9iLbf4opUHg4KwjgHk5oqUy2",
  "key42": "3xUhnNGPWeYNLrfNCFbQgDtZjeF1MQCFc5bhhMs9HwEzcy4roKQbbHiZD7XfwrRMq6rSafoknaSwmGXRq3SdP6BJ",
  "key43": "24PChrEES2STo5TC7ARidZ8w8NSSAtFsjPELeY1vBfU3Yiabkkb7oD3sAPr2YRHVb91vZECvaU4cpMoxpxqt5yVR",
  "key44": "CB9dJTkcjXjKsmKJXtarvnmS1G6LEAHGo1Qcc5ERwPCvFknDuWKdWxkyc2JRY9HcV2nz42tGUpFCqwYRDPHMAHT"
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
