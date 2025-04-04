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
    "4arwU5QiAmPMb11fxZJgZrARcjNnSSVQBnAQmomMvtqv23k9UnKBp8gk994ZTRtUhT7e15nUMQKziiiAPBwxxdSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hgz3yizJC2xoHmgVcRHueubmKcjCMjNtTgYfcV8CTWHBVssVP6cAJ33CwdkPZ13aeFtWWU5hU1pfx4FdmGLTcFj",
  "key1": "4HfuwcRqLubkbSevedTbzL1xfMRi4CYTQzNaad3LxWB4rt3fmte1wHS9EtqjatsvfF3JzVuBUgWg9zKWWLszPCS1",
  "key2": "8o5NmYffdfmeb9QVunwjNNz92xdt2frCWFhGPrZG1RjgNaTBV1ziJkYRG5tgk2YsfrXNND48nCciR7QkJFjgd3G",
  "key3": "2XNwNs83yvaueLDSFENe8EKqHUc56mYEDtLXrsDFQDEPEcMUQZD1EEsQnn731YzTzbzHnmPspt8aEhZjr4n4F3v9",
  "key4": "kFefxvxbAd6dW8xmYTpaxR8ELN5dmZNkRvzTiFeks1ddVtNLk2jdeFFAG62H6DXbVhd7ew7Mvj7nFUTn9xbuM5o",
  "key5": "RepuBAVyRMf22MU44pkAWPzC4TrLH9tyUHhegYUmpHp8i3UUePUfj8DoFdb4B66sSCzZYcaoGBWpeVUUYvTesr5",
  "key6": "2JMzTFqAqVdhtDwBMenSFuZgMSW9SetYk7zrcTpHSrx63xtSvom5CzMmUXhxsA16BjavMm3YJVjsBfbr4yF49uaB",
  "key7": "4sZh39ZxohWEHzDgeiyh8UGCKW5Wz3HwZEXHDZBqgr6j5QiQV7VYeBXYvBFyMx1FAFQSAXtWaBFxHorCVz1iyTQb",
  "key8": "4kDnuwZzZEWMCxUH4oHKkQq39p13dzpGpuEuoLsdNxzY6HTUXHWVTqsPxPWkBTryHGPRBykoV7kwy5WDigfcVyF",
  "key9": "2KdAmEBs2Q45RNGXDyEw5YXJXkwwEBv9TNEDLVhJfEPWDiVTtzu22EWDJoCG93LgMYggv2qBZZr5Z2EhQgDsQ4va",
  "key10": "5oKqTq7N61qdEjC1FrDhYKGSoC1TdvPArjDgFLQUfNhDbo7pYJqpdvoaFpqJjsfyEwVTT2VpFcC4mHhetFfVxXqh",
  "key11": "5MTQkLMKsaETDQyu3Y4hiUNnHmafD3AHnPopjqHGYj2LHZXpGMeV1QTCQqGAWSBLec1f1wd9BU5RBp6Nk68mPQXW",
  "key12": "wwJWsTr2jVqvcT2XmNqvdtRKcHvjQhL15LZFvGBX5xsDhGNQCVrtVUA2vzryxgEgFzoLpRfFcfugu4LUeETeuax",
  "key13": "65toQsGk4gENDAQBxnwAT5bhSgTCLy8dAbhX3LLeFbvou8Nvr3oKFBsfPnwru5LikocTEGdTbNtoRq7cBhWugw6n",
  "key14": "672DUw2FWtEi3CC4bLNhRiAQvVvYKGMsn5wKCw9w1yH4ivoXr16pDiBCCa3GXUY6dxkTeMZmFEbP4oAoChwhTtao",
  "key15": "57UUdhuS8vHK6Zc3Tg9Vb3k62qv3cv3SkrgZFsfunuEp21g99FwWdkyxifvLmdzameSze4Q7681HQxX8V25mtmaP",
  "key16": "HfN7nfRKfKdrttyqYPqZ7LLnfeXCJ6V3z4uHntMz1nrj5Y2rKjm2XRyJEmHp7zrPiEMQnNmZ96BdkaQqKmAjPjc",
  "key17": "bnCfPRykrw7B9n1zU4TjKyEtDbPFVnaxNJqDXTZiV38Jn7zAuqWyo5ioquB9dm21dVRzj9Bf69eugGvw6KRwSpe",
  "key18": "5x5uybm1rqowVcU8GhADq8n3E6QQPTj8LkNfUH15nQ3wE2JrtD4QKUJZeJr9E3d6DcDT66yxsBDD7Sj3y8YkG71L",
  "key19": "55xH92JZn8T7hTDojB9rjZv5dUSBenwPzArKnJMUDfC5y42njx6Eh3adEaCKvYDWoJ7gbydynLWaRWVwNi5FgAAh",
  "key20": "3d4ZqcbRyErFoqCiXcyPL3kEFPdFdbJXoLqFp9QNK3m9Dju6atFRdZpRLqVPuNbRSucAZcHgyLD2AANYt36vaxS8",
  "key21": "2PYjuNB3kpfeDNN54zX7GecZBBzkK6Di4oL2jciBLVuoQuXqACwpWted21cAYbrQLMphdB2y6vaJG6P6RS2raAAV",
  "key22": "2f3zcaJmv6ZnnKENy4mWhKmrHTzBJGjZSsGNzwg7PYi3kPi5G3p8XcH3jk2sc635tAzoAsbZPVf41NPZJKfSpWVK",
  "key23": "2JYxvVyVCPWyVX7zvhZPW9kJqdhPEnSEPosUdzVLswYNxXoCatZ8rwTEox9Eh2gvDzDTg6dtBtNktoLDskqmyc5v",
  "key24": "3aPLjgycC4uogGGgAT8q7FDjkbemqtn4a44yBbHRWUr5TztZniwDfbiApr93hd2b1Rx2CcmvcCf9AX3MNBZoH1fe",
  "key25": "4Be2Y9Sjkm2eorkSLDEs3m3GqvFuFpypdzFmg1WrDReM1pP5D1qRkuSnmtQ2o3LV4nWbQ3kCF745t4ggN83R2yey",
  "key26": "27dY7AjJc5pPP36iqg1p7WuDUm5Zrsme2j8inabRK7qVtxEZ6advLiKS8amfmD6NyDFAtM1XHYhWXsMbGk8GpzyD",
  "key27": "26irwYxhomDBsyGsd67gv5SnA9wRUVPFqCvVz6nYFyzFC9fQQewmwhiWfhbb6s7uH8SM8UmgVXqMqaLnrZ8rPDRz",
  "key28": "4mLnZNxkUmsE1Ykxz9jAYMVbF4G9yPavtt8WGmHVqEnvSdhhz7zZ78jf6v8pFiHNDi8yLBvucV7cNH9txMktfLqD",
  "key29": "4njytPAhtzN7tstsEtZXEh9ibMimm8cR8ea2CGhkEV9krhzpUXVeBR7HaDzHmKfzvANe3Fpr8jFmFzhMRJ6eaxin",
  "key30": "4sPSWFUEz27UqxfYxbUHFkRANKgW3cuoGjssc2HSPgHzjuuwwrtSPtspdaPQiLtnCqSnQSCXsAp8CLvEjwdKQRcf",
  "key31": "2bwCPeRypExdeVf2EfztHYug4t9NVhmhSVTodTszF1FyfG433ZKLSTQDfyYGVf29uaUUQ2DEFeeuL6FhiDiCZUje",
  "key32": "2D7QYzmWFfFWK9JYbiFvHy32htfT5936pNGWjzGHMmYqsySYcnnpk8WnKTq5NWJoHCKgtzPwuAcfvbTdttY8eRDc",
  "key33": "5uZzuWhfyxUCzcAzNcf1CdR9buv42tmudrcUQAbPBMXEVPBw8NbdUnBCk7wabKCKL9WdXA6uQXr5UeiGpr8ffD6H",
  "key34": "3PS7Rdm3xobdfBin7nxyFm5ppaokbeGAKGLazvZQjjfSUgkSvdrDLcB7e1M13Koa9jniURDBmfzmakZ6KMyEtmWe"
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
