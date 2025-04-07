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
    "23h45aK31buKkYVNwjPgsvTEfAAqHJLytzS1FBCQtDCaK5NJomJBE1G5x2K8n8DdGdKhprVczKnpX9TQA3aZxber"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dpL5F8rbErFP9awqCzpJbEM6P9jK6Zw4GLDemzDbCva6R3tVmLpmyFEBFb8SU85KtwMxTTGzkbztnGthUiAVJE",
  "key1": "4XY71v9cF8ougwbiasnqHfYqHHcgnkKVjNpzzgLjoo5MYUA7cdscdAkb6PwLqqLeuZ2QHR7gDi6ousCZNK1FA64Q",
  "key2": "256LRNTc7F4PVkdcyZtFndb1DnH1BzPtrHnxFZEst5N61Sh1GJShZxyH1kdcCdLdTgke6amwKeD7E4RCWiW8wdLW",
  "key3": "5nj4onosypV8mDTWhJjpSo7Ucs5edxVHH3VVJYDABtWwkifpK4pexXoVJLzriU2PPj26H4oW56B6xghDFieBq7Bb",
  "key4": "4Msg9XFVNAeYJf4CN3wKkLh8oZjeqVcq4MAJdCzx9BvEL3AurxuqqKeQL3hrnWtqMA9DkERFsm2LqkMJDFy3SHZq",
  "key5": "2DcjTeMToTigBWUejcWXE9ft64TjZ56A9WJGGRaVcUtAfF146ZAMJsdKLatsmdBceqMpxs6JREJ6MA8KVpMdy1no",
  "key6": "jSVc2u5DdzkWk95T3X43qGgUu7LfLknm8v3v4GA8zXBG9CkotParizcE1TbcyAFp4L29GeZHHMMafM7XpKddFBW",
  "key7": "34mUrsRaTYh7FqEsv4ymp6Jp7mkBDZfJRpawysDFWerZnitUHG4dGUxZNGnWRPp9ZZmcs1FDJ9hGsoLsNwac1B1z",
  "key8": "xZ572vcbTvvT4NCao5geQfRkqirD8bWQRhKEUDLEVpxmqQgybmXEVvHQHeBzZyQU7LiwUQ1zQPUCZTYjZwPirwo",
  "key9": "BtGVtD3ZQp1vGVAuQ4zzY9atWdybTdArzvNzuFTJegqU8QN5BJhUVYfHc89b6BkkKUbapeLekPLg1MKLfXYYVcq",
  "key10": "4NVdg1StcTctwdP5K6GTApJPvUcDPrnRa216XdjGR3KaybZCh7AiGj1Zsv1g3xcCc6KHBtK678g3X8uFg4CHxwh2",
  "key11": "4rYuVKBFxkAEh6gUcA9cm3zUnBTFyZjv5kn86rs8KNTqMtomCZBHgFf6pjzBdbWvXQiMgefgnnxdB6X9yXBP1jgW",
  "key12": "4VMmJs7rGu6ybxWJgJHgk3A4uJG6af6bDi3H2afXiCEf1S5d1kZveMy3HsBDg4ntMoWdUBaA3BXzYwbfymdspuDB",
  "key13": "4t76LmDQHiam1GEBLKypPgpdLDDzUffeU6eqSMhStn2EV9ysoLidg8dRh2QNgtjkNWh6SSTQEDWdMXAWytitTTeL",
  "key14": "4Gfwouom5pwmQ6UwLrQjCegTQEJiB92XZSSi3tjDVv4kmHKJHpn341RoNofHrxyWbssxVwRhVF1LxEAe7XwAUUXY",
  "key15": "5z2rG89Vq3mbNAFjJEhLHrpWteD7W1ZFW34P6WxRmzNyZTw3Y3T1JT2SPXdBfPZU6SvZyJ7ZuyKvncwYzqivRFJe",
  "key16": "rLnkKkCgCz2Ruivf3BpCD5ruy8M4K1mSV65fGzwxSgckk2j3qYFDq9W5rZ4K1KRuBhB6Df1CuF5FBcjYsZDYrmE",
  "key17": "2YZ9giDCB6aWK7Utkhkbbqp12v9xc54deBJxBYzW3WAkbZcm24Xgu9MWsw3hNLaCpqJZ9brEU9YWQYf3jLCL73Xv",
  "key18": "3zBoaSjvQyRi9gMc4CpMCrxAFBF3Khstpj4SZna693Z4aXfJYWrxKeMLKhbcSS7VpmmdYbMqBejmFh1vsonPM9n9",
  "key19": "SPC8wasRnf9oh3MuBWKGzUhnZcyPANpQNVhBFQ4uEiLQ493Z9gGV5LCfoFFUzvgrL19MRrm4cW7mE4cFbrN6spV",
  "key20": "4AeBfcAaYZGo5KSz6KWqzh68uwwqtF3D4C7z3CgyBX5rNqJD8oVFJjVttgA26G1xe5AoWFCookqa7fQdJsKBa9j6",
  "key21": "4qfKrfKfAYJiefjTuQsKMuaqb88hEwdSESZvGKLTz6wWWU3zb5Wwr2fsSXedsGAKeLBMvTDFsE1AWqg3gpDY4fKF",
  "key22": "4kd19jfBf9kGgTsEFub7NEAWxy6odW3vMMMBvV4xMkK8xRL3StKJTv7gGQek98JyL1nQ2MSd52TMxSLSKNjtW1da",
  "key23": "2rdhVFvpZqpx1ZAUdthbyBcy6XFvh4gBDHYkf82JEjHtxmwR8cLgCVfZY6tr56yreDWUGtzpyf5kxmAd6z7QBY3c",
  "key24": "4xqeSU3CkHFm8o55k5kENGtt33wVt4rhMPm1j1KjifrqAESieRDnLE8xSjPSm93rarzFcC1UJhHhb8DdNSd7GSP1",
  "key25": "24NUbg9CxHwk8FdCapPfNotdu5YA69aMdhHzTk8rUUsK19mx9QCkHgWPuSzTg43fd2NZFbZZogbVVdzu9tnY8QT3",
  "key26": "4ceGKU5395sbAS7TDjt21T6SW2RhEnFzyHhJmcvh4tL5gDgsxXLCJq2sMTDXjMaDwQnX8jALemmUUwqmUKiMhPRd",
  "key27": "3dpZJ5H3wswoV35jfSZwy4X9QKXAt3LmgAWnM7AnVbVHhjFLGgdo3MRo1PXgU36NyLY1STv6rNctP5QfzDFwhWFi",
  "key28": "3jBBbjH9N1aHpXhoAyaZ37pdhMwYb8R9Fm6uKhNJfCBLUGkrRyAgBSoJZDxHyhvBpAgGCWS5VXuLtmtE6cSsCjCL",
  "key29": "4C4VXUW5xPxoHrFy96stRbgz2UPMyRdZAuUfhgic4cVafKGE7ByB9LkscRoaQFJRbxiEaQFSqCyP477KVjc1uPHz",
  "key30": "5kjKqhp45aLf59Wsv2VpyyXhKqmMcqxdP49LS5cYNuCKppbYiymbhoKNFJ93arryDUDcVaFeitqKTrK9VBW775pM",
  "key31": "2XPAEJrcAiJUWE6pMdDiQNUcxT2MaphW7M9nYz7VYz2GPxzxVkup3Qqg3ccVupru8PiR2CfbWpCuK97vF5Q56D8D",
  "key32": "5aPVu1nndrajRPatkySoFRnmqEbkdPQ3soCcZqZgvWT19S2X4bsyeRZ6WLuCrQhjGaSRssuMhmEMNnzKCrXwo9tB",
  "key33": "5T8myU23tjEPSznykiGykt8LTF5JTHENjmBF5zjCu9BYoc6tzLhnnZz2hJcEKhoMeiAbD7wCGqnBDjvA3c5copzK"
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
