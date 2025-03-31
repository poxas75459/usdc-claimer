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
    "2kxJhF6hmFB5G9mchZocxuvBoELpCzebi5dNEheMXtsbvdAfWYatoHWuXP3n31fbJkLukEz3bxxt3PQk9aWB14GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SVKL7Cw94d43NhGxtfn3b5tecW82E3WxJYP62nCbZYqcSrdKL6Bj6sW9TxpiDDfahBsKzXumRXBSfF1DKo6MPj",
  "key1": "4SWViniM3YSR8TbWXLg5yZCYktde5qVujm2vw5rtKcTNqz55tVjFLfTYb3m5U8Sw2dEs5kvYKWzrj3nibSnbEyGC",
  "key2": "5zezkFdkGsWTmMvzX8qU3k16kwcJenbMce9EVmGQrRiz5dsGrGaLYQ8qTM65WDZREQ2ThAe9x3FJzdg2BpDrQT21",
  "key3": "2wxU2pJYrhC32dpi7WFq2LN3dNpZoi4qhBQAYeax9CRJyWKeaUAm4H9M6zDrL7Lkyc6QR1BqetEQHi5eNRUBZr6X",
  "key4": "52nsEeaAWqwvxEesxJyvznbgE2VGtCfLt3yXietrxJMYLqRcDVJUKq8aG22cHCwEnkVCpcU7XM7TnPY9rib1u4e1",
  "key5": "5xo7ZxTPDPgiMSj9ZStR4TV2DREuGyQsorprZHyMVBZKWM6U6itsonVs3mEoXE7AF2QFiGCrfa9XkSgk3gWVW9f2",
  "key6": "3bnfJVNtmNq7gNvq47VupehmGNRXGgXWAdTVNjVHyxB7t7jguwifF5y3gajnVs2k5duLLNUbZNTKUSrZsGehgZ8a",
  "key7": "4YFvy3aFueetBqUDq3N29aRp8XHsphDGrc68n9PrfSxRrKhC8eqtoCLvWANQxbuTqCNzGunUGeqJktEFuGx68agW",
  "key8": "3iKyKhMHiKPwqo9f8eTxFpJ2YHajKcuZqBpZiZBEdMeQUsQ5uY5uC8pQNtNqKz4ovK5KfZLeYY9EBH4ne6nXhkqo",
  "key9": "3VrPkFM1VDWmNCdv1mWJ93bRi4AY99fkAcHS56akytnF99eNx7mMdbfqJP1dfU9FhrboRqFej2AYmJHRPwCxHynz",
  "key10": "DKp3NzsRiUGsfCa3PaTtnAiQC4EQnAZEPqpEtKA83xD1Bhh6jbRkeASU1qTZRWwYC7mH7PaUxy3st52LsyzhKBX",
  "key11": "2f12iPWKgXx4ePikP7o1YQY2ytTC2EpLf5cjfPUo2C9B5Q9gNC8JxDg3FWFz7kyCQ7z56aERf31jVkWsUT8SKGxA",
  "key12": "5LFgWDs8GE57TXyMrtHdttuaZbicuzKgsJ141m4gMdWfDyJ6sZQQ5woicPimHsbRQpf4g28iYqa6NUhLm8RFPM1U",
  "key13": "3ZT2yqw3ZvMwKuKXqJ5b4to8uUzSfM6fEDeS66ccAcWrmbhnS6d3DU6uHBNzxf1SxtYYM8c64DQDq9n8pbaouxMF",
  "key14": "319o4v5oj8259Bn8ZeYXj3VpgiyFmFFKCkQEDEkx8CLK2C9QG5kajjsYRhoUpudTSE17pb329ZNVE22GMyUVJ7gZ",
  "key15": "5Ciq2bo9vdSdF4SSxVocjoVE6N1pFHGHyH8wEn7F8yKy7j1RAT6JX75YXZqJ8nP9FgzfAxd3WFuYPrAv4UgzTcM7",
  "key16": "5nyfm9u749WdUP79zwvtTmFJ4g9T6vmgz61ctVY5P39sQ8uP8Li1cYkJ5UzqeFTh9DHUxwtDxRnKmhwgTneAjoxi",
  "key17": "65br7reThrUvE54ZphTFCwv5uaEnnKnuFJFGvSZJ9XgBQ55d4KhY5mRJ4SpMkkzgh7bAMJ5wfJAPN5rJUG7Lrqve",
  "key18": "49B27h5XiE3VDeFCsBoVDYXpzHArgjk1Qr8GoRkt4mwgHVEaz8d5ss9M4YEAQBHjzhdtFx2MiAh7TvUUDtSHFJbF",
  "key19": "2PB1DSkJ6rjzfq1WdUCEnUMEAyMy42G7tcCaaVis3xbuFa52d9UmQWW5SxTf3DR7bFgCbjwcQdM5qxMieePmwhtz",
  "key20": "29pcuJvgLBshaEapnWxeSDE9pTRQ87fkcMHkYMhD9BLFphKNLrH44nuc8aK5JkaMT5wf6tyRmD6TaFR5WLL4Dzc2",
  "key21": "48y1gpTKSPvKarqwHUiZtdGUoNXVEQo5q997DYtajZdt6Wm4Tk53zyVEhNVE8MBMFL9C1fDeZ7NRDi5u5fKcct1L",
  "key22": "2VrnAHNL2njMSeGRxFJ6hzgdv6Zj6kPNe8mhS7qPFnPe4T2P9WGhUTpR2YUkSqZx9QcMXAFKrmUF9Zb4SzzgRiM2",
  "key23": "5m3Qx8oNNeqmVKqhHaCwHMeeRt8iRdffCBuPugaAEzY5uzeTMEisTHaUxeRwcevkUChZsH3hwBBZMCK8LcGeGt1j",
  "key24": "2kN5LCRSF4dJ37sWPbtFS322pdj4tuvXjc3jXjFi8Dism3og3u8twTxnvTfpGAuRKSyh5d28FG7Mtj87WjoLhFpC",
  "key25": "3Uy9KNtituErWUzzyzD2Km4J2KEePC5QJ7SaXYBPbvUzNBEztKY25ZZmzoxUS5xNcGHMe67jBpKpPrdDnabwLcef",
  "key26": "3EoDbRqSrS3DzENu5J9omFkWKgJC1W2g87X4egQSdSWpqWfqDnqr9jRbw9jwr1xnHGAeBF7GdCSNKB61c1mDSgC5",
  "key27": "4aK4FsfhabVQ3Xo5AzwqTqYQrwosGitsLHu9sa6y9QJLUapG5gHfs7gbVCGmmjM6Tz1ZG1pfFsuiy1kBh1NAU1d3",
  "key28": "58mS9qNfXMVKMq9Zzd1tyrEvHdg9YZweys7ouaDfrnqcd3N3P6FYZSKSSeyCWsjN7P6eug4XAtGLacMr3eXcDb83",
  "key29": "49peiUYbMgGEjD4S18mwUAMgSZCwdpNApALkAt8MDz1YSmbQZycR2JNg34vB4KC5vcV3mZoJPPVSvjwZ4MPCf1Y7",
  "key30": "i4mBj9L6agDgwErQLKwae7zzABeZsqxWSVqmpqWDYbmw5uGQVUEvxZc25cr56KHLsBQLkijY5xkAseQT394VLv8",
  "key31": "24qZBJgTrHVLFLcZuHVMmvtGCz5rnJSQaamxs27zjEqiDkLyKTYaoWwQHACpRJq9SPMQnkXbodRL37YEFwMJNuyU",
  "key32": "5hWfhkG3VoMTevzpyPS9yn6q6BHEv8rmqAZ1MCKDQUkU76TpQPT5JTQS62HtfTdaxrEA3SeJXqAi4vLGWKtvuapW",
  "key33": "ZboGLVzSceowDbQE9DZU5qsAnHUJTq5aLWMjd5bpnA4Djuvusub13YwdCKFtsEZDtuWPA2hnnADX5nnbijjjgFj",
  "key34": "2x6U3Nd8e4moAauiSCGFGJjSvDvpty2y53Rihw7ovebZyEjES4j9PgWsmkKGDocih4vH8p4PsySTZCkUmwUTCb8q",
  "key35": "3F7KrYcByS1w6SEioYArQSAxaKVYSDrdZoHziqjgR97XE6rzjwbBA2M3MGKGGPbFX4bjRn7HZpgJ5uUwRq5F7BP5",
  "key36": "3DLWk8svmDUiphCC8jnEdXZbgco1uGKMb9xsQtBVEUtpBLso4GXmoMABot51PgthZMfmCQdTmm2WRgfZP9xfXe9p"
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
