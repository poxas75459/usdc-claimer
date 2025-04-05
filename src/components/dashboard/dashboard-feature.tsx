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
    "5yYftZJE4JWa5m9iSotUGXYPao3aczjBwGmpaozpiojdFThQ3zKZ1DxcocLfJrPh3diMpY2CqokYoiFDnjTXX3G4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpgbaiFUkQErxJD9T6ZNiGcBL2ZiwiE3akd9aXK2FRXEkhEAxBqpETeGNcyzErqM4MtbKMRvquVJovdSyfaZQfS",
  "key1": "25CxEh6285bLbtHnQAgbCsfSXLEfdKKvKe6fXsVNR3YsbAQZfF36HZDBpVbqo6vPUaUjLotjjvVAFCxoiqLbrHL6",
  "key2": "5u5gPkhWfLZQGZwXBSqMvGtPAHSAKcxvGay2av7AN688uyRdxhx4rCWNCGR54T1bRPvpxWEqjhWVY19rY1HHdCdT",
  "key3": "5hU1T2FF6NeJbNFoGfgbSAqNWfx7BNuZ4Bgm3uB23Df9KeTQrwLyX9hkn46trzeVhSZoCjCasB5xfpCdNd1ib3wS",
  "key4": "3rvQKGyeU77dpjXr9w7fBsRMB9PtpK6QCQ9883MiyTJm9ot82u84rttzn3tKzZXLaadkGGM3xm53xFvKiH4Scatd",
  "key5": "4R61BQ5oWrb4qaoVotnqiuLfFmJCEPo4QZuahWKSjSwdsuF2PhoMGqcsHMMzFvWsGb5KpxbAmoMqoS7woAW93jWQ",
  "key6": "2h4z9W486hgc2cTDNPqE5VmWd3K3hdkPakBaC1Wh5xMFz3HBujoPP58vJG6P9ZYFJPnNHaRd5SFFfjiJevfCdvoA",
  "key7": "ZpJSgThnr576DC6Pct1S7dUWTQ5tiWPEqVkvgYb8Rkg1mwLHomiufSckFkFworhzqmrLz7Qc7LjakGN1zpXn3kF",
  "key8": "2n6eR7U9jq9qdtexVT2brqccY8bMogGnNVCiX13o8BuLJvqMrmf1Eu5rbbbDrWR2scA3jTqij98r2j8MGHruuJnT",
  "key9": "4hWcP6uqbis6mzPGfiYH2twmRb8TZ65vapiLjzd4mz9KU5yuNqoHFwRSWZjruWk37ax5q625G52BGv9mKs6iLT7q",
  "key10": "Fe77aGtr8EBHQdZX4KyKPFfzbkRwJdTRQrnvCrf92AL2vo9L3pEbjEzG3tKwX8Dv5StUgdCbL3HWsY7Hd6m46oN",
  "key11": "3X99neKC28f68mCqurrYhrE7yT8zb9H8hnx6EvhDWRSJ1iy7TN1V6PUr3oSZiP5g31UxXW8CyGCo3jwMG2AnBsta",
  "key12": "2eZFvX4QwUEexjqKx3zzWck6cD2rQFPF2rMqip2a5bymjkzhxMutmCpGLu7MD57PZWEw2qr4fvQivhv24H3ZPNJk",
  "key13": "4BpMaTaF9WsuGQ7jT7dKYukpTA8LAGVCb96j5YhRrDUKzyCQDARtZby7HLURZaJBdBpsybZJWxHDu2DWDNj5HSB",
  "key14": "62iV6n82hR3fb4bfx7EwRtPr6uQ3wczHNPfiWtsErQKSAhorFGx88WSLYkQBfdfGP9E7zs1ogAHyuf66hXqAnkdP",
  "key15": "2qzVB9amChHW9NAfRhgASzYJkdLEGT81wvQkZRcjZPsH4ZmX2J8FUovDTgsBidB4kNWdG13nkYYoGYroCikju8XY",
  "key16": "4on3UuREPkKxu4kxMxo7yieGQUtzY6b4vtN2NJVrab7V5qfG2UfJSk6VquSdhb9gNXi3G3bYHTHSFiN57z6D2zrM",
  "key17": "5YEUVyvNUZBj6pDCjbgSXhZtMCCt4LCrSeS7DWFPgPw6GikoV9X3P5QVqxjRJFALtW3QMZCv18Loh3jw7Tk4MY2q",
  "key18": "65faYjocg97WG48uyneUvcTSP6AcaNbqhUYGs8kRQR4GLSDtNEoWp5GAWGGBFhFB4yNsKmGkbv9LtNT3zoobe4UU",
  "key19": "2M4rRJCEfHoaPFVddRNqYFVGNLmUkgAyconYjs48qqrcSAszAqj2Tips2CNyJWjL45AVSekMhGcFVMZix95MTFL9",
  "key20": "4Xmc3sSs2ZqtkPTyurdTL7XBN4YixYt8pCUVD3bMkNQ6BAVDyGFUgiAyfdubJJ85c5okDbvYDkg8e313FpBscysi",
  "key21": "2t62DgLyM5cRPED3G5ryPEHJE1UX4hM9JRJkQs3TJ48LhkXGhd8ut5GDG1hgaM7aBhZKLPvHFjiM8762STfKQgBa",
  "key22": "4n7QkiMfBozxiAg4g1cvhPLfwfiuA2qBAHfDMYY6wgPGpJ2xpJ3aoTQQo1eGPmDMquErfZRaNC8jX9v4JFVT4Mv7",
  "key23": "4AWmd3xAsMHPAEo8TsyycRjDCcoVLg9ueohBRQ5kiVKubXTy41ApdfVUQasuztx663hkcbMVCdB3HmmijoX9j1cF",
  "key24": "3J8qpodEJHLBLzF7W15t7AMrCEM5yiEebyzndMqV9vtecfQstrmyK9B2rHjjxarJAcYz6ANgJcADSjvb8B87gzEn",
  "key25": "4D3SJwXELzWLeczziyoGCrBEA5f6D195EHNTq2kZemW6zKPVm1sRNV2RSuBJX8nYeRNhQ1pgBoLR4S6oZRFKqKXJ",
  "key26": "27JQoeryCUTFXdS1m6B5Y7jq3rixziyJEK4uWG2QwmNBPmMQvV9EdfhcMKdNQ8YXDtuF6c2rhUFQMS69BexPcb1t",
  "key27": "4GNu527Qskpcd8czHswLLA1cddYZ1Gtdm2NveGu9MGakx8fvarYuDrfd7aLgaDc3vvJyS1tWavBj32wv9XNQPQhw",
  "key28": "5rwV2fLsDAyu4BtZyuxAhjm14uo1oizdsKCvZ4qWrBncGquH9txeTdp31sfx531NLsc7Ucch18q1Xygcukja1HMw",
  "key29": "4YEVkFL1vstxwHuWZS2L46KgjzuBWqReRjBqD5bjrgZ4eedn6FtRBg49KBDDCj6fcFNXdfJcJbaLhJEafm61wkXV",
  "key30": "3cFQcP6Smd2iceWgU5oAzPuXcAq9Rcwyn1uhJQab9GG8EGnVByNHyTmFVmvv2zErSpvQAaU19hzHMAAAvkXVb1RA",
  "key31": "4CRAqPLKaWfyDzKYDQuvUCxsUsLsSamc8699tra3qEodivNAYEPqeXA1oo6z8vuVsg78gfZFouv7KsP6bNGrjQnT",
  "key32": "54vaEzPR48EwrnvPrfySy3rovbSX3LjKPK95HkUFLvqEtNQULEZ6ArrqxR23GmWRSz8ZixJqru73a2RSLUtp8pyB",
  "key33": "5iRoxaKi3s48rNbyMDkyRt1ZtUWqJbrq1qr4enQKyoJkJfaJ2Uu7AdbHib5qjZ1nuHuEGQE4UZgbDcQDsEohCUqk",
  "key34": "4ExYxNguDEwwELd822y2FKj3cFzk7snYimWXQgT6Pa5F7kcRxysy6aMrjC5nptrnAPggroxA6FCzkxaxXS4aQASS",
  "key35": "3x63tP6jEJJTzsBvhNyJY3rsDbDpmjp4siawTvCQsErAhq2Df9XYB1XshfjhAuE337P5s2BjKNpeFbQb4eNz9M6r",
  "key36": "3RgqTWfQ2bNwF74U5TFCtHFuiNexeR5JVxK6p8GzixsAVUnnsFyQ27p9fzEo17vaE1Dr9g6ww9L2ZqbRfB2DgcmV",
  "key37": "5UJCqSh54mf639ZdKfaHxEU9DoF1mAPXE7GHthhMJA4es2r13cy5sZbF7GcrkXEPJuofHQJVxgYJpjWjHcjxhA1b"
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
