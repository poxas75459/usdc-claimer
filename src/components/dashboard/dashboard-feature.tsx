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
    "4nPsvJi8oQ8hkVQAkTmEQvxpyUkUfRNPhMzAjkQzFcPCCz6rraZkcrf1Waif1Huee3nwZuB4pYTPdXdyZ271U7f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TkBFYQVNsMaczi9WMrMbGPKoeWhQANZncoQsucQW3LMmWFn5P7xniHEVwMXRv1D5BzkJVvoKyXDJRk3sCNSM96a",
  "key1": "2iHs3tycWgX5gkLHDKiUqFhKHX94bfKNFTkjnjXbS1HSWrx1RUQBPf7TnLC8uuxkXVhpgoyj6Fucog6WC8VAJRMd",
  "key2": "vFhiVksjJXFx4HZbxqujRx5qyjdk8eQFqfhTJGBByNhAkQ5mjqpoAjD2Uc5poRCmn8BHMuwTzQ2UXKXdY4UtCjr",
  "key3": "5o41mkZFLWJ3AauJTrZqp9J2QFDJbBpuVMDzWnyHYGMHSRnBGMJRsX2NoT5bVLyB56MZ9ZDFkv9t1ZfFus2qU9uw",
  "key4": "Df5ZrJ18z6bvdwspqqKemC5bs7itb2vnDuL1n244UEpFsP296RLSTZexSY8PtY2EBzbme39z7K8ppjf4cmAxZd5",
  "key5": "5N5Uw7RFY7VUcUc25mC1QzDrQZbt2Bg6vruj15BHBTzFQZ3Y4Dzqu7HZ3TFPpTSCE1yWwQZ92PcCEm7ABwGCKn6y",
  "key6": "8bUXAgN2zTY7J3E68PmaLqUvAsANJkssEYaACwJFVJ9SFKdTLr3eKTG1EVFxEqSAapMcfPe6LgyFo31evU71NRU",
  "key7": "47cKgfp3hsMULn74nw5R281yKfFEuqtwnNQV6oFEVkWSraSLt2fpNCe1ripeZAKGDkH966n8uS361FutbUXVAqXf",
  "key8": "3XZu9Fytc7wezk34Zj2fvmRBEgC7tzMPbvNzm5rrA5pErBhz944cqBhoeUdzr1x7Gyeqr7c3gKJS5XgqX1x9wXi9",
  "key9": "2BSnth8bz2t7SxVoc6FwnuC6MbHMzcTrMNpfBHQikbQMqyQcZSr561wtSxhheqi1L1C5tzJBoktKDVEwn2wS7krs",
  "key10": "34B6G59FvD7bwepEfSEtPZ1N6rUUYuowcg9nLLcRbKt7JCjRhmv77B8yUMPNakEFejE77HVmK786VNws8jKHrrLu",
  "key11": "5c2xz5vQFto2AXh7Y1HRbZ1LK1vexAwE1xGB49Ek1gC9zkpdrp2gJj3FrUrs4ViLyj3Hyb9qTs64PKYoHRJzu7gH",
  "key12": "3UsJ9Xr9dQy9ckHPVEx7kWhBXVrAGkaQzA9nqKUdbX5iZWPtwtKu7X9ogR9jT6gbEUVUMybqM4XVXbS3ceu6KVQD",
  "key13": "3rLr5dephv99BFxhDz3EDyiSZVarFqTSPLBacvSWLY1KzTK1nptqbrz8Dpr97EUQi9eUYv8q6ptY4MsPCh9n1HuG",
  "key14": "yV8NQ4NcvVd22b4YRkvaznjccEhhZB2c7ESzeFL3N6dw9hiktqga4AYfYcmo6Ycvct5wEfFWHpomcoSpBCs6pxq",
  "key15": "2UXZeG7LdXMTRq289CiSPVY5HXaBc8YGfvjmFpAwvPMTZP1pj3FQkSGVG5DmHYSY2PSpGTHPnYm1d4N4aLGFU4Vn",
  "key16": "23EhTHwzLe8Vb2qAfPKpUAGtETqM3xpVc6DP4XbHZL39bwRssVcbDyfRVJM76SJGnEQLacdKwnw6vc2ZJShGGKga",
  "key17": "5kW8B8tpgzcAvVuGtQSE4nU9g1FHke4sLMJBQ1H7abwUhRsAgDAReYaEjVB6Y8XSmYU1kW13fMPyuKUX6V6gBek4",
  "key18": "36FnTqTZE6khuXgLWa1NWJZ3iXfAwYc9mmRLvh4GMwnRPkzk161FHghizQ92gArCsGXrK1qyUx9YLA4jzGykVdfV",
  "key19": "WuGEKVnwFSBetWntvXybCCYRi39kcDbFwYwakrzBegMjY3U9BPXvjUkQhQWiRTo1cykLgSc3m8TxdUkTRWmqmNE",
  "key20": "t31ZAeyERLqHLM2KvMwsPoQesXSXfjBDYEB1ysTKF9n7Ei1Pj9CtFL5F1vTUiSdBRLWnsT9qKPLxbRDK2cskSTG",
  "key21": "tXDEjY4NusUq1RHU5zqeaYTsN25h6mF3n7agnHb8iKJmcaFeetDAg4BVXt8viacSYXnP1hKoGcRcPuzMb1s21Lm",
  "key22": "3dqD9YEAtncRa1wY7khKHUSoKyBjtqeYxXpD1WcC6nqFx6LXTcC8i1iSG4fZYYjg7LT7LFHmJhDKqmW5tsjDjwSv",
  "key23": "2oTXTcKEU7VXbAbtRX8ytrmEr8TcJmbk6Q3j2dA3ef2rZcadVsMvwSRmSvxuzsfTbrHoawDrdGYAKJVk8sFtDJ2s",
  "key24": "3SqwPaAAc9ruor5BzRE9XsFSYLeShUqugFZZqkYaMu7LohdY3LbFtjUCwz6p1BMfhDMGybEZ8CXqXuUBeaNezJdd",
  "key25": "44QHvD1WpSU1FjjcG3rrqsBmym76Ayzm6pvAevq9LGjzjJSwZvD2VQ6rpwYo3SGrfzLTVwZgKtXe7x57KQdrGVvB",
  "key26": "3BZ4GJFkbeTq2uSkpehLAjVhcig97wxps2Q1JXYwwVQuKteGML2B6oDCaq5ku1VCNugR2ZoQNXbu2Wqz2H494RGm",
  "key27": "61FSdRV6aWPNP5HaAgKbBoTz1amazbnc6YByPT2RXBPExCBXa44kMnonJs8iyqS6wvVh8gS1SQroYQhFZQo9caCi",
  "key28": "5oVMq3FHySUU4DQH2DfUfzhWoyBxC8DHqNKZspE1VvYN86s6K2wFzS9ZoRiNyd4dQ92b5dUmc7ARfe8ENh1DzP6X",
  "key29": "3skNa2ZQ6DRaMJKex3syzfZRkYGqaj44mX6x5xa2DpHB7CpLVQ4whQL7gghpeT7nj5Lc2tiWELJ19rRoiUJ6Jage",
  "key30": "2frMa8GLmY3KT24c7SVVnTU4ZcraF6ywkMJ8taUpL7B5FHFDa15F7LRtdAaMyGy9rpjEqEoscu6e1tX3FfpYdi5n",
  "key31": "3g89Yuy97cMHERgUJfukzW6TfhGywmkhhBB35uJ5zEN1scgvL62ojSNAiYMoqUJRDhgLZDEXWwYDGz8pLZavnaE2",
  "key32": "HmUc4rngxFTQc4F1LAH36hGBYqd6SUkMB52sJ4S5CC3FuSR1bddEPM1wMYFQjArTwELjGYrNpuzsqLvAZmuJ8Bv",
  "key33": "wYTEtr5eY33im9FGeR5a5wBCViopnud1eL5ujmqNgnUuMjSYwsbpULXQTRnLGK8PCStw6HuCqDAt36XAPXN4qgm",
  "key34": "5nXLpvAxH3eDaXLVpSkRgJfTtjDVRcDZQTyFvdc6xET1HHbAnHeh7mx2s2wjNcgdWreNYzRxuXxbQN2Nueys7Gzx",
  "key35": "CkeofbmBKqEYjAE6VDLUkgwDpCYSmW7VApcVmRYqCAyYrBwMJBTUp1adGs5ZkaCgHynSXvDa8zsQQfrPtNJA3WK",
  "key36": "25xwwc3psKH2gDju4GVnk4MyytzhKDKrewWcBf71CZSexYkgvnrXSKjDVnxHxxm3jCnQfCVUe9Wez9CU5Ybd6qX9",
  "key37": "2dsJs94jNW3Ui4SBCUjhEFgFh55uH9K1BkV4YmgqMAEe3foXvqDrC6Rv22eXd5ud3YXmGehb2g41kxnek6rZ8q4",
  "key38": "4BHUd5ACtYSEoAP9aaKy9i9imMA57GE6ezWr6XNNWtUxSD54ZJbY6GREJnjep8XYv5CbbqcDaysdQkmNfpZvJVwM",
  "key39": "2eZc7kUxigNAWJdms9rP7pK2X8eiv7gKFkQ3zinMexEtRjskjmDL3pgu8FJUSrBsqkB5JMmG45zqtYnFmhKVhJ5H",
  "key40": "2Fuds1Wr91cYhXPTbcjMkgvaeth4Rf833zBSQ8v6g7Q5CEDwdtzHv6MWcKH4EA5Ta5oEWpNLYULUFYiDK3J5yyn1",
  "key41": "28ogEd3zPLcNcSvY9fa6H8i5TfnF6QaTX1oF6x6xNCYyWpD1h8jKBrYqAexu2mtk5dqvaJtor33Fy5B89ycEtmAt",
  "key42": "45iMyc9kTHK8Sd45ZWWzSEnZ43UXBepC6keEpyXEETbvfbRHK5QD1WDcey4u1azsWaikGTyJTqvKpJVzdA7FH8wP",
  "key43": "2VVurH1AEVVmEdnqCM7qKdno2T4JkN8Ecp7fWWMZvXH75Vt3sonMqz8nRrjMiACZy1MVCHgYQfQj8Jo4hz467CU7",
  "key44": "49aFjcCnhsh3Scc5gD311yrkuBLdkEttaQFfXD4EerDqaqW41SNd4EVGY98Jz9Lub7BAupQ39HQZb8jfxNyMSTAt",
  "key45": "4MoTTgTnbrjVNSU6zdXNVyiNF9VdbvBxxGUiU69SvwK6EPWetcXWMXA9V2YM3ZmcrbN3rhM4UDLyJM1fG9T7xNhz",
  "key46": "3tYCewCHP33oFChd19pZeRLMbbRajQu37TqRVZRiXC2dhCyB8SfXLU1ZAJMLKkzwnZKHmmoWCTRcXG9F5DtSxfyS",
  "key47": "3FiWcGc52ZG8uMrCp6dNdYwHjTAqojbxd3jAPSW3em1KFDr1dF94oikNgYqmTJMSCUWVizqe5FKY3dAzRtoXun9j",
  "key48": "2eLtqjjXVYDWtUhG8rXmcrf2xCdt3kazJsvfvWkZ9MwxeN9woL5FtLKD1Na6ZwM2fFeG5mPicmqZRkPH2XSHZiTZ"
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
