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
    "YcUDGrq8yDWSLHSyge1XY7NdAYXL5o5S5sazbKyutnZM8p8nYviZiRyZhkWcUjLaeTd7R1VGzZu42WEAJ64BtZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66VK5qRYVNPhLUs9r1aUJ5GY4uUnQ9CehiJg4h2DkzZH11k98hfJSkAM11fWLVcb6LEQ4v4HWgnUqQFzoCryH8Hr",
  "key1": "gaSdvoyy9CVgQ3c2NmkKCNVWjPRVY7Syt9vPdM8n9ERvpcUAdarBYFsNcNpyBo2Ep8mH4uQ24iqCWsyu2D3QctX",
  "key2": "4iNeLFFGyzsLAQcGz1wWQmiB5r8eVkUduiooTriZmoNKQnFLsnZ454b9MeTAcphTtn3VsFy2vCm8V5Ss5ApxwQNr",
  "key3": "2JsmfkkMubpC8wy2rm413gSmEJLiLRVC4YP9BChYFLLRChCuzjakKFqTxDVjTbvC6vEFCGTt2Y4cxsNkTuaPrZzW",
  "key4": "5FNr1aFWmweDWDVFRpcB8Mx5NXhd1NQeJVhKeXCEmzSr5b2XNw22ZWkDjUV2YL3CfWp2EhA7m8nPRrHWeYQu98tM",
  "key5": "5CtHThHiW5Y4GEsBH74Riabqui2SDexfsR2Kqvb2iSotsy1jZhNW1G9jbtYW32k15xdW9cC9LXZJnUFwE9rpkfuK",
  "key6": "5Jve9Bx8LJWZ66VUYpfwPrLv3uSCEcGdZ9YjKNdyvW8EBTMEs7KF83EWS4dEvfaJa3xEb92zoQZoaxoVxsHHtWCp",
  "key7": "3s99vN87xPUW17Ea86dkS7XyYdtbubhvJ4gpTw3UECjBEp2YcB3mM8AstamE8aZ6VyCM5mqsbaBCKcn9w1GmTzFL",
  "key8": "3zukoKNtVirYWyDJCFdY9uefMjTR5wxHSBamSd1PPXj44BYXj71idGfBhU34mKC5zfnPxwsmoQPCja373MUxK74t",
  "key9": "7Kewwn49adxhjX4TbcvKucLeCkdiGPY1GszfmDdamEFHwgUfoAQnXM5To39549LYftZASgWXccF8PkHWhppRWVz",
  "key10": "4CqDFqxWevpZpYWmHCcTEU8LMUrymQobyBnY2ts1QPKsmRL8tk9cr5M86e8bXoCNZ9jBNwKDxc4SjqqNBhCfu9Ue",
  "key11": "2ruboiuP7MXYCuxxP1HSRfJYWqxiExvtCS8Db5sKgjte98uXMGdfrsXyPPtyZZMsHpz1AyveqWSJbWSLGCRaRFC8",
  "key12": "36miNJyTjJewHSZjxBKonbHEAqrmAu7DkCX8Vxq9X3GjSXrLHgrDvF829bStAjhdy94ukPLppgtese4yTsDr66Ca",
  "key13": "2XaHoSn2yoqnE14TV4BqCMWXuse1dBhegooAgRNeXuVDFV9Umkme5EpajCAGqxrWNxMHgDMEeS6UWkyQ2Pg91sUz",
  "key14": "2AzZwi61VysRKr7PFDWt35YmjmGX4gGM3gWx7M8pdWvcKmoEt3PAN89j8LvPXMhZTQ4javx6SdzCrP93jpBMCiGn",
  "key15": "2bg9rxiVtif4BbDQJZ1EKVNnRAKparyWGsPMfGeHKDYkhLvSpyFrN7ex3JHWPNnAeZzSJP1Z58QXALqShGuPN44V",
  "key16": "3DgEPiPxavUwvmfybrNsJvvpkja1aH7wQkHU3RqmA6KSe4TMDXotjNgUcRBzqyDyP6r957jzRZAYaLuJFC3kiW7o",
  "key17": "5FKEWNosCZxkEKu6kouDn9WBNWTgrkajKRbZVrQAG8p6qritUH1HSzuVWJH44QTLFRPbBNUpicNFHSsuCEi9eQnP",
  "key18": "J9PFtTfNeBzTSgnNNuYvcjbJf2gRD3h7M2m5CqLGEaMPjLRgmYniVmXgWh8wWQZ6S6vpJjLAG95MX3ttSX3nKaJ",
  "key19": "2n8bh4GXz9Z64h5PAYj5QxQnBgMAfPamDBdTX8PJ3sxge46BLD2Eiu3Pefu6FWeCi76hAEFTsDxWGgwRj6TyuHQt",
  "key20": "32AoEjFcSp1kKHqzkM43KJrcyMrAK9Nke2Ww9CvjUCFpNYdjj8FdWSuQrgNSamxLav3Gh79yiaR1bKXYN7pGtztQ",
  "key21": "4d78PmYV2fBspBdmhhC5cCya5TxrYakjpm847KuXQMMhBnpFBKX4S8EZcSgdW3xKPepBnALfs1BXvVig4j11hNow",
  "key22": "4kAsydAA2R4nhYpfbcbLgdW7fcpdHppgePFhkoV626w8VjKwbfmrTR6dkym2dw8xVbVtaWRRcrm7Ydi7WFQeKEYS",
  "key23": "4CGH1gXqpQs5TezquoyrhoDJDKrZXEnqRvAd1dLUuw23TyeWibG7z8L392DbnGtvyRXbtiZoPpaF1tBRPBdhKv2t",
  "key24": "rXtCa9nJdvkTReXuiQ4nLVFNiaWWvCr698gLJ8ABV6fRTUTKU9suwjQfPkbqzKWse4UMPhmdqvU4Z9UGkAHBgn8",
  "key25": "5oNeWoqCNkpZXyXLVX9iKQ7AjoE1xqmPYJiTnKJGmA7y875ZZXAqCoa1fyuzXsiNcrjJnzS1RFBFi51fR8rfwNZz",
  "key26": "49XAVzBGb9tYgJyrK4m1UoG36FoYS7ny4SY7fV8t1TyKyUnBMfY6Snja6fw8EoPxZeYPugSnU3qDMn8mnkETuVRn",
  "key27": "46YEGmh8tLggD9xyHmc3j6yo2KaHzpVLRFxWSQojrdj8tbgaARGJeetS4BUjgEbhLr9r57AMqsHn1zkNaJSuS6g4",
  "key28": "3oK9k9UcPefeUHK1bqZpiomUEQ7Rb2YiNP7EJ2FQY2ChgttFtTmMFUcqFgXZcwMn3BZqhGmzfkBk1rRAJEJVnmoi",
  "key29": "3D9AyBqyBZfTzHCG6r1rtyAFWVgef7AKVtomubQ5mfSNkaGSeynbKee8RjTx7xhWAVRmKh1WaFmw1YcyWFxZqD5j",
  "key30": "5MdWkdy9C6Mao825FByWVrCcrEB4u7oc1VCPHqb1dHZD4J8b14ZasdG2ggWA5ZcR55t1UvMERkUCLKDyVuyBj9id",
  "key31": "61HUU6xuRk9TspuTH7eo4LtHrnt2z2NxPD5xSxh8FWVr8DqBV1xbXcAwtAYrzq5t5mWUavpx7NTFG48TfZQP3u9L",
  "key32": "5Q2nxGPMn9uoHZ5CTFrWgjoQdL9jF8B3rbUQETAaMbiouw3eS1o1MDMuMk8KdPGH1FzKFGaJwANoWEgREnDsNQfw",
  "key33": "58ZVesvGReF1SHVXncjxojoik84t2bPwaAarSYd9fSWV72gsbHGyyeAbJoUZfP1AV1EhQBuV4ed5pJ6T8jNbER1e",
  "key34": "4puWzz4jucQwtgyrVEYs5H2hR5QsJYkoCuKZu7qnVGTRZr5uK5SL7k6pnZTXKEKf6CxVtLhtLGwnpKprE377jqFt",
  "key35": "4ftFxu4DohtuiS9Xt6SNED78K29JT8qmgN1aPYA8i8wKnh4HpwtwQ63sYqq7J2ntsGzhHqgfKWoYyqdZZrPNFEAN",
  "key36": "5G9by2sdWGjJzSGb19QACgoLNXcQHCvTR6oi4UDYzdN2oRKo3GhxN1T49LMR1SpJAsUyt3eZY6qZ6o2w5BuSKgJM"
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
