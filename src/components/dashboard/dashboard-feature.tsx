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
    "29c4bQtYvZoceJVhUrWAUnSMnA3YHrvBCf4acgAeuSDQS6LE6iF8uymQkvExb54Dg7W1ywhCsK36yTKhBYxSjHFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmJfRvxBrEZBv3C4pmY1xrEnrDR4qEmuAULNufaVxZwaAAQKNk19Aq2NpfkQdp39RQhC7HeJJeJNvVFm179PE4S",
  "key1": "2JRpxDA3wRTVrnUefLed4dMg1vbrRnx8Favna3MQsA9ctZRngNktPAjUknatXCbMCRwE6F6o7kSYutqy6AcbhTYY",
  "key2": "75LBUiJ2j9oiMcghCfB4EkcrEi4U3jeqAVmz77TkziEUpnKvMA173ySMCmEdxBd1k9WzMbJ7VATNhDyp8E4rpPz",
  "key3": "4dVaXkpc2bpd8PLW86S7QtdbX3D325sqRtfbENnrignQHFPSEmqzzn6Zxw6TBC8CcTmDseXukMqM15tVVAewZQr7",
  "key4": "5TNP6CPtNR41sbhak7W88Wyimnk8xDcUpi4LFEJTGnwgLo3fAoF2KaNtChj6tg2vK7LRk1kDyqLadKZF7qVG9uK3",
  "key5": "oCpxsXjWHzpgTvAVFRo28GXaohmuz5Mf4QDDThS4GVuX9r6Sm6xeBotv4CrBZSEJ6iqZYAV8GtkAYx7FQSi4wxq",
  "key6": "381fjBGmsUno8bNZVeuEjPR3Whd2iwrwfTBhi2L5eWwK9sdBfS7nS1rLHzWLFp159YvLWvw9mRDT9YzRr1WbUmft",
  "key7": "2Yb37KVgcuZnCP6aTzQvJV1soEGewThfARFHnp9W3mMyux9WzCEtKyDX1uiQX1YvGUgoaHNY45UnghJeKh8AZ2iW",
  "key8": "AGaoFHJrWqextG1uzAU4QLwWbrCqD58Zs1xsMUEAB9TLEUJMXiDU5451MPxJqqfMbsMAwrFvuBWEKMReewRw4qg",
  "key9": "4NU5LWDDJGofH7SUrTR8yBV1pQqw3cF7R1CUxmMAJtoHu8AiebzNJQxG1nqvmgNnt8XMz3Afe4qRovPW2b8JDX6u",
  "key10": "sCiYHYhNuUQoSvNSMJ8ruJ1b4DVr1KUkJwSY91aGFuE4pSWoFmxMCiA4bdgz1fVNEUuhgTXAnMVky5ezsVhbxBk",
  "key11": "4VxeA3UozBoNs4TEQtACbLeXFVrxYEStQ9gjcc3zcYEq6oBRGN4L7oUfwEboykJ9QQi3iWxtR62PHrR7fpF7ujDh",
  "key12": "5jsPP6j1qxYAfecpyconAgKDsbb7WpKCvuYLA1QSGdszh51bjM7UEvAiiH71qWqnfLXDYHoxHY87CFFT8oCaEvGY",
  "key13": "39b6KvvhBRDE1CE8aTu7KDgqVmHtn1LiJhUWsBkxFDthtruVj45mgCY5asM2CBFYjq4a55ntRh22ghuma1YLbj2R",
  "key14": "66gXTVYdFPc7jx42uxdCDfFXneVyZHHz9SMsGkCwLzvYk1RQSpkAVXnmdoU2gsW8B3tXjX8F1bRj1JEqM26NvLTE",
  "key15": "2HyPVberoifyXJWt1p32mQ4rknzfHnN2X1gGegmkon8f2wZ61gDcBmiwrx8QUwRTErVGGhiCSvDcgRzwGyT9L2JT",
  "key16": "2J9984ehKm8LVVf43zoDhVTaJaX12mjyxwPGNiDxQL6n6ULHY4KjBs1eXUz9xtULkDZSAUZxGegpBh74iU6bZrbB",
  "key17": "2ixt1XpPkZznAeWt9f9QEJPyDe2EbvK3k1WmbdcCQzyv1wUdivybAo1QZAgmcD69K1UvAkG3tdyLqMn5LWPzCQWz",
  "key18": "2UUzE9vTiphNbyaqiGSa7vjp54GcpWELBozpkiTxUnWK9dpFt4Jb1DDv1KAufwnpqz2CFQGYkcyBjmJu9vZrvEYW",
  "key19": "3DKQER5ocwUCVxiWikoWfrUS4iyY1c5ExynpvdXHVCGrcexBGjUayqGe99YGVpmQM2NcQqQHddHk8GhxrkjkeNA8",
  "key20": "3mCAMBTWoTG4PPwghphza8QZfpGu4QrY3MfTHG67UEjsAhV9Xjf5CxgvhED52qD57WWbvYQAh7k9T7PRTKMXs9x1",
  "key21": "2qUDoRXNSS4bCsn8Lds5b81jiuz5SxPTpviKwaxuCeSj3ryzki68jRw18fnVyeUvtiDCZc1pNBuu2QuiE9xP2MPt",
  "key22": "4AKoM1KPZRPHM7WRSpLmZjxXgxQzZPRqPwpYq1bAUAjJuUAgnowe4iNnpanPRe5bygfxv2q3Uz5ybWHFnkb6wK7J",
  "key23": "3gB39B6hhMMPZsmczcWwvuN5oUtG2YHNXBjnGnPQW3MYEXHrqdsTb6pZCWPN8SwbAtjuLekictei3GKF5GBudqfM",
  "key24": "4buP7zbTP6Afs6uS1ACnKtKyXfQqELsRxNrPkR9Gy8QQUcftdQ5Em4AA5wucj3zqeVGKgmqTetuc1cKn4dkhChFY",
  "key25": "3U3ySYfzBQiYpDHWoEbKBuNtQPXXtPoSfYqLUoiKH3zVJbMHqReJ5x951uqD7A5ifj1w1S2jZAPbiyhGYW8yq5XF",
  "key26": "3gnRy88fqo7LE6EAtgGHxRqAinH39bd2S9eF25H6ptq6r9srNif85YtYQxSFax4LTRMpPadtLaBabse9vagPVjsX",
  "key27": "2CqamSdSbLTGHV6kFcKpce2bt7bHWEfRJjSpHgztaZjE49q8qBhw262ZfSciUpaK19CtXRq9S3oWvoiLSCDPt2xk",
  "key28": "5f5GEidUqfSzmDv2iBtTRdWU8oUcTsAjiF8hPcp5pauqC9CR4nNm7Fo71Ke51FF1qpGspCaaPA3nZkXaLyTnEUMS",
  "key29": "qLqXHWgPcvY6VNgxLgTTt86hwmQNAWfJsSj2rBPATgsxHRnTtJbEu7zhXXyvaU5tD41j9qki9YFC3YpzRoYeaWq",
  "key30": "3eqbDfD1Vf6X88m3rqqTL83XGfJ7kh7b7gj3UfgsQMwZYfepPSUzHvc4zF2h4A8RxPhMThUGUAgpuhCs5M6csKpz",
  "key31": "4t9hG5aujG8XoRaicgbkhheoU8tjqiEKtCYbvaurX7jwyrUYfyDX4iRo7tZ8bjboot5iv7g1Lzq2dAmAxDjaHgKS"
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
