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
    "4cHMzCf79qUK7xxRLsrzgaMmBRg5V9VYHsFMfLevvaUToxWgtBzMW3e3MtZaNRAJwYYUk4uZeMaxtpcCYLjJ9UkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RA3vDJ37AMZgxjQKVWLCeycYdkMdxFePjzvGUdM3Qb9B5KJY2BgG3mS5EkTX1jMwZSmShuEp1fCEPwm4pGPFANM",
  "key1": "3oTqrGnucVw5Ao1rCHd714zGSpt2r65T28C7sNDiftaEh58TYm6q45gupZC1hMyMPN2QYnFsj5SiDSrWipLnLj4E",
  "key2": "3ziDSJC3E2gsvCbBaGAjv7WCipnZ5QanVA6U1cGp9ZM7U32R2CXVa5aywrQ39b5w8h4MRmbHpzCYXQQEvnDkh4oN",
  "key3": "jxNa8SgsMXxAgkrkruD3jM3Ubuq72xu9sZ8j56XuzxfMDtVWSVwTr8Mo81amQV2FsbcNnxv2Yt48cypUoVTuVKK",
  "key4": "4No9uxrcR1R8fnLZyH37wDskJukFqkM2zfJvAdgfpXqDXZkWs8Eo8GVPEfpGi7EvZ7Dhf6w7HGdLmRniUhLjqD9q",
  "key5": "4Bp4pktND2VeHyGHewJLVh3xKxfkMmkX2LgAXpgMYxZDEqAsCAuSnSytENyMBwbyS22wPZSGF41JskotTuQcSj6u",
  "key6": "4dJAmBiUW2bzuxDTqsvWs1SMpTPaWtSWuwt7eRjsBFq8Nt5CZreZnZ8tFTSCKdWueytdJA93vUwntTDQZ5jzFiyv",
  "key7": "3hbYC2phB2t2Eu9Pw7AWs4kk92MCS9YCeTPnRenyLNqVvarmDGSceUDE79EirC38E7o3AcC2TshjLnSG6hrGaRxX",
  "key8": "5BTGvZog3T6gVMrW3uA48yqq2bvKj5jaZ6M6AbHNJmRpJVtPcHzqEKrZciRsQZtRRG6dhHsbMj9Rd1kauEgEfJMd",
  "key9": "4fcsmErKgGkmK7cW1o5N6DrsQ4d4m9WtGp8SD1CwxoqqDAxD3utFwYnotGgHZaDSPoVzZMHczLhcQbyMNi2kxTpV",
  "key10": "36NogyGUcWHmBShBL8AgV8Pxg3wpuxTczWSPYz65aAkuXqQFYAjKFyu8QTDLyRgdR7FisUGXH4sX3HXtcbfRvyMZ",
  "key11": "3mDV5YroHeEthBhoQc1GSLkPUeHGwm9YAEy4bx9bjk5qhN3fkENiccJqpt9N17naMBjAuTCtu3iczGEoQH7PhWiD",
  "key12": "2SR2P3Y7DXD7AySadkzQ5fakJFSzDhbyK3z5FYytD77Yk6nx5GYmFb9bo9rPkAk4AYLM155jt7bhEPJyPUoYuQjd",
  "key13": "22vzUeGMuhPoU7gRRShruvHt2TvV5rG3MfZcpUE735WVWn4gYUqEsbg1ZowqUfVTnGpQqXgj1wnBXdsPrfJTyCMe",
  "key14": "3sget5wQLpStJ6T8E9k85CRpSTs6GjsCxLQTURL2CsxSxbrjHJcqHc6aTv67hboDNXgie8CznADhVfn5HTj1A2Yo",
  "key15": "4LTqsFHu9Dqtcnkr1QZCbPWM7nvgqzoYqQ69y4TZ9n2Rrxbgba39cKVJBFa7k9n5cSBGcA6NGHZcAEuELumbzWjd",
  "key16": "3jznG76d8EUtJLFBDvkfcUqn6NWmCGegvezXAz25F4HeQJreXhpH9txWUNyi5oXjCzhqnygzhzA4ngbqCMZ55ryb",
  "key17": "329KvHvXMx6DuAPQmuyZbqcW8ZTkZHYUkDMo1KY1jFUzWcCTrdBnGRXvjizno5Uj3WzYhVD9nZBwL7d1fECfnSH2",
  "key18": "hqTVmzvaxuv6PsvsVMdYjvg7BRtcKLexpLytnJto9q4VTvzCJCsXGQySEcZfLMcjRuLzsKdx1LkTbndynN9KQR9",
  "key19": "2422SvGxDgW97zuK3utGSB2tRvpLH4AaZD2aNkouZxgZ2fru2aynhF5fFCqt2NTg89a7LwXhoDvaMXzTChUkXFM5",
  "key20": "4jYH3V7uzyei58cGqFKFiRZxMsyhNqWUA6Ruddcr9DZ51FuaNvCq5uZoyB9toD6J1g3K1E72LYPHYPYHfdAUCtBy",
  "key21": "4rR6yVjuNZkocXUtE2tEiAktKYSeZJFJn8TmzMV4jSj9niqV44WN5LqLyKFatdZV6ryaGzrsMpTu8AXJkUMZhua1",
  "key22": "4hD4NGn52gHScLYZ9gt8F3SKBimGW734bshA6WhAfMhLZgk5tcjrPqE624RhZT51KnRwuQZvRokBCzKEsAkhrN72",
  "key23": "3tG9uhVqhkmeftHnPhps9GvaDRJVMAaxsAgvhoqGJDQW39zffmj4RUv7Q6Z5UQ6choJNVfpaRpE7hWuJr2EAvuKB",
  "key24": "dRJrUYWW5mnQCxBCh1uid4tc4S6wFQJ772u5zLycKhbJdSpa8sPX4ZHfXScMWUWmKAD3Tdz1duL4CxAPz6pA3jt",
  "key25": "G121Bz745HvJumtJ35Yjybk8afeMC1uWPsmbJBw44KYTAqsS3ngX5topmCEcNiLaF5pAMf7k2nsYSTJQYzUkY3u",
  "key26": "4xDRT9iRMSyMdsdrouNoF7apmcGdKXNBvCXhogEbdFjutByEdTr1DnCyoqpDSU9D8ofVpTouBdRSF7hjRuyJrbpk",
  "key27": "5sQKWPxYt9YYZBg56FFUzbVB8xkHeaYmmLMfMMQNF6fHPiiCB8h4ymUm5DYyU346PAFPHBrs7WUiqfK8TCfT75p1",
  "key28": "3Pb3MyjrAWVfrCiJEkXY8T7HSXnRBkvsBVHgKdfd8Lut65oAhMJjGAAAiBmzDwcRSHgnMzFBZCysrYPowd6PSGyy",
  "key29": "3Qz74pMUEeFCheZ3tXidtH3crK5x3ZXW1jdFT9UzRSoGfWpyiZM54VJtzXucqwbyVAJUSRLDzzoSLKn3Uo28Gt3W",
  "key30": "2BoFvfGkyw3umERv5Z63zWtGrdTwyWdS45VbF566ZyA1ahHMQ5LVzfzbA5xTjqNa1yDcPZ8aMBjMmDVXMiKFB9nw",
  "key31": "2zaQqftXwjJkv8WfyVcssnQ6HccUuRMhhEVotGSwjHM57drKTf48yD5kZun5d2KVKwWQtm9nxPPtYChb21Mfstq7",
  "key32": "2Yr1b762JXQgtxtK1bzQ62WsydYQDsV9XyD1Pw1PG1hq763dQSomNFxs5E6Gh7VyrqxwjZ6GJxfnRNq2TBqu8ws3",
  "key33": "2QxX94jY6RH6si2V2Ezhti2MtyLhsX74qFdmamJpgDrsfMHpA7PKGzrK13FeAiF3dCfuoaLHhBwH1QFwCZ1yoBru",
  "key34": "LB7FhVJ7gNKX99YgwsZpU7fbNHPUkH1LR4Gqq8ZHaywVEefejyVq7xPH2rW2xTNx7cub3FQa7GB46SwBjHexiB9",
  "key35": "3ZCNoLKDnj4K6YSkkuYytm64WDXWotTbLpc6Jd9Wh1tsJQSv7N8rWfPQzJj6VQ5QyLFCDywhnthVNFRiTPN2k26D",
  "key36": "3teh5oPZje3qvgTZKdevgromFr99PmxAGwh9nyayyjruqBUXrXWrcYUfRZ1FmmELCdtRJsPujm4GvkSaconfzvQ4",
  "key37": "28nL6KR2CgrTZBYQRneVHbWgASpPuTcG6d6YDfsm9h8PDFwpGo5CiMKuo1fKcArXGdGZBPHLNyBJKo92seeaUkUr",
  "key38": "4v898wD5NoZ56fQAUhitkaK9AzyS2B6NkTKajrvjdQUHhxCoBz9FL2sMRk1rr4Zjh8FVzM1r8TKHSUFyHwTh3mj1",
  "key39": "3nZBjDCfLsTk1DsAFVcCXdyKmpk3K6ER47LCkkgSM1Nq2JXpVeFKyytLw4gQ2uDc7KhGVK6ikCGMTp5Wcn3d4aUE"
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
