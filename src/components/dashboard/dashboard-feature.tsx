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
    "48XSgytzUtM6Wcq2t58y92CYStvNRYVtxx1LWvKGVvpVSPDTagfPZx3xtudgFbF6cf6uzF8HZZpMqDy1MyWcmQWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAkQ4o9CqrqhQvRdMNogXXoB4p7e6oKgvJ3phbD1gZ1FYm5seQqeKpj2Q3nWvJzFLYiaNPgqvj7X36nGLDXHQzG",
  "key1": "MT4dKSdHzkCjztdAmR2EJDbqV6oX1kbVoMsR2rwzx4sKwtwNsz4EmAGVJXxtuu9NKpfJXi1PA1BKTrAyztGi1nG",
  "key2": "5eA7V5QZjYSETzT9aDqCKPP18f5Ab6SBS1PxbgxaGxewHJPeFA6MP3gKdvWof27ujbSqSLzvcvJ8rmeuNCoE6VLb",
  "key3": "5c33CEwNPtKv2YYXzdEeqW1Y3Wv5gDv4z9aa6J2imoim88KW1nMnFkBZx1A4MccPQRHXaTJScBL4cv56KuiWuz6z",
  "key4": "3yKjt1qPoiaeK232vg8YkfAFSPYFRk8FXbVWZbVkb3RdwDa2s1CBcDhnwtzsHnW7VVKH9QnNYijddsCfMW5tUtNq",
  "key5": "5Uo8KUuW9bqPnzavGhY9k892LwgqW5A3Pjt2fBPGnoCNLJH2qZXjYycg35e3kz1X8ez5Kp9hMLHXcqT1t3AadXQQ",
  "key6": "BrFQwT8TJbMAWLUSmuZi7Lr4U9KYiMnRc3ZZL3xwdvUKCe7PGyEW3TrW3vW9djKG1FrLSFfojNXSNQvekyfZNw5",
  "key7": "w9dUvhyLBBBNNHMvsLSGq8kPQkzXGeFsEn5Ho2n3dJnakJUiUgESP5gyLmBh6RQS1ewUqoqT6VTHuDYczTHJkBB",
  "key8": "5LeELrBoVm1Sx3p6vT2UjHXcf1xPFxgnpqg1Bptuhm9uFiPs5CftJazrsxJzcTX2gdbsDwR2BZFAk23if5NQ8ECq",
  "key9": "4TQpeLRZZaf7u68aiekg3Ludymc2vh5ZxaSP8LCuTu2b1ahJhaz7QkierZ3MJxK4mKHHjPM1m4dD9bUtkereNV79",
  "key10": "4Dh4zi2WU3yxEsjteHcPmZLcSfrDiRpNr2wNErCcFH5sosEsFHoD3JqzkHFFRjCjPXP7tsLkQoSoY97gCUVH7TLp",
  "key11": "5cKj2oWyQRXoPNMHG9oG337hDYJUukFxkGM7ARUL5CLbpqFt64wDyyaTyqBYdQULKxnw5i6TMd1KNJPMiyo4HgHv",
  "key12": "66DfTAyTdNNE66EXYnZLfyfYuwYjXmtpG3DZBTjjehiEVjMdWkJWCe12JUBFHykSDLKL6dVyPzsSf5APBneZp1oZ",
  "key13": "4YuVHuDbRaDiyTfbReLA8WmDZAgShdSxbnjMwzy9uS5MmxuLuEcCeNY75jW4vELdd6mFPgzJDdSVnxDkZUS1ehH9",
  "key14": "3RMmXDGvpuJamU8XTDPTwuQaAYkRaWJxEnYfHso4eXvT794t92o5Xyr6g27o86Ef9amxwQa65acQRsT7WFsDR5xX",
  "key15": "3gkrxJu8QAMhcSJXJyPtKWkc2Hf3A2wSeVZcQCjeBxMBv1HVgXK6XcyvxPh7Gt9CMZfQCSxoLZ7UwB48tuWwaKsD",
  "key16": "2vka1dCmxUcVG5aPDkX1RGKGVuPQBVbyaAymyRCgNHce8Y7uzMddNFcLSjc1MwKPGgXpcbNaQbFzdWKbf9JLFuL2",
  "key17": "4QzqidvRDVQrKVTN5pGAjJSTmYEGsZ6DzRyWCw4kuVkUbRkUw5fBnDNwtoU7oTLQJsmF6CgKHtFjZu44D2nkmZ3A",
  "key18": "585tX4gD1kozCYP69Rfrhts73SwQ15EygbodKb52AHZfZtQSG3P27PyV4uakRJ6GLZ8JYekPfTMTY8aAWWTwWJbh",
  "key19": "EXShL823P1g7pBmdNMzCr3yb2WzMANaHoobSYjHbciTWwYf7kuhzbBryP2VtHE7ogd8unEnrrLyCtnAeJL5DMUB",
  "key20": "HeueKCd7pmsHoG96tJqt11nBhXT1Dcmg64CeU4UeQn8kq2Fo1DsYFBeXzmTnHGAmQ6zCmH9XG2BrvnT5fQfy4DV",
  "key21": "3ACWVBxtnoTJwszxF3ZPCrYqNvdhJRaCdfW51VFBn2afmSvLAH6QXdSabhp7UdeVY2zSabG4fE7Ecbv6vmdNM3De",
  "key22": "524wi8dQqHLhRF5sjPz9n7NZ8wTuhnRKQtVLg23gtFSYe8B55Njx2HXE8t21opKHdxaNsEJevdkWPRnab6xwGQQf",
  "key23": "4iW7njVL8sg47jT3jM8vW3YyrNip7DeBSNrHmk68Y88bCYGxm5VEVgExokRgVyZKWSTzS1g5RbkvMjbzS2WhdyTV",
  "key24": "2jmFZRvGmK15WuqisTMVDWcRWGnUFo1ZtR5iJQJdxHcGJnbgHYQcxJGtfKzw26XzANN73uUCkxQvJ9Y3LjuB4H6X",
  "key25": "4KS6BX7ufyvbnvUbP1GCgNf4udfZModukULXchFZX72Hu6tyd52U5zgNBgb5mz7Y9MNDv5s3ETYvC2t1kojccBM8",
  "key26": "41ULZieiKM2c2FizrbfEL2ReyuySqQCWffzq2pecuwFcugmjAzYs6YHB1dPhpxQQhBhDFniUEMrgFrqLf8g4D1Fo",
  "key27": "5hqbQ5tXjUVb4uc8xfxYcmpKh7FMaGyzBR1FJ3E2Xhb8c8w67e1tznDyV28cmLYsfT6rcw5BThHV7FFCB2r6iVMS",
  "key28": "5F9beZriDwg9JFiaMVW2mxw1NQstEXrm1F7hszkoEvvuQopm4Dj99NDaqU29o2tDs7CgksQMy8siShzBev35BrML",
  "key29": "4yWmz3Rhv12QBQ5So94YcmkwG3vbD8XwF7qZtUQxQtX4u2LEBSFmSmKETwmP9DgnTHHyPJUCqiKM4NYcgxWChVvo",
  "key30": "hCJKaRfFedUmYt5q2FsR2gBerNmTEDixFsXGKyhwBPBgxhTvCbFkdiTgzh9yhMbirSFhMARN4yTdhY7dfNK2T6f"
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
