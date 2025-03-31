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
    "4zQiEhzdHXhNLt3bnE1GbtnR71MxNR64JxM42uJpU8NRC3izjoxGJxh5kBE1mzn7vQsQqHJGt8dW6FDgEJqY4WYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2acyLeYh7Gvr5HhWzZdiNjNt2Cm3DRgE6dd3CpGE71E8XnFBbh6JWUW5MQsAMFvX7jUdqqmfuCEdsBeXYeSSKg8N",
  "key1": "2jtzfrmAxhAg4YGqW1qJQBLXReRrVhXGe6ut7biXVDLtSeTxicmhFNwL2gVCS1AEQtPU8zZFkr2tDY579vntNRXj",
  "key2": "5D8uVg92mYLyd5qvDtZ9scVEknVwYrBsvDmUYRqBKUKhHAsMZEJnm5fJ49STeAdtcWSPDGK73aAzKeZWPyTMEUT6",
  "key3": "5JXAzj9dAdUJHUQmdRqC5hTxPKovBBGM49yL34gPw3EqyqNC58Yz7qFUa8FcNf68K3gC7FwanYs1KX3apDL6VXzv",
  "key4": "2rrmiWeSMWq3eSDexSMXvSDwjmLEbaCTdMY8brmk1oCNruUJV7nQkvKd2cyGAWVmMCGNitxpFq6Xic8HeRX4ZYcd",
  "key5": "5HbMkNgCs4KHehyQVQnqBY4BDscp7ZGKi9MZjoe8i2kqGzFC6TUzd9oRoWfrZ1ypzTcFP1GPWJev7X2tjpUhGjEk",
  "key6": "48Ri7HdcGnyFCHEc8Xihd7FSGA7zhSzpUiLN4Jh382izSSc1HvYDsueYqJPVMcLU375kHg6nj5BoaXJRgCCdHAS7",
  "key7": "3UehpKc1LtxPddxpriUMbBsDpb4E7eNNNPbmxP3xGocctsaV1QkSRzbvfpzNNmAFPdhuYtH72FE2kVniwxbuMyr3",
  "key8": "tCTaoZy1NBb3jnGM4SVm8NmaYDppfK6mP87seeoTmd4ZEZ4LLnhJQS2U4Z6PaekViaPKJ9jaPJL34Gt2nYbBmEV",
  "key9": "3tQe6hqf4zN9Hnfen1TZUKMgfNCUkdmU1huoNcmULcmTBfKvio4PH1HRVVTJgvokbwoaADWTYVMJ8yvKWKWRWzdu",
  "key10": "3jWNXGtsytwR1ncw3hc3itauPBrpeCRfMf9Vn6XeNd56gAui1pkNxghf3F6xvo9PZ8ds6s2WQJuSirDD9kkyjC1D",
  "key11": "mFKSNFWVLMMofBycnRXD7zhVaa2oppEQzKzPUM27Fmo2ErcAh4HrDfYn4VXd47RJqMbi17PNd8jzzsqt27WHaeg",
  "key12": "4W1yTGTQZdoYcvZhta6T434ehKeuSnzMF59jb11gdmDP3xhhQmAL1pkww7HidgQKbz2nZUWGH8cnKvU5LxXmNXJa",
  "key13": "LfH4eRY5uViPLir6bHPnoadXVFpA4EfxrKDwZxuBoCDnWUXGPAo2TsL28wS31g4VNphCju6ETdP42fC29rPgC8r",
  "key14": "5xm1o4EpTfokRgMYoMwZ2W36Wz9L6gtttw4sFh82Zs2jdEHmZkP77duuEQDZT3UheP4d998E9LxcBnep9TdiVZKg",
  "key15": "41ZrsXqioRChfCwUwhuEQ7c5KHzBMGjpRSRawfEHSG8T4v92jt7kucwNHgD6qbnvdmtEDNcSSZL6y1VWGzRoDZfc",
  "key16": "2hMUsAjQkJo47QSjjtmLYvrDqsAebWvk34CE79h86Z9USd36oq5gFUvbpcEajQq1EaVUAv9PdncVJcc7FzUN5nfv",
  "key17": "4knFVmxEsysk7QqaPCBQXAdSrGtyxxAAvxMQ6NsutPXVahvdi1TNWsuAGr2uVs5vGYxAqXAs2qaLbxnMdmkDEopB",
  "key18": "47oAnPsgNPqp9fzhcVnyn65qkGxuZuPpXke8Y5BUuUnrLvpNemmttgdpf9jnqMwL6TLfvWmEeHYfVZmGWMF8Q1Ar",
  "key19": "H8KaQs6i1ScbuhnUBxeNDWYLgPuGnY57yBsB8DxrPsHxudGWEdQLahHfZy6KwW6n1KHbFREzCjBtKrzUNP26iWC",
  "key20": "53NV5enCu241n6jtKqwJWfjbWU4bzJPLzyNZ6ZT4yHkM1UjyxEYtUyvJunx13fygbYjQjhgcC3Gj9bspDk8K3gNt",
  "key21": "4N4GRqbNcPFDCvsHfcTnWiD7SPURpfkakRtivbST4kR7mpwn4BQMwzyzx8n93nCchz3rYLgdGGtgc7SNaKV432ST",
  "key22": "5HtU9982sW6EpRoTBGoKAyiBmECVPd43fGEkR8mwvu1fT4N6tHpF6FckNwzv8RBA5SP9hZ6ikSAjz41u8MH1SUGv",
  "key23": "V5h4cv4UhdS1Yz7HMqGVdMemRDtkmwSWvCZ9xD8A7vZPLTqRY4WkEeWtZofmM2XtY81J7HWaGgjC961kFqBh2tC",
  "key24": "JfZvEohyBM1mZX9eMtVtaascRkA1eJN9G1xx33sKebTyYNW91KbC5s23DAu3YuxJ9qq3gcXr1UinF935H9G5TAM",
  "key25": "3Gm3X6Umd5z2A2yd25pVdXoWUxGxMuaaVfu2oht7BdkGHLRv14JusxMgCxqEekW5qPzuDZbsTGHhsiCDsw5NHeCb",
  "key26": "eMNyXPwFyrvP516geSgMcyoU2D8rYBGoeaMX5Ne3VLxiedmAsqzhm6Sxgv2w9ffKYcTvz6hRYbuU3ajFSX8Sg2B",
  "key27": "4Aph1FSJAroUxTwG1xdXLYy4AMNWiGkfB5cB5s3ZV9vz6t5a4HxSwPEKZcLWaSGBr3tiZpyw3iMhLMpoeKLjQyrK",
  "key28": "5GdfcWdfH2gVA9ZNMusdryew6Twhx5ozcjzRJxcd3ArsBt1FeDxuvUYZqaVc4i7aiJooPsTe8faAKsCBQHuRkTDK",
  "key29": "b6NUPLk14WnxWjvBt8ML9Ltmm3uhpY5F2XaZe8KHccR1tn57nTJGLJxgLTQwmEQKAS7yKbn7kxwkiKLb5NvKFjp",
  "key30": "38apBAaHrX2sBmasBXjCFL9cBmBwGWvZ71BPYsnyzDhFGjhMSy94Cqzs5a279wcuG7VHC8zHaPcSNrH81JQpxYLp",
  "key31": "54bRZdhrXecgSSxKrrf1cd1T662WMsGMXwqJe4gNKtTBAkSE6VvbKCugiWBUAPT9BBVJTTkCwS7Ujj66PFyexzEm",
  "key32": "3fSnrj4d4rL3ddQ3TohnLapn5hhpiwMP4zvQp8qLCB3KSRFw4rtvNMDrxLn3fUo9P5Sbgt1boecawipENoRC6WNr",
  "key33": "2ThsLfLDR91Mu2jsgRAAhKrdBhkXg3FuJUVzFzxLvnDWUGtpCzm5tNafvwr6ihPYtRZhgyBv63W1FDM8ho6UhLws",
  "key34": "2U9fUKUJ6yzxHKbbWHo7mmszRTR5nNzV6CfBDZ42g13bqMsCQzaZ3iSrt9P6AE44dsDp5uV6GhcvXpajFGqVAayy",
  "key35": "2Ns6BUq32CmPMBVRMKbUtw8LyQzuE6UyJovUeBg57tw3kzdxyEBd9dhPAhqkLEgszEjkELLQ3rgwTT7RAe7g7nyL",
  "key36": "479oBFtct41bew11TjhhYTHdo42R9jAzwwDDtRN1BH8LQyKqqz2EYHR3CZQGq6jiBLCnnfNCoBh9usqQ1gy1oWVU",
  "key37": "67ro4rptTMiTA1GjV9qqtnopUzrqwx3nJbHhB4wXdNMbCAPz3bqp6pUCZ31C95icsKPx157nFqDjTGvPmnm32QVP",
  "key38": "4YvF9ce1gDGGc2v3PZ8s9bddccU7ebSEWeobmpkPCzzWaadZ9uhfdmyWNJHs64QvFgmh3tQqF97DaYcKwiRRKyMV",
  "key39": "4SreeWAh32C3ZPZbpFMtucuJTizMwoWQxkSoGQ6jDWJyMXb9jEKU8jsKA7Xy8LChkU62pRZe5FNC1r7hqgVLNtM3",
  "key40": "39ZCjmBVc4Y7PEeUmjfWqVeacKqQN5WVwtUkUCGEjzrMrryysYcE8rWhzmpiwwwibSACzihE7ZDTiDoGNGiSvQ33",
  "key41": "5PuNLUAEvY3PabrCcRByPMorY3ag7uU2Wqq2LPUYF2TrRmEhBAWQuL7ZE7M5awKTTUpX5tZcJ8Atuc9rqzqjgpGX",
  "key42": "5EaQFa6cqaCr7fdtTsSPqQAGF1siyUqFYjyqMD5QXNvRHDQ9feMZXzSFR8DkWZrAZZG61FtAgdH9z6A8CZXwcpRr",
  "key43": "3q1HBwoaoNaJHnJW986X5fxvSfUEM33T5yDvC176KJPwiAYudtfRnoaAVA2SpUAbu6ZjmmYcHfxL4cCh3cMvnBW8"
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
