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
    "4psRArm1VRS9ph51L5DoXiydqUCdby7k6HN63hp56o4o1PJhnUrMF6gopRX5UcTD8VtAPTJjrkS6nVqQzA6qGQ4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A2pkiTQLdi2oNd3GcsP744Dt8qRbPQpQoWtCk97j7dCJMwKcV7JFRhbSRNUKhLNo5H5kcr1EAwioAaseZ817cyR",
  "key1": "4VdRB1DkeNeJirDE51uD6fjTHYpYgtiWNU7rdx4mwKgdrezms1SD8JrVcoV27w5fof8xpeDzNw4s2SkbnR2oJtzK",
  "key2": "3p1eofzL5m1VxP9vE7dPFzpQczjTreXeAFb76P93iryNF51MZChdchg49UH2FyU3XUw27EHKscY43Lh1QEnTEpb4",
  "key3": "4HXAXAmPvNwrEWjUKcymGPWbVsWS9AfVbFhPrxZiRssuu9mgLCHYhJgxPDdJPiVpNjNveTyCdZNbng7trjAyjELG",
  "key4": "63egbgRVwWmesvrqXNi86LkqPraqEmRxcCDq7itj4uVMJFAJ7xGZnC4fcypPCkzYJ8xewM31k8Yfg3aVbNpjXcgF",
  "key5": "3SM9FWmqtPvg4qM86kqB8Z6m8Sbbj5DyfpUHXhnz6T5gSn3aUjhDp4bvdRraaeP4go72J8CQyeomAnPQYSsgmha8",
  "key6": "qFG3866Xy4VCa94jRVaNt8rhy5yLiHUPoa8rxakh9CPmdMcamtWA4z9henkvKBx71UAv9dRzpJWJ4SxWLiLwLAg",
  "key7": "cojC1BnGWaKz52qPeW9sGHNMfEYUSeNsW7G5QxJcHA5FnQwcUZA7ezrPpbbkoYsrnRgFySA92kih2yo7MyzeWjL",
  "key8": "5k7M9Ciqu8KT2SRT1RqRU5uuB4WMsCrGcHwfJFrkWs65o8QfZpQ9G3MXUFuQ7ABwBg18bGTCZ4HeFg5i11ZrdAHn",
  "key9": "29ghDdT7JwmgDeZ939fGH9y3xo24aYbenw2ftisRE95L3S68rZ6XHghuSemqqXF9UVXLD9BRGgi3kTyUVXTVMm6D",
  "key10": "31mzqhiNwzx34SLrDTnbgc7aFBZfThjTBDvTjj7Q1Pn6pGzcbS3dV3PgdtaM84Zg3shpyNiZDu2AhEHrUvYemDNc",
  "key11": "65pRruFzx7raxN67mqrypF8n2GTS41pR2eZDTbctPGtYSrK7BQMPKqxX7coAWiAUxiQknHPJWkd7fyBp1Zn6SkjG",
  "key12": "61iTBWvd24B5y2PEWJwGmZNJHKgP6vZhP9iHErLgPtWUM2FhJUXFmm74CfC1VVKBcdEigefv6ZNqnHiseYox59wi",
  "key13": "3FmT4wSLDKhQAtSPRhWZQNevUbh4tpnGrmAj8tvgYTrWG62sT2s6QrMxTcyfNjYuYeUu9cYFM8qws8qFRG3d45rr",
  "key14": "ciPri382LySmdd5Xc24qnnsT9p9Lnxc6sQGHi6ptfsgxmkKKx5ueSY9thzMxGkwBcRN8qJUhowZKtxxrtwUofzp",
  "key15": "tUuDKr1RQFvUyCzhzwTyUUJCxscnMcppcUWeLtzTy3rzAK1Y27s7GQ3UJgqdbkf4mUDo2sR8tJ2Gcg7EWJgokVL",
  "key16": "5RWfnqawwWF9sCQA3pPtsA9txvk4MoJSfkasAKHinFQiFbj44q5HiFvzZE6Q2ZMSATLNgZBqgWwVUoeEuxQWsynj",
  "key17": "5SEa7xWiVcUV6Pjc2Wm4HWX36EkoaKJa1b2z7aaU3bmZFcCPVPWwNRUZuwkcuRKzZam47c1SMCqh5mnPdzhz7gSr",
  "key18": "56UMB8tWvAvdcjLYnJ6nW4FEkuvkdqKwy8XmvsdteKk6Pzt1Ks8dJXbojH8EKtVtya3feLv78GHXBSgJ737CFx1d",
  "key19": "25VnJxqobviKwnLnm2an5M1UjoNhk3VREUDt8LEaFWuhzpif3tzCQDTgjy4AigoR1FkApgCoZcxvZeAXEXT5dnAs",
  "key20": "MwLjx5ncvHq3KG45g7hmhaEZAqBkLE5JZCELjg7STYePgk4jmDXS6iWrYpxKcn8evRLZ89jPyUqjKnrjBXz2SnU",
  "key21": "ELdR6xgSqAkHK9vfNKf2RxZ11DKQwKdzPJJV5SueFXyJrpLdYfugwriMLKFLcakfwSr21wSLQARmncAjNKniM4Q",
  "key22": "3aniDSuw1VrZa6nMWia1HgRdPwMEEyKnUHwaWES2tAq9rRoNgVKVHagnWVpRETrVELLpNkfEg6qMRvBVRH9uHK3h",
  "key23": "4tLwaND3iLcmw9ge5n9QqnjxoB5VqpSeNKA4hxg9Z9xrjdkQz2tLdz4KhEneWaEYPCixLMGo76SjNUjZzi9c2aCL",
  "key24": "3FCSjs7c8CcXeRTypWbzc6QGrkMQY85Tkt1yx9d8HqFGaqDn1oP3tvvwkJqXAsj3SSBPAgrhuXyEFECCrMQRxmaZ",
  "key25": "4gVfbezPkpsWW2ntffAqM7fpS6gnQunwYKLXxv6TxRLvd1JHRMQ1Y3Wbms8YD1Fytkyh3U886F4FL325z589U4GA",
  "key26": "5RKAuzs164higutru5V4HEQaXfoff1doARkmJa7JWzCS8BQrv1BjRcbfh6h1sTSZcrHxwYF9vEAdcN3MmwZuvMvf",
  "key27": "2fhbP8sfNHHunetBDH7HBxXSRu1PzdysSMciLz4N3BJNEgWA9Dg4hzmX7haA79P8j932hTp4hM27sJZWwaPzNYSu",
  "key28": "3HxdcQY4DMuu7TFxvXhScuDZu2gdEsVbbg1P9cffokRs12rpbKt4e7beYoEvxFMQtzv8xwatjxUJJm2AohPR4HhM",
  "key29": "44UYVQmbhPiPbP1c3nx1iQymzbbkrmYXmfuHTgyonRemMPEV1xZsMfwgTKBcwdxKjznqmZdU7zg2VHSqLuosRasx",
  "key30": "2WT96BEQ1QQZEcagGRVnb8mD8uGPUa3L9mA4dU1q5ZwRxYKe4zDVCGcG4yhcbZVzC8aBY8t8n8cChcTBq5WQJ9gB",
  "key31": "4nizT6ihS9vv6WmAEwJnuPn7Dk9qBBF9GDAThx68SR9zRKSocAMuViAVUKJ5TBoDtEcShgM5R5EAM2x6icsif1pE",
  "key32": "2Dgwj13Cu1VuJFotNiHYdZdJuVraJS2Z1DHSo39rsRtrSeATfHWYcwiKcb4s6C9FbaeJ2Ps2c8JYEDxBvgbUM6aD",
  "key33": "4D3LmUwqnsSrkx8wihW2eBm34B7JbArzKUbkiRVqdbZWJmMFYbabatLGTyhgne125zvuWXrw1H3qFCzxCGiCiggE",
  "key34": "5gGMFYUErtV8c4h6y2eeutaqtc748gtcGYGarR2dYcC22J9aNSNNv9KiCr4dABAk5J56zvTF3ssH63m5m4EAwGg9",
  "key35": "4XsroGvWU7x2wDtKbPz2DB8gqs5e7Zob6qkNHtwjsg6tgqHUxnvbPUuw2uvAcYJYYoQHAXW1DxnuCh7MoRz8FUEb",
  "key36": "4VeAPuVctiiSbSERmqo7QMkehdne7wauqZx1gYe2gbFeVkUfyNoXA6TcHTszw5sy2aVPu15qZDDnKuNrcfemSp9r",
  "key37": "3gPGfeUxg3QLRJ5gg6rGv7eYcckRVNe4tmu3UVJ9MPjANKGQ7S7HX3oQ5wAdr6bVPAbHUSFwP5CEyxAeBLW4iMP3",
  "key38": "577TEf5qgZ21J6KnmJqmuRQaepRdfMqNuoCRaJrtZaA8ifRyToFm7Ero9RP5qsFGKHJCdWjzH2dZCzJdXdLXdhDi",
  "key39": "36hNdMA447YpusFz2ZBSRf6anBLhNhdk1UDvV3WPDH4Xhd1LDL7qgPJvhyKnerbyubEvSWprXBFm3V2uh7FzVkTT"
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
