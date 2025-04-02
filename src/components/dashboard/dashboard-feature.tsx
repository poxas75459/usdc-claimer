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
    "5Z4BCAYhZ67nDBYNcMbcSM2SGehLp7tTDDXDGfamZJrfoArZSGibTtGbBAA46fAiuWzMmmi5utvJp9ystZZ1yA9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rfpLJTLArTT5SC7HsjmgPrYdwkS2KHBTSNpkYm7sdEdnynpQr9Htqnikjevo12Ry6Buh3w3nGCZUsL8XZDitk9",
  "key1": "5VSm7mdYaw1BYmPBoitNa5ZrsmVmFiDijFPZu8mT5nypbPHKL83a9w4iefU5cseudiHXn1biVdPXTo3DqNmjdgKU",
  "key2": "fE8AtpectUNbj8EAEwL7tV3jAwjv2UMw7ZXFkibfwdSDo3W79vkeoRM9kjuuyNXyCMiTwoQ4dcczmcpBAt4ztGe",
  "key3": "4wt5iVc3mMHb9PtjW9ywp4TxSCDtrE53xQbFNJVALNiCMQMJRxC1VDNrZvvKphHf5tmgbgCgDzy3iaMv845ehQF",
  "key4": "4CXxzuNiX6x7APCDC3RCqGaiPS6g3p111TtLhwtjrHb4jyFYNJuTvcFCDuWWkhVcxSELQnXA1XDTTvYs5yHHECU5",
  "key5": "4Rz1977TgNBWiYiLtM78noJkAYyAoX7esS82tDfcgRU4y57STxV4wBgxMQGzbXsLg58yhbcqpozseshxYfcaNYxQ",
  "key6": "2ctVHSddLgJpG3ryxFoSEpPW6gisQdxht38WHD7XKKTWN1xctAMfeCAbSkDQLc8u88WXf1isBhgWo7QetGD1veGS",
  "key7": "3EBFM7C2S9DKkrdsFoYFCaBnmJp5JkWKfLMSxVqL74QYma8eFtZhQAtigYdr9jeLTu5gQnuqsK2fkEZNokdbTaoo",
  "key8": "2KynW38P66vTbZQP88fcj8d8jTBzTGzrrSMajiCdLm5ZCep9PsKGJHgzJ62FZRG3TiazpQS6CjktShdfxNLESA6r",
  "key9": "8cBX3u7KH8Wuab8C6bJ4YCm7yV6GAg5g8gcFvunEBSm1pFsdtyDSFT7zMp6bKMG9iFKAdJNVFiayErE8qxfG6GL",
  "key10": "y4fqNAMrt6G56NBw8ZDudMspKtjA2w8nMCc1PqnMzjsmWk3QWBS6QAqAKjoqbqMK9Qvu5vJRgaZxbm8xKV1tgQR",
  "key11": "22zkVD2BpNXoSYoxCV9HuzbbEryWqLUB2yt6TfkhZBYfAZJTNmuQkMiHdbpSAEXrjx1swQKmZdW3ABhXshF7DGMx",
  "key12": "5pBNP5W4sLMrDnEnfZXbCPcdFYya3beTueYwqacPwLoRAddmKHNF8JqCfBrRXdhz5PF5sVSaaeNskNBejWvdNEKc",
  "key13": "3HBRLnWy4EVuahMo3mBmsbQ7vsAyyRUpUeMz7Xw9deRVkGbqi176zchbJn2NhqX7Z78krtVnh8jSsnH62tSQmzyg",
  "key14": "4iFTT7gLr4nM96VxALrJ4hRYXdHbdpDSB4jWR3injaYwH31i1NyjxQaN5ZsP9PB6Bpc77vnjDJmPoZN2M6zMtMsJ",
  "key15": "GZyc975hzdHvtPBupv93Bk1k7JEh6CpkR4Zmw1K1GcviHsQC1xSfkwQE4kkKj9fwrrY5yTR35D7dQGjt7qrWeWu",
  "key16": "SSN6egcX33EZDCJVSXjqLapbDwNUL4fg859kaFBg5otBfzsMZGMLZKtcZ2sz3eLcDuJMLowtRFEX4UmRLxUCHhc",
  "key17": "5eDFjJHyaKp6UG8A3qEA2gZ5Z1ogpMErfY7WkJyWW438yJCHtgazVagAH2uF6Yh3ZeicYtjR6SqMShLLSeHAKd79",
  "key18": "2tw8iMdPhAizqq6GjSbhr422dnwVaas4gdfgPmDyHH6YW26NM24dHgHXmGCuyiyX7VGDbpwKi6zeJvhbaH7xcPSS",
  "key19": "8zV4b13D2DDY4rL432NNhiXtr8HHyfZdzuzbqz77BQg9DxE3zWNWrvVc6uLqFRN2HwFTb14vxDjGj8wr4xfkjZv",
  "key20": "5v4yx3qpCWZEtQF1fHDoWvSW1pmtZooVr5E6P2QT3czEAEugEETYBt3fHNyPq79a6gtfcp4cogP164PkmSBP7PsY",
  "key21": "3b4daUDMaVdUzY43W2BskiFi6rEtyvck3tCW6BvpT6vyQ51zYG3we7h3rh8wY4zHSvUjL4QvioQSvNwj8YGFWhWQ",
  "key22": "5RwyswPC22uwjUhSGgN77fpiNDwqmBt7nPJGi2tqpAqoSLKe8dZPc55o43ntSMxszM8rYMnHQQWF7PyUG9tqE5PJ",
  "key23": "5CJ8sFLdfXdEhuLHdpqHPfgPj7APaYEUMwy9LhUkcEaTyCwUNx1sfbrJQDquAnh9y91kYMvRXBRpf4TSjJDk31U8",
  "key24": "3kiAhMjJ9tZeAsEudv1UR8L6WFv8kdznPCiwzm9ijttiSa9t4cLa4116FYvBwC2WAkMS7NBPXuQLY58PCKZF6XiD",
  "key25": "25cr1bgVePNpPwdczVKQoZaNYCnCm3BPkcKw6EZajto3wbUsY6JcbY2L6YeymXP4sdiUvrAmSEqTff3mALDpTcaY",
  "key26": "5qizmxQbrXvXFSSYsEuMkPHHQkJbGh8xic5RvzRL67AB1Z77TrodyNcUoCyisMQCCSZV5gV9wkjDfW1a4HvBC2Ao",
  "key27": "2NNvSwavMGcnEvZd3BiuhzFRj9zL5Wqvsr76SRApBhHnwPr3mDYBuJTMoF32jPnTXnojhaJnpbsBbkmDGEBhB55t",
  "key28": "2WM3zujKwhFYq3DJziHsJToftUmaTZAfmNNhWW4urSdmZ7LPPCAoeWxCBNsLmSFxEk3yWGRt2umfHqCnfTPdmF4p",
  "key29": "5JQTMST4ixQAegGKuhWNCyKL6TnnwLyrSddBCdJXKjiJq8zGDAWKsoXBdiYcxdxQzhZaDCbV7oYMdR8trdBJPU1a",
  "key30": "cGUg5bYngUQ639VGvDEwtYZ3TpVVzD2vweZaBd3pDqZTEXesqHdxM7tZAWofSMXFMeDaTdfWUHKaRTrrSfPL3hS",
  "key31": "3VPADJ1ZoEp7Kui41nVuJ67sC4tsdcRqsmX5AkLMoMby2ViNYqWvk5A9uM26ReU9RMixmraYVxKoy3Ug1xbVTAxV",
  "key32": "5Ai8F9pypquXDZr2NUPBERHmCywzt8QjMb2F2vuDVhrpo4fB4WUds4Pedaz15uN8yZPvBSPXbxm3NVQUaRbp329q",
  "key33": "5bjBhYiiQ8Zk2Smo2Mbr39SzbUdfaGLpuYiBoAwYJ7frVGiHyB4mAUcqG92Hx94VZyxPx3knCTvwq3c9NtacS1Zp",
  "key34": "3Q3NEaz5GvHFtmvYg3ZpqwEmFcUWGpwYyw9zpW9QexswMfimzsPmwwTS25i1K3tvGEDhERU9iaNpuUxrgjAnE9Em",
  "key35": "2QrCnR2qDb9M65nQdkU8nqFVUCLScCsSShX5b7dcNCVQYdDeLXPsJWVtdybc4x9Fep2BYpyNZcHbbGc2eXLofAma",
  "key36": "93dvoPaKJJ3eKzDzLxkr6ZyqsxtddMpLskwLYqeXTtM7vFP7BgDF3jo7ngpXu3V8TecGYTYikX4kMjWdhXNVGaJ",
  "key37": "P922dwFtGjryBbS8gMGjkJ7v7XJTQirLh7JxscqUSdkc9bc6yACPqC2CpKLYH47j6Fi9dFFH2uofTjKMvgC9e4c",
  "key38": "NNwHkxunJ4RCTjjG3v3j3MgyiWNzEnAzHdpsp4Uhx8yNXA3udZ7jxfw1pmpZLXb13g29nx3U1UBhSUJBy8FXF26",
  "key39": "4333961zAzu2vtzQgLCBmm7ws1QnihY9CRombX9mzk4srjcZxGs3Se7jpavrPg4WoJj2H2QwpAirJrLLnTFPGJQs",
  "key40": "5DqnaZT3axLfnuHNoAc7pU8eKPjaVoZnSW2FTGs8BLxTWjUqzmgTvsh3WHHkxipSr7m3DhkPEiTWQqFsdKBsQR6q",
  "key41": "3drDuqa9Vjqbs2ezGRHQWDEmWvYNj2xbUSw2NFaSL7d1YboGbAXmrHXbty2pQfinGJh4CjRMYwwTisXfqMHuaRdv"
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
