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
    "3SkiqjF8BSyJ5byboasrmC5t3rAGjYzjCAjZL1BQWmDSSjWwKjtNTXj6qvbvsBWz2RpMY3zs6yfLhyHir8UWWhun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cbhFbTnAXQ8HeeMAMa3BXbtPPK5MFtmL1qnWQfZaVP6tBkDv7YvbwMSLMAGWGoWVMr8RZ24BtGrsdGNgVNi8VT",
  "key1": "4Tjr3nB8zzEvbFwN8byfEsBf88yDNpwSJjww25zTszvFWE955FGDbdrGs5TFu8pgHN88ieFsMk1LfBEBUVjGrnWA",
  "key2": "KW7Xx7kXErqm5Pgr7TqhyqguF4JQtrmYxKHWuDsaoVBeYYpwyQq6gpfW2axpHos2PiKfoCD3qoVyeMr76hDEMA1",
  "key3": "tpyVJArVm6BxSpNs1gX9aw7h9UCB324d6aeahP63QryFrSmak3ryniW4BzV9NxwBamE4QzLA3NHUyh5HxHyJUmG",
  "key4": "2PAiacaGh39RBcfPocVr2rdTw5W4PSdvBiunyZgQvNrf6XGaayN7C7SiM5jRs87JHLAYKPA3kR7RSNpUJ2ciZsP8",
  "key5": "3QBNcisQSwXRHgtFUmsChMYtTT2jU8r3ndXX83CLcG89EwNaC6Mxj41oBeHC9E46vFsUSo1R1JjmXpgT85BUkKsn",
  "key6": "3XtXQnYgH4yAHpGfoRxBFhSCCdd8b99JG3cjxCciXmzWFV4YfRy6BhCgRQtgcEM4N6LmRvGrweTHsjovi3fdJ1Xw",
  "key7": "22EYwRz7GfEmhXrR93ooh9a1DTQ2pSgidcnqKHmyJvFSAW5zaWQRrsV9YV6M8GBCn6jzrEXXdAycWfCDKvpSzGFB",
  "key8": "tuz8Phw5kPf8NHkDnYiXpRH6ABG8eQjZsyNXRKZqWWyzmiDLNUFfpTdqeJsgd7HGUZ6h7qaXzn5KeCkrbJeGq9W",
  "key9": "4mPpnNVdBR3mKXU4rP85nd2rrRDngr4YV9BgWLpkiCoSbkWvdUJJcB49oBHxAKNNw5iwh2Z6umJSqa81VijeDNAe",
  "key10": "6xouMWpQSdXyFGvLE27PHVY5M5nM1CVRv2zuwE4FhsniqPJP6RRrSEZDNyeM6c8uPLDQKN75k1BKEEfNKu2C7Ei",
  "key11": "5YY8sgsi1YF1tZr3a6VbH52hJGe1DavBg6M9R2CKyzpRq5Vskv5iizfQW9BZp4hzTF2neutrWx5w9ZWXTRgKyyU3",
  "key12": "5Z46Ds5GJFFQuAyeUjNXu7ZKmSkjTpXvUgjgjigbnVYgAk8nS3u9RpvxF5tzrexrxWkigYX17cC2bQEqeVhkAqHg",
  "key13": "5QFkHDjDV43y3ymbU4LMFGZBhQvMuCXoH6JcKqBQYLRg5QTeTET75bcoez9J8AdMKG9xc6upkuK55NSLLwFU1diq",
  "key14": "2poH3JrBsfCTLNHBqTthG3CuagxSNvsqp5xZr1rYGHZJZffQyUy4MYtwvFHytJqQezXePuuXiVdACp5X9qywHrtP",
  "key15": "3qTbZSMAaWMsrCSspfSCs2yXzZaBN1b5BkTHuHzE3HGZYBHWWKRrFJ4zyfp1wCXBPsV93FixmwQtutYzfxsZfhYB",
  "key16": "5SZAQWtXFf9v2QfQAhCyrscpHfqrwK3HEZaz9eM6Hhc81Bwf37xHf1EZELAMnpfYc3iM9wgV1nwHxVjkM3b8g6gZ",
  "key17": "3y2hoVhZu1buRsfigrvryvq9UET2trCa7rwBtcgqVFbc3eazCxnXpYwjzWF56BbujTR2nJLDG2wWWXHwsqSeKpUr",
  "key18": "5NboTPLoE5snzgW68fjmMQ3JWhKjHobfFcYjUFkZDsRtV3xikWKdXJ2ct2NB7YaurEaDfe12dBqyxCwkyL6i87ML",
  "key19": "4HkuLK7zx8x1M6t7mE9NRJoje1zxD5N78tcEigynzeL7MYiFRx1BvMRKCmC3eEnt2VfU6fU9LZnPs8ndwEUxH9oh",
  "key20": "3nKWA7zGvg4DHqWzQGV91FaQ8tBa1S5qeRAF5Be4p3krcYaqwv3xAmFjPf9YrZyeafEyb7G1qKCBZogcNHiWcx4E",
  "key21": "VcUUCELGC5HCee43skpBifNd8PxJyNcCatvKQutr6kqEu7E73HwuTk87xc3ADws7snKyBkeCLNxRqt2okxcgNcD",
  "key22": "4vhB359kv7m1mgNCDQS2N9xQYLnAvbc3DZw6Sev34fiR9MpFRMiHx5Y7hdLQDtn66pkmAEKwSCBo3VAtsvxPHCtc",
  "key23": "3xzRakzd43u1fVU2z5rwNVwa5aFX3guSLwNt3Yihy7cNu9EddUVUMS86T71wtDNUjDUGnjMC7rZoNytTfhgBmUbv",
  "key24": "2YcBMDpjnhkZXky4ewnWRUue1CsiNdkD42qCsKBbzNH1uSD4BuvF1WRSX1cW5vg14XtDV6ZfExGz5jjMyi7A8bZy",
  "key25": "37GnFoaHBpgPaGkVTQS32519t6TCCBB9vGtKKx2GgKX3j33zi4x3hBAEKBRRCxD84rUveZfH2bUpmJ1Anssu7KK7",
  "key26": "35kHxtS2sdtF693K4Zqif7fNdpF3SJZwhnaTuT3fsybiXZNxXFDJhMPC3Ng4TPMt8CiHGc6JR5wwvidaR5vBT8bH",
  "key27": "2bMceNZaBHDGRsUjCUdQuk4Yy7jQAR91xMQGdFM9M4tDvV82YZfn5VwRDkGv6qX1zWZgv6q9Bi7mAhieCEFq29Bw",
  "key28": "2Xv6uAFgBnp6bzT5xeVHcU7tBGKeiQhzudq81phQdH947U8SMQBq81b1G98Cxb5EKPgFFHEGnGaQKyGjQafKx11f",
  "key29": "4jdzGM2RgBNnAGGVKBC6bqQTxChZLopsxmtmsYPQuEniWY2LpBaRjSqraecY6wVDLX2D3tx3vHftAC8iRKnfHepn",
  "key30": "2nnwo7zujfxiPRNLrSsG8AP4wreYBthW1ziZgHeYQbLmCYPJVJZzY29ucjhWqWwd3y95KLWpFesoYXbA23KhUdti",
  "key31": "5k3bCikAaAdFJATayMuvauX13Kd9unEaae51UjBmkNAmfY7eTjssVVsbAtYWA1DfKvSz7amSTpDeHyjY9mRiiiv6",
  "key32": "3Uu8F8qD4Fx3zvpRCFvH7N3jjx4YpuyYjth2Nka3o1L2VAoaVATUCa61Rd1Y4w9TQpaJZf5wjkxVC9XXMswrUDnJ",
  "key33": "4MR8mmHs71V7jVgCYaTmnCForamVAzD2GrbKTMcUjoFnna3KqPPFozaaFwvrozeHQjys3WwvfQm3kK12TGtuKaua",
  "key34": "4WgwzcKcHP1gHdaoKZNvpSmdZoVLTYEepesJQBMVw5XDVWa5xU2mrPJGorqR65M1tRNgVi8Xqo9WQGzJnhyF47rw",
  "key35": "5xaKbNJEuSYmRs7eFRcj7DCwRAUzNQq8ZJHDksxZFpYPciFinCjeAPHVQf2G58eEPHd9woxkZ8E6EwZhiKKcxLwF"
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
