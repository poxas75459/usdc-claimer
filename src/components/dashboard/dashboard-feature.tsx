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
    "4kkHzMv66hDNs2xpwHXL6sVXEHkaP6LN2mf88EFRA2vxjZG3AUBQYHuZNJxdg9inqZBgev4xSgTPTJJE51apjBkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCWi9veHGq9RfEbaVf5dq8K1a7ewu9SGJxPK2MFCcRmfhfs1XNeteV7fPP4JKNCcn8Erwsxz2EeLyT35WVpy3rT",
  "key1": "41BSGijjVh9vUgQtaYCKHzkjAY7NEVtwmVVLSkYVJZmyGwKBu7kqmwBbjKLeGDwQk86RXnovmK531DrLjRkZSD8X",
  "key2": "4VGgt5E5AHWPPmEYyR3J3QFqLKQK5ZoZqfeLoDiXXikKdw5pvsitierosoBhGMpP2g6o44DS4EFGLuvMpgWKdLRx",
  "key3": "8x2MpimZeNd8QAAAE4ZkxkBbHNYkhVq2H3qFJKaAT6wY46uUbYgVpGEEVMWYkSKjWy1BMHhjR97tRT5vMv9CSVi",
  "key4": "wkxQusMNVZirSe8dZkXxMoZDr2NWjQA5oHak24LUyzUc2JCMCtNE1DihMUbVRQ4YeH5Q5LTueD8MxoX5R5Pgexf",
  "key5": "5sLsDfWKX6bQX1gHRNkvxxKwJucZqJJVqe1ZwyxPWsdeLvAif3HTWrdfxV8ShDLU7HnKNQT3NFBgbVmAbffseMXY",
  "key6": "62G1c54rKzbxK2KV3rxbuFhe74cbx8e4zscjRM1VK7xEr6wBsf2CcUVzFLJu1wW6D5WizxQFMYbDYi1b1sGfQpug",
  "key7": "4GHMydcU1TVkc7jnGnYXgj4SAZBUmxcF7RSHMXyavDEwve4q3LYiL5GDPM6L8Cnpr7xAcqNSkJ3EdbP3TSUBER2D",
  "key8": "3s1g5ZDfxsg3fcRei6UBk7Y6iaWU4twHhKarpR6t3cJuf89oqxCfk2zga4hEQP3YaeHBJZknGy85mjAueHj7rojB",
  "key9": "4iLHVCmPqLDMRVP3hiisV3kb1UKpLNuc4Vk5R6d3NHNRMXSksfsWfd7EzwG2BXuGgvvgFnHE4qRSiRwRtutigfgP",
  "key10": "5NfuTxR4A38FyzSGuvB5nhZh5LHuiAtoppSnHf7mjezhyteHJZb3VKcmjXccYzGRcgVEc48dcyUTafdAKng18yCV",
  "key11": "3cmH8sc4JwSdUMDAaAtCJ8BiePJmBkFutispNHnGzLPgDxtEGPQFiw4LxEFpLBLH5C52jpYXVLhULQbuo7NfomxJ",
  "key12": "4dA5eipedZHWFgxaYr1vZAzSnr2JneeyxR5qNoQ5gviQ89jHZc8G1pBWxiJmGr3nGA4XNEHpb4aCgMg4nW2RqKjZ",
  "key13": "2naJ8PzNF83uygXXYjxemWA8okbutKD3HTxae7bsuccA1vKe3BzJpqp2Zb4bgUk3Z2ozYmc2mwzLRb6iotEhPsk5",
  "key14": "3UXRxeQTdhSp35QDztjHqMEE23smHNZfMVJjVuQjhMVcNTo5QVUh5XZZqNFFa6BEK5u7Gtfrchwmx5i29ptwMYfT",
  "key15": "2c25sDCfMhwXzjs4nvdChkrEPW8ydVY9ffmM4vfsHdEeLN29CWhiyyXYrgnbDeDW8uA7rt5fENX7GjsfhxmYU5Ti",
  "key16": "4VdUe6cVNvbAjdYJNUwGB6mekRD3BodhJCV5nY3BRYix6i1D699oG9fhGDmzcJ1ctLWcfYuwK9RdchUbbYiTkrQn",
  "key17": "5oj1aWkgLJQ6UGBXPxXUUiiMWzbFo5AUc53mJtf8ycmd7gvmPACFNh38mW9fRZC5hCyZYjKjUhwKDEzCfbrtWpsT",
  "key18": "fHCApXrtnyYARSahurXWV2cZCXiA2CDBabXW5GWUYMdsCn7eGNczKkfehdrw957LowDK2F46unAk3NbNArD4Fme",
  "key19": "SYDBFDjrNXSoWnn8hWhjDgEkPXrDH87MA395ewV8UNGMk6bQB9ZKGZ4wPf6W9RsZYMcgQf1GemykiukemWz8nai",
  "key20": "4LYQVhz7DRBfnYZ36hsQSwxzk94auxNNSuzWY2vLw4jhmE6LPFjddycmKVGLN13cazxeZdyXBCaUnk6yxEMPpdcR",
  "key21": "6EFyFws3dGTNagYYqYyiU3anB9CwabodmHAcbHrKY3AKUjqR484XFV6EgfapQpVbBXbZFLwQbGMMi8eRLzKE2Hz",
  "key22": "nKV8h87WDZVSfHiZEw7cz6EZgH8Xsj2p6LtGsTn4Q319qD1AUE1B2KNWfY12TDghUfPmKZwuxTZrjLPp1U7hVgx",
  "key23": "3XezAhSgdzsXWLaVtWAqpyuQmAFbCyqCnGupQNMjAFoF49fnsHvzN8V4Ek9mv5QwdyR6ZzvV5NoL2hwpbg8QPo4L",
  "key24": "4RyiorZrjNTev8tqRxTo3pJMMUkrsy1CQfUa2YCVMheq6YAKR9oUYVK8nA4g8YJigUoHUyQJvfKgouPYk9ps6hst",
  "key25": "41xJGayQwUjcAcF5FdMGaaPZegZGporuRL8Hb2vGMxBSegfetxYyf4TP1qzHreqCisGM2XGNg35K1MwBP4HZ7dPL",
  "key26": "3crR4u8RYE1j9mdyRjwsw732qSdXWroALJXgCfLAF6Fx12x5aKwfoXBNhud2pGuqYy4Xsgn4TkdVt9FxS7MiQXS6",
  "key27": "4VgicEfCMMdqzBz9dZLUrtD9ECfr5zg9EQ5zFGvs84F3aTRN7URm2y8azUkixfhDZXbb5y9QPaM1cUrdDDxfjya5",
  "key28": "3USACfN9KVtgiHoCG5nggGeRD8SDF1AC4t8UG9oj4mCqZGvfEreQuA9uL8V7yDU7HxnkR2oeabRHYMowS9rvHAA3",
  "key29": "5VMqAWY6cLmw5hiZmjSAq2MUCcvG8YNNT89ho2HpEdftzXdQGAKkD79UAfwxWp2Uw2xa2sXvDaz9dv7KuaGjoABG"
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
