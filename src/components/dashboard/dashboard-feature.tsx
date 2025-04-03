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
    "5ECT7shVxcPUQ9GiDuqiYrERb1cmg8j9JNFnqLtw6JhQhtmktDTJWMytcmmv8mMecidsApixScrqFxoB6Jh47ZAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QBTHFibxV2hYUU7ndTNpB6x4bdGBPivGuzLaFzBTN1e6SpF4YTQw1F7Wr7wL4GVZmeQVsLKYCK69YuFgrjhJABx",
  "key1": "5VmL3iXAwNMf3kqMHotoxjGukPuikDC7bTiNF3gVWhLQhcJ6kKhEQmi1F1JTExK2GxdHjSDG5dZ9jqy61kpra84s",
  "key2": "2XAbD81YVCo7GBUUud2km4u5ps537KNDH3qBp79oYJa8Ce7C7wKKxhe3WNzdQ9LuE5yxQ1MVSQ3bkeoEKhuN1Bg4",
  "key3": "wbtw9u6RKe1cGB9WZXk3Q7FQc5kHPEHLFbKusCkCU4HCa21nQCmgjfUWuc8HXcnVkberPBEXR3yDMNPaytGNTpD",
  "key4": "tvMKFBfC3cCdvgUhEAAYPXaDxHtv6jRedcoY1odrHN381mepYb8qPsPjQHQrySV2UTQqromyPjdMyaRATegzg6v",
  "key5": "2zrhAVgLHUrR1Nz1phvzsYS9HuF5K8wNL2AP1sk9BjVWZb8VhzwUSgyRWCER5qUJs5S2bEDFiv3N3eSpohshqLpv",
  "key6": "3HtM1DhR217P9ghcyh1M8eLpedZ5YW9vgyFRXeVBbARphQFyMCWnKjC1Lh2x1B2vQwEXtmrrdu1TKRxXLZ4zYU7h",
  "key7": "36Fd2DzLMFxg9pSMawP29vKupsT4yPihztrkd4GVW6MTjjREEw8MKW4XsaFFoCC9winVDURfYZeGnWgdtT91kgnB",
  "key8": "2r4w8GACtDWoKmsP1kZq4oncrT8ifjrCiWyXkXPDGMKvnHwuQMvATroBacVbyD1jydoAxSTwsGDcP8SGPGyw7Gu6",
  "key9": "5MKCUxc85uwMjJbesJFfuitRcKGrHsUka6amnQEhS5CgP6Zc1BwXMPKmZvfd1WYPnQmfq4B7JayMmjuCBK7BnnQp",
  "key10": "3Lrpuxp7e8Ry8nSF4TGPFJkewVqxvTVGS5SSxGC42hVGntNv9jY13EqfPWABXPBABRYjzeZgsK59Wy1oopPNLA2H",
  "key11": "4t7E2uYCBvwNHtpCnT5Vs8FXWEs3fquVQ7amZuvZViEMUWkrUmNZeWjrCni3NuhyPaTiDCZnatUvY4BZwciVEfyi",
  "key12": "5vvukGjqYDixHj9kQTmU4itNRR9HycDAtn5Dny44F5hh8jJSg8V4xCjTzRm9gwRKF1qURxPMKa6bCuR46Ke2x75S",
  "key13": "5aTMpXLsjrzHh3W91dYPgvUnT88XbVhEogbHBQjTqSbUj5TykjJEjHbMM2Rjre7DmN1djYbFgXcG27iXhBzBEamv",
  "key14": "PY1goCb8qsb38HTXwYdYsEKXdsnBoLU6MWVmPZfMXiqfvG5tNHDhe12gNYuY6vtXLEdBbfjtGWxCgaXMf9hMhsC",
  "key15": "4tJTsfEqm1KBpmU2fmJ4cnc2XrL31f89GBDLpYgkXDjzJmJ2HQokUAXTTWqZRTQ8YYp7FmcHUAKsvuVXhCkns14H",
  "key16": "26StQ93htjrmogsGkQUYS4bm6tKM1YoRrRPjYQmirK9cga5FpB1Bbrfi2SWRxXfTfD9hcX24y4mHifDFdWpMY5rg",
  "key17": "QYfAUyZmKGgHAxwJUAeaR9MnAvPNQG6bSQnHLA8sLUgpi5YqwikpdNEhYdqDSZjUBfKHg2RFeXEdE4Rfn8jefU2",
  "key18": "y2UXQh9yiTZQ55DbFvaxZn4c4YKEckPx9pz4ZB9rKYBbV8B2mUbtRYt9AzmQ3LETqPnKm7xwUxU7uvAh3jNK99V",
  "key19": "122NEYTfy5J3Tmq7QiTRsCML1iAwevdkmRSyQuHRY8n7R9o7BK3PbMh2JZzRTaQ8e3mHQV4fKfyJ5DiiKpvJaSP",
  "key20": "2UKgLoiue6LDq28WPWwgSvitCV5A1H3yipi7qZqhj7vnf5C5WiVEKU7Smgvy9YTgFwafch5vspRmsW1dDQra9MXg",
  "key21": "23uHbkfHV1rMwUBvTBaNv9d3WzgV968ivcAbkRu4NRPTpPMZ2NC1FPMpiNh4xxzZktLHNxUYJTB3gJUeGYS8LtoY",
  "key22": "263bCPJHVYdVekbppQ7YreQqpeGNgW1vL3nZnzDkv5BXHQDX6FBhbMc4WV4ky2f3GD5uzvtE6FzD1d9ApgRm4no5",
  "key23": "4mFxuMwpVfxtdhiN2GLKwUAHoT7AVpQdX17gth1ygdzAK4kmqwGG5iypDnCsAzfNhtMtk44u66ssDV3BkjwoG8jb",
  "key24": "2LsSzVBN2amSEXMEzczuvgWpXzr44QeRfjvQykKkRrCjvq7XAtqB8ii17rCXEH4wKqaxnCMp8ES6aATA2SNuWVTL",
  "key25": "249bxqTf3ajtkhjeLsnDD6jPPBrbF1pi9qEw4u5vPnNg4s6wzL47VKbogj3dJRk2nsQ2yvgUdhLkc8smt2QmZUU3",
  "key26": "smKPyVkLWMGFfkCXm2m7uXR3UtcdvEP1ZLvrFJZ2VTH3fcQGSgMj3HnjAa1DNC2DBhYcVLVXAybE5yYXMEP4rdK"
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
