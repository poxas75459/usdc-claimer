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
    "4ranh44sRi7DRJZRacXEnHMiYv3bkC4kcN3jjYj2MQRT4WCb5GvAemAZwGNgqMpF5PpiTtrgeMzzhbo1BiLvC4Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62PHLr6LPHSzb2SS6Eouj1AdzTAh7pP778V5vmpE2PNE7BP4KzCbccoVYonPYEDHDnouzDMdFxyyY6FJCiPwZ1i3",
  "key1": "3YWL94NJEh1c1LYnkpECHvu3AKCNTVdUoXYsNhKvggW2ajAwf8D2jfS9vAvBQmjKjSdFJ98c5AjT5MsnRbgEoKuU",
  "key2": "5X9XgL3RY8X23MY5jFWjMudbomYuQ1oBKvnwWTxxhP6QmSVZzgWc6snKFohEcFAzKW91SUW5zxCRRUNRFnPraYhm",
  "key3": "5U3kMf5VN1hzDmFKFc8jmTkyPZN54N93A3zmQo5ecF3iD6k7xDWqn1o7LoCgUcBa5CBoRxkSUwaQzYQh69AJVWvP",
  "key4": "jaPk112X2ts3VAhwYGjbjBVDuTuTqtqfJnQye2UtghdpuwiHbG5NnzSqasJ5QnvRWidd7tJU1XkLMmmLZ6e8DFZ",
  "key5": "22Fh8HkcbT6rD2Qx5bnE1XUtquuHMeLcRM1fRc2aDCN4Ht1or5aE8JzzZf3F468k7kwPeqxzUrY5WjH5JbdbqNKJ",
  "key6": "2zNmRn8JEgbaLRm9VKC6j1RXdYTXDTp9tEoauDJrpKTnj42JNidxUFktneN65dp7D2jgk7a4TqQDusaBzLCXxM8H",
  "key7": "5E4m79nvA95GStd4JfGnAJ2XjTmbAQy9x41svv8NiE9cCZbcXM4Fo9FKQvbAS28xjDfU3mQ3P3BdNqpqKaR9fMGP",
  "key8": "57mK8gLrSAZK4rpgyifPxDsD58XvViL3PmCmZ681jrqJWfUAaBQF1tumdvfMHixse8KTo1fX9KXRpmwcfMggKVUc",
  "key9": "2PKRTZRme3n9d6iGCXGYXB7eY2bDHyPqzXBYiegGq93TXeHf7Jvngfanxa6oL92m2caU5duwfDPSNzPyUc1MoLqy",
  "key10": "4FkVEvikHBfaXdn6nSTSV4gDVXLKyHrmYsPvXNVpHp4M6ZugefTdBa2NAAFDXHUZhmfX6Z3GBj7q9WYgpkbzGdLk",
  "key11": "3u9Rr99xhhGz5q5hbaQdaEKbLxYcUvCiLbfCgcSQEyvX4X7W8VhCNLpwPst2knFnUhXvN76Nc26HXBD3EXsQKvjB",
  "key12": "3nN6bQ8Lhm4STU5UXwaMDYde4nfiQm8udEaptbwSvw1oJuDts5gpbZixeatywEY3amTkrciSWE9afXJuYcd2NVgF",
  "key13": "62KVRKetVeHMipqCCuTUYHUAWWGTMkvUYWkdDKHpDFcE7mXQgsDsrrWaoTXyNnjdP9dE4S46Phbj5fMyQfFFfB1N",
  "key14": "5xLQPqnN4s6ZDdmA7sSTg5SnGx1r5HPJJtqeGFT993o6dRvir4dZVxjownPRQrwYe6smtyVdGHSuYfiAbxeei581",
  "key15": "42C63rMANZUeJtgm47Bxawrwwdzq2KpYLnsH4ZZX2rhUWaAYxuAW1vpJGeXEvF4ujtzpMQySLbSdF4FbqH42C3XT",
  "key16": "5v9KPynD3FCTxpmtYWJb45UpxC9km9mHenHdxJyWDCWihz7ZKXH1vjqN8Vo88hvPKnN844MZ6EhmpdXaLC4wFapX",
  "key17": "V3yJcFRxuzqDXZAH8bkADCfPTmk9x5MHqshJ4WwuS76JwBueowJwg7mqpTuMc5rERsYwyuZMPbwDPNM11oYXrvK",
  "key18": "62nyW1oYsBVotMuPyKTLkyLUfmKURZQXPspCFyYSZTfQhWiKo7vaUSqSzDZZSHufjpXofYm96ovXmbXeoogSgRp5",
  "key19": "MeRYn6CwEZ9cSQk2XBex3nP4Png9EmNhhYyfSeRSfvA6iotmQzootbmMgayCn22r6F95jHH2o4bMBsoCdoJEScd",
  "key20": "5zLMy7KTN3tS8NuLRAZTAZwXUjDxaDgNQQKtf6MUCdQ2RhdMmaCD7ZpesDUHtQ2UjkNFzmu6MFY9Kbo98PNEr4f5",
  "key21": "4VDyQDPXXymTGLniW7rCie2LHgaAAua9u8bZjTdWUZ2Bbh2UCNGMYte8Zo6rZbns9m775jW3xJ69jjQG1qMnQb5r",
  "key22": "5vZ9kQkEMnrKy6DsyJxcRreGb4bHagJQgWTV7vxKyRri11oW6ysVvYtDsUexthn4gnacAeGZEiB7Y6Tr2Y77R14Q",
  "key23": "X6rFbuiHiU4228eVpC72LrsSgBNacBFh859W68P4hxqCZDTNyxh5XA2CF5ZhGEPR7UVGGoTrkR33yNBaPev8h5U",
  "key24": "267Z8Sf5pQZNPSjTqThwyuENWHs6T5SL5gc1WYNbnPg5SmtT3xyV82iGdFZUMm7n13pvPw4Loe4YSMfXtwacWR2G",
  "key25": "41hCzFQMgk7TnGpW42bq2Do1pgTQpnrEfD8QcRDkBi3tMgCBbXZEmSuN79SENTbUHkoUR1PjEBXC1T5CjFziuGS2",
  "key26": "54gTRH7YKKTVkXJ3JaASQX3CYQAwGqymApAgk5bZLH54W7fkG2hog4ctZTkVpmRboVud8zso1dZN4pb18aait4QJ"
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
