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
    "3CpQokY6Vg88oD64GH16BGJePnj1wKSvYJUzrFeKGJ3UAXHXgByVWJw7fMCVSszYBi3wLUduDRCcg8Kr4jmXf5WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63GtUpymYGkEBz3MfHXTZXFGyo3JDLhFJG3F8VNvqD51aZf6E8gKHQ7xSFteKiiHzEvNhVLoinnii9wmXKdVQbj7",
  "key1": "9GeQX5baZMwCivEexwgbTpqhaz7hpiadwxXnQKg6h8vn2Uttr83okHtzhr1n3cHSUpytFDWsArYUg6Sw8geSuB3",
  "key2": "onp121wCqCiqH4o7WgoXm2aUsjP48a7BCFSWDQSfJz7EoV5f4At9u7kuNLfYCL6QnrNiYuL6uXBJYYoSDKCaKWt",
  "key3": "z6esCVAjtCA57wnZy4rYhbYz4irifsUWeC8QiejW4pmTbysi8qauqKHG2D2FNfD61hE9wditoXu28LkqqTWmpZG",
  "key4": "FZtAjnpuV9B13zNWj4CxDTfUxiZAMBZdmcRX9RrnhVWac1jzxZjNK994XYH96hapPmpVUh5vW2DDQBsmUxX7j8d",
  "key5": "4tZHotLKmMfUCUMULnEDjGoaAy98WiLssaTY6tLB1FUbMqDA6ViPrkkbVLHy7gsCasGuXDqG3osgaSkB6E7xvW4N",
  "key6": "5xDrjPRcqAmpyiBjC9RG28bNRBQUqSE6a4ptp5kbWuJtZ2wkBHg1yUxCP26cJEJ6waBDULErCXDuVyGYJjQGXxkD",
  "key7": "WkKVJvjT1kLGkbvA1mZQr429nmk2KpKZ5NeYuYTgi3PQJHb21EYrSxftUHRKf3Soz7M9bGwyZ1fMbM3aG2LdAzV",
  "key8": "5JCrnvMLA75DirNqZ8ocJ3Ew27VSdx6fdDPGmxt8d8kGahhYqe211XVYN7DGD43NHYmX5Hus2QtCg1qmzpSxpQk5",
  "key9": "YdLcH13wKMPLFNLnHm7PesmmnkcXsgWZ84A4QiUpDTDaxC2yz2ckXawnnaBWGseenHxNk5d263KsamDr5jwEt3K",
  "key10": "4gDKnfHq26yAYMrHHzHn2vGwGx4SrEGFabpVdBqLG6shNQAdq8vP6bbZZaZ4BRer9Kg4eR9vtfR8R4wai9cptset",
  "key11": "34cnvjz3zV7BeZHrqHnT3U5NeT7MNGs1MjVJarSN843ySfPUXU9ANhL679N5KxjL9TSUZ9QCMqYp9Xz9nLrnZTXK",
  "key12": "5rmWahJPPuWUiKSt9HfZNxmBzFdTPGy7awfXS2mGdbRb9nFBobvceR9FcwCsGBAckgPHogkdETRdWQzckBzoN6kz",
  "key13": "5fmYhVTzMag6YtmLEmFqaiXxtatqJwpbzKtaR89q1wXEssrFeAag1de54KvV7RY1Ct1Z86nBCc4o5R5TTu9YrVfs",
  "key14": "2QMdSNXdfExxWjdb8D4KPpR88oq7FGqH35hDJ7AjqtEPUKNebAPQEx7tTwjhBeDapV1PKmS4wTx13DyadfXJCzkk",
  "key15": "5Yn6Aqa27frTFQSBkcTda62bmKXsJprsrRRw4vAS6t31oMrSD799S6Xemr5jZz5MeXRAxnQzMgeL3nstu3FLBKrj",
  "key16": "GWgbwJhUtsSf5K7geeue5dCyJa5h15KBBTztXwFfSQ6389BhxdTvb2ZEZz5p8cYaZXDazYUwAHMJyD1c2t7RgXk",
  "key17": "4et5bzLxphNWTaPxqTYgwR2cwyYV84AwDdQ9raT5yQukY7uMm8u6ULpDwAc1BQwX7h7fgmdvLKS8vhV4riVExXhy",
  "key18": "63pgaeYxnsAKgL9NpG9UTuCYmu5BUo4xiiLZGvCCnMJv7hyxM1k6q2GjKUT1rn1H3H3xtyjpwHW1NFeMNvZZnZWR",
  "key19": "4nDbpV4hTBeKBhtPsyqxDEZ1AFhWpi8vockukfDTKyHNsa3ZBTb6tTtGZJ1csyQEfAbqKLNmim8QCdLPyuam2xBp",
  "key20": "5ye7UZgTv79uyfxP1PUvn9QBLbaTmEXS3QaPNDPXCkcFTbZzobgp99ZNniC6mbPqWYrBY6n1eDhBo7SjiyTnFZ46",
  "key21": "2ps9NN1MoZYbZAjbacEyxaBhECSC1B6Cn1gufaKy9jcx79xHsXNx4veAUTeVChp7c2rimy5EcGZn1JXfj6zpkLag",
  "key22": "39rPWZdsU3SfktsbaxQpcR99ZHkCSBqKRG86nTTZakb7vXLqRf8q2seW5d247qPrmHAKupadAU73pGRpJ7vAYiHb",
  "key23": "DSQ7hYLb5hWFLcCiaxDWDQztYUSdbAdR2Df9TQhctegZytujNM6r6uBD3SvAvihPiV15McW9J61rUL4aNNzDQ32",
  "key24": "2Xb6zf7L2PjB6ykw8MYu5xp1UAPe6GzmvDjPJXeNNhWVheMtg5nfEoMiG6ntgnuhXVkr3QxNdLyTozSiyxdxaLod",
  "key25": "7toZcAGexb3fzgZCdur1iv8tXWxcGDk8aB9eEpTuAwrdGR8mf1jckVZ9mArHmXFhKffxfEGD6r6Ax7Ym2gXhn8S",
  "key26": "346nZWzNXcZzZGkZuJKP9gVTPNA5i4xVg8cPanGWKedQBpyFEQqAWtMcY5V5b9U48RwkjnoySHhsBxcCfAkcn1Xv",
  "key27": "4bpkUxUwjaxiP33TrtMEvfepHYyh1Ci6Eso5EHyvBjtRuwWiu3CS2je3pCxN7VbRteYWHMsTxgVmUbJJU3aRHveU",
  "key28": "2B9JeidKazU4D4XvHSWAp8YNHsjd5XsThUWSJGHBg5f9fy1vk16UtMxbjW59b1knMer8gw9Js81m7EvDwvSGveBx",
  "key29": "3p1oSiiBR3qwZ8rQW2ugcwnwpsaytQcVx3MxC5PaZV4ytBZEVw3kJnm7mCLN4qV59BsmzeSNMQsFFxkcTFLZjKdy",
  "key30": "3ynEBiMFFvfsEcrd6oyKsZvwU3ZvbDPHerskTjZ5hKQm4u23XGMFXsswQihB2WPzTSWNnv9Q8rKfsgenUPZxNq6M",
  "key31": "3st22dSCNDatGheSG2LyTRZf4hL34YacowouVpZUYULgXY532FZM21L7XGFnjPxUiyfda9WQhvw1x915BBA5JC9P"
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
