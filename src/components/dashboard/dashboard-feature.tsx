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
    "2D3WkdX4HAMnM8wkCa3MJLcYKwbpijfKsoFyTLQfwpCq2yoAqhyVhJqJj6WEYK8rMKkPUHq3oa2nsmLcgj6rQVQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3ZVC3LUdJn3c4QDirMEYndCBawoistYLQQL35WiAVApt2CQJKqmR7xBqpMdtJ8Y8LYvACJsy4rk2SabC5VJGRY",
  "key1": "4BUngDLQPW3329iPoufVFdHgFFFZYDu8oWdPALWTdpPGa41oYBs6PDLN1iHbHvifXCbznp8BcPSY1DdFgMipDb9",
  "key2": "2FZ9pG5FE5HgdhMDbeABVt9SLTRiU85Bf1wnuMd8UVgjCUXQHkRuTFj7Zr8GmTuKebCKhbm3qLa3AKPeDFNSf7cm",
  "key3": "bAsYgKFYJPUeBR37gEAXtkKh83F7nSeqRF1vFixkwEWKJE44UUcqfZeS3dH92pektgo1E4xCebDfs9BKeEenDqd",
  "key4": "2cCXNMbkxj5Pub9cL4MtXLdRyARNhGckmAamXwqdJ7ZHRTwBBRdGVu4arVGXX2dwCFJpThGpNLUPNzESZJctxGUL",
  "key5": "4pL9UbCnyNQQbkcLKs8BR2Vs8Vfo8BmtcEAdD5f2zSuu2MEEp7kPSWayDM4tFps6Vad3VfkhW5YPNmEhJgmGkwgD",
  "key6": "4CQ5xpYbg9hviJPx6giPJsJTmWWV72AJeXkq2ScqrxrE1y6U98bMQUQjNefmWGQGuie6ZUQPV2FLk3Q2xxUWdQrP",
  "key7": "QN3LjikYJzdwM35sLqdEjcwtjCezAC9sQWNtAp1VcV8ntMMCZVctp5ssT454jEcneN2Ma1SdmVmkdVYK2Hc2qWt",
  "key8": "SYbRb4daqKNQCFQGuAR3kHbskw5hu1d71UFkeai9od3i12PVGVgJvX4FciZbfkroLWbyK1Upo8sMQeTJuQ9Yakn",
  "key9": "5sjFTamjv9xFRHfMcsGAEXwDXjX5YEUqyBE9Z2DJPpVdUfqCR52pVtJQ8JyGsSnJJB69FnsLLTquMB1bBDHEuYDQ",
  "key10": "58D276JUk8mUbcLeNQD8nWXkAXz27SrDJmnbGMe9rxt23y7dVAgWQ1DoR8FhevWSGF6goRNJrY9xdqrWmm7SvLQZ",
  "key11": "V6fheisHujYKztR8DFAqHdLYa8He8XnbCKJp3ZtjQ7pZZgsaoSnFMB8zZTgLzTD6f9Ld3TCRDev8gWtpzJc5T6v",
  "key12": "28LtV1tHRpoSoDjyRyV3aoKAFTxHG7Win6i22CecF3DVBwv8wyP4PNvztj4UZDzJDh3HPkJ9Fs97rQDhYNTvHNKy",
  "key13": "5uJmdceRkUFikyRUoHXcGZW2vM9Vc7hXfgryreegNnxJM4PJyWvHNs4LvLbHiTzzXapV4Cw1sdYCFBwY7gr1CDDX",
  "key14": "5gijm2ab1uuMmGXGuYXGyEnSEiVBpPLKh2LNqEKFNhC3VYQJeeBeN8boJhwhtYYkFj8z4hVqWw75nEePiyFAPgTY",
  "key15": "4kPU3cNF1zt6k4MiN9Bpsi8jthEd9sn2cYiAdXvzT8XmWULbsW47nvihoEsJqWfm1o46KbZCNRYwEGq9eoohsBJm",
  "key16": "4mVSeuEkUjPA5MJMHCxYPqMQudJYkLRhFBi6EgiNfoEK9YjRYRXEntpMN8cbnX1nMBJasypR8GKQVcehjnc5Ykq1",
  "key17": "3Lj3Ymy1BgkfMyUwj6cBB2Ax1bKDkX9ij5sekc9yW119Vd51D4UyueTFfqwCvamJKbskvweny1WyYr8aEjgyaSve",
  "key18": "4gPCDvWnBXRRBzAX6UHx5q7FAtBSH2f74HBMXKSSWDWAN5ejBMTkyHPimpjj3k9DzdJvon7V352vhoJmkgS95GZi",
  "key19": "nk6KZbFSTcf3Bwq2SaUEuFUtZ8W1XzHX5AwHPvJ6FKCpSV8ukWHBzWu4BPuh9Zne7kNR9GoDaKVXCt3ko77k4m7",
  "key20": "DY2Ve4JphhTkG1XFier4NkyjZYKn7YCCbaKoPpyumcjLAS653GUGr5ePR38aJGFQ4Are7YrdWwJ79yeCuknqiWH",
  "key21": "2Aom8bqcWxJh8EC8EUfvALG8bjpR7u7mhWFAEc6Vh8HeqqKHhLspCcqUF5yfZdidD86qjjd2gcjjNpAKQ1obYrzS",
  "key22": "53iv2FeQrvAFNM2BBxtYJY8RRci3S7U4d77TfSSAKVRB97HQrW3PLs6mnEzL6pfjoobLiS6DAwaAeAfvxrVr1GLQ",
  "key23": "63A8TAmv2PH7bHirJWS2XRo8AsZoucuobfoYaXpCbGEK5XmykFCwp2qv7PmKi4coBUwWJZ7YjSAS379HjU8AtHc8",
  "key24": "5HC2uKYUMGQY4geofAa4T7oBgfbnz42RtrMR7VnYnZXYoZZ9BwjwDVy96oGsPjZ6nsV6FE1xQJJXjtgiVZ7jbhAy",
  "key25": "2JVouF48fMMwsAB25dGLBmj9ZMshb1y9LyMqkvdvYFbnj4NT2dSKXcHZDstadj7p19J531omJpUrWr5PXT6aZnve",
  "key26": "XrrGELZFwEcMpRjxwSkc7E9vfxQzwAhCEVXxghphTe1KBE5VR6BX3FQ5B8hmcajpyBDKp88tjHdBXEKVHmRRfZJ"
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
