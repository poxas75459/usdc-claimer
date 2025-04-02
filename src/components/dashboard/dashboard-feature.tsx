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
    "2f8xqFUzsa36D2c37H6hkdL4tCitb6XqNdfNUPHPdA6VW1onmuHsDvMoEsNDJGQaMy2oCXBUSovyC4N37oKvMFf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZvMNdTsWBjc95JD81R6rk94tFPtZkWPKdRswYvYtL4MLGSUpvzJxRjXyXPVaeWh7rWuRnXuakSGwXtreghJHoH",
  "key1": "5Df6V38XRYCiZ4AYHPuSgzNeVEYoReo7mpmLvkAi41dBBNbeXa3L5piPYD3yV14DyGQMn6DGa82SN5KZBnpbNqp3",
  "key2": "9Ju1SQJMRQFki3iJtrrx5b9Expa4wamoc6HQGyA4cdBEYVUceDRrUpGu9R8Cx7F1ca3sXFyDfz1DfSUy6fKZuUs",
  "key3": "4UMSvzwN1QycLtCJJ3XKfVMR1gxvx7JenEy4KYi6HU27dcFpuzbLoJwCgtmyRkcADeR2AJuE8U6ZsjhMNBmciqNB",
  "key4": "3WHoa8nj2g4oQhZPteLMw6zaRKfs8M9JnGpAxbDr8EfAANgPb4VWY2CAWmA6b1EjJcSL4XfKHAGTaqjG5NQH5wLm",
  "key5": "4V91QJeBh87Uiw4ophZN2ju9zY3nWw28xKf4KtFrmb14mQm7yKfKqAGVkZybF6tA4MBTZa6g9opURDz8EQZ1Ujsv",
  "key6": "3ZHMNYrF13qFF5fMwFwD6LAiKBbTQs5T2eXHNWH2maY6BkSr9FtaoapEaPB1WDRbXbQXfQ8NUi17s7eHxwe6Lprw",
  "key7": "4d3idGjc4nQusLsYv7vuEhRdh2T62HZfLoYxD3XwTXpdgwauy4LX6YHRufAgStabaBvfZQca1kLtDeQwtkUYzeiN",
  "key8": "5NQQbPtdrFs2QiL2gJgzbjijdnBvZaRiyaXt7k7fWFyNPHsSPmPf14GNoE86yDjvTEpFEBVjJCKs5q5zPkbxgsvY",
  "key9": "59p4bDvpVkBCnbQvSAyCj9oJtozjQkXMSUtoUFh8trqgLaxgMUXHHZS6k8pYVX8syAJLzCcym7xDQ4K91oFUxjaT",
  "key10": "2wTpatSWuqMyRzixGvUTrCrwq7k4qbmJpCv1297Dx2ZW9A29EwJt7xZjBxRVHbpEiANUGZ9AjbRgvWBkU3yWt4PB",
  "key11": "2vfa9tZe91B8ftYVcQTLaeKfhcVWGGuJfgQ18Mtpv4uCyecS4obApiT6ZVfpbApHzfKM13DLJ8hXcDUdEmCNxLqd",
  "key12": "5tPFizUJ6K5KyKrfLgMHzD3qEv2fDwYNKrni3RHQHVTfVsYd6cbbQUSWevqDqpLAtswbNsp6vX4P5uTiLD8KA9rt",
  "key13": "2LbM86cPuYDSXV2otjErx4rdENNft9xq49qFeF1HWdsCPprFUxGsF8fwnGgPT76mfHaFZVfta1xBVdcXmv1gVME9",
  "key14": "2UsJRiMApyK4WEZUCLtfJ4oyWFSoEqq2QdMdcd5SP9r8bvxUs9s74aVkm2LY8wggRcB92datyFdkLnviwL8zta3q",
  "key15": "28iPTjAboYBX1ZX1uTX4LtdZL579qAdAQpQNJ1rNu1iUyLdJ5tAPuPLrVQ65xv7ojLRrZMbwaW8tP1BcRT74sdoA",
  "key16": "5SsH5GR3YpvHJNnzPK2qBi4Hvoz8ycCffepGNCLusmGBwoiNUPUPq8upNY4UwKDHAqJzapTVQckvmsrfeSQkzLyj",
  "key17": "4uPpa3SCUv2BuwuYMK6hLVZMgYkWQAomMUaX2rZP1h8PJMruAnfWmyKQSfYngXXb2T3JJvovbwszjerVoGVugy2e",
  "key18": "5TVf3n5Y53grBjetFvtVCidAHiiK2kipd6awX6TQEc1pPDS3MbFAQwpHx2dukUiVHURBHAUfLnPpSwYisu9qvsWP",
  "key19": "4THGMxex9Q4y73GWcna3DqSXmUhXvXpMvUGY2RpyQRuhjbgWyT5Tg2KwYT6okXcW2bE5gLXnR9xFe2cozvxeVy2a",
  "key20": "3EV35uscSw319X33DjZR6VChoMtgZg4khxvsv5YrXazsXrWBiEwqgTc59UMLdXgndRg2D9NCmzzFgcAP8WD46Q8q",
  "key21": "PHU9z5zCLtDamYGC8xD9JF1tALriaRAvEXMKdJAfVuDwpU4hHD5LZiXbvUSYoAFVwdhWeqsHhdVLhFnLP26GLMU",
  "key22": "5jghsdkRqn6oj3rvF7rPKr4tgHJxYtwUYBn7FFzM7TwHGRnmpT2qbAir5HbUgrAsDEsKidLmWYWdAYvN7NT5EP2V",
  "key23": "25VysVLpYX4vnxCTMkgtw8nYZCogxSL2y2YzjJLCe8juY91DgZ7iRaourSGENTWH6SuzNjem24vHiGMLe7zLA7L5",
  "key24": "2LsrfrEEc9wPCvRYrGTtYvMqysufXfjqVpDLcERojebCMMh4qobBAxEpSoJE1B2R6QjTxihdH2tZi2eg74LiFTHJ",
  "key25": "6jy7uvSJuezX8rsMxEoyeG3GeVP9m5NCiaz8wBKTxFozzN6bjdB4VnAtsoPbR4QgSRtwuCW6g3e9oJSUYrYy3jY",
  "key26": "2Sk1tuN4RHy7G5n92n9dNMSWFjS1QdnFVfPFnpt8kD6P9jLLy8JaBte8tWm9wkDEKVYx8yby9zXV1M5xLWqjC2R1",
  "key27": "5kTZo5nx2fcBy6QgRK4dJqYwcmGfNtsLS3g7pAtLkz6yq7XCSKHaxwXHqqowy7TSFfGE72y6JD44JfqTeY7dLAm8",
  "key28": "3cZ9anTdunqumC9nHsepQFbY8UitXn8PK2MUqr6S625HbUZ7gSmAUEr1awSyoSVaxJydh1Wfr7YoiSmXjqHx9ACD",
  "key29": "3zvZevk5q3cFmHM5vMEbCB4szb8nrkE6axTrsA2N8fjhEAC9xM3xN74frZmm41r7zarPNuPSrts4NCZZWa1Ejox1",
  "key30": "5wf7god4kJ2ZNexSBDbtLss8uuBvmdgxmimACbsFfmXh7AaitPxfXPmRSELmYunKJpM8QytXzEKEZ5Tss3WnSZjA",
  "key31": "4jmRv7V4SDZF9xAWJoPgzTpSvtC7GwPYfVyZp2b8UGVRCc49N5brFNLKz49ceseTtNALvLyPJg8n3UVzzYwT8sv9",
  "key32": "spcCaVXWYoCeQed1rugW6NmKXEYnW8C6UgiC8afYrDxDUaUaAXZaVRs8EJF1H3CToLRzejwSVVovjjuYgXjR6qN",
  "key33": "5oeKbxoGq25f4TdxMEVq8bmZrKhJapoN6WiFgYL3MY73SNFgtFQpAAQLSa9kz1GDCKmtypDbnvYQ2Q5WzPU3GuBH",
  "key34": "34zoZhaku3MqjxqdLNDGdjWwdrhxZvWMrdGzBA7Cw3sKi12aczqC8Eqq6PLreaJB3fYHPH8f3BBZ2y1dJ9Ts8o7e",
  "key35": "4RDLk64RMuMhrmYHPc4UZ89pvUiM14zCkk5BKfVq2v8S4vCkhhQ66RjvDYtkeE653j2PJMJQvCfzQpUwDNjfZfhX",
  "key36": "59QzNG9pgVvAzZh2pX1VG42KMKxRnQt98knRWe5WgyYj7Zv2gTWdZzqUjaUN5VSSBS3BexL8TVtP1M6dBDbx62BQ",
  "key37": "pHSyyY56yB3HG1eDbAn5fCv46yd39eErbc7qW9KVYiJmGpH4P7taJRHFudDr72njxNdMC8Ynj7mfNM4KKyfwHX3",
  "key38": "4daBYQLV1dokjWqZxc1ifeaJN6Es6S7TLq9zv8DurvC9Jpu4qEy9ocAmzaki77ZhqPrfRFgNQsqTgtKDH3X7JCk3",
  "key39": "vmfJCX7h9xmuXczEbC5rGGLR3uq5y6pdJyiU14UWvCVVEj311Ydi5FHYBmy8g8rWmtGBrt5NLaQAqze245XWtMd",
  "key40": "34kiP6gjyRnLVg2hNxLQTAUHMtknPLuXJq7pvfJ9kHdfwKpowM5XHymZ7d8jjjZddBdPAvY9CHS3CaEVqWtqHaLP",
  "key41": "2dP4df7HKoAGFThrBiv3dRgEmuErshZT8hoj9Tr5SqK2c6AkczNfQSyT7zRWvKPM7SB8ZQvpzRM79foK4NiECwT2"
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
