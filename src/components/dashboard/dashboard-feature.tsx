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
    "5ZLU8Y99feyGS6dstzmoNgSbqWr9hJkMHRab3idtU8gRfPsKw1ZAHpqZ2JqM9uN7L6LZNYQUXTbvU3Y2o1ZJDJiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2saoQzTtQDQFDVqsBvDePBgp3GeYKNCBt2m2dcnkbhaYxeiGHHtMvmL3mjLQsjMDTK7gk9gLz3ncgnCG9WvThRNn",
  "key1": "5hCQoXXm5XbynCJ1DYHc36VY9GFaviymiMXbCxBXWuw327eKaQLZgKhrNcrx9mrrEnR2qKtcxE9UiduA5odftfmC",
  "key2": "bMr9QaYLYS3AKGzdTwr4P8F7PDRqrYhgfMRXdfLBfBUqLj4MgekhQ9v2EMhfSUoAVNtTGND8sEv6uiWqqR7S6n4",
  "key3": "QygWzPC5eX16W2WgHyDNjVoTVD74sFV5zmsVMGy4VeMYwwZe4TT8QdKDVTDmNZ7T1wZTzQpbwLbXE1V73WGxggj",
  "key4": "58pBcRrPRJgvYaitX5MkxoGUoBrkTEm2oveBa6kydsARmvd9bqZYfs37QECNGxpYg4BrtwJNnsQrCpfMWMDbt7FV",
  "key5": "4Kk6PsrXYrq314pJUzsxXsk4Y5Ci6BGeNuNJDaW7NX13L6dCZ7p9tARacsBbPXECKqYt6HavmH2JnFzWU9BN8kbk",
  "key6": "2iQ5SmRPqE1UZeQ8WuA7isJcLtoQyFFKYHiLgFK3kJ9rLLVRxtNefT1kQ7JUi7XvoMACjV8MPdKcAzLFivycFk3z",
  "key7": "5FnfknLrpMPwvtcNufsq6XJJWJ2mCK3HcNwKGtuepriVHFGJroLJHe8My8ZZfu27i6GcQRDdD5P4sBfxF6UKD1Pc",
  "key8": "g2MEofhvZJjMPEkKU4k3FqhxuruNCAjMLh4U5S97WaFFfJ3GhwoKDtTQHzznP5GDatqfZi5rukPmCK7qvARjTmo",
  "key9": "2uweLA1kPwr8PBdNAjD3n9bMG1a6AAKLJZubCt4DS6BYodB8BrPhAcsAsG35QmX96NC7jc34yknMEgEFbFJsLo8o",
  "key10": "u4drEV8gcHCe9T5oLnQstdLj8Fj7YErC5nH1BQafmCyV9yjEwn64Daskxj3t6kzKbLYUdDqQZaSC5cUt66MTSiw",
  "key11": "4oYwCauypq3aFMvh8hb6jW736TQ3cghgd3Vpq23g8m6upMPF345tvwDVkkopj27kDKS35UizSov3jiS1QiPegpWw",
  "key12": "4rd5DNTzi9QCHkYCvycXrZLLPVmWNVavY5xBdzN8wjy4y8v3Ne8tot8KSoEs71KtNwnueYKLH9u6RS23bjze5MRG",
  "key13": "4aXoj3ADxPywCqwFW9wgVmWQyvUiS8g55DGUN88FT2DYimj8jXb8TbhtBKyfDCD1JQYHrzd2eCBWEDzU7BdQeApJ",
  "key14": "WpC6h9YxDkAV6YGP6YKmsmyM8vkSf5rLxyKrNPyc3qVbtXk47g26Mi9TYxxiqjFnMcVZLx6Z4RGtfxriQNdRRLs",
  "key15": "2cNqKo4KzcxWTQi6X6AuThqZrsm9sULcjnrWPPKjREhbyc5pFHsUarryV5YyoCyTfBsnSQYUCvgBW6UQe25vF3EG",
  "key16": "2a3nFodJvRoeafYA2fondQbpsDWoejAAjEwVbfU9mRQ3SBK3ndA9Y15i9KALy7pamwZBrHgJHRSb9Wk6cYgWX51g",
  "key17": "5QB8LBZSLkWH1Yu5VhW6Ys29imLTC1uXiQPddoww6zEHFBWm5YM19fj2GJr6eAA8c934hvmzNGEAqsi3ywPHRuFM",
  "key18": "124b8ZHt4VVGTgkzgCP1X8PaceU7gTMq759ArbGRMBJzxa3F875y4GzU9diFfkxee4s5FryVRcULHoPNGYTCGi7t",
  "key19": "67FeS1YLUZT1DaxGkcs6yqGovUWCx3Rb6ct5Xwgpp19JmyAmoSJbUs4AatUMrqQj3X18u15z8ki3iDVN2SYGBhXL",
  "key20": "3Vmt6VhnGrbdA23HZANM5oGsXxSGJK3e3Ubrr75GnjnWRCPzyeknWERkdZx4Xd2gP1cWCsL9uqBs6jtwHTEUwzBq",
  "key21": "9zDj73Cv8buLr6QjiyGRcsUcq7Mb42bWfuVBVACFDrfyYMwFwuHJF63faUhqB2evFC8ukNwF39kJeb2mmujL2FT",
  "key22": "48qsjdZsxxsuJj1bPQYCcUcRUARsjs58TQLmdZfHJFAWkARwK3MmRSNGFzKAyiBxbpBvY8FPYEsPZ5HcE5VGZTm7",
  "key23": "2i6SwYEviK2yTnSGWfCfz1bdgyEB9meuiFJjcoSwjfbwmpHTgC3pd9tvzLKz3krqCZ7fGgxLVeD34NuYnw7XpXDm",
  "key24": "AgcenQ8aLK8yXWk6ZnTMVkfvSmqYekHeCSnPCgzuvS7KVUQspVQtxtKXZAUT4F8aFLAhtxAAbqju2N8xfyEseg5",
  "key25": "zeSkjR8cSdrAybe4DfybQmJmLCDDCSwyLAW41KZFSrNVnUWGEzdmKpWEjpXAjirtvQoSf5fwZxs7UWvr6Tb4ygK",
  "key26": "5U48rC5vRttLB4SCWEYjf87baVayHGr1Lb2QxyWWPaaN8xzF1gy6awpaQbUG73CB3H8nc4ijNFN5QEBZfczs8F6U",
  "key27": "5hhRosjVkCJmvMFphcNN3ZuRdbjtYNTVbHTCEVpv4za5mcBFHyC5VD2UTmtjMp8TipFVcs4rdwGburrNTYfwhLHF",
  "key28": "3SXHJWuWHAw2bKAtuctWtT7n8cEYphEtFs3abgy4tsE1ui6scbiSWvFpuQMxBvZZJDYYLWBVxStf39jyjdHDWmyt",
  "key29": "3VQkdEPktSL5skSukzaS9YuhM8WPJAF1jEaJFozU5PyGsJfX1c5Xt7m83mFtWUdzzjmigvyqDZELqvMaxpzKK1CJ",
  "key30": "NuNVvg8iUnZjFd7HwKwnu1o2heLDizPUEKSXyey4CsBTkXoPQv1z7x3ApHiRdJBJ4TCdmxKfgnK3omU726a9twc",
  "key31": "PYn6dTKbQb1amf7v3XM4ofNmufuq8MexLoSXL6gE5qw1v6EgZVBQkdNPUGYYKHndtRAYGkDchdAHmFfss23fFaf",
  "key32": "2DiyDduMNtHUJKhALqaVdMD8dpubonzU88gxLEeGUCbTvLQC4MZtWVUmCm8RZk3KdMc5YmiDAkZoKGMpwqxa5aRD",
  "key33": "2oavr4j3qXgcqFHUMLQUXhahWopZRghCzYscUyLzGWnGyMni3xTWiCi7wioNGcKfbytJPdQjdGtAWokDek9GYj8p",
  "key34": "5rp13QttVE1BasPduFgBMmxGCe4BEg81GsReBf9ZWVTBCBpdE6ptZU7vWKs6naunNk9TEqXyFeLceUwedhLGTNpb",
  "key35": "2JjNQRRaRi1p1jKQyksgyZB5HiZTs9WuoqoxwHb5k7Ygt93ZfZhfpjg655nR7sf1Rd7Ap3Yk4WCndiDeLC9x5K5B",
  "key36": "288cDktxxe52MmzACsDiFQtjFkk8CMwe63Ym7yfivFGV5dswX86icebsztVnX6gW8ZQL8LXiAt3GNP9Dmv6i9Sjc",
  "key37": "2gCDU27dUedXEjj2XXFUS55KHf4mba7fuxkXj5NPoa2kNgK3fvS2h8N4TFuw7jxxwdGvXnYPvd2jTqfrtsp289Em",
  "key38": "2n2ZrQ2VuyviiuX6mJMTSZ9JW9H28BKcvFzox2Hn72gtnv1ngCpjeAfVisVLPfwevKBvfQskZaMtboE3nDsv71kf",
  "key39": "4NfASFA6QVemse85Gvg3g5sxc7NwQAwLKfHhp34GuJcHdkYQ46eor7ZVWDaQnqD5rDyKuznpzpS5wV3iTdBtwRw3",
  "key40": "3oecMSHkEcuGHwiMbmhZPijFKcdcPMYavMuw5EbRzzogpKT8brKuzsw8w9JyBMWEciaNX2FmAoRtYcoSLVgU9MZA",
  "key41": "2cutzqHtSAX3GfBwTwT48v6sCcBeeAWRAKNrYjvW7jPN2weCNbwTCDZwNcG1ajpPjj4HjKFQHPWmTCLGK5AZbGD6",
  "key42": "3pGjKoawhwcmLC6RLXVAX6DjzWCMgtYDAXZxqvBPoa86q62NUBXhCwVQ1ivXuniGopKrwuN49UrZSQi8oWSvMBd7",
  "key43": "2pDgC7jos49GQE1WNfVcMrYazmVEKeGczL2RqMycKTu2osgszpyfn5sG6bdXdXTcDNyNJT4RYAzjfHQh8mGUTMfP",
  "key44": "2hmy3xtfDjgQNtjK7j4rTe1LvrM2EENyNDuUyK244fifHR7gRoXZqCwR1AnCaPgmpzrCp9NYzTHCB11XCv43K56V",
  "key45": "5rTRAHdihZviJcCAV9khB8v6NpXKiVtA1tJiQdmDrdYTXPf3ApYVyPaJ2EtuawhyBV7prSu1mpLxkZe3vbtWmmcx",
  "key46": "5d35XXfXyALbaLA7JVoE8oHoq6AEp59vibMhnfeed1pVugMM5t8LheeojFrxyNejistRr2LSKTjZHyvbeuVBXgpo",
  "key47": "2WygAo9uta3SJTy1d9V7Jr9y1qFvAevDWxBQKn8W2cY1BMwiGgTKAk5PiojhcAwo4XWmAMJPd1NYrUdTZJ4JoY4G",
  "key48": "39Sxbn9EDuMujvMMP3NE2Q2SVhcTTEKRh9hNf5GApaQvSTE7itg6zuZrMtuiLV6Yb2QLA3brwR4bDstbgMDzT7Lx",
  "key49": "2XZVFEG4dSYTqPb5X6AgW5CHgvJ8soNKKTZy3J8dcm4utsEXYs9WsMbKvVQcZPyBSd2an2v3VRRskfmPw7QkeTaR"
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
