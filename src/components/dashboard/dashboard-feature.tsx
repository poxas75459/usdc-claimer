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
    "sZaZobqvzvrFA4hEbFjdKQaKVQuDsue1NAs3s9ePKGs1LfPsn4ar2ebEhrMNnYkoNw7BXVQoyrNemFkZArc1EDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYYnPdGgzjC2jJoz9mjXxXwvvxv8EV3iTJg3qkKRLTUQfrBRxDUH3wx32j87Pn4oznxngc7pPtRe866s2899qCC",
  "key1": "3eK8DwFD9TJtLAewPArS3woFDb9WcCs7QeRUqjx6cdGGr9uF4UUfqs6r1hRp1dAaNo4TyjX5BVadjbEns3GFruNW",
  "key2": "4pfDUuvvpaH8cK4QUdobU5HizLDFrXcwrZLjXr5vfYGX4v1xMjtwviGXjntBWk5h8977j8gjFMaBqdgCSUUrqcda",
  "key3": "5Wz82b3bsZ4aYPdjC7chSEuRebbAPrfREgwPudX6xy289FMP8zJGhY4HmcD3qQVMVtiftfMRkFog8yYP6FYJPMp8",
  "key4": "3qL8u9uwJeRTFiG4ghpNP9ZT8ThbqmtfSfTXtD16kzWohZNhJ7qJap3KYqNNJJrPinTF1vKvHswxfnnbAK3uH2xG",
  "key5": "NzDWQhbBhMDavyRiEMCBhsjAyMFHnu2jSMfGNKt2gwoSXG2eZah185Z4UJ5H9xVpPyk6S3n6PLZ8KWHyGjEwctr",
  "key6": "TwrQmkvG8FKqMM4B4u2qyi9wdkHTUcDoSETimSBszH989BQrmRRxYbNy8J5X7kNpRt2ceoKzD1peK7yoi7EpBHF",
  "key7": "4NVnprxTBtCXXp7obhMdx3UGFCReK3xddh75n7FCpYm6YHYPgnW3kfcUvUWKx3jMb5Um8TbppNBBcG6wvTxioRcT",
  "key8": "4CT6WEho62Z8HYM1TdvHfYL14Mv9Dr5GGAsmJH8DmiLPJ1WHvDq3iEV5bUQ3iLh85CLTbyC1LwnmYUJ9U82fmExZ",
  "key9": "4pSYQ4ytqiSd5ARNCSe3XA3WE4wiu2ujcrnJiucHYC88ak5ewBCaJ5nke25hbTmY7s3wGtyP8hSQkMhzSYA75d1h",
  "key10": "3qV9vge3CGuz1Y1KyahW7YV6bgBN7uTRQCkhhhDxCyNS9qBxq5kq4JCGsw8tnjC3ZYtFLLD9uyCWKP1JcZr5pToG",
  "key11": "VyXoBvuEPW7yXeVJ78dt8vqHaX1vmdjAXhUTdMqMikbeobKDnQowjTnMBqEggik4y2QCtax4jj3K6aCDH8X7J9v",
  "key12": "5GMAZzcRv1kMvYrY7y1pLPr9GB7yUxA2HzcYgBheKEnw4qbk28wS7pyBQn1XjLpNG6Y1uW6SjtW7c6ULciHBzycq",
  "key13": "2Ayv3ZCKj9ki5m5XRomzwYCFMkACE1Q8sU37CEKnabvddzrK3ihSz8UvAQpP1GaTm9s9D7XUGKbLXBxEQqhJePC2",
  "key14": "27WiYPvwKDJgHXkZZT69v3xcQSuQzPa1ZiqRd7SkfELERpsaBykph9jrHtZHPPwcESn9VNspVck3ZEDRKWKwNhPW",
  "key15": "62yV4VXq12NrcykEKkVpn7QffCrnC8yGk3x8DuHWo3rxpvdRQoZSveUWnxPhFcq1qdHaJpTnmX5aFYNS6U4yKhaG",
  "key16": "4Ccp1qkx4uFf49HNXsqkn9s9EXS5t3fg6yZ3T1zsV4oc3fjHRc4W418W8jsFRFaBXfFCr689xp9E75DqqVy3SMoR",
  "key17": "gYCwqRBgs8QwjbeU9CpgtfxYkgHGBQWTLRC4m6dBwEYB2ruTZDg8ztpYtjgcuuAGNJiVexXnjUcpMkqBHaLy8MG",
  "key18": "GANsumjbqqHX2uv37imRABa8azhRQUAUYTWUihJTKZm3n4G963N8tPSPWrzPVrCWxbbUvBPmsadcb7QGEoEx7TM",
  "key19": "2JH8nbH5SGYK71yYj3pwK6NqutEQiGtsu8VL41tbakRRGeGLMH3J6fzY4jYkjcrzw2r1L25MTT5GF5nQ2M9u6spK",
  "key20": "26YuaR8WJMkywxKHRMQ9M6RxLg397LP1sKgfXkDSwcWEe6dFcowo6xc3amsRYCGk2YAwTLztmvkMzdzPipDMLRGF",
  "key21": "PoCdkdxn1Kp7EKVkJwBJ34dXP2cFtHrKAuQ9kTDGAkTsziCvuVnrWe7KRMKzTjHRC1ymqd4NpeDdJytYPkUHuwa",
  "key22": "3CUWEmgQEVX7tczqZb5AZukobM2pJMpNqXdi8gkoK1XzmJxB5odf3p3hATbG9CLv81gEfGB2re8qC6MjF4HX8YEM",
  "key23": "2dpSHETqp74dKHeV3fgj6x44RsgKvRShcpE95jxzdJML6BLYBU8JGtEpTDhTwf4Z8yHbdwJqJjDnJfjXqXjPw6g",
  "key24": "LPzCxCinegtVxaaiGovLjDvbxeTtKCNvzqGf2tX8obo3yQYd5L4KuMC18CqEzh2mGpz3LSGHsNRV94XsSYXs83g",
  "key25": "u8T5qh1tvjB7HFb1hHJA55akqFhH6nmV3znbRLLSsBqTQzjegBAZ2PTvLcAUQwzNLQt3nGzcWP2vXFUhzBZNHJv",
  "key26": "2U96DshU2Zu7cwdinWAyRdnauMZm6BKfaDjQcv8ntLQUH2kGuPzFYkZZPtCyQsurnBPKd76EmpeDKXQpVnssLq2n",
  "key27": "tHFQaNVVZfD7frDZ2CumTZqvU9hXjAYoVVUrLVacRnZSYnN7hJU4ivEzHB2ZBt1zaMcWMCmDoY2pc9E2yZcWNyT",
  "key28": "svphz9xhWQ95aEErZT9gweqpsDwTVajdUD9FcQ7eCSd17tMUww3wb9KwL16MjaRfcVtjBUGRHP2CSD4AGoa68KH",
  "key29": "5VGfo2FUNaZvWbLfbB9GThpogznpgjxEMr9Fqb5TMVUooWi2MUc2X1PRqwTTCrJSNJ3LWREKp2c2B8YxsLqiFgge",
  "key30": "5dCjDpdfpZWhqfRetRg4MFV7hzNnAwHkTd1rfqBDdMqvnTmQ5j9UPKKY6tfCAqyWNGB9jwJX1djKRX2S3fNmwZh4",
  "key31": "2KJsyfxKLHvb3wuVZDJCPzWXyCu31LZPb69jMYRHeeBJxNmvcnY7C6vFUz1aupKcaMskwTTXA4PiiZ4ubML5ew2t",
  "key32": "28sSXEB3tZh5irtwmTugqg7f7BVcF82hBJwVeBqjRDZVoiHNP4HVXQCfQsCoRELnics5u91YfYm7fXsrSp5XL8TQ",
  "key33": "2XhCvSnSWngFzVwRriwuGefrvwJrfrj38UBRXf4qTtZDR2YiPSGKUpvydixvzoSunLDJmU9ThwvWCWDnUt7aJ73T",
  "key34": "4KWyY2KDZBXEqzbHKuib3bSzsPTyxjmqTYH81TQWGMDVTaobrDsUbN2E2YjiZS5ytwEeC1sNHnhaLpQHikhchpe4"
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
