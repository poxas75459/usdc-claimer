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
    "4TrT7tkbWHjo11Ls3ssqHoUqpizVZi3beu63HAZMRWCMwP3aAM3ozdWw2nNWiGnetbeehWFpdb9s7GAuakVZDa4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8g2YKpEuNgwUgVFc9MxeCHKPBpks1V6r48tR2ALW7zewYJobNR3SJAooVHUKex2YFfwCWk7Y4pD7NYkfXdZMK4",
  "key1": "2zaYs6e5RC93U3MEuoeZL3Ko2yv2kkEBc7Dpst1sKDbt9hfwvsPJmF2nH4h27Xc5csDzYKMmaPzMsF1y4HGmi8KA",
  "key2": "3HgtqAhskT8S9gXYHe77NmMtY5WzjUAweFMrXEFCazotWPVQjN8gPH4U41JSKaMzH5dfcTdQWXPLma7EU9Dq8H2z",
  "key3": "4UYv4a4WhE1TvyFLfJMXYLzFtpRYpaydG8zu5Aw5kehHPvjKhbvCpD4ALJvSvuzJFZvtcf4E3YJUXTKjEKEDZdE1",
  "key4": "2fX9oysZdHoS6ZDeYYuTyTaesstmvxw4gTjGhEbnGGL5xr4P2RXLAdtBTA5jAMetTTUzZ8EsGt2BbXTZ1WZuxe1Q",
  "key5": "5tAmkLq1XiUps1fVVmPy2FjzKeWMAWt8GF2ogb7Y1eCc67JLupbdri5LcjeH6uAZcMNBZGMKcKcZGXt29wwxad9i",
  "key6": "2osC3WCS6qBkSgofwo1SGadKQNbUKMXGnBonamFo7Uemh2vzRNrq1LNRHiJtpUivFs2otfuoLKz56aMiQmbAP3Ky",
  "key7": "45YbaQf8AGLaW7mUQ1wRJ1S6SJ4NuPKUysKGAZcdEdtFdBs4JTETXhEauZm9FuUiNRu6RuMzNJrqSL9FqPMwgbFH",
  "key8": "2DpMaqEDWQnjan9vDjAYZLya8ToRGMxuieSdKdwzFVfThDkM13y3DYPy3FVhCewnxwuj5THJLoG6LAw5iGEKgYuf",
  "key9": "Ri5thLakrEDsoubZLSoaNe2wF2GWQkNAFL5FXTFAXwzSciieibCHnDEcS2vUaSKxw5Uv6SqKPZMzZFJYbQq33nz",
  "key10": "5nLxkmaxBWnENkLvfBYJFcwLqLnjtefRQCtthmMh9DdhaaTRKk2XdVVuPqenJjt4kzjpFQBkcEo6XtuDcDvuV6mh",
  "key11": "2YHtCDUqTUkdR3beCsiK5WNo8d3XybGGWoVWpo17yjsweoAQGcTnFhp71uz6FZCBWtbgCxC8KnuMk1VBjinkWaVe",
  "key12": "2hpVTQdvZxm9N527mjATWCZqf1Dx2PqTTv2tRT487guqGa34tAPxnnYS8X9mUhVF893ip2qDgYcGz1vkwFDmGBdF",
  "key13": "3cMj6WchwsGSqTZTsyVSmrsYssHRY5WuXBjztpP9YqF5TDAKjjeM9t3WRj734aJ5NHZ4GtYCbuXxCVnXcmn2mhsW",
  "key14": "2v47XoEYRPVH9bNdeh56r3aDUmpWMNWs6cY3VwM967q2QB8Vdu5ZnsEzT1AyiYGGzyPSKa1wZDk3dmzLu7GLymyz",
  "key15": "WgGFT7i69AdzvLUbhzACCjBE8nDp52oqeEBiUbp9EeSggo1QPPXMReodY3XoxWDdo7svpR3Uj73wvyoRtBWdACG",
  "key16": "43Qqeo3RmPEQ8LBPRC5dTG6p9FuiVWLiWjEpL3HcTDZzEGsXCK7kgjhxbFC1SyDs5bFiobDJY9whKSjuWxMoyW4r",
  "key17": "3NCD6kgLEWcdmrWX8bZGSRQra8u6n8ebnsRC72fnQycsWPBnuTptnGiqpTz2DmvAVxKjcUsmyPuUGac3EqEaKARk",
  "key18": "59vmNRqypXGYQSuJwUEWAPXss24u1avANJz8Yy2SF6CDh5KHfiMs3uYWZGUgNtEKdSYtqs9QWjtsAcjCSDa5VPnF",
  "key19": "3jG4sikrv5wsV4ossFKg6QcPvf4VYbf4rzDncTBeiZ7Hh4m2L2B7NWq4b3jZKA2Yby5wy9xoVyKmUNJkpZoBrzt3",
  "key20": "37bU2cfAxzh8iAtEBp8NhS3nEMEr1p7YKkvGGqnub7QJAbowgp31neAEvH9QTw1vuCTsL8YdNU5vqUqmjzYfG2tU",
  "key21": "238QRzzvJd2FDmvF2b3j2h7WSPx4WQ2TPK3UP5hJFevHF1axJdyVKnaQwtQoqJn35W2TCVkU8kYgqFLSjqcDdhzZ",
  "key22": "4oX85FMyuKg4NkPdijRjArsdjw9ACsK6godSjXmx41dLk8FuMfBw2sfF17nrjNoUmrTRkgATu3nou3D1xCq73GhQ",
  "key23": "5LyZ7Be1rcqEVcoJT4E8LwHMCHyEaupLm9twSsAYzWhupUjSzp86zaDvPAZn3165RafL1mdg1bwzKa4vbqpysD6r",
  "key24": "36rqzpSdni5g5gtk4aQLM4H3S11oQXJ89my3XmvfJL5WMy2RivvV4LMBhKvBebuexfufVpaDi2HguPeJGnq4QkXa",
  "key25": "3Dttm67WA79Jw6zz774KLvpmtms32xnXNA4fRKauMjN4BZeY2TFMf66rTyS7CpEUgMk5TAHwRWYwbae1Yt9PrdY3",
  "key26": "2SmbfKvDpuPZ7skQnXBJhfr9hgoz37xAQkzSp3B6zfMH7QVUu9noNWayzePSBUVFRsce16xvTvS9srbaYLnaCZ1y",
  "key27": "566HduPHptjyAVdPpA4S25DzSgwJPvtLMhYDZQ4nGHKqAxssBUcn5FAV4Jat2jY9L9W5B3hG3zawR8jL2ddLugCP",
  "key28": "24auFLjd2Mc7fRJhHJBxxmbJxGsVcjq1vJh4YNimhN7egX1BvUXLftBoKjJtmWth6qg8nqZdtz8Uy2Lk4YTjQ1R7",
  "key29": "55uFcMkq5PEKCvzcskMMsrcisgBfYhTgqJF13YSNNzV2VXcff7o9P6A2ksi6GNE9FkvL3rSs2Ct5JmtXRMq5F1Gh",
  "key30": "3WeBTQP8RrV8uAdkSueqYN47jRVoiTrEctWsGbQ4wZoumo1xw5gobsf23MGgAxSpncTDK7XzgxBCEn5Vins1HiGN",
  "key31": "LtbS2yqLNP3DD1wHzewhX2WdCzT5tnie6q8o92JKQDPJc32Tf4BVW9za4FKKxD2EqYJMUnMaD1okN9x1bFasc8K",
  "key32": "VP7bMv2TTMupt4nCovSMTBUxuou9WpUJ3KthmHNUhdX8F8cF6UnTwdDL5cU17ocjjVRZfZ1WEXFXU2fx4mhU8jQ",
  "key33": "3qMGTHeTy2Ta8LV8ekL5CHrfZQ75GFQwgMvGjGxjwBrzwgu23z6meJzPsmtu2T2feaWF1B1SqENJxtDFWfGGuPUv",
  "key34": "2r9v6DDLdpeV5mF8f13cyEZJdxhTX8HCXW6PeLroanEHTSfiLjtrf65RMhKpZUAEiE1kzvraWzaeKYdwZiSuYUQw",
  "key35": "6456dyTBPFJxCKZSqMUcVBXH42A2AA842fUBv2EHWHviHLb9DDBFqtN7zg446Cs94MLL6P7Bd1zqtU4a4MN5HjaW",
  "key36": "36aca5nc3BB9adtzEn6QSp5SVwPQCdkvMAXdMkSr2SLu8qTGQtVQxQ2EFt4KWiW9ztfLs6sd2sUyPAn3sjMTzn77",
  "key37": "4xdXR2KMQLSWSqySuZJSm1uTK3Wo6aKoARGJoSePtVxoSp8sxcrAiHHPTaGCota83dRHhePdkpw6oVBPom977wut"
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
