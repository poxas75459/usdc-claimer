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
    "3HHsMDM2iStk5RfhYiDWADDyWZp4F9oYhFdTjWpMwTCKWnZEgSHw1mTgDbB5nW7KFdtW1zPMik5dHmagnTVv6pJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SAAceVNSKeGk6vfYBedvNYW4a5axeqmh5DQ7Lpv84R9fzZAvLDuL8aRAKKGxiH6AxsVjjNEZBAmSy4XxjLdc5wv",
  "key1": "5ex3Wstw1Ve95t7xREi5a7xiC4AKjY7WFJvzZzN4kkuVCrfpyomXWySXYFipSNwp43fP2QymGCi4aRvq6Jd6ZHAA",
  "key2": "5npjPfUbZcZbHVzw8uK9wGPsyYwWFbWYbV63G6mgVjzW5s4gLn6KK2VmgHWHNoUGw88iNARdN5Z4zEcjj4dd4zYF",
  "key3": "3kEMHgxM32Q4Aba9LoEbB23G5YpRMLc4AD3SPcT75AYLntCMv8QRYjrTPFXGaDcK4pq2zVxZ7kTd4oz3BFY8xmpB",
  "key4": "5UnmAdDuJLQHzPa5CmR5p5YvLyLQz2SbSpoSjVar33ByADXdbMrnfTBtNgZEWfEQowAvqEErtGqyDxy4F6oCog7x",
  "key5": "3aT7nju4qm1H8Fyrpx255czQKyhRLP6sjgJ5CCR4SVKjGKpdX4oQRVQvPkpsa456TQ3umHWyvADSe6BkmHRwXFXo",
  "key6": "5dPdf4BJKitvqLgxwc7XjKD2Wme6HyjatqbJBiWhLrgoycS89wxN6zXKxyxwn39txai8mkextF3atBS3qNH5nRNm",
  "key7": "4sJaVzZX5LqWYBMm1qkaVtFaT3EnPkYts8QPATvFnnVbzAJnyjYjR1bheKUDCiMbQaBS9fzsdThZTWZH8bGLu8Cp",
  "key8": "3th9yviym4Efjs6cZn1YzLRBav2jH8ydTpAuHyvtw5i8RDTfgUFSwETibA5CjFeJ1Zq8AkvZp3ipvd6y732osUXq",
  "key9": "58qmez2Y2bqaJ4FVwvx6U6aLhgTtb22AEXkUhT7WW5DPB9PpY7puqhdowB5AdvyBRk3QnnJisGMKsHkx6H25eLDT",
  "key10": "4ysTJpyCoH1Kq3Rv9bPzp3FyPdFuRtZ3xNKJSjdAc9mxu3CJis1yZGMSudVc443FLqJvdMi3FY4eAdXDv2cMxzdM",
  "key11": "4LvNAP9TXy4jKw69qvECjYVpoawVtsriiwjoKuaxMSCJMdFxQd5ayoVACLDfNGa5SGgCNCYpgWB1yzZdQyg43rhN",
  "key12": "63Lh1oW5mcQgXJVoZvJ9s4zMr5WuA7Q285xEd53QootKEzQxTkGjLb363vgDwZyKwKjkbzpbfQpLZa3XYsvDSKLr",
  "key13": "5Efe8hLXCDx3j9E5AsHBGPCzbkUwGz8kS6GWterzGCL2SsA3JaJqPQjDEjE3kw4xj81QRCn3MzaVs96FG8xP8gnp",
  "key14": "4wdbfub9jMZv3hvQHuQnja2cqJyuFo9h9mQmAgx5CRt4Cc5yqtojCxqSvbSYg8qwUsWc8YjS8rTi7iYrRQubSRWZ",
  "key15": "2HktK6nkCVBrtTcDzJPxXCoxtapUdB3WWdzh4EapP3nqY1S2gF9xei9EZqH8FkcrZkES23UTnhDEGSDBNXP74THM",
  "key16": "49HHiJ17Sd1fPrk7B6xWgZLZkSXU1ZyqZqpRjqPR9UQLhVK9exQm1fhYCo1Quu938nMnagxMR2WUBWDoCFUKgwgP",
  "key17": "2nd8R7uTzN2wbrSQzKJx2geocgT2LTJBZ4ZDshQ34dwAN5PapAcZ6QxWiaPCzWgpAgTyyWbJyPhkoe3WcMQ3Nfm3",
  "key18": "422UzsqUQ6sK9KfFRwa9Vzx83KgvvTKmYhFQD3AAK6ZnHKeVgAyfuhXY8k6qiTEefvHwNCN5BaK8vCiaCgynRYet",
  "key19": "BCrU3us9Ko16rwniNu6A9LLMjss4caUcQenL51WFg8q6QJj7KygMCg1QmLPZr68ExRTfvic2WN6FdKC9KeyjWJY",
  "key20": "5KJrp52XHf5u6eFJA3e7Cc2EgzCD25PCg8YHBmvYzia8UEeQS1f2edKRrkW7XdPaWT1tojjY2DhUCgerS8rP2FEz",
  "key21": "3uvMXMZaA5WUTp4uTfqLzJTBdWQ8uU6zZ9nLwaaSjrSnnCqGWAnnSXg1tnrKMD1ukaNvUMkVxdiFKZWZxZkiVzHk",
  "key22": "gGkZh5KtfHcYWipRRkAGfm6uHHvNvoczKeBgSQmXe7qvtrAocJZJEgyCQAgP3HvL37Z5usrUpVamZfYagYUZ2Jy",
  "key23": "2tpd8ZZ6KpazUX1whWQK8nUFjrS2SU9HU7onoz5fiG9mEpseZRpnhGTbds3fgNDiiWtfj2vkWfhSkDzpDd182Tnq",
  "key24": "2Q7e4r69XSR2pvcfQAwYRgRhag31bVSrhppRo1JnZKyZUBeuM2PiWoEvnaJcRoawjuDSTK65yLHUJkeM5aGAjifa",
  "key25": "55uTwdJk7YuPEG8VP1A8N7hmGj88Qc8Y14ucFe1sga15HyKL9iiKK91TU3tMCTM9jjSR4dpsp1nVt4VBgCGZ9Tzy",
  "key26": "h3tBfgm5Nd1jzaqVXtGb8J88jatJmbqGd7We3P1VX9EW4jXrjjBmA4FFhydrQq9Wi9UFYWWs3mT6i4secLKi5QS",
  "key27": "2r6jTu1VnsWUZkAt8uKMPfud6JQNFWvkjAz5karzqAC3ScBoYfveWkVkeFdfiZ8u29Qz6oQfDVQnWHWQbJvjXHn6",
  "key28": "5ACZeNbDB6dP5pdvvp1XQYLZwTnxch1nCy6gdwKSR6ddnXK3QiJEo4xALMfSDxGqxME2Y8xrZaHZPbztMhbPQC8n",
  "key29": "23T5JPD83JcdkWPJYsz6zCRbNyqAaChuqbHjhsBa6qXuHo6qkH9GsSdnDvU18vYT1JdC3cWEPJGAhty4J7J24b81",
  "key30": "5ZeodBBJrwQkkuDJ2WQRiDQihZpkFGKKpRrvevoFrhfnKfXB1NsXQDFAxJKKz3DPb6TJ3kKSvshGyNDsBXLBvJWs",
  "key31": "2q9FvKTybicfFJTLcAFKYqkSbZwTvav9ttxxJazvw3v54akRjfhHyqn7Vbgo9Gv2cbMQCTcaC4ef8QjRnRmyvQ3c",
  "key32": "6GtTdRSHw9jb3mSvzHYcG47dZN8cJtv3n544U7Mw74efLtrm5SabzpsmHWuokQ2HozAVS9exbLQFpEHeQFJBC3v",
  "key33": "5MzkKB1kTvydjN9B591P5BX8YpHfmsHuKbqEuiAppSHH63exgni2DDY5317wYgeeAiuoKA8oeraacWvkvjdXPnWg",
  "key34": "5t4eZ6oz1kXfp9mGm8kTQowUC1nY6TujSeg2CRMRMWMiThskCRWUAyBG1roejnBHmDvrWy2spfG8am8sKtmVvxuc",
  "key35": "2Tg2gyhxe7voyAVWx9weWETRtq7DftaQYikbq81Ya2tNpJVPavgyJ7bX7KpifKEux3CR6L6r7TQWxoBhNfoZc5WL",
  "key36": "54GgdnqzP2pLQTm2zLLFquKSCQcvvxVDVJcKoxCea2dsg7xnJoLc57UCm8jzEJvxeWrZv4LAVN519d8NjJmJYStd",
  "key37": "3JRFG1QCNBmYnePhLdx6KTyypViwZdHXo6SQUvW2XSZwpWNpPWNHhy8mpUnBxRm8t5ovhDVHg7EhzU34GzV1Prbv",
  "key38": "2tPBcDRoEbrfNPuZgbdMY4HAURGfwzbQyV4skzNCXBXT3hUKRqA5kRttueqKt1nfjmM9aEnRKVaTycqjxixd5ZxY",
  "key39": "3QFWn7SXzwNLch5n9s48g5vjnJG3c32ZeipLXwTFXRH4bEwCgg1puq1zb9mLn42dQHwu6ax41Ac9PQNa8tAeQBx8",
  "key40": "JK4yY5kZR17kqJNrXeWygh1qTiriY6dyzwR6arXDhmEDvtGyqzgbYw6WCjagUCaxkngAehWFSzvxQQM3s58oH86",
  "key41": "2W9MQecLB9yPSfbSBU6QD9AdUsWMu8qsFT8idFtkVxVN1AnoYWYBnN6icMq2Bvtwd2YnUEtCP6EWewv9fkmEU5WS",
  "key42": "3rxCRqo8kFsgKXoUrQdwgyrPwF2sViLHkq1cUagxASY9Xd7MtvBzcGBXGTpaKNkYu61st6D7SFT8qSyDdBfuamqm",
  "key43": "46JpQ8URozvtfvoGdrpWNCcpQCYoLQJwwD6uRmojG8amLx5hLiWsAqqvCL1erXFzSXfXspQcw2uyacPQ37Spw11J"
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
