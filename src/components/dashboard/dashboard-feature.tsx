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
    "47BqKUPmUxn4iFaoGbrHcGDd16T24QMyQiKw4hE3B7k2Q7Q8j2g5ETK4qjzpYbVWzniV6NQXdge4dTsJVoRtX3Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvLjFM6XBhj3uopReMEgK2K9ursV5WEmtuPbdGbN7HhF72XNrj2v1N7GrKG7Hg1CN7CXJA3qwsADqy3RNvYC17D",
  "key1": "46LU8AkQhcDZRZTUwWFYcqVKMZJzBiv68ta44474wG7Px8fpFEekHW4cvgTViu1yBR9R1wZCmZiWaHPk6554CKyY",
  "key2": "5z61VSiALk6wpDX8DqUhuX1S59a5C9LMNazWjSvjo99izUK1zewaBrbZBaHH7vxp11u9YhAq7yJfa8StERAnSkHA",
  "key3": "5jwuE31XJGRSjsthJ8zgNCf6JKjsz66qfRCd1xgrRuQ52CaKYdkfEf5q1f5GzzBNg4QkSE1mrSoSv3bUmFMd62hC",
  "key4": "3k4HxngvSwUpDUK23u2MnT8Bjsu4At4dhMH1Ctu3NaMr9xfKrwoVJ5jM8efDWRCVVHGMYBGDGR2qYW3qWkxSTWkQ",
  "key5": "3DWhiRz62xiRYCtMQ7ukEi7p7MxbZQdd2Lsei15acv5MG6pFaR7MvXwvq3Z8XBPgZWLLcjxtqiKgaRA1LLP9CsVK",
  "key6": "dw6cXNJwVZmDWpn2KQS4JgxcvcVDgzC9PwcyrXMNgKFprEJWU3kM7EUMv45XDXA6DgaxYXmjrpSd1KbBELzzgV2",
  "key7": "YSu36DmRFreL4u7bYdALEtg1AYHnEXjcnHsBW8EeYLJWMG2rAB5bkWgUvhxyPPGbtGiqCHaVKJYW1Sym3gdS8vV",
  "key8": "5HD4m3z89g2xiLKZS8DSN2edhnyTv7JjCQpekSm5eiaLuvsUQjgeF26cNRJzWHe9as4NEFvpFFV82N4ecRj19UXN",
  "key9": "5wY97mtQCpS6nbuEKvLBDnySkrCrC7L17nZGRfqSTYdeBEm5rNopXnoQMFg7opqYyikGxGGSLjsVKbqLFnhFV1k1",
  "key10": "2vvUiZepLQqNueL3eKuWuBWe7BxZVKy9cJW4c8w4wvUHWYPArVNJNfV1au4QfrPuDN3nXRiYpXv9XbsCpNUNhQTv",
  "key11": "m5S75A7pK4KueDYGbdLFdgPJxVdXVZfX7q3LNcNbAaDaVRqVP4sGf5h1rNYbsZk4HK3FEnVTCJ1i5vaUAjK8XQ2",
  "key12": "416GcxF8EUACBSHJNZVgqrSPfLyA7axNYMQo7qVnTVGy3F38zWhdNsk2J46U4Zum1A6ckirJKw7ffUyxXzB5yckm",
  "key13": "3BdUCsCdvxSMHsDxpxDtbdkoJYq9BZv3VawG48EhUSvN88rzeu9TKrH4bre6U7uX7r396dytkX9uU9dzWqX7gkxH",
  "key14": "kJNbucuS6X6nnwpY5Bucot3C3WvoB4JCL8fycKA9afdbG8tX52XMS6bH8cWGFmMP9ZhJmEzZRnutEfPBrZNcgYx",
  "key15": "46tnzLAMUz2gu2uuHVUTf1uDyxB66kpLPCNQpoWRPkthvv7u7u2HMBeQHcmAiZdaLwRgwk7eLudrrTYab6zjhakC",
  "key16": "3DEmoQs5AeeXhDjEg9ZP81Y4NGdEHZRQMhYjdPTLpTa49TG5bwSdJZA5QqUnjHfW7fQ3tZtkY4HBugmQ9wHsM8rR",
  "key17": "3YxN4XUVdVJe8EvZPQXihELXBVfENJv3TiExwXSaZkwNjhV1DSXx8NWJkktMF4ENhq1WyJBrAFVD432R3FL8fhr4",
  "key18": "4vqut1SBmnQgtxs3oAxAoW5ECyUL4oLYEiBZD29J72x9dxSBQiYh3seXcjpg3AwubtaatozMKgQQNS2VXD2b6d9U",
  "key19": "1LtPgEqUdrFVrwyGEioUmavmnJn1gocua1sLYryF7u4eumSsqGWkr5iWa6rbtfwTV5BiHuwPuZHz7y4mnbtQsSG",
  "key20": "618A8rvtzW4fTtXgNjpN5EYjjXs385BNPBw27JXaUJgkauhQiaMHt9HZ7khCtokrE95PZumJsx2RTeZrwNcJRSu6",
  "key21": "3nCTfv3KPaVUxuTxR5LCfebXatQJXNfgQwPPY5tbzhWxsyPN58kr6JpWgS9cqbFtLCnJP8uWF4Z7TuPghe8D4AfK",
  "key22": "2jvemUmQtgGLGXVBgsfj8Jvd3TGkbiLbVBJ3wjibkWzgpnSQC6LMB64tvSjWuGYac9GVv6MwXDya8EZ2M733h4C6",
  "key23": "5h7RbMQfXFoN4wQjXqvpB6pJ9yLd7pEM3AX4215JFfAJXUs2jZJx4TgrSMAHkHqLXU2WAX55fEbbnZJy9ax3HHdn",
  "key24": "mZnHcyqaAdzkLTWAepDcLSYfCacLh9yj9aEFM8qQRjjnHNxH1ogguiL6qxTWTe7z9LiSvAK2yiusQqkDbxLZdUP",
  "key25": "5AZGoex6pjF9yBskDWbHi77Vmw4reZms8k9qTWhbRHVjBZWTFN3GXRi1WXAkn1wqUyV2BmxZWDYaJ76hqJuDQpZB",
  "key26": "3TnDtokmRAZRHq1kypVXPAZCbZEHNMop418iFy7nnAC4rbr3gv8ZJt4vDXiaEx3GtAZLqtTcPukFUkF5o3G2ZUDw",
  "key27": "3CEX7j8bD1vQmr8PNAzvvZmvc578UGp5YuWghtKxNVDRtrX2ryNGVWbuffEJKv7hAGwyGPxJkrZXPGXJbWqSMFKv",
  "key28": "5gpaT6w4Cte7CCXT6JPbV6HzRQwTe5osyxZNu9iUd6UozfboQJKi1UWedwwx5fnWLPDLYQKRoPPVQDEDaDJhR2tk",
  "key29": "3Chs8FLfSwKVYkrFh67k38kXbtCdwQhxdXZmsD4n6g88vG7AqW8reDFwHmJQ2Fk4AokzybB4864VxVj6LnGqqVMg",
  "key30": "3kz8513PoHcBh8hDXSAMYsmG57vUaBNtuTyog2ys13Tbnj7ub91wFVXga9ZTbY47rqZweQkRFw9HUFMHt2X1V94Y"
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
