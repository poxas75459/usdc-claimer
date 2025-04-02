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
    "26B5r4MuwUSfebXmFmyh7ZXbaDYA2tre97neiuJoh7DTidw131Y4PWKpSwKwQVaBsMwYww7vr4XQe4mJStRBUa6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57boLZBaUcG5jBihtJ3G5roEZ27Qa2rQ9jCZrrx3Va1ghvfJkWoJ8KQRwvnwU7SNzMZmCTThzFGLpCXyL4LMSPdJ",
  "key1": "53SyH8bAT7QAvRP5rV4AbW2HNs1bqeEcDo9YGN5SP9uVwLpP1PLb7NEb5FJXs9ZTZXz8w1ApRDcwtGL3MFSodj6k",
  "key2": "3R71WCPnBj8yijQ18B55fMLMtmYAidnfkzxXPE2R1QvFstnKYrUb6xUEaD2K1PoRxmj8b1J2sBqqZUcFcBuEHse4",
  "key3": "3NvTVv4kMxJML7ejYqZJbuESHnLk8vz7g2xciBzzKkYGgAttiadwj4T8uYg3XJvgu3YSME4ArsT6dz2JbVzgcRup",
  "key4": "4Dgrdes9xd5WaPiDNbjMzsPpL4DFA1uC8vwpsrjetgrgKKUYN9o11fCBFJuyQhDq6xWR9aMK6Qnu9byNGSQPzwBp",
  "key5": "4AkNhZwkHFRMGMtrnoQBYbWYT4bUb3y5BZjJRnSxpiRhBj7iUGP1ibCMJ9WbTPh8ajHXLnVN9A7gBnnF5wKpx2AN",
  "key6": "3FZQwvtQLSZmaqq4ULAYwsJiD1EZ3KDfHXuxMDQQoC9Xt7mGrst38pJ7HvUoKHtmJW8gPXSq5evVFjcQY4ZXS9v9",
  "key7": "4H8os7T2moHEfC7tJbJ2mphBKow34C9e5vtwMDJn4VmqH7GraF3wMWgSQ4W569s7ZvXdVmZeYxr6UTfs7s2VcXDf",
  "key8": "3jG4Qj2phTLmQcGjcRAMepepUNqpVm8QG1rihXCk2wQ3zeEtc6BsS13ZUSQ38oNdoE338681yspEPWbdaXMWvMtr",
  "key9": "61TkGdjK4Nk67gcENwZfNNWCxJvpGqcaQx6UyrRWkTinSU1rZSbiVSYi4jN5tXEVnUEztEJYQSC4QYYPfN2i8bAt",
  "key10": "4beF6iqqHcPGMyuJa8JTNAfFX4ADK9WxWVPfPWxrFemGGfYjQJvEpbAyfReva7kUnVfmMJpk7a5SseDjWitzL1Uf",
  "key11": "56cN19JGtFLdAHK3pG1kkwUwKLKNPC5stiHPfKVY3zEHYY6f5HEiEpPqdrEwbSSC9PvPJgEd5evESro6yZVNuzhr",
  "key12": "G51CTJHbebe9iNWpqCMv33CCqgE4Jg4qeSEfCtnmc3kJC3fYUXGSjXUDU1p11ctxKys4dgbTEpm7UcWi1RcgLLp",
  "key13": "2GWhExj66XCnAJf8ZxegQ3S8rNkwfcYHeq3yEwmiLoZdLUVLMkkBMwp5i7gG4pdr3rghWDEShmmeBcVyjqMD78xH",
  "key14": "4L6gfdJ7qiJVJhCeu2m8ErKomxWJRWysrNcLjwuQ7j59SAZP5afjwgKFfqTL8jWTWUatKKRgZq8aND5jL4W5RK9T",
  "key15": "2DBY9H9XL426wVtu3vEfqr8xxoxJUFp5WzjNvWRnGrtSB3Mit7sSsDHu7XkJbmmvEmYayGdwKjVAV8aJg84S2ioT",
  "key16": "3ENTYtgzucYdqy5Q3fDrazqg64WfrD5vWpPx8kEmhaJwCt7c5moC7pQftFRVJ28Sdn6SauNSXqAV86dqhrKbA7KE",
  "key17": "3TzvZvLH1xXf1r7rxTYpHixF4rT55rJqLd7fuh6qGkWeFAAStsF3gS5m1WTqNe7CjhfXprrEt66qKsfMK3eMBXgC",
  "key18": "5V5mqGD4d52Qzvdw62VqSjAEeSJqvoTh3bw82mJmYtd5VZNVQhCpYdZuwURWVMr6woG9uuvDbV4RVGJfUdmFFSwH",
  "key19": "4JJ1LQFAPfSPyoBR9X3U7XmPnjB2ErMnVFXf5Jou44puusfuL72CAF8sfGDY1KfcmiqjGNkDLhJsuLVTAbiro2Tt",
  "key20": "236XfEKCvfZSu168TbAVU1eTZMQ23b5UV8iuWWde8UsCWmudmwFeBAYpo5iDc64mycL9ftgkoWqV8BWSht4zsGUH",
  "key21": "o35JM5xQYWHpzjKvzdxKT4JbLxogPT22LdAcxBEf595mSQzn7z7vXmEy4MqNxNjApjaysqA8bY1RZAF5aKAgeZp",
  "key22": "3DxxovXivHwdFBXQR7s1jmCrGnBni9ApF3ziUiDuJ894Ke2cgM7wZtS8xHEPxtipQD3vFMVC2TWepbwj8ZnGU8Nb",
  "key23": "5wpaixkKHwPomZ5QyEj9YBAxLutbT2XYsmaeLUAHRkEUYyx76QLwhfcN2vbwvFiHSL1ze5UqCaiF2MGfpVtUpsgU",
  "key24": "3jzJpYhsS6uGd9m5sdU7MiXhTHgdSebk4N7JyDXpA38FQZcaG9Lrt12iNDCjvi7vdP2QGuKaU8Xd4apK6ZnCf2yV",
  "key25": "2b7umjJg2XuhZpusiRjHXEJKrLL7oeZURPJiMAByzfKkA7nVWs8jvWwQNzi5x4sxRvtWhqDrKYT7CUgCTpUojkiC",
  "key26": "3EV3sns2e1ntjH2hZKCayfT9GJfR7Cr91XYNJq6vB1zW8DWdQcjooHbBZn7h8R9huUP8psje1cDPerLmdRXLwnZc",
  "key27": "7TEJoQft3wHVaKe5bzsDddT43owasJ64HZcwuL8ve4EbUZW6KNyQbhaPEwe2MN7stuw4yVyMc7PKABYF8kVcc5z",
  "key28": "4Rc4Rc8Qs4SzxNnqEKTQghUExXWQ3GMRyjv4MGtvz5uq3dbrYSbdgynvpqn7iqf8fZ4o1unCAHyYLY21MXSjoC2N",
  "key29": "5SF5HKJEHFquu9TsZLhoDXhmdwDyZBZWN6rx65X4WTY8EDuDDNMCUgvWT6VEjmAfmd68pXwTjVutPDfGepa3KSyL",
  "key30": "3JK7QzBzZkatywCnKKq8yL8cY6jSE5HqXJP9ss2hNoFH8YZVZicHvoP1RnSPXDaeYZkJTDYo87LpNV4mKXYBYbvS",
  "key31": "3UFc1ChW4aeKKpbuMMZYtxtPKGBGNRTzBfzU4U742fT7hY78EX3XFX67ecej7iq5QqLoFmkAQmXwokBhBU4cGnkn",
  "key32": "2VYJuVBtHN9Dxh2aWKrSf2ca4Sv8pPngDhdgTFqKLigtqxreCDYzr4aooqDqE8gMwG26njtMTBWrrmAUaRgUdcXF",
  "key33": "3vWEdFKNn13WPsDmfXy7R7jqQuBKAQRtwA2SWDPCwyFVFnZPwhghknTSfbwnGCyNCdSUQkwkc2WdcKMdQZj3ZD4q",
  "key34": "4FtwpRnZqe8bCyGAaB21uAhVUALfPpwBbGEq1gXnk4VQ1uy2LgRKWUWQgJqHN7yNx4wBmEKCFNXpc3oMYc5eEdfV",
  "key35": "5u68KRAMWJhXN4B7cvH8ToCkwLj1coHuL5Bnr9DFQ9cKsiuc3ZBeJmQQh3bDSZs2v7cp4Z3toVdZMHKEi5A3wGCS",
  "key36": "56TEZ85Apv9wJzhudL54FqkzegKiqaBfhVugFXXWDm4ssUcMuNGkYLbQALcVevNnn8uecmnKZZ6Pmaz1N3mo11dL",
  "key37": "5pjNa2zhs63cpSSXt6WKisLfHaMDjarELYzfYZs2km2zvHZF6tzAWmnztwUEhxUNg9qmrQfKjCFyo72hJU9mV25H",
  "key38": "5if7HHfCWYa8TMcBeZFVGCtSqspqFupE7VXSZJiSmv8F4cNv5FKWeMNwjwLzTX3iCGHsq3D4V3jQMvaXFmQrCtJ",
  "key39": "2zCn9NzEY97oEh3fgQdXkjE2qDY9HFQ4MB3KtYAzWYsfEaXaBSkqqP8EvKR4GNS859cGczoV3duA9TBA2cwnr1Nf",
  "key40": "3TgNfcYuf6PnGbf2PrSFTtSyuK9AzRzrgGvUvk55AqQFYzESdkSogZ9XPFCmeC8ArkV4SyMhm7zWbrC97tec5cSs",
  "key41": "4G59PvBPw6PGdM9J6b4bj4oht9QYwuFmySxDzqB6vwB6TrWka3P8caD7kxKNeHeDZX1HMcM7cpyZ7qnLrW1dF7JV",
  "key42": "5KQdryWn3zx7YpCo8WBXe9BufrWhFZv2ZJoq9X4aQPuPzQn9tewizRq1wxzBSygVpCksyCqp5taszeEp7svSw3dw",
  "key43": "481cyLnGK3Mwy4RsV1aK1dWZ12n2HxeJdWgtH1vVzpPQXSvJM9HH5XGpK3cLnKrh1MdN6WFZy9CcuxTNEi1DGK85",
  "key44": "3hUWUdedzsZicTwfzBTF2pVMa2VCxsE2KLwiHwozCjNttkoAnQU4AVx8RqYQYc3i3F1k2m1eGygBRBH1rFk7NaFs"
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
