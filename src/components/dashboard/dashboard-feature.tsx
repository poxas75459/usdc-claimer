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
    "3zTXoJBr18mEG2nk5nmeNAabgbkGkZWB5SUCEUKom9ck1M1nQ5temBBFLuiWCowgBQLWKq1ctS3pa4y3boMY8Z68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jFxZUBHKoZkXnJg9Hmaz4vUXJLJxTzCkm6VHYc9T8DK39RM1hr846KhE31gcdDomBGvBYMb44FvgvNe1fGcaEiQ",
  "key1": "4vbfcWnAVgwpKUuFC85RsZXH3AmC1z5fF5AtU5jWY5U88nRxjkGYryFHbKezdPiEr56z2qmrEaWmkMXr4zgUNsFg",
  "key2": "3wJqb15TPaf2MdzegboZLdB2tnE5CfQnwLV5bYzh58rgjBaZ5o2M4z5ikYceJH1ZMKZ2Sao96v6vTtf4T4tVeSVM",
  "key3": "3CZGKmswrfwrD2AQeX29kE68xbvDD6ud7gqywmf2DEeCzNp6Jm4RBXcC8mJdUVT7dK9Zs7rKk2iWQ282ASVxw8Xv",
  "key4": "5abXLaK8WiWNaVd7Rwb8R9rdzXDELA1ttX4vqXUZzE3tPmBt9LLAyzsrD1cKXYGhqrWPNp4vqiC21nAXjM6A4Lg7",
  "key5": "3xm9V1nsXtFaFWUuwgPGChqvaqkDrv5wGnea1hBrQbYhKdVimSw1FER8zVaUMuoCeu5N3E2aV5WDKJ3zQyd2DjUo",
  "key6": "2X5Fd2ndNDQC5FgMwWawW53ZASQofJUpLbFKVKzwxMvx1BfZcpL84jESmDpTYhQp24FGtiEWEs9QfSMVEUBYT2ip",
  "key7": "2FAheRQrfai19tKe6EK3qXmB8NY8aJh6U6LSgjWB34Lb66FGSSUsTv8X3FcqKmzBzdSi1qRET8HZQnRxmpa1y9kT",
  "key8": "2h1eXQAAsRABRKqLseoFzLGfJnxQYwQ7oLEQbdbwiFJJ4j8AMpa3SzoaewVhFdMBo6WktbUhqiKLvsr2Hx1FhdqL",
  "key9": "2by6caAwFT7JG1ZszQ4scGXi8V3T2jeSdNaPiCTd8cWGTGKnZrAs4xw9QYs6zfGXgMa8kM6VFLTmmjTGJMcTGSbr",
  "key10": "2oaX34wZXm915dJYusN4G9QRMY3Q2RhtYXYrircJNi9Gm15ErYxGCAY1vmGQA21fhXUW2jnqtp4rCoEioMg8nbqC",
  "key11": "2xxMQGCK4kF8bcewoHRGTMqZkLie4WJNzBZMPiujeCH6sQEhiUHSp2WyMRvDeqxTdNuickTgM8Fker9eh3PfLgPE",
  "key12": "uD6UdEMjnGnvPvi85QaNyFrkxURHyZRmEXTTitMxK9uUGnczTAaEEVRtxdeb5ZUxuA8bvFPDXJDuP4mMokMKLdw",
  "key13": "5vKDoYFj1aNH13778CwS1bxS5vfTiKaiA8H2oYDT4NfYGmK9fY94Lur8RjemP4n6YdHnDwH1kwoNz7kMRQBhABDB",
  "key14": "5w7fzdPu2rJNbUHJU1kv7V1936zcxQugCU1VaryJEzAV4HdyF8RGhoKJ4ffpTmnYrBeFZsU8PEpwTCzbvsTCEMMW",
  "key15": "3jsiuL19QSrL2mGFLhvWgzcJk4g6w3r9Q5M5DFH1vR5BXR6mfQTcPYwNBHuioBSATUsWJZsRbv2afesT8Q31ZAxT",
  "key16": "3SiKGmdbBgRLbSHeDnW9uCUkzTsa5h5jRJBN6otn7d2jqfqRPrG9bLxLv29y6KHAqtwEvUrxvihEsjf8WX634igZ",
  "key17": "YSEQzJ9aqq5EGsd6GG3k6jXfxjwkuEdthdmh1wfiyqfTjap92CoY4LVChabyZwwv5k4ez1j59EhUEXPRiyTberV",
  "key18": "3XQ9xFDwrX4zUUpseSQbrgD143S95HML3RnB3eGxyDgXdATHaRzgfL3tzq163FKstdtZXRvfiEwD2TKpGQ4C6qLj",
  "key19": "S49qp9odKyWAX5w6Ev1pvCaZkM9hdPTahhsqJYcDByNKqns7ZGjyzvtp7mbNRs6YbELjfvPCb4rn7sqp32jRor3",
  "key20": "5QW5A9CzjpMGptcPpVhKXiMh6zEPhog7oo8NCMCBcwb8gT5GXtmgPQQmyow2bmEK9EJMhjkxvxze4iHHKTuKF79p",
  "key21": "5d9shfLD2wkGFppK8LaqoV7dWBLaUiphFJaBaXwnKxrgf1d6uxs9SUCPfKLtCNtFWCFfzUXrN1QKogZsLQ7jhgTB",
  "key22": "5VpPge6coBsVVuAYma86ZtpaxRiLdhuw3omEfJgcuYjt2qVqkUbfXa6qMp8U6ZGHf7Lsu13wC6RP6WP2U55N6Nqb",
  "key23": "2GkM8reesopZnrLswGvS4D6pJhP8LHySUjd9vErSD5jzpf7dF3N5rFDpYXcopquqY5S8omuvPk7Rq6twcmSSxKwj",
  "key24": "efnRt1HDpxGsS41zy73kQfDNiWG24UBiRay9VT1o5udJn9j55Pw9uvyMzCiarBEqbTKG2FjPMnWTPVtnCqCnBjo",
  "key25": "5kUbviRSu3apCuVNPnAd6aryeeTFEtkoCUcVYzVFowEyg4sYQkZsFecaYBut1R1nWcVbc7Npm6oWVxio6xyvrGBG",
  "key26": "5oxSQ8VFWgf6Ce1A2rUa6uWpHjJNa7x1QYia1cMkpoHVYaMy7AmPJjjH1ka4Hy12fVEps4aRrnfscjcVZqpgYGoT",
  "key27": "2pYpZ8t158zbtguzEnfQa1ADM4z8vcz1HkFM4YeRAiMABs4AeZCEHsa2u7Bs7yPZjFgMac8sC932vJy3fAHp6QBc",
  "key28": "4jpcE1G4rE9vwM1hgu5vuGj7ZgU5dbeiDsuHVGyr1TcXnhJawPEXKs1a45u4G3ALUdcrcaiEkZTggRR4UGCJCMwc",
  "key29": "5p4VVB8iHURzFshLytAHotHaUshtDfEWGH7fCjVcZ9tVSFEyBnRBDYW1je88W3A3wdTB1eNPwQEst4c5D6SP75iP",
  "key30": "2HqmQzAWo6Jutvgt6PVRNCVEzMCtR4RQipXzYJntekxPyyuHvaRVrcDdZdhJoBo2s41bhcccMcA8UDvLDgv48Q1h",
  "key31": "5FyyrjVPxHbU4T1HMWQ1CpnppQH7TtUENASdMY26F64gkdftduaqVkpSZnXBgdGS2YMLihyc3UNtBFLtGXxm8PM",
  "key32": "4eZn8n7itTAegipDGfiE1YddVcVgsugUu9vc3eaT4PMfxx5PRTe9wPf7VDGpKtb63zjV5reiiCyHUx1RJEXLoVwF",
  "key33": "4EnQEoPNYG7e1oZqxXRtNFPkG1QDvNb2GfXY47zGeuW19mtARSn8J6WWenNBqBnhhPu7LpJcsNMymmkkxwZTq8uk",
  "key34": "4KRU9nuG49rELYuAN7BB2FvgS3i8jDXhssGTXMQXriRPYaUbSHwjXyWHZY6UbzVmBQYbWhk95E6mZFjs1evfskzP",
  "key35": "2akkZ1QiWHrCLmU2bQ4PoqaSq7zizjQv7yUHofYnNAPnxGTSBx58SGz9A4L5aggpwQs98yqGKw1QHSukdfDPhzs4",
  "key36": "5CiUswwvKn6qqZ81Lr84nxZZ7hdayeLBujsu3sSei6HUwbH4h2onPe3D7DEbpJxv665Kg5BfvvGzu2itcbxuGjT2"
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
