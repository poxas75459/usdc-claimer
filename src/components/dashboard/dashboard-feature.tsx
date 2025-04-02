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
    "5kRbQVQibV8N2MbRCjLp2Ubjkp7D4tfFkEEg7P1TxK1xMKemLaFhLuUo2XhkaTiYviMCciYysPmGrZGB1uGWGss5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uq3k2Wx7APYhrYbYnX6PSnNBVsdP7NtdLtnNKi9jTJZGmevLdbsKP5ktXQnv92cWqJAMKeQ4EuyfqZrVpZas47H",
  "key1": "5apN7g9QwXxucr2mY6Q5K5ckUsUegYAFMT2owyM1MpuM27tAvh27VRESVqjxEfsti8c14mgCaHR386XtzjYWa5H",
  "key2": "4JiAofR74jefffK6SdmWUxDpj1oSNEvtwyEKQ85GRdVC5qvqLnS7DKrRkLHviJhewirPCEe35AGi3yk8SVhgwvLW",
  "key3": "5BEAAnQA24KVRpc7gTHv8PvoKfP4joVNU2HHGVpWFbDbST8p2XsndVmgo1YcGfSZRTax4i7AxvQkWfQ4bdJ9KXzS",
  "key4": "5aJYLqvn4jsYZqwEGpZZzqQg1uU82kw8qAfH4CLc8AmFXBJF3GkpPcyBnVRxFF6YMzSJdamMaL4NvDaUh8qM1yQJ",
  "key5": "4oNbJ7RidVzN5zP8FpohM7woDcs9Udvkj128hkb6PhdRVnJdiNXaADAjcf3wucX8Lb8TNwcpqQAVREvt4TpcCHjT",
  "key6": "5wsAuKi3iw9EURLVA7h6Pf4NnbemRRHjNaGbrmDGR3pKfEyVWbadYp4s8fa56NnAKcikYswcCMBpWgZN3YwAnABd",
  "key7": "3ddfegXab2iofn5MyQEu7qN9GSaR3W5UZ8UzCNQcEHp7uXRrLk98TEcapqivL76R8m17F8mo5CBjtecRYij7Jzr9",
  "key8": "5uy3Annc6sgDEtb7Fknaoaab7XzTi6Q3TMJgaKJWtzj5A5VXbGFgBjYxCpcpBHr25j1yVq4Xq3VAmGf35tHgoBY",
  "key9": "5YAigHPAdGskBSNXMpTUYSDw72gAfwWCiMjxijZmvmkNLbda8hv1TbNPbKMsCHeQTvEcM1TZ5ScXKebS6puNsnpY",
  "key10": "2YAcpDS5mgW67j4cAJeDFSEHjdKKMZy2kuEa9LQkkHVffGGRbisQJdc91upMRfKpeq8Y5rVXpbxg5kFxx31hJbaj",
  "key11": "4fzbJY4XFrvJgokShB1D9fTX38AqeyYJK2vvz3vtFzE7pSkqMjMofX4MdJdgFHMZsYG9jTX5K6ZRatmmxLBuexsV",
  "key12": "4asBfuEycX2s5Jk49C9aoAYnNZXJGHUfSBmbt3sXHQabpMDburvCPHBAyUU5MLA324VFGRn94T6BW36qTpm7vsmJ",
  "key13": "aGNVX895WZMSGZixujoLkhT6oj2RE2HkvJgnNZvvn1kKvEfD6orsCXjzb8sBPZSo6koccUL1Dn1CF6H4BXBEDk9",
  "key14": "37pJ3Jy3XUeNEqY7wWr9rj8iSNcopxSFDRfU1JtNGEmByJnkjyKRfE9sw1d8JEma54WX92FrUZTNmMzaRL6xgZEm",
  "key15": "2hSPdpACYzDLkB9rk2Q9hme7uwT5K41sPBvF4CPP8uHVGX2Yakv69TXC29iag94agDVkyj8dtrxaJVAGvSP7tsR7",
  "key16": "2UP3wTDC6gQ9TmxzatvuPnh3ZLRK7fGp5fw4CJVkwcGrZXNuFVnWqjPm8jJwsDT9YTbsgUekWpXkLkzRCq8Rbc1i",
  "key17": "56KFAoSTrUa3LtxAh2npRwKFstdMtJ9Ntn4rvcmoDfmsWuvrSLiVsbgnW6CdH6T9GY9kvHBtcRHVcMs1wyEkifdc",
  "key18": "2tBM9WNgQg9GqvwN52ymexb6vf58tRRqMBfKGpMA6WkkuF5hx3ejwT568SBNVmw8t33NPZsiCMqqiYg2BRuS3tNu",
  "key19": "5js1TTakuri8R5EjT4EcokDY3ncz59sDe2TjYn4mpar5gUn2iS7yiRUamaEMmnSr9XRKMU6Tx8PLjv6aZbuw2fT4",
  "key20": "3uVxMBETh6okHmzuqvStYxu6KNtQ7JximQbLKw7aDmxBK1BRufjiFowwtEa6w2rndUH8wmmT35UVGw8iAEoJXYSz",
  "key21": "4KfdjQbtGha5tYrWDZ4Ag7sAVKvqd1B3AtKJcPUkFd5DZr6RmSSDricyvjvB5tf5fomocGKbsNamkyjGhqeDYqML",
  "key22": "4eDY6tC7ktY7oeVrCUvhBFq9P2YEXLf6wpgR3B6KcjQDc1SFdTY8su3nY3ncKY4qqRW364KMTWTNZ4iFnCZcwAer",
  "key23": "2ddrhFTDsDszScUqPUunBf389wmtGis2sgjZZdEFTmEFjHCUcc13LqSg3ZiCfUwu8fif2JYaUAD4WZnP6haU8Nr",
  "key24": "2mjEbaUVCw3gbk3DirenZG3x2Prrk2AjCYKhNW89zGGwBBNyJ9DGhDQ54Gj2dCmbX1XxK7WjmBjKpXCUHRu97gfY",
  "key25": "1wpjm1AahPp8Rz56HYLYvGEvDHciYFmzqhGFciakcg2BYJjLz8LiDxLf16fZfTMAgwowL8Xoo2AFjwNdZCX8Peg",
  "key26": "2RXxaeQDwbCHWP1Qh1oM8vu1TzPEAwcD4u7F9hYXX1JNAFUunv5jKh6RckhfHSSMmxH49afguDDHCMYcPGfYt5YJ",
  "key27": "5R31w4xDm69wJ5u7h7MtEpcTorBbMxhZJ3Xg6iCJhfPAcbE6hM8WjtyGdHyfT62UwJDemxfQMf2qZNesmHRnUj9b",
  "key28": "3vaYLsdABxukqPFhAdGA9bAwBBhwnQJniVugpuunjN8Z15cc4bSxQB6JzPJVqSDAo9Gm2dGc2UmYKkPZ1cZi7qJw",
  "key29": "2ipZT9Y9L2W9PYDBn6pAQKAeHqBo89GR7gYEGFPaD6XnJHXmu68owQ5CHgnZ9xU2WjoZ96g3xnQ7hG61fcSKLDLh",
  "key30": "2FaMxGmX5QLVgtNkr8rxsfDiwEYBs8u4uNVrtWNU6s4rComaYEKjUxv7CcXT79b74BHtKMnEuiTiwpRCiwVEFzhG",
  "key31": "2Qgv4xaWRqLS6KpyFHrerrxDGXUQKLBPZUsyER9Shgb2P13uiUA24MQZYXZUqGTKS2Xhjt7Q5JGTiarMxipaviNH",
  "key32": "5jjsyxW4aBRmTFE1dYxUVV5cGd998VHediV95JzVJnJLBmeNYZR71gKFKYCZyjtP6jBGr3sw2J3Wmjc7Wxr6bAXk",
  "key33": "4dvdxB5x2Czt3H1TDRcAP8oah7FR8Xtohc5dwaGLr3xQpkaP9Mjiz5shCjjN4D2JkbDZnMU9MhjeLjNmsgf369LH",
  "key34": "BRghUQthwRTBBY6qPbShdXxRchAxsgMjvEA2w5D6RVJbxsuqepQ9E9FaQvbzxEzXSTP7tqDJn9fePKvsSsJ6NEv",
  "key35": "3szQpJXLQMNnEkahMxRzyJ2ykAQr5gavtqD27dq7bDThWkJFD2ZThA7PefmuttPGyF9585h6m9heVzMX6ekiHDwD",
  "key36": "2RU1Bfu23mvKFXZo8SzyVRL4K4a9VRg1Ek25zGdrrFjLXEb3w7NBs1NEcXaNsGrzT7afHQBfh5XYDz9v4nVs2v47",
  "key37": "2md5ey9zDqk4A9BnGzzH3DGeNxZhdpsV7SeCYrXQzFvgyD79xjMexMq83GW1shtfSP4EMZ2b87spmkZcY83eBMDu",
  "key38": "3eRbu25G3igcshiiqprCBxeasLYLE5RPNib4gDfbVUDrbYTAMZB4m4PYep87uHd3eM2bV6JxJDPzQYLDgZURNgsZ",
  "key39": "3kEjqkf258vRSnhBi9UDaL4tCoTgRMgiKb4d95nAPzh1YdyiSVJHQu2tSEF2zVe4AFVpQTP797J9FW82rAH15eSb",
  "key40": "667neJcSjPo1chrREhsLRknzcY4YuBwd1i4YgHGcTWi6v2Xg4N6c2s7hYCxfSi5CvDuaqiFXo4rAiZQX7i77Ek43",
  "key41": "37adEd9KQMJJ1Tz8v5FpL2ZN1sC79sfMsAAX878D5wAxXuqat3BsmcWrMAHwoHyywmK6HpHXvxHoEnN4xuoppwAz"
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
