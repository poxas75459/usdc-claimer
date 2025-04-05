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
    "kLzWqjrq2eTCsFzu1hm3w4ARTErmmsQFAMgibxVwkNDCdoGnvBiNnMNU9YhwL2i3GXSnLhuDaYoGxVFZfgJN5vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZicASWkiJeJpGZzokEj7YrXg2778oLnHWMQAZTiGVVUURko4Aco6SuujYd47xF8WkWLopSdoB9QtyhcB3bJ589",
  "key1": "2qaG8gEe3KfMwvvJ96HYW6yJMznFJiCTwmtZpheTUg8UzWK43JRR5XeHdWD6zYFj99wzqpB5Goo6RJkS8mEhnVAP",
  "key2": "5GfjzsEyHytCPSpYBF3KjPXppZZccJENBB16j9GgLe7ftsf8aKbdhi1HJCXayWPYULZBHCoR9bJhWduqep7KCKYE",
  "key3": "2E1rwFw322iDs8QnEuEdJUoGrzkyHwpZ2xTKHK3K8KccE7NXpHtW4tvxG991yZ9pH9Rhfc3op4MkpLU8cmFwGmXm",
  "key4": "4CU2Pa1rZpBF3UuA7zdmDEwY53ZGYaAMZkawjSoe2j2hGfLfnpRGcHbUP29KTivYHZzgMJkStL4JyydpW8guEAfH",
  "key5": "4DZngcYkqJ3rvJP8kTTRHbq6g7dUVWdHo5vDmLxhy3FbBkuxCt3GRGjiKXjMLuqqRtfwgoJUQfnomsPvn2X5JBBX",
  "key6": "5SDNzWr4ZK1gYGLTjLtsysUwmzPrGGvcvsMYduEyMvUAEArMgkGoWqsuUnm8gw44uGaZx8iiR3j4tEpzHer8puFB",
  "key7": "3PuxuU58JyD6VLVTqxkAifeF6V9zfXs2uR9M2h3LjmvXEmPfsgVDhZg4f8fBxCN2TiEADkNGfayzQ4KTbTx98sXH",
  "key8": "4EWXYErSMMkRWJZTZg11KaE1eHNKyJHruPwvcdynDwk9Qq3eDzrQsSVmf8VStWmfvdnu98h8K1bpciaiFmW1touT",
  "key9": "D9ti4UPbEkDKg2AVbDGHtW2c8goDjz8J7N5TyWapSJSc4dREBBBuUkUq3QZQPwEbEQxEfZtFREs16gp3SeAJ4uL",
  "key10": "3aawso6VW2wrvWg6evwiCDXiaZHJY4ixujZxGXrLb3nv3pWDAqvm7nazgAieC8f5hGhR9YNsf7n4jBPz7JigatMq",
  "key11": "3RFWJNqJgr74TPNAE3wGczEuE2DzEamUYYpQz9N8zJcARZLGnkP9BFw8spMsY4JRLy2ueDhAAPwyhBEgiyC8yXwE",
  "key12": "3oCkvGk8nKTrTJnV4sh38GBXu5PVWWiSNFLUK4HvfdQNBvfM6r3SfYT9nRywf3MStqEoX1rW76vySbrHJFzz9cnV",
  "key13": "47HTfYuqjcPXK4gHEXYQE8ku6sMkbVTUB2L84WuajgRdLULKFf1J6q5sXNqZg4o9mjQsGj9M1R8c23xg425QLzwF",
  "key14": "4iSbCuHe386vX6GTJMj6grW3BHQkwiSkvWsxTECHENyQanq2a8WKZrVjyDx5BnsM9pARHGcmgzV3koPLGkZcvZqX",
  "key15": "3GRKHZvHCnZLrqZgLCwbTH479Q9T4xtqknVCnD1fY1qR7HuFBZtg3QETKJPLatxKmNz6pzX48gqd546vfD43mMAF",
  "key16": "5w48Cfpfg1UKQPsnpQZFCjNx9pMz2H6zjwf6u9BMTwAcyQVLAfHZAp3j1rrwTZNrA8r9AHVKsQUFzSvtqJxc7pjP",
  "key17": "3DtcLuYL82b4nX7tXvPH8ryrHzwSQGahbejpFfhhpgD33DLtLJH5YMS8v1SSwACRhSuiHh6oVmxTC8JFXPUdNWZj",
  "key18": "4Rv31g63Caee1i1NXvykqMi3chHVq56hEZBCURunaDmDstUhN2iXbbUzSjHH3MM6tjkUW77ARV8aLJV3U65KVGHz",
  "key19": "sZXhpMXZwbMsDqsMMKRuxsJsuh4LHiNdbSg3gJfmxZt8VLJJnCEHojeuduqYugHD1yzFGYXR9uJE1BqmjhABP7T",
  "key20": "24va1PAgbQyVG6Nidfn5ntXMTvuXGvsUPKfbtCRgnUdoZU1XBueduuFwTjQg8AasAWfYoLZySkQ7LkKZA6Rcv5cB",
  "key21": "f2sBuYAwKXUmNRgmvFKuVbDZ3gUg6zsP53ePEHQ8Vv1Tguz9hDz8Nzs65fmiNneMGMQmr359MgwyVnGjhuT44Zc",
  "key22": "dkc4FZbXnaFSEJJGr8qa6vvtc7U21yofsNicVDN2HhUKyBimpgbf2bbAwCu9PC9W4E4ad5MTxYSB2hFtCEJEP3y",
  "key23": "qA7zFhHPXYwraju91AZ64B7SJ6me5erZ2cSPYEZYSb2oeVQ1zVXnWEq6oFjQhdmiQCpqU6YJPst9dt9eXUmhbMj",
  "key24": "24zqsnG9J8KLQf5kb8S587fZjvk97Qj84W8e4VTiHUNxqNCnhd8GZmixbU3hfc3agRvdyNcXFjQ9PgtNbpe2PuMS",
  "key25": "3u7MxSn7Dop9mnaGmzQ6LcJTyfTZeoEShdR2mra5Qi9Kh7zATTeDKJJwejiyLabb8nfr8PEHiH65NQaL6PGjpV3r",
  "key26": "K6peVWaS4JChrm11rguW5xQmEXpBWbLAXoe2fuc941WE7wwtECwBxcJ2gUCbxhyotPFwExeZFwMY3sY7J9p1c7z",
  "key27": "54WgP2cHmsK61Pv5NMW4a85KCyWhkats3N9HxzKhXzKpuGvDUwfWzx7iZBsowiLFv3Cu2kAaaW1oxi4gnWCvSZei"
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
