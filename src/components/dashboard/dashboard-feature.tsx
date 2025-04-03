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
    "5XRXhqk3HpCrAhfSqRD4P5cs2p87DKHCUqT7SBgTRvmF7NMpiGkf3LeNp16xskC9Kf13K75GpuFeLyAok3ebz8J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CLFgtDpt13DyJ4qW2RuH1KAAgFDp71gNpzHv9t87Tnz58k3SDqiofxQY5wVcARYgWtZGAGTMqjRMG4rGxAbcazt",
  "key1": "3TX99angPHVGP5ptHApCAwxok9iZnLEP3jLJupW8wZpcDNHnr1jY4spJRT9vJcB9vw4RJR6UMkh8DetkPjrAHmRY",
  "key2": "2xLBF7XTZ9kC5zCufsavj8Cyc6nAp3HqbjNBFuJYFa6BBomrdo6uRuh5f3dqah9phEQH4grurn1MBRZc6ozhqJcJ",
  "key3": "2WskW1uhigS8WFpb6SaMaP85KuzEoEMwe8rP11nixkRzNe1xhzp36rUzwUsZggGpfeVWQy2DQuL8cuvSicEVNa38",
  "key4": "3uGaWJUuYCFXc1JHZNDyEmQqLfeiHweD88zbt1xUBAdAtpbrG1r1Nb2xfb1YWWVYGN8BrpTmCjsxN4uT6DybpGz5",
  "key5": "kq3TF18kTGrowYpx7GJoi9ppQjsSaGVFEuSZwjmBVckjpPtUGx9TGHiQ9CcY5AU25x28N7DJkLB3nQWTe7eEX41",
  "key6": "2j8KCujuYcrusCFgRkqUErm21aDeMApK3yLJZ2cbjD7KZBYeM7EQeTwg5jeKW8oLpQckMYwKK8jTPS1ktJtGK9jt",
  "key7": "2pWyVgVgFkazmu4iJgfvb4X6DgaaXyDk14nLQwZw2SVWvsDCxnT6RdfC9uygYLbT1MJNWNatNqEiMeH1fHL4JisJ",
  "key8": "4iGRkbvMk9gMz8JKjq5vyrAyXWiKtNqQhvvisxqfaR3cU2YC4gA7FS3sXbfGrAooSWZnnbNjVG7umUbAKN2EVYaW",
  "key9": "5khArm1p7g1vHcBDv1NL6HURtYV3fj8aWpCsgWd7jvoeHLGdcECpRvqFQSUZg7cMNdtFk386APcNsG28Z2ycfXSC",
  "key10": "3p2jpaFTNYDY41TpbWxLQphLktK64v5UySy9Y9NqzMDTJouQsnwPzz3wjnpc1eTasD2kDegozBgaFekqLSXBRRa8",
  "key11": "5RWQPQv3bQbhmZ9QcfeeptupGHmZxfoqqPPXSg3dWA9rqtJcZUGSwZdmSS6uSKe1V3Mj5u6Hx6YqgMBkZLUFSnxh",
  "key12": "55oZqfYYfxYCMZut1GU6CaTQs9uSo3isngcra5Us8dMhpRXLr5AwLUR5AAp9rMat2pbjddANxLp3UJThJS9198h1",
  "key13": "2oZYvhYNZc9HSdS5YW4vXh2LRzkZKAYTgxa5CzYG48S3rtUCYvoiq4ips7iDJiFTQYhovXC1NDcngGKubcW8CGcL",
  "key14": "2mnz3tWzjpKoscz4TSkp9dMnqrJr4nX76rCHEL9cqXTeYhSYXxDBET8GT2MKgJRcVn5KRb5zDX6Rn7S9oCUtAaez",
  "key15": "5VD9JMgxk6TFV6m14DT9ZtYf5N78W9dTGZDLNM634A9Pw43sF9BtwRV6qtB9Mni2asdQbd7XxfAKnydAyJXYgA9B",
  "key16": "5K8QjUhG4jgQUYvyfXkrkiH3yvCAqwD2uZ717ZBQvyZ7bcHJiz2bxkDfP1u6RsX38MfMNJth5B9h8wn9hnEDaWE4",
  "key17": "3vwmcEbwP8PeP8SD6D42mSWAd2bDDkzuhZPAJETDA42ube6ADJxwVFayJjtfBrcFGqxkt8MdLxH8jKZjhqoLr71q",
  "key18": "h3Z8Yn3UEnDTW3eivBZgipYVQFjVFtnuktXgcvkt8E1xwXHgs3yfKGwdy14DudtvJEwnhwf2q7x2fPa1ryVWGqw",
  "key19": "4VrhaiUGkyN2ezCm1dnDQLiZGquUzZurA6tafmKBiF6raXhCFuNkiAnG7oVWPpVyeAhmErQPm237CwzoDqpLSC8L",
  "key20": "5nqRjAXsKtVmhbuWmBgx9xuK7my9aMnXScWmXsPMtpqZ8XqX5zxNYJPe1fN3ap2Xoty41swbfP6uzo8wjpoYM1E3",
  "key21": "cAVk7tjNrR6MjxYVHTwdgDFoysuDa44EPyCyMU13P1ZtgasrL3U5v9R3i4ntrdG5UbPiJdQXLMU3FCe6bRJ5rfv",
  "key22": "2TEHLhuS1cs8xqnkW4q3qxNHonbTqbdeRtrYiyPQ5XHSHZPjP9YGwNpYE1FmngDqtxU84THuhsenRNsBwgtD2aFu",
  "key23": "5VtPATnZTDDZJfRAPxJcm9p9sNHLczbNJWE8hSXShdGprQoHFQyazqdrARNaH9nh69DFvQbxP26LVgDxcsAD7iCf",
  "key24": "2ZJTT7xk6QUWzqNNT3pQH8zHLj4Su4edBWL9GaY5tz3tGN6JAVkkTW4DbLe6wC7X5YEtYd6xQowLbiRQSbSKb71s",
  "key25": "2T38vNuihoyBWrA9uC4SUovuyvVzf8CQYNzAS1neuSZy2vfczZbwwqBUVjnYycrWdWNvcxZ1rocZQ3ydtSDjLJK4"
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
