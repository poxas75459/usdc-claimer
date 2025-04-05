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
    "5mLJcWF3FhTsZKfmJ8QJueeNv8mPYXjq73rY5oxXjh5EyYEixBL9FKoJ1AXNwwaz4tu87PG7J8uW4xcstjyHiTkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iiwHF93GxZdngN13waiEwuBskFrKN4EEmp68gCGtzQ52qChQScnDj6zgC37FHGqFZVfzM8QxcHmaCz1xJfZXmpC",
  "key1": "5yZnGLN3KPc7uahptA7MuGPUYcZrsuJUN5pKAaNMZWFfqZJPvtfhTLMc78bT4DRrqZvzVsxTXXgh99PKwSWVVhmK",
  "key2": "3qneEWJVm2SZuWUrMfnvQLK5d1wZiW9S5DMNXCUfHMRhLjQUL8FgRpPuhj7sQHs9wZZ98LhW7TUZjFdwXtFAGBjX",
  "key3": "3PLJzgzPJr37QrTHZxZNNEuBDXeLKKagWDsMNkK8SdPwr9qGpfMWxNaLQGoTttcMxaCZwq68ehShxAbQMdhaJQSQ",
  "key4": "4KRD9f8C9VS55JTeKbGmrxAziA6YznKBtN7Dm1d3uejuDkg6AcuMHLb6Gvwqp12ziUtdrnMPn4SQu9j7RcafAif4",
  "key5": "23wYhysGQDJ4SkhqP27n79tcqfAe2WkcAPsHnud3ZpoAT8Pvg9BgE2UfdMQQYtHzgrnYAtXJVfRYCf9dGs9QjPDS",
  "key6": "5Ps23A9z2a2rXqr9Wkm91zuJEfi7mEnPtYaBKt1tke8bcsTic9ce3VbZbLXT5SbXXUsNvYXFMWrQy1gDi5cRRcSd",
  "key7": "5kbir2SpLYWn9sAEsBc7W5sQyZgFZydNtUeDXFnQjXYkbmwyFNYjDgLjBEVEjw2AUstLb82GreCpRBiTesSobTzx",
  "key8": "3ggPFwmp9uoK1imjPmRxCSYsuBFGk2yJ6xmDHHgmG3DoALBcafPRaQWFfouEH37qJwaxjkWt5hgyXd2vWGUgRmvm",
  "key9": "3NVRuFJUv4PDZ9XbNvbtsyUPtRx9dEKSdBB6gNsnfLwGRnNtmXRFQGJKcG6eVU3kv85vAQYWJo4tQqdwRTpoENiN",
  "key10": "4buaAU453xJtNEMWLbpfV48AKhjoZG3LZWxSgbthBcgw5pmbLo6CjD9ptkEgRPFGd5KK5XZkSHJodKC7Fda5MWmd",
  "key11": "556SfqkSBodVhey332Ai7SVSMUYCEpUZanvKM1Q1MRCC8u1uyNavdXaVhpAPLAoZmHQUA9H4ohB6SCkFoZ5s3L2d",
  "key12": "5WYuap8ekCbr23qY1W37pkNXCyWDEmFMiUiBPbikf9scaEW517pUq3j4wygSaxA9ygJVFHbNEutM29YoSQr2ZsNL",
  "key13": "3uSdBr1tLDb9UGj45xpqSyN3mGAW959jP833a6ck7YEK6aEX6Zhz3sTTkak9WxMvpVDMPQiXWxDy5njwdLueQC5g",
  "key14": "2UVNFdJb6pKxnAH7ofXKLLWHaw3UbJEwTGddW71mf4PJjJCp961uYRdNUm1aDj86rGZ4Zsqj1vpWzdfDqdaJfd4C",
  "key15": "27RL2sg14gYW3b4vGXLsTJmENm3E36vj8ScpKC1vmucXvVUG9wwCepT6VHm5m2SfDbjdMq9byK51XU4dnTVRwF2W",
  "key16": "4stgfxApbWspXGLdT258EA5wQk5GJV8HsmQhRxpatvTGH3zBFC92Ywjj5Neb26nqseCP8jRYCtQfpAU31j5Qmen7",
  "key17": "26FNNd6PSCYoHQ1ouqERLNW8owy3ewG1dXpWQSCkVXjf98sak3KJrfagzg2LNTfFdASmKSffi6G1UQ39gHpp88Hd",
  "key18": "44G6WCNsepL1BxuqmdnCyTTDWUWeT3c1TBEgCauehynGowac9gZkEbeHXSP9isGJGGF7fGyKxZrgwj3sLBe7ENLj",
  "key19": "28SGmv7cXy4JpqWAFJLtqqy2v96zUCJnGhPYycPCPC9HM3X6Wz52vQaisGz5CFnPmcrC574YsiL6yYVZxo4M3ntp",
  "key20": "423r6coHdufH3roHqak3KWdMGb2iWo1q92CrfJfYcnjDRdgryMYYDX7pHgVXm6NEcyiVPwUimgJHnZMv6K6LCxkS",
  "key21": "3zpUSTMYR6uuFRVzmLSYUtK3m9Xtoh9onYjpz7R2wvpEEvgAHxjGY31WaD2XFGxxexZ6A72CmufWwXqzy8BXGQbB",
  "key22": "5JxBGu9Qfg3FEssntFYMWbQKXphMGRvL8uGRst9hy3ugYEVZuhNbzcS8NJqGqB6QAWxEH6jq9ksPm7WcLuuNXoiq",
  "key23": "3vJAjrcpZ1wPyZjfQrPg8rsyVLYgJ2KcPsW4vdsQpTSFpSUFvPZc5ccniVYD36dTGWzFZ9eVYaGvRR283BBHgMar",
  "key24": "5y3csdVd3CUJSCRB9mghkDq2qy6Ha9uKr4VxiZxeTXcrn5Jd4ViTJDSQgmZjYGjqAHeg5sdekqioV9JdK9kRafAz",
  "key25": "NtZ2NbiyGcoMPrqnZt56hitJbw1JPQMBvoMNu8ks3X7PkxWAYvGE1k8EUbQdZswZ17MRwZyjwJKzHsgnUnxMpsP",
  "key26": "4h3o7MsaSax5kRen7TTosb5ipjrURMbsr2p1pNzdaLibMBA3hz1e5Re3CpzgimXuK12kL8jV5Q7xEuiDUPUGc4wQ",
  "key27": "wnY2ccA4NWZ9krjWwK7c7VZFMJusHKxTBDaqZZdSrCEPXC2A64gz9zQPcyg9zNR1Jw9FYZU6uheTHQLEmLrgWMj",
  "key28": "2VoWWrG3zQZE4E7Z5ScZD64BzzEWTgnwmc5VDx8XnRw7trip5QnEe5VdmzCyRZysbbabnnywc4f2CdySbs2sWK65",
  "key29": "65w3GE3W6viMcvYvpf9fXwciPM1iQvg8yDEsrZ5g4sS2fDXSwKwwdDGPEcSubSF3CRhZ7sxiBuX3r7KhKGYXrLaA",
  "key30": "5ZaJ1svdBWkQBYhg5ktzUbJPPxgoWtUNzAaCPjJw1Tv51AiY9uZ9zbHnPoqeRwbNhrDqAMGkcSDhW7pMqj6BQDk9",
  "key31": "mj2nmtC3db9hiksaxGQagGxWJytJd5PNHTZCXCU8GqNdJYM1eGT7wJL8Qv6xfSKprKRXiQtaphoUWMtjTfgGEws",
  "key32": "26X1WTbKAeDVdtcRK2A5iijNfd3GXEb11oQMFCycjuKqFDRzPSxxD3qsA1P5sKHVbAx8XhPCHR3ZZ1ePMLKjunWx",
  "key33": "8ztVUVjJVin8qoHkzauEcqxDhsrMBiGmDW8TxKGMNPZhLcUf4NSaz2T5jHankCCUue4pfYVQPpB38E2rVjismFc",
  "key34": "5Ps4zSuvehQQMBy9FVHaf3TFT67dYvotzoGkehtGh8nuuDD96dxYNv7gzHU8QNdPc1sgv6pGfqvS7zJiKzgXmP9K",
  "key35": "ptGcxv9Dh7L4KguHddLrseVfgN5jZMPcHshZhTCti2rA9tVdif89543V2xZXq7m46FK9AvM1bzWtomK3a3XrCFm",
  "key36": "5g4WUHy2a15bgmincjVAXw4iXg4csAq3otxF95GEwgLejoN2waXZqmrGb5vEUQ9Wf9snfsqqXmtpneN6yrgyHREA",
  "key37": "3kjNn31Sm8eU7fvpKXkHAryatrzDYQ51DDP6CVtnm5VKJxYshLuniLjAXShJ1ZYLdwup8TbfCDjSCWNgnqtDPzNu",
  "key38": "2PBDVuvNKmxXt1PeGysypAqgiZ77uESWrQdfB5wXf7g8VbkSEaY8vxsZRCFjaXgvnM58EwdW1Jxx5P2dQmJKQcRH",
  "key39": "36mPprXSau9G6h5NasNb5UFuHSo7MZrihJNZ61QidQfQwqvkR6nVhGDZYEjayNGGwWkyXb1xox87jTgPWgb8YBgr",
  "key40": "2irPzSJ5wAWvqTCxZyq8t93VAyUVfoFgYpuHBxhtXWVsvRmFSyXN2LBvoBdbUxXB5bcuAjKeW5ojor39wAWtzTUJ",
  "key41": "wdR9cs4seg7nwV34Lvu1ysprBgqqsqErxkxLYgk39qP5UP7HQ2rwCBzZkA8Sdy13FTCpNUptEosztUKdZPSHT84",
  "key42": "2eZae43juKAWKv44CfrAAaj64GwWrbCVbhnQZgW2vKFsQwKrV2CS2UDXzbvHSEht8mERamBdf3wgNxLaXDt9dUfx",
  "key43": "3NemF5T17S1VN87fUUdfxoXFYPRWh4ZLgGgQSJCHmMhEEiG1YM5tX6J4vDdi6affmrUGqkrU9VnMX2DVccBecKQs",
  "key44": "5AsWGPfvP4JsaKRLVcmQ7zMNUQWg6teZZCyf69hTCNtUadcWxVeoytLBDSr9JHyPJc2Bi2DbTQtkKEYFg8sjTtjt",
  "key45": "59j3WrzBkrFzq14cGqLDc874ZbmLJCf8WTeNaR5iVv8nvEcgikctQuKoGYZZXu5Ye6E1HjE5kn6TF2gjp8fRgiFj",
  "key46": "jGxgTn3YYvWhxfoEcVcP2fC8ijchr7ee5n75Fu7qMYasWpzTmKmDT7HnB2Y9rcYdD9f3U2xgQqwGY8SV8UiE79T",
  "key47": "3eFauZi2zScZwthkRxWjpwotRsXdsJqNAY4YwLko5hxU3MBQJc6p7yZECgvCr2pVXALyLJZwhhQNqME65hQywxXK",
  "key48": "4fxc9wYWibC9yHF17DHmyctv9ywWZa9pFxMwBn8rfPWv7w2aC3ez8TPy1CtEBUSUodWASz3ZK9fmHQ73eMENKzs8"
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
