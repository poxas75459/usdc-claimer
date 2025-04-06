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
    "2QBSHeZaHeFnmnhbJq69m1eqaVQZHX8zRuoBxzyW9qb5ycRLzYbQNHPP1Lep1FWtPkMDvNm7UFzXUKxDpfvZgJNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NLZzEKze9H6pPo7zeYeeh3Bs38qp5ggKp7fFxBZpkYwbChKvzT7oN1AdUifu5k77GjJdRCbQot64DNjhbuczvA",
  "key1": "n94DW9jwrfHXtGJAw5TB19WyJcqpWV3vei6wTzyDxVYSjEykzxSg3TA7HqBuCRRz5FP3rEZGAGtjR9ugEuW8HxU",
  "key2": "2YrrPJ5XLXiawTPwMeGNZt6KHys8g33HMV77m5TUZvMiA3dd9jvB66e9kmkW3xkjBrrJKT61CERgqMAbJC91itbG",
  "key3": "4gTwddovzi1x3zu7kmixZ4HqgzqjpbVzH3f3rs1jFUTP2qRhjFh6cXj4qpPSKoCHwZs1pSv2f8UXuaGBPQuxFjHN",
  "key4": "2kLpeCCq9BaTyKAgZb95djGyP6PAPL4jz9toPPk2w6d7ShuFgKFckoLyQNDrQBLDnoDVfwD8gLqwqZG3vs3TAZjd",
  "key5": "54EPJVUaqdFNX6Ftsx1zGLS4vBvbesZL59iXmiEZyhVzSA2dFawf2Q1Jcj5BPbragVKxjQTJV51cCXLb4urW5oM2",
  "key6": "3DuB1tVhqbCQFTaYjqS5ymfN7m1oW7PV1myKhuoxBjKaom3rqkt46UyCwn2C3NpbwYhkhxe8dKsqYrgeCsSJjyCU",
  "key7": "WCzCPrDE2SQ81h5T7c7EMwh5EjTC4nyPQRWan1SJi6V5CBy31MNtFG33wqjY3N3tJ6XryzfFwy3Xi3iPykHg8Fp",
  "key8": "4Fzs7P4ZSs33y2LsyrvhiVCVTthLFYFRjgghcQ9i9zifJmFvdMMnR53GBQ4PpCskhC7qSQcYtrMiNu4WNZHDpRXV",
  "key9": "4s1i1pg4YHeVz6Awxk9wkg3KfWU1AeZJvicQTk9Axg8ZTfRjLLJCvMEhkRZL6XAv93wPSwwewMVq5FB5baX534By",
  "key10": "3wqP1gKzLCgaphMuL4c6xXva7WckE46fap1YPPLo7pzi7duSsKRVrpYpmN2wo45brH11H9XUNs4nG8qnbPaF3W6",
  "key11": "3FXPAV3BXgbUy6Y91iW3XRACpheFDaYeJpHvVf72YRDrJBAAj4JmRAJRWfEmPh8bQdjvmUjM7qTxWXJtirNT3uxZ",
  "key12": "2BgTUGj4stUhUkvGzLL81n6ChmwPc9AVgzrqfKNRWnxmXfHCXV9UU7yrNH5dR1sHQeu1LU2HRyZnyYf95hNwZBCg",
  "key13": "5YBmLA5erHj88BGFgsxYtyqtu1xh94jTxvjQ828tYCyPXSp98QmvyyzPNqfjrcCXLzGcSKRRL5WkS4tWF3kbcwLP",
  "key14": "592LEGrNRfC99eVV8CBA1iZXHdrAaDq4bY8aYRfaGiCcr1kpq9vGUxFUUf5Dkw3oXivS1vN2ftWeNYWqEn53BwEk",
  "key15": "2YLdWNJL6kPsHnGHEV5K1nWsAgeQyKAoDpVmyMpaJjT37nWCKVd2QssYoMC9UA5kz2Z7BPZX28Sh8mHWC1yXvEYr",
  "key16": "63gD5Z1uk3fyXPYYvZEccqojdqESMuHYjSfmsL6y8dkMWqwnnj9V8cLRLxbm2zPfNTGbKChDPNbBa4h5nPgMXNNV",
  "key17": "64sAHALCWVYMrDeE7UhXePdY9wM6FYjFoHNBnxprGLuJUshqsa5SSJatWacJxAw5SXKYmDW9HcKupbQPkB8ytjm6",
  "key18": "4W8q6eerbVrZ5JntDcz5XsFKYdW46mr5YifFbP2rWHhFaukRGG9Sn3Am58c22GcSfsgUEteN8p29fAZUsuBp4iSr",
  "key19": "3Sr7jTiFGDJDroXS4ZUwmJ1N8nvoFSTpZxkdU3XGJ21mbwpnzP8HQmu52Tgam4kQqZmiq174fKiwCRXg54JFjCtW",
  "key20": "2uakwpN2cG2xAKcux6ad8K4yHWYDimHNg93Ui9csupi5w6AkeykDPgFDD3KK9WAKtgwx9WERw4b5KEVFAomJkVrV",
  "key21": "4QHM6twLUnJBCW4gzrnc9bEeeW1VBToFUvmtvUL2rcB964PmPjwrmqDbRoNB5MPHaLCqEYHCtSbpvzXVkTWyjQr4",
  "key22": "gT8UYYLwTEhpgcXKEhPe8ucAYHM2udJu2R3uUJDuH2fWFmsrAFhUYD9Ti7cWYn6rzgoN9kZdWmoWho2jLaS5rAC",
  "key23": "gURJdgyrCuX2yU2aq42cWz99fftWzKwXwMJJSTNe17RKryRwEe3QX3GTHThJPMkU7gYkUh9fhRKTEKxTz4F2i2s",
  "key24": "zc96WUyfVzamZggjqmdcvLNmPQXFX6ksRUpRcTuPsTm89CTgMfip52ve2f2HCnvZuBgvKRWgAc1Lmq58qNAA6v5",
  "key25": "2jiCa4TJUBZi5XrzJuigHuBzFSbMFfeK5wHi7zAkC5ryMhjuCn4r63iUwQfUnGYqnVokfDoMnTUf8GtT1MojBiWB",
  "key26": "49wMmv4r9AAjB3bS97TNp5CA88Q25bRZWMUojFGybmJn5JKJKUZLtmozWUxuVX4TtTayuqXubMeWYY4baYFbKAXY",
  "key27": "5cUHyxC7y7rV3bMebMAPAwDFRimNHEZxvpzA7n9VzJxdadMKUtERBUsp295XKvLsZ1ZAEYWnYJwAnDW8SKdc8YPY",
  "key28": "2yci6ut6camUY3Mh2rQdTMJG3z4wkQmxiKXESzGEh1EB8fPju2ws7hZ6HnsErcNsBKWm2DfddYuJZu2TuvWnejPR",
  "key29": "itMgJWwhve23UCArTtW9KdKoqiwby5ZwkF2Rmdr7Zzrsxhmot83YLtcu1QtHNtduBu3gautU5te1YSWJgbgYDvv",
  "key30": "5vAAAnccE66XY59berQ5vwcNKsfJy12RF7p59kb2S8cM8cZJnKAVQaczdYgDCQGEiataFp4JGPJSNm3AgNSNf7VN",
  "key31": "Dz1cKtfYvPrW8Mr57sTxSUB1AtqrY4Bba6mdzVsX2fMQRQWrLXEZLqKsFJnvkzw4ghJc5MFpCuNKAE5xBVuRYAa",
  "key32": "2Zxyejgow5SsjVZa12zYVWpAH5gFBASuku2oqg1TAGHF8kN2YHML3HqMjqo8GfrLC16xvD1TRHZdQiDHV17yTnbV",
  "key33": "oA4TcGhi1ZkZ7b6MaFksHHLRJj7r8sbAxEdZrhCnveXu8qhCUx4DiBzRXCM6gxtHLhJP8rStDRA2gUN8ej1dbVb",
  "key34": "dL3QQRS8fYShg9FkfYq4mHi6dWtQV2TR4PifKgb2ecU41NqKPc96n1EJwL122AgKErwKCa2DdirVdHRGJ5P27sZ",
  "key35": "2LHwXXmPk3mpmK2vdnVrWzE4NgrzEDc7CsF28QXgTxFmSZwEGLHoodupXvgXZDk1yP3GEMgCgU9LRVob3daqkmj3"
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
