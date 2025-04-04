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
    "XCfkViPQ9kX3Q8ivXs2yEkEruk54iYAeWDFsZma9nS8W3ynR4zFXQbeLgkJKHeZq2eyYJ44MR6gzEQhbUc3AVra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgoYM7cRAASmG6UV1irrG1YkShY3nZGW5YeD6iCZ3ypLtBK6Qur72EDLEADRCm7x5PwR7sdBMai3UZCBQmog9gP",
  "key1": "38GKHZ9d7kzEdTkMcbJpz6N3sTyXe4X4CFwRD8G3gx23c5oMB4M1bb4y5st3NzCWb6QBF2VvEtfUU4RUpQRoVdmr",
  "key2": "Fecn6whHruihTRXbXMARd2VvrPoucLQrBiTC6E32wuv6YzzsdBvDxdhGgLJsgsKXCMQQE9kjosfvKk9pL9FBRmF",
  "key3": "MYKCtCScbk28YwsUGbFBPWgxN9wYPfYxXBoRkYKcp6XHWCN5nFwmyhSakTx5yk2oF9RuriYAkQBKrZkUDAS6YeF",
  "key4": "41j87rKPx5ZYcyy6Ytx6WNG6ChC14L8B7h2MfhBPpx6JDoELsYYSXabHBZk3CFtejzjmZYL4AzWmr4USeGjcgGEw",
  "key5": "2Sbf5Vot733qQR5kb1Cr2HyC5xhLezg88thKEayGkyaEHbvo7MqUtv23kcX25wLnhWb2L5k3M7V7kBmdTuimwSh7",
  "key6": "FmVwz6XoHpJsPWopBKBuVetiQtznFaiAbrfjunbu8QniFA7LKMvsRrUxjkMK7FnDZ3AtKmcacgwupZvgPfYHAeh",
  "key7": "4eko3DGf4CK3shzJYmgPJUhZTygpWGYyZ3KghtUYCoks2iXHBhwGiXWXYUPr542TV25imwys4Z4HhCXaZino9a5d",
  "key8": "gz9YhVHQoL36HBRKmfrFmvS7AR3b2m76asBtwC4LB9L3p4SSLBaXymQL4uTfbZQAu2fxK86CR2KM1qxhQYqhKnn",
  "key9": "5wdvUxeMoC26YyEWAo3emHTKXMCaSGcEtsAh2u1DZtg4a7g4z7EzTNxPzSSny5SJKLrQtZctvW1qKmsFVEPqmZyy",
  "key10": "5jvUw2fDEg6zQYcbJJd6opiQhNb4LaxSKNEoNiVvRXemnp3L9JMW76iA6pFqJ6dtoorhBedTdRcSKrpvEjsBtG1D",
  "key11": "xjcmX6q4BxryHnoADnXX7UseJhz6xiU2HsKts5eHEgpaPWAedNdZLVeWPqNL2bfCZTZ3FG6BKR8EuZxC4gRSqQQ",
  "key12": "39pBC7yT1KkzBhQwWAAoR5n5NT7WQJXU25A296GxCwezvGzQ3rhqxPNLoorKgBBkJiXvsekgFD1F15fGENVdBWk7",
  "key13": "2XL11gUFMVDeqpG99whyyrhbJD3PZsGUpGBXM8xYGtdowm6gKTjn9Ni8m5jEQkQDHSburKhX43rND2hMtnYPit25",
  "key14": "NHm3JHuxB5FBLbjynVgXe86VziELtaTyJZmxN6qM4aPE26AoS83F9qQ7nFKufb9sa63jrKpMoRS4yBHakSXoHJ7",
  "key15": "3VGmW4QDaACjhgRnY1Zn6KS5SV7EKNNge9GmjGc9YvAGmPTNLjqNM7Hn8knPC6KkRcU8akWTJoqDB679nqk4Y2cp",
  "key16": "36RujXGpwHu4ioCbobbcHKcfkVJQA4a9ZckkYVMgzfHJG6XCeKgdHCfURYDSVPmnmLjWuPex12qAPV7cVdHEguZC",
  "key17": "2LfXt1joQWJcf3PmPw5yb9PGpWWMcdmZVANbxdbHXgeHh82Bv9atw1kZv8i1LuPQPUxUu6ZyskmdYkTanoAEP8zY",
  "key18": "3CZmoNeixm8Es2E3u6nX9EqgELyThq4eC8sErqrfAj1voxSrVFf3DzRWt7MZGFyoKe2dMc6YKCcdiHWomQYNGnC",
  "key19": "5qM3bwsREwNcuPhd9DaQk5itJKVYYxWKSmGdFrQxvfMoE2CeB9xZzLtvJvkEpX4ZNmkLrHqxbRB2muPJLkSRBzdo",
  "key20": "4aM66UXPFDmTomzFMvH7YrBdiLUSUXPkNXDTLnKmtkJnNZeWKRV6A6pL5dW7Q3zVP81M3gGF1vHKTVv3YdHVedtt",
  "key21": "369RUnULzpCUQ7PhQ4zCH5XBNy4h7ogJrPbqCRtDp5JcUPq4mahtaZ2okL6H6dTjER2KL3GNnb9cmH5fsck8vMgE",
  "key22": "5yj3by96KGamRyrotpVWGmRrwx2tuHwxyucPRNdrBzNzWmPd5jNDoCtqceZk382F26FoWPW4K7se1ZdxTjPQtRaM",
  "key23": "4RHG4wRgEHzvJfQyRu1VQMjs26BjS9754t3i8JazWXUHsXEGWoUBomyxndG16xuF1h2cYhZbgJAZB5dKP5f7RrZa",
  "key24": "wzxPQQXeXVUEjtwQm3VWhsqMjRGjQXXrL31jq75yAssZVYamtCWpSpKeCQfeJUQbNT6mD3gdLKbfZYkMbGJRg9a",
  "key25": "3RDPR3PS4dZVu1KwMibCoKbuymXHeiN2WXMGWCFqboxqw3hJfWA7xZEzA2Tf7D5prU6VvTXyWcPv7eLkHW23vA2Y",
  "key26": "31HpAGPrURGYmtVgULyeLaAf92BmFX6YcopNYoYts4GraCa3utdLryZptsKsuqjLiP4MgvFbgc6Wm1mFFLdE6JYG",
  "key27": "5srtBqFcwNp6xpAj791SJXbLorH8UFbwbzfCaNv3Tg2cDF83wYDC6QeQxut6yV2xVdYUffEpmRovwQUeiL5qkC6V",
  "key28": "333H8PVLQmcf6SZg6Tn3kJn1ieHJoqsEHJL5cWTqxL1p3yHP5dYzcBsyykEHhaDMnF8qeY5cfvpHnUfRA33skHDx",
  "key29": "9DLRKsZuP35hqemdYqEbSrNy3byiXMXyZmwoHdRspwjLkTovusGiijBUKngv3PPP8uvCNdKWf3VjgNm3dpA6gkf",
  "key30": "3WFuGtWuGawLR7S3hWyswQNV2dtLBvwMVrpfYBnPkWAcb6LM32Fp7WuHzC7kj6bGm3Tu5oAByKrJPPx8dNXBpvsx",
  "key31": "3WnD6uTUffwRFgGDUkxU4Lg3v367dG1cNEbC6ZUvZuNPZYCdSYVzFQBxaEe3ysR4S7pBLA3nHjgP39m3xH658mHU",
  "key32": "29sKigK9DgFCSRRYMwJNHrZFrcSeBvhYb3CtU1DkTbpL2aZpKeqMYKaqC4FS4KkNhCecmXsud2g3VqcJAZAmLRGo",
  "key33": "3mHPjvGKnoazWQEu6qknxWgrXnMGy9PDnwp3RvbZXMwZHHxh26sLi6LLT6jsuwj2iqEcyaP7KtR2RsFj3GBJpY2z",
  "key34": "uGg7mxs1jYbQuXJvpJaZDZsws2uFYF3QSjW3UmQWX82iR2skvxHoxdbxsKM3pwd7RsLZ7QCEvNQsg4LSMTpHRsa"
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
