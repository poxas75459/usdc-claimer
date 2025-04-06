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
    "5qMWPfo86WJYvYbAhjZo7c9wrkurEcoebRbE6bNXD5r6mSixTxWQ7BAg25u2exYyy5snNSRmwABkY4nwZWddK82S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxVMNSgGNbd3UtWAzdHn7JtdeskE7YCJEPg1TsVH5JY4BxygDy5npgkodSA66CQVDGav7xBqmbrVEpkwbnpdELy",
  "key1": "3mk4Hmt5t6PcyGkngMWxAiFmBGoxeZbu1aQ3QxRvQUo7ufRjTvw7KN6664e2LE7Qa9wiCfBzthwZJQ8Q6qkns7ME",
  "key2": "3DMvRMRPeHQGXj1v3MnAZQEvgg2NrxeWjiBUSxzJpQtKGVktovUxKA9oozqYovLvXVkvD2Tx6NMxLTH8Xsyuv8Fe",
  "key3": "M3miNjoc9iPumZC23b1UFdR3iThz6WywnJgzNKCGsKTvNHkNx5kkeFoq8yWAQb8qX73V2F1waeJ5umsggcK8JS2",
  "key4": "2N1x5wkn1mXRppKFuc3rGmGB8sYC71zHw14ABz5Mrc1aDvoYX2An3FjSHS8aoUh9aETCNEq8ez38XxGiw9oCiQMw",
  "key5": "5cJUUyzvdKTD8QFuXKCGfB9dPUYV8rhK9eH1uPXfeVb7BhVJV82C2fpJXDHNtc5rAPG5tPe5BeVjs7DBFMwN8hS1",
  "key6": "44ZpGk8AVjvq5kNMQy9pp5KwRTjYXxHcwkna16VL3fP3whMMnSp87DDgwTRMCA3pCrWb89n3gtSHmEE7JYd9b9bG",
  "key7": "3uAhuRRWzT3GPiTWY4ZSCpWEyai9hSzJXg8pBWPTTMD3HAWQ1uVQqhWzgpAkLtjBT7kvAmLoWeM1EpMzWEpaDsMd",
  "key8": "2DP4wtv3FX2Dsw5GBtcq3fiq8Zy8z2dTU1WqJjkyLLT1w8LhkppEEnZ6NuBmeZKyFopbWqPzLVzuovtpVv27MY6u",
  "key9": "5fqSscEMVb41WugJWi5zSCjWiXz2LovuB5T4o55J4XHfP2YxRjXQpXziKwqFTJxb7ktwcNjjZJSHvXrLmHeLXYzL",
  "key10": "3wcY5XRPBgwc2d7UJSHQLkjfJxgtnCf5F54wNDXWx36LoAR87YWYjzzVEhuy6beazX31eW9sDMMnntL29zj6SzYt",
  "key11": "5S2zyA8RoCQcdqZ9FbgFg3eUXveQ8vUKNrLD24TiYrao282iGTPPXaH6KgHhenrkoCNZuAvjn9U9YyvtNXPmmGcH",
  "key12": "3rmDidq89Ft1cC7VURRsZWhH2VWJYUE1ct4XzCwLYL4P9ek1mrBUYPqmsR6rCeL6fLvLYkcFcDSxozXPs7u6kshu",
  "key13": "3Zi63qefWANTivE284aXxrPz6KmAQYo28yeYiyvNxm4GBmGY8x4iifwBcf4odWfqdTFjm9aWyHoTkXiRZ8LUu2dw",
  "key14": "5jBEpWuto7ZxsM7RGmy6i3kwcn2heYm7aXeHvusDDuDXfUMZGFB7cRAspq6K1JgFKgSnvgKztGFhizcEG12TYxaJ",
  "key15": "8j9tM7fvaicLTTr8rAmmbJyhby9GQgvPGtBMxKMJDneTDzH84QtbNQydk6Qk1UUidEZrfwRezWrsgmfcjMXaQ2S",
  "key16": "RArMbttG5XPgzVWCsPHdzXHtn5yJAh5tdt9bvyLE8GRXLzHw8VJa5MAearEtFje8KFNZFuUY29PnpHFBYj4UtpM",
  "key17": "2UM3RFSbv9KFmQaNh6sr8FwRkKGmwtxotvooBLjExq4wWYoh3sWhuBhJfvD4EBKwXdfTXKG72xn5h67M4EXoeSLW",
  "key18": "5RyohCQg2MtgLC6vRkRMXiTgsJ5RG8J9FisUqsdAb7ZxANtYXvM3WLFWg9UA3nBreCBnm8NeMmSfCRydMQjgzMUR",
  "key19": "5nBKcPGSH1Eb7hVyL8YNeiYmoWqzzsqyyFHZnCfwH8YVQcUsej9NvRkx8CoBNf7zNGsRW9qps4PavXUEeCQgV6ZY",
  "key20": "2NuyxVMSbz3tPH9SGVauSqhwkgoU9aMvnrUZgW7jafE5bzDibnFK7ZWqStYWuZ6GPf5sEKxiafa7qkoPHzW2Yig7",
  "key21": "31vFT1bWWTihnMuc95mCSjuLpA81igrKrQ8cktVGrJW3VFk2EQaCMbqN8iNn9BMgjeAVs2uG4vMQ99gWrZbCQ9Nz",
  "key22": "5DfqE6icaF8HvjFQi4LFEzoY6X2hwNMQmCX5swrA7rLd36DZATVC6jbSYdXvQT2kRP4DLBzerhdaK13q5zwjM2Zf",
  "key23": "3yVs7AauV5ot4iRb6qFsSFvnrtyw6dW2mxrDuZj5ZtFtnw1a32XsK9juhKVG3gJuQpgJaoV73a7R7L4q1wFoKyVi",
  "key24": "5DrDxCdocGAojVexpgD2niSfDaRbBR2Md5EzAnKwQkzT4HXBU3DVMe5k7Jo3UEr2mBbt34D4cxsQ8zhmGB8KHmna",
  "key25": "3jjXRJiaUAYGJprjqNhLu9EmaxoZ8vF85SMFh1Xyf6uhcPrb4dbjvWgQc2eCgFAa4csQegxZccgmYYG6evaZYGQt",
  "key26": "5WZQvUE9sJEeQ8FGYEHjoC4LjrUwgjQ9mYbfm9eZL6BByKa8wMxtyVjTMXVKc7bqnBcRUDby8qUd41SmZVTKqdCA",
  "key27": "2EhmUDCGkuTvh6noWxMk6Y8i8ggbXMWFyyLxuETkDvtr6sPn6rGsG9Ngf7dqnCkrP9hgrdAyMrGnQEpjsGtjxVzg",
  "key28": "2CsN7jmH4JoMnBVThFHqSSubvXWJZh5wVYERgKoUXLzRutcTmLZdZLNnoikfL9T194BNpc2RiTXaMogoWs9gMx1D",
  "key29": "3dYBfEcr8dXomGBi2Xdgh7qtSaqetigjMcidWqTozSwESCXuTpfBXZHxxiXWAp5fpdtxB38TRh44J4ufWarWzEsP",
  "key30": "2Z56mADrPSoHzCC9kXoKm5kmABTwxptLAjBDvKpecUc3yEjAgGKfFwoijyFagWJz3FnSQjbVD1Aedaa7YNjf7LQ9",
  "key31": "3HikG4HadJT8jNVkXeMCcR6b2T2HUpm1EhzmbcQscVGHeBwiW533igN4i6jj9styATdjjbNzoY8gVS49EtBDdSnu"
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
