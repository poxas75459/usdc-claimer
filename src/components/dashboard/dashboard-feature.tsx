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
    "2LHCRHLK377SsJXEN2wegFF7SbT9E8yosb6yUupQ3B4sHQVpht7zENGnYjYoBWNtsRAaLAqruNRtTT8eKqTp3F7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G2yzSkL33AjCsMoayHTHLbUW3RdyfG3NSBoxkzxLEPwVBpvFw6j9uFVEb4tnLt7rEM8yz6gX3TrZiAMikmJbmLY",
  "key1": "3h5h93k9yFM98cKq4yCWhr969G1AA4zceBcik97HCF38vZNGgbQvb5FYJwrzSU75eXrj68i8gpdPX18T2kceCBH2",
  "key2": "8EoA5aSf2SAm18VGqk1t3AimApuLjv5rTkBktyAP9pJwdSnbNa4FxugtK3hk7ygeaNzSQmV2HNDMMFu7acpsGER",
  "key3": "5bpvD57njZ1V97jsUuXft33LXg52BDzvLF2SnztF48kH7dGgJfJv1q7H8h2qXZcDSkkh7P8uwnhUYQVeAi1BaHcT",
  "key4": "4w453vdmf7nvUhUSRntSEJJt5miR9XQ84MPp26iFktWcdfeoCy6hA4AdPDQarzMti37a9S8ajHhazFnZiJyWFRQR",
  "key5": "5qiQ9QQuzYwycRyzsX84EoNwybz3EUsb3HzC85pniL34PD6fFytgsjrdTGJMfdb5aeFxHvxmAvhNN4YWxNk2Q2dw",
  "key6": "5mcYGCifFi9JbouhPFPuYcMoZikycxQna8if6F78NPy1EFGj8inKFAqHFM9bWwsf6QhcrsHj426vosf5Cnt5yctd",
  "key7": "66y2gd27sJPdVJ56g7csU7TZ6zu6QRj9yHUqXgrqdXpxQhUzSVCDD8uP2rvPyPwxQ3UkhD5DSLU2cByMnvHhcHFL",
  "key8": "4ifYBToLvfBnNhFufGCCPyG8TBfskY8czwUfCpHafEqsZCXyvzqEYBiPn8dgMYb2kYxitbRBRHdR6fVTkcXz2utJ",
  "key9": "5oYx6CAdhD7BPbjVufikHcqPQfNdL2WuwvkbrdRLJ7XA6jk8FwaRabEbuNDFSGpdh9ggxMHSFvKEFqsecQP5hfRD",
  "key10": "41WUCjk9AzJGpDAQZBFkfEiTEkM7NEFRfnQPXASmymFVroGBqEiVogyHzj9hzCXmQXUGX7VejPzNXDxQaKUi4dAF",
  "key11": "3RhviRrNuvspwsXpgkhhWiSLDRFxFbNNX1bdbhg4tBpuT3iGwro8YamUJ3Nnx4CBjTU6PWY1WdPru5jgDJa7NGA6",
  "key12": "27cbXXg3nqEVJTPejbT3tvuUyv7GnFTLaGXgas6416Naz87kRgsBKH6oe2FF8CG9LMnuqBjP6m3SV1ELN1Bg2BWN",
  "key13": "23LH5kz8MFfuFQRzDY2NeihZViqHjgifSSbDEgF9uvfyHHwa7sNB8ZvtTLgvBCBNfwUmPNUubpKP7ozWZUhyiguc",
  "key14": "4mX2rkNxDPjkEduVRoHGrAQba3w3havBpcfQPsgEryQBi6u5PwgoS22xMTvujDjVpnwzmUZZJPtYv46SMKmSDyMM",
  "key15": "eJ7wg5e1X1rgNz2WUG98bvAqa59yS4xrLiMZBz1xrTzS5gn3LcdukyXSLPoZtPQiC31FKSfZfYQyMS8LAbzRS5J",
  "key16": "2KZsbDkq3tJMXr5qjWeb5uZVeSJ8SMMq1dGwdkwCXwkZ4WWaKDaLJvh3k8yzqErLsYsz3t8CGJ7WJkQs4VDetZUo",
  "key17": "2ZxXhYqx6boztVSpfQNgj4gzy7bMJApHsswKGjzkqz6a31o3fuWcrG7PjMzSAu5f4eqgHhngTwPHueFj5koVsPX4",
  "key18": "5Ve67TUVGEGS2U3YNyS3HFt1i5Kj6VJdjqzTdGuzTfPAiu5tHH2WaiVrMobDC1QT3d2D1ohsF5oLKhy32SRWLTWR",
  "key19": "5y73wQEodY7vTQNYwWNQydyGBUNLPWV1LvLxdv3V8EL3G5XqNDWARaMYYzTHLcojeqy8geL99paNnQkUVv4W2QPy",
  "key20": "3CG3no1baZvpuGc2AUnvsnA3DgDcpompPoPaE4q1X7yTHduBzFXdYU6D5pgF8gA27bizUXo8nRdZoBYJxoqJ95W6",
  "key21": "5FNJDJ79YRi3WDgwXktutwNoj1ypZByteMpjPR81LmbnfZVyt41qww9FTy9YsDGHY3vgL1CA8EZYtYEwsdyLAojY",
  "key22": "2X2TXSyiouPfXt54g1w2BjJUApiQ67BMoyxQZejrJ5Y2eBspXXJFMnn9KdqLMrRPiAAWwRQ4NAa7ZzPnEGbDxvh2",
  "key23": "27B2M9j8vLF2kZzyPKk5ghVU78Y5CQ23G2sSSd24rwgNyDa9jLp4vduDDXoyr5EAEzwyzz1WZvMw3SyZaLUFmjyG",
  "key24": "4CBJvJfNQeivs1byfuwYgSKYp5wgiELvzGs5zGk3EKsDgSHmcEUodxRmHeRpxmNZVUPj8i5A6fHvHAAKEr2QgmBv",
  "key25": "4D6AeM4hMCfhveCVzAF2y3ChBe3dowuVTkv26Yf9c2UywWrBevuK6dmTQUu58FNBWrki1kptq7La8CqXq6fSAokm",
  "key26": "pn2u6rEpz2sa5udVaez2Ln4Sm2xdpdhS8ypD8joMWfPGRoCenbSwZLJrL9jUK45Z4yhedegozC6ZMvgHz96hgtw",
  "key27": "DJijNKWeTTAh85q8xzJUGA5Tnyu4RdJ2cBnP8id9vmNwGkJmVybCQMAwGM8JahJKiZenEwqoGUufq4Ykwt1unaR",
  "key28": "xN8iakVcWsECtDtPuswbqcjA88ztuZU2LkAQZoshZRCriE8ZeUmkGw1G5DpqyNdtZRYuYhsBCKgohup4pRoNENJ",
  "key29": "2UKJ5XksDd85SNFi7gsvX8iSRS9farKhbegQNDpMwqsfKeCu2heVKRaaTjS26ZraHwVhCmUgNNGhaPrFwbAkFnbS",
  "key30": "3W9NKJs7E437pBHSDGkpGicrUSPifWNcSnD13woj8tjTyJrdmoycpZ1M7tZCXKuYLDDqDHF9uBmxB2zRo5HoQ2u6",
  "key31": "viqTrVdW7M5MjUfDrSg2F233Gv6Dc8YGRrnjrr54Pdfvy1S7LmdQWMr8agvNFQaGkFtKsUcK8dA4GFz96zK12W9",
  "key32": "57KznNcMmLyMXKDFeFkCvtFYW8gTsUjiyUm6FhGuRN9r5wsT21T7warw1yPrFn8yW2H1JVduqZWEzcHYY87fdktq",
  "key33": "5VoaHhLUqzLrucZrQfx22fXE5ZUTbNvtyg7n7c5gJ3zzBZ3uXaWDVdWvRMCVMBn8PijcpzKWmg4b4hNLqEKEPvWA"
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
