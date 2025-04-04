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
    "oZGZv9Cu51LQxycHirfbZD7PYcL6Kh6so72jYfc5g49xcApnJFtXu2biA9uye2BNtKPyCT9EfhYJiDEPCJv2cXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c2quu24xmdSqjeyEqJTX5n5ja9B8r55pVi16pTFMkya6vC46jsTsRd6WCQfRvWoAY4r2r1bJNBXJbwGPCcmV8xS",
  "key1": "3hMGguAwVEMobTVV7rSajScExpb8tCW3kWxsYGgqAwoZp3iMBn2sioJAQhgUwD47nakTwXNUvdg4YWk8LWmmGC7B",
  "key2": "5FWCvhCUBv7kGWXnZhJsBk3vcii1wa8Y7km59BATdamqf6qDCxiBbHxi6WNUT7fr5FxrnRWHGtGNM4pVuNrMkw8B",
  "key3": "653Djo8Vkagwx9J5j8pDwep1dJjekpE9cnB2U192LjB5dguZWVWGZh9jpAu752kULrrAACZ6cN8EkQzXapjswMyP",
  "key4": "9DfpZajE9ftoDYuRkf2MX2XevrBpMcmQVv1uAKntjx1FYyg2UjVWVbnt8dgYXn5c9gGTt86qASJV9X8AhEKnT2c",
  "key5": "3xWNmjk7w9J3b8aTHRxtaPG3cMWY4D5DcSujf8UfaJdtPSTKCzrRF4wxGrqujHakFiorG9UVkGgnQo9ZqhAVUBjL",
  "key6": "4KbFwFtPWXMqtGqWgUXrTNNEnPi9cAJXZn1STY82KBkvGhknS2kRCcmN8M1yRN8NyfN1zUm7rkbrRp15amjTynWa",
  "key7": "3xMxQdjTqLjjJWYnPhNQT8RknkQsXUtfGRCh19F5vn7zYjRBDVgPxdWmXNNXjqpzm6eCWHj8B2aCznC1H6WsLKzf",
  "key8": "34Wx7wMkWuyf5vZBv936BQzzawikWNzSmrKk5RsZ67h7S7dsdxt6aZBc4uFhae4kKXDszwQh3LJakuayXFsWKzhf",
  "key9": "2yrTub6aV6wCZkTu2fPST965K5odZViNRiADiwy9MsiYdUGVn45PafKgnyFzup3eaBsQEfHAz25SRGpjxKDTHhAy",
  "key10": "Ph1nHPfJWr4wZC95HL9u2zev1jgG5yyy23wuW3Rt6dWHayZc5MW3vj7t3x4Sfscf5AdNnrWaKazf31wTyAacWuP",
  "key11": "3kTPwh38q1VJPJJ1Mzd5eAXFB8ahJ6vHAhtwcXtLpUojiofAtdN7BqK1WW3U4N6trZJ8MTKwHaeVXWAH54qdmSsY",
  "key12": "3Udh4Kf29orwwABN3FQZXbqRird6a4xa1LAf7FnnAH9cN4yF1KCJKjttgbwwg63bB5eHEev7mjtc4yM7UoRtgxx",
  "key13": "2BxJFqiLH2aBAoGXpQae3LN9EWgekzzXwUGcUjioeHEXoHCy9v2AZCYa7iD76uPaBtfRnMJk9aaocQX5yRvZ5krm",
  "key14": "5EKTfZQaHnLXwq7UckrBoQ32wXknQEXxQx3RzGG7q7JyCKwNQKrCy2ZYqodtRQJzcfyX2via6xZtftYC8btxT3Ur",
  "key15": "vbu9f4rD1yuuKqWZcKBJQFtDwVPPEf56cDasEX4SQETCdFNzf5p823WfjUyg8BoAuEin6H9pYU773wLiP1pBZ3t",
  "key16": "GqdcmAbSfer3jWXzH166G5RC3i4qJZLGbefPrSZLcWvMU69zEAEE3vkeSP2ChvNPS9VaZRfxr8aKtAucYzsdqeR",
  "key17": "4Gjx9knGP2hPfTp8pZzaLFpVnSfUJreVt5RbKTxwmNrneLFQtYHiFyWmubuzDi3zoaR1Kuuh2cvvkBMkZyqvDXPF",
  "key18": "4D52G9ice3D7GcL38ikRHpDExchz4tv9Y7AiomigeQc7aiU5Dm7vaKDK32rHWmrkG2VK5SmzcFzNJcN1oeZxyrKQ",
  "key19": "3jpnho6VzYyap4YCVPYeWN1wtmQSnEbNGhHgHoXsVvjqPYLfiEg5JR93UBNW2rvhr1cgUnwkKTtB5c6SMJgfb45q",
  "key20": "3hXuoApkncxQ2ZSKUAouaHKH59UCw7PLQ4SQPDFzKT8iFsFdASHQJe25gHiLuEtfFPS3qK4mMVPt6Ae13sHwEEBb",
  "key21": "pxumfDQVPRFLvnz2teCVnoqMcw51RsY3f35WdsDSarfU5XCCHRkBRyYGjQBSH2ZN6HRTAAxzQxhzKN767oXJXgb",
  "key22": "5cE3hbmdYLHa9D2fVKr6uLHdaMNbQ25aHGNWTCA41LvsA2ZUeAP9rNdWbqvtPHN91qc9LkfN7Da5UECKfZxXq8Z6",
  "key23": "5yZ5YuDGg8bfW3PeKetpSCjoQFSTa5s6v2dtfp9u6bAwbw99iVHPcMPAXdMPaSoEiX4o6bhNNqDd8opH8QhXW1kZ",
  "key24": "3J7MH5ZV2uPL2p5SQhErZkgZuxb79f1F8uW9eNvgwbs1DMxFwU1oT6Mmiuzu9kSXpzhzNqD51dN5pPB3f4PMWJtA",
  "key25": "Gxwko2mibDTSkpVwHY3dC2qCnBTsR251hyojmYDr4ZMreA5h5aSPwf51xLnwFwL3kmtnPr61YC896CFdHj8poCw",
  "key26": "4HvNGNPSRUWV84egYhMAorPQgbsH6WK9rsXdkpGF4ryP9FWcLqCMcBm7s4MHV7sAvTbsokZFEhPbxVVAAvmAaSc3",
  "key27": "5EaLonAr7e16onF5oN3c33wZKv7A9xaW2z1FjRWpRAVitp4Z2pptK8AdkMZc2rD9w7CSqCqrJbTBVghrmJXWwHte",
  "key28": "4mtZyLfb89vbSidWHkTf1AiB7HDTf4bFsBH9ehmwVR9Ff4dKwpW4oAH5b92LTU551yXXLB88Dstb7g7P8DjAKQeP",
  "key29": "5RVunoXL3sWzCEzLE2psWce2ZLo3MCDYM62WkMreTRPLgjJyjXhGp94983TNiHhVUoMWMcFEMwDFoRLdU3TvLHgQ",
  "key30": "3miqBZHDBqQ4fnbb11CUbW3PxRd1SyLq1n23w7DwMy4P6Z8dB77gDb2k8R3CyGxEb8ELARqoMdoK9RvyPkws7dZ4",
  "key31": "2xJVw17fMYjcKvsrirMZfKrZ5vfUv9jUs2uheR6Lt5X2CPS6uRivyFnznymYd6Yv1QDBQwkPTR3ip2kuwkRui72K",
  "key32": "5uyZ8iq2wquiY4pY3AeVajbJFH7rmBTiXrD7G1GDRkCu6ybccaaE5g5itKSqbJfH3gtKxbqspGo227nCSB6B1kZH",
  "key33": "2U8cBnLWmYh6AdvLn4Cj94RKVjkC9XHaCDVxo3ERBh6a32jxMJtWwjfGzaXPk1QXAhCeUSZ7fGxut4v311EuE8UL",
  "key34": "283Zryic3LQxyDNhpXFq4P8cVHvE1kHRhfkfrSAGiTk6N9V8TaSvoTTw279of8zPmizxXbAJUjS4ToUPS9PsdDfL",
  "key35": "49Z72UsatdGJarZQRVn9sDmLM3Q5b1fgi4jcitHKesG7rRgi5Sqao3zCHdVLfqTqwKjc4EitW6acKSVdwbuRXvqH",
  "key36": "5Z5u2fsCfYGUwZ4BLjmyq8TzGw6snEHzZhDwotMPkhR4395phQWGPJ5wGnsCJS6QYvLBcAoGdPD9cvZsFeu9Uf6J",
  "key37": "3jUU5qXTWbmCJZt1iFRyD2EBidLMtwK84cUYHRFt6Dvic8mBLtBysxTVHMv65T4Db4XihmTYg8SPDC4jooY84KPA",
  "key38": "FysKwQ2WVBCofFV44foLFJKNH84W8wzmKv1ZPnLU28YFEUiACxgFevJCknJG1AMQwVpQpmFz9RiaH2Xnn68PBPq",
  "key39": "2gTBSoA9tXa1ALbVtgUJsPjrwZSy63W2MAtu4hNAxnUMmXRGb98G8Ch2fY3fRXZUSJKyQtxckcJy9dyYAY1pW66F",
  "key40": "56nPUmPXA5SH6L26Yy6jnqST9yF8gkLZo8fkJKMwVdBx3sfir4HyKknHTNtKQiwbd1UQuKSuXVkHLnr5eW5qGM91",
  "key41": "64P83ToR9PXdXYDT63FpcvWg5xEoT7rGxSMX29KAS8ezvWcDCYRjvimZAJFVVTyh8n4SAA27mTyoMz7EBbVVL3qK",
  "key42": "24k9V72avhNKSq67qdxNhhBb6poQVeoHTXC7DdPuNLSBN1GgkrTAkBDZgxU2AzBC8LZdixD34doKHKajbTgAs9t9"
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
