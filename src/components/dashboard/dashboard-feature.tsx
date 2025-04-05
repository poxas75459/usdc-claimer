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
    "2AhUUY6EgB6it7yekYQMbhKJYKCiMBmHScLtixXge9JkJ6eReAvyjXz8k3kqobs9oiZdgU8u7hgpeEqoCneeaAAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZ8it4omzSENvLa7ENFLh78tZzBCqf5M5XiGVfruyDvEdPE9F3gsVPh8zK1UXBoWQ1NutdeemkGzcs865kAHqpJ",
  "key1": "5kYgEjzMNZFemAKK73uTGyRm7BPLFvfcs7q8FUgDXiDXEWomKcjep1g15bThVaGDH7pcaTRVRUDRF7NRZQs2XmW4",
  "key2": "49W5praWafUnfjjcexv7zdrLGeYCoTPzMdMgY1YdVTAg7BMRDgbJxF1MN9vzuTicqgCW7YwEatBbFAxRx6hLzGk5",
  "key3": "48BDwSDBDrCCthtxXPmYXwJUGcDLuo2p4vVcZ5ydcKGJVa9x7p2itngqdfcQ5cTbxiUS8jy9aA6UZG4gryR6e9in",
  "key4": "2sahi1yx1CN3bQkAUVAhTVWG4a8qRbhfg3afTfYdwXX9DfvYymcK3nCH1YfRHHVzZnChf1W9mg2BivdXbfNX1R28",
  "key5": "5SEHvDB8TedQbnKJNZDBEzyBxHicTeJ9cYrkus7HM5WGLGjLxHB9qA4T8GcYtVtWtcuinQtuNmuMgD2TLq2qPBdT",
  "key6": "2rAa9QPXYJgAWqHKcZNdFQ9m1s6XLStdDRGEvMSjCFC4LrAwT4nd6VmmqdTqPUAkLFL4m1WEfrjx5EnCfMwvhzw6",
  "key7": "XEYnf3SvuuBFFKuGRfee6Psg1xWktjbMGZ158jA4D3JsVr4cjjbiydBET33az56GnnWBMVzdaJKsftbRqb9Moii",
  "key8": "2hvd9D2dPsbvhGZHeQ6KWNyxveTJ2TQwbfgZT5QD71WSTLmXNFgSda1uRbH1WJYq42AmkYy3wGmp4RUwUQWD8NqA",
  "key9": "Yfn8tkgomdnTvSZz7vQNMP1ifNQsPyv4fGpmZqLwzzbcFYGdPx48Stoi6zEKzgqePmjCU8z5PLHarYbGqUfbVXr",
  "key10": "2qiRkf9TtPbSvKh2DoX5pwUTxtsCxeN3Z8pnJoyv65AgaXzyCnh8Y9Fy5zM9XqhaKGWYaKq6ct4kxEhugRnL1nh",
  "key11": "3knv7h3gCb1ZEZhskwsm99ozndhNLGW2QioYN3f8u5kbmSSgx6Xi9gWUk212RFJ44QiK8xsBZXCTuzrPWWVYjtBE",
  "key12": "4wNmdEJm4W4XLegrH3gvMvWrLvtegoN2eLsVdYm1kZmyksHjSAjCGVkYexWTmk8Nynd2xmyGbLSJkifj1DhEhQTb",
  "key13": "2keRw4qAgUHQBVsNszxHpzJc8cdef5Acfb1fQnxUNVGqDVU2464tGwRcPMpSJdpLPQqfEnVsVjRYg1Ch4RfyrXYQ",
  "key14": "2S3Y9mKRFGqAFsKTeZEaqnctqe6xUrg8Ae6ueVs9eeiiLsJznp6iEaEuUZT5HKutUPNKHRVBgVtF1fvc7bKXNHQo",
  "key15": "iwvs2TkeWBVGjn5veNRmvgHf3Xz2XLqzsdgv9rS71nVroN9hoZHL4u2k7Z6r4UF3VQSox4YPmrLWfqRnfyk43BK",
  "key16": "4SwN1kPFhcPXXfQNHZQF5LjKK63PxB63Fy4SEsSFt1Hjk25WKQpy3Vx1r6Rw53AgfEGooRQeqwwh8kfuYNcFCwaa",
  "key17": "65HBjFFhYxoVYVmqSMhanHNjmnZhzoxiHiXK4eyJGFkPihit4cJqoQ9N25fBM4xeUcfyEmj6zYb4odBD8yEpn9k8",
  "key18": "2khXw5N5PTz3dSd87HGsXhKKoVt7HBduBCwM8NCxcMrPaqVNVudwv4aWfz2EW47gxmWVz3agWvFNSwoPVvimJBEW",
  "key19": "2gqbYGxpFa5UkHTSjtjctk2pCF6tGUpFtYUbZWcbNJm9vYEUGu46CqJr9Layz9nBBP85UT9vJ3tgQQhbLkQz1MHs",
  "key20": "3WNHeoMJ1atgknf83HRTTofLGCH7JtW5m4676BynQrqnB4WtVevMdfdqCuiz6c9RJDFLrR4NRRU1mafzwTGv3v3D",
  "key21": "3zW25v4Z6cG29PhCJ8LhvRxgiU8XTAgjqjhGsJFNMkY9cFbTDYHfbcuhJio4kYkfnrYCkVsGqCJ1RRtY52p48cj3",
  "key22": "544bHNzTzaHwH39GYBtjVoNtuBeHz6WmzcYckJk5FV9y2fSsQYsbMDUmj4yVEh6mfMUbFrgYE37H5NE6ttdmSGCb",
  "key23": "2GMjwE7BczTM4dXJVPFu7QbvBYubetVg8yy4EAGJnch7U1XVzxq5uE5Lixmms1rF4qzFhs2nDiE6HUkT2WYEo8nE",
  "key24": "46nhTLF9ETEPwhsYdbEnHHXqAr7SPWXEdQztXcxuzUzyLyFPwMcBvaThAaYHSHHawFY3sHh3nBb8QtfwiBA15J8E",
  "key25": "3ZdJMsoNW35U4gCARXR5mGTExSwZNm9VqZR2wPB9k5p4xDRhnZBxd3pkd5vktinSzbh4CJkSrtqYcX29Hex8qBrh",
  "key26": "3xpPb9AFXVumo8A8zD9iKzGxFsqck3VVBftnbvAUDNAsjSf38kfyn5CFewgVZjtdY1wCmyhs9SAVhBkPeC4gj47U",
  "key27": "DmoyBZfn8JUYe5ago9i2zZ1LFMxr3B9ayRMJGWzUCze9YfgaiJt7BFsej5JZcrJs7fH9mvMD8RWngMiEfSLAUdj",
  "key28": "4ZiEnYMGsDeSv9MMaajRTmsetX1xSZDX1F2gjs5AgQkc6qiAzDLvVDSJsJrhZsKQR7ZrDtSJoFxmK9bNaZvjidwj",
  "key29": "4XgJ3sEqhYZTj9ek6BEe9wF2b6q56sCKpgnHw4mBVL7EMJt3YAWTWSkJ9VWGj8Kd1tzybHh6z48pEXkd2QzA7jzg",
  "key30": "5ygFkuz8V7yD5cBDdGhbmfkGErzW1jHnq237aFPaHdRYb5h3KkJ7ZZ6ZJKrREAUmRGsyz37nGo1y9zPWeJ9cP9Dr",
  "key31": "3WNHsx7PqLsdmkjZDFSS3UJmpTHvhayXQ7h9YYx73CDAr6LeoUj8VgEm16wP7Xj9pwAi7eKFhd4zYz5inHsUeN9A",
  "key32": "4t8q2MkaLRBv1Eu5Wo8UxDoz48fF11fUxhh81z4ZKm5KX2SqZu98MUNoLA5fuBYUe39HVDTcP28v1dVU7N235tLe",
  "key33": "4svonxWpZtevUjm8mSqsS4QditvGB6bjqdpvLS4LPpDwQCwX8kNsHvZHq5wXzsgc7EFe1B6qvH7ypvf8qXtAf8Sx",
  "key34": "4SN9spHUvwDwm72tmtoyMMpQZXVtx2S5Dw5mPCw8rj3m1SwW1a1npkZZnv6amjrQZ4LgAe6BdXhGdmreme4jWufk",
  "key35": "5vpoJNdynk8v3UDXJqH82mNPitaso6hPmeTZr2F3woxo9NfXrCB8RAsLEyEfQQkAwer7h1PC4S56T92skBptxsTe"
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
