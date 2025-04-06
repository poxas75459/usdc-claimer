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
    "ciY5t9xxjHdk5fVqsaqEZf7VLtoWbvyD52SLjrqk5Rig4nTczKJkjdLdr2eKx4Aabbx29jwCZZKaw5PnyoQ5UBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C8MtzbaHvXgHCkN8i9t3Ua8NQmofWHhNk9RiLWj68KPJH8nExEHBzSe1FjVhdnDfXrwEFFKrrZAZjWAHz4KgMa5",
  "key1": "2sQ7pxJccvCMNft35YFoGTRU9LHh5hM8KkiK1C1cYUmotZJTddMvC2vYmDp8BriDxf7nCCnRw9NvubcFy56Cbk1u",
  "key2": "uFPMNzroJd56raWm1T9VquY9Dapjn3jYLucTHkAQXSgFgZ3Kkn7oS5FcjDTaEoiyk7sTufpsTWeDsGrpJhm7gTe",
  "key3": "e3HnXhhZHf5KQLixPnCQbgHmptjshHjy5d8MjVJR61eVmvHH1Em2hkVQDcqDPipiNtSDr83UL1TMiJKDYF758cb",
  "key4": "S9X4SjYux7VfxgWAdo6D5pcVywMFwRg1kGS99T9GJbpQkgwZ4Gs6CWewCK282ogsN3WSSFLxk1q2LhHqpiQWydn",
  "key5": "yCvBbFrhH7AivPY3cWYy3SomEMr9XJ5R7apXU9rfgPaDpxkwLrerbUwPdyCucE8mSWjsYyCXYs6aaYCiEP9t1f1",
  "key6": "22Riqm6JmuqhhF4NC33oPs2Mq5KiyiDNfjYE7XyLF8F5jdvmns8N5S6y15MUan1mJgzM8SXVtuJrWxLCVVzUkvC5",
  "key7": "MRtuuBCb7KuEHtZhjz19sJqB4xjevXf7d4gnf5uE1FsVEr1N82bFD7Zh97FMVuzF4JmsSvbvqVTZqNqdvQyNRhk",
  "key8": "xB8t3KJRKFEWjEMTHDA1o2FYhNteg3grggKghigPJHU49JCw2oDEkWsx6DKD392Z1dhmAAtbzEWaS9a4wa7pAka",
  "key9": "2wzBYXsbzQ5HFh16bph7xiB9vPYKMkP2iHsnVvmHS64F3YWJbGF9iuy5xYUDucrhukzAwVvnrmmNayanZ2Yz2F6E",
  "key10": "5Zt25yu1t6UzC3gaXPkHSt7Wr1npHkQXyvcY1iJ38frBBNX94f4Ng98GhcrJ9hdbJgxPWkCZRWYV5T66wwuufzFq",
  "key11": "2tPD5VQpEeVHRggxzd5kTJfx8EbjnoVtfYQCbvW5ZfXKZV99kYxxUVfjmcR63YiJfin6rEPSH8v2qsS7fPP6do3R",
  "key12": "3JLsBsMAa3as9f41L2gARkBubAPhXwCTunv42K9UR6zoPfbotWA8C5cD3C4NtVC1vRB6GZysTA4XyZ2iBrwZ33D7",
  "key13": "3KB5fV5HzcB8UzwXDF8cpo4KoahwhCJk92RqXNQvApXsCv2tcbkcY9WmwyfBtHDbYeMvy8qT4AU6ENU2aiVxE1NJ",
  "key14": "5ke6azvvhKrWqNLAbp7RegV4NFd6XeyiqCe4WSvpQe7YVu53k32rZ3LhSn3zPCMiugNHShmfiwMTnvCz8YLeHqep",
  "key15": "3MVCjoxEU2spwa5X9q9H5ajJ7SdYFF4zwgjzHdh68kZm4uiURzpkZ3sRqqgsow3Q5NVS4YgmeUZk2HiRZNJm9ie2",
  "key16": "2caSQdywHSrKd6SRwBQ1fJfyJw96uizAT1WZ3GV4RV4hH6zaKrvfheSrkanSw2GR5nMFB2wjJHg1JCr24ohgZbnf",
  "key17": "5BxQXEhqTKCgvwkrZVfW1n4RPGwFw4wb7o3BSLY4bbB5F2vNDs75excHcrT6pwLbvVbzebAEdQo8bvjYoZK4CMfC",
  "key18": "jWgaaaExhSbBH7eRuX8x3zSeqK2yzN5dFf4811KN8maRJJ7gWGw8ZgjFBL9Y6QbwBtB9CgB1ys4W8HoJQFyJftc",
  "key19": "666j8NsWmNhRoENiM134oxcpKEso2rR4oGmPhEiBCDbXPHRCxnzBDMVXwsW3BKab9YKGajycSU3BJ976d3u3XayF",
  "key20": "2He2qAP1vzUxJTSugZ7eYJ9yLm6KnoSvqjLXdwLMSSQ4zurZoAzt79F2LyF38kbjFKvAJRtdjBFMrbAcKgepnmLT",
  "key21": "5TNmsQSbNbqKph8o2C7EAHyUUYrN9EywzXqW3TxQi6qsophGf7JLQ94hVK19qRMZ2fJHaQc8w9BCviABFDXkFJb4",
  "key22": "3xN1bazoMf6gfjNWCe32yMLmsMWWJLgqAt9RtyJejzQaz3ops7Q49kV9WnoEknFDephT9NYJC2EX4KzoBssvoMdM",
  "key23": "2bkuCd4waxcCiZiUBCxuhYkDSnt2WTdfZT6VvAhxF6jkMpbw4nCt7MiyYszqz5RDLyvA9v87Eh1gEAxwh2ZJX8Wf",
  "key24": "okNDo1bEBLQvyyHpBZyuendw9CZpAow1zG8iTUFoNn8wywhEBdEaDpf72qGU3zcfZLJ1TfjFEmD37p1AcCjWMyR",
  "key25": "3oSE3GEB7kyMfwjhbZ4pcSwiuzmsMwC8frSvrqXAUUS5bEZyEntHhENN8m4PHGSUm2CTERngRSUmsyNbiXWqgSZC",
  "key26": "3fp5XeZzAMN6HgJZdkxRfiFFrGtDVtP2FM1vyvTTBQFwFSsLZwxuZawix76ZMkVETsUzvZi2WMvVdRn5XcyjGtn1",
  "key27": "XcTr5FoXGjLtzZh1S2jfXuccQzhE4kwuXroUH8NzTL5Ny6RMWeyVtQoQofA2edLGeUAWcjab2gEeThF9xRFTv7B",
  "key28": "b9m6T1sXhw1KgtWUrdUsjKk6VqNjqtou6hPBUybiGSqxB3yoGcxviCsr9PuLEVeQFbgHezS28A5aBgWnzkDtf9c",
  "key29": "53Jq4geuu154J4AH2DujNnwip9MiqGWqBVRpR8K5xyKpFa8kMNJ7FaqWj6maB2zjtotrPUwWdQtP62kW9ueXHcky",
  "key30": "437UaE5ALFcWDn21FoY9vkM6WkaWjPmSEti8WjrzFT9MWFjN7KXVkVDkp4mCy2pbCtg3PEUzjge8pdUQZUNVgZNH",
  "key31": "5tWCAtRavuD5R4RCX2BaoDGJh7suPJ4kbMpb7wdhL3oyBrymB8PthaLSrYv2x7fdms8mqQ9sXnD5Lw6A8EzVGcbp",
  "key32": "3CJJtL3ZgNUQ4naef9gRjvEbqXpTgkJFT9mppbhsy9RSiKBJEf1jpGfS7tar4k2c28mSTadDGgdvoBPdwQJgJbD7",
  "key33": "5rweGjN7oYhDJxwiMtyXGLTG8Zjqfvp3GztmJhtUiNwv7gjbnvadfdmq15uxo2qTbaM6HVQStyAFGDevoetM4Kxj",
  "key34": "4pfKhhLneH7HvBtYp5UAL5HW8yNs1tdGziz1AfjZUwQA8zirgHiTZMLa3x1UvkE6T92zKxR2dfvZtJ3RtmMNXNYq",
  "key35": "4ahd7KJM8qTk135PpewscCfyZEzJ8egqWCKkxzi2eEzmZyX74aVUM5fSqDnRhJVqTAHMChXrcyjiEWX1AGr992iH",
  "key36": "5jaMXM96neiHN8yTaAJYw9h2BjGzYnrS1BAzug5748AvUutd7T6fcEc7aPeoYJVAFZ9gXSKdKyDmP1sKtZX92oXp",
  "key37": "5Cu8PC7QmK8LUjHid29RNuxtmnkgxi6ScpiwU5VB16RSF7NvUsM37QPPSzpwhea1yH6e6kUuMhKJcP8o23mX7CDg",
  "key38": "3m73LVG8od674N2BPrWTDZYH5s2MVt32QyJQLU7D5hc7VsTQFCLns9Jaquat7X34Ek8vQumBQ8YvxdP43qwQ9dK6",
  "key39": "5cg4hxz8yfmW1784VNTL5ZwCkLGbkVwZPFFqR8h2qE2ceou9sSFhyLAS4x2j4WcoaeUwGsTZbWXYSDtKkre8D3jR",
  "key40": "4cnREbaAgMkBP4XMxB9RZUcwUybUDYdbjEoZ2zdKKCw3iB9313NTox91i3d7zXoARb9mPMvAAXLYGxv5KH4Nihcm"
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
