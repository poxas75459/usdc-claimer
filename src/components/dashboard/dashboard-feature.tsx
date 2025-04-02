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
    "4whDrtrSknzuv15QnFXVnsaS7HYVUobCCAUYHv7pLZwvcA2MuFTtYkyStDF3NsQq5Rj9i5gcqZJANe2QBMcaoGX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seXLBuubdjyKRdDiEQxrxpmaNiRCtJTBWupARL1caVeyHE2TBhwzgVKR36HdqvqLeTZzoND6y7Zcu8k3xRbrAfA",
  "key1": "2v2ohgdyMLKMcSCXPtrvBVomaKAiWjNHA2gZyFM8TgyKBJbb6puvBXX6hWK9YG8ZxYZ1GT1nFHvPLyqxBGqBWxQ3",
  "key2": "4szHsXSF1NzsEQrxwvT5BR7dHGYActcBAiV7khH3fqu79i2BhMffjqBbHLqp6KjrNKLngBL2rAUGMns4gqvxJ4D5",
  "key3": "5tKmLPDN8U7oidnMmPpcfB8XNm3qStG6dvKehok1FvVLLfVbgpSmHsdDLsFtVBRwVqDiTAf8i3fLR3HgCC7PT9y7",
  "key4": "2GDfnuueRRyfVeCBM8vV3t3gxp3Hivi2Cb4hqff6gfonMxmjuwM4xbXVj5d2wrdErcQQZ9qCUNPfDBG6yvPRVro5",
  "key5": "fASSdvHoXnKdHFHd2vjPeH4747XtTDMRkLLxipaUHRSHsVd9GkFXfmJLeqduP6XRiEpBQBKDAmki75acC5FTPjT",
  "key6": "5eT2jY8k9n5fQ6bzKaNtnopSJPvmnS9TRP4B9XMtM5cz7qKLPf2B2btbC4WWbDiN9K88nDs8MxhMJQZaAxJigqXJ",
  "key7": "m464RkR4WKJpV6Y1vnDxEci6zSAnFjs1N8UguCrKiku13vRfagyA4CtAXAmm9cyboZJFki6grLc6cxjpSFc3vtK",
  "key8": "3R7mt59R6wwmAoeAZJNCBM1TMsM4K6S8JSTmGeJYMeocyp8F3756yyVwvEmjr59jxGunYD65Kku4xFeMxhai784N",
  "key9": "xoNWS9eHChdJrm7QyBw6ML7hmVb5ducjUnwzEu8FGWgKAcg3dMqd7VbMZ5c445QPkxV4kCSV2dRaGHoJyeWpabS",
  "key10": "GnNK3ZdGyTKUAr7serUxztQ1GiUSRXLjg1wFDBZ5K11vKkL7sfGnjQQVygEdeWqahf71VpBY2bdCa1N6peSBgEw",
  "key11": "3hidHQsvLvrgki6Exy2idmbT16Ae6Uz9CDu58GYNww7aufpg3HfciTKVVo1yBZou4LdiCeafTf2gcMmA2J61RZDf",
  "key12": "5nBYVTAeFjV36Fig8AZK1brJitjzdzbXaRmTyD9WGkYrkaY9jZv4UPmDgLHGVeDknDTj4aKB9C4FoX2bXReiMr2R",
  "key13": "JUvVo7ueiE1XSMgtgFV5eDZEMWXLkYJaLGKha5RJsHQZqJCnEwuZVgSznFE4BuZjGUcfBukGjSQSVHX6B1EsFJ1",
  "key14": "3XNxRAXQTErn1Lib7NdYEMvNvjBpDUQzPZUpi4D5pv1GMJRSM8Fhdfp7rttPL4Y7idkA7eTWC63Ff54moQYs7HEA",
  "key15": "3FQT74pGsK5KZcx1pkAxFwc9JtnusSEkrBqeepmRTCUqamf4iUsYUMo527hopba9pds2dztX71e9FVvNc2psQoXw",
  "key16": "4USnUsnFKSu72ULDgxShCDChT9T2G4qKosPqTcC46Koyqk5CwJzuA9QpmZkqUaWmRKqJrKSv296k3NL2Y37pU21M",
  "key17": "3YSpuSBA6N2Spf4ycgxFPFpcRNzCpgxtLxdCyg8PwDXsoKHt5PPCnVZ36aj8ATDegD6YMEGd41gVL81wSbxDcAB2",
  "key18": "572hgpBtkm2VwxiWgFSbNbxvuvBtoa6vf9noJy4zmbrws86N3fzv1mDDmZATWBACn5BmJMa36eq9Qwjdy3jufY5q",
  "key19": "4wfZrxAEguaScUs6ivp6oT7TL3BFrme6D5UPdMRimNxCdFqMmHTi7ashTZE1SPKeTeoXsdmD5ejXn3dPadCxyFi5",
  "key20": "5sENiXf9G5vNGQtWmYFNgw4wvazKx9rPXuCtFf1jEUKn1f6s8bkwX5Uj7vB3xHAgvvkzuUVQxu7b1oGeLF3BbVBP",
  "key21": "59Xf2yuxDBDjSc4NCfHZRsHZbGnrsGbqNnuwigEtr1XxgdiyyRDwc7LUP1d6vUhJ1pm21QcxfTEaXv4QWM3Zhiaj",
  "key22": "3skCg3rC5edrbvVVvgvRt9ocNJ3rsJcnYuq4MwecZR2ui7sxkUAWQ8RuPwhJ5NwVbuDmNCa6gA2Z8d2s7uiW1hm8",
  "key23": "2BEQieDfPEYd5CZjmXcHFQXCCw7LgWNcSh5FQHqnunk1scDeZXL6zJ66ryEn8N8g68e7kwJ1Qg4hcD2fXR3V9BNW",
  "key24": "4Kg1CLu7Zg6FuJMvLVBLFc3gtwrPy9CnBvUiDyxRRfkeTvteFSzNuDboi7uVPTTHu971aMj8FHpHL299xqJxug8p",
  "key25": "3WaXjpDKX1iHneg5igqTfLpuXugXQaq92XFUviYSDi1dGc5Lu2JAbpva7Sj2pQBG2NDkhdep3BNMnFveDHJjC7HP",
  "key26": "4NXE7CYvrGBeUPFoSVdqhnXQzSz4wRGrhQzrKLEqZDJhNKXq6AZ3wEF6K6TS7sdu2uAnRPEFka12jQpdV3o2P3MV",
  "key27": "5KRoeaMURmQjDuCvRcUhbDEA96w582ePAas1oXXnybtp1X3jfRo519Vhr3e9bXBrudj5N9TR7B8ENi8uwBDY7ZHJ",
  "key28": "4tNxEYgjEvWryXuuVET4psgyaUJaRDdxbkXZgsxPNVPSZuWd9DEfZdiCqXhEQBk8WppzCCqe3VGKShn9KeNMmJiw",
  "key29": "5VAxuconsVZKHGGLdV9B17i6SsCEdtXm5JyW2F7MjDhi99tSKQ9qA7zED1xiu3cipBt59yYuPuyQfDz1GscWTGHL",
  "key30": "2u344VCDdBp9Wsr4LznPbDozuVT6oPvcoqDVcZU64nVZUPFggYQ6A7E8qovNga2e6Q8ujtjyWM6Emco9h8YG1243",
  "key31": "5WhHPAox9xuTtcTipSm7ND84AS7kcNakXjELM37XmFsc7c1bcDjWj4d4hZVGhXQZWjJNA7H2Nkkh9aZkuNSpdmRT",
  "key32": "2JQvFRpStk5gpQ2V7WiavFxeJeBmpfspVrhJVq9UqHLdLjxrgXL3j5w8BUBgsmceUbw8tzLrVt2QvjzCrtrhvAkL",
  "key33": "5DZPkkCGUGaSrRTf4KCycnZiweL5HUmPQA6Dp1z6fmPLUKQUEETzyQdaA4yVqVcu8FsCGBFDAajc2jqQBVxEXxg8",
  "key34": "5kisesQkhwa98meCG2KwbT9xx46P9wnEE7sRzyAP8nZHoPdvNWSyZiaur8fT678bajuMMUnJZ9WdmmakBmcZ8AnT",
  "key35": "dehrQPTcwNbKRRmqBRLt8zEmpRhr8mddHocLRLM5RDn5az3fgSVaCxk38SJ9yFPMUHq7v5q2QzJdNPHFSRJSg5u",
  "key36": "4cwccChHZkMa986GqjLTajz32VU5BuKyxhomoPBD3ue2SemgyzH6TJcFUig6vJERuvmXA4g8QJk5s9z4QBFTyXBY",
  "key37": "3PykWuxM5uQZmAk91kshsFsu9SYjhwtjd45njnmSqxbzKVyskP8wmBanfG5PGpRVsTCMaB7UbuqGdGMY1jjRxhuo",
  "key38": "mFKXqvtrbriuWJ6S4e765myrggwshAq1a5XqC583YLfN99fBGSAzzX93pHzeUJApkShfQrStkgBsavBfULw89u8",
  "key39": "2NLWQYmn6EpedHC6zURowtzd5ctDiazBFU58vxJrT9quisLXX4mTpm9GxcsokUQ3jbAxgs6HkQbLcWNUg5Pb5x6d",
  "key40": "2i85AfurhA36AWGuaD8scMsWcYcUVEfdTxNBbhm2UcjQo1E7r5L7ewJMDLgPyFHR6fqqtMHpC4d6jiLWh2neVYp9",
  "key41": "DgTVmdo3k7P3fBnZ4gKUPbhCVbkJqaxqFdEdM5Kez2AFMKffLqdWkGX8szjFLhKZqiGFTGqS3xaLLhXzkmhDoLL",
  "key42": "X6fycHzRgCdn7qmC47nYsoFbniHx7jTneNT2rEKLzfmFrWTyhPKYJc4ypg8N3NqCYNCNE3cUda5JHkWB82dh2cd",
  "key43": "Fz8T7wwjrR7wvYtrwv9aKN9vsuvpnEJTpY8ConocFzzrKyH8TPW5Nc6ZKysPExc8SvfTKsDiL6Hj12F95Fz9THW",
  "key44": "59aNx8ayURBoUYcmhcFjeP6dWxuRuUBCq9Y1JAHoCXcw6UX78nU9rqfLQnHYrp2LMzFaFCHD4MQutrqHBaPkhaW8"
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
