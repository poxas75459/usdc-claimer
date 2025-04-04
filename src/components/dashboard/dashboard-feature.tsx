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
    "3T4MYEaMQB1MKwqVBTzxVoZLCw3RZN8d8j1hYaWnVbrrqDxDBH8KbshvfbmLAvvwTFt51NKgzdZVVCQgw51zi51K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xz2wFb2r2LmmEUFA6uhHqV8w86FswNevtsjdgzeigiWEFxtaXwRx8mx8EWHof6Uun8bgGiKE7h7ejD3qrcK4yDR",
  "key1": "5yReypDhe3AfA5jEM6SfkgwirhMMj8Sr9JwZb39FMqkaerurNgotJkFsbhQai94HQdQDp9b2idJxKyNJBLhNZxoa",
  "key2": "3UY3WsP5vcBfBrkpMd5o4um7jhSmyJpgmB4Dbrsnfem2p71my3Srbd198ZRMR5eEvN9WEiex998R2eXuahFHJFM5",
  "key3": "51pghHrw3KUZqKcWiMrmezFq9rQoBRwmr3pmgrdhK43qQMCkWtHcw5t46qPKLehYD2iLSukqvExXVK7eLcpn88sK",
  "key4": "2kwqF9Tw8PP3ysVBoLakBSbDjNmq9qFrxcCYgbWqTpZb2vEF6CfFb9ZGcxnQWLWqdYvayyzJUFYJ8WFpU3ZaKJ3Q",
  "key5": "5wF4mY7z41cC29DiYgxdGviEmBwMZ3SMsxFLxZUEQxCd8Q18FTDbAT3WwRtYRqX5T7ejuG8SXKP4ENEq5cLgtCT8",
  "key6": "5vVxqYisbURZ62Q5SqQJdfZ1ydAv3evK9ywsasukRSUjaGfU6zi5ytkoMLiquRwbK55FRVAb2FrytmYg58GMjSLC",
  "key7": "4wsfGU47Lq4vEx3QageJdRQhq7S8TXMWo8ifpP4XRXmPDULXYNTjMcCUFW9eqbQM1Nn4kpgUbH99mCfbhLk9nAzq",
  "key8": "3ruMT2HsgcwkXzHvBbYjPVmXAXT6V9ZgCMrTaDwXmsjBncTDgehAr2XY2xzFMAnySdoh2aHW1vtY4nGfouVmw7FZ",
  "key9": "3ZaYgL1bd6Ym3jZMNQbaGKBS6ygizCEYRDgScSD2kgvG5EXGgVHEQSG8ATgxqsLRMhvVezfoYx3txbjWh7BWsEAX",
  "key10": "5U9fxXZEaZEHLVQp4xuctDLZPsT1toSD2fLpSkQLn7ZVxUbjsLPsvVFW1mxmDSSNDy4JozruM6TskR4zyWESRs4t",
  "key11": "3e3DEjMW9erCo7CZgWeN2yHgQbWe6yA8tgUHxzymTNPDwUdBB45Nbq5JdpAsdfJu1WPKSCW8QggWJjRVScrxRb37",
  "key12": "3TUGD67rnYpgxkcNfvhpmc5nfdcRJUEWQXizCom3fCGhZHTcuVyHkoNbtwNKDUGRTSwzQHRZKVjuyYEhdqUoUiYH",
  "key13": "2EQNecUAjnEJC1fnXtyZdquovV6mm2HZQTkbmh4L9Ztnkq2PCgB94syQg6iHJBX3kKtrAfBzB3Up7WKHQaFHGexm",
  "key14": "2zJQwRiiT8jiDWTztQr32pL5j7ska174aakRaLkq3tLxkRAE1QezMmeZYsYpWGp65FTrSapkdvRWr43Zjfdxk11h",
  "key15": "KhyLnoYTu1qHdKsoHLVPSUJNo8gwGY9sUYiqwp3bxYj5RrDWczzTKTb74FcXJ3tPBoSnSFMwZtETgFU9QEpWAUs",
  "key16": "3sjaPQSL6szbNNCE8Zdf8EtzjBxb2KQ7YzTAGKC71DWBJ94asnN3GwjGhWSRwk2zti83JkH3iFWSbKgzZHHjyV6i",
  "key17": "46DiukR3adF4QPAAscdMZri7ZAnDrVjthzQQXKCVRzBYFBrxYfVrS1RmSTstjTEziVVAVWP9t8o2qcsFY32jcFNY",
  "key18": "64WWM1ecytoW5cQ3ZN33kWww33srKG4NjSwGzFnjxTHH8PhkUQYyTL3xQCjDanTwkHpB46veGmDPsn5taQjWinPx",
  "key19": "2o6feWYzekzuv2cNdrv1zhkbcojetmBr8T7xv72PCmVyHpCHMLsNpiq3heKMkSDhrFGWGEeuyjWwFY5RFGbd5Nzb",
  "key20": "UaDytaPSmFqkg74yLqK6quH97Rcqq7W3VZFdTte2dDiiGSTHfSFbFjujwkwfDNi3mV5kK4DkdQakd5bw12ZhWHT",
  "key21": "2qTFYy8nHFPFmb4Dv9Wc2VAwu5R2JxcTJTJug4f14U9Qv6cv8N3CT5yE8SDeC8LaqpEwEZ7uz7aZoA7f6a8b41Z4",
  "key22": "5zgjNX6EdcowH3DAcDYMCoNeeRUgZnmBh4xbMCrpcFyq9Lgfye9wgu3D7nrsfbf1g4jg2hecrroS4PzQ6WkcYypA",
  "key23": "3KgYiSHbn1YqwxnBkW9z1ycg6m1EZBw8wYDCpWhCyyH1LnSMrHXudwfCUCX4kuUo9VnoWe8Nt2eBZNVvg67NtL9f",
  "key24": "wCWW69PyuDp2BvabnwiPw6roURjxcJSfyDqhXT86YPn4FMP2vwyv8YkeYDVKtawd4zqDqS6RyXB21L3twQNpJB5",
  "key25": "EXd1GFjEatDuyhQMR9xvcBfeb3eUbSkaywAgTpyH4bt7WeCqU7rovJJoGNQAgM4zetwmKm8pCUU1BLckkeKdujR",
  "key26": "2Wc9uAW1LM8Hm2oSCWckSztoTnY8847LQ5sG9W36m5WJyoc72kZGGPaVdSAj2PX2QyGaPgkWmkE4MKJMZUYKozow",
  "key27": "66jJRx89TZFRvKqdGDsT4qcgZmx8191fU6EsCzB1SBcKRA2pCVF3A678H528tCTDbxfYS9Y6c4ugusABoKWjtyrJ",
  "key28": "5mbcGykkfkwqperKYQnLR7hfXeG1sAxbCB5ZeBp5qQBGffUrfgdUkFd6y9Gw3oEFzontkXktQDV3JTbkMuDgV8MU",
  "key29": "56bq44UGaf7nhVbD7TF3sRi6zDvL1etX6DgfrcgDJtU9VAiR9UgEAAZkyg4NFQT6PYwicsczsJseUDGjWbUZ6JMy",
  "key30": "2QytejZPJsgubGgrEBPapzEEE2QDCgRR5ShGGeqDV9r1W851DLyENGLhfC6UyRKD2iY24LKJSHyWtx1cEdkvBQKf",
  "key31": "4NKFp7dYAfMLyXUvwFdiJYbvneg8GaHKVW615U3TLsHNftZFc1pUrn84aY6m9WqLTtiuDnYjSWJ8PPREWrLKdYUB",
  "key32": "maJACFxWTiKto3E9g2m49oqtH1pzvQ6n7gdfHkAhNdELfy6wmDYF7HRSnWP3HWCNPpjrWMEYuk2omDPs4yv8oQh",
  "key33": "4vAeSZniLDggFqHpFUhvyYMqMYd5cRmSwDUWTDmNjQUqCyZPoN1nhLbhce2n1Xz7L521txDmLhw2c16Rb487ukEc",
  "key34": "3S8M2BKfSVHJiRucG1DFNz1yew5Wam8Aqqkyy8i1SYd61ovJuV67n7jtTx6y9VSgXUF6mSrjcn9u2cjHaPD1DpWf",
  "key35": "25o1AMNpU8Pv3fZuxFKWNU5G8no53Nb3ppcyGYgeMEqZNp6B1DAQTNXgydBpdJN4VEq6FLTN5ZWSzWgKSwqLtnAN",
  "key36": "33tDCstzVQNqYCH2cyZsHxQo6GhCN5cRej9YMi9euZaBJ9ZMcbFVdmcmA7RHwsPkyJRmJ1GHDpoeksYv7eC1xFmi",
  "key37": "5FUDsemyWu2v5VLAGgAJMwTX31gxk6JfNCmjoGDWLv2hRtphDQG2HqusANwJqR4zKsqkFMSqLFnHd9Y4vd7zUFPQ",
  "key38": "5enAWzAsFAbMdLGYGUq3sqEWTC8aTGG9Ri8cDQrd471BEY9fcfjVNVoj3JCzDg94DjH3rJCeKjC6FwLUKk2fLVEc",
  "key39": "4rrJendnMjjwdhtzYqd3GnafqikmydM3tUjYyqXUQFXQVhhCtGuFWpgh4MpHSdN4vTdG3CXGZc9U9P9HQ5R9BHfY"
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
