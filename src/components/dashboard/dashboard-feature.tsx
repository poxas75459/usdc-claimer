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
    "5AKKviAMByZA9aVEVuy6un459oNh4gcDZ9r6fVZnGbGUapomMofy1gJ1iTAak4EJUn9aJyXpg1PfqK1XuLwPQw99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDb9v2eKYNFtdRiU6xKNQ9F7SDKJVVb5vut1Smeid1mFX5TjGpcpTdr9v7pknvXR4fsd6VEfhPN7a7PRnpsSMoT",
  "key1": "4ymAM3uNh2mER9JXG8oUysShPapQKCErh29dx3GkoWwTpZmLmJ9AnfcR14Vham2exEVbYjwYdx1KKShXNFYx69bs",
  "key2": "2oW3rWEkZtQjRYCNf5BWzJTAp5e17dReov6SmAoiG85kJRoz7uxA4Lcw6KgsL7T7xf4oQjrqMmRphpmyYX2BP95r",
  "key3": "5DHEUDsZJrgQB7dEQR4icc3LMBsX5cKgm3dpHviSWvGuRnSXXU7fjkNGj5CruSk4vXnFjxgy5qHXmXkWwQ1uYkmi",
  "key4": "6pERv5hWGqx2sEwuVZxLtE7Kkk9NpeRcoU6bkw73gg6Tc9pbbWByCLL9wvVTv4JkbQcn25axEqrnNbtrhD2a279",
  "key5": "4ycoMws9nm4BH7aDWt845WVnDwdmU6ov6mwLCYa4aiboBycJjHM22fFZsKjzKY5KzPw3pTizrmeF5iSgtZqKjapG",
  "key6": "3P55tCFogZPfrUrRL4Z4Lms35HoDbVyCuntWEeT9MrAYm2HnV2xPYxp6Pudf1vZ8j9ByKgZBfSDax2q4gXWyPwBg",
  "key7": "3bLVUhEwDDpssxb3qiTNqNCHVtTPzymdMxXXusrhsiZTrrS4Xu31Q8hDbhaERUtND8eTBTP68imbq8mmQPNxVe3S",
  "key8": "5iAbJAmyYcJfs6UAPTNZo4YE88GoZ7Zz9NJNcotyCeJm6WCP996ksmbMbNZLtfH2Sn8ahTR2x8jSKKdwTBH73vdT",
  "key9": "5b9sGt4eY9ru4vDYqxZ4ZisVqkQncaos31ZB2G2BRZr8Q9q5g2qaBej6NjHZDE3XVQtbkoN7w7SMnfp49NaDmivn",
  "key10": "4PY4n9HFuBXDaeKoSiBVdUrCQrQBbHfCCSTLXiyE9snP9ZStSMSRhjfov56ppJ5ZsPoJuCdv8cvnowgxpYUeSAFu",
  "key11": "4enSrrTzfwbFxrZtxddsbtfESDbUmLwknKFN43eRVjzDdbrU9cL7kHmi6kMz1oGGxDkTk5s2xuxwyaiYDeT3xbSq",
  "key12": "4iMh8HP8XQGGQAKjRcdaDpQs2hRPy4qD5eyFPCL3yELXSd6VL4cDqS76EengVCuF9mR6tSNgSuYF8hvR7jZMzbSD",
  "key13": "2UX6PmwEnxE6yPHxDjqH9xFM13Zajw2ytruFyWFtaWPdL5KRwyDrLx4q9dfmyMTTDzqU644wYehG8DvXdMSMhYLS",
  "key14": "4uetp4zvGu6s3fyNGkeR4YPRyxeMaUSAcf3JszeoofqYCu6fZLyCnnraMzJqpTFqkA4pccEw8tcH5B5jmDAVChUG",
  "key15": "KRUebdvz3ZzXYutsuyGMww9c3Gibe3sizNGazumWbhxPpPBaasuAgGemuDp8V9hjEk1WAiHgbYcVN2Vc2JWmxSe",
  "key16": "5zRS4cqqFidTCTsV5dFQ9iCqjn5f1CpLdYUbVJ51tPB4YULVRZHHVrftVzFufekLr2gGZ8r8b1BazPqoHRo6fpGe",
  "key17": "2X6XAaNd67YP8h9BhV75gtkyUAG8TNz2MiVEybi9HAXvbsZy3cPUmJ6Mj6f7MqkSANYfJKe6mhzh28fAGwSyoqZp",
  "key18": "3P4BkznW9jDF3qihgyMjrJ945uV3QSRa4iLKrHNqdBb3tqbKqHeDbeR6ozu8BSLjc9beRCubTdAyCZxdCtcJb8bP",
  "key19": "3AEKUA8R6KMu72YWk2Z1qYNAPa92ZhifYf9tJH1pxybYFYKCRBFCnDVUb62hdFaiSN5o5tysNFYjk2JowBcTgnXA",
  "key20": "4FzubNj3kDB6LNeG7dbBhjS6aRCXTL12X3upEyhiZ9NoN8qsXLUP9bMBoh2hcr2u5RLgLiPBMSw8W939p27MZG55",
  "key21": "5nmDWJ39oEAhN2455yfgfyfZUiVefGD2tP8U3voFuTwsUXrhnkVWV9Avbb4br6T33SjrMgETuCNj6J4aMunTkc6h",
  "key22": "KnEMgAy6KTE4bep97T8jagXgHJRa2TPu2U6TcNQyWEQMYBHnoG6UFi9fQF1YUc7Q65Rfy3yQcuruGkGL7qRx1WH",
  "key23": "58MST9EkiKEKssWPKG85n4vRbyoVGXrV54w5DLtAkSnnPps46RKhkX7rrTeAfCFMmBnJoYoGfCVu1PHgrbhcxtGK",
  "key24": "7MVxe6vvs1vnCf5D77hHqbD19t7VQweqzFMmTeR1EBoHRweDRWvBSr3RFBw7T3qWADSDBMxSn7Lf4vCnrrJswc2",
  "key25": "3FHgkgwFaWeh5TR3asTcfdmzrJqmV4jsuDVKStvaWcrmyeisj6NjcUA3WkCfANH95NRwtBF489z11mj7qopJWeEr",
  "key26": "4dH62RP49x2WvjTFNgsTKFzEofEMhj318WHsMbgSTpTj91kUrG9hboTYceipgpqRcsc94BrPFnCArEh6wv1QGZGm",
  "key27": "4Qhho5JsVKjpdJm7jwCZa8wSBHDQLAwu5HZyHVNtEE83JSypBbibQPKYwbaK4XtBNaMu5GWmUyzeN4xAEaBwKcDj",
  "key28": "5pANzamnjPxKXwUQT9vMqNCX7h8VhcTgo13N25NwJefv8DFHym1FXxgsywzLS8CWPCPCeDetQp16Ufps2TPy7s6W"
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
