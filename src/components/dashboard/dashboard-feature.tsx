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
    "ACzp27Cs79a7TmSxKm4Kmkxmw9so8v9dveVtN8BYNe6212ndJgrcr6PjNfShVyAqk7PRDfPaTYBhFwqeXCkCiaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RzjqZoDWYwpHzvCaPrYtCRh3tEgN1CqGTr2jomGzWmLWUS1ZqbfvLP4WiMkFNihfJiM7wmoECCh6xGvGV6vfs9m",
  "key1": "3Eu5KD7bDS15PwXzG4dJKJiw2eGiVjnxSCD5e8XkC7pN2iCf4v42PuXG1BQGrpZKghoMMABQq6HUMt8VMJkh5wFM",
  "key2": "5icXGoZbj8epouwCUf1YumyvXjsjuhbTYDy7kRy5fJh4NB2k2C2Lt8pmWxtRRguKessCB8UYvwe8w3d3kd1qx6MD",
  "key3": "3Vu6AcoL6aBj2j4NyuhCNUcMXKZ2Z5fvGvwJdF9YuRWk1E1ZoQPPxx33iqgX2b4nCdmHB5W8EyUqW3bAedxSi74b",
  "key4": "67EfNNKGRkuRQxJwL5onHNp3b71uqZnXQ8twVhs9kkJbDtMaYDZ3RYpBNxauhqsr8pFhpwC2KZZV1B4G6RTHsCLa",
  "key5": "2SZNDG2SVdkapUPzZpmuHgwhqpDicRnG8oze4MgsXvXs9b72E4W3T7vKTuZH7vERDTuLofYbkAHREnBfgb15AR1x",
  "key6": "4UoR2JdKDqcEyqsVSjhHJEFabw5dhBfHW1J4qC46uQ9oBiSjnqtELDaaXc4N17maAA9BdKFh8xDVCdTG3SzjobhR",
  "key7": "34ofYaobVtas58s98E93r7YChzdEAxmCMJ8gz67gRLv5sRNTGkMtJ5Pd7kCiW3YsDb8PmERa83nRHL7EQSkMmMiX",
  "key8": "3EESxTMgorAP5FP7XbofmJVUd35srcUvQy2EQQkNPHpBXAKLMnSJVeTYuoLDAFKhCe2f8tWuGBP7SfQxaGpGhyhF",
  "key9": "2m1LmVU3qJw5WkeQCwMEy7nKVYKeD4ayNyPBPvfukVKJcKF11s7FWkDVa8bHAd1J2fKRXtHrSDafJf8wo1J8TT1c",
  "key10": "3q93AHPUwJHxAjH93HEfjvgBJQyATMoUR44781Fynfh1ysE6otAsaNAMePK9YVYsPVbZXnvv3x5hvp9Jgtng55uD",
  "key11": "4h7ge2u48yPUDnRtsQ6cn2x3qK2FsU2iZZ5FR8bx3BPqi1qP4sXHokiYdNbvqfojczd3RaPvrXvcCLmaNE29GqTH",
  "key12": "45whdZFd2URNugsrBy7yJfqvTvjShX21oX88Wq4u5JwQhyJBoPzA8ckRDi3czzpKZj9T5MaRPaTH8eCRUPxkSDkG",
  "key13": "TmM9F3CDreJhtu6HzFkXQvLq85vJQihvuTgc3hojGncssUJFxCzLTuirJUdfimkDWC1cKp3GC4LXsEGHk1jw5hB",
  "key14": "3vqbcyf8w8kKF8Pyg72wknbQwToj8zBJ7azm7WekxqJcyvMhYpsjBTdxjXZUbMSDRaKFpBiCSL78yhmf6UQjYvDh",
  "key15": "3iyxXYCEh8KAq1kwDTkQJgxtJHE1XfzdruE5tbPJ9P6MGA7wvAkhMraiP9jy5jyPSTEJcs1qyugHAERJ66nKTjTr",
  "key16": "3PAbURoGtfj9B8JX4Y5iEM3Kv6SDg1WbBvhu7wA9kWM4N3xK61VtxYAQmotEdpF9sciHEPzykjG8UXndU47UXTkc",
  "key17": "4Q9Dfi8MHN3Qmn5GL3Q63XM6CvEdJzhBRusqk5w6dpFShGLZJAg3aDG5p9DkL9rF3Q612wwnyY7LtotkcB8zT4yX",
  "key18": "21BEfaATSmqsneusH3ePSDavKGHJ5oAkN4QGcrQSrUhuZM8st39W3NKs6uLAyq7Qua4uecBHjgt65cCKaPX5QNGU",
  "key19": "2bFRJtDcgCoMcvmUoXXVpUWbAqFPCnB98Pzju4cQiXwfu7oZaCdjJiYUhcjJtiVPJqFYNSchbHZpxy7fSGJSHAqK",
  "key20": "TvtUUGLBLpKHmHu4UHGsdzQTAaxedfncrTJiFkz1XCH7hPyuzrXwA3HrbtxSuDveHMscJfHjvRFJpGavnPrPmtV",
  "key21": "5tGBBcQzEBkiZuwBpEH2nSC7oJzEC6CS9QhqxAiRudkDafMZrSXonRJ7cpe3oKcwEXwPHJdqK3962KVv1CzzHd9F",
  "key22": "53G9aLJqBrSqVd8b761XSkUvejsYZ5jaW6kEQQfpbvun6uiTPZzPGRYAWMWPDBfpP8nJDaLuFwh91vMktJ5VrdEh",
  "key23": "5U5psFYxopkjKAdvE7shifUvFvx8V7xkw6MJbGKkhEG5tiEvxyign8zGwxtkHcXNJtCMoMtA4cMHZ3dqYc2r7yWm",
  "key24": "m35Yx42qaegqMLZNePZaxC3N5YxaFKi4Za4a1MSSV5QGn8pJRtV5wo5xUJt2APXC1riqqhfcsCboKhnGXewPa1N",
  "key25": "2D4Af5Nvco7AFqLGRjdRrfRu6cEoVMmYJSxxtKHC8KrgjkDZg5LDwndNyZGGSPoyTtPHSpj6inpZRe98ABiFoE9T",
  "key26": "4LieFGT3Q7Z1WNGnvuS9ECqYLXAHbiPSnaR2fu9ZsYompyGDuq2jabPv7caR7ac3jSLxx6i8ySrf1awuySKW9FYB",
  "key27": "2CNaw3cTvPzwL7iu2gE7n3vSFE8LoUqvpkgVYyPQvo3Sce84R6oa9qRDfzpe5nj7d4YMfgKrBM4RkV45EJ63ikCo",
  "key28": "4kiD2PCUZ6bfNCMqvYCpK5grXiyA5Q9qzDieDSRGBBv5eK3F1iqS2ggvGgF8Yvk1Co7S3AeXDpwQt8DnSQ7sA9ku",
  "key29": "2mxQrHA7Zn37toYE1N8RmAMJ5jg3wtJqPe3AkJiBzR1GZuftWcV1GJ26iYyG6bsaYzoXRKtNgpN6d7JNNYC17gkF",
  "key30": "sGAULtBVMjP8V5jCKeteTyvDwj3ThVM8AjT5S9c88WzX9kwXc823o9g6i83EqA32v66kQoHowNJ3SpkzMbZ1rv6",
  "key31": "24dy7HEuoBohVC7CK3iRMZTCRt6KTGcMFaj18cBEJ4i2vmBMxV9o3epVqckGaqCrNMZWvvyZCBhm66f4qivEVpSm",
  "key32": "62ioiyWgYKfaQFppSaiXwJEpUVPtigQ1yaVxnujcwkk4gAo6s51P9DR7KY5NqWpKKGwiyF748EasHusfeyNRh6NX",
  "key33": "4kHoDQs5rvckKL8XgUYWRQdtqfuaNRGbppHjuMPsqatKxQcWXZ8fAc66xAr6EVjEXqGi9xGFFDwxMdj3kAqQhbBS"
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
