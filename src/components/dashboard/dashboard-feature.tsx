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
    "RaNp9P9qFKRjbkRuqvmprR7Dho8RqKD3fgP41HMcHtkipnvwSsS9KRTSeNwnbygG8KJKNFoiYaAqwLx1DkZL5Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q8eYQjQ1qi27w8EZvzV9RPcx9cwMreibmSzrGojgNKDTMxCzKwkRZHiEpoRUK145Dbsm8qfvFRspGReQHFbEyDJ",
  "key1": "36mEfor9XrsArNWfnED7YoTKS9WrayR8GYMDQgtcwgqZ3P3kr2MCWMtfmAFJHvRXfjpezN4F33HvpLgVWEfrPQiB",
  "key2": "3hxhZhxT2MLviwAW5q84LDHJSLk2MeZeWKy1p2Hu2zbhi1Uo8rBT6vPqWJiHd6Wq8CTfPWRgpQ9YL61XHMv9u7Mr",
  "key3": "7Q8o6aLKMcBFiAWHTArygFn7ztFxvj2E9opGLTvGXuddGG5G1ovBiAu2Tz5aFCjKYJvK1HNTF4n57bx5wcEbJ5q",
  "key4": "5AwkM2TnkmcY59pr5TUwtk2W7gruAnrDDELKpXjPwjFkWhBbSwQ9jEdJiDQ5u6S2inFw9q183xUFHaWqduqWHwGy",
  "key5": "4Hurn6f5UdeSSVk71XQ7motFT7eVf9HnQYHFNi9KX7fdMN1V8R8iGgP3mRXEemC6X2QdXYbVEVLXJC5xYkFw4dgw",
  "key6": "GsK3NQCgZy7JoZv74wRpT47jgEFZg1RXT17Q7q7HDivDi36hQpASxXieWCZjjaPgxFjoZZJRgeho76GYHnN1E9Z",
  "key7": "2LHHHQ8LDHmybA8QiG65qfENYv1oUTz3RCt8LSnXixHZkAVksQaVARs94fC64PUwykV8F61rR2LTfq4pwnehn5vm",
  "key8": "3CiFRp1FPr4LLtHTdoxkjK1P4MEeeWi3EwVN9UzZaiSqKa1dXdmGdRBFAjrrA5zo7cFD1hBRdUGp4R1Y5ezrFMA3",
  "key9": "2p6u5kUnM4ZoGgDifjzcgxFQf9nGPL2XLoyXZXPGSK9bvMaevSv8urvsDU6qprhXSTDELBPUtJQzttspsiFyxE5N",
  "key10": "NPT64haEpquoXRgMw2tDDv8RiKjJJVPktfmfg6pG2z3s9pkCE3CDpe8WEkJLizPTHC6SQLShMUEwDNz4mA4AGax",
  "key11": "668vJ9DWsbDMR5aKZ636d2fMQhg4BmrST5XkNVEXJv8d9n5bF37Dxenm7C5Phz9RD7snPQeEg4HxKc2nDtJzhNyC",
  "key12": "2JQ89E5QyyJiHLhPFfCE4ano3G6o8uHvoNJpenNyjeG2NuuyfX7Xs5FvGSN48nCzWFCSZytt9prSXmYKdTPuJAv3",
  "key13": "4zEJApCKEa68c1jGA2K5MVviKtJkwxP7CXrGtoEoZY1UuA8FfYoSC9c12S1FR3xxhhicpQsx7tUa16YrozvcTqfh",
  "key14": "3CCrX21MsxM7Rk3hHvibFPyByiQdZRXnKVu7eDQBmSL3yk2ZPHhhVmhkfPMZhVaiNG9pSVP7T2AomHrnGCc8SJRz",
  "key15": "2bJFLXjiUnFxmStvUsNbHVGiQXtTbjJzess83b3hT3wXmwynctaFR7F7Fd6KPsw8QvsJyg5h9n5DiDJz2NmtL1yb",
  "key16": "3BMwi7orwP9yneq9qVSS93SfH7ZeiXkHZYADXe3CYMxEUoWYpXCJyktLAsd9dmccfA89eUJs2JDCH7cxgH4u3ZQM",
  "key17": "4iWAj6QHh3aVD9gpQvccgFhPr6fx6ano99FT8xc1use45otdnjZ2DkmXAgrV8hTror9KAVMjZBszJoJeJPeJYL7u",
  "key18": "3C4zU1mDTucWETWhk8t7kA2RQT4nvhyd1jriAJyEhHzD6TWbRdfeVt5aLJXZZbPcYooF6FNUTQUQYqC9qcJHgoYh",
  "key19": "4xgvBhkxtK3E9WeNTaD2o1QvgXqMcStMRwzcz4Xb6EUUU5ysqeYTzmxK2F7qxA2Me3WjKapPQQEhDqvgGR3vX4cS",
  "key20": "3DudsPFRziT7tYMbeMybg8AunUSwakzKKi9GQVEri3B9pS7VHy4B4LjfLCchCvfHhR5mtPbeHH66pHAfDrtT2w2A",
  "key21": "5LK4aPSMVPhKJmwGhLTtLsdegmXmgp4EH7ywpB3pTPDPKbwD8WKp81u8VBzezwKUNJo7udfT8W9gKXNMjYd7iSV3",
  "key22": "3AZcdP2Aw5RJTHFKv8LxHQi4mGV8iuL6zMuGAeq4UufrMrxNXDoAJgj55ZPZAy8Jw6MeYcDCKQnUWYKEviZg9hmF",
  "key23": "32yEkGAE3M1La9BJvNeSzZoK1XicyAWx6W7Yo9Lo6Nb6ERtgdh7pqLisKQcjDg4PpxNkpTNg5AhQ3k5VDXUkvWaB",
  "key24": "5B1SMS8o5MwX58dTWrpJfNTBJrrp7J5S5BmEYQUfnxDTU3hSg3zDbjLFMS3h7LAVUy9hPW3CUG8W3NhpCTeJHe86",
  "key25": "5ttxdVoE3EXncoBZJDm4QaHLsVWwfWX3yp31oe2gkjkfK6UHCcVMKNEA3ZpfqGh9HUHD2dnyHugSMPmcQj4tn1iu"
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
