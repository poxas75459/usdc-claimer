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
    "5KRMCac4n2ndtc3rjfm6jbjrgYNcfDL1Bz1RZh3Ky2M4kLGJ15DjEqu3BRAV1nk6geCTRRsTajWsKHubZubrKhwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqW1RqA7QZSjvw48smsz8kKgb11NTpwHPaJ3P8zV8noJLErQp9E9M5cB7mtX1SzKfmEaYKCTNTqEEnsQEFGaRK9",
  "key1": "55PgkUyVLJv73MGcmdX2Po68b7yt2rbGnM4f3DT2BFDwQQ6HMhPqcMV5P21hY21pUbdv9AKUZMmVArUhP52XnmfK",
  "key2": "TwfDZfupySLiueqo1Gw3aQ6MaN1yzmLiqXtE4TnLqKCaKVtnpXfgB2HV9YPBenQ3kkgY6HyZyJNDgZTmRqHagdm",
  "key3": "4XqGL6BCVvP1nopFG8uDpPt4sBEvn7aB25PBrpyBpPQwaDSYa4xR1wSdHVBk6gqaKdGcJwuoQtGixFgoa8HLEKN4",
  "key4": "nxfqjUMPoQ3w3DhSBXxM2s3U4BRCe764jMTJW7j1P2LLNdGcgWW6soTrmfQW45rsbucrC2LtGifxsHHJhvPZvL5",
  "key5": "5ty4LLiJhFHn1Vynfg4C3B22Z5dHKcZ1C2mQDd3eekm23W1J6upX1VW67RiX8VZG2NpAQQsMuq2MzwFkMo2gfoEm",
  "key6": "41KL1uwsSTFPdqyXGzRD1DnRNYjWLpUaVhVgZJub7YJQBqDEfEyBHt5y6NRjYNL8ZNtLZ6ZGVfq2z2ksAqoNDjTH",
  "key7": "5gHCmW2xnAswi8cbUZWgcCVWdeStuwHpP34hwho7UwNEzNm6UHQiv8Xr7f4g4UJ3A65GUZmbd9DxGdvFEup5VF9b",
  "key8": "CNBW6FVyn7vmNZBbBenYWELXfTcpkau5MKKSWpfzuvWYYGug4fwdntjiaRofE7Pbw6JyL3Bx3gwxPRf4imaiyxE",
  "key9": "57GBwvgVnHVtCG3ExeXFoXCGV7KUrF6uAYyaK384KjitTshWqYkbaVJMG2omiBpkrkwVdfP5mnarMYorsjVfTbBy",
  "key10": "4LH8faPgAPB5ZevjVcCNwYENyCey4prQNBtkQFSpsBDFX5Kn58oyhVGjSeRZBJ5PGaoAoZqX6qXKN1YfEg7cbfbL",
  "key11": "4me6Ys52HjAL8rSJ3LNZDVMCBf5etvvdAeNuNSemKzcaV3m1LVjYMZiRYgM3WLwBYpc8fEDkysPDFEDE6pmpW8tN",
  "key12": "3ZXX7YC56uweW6nniapGv4Zj4GBa4WXF1z9ikN8gjWbsAiL7dgKRZNAv53TKAYpPfdC3RxH9Nfpefr2nsVjqspK9",
  "key13": "4SqfWXPrw5LycQL7y51jRzgmL1GY3RxVk5xiELmn8UFmGhgoE7LzBJW4L2LSyGrQ3zzckdPqHg4vn2gSQzGK6hsu",
  "key14": "2Gj3fpEFbTjUDyk1iP8wcnkFUs55d54iCYhPQUNUu7wfrMtKLU57H4wR72kp9StvpfWnu8CK9JRp6KqtWvQzHaNu",
  "key15": "2GU8wYhrq98JjM9LJGuEnpwSUTfqGAgE8hqq6PnM3esCLPxdqDv4DPXz5FzzJ6tVakZgPiuG1UcFft5xtYBLWCJN",
  "key16": "41QZ6WJ4Vomwi9Gwvu63hnBHq91EkpCvPyNNhE9F75yJNUdeePE3o59t3z9raMCbbb6SWEZXwC5J5VgXgQNuT6L5",
  "key17": "4aU54vg1w7E8n3nfYMZvbUhzvZ5vxB87epd5v3iUpEHTe7sH1vJKGCsdoBiZwsRqL5S68vaTjW2MfZsNx37zNrzW",
  "key18": "5NyMQnWYGGyrahTZxz9aUY2GucDrbT5N1hWETEYumnB8wa6Gfu4HX6e5edHQP3UPFCrs2Jo1wqGgTrE3VqMHRnit",
  "key19": "52Eh8nB9KLtPUkaigFViounHZGxPDnbVoPHiNK48fPukGCxrWdT5xmkSb3cXatyeMuMq6JTp2TyaaRoCgXZwY9DA",
  "key20": "4wwWXyn62sHpSqQY2M7TgEhbhLdk3o2b8Cfjop4nskoogC4bLgXQwtUC6NLFSmtfAMS9WXYXridm7voxHDv5E9bH",
  "key21": "29CWLjcSvjtkAteEJimPnGxWuSJw9SJ6UTunkfJWai3TPzNjgMAE4xNZsYXz5bEEGVoWw6LENDkSDFFz9wN2jjwk",
  "key22": "5RroC7RT91CEbTyF5aHtJWkdabGFqETZpoX69PBYvexhXTjuGcJUjKFDbd5PrCpqHLi8ta1sJmFpctWzqpfwJXhY",
  "key23": "GcnQkNoDx6zA2vvVC1gxSYqLKPKJEvSshPMvRLLvq3Xm52BLa5hTzx39utq4jkSKHDAiPRustaEUFQV5ZUHPbAa",
  "key24": "38rfpSeFfNYz5EBtGDBWC4DP2o7cz9xF7RhV67DMLeBLtJCHKcegiMW5dUKoiQX6DGCnUCaVUko5ngUeZvRnGKaS",
  "key25": "57QvxQYk3sbJTLP1BU7kvYRTyvuge2R8Wr5dsKm7NPD6XfFUWuMytEZ5qPU193ERAg5utx8aLEe8qcSyUZYfLi1N",
  "key26": "hk9VthJJVvxCnfPczqKERQYGBjb1LjFuWD2C4yeHPtcJJHy9fU8iwNXVK8coUCcqNt2eRsbecDPjgTs9AmHNpq6",
  "key27": "3FceanR8bhCuuLKiW3sb8z5ArRMGcgwMoADhfxGFmWHojhNJekhBQiHuTo9cY1LauTeKqWiVKeLYyScuPxEfhw6V",
  "key28": "5PDfm2udkgf37K679Vh3wPYV63HGRhJHMb5aPqugYcyiSC7joo4AgYXhwPXaryueGfvpAoY5b7L79szSFVGf9mVo",
  "key29": "5Jqptmr1EgVAppDaRwBnRRp5z6W9jLHTRG3zbR9gRp76hpVGf5JjYyDh7ZDnpLro5e9B4yisETpj7tP3878NAuuS",
  "key30": "58a6db4a44b268pQyB5w6FRXPsGS2SNUefyrEj94immSwdZBKna4MuCWX1PMxhNm2TyRY41cLJxu9MLioLfQRwRK",
  "key31": "4A8xQFKNTbsvitN9Qdj11X4mGebgidcK7WqA8v83qZBbS1Xp5Hr8kAzE1cDm2soTcDQkstunjxB3V2ajiwzqiZnj",
  "key32": "4i2aeoQYToJRBoyAkLAdcLXKUbxnYV4vDQycCC7RHz11rfAYkNAwnfd6CK7oddWMqwH7zZevMmiNL12v214ewynr",
  "key33": "2wsKsSKuV5PU49ZWhzmhDKfN1BXmKwYa692JtKU82TJc2KSHDzHU8KQXevpvFWXuGVry2fQPTVkNZ4eCCTewNncX",
  "key34": "edbsQXojyCruHG7VhruNzv3GpBNZ5oRQCEkNacBgBui1AGtyZDZqkYyEzfM6yh5qcyeb4KnvKdf4TENx7bLk2ze",
  "key35": "5KvZ672eMTXLM1SGbrvvho3KEwA3T4gbTpec91BRUjaJYtvRNVrHmTKarhEsd2F7MMxgW5uanETHf7aWeriBYy2R",
  "key36": "4GLtU5gpcNaEbDDXPTFR7jSaZd88UXuNBhVK7tMmTP2CSfwhKshdugEP5iNhaVafRTzoRfNPcg9m7fe2rxrb2tBu",
  "key37": "4U5BbGidGtAL7i7Lj4L9Ed2rJnopbzF16ztMdk8auBSoo2K2s51HyHAJn6UbQHRgim6ZLeLvU4Vm53HvfieHB2uY",
  "key38": "3HRrGRpwV2jrf5tBUbe5fhxbkvhyJJBbYWesSXz19JeRszvvpabtE8GpBRW8fmGczsAcReUzBdVHmt5HN114nhd7",
  "key39": "47J1G2qkzQgAojcM48d91UUGWT1XQeA27q6o8Hf24vSyi9paYbVZAxt8oXx5TTukJgDj4WCmjS31DLBLahuzeys6",
  "key40": "mQQjtYp166VgEqDZ9M8sU3iLxUTmaEs9EPNX3Pq6wGkZVQYU8Z1ByxWSxxttj62gsW1Py87K1fmc7fuQde7qGeu",
  "key41": "cUNdJUu15GhhEa5cv9AWESS13XGbG3xTeBkyxtgoT2guwwiB5UjysWvKcYixf2rCLkAYpH9Zi2snU4UtgnqeFMT",
  "key42": "5bL3DYPnxcU45nZrSJzTskcXZ8hozYfNfgu2VXwc3c6XqxbAcRbRer75huDaSQNmMJpRaDEEAZvecfopQ1zGzeps",
  "key43": "5exd13ZYBqyth4iTEUq3rCdx2sehhPgakc5eWbMhVnQYuhps7adMSr7oPAHeZ23GrnX2VHThfxeLVhnQpmE6aj9g",
  "key44": "aXSi782WgNNTjYTKeG6SBiZ42HfyZtJT9vDXtjTyRsfW3aQicegfxdCg4sR2dUybFpACtiz1nZYy9im5uNPXG9H",
  "key45": "2fUac432PmJswiSqjNQYLjsVHoLKMxrcKghoKAGucxo3Y6yMvz7zREZ2Cp6LP6hVermfdhSnfrKmyKShQ7AVVeQv",
  "key46": "3SSMxVHc2MmKn1qJTu67qu9WS98HABpEsy7769kLSSVcqQPgD2LjmRY4Ed6GKKKrq545x2wWChh3fSgK4AtvU6qF",
  "key47": "VnrBwpTP1peDBUjs4F6syzc8jNeh1rTWskUakDFRp2zXhyhBoeLRxHjotRGMCwzH4qgA1JrcomDQbUVroRK7YHX",
  "key48": "BPKhjhk4E4Ep7nedgL7tYbBmWDu1kufbQF4LkBwHiwuxhYyeZxdZtnksaMcdx7ZVbtC25t1Ri2Xt9v7eWUn4ifC",
  "key49": "2Yc5Xo6Zb4njs7NAcWLwp9KE1ECWuu3HhE4dG7U6a1TbgJhgnTBhxesCaiAzYBUTy3YZ982GsPg6Sp1DhdLnCnV5"
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
