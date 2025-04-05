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
    "2hzVVeWjhoEqTwGMVuJnEZ7qftvWg2PMFqnFYaV2twSC2aomtzX7zpN2pWjKUk4ScvE7wJEm4fcQ2zbDmmB26Ssm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38q64LKfm1LsnTT9tbnFw3u6gGUU7DeLP3PRsGun4DMmSNd9c9tCb25kitecX4Di4hLM8HRwHu9kYLeHjr8jFVtz",
  "key1": "2uP6vKC7BByq6zPtwUGd3hxkcRUwTZyoMoQ8peaMyZ8VUug79ZwfTqeoaUEoRNwpXwW2wN3vEaFrYer5thQNDuFN",
  "key2": "59EHpscsaoU9njiWzp21XyVAG8aULhmuJfhAujuSg1SJUypCGaCADmaXecXgXKd7GkKSaiWhhUxh8hR9wvkbPt7d",
  "key3": "4VX2HUfe6HwSn1aeMwHbKEoWfmkFnMkff9AWd7iFRtLvZHdJANozcC725iPATL3Kd9ngLReXoQSA9agTEFcP5ff9",
  "key4": "5HxQxy3VL8K2CuGUwDJKvTXzQbjicXrWJM13F1H9izFmZgM21GWYrN6TZpjezyEgBiXDjtBGwiCCfPuLtzNbJe6n",
  "key5": "42oAdx8mFr4A7YS7XUoAJ4h3be9xCcep4XzFAGm76zozYYoRXENEKLrCKPxFwiRdMBiKSapBAxLBHMiEonncSrgY",
  "key6": "4Wf6Knb7uacVGC6MkpCTzAJnUSSLoQXNmrP6oAA7YdzwBP1aDmtc84R6Rq2R26G4GoqFD94XR5MiNZQy8hUS7ooL",
  "key7": "Ef96yLE4f92vBvP53JoRR4pNSzKYeXYpJz4wSzBhRFG4xZhrqZSegTRmXbPf6C8cTMT6fBfNPWFm2c9LoB5A1mN",
  "key8": "53MG3WawW9RHBCDW5AyviN4FdsUHwtBzzyF45Aerjox5sLecAwkakPdzotxGU4uUJsytiTAs4XXx3eDDtyxHzTbA",
  "key9": "2oLUsmVW31wmqeZrM2mgQ7JoQmYwtXqnikCEtUbY5mLVSwWLeTH4ZNAzSEmKeGf9JZh8dEWRJNLHNfZt7WbRiaDS",
  "key10": "SzLLA1Lq7qAyChUagqgeBMX59zNzBadtJUdAKVXsyzN2GFdomdVJZxE9hUdnkStKkPEBepHNdgRfHj21qErNa43",
  "key11": "5uhYk32tkaqeE8dLX21cnhHWksgPSkDgTKa28Gcyg64VfD7vAc8swcY26j2F5VE4KP7eM5eWJtLNDaMQ8yE7u3JW",
  "key12": "32GBBViRetsm7WK3aDaovQwtzwhQUoaaSxxs2iVDRzAFsevtS1pThNBYJa7VBEizBxFZpRYkh1LXFdNsk6pfb69J",
  "key13": "2hkUN9UYhd879c7dYB7QJamJq3GEDXoQkusFmX2FuXjHErtKou2d6s6tKuZF7MV5yZoumVT1zAZZEWz4CwhHGTQz",
  "key14": "4gQ7HwceJxEP8ko5ZQYKwrWGJ4i3SpTH2fqRhnX7kKWeV4zd7dVFnNUVRD2ktFU5uLXgQLRUpreKyJcJek6BkwU",
  "key15": "25fbT23138mn8S9vZpUSZ9QtkAXd5gYoNwCJAVGVqoG3S8dQx5hU1G7PJdtTUw1fvw9Hfirmo68UNt7v1UjDTTVi",
  "key16": "5Rz9HogDnpeqauhFhqizKmZzFgLN3mxd4sSXZy4DoEY1tzU939MYxVx5B5axko213oeQKGx27dd7a7aMGhJ5roHP",
  "key17": "48TXsCt6HmWmkTutihH6G6vp4mCgjQpg9Q6RGJ71vPpWNhmCDFgy6W31mgKu1eW88cp4C4atcjcyh14YGnH44Nte",
  "key18": "577R9FEmZ1iT2nC52MEGpwevpHqcxaSqLS27VGMRMZDFuNyh11na3gwbmnD25f5WaMNTfT3DJ6guBGDRHchA6TH",
  "key19": "3BFuqURy4zx1RHNvehuokmNMnnw4PD3gtVC1nUUtD8j41qtjXqgUAQmhZ3nqXuMsrA1Rnff7jVeYGAoSVo7LNnAs",
  "key20": "3mxWhoC66J1NZzK72hQw3moeZs7BQQpTJSFWjnLaZDQgwYmqsRKJjQxexRrBYKyKrNeoJ3W5qUMY5WAedZtaXs7i",
  "key21": "qzJXxiu6zrKYV2HQY6Zxz14ndX6aRY3nvgAmNcQWc1nWf5eBiD3ZH9QAV7o8YMDjopcR3R3dqs9criWwfrmSuSp",
  "key22": "42BXnfKJyUqdN3PwM4AifGNRNZR9JTZ7uPSBSkcNS6YVqSxFfcopVPaUozwESC32jDACR9TwriZSKjFzfchKNKGW",
  "key23": "5H4G2ab6aBDzidYpTigiQpERJfZo4b6T1ARrcuEo4KToBugCXdWvLDjAaqD1GoiGxEGaayykv8Dw8DbYMx63YVDq",
  "key24": "3ux3C8LwNCirx2NarKhyteZtNLpNYpxHce1nnziugVh4XkCmbnGVLeqff1DUHxNVPUEs8Qc4cAu2axe473atGW1t",
  "key25": "5RqFD543mGUN2twsF5uYaEqRKBnu6a2tsfWLhBhp49A84TBm9BUrZkd5C5FtUJ1JwAQNPtaE7iFmqBECZuK5qTd3",
  "key26": "5kr7nC9rPkQFm4onB69thvAp2x1HA74DRPkE8ndgykGp9JLGNnXRqQHN55JtfXKY3ARq9p9jFYu78YFFmkLKP6X7",
  "key27": "2F9RUYbSKX7iPM7GhmWjQw85kavuHgtLqVbvcw5dx5pHBpWvRbzEb8DZ3zVPfZYb8P8eCzdR7yJ2xBFDrqish3nQ"
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
