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
    "5AymhWuks6CY2RHJVcfqfUK2ALWAoU4oRssmxFwi2QeodkQtxaxTeNYPxazNAXnxVQuzPaFvjVkDJba9idXe4yaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9FJJQ4jx1zMEJx2pmmJVRMeLadp1aMScg4mZDePd7W6Q9tefsJKtky1kc7gLVcgbH1CWqK7DHKksDb6BwJykwZ",
  "key1": "2CDzKwmZ3M6PCtFFpeRtFFx832GujEqzqa2Po6gSwpMACt8cqoAQjZszLxtgQcugfrXxExVXjfpsFiqCCjpFWPXh",
  "key2": "3AXZ4NHW7zvwr1wtyMKz55eqGZWeNJDdGeSHbAZzVdTVE78V22JAMv5cs5nDQMdJY9qG2Q7F4T7w1jkiMVb5Wj3U",
  "key3": "5XDjJ1RdnGAjLHe5Eeh5Md7KsZgfxvPxjs2jYWaZkBcptVCuAYFYLfeSNyYsUTmS1WovBKh4zdi67qNqDfdVpKp3",
  "key4": "5WZ7ybPWuWCHjXCeL6r6JGbcA1CT98eHHPQbEFuGoATvxAWpBjB76SgSSAsdb8w9GvLKLTiC5M3J9tVvmFzSyN53",
  "key5": "4mPus2yxHaiGyoKsqHgZoUxC5cx3CB641Y63ic9KkxPM9cp2nVD71NZBZQTiBWSvqmHA4P6gScdVbuwGMsee81YZ",
  "key6": "54QpkUVuDrDgKonguMGtPqhUahumnaXd7MdjRY8RMFXMrTtjYkbLNPA55s3dufopXoKN7JggMzzmPb5aMRW9fgrT",
  "key7": "2Zno6b2ZrPbvb1K7NwxYuZhfDyVGviAEfCdaAnrdFutLLSfGuW31uzPjW3vXfcik6z26R1RDTigwcH8RBC9P3PXJ",
  "key8": "TEQAodJiwMhFyV2CMmAwnEeWdZNnqDYARQUeoJhRRfbc6w5eNeMozwBUoqpTAys63ajcnjk8o7ofA29EWGjVGtY",
  "key9": "QtUyt3ncoe3HSZFGMRhvD4KkBjhijifpShnVC3mzqSS2RKosMYnQXX8KkfsVuAewr6ZZGAwkHroPh2kKL9aShm5",
  "key10": "48RZD1BpDXExEV8NcoihwrKduxrZ1tT9W4PVhfJuvXCrh3b5ComsYaj1baHmiHLLhVJMRPTmKKBqjZ5RKG6draSL",
  "key11": "qEZ7VWJg2QrXefNVj8ZadERJ8Y9gRZqZeeBUoSqti18SHGsP1aJFsjYRu3cTwLLfet7E6bXMjVeHLRwA8eK9ECA",
  "key12": "3GYNM4iiMwbLE7onVgkxe2VzAb7XqBdcn4Rgm33VEwq7hhgFG9uH6MfdWv8CYEgoUtkuC4UTNmUt2kjEhsddEANr",
  "key13": "4vFxm855htaXYDNNoF6YxyAG1voFFQJHRQPEGUwy8ospFsr6xQfi6fPxKK6USp4FiKZK93ZfQ5Azpz38axrg7Ph4",
  "key14": "5x8SMQWYSEQ1HifcNv7MC6y2avqo8HJioEdFvssn7D31PHyWMd8GjD6gXMRgDMSvkDtmjASnJsmAN9pKi321AGKC",
  "key15": "3FnQB47FYNCZ9sz2BsakzbzX1VGacLGE82WGE2buXGDDtuFjjcEsGQDuDTguvDWjLQXG2mwenPAjMg4DqprdC5DL",
  "key16": "63r1AyyzRocd2oF6byXpKjanGzdD3b7etEauggTWmADMoH3dXun9ifobsf6FCpHty3Ms65PzXcZbdbVBDY6pjnK9",
  "key17": "57kyns4aqTGrf6gqjmKVqsUZLCJykvfbgBeMegFLeHcKAhH3kMptQyfmYx8efcy1sSW74i3AypBnmsjfqLA6AyNC",
  "key18": "2jratBHcogjkTzdsBMXV7JNSGDb7mftmCWk28LBeAsogcTHRsfoWfHu8TpYJREKbdpu7Eyk7frmSBAoh5T7W1spN",
  "key19": "5wxZ7igwav6r74k5JVUNKpzaqnfEeS1CEBNpP6hA5EVG2Fjn91nf4V79J2PApr2bFkxXGEwq5oxBfpYDE9WvDaHn",
  "key20": "47tqL7fiLz1mJZoVe8XLaBGWeqTK3pys8wivXUob4ZCdPkAyna2SJbKqPyrxtzPRkcHqqg5jGgEuti8YEf2HK84W",
  "key21": "j1u3jX1KVP6yZ14SNxhtWUhdCDMJBmUE8jEVyyUK7okURLZr52a4WAgMdVp5ADRHbdCCe3YFBQ6mr5oY3EV7bL1",
  "key22": "adicp2mqf6vDc8aNsevohv3nXKqhGMKhSVXhPPBqwt8tqQ2CWJWKKLukEUsA6q8YGNiTPsrdzJAz3t6juRJA8eB",
  "key23": "5y2dB2SLiiTEUEmSrmsEPzKwEomLJGwBz9QGWbqUvPUwqiqS1xFBgM7Kqg6n2ih7jRcDMsAJce8xV2zdt2TfSiuS",
  "key24": "5mNze2BYxCKc3cpoZrfhHX44oasgGQCfW8szaA9YeCxfxNSSkWrGV9CwgeCcof6mHfXfzK8WViSxSUUzU8SfRatM"
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
