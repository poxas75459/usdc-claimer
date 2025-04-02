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
    "2PCRRMADmGoPqKuCH5vohQ28GhotuDse1QRk5jGcZC6yk5rp1BMYkoS4gjQYbtThwq8AZxKMLECbtqEDRnqKvUxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRaGHJQk2AN9EVwhTNRQzXwF1R5YHb5jfZjM1y1VMKC9HdYqcmrx4VsxEMDyB1rTmcsesjkprZZacH18cRDb1hY",
  "key1": "4m3v7QA4JdiXJf741mUWeBf7bCturBkGCu7gC3Ln1NxxirJXLCshvkQxjojGAvSyv8QfrTHNnWYajbMA193fNMic",
  "key2": "3mockjDSXEMyd48bBN1MzkCpz5mRNnmqUPNrSzyPFEffq72MKrfd1qpPqoGhecD5N95v3SCAwEmgg6Rr3GaihD7p",
  "key3": "2aZzozb6Gegdj7fo8ws9EzRQdULoiC1qzHvgZXoLMvNspAssWCjW75VXAWUwxBTp4bwv4usSdrqxvg5yXYABLpFj",
  "key4": "4gh2frUFxJNXXt49ERZo9C7tmT9Ub2DZxZuavsoXFi1oMi3aFdchKayvro7DnEcXS4psjrLCNEejdjjQxUcf2dde",
  "key5": "JfdzXVYe8rNDSrB5KSyS44bLWofkPYu7NsWDu43Zf62YTZGQ9UobqXcjSwrbyhuj3PD5y57kWS2y6yxAtBjnh2Y",
  "key6": "39be4BqGYeMmsnEPhXjnggvXyN8HSnPteFSAhayBEEmDwQ2ZVGcoQ6B5hYfZC99BjHCVM6fnLCVM4vRPSqhxGW1g",
  "key7": "53t8uK6z24dWP3wZBjQoBoDNic7Y4xTZLmLX81HG4geEBanPmi5hWFLrMcLhoNnxA5gHokcrhCVh2HgLsVqsQ4Pw",
  "key8": "wiutQenZvPKJAD8oiXCch4oGAatu9Juzd8bajSCqvB4baJwFE2uicHMHSeqEaAFwR9r27qTtSJdEcvFQZ1YMfXR",
  "key9": "KuXv7KBM1fZnN97Xep7DAggZAxsUdB3HQ6j1G68qWahm577nKqrDed2286Jon2YHno7nvwYV1jfTxU2ZUhxctZp",
  "key10": "5ptYXfaZvUvzRS93jV8T1he8RVUZfm72YtSDb3WMh14X3Ezkn6Bz8V3drQxwQ1DfCKTfxuwUZV9RoLQ8YT2D2pGi",
  "key11": "425GLVKydRtCYB4JDNAR3vQYTxALByvBRUQC6fFvkh3mMrgXdxf52DCk5s2j1vLuc9AJg2ycoXExjn9DrWHJmyVH",
  "key12": "5KndPPFEUxjtdetoWjAY2TkoKqdJSw1eShAE5ac3R6HSmq3m36hu4Bc3kqShtjuP1rnCrymsnLSLinKnfrysgDwa",
  "key13": "RXfM76eaSZKmwCgn5kYHRQCP4uh4XDk6Qqg4NVqAUdFVcgYbpuUYL2FYmZuN7GKMWdNBHWrZYsdBoGUTV6q9iKm",
  "key14": "2aYz7hc32VvepEjRqmWwjP7uGqhf2Ymnw3uL4HgxyT5A5zBn24e95aPuV9uK3G2SYqLvm8TAxRB62BqTwSCrr3tr",
  "key15": "2fk4wFWRd1sZHv2md6kTsEvfzBLVT6iUtBzzJAsjMix6DDfbhgxg3u6HSj3hiXjihjcv2ZoMotJC7RRKbLTx2dfT",
  "key16": "2d9f5ZBG76GCiHFXdy3gk8NaR8g6zqnxMd4LcFxs8549Mqq9PhEM9tdjnzvv2uBPAep36Snjn8fBPJftuHehp2iU",
  "key17": "5jouWE44f84kGeXjsGrT42iYqqcMaPEQC1ejmP135C1Ph7tKNi3eUQJyYhJeQoQxgQi3HswEkossKtPCqrtiZxpA",
  "key18": "5dBxFsNhE7XMgpzoodn3tQeDJegDe9FhrdrBx7iQLuYNtLaqr5kHACV1VoNJsf4xDMLQn6uDsYTHDEXNbemeAYfe",
  "key19": "2BownmTEs13eGbDWS1SbuZ88ntWWPUuaJSdJ8ba8SotboVJRJXrP3bGfbM4yFv9MyKvJnieywJ9k93RdWuxaRdf4",
  "key20": "otxmk8VodrFh4cY8J42Rwux7zVSFmw6Rz23jwNdBr7QX3D7u87AN4tMZcb1NasrAFwGDBdJSknCHgTTUrp9rCns",
  "key21": "3TebeA9pV7RzzGKdphbRe9tXGXX6dPR1Dyqh8QKaFyztqvPA4x68gDtYVRhzsALswRFq5oTr9tGUuPJwgKLwpt4X",
  "key22": "3F8Ja4turMoTMFie8Auz4MwugAXxqXdN6bWpzraHR5xNf9XniUPQaULpJxXfzWSXqfNnaxXXc1MkusrbK31bC6x6",
  "key23": "2H576iaR2xo9Pb5NDTGmmAgDdmkL23SuVQ9VuFSrWifTQ912JD3k1dF4d4DwdwRFRHFZ2vURdJ1rQYzLNXs2efwU",
  "key24": "653xUn6BBHDZW1NjbAuD3aqpCBvRWG2sqshYfcZ9KZNqefJd71c9XvsXmCuBy6kNXWJNXv1RjvWLRA5uzTR7gLNt",
  "key25": "5UkpKLPVKhH8CSRwtw5kskHex6w2VdjpAYebAtwVnNbpZ79kmKuJMonc3druQ1ZibK23QSqKi8RZRnrAZJAG7no1",
  "key26": "5K2KHWTB5MoDTDKRNSB19pDCyshW5EQjiztSWH8u4Yy9aRU8VdmKiAxKQK6UYfyVrcMWD7Wj1TcWFXKJFEaM3FJX",
  "key27": "2PAXuUQRvUGaX24U5KieMPYp1nB3R6wvD8LEJ6c9fetMLSyvj2dLYKbCqZn1edtSKsQVFFPdqGk58ytB4zFYpktZ",
  "key28": "8bGvgX3aRhvrFxEjdFWQFBBDeCkdcHs1K6rcYdAo8V16XMNcmJqTPFsHgngykHmQXseoc5EBsLbmhcMyE6W3dei",
  "key29": "4jnX9UtUw6JQh43zYwLmkfv8PJbkk7f1vEAtGiFtkGx5zSsnf5GzGV3p1VEKuGH1ZNfZayn2dYjapTsSgECt1xDj",
  "key30": "3TKQW5YDVZfUDg53r8enVhJNq4Wpd1qhzsUBS1kuq1ePUc5zLDQWXw8E7LT4ooWawi4iRW8VUCqW52NS1SkRztjS",
  "key31": "63SvMNay9PEBRz42AVwADU5UinSRe3dYbCPCZKAvSpDoYYPppmgr4ByP7cJXT89W5obkFkGF38WugWkmXZo3oqZu",
  "key32": "5zbZ3fM7KXLpcE6LcrFAuig5URtzVH2qxyzCemb7KknRVMnkWmSj7D1CN25vDvCjDFJXUb6PANDRMgRNR2NTLnAX",
  "key33": "3j9rEprpWiog8qLd6LbwoPkNny3AEdxPx3iXCB4CaRDJrvdVFEbBXN8Y3aWbWKRLdPGPbjVJfkFXPodocptZict6",
  "key34": "2gtRQp4MGbxPobsfjgENtcQgxwmDRumbJ9iuvj3QiGGSHSneAozse9cocDbcdcodrfffcRt7NuWmoBKxDAyAFFMb",
  "key35": "41ZxjBvcRPRPv4aU2qtDjQMegQ2vYFF4bFDJWFT3oSokTbnXAY2dTyXtTkpQRJ3km1aM36uh11UPSbP4wpeaZaEs",
  "key36": "wE5JQXJ3guAJ1C1ve1heGV7NcUyaKfhxt49JaqmX5VQTrx3yApcqzaNZ755UeML1PZdz5ZaruCxbzxoQJQ8Aqxt",
  "key37": "4kiNQrK13yZtZyFbmmsBxV5yJ36dNqg1dAr9cz6kSPi9ygzWodGU4piDU1cbuC3E7vB55ayfa5Ujpu6uSySs4her",
  "key38": "5wdWWKxdt3SwZpKYDyWb4XbQ4FZVBfUvHFkHnuSpBFLDHBFuNB9QQL3ZDyxo7Y6MmDtjwyLh434MW6vq1NChtDsp"
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
