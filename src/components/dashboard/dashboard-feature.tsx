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
    "33AtPQjzXNFxYnTte5FJgBEogF9kPPdXT8KziUkUSPkS25BcwcZT2PJz9nrGxh8dc8tMKTwAe4t5riUy7cGEhjwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QwWZ1VfByc58FQCmktbdx8Sxa9F7z6z2YRtT1KdptgwZGd5Db1L3pmnxqzjZxTeTZ9rkspoe9PDS93RYxi9Msf",
  "key1": "2j8eoQ2RtaF1PY8EpdhGj4zMBsvqH61iZfxqapUfWEqZBuBmjSXcwkBgS2tbguMzgqQpQNGFzeBWdrVS5wG5LuRG",
  "key2": "4kznrDhZK57xjqyWLQn4c3FWaWwTJZRGifD1eReHkEV5gVAkKkwtUbiso8LThevcPGwXNDiXp5rf5s5S3uRyGbjx",
  "key3": "4aR4cQphtiBsMYBdz7Ytnv3eWZxbtVUepUp1sjj7XcuGxrcswaFALrMTYyxwjZDdiLgzWH2zQuN7UjynchTU6K7b",
  "key4": "2GERusp4HxjbeXKALeNscqayyNx2xwoU1i1j2EXNBqT9PHuyZ5Uc9QcqCQTkgheyt53hyq1b9xH2eQ5Dv6hjn1kf",
  "key5": "32sj5UjwWaPhpwKVMkqevXtKL1gZJHYJY5MYKFhUVCwjFou7LfagZrGhbAKf23y4Xyd65U6VvqEY1hFYFb4DTtu",
  "key6": "2Ef3yW1VLekMKbWVXe48J3KLjfiTvhNJSShWtGHF1RpjkoNnr2usG7qGgaQU5hRsiTS1g5svNXNccrSJUenk5wR8",
  "key7": "2ZWQx5bBeUMaptvTPqBd7nd2Ko2Rw7nDr9x9vsRRQMVfaj1yr88Hwo1jFTXFqRzaNHwGzeSVDJFE9zXT8RWbr8JY",
  "key8": "5QmaPGg5DbCb4XVcED98jTnq1DAKp98fb7ErLh7disYwfTFFiTVDzLBiHwPEX25e8pVSKCo4gKztoWvoFQF6ACqo",
  "key9": "2Z8EV2mKF39BJH1W5Ayer9ztTFAqGXLv3TniY9rgfk6HXoZ3V5NraVtUjtGncqjjVwcQAH3cyAHTrfMDawF95WJy",
  "key10": "2MF3YCkRgzJASgVJGkqqTktuM4J3MHhqbz7mtPTxkovevuGi6tJt919Dg8su35E2RFk3wGeNUPP6Ekw7zC8xLdgS",
  "key11": "29d5y7do2g6CRNjNJLQrNeo3wfc5e3D7Ybtsj4AqfP4Ygrh9y2oQkhmD1WAAtDtY5D3Lquk2VTGG6hLu7BMDmDim",
  "key12": "PsFx2HXBYkctWkZjEKcq1JNt8wL6gHeex3TX9PHhBo2cQPnoV5G2D6mRYHDktXmyEBDYBV8XDSzjYUGwzSnszcP",
  "key13": "5zFDskVDndGWgL3sV2TyNb7dguvPybsUV2EWwAEz2TAV2eHx3ktJu59QVXKUPepHzQMiHRJLWWNC5JwzWGCjFfSC",
  "key14": "3H1CS697XgN98BKUGWyYxKbthWbg6b4Cww2orUY7FuFQGt1snULq9dc2y7VUQ46VcQ3xRYAvwB7xq2SHvCeEDBrM",
  "key15": "5yrqZtquvaxRfnzH1UaJLg1eNbaUxQNLpM81sdm6Ws4GgM5ZsTUBnkrzNJ1UUG1vuSCgssVy6RDXQbXBs1fvBHx9",
  "key16": "32qim3v6v5srK72eKw3TKuXUBF6tnVmhrscybcXTjUswKCiNvPpZPsdKZSjuDapRzuYBXpES8S3v7nFEuZJsSNxf",
  "key17": "55v9tpsDr7rATBmzK6BjHK5FESiCKKmUY9yF3iDSQhFZySST3U4oJpZQ1w41NQAwM6c4Y97vsC3SF4EYCzJ9PR5e",
  "key18": "AKgxkwjE8rUVWQB8j7zYvF18jLmPniS3awE5LPhWFyimfX44ggdE4EyVHRbJM1XyW75aH2V2rH5ncVzGiA4atwx",
  "key19": "4c47Pxbk3LfwZw2LxN2bodsqU2nMCSDwFD4PJU2pMw3vo8ZYWNCWBDn3zHxUR8HgLhdAENHHo1jJvnNm5KwidjEu",
  "key20": "5ymq58cYcnNcLeKU34jz1TaasoXFeEfJYTVyydW2bFo1yCjEyi2nVzAkKZJQRT8SLWe1e4G9RsnTMb4JZDz4Fei1",
  "key21": "5Eb9reHUBkwYwih8ZZzCANMf11zHYzj9MksnR6jGCdLExrgYyQ75WgMXxuCWdGXvd1FsVEJsRBTXotynurCTEiM7",
  "key22": "39v9WWyLDgqvDtGd5uC2pAJ4DJo8ivBRooWQQMTDkMQV4cFPTPDaDvUhpmF71mXUFf2LnRv4rW7LjQ4y839Rd2vL",
  "key23": "2kxm5nKV1qEM2CmY8HGDRzm4ECzgZoPEZ7AekQtPQbMDNemAEVENX4sCNQL2JsKaZDyfu4JvQR1SCRfEMomTgLYN",
  "key24": "kyeBPDLX3MuCnRSRj7pFcazBVooVCspNp7ZiKHb6VCA6hMfQq8LRTgCa2SbPgfnFqFjQTW2W38hukMYnSfT6CXF",
  "key25": "4ohr2urCHWaWxVYG51wW9YfnQn8aqqwUBJJjPpnaybfbo8g3wyJa3puiHS8crRFWwjCtwXNerss4qwaE4zXCYNqd",
  "key26": "3VDYFWofaAqDe458GUaSiN3SXReQLY6rDAsicix7QkPMZQsSt5HuC17vA6AeedG6EQbaPNXvvokDNxuUVXRGAcae",
  "key27": "45JhwyCZSTDYKE1bQjcD4byTBp4eoHjUQjdVSX51L2FcZgFz6e9SkcmgiaSH1kPsy4WipUuKcQiHb6ihTFwLahCr",
  "key28": "5aCHxJbMFZKHnCensMXKCqj1Kwbcmdrtas3RG4GkwUig5LhMwVwKAqWoJ6vU2rpokZf7Wa9Bey89hZeB9trf5jnu",
  "key29": "5phxo7XyWffzy4n2GEgczbxAt1MYRGmnsjPjejZPpeXRJTXKuowLwCKCbF88WcGHhrWJ76eMGs3MdnfH8tboF71q",
  "key30": "5RQnB1CenoWnwdiyNFsdcTCuY4qyXBEWTjiBKU7JXNLPbXv6pAZPaJRhQcgh4ozVo3bLh3FPxK8nFD8GTYMxvevG",
  "key31": "4SnWNdMqoJA68aKZ7TZWKhDfdRbZAoqYYndAQEC58ZFVqYewTNfiCcyozZ9sRby579eSLhAj1JkAkymNGxKy632w",
  "key32": "SsN3zU4eUjjBrcMXfTPDvivtuJjgd1MWjAqicrB78yrKuHf1hRGfQBQ8pKUG72zRrY5uh2RHJ3ZbQQ9cSxE58p3",
  "key33": "3LiXg1RhRmPNUGeTBizyo7H9NpwGgM4PLnpMz4SgfghaFSRhS8vSSa8BXxQDbxpFcLshAzpKrX773LKjk39GPfdB",
  "key34": "3L31hNgGyBEnHN3Ms8sFkRq2woJLZnrcrnxYcHTJUU9J3XnRuxgmMaLWxN6fEbDrwyjSAEBJSuXmbbgHkynKQHbE",
  "key35": "4kSLBvgweofAhoFiEN1dwCr7NkiFGYKjVpaYx8ToYcagpWj4JZdhBtxeHCAHQ5stnubaXSmqEKbJ9nVxn3dpQjSW",
  "key36": "49sNWg3cNs9iwjsmjfVPHNUTZaFR86mow14FDmPSRKNfU8HVfnrrdVQVnr8q2AxG2RAXJyUWowChCs6DxPwTJBEg",
  "key37": "5szmVdY8WWXFmpJBAeX8oM9Y9S8yK3ZDB78b4gepskXfjHCrDwm1B53SnUqVmeTEXSixWL69kE728sjk5SbTuPg4",
  "key38": "23JZYeFJbE6FCg1v4ZDwp9GFJpsMwCEeHykU6KevxKjGmcq5128bhdpXicCxPrJUSU7aQXmMbqghhV7WVhqYNcUW",
  "key39": "5Z3dBa1Lz1jQo3pZeb4rXrTpYKotz1B7vHjQCunw7fh2enUXjr5PoERDQrgFUeiQDxgbZKzCsbepqKC2zSuh4W6d",
  "key40": "4nEA3ihEtR7Ds5hrrRE76RRxh7rUJx1ZJqh4KS3d1CepYHN95SDP9vhMw2ic4ekFrEsV1kRzHfej58Ynu8CVzf2H",
  "key41": "54tdwbKLYFrtHeHdQQmGTy5u7TYLJ98kJProTpzpWGf55Y94BmSsinRcjJDCUiw4Ad4G5GTnB7bWxdzwtCkK9vQT",
  "key42": "66uQKFzSZXCHjTcWDVDwYGFw5dYFvD4MnUaokfhToDfQZCG8vxE1VHAaE95H9Q2DVeCJz6uM8ycboH5buY8ss3Hf",
  "key43": "4oGk2PNdtXtVxXagwRhFmJLJ5n662GgM7TPWchLEiVvRtSwQHBZ77KzvvZhD84mQ38dawoyuLNAenznSCwP7hzY4",
  "key44": "3rCktR2ZFM36S5AL4kh6QqRtgHnfd2JgpLyHRFxyXxTBP6LEXEYcSh6auMHbJSj6oEhRXZGGm6tySpekf9L1kxmN",
  "key45": "4874roKsAxe3YN8YbivNtcnxACrUyMWsR8wi16sWqSj3vTvXUHnUqgixACtc2R8fL9LivGcdRHMTEfRzUJCAu14V",
  "key46": "4va4ikq5LHpXmjq87asxVVqTqzGXvQjaXCBc5Wt41FAyhr13YPWriuyFHBw9xSDvC88FtRfUVLveXHZXeZkPYd2S",
  "key47": "4gfZVdhEU1DQnqVbjr87zSRdBSPrA5v2rPLSXpZa44mT9o5nx1UVAMrWW3rb5rz9KQWqPF6GtfJvjABc7o2y7sQa",
  "key48": "9aaPfh1NSp7ZuwbD1Jw8qjFe841nzdvxBUJJshXsjC7JwENGSCwRwHKqGCC6jsVKdaf2YSVR2QLp3KdzvRaLhpj",
  "key49": "4n16swctp1HaNQ3ReUuEvMnUti7s4LdjZ6hBqASArQfovWUQKXvVUkEH75PECfKP68MaAaQYggppzLeX3XP8X2RQ"
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
