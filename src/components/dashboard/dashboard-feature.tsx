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
    "4gJQHJAR9w3wmyiB56a2cyXH6RedSwdY1TuaZb1pxWyPZtrGJtDERiA1RtgER7Ejfkp77bHc8ahavLztkZVVQ5fK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1misQXqPCePHXuTXVXK4ChAZsWGvVWyVmN8AkDzsNHNrs886Rm1YojPgNd3HrU6V7TJqxSYX5Atgp79bdF9ds5",
  "key1": "5dejb1H9DcARttaoqgeZxyMjY4yj2E1QjJeBgDtWd9rvMeqX2ges1yyToLSWqb7DXsaJNzSzK3zfLGM3hwFBMsPP",
  "key2": "2Z22vw926bsfj6X2CPJkekDoK3uj5fHQ9UqTjgESnoPuQSCmJfwFL7uDPYrTp354fA8LWyyKspUgASgNqqBqFH2C",
  "key3": "3TbuuRkFe4JWx7h1vZfCZ1Z8S9PgXLrbn2xrzq5HxCBsmqMFFaBfZDTJT4qEHuaLY7duBwvv3bP6ezmpEjvAGTUj",
  "key4": "2ap9dC927SrXhi21gwEZeipf1DRYzgvvu6X7QyQEfCwQ9Js7sKmUJMSSdHeqRaRVGDvUUQkz9W4czxvU5EFhDbVN",
  "key5": "4LaMKy9DW1cWaAQWYmWubTC6iQBvNwLt1yJkMxThDdZKdT1VZk4PZi5tav9VRen1XWXEYGjWeMaokMGFvfvRZyQU",
  "key6": "3gAakQSS3WAyMf1bTbuxCnH1bp2HhgAAARGdYM58WGAaewijUzi32M3AubsfeUJZUAKXPc5PMaV48CXnTsmHdQSq",
  "key7": "QNtq9YYuY1BUdQ95s9KYccti2wjU5BziHMeNWKQwqfzL4tb6vwZgrBFwnneTpECrk4zMBAbP77HY96gdEUoRPdH",
  "key8": "4nDdZtWexLhniqyu3EaSx7ZSW5oMvyChSNc8T3WocmL5SyzKy94xvu7VyYwctsfDukHq3NUQ2WLrNppUnTKXF6iL",
  "key9": "58myYcxnCSWYRxkpsvu1CuysaF1eV9TvR5ua58AZx9RCoStywm7448ymRuFkPnkDx9UqYGrRMPmEFrKT3tnh4uD6",
  "key10": "5uxgPVPGeS1jnDBuq9RA3HuQUf1NtLnfx5k23UVxCFFUfZvqB2qEpkEs2LiUr9gb31uKA7nh9qguCwBNGbNKtZjR",
  "key11": "4xpNToLSrbWkEwcAHwp7Nf2ty3gttjksv1yVg8hJMffyhLQc5UwuRMtX1tAqSXHwkZrD6Hi2YfhJsgTqACZ4wGZx",
  "key12": "4btQQ9hkuYwMrwz5TzrQJPRfg2xCU5bcLE8LWBGZqXhYWgW1DD4iQckvtQcScxtj8iCH3pKavfWF9Vf5tcfLdQvT",
  "key13": "3zQcbpudAd1VVy76bjZHYsWDnj3qGyKBBhSsiVmVb7tefwKVEahTQ1k8xJahF2KtLA6Xry42u646Sikxb3QxpT2T",
  "key14": "4R9B6SW4Tdxf8pzC8kfD1e1MDUBumkYe4iTKt6Nr6fiq8bymYHNQVGTMvAg43ECCjpDZT8H4LD9idBq2gh1XCswa",
  "key15": "2LHHGicGXQGU3dE9H5hqqy3tGiQmT6Xj6G6cCk7JBH4kkLDJGZ6fj4zLV8XAMnJYsG2w371TN2azgLMYMH4x9jj1",
  "key16": "5JQ2hFBjrM7HAS998JpMbYyXYZRF5ByTSRPKZxsyhGzjaUhLFN3UX4eAfwB6KpGZ9eep5FeZMuQ1rNCgCa9r1iA3",
  "key17": "5jjEfSVAKcNLJiXSuKKDCKAnq3nck3HgdTVsjcYAMKPG32NJ54L17K2APc8YmzQpagXeHJD56Nc95L6dmyYpdra9",
  "key18": "4taADwRr24JPrsr2kBZy9HVHXcTYCTa1J25FFoiMBtnyjeaX4NJvFUQ2Rkavj7AzeFK9viuhaYX313mbHJaXSCSL",
  "key19": "46oBwSUn9dcPGKiWPgdJnayR7C8Am2YURuh1gcxoaDSMKSbdqfo59u6UjuKrCCRXe2SmA1hB55Ds22iw7MjgnKEd",
  "key20": "PfYkmxPQ8crqeaaBYTSiwkUt8jwv8PF2LLSu48Teip8iuu1C6ASaGsu8iyxJwNBQDv8g2FDDyM3EYWmQi2VQDRv",
  "key21": "42HTY2x1qs2oaEJvPJj2EYw1AMLQ1oZVQzY94oDGpNxueTR2Q5AENvcVubbB4MhSPRcQibVfMzHewwPGGPhVTPxd",
  "key22": "31TVoDVLBWzACHn7ywRTx5pFvsvNkej48u4WKYKoo3pGFeVxfspUHHPc1rdc3CoGxXodHpnXBSGTPWtDa2snUSzC",
  "key23": "2G5dA21gzsuZDusn4jM4hV9bFTugjTAzuXes368qVqhdrxMnjPFcGP8dDiFKaUSovJgU1gUmmi6fPTGorDiihCq4",
  "key24": "XtR39GuLmRBJ741qWMriVY8fMr5Lj2eVTWWt3Wduiy3eyovL97xMJJ6fYMbLP3U2cHDSdxWCwDLTTAqErEPd625",
  "key25": "32Djj7Gu6GYidMyxJCQWhBPczSri2E1FU3RVtBnPBu4mEmwcPEJxV9vLidqzujYC8GxxoW1G67KaUjvfJ6cQGx6M",
  "key26": "34jYcW5yHCjoFCSrGSnwqnfkNHyQKkUp1KUzgYxxTMwJSX6MeSewUtEVvVFBKnjq7b6NwTAcd5wZxfxotP9JRG8o",
  "key27": "3BwRG7FdN1p9jMArc3aVGwwhAnV8RKrtVWSS43NQj3HwDsTeZthLbbHXQWSAfhTAYxhYg1rRBDZdarjMkYAgLrcW",
  "key28": "2LNEe7Fx8kZXUWbMa8cDKU35ayoJP9mCpUbhCCCUQRcpNeJUxVhc8ZtLcGdG8WvgwxsU4LDc6aR6oHYr4U1k11JZ",
  "key29": "2WBMchmHBb6B3w4B5E3itA23wN3GLCgoD4iakYC1Xc8MD5BddWdsQTjjiTsPwokHGbh9XABzwcrb3uqNq4v1GWB9",
  "key30": "5YbYidb2ZQy2JKgsE8q5i3koaSTsXwHVFzSXrj6pd4Q4cqsnxqqpeJFewrtuAdWqH1Xi4E9t9Nb4GQrkJE8oCEGU",
  "key31": "4nT1Ex1rJdJhxnZ5G4upf5Us75ttCi6SxxubZG4vFN3gPXqWq6CwinvSxfri2hic2gBxs3hFeYgR5XnC38rwAat9"
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
