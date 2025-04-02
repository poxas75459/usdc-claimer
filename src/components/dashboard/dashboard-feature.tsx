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
    "631JCfduT4kERyNviLJkErDXXbtQ9vPjY3GF2K9PKrTZdbfcCQJubAw9YFYyRTF5Ad744ku989ZPWuPCKEHfnZGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUVCyMdeiNk6aNYhXBvgAssjnXfAk1kRzZFXwEV3WL3GUfnqR97V5JiFRFNFdhLVgzCsm2rz34GewYXbxr8Qjxi",
  "key1": "5mtJKEPNdWnjTetg6XPcQA6oU5VNCMhomBKFgPbwDaCkZLK3F2qWKAMHAnbXEEXKgPP4NkAdLukAQTJAS54pZGoz",
  "key2": "3rCwprn2392thwpBM86oNsnQUcCsKuxGSMRw2nWBaDUAzMsfcD3PekYPb5gHqysuBrL8h5e9spBiV8od1MBpU2QR",
  "key3": "tA1hJaqCiDzuBwSgE25guu6PvRGXGBmCksSr1pcowP4c3fjwZqoXgh3y5dHot7ktQQ1NezSBsMoHfWpBwg6EXwg",
  "key4": "4zTbmXt8SzLPCJCzCDNY672Chp2iZ4TQ59czy7NNg8HSFks9wyAvK3axkDoC8JcSw5zUMvCxqLyVEEC9ddPrkhja",
  "key5": "j4qqxCCFiDrnneoderREDysDZSKfhJ2GuurcDmCqG57GS8hQz36pdfjEntsaWMzGRq9HKQHxYpDNp6JKJCHLeCD",
  "key6": "3g4LgxxnqGGcodbrvD4FMTPAXhurnp8H5mGiaYXa23kKFnyVr9jC3zmxeM4RMKj6N75k9M5Czu2C2QDX4AMscxQy",
  "key7": "565fNwbhTLCX5hEfEFrPtNvrvSU3R9qtv2pgVwEBvera87kXRDtLmQ2GNr6mCNsR54j5L9M8VV8x5TV3vdXXznQb",
  "key8": "9kSMtB1hyyeyUKbKRSVQRDq65z26QNvBB2TN2w5wjnJc1wjQz5WW1w5J1tr5gZqDdZ9iKw9ThvnCrtNzwW689ce",
  "key9": "thXtVGdCYYumbQYJY1HjBYtsBrF1rx6xyrLrYJ9PgVrFDGhWdQHL7uk7qxXKFy68LvPXd12CQearBgsgvAXiu8S",
  "key10": "33CJ5MNuHU1EYYLAijm9cFQcGSfSrHfCwsTgQVBbcVQ5c1VSJGpxNp2mgM9Hi5SbkhQ3nDuKnAHab2fCoYjwxjT6",
  "key11": "3BWQDDkifAHTzCjravJjdom7K4VMmV7e965BsRmvwrB376P1RaTutsoNinTmpy7EuzWzKnbTMVoL6yXi6p4vrAKt",
  "key12": "3yjdRSkrbvaaxCLVEQzQVdDckc1Cu4Qa9TdZtCDvukF81sVGacwuqmxRHJ5GR6BxAuNwSnqMijZinK2BnbPVJvrv",
  "key13": "2aXs9mVPRBrSZj1dKvNCH6hHCfujAbygrePv9wEN89YTnJ8SDNwiCsJ1KrpYFxPwhCAfBrcdJ66VTgcQtrdnBHn9",
  "key14": "6U2kDkUizVdS4cuuDkkSNEvKjvCEeyKt9Bqy3M8ADWhrvLJPJgTGi6mQQkFPzikCPNVGqEA5McWwwudT2t2HsfX",
  "key15": "2x5nzHJn9JYm3q2gvRturzUfj47qFHtUQczBgMveFb42R6fVgBKdgsPs1Jyd2KociieqQeSBcMZpDHMiTs1CrHG9",
  "key16": "2ZfCzrykfcgojQuwb4saBzzqMGGsNCazGNcwDkq6HyyPwG3WG6GqimTYTbpjk8s6mwWempCeq7j5xsyx7zJXyUUY",
  "key17": "43uYJqDFZJYPEyjP83V8TtTrnBShqgUzm9AAwMKVBYTwL5pzUaSzwMrh33Vx295TfksHwadpBzMDGWapwEpoo5Lk",
  "key18": "2rLoieuyH8V9kBJWHfpBcfuJK3sDukSdAZysVUCihGP8R4X35dnxDtj7odUVwa9JCxPo6gg7SJCUdoti1BQxTU1T",
  "key19": "4xDqn12abgHYPPPpdNkpwGxFtovBS39Wqb9yJNWLULvQsKWFzQhBmQjiiKjk5E4sEyPXTovb4hBP4e2V1RXqmREG",
  "key20": "3vJMTviRix9C6Q5uLYQxDLEH63YUEnpAe8Gz7uex5TVUBNazcLCMoGUDhyXYy6m4HjGq1PuvaHGcneUCs4abay1j",
  "key21": "3m5FGCusTF5PL9ZxvSu3MpER6nEUWzYSXWBEd88biS4zFbPCtTcbdBb7nrQYQAtrDKvaMfvS6Gzd9B7dVX8QrSXH",
  "key22": "4iDj5wpV2ePkadpz2jkfzmMPq2DEm8RZMN4zLuyRiL8a4LJq15vem4ejgPYmgHt8RjeUcZbaRZ8GAGzwA6vhWrMm",
  "key23": "5YXoxpEE9KnM1z5PHjfyvhYDXxPh1Cn25LK44A7eQ1Qnzs1fnvh4wRX2afL8wFhU58v1UyDXH3iN9VpYbQe1FXoD",
  "key24": "4WX8Uh9MeDJxkoFuHPj8EqbNsaSFeL5HaB7vaRwkSGsY4fNyyFrWoNaVT2dWLE7i2f8uuKTQtuJqPuH3UWKuH6uf",
  "key25": "5NXc5XckXGheDD769LYyopexyLoWCgnavW5HX6tFSTUWuRVki6jnanHw5bGibn7bkkzqpPukUmxzR2JaeWFV7TeN",
  "key26": "cKMukBXbHuTWSmACc4cDCFckybSUwGzrRR9EpMkjC1QhTHriJvgQyvubcLwrLsE7HhPwPgiB9Rthi5aL5EkdqEv",
  "key27": "kdgig6SQky8fk6DFeq9hWGn4p1rvt2CSASFP8395e2tSxdEXZLbrQJU21Yi78NrQpKcck5JjZEUHmKyPMTS2vLG",
  "key28": "25KQkGb4iMMzeLfx8eEM9LosfaxMfyQnaAxg295Fcu3PXUgU89APPo19EYawYvwFbDMmaSxihScUmghRZRnNKUiG",
  "key29": "5kTxzMQSLYfWidwaU7TQgQ3HfuF4LUVwbUCJDBUcxfEkeKruzDM6uXxLfjqiqwBopoGZBFzC1PCESRCnKdSTvHgL",
  "key30": "2bSJyw6M7w8w8JqqezLHe5VeuwESHNgmBzb5Bk3PPhKSJ3s4avbACNtRnqnsLRQr1ULB6LkkBLLhyGUbmU9ftQTd",
  "key31": "3LuCaWeixigQGhgk9f7c9e82esKmqMKRqeQnmwxuUVVxkzCf31fvknUE3UxphEKAQ2aHsy888UWWA9ghGaGjRqYi",
  "key32": "34Hkp9KYsQGa9WSy4HvrMa5XRrLtbeFRzsXhqgTK3ykQEt9A9Rwso7WFxKMQG3xuYTMBEYWW1wJRK2yAfeyps6N7",
  "key33": "2k5nWguTuVswPKgFhypDidSoQKFUcsAHsqDwJGRaARK6B1K3taBtzcwPcpum6fz3uAep5B94TqX8LXxtzeUpG5ex",
  "key34": "54f1RiLoVbqSiz7qSSQG7yG71z3VVsbLKhWhirowTGnYiFoKSuixqAEtEX3VG9mSsg5ikMhjPUC3cxHXXwNuUb7d",
  "key35": "4QxXHhzGneGyGSAZGMuAxLbacvcR8SYTPBoFuUCz6Jjy4ScXW7AFnUdzCcE1drsUhRDaRbHuu2rNroKeYLJwknwS",
  "key36": "2QpcvAEVNjur7ank2DxPXgjPn51Hk3GaCLD31u7aYtJHWmmgqg3TvgWAMUD9rpgPAB321EGqKWWa7NLz5aCkGfQp"
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
