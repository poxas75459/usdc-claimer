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
    "3mDhQxkLezaD392wgjYhdU7ykFjGKSDckSpsYjpxZ4fiUa2ie1SETx8wTseGZkpjFXwhJTxzKNcGuuUJ8A1agDSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqKRavCUC6mcw33uiJj9ijhRDsNQMooB2m8rKy8pWkidBJ67QjHepuB2UtYAT2FtL6S95NFqg4VpySVeFZXpuki",
  "key1": "5NDpLA98dSpowGHBws7Q7Qe15nhC1H89UU4kaqeQp3dNCVJYkErZGaXnGfX8VAwQ2tbmTwqvMD9ES5m2Yd46Viqu",
  "key2": "38rJYv7LFmqM5775snNBSNHpFzxDVZJavgKv4Gq8uU7Tk32hHSk9nfjQ2j5waby2Cc4TGnco1xfeQmaT6ib8RmVX",
  "key3": "wBrNyqdbyeeGprU8x93rKeHQazq6pY9gzcBKkfwDEQF62ToRihwHEebV3iG3QRDJBjKzKV59aVHdDwW65MRZLkX",
  "key4": "3Zq4P3bxoDaJqtJP5bvoic1hXnTg5GZAe3XkYdBzo1m2g2RqD1dc6tXb7EbopeSii7Up2QyJfPgJbbUSUN3ZYonB",
  "key5": "55d7NwT4prLkMERrVUCqCnYE9RzkdfLpWYg3NbQkX6ojDpAoK2Ye8Z6pLmh1T3buE7KyurQ2omDKsa9Uz9VM6mmw",
  "key6": "4CsMmRzzLsZQJMZSYLetEjKuPDK2CQyUuDB3rioM2w5nxprB73ZZrNzd3haEN6naqA9kQin87SreH1bRvQGuoqQa",
  "key7": "4uYFnu9hgqcbGbm2V5wP5tCdmCfj4JFGFnfDoSj1c9MXEtWf8gpm23jx2gVdCfLZNT7xFMWifDf1uJU1gwZF8Lyv",
  "key8": "3ek38QCA3Cg8j97TFikJEwtVwe7ZaPZcXMXVi1ErRRypaJskh1Z4VYozyFMw1em3EGvhqkkRz2iFdKJeqRju6he9",
  "key9": "3riLiqmSy3g255gNUL9gtBsuH5NE7bE8MfhLEyZ2Af37ajmavBKa6vAz3AbAPtyZbGKy9zn3DXf5gWZvPaawdHuK",
  "key10": "48GczTwuqhW6BEWowB1mt3j3QY87Ytc37tpFxV4cesPVeLqZfXx1WZJmGesBmR3emGuRmcMuFoLpoceXXrd77Nnm",
  "key11": "4W79dP7WjJDq1tsXZBgKkfifEdCDcbUgqBGARLZuUECJ4MGduKSPhtzVRyQQmuH1H5VmkoZ5fdKJD689th58QJYg",
  "key12": "3Cwhm1zHJeN3Y2oogjhHAGKgZSGY7d2YUUu5qdn9RwfKd92d5JP119Y18motqZZXAYUMXRh9NBZTUrCLpxhgorZD",
  "key13": "3H2YxnxdQ6MtTDoUiicZjA7MxL5eQy1HUFb9QnRg9F4dSaKBSL9RMMkzgEHyTpQbDG4BW2BBA9psLqDajpCsWBxu",
  "key14": "ba62zDFkK8q5bJxMbrsTaLksRXyrFAEKBcPURWUsShLKUn8aSWWTGRMWJxxuxTGKEDBufUaa8aiw3ZtuMVJrJz1",
  "key15": "3qSe79w6f8SVCAXpNGWTjVzcQxvv1p887yeAEEGj2YVPRxJQ2myUHKjFiqnHAyxCBvNzoC4oUXjLPfMwwtj6mWd3",
  "key16": "3phd2VARjp49xyyuj3vQ9iiN3vxDV72SWRfGp71zBZbNzzsoDewDGBZ9crGZv8knAVfTomhMPJiogRGzXkonyoTL",
  "key17": "3k1UsmxhJxmK32ZBU7JXeXq12MxSBqfXCzJeBhVehZrkyKNKqjMTThpkBjzNtrPYiiwexZKhCmNeCGk3aFzzEXsA",
  "key18": "5hEvHoBjueyJ8bA1e7p3AUKqayn3diJaVFk3QNNmucPCPR2CmBUVv9KYHBQi4kDQKNBt1BnfDCFpQfVKgEgzgvkc",
  "key19": "3M7fpaBQf1iFyF2U51ZDSRzTDG4UQgcvdcANgPzbNa89ezYooLTnHyNrs8ow2HwtKMEiTq7bkG35eEpWUmw34Krt",
  "key20": "5qzpnWzqQYjokNhorJqnhsVzU5Yjz6XzQeZAgvLKNiExjm4NdC59zEQncHYUUrX25fDFvBqRpV4aZtnrEuiHGYkJ",
  "key21": "3w1rChspAmsZTYTFG7UZRJ1zkbydWFNaukKzwc4MJ4EYxuYjWopJxfr71km3V1Q7HfNZYbcdpyt9bkJDsTn8rqM3",
  "key22": "tDJ1kGyX5utibpjocLtyEEx5hLDNJDkYMjRtvNj22yfHn1eRpnJ1Vaq4bhXGDS197rXFMYq8cLpY8AJdTUCVVXw",
  "key23": "4hHqx1wJnWHa8C2SrQ9XG26BXCNq8mqwibZTaWX8zDopZm9x33q8S2A84oi2PqHT8wb8HBmUTEL8A9j6xUCvvkCQ",
  "key24": "34f1HEyVdWDsDQ39gPqEnZrw81e8tnTsDTJ1tjzbYZofopA1DgkFE9HMJU5Z6JRxWgsPeZzoH5SCRz9AsLhpw1RR",
  "key25": "469Yt5irwE1iPjhXaYgTX9HMUUsSUeJardiqkGVfjs9SLVJEPzePNeF6m4ktSAZCJzTVVvmRMZMgxDVSiGyay2Zz",
  "key26": "4TeUbLam9bpAfYRQykb5t6iNZtR7TWYvUsoRGJzkVoyNRjxS6wSRWZPERnWYPe4byTgWNeGuFoz7ep1Wczhogbwj",
  "key27": "2jxvRuw3KTuJaCqK3ya47fENnAuxxmfN3KVzsqvp4Dm2JUXBpxR7urnzPBJ65oBv9qJX7G2gEJzVs5zkFbh86Yi2",
  "key28": "3kEKunivXB3JBZiUrL5cDnxzRxexJzZWRLBkVLCAEMa3Qc3WoJEnSxFyt1BxdAGRkiwM74UdtbFCNrTUyAyJUmX2",
  "key29": "HZdwZnW93PQVtGmc7YceURHMWUbhPwZxLFa7SBHYfhz7JPrFVy1TvcjfincQgrENmqLNnq1XseRbgt5VRDdaYew",
  "key30": "4M6GGBsE4k49WcGNdAmh9Lj6va7JZDx8G4Y4G3KAso9KJiHAJfnukFbPD2opQEoQexeo4oBhwRvQxL9Unfx9iva1"
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
