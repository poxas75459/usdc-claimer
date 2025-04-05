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
    "2duep4WzrDSQvXGNoQXYuevGS8BseBMLnZF1nk4aDvaEkFn1Re7FoquLE6dEYesWw8zTuZaNgzmv9eYfU6kCQ2zG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nThNFy9dG8EMJpK5oe6SGN2pYLpKAgjZ6mBdgeAu3XHZEvpp4cTj8DejvBZxC1r9FbzdhGHcuYRwpibc81xVN95",
  "key1": "2KWV4eWNSZLKWPQvXUg4pKwPzD3MgNE75CoeZy4mLkysLQLMA2JchuYbokNWnYeiPQ8Hmov5hDqfF7b1vmed13NE",
  "key2": "b6yceDZUgTECQniH5N7SaxxVJk7j3ZncsKSdMMe3hJerW97EyW7nnrLcStBtSM6TUhrVe3ccG4PWM6VwihXJpTB",
  "key3": "2R6J6vXmHrWpPG7vZJAef5T5YPMhPo8ycFhsu31m7uLH2g3zQZxYASuwgTwRozPHaaR4EHoZ6bSo9uBzhXMmzZW5",
  "key4": "2Emhiy46KGpr1By5LkaveLCLkJ1HojJSsPvNetByomVJbwZ8TEHSUUvz4yt2WA2gJ1VunQvJbEQg2xEBq5ooDHXq",
  "key5": "aKsE5LWUtKAfdbqwSvs1zWVVN3KrqKqZTzqBg3tXo5t6YVygmbrAVmkswX7F7JsM8TW2HzmLEU9xw819C1DHfwj",
  "key6": "5YNrczDfcoXxmfdo9XQdF7RpoLigUUVhc7jX1ohssEWvqzHoGVDcVsQRVtGMoSCmevgKqLe5oV7kDNYV9ykaJT4N",
  "key7": "4wp8ecwBYZaw4j28pWgyc5dB1T4RrKoq2pq35FTaQxgbiLWiJkBre6g9JGjDntBF2gvB5R1994iWrvtqesnw9sFX",
  "key8": "Nb3AmkDJJuGNjM1kje9sx3P81ZN5qcuVvzhcLUroaP16DJEgMtSLUm6SWbm1N6WP78pLcGqjKcdKsvcAYp1R1RK",
  "key9": "2cyfXhbLwaU1ZuxkPZe4izMfWLaNxMEH9rYRKhHQ7tFB9EdkMmMFiazzaBpVKw8tRGUyLxv3reT46LN4VYmXiubR",
  "key10": "bZGHnU6FfHXgztP8UbkixAtsbxS5oS2uHaGVkrZq4LMUMpXHxBi1rpgYxPXcE1z89m53s7QhwaMs8N3WuU6z74R",
  "key11": "2W4cMPni2ZtJWG2uJghaz3PYJ2wPtq19gat7ZzVx8tHEb1vJb5dJUHevscomg8YXqSUuQRJiUFBc9dp9MXaFwRkn",
  "key12": "2aZgvDLseYNqWPeeNVWbVG4uLh1KpyYeLWpiLDeL9KcBJy5CLVntYwafec6yrjNq4A3ns7ix4qHVz1Sg1WN11qZq",
  "key13": "45MVKXZ5rDgQmPVmHux7hNa39KDnUfD1mZ48k2mL4q9eKZjyBhtxTmETaWfyqP5dd8UT8Mo1WKGytMMeSMjAd3BY",
  "key14": "2nMrgXXuw9iwFdXpPizWGuWxdhBhc8CxybksJR48JLBpbWEydL1mn4gdkdhgpmgg6CwirvN6y86xKvf8KZ2pNmFZ",
  "key15": "64D5i4dNwScmrcQbmAUAFLz8d2wK9S8b2T6iGdkzmVWSRrSy5fyCK4QfqZNTnwzbQTGnpBp7xvQD6QxERRUhuPLZ",
  "key16": "5wt2McghCXeN7T4cE6NRwGkUC8zAqX8oe3Dq9TsHWKmEzjrpSw2EtrXziiuGXR7QYpsXx5eorftUA5ChjbuPeYSH",
  "key17": "eumAh4Y1iLyFmD8uRaLC8NRb4htRPfDYxNu4XH7pFn8XrbyAn3ztVi7NEp99M4WFjQbWbHWvmSTPsWt3GpPoeND",
  "key18": "CekYHAF3hwPwEdT4SwraUFqj25xyDrf6bGJW3f1ipVxoT2hZhxdiH22EsPKMSn8erwT91VWfRKtmwXEayNxm4ai",
  "key19": "37i6UtmRWBtimbWizxRZ7gEVxxyW2HtQ5uyKZZ9YvYrTStjgr8Xh7yrRVuNT4sSoatxmPeRDDfpsUuPjGZnRgcvy",
  "key20": "4XBPX16JjBKstkYnZ8tSNMx5nHaJLG51NHFQ4mPEMjj6NwxBLCrzNsHpNSwixDfSzWkBy4FgRnugCV9HUBHM4sjo",
  "key21": "59bBKgDnJGimQCTcComSr9eWXoqkzQhnN7X44iu1ixpTHrNNgmCmcp6UZCZDF26Wu4fngfTrvuLHotUKKokuX6xo",
  "key22": "5jYW21MyLxQSUFJR1BwfsjdNcrCDaB9oiCVrjcUvziQFBuMNYGkpv3xFpZ7Ukt8P2C2e3wRg3c1pVJYP3FdFPT8v",
  "key23": "4RzKMimNsMpaW7ydZpuNN3QcHwDj5uD7mkcRGXcraLrDbses6ueCtdVBRQx7oPqVf1zpwzawYNXzQte3PhnJYmch",
  "key24": "4L3qwFTRwKzQZpG4K13d8cB7giPC5Mj7Dt8irQBW6e9qLqEELZMNj7YPnS1eH1Dcx8NFX5tJt487xh1iKetEboKh",
  "key25": "2Q6nnzimnvUFJW23kJoNmPpyPrECKMmhY7SJBDRZtG7C5Ykz9AmpeGWuLs4J8NquFU3JWksAEDPkZJu8Vh2MWtqQ",
  "key26": "fuvBE4G4KkpPkcsJVgZW3DPuk6HMEjwkMZXV8YyGp8RWXhU9MoGq4ZBbEKoVWx94rajvSnQFk5UBjoWMmTCXBEz",
  "key27": "n6hLD8adF56uK2vUGPPZhGTKLzeHBWW54soEgHv9PkPDBM5PzXgPUNYkxMU263YQqqygU3AmUe15a3uhdj7GP87",
  "key28": "3T5MntMpgxiRJdp8KGSnZThj9P6EqLdvEKkWAjX7SzGGWXkszE8D1o7kpEGjrbZYxuf2N8bTdtZZzM1jzTCEkPMG",
  "key29": "4LT3mZ9jeSSxprWsoeM2usMJh2CvEcgaB7yX21UxUhpaEGm5q8a138BfB866NDg2QVX5QFv5VYhYAz67nny1YbRN",
  "key30": "3uDZMnzhYeDHP68EHCrikFP8venYo5oqEVXmBt9B3sA3SfSXmrWo6RFyzdgRR3N56tHFcySpCy21Hzgu8oXnkui7",
  "key31": "4nSHwamrCdcm7CDtP7VMxDVSxnDDnQNyT7Rcz7LZSyuUFWrFQJAQZGLsue9giscCTrPnZCD4FaXBHZcjdXa9Zv8o",
  "key32": "2NBpsfpUwPW56fkhVkcdWreo2cX7FQthia6q85mroUuZP3ArvzrHKksAxAQWL8dkZnSd1zpisWmRzajC5ERvmejP",
  "key33": "5jABGsekMG4g3NRoyNtM8rxYGpFyqpnZy55Jj5S79LgYjXitCgR4U4DjaSy6iw2ZRVLYadLiYRGfjS7JMs5svcDs",
  "key34": "28uBWFsSiS5ZC7DEd5wDK488CYUkQWDuTqpEzvn2ve2xG96epPwocmMmG7MCPhGh4W5CF8Za7XxusY2AWMVJVcia",
  "key35": "2QbKGynzh1Vnn1S22cYd39SN4hhadbJXaLnL1rwjgEyvwqTRYXAzUatBX6zKPY8zsx64DryuKYJLmo8CjduHvNS2"
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
