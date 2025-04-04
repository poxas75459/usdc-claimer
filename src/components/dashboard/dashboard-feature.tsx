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
    "4ZpvWHpz2z3pL8Z858pnjacouHJxpVzZjD1B1NJ4YbDQ35JBNwwbdj5v4bWzX3mEYTfFicYSjPKGMAV5vRTiLUH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVU8gBb1u5dLWh3175CtYZFyQi1XqEPzwPGZ8TBNmG78L6yMU4b6ihVykVRt2KQx64Zbr5nyMZcExwkc8kC2iEW",
  "key1": "2CGRtbs8z1PPdYdXYYpfivEEuZVhPddjjv1szFCdYudp9uGxqGWmGSKHwL7giSVjkmeUmXTWXVLP93EvMauNXyxT",
  "key2": "4gDCvAQFYngzKvjNG7fNVsKAFbZCV5R8LAJm66UNwcEdFojfuKQiDTRETz4hqnuYRH5wjAXmFCmpmL9ydmfygGMc",
  "key3": "51dfavSNb4vYQTTV4vb52VRN4DQXNkqg4XkgLSuP3dSjaN3QQGZKi5oAKddwgUW2KzTzHiN75bRjM2S1vW4UgL9t",
  "key4": "2fayBKHEeF4haBHANSmLfekt6MHFshFHa9wqNmCaagK7cLKiqc11nudwgWefe78qnqXKfF8B7q7byrEizUq196Jd",
  "key5": "PJKTvFRJuE2htpxDex1eQSbnSN1ecTELHJq6mCvtboUh1FeBmgh3tLYFNp12mnjFzwj7Q5WWJ6yCDHpjAk3Y3WV",
  "key6": "4hXgTabPJRnDSbE4jSS8tAPGg2z1wbzSXtMoKssfM3b9NwcwzmbVb86QZ5b9WVhsUyRjHzzsCA23kFDP3HSGtsq3",
  "key7": "fNdkdjjKhp9ve1vsYXkLqkdgi1f16QMdRN1fRcK3jZqYc29dKXQaj1umdwYBtsCLH55ScZrPF4bnXptQj6JcHsY",
  "key8": "2RriA6KHLAq85qoWPGH39r5KWcWLUNNwib7FcoXP4L4txq7QCJHUCsaeGcornZFAUQSoGuDtghoymqA9aMiC1v4h",
  "key9": "34aV5wxCdjn4rhhTd8T2CdVCiudeHBskf27wbsZQsy56uSZ4hyundQvr1GScYK9d5sKHeGoNbjbPYJ3GpW8sMq5f",
  "key10": "2pZZ5Nng1mFjMSYsRgvJj73HFxYmnNnJaBYrujCowLmdUXDA9ogSph1N4EzKejLwvjjyswqzELbLBRscCAi6ii7W",
  "key11": "2ECFnDGNXkWZwKGyWFA6d3kAvPffrb3gg2zYXoECveTdSVdP7nqWgbr8nFD1JkYRiC4ZnYLD8pdomtYqgDj3y3fZ",
  "key12": "QRtJYB2nggUYwVx6WzX1cUh5F1dRDNN98Yfy93eCBXavDfT4MgtxmYeWesLBKbAhMDRQuHxYY29WYnTPniFv8id",
  "key13": "gbVFvpZwsXRxKwvdKSXyvSJiKmUWEqas8wgJuEyXniCaSGUH8HEiDfrhsciiz4ZNpkZuDwgatDZnXumtmqY3nPR",
  "key14": "2xLpCkdjagzTZGPe5kVx1w6qqbknnqcw5guCNihkDrvSD9eLTwQZpK9xX6WC9Y9Ub5VUZrRN2gaGmo6PnsEJhWfC",
  "key15": "ZN7aXC5RSvtqdZcevxk3baGSCNVJjYVapzqNudUj76XR4bLSSo5D9xajrBCu64rVVbR4saMJeVCFvuCvTL6rK5d",
  "key16": "i96HdtVPXat6afXL2PnbFwcG4RMftPXWHhzx5VJq5kWWuxuTubNLZzAALfZaEXMSD4udDGQhiZZ7qxxau4WBgu1",
  "key17": "3phAXZtFmdZBECYEueQvuBbtHrnaSRxdcVJdwmbfqN2jd2Ft8fjGSn9RLbv768zgbJgGjnmUQaDg6aUfsgHnXmWU",
  "key18": "39GYz6ximGUVdg6T52WvrEPFrHnMKH7v3u95btzCUKWU3Ly2baV1X63HGtAepDfvegR5334rbx1NsEgX6PA3JFNq",
  "key19": "4PBDpgRZCHFsSeEbQDacJb1TAEhQuh5G8aFP18Pfrqo6srTwRZ7c4sffmY9TvhC7PFbxVGxgegXNrNMJFDW2Af6g",
  "key20": "2TAFY3C5cr7zzrzHEMfzboeszUsMnhGjbDeozh3zbf8o1JPUbTqYAPfCq52vhBgxXZsHNb6JVQcmMHEPsSN8MYps",
  "key21": "35Ngjt8RM62H1RYfdNaQFSf2K3Qxp6fZKrAYEbYcYDNVUg2ybCqmofmStC3YZrFdkU47yUNZjgG5tJzdSWfUB1Ru",
  "key22": "4CXkHPNJSKrQyfGctd1GoiAAy5XRGNFpphbddrkzcioSbuXTsoeoXwKyFh19YimtpPB6NSdqGiktBKC7tZ4qKZ9u",
  "key23": "5ugzoRFycEMNcDfZMcXj1gNsuTMDvY7dvhzSB4zgtBnkErmSaWikUXKj81CSTjjbwnAkC6RipsAtj5UkxbYU9mpY",
  "key24": "yBtZhtbfbBq34gUXG3MJn9Pjq4FMNpCgqx4w9DHtX5o8RTF5DqXa4tzxe2aBUUBuXqLTvwRSjgNn688iaymzPkL",
  "key25": "pvMZ915P4u9HiNBDCNQNnAMEQS659eraWahwcKzdnqby6n76xgMHRkKLBZfopPqf1UmwN9j3VwneaBhoxMTTa3J",
  "key26": "42ggqbRosKE4kr4qXR2oJGp63cznfL5bFe96XbvuY2X3bcss5YKmH5jruatzkTscPJ9xNAsade5AUd3xGbbD8J9V",
  "key27": "36YsUShXT9TrFhFkJzARYiyueqzawGbjb7ZbHre9uTarnFqh1E4kJw1pQ3U7AQi2fs8s8fJaZp4jSSwy8T9aAwGq",
  "key28": "2GmxfM1UBfUFJk6UUYo8K8AknwULzk8b1gb2CsjqxDHh3khMX5k1QmwMp3HpvtvA2PqeCgDit9N6QkpHqQGsWMzY",
  "key29": "KDNNggYNvfXQMMZYjWJkjMzworH9zoy2QMHfa4gFSDQ1R3t276jforpfsHJswsUJw2q4ePAeWu8xYBUNNFH7WGH"
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
