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
    "C6mGLpYU8fAJGdA1djiqjsF3kXP6kdKiRin7XvQ8RXvxA8aetamU7bxDYAGQqJECG3HTwC9zC1ujmutan3xz558"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jAspHAwKHbXjYY2o8QPEZ28cFk2Tp3y1QijS2eHuiDvia7KTVVuCpwPBRyXJCfoYKDExfePZFBzGUsVSc4A5f68",
  "key1": "5AzzngbkeNL3JRgsZritKPqBc1LTbHtUWcGkZtFJFopbbmgEL62hJJeSLbUnuypgxWZBSBhQsaoHSiVSxuY4REwt",
  "key2": "5uL7ViMmZwWSDfBvY2UMWP5ozTNxtvHGGDgEF9BsHajzkKgAPtka1ZFGjiQQoKoU5DuGMWrU5A6bFGB76efg7sJz",
  "key3": "o8YKobRw3Crhok7akrsunEKGiFrvMS5rvwsF9N6TSFn7focYcUH1WGkG3KYXrVG9U5RC6tQBNzBgTF38EFpf1z5",
  "key4": "L17Z4JkjUqazLheA22Derc8puN8c9Fb46XsrqVndgz5fg1Pcwdd2eQdqCseugChwL17s4iusM7bYejvPSNm6mRz",
  "key5": "3gG6dgdCtiQ5i29DGs4JbqtodXEVHPifa29xWZfbgCxc7URre7DzHE1Gg5SWp9yzkq8SdWEXGD1bkzZhvbLzoH5T",
  "key6": "5XqkiqSmdQ2ZKNBGoa2j7B8sjVbvj6iQW6koYvJTPb71CG8TdT8XBMYMfiiBC7kGZCFENowVdEB3agYB6rnYpGZR",
  "key7": "33RnKRw12t5QiZWMALbidZS8HyMSky9JPBRPpAk8aph9cbYc5RUDX4TZnBKvZ9r57SXZGpueKSKfZ4PcjdeFPzeo",
  "key8": "5gmg7gFGNdjHmnKsGA9mCHwr3GAUDAdmeFKFzYK47ncr3bigC83Gs4xsaCF38m23bMrw6WJk7vqP6KaDTypV9cAH",
  "key9": "5gUGBTeQu3kPrrK2Bjvau7VuAP2ZYSdi9hs4bgKhJUSzLrDrH96qq88URWN346iSDVawuoHZkPvN7kUt1gupytUV",
  "key10": "3CrYWVdCVnVBVLYyaVV4C5mk2um6ZmYqoxdPoRZ9BXbgeyyxZadht8GGKTAs6sLcn5ZogbNe8aFVruTTtMM5FayB",
  "key11": "5Fc46XWvJBRmcotK48U5EejgPN77KsEk7qoTCtBjdS4asvSWqKsCZwqEmFQc7zAikDjBUEVBEcacmTJfSYLs3Frs",
  "key12": "3Hi5Tyt139t5RWn28SfAAqwEdXTJewPzQmBQT2k4tLpiYozKj26ioAuZ8AYKVi5FwHTWZTqJ9g852CN7Yx3ipvMZ",
  "key13": "4UDwT5PnDp7t7hjBd1xuQ7ST2cDXhq5VHvRt5rMoaxYyeJyoMVpnxnVLUNeamf7tfci6MpW92A3k6q8TFAoVnbhV",
  "key14": "52D1heGjzNpkSFzzJHu18bqPbUYRzM7w9aKqZJ7SZSK4JpsyAfmCXiML3iUxoASkMbVK8XCRGYDtxaLNGQoLz9bC",
  "key15": "4tRmdZtfhSwDHP72z9MTkcQojZg1EVVSrpg37bupTF9EuihKQLBd3uZDkP7bJrLRigWDuXCochnWTgwmpHSHiADh",
  "key16": "2sEE3N7PZ6kJC9QoCrJq6B2D7x2HchPCgPJH934LvqTCqhacnME7fnt9NWjv955Dj8qeuhzUTCm2tLJsJrDLCTYH",
  "key17": "4Nq7JXs2LmypaEi5yov3CD3EdJwvLZXcm6hJxdmiFcAcub7YhqyvUmMP2oC5ZwvDSiGLAAD9pfXzhTLXu4fMpS1t",
  "key18": "3xz5BthUN39NoGQpjV8tmipMuNpCJ3GEAxL5ANdypguJXjKCkf686sirjBkDSjJnE61Ynqz7tE2LpK8gVJe8Td65",
  "key19": "aDvyeASR9aRF4jX5R9LtNnrmoWVFKCcsy3M8th1PxqeAT9fge3YujSRZVHAgikkX37qaettci5RxyP48ZqAqqfc",
  "key20": "3VKh4z3a1LsCvBwHind9eDXCpBgTTngwKGijMo3ywU8idRCHDAEKBR9ALrBpxbfY5R9EMiBNbhTqQxeSUw9kjfKj",
  "key21": "4cDRAE94VaQCCWVwrwywcTJ5B27abkmJ1dpfVYUkARAzbzjMbU96NDVaJfQprFV73CHAwgmhegYkeMsHfHHoX8GU",
  "key22": "f8MXf3K89Betgc6sAwtkFnnTNrmsrH7YVZNqbxdiDtBASJkA6je2Ddkknx7aMFNgmdYSEKg1DS4yZueWHunFTW4",
  "key23": "AKnbyfufj8CoTsaksWaP9EBFo2knhgufXcBM46upXba9f4CgzPJSX9Rnqq4ZWA7mChtfhTpjxa6N1nxv9R4n8aB",
  "key24": "3sNwh4DeYDFez9YCvAJhxbrb31p8Jd5NZnA4F3zwq2w2qeAzLtxAyi6NcSApA4PA8DdAG35Nhs3KwMFZNoHLfBg4",
  "key25": "2bWiEBuPuRt2t952FA3xcoeQmBBRySFZAkd8ozfDdiHPJMLZvaAkiZw3xNxowUqUSq8rGTWwg5dMchMoLiMy6NF1",
  "key26": "5ECF2nRRmuBwirJXg1CoASBGnt4tEzx8jBoTngaBqAQCMPmGLXgQeHbESyYqwBAbfKtAxYuhryFkVbuhnmeL2LeQ",
  "key27": "2a7oaFFJ5rojXWWmzXM69JKUNLmtXdGHF18sNZoDmBSksMePnpnzTd4zkeXPmi49uR3S9t1zZv7crULnAJ8hNjEz",
  "key28": "67Zj7Ke5TishjG3GimkRQ67nXuXFPZnFKx1Dfc3vhcgN2ixzqiWCCK2KJddNQGLwGW1QtL6ngz2fPpJKDQ23bdP7",
  "key29": "3UfAnD3u1YbQmWoPXcCrqP1XUmamXxtUnhb9yRUEwCDYJZSYkhhmCU9SYjTD3txsm5tPZHqSFujr2zXVmxuGoJRa",
  "key30": "4PGJWeb8RRkZRuxjsJLLv4cXFW1ttgW3Y9sUxfH1nbxxhuYt6cXKCRw6WkUaMx2c5WQWVKZYs9JzrvDmPWRo6qHh",
  "key31": "2vTWZJbGKrkfKeGVXoqrZV5rUUT55RZ8Zx8LCHZ7r4JRNa9ffp619XY13R1DNq1fRcBWegUD3vHyLxXyn66AA4ji",
  "key32": "iuHYerrKVjvhLRTagNjYfx69oqYJ2199eGq7cN8EzFqJuEBNv4UfJnn5QPaHTB9mDjaNib98cVMUzzwZJwa5rSq",
  "key33": "4SXLyi8UtL4Fd2DsSEdyf7bpcBK8npxud9c7M8LRdFwddCDkzVypwsFUcB5d42uUVrEgUTLumcQwXFKU6mGYtw7z",
  "key34": "5dgoi9x1W674j75pHSgHmpuJ6MKnN8mmnoFNqASdEfveaRR6hySxdhgBwqukNzBq3Z4Ke6nYxYWZVGiHaoUDk4bW",
  "key35": "4iubc7NamQLrokZ9UHqtS3qJBNLZCKQDDFV6NecHyR4NS3HTVqJU6Uf9qpBQ6qGpLkY8tL2JAohdTHhvjiQ1864W",
  "key36": "2QLpEGGP3w12q5AyxsemxgSgbiJcDxGWVM9gMNRdWVg2bb8DpbPk8D35KWxj4STKQqQwaNmH8Eckwcjoq6K6vR9z"
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
