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
    "2PbFABFdifrAvRyueCEKJLnM84HnTFQVzvxvnrDSPjPEA6ZVrVAj5TrF4RzQUDgQL5K7jmUr9PG1YsJNTLqA6HhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1ENB1qmRJEm4NYmj7NYYkYubdVSFfrtKafrjwoJ6ReErbNeVStyUvgw1jdP2rmXhYPKkBzQbz4ppobLurrnR4e",
  "key1": "4ZLiqgwNdLJnNidPG1kWjsS6gSeG3odDWuW9L5PpbeNJEg3Fz9bZHKXFcoyXcM7JNCe6EGLM7ZizqwVidd1uQ4F5",
  "key2": "A9tKhhGdihYcVx5YcmfZirjg5k8T6cagwvLhj9QbNG3PMMz9wk6UZ6qHqBzMdNa6ph223uyhTh3kUeSGCvsMzHi",
  "key3": "2Cu5sAVbcbkhLcbB4nRvtrmo7DPBvZHzXQyLU79WBhgzAAvHsLvn4qnFND5JbqXAdbzsxA2dAVXdN6guKfteZ3UH",
  "key4": "3r2BXfdPkb642qJFfwzizuXf9jVpp5s6vFKg3PA1ohDG4Hp1YtahkxLeGUbhSy6kcgwgNBqD6hkuCkiviFS6mT71",
  "key5": "4r5EHCj9TVNZreLgRhYUGinSLHGKDUUeHjNCuAgd2PDiPbfLmHcXE39kiRKkTkK7AKUuZN2j6rAu7bMjxCAAqkk9",
  "key6": "3TvNTCygGRXK6Sjv4ReVyPhgf8KotvnssLMvzw6gasJ341i5zMHgDcgvGTuHMTK61jn79cP1oZvRq7pPU29h5ucp",
  "key7": "3Yg6TAkngwFKBevLPXvRtA7oMXE1wPpPYCyXoQAbSLEyTv313BejVDDgH2mZt3SoD8PvsQT2DmR1Ka6RYdthUeMn",
  "key8": "2tSu1bd7Rqps62PH2tij9v7DzWVPHrahmoaceP17t6YQGBYTfh2eRwYw1e63wt2hweRyHaH89v5D6311u9LciKsc",
  "key9": "WEqdWdAMUgaFjKCoeTm4d99eTW9pa3v4fxMp2mboRubWAApKpMoMUwj3npeiKfAnfhGHZQXe81iWvgC1hmvutBb",
  "key10": "garE53mB1wEimcrZ76JpsM6fBZRBE1TKXgJSmSFNsVmKBpDpJSEmFo8PrkTd3UzywC3jRppMCXJC9gAZyMoS1dX",
  "key11": "2jgpUjY9wXvsi86bLsiDkNKmGVqLcaaUC25neBzmmgTEznvFzhBdAZ1cRHd8Jaq328NnLwrmZquQYQwyg8CJ4war",
  "key12": "3B1XQ9yxPetvPkrzyf1BSydxhDhFcnDTKcbq2YWNeXCeLGkZruWzxNqtQgX1RKkaAUonvEE8mgbc9DiBru44ve3Q",
  "key13": "4PCi1oz7Qk9HjP84j4A9UGgKcyMQyLSKn6SsEGi4R3AjtHxoYaz37chTwD1AKvHw5S3AZZynJhHrk5b2ycUrzamt",
  "key14": "3eaGuhecrYm6zhcakAjt9JMaeYkMbEa95gGBSWG53aUJsPS5PHX45ZQk4jT75XWrtbNBZPhrt37esRoiJPuSQW2f",
  "key15": "5h1cscK6631CnZJLwU4qV3bUK3UXTvGCG7yWwzwwfbtxkELosmB9c1nfbXes1kC25vqZdXYKsAMDt4x2dstg6Tjg",
  "key16": "RjiLmAD2qA9jdJPbyc5QoMT3SAqwLPfVxubDZ8bLpoRLxD7oWKRWGaqKavnbvDuhBMqWsfzBZnWEmb1HfWFrAZW",
  "key17": "5SjVpj8WLmffTBZDATKK6rw999wG7k3zRnSd68rVyHm98N5AYQkCs6qn9t134AFRLe6a7d1iYPDWzVR8d8JPAN4D",
  "key18": "53cG7YXmJ9yWGepCBqTXmtHggUALsjUVDSZHu1RtF2FwBa7pT1vdJhqQdHuSzu4LgvMRHKqK3GVxySVCMe5Sz5D8",
  "key19": "4YWP5jkFvQ3pJi9WA5mUtQKQefPCzgQvmtTU45wDtUVVKSFqzaCCHBNNM52uwfMMzXbbGVfJ29743ui4fEMKtrKP",
  "key20": "w6TzAADbtAStQkBHAPPsijcTvr3snuyqJggZfxnk9vkBHaq4EVQVK5zmEhpqKvAR5jcZtWUVMrAoDhYPfb3LdHm",
  "key21": "2x5hwHoUmoZbiaVQXCJ8cVVT5jiTNHGyCF3cb3AeaagZsTQ6AwvxJkyALJgsR5Zcs4K3rf8A2fqtmX4h5MsEZkH4",
  "key22": "4Adg4pMR12ahTk6BfDSpy23fwx8emhxuxR7YoFrnm6WiHfQ5d99K6RPo3heLPjVqbXnCjdMf4MhnLkzU6yH5DT9n",
  "key23": "4cCQNNLB1XAKykkF2iYWPDpsR3Jxj1k3LncV5EH3Hxsd3aZ3GwLZEDZkv6xtwKcxM1w3hsE77SroRLSxodortXcD",
  "key24": "4scMhXrnborUiiLpjrPJL3pyTEtsWAdYHs5Y6pehzAQjBidVuRs7ZqC6nRnjD2Eh35CrtZYGsPWdZ3tcZdy4qXde"
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
