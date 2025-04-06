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
    "3ss2kStgG9hTES8zHMkRQrEAiHpyQRY95f8AJYRgnxfbVBFw6GTUymtasqtQNLVMwcjnP5BAUPtSK89N2GSh6XCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UkgBGD7r9YmaKJ1bBYUpMEMuVMfuBKVnpRVyzNqN6d6xzyg5znGhrnJ2wB2Xpb1iieycPmhmCejzRgwgfcobzg5",
  "key1": "5FCqNxxjayxzrFCYRAY28RRn4ekMpVdTquAT4MEjgW6P1W8vcYyx19CuLJ9YuK89ae1YcmqWSanUCmiidpdt9yGb",
  "key2": "4Q8abpmBF66dGdnmK2BdLTqy1ZmyST6PYUbLeKfc8vjxscxQVLCYpN5EMgb4ThHm4WkFdKVhUrFS2dGcKaPehFq6",
  "key3": "8xawq2gCTr5r3oppb9oJyttKSueSMxdapx85T3Zfihtzx15tJmJEEZXcwJJnJeeYq3Q4ejGbL7R7FM5nm2WQrr2",
  "key4": "258YbdvbSpXaMuhcnmYHmVtMWE2gQDA8QCNoquStVeFcURYQG7QkaPmkFZv9VgNWBGHgZHjGyRoHncXxaqin7rJM",
  "key5": "4jniaHvPiAw4tuNg6jQHNEXNzS9zH972huakyaxo4bzh3F6NkZS9TErViDnRygsqj7ghRtVcwcEXfor2T4MDtavP",
  "key6": "2mSCApQAS2YNGCdULE17LaeTLMA33MYoZJ3u8xc1hMaitJPuimbwp6MSu82Cu8GyAVaUFY71s9pv4F9mHeaHrEKD",
  "key7": "2SxEE1p6MFeQgu42uXMJkx6krQW35T4mnHDQrLDo6ZP5xNaFV5UqmbySdRtXfwjbfwj8aAaD5FWtMMrGq3NRjjnb",
  "key8": "9JtqZX1FiXhv7oJzfwERtmMUzXrSgEP47mXwQ81wFQ3Ze6yMpBVSUmH48RofyKf2m3mMspxtbGoj8z35cfysD7v",
  "key9": "48ikcVZq669nGCfK75tNs9sMNRTyzFSjNhH8KnBSHhrw2sELjBdXe2i7dJgepB2UDoZ5TaqvbEjbG2dVGnjGnqU7",
  "key10": "3jEb1AJWoYWJkKyQW9B1mEN9Ahcf4F8Rd3Ucw3Ski7gUTAKYsMadWXsbu3bUEJ6jNGBu1qxs3vWmEmgtxj97Yv1n",
  "key11": "3DGrdQLrkEnnJnN6aLULpHa5WN4FNBnQvKLCec1h13LuysqTjqBMtH8DCapLtczNi1qLRxozeTFu2kFsYBS9o1vV",
  "key12": "5LeVXFKFxEZZ6Fz1htrhCh6VE5cQBk5p5UsJxjhEfxNwxS3UcEibKh9hjV7vAqL82VcC2NfjBiNXSazN413UnjA5",
  "key13": "2vN9K1J4TEL6aGGaRZe2nMnfHEnDgz8aangG5baKxDbNvHEcutTofoaxXJJKsGNrWwsaQt2TjsaJUANPohcnPYxG",
  "key14": "47wqjKsWC7zi2gYeQ76NWsWExF4mpterGUVKGMQ4b4K4FnsSoqNdtPFQTD5JsiYiNvtfrN5tnGHc7wx1hE5gUfNu",
  "key15": "3qwe9JLkyzLAiMHC6dLMTmr5zLLygH2fiyxsrKtLuMe2Hq6Mj4c54ufusnvfquBFChJVFgrnDuzQLF4ydu784oou",
  "key16": "3d8vmhCMgcTzNTfCicNxcLJdGiXMAfqTtkbC1S97oDeLWi4aBr8PycV7Tzn4qetp7rAhr2DdEuQDPfZ4CCZz4Hi6",
  "key17": "3VdszrqKDuXQbVr5eZxvD66htDaf82HvXkvbK3SFyoxmYRnPqHtbnntqv2fLgxB7EV3X5xmg9Y4VC8iZuknUJvKe",
  "key18": "4JSbz4DEbuh1cbBbSFdMA6hC1T7GGib7pKFYQDYjGAndLMb8vuV4zBjh3JnWyfWGbMsKscq7r4LjwAhpd7BvyRit",
  "key19": "5KcRxeB8uds2EeNsqyXTvGEhyge72MxJm1MTXLS5fCrc5UjPH13ML9dSTVSLC67xRb5s1EFnusJmpYom1HHi2Rn",
  "key20": "3GCs3EAGsBrZ2EN3ByKSQ5HptYyGTHvnfKdJxKqKJwgv6eGgJpCSRWS9BLJ32bAYFNqxbXbYYmELjZ3ukm2kEhfw",
  "key21": "3GZVVYHDedYX2xvt2FfcV1y2bHoy73jdqs1MdeHb12eYAq9pZ6gc2pV42UpXGVstnmg5nphyC4RSngAHXRejCKvW",
  "key22": "4RUEPtJBi1qyvu16y4uQZN92kJ3upfVrxuFjg1WSFRuB2CoP84Tgd6xqeQooHiMBEXkYoTMuiEdT4QbypBmR2mh2",
  "key23": "5z6Lu4bVxyumntSU9taVULNQxrfCxZASM8G9C8rzN8hyQ5RgDWwnQRwMGFQXKZ7udmxsNMy2beYvQeKvun7dv3LU",
  "key24": "55SJSkBHbsD2QVE99rX3TTn8J7Vgxd1chmTBA516tJU7fRpHTJz5M6VSYH8jtFHPBgDE8wiBJxjifMkrhffDHF4F",
  "key25": "3kNULcdNKDGxdzZu2UDHy2ZqRk9w3Xk5QSVJA8RohhUtrmYeUYBomezeb3UddLeGrhkVpLcPQdGvZoygMXo6fYmK",
  "key26": "5FJzjCVtBc8VhaZpr68JSwGrHEyPkifuBZv7Tw2jvD6uHaR4NegYQf6DFkwMFATZjZgQrLYNUGxCJxzWVgCL4bvk",
  "key27": "5D7tcNWpE4aS6BoYpSYZjDQuYBc6tVGkeKFA8VHUZnS3xYS1Fvzce1spNTNYUYPy7iZWbmj2gvgKuk7GwfYgGfRi",
  "key28": "3VrCSxy7h3sestKzdtKP9EqkQ5BtfWqCv6ErUTKLRApWZoVK6jb2zZpjCqsmo4G724UYNkw38XiAgrCmWz4TFoz4",
  "key29": "491z9CLgbDqUuDafKqAMs431nqoLghGL2VLcgYNA6LydJa8xqhkzBysBZcqZA713Mk7WUcf4PYfWKrmYvCMUdNTS"
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
