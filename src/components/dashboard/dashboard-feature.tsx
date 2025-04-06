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
    "5c5yqRYBf3AQEFqjW4iqyvnQYGdwmxFj2dDpjekf77k5xbHNgMnT7dwuoCdL6SanytR2LANQGwGYzngRiVWXB4jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnGJ962roXwZAFrnYq1iyr72xAd4zm3hVFJXtK5jqeRJgoTRUQZNK5WsMtcMc5k14cLkL7XBJrEd26CZBYg6xzw",
  "key1": "2DSKoKh6XUvjWH64daCTTD6aiHPr3H2Khk4jfb3cAQEfCAkWHT79i3SSk7F9TjiU7Gb9P913Ch49gLkq2GxH7iTh",
  "key2": "5sC3JpiTaAwXyZDjQicLeG4LaSv51ChMigcdfgb4GuynbTsSovTLHZcJcWFCXLYp5CXgY9AgRvMG3h3V7rSz9bqm",
  "key3": "5EoVKqryfi3RQpi6dsQWgdgCzk2VDPriJEAwat1jUj9TDToNhgXGZboCoABFx4FiutPqWyr1SAiBjypCqAQQT42b",
  "key4": "iaxBevDDDbZE3RrmCa9mS7p93ZU7aRyiPNsvAYyJw4kbVNPeW7vopxFnJFtxLLNxMMAfXcUVnv2UwpkDuWDH2MG",
  "key5": "3rjP6aNZKnKHKMjp5djvC6iiu1DSQTfJpePxJFmv3hqfHHigpt6wGEJSMCwEXwRGs8fSYQKzoYH7RbzssCVENckf",
  "key6": "911CNaijFkjQSPMkbXsWq6MwYd3USNCV8kJZTi5XpXACz8mNsnis2hoiFEei87kv6Ag2cArZbYkMrf1tD6t8phu",
  "key7": "2rc4aXZcnS5JZ26HkyR7mPWjPtjzWftBCp44VyvBnJa5tPY36tuVf5nv87oCv782AX2jPejjL24SLjFmRTRTWfDt",
  "key8": "4ye8LWW8jif5jjwDPiBLtq7JzhH5ZvgJFsFkqMNJt7NvdUvgh3vSfZQ496azveNDqPQmw9dnyBwWXPbef7w2yVh6",
  "key9": "qGAHaRba2tGaRNnbiSZhbfKQUaBJvtXTWGMiSJs4rHTMnFphKXi6wFDk8meSWyc6CVhkrGF3FXTUZYv8v9ddfHt",
  "key10": "3EdcxSxmTQutArUWjnPBYwypjBF2aqcsJ4vBwQAk24HBvSjcWmAFkNbQKb9rPNj818P2v7yuzEGdcUgvT4VoeQLj",
  "key11": "4WRtt7HRZs17Uw1ygiYSS3bTihH6PnW9NQATwneEryZ4LB6AP6kYhf5hKWfXRMC6cTUr4xEVt4MvH61LWoM8xNTV",
  "key12": "V4N94aBCceabNhTGhExaCa613c3vJPVJxfJEKew99fcSEyK7CsUYhcP3kfmSo4P7NAkQxYzbdaHJQBL5KeXp5d9",
  "key13": "3UyC9q3vAX38UPWyEfu89r2dAzpUQpF6u7RtaG3M5poCeGRxSy8V3Jx8WQGajhBnzAycowk3HKG4TWc6rYVxVG5L",
  "key14": "5DmWEfzb9pPSm71kmwR9R3rBHsQQNSfp9rbssaRuFSuV7QhVBsprsu4ftxMuEtQqSpuEe2kXbiwKS8J3sHgRVaEy",
  "key15": "5ZmeLmmyXpt9aWtED6mxY9TfEwidDaGPgaCq19igVKB4Q2BRDuYxngauvBH69gg4zEu4kwZQQCFA6v8g1LP5eoXv",
  "key16": "3vsHgedvjqivhWkt5jWmPPSNN2NMpq83Dgg1adfKw84zPC1KpBzTyDNbDMQWqzV5Dy2qqkNJ2frE9K56bQ4qQGBL",
  "key17": "382FzpqD3vt5uPDq8sYyARFTWj5WjTrKvJPtsdrpVwThxs5v5GEGSxVsVyfjBLJwqgC3k9qrYCRQBGKyLAE7hJjv",
  "key18": "62Hn7q1DCbvaZwaR6XH1RnWtVSgob8qhhbWKJU6TxH9nMFU3p8V5JMWSENazWmmPSPWwbwVB6Mww5Ewb3Unor8bp",
  "key19": "5n7r3VV5ESnC42zxerpzFNBoaRcHUi4puzgpNLujJHQbgGLrNFXfGsVtDD4QnJYTEKee87EfNQL5n3WdnUiE92d6",
  "key20": "2uj9ZvCMUEpA9HAWFm1nrmXm9iKtHxwhS6qgAkrE6ChHEe2iUAMiBN6sMHxBttUyirx6yqt2B9N9XaQJdUTvSxTh",
  "key21": "26szbLDC7nTAZt3Jndw2jpm5zhFJctVqFwSVnLQ2Z1RTZzbDprS5Ry6V2YwWNUiAuwMqo82YUfrqJDqxWXKS6H9N",
  "key22": "4f8YXrHkq5kNto1K5umppwJAC37Hq9BehdarEKJuLUk8m4Hws2BCugKzSjWDNVS8qmdaWJE9s6wCudm4GhxiByop",
  "key23": "5FL6C29zaW2RCm5YwruEa7skk1BqEhvVJYrNcyQUTTQjmHLV2yPKgU7DiGPeuxSbQKx8wx5JVW55zG49jCpjbtvp",
  "key24": "127xG2hRXVTRXVp2oVfZMxawwj66bGqje2stHbq2Enq4wXz6pMkdVt7qSEMAZJD38CH7b9B7xrimW1q6RYGn9F7U",
  "key25": "3nYaK192ja3c93mZF4y2JZWgNwpprYDiNCJs5FuT2gjthgDsWSXSoHUVWvsV4CAgimuAM5R3zxLpUMMjyh1Sg4qa",
  "key26": "4gZ4DTrfuvHvzNaXapiNKtnZkqE7YhohGZofhH7kTctpz4kD3VyVJdYJPS7n4iZjhajUyupqmZQEP7VQqSWsmswJ",
  "key27": "4Jr9VGuPwSbfgPPp9ANDqxfGXL2VvUqiDb3sGGN8jk1garr6kF33Bu4VjtzwpdhPVv3DAaxCZCsBMBT9atd6pUr2",
  "key28": "ZecYB9kownFtaEz6DBgYn1WUf2jUUSaCNNSXXoLr9AUSYW3L5jyeHSghkfUehYBVbjacTLiaxnv7RKif3wQAmy2",
  "key29": "2bbp7NvNtkrytvjpA4uqEFqVF44kQKuf9f6PfFsjtrj6RKwD6TnWYH6TradedicjDs1Lw8EfCczBVzkcHeqyfAoF",
  "key30": "5QBJX2tB19NiGjE9oLVzqMEHVjqH9eC86DBYd3n8xDS6ZkHJzZcjcz4qNhRZmcXBCu8EUm6WA9iwbWu6cVe6V4pN",
  "key31": "4ou4Dbrcv3caV5hwCDsKiTKVTG2kYLZbytZU7oWM7h7EjAWEQ71L3NaTG28vxgi1EhAkS9fat9gnSJj5HrhUCnRs",
  "key32": "4G7sC5AQnYAzd9KY8S2Twi5SobdZd3tznes1ipJR3W7D1xL82RWQGuHC9c88XeYhsRqDd1hJ8PDweMLoL6qofwrw",
  "key33": "31EQXtVDPdFpZPRrG1tYx1pt4v9sSw4YxiHWt7dw3uoHXqSHtWZvhRYmkBXumEFCc4UUg2YvpbV6RCzZCEt2j6e7",
  "key34": "4kxcDYkAHX3CNJP5V3cyyFo3a7EGzefgBdR2jJTgSPeT1j27EM4PakX1Rioi9eYPBd7xZFKNz9dqT1EKz7W4bRBc",
  "key35": "3w2f7RD2p6PuFDRxdhMvvrWa4br7V5XEZoFWoRQjMv77CjtFxQfJhEHN2K3Vxz8eJ6sdydR4TmFo8M6RsYeNrGfP",
  "key36": "2Zmh3paJ7px5U1DK8dupxmS6sFTFTRkvyXrxMXsnASx5biyHFGi67jzXbZwSVBAtznq4H3tH7LZqkXeT9JL2TsHR",
  "key37": "4Wo5eLv3MizPSu9WBL6QHEntoU4AZvHZxD8RfZeAdMHWM6hgxY3JJDKNtQ31dTjtiqhFJsnic8adu54J35gUwKhL",
  "key38": "3mcCj9eS3st5kYXrMfDwJu585NdkdvuWwdbkc94R78MLRu88A3xi7rDgaGTReLJJyBaa6ZXiHKy9tzGR44JDVYzp",
  "key39": "2GDpVDa2hyy6E3MRLZjvQCj4AXG2jaGpzseXrB54vro3VWnUdmEM8SUd2rVuvz8uFTSWKZwuxAjnMQdLW1Pi8AKf",
  "key40": "5QacdyoB386YCtsmnidZsYud8yn6qADd7wkhfAqKBLXoqCFE6dKM73pzSh4knNbfKA1owWP3BJ4qNpFeyW3LH24d",
  "key41": "4o3ZVxBWLJnPzDnUygkxmgxaVd7rZHCe2KRMZtEDkqksA2m7nWDZBPzms7RfzLejPS64ZAzLtq6wFAtceq3MDGa9",
  "key42": "2kDDDvGcVHMiCMhpXN7AaMtxtWB8xUnHFowqjDNTWKsUGHBZq6LqXuE8JiBeey5XHAX6or8aYZ5HvwfYqiadS25k",
  "key43": "3iMDaFLpTiRjy8afBxT2qTNJKAqfaSmCtDKXcaCsyRjB6Br6ZECTxhR6tRyNMH5179grmwhpuaaJcFovynuenH1a",
  "key44": "4HVoJHDHELTv6hS9pGp8P15wHDcntLCpsshuDDQFEfkKCcUvqPZVP9bkwKEn8hsw6xUGrJEB9W7166NpvMNb2qsJ",
  "key45": "tLxEaFjf4euZha2pJitv1sjS3ETmaE1YtXsK6f563WFRNUGHAjPVT6tJU3snr7i1nweKgKKzkDCFYu1tz5bgZCq",
  "key46": "3fSZDYz9Yw5atWxxDDyQWW1xnkqEi89hv46Mv4uwpfiWd5SCuidZnLvz2TJBqhA1YF7EWt5BwJriV4GPAKDCjkQL",
  "key47": "5otQWv4gy2ep9JDUYSuwZVCY595nRT7qbPdfbQtBPPwyjiPn2kpjpk68QmaBde6J1C3XeMwVRdxvSPCTGpZUZW19",
  "key48": "5FmVe7D66MW1HwQBwLJz2QWbm6ErsRqE5NbiwunXdY7eh1Q3N6sRF7tLK83KhMbyhWUWbFzmnxxEkK4CS7rtx9H4"
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
