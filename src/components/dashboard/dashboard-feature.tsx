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
    "hQhSsTgUauHhzK9EscR5qsUyrspUKcw2QtMoESYLxw9aqjHezmY7BhgruMsr6eF9aCdy7Gbd5NPUYWgqgR8jhDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAQ9hGAQHTqtrLDq1hKmXLWzz6HZDZ9bnZjzB88vCPymjgMfcyND7bYTDrLw1JzphbFrtdrx3p6NFBouPbySq3s",
  "key1": "2T2ETi9hyT4tn7ucceqrei1JrUtmmUQ7F7tKHN9pX4jaFArTpefTEHMTBERKmj4rExeCBUDm3jkz6XgkfhTsXFBu",
  "key2": "3aTuyJnRkUu4Lgupi9V8sbx7dnZzvqJ6j8fhsBtZdDeNATmwfcXnxocbuuDDxKEkSTtTCDevVVVaTrRRvAEZpCeb",
  "key3": "MwefUiGVgpKhvfKvdhuamFnZAdJbbeFY14KZLvqfmmUnxspHPU3yJfCScFjvXiUehHPUTRueP5YbEZg9wDbuu1q",
  "key4": "2gxDeGnWcz9yGqrt24LiiEnqRrAPpvNQDWnYwaZTtmKcxE4ZR4FSJWd2sH96UDSjC8RYP3mVgjsePw5vtEpUtdgY",
  "key5": "3Z2ak65uL3Mpw7bHosZtMW6w1TFn4cwdPaRernDs5uu617isg93S5Mj1a5A6VYXNXhMDmtmXSouwB8CvbpFKKAK7",
  "key6": "3MAzd21L2mSLLcg785SeEmJB9mDXF2Gh5sCd3iEL1gXoBRwKW3LWQXSKewzpdE166e63AoNoAif9uSQgGAiaBer6",
  "key7": "VrQw1ve8JxUgnajpAVagrTNXhUPvx5FzASRnwuhyVfrV2tS6SUg8drQHHtdYhXxMeWtbrSjyMGFXJmMoAwhtYXn",
  "key8": "5XpuxwfbUugoJjYxNKtBmXyqymv7cVWZWKRwTx5Ru4wNBS2VV6UArzT9PK6SCwHESHw4tiw2H9eCEsvVGHeaqRLA",
  "key9": "2X36mL5i6L8T5boDhrnVpURmrvH1RvG2m2hTcfrG6aKE3ta1T9uvgjoL22uT8LQ1FVKJggEsbPV5e24fHgfb3g2J",
  "key10": "3CtuRFfA2fapCEYcroQm9jYKXXW2EYR5irkpM7tAqAVyT3TUwH2m6izikJbKD13i6VCrqv4RsS25vQhtuWUz1dew",
  "key11": "3BzmBhSUJCBVvEbHXFFVr7aowueKb3FxdLfLhEmYb3NA4bEJt7CsBPn22Q1ErM4LDE5XX67WHDthg7Rke2BoJWqb",
  "key12": "2y6JS7tcPFMENK3iyCjzQanG564VpkzmQiwcCzp1qpmvwZDPvFua8pXxvT7Ued4UdMEM9tKqM2r18ggctPxQ2oEc",
  "key13": "5pNToTV1v3t97RsR7Ni6sDarqwGkKYhyacvTiLbr7VEriNxWCp5uhBP2wY8rEHiPusGsAUcB8UXiny5SCyahcpiB",
  "key14": "4YEVTfQCP4cqZPpXAmRbCvdExMxvFMZFnqYcvNe17V7fmzUvFT2MdSoCNBd4ZHuGXUG1iKr3jJZqUgUzJCSVQaUc",
  "key15": "4CpknYVKgDkRQJP2m6Epj18HVKjdqMJM77vDKetQwisPLi96ZYc4jixZ3N4poRsWN4BNrrAjvX8nXxYqyiB1fEmi",
  "key16": "SQMErt7HoxUAFwcEtKGSynwdw27bhQb5uL39sQzwq3uYRsuEWxcuRHwb12qRgzpQUCiHEkeFQjiPj32B6Zbs5Ay",
  "key17": "5KqPSv2Wpi3KJzngUtgU1s8Pwht4xKTBhzN66SQWQyYCM8cxm1GWfwFSTqqhZto3ZS4cVZp2PM1egtePvTez5mxQ",
  "key18": "55LNBK1JZqjftkTxUnF5nN6SrWTnDHBNTtbkmtUE8MAArDd3gg8yto95KFECKq1uuqWbnnPgXmQFoySUVYvq2uKc",
  "key19": "g77D83QtPMGNrxJyxEyUaHLSyVDT6URnh5Eq8VF2va49xFwbp5gAAXcVpendXJYsaVLk2hXCdJKNiXcRUPj12pg",
  "key20": "3PnQhayKHGW9xGa2yBMjY7uxnDg5iFF6AET57geE35JyZEX8XjnvejzWdDV91z3XHdQygtt6PNTLeneFVjmcmJqW",
  "key21": "4L2Fq5si9QdsNGLnsdW15pZUZnDxd5mFdt1heLuS7aSkW76bU3Vdxe3caGAkkeLDkaWxo2BAc5yG5VKTB3suNfoi",
  "key22": "2JBGWxprMEr7gskxtLcorib1F5CzoaedLyNUQqae69hUAE6kUKi5jZ7Co6HhTWtrYt4BSRnevEdQ72WcSoMXv2sy",
  "key23": "3LsBxPG7mXT8WNnc4tbKLpvSZ1pjJNq94n7rrv9nPSxGJaLbScwbtamYv2gFaWi4pSs3ux2fDCcKDppUXNyNxZR6",
  "key24": "3Ey1R5dZbK99sg4XBnrvJbfc1mNnc1G5QCownPDmLqXetupKaKp8nLED7869zgwcHsJdBw2RoDDehPovgxhZGvag",
  "key25": "4z4VAH6qjkBhbYRgWdfyLH17sgKkSLHKyEG8GEvmfTrqAtFQYKVH6qY8kJHpqxsFb4BgDJcG6BGFZTuQK3pfcF8M",
  "key26": "3QP6QLNEF9Yc13UcsA9kBnppKagUEUqDRvJejvxXVssHFy2YtMBEaGSGJzW9CTm43kvkVPXX4ksnEqseEpWTYtC2"
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
