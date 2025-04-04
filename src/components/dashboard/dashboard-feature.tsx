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
    "2rV5fzFgibmbH3oY2df3LMNRG7FiwAU2GE5SKWtrKaLHhVpDxtJnHGooToYHxytCZyxRGvqNMZtiCqpM53iXUs36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2EGJMZxBS3ArTeyNXHuLmABjGDeNZukJ2bn5bA3tP97nuzEzpj3em95Goh8uLA52FCecJfGMRhdjMeeeDucNPn",
  "key1": "3ckhpBBuWP1Z5adny5phBszWta5Tm1xjRABgWKxdaKGm6oeGVrdADPsoptPGZkEHYdafDdv3j9RxWrEUyQBrhY5L",
  "key2": "2MxX9o8LYcuJjbxcHdHVbpkzTRoQny9ANLAVz76GQx5N5HFDsLXXRLnmAABd2xm1a2rmnHPFCpFDYLhUQ3LRZ7Z1",
  "key3": "3wnCRTTVhsdWtJXqAgWZcNUMNzTeFM1TT9N27tz3Q8WJm94EnZCve3RnFxWA6V5nsFtsaLcDFbfQpP2c6sZ7hv82",
  "key4": "2F9dDtEFfo68u8HNKkjrA1AiU8ppsoKAbAgWUkc7j6to8LeaG72AQVzJZjYF6NUGWEJ2XtCSqcNvgngnY73z8pa7",
  "key5": "3P52WQUfXNTMXj6WbcQkkwqVqS5Caq9xQwqoeQQbLLenSQzfdifN6k1iSBgi6ByUUyfjBgUtw3X3jgSf3LZT5djQ",
  "key6": "4PQ5RvYG6rArx1fSYnDVftm8G9qRnbjNupWDaYbNAqBVojR8mqfk68BigVPSTyQ1yZZVXjkUxumSzU8KpebVFJdD",
  "key7": "FW2H6zy4qTm1wKeoH15zzSn1GYMgf1PZ2ivaBUnrXNSQFaN1MvXpqoGYarWp4jVUCinAr4heKseKJfb4eG9ziif",
  "key8": "5jB5y6tUxic5yPh1zmNpNDzFM9y437LKuFHC1HeaUyyQcYEU2f3XnNRm2gwZChErpnaw7Nuj6YFKfrZN5UgERMs8",
  "key9": "4bmPnnGhpWrcp6M5wKowEG2V68FT2Yp11aTidQS7D54zZEGca26KpgtkN2WxUjikMDHqsBJ9hner32xWDuddDNEu",
  "key10": "5Re4bzWy3d1YDdKuoCgs5WzLcVFr4DULaXCkUJuUAvLLhnzV7zkvMetmHBizJrP54VTjNc9X3oHtytrGnFG3c6q",
  "key11": "5tdtMMGFtAnTZvRx5pKqY73kum3fH3pN14ofbKhtezTAKJBhhhogwptMCJUzrEDYJ97eQh6JFVRVVX2qcPp2d62v",
  "key12": "28DeBMGGwCB7bxcgAr3gkZ79RZQzjpJb3okerRDkWgnqRX2yT4h8daNhZ4RVJVm7BxEQHvmq1vkgKGhKn5GfwUuQ",
  "key13": "AdZx6KmmmdCTF2Yz3NzTuY5MNVpgaWYpQxUqNvxr5omhgcupKVpTDXjbUz3nfdxZqkHu5GQi6aND2aBrSiBF5VB",
  "key14": "a5ZZRzZBrkKmyRxTRhqhB8Ym64iZCqK68TvjM3Pp1LJPvqGRDQqmzx1XJDMUhvmKSV1FcNkR2tnwVCVqPvaMYHj",
  "key15": "2eRMmxNRDo99fRWevBPnFJnfVnrrbNwLq6xhXw8VvBGUPr6U77NQ669UV1kjnyMcpLTg3ZCNaPDTo267Z3ayreSP",
  "key16": "2EY7bd7mLpv4bu7irYkg54DWGQDYwuqJu19g9PUCxGcQ4GQMisBsQAiAdKKHRYAatJftiYSk2WitkDh4qvPr9dov",
  "key17": "589aFGqgXGS8ZetXYRKNBZL6ko3rqTd53oaQEoDXM4Pg63MSuozVFVPjMxTYVGXg7w7wMSNASVUZG3U8psUWmNeN",
  "key18": "F6naiXjzY45XXwv9Lx4yLEd5RRwFqAQ5ajgM7C33UMsUhRaMNGYK66UfxHogD1ZzqEMDUgnyAb6MSRs7N5W8qcR",
  "key19": "2fotZgoUZzijvduVMKNjB2YodcDm8EzfzTVqH9jEkRRNHGfRncgHGKoLyib5V2nHT9Wr48Rgk9v7qtZBCD19cJ8o",
  "key20": "59s4767K2gxodGNjB9WWYLazYz8XZLf2qMKytEFsPcfEwJ2sXGpdmrR8p2GyU54E8zsqA8ATuHt6ZfcGvz9uNTph",
  "key21": "3Uh6nnSorFfnA9riQJvUecCdhMFz15nAhtFwQE38VxqiNvfqtxQM1CNNrKCPR7KNFxCjXvcdKWBjDny8sXDa9gAo",
  "key22": "gf4bnAaSFB5BmFS6X7j6XzM8dWpQXAjYh4BYFG1pqdBmYRrgbPXyuLe7SgSLZcyc3zVJ3ztESVPkRLpZ3gXLQgm",
  "key23": "2AozMszL5DoCx65WrMF5KCgiTdPRMe2t5C1uvKnnFww2ZKtS9T4a75n8eX7E9ar8Tkj7uosRhKFGQ7MTY5mp1m4A",
  "key24": "2fiQMgqHztpSQ2x92Je9FiS5HY9o4pzfcD7hdoaxhthUjqNQswn1qiahh5xgTHrbundyg5KKFypsGKYXhS7Nza5m",
  "key25": "tFw1kBfdBM7D5z4kraPRmtAW1qVn1pTvCEsV6khAzpUBwTCryjpgn9h8Ydu7w4yVzMyCA7gHBPJW4TQZ8ypCwSa",
  "key26": "2JH3GTWNs2xsWc9wqY5xYucJWZxYueG5V9pyx5egxpg5y7Qsayoso2NEhBiCv427jrzxg8S7DnQNKeJo7cyT2wp7",
  "key27": "2HALtub8r4ojpGM8SgSQmoWnNzS8uo7LFm2QJYY3qCHnnKWFGcgjKXn6AY7vmDogwcVP5GpiApxsaAPtv1pBNKvo",
  "key28": "2PbhT8v87tYFdveCRDzvk2XhFEDgfZSQ7XyVZvxMLuUisUzb7oMkY8Ro8varzKcDBgnbspQ4JvEgPkoFMMBZuErQ",
  "key29": "35oNzhC9Vh2XM4C3bcPgRo9kqN5aoAVDmLRCkGA8Yaj7Xixod7dyahYwheEod72fxQPTAqSi7YnV6KSFrUyp6r79",
  "key30": "4zxmjPAqFnj7VwfJLRspaybm6CaYfmrWPsghAGDhnV3T59au3JodRyRdAWi7x3HsP3T8e1i7CBYzzZwC5Qaby2Ut",
  "key31": "K8oAE8ih921Q5G3Ln5yHWe5WDX7xQ1FXJjcSu19FF42e9D2NqzrjAKwsnKmBPhgYNWm4eYFgaU6xcmreYrwCgnN",
  "key32": "2oR4Hy9TwgLJeogf9stzeP55NwpzX9T17DktCwzGaZkMxfWfLtqb5qrLfWeBVZs6G1YYGGPxUPUyBc8t3tXATaMV",
  "key33": "SebqZFB1xWu6kcddxDiM7ktUg55graFdFUjLBEEQ1KK1yjfUBQ8TbXjJifAwCiVjMvFxB2dwQH3cQzqF67fZ2fK",
  "key34": "p5pxuKiUrA5p7U5zibVpb8WYfYQN5uvPuBtYoBem1JeVpU66kiPiBGLsse5VFa2oorsyUHCFMF7RbzBMWYMPj3N",
  "key35": "2egePUr76SDposnspWkjH6NdJYN5dyL3kVyRJfEaR47qH8PubCnxdwsyfoJ1xBtN8dYbpdWLe4Y1asvwcQyJshKt",
  "key36": "4amjJJ7s6nkcRxKM9gH7iJeSkhR1DShV9VWosWJdG9sDhpXiZoHaqHHjFbCDnvSejCF6fct4659PXovMxd2W2KRJ",
  "key37": "2cHfZiN7xzWZcgePtLYYvrMzTiGWq3SaRL8LaM4psbUV7HLE5TLsmQunDpmCFkpJZLFjNErMMUMV2J1beTdiScWp",
  "key38": "59ubQK61fV6zW4LzmC11By6KKEbMiMNjWor7Lfn1YKT6BtbK9rMhmp1BwcimNbGE5jhAHSNqyHrvXZ66ZmNyHAF9",
  "key39": "21jrKRjTCNnQMWnSpE38CLNNW8pAAgRDqPrbB9xUqDNREppA324ZDZcYF6b7NiJrjcxUDGo8Gz9bThh7LkhorXjk",
  "key40": "2H7aXzF7y56P1VN97bkLWVwyCud95jTDpN2PZNGWKhygFUhj5BdpyujXmXmyei2SWn5RfF2UkuRWrHfhzhPwwCz4",
  "key41": "N3F1R4oSKBPhFWmyj9QHPyEyRjXtcQnhG5pSoovn6d5t6ZGhRDD8mfoP1SuHgEv7YsMTry3VMYZNWFqJy8dj6vH",
  "key42": "aFEDGZZE5mRmPqkECUoCn5LPBGHSfvBxAyX3hw9bCCiZ1DUaQn7ZyB5LNuNAcSHtscjUH3WERnr8PPpTy8FsEKQ",
  "key43": "3XyLMvDEAdZYSvW783mYkHhHiHNi2q9PcMBm8npiZReqrKRgowuukUpMzvXBVbkZyfQafJU3of1srMYY6XyVW1iT",
  "key44": "3boj6enWkri3F5qKtLxHmm7fMv7RV6gP3oMte7Ha29jZsNMFr7dqSkWoPafR4Go1MG17ZB7ztBq1GydX6gd7yDm7",
  "key45": "s3H8inkZKhUtibRAftpUnNuPZkKYvWo1XRt4wBFn2vLZo4AwKq5qfPZzMG4MMxTYkgSAn8SF1fU6UJxTYMm5zXz",
  "key46": "2VBRYtXmazxJFXQReN2sUGUP5T9r94nyXM3HrYviWjpgKscYoZq8Er8NQ8WRyKv995t3nDAKKbtfwesii1wHzZrh",
  "key47": "2yxD8wgVttBEJU1kjnKYq9nGi1meMX9HWfAsHXzdKHRGoqdCbGngaioHG5b33KYviDGsTnwJAPfyoa5hGyXSmSQA",
  "key48": "2KZf66tCUZY2LYQgurpjSgPjYsgv34xCJSqocDwM9ZWoNxVvfbWUYZirwy2qksgjBZvEh6NdWT6wK1UBu8H4vrvw",
  "key49": "5QfUBT6RzugL7ge1ajQKGy5zgV3pBxzBctGjHoPdQiHJm7GxcnUY3L2kn1GU82iQ2iN5z19MowXuxwxWRq9i6JW3"
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
