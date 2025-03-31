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
    "3u7qB8hHqhLDaKCgUYu2tCqJjqaExYd28ZTzai59diToxwkJnpYWfqDapcRv7feYs2fPLVVv2ivrqE4i42j88FqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMiKzk32ydSkA4FeytPzgnsJmfXaa7SJQdhvkXGo6f1cqUU5APQA6aZLZwv1xjgb9Zv6q6jDLrX18KGhCQjw4aE",
  "key1": "45ZrCdj1cY9k29tLqKd5ajp2mjXaQSF3Tvzxkm3qg5PonRj8P89cC4vqVfuM25pDxvAzM3VmqMmLU2JgYUb63Voa",
  "key2": "2GG2ZpcJft7K6vmcg5aiiZQrYJZ2C8KkXGEXFuu3E4L4k4FavojLvfqVpoArcUZ4pbtry1R2tSCWYsWaLDoasBv9",
  "key3": "48ZyJL1iE6KoVYpBo1YDekXUiAKZqaoGzuW8RmWHtaXFyUSxKsyiux7PEabTqymT96eUSv7JScSbWG7P6oLnXsfs",
  "key4": "4D9J1okEsxYrWq21kRNQU3BqKDgxFJJRGtF1iPSZrgWpWNQe215nKJWqo7muKSjZBoLQH7Pk5TyjQpRcif81bkZw",
  "key5": "43han8ZGu55rRrpLxGx62FKKiEoH8dEtX1ikCdzoUwPhMyajWj1jJZ4KPuQ28cTr1uvGgCGzM9A19qxk1iiZMFbt",
  "key6": "2dgN5iP6Bg4d8GXih5N5gFuwoPVyYePiuyHURsduxuq9bZuTC5J1WzRh23hbDZVDqtCsWnzSKj764diJGAoUyEsn",
  "key7": "2bhfvYWfvpDxMc9MjzXAZrpb3Gf4MQbuE6MGGnjBvGS4xEKgZsMnzmsvU1HC9kNRvsSTKxLkHYK1YWgoWDWpvD7J",
  "key8": "4vBeetVMamgZwue97tAG7KMGGUBWTWxncfVZEafWSaBJooxr7BQVpEvu1LPXv4VAvDTZZ6SU6p5DCUuZwTvKP4T6",
  "key9": "45VEQNSxrEETHydFDXRQAuir63mKand297cER4N4xE58kRxhHbtaBGdWkgwgpYDxkZh57W1u3gRsgopkge6mwQGT",
  "key10": "3EJ9a1Uuiqu9U3Qwy8pjmH2Kbpx9EmgfRdBRWVVBPAhTbVZBJB5mgJfHuQ7bkSU6sTrPKKaANMMrqUhSccHkw7Cj",
  "key11": "3QMCY7qUdQg7w3gdXMQYibYMmteVQTNqqChY34dwv7rrzGByJ78PtbmtnPfCZ5rj1hCg2G2rE9bWvohwhGsmkyVs",
  "key12": "39yTJtHevfJU4VPaCppoMLfnytGsiBTM9H6a5MvwgKuwSS57Ay9aNL3mFHPrkLwS5tNJpY5KaDTvAtzjdLV6tSpM",
  "key13": "4mjhUEUcFumT3bXaL5P2fwb8aUNDqfBm6Em4wG8caXbCQQVQXSxo5LfAQ8g83p3oUkapqCgxzsotsA7yjPYti22G",
  "key14": "YrU4vxbJdp6Qkwv5tJd4dPHdGKk6X1XM5CJW9UYgFSkpCxujbND2Zv5jgABnw9pL3Vkmcx2JPjKD2J2dbqmH7Ma",
  "key15": "L8oTDMpKEE9copffKc4H8jhBfo2GPksZwE4jufCxyDh6XdzLFJq657LVVkQu2Ni5J4c6B4vnBifNe2PBkT6pg6y",
  "key16": "3jSXpp6YJwHnW8dBrjgxJWt3Gk2NAuRBVe5UC2RQGFYCWaP1EoFsDF9MmtfbCTRoUUwwSCt7SD4B4EdEx3CijKes",
  "key17": "4Hazzq9XEubgM5jdYnA6p3PtPbfBvNeD3p1fFjrEwViqUE646duEA3WvA34PCUax9MP3MWuAXhCLJcFKAziiC5cb",
  "key18": "GYHrUbsoZenMm667i9hkojA34tN1YPA5EzNdPgvYPWQxeWvuabfPMHcgb9hPEGieDKeFVYPzPJaeoeGjowvQsME",
  "key19": "2CiNYGUabZ2whACBP8yq4LScvdT2Cib4TB59kqNGTAPKN46DJYchmKSDfJkTAwoNrM86TdyTjgR7rjEdKKyXpEiy",
  "key20": "638PRKcgXWSNsT7xCHUtXnR8SoBBRcqcUqdbN99RdgPutXGwa71ZWqEvsb8XCEUUYwjeWEKbx9zVnMFKR3arBYqH",
  "key21": "4SWTD3gNsAcJR5vjhim149aRKhJZ3cYWHysgJTqFzoW9t9Krcxq261YCAYH5yD5Tq7WeHs41j47KSuQtUet4deNN",
  "key22": "4YQL7Cf2ux95RSHxkG5G1ZvQBrVy5mS91iuyi4AgCdg4xNmbEeExWrPWRqt6usVbcu6NqjfA4teCrX4a46xyngiK",
  "key23": "2hJpqFRDkGEaPuYwJmZzgBsM1anK4J7GCysWwxH3aequHWXmuWVGfUMrmiZViwWUVWyVfuAi8PGkYHXK3nCvbw5R",
  "key24": "3XqLMs73nDhNDeCDnSsCMi4fAcB318wmU2FBYbCkKCHBNQmnw4NrrhBbeMGWXVDmEmgF9ZA1zPNqGGSPQUwTCQYT"
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
