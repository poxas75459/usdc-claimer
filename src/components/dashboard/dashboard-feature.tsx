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
    "2mbp7SccZCtAZvsL5nXRCsFiuxc2VUZZk7ZXBin1aPgagzF3vXx876ktncNoA5dGWmzzMY4uLmPok4s3vtYV94rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcZzY7XzUH8jRfzQBRDu3aeV9YHDxAPUJQryTJjSrx9EpWANhCi6mCjiR8xMGgKp6tvzk53wzNGTbGPgMh7RtkF",
  "key1": "4CSQg5PbAQnb8hi4XLEKi2JPn1aes7GtRHEjmtLVyjpUPsRRdLfwGYN5tqhGD3nnpdvW81AKkrMurhVYjhxeAU9R",
  "key2": "64p8QvU4mz2p4LEVtpk9SHWq2jvJ2G2bRGYXsvaRgjZGkAHwdZKPPf6WQxgQtNXe1jVmH7bfL84fJYQPu1miXJqB",
  "key3": "3X8U7pWMA5r7U7MadxysDvTG2meTheN5Bxo7puM88Xapa54kxWm1URHeE5fURPZgBjEKfQ8D31kUD6XX5gsrYsKL",
  "key4": "26cDFb41NkUpRcFaHvoDiBXFg6pzyEoSHbf7ZSMx5BmuHfHdBbQWV4TLboHeGBZktEWuajJ7w1EdYkgpAqZZWfCW",
  "key5": "31nHN3KF3sYTjchebxWi9uCVL5P6NFfd91cokVrB5yvMXiBRs15SgKajMhXZChwz9DGHNdGb1RpGiqMD6UiBKXTR",
  "key6": "5ffRgFNcggxJWbTc52SjHoJ2oEsHXHaLx8N5cL8sT81gyBCGgbEgBb7oXQDUWwPbRHWtVF68W2EJJBxzsXBZzktb",
  "key7": "65q6no3Ack8nFrQiytsqkTUq1rjUcGh3z1hDEKVkxaH9V2sGi1DKNVt8rRKJ6fRy1zp5frc1LK6nexAiAskrhX2w",
  "key8": "4EjaVhehkP63shy6D3Zan6zdSapojpdEmUQGD8vLX1Pdacywnq8FQsgKXy4PcdVSHkkQWWyyQBcghWKNSojieaA",
  "key9": "3tTLhYibusjEaEP5ZoXvghP2UNktHNxrqeeduJkf8sBBVEivkeXXzJ8b4GTujrQzsx8uJKc1LLvYoJj3PwCcxm3f",
  "key10": "27QERkFXRD8q2h5nc1wNqGMNu1PaQzjdtNCVCbBwBnPrRtWhnFgyDmwRcK4qZM6DSyT7xuKsVt7KxXQdRToNTd1c",
  "key11": "5WMpntasWHtKkJ2ZpJBYMR6jyLbVjYoaP8ZX6QGwhz8y1d185iZqbLFzsFPr7Ec23gvMsK2Buqgr6vcyMq7193fY",
  "key12": "ecVrZNNamm8J4TsPCkcz6osMGFUekjv49Cuh1cxbG4WZzeY7SYFJgi62qzBAdFRfV9srzEoP246ZenMuAiabmBv",
  "key13": "5cnPzshoRB6c9JnXBsj11XrNJTXjFDAuMnh9LJaf6F8LZ2NRMjorUTLnG5p7T5mQRy8YRNgWbquL1kNCJukctWSJ",
  "key14": "4AfvU9mifJcnVggMwG18CruVtYCn6bzhL3VZHns8y15ZYHqYkMyC3dLZuE9y39Lxv3SeyHpKC7EvaF6cp3DGdG7H",
  "key15": "4ybVyEZTwchmZBY73WGoCyTLYsyfuBWscGqRg6Xk1a4QpzvHdd1KQkWvn9XBcDWHXAgDAh9u5DZwqS7CuteXVRhW",
  "key16": "44KynjxmvR8XTWPmkZQuUseqio2icS6C7t8wzWACccE4uovUxmjU3jRut63BL9LebP6r3PgKsfrqda87KgxuoU3Y",
  "key17": "3ew63MnksoduFzkTMUbBCC7u5oDfVXaEyPLDYP93j6w2xj4ApYzZryN98FajiWCVjpmsaunUj4gitcrH6TXoSrTt",
  "key18": "4yGKbBbuWgd4NpJHnFJNXP7vxEbxoTxkZTEwQb7UnELtDeS5jdFDx4zvianhF3oZBojRtjBJ9e44mdr4Ygz6WDgA",
  "key19": "24v75c5iUzcSopkHXiCgggBCHBruAQzfhgrTFYp2Dn4otJ7HuXq8a6KKCy9hRRaAQWjYNq3LRQ6HRxoxSZiduNV4",
  "key20": "8BaXDyDw95Bbsts7itNTY3h2B5QfWrurYCPsSSDMAvJbfzu9oZUfA8cRZTJnjTnsweXKdNM8Hg5ZQ6UipCLeUnR",
  "key21": "BEHTtaYuwFUPydwB2wtL5LhGTB6hAe1XnMNXct91v8BJTxMubtDSeq4VftHWffCg3C4WKonbYARvds6wuHHnbKk",
  "key22": "4AwcUGkxtafrEPowePWoTPijD5PUUGa8m5MbZR9EhCLYL4v77yHizNtYyXyrq7JvAff1hsWqHNQVTWTegco8AxHu",
  "key23": "yQAH3P3BEnyWjvfqTCDKRPsjxEgePjP3LR1WYda29rbbzHQiDxCht1qywMnEojtQq4CMRT6RLrJvoMKUPK41UwF",
  "key24": "64Ya1V6yEmoebfM8aqTPdgVxZAXEVgPQzSdjUz6Vbv45Gh6CB3Gqa8scwjLx1aNzfsbJ6zcoxMWJeMTeFCBjTLZD",
  "key25": "3rUppuLoUH9cvwQ3xDxdMfuWpAjJwn3eBmfWvgFsopBWBjhrPWoYKHhA2xZvF1Vm6qz4jVjUjda1tWX6JZoXiN1t",
  "key26": "23G1dnYNqrdx7ew4Epv6odegTqcxMeyzJoYE8X5gVPMRL8i8FXA2q88ARCVwytqdQG5B6Y2LUvZutwbT2PSbuysJ",
  "key27": "3kGGRcW6m4jA6c5YrrXiV7SL8MFjjLECh1WS1iQVG9UUafWqwNAxWHrTFdo8eaSu4TH5W7q5zqjZkJxM3y3HJZ5d",
  "key28": "3mJQ2yS2nDXNQhpgwYfWMY2Jt2SrdNfAjxdFkSB8j9MuE87UGW7sYhu25e84vsao9yJ39N8iKQJ266V2H4nLqbo5",
  "key29": "5tn5cGznGhVwf9iJSGgjvcB7yrTFV5AkBfhPH1KfiQ921zrD5eyhEZJkeiokMUE6T5dQQvPnN1EDYVqSaxor7tPJ",
  "key30": "3H8wbcumY3E3ozs7oQLf9bRYqf8bCRxTTTbhBhMD9XETpWu6YmCJTxEkvAcdcqt8gh7aYWfpZsvqfDqe7KSWqZ1t",
  "key31": "523zQFHtszbKnjETJki9SmZXEsJyuWepRT3g2EkEHbv67WXY7tbgu2nvJ76NJ4o4FNrGJY8BTGgjmhuJUAWoqPu3",
  "key32": "3KyWEiA9sb3o78hGRBM1mifpACkASi1tQbAq7hBiSngWjThB281adYh9JsQbeqqudmdeLkrg8uzC7BGTpT1bJqPX"
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
