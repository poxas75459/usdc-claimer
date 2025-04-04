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
    "3WK3EqrG4PUgwUTiPBikzpkX526UzhKLeZD1UfWKdj2bbRSWR7HBMM8b9BpL2LZUcbj9ndXXdzqhVemE5qhJv83g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPNFZQjKVR25dQQwpDCuETVnt366NCc9ZsWFjVHMEHLzfShaFmSeUELsHyb32nU94cYHWdk34ocnR5hP2UFJoqJ",
  "key1": "XxAFnEz1Csv6fPJbjsE3BAKssmtsD1qJHVt4LFcuiv7RGYye2qE2bBbyT4nG1viboG3z4X44PzuqVCZn17RgvED",
  "key2": "5SPPXCjLfBwckGsLwCZpufVSD8p5SYAEuXmNJdq3SscdFriUnDhYhFBeGL1ScR1AcMQq25ka8rWQAboXDVVKPTi5",
  "key3": "JygZSXXHJdAAsytH5NZsFtt9dPe5ATU2KrVTW51DjfG53DGd5Br3UggvHh9REUTrzy7fxQpCVuPuU224MErAp8A",
  "key4": "5dpxcjn6sYWR4oinoiiCHZykS3wRGXovNtFQwqtq2eeCkj3QcH4NAiVebsNNK2fGFYLUsGtiKkjjpJUFD8kFBgNv",
  "key5": "67iAv8EM1X8X2XTGrTkFg4pdoh1kb1K5NmWLMNxaLyx7xE6qUq3Zs3ibbdTsLgeFYGTZXwXvK23fMuRvbpBZCJXf",
  "key6": "rG4xqYjJHHtgRFinxQEfudUwkJArxss7EfUjhZizTsNxicdW7MVHHZTHGz5ZS3UD5f4nYQrVQZok9KuNphzsARH",
  "key7": "4x9pZZsVMjmvmXvhFswCKWxjJhdc6Q5EuebegTY9a8s213WyqrGVkKNk9351xogWfqYuZtxqUACXVnzezP6va8vS",
  "key8": "5PE9vGBotjGQMNxrYBPDPkZdZHR2mSn3iFFaC6NNFADGeKKUNmRDe6Z8bF1iT8joSinkQVHfwKNAoMpWSFnUsk8q",
  "key9": "4gnEFCMWJm9qTaoFF89mjqyxirPgWtU8voWEv4n6oR2x3hwC2xcmM9izTkwUNezN6b8uXx9UjUcmfGefAiXhVy5V",
  "key10": "23R4QXWGvcGeYe5DFN6G1aQSTtNYn81NE3espCmgwjgyhizm4ToS8kgsMRViM8n1YkSJve1ZJQsXfDTq5xWwBzpU",
  "key11": "5wz3J4RPegddEbtSb3Vq9qdyycGhzSeoRQr9Rn288rshcYVuYBQUCsV9hysfcV9cStaPAH9PbzFp4evWVPi1C7aF",
  "key12": "5dDs26kj5B8fQYuRqC6hzNcYRrnoa6pmmPuiv7FaFjcLMqwbbAieMexjzc1yVpWxfPmQKv5GzGtN3KVEtbyf1VzN",
  "key13": "5pJEh2rweAuLL8L8QkUzXVYP4zWa4WC1jJxp6gsG51moevLtjAmMq2abaM45Mdts22mx6TYwGqnCEMzU8x2jCyV9",
  "key14": "2fwqJBAek4tfvaXUojPPgHn8Jadssrapyx2AAtg94BP1oPQ9i3LTqcoMre3k8dqKaTLR82JBEHY3Ny1arSWh9Mrp",
  "key15": "5X6iYiWLeTzqKStHWTk2RwfvJygXSh94CroV1FAeo1cHFpjvBUgBxEKeuqf2BmEGbLqKsh2T1LGeuTyZpSiSYTRt",
  "key16": "3vFBpAJ1gFhnpkeGoD18zrj7cTRgGTxDzeYT9fDagLjBQ15oFkQqttQXoD1kzNNzQVYM4EtBfESBLrJCJbBBuNKQ",
  "key17": "2yE2fig15aHR5NWQLfTWCqoQYaJYJyoBcVuqk2huRv9F2xGfvhXkM8y2uQfZCQjvzp5WPHf2oHGQVtoMP8kpjprh",
  "key18": "1ZYn6qnMnTny6wWrZuxMivivHkuNUX5ib6PZZ27zgMSaVtccyPVzNRzqpiYsBxS7VoK11f6jNfjNJRhGqN5JGrz",
  "key19": "4DLTPAjNYA6GuWqQWzim5wgvmuzj8qCEELAVpqXdP3mRC8eU4L943WaAzWa5NCAtiuYF5KWroEX1jEbgjCn917KA",
  "key20": "59BZAwAkbyD91fnEFSD4qLwUsLtXQraqYgYCPueTG3TefkshJoPhy1VY3RavcRKSxaqrB5bdc54oXrCpPdQhG6ZE",
  "key21": "63NyVb9X9chXRrHaMBNChuTXGFboU3Hb5MCpQ8rcBpUNNzTKDxqtqLq9TWjTa9L9QDtNdWy8LdNEgSk5k8pUcTEe",
  "key22": "5KsXb7aVZ6zYyrAW8DyKm4z8qHfmKMZjSTqPJoC1ujUsfto2hFrssWSTbw4VRZHn15coSRPBdikkUGnuDhA87rBR",
  "key23": "2xMgWBuzjBrophF8zoxC9sDEiTqKAE1aDUMZjEdHeB5CAXW6C9Z267Zr5Hfc1NtFVWTR5gTyDy54Zq6FGuJmrKyf",
  "key24": "2qmAc7GNtwsxvqmYsFVLx2hU15k7LRzGFMSa1K4kPdomy6iQxim2H2DGiTexTGTrw5nqbdeCUuVNT6yUPWM9gTfk",
  "key25": "4Mdn94oEYC8Z6aFT1yjGH9Ls7T84ZRmcgPZuCdQct6WCeiWsJgzU9J6iiqFqM9mByijnjrJpxWYLCUY5bH5pgn5d",
  "key26": "3E2hhisntAh9fq66D196htHRCFUABGjP1VtDDY9kh7ffKCdvo1xPbCx4twgCPJ3DgSmT5y3JcwJPT3QaZPqwa9mK",
  "key27": "2m1w6tXWncTW5w2soVwXtjcVzG34BuNr47pXeZu2jtXYeUJWKqAwLEBQR7u6srV9AfndVRSmBuS6GneVdMgVqs1B",
  "key28": "5SeCDZGgGF6LHkM3LHdG24hqsSRUceeysQJdQp1hvmeCv7qMMHjUmnxFLM1FCHjnbDuwDhzjaQHSv77xi5Etht2q",
  "key29": "4EU4wZJP98hWQG9cSZNACnfmx29ksk2AY6xb1xU5Xcw2BhbAMXKcdkc6SmMgVEjwyVABGPEYCps5ox4h245MXaKZ",
  "key30": "3Y4UyQXuPeQ5rpCaU3TsHpkvh6BMWrqwBJ2vaMXLhPduiqXc6Xy4wZ95de5kYQtMGjVj3jFaE9ECq6cGej3PqTbC",
  "key31": "2Dw4nWMo7YqhJXeSpcAhyyVVofCk5im7qJP4g5cD8WqhxggT1m2FNQ9AomRSfXkakRLijetPSfd6st4SdhRhERTh",
  "key32": "27BgbtZrNSYCX3F2EoCT2uddvex8opkUDFYeryiRQxJu12MpYAt6vBiPRSgQPb5RULeL5ahaBenUQ37JXHhFgL3J",
  "key33": "3uGC84vbQJru39EifcR5PR5E1A6ZQQxEQzEuGzYT2cHsUEj7iWqrxgSpvv4XY3egaRD51BzA4pC733n7hXnnHP3v",
  "key34": "Ka8NkMKNcxyaPH5ikSeScpH3ggVQfsARSYfMUrCyVa5iGZyVtaxya5rxe4HwCqwNPuaHearXMY6qNQuZzDopwyk",
  "key35": "58T7h3XGQ5fdBX2NFzLoeaaD2vTJrHKeHAroxbf8PGAMVxeMsYK5REYeT2i364rXUMfaCPJckfLKc589suUYe74h",
  "key36": "UcpauMK8gCQVYg56dkUL4Ta64p6XS4GPZthxfk3i48qXHzAnQoLfgDoGTKY5SCsKPz27Toh4EBaMMZ6zkm6Dp3J",
  "key37": "3J6sc4C1LEoGtfH68h383Zwh8ANW9unT3bvhiZwxCfQ9zNgPZoeaz1snQuhMx592yFyjS6XjFZ4DVyVsaaiTvRCR",
  "key38": "43KrnUSiLp34nYjejZV4Xxmh3KwUDnxNhE8Yix8rneD69aXFaHFhrZ1erJ9Qx6Y94GQ5jfbqJE8nE1oPN2hMJqBj"
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
