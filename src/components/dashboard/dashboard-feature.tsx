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
    "Ujj7AWbw6dr2wjCN6YqmaAXqrJ9gJC2Yrsem3oxWa28K2q56LJCAW1qqXWeuqeJKW2xDqg5UzwCWjPAwS8io38j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MckkMXRwizsqqxqQBCe5wtADyWHWQcqiTnGWWEYt7xpxcyECTxVPB7LBTvafGKVG99w5H5BJWZe2uoQPMjXg6VU",
  "key1": "5hiXmGYGLr1oZKKfpAoteUAZK5HfdePtrfxBkZXaQWnsvJzAX3TuLiBseMFczJ8g1vEDh7i2KXW9CfbnDGKyAZvU",
  "key2": "3fhZ36aMLF6WXZSv6K9A1Fvk4uNfPJzJTGaWq2oXaFLwD4KdLsLKfeWpyU5zKbUZDwbGodB4in6bqUnpVhqG1Jpp",
  "key3": "5zwoYd5tpnaP7umKS2w5fAtsPVoTtTgJHrLSmk7D1FK9TyLW4yHXpuquxKBEyYDWaQ6y677ewLn2j7qzhaZdELHw",
  "key4": "j2gV31CxwWdQZTcauNweRkHi6cugWMukqZVPQZNqKvpjnh7gWA4VAjoHqctupXxK7NJ8AtzrWf7PMT7iXrRKpE5",
  "key5": "46HyuycnHoGqKvr2CxiwTJBJfgG9tvYudQ93VgQXZfmuQK6xjodMyT3TCgfaRMcKLq8rwMeD98182gchK3zgzGTk",
  "key6": "3MHM1yDtoebGunHiD8mdBaajUb2La84HgAj1oNoVafmZFW9jMEM7Cvdc8wTGCxB5BEonJGyJ45AHYAtTVGfXRRCd",
  "key7": "2yC2ZXejp3qVHRF7Kr1vSYCMjB9iAJ5S37VuD6THkJRfnTZNbNkTGQhPMJyF3v3He4XeaoAj3KQTYeJ8pPAzmYEv",
  "key8": "65inRLj27fMiEWdmvZGdAQ6qipFcD5Fp4f632n9r7ZwDHdhvqZ1KhHUVzaf4CYrRiW8iAWc13jfR8XpUyUnPDubf",
  "key9": "3CtwE18DZqUCcuDrnaDmh3m4gjSN74HjsZQ46huC9WC8Pwj4fYXgdVYZuYcP4iiyYZSdDnev1VV3jKAw9niqBeX9",
  "key10": "2B6KMNjiGiadxCuwA3qCexQrkzqX7MSWW2F7RCf9wmiwS5apHJxUunL6yjtXdC38xy5TFvuHXpvtK793FZtkxYhE",
  "key11": "2CdYYtPg275w5J2MujSAxkcqpoK2bQFSC84N6M7x1NF3V1Qhuuwk5C3JsiL5fBtLcVTdi1ZzSmRMFv7qdLPdXBuc",
  "key12": "9N8X2UvbKRkWRytGeEMPgy3eSFJtsGPJV8HHes4BGfLaayG7EcVhQGfyyoGNoGBowX4rzPDjsp9wgcuDJvs7jy9",
  "key13": "4pN7FNZyUyAkHXr8Hdy76HH296BUGfg4JTW7Zc1j6xijQfvmjaLSCzvW1e8bhjJtq8gr2CgC9xXcjjPvkwmNVvBV",
  "key14": "PRtXLwvQGDXjXv8ppkhoxVGDMxGWxR1owdbLTFy8nRho4yrhs5x1xPHTdKC6DnF8riztBwUk5BDDRfyWCbny1jr",
  "key15": "2hsNZJj2q7YKxUZG1yFyP3VybNC1wsGbzrUDmN5rtuu5jcnXx1Z1ZzSbii5jmDxdX5K3Wp9pzitkRGBzNjvQ6nHv",
  "key16": "4FyDC2w9QEiLrfaiDUPfknA5oPn1VNHHBa8mqiR3hXQ9qSJA26W2pZ6FjGcXgWEC4vFxmLrWBirasD63bmZkSvMu",
  "key17": "3qdgMvwfuebinjdRpuMn1fN5ADogVGeMJULGaR7P8F2WnMoFmcM7Mv48qnsuPzF4sXh61HRSG3ZBxPsBbQ4i2F2Y",
  "key18": "2m3sgiNfe4LSdVPvNe6oCLw75S9QsWP3KKBEpQUSfgb7FJWmUrPXbfJEYucCHWvUsSAWxUE7VfzoRfBCBpmBwdcw",
  "key19": "3rg4gReqCGp9FE2xru9xR45U1nwBoyUorisfVLLXJXxK6MEdGAyrE8AXFFVx3idSeYRdtkDPWa6SGDXn84ve7fqD",
  "key20": "5ySDpkq97NamPwCqENVaHB8Ai2XnAGrSWg8JTWcNrL14sGyNt9ioZ8FyQFdsQ5Qt4sjNMbSHqnKcoSjodYcfBAsA",
  "key21": "9gv9YAmKriFmuktzswCxBNvSZvtLxXySmd6fZvyGBC528dXbcPNGLmPuQRRmyh2rQGu2QEqv6vREyLtqaYXhHS8",
  "key22": "4FJgSQMReAwgvxuhaix3BP6tiAm5nLD1XS3T9BJV2ohWoLVvKQspGMwzYt4JrntKNfV9LxfKW2DJBkR5AnKRjnay",
  "key23": "k6ScpXWNt9NoReAfRGZbKxhLhuNCgou5WMXd575GBWPvE6yFYr1WpenHqy9yMmcT92UoryCc2YNp5L4MpQiaUeo",
  "key24": "3rNsUFcuf7j25L4Z1TCJaqp3sLScHTTHHhstWKk78rXNm1hv48AnuQiJL82s25zLsGMfNJLHsnPbod2v4Rx3AEQj",
  "key25": "4U6KsUCZNvtc5FdAQVF1EfK7Mo8shWRgC6RFsBVyZ1jNmrpCLctLS9VhDu3Pu31Tqf5URDJmKtcSkrnQ8tZFkzzR"
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
