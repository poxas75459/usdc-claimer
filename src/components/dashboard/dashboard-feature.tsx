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
    "4bv3onDw5jUS8E9LPLp7MyrwZFK63LyGkgce3pQwx5WL1kwYMojTL76nxEVd4JffGdheDkSSWVaSrAawQvegcEDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tVYchFqNGZxFQHJNtnS21xxpFbUXA2cptbnbxnSndcqanU8z7NysDjZTiJ1tuLwWi5jSZHKNVLa5mLDgeAgTPc3",
  "key1": "3PC2DSrT6CcQhaXYUm6bFFFibwXn8hTsv6Sn3AeaGFMeiCerpkp6NPBy4mkEGS3rQXJ9Am1kwPKdvhmq5XdMDQDs",
  "key2": "4pxAjVwCwemr7fpmpy8PeQ8vaPbng5i9UxwZdKBGsxE1dixHw7As36P1zAs2V5UbqvS8F824ruyeBnooLUJa8KQn",
  "key3": "3A9DMPWrhDzdduRMCw6qeZHoCUKvmm5ZQ24xDR7A4jg4xMn8xaMwtJNv2nLfiFs2qj1TVXKT5HUhrYgmwHb2ex5V",
  "key4": "jPwZzRbM8Y9pPGiKqksNm8Vo9WWzzTqM9eeQWAZBme44abJu6ZsALHL3Nwm2jScgjLygMDqKeZbgujorrBWADS1",
  "key5": "gAXyA6r1XdBSJT74QdUzu2c8vJ1KS9fUnWBqFezaK18g1hgKkwd8ygqEz4tevxQfsii7mXTrfGmAswwgpGk6WXQ",
  "key6": "2nbEEVJGpjdKqFrDrCRECwcbTVcY3ytxNXTKhkxbSWGHrcT1Ghvo4YBJmRrA1hKsL13269S57w8yuJgESyfZNDJG",
  "key7": "4F56htezc98azA1vaY9nnM8ezzNHuUFpHnBv36Y7g3AkpWPtB6pjPkbMFbLnSRdkq71BW2CeAB1gXxrPLLWfnqj8",
  "key8": "qcpr5GK1EdJekzFVmJPNLTSvetceuRNYHCzvVFXmDs9cpYcn9uCYBYNSUnRuB8BVZnWjJTuKgvGDTxYsy6rGqgs",
  "key9": "222mPfxwugZo3VbxByPSB8KYkRqoxjzYYaFbpydNT6e9cubf8tehikL31KTFDkUxSaUgJwS2szFQ8VGcH3gqA8FN",
  "key10": "5ZwTpu8YnuqmkoVBG32w4Wcw9iGt65zEzjEqzRjcUhjiYxmjE1eCfVVQSnWsRXkQTDkCqpqKQdABpf95dfZnDwaP",
  "key11": "4StyEn7CGAFws2CnVyQViC6VUqYyDPmJvdsouwy7q679m6wVFPjvCZweCVFWm3AmhY9cnNqyuRrPt8Hqe7hxT2iS",
  "key12": "4R9EW8m2qnpUqRUxyzisUPYomNLGqhaBc8aEuhzPxEjVCCo7vi6xvgqspv41yekLzetTdBawLsBtCZqJY5DgcXYT",
  "key13": "2EABFD656Qu5HtFD93DCEQc3bMj4tLya2cShc2KwMj9Ke3WCH1auJrR9hVWbodP6uKdWaGiwogTfUVuoAz77eaNJ",
  "key14": "2Uo58jbnY12qXL5up1qeK3G7eiHJMgQd35aYYs6p2AZKy4kh91SXYca2bRuMuvgMajWe8jPPHGU2mopjHyh8NKgA",
  "key15": "5BgCZojwbTGeqcmeaAMfJyyJqFU5sWsGJ5zAt7dDqC9funeEcJNYzTtGEfJuJYTAxYf8TTHBoxEGiAXruC7pY69u",
  "key16": "3pYzEZcM5FyYypUtYf1MEtc46dsaRNKNjpeq7FGUK8EVkTZ5ZQU3X4tbGJEbfqfbLkezETD6gD1WXpPXUm8cPCKC",
  "key17": "3FPahNqZk31UxxQGxmbdAxkD5STK7YwYniqsk1oMXkwZ5v6umciTjCoMrv5pGqn7jfiqyKwSugsf3uKqmFuK9fKK",
  "key18": "2kYUYLTf7qJB4R6PdY9KGRRtwqC8sWVa1AdwcB3gp9u4sPrqdd92X3tEqYjAT5DTRw8SmeWPghrWPQta6t4Pzo7y",
  "key19": "4ju41XEdyM3KJussSyW2EMBw54xxejh4QGQJk92Q9TGBSHnvj4AQt83cT7Ynm1JXe2MpUxC2KWgGpGX2CUFUN96N",
  "key20": "2vtW2F2jBU2wWmuHPg81bc85S86KsM2qKcoEH2iFkbSKPU3VR4BtSWrNuwZDBYwhkQNNBGG9hoZQ1GRXy4bgmMsj",
  "key21": "hBeYjSheRhUfJs656wajcMNGPpnSEBD9boZspxyoVS9iDee9ZJQ6YY3tYZxL7EwgwaPpEznLsbCEeLweMjnP2B3",
  "key22": "23tYVrQdcjZQkuobs8oCGwXg9r5wZu2NS18DFUb41UQWoU3DBEKi3zBNi5GhFo6NxYKTqTmXyY2NNxL3QKhYHmVU",
  "key23": "5bjRAxVoaZEPkkhfkGFAEiJaP6y5bi4omGSP25mZqUKXHKD1qvFdc73BTw7Tfgtx2ZFNBoY8dcjaLuf1JoTc2eLp",
  "key24": "3fhRxX6C4FtJaC4dVCPWHv3sAd4bJEeMZLHGUf4TVXBRN1QCo48k4uYEQvhtxtzStcQpAoji1eH155uxVqsZmDJF",
  "key25": "2zsZB7ZPvpGwW7wPZbTsZTALEVFrLJizH3uV7Fu9293DywYQFVmiiL48DQArnjxfzpjWkauF4kwVhEAWgN2fXbpd",
  "key26": "31Gh67tvqZ17BSiSfTK1GfVw5hiXAee6UFLwCfBnpjHpsv2wBxVjasB5R1TLhigajspVhYhb3eGYBfKsKV1Dc2Er",
  "key27": "3wmwjmyWydqeSt6CKir85UZfxJa3J3tBLJ6bNcTi8S37cvHYstc9CBcn6exMQvFzSE726sL8eGYcJ5UCEgwiTg9h",
  "key28": "V6udPBduQWCQGndjETvJF3DXSeieVwWgtJ8oWEef13HL3WZ2NUJPvW8y7bDnGPNQZdMAas41HoawMXQ3DTatK7A",
  "key29": "GvyGUAQQQhhnNQtDj13kxDLknzQTiZ7ryRvVjgu3K8GcY4BfgUMPEGDmbux8gYmo5mru4ns4sVb8ZaUbPBqq2WP",
  "key30": "aEHEdKNpvjvesEJYju2V3VcNQMyPBUf7KysPt5knJumF4mZKMFMJvXqSgwHfE9cfgL2fZ5132eGKYvCWkEin4Bi",
  "key31": "5m1NnhhY2hsyJRVV2fu29QVrf3MpQmoqU8yKzRBw9mqwh7TM7V3bus2iNSnizLwAVyrTUjn5F3W1TTctoZDYo4Bv",
  "key32": "4PJ7tTR39ov4HETn5ggKmyoYiSH6NsA1p78zNWknj6EfDdtjD65oXgAWEZjLjZNWpqZuj569V7UuWxntLgLJyUJ8",
  "key33": "3h12WbAM58DJjsUxo82RjqotkQEqiT3RUDioUQsXCR78Hhzy7SMAFETrNk9kHXqWkK1GjapQxodwg79EYAQD9r48",
  "key34": "bMYpFRrZAy7kfGe7tkQzs6rFKbeYe7j9DJMU36T44MHdvQyyNsW4GpfZjzAHeT7ap6zbUeVZWvVWA4mbd7cg7qu",
  "key35": "2rYcJ8yk5238Umzd7oYabrNR2pBSp9pVZoa3JHhci9oHJfUtuZEKaqHcNyVqQaRachstc9qFmY3NG4SLaTrh6qL2",
  "key36": "2yAumywVtg78zXPRULgGer4qc2AEswPiyqfi6CaU9t1HqWcUTyxsJwWZ5QSPVZ1CXx9n7xFdWcCkJ6CewtULj9hm",
  "key37": "3oBmF5zDazFTLpusrJLaWdtndxfxmnze6VhS6vatrmMuYd8xL72x1BAPZz6SXGFSyZnyDAnJ2bjsQChb8Gdag79V",
  "key38": "4hEaa8kKiBQQdR1bzuXuq5G6UCFbWYcuaaQokRuizP3jwYV3o4n9a6mWpp3CqWxMTEPkYJvvUHJ3sFeA3pjJvds7",
  "key39": "2cPS87t7JT7UM3EQJqMug6q2JGTPiZXCTTeQnHqSAmHAV9no6nPzyTztbfCuHm6FXZibzFEwTsfT5wmXLkhAaXTz",
  "key40": "5BxtqssaRaeYTnC1LoQTrctC2FHs7ikWZ3Djd9WSfWhMQ92shuK8TZeptaYgymuHQmEMbWSzQeAtsC83ymYGt7qJ",
  "key41": "4DGFmNRSc2BD1k2CLWNwwhFWEuPnirqZxtzBzqXgMJvEa4FQqPQ1Rry6YQ5P8Pv8zsp14nJ7FxDWdzQ6AAo3HgvN",
  "key42": "Uf4vcQVF3jU5pYirCk7rRRMmkiLDTSUahPein5RkVX5NBW7iwiL3DdkUXfjuJT9AsTbguyr1ynem7ecySBJe4FA",
  "key43": "5LMMjTPUQWRrLLrNknZkCH5v7ope1HZqSPvEQTVfKF2xUd4o6HsXw6pMXWpUg87ZW4cTsGjWdaRfEAQ554e76fog"
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
