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
    "3f3wwM3EjUJjrCKd8p9H6qzojhF58LBy27BoEUwVnQndynVdSXqaPLJRkYSfX4VMKy65DUBiNLNa4Mr7rAgtanus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Asi4DTDaG29YqpTbudJj8wXy3GfYfi1D8uF1veWNCLXcNNF8SFcXog3mjn5q37HqzkZPTyhXJx5N8FQE9ket3Eg",
  "key1": "HnKQhmf9W5ZfwegWa9PLYevkHtPc23hEx7aBXyzf4BdSWuMxftMviNrwbwywNpWeZCx23P3Nbtx8xqVLX8X6MPq",
  "key2": "4FP3sUBujc3TDbLLxmPmyzn7Yk8prdpihareHcgUERbAyFDxxyaJxn7ojcZtLqAmoQJKtLWKMRsgzjNAxa92g4xq",
  "key3": "4YvuLs6K2a2TAEZZGyKkSEWAiYjJPhL7JLk357j38UDyxV2RR4dUSxqNuyXLk9Y3zHuMcncNbpFstentxYxmtNxt",
  "key4": "2rnd4aighHy48G4y4RagHzyKzJ9YRN7FdnSPBYQuPRrzgKNksLSJCTpGGCcXhfD1vdZHNF8rpMAptiKjHy1sbYF8",
  "key5": "PN9sDqY6mhW72KfwUJ4vhPxTsumJY3a5JKYmSXaamoh97Bg3VQq86pRAf67i82hiJvGHDwQJ9ZSxBpuW2MR6hAA",
  "key6": "ZvY2FoahnouYDwZJPzfqKJAex5WorQyCe2E5g4Qmo6ZjqgdGB2Gmjpp9DQSXkpm44Pjt7q9FGxBh7JSjqyPStLp",
  "key7": "4JSNwsSJ3mFyuBKab9YpuCYcBnmsp143Q4dLuMwu1pmMsECj8abGi7FVC7kKLp7nbBwD5GZfepm2nwPEt8CAzfrA",
  "key8": "3cFXDfgzzgjcsoqP1RcE11P7fFPdH74u2J46JhyPmR2LEZENAJzdAVFuMGkhCYRWsycVnoBEF1HnuFnALniGwXVH",
  "key9": "3nCyKwjHxwAERTuuKzdN5FHE4YLJvh2QUCFeSVGS1y2kcWjEFP5jmwwUXDGYCqpFg5YjqdYt88SHM2rFqfjpMxF2",
  "key10": "3HQbBDKndpJLG5cR9B8MrCAPM99syyr9BPNwSF94i5YW4kDEy2yd2zJeBzpU2F8t22ZKDHZPFRJVd2Zt8D7s8oHu",
  "key11": "38e4cjr32nhLW2w3vg22n1fUCMbkteHn23u9WBZXcEL5tQGQopnXYeLjqogvDUtLQp7sDF27AA5JH9rtGTa5Rjka",
  "key12": "3XpZF1aTaQkjXXoQdQX4L66b2FN9idHMnuZc41ZAChewsUxZ7R8tJqdwEQFhHhoKTTapDjYXfG85NaptJhgUCHmf",
  "key13": "myMRTuqmyh9TY5FaFkwbZeZJfcKEdPQXLqscUtaw67aw83PdLuQd2Y4AUCmSciiphcVxfKAqxDdEHPQBmFbeK8M",
  "key14": "29unQUqfGcWhrjf7XKijVVDuKt2xHjGiPY2sAuZJhP8z4UT3FGtFKgXFNsKxe1id67NCZob2qt4cRoXsmsSbgBX1",
  "key15": "62jaygCM1hDLvGY8ajZMs33NvZw1ic2ftiW137MbqT5tCoDdNheXm1hB6ZPeJ4vU18pePMNHhfrwcYnAgmTLA2pE",
  "key16": "2wHW6hQhJCga5C5P79DSV9hmkCsjEHnCmdjGnJeb2anXoe93bh2yxTQyLYwTuMkJR8enqaohJq8zHPBS4BBaZbcq",
  "key17": "43X5FLt3w4VFnNdE6viYntYcLspbQLuXDfbQY9dEHbMGqTZRndJ3WWYc7PPMs6xMMGfuSdmsyXS9a8fGE5Myri6R",
  "key18": "2BRNBpWL1iutuCuSEMQTpVb9WBj1CekZe5EU1tSANtxL8AHj7sisR9WULZnzeTGYCNAR9jWpbjqj1gi9Dfxh9Z9S",
  "key19": "5zyPk5Vyo2HU9WFPaip1JV3fftsxoUgJnSDeugr73EW9AV7RM57xHaiHdNyfyowGcYo16VMVqkkqAXJdrYMuWiJr",
  "key20": "3soGKdpEsPEhUNTiRcDwKaBxjim7sfGovEwGfsmYuPvj4j3qwVuBy3L5vSg86NUgEUpVu9GdnFzGk7uDLNt5YUgA",
  "key21": "447yHW36RcwAjZCXTLhiNKWnqX1x9gtZo94SU5GCNjVwDLWy7jEty2Tc99K93W7YZBRkrJYHZoDmCq3Dw1SoUSuh",
  "key22": "T7QbNCZ3Jrk4fymGnvNUcaSTowndaEgsiJKP8dHiaSS8sAjX4ADEPHBrSYPRpZSVcvqzKo8qjkWjujPd9LwwLYz",
  "key23": "3Dc7Ext1KxLjn9cBo6RSaTEg1RXqsgfcjzMPwuwj9gW6evuSX2ufWrDD9xkQ9bkX6hXQBxLAfP92kieUvxkW8XGf",
  "key24": "2ZMc3Wh2MU2ihUU7fCeWy8j9cWq913wQ2M2kD42xn7bBGo2EfQA9QMErqubnqCJS56oix4y7piT5Wt7Buxiww9R",
  "key25": "3Dcx85pdeu2kVw7hq3QJDzoHPA5YpWD6qWDCDiT8NrdtATV3xkxHtdJq7W1v6UB53iaSddz71Lp6M5AhRwCtrFte",
  "key26": "5SJhhvD9KTmttyPuQq9b4sizYzsY72VkSFLaxV8ESnctL5zCu6tC2v4wGD7eZmeRYjpdHouZTzN378GdcE7YmM2f",
  "key27": "5ompc8KJchmjbkGM2eGze5VH83biCQhMdrMukgq6zBniJgrBnjBxU8mMxKbp5CFLvbgwDQYCY6zPi2CJDd24nghU",
  "key28": "43HNDCcJxeWpZgtwxDE8UsSmZtzQgLsFaxWqJGW3nQeKSzUNiLo4JKKdJ6JfGgLoQDGv53yGaMXDFTQXMCLDta7V",
  "key29": "WUFRAFvKisgmd2K3EubPkGnYnmpszLXTVBHdzM3M9bAQvko9xcwcT7AyenmfPJ8ABCwn3oquu7C1t3xcgnqBN9Q",
  "key30": "rsZH6tZ12Tuzu8nAy44QtQjW245Ps1ucgE3nQAoz2hZzuvBzTgRsVLn5BktA4riQb5yGMQZF2J6m4dAeotKYuH8",
  "key31": "qzPtuoHss6Rzrq4uNXE8cQg4YM25vUsSjXV8sj2upSEmTDRQrvzR3UBdPavD9WWSbaG1BqmKrZAuYNEphnEFr9i",
  "key32": "44Fit8MtuDSHNjRPR4XNDwb4JzEFgp6vD221ZZd2j4M3Ch3iPR5y8VaE78XTtbDESfWpF6usRXZ2YqDArC4iQfGG"
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
