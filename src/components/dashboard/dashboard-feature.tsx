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
    "TFF5PZpfECfaMfEQJSyGQ6vyF6Wo6yV5byD181FYZE7WAT7b6cuzC1aPkRxidF9tBHJxUybscRCpfNJbnQ8XfzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67N1mhQBFHPHndANtNDSu1n4jKZRuJqJEg5BPWYioz2QcDJThwsJM6JScNaCE5xU9uRYM9TmY2iLucB26mT3oeTZ",
  "key1": "5nUVJaUHTGxESuVTXk7fCRC6a3aKNtGbThbCEZpV9nkBTZZghVWV6Mw8yYeqDg3VZ262erVo4zhEL8nnXZYAgPs4",
  "key2": "5YpfAawfQvKSNP8fwUDZ1m9BsRSEzULiC2yA2tcFaUVkxeK5hJy86KD3xzMakTUwPiDSqVx8veWLHs2zff7BUECC",
  "key3": "4Wgpb9WVwX3Yoj4RAeRtwYcAjbBVrfyzjH3UY9mwN2j4ZsCRznMebckFCdCmqCqCoKXST1c4RjP9qr4bQKGvb5B8",
  "key4": "2hJ9D8RXG7mEZ7Run6ZMvKADDiFdHgAyoairAp5XsZ78LG8ZZn5KMur9NQ8PdoBwiAA1U7h8Meq1xpu2diWbq4JQ",
  "key5": "5F84eTvCDs8KD9Qypmrdi2R3S51iUutR56Ajo6XwvSd4EiMMPCqcrKcdUAyL79hysxkwaP2ex9jvzm9ZdBqV2UoC",
  "key6": "CPkcKnCaWGTVx9HJZKRw3T1Kgh1ufeZZtUpjNCtENHbW5Hogdpn1aBAiBXDVeZJPf1Cq5uLJtYPLNwNh7CvJAYg",
  "key7": "5GDoLmjBMERE6MTMVsUKae1t5h9V1VkKiu9J2cQ23y65xFpduNhKVw6BbdXbG26qgVmifRFct91SRbTbWEtmcC1f",
  "key8": "YJ8Rs53TPxuqVyAF543pRTURE21d6Wcdh1dRJHhdAHa6dZaJXr3B6e4q4ToWLQueRx2GCqzw8fZovoc1MRABMrg",
  "key9": "5knjtfLGtXo3yxpqtxdFJxQ6AYTMWX3x6XeHKY2zZfHEiGdWRd9aaHHv8ydt68r1qzmkCiqHc3gZfgGHuF8c4p4u",
  "key10": "5NrD8Qh7X41eZ6pzmaYr9CfA7iNvdFQK9XCE3ZJGX7o52gaoDhY29N57EnLkEewqiytL9qZ6zYpYraxWwwZymPEG",
  "key11": "3CmGwAPjjWQEK3djtVvNdeduajGwALZ86mNN7aKfX3SR2xn4AwvMJPdgJqm5c6HGBSqeLCq6sT7QpWnXRPjqqDSN",
  "key12": "2MR8NrNT6qeGR5kQjpZJ7eVhYWqDHfo8pCYgiobt7RmKF3UYFkfPkjbk34UMDwXzW3s3rWEzW1G5vdLNhdm85Z8C",
  "key13": "2uRbGMZWb5Fc8qxNX76zjYeZHCuzYtAiK7nhZWtXseMZTg62fZrpBu3UxQt4YCdwsb3bMcvQa9y7jBgjyxEmTKWg",
  "key14": "5YLGhtZr1FZJ9ysdu6cGu4S2PLYbHntw98xduBjPLKCa6af7hgoosfDxuV5m2bxfkw4BTJH9xXKmyK92iqs1N1FM",
  "key15": "4QgjQcDWpogXLPtKHVYpCDCsXxfFzN8S2BchH5BfqTip4AC18vmaxsUEuESYpc929mcP6J8nKaH3TjkAZjGoinZ4",
  "key16": "ATC8W7pJbkgG2CPnu46qBSWZZaQy92N6fdWFHczBkjEa5edEJdkyjWzr8Snq3sN5sk2cKccTnwEeRnmA2mYkc1J",
  "key17": "3MMEuCAfVa4JW2pXq8Q8BgvcC2Qj2AgVJFfu42cmHUDDNgcf4gm2ChaM8ZsXrtRxMYemJ4yy8SZPkRC8BYLKBxLj",
  "key18": "5AGfYtshKUKWsHGmGXud7e8EDaXa4Zt47F5iMwYGp97r1gSenqmuZV1WjKcoZLLVpqu1GY8KMC27SCPaptNgAbbS",
  "key19": "4pZDphcwsmPFzCc5aRwAfxRvgotQt4mMfMK1eAujd727WRRDhtXsYSfZdXrN7FEudN2LXiX2BWGsjbvcSvN9okDp",
  "key20": "sejy5EuvcLS9vpdjoN7dMzpLoVHTW33hRddJdG59A5LGZwzqNZ5juPkGW4vWvNVvPiiis5kgoD3rFBV31pw9LHi",
  "key21": "5d4DLJwWY152nhtvye3KKmNdVuGuLMFibMgLUb6T5deme6YSf8BgFXPTpmLKkSL4PZMqcxZ84cbozHaFioz9h2Yu",
  "key22": "2eB8wTCjtxCqRZYmhDqduSRUjU2MpoFeUkYJJJbKiCq8N2ZpE3e6YkLrdCiwFGPvuf2kTJu6Z89JYakhv333Xo6f",
  "key23": "4u34Wso2t7y4hG7iee4JQSFZnWyYbP6pN3GHt2xYBhh9Mm2LgFiTMU1u5NLWY5o95wqJ7Yuy4tazgGcSYw1h9Z3x",
  "key24": "57VcwHkoDX1qGnQ475Tpfr4YbZoZNFwUNVvBDyd7swDqC9nzswdYRSyfGZfFLtZvRUfXvUkaft1duGqt77uriHiU",
  "key25": "3HqR8aA6aT2SvQaAEtMGYvx5iWE8NTBoBz7uQpkZckpV4VPUZN4A7mHqdxyzNNgrwfAK1v7BQSkCdNsA4ubbGRR1",
  "key26": "3fh2mJKxARsV9iSY4muu3KRk7F8g5Y7RhfwhiTVWrDE6RdWrCq1mNQVQo3Et4KN47yHHWKhgNeGeHAj37hK6N7xb",
  "key27": "49TsFM9fx86rLZGWSVtVvBuBw9fYRMBbz2CWoSnvc5wk7kdPSXbtkbRYUYX44vu6LN8fu3yWEz7jccGKGA9RCoRN"
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
