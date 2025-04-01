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
    "5Uqo9PsLAywDzBEqHKzjXP8qMhMu5Ja1mPfYEEGfH7CyfXRrN9pdNc2GTZPxNPpadGAhE7qZ1sJsT32Fq43rd2N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YpyG2jwcWUrYE9UfoyCHEe3uVvVJB6x4LoQcHCV3sEn54xEmnpFuG6uaTGdYFUd4XWLLNthwur4YVfRFvh7yqLw",
  "key1": "4RDB3TTbq1hGcnQncHjEaeZQCcxDzPb3FJtafDgjXrGE3581iA5xnEtptnvzoqDgoi9EiBGE3xJqPqfh3g2i23Pu",
  "key2": "33SmyY9hCEKvhxkTh1uj6NeUHUxKrQPtkobaF8bKpmoX3wXx8pHpjxC3AHrYhmQpP9Di4fk2huU6QHqRjLKt9v68",
  "key3": "52uz2veLKaVms5aVVcq8HxPCi9XLVy85c9YTC4XFFsucCREK6KUHs8yxsWDKQD7USoVs6bB22uFedQcoxr7jBNuP",
  "key4": "4QETvQqWdBhFNLGBJWNCJfdPHcruA32msDWVMY3ashj8zLGJUDTRTMKZ9WaNLSR1K8kxJaThabvfE5qFRywVtV8r",
  "key5": "3BohNSKwpc6ZgBgFuwUo2f4kAZD2af2P6mDbTHoVqfwsM78yG1bdUPB5zQLSMEVTC8qxRcWFupvFvXyP5F3oJjfp",
  "key6": "3rgAM12m4cBVZTQYiF25Zy5P4TdousArazkzRwWpo7pwJDtZMrtbcS6eainyb75zoZhEEmrAA9y856PWE7R3DFK7",
  "key7": "2xopSc3pa5dqqmizbFG63P2N7WFakT9ugmmWnJsbZHfm9QkMcTsUjxE11g1SyaAjS3CzauoBxbT29oBuW7FESb78",
  "key8": "3as3CvF5pC4Scf3cNSzRxj6SRPwG7LiQYb1KJXiJ45uiYAxHKyVcgeNGKN9ZUP7xNaFZJh6pw6wcPtPRRTdAioF9",
  "key9": "5vEUBKSpmZKF4nL39zp3bxG2586XifaJ64Xo9FwwVBzE5UPD3fbEaq4EvXKvbEMmeDLQvpf6yag5196TD5yQynQz",
  "key10": "2dmjU9AykhhgUxkMf8QKvWhBvvZz6NfYiyH4hv5nr7QsNjy1VaYB9qG4iMC1oW7RNQ7qCY2gLmqxeMDCQNpyz67H",
  "key11": "4HQacevxq83dxgrfu9QT9C3tjiTV3pgR7Ry8VGmpgq4ZSjKojRdfooPyPaVwcb5VbqU2FekrXbGvKn9eXDvpuEFP",
  "key12": "Dcts71VG8Fog5NDh9REzoFFtYXZhy8SqZrRts7ooH8wokZDvhDUou6Nu1e7b4ZVg4wdJ3KT3z4H2sJX1ukKdvvU",
  "key13": "CFKzkscckQJrxKgzyVHNKVseKG5N9wrdQDJFmg5zTYwAKVtuz4bCUmzEneseVwfaiMCrsEHceb7xmhdXp33iBXi",
  "key14": "4vq2MHZQcASYXQaBN9eBTUHgwTgwcYt7F9TB47Rg8uVHe6n12qfbPPuo5hFSPZ5KYmDiwCVK1ctz1y55njHHPNpa",
  "key15": "3WQ89dnSWeZEQuWxT5AAKktqCMnWo9WuLnjKZGbV38Pobj2MALYAdifeZGVmiaJWtTWzegZafoJF96k1mT9nzuHN",
  "key16": "2GKaqsgtVxF9u1tDqveeZ7dsXbq7MuZGXnte19CzmmJJfDDYaFeMinmFTdUq5AyzuafLKdv5to9HX7kzgA6WGP73",
  "key17": "4PGoJ433Zf2aiUnoT7Y28wC9Zo4Bwj7DcufCPE8dHRsCoMmm6UCM1Bra52HEQGzF1KMF27B4QQPL1wWUWsUEGuqx",
  "key18": "47VskGKEnTyZ5c3vCMDpxTqiWGk71x2KzEZ7VsLynav2NQX9dzVqsGAe7iQYV9VYYjtLD4VVDsJDzode922D31Wx",
  "key19": "3XSUEagreCZ7B5jypHMEKNfxXRTXsV2GKmBbuppwPWBPuLP7M271bK41ARQ7KVfsJY6vjSMNCtWSDtBB4FYD1bX3",
  "key20": "1dwZAHfk6igAtaceaq1Xp6ZxVUbkMNdBGveRgBGU7VekHcQNnaN5qASPuLgc2k7veNxqWKz84wMJ7LUCCB5FpB3",
  "key21": "Hw88aK3j21mJMTNfMiHUcqLz81eMK3ynGAuAuSpYQpHbNSKK6r1kDfzqHrRFVEnms8bqPB8ggQ8ab3WeMEjf8PD",
  "key22": "xxTsPivCZsmWhQciJshEREiRRM8aHnCFVBkKZayennPAVXdUo7bBow91YBBKVy4aq7xXgwsBhGAM7SdPdB52PvA",
  "key23": "2PEJwj5jPGu57wWCtdfr15w1BBJYptgAoaif6RWQJSpttUws49Liiv4vrHASR927pMGEXdYkrs1J5Dv3ob9Nsvrn",
  "key24": "5Pc47oYwzugptkkuHb4E5jQTpgjnvoRKjCCiuwYJa7Q8ZA7Zt5wJj7VXwrpTDh2r4i5s2BCVBg1ZnEbS9S9Xzqjw",
  "key25": "FEZ5iG5nPpyFP2WsP6tz7Jg73QKLhh33ugK1D6rPFNRJNBdN3Agir8BBgFZfCSALT2yF5WmPDxexXmafzHUn1Ag",
  "key26": "42SApBgFb4MX6snmKJV7VJbkD5WiGquw1sx5mGLnuZd5WCvYRovANNECdDMyJf7LHHz6F5UJff1azpbUdKFLNg1B",
  "key27": "gUfcF6Ktvaq4BhdyytSE9W3fNsN2EczREhY1bnPDqwzCTtuXAdk35X8v37X4b7FVAnwwL3g1xbV6Zox2Wz3YjbX",
  "key28": "3sbWgYDcRhb5TVixWcmhamoQRhiE3QjFEMQFUoHiLax5MhevgLap7LPyApXcQbva8BxnT5e8HD6M7RziTSja4y1c",
  "key29": "4A86uimDZtWHv9REN2AL7oQjptZixWsCVAJjhLgWZyrocFDJoVcyJApy8FEFbEyeRL5XqFm9Q76BsV1ntqNkjRHu"
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
