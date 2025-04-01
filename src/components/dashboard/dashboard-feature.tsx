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
    "4Jp8CBUsQg4GyK7Db7tKvLpgG54MfpKM8ZueATcQccsk3KJkRc7UhpoTvbmLwPS5fvc7RDCiLFBPXKqjLMTPH8xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfASp1DSgZWyfvAfZ8MLeGcu2YUryYMyP2djpWCe3dpLK3h6JyJaVjyngrJDL8BnrX6NtQyFjjnHkxhPqxiNjoH",
  "key1": "216L5WJ85wLQBrTrJ6vcCnPurM94TVM8Y7tPb5VRGoNKJtczJwbG2Wg2AsZRYA3cP6Fi35dozJC3Pr3CZkh7hZtp",
  "key2": "5mzc9M7GUyGmKwiLonpG3NZqriH3abYceZQnq79Npckh1qYQB4eMH2pFjdX3YHm3jKWyctuyqjZSheGT6VGyQbvg",
  "key3": "rDwipYS8cj4BaeSVv9r2wP58coqiQE6VCY1iJVJ6j1kpiHipedgVTpfnGGqzmjy4TjHuPqsdHZWnVJGetZitCpY",
  "key4": "5BTD2mvjZS9k8oiBKKMrocpNuyAm6NFQSEMh2R9FQcK3eQ3tbpveBguKdKFNRMT5rXfNfy1S77vbwpqxaoWLhV2x",
  "key5": "o255uZFrxw4LnGGDQzkVJ2kmkfyQq562nZ5BNk7GE3uxdh9QsReh7THjtUiTW8E6Q72MrQ3FXEHfzjFRWYtZZq9",
  "key6": "3U1oJxyF8r99ZQzFukgEVK9u3ZRKY5CaN7Bb52X62jm5EkMhsazRDbL79qbqx4nf3v4sNSY1yicuYg4ScbjcKUBZ",
  "key7": "3T1JB4CrFAJfNJwYoPZ26YLy112oaX1XmL98nd9kktbnhKSHy51DfRYitcBpj3q5PEvL13GfBcJQ8B1SeCdRH6BN",
  "key8": "5UyoMm2cRLdCVrMXynogxw6Bom8kMd8zpSgyjGDxzy8MCtga1pqwMYc3xxKt4YAWJcjVxiMRownXEgrhbcaZawBL",
  "key9": "d2xEpi61KajTibqvVZaWbmqtnkHpeHX88Ty4vs8btusQxBYiMNjmri6rcYndUfy5ZhCAqyUYScXNPA3mykpeQFv",
  "key10": "6EASHm94pgxAoBw4D9b6aL6TgCmDtw8XsRW4Ww8QQUuuizEMJ9vwCpj43YbhQD6vidwxdXpCz5yHKuE6ZBSm7R4",
  "key11": "2MD4C6Mh9XefRwTnFJ9q6Kk2RYWcoamzXJiWdZZi7pVAZVz6s7rx9eED6Bd8AUvbMbcAykk2pPDbXpnyBpz9ThZk",
  "key12": "3G9mMfd4Gh3E3ZGw9bnxTgs3J4SqpXGNCVgagoPMUaHQ53SDmsTPf8Di2t1H4ZJ48e9Z7LUKfx7bkQZ2qfMfZSvQ",
  "key13": "2pWkSiyVKGCeuYgUJdbEVWf6MD4kskrvQyRVUhhKHs69pDhnQ26bBij379yGXD4u7h1zKabyY9JfKiTKHktMPeaF",
  "key14": "5L47gXWgzmoJDwRMMhfPV3qKibxYn1ShpnyZAHT6wvCY3SYRj2QS2dApBstUQHYfd3LWncH28LgdhCsuq8Sy1V5F",
  "key15": "5H1eWxVYFeFQBE9fCLrqBpCkF8bd3eqowWksvqWt8UFaBLqsyE5ts2kBDrfgCqjUJtoA4bsxwUUhnLiudYxCcAre",
  "key16": "TL4VmZE8gd89NziVsCCp6dfuJ5RCaDMQZfmd8G6mUAUAdrMKZDpxsG3cJRCxgHxZWZ7g1ChdWETb1biX9bA3scy",
  "key17": "4XYHGimfkcwTQ9Zup9M5tocER2FJy3hbH9Sx6vLFK2CwTWkDEMA1hr9MTBfPAWaW7Ruofu3QXQwx7bxrWNUj4Lwa",
  "key18": "5ZZjTfwqDs5nbmRyS2y188HLddGWBGVYipYPadGJ1kv4ivq2EYVBJwizQYqyxbi8yL896VredVQ9dRoajxYfxb5X",
  "key19": "4QChRwvzNbEorJ2uXoe5rERfRq4hRHmjZxhSiWj7UJiBf2XaioiNyJLmQVJWTgELCunESRhwnRPY9Y1P1wZDcPtP",
  "key20": "35D7HobsrkW7cKX9rRpAPtCe8GTMs5bpXpFsdkpVsu8JZs9VE38tkoi6U22tXhHJRuPkZfWLmWvP5ij7gYjwQxTE",
  "key21": "2NYPgoXjmMrCcA9mk8cbjQKXRukbL58mCute8W5UpP6KzFFXzvanMbDDjdAyeqD47g7CeZfP1A5qJ9bEuV88QKdv",
  "key22": "2pqfskdhazMycGQRL7qFjcY6HMww6pfvZigonPjAXyQgq7owrENCjMSJzfyS7omK3pfiCzoyiPRZeSC6LXycXSwJ",
  "key23": "3iKKeEv2SNPjHPbxBJycv39hCfrXmFfubcPb84fsTRDUAugMADFG9au4bsZgu2yNk9Sx6buqEtZxzvNgRqJJ86de",
  "key24": "3Y1dCS5yvM9LteBnyB8BRyCotViqXRmJH7UAWG4rxomJZDN8dW5FvkM9TMn8B94Vb8cRjqGfWx3HHdGKNWNWeybu",
  "key25": "3yithyiZ3Ei8R8BaxgMJX2Wr9uJp735hz1ZbSp8aTPuERWPM3Xje8Y3qDXb1JT2AfPmvnQiv5Bvty62E8httbmYo",
  "key26": "5auyTktCmiZCjM3LhR8EqZJ9mJiNCy3sjq3dXAswgj63yRiW8Vyjyd2t48aujUsrMTAbZ145B8eMTNCJFgwGyCji",
  "key27": "4DECCpC9fSe5FT5tGiUfbrkDrf4AD4uJpm3rZrB5Zb6iKJymedDhGSgKs4WCNVrtPmQ2QkVSa9yonzVo5VK4rbqx"
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
