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
    "3Z9K6jGM8kScw9A3NDkdgHjvdRtLZeJfkGjLZEkks4UGdpkG4U7Ch2tpqkd9ntB6xYUrUJiFKBY7WCdw5jVixXBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ToF53mSoWvhDSutDU9PezRKpK7F4q4JdiYLSck29pvFpCQXojkTLNckCKyJzRXSgD5ZhwSa2anJ15qLSuL4MLBe",
  "key1": "4XeDbW2qSmzoMnsCLCN29eWRjXocXBxRnT2EdaVk3Cb45GTamFHqjpGjMawiymwwC8dxK4BjkL5Lq84kUdXZLfyw",
  "key2": "5Mv5vbxDdyd1FrEsTVRb9yXSfFQrGzMwLAKt2dNbfXHyRG8422zUxk4LTaooQyAQ1U6TvR65fQw8vDrj38tohAq3",
  "key3": "2vsr2LAnJ23H9yqKYq5SGAJX5KCCNoPCsmwsTq1MQHKKpWyZaeW7a73nAmQ7k2J1NvXh1uMiZvEy7TPQWC136EAD",
  "key4": "5tLNfe5aUMCf1gxFFHDxKYV6onPmZcAifTfitRgtotrMDP1T5oCbUfHWE6zDtoH7BAdzRmDzpLSwYruFBqyWeQko",
  "key5": "2vWzLtJqzD4QwhgYd7nmZnGCKzc4HLhm699uDnk3QrJU9HP7ePRcsE1iqtD1TE2Fkq55c4BXM3UFX1wMp7ipnuk6",
  "key6": "3om3dBWbPzSy7vCA3wG7fRb2gn6tGsphmRdvW3wyWuMscR4i8TeG4muegAsD69CLNzXgaQLa6FD4r6yBLWnstSED",
  "key7": "Ecvi2CBJzdYb33CaVJH6nTDPXk958PhRUyyFMvL2oi9G72xGQEvPcTgLmksiGyxYypmgKKW5HbT3VZvZKBrE3bx",
  "key8": "2KoyxMZQoqo84U4G8pA9GtpMbnstsPo8U3fDdsQXboz2sMWckpztCZMfUnsM1aLoxFTNKPw7g1kTwi7gAueTpTkG",
  "key9": "446NNjuBmCwU29Gz1TZE6e2VrmpG9XRP416bBvoz6EnoHTd7m9WVfRt2DqTedjAFNNmZ31n2xZdTLZT5xWrK5PGk",
  "key10": "SvnGJ4oXJkaYjHpuCLoBdFCjSNfZLQyiU63KPqHmBdp9QFPH6wbnuJxuSpWxLVKuh7Nsmf1gPE7pB3cx9ovWnji",
  "key11": "MnsqoMkcsHUaNsfRfhEofS4PDAzyvxbvjCdC6n6RyttvKjk4kFC6GQKpyB2VT7Rr6eAZUMtSD7mpiJWhCaQs7W9",
  "key12": "2jHe6o1z4WfGABPQPLLYWHPb7gH1Nidgxnf6Ah1cLuPHLz2FKHHMiz2ZJjYGC2zZUmcax4reR3KmJTdDdLRpQrjU",
  "key13": "23sTpbT2UFM3M3pu3ZCFQ1XzpMc1vUj9zThX4Li9qUJer7hheyMrENMd7jwzxeK2QeTsuaprNEJKMb1fKcq8tZFX",
  "key14": "gHS3YXQRHCQ5S46Pd3pQTb4MUoC3amHQ5bDaafFFNWF2P8hfcAFXxLQizBVv1ukBmra6SmquGAhZWQtxvjeqQ2G",
  "key15": "5oj1xX8JJ8MChMPhem8EN2EVZqqrYZkSMatPHjzwuSUUhwQKM9Vd9XJfR4c3LW4P2xiN1tZRHc71VC5jPGoeDejd",
  "key16": "3pdjpTjoQEMw9mxeXSc6rPBKjsHaqkL44akNQpjUzGE1ntKVagXUj5TaQdC8L2uYDqnQnkXpFwmQDrMSmiH5MgfG",
  "key17": "21P9uMtBiuWiBSuKRnthhRBHXa7U1C98Ys3tizozPtrHG6gfjrT134ELsE323s8XU7KpuDfT7w6xqLHroH2wuiND",
  "key18": "2qTXGL78XvS31LCiP1xZb2UCFUcADx6usrkLfbSNvCmeZEpaBXkBUtsFNPngmZRj8qCNAnJ4YxyW3EsiCroAjdBH",
  "key19": "3s1jPP1hwgo9qkZ6t2CWScspHh9ikpcJ46Hofh4tArLoSnaaLc2oNcg9VmC9QouNV4adFCTsd5fic2aRfdCvDAnY",
  "key20": "2wfmeUNnZgBEtRfvZ2GUK39psHgBEe54uoAqwEk58Q6MNyUr2bEZzTUMUaKjHtLw5GLk6aCQwAjTdmTM9gXzjR8Y",
  "key21": "45ARQkpzn5ojD2S2pmTyCQqNaZxhs7ScEj1BaXYCo52bNyAfUqeBBCfZGe3rS4SJemc4kdAhxJwDHnyyZozN3Mao",
  "key22": "c8GW8rZ62RLkwCrcRyg2ioM5GK123EuxTe7j5ciVjTQ1JzLL8NjJorQg3mbpu9Tv9ySGAWGErHFvwVPm9abXzyy",
  "key23": "5TPnEk54xxrNnGzsxyJPrrMghjcjewLonGVBsUzJpRayLoYU8pX6wiBs8kWAQKh29Pu9vBaBiTC7sbQj8mc2nDLx",
  "key24": "2PcDo8sTDGMaaAPcFA4NFZoJHHbPjyvAcxMjmc7BSMA2sjPP69UgLoVFVXXcxpzfhLwDbMd8ubGR3akHYttj8xG6",
  "key25": "4pyB7d3HTU39Z2XiamN39NNbT8VfLzwRcFET37PxZZbS4L4UNc7xxxmnvSv4WWqhHERhH5Qmqa8Xo2ygzfJg82hm",
  "key26": "5GwjG5rb5Xj4c6m4vFAC435eN84dUTeDNDP9Pe4mH9cuVjkRpNEGezeCVMf7Cy8FuKBUfrUUeEPsUFNsjxZGkiYB",
  "key27": "2GJo7nYE9BuyRiwXryS2T2PsFj8hnJrTdCVS18jQavoLdP8bfxCYyqmcoQnfzqwRjzyLK2EpjB3xxKV3gpANep91",
  "key28": "45DHxbw5Ls7RUdjsWH5aKhDBYCLHgmKvfByAyV1vW5vKy4s1cGJufjWAnW7q1xwA5tnaXPqCrbLuSmhQaxF2JWkk",
  "key29": "2Ta3wv1DUCKGZzWGotogwWXhK8eM4s3TRHEdbtpVqEDh3P4c5iTtqhvWpcjEj2bcySP3USRDbV9WdVFty1dovkRe",
  "key30": "4xQmayHqKFLe3QDvyX611Yw7Xt9VGc78A81N8YAGkapr6fdvrougX1aBeMZRBRstRgP4WVLbnrN5Qt2Mg8LD593s",
  "key31": "aaDC1VK2iw8r1SYqEX7hREmk9DztKhvEFkkgQVuuqZfNE8Eh2nan7MiJ4u8XZUwdVPoevMLt3MzGktgY8zsezZD",
  "key32": "4FR8QErv5NxdXk1tCRDjivSK7LhWzsuontDryXDcFJxDHvymSwZdYzHnd7UScKfJq18FC8yWb7nvEzQ7aUQs63VP",
  "key33": "3gW7tF5n6XNtZPjwhZAePbNUpahxGuv7R3v1hfnZhFTeBPC6Zifhs4eMbZcquw3aXAwvDbQUNRdYtSdErxZdFRcj",
  "key34": "NYAWbNzbZhaozJGwLWouiS3N89jHicSKeCcFq4t6e11VW6ZfWMZzf34r9LhNdzaqzgfceiBXdv4rhtDCHsr2kVB",
  "key35": "19gPyNj5eC46q9JtB1mwLssW5hDDyaPY6KKX4SuPvg7eRztVYJYtXiS9y12sToibuG1QwemE7XM13obn1FVMr1d",
  "key36": "3tLNQ6oVuJdBkuLobSt2LkvcvDGiJvbcuy2VqkoaSD2cgYdtrWgMh3WaiinUi2yZhUtSkQG5Tv8bHcEf5B9z2AkL",
  "key37": "34zmREqTNcwr5uDLi6iN2PKKKG9zuHNX9kwFbvT58ANCM3qaBej349fYwsuAhdvbFnRLx48TBkVFgXTgBkRZ22D5",
  "key38": "32GEeR482A85yBYKdMBpbjixfUXiddsCf59ukiSovn2ibJHMRuXThmKda4jVU91cosHKcYCRDUqwvZ85UkMNpGS6",
  "key39": "TcAmDeMVDLLYAKGHBDRgXoanKCJQqYAbZDBrikFtP7fXBJs7gGX7R19v6GVSLruowrGbL7fvCRf2wMQ6hxDFyTZ",
  "key40": "5teRpYhVVbioHhrvNTDx6rTBdjGwo8EaV5foWb7uaXayGudDUNhKerVYjHJPTepdkjFvMXfLmJSFJefUeZbbvAQc",
  "key41": "ELjUakfRKQ1XXEAYj2bzG6zXezvkVoZ1AZpMEigSXyzSi4sMnnW7ihHXczmjsHS5bjRG5srzeq5a1ekmtqCBkpv",
  "key42": "5Vz3GjtgL3whwUnXd1jvuz5oNBWW8NTJD3Dnd7RUM5XmDUxENdEPzJutGeNGAGosRQsyYcxocs8y55fs9GPKtVY4",
  "key43": "2JPijfDzSFAZRxiE1JEGUNcpKHTFQHzD3DKEhXvmKrqreAgiYkzXJoegMrfopSe73jhNux2P7KbRdp9BM73C5egm",
  "key44": "44Y5Zt1QF7iHu7Xp8hNriGcVU5W5R9tFEAMikCkDTCZYc33gpSHzHeenvf616PYrh61rn34C96FHN2EF1n6Bo3ux",
  "key45": "m8DQfWBRKWnztjp493KMqFmRcsMJBixvziw6qXspSedUS8DE94XdAbguj22XX6GDnfYr87P8FafDWy1s6v24rZ6",
  "key46": "1ajQhykmpGKoV95XETgN1tF2rm4Y9drKSS3GbB35QqmXsAy1vx9vgjZVNMvhRJiftdYC7FTBFJ9UAYVe7u3xAj2",
  "key47": "2kp3LDXepz5NoyRazui2Mvd5bdpRRzTBQd2GUiZ4fFgjhjCZisLsZnFx6Vh6A3f4B33HFeAj7vse8PtzCZ6riTwF"
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
