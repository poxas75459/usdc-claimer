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
    "4ipHyLqv3pqmqzR6Ce4ByukYVCiEcLdspo5uYNApGTYhiTw12vWtrNvidCEMK2A7n1ULqZy1xaHiZMD5UVvK3rxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52N7sbiib8sGYtmQfgF9NfRAjd8LTFyRz8u3QfvNPucSgfeq3YBwtRxUMfaDciT3vsoPgaVcjPYoV8YGGwbZ7dT3",
  "key1": "3SGixupBWsoLEvCuFnnbWvwWqCgsRPHrD8qnGGTbivnSc5taq19QnZszBgbvbSV8km3y85gMTLwJDmNSaTqPmdKZ",
  "key2": "3sNyKFezT7YNwAsA6VhaYi5BhzoHHTYYwT1oAMBCttfaCCHPa152qmuoGqALx8eR1avvY8mQH4hrmVkiTSDJDkqD",
  "key3": "2nru75vU1osbVD5f2MTZn9JdeXYQmNpMYSH2B7MokSUrNRGhugyTPEtkSzYjAXwnHNRTHZZAGnSG9x75P6SaqZkc",
  "key4": "4SjxWuSkDgsavGJHNfKR8LFts4CbpWMHiQ6tBPhm6aBj83xGjWA1Tk7LBjYdqizRF3b5YJN9EjNGkdzpdfYb2ub",
  "key5": "5SuZMv59kCmRrPqkyuvUUWewqitzphjSWM7YF867rJQxnpq6qSVX9tweosH9M7HoevStCfjb2VMJ1M14evVVgyip",
  "key6": "2zK1tgk5tpnxPR7DVXVc61WtqyvsXUHKvGp3eaV1NK8oRTEnjAWjmBn7dNtCGwx6Cb8qwGYCC7gLBdyvV99Hrpo6",
  "key7": "2KJMoAMDDDeseJat5nvpQcUvSe57gXYBKweA56xAVBRBgmnL7WyQH9gyZRMLMpGytKVLvZukKzTcMq5SxoxsUVSB",
  "key8": "3ZMjP16FLyJB3Kw3ZMSdQKV694rdau68tRqqzqJvS5gJ1kGgvMxiia5LVygdFtvf9mANGE8hcSXuxK68a3sgx7We",
  "key9": "SYFRff8s2sgUWCBypiABKDosESJKYWKT1ojpgVrX5UbLE9P1ybNcegVjJQ8smoSdyjVRb1K41WcwyJXss1TzTWe",
  "key10": "2xPaYrSeRDJ9xj38AyJhDeGZtYutfPhbDb6zJ9McEwDkzvxW4PzDqeNWuVnEwmqEgoNNiBZ5pEZSoF7ZcgC3AgEk",
  "key11": "2fCnWTDRHbHq41VKE1zhCaoW68EzisygYgMia1wwHhpMugnJPyqhChJnpY1HDL8Gpw4iFgu6QDRzDg8gyJtANRQj",
  "key12": "5c7pQ7K2xQnRQhuD7wpJbZkx5jayGHqGPuXQ2TZy3Ht88KHi2teuJdzFdsNL9Dn9quYs1qAsD4oeTuD16iynMQwo",
  "key13": "5nXhGP9e4u1Bw71hqtG4rVbX8UCDVGEAVFHpJpR9oXb2hkczSemtBfBwNzJhd9mtCzrX8EkPFTm1KeyoiEcGb8dh",
  "key14": "4TqPAWj5zqXU2EWjuDZsurJQZG3UyeiwyETpJ4t8k7aFMTPahwbbVbdS4WcdT8iVpMm4S1xxhMaM8k4EQ9nnyjYU",
  "key15": "3aU8DawEcxTAyytfv4kjkMRP7sT5LLZdsPG2bxUFFmcqSE2KLr5JHFJMLT38a5fo1P3cw2X6if39AqzbRnh1vQDm",
  "key16": "3dyGPDAecirgvnP6XRXiYCC48pCer3LmwJfKr1aeVCVaF51kkUD5dZyHERxC4DTKSZvH96Na8isufKSAuPfhJ2BH",
  "key17": "xEzFmszmj6i3UudQ3evtsb2hJBr5av5xtuMoqUru4bAjHF6g7uDmX28RbxcDdoaRMXwxiFWqvsHF2joEnwsL3QK",
  "key18": "4iSRwdmFR6imivZeAxatbvi3dKPDcKxdw4gyMr1TaZZD7EpC4NVm9EBrAmVKMwsA4C6o9zCAvXRmA2fSxyBMHntF",
  "key19": "3pZ72Ajzu8BeDX5CYuLn55pw38x2ETrSDxurs9NyR4FJ9hpcZr8SFVSVRXGanuDT8Ffr1QhJ3cBLKtCPmGapvaic",
  "key20": "4xQmUkevSixFx8PL8GbwfaK5WSDNDmiBbbKfJx9FiLdKn3WqcwNhqJu4SRYnEV5t1Y1ALVT3ZXwg1JsrMAoUibVx",
  "key21": "5m7QoZgSS3i6isc5mr5QPumoRNZBL4cY49vFSSL1ETfRnWFcnvai1YQPFJHhVALJV5VGduVVzj4hoSWRnFyf24qe",
  "key22": "5rmCi4hWeUEgTgZy56UiYLqoZEjHsL6noTHcuFs2WnpjVWumSfFQwsvTsb6Lyq2nd9CtndyZgTTNQbNeLyEkMNjB",
  "key23": "5j1x7CTRVj3DGFZMyaaehtv28cK369HGwE9mkXcMuBAoqpkcrHLd8QWeV48YoHLzVnvKWB8WgcA6bWJ8bdso6L9g",
  "key24": "21aLDK7y3KTdj1P3ogh7E9PaP9EwdVHry2KjLceU8ocDy5ZoYgc1t2s9LHw5Z813sbyMABW5S19isnxL8pqsJWeF",
  "key25": "8B1XSmuhi8isyniTu6bGibABPV3aVMAKtKyV6jzLTr7UcRmPp3Berh4xuQ52Ekhr64uxHrXJdRDUeMGCGV1brA4",
  "key26": "3zrwKb2ArK2LHF9AqPAfYhAHHNJ4U9GJszoFBRG2NT89MKGFDGUnMTXcvWFpeNteus5sJoCzZHEEPCG9yfyWXqt",
  "key27": "vUHvEC85EmDv7E3p6kXMjrKA1viQii6BgNuRLecEPLtGRdJgR8CJafjUeVoeyKPxKDSbAx4qsHpovEvFbzb5r2y",
  "key28": "2E5Bz1S6D36c2zS8Vc7cT11V7A6p2zvdZnC3o25XsEHAKTJDHqKy6Z9VDsa4FqyTTejrnWUSDCUmNWCT89rg2C8w",
  "key29": "4y18vEyJajTJb9FtVdHuxcXLC1z4f1FZcp9WvQxUgeGWocU7vxmTkrqGMCikb3t9LRePMXpV58icY3yqBCassxRF",
  "key30": "2UWufHVpgQ5DtiobAb3it2pa2knQac5KdsnE6cNV3jq7ymjWr7EZYtQGRBNj7G4smshn5RKR4XhZb3jfX5z9VwLR",
  "key31": "3nodTTwLWfYw3JHf6LQnktbKM6dxp9jrJRnA1SaruNtKVWsdCbufTPZyCtbsqHh9y8jRGzJ8zFx2eGH9hd5pLcom",
  "key32": "1yFPDx8vDFyuPQj7U8CihDyEtbattWCaXMm7gtfYWXaWiN8ktk4Ad1uBKZPWh4xeHDj8iVsk63y66JDwVyDymEc"
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
