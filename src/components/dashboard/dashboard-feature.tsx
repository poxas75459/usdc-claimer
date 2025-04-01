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
    "5xXYir2LtWpCmU5uRND1BsgyUKt7AtknSJFBFCb6mw3Mmn1PLYBXKYgSx6LVmWUMDUUBDG7a4JrEsJRAnvx3JaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YuvbwyRoeidiQFFpjJVZbhwnFQa9RoLaf1WNzi2ojCYj8BeJxD7ucUVGRvUNde6Hv869AaJNb2x8ZBzw5ZAYcwk",
  "key1": "4XQee1VBsEo1naxSmnQKd42wNPMuqe6cpb5MhFRdbvNLSozcVuxPK1gyRQwtMucmW7B2WeviLp4rUSXbhc4ESRh5",
  "key2": "3Vpm1pV99vLq5HNoTBF6UAevvPsys36fqe7XpSvbf3BoAXV8HKvPh4m9xjLTYgktHNU4ZGMxSVEXrYPpT1uAWa5f",
  "key3": "3rKkbYgzqu9WZTKZrCE4XyNzMD7KTKYyyDbR7B38aXoRirajvcreiGYHECDYHdR2PcEq8ttiqDptam52hxDMvthn",
  "key4": "3i3e2CT2EKbWWqZMnDZ96hdbfotoStSf7efUho2CQKS4BH8hKWH72umKUfCs2w5JzkBeF3Dy7HSXnRkkeTN5BxQp",
  "key5": "5FiFo1ntpD3AgiTP3YsXJa4vV8bekiN2g7rbxU1TLa77jNahho8eQF3o2DdkUdrgs8tn439QgnnQ2Lw8BaV7gRpf",
  "key6": "WtM9TcYbbKnmhhpFWMFuYQf111dvoNrvQT5H4UFPgqPD7ExGbquvDMf1Sk2EiKLWT2e24KRXRsubigK7SsyfXQc",
  "key7": "4YdHhL8zQ7JZgXv93barjCXtyLXgZk4WzU9iKetuZERvsBAJQ8eqGpHZFAXaSXydPBzBCJRDDRxqXLnxFGbEX7F1",
  "key8": "2ktQ4ui5PnF4xDyh2mtJzcD4jKzkHotuaA2mX6TfLMKm3ss2gDEcodj9b8oX5YWHE1WEtNbpES4Ptxsje9LJGWnW",
  "key9": "539u62J5EKqzaiGJqZiQXZnHGvqYoUPxFK2bXByLVNVJq7q9EQxKLRmXPLq15B4dq6rdL3e55mD3qvg4yLSo3TBX",
  "key10": "dLt5nW1fqg1vNGkJwQHr9xAALmhP8sFpmLvFGTN578JSjqrbXGrxhsv8SGgc3RpDfXir7hh9UYTwwdbMts6LhQd",
  "key11": "2R3Fffb42N9pJ98nGxc8zT7UJRNSFTcrwChqHCi2FgbZVsb7YSZU4L8CrjptsJYKMPLPxAQa6vCDoLTtuo7dAAHp",
  "key12": "4UfNAo5NAZLcHCAaK9yuda99nvCQpvDcvSPDhRUngzVDPE9UCZo5tzqpDvALzK4qbQ9dCBF5K7dGar7PKYxkXC7t",
  "key13": "3JA31tKsdY3sMniF4wNRZxgH6cUrZPE3QjUCjfgpMxyVz5jnydDZwBqYvK4pUeXBM2cBv9dkEbF3uWcJdFutp8VE",
  "key14": "26kGgSVJ2af7QGdvwpSK7f1CvUMxPi8pPgQz9Cn1m6vR3AkERJuXyhGxxEeiUsRFRba5r34gRh6L4agtnktybEfv",
  "key15": "qZ6pxCs36CeRo8cmbtUQHraT9VxjpZVUCkjotbQJMqVcgnHRpFnoxg4pjah1V87h8e6PsZupDRUm71ezKPrrcQU",
  "key16": "5DK1vq6nCwQHgVbNaLbZKVtYSaicN8bvgVG7vNnLxMR9z2RAsQdGtZX3cGDVFtAzRcsrcLJxxeDXa59pQyBz4qAi",
  "key17": "3myFm1YACe36xPbRjQVRATaCK7RJfKGHqchxYAMt1LT17swsr7Wsv2prcVmCryMpfRh9PkpRdqPmv7WnkCrWMPpF",
  "key18": "2AwYWhpN8jRp27GqSrhxMfcP7AVyAvpifeQuYjDRhVmT5HGJpahueKnxv5AsrT4GKmA7JFuznCyDh5sKDs8W8pH",
  "key19": "4Mek9EBMUR1mTYVYkSJfdW6ALaK3Ne4wjfsGuc1UsckgadWa35FewHqpnaCypjDRFBK4FggNjoKuy5dfhNaPVQ2q",
  "key20": "47CQ8qNN9KV2T1EdiNduaQkUaaGDV7T7HufPaBRcbjCWV2xNi4VmEHUDRDLjSduP9JhzvT1AEKJjsM6FUokGDZnp",
  "key21": "QQ5fGoaE8HLCYqtmm7ZveB2Ptqed5bFhS4VFE66jicUEXKtJmEpoEJXwyginZ67U5vGjbPPdm4hgaf4fst9cmKs",
  "key22": "2x7k341DuPt7QkRmqrhZHrnjz3Bh3aTgpbmJzGxHtxET5hCkYwqTY17JqoLN2NEzs4iNkdkwUibK89bdu2U9UEi8",
  "key23": "44KdWdPeDrXinXDa8bfbBWfQVZ8AUCjPQYcr6FWwnc1AcPFbufq5t81MgLKDVAQ7ik8g6h6Gyzm1pSsaUbMq5P9i",
  "key24": "4cRPgTgUBiSeH6MNNDe5Qq77CJ2otxYR9DNxauVtvDBS86TT5D6evZZ4NidXVq4mjdTxEhKRdowfaSNs9da4uwnD",
  "key25": "5GsVb8CppXkKr6bmRxjRy8zMAjbHGoTN2jqcwAgHP71SBfGSAxQRQbXZktt2RsrSPaTYPFF6mirvNzWknnYhg8Jv",
  "key26": "4jaessQmMAgxQLmWg9Dv1MPHd6RuLX5Eg56fTmq8L2vBRV1ZBJwjcFywZBMHfQfxBQrR5qcwRBjCmyDeNAzQ6fJE",
  "key27": "3HgFrLryhABQLNQBVMFjUyJLv1U763HqsGc2HseKBfRbQZfgSTSRr9MoPWFE1Ls3LJ6jds7LjvQQigBvyUuSuEa4",
  "key28": "4VwixVP26beU53wsnNPxb4YjW8qjDt1K88exMhPzYugEMPWdrcjFyiA2JFfcU9JYYxt5ttmQkSpTJBqV7NuD3Nch",
  "key29": "2RChXW3wdTfFQJtv9RDsTw2M2y9zjFW7Y5xR5wcdNHCHLKxo66QmxeJxPi8LwLPmqQhoo4DeJqj79DJcqdQGoXVP",
  "key30": "2t9LYQePH2uuM5oyXdtEfRFeY7DUtyyzSZm9Nzd7mTbjvN3YHDDDsJDSy6c2MKBP8gTWcc5UXsb98uq8ca3gqdHW",
  "key31": "4EjBHPxsn7m5YYFMWE7TbENzHBkBhVmciGyeSdBdZtAMY7f8HXyboaVrxBD5a5uk9CPFoXke4qegF7UYHfnuWwGT",
  "key32": "5TrVXsoPnAkp3giTUgqgetihtSJZgjDLdBSrVmhyYHNVrDryowXPE5K3ujG9gU7Jf8R2RoabUSQk7dQrQqad8ofU"
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
