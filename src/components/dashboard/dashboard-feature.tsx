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
    "5bPJSG1BeaScaqsW2SPr2U5XigEtDhfb2CNJa1u2uriUR1jeL6p27brgJtSR9xDm7icc24WRr6ZWjBNjc8mgXAV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rjztSTwKRrJvxNGjpUqttc7sJqzJ1prMtZcXBG4YiYAuGydX6anbeo2ywMhH5GRsZAowq6GexzxfBxxKhZtAvFL",
  "key1": "3tRg6MnZ3xHZPjj6q4Q2Cyp8UmdQkKjEJqfiKcaEiSEapc42u6TAkq6wduUJZgDgxDhgtRv8R9w7ZGqgeRNpnkex",
  "key2": "5ZCB1wGierwVLWX37MZsJGf9Db6ecCBbfB5NRFE8HRHYft4qxpXbkL8GoShiTw1RbnPY7jXtirpGrdq93qyNfwyj",
  "key3": "52hakGFRFonRyfffudwYNdAFkSqFrLuvuWs7y8WYt8uWDZ5aBeRRBHgQFHeaVpg9u5r7s2vrH3MCFgoTt8LzD2i7",
  "key4": "58xYm1cKMEHf3q8XmNgsRYchexr1uFAc5uF6GYGjY1p7rLLA192VgAviXwZVe6C9foihoeDpGumDuy3W7iQ9rgtv",
  "key5": "rUYkozEqASyqWAeNn7iF7nsvp12yaWkwajdg29yhMfJ8MCywDMmrpTULjdrwWqX2Pu8GVyGTXaWh8RDjLjTx9Vq",
  "key6": "2PVeqPBN5KJTEYFndmr9NjodTLu7QqQcG4dq1hvKDjR6zCmQYegydqFJ3hkEMoGni1bXVNFm3WppZQYF6c3DV9XQ",
  "key7": "4vtxKoexDGAfqV6ZbQ6UWs4WD4xAaByKkrNYnVmWLNo5mQZgidmD9T39kBFMQxndk13oCtspXpVGZQSoV5PJGHaM",
  "key8": "4GoLoDa9QFQs5sy9VJRpeMY71ZqnLfKnNiSn4oUYFwUaMR4yLS9mZh9hwSwd82LsFik1VEJTcLumSTBV1FmaCw47",
  "key9": "392Xw991pEH2g9PHvN2uxR2Q8KPE1QuAwcKi5ZM5YMaJSayBYdGCp3RXjq8UmxeWAcYS6qEN88JjPJ9P5sUd4eeb",
  "key10": "33McTVxXiYusCRS9Z5biDvWV1dgZTEfNdopej5GFhEHaGTP4c1ApiD6K4HqtWyj5Ku3Ht9avmntVxhm3pHMVcNgZ",
  "key11": "jrCEnscaizjVQXiL4dESpctRxEoWFVhxoGEjmRzMUcjnsFnKNW4JKQy2vFdHmrcCigYH6J8PHKkY43d65f1U9MH",
  "key12": "2zVG4TQ6185yne8uhvHpHsxjiGnCRfWfqpNBQaHP8YWpswVvh1cZtRg5JHFfPfvuL7Lvdkexp6AaEU133tz5iAGn",
  "key13": "3bvW9XqJmbzfadq9s3mZRHsv2oU4gb9yECcmBN4fJG6TaiYEigaJqgkrESrzKknZZ1ygNihRV51dXmPDQve4jqi9",
  "key14": "5jSrpSpfkzHtFsT9SMqe2b9wJzHihp86ovsaMGHraAq9BY4AK1kHyReouWuGLJSEzAHZJqUe5PVRCxR1PV1Ro2mF",
  "key15": "5R8iXVtEFSbhKYU4zp9eqoHk46AU3nVcmmw9Vc1G7zGwMrsRNDqwuXtCnqAvQW58pCEAP5B6ALZpDHXbeDJ5tPKb",
  "key16": "4H1JKqRxS5H1b3aR66GZH1G9NaeT2aC4GRnUxxuzBhwY5q6vFRSh6bC4MYbckqeqW1UPAZQS6Cpsnpi7G5h8vGds",
  "key17": "25YkXNfjSWLi7C7JggJzu9WzGifxcQuHbbDWKgoaw2TEzQLGd8cDTZsYJ1XsYauxQZDsn7x4AXDgE3rDxLdYtdiZ",
  "key18": "3DU7fvin9LpMQgxXLAo16LAdGVjx2AnfJNdPjPidZgEd3p13mXu8ic9gDnwA55aHnCwEp8rS5kqrqzDhrSVbuvSr",
  "key19": "3BMK8X6wm12ozUq2qMw3GCoD8Xq4DsRXyy7qo3M71hyDF751mkqoByEWB46oX5RU4fCRxvdhV1e3CNu4v7uUc4CR",
  "key20": "5AKUfHCEof76EKBr43JcW5snrUTrq7XY45i3QMpd6cF1sBKrV48j5J4TmaC1rYj7bgEu5qjbJZQFHg1wsnwCM8JW",
  "key21": "3itCaTRnEkhv5jpGr8A3n6mfKJhPW3Zer1TaXAJBtWKoSuVxJv82rKms7yqEFviqBSnphSUgE3YVMVjLwyyFWfZY",
  "key22": "2aKeT6WEyDPivPTgyEKtABmjjqoewQV6CtcDHyRtubhFRwZmQeCHnmkV7Ccq8mPaNPneVTR3DD6558Su3hFNFwin",
  "key23": "28UuoGrJGyUgTnUn3dL5JxfhGLCjfP1zydpA75C4arS4esL3noSC1jeciqXUeHdKS7vSVLtFZ1Bp2RXvDWmZWbRX",
  "key24": "Lm6z18qbCFwWQr7vBDghXrVsTwuzZToMAwg8ax2yhmCwNRPjrHFoniHuH2JLoEbXRRDQYhUtro21Thp2wBzbcDV",
  "key25": "26VUMeaPcCK27LwyPrZGcTHpdbiwRREAVFrLWp3LLLvrZwfHXF9QypmecN18556h1rtvmRtfSrfRVH7XVuc2bnVv"
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
