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
    "TwMSvPhUfDJDYva5FU5zXeKAtRCn9voF41B5dQEp9wgtacimTWkWUzptXjwq4JuqHUtPfHDDMJ7Q4AfriYhaQ4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFFwqZGrzGyabrr9FtE2jaCxFD3tTVJMjtFkxteUwRGFFebBJ1aZyMwpSsF6HMLDRCuQftT8eiUMZUETNWik5bp",
  "key1": "5ENGFDrtkZbJevg9hDh57DbZDVhYWUki11SdXrbLbPBvbNS8fXKDVHq1b87pSoTTTQ1KTHMxLDYCw17vow46SZZo",
  "key2": "5Wd3Ndb7rfUqtV9Jt3uFnsgSYxaDy8hGGygM4DqwbkLNRU1AyxHdayPu7nohv5Hw2nMe1YaNdgzxvWEt88uxRkvi",
  "key3": "vXwS4QktRmUy31KVcRccAoKbxXQwHkuS2BEZn5YoiGYASwbPczDEQkqTzEHgugkBKA5bexPUq6muf8Lu4P1cTLZ",
  "key4": "2jg9z5p1GXka7fqVYTPTXL8pfvi8DyFeQPHzm6qN1kwmZePECvubRgHtVzVxJ2By8GMuFLhcMeMW4PpMyNn2RoxD",
  "key5": "2RnaJUNdXHf1QUzEWzYYorij6P8JNKv8JZSnqwQLYpPuw28aixUV1VwYk9XJRvqJxGrDxGvyniCmheyWdtYvTqYR",
  "key6": "3Z9owV2T3rh3fpju5HYboKohST5ihFCJjA6fNgVU4CTJ8gKmdzt9hcfxJje89dsk44Bz38coc1LHhhKYtQ4CEBtv",
  "key7": "39KDHkGHXdJwUZpaESDvrYgrBhBGdGiU5kZNVEjKZF51yzvPrXN5hA4VBx4qgQWxh7yAcAeRjMRgqdDE9aW12k3",
  "key8": "bH141nPTry8UkyQ1PTENcxmEhWYHJ6nR8HD87zbdF7osEyyauhKAd37Gno3sUvHPaNYF5AjdM6jRhmCFknSDgdA",
  "key9": "2hX1CtH4G2n4qR6ynwKY6ytjhqSPW3Zz1LXuH7gYfGc4smFNW5Gtcjjf1ixzSex7LQGdrcyNVk9dCyMiS7eXVRR5",
  "key10": "4iXxWGeMRYGaouQjsTGCshBkuYRev3XRApnsCHzPLF7Kd8pwN6n4yu5aBQi9zLyrtBAhrye8yhkR9jghQxGtPSx6",
  "key11": "2JXexFYsunJs7pUiETnrE6E6c23g4aorMkfoASKuiN1eDBWqxGhNJDmD2dyAosx6xJuwXfEuvPxQ5pSviGErCf5P",
  "key12": "3iKBxcvkzV1bgDugbQaCDZA7ejiLNa4k4Nv1hjUNTb8hR9M8J86hEc21g8v4HfaLmAYG871q12z13fChjuqepawB",
  "key13": "41Ei8YhfR6gftuqYArgT8tPrN9vLTW6M2zycgYb8L17jSUjASDxKyjnoh4rcLmp9GtuV4qf4FHNd62mFyV665AwM",
  "key14": "aGay4WYJKfbgqjhYmHYmPUQT13bUSxjud9rB4zCpPXX7LyAhawhPptXYEgfvUV73iJhGF86AKyBSSVXzNHxebqs",
  "key15": "4UjGnL1W896JMVgUPNJG7Y4AkNh4fdPn197hfdrHMNUMtd2fC2uKhHd1MaXnqWtnykvSnKDcgofUS7w3S7hytW4e",
  "key16": "4jcHbYA6Hep1dA94CaGPotimrqvRku5fUnGQLbKEZVTDqtLXMbG65HeEmsxtrBuAqstWqk9RdxVR8QCFb1N5ac3V",
  "key17": "MLrHRu8TUuFiFi3neLJifLsRt6Ep52FKQN4j2rTSyauQYY5T1YR4H468VW2dVZG2CURFruTeSRZJ6jrLXKejiFw",
  "key18": "ewavqMTaUiEstXApmd3XE8pqfNraZDHkghmazaisTmmqFZfbrXNs5MU6CnxZk3nvYVTLJjei6nGQvqV5ZphufXj",
  "key19": "537iC43b3S6nByyFsJdcWSnEUeP8kwn7ME3n9bwj9uXdiC4qZ1f3RmjYU4GmNRZrKWAYfi9RTYt5UozLPv5ZCTMF",
  "key20": "3BbKfw4NxgV5NDYLz5bT43cvUMaSeDHKE1QTdey793z2jnQYwmwoY4o3UQjnHkDCHNUD5dcY8HE5tZftfagqqQZX",
  "key21": "3Pjn5iFfw9vTZmYex9Gwi6GPKuisuZrfkXk4riHL8cmy5eM5CJct4xpuhUd6hnkXcztYamB1En2pYdC6W5hoY2Ja",
  "key22": "2gfL9XzVzbzoybT8uq1QV289bFYQQ5BbKxNyQumXZFyb5hh9WvNocKYWNJHJdcPMy7mPsX6U2G8qJ2VqgfJwLShN",
  "key23": "2dENW8QAaBzY5BSUkxMWR3DHig4H1DaXJGNx7fPxvkYKEhDbtDJh9YL6s6WUU3AiM3Fif3sZN44JTT7TEuXSEzUX",
  "key24": "24WZRUxZx5ZGQF6NibxWJpATd2SwTnQLAkKUbndinyqJ5Zue46zHwzYHrQ9HGEnJWu3hnBtprRh4yg3oRnipy1QX",
  "key25": "37K8Voq6c9GnBpQBFYyxKR8e1eBVJbHnxcJysdjHAuNnEBa1UdpWuzUi7pNa7YEAr7FjZRzrC3TeJAK38ASS9wX3",
  "key26": "4ctqGFaTLKwrC28oyEev5dgbv7c8W6sao8eh1pCWUmm8D7V5ej62TrGx7JCVtXpeXkLiv5WaQkGdxnxa3DdYUZqq"
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
