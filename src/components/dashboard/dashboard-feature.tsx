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
    "wHufP9AsUosdJ9dRwiH8H4ZAwSK5Rgio9HGMeDVDkH8WippJyNMcFKHXYRDPfrY9JDP78bGS336YDt7poW8Fwqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SronRmCnhhv5eUMe9SdJ24xb99Gr4VcMaKd1LzByHALpeta57gdF7xafvVjN2rT914ub31wn596YVB1pUdbGHAp",
  "key1": "28qetFMP3ixWt35AdP932jhZcKXKve36Kaq9fRVbS6mhq6HsEyF1eYZngxdPJwHbrntt4rJFGMyD8NGQv2VucY6K",
  "key2": "3PcXShaQNpuevzt3WartsoA16dndgP3sqBeden8B6rZH7UX6hgA3HYdBp3dJrd63f3Hw4mQ73Zd8xjEcuLEaqe2o",
  "key3": "5BfZ12zbGm2mSzE1adDBTEaQNqcDF19sJSm6LkRM13R9NNtaeFhaSk58KTR7p9zKsn33iwzFfEAzog9ncHjVvNDj",
  "key4": "5TrLSfz8yraYXifJW7Pg4d5P92N19hTvFjh4EZnoeRh7KWr2xSGTC4DjToxy23NM5i9tKxnfxxS3zimf1RjNfyiD",
  "key5": "5P1wY7TEynEcw3RCdUVqLVH7CHhHwwx7RbCeW1YK9gE91k657tFDzrfGLYQSTUMxJYQaJEXP62fpjAYTzg9WRMv2",
  "key6": "2kWp4EtrNqBQh8J2xFnZbDb6ReX5p9LNp3Bgb4EXMFynCdLKDEZT3darzsqvNTWZMWRjQBmMur6wb4MP9eiZsrn5",
  "key7": "3mWjMRAeUThKpHGLGSNDXv9iGHptbqZjH8HRoKf2wVoGkRuCTZrd2SQPqhK5gmgBbvkF1m5sCSZ8T3sDHEa8jcYe",
  "key8": "5GodSYHb8tMDZXRXxzuioGVnccmXNSJXqjdv4PXEYifpNz1CxRdbaKQZQHto9kQ2Hc5EfyY4GopmUWAi182fgTk1",
  "key9": "5aRbmrbpZCARJwn6fN1hrSeFhfGcV9JkwokKTVHrn5hvnYghoYDPtYMZEZMbNojeXM9DAvSUCm2HVeoq6PXQFDmD",
  "key10": "2g6VV5pzfkNHakvfshkqZRkkaGZEjPyT2PhMc4idUFL4GRX1AkyeoAseHdqHCRitsD6TMaxQnbgni5iyjRCxt867",
  "key11": "2V8StLPM2jLEUokrd7fQyAjczR33wUTZpBKAQKAARvXWqmRYvxtejKSeigNByUMtprsyyveS5NTd4WzoaDjXLq8z",
  "key12": "vwZ9Ao45wMaUEgpzRnFdAyS9bUGPnvqzG8BkeWxotTo3B5PDq8X4ZzDNkD4TECsMVUGny7PGKNquBn4KBEfYcF3",
  "key13": "2aDhrQK7Uk6LxfeLanYuavXZkEMyArRrHPTL4g33PyU1o36AtLFLZbH5ekCY3mj8chPWG9KTMkFsFePziRzXb3hb",
  "key14": "2Z3PXvGuioS8cJxiMgSH2vHc45WbfmmyeBxgP8QAREq5yyBV4a7rSV4f68kTWXuowVtePjX1RqacJMX1ivbTLPh",
  "key15": "4ioZ8cwZmTuzojc54tsNsVQHVcXQ7hVAdML6LxRoTm8nVVwjvLi111C7xzf5rrm6LPLjFTYGBKY2BSCB1DBHmGZW",
  "key16": "2fSswyKJizqprkka8MK83VjBqtZMscdgLkBjGx723vSTgRruyvGemrjiacP7cPV815gX8FmufGxuLGZWyaULXRyK",
  "key17": "49MTsjk1fa3wT1UBq1gBuq1wriG8ZiQrfc8iGFTJTmMifWfq8zbPecD2Kdp7kLSxmrGYP9HEwsP9QpSPet9HrTvY",
  "key18": "N2hdVpPDq91ft4Gz5dbxoUL6ZND1RexkA5XLZYqB1wf5KcZaS3G5YEwNt11BxjpALBc8ce4v4UHEJavSAkkHHhZ",
  "key19": "2AvC8qUVUW1bFZF7qfQc8gVpkTn6aTLDUnkmxS4ayzhVBg39u2gzEfFTaP9haiW9WHzdFQ2fbLDnBs5mTVPu4Rof",
  "key20": "5P7RcpJ2eTLc63Z1S6rf7meKgVhW69idnow6qqN9aLYQFtpZhzg8YfsjJT39yAxhXMHLZf7wJ4CV8gL3MWWKsSwu",
  "key21": "2QrC9jqvtycCGusqv8QK11YEji4k2WRarVNVebrnnsVBiGYqEm9xqyH8QjqYJtaeMoTgnbGMsaxBeLwJMjWg2ETL",
  "key22": "4RvU3NM7H8nLzaTqKxTzs9mPryZBRCt4awtYhg1RyUEXfGyFTz5T13DqHXnUSoATUahv7sfAwRnb5rWGZpDevDzW",
  "key23": "3fUpLXtm1wDgM3sjsQNfxWePjWP4qRt3FMfCNuLEiMFBmKsqigMruaWSUUFSteqwaWfYhzAyHB92LHNENRZS93yV",
  "key24": "2ECecSihEkuVtLwnGZTAFgWNFXdXuhAX1TE4yFp3PAA4qWWCNA2joQCeWU9e3pRG2KFC9BvqGvS8KrJCYn6dGSQh",
  "key25": "2YJTjd4P5g41U5GP1VYSfKWpPCSWEn41KzYpFda2weYpJWjWe5VweFD7x31252c8p8MH1LKwFFaoBXf8xFda8dsG",
  "key26": "2g1SkMvYZQmVsH4EWKb8J8qGnU1J4s46LmrFgzFYXz6bnSPK9cvFDfY2Up8JYxQf4bMBSrogZbLbGB1Pwru837GU",
  "key27": "24f6qsT7pUnt3S7d5HE9F44VKHmMKhMmcqcCnWiNsoU8XThGuBoLxscXWGCN6mZwyuFtf9wQUi1tFfdtRs14Q7em",
  "key28": "3bV8QfrR18qucRC3bV4DMztEBAcNX61W4WTJMPguGTjVG1wZRFNyT4RRKhMmHNi3D9uuUNeqjx5LDiqHeEBm4oqt",
  "key29": "5qyMYwGutJcJDy7comkSEyuWQXtmg4y1BrH6CZm7WdhbmSFBVw44MkZHkBcFTf8rpHJCWNyLTeQS34E8ycvmfL3B"
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
