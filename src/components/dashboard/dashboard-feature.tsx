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
    "4GTKkYdVUZAmmBsWTY1FE8v28C3gnJxbXzRiZf2eWvyXd4ZLuWNQhT6HhVGLqHyPdZnPaRusmew7ryd22ayR32pP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1VmduaiqYxTHviy61ggToPCqeQzqn1KL9CMGkswqXVbE5Yw3C33AG3byGqCJLzmKauiXDWmbthfUnrWrEfGU51",
  "key1": "wzsFuJhiaKQMbqfPZPgrSh3osRC33GbeanngFJGXyghZAbD8bdyhNfrKUuyAp2r4Yu8wJfDUre1uZHjxs8E1jfk",
  "key2": "XxsiPX333nEpSqDKVRZrKAE89is2mGhdGatasxVV7kbMV6jWnYiXFVk3U5HHg7TP9qfjpFnbYpyvJuCUpyEzDF9",
  "key3": "2jYWXJL8SbXY3gx1pZCWJypcEWkeNGY7u1yDredBr3JRmNg6NF5GsacoerHdCx6ekc67iQiqq5wfKKA2fYfQybE1",
  "key4": "4YuG6o96zb9vuzA9miUjb7QShNcM8jFdPt7p71FtxV1jxJv7JKR4JynGGCHFZJTgWXKYwtzPWHMwzjke9y9XUUv3",
  "key5": "2UAxBdZ8xx1sri94hq6k7W9pmpdfRizqML4U6GRAVCX52xzY8kYARENsAcrCtHUZGJ5iUUH4grhUjmkNipLoRrQn",
  "key6": "3uWYsrRwtjRcwrwgZFyjgd3wwa8yK6cJB4jcBX8V5dwkJ4a2QFDaqiWR3GY7wpQS9H8KcN2K7mDWGDBTrqiNoW37",
  "key7": "n8242Mw4MdgY24ML3vGssxS7FyNKLq9FKULZAHTF4Pusb3BxsmHtctENGRFsRJ3x1uQgYz3isCE4UMi1dpa4H6J",
  "key8": "2H4RDBGGn9Zr4RrFyq7X15Kn7CXF6Mx46t4KEa4AAtDPvuDztKS1K1k92DVx7ZFK1ZPA9XCEYagTXENUA8zwUWr7",
  "key9": "3VwWahHXtLNXLAP9WGFUAoLPQqkWmAf17KvojhRL8LjXRpuE5wMTTgr2VbD1wmoNnspCKSyyqvFjAiSKmaNYVwDr",
  "key10": "2Gs1pKR6VXvaPz2WuhJ5hck4P5MxB9Jf5YaiKycXcPh4rUxEuTtf4nnumbVpmdsEbKcDYj9CDvrDjj6hmczpshwC",
  "key11": "282xLZsATtBwHLA2FzuyhH7QnonxWPFXQth7uRLQnE7bf3aBmrCi4c39SrbaF4R7kLXh8nwacbcUFYB2VLj3EEPY",
  "key12": "9FLD7aqg5vSZVVUKHP4S5K9BcqHQFJspWs822uid7zqQKRuvxhZfyrBXDJH6EpySwJ1J8TWVnyw4kWGydPhvqbF",
  "key13": "2scsD8fAXehH6sa1Twggkuct1jT8cxY1fFmYQf5sxbs1nbJRU7ukPDrQ4KiAeXxTKSNt46qp1e8ABCYc7iudkosE",
  "key14": "5kPKek3HmCQL677uVp3mKHrvtoenqHwoW2c5oo7o8LDWaoj5H6x239edmQDdXUz56KgM4BvTXMrG2QfoGBrCY4rh",
  "key15": "2fqrBLufJaL55VVy5gExn8yRqVoULWuboMboH8vqLBEqwT1R3MXaM36uHi699bySRCLdwwiYZCMjpL6Tc4mQVTk1",
  "key16": "56PhKxFC4hzPgDVcRe4mKo8gLeZZHndW5MTny4TrwcgZu6XRSg8gLpatrheJv7qTcnvbT4jAwKFhSH7ZLHhQJYjb",
  "key17": "3sswrgPh6ksu6sb92HETZPB8aBjQxb1YNZzbAswURsop5T8W3XPSPvSTa4CfPELZ1FPoW8dQKSM8KfroFkRCo9vH",
  "key18": "5vLTQKW3Z4HyLq9SVrVGoZCJz9CaWE3vcZ4WvuNGSFDQyiTfrdqKYrnMLnxy4qBiuhg96mLqDj4Z8M82H1x7fzoG",
  "key19": "37Dx2oFs7ZKPA61BCUg3paqRaJE3934pvFRGYXpbq7ZNwXasT8RaX4zEmFb6wXQCyKQJwKjb7sZUA8iW4GgCz6AG",
  "key20": "64DySwtBPpTnviUd757dC3bFFLUejgmRyYDyegKrbp6DAoEFEHceHnzTMGgXu9CGgWnf3p8XARz6X9c5H3VLBcfj",
  "key21": "2tBzVtJ8Q6pFPLKzVe7P6tYf7biqSStzNXfpVL5e1EicdgJuLhKKevNQpaAS5gbRyzj6q4vycNiyCVPHmoudz8tN",
  "key22": "3YJW8a6tsNry7eztrwt9zjZBcwtFhzxVA8r5aBchHMTj883VFLGD882RMpG438xL7DFsYhZS8SWhVtyDHD9NRjQX",
  "key23": "YFLRjQjRCZkqvi5ZrS85FYNHGUcoEnsqsArW2E3ERcwksqNhwGchZDUECyLd4t8KWiUusHaVUnyeYWUJNqJURnM",
  "key24": "4fcgrmUPTTrAsH8bJn6CfqMqdmH6XHWGowrAGGXiRdmzS7FRcUMcLsFZmKKt7ctWFmtxegY4N5Wei4vgTgADCsNa"
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
