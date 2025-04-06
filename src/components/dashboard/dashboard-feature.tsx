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
    "4WgTtzrHEFX9NqVm9kkHCYpRhEBHsADibhPwSkn3P7CgiCiy1A7e86sinVNhWVQ4DLF8A9HbscXhXRnCszsdsMHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5uvM95qcHAVPhtuw3qmp4AoGUeF8rAixyVfMtpeHk9Q9rEUPLyxqqaxNhnBYaApYaFkhtDTearaDo1war1LH6f",
  "key1": "5zUR3XXsinCadnMdjeQA6kQWJTMJbSXfyUUHqL7s29YhADsMna2rdzYvb9fDsAxDExwpnKsDrwSjycXAkHaffu4a",
  "key2": "2fkKmaGrKScs9LA8GtxCTd28a1b9VknV9KTzvj283tsa5yYrnurwRs7wqYzgZ9ng1hHRoi3bMAp4NbW7TsSxp2k8",
  "key3": "3awCQiHh7tfGxzk4YHmfqp5UDJFoPoZNRaZxo1fP5isixns41viBu3yttaysgVtTJksmkmedJ9CuEBjrGe6FfQXW",
  "key4": "52ETwzXoiWCf784iMdhe3Me8HCwjBVCYyrA4vfZL9qvAfu46a4NfuZCcuTnPUxEb4r3TKGZAfW5CajQVHc5CP3HP",
  "key5": "2z16BPn9wx2ZDsUaYp7Mk5RW1jddwrxYLKauVeuSV2KCfBRbVFrctTMqSQWHWDwRZXWAvvnCbZ4mycZkVEKqjn5f",
  "key6": "3oKJyJ5gAEzKqqQRfiEgRZMxa2ygKBBgo8QTPicraquarb2uWh5BdP16SRxVCKe7GdogXjdGoV2KP2uJP9z6DKrA",
  "key7": "2RcqRVYKtc8PB9YreDvPrRVChTFwPfURqCuNEvtzYzZACweaZa16RxK23uG6vPjgHtusZGBpt9xFmJB3SS7cFUJw",
  "key8": "5HeTUVTG6LqsnPDTx6NqraD5X5keCo12UgtpWVAyM4az5UuyG9XzLrbTUrHsKjWB5By1TQhzFeGCgExCXv6xZXFv",
  "key9": "TYiiF3acstWpTd46dRybK6JPZFdncdNCpe81Rx5MJsH73qHxrMNjqDsUKuXFQ8rZLazpA5wWWHoPwUteiXaanoc",
  "key10": "2nezkMqQebgmhDPPe2F4FGbCLrJoSaYCBQXMzVJcFdeFU1EUBPAZEWtYnoVRNf4GgBnUy1r54hoi9Vo9WsarcwoY",
  "key11": "5DtQEc7AbKjDAzmBSA8ZyMUZs5sY5cskVnB8adDP5BsredgSh3ioJEAqLudhswUcAyQLWv1g2oQazQsP1fQwq41z",
  "key12": "ZqLSJRWMxLGYBZ4MrjLVtqqsRq69abHtpg8fyUvdJ7fSF7umGWcFV2CgSvncLUWqgvML8Q5X8QmYV5SxLvR3nDF",
  "key13": "3L8csWUaP3jdTtkkpaT4BLUPLSG5KpdhAdTk4HDRWSV7dQiedJu2oFm2GGqQ15LrcFEhvLMrKMZMs7mhRYsdqEj8",
  "key14": "2vj5RawhWvk9AhqKDeoqDrYhFsAn5oRqzWPmBhqcYGTccDKdzK68YXDM2UUwv5bg1BJZP5PYoVGs7EXa4RfpugWL",
  "key15": "Vii5GEjphZzmPxuH7bPrByggj5n7iQqixWFUX11jq3viPCotsVpDrJEreRd9CwEPUrn7VGqqHv1BY6jvzcRhkML",
  "key16": "BgWDRGK6PeDhrzXWmD8gcGxwAtsvjip42Uw3bymH5eSTKPoDsGEMvp5TdSD9c6iX53PdRganFDCFZDgXmJxSgFJ",
  "key17": "4NhrqS1o2equZHhXTBWDphhA6FzcxnE9vDCaJNNiCwnbd5c2vypodEqpKke1qWmmXqrNccTFdRrVY61vDB5CHpVu",
  "key18": "ydyKWbTHd2bC866E6785dBzmwfVouuU5jnZmWqJXPCXYj3zRzzX9e6zvhuRm7Ts6BDxqpecRxQgZfhLVAZUPzUK",
  "key19": "NxqVCy9nEEYX1JkXVHxnWbRT58TZTKfWNhJDJP1CBA2mHoKCqxyuRfENoDZDBg9wJAUEKAVX7MapCEyntynufKr",
  "key20": "WML9V3oQmmULVWkvsafnDhVZADxqYpcqJ82tQn35HCc6GSLiWsPKkFvfx13Fn7ogi7C2ELqfddcqXWZjz6mcLrc",
  "key21": "43wJJAAeydB3xESEtEAoeZA74eS4PgoGJ1R7LicBi7BPxeXLMW8du8nuw9k7HNpcXfuMa32AgVGkjhCU1dsMG9jV",
  "key22": "2z4SkDb4Nzzaf5xFvKfy5AFNdLM1PLL7XrzW2fSAWWefy9GYdkxA3uzEvCCQ2WHT7rp7KLDB6VoWDAo3QBdPaHkK",
  "key23": "2uujWAagnTzbdwGH8hRmpQJVSd1ZGKnrbrv4oPym97qJWfFqr13hUyRiGrDQrUvyhVFxL1sDB2hjShsk9phZLU5h",
  "key24": "2VjMfNXXHmMec9XD7NEenNt5qPmy87mXRJT6vhscaC5TEaXmvohQruQfxodMckUa1u1BTwDTQ6yVY4HMvzqjmMDj",
  "key25": "EsxCibjjHceXnfqG7kFvwrk67FpbScAiisDk4aZQmLFR9mPdLuJaoYPfEBQomuZBTecz62ivb7bzswZgzRMkrMw",
  "key26": "5bF9XpBz4MdBBwi72wQe7Xyu6MVn6ZLs8A8Zsp3kQWxjyBg9ReLhy57UmT7qdRiDxqCdrvaeoXj11WyPjqa2GVVs",
  "key27": "48ofWD9mtV7ZR2ke2vgYz6eNkZJmHXfkJZK5EKfYmXBYmC9q7xRqR4Gv1SQiVYrxVmHYg8qpsydCaxAVm8TE9g9E",
  "key28": "3SE8Mf7JbZPYjSGSX4hZRQwKAibqumYU9XG275hagw6oPfyesYhNomp2FB8G9fcLLi8uTpBceH5CDSM7cZVZkMHJ",
  "key29": "fkKwRVhocietrzUCYowpebwD61ijztL88bKxPs2k16L28CNoyGpq28p1X8VDeWxE8juT4aMMhA8Nj2EzhwJTT6V",
  "key30": "4mvazufGkmu4R2FG773P5ic7nNxz8MBrTUkReddKLHzqhcebAdgH6rsXfs9XXMngE6CMJUL4fkDMGMx4MVDYkC1b",
  "key31": "3ffpdxbdzvATUevAy5BN6TNPqs7tEp44VFY9gQoaVLfbXhykPJfLiHjJbrhZSTd7BVa2PrRAssufcBU7XQTvBjxZ",
  "key32": "2XC7ZVYULJELXszhW6qtnYouaRsd9SJSgjKav8sNNBwpsEDoNfyTdpsYHKTyPR5ibZDDQuTnwMgyhHUiSUbzHyQV",
  "key33": "4tatfUvrc4SwP4oJ17CRmDELPLLLPpbWzWTRrExpbTwsMKjBCRYVMur8ceeWVVbGBeMxWzrqtAEqm5xyLixToyXy",
  "key34": "3THxiWUGhRHwtb5x6fFNnBtXHzLwyq97QVR52EhPpUMcT8aEZUwzfoM8RsU8AmVve2cNt3eJXGzf5dpxdUtBfboV",
  "key35": "27MhCN8ZTrpQRLnVWrpVHdm729K4zjDhi7RiMC8JctkQQDDQH4T5RjdFwHQbPYGFPqQjs8eXTVBxqdxwDmTWVCLi",
  "key36": "5mnwLcfatxAvertA29F2arYBKfvq3aMnFciMGWHmZScmdHkNzd9Qx13mXm8P15wHCjcCVSkMdBPCacj8xc5wRPRm",
  "key37": "2edTN8AsBMQ6p7m3DHMASGv9hHk83TT9URQJJKBRucL3oP6d9usAbYG79Y1MFk2YBMdo9J7An89vcHsr4WrzFA4P",
  "key38": "3t2X9Dib6rCV1dAT8oq25hD5jGKcUFCTYiBqLjqbMbEdzz77r8gniJvfP1wZEetmfRAtXGmyeQbHMNd3jQuN8Qrp",
  "key39": "4Q5eyyYJefMJMWcfdFFKaLuT91aLtDJpRR3c6rjetuktT1UwtCRSjeroXa5JHsQp493F8S1GZgn2E3numnKeZAzo",
  "key40": "3FujSvjtbXdhTYEvfKP3UgXugmc7BMM61Eb6nummtRNpMmh2gtSGhF1NG2zr4uP9SFkjX85eDfdWZx373Nd9fA3E",
  "key41": "4ydUiNPuU7z5wh1yMCoqdRM9u7xQbqJjzxpMcUgwa5auEfhiKi9bwVCqtMUm1mxWtRzfWa7ERw5qdMbmEGpM8aS6",
  "key42": "63dfyix6vMdvUbJ1iLBLUvUZAmqfzZP2fh9LH6uuYKwF2TMJJBUpXxmVeeUjQTAdaAc7PPmXSVuyvhJY37Am4LAj"
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
