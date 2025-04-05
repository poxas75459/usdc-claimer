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
    "2RUhCUTgvuHV544Kk2mgisDAdzzZ6FGSVHtyntR2ceD7MQRz1nLf4mAb3EG7ZHXCTPEBzfbNHgqW8WVbTKWiJ44N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FEZerDVSQhgdaYz7yrTNkGtHKQTNX6DGWCmKsJ1urYmp8yfFDd7cQTefKtNWMN3xfLESPXFCEYLrtvh2ccg8bPo",
  "key1": "3tdjJqbZXDoUadkY3jLUSY3H8fbWXAcvzjUw1CXLUY1i3V2xU7qDtr68dj4fsgE3bE9tBciDSRLBTT98nwKn84ZU",
  "key2": "5ZJf9CdtT1EyCi91TTEmdAxaHodcBDFUk6JoLepfufmZYQ7e3qWEwAErgnHuXk3w8G5VXFbGL2g96JjHmiynd2dw",
  "key3": "5sqKDuw6GeRDVayBFCD3dQisCNMSUjLtB575g8QxYDiZoehrNpPTp8fj28mNWkS4i6SS7orbKw9MoLn2FJqQo8RV",
  "key4": "4eVCrFovf3eimT33qRDZLoKW4hr1aZzARw7QEozCqGfjh5rsutJSvHDVbcWPk94iQnx8Ap3rsLLzR91BgSXfgTTF",
  "key5": "2L5H9UmpSzTCGfaSnmgaB9UASugq5GXT9C7aZ9SS3vUYvBXVQoFKvzAsYZx1K7HcYw8oGRVEUHpZqxWoH3QiHZmL",
  "key6": "5y66DbmUtYNZFdDAq8J3dsa9acdhafjETGKFmz4q8SpAQZXwjC44q3bUYCr9472Ja6kiaHxiPG3PzgLn2mE9hTh7",
  "key7": "5NQsM8X7YVJp3eaDL6veRyLswiEZw1Mevdyur8yshUaNRSdRF26EDBs9TbZZuxX5NMU3SWRgmzE1AY7qUDrRo8Tt",
  "key8": "4NtFthLw5NFC1zD99Mt7UkaGvvv8YeyLoxexJBHPVVxqbBWXvafxj8po6YXqDncYA5JPjGNnHi4w9gtKrETbTzfr",
  "key9": "58bJWpgWgTXoHfffo4kYzhrLkW6yPPmMgmLNUE5EwWVncATqfWHVMqn52myQPfffoB3h62EXTM3NDs5JPNw9LQFv",
  "key10": "25CTc7zT3m8FC3PHwjyTeqaNUdxFRCRAcAe4XekFXvWUwiahy51fgxi3hGdka9fuZQu4nBGdpxsm8GD3jyosQCFN",
  "key11": "3z81cNvBwnB9PCa6u97wq21tzqYrLHw3Sq8pSJRGKS2yP6pMwcxGLFfePEG6MbjsQyDbLvhaQBiNtstBit5qcdQE",
  "key12": "3sjvN2kEgYFVNaP6QGdxsdB7kBGzC77BE6KtJV4KBsLieYCqHjfg6bZmPMpmrvXF2GkLftxU7NpX19Ghoib5CfQY",
  "key13": "2NTNVrRLLjm7gXjtvuQGNgr49DJfWu34WUJge1CuXpCZ1puqLRVMrPvsbNJzgQDvUbF6MRRAnVLAy4Kkz6Xdr32t",
  "key14": "4XUkbLyfnigBbLudMkcZ8xJ9PWSzfBuLiC3WSv27hm9vhK9nEmg7PXgLpc6Veh48SZx4bBthSJBGzRCzErwdcyqo",
  "key15": "3H1Bm3tg71xPcEGT4x9aDNjhbccJePGZy1E9J1e49UueHuRjDSyXdoFdCVUJd5MSuohesutP9dgMcEBgJ8bfZRJk",
  "key16": "4WguYnDY9412RoT6NzJHGZc9G1TqzrYaKDjPAG63HgmzoyvHc9wz3MMgLBq5mmLYrkUpG62bHdVdco4X5U7dgARi",
  "key17": "ASUXF5cVfFGbdGovRhDufVj9eop1oUYypzso5uWBz87R4MjvVeEYqYgq17kQR74SnxWX34AeM6f9F3weYVwc5vo",
  "key18": "49k3hoyAKhLpCiDKxksg4dvb3vozagDQrMcciFuLHVbrCj8Me5YYT1aM8XpcRqfLYVNwr4t9ZXpmcZB9HpwWSNbR",
  "key19": "5NpXCftuN34wCXWm9JaojzjR2wa8DYCj6s8sq9uxvweupXtjmULU4FxwQiq6atr6tMwX87GiYSfSJscmvjytsu5j",
  "key20": "3tZ1BTUiZdf8RtPUib1CaBucNjhSmEuHwAVTAU8Mo592YLceRUD7nnAzwDLwrLuNYpRNBG8cRdAsn64PbtfNfdVc",
  "key21": "3DS4xUTiFerweeVdtMwHPj4X83wydDsvZcejfvj8aquvPoeLYshrjtRFi3NgYMnH4cby22eETbjuhMJQbQfKteKn",
  "key22": "55UH2tE1iRGuPDdGSWmqhSeYaF1ZYaaWcR2eis5VPckdcNTSWYtcuB85nF9Ks5vpy1vBBKKqGAygkB5c1LmzigLN",
  "key23": "2SQxHBe6qLmWBe3nfbVxzmuhnR8uDnr9fU4UvuKmwepwg4UpYqLCHHTnNUiqBogAakxGxmXWeiVhCVm4dcfTYkg3",
  "key24": "4HQGMhtjPGcN1zZsEYAE2Z4SB3cZ1Mf4mNx3XxuMKadBu1e4CFWSZN9drakcqFrAuMhg7RGA3ULvprhFhjbiBgab",
  "key25": "U7YdUbSQaT1m17ya81kozpV1zVzD1WMTyMRJRBdVD3ncB1Ye3k39VYzXsLScLPrXCK4cxnTyneu9PL1kFzUNpvm",
  "key26": "4TDp1taJhxsGRRmFKiwaaBMJAWe4YiZa24VtYP2c7JMBUjG4qKuDGpMUVfgDeJXvXhUCdYTQR5R549cVWQUZXhg9",
  "key27": "4xaQPRpCvwaa7GJXm2FzYuu2NoqaFMdTZc8MuC43yszxm7VFy3qtGKESdwC1JKRWaqScWCfbRW6vEEd4brdP7k9A",
  "key28": "3ZatcZzmtFWjrSy4PN9uAB5YruHYXWiT645EVQiTS1QPJJznMrNXNDgSMquorY8oj5vNeB54SPTmWeL6g8Xz29Bz",
  "key29": "3KokadHtK2xi4Wnadsni7Lo5LiNDfpNe4bB4wCRa24XXH1aUFarqs2hR1HaCtvKQa2mhu5hLp8zKgcic9poTCstK",
  "key30": "5XPkqYUhsfyhYZfp1p9EusDKkWb7nrHfdrczxuc98M1MEb4B9WCHNt77CJqLX1BwJW4bRi2TR7jLEuUkRHZi8giM",
  "key31": "3husbBmmoPr65rxJ4whS1KAFtB9xsTiyW55suzvfvKqWSxLxEdE76u25QJDeRdEL8ZCibaGvMrw2QXrjz3EYS7fL",
  "key32": "5iDy5WZo3dWJvA3gCTVJwDNmTKrYoRuPnptcuuUs4jZrdRwyWF88wtduAJCXXZL3khpHKFLmgYCMPJkVag9Pnv2r",
  "key33": "2topBhN1vc9sTg7snixUMXzmZ6VqrkJubrZs42RPSjPXvdDuSADC4DrYoKA789q9uqH97GiuiXxdbeSyqBH2Tade",
  "key34": "5bD2MF64MohQWN63EraQQNNDtwVqkq92Dfv9iw2GCVpsngPgVKYEMgU66yPLnMZrwnGa35bYDvVkPoNt6W97dCK9",
  "key35": "24a7zo741kmFpa1patGF8Rc4CpEnUztXgnvbdn8DrsMYReHjWPbpz27aUoDvsmfTtSzUSB55582yFnXUAPLJPQ2z",
  "key36": "dBJWGEoNLYNQKwgmrtoWTrqrh4Mrai6LUnHLYj9tXZTQ77bUm2vx5Ad3xDSVitJGEaHPkLXvG9nSZehrX27kYd2",
  "key37": "5JGBHtexBrTktdEPMMKPXpbz7bvdbVmEDqdU9t1pDQMe5v1NsxyuhWebJRPA6gHQvdHHt5X8sbcSD8E6q3nWdtA7",
  "key38": "2PGXaJY8RAC8PQ5yoiKmNvSUPJSw8CkKsiXB7zjf1TBhqa9XN5aKePajjYYpQ786xySaw8X9HfAq3B5mmaGihwPZ",
  "key39": "4yeiyb59MpApaxzGDexUf1UBSvppj97cBCWQVXgKWmHKn1PMm5xdrGi9rZP5wtYTstzdSba4M7VM9Jyh34Kj5rsu",
  "key40": "2sEv9pS1GidZgQN4MxAsPexp2NbsLZGoEVp32s1aXtCvWM3HQ5N8pCdQ48E1SvaAmc1PmrmugrupvSG7GnDuRmcX",
  "key41": "4XG2P7pmuAAu3dD4JcgzAm8cpGbnq6yzNMLMC9xnS2kVWMtrLMYtHPWB2ZKQVgYkHEq1qLqG2pFc5rCNSB5igk9S"
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
