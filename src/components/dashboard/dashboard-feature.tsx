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
    "DQSnxvgqnsCwLtzVGs5JLigbWneyjKgvngUnSdS9zr3stpP3ySgJAcnEbyAAh9rcVPWrQjmKCRMdNKkon8HTdS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTD4XeE1ACVrC2CXaGvwqwrR3EVbtCGjQGGYqCHeYqu2QYErBuv8Xe7zJSBhaLKNH8JQRiqCiT9LwtWsRTFtcSL",
  "key1": "2T3r8WpiUkUxM8cCtzfQnG4sJjbSbrCScFXGya3Bpn1i21G41UMD1baWJ7ePu6A9B5rmiSyYWyEs8u4zr9C2Sq3Q",
  "key2": "2pstdxuSdwNvKrKZ2gFrxg7UyZmvQY7YZ4iwf8nU8DCDSsdPEtvquGhWY7z48MYhCH18XwioeahF5kfEDsuT9ikL",
  "key3": "2qVmXpa9fJQrZAV7yBtAzxry6Xz77tsnFa84aN9xaVTKLw8btudEmfzMSGiYJR5BBf17nKWSAvNhK5P1SYmmrEks",
  "key4": "5U49zEaWoGTH3XJ8oBCWvGP4TUvheH6JbTHoiKpa4DdpvioSnK1zwBR9RUYcbEP2VvYQojBCF4wqM3e6LPgj4du4",
  "key5": "5XFU3RFbLAwgk4xn2pBmBZKfNV8zibPhgFxyn4JWZinZzX7knHop1afwVoMW6DqrFrtSNb4wu8itqnAnkn4GwyDk",
  "key6": "5x2pQmxb3K1u1c5QraaBHusSdPeDsk4oJ89b28qHsi7istjUCPREaAgmt4ymDY6HpbqC6wE69pyZHekViMEpFASq",
  "key7": "2Woa3TB8hwgJkrwMXsV2gFC8Z5s8HASjnKe6aU5gjDF9yfF1cBCweR6795tGt7xDXYi322a6enSqp5dNG4xcvSB4",
  "key8": "4KYU4o357TfLN9CAPqzK75VQfem5kESbcxCCqw25ZYspwGvtZxnXrU5iULfxtZseFRCu2KCcnRUQ6YEa95yPKBdk",
  "key9": "5VTrxKRgYcGBqynumiRTXUcyvWvG3jpqzB7NEQm3RFgHp2rNUUypr4mHSvxYfSosdi53GLdS1XRN35iayCQPZteA",
  "key10": "3b9ovJJJXrgZQsGaDERuU5aG5M1wBBJU2nTqYRUphNypW6jDs5zbG6RLhUSfq3aH3C4ttw6bPM2GTT5HeRfucgLw",
  "key11": "2HVj3BoJhUvBNyMLx9RQZ4DvrsX4LzcPDzMaejpjFvbdKNfv5p3pBRMYoYcfZFJQGFMUrdRLo4oDnhhxTqrDT7Lg",
  "key12": "5keqJyzKFSmgjJPC3GUoEVn4Exn9MTjv431CKM6jLAnMKTquvwbMY9JhNb5ARbNKFRZD8f3gjKMr86YU8nGCqwmL",
  "key13": "4YtZUbk3NDYHuRCeBcKtsyHmvKUk4Cz57RsJDzXGkwK7Epqj1ycmMR5G2TooVHw56CxDuHgGNFScmGaFuc5MVyhJ",
  "key14": "35rZwCeBZRsPS5hLaGPh6gfoDoQdGgV2wjNTmqTiq2eq37JcCF3XZWJYoEV639aqPyGYsbHanwo9hSrEP6XtCg1M",
  "key15": "66dZz8Dw7t8K8rKfX2heDHSenEKmLkhesBEdijcFiLKw9TFiimtT3WAcYv4eJEMpDGovSEDwUpxtBaGgobmLwxT3",
  "key16": "4XRU3QAZmhkpMf5GmSDtkrbtZAdo6zCcoX8MNVZgm5kemowiuu8bQ22tPLjt8oaTb2jZM3txPoyQ9sSBHQumBSg5",
  "key17": "2WVR8znZJXHQbaE2Mpm6VKnsVi8J2wYKbE4wKyc2TTUM1HnQaLgWPEGmHuPGAv8XhMwWGPrnA5cPEVggaxQEDZRa",
  "key18": "5jXBwThzvHsQwi8w2zh1KnCvQMmqdEfaMHsgMQFjg38oUGrFPXDBtibv4biZidNzuyj28PmPCuwDvq4eRqcgjYkm",
  "key19": "5Yc5f5jhjgJzsvhUNPmrbaqeShBajRLfM2Q3kjxQhGjfofXnfLUKtmxFcttGy41owmrfPZ85jcePc2F7HD8rqJak",
  "key20": "2a5fQ5TtimCvAZCAGxsRPUX2SnYtdTzwWLXLSZpov3q2cs4evwxSU6Tg9d5hWwNrQ3LSnfjsuSZokGRjCQgkDoqR",
  "key21": "5qfUfh1HtEruXUceqz9ZUZvD1RVJvupvBeZ9jLffZowJXwaJ68g1hAMpm5bEa1em6RgEjwa69vf8ujoXWMHFZBTU",
  "key22": "aaRyn6T3dGGmasy7YTnNeHUkxnH8QACsiacaYWEqDjxe925z3rNWoz3Egtg6XqC8ypEefqMbEykZaiJvheQKNPH",
  "key23": "3Pwbi9rBzoyLhrsiXL9tFqDYxXDVRrkzV3FWNJW97NZ93L11jdXLe93eAuu6yB56NiwvzB8n3NJ4Q6f7fUewMCVa",
  "key24": "24vgrM7KapUPgPuW3rmnGZjG5JEWtfJDv3iok686uiDSUxYfByyGR7bmEJV5GWqxr4avsMf5FxZUjZJYhq6Ve1XH",
  "key25": "4sEFZSR7jD3NTErtvAZKLg6rR7N6yoFsAZL7Te3j6TaCmLhro3JbJrmfQKpAMqK8ADt8bUq1XuPaqDp9yGqZhvBs",
  "key26": "5afU8kqV3dpjjebWSSukK2MYBisZ4LmgTDzuZdrsE9mmGRxm4cRZjNyBbcaBKzCMz7cwVhVsf1NCignfX9sGKsE2",
  "key27": "3WX3ge5rJnaERPkNzPX4Lg1hDygtzUGraiLTPYsgmGnrFx2pYkjWmk2Qc2FPn7q3TTVxcZYMeEsT8wDYfNfasWrH",
  "key28": "2EuDhnujCgSRWoWzVWhUp8YtejwaRTjivMFHPyjxpXHJRsSx1H7vi6Nq53T8u4wRhusLwA1EbxkpWVNQzLaKQ5WS",
  "key29": "5VTJraJXQPiL7AxVYAorwKmvCg5wxbzcN8ngZs7oZehuuM4XRtc7FxuehS8KF1JFsZKtRLUGuKf1XuFv1kP27JYZ",
  "key30": "5CaN3PCRpGcR9Uw27v8AnvCMo4ESkL4EWjctz8asAw7ncUi1H2DVw3iqsPJS8HVg41BqMefRCssaiutCXgJDt5ZZ",
  "key31": "Qa57vFZW9nJxKApARvXPeJZ8gGofcW6MH1GKskH9eFfb3b5p59Vwj5RvgrjpKuZyQzrjjczn17AZDHjeHWbZyvD",
  "key32": "tv2mnoeBuahWrqMGc6d1nYkqyEgcmuqQwaNe5L55JVkvShQnLgRAiAFSDqwWASM5BFwh2aurrZAsvFQ5GsLTzHU",
  "key33": "2TeNLpzcELiwUXc4h4gJHE3Rvi35b69WbuuBAzLsLBUezrVJbpdH8gMrWAumPtAK7QZh7qpUpeKmv4kNSS6zJAn3",
  "key34": "434T8fseXQFEaoMDWCo8TQskiugopUZ7Crtedi6Eb59kvxRuz8WXDKeLYFd8oTcnRppMxxFmEc9Gtd5wb3HswzWw"
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
