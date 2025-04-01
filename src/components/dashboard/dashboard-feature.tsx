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
    "2knZaWRXYrNNkVJEuJLmJQ8Gpzv1PZ7ZSqajAmhWqRd4Jeo4wbMoy7VWefeJxaFHkbJP9EgfwT4hSPYzh7CUuabD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8jmeUC6XQT2LdMDYNjTmp38UDndxhRNRcoeuxcffwFgMgGPPWoMMpt3M9iVKkvaRTtZAZ1goTFni7ix5kBry1V",
  "key1": "2AwRerQRAzavzMU6efCJ3rV47r1Ar9s7zPSGqLGS73MyaoLRBL2qEfDbdQo4m6ZaSdemeSPz6jZfD8qwpXG9q1dU",
  "key2": "2Sv5PxmQ1N9MF2QU761kCTK7utbcisrmdYcFnivw4cCs8a3Qx2iEoq7tUFbDn9uXZ77hggupR7QqZ2vP6Ya7wU9f",
  "key3": "2r5CCmMNpqeXhAtBRekz3HRwGDBcTJz1Y5UpgywVA3BtkqbW2FSPQwgDUWDSSthkRsfLz4cihNboVwDgA8X6JgMS",
  "key4": "yc8wkPeFtxCyhoHciRnufEDKwbrv35ukKL2qtNmy5wYdvcv7dXEbscuPEEjXBXD4NFzQvEfSFWPzKai6ei8wxWs",
  "key5": "5HEgSLCPUSr2NafJL2QUjbVq2p1soGMdCd3mFkyKprpK4ysFRN9AFnPj4GQe7sPa7UuWGGnQtubtemzeDjMd9DmV",
  "key6": "2SCAxB2JXjv2vM5ZkrgB2mAzZFYChtWKDU332NSGfbcJHvdFbYVyXLQNji5KgQY1iqZRceSDgkcAv22akQ227t8X",
  "key7": "5AopcrhsbpgnZnMobjcPzjmaxnsWYne9oiLTrkq7f8xnGDVvdQxDzpFskZ8T7v2apypJzQWNEQcp62hfJevGjVBe",
  "key8": "2RKbvYBVMGkKnnw484GbDJNtTiunQzrZf6x62bQKnKW7jAUb5xx3SaQsWBLcjmMqHek8WMQbNZ25V5zGstmPW9dk",
  "key9": "58JJgNdC8uGBFsGSdxYveNN1kSKJGZukAd2H5mhgSQN5Vd7sEAftEGXrV51Fq8yW9necwDmosXSFuLoWpp5fTyAw",
  "key10": "4UVJcwqFeYdv9YxdiDgLbw2M3ueVmeVeVV5tBBhs2ZjEsazqqQNvjDSTTAKH7Wdhj6HmkPCEy9CcYSai3rtBruFG",
  "key11": "5SVmnkp6dZQKptK5mxiP7rmxkHVoSTaQGw2mrMEZaEXWxrCYa1PVyJJgZC2d4F2y8Z9m2P19XQkR4sWnQAhbFvVM",
  "key12": "3rSDNNnR14rVDnJeHE39U2PmZa36vk8je7w15Z4y7Wo3Mt1UEUZEsPoAJjwbGhq81SdMrvg74JZwAAeZqBwYbt5f",
  "key13": "cKL8266u28Lb1mifYMDM6Q5fJnZC5zrwiQ2XmhTBqXkovPp13gxg23owSdfhbvtVtVrTBMpPd7rJjUixx7Lj3wP",
  "key14": "5s3XeBhZxsUMNsMARGg4W1HQuHvgDzSXSu2JYr3iQBD87QYVJjqL4e7J9ewXMYfRhzHKjVjoo3q2oih6Nk1sGdcW",
  "key15": "2nXVggbtNMxevdc6EmTW5aD89TfDQvTr1KduhjMXdDDyYgyVssjLskbySH4a92C1XXfc58nqDX7SYTygwcmRnCbY",
  "key16": "5rWEEhnnMsewWUvUPVQgYtz6rWyHLv7o4ayNRnwKnwNt8qZEbQcwgWAKmA1kUjwEyNmrg27AUgxqtkZbc29HiAcJ",
  "key17": "4CMEfiB4txmBsj9fp9tDFhoqAk1WwEbgrNRRAMoazmwtVMnN6CEPBZUXBGCbGrzEHTr35ucx67xkneBe5x2dzrPV",
  "key18": "4RXBR1yVGseaYBTPHfuZuZxzE4Q7kotukEFrDFAYHyBfGoXsWqwr3dqkf83srQTmP6pwgT3BCJmxrfdAmNxohEFj",
  "key19": "RUmFKGzDPZX2X4K2AxHpYoAQv2gea2nXk5Ut3FLtxRiMxvm1zvaJFmJe4drwRErr8zP6T3nbFY9TYkBeSSD8NPj",
  "key20": "2dpdxqp1uXP4E1Qk9Sye6AjPp1e8SuB6rY4dVyrGUJ5fa8y7Df9LDSaySLLhjLzWpJJBp3QY6Wo57p3iUK4XDt5P",
  "key21": "3hpr6Uau8Mp9yJ1pAfv1UhKunyFSi6eZkx9defbYb8CY95DqVMAcUiApffVAY2kCy5nm6M9imvKqPiKXHH1qHYgh",
  "key22": "34Adqg7S9Puw1Y3qLcyTpq35DxwMGXp7B1d79tFZjYMYfEs1bGwV5YCJ8Ur1drpc6KmkXei1wj31nKg2bTNrajeG",
  "key23": "42shdJvMx3NhK3ErHvrYWybaUvzv7431Bo6DAfLBwUF86hsCRcqfc8fgVv7E98vT2uaVgf8cuuQEMSAd2rV2MTM5",
  "key24": "22mCkD6b7XZWhmmWWxKZNAZvWD1haVTzHidJU5Tz6ZVR1zezzuNcnSGqmRhA2QCqYHuYyTiAxEtMvPqUNgAmrPre",
  "key25": "3pTQ93E8y76MQZ8QLG6ZC8iSQUGJHngbHn33vAsxADHz1PfJwWwHM6FHt9PEqUUGKJr2UU8TF7gZGuqYWem8PjBP",
  "key26": "2uXcicGYkKknsGPKKrVCDSFmJ9QdocZgADGSzvLagfdmjBudfygy3Mjna5K5o3aCfDvUsKgVDcASgZ9DEGACM9EX",
  "key27": "3R8vEX2jn71JwngpXxasqttCMbeioCGqpeRJaovTe3V7yP82xVmU9fghMZRb4WiThLH9g7dQFC24CrL6rgiVngpk",
  "key28": "3CrHxRPs973gnhimUkcQgPsTYC5HaEAB37DU7xQFYHHstSrcq7wFDaogBdiaVXWUYsc64SrusLLrminV5rqsH6EN",
  "key29": "5AdJqtzNSTcNzYa9bfz4ugQpjJTqUz85pfTzfSVhhmx6eTbNNtWqEajcP9SEKiiz3Bwwfrsnnk8VXpoiKpNQp59Z",
  "key30": "3gGS7BVrb4kBKaZLygTh9Bm2HRG1D2XUrK9ZCSQg4aotMt3rkgcvFPdKLyPtBd3Ph8QuCM5egJNj7N6EX2RgyFG",
  "key31": "4pBZWj5fjGMhATUcLB3ZN3vjX2WLRspsdB4uvjmUtF1XpdSVG4G96VkhGEjzBMeFXPuED12vaC63HJUgeu9Rootm",
  "key32": "2xqwg5Gr9urMp9d89eR7DWcrhigddMLpd7dX3P6fywDez7stUjiy2CTq2bH6RfwCeTwj1EUtPJehFKURTk9gGDd4",
  "key33": "4dVsKTJp9ztrMoPE2ppQwpK8poxxDRURGawzWZXKbskxwdkdZU4NjQuQ4t5by5gAtYshEZzNqegnErQxNrqJV65f",
  "key34": "UBonVqmdmdwcAfvtVEgBzfF2YZmB6QWCtQ9FZAXbmLrGDoDnRmUXP4gQW8q93dJ7DYGFcWV45dUJFdGX6sF3kDm",
  "key35": "SuTK3Gc8tHYdRBUvYhiDvR8KCws9zMf8wnLBAT7A7DGbNHutYbYvyHyaW62yjscBaZEmwCiyHjNFPLKsdu8eQ6b",
  "key36": "5H8Fd5ATDonic979WarKX3SuxPWiLDzgdNwGv9oTCTMhcN18Qu4o45zWka9XSZydigP2wjXwCBSVpTGNQwozZvCx",
  "key37": "3Dano9WgUu448puJFvwG5X8XsQboXpYUdTzEViwbmijoiB18vGV8C54jGM3opAU3TecAdTqSMoja43YFdYqN9MB7",
  "key38": "4o6SCfqHV9c5Qc3hnzZRkc6ofgvnn1rdYbZGu9uMhBHFZU6bArT46wJcfNHq8Wripz1ttiZoDJ5UxteXgVH81ofE",
  "key39": "4sVpgpVrRcga5V5axQjSKoU2fE18mU3QekhgB6qpsnEuMYpeX3DEYZTYJKuhfuSkrVAqgPT7GsxTnRYxdBPY6dRi",
  "key40": "2M8bYL2aco4T9ax1ZrXBoRbVb3kr7xSNywVjmJdjJ7vEJVM6mC52yE1a2XdSnckjCQHTDW7R7SS9FugPiTM7tQzS",
  "key41": "5JTbEHoQ9nQZVgc587c7wywWTfU6fnv3uY8KPNSMo2wGah2t27x4QXWdR1RedwVywcy3CXtTn2guL93tbvPLbKLZ",
  "key42": "65RygYSd3cNfXar1WGPJBYfPnWwmUGL5fBrCKx8qkRJT65gXtYRzmn7wX5LA5kFAvTTibZuJnBgohgn1PUGKQfvV",
  "key43": "2sqsF9TVqQo8JzTxAvQEp97EYa4vyCfFvU1Dg5Bh6wFmF2a3Vn5d7Z6rfXZ53PfgzZbXGeYFKsMUKWBa2wcJLCnK",
  "key44": "3dU94ZGXJCFB3TBuTNp7sxm3JmNKd2XVnM7tkV2Xc2rcisJXLQEm6W5xbTGMFRdTgJNHcD4amNEeuoLEYoDqao5Q"
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
