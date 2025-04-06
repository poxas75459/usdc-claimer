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
    "DGBYEEocARVRkK348Q2NfAd1tBZs7sm6r7fD5HSFzFZBez19tTF3P7nQbDSDMTmNgKyvapNkY4ter3fS2pSXxp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yhn9KSbx8a2SaHdziLEz4Y7D1Mmg11AciTzBWbwftN9LVrhDfXNjwvzpDH9VEC2yfeKzJAaehunCVmGmcCMeex1",
  "key1": "2kU9vhUQgw4dpuuN8Q38tuCQR7VLQtTS2kAhYHvKDR5pTEoVdvMfocczBAFRKH6PkQDDwkBd6NSXPsUsQhLJbqRx",
  "key2": "4R9RDnVpaTCFTnP1ViwvDmn88cjQJaZqyG3KE81GZjLBqbRzc1iXoAxBkU8SEV5nJPLbjFoKmtneT7ZVkLvGMy4B",
  "key3": "4iMkhjTc4JA8NVBPjtqJacwkzD83a3L6Aywo3jVH1LmzC5aQrPezVWbk4ffYVh4FVMFQe5kuB6trMGTbaMiPiKYJ",
  "key4": "5KrA9E3GG6gKwZsciovhwW7cFmF3eRbY3qDguPL4CMTGWprjPvdZxkjUnJTMhgWurHCQkSp1wHavLGSRjfnJmcc",
  "key5": "4awGvMU17FmGJ3FyojzXhajm2erGXX6dXqrhMHS1DDPvhU5A67B6pneVEnfJK2ZEtgMkcqrV1j5kRkvscnDFFisn",
  "key6": "2WojQk5rDJPV1tKBiFWAesreNKRnRSA98B7fE4ypMGbj3ayVSTMMjk76W7jwJp2DDxm6tAsm1pGopuVTswsHGZcU",
  "key7": "syBwVaX3s3cNeExdEbc8cTpbg9SvX9oc2CnvwKxg3cZLmPNYdnKzUF1rvVPCAKwyVGBCoPkwW1WkYFRP3Fofvs9",
  "key8": "5j2hE5QALYpjRzwb68qdTJr9UVZYyTcDNhivfJue4KhrTQbYcGeESq14vHWBqs5A45dNYq78WxFeqipwPbK4uGM9",
  "key9": "5S32zTXzTSmjD44UAbu6vcqUEKJLU8A71mFr72bGLpcZc1C6QeDG9D9B1pM84YZX7pexPjoqpf3TYgbseBQXCz2g",
  "key10": "3vBGqrVF8hWGs4h7HYGeQwft78CYN6T2EAmryqVxiT4kSRkACTt3fdQpBES5qvuQ7YPsSiqDGNcwnWSYuX27RoGE",
  "key11": "5L952VckuZR9kZ61MEwBP1J3Fnmoq2Lp1Th8fhEbz6Ry8Y2rNsQtvcAPoXyXosZNvTuUiMLFEjxUQXgBfsfKRn4H",
  "key12": "3Hz1dRxj5skqkuHqECNTrhyS1s4urzWofTMG2YRQ6PxeGe8tei6GufjLbZWfHh5HZ6UQLDu578sayv4rXGUyvUYv",
  "key13": "2TDdoQDaPCT3vreVCLGTKF2qnJxUTYBSsGWiUQS43cjuJnxTFWbdchjmKv7AY257Yy4UtwAYpZqepkFTnj7wHxn6",
  "key14": "W5YdgYhDZuC4kW7YdSmPHtd97xuriBTKKG1iyLKVzrLhNARhW4P6BjRsLpKuSuKARUk1TnZUSPz7YWnLizGt8EU",
  "key15": "oE3qZ7zW6pcm8GUi52fX6vXeAUGfmXjTb1ADznVuDWPc1WdTnaJbbwBp7Pcn8AsfsfvkuEKB1e7ibJHh5tdVahT",
  "key16": "VK4g7h7NPSsEtG5iMrAgYEB1t8DdTLunpCuX96C1rrPRU8RbY4ijGuKy2rVWYswBVYqD35trfjyX8HNtGWSmdKc",
  "key17": "4kC9WrQscoVEFHeQQosvj7UJN4tHDdHXzX5CPGs1gN8hm3VPHBimqdc7ARgSYkkq1L81SC9HKyPjMyvuUUsYHtD",
  "key18": "5h6DbmnufR7tVAZ7dZFDRwDR8hGmK4ojY1gdy1YDED2pcBd2WvpWAPwZRyg7X4hHjgoW2mFKztiUMUsemhu9gpug",
  "key19": "2Euf6Ta4anzcTaQ79JLHzeT9E7CjK4pkJrSxqM5sN2kjDbA8vvQFgHp8CDicZqaiyhDm3MqU3D9ha3Svvaeb1chr",
  "key20": "4qXfViHS1WVr5uGaoh9CM7gDDU4rN7fc27TAGLWU4c9edoCMFervVd7C9YovE6TAx1aepsx9UXNQF5U9Vm8yUdQG",
  "key21": "3GBEDpsVG6rcW5UxuQ7QsNUTw8HoCjUCZ8QpvYTKAPdB5JYQ5UENcXpYcVSLusn1mccGFKjfV1vPjjhYKbEsgP2r",
  "key22": "4cgqY1iLdpi35Emp4uvZCMmEVLtjcbsiqDEyer8pZNdYWGZpvCvbbTT2q76htEexPt3LLoeqqhfysZSS6rG5a86K",
  "key23": "647N9e3aRxXC5P7UokzCucmZqR5dakKpt9mnCYQXExUM2WjLiSqtkJkKFvHRfenftVJJiubFRnHcvMLE8buwhwUW",
  "key24": "4j2BaH9xhpe2LW4sEFad6oAJgjH4HM9BdTDVPbce5sSC6x7DZCF8UXfmcrwsaaQKiYiL96RdUBcWT8UZ88MTeTEn",
  "key25": "48cfsy2ycLF3s6vDD1jst7ikgKjFUTgz62B3WxxPyzi8otB6nJRyD7bqd3sM1gubji1YcBxWHrYXhHxvrvUJThiD",
  "key26": "RNXUpqPaR5msHXimZuo8LfNbcuyNFgthK6Kj3KCfdCQuzy4K7GzDWhfYyE8abS2URD42BsfMfBqvWV1qHAUSP2V",
  "key27": "2CGzAfXtkQbysrhCtZh7P4K53K9NuMSX75AEKiTa92UFdynsxJdzgRERKWuHYq9MJWRuDdrHvyA1nH82n7Nap7ZE",
  "key28": "5tHKe6r4YgEJEPasvrp9dujKetFF7W1Sqa3czgRNMMH4GxT6wuVZdK7p3hFrdXSCPTKZpRMqpFAxJVjMe1VheMau",
  "key29": "WdU5SckjnCpkZguySUyMCf5EZx4FYzRdWoKoGPtLxFLXCUqakGr9X8a9q4n8tmCEmDfVr5J1w1pQsdp8ymUKP5i",
  "key30": "4G6Wqnk8cU85m7XRRLsBjGUop2n1NgbwUw6RznktJk9cf2ZXUqfDrCaXzhi3DbCzCBYv7CD2VP98D4nDT56ZYoYd",
  "key31": "62P2uhenkZ8Y4X19BtceLy28Zapp8PnnXUB8RicgCjH6eETTcWH5SqnPbhkgNZ2U34hb4KNbdCdtdfSTRbp65Shu",
  "key32": "2uE8WkrdY3tGcZpxfj3ehkvvpibYazydYAexEFT7h82ia3VshvcvjhUMLHNQE3ezhrNGdCJtwHAQG6349HU4SKTp",
  "key33": "VUjkbJUyTPf92VKbHQKXtQAUGv9hNQ2AmnXLeAN6p8UBooovzAB57KoHPxsCUVLNjkbLvWnLwWGWRLNcYFYqwv8",
  "key34": "4rbQ6VgSA4Q8gqfK42rvN66tmfV3afPLqH86ebitKsF1SPZxxzxkD3hba6qj67gucEYiFiXusxDdzD8cv1EMWmcM",
  "key35": "5LCvjhVWYUUcmyGXkWR6ePhw6vKzokZNxGQV3szabsT1p4LUUCQ34LV8R78dy3SqwRWyTnCxCwedwb73cDbx2hv5",
  "key36": "2Ad287XR6CX5USaZLcgiyV3Z72KU8yqAWYDsRApZsPTr1kWD6ZHg9LW9h1uRScnZ8PPkdNuqLSdhKUPwmpmwi4h9",
  "key37": "fw6udsuiCApCfwREc1PkSirFcAND6f3647w9PgAFK4g4smmCKnC4YSe8vFGqUG7Tu41aPDxRvQpbSsRJ82bnWdh",
  "key38": "3CcvyhLywGHDPqfm2jDZbvvdqvjC3StX238ekfMQJsPNrdSbDJvbcfWjSWYumBFP5esDxKfTzscbqHPeLdJ7b2pM"
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
