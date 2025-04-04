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
    "5MNjyGXL9czX4vSqFQitPnoHAeoKH8nVFgjHPDwFP5ERfWh3Lx2SJfvMV7xtYTtDhMw1CnPu7ssweD5iPVjdbPV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XD7Y6x78auW8trxsLGHE8arcLMVrydcz7AnSe6KAPfB1dFNv39ShEtWia99jiYhe9xcn2BMGoQsGAYUvxS4inQa",
  "key1": "2Q4Pyf24VaWj3NRd3eVdqTNB5kvY5LYtNttULdeQjs4YNX3bSdFu1EyfrdZnMjCdBD3YAd1Uw7mJ5TQD1eu55voj",
  "key2": "3Q8FE17AMdFhnMCGBeL1F22o5iKfes32xb7T6T1vwqxWDr2iDbWNLkoQqwv16hKKsj4gN62oHQYGBrLhmq2ubNSq",
  "key3": "5V3ZkgKRCZa3kRjKjkRoPdNp8Qxs95YaCuyD8273PFdEqXv5D8scFsthaRCZ486QnSxGgCcz5sWdwVAtTBaMATtX",
  "key4": "4AVqzUyvajKY59GF5Gwz8KWGQmQ9i9ExZctxFsjQbjDYbKHVWSuL5ZFzSy14ZEXbZj24iMVYcCgntZhcgAnGqTDK",
  "key5": "NbPXkKYSF7Aa3AEzq7arAyKPChG8RTbUSB6E7yYSkeJ7BW48Vf3H15aRPYYfPQHz22AqfBNXvQWtZjhPpgsJa25",
  "key6": "4QwPPkvW6NbWfTtrfuJtkMKC7f1pphxV2KLSi1whtMwob6S2RNY1guKzekv3PUotq67ihuT5eYJRBaHTmocTbaoM",
  "key7": "5BCRNvTBXWoU2RefuGHDNn7uvrMh4Fx4iWdaz5pP41dKxqK2KLGa9Vq6xZnhQgyvRij9jTu8x4fJ3PsNarrDhvRi",
  "key8": "kHfV34bCNjfQQm9ALHXFtju29e2NifKBq71uRpYq1MDA95MVqSvJdizj8hLZP3ShSDNMoj1cdvMUSEZWRCRfgu2",
  "key9": "4jN51BB6XFrYDGZiNT5uAhFzSPBty6YdzJKDuRFbcjMFnFNZXNXmo2sNW6ZJUZE1zrbP4Ay9ufSEVY1i1Yo3f3d9",
  "key10": "4eNiUNoVZMCjCZmyi1QamPQct8GefN2rRCMGVqndERM17mjNn93YHnMn3h2W5VAZrgWmVAi11ivuQSrxgefgiVfV",
  "key11": "2pkx72cK287QtiAv47GjK9pbHnRBU755eehb3xyuJhz7Ckzjco6e7cNKjQwf2MjniG8nFm7eiDyad672MjMVEFMJ",
  "key12": "TQM44osx6ffNKcvJifywbkRLxiyXHSp9943jjknZrSvomj2fpDinc88MW9bSjLvfi2zHAJtprA5Mn4DxJX9ArKS",
  "key13": "66rw1yw69ogpAayqsVMg2fB7HEu7MVYAUiPE7gy8hjxNy67kKfKtMicCfamqaZcDr6adM3dgp8jME9BwQgNXsg4S",
  "key14": "5sryxo6Nf5nAojpuLYQiKnKniXWjsyenc44aYAHSM3z9FjoNeaAWCSBEKSsYvQf6Bv3mbDLUWocQb9VAeQ7z4nZK",
  "key15": "67QPkyKadwVauGmRUggoTtGTX5wuH82FTsGDVUsTg4d6C76Gmkm5shNPvBaLMBRjaZbjsaHuoJ4zyo2Goi3W3zt1",
  "key16": "2bYdParX7BijfFGUNsTmDy43FMFiD8GXKKh8jMmoTbRkBMGkAUGWHjZseFVhD99ptCb6q3wjDiDxTyBeGrkE3A1o",
  "key17": "tAVVKCiUHCPLRJLvrhU9p4MuTuqt1Fss8sMr4ecpEz3H64mMJ6j6es8EGNHjzV7yCUD9iShtp3aRqesuPfd34LW",
  "key18": "32p7xatgvmJR58PTukWw2FGYQvhdFProgM4MWiSX3HAdaEVC1D5bnRtLdirrxN5mXKZ4aNuuUCWERFbhHnGcN34F",
  "key19": "4iyZU55EKcNZxVq53E7qTquqwEK3V19MNmDNv7jrSGTnViwDubjZJJnxdxBbqgPxC12z3rFpqEPefA65gf7YreEg",
  "key20": "2ZQhsY13QqRcWUB7v2LG2XWEhRUVikyxWfJuZccLSGQeVeemY1twohcfBkTmZUGsL5RRYDUQt8tkYbVnkKtR8opf",
  "key21": "4DfNFuiHpTWmW7c4ufmbjcac2qiEZMyj5hD7Ld4XxhK5fz6ftfn6eACS1wVT6cACgvtKZQKWQ1qejTerSs7vQ4h5",
  "key22": "2CzBXfMpYRnk48KQ62egWAre3ej8h9tA7rNvE2KDfax9ewfqypnVLDAVEzu9LQF7cv7nF7Vm1uQoD14jhyTdWJQF",
  "key23": "3C4sVG7yx6aqahFaKm1ESR8gmtU12ssnnqEWjmDTfTS8bTGqFaiJxBSArJyx8EzrxrkUV45jksqUYPip39L27fWJ",
  "key24": "5kY4Z1qjSiXM4uBueHecKSQ7Tr9X6ikTFmv3FR4d47dCYRYeDUJFU1eqKiKKUajjJCaeqLG7G8mAZiAEpDzNnRm5",
  "key25": "5DDb9QLKaF6hZQw5QNzYtjF9CMfjS2TbVdo35s9Bu1JNMjUjkcrWwJP5Cu4wRU8edWqzq1paVhiqCSgyCuajXh9i",
  "key26": "5JtR5jk4RXgcfjnSC2iatHPx3P2zxuzg8LqwU6eBoUcG2RT2ai81MwPzk6EUHroVUVjcaoASRqopqstuasB6mDyp",
  "key27": "5QL3ax6kM3r2cq6NGBy4u2dAf6Kd3muDTxPoE64tjop6PgDCuxAEsA6NC7xwLATjYSvMyosXBspaDP2vutHV7UQc",
  "key28": "3kwaTZEFgWSfrsvmfiMabEArSQhRPrhTNj1uXZSesmgr2dQK6QP7vawR5iivx5w21RqfBLktUmR4BC8ugmVX7C1p",
  "key29": "4h4ZeNArg19ZRW8qmxyVx9smzn8x7BfzVJeZcn7e9WvxJtWcFHPQj548DTW7MEpXFYvTTf9z3yNC9UUYWvQu337h",
  "key30": "4TKmZ73jn9zWqmPVFhgveJJseJCKKiMUfB2VHrcnBZd5cTRjGbmPggVKNrcmxZGswbjKKCQ4na7QYhp241YqSCYd",
  "key31": "5czzaowBwUAS6Fc1q26588UqkP7DyMhxrUi7K8LvNVHdwae8HuWJGE3M6Fh11noc7GQPLHrwzpyqoaqf1zXqWSqj",
  "key32": "2CGcjHACSM9M296sDACA5zXm3C89nA3Zkf2tbG7TNyE8dTin7e6kJeVxhBNdmP6uvJqFwS3zNPGgdPyMs9dDAuiU",
  "key33": "3SdYSMMVdjt7ujbyvbf8zM5eyeEa6kvf8XH7ui6LL9TyCsz7CK3E7zHLrYDzVFh5Uw3qgd2zTdTjB7wqLvznrdKy",
  "key34": "4TyzQRxXkj6sdzJ12WChySG7EJh1BzBvUXCk9sUy3LEYNt5Yg3m3umoVmmmj3nUAhMokeBfBnK4WCXSiJJoYjxDG",
  "key35": "Yg8F9hgpXucMpFk2kDbGkAAt9tNP4E6M3fxBBmBL8f1uFUbYVM7brFFzf1RC77F5fB957yFeKQz9ghn4MicxLAS",
  "key36": "47rbqXvY1ZkFJQHxcA7Lib8Q9xVZ4MFuHSwRTcZSnzSjSiHY36QY6u19nSePqr5j2idFhUgNeCiVzSQFs3QC7fPh",
  "key37": "5vjGVKacYtFpCcDSeKka1i4ounH9uhX3rrezMzJcxDKmGc8rfQRbvDfYn5ASWrvVSEoQ4yBh4b5M7HC83J93EcBg",
  "key38": "VsjQ9hj6DeTN1RZ48GiTzjE37zrVjqwdmpnjy2WrpBUwxMRT3MHFDdNhJtBWEWryXXprK4pFjA64hbQJymdbK8u",
  "key39": "fhSopMSsxz9jw8mVobpNXjmJrWT6UDJtT8iVNj5qE5jQJv4GnGSFphNHZUfXkz7ybYKYjzpg4gPMSC6xoz3nTN5",
  "key40": "5KDtnGz2Q2F7SgLex27HibbXCueD5vE5NwJrA2iCr9oyweW49MhnKLWBHtqCUTJg4fjpBhP9FWowAZkQTTzA4Xm2",
  "key41": "3vJiAMxYnYmf7RkVxDVkhmK8jhdWC8esTvQtXG7McMunGEGKn9x8oAiofi8RGthAcHDvNs2JTbmfJ3W4j7AvWZx1",
  "key42": "4sbhanmuM1iQoDZzk9PKbWXssA9JD8bNn3FZvqGGgDKJTHcEuJksGfPgisBhZJAbmEoXTEQakBgvhRHReo21s4N1",
  "key43": "3U4DZjjNhnJfeN6Jt7VZKx52oeiSJxC6xX5mPGcwxmbxp87dHCx41dmnZFDeMXPdd5Up5YZGn4WSyQ1k6JcbHz2j",
  "key44": "XuHRLfDpoFzgAjHydsGXJqAqEiNZXzBCxGmVANVezp19rdQiQ7aX9AEv3L56QCHEfEHWyxwH8NNtDTQAVXN9xSE",
  "key45": "36W4xtA2GyGYKUsrBGggUTgrQufbpd4zcr6RegmKKrUeNDPdmCZMhjhSvgh5V7y7KkkXWb7dLEGVRxf3rjEpdBHu"
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
