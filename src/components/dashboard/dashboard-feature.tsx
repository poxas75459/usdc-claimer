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
    "5qcfGyzLnbLgvsVb2wUviJWrftQV6mbN9gMUAnngPbfkP6eqZcf4WmYQipyyvb2SSNxjpdQKmhoHpdWuDd1xuiD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34RBFQT57HFCSdEh2sSwxF7E9byh8sC77VN5VyYRabmQyLRvwce3HU2Pycg3hXC8MymE9PNEqVi9KQWsMfkMxevq",
  "key1": "3WrtQhRhoVGm1kmdysyDaRyyTgHV4GHUQcuabthMcMb3Xgb2vKJ2Grnn1JP777hLZw45JaT4YiGcvujpgrACVqpW",
  "key2": "3WkRCfwDcSe2TXwPTRiNGCUfiJrCNP1AjSupucYZfp6pKjS8f2j9c4MfeqUvjgsRq87wGr1XeEtsPNYQvq4hrPjy",
  "key3": "61jtq3qsv2GrCeNECQbozQCJZD55V1wHWSjT11QZq94Gp3pNNB45EufanG2etG3EQ5bE4muzZQtWmBqja9dBvgbB",
  "key4": "4r35kk5Aux14Xi8nZe4jzPLT8KVJSkeo62rAEExAG23JudzNhJSV1TWZAkg5AskkwvQwQWqxwxrDppAtNQrVCS2H",
  "key5": "2RMtkY4xGrMzgjbBamecLzDs9HdACrz2MyhKXeSCt7S9Z8GjhAgDsaCYiACrxDuH4rERFMbYjLriSsXSXWk5vNRz",
  "key6": "Dy4Nod1Mn1WMSWmFj4Pj2xmoypwtML3maMFwjSrTne7TXjFB6qS3PHPfp5z6GZ46qsCFUZ35gKmEwECJEE4Q7YQ",
  "key7": "4ccBG1RdZHhn3Csu17mAiKLUjN9mhGB4zAgZrd7VeU2QReMiyGxR1ssjAZpYRvYdRLaiS6RNmpbqNo48VMkPTzmS",
  "key8": "2Nu2EyLxtcKoDqsny4pvqMyFWcSaijnEn2xJXfc3Df5BXZB8qRnCNcVLpHZrsyBozV4ocyC8dZh2SpAuKytXvALT",
  "key9": "3UtTgMtZ7rAAAbGpRU3xiu25q7AHGck5N63nX5HdtB37Rh3MTd3uGazo9dibuQuqeQvAzu6JnSe8JbqSKaA1rD53",
  "key10": "2W9MuoKQbqHzRzdM7VAnjv6VHtmde2K2jXH1UV15ruHGwsXGPwJcUodx9Dy1cai98t5EM622bivtZK4xQWP285DX",
  "key11": "4MZThWMT5t9yBnUGxNh8jxxJTQHu5L8uCuMKj3xhDtRMPqpt8AhDeLMTu6gv9V37spwnDPtwuEfjcUYD3MAwLR6A",
  "key12": "3TXgG9XgUdkJawSmHCrUncXsJmBvtnD5TiUBUMfxdfQdK4zBFK3D96Xb1htbg62jv4vy5dEeFG7Apd2gmbr8qyfC",
  "key13": "8WUk9gMtcCGWyodpXxUjXBNJsoJytDC5VqRuj2WYE3br9mzQGnGyVvfk8XBHnxjpgYKzi6DhRbBGRPswvPhqYyC",
  "key14": "67c4oT4TR3QM1fV4WLGAVfQHWDcu7YGWR3xoAzL2PggDPhef8x1pFeUv5ShDbdKKaVAhnasQ49xtsdimdtzA4BgD",
  "key15": "KyziAfTB1Fz2ibmZVnBETPCXUB67p26N771wv8WPAxUukU2BePeireXePrX5REzyPQpf4VUuxCxfTrP4VrTtPAC",
  "key16": "5a9m53TT1f7zeeWhumRReg9sAMU2FRe5NVe3VgAjCjz6ji6LwwTKuFzKnAFd1ntWMSQD83PiJUbtwYKhgWduDYCV",
  "key17": "5muU8McYQCbQkjKXyQvaTSYw27r14PUrVZMcPbBnPd5QofRAFS1imimKC1DnBHb1kJiBFRrUSM1Sjwd8DX5wA9WJ",
  "key18": "3gn7MW7ajKucNojCAJaMdEuW1oQfCj9p7b8KWF6H3ZqHneoHRjkyv2Qz4V61ZXFFAG6nyc8EcfPMADKh4bkFbXiw",
  "key19": "49ZoGJnRMCL1yAcdk6xkX7UpJ7R8tz9b8vfHtwhiMe3XBgYsM4reHYv1V9xhPmETExEp9RqoAhtD2o57GgLTZbfk",
  "key20": "58umnViS3zniTwJvqpa3CWVQhD81XxYNop3HZ8YDzfGWq7k1JBZSVRi4kEhy8NgajpSuutEEvUAHBvzTFDiXsk4K",
  "key21": "56MChry8dVkLCxMLbQawJUzVdjkwqU5mqwVxtcdyAi95tHmqzPBwRqyG3eQARNYerGhhBcdJZaPRQowTKWKevV4g",
  "key22": "3GsrmX2yu1jZooea53ZDYRdi9MstYUotgbHbvE8pLR3nCbftnhJQTpKuTw6q3RZCsyDk63BYRHWwu9HonRjY48ta",
  "key23": "3dG2QcTECQTxsPUvuSK6pG9P5eHnJ5YNbCEb2P2sDXPqnNkcP9DgMVAMGRBaG3F3kH8tVgZxE4Aoe5JSFc9urWzc",
  "key24": "2C3TFe9JP4tRKvow4kv2Lq5znbPPRXVv7jpqU4Pw7LXpvwGeJx8yWVX9uqDSvtwpNVXswDbaQj6cSvFg5avaN2Pb",
  "key25": "4BrcAydwJPjcTLZr4PABsgjofNe1VqHjkZo5W6SYzs8pKoLhSGNrCGVe2DVSdubxVPnXcyKzkdKPoVgt8ux2puBg",
  "key26": "5yDGFVoamPUDMTC9TZYejqknBmHGojkQ9Qs6cYCEnBEeJ4zFZSQS3kmqb8VwS6hSKNP6PLp7NrLszznTqUuyzt6W",
  "key27": "2SS5U6d9gRCa3r2ff1yoStfQFv62yTc2qymd4HQTc2sp9HfFCPxH9hxJGA8ig8vvECmbra2At5Ls4KAyMVgteTAa",
  "key28": "35CPTyze1upYVMfyEnaEFNQQzvKLeGEAjQAeqdszteDA9K4BaD8CMiX2J2wQ319Q6XtZAUDeatcRFhCsBLPqVF75",
  "key29": "5hJvgSmoEtTuaLS59cZHBs23xRr7mn2nu8mtbUHSFmUoC9ko4fbn6Sjm7qe5QJLTZrRn4RBiL1gfKUPnNxVhJBUU",
  "key30": "311V2RC4qbkVfLo6yduusonm7LaaasPPzB5j4twhroPwmBBSfbyLny5PM2xZeaq3MnWQ8MtuEW1a2rzRxwnoAYrw",
  "key31": "4J5uh7SxVbSVAWouYckJ4d42VErVKRAEnbb5VaK9PDyMaUgwtqxnP3gw6sVcBYXUHCSThotZqc7et1Q3FLJcyizF",
  "key32": "bNuFqe65jiwUm4htBecJrg4LxKq1t7jdrkfjAmco3h6A7MDxYzYv5mAEt7CbRfULzKSEPBPbxM7KbUYyMEY681b",
  "key33": "2E65Qf86qfnp3LtQitHCZ6E8Lo4xxQyAVnePUaR268WQekTUXKZS2z9S3vV4QzM4jxAtNm3qPVBuDE2EozGgUv6C",
  "key34": "2NknCNBMBu8bJrz8LAJpkpRE4NoYbWKCQFD3vuHAPBG45v7Rok5GZPJP1SGupr3pYgw3p6dfeh4WYnij5fNfsCjR",
  "key35": "3FNQ7WyvvYoHdBRzan5BamZkBEKZNa3ss2pHcwHVreA14fZNjceX7QRs9aXfy5CUSLQatSTuzF2NmdmX5v2CwgzM",
  "key36": "4E3dWR7fyXUwZ9oxP9XiHqpQj77Gh8CwU6YM58ZaBQJGNefFqxpMxxJoNk57b4aLpBFWNSdyDPthTdtvnVXnsHdu",
  "key37": "4NYzPVP3r1TQBP2DzMqG4Ls2pA6SuE2Zc72nsnkJByXFsQZZyKjWzSvKLhb13jpQnmnyqXZNGZyVtEqx6b4EkTjR"
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
