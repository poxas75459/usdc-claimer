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
    "372tamUTw6t4e4gTLVVBe7wzoZXQn5PHUdjY6TvNNPjiEMrtBcdZAA8LV2Nv3qYewXBfC54j8cvtYkLMAWThjXax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7LLKuWs22DYFu6F4NEeE7oQwLjWda5sUkdnbroXdC7M4BEV3WT6Conq2PzcmYD6qHVo2UMmZHwUoLNShzduckZ",
  "key1": "RYCrwv2kmJtAQPVNwh3aq1o2yH2FWkbU6aWdfxQzzupQHWd8kLJ8x4ZLfSzyn9nVNTcTcHvbUrUGvxofQiLoTcV",
  "key2": "3H1QaLstKBaTsWYHxwv5oFtD1yTqSb8istmmQEzCYxA5Fv2GGPkLSDdBrxKafx92TVT4TV2x2xBnNE6qWY8DAc9",
  "key3": "2rpVUpah6qjZ7Fokxo3mPyMmcrUs3ShADmj2EGsE4xbwFGYTCGUSi1gyTnFujC4qcYkVutiiq88QR5qtQf4FNkSw",
  "key4": "4oQbcsH7koMUpPsi4QBJmsbmLE3P2FZ5mpGhBrNkQPAVAG363nTsKUNvxzQFaMfhss5nCVAXvnDzVUv1s7g6Q1uT",
  "key5": "EWzwx9qxEqdKLEMn8thzQq5i1m32GRPNNfNbaHc584bDrJnnNb2N9ZoBc4pVgAqjxcG2mbNABZfjjN9Erae8ynv",
  "key6": "2ygXAEkS3kkDnYzYUxi7oY4h3rVgq3npoZfVzF7cbZddpqcWo239PWSXx788DWs6sDTwtxJNjcjn4tu2HX35iCKJ",
  "key7": "Esr82RgQb7bdmLa7y4r9gfBsdrt5cmiEAbra9Ps5uQwX98ck61SM8XrSjH1V65qSJagyVbzip27tzwRUTddJhts",
  "key8": "22KLVCeXfjBGUKqwjy8e4yBgBZ5MKLTxsT5guv5zacCst7HkRwA3sZnXuE8pEUzvzqYCzWwWtMif5P7zFLjdiE3W",
  "key9": "4onvYBE7MNmZbzMi7PdfkdiWFu2B6wNCNqWnxHV7WaRzwefvZ9WMqzXSdn759ZS4FuBR6EsHhJmjEZRtuidUFpuN",
  "key10": "QeKzLEMg6nydmZBWhdjvsA5E7Sxx4WZnzPLvN5M81kQnUEA4Kp5C9QXwg2XvmC7LWdeXzffkYUvqGPjKtoLPMbq",
  "key11": "28PP5SvAFdrJ71ntGX18mkT32gGKtzYmd2g1CHhfFQDFaTCFLZXMegVLV9oSX1gCEuEikX1XWqt2VQBqiAmUdYuM",
  "key12": "3ybo3iNhZxywnVCmRxPrAJ3UgnWDEtrtQ1UyZWvoLjA3aLqLip2YA4LLfUoGYd6qEcBx84s3pRPAjaYbpwmPYeie",
  "key13": "4Mrm6MajCAgDC6hJ6WW4v8TkqYSpvReZqTCsdop9qaps7SAw7XM9HmTJWiaiMNXJiYJoj8dU1DF1Hrxf6Rn9drtH",
  "key14": "3xUd4pfcYk7Lcui91sDGXnPcmDcJrM5sUou3UQ3LKt33qcnQ4c5EPxqVdTFk1AMe2u5TLB8kzRbzNeRexzAYiqqb",
  "key15": "q5ddgTRZutgdpAtvugA4jXcXaj7EWeiAStQjMrFAHUQjwx6xRDrQTMoRkJ6JH6L6hZtDJNPvf5qtMQqvmM3J7dN",
  "key16": "62dkpzHNa6p33xCHUZqk6731VFdF32VyaULGqHnCVb3LNreJejsszodqcp5cgviTBZXzAUcXofjRA8p8KLT7kLUX",
  "key17": "wzB1fTUSidFNJ8PYSRresP9mwfZebUThPC4BAxAuGpPyQA7FjJupMaPRoL776FqsvGiZ71WEq7V96ppmhXgHv1e",
  "key18": "vwwaM4qtsQLk1p1JdCeDotfxkzzdz5XRVYbixeKN77bv5pcVEmX5Sx6FdrcQy68UJEco7QYTvvM2218aV2g57g3",
  "key19": "25QtJs5PDF8QHzU87W8HnGppbDSNMMYt5GB3egqKV8nPmENBb4w9xXK7qcWPmzFc4VYYRJs1vffxiHFqQcfhUwkh",
  "key20": "66zPxoS8kvCC4qTV3eqAF3Vx4NHNmWgGQMGQvvZuUmGQ63A4rgBYxtKFNvcG4YKwfBw45hz1A4PYch7wF5YcoGcv",
  "key21": "5g2WSCXcnigJVWdypQBiqM7PaiFrwRhtDxHXo57166vagYEZXkrJnuXtQHTRznekZJhbKkfvUjULffHNBGJv8Yhd",
  "key22": "5LGXTtqe1bDtfM93xPjBjEWaQGApMH2ta4Cruc3ZaEzssYcAW2pJn3rg7tmsKisAX16u4bzsjYmFBoyDNjhPsew2",
  "key23": "XRCN9xvMaumDdKBRiruFjy4uDDfDX8rbk1y7dPRQY144Y5yHFq6RLUizU6s62auGNVnv3BPV6nk2cnhd62BnkP6",
  "key24": "5usM946oyMBPtnkwJmRbiEEwc6GhCVvLuAoKJYJvP45BK6G4sKq7DzaKYGR2mPhK783WSt1gW58B5GCrzYpUdD9T",
  "key25": "55gqVskZSnHFZokb5udAPnSnz1usopc3sv42kf5h2EnPS1HrKfMKLBH4A3naHP7Z93jHdMmmkT64gc7DJLrKE57W",
  "key26": "4JYxupdzmVM6xncmP6Ptu5zfSJpmHWEWzthNcwNC9VCceerzrTv7Q6VevmHezsVLywZLvE92cdwuEbBCQbQ1PRgr",
  "key27": "5Lo28DFeESd9JtoKrhpQPPfue7XpsPx2rULXyTPGTKf11V5ayU2eQ82oLYzmZgTCBsx3mLnGYUmRmdYoSakTGMHM",
  "key28": "4Ngrmfa6znFK25eK9x1n3voruvfBWwwA2S8vL6XNQ43yTkCiM6JBPRJjtcq4vRvny94U9Mzv6jXdZEMM71PCJrnu",
  "key29": "2MJkdf2NFmeNLSkbRqwFppJCa9usvC1szRiqmFp1Y1gP4qer1HDKcPy1sSDYPRGgo1PDtKBcWEbTJqYYMjU2ycaC"
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
