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
    "2tC7XfLvMRjXy1KyLwddkq7Nfa5tSJCaPTcn3YvBFTgbjQ2yAJNrCXxEV2yycDAJnqHYUKNF9xgFmgCkyNLiAHSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJ9Dw4S5pgbY8bjwc6kXdWc3XNidd5nsAkyUNHBWxC69hAhbNihRT6MKQE2CH3haZd4x7kamofoV8fwvjqfESVs",
  "key1": "3ubgbhFfy1xBbczNS3jdfVLRsyvVVHyhe7JUdZRNYn5sGR5wFN2D4ULpcbP8dYR4i2cqRtQFtwm8hfMwDDxfaBrX",
  "key2": "56xq1V3geNqovEPhDVuQT3EW6T2wi5RBwpdi78AvJCxCB3ZjVyfRPwv5cLVJbr3UNsE6aRqUbusWzct5e8mpEma3",
  "key3": "3Qi8Jfk6Z2mHr9sbtT7mh69NtAhzHRQTht7f9Eu6n267KrwEKE95acJkeu8HF9vHMtvYdpXHX5UF5eQY5xHQNziW",
  "key4": "29eJoxiMp2dCgf4NrEd6fGqUyLUwdZBXoX1YDUfLWAvPSBHbVK6Bgv92PQhwR3mpSMqGnBFBocGGffPrHM9rPWV1",
  "key5": "57jFeRZyymBWSrfFfSw4x1QFcdDP4M6PHBg4ED561te4HzpCcbtiQEmF9rBSbk2jqgh3cvUUtxDryptUKh36PmcF",
  "key6": "mCtiG3hfwzQuQRTd3qEdkZgTygsWB13HmF8eSDLrMYPbogsMEij5PjXbTQgYgkcq44qbTZYDxzjkNUEjyTV22Je",
  "key7": "3F8ihoUGJbnfykqZ9oiEfJ6BCK8sLmF7zT6C9zym4jwNNTaUVZzuFoDBhr8EePHyov5rpGRNypEYtfgrpvw89uwS",
  "key8": "59UyvotYgCnVdjiPEyJHTo2FFKtVtnsH72vF88UivK76NKbNNfBbrTQ5mnvB1xuUTqR8U6Qj8ZmvDUkiSzDDmjDT",
  "key9": "383piB2AKQyf1erZNPhXZqH2PbWG4oV2y935oLGghPYBEaRSujGQJgRF7CvUxTscxDXg35dELUxZxVzBUKVG7UmZ",
  "key10": "5SXSnfHgNmhyFGrysJBLktgugKnd9BQbgrPYDggdHe5r34hnCuaNGASj9oZtGwVM4DY72UhcQB4rzqEEA9DHroV",
  "key11": "3g26JCaYaurXzL3TikUBKicCCZXixDBp3wTetLZJgWHJ1XUwAYdEbECr2teCZuR3FvrHpwRedAo7W7NL8Zhrba2o",
  "key12": "3xGZf8BW8kd8S6r4S8tKgRviXxTnEt6CKkZRySCbXGGw8LLYx613nP9DtzMPVtMx4eS4uwRBoban9nNneyNJ4REH",
  "key13": "4B47tt57orw9LZPHYZ1N4qnHxcQkgA65bKJgiJFLughMZ9vc1yPEKuqsnhWZi4GSdfMEkWawd4bqJ4AehRdfJMt4",
  "key14": "4SrYuKzZ2Dxz8iMwpaRQsiWrenY8rnbyd1LbQuwSVnWKhKBgRzuxrGGaEXsny4bpp8fdrJPL6ttV8KTTKGFPGuyX",
  "key15": "2Dc1rjbT4r4D9SqP9ia4NYXz3ZDT6ESshGcBNE4iTEfSZofgGaaHpMeU4M2jGSHCFchXKQY6ifQnXhfeQxMXLc2u",
  "key16": "5Z5M5s4WRzSnZXNjdzG2rp7ZqvVAvufy5AWRBUo2uXh9sE919aogM6REwxNWZVp87jasD47Crer3Y4kMnRk4JXcW",
  "key17": "5UxG1cXi1aCAmUtkamQhmF5UZkCj88k8g8QNhJhhvVadiJq3xBjndrwctYEfCLwoZeeGMJk9jwgJViR1fnxVdZUD",
  "key18": "3ZPPkPGJJTJE8Xh5A6URFr7aW6jXLor6P6XrL1mxmEnkacZd6TyndHoT1U5cErBbZuaZndkVzgqGk4DdQh9sgVqr",
  "key19": "41Z3zLGoFBku4q1u4532SvjV42Pz1L9nH6oBdH7hC2eE7rhqziWKLijFSruL1mD44F1L3Fqqmk7icdpT79fbYQoi",
  "key20": "4UwuSLJftViRRDUc5CNV5HvVhUUK8HtVwX31KP1uHdSgxYPddayHEk6yYFgbUmugQ5nCc8uPggEiTaPGA9snygb3",
  "key21": "3ttDAaJpJMZUgkX65LEXrpoppEpuqLeF9arMAFk7EdmdFSiMoqE9koyQ7s7inF4ZAVHLnYwLs2Bscr3xgosQZYow",
  "key22": "4obwopdoKDbNAgY9bX8h1hUhjgLSkjZ9cE4Rw3RT5TDhcmKEMCfiAAqYdw2VVKZzDud9m91iBjpK9FyrSRG8NQVk",
  "key23": "43RCJzwvWzo1LYJaKf4kVZ3xTwXZTfB8f67Bvn6UChCVkVXKQxTHuZu2vYzeXFXrdNAkAQ1uJsWJuKmtEDBoWMUE",
  "key24": "2mht8vAmWQwdKCe9d3b6vLB6khSDJ2jbKEnLkMwUijiCmhFC6y4BnTFxd1RcpDB8mZXm8mpt2daPXZXstJX8c9N9",
  "key25": "38Czpu1oBnQZzWJeaRg7iNFzgoabkpma51863g3j42GjDYBaSXeLqkBtonyH92idwJxrgb6o317RJDLVsYHWauAH",
  "key26": "2QsPusiWsJ64MxtqypzJbJckasis292n2VfgMDmAad3AEMzEbRDFewUSVAZ16t9bZNujVP2zdUJqKZX4L4sLiwNh",
  "key27": "2g3VrgVkJoxSxobRroBdQ3tvCW9GPRC6hA8oe4NDYUbnMAsSYtHHysFvAz5CZN69eWcATEAtGR96n29gxHQEErxP",
  "key28": "EmxdQhCrACGg886D3sdfMLgxausqRejMR65Xk7Y21pfAaCkyfW5keZ4bf8HZGhmv29Qu7TToiv3qxvbXBH58jEv",
  "key29": "3GbWWAdwPy5os3vdo3KtREoa2pc8bPSkebX1rDscqckYMvjPvy15whiSjWUUAP1WZYEkPz6nWcYtx9Z1g4NtsC5D",
  "key30": "2VYvXwTNSLMjZAXnas4rwecMRmq7T4fgraVrnsFY7KwcvumtChDrrMp7Aq35Z49cFdR9eiAxggHVnxDkvToHmzcx",
  "key31": "5qs2i8ruWVphUJrUHzEKVR9bUyj24jk3VDeugxzwNqgc3CeTkeW8DqnqLvUyYgN9hAUPuiWio3FEueygJhnJJkY1",
  "key32": "4t23aU6dHZrzuJpwiTsRYh4EyHLZqSZEDa3zFsF2ruTbCbZqjYojcQw2qYZyu2bnrazrfA43es2K8bLrLKQij2gG",
  "key33": "XWd5fjjN4n1k58owLJFpcu5JtsQbEoB2BVFHDKWMjePywqWKgAV4CGCor4JyDjBDsfcNLoddausPxdBuPqqYPs5",
  "key34": "2Vj26iNe2Lq4wo63HZAi14A2rKEnmLBSx7WCvwLnZeU3gYoAzvYq2CRjWB3U2yADV4MdDAXZdg7o5kpyL4GpXUNN",
  "key35": "5PVg3McNspETnMPuARYVDu7Ph3TUMNF8Ke6TKUX9uJW7tJK4Te8C9CPmDV67y3iCyrvEGhYGw77jPEwwqTmURXqP",
  "key36": "4hTTVectfMhseFv5ZVskRpGLBzYk6uyxJ3u6Gf3oZAFHstSzinqaCNmc4iYCYmk6fkL8481WgVYaXNU5S1UGfDVb",
  "key37": "3hQNWcCCy6vXvVr89hmXnReAiv5A51C14zsc2etQmJMeSB4cJzEiUWWZDNCP59ezTbPvMYmE2gvQgbbV3LKkF3gM",
  "key38": "27R44XV9tBDGAk6CjKGNfxSU9RW1dhr7q4YvNc7sPEeqaCnqy2wkuqAjG4Fzi5ezTDHxNm9rXzTMYQRnDmx3rAfc",
  "key39": "4AAm2QKboXtgMk5R1aVUEEotuR17HRwXV5KpMkjaFD4hzjxExyDgHABomNZEHejFiJYLDYzGtdKTHBK3oumVzQ8H",
  "key40": "2koHHcZ2K8b7QjGpYSLM4DsGzd96TMc7Whmq7yTUBaCmQzdAZqwQcYXDSWFdWWSejGkgL2d5Q2NxfFtkuurFKm7L",
  "key41": "3JGYHNbEamFubodiPopwaPHfve3xc7ygFz2A1RvbBAE1dj6i5tP4CFXgEx3CehjESSDKm4TsiG3dtRtMmW9e6sBt",
  "key42": "5fDcKgg8VKebbZHBjt76xdmto5HzyHAHGSNBTsXteotLyewTbBq6cUtSVGSMzvqTbniBYhGHsWtASGrWVsxE9Pz3",
  "key43": "Z5phPi2zgeLaEnnF3dToNP7YJuADFbFLspeACGhNMymp1v9M3wjxLB6r397HZgaHHUvh2HWCjvsRJRjRowxpqi2"
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
