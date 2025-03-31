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
    "2rCdphcqr81k8pGnU3vm44ux9Qy76VFW8NAjo3ZGvyBUAEX3cpAHNouxim8pAVBLAvb1fVDC1sEUmhfxfBhDHdd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HVc6EoTfuva1BdQ7EZgz5XKejohWjx2uYYofedDfBQDNPTrt2CP6nPHGiYXWR1qFwwueCjavnx4b99SRpy1Zm4",
  "key1": "5wMiNP9k5aG4587KVRJVTzYvtZJcsws3JLk1yMRH4zBYvDs86W2dJ3PJoYgmTAHanCiE2T2vdjcHHQXFsCxMC42",
  "key2": "3Vf9GZDR5mLaxztu7V8YDsurRudPbRUwvP6SmGAnbGBGj4JmhB8diPSEKQfSd6Abvz1RhsMmjBsEVAYxVXcr4VFB",
  "key3": "2RLys6G6C9kjgi3E3xMhywE5JmsQdTb4PUN3Rjr3oz7w51cAMHc32ZYKSia3ugzbx3j8j9GT8vn15B17czCdDJqM",
  "key4": "mHnMcS5gaj8MGcqFVEKzcSkHhPx8jkyZj2S4BSKG8NxtBbqGrrbBpwpP17yXgW4fHAZzBn68d9DEekoJtFyXMjJ",
  "key5": "2ogpDCMeBkt9AcAbyUG6Ye36ihMzX8sPupzsfDBr8HqZseeJupXBtb6esRvcRvVx3vqn9S6SJcnj1aiq1Q5FdE1m",
  "key6": "265Puf2SGw9ZWKkrXvxjykheBkcfU1s594ZspFNauw2aBphqy95xxdZHRuD3NjZXz84BDhVyL7NwAiK5xNPZuRaW",
  "key7": "65dEHyjoP5uV2QoKhHYbgRWRFgGGJc3Xf2sBubjNNikNJppzHvocHJMDfdpqMyPuDoMYpsFpC4hnZDeAbwLKCuzC",
  "key8": "4pEhp4HqJHTRjUdqk9xmSbhL3A9f4HYPRq6Q66sdnt61UUCzSvVfCdMm2t16xPnhvocKQy4AQKYzGB5VnrVwvSAE",
  "key9": "vBNcJ2Ax1nozx7aKeTTmWU439RCJH7LN1SNFXvRhVJMZ7MW12jvMoNAqt8qExYiiaZfzSCVXwvNRWTqZQtY7BWJ",
  "key10": "2n15fyPVy4JjUvPh2nUhxc195jWyosTkXXZYXoQ3LRdBSmifGJvTGw7gs95YwY7K2mdxjNELFjDtDyJtYGdJpNek",
  "key11": "5H1YHunNhGYDtGxa42HCu2fadFK3WZUZNRpHCSKorLzbxz5zpRDv1t1aLZ8byVT4ivZtoa8YuJiScn3fDu8L3Zy5",
  "key12": "frp6FL6oJQeZEVhdrux2gEUoXKUfRuywhnWnHqx1cqFPnUvHLB147MQEyExgAuPvJ7zWuiU6w4wmbhehbBbhMVU",
  "key13": "LDUBMMfiPtf81gYkMPqRpKKHJyM5kkcWUVC1URZVBcBp9jHbtK3ZVNYHuqTZGqx5SeLkSyw4ZZWjnXaChwnTKDZ",
  "key14": "2mTspfnYZ3n5vkjMjKsvFyQGoCUY8wScygerGmTaPiC9Dsf4TvUhNvd7tDJ64DHkeFRjKz7FCW6QQUYgHCswfkJd",
  "key15": "3pREyQZjY3oN6c5WpaErWLGF1514AaQfG23eZERfCbwqAZ53DiP5ykbnRiDhkD91MGg5gzh6E8MmHnnjwv51SbiF",
  "key16": "2h3n6kMhdrUvgStGvkrnzwqeEUJTPqn9WziiKVVYxhqC3EYWUQ8BTo7CdehtfmTd2snoXt1xU9uSHNsLmHNjNUb7",
  "key17": "4vNcXJkgnXEcNR9qESnho1h49nkiU6XjwfEVomm2ypck1nKWdvUYRAVCy9kJf32Euh54wXEPcFTavxBpoPi3TmG2",
  "key18": "vksax4AhzWjE75R3Ygsy9oUuJUJBBbUDcBzVNnmSdzCPPZASLRQQZzjwY8DoEpSKDcXmg144XhFWFkQsq9Aztnj",
  "key19": "2KvhWx1FJceKZbut9dymqSzPGkqtj1UfQ4vDZv1QUVodvFqFAA1ZiaXvSNWWXEwWLB9nemhsV3TFFAwMAQFgC3ST",
  "key20": "5f3e47RQGYf2KKjpkswoQXMon1fjZF6WLoP7VEAuu5zCuezcFEgWwYoLRFL1Tq4xGn2P5EeZGc9QLYTDJ7w8TGhg",
  "key21": "2wajCRRgm5ZsiAfTGRxxXxXnvK5oGf4zJzRcJmhd5otpPLj64fQGghGEnGpRFdZ3CMXnoZLLb98wstsy4uDPkcwV",
  "key22": "2wYcQorgYLBo5qDCJLiMT2n84GApzXA7L5gWXgKrD9S5guPiDdPkUQ9srJde4r7GVrfip7c6AP4ke9S17Z1dwDs7",
  "key23": "uqvKJJwQrXdTDBwPmfZyBDfRLAFsbS66puZxJJ6LCv6xEYMSmdh5EgN13vyNeJn4dpg5LyguBxfo2TqDgQKwVXG",
  "key24": "4xMhRUSadgecuSCawg38SjyanW27GAL8JqkNUVckQupZrRhY7ARn1bfFcHS53motC9E4EWwXos7wu2VcotFA8KLh",
  "key25": "5NFg8RMNLxB22ZCbUAHct92iaiN6ANeBobVy6UTLhu14Y1nqpm92YtTkdyzGZtqq75cJtC7Wq5TdveBTrWzmm4GF",
  "key26": "59CBj8ehg5hrsuB9qeAv8atXiG1czCDw2HrXm8iiVKtSkmR4aQVRCBHiJubNgiTGUbdh86zAPbkgBY571xy9UQAD",
  "key27": "4jjiKxcvtAxXCpcK9Umd58ha6sXZKbQDBark96UxsmGTKKWFeKqXXrQmsXHDcT3awPpsHLuh4K178YGuZaUYPDzw",
  "key28": "4BN9vUSEziVnsp2Q7R1BigQgR8DB1WQCa5zYj2iLTFZjKmcGsTxTturQMtyxWkf6CB86cGupMh7HiRiwa4tL1UhC",
  "key29": "RHv8T4KE59tRhiFF5u4fMhALPmTjbA3AXLEuPBjMaejasiVzeqGmCjpVqGbNJqVe8xqnL8suwBv8XLtDqMfxzaQ",
  "key30": "2dBVAsuLcGJC5S27vYUHDAmbXodvYFNk9wu9WvfQzsu8BGz2yYCTCZdtN5oKLiuiaXQdzSQTh5CjeUMK6j59pRk6",
  "key31": "3ZiX9MajnnU7smBVPRhjrnypWusR1BYUu9GK4qtFFJRdqkuYw5ABK5E7SEYVaYcPUQDzpjGNqmPS5NuTAyZKeky5",
  "key32": "5WU6shjSCrq9eVN8Bg1zPQM2N28j8Xk3P3F5xXFa7sZ9N6FpWafK63SXFwbkfc1GmTagqx4P7tS3JAmL7SYMDXPH",
  "key33": "2B8t1ZSyP5PrCmModXAQ3PYt5itBF8GoJdq3itK1G6ZHVPQMR6R8QCEouxnwWvyVWEPi1LeWN53X2v8eRJ6GLZ1K",
  "key34": "3b25Hs9hGP1HiiSfQbDgSQj927iGkq6eXuX8n1j3whdMquf5h9JzpyJXdqLQqaSNsuMQWprhWYBksW41gA1VAFut",
  "key35": "36iW9ru3obutf39vxgrX7gmrxZak3tuWd6Et9Y7sRPJsCmzhUBW3WzU8cw1jGg4RKUXRM4g3NqBSYCtUp5rqkiaG",
  "key36": "2p5fRuo7xdtdHPdSC8rB4WMRyHuss6QuVTHWTimC9Di5JZ177P9WwQQXTc42s1kB4njEQbe4P4V3spdHstdhFGJ8",
  "key37": "3tZLBDrdTbZ12UKTiHDQnFNuNTE6N6BTHSsWQ54DK7ec2XheAkmfZU3rZFKGPFgLccKALEAWvuavggvoQfi5y1SR",
  "key38": "5VesVKV3XEJEciBnAyAodGSmpB3HBnZhLLUuJEDAVD2UhJRxwCk2yrVrSTp1MwS5eNcJXdoC4qPrSkH3YjA7mUqa",
  "key39": "2xJVSUY8Ygj1eXypRQjUzznFgUbLa9Didc9aGPjejp6YPjUnqWNYHuHZQQc82uT1WLghVVug1NYAjm9rP3UcgQra",
  "key40": "5do7TZeovy4G4uTx5M2hfzX6gWrybu8EU7Ljn1GHY1YrLdpAYnHHS7w6LTDSoaVSc3ERmrwHCcj1v6zibixDqYEp",
  "key41": "4mA1jxkX8xNjFuKSvCYDRSCkv2MgBKmtEtyUUmmaVrbubLfH3dGZqo1bZVEXSGjqVhwmUARSnktj1oNhZqDXiDPL",
  "key42": "59CLm98bBb2WF9YTSXWP5TfdtZg2UM5TKfGUKqiGybXMbDdHqQxirkF1iLXikoXH7eQJvwBGUiqjPW7TH3ffsN1b",
  "key43": "2i3Guz6phtn9hxL9UseBTrEw2jqdassCeximHbNd7cZDt5pBZaZhUGhLuy1U7JCLWnS5nfqwsDNceeh7phVjG5g6",
  "key44": "2p9khK46Q1dt5HH11KiweDyEu9Kxef4bvQtDrwFA8bFzUsY6WRv5Jf3vhcPmoqMsiicMy3r7ucaUimSY8reFZw1S",
  "key45": "3k1CdR3kirMNPQzWtzqa7UYupaV8cWpdbmzLC856cDUJbCSru9dHuJRkMarbjbK1XNLVLmUWAiw4nrtBCGPESmdv",
  "key46": "h8bsEHZXGxnV1nNCMMnGH2ZFfyYSSHTqGUrxDCmd5gYK4s65676oGFudLYqDpUcKiAe5bQ1VUVg6rtcXTBgNWxG",
  "key47": "586wpo28p8SVYzSXE2eMgiYEgt2pKepeb4f9Vb6Nn3ereGkLpiYsx6QmtPWXpqS5ZvWtKZSPvaCe7yY6ZX8BbgBc",
  "key48": "3e1RQ86qyHzdMtteroxHtHPTWPvKQ6ff9nDtycnmkqt6YHt2z7Dejzo4sTfHkXbppJwAPrmNnxHVyfcY8HhegMsc"
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
