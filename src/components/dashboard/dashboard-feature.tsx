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
    "ugFYcmEAmKzcVBTdHTHoQX68r2EdjedxYp1LsuuMSeXzsjX2VL1kNGbREsb1tuVGAS1EBGUarDBkqspyKN7VYMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRR8YkSJv5NEBL7YHT3pvB9uAdRB4ZLfF8t4wiwhiUjnC4cPiNo57KPTmXPZqGdin6zSTWSeY2dAcEsTCzBjfBH",
  "key1": "44qsFgUBab22rTsMpsvvFUSActp8EpQwV9kVYhp6WsjKN2JXk5NDUN3ALPMrhVvkWYBTGjkbgEKASKkzHsnTCCWo",
  "key2": "4UaHtAYqfLPGwW4pWumAg9WmWapAUi6mRwY9RgaVPtca7gM8vfYXt5PfFFdcwBetpeUYZjvUEd9wA9fyNgmuoFG8",
  "key3": "5MUor3gaMsxVvTRdjwvn6DUBZ6SbrrMRXoE1oBtNT9EohshQ3Hn54qB4KwXKzZCfogsHqTTyw59mTKuDJcNsWT4w",
  "key4": "hzAgiqQickfriEffHxh1Y3QqwvGkUpBhPmV7WFiGa4CA6GfR3QnDSdoPbRGA13gKtZ1ecQAJNHZzCuPcrvuNEeV",
  "key5": "2UztnvJciGTj3gG9KrERVCukkYZht9mGh2VAXmxVewDvpmNibN48rTpw7UV3GCi53h5tkDsMXiFUhxgjcg2sjbTe",
  "key6": "5cmwxMvNvhw9VoBCWvu9WnB7HMkeRgR5vZJz1dHMKBmVYwfHCuyRM4KbzccyhZYwsBy7E3Vxs1WGttxc3Hb15Tzj",
  "key7": "3gGNb8idAWcLJ2GCyfgM365uvZUbG4rnccsshJ93CcJDT3j1Gco6EhnYyhCEiqqsnyKiskBxsYZPCdtMZMJ9rJJz",
  "key8": "38Qjo9t3UuhjGBu6BSaxKyVtpo972rShSGPKaBYRzTgBm5q18XrwVRAcqNQpANqCDQSNebnhx6VjCb6sRtRCAYGf",
  "key9": "r13ABq4H3td5j8xWfd8Cf89ETM5mmzhKRcxdBVB5PFMETriyBFBbkxdhLo8QmmeP1xBMvwEDqfAoztFqsdxDrAN",
  "key10": "3TES9wCsqzih8MLmjg3W7zWCXoJiWJmKo35W7sa9GjinX92V2R1Ggv8PSGZW2QvViSf52NujtABzC8tMA2KREds",
  "key11": "5eV5DfDfvTBT1RiQS8FDT3Gt4buRPAtU64w65AKTyAqeDAFo8hhAz9xRQLQSAV5DPZf7Xdk2hrobG1HnX7NYMMt9",
  "key12": "2AGKCEf4m3j6FFYKr6P5pf25TuqQRXDxepnVLq8rR9LQ4nnXXsMQUEYBkdwqrzTuT5EesQR4oMa7xfiHgQnTL8rL",
  "key13": "5C8hkrhZEQ2M7syMzaiMcBdiGN7sVL9V2Ame27YeothNZwq52W8HNxnhV478SWMQgEXAVNvuzhR5YFzUkpGpEj7b",
  "key14": "4wgEN4RnDnJ31aVkyTTVwChVf9R1S94Jc59JsZ3eG2USZDjzuRvBBdiqXUCtC3SbN4yCL9Xw7EEwLA4sqMqghjjk",
  "key15": "3V4QKAHZu2eEqVgGTKxG5yVyJvYy1DjuSmmsyWccbfP9V5t86ukPTeWcDp9uWwV3AZTZ7C2keDEPJByhLxh1BATv",
  "key16": "3DTGDdH9TTBkfGM9HZ7vYa46CUhkCP6fYz1UdjveAAFrD5acJNKoAJQ9uYnyB9rpC3mY888XCCUJbLj7kHtpKNqE",
  "key17": "RrLQenZjAwdHHVvNtvyVcoEr3Wky9C5HE8rHdys7238goGzrzZaovxRhsKrMM7M7rtr5L54KLi5vPcTXAv2fX8R",
  "key18": "3S2bGdk5CUoxfPUbWSEQDz5aymfUkteisamsC17Txnv9WuDywSxcC5ZTgEpqM8TXsrJqucydoJcT3mET2ykqJHa6",
  "key19": "59u1QvMb8THt1FKub4X5KwRZ7nup4axZCeF9GptXcABNCqHBdo1C7U1RmP9QJhmJ5BewtuApyeLjknzpVmdMBszD",
  "key20": "QxbX9sUWXzaRvBeiE96DEbUA4dDaanBKcY8nkmcodAZwsFNLAYbzbesFKN39y2WbegN9VjyZ9hBaW3mRyoNS3Yo",
  "key21": "32MuDy1DobVA9A5YFPCQj6ioGSUZwXmzeE7cUUopNSi7YWcXwKeCyajxWKPU2FMBq6kyocx4DLUuMxrSWGDiQxmi",
  "key22": "3o9es3W1VGG7keZL5bU6Mf8CqEcB7CtUBtE6E5FtecoTsgviqwKaANc4ReE7uCCNyByXWcJz9aHhig8v1uxuezot",
  "key23": "FETJrYG7yxj9QsSzM4DYXQuyQJSRukiyP53oqBiA22hwLFXa9SC3rJuNKdcqqL6azuyrgxJsSTn4xf9Sb27tLNm",
  "key24": "54hEmtEJz8Qk3rJTHeHzmG4c3GNiXbtDSuXDBqCWbYX7Ac37tTEpiFcArJsfeFi1dpgSpXJF6VZ8c2bxjzghSC9z",
  "key25": "2CLJRKSnkT4YNtTLDPQXrQDZo3Dyg6BBPtKmTEbyT4WD2kLbdZ16AMM3TUzA2CfkjLKYm8VGWxCvzeeav2KEHpz5",
  "key26": "JB6DTmY7J6vFgHLBuxgNjD5NUYo9qCv32P2s5KTWignnHKNWML1oKNXtkDWKefKE2WR8cgwv3G6Zsy74SA1cu5n",
  "key27": "39Q8AczfovxfsjozJW1bsJYLzcV9KTY8TFDZezqNfuXLf67jz5g2eikGjovZs676s1jVdkCQC9ChfiCGKeKMoGU1",
  "key28": "5qkE1W7jH5rLpJExPfWHjuV318cmZowhvgag5UdeZivoGNFxcr6rV4xoMzgkkZZN2WZbndmigjh4WXEQfP1ozKfz",
  "key29": "3hKa5Fv2rwNJjoiMyaVsTQjtEiMDTVjEmuU57Gj7oqur755JHffwuDGJS3poWPKK6LQunv14SMX22g4eB5oDW79z",
  "key30": "2dLK1obRVbvLAf1k7KrjtaPjmBvb6eiDNV4BjaiUnga2ukiP6HuhcKxK895CbAhC1jcxazjMW9c2susupY7Zj2eP",
  "key31": "2c79T879R92JKyN4rKRxReuA9XhnMkqNpvcDoLSEHNCYZx76f6aub2xFYBaWcYGfkJTw68m6HmPfT4NZyBfh2hAo",
  "key32": "F3GFR2oHC1mBDEuoYWiJYXV11W9Qee2cVGZeHk7L9yG9JBjSSedbbtrQ4mDVFC8GNzTSdffCVFWN7aoec3qSrAW"
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
