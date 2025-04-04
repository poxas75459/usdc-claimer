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
    "5F1fmYaAWKAJKr5HU56zWv1FbosxqMYHii4WXhe8ig4ZwwF3Tcr6CPwWoVdqx8HiWZj7crwrUkr7k4KTycRwq8UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkigmHiiTNZhoqCH75bBqZGQLxa1vfpmrYnMETQ1HE3sZLDr6hGJYW8iBx25dx2wWePeL5aoRdd9HbRJJUmT38Q",
  "key1": "4p2BiNRcsSBafjyrZqmTcojp1U4fQSFgU25Dd3eBJbRQjd2xqZ7JABhwhWCGDZJYmPsvR79esm6hgv65PqNNAiHE",
  "key2": "2r9dk2P3zdGGxkTv7xr7oV5hB1mn3eaQrC6NsjBt1jHKVH4XnZhHimGT2XSfeNeuu98cVikjCcLYTygDbMDViQzY",
  "key3": "4s95CMTwH1sVmGKUCLr8udN7Vrea3qa8pz7oWWjNg9iZyqpz4CkWQ6NpPgwBja7arqEu79puuana6ygqRNJrav5N",
  "key4": "dWXwVgbU1F3nuUSG1g81r4KgbHsKZV3Ee6y5P73xwrpH1pXyQPB7P5HrCFBPed1XZgP2ZmTBXTSPatjC3sTyUgL",
  "key5": "2u2LarLw3wdBAkk14cVe44gz7JvKGDEPeSEi9o6BArXYZ2gfTBoDyygN2VSYeibkU2YgZZm958sgpX3urcP7Yv5x",
  "key6": "5juKc28pNDoKZB7AE255uQKQs26QRNg3ndkG4APxtMTWB3V9dza7Xd6LTYLSNSsSXakGa1wH6Uud2wm828EsiDCG",
  "key7": "nT7kaAKF5UD1jARxabCswYtcuFQLAiH3y3qAkVWR3Yrhfu5FumiYmrLonbVUAqqup4xjFtrGX1JUVfhGFVN2TZu",
  "key8": "3Xu5W6cxbncf8NnGXdYDRwtaZShSsZT7EqWwfprfpMFniM4aFTEdvFB7g8iFfeQjSLF1tTi2QizyzyHdPQQhpzyo",
  "key9": "4hhTbwrico3RwpNcXusixtdmf1skdH21Saj4VWpgJAkvs7necKqkYeRkbgw9ir3whM1xSGBypGN8bZpFQf5jcmed",
  "key10": "5Qs2rTUuXLnFmvgAZKtR3oB3ihzCRzv4cw4PCUxzF6F3Ps5VyDL5vTVcxX1Q7mCvTDudmeavwZxGRghuMMGwJFoV",
  "key11": "bUaXL5S6VDSLdREo6DHMs7Q1jTkhb28VrqwSN6B22W7RySpQHfWrsMMZYCZTyAviXHjZRKr8pD3N1FtBmJrTgxY",
  "key12": "oBKpLGBfzeoEeXpxr857cmJmUFzaKrnD23zPGNpjS8A5DQkBKNqtt32HFCqqfwMAJm2QejeLjfVm8oCNy2RCTY9",
  "key13": "2EnRrHb6uGbrdxcEfdjyvXh1BUVeuoHXUGs6f79NFGFeDDcT3N6jWyqrQNtSVn3bHAKD1wck7MeKFEAmnadm9B1r",
  "key14": "2AqQ8kALQ22iNqkQS7GwQLrLKvkZdzj9eLh25q8x3MpfmdtE9sWZ6i7et4FWK3szGRztf9fZUKSHRpoYrNk3ij9X",
  "key15": "4bX3h9Jjv5tsj4fwCS3WUvGNgqL4y5kUy5AHJtfZGPh2qdbTPxZiVtB5Q3tYzc5bsXdjo4B8k9cpizu5XgkNJLra",
  "key16": "3jrgm8bpcxVfcDcEBjjsjJ1aAuQZCo6Wz5RZ5wXhwUSMrsRhmqDKdL9jbRAs1sfibWVJo92mgHWeTdKN3QFVWkrK",
  "key17": "36eJRHKuRGA8HLeuYR7gzoHojBarwB1PcFjZnw2uo3JhNZyJrb575pXUXBnpkcb84kU4RovRYarVTYDDZsTFs8gZ",
  "key18": "1sRm7wkUVcRyDGBv54H12VCJ2hmoJpmoD9sCkfPLq4QCmeBNtdw7BHCoDtoc84ZmeB69Tbas8d32PGa9N9T8vpv",
  "key19": "2LqwHSeTnLVYyMFuiz2NoBciHqcgrkVYF3X7cabeJ1u3cxjBz29V3qP1jL5piasxYgUQ3FWbERW3y6GGjKJJy1pJ",
  "key20": "hAZGRP6H6i8ucp1qYo75EPHLXwNk5W8rhJbFoHsA5frJpgo32jdHfijhWXSFQLoh8oV2Djvmderf4CkvaoisNFW",
  "key21": "3udDULagi2vtkzmx4gYstjag2m28xur2cvggHLe1ARKDtWkJqv4Xrup9tdAWbJy7nhqn6h1fHyxkJVyvpyF5NweV",
  "key22": "qC8XDB6vHkupB1haimiBv8QuXkHES6dSSF2T3dm4nvQeb5DP93v2KeC2UJeZFK1jX6enprRwfAbqdbVK7TA1PDP",
  "key23": "5mXUeH1Z4j1pwP7hakPo3y1urkdiCWYdSrinocAMopdVgzWnuTNUkMYp3kuavdQchM5D9heQwVoFNMGaEa6TZd5H",
  "key24": "u6QSC8K6kH6WGNNf63468AzA4KQVwYxDbKvZiyjfDQfPA5AY9C6QnQFLHh2w2hxBcE9CUuV6wC82JjeozUzhgGD",
  "key25": "45FYaaE9SzNQ52tFQt15tciTdESDWqeKDgUbTi9mMECvviX2bUrktUDhswV97Bok1RQAazbkBfjJmPNbHMG5HDPD",
  "key26": "41u2wdxzVdMLwZ3Z5JyiEDhbyg7FYMnU7T7ticjuTWzebcb7NV3yD5XW1GRHCkjZfoo99KGvJV8U1r2eCicwCiqG",
  "key27": "2HxjcLibjhtCEgnwu81kxtnt9g4fZmXqfeLXKkKePAdweFYQGmSYs6kKbrVsegPZGrY9Uj3j9djBrw5WHdgBMuXw",
  "key28": "c5P4QfHJB44mLqUEbDYrwDrr3C4UMge2LRDJ7QGRKoyUG59TTB71VdSDQxNYqtoBuJ8ZFcgbniETULoPFMfwrxx",
  "key29": "5rhMLLiV3BNEChGJ18iCvBLQc1xwTZ1XMGqpU9Er7svSKPoXcMPaQoaWR9fCAZBAJHgQGaW3ZWmnadFYTw7VQA7u",
  "key30": "4pDyCeHSA35AcEnbs9BxYSnTc2qu2YkCkdtXzDrpyEbv6xJm9JaUYm22zf1Km7ug9gaChJPXd6APd3N9opG6nDzG"
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
