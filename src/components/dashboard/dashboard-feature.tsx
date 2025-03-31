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
    "52GqoS8DPbqs2ho38YTmRZrH5yBqBQWxLSxAd6sp8kmZEAMydYh1UQXyGrtPatcGSqmFnckxskVPkAGnH5Q3ogCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jo2LMKSnDUQLKej4a9FgKVdqcSzGUwPM4T8WKEqjaGqzK9HrXUwGbVkBGJU5Q9Q7SP4a9Yf9THxxD8eSTx6NXMS",
  "key1": "5PQfxj5RLTms8os5TmYZd8826kVHJCC2BoCsnszEmHxJw6u5iuyC6TSfjb69WShuRWDkMK1XvQqCyHGYRsAxQURq",
  "key2": "g9QYBnx2KnVPEscqQn8kUEbPExehSeGTDVx1QGMv5bdJYeVTJRCAAodi5qxkrbor8XkJ34x9PHPqQRub7QFki1q",
  "key3": "3oHEh56k8RATowxJLeWUEGnxgfWQKvQGeGcL9jjXFhz46heEoFv4PM68qkYUT7STse2bx23G5Nn6Zb3pd9VKohXG",
  "key4": "66BKi3iSyM6mgfEupqBQbCmyZeABw5nKFEL1cwE7TJoan8MMRzj9qKmGbEaaV8oB1dpvjBVY4fZ9eNbKd38H9jdn",
  "key5": "H3goPQPZLMXRm54R8hfYoT5v4AdKmjtau3hwfkhjRetPZekys4e9LKKJvSwBRtkdtzCc1V9py1eYyQRU9fwx83U",
  "key6": "4qoVyUKkm7UAZNQq1H8JHs8LenEQQ3NJ7RZ8Qry8nax69mbKW9auzN6NDeNAGrWfsGdgMdcS7A6fZiwe9XJcjb8W",
  "key7": "4uytGddHF2NQunYqNNGSRG4X59whe7GRbJUUiFymkFs4saN4RRbzdGWMkAEXXcsZ8E1ZYu9Uhj5x14v6dmddFUiQ",
  "key8": "xVPGqTx3Ub8cczz2ieumWiRRDavNWPGyvM5UzfkeogRm21JfgzSeTBiGZT3Dsk3Emp4gyEiEL3JX8Qc5FV7AYhg",
  "key9": "5LdqnAEgHZJhXwmT5x9us48MSUHNJFSVBx89XrZ2vdMzkToBjMgaJVYUHcGcAeAdDzcwhzvGLzcUarhNFGA174vc",
  "key10": "2Y9Vd2N3Fw4GCdHSsxxT5YxrVMYt4hPfQy5DjKc22aEJ1zg4UbbtN5SFtZtZY9YuXwjerviYhJXiRevQwpBJeBe2",
  "key11": "5ntmGi27hoMrFyerjyRvy5vaCnVNiuhXtUdezq4MPVm3Tr2fD4hLJgCD2LcfZh6p9FLGZ9VTYwDLYeYsnvTXXPok",
  "key12": "5W3uzhPyfXxL3GEMU2EMWBib1zy88cUaXNTT6fBLkg9b5cjXa49mkprGaErf3Qvv5JUuRKYLbKKE4KZwnnaPvHuR",
  "key13": "3RWC8uSxGtEtjh4iCNaxkKkanXxW4o9jKr6iqQmBAmZr85cu9NDmFfMXoGG8JhfTmMnMPUULXdhfUYXJJUFNuMCd",
  "key14": "3NvzPLCvDWssCkHHr4ezfxYQ3S4o2oLT2euf57awKJZUAT2jxVSMPgfoHt5qQgXvxyf3BkoMziFHuy46NHciqjNB",
  "key15": "2zqwERzBQAtmhxXKSxTF789BHkrAMxCszSiCsPuUtvjwdKTReYa2E9PdwMHEvuuqC6aw8Xnb2PGieDNWPuvHnJev",
  "key16": "38fhTBdifzmPwo1U65rZep89gvLacHpqbuJvW8yfAMNtaavtZsjqrorjoVZ5HfdYNLRHeKwq7h8UjpN1jMkTNtuz",
  "key17": "4PcUFPJYYfu1YViZibX6iufh1DWujm3V39tFRWGgfz4HX9Ag8zBL2jzHNu7LGvdc7qaT6Acso14fopi3PRSRWXFw",
  "key18": "wBedGoHnZvYMkKQTUQySdeoTuFLBENfrQmVYmt5PdGBbxdtC7wixdoa2y49JcLEk7vpzrdcqQA1JLsKXBUAjHRA",
  "key19": "48aPstPNFBxkJ6kae7gd9Tuu2gPh8vXS1mHsn6BAZJjQrceV2cjDp3tL3kZ6gY9tsfEnGZRQvKyEnXFPUWWBL4H3",
  "key20": "26Q1rJXNYDNgSPGiLTjQD2SF2LSKhv8VD2tWWrE9W4pJGzpsgpeqvxp5aBASpU91NN5qqQxzj3duBh67Qq413KUN",
  "key21": "2MLddmJ6ymRTWFPhV46XvuzGfQFUyhpdx39pKuqYXCk2X94CZj368m8BY1eoCeMRqE39oD4vjCs3UV2AznHhCZm8",
  "key22": "3MUZBseRAGhEBVshbZP9amo2cArwxi2YmAxwMu2RP4SLVZNEucquNYW2hbK3puuKjC3X3zvfLHYqBuXZmY8Suv7B",
  "key23": "4P29p6wpHgGKvpZyzgHMsg3qbAdJwTzxDBg3ssXN8sC4Pj8T3Tj4AJBpH34CR448SSKhbLJrCC6C2bvsTWP23CTC",
  "key24": "4Jx2UPZKkoMQi5DUE4WMBTMJ1owKhaYZe5fA3EyKCXKg9KBJABn1SSFjhpG96Ughjh9ad5QCWwTng83VAEQH247T",
  "key25": "3GWERGennrEQpFeXsKdUtqF467U1PRd4rBDp4QwGVGe8y7UnnaBT9GRVgjXfm2rC8AbMm8ipi9fnMMvy4wNhJV4w",
  "key26": "biWBcDupqsWSwK52AbtQ1iVNrdCRKsaRKBMzr1ovDaf23kxgQ2ZYKRpbtJJcBQAC96Xar5ENJkpE6DVF9ZjcKda",
  "key27": "3im45urwpmD87KGQxsUpvEYAayc2bafeLXDdHUFZVZfKhGud4TdFQhRJL8uXkfgQjWKPcdkkdzPk6kqtT3kFWFVv",
  "key28": "48sXiwNMDqFfGnoh8K3qJiutdB5rNySWt16fZefv8AfDg7KmQjbwB8w31KNjDyEtdBdDW9iGmEVtqaKPrr1MQzxN",
  "key29": "3tMukUJNaWEHtYeKuaefvQFvrpL3KSuiff8W7LeZ1mjtpeLpjmgsG1bffN98FsrF1PwL5THQYnhCMPAsykunacVT",
  "key30": "3GAbEyHvbeLxxt3723WZ1ahCrmcpV7TPUKbomjTmAFUmu2xKA8BV2Ty4mZGRD8ZiXASqwFdwMrxDfo5oaRufqoSU",
  "key31": "5p1R9ENTE82oVTNopMASwAa22KAM6ojF6K1uxu4PEiN1mcZiQJFrWfhAXyXP2Mm9imEfdHaq5921rBukCMGRpmq",
  "key32": "2kacR7Mkf4FuoKWq2DxaJPbp8g7w7TEyN7LMNiBFHNMaDn6WbddD5iok4wV6cLrkDvGs76ZhF8cpCcnakgNp3Cza",
  "key33": "2YDwCnbQYMESCjkdeNqBcwqdfnGFJvmQhusRt2DKFdgei7GGb6FihFpiJ838LQMiMG2dDmgZbgnh6KWZonf9meZB",
  "key34": "4LqEcVQSBnizAoFdD1J2Qp8BQqkHbLN2CPeDfkdMPkhMx6EwG8Ezbg4kkGA7gxoE4zgG125ayyeNaKuzTVR5JVjK",
  "key35": "5vCHjzNNqT2FEWud7k7qp7KVrvenuYVgFAFySNLFgciQvzrRRB6aLCM6me1tqvGiAVBxNQaoYVf8gmTkwr3njby5",
  "key36": "DhtariDBLind8mHkpymwBsEaZQbGV744bA1GLVDpizukgk9Czi3ueM943Ni1egvGZZvk2yaJZEsjqUGaeDbM5jp",
  "key37": "YA71kDBSaR2xDRWYPnKDZWFhLMfpzsuzQZiGmf8PQx1nd9bruWMuUrwPsEUvn7odqer3DV6UAhpxoYGyJugy2HJ",
  "key38": "4jHnKsdSQaYEZbFNVFtsc6tYUySECdRGcFudo58uRvJFK8KTMX1wsj1j8PYBLWVsqc32GkphepP2hQrzMatcgT7D",
  "key39": "4fWjUW48gM2EGM3KGZW274TuVRuq76CDw6Q2uTNbNJv5qLp3eypasJUSVeWSkgq4UqJbJ2bm9eUWCHAHCgUGdcps",
  "key40": "LvRsWnHLzkESGaFPxRHuX6whPnwZQdaPQjuaGFSaMw98ZyVWecvbfpx2DEpFGdDmEwYDk3hunwTtuak96tgkzzh",
  "key41": "5fUD4VAVxQA9n1Y2LtrFfBn4ojSB2tkKfDXxYdTVmUhL3wqMsSRh8Pw6vxQ4SXTSNM6HFo4AxgsXoXqm23hU3FWe",
  "key42": "4kKqapBuJadajtMKLHAWv4j6xHEmT4CmCJLn2aCYLAnkvRLsYdvu7nLpGtKRBvGm1v79T74FFt9XXwogagpothFS",
  "key43": "7jcS7VXqVzt8XXWDA28FnMJBBZmJSvQx2HZAeufSM25B3cpb9Y85xt1QrouavHBYTDmzugvtdyN6xHf2bQa15xn",
  "key44": "3Nuo2j5knE9Kem1rx8drQxFkVPhBohHCzdYkNPxSYHtUWgruVDPsut8jTXwrbk1X3L77cVo5BEvsK4vRHKBTt6kD",
  "key45": "38CuE4SbHthK53tK6UMY2RZacsa6pS86eeNsEr4drpUXhb8i5dZd8QqvCWQFe9S3VGtPYoUSb1Loe4exfvFwKDKa",
  "key46": "53BPEWPN1TiAedBNNPEquYW5tTu6xawitAdqtASkkSdDc6wamfHSJW6ATrXGtLniGHaNDSbAteMerUZzpgfWS5qy",
  "key47": "5DssGkxr9j8wsfsKzsELfVGA9VeYurnbn9EQ54ZdTKXXS1kycBM46NL8q9kXNtuDdzdHnMnmcmEhU1czvGd8c2hb",
  "key48": "kEsyD794VZzqiWHEtgTbse1aKD4Bx4p1ggTYqdqnw2Y2siFy8mFYqesfyJ2uG9qjuDV5sTVux6fFrkmEn5Z17k8"
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
