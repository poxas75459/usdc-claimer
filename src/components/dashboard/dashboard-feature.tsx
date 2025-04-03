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
    "Xw8SdDmVsMz4hL7QguCD1n2bTXnZaKiXGuH5CEp3viX1sM2iGnCWeDtEQ8mQbEGtg7fAeb48AgCViTeGNN6sV5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzjGb2wk3CUJf62d8p5Y8tfPJ7eE3UmciH9xffN77s8hWjuS25aoBEixtkYFmpfNNoN186A12Ld3Voiw7hsXMhN",
  "key1": "5wSagtCUEDJgb3jMJZbstUXzTh6RqXPUxqizBievdUbcJ7UAE8yJT3DkHwN85K6vL25bqV2WwtkKLWXddNLy6KkX",
  "key2": "PRdL2XY4C3timCKBqZQH2VY8EytoSBpB6FmUkkmNWCLihnYhLojrQoBDsyed7waAXZY7MXsvDQbZsTxMCgUvsTy",
  "key3": "3JdTDrT7Ujdoxiau8HAhZw4x9h1zLacGJyDZq2YErqMDdazzvgDtrGXNLcoC8ww59YkiL6JmcMK8ewbo4c8s4QnM",
  "key4": "4UyaW7DXAQ8baw9bkhsWvHhkAHrojK4NPBrJ9REPNsto2FQut8mNT84oLCyTsw8UYosMYQnCEEeG63HFoNW1MSXY",
  "key5": "UmuquetfSxCpUMjs2jaXCpY5scQTSkRzBaZFqF8aXPYKZYknRFwCtyqLY98HxV8DYWHg2bhq4MNYkU6Z4AASs6u",
  "key6": "2yCxDH6fHRmp77rKKQ2vu3Eu14dh1rgQ4sUbYrHVcjXpdVfUhvswSbDhvk6kXC9aRcrQEV3z7of94BHviZV3Y84r",
  "key7": "5ZQrH9NWAKscdTEz7vqMJ8GSPZzhsPe9xhEn1CcTmvokA9uvjRmVDgm7815diQSqFoCjQ8HJTnfEgcHKgsMwgUag",
  "key8": "nhLbzqb9L7TG8RPnXRFaYiqp99rvSvYFBucN1qDHVJ3y3zw5kh241MkcKSg7MEhwc3SMoEo3m453acndzJV82fR",
  "key9": "482UyEoEjERbCE2mK1wKXxcrf1WhqrDMxqMTp6K7c7kjiXj2q7NfSU4vok7rSLWtbuScEX28AFATYn6w6gSoqLka",
  "key10": "2QH3zuVEaaRRt66azXCasrTswVPgYL7DhZpus53oewKkSCBNJCE5Lf32NHUByNDD7kbgQQC5512ze6aTcGVUehgy",
  "key11": "5ReVPYwBwF4qLurot8bvq9DBtoDJDPWeKHZdvEsZi8AwfDgqRW2n4GX46vPMoezzLG1QbYBYQ59kaPob8FGoLgba",
  "key12": "4DQ1Z7UDQJDFC6jTz6ySe5nRwwYxhpVn4rAwe9MzUdNsBkdiUaugSbqxz3vGfHT15CBZC6oTpkgxTaf96bbxfjYp",
  "key13": "5zNsJvQ1qZNpoZ13pqTArpegW8PeheHEwCvu3XaJdFA85zMT6JNBP85eVuEb25Adb8FkynZ2Tu8GHsAPetZujdFo",
  "key14": "63JSke7XmNvBnabb1Thf7ERsf6HUhktzHydkU3BDBFv3GUF3UdnAUaMQ9etRZ5NDKyf9NxJA9gtEkU8uAhBcqbEM",
  "key15": "qiyghc2qRR2CtDbNUufN9CdrfF7NwmghC6s39q1n9RSHivbbSGo6TDfeox1dTbBFtdJ225exUwLF8tgxZLgk4Fd",
  "key16": "4f4oXMeRm9mHjWgnCVmtvthUJBQLMXS3pWT323HWQQi3BcAzXTRDBYz2BrzUF13QRybQLHE75HTqSQfLXyrVPyxP",
  "key17": "2R8xLFeMZJbUgceoE6eYmXTraqtAYhyaZLb9dvkQZ4fFuYziXfLLZ11aBvYB8BaUUsHv81kvvNYJamqAisRUaqd3",
  "key18": "35TPGDxUEw3JWomuaM8JRqVF5K546LK3o2J7AVNtHuDEdkqJdHzQvPcDwBhKjcbMKNnSuddnWYPrvrQX18vZwpns",
  "key19": "56SfyYAGJzaQP4AcryagKVHQUjCeUZrAnEsRbBfwLXnUu5Xt7wAHD5q7NyovfCf9JopBM7MPJoJXsY1M4KPkCc7o",
  "key20": "4NQwKvcZpNaoEQUZMEzgVKpnda1huLpg3ySwJSr7GMT6nVgmNeEKY2sVHy7qZVsgNp1QQTBmLqkvURfsZojEbSgT",
  "key21": "2Ly28LY8BoHXXxqzhJGrDXKfeTNJDPjwAfKYvQ5EaBw5eTF88oLRag68eh64V1LJuJQSeK6Tu5fzKh5G2d6Ze9DD",
  "key22": "2bMB1SHygLswdFmyPpk3Mgn98zYAM7cJoZHAsD7nhFV9KqMB2EjP6zWh5KGrpV9k9BAmCweMpWjSdoxoZ8NHvvDk",
  "key23": "4NSTJyYWcB2QpHdtvThQag7ArCEcTqYxp4fngn8Gs6XxJZ6pwygvGPxhdADdMwSFez2ZpSf3Wkh5WsvjbbuWtqcZ",
  "key24": "5YT7oZJksMkLAJd4xchQYRKNvGtZQs1GciG5F2mUQ359v796NDGV2NNAN75HfGqCbdpu3GtLZDmjjTZmTPW5em6E",
  "key25": "5hqbYTNPyFfCBtNxBddE2e2y4eAjF5soyDR5nUqs7Ui2akn5T67tzq6WzbDgzhgGscvA5B1kM6LhjaRFhdBshTnT"
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
