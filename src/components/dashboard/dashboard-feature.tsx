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
    "4idmdcttYaejwX6hreDfxBj8UBLYusUZ7otosDscNSQ9q2orrEsC3aUqnw1yT2waxtybc4TsnFtmKcvN3n3cGV7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cX7hANVXzhtqr9KLXHZu7V4v9PqXss3xYUHFdyUMDTL94BCip97e3nVywvQP1APFn2d1NTro4WrwY6bzgpD4u7x",
  "key1": "4vAaahpWyFvG4FCT5FAme9bmYUfaC5jzMJgBYXVauUSriYfZj5BnKWTBNXB4StDRhCNmKL4uEfUBRdpp2gDq3qa9",
  "key2": "2mv3hRr564mqzGGiHjf7JfJNddLPbuGF38V6P2q35vBabU1qemHm41rFrWEnsBUMKPU2RY7K8gykcuUCWCzw2jC8",
  "key3": "5ve7fde1z1XjrzQixcuMcVg6V8mm8oZ6brNcivfGhzSqwfurQARR5W7AuRGdzwJwVebLwxoH2X8uoUK2KRHSpd5s",
  "key4": "oeHTAZ8mJuhw9KLg6YNtDT7Qy8x6FY9kg5vQHg9XQDKefaVwGWKLUM7X4YG4Q96t19xJL8mdGEnXvAj5GrDMYec",
  "key5": "41QkBsMhB43uTvJECFFT128qx2CP8ZQYeXWkeEMjbtSgfeefc3cxp2EWSX78oVcRncGinRZCy5iARLu3QZkGnJQW",
  "key6": "2zabNCxWKvx52K3SG9nMHCLiicAQY3my6nWZD72N4dSEVGCkEmcwze1mBDsqFVoTJbpXTLVS3XRb3ZjoPtFgiULn",
  "key7": "65UYEftxtZhWcAkGY3qa8fG6eLv7u8xR2SrS24Wr7RHigCugvGeYEJkRCN6eiAqn48WUS7KLZTo2hLHJZpSVdTQm",
  "key8": "2xZr6TAiSKFBTBqPdwd1n2kqXiqsde8D2a8H77jFmgGGTnX9RvERwKgoRRHFeUFLwbbkhTAVQAYA9hzGVBa6Av6X",
  "key9": "5uGwnoJJpjxRTsqqGuoMdiZyvUdAqqCA8itarcEDXyrNneTfrbvyrUHvSB1fR2tE5xEM9Dxer6zxfVJ3atSJzQXR",
  "key10": "4zx2QrLH2T1BVQqGsxLtZQ8AADQvkXFVmCyAWQU4pBkWPrEC2JxW23aJW7oYopvveqpRhL3d64bEYC3ovDqTENFZ",
  "key11": "5Vdbk7akd223L7EpyNN5H5PegiUHbaTxfsgWtE6HCw3Zi3aX9Rwo6zKipLEHkYUuxp9rB5FDUeRTJnqG8gJNr6PY",
  "key12": "4kCTDjuyBurJM4ETdCns3ZvFmGJCfGqEBqnDQa5C7EaHVdqC25pQ4mMER3ujcTNJhZDqsFbYZf4b2WGBSLv2g9pR",
  "key13": "3XwTtqiSkEsD553orm5YYD8a1ecrKxV9MnB1Jid8NkgzfMzqXxrEsHUBi1qxKEDyAopJcKLuwurgtWon1tz3wThh",
  "key14": "5D8LNSrymTJZFdsyEZbRRyffvLYWCYwWxNW5zQmwPbmXWd9Q1c7zRj5RqhPK1nuQDjj4ZyQj9LPrDbpfSHU4Rqeu",
  "key15": "5X4HfMPMUw1Ftg741S2qbpnz1ppobgzrAh5XEPTt9Z8LdB3GtbW7whGuH53fmtcoZogEDiGMEYSmB5KFRSGAH63K",
  "key16": "4ycEL5SsATkW5buBvRUV92PemkiVw3GjKgUyPDGxTweRZpY7EZsJzhrqoizs8togn4RA5UNwj6TGmofPT5tMmxrW",
  "key17": "22GCoxv8eBPM88RvMeStiUtWENp8n2cLVku85ta1Rp7YEGXN2rLecr6xX5GDrzyMjhN4xFdViYhTvU4UTPydiq4V",
  "key18": "YdP4SibMfArHo8kUumwahVnbgSeDia3DEvQ1NnYiKksiW1b2PaTkHmZarXUqADzMv82PzExS9i26T1vDi3gfsSo",
  "key19": "zvvFgW1gdbSEU3DT8dvPGzmr8k4iP1wAWT9hBGfraiQpHAEWKUW7nN48TQtFpM1xatj9wJY4wHaNiRADMEMJB7g",
  "key20": "53WU65ds7e5EaU8AYm6Tn4ZCQ3SaDSaDwYAfS4tdLVm52zye4fdEN9zr6CrEvoRAqQj17uAZ4DnnPSYC7vtVWetf",
  "key21": "GkZfJhCc7CF8jxvQ1d2q2vYfMDaeCgftwnziBrSDiUQZt87DddUa1A9unmqdJRKuFqk9JSGkDPDzr1CKApYM5zr",
  "key22": "5x4zsHxTvfTtZhABxPAfPQEmj5Q7Qe48gRYHTdfzLt4ixczJqhsuBwiBnuNQTmAH6naVqP9kcwZBeyaCK1WrA6Ry",
  "key23": "nVRbbTp4XrcDJgZQWDHfqD6UnHPNqK3jsNs12qsdXztQAyvFV1ZbGbH5goJWqH84Aq3BqnrzcTT3ZAsgqtCX5Nz",
  "key24": "5PTfAGTNAR75d8EnhyUKLLtzZk6pe9tbQSftkqDHLGFxkSB4gFmU4o17K9hEAaaHe1ouSqVT3bsL4FiSS7ZtJkQG",
  "key25": "4rWqJ8f2QSj1QARS458GPyDrbRHPvPRwPsLeNLZ1obZg3wMm9hX4PSQdQTMTJccb1sQt2er77jHj3d8SQiLUQxex",
  "key26": "h8QjDrdcP2FH3CpQHQ9XfTVLWjQuN1jpW2js7LdYdc9LGU5NLSB9kQSvVbBhv86YtkAcYgdhEdbiQtgPC6RXYwr",
  "key27": "3VHynSmbfyfF8oJNfjf4abfgwbcYxgkG98ZXw6HT2H5GpaJEkF4xx5zEavDYWZyjPpRxAPsUpAYEuSNordVfnyNV",
  "key28": "4c5ia8X2YQ4JENuJ3DVACHSXKewiQpwxxnikgHcPHJNGhwh9TgGVNQuFqw7j5VVchQN69ZHjdsw3XtvcnbReowSx",
  "key29": "2Hpwwq4dYtMKMawkMX6XU9bNaLMc54XG8qVCxr2V3revcNEaUvHyEqBoo7m5iN15jmfZZWhQYTsbW8RQJhKSSdm4",
  "key30": "3YBdG52Chh8XaQJSzTf4j5UEPevFQQC3ryCps5DM4CJEGa8TbeLDSCqFvrM3tPJQb2WVRxaq4R94LN598da8SZsn",
  "key31": "2FdFVrhjakM6EbzCgEXqcabSzdNFSUDcqX4cJ9a1pBwmC7vtG66AokmTju8ELq9EATM77XPG4RgGdwxt42UeJRHe"
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
