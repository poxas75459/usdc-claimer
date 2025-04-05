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
    "4SUJTM3uRGSbpZtpUumG4Ruc6zeYDcgmZMCyDF3mnNJ3ciPmo6NJMRGgbLfwy5WvHPMJEjcXr5WaF4tgg8iTZ83t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3stXyyaFPTxWtTfkWcWPj572M1GLxbDQmpe9dFP7qYiXEfABeDFpyMCfNy1JSHzVfBfnJSJmJRvGMB2kofKj8v1j",
  "key1": "3x5capu9QXujH1fuiBTvkVJ3osh5tehX3unXZUneUbsGg4wrhqkju3nm7PX73dpJve6iQVxnnpcJNp94sNUVdrvb",
  "key2": "4kVLGhqCCweGLtih9UuieaUxWCitFxu715oxENHP46e5KHGpto1bCvn1FK2vmsvoLP85cQX3CPvVZruVVTdyVGpb",
  "key3": "37Wv6CUrtzE9NUzMKPzXQ9mcvzUygvhdubLp72KEYku9jdRSBky7Uq3C4zmZm5Rejs3jpuR3sDUrvWQbwsJgBXWm",
  "key4": "3SGa8BXRx6F9TXuda51KUYjDp6pwdLJskzPKdaXhp52ihA71YENSuNpyqLBk46rz2cb5sG93qsxWcV2DNHsfuFwT",
  "key5": "5Sga4LAYEnvuLxZKrKVwSzjHpY3T3j1zHm2fJrmzLrbT9j3EKHhSeCZopwxVogQwPfhqrP2Bd2tbdTYVUgFDFfUC",
  "key6": "Z7ZLe4KibzVgkGDYBvq2RwzzeorzNidTyNCRahv2C4vM6aQYqmfqRwrkHDxTqHGABPKoCVxGbTK9j7GjVhbFBKL",
  "key7": "DE46bnetMmxjJCaF3paDuAcwuFEBWcfvidY6wA9GPsGGNnYaJagKCcD63gnXR4u7hpaH3MRupgyXNyYcm86rZiD",
  "key8": "632kptJbqxYvDLzEn4FoAxXrLnbogwyNA8ceJ6bKXa95LiN7RGWCMf4ayj75SEurjiWF85r5LQ7sTPpwD9eVsY8F",
  "key9": "sehAnmqssXSFZPZerRcyic9Z4QPwrypWRG3we5QAyeGsX1zPxbUkrEctDC3rGVKWayLGBBpqdGAm7qLBPNaP6Ln",
  "key10": "3ZQVfNrctxs4B7bGTmTMKS1Sd9GBdrAzEpv835RDifDmUEUGj7dv4U5BX7LDoeHtQ43fZKHMxvNHTE9agGcvcsg5",
  "key11": "rwuHha99ffFfqbJEgFgh9mXB1XcnwyU9bRj9GV4bj2o5qqHmXrDu8HHkAqjcasTPhJB6ryc61sCG79GbsT8Vo6H",
  "key12": "7a826nqS7DfRH1PxhkB2oEsHmLMmeqwUALTn5KHFHiVvsVEJupyqEhzb1cktuDjQC3T8x9Q8qca3qJXTVXAD5md",
  "key13": "3pvv7esdSxnP6EF5nE16XA1ocRt7ZMPxuuNZSJ7Ro4ghiT39CB6iP13NG5afKVdtL9hsHC7cYZ7CbYBYdPBUdDYi",
  "key14": "3fjLNuENGDB53q24pppdBTnUyzBNRrE2sooauGzmquMnWtMTiFrt8SGbJRSBFtiJE4BzL1hcPb57bFXyEzBUKLNm",
  "key15": "5n5S1J7XpW2rNkvi5TLHjEiqRg6xEnjhcd9HqWb2Rc38kKBtWJZwPWTSTPGD45tWuCzGke2Y4ZoFSmTZt1YRg2eJ",
  "key16": "2xDKqZsZuhZJBJ9D4uQGejXgTqCnhyTBWkkUZjraknqkaabec6vcUHfUmvYboesweGJUscZwbGGhNLzoNxQG324",
  "key17": "4mSwY958ha99KdNSk15YufZKq2E5HSaxGRgoQw8EC5j7H2phrzVPqWzuxWQEQ4CehTk2tMinkhCrth6gmb98W2QK",
  "key18": "2myd74PpFgV58HQA7YtP5mX9R1xLRaSrpQHnXYb9EcmwyhozzAVUHfs9Cn4WTmLNGVAPDfis3F4ejvhkWcyCr1qh",
  "key19": "5AaADHYFX43YciL1FCnuKim8nVKWHAKQdYGY3L13cg1ViyjPvqQ1kSPsCtDrVXzV5aE5rj4SnnMKxkRhBdt9Fkht",
  "key20": "4WAZayMPdai4BWUSnpCY9sFvnFax8WYHTGrCQhcjC5zK2LymDor5HrVJ2qK9UvXmMkLz7osrF2SUkHv4h9DNkKf1",
  "key21": "211ucDA7DpfchEDwhCMcdDincQjKwKFjNoTsdkPdDbJZKnqYx9evfiFtiYWQ85gfTTVnMjek5RYW5b5kvt1QWWS2",
  "key22": "4uLnaXD5zum4azk5mVbx5FZkT93KgptveQUSjbBCaYrAPWFEpf1Vv8pBg4eBBckHzVLXNDX2FSDReGaWV9VdVq2s",
  "key23": "31gtztFbpk5nAsTRrJfxHXooX98WPV7o1gNncPQJckF6RhDkbeu1BmGuTh1CZ5AfDgU724Zf6euGMeaoihARuERN",
  "key24": "3YEWBgiTjGHVTDJ8JYQgtvHMuYe3E7jBZNP2KhkQFe9fDNW6Va6gxGEN6WXsAGVzXgr3soRm3m3cDvnCxVfyDWd8",
  "key25": "3ANqwc4LKvq9MdV9j7e11RRFpHbq7SGRCBxPxEk8kKHpN85f7211Fhap2XHv5YLB7U7LNSCc6eB27Rnrksbhka4S",
  "key26": "48yWU2tp3nd327zov794UzL8hWZi464xvgqnAJzwMYSznLaCB3xN4KZkWJ7HfRnr9b1Zi1GUzyCV4rxeuY8o5SLx",
  "key27": "2QzLVxJdFi6D9cizVHiwmxhYhEwbQ5K6phgqNfsuHK3j1z8oaeWqUrBKbJHM1ihpzRgKWcu8BAWam7bBEw1bCrPa"
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
