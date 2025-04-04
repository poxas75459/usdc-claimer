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
    "4Ubt5qRQPKxSp77G7Km6md26sNFSkdzGngUhE6FRXc1G6ahNniFyK1BvQxwqgHgNcJzScjPoWgZLD2fuvSPE4rHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5ghwex3E4EnAhBnFctRo32jzUk6uydGHj4ppBpKvrFEaA4conMPwx3F5WQqCXd339wTHxvvBYEgBbka1D2ZVPd",
  "key1": "88CdDYA7DggbtpNkWJH5XEsWCcoAwsrprFc5GuaFCkdBz52xrjWw2Rz3gMYNa5ZGYY5EbPeQxsm7R88TyQsQa15",
  "key2": "2nrUfnkgM2JXgcBvYmb8xXmSHXtYtUfzB8axzMsVxYqVUHX1yrZemVs5wHCGurPhbTDstGGevKuSrXXerTXCMHyh",
  "key3": "29jdZTC14AN6aNU2WG5bSQQhm1NP32NfoSAqk1qDCGu3qgqnVgJMcxoqJi6SW4zMTkoRkC5GvyJif5S5v8ducbEe",
  "key4": "35isUBGQ1Bky7HNN2rS69yVvVo2RgRPuyD8tJ1n1yuRTq96tCkC5BDrApmwsJQkz54LdGothzmpZVDgUiWz7mJ4u",
  "key5": "2SA978koCUdFt8Wmq2sxM5eZuSfnwwSKuy8C2rxfDdWGrvnsdscpKGnbpPFzVWJcdZZ2DziQ3kHfxUiuArKiXUkv",
  "key6": "3fLZjoRs2GoCPvVP6dT2qTBLKSSFW9DqtwmxNNxAQpmYThsYB4weZPifQdupoiTmogFVVCuRPxiY29Fg1b1oBEQs",
  "key7": "4pUgrcKP4iFYSqMbemFpob6gYbHuv8V1ZvMEQDAbHjQUvyksbzA6MmDL43nYEanyjj7Q7GsPyfQyTLx9e3EkQGnV",
  "key8": "4dXw3EdYhcse1cbnz8vc22h8t2Fc6JicxNMW1NdJg94W3qqX4aBReCrnAQwSQAApvwEHeuzqVhCgfqaNjuhtzirZ",
  "key9": "5Am5PJnjoDP4k3JQjyMCmv8CEaBbFdDYBGDTmLRTmU37jq3psi5GWUJoYncP6Z6K5tm2mx3Tbk73Ffm1GjxaXg6g",
  "key10": "3JDgN3ZobYSgFJCzziwRqHi5oConyUu2jzVJtKxFEagmhXi5yiKET1uuiVyW1UkkxUMztBjGBRYidrc6K94J2Fu7",
  "key11": "QKMyFDF5v7mUKs7ytxTxaAsV4yZEhwKVKWVCm35c1w1antFBMEU4jZEDrAmDu9PYfzoLy64MWVnhyH9CRGjMXEA",
  "key12": "H7JxwrkAiRbTcardasJFjtvFSmPNtQ25PWsF9Ko3QkAm1mAjWKadW158mYcLEArGbRGXxhWKnYYKs4Dv2znL9U6",
  "key13": "2xQ5BzDQFsSHYfNbVLuyg3E7vtfsPHdzU1H92em1R934y6fJp9H6p154jFzKE4mbGygBbdNgpEVS5pk18ry5eUcR",
  "key14": "ntxUF2xG8TenVtaKetjEqC1PtwsbQT2z6txQ6eBo7STzbbpC2EHyJhZcHQy27BhPNBUUnmsxHitYnHYMPdnnZE3",
  "key15": "46xqy1HowrhZto82U41UtyU2YAJe53vU7sou7gsiXkz1pyssCaQhRabFdXJFYopTKoNCWD1tfBwLyq6Q4vBQ9A9Z",
  "key16": "3mmxZ7rV9VULtfWDNWepxDpsvsmgCz1hXj5VRDzLkKLBaDUzV2igmx6hL6ycZs2ioZonc4EeKEMxsWCpdaDUgZ3Y",
  "key17": "ANLjdBWygUZSXpt9M4KfEPiLKJLwKDN3jZDUYEJxw2sjerkuwqYa77NoLAMRfQHipcMs797vE6dxuPxDN71Eu7Q",
  "key18": "5Dxnws2uMUGpkz3AfyCtgu7UGCy6GtQUtwkTnhDh1xAz7q2zH16YJUrxCARDgbKEKkz54EeRRnGPF6EMqTqfQyZx",
  "key19": "5ENipDBWQfkZWpyVqzwyebP9jBjJCaeSPJm8eEmXt2z2XN8pVMMtHZueF1CRDuQfhVuAQ27wcKWMkUbyVk1SHfii",
  "key20": "3FySL5Mn15VVzezJ3gD8Zn5JXkxvbDU5haVkRf977Z1GcbhrUn4FZ81jW8cWb2GerzULZyEv11MYYbnh6itMbYZH",
  "key21": "YvGWYXD5Y293DU9yNGaqT3mb6J3GJfwEHWU175GFT9J7f3K8QLvpCFPHayJquUhF3PhSc5xst25rK3nBobLoGQ8",
  "key22": "z78ecGdNMh1yWkqf1d9jvzhecnWxkkD7vkaaccFkiXEMkXpHjP3Z1ho4XEo2vXXtRbp62Na4tKsJzxiJ6bBy7pA",
  "key23": "62iZYTMx946P5J23FAT5dQFqFtffo9q1ViX6n31ouZ8t6QKRKk1Xg3WwetK7wXEqBuR7o3hF82yBYmooJuewwaSc",
  "key24": "3hBBPEj9HijGZ7SwRennonzXyQyqQddWRLTNq5FAETUTbpE3SSfMD7msCy6VVutZ7GC1HcRXAeEtJarZcd5sfHyE",
  "key25": "2MN831mzkhFSXVdPjKLmZCkoTYFYNg33i6yy6Uwhbo4xsYnUTtSgxuSHoVnBX7vqPTL7PbzuZJshJxZgN1emn9Jb"
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
