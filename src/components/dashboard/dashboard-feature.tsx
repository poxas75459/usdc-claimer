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
    "4M5MZnYzwEcTWBQYr2VT8aTj13dJJ4L1afC3AaVvFY7G1JujjCDPh8n89ELkpwQAqJJmzjK6q2hdYkhYmbNZRgy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whiF44v2BnhainpbeVKXvjVbvNQL4dj31VjJzEzhBKyHSuhhp7a3JEeyjALxXs7XPJjRUnHHXu86rPz4gezm3ji",
  "key1": "tv7fbP4ugVFSNj7HizdX9gkv7NKfXvwvRogdeXmQqrb42GxWEqUsrkux581KBnY9gBhAw4ubxRsf5j7Jg64QyVb",
  "key2": "34qr9RLWScFA6HGuwPVeRNFA2UmQYSASwoHfK662p8tnPV6dWL2oLmHWv57rYFViLFHkn1dq3gqkQmBxduaf7pFp",
  "key3": "28pGV4pVjfmY9pjbx8pPKzfmctfathZd48ixojDo6VNcrHo1CA5HvcxL35DNApDA8Pkcxm4mGBgbFwetbsHcHvHk",
  "key4": "4BewQrMW4gHXdRB1GjGQLZuPX68SFEP9hGqGVLmx9KkSXATRoq7cW7bQwyz4765NPwbro9UcFkSaL3U2eS73kd3A",
  "key5": "2eMhRsTHaKLnnoYVLdeXikByE15TkWgVhUBSWRwH3sTYgNvoADCUcVTnmEg5Ci9HSw4siEDtw5h3QmTDrVmQATwA",
  "key6": "5UwFQw44XidTur2moS1sZcXs4BaU9oEfcXgnEPtJqSyxbiofV8Te4CmnRGJ3oGZKZvaxB5b7eSpAzYJPTvv2yVn6",
  "key7": "5RKGrHVg7yeBHVRCNB8UqGpBYahudziBGNBc6d4RuDfKESRFJqaq13XdbD7iE8bWrjPhJBDFGNb75Uid7u5CqEhh",
  "key8": "5ZbKFDz91KE7WyT4CPXdyAUWydhuqgYHwvsETHkwFT8tkb7ywUZq1ZBawvarg4tr9UxKTXFVxFLUaZrvKHJ7JMas",
  "key9": "5eLgQi7jqBqFEHLngxjp5xvWSMwPbMozrbm3bxXiyrhkjBdmN94HFWww17iPbHT1u2d4EVu194dKqsbFo7DfFj6M",
  "key10": "3KTdv6c89FbvBE9bvBWoSt8UpfozvpX4qPWjMC6ZdQN11VM7SKfLkar9o129McvbdeFVxmiYQrE9RqkGnDisJsTT",
  "key11": "4TTaTJHz7hxxK9X2RQhj6K28SJ7ZTScQVnJd4T3V1DjbUKZTTPRNAFonQEebNSZMKBSezx9pHh6xuZGFYDid2PNy",
  "key12": "rwoU3vZzp5LBxSRjMDjoxxqvFyPhUepcqQB6LjfzDjYVtXMiijnL1SCPAc4jkp5VUDNLzH62yjwpgox3g5s8vyu",
  "key13": "5yC5b96St58SF9phNcHqtfpF6MfywtwQkZdeK5wAPersHu6Ykh4m8cEu3iKoiqWcK8TnqzrSsA8CHuBTu7aXtc2Q",
  "key14": "4NbmboKy2QCKyxAqTqN61ZUK5mzKW42FLzbtNVFLpWDP9pUyCtVnPgJHJkvVA32vog5TCCYzphfHRJDMUsTWwBDv",
  "key15": "2Kyz1JMRL1cXELFYKrQhQLKLWUZGgAAJQfSQSfJ7d1Jgkco5wXyAGDwnH4zb9V3k3bij6oWkq6C8f4fbuLQCMJd6",
  "key16": "47gcRm9Mzo76BigUZKkEuncLLnrumkWZXTNSwgKPdzsT5h3d7ATkRtzb8fVj3r5dRtd936DrH8RnFdnaAssqPk3x",
  "key17": "4Qec3r2PGonQBg28R8rNgpjEFJx5A3uhJ9mwCkefBrnTDJRV4T7cp9cWXdcBYyQXJq5axAzr4feWEZCkNh4xngJ1",
  "key18": "3w8MaeLZUakgP4MGFuEUmXfhr7XX8yDU1XSkxwSS9zpr9AYNRBpbVviL4sKJWAU4sDFWrC8SN8p9zP8utEGzyYwq",
  "key19": "VouchqmR3A7TxC29NbV8t4YzFHPnHpDnUDkZCeFrc9qvaZSzgK7UUQ2DgNQ925VRotoTew3Md3czTKe2nhi5JGL",
  "key20": "31749MHj19fEtPHgAw5b9ZAuoF45Gjewu4qSxTHyKdd6vuw1o8wZVAx5iafSphW81nzpUUayLTreMSWAh7AhbjPg",
  "key21": "4BukruimPPzk6HMGgUbmfhsQRDvDLgGs7bbepxm2TvXqrBijiTBF691qqNMcL8dJNQ9sYkGpLbgpeLCHrVJZD5sX",
  "key22": "jo6LR1HEU5BTUreC6hUkhGfUDJRr6YTowWrmAXQnC4XJ4SigSrnCHj6wpmcNLsgPUuswarcaYQ55pmaM8kR21aq",
  "key23": "3pB3vxyjEarCEdb3rtAcCZVvneTjCnovE5V71fTKyi2Qjkxfn6PuwYDRudeyJz8GMNABCcrPDXH3iUF8BXqjWgA7",
  "key24": "2vBeUD2hYP8S178FmFBhC1NKndUsfpTWFtrsfge2bSXSEQu5177gSkAMzAJCbqA5MA46SxJUKBLGkGMyg7pWULLB",
  "key25": "3F29dfqkbQU8Ab7LMsjsdV7jnUCBrZuc2ARvAWoaafsaYAiUQemjw77KNUFpQVmherAs6d4gp4HGTt9i7Q9WTnUj",
  "key26": "2HnYkcgtFSHgKeqAMVYyFJetjx6p5CUjzzw21L7bKFisLmDLNMfPb5VVbc4kAMjWiFFUNc7VvbJSy7Zf7EiTkPTd",
  "key27": "4fdMdMRFRyvk4V8VsXRUZZGVsbhfdqfg9XCZTEBgReKsDDjBH1csPerudRAkrpTksdfd3KoH4UZUL3rPB7qEcL9Z",
  "key28": "3kQzCoWtWTTqykAgXqpLpsFAvNMZrcTMKs9gfau5oBMWKtx8gX62XHPVfQK2fo9u2SLRwo8eMZqyhz2sci3fEpry",
  "key29": "3DDMDT65aQRtVo1t6urJNMwvKUMxHuQgmKa88sqsnunbEqkUxVCjFmEgsgrq1XzAqrmXBFgvT88arQCeNcZFNv3E",
  "key30": "oHESdEXKDBYDtRXf7uAiESqJCb2joUXNe5neSBpmQ4CPYWd5WbeJ74af11HpzdXU8mQnrhJNhzgFSBSVHjBjoZN",
  "key31": "5NEeBkpS5UTytCQVJoAprhxSAAYnjPFud3yUpo2Lh3owLwpjrgy4LQxAa8uCqFGeTds9njzKQ8gUnbtP8JchMquS"
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
