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
    "41o3XVPNa9fhdW3rfiCbQwdg5M6pnUdYohoprqWRAoJxWDEazt1J2FhWosX9WcGj6yXcSktq1yDrG4q9cK1HwNae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWMw7GJrDkccXVms6TMUUTzcjJKbsTBM8LXuqggAXDVWXMCihyNyuWikLtASkqbAnSMGmixjZKNxDJT33pZq5bN",
  "key1": "5ed2DaNXvJM81Zu8dYfgQC3EJNpeCuXMuWz8vPz43cecfvx1hpBdHxUQYYDTa7vaAJxxaV13mgqW7Jt7e1iCFLRo",
  "key2": "39e2eR3vdzHGmjThrDTgBdSr9neEfbCQrGxKpCQo1Pma8j6mBu2bxr8nW11o3gQKRdLYPoz6ze83tjjertS19aPa",
  "key3": "5aXqtuixKf5NBVdt7GmWXhTuZU4K5Ts9svZfZV53Fy6uCSSMWcHeJPUh2Vgn9rm2rRyoNzmpAmip5frU9YqQanfU",
  "key4": "5mTD8bvjL7tH3eifciZt96rbL1Bv42ZYPA4FBYx8z6DLWExC4inqqk2zhK6vKT37dFPakMZJi9CRSCEQEQi8vCnk",
  "key5": "5YYKyzquUp93PQd3MpgWfhVjAjeeGNiTKEC7U9fsBDUzY6r2PExFc8F8cJeYQf5WoUQk7RVYjdskTyBoA9uLo8va",
  "key6": "5RErSLnRh4CDrk8YZWNTDsBVxVeaeV6vTjB6fxhXKT9TrTN9UfT33tx3sEXMnxLFfvxuWQa3t5yKm1j7Ufuxqy6G",
  "key7": "5d9YffZJfbpPnNEKkXdhUuZZNu52UyGkJWSSYk9nobzpbTxYNqHzGYPv5CzhJh9oiWJq84b3qtF5gpPAS8VDDQhp",
  "key8": "2WPkyDbHkkohAKZWcpwjk9FWgVEHyJwNaTPBNyNFX2hkWWwtgaLganp2VAh2YuszTnA61HgY7165L4Bhy7rtf3od",
  "key9": "4PrVhoFsBeiKjzJBDBeUvch9ARz3ctnPNP1Hi82BJGgJbqhEZmmqrpbpN2ai7P9UKGWg7RHFMWp4hmQ3GBpQFHkz",
  "key10": "3TofsFnvahUwBLVsgzPu89N1kbajct2sDJGxyJT9nCQBRkC3RLBUzF7qwqWLiwdvhfddyGEDwN2YVcG9Mo4FhtV8",
  "key11": "3AUfJkk73kmEmEeoPvdcHCsxTGj7DfqwWAkacFFEsk2s6RkBUNb36QE3SXJQ7fFfv836Ue4eBPTnbqpasbZDUrip",
  "key12": "G54NdyhrqpySB7m8CvadnuQSEd4hQnChgbQPHX6s4Vph5x7Fd2mWJBvqR9BuKoEd7tpcMVpPbuX1BGPWBa8KXry",
  "key13": "5WMdyCUSFfJTMkdtp3MBpvc4SVU4hpmb1aZD2Q29VLkQDX6f2sY3CgGgjKUysutWgjqogwEjejEQmAUxG7vNSUU6",
  "key14": "5MHKrbfa79ci9Zu7e9FknaMivH8xvMt8TQiMQQS2BcqjbZa2E2yQ7rQT66z5KAYRUrW2XAhaHxXExudGTQugr2E3",
  "key15": "4XJR8RhtbWMVr4epnfft8vX7QmGeeancfk252SWHfoTt8U5pF1bs4VWa928yKfx1GBkJNFzd1ABzoZqA71wUKiiv",
  "key16": "bcAfmmN8Z56KpYJ6wLi8rTr4fhZA927YonjgNKMQxZ76G8fe152dy6P7C1wdU57YeDN1dSuoSAEgcfXPhcjCWzp",
  "key17": "krDKq8Auh4eT9NhqQADyTgF8UAFXexwB6gW6oykZ34eZZxWzZhnczQ9UTs7bzxicsHxkyxfcBkeSnkBL1n9c7eJ",
  "key18": "5TtVfVppfTfrT8GVP7V5sPnECnkW51BLeJFcqUDoeUxeFFqcDw7ZTrUU2wxXFevj9NCkoWVUD46xQqPXcGcyz1Vp",
  "key19": "56LMddzXwkKizzXDYCwpNQzWERZpkvEQgNLy9d2SdRfgtKiTK1Cm3xRk5iimVceDGdZ6xGQ1gcvzJaCgmeSer8n6",
  "key20": "3aSWmfCUunScRjTwfZvakFUjacKbGVHy85TVFPpk51r8UHum5boApEgoS47ESSffaJfgyeL34ezS32vrtXaeW3vz",
  "key21": "3y4jQUHZBVRnHQcFJKUKWGFAsLXsEKyAmNoyaxDRL2HZojMbchaUymrTDu8q9YMHN154xaqBh9SVPVWBgMvwxga2",
  "key22": "3bsw2oanDKtuoYr8hzQApepRM4heYUjAggWwyDMNsvqGUGCC2DJq7UtU89PCLkWtWDRMScGgVdxRBscoThXxDPoa",
  "key23": "Yrq9aoVZiZJtHkz5zo6nUJKHzCtQqXAb8U3Q53BsZoHSfmM9QZbudnquAxRcLRqaPDo3qGu6HPe4idV425t3TTS",
  "key24": "4qqfDA7RMB1WJafJm8LxGgZsir171pzTRvVACpxqRfUfDfW44kfMyeFNuYnUimECpr8DDF3ew3AamGsu5jhZQ7F2",
  "key25": "gsGNL5bFecSSiC17ogRAaqztN8wi6w1YgZqZGhAWAWF6UTnprrYa2KMXqa8o5W1791zbboSKpkLU4pTHrYwwp3E",
  "key26": "66UqLHBrw25uLdM3mv37TNUxPERPYfZxESFYRMNgq5pY67xNSThcm6tX6EPSSxGwHQsHom7awRmSp9H43Ppk8CEt",
  "key27": "3ERrss9g1XKhoxFFcSUEaWtsGNVvKdEoXaJbaZvdV9UBouhac3q369DrzMuqZ5aYFjtDYYkocdN3imhybiaCUNUB",
  "key28": "5RgHxSknwmkWkCPUXZBmMt8LBgkV8YcT6AihFwPmqVC7HfX1PSgQ54nn7T883pLqkQvYRa2BQEkcfCJ6uEgjZ3zL",
  "key29": "4uyZ4ubVdtgzdzeoeNanTuBRAeazffTuktn6nUBwXQJd2HVvnNBBpEqVbbBMacKp8KJ8KAcPKBK2iTR3e7BVeyWh",
  "key30": "4EG8BZ7EmE3YQGUyadi7SB42TqTKMTwvi8cPy6GsPmKj7RyUA381dgqHTXdMS6Sp329dC5CAp754HExF7ecRnvxX",
  "key31": "598ZLPZWGySayp8q6rLTuo51gL4r4dSYdw2akyXZz87ZRQftNvR74XKwDtNoDbk6gyYGJaUfaCvzM1eKMCu2QmWN",
  "key32": "2okv3h7fdX3AFsSphRYVBbzNiMEmiSqEQbSMKmcCJ49BC4A218hacccytsxTHZ8jArby6urKeR9oxMmDgzGodQ3B",
  "key33": "Rn5se6Q9oNkT7qbB3YB6PooBxYrLdm7m6iWDnNLL4iMKiLpxiaHUwU1hLRZu9w9TD9KstRAvmJt3HH4eh2Mxu7s",
  "key34": "5ZGnVuMdqLcQW65DePor42t3FyNDevka2MrTVW69m8brbW9X8WYcD4D1LvA5ZqHrC7DbJGL7qurpUktz7KZAnAVN",
  "key35": "2fnEGYXLGvMvvg1cxL8nUWxcg3nBjvsn4h2xRDQWfJ3KbKeKSCDoWyfWPb2nj99jS8JX8KmUurBU6jS4ehmyggAp",
  "key36": "5B8xb38nWjLZAftyjMCTf6ZYc7hYCFk5QU2RbrYRRxh4qBvgsGfRvZ7A9dRvy8Sxuoxtj2LoJNhVdR7SJPCaGrQ",
  "key37": "2i29rsaWQg38LtmhzzxobTSNmh3CMb3mp6Yw17gdpVbcJobqpsqQkLr7REH6pcMmxu8jMZTZznjhafP7xfSr5FBK",
  "key38": "4zJ2XQ4Edj7mBp8VGmTJzbKH4ocxFQRNFv6hG6Aud2cSeSneRsVhbAQNfkS1KHoNMqvdPhuGfGWmqbmuLxwsp6RR"
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
