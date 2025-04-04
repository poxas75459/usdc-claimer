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
    "2kUoMpNw9F1yqxMX45ycgED9LEtuGycwJP5gunV3wJqEtj9uJbb519tEXwBgNaQos16uBoSeKEdawwpxZv5i9CM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyEy2FDE87hBm1FfofyPfeUL2azBp2xofpvRiDy4qVjof7WHfDGtZH34E3tDgG36yCpJBBMJVTVL3GwWW1bpyNV",
  "key1": "4idDdC9AC2tLAH85wVxXUkBG9N1HG66nCtxQTnSWNHAbShKDqbgcdCJX7tYnvcvDPjcB3H3Q1ouvq9jKpec4247G",
  "key2": "4PTtrsH6t7iqzznfthsMdgHoQARaXZkQBzx1bschmno1g9w4XWM2Qj31apDe57d8a3yPKRPiYJgwZamb59HaKYiP",
  "key3": "4ZSngtLhJuyS3Rh2G4ytCRUK1K62G1TUoUeZfVKhnM2G7ZNvhBBqbq1UZvb4ZWTYYCVuMsBCxCwV9N3vUV7PQ7Mr",
  "key4": "5WkC4KanZfFyXkacPRCgBNcZag4RHueA9v67MQDh6uDWsBnRpHue5GkNdGu8RjFc53ZJ6dL4MPb66udcWARoemQT",
  "key5": "27SP1YTWKqCfba76vNVLDgFpDkTMgYunMtrxvSMwL3RpqQUFfqYQ9diftEkfxSEf7QzAcRmF1iyBdMtL1BJ5L2Bq",
  "key6": "3wKQRxbHK5zrtTsyiGR1Jv1eWttkFxHfY43YyqH95GmR62JMVyahv6Yytpzbqgx3WWsggCVc6f8mE5pjbgg1oGeQ",
  "key7": "pzr8LicKV1gfsJSdt7yPre346zXUuusE2ETmiJEDsBNet5Ts8fxPJQcV7s98npVRctoVak1bwjKWCjyUjUPV4Q9",
  "key8": "37c5Rk2TqXr9DQeFyr4E8iH6Q4uQNk8WsMWBrErDWu8uVE26jQGy92awoJZgDTaBApoLEsgmD4PqUJwfe5ccx4CE",
  "key9": "Qw3TALrYEh37om6HdpUJ6HLzEqhdMJhfZ9h563bap18mN49GVpyoCtNcmGgtWwnH9ytqP2cKCcxNMeyVKUb8jJH",
  "key10": "3DUZePYTQeYQD5reSSLQYQuVLLTLWuLgix8WdkJqr6jMKZ6VUcf4CHC7bJLQ8q28ahKNuR1AhY8NdBJ8Me8r2sVS",
  "key11": "5LuaSp3jc5y5cZm3st6ApRGeUCQFQRJRhavjJim5NJ5PbzT41b8XGTVuRLQ9zabzij39pjbpiEmz59uMBCMVLRFo",
  "key12": "5RiecvsTE7t49f9mChUS2jBwnfPbt5t8UngwD33No2NjQJZjjURPR4nneqw3ZYc1JydFKdEL5v3Ax7tgtFBZM5r1",
  "key13": "5YoAcb5zW6uW1xKLPe1i57HQtu3Ps88E8Lw9qw3QLPTRgVe3vqm28TfzLPhToELqVphkVk6KTb2bkvhu1FLsmGJ2",
  "key14": "2zN7M7yGbQth35S9feRy5EyyppcwKxfnDMG2eMX3wmRTdQL2Eh7W9uqoETogQ1JV1PXehD56SQkmHEvLhDwcCTdQ",
  "key15": "335F5U5XWxr6NiyGCPM4CcRSiBootmWwmGwknvziyx26ZPZwvVeKpWRLq3JjQU4Z7BT9wauD5BeunzyAsoDVVSzq",
  "key16": "4tdxGMhdTgHtn96Nyd6Cm5gNgfLpweUNEcgVqqqrjLXF2FsEZPGp6wZdLC3Vmy2fDE2iMcQNQYLCJ7LXnVeteFVv",
  "key17": "X5aiNh1rdCw4Hc2arEhiwEgfR3zcPfZCSJ48mimmDrfrWaZTLcS2THbsbn6mzxo5BnxaBGsxHDe1hqjPZ1AuVoH",
  "key18": "3dYyJ3dqxnwDgjzSZr3ULQuo6NCx8btq5jH9d9StmUWC2dhugJAdEpZGBSfmLkvNYop9vhxoLWoWvNDCZubVjLtX",
  "key19": "3LzeLBk2HRax1LnEEmW7tcXf8scSkzL1NmgxRHLUqKxApVNwCMYYxBqRtQYeAUcopocHMbWLeBqBLEWmgxdQ4HF8",
  "key20": "5xSgrGu7RJXFZV3EAhvX7agTX9Rt2daXCY1HjgqNZoAJDwc9tQwRLtP9KiuHHftbWAHWg3U6wLwe1fvnML7fjVZR",
  "key21": "5ZwJpBaYXexBzRDcpwGvHDeVV7AJ1f6536XkEo7WFBiXAxWTkAbVkiJuyJpqgH4Qmz4WEkifyNHhkeTEzgAGyXzq",
  "key22": "5EtMGxwKiSYZTGCk5QgNoui29zgMaJy4oQjDzAjLyP3pEWkVHgTFGv38EnYtZssZpjUQiXMVhPPQZijQ47dQenLR",
  "key23": "rnAEgyiHUABqrhUYoXrN5uSqoxGXR3DVJUQ7FqMKicnCA6gxBJjzu59cgNiRwkg5JB2vLKN6T5bhMDSGFro72dd",
  "key24": "25QasjZdL6pvJNVMkhgZ7Qx9scnyuiyiKyaQftts7RqiNeh1qvAjV8idqqv7A9qYyWJWPdcXUVKENUiujqrBr5Az",
  "key25": "5a3RyPyjCxm9TREZfr7TQKAS9oTpdC6VpL91aCsoXfodWjJ2rGs8u13Yb9LEqbzts3Y2ceg7xVohTm5w5rjebfXu",
  "key26": "5QuVnEQtLPa6Mjwz3Lo7aVsFizqtNLeBBJ9Hvv6WJFXQPsUwDFtb8FnDK9QwBhLWVbbMujdmixCJDyyyf6APiLPT",
  "key27": "4tFGNnTvaUdwMMaUR1CBon2M5wjmLE8rb2vXMiGMcZvApJQ7kgh9HtCSadC7kjCe57vsb4N5Hrtt9WCP3prSFuoK",
  "key28": "YxophFtEVuNGEnQ1x4gWSiZcpQjQBk7oY3xNbLPpWnp6LeLWtcC9wQM1hyeEheCQM8EUWfa67xNFNce4SuRPGjR",
  "key29": "4GJwar4CVsFRRynLHtoubkhce5xd3JPrc3k5tfsjs3Fo5jyXryvBTyt8LsFJTbunK4fCdP9decT724AJzV1JK8Z2",
  "key30": "3NSbxNxcbXoGTNB5DHy9ProK5rx49YBY4SY6ownKncC17Fq2rowSWjdfQsbXKM9RNhrGf3mG4o2LM5ghWgfMMfqB",
  "key31": "2UN9Y4y3Xb5sgm8Xq4Y2Ht9KDsxjBA6s9DVgZB4uK4ECWfUyUkP7bhbTu7g246sUe43ZJZK3CQfhWs5szUp8iW4a"
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
