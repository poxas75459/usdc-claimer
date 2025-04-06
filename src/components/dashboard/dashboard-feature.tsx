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
    "4BsoKjrMyeozVRwG7q54rsaW82StNLZqSc2j67xUrezSjopRuTEVYfPLSkwXz9d5T1nQQcCuNdNqHYrGNGuEqH7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M2aDcNaTSazdixQzAeop6kHkvpVFrLZP6xqUnh7nUA512qFF58ndVYUZUBC3kgwmgHCtSKtgZURKzh2fefQwgbQ",
  "key1": "48wADEnY6W4QW6efcG1cBcvJcWgJgKi9YkZX43WynR1QnwQB3trr9zsG1Y5PNxrw63PQtv3rFzQbhoFqfQAjZhmJ",
  "key2": "s1tHKuBMPWgLybFL5mFjc527xmskbwaHnB4gPcm7YPXE34mqsgE6X5Q3bKgQpk7BFrgx6GZDhKzMa7bBLH4SQZx",
  "key3": "4qETGTjVy2tAD1fkSGpHsV4N1wVD7AKf4SS7QYqCn68H3zUuAkDpZcpsArL92YbThP16ivHTKHVS5sPBCuMp1oZY",
  "key4": "5FmtCCoK28MtJURJC49KfE3WsxNai2qhqXTDTWmj1LKq9dpkRt2L9B9RZv2EWkLNKFcYesaQYPqTmGc9SkW4DhLq",
  "key5": "5jmz4EERSstvH3q6Mirr52YP2KG7GL8gtSfZmMd5ySJhRxhypEYr47R64iFvviaKHzA3hSFhego7oGHFTQfU8pCp",
  "key6": "4TwNngFkA77C79URcWDwzWfj5YjSWoSinMk37q8DpzrkrccrWgZkqnfyY6mCSEdm83rBe3HjvQuuezJ8JpQxRoBU",
  "key7": "3YECxQvMNCAxWmV8QbaLjBMWiDRfa2SKqGH4A2P8qur5vn8GDkzqowuMjsUcR96ZMwNQvqGUT1ijz17NP3NkRuzR",
  "key8": "5B74U99u6F3ipsJsjU2XLpP9qg3Fu8TaBxAxvXTgQsbtbAENzC5rX3QQRKYYk6D2Nfe1wLtiCR3pkX5qHafa314e",
  "key9": "5K6ho3YrVVDVZiBz78cUAxdT5M4KV4ZUisoygAmziDXDuWuTNS8SPJo1AfagM7wbEP8aXqLVZx2ankVAP3GnTop8",
  "key10": "3GBpxdDNmA8ZdPwAgAKA62AAH5BqGF8GhTkYroZ7WgB3oYUb1TU1x7Nhuokaii1WXVAY4dqFgHjhJ1LEzyTHwjyG",
  "key11": "3MbKaCeTeiTa5tZ1wqNNzQhUKvRhfq5MUVoAmPesXYk28dqLeJwVkuLpryK2zucNr5Xsb5HdtyWt8ghskSP27iai",
  "key12": "aPvvaRaZqKas4Yd2HZrHjEsjEjC4nAenZryZbZs7g7GkpDQbQTq66Trits4QNBkgbwPzRE3zmQ79rbMfwqth8oR",
  "key13": "5CJRAo9BSoufkjuj3Cc25MvTd3PDQq5QRxStBooAbq4xmWx48egmyLGCFdfXkrAuht2xEALRnXHfsXbqLBpgVyXJ",
  "key14": "3r6yB5W4oMxdXCEPW63orZTr1ASYnBpneiHCUJGDRDvX4mmJXrs9MiqvKqd78kKnnHskcqryhjHkuwD9KPqtEkPD",
  "key15": "Zwuq7sSdzKdoCGfGsf4rPpPX5zni1qb7GckZ5h867JVt3us9qQ9izBjUFRky321cXBBRM4xLZpWDkUNewtaLAnP",
  "key16": "53iiWvrxUAAQk7gup6SEjxtJjkPRWUzsf4mMfKKkWChN8eR86MJDBz83WKcSkH1FG4DMF4544r2RGGC2LuZTokyU",
  "key17": "zENkXAq9cmokPcUYhv85aeLEDMWbcPkdMEL4QjyfpknPGUJKgMJYJVRHRLqHrGyYA6LG8KgcWdootSYobq1VU94",
  "key18": "5CV4q2pMvojNBNwgoEwEfJgATr4uc2TeHLQHn1F5eJSXNq8v2XqjHnzQiagWJFDs5x5Uvd7LDARmtZf7XPysHK53",
  "key19": "AauMvgRTNxL8U7oPvyEo1hWQXd4JqHiFPVBrHPYM66iVo59LgLQDQBf65KGXgiQdgfF3TLLPALpnbid982L9DFM",
  "key20": "2H8y1vD2rzjYvt7iR3KnVmJ7RtSeAn1KBPNSZ6db2cR9eUjHmCgFnqJKqU97KRTAeZD6MU6e79SXK15Wqeoe3XRF",
  "key21": "phtP6f89SY6Mj6kvfZhcfUUZ9SjcBXykytPbUhp2qsZJF4KNKGvk6Av3Uu8qmnqTGK1Bmah56fkmgteV4w7SJad",
  "key22": "4w3AtxP6gDHKBkHawKbjWMdaxAVXA2RciRpivpQHaDkRbuv7U6A6U3fHiyL2hnBMTnfehxpZic4Db7EZYNcyB6XU",
  "key23": "5YuKfWyhD2EWDjwFNodZ6fB2ia9htWZGX4aDPjZmAVvduJwBHKhDocvqoFy8ty31tBL6GHqF5EW9CKa9b1HRNjkR",
  "key24": "5L3UfFrH4W8vSQDjSXuUYMCWvCPewci13D4zjsd29kNN3YsecUXJLEmM5WQJZTmdsCTXsYK8GtA79PCUTtfT7C9M",
  "key25": "3F922NXVDTRapqsviQixtJkqqaqZbeAbRetuEkpPhpCJWg48za6sNyyDM8AZZGA6DnxVbH9djX4cG4QdFYc9MPxQ",
  "key26": "3hU9QDVsaPKa1CaEegY3BBFZKwLmkmLdLH1mTt1D1bVsTDjUWT5ZU1cczVBax32rRvYJATPC591M5x3m7g9RZs8W",
  "key27": "41Y3SVHUA5htkbmiFJySfep2hoXwcLSH2azavueQuzYncAP6t1w8rgPy1AqHf3mxJumULRQJCAAKfAorZt98yWEd",
  "key28": "xWssHBS4YCgSmPqGLffFde256GHKNBvVAGtMKkCxfURN4Cj7hUo8gBnvCb34NXZbZ8GoizhFdswf4FYYtYXupFc",
  "key29": "3obZeaaj12XfXHWrwerBvXFUT1GMiJGcTbKgjV5Wcn247g3P5BpaZAWwAmcnppA9v6MrdkvRrDsD9p8wGGkvyLX2",
  "key30": "4cayso5syPLyhHBZdBGULkLprfR35SBLCmkLfM5kn1z8Y1sUPgQ12TVQscsebRh1JyiYit64kXfo8ZSaaurQWCwb",
  "key31": "29UJMEFcHUFCyWuHpBm4n2iXSbqapn2gtzTGac4WPpbtBQhdrSdtVVLBw5cKueHYBm3FWzrpeLSzrXDY4BV439rg",
  "key32": "2TNsM4YUmFg2PnpfcBNQuKYNjekyiPVxW8hvyfyw6CXnYH55jmKgz64w1C12R6c11xvepYqijcTV6dkTNE4XDk6z"
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
