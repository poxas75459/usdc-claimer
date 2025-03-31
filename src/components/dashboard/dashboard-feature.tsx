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
    "4anQH3JZXMaVm23rwpKx4XPF2g1Zii7ojJqzvX2Rdwck1AQbhec98PdUuT3WBDAbQEtQK5mgQzc9AscB9KPjNRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qnUuin8DLR2ZL4p8utzRkDmazXrqssNnLZjqg7Qwx69ecvQe1bXVfBRjaAnZx39PLtJRBr9x6EtJZesAyURjJ29",
  "key1": "4pk6Wt77SUJuA6RZnpNb9eJ1ctQf23MBJk5rgxHVEf74Uscv3TTT5M2T7iorTa7nSJWYdf14GBtuADw3KcxX2gLd",
  "key2": "MEHcLVAV4fwVokViHd8SXNsY96HZiDd9s12h6UnGvRSwecZUFCy91XSt1ZWokYsNLjUXrYxhj1tCYBSoG3agwGF",
  "key3": "TBdcBdxBkFk8BEFTrDmkJZpnNnpz96XJF4QQe8YVRURP7vFUXbSjQhjKcSjzsejWZMkCjVYCeAQdt1eiUfbuRqE",
  "key4": "4uSQrmhDSeNjaFg4brw6MF5e5Sg3MmzaLj39TudCQ4ATk6dFrquyxd74DrqiXSxLarPmEFJT3v2tyMLXMHJtEZMV",
  "key5": "WNzv7sRf1r8pFdtjpCErG2H39u5MRXEPjrtVeGBaZNFfswPP2RgJA4xzL61Y4CSjqRDidUXeXVDzaJqX6vqt8cq",
  "key6": "22LXs8WDAmK68z7D16Lewzf8fA4GDmi3bcNWoDEQ6HWt9j4vXWycmtwhfhQa4wid51gk5EsyUzcz69qJnSj2LpA1",
  "key7": "2tF8EPyE4LzMkcVqAMMii5R7aBVxME3VvCU6QaHicwKVXf11tuewX92vngQAHA85hTDxiTxWGajQZvQccbvov8eM",
  "key8": "2SrDvyThuH8BLz7QJq1dAdVwnSAQSE7tZFWz1gSy1HYsM2DaR5thUTsCDK4smkLg5NQdpksALRwHpSH83ctFBhED",
  "key9": "4iE8cJBbR3fJ9AVXK4iZSyNUvAboLnLSjD29ER3AF9iR7SGK2NwhqXiJZs7dM7RoiRFCLqYobg1x8jaGFke8CtNZ",
  "key10": "k2gt9WQH9NC4VosfDzNn4GxV9hdynrhrxRfFxiMH9QYQJANiRma62TMmdmUYJdosjBHpM1fyzNhvuUEGzNCpkMx",
  "key11": "4CBrF5G7jLXDcwgsEHgJdP7vkkKuwXcLR9k3Tt2n9mdndWxKzzrgjhiDV2RbLCjvstN2fTGfWF6qE9L3v4HWDH9Q",
  "key12": "4Nc7E2ZZCz9g8RQmgivmkVhRKbGns5wcSDi9MkJghpzoLid6bV61QU1t6iNETMZDnrieqSrZmiGZj4JFTvZFe6Z5",
  "key13": "4atmX6EyZsi7baBjoCWmM3vTaCFk5gYaDZx2pvTPJPqNngSJotDx4Dj664tX3bTqLaTKTAtrrXMMKrgdFHftUjbW",
  "key14": "2q3zMVcFQnx9kyM1tEFPDv8y9ogHEnFMhixRvN7hLS8cvAmJCzyfQwSJdrac9NNAoWENvyPAjrRU7iJW1uq3Sdv2",
  "key15": "5qnBQqDvQ7qHXQjxsCFkKSdPE4sW5BUxCgCZgR72KaoJk6dy3QBTbE47CembkU2BwPNkALJYVwM6Dsv9gn1h9HLi",
  "key16": "39ddsFxxDfG5ZY98MukTCmQfq9y2SZFPPhA9rEh7aRp4W8cTcxJsUqXchj2usszpkhcW8bdZSj6CRcbVoikjJdcm",
  "key17": "5Yoh12iHBpQ83kmZ2iNWUmG6gyJj6T5b9p65bNmm6nvvMoQQnqqFuewdxMavYbMtHMK6E8N3sCC5pdRhFY8dtNtT",
  "key18": "2g1Nmq54AVz5kUUSzXUYGfhLjVsn7M9y9MyoTRL7PiM4QU3vnbSS6MuVspq7VNj9vuPq8oKCa6Emhjj273AC5Wtr",
  "key19": "3Wh74HpCH9SPm3mnSLDnvsrn8AzFPRt6cn8z9RHmkZKM8dVanNDjr42PHJp2PTznDD5vasfNhTVfM7otbANHFrNP",
  "key20": "3fZuY5Brfy3qq69KCy1hAArLbxqzWM7foHqce1qLQYumSHnZgEi2EcdZ75cJEtoPS1cgtETjCeDoAnNuRDnRiU7k",
  "key21": "2RPWPrSRnfQ3pgFgeQbsjwM8HZjxDoyB3q3hpQvZZVtD3Rpxm9eVAMMCfqmf49r9Pwe7fwDR64v3SAD6Q3vwXsd8",
  "key22": "4u4uLY2mNecffd6ypbrJzitKpDQkzuVkf3ochcKpCcJhiF1Frx4KmxDJYjxGKHfMSVXS7kkrpueJXmVUZxhrSqQ3",
  "key23": "3ANU3NA6szHxKfpWjR4xCsF1GmgFLyZrGngUAZ6VeVTTyedKe5KUozqDTrDvudxvmV8HYRVzbEXQ51aGQ5huqX7Q",
  "key24": "3PQjxzBBXdMH34jmwhq1jm6VSVadE9RusPGaTGBxZp9hqcbdTqEk8odvjrruaWMG6Ax1g7PxkigyxVVFEDrtthj8",
  "key25": "5B8vQiDxMjHVyYCARLfUuVdWeEYw5bpMJsUYMErpFHqhDpF4aDMPaBqmWPtRkjyAEMdbbBb2YNGnU9xF8XSeQjrK",
  "key26": "M8EDLcD9uPY2MKdDsRYdVeifjH3XeucVDbqmSKeSZQbTRXjKJ6QAyGc9EvWSN645spRKYLzbgktJXeYjEADvQ93",
  "key27": "5gENJUL9fp4FPwjZwX9hNuhEy5yjfZFDDJD4sPapjmK8AmzHN7VWLHxN8MmFQWu5HR2eLyXwVc8HWG4Pgf7T8QLh",
  "key28": "57i9H8ThcQ3Bj1b3YeiMyh8A4GcuVNXr2y8qJPmC3KYUiyZrmD4di8KSCuRDsHjqtnbE7B3MHZkqo6HQhoevMLsd",
  "key29": "4Kz8azHzx2xRxLRLLETsNvKz2xEkRDMzddHXD7xPhaa6Ekj1XGdjGYSEjNMK3h1B3JuLvgoQy5CgcjRfMLE11S5K",
  "key30": "5uZDPyY9U1qDJPT4axtyMVo1Jb2grkJARrPKiAVDtDG6f2pQngBzBazk87rDCApsyNppENgX9xexpZM721ryKvfs",
  "key31": "akxhW3YXQWDqYTNHvFJe4EMfZN95N6ERrNaDPkejocWKftjjvVomUGbkR8L1z7Txr6psWVYbboauAdfSgmqmhnD",
  "key32": "WcAxPUjQ3uS1r6yAbjyXV52HYmj59uFb6XN6o9X2di5BZqFcnctoXFg4WpyTiyXrHH3yrij2K8hkKFdQx3wgXLU",
  "key33": "4cW71R1dBCn3ps8PVphCvDpHYQg7vT3wH2sRpXHMy5R7fLfAsZLh9PsywEJyn8PL5jncnRdVGCUnvxrqYeZsrbny",
  "key34": "36xEGhP9WXga3dtSFYwhNpLCGf7RfD24h4vhAnDrYVw5N4q1ACmZ3etgVpayS6JVymeYjLiW2HBk2x5tLPAdrVhy",
  "key35": "VniSCxJYuLRbTCyjisqSnroA4zwVxFzK3DvJ839t6yeJJLAraDQEedM7wVpEqDuXrpvTXYQXEdBGjKVtTmdgQAx",
  "key36": "52B1EzyGGzv76yKg7RvTmdVcGKuLKVY12Ypz6mEcyAqLMJXF1wc12k6ZorBgXaYFZdz5CS2UTmpyVQ4UP63rzVXx",
  "key37": "F1yXtaWFuDuHEtqyKCipxxJ4DATALDDThRU4rW1RJx9crYMABxES5q8hNsa7Npj5BAsQ7A1bKMRRgWVf1kEXPDY",
  "key38": "48zX3fighpGPD3gAdVWY2C1Z8D1uSiUy4DueJnshLvHgrVsQBi6V83boJgEpbZjVHqo8DunDSZXMdwV12jR6Yt9L",
  "key39": "59t3rsLbYAx8MH39WbbJ74KwRjSZn73b3i88DieT4cDnCRTm4pXL3yiszJrWgW2QRmNhRyJ5edz71L9tmL8WN7Ki",
  "key40": "3c2USk9McNAgCRabK3RSdPpTVTVEx2LHoFtvPb7SUN73GisdsVtBjVuRKvnDTo6S6dve3QiVH9mxpN4qhJk5QjS1",
  "key41": "wtcNDi3dsxeRV3y63QeFqSNGJvxQUm1q3nwW32ay52urnD8ZPQsDTtEwVrkMLKEbZdz4xkDNXu7d8qWVwfxq9C4",
  "key42": "4gz5UdRTXLWp6c1PTPG7aqDGJ4ofz33wXCc5E8mxFToXdKwG2LKb4mN8aiPcf18zwxFaA81y5mJ7w5PzksRBW16r"
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
