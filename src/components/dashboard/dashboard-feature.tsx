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
    "58xpbBcEEZ6fAMTnjjHNFqm8GeGvpBJbsKCzSjE5QLZkt2y9f5acNnDwYXTkKyKxmXQeQmHmuJqEa8MNb6jo2JK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pm1SGjnfQt67qS6wSCcXr2j3ccwMkhsCDaK8hYGKu3AtyVf56sMKbeJFupuWGQyek8JtrMKQakTtCeo9j6wEiUq",
  "key1": "4BwgVQwXDmbqJjdNoWMmLvRZ81t77D2pG7CJuLiuFpqx6PFThRsvuUe4xZJoUf2tF3mdkCBS2HUJsdKpUB2JYVTB",
  "key2": "2vautjjnEwnu5ZYDdicpGDPtxKXyScMMXAauQXNWmAtSDeHw8hALFN82y8kGXqSe4SAjhzX4HN6x7XzyNnBSy27h",
  "key3": "5rPszCHZYhwBL7X8zjRouRwXnCZWkjRQGrQNkxZsr6XHPKb7FvQRYv1zW3pXFNnLc5D3pAreagrQoX969XSNYQd8",
  "key4": "5T4ywpDc1GQbVwYWkMQHMXXJVdKZ7LXTk9tonciPFo1LmucieQKeT96VE66uuZ3jrAiSYcD8HaN5KSg5XBKVWxjo",
  "key5": "3DSyNg49HMdS487ptoejtxr48Fe8urgLJopwZDmYWFbkAAWAvKZ9w3aZmQbWZZ9dkKbscbLp4z6Ytt8tumajKoMh",
  "key6": "5Y3xCs2netmooFaBw8Stn7a5WrfjpLfpcyDgS6moXtpoBiV4MXUz6vmZ9vce8UV9bCiXuT9ZJsy7ZCrxLedzjoL6",
  "key7": "5zzCu5s9AVrGoMxNV8PfXU4Wnkzii3oyp4hrBi9i2r6EEiCTXioQy7uyT72Whyjy9MXA76TMqMoaEBHtGfunMynW",
  "key8": "2G41LcyP1vBB5mP4zPuKPE6hzAz47ikT6R9r1SsvAUhySnC7PwA9NK5H65dvA9ztx1fMfprV4uyP492wdnqaXvXk",
  "key9": "M4MgJG4JpzZVjtJQ1RWJymSGbXjPsmoq6P2jq8XuSbo9t2H5Bku5sz6QAXr62M99EHHSdrN75U6Brn4TrWu8ymG",
  "key10": "5xZcwDEaJjQWoPPwe4x9raFmTekZ8yyHFdp6VYWBpF7EbKzyWZTtdXKAD1QpUy3BKLJPNXxMEDcdFhTrni3yx9pT",
  "key11": "5V5ZbqVSqXRzD5pAE1a2qGpSZ1uRGbcDnopisWDhtJV1eQE4C2Yhb76WdXrekHRpz6Hn7N7Tgey6rj5AKAWjDcJZ",
  "key12": "2Epjs5M1VMPsBZD5SEyeKu3KCyCw7QSA5ptvybaYkrfKJZkHJGpsHZ5zCpy1HUK9w7ttmMTjUmUzcMHZZvTch5h3",
  "key13": "TzfFf3TchKX3G8x9h4Hbruf37DibcqEAisFUNnbSuFQZiDre65efHLfjHTPHiDqBxcBcLpEH4YCUMcwoXmFeT3J",
  "key14": "49hC1n1DMgXjUUzCdKfJvYcZsm1ZtLjf57bmqNRax2kTBoftXty2sb5sRWVz89YUP2w1bokjnQgBXVLivRDbnPom",
  "key15": "4zssPxvmpyykKNGDhuZ7b2z5pq2AfdcT3KUGuiFFWGAGtapZY433U5Fz9Lb9avJp9eSwga7m8cs2kGLeNhrWbKfu",
  "key16": "2uJ4AaP9yZU9Hnk4VxJaWWoKsjuwT8BF8VjbAhZsL1akE8kcZYDuDGEKBtXA7xuQdUxeQ5iJHf5w2qakM2KJU7En",
  "key17": "rP8bdAAq1ncAxY2izVibumDE5PbBCGWDwQnogWdqKjG5Hhhts6EygunPcrcHFGHhs43WUuNftf8dxhDJgrMHxg2",
  "key18": "34rbVWFwa5J4JSeSoktVEr1iDvkNsVK265kAKYKEvJhrZbHYvZpDCjR7V4AgmkdeB116hSzLphPAAUgwyEu1PokP",
  "key19": "224wHwWGjUfjxM3YvjDYQHgEUwVth8rYtEj6pbRU7AWPz3qvywdSvJKEQ9JVsDGt6HjYhshECT8J2KLwGir5LUgS",
  "key20": "5nnvrJqh35JzPMb6vZNdB9amYkivsNoZguJWGHbsA83DsHoX66idEV1GTa2RcMG5RACLW6f7xfmDpAg18AqDUJr7",
  "key21": "2ofKtZXawBdbJowTKQ2dXoFFMRzoGLna57Km9x7vuKcR7TyjcScwDcaqDgz7ycJb7m5ZLpizzT3aHgruKqRQq4C3",
  "key22": "4aU2dN82bZ76q7PjrUmh74h3a2S56dd2b1KZeKV5ciFZZVYhb8ZiXHThevMKAwaex9yNPsP5juFBhSzmhjHjh2nC",
  "key23": "2TozVha6MSgspaCUdVzJftXdQAatygRsyqsmFQjBa3LJC5NjGcJAEFeMj4Yrrz9rxWWWL5jB9vm9SgdjD25WYfAz",
  "key24": "2DPuqgvq1G1xzgpmDs3ZxqsmxErX7FJjZoEHxQtVGRbKCoBmfK3gRfJY64bNdoazxmNXczqCk19ev2NvyDYnPtDL",
  "key25": "23ctAaXESQ39g7BL8Xvf8PrtAtiC9hA4NqCL5FjSiHwk4D91Dx3fntEmFcPuX4howtRqiWPyVkjYE3o4dVac8Rg1",
  "key26": "43h87HbvYKcg8HSeqqjFaC5pwBopJyen6HpYfciErc7G5m5tk4FfmqKNyAnuFoaMVStVFVyUVs1diRXDf6byBGoS",
  "key27": "5PX9CovPLaxrjEhn1fXFDXmaEf6rLUdPGdJdJSXXFv4J5Ur4VXNEuvW1mzYD6SAvnArFXdfhoNbFPjgn5CTXqbGV"
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
