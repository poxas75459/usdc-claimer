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
    "2Pu4PhG6YdfFZ9SRZomDCdm9L4sR1jJn7GWGsx5uCYSZPAhTmFRXEUPU7S8oueSMS9kd388V8kZrPe5p8PGqo4c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpMArTAQddL2VU1aBZxPXZ3fwAbULprzLsgz8x4aixmspSqhtb4nzD4Y9fuhKneRDh6LTTHm45ssqJdz4PQuzNd",
  "key1": "4aCxRVgzse6Ex38thDP6d1agWcRSanCKwwBWdbKSj2FZcw2CVs6Xi4idsfnGFh7GxCjVcCRTbJZELHTBjzGNfAfc",
  "key2": "5maWr7sovwwg9NDK94jdKKhgGsfS2Jvw5stMn9enZCimNbizEsEZhuGSNxAXoq9Hcna6TPrSeXEL2BtSFgQvevPB",
  "key3": "55GBu85eVv6cFTuRrvd7mkyuc45rypN9pW7QajBGEyLF5YJFkzetgnKk5aRBHbeec3X2xYv8b3C9u69qNA6BbgnT",
  "key4": "5LwHqjj4YJy1ju5wr8AtbvaDPqW2pej3okDRWwMkxxnMWPGqx1nvQ7WgFtz8qMXN4MzsiriFf4Kz84H44nY3w6u2",
  "key5": "5gQBWapBPQWnfodm9LEtvXqFNPo4bHEWxFckzyif6ExdLDS68nzfkEtZG5NhTgac2uTzsoWwKqVTWpP82CYnZccM",
  "key6": "5SLvJV4yKZ8wX7doMpVBjQPKj7zcsb5RaJ7AqGUNzRNCqN4yva2Hffuw3wnjmKYPtjZWUrtKWLpgTvsm6jr4pvB1",
  "key7": "3U351Y2PP7Kyq75hGuLXZviFmMNDuMrG8e7zwxuP1pm89n2hKHtCfraXe8paS2yVXrGdUvbnxEQDia7CVFmMm7RQ",
  "key8": "3EtySN6tDqz2eHaa39FR2zL71ssTZhLBER9JEthttyJfKL6ugRarpcMUqJwbUm2ipJGGDXNKCEzS2CmZsXUoEh7R",
  "key9": "5wWJcADbgjGuMXEAwrNaY7ZAGiauLhHFZKRmwRJB37gPA32KMyVbwAtQoSAa17hoRcFuvR7Zk8ypPLRGgCPRyACp",
  "key10": "GoUqUDMkpD3F4UzcX4LnCauGECuB4FyVdh5KKKTpbt5rXg6UfcLkeqitKsGbX62NyJuqghKgumYJYbwo675yxky",
  "key11": "2JoqtgL5E1f1Btr43sUW2seDN5pCrhJMCfEfNQhQ7ZYtuzAF7yTcMPL6x9yjcUaiiPQS14VYSBhTx4zFea2EZhps",
  "key12": "jvSpjJxitnYo6YUvsmFKjpZEUx19aiGzv4fP3hXhBsXcyWkQbpjLG1xJP2Ue8urBQMneWD99mGrfUiKV5wuibop",
  "key13": "3ypTDGoCgir9yhPNY73dbL8uMGazPVTfuHAWyJAiyk2RtstqjFj6snoP4fTVCx3VGAyzhg3ihLn4zFDjzjgnLq8i",
  "key14": "9AfDLzvPbN9LnLmEE6zMN84S6tUQeBrjeeu4nw253KL8moJ5P13g9Rgn9rwHhMYGGMKayJDLaWQyrD5hH6tVAaD",
  "key15": "36ER1P23rc1m634fNTZzX26Bj6VUS6pEcYZkUXhf1nj5p3CGRKvDbz91N51Cw1RsxVvn1MCPCv4awTknzTovLgYG",
  "key16": "38Am9ybF6D185eApdpYmuWRQijfEkgudqJnb9CUBz2mVDVgtLeCZBcHdDmrmcy4FTqN6qaUm9M1GiEjxCjHhe3R7",
  "key17": "5pEpf2BszxuQdTSepw74R6zNdfWA1hqTc9cTKk4u3VSw4NhWUYqRYMMg6VtPVogSiYYjrMfLNxkX3kkX3p7VRK3H",
  "key18": "2J6TcPpysMN42TFkq8FQDdrwuumsh6ZEShXyRVvQMpvzyUwWBrkoDBS4u3athoCorAw6FvTPUcTNa7RkTKf9amms",
  "key19": "4jqZG1TvXYsz5Q1hAqm8QELnqcJij11p4QZiHJXJoCZfCvNcgZTyj3NwmRGS8XVBFVamWaggwu6RX5SwRCGj6QAn",
  "key20": "5fnhfMK5aBZC9yMJ4uWUAe2gF8fpSe5PdwMmaKwp3iAZdAnQj8GLSWupVtFqwGzRxkPeBEN1ax4Ucc3rn1DUSNdT",
  "key21": "3md6GL9A3PwFYpw5phWcCUtyatoMxRfBL26QJLqu6v4t3pBoQPwVreJyJUVMQcBqqaZNea1gvuBgsJFpdJ3djgn7",
  "key22": "4bdWuSKjAJYg6noMW1v7DnjbJrLF4jv2QkFKUfaZvwDyhFEiWTXHc95FXP3cRq9ieCvYxqrhnvJAcxnfaN4i84gf",
  "key23": "5fbWbHFY7h2BVTdmBzanEBLkKS2TobRkqE2f4ftJ8oaBy84v5rZK2vJoFMjr2ktdVnaNUUBvYai2mgUiaEMZSzgv",
  "key24": "5roKMzpEeUygFToHG8uaAh3BwWJhBpYT3p9bEoYNs7qXrXG53LLzJoRmRKUwzT9hjvBnVUj1qg92Axf8YEzLKfAK",
  "key25": "3er4yQbNvoaLvgvmNcg8ufhCfjHRbcyv6kCCQgM8ahkWhKWYm3RQvcZHENSjA1zcr4JXUbSd9EJpJTHaAzQF3VAD",
  "key26": "4mmbXck7CxasEfKPxW186MN4Y6MfdceCDMQocckFRfezg8hhyZY3bKCtMLmQos81SZBsSxVSuAeayTJcyCZov8gt",
  "key27": "2gkBT5MDvYoLyQPuBYvNJVwczN4NLH7eAnw6MKzB6BzLAvfAuWfewbiCssLi1PVaMg432eciqTW6LyAQhYZS7CGw",
  "key28": "2BUkvAjQqPtHf9bqsNUwvNhasSMGyuzW5tFa123wdsTykf54T4AWXwq9cQfkq5v1V6fewJXmexKvPCjWchuDsMh6",
  "key29": "4qJytApNZJkaHcnq8eXsnb45wgJaKCmyqKqPRzqiHj8tG66ziD1nkf16SWM1b6Cwimyd7z2reTztDc5dniQiX75Q",
  "key30": "3qvtk4uy8pKp6SaY561cvKDe1kV7qmmoTvYjbnv7mafYyuDYTap5tHnbfwD8hAwpsx1qqtjViBhvDEjBDshdRFrc"
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
