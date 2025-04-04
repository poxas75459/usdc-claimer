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
    "2YLXnPJUsujfDiRQX6qeGnAM5y3Qmbyus8nhSapKVXtyAxvAuDXq38VAHjtNRj6hYfNpouUnmFcrfKAKUHqdLbFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o4hjUHkSKgTZCmT9ycH31pEN18HWyb6MrZx2Q2afMm3rVLQudqgDe4LjjaCPvDTfgTnAtQX8qYw5m6s7XPrrsvM",
  "key1": "2tuGtNd4s4KT5m59RpynbctkHehFgxgoqVtJ7tLiftQWi2RfFyCnz8BMz8tZCB6Cury2vemzAEEcanoEZPLQiAuK",
  "key2": "4JqcrWjVux7crs9je5NVS7VQKd3uyDr5jBvKuKqEmHhZq4RbfQdzDCRnBh7327EYqkDpMm6hs4YnmKjyn6niSDcn",
  "key3": "2cZVbTWpGEewcba3azR8EVDeK6wWdFq5ou9eYYWN7cSvUwX42NyhAYscLmcu74bZNaRppLsi4DqBv1F8cxh7kFjQ",
  "key4": "5nTyNFY1KqwniptuePdynR2CEeWCyNFXc6ZP4BkFwoBsfsMXxHt6KerubpFiSP2ztLnfRkpKQLfTepQKeNxhrQ2R",
  "key5": "5mSNi8zWcZ2gzQi4oPF6J2zjdsmd7CrHaJn1P9otxcUeMKrjeCDfPT71BZo5FnWM6M8Jg8nMFMjzQ2KR6GBqELh8",
  "key6": "2nZvbGJ6ChTHJRhhAo3tv6yq62SczWencnVe9mEBGJn2tePa4n5sJvphtYWzePaZmQwNyVjfeJsGHEfAMrLfmSfp",
  "key7": "QyQxwvCZPJXmao7KCHWX4dCYhGN83ccriQKRSDmPQMWLTZpaV5U5r2FYnUF5GJhgYP4tDVUFgc1fH9ikrGRgTgc",
  "key8": "y8b6xZfRcMLQs8WDVrST5sFyaunGy9ad78RFbvrTYzEQLRKRPZmYrBEmAQKwX2nfeFUSzSjkEtqnhoxu45oyd3C",
  "key9": "4x3DMMrC5e4S4Q27NFS6RMW9nYigUkb84jrBTpbZNN3LqWLa7eGyAnm4cCd9mQg1Pcd31djmAweyJHms25T7FpZd",
  "key10": "662NBgXnsebnangqdNVRCy6VLUvMRQ8hT6HWwzXUJo4bedeBzwZp4G1q6HNNTEE22sc2tzCjzJRxGJiyQtSMThkd",
  "key11": "3TQ3EfWAWgDrBVmds2JdTwCcq3aPbfNHxyNKjom7yYvZEsaJyc7AwASZvW5MbipFeMpbqMgndfaJpWTRpu7bsdwU",
  "key12": "sKGoSbfqQ1YvoW2vPeGNd4yRpFWckcSiejeoNsMrBXLDwudnax9bkpZcjzqEmJGNYNQEyrQEoXqpLvSmWzH2C3f",
  "key13": "5dthZG1CKsufs1LY2SiHYDpCQteBjneGF33MW7EdH1EMTwcLv1tjfob1Dr2MLUFNqePHLbA2uvzeobsC4rMA5tFb",
  "key14": "3N9TeGfaJLfHVNkqgx7fKXD5jDXvRedTgYe7S3qRRV1TNuHxLEgrkXspzM2PRxByQAqcGXmcFTda8rLCSEMZDARw",
  "key15": "2wJNRsBFiAqVXmXrYqHAkf7u5fkajcXoeTSJoC9kW7cHWCrGiPGCRnwGRy8F4Zy93VGfCVhgwu2UA2hK9gqiH7km",
  "key16": "uFmjDDk5BfeobUUihXzp7eEPEtvCEtighZhY3cfzHqb7EsPmgb9SD7tKLVbxqA8FZZsxeEfSob5LP9LucC5ck4T",
  "key17": "4vHjr7aJyXdqwdSQwA7aXD3nrD3cyQLH4jzuoYjFdSYuKdjDFXVhyBqTi7bwQmZu6aXTVDrSREB89QcPNLJfmgcZ",
  "key18": "hU5FcUpoMfv7ktTh5qr9HsEg5Eroi7dFhHgRcBntVXj2cfA6HNx9NfSiBWzKHeCsWXhkimEf4fLjHA9cQK2hgcp",
  "key19": "tFrgVAX6HUUQpZvGUfdhCaQaW1EQSa914QuC4SM5BBeeYjh8paQmrVxhTfaUpZ3TAqbnjVf4f8Zok84ffzuX7fT",
  "key20": "mNWxrsQNXZn15x1ZeGiVrzqaF1jMUZUmtLY5pHXQQd4Zw5zhnbzw2VETsSb4mnCvZugiDPqC8v2uYAq3kgDdFJz",
  "key21": "5GDyR3SynymryyzJimnjPFEHfqKHfSTWQhDiMkUXoQfD3UxYY6EsUnN2y1gY3occVaFdGQnBnPmRCoiVjjoKm3a6",
  "key22": "21kS5j7QKFAWWciKWM3JWBLtxWPyeW4yGArkgbQbNa5ioQgByhEA4NLAGJqjmGHweASmuyVXhSrvTvyQyam9HmEJ",
  "key23": "3pUsNsq7v6EHdb2aREERwpffhFardsgB3FmFiWiFJHqgHcYgqhxmJt6oPqyg4r1PWWCf2xBeED6ghsDbRjYh6uYa",
  "key24": "5sDMvNnunsKs2ogym6kCSnGeHAVCrb2H8r1e4kFAF6nxLr9sb6ewifCypsi2GnuYPYbUwdckSH6Kc2y696AKKpV7",
  "key25": "tZi8ZB7F7qwZxxNfETV4EPgmtwgTg7XdurxgVkbPBMPNrPbMFQhjJY18Zge358UA9QoevtqWfXYYtdvnrtUMA5m"
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
