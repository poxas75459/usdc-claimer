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
    "4VW9aPXdzvbVpYXwEErS64Upy8J61DXT7GrmT9GeSQZJ9uqd1cAhrS9rbuKJ6YTeQZvWkXK3NgnwZrCzWttWz3cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxzSejZmqiXpFfEPXPs3rmjV6fGj8E9r98hpSxzyAqeqBA2hqZN5Y1LWw3cv1Ba8kd44CgLmYWXh28yFfAUnNEJ",
  "key1": "3ZJBfhiX6b6tkzXyYW1ewSh3aeGFNdf7sXK7Dx1Ux6upWMAKQfkqF6Ai2QviQX9e9zncy4GhM7jBDgMU7XZyW4Vz",
  "key2": "28Fhz93NgmtoFbdJhNDtcbxftpnMP63ZM8rrdXifmFKWpNPGZrJt4xNkE176T3jBJRxjbVR75hpe53xfaNLsBjNY",
  "key3": "4GJaJkcShcmzsYrod4KLD2BPcemdCgvyXJuiGYeMwPUpzdGs5fowtb2DW5gCg6ALDeMbqH62GF4kbpvMhX7bcxZP",
  "key4": "3nKdwJtkW73wbraKv8qzgBMyxRVjCVEPzPP3Vm236TZ48uEyH1FmodwUnRZXibYjMd1Fd7vnSykb5r6dGB2EN6nF",
  "key5": "3HSXUg5DhDn9aWVAPjkwDQsGZcsNc7v2hKZ2HuQTmMo3ZuqKnxsDjzGgBnJW7Yezt2bK9yEhFLxGBDgjhFgtx7yy",
  "key6": "2x1F7ESepT6vQKc1vNrUB5BC3ULmSmFBt2NAHUhr9DNPRQYA73q8kZZhPdv11roHiZTVsp5m6uL75CZEWTT4w6zk",
  "key7": "2xnUojGGuPMw8fWqiYQPwAswHchzZtK5ZMT2UaL3GY27kee4feJGku5RoXRNyVUQGPansp3UmfLRFX8v3Zc1bCtb",
  "key8": "N1TReoCML9SzggFJsSCVysZzEwctq557BMn8zrpoZDEkUmTTZw7b4vCeBWF7V3shmiWF8f4LqzMdd1QaUtwuBby",
  "key9": "3B8StdiSgUE6A3vy5q23FAF3zbSuVhqDUg7rWWjCF2HK7jjXsX6R9FEPusXYWioZD8PZAjEsajw3r4p3SPD5bfSx",
  "key10": "CqYAUzqQ7ueoaiwgvbyuURtR55UfPvVG9JxS6vM8Km3Rm7JMtgR7nXhL8XqD7ach6WpeShvZQGsm2fwVfwmeXE5",
  "key11": "3DuQw8ykjYLEGXLbjdcVSxWD3XiLue5AahX55oowMQ31tvCDe7CCpmTQi2DY9DNMWmo3kjg6GnvEDbyVPgWX9DWK",
  "key12": "5sahK9mYzPFfFR9nrcTw65NWHzdE73bJzhUC6f5A1oFQFcgf8aKH7qv8CNLpb3QmCDRNgyoHk2aBUFmGqCX7TEuX",
  "key13": "swPtaHDR5z464LBU8vNAP2TFNrg1a7JauuqNL4r15uaCxAQaqcDz69C52GroCfzSVRkgN63MgnMFMG6nYmNiDV3",
  "key14": "2b4yyLKGE7UsH61tSDKM5TviPtbT8XditcMoo2Ni4zc3mQKPKdLCcoZKyViBVeUEFx4mp9JzJu2mjarQofLMUtug",
  "key15": "khGkPvDcLce4FAASMzmqGKCqaJggSLD7fxorgSFjVJV3uxabouBpF3LZH21u5qYqNRq9eNtht77s4E68L8AvD2b",
  "key16": "2X1gvCcbj4KYXm7LKZHUHq236rHT633eawwp5amSy4j4rDXoe2kGhiuHCuSxanF2uPo2EzQiCeL5T3c1ywbJX7pe",
  "key17": "vdD1Vcb39TbbFN2RXpkQQYN6Mi4rw3BFz9zs3NBfNCz4GZi5fsfjpQfsE4RfQXjbXQmNbLAyNKXHrksa7VBch87",
  "key18": "29Z7kUoULcNxCYqmKTbbPsudubJXz6Tzm3nX81zxj9EVPZcwEDwyoKWNc8148wwpYJ5PsCJqq41HMKVTJiqJFT3X",
  "key19": "2E79Tp2QuXxV3GGJCt24tCZL9K2pN1CPhopKbssqe8ieEeUXXmcyoTj8sTbuQjBzpMqbR8Nqj7kL9L7DLaDHqguy",
  "key20": "4aAiwQRAMKC5UKnyEhJ2zpsSy3i8xkdWdPfHLm3uGFZPgBNaDgsYnkcyjc6sTrS81ywj5BycBX8kJZdphWExshYQ",
  "key21": "4UChK6jsbN8T2Uw4MBiPJy8qc7J1ved2PKzUQorRpr2uxvAHoBq9ANyXBqCHM7He3jdZxZwvhLGmk1b8Vq1xMotR",
  "key22": "5vAnXanmTpBZeHg9dUiSfyQifALmmhwZGEYCZ1BcqZC2BHVDucp3iX9e5mJkGHfGx2uQWtoYMvcAk29tfpCjpgUz",
  "key23": "3VYejyfBqfkW4DinwLSboncJsybB3KGSKQ5ZkqJgEjsZpM5Xj6DPxDYNQSiD4DCaV81o24vmqWKpBXkF65bxt46W",
  "key24": "2vTSTWkGysr6XuGiZLhewbBzWm7Jopj8UoUhWyUKc9j4ufvEsC4Y7ux3FrqueJXwsLhAeBusgSiYhwCo6irAMWty",
  "key25": "eszmtqk1U5zDdp5obmSq5Urm859JFYKPMEMJwMEVaGWHW7KA9aUX2kqqtBAnNnj2Aub3UjKTbYCVpPwmoMSwxaS",
  "key26": "26XrtX5LCz2FDhLQDLCuHxxjGpuBfGCpcbFJfSUWmuACtfaYt9HkBuRN8wfpkRpq7mrjqZSu1JrCYpEfWFavvNc9",
  "key27": "468w6PfpL3PpvS4YQR7dm33e6GFbutGjjoDu7PXSTzUcoGqFRP1tvgVcMTXLnXSCaHyufaF1ByKVtcnjtyqjcYoL",
  "key28": "XixUo64cTy4pgJYYVNK7zygZssGYKsv7wDpvwUVC5yR2ikKjoVwUpiN4QGKNm3LQopB4Z9x27K2yvv2BBMFpxek",
  "key29": "tMLmDxbcpqEiRzuxpd1YEdtvsZSSE8oBspaZagPMuksrHCqowtRMtEkfhn7TRKXjxvEQ1JUBhvs8bQ7vHdQecHe",
  "key30": "5c4X6yF4bUX7L5pf5kkx2mq9PaXaV7XPRKLgFKfrCKsmrqbPesZTncwxtJ66SqT7CjVNfxBuigek1f1eeG1NQgYV",
  "key31": "5r2bCL7PPMsV7SSxLovLrAYCVZBYWJ8ckr96voqPNbxfYC9dB64XQZdBQmEkSQTxk3G2bUDJ3zAn68ifP8WTi1Go",
  "key32": "SLBa3Chqs5Qa2j9w4ohiHhsQbSaU59ks5J9JRmJJcCPjSTcssU2qZLiiYh51BpUNaVQq9g1gqvfE36hzowQysio",
  "key33": "52tccWPTucFmEP2TJhyDZK1aREsWHLpHeNed8n4HziwxzrSEMYuRThdXbb38DXuisL6aFrWaeXwDpNJ61RFEn2GV",
  "key34": "DwkzE8RJh4hko71EKgZpqLedNmUSNcTjj4m8grX6orncULn5b6hXPWrSirDQz2hGkQTdH1XNXM7W36ubH8oriPL",
  "key35": "iXrQyMe6KwEptxrKYwGp6NVAqUhCweGVY6PVjn1r1Eev627TZVc8vvCHTEyMx92EGHYUBf8J7Ur3EZYwqyUdzYj",
  "key36": "67XhMG3h6mQWqtqtknAqe3PM7XPvUr3eGAq856qX2wiBiz8vdfiJUtnMeSMxuAq2YrG25XuUiSvYVA6Za6Jta4D7"
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
