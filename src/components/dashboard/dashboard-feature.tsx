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
    "3vifjrnjgbQWGp6tBtJfMKnMxvBQWZ7jDSEZ19deKDyyPNbtyKxzXSDXmetYVdFVDQmBUwBHooDJn6dftB6tx1JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59W2LYP8cy5mRHw4CcuzjfNMhpcYnTEqpTT19FvL8zWpQwZMLfLNEhWYKinwmtn1FYmLLP93cscFmuKKdbziEtJ7",
  "key1": "4WTCqUbeYUsQ2aqLa4HkNUuUvG6edBhfCVyptrEHFYk14qgwo6caavhK8xYeDheH9w6kWEPqLh3joKMYNUYVSXmz",
  "key2": "2kvT4xt82cChtaKWJHkCYPAPqfJh4HkEufuXpmAS5W5EqRzxMzkYmpnN78zKwL8EmxmiJ8gdK2sDd93L9vBffWPk",
  "key3": "5LEBYVbo8mFSJqwugMF3JKZ33KTnwQmUU9XdPJi1ggyqMVPjKwyEsmeEDxa86c2Wz6PanbdDpR9je4yTyAYzt8ET",
  "key4": "5cYiQQZZKfr2KoyM5R93tG17T1Mpp4bGJCfp9aCYLmTYCqZbZ2YNncsQS3rSGMBRWeUjYPz3ptxUrSMecYWW3srF",
  "key5": "3XGN8RtE6wZDNTunqoESAycduiJgKq1CqkjMJ64ow4oD22Zh11g5KQtK1vEoJq1z3Sf8fcfqmC2NNmWBBEGHeVRz",
  "key6": "5aKNik5UYq56311cvC9UGF2rBw41jpafgnV1wuh4ckm15ae891PFKrbeLfBjmDBPHzoaE3bdyqbek4mkTSqZK9ty",
  "key7": "3DSqU2KM3DGwXHaPf5EpUJrenzWsmNeM78FwbLneZAfFiq6HotnA9Y5BvvxFJy2cuW3cbRSrufVXGJAN9djko3d1",
  "key8": "2gbZENd9RNbaArTumg5mMVwdkLkGdQFiTM5YJU5UT3quYr45n6z7i9Rx6H6RKEUJUuZ5Ja8jYdwHsiECGrCbXjvW",
  "key9": "4SANbkf5adr2BXPvxtwHBGdMCmBECJJfbwp5rPFSzoHYVh8rxmbaeCY1cWHRT5pcDbSF1KCpWKhmeK8ZjVBDu4AL",
  "key10": "48T4sGH8jwd7gVqxJgcAY1qbpJ9QgkZassUhVW7bEQmhwd9NVeHQg1vCafiH2sVUu5rDmSZVtdjJ1dFjUtRa2Wni",
  "key11": "2z4Yhc6sc1PQagWGynwbb6HTRcHqKAsxhbfgjbet8u9fMkuZAnTxth4pYa4MCwBxAWDsnTJVXaMiQHUdQjrZQeQn",
  "key12": "5HVePHDesnhydxWBxh9subPaofNcJwggmGMvWTDdg32UuxA45xPm6iz6P17Chbq2mNPxeHoxjw49Y97SQTjx9cCh",
  "key13": "4GCt3fsw9nCtqPxyzT5dpJrKZg4q9NnwL2xDjJDumbW8vH4amq8wNvVhYKYzqUPDGLdKisoC3CWR5zxUbMQTk59k",
  "key14": "3sahDvLfh1gZRHQYSymByzKVhwtEcy7uQz4SHPoPymDFFwnMHVEgwA6gYFjKS2F4vFwMsEJnwKEBtmDVSrT3VwU7",
  "key15": "3Tr7faFQN2kAL8AaGepSiZAenLnoy7eYKF7VXQ6wFbDK57ypvEDg5DBQxuoQ5pBYgDAAzFw2beooxAyjrSEgFvex",
  "key16": "3oMdaxfd5UqDGpjwsKUgQ1ayb33BWxSphcUjYsn1KzbFiBhcviDKoD9tk1p3tiY1Y4z7QiMKbtsRz8jYpiTPsoLm",
  "key17": "PUQQ7fqEb9sEvmLXN7Y3SJeUJGQ8Vq1xjr8CAPCDyi3eShdKpaxBBCdovoYvhEMDgBkut2XSG6YyyyT9bo6YPWg",
  "key18": "3BpSEoYXD6NEiHVCveMhm5cUKWM22285KqQjXDUuPMiu9S7p12bhkfcJrQxsZov5E3PhCm6hr7kRZc1DmBQQjArz",
  "key19": "5UGWs41zyqcUAaiysxkVqrir4fKs3LDx3FvDk2TphvXL4aZ7Wmz79QhMajJ3edhjE1seaJMpcRAkhM3XzSjFpAkX",
  "key20": "bSvxcFGoDhXjV6z4j8bvJooHSPrRaaNA4y8mBMRMscawd7CruqABsgVuEQGnHgtGfSXmbwjTt942bkw3kt5oakx",
  "key21": "2NqY8Dbr47myGSzdDkNKzYZAn5Gm3DWUD74tYJi9gUydpac96HnQhT9Twderx65j3U3QSWcP3gAotKHL3Gkt7M5U",
  "key22": "2enGkGEYkBymwJ3cp8YPv87aj1tTXMEyw1sdqdpafpZKF56NdaKRc1ygvU9G6v8ZFidHDr6UE1tkZTd7VMnWxg6h",
  "key23": "AdiF4twYhFuvwtxtQHUF9KZc2NM733tXKemWZAiEwm1JcxQms1g5KLk8JD5A73jEuwF1to1FA3ni28iicFArpF4",
  "key24": "5XurKak2gdTKfgjwQXrFMEmwRmxBWoi4ccWJ7znBDV4mMbMK63mgyRViStakg1FA7ksLeEhwE9YWo1Jp2ToCBGVV"
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
