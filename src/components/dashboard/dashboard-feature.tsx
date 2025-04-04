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
    "5yEJGKW4dj9Y9snPxPtZiJUiQaNLWajibEweXtjnCVagEko7Y5kzVWVD7R1nyhQnQhgEeYCHmfb2B6De6mKGPKVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N8e4gD8mtMUEvCV2FB8xkvcrDL2xPzCwAm15fRTene4LYCBGXzMXaM5MFpTEo9TqJ9SzsqdgZDwWztPJ9hLK1Ts",
  "key1": "2qRerKX4Ve8PzeEoji1rDXX2XUctVT14tFnsmm3ZjY1QDwGXJD6oq2vv7AArLnow9sKoFetdBbKCXD5KvU6EE3cH",
  "key2": "tB2SwoTqcxwxTKkoFwZvW97MNaJ9MzMhV7XeVujKZbLw16MpSnYKTSKNEjegdfCiUackj3NSehRNnKuHJukVKoJ",
  "key3": "9fr2zxPPaSWHeMcLXCkcdWN5g7Gn1K8Q7c3pfXqcM5AbguTjvXwnz9fFevPkayNmFxrojfXAJf2bkizdaV7GgZJ",
  "key4": "V8g82rLPb15MU3Da7Fud94n2AAzdtgkQFowuooLSCNaXFf6XbKocQENQhdaT1Ze5Sn5nfTx2wSdM3RKZYyGMjah",
  "key5": "4ViFAMH5s8viwmZ9dZqAJsicpXNEjmWFSh8PnZQn2MVTkCLx9X7YaT2oDTvi5sx879UQwQ7ujdK6Sa2Q876dpFHz",
  "key6": "yHM8tSxw6kZfgNbn9KnXbL7eWyhuptvYb3KURPYRd8BbKDKaG9fbfjY1PN5s9JhjRhQYi7SqFnVv4KQYdJpza5T",
  "key7": "3hE21C5LjBaeTvHucydGyA2YQ2i8cDwzaSd5n8Wh7g353sj6TJ4D1EszFAsGecEeuLUpDFaL6b8QrHBQYJfkUrp5",
  "key8": "5iHxYwMfwUBHXyxCVaFQynDYc23t34vz3MQaWL9W5yvaBJrcyQsstZHMd5yM7RZRZHLaCwnz5qeHoJ6dpYgAKSAv",
  "key9": "4aJCyKdxmnX2eciip2VX2Lcw8dRFMH8ewg4uwfd9ZXbDik6PL4endhoH7VZMdTcJv1r8P65ZRLVhcN7o5HT8t3pA",
  "key10": "21cYBV7gEFxJ7q5XzUvGFvVxD3hNQHrgvJJp3oNdSLY94SbsxXGjDMuZGgKFNKAZh3xKLGoMJtrfHVRX8ggA3EWf",
  "key11": "4bKk7bq9AtZXdf5W1MQ2h3TdJsbfyBhFP7g4REXGB3CR84gDhF2hs5mh6gKPtxhYRpi2DH3okBNYSrF795gFVudz",
  "key12": "5qo7YCmtfYeco23UKtJRVapdyDUJKzXMMn9hJNFC7owqhS7AzTh7ZDQQnyfJcuDYZ6zFUF9AFtPWnjj16mJC2exe",
  "key13": "2ywuqXHentX9JXfGqXMkGPoPUoNnvPFp9moYqHW3aC1fRETL3nzHHaVu71jbgFb1zbR4daAUbHnj5scGbxyEQXhM",
  "key14": "Gc5zBCFCM9EURnRSetpLBcFKdi4VSZTUJFr5NRykMTnknCj68efacj6kQiZ2dk3JXF2ty4h6xbDCtjLqVB8L5r3",
  "key15": "58iciFvMCR3Wmeu1CWiQFkiB9Mk95Zb1dKJUdh2GjKbDkZehEfkDHjnsM3dQ8LQVRNdEjrDWnNXLTcNwkVBUpqPJ",
  "key16": "2GXipWnuXM4jV2eEySKJCCBBHF34VhN3DmJuPSukH4iFj464MvVFNTy4UjyoD5FSZrZ1oRCSTQCa6tryiVacXSzZ",
  "key17": "46wmctZziQv67uDJsYGWxUbnNmh8vGYeLkxCeo1coQug4HUaNPLY5Fnu7eqrekVT2q6SkZEfjs5LQeBYX4j7ABt7",
  "key18": "3HwfsUu8CpmsM8UfEAAixzJk7PQQ4LAVpdvSpaWkVE8Dz8i6q4mefaw4HzKmj51ubj7DqQvFwhNMbMFghHo4n4rf",
  "key19": "38zeYWBTjcL9E2djgDkmnUvohSAcCYWxKcSwWnJvY6GBvkKnG6XrxhfzgbZj2ev3RGRrTyYhAUSoLaVAS4yYE26m",
  "key20": "2yeJ6HnbiCQvSsFZsWoPd9hQZnm9U47vNtAjM8nAYeX2DHrwhiqUcohot64kN3HHZp6uyaH6RGAeLL6iLPiZctdc",
  "key21": "3VyfTjckLdWgUBfMANR7gMgV43SMejhLBLRv2R7ACZpShGErZoGHFSb3Sdwd3b6BT7or8apsncSBZJc5eHCvngse",
  "key22": "4knC5ujDJdWuEfFrgHLH7xnaXyHoYXf53amtBor6fTB6dhEvBuXNynxAYuDtdcz1g7t5fhxdvMmaGpT1mPrjqYk6",
  "key23": "55QpC1TbpK9TQdWcwXyJ7tX3DrsPiVVszek1BDf1edzCsrjEZmkBWvkBgshD91oRhjsmTucGQVcPZTeT7HxJnDj5",
  "key24": "5W18vcrv4pKUUEmo4uevAfoqYVcHFyKwMdN7DQA8MCn39soGg3uRmuEzNjPrHuiw2PWYMQaKj7yTF1joe7HWfJy6",
  "key25": "3AJFEhVzhaGGtC5EBKiPt2yZHL5Swzue8hk2xJNEthrTL81FdzFe3iksBsCnypm9jJchsFsUxuyQrbn4sTYMETzA",
  "key26": "5qnLZF7mH7qmRvLkmse7sE5nAVVMhTcmyNV5BhjAwHMMci2xBrbSEYg9VRUCMbxYxzpvcaoU8o7ontNAtQvxwXV2"
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
