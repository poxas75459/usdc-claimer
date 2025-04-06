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
    "3GayGCL36ZbsSVU3BQgJsc38bGP1xzM2ZMGVRQtjbdTTmwmHhWKB9ay1hmac5YizDrx2GTmH5e6sfhMRLnfbC2Jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzcnpNYtx8R9CTNoVREdAKMReY5KhCgkMEKEjCJzRhyRbnr7VEq6i94J2oe12zB5sK3Y8DCCfpWieGoaidzhYPf",
  "key1": "4VE1sKzn52o4UGWmJidrv5zaLnuMFXTmSGijNKskyrNki6WQgiZbHYHeG4jMHT4m1PvuZU9PrA7gMnzDnKxYEFpM",
  "key2": "362Rz3NyE23uJuFwsUzxZzcWjdMU4Ry4g3bZJqoZuvmdP13xYBaTG1tKmMZsesMZyGx56Ssfqy1Uq13urJ5GPfpM",
  "key3": "2tKMiHUYpmnJxGU1yzQeKsTT3uLpz9JREX6ffPYJ15bXzmzHYx5rEwXxn36si7xXKthdLdC9ZM9TahLmj2Ty2KKw",
  "key4": "2PmB3gwn7FsXTYjBqTK6oR4h3crxguhw1pHs4yM3Zhw5YfoS5GETR1jLBRwQhWxchubEp17FtDS8AgvxM3WqGcD1",
  "key5": "3SsWRpSiKYWRG52Df8jCdM87ft1VguyT4Z6asP989xHhW6AQfYKavgDgjjh6RTFtqY1hdsEJczpypqmBJZ7VhFa7",
  "key6": "2A95KT56aoXVCsaDhoEumifC6jmhyB733xEka5CuXTPLK3eDMmE5AQxogUyjnwmt1DjKSpdwemZWwGyAidLBhPLp",
  "key7": "3oqPGhYy2qF99d2KfgLw6G7JvCFMUcYboU4VZt6e6Y1U8U1hpu2Teedu25QgRdpKELMNQ8UxxwoutMwTopFFgijb",
  "key8": "5UeWsGkZnViQiuTNsonxnGcNfoqAkmTBPE6db6sXL5qx7mw5caLkkeqhgzmRShEFcrRaGca6jvPXAB3iPB2kPdUj",
  "key9": "4djemqCFfNJ5Y4VMVBZF4w4BLLVwcvjrq9Ws215cShvXpjFC3dvSCBpKhiJakqYCLY27W7znuJVZkeH2x7V8qoQh",
  "key10": "4QR1gMUagX6ruyxp8xL1UGNxFi1tWJWVgwSbv7WHG941iC161t6xfSxAW1q28efkekB1Y1LzTgcWW29Gqm2PFXWx",
  "key11": "61jPxjyq6CrcCUW32jaVdKdbB1pnF7FUD9eZLNfXr4LSeeefAdRAxcRx8TPWnf1WiidX4GLpbUYpe9wJ5E8YeRuA",
  "key12": "oyzPvE7X2JX2UXyeV4JUNAM6bJKpLdN2QmanR2JGk2h9WuhY4YFL7pJsCXdSrw9yP8nfZFm6s2PjEUqFmr1ZVux",
  "key13": "47AuUMeirHS1MsQv66inHiM8fLanVNssao8yUEV8A8qj82tUPuFBNLjWPqsfp9G1marbPmSxseyYUhipGrFXigPK",
  "key14": "5uq7pLH8w2PomdkqmFpWNx8DfLHB7fAHi2kobaUaeZ1B7YJyQEqEVC7Y4rNUYmP26h5xuvsX624eRCPLvKHUXZYL",
  "key15": "3kYGx9wUg8XYAfiedzbBfkypTQzgnqetmJHY6xUqxowVuZ8DTTEVbw3AuCPS5fkDW1NBMR6P618ven4gruwMdNEs",
  "key16": "46NLCgijuPDBDpdAB6GBrXrVcPo67HKMCSKULY9FxtYZgjCMfQEyUVyfgg7x4S7hy3f112VDnopBVMitvDgW4XHM",
  "key17": "LWbDhEGk8f1Aafz8kNHgB1EFxRGz11ZxyEfk5fk48wEJCZTZRK5Y7z6aPZaARAfVmzn8YN9hotKBZEo3jQpPJW6",
  "key18": "3Hft3wvjsimquaPG49pj3sXJoHJi9XSFzDGNofV1SpmBzh95mU9VSMi4ija9791kwGfGa1rADMsn2wTLhjvxrdFF",
  "key19": "4c8D5KvFWApFA91uzwLApqG3efoU64WSFrffnarweZ8HnyG1xZFHvTBJUfN9DbhZV5KrSSWdAYK7Keb6DLiYGVZc",
  "key20": "7ydYVqReGScKagbpDrHqdbT9VoJs84qyFYEFaLChktpRnGW5LcpPF4yCTGrqo6bzTSAyVTovkN5ZKWMk8DkcYTH",
  "key21": "35zxGDnUSpKMhihvXwwJqD9SvsNMa5KQUXA2U5DKE8Lmfmeb4GMg3rg3noeuYf2AEUoSNwHRxigT4Qmtz1WxgfWW",
  "key22": "32Wqwc52JtvYPVMqYjjZnUA473y22JyRNNiVx95jTcYMsT9Cf82mR5aoZyg8SC5pGxxrhwnujcuZjXpbwLYkmuet",
  "key23": "txDsm5f1j6hkRNLoUxvZPc6DZ2wDBCkn3HsfxjKAzDaXrC7wksaUrseowgCdEZbWf89QhCTBdmm1Kui3NuV6kGC",
  "key24": "5b1HpWR6zUDer9CspY8i6fWrsTW6ZrzTP1rW4doGo71hJwazLhnybxPu3htW1jaM9op6TUTntPEowfwPS2g4QAG2",
  "key25": "4jjrY5RXgsgkgQi6TWymqBDhcxD66M6mYyTGCTsnv7FsyY7W4m3PxirzvteBSz2fXrqtHsmEnaSED3jjr4hjXeYW",
  "key26": "3WRw4ghS8CrYGvPYb6C3APDvofDkZrAsENFUCSVp3RNeaTfmseWFw7ocGGLxMWpYtcK1pfpKhRwby9rwiaiahP99",
  "key27": "4QN9gr3YMqwJSGAUsmGdY6gnfRWDrRjQCTWbFvCp25os7VhqvFmMf4vNrQfuJ7ogT1id25CPB68k2adaf9c4zmVL"
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
