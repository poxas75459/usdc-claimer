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
    "4y8Cb4rmGhBRqgPdhtMphRZkQDbP5xS8Nzm4BB3QAu1gMHtNzM4qKLtpnvtNWDuufnGu2A5SdEQp9xQQxiRBJQKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8VPMyQ41ZcsJY4bsGAoffAq7cmroxrYgxH29Qc1WVnAZkz99vRFqAuQpHXrgit7tGZhorqT5oFLtCirefRA38s",
  "key1": "2M7Rs6ngPfVf4fTEx94EQzcYGGTzuz9oyzsbYc6sSWZJxuTQrJxFPwUjMaMgRJDQ9QnJtvGkF446NwQMbAbvdtw",
  "key2": "VXdzco8QiUrJHHLuHH4mcJP53NoBKGLn7FfrPPdGjTQF6W6h5FkGwwxRouxGGHgX2f9PctKQKjqpD1njVbDb6VM",
  "key3": "3Vq4D75Hy3ccF8SkPfeDmxe9Ho87SQrAXVKad4EdxT9JJXg8S1HSjYxQR3WStM3MNCxcWyAoaqW5zzvPRSjNLr6w",
  "key4": "2HnaUAEuTjRESTirxkfHC7dDgYd4N8hmQFtGwzW6EqP2rKvnCkcwdvhJYyXNpYa7qABaiVsU8d6f2hCWtbhRaDNk",
  "key5": "27Lch3wujxfhm6gTCp1WbdJFtXZ6rrJarFwgtiCkKxJ5k1wJbddmbJjsYSJrwUBYaFpVYqtn5Kr2qYWNZVJ6ZWU7",
  "key6": "x2VeXFnS3LAWBJmLHwu4Bd6XGqsoAud4LEXg6msELkSqtfLyyMSuKzVS9YZTUk7p2zUpkoiNTsku5tMqmesuwJ8",
  "key7": "3fcBRgKQ1LHc8moJD2h7NofqHWfyFeGMhjkMz9JAuaC95UQvGGHNvVg7JpJBSTwi1Knyet4s78VyCaSnSwzh1Ybb",
  "key8": "3mERrnJoUQoQeBuqfegeXvdPJ2EtQdB9T7QtXFMsZhn82B43RPuxU6r7MGK2C6GiAiwYY5k7ZFATGhwLwFwdDC95",
  "key9": "2JWF2KqSUBzPGfhRT2qnzXuSE7CHy8rAmMAYhdDZr8GiixGf7uTb875hj6Z9YjK9Bgb7UKDwEqNzA44AysNMnicd",
  "key10": "5ZG6p9XhxZ9EDhB8be3czRyB64VuvxosYsJYQN9ATN82YZisXMFg4pzFSbbENFng6Y6KjsuPPgWee5fRKWoLvXkk",
  "key11": "5cHmRtuyaX7o6UPWjNFS5gJzCEuvmLRcaKA6dHSHqpwLPDWNSnpFN2YAdeAEULoKKAMNXNsBKVzbDpEi4T2ETqH4",
  "key12": "3qJjQUTdwAoBkBDHMLQdr2TR69C8iA9Bwkza74agQm9T1cxTjxSN28m5LFdP4npPoKEAC3AzCAbqPxqXQTyefYWT",
  "key13": "FYjCRw4AS4HyF9yp4a4b4gYbjykr5WspT6a351xEebbnnZ9y1Ne7NoH3UPz7NEn87ZgCfwph25EbPJ9xm2wbA12",
  "key14": "58PXmKMn7cguBE4bcDjg59mcCA7xcfrD9bhoaabnzasJJpU8egVZfNCF1k79kUF34bBmPixGod174ZD3vUiAXuHr",
  "key15": "2huN71rFdgz84DBB61XwPw8PfFmiZZ5PfUtMu6NvJ112cJc5LfBjUbgesSwMZJ56YHbaDkmGzGf961JZ1syhiTfP",
  "key16": "AWqb5NvEH3b2RtYvazxJW3zT2DGoWYYG1yvozHwraeaoWr6SNDAa26kHTJj5yNLh1WNp9HTFN8yqvuJHhB4m4ee",
  "key17": "4RC9Yz3JW2pmvhAEWXcy6HqESFaivpPepGbJmE3ZQrytWW8hCftnvN3kJ7UaYuP7sEEnUAuePwMzAkULkazMReoR",
  "key18": "3svAH55L192oXczM2NsMtJxqqfjQWotcPmtdTaqE1VSy3iRYHNboNaDsuiXXHC43zqLuaBk19YJxeANziVimzVm8",
  "key19": "5Y54XNqyWpM3L5kYGmDnYRVfm5ZD4AQ6Mzdp7CThDHUM9bMFPur8AR5QD15tpXd8ewNLBjBuTNQSo1yg3fNHF4YD",
  "key20": "AnjSRDYoSyCHfwV39QsTrNPsiksznvZYNeGNhp662kwFi6M89ERFkXjgoFDncVbyqnFDPgd6MCYHLrFEAEZFHf1",
  "key21": "3zkMueF8PAgEk2JTNncK8NDmkt3gvaDS7Sd1jyWMQYnMxVepnRcXTNM37Q5cZ8x1NsZ5Pnz5DYUUvZZ9yiS7v4sg",
  "key22": "XtVpHtQ3Mkq7ZD19YuF68X7fEoAM569wAUGFcyz4cPNNXWK45SRnf1zj7R9uTGn8avpj8sbcBHMXdDHRRcW6GoF",
  "key23": "5PWB9xq41e1Z9REePiorGRnbCQaswMG49YvArStjFJhKJXw4J65TLmVZAfDLXqVTE4AeSpZQtNjQi6neaFPbSh68",
  "key24": "3pKAbAvtryMRF4vdxJQbpFgJRrFwnaeCErYPQB841WwfW2z8SA1mpNZzrCVsK4oVkx23eGhnbUfABqt56SwCjoHC",
  "key25": "522ghtWNjZBQ5yay19oF1hndWdVQxYnPVry5Wa3a1VD1ZVK9594dm3P9Kksu1YVAbSmi5z5KZHchKJA918U9Auyw",
  "key26": "5A4DY41j9VE7TQoRJF2QgbPEFXFbuFdAFqRyB6jT25VFgqhviZyZsB6XAj2RzqDoGs3McCCrcoVABcogyMpwnq36",
  "key27": "4UkuBDbqG3X5xaGXEgxKV3ULagGNhEdvf75DSi3o74Q9sfbwZGbMidP3xRiAFsBKSCZfCopL2tTgKErHGafqHXwK",
  "key28": "2iXAkYHHq7HDxWx9E7Td596iGM5Norn2Ukda9GVvcTTwYBMA5319a76ew1aiMoQAsTL372DsZ6gD7xcd3pJzaZ78",
  "key29": "3FG13KAMh14PC9GsGMFDbAz1odfcDdokzZHL9DtFxpVV1T7Zg8zidJFeVPSyoBDwRRPuZgEpzxbLuk12WMS414p2",
  "key30": "3dGEVFFQGAbw27xZVYzX2tgpHL6ZiKqhdau3fLedLHmzweDWmK4swAAC8tBahnzZwzuAgKv6ydaeQBBwS555LxBd",
  "key31": "3V5xUeYCrTiQN5K2pGweVWrZqiGq89j3ALVSYwbbXN6tRqbjZQZT6iXnu4TRw55X9ivyb1WqPPowgjTNb69zhyqM",
  "key32": "43AAsGr5ULEkoyMcvC6yFvRsaSv1TmFQEUsfNviRJExPBLGvpjMJRSMf2kJH2pi29HvgpRWmetZ4jNzFdeCqae6a",
  "key33": "XdcTsGqVNbs3zLwraQcyk85Vae3rmGfA9F7QeQbLkFXxijh4BJf3S2dV1sWh7W86yd2ZLFb5UQc9ptbU6GPE1ss",
  "key34": "J2RuYQ1G8zRqzueNtWnDLbeyb4WDaBZrhXvUEDSBxRyNSRzedHrHgoG4qLT6fr8kFxqHE3YZ29Ei8KVxk2suDJ1",
  "key35": "5Zpgwjf4yUqsU8hjsibF7WvsTbzF1XUtwmMRrgfsTzXxu4sZFjt6Xugn3Q8CdCegQwn4Qqa3Qr9VdBWpgtj7LiUE",
  "key36": "5jc78A6aacTdi8jqNXEo862yy4tjcPkjxrmU12r1XNSgUgioYkwW4Y4q7mPS3EMRPgnTZVTqNt54NqwdsMqp2jyi",
  "key37": "41StmAtWJzFAw8SzRE5cqDkmZxAVoEp9sggzBFSX2BgP8oBv7fBDEppzQW9aAvPfKxewrVGrPWhBob4XUXgxEMJN",
  "key38": "4t1WtqBF3NVsvDcko1LHYUkEyCTpqAXsqFt5QE9qkKbWpWUTdXMHtfRp2Gnn8z7GEKR7t87caBeZubuvjvUyENgf"
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
