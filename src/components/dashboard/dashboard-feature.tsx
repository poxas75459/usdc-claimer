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
    "5Y6ATMeBVCGPcJWWubK6kci7SjE7a2BDdctotW7vm1rXbjrZgnbrJsjQ6KhKL3rJVc7MjX3g49mhegqKXihMUwgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGTYSjVXRFvp9E23ZmsypcVVdAqJAwoUec6HdR1ffoXrhrkynTyAhadv9M3nXv8MogQAswMXQWLijFoCBWGqqL1",
  "key1": "5p4iYxGubTVBJnC4hU7WwpWTMq3GUJBndzvHufgvV8zdGq5AaS5iS22WAhvFd1CExVz1xv332BBy2zNeo2LPj4MQ",
  "key2": "22KBykhAuUzqGSaddDjHUtbvogTBrXhGM4Zq2jGThBiSX42CXEqCBvhKdwiKMatkoWGWhDjRQkcJV7mV4a8JiXoo",
  "key3": "4NoNXcfRvx2NSZWZ59XPfRWaTAPi5HEEQitZM1b2UqrmUjn1JktxuQgT2pcM1qWtQn7Pcdth2HxhP9ig3HdFoo3g",
  "key4": "5YZJ7c9M4tjSAQ7qBvUgHd3HYhyXfDNWJ7bKnSvhW9nYfsrwWon9rebMJ5dHkmdeaFg2T9dLiS3kErRGS5uuQG8a",
  "key5": "4tcQs7RvsRJa4Jbg8wuczvynVZRsF1Z5uNmDTLYp6R9YJoUH28zb8gv354uoijMUg8Ntp1JmrCbwrxeuxnKj7Npq",
  "key6": "onmu1vnt1LpVEJnuB5ZuomrXjagVK9n6dhyGTjUrRj7xr7YyGcgNuYzXb7725KE5igrxPro5zQZ4ubx3iFA6c92",
  "key7": "5UbRNxw41wVGLEHWgvfc1xXsdoDU7t7HtPfbwbydZGReTN7rkTdGY5KpaVJgZQbSmULbZwR9qt7AirE8L4eShJTy",
  "key8": "3UcYMM4sJMT8zLHvL13gbqVwHkoYMv6n3vM1HtD5ZekcfY7iNsgQX9AuQJr3NohwebsHbchtRd4c7EwDtJtPzZoZ",
  "key9": "28cVQnxyRXeL1PJcCbruRxC9EHcbyLEveGRQshtdUkUkjd3X9fZt3K3JFc5ZuptqSoHavRVgtNkEcAmWM4geFDgJ",
  "key10": "EQijTyF4ubzMqdBbRVmKnQ51ASipRQnSwuJ7sxKSC1QSuNKMTh9xxYWbeyLmN4yVt6Y4XcD25eUQg6aBSW3f1py",
  "key11": "2XudKVxEdnFv1eAyiyaMfV7TTrtCe9EXrsLVYCyFKNwoCBM8EWtouVRjeqw6vYD51jB73ZwRxnsEZtWLhrrTHEhj",
  "key12": "6Mn2noa8HzEqbVANaPtbJpSkXBWgKYW2YfBavSSXi3qPpEgpQMyWFH3BnaahP1rgcJdcycfk6Z5WguAy2yECEVZ",
  "key13": "4xYu5mqyqx2Esqa9GugrBWhLEwfoEPQrvHqYPzBHUnamzR5gNKjgbSsdCbohmpTkAGeTZXQZhrHGrZUzb6VpJyv3",
  "key14": "2Xr4GM3CmuYppbDAjjK19UqYKiUQK54Q52t21cieszwUTiiadfszhWZZR8DMRboa6Wk1jXYydepoYV8rVmqV7mps",
  "key15": "2NnoTAVXnKuVsRPMvU4SZ2mYG5vdHzoHaGtneHgoM4mAqfhqb46obZkGpZuUUiY5HMthDm4kUxieyi42RZJbNFzk",
  "key16": "53modP2a1YGwzdvmWUqSoXjD4wZqJAyk6y64Hsw3xSeFxXcvwfx9ushdQPScvd4U6TmLc84rHQkJ36fcrPWcgo4F",
  "key17": "3j4izS8g9DppjwHphUFjEPNja7JGYYo8n5J9GdxghjBUM7ykAdGKb9rhntdRZ8fQMu1VArFPKaWwqPtEmXhabVkH",
  "key18": "meMJPSDa5qWVh5Z1MTEW395Hi1YeB119HonC9trAsHZTfihh12HbaTEvucRsGjtLdWHM9RY3Evex3QWJ8FcCiL5",
  "key19": "66pkgHHAFV2WnWRhF7TYhBTuobf8iLF5xcUwXx9zgVkoGiy22PESh6SXKyusC8ctXYy7mxFdxegiAAmsV3ckqAdZ",
  "key20": "tDRUHj8D6QSzTRZDGLVbtJm5ES451RokFE4YvR7wTCUZNDX9czUawuXEibUcSvzZkb4grmdYYmMZqYAiKezXhSS",
  "key21": "3YTYjE8Sko3bM4yWa74AdiRjg7B3GVHT3ivGniTi18cavTeNLGm46CNBx3tB2CfRe5GHoqH71TBkCQRnd61rzqnT",
  "key22": "2omej3Cn7ujUd2jUUw2qnsAoep3GdivvMmDNRo5GU1CEqVzHavmoNSgVd4Fa8ScwG2odieUxZCsYbnojqmVmgdHD",
  "key23": "5PMw3YFuEt69sZ1QNkiTJ4EsxjWshxauuu8yYDvgJAaHUPWMPNrYyL1fzFQ1JxaEA863SiaDQL9bQHqDBhKHc9Xh",
  "key24": "2Wv1NCWXyjCAz9ourTtDemZTVy7eywmFaF9p5dxv77f6VULWkQdenidLUWpppgUvqvU6dhCFpyzyJnFm3PzpvHfr",
  "key25": "3dZ4v5KAEgRhawWstZ2zNnHVdKFH65x1f3ehFP7jQRKByPwrvq6V1o5h6vCnMqVvNGwFzpz66Cf7eMEyxnRGvnDc"
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
