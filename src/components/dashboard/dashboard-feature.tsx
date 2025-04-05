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
    "59MjumJViewNCf2L6YfWwZ4Q6scQHPPfAcExC6Dp2J54jvmLEin1NXYAoiQusbZNie2ajoLyjZwtjoPQv23uxCj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8QumK5asL3iC3R6xQfUzHfdzQCfer5skVZM6uc53h5w1cjqE1C4r31xeYMpcbxGYnZGu2BdnPW1heUZ9FKjfoQ",
  "key1": "3SxHzAezY7VBbRe7z6kMgAnmCED8vJSRRrtT3Z3Y6kkpyyymxhVtHsgMMhdhqivEVp5jqoDbKeX4LkRpCUsww1sy",
  "key2": "2BMxPJBXcHQREJ8EhqqkkMhXou2TcEDt8zTXg6mNVJSULmy1jA4snihxn9CytBHJjXQPbyUSQRoeLUVxLZBg1peJ",
  "key3": "5WHN2NUXq1yXQzYjpHebsLr1xponbuKZFtmm4K3KqicJE92bcfWfD47SqWB8pvtrjC3tdLuaD7DmJ18Fti3ZLJ8K",
  "key4": "wNVJ6mvso3GvHV7JfJ96HtbgNKqybYJ69KHrKurRm7TBJJHG7bscpq4hsakkMn8TYV8TFPcnZiiMBPDcFk92AYw",
  "key5": "jTWVKeeXAf7zToy7oKLWdQAoebNtfouFxKkDjKnjqSC3wRvunPDSJ4UTwyt9h3iQEBqtq9vSp4iEmU9xG1KfZia",
  "key6": "4wKp9SEukjyk5MENdYGPkgjLJu7nk7VFHVGKpW3MzvjFTFygNncDRHVTEsZPDpbN9bDYnB67sPkfSxUaNKJAzcCr",
  "key7": "4b9TfUEqK2FV2Dhk3U4T8QXfcFmeXyVHUuEy1nFXGCQNLfVM53EF5tpxPrMeahN6ZyJvKvahTGAdjUpEeBCp7QQT",
  "key8": "4rDByVKn5tw89dhip4BmPqCkLybnCfpJXh6hRT4S8Dc5TCSdkzVoWbGWjAx5ddduLfxmHEfkEWKTgAVjeEC19p7p",
  "key9": "PyNUbH6qa1h9sMrt8bnKmyAeiNm1jHHjBK1o3NA5EdhnnedXM3xwqBvLhzeADi6ym6tSTY4SXLSPTuEGEFYGESb",
  "key10": "65jyBquwWkzb4dfq8M4Hik3LcoRu9u2dV5kDr8EwfNFpnANcq6xTNUCWY8oEQbDmRyxBgZpCjXYFm8dDcoQqVmMj",
  "key11": "heYYsn4MU8BtTxYaADuQ6Y77dLW5Yd2hcphhpMxfDakxbgYhNnw4DDBaRe4GDUHJgoAg6sCauJ25tdaLgRuaBgG",
  "key12": "yEeRwDChPd6GJT1qQMTGY2UtAsDnk19sSRwPArWum3MN95ozbjkwXnN5CEAy2o53K4myAtWZYtFcHXfXSZCdG2J",
  "key13": "xr65g6R3RnSiAD4WbErhwesvrckugJm3wbvRjfHivb57PuZXuvAcELWZjPXdLKbb4fNVJU624vQZ4ZciL1FPS5Y",
  "key14": "PpJzd8h74GvayXKrGSazAfS4QmotGZFHus9vcjxwahBw3xprqrSTQwf7wTfGvAjD1vVmfQQQGiC4UcnuS1kjMCn",
  "key15": "5NwSPofeYmetuhVunYosqhBGBUqnM7CGf3oYFvCFT6MXN2mWPUEpeBJPxnRrktb5pfmsWxa1G8uhJ2H64U41KPdj",
  "key16": "5UWsmp6SQJktamq1MK7C1BtvNi2HtaqQFPkEq3mY1Q9ZBRgXGrAsPmm6K2tpdCi8AGB4sYxoDnzXWwYwe9b7uEVH",
  "key17": "5HW9spMYPEA69QTpFNwf35mytcWw1BCJA63YUr71VTHTAi2svYiJSi6tvc1jHGi5qohvPyTJ6Pk5m9yfxJ181kZr",
  "key18": "4PT7LRhmSfMhc5a4T3o7hHygzZL1diSZDQWJPr9EZVcwb9CTx8jYWaX2GrDqiyoL2cbhQRuE446PKeJV8PkTB8TN",
  "key19": "3jiftJ5FXJfNehE6VLyXT7SHaxyyGy3EqVFxiU4bwBXKY7MNqNmKEaBeXQeXgc2uqY64JXsCSgkMBtJ2cf21ac6S",
  "key20": "2qaoJnYKw4kvL4Dyy6nJKwaxLZvz4A8ZWKZmN8U9kGnqNE4TebEAJGzNaWXB2qaewkM316Yjxg1F8K4bUc2FDUfq",
  "key21": "2xX3hhWwWBEdogcj826UwwwGL24Vt2knUjWvWdnwXQX6k4vvB2dVJ7X76Fg9VtmpcuMk8EnaoSPxbMUusGLngcdH",
  "key22": "4TTxXZQVej4hy3CDVYxRVUiUdmSzLSi95Cpq4rnfJvudXNfeyvzFZRwe7SGqSHpTCiZPneJwNxT1SapStorYu98Q",
  "key23": "51UXLxerib63JXaBxDcfHt24oyqAELHkBR2baSDvAkKutSEZzhvHxnZYuZcqibf9oBraoLKVVct8RfeR1KLXG9oP",
  "key24": "jnEEkwHy4ztvjoB6PbvN8vsYVhxX95EQQtCj592itwbkr17iLft2BFrZNfEPdBKEJfsdmwf2trvPda4RvPxPrFj"
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
