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
    "2NGovzRdey17Q81QF3wWq26mXAPBhVCA6ZgrMiG9MxLWntJtqJXQnCDftziF9X1MYCF1TLuPdxAmQHJXZnGZde2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jquqwbXCKVR75kuCBcvSsh31PmfGWzyoMEQXntAM1GT122dKeDpCxyEgmkJzZ4B7bo3aipqhmkYzbXJpbPo95W4",
  "key1": "4NVbX8qnV5Az1Z9gvqkyuNjt1bCNbTGKixCvQ3KbXqEYGuJNgnVBKzyXMcog1JKNij6bCYYHsfykphKVqJVC28hj",
  "key2": "23D73Y2rnqktJjErEJ54zwTFogqcuyvf3WyzrExz2pnWJnfPJ8ETgN85v8fWMjGoi4SXv5932F8AsRf58FZ7Nv5k",
  "key3": "5iXE3pPLFADYgDd7tksn6B91rYv5JVoEWsUt8APxCf4CTK13Poeq5WvBFUohHcpGuFLTmTfTMQ4DGH7wk9shBQmp",
  "key4": "5Un72UtkizrgZSUp8orc4BnmaXWxyugyAq4zoHTV966DJ7FAH5ZMeHHuUk5AoCALeVRWfcRYkxpDTu4VNCKA5d4N",
  "key5": "3Aw4R9s6pqyfMVJqES1Rx2qXKCFE5mEhp3QAyuazjBrGLqNmSMPkRhkev3trAksRxzbUzmUEpZ6FDr11zr3WwkNy",
  "key6": "3Ryeh6puhGrc3YiUiwmr1k4o6YJEKumBy7Jk2zvAbzn11BxZsPpYZDZRikSCNg8qihNwCnbSD86RzwzakHY3zid5",
  "key7": "4mLgbU4dc7WV2D48Uc5nkx9Tx8uck1s8qnxx95oQHLfUzK41oeSBSfBttrUtLeU8TLgFqHeVcBLcQnbKhwPbriRB",
  "key8": "tDMMxnNu63KhvvvxGXTcXAT1UQoegyCxvC16QwUqgUJ3v1Y3FM4qXdZRKYVdPyb7DxLwj1pQJY7uCdY7dtt9jcS",
  "key9": "2cBa9QN71oqKCZq2JBj9SPEHJ5uDJyh3dRcQj5wqmameHG3ubZaqawcuojFRtcPgiBjuaGLqCgCcap8Zbw9gV2h9",
  "key10": "3y5sngFsSj191XQpjQSr9AzYgwPbnjcWGLtC87soTjcYrMz3gF4XZoEwSVUSZYRchCWNfakoJYMRtaz1maH8vZXc",
  "key11": "5iLf2YVFLCpyBwQPRaRzSAGvFYmm9JE3EztKPbZbfXbCFSLnHwuauK4RnpZSnMEaDHVh9P6NP34X2kXipTZJ55Cw",
  "key12": "3euScFigQZ2XGb5vnPC5jwNHgKKGXB4Ud4go4YKbYyfUyamPLqYZCW3MngutEBy811bnqVGGbahvnEAKWJsUhAzQ",
  "key13": "zftiWMSjiscAfXadoj5XRnsbLB2q3VTVAEZrzvuziUoazXqpbWAy8ctHkrgfV57kNNh4nG7QyXf73enYe5PuKLM",
  "key14": "3gBQhrL1P1aGg93Amg1w29oQhARPWkX2tfStckZsmWTpxUJjv4YezavLJS87chXsXUdpzWF2TWEWBnc1aX4cZ7xR",
  "key15": "2PP6gtVQhtEqAvYaPB6RYSuV36Z42bUvdhYbTGMc6EYGduMSd1TjVnftNHR4iXstsVjGfaNFBrG8FFHatzzEbu4L",
  "key16": "W5KSLNYQHf2W4Xg4rsqHHP9iBAdpMQKRwxUETR3SkyGKgaK8Hq1ZYrueHadHmgP5mowHJEm4RPdYVE5viZiDy6d",
  "key17": "3dFmqPfnMuvb2ypsBEExpHT7URnLGNmh4AQDGMrfS9azn7n3TawkaWKmeJcBFQohKw7pmuye6hVy324AFVmg84MP",
  "key18": "4YUiJCzD7J5NomPLegSUJVyJXowcti5JkYzNRXCXxQ98UQNoVrdPNhiP3HPZNzHgY3j3WShjGNoic3nDs5MLQxR5",
  "key19": "ccxghfDXrUWWMu1G8ApuTn2ogLm4E7yAMXXMQEMnuBmcwvVJRPpLGZ1gdcg3m2HJfnzMyUhV6Qh5LHNPnLyFKCY",
  "key20": "4vApeE6dR13aimZUFHFdDjTbwSzdxTXZtTDjS6nbrPXGtpitLVABtQ7CXRgHU8B2Lvfpgi6Mtd2sXr1pph8M5b4B",
  "key21": "2sSQcDyjnD5HokmXzoiHk3Yg2m25bxPrxWRuoH3QtYFnYWURgcKkaahxnS5Jfcq9TEazrz5f39vTo8xP473Cjvh9",
  "key22": "45rjrA5NL1uKduTr5qGpK7AtabwyinRfX9kkAyDXHBqjfA23TBUvKM5dXF9dvJrKRi7mNaiKyj1cbDujTTo3beKj",
  "key23": "3JCNQVp25Wrtgx7C2Vo4Exjpmvhm5V23x81U9yxAFwhJFcynB9XMMJSsi6d7cgviapJL7QRFrdyBh1gxQoCtHu7z",
  "key24": "52Fb2EEnczZw9vgrTeX1awKLv1FPyMZeW3fsi1X7J96HFe5YmSzqMhVDFq8mKVW6T2jZS9KjBTqic8ShrwZkvthX",
  "key25": "5DJvyFzoeggoF2e6qgvGQ2sf3TKKYwa6FgseE6QNmKwSgL6f33XNEj1NWC9DRYhM6bjRmiyFu6vBwrakCRR7FCst",
  "key26": "5yo4nHLPNqQUw9fNASYagKPTNjWuu9EMF8qvHT16z5bedBLXqJ72wMRjKjPwDSWpHpkxR56DztsShtQVe1ihNc62",
  "key27": "52QR5NkyWtoJKo89zDYXUDfuMAzbfu1B2skjHpdy3pPo9E2vreY76h4u2vrhz5rnHwMyYg1g58tNfxUYYYVzVkh3",
  "key28": "2xt4FaeDAzHCxzKt8AazcmEeqbs1i3NWGsRVF8qKqjCcYT61rPDyqXAuMKoLQ7JbbyLwNkjA8RrFYJj1C35idX5u",
  "key29": "5ed7mVSohVrpohxAo9bQWKrcPUtEXeJTxskV1WLpLnrCb5dMsD1Q1pJpsMqRomWxVQCjN2wv94LXCSxbD5xTc7Su"
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
