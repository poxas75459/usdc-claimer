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
    "gohw15mkxdjBZn8aQmTo6sbhZBXNfoU4X4xbrbYNcHey2c3qSpFybCBuHAdaXaeNt1TL8C8hPMC6G7pbwgCNTT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33U6DN2hMQnw9HbCZNa8qF4RdyVoTpvgBHA9py7KGqoT54ohmhn6Bi3aVodhWoocpiNJdF11ECS71Ee3BTq5Umsv",
  "key1": "4KiKp66omqJpFrDSXoD2eUssy3FuoLaxDyKbQBuR2oXauBuAyRkD2E4jhnFxF3KpdkQWvYkHsqEqM2NzFw1CGoQZ",
  "key2": "63Xy3jchLhW2BgYAxuQZvfDacdDFEamMuiGCzgEBWxwyyAMuK8p4XD1NauyzRFqoczK796NuNvX6H7RqFpAU6qkd",
  "key3": "5yUqH6huk3jD3ChGrojRmiBWEMzwTUWGwHL5LKABsXHNHpiJznXaCPgxrVxd12sqveY26gsycCjMqBfyaNPsapiX",
  "key4": "39hLhKC8qVpCvcNuoze7R38i6LKmqVwkyWDjbzeS2U3ZyfQ5RD8AvsQBJxcRSneSgqVp9ba2AozWgHAd9eX28Pde",
  "key5": "5S1jdVnz2AzfuAL1LirhsGNL6GBmfkXgfvETfFnm4QYzGeKcAq9LoqapdwbMwY1rd2JZJGHJv5GndbgbsJrJzKvq",
  "key6": "oH9Gf6PHWNDvmbrDdf6VsbusYg8SByGiirhGAMNwgCsiT7uvpT1QUH5UxWRfw3RK6ofoPGY8iCQ5PggLeaWg2os",
  "key7": "4jijUDjbpBhAToboviw7fY4wY6o9TNtfe9rpk6ogXJZ4gNm6sNR7PGN2dwqkGx5Th2iRVWHogvedBENv8m95amVJ",
  "key8": "3vHgNX3FkjH2CioTsf1ywwjEcG6JHieBH3fyohniiY8DrSV4ADBWYZt3RPPcEZ48VXZuJFtcWNCnYnDM1wo5EovV",
  "key9": "5tGUsPaZW4DGBiNsHKKT8fEubDsySBHNVyrRQYurkS9toDHV89uS3Uhzp7E44STofwmQ7WtZPvHdCxY4ZVyLW2fb",
  "key10": "4fjHzPiowTiC34uKWdGDTsZkfWDJpzvEmo5jQ3H2qr1GMyjq2sCWT6ExeRdg4nfLWcuJtyjAQ6RCbzutvwUFKrq3",
  "key11": "2231CcEJ7bkCQm7renLq8Tn4T6Bhm4QzDcxVosCs7k2wbGkA7Ez6yYqzJeeuQuTeR5aoBaoM7GNf3Gt8VRFXto5o",
  "key12": "3jteofUuf1Dep9peLsf7DgSnkgybmexk1VPhxpD9KAKEkLiU2FyuGMaD4W4aQ9p8HTt92yVJECg8HJEaB2MbXWYX",
  "key13": "uiTfZUfETRNCT9jcWgAjYmRAkSwoKEN1uuzxyfmcZzcE2puNcRDnEuVFgHsz9Qy9KhUeAuZgt4AuhBpZjwmyQJs",
  "key14": "5JDrNPqS25WVcv77aL7NSWvB1D37niwmJPH5AK7dM2eZYB3bsc1Kd147cnCHhqDkqMepmc59iThEKdgtypWdALxz",
  "key15": "41qc5pVcphiFyY4raw7uzt5Mxjs4bEoYp4r6UHi78QSCUfaprV6MAoFL3J6V4exMSgPTGGr7peVzPqWSB6RLziXt",
  "key16": "3SCe22tj8NV1ypJxursj1kznVBvq8sy7NXm53jd2PHVR982ohyPg7sdWw7E4Cndg5ZnJwF23bKDZ5cNai26k5xaA",
  "key17": "59MyHs1gK4MXykfPbPYpNtHzHQPS3vnz4yfcviiNZN3GJAwBPBBYG2qXnrJv3ij89vodM6fbSkRmus6pUfbRa5an",
  "key18": "3SbbrWv5wByqhNxnNpHT2HrVkgpa6XRx5MDrasLVn9g9Vd5n5KYqMswWU3GYD18jC9jCd5FruiJBMpNwmdtmwnLr",
  "key19": "LVx23NvaYpkdDMha5sioKun69Kua2U9gernQSHJhu3HYU8TBBoBuViUH5GAbfSPGFUVdv6ijiZ17Xydoy6T39Mh",
  "key20": "123QNs3Dre8smR88Uc4cGKNA34t9fz5jNmiXBqfgMZiqzwvmh8WxkGm92xuGRfyQ2H475aTUbaJPRZnHhEns6sDK",
  "key21": "oBkzha4Nd8Fr2Jm62hyNkkc5gZHYQvjNiyeLedrtcLhbmXQ8pw8tYMcE34uybk1KjSqyGC3yvEUpuREzmYKAyF6",
  "key22": "26WAttzDZUZomby2q4v94wavGry5VXxvht9DDy5A4Z9BVksJat26oRe86TCkh1Gg9GcJ6virLvwZBRW85e3p4TjN",
  "key23": "5KYEU12AVGqWETMmUrUhvt2j6TpTNDUjC3HdMg7SZY4nRPyWyCs2J71wozK4RNfJHsNsiYcASunVeAiSHUXVpVZg",
  "key24": "3icefnU1jhi2wjWgnWQ7Q9UUP9Rzmt25wVSyz1EJAY2y5Ni9jB5ftKXqquuHw1DyXXQ5KDjsQPxW8zBfNr61yMpo",
  "key25": "B16Rd8b4EQ5YTEkNAVqgoMtvYdcTucjdFwVZ8JiQaB52hekmFT1wDZ76HpdXY1ysdEJk3UVrE95o6HrvDK6jxoe",
  "key26": "3YvhW14iER6RpG1JkjG1Cf7FcjQaq7Ak1faDTCGdRKEiQ2treuSbTq71XUqyh9bUvwZP5j9zYRTwXGVNeY3yMod5",
  "key27": "5iJ7YnxKiMsxGRWgGGWh9d5fCApgXFk6hxz9VUpFXXwpi6rmBVZTjtz3z68HJ9HCwH9frAH15VzBJFTsHhH28uBg",
  "key28": "3gxxhEcMT1ZQNv5aWxRkQJkvtMWbdjY8BexBDfDTAXGtVYPsMNXNgspiV3XiB72VLFsDf8k7jomdSHUqnejURjoj",
  "key29": "4ySXtETJVexLyNW5P5zmz2yef2UfZXTN1xErxss5kR3Vp198FWpzketG7pG65cBnAerz3dRzpCKRRQnqn26emcGH",
  "key30": "2Z4oJUt9AddT1uhCbTcmNaszXeBvvpWNMPKANHEuTceVFE242o4yx7VRZj2XPvqHCeMcuDL6yXcFcn9HfoYAKpE6",
  "key31": "3VfaUPBqyraMiRW4AHSy1bbUdXCt8wgEb6CFoUpHee5cakFffWK3csHrSjAhPsJ1wZP3U8Rjs6VqQKeSptU4ne4J",
  "key32": "5LoEjr3G9tiLRkmEhZYUXijL5s26LG3DNVrTBguUWmbg2jHN3tDERHyQHi9WM3PyXsd2YGqUYLcnn3Aubtwc1KJQ",
  "key33": "2ZTTi5rPs3Mnn9mCPfhxoe4GdNPdzNcLVijYrjrL5vQkTX9YVY4sRjSeEaKymfRLziVM3KwDUKmmKdPTBnS4PKpG",
  "key34": "5kyUAYFphy61u7GQYQi3Wy7ieuRtRQu1KUucjVJryiRzJ5aZHFg9XVNrRGacbWbTvsN9WaYnvydbZEjjjvaHALDo",
  "key35": "2eMF9uDDutsAATjqLBexeyB9cahmoFZvmAXmEkdP5bTeB5hRxunisHvE1cbxNzPNtYvqVqG1g2q6fFWbRe7paF99",
  "key36": "5tezysmVN1EK4gxjzLyXYg9ydBg7N3LZs2oPHMdNoHm9VgNwQ9WwnUUKQvg6zvixpcaK8EEVr6rxEJfNmHCJ6h3e",
  "key37": "2ymioBqt6pHrKxqxZLDndf98yzgQGaZsNRLJ7KnCKiRekxP7xUR7P87ELBeYQoiS51UySXaTmbB76iBk8518XV7H",
  "key38": "5oPxtybKqhhgtab7P1b6yQbhq8B1pLYzDBbg16zCbPkAdsU6ooaFyDgVB9uvMEJDKHK9qbcCW5i6mB6AzKqi8PXL",
  "key39": "322LWE7hyr7Bt5Kr9JehqotK5H3RXpJzuvMZngnY55NfJSy9rGonh8WjqBcvvTbPePPUkgJN176zhgXL2jDAPQWo",
  "key40": "2yiJzXbhApyizJBnk8FGuuBGp7E4UdKi7ioYg4ATpJiTpCqBrDwcfTxi6KAhCAtMVJoQwYqkL8GfSVukEgq5qmx2"
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
