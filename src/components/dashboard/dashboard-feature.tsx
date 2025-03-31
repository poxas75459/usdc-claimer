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
    "fHbWYmTBTcfLmhhxrMNctAEmEcV8gpHJV69smSfoFvKKFkhaNYb7ekfPbPXF4W9aKC7GW2wKn5RBijxrH38wXsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBpRft7izzLhe3SKJ4zf8FbTpio6iHUcubuYtHTmyjibKXXnDdpND9rS4DqSHZoHGDpEtt3BdXLKwxjfm3ihb12",
  "key1": "A2SQQpESeQStujcHTU6EaQoH2zF755Rp69b6vRtTSronJXbdakrsLKFXDRUMo96WtkieLg5pSHRCiskPby4J8ZA",
  "key2": "obxiz33YAPTTiU5xDFHTZ2Z6DHuUSFPBYExHjxzESQbzdiJ8UVpdrqMHXXxZji3ZbZ77cjp3RbUfUA55UQJwfEQ",
  "key3": "2sKz7TL6P6NjwKGQPStSQJ3eT5YWTBSLYRnoYET49RoHGKg5ASg5YoPyVSq7og3QfoCSjcnzcTRHeXj1oTmD7a1t",
  "key4": "21tUZyo3razJa1stbL4Nww48SKF4bjuydQKyhRgon5D6Z8hsAivayCYeA3CQR5FiaK9UaTsXpmvYvakSKkzJReRW",
  "key5": "4Qq9DF2cBMPoyMMyZKW62FLPXmh6aXBUqqu2knNUxoRk2VwWvJDr4SHag2Sm5D4NepdW3i1JeFHs1pXRFV1Mmanc",
  "key6": "384ztXCWGj2reKTLoxaZhAUELKCPxNUR132wtNppa7Dw2YjF1V9DKQybTmNb3P51yYFpWfkDtiuMEtBR6x85KBXB",
  "key7": "3tdxiN5jfprLNi9u3vVUan9FrsUKSvL15pVYGvjJMuCrR9Sc8KxNUDipE2WjxyRAfpGcC4pB3jn4RSQXbk3XHSBr",
  "key8": "4GWCXmBwGhsdBYrg3yyJhqTdZJayDsHgRHueQMkqMBuUvgxuYaU14PUoKoAeiJ6RDQJ9EjmHevj6r1EVLZ5GBGGA",
  "key9": "qsGKyCNsnFpsUpxKSEyQ4w5uuRkHvQ2bcLFbd5wiVvjBQ2kE45GfuCyjNpTPhQEY1asJSTd3fbLn8b8Y9GXkzM4",
  "key10": "5y6Mx6TV8WEFT3S8j7ccvaaWY6PhHaZfCubjVH85k7695EbTqHxHRb6rgTfc2s39Uh6ZREzcNZYXhne2j1QY64fF",
  "key11": "zV7kj2XFkotiw9RJtfxHw7ZN6hj1J5d6qDMadCLc6rN2bfcDvNwWNyjKPthHPcjrmjwqR25tXfiJaACX7PrxvDZ",
  "key12": "AgcbWnYHrMdDCwrLZbiCqG9MjfrGZ2VSSZUk6d4gA7RvgBRur6G4AMtKypvwVYJLhMfzLeKyWN8T9reKQ1WoDcR",
  "key13": "38KTDyUnwQJBe8jW6ragCee27WHhdEuDp8p7ymFrcfFGNRt7fo6RCdANQZjj9gT8uaA4yavqjJt9Vqtz7TWTgccx",
  "key14": "4SH3pc8Zjibo3Pvfsfn5txegqN3fYw9yyMi71PpUUem5c9ufmFf3Tgg4daZ7qswh9qtTtj1sSBdoMQGRdPQMBeap",
  "key15": "44sGPwW249V5KPAV8xVUDnAJ12R1XBmrTnyYhobGhuKo3J3u2WAAhXBkTyosAVAjaapG3DSoMqcJVa8mSexdsmPm",
  "key16": "4EHUvAJj7SozEdCnSHWg9RT3Y7Nn4DCzuFF9U4y9Zp9oqg6cVqWaCfvHev7yuH9QdjLHm4mAEMFJ9U6vMHji3h9Z",
  "key17": "2RGNm55nQ7MY6wMkxw3yzJB4hPEfcwjvpN6zLvqR1fXEUijVfUwaemrsaBZbh3rjcH7HgFrewn1Szqut8uAWgYyB",
  "key18": "5ApG5sNNSrG6AaN73iMbggFHowHqYFfcE824Bkhrd8SP1ErAkQLB8ucN3V8xiU9yefjUURbgpNbkvFbDEdwaJt8q",
  "key19": "2S8MKQheyJpjFnj9yGz3ih2fKdmTpxtcMdmf2rAAE78WZ3bL8G3MQRC5o4BMX6UiE87opBSiG5r7QVP5pEXfVySv",
  "key20": "3ja2GWQNwkg1wXabAnW8QqgBBDanfmXEhaYFgVVujZ16iTdqjYxUWy5UYJ25tUg1h1q1QvLBcmfCkjNH1jY9LQwM",
  "key21": "3c6mpTyh7mJYHdVaATK2nqxj84PDdTvgbcLna4YauTg3ZVemdDwKGEawzh449eW4uaRcsQbYbd5ugYhAheG4CCiY",
  "key22": "2v1y6tR4fyjjRe1FSpjXGR8X1s1TFaAik41HxY69Pc9S92A22P85KUMZ1kpLX9BQ1nG5kGc1wrSmrteiDcM5Df4i",
  "key23": "3gGjPHs5UwP5pe3T5EkrRo6PLfgQFDWWGNKsG7u2srreVUh3eZk8UV2fmXN6YpxdDjfM61ugFCNY6ED8Fgrpbx5W",
  "key24": "4xGFtPDtE4kwxP5Yrhbn71YXYDL7vddjNciUTZDPpzQzKs8bN4ng1YFvGo6hJo8z8A3BPMk674cU8nvp16yfiMFb",
  "key25": "443gEryznF1VhuAD3ZYmZBciTtXk7uaf1GJmLKUuWFgEHGTzBfPhYcDYAUWorg5mqzGS2bPbJbH189DR8mmdgGdM",
  "key26": "22btj9u5rxAeeupRi29MHtBjPyqaPRVnNu7Tf3bhYWjmhrM16duEPVrveACwPQYWxbFvnwqcvKSAewvcGNE49JvH",
  "key27": "5MoaFLLWzwkGhgmHgLpEtfzLnx6j4z7ut2qLT4PhzMdvL77Ra5kv5QsEeZS9shmV2zhvoof4QLQVQFfkaiBU3Kni",
  "key28": "2Rc5UJsvWBM4WXTfQzsRYiBWgd4qmp5hUHWYXSEiH29DeBCmbrsmVQ6g2iWhPLs617XuUMyTgJFQNjseyqw1sLWh",
  "key29": "4YKCohEqqucBYnK9kiK7T15rRX15frEEHSbP4xnykwRPD8UKjQCAWUf2bqCyu49cdQ5SEcevPtcZrZrZRMWYSRtG",
  "key30": "3CMbLWS1nknpZ1CtDm9p7YsNwLWGsiiPn7r46PmDccv4CDNVN8ak5cKadjJi7cEwRzE2NvqQDhCruWvyFmqXNyW9",
  "key31": "5ZvSLCbxV3cdCPinH6aKbLLDmu3q2PBiFW4mzJibzbCd47cKjbSCTVHD5m38tt2XvX7LrKb8RXjerKjHBH7g2ipV",
  "key32": "3xU9EzMwpZfqiWNXCLv4xqEBScNdm5UDfoTaMWPgquG74c1Q1d3dE7HtCQqqA5vbQbJdeXb6SMFZJx72Gt1XGnKv",
  "key33": "5r8VQu2bQG8pAmN8uxuJXd7kcpp9e8Eihmt2ZuhJGxb3VLjAFZeL92gCfkWtNisrN4yc8BJYvZbhYDxYnU9kV1AD",
  "key34": "42QaV2sae4a1xkNhbEazyY2FAMGjjDUu9x26TfCsQqUDRw88QmfbPYDf6V16jZTWVnDQhXdpmPjsc8MB8BSTN8EF",
  "key35": "4BrJhU3ekaRRngV9XCVvviaEMh19BoETiqZDmhQFMwyfnyiQ4QeZvCMDTXtNskkJLmTTEYy9L9FyCp2q5U9CJGQP",
  "key36": "3gMCYqCk1KdXrwYhJ5XWHCjnZQ6ma3wnWPB1Bef5f2JYvT6G44iYQtSNBH3H9dMxgTZ83EpCKpCYtgHK424Fp83U",
  "key37": "4H1w64AR5u1VfmYJHTz5KjGSr89hJYLEdvtncc5DkJmjTLrRDTEjf7eZdGNsew7TFaKXabUQRx8Gj6FmV6hBZgv"
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
