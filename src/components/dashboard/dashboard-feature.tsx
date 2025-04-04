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
    "56S1t4PdrGjDwgnZdb2R2hBcGtfqEeiqKVZrgsz2dTDwDKkNfrnQp5HuTuFU1qyU6QEKVLwoNf66FrMzrrNCAqNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASjXR2hqEpERRyFtSdcaNfSjfkMpariMDQx62c3QGMEp9FSqinCRMPSn9sRjETmE4yfm8dYdj6hWnpeTWdC2bEz",
  "key1": "p6izpLmpipBq7ndDj3uTypAVGZRNGvKMbzhKV6KoqknWM4qR6p6wbceB3WLGVkJb7tcKou2LnHF3apP1AemWwM8",
  "key2": "NUVYYWwWNK1xLiQuRvVwHmvznV4CpRaHL6tjVhfF1iCgXk4chrVc5QwjYUSWJyorxMRiQtkMdVnRmVGUznP3q9U",
  "key3": "37dwkpJWUTjfqrFPshDsxhkpLMvydufoqovL8ruphCJGVmWykkau3aPPRFgGoJG9XgbVP8TzVW7L9MSYnwom1g4G",
  "key4": "4gHb8x8osFPGQBUqMf4rHWEWfFAR5Ny6VfEg3TQf8uqrziDTfN2UFCW75SQEsRaheTJcNK4paqGj65e5KYWtivsZ",
  "key5": "4qWbs6tuiQ3PYQkXH56KTFAc17kMrqWtWAs3ix3QUZKJGhwwmJ4ASp159PXHjECaKmzMmZ5JbeAzJ2WwJ69UV34w",
  "key6": "4sH242jzVJueTQ9WVtBHq4yZuc9oKVNfcxkCUZtTtqQJ4YE6Mgp7upfQteqtyGqZDjMongcmQUcvZgkxQV7u7ygv",
  "key7": "5wd7tjFL6KxmtF6GwN8bGgMQbU17FxLdBYgG27fEvQ7cnoyY15wvG7LvbfKUQ6BYYYSKm8jRmEwLsygUdYZhGeHK",
  "key8": "66Bqa2ayeJn1zzy38SPeahGtsS1wJ6Avqz98wibCxL2H6rZ6TGt8xeyeUENBSxCECWRFNtHeVBeJxZxK5hTan7a2",
  "key9": "5QMcEaRR7bX44ZiAvyPx46FegGzbCXAPowg3mPePSnJKahDfjy2KKjUUQyB2WGzkzsXbBbffhNetUFQr5uVWWYA1",
  "key10": "4ZRf8XY75ungnE8nZxdNdpFqYW1As9W4oMW1hmZsAqxvpNU3zbrWLqwer2T6MJVSi6YUCn3HZFNVtnxZ7FhtnXmt",
  "key11": "4wKDMTV5YtWP11ADMuyBybU8sBPV8sSfv9AXvYrAo8i6b5UHFTt7FYfDVhHRGkdiJZfiznQsxB1iGk3hvYYBLFFV",
  "key12": "5knPfejexHfTAxA7bWzY8DTX4iE3dTytyZXgfAorKyUBCw4E1jsDWr4b9gncrucNHXM4g2ZfSdntjVz72XRGh14z",
  "key13": "3GJhsL84RKzatNWZeaQ1ZTCM7skfhkLYcRjv62MG8xqYuxWttQsQuYwGHqWyCRqurvtB97M2VVfHRc8SZ6X6Zjj3",
  "key14": "52BTGkoGDjstddrEtbU2qJqr4beUDLKj68Y9m92E68ie3nY2o9SshiWFdQQwYAdH3pRxVfu1YgFTdLXNHvWt9ZAe",
  "key15": "2iUtYDJNyHVnwxWJf25zKgBGcEmZFv6k8S49Rfx9otNADkWHFY8UhfmpwVh8oYUboMRunSRjWsFxaeBjg46UW8bH",
  "key16": "2wEdrZFj8f7UksvAtezGrvPWPAF3FYxJFY7Wgy9VHnps3XWtiZ7wCMYSDM7fVwXiWxiU5TcYLgUzF8Jyf7tLJNi6",
  "key17": "uA7ZbGzX9TgPgvL1BGYbyjpWpwVFGmxqCABuHkvSQJoj2uwKCLF9rUqNQJe2Zt8VoTJub8u3nVZedG3zNGyUoyV",
  "key18": "4jCybhgEHNDWKvWWKeXFpdjaSXKEq3sWvH4QJgQZwQG2nwL3tTanVEEcZuf2GXpFfCkunxZentU1ARHrBExoMywZ",
  "key19": "5R1saGiQHio4t8hpKAVybonBfz6kCG7hm6HLFQ1dVwjmC3Lnudi1BarUxr4xtPmEZa9ZP5776P877paAPYWQWy3B",
  "key20": "655uiDzU2ZU47DZc8EPnYLCibNxaWdZetfpSexhMiAiABvCAFi85tzJyDn9AaJJJSXJNX7AhTXb4tFhECCS6Gyrj",
  "key21": "QqZHKmeZR3ckAx65FcVy4SxXBWcuprR5rrfzZZ5ZncTP8JpgNJiqV8sd92rhf7xLP4eakeS1eYEp1A3vLHNdaUZ",
  "key22": "3bH8zsYLXSBS9SwSzaTqudv6A4Mr8Zf7M9d8ZtqcDupxNXYGLgnbGvnHCc8nQbDSeQUFGqKQMz18UE8SCZnxinmi",
  "key23": "55MM61Pt6yCArsCPkKSTq33zhDBxdBidTnX94dThLd9A8gSVQE483hfZPi5A5qXqprxsyzqLn28T4Ct6kCzFjMD3",
  "key24": "23wZ4o7jGYhubhZnAKgqri4JGfkbhWYKBFLaN7nesDNWuKpJRYr3nAC3T4Cm2DZHXEMkQTQ2GAymWotAM8YnQ7oc",
  "key25": "2UmodgGE6x1h2KifqspYZXYd2hHhyYQptBNRTHGLKUyCXeirZcndgk5vnisfGvoXws2SvffRCX4azfQZZaheZYoQ",
  "key26": "QGko8wVC5d6s8Tx5HQhtbnpzXMctGqUf5UmVsiL8zvYRX8VSgwBNPhntNjdCzw4Huq5Me87XdqCFGwf7bKPsicB",
  "key27": "3vTxity7asqWVwWorL8dbYj8eiJyd7GiTMJQDDkFYXbqvhZVwqsx5EnttqBy3NYT1mWxSR9JwpppFzntX57pTMzH",
  "key28": "47LG7ZF5bAqHwxiebVj1eAxSu8pQ8vbWVisJ19EdMj8Xn6TP5DtTHpNvj7C1LqfxDvg8PctwoRSVdbdxk1RpD2su",
  "key29": "2AHieSbQedjgVHeVroefae648CiABY6ktq25dNXmnpuQN34WXF3dUACmyqgRJpw9MuEL3iKbGu9N1Ayx23WidSZt",
  "key30": "58ep5NTQqXruZBPo1i7chKxNz9BaQXq675Rmi25awEkRqJf8y1pYWXt4KfjypB73EAWVFLRRAMMtUj4uquGhmTQv",
  "key31": "4NGS8EWXFCM156iQXstgqaDtz6tMByuKRWApSVWuHzStfgeKfwLGjfUS47dpepuwoSZf8S7D2zMqsiisPptAqQLf",
  "key32": "5HjtU5Kmrs2J7M4TmDHRw9Pp818R4WgFs23rmDtYjFVQFfS8BmuNpyuJCoUTXt13bSbQfafgH2HrCQWxcvU8MHff"
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
