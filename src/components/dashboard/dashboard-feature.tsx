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
    "53FUVRj5hA7Ur6BotxPYB1AmRhGiS9nofnV6edELchCG8ePQ8PXzGMJG7KNUSiHTRHNNgbo1LWZbaopkG4HXs9Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XoKoo4Hvcrb5YV2cJjA8uQL9MFeUHWdzjL4cLq8MPFderaT4tgSzQzSNoqnJPH2XMd4bvMvnairewG6PSsxbFvB",
  "key1": "4vtcptKbNopiNaFZBLNSaXmzQM4XTB89eJ3QKWAKoCF9fXHxZ8wJp89YX6gncVmRi7LerfBtZs4QJi5TrfjuvtrF",
  "key2": "PLq8LzPbGjCktYkeUfAncrj6VnydzemMaGySQFmCdHMqkUzeuKiDUDkxkUSh1KVVbYUhztxPCjAgfpAyWjdsYaJ",
  "key3": "4a74WH7TGsJfuDpGrGbWNpXB14e9xyWv8zUPRYWVNtZVuG2MQuzXcKK2fy5pZunWDB7zTCR3E2PmW7AEW7YCYGWR",
  "key4": "3X7tPNyFa7eomKXYu1MswhLhNc719bcpWUe628aAKzehCi3qTEsN9VEQCZrFJH1ifYLu3VhtB6AJX1ZyXNodzUsD",
  "key5": "5w5vmYkJVscLSqwqYa5MdK7s6fLr1yHwjh9Jjk7jJghW9cqKBUhx1qgwueBB8zmu5oD4jVb1Gm3XioW77KSbzLcK",
  "key6": "42EeLw1SYDLRy3hRc79TQNqB2oQsaabcqhTR4uLM7bbVpKwmSUvpBTA6VJ9xhvAbQc2haiWqLZbyDa6aHapgCB1B",
  "key7": "4aD4zEYRq2gyxhgvFKk5fokm2AhkLL7FgLMFsoBEzymRusujRMXSFV5AD3LFfcpmmjZQni2HWVVNQT9BFQpPXBzk",
  "key8": "2CXFHK8rzazfJgWe2jxVTauA9UgiPoxtUyi3C5wftMBzedm5KtkqzbEkFpAWc43CXjeFyMpHggFsromspqDFmfbK",
  "key9": "2R5UcX9cN8Fd7EJj1a29ADc4RsNWZmdcviEXYD7QTnsPi3zPTR4ii9viQaBALWkk14Y29Uz2gm72X4BazWrG1evd",
  "key10": "4b2n4i93iE2paJmdMRzzeezuhkNobZSvThyNdq1i93uKNigrsW4DEYrjnoHhmMTECXpjdhpU33TrHEerdBa9MFgY",
  "key11": "6YYBgd19s3ParxaHi1Vui8a9Hn8FK2XgSVQ2ud8D7W2KU6Sxd93WKzTYDm5ssGNkUm1Nxb5v7oEwvFnKpF6bm6y",
  "key12": "4MMkU5qF989JGBbsSVEKbeDE9Fm5ymErdegAEbXpUcNfmpTDvEeu5VReGVqyx7GnS1my6oi7D8XyRGex5X3ipe83",
  "key13": "2mW5WVo89fw6XbyGqRxUsQoPMXab3QPT8usFNqkd9eBbeHXSoKqJSyBKULkeRS72BGQeRui2xJJYxTrq9rKyhU2T",
  "key14": "22LG5qrMVMVdMpVrPMgZHV3cu8rkYnX3KLMmzux29hF8AmgwDR8p8iE4HscWZpEyQRaZfNrquWaLZJiHR8D7uiKo",
  "key15": "3Mqjgdu9kmnGhpv6Lp51d3Pp4YTDJfneQ7kbmfRZ76U3Jzwxkag3sMPJGe7BFF5KsbeYNWqR22ScRaYC3gHHxSA4",
  "key16": "5QBdij8JogkskRSHmt8vh12vuJksJQMwaU8iKExime8oG8V26g6R43SiZu9ijGRGs3EDHfS3e1BvGNScxtWcG2rX",
  "key17": "4ScYGm4EPYNfnMkoTvPuAaKkHyi2RpAmMoXFqzKDpAAEdjh9ey5yj3hXt88p7rq3G115MfD613KWneVqgRMWj17c",
  "key18": "3qDx8wFkYNc56itxWJbF2hAKweHVWw2RcpizJG7RrvQbqpHUWtQ83AJAH44xjjc3nVcBUh8JnEvvFxCdcGa6WCxU",
  "key19": "2fRtY5WHmLc7zZag4NMUdzwtEwxqNBHFchPvCdsy4z24BUh6jdNwmMqsuAoU161e3DZdaVP4tUz8W7Goqg3xfA6p",
  "key20": "5suisti9kdwYdp49rEQSueqx4WyHxXY1nCkZ85Et7mPrt8xNyxfbxRpfRSL9sTVjqnq7QbXKkxoFsevtaf588m66",
  "key21": "h5k5ACaXpJyGXowqhRGTGiWgggn8dcWo8yas1tvBWKqGR4z2oiLAajiGmovxPu8wcZoU786S5L9dYRSx4jDnx9H",
  "key22": "tjGmRtQScEz5Ai739qqjv862uAn3a9ZirHXYQtXM9v7bWkvrjYNXAfiriZaCbE845zCzJTWCab1qqoLWkHsWQ8U",
  "key23": "481UscHCWmNBZFHVqi3Zu6aJrVBCKowLDHUHpqPAvNDD1Res9PqzL9xrLY14mddhLiTV9BowUsramXmRphXwtnyK",
  "key24": "shU5z3nErk7UNRwXsVkyFyKsS6dT9hsYE8CnsXDXh4KqhVQPKt8cWxYVc7dBF6e5BQEmvpszTtqxU478bRNPYnf",
  "key25": "fcvPguLJNBdo28pmFUpxtgGd22yFJAuUJyBb2wZrvyT5vYecZmUJ51GhfwX6fyGYjvvAUM43qpYCP2BWMZknrcC",
  "key26": "5hypkziECBZyRj5nMwrKTcDvGnrs1T339j85Zx5zty8GdDkeQGVd7kX4jjxZp8XDKvduWXDYnJwzruJu3VCYe36s",
  "key27": "Mh3GfRaH3fKAVyd6rNMgKXx72AL9JcCMUeySeBhQieHG2tStKpjobaGymH6EGUpciZAzbb92fPrQiJDGNfvbZf4",
  "key28": "4eFBb8DTL6mtoJEXD1v1q84R5x7758hsp5uaE5uu1SdLjGRf3HqxpR12J2BV4G1ZE8msF4WwzeLEE6RUsCWSXSTX",
  "key29": "3uSbkGjGu8sHDc6U9pPJ58dN3faVXyir6EfRZyMcm5o5yBCzzsKg2S5R8e5DnApzvuj6yEnyEKxCNUbgAvAxV3h4",
  "key30": "3z1eZHvraGVYQMQtRxp86abW3KVG4Yxd8ro6XmsXDZzFbK3QSBKYe8Dyb4FHP98aHqTN2ZEe2hBKawEnRz7WVZMg",
  "key31": "4UsSs3LDmoaZjkBDLcsA5S1i1AegALV2fTznzWM1TJivGTjffXyhftT6zRHjh1DbFUSWkAk62ovw3xFDGXhojWq9",
  "key32": "31hgYKkagJCGiAdGikgX1vYxsWxPdENiBZkVwax9kTypaHVuDBjYfy2LTWi35Kp233GefwXC3p6wrAXazsCNAAPn",
  "key33": "3SoceYrBAJTrah6vDVgLxZ8nAmP92njZiuYuvi4XoYR8a8RZFqpTDLNF1HxVQmHDn8TgscoWZ9eSGyeX3wKET29n",
  "key34": "2CpDFuSWHyhRKk69fV3R5tozMZEhtAwSkZuCRVMfvwfTGyDhoL5QNCBc89tUN9XaFir57EGiRw7Yi7dBV1rHTywe",
  "key35": "3UbYQf9vVMXpuoswSZW2Pr8zNgP2PugS2z3gB5WaGAiBFuRK2rSzvnHasA33vYWGRuZxPTdvckwoAjT7hof1mzYD",
  "key36": "2cnAqQpigDQ3vDHfDqUDsdRj9LyCyS3nVHs4Rf27hMuc54vehNECXG1LamLj4Nru4udfPjkko67NejCSnRqc2yxU",
  "key37": "5pnjS2Gg6qCLwBuYKa4rHfRd3R4PNNXRSymBoHb9PaHrav8EdMArQfreFLcKtewTVPwgs4swu9FxPFjoCbKiKms8",
  "key38": "2LEcRDYeafN6G3LBAirtyyjaJLbQHZnCJ9qDpyrNKE29QWLpaA3hXYNAVLDD7qoErqjqhnS1LRJvVEfyvbkoyGpM",
  "key39": "2kGee3dVuigr2ZBxagsWKEJmDrfogCMMve3wvFBv9AkWtisghjzVJ9DPpeeWgELFfKLC2hmA2pdGkGCEWCdK3xJk"
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
