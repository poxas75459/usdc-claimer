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
    "2azqEn6yuSzaoz35xmMcN386MoYnDSSnrx81NcDrdpbbRmzvGF5Y1kv4ivbUsWW2nQihVbPzcZt5zRhU34sx1VeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oytWbA8uj41JKqVTbVMYXPZND77RKMEaSz5HMvGtzkMWrPMTYLimNmb3k82Ayo6NStbNvAqzfiofxvYFLYLWLin",
  "key1": "2HWEevz5KPwirmzEH1vwPvdKWPGLzHMGKd1mcLNTqywMz6D5NPcBmVupDunFzah6gvPbWqDeQv9s6L1wKjdvUEJj",
  "key2": "5uSaw4SQAip8ZLqhusG9x23V9sw55GXy27GgguSwYeiDQzWAR2XR1QbFyQFXLmJQJxXcqxSQct4ruB2kRXfzotKv",
  "key3": "3QFSe5RPjbiqfcneqN1W4AmtzznCseda5PG3KHhqQ15R3Rm3Uc8BuhRDSufSgGMwEv1BxVbvQueF9GvQ1dFRy7Q2",
  "key4": "Yruuq7q2mKXF1fzBuNRZXQfuwzGjsoRTYmQVxaFKwHXRp1v2L9BxyhHqZBi2souXpTbNESahKuvejQKHmAX85Aw",
  "key5": "4fNnxMJKAnNWwhNH4cjeLWuteFLkpVbDF4HKwRJ6z641Z6xvGq118p6riW7pDo16s4HaEB9TBKmVsiR6aETag1cg",
  "key6": "5TfgDPjZpwwpdv9uAJpyGfyGKHgPkBRz83stpBRzdBhjfivo7HUVsBuwNNtBjiBo9DLmxnjhDKERzhzQPUVMELcU",
  "key7": "4Dqx87cvxaqEYmop4716NeqHUpnDi3QAhPtScmpxp4EZi2GPHhEWaCYTnUSQSTi78cW9AMyFHh4D1bC6Kg7LEKtf",
  "key8": "44RsZFMu592P7fXdg5NwMUeB1Lvtaj8kFoNvWkf5Xa1JjDxsiP7J7k3CSXQaQyrDYsTHQmW8X3xbg3mEUz4gYXRa",
  "key9": "5SmFGG9zkYP155QUcfzKvcb36ZiDtFogL5nqNv3oZpqdfWQ3FJtZseEmJQ3GiKx7WCDZCWUCpDHmk8uzjXn78rmf",
  "key10": "5wLgKBDaRDHNJxvTiGtXrkHpNKU1wwZKUvu8iHs5fMmN94Teae3euPaCrekyYVGA1AEcs7iLHsjH2DCAFXMJ5J5U",
  "key11": "3Wxwt3m4hcdbq9W4ZBR3u2AnyfeF4hMjukbKjs974duix9yyATBdKTpL1s3s7DUNGBzWDMPCGCYdMeQ2bepBCsQK",
  "key12": "47yXyiPAJb1vLwgy9PtTaHT4EqFL4aa97Xg6no4wKEv2t7p9LW9ZVskpMyjx5BXxXz7kr2cwJq3uMx2Br3meYyNa",
  "key13": "5BRLLDqRgH2Y4zXTzGgu3kowoQLLXWoN3gArggeVMoW2Qu75wNQrpJ8brTq2XQ1FwWLhmn77hhycBgG99v7izKTM",
  "key14": "3MeMr4KqoAxoX1zAcvmr5wXWUuNeXHDiEaYacynkBTxNStoxZr1SQdhVarYjZT5TC5HfDuhECPAUKpuJ15PSnwrY",
  "key15": "6157wNYBoEu7pvcondVPBLBPfJCt4mGguetV5dykQ4xj2F1rdUZ5j5gfakKbq1Wbq3XSyxpsKvsRKhqMWdi76j9J",
  "key16": "Z25K9Ep88C2Sa9CTfvuCWXY2BXGpXGTqetkVw8f7VNsgKHRkKv9CeSHKzg9b9ggTyd5LQZEfn795BsCp88vTYmv",
  "key17": "ehHxD44sRZGGg2Z9avcjE8d61ZaC4Hr5UGbXnRsg5HVUD2yUVyhFYfHSTDpWecwDapn8jg4Z1jSNh54jYn4fzZA",
  "key18": "5FS1bku7mdxnCcqvLEVmMUsEXEUUfgjbZcNVpUHjdZvGrcw6oRm3o7Ec6QMvRnF9bznKE2Ughyq5BMs8wxb5LM2H",
  "key19": "3pjg71EDgz4RgLJDRt6H5wFf92MwaYavNv4W6729rJbyW4amx5qkzJNKQUGghxdwKAhUgmhr945mz3zbd5dQVjuV",
  "key20": "5fLHjFnXqYsDsbxgyJh76Did2QsrTiPqZBBAkS53ht8aJJXxAtMF6jYHLfdbKDs2Ni7bf8csKkVNdFxe2rZpyYE2",
  "key21": "3tNRtjWQYR7h7wWDLFTVzzQx3faAwwcb7VMknTviRy4qH9giJYuCfp49D1xzK4Q6evu8NKQFvEyP5VGNAs69fopE",
  "key22": "5UYoCFynCoHBGhV8KiRmvs59MkEd9jDsAb9fNWF8NqcVJgMFTAyGPi4gH2dA3HFAX7v96TP4rE18b9vjoeK24VoH",
  "key23": "5nDzk3QS1TJFwTC6DNsVkjJyZSY37wMzTt9cd8v2avoiA7JPGjrUaGjDQT7AKVRj93ebiWUg4fJBptaWtu8eq8nY",
  "key24": "4mX2L261rDg4wwWfCCiL8y8XFqPfLBq7HjLK2FPjkiYNdASP3p8PdYoc8ZRGyf4fnymij939HAXzQsdgBbjhLZaR",
  "key25": "3egUbyCZhoNo1QaMQBHuFyX5GsvwoqfCXhw8jmQAMXKZg9hKf3Khq76EkdnWAsDVCCgK2671951bWrNtcqM8dMor",
  "key26": "2g4kYyyiEBqoUtSDrvMmm78yZXpUyLGH2dQAD6hsBiFtMJqpUc6dpR1PdhVo2GW4UddCRhoE3x5o3o6yD4MtgFYe",
  "key27": "f2hsV43xiUMmdRzKW8ZpLyno5GRMZwzQGDpNTNPT3ZvLjbNaCDZDJkq6qpN6KiSU57qJXTNTBDfvQ88hHjFFsQV",
  "key28": "2RPhdtyiRj2hcw81KvhPTFD4piukn63weFxV4TZjZuBbBnzcUD9VoVqZqaKDct2ZKpN4vNc7g5vV1DPzog82BF7C",
  "key29": "3eq8WNKQxzEWiE4xwWQ93sS53JGpgtSxnzGJxLabgpYmxttjo6AcrTZB5qg8tycMsQR8rEx1s2R8q7VTnj29NRWS",
  "key30": "4DVjErgfmtPeCay2SedwjRyufvwoPDEb29EofapKA9vrtt1gH4vxkrHzdYj8sBbeRYxK4JsHxawv2prfhKNndna9",
  "key31": "2yUJ1KTPLJPkdfPnMwSPvGcUPbJuNBKYJTMw9fxckADuXx3gpzvDdGKGsPtUgDK7HMLDC2ZpJE2nrf6wBgyKBQmq",
  "key32": "3tTvUfDQREo5y1mZeJ8o3tSazSvfWn4cjY2SRUvb7N1SAkhAhtEXhD3N5Zwxz45zfEXy5XcEnfgqxHqbLKkcUtM9",
  "key33": "2RApBRakaVx12RFaimHLhhr5rRM6wvaYhwKkrPo5xaoMs8sBwyvUefCD8RU1AKG1Sni34EqRSueabbAUVhpaYRtg",
  "key34": "223ViYDKFojWZnriuYEWDP9dkL8LJ8ici9GX2MuBPHUNhSiFBYJ2xj7hjqm4GLE11ENQjZVEEkquE9U8TaPbk4be",
  "key35": "LJfqymj2WwyZJ4nVLQ9LGFRwUAPX8ks2rjGwy9Wmrq1RumeUhxgcZ7KRnojEg6rBPcRDYhUqsSkM1WjiMAcVHr3",
  "key36": "S32355hbeWe2ZZtrCHvxHcWTkhTrdxFx3fKPxkwoEvVNGWRWfHUsmLdJXr7ZEGRcuLhTwByFQ1WmQ6avbsna9cn",
  "key37": "9kSL4eR7kuzkjdpDHVu7Kc6MXHWNSDWKLvSpNYP1ZkcN4thE9AAU9NieBH1ebMrPCDqHm2rMurdwQ37r6eTw2AA"
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
