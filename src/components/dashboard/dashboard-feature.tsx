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
    "5Q9oDu14MYeUiGQ1XAASM47vqW8j7gJHGuitYSe5hgRX8tssnADx8kJN1JWo2RwPJpuuE1QgXxy2DApkGYm3pHEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z4fa6Jp5SEZ74FSFh2uTfR2CqeUREeqsNyy3PgoyqpK22kQfDUnb5L5f5smSNHktBsbT1G2fWXFtkeJ28kVWDZo",
  "key1": "5vbkmYbZbVRZP1z1R7wr2d2ziF3EUpkuWTCLEc9mywUAvazUpRnuSwGKBpkokNVCHhUSCN3SFN8FWBGv3Ew8trnW",
  "key2": "2wsq7gNgnN3ui8m6aQSYH7mymMDgW9GmMZvzPajUNi9Ahy45d8kCAsbpdzgcuv3B8sBwwZNfiFeBGXU9MckrtyZo",
  "key3": "Mtuan8Cx2CJjXhnynbx8JmdMJCN1iiPYu4a7j9vtgFkQPvQA6hPuW9mY2u8DtrNKQJukkaV9iZHzY6kVaeHxJdK",
  "key4": "5jKPX53AdGEJSJCSMixuM4n3wcQeWWHrBrnCqPFghqegP2SX9SVkukDtR7AT6SGyS7cDoLm2zjnMyWfpMQZrhqef",
  "key5": "5pqJf8WtuDKpWkK8DiQ5YXwMDDHBJrN6K5229A6odqgdCiipQ1pemvtHh9oJvuyrsaaUx1gxq5uM7zwoD9wRrsm6",
  "key6": "4AucL8Xy8qxzKTX6bGHbfpRxuDdQjiogxaxSht87s2ZeXTTqyJQ8xfzBe1Cbigb2Zzey43hNNSQcGC9qRHND13Mz",
  "key7": "4f62dqkBQ5iViVy2ET47KkdjSCL9hNuDhjEzVY281ADjc34AULFwX43DM2EDRMkBqBZzhwdvjcFm8ELHVSdqYfDn",
  "key8": "2HeMiNPGdvy4YycbeY1bCicmZMcAQPWgxrZM7ARJqx8cLynwTTqZmcE4mweKavLoDazzJcbgAWm9G2cbStVNoYCG",
  "key9": "2DmWzLr6n3efThZSGVX3buxmfrDQ3SLc9pcRqVtmuuwZ79ZhjHUzm3iKtJt8rLYb8AYfPy6MuwkhtRrvrD2E5fUU",
  "key10": "7Y1zKVM825UyJ8Y4tQSFWHj9CBQYhx1UGwwVvpVsprgZYShXyWo85dLJh6ALzamKwrQpG3y3muauWmtGtB6jvRD",
  "key11": "2auCTDrQwvxzCmf8DgW2PNoSvpqMHTTiSKpvtCtf3hPmpikSaNpU5P3wAmCtwyy3osxpb8WUMJgLrJN7rZCQSrCf",
  "key12": "1zN7okEQXBcmdysPFkstXviSZa64RUEReT8Cfy9UY9WgvmZwNCZhtx4U4sRpsovtiEKZzVqTef1rdsRujUBdnQj",
  "key13": "4ovcVg1CyDpvajryb6z2RS5CBDTgQxZA4sn5spoYLnweuCoXyQvGr4uBtyvKxmAR6BDmX27Uc9CrNnutHTHQAqjk",
  "key14": "4ddAMFqsYAkLdbABAPmA4y9uMKdJ7Cf5q2kGUvXNDSGSQPzzT2RKmLmzX4kuWjEcE5fUfSZEuxH1XbGVSqkCFTKo",
  "key15": "3KigZSGPJ44omkwe1VHNvrZp3Zjn8VnxnUrz8FTFAg6QHsCzahyUPRYAnAeSQ99XRvELsBJHXyg6reLVDU8JYbvf",
  "key16": "2H61E8wSyvbFZLdMFxzhPQJiSrypPSFTHVxoubt8LdWhEPbrKPDeGwRGrWvzgDDbHTffs9nutExZDFrNxYu3Hshm",
  "key17": "5XNozaCYC1BtTaLA6DgczgENgg4RZMpFJwpFwJzw7A2kKffiLM1pEYhciQk5oAb5AK2qysDGQ4bCfjaAtjUpwZpQ",
  "key18": "fZwo95PzCPZ6VdMtFuBW41DiDe49nZREbjhZR16FD24KmPP1L9Gzjk7sK8f5Pczhyqtm9o8J6vWaKx81Yp9D1Vp",
  "key19": "3MKfBtt7MojkbWQundtv1cwaoq36H79eNJ1EdiUFFTBKnxqvoX2KaUF9BHMNGYcXzVLkGhYiyfTUvXB7vmAzTNB7",
  "key20": "647atDKiyZCMfQgDQi1qDPb3vvSLNbXsSMeSpHbqRgWZ1fDrucoWLHU7CiYoySSah6mAUnSEjn68DS3WgWB9UZsL",
  "key21": "YF5xqPbqPSsmBcG2UVG3nqCgYZTivv5uoidLLbSUfpFGz146MZrAyTdWnPtwc8wyEBtJBAcMMxb1vXV8rnUCDM9",
  "key22": "R3XRQpcF7FL3MFzxmkjVJjoBGyXKtufM4t1BEppx3c9KvEkSAXa86vdTyotaAqsqpRP9c2veAewGEqoP5chKShM",
  "key23": "5cQ3MYxMqrPw3NyzUx9SvQow5DKEhj7yzT32HA3NLhCuiY1NBEYu5Efpg8u4WKAj27KLyn7L5nwhd3GeTgcxoHAg",
  "key24": "4izBCswp6S2bsQuFYZuCe1tGm6dwftwZ4F26iUmYQHHMSSEYXE4UhdMjTW1XabWHWRvracDapjyPCSdpHq8TVWzH",
  "key25": "42gqNL5CCfmcP3rDEa8EyLitusmF9pm9DbJXmTT2wJqKhi2SgPUoF689BYTwuan7DhGrvS6uR22H1Wdr2BFJQr9h",
  "key26": "3ySmdMvNuUvQ57hxqZSkeThGjibPEQD8iZjSkYfecHeg1wUvTieq6SfQEEbKindW7hM8GChsRvLcNRAuDhGQVeT5",
  "key27": "23DHVSQGnpEBbZaAGYWnc4cWNpAUwvKhrBYt3Tf8AYAXJ5w5Fx6m1JVKwncdZ2JERMTCZ3z7dFM9Vb8xDN7SVsXz",
  "key28": "5gjuLQSnFDkR3CbG7mWUyJcu5Njv5V2Ve9zZHBnZS3k3fmd9MaaobLV1LtgUUDAAkAWGwBtFXbwQuvY6yinyS8cM"
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
