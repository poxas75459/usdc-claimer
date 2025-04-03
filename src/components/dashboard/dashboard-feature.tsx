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
    "3xa3Q7u11wAut2W8HtcnJLhfLpcAX2xfpyQUiTaqQS1DvzY8WXiPV2HLBj9ZRbJgPoqUVqpVeKZmi2D1fQTSm5Be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46mzSUsfyjBQR3cHhqq5tyxfqub12Kv8pSTUDnyHejasQMj47WQoqXro6jBwkVxaaPYYNuXHZYfFrcy85BwnnL6x",
  "key1": "4bu1x7ohL1uG1hUTJLr4txKfHqCDQjVanM9GKycfHA1RhR7zf7LFDdcaiXB3zVB3NgAvH4WmSUdktAJiD3WATZvT",
  "key2": "29bDXZ8FBsA4TEnLgXoK9avJQK2UdfVV4vgbMUJfDTsjc887CK765Xj9TR67FCec1mjW5RqeCSWVpS9w38z4cvJT",
  "key3": "59DJfrjxCrsehhMtN2AhG9KSGSFA8CwMtkdDttudtY3MjNrH5tcsTgLxogTVi3KvAa3sL947mufWJYb49FQNFsex",
  "key4": "535xSYpgQfUrusbXqNDeoSeVAmUokBsgkDBJzmf27zxS5cGwSpwhqm6WPZK7Tb5hWsTkwiFwgeNgFitS5ENUWuaf",
  "key5": "4iQQJzfPuDJnD1XuAinMKQDSUHFu4usHeVBMYXmEyqP8BXFs7sTM8qSH5koeJeWFeyGujZ2J7DXemPvi5siVJYhD",
  "key6": "3Mxzfgo1Tthz9p2gBWaMuivvfVNBH8aztCyAiFsATjwmBueyYoRoLLGemd7RRAJqyRMQ53CRgYwiwUVyhPbY2AVv",
  "key7": "ShNEwPZQp5B6LRiy1ZYDTCzP7PK4EtAAVkCSDtMT6gYk9AAUoDEDCo9ku6WfjNR1JwmLopEfKFCNRuk8vyuShn9",
  "key8": "4vYLTzN1rAwZUn11vaPgKU5VcR5mLEjm8QdjZcC3GegQTJyiJ9YH28CDZfWSp7Ft2gb7j8nWBYTuXzPYARaWSmyB",
  "key9": "4LpYWuVFYMB2Twhm4E1TuJZ7nV6jv4155Zedp1dBk8bSphsQ4wvXfNmW1VD8JbsJNsdRkNhhA1krWkfWXw5DeqCW",
  "key10": "5u9rhY5y6xpFngfK2WfZw6gkXymdy4r35Tf66TPNvTWadphUDY2jhnoUTqoTh1Y7gqotE8voLwgrtAEWf9zBYQyU",
  "key11": "3X9KUK5u3dYyEs4ssA2Q2haZD4PLyyvkadeayjj5mKoZK5ZMJgX1qkhK2DiMntjbS5yM5xunX6mzf12AswQgerFE",
  "key12": "2jGfZcGVHsbi2nM89chs1xZgNPmPW8m8WyUVPZAKo7uPXKScfH9c7j4DCKgVfLASP3rfhoa3AW5kZsq87dQ8HU7Q",
  "key13": "3dh6HmXtBnQqobKBuND6cAnzbWjV6pxiMgtJ2qyR8Co6Ldsppo9z2tCJLk1cMA8gRbv2ryxjrLK3pu1Q6YNsMskJ",
  "key14": "53913jeT8J1sbUVjrEHaAkLr79FpW4EzQPEdqXuUDjLsXQ9J5mevNwJE9EDcXTBDHEHgyGkQo37SbtXS2zk3RzrY",
  "key15": "4nte1B8yesqRAgxdX89JHDGqNzFNC8pjAJaVoA3G238wyYMq1PVws3vV1Uz5NFu8nBpPTVUHgvtr87rec4XP7NWB",
  "key16": "4i9j5VV6ayzg23BDzLEUcNwgKSUrumQed4CaUtgKNKMUrtZkWCfSZfJbwmtnTDVfDKqcjdEyVxfSFHQBzhfCMzD7",
  "key17": "ENXzhp1ao53apqREmne5zbxR6RsRj6vDkm4yXB356UDzFELm1mV7DjNqMTa8qW1SUWhVjbcKwWerKNcc8auLXLR",
  "key18": "54d3XneK3Vpffz85kkDYR9uqqRnSkTeuq7dY7HhojBVXg2Ph4WAAVA79yKSyma4js31ZVteiKGSVKJuGf2bzGdsF",
  "key19": "4i9XbY4zDW9Q7oJjDW9LP1uCiG6TyArVYWUpLZLArCwnb8Pgq38jfk5xS7MEkxusyi8qmTxmpTh6bNM5gAGbkKYp",
  "key20": "2nHK6FuXTxXK4jh367AeKZeyqWVvWkMV3TE8n2PVRuRWPcg2Sj15ZaNTxRZjhqA8S1sBxzAdu8UXrZX6HKxJNj1i",
  "key21": "EsR4NwrGfH6DJ8v9UR89WKYMmY758n3NhHjTVihMgXQikMC7aKp4TrPZNYDyKkDrSkkm5eV7Kxij37uwdJxZD3Y",
  "key22": "UMMwTCwyxxqiDTJaHG1zFuN1qd2j4yYTFqeS3Q1LQEffhLRA7ysUPbFmX9hUSQVSxSAYPbcbUyGujooknS2iKqc",
  "key23": "5vFWfL6Z4zzcEq2Zkb1KH3vSTx2dkuE9RKNeEJ29Y3PJP2WNmVHHY97SNAsWpaNqREsg94tijrvu17PSp2jbqoLV",
  "key24": "2t5saabiWTVtStkjLtZXYdMD6j2Ydn9wTJVdZPibSY93jWGSiZCtVEj9C8r25sd4KFrprdktQMVzVfMtZBd9JLy8",
  "key25": "2WCVMPfuSJW4v5jHByAHVcxjSTojyXQi9AR3Hgw5sz1GCwyHFzc5fq6muVvzLYhu8dzNTLy9MVNFPb61h3ZDyxgb",
  "key26": "JqSqDFSUf8vujknykkh3xzHrZ4dvKubQBmJQwoZT2rSFXyhN4aXv9Y2xK5KHnS2ac38euVqndRhYsqSWCi4pv5M",
  "key27": "627newZF8BMC8WPDXv3BomUKSCABMX5jHPDV4pH7CmiLKjWVos5isx4FU9ztAE6KPn1atheEkB3bxxPfqUiypPPb",
  "key28": "VbXmJD92nDgWAkFFNiPmVXwfz6S9ff9giLXrDRncqFM8UBAZZpmEiHY1W179JvdxCVJ1bBeTk35g5GZG5ZFhi8c",
  "key29": "5mGZKX8eECpypTdEJ96dK1L3c6kNpPerKxX5Z3sJxxHvSWQEqjexkHoi8RmpaTf52voM7BbLKEd8RXXhzetDpEzX"
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
