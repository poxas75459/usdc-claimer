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
    "3iVQN9TXycimnApnMn6auEzzNb4wXn2RJXc9KLC85dwBw1zLjKqVnj8Lq15dYRBUbo96S6gRm9mSEsPid5g48igA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sf8WM2ZxvEkBJn4E3wSLdgVB7Qgs8J8qQQFx6X6os2pWxK86QXjWTRbuArCJMcd3MgSB3Jato1pnUMJyTfkavGs",
  "key1": "3psW3gdZe6sBgMyL1LsNAsT7Xzs562651Za34q4TZNSXUgtACBCjaNDFVe8iYnDXPXbaJHYNJjMLn7Wd6uKbFAMk",
  "key2": "5KweGrmMxFHNvNme6M2a5bj2pvMJj2MupLD1QopwCdLy2jUzpmpA1NPddoJxeJQauLifygMNS4dbVE9yyhL1Mhk2",
  "key3": "2gedhR9onKoBqEjFNY61Q8dCUMFJP9D5wiuLSiptwYhaWAKhn6rG2j3WFgpfVZY79uDFHqmVgY4MZTwfHAGUKDQP",
  "key4": "3Mgm8ebsFyVQG9trWhkcsKcHKTtGXFfQDrToLJgN76BweXMGEwKKj67xUP591bKPz2xSPDbRNdEkvnSzk6GqPZoW",
  "key5": "9eUoLQxfLBWetn2qnfsNabA4HXR3QvMXfRpaUd7pmwDADKK6WrVRVpHzaUpsazuwBu3SqpeCpaMbch84ZvPDLBz",
  "key6": "28JpG8iz9x368KEQZ8KnK73MUefEgE1QQMA2oLSccWvFvjT6JtAdAqkybsT3hc7wu8q8dyNVFzfZbMDVJpDgWDsE",
  "key7": "5hrTg2AGuU3rgq8G51snTRbo1YvsCL4R66b6bBSWfFP9etUSXQ3GjKrtm3ezzn6b6nBv2usNBwLQrjkMajZTBGpM",
  "key8": "2tzQWcLcGj221mH2Vhk2DUQRgahA8qtjLq74bfTRMXigbDc23DYBn5Vd8Ag81ezfM2AQT2H1n4wiSufe8zgBPuAf",
  "key9": "4XKqyCoyUPHW8uV5p2eoXyiDw91Rn5B7j38ZocxXcdLYT28tieT29biKBxmKZqjJGXLfuwzoN8jGv2Vhwkm8W7G9",
  "key10": "ZeiGQopZjMUXCC4pFNHoE58o1NtMqtHEB397u215KCsSzrhiw631wNxMdVt2fcdcgdsbWwAzGKRrbGbSuqfyCAq",
  "key11": "2fw49zxcyfGQ3Xm4SHm8WJTiDKw3UJ4iyonv4RAgLbMi4cJiG1RhjtPVrEXG1aAjqCmG3B8Nz9qYzYfmMfKZjFM",
  "key12": "2yVMEbawBjU9MRhBZaEj38XRCL97bGrDK2Yzw9RZzpwsFcib9JR8SYn3epYwymwcEnhk3an4ZZVjXqCA9nj4DqM8",
  "key13": "4ePwHxYwQmR8uyQdz4EaQYXPo7i1kNC9y1mtS2wq7aWLyTJsdCcoZcgGgBnFb1Gp9dcPt18AMpYLdGAAhX5RiNY6",
  "key14": "BR5TisFet3EGsMZDF92g2tSXbRyiRY1uDRUL5jX87r2e5XZm68gHb4PudNJag2YnnVS6cqPZqD78jbaZPkVgh6z",
  "key15": "Y28uZYoxeZ8r2orvXwEuTKwcFJxhmjTPuwnV4JUeRenaPZwKEVCZX8tZxuP6xPs1ByL8b79PRn4g26RC2aKrcEZ",
  "key16": "uTdbSpYsbUK79LqamUYAFpSjbV46RuUNveH7LZZdmT65xpAvf2dbeFw5ZcTnFTwRLNCuL49SGAs8jmznajCQXfB",
  "key17": "4AfTuPSGGMa4ARzVSogaEfXmKdpMfJ5Wbtg1ymrYXjPyrKCgSmD2RxHo7A8GENo68TzY6w4neYG4a7npwR19taVh",
  "key18": "feGD5i57LHDB6VuRyMAGNWfFAZngVnKwTHp4Wx9KAopvY7jVMXY4iqGKTSFDbF4d9RAXo6Kby9mMPftqgUTkwEX",
  "key19": "54EWqAoWTLSyCiWEASFA4L2tiDN4iNvhvWwnAc6WLdXaSwfK6wL8VYtJJVxLGjmyL1bUFQsT9kPwo8Zk97xK3i7o",
  "key20": "i27GAbCffmwmwwvTvbmZUWm1d6MXyKXLg74iTZmbP7PNRoi3dTfTwj3fehpahyns81bPtf8JaLmwHA5kNVz4S3q",
  "key21": "44EwwMt1e9qsfUc3hj5Rk6CchfrUEr7UrTT2amUe6NA12PFoFzyMCw3w2VvuYyqHoemP1Md3PymR3wAn2NinxR9e",
  "key22": "5bQB89nBweabfFKfXtRRCtVWd3dYrUgc8zUzrR39h5MkcJKwZTqZzKjFJehuYZnpc2AnjMLqQV6SEzffrDBhRqJw",
  "key23": "2pjgZinPvAj6t5PDzKtEcgV6VLxxWFo8r5Hbi4M59z8kvSnrrMRJX9xuZNBXqCNj9V9Cy2kTo91xRTfnfQSqxgBH",
  "key24": "2xSa2tj4nhgW9oKVkTgQ7yY7tavuewMoEqhfe6k77zJo7HUsWjMsMtehfEaSFybepD3kmeVFLFBVBczaY1diuARK",
  "key25": "ogdXSndaqogtyXGBmDSrsAD4jWPgSApcEXT11D4QfSispDhjAUWq12Nbh9JNmo3X1hx1nDMfp2X4iRM69MEG8Zr",
  "key26": "4eXG2T9xhCeN59pA4xS24skjDt9YCYTmqgy8Y8kTYYf6rWw8XEsYmdWSNqvhNdqfjy3XKqZ1nXkZMwnnnQc1Gw95",
  "key27": "4Xed2kA9hiHV2H2mEHXFpNSTrw4jQsqcAkd7dcEPESJaaL92vzCBV7ynSFBNnE8Wy8CxZFSX6RAPSHT68dXkHM3U",
  "key28": "558JJwZbkrpAD1N7LTjAASWwN7fPimpx79nG476D8kJJQohSH2dDjtusmbUFFFoU3GErT6ENPNFzYm7PeauayjUB"
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
