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
    "2MvRaUxCBHYBAPWh145cKWfE6JpXpaeLj6J9LVtKhybd32eb2mk5GaPehnWHwZ3GZx12LoehjD5zGkQN2WVqct2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjbN6RHh1LvqFjxSHCbnqdesckyRoVA2P7zmB4oV3M8z6KmpsW863MUSNbd5UnpeBG6V1qViyFKXJQAMr8XzrSS",
  "key1": "2MkzDa7N7QuVogsxwSkMnuU2MJnMzaQGAJdohMCameriPosWPHGw7ZDJhVsJfqAhmAsLMCdvfqAMMz1Z2nNn6F3b",
  "key2": "5eazTXrvAaBa8coJsR3HvmJBC2B6kDs6cuTjt9TdwBnddUn4gqd967ZiHnwqokjwjcCu97ho7Dv3jrbZfA4BN3JE",
  "key3": "367c6PLQisQ6KykppeukGd4kGWhV7eUfnPYg3fQS4ZafpHmJMR3hyS5rK1MQLEbWk59yThnPZeC1myinzxyJWb4U",
  "key4": "5j4294GCMiqYuTEqWMo552ohBxPAGxKvYQbwBeiNRtVoRjTpcvCkQfQpDAysGvVG1rtqfNnTZRAy1tkLnahaVGtc",
  "key5": "4ZzXg9QHn5yB9iWLxWv3iNG5C7o5pTYZ9JbL5sKseQU4KhH4ddKgBG5SHdGwLHkTSN9QWr56DayHDTGUSBJm3ZmB",
  "key6": "3aij9t7soUDxzsBX3n9kcqoXvgutRWgaU7XYDymXxUaNNmLkuduWTzQBbmZbZf1ZgQEG1nfBaqn9zKFFPAPQzoPq",
  "key7": "4TEqPGtgdFr6MsxA4xAxHVhjoVCKPohPPmDkh7YxC23A5nF3rtYRAXC4p6NVa2zvgZEZ2Yy5vA6MPFn1u2Bw9XYb",
  "key8": "4xTccdn4qXg8363bgEaRDPEtoRNNP5CFQXkt3YH1FSzLgHBo6bYNEk7VAkVEP7WC9TBJD859UAj8zamLjACaq2H1",
  "key9": "tfw42pTcT8vHTSsyvcAqiJCc85hW7iYJVSSRBEmUWerjCdavHmSuoEgHNREKxKhLX3V7shpod3CSSiQxyABDK8t",
  "key10": "5cte5esXenJdsiqPKvtcKkczJbQhojqGzwHHBSMeDRVvvYjpSnNXRQp6TDyjVvuYhJtCDbfrJpejG9XvrVCean3e",
  "key11": "2MRE1yFDaUH8TLohm6zuYo1vijJR3TvntB4XzRE3ZWj1Q82xtrCfAk7xZfHgKmNmTCpVBz8iNKdov1wApwz7BmEQ",
  "key12": "5KfXhWkA9WH5U8u9BFXsbdCbrJ8ygJ6SGkJKfq9Drt9uBw2yDhd27FBYrfH8RczRWRVExjCUn44rwoDb87D1XD97",
  "key13": "51K6HQDTBkyXC2FvxZYE2ZPWDRqajWTssJSE4RHbNWL9KijbpPtAUaQH24i3oUkzgHLr4ajtTYBQk5skBhBhfoxm",
  "key14": "4iTuJcBLavh3tofqsDjrRmEiUMCtDMXqBKvs3oPC2jvZwyoeaLy8s4uaegydezZTNtGqR7aRnhTarR7smRioYGyb",
  "key15": "48m6qxgfEbrF7WKMRB9kCmWCL2UQdxLcGLJzPvZXrz3AXoryv5Er2c5sjQgxfss3DoUHgYJ8TFkTirP3hBUgejE",
  "key16": "66XDXNnQMJvYRxuchR6CwMENcbgBcteUUWmh1uAELbspiUHkygDXXq8Cpw8xicSoyZAAwsGrfcsYSuv4K12wrd7Q",
  "key17": "dYSUp5yVmnSANV9RX4d9XPWBjpbtVRKX5Um23LfLWBWzPxqPWnWbfMSyPygpXsF48xMbxEtgTDgL3HNCKY8Uk6Y",
  "key18": "5Rb8JsofzCHwXt5PCwnVwPpLR9pexLewiWGFfCzaw2CAe1kwYSBGVZG4D1LrXMEQWXbRbVML7XCTvYzgTrH7LA7a",
  "key19": "cZSgkTWRqSyzcFd3n22NBB9nFSW7TNCrMB8qxRxBkNiG3sN6f9pBg4FdWDJU582eq7PeUWmL7BaNzirAkLfmacG",
  "key20": "4TJkc7W2FwAG5qy4ZJDHggnf6cEufaZWxqyY5QiG78sCfLZcUgT3jMdDsL19PtFTUj9nqnkCjv8aUW4bVhPL1b4F",
  "key21": "3M8HFzS3ktfh8iTshWeQrT5CtcXriyvko1PTQVuoGaAP2jsDoSGdZ3hfF8w1kgvQ7RQYc5x4jkPF1ikSdgxTgADE",
  "key22": "5o3Vx5qLLAoTkFp7NxgBuUmxJdLtntXuYowep6rSPqHu5U3shSA4jdXNzYMSemgvnHSYMmEmhzCsi7VdJf7TSvCF",
  "key23": "47q1SLHM4VUZLXiTsZV2vU8eLKsjXWEtF8WMtymtJihqsLEh7PSEXBNCyM77kq14e2su9kVfBWHJ9k5b2P732HsZ",
  "key24": "bsdUfZkDSBZouroVLzqghAjsTQ2TDTvgpcWLXAdo82eK5fcM3LXWpAuCcFvuvst7yab8FXbopBUEyzTv3SqwyFB",
  "key25": "FbQis3mSMLKSQ8zdzonKD5hoeCGZwL2Y5hYbEePqpbEzLZWf6oz1EAXmg5qKejwio18t846UJfzQFS5nW4UoL2b",
  "key26": "2XyZjHfCQmSqdeYjQRBUeVFpcXAX6cKq9JgeNw1i9oj6znGuVqwpxYGieNDyxyk7w6arUifAMCTQFV8EkeztA7mA",
  "key27": "21tXUAgmAfXxHXf6Vso3i8pyPKY8sDqe3CQmCzV62jtSUC4JuRf49VsmELXvhSdidEuxBX1Cw6YknQhpeQnVSt7f",
  "key28": "56LhaCkeoQ6bQYQvqhAhy7EuBJzB1XyTmRSV3T4nv4xW8VFBq89SW5BVM9tuerVQAEekGN8sXAqW6Buijy9ESWrZ",
  "key29": "5SPLGCfQN4yRDDjQyBBYnFSUcu1F4H4HzvHzvNTLvjzCUZ9pyJn2aHmUYe8dc57UxFQQMfDh5vnDnDy7y8ZrwqaC",
  "key30": "4vmC8y4YsLXFMe5ur4ufM7FSietCdBD94XVgugnLkEu7Mocb94oGFtVyXuyez2qnrqZ5CCAs24pWdF1GrtACt9kA"
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
