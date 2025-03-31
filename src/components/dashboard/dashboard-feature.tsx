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
    "qopEXYWU3mwf1DRDvMg83H4NxfZrpAEpK8pCM1eLT7zFyFSh2GmQBwP57uWSSeQeDyiCXxvizJh1Gxrg2KxM8zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTAfzuueXbh3kbsVNReuocsaCmfkMo8kEEJmDV3Y8r8j5scWofKP6sYzqeov9k1gReyQUf5sstSbSojj7TCymNT",
  "key1": "5gnw5NUTqfD3VMxWZnKD1A6aZSyG6sSGMXN84nXtd7RQVY5grvCzsG6euVynZ4yNCKghjEY1YzHjMmEh3BszvFXa",
  "key2": "4pgdkXjznKzhkneeKBypyxMqoCoYSUeWNf2mbLrVtxbMDshzi3AqNRu1sbVCegohrHKZ8Fw9b53YFWGUXSVDmLCm",
  "key3": "Gmg2LciEh1Ztho1vuLsvrU3Dn3w4Go21aDEFWtHuE1T6gSS4ZAqij6Mpu9Eg6bdtZJLQZBhPqGYCWMe6ruJcWdT",
  "key4": "zRfXMEzuBYr4y7fFA4EKAiLmWs3NmzRmFsw73XGowdkkT2wTk9X3cKoN7vBEENnBXNdQHtcMw1TWgaqST6CyTxx",
  "key5": "3TY97CcDvJKbrUDsZF2687tJY2MA34YANCNWGv9GYtTfPJ8CLL7v8YZrWnmQgjKya525VH9EmqfaaD6rW8FR9khy",
  "key6": "4ihTiStCSPiZJ82TqGzYi7jzf1B3ooCkb8wy8antk9MiuuAxGV8rm67P4hvjFBnjhoi3DY56V2D5xs4aLzJEv9DY",
  "key7": "5eo3d3vpXwJ8SdsqQGcdtXoePSP7A5S3DzX7drxzzHav8DFW4smB5Vb7MWT6kRFACZWZAZp2rN69ypLf4weqdyQF",
  "key8": "kSe3qRmQmoFVR4n1FVTkrSt3KeernyaqiMENpnJwQ7i9mzDqGhxf8MjAa3puVgZFafn4XSM6KgWeugh2bgJcWc7",
  "key9": "4T7qc3ZVY1rDjXCY7yzjyqm5LvSA32tN4ANcYYtvbchx55kAG9QgQPQeugHc16GeQy4BMwTFkSQfvfVE78Y9fe3C",
  "key10": "44i1RY3AEFBGoBD28MN2rnJ5yLzndRd514mkgHvphTLzFgfimpPxfSiofFm1eRo3LjCcPXjN3HaswCYmBrEu65HW",
  "key11": "2FExTnvQy8E9wn9M1EaoeKvdEyxU2ccmEjQzHc72CeFqmdRyoTieYGZAVju3sFZx1a2saLks3qRBAmKkEDutmnLh",
  "key12": "5nAuuHVR31grgvEPTB1ViXuKRzgpkxA9Q5oBm5Xt31tnSYqi8o7zA9CoFhpathsacCv2t5x6MxhEY1bDV9AiSxG6",
  "key13": "QdJfFsoDdK4L8TUSDhASHa3G2Nrg9L9HfZ4uUUyWCzoZ1Hj9AsdfsHvrzXwzL6PJwyuaW8j1UK2Pm89ubMmVhgZ",
  "key14": "5RGqYpjLoe8TuYErpREU1pKkBB61LkaEBaqwvB5DgquyVb48X67tae88hChsgkL9M7QZw8V6PwEFoxU6Csa7dmS9",
  "key15": "2AuyvuEMPuJ1rB91RLuifhYNLbXtGn2ZyvRmrSSKAPRLg3UZe1vxBasuYCkHLG6EL1CjLMvg7V8KgnFD39r1Ad7d",
  "key16": "58pchtnamzhSqLZZhJ1ycuAhmyrQeEQHXU914ofdURnCDeWNisQujJzPMNCzktk8GwP4LvAzpUGX8fVSMRaycHQy",
  "key17": "3hBikTPqgXJor5h3BB9na7PzbiWtSSTXqdkRgz2DCu6rGrEgVuG1cRZuVTgTXgBcmJoxPwd4vR62RJ7e86shmuWq",
  "key18": "2ptWiaAN1BvdCybz6pnk8Lv1pbFrDERF4zg6g1tRYzWDQGrWmvcV3LrAJr6HYCPfTX5KWsiT3dfzSpYM3uaGy1Tp",
  "key19": "2HRxhLM4cagfbSJjmAf3BmnhSi8MvtxcM5vP5bxE4Q3rdAcL7da9XVHcwXJQcSpK9Y2p5XdYNSiBwSx4XjbskTy8",
  "key20": "BvLVh9XibDd4ZtJ65RujmLFm7wt2z3crmJKLFh3XdNFBUzWzZLpRxB1PAHdDTwuXj6hCRathzXMs6CSjH5WHL5g",
  "key21": "NiMVHaNREJFij5VbCBCDiTfiE5cuPtvdNieRUekfioKKgdW1GfbB6HEzALAST12zbtZs8WtdGZ7yP2k2z4XcUAr",
  "key22": "651SSwcSxt58JdTyfpTMa2GWQpSVu4LymZXjZSbntqHXTbi73YfG9fsxygKw8C5KBP8Uy6XQJVAtNFRgyiVcdQad",
  "key23": "2dQqshg9VwxRRhruUu3AR1XYJbQvmgzRk82qhDxQLW9k6iK1R1cezErHZ31DAMxvH9e4HbJFkfDFZNhhWmuH37fw",
  "key24": "p5jTCMapkz9r2epxiVNmc3Mg9Y8wprDPc8CNoRk22KpcAL49XZt9QsWojmN7sZBzydQpcJbVwhvL5QwsVRrkpnq",
  "key25": "65oJ7zNDhwAQkC26W9XkmWYj16gbePncJJkTECYDPZLoTGXub4mGGPebREn14xck9ZYB4H5pqMdo32Zhe9nVK5o1",
  "key26": "Wy6zNfaK8pbPwK6Aepxiet7bN2AYwFoGXmDcVyM7gQbdDrRi3NczJudeVLAz8eNHHcLvhToospf3J8L3HSa3Si8",
  "key27": "LM3WUAqENw4UYE3dnWb1W1qUQk7GGw2qEo81yqssKtsvhQU755zx6iHTap465FaDQ76JUDdnpiJyyhvH4fFqkYh",
  "key28": "2vfevyHkSaB88JEamMgnetFJWbeyqQAtWsTJAAxNjrzkfkPURoyojZQ1KP5SzCdSnkcwr45gDTWBvek31TusyesS",
  "key29": "4baLFVPY9xLPSeDGEiWEsP5hra4Nh43h2zsesTyafEAJTXD1H9HH6DNMZSWgWDTrozqnY73wTHFLz4Y5XPjh1Uzu",
  "key30": "3p2GehGw4xaPrv4tNtayeKt2SDizu6xFzP1ZMsQdNYPx1s7Dx5swK85B8sDF1pqjo5gREi2a4TyNsVHBpoUWJMMh",
  "key31": "2fhDs3tRcv3vdhypqSFvGYyvbj8LRfCRSWKrkuAoA3ejkWeFSqPDtgkUP1Qi1WZAfCFMk5FXd8QA4EALLZbyajoZ",
  "key32": "327bhh6pecV2xUHVScCDDmfagBYX2t8WJ1nZpPtiBRWNbtFi41zZ1McuAuUw2g9cvi69zJaqRPfQpk6qKJryDhZ",
  "key33": "2YKsaGpNTvrXswZQm6docBtFNniKtczri9xv6h8ZMpnhfjSn17GuxhkwNaiXYmNhmfS1cF8kY5EEMurxURbu9qa7",
  "key34": "2xEkPXTt2WN5MvRhmyi9HQJVaLxa2RY9nRCvwQ8F5gFTzgYhtYrh8zqDcVXSD8HbkSLkDGFdrH4T26uiC2JxTaYg",
  "key35": "2KVdwwVgmE6RCJVGKESbitMfPMP3RCLPJd1jAfrbxdGxuTVurHbZc7ZQWYQaHeTsVP4bTwAkBwW5RYBAhAdSTJ9o",
  "key36": "SntKsEpue64UuWPzTnWg9DYL1wcQ9192t2SrAA7Pmwy5MQXnHSqxPH1L26Wo5kbvps6rVM3pK4J9bJa2m8k2H6e",
  "key37": "2Wu192ZYNskeEJGfBxrv4jQQUFHRvwQFkFEDynKSYuDawjEea2qheaJPUELY9dd95yKmsqvMGxbPSq48hX9nTPrW",
  "key38": "4e5dBUoMN1cWyCS619WWqjCUrEt4CfPBd31x3bNWR2kCych5ASHSnveHfvBoTgUp6DwAWkBWo2dkvtUteNim35iA"
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
