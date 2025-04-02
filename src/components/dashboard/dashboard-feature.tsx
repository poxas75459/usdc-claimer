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
    "5mqZwVNauVVXBngb62iFf5RWfMvz9gXx5ccVXPk84FKERF5RLHkvvxWkDYLGGVF3SoR2pPkALomMSWQNS3bo92Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65okbxphtUm8NSvPN3wxPe7tb2WPkBDfuYpLEjgnfty4x4fKCJe9bQ9d9yckzehfJtmvGdYkXQBBqoLtCBzdafdf",
  "key1": "T89MUaxsxBDQQKNd9tXXTdYQJyBWzWawUMduntVgkkmqoPhwEKfoUjcPXhMpENvi3zQqaCiPGro2vdnyeT7igWr",
  "key2": "2cjeSnXXaZ1W28JVuCqDjF4G1WzobtPRRKZFnLKcX2cCQJ3GrLSgyjfAdXgrywJc3hQpTFB6ca9kALq6V8pqRGT3",
  "key3": "4s7hM3aqJKkjhHSnWpx3J1oHXbktfQjt5hVUuBz4FvhikCtPaBSmnPDJpoiqTyQS5VZis8fQgRKSZXAU85jefAZS",
  "key4": "egBCdLWopcABRWtiC9Fd6bs8ptSdV2cVmnAsRq1sVh8eh5hQiSjyDFyKi1oJq1NuFRKKqPZ15vSJsigpgFBBN9X",
  "key5": "pp8mG56P8n9WWmVWkRZqXa2wAU8f1fnj7GU2AQxBHqThBgsKANguFQYpcbYcBCUQTaBp9QtSgUdDkmWBpb1YLqY",
  "key6": "2at7nzBXodwwErfTUXokPjpxMDNRE82Uz81KxqdAfRQvxpmXTxdQLmPhrgg2MwsAVkd6iRRtt31m1N2yaZRL7Fn7",
  "key7": "4w5mgHx2TTFpVAJvhZomPENuwAMALaQfymvjFFWbg3CJncBqqW1o7ZEXss1JcrsctBEhx5CfDMNbE1CV4wybZykB",
  "key8": "4q4SuNXRB1eQjMJ7F4HVX1pqnLJB45nHuskCdPHaCB7AcXi5ENxmyNpfuKikEstxq62oMfAiCwdmC3r4D8YNwgZ8",
  "key9": "2KeYw8jFoSv3soStNho5TAXYRhoiBoPjeFhnts61veTWgrun38zpEMVG2r5ojE856yu8ME9oSktKG2vUDet2VLdb",
  "key10": "51NLXZYooTtU4YJCw5gUguPip9FE2o6Ls7cBt9YnwPiihRkMnvZGqm4RSYLuJAdFSJRP73ZyfVzMQQdbzuQ6nHQm",
  "key11": "4sc7VQrLzwB3VUStv1u5mzzR8y98noW686MEdJDEUNXWkGfsd2hQtqNyfmgvWcWXsW7ceZB1Mfpc7UAzaSZKB6Lt",
  "key12": "2mnsnVnxhib8Fq2S7QdmaTAxZCCUXTCRbadUoXTwYXEfUrrkSwbsTqLdoLz1H7UqQLYjRSQMTKGTHrqPxFmgMt1C",
  "key13": "d1Rk1v6p9uLKBqQmfDBVa663xNKm7G4Se8zLZKEtqcEiL2Dfm1X1nA8PsGKCMDRNUGadeN94DHKrBqPiKdjhL6Q",
  "key14": "2B1KGS8AyQ9sBD2qiZGVz74uzxg8cgGBvMK41rD7eLMdcHGPJLFBUmX77iLiaZ72d41ToSBr6grwkGeiAzSipu9n",
  "key15": "26TWvDs33Bj7BityunGEzQYtpcqabP5749aNFyJpZwPEkm3dXxUc3NtztRrH5kUEc3Y87fy2DFffNXw4bdZGUHKy",
  "key16": "4ZvkrA3YLUqpiToKgj8Ec6LDDCtwAf5kw4Zxps8cZz9q9EFLDdBZAsBFq9UJT6Nwwei9Qm9twm5dAVNniiApqU14",
  "key17": "2dnjTov7JBxGtWAAyEUbtFZHcV4EmtdU4VmAgHiRgtgVVWrvspMfR1vcEYhtAxEtJeRkyeE8z7915yfAxuxVdUyf",
  "key18": "55UvmeomQZ4Vg491AyR2eM9ZiKUhMbQEYHRTykyPaMhNgqzzprnoSBug3VLkvuQ6FcsXehmKstiNzMAn63q3akeG",
  "key19": "5iPbi9qkLwrRMTRtTHywpMiXupjgKCDQdZrUGUEd4ZVXARx164tYCbH1YYVhxHfjLswATMDMFvHBSjdELhLrwxb3",
  "key20": "5MoWJ9227UAJoWuUpXjgJbaXCv8AeL7bMYhafmaf8hd8NxT4JRZ39mqXvzeLiPU8bFk8r7W1tpzCsif2gzxbWR7y",
  "key21": "4D9Uq3Qdp2B9s2gqx9mcXVQ1ZrkuDDyT8nEWkX8YPaWYmuF9tsmKfv4ioAeUAn81bw8b35uVGTeoormdcEo1mLEP",
  "key22": "PVihtap5zpvYfLWqPsXhP3vTaeUAdRBXzjxDoHGhYMBwwF6ceyQtfLTmzcVQNWFpmYpWNQwqxbSRj9Qnh36nHZG",
  "key23": "4xx1MNjBkzV692jycKs7ZBDnQHMX8JVhcAme2dPLAx2eybqPeLHgepD7xWxkDPLu8aXN9uswnmvK2Vkp5XLw4cP7",
  "key24": "prNDQfRfkUbBvx27tQMDyXhd7ha8QCaJD5twqHbyE9DdiY4HDSGTdFe6Xsem7KrMxebUJTkwTL1qYkbT1N5Si9L",
  "key25": "ywGcorXmc7ynhnxoWxifu2MKcqTKfzSWacyeZXsyD1e2dEw2WYFyUUsBxcNwvNnwfi9WH3TMbCJSSpnkhyQS7ZP",
  "key26": "2QDnkdfL5uqJFconu2co9iduM5erNNcVDzjdWm6vfHERUmvvSAaLQVw9Uix41YXnTkKqmYF5vXVTpakWpRFEj1m3",
  "key27": "4DU9r7mbFefiQhGzVbeio9jYCrU8vVEq76wvXtytts3U1Zm8FSGUZRLmNEMA9YjKyVq8zhfQyCSudUd942AngBpE",
  "key28": "ZhQfrDGjmwKuB6gGs98r2aVXnLMZBcDkeqE36R8BTcUuWbyoCoM3oQfRqaQg9acW3ZDJpsuVrJYgt1QZ322z1Fx",
  "key29": "5wj2LfNJoesVDET4KwDnwEPSKwu8PCMxfgXZEoRxa8gKe3kffdYu7Bkg9reqx7X1Xkdb2Rhi1XZmCrebSmxgWYMr",
  "key30": "5YJXXZrEWw9m1mKD2ZSkLsJZ2sYMe1cRJDRQ1nDJDKca6Ckagm7RTKP5PxhzagehZbULLJ6MMNncMogpW9owptXA",
  "key31": "5BDZiKtsDac1SDXGynPKdQLfmtdAXDFkN2XHBkrPvx3c1tAwkozMR7WXQiP4KoNbCqHoCzyGSaWhgpTVqhCqQDwv",
  "key32": "5rXpsn2Jn4UaM2gUz4x3wyeUHa8y31qy6fQbPijKEAgJsuk3QnZrwnoZxp6Ay6k9spYXWkTYqFyMyFtJLP6fCoBX",
  "key33": "5t1ZhJNkrpLpnQFK3VYhteTGeShbe6rVNrYqjKzjnvUeCFNjv7xNHLU6TajBd7724PMQAvV4ezr7usMKDefaro8P",
  "key34": "4exU1K79JHkvuSZdgYYpAPG5F83x3dAGgQUnRPdYZesiD6KzPUzxbeQdj4ADxpnkXp2Xg4cmWMpYBW4h6dALrYyC",
  "key35": "61GKfnAmmCRLE9gJQU8ic9q9VrNijS5rKRFaL7ah5dqXDWBT6mzyQMaGfCvAYgXwEqaCQG4DwsykytbLfvjCaSmj",
  "key36": "DrtCaxEL7u6oA9ZfEbgwigVdqVVkFszhC1hVciSM1yogmxETBM9CaNbVHFFna4di4Q34a5tCRuVYqUtdFSemWru"
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
