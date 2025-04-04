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
    "3v5zooRqrgnMVCvQ96mqAgGoNzxyFazUN6jMaySNbJeGWED9AqPDAkp38Ta8EkJb1eWWYXtrigGNRAWcMD3REv51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SoUTAUD3KVCwxVi4AVwnkAzYSkW8QMuzA1Qr3LnNo3DKnGAercJaBBDLBzfkzJQVnCPH7X6CQD5njHsVjmUg7SD",
  "key1": "58ryKue9sgQYwefMECEdniD5xsw1wp7j5vAAQpJreBkVTvCm1cgwg75MHQMF7MhMrv3meYYuWJHBnET7BjpXJjAM",
  "key2": "4h1GhiJTYpk6BiB7TWoCVe7YvaYAu3uUTSVjCye3MbxMEDApg2hg7qnwYnwpFewmWGD2tooaSZigjjfSuHhoLxHX",
  "key3": "o7mXzdV4eP2uUyAnNCHUHxPXzUqKFAN4T3UMQ6VCVrneuyJ4VCKaBsjddTR1CrKE2jHg8enhsu5Q6wfXgt5ZnJA",
  "key4": "4TomjRPL4AqCEXzeHvW1cj39NxCdjTfCJTW4GEzcTxkHM6sHixHaCEH1LEW8E8MonADXwgvt1NLjnDbgChnrPWvR",
  "key5": "3TviXEsSJigSw6ChKC2Ep8sn9DcxgG6ChJDP5ZeEckgmFG14XZsnQHojvPYTfSsDfoKiEqzLDxoTypCzKyfz4a2A",
  "key6": "jBGR8Ri2yyY9eLw5iwdwVPoe1k3WVy1XjgwjqFc26MRonNUs1X9GBBEPpPhTqB4v98Y8ZWoY6PFfGwxqrDuJk65",
  "key7": "4PQvKPBcUxLqSx8o7vakVDfZ1j3vgaZu118RQyKQx2kpqE4S5nZzJQruRB8m8oDLaDWcB38eBwAqKbkRomJSJiV8",
  "key8": "236VvJs4R2Ax2qa3cQteGgPzyNhr4XVZJq6XkP43P8RTgvwefq47KezSNMkZAmypCofyHMmRKTp49YjinjgJgDMk",
  "key9": "5sHFbhjm9agSXzY8icAW8WDR1BCe5axuw5cdbxmCkCbNNGVysNksekFPzPi2soZi72zEJvPEhfupWg6zVp3rwFor",
  "key10": "V8yCHWU3WnFqZYgSSpLdHbFcnVcg9m2MYdUbCVkDSDiJdWF9jSz6vRU6DKoXQMd3KKgG9FPjrbNQtfPmULTduEv",
  "key11": "XujD7JqiV8YU9BpoWNww3aJTMwyZsm2VPPvciZs3zktfdGznawVVmiozpJKoUcysAdpzx1HkE2TAX891U4j1DhF",
  "key12": "2N8TA5NQyhYpZJkF8RrLXGuDFTJr29y2wG6Chgs14pJkVJ6GA4RL8AQ9LtDR9m6BsAYsZa2VW94wq5pSCWHYVW61",
  "key13": "uusx34rfpf61X3yFV6Ph4gYc7djvUysaQk7gVin1oCu7kLDoScUNEJQGe8EwB9e1caBUCBfQdsH4k2XdgxNBdDK",
  "key14": "62BHv3DdRXzHb4kqHZ8QoFTonW4qXMnSWQfAmKqDyRSTJKWqrRDVx9W4UG72PusXMY4pRma8jaGFuqAczPQ7eDX",
  "key15": "3KyEHpuhj5oz9DnAwNMCK3z96eqJNbFuxeq4XJcNtUQzPFaMrjc1duWTyfDqCNovLysE9D6gVS5fANqQmmDScPKy",
  "key16": "SfeZbAhfySuWkPRN9dagnVyEauYKXqpTXM3qogU39xyyCk8dKYbe24QUfESsQhVwNn51KPk73kmtkWijbGNYs8E",
  "key17": "34Pmd9DhjZsJoPLNYCtuej315oWvHLjJowmxcgvxMNooYnZTQF7DERa227LUk5z9187jHDfnLfJm9AjuBZyBqQvQ",
  "key18": "3aEwojUf8rfapiU4qm1eLmJF9RFvspe2QSf3GyARrLbwa1XmhgeLk2h8BPXsbfmLri3Ffj2pWiaRyKx4xQ1Ld7AQ",
  "key19": "21QCPxQWaBwHiYrqJWagHiHor6P2whxyze1xKNxqWbfJRTkMJJ4Q766KZkQidX4AqQN3hpxySqpA2GPW4nhLPUJi",
  "key20": "4eGwXExokTu1cmfKZAKGxshb7LraykqSnoKydinucGB1a7rUQ9S4VZfBDD1GMYSxGrK4yYk1UGJdz7fBbAxW8pp7",
  "key21": "2muDTNV45dTui13avWG8kqNhUApq6ZxYzvAYYz3GEaubLS2YUKjayZushx1JZGtjmCLzDWLTZbyQfFvsmvxpngVd",
  "key22": "5y7moQ4mQsqvC7BvhF4XY9uz9fmddnfMT3UaNfafXvBdnoQZ1mZDTNxRYrgHjG1vwMhnAGpeWPkwVa8AbrLXe5YM",
  "key23": "267Pg57ePV45kfouqnWoho7XNQxnPcKA5ScyKWNJCLsB574rbRzNkHuoPCtkXHzkkZE3T7iitpQTCUYPNLxfebDy",
  "key24": "2QxdEwTuDYRX1SREkAmScr6j7XTHcZHacZAqjXmAzoM12naLHzJePtCSFTgfjCy7ZQHKsXPZ5HZdhks1zoXZTS7L",
  "key25": "3DMdnoSrpFVCphLVSYTHuM7oNKa5YN8ebkaFDRgtGkvMnfErMSBj6H7pKoE1WCQVCaSYoRztFhBGp91RDYoJuf8F"
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
