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
    "49Ah94i51ezUbpEAo1rKHByufJW3sgBZy4s3iyjDxB3gPQhF6hiH6Qit13guEYQ7eavEtjgeSqoujSEqXE7LKtGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5R4jnL1zgwmv4vc2xNjxmN8agpeA2nGx7xLTfoUV7hojkgbpbncchT9BwwZpjK7yvRXcqQSks3ZswDxFY5Kn5g",
  "key1": "4wHg3YUw1zktUo3TXWigb3shta161xUdCp7JWTzpQTv6uGwWBfcyb21iJB8pQj1xphrkW2iHDY6L2XSeriSJWMJ5",
  "key2": "2VwMiEYeLq7GC8FNhJKoYcaKzbAyiN1vmciDqV9CZUdYiUSQdPUnRaVdii4iTjR6voNT2x3HMKM6PB47ip2YJAeT",
  "key3": "5MVX2bb1qGEoQ4A4hxvDfAcSuBCxMHTKUnKKjRW2tXKafJgzR9XEbUT87BpuvBVY1UdQg8yksa1CBoXFzhpJF9ik",
  "key4": "43Xqs4FhZaNnbtQqZJ9nSfntmYWwUo8sWzC6VRj2abvkKAN2wpcWhQ3rWvDWphcRgxtufD2ssYQXzbJ7LLqbJYhK",
  "key5": "gFypSZ7EvWT1jPrPN1EavihNEx7HNhzh3vQcyhcsRiuDDaxKLXgjtY8EbRVUE2VPnp8i6YCpmyeQ7hPbxLhaRMH",
  "key6": "2B7yW8Q3NZCavZ24fDc91Qfz7BhatDNSemyizNZHYysC9Bb7Tfis9hcyCZ9VAdtevcMHUtgn2B56aWLk9W2TSHEs",
  "key7": "2znDf14VEeAPEi6AvzjGTJzK9wizK9KkG6KedofcQ6X1EYozGcUnKvcUrp82MpwpD7uA3ucusJRVcyKRZMBCVff8",
  "key8": "27ZmUhkkwy4tfSsntaQoDbLJGKmjJpevNxR8f963cuJTZNPqoEiqVCGsa6bJ3XWPcyDk15pgw5uVPabguSv1ybf9",
  "key9": "4EuGULUAaDbHb4ZgzA8gdML4whxySYDtYQNhmmRT2uTYrJRphuLfLua1VeM1VwjTjdMp85QtrVocAwJFZrXdfaWQ",
  "key10": "58Rvf6WdEvmUvzgPTffyKfAsVuKJrh3Wm4bWV6GJv78MY6cP7MPKKwJTuScrDea4iXdXiDmpBHFLgf3Ekb7Kb8xr",
  "key11": "2jKJ8BjFkW5c5ho5uQDM5XED43sUKszXCCVHwFYSDV6heVY5KkZg67cKYhyCFsc3ftG4NRbonNS9Pr3fTj35g6tV",
  "key12": "heamo8D3CbTyL23FJVVSVTvzx29ykeS8TL9nfC7nKQq4nRuNCzGG4F5ZVGa1RPLMjCEntvgrLFXogodNZ9oc3d3",
  "key13": "2rxtWDGfkkeKeWfv4u75aWSfiVWT2n5FdSbBkxZVw46PPg6gPPFb4Z1KfbL7QXRwRXM6wTS7R6XrpNpygdQwprup",
  "key14": "2w8jBFFxLh4NfHX2SptxHdNvyRxHPQYafXP6pLT63JncfpDjcQ34U7mLnZrM77jAqJABR4reNGYy7YMsXtcw6gN5",
  "key15": "3bhWf6i7NEy4rYSL3KrGqgoND1mqvdSMMker49LaAfcX2ojb7jGLVCtNU5vhuSWLaKUSDHeJkRCcMct7mgsZSCSQ",
  "key16": "yv5hF8KigGFsw1QyvNqg4x6m1JcrGzoELXTpbKRV8k9VYwDcS8vSRSGTV8cgJveMFSAa7ypJMNxY4WZnYuuYDxw",
  "key17": "4Z2ZFMgnPfD1ZPMUzNX68vBsPrarVDNDVBXhHS39MkN1KiJJxaT5q86hpKgYL5kaopHR2Dp5EpCGPh4HWveGeFGj",
  "key18": "4v3fC2BdsLoMN1GYtX4dNh9LqfcNPHDTAksVzhTrtyx7DNj1BCurzP91ztf7fQDi6XJSMkRT8AH1gJHxnvUMHkuM",
  "key19": "571udA6N1wCEfTMdC5BtqHNZgaoKw1R2phGW4nNVNzPZAev8Rg7hPKv7n84yeSMhjLKy85HKB7MQunUr6tTudyGA",
  "key20": "4YWNVyp8eGyKBWJbarigFUSi9VX4HAFZXqkJYi3zvxn34ptZgsYZvbLhL6k7tNxPRkAGxScXrZApnMbc5vNtMtc9",
  "key21": "51R1sGTEDVaJqFVMzckz7Q6dSq27FQT9kHKMERb77iNzfNRKmJchH7FRefpcyWz3cWJhr9Fe5qubkVf3ab18qhK",
  "key22": "nu783vbgDd6MHe4mVQLEbyA632Y9jonXxkW32veAz2u1Ppx3nPhA84t5GQv3YQTKaiWp9mJLXYtKaShGcgUMWPw",
  "key23": "2rwmrJQtJarYgGFUtNkznZo5HVF6fCxjRcPHpaY8fnRH8RPx2AE1vfVbt4JmzzAS3JuBNKDqAJgjJqUQgSS66etD",
  "key24": "1t7ACy4aSRbQ1JRz2SCnVdBGvRtYENKD2hXTn7gRpufpAFe8wJ6mt8PrFLCGDJGaZjnHaM7tP2zJKuEbqbhULQA",
  "key25": "2ZNRWkqMY4JRM4ctMi2H6oqEFLm5Csu7cmp6ZiLrGKqs31yuuYyt5TnptKDecv1mYkND2G1nHokoZW5nN2Kw23Hk",
  "key26": "3zxrjiJftEZKrUZ5D1DXuehiFF2B52Et4cSjYeNbo9m7nSVsZqgBmuMtQhDzyB3J45qeJRsRZCGHKJHqAGSVuJwd",
  "key27": "4naJNjb4vpwhoqibt5DDuomsNNqy14f2Dg2VgLCoduRN6P4GMUbfwoaVewW12qUtzJR2nGpb9DMh6ttZW47hjUpL",
  "key28": "2b3LVdXn72WQBR9K8VQ6qU78shx8swh8kAeBq8vq8vHYRNzA5HWRPEgXjMuSWYE2pGATp7fZsnxiAxXsEhh7iBsf",
  "key29": "5PFa4BeANRwbGpvSEAxH849BQu5qftMj9WENqq1B7mUX1e9dESESgScYKkymWvCQnAySNBgwYTCtv9uRBqGnAmWp",
  "key30": "5au1k9Fzc5b1FY8Hb8wX2rH9BRQgmFib1dAJG98K47Bb61XUdsDW3JfTq3XJRjT7LH8ktykhM3SbT2Gm355Ayfkt"
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
