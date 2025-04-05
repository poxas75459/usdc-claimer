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
    "4ujRefEG4tC7pdWnXciQc7fzLQhcKs9usVgzgM65sFdPJHZH5u6xiUSQwtgdtSxNjvmWQJEfG7Bn14qG8ef76mSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hx7yHoh6SqQJPxY7JQqXxYhXsZfxb2Fk4FqApnqzxwaLeSzoafoG5xgw94ffWHBrrpAVsNXjVMAVAgan91KeWBk",
  "key1": "2dSaBvzANDpKw5z3R9DE5uvKarCdZ3SzhKgzhXeandP8XzJUZqK5q9Togm4bA24DbXDau19u4NQ6gmZGDgB3wiaK",
  "key2": "rMs6Rgu4JTRjxVzSEZNQVAw8X2LjSStESyNqeE96hhLgNBdQk3pmq8hVbyVa6r8SNswfdxM9QCSbqiphtgLEskP",
  "key3": "j7SQ7Ct7EHPQTqo1YJkQdzbci1yiufU1Gp35itcNzTLqkXQfVoDo15FfM5kH2GYQ9cLzQk1DpcWSGkND88XNrB8",
  "key4": "5gK4sAyFqiHRgqBkGis5KwAq8y4WCC99bjR5W6fdeQea83QcBbhxPsoQmHq6tAW45hX2WUxkZnkap3HJZJv7gcVc",
  "key5": "2iRARo3fY6oeu6WuvgDFugQDrbeHPQ22jJisiBEuvLbS3tbRUdtsXpK4egbz7vquEYCaxXowMvNzX1A7zZfgWmHL",
  "key6": "2vyL4yNhoCFVLJkNefmY8gLMqpLG7SFKrnZHN2DCBRRsa4Tb1212BksHWuQjewMaKDewfy2gYnYsoE9aCWCzyGJA",
  "key7": "5RSAuURyNUG4pwQE5vGUNrrCxgsK5NFUQnKPRssEvU6sKSPSEWsfEixSJfevKW4s3fH33TTfLYpCZb6EjuU8RGSz",
  "key8": "4KLfri386hNEUm468dJa7WoLHTxTXQUz6t7uvDwdVKcb1iGN1ZrQoZDJnoCjnSVs43pUShamCdvsioxwCtSByD2m",
  "key9": "36746S4q2UtTrAApSKoKZ1TZegSdZoZ6PUnF86BKv5d1DSYR2NNShSfU7A16QECuEiXJ9eRRmRSXHWBDqHUakr4b",
  "key10": "2rspzQtFrRZ6dUK57SiPeAbyVoZGMxUHjjSVEukazaeA8UQDBQEsDom7vtf3EUorYNPoDZ2qDRJADuTHzssbn9Pw",
  "key11": "3NK2MeDEkY7m4kzJAX1XzvLdTYNY683YwKZYMj2ftumptD7QtafJmyjbtu5ULpJZzvvpvr3UtDmacn6hzj3cRmEU",
  "key12": "5KGhy7tsiKU3R25mPWzPXdGKsQo8uie38A7T6M1RcQo2k8xqZSbNqqPxeF2RAmA5hU2Uax1zqS2uAa3id9oXfa28",
  "key13": "5SMqHrxqdXQLReLKWUkXBFNVdToyu25vsyUZA8zKEcmEk8LFzT2vMQmPLZQSX25R2pvgTZtREKDGj2HNjrdcM65r",
  "key14": "2u8AbTNxyDZH1PwKMwWyMgajhdJtf2E1Ykc5Q297Ez9w11UjXFbVwG9eHCH3hQGa9DdedquLhm2YRbpeX8uC9a1e",
  "key15": "5PrgH6656z9ep5wQSGPwzYgJyUhtFHHrqAF25ZdqPrUXEJWBiGdrZArqCUZLrGLNHuno2cZP9uhH8qYVn51bGRBi",
  "key16": "3M5LZ8iyTxu64ufxmNvBgKtS2JA2FEsm3p71eeuzepskKYginpc2RwxjDtmBgCwvGh4nevhMHXVD5BrXKH2jtFqg",
  "key17": "56ywT6TnqezBXmtSqrNyDCKKMSKk5UWkvLg3mcC9hGdrMrvM89vo9yseMg5gjYegjCZbHQxzyAZP6CrPXsrnJopP",
  "key18": "57U5fSEZJ56831k9i4F7HXEUPPSHEKhwLjidrY8qXfEAEPQgVFcVzbKedkG6uNtvyWiCFKfeBor8B64wez5kSFXr",
  "key19": "XukcHZjwZHQSxXBzGkc78dpvJMNH4FBxNfb6sUbqoLZpFUNW2jbBn7BXwBSJjuU6p4zw85FxPP3iKdgWWEpAAwH",
  "key20": "44ZzuSJaNYmZTXw7Exc3ow9DvquzMTTx5KtztN71nC6DAMic61wTXjdBfUkJV3mRJrr2ysj8Y8Z9tQoyEy5nvaub",
  "key21": "4fw3P2t6shiEtr9MkcswEY23xUaCqdQJpnhVbMi35dJqVozsAoqHSbfhejkZjnZzfaGRJoiXkNhy6QeAfLuG9yMk",
  "key22": "3KmNTFLNcD4S2mcx14LKxH55tpbKZ8tYvhuCK8bgyJCnxyDMfmDha7b25Dk1UqvmDAqN2ExZUimtfdt9f3URBqg",
  "key23": "61qSS4SdrwUtsehqE9iVrPjy6Q4rtTDUNY2QiADGFfeFKZnbAo6qa4hnBV8EGeHKjbtygdk4Xh492aZ6ddxyNBYt",
  "key24": "3ioVEV47pk3uWfMkGQz54hW4infLBj9xDFmvFABWmSxfgosKt5RayABHTtzdqYbRojCAYRgzxCvFfpN5dnmBNA5D",
  "key25": "5FQpbHrjxcPBchRbvWuwgjDGsVNKd7fTEj2gaJP5yPbmn9SJTrR3AWNGMjYjoXkU6GgH7gHuX54AYtKmVwuteDg7",
  "key26": "4BkUNrGRu5PdW9QbHPYnL5uaahXiy8RsRD777YgJVjFLh7H3F9oyVe1LmEvsidxjLo4ufp5epUXipRzEquZkCz4w",
  "key27": "3sVZcinYT9zX5abVE8D3MA8xDfHKYLDyqvbkWrmtqp4zjgDexYrk2XJsihRv9ZZ8tjDrJ3VVsu2xuhod5KRz6ffu",
  "key28": "5GvGGAASNXR4yLGr8VDavmz6CgBmAkGQpTvLacnojMxy7foTyW41NX17a8EsHtR65Wbxp4YvtW93Fjw7MUpJMsJ3"
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
