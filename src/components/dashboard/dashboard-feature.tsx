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
    "334kj8LtvM7Z8Ho4ibfycf5gdBBXsvC9nzVV8Dkkst7qoL4jJmKzGoYzUCYz55B7CN4x9czwbqjNtQc2USpyZW5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEMjdi732xN2595huTEzrRrAbgZXrmAvU6zBeSMq4yjnakZVTkQifGx29oT4Y53QUtuFBda7iFVZsyRnGA6NUqC",
  "key1": "3XXJMoKDA3MhY2baBeYL8AYP8N2souDfGuScbMCp2GckPvDX4anCi9uNiUrTRGCfujH5vRyFeNrY4t3xMG1VKQKr",
  "key2": "5RRzRtzeEjGf3uKUXsY675mhmF3JzbGZmrrYDzUm3ZjcUg2RejxzgrGsiXef7ebsV9G9verBxqADPbXgV4pX9kiH",
  "key3": "4sokDvky4D7BYSPVjKnqTXgmuvC9YabKSVtB2JoHqyhq4e8Cj1mTBGrouFmHXUn4FjJgW6pHGPdAt7mGXTDjW53N",
  "key4": "55nsetD5aH8fCgFCDP69BdEidjwk4QSiS8uPvMmaFBHKbreUQYb7J4uNdFySZtuCBb8qDoBckKoJStHBFU7okR13",
  "key5": "2HHoyZNMPK7fqPzfAND26HGovpeNSDaJugeQiN8oUseX7U7B7pWi4WDLDiBERfBhA3tgqWk22jrpjjJ6VNoYUQhd",
  "key6": "P1N1cjoeQ2UZv6gxZkfjHjwHkmtbkcfVyMRCJBtzLxfj2J7V8nRhMmCRccx7jjFp5cyTcDNMS6RXdteiBxmYFVR",
  "key7": "61XD8QRoEJDzvFeNMjz26xvAe1QCB6Qqs2GrbUcq7K1u5z48uLxGRgWnLG6F4Cws1mjFdihiEGexRofTLWGKvx7J",
  "key8": "2fWdCtpRQm5V2RWJgwokEH2tPVUwz3NwuPQCeE8zruzLCGsj72qk3VtwY5ejuNwNTEizoTtw5jkAvrq4EaxUZp7n",
  "key9": "3oKeePwnZm35AiEM4irD2Y7UFUctfuyMXdV1JdTRsqTwHgiTPZUhKFDWV25tqXmpyhV5PSDgRJW5TfbusVveHZpv",
  "key10": "3GgWtTEMgM3U95Dn7eaUaY2WCEh6UWpuLWFpLukNy9u7xxLQfgpT39eeT19A8anfz48rJJfdHpyMKBqDgkKz4Qf3",
  "key11": "5azDXw962w6f4614232to828XUB29DtCfyd3VCCftEwy6Kpax6axMegCZzEPQcK3NaoYCy5ABb9dLNDW639hKtpA",
  "key12": "27JNWCbDMzoMwF1NTgy8Qs8o1wmoTbujfULTzfeaRaF1oc5fDaJMsda6SriwXfhPS8ATkapAjZN85y6ChPR5JGrh",
  "key13": "4NUVG1E93gj2uxvbWkSJX12CN52UVLHgHtJeCQ7D6yEqbwmCuJqTbtJdx6Q4yeT63MafEQhd2nJ4KQXs315qspyT",
  "key14": "bBotRrp9c4TWjk9i1BJK95zpnuFgYkhDCaJ5YwTCp2iuzTmGM5NhVisxRXjHagTXmUe2Xg5KSWtNv7RzTm8TVFY",
  "key15": "4CMTCEUgDoB3KcivdLcGuDZrbi3cmvfuCaBkny8HbyiuTdaEJRMgTfcgeAtfmdS6eEPUJTZGeuURz8xTMuKe1wSb",
  "key16": "4t8iNXFeqbugc2NaCwdMRwtcmQJJZQ6LY6iX8LGVnwQs57GnrVkuCToEMHZ98JfvqCat9qrqYQaUoPzrKkWCVymU",
  "key17": "2AjUkbzfNZ6q39xN993sjxQQZYFszssYwDibXDsktkfaanP8M2bcmE6ggRxCRWAaxAFCuhks84zuQSFsu1c2XNhF",
  "key18": "4jNgjfEuYxQW83sdbaP7dsAhnnpWfXTn1bz9Jh5NtNkEVe6dGgysTiCWPmxhYgkDsfvtJ5v76yjzTfvrhC1FeEtT",
  "key19": "22seNjFKkK2mZgrG2PzJRVsZWAxSiowMJQtes5fWec5MFLbqZpTujSC1UfGersTUBjQTQLQsZaTzc66XgYACHAP1",
  "key20": "kTyLD4R46Vds2EbSUL7jxBxYQjACN2P75doVE9LgkviEjGgxxGFUYj6cvZF5fjerLFE6F76sB6RMm7EwFoaFDiS",
  "key21": "5PREBeRRoS3GxbBsNwk4F87ZziDAitPGSmGnpyy7Ss83tToM2GE5T96kb1kSAQ83QpBxMtgCqpZ58miVcuJtsBu3",
  "key22": "2igpXJpTN6iVzqFFNmPFF5z7xAjsUnUh1gAgfpCeWVLuCG4irjnLXzQusNvy8MUBNBHvPbSoHYhrYcTEB1DGUpXj",
  "key23": "2rJsujUi3bcG4ipoSCog6EQxPFWr5n8E6keKCFB67wy9cpD93WZXLcx7sUxv5v7GzFTBsyqMz35ZoMcZQnNAR2kG",
  "key24": "aPPPvLS8GJjNFC1PiXZnBq6EUi74MVMChPhbUYypybEFetsr18HTsn5thWktuaJcyfX9YzSXQE9kbKm4tnGwttG",
  "key25": "zmwAqsdHhwVLx8WC6vwSVyE2JcebqomYg2EYPpWPccY7xDh5ioEWKed55bDw9s5B11YhoPzXL5mfz3ce8LQ1SN2",
  "key26": "4xzMD9tkdku6Q6k36m6tQA7ksoZJJNwWKv4ZquQQ9dcp3nGPgnemi78jvkSqXQt9kKFy2Y3rLtHjt6cMEE49WPvT",
  "key27": "3Ht356q8NqtJWPWWnwqPQXX2MS51gmz7QAf8VfpAgxkoH8s1bqMsGUSdErtqhR83redHqiURE8KULhN6GjKX3F6M"
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
