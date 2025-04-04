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
    "3QZB3ei5kCxvBmxApomK1BMBfubV6oPUBU8xQAoiEvUwyedjUpMezK1TkrEpGwfjUjvsAKBu77v4VGnRqhqXvQXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWVmH7DWerY2zibGgdZDNSj3GxCKxMbqszL89xG9jqs88F6PbMmgKPfkV7LqfePErXATTfZnseZuKYmMSYDeXFS",
  "key1": "4reMnp1HZ4kj1HNjYiZHUN1GjceEN93yYydoUDmHiG6fwy4S4xvgoDY2PuAL4yDVVuCxSfTzpGRWzeefUJuQgFEU",
  "key2": "3Tw1jxxYUMyTwLkX9LGGCB8Y292opZH9kDJVpYm5GVVCkH95ASHNTNWJihSePnSVqGGc3tpHbWFHpr3GXp7JeQnw",
  "key3": "2Eqm7A3AXf48VgkBpPHAtAvVU1kwCaGQXXBLUhnpXRFy9ro77hmTVwbeL434Ve1oBdDe2KYkvbUazhKTAScJ7Aoi",
  "key4": "3uueEM9kXfxZwzsDKSkVgBQWtTwC45Jgd859ih9VTeW2Y1zsmLPjuQfDk3iw4WkdUoQkzPZ1ce1qztimTRRXsqoo",
  "key5": "3J2bBF2KGmqruu68NFGoJV65nxNiRxrMJhbnKSxtF5NjrEFn86kUdQRDrB2tbPrKnEAAsS75uEMf7mNPG4T87xHK",
  "key6": "2bzbk3kqynSC7A973MqZUV7xNfq4i9gEPJF78JBcpnjKWdQ9zeornF2d2VTSMHsZFJgYTohfizort7bgnpmiSkth",
  "key7": "X1iBhQBijUeE7AzTYfVEkfnxBjikB9CK22F8XSayJYENUxkGeguuFbcSpk9P3HWMKYvwn8JmtqYvLjyPXEDUSRM",
  "key8": "37zMkK5FGrrJYSZcLiqAbehFmMW4Coku2NzyQDQZbFYsuNspZZCt7PMei6GVcJSEgZr3G3wYQi94L3aMi7pD2Lrv",
  "key9": "orSUGtuux5ZdtK1tnbVL2PxtftQRVuqhBj1MGH7iuxyQCgaCZUb7vqWMi7MSaePAAKfuuHW1jTBeJnquA3hgmZG",
  "key10": "2zTB3V76XTYgPBRQRLk9hUwndmXE2j9NKJsbfFqUTb9e1qCEBtwcayo7WiisbKJZ3TdaEY19uQDXNRgQNyKoDMat",
  "key11": "4K7yFYxeRMZbi152pCa5m18eV3eotfBVy7E37fCFzMg95QX1Bp8ytfPunHS22g7wG4kLJGRjvdCcgwCE59nAozAM",
  "key12": "wM8co7RRAxaBfw8khJPtNEmQdvLXu6MHPPTVnbBVckqCWQ1bawAnGDVaGLrh3GZFrbKBoxAGie4RzfPSSxinQBA",
  "key13": "2Wa2NEJe1gdrJB3bWFjTMc2hv79BRkbvveC5fHo76qA91dkTf2w2L3xiyXsYiBMBmjCSMkWSrBc35q6QkFcZhaV9",
  "key14": "XwXfuXNAo8Ptcggerw7v946NTJvpuzBd456AmB5wfTqMvE9KWFnxxQJi5q4zhACJKpKw1xXmuXWHunTzCa2hMut",
  "key15": "3rHuQHGfnhUshYzfd5tCSUPqducGhZasVMzRz266DqhajBg7frYQVopwf6qzkHYcvEHHf9rWRM9bYeSWm3VQHkFS",
  "key16": "2GD2ybsNv5Wfz3fuB4rDZhNbvrrzrMwWrijgmwSKQnU9shdYdAJ3wni3FgtgRXb8ZXDget9A9BGjvgBSEMbJa5ua",
  "key17": "22szC78dqJvb3n8ip22y5tEYCvucpWSVZhwqBRusmMtV3Z9hQqDBeABScxTExAwiMRSkVVPH51dsvCscwv9TiCRj",
  "key18": "2oDd2rTF5vHQPyHwmkgYXhou8o9xZGPgmsAYkRWCQWcagRCLsP4rX2qDhNxwtC3mcXkiidvkecKRfVhqdWfhy44u",
  "key19": "2YVE8zES3qG5jTLNA6kkc2JCF4gaQZ1qEme146ZNzktSJfw7iBNXfGuFJHPuzu9NC3FDQ3a3i9jQjaXbi3M8HGjN",
  "key20": "4Q7a1Dz9Wbm4QLwrzEky1ucpRWvkurUsHX3i2V8MFfxaQaQsKwNS2LojXN35goLuPyuXw2qAWHyTKxYQfAHvjSQQ",
  "key21": "3EsRWfu1epHMmxUugWahMUGjMoTfdvVefTPsiLees5rQ39PFjZomjTxFxsjtdvjFcNduuAH1WNVpVbcM887SD1kv",
  "key22": "4MB9pibLy9PRJUAW7xrMdEkjYDyYxEhLd5MuBTjhcmMNtU4URXP4TcDrpimKHw6TBYLaHPSdgQdJrTJCagsYEdS2",
  "key23": "2CTXKURZbY9htWmga34BC1RMFUvMtbHYkpHWf75pYcjjByLDv3Cxg82oZBxshTqLf2Nc8bYcQdLchWppaNTQ1U2y",
  "key24": "2qZEqz5JwJY53e4APhbramuaUyyK6yPEoVcxvxEM8w5ocPhNYkMQvYnEN5UUN2sqEjR2mVpJjwKietZDhEb6DpAb",
  "key25": "2LEFnpUmT4ZVfF3mu6zLsgSCFExxxWcYhkiRVHCWB1uCSmetzXd1rdiUrtHxeB6s6ncvyRGUnL2tX1VRm6eXVUPN",
  "key26": "4tK4PLG6mAJNs65c6AJFopbMdh3GxrxQzduQFyipSRpPFMo9YHgC2FVWk4aPnFaaaVHhX2V67hTFTuc3uXMrtaFB",
  "key27": "4CkePVK9n5NeHVQnWBWS3Rp6Svh1q8n5sdrNP7B4bsJRv7q41DLCsUR8J48gnM158viZGxxdGLaFAho7BjjUzs1p",
  "key28": "5xANkUjJ31NtbtAa7i2e7JtJDHA79CDcjKdSyqTfbLPPinUu322daTv8Ws37y8Aq2L1fvvQeykvVmDbvqcCTMbch",
  "key29": "54ok1qdvgSwGDA8gjYDHEDMkt4fV8gvR3bB3vUwBTwF5VX3HXa4bwoCV7XCrWLBzwMoiBPSotrBAXGn18vGUBeeR",
  "key30": "3ZkfcekhKsQee2jzFhaET442Sxi8JqtsGSZs935WpmoQ8gdDv1StASGddaPSGCBKUBBga5cWzd1o93MNyVEtp4MR",
  "key31": "2x6eZN4urNmNEsaFucTdTutJKxPwLqZJwoEFMfUew4cPydj8KUqhzomJ9e7KMAkdLGt1c56aX7ZCwBC4Awm4nast",
  "key32": "4UmFfipaWgbECVMZ8LNrLgMVXgyKumh14hd5JhCvhrbLM4D4A4hBxYGp8nuTytz68Af3KxPHk7etsKjJ6n7bskDk",
  "key33": "2yAKHFob3Ysjoajj7YcVhQjrUXZVFmXmaqBoeX6JmegVm9m1UYK9mHAhsKrLqagks5FjK2NCbpWaBra1h4mEDkHm",
  "key34": "2U7HpHqMd6LUq2xLUTod7rQP24wYN8ekz6FNkjwGoyWUfQqpqgJfLn7bgzzpUwdYPH7fV219Ta6GTvhRJ95b9oCd",
  "key35": "3Tb8FsHbQ1YWuG2SjLBX6ndEkiPRJRyUQQvQriTtXqG1xXBUyER9vecdJC1yLrn2sD5B5cEo5jqT9x19Tj4s22Tw",
  "key36": "2ir7sQUfbKfJX4yKeJoWu9sF8oe8U3nGmzxJFP5Xemn7iFixC1GEEsuTvgfbrLmYu1vpyCV1sEw3JE52KEqsyjzv"
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
