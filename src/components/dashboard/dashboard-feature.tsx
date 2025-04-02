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
    "3NoNEDPqMAHyygtf7Ptx4Yztfa8NmuEc4gismJ2oT8pe19i7mYRs5rkjh2mp3mUw156qu9CULqoWHEWMR1CeNfG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vA1aHggVyxfPUV9GVYeSSAT7jFa62oM4QUDrpwrEoJtgCM3vUBVVgxDBr32KDyAexVD2JXsormGV4hF5jyZzbza",
  "key1": "5MatAL5CoVNVr2hGCqCLcMZ6stNZcWCG8XMBXrejN6eqa38961XhmZt8J3qPABBHWLsEzLZigRFWHKEwFznFTzXp",
  "key2": "3GpKQpQhFaJYPWwWyH9hxdhxx2RBeYByoSTJLWZtfXZWh8LPpGw3yoe3v5Q2iPiLZ54GxsMcV3DpadxZrHW9zrqc",
  "key3": "2srmS3gZw4v1jiBZVJMtvGs6yNPUAW2eaW3y8D1NYEW1oaBJGt9MwPpLSJmTq2y5XG2UtUbEN93UAYte83hbb8iU",
  "key4": "5Np9aS5Sn3QexqPtmjitwuLJ7RmmYuEX9MEUiorUNnyT8XSGTQDm2fWMiJ1zZGwQb4GVivm9oJiaRiroX2NpYgu4",
  "key5": "4w71jZ4SuSFNdZtADViPh6oTzC3Pbq1vTnAreWpHSc6a7AQdBUmKqUivLusWWTHTFnC1ijKvKMLvuqKQhTyqwDnh",
  "key6": "2oazMYj57xsVYFJkhzQcXRJYyyEFxdG8Y5jCVEHC1ac8UFtsavUdSH2RDHhpLi8d7Uqni9YzpBi7Qu8UtHrJbjtT",
  "key7": "xYYjfsT24pki2yDnMJ3YJsfMDcRQKh8ctSM2QViKRmhnG8XSR91XjnG4kSYgoUmiJurugA9Dy3PMzMUfhfDsdRL",
  "key8": "2THWhe3y1X3KC6Jut6YsATYp2Lf3LajMpxK6ZUfomcUSRzYquUBuoZ2apSyCiA9mEcmT1C1o1YRT39obD7FsHVDJ",
  "key9": "2eU19dJNm5hL3BAjpY7ytpkcVZxz2L1XQfZRwz5eALLKP74mZDzZf1aUWKhfhvCBddSDdnMjhZYzUFueonpXimwd",
  "key10": "3ey65XaBCbpJiF3ruHp85yxFLGv3uu2GzLYNvJY7c3knJgiLJ7xAdoXiPCmHcyJQE9brHauvPreCjpbvcdoAouJb",
  "key11": "2mEHzGjSeJoa8Pfv4rNmC7DP9mRFg1ALTqkxBUubcMRcpQB7FahhkTXYGyr8oNNZ6kBZCcEseyZ26JjLZX7yLPVr",
  "key12": "3wGhcPPuUSaPtuxjwE4GKvHmLFiMJMm13c5tLbGvJhTuvkGbCWqyiPDNf2ZxCkFKySjVMQaT3P3TCfgYWSL2WJHk",
  "key13": "678p4xorBQuZ7jqxGX9jpF1xejDAd9J9ufe8EWL9VPnRTurXyxXEoknaYrqjw52goPtCea1kSt3meAZhcy8RMapz",
  "key14": "3wUhr2YFvZ9fhUeAdSVNoeMmf46tZwv22KfWeTFJo43kT12zDwKFKTe1ihoEGX8msfShWKXUYHwJ8wN5p9MLuqNv",
  "key15": "4F1zMWtmYqxFuS3SbTXSLB3HZFqnTetuCqFCSDDD6bSdVe5KXdHtDisdhwpvHt8FoAdWNrQHoAaidqjWA38P5Ajp",
  "key16": "H4davzyvqiDnawSo86rFdo77d4ts3cwB3mSCEzvExyXWm75Y8GvizsABqRE7dCBH3FNKm5v9ESFaqgEpy32WjFq",
  "key17": "5pRm1QhiaqgQXWu6zbBwyqVDUnw4B8LpjG8GUgHZjKbgnVuN39RbWfkDSCHmUxLmfNfWwrzDw7YkR4DHv3bAbCno",
  "key18": "zYMoBKs6Fdtvw3Yjw1azGNqG2KrGyRPpKTwF25zidHhVpzkBVrWVdSmV7jNzLvqc2fKzSokdjXJFpfWygARVTqg",
  "key19": "57HkZTFGGwZp9KUcidkSpEtQEby1bko5adNAP2Nm3P6xvfZarvqCmHwDB5xLY3snkREGvE3zYTSHxVU4Mo5bkkvA",
  "key20": "58qTUZXotL3sBT4ifVksTxtqiFj3r7zXuou2uDGsENZzTcCtNTwPtRjv75PSAFYh12yyU7BG9CHQSrXyL6kMq321",
  "key21": "66CEgCumBfTNijttnGuKbjNWcW2jw35GgHcKpEo58PgJQtzuE5XkjfF83sS92xdr1zthDsGy2kuUMqP5XMfbbTCX",
  "key22": "3d9sGSLJx46SvodoBjsGcxkxXmvEKd7bNARot4xq4qVtUd3S1GVAWWYQWVvx4KUAAg5xAy3RCvamkQPCmY9xWKYq",
  "key23": "31VHAatrCE9XChfKci2nBWX3sY4gZj5g1asgq7dEtxTqK36kLzjfnZwba85BxwixJZTyhLb6DEtcAV62X7UUB4ve",
  "key24": "63RngHUfRRzXreTALzaycD9vLxzrD5tL4N9reiZ4eKtL8HtKKGd9jYaR7dCdxMwQgnKKowbb9Y5d2zNktcnJ84qL",
  "key25": "2wWdygkH1wgBoAPDEFnu7wKrDXq7XpkMxP8JZNcBHWH6rdLxqQ3mGHTn72S33X4AYZrUSd9Wucsy2PfLqm3yexLa",
  "key26": "4ceRhJ2NuWECEHgxjhnXEqEMX1VgY1LPigW29a9PiExHWW9E717gGhhMXA8B6SRt92CCR3vXgWSJLJyPqFxkqEh7",
  "key27": "4K9LqHVXVPxGSMpLvwiRMJyNjShbU2FJnXbRxbPsqy25cKpJLiQXdJpYsJbTtAPC7v18NPxdLVgkN75XasqBynjs",
  "key28": "2mR6as1QoyH8cQv93x7qfcprb2fH8x96hPHYA4v1f2EgwUHjKnGFsNpVZWQh8EdL9owY1JTpyatJSJDhEBXM8zQ7",
  "key29": "2zHyi5N4pRfB9uZnuwpwiKPrX5aSiZZuAgAtVruiyjwKPjmeSXKnX4WHCdBKxukGQZjfsuEgPyhQsB29JqiA6vch",
  "key30": "5h8oiwiaso6FsQqwm1MYjFWDf5UZkG5GiqtmA7HmTLmfrtMmVZg8Q7BL8RFpc4MxamZsaPZQJYVVaFctPgHCcP3W",
  "key31": "inAJ9qzBtTw2AHuiYJGZumhKzSR4UwxTM9eqmhY6QR5eGEGBKtXGHYRzJdLZSDXU4e69LXX7y8hWcbcBsBidyUC",
  "key32": "4tLqzw5cE81TMsRPr3hMA72TTm8dx3346Prjfx3UDdBDUZnQBoKFX5DbTsxzLfq2ArZ37cnFyArbF5Nf6zwrNGZn",
  "key33": "Nd4wQmdKdfp6rv5MmX34LwrRohb7SwkMs9DtjVHDjdScra36Lp3bnaqow9nQ6pA8DnHxBEdwaynzY5U2zVWSnjK",
  "key34": "27JdRyp69ufrQzD3kRsxkCUBeNK9YdB6BnapKeGPoq9LbEULpmvVKcu9gxiVaKczaQn9uu98tHGAr6FYvBrqw71Y",
  "key35": "ZyJcn6jSSJfvxu3p1L1r1GMZqs4T4ruLjuxmgzHeDghiptEDEj5m4x6Jz9e1V3u2MuxvhyPZoG69rmLAipCn97J",
  "key36": "25myrN8p6892KRWdmjRF8s8XCRgywJE5ZcDyR25sj8Tgm5vpiKe4vBRrCpR8De72U43J1YTsjxYRP5mWh3iH85Hf",
  "key37": "4NdZww7M52Y6gRMmCKkpHpGwmg9V1PC19RggTXUfKxGBEwZBk6jZwD5oXUV63r11mUcpisAemwhZfQxzJEWM9LZd"
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
