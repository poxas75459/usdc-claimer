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
    "3YLskQQD75UbjH7uz4ZpbHXgvoYLgH8qxV7vK32yRrcdBwsyrZ2nY86us7rE4i5akd9AZXFqXxfWZj3ztTChdSp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23VGRxwYwB2xzECSfnuecZAuve2Lpd7ixpXACbFjHeC9MysR8L8Xr49zGXGgSsmTSowrGjQV68mPFtHVUJGSiShg",
  "key1": "R31BrhiuEzGWic5Rg3LH1BPsRRZf9ZjcmGtvrSyDrchDb6wZPABWECa8cwuoujbAhTZtqEURS2hNQ1K8chWHf89",
  "key2": "3ZXtPGGZE3etmrCtTKhqLGrMRA6YtSR1ueQNnntvghte8zCkoySfFNVToFshUvnp2HsayBEGUJRPFiNCh1jZss5z",
  "key3": "3r34962ihzZVYHQ3uooS1QCFhm3q3wY1TndUvaKDh7PAged3qn7aHZhiUkCMT5PumrxgLbgAEFzZuJeJjWgzeNVP",
  "key4": "4RayHVmmcfvYFQ98fAQ1yr2MWz8iS5LpAWsjs6jLQaQPzBsajtzdEpCXUV29yeBLMfAgTTJqYqPXCXHc6ZYEssDo",
  "key5": "gs17Z3HyBFZK2YHVbUwnG7siPDnVv2SJY4nuyCGRtsHFiayZx4iYywNNtZmnaSh7Jca2eAWBeeZmtBrcqXjQtGr",
  "key6": "4d88FFd4D2mWVVNyQh5C3D9jicF9c4ks6XNhcoYrs2NJTVdEuBCLyMWq5dNiMSzU1ZeGGoRBEuWQrekxQsEEsoVk",
  "key7": "3VpoUS559rnyJ4378RBxshx8fLPbD4zM6MoGDA6uKoXfYE4uXQmic8d8BjSLRj1VVZJcEG5K3onhy9gdhjCGRQXp",
  "key8": "4tWhEwYag8WFFZ2ZNjx7QmEA4zBfC4HTuUST3KaZRuVbBMKzV2zGLcFBZ8QjFugNFxjfjV5c8xdf55xHBRzWrbpN",
  "key9": "dc3c2MJdQjuE9MXzDVgdAR1xWcHCFqDNRrgJjeVjitM7QqHr9vGMLRxWup3DkCuqXaqJStTsynjkJB5uSVU4m9D",
  "key10": "4Cmsezz4E86M7wtR238mKW76iak6ZegLhtva4fFUuj938N41WuwJ8RUApcnabXaDY8wvUe3BWEQ8PBZmJGiHxxdh",
  "key11": "22wcr5wKjSZjxxaBjZzWVwXxcD3tbNEYcczmwAUFJpDNdDm45xjMYiY5gvN2BaNXNd7jdRGV3anDKbSiFdrkoNRv",
  "key12": "5vP74ka9yEHX8MzPXACptnbqLKFXitG2yuPFb48zJfMEhumh6tCbpycZp8AHW6PsKeFU1dKpakv8nqpHpC1uE9iX",
  "key13": "4qF9nZi7tMNGHWMT4kYGjiPrPqYUB7ZS7kVnhMwD8eHW2M1mLXxHHXJbZecDYdfw8iySD2BQY18WZd5ewNoAmV2a",
  "key14": "5T2eotKYzMoj9CKT9Q4MWnruPvLLc1AoPBBQBFCpTwC8vafyNHpSJAoYjzBTMamsV9trdqH18kbhk184x4XTg86D",
  "key15": "XQHnN49XvcrWco2zVgVfeyDyQuvoAoHPNpVaSLnYZN1fdtWm7PmYcXpiUyq4hx4mmsdTN5V2XrpDcZRbv2HtRhX",
  "key16": "J2jofY32RM8TuiXDFK74Tk1tDkdND5tJ5dy2JsFrZZNydDFvdXReBHJE2rwdtSvk6owzZNSNM9Lb85j7M3Q1uJF",
  "key17": "3hjFQZUMVMyn9cTPM5dSrR2qfofV5gQfExx6F8otAuLy4orgm6962dRfL5eEscVt33RuAtFdFXWED2zhQe9MrRMQ",
  "key18": "mrwPwiwbxrGShLeATUTEgN3zw1YLwKSEic7A3SNv6iMGzHCwyt9LpLqicT1eLrdxbbMnpf8KzsqgpBM9Y6AQ8ko",
  "key19": "3GpkQYaCPguCbLx67mA3281xncvZY6hBakKtXUMtfWq1Y7ZZpUSNUNk4nPP8FZKySjMhZQAyjPjP9uHcuMYzwv3W",
  "key20": "5LK1ogPaDEL7KWzxePkG1e15m5CajhDRQJUq9c53ZtVTJ4jknGnC1ddX2ugFNL4GW7cCsZzahPFB4xcD2hChGBXH",
  "key21": "46KgVxvFgpvyMiVwr7s3C9BdF5xqE6ULEAbCyzkxTCgWKt1dEMiiNWjnq8gPJ274tEThp8v64Lc5uMcuTtiMFmmA",
  "key22": "3QUqBTmhHLAznn7jBvNJiUgQ3YKDKQmMti2yWaxyAiW8D33nFHBJu3L5DMdGLCBEkV3Xa7eW8B3DhRo5QCDtZSsU",
  "key23": "5CWopK5NkcZghQy8sYmU8SMoCEZcU8fLkRktQRi1AHMcDFSjB5iGfLqVFcsCLK2twSPwhhj62mkP6QjRdifn6Kie",
  "key24": "4DuLvybtGxfG1rG2aKaTL6PWaJBA8SYVLhUcAAxPyGUnSsGochWBHWD4FaHA31yduS3zyVKMyZ36nB6wz6BuZym9",
  "key25": "5aAVSkiJaUn4BUDUQQZX8eo3cHmKGN4yx7ZsgMBtKLtp9dpTm615w3VTtWcH2wRsvSACYCZ7TRyvNYNaTzneRKEx",
  "key26": "yqHhVBRxFMB9rT97Gv2GbRXVcsu9YQKuZaoaAvr4RSeg3mukeBDmnBiBK342gdfHXvPNCHniZsf1YFEk844TZDo",
  "key27": "5KncLJA1B4EiuJgpUaQFzxW92WHKeEwHGmawfwRjuzrqYzKbFXRZ5Ltawp4p9hZVJdmyinAJyc7HfmWNu1hpLx4y"
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
