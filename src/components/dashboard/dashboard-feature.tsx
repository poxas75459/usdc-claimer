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
    "5PrYD1uaSD5Moon2sRHv5eaggXzrTb3nDNAHXjuASRdVgfNZhiPoUWYik9bUW7eYGmcYEN2zkqGayC74qHCV2eNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnisRhj97NuksAhB4u4LoxQp1fMR2K7kPRkkbxc1dSaSMtnzqhKEiivEQEQtrT31cBVaK6SQMEapvkPfFjNqtBa",
  "key1": "33aPsAwDNCbgc1CwNkP4Q6CrZqJomb7K4ntwo6KcCgfyBLSWu4wnq1xR2xXJyz9HPmgCMmbkseGPgvA1L6BcWzai",
  "key2": "3hfDKC4GQDdc7WYscZyRCE691rqKhNjvqqTWLskm4KS6GzcqhQQFbY77fwGcJ4eRxEnk674x3sXBDCRvJyvWsp2x",
  "key3": "2mkcqJ4vQM5xu84h43kYo6vZRYwJyy42NtL9uN4StqQGAvR8R9YQSGEWrtjAGb1TiwwerSTjLUuo6gs2pepmw9Hk",
  "key4": "4JrcMbnX1XQJ4ckQQVpHgZ5ua3qDeiBLUwRWCMuFynYebqf61yNpUmoNecDSc7nFhTcaHyDYVkM2oSnwUFXa2y2G",
  "key5": "2EvH5wscw3CSXAydHghCRLu9S3C89BeJN5gL6ku2ZutJ8MSfmE8X5sDYEuTHtbMzk8wwpETLud3LZYnVunsifPgb",
  "key6": "2coWhjEVwmGrs583hhnqsLiFRajTdcf4Q2ti3HAtVQFHuLkqqSSjNmkqWmmku42VdY7fFEBLwoBs4tBX3iHL2S6m",
  "key7": "3WhcAG3trvWzjG71v6iJxocF3Dy9pisfDySnZjc9SW97eoNUonE6KhyTM4HjK5RHS5EebK7tWKbDqKM29HRcA1Wk",
  "key8": "3fP3VzEuhGLKPvY8SKSmRS9dLsHaoHf8W3meUptapG5kXgPz8zRo9mqurPwYD9rd2GUWpGeE4c9wP8HZGgaPe7Fj",
  "key9": "2RLW6jExmsYH6hkmwBRyZbUQEbhTD1QTaJAyQYFXqfFDduuDY5j55xerzpkVLV2HrdZ3d8f637GMJT3XYSLwXvxZ",
  "key10": "BqF8hmxcj8VyfjjpRRU4oePv8p56iPbyUMosmPRjwaDbN4Vivnay7Z1ykiTzgUwBDVCNVa4EYcCzTdExeeU5feG",
  "key11": "5B3oBB9xXhUJFDJqbAJ2YSaNJQZBBMJYLsYagv4DM3BicEGFVPwVStKLaqRbKMpqssRBAPRdjckJ5dtee28e9uwq",
  "key12": "65XmLqmQ2A3rgizqFSswLzWW2gk2bdHYXCekwVoHkakcxkQVVqPQQQ76LKdreqbuXbCyipryNXsbUq2UihYLJwuM",
  "key13": "wwqaDhEetsNxMKruREhWKGP3HrS84AZEtFACP5XAuym6q9xjQSVRhtv3KLipg6nidmJhtnyXT6tszUFXZt6tSrx",
  "key14": "5C4iqyND81gjDvQaTK7cmnHVds2LHEAqVhVdeqbs71P8Q1r117hGKeHV883DvsVRasbypCB8HZEmgiVQANpwbZEm",
  "key15": "ofwsCjFGqPMtqipuSaKvW9fHm1nyQ2Uyfcis13Gnufiu9XTVNjWQfJjtg3B3JiUkJQKEpLEFYtbBkjahhhrRdCu",
  "key16": "3b442Yc6uhycZvkhARSX1MyoyhGgtdH1kRiyjfjbbnnpCxJtMAdPWd7cs93f2QVsPzamdTFtttjNAKWuJ1fBrnNL",
  "key17": "3H6Znor1pwfpqSCSBYy2uhh3LUoM68SpGm5D6MaGU5HkjLqCXynmCMBbmMgFmxTjQAwDns2MmLh2ofG3Bnd3CPnJ",
  "key18": "4qTQbtbZYM79SYKoP1QKimcVWvxrfcXtHYjDG4Fm4MmdcbXauDMG1nyK18ZQRC47Eow2DiVBp6W9WRxZ2q3StM9p",
  "key19": "RFAfvRZCKPzM7qCasy4B4JyhdwdMqmNK5inrfbtshPo49CCFkGH8VL8bixfMQq4GLEsMR7pe6vTSi1Y75rtk5WY",
  "key20": "2AvCTwz2NXtgQuk45svxbeHSRwZW72YDCeyZ2s61hc3KZh6n2NRKTKpf5jKVXkmBcWy6UekVSNYZkwz48Q6uv3ih",
  "key21": "3gHca3sizmLZn4FFGqj4WPB9qAcmZtDGBto8WRihb1GWFu8H3TfjiXv3EEeewYDjZuU3Kqt1fD9tgnhA7Y9KK4fG",
  "key22": "5xete3uQTWuwnRdT9YsHDfN3RAgCxxvzxLYCC7hhYbzm3e3jmWUb11hnhLoV5LVwRZmAZpgDJrrxXF3o2HHiD3cn",
  "key23": "44qgZCspj6Ac3CoAbVQuMd6tCJJzo8UKA9mj3ggoERAzpr1GTCSrKbWvgPo8zm8sJEmSkMb5iA57cg5bjgeJesnk",
  "key24": "2qsW2LQJ5uBYH9WWGEHnkoWmQsETzEyHkvom1XitBYfA1XXQhcEDdofBySZU8PkAz8icbpwCrWb9UNJDDt6FZ1MU",
  "key25": "4uHsPrQKv51eZh3VoHtzYxFM6Zh3ksi3wQYiVJCVtvq5EAkAUMbTP1WFjaKBfuCq5rtdPbPBeMf9Ff3eQxAMtu34",
  "key26": "5LxaWWD8PB9u9cSMVFh6mSbzPC9ToP1UkzAiGUahNgNbWJSfeSm4DLxj7TmquxQTjoX4VwzfVVKNnrfU4zi5CENt"
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
