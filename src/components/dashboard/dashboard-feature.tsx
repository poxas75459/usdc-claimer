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
    "3j5RgNECrozvaoMvhWdpFV8wJe8vr8M7ucMS9qvMm7CtxFV1KrMf7xRXa7CmczToyBBAenBWd5WVMB7UKKR9uKS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6ToakCYm8ufoWgzan6kXgKwvrnG8XjJS6XTLHk3GubnKye9nMRwtvjscykWAovRjgiSJPjAamYEhVveVMP66fk",
  "key1": "2ESbvib4HXLA82QW5ML69diTPPFr373siKCDN3mxjswbAoyXeuHJ2JeWgZ28sp7xF49wJ8PDFKpuTeSNoCTSuZPv",
  "key2": "52HoTy3KrzS1a3E9XyLURccraD5idNPRMCNV8xUzJDU2xB6JgebSJFe73qUVLjUyZW2DQmeei92odWBMWyzT3wjQ",
  "key3": "1tB4ep9hR2VEQsPVhVocQbMRcbWpT4S9eog8D6eu8H3YoJe2yEWbkP5xsXczzvE9fFg5SmaFQDhyZkBMY2HEih7",
  "key4": "4YpFFHfJtGAjxxrDtLGfJCxBWhJDyHUzoXuUkEFpv4o2iPUTVgo5ynqu1NGBJBtSDTuyKMwhcGinDcSFnfL1DveS",
  "key5": "4qEru4nXkxg5cBkoRtRGy2nH9nX7vmpxHT9FVPj35zQY1ku4zu29nUiVcwuAfybiA3bysvnywCc4DaRXZjF7t9FR",
  "key6": "5wC8LAyoXPAmkLXp4ESZ8wcEoS5qrKjis1aByk4rTYQFdUKRF8iuXvdJ3hYir7qDmiqsSbHm1goaqZfRBooqPWu9",
  "key7": "2xsAsP6KUSinxe424CyoJqJ3q8jsPsMzr4wu13y3tUCz4pDFBxXa89ZCtE2u3bYoAsoEHFvmcXjuiXCW6osLLqaC",
  "key8": "4tpsk57MY5yMDeU3QkEYDcrPrmPiGZhiPU65yZZFjQ5ce9Qc5PST9sy8r6zGi6VadL1wAo3mKncAY2wt6aKuLEPv",
  "key9": "3stnrFyJBPYvHxxKjvEnq5cFhsYwvHXjpKcyFQsNLCKSeGL2WxSrx54TSmDvKJQNAdUFxACK84vn7EQefBrMbigS",
  "key10": "3A1wC8EoQN69QKwjTYJhozHNdwAcAEQveEaFxYCuUCKUv69MApD2T4eY7Z2hxYpxbx13KX32QShLq8rPaNSabwJT",
  "key11": "5TSgD4hfzcNM6YBLSUMpStJ5kdtC7btz8JhZt6Rv1a4BPeLVJb2GEbyb5YmtqBwUShJUHQAthmbodenG111vHu7z",
  "key12": "66vUv33EbNm52MnAJ4az2zFWdXCDco4gFLT5YSDKLcwFqRStCHE3XUjrEcHbzSnT13WdVNsdr9KEn2vHcmLT7cKK",
  "key13": "38NmzmstRCry2G7MebrcE5vwtrXHKBRKmT35UKZNfKUfrCcLgu79hKEdVZHuy8sZscdCRA9hStvR1LdFSQmrSGh2",
  "key14": "DbPjV1HkSLjRwA4eYKHmMCD8oaumSLjdsahFpd3DMPg5swHhR18DZxLDjjYBjuC6ZWBM8491x35YLr9adQk9Lz3",
  "key15": "3HyNHBJDxbHSHN1Y6MrR8fGmjAc312BYVWfXcceYuuDSXhda2JqLYT1Vpxe9kfqhjsULfLPtKZp6a4K4zypXkVSV",
  "key16": "3PMCf4LUeSSzFXCq9gE3gxSZKxoHZF4LR1yBH3cAwjMypUfdxo8TC9bYAYyzjFCGDyRKi1ZrteCKihFnaxzp1jY6",
  "key17": "55Txb5vdiHdKny2dKeD1279GytXafm8vXiuQKkykKFzaMnk4q2ehJDWcpGYUP83vgLLWcoDrJuDsACmzoFATxnzX",
  "key18": "59dwiNvDGXZbfAFa6ffYACyfokKoZfy8VWB6oeM7UBxsoYzUPEuTD5W9K2cyXX6Qaf5t8v2z33ZtxodCuJfMMb9y",
  "key19": "4L69N2WGbq6huvWLCv1ToG7nLqP5XFLVyFTfG4mupC3Teckwe2vMPGyziLsdyMXDtDyqco1tF1iDW7jxcELnC4Qq",
  "key20": "3Gddw3A53vnMrKMQSX7ohndfCw6HXYGpf6NhKyrigyKdXo7uNzo77jJs82t7YxpBDmtUukxXr1T7fcBseJ9wBPR1",
  "key21": "3grDYVj1QocE7Tars1Ybsg9EGq9Q1XqhztPyC69a8KTiLcAc3nxCZNaxxsWs5wqdBKfoe6H6AUqkF14Du3NQ4c2x",
  "key22": "5dx7HXdoQmpqxbrNA4zPfJuzkrTZirgTAuwVB95p5DNxpNp6uTL1k4wzwzKpvGhna8St9sNLXrkz9vZoVnmXNkQ9",
  "key23": "3351sgHt5fHqgdPeVq6EfAWGTLa2FJp7CmMckpHXF1MUY1Viny2ByzbUSUQcN8eepPbTRv8Bev32KdbtLrUJkA25",
  "key24": "zRPGMR1q619k8VcdjBCeoYCJ1ibeUq1ff21B7gVYnd6CZdujxHGs3k5euHLxxNKVqd9Yh4rVYzZAEtps5R51ZKc",
  "key25": "3iSKotjYpavhSJxY8oFJHn38Vbgyq6fGU7RtKneXjZ8e7vzfaTncsp1uV47hdXgaNDnCAv1EHtdTGkaBMhh1Rdv3",
  "key26": "4VtzJNL4DvFieVXt4A2xQsKBaAxAS1SEGs6AniXKtEEq38sMub6c9mQ4QwxkNbTcG6fbJVPMzTD5osGanrF6sEq9",
  "key27": "4ePa1k6xuQqtWw2x9aaSFX3MfmHYLzb9oTUT5DQjJ7sPeaarFx6vyynfTkhy2TwRnVsfx8G6xm51nbzKXAoVKTpH",
  "key28": "4skR3trugfjSaTiE43Eq2kEPB6YZnxQzeRk6whRaGX1zXFhbqLWTiiigUv764RUiqKLseeS8GQvoeqtEVFTCtUMe",
  "key29": "2d6afPLc7pqBjQ2yKq34yigBJPBtL8g8NVBa4BSboBTYHY6jjKafng8DCebc52Wt3gizbyu9Hcf5ENE3ywRwB48D",
  "key30": "2MqwGMLNqZZ29aaJSiwFYAmFhPmtRAemqMh1VD8Qh34E9BSJAyDrYm5vuZAaiq6XG7iJkQrnVZAKx2crpKLLrAZa",
  "key31": "25gThw9R1gQtj9tRjfevDsU38rGWXTW6a6r3Y7srfxqdVs2TW4PgJSm6d1HqB8KK3DLLr6sQ3rFJFffx7ppND8if",
  "key32": "2z8waqb2yDb3LemjNYEJJwHYVGFjzUx6UidCUqdqcPCUfybr8bnAPoYktsRVefvfGiqHQdKmZ6Cj1croHZJvTG9r",
  "key33": "xGVSRpAMG6bNqencce8it54m4vz1EQZyjXeBe93oKr1JahYvz46reTNho3e9k5FeNmnFjTRzAPTsHbzWbLMG533",
  "key34": "5Z56v2HDXhkZtPLhpZysEGQ4NWvGzAL6vscKtmZt8PATwoQ7g2hKzLvsSNsg5xzMygPnCXmq7bx95cpDyMwmFC9B",
  "key35": "5EesX26fgeMReu2hpboKhWhxp8EVLoxxpmt2tPRdXxTJAgPxW5YPhbzhGPpEbU7SbKooHEieNoobyMwsK7GCpZXH",
  "key36": "YD43K9JNb1M6jKngiXCGUkmrVtMcroE1EV47oaR3zFd5mFoqWbLFQjw9KL57ohWx8buZWDZ5Jhv1whPXxh87Bpy",
  "key37": "46MvowC3pP6Rinf4pzAcftCseFx8zNTjirGCpyTM4s4jwfnjK9u2yTDz39YaXG8hxSzXjhbN7sE2mhUVQJ1ZnkNm",
  "key38": "4iSfes8JfmKoz7JR81PF8LWSNRwjqm3YWBaDtvmYrMKmnr7UUv98QygfcSVJcdSVFsXTk5Ro7M7Qv3bi6XUUbMhA",
  "key39": "28zY5UAPGY9D3dFJEGnuqJZY6moiTec9mcX4Fjxi1jyF94nQ2FGZRG4tyBUndX82AMaNA6dgMvycd6fh4i29YZyb",
  "key40": "3niii9Uvpn6aiiXmnF98Z9zCoDrZtiUYvLpNrmL8a6c2a1wbHKmpj1eg2xULVqwKbnTWL3VyFQMizhhJ9FeF7eqA",
  "key41": "5bs9VinJNqxGHsNqTf1nJwFbn5pVDtDmH96cP2t6uCRcC9javvvevsBihrAm3HrBrGgU6DFYQCJ1xBQRqbfavzif",
  "key42": "2NRtfowTpV5LXszn8rntHdp4YiaRzzYhh8N1fet9WbMaDJMwv1nVUpncZztcvh8jK1KhSRyfRHfXCZdNbR27SMGa",
  "key43": "5TSUBwVJsw4euC9mokWKiK2sr2Kuhx5h5V6acWpLNFVDTMNAyVBMkL7hC5Xm2b3JLmdrae5r6xPVv9y1ooyTrMhg",
  "key44": "56VyB7KKNYHxSbfuPzLeoU5RiqwfB3Men4gN2vcukF7Ch5KjRodQmZPHxyMRvJu8YrpHZvuUZzQK6nz5syTmf9Hi",
  "key45": "JgMQA2vvK8tsh9ncD89fmtKJvviTrqqYMvY6oSB8GaFxcVxUJpXU6uZVVrbV8oSmLfeKG21JzFjEAN2wje94fEX",
  "key46": "tvY5D7xjYx1VEq2Le7BHXDHnqyW5rYXP7VJ7Yy5Ma1S5BzKL73AGh3KQJNEwzoQLHhBxb6dFgfPs6VHMV45SJah",
  "key47": "42g556a31zKnArXDe1GdQyfMDurwBMFPbHVGLSRbf3eaVx6zQvtLSKeWAT8CUsf1ikerSYo2tD5nHx8uY71d98uH",
  "key48": "2pGNqrZ1trucAZSoiLcoJHSaqPNARLtvmEWdvyS1NRepQkbg3mzNK264x1GMGFHLRCHznSMHxFN94WvTqbHdBVPw",
  "key49": "4Wz49rLT4SezKpnLdzkZKFkenmyDrJK1Rza577f8PGWGDWYRPB9Borg8mHg36rX1KNDNkNYb5ogKhhhMTzNUyd7e"
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
