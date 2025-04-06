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
    "63WqzYCGn8wRhxvtXrW3qkeDCqgEFnnjRGf9cCT5srNgUaTrMEUV29Gn3NHnjUKyhvREDr2YhuJ6BfFuuwhdQNvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oN3BefMixivWLYRJVwHTC9TkEepEgzeoaXuPn7e8brF5h7fr2yTqbxBv2uzkAazK9SWFGABooZyLm3GWvQckfvP",
  "key1": "21TwmGRJCqRFpcnpWFFWpoUEzZcN6fGvizwtH2JAdN5P7B5qEHvysq5AFWdXD667qajMieZbFejNAqvZd9oo7ZyN",
  "key2": "4eujpcfY7cSerqsRPhzBhPUK4VsC3a3CCLkXTrr3DdK7iXiRxCNZMrp4k8GTgy52dENoDbqkmTiE2HW6WX9J1NqR",
  "key3": "3Q52gLuvTgGMdvL1ENChFeGTx6VyNh5qQyVtmHBFVTFpUFGv61tYe3qrF3qU8SFFEpkAYxYZo6az7ttEVDF62Thp",
  "key4": "5aLNkn1tLJbRBiawrX1BfciWdH68yCxsajEBFyrSwrsE4JLZBQFsxcPoA5cYzkewhXC9b6Fc6ouTFtZF7QPcyvCw",
  "key5": "KzfkMw8cCHoXcdKCkVBgKnEpmTHzB1fZAiVMKbiD5b6FoPaqPPzfkYtSnsGecbkMtsHhbqvnCbyekgDwVqSE6c4",
  "key6": "5dvqZ9SazXSeYWcJS28v7LvkXDSSzMFCoiwkXVAp6rrCGaNqGk6dbX8fu4YyV5hnoANTy3qg8r8B5NMuZ77cePxu",
  "key7": "59K3tmW7JLE5fQxjJCq8AT4MM9MDxiXQQxcmBmbN1PF37rf1b9Tn5d1Lp7k22VsV935Ys58a5MSurN8EfQVQM8qS",
  "key8": "MzEKBQZTEqNAU49u3TMqFsVdxWDvz5iiao58xZmGuEm6hsszKY7bBf1hrjxbaX3pG4VSWNEsVi29oWRT3FUBMNt",
  "key9": "2VXnJwGsRXmHwDt2iRbkmAm29QDzPhWtrpkdZTgS9aNXxbESjLhmKG2GQ7QPfNWfNbpDtbQoBegV7n7vUmTfZfSc",
  "key10": "4LmViZygY6b5Ce3uiD3gdVgBEgMb4QCNbXW3J6dhw5t6Dgerreet54yHe4rHd9MdVUYWTCk54m5fSuovc4uRWUwT",
  "key11": "4dhQZT6aGVKTEGU4KXUpwQzkhAay26A1oaiAmXH6UzprUvQdRkqzeTnCeQMfonRQ2f5TKBuqyCzmzyPwbxHiqAwn",
  "key12": "5qBmf7vF152zWeWmCgVaqmyPrZ918GFc8ofux2UsHR9AftvCUpCPTB2yjdAhXezpTKvT2Kbt2DxhtWuhRpFGSMkD",
  "key13": "2rtLyfPycnEbiLsfnhCVMgrKkRsHCyQrrUGsEVXZ2CMyc6ByZ5d3LEPEbKaZpFSXFEHhqWcuiQHwnKWoKPzcs1K6",
  "key14": "2xmkyBvWQxCZcim51VwxBuBDuGpNtpkLXnY8VgDDMuLLv4gsbnxVeN4z4yhpJ1m8DfxYQmaDuw6V7SjBcwXcSXBr",
  "key15": "5v3Tm6kWvcdnFod37gXNxAmXo8EiXPXK1vY4Y9uC5khgDg35v3mxXSbYPd4ZtBiqpuvoK43ezAffx5izaTzN2TXi",
  "key16": "2wmDDv7177BZBwmmB4SPPPjqgeNRcby7DkANYBy4L7F3pswkJ5NTcWYE27y2EhXbt3JB6hqgycWN2Lbgc2sVYBay",
  "key17": "r5mb3GyJWqcQnF5VMF6CeZAH97NGiGeiRN4iE27rfGUFuPkPuBqQLNaFKE9W2vmR769vEZtj6wRLmxD9nCxug3W",
  "key18": "tBGc1Ghtq21zn3YGPaXBMtHeuxp3C5ukMzv6MbgEjMrS2ddxV4EFrb5ZoZvDnUJwU2sndA71JvB9P6egwZtC1w8",
  "key19": "5o1WrH3WLd2uKzZ1UhFehGFQQ4Yiq1S3moi2k8yPJ1vBy7nfL7xWLpzSbpoWjEifqrCH1uxQYx9DV3NSWLv8JuTr",
  "key20": "3hJeG8K21f9eHcr8hQrrD7v2MALHzP2cVdSV4dujQoj2hfmhhiNUUWuFSfjTR1CWn5mUDspcQMAUKEZLCg5PbPEV",
  "key21": "4EkimNnr8xgZusVHQh3e8KCUGvjTAAF9ZZSCetVWARsGh2BpWRXyFeEJegh12cN3g1PQYTwEHHtKxS2G7Qr9mp1E",
  "key22": "3Zt5Ge3PcukAy1tijvTpiohVi4DyB4hQoeWNvjZwHkEQWeS5XJuTxnmWd61ojzDs8AdtPZrr9NnZHspjApMhAMzJ",
  "key23": "4gLtCyttoXvNWMqUo2SuriJ8hw7wCR6j922fKRkS1GvvN3xAfJ99Yngx9bCjxzSQkBc31RF6BhgVh2a2FABYjJNr",
  "key24": "5wZCYX6SQuA9xEmabTh8sy5tRZJyRR17sepE5ttTrE1xVcMQDcrUtBspK4DUgPueyah5oRiDd8UXEkgWtw1i9r4k",
  "key25": "2A4EiFCEFaHH2HtoU4fypusWA7CdjPviuGyF36zRmykxdPVzoE2Ft4rvtS1GN1N3Uc7QbCG5Lhv1kAsyXJ5qLgRw",
  "key26": "2vrsD33DBvELzHEyqNxiqo3ZXPo6fsdTMLpKnc6M6g6gciTGz3Fjb2G7ZFzSw4WBcPrRDJ4fzhbwdrrrUMiqQPPS",
  "key27": "n4PfQobLDQyfaEsTjfr9TWa6YWBqfFbM3oqE9jSXBPbmQFNLS3JYCFBame2hSsUdSEaBVhQALNaJSyFGhBER8BS",
  "key28": "3Zh3owwPNfyFkYPxrq1mUmWGfPC5AGBeudViLM7xZLRi5Gvieye8BMYJVsgx2BrQXV7o8jovypz5yVt88Wt57jsq",
  "key29": "31eszjYNmRjUYxYJfdKAdqu2yC6WNQWpsKMED992TW8BLMfnr52FqB8sTSNWJLKwEWMMKb8iZhzCXB8JKxfBiUtP",
  "key30": "3pYE3WN7N4fcaz9zBd85BRA6varukWfLpBVVqsVW7z7PfPSttR8Xf3Uc6qQV3wfhYXdPeYS5kr5C93FWj8xKyLX4",
  "key31": "zhqkpMpw4yYwPGzWTTmpTQCpCkEUJcDsh3Q4kTZYUf9cf9H35YgW8PYUJ6AT3a1U3KPwahE2DWNnbuFdgXr1ZDJ",
  "key32": "4rB2zFqWohU7Ed4dcbd7NDgEYeT7RYigoa5xfqREdsRpuhXo2zzcmEdBXEYHqhv5559Tn4hSsDJUShC9aoPZNXp6",
  "key33": "3hLoFrexLtPJfUxfjKczE89Xtzrb3xuExVK5PtfeWuuK8hFGUr5y231u2i2TvZYiG2J2sW7XTLTRX5e32xvnG3em",
  "key34": "5JRwk3YSXv5ugFXjYhzRmVXUwr7bADSsiTdXGGiX73v6qkqXbkiWGvP3STdo3tPT1QdzmcgNjrgDW17YjuKfCfam",
  "key35": "2CShm6yZy56y3qy6VzV4gbQFgdLbRVsf7oXNWt1ZZawNCUkxjsdDyX3ppW8WikLZB6ZMt626x4NTts75pnNJEw4B",
  "key36": "LMh8ZHC6Cc2BnUYeStNpTpju9x1wbkdBTFdBFNySp4xHm9P41FWZVQw3Z7QNVwiTomZBXDCNMrF78SoEuE4PG1D",
  "key37": "58inVpSBaz6eGQvR2C2j2CvZDyL5xXE2pitiqyjEtSDrqEfGUpuzbD2Crg4BsRMErMj4deFNK6buQPSai84UF6Nu",
  "key38": "TnmG7WxPddmtepZiSKAfec5Dvv5bqKFYiGcJpq4FrjWkeezbqg3X8LNfHWP7V3KumhLJKTiuMBXtXeMDTRhDYy4",
  "key39": "4DqgDcrV9sdZcaSmcKopjZJ74BbSUB4zUBKYXSokimXYWfcrMDSERAXQYe3FqEB6972941Pzctw3axuc1PSTcfLK",
  "key40": "Hk4tri261J95NYcYsMzEv6w42cuKqgeSayqhECGqKxnTADYbCL2VSpRDeKGtoGyPPku1Hzigs5dnrg98W2AQhAX",
  "key41": "3h5m1eRk6XfgtxwZqrpXVKTaCTGAzdWSaDRAvt6ewys5LC7ZuX21Xw24tPyoaafPSMQa7qWQJML3eXktpgBeQbiK",
  "key42": "EsHg6kGtrSrpSDE62Ej6k6bDdYpzWPYuqhNLdnyZtgBSZ24dHxtNNDJjGwrSW9fjcGXxoEL2npE9HfaUTzF1BGP",
  "key43": "41zVQA1uJ8WasfiD28P1FZypTnGTVpoTdXEpr6aMkwVvPcMb9SXEDjxjhtRh1ye6aHNWJ62b9LG9fRgPDJRqRPBV",
  "key44": "2g4oFcydKnGsXbVQmj4U5FxS4zJbjnWrtmzkSnb1Jhwxv27Dsix9p32iNasn6cr5B9QpPTp8Nsqk3W2YTEHj75cY",
  "key45": "8KxopfNBix6USrXig2xYEcLP9GRP6v527SfDRajRHVSSaM5MWX8EVpWJUAJwAMkRjLsTg3FkCHLSi3sN9YYmXii",
  "key46": "4wPnn8eUWq7B7U1q4zSf6tnDAFk2ZnVmbcENJsoEbQdATfX3TucRBgf87xAgWEmfgYMQxcwBC3QLJ1ro1Kr9z15e",
  "key47": "dkbT2s2whuDXCEjUdFgcVHmyiJoUpEUg4vk9NoVVVNvsvUBTSdSuoyVuuF2cbv3HExhws64WhLAw8WxE1HxGLyr",
  "key48": "CSse5EUEipiAktYwEZmSY3JS1JFnUVTwcq5biZ4Kz9oo5MFD4dMAEDVYMkazoQAJTZcPT2cnfwWb9UGwLnFHDvt",
  "key49": "ZnM79QB5ZJv6V5PMD4PbMRD3gDRCaybzEfPMo4poNpmcYenBQqP46EyZf6hy1KoCiHAy8GBQSzVNZnK4SUShtZY"
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
