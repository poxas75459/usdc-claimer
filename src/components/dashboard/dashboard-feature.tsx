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
    "3jWdqemxcjtqWD3H57AAPbBJGoHvLNeS5P4evAhQfaeVEScgYzwiZUuAiEtvbymPTtQkkFnLNPPWcmDkPssSMDhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zT7cG8VSfa26AX6Q7AJ1c8rKh7UhBwMAKyFKVr8cVDEyDVuj7ros2mbgnt5rfL1Z2qWK2PEP8Hyj6d5u6pPu74f",
  "key1": "QarxwdSVfsSeheJHtMXJ7SAdqy7TTQCrmADu9BL33fayadW2Bdh3hX6i8gRNVYTe13PBrJcFTBkk9Dbr2v2N7kj",
  "key2": "3DoGgMoAnSowfuD6WJKKtutFPPakbRARff1esboWCMphJ47X9oMsbYpDauDgs3bzGH5QH8MXkoRGzKQ4UmzfW8V7",
  "key3": "636rkKCpDeZdGGnBiivgbibrzqEYRaBbidua7zdG6HctEsAkZy6zwpDYDRc5MTnVPxqqV8MECjaqvxwP3qAkyhC3",
  "key4": "283VyRb41BPvTGHUqDVxXWS4iZniH6EAP6KqCEPcoKskpHXRkkv7qx4qgaMCi9gYDbbYJbarM8uzHymn4SBV9yjX",
  "key5": "25tNenBju5osLMkfFNDxnP859B2q29FQga1CA9Y3b9epJ1T8Jztxadix8SxwY9Hzc87fRkTnodguATY8n2h1AiQ8",
  "key6": "4soXL47YcR6uegyKeo4aUZqfk8FdjkbKxb8ddtVNo7kWr5LpS5n4cNjjAGuWB6kZECz1d5iB6kVKbHhhevpG4Tyb",
  "key7": "QquDPZEsoCfmbcDXqYNMRM84w1pEBv7b9n6vHieLgxDZVtaqebaRz67tinn2hLjQroBZwB2x3GXQkT8fiTgU9PV",
  "key8": "ysPbDThBRZxjEyShBUvAY65u7VUpjx2qRDKQgtUXF3EUU8KHP9aDuf9ghaAUZYhWGVAaKApK3yXMefGvNzpSFd5",
  "key9": "25CDgyDG721pHrBk4pFiWy4XZ5idGyQSvGBt1WZxsi6em3zjJpVDLJm6UStYMXDYT9iwUDwySDcxitzNSkw8QHk4",
  "key10": "3uqmrzCpEp5vSkhU8UbQE5Lq1zUHPGBhzAMbJ3AqELRJws9LrFCPPWT5hDnmqkAJHZZhLsPGouVrBUiDqH6fBJ2K",
  "key11": "5a1eXDaxBozirqSapD58XB3cyFACeaL1omEfyH2r5X8b8Exhvo1J8Aoxq7S3od3fiaGV3bVDmFJvrupYER6eV64E",
  "key12": "2yzDiYPqxchnRSqbkELeCfJyhQBC2jcRnvyZyttXHZKWFpw7tqXKSF4NJXAjfG7VgzLfioDA2bnvUMbxVyBfgYJj",
  "key13": "4BU3HjuEEWVVMFSUJopP5AitEWp8Par9A5KUGHN7pcNJGL8VBHjbZA7Evqgtdi3jBiZvGpZ23a7Wsb3GYejUcUYw",
  "key14": "2vuhhJRfPuxPakNiQmw9VhyQ9V51dKTXoPkEfhvSwwA7piNhLipGvGehqBgzxsgE95dY59LT9QuDU2wrjcBjv5WR",
  "key15": "4ofJpZ99AfvVugFdYcxqWUbmTCKVLzY66QvHGL996N62gcEEXeiTfWYfb9SzZQFF1XtVJAQEdsh2aJURjLmaCpGS",
  "key16": "5273DEXmUBjwEYv1UK1y1yyUywD6JFYumnYb5pS1kXbn4E94P2qAwdKFgngTd3jsmHD8dRLxBmwP28pLF1DzxPfg",
  "key17": "4ELt5mcZSDLXLAfeLgXERzYin1n4AiZ8wY5dtqtj3N5PbxVJtnUkVfPdsHK8MbVapkgmMGHE9wVedXzTK1d615Tx",
  "key18": "3HMq432fpyvhZydvnkFsszk2BkzSyM4ZB3SFNrPjCA8fhoEGJicKRgJReYhXLxTKFiRRPJEDbnaF88EetG5LiTEN",
  "key19": "312khRM2LKTWc5qTikRachjZJcv643XBoGqsceJxskyiKpyxy3dLbwdVRBYJPiXcSfksaJZtQPVYPz5LVHTJmwFj",
  "key20": "5QbK7Ty5WNGNhAsNmy8cm8ZEYpkwWe8Pu9wAVyDgN7v4dwEo8CP31vkVoQrTe7ZeovphAAUvdLooDgxhLqtYu41J",
  "key21": "2RjtLtVbfZytesHBeRKjuak4SA9wRnRyi9cKfyDWKk8J5UnFYPc8Y1C2cJ9uVwJZM9EtU2q2P4QDqWRaZUGNo2fi",
  "key22": "tRS7g7EfyFtYLDDduUp1nZXjUxALeqViRj2QFGGRmVwR6tfSWEYE5XT7jcPbiho3jVfZh2FeD7W3RgJRJjJ1miJ",
  "key23": "5ECaDP32Ti2vdHYQoUtrY1EAociQZuGJkixrbrwL6WA2srHCTi9DyakijJLYiTmxWbGJAyHi7KX9ZY2DtcZLwSst",
  "key24": "27MhHCgsEt564eQ51t8UxFkBujexo3rbtDwdyA3P952DDidb2ruShkU3RAnXQ7Y6V3TeHH9eJmBDqbTVjarQ85CA",
  "key25": "GNb7inG6PLPAgsJKemWMrGcTYu6GuQdEX231z8ZKbZjVmt69Ur3mTXrs8DGjPgUPozoFwcvmHy41JAM8wejm24Z",
  "key26": "5kpKYq4JruA1EPSKe9pGRGaXzTCmbHiFupKHajcnLEfSmP7ovpiH9oFXUBmT1s7tRHzrABiPS3xsa9xSp27rN4ti",
  "key27": "4StCjqbB3MBfo6a8tHwdWcVCrEmXgej2AtwnmqE5kUP5cV4VjZoZYi6Ug7FXXQcjLLzbJR6dKqQdWhAoK5P6o11U",
  "key28": "5Kqke1GujcFFqbpSk2LqYKg9Uo8cHmc8ipaoMU9C51QRDQ1qomtFaQVyCfmawfGFrBxMfruckj4hSMXBNqgMoaLq",
  "key29": "2fj1Lv6K52518BSGHohGVVLZYTniR6P5nfm1knfJUbQWRRampnDXrA2pDFgxzYpqrSvF41XPSZRPEaPR4SEX7wrL",
  "key30": "tLLqKNpGxJZw7Uo9LnEBtsdwWDy4HruoVak2QfDqhXNsooydCLuRLrZLjnoJfTzaRZgqCEyvk1QKjXPLhXnwSNp",
  "key31": "53wANfA4uVxJJWdqqzxQJtk6W5hZvH3gha2cNZCSFvjyQV5A9zgkfApNaQYcCL9oPCjdLgfVdJ3Ud5ZoE9CvFZ98",
  "key32": "2SAs8oCFbUMZfZykuZFZeyX3s73nFwjtGS3x5TnaVdxHzy1w5KUTS4XcTfGApTnya4Mcn1bH1R8PeirHHv9Hxq5F",
  "key33": "5eNG6gbMBYsgfXH2GoSKP88aTZ54XCj3S7nGLbRHfjCC7gjPsFHFqARhBmmMkXosw5YVyFRpdpwD3DzTa6W58XEs",
  "key34": "r6wT4J63kjC2SVbhhnXfjSFAhao5cXgtKvr9mwa878d9PpvByfiLkgypdcs246wWCXLradNEDVs3MQ7BTTBLL4e",
  "key35": "3AkeZysAYNevJG8NZfX4huwBqeG4mmamqEZLmQyLLBJ7uNxs8Wn7gF24oK5TEWNE8TcK38iF1TK9Cto63BGPWENB",
  "key36": "66y3CXN1kFS6U792dfcbntH787nbuc3HBzp4bqzZrAgzbCPoQQEddAXxvEfJwmoduGPfKk8u4fu4wWCpUxyeuXRT",
  "key37": "3JJvd2ZQGn54Fi1nrtNfjhWtwmG57TCuGWaEannX9Ss116jSyg1rQartFWLiGS3R8KnwS7KtHQx76LMJCwx5fuGu",
  "key38": "3PScq5Y33jmjErafbx52V1HBPvZ3ikvwoaVyr18xbyuciqmoa25CNkgaNJhxp8DFHcy2AjuzRwaPHNrKBW77kYUk",
  "key39": "3u4MY61MvY2KwspLNkX4NZ8C5k99bzgFWPd191EKpigweW5kiBFba4siaRJ6nSUfDyzVz7y7tQGbtqtGc5A9xtyz",
  "key40": "eb9a5gL95s6Y3papCNssL3qGndtn5XESaA4HJ6p7ivsQNvnkYbwKW7N6kQcfHbLbL4PjSzed5FAqBRFvCXy5dTG",
  "key41": "5KZnBwg9hrLoT4LMZLSAUisqm3771fnVEt7ZrthRCunVMSpLoE6ekfeenXBnBZrRiWyAB3nuNZD5VvzRJn2cAN27"
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
