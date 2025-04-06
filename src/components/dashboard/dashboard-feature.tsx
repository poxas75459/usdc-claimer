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
    "3XZnz8Hxjbp4VwMbvTp9Fwz67gSHAa5KaeJ5g5uGBo2GjKt1BgYiXqxe5upyTLJ9nBuRWqooWy45AZgL2e1ZnCuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmYbP6B2SpnbxRjtsWym9YzRzJYA7Ji1EvaA89Y3TDmpACZhnAt3yzxhXgTxgqBpuQNi3chhPyk4MosKgYRfowt",
  "key1": "3h7UEufy8QUAs6XCffxFAvz7SW1Qscmt5TFeyDv8eBNzTmBsjZTBAZyPL5HPYoFDNk1TUQVL4WigP24eHdqoDK4H",
  "key2": "DTGZbkSMkeyzGFXkUd8tCvuBwzG3MKvpq57MKuA4gWqpRZXUhhP3SuuSPmq5SQKhYSgZxdq5G3ev3HRXxHEP4pY",
  "key3": "3tePPTtGUHJoHpzNiQFrnYV6XtBvrPsD7uTfMFzhBEttPBRxcqzApGzQBJB9SWLxZrFKhHUgJNRr3JY1joRWxBuv",
  "key4": "tCoLJyTqERBXKsW2hnfsTXGKbfeuYMUiKX11PSRBSerLcEHiEoysdkzbJ2gam2saTiiHV3SRBkZUuTfy83SwoQM",
  "key5": "65m9DcHWX5DAVJns1JAniikyUmGSmgUv9ufVfunoRbJhLPJLbDG3bhSTAKfvHpWpa1zgLHav66AtrGYbeC2DC74X",
  "key6": "65uo7wuqdGg5586a6S99kzL9eJc59k7BjzdbrvJdvQd7tUJb9JvfaWJqPPJLLiaHYESQb6iAHAKifA8ivpqBQ9g3",
  "key7": "2ifPJCPGKxvxwDV8cJ6qCTn1LwUimfFB8JrEaFprmi1H4QJ4GXXFQrYXZZAsRfbiDTyR1vwHnd5o4pjWBBBbVbQp",
  "key8": "5yqWmHJ8PGbB8dBsYi8nWF8h1MAXYy7FL9AtAj2hsiFnoTbTeNZ3tHr3BETQjd6Btwaa7mocpYCyf1q9p8kkcAWi",
  "key9": "3nQWqb1j2qqgni1kTXzJaT7JVLYznE3y8tDirauNd5UcUqWGCJDdUwMvthcjv6X1Dj3AbqkuAbkAnovov4Vcqw7E",
  "key10": "3Pjp7FcExYEqBoMC4Q1XQWgaiNSTqgs5q4EXcFwZGBm1SaRfsQQzvZqpLMWGswYqh5689qfneTDczsrhyyaWmWaz",
  "key11": "3EDcmF8BnDscMcbt4RgBubNwCPMPdaRFTSeSySzAGk5GZ9yyjetjcvGKFhpyxMqVJunuQ7TQzo3zWM5zLjmPSeQw",
  "key12": "58yLiQ36wBnXUXMg4hJzAtfziGgjwg5i8GUCgyXJc1xvEm5UGjNPcyqpYhKvaZ5W7rcwZztW48fbDNNKdb5W8pWS",
  "key13": "NYcwfAYRdRJXF3RY1JxQwMknmRNG6y6uHnPCH9r3RHTXVmNApduiwmTiDmk7GxfPv89Ud89EDy1iduFUxGbwavn",
  "key14": "2w6P6rkbtvQewecS4mgCUAsv68TqsMcds4SMEbzKfVEybg8BDC6U1oShcSXYUK65k8FmMKTEX3ooAfQoAFyt91mM",
  "key15": "2Gig9ecW7LcYFnHSHoe5oCSaA5YW5zek7xd7WABw3FoM5RJqcy17BjE68SKnhhtLtE8hAnK4c1dJroiRtRLiCVvr",
  "key16": "4t8KmHBTALwLjhwCP7z8c2fHRQBHMEMgZDvDtvEyDj5BmqTnZsPTG8FTJVS2hPp4HESEdnbJdq61SgNkmSgcNS68",
  "key17": "4XDDiBDiSCpfVhuB5jkm6W2wQNmQm7LLSY68fMuoEYBKU8nAhqZHw8iVBLLouc5jKCoNSp92TwcvCShXLKaYpmQo",
  "key18": "49XcJMzm1VuFMCuaXQnYiLkKafZj8LraB69tfdSpDn8FXynaDtLakCf92FxfZNjBaLyioNBtMoiyzhNMff3TrXEf",
  "key19": "4zGvsnhBdJtJTrCUW8TWxQ7Z3zZVtUoQ2qpQEyVT9ySQ81CDrKrimWGjgPB8iqxMT1Bd5UajPxcYweAE4ih3R5AS",
  "key20": "2A5Bzg3Zge432R7nLEadpGRCx3kqJ8kuUt6h2T9XubDMKUnJ1ekiXAmiwD5fP5VWwav9jPjggpo6b7SnrEdanheM",
  "key21": "38D7GKeub52shzrRhhpiUXUmAfnnwQcVqBzs5dVm6yXsofX3MGTyGgxgBifouZ1DrWpX7q25qPTeBK4NX8UhSsXf",
  "key22": "2ANXSqf4F45UpkBSAMN2dXMjseniSrnMUs4UDUDKPQn2hH7ZxccC9wG3D14CpSNboD4pjYwEjahFRLAwtHv8dqLi",
  "key23": "4rMUsFdBdFW5n6PkJZMVci1fQbcus7Kn2oxJThvkJnj99F1GCkK6J6LBFfvSvoqVprGtTR2kn6rttjsL2RU7GcQm",
  "key24": "29ZfZ8VPjuAgWWThqAJM2U15AkxH6m64WEDC6mwkA39z3YMVjBcS1S4V8nXghyBH1uD93uZTB2ivC1ZNaNPdjBRY",
  "key25": "sEEvyzq3VvkFNzNkvx5VnLRo2Az3EpSbAjdJg7sUzPsLii8Br7ckiCLjzQgQKor7Rp1g3h5bmg7pvf9FggvrKWm",
  "key26": "5GTQvocm6XYCT3Mac24kFnP3hh2LTos1xxE13PG7L5AzHQvxwjSLK4zZMzi9XyzMN7CM2TUuwFum65r1pFoix736",
  "key27": "2bce7J6qxcUv7suvjgA8Mnuw7AwGnKAQ5JghE3PN9EhALxkxtw9FSvZ513GXKiwBJcTvoHAFku3UfeP9Gmkch4yp",
  "key28": "TX8Xa87yoCCNq3kzc3CvsoT5BBfgfJ612jfRm5BKrSf8Ha663KUYXW2aJFv1YwzDtGx9cUwQjtbHzVpGdhZHbPZ",
  "key29": "4yARdXJf8ZX5FyR4z6Zvo3ELoQP4aWCKeSFaaebGF4RQupCNJgfNWKZuHRYkXhCVfe3ez5q5oujH2sDjDeaVs3Rj",
  "key30": "2cEyjj2s1UFkdMxFUA2S4U1F773x5teUtEfdvn1YDUCuLG8Wn6FtdPRL7cuVGPbTDfWzVQkG8cS6KChoUfbJujCu",
  "key31": "352yrd5vL633gGAoCC7bvZZRBoTpqPcTBakZGumjm2jHT4wVQT6bRNXZQtA9eHZnZ96VYZWSDpzqqbnGodJc2wpC",
  "key32": "2d3EDvGHZr3ZWz6PdV8ggcxRNvvLfw48fkD4rjTLBscFsEMhcmH5PGbd39HAGnEKEf9vLRyUwD9vUi1ucDJU93UD",
  "key33": "2jXzFJDQGezahMBW4cvxsKBizoZE8R1bCV1bXQxmB89DRRmws7xsGFoFBpkKfyHcA2cczzpt8NmCobH3wVvSg9wb",
  "key34": "4XaDZJhiVaiLCASyPoxrMmKgFRJKdASAYmQXg81GNFcKDFJkVzFkYXCLqtfsghrEk4kkdxpCti6gLSHCYu6VjaBt",
  "key35": "3yQvNnrtut478DfVg9GLQiMRnktY3Rxg9z4Lkh5PotiUDzGANiEB1HavkTdgHrUzcCy6EFZYfvbX8etA2gT4pYsf",
  "key36": "aoSAVdo5qhnJHwi9E4MLZEgML11ZL1YaPXYi226unDjFx8XWtuncTdzH1KdutTHPrdpaG5mji1EA6j8PjGL6tux",
  "key37": "2sBooRuCBAs65S3Tq2DbbQSKZX3mnynTsPqdyjsjqAmFX5Y3PJQGfH7nJT8fBpLR4TxkB4XCiDTs558uMyEJPLjB",
  "key38": "dj2y2oH6haxz2hg9nvRBcRBbEmvnYTeYeDvWj6sNtsYA9BuoSgZPWaS4D1Vrx7HEoDySzYYyhh7kchSnS9CzavY",
  "key39": "fTtehDLfM1nLUv8EvRCQh3b3KnykQ1qxs2d5Z5ev4qoNdGoi9eagNrPd91bCjDJ5uv74AfM8oX8V1jDH3TZyLjV",
  "key40": "4deCUdtvCwyVLbb9NrCcjUhzUSfq7DxbdWgespgdYPwyrvPmbDn1hBay6DdvJRGKnEBVgFZouTTh921P9kYxzRA9",
  "key41": "4WvHsmCBsoP6fGEQZhjNf5CknbigvFNMkwVaohbqUZE94vaxSbtetzGRF73dnkSC9np1UBMEytFPddANN8nu36yi",
  "key42": "s1g2FMZj8R1fd79XuJDP2qLDMDkpbsCqKrUo3bNAUftNFuW7mvkGSmMsyccKaNK44HYNcrtKgrPtFRKrhGt9CaV",
  "key43": "3bRqZ4681nj2ZiTPY8om67ZUe7EEMtUMHiyn6yhi9TtnzdRHRArPJYvA4a5GMjbjjFqg8pKVzXniiNarVAA9JejY",
  "key44": "554UKwrcVMtT5wNFfzuVoGW8uXdR7cXJC7Dcxtj5BT7faCGoLnjDeZrauDDCaY57ajPtrEKQXpMPtLqyjzQPNk1R"
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
