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
    "5D8LM5zz7fkBWLxGFugj8CmHEyyWPfvAKJEv9iDyWNLgDSa45mR3XuebEGnAnJMPJ8uFFoQEQZxAm4TG9cmpbC7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGtTwYzpCsmAe5orr3n1HfHMrTKgZ15ewR9NapwKi9mosrPZhz1tk74YLsJn3GgQKmLpdRSwZuD8YTZdx5YuQDx",
  "key1": "3NBVqMDeUfpMTMyyrFmYUYHHV55JVr7apo5v93yLjhENFVZdVtdKFsAhVvSCpAH1WDSfHFWQ6sHcJUiz2zDpDgeK",
  "key2": "3V6fhmMUUJ1vVA2dsXn5YqGq7rnoqQyeh7JGeS1m8s1s8f4zvKWUpKF3nNESQ5ZXZAnCnQirmRfN6zJ1cFSYBGyf",
  "key3": "2WQDy6aMnMmYrAPd6ahbAdbUFADck6qaJRnjCGTag3aN8z4d46v3fj1Ppn94SMN6U8oNLRsQJebjd9jadHvi8KyC",
  "key4": "4v98CR4CArwaj4nE9Qc8QrfhYXH4zpoYgEB4Qb4weTycPDi2P85q8rckRwby8cTw6fZo1X6qJ3X7vmKzPcWCtJD8",
  "key5": "3LBTDvLaLdwk4Hgamdk7sasfuXG19AFn87YBgD8XTo3XWPopPpAx2zDb5G6ji8Z1w5TnoLN2LPVg2XmmyGbf7Tg8",
  "key6": "3shqfi2YCXZKfAmYfYwtZbT9zdUzVr3CeDErtw8WpMEw2j2DaoneJwBjHrBYoM3zSySGULsVqjQvqcG4Kw2ar2Lh",
  "key7": "57HGA1a6MwFVdHPeNk7yUwUnJyxp8v3M5sNKfLUGmTn7Tv1HvPtfYFcSmqm3VTcc8nwoDoPrsr7J2SsQKPpkFCtM",
  "key8": "zTbtFD7A9s5ZK9mkvQbdmMKAma4P7xPrzYnEBXxZg4ycKBegTENi1EFkKvxwer4kUZrCBwakBziYCpEWaJtGnb8",
  "key9": "5rkcRgUQ5m5E64L19Kx2aVDXHGjjybopUTbN7fCnAroxfq5n9DDTkUdYeubP1FqaWBcqvKWVToWSY5dmuMVNhaEm",
  "key10": "41kmfuPtkf4N3UKM8bSwDxuYgQHRKpb9jNNXKHBVbqc3WpRhmByuKwJ6AUDTRMVPgBZbhaK32rwHcQMpBiZ7iwSN",
  "key11": "TyBRkDF9cg1mFGBBV8F3bgEiraRMVQ1H9Mg4bETLTAe5HcqgYiMYZhWP6KxKd6fRekHRB4bi3M5smDugcj1t1Y3",
  "key12": "JqQWnL5Y9o3cPNNevyc11GawxiojrdDqRBf2zJaQXFaAVywPmSyMLL7Z5q3FxhiCnp7bDDWtSNPT5KF24PgSgBM",
  "key13": "2ARjWTQEcumUXF3U93nDqq1mWvkZP1RkePBBFuFstdiRctwQ4cLMNCwyF5XxPCNyx1HhrBRHZfZNtvxS7tBPt9ys",
  "key14": "27JSEmgz5EpPn5EVmL2gZ1HYkKXWCjBdpo9h5diFcp8VHqp2hquUAnUbB5YxhzVkqNxGpvy45q3c1EJWHfpbCKzg",
  "key15": "PGdNegMLm7VTWyFB3ouRaLrkZVYW7uVbHRmJ7bAqHaXyy3zBu6ahsNbjUDcPxjWET7UNoGyfs48Gt8jmS1hsZK3",
  "key16": "2whsetUz4NWyBzLJkxWcf4d2XphiztRFMBNdP5EEtn6GubM5QEvtucc5d4svpodXBHtnEZ4X6joArGZNmQ82owsW",
  "key17": "39VPCpnPttDz2yyZMAvLi7o3MfhmwphnM2PdhaWpJgmJMbyQhNGGz79L52ujGpt86vQoj687HwhCPP4e656xRiNA",
  "key18": "6AJYJnDMJEuZCQmcnEvYVM6rp7qB787mvtYzhqjv4ProTjuMUoJqfGAKT7iserZvjhANWdaRBtE3PtVnkXK85nA",
  "key19": "4VyZVPnjEmrduiMia8bUYP5jL5vsA7scWMPPE7iVncyFV38wCNh6bDdb83wKzkHTsUp2HGnZPxAu6bzWjF3iFMsr",
  "key20": "4knPYb8FrXKWR7D2tjfeFiHJRqvf6WUmdi3kRWvwGtE6KZupMrbQxuis2TVtwNPVPC6EZAzxWKgNZf1BPGJtZuHV",
  "key21": "4ye5QnDHd4dyHfBZrhh3V4UFBgNdzXxgVaSu8bsQ3FJB4nwMtdd6hi1kXR74bqZimdaeeL1csx7NUZhXYn2CeXSM",
  "key22": "2e49rdtA9eqeEibA9nC8qW8v21EEqW37GhAJnSF5jhKT5R8HHPiu13rHEn8GXjCgGFtDeQHQj8JCz7D8n2mvL21v",
  "key23": "2kXmBu8vfY4QXXKDMeqqpdnLmNTVkg8J3d2PDk4m1RKVuophgikf1uDcxCHmvVgxmbsSe7826Uw86L6AXe6bCXov",
  "key24": "4vWQn2YLmfqBP9ezwSCLiDmsVpKk9PJAkNMcPtXgtvSm5RYxqAsMDJi4mYV7SiFZbHgxqs4wW6t6VRR7phGeedy4",
  "key25": "3b9EpgDmLscVn4dfxz5xbrGNEsGzyTJwbrD2sCwuZGj3hDAvtH5SjsJXsopCreverGyWhf3vzH9r9WkApxE6eoyC"
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
