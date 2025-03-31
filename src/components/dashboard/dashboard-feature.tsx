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
    "5w428mZFXvn8FT2eCbnUy4AVVkSZuukz31pYFeWtD9rgETAstGFyHxRyTTKBnEaEHK9thpNxzSMnkfuNef66CzYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279hkEMg19aZkDbdXVMChF3S2ByVNM7VP5bWoA48wjx3y3znhxiJ69KCkvr4BKkYdnYcnH6tjCxTT9oHhrDS9Eno",
  "key1": "4QRysVw5JzeujUg4tCy8qho3miqBjPeCvbqUqzHpjf2pR7XxnZ5s9kizMFyu3gTp9rUT8U8ts5eYDf7zER5zdf9W",
  "key2": "37ncp9fBi2Y6kyL8G845iEd2rHP58PUqJz6NsS79EpmQbp7VnLJAAUjpDNnkKa9o576JsH8ixjcq5WKEmc6sutFv",
  "key3": "62bhXGSixAwqMBjWTQvpPPVR4PWZfFNaf3yDD84tkjdUHwCJDLY16PbPs3r7NHgynzqnBZQKTbXEPiehHJ5kfXUj",
  "key4": "3TsogRS1s1JMdTYj5PJk9f25uqrdik5trE5kVN464UXksU9Z9XZyZpTdpN96yD4BnmXdjX57bsDyADwsaT1iQHyE",
  "key5": "2VUiQAD95SQPRdt6QVvkWh3xQaXGTPP27exPRmzsrLftYMFrv7TutrndHBU3jFi31qcQpz5fpYVMEVYFSwdTJyQ4",
  "key6": "4jWivG76jnirdWuRmsCv4A3Qvewrgkns9C8RG8hgQGGJ9SY2rbUC3jk7K9HShytZDQqBdxRCuMT4z49VTfbKRxhe",
  "key7": "3vqjj4exoXb38owbR6HTaGc9sm1w5yPnbdZHcWFFCKvkXAvAB1oqRwVp48n3fZ2qZNgjZVR5yrW6ych1pRf1aHRp",
  "key8": "43RyfYxwunFMKaHFP3vD4CntcCdrBkZcmAjsuw88AVtFUKdQUHRN5wru2dTf9zfZ6ax4S3aECt63ra57Rpu4YMJk",
  "key9": "5wHD4HF7DHC1k2MRAtHtw4kJ5AfnNXs975JAvAwWKTWJfmeGr5tZigoEkbAyME6XztMLrLg7peNxji2gEViTeEBu",
  "key10": "ya9WNzPfzNo1Ldsyz1tqViZzKdWxrjV16aUUvyVw8SDQ9UmgELpqY7z8MnP6i8KcYNS4G1ky9sU1DrhPsnGJdPK",
  "key11": "5dshw3CmsyhgkobGx5JruSKqfY4xSgVn817pyuKWvVrj51LvNsdwcB8HX6bHeTKSLF8VmD6fPZF1UPSNE5SmBDMM",
  "key12": "WnVMMZaQQQkJXs13NmwqUU7J6i6smKoecbfK7ppQeP7PG4ppHB1dbXVkMwtbmrdUBforJRSuYBox5zKgws2PtcF",
  "key13": "2ZoHUugbSvwuuvSi9TPGehKKX3Kt8BkRoadvkAn3xc6qj1cpgKY2X1nGEdCZqmp4JUAyN2P1mJLz7S2uACD43tBF",
  "key14": "2QGym7cYcUE4nE2QBFFufX2bgVXtJeaq35Fqx7w1T9R6QSBhKarNKLm9Ac6WgL77FMh54QRhdNXEoEyposePH4ux",
  "key15": "2Y6L2YbvKEUtxGZKEtGXEPENgJujtu4ZyGDwTFFvVVdwhsbeYYgYWeybLTk3LdHMXH2iND4EfrLuBTyC27yky7td",
  "key16": "2sxPoXJDEiDeUQQ5mdagXfvUDXakWNb3vBG6vCnZ4soRP5LnsExjfVwGZbTftbJGA48GHf5PYQsu9VutCFWQMie4",
  "key17": "LE4FeGg9uHGJxP2ybz7W4aVjRtgfELRZFegQc72botC431Xu18sHfQam2MhsW2BGZwyeQz5U22toWu4BYoigmGg",
  "key18": "rvZYcSC5CSzi1D9rRphvJuMVfzLqheA9KMNSBw4F6ANB51WXmcnbojTZmFCXAdNVNNyoxm6ANm1dSFzicTziB1f",
  "key19": "iwmDXcEVTngdoHbo5pFTScYxYZiLi8hNKwoHuFwbTUBqTNMHftB3mNBdhWwttf4SsA6oqeZAst4WNskU8fF2RGq",
  "key20": "4bogNGknsrMk4AgUuyXShb4CnFbw3HHuPrTFqPe64E52n3CY6RrgtHb5WDqZ3eNxBf63Ln4EQiq2EGLk2Rrt1F14",
  "key21": "5ExghsWWFq1y6jgW3EdqX5bXsbLSahr27UT1qzNfrStSNq2eYpGVZtQa6TqZWQVXj17qt8ub7nNsjLCrGv6uaiNM",
  "key22": "3ne19dGVrCjUXopt65DmXnRQYvGYvXVhUbQWmQSFyaP2gXQhEajc5wVgZ2CWmfzKY9FU9FEUksg3KatUUjgjPC5S",
  "key23": "2uh4QCTxyKsQ1psXx1sejBwWJbVhCmdMpgRtDR7wEXKZaM1dFPKsEuMQCjLhv9W8QMFRLquhf6wHE97MTELSDooR",
  "key24": "3HcGefTr4r3hHbncyRUuJgVGnaVtpBaGiKmHi3u5QTaZLpkwD4kAirnLEoGe48KAgtXh46m33nq3irwj4MQU7cZw",
  "key25": "Hj7zaJHtMM2pegZycSAAMTGrGc14FzS8vumHEdc43EhYyRYXRHJkXmYG3kUwS1WCpahysycprdd1Wk2Rm1PqoaA",
  "key26": "eYNSvNe7aqSSbzW9x35JUo4mmd1vhH8P2zxCR4eb3PDxPEoSGtWzsEetK8tu1eN3RevrMiUhA1LeYNJYRdyzkNw",
  "key27": "3yLSShpahKPuQhudxiWYZi6fxFXHYXqmPSXMEDJzXmNDp8iEQX8C769pFHvd4sUy4yDs67fnJA9FbhYepF8U8h22",
  "key28": "4nVxM12PBZ1xTShqQtyH7vcuZGJaYU6UjfMKxT2s4AyZ1owgaZQ5Tk38grsFVxcZMDHyQTRuTscHny5oE73Lk94M",
  "key29": "2bL9xoZrFkC1MWMzdyoQBb2UB7gbKRDiMVebNjkKsGLJuVNdMd7bH31WtG2mh1n4tt8NqpqZTngCTx7Yw4d5h1ZR",
  "key30": "46SXKPTjFvqkvmwL92efpghjfXbFdeFmwPPSWrdFoHvMijCRnozxsM7NGTLdudATsZVoVgz42PqNpbGRJ8B6ivSQ",
  "key31": "BKMub2G8PG8M2ndznGuH2HAXhFJtxihdXrX4iXsDfCgkbNsGehRmKNibCV58PNm3JwBFwdWQCHhJQFM9DynVM8x",
  "key32": "39RPZNYaGZi2E6xBZuhmFj6o2UWx8G4vPgLXKaKhvXQzhx4UP29BGywLD2tEBbBELRMh5syUQSev6BqP33bwMBZE",
  "key33": "G89svZkRzDyhQAQ8ye7uVTryzemvq6N49KXrWeERT1jMQjPGyZFABXA69GLChsF3ooMcdMWNN4n3V8gy9BKhSgu"
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
