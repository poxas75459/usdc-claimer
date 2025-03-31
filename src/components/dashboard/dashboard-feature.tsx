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
    "Pm2fmzydXjoDfFxg8WAacHdYFhBHD5vddyQSj35SMAwAqUprxYmLU1AUMVVHQunkXT2xBTZc226GBNyXhD2Khr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KgFuMEfRi3xcLbaw8UjmDsENQXqgws7jEqwNq7WGM1WvUd98KRY3PDkGg1NW3JNYzwNdTTRVVR3QAv7Fmg2tmpN",
  "key1": "68JboK37cofMYPuwWWnpkXbmPMYaUGAEwhCvnJ4FeUog1FuEmvT8afx1oFpSSkwUAFkgtdhaA2WDCJjn18E6hCQ",
  "key2": "5CsYkXrpgCygYmXQwP9h6PPdKSCnveL3nDdbq1Zgw1kGnwov2LmsvctePtxqUCFfWQEV38Ri2AVELuHmT6FwqMzD",
  "key3": "3kvA66n9AszTkgxJSjmZz54paGQRZHLChRNhodhmDetw8jcxCV1WdG5hbX5a67xyqU4JbTSkBxXRxB7avLbMYFPk",
  "key4": "44V3RVHoY3oxWcUdYZs4ANehW12udbo6uTBHMPkrXY9j9tnKnSt9JZghWe5DyUCdyMgDFVNBMeF4BhrzmvRDtp49",
  "key5": "66gv9TKv3Ga4a9Qb7FpDQb3nYJitxdCa1hetUxeyJ9tZewmdAoTAbFXWHRXBj27tzmNK99FYbDXgAvbeVim24t31",
  "key6": "8wrkC3wzdpEa8SBobhZYDbnKW2FnfwV6Ma9GnPT7RAbDW5LyhMY68m5q4w2mbfKNtd2HVDmpSbAtEgBckTJkvwF",
  "key7": "2e2WnueeJjJHWLSufjzYiJKnB4HhqBYLWuzGbmjggzTtybqJ3oyZdFEWjsJUqTB5xMocMYFc9Tgyq9TL2BYrnHnE",
  "key8": "idEyakB92XkZo1TuxNMNH9e59fxMybYfRb21awVj8w3bpA7ALA6wHFpBPGKnpyGQeRXKm3ga3QxURGCYujX89SN",
  "key9": "5gXGt5x1cckHJP92c8Rn7xjERhmXaxPDh4UNB2AvHbCtwXG8zTFXqKvj3yLm2YRTcRdWhLAjAxbw39Fpk3cVG8mp",
  "key10": "LmrRS8WvMheJVv6s8E8Yak8VHuB84PLvP9cxsaa6SHbComh1WBQ7RKrcqksbpbc3nNFHidyvHo7KDwQtwHcTaNz",
  "key11": "5TWBuZRWbKKC24rH5LfHaTDdPNQ1gp4MiA9UDZqed33MM1gBQjVMC9BVuv3P5v5EQibdyi2XWWDhrui7r8FAUxUY",
  "key12": "2hXXFdQQGfo5y3Z8cRhV1j1jiNh4h2oHjeXt5Upg1ei88i2FZo1XzWirhvawQQWJMfbzytCHkBpVi4S3zBi4iEfG",
  "key13": "ZLu7ZnhgF8rSBrHp4p7e1NiFirfA1EZCcGdQ3LymC1nQuizJSFgDcxzDJiRC1h4Gp2amNmT79dtSuEnXvVASDZT",
  "key14": "5MZxdL9W3URsc5tZtHk4QJiaqayrkEQnSsQdzP4jrB3ZqzwAGbCeVKX4MrDP9qxUBNpKha2GT3g2r2URriDmFX5x",
  "key15": "3SBBVNXY8bn9JJidMHhATL6fVY8Cp7u7tKSqub7nLrF8h7drqjo3JDTAQnfZ1W85ptioPpZJjedeHLLEGU68LWpX",
  "key16": "2wW5JiapUvTDoFoGUMWzeJNRJ7wF5y1QCuhfAuG93yTohgDXyi1z8EcvCnmgMnVGEV5s8JVmZWKJMbrYUGbg2Eb1",
  "key17": "rxv9nqnNaaJe5NvJzri8JEakHd6gkRFxeGVxebkcxTLEargyshXTsoVDWZ4g6iF2JS7a9G8qt9pe9XPpCShKioD",
  "key18": "Rtk19AZKHkBow9axNWoFHTV84M5PMA1xR5fgMUpUgZRMTDBpxQsSeBkqg7drAEJNwQGVkpv4DhZHHEamnGmnbjJ",
  "key19": "4JLKoFRqUzCcgpo47mXBHrbh77WBxAGKSBrSCr2eQ1bieT7PBrkR1zBQdy762nDVutcrwT2CUw7L9foGCeRdz6av",
  "key20": "4cumCd5My9wDrQm85pkT1bZCGiWn6dzFJHXb5A7BA1DSMsiQDzpjT5Dv88XhMtFsjC7uFk2qazVQbMmiRGJi7kLY",
  "key21": "5yb26ut1idmAFFz3cDPZHXLZ1XNQESosNUt7WtBpt6AQpuVhotnFcEppXvL5J3z3V3hVLMkVk2YEtcHEqiXypstC",
  "key22": "65gusjm5KNHxLz5YwzgxxGLkZ2UAoD3yvsgRA97aAPjTVP5qNR5bS3WEU3emk7SWFagzY5Jgn4j45w5yj1JQhMHo",
  "key23": "4LmhgQDmGxW1futje2zu8DFUyrUtswZoW1rR8omsU2ayXiUqUeeJi47pFHi36Qy1u2a8UHPuM8BjZk84HobAPzZ5",
  "key24": "3DJ3c496Nvdfct4q3UByLVxu3aa8Z6NyoQS23tK7PCDQv4dfSvanqJy7qpbzb2U1QhYZrnPVuCkhbbXfsx77Rq7G",
  "key25": "2SfoZG7Ja5KG44XUAVzbXFw5cCJVrtYsr2yfmUsFa2189ECbYwapDfaFPncUvng1e8hj35K2Kkcp4kJrLUi5q2Tu",
  "key26": "4nN1eua2b3txbUgYNDGbZg7W9aHz5yFyo4P2fUAHDv4GdPXvQrQ9AcDij3X3nZ5SMpXukb1SNHB8UYv8SXTbKEt4",
  "key27": "2bvENNDb7D52iRUqBZorhgKUDQpKEJtT7hPeBwePBE6JcVpwvVKehJ6HCcgyyN7gYqypkD2iHCjsT2AQ1bgBvr4T",
  "key28": "4CcqgkNZF5YmRDonDRa5ALwLwbqpiTVxfVi78D4pgFzYPp7JVmegpkSMKxPLMZeraEFYUBcUPCgPqwRc69mAwsWD",
  "key29": "35CVx4fhWQFwTVkg63Xq8ddMqvo58ANLT4ECxPGzCiH6gArDkKAZWMxz3tXfPB59WM1X2zuRDcdYV2ern8sVucSH",
  "key30": "3aXA2a7hDngjiqihc9veT53iuzcpSMe9ckUeDJ1M6kbAA6SztgKGUiuDxmXq7QgjaHJ83jJ3xqRuttoBR6irg13U",
  "key31": "cD8aN1v1Qs4fo5AZUrkquLtQEYdzrkUSFYfHNuwUgStDY7F4NWUE2zCztBSYHJurv21gyBLXMGtrrp2ebuaasaP",
  "key32": "57sSGgpSPZyoXsPjSZJ9H5CppdnVWGyn4c76m168EQ6KgNMchr5AfLZehKNXo2s5neduy2G3aX2qeK8CwtYg4jJG",
  "key33": "5xDXVcH6BKRuhwJJ5UenmAETEWwFLvtcZrDFexQ4TeJqPKpmWcNQevyt7eJgFUQSafjSaexCKAtpSAbFLjXaE5u",
  "key34": "2QvToujMr8PKoiThLEK54AuBaF33JUUhkJWSA1CnKpMhYcCv1GJ5X3TyBBcFuoLKrHbaMn4drVympTv7fvjbdJ3K",
  "key35": "3PCn7CYJ6twNBGif8y87XodkTj16WraN2y7haQZSrmgcRnS4ipKXRmKMi9J8mDGVySdYJU7Bdzt5vJMpaiXozWot",
  "key36": "2aekExjDduKFU6DE9xnkgTE2eXy4YrLK8JbHGzWjcZ8X1PonQNGcv2gqwAKkhX3u6UvPKdzbWBzJ4JUrgTUx6V6A",
  "key37": "5kJ4Ysz4CcNa5ffqDtyXVRyoP6ZHDpyjPZcndT3qeBRkiwBnQcAopdYSoV3nzbFNMHgo1WgLHEcVSbs9PMaEzhZe",
  "key38": "3a6qQ6KYQp6KZPhvwmvXzuPj2vgXWk4CUYepPfbfaDQRSKUwAfMRksioZNAfN4XgcEhm4Kq8K2stMUWkvQ4CojRa"
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
