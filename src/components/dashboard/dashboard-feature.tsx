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
    "4HG6WC8rSbkKeS4xja5TeFJmYPeDmMJzZuKJA9s2bYpeNmJBCmDubjFh7SAroQcpmJe9KWcW2mEfUK5VnFP5vyVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkxfLoXZQPd29nwJSru4b78LoMjZXgiNT8qCZK2ZFY2Tf6dPeMTSk9sEJ7WkhWhqn8Uqr6tzmZo7wDq1TPU7Jsj",
  "key1": "4DRtiSE42UZ1U7zS2yFBQR5HFobmYmRpVNfABPLvLG6XA16PiEVMXDs8Dn5zE21xKA58kzK5VPi8Xo7ojWqQ2CHv",
  "key2": "GcX7xX7v29Y2fm1fv6FwnfiRDgvArHXEVmfexVQ7YX1AM6kAJTwvxhaHaM5ESRgWxff3fzHJR42riBLviFBKm25",
  "key3": "59mQbhrbEssaswMnCpbarrEd75UYUAmmQstiTEhrdPXtYtyxcPUZjb9m1h9NLg61KpjBvRWHHYDVfqRy1BSeAz7X",
  "key4": "Z8UqKUNyP2BUerNHmWu11M4kwdFwtNa3mwnG84u62aGACYpnSomHcHiUV35w5xt3s1aa8UW7TVCYN56LZX8gUmv",
  "key5": "38WNsfKgy1q1MDdz2uALHYdvT1pyob2kKor2tUSm4AaVxLj8pTDwUWBwWxCBwr1WpxjYE3EgC9gPpv5DeuRLj8qW",
  "key6": "3aNq4iCNjNmHWKrjbBdjb4qax1X3jRyx9p6ticiUaczy4vKHmecSZoPrMVNXCkG2Vjm2eqrUKzdSURbZc3BHkonW",
  "key7": "5gvQinm4CQV16dg2TQSFVR8tmJFhyjZRF1oDHoerHTfp2ik76pwhuqCcqJxgxZZR3Nmwknceu8czC7ogwCRVNFmY",
  "key8": "2mrrjKKeArGLpvVB9CcGY7eKw1cPwnAoWvQyUFHh3S9getLJLPdqVct437jsWSTG56Le55Tu1LqVEQ3MjzVNDM5F",
  "key9": "2DKthxvenNfKJZ9dKdzRw5Dp82m94dSiiujJ55asA6B2HYpzsMjoYyFmqYYK94KLJeXM4ZjjpqpJo4zJAiLePMUy",
  "key10": "4BeixBEBpijhKqVkYsCqQDWMYhcifE2xZ8DZgWRwAzR2NxcMhhYTi4iRRH7fPPB6tTYQqFeLCEsPt7nRDR7c4knh",
  "key11": "4pdzEA337TvG2jvEBwozFkxts4azizHTUcZbaaFz6J2iv4jvApnCstnioqjUDt4oEJ2LmhX9fWMFFdfAFwnZ4ucf",
  "key12": "3o4uwL9PEkR5tunw15JGnG5u5UnXjVKwyTaSKnkbeHTNnhSh2VZSDQmAiMthNRRx8BFQd8QDPQrVzhhxR2qc77tG",
  "key13": "3b1JLDBQZcsG8mFgVtht1ubAgSU8wBqsmWjaJHm8snKqH4K5YcJbic5tCwor3oaP4R1CDx9r5gnWAEo9QCP3vXdf",
  "key14": "2xPBP3BcG8WxyUU3J9p5ATUVkFsWpw4BMSqyFcZWnQfbd3vqkqzxgagchKg9xSw46eC89PJ9JJxen2xczpjWTXK1",
  "key15": "4ACyDiwCFJ5DS2QGbjWkRK9e2oFQDrusCdUir9oqjwnixjujfHdwYNj6xdMnw2rCf15cqVWHa4va1PLd9jcgworg",
  "key16": "344mC1BS3PSc25ZtpsxSw6F7zfkgBfvtiWbEAGoH919hX8bb6YRPcioENz3w8vJviH18co4DjfCEzjxmKSziDPSc",
  "key17": "4HgUv61bLD6P6RFoiwFrgnhU8DudFXWDb6RtkqCgLqW8d4DDkSFBTzoN3MCpH7AwXBp418zFKDK4ocUb1w6qi9N1",
  "key18": "57p4c3sbyDhA9nDEuZ9YSRMCELn9qDStiyKBKQ3uMNS4z27zkwbhVkF92tb4BaLSWYtGzGg5BJLagL9yN66zLg9H",
  "key19": "5K2VdX2M9oiaxohoSjg6rxBG4kaGNEKrhqjSi1vXwBSaYt1EAy1Vf1bQ5H2UVKkrwUrXD3QG9V2WWzbCj9uTSh6N",
  "key20": "3UpVRU3EwrEhdHh5axW8s2T67oXK433FxGNUiUJakMVnpQszZYTtzTziXqiNfFnCwBpwiFfJuQz2kVoi6AdnzwJg",
  "key21": "6qx92PTsPNkHfowYUFTPxA7fBoAZuBiRZvmnSqqZd1zSPuzkSuENzgc4jeqgUsnNLVceUQUaVKAh2s94WSy1iXT",
  "key22": "UkVMC2v4KPsyw3iRDWqJpH1q95JELBYdUySqgPVWSFFTcXp3YCWuVEmoqiSsJ4CTiDtPki2QMs3rmNRL7oKX47T",
  "key23": "3eH6f9VE4LVu35npQkan4c8udB6sUNxyxosmkKYEDsbxP15oXZGqdxJ2Qm3Apb6ir6nKrCa9eErBFkQUohzsWqML",
  "key24": "2FaiQyqt7gR86LEMVpbpycdnWRVEgUfdLPsNrfQVXohC1RUFMVh18Tv6nkH3dj91HBnkLgCSGzQREvpkgKs5W2Bx",
  "key25": "5N1XHJLJvGZJThosjZ2urs6EeFwyLipMXySsPC1nJsgrVHxGDyDcnDtRhrhyLepxQMZ5QMh72YTA5f8m6HU6zXZj",
  "key26": "4UkUQhWA3tEdD8JWm2xaynxqr4hd7ZzvFzgYnt8W82TuYeYyGj5HXcp9ysg7Pb7zYFsp2XPq3BTsmGKNoJ6YRhCt",
  "key27": "3uKmD299M9MgjhSvEN3mqhuZVpZGuhjRGAWDqmwcWZf1tPypgs1gs3UkUvvjR8JGHwUDZ2ga8TjLYzgbGqT5WC4G",
  "key28": "F5ybkPvnUFUA9GtW9rBmLqxNoKWaUuFtKTew9YzTXvcppKzS9GGvaBaJ1eBPStnueiL7h4G8YSHjojcjnkyYxBG",
  "key29": "2BjLbaKNH83ZAvFAr7CXgvhCufXUYR53bhdqrh7cupQ4KFjZasSz9QVTg9Fg1nGrMZe1sAWpMkk9mwvrMpdkviFM",
  "key30": "2ttcyPXKv3bgZ72fA1RMZGPJThJsza8xauRShkRTqBd5fYTWwmqn4WLUJVrgvt6ut6fWMPKXnEUxagCMaeqxTYqS",
  "key31": "4ULXi8ye2qevfr9q1hYb4uKAC6TyqNeZztVa5K4scaa8gpzDp6xxdmUNq7Uy6TXvmQNnFERmk7bSfSzQZHSC5zWV",
  "key32": "34WgjN3thYCSLCNtFbj2xRwWERThD4JjjgqicpRQbkVPtZmPohVij2YUXcA6fUiemPB9wR4EsUj7TVhMwjGFz5Mn",
  "key33": "4FmoCf7bMG9CM6EtuhKact1EXBBdUhvExAt6P2bWc5TUSNt2ejzoJMaKRE4M6fUokGuLqNUhJkMtjN25C7nQLupr",
  "key34": "5KT9anYziwVgdu82x2uBEkvY5s7ZcxaBXU5rc7aiQZMQwN11ByBkJH4fhDrPdvkSwmjh4Q8XrFusAWgwzYX6whej"
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
