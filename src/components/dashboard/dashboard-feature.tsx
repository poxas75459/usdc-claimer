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
    "GFBKfsHbcfeHJuNkZLzDKxzDiLQrKb238s47Yxaa6amJNJyBuG5FEpGNM1v8TgPwDb6Qv9wSCRnW3omvyFkhsY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bE4wvsARK3rr77cSquBurkUM3XorYXC9oAvCfebgi9Quv6mqK9kexC1kJ7tM5Qw5HmR45SxngG8jWPvXea8o8oZ",
  "key1": "5t86EHFQmg1aokbgNgCgQGaETK893KvSEWVkEiHsR8vruAJptUUmk8RhJ4cRvfjZFpQLrpewXBvBmwwu5mJN6xVL",
  "key2": "jyWkqcAyCmszRAAGnVcdKW9GbF87Up7u1VfU19frTdhZ3hf1poBc8d8CN5buufz8xvYbeM5CSBKyhCcyJKCSiZR",
  "key3": "iAcnrYeBTit4v2GbzApCgNduxZ5UvX1b29nP2UV4qGQuPVgpPTRFtF2MJmRfmycpmjBhwWAe6MqMqebKU9jKC2f",
  "key4": "4ZJxt7WV8n7f1xKXf865Trs1Bz8RUXnw2PtW1fK1AMSZpBdzR9tzT6wbpThQ2mDRGFpSjF7DMNziX7ndiMGe3sb6",
  "key5": "24C1f2sa6FPVvbaet7Xd2x25Dboy42ZwE9KEBoNM7h7ooUuJx9Qj2JMm6fraaLUZRjy1WbKueQWSKinWj1iH4697",
  "key6": "3vPUDsdvMZK6XkKUvmdDjuACtkkUkNuLC8hdU1Vc6MPSCPJobuL6goW6yRC9MSt2VyY7gFTs9S5dkifuS7dx1ndP",
  "key7": "3YS1pKTbaMoWgzpr2MapptQVojJL2nTH9WFy98rRA7vC1QACY772bcoUg1auBZAocC6v11VkiGSfwX93f32RgHh",
  "key8": "E28Z4e44UGxWpgfmUWPx8sXDScHzASpyRWTMFMqY6dfshjTLKWRkFD9PT95jRqTDpCJMhH5k4wY5WXshSzZQtc5",
  "key9": "2vfZcYj7ZdUp9HpDYtH1VGvMndWAxrXFah7FkNA5LsZ6JSVcQY787FvkR67rcR9ZgzG2Rtfks28AqXrYhrQsvWww",
  "key10": "31x2HWhD26wcuwXdSmA8xENHBrVmpGvHNnN4j7bKUXspSuGVg7Xy6oRUMHJgYTgWypEjCawog8jXzYoN8RRsCLt3",
  "key11": "4u5vZZKE5xVvPDQzBQN8F7pG5oVAnUuTzY3R8q5wL9a2fmaCf3r3NKr9E9h4kSRYEiKwhtAUhMJsbFFWWqBz5Rix",
  "key12": "Fu2Gi9H6aCL96sXi6SRjfHrwM1fffXe6voLJm2nXuM2WTEPzDt6DZzG4oKUp69GjF6r5fvr4fe2J4usRkSZfPEN",
  "key13": "7TG3R7k3EdScQ3eMs7YxWpTwaN3HaS77igr2dFuRuLNnqmeHh2WfZYAA8NstS85NfSFmahfK5K7qZrA1Kdcqp5o",
  "key14": "47dciB1ZpkbvNqMd6jrdVCMqPWYDnA2w3gWEj1X1EC3Br4W4UpfDpzsgySpQvs1XReXawBgo3sVgT57Aog4Cdu3G",
  "key15": "3FpBkU4Qy8PgaUqe88sY5pMp4XUM9mw9th6SmcSHhsvYWjykGBwjthG29sArohjP8g4z4pAXzAoWB8bePkhC4KGT",
  "key16": "63eNufLx37kxGYrEWDYEQL5YsNQZmqUNB3G3yL4k5SUwdLQ51fMwMyTJYU7itatu4PesWAMmDpi3iPogWqejnM47",
  "key17": "2jTJLE8yYLi7xnS1o8DwDbA6bCWSrJ4FPDmKCtL4Q6rAVP1JDq6oSzaZDWnpBRQvyqoJyDE18graR9aqc4FFYfvn",
  "key18": "5Jj4fncCCiyPE4snK8K5hx572uo2VRPjoKBEWeW82nZ9taTfkzVsuS5QtjGw48iKbzBU3KEnoRUy8erNqWyiyBUK",
  "key19": "5fjgedbCj8WbAjRECRQyKi39NtNJxjrAZNCh1qNCzE2YjW635kM52UE3BorxFaM3bKT1QXaoVCPirfheCv6ZQfxG",
  "key20": "j7fM6mkUVw4QduyKPkCRxujDK5hQVQdnETvStjVnxKo1m3Tf9ZuhKnanG1A2GPYsRSc7shMSD8nCHB6UMh7zamL",
  "key21": "2o4N2znQYoVc88VoTs7yTQyn3GfavbHYXm1hMqWWg1MnGcjXBLxEDLz8jH3E4qzUdb9JyMJCHzjb2qHN59KJbkxP",
  "key22": "2wEaXRzLhxu8M2vu7CuQxrUG9DhQVLDzu4mJdfYTuGKcUdrj231GPLdMSPjh1GM63qfDE9NPdjcBmU77RS4M1ggw",
  "key23": "y23pUquLk5L5TkMT2UtVWVeohioJZBZZmXvXMyukSNgDkqZz6ocp2jZL15hhkRQnjgSocSp9x3pePCYMP3HEBgt",
  "key24": "G2VDHS6MN2tHqSJ6o9Ntvk6NTq6xkXBbcFcBTgSaFiGQyki2i5CJUEKCYSWokWtgdxtsqfHUETzQ7GyNgwUtYP4",
  "key25": "25oddYTaLmFkBeVdu1aMw1x2DdjdGUCespwDBLunVJSaAWCDEd7UZWTokVm9LR2B34zPxZBgy4zTdLMoQtGxUH4g",
  "key26": "2KvGqs2sRj6zcKRxVFz8uXVnkex7bPY24YHe4M6Rz8d9BvbzN5ZpbgHFGRbrLPeWWeHRcNvqd4gXYBqAWBn6c5Wi",
  "key27": "4ehwBQkczw2HmcyWHdWbuRKCMTFSHgVnARdz5dBCmfFCnVDErVsHbkgVbjhRj3VPfBJzh66J7ViF2939ZvSgABiG",
  "key28": "2SKBrvekqJvZf9LJsYqgQsjVLg1vYvbTuBegS87FYktWr2cZYtyV7oCgz2sUDWeJQzA2Zn7B8QJdtMs4X7psPWXM",
  "key29": "3VdEqzQmVNYsDmL89fkKbzr2aytQpoTAtvWfBq71cme1i2ZhV4RaGKAYENzKLnvnbBHHoA2KZP5TdtE2MVy67bjd",
  "key30": "Y3xqJLvcFecqz2ei3DgdwS7BXektARqfkETHeJYXebkmYWLvaZUmvYmhAcfwaSenSnKFjGLDENEi25XE2UJQezu",
  "key31": "YEjir6xaPDPvyCCiz3EJHeVRQQXx9EKJWcEZ1NodJqBzJiXZkVnU9WFBHzR4vgkAS74Q6gPf7NaSiRSkQer8QbV",
  "key32": "M8GKKe13Qh4axUWfhUBhUY916WYxRk5FJSmb3PdvfWLVF9Y9Vg2qrMFm3m7Ro3DSdThL2QUmM4qDgA4EWSq3TAc",
  "key33": "5YtF5nUqw9TYmnYU3obfqPwh3xrgRYgU5LAKxC8A1oCAr8m7QZKGprEU1Y1v8ovFeHhbgbHXHMqjAX2x5rvLhMSt",
  "key34": "4M3r4HFHRLiQzaqhTcc3BvWnp5WMMqc8z2rY9CaaR2aD5CjqzDTWs5RvJ5WfhQ5WPzUQxf1AfGAv8Z59zZrrccxj",
  "key35": "5M9KN75iQk3grP7LaKdxe72Yn7nTV8ZeR1LfXeHESaQaw5LT6MTFs9jYZXa2V9i73MrqpQQzbDsZ3CqMbHYUfwEP",
  "key36": "4z2hYGUWpATkpTHtwanXZmitGSJz9xMAfW9uk7JKFBa27cTVga2gzak8x6jpAkzUuhVJh8gB1NpY3ndTXqUPVyq7",
  "key37": "5EC9tCwzKSSJcTCd1M6L68sdB1MwFyRcuhPdaWDd6wBcECFQvUmoaRvkXszxijqhkq6LePrtXNjPWcYkmmSRTtLR"
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
