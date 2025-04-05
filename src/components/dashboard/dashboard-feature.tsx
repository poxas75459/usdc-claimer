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
    "4FrH22vRz7G95MT3wh65qH1EjU862FxYWmySje8bbwkUegkic24yc7dLyF4SR6PXPG2ZMZ2FmEZcdZVwynVL2jUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ke1A9a2RVH18jASbLv7szZRvW9VR1KLYUaRbzoQmko7XB5tFzTXxfWojeCaqyUjSUYyt91L5tPgDuwr8uxrKzyy",
  "key1": "5JqHxW8JrWtBvmBP1tr8CShrSgyqGBiXLVoqtYJkAdYw8XK6cmU1fyzASusARa5DRbsxmCBMhy5HtTD3X5n6kXpc",
  "key2": "44JaGXXXShVdPa9rzo9sGbKW73M5Ck1XtmkK5r4tV439DmfTsfnhzP7My4tbeBeqbW5qFk5wcf5FUFLUxfXPAups",
  "key3": "4JSQanBXKvCrnhvfhRmynBqYUUkXKmXpubyrJu5odySJNGtcVGvU8LxeR7pBQWoUWDnCsmuJwWUwEC71FL3FDBe6",
  "key4": "DDtZgPLw7xxfGmb612zBaDHrPiFcgQzF7r1Rh27Th6wLjAAvfYg24uxo23QNmHVbFeYv1fc2G8euTpKpr6BpqwB",
  "key5": "qk77FCKFBDa7YQZ5AjXzSmLhAPx1CAGEYfqqUC5JKAd3pahoo9JYaBLacyWfNAR2KsA5qy7XYDJXgR9JvsVBUh8",
  "key6": "GgNLj1j7WErN26ZTiTXN5QyTasV9wrmXh4SMPKdpYEbmCj7SdJdifs7ggLQ5YyvHdATTJar2caCS3JvdV8bKBdJ",
  "key7": "4uEvxYGGKQkYoh52HSTLejWQmq9FqjXZuaaTEx3pvWFUjK6cpqZQteughsq194KNFgMo3aWtEjUnnWDfq3tq94va",
  "key8": "4FHuF3nMAknLhQoWWCqfk4VbRqUGSXh5zRD5qt6DuTV6SCP7Z9SkLWvJP8YH31AHnajHES3ZfEdxSQagdvGKsKD6",
  "key9": "3PyhxzMF7wZCmJBiMPUHj1WVv76gXpPa7ZxjpY224NhieEfUDqX7vEfJpQF4V3tv9682HgfZJwQ3ucx1TRQ2jTaz",
  "key10": "5nZobfQUV3nSWvTUe6kYVYQ3BqtuYMM1md4zeJ6iGoyKhPXdAYj9qtS8wfbMVH1Vt97L5GPbtyvENQxcUkwGgyTA",
  "key11": "3wSeaD9ezBTeR7FxLEDYf9beMv3Abb5HDjBiunaTwBVKu4c54esw9XjGNgygtGTZd9y574y8BEMJZ6Y7vwEM8Eio",
  "key12": "bbn9rjV3gc9g48aQdq12MQHRVMxJLNSjpLMzbyeqpnqET3LSNK3fX9nSeHXMrqXAH3eFkQiopQV3qQMx2GxuUAz",
  "key13": "45P2afDPjWrXgVUyDicaNUyZ6ustBSYNHcjroyX9CEzDmL2gLqJSKxnthJnmHZazTz8A1EYec4RLqn42AQZSs95S",
  "key14": "5KS92CVRpBt4dK4ung4UMDS78JZqRpgimKdHpuNmaLv62sCrGjhN3KcrPctPfLDiUHNE79Jypi7aAA5FXZexJrDE",
  "key15": "fyzG3MRMDEtc2QGCH8DKwxmq8QtwtTpyGdMy3XRh28YGTHxtsxvx3A3FvfjLYtwyxMnxDne2QYBK8xmE4r6P846",
  "key16": "2cCLzuPZKbTp8B6DFVvbAzapUY46RjaDXkY3WKzYJwR7BS9iQoCaGetyTsYnNpQgzv7utpnFu7Qwq5iMsbb6ip7h",
  "key17": "4YtsZjp5BLcnmAQceBeJjwaDuoPx9An4Yv9V963Dis12rP4Ah7z6Zaz9MqKe5daYA9WYovabjHLwtxhpFr5XhoZ4",
  "key18": "2Lq7AjpbXSjiRJZ2vAsUqHr46ozb38ZhBVpQpqFJpSkVvSCxKg4gVcz196SgdHRWF6KwnVdqv4Q9FwjSBWH9UNVE",
  "key19": "31spNCbyanGGKu8km6XszApyWjW9m8rq2PCsYfBDWb3ctKGvP5LTf8LSX4mkjssMy1AHkBEckEey9CrAU4ayZnLz",
  "key20": "3zNbRTEHKs7WhD4bFbLVcHMkqyX8nhcdmbF2BouNPEmGwmuX3qbxq7ZV5wYQ77z5vAucXRyKxdG46NJTbcAwMQig",
  "key21": "5BvzZDPhtoMMWaXgnPKWhZfyyjS75AgrD1HGuDd3hC9kVmcHWbNKKFsQySeUURgKMeZXtaddLhFs1fYVcRetXfMo",
  "key22": "23bUYSm7TQHcagr7X8Tc84qPF2Y4URXQUWX5DAXcm2ahU7mM96NXi2Ku53UVTHPcokSJAb55N5VfnanCfANGK8HK",
  "key23": "E5Svzof7S149NEGRdaV3UMyZycq6JVKSMXs3kSTxF6nDnVAxKcFg64iuPG4j2YUWcVkvjNWsvKHCNFbnyjUUaJR",
  "key24": "8DX5m45NA5Qt5DVcZWjKDsFrkyoGhpZydsDCPrVbYJENnnJ8UzaPtJXRfdhiWx4mxWPf6wEH43JghzQ9ghZa8A8",
  "key25": "367XdgKfbp9v8TugwQKbZcQQqew7thpNiwrkxnNuXKp2R9oQNxzgMP4dmfZarNC95hPPaubGCRWJvhh97J9uFizd",
  "key26": "sTufckWXgCCxc5vKSAefiXoLrQTv2HkgN3gvmv5jLm4nx9Q4VY3bmHva3zLnGsritfSqkuXxFvQd5LCH5uCbwmv",
  "key27": "4zAVCHWEgsbdQ6qAQP1gBMjfKYQUN4uZ815yr3w56xxmqa1tW5cyZZJGBTETvY6nt2BWRzjWpE6Xya9vFnGwDH29",
  "key28": "35y1oq9oftsyp2KpBnuCWxEd5ibmaVLJCH1ahPhgffab1ZhAz5peEmB45K2Mw3sxoDV4qdu8wfuzq4BZdvbvgswg",
  "key29": "GFsYYqc2ujURQJW7K1X98jSFQE31BLaziTWAjE69gSrugGm1VfJ67iEZNcMPNJcUxj2n5gHZjTWj47QQAupza2H",
  "key30": "5AFeeWHsxGgqP92aqbWgGxCVuDhFzZs3iC54ApJV8k4zAZjoQnC3DWjUEWEPcXT4VycJNbBcXpcRToJchCkRyfdj",
  "key31": "2dCjzp8dDjJ5tC3pnWvRt5hR5jygJS77yEig2XQuszmM75dZR5Gddmr7tkdnoLTs2acpQ63nMgxeHDf6AE8MBrP1",
  "key32": "27NAQfJezhWHgok3kFrHNodH4Xu8Rux73hvbmB36xCYpjnC73BvJLwwhvPj8cTHjsBaPoAHG96H2TwZzwEevDawN",
  "key33": "56ofHV2XDg1BcAwMoDm2YquzripJzBhWdfb6Y4EMCe3BRDKKG1VL3jMmTazKPXYpha7vSWEdZF9ChVYhbyb6V9Ly",
  "key34": "3zne9LzbVWxAbAHhzbBaQmTGUWYrMsBZu1HD88hTvWzUzc3Jqydbydb1gKABMJnYmJgZ3L3QrwoKjtU9cQBWaHfh",
  "key35": "e9kBjKKtDbGhbjPxnTwekazz2cT6sRY195C7sNLqXnynTwkSAWGPRJD8AD66dmApUzaYYmtWUoJnBPCkveXrFdC",
  "key36": "3bUuXV2JF3JEh7YooMKUow4qi91oSwbEafS7WjMrXkAW7Vw2pT8kXo42VDUckcEyP1uj5WDLFDKx2bVF9y4Husy6",
  "key37": "2sLFN9LuGHpgC4QgFanK5JAV7rR5Uz5qGYoBErNnk5cw35GtaNFRADqLUZ8X9tSVw51zzoba1AFYNPBwrQ9MT1NN",
  "key38": "2kqbFaFMS6eFuq9xxxCK6YXD9gxTBXeE3e2L5nFEsDWe97ZtykE9P2Wnob5xK6aUUPn5WSzChAPq5b8TJUXvfNut",
  "key39": "FenyteukiP2GdD9PzamPkqwzNDV8RUT7yma6yxFBYmSMtJinQGKnQKCho5qtpMfVP21DuVBvmiExgZFUENnUgRp",
  "key40": "4WqbL27VRkdHjPLmuLQqVoSP4Tarzz2pV9aHqpzm3SpbzaK3RZKDiqbo3mkptadiWs5yuqDeoD8DjmT6zGxKZMFc",
  "key41": "2T8ni3q77Azj9gB6t5sT3Rmy6tVH9pYCgj2iLRjSHUCi8f8Lc23mRnQf8cQGSe5az51EZ6zqSnw2gwXi5gNG6rw3",
  "key42": "TWFZARnerZGdXgidhJX8YDKnj9Eqw1FtP53BzipSXPXPPEQjfVPdHbv2qajDCL1xKiJoqvFLbKnsuUE2FoMJz5L",
  "key43": "vR9tGBU6bTTXoNux89s8vxLupnm5Sxx3Zn7wXF5MiNBS7Xc54qhmvWEXpcpHUh6FcT9HP2Q5QkLxigvo6ohYYBU",
  "key44": "vCURmXMxzxB6eaYTzAAyULyt12cR44ee1vtZy3wYXUyNDyMpRrjLi2ibT9q9VrSTAihjry1rSeSF64o45CMsMPt",
  "key45": "YBoyxjcPraknLLtm6QQgyGyGQ3EkyryCgdfMoNYkgDiyvq57pBNuxWE1rK23N8tqMAwCuYgePQX4N23LCvkFe2K"
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
