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
    "3dpL1Y5v7xbN3eEN6DhRbs3z1tQfrmAdPsVs39tiEUGDtBYf3QJ8DyXLyrH4EPS67MdLsz9LdcHDt34nKjZDsLTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmJVphipXeLHbokyxg7TzD977QS8sBvo6nda1NWD3Lt5mdYw8tbtdibHTbGNPwsfBMWVAmTGzGzGKRpLKZQvadL",
  "key1": "5914NiufQ4fWWKvFBj7fBAACE1K7FM3h4zidpmJw7DHVwoDCLPc4eiGcrBY6VYzmZcqQZqJXT3zY5w9Rdt4tbjMV",
  "key2": "4ugDouNvW2KUq233eii2sN3fsb7J45tXMpZjBoApMfjutKNFHJGSvN9zQZnsra8kPK1ETccDknDbVPGg9zdhtg8c",
  "key3": "5xDmzAJzubdzaMUEzzachnFjdSu1Kgdr7YRdv7H9MyVXDfrKYARjZ9Bxmz3nLkAG3zuV2uAVSQc918tBDDzqEem6",
  "key4": "2KdvKjgY1gw8CffrPBvHPkup8CqTsaTXxVJ6SMgAMm6WhCZo38ffrccxTX67AZVrXEp9BqeCuEvRw3cexydPiTVA",
  "key5": "5z3gJX6Xa4BgqrTVFpSSJwKZwNdjue587u6MssaJpFmXBxwHmTfPPXXYKnH68tSA5CatJv2U7mih5pGdiqynWCT7",
  "key6": "iNh2L8oxUifwdJQJy1eJDZVYQKPQeZtUwiDucM2LXyHZqmy6U6n2RcdkbHVgYrQvMgR82u2zDyaENokZFZqM3UA",
  "key7": "4GjvnSD81oewYhg1d62wLHJXiN6dJvr6M3LyKq1xSNTyZRnea2PV4uYSX9SXr9wAC5VFzRSZS43h7P5qNCuJda1X",
  "key8": "tNbYJz9LkpoNtAC57kKHcMRePeQRs6yFj4eGGZyGxXCdVy7d7qa84s5ACHppCJvfi23LzBiuTqMEmohzFrH6YVA",
  "key9": "2jTcy2HJ8JzwZPV68BnriazvPk9eY5nyhtTe7Q4shy2Br87gGUMGNxkZeSwV9hJBarzfbphCmUB3JsYJDbRvnqj6",
  "key10": "5XCKKtxeXVT3ruzxmcG8SZ83Wx9F64wwSaHwXFrK3YDuPqHW2kcQrkoVcZ5KyUdZT4UtwH6APWHW82La9syk1xFu",
  "key11": "4uT3xvMEvJAD6jQmSyYhhjhWUSvZogpPeBdDBYtpPP8nanGa17c8B1eZQ61PnpAHhHzRu86mSeVoKEHURUgqRPd6",
  "key12": "jEBgpdVyn5kDGKkKpZR5sxDvQHLw2SzHMCmQMe9XX72h6L3K4T2EsKuUe4WwtqbeNNSnx1exhVEGL25vZZQB1uW",
  "key13": "3gQMq4imJuBGWhEseyozVW5gWo7NEuZmziAm1PekdNYU1JoJ6B8FtbrwkZBQFyLmBpzRTCcZaJftg1JNKYJiTUnK",
  "key14": "Sp3A5aAFF5QEnz8HDfrhVzmYBMVoTFNVo8nPMidiia7j73X2GRkv7ynE8Jsr9391JQb6HqxG4bnQ83oM5Z5GBb5",
  "key15": "2Xm97AG47u4539gRthkx9aJFGaAEp6kR5rcJYQb2KoG9hJtL2vBgF74Tcn9GJxmbpXiKT66H81MLvrh8FJmyU1e",
  "key16": "3PY2huWUBrjq2QERwx2esYAMe9SSMhbab2WQENXfrchX863yfn1fz1XSQP7TwarM8YYW9bGJ9a41CaAtuUdNhR6U",
  "key17": "6ru24ozqi2kmkwoafhaqmoRToB2RMk8aFi7e3s2txGQVrL27FZm6ZQuMTbFJQZ4P6fhNRiFNN3LzjgaxFDQyx9V",
  "key18": "4aSpgxMBfAxKzUpMomQJznDJdExAuLUxieWu2YGxHdS8DYTtx2F5Hhrkxuh4V5ddVAX34h4Rxj2gN4WYRXe2dZGE",
  "key19": "4puxfcT2xgUfzHXYDcjs97dWkS9Y1m25DuC8pWdJjdcmZAoALfZZH5YornsYNPAWPWHGNGiyh3rwRsn9j3mHf41V",
  "key20": "5sb5W4t9zaPyeQukYbyebRe7QCD4HmkeQhozHLnDCLHFDMuF4KNbuZvpYanLcaZiM1A4XxJ2FV9UixHSZQpTAF4P",
  "key21": "2QeqHPXcZks745Sg4GDDTXhNErvBZna74eytTGLUorpCWpPnrrZXNZQf9ABhr9uvEYoLJj182zpBTpgtuXBancnQ",
  "key22": "QvdvKyxRu9ZenUuMp6MaBxGeELFP1CEG3Vrr5SbJRKDYCissma5fzHesEYgw7SWXfLz5WVUUeBpEQGkwmQ3NHBb",
  "key23": "5yj2JjbLMyiCfJNBWdWBoNNydUnWUgoNsBa3PBGMo55zTFSaAk8JtomKrQASf5uHUo1n8KRrAgaDxY9tTzJJvKXo",
  "key24": "5QUgSE7RTPyy6vMpf49pcVVUwPGEczjMbipreY1bHKQ9kBtgbaeotnpK4AJMepVZpQHjd2sbsqVqJ3gpUU5fXWuD",
  "key25": "2skHWRiTzBFja2nj5w3eaQN3aS46Vt5ZFsRny5fPQLVQmHipx3GH6kecyWCX3LWVKjQGPhjVjgUs8VqY7vxAnGWw",
  "key26": "5YDRa6pBp42RNfatpt5L9VHx4aTmitG3FQWL7NG55g1ULXU9uyV9SwQqHbpwWbCYsAWCQm6XRZskAAhNezDeXkrW",
  "key27": "2HApcSUjw74DEr9ipR5UbNDSXnXTfSbF9pVQHWkimzp7HdYqQQrEriBxf3S6srpiY4WGvk2fiGADUbweHxU6YjdJ",
  "key28": "4qcPd3Yx5LnqxiKxqc59BKKMES8RYcL3JYrXqCTXAC4CNoxPmpcbgFAvSBLABacnHn8TGzm4NHAhZqtig52YcM9j",
  "key29": "4KbBNMQ3tkC7vpZ3N9BSGnNHWarPpMXp6yp91StiCoueNecTyW5ihQ3LyrrWEdciEicf778EhNDB67UcnPNWrR6G",
  "key30": "Qv6jviTFrYph98yKvcc8fvPT2aVkwbAHsZf83FwLKxB4mZ9ghV6x653XMWXEGFHF9YWTihH5wqK1Dk38q8tpk5V",
  "key31": "3Q8h1jBmury4UEgSnw8bN2Ug1dSiA4q5qvZhLFB1UTFh4DiL425NWHJbX6BtU14ZUr7VVhhv2U6t71bYwNGNrv1K",
  "key32": "YCAFkaCaZs13cTAP2BJsJHB6tiFEnhWRpL7RzyeX4VMBAe7Evpr5kdjsVMncoUtiVB6Jvrx3gJ84cdysZUUne4d",
  "key33": "CrdUffzowx21BSLMvuJyVi4sc8uvAhob8UUJ4P8qEcuMscFaaUxM4bcWYbm6zCCAhfC6Bya7rGiMxXSaoi91Lw6",
  "key34": "Qmutbv19WjrMnp3ZCRGM9XQWkgprXNYjjM223T1cxUpNKR95AMuj56BRCud53jFWLf7KqDu88ZfdsNtTbtDAh1z",
  "key35": "3A1GHpuAHakVo2XQz354ugpjKfhzqYfLkjdPfBj2EB4Kdk3Lktw84rjoDbt3h96fEPxoKuPGG1U4eEGSBhM7DNM2",
  "key36": "7ZkUMwvpheLpqyMJiGby9Tpe22RpsBSB9ge6x9mow5G2YvBGpyekoMCFsUSaS7WVsiFoDfSbNpdhZrMzeYCCkZp",
  "key37": "3gy5DAzJWsWmtYLyruh13SWHE886m1YTmDb69fgn7EZFPMUdfN8stBNCRH8cdDu48qfQB5NBcSWegxkVj1WRoyY4",
  "key38": "3v82RruFtthmCQoVsJwyb2DNPVyDmQEAvV5jAYD3rM6Da6MKtMHfDQUYvqvJJZx4jEvnAsXQvrX4smmFxMLsRfLV",
  "key39": "5ay5Qh2Pi6wMArzECZ3xHiyooEe215VaHBfGJt22m6jtM5BAJUa6d7nbK7mx2Jg4CEjuUXsL4PrwsGEc85r7hUkS",
  "key40": "3tYfe2MSxkSgEWsjnk9BDfKhM1vYiZct7rKNMtSNqHnKbWoEy1igT1ZJ285NFtT9W2fdHujFZ6JifwdqVVfoGoCi",
  "key41": "xiSrKFcMZ7ZsdyutMghiycdCBML6JPkiW18pyKhC3hR4Z2anTEfLyhcoSDLBLX59jyPECmKFQ2e9MfEeDhdNLUT",
  "key42": "Z96GjjNyK5G2fy47gFuSMeRGw9KfdZH43gdzBEQV3iQJzrmYdCwcVRBnK24KLtiGmWJ7qTm9Se5nbhGNrEY7uud"
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
