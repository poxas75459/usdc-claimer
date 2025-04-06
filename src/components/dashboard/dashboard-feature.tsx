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
    "3TesaHppCgmD7ZbbvSZrebuTnTn2hiE2pNsPaYPusDmrdZ9BGX442TjTRJzspXmMpHdnDhCrAL8nG2iC7GLiRXGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JR5UFomoEWkgbuni9k3qkxZiMqpC1jJj8vtjDEKHsPwvUAjoxHWZ1a95dU7zhyCvTftYJtTQjTi5GZLknfCP7EZ",
  "key1": "3v3LSLh5eaGX3FdCmQvwGDqfphiXkKvajnrAhM7vwdYPWsk1rYVtEzTtu7fiV4FUDQcHswS84YNWxoUTihhFgQMf",
  "key2": "5LK9dvG4AVsVmt5w4h4zzEFe46oqAmgyK7W7cV5Wx6Sf57G4QQ36gqJJonQaG57KWWNMn7Z7BzLSq91DLqq4ysaj",
  "key3": "3iL7a6V1kAbYfwVtkbqJbGn5qnoFm8HZXVaEEHXnX8zS3EWEanGQqkeaP1jsJnyR4AZ6PgsDxpXJHks1aZcZixZN",
  "key4": "2Wn9JUMpt4rg3VifzwSsMPcuF8YuowBG4n67PCe4kfZfTQWsVHrnDHrwMVbSEUyt8HgRJN6HBbeR9QwEtJ61shBx",
  "key5": "2CAHis8XajBLRTZCpGUXk98GuB1wct3SzDNdSAADksLcaJA8RHiz1NJCb9ubdJgXEumPjBrxmTM5M7d2K2EHbDPr",
  "key6": "2T5MgUa8dgzD37GQspXM6FTFBQPbRcfNWBRE8vbSosWVWtH1hbfY29q6gbpALg636kNfT4Bg8UuKqNYxCR3n1AKz",
  "key7": "32szYzzMBt6eMcrszSTCDSn8o6tS4kHzojo7BB6meVRXroGa8bPc7G3n6ZSpnWLNsMXNVfdFf8pDRZMtQ43KdQgg",
  "key8": "53fbnN4UrMjv3Je9qCuiYhbsS1Fq8XgELNRD7hfjPvkys6XhCSRZ66Z72Cdqcow8DkxnacL8HsLb9N2McRLY6Qay",
  "key9": "25hfs18epF14JnHaCS6MFSDX9Ed1tCcU6FUBEyoA52kwMJSbxQKZmXLdPyLyfNez1rP8kWwHZ6gmDPwrPsEAFFSN",
  "key10": "5dXedfEdCG6yjBcd32psxnnJucM3MeqednT6h247zE6MK3YzNjXbt5SF6W51fmmmdrzGCZuyDhiS2vAk8v941KC7",
  "key11": "5xXqU876kWfKdFzgLqKTgEyRD1dP73V53D583hP6bMbCZFMMzyMFut6zyyKG5zK4UBReypvcn3aoZZ7TtWJHW6QU",
  "key12": "z23THLhF6SGPZ8o2zJJQbWHRYcrSyFyHuVK2pL3hB9p2nB6AaS6gCCMZfSCe88gNGdnUQdz4rpXq1mhS3z7WqhT",
  "key13": "5FVgxU9VDLJ8iBft6YMywGDKQHHdVtbUuXDYunx7D8PpwVURMgG2MLrTpkCJDuK9sXXWKwye6eibvPYyoKnTSb42",
  "key14": "44inaJ9ecp9c8B5p2BAvcjfN8FfZchK7NW8n8aMurkVNyLNBg5cVxxAsm3BbqAL2ckU2tqqqbSxqfQiR5MD7EfGa",
  "key15": "2jKomFepX28aFMQ6jp5u5PD1drjwZdii5xTtpLUMZfNyzxJEjD2QPucSuASpAR5W5MezeZCTMLA6HFfNbWXt45mt",
  "key16": "LKwKqHnbP5jEmDjfi35ree8FUqYgyVH9bq3w2s83ZGZAEtZQB2Pihp68H8xgbjRUSHY6kFWRPKRyGWgDMVxiRqn",
  "key17": "2KD4HSSzaF6iCwXnaFjrCKADePYfqtYX99ETTjWo7otXVpjaNv4SfWWbHRLeL53Yf8JV5dEuw6Hbo7NeH9DqJgCU",
  "key18": "3EVDMmqsZ6kkRg2t8VLGSbffATFunW8R9dYTjnb192kXhjreEBGT6LvMhihSpvhuEci9SEbB6q7aMuuzUUa79eH6",
  "key19": "2ziNcdPUwUiPpj2HVfEdEttinqsDW6uNGNrzA33B7KzpVxDJ5reSa9EGyKdhNdTHF3F1v5umxKe1CqHxnRpVnZbC",
  "key20": "2EjXt3qtvVsAPFjU56LkiYuFx2gr7q13HAVUkh55pYPEE7TJH8BimVAxdukAmghmFRdN7YsfJ9wMbBFA6iHETcRc",
  "key21": "3zp6uei4qEtHMyDcZg8AgaKUSbQNioocEJrJo9JqsrAeHDZXbhGaLwYDWqBPDd4PevAqtjeFUNqMvQVppzvbAtoB",
  "key22": "3bVPwLZJYpwqzXdeUUFExB13ny7GoEQRVWdEeNVmMbkWGtjSY8GRhJsLLa6TLEZ9K6kd9bmd9zLrixHnoV2V4ZrH",
  "key23": "4f4yPjU7jDeJsWvS4WQfAsfW19jpb5QYwz8zmsAjJt97BGFcEWQTfgaxkYSBeLKJw5hKQeLQ4aXCsaWh2XkPQ47q",
  "key24": "4STKBmt9DysSMpYh6fkq1K48jrLt1pKACcSCiUqGG3d6kSwBHTYgH6NN4cZ5Brxpu3yoABTE14XhWU4CSoWsCwvH",
  "key25": "2gPe3rs5i1gufN3DYx8oU31nYCmxyJi15bEHzwUhicYh1xmbLVqMyNSD46kcj9vLNV37pgeuuqN3k6f9xhvKoHTx",
  "key26": "3DNDN99kAnvTJThPPm8e2si4ieVGQnPomrvdWT5LAi8zL8HXt6YE92k2GxFXajxsR8JHyz3c2CaQYK3ChX3K4nm9",
  "key27": "24QpvibDjcxVvAs3MzBget58mhJ12y3nGA78HizQqHeSJJMcokge2udeUxBhSLnbiGta7MMsMDvEy4Mzk6RMwdak",
  "key28": "3jfXzk2Xeoj9nF9xxP52KRtajAUmyJQz5M4Vypsm6ck1mGhgGDUH54NJBZeB7HGHnvE8RWiwcigxU9JsXz66mqS8",
  "key29": "dQAP9sodgFqoDDEqAerXRieoyDcFqwso2sTRgBcnqqkBHC629vr5GQWRaHbH5SbeeUrXm3BGD5MdpQCBb9DKwEB"
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
