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
    "3yXJksR3scTd7UxWGTnXUEocbYJeFttMxuv66FJTTMLC5wput2ho2nNPVuSKD8jdxiqCyRUZfim1grvL6zRun7bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pra2Re3rJLF6LbgqTET4bQVrzwYu8o9BN4xcS3sm7rKB4GmVry1b8W8Ncjb5bhdGznn6ugW3kowSAv4gL3brHtd",
  "key1": "3oh8GMigoNSMGwcMURmwWccZehiT88oP59cQX69zYDkeapVJ5WxgqcYU3ipbfiTnQZrF4w8zJGp2xMVBfV4ay9hm",
  "key2": "F8qwSu7irM6Cbv2c1Kv5kDnDUnaTUm2finZrJF959oFgduuC1Xt2t1aXGJbAAUdkrofKps9FBpyJTwn3K6VGPte",
  "key3": "2h5qL3tbbVuaAHECHue4iEJLjMubhtGnjnftfVvH7ATCZAwXCNYnicft5ppKyZWo5s7wHDr77XRe31j44WV7o8dZ",
  "key4": "2Ashx5tAcZHLptPGCTureMMKi6rcDsrKD2QXCBg3wCYHjJrJnmxznfHpRYC7fuvUMW1jQfojxT1b6BDEeTDfFLpx",
  "key5": "8R4pm8Xtrbx9jqTvwunMkc2r2nkkUZegcPZ88GyjV13kfRZuj9g9eydVsyd6ThPLogY7Zb2BrVezbt4gNfNLtLa",
  "key6": "2o6Q6C4aunQ9aANG3DtaHKvFAizVDV8PbZZnkVAiqwgWN196jpHotUMrZfxfhXzQ6JXzARAEbLWVWWM2YGvNSnxX",
  "key7": "4sj3Zc8HZqshZnAbDtKMCoo3h4zxpmBt4Db9y1ngPGRjkhbsUGCS8Wg8jS4FSKP9U3C1K5DvwnqmW9aZxGHzfRJp",
  "key8": "4qc2wfDNYJ3LuP6TuPXTTheibZYhrQCYBgfSUdSTmowpa8crdaTaXciUjsHSSSZAFranCzmFdkvMyJ9qQM1YRjt8",
  "key9": "uXwYRTdutieVk5JxFZGrgguRKd1tMPmLDsftFbBCSoP5F7orDitrzt9tY7iAFou9sbHTYGWVt9tsAduNcfBPzuv",
  "key10": "2LfPbqPUQiwdj4LQpSsFZrsnih4gpy9iej14b5H3mp31q4Cv7s1T95Y6o5XRLMcLJy6EKNYisRD4YzmyMN6oFeqP",
  "key11": "5pM7xBvxoMdqYAxKJTWTrh7rqN6zQwmSgZNaY6AtPwKLUwCvX6AzkXUzZ5mCHMYbMNCXpiE5wiiBz2u1m2ruegzV",
  "key12": "3jP9eVfHdrHaQnRLt5PWUeNBuU8EMR436V7hYyDvMKCVtST3ZprreM26B7FGErur1ptL6yvUN4Ho8dYGd8Ds7R3J",
  "key13": "2MaaX4b56cPn7n2XXCTQk8QbmcnCo2MaANLefmvL1t99nPC7EZT5Ez6PZU3vYZriweT7RkQULf1uEhfZCPB61jKZ",
  "key14": "dQpcTVqV8ShqARsX4C5oF4ffRPuGhGfRZhofRD6eKGod5YiBveqgbun1sQpxgXi88oS9iSEeCPLqLxpTLRhts2a",
  "key15": "2VdqcwquXz7wtJQjGFo5uFutw9kL9KiLCCLH8bUZ3VL7sPsze7ULLbqfj7fbryVyacYsJ4BfKbTXAsCpvuwKYsGh",
  "key16": "5ppbcDcFf2G9HrFKcg36yhiFQukpdDLS7hRrbbiL6swY9nmVxLsVveLRN5NYdRjWveeYKLZWsTwGv7DyA1hiHDnu",
  "key17": "ifvHtvwsLYK2KahFrPJ1zATPMggf3xuS7tdm8FvRfFsfG9MRhy3XPDZ5dKqQ3pS7sJeS5JVcK4tP9KMd5V9PeLn",
  "key18": "4NWZLBaUa99XQ78GXAKGsoGhRbgFjTXPbfqu1M32qb9uZP2vcC9tzaBBDQXRAD1DehtvPpAnvZguuY1mgJWt8Guu",
  "key19": "4reKv6GFQNtfiN8qW98ig8GPYWL21hnSNprci3wm5e6pBpgbAKLkJyiEunBg7ZqPNsEa2cPZMksgNg8ALR1CME37",
  "key20": "rRjGtbMrcNze1z3VHHzNyn7FU9YTAYDQHpwkzKCGiDrMsiuRH2KyhpkyCN5R6pD1CjzZ4AGjuoqztyXe2vbLdzp",
  "key21": "uoK7ZTJs89zaa4S81gHcQm9q6c6uwZ3YbUWyGq8HwvSYPBVkX9kgZExvjjTt2Vsfp8AkoUm3VLQChcYDYyAb45w",
  "key22": "4K9Dqn6WaV99hkKhED97ez7k6XRDaxpRwEaTGFe5aAvzuR3rbgApbkrR9YX4sMCgVzdqWy73W6JyAx199RFokn79",
  "key23": "3MT2H2EpR6zjAHSckMynFGH1FLr3WixdGM41WRkTH7zUuw2PNCdBzKP4CE49u9qWJJmmAgZ3kYHUfXMW61dEQ6Vf",
  "key24": "2rGULZ1B5rQ2sKZmKvDad7vfchbXLDAEdQsCw5wLKRvgkPeCMquRWCULmRQoPQZ1MdQesuWTW1jyB1hPJUPnHP3f",
  "key25": "33Kwmw3sYCinKMdzCLiW9eiCg6qY3qLU4ZxJLHBgfBVPVNDXo8isYJGybBe1fewtgNeu2sxSNMiXs3LzcNhWGQXk",
  "key26": "5RC65H9Bjx83FeBgQZQtGqazKawSr1PhpS37cBeQFT79RtB8cgZf1fybEMahejA8vwEs4Y2UADmru7c8EQNAijSn",
  "key27": "3qGSZAdAVX7UUNXpkpks7yMHjEpxY788mLNDLmJwxDsXMbPiE6ok45PD8KPwrgYW78sHff34bZ2ME5dz4E3Gb9kY",
  "key28": "4s17a8N7b2kkdjt8jB5ZhxKNiMihEQ2Lod4Lsz6Nk7jsi8ATbokWUdvudre3vjMjz58ER3ar1DjKE8JEDFeLzhLE",
  "key29": "5YncThugSYaQ2gqHZLpVrvfVPjsFcTm3TPF4hGw5DeHwYLvGR4fRDRbn6KeukXFF5xwikXg8CiAW6RXb6FFyL1UP",
  "key30": "2aBUAtsTZUp9YXwwF5cz4XyNdDYkNHRBTddNz96n72EC15Dz8Jgeqbm93vSXUfrYecsjpuW6DZT3tVuUSp7WV5W5",
  "key31": "4f8PcQYzy5MjDUeQkWKZJLjHqm9oYHaCYvGqT6MykccFN6JPDVu4Jke5wNeCmCY9bXYx5qmuhtWcmhNFKz1Rvn9Q",
  "key32": "4Hcv4a7Zo2GWrhzdWmzryBCUuKLuCcS9YpzLqT9A2kjpFFY1zV7KxLxJsNjuMPczo2SXAPWEyLc1VYVzoA2XPi4A",
  "key33": "3TsQuDESepQwhmCuUseoTgGwHniwE3hpU7v2cYWqXjsXaz9hzwnHRWuwjRC5n8cDGCXSh9S4Sdpwpea84yczZkv4"
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
