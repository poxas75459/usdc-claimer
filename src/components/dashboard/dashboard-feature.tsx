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
    "5Wxhcx4TwUe9Xb8pdqA1d2jea5xNkTXoTz8kThc2RDg3nQCDviuxLDz4Z87KYYA29rgnpCBcCjTKc4myQxDznQ1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44E8WbxDhoNoCgjpz8mwtPdt6eBNE6t8hGTVUZ4vqRP9f4qr5W5ML3s7WmsBUxgcz3QefXhuuSaaoE6EdNs7bqZH",
  "key1": "D4LAJJksY9mxhoTscGDUzQPPbP4odnkv2beDhnrmEgBR1JryLjz4M8uUg6wDNgH1YddmoiXiHwHGQr5FFJy6vNW",
  "key2": "2LPZ1savYkpqDFhJJ6GiVoeEjfRk7byJ1i1dAptHwBuZywQZbtmcuwS12eo7CtAN6qgnGYJ9hgr1EDWtBA4fg7fM",
  "key3": "3TFpiFVRaH19yN6WzUVYZkqA2FQrcEkQATPwastCrBf8GvJyKBCG8oYPVDkdtgNa4gFHFunSz3ybNkPgYSmuBxjP",
  "key4": "2U6FxTYZXabiSvemWYQGHp66qfPLtVrLUNHwXamWQCN4nBMAaZgWNTE1smemvVmDJqPSEspCTeTs8LhzTcQX6CSA",
  "key5": "3E7MArP6jLGnVsRUwB3nx6JRs1GtLTpNU3N1RovcQxddnZ1FUwoLz6LjZrBBLRNdiERws2AKPyoWtqHNndrSSfX2",
  "key6": "LHzxhBWeZvg871vom75Mk4Nfdm9kVAn92yEDgHnZfwcRTCu1kgW8ZZbKPWRSLGdfM8cYM1AgX3jdZeY4Vz1sbJb",
  "key7": "5UGkE3HjUGgP4EdAPzgtRBpw55RmfhbDj5VKL5XDAfuoFWuAcKHk7np9Sc48VtWZw6yyFFv1CcpC7H6HXRUM2Kv",
  "key8": "4cVRh6z3ZSG1YcGuXoNdjgFhCcW46CBoz61aWJuPsDiid22XAQA9uEVrym982fRnC57SoHz51DDDDTD4rvq14yfG",
  "key9": "2HAP3fmYtsSq8HXqy5pQ8ys5GXhM83oUpi462Nbxhk89hNg23VsHx2RaF4BRwjjRJe6e8xGyrP9aVEyYeCUkpxhv",
  "key10": "434whUmY8zaY1apHBAERfkJM22evJVtbUA2cu7TruscSwEqDMPmvR1fhr2L4SxUtzRx9BnUet5wRGqSmQvEpGhYJ",
  "key11": "2Df8S9YHURaiKtR4d8wjNUrW2qLQ3PMXVxbeQcQdEH4LnD2u3fGLiHMmiaTXDnCGYyf2KUrRbKyMxCC6SC5QGcgT",
  "key12": "4w9SdvsdYNjeBPvJwYB65V9zan38agQnYpK7FGWXDAYSLAAAJbmvMjAJe8GexPnQ8BVnETxdVtobTe9r5xc7Nry2",
  "key13": "3vLYhxt8MujsE2qR2syfYCSPtqu3Ta4ozkwD6TpiVZY4h2vGH9WyBqn4nReAcz2LMFsxfzXkwHjsXDJdMUXHA2eR",
  "key14": "4eKfWZojP7vAEnhhaafxWe6UBk9v65NBUw4epeuHWn2dpNdPkJLf3hxYZPDjPg2zgPMhhBTi2BUyp1g3sAN3Eogh",
  "key15": "4fdHM7aCWHWiEUf5L3JMmSJovfgq83uBHjRS2NZ72LUMZC5hGk4dYsuS93rPTJH4ZZvzD6evXkFe16dNrTwrFfhm",
  "key16": "5gBqoGbtJUnBzDJj1uuDFzvTnsqB3HSSnjT2qvTF9xnhJmsuQnrcJ4HJ8NW8kogjBqYFFdHYSVFsXHGkExeRTWHN",
  "key17": "dfhWxd3Fj1iCLMyJc4GLndr5B3MDd76zxsaqFUuFbAj6SocH2Gq7pBkC21m3gN2y2FWrD4MqnPMEKm4WQGHG5SE",
  "key18": "3UbLAALw93ZYmoroLEKK5CoVB8K6uTPEpNth3FbpLTb3c8g7j4BezZp2wLtJhHZJLPKHaym9rojhw92vPZN24Q3W",
  "key19": "4FMwdhp2uVSxmTTfsyTNreLeSQTy7wLAuUcjFkBc69UzfSght3ojCbi9Z6Ai3eteqKe44Dm2mbiHkZXAGK5itYh1",
  "key20": "2ibFDfRiN4SAdiHYvXM7Mr6Tk3un9m7fqFwZWuLAgYuvgmRXmDtD4Rkj8HS8kzndTjfVc7CdjZCZnCDFB3tNnxfF",
  "key21": "4LQ8norAxtJaza5XEWucNozUmgsEucoKtocv1nYy4xiXavcahLuLr1dqMhTW5noDhhrjbLCG8zmkEBJueKr3m5hY",
  "key22": "357P1U5a9Fc8HJKaHW6aXP8kAGVoGeALSpKxYRXwYxYfMDBhcBDBcgUoGL5DkJZNNuu9LzDK4yf5K3GM8eCwQYBe",
  "key23": "3s2bdHde9nYYHLgQC2Q6Ce7oVb2Ui5XAPeKcTpaV4sQVLXjyiLBHJzTw34hgLEt8VWMioRFLmZvAo37dLidfNCPp",
  "key24": "4AojNCKgcUzoaLwo2q6Wab6BpVP2VuZ5L7uQiVfzqyoAsx6vLn5W3Ekh6dDT1P8fAkwbeFUVHe6qgh5eQv1hoFMg",
  "key25": "3brgNAQNFuM6iQgfHTym4c7Dktkncj4RVtcELWHaNZ5vmtN6BzftgxgpydWt8Y1aKeMehaBZfqEv97webN1k3ovb",
  "key26": "mQTj1b5d9fxdH1ns5Q7ueoDM5zvkU9TqB4CDPjQeiiF8SVkAH7QbK5txqcXtce8AjwGvzg5WrJUR3tCn36ZXfWb",
  "key27": "3Px6RGUS268e2xrAzvCMxLTGpkX6QsHZfmN83AzA9peN62GGiVVYy4Rt1mVPxYte3t4LF9UVqbYMrydvbMVcViv9",
  "key28": "Tv589wmvo886JMuJSXrmzP8ovfBnoPGbFbfPAaBLFaFaQd2UAyFLDG99FJpkcftyhhizzr1WEw1G8U7hJPNRriX",
  "key29": "7AQunGdiuxDEmn4CHf9ZU7MkAnipDFEyvzADqLkzzXo2DAcWmaTsDbxJ6kjM4oYf2KEwGAGGDVrdSana7jL1Yst",
  "key30": "4WcbqCe4hefF93G9Hs8g9zxUQp6KRnjpRJbNdW7TNM4iaYyx4yoihqBZzXZDjmKm9EAskq2fnXfv4xzL5aKC7ssb",
  "key31": "3P2C2TSjdaDoabw5VRkhzo7oUxgTfYPzKp5XbTdz5R3txJ98etY1YYS9JsGDvyEEX49j1dUMbm8FUKXmX7FTWXmm",
  "key32": "64xG1nw8XhyWeKTcQ9KFqDqX1WCrB5cjZzuTHRLNAVzZ2BZR7oRiEHD7Ajdy5EnzsFqceNYyRLNTEWPc6zKE94vB",
  "key33": "3TB6exY4zxuUrNTD7au2YzZYXfme4R4Yb81o6y8NFht6feErG4CcJYT6m5RfuJm5SsMdgxX9gWNr7Y14GjpgZgvh",
  "key34": "59UPyxgrVLoscyRwzykKMeptT1Mmam5NwAFXmJYBoBXD5XihTHMp6hBu9TuDEz1RDV8LyZ8XxUyDikuWDwnZXLZa"
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
