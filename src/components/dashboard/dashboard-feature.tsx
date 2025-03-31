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
    "2MnbUBC2VJkZ97oDU5doPqPkpLByzFmVV9Gq16wDpa8mxx19pajLF4ABXHz9hKScug8LuTLzz6icQvi7DJWHRooe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LA1JPnNJb3eoc2GjqBxPNaPsUbQ73fxaMoJZCKdZRc2kM2QtzqAyzCRz4Yp8MQqoDEY9hnyVzo4pCHN9ajsrdi1",
  "key1": "5s9kB7e1cTPDuYprrLdypHDrnmDMNcTgmP3etLFmjZEA9v9icuJuXSUdzQQdAoTDNXrzyqQVPGaEK5xDzyEfYCcG",
  "key2": "7NdySJzcaq5WqfSyWW8FbMxBEFyzBgpjeNSoPNos213oo4qUMY1TUty5K1KPEAimdNiVVaeiekBhkNkFAti9eHw",
  "key3": "48hQMdggYVTb428MVCNzm6WvEtgnQyyrUsPRE4rZkbUmZ6VSaKFUom8UAb1tsSzzSNWGiprzvwmZ4tjKs2jKNQ4Z",
  "key4": "4qyLv2prMCZa3JRJJpFXmSmgwxGvtDDSuf6uJbfLAu2QoJth5bgAkKAfpAT1tWccEnwsdAjuKgPNg9dcj8N2EBDM",
  "key5": "3UJKzxygYtRGADmpayHEPFBshKeYuewgVz4dKwaVD7j8EGBDxHsHi5Dhebs8441qn9u1JFaVtm7AHbXkPmEBcpb2",
  "key6": "665Tries6tnQc7BhhpdErk9rNmHLiB1RPezUhnzN5vBv2mgtDUDcqdzFPb9o8J6uYPqnus2dx2tnLFrtN9EHAVnz",
  "key7": "49MgdHLY4b9aibU6KM2po1sLqsyecbGLkdBSvyuo3hk6mmUTqZYobyqpwe5jSPVVtDh9rpTivyigYPQ96PjzFBUZ",
  "key8": "CKwgnhYbpARf9mYcKygAyFP862jvtjVfg2Qb6hYAzmhrTcEgghtnCakcsbf6P1UX7Nt59FcpZCwDwJ4u6w84rid",
  "key9": "V2Z6gyHkZjBeeADPTVS5FBy962DwLSGA2HonSuBoe1eghtTFEriBXwZvtcibEPmRPbY68pvJkWpt3j14maAQEr7",
  "key10": "5BQXmyhq59TeXfgkfMeqgHujfJixp5gUqLhqA6gkzPh45izc7Y8q9jRdH8yo4F8bcHCNYFdc7xw6iYCCCEE7tdJX",
  "key11": "4xrZNrBqiGkseAjTznL3GVbi83m5A7RkqcKqMM1vj9BcafsZYaihBjmSw9Zo25dLXvudkxekTTkT4iKFpHRDBuHn",
  "key12": "XnQuLDKLJaXF46RaAsAdFzihSYBKLN1Sqj6HqW2xACh6EbvMKxjDh3bobrZ2GEC8WxrMa4TNZyimCRDHLfoUipP",
  "key13": "5CoPqTBKFqvSmg8TZvLju9dhq3Z872yMFCmMs2hA3UyXUz7TvVSy5c659oXJGgrF2m7nVeTxpqP1YppVvFzC1xQC",
  "key14": "3Eut3u86UEF3Jiez7CxhdZTRmVfu4Mfjc7wyv5NN5vL6kDEWHgrtGbsFPmZsLjjURk9LagEW4ERtVpzQipHZDxt1",
  "key15": "umDvFPSywHRzm7wc64ojcPYtLg7hfL3jPqwsp3v28nBW7KdzRh4kDhrU9V89itEfGFuuAgvn6CKYqwChoNzKhSF",
  "key16": "4ntJUHDUGEvrzWa6T3TvYfx6UnyYUocCE3thqjBMjaadBVj3onwkCSbBpQLrf83SEFu4NCBYdDUbJw3xx4p59hqg",
  "key17": "4jMBQZaqvnEx8rdUfPXK3mMM7CHxSquk5RpSLwSdCEfDLYnx9PVPE6uJc2yKKULYrLHFLsX6YetkpZdMuSU4WJrg",
  "key18": "3kK34ARoUotZhC9JiNMYEQRFbsxBDAyEmZ8gHpkKFRTjBfcs3W5MZ5DwoYbGzNSWac8MKu6YnZ1B27jo938XdaJU",
  "key19": "52fa3MxDC3zZDgHMzD1HokNdbHZvocayKUomT6Q9f2Ukv9AwVsakuH4TgnC25gDySmZw1egJ9GbXJZBnZkB2cyTp",
  "key20": "3WmTAy4973gdumA1hFEnVkVt8HDXBP83k9KhQYKRHDXhkjGEWanv3kxVMFEtnHxHGLdsmbsB73cQ5PHq3syDaD5D",
  "key21": "5U8JRQC1RRongUWcTvVedDenAfffAYfSN8tGUh4UUvrMt6dVf9pMFrFFWs8QhikjGdhbUrM9az4jwuZVk2Ly1iUt",
  "key22": "2nFtTNJ77W6KZSs8ZDzoW3bygtWdrd4uh6TJcfhL9GJNagcEPL7NByqUQy9WmsVtmFUeZb76YVPrzyHff6WCBw1C",
  "key23": "3WaMt56vbseGnNsC4Niu4PFHV1rxgjsP41ryp4oyJHtjTiLEh2YGXcszHnA6kLNHMMaFUcBbm6rjJun2a2ZHnhxU",
  "key24": "5E7rEYe6xyLohGddDXczCPQGE4PXmcRACcxBYDWg8PhLmLr8VUGPyDY6B9ppeUwynq9YwHmahvMxnqCxP4n5gFjv",
  "key25": "KZECJ4e3srPEmwiAxQ5FkNYT24TnWCkFMwj4j4p1LE7qmkLLLNJGv21XG9YL3TRVjwd9oBVaa2nrZhTFwV4EPDj",
  "key26": "YsMwSj6BJCUh9QG3hjTAAHvGLjuQBSAxJSrWnVfPhnkR8aZdrQFYnxkgu6cL9ZZoXy6tzEm1txfGia2JqiUNM4V",
  "key27": "43FYv2rPLgKsQAVDPGaCkp3fnCqtSJdFfZN1MhjvZSMwSX8c26NwW5aHhF3Q6Djzz4W6iiuczCqfFh5woJKEWs3E",
  "key28": "5Dqn6JQhNyWnRPgsiUoU3y6scujwsy6wiHuhweNzxQv3BNKUci4DJtyfmp6nf1kuFdgrfrV3fWape3TUAkY1N1wJ",
  "key29": "4FLjsbbV79xqCfFrkbAdXUVoFLeZprpTdKzCZUtoCJeMbx3picF1qbD81Xyrrn4CrcKgBpnp8LeMZ6UbsyS1NyAM",
  "key30": "591Wtpvu2yXaRhyzLHnB24Dwj8FZNAFHkMjpMLGgycTLzvtEszFEcUyWPNc9EqVbK6NHuDQ66KnNffoHUSfb6wAF",
  "key31": "5Eg39cwusUNCkkAKbHuoBhrmKi7923Y5wFgUXrxCAa4CVdR93mbfg426CPR4GUo2Rv1tkDP6XhinHt2E4NqHjRYb"
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
