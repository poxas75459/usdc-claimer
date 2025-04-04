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
    "4kehSaKeV66Fky1hNEZJYtoKQpTs1jdbwCqLFyDcExzgDppP6uegQHcDSZPbFqJyVtpK8DVcXWFvW51FUshya9UC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63F4CXASbrdFQ5v4X3MukXXDUhP2DvRZhFzdVAcBusvmFQ6VCLrqZHT9Taz5EFScaKpFALaks6eC4MRYCQtTvyxn",
  "key1": "5Ldv2ChVrQhzLc3Ss4o63J7QuedUmMM64kmMXdrxFPsJvQYFj4UPQQMYM9xfKNZMj5r3qehqW77DwFpnf6S8ArTn",
  "key2": "2fKdGFJLXLq2EbpJSd2gXkisMYurEq6HTfUujRG46S75wQFmiBrL7PSfB2gSimbZ6QeViDynqhPAP3kzhatTyuDL",
  "key3": "4dYUaydW9WeckiiorUkhy5c4tmfNLCmby38DCqKtznrEuayeeeVsH8NS4puvdkpWG5iA3BK3bqHQLb82BUCgyfhW",
  "key4": "3FL9xDpCdq5PpVJcqB76EdRnCGgHvscPhZjigyyDxsyfa1jyTwbEb7UPtU5LKVSpNFwz4aidzgTGzpvBJehpHQth",
  "key5": "2AtpTkM4in9oCnpj3hfyva39EZ9pNW9o35rvjXqzprfrrK8c8yg7GZY8YMnGnuAW3iMPuBkDd7SkcaAaWGDdPD8e",
  "key6": "2iRvJXCcD89JVgjbKBDBsAtG3myMQvvGWf7yLkMWgKLbAKze3rEw3Q97CJGMhK2h8nSoe8WoZiL61R1xUegJna86",
  "key7": "tGS6kTBQnpyP918dWzpyzK2mJ3S2AwJHC47NaTSHKuiQzpPB6uLSNfUPV7sFLAK6t8AJGiBzZPVpyLyxxQ8yMJb",
  "key8": "3pW7S519pNEgVFX2EaBDpo8mzZGGqvtZZ3jiziRqEU75uBiJPbQEdLcSVHGPrrSQd5VZzDqctJMWGSsRk45Hja1C",
  "key9": "2XH69Lb7icgXwPYHzadRqt3Q9Z3Feqd78iw1qCqynu1gqnaVR8ooaoJML3VC3DWgqfkVJjgjT5KU2svDeey2816C",
  "key10": "6v9pujHncorEyXqM58J1vJWLfC4mmHgYKm94pN1kK7chxEDhRLKa5C3Yi98EcVjdfCGWrLhppAM1mHLG9hDexD3",
  "key11": "pR3Wcvi8jyTEGHYiWzpchMGzRhezZQcK1tfSA6MN6bLLZ7x7ycyWVRWQ4c52j4DYtuSbFEELQPSCeLjjAZYHFFB",
  "key12": "3DSbmotBRwPxECnqfjtCs9yE6dxCXRkaCV4kyDrGijECuo28renrgX2pQiXJcsPmafmJ2bYf7r8kZNvW5kMxogdk",
  "key13": "2nMqsxKB1rJFpQifiTpfu6WnHtVC6u4562PfWrqK7jErUPkjnQ3PAipM1EsXkBq4TTSqWvrF2frzcStrXgKuYFJg",
  "key14": "CfRsMFzJNWpnt7UopJ2SUNENErm23dVzK1arFmJ1EQGt3nN8zkVYT6q5gbYKr44HUD5JoQ66qtsjDcXMjVLH5Mj",
  "key15": "3Tvb3GerDrN89EPTr1Bb7jFWn3CuZR1JRVWFLxkmdF3a5aYuKgxPVBqeb3GDoc2uAua9ufXwG41o84NxjJ4RVcco",
  "key16": "YCn6GzwJDPYj6bzJMCmoetwCLgybQarZqKprS3gfm3LXp7Wv5zcgiGToSJ6yAgNQosqQmwyTnynWn8iswCPHCpG",
  "key17": "2LugrLXj17RoeY6vrEY4LvztGiwJq2ZQReFPdtRp7YXpaxYGUoqfG2NuEaPDKZgwiXFu9fC2MfRdheCx9iwpPjaw",
  "key18": "3YHEvmXVbbZkGVckHBbK4zi4FMbiysTUrsLQVArR5n8huLFLeXXLnwPEb1v1E2WJ2dDc1F5Q1HaSve9miiWRcxPV",
  "key19": "3M11tr32eDdBPaYBG6tf7ot6R3GVT4hbYVjZ5Aeoo65wxtEVWAPDbk6iiAp9wMG4RpqDecbqaeBGDWnxg3mEAWPK",
  "key20": "4vth4kqFEkomNrjCpSLznDeYT8t2L1rLCFcGLTK8P2ALcurdzCw9zJvM6qoDShNGBqLXrPm42L34EQZ6YZBNu3v",
  "key21": "4w29dfaNtLyKFdBUQVFTXBvStbnrZryWaYjUPKYtt8FwCFKzDbQxZRruiyGc1FdBcK3FThfNWR5fRJG3y3Dz9zsZ",
  "key22": "5uHSV7GGLVF3uw9Atqbj9Jbt293nnhX2kFgjWSActeCNoJnVD48z3HEsVAMKL9u3EiXw9bdq42X6tGSzwxMXHEdd",
  "key23": "rDBJDfM4HZwTTXNeRmEc5g8VX1WoSC54fvBz3DncWe4WgG9sTXHBwQRNU214jBzDRzjW3jaoEefAhvin4q47sT7",
  "key24": "5rix38eJKHV5W9MgJjFhZLpa3HnUex7QQ1VRq8rFE7RLhSTpJoqRr8dL4XEjsYEXfbgwJeoo3ZFZHgihaCDxQ7UF"
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
