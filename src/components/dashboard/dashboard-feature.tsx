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
    "29L7ahTHmQRqfzXGd6ovmYydhUhDZtF6R8jEMwobkCYh3neBm7njGBgKEjfKnofrtSTuKs9mrtuyuE9EBDEH7hCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBp9tDwg1dc82DJHv1nUWf9TyENMP7aTBigxgE9dKU1Wm82uYryJLiME1ed377g89uZaV9XkaYUZqeBmBGEpJuW",
  "key1": "3wezkzMZToFFXmvrSufQKt3gzPc7jTNo4oP8y73fHVsBvD8sK62ce4KYTWhyPk1uqZdpuUw4uE9kMsBWrgxWSVcZ",
  "key2": "44MFP6fsT5jnTeeddWASpUMce1vtZfWAu7zdYgDtHNmjDY9nW7TisxLmm55ApDSfceJSqfJ6Ghu8RgANyh4Wy2Kx",
  "key3": "4yTC6egnfuksTvF1bmZnRApeUH1wazGEEicbHqTvc6MXnAMfUXsN6Uya147B4f8z4ZXVanu6DvLEwqwZVw7dkim2",
  "key4": "3z6wt6CQkaZecPYnDn7WS8Q89ewYtaHV4sxmrGduTNM1JVQzRmEL52ChX9fDEaXzs54dHsNXNdjyT6P8Vqjzo7jE",
  "key5": "41feTFkVwK6omMLCxSZLTD7yM2wshhb4voL7DnZVq7Ck5yHb22LibbpETVRCcz3CB95TVTrFCErqwuErfETK2dJh",
  "key6": "3VHx6oAR6kNLci9h3vR9aBD4AoyhhfBJfzCuikJcmcPoAAJjG4baAjowduRveAMdGdbUrTHxr4RszFCgSks1aJm",
  "key7": "3n5rqbWuzsqXWWdYZLLbctgR61HafdPXR8uxwhzvd1u4Hxsfz69MaiRVpCidrGyR6X3VvceWxEENSH2gps2Yokwv",
  "key8": "4LZXVpdMk4wgQCvc3DPpjLnVZnWtXgDahsCYVrcs26YTr1HpPMg5scPCf618bETbYHxHfhgTSfKC5N3DffhK35v",
  "key9": "37DnfFzhEtMKr93yQNGoYM2G8EspUoXxABrHj3M2t6XWTq1fvWWEyXcW4RfBTfminTMeNuxjo3oJP8EjQLjmhWnd",
  "key10": "3dmLqsyrptX3g8Cx9FfaBDwAcmqunqJWtJcSx2joFg5DhoHwfdd1dGeucXcGr4YtgcR1mzB1qFscoR3t9jKPBRBy",
  "key11": "5gEmsnuxkVQdCZxmjUxxnqXarSxfLYQJEuzV9YSPeDPVW2CsGV9r9VHmNMPwcUzTfSJK71ErLcDjQz8qzu3NzXZ3",
  "key12": "5ViHFXRiQXfCHdJyV8SGeNYsBkxyhuwNocwmBwcf6BGNFWKxWLSzJQuufRd6Gjwv1Htrwn3nQxhfpsKLeyegS4U4",
  "key13": "2ZJqnZpTyZ5bK3fKpsAdNLJAdBJwYDkvqyytaMNANiPEB3vvKRKxEVjhcgzMLDJJsJAvptWuWitSTitE5ekLTbhx",
  "key14": "39VvjDYNqXz51dHhXpct4D99ux4Z5TaCBimopPCKCNpp3BnMG1eUZnCKSgZJzj3w9QSLyHas4W9tS2u7uBbcExd4",
  "key15": "2Rw27YcDzTbQCTVvebv9f4D4souv56Lue8Qp8rmT1ARjhMjyecnvJ2EJv7ViXcb6pTxwukiVR4d4VPcXizDtMXxJ",
  "key16": "32M6QUW6v2HvGUGNF3jQXWoLdziv6fdPDC4SVMVedrFbg4uBNYJdPZCUiazgBJLQt5YKRqTcQXQYhnCMbzrPsWbx",
  "key17": "5AoNSVVucbUqJUCG1UZ8w4kfRdqVsoctmcjbMPYL7AmGBHyeZu9o3YZyWiBxgFerUjNhL3VGxetDwJ8M8zgeNrBm",
  "key18": "4htbjgHHKYKr5A7WSCRufoYKvAs15ajfZKeapRBEbgY1MjKhdB9M19MJyz6256ZgKNkUsqXvCVKuXywamZB8H7YM",
  "key19": "2sFuh3RCttPi9Bv9kEJpvE5gWdY2KNC1GPVwrDMZwfimYnZPeJYxENe6qKkSJb3MihwYDrpTqi5nePv6WXBdYNwr",
  "key20": "2XrFpC2UGh6cryNWL8KdusH9rSNh4mMmhEdtBcumQpHVQPi6bnpWFoswnB8aaMquM1HuEVRiMbU7PjxejbCqcpRa",
  "key21": "4caPsdN2fNxErRdsCyRwuNqJedzWkV7reK6pmce9BbUFER3Ce3vrK1d9cTPWBf9KHatYoQrYzfcHEpEq6gELi1HM",
  "key22": "3YqqENgaycZXUxgHAbYcqDpLaZidSTTTfo5pCrmo8NyfntziT92NRxZ2KdK44hYLnj5AcRoZu2BTxoWd812MTcGr",
  "key23": "5qxAFFz5GnZn1eLBrUdACzKaq9Qw3BAjbxjn1yYwm7x3y6izGi7S6TpmWzUoLw9QGtnLeJtPp2msqjQ62vme88r3",
  "key24": "5XjfnGQHgMTABct2KViB7rrtF7iV3cyYcv3QAcxLTqMXy8Z6FkughyM9kopPF7AiBzML5SboyaPd2q7A3asFpxKT",
  "key25": "3DbBgvrfoJ2Vok4VZihcMaXbCQUwGSFFEjmB9GwKhk3YufE9WkNCbXyaFzqXzmTwPMkWRq2GuWaZBEFau1g68eQ",
  "key26": "24zbxWYDoW7jSEoFegJy446A82HVvG59am8cTpQtfQHvAcnT8NejmdFDedVtgPAYD7QcqPTua4CRF1iYpZSwmBto",
  "key27": "LiWb2Re6LTEBvECFthAr2n84KbM4fVJs1AWiJS9dcMr2FF7ECpHKGevN5NiGfFaU9bFfEAL7sWqtKhSnQM117Ks",
  "key28": "5gh1XP7u8K6hAFX573rWoY8Ro17mxfdU2HpdkTqBcBAmPVA2S4t8toEjf36iY5gXdka6uNHMn76xdQSSvwQhp2ej",
  "key29": "DSw2CHMeNDw67qfM6SG5DUGt1o842SuFBkuugyvuNVWYKHFSRGrukKbePSp6E1qFqf6kNUbsCCRcDy2XfnwuRms",
  "key30": "2eiFXX2GUjkWasVbkSgzmFWudprYgX1HPE7RMKjVahFnfUA9e9cTwdCMLYC77sYGjrTiVMCS1J2irAzcnfENymtD",
  "key31": "379aTdXEDSZCcx83oK9Wc2tN195ZA9WsZS4dsQL1uo1E115wC7Cp1MbEis6FS2DbX1YzxokbkKTDXquWZ8uPPw7F",
  "key32": "LAwphUz2BEoopTNGzWq75akdtu65gKeg3m38juQ4N8YWUfvLz7Hr3nGtgpgByN7JgTrRawNKdJt2SNHqTGTNg2z",
  "key33": "5fQnRQUDLu2vbhbzi9r3eZrxi12hwi34yMGUF4xXUbZJfXrLZzbTde46gn3BvkgvftytvpnUvMR6JzdyVoT1wfRq",
  "key34": "BjXoWd8mnvFdxjG7MH4npiiYe18jR2pZhk2NMZPHjST5o32UPEcLgJmAQ6YnFf1vCVj187x4red1ZvDJBuyMecF",
  "key35": "4Ki3XSuJy9hLBHXyEyaPooSoqWnqaXfxo9u32jCgKb8LfTembPkHFaS4z348VfY2VeWE1c7bcWHERbRWChS3fqx5"
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
