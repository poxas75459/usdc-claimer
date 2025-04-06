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
    "2N3TpwRyuLbF98Ab4qE81zcyYzYeRvZDNPYfDkGY1Vv1c3PkVzKDjhcja7AnXcvtrg7DP3zeZFMwW6M5D947NPM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223tRwjCB4sdjap5jCN4WooKEq3fqK1qWa6pKH5PnAom2JMV6Kyfma2D7dHVifqaf1SHUBaXF2cgY3STzhhfcjPf",
  "key1": "VhvypPhH6rF1wN4nbX7HjtVtJcAEKqExFyowR9BoAPeZZCzmcdvCm9PsvuckfmD7kiA6tuoV6U7vNspfkdGScqy",
  "key2": "5ej1yn2HjQCLmQqvDE2jWR9ytV73CdTjK3n5oZ3utKqaQj4c7ULKNhcmsvgu3ZbaL6QJptcjH1rLfy1TXx3d3thC",
  "key3": "4vZVZ482RPJ9uvKYxckpETpYkDKTigsj9jWKtsEH3KeycmoJnRwwCdhMoL7yGgTM2CXhsK6yoqDcWAiR1UyGk8pJ",
  "key4": "2GqixYfvaZP53VcyXCqfdmNwJbkCXdr3CYyRUHen4HZbbwZhCmnT5msFf9xnntEWM9gEo33gwytGxE6nmRGS2xRm",
  "key5": "5AG9SkMfFCiryyFWxtWoip5maSPaLY1fw1GhjHjgqTi7WDDZnbp6hnCk6T5uTimoM6LhnPppfeLu5JLpk11E3w1z",
  "key6": "3PKKrqCVNvNULSdNfZfg3PeTyg4SX2hGgsgPTqpHhLWjauY5r1ogtxTRJG5ZWAifWYVLb1vREMNeuWQGEpdXRH5w",
  "key7": "4yynFadHHexopzgNpZ8KG8yGpQXZegXQ1J19ADU3arS7fiCnbAEUheapvmhzsZDz6PbBiLmJc4PFs66AMde2YWZ5",
  "key8": "47KHZer3YePrsaANyxZtARCZHnirz7xpMNH8wZsatsqgfsYrxUDowqhxHybgEZ7n9XMUHmykdvjAEBqBhPqWgWgF",
  "key9": "2Bn83QZSSySHpEo3NaGYa3Wn6QZ35PSCRVWWjHbfVUmR5eiQ1ME9RK7u2rK8Znm1XxQUwDDxT8KVWDkmmdX66Wkp",
  "key10": "33HReTWpqU95xDvxzrVMbnCXiENSqv89j3s6SEb2qM3kRMxWn28EtrXyUmGEigteUXXk8caw94D8sBxWBG6nX1co",
  "key11": "4vmvBzkc2UAX3tNTv8LcxFmX3DBU4kyjgTwKAYKj1uhDezctsSDda6XzdfQL6RopF8VXXhHrQJYYAiNNPW4GaejB",
  "key12": "5a3jajpZCY55SGKfouHC4UqLhGwWJcmATRSvBbaRxiKSEMndekRttdUPL7XKzMowRrejVJDzwKmyRwT6p9Zobgdw",
  "key13": "5Y5UTSAWXiRyaNwNSeF6zWuzQs9hbFu5GnmNfwGnqNtv6RN7QGsXaXT7nY1RCbk2j8f3ZYQs7rgBhHjgStbtBFvz",
  "key14": "43tkWay9GVqCQirYX9g6Q3WVoU9vZRG3eZDxeLC7aWGUgRs1dKPWG7hhGmynkSGuz55bnnuDToccQFGjyraJQRzf",
  "key15": "3dWZBGWcSb1tfBEdoCbbqgSPsKq3Ggtb9Uism6YpyXBmtctciHiKu99GX8GXDZDzteNaU63YmEHkqY8xXkYXmf1S",
  "key16": "5F89Tr1Hg7Wa5bzUpL8xgYCwEJNPkYtfsHPcYkwVQFGVrzqZwoGeE4vDAEmq4Rkr742FPaeWemf36VdGHkre5bzH",
  "key17": "5CUzj8gwTUbXaeHUWENACw6D7GV8J8SKbzA2wgjGeJTP63NgV9KzTCZkVsjg9PzuJ5oUFn4UWsPwnGmSX9UU1qJp",
  "key18": "5SvL71W1T5fv6oeUfHbNQv3KME2VuNV6NGBpL8NB7vcVpk8TRgDuHGPUu2tC3SF5FdA8qGD941BK6B3qoQd4vrBn",
  "key19": "5q89hu15smwHNVczPmKRWJYwbK2LDcKxipsozxcgsKZM1C3Z32wLBGpm2sJMMmW61rZLuUb4RQnbsDbSMrhKmhF2",
  "key20": "3kHCcYP4VQCCDgbUXXdKp29dvdTZZb3mnQMWRpnuCzAC4WD1tu3aZcRtvAerS1GnjG4GZugJg7qFaRRps98xi8F8",
  "key21": "5rLitLuH3AEG6P1NDjp4TJLHygMpWG7ecCgqGU732WMsoWuwRDgzyukzvSphW3YcCMjbA5dCe6H7i4LLGYMPETap",
  "key22": "4uzwvP4pj6xTDekB55HwFLumdpfszbtWBMkovTy53gVd82eroxGgv5bstFtbN6Sb57nfxGefshcj1X99jHfkCtJF",
  "key23": "5t1hCV7E3LvGk7dxzpsebNjBJGZDa3bvACLgGu3T3wWHDGrwKNCdaXAEfKEBW96KpU41naU4faNyttcvztxR8Ze3",
  "key24": "4xpx3tZrmkKgg24goLdsAS7Rkhg56WN3hqQvZNzuXfV5mxv6sM5gZbWJuTSsFXo5fN3nG57tKw1R2699dSiwBMJA",
  "key25": "4Awud548HLecjrRTX8LyJYcxy7PhteknviP9g8SHSDnsLzmYrCURN8vg5Aoa2n8JZ1mdJfgdRHEZjotdRKNrWe2z",
  "key26": "4MKfHCuaW7iGshpo4QBNZ1F88nUHSCVhimpaamKM2dCUtArhgEagLhmEFGSuTjTR6T3N57LpyFk2rLVQwnE94NAz",
  "key27": "3nm5PuxCLTnko7H51M6TZeJotiUEFbb9iHh8oznTQSoo3P7qn2Rz1GBm5BZXfzkz2FvYk8GoDoxEnJymcFfrP78C",
  "key28": "2gKTbrCLDuGT1aDqVSs52TcXbCTmHN75ZPF9nxDumMLaVuzw1CH74sNSFsKVXqNdL2NyAbeD52vmk95MMgf6ZGbN",
  "key29": "4TNFJdQfkcLX75RwHK4mahJkTcWkJfrNPUvP3gAEtPHnemxh9kFCqenitsdWJuerSXMzeNuxdRxy63kBYFdyQ5Ku",
  "key30": "k3Bmq5R9GxuxPYHYmkkrtVuvu5Dv21YqD3izy9NwxbeobFhA5J9EcGpt3cTQHwLCgQNFnFApWTY3jnwVYkBoU1j",
  "key31": "3qf53jienMRjjM11e1vZQ4Mk97ZdDLBTWmgC9aVhM1H13kbatxcRfARGc28CZg3rkeiAEMv4AiYX8hHB3BwnjWCQ",
  "key32": "4L6xJKkYaLWRGDYUzfC2BVFTYQe1kBMwiy3eZZuu8GhCo5aow61ydt4N5XSd86ftXG57zpyZqcEXTYK3i2xahGyS",
  "key33": "54ZLG1WebrSW93QyanQvAhMW6e3sNbYxtQVrsSJo8jxveSmCD6VYSiTx3PYiSFZEmJKXNVQT8QEMUn8vSAuths7P",
  "key34": "3xx68e7Q2Ro4xJ3FxK6n4XZKPAWgaSdxFq442pRDV8rNQNe7gMmWXHEYkZqfoCPpVF3J1uXSWqxtzAM7Ua9jFbPo",
  "key35": "5cvmZwCto6DjtuBrEJ1m3osuKKPeTkWu1YJGidUaqeeBztyHz6ZCn6tb6cV1dhqAKwo88rX331dnKianB5xr2Q2Y",
  "key36": "je6qFHVtg9fKbqg8Eh7rCZbw2iphWojQL3K9vC47Cq6DD5NRypDtawArE6GAMoA5gDBTjPMrY3mxPPhqizRsEq9",
  "key37": "4B1FRA4y4kKMxigNQ8is3fVgRuu4chy8Kz59gafkNE3mg7Jb7AHj3QKBMVo4s4Ypa4sN92po8WUk625bT9KcF3R2",
  "key38": "27D96eQxq2SNkfJ4qKzw8vuCP2HvZm8LMU6hXcTx98K3j2ryL8RhX4TJeaJ4G5H6siDpcFrGAB17TKWXuNa8MR7Y",
  "key39": "23vFrdk9L4nRS3d6wpRpoyKyg8BiT6AvZ5hoEv7YvMhxoJQ1KRLEzKMWcbfxmR6gjsMktReZymkyddAG951BKtsL"
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
