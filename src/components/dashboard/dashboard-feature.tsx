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
    "42ythEPwCeLBiNUQeyYaYpCG3RwcwrvmErrqJewDhgf8dnxLAWp8mBbjBU343m4WtqD2C1xq1FdqXCJb9CBAWdR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNgpHnw6JJLvQvbXjEuWSTjiPid4bLEGHf2s4DAkp3Gtiv5LxGFWs4KLHbVh8p3gug2bqeAPLygenxtodhHP7BF",
  "key1": "2Kj4d6998htuGbjifo3Ss52cuRx8en5TjxQ3nAAYUydzG9VGvJUBNFBVRWzgFgXZyZxcWjzR1NQ1ecZm7MeExwCM",
  "key2": "bWd9nBqJfUcoeTaJDUySkkYL4cFaWCJ6FYm48UXZbd1mzDqJw35T1o14Kh6coEvfRM1CVc8iXCokCGPwPvS4Nnw",
  "key3": "tyPrXy1Lvk87eUMtASMw6qBgyvwuZwXBFmC4aLodUjuwNnryTfLVBUJRVoEjbZE5htGjE1Du7uHWSdMdDrWM1b3",
  "key4": "3HQeUVAyyy7dzgneX7s7tyG4zxzp6bVn44qc7vnt44wN6TwUUgCxHkjezgJX4rUkTUXhGtQhLpjH4ZHXxKdmVCNQ",
  "key5": "2aSPpbLRzismfMtZQHYvmw4VtnMhLkygqMeg5aeNjbNzMG3mUnfHgAvLe7tiXcgNQLhSoanKrWK4yfifMpjLuQEx",
  "key6": "2UGx3j5P9LM1hYmq5smpf8p62ScDiWEkejqQwNSSpZgPdWuUAPNwLfxJneoAqsCPi5UDGjjMpJdaA3sw8SAzijhW",
  "key7": "2C1r2ZT6yGcZTN6uAR9ZN5wjTSJA8hqoQWJtfe6y7a7nouM9qV1GjDZgQiCgDNzvpvBeAgNrFEFWezzmZQxFDuoU",
  "key8": "4355Da2jG8p8UK6xuN8YfoMccDjEcddQg2AXB7TZcYPthzUUpUXrY2m6j9CGzutK9KE676XEDVZU5BNkGHC8cuar",
  "key9": "21GMdkt2VAG8xLcxgw2RFHSeD3xmqGSvfttvgPwETSy3gdzRP8qdRHghEPdb1BQC3mK5ymysRWQQ4AWLQc7vsBuS",
  "key10": "4YcWbxFCRTgkrsxjqZSoxF37kJFjx7pkBcHzLd9D3kWJoNdyDsqjEykg4BQhpDi47mY5Gbtni4XiPYWaebJUVKgY",
  "key11": "483TASBGDxpbsYfWCwx1XVB2Hnrz4MwcLArsN27yyDFiNPid2HhtcDg8GCqPUbJMQcLWgk1dkXVaKgXs3N4kJA5R",
  "key12": "5W8CZXCeiuHEmSvq4XaCi2YqL4xk64ZPjZL48PBbwGXvwbeBujLndMJki8jUPke6gkY7WnQouxDEmM7Zq81r3zxi",
  "key13": "2pjGGdxg3WA38tMnWD2LY6orTYstbeEb81fN7uYVVkzrF1pkxVkyoeqwktXVJtci6uNSxGLVBR3tkYqAD3R8Wa8Z",
  "key14": "BnYy7Fw7urACe6FTF7BFyANbPWq6ALwem6KxrvM6wmsUVjzKcMvFpsUeXoBqkmUU9cihcKPx7s6235qaPfXmpry",
  "key15": "2a7HZoVcwd4qQmguCxqLXRi9qzQb7zUXzwEvJvMvtk3sVF9pWRpGTdm8XnrD2qeS5WmSFUdFihENZi9RdWJx2GUP",
  "key16": "4RQqvVS38zKH7a4XU3JfAnnTKgGQGskj9Knks4r8iyFc3yjyjinfkHGg6LP4nLAUruvw352ssNsG2FpwVmEL5x57",
  "key17": "48fnbqyEKiLHnzqHAVWzpU6TvGaH2esDRnTmhKqJ7BogDhSjgZHY9xC66WBWkbbQiXontEsTELCfUcvuWfqPqeb1",
  "key18": "3L2js7CsdpCo3VyzgonnZ5RkwjQvWSMYBrBgz6YhwvP2QD1V7y1FUL4AxT3ZMGiNs4zDJJDwZTsdPeaTYkDiCiNA",
  "key19": "rbFV9YLKhm3ki4sxNTmJBKHfMSDUSnctcdmWgjBJYzAHhTcH6FBLvbAcwBBChjAjBwrGebThUhJgwSno9PxM3Ms",
  "key20": "4eMvy1GQ5FsfzvmX3dH4it7gbAgnDSjzB24NDFnjXAB5ucrQ3nFpEJDAZ8Gyz9LmeUjhEmM8shJWeXkBbRPoiQqk",
  "key21": "4Mjh5t62cvRbBxi3z86bfDJxhP36JV8w5Mwy5s1vLrsjNaNiaXXEedTEyWtaGDgm841RjaKvBsHSQnasjLdKY54X",
  "key22": "48Voet6qxMeMqiTh9568dypkYocraF36SJPeu2JUPZW1htjXNRN8D8dDBz5C8gMEZ2vHtwwKvR19MGVogPiCXim2",
  "key23": "5JD8ix19czNMC9iRnkPxvdaT4Bx1yHEUbMbHrUh2XaXc6xBNJ4AKYWX4gKgLTzK5ReZQp21KUd6FUtedTTe1HFaT",
  "key24": "kKRcmgpxMZBtbB5fquhzXSH5VGiBKe9Mn8hHUaaxtkLYYyXkj3GABHQirW5ZmXrp7keqT11usE5RroZeLAy1i5Q",
  "key25": "3CnU6p6V1YBWLW5kVPnzng5eYK6CUgZoFPqjzM6ZzAD6LEPAy5o5TFoZt4ckidXa2RifyNeSUYsZCJD3nWmdWn4F",
  "key26": "3b6DXv8JBWSTWKpRg936L8aTPexcX91BpAw5fXcNhykp9Q7YTPoGy1asjkiMwTWUMvny7nTr44jf6wbSCrpdLk6k",
  "key27": "8VGPqWNEKnA2TojT7NoT5hTvwuyQgWEpse93wPh6dtmroKM6NaonhD7ABH8KYwr2hrFCNfGVTJqtpsqKnt2hgvf",
  "key28": "5Jj9MxUGkgJK7xRHa9ua5UpwXPNywNwrPtDFDJ3zuLhaaTACCKLWxHkc3DjhzugAA6VL4vRLNNn5nff7pvRdPsea",
  "key29": "43yQiatjY6aLVRTS4y3WWLEnQygbiSGEXCQ95Bs1tFmPx4eHNPgB94CHYvaBhFGcwMF1vEmHyPyaQUxTpxyCFKQq",
  "key30": "SoF1M27i8dfWdWv7s3HVJCXH6Q68iaKbXrL6VdnULmAu7YEQ2qRNaxXHmQsyEgDLE9hBz5efugJAwsrMZfidJWL",
  "key31": "4wiqK9c2p7ySiG8VviMHEkYuqn8YGH86RMANDt5GT9VahCY2vrtNyM4Le5iwQusWyrRuyMj3tSJqvFvaPCUhZAnf",
  "key32": "4qExR8Cf9Fh33MngxWLAZXny8sqSJkomgRH4s5XQriBdnWLJDXsdnv8cwCDQo3QBneRwuCMkqXtgQDTjWPYyfkHY",
  "key33": "24SyzNCESpAgP6rmMNHPgy5dCLJerWdxbkJtFpC1bRqKcT552p8zW48TTKWknkesGnU6JXU7UyngRQYYEivfdr8R",
  "key34": "66fN8YRfrWKwGDFsegjZ7wG51yE9U4Vyg5yiDRtvqNwC6PbhAUGie4kLfYcMucF3PvzC83usXnp1FATzspaNdPcu",
  "key35": "5YEj2McHWkvgni2bKU3nyV9qUSm75PHHq3LRHEE6CmWEpbmn5mjkZbhSrLMfxuukLkbLYeVsdGCqPaE4R4Fkvw9W",
  "key36": "5QWWeri6xvnprFVDNUAjn6d41fBjtkRSJGnkjtA4xUCtmg7Ci7Df9RxzJt27uhcDdZPXsf2Fj5PsL8LqC46vR1p5",
  "key37": "fBToEe5YkzoxpLfb6FqoNhrAweRXDu9uCmz3JcMzVkcAMWV97eLSt9V1F43aVwJyh52E6xoNRAoHEwjPKtKS76f",
  "key38": "JYYdr7MSiJb41VhDNmHfCUTfihYiobZYBfbPxzEytDLwJjXiU3kLTRAERDAU7ENpeTzEoBAqzVe5cknU1Hd1Afc",
  "key39": "tvKRzZgD2iPvqUmH37ojYHDNZDzSZGJwLBu9uEnDSgcLoeL7wQy6kxN9mttHnUbkXinjAeU4K8JmSoWqdLHYd9s",
  "key40": "mD2cqjtS3EHZ3FbBTm2AdUFvyhGEdt8UQkZsgVTSJz7VWNsqHN29Xf7N3wrcRYGdtDrCMRe1ukm1P6pyLbXp4Vk",
  "key41": "dYY1ZxKq7vvVs8U5kYSwn38d4HEN55Qs3f5GBqiB8CeTEtRT3oHaKQcH22TnrmHSnZMhEGh1FjcdGubWJ4CUE7f"
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
