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
    "2EwvQ2cVUT4PcXCvMjzEZd1zvnzagd5ZUA7DUHtop8JEwcmJUji8YpEXTWbWTaAGgvzFU7bNV7wjkERne6pA7PQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpSY1yz9kp3KytQ4wtb8Nk5NMHAhJWhRzqcJjs8WMqC41iC4gvoY3GBCkLMnuqBSBjy7Bd596h9PzBWX8xskDvG",
  "key1": "4434M3ozncPGRHPsR3YVM2vJepaNspFBDijVBxsNqKhRcCkyvwtdsAEnck21HRqUyQZFYTKiNJUwyAyFR88NE88e",
  "key2": "4g2sTG6k7AYNhbwqtQ1xTLEMHMPpie1f77N4AoC4aPSbVapvLHaUBZ5rjYG9G5d2rpjCmvUMeamm6bkfYRogyZWi",
  "key3": "4RW1AqVRTD6EPi5iBNFNbztt3UotjzuNrHZx4WYxjURS459jEMqGcRJj9L32cwgLGBdWAP8tVYjPVdpQrDLywDnc",
  "key4": "3f8PgK1By1HR9uedp7cpdMoGGN3kmMqJEQCernYDwbDKGywgZJMeZLbiNM9bD1hBqR5LpNyqkUTXmgFKruFzSWm2",
  "key5": "5RvXLCHmCtWWiTbgDeKn41nmkn3vpZ6YbvVvr8FnWggyaRpXQ1tPs4na3hKuoWMmJtYBxiAmDYq3S4gg6brS2AKf",
  "key6": "4jGydJsQumobnRZd894HSG9ftXYU1F3gty5i4ygwwt2P8DA4fKUZ1XjsCfwU8nz34TspR76UbKNHgfRaRrKYXucG",
  "key7": "2qJK1RAaeqAB7tyZc61ZopxwNKTzA8jeaycuDDDQKxec2wGb4RycWBD81ZtUC13PaMQ1FE3GqfANTw5seuyn3q3L",
  "key8": "4QhECGQaPTbWoApV8vBwyzagZJ6bj99M756SZDKQQev1ucUR1Skg3EY5joXPt7kR6H4hb8TXmNEZfPqPuuRB2Sin",
  "key9": "5SjsiitWK4rzttntP6xVfzYWqT8BQHg3tXZfdjh4is7oFaR7MgzbYJTNCYQCsifg4pb95i1Lu2XnSp8LyEMo9sv8",
  "key10": "5vFjJUpRizBZQHpS3wpray3s36yf5CDRcKhEVS3nxRHkJDHZ7yhNPdmUL6eafkCaYgR97rduc6WDEzZDEGrvfjV4",
  "key11": "55nN41rM5m44BTmg9rnfvaXzoX1cTa1LBBz31uPUf14BR4DCTFtJX7y8oHfMzRPhjMPbk5pSoeFW7k5zM77pUx7v",
  "key12": "31GWq6gshsEnAfkvjVULajvq41tb5icJLiGzrPuoqkDMTQ3TJGTStggwWovbAdoyg3RPEL5AAxAhhgpZjqno8BCC",
  "key13": "2nqTGvksNTw8PvF5AUaUomKJHp1A8qHN7HvAvpcej6xt5Pq5L4Mv4S3HhYjDH5p2pmE8uujSitXVio7TJtucpMoF",
  "key14": "2hFveRku9hQ925rcrPSc7WU5R43Zr7QpEQNzqDBL3ijWLbjEk8Hb9W2DoaL6SWQ77Jr63NwPBGWvA8khm126u3pB",
  "key15": "QtrsPcuY7NMqDVMXvtqSDnpoinDEJaGELHdt3MrawCBNnV2bGu5hduqFuZMHbLnmD4A7tsqWJc24QmLZ87HZ2LL",
  "key16": "46WKXFNRJsNMBf2YnJBYeQmJeT8UuLUcZUvd92Vj1y1yuytju7z4VZahgzad5difvhEEiEGWkMZrUYNui7bfWdq3",
  "key17": "DaKn2pPn82wxiEUBhgSo5kZh27zhyZuDt3co8rTECbhXjZ8qSnZUHyFbUJ7dfghT2zaWR4ntatjMhuy9GSp6HGd",
  "key18": "3jUCg6fKqkXusVFFZZeAaHxjr43WC7fG1RWtEUc8CfiKTm4p7yQEzPAYMt4xaUuV2q6eBFiTURxzhLsVAvjbQHCU",
  "key19": "YzFomkZRb7BEwKHPhBY2H6hqQpgCasCdDDqfRqXgWXCPJte5BV7XwPFcsBq56ctJpVUh2xaTVfs87ZivBNKrmsY",
  "key20": "2ghCgRc1kPUSp5vpCKxTYXLW94y97HX3atSAD7Poe8d8MeRE1g9KLDAhtxQoQdeNdaU3EdbgE95eW1y4gbDyFk3U",
  "key21": "4v7dAx9yVYFTrqJzGNwHct9EQ6qxtvyz5tCsS8JCYbZKKfLMT6TbNrK9yyoVrrjLaPHsok7G89undwLHYXzQMv4t",
  "key22": "judrHWYHbqqBL5NckJUkDjBBmE6yqn2mukqLUnYmuksYUTf77xYjZk3tBahYdHJBoHXjmv9M3ibCFtfQHzXFkXb",
  "key23": "2fnZnLwyrNotvm7cFbGeedw7P5G2tEFaErtRE2pesMkr8R8ZSJJwcKCoej1YR81GhuKgoPoVoGboi8PAUAgSDJPX",
  "key24": "TRSKy15zqDbx8XcTkJUZZpoVNp5bWLcxT7N9XteNCJZdhbr1figS6B4GC1XeEw9nBkT5rrynczLqYzAb32dJE3m",
  "key25": "5X1BDxX1JEL76kAeHUc6utYWrxYc8siVaGRGuQjHNfQt9kbfHU6LVo6Qqgt3ckTrY3xC3SWpJB29MuXmsECqyeoM",
  "key26": "5fFrsJnPGQrMR6Ha92qL8FyJNZqdoNJFHR6cx9RrfRcfRUM3GLEykhyo2amDgRDqsCtnzruJZ47UebSiXKAdrCXG",
  "key27": "2dD9dpczaLeuVsEW8h9rCDwqcj25HVXi9YYkPffHYk5ocfEZsqMoZzvgnuCLrWJ4vLi5WZX3hMuKhwNvKbAwQX61",
  "key28": "4zLk6jYBvSLRmQyGTQpdv6Fn84PyiBJY5SSJJtMuAP1ZARc4JFpjPcUdY94RYQk7wmcxJe1zV4oZfp6HVssg7qhV",
  "key29": "4mzr1Pm2R2LxFMuHLrCq4CEL3TbHX4AmVDb9Jgyw4CcTBnafJMuCAteJTSc4RjfSb15tEw5mGFvDPfXLbhDt9XL8",
  "key30": "2GDSY14TwNgdNz7Gveu77WmyWHGiifRq3YzqCViwpd1n8BaJVAX6q1h4vKVJH5KPv9tpaH84c6vuwofTSUrrTqxG",
  "key31": "Ni5tNWuSSwE2JdQPUPwBsvM1Zm5waTthVD9qk1zwA6Yh2UxvxaA12VStKrkGsMoZACPRVsvNVDUYtC25xFfJGiv",
  "key32": "4Bbzf9ZipH6S5wMLHz7faJJMYiW4CHH1UEsc1K5FyEDsemQLFVfFYpq8p6u2ZFC9VLRwkvHNLUBW5mS9vArKtFui",
  "key33": "4Mn6ZvrjRC52Le3stYWFPeG2wqo37PBTmhYNuoKB7mjo51Un61NPfqsBNRJrUzUauBWr2vtdG7r6cpYjEmYCnU4x",
  "key34": "QSF43voNWZ34CxsosZ5GpXrrfkQ67uPQCqmh3akhfYTXSiQxxkQ7bML6roeT4fn6Pzcxqt4vhjpG3vSPaV8vnnY",
  "key35": "4pfpcS6GstytwLZe9sXaJtFA3LhX1irpwrB9gdfiytTUHaq9AaRcL8PnJRf2joatwqN7Lrbv8hzrHNDuTfqV2y91",
  "key36": "4E66heJNCHkGZCmYs9L72frBkffcuFp2qDBjVanuDUkUNQuPcQVLEkf3JubFhtkXMPG7FCN5z5iWtXbJuYoNfcCc",
  "key37": "9tEkMAv9Tv1WMrd9KBTeMnNxdx9dX6Euh1ZrTMwDfVD9cKeHH1ZMQbZtxQuMadi17kRx3mDJ5T9Xh5pfbdH9PxY",
  "key38": "4s7XPVosNtWvnXsqSgXTESUxv43d94ta4ujEC9jiWoqQ3bSmzRL6KEeoNNN6R83cmTQtVeVgAUqZALoBCTXft6FG",
  "key39": "5J4PSXGjjiRpTZahkwstKWUGgMdNx9UJChAh2gVcbPGPacBawwmqReCS7R3pZZjzwqwcbKsrAeLmaZYnM8HnpY5B",
  "key40": "3jCrhzV1Rxn9r26DkXRBeenTZ1dnaFCoJnhCHRcYmfwWpr7wXaHJV7xrfhjTMFXX1chZ5FXZCGnREsAv9vnEu1GA",
  "key41": "4Wme82ufsP6yZE3yiFJ5YUQXPT9oyRkcpT8wRy657fwTQU618pkKt8SHXcwDMQHXxWnqEsJHFKrxsWzm4H8mRTZL",
  "key42": "4ZqySayYNrnM4uJ4GrvYftyKSz47ibwhaZ4srjju67moPzjtB9WuMjqKFUX5oYjzxB3Pnx6KSkGNti1TNnfxSktz"
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
