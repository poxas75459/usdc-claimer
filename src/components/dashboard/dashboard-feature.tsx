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
    "5b5WwMnp33zLE92RmmjT7dVqGsJ1JT2FPPd1GAHo3snpYuGkMiX3Fn161Q1pUw619PvACNyewmgmto4ocj3yomuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GQguyL47LSSZoye1dKb5Cymrjug7SwR5753S1Fp56VWmqLBv5ZBAdZVEaqn36t5YY7cJhGPY67jsFft4pRQ3UfJ",
  "key1": "31GQBza9z9X5wZhnMMjWTzSpuU3uZ41fvnncsJb5WqZ2r6Sp2FZt6XWFTwd2PRuM5i53W4BeqAUkwZJNJy9GfpGr",
  "key2": "21TPescq1WerKymbS6pGRFW1DQZhCmLPdDbdWmyvvFK5BVTeeaRFDgFjqq3NHP4ZXmsFrW75cZJhCpQbHLd85hD9",
  "key3": "2fEZZECaMX4UouFnaTTZAyB5sB9qBQWCoJc7pGRr8y3nmD9qXaxa87CQ6TtFbghuKFt4YBTLoAbpxVBqYqnkGEmm",
  "key4": "2M4hRAnLXagePCsgKjFjicsbtoDikgCsKoyiq3X4gLjgZT5CzQbcYv9G239MnAVw3USeSjxpQfuNTK9kgGM7Tpph",
  "key5": "ef6haoTeHxMSRpDwhfAr7am8FQmWBFNmrANSYzTo7viysW9mMmUWiWpDQr39EGbhDNVqzuzcmLiaHg2daf6FwXk",
  "key6": "229JjiJMfZUweF3SE5KDK8Hnhj4JyhQ9ByqYLeNXPs6KhWRPsAK1wYWfXv1u9LEf11XLJ6svuiEfhKjqtQqYhFSQ",
  "key7": "66U4rA9Vb6HqciNW4z81bXeb9ttBLdC2ff4dTBzndvVg9XUKhBMjCxJndJg58opmHB3vndJ4xFLS99GencgfqHiJ",
  "key8": "54rdSnk2XAvvcXLW6nXnPNTktqNK3Db6kJpYg3WQqWKCa6Jpszy4Ydc2e5tHaaKhCpBB9uUtLouqU1JFbuttLCtx",
  "key9": "2whVM43qsatUCuAWkm1R4mmwn5shXVvuCKC8NfGWs1iVyXdutuZ57VHqwrDyYWuggRN58HCsk9v7Bkpe2pPFtZkz",
  "key10": "5Cakb3e3223L9T3mqbx5UdW4XNzzXiFj31PSfE7gV37CxymyCpbEwAahoHRRm2yD1FSPbDmWpQaomnzerjHWZAgu",
  "key11": "3PHxXGWQXMfhc31AgbUrhxCxEnLbLFxRK34ytXKZVaNmQTH2GCnt1UMMdwhDtt8YrdtqgNZ7cDFtXJfhCPRM1tu",
  "key12": "2jxzdRsfaTVhExTifKB8684J39VaxUSa8Vm72asK7bznUjXC7SYna473V8rWNUbYVh3fAsro5MFq335ZzBw9H8x4",
  "key13": "54zzjWmuFybLDw8WW6TLf53ijHP7ZW77RYZhJpks45mqWoG8r57Sb5ecg93Pq3J2hVumCxZ5E2kwHFUVJYHZ7t38",
  "key14": "3gfMBLKUt9QzetYiYKmSvFHELfHGe81uzddwhbTqjFJ3GmWjeLeKm8mqFsGPFxRMKCQrVcrpSR6kCuu3uuQ7J2qy",
  "key15": "4KXwjVuekyKyS74PHJD7gWimcHRFzwQRKzSYKKjwZyJPvrU3NjgVXqMHvYr4LHaRWfZe7EV5RoGjc5Cygv3kNyYb",
  "key16": "4roPwYUqXQ77o3kc9qy7aYUj7skfD5KXxNSqzGj1fScAmsJ3pJXz6xWbMEELdNoP3fnkyiq2cmrLZro4ftUao4iH",
  "key17": "4P4ACQPUrza3kxgyMozNp4o9gmdEVXVRDMvVTDxiDXk548ZpPJzjqh5mSz48uhH2ptsuo14jkcbgZpMW4wSmQ5ag",
  "key18": "vFhWzC2AfPs9t8133d48fXVwiooMsYGCMdVxsFAyvxPypWfMhSixvkZTpFFCyYFgJyh5vL1qSiDkSzvNGWctKHy",
  "key19": "3iVRnNQNtu9RhofEzsrqi9HLmGisZcTCA7MQ4rD6Y1LPVu1a2RuFsfELDybL5vf4HEcK91WGq6FD9tSbJtxJD4c6",
  "key20": "4HEP8rfYJhRVe5JW46q7x3Mqo6i2txrkghCYnLAE2bGWJJkznuMr78eM9F4NuiQWY8VyVcPe5sn5VEwVA7oQUiXY",
  "key21": "3YVHHe7TUeoV8Crgv87J3HrwtBUjzR5q9vaXc5HxDBvLsirfpYPLZfABdtJSsXFufwtQy4UMB8c1gEaAEY8fAfya",
  "key22": "wZKPz4EAMEP3gRRGHm6hZ3bqMso2pPuZxL6kZsPUFXrYpWAQEF9KnatfhtuMqVnT9ZztW29vjYa4WDyob7XJgDy",
  "key23": "2ikfeYeDLqiegWgGCM5TkKg9Wb4yTHnv9tTip7AwAuLqG5Y26AYymahPNT4HvKTnWQugEkfPCrH58oum3ndRVM6s",
  "key24": "4YHMrLFEGLrtBuUBAZuVtwRREGu8c63dHQ6dEbHdPEb8iDCUigSDvWr1dEtmGhKAgGzRFadZRzk96nLQD8buNb7D",
  "key25": "31kHSF4rsNo6iMpZBapwuK27xCSGkSS2DB4eoW7FfRSv1ii4ksbLWhUfuBJrmfDoaztv26kNUoZTseEkbBh3rwqe",
  "key26": "29SqSBv6dA1AK4jygB8E28iNZ3qXXMGtwHhYw17vw96QVaiqo5DGc2JXNqebXi59FLKjL6Rot26XKBxFojqKyoVY",
  "key27": "N3bJpzYqN371Xd52ncexMTju3xuaT2TL1rSGYcXuqMHK1n6Rnxaq8U9Vz4NSH8vA8cx8XKX4G5vvhVesMqLQTBu",
  "key28": "27Fr5VXxv9NiW7dLrVrddrSAr87KcEQK2rgzQCZzxTvCrV4YqTM2sNDQssFkkLBBCZX3oaBAaF2cWQZUf4JKvBuZ",
  "key29": "2VUqzkpXvqx8YzwMQujK9C4riHcm2kUbvcMPyz8SiyzhJhkEoS8g52GAvbN7vEmjXAxJQFV5hk8eusrnf8BUgFfi",
  "key30": "2TE6E6cL9SH1dhcM8tx6Vxthjc8Bmxfymowp86VPKPNPkFnWcFYzsa4acFxYRKt3ennco6hooqiP7Qf7Dxk2TYUe",
  "key31": "2v9rMXj2YZzGGiZUzXVQgFreUYPMLh1WNQn6CRmQjkJF12DWiFFPyRQRvvtLKZhq4eoZUmMRyNCkSXuLkbhVdTx1",
  "key32": "PtKCfYH2tAdhkVQdauxurFQ8tTXAB3yBtSjtRxbmnFfRwEGhojd1aM1siofA7wxrQTpW5jo9H1WwxPnUJgA9JT2",
  "key33": "4TdfWn4tk4dLFVmVYHrZkkCqYfLWm8YzSbJYhpq7KPFGMasiZrhSetNndBn5565CVKSvC4vqUK86ZZJknpoE33bA",
  "key34": "hrhmFjp2ED3u1wT4aMMUcY7k6Ekp3RdC6ioDvdfnKTmFyNAHPdFGHvbAsYB9VKjS1HZpM4vcAkUon4LBMmuXJCy",
  "key35": "3mTUgscWJMBbpB7xTsyZgf2aUHmdjqXqQo8Tqnc7Tur5DKn7KjFHb7RkaNbQFTnsYohnGqBhWZLZ8FjupFYMC6wC",
  "key36": "4nQpV6gk6K5YJRp23YX9HX4cRCygcXd1NpGhcC16j6N9yRfP8RPRYrQANPfshwGTfFc8uThcGpThixxfYjJyFhrQ",
  "key37": "4sy5mNkfiCwyCs5jk5XauLQSzwN4zL3siVD3BRJipCucgSLbZbipMggGUWUGmXEyreqMLtZWJQywNWeP1jDwdeWo",
  "key38": "2EhxzeMwVViF12hb2bXsgzyksEhDXUy797XFrihz6hFQKVVBNgpGEcvrEu1VqZBiRGd3eackvCcqKMan4fUjPgmT",
  "key39": "5RhEQnvyAiYi1JqubiiJtJFK3SofdvfdBBwQqik2sa56VTM1ZFFEtojXjotBvRQvht7yunWeCWcNe8JaadczaYsQ"
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
