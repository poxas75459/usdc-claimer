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
    "8njBNSTBS67b7JwcjgwEoFGCsfhC3baxJJwWcX47FYmFsWXQtfHay6jZdD95pauyENuZyKHoPcQpgjYdH8Tj4Zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBpaKiUgLMxMBfNMkxrgjiCMEAMUDLXhQ8Rh5Ms9GC2oZDEKZEdSAwcFwp8GCJiyRtSoncvaNnZS37h534hP4d7",
  "key1": "3QMiKezxjXrDjzpDTmViUtfR22esAm9sU8JnEpNvTEuYK5vVJyuA9fBVbzXtYCZyhBozSbsixW5guiULvH7dvNBi",
  "key2": "4L4r45MfPuhtkTayCMLibYX2P1RV5fqYjUVzPGysq76S2yJKPf9sDThajcy7zYyzvy8Tnpmkw2jv7xeDeGh4eKom",
  "key3": "5xpg655XXfVc6shKoumkAziNKEZBRnu6a23VEXuFmEVpi1zKCtewZADgf8MZHo4fBoVS5EeXv2cjN3s9xNbrTzXD",
  "key4": "3FKmKv1VukprXVTXgJMZTuR8HuBe8ataetxN1rubMcSmt71bRUd4cxwVDBEsMGo5rU336XghsacAbVtGqfDQtV2V",
  "key5": "4UiSTrxhzUVrAg16kxoFAqeSErKjyNz4d5gZxSG4aoqhGX2gd69SBuovz3J3whTTfHYuvsJT4otdpdtHYeh6FeZt",
  "key6": "2BW6RGb21YMoDETVpevWyWVMUvaJwBfcnQGpcGtzwavKVqo7GAC7fXSAakvN18Ye9ZCoysPVTvQ4kWCx6NmXne1z",
  "key7": "4PjnqXt5q2dKkVM1gq2iLrLHTEcchxh5EBdJaqyJxi14wd6sdG67BtqARw9xBYUv2N3BRK33ZguL5t3AaDsQjAK5",
  "key8": "2nLdvqjrbdYsq4w4kSGmCzysPittMUeqx479K5FNcQbZQj5eWPVwp82xfbkyGvrwemhxh6rr4jt624FHdxVyiK1S",
  "key9": "67ok21hkRQcngeQ33U5ebjBZcCnxqe17SxjmzF9Scd6TUiDF11jZ1gg1jyDjuHuV8uuRq3ykbHt1QvTwroriKGg2",
  "key10": "4AK5xbCVty9MzHZ2Dv6jpZGDbqHVba7t8KYk5Q6b5t1B4qRuN4CQc6ffqgZS5PQjSN3E33E2g4Uqbu36dZ6Qpg8F",
  "key11": "5Rz8RfyS1TniZxwPUooknp3ubbyc3shSMBPaE4ANEyay3nme4dnEWCL3oVS1ANHf5P4HkQkv86KoPrDNwxudxD7k",
  "key12": "LHRoootktBWdcb6ngtDYhaK8z9tX9nCgHVLewbBPWHr55Mgmz7aPxuHdUYZS1ibh9LM9ZJJby2RjtRfJJbXUG28",
  "key13": "2w5Dex1aJxwvdHLRceb81HngHjr2mH6zt97mEVLHvPUwvCSvFAhnQmqroiZQrddZTPZiF6vGDa71B7QxkD6PQQy2",
  "key14": "5kXJLJqL1oznHQQ7hAkwkMpSDNHjLWjkGWSJeg6kfH9YK94LHUNhGVbrTtoF7RWjzMMYmnBsEngPpEeLrp5fPkBU",
  "key15": "5UpwkYqUanvu8nrKELAkS7o1mat7fXnb2usTYrMhYF1QkKHFxma8T8xpTvXD16vas2zncYRPNsiwtccjyD3RE2Pn",
  "key16": "4svmN2EgAVAyVDBMx2nZeFfm3KAWtrAhb1589Zq6qy5B2dX7JjEc4joKsBKQhobcw3zjFwQghHqhyRJCc56a4v2c",
  "key17": "4Tj8SxhCQd6dqjZV91kY214ANgq21gSqRCw6YdimBPwyUqno5gPCTAT66jfS9WKRQpSqcmUwVQest1YQgrGoAiFW",
  "key18": "ceR78zEB6Nuia2fDQciapgS9sAxHvFcn5YLcH5wsvZ1C5fSpzgnx7pNh883N2nBA7FwwYghGvV7NiCpnZRjySXU",
  "key19": "3PuHUXsPbad4iSWNHw1MHRokFc4qMotX6y87RzX8dBwxziAsHsmXAGuh2acZxfaL82dKdDC2kX1CbMEeqqEX1TDn",
  "key20": "5U43tFZdgZPZ5pkET91RgdoV2aqaSE4q81MsgV4n1kb5CiXgVYv9K3i246WcGfPTioYgPwArJUWb53rEhR7v8EWo",
  "key21": "5dMpABTLBsWanykVsKT8r96kGHwNrqTvUKK3R7nz7eZT8J2AGtGmKNKo5KQ15FeWTjzSsJRQWSwnXcP7qSYFRiKF",
  "key22": "3L73EniLRC4PtgUEDbV1GE5rtZstLKuSeEHr31yfP3uidXowWHwSjBHFGTR4jkzR2tJNKSDkwvUCcxc2C4XGU8EQ",
  "key23": "5G1JwoLwtu7VpdZhLZAHq4oD6WgqFhF5xq28imiY5tAiDUstV9jBaQXzhWoBoHBwkbQ5qExMcWsWU43RW1rVN9QX",
  "key24": "7Eq7mrgudmDSKnqQQ74kg163qSssaRhrM6FZqaHkpkXZo4AdK2GVt6FcULckMf1Mv2usYYRirC73d3DjBnDwSMK",
  "key25": "2ZMWuQDgiRPRUxV9rQXsrZBVdUWT2nyLd7wAXqe47q7zMisfCSdbmMARLowBXazRhXbjE5R8YKs6mgkZrTTGp8gz",
  "key26": "5wFZQW3g6Khv3cpsr7Vwmk7sFND2C2bHHXGT77iCvWAWRFgrVbX1TvwRp4pufkL5T3nNQeZRuNe8TRoazZhLoPBf",
  "key27": "4pAmDBZoZt9SiYLH81n1tu9vVWy7FtpZVWsQ8JzYrJq1YGaH87ZbUcM6cYQYAZDRSnU17ezCzvwKDtK2q86Nga8L",
  "key28": "rtLu5rvacYXihkhHXfcbWAmuZ535D1oGABPhoifWXnLiCUksUmXXa1Pi7mUZ9EEjpvdCqKPWxseNBwwZ6kjSEeS"
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
