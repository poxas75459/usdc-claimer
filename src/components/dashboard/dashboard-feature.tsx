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
    "4E9Sgkp7rxSbWy69h7pveDTMcCEaDeBmRsYcTjmRbfLoEqzXeYvRFBaAabsD1sDdEGyTMA9hTzsbWA6we17NsMmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCmA4w1RJToQQTti1DRoLuDubddu9W9RtYqb5HLBmDwCHFYU2htu1CLn6fntFgUAHvwXPTrvqx9ySfGvgjpSwBc",
  "key1": "2uJfkFLwAGecsonauMQbkyB8KH1erPuSNdSLmfBQv3xZ96uqaJFppS84bjzioio5LUQcUfVgFAksDkQhn2zfasuv",
  "key2": "4CPbHtE8C6UCytHxj3Wmn1zgex4eAZPdhNWiXNUX7jKqVz6rWjsqoyJxRARAUkVJ4tefigNyPN6EmxoRNZ7eD1iQ",
  "key3": "odjGrkrPpoFNgMyUuXah8zRo4j7iwFUqR1yppEw9EqH7T9U3XzaGwS36CxQxu79FCjzZfZmFYYcvWRsYmTwx8xo",
  "key4": "4PtKf9wk37oaSpaGyEV5M8yZk7BwxgqFCVjXdGpJWYv3gBpHpo8yT4hyZHjXam1YvsNPTFu6jP3uxAthky2a4wFn",
  "key5": "hrwaBc6JBGGKSGZaA1xeVpdvQ8Ak27k8X5qMNwSyyDEHsFZrfbK84N9sLUpeVznFSqMmgktzRumwWheK8r1VgJF",
  "key6": "4oKskQngsc795CHjZ3uVfaVRx4U4aLmAFBQnheHuxLFXDWyQC38qDbRnuiJmafDXRTBtVwWmWuwjf16sBGPDMbx4",
  "key7": "2FdhrvR8CVR8BMhcw1Ra91vX1cNdArQkhADnMSB58R1eRzhKdMQxmKgduKwYtuvyxJWmSPrubUnWcpTtosQqq4us",
  "key8": "4TMggqG8frVxNXage3i6NW7H3YMepCBr4DgPYRgG313FksntA4nBnM72s2vRUUrYFhFxHQSjNypi1ZBEe6PxQTBL",
  "key9": "5MYFwA6xwvwZtvLuLYbzjfgXRycNZSWbQDXZxKvJVHFxREauuovnrMEHwFkXxs8JSaQD9PSVQHdofPvAQhMMVwk4",
  "key10": "2yxLUjpzryDfSWKuzLL1peUZgwcB4fdc8PSpmX8zoKPEQDCHcoV1fgWaeDzmqy5EsBExfmT42rAYgLRN4BFdw8oy",
  "key11": "5bx5urq21ptDcmiN3cDZVyvoHZTMU7YVDTyPG3RuaZ8xSP4r3RaUh82TiNyV95mRP9evJ6oWLDuYemcSHwpo6EXp",
  "key12": "5xKgSKe5fcK5BNmfcsdmv4VKf7cckS75B6zXgSkMvo4rqiLsPc1mzyGXsk4xFho3vBcXmMPxQPCv3m9mMqhw2MPg",
  "key13": "47KYT2UVHxmDf32dNbELvHpHJrjEevnxnWEECDtM6Q23o5fKqYSMT7CYkD7Sjpqcfi7hy4rKjPLyHBERSfBDQ92Q",
  "key14": "bHdF9yyjnXiVDrxeYD4hM9eydU4yFL2gsKRpaRuyXNpWYHJtAaPycehUGatBYTshV8yUCkCUKWQ99cvXZ11sxuV",
  "key15": "3KGfn44ad9W76MeXkVwktD1d1ptTzSLFsffpUUAHyRjZHqUouit4yhv7Y3QAuTdJn6jQLMaagRNEg6HuBiLiqv56",
  "key16": "5tWPHqTsioB68KbnWJXH3oy6D1NsGNVQ1Zommmmto8Ppw66vK3q1x1RQXJTwUeKQpxtaE18EzJYz7msghZVZwGBV",
  "key17": "5c5PnrRH4vSApGCt5a3d8Xh5nvsXodexSzwnD6FM3R7TsCDTGcGLgQi6bt8SPhCCehrVfTjNwiSDHgfPiosV8WGM",
  "key18": "T9so2pzJr5RFwR2L6nytPett1TvtfSqAix2Y3fCrtqTS3xEc8qN8kPbRKptKypT5qZCwZBgQLtq9FggdVPmvMVj",
  "key19": "5ngQRHAvY8UDGJneWaSRmY6aJ27JYrMWD92fWqSR38cubA9CNQgtg2j1NsJ8vvts1syKZUFhG7HZuH1kVjcMyBPm",
  "key20": "uE3ZHNXrKC8L39BLjzRChP4WprsT2jbQWHiPsy6S8B55UfPRU84qr5VCUYP2Xbe7ssDSvpnjv5BUkx1SfcWXt21",
  "key21": "2Qa2CdXCug9vCvQmnxeztfB2MMdw7CbNe921yLYGK43nzR7sEqStweBYbwqxisYUQiCHjfQyiGuB9CzYfHUAg6vw",
  "key22": "5mhb9gRwQuUzzgMCVwZm8Sdj3sT8TEQfm4tBJ7mbkEqcnibfakUfPQSSbKwE8GVoGPm3QpU81JadXBhzxt4C5rGZ",
  "key23": "3THviWKZFkfHyfUrjH3h9QujCb4AVJiuoJWgH5AMUCCs5JHLx6aCvxshCzeGZrCcUL2YWWTAJLFih12Ltp4VJfdR",
  "key24": "5fr1jmT98VgcNaUYcf4m4DqXhUsSzujjDJXWBd6b9kMNhUv43EJhbQJ3K3aguD9diUwmfykkm7rxPnVJenPqFijg",
  "key25": "3n7UGASoEcHpWFq62javhavuCMvqyBaeuY56tzirHCDrAZHk56XXp1sTHwquf8gLJtZeEqevsaJmxyDA55Dx9hz6",
  "key26": "59uNxu87QRybpTp39B5c1dugf6xEaBrwRaG75DBLRqM8RuiyL3YemeWZ39PHjHPnu9Cukfea5PxQAKjdZC63vMvL",
  "key27": "3xiispZeYqaMEtokoKNTSFaBQQBiH8N5SqtX88wpaSA8rH68AzzFsxrNpTNQhzfoPEVhKoToBCdvBsSW6h6f8pNM",
  "key28": "5uVpRJgjbtDu3QEpLAja1sUBzMxWHesGhoB3c6B9RsWRWPbAkjLGH34Dp5bUceDaVgDf19q8gNsuw1pXa46TLzz5",
  "key29": "51F7ykkqNFH9SeMgd3ifYYKcvEE7zh39r8T9EEyiw3NHE4tua2kkN42heVnsLtVYHYWA9cwzXXF1gHjfEg5DRYnh",
  "key30": "3MpVKFiBnfFVqV5uFPWJwW52NCQpfQyzTnWBTqz2unJKXtrQAZvN3j8MvAbo9YHBNUpTpmdm1Kfyxa8534XyMhkJ",
  "key31": "615iA3MJhHkCVK297wNq18j6dovafs3Q5CnvqHFT2hwzvbJcJwGhpXY7RtLcgdZBvypD5hVaWLzcE2YRZzeyxUUj",
  "key32": "2hh9qbYtSCu9yqQ3rzBRz2tedHzLKzyV4ybyhRVcajqpEKNPsQiGN3nrniR2pi4Ky5Gmzg3rGdKaBxKvwRbkGkwc",
  "key33": "31KGYvzh3RFbppCngHp43JEaP4ZwbMevSMFQfrWd6DJ4tcFUCemdtgRKWSyoowApe9k96ahAH8e2gRgjsjfNmci3",
  "key34": "2oAdYkCToUMT6wLZ4HLtqrVPWSNEJtJZwFjEdHuSZG3TPHp82fDWpemLLv2JA4phkh9P7EBtV9PC2mhxW4YWhU4r"
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
