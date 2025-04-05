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
    "4i4KV6TuqPatPXjAFemaLtfBjpcCaVmnAQ1tskGhk63LGzgMUSLd6ZwRc7pU8q6gmgMGFFc5tzhrfgcHqzJZJmiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3UW3vrJeR5YrHFB9mJdFK7ApkfyGXsQm5CwbAN1EFzhff7fEcVvvqDmmVpxA8aRRmEuvRexPBcawwdsH16pdmy",
  "key1": "3RbT9Tmk6EVsjYNY7aT5MwMwkWP4hkSabxMQJm8nCJTLTnGuoLj25NYmScjCovPaY3BWzP1qMDW53E8bB2QD11Zx",
  "key2": "4qwX5t8y3BRk16pRZsVQTyfv58ykWpHTqsfQK7j6AXfTFfehng8V7FvvZhUQNkG8qwEXNiekhj2VHvUCtacfHdue",
  "key3": "7VsSQ5GHHCZ4xnJkguZAjCZLv3v5SZ84KwbZ8t6FHmzsDomVhU7STqGfWMFJYW5v1grjmgtmPgZpj5vAy48DAq8",
  "key4": "65XWdRyHCoNaGXrzdCuHHh2sSTmd5nzNZppaZQmTsDpz3zAbff42eJ1ZCcr3ZDvVcR7nFy6tYtniRgSAWiK6Md7M",
  "key5": "5GuzVAuy7SK5Zbgpke6SHceMH6hUcdY6amvcmrh2P1H8D8nD2drkTgRVv2xbBXxatDaL2eSPfVpmu1SxjTsmDA2A",
  "key6": "5fj2bgtkgrqQbgR8PrMTUpq9WpciiexBZ13Em1YhwBNnePs5zUpDHzm5hhSUaTPMZdmnguESARTpyNNA6VBEb1Pg",
  "key7": "4jqBAww91za4jb7vnQ1E49n3BcbmPk14Fe5pAATZiBRGdLk74GPSB8oL41du2hbgM3NBZWm3tSd87D6tSTmpsGfJ",
  "key8": "2Qn8GFmMNvMG3rP59r6oaPxecR7ccibquQmfKTPAdNr2NPWn1Qfk9xakaGVrVBvAPXS6yA1Qz5VTgDW5c2LqyRLb",
  "key9": "2rbuWnSmM3J9i6ax3TbXWSKtjJCGSjfxqRcbapaxNbZARtKEnbXA88JyBu3TwNVniyXpV1nWBCW8gEHq3ugm9mTL",
  "key10": "4TK81VaWK457HtpsWzq9gPZYnaaqvQ1xmKA7MgTVejTHktnsczvySWoLGjd6QB2Qvg61TRCVDb4P4cLjVk4czndN",
  "key11": "3WT3Bo1Wnn2RxWNCnnRYEv2mZxvRvi3LeXoZ6nYnpVWQNDXmAjryCF4CJAWQLRosZusiyAst1fd3Ufmuun3fGRjC",
  "key12": "4s7628JhaPQVPs78Nyz8aE5wGHy2BjXpa9965nB8hgfNNU8KLititNh4SvPKJhBZ2rCnMr7ooeCb5DBmaxoAeLQB",
  "key13": "3ocZzzBYv9yPWHoJHtZ9UwHrFuDvK6owYKywjEgNkZ4urdWSYBvAzPCTy5DR8LtsrLsm8uKtFof8pAFxyJNoz4fb",
  "key14": "2Xxy4wHCV66hRLvqTmoSFivtBGWaEc6ySEunwUACF1cvmrYWCWUTrP86biMhfZFnZsTH1hrARKSYRx22kVCGjEsX",
  "key15": "TXDUzmVkVxfS9FWhCSpMCH9eB1bcQRzt8nT8eTERtwbDSDmcvQK6sxxwcQEXcpbWB3V75gL3kBf9RyEzvWeMkAm",
  "key16": "5aoP3NmJ5P3DvHNebyTJED6zDV7VBFp179BsVWc6rPVJYDH9pBqiZ72Sw3hYexw1FFS9mpew1qYQXTDPYzywkcnB",
  "key17": "2peK3aJWUHcZVGphh9tR4S6TUpw859bkFoMbJeksZBeNGrVHqqVygTKHwJ4GmHg4sZ7EroS1UrCHAfuHFr2U3myq",
  "key18": "27zN3N2kXYBXRdqmEjjSTQodj4RTeAwrrQ3DMDdDqCNSvg3gXPTW6yiqjrAA69jLSnChVxgfKX6Bk2TppzwUrpTM",
  "key19": "5EdR45Kd7z6qWZqxYFjAhMpDFzVeauwYHa7xBFQL2YRkeC4B9FVEF32xGH1pcYKpFiMFFRrXzAg66NevvECAjbBT",
  "key20": "5ZexAiZcLF4PPtcBerapksAM6MBcJ54YHrJ3stCx3i75jB1YDibHq3WUuJcUe2hgH8ieXMSdRFvNQ9frwgggkGY",
  "key21": "4iWtLqoe4QRaGys9mNE53VWWfSTybc6PvVxCX7TTtwwkLT7vdM1jdrnaJ7v3PzdqZ4VbZsyEservZkr5QFHJz8Jf",
  "key22": "5Szvk6xiCby5z8SETp91HwSqrz4zuGE78N5Y4i9bzWVNtbiknCjL3d5u5bs8HGJzHrUJmQatYM4pYtgTVddN7B9G",
  "key23": "2pq1E9Pg83fdp7KM34vFtWS5di2t6rJB1vu19Rq8BYEyY4uNBa9niBZrqxqSEnC49Yem5x9DzLAQ4Deq61twGWLo",
  "key24": "2SXruj5wPfRDjubhKDJhaA7jswHGXw7k61ZTKeXXtsyzqwE3WEMdQjHpCVH38WD2dHcyGpLBS1z1wZJ8MiJ8bRSX",
  "key25": "UKkwVVh235pRe2SJWNergHWVDduT5jkkvGeBSjz2j1EnC9J682vVzLnpEbtwf8nCPG62QNjF1GbR3sF4FVA9N3Q",
  "key26": "4f7Z9hSBHdRRHbv9CaUcEDbmFGmQgfYrNRuFk8nLYeZU5JxnAGWqiEu8yFNbjNScxu3b7ubV87RX93eDdgGc9JV6",
  "key27": "5tEBFyqt66Gz9Un79XnNmrm1hrZTsEbXthjan2iuPxP7cNhm98pkw2ccCVUybiQebmj8eE8BXXcE4bfY9b8Xwc5r",
  "key28": "3Lxmuwa9di3GzMkh73ixspsbcjYZDUbFnjhg19CKSxkYqJsgv6jWwo9CNnwhMy99Wr7oCn2nJzHgW2L8DsmJGCr1",
  "key29": "Eyp19iS2tshWQio4dkmTA9ytYn8PX3PfNCKMXAQnwRhYjKNA1qSerXb617eKVt1QQvjA9dicshZo8v6boZHWXYM",
  "key30": "2fuvdQJ8BA7nLvudF4eLfsACAKku4DNbpq6weD1ca7Bc7Xc4kjUVDkDbgWG5svMpWbybH2fRKmi8XdCgSWMsmpU3",
  "key31": "4jSqRdUNH8KuEeYFSjxQRo7t5qmGm2vFCeRWbR5dxMjRsqNoDxu9jRBrMdrUmY3S7toEDFUM7h2XbAPbGRxqFzhD",
  "key32": "2SjxseMgzK6QY5hvL9BVyxWWuyxFxs1DhYdHAuBUmr45JcyWY32GR3AMHf8ae5rFmQVBSwgeVNMoC5zDbJq9Q38q",
  "key33": "4AWQNsxytdtWJiCdTFdPAwVwVkaZizReiArsPmBqXkRcQb6FhKQyuS8M2UBQfH9vtU91Stp5ECSRjUie8z27fkvZ",
  "key34": "2NoF4SdQBe2guTVXuqZsrFQiUUeeZAX7MouzxF94abAxvsmSjsk898Rpu1nQjiB9ACWhV8oExCwr9rKqJtyFXm2K",
  "key35": "41Q4Rj6ZG1Ah7f2fdW9cbU3nKj8nKG2KJdt28XnWL2t6kezpeXMMSe7Va24WXzaU5uQmAefPmF134CZYDZmCYUHp"
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
