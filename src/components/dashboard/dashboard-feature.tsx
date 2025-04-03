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
    "4K6hhyKewfDsRTFyYH13CZ52riefx84invCVRDgsTFKygjo9nHzKez5ATLSQmfY5D85qgqBANAmRuNSeXCcdhcbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fWqmqWhMx9ZHgduwzfSEburjegtZH5pjYCeMUy36Kvd7PtPFJQ5bhsSN8PetFXqk9xQQQy6XKmxevU2YK11fcYK",
  "key1": "5t5PJwRY1QtBqq5hLz8iqnGg8zkzajoAidmgk9DM38kJLvnkyxuozQC855JjtEBragNzf7prScuUqfnhxtuVj48M",
  "key2": "FkZnoJvCoxTEghFs4jLMWTWcDFwfTvCpVkkapNPoN8CmwZ5kbgfg8v5a4ZXUprBZ8UuiRKkmzS4jSEQy4cPapJ7",
  "key3": "we4FGV3poaC7zzLrCatV7BNnCHWG55NvGvpNfEtzHtfitPySinLwHy63MPNzhrt9Ds6gUMf1wD6du6KUwUCfjqN",
  "key4": "2jWNKYFgUEgS6BLRyKd61Uoism4gSbjdnFN5PpF4g4r4jwbznD4v1mJMbuHgkEBRa2sKrjntwnx4JWYHrgFnyff5",
  "key5": "2TxpBQ1LR7kD3oZtg7ESewprYNAqk37ShmNqEQWfqpvQjv7Qn6wptTcgRKschAzPjpH9KKKPAfPN8y4BY53c3rvF",
  "key6": "49UYBKovdYpWYcFg2UhPmD5KyGYxA8bcvXLvtmKncJv4GNtjoej18hjrMBv9sfnueeHaf3TxkZGZxYN9Bd1JTKt9",
  "key7": "3SrBiFAJTGyKLerK6iveqsXsGgMUB83SmTRkQgms3BuUCFLr5wV7YmiXMtNcy4Q6wsQeiiimA5g8vMcYeiqSxHwN",
  "key8": "2aocifJxB9y52sA3yw4usv2G2QSezTJKhw4BbhFywosn5fvKRwvsAS6v9yicF8ZFPMUsHFZZS2SaqMwYt4aVrVcU",
  "key9": "5A6uB3s9TdXMspTPAPN8pgTeqn1h3VEVJ2yYFcCC9rDxkFjP9YLvLD7vSBKsBkiwzSchmRDv3NZSv1QQPfauumSB",
  "key10": "3zhSFHV9ZR1Lv7ai3johU5mG6pxkbztsaBJrkviV6LkLLLdJWX3XA9K65LgRiCU29gk9EsBpidrx58BAQXWvtZEx",
  "key11": "5eqnkcwNNGfSAtPuDaeN3uevcDUDGnjaLtxHMV6SG8PJbTc2BX4Fjw2FPDjn6rVm7cCcK293p1SR38zHgaYXoNw4",
  "key12": "3Bk4d3RGb29uSUxF6vtSWk8NaumaDqFBjJSzuRRJwCmGmJdv8i6vNk1GKT8bBDyjPB4h5qankCY5zRenMfwNVXkq",
  "key13": "41iDoEJV9JGN7Giam6PsSskT9bAxFtGRARcXT844gowgxmQvTAZ4199SubxQcTydAhpRyHgB6tn2YaBo7NY8ECuS",
  "key14": "3LuFMMeCB2pAMJVUcE1szbSCdH4EXqZG57aoKS61k8UYUbe9EHv4ngzFrzuiibLZeJK5PaFszym2zdqT1akuMPY1",
  "key15": "2uTKCqsKyWFw4WinEPELuqP3xsevaD5TfF768wTqhB3u5C7HQr4LKXkSQdBYYVu98ot9GWYvAzc4iwVHqvUxiQFs",
  "key16": "3VZXuED3TADCVqDk1AaSdWYhDjMJgXJCnT4swjYch99kAVHUYZFkwqqAYwQRz215SrDzfjzmLRHtnxKze4bh3GQf",
  "key17": "2M2PHReQ1XNtPn4tAGGVShj9RkqVHC6LBMAYU3uhAhnBMXBjAERH6eECQPHBctN4N1DZQ462cNtQAwgH3Lx6kTkJ",
  "key18": "3uieWw6urMfCysvWAYEK6yoqRbGr3YhNBUWKtK7e1crA8f1HdRNnJ7xWPnJS7FGXuWyQTEH8aZBxGCW2Em9LeWCF",
  "key19": "3tvthFCT384HhJXmemeau4vSDj9DsPUwv2YGtuqwtxL4wXXQcCPmu6q2XbGq2cZaadrXxSEX9ghVKMBZgPraCUx6",
  "key20": "2F8wdoNzAeRpA2Vp1xmg7zEQ1zYcQYcG9snKgRHcUZanrSiw2FWLNpfFPVWTij7gqBSaqKGDDQ4KRHuwc9QDmeo3",
  "key21": "5shqpunpVQmfrNwC1FuC825Ys69kj4WqJp4P37nbZVYAQkkkdhQDMQRtdex9EvdfQBdCArheHsT1Zp2aer321NFR",
  "key22": "df6RZ288wJjGJkiYKM6esdZ2UbHfRGqtZouovbsTgygPS82342nbUdRFGCTtihJcX9XFJXN4NjY5V34hhq5qmyf",
  "key23": "55nshExArpjnJVHc29B7cZVk9ytns6HTRkSJGEjp3zRL8oyae9a7iNaozY9bA65C3zLLKuqNGtompJEAhXfia8Xg",
  "key24": "2AeEWHgRNP7g1j4SuC3m86ZpSfxFGyAAvRJD4qeEwimRzxEc9TSdhXroG1rqaNRu2a375B5w3DY8NMyETdxCAojG",
  "key25": "2mKnvWQw7PmszfzLxzgKPiPBaTYkT3QnMnC9MZ2usZnMHLeaVbiyp9AKNrCfxTNykCRzj9sXtCaG4wYeEocACnFb",
  "key26": "dBTUJ65jHPmYkP9AAfmnDY81q7kALfQ5f2s76hJ1rU11TTn8zxqpM7g5rQpkwPAVbzqgMRwrGhYUgeLB9YXzFvs",
  "key27": "4dPaspegLk9ipLwdKY5PcqJk3ao3e9PmDkvjP3soZdV4vzK9sa548JjTv4wHPrG4hHtPA6B2uPbozVRS6kHg8qA1",
  "key28": "2egseSmoJF72tGRPfKmy6j3k8iNG2CUsYMRCAfaauCHqLSBVzQTnWmd1MyT9rMspFzzdBWHgW4tvtZ332yUnLDNW",
  "key29": "4jDX8F9fMC3WqCMg2431xPJ7TSQ58TvVKQxwYs5Q6XTbXJ2u6cEXZqC8j75L6RvRNFuAVQU2tBEGqW5moj1BcSFh",
  "key30": "5enrC6vSn7CWC7YXuFcLzRHH27973MFqYDP5jJBM5uhWATvt2FM5TKEEqQtmC8QdWgQ5gVuaxGSARVnr8JBsve6W",
  "key31": "5WKwiXwJJEHcfA4Xvb11QaY93JdxFmGyY9eyLigcQnocvQB9T3emQ63raV5dPTJ63HzoyGEkDaJsW6Gbuu1NQtPU",
  "key32": "2xKELA1n1J3m2jZdcN8XdFZ2ZqxpKr7e4UkdZe29fADLeqEGtQybDffB91PZmdkaqcHibe6GqxwmULD76YLGNB4z",
  "key33": "2Pr9MDwBXAe8nHMDpYMuRsTu3C6eu3rwLHLQqpJ8F4pmwkKe4eMtwuumxgbY3hGvpGr3ktXKTHZi14itr26gBAaK",
  "key34": "3JqD5TeNeKb9jYYSpznqjRHxtNaTHiZPcPNWZ3ytuRxdE4zeGDMPPJKMu1ArC7PghbNshKpNbQH9BGdrNFBuCysG"
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
