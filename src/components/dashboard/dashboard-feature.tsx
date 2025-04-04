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
    "22vSMz1CFon9QDXdX93Ar6YCMaZ4AFp9dLLjmkJPKM3JLsdJyJEppsjZ6A8KwQ4N4c6ZvUHsRnsdKsGpXLSqbeDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HE6VzcZBj3QpYeuihJRGiMY3W4G8BB7hFYAhcvVCBqXcwzAhc1cqUj67Nm8JVpAcPgjw5UyfkQkwwo2AW75oFxw",
  "key1": "4w3AevB7BVR9CuB4MdBS6cTgrp3KVoyTJEDxS21TsvVyRXL8YGqkqpc55JbFWR6S4dkDuqw78bs7A9ZscA1RurnT",
  "key2": "4AhKiR82PqZbqtJQ58nm6wnQygqQdzQRRVJjq2C6jHkK6ffycX17Y5hi48HeisXrm2z1nWyytMRRkMKgfNw856sX",
  "key3": "3wr4cimX5zmbchW72QujxWYyCiZQh9vuZAPXYz18Hd1co8hHxfeLMFAHf2Dd4DTLCUV3AXeFptmzsdwFxzaY8Awv",
  "key4": "3Pom3pwvUDXb6SoL3prVNvdFAePsbohrVPubK5Etc12as1XJk8vL9NHTSZH5CvYHgVhPUwVpXfCqedrLZpbmfjZE",
  "key5": "2qzLSBjvGnCKtuHdRai4Qkf8UwUuroTZo6V7qoVQZjFpV9rqGhZeYkz5GFxmqoaKYDcA35qsF8zDcJC3MCUGFT2U",
  "key6": "2PMmsRHD9yCtEvp3qDdf5EdEqvQ3Bu6h4bnoQ7c28cwk33MDmnnuRykH4fCERUtHwPvJryvetrj12i9VrNoRJ8GX",
  "key7": "XhRbj7aLEZMCfcM8a9i36GoY8iq7ran3K4hfN7S1RTs3cQ2HAuivT7NoqXfcaJVBVkiz2u6Jg2HyVyCtyARADWL",
  "key8": "5XiJTGqCY52PHWZ9pJcza4g1cfYwqcaBP8pm49WWHZgYYAJ7wHgdZHXEGeedqTTnSG3zE98UHhtXiKHSNqk5Jw3S",
  "key9": "PMCGTUjxm14LZTW73ejdgrLNj7fNB4bynu1a3V7z3MpwxvkmoaxhGNcEdrxKja4B43h7TvwxCDgCT6yZeh4CfFm",
  "key10": "2edkpnaARF4PS8PMg8zJd7pYhfuNrvvKcRmiBoEC85VrKAGvPi7RzM8J6aXgar4rvb84AKTRK2zTwgyuaThorCYU",
  "key11": "3zBCzcaMRJYpE9vy3LUiWva2densLEy6eotNbh4pwpvxSci7B7yvUaAkxq3Zi2AAZHN3sNzvhsNM6EoYenkxQWAa",
  "key12": "42tkUSMPNrkR7KADNWt1onihiAgrYP24LQVk5e67G5ajJXj2rAVYTVf3X6zforQQndnVax1MJT5y7JpR4sL7hgwE",
  "key13": "4t1ZWdgoGUPy7ox6pgeu8yDVe9GWy5wB5vekFgWrznu8PdpsGs2B2aZnvzG7LwFyG99cKg7VJytDikxRuGqAT61Q",
  "key14": "4roDrMUmtKqp9wMsYDyTQQFCfBwgTPooFCUJraoNYbPp9EHUXJSBLNGQA8ohLctQoyCNnPjq9DubmxU36f8Q5bSg",
  "key15": "4gsoPdV8Mr5cwBw2n3bfBDqmTMHnvRNkokn5ryXn64sN4z9QCCQtyaVsVFq5vtXHLbPaSLDRW5QM9iMrBjyZAJEq",
  "key16": "5A6PRQ8depSt98ytDtqwvvouXSTqAPkiGmJMP4Jv9FADoqhVq4Xmux9qxCb2f2U1Ufx8S5147TBEoujn3z5md6G4",
  "key17": "5BKzMi4yzan1AamytxEUVAUAR8Jcd6R1vhr8KF9HtmB6UqjifsKp9237NV2QsYb5btqfWijLB34qjJ98vT72MV7Z",
  "key18": "2oQ2GjRA7TjWZPsHArtHYBRLfbVW7i6zEN6rcDGurshHDGqfo9qiDsU7CiMahmmTTD5nmFndmZFBif55aAcbXnEG",
  "key19": "gPvzYRBfFq2c1Bq9nPxSSEC7ACY4ooPWRatUfbUBHC9PjjyubpeS9vNiVBYqHdhXcTPqsTkJRHEsYRfBgDeWg8v",
  "key20": "37JL2WpQgFfdbvET5oBCmMYEFHQR8vZFsUMpZqQKTmdriasUo4jArMsyMSxL7eLfXSAeUjZe7Bd1CevKrNUdZ3Ez",
  "key21": "62RMLeGrdQNfnSyVKgPwcufrLKNrEps9sHyVjV9DmoofxvidFVMHzWZ3vrwfVDjv9njzVm2wjRp8U3aMGu5U44R8",
  "key22": "5zeLdoXcR8qEk3t9k5kHAMcNb4mrm7N2Mo3ZoEfNtVHPovYyQMi5ofWkXLJqtZwqexWxooUydaRZtZV1Wkpx4brw",
  "key23": "2HNSRVfU7P1dS1u1cu9mtwHwwNb8WFSLBwLNPQvSkGnrAa8HbQJx6uLutXFkGa1pyk4Md7VcJjSrUuyqZ2RqnSpc",
  "key24": "3tktYsDo4yEjQE24MT8AVty9CorxAYYZoB7yjiGjzE7QTf9dfEqQ68XuxrSPreSQy4rZJFaJ2iJxgm8Ju42zt6jM",
  "key25": "2MiExa7NxMpgY95XD6hC17HhJnzgMqWvDpuci9Va37UMVNtaBkTnv6Rur2pu6FL5mugT3ECRxZ71Hw1n6JD7s9Nz",
  "key26": "2tnHnB4VHor9X8kmb718uF16TKdEBx1dAAnW825auKg33v6b3YAciRKgSfaHdVTq81KxqYncrxoJso4CNEqzEVwp",
  "key27": "5ysPu3jjfqt4qQFPSY7vUcpEGQneeZ35zF4Aa5nb1CUuk5Pq8XQjKpJ891JDYeoVG5NDoEE9TnMQVBD2tGeLXgvC"
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
