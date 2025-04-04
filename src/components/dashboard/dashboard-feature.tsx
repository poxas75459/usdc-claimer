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
    "3yae8MMZf96v4a9VizieZLLjbyh47j8LQn3WdaZS6ddK1YG3aQ1baWxM6Tx3FPnoeMV3ZdnqNmkhY9QEqYtx14Fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXaRxmisauzbW6XeD18QemeH84QDUEPLBbwysPR4u7eBcTu3euiZEVb7NGM1Kt5z3wXCXsdVfaGTBJZ1ygi9gHX",
  "key1": "Ga2tcvCSxc7R3NvEFRjWpBBWb37iwJ8Qk4UDBvqqkmVYVsbpzJEku8CQTGfYUGeMwF5tw6naUrU3AzEgP9ns8FS",
  "key2": "5ikr5dhMqxy3oLPMz81581ujg6WwA1XUGMb23YHtDHGtRwGKUL52FArso6vQnqmYKhkqiU653K1cwx7TtbyFXFnS",
  "key3": "3tQRmKxELYbD66uBcGRwzDscbcMXvHFboXmKNrnRAdz5X2uWfpEaiadJPN7rwfH6enuw5iJqJky4aXPs5qwBFrsj",
  "key4": "2t4cCUiXREWjEpbCAVqKcZVp67bDz8wzaPX9Xzm9598dpJSRANkrxW2TMv7YKgaYyqSxgPqEqfB8cAgtJp1FxnoA",
  "key5": "XsN6wPQGkeea3DsDZWJqVT4XjCi39N9ppQFJKNq991tipVzab7u96AXdnp8UvWRccFp7JQidbQRXXjmMc5HMJTu",
  "key6": "3Vc2ujJ6riEjNdn7qfT4GRjFdC8qzLRKDqpwsTYF1DbvXssdTUMZ6nEkWfWwi6F4iY14LTwcfPSJamqdjvU3ZbFJ",
  "key7": "3EGqVPQYAf422QkoWgUsXTknYjqmEEDRpPviuNBjVh3CQ2FfacCQPYoDbd76U4AFyjk5XwtUydFZDqDvp9ZECmwg",
  "key8": "ksK6hB2QyCcd7r8g1uo29ZTmYbFgVdawjdxU4p47VKE3o39eYYRbJ6aYow4FgC8HKA4EKPBj9WJF3WGLN8EYpuL",
  "key9": "zb43AquYwxYx4aznP2rGqek1SV8FfCuYebMu4XvGXFUNXbM7WLUfRRYpWfN2uKYK6SebtAxCQiYPA5MXU5qddaG",
  "key10": "5SDPDrWiQeL8wfC5QvVjPy3A3LjBMh1btB2zWxbsNCzAfvq71vac797S4wQBAuJD7jg9MWsUV4qRNqVbnTvapXRf",
  "key11": "3jD27sZccar9frzvkXiu8RBSKRXqbkGpwVtp89RS4QKi3L3J76TrYHHJ9TnZ5f7fFwaxL2QVdnojxQ65hS9hWVG1",
  "key12": "ofEFoXCQcgpVmjH2PvL1fmmXTnWEPaj6YPRRtvcXNnphG1uWa5KNiYDN1pJoW7qTvwMXx2VHYYqjwbRRWQi7bgR",
  "key13": "3Annj3vmPGVtnB8sxxRqfBaU1VMRF9HiVe8tciemEfXT7p2NaCk8DunYfbFm4ktonAdwvdCy1byDLfhkMThLNtoN",
  "key14": "67D7ixj4QwZ4MAj6Du7H2doxZaTbziXvmDxGuNPD6v2vWwQ1Mm1CB5bLq4iEuHSAGzsArvoAoZVdLRfg3SKJzTWY",
  "key15": "HQJw885oWt7zDgUACu9Fyqoi234qd5C5PgJPC8Nh9R1AW7bwSEN2LgRXjQUWg7CoK5VjeAM9gtDdd4tjzWNATkD",
  "key16": "5Gc5xVZLAQeUhVDsbbyEq2P48BWLhQhpzWrGe8EQ2f6KqtgSWqqdajygQJdcLbREYGH7BqgVRzwKh6DUbQrarYHj",
  "key17": "36GEVHBEgkwkagdXKbDJ3DHYueVWNk4AQtPovLBVYGKRfZBusBAWgbGED1TPvZ6erM8tgDTGB5rZFtyUNifFyTbp",
  "key18": "2sJtQjPGGkkLYGt9hheBUZQwuzASHSjkJhGSQV28kssY3DFXfyFcRXLwr17bLR62NGxoJqfj4fU2oStSJSQjiqnL",
  "key19": "3CGcfDfReoEExxw6jkJU4GAAbnS99JoGLkCwjoM5EWX9NyxePRYwntvHowwfpnTAvVfqF7bpX9TXzfnsgkiMhvnB",
  "key20": "3DY3Hr9VEJoEzQ3hUfmwbjo1CgfHXQmf4XJqwy6LzJYy45x5jbLU2xqS6Q2dmiXsihCRmxPD93rSSo3p4nNKw3XB",
  "key21": "JKcjQRd7UXNBNYnRf5dRUQ7DKgsePp8jZUHabdEvG7m2tGaus3CsSeWPybFvK8XgQTgDseT6ftgi4AMJnnjJoST",
  "key22": "3goXMiVzUDYFELQTrMQF119so5mU7Uru7szxjKWH8TmkmomucLjDjHvaU9i2pioFXQDTe63NFNiDhsJmik9foTiq",
  "key23": "4mPnYnRMPZtvvG2fR5w9ThyRzXsJr7NDokYVW8wWzLEKmUJCbDfpmdVxzYs6nzd5yMNgyMUcooAwRK14MJPXX184",
  "key24": "4p9NridWWXfU1eseW8xNp3T1RS29z7hJ3vu7DgAjwLkT2qLsq9NUUjorFdmszyL3oEBEV6hvn7hNx71fxTYBCeEV",
  "key25": "nJ5YWyyP3V2p2seiRgGsjGLnTFXo8xryqiJAijyCHHdZUZwonsPxk32ewj9sd1tCSRbxkbWZvEUy7qvaiUXKByr"
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
