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
    "42VxijAybjynHdekhhiWfmDKinvXyJY7ewVK6wWCoYvjCLE4yY6kTtzdnkbnwXtjmU3of4tSFEFxEJU6SACyFoHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RyQn9ECsJFcR4ejiWnck8coVSGJkvre44qvW2w1X6A9S99zLZShCCF4SwEPgqxjEVPpNtEnhL5cm6KWySWhy9kW",
  "key1": "3XXY4noPtnbwY3bKHi1KVJwWsqgqqev6TvECKU9qLEyJ49VYL6sZ8SvGoLXvL8Bp2NLYrJEmXz8ejZKGy2WZpxdW",
  "key2": "3J8Yr45hFFX1fUNmmCYbW96U1pzi4wmpbYfu7X1cjKA9qRK49k8hNN8TyKPJERFeMkws5mtr6N6KowzT5G8qZUcW",
  "key3": "3ta2tDcZ8L2Dv2AAKrovUAjpzBxWvXsQ1xpXBWQZB5wmy7XKPU5jPdbwKbgH3ERNhezi6zAvyJ9RrwZopSojPsdP",
  "key4": "2KspL33AFMgPYBzcMPMaqvW6QtGiY6PuAiFJAZ3LVXqiXRqWDzfWVe4MLXhrW9nAXjpuE3Mqeiujowwm8ksVEqwg",
  "key5": "5heN52QbHh2QmF8ERGbAYMURDT1FghLHdGBr3t6Yok6mPdc3RdkUuqgVGsyp63u1bVmofrnTKXayfwKPVQ1TJsuk",
  "key6": "2JSz6M8Fv8GcgHTpNGgzSxPrkDB8e2hTuwz2QWoxKihroriqj3CixbAzdgEWQNxisD3pc9RpXhqWqgtvCqDqTFa8",
  "key7": "3ZnuiefDdVLx6iZgZDvLiMTc5zmTkneshFQeoZNk4SzNHRUKaAHHg9qMMiZxCbYTmaxkLZdYpH1SEtDezADd8CE",
  "key8": "2JqyaAzqSXbsMyMnRafwdytRbHpbwncAxPzV8BWF9KDLdyvCgxUMgzTVKAJQKtxBrqjuuDM47GpQFuoQLAPnSNj9",
  "key9": "5DxnFpHzXmBjnroyCFgdCq2wYdTktFcKqJazVg3K596HuPsxXj5wFB8Me7UGVQ5RA8Upa5NiAEhs5PTyvSKkh4b2",
  "key10": "2TG24uDcd5WnY3ChBp2Wug4dSkx3agGMJLuLUoxkxsEJU5QwM6s49hiUpwqZnowxJD5haKpuefA4Au6siRpniqDp",
  "key11": "4C6zpteH6yGvjKEZ8wEXLKnNc5nc5kJD3oVMafgJw2HvfKZu4AscNKkqQtjEunygoswBT9SCk2ZtCjVE7n7PBDfe",
  "key12": "358io81DzfFojdxHDzEwpsn3bUXRqxzwbaL68RkLHLSVJDnPFBmD4XbhCaMryWqCavPAQZ1tAii3gFxpkXSs7z4w",
  "key13": "5bcGD4xfz96NWUZyiSTi9WT7Npia9GDXTZzSzoFo5x9fp3GstDKGqrq7DExe5PLdTUSJJyhAqmVvJ1HMAJ3frJQZ",
  "key14": "3XBJShcE2nAgZzfxwJqhgaNctxWnBsin5bLXCT8JTdcQSFwayDPGXy1tCoDrPgF5HJ3ohXteANoM5YtvexAtma4x",
  "key15": "5Cg6SCKDDeMDws7kv5q8wD4C1oNa5JLMEALJeY7nqVoTwLB3SRpmuo82yvwSfuNsThuLeptFtTMvV3AdAoXpnwnu",
  "key16": "cZH4CXqBqFHqGdxU6vRfk9PiLZpUETsrJY2qDwddzxCHyZM6q5K6epnDWDNd5TKvuBab5hBBZGb6swuHB1Vo3oR",
  "key17": "5CXb44maQQakP4nLkianofvrVzAasbQNCRGqc85dQhmEbPjNZM1AhFkGkT5bJ8XvpJ6rfgjZjmLADEAehKDGqeQo",
  "key18": "3RzmhPxSPQe4XhLcZQAUXXJYTJ57k9gkxibbQXF5Jm62bz76BdRamFcbjXQ1yQXCbTey2uUPhWDY2SxKpD6Rd1vK",
  "key19": "3JdviRfSTLEpVngfbYyH8puiCGPgTbcxAhA73a9EYWGiLvdsaQZpAczBotRKphmGvj9WWp6JnUZC2VzM8aBadMKk",
  "key20": "uAFEt5SECYEPcJ1Awxyczsd62oK1MSGw17ZiLPyX5ytqTPQufoYHjthE78JhCEYySeuTLrU75Pxkxi6X87aVEC5",
  "key21": "5MyyhbWx5MMkhpMNUPGJVWCZenQjNS8FMDck4zvyA6ZTkq17GW99263jfWdY5Jea5tcmjhyqa2PEzefxz743MnF7",
  "key22": "gapNh7CwL4uEMnwcUTp65MTbQEkdzu8KqxEJULgtcZebcZbzh9e9EsvUBUfoasjUfBG8htSZ5kL4ZLYfogupqUc",
  "key23": "2jQjGE2ys3r87xNMQNMmGiMngotaetFD1WmUAAD4qbujuZgkLCKEf572V3kXDgu8jTW9AnWXbPwexwiSLJjhSNrC",
  "key24": "9WCjVGUakCipQ4vx8T3Nup3WiZniidrcM3yze3rL1veFbgQibZZoXtaYsbs3v1pZpKbm8C9BxVKFmzXs76eKMGh",
  "key25": "2gRi5fY9o2wx68iUrF4J3MPxcHWF8MfACRjM2rUfaQujtFMwEFbkZq9ssb74Z1ixtCnHWpkTorL7sw2CmnqSsYyx",
  "key26": "527ztoU4upeA67sVquNQxkMr9ek7PnbZ138X1DNjwDyzSDsbD62v5gxLkf4fEEBFdvLMVZqsP6ieo259Wt3hYkz4",
  "key27": "Y88NEKLYaktMg7Yvi9muvXoiUgMRj4D3krGwkHh9pvGnt8mj3wkyUFBLjjzYEG3cRZQLSdNx9WKQmkNzP3RBFYw",
  "key28": "fpaiUK54KuegWpaZS8w6xxyjUZoT4Ns7okUJi6s7Uqd43TX2pBHg7VXSg32MVPoizEJnK6SeLsF422kbcLGdqQr",
  "key29": "3ywBKK9xfq6DuwTLXBSGoZoPMLgAXKPnACvGJo8GBpoJpTPwHyrFevVWuRWVJA6ppRc38tfF6BLDGuou2joixqSb",
  "key30": "2dyJZvbTysfhA2yHxTRT7X9TEGJ74A8XN9UgyPsJE5vg39uasK82wP1JNCUsrYtyQJX9ZyTDHwY8YoTnZvPZnoo2",
  "key31": "5DHTZjUGwfe6ZyEDRQv4cPkhwoapFd8NUEsNSiAejcBGpG4hK4NYuWgre5qBYN8K8D3HYqJQQuo5erPebwvJvyx4",
  "key32": "5229be2DMZoD6HpjcjCiuqVhwFrHYFkcNPptZDqiDj2mDzzKm7n5qMM219EozCBoVLgSYjpE9287nTHYf95hNwzY",
  "key33": "25QcSmeVH3GL6PFgfrQXAGMCkekdw9V1HYLGwH9wLWjHt9zYaiLsxm8jpD5DwUtbGUJ9SWHxFrvu5t5FGYeTUQea",
  "key34": "5qiWjMJfZt2FCWnsgNm5h5F72nuH2d2NRUJABwqAutbnwmaDQuM8B9iQx3yHXZzQsnQywJhci92fRomjXPHqGnpm",
  "key35": "2cpeTtYnDifjiJ5ZriwuzWiqL6hZjNqN74QQ1oddnmQwNcqGj5cyX4LZSJ4XacSwT8pgw32uKs9kx6g1VeQBxfMp",
  "key36": "PcTdAwJEgXMH9rTSHcN7VHRhCJeRJcWZahiosn526bvtn4dKRPvvymbcegStw788zEGQJBtVbp3MS6A9H2dk2tn"
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
