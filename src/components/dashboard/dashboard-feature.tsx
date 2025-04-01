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
    "2mL9WvboCNLJvy6WYs6fMcYnGnj7F7WGypAaXtcFt2t5r62uiMo7nndy9TMGnt5gwFqG9ggYnFtxtytEudzfoUhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Je8AxevMxZKDTitKSafUrPb2CQvUyzZGWsUfY8QUKFAGmsd77uvakM82qVGR3pYAd4hZ6FZWXWN7zyyuBDauQw7",
  "key1": "22LiRPGABd2cCw31kDSx9c3fE9oWu2PQ1hD7iCtRR2rEJwsSCqQGQ7yF1sCGiRhUY5VHT1yEfABDeoYyMfNPT7kU",
  "key2": "4TR9QSrsPU1jSUBc1BeGsYFgMGf6dH6wknJRBqjG1uWPVv9iRNxSttvzPvtCf9S7t8PStgfvxrsr8m86FGXPecnr",
  "key3": "5xaQqKH3VzB19raX7kask5CA4oNzXJ6q4dB1qwUgwAowETkB8jDng62zv2xw4UiSjQmHxanPpcNS79PhMemXEfxJ",
  "key4": "3y3NwwkKEM1K8QcZayJT5N8QVDuGrx1KuA9NdDDLJvzy9sBngriCQehpp4FDZEx8F16r9ipnV9pxN1oycGdBC2E6",
  "key5": "2y3x5K53i5sDuqhnSdHjch4FPSEUWoag3rhTGbWaa42zcrj94BYz2fmmX8ZnPm26vTehmVn4NKbTf5CTcZb6hGd4",
  "key6": "5HGEnpvVm15X6MzXAQWpauNRHde1FzeZiB6BAnkkDLmHqmv8kQjguZpDp2cwtEKoG1TRdogef2uZ92nAu2GU5PGK",
  "key7": "5aSEbbagd5nnJ3dHaQTsEjDLoc1Y6UyRutFZPrmq5skpRJm8tLRbxPWBBdrApiL93R95fcQwLyXhsWUwXVnkCz5F",
  "key8": "n17MgExidADgws5oKZ7BvmCBybJ2rZbgcCKWx9SGyZFsaPivnJa6ozsmnSZATv1we9zaXQ87BEQtiqGX8GZ74G1",
  "key9": "4jWJuoonXWPBY9KBwkoVCrXfNaXt1ah8stLqGhKm5YejWphC96mAkxYb3CULarFhYMFRsxBggr31XdodMfG8brq4",
  "key10": "4A4N19PhoytwXMt39Py46t2SHSjQbncPN3RjLwE575XuAD9HSDUp6evoeDGqri3ebWCB37WfqxLQrkSta3wKyHPi",
  "key11": "2kBkcuVCNjSJs4mh7PZLQSDb8dJF8hBS7tWSJuveq3bfd5GuGd3URAapCchuzwGdJ5xZQp7fybfBTbMpNTz9NPMX",
  "key12": "4Jdi3FBnxbGZpyrE92angew5egEpUpBwQ9i1gMTBHYnxnh8PJGC8pgSoBT8UpeSNv8MPGJwEvuuZgpgsdUEDuVn1",
  "key13": "339oTH8FEJGcmypedSr57KZBAU5qVZUc4zkSYCG3xkyttDDDpD5VbX4XPewKY5YZfk3yPqC6Kqem3VXvpAxCSfki",
  "key14": "4ozf6eUovbwTFEnrSc1RyrU6GyMwWmhCDADRTS5xnHTZiwkaAb9qLjgTji1YVV6eLxhinmXCM2J6c6vmnrdTaybn",
  "key15": "3XTCMpnq1fySCS5TfXRF6EDXbWTRWLRDt4BYhuKYX6us2bvPV6uDqWkD8f2hYPRzfxjsJKeCzZmfseXQqHKhZoUt",
  "key16": "3HgLV7TuB7DiyfYDrs9Y93CxtNRyviJNEYeUVZbdqSZxrNiMrtg49nQ2SNDjW5FACegnR9EfEqkR4nVkDs7A3Mdm",
  "key17": "5zvgvLn5QFwW3bnPU4c3oG6uyDh1PvVw5kdKGBN2mWBd51E6vLXpAneanAkXuUD7xM3itq8XbiSbYQJ8f3YQ5uwe",
  "key18": "4ik54bcFjkBX5BRCNX1ZpLgbCkVkbueuj68byndmK4SK9zp9cTrKR9vYcRCWdkUY9EJzcTRVZVt1pg2S8aaumku9",
  "key19": "5xTKqhzvGn5AkY2Hwfbq8kFbXkCTkU4em5h2KzvegA9XRQh2HMPE4ctZ5AoGwEFa9HXdMkk9VUS9px45Dx1AHTxf",
  "key20": "vzcmTvxyGwFrknPRz3tGAfuHr5RQdMqFZF6au1r1tBMHyhe7xuBNAmn4rGXin1ps7dDVdkY5mTbMjL5HPKye8YY",
  "key21": "49huYaCxHJCP67UbaKg4m7vNszKCV9uakkpEuaGZFuXekUwK8LJiiYnF86tja7BQWAqdw56tLxRaACANzocDVzXN",
  "key22": "32F4rqsEmD9KdwhusuzLuiaBmatD7FqNha8iGKhck7qiBY4ntUSWVLvhCmt2mqoTwVxnQoiFTEXFaxe7xqApRnZ4",
  "key23": "546t8ZEsmyzH1Fybog2VAGDwJx6ZKZHdE4riushEKjffjB2mtLNSFAbp4CZABexPrMQ2UUyTDCpkLx7MGzPiewCw",
  "key24": "5z35uTMTTbVGzpXxgGA4K9tRumQV9MXn9cyQuCybNiL1SUVxh9uhcTd8wKnPqCXroS5uS4ob9iHqE2mRXCyALuoj",
  "key25": "5QYsuFZPKTy288tZY6PXaGq8zcQfTXHsrz1QuWVvm5Cwf2FfZ8BajXAtGjYUN1L562k8ZphTkVAsuq7pgCsuHikp",
  "key26": "64XJPpqhBebjmj4etS4mXfKzosqHEpLXozwoAUippy1d9efLaNJpeG1HE6pcEgnpAx3MXTSksprWyfhR2j4GHzou",
  "key27": "3Q1gemyntevoFpN5jKcB7WgP1CrZ4LKQKZnT4BmYMLyeL4YykAGvVbroaLpPguLa1rZpEdD6EEFVdcsdt4p5PuDp",
  "key28": "tw84pnGxGGsiEzvA9ZqTT2io1mz9oYCscQJMpzx5qkpPBvcmeg4rtG88HNkRLJJZ5f4eDoqSVz4yMbtoXmLKChs",
  "key29": "3G628oGnU3oS2KoUBgeWARLRKH71CX4Rn5SaedDQwB3j3iHtLyvM49vt78CA85QfMtF2jxqfziehfuTmATLukEpm",
  "key30": "23F2EQsW9qKJeUPdtzqmdPgDvzvSpak39cHwxq5HcjgoQ9X4koW7XJ8dTXFYW2tUFAR9crR66FZCmhyz5WvifcZx",
  "key31": "3SWzybLW9LwvCyXETJfpX7R4LHkbC3pcQ4R8p9TwD7Lte3TxMwdwCK8sszzQQoR2ZZ4g1R1wFP3PM5CL7YvjfiAk",
  "key32": "5ekdTZwDcHprKgLtqUf4h6WWR8sBVXPnRocbF3SV4Vuy1ch4iVF7rQwSj7QL67hqnkwPpXxps2nDYSCkSu8d6a2M",
  "key33": "5hpprAVeSkfmUERUfJMsArEgAocSv7vKZBXGDB3ZdvhqS91YzRHFVjmiNZBwsSgazyUtaFjnFCaKYheJAPTmE2bh",
  "key34": "2ZQ1pyBp4ssbLFDreUs6r2RAr2sBQLojg5hhuUbxEbJgKuSVxg8GqsYv4czNtuWzXauAA1g8G56jiw543PXyUHZX",
  "key35": "5RaxyYJqGcjzHmeRGTjNR5Y1DF3hcWYdhNVMHmJEeckCmyaAgT4Mwd4o5KnqyZxq2BKaHyQzbBxy9ULSuQEeATS6",
  "key36": "28hgnwbjDBqA4Bm276HzhPCDNUgA1Uf7G5FTBoE2Lmh3Aq8P6cwZRQCcmLevLWgJg3WfG8iuUykdhRZBkyjuu36H",
  "key37": "655pA3uhRFUuPVazao8pKSYFey1j1BuJLG9qjTLGq4eTzCSW8kM9ucwZrr5k6NBmj957wSRXjiSgYQgqyL1G6agV",
  "key38": "5WpaPzZJ4Pj9yR7VX7VL33GdUD2Pabxhandxi4sksUXi9ZqFdJ5SymBFZK8dnXP5TcQtgs3tA3QBwgFDNKQpdcfq",
  "key39": "2M9wNNbzHBjBWtETpZKasfpjCSVjJxKbGdoNVCG31WC8Gb7pfx4kwiUUzT4CeFrwio5zdWCWauXaEPXzNAg9tm3k",
  "key40": "5jEYCTfjjb1Ro27Pa3G65GqBLcwT9YKpEZrfi4ZmvFiA7kA49tauFcaPzbbkv2eDyrK6DSMnSVHqNWCeJ3tpaY3Y",
  "key41": "2PPH3W8brAAqAx38HoUFAafafWPL8XuWVi8CVdn8z72EWe4QRj9stGxEi88N7fLJqd2PAum7q65UATGXMnZT1Zap",
  "key42": "4s2LDH1ESyUiTndVnPB2vDpmm9fVJp5maujwbe1FTsQ56THtYa7wgSqNZij1Z49qWwCxn5E8hcXdxV9HMzmmnbkf",
  "key43": "5EqxR2YCeB3MDqVkJ71wgiCXcYhRdCFvXTsg4tCHeqQPunqLGyLLu9UZKGPNuiR8FFeuNXzLGdMfSYyqit85y2R5",
  "key44": "4q7PTvNQXPSqqnCEcqh4cM1szfYMWVc4H4hd5xfrcXCkngyC8t8GVRQK15U3Ut3rssQMoY749MHJGuYBa3ZnDpNE",
  "key45": "2dc5QM2MAUCmqcboox6VbNKPpuKsijji2WKaT51LETGzJD4Y9qiKBCNy8QSf7Wuo6ohY3tLA15qeJQUvyBZkEEEh",
  "key46": "32Q44QDr5SBeXjfsUfosbedHUQhANfG8ioZ3Fry3YGWEtZAeNDxaDaGNBy5cCrwgtPM7AvpvEDKcfVTpUtCnr9ju",
  "key47": "61XNraumrSHHDaACyKwdYT67xnWfLifFwQuU95avtXYYnMtQXReRNS5DqMhELD8y8HkQQjxQMEccEhGcwEYRXPKg",
  "key48": "2UGcfYHWsGGa5TqHspdPzxzJZxWc7X4tnLky6f5XoKGMwmdBmWqzAT3mnsFdNwrx6XjuuULo9GWBLEJxNT4MsZ9y",
  "key49": "4aCvwPYUEZM8frpvXjCtgLGnHeHJBtnkrVK1v6tUsRe9T2hGYQ6CzxToiJCFnPCMkC7xYJQwqRWA3ce2sQz2M4Ad"
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
