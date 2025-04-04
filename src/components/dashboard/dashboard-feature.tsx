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
    "2MtetVEF6KNdHMY19Rhu1GhxUgYxLEmDE5mJ4BpkZ8i2eZoxX9PCHJ6pRCipwbu6ZjogV1iTgcwWzoVwJrG2Ce65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dMoD6mNWV8qkAwmLFqm9xaALcq4Wn289vpLtUrhAniyqYcv6BVQ42Nd7J1ffNhPis6sPoqLr7Kt3H7zUF6fkgu6",
  "key1": "5cQ1R66Wa1rFdwwYokQ9JjrDMP6mzYU93nAxsbJCEZqnu2HrXn5qQRcwKWWg4z9pVrvqUFhDMZ8TGfp4gQTKHZgG",
  "key2": "1hBic1UfDfU4pXjDdLGvwjsSQmQGsoEEpyup8xWLEAH8bDoUVQKbphFz8ExRvAAGQJ92az9iBNgqMsTUfMqTsiX",
  "key3": "3Cmn3uo3WtD7QESrCuu5TffQ2ncjDjZo6QUdNqxpggw26pZiLfHWydTUttWCY1uZ7H9xPSYQjEUTWaDXmEwj48Er",
  "key4": "5ZGVedDkqZkTJCXf8qwXLaR4GsRMKS3YWLmpiVNzxaPpMfdJwGzQtvhjgJBBnydCBAcE3uNHv7EXXSf1mHJ2uiWN",
  "key5": "3AtZC6B6AW1GAfuMnUdMWBnLUAUij7dQtZCRz5GLx2fAFyLCEMeybFxtv2eSrA5hG4VpLPeejDStHgLFKzzwMe7D",
  "key6": "38R2fEM5Lw9R4QW9C5xHN1mcbs72R28TPCM3Kp3rpX6jDfiFzr5oe7ygmDHtydDywcUEWKwQtFSs8U7YFy6wPVzt",
  "key7": "MtmqAJbFng7eGt15yxvCwnbimFL71NBKhSYCdVCtvTfK6J9ztF491Ga2t1wqsAtJEVvVJwa91w3rsgivv4Hnd4B",
  "key8": "4ZTZUUYz7UfyJP2rGohnobiubjNnhUMQBc1uhjjHb4FAf5Q7zguvppRRqBuNxunR1fSfWbdhc3MvksULf35xAEQj",
  "key9": "uq88M8ZshjfCpxBsGHmRQ69BAgB1SBvFewhViWa87tJPDjQVyYJZyFkbt4VVaUNfcHPcvsyWtCEa79gB1qFj2ZZ",
  "key10": "4H3rMsXja9MCc3eryUYf4pcdxphaz4xTdrarMwNTJwqYcHkNXKXgXizyjk2dAWWyip7HNApR6Tp9zBH6jU1SmrM1",
  "key11": "53njqY6w8LWQVnnhcqTZz96iqoRM3oL1xD3aHSbP3ZL17Kw6Szf7xwzwPCe557gZDVrfGpHhjvoYKuDH6kzGtSyr",
  "key12": "Mx79i5ABo64jziJ4JnxtkB25vFKB5N4vFaY4xty1H7E1dkeh2AJrT8WYroD4gRo5ge75unDHAZeEZdz78oXmoZh",
  "key13": "5cQuVXZQwgFZZJA7wVn36BhnW3U1VEHw9Mx7ziGKxPiEGycueZ1P1cvkbHtLQj123uuY9Eahog59DHQ4VUfnSowo",
  "key14": "2JK3krqxaaUHnGskQpQpzcDwSZ5AxFw3SncudGuijDpzZEno39xbEWVvknzVfjLs1NrQymno4eCYGZUvBbLQyzY5",
  "key15": "4nEbG12aKnycVzQjXTpse5V7tNBT9cJrVuVrJ42tMWo3ND9Nf5GxLhkGGPx2SovuvJ4LCoWNfserdrrJmWqUSrdT",
  "key16": "67maiLT5MntsWFaFbGpYMsWHCwhUBMQgi9nYzCxRtpZj5THFFJJtHKGxDx7HdwY4Y6sucTgb7SdCtfCY3iB9Tieo",
  "key17": "2qZ1KnyJjP4rCeai5k7qJNZ7eve4Dgfp8cz64HENJ6uxLiFWHV1NquggJC7NTmMvWJR7zE2sKEKhhVXfaF2nczG6",
  "key18": "5177Y1u5yx4tbZVkmEy8CNAgMNYJrR77YC5K2i5baZvKSbLvST3Mnfy7VpFJ1KDznk3Kkm8RXzXd9hmS4Fu4AJvt",
  "key19": "4QDFhTbvp9aj1nGHUV3yUgTQEKdgKFSGpHxfLRAjYjUAmbdXMc41hHTQeancD5QPtDoMChQY5cGjaLYbAXvduSEv",
  "key20": "2JGnEzCTwJhisuMDR45rsB85QanZ2KGggRdHndtQGaCgQmyhtZjTfRKa27rGUTzp2TqXZnY7e6i4F63EjVxWxcr9",
  "key21": "3bMuUZFaZTz2rDUPgMXGxjRTBpnBVaTZvDe6CwgC3JVAKYE8eNv7SmpbB2zSsWAUZPuk7nMWJX87EAbiFD46gjb2",
  "key22": "4PfsWAZGzcWGkzWwZE3VVWTmZ5SZNTVcFQVZa9CZzPQzuyhqnVfRyTqVkVauPwFPLYwjfkZbm43rHM1fCSrh3s3q",
  "key23": "4HR7b71uNT27eXgjYZpJcxdai4HyG1XDP7k2DpxQ42VENajepvP8W27ERhfjgzpX8DAzci1VcZmdfznAb7vUCnpe",
  "key24": "3fBsZhZ3UjfELmgLNZ3C6YMfKwipKs59erY8gu9vdgz8mvMe9HhX8XzEW4tHBZB5rauYtJ7y2j3rADT6TQqKWbXc",
  "key25": "QmVwPFz5oViVWtpJkcKjiUgruSics6mwq8VE7eSgym3NaZQbyn4s7LiavT72CCKgPY6N98BjDmVfU44nVpZkJc8",
  "key26": "4jW5rjL3PZeE14kewcp6jgkjdW5SF3DCzNFma1EG6qn3FF6tc9ews2zuTRcDenV9yiLmEcP5awNVV81QWr3whbaZ",
  "key27": "2WmA9eZ2NHXwTPnoo8Lgme3TvAZQbbfkdL7WsJWHT4PEP6bxffmBSSVxnJEYPQ7LS5wTcoknrSeBowx6tg3t8wca",
  "key28": "43iii99r5PuKduz6aAxzpFkCTUtqefTuNjWHFg9iLDK7Bpcw4yEzWFt3sA3RQp5v7J1LK7nJqwCU6mYrHsfQ8idt",
  "key29": "5XoCNu5UCZMCV5oV6NfsLYMYTiheu6BvSXJEcFRDikaAkMpqWV7BAb1RuRsHvPBopP7YkjdUbMff5D6LXKaRiMfv",
  "key30": "3y7b2Z5F3Sj4MSCqcgo6Da8rYTYbojDgkzLVFfpPGqkkVSXTgSMCo7L5f1mc587vfAyqxvjVBVDHWzEJerYaT32Z",
  "key31": "27rL5PsBsPbA58wgrAoo1RK6qvkrJPDoCyXsgY12jUZbh1agzyzUdmtqGWo9BDzYCDdoZ1yiJ2udKSDtSGi1m7R5",
  "key32": "2hbefVdE9gk6mqoc1Y7hAstRuSMwdupc1EfgdNfhgffL5xaz1gGGPnk663mP9JNnrmRdomyTVJWe7aK3sGk3VaQp"
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
