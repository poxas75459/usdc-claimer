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
    "hBF7XupzTNMyZHedsWeqxEkyS5kPdVvT1pgWzLvZq1dRRGPeuGbc6QDf962B2CkqHVUTBeETqp3XzHkzmttYRp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VALzLmBRcDrd57X1Werna8FttpH1kPobT7rcejnB64qPE4SirB2owJGqGMwGiXfFyKUpGX9vWzjbYVRjdhnoEcu",
  "key1": "25Pb9CfWGPSmrsXj9FjjhawQjXGbwybUML9wdwCp24YsFC3z4vKUJrPDReyeUKmE5YMzF9xJRZjNeHXUj18UtSsB",
  "key2": "5jj1gfwxd6ogAGnku1SxC8vL357cAZnymgqL8vw1ou2EmeW9YgAriqGXJj7Dq51tH1gGr3N9NLmbhFSRG7Xhqnv1",
  "key3": "4szADfpHmBDs9SSEEfMxRLNnm6pWhyVG1NCQQ9qvi4SFPovDu6HKR1NpiRHCaUsCY2xcXJFkwuqNxVM9j3yDX38f",
  "key4": "24YE4LKdQApq9GUUELpoiXfru56GT7axKqdsv4xnwnRJRvobPAHGeS1EKxckoMmg24HCSUodq9LcJS3wL4Cde15Q",
  "key5": "2MNkSNqoUDtPEiVeoM1sxMPD1qhFYh4sWcKvPuVEK8ymaxH3FgXf6vxw9fZbCzoZPZDhbHb3VHYkwRFDVgEriszm",
  "key6": "5GFP78BFK9vNwU67Eww6V3EoHwjcn5Yc73mhA2sbfoYT5CFkXCQFAyuX7CSGGzhYpMDxjKpqBUv12vupKLWGxmbS",
  "key7": "uAx8EHRK9dcLxkSAdYU6MgSQ3MnXhDduGRdk5L1Fp9bCSmVzYSWxps6mKHEYcdVPdhP1YcZmksVaRkiZx4vK92L",
  "key8": "56i3MWhiVSBvQGxsBTuRDEbLzXTwQc7fSFYVQB9JkhB6wnWYL7h3aHVD9bmt73to4J8Hi53w76gnmRMCpcQRJmm7",
  "key9": "2UQJDZWj1ck8i1g5VefJvfQmF7nj4CvFxWnD3jYs57929xvUntpsikiiHiGxYpVtoPCMJcCbbTuUFAyY6vK4gnrQ",
  "key10": "5sKi6bSZuZng6yLLYHw4kcNvBNvH1AeN28GfzbKRSYcSSJRt9ZMSqzU3znD1Tq8bkC1zpwt2rgoD1uL6HBRBeGms",
  "key11": "3suM7Z7tsGFA7ePUUNoxywWh6xKY7MHx9JzS6oU7aDC6q5aJ2MY3e2QRPbTDZ9Y7eqCzd4dxyVgRdd2aHQX6HBx6",
  "key12": "xfmKGHVFGzyjsrNHwax9CR9oSnN26yjQCCS9xZcTEef2vWUomd9KAs1Kq5NSiu1W5dwhBc5bttM9unLBFdqnpaV",
  "key13": "odsUBWXRoBW9rxkMkAXepBeZZ2b2qi1wnXwW8QvkZVjzhNqk1GBXXBjYisZh28eRJgvfCS1zfSj4JwAQxhTJWc7",
  "key14": "3YzeYK2sHUGgGSzUmWEpyPf1Noi1knZGe3PdBZfY4FNv1Hcb53KTyzC6d9bDyJNVv5DJ6iNdPDsz5uy3FC3TaTqX",
  "key15": "3bf9fjPuJKsebvBZB79PFn9TwHVD2M9J6Kvb5tTDbDxkb7K4WwhfFLdtWjknS2Y942Z1b7WWUT8y3NJKxukBkMV1",
  "key16": "59tSmG5NQnY98CBB17fxeJo4adYBzNmvjJNtsY8HYGFLoHr3D2ZsMLY4Ef6PoRyqaJff12jrzhT4pQZvMcQfh5Mm",
  "key17": "3VgCJquRncAPciu8BARKyoNSDmpMVbukw78Z3vjk62a8CBgtiWS8CLHvvuwHP1U6enx9jqEbVejAFDgry66h1WbP",
  "key18": "4LAf1J1DPhdH2HJfYyJ4JLvHg64TgfWYUo7MwfpaQfETh3kWdghqbCM7jBmy4maBFenwvrEBZKDWjsbTAK8DqjqF",
  "key19": "7CS4J7Kd4Zx4XwDvmzoo1PTQyHWgZN7GB23kkUBoRVMFvopU6zo1WXr5GxKv9tAkRL7QmH7iUz6o1JTYZLcrgQA",
  "key20": "59S4F1wL3iCxuEKpAKX42kdsUzrEMTK4bpVGwkAEBqsmFzY9wP13fiNaVj9DWApZ8fF7zcWoQJdUbg5ANMVGcGME",
  "key21": "gSVcq6q51p5tgFoQ7ygUbZ4eRsKi4bqtbGK6KrJJiMpj89Wb49xTYE9xdBiTtBeawusqTnfCUCAvecJNtsHdGoi",
  "key22": "No3X6487ZPEb1bcbAedtakoKFcW3Gb8aPXUXMf55BYMxadPeyatn1F1N1xiUJnNE8ayC4uBqpkYpmaHySkQdvsw",
  "key23": "46Ao4fGPJGnYpnutFYrf5v2ZGYVNVKUEgKZ5UGaHaPpDFjgbpzoLW6JZ356dfJvKML6zC4xm32w4SGqDsEDTxeG7",
  "key24": "ZHfJEMkDaTJX8ikAL3wxxpch15do2edQsQvSo3NUsZmZM9fr8UsVN1WmP6xi69LnCPq1cwkEXSpdH17NcZQkMT4",
  "key25": "3ak9F9VNUyLebipMqqfTP1stM8LrbYzixJm8pMnWzNHUwiVVL5UmPEokaz2e5JUpDswM6P9PPs6jnpQGxyk1xV5V",
  "key26": "2xBJ3dPWKtDkfTLW1pmdfsWquDnZ8mKEuUhgrU2pMy3ZvHyyPt2ngTQDXgRbJqPhY22ueCrYKETbzHZaqt3V3VDU",
  "key27": "2K8ZrvYAgRfCemo17F8Yb1NE9S26HevgPW2wAiXK8A1ZJtyDRBC5uPuEGomFyj61nnp5hmiMzfaJb2qCUKECcWRC",
  "key28": "2ixFKpf2DCxShtQSFVZ44kuj3i8octr1iYPqd6FxN6CyzFAqaTqU1nchjMnKJ7AvuhDhQmD53S4moG6QXzM6WeaU",
  "key29": "2a1CtCnTKvR9ZMi9V2V28yvu6AJfpRdVjzRsYtKdgwgupActjRTzovf6qZNmo9tprwCAPTyuL9AeSohqoi82YpWs",
  "key30": "3jaEg6py5z3eauyEXWXGGsMWXC6SPYfi9QcSV7R2eYraHv37xrngC8oN9BRwdRXhaGmXnMaoDN2AsisN1eorVidb",
  "key31": "4ymjsKfziuztc8ZuGsYqDZYQXZtw3xWDd43ZM1Z6hChJPLuekigeVBDGv9R1KSBthpQHhHq7pxZjaCWPugYGayeE",
  "key32": "3PAF2zrD98zuwuJNTarK6fAYxTqHsdDhvbZQR4KEcQdRtrAihCdqr3g6msAKGPKdCB4rcJaXwBkD19rjcYRT8xYd",
  "key33": "5ufQz6ugu2uqJxmRfjfpZXDsoMCw8L8aConH674S57fnGevX1mkMJ5D4fZ9W6L3bCTMiYZBfqtRRU4FYhxcmDU13"
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
