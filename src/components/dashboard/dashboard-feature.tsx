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
    "4HBLgpjWpour7KEfjvE3ErhQLJxVeVbrxj184VpvewAsR1ZhspH4dGMU6M2Ks9wby5SXQPyL3p1KJvTTFFqJdyZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DvCVHH9w7Lum5XhbBdQuZ8ANijsXYeqGuF1Ca4Eq8s8MVxPm29yRaBAcjtyCDAq3y9TNSrtxuDrNkrVusn6gTE8",
  "key1": "2UPw9fUXvhmGKhb1v9hFHfrEh5QBdBPbaTXRMAV7y3in71aJCmGEFPMihddSBPpcVmZJuJWJd6USJRxGSsK5tyum",
  "key2": "USFhhkJysqV9eMeLvuvazxeh8WxJc3ZbxskJJ8qSd3mqN9BMK12vMhK3PJYTdRj1bx2phNK29SWX3cMLUMgUzm7",
  "key3": "2sek29mqTBEDbaaMYV66tUeaYyAvDBKGMEXGEJZ2xQiE7JYGxSVEEo5i9JJVu43srPX3VE6s4HdWzEn7ntB3HePp",
  "key4": "eRL7AjgEm8snc5j77A1JNSUHT7r6nZqJsYMvNZ8jJcEypJ6bLSdbYCms2DGrjjYmuoyChbnFX12kqUuDHF3FDdU",
  "key5": "36PABVJQdMXW2v7f6iz72fpYCqXngvDhWHfcm3FqYV8Tsmp24WdvKFQo34T78jD6JCKhuEUZam6a2BpasF2ezzEb",
  "key6": "4qKyW6r9M2B8WdmYTtVG3sq8tX9NY22LmgcL9vQ43ooMoATS2ESPXXqNEeuSY1QY5216YS2Cea29Cgp4pjXxGEEF",
  "key7": "63Mkhnd26NwM5MGDFWk8bdFGD48sg4sn8Mvvj342ZtASj7awy2h8zZCyXqBU6PPezjxWizKGfwRjJfWymWXntjCn",
  "key8": "5EbxMDdZ9ivaKT1ZidbQiM4YvLXyshxAPBZcdkEmbGsN9Hq4e6n8aWwCRNMqq48TEmoV4XcRN1D2ejVp5QSoso5G",
  "key9": "wH19zLHDxdKS65b8AU2LvGQVgZjYtmyXm69jE2JKw7MqnDRB5Y5rcVPWhZwCkvZXXhVN3RYg3eLhwPGjXuZss1s",
  "key10": "3Bm1AP5NvYzLhB28Zi7NVctnQsYBrgXZce7B3WhJCubHTHkYVfHeA9NFXS7rWsRHrLytsgDGciWvRc4vzAakKi6U",
  "key11": "3Scv8kw9DqK5Sma5GeJUApPvv3jz615dkKDg7LtMzqng2tXyuaMTNBySLD3dGgQFssPwgtqrCvZmrVLdhpBf3vJs",
  "key12": "5Jn9u6ULTBHZF9B49Qvg3hSMfmdecHJesnHbzBapV7BCS3DCEbQPJ3DvugbdaP3oXNgbgxTfkZNMoiNCUQpcbAEi",
  "key13": "4NQ2M9tu53td7iTfpLY1eWdCpPsEH1ZKYyo8RTK1dvcErDadRxnn12FbUvQW9ZGnWyvooPU65WGzMgHXth2qqPZ9",
  "key14": "yDQoivx82W1rPwgBZ2krujikr7HrwbZG9kpjGPyr4huFcKsX6k6jtCVeWDRyeeUmz1YLabfh23Y58yg2fPr9MdH",
  "key15": "5W9ayRSqqTTuXCgY2n6mB6pd1tTpWX7UZGiqEksDRFX9whkiJLzZtAz7EDiCam68BPKvfvyq3Zy946xVwkxifMp6",
  "key16": "4wMdfDQTAGey8ApPGD5Uj34B67v7gwYaccjxKYv1d7Dkbr8cNXimQvX9ZSKUrZJV6Bokq6iYcQ39vJdj1D9QEiCB",
  "key17": "2MNCMXaoyyUJ578Vh2nF9uu8Xx2WsoCDKAUYij6BApLoLPeogtwMVCZYV3PJFcPxvVAmPCGNm3P6mEtQUBt8KRXY",
  "key18": "5LcNyhFDzDibLR2UGbkR5S4hryDUceLBqSaFHzLPszDsAkrnJkMncpwJedwmfrs3zMeZJWDMfppeh34UMNmHZUB6",
  "key19": "5aVJZ2UVvrr9izZp288TGbe1hFWcAC4mytj9QsFk99aew455xMUDTwrWAjH3gJhfoU2ZcBFVKuPTkmXg3JpjT7yu",
  "key20": "2bvyJFSd29gtB1nP1irWKyPseYno55fwPZFrTALKH3vkAvrH4rXH7mB1QenUaovYhoNr4a3HjaeUuZsA4sPoPxTR",
  "key21": "ka3AkL6P1JGnDmSPnSmvdPmMajpA12QKePAV9MazqSvoUWKfMh5G8dLdV6JRN1hXTs1eoGcpSEXAwN1RVfbYD6i",
  "key22": "2uTcTMWWH3F3RYksm72YxPjcDHRTHnAsMjpujBs1C9xfjvY6hp2nnRokFkNNVPGexGb6aCg8ke2Jxq1c4RYUZiaz",
  "key23": "2Ht6gHFCkaMLE5RixoxYYRqfd3Wtcy6TG6Yj8hsmbANt1NaLCjpMRnMwJe82udTwM4HxwKrPsddbTCaCg4nY43Xq",
  "key24": "3LdT4f3tLyp6QP6VkVZDJQ15Ab5RcdNqZ21H2yDnNfDpNf4t42FgARfPGiSsfFjkCPQgWHgwDYKb892aN9JE9saH",
  "key25": "GSCjsrNf8euwZhetx8ifqVMWTR5dP963rVoqPAsgoJEgaAsaBno5nWEXPN6VeswJorY1R9vDK6FhGfsp29zkFTt",
  "key26": "4xVqag5vtqLgDwfVVMdqNBKcFb4V6Fu7An2b3U8mR5SFjQjn1pA9iRpoq5Rb86NuHiEh6tUjTP8wBCLSud8sY5Nv",
  "key27": "2EbqdM4BXRSxt7GPRiKvhE8AkGvaXxWF12Z548vRx2v3FNkwWDjwzfWrkFfqd7xDRJusgGzFzPE1w68UY1V1w9rP",
  "key28": "7YYTaxhCjoa6W9woDoQgqokrLwN2aNYhTurfddXnzst1KfzSBtTVA5kyHshJKoGgdhwMzYqqS2LiwGsxAe4KxZa",
  "key29": "22RYCLqioTurPm9fon95G6a2YPvWCXiyhLAhuJas4Xf4h1s9zPwdZMjFbp36mUA4B6SpX9QtuaQ9e4r9dQk33tfw",
  "key30": "4qZjzZjHeTQo8rZ7bTqffGZHTALKzDQmXvvbREECNn8znnL7XagbB1fYWn9YQRRgZXrxspjvzeVj3YjVZR6CZjh1",
  "key31": "5DuPwqAYPuM3b11bXqXYcStyeqJCDH6ZmQrCAMxNznEhioKzoUMNQVtmksHi8wjdKY9mPXwiKnrNCmbSdFcB8jwM"
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
