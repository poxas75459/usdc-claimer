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
    "4Uw6MafYhcNjgWuYPHkBCXLV9GW9Wsj3BXCFeidaVcLWr5wSMj3rDfd7HANYexSAi3YjYejnCVkCppDMvkN2MuEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TofevioGUGLTRqtZHnfxv3ozDJq1qHdbMfggBVmFHuVrAbdtVYf1UeGUYG4RiSwXozqGBBqcyzrx1UgeThZHHBN",
  "key1": "568CbCXPPYFwieJMqGJjV33ubzGYfWToxufqyP1wnNrfjnRnybCxoJYk8j6gWurMa1WqggSFoXJyfEPoFmsYbFZc",
  "key2": "22KN6sHhMMLnJB7efg2qUMeaRbN9Y4QKbGM74h14CeLBEhELeck5oCdqCjMF8SjTJCtpJQ7QSwfheJ6CsQB3xMZv",
  "key3": "4TzepHojLsyRG6Jf84MVuveEKBZdoKJ9mLQmoC1XBFb4hmDK3YFDx5HC2agZpnMJsd2ETwjLfwAgYJHs4u9gSCWK",
  "key4": "FQgm2TbVNgGzuhreZdGSWfYfC8V8BKtLr1YBw2ZQetc7uExfiNdR1tNCfrYsgTkrYToKe7dF96ZKRJpdrA11euB",
  "key5": "5vqBCN9GiN5JTeWYTFKi1C2bAKLhPid7cJNdurQYdQzBH3qubmxxYmoHokrW3SAXzzmEquZTA41wqMkA5yYK3M6T",
  "key6": "3BEEWULMr2ommtJuWS5VuRKbJqbxAMmB44C2CvktqqD5EAs6G4UNNMvayRDv6QNKLvrjyBRkxna6NmZ5anVVnPk7",
  "key7": "2NDQZBRVzuyg9T88DC3NWHw31HWWwPo3uK6X4Bn9Y53UMXQxT2kk7v1cDwqKJGrc5yovf3E8VubpV2avmmtLoEU",
  "key8": "5ZjYJgc3ivmNMZTHkZG47VpN8XJ3g7wBuXMrWqnZrmLsZ2HAypzBZsU52GgHPY2hHrigm1f99GTUe5i1LV4pMJPN",
  "key9": "4rZD59AXyLxbnDtxZwQ7wghaQPDWdgHb7EyAsPyJTHjbZw7rG5teznWmHghmUqPoQzaU96nSiVBDgyHVNA5jBNJA",
  "key10": "5haKwyCDvdDar5ejp9VhbzqQ7C2CZVqVZ5mgJ8x4KzgGusZvkpW8ULM4NsMyAwDuXXkofHvjJ7LKoymRsLJ4DTSh",
  "key11": "4kL8Dp99t2sahKAwFV4fcuTN8prYRpsNfjzH6H3PtSUkfuoSfJ5KgCHQmcSHf8sMo6rNrZexPhP363tyzijG3Wda",
  "key12": "2waTegJDBUsBCSbuF9G5JwAXgWdsimKP6F5MkoLpS4EaoUF1SBdLKNemEiSpKaT4dmujS6smY1cECacHR9nLkXjk",
  "key13": "66qFJiRhNTCVPg9q8WyzDwsyD41dZQMcB3Y4ZaYwNW9Zf4S4KBwfBbqDENXBbtkLkkiSp5SgzSbZHKgwSP7h6Pen",
  "key14": "3CVJRmiPvYD7fs27pPD7sCaPAi9pF8aPrtajmZ1CLjZsKTbEWhmhePHWcT6VXj4HWkviSqNRWNU2tbQnYQhZmFua",
  "key15": "4U6JJu8gTJLcbNga27nokSUT6HgKFDbQGZMDBqYywgKHw91YXKatD8urkBp9Zyn6RsUdD5XisamSVEu73LuJaTZx",
  "key16": "2QLFfL9BCjPYtBgJxntwkHBFTVg7VfXMN1UXLiCcos5z2rjiy54aaazBGTusNQc99nN1RbgwyNKMMJiTaeZpNKbZ",
  "key17": "42erGFtkrptf5Gm82KX2BCwCy8vnmZuGHUzrkVRU3GrG5jH8V3fNugTksMFf6ixWDUrEs7UBb6bUvvq6CDCrz6mz",
  "key18": "4b3thRUvxXU1TBiwnHvBwTwKBu8bDve9J84TP6vp9ojH9ijRaeKVQBa3xMcsozLkfydhYNDBhwGUg8YxyUSfxVud",
  "key19": "35eWAHR4mqikSzHyPsNjhdkzFmifHrQPRWTFg3feBe8yUBfUfZasST6HTbo3xmpNWAeLqm4oPUGRkD9KZWD41QNc",
  "key20": "Ah4vmigT7xdW8fbkgN8qSUDpjLqmwEcPunRS18sSUHxrxSCeb9h31w5in2z9znp2JCfeg23fYaUfHf5PFRxpgGh",
  "key21": "4zh5mhN5BgNyXTWNeX28EiC8QGSDbdjzWeQ683tFu9uBkTnHAs3E91A9uyzGU1CxvdWDNpiGbWgMEb6TWweRXVGP",
  "key22": "3Abx1byo3YVZKo9KoJCt4iDfPYLfEZiYCNUVNZCofJpAbEuWsBaN9S1KMm2EYjUZjiR5aQF6AzioeduudAikwzaN",
  "key23": "5UvF4QufNTwFNY8mWMvfcC1cfZLEkUHPZJrPWaiFmKkDYBoYhN6kXVn3xJ2TBGS1YaxpeukeHBerZJFGnmBf7RzQ",
  "key24": "5mp7YaZbY6mFXigUyDXNwmWTD7kvDoF6THwCnQTGMH54kUom3tWwqNTgH6bD7NBMqeeSqiYadByxeLMqU4GWiRVM",
  "key25": "5SizqFtbcnKX6TLtf5Eo2zvLx8KnhQ7bSBZHArdYe7QZeJngSATtYdyXEbZgAV9DahRCCATgrhcG7hA96WJx8eez",
  "key26": "25awXd4m1fVSZ4t3Qj7ECpcycqRQS89KdNUqLnqGKCpDfPTobUriiydBEtKTHS2dhGBaPQdUSXLLadYnTj1RNM2F",
  "key27": "2zhes2jeJvQLSgRdfgizNGrsejXgPDdbd7rMfVBp2F8WZf3P8Sqq2gMGA4fAGW8zKEN2VhR36FYgD45shqxKjCbs",
  "key28": "496pNa7R3c2MXixnHvkcEGRqdTZssPysBDNzsuXb8b4rnM7wiCMx5vsyN9z4byPCPLMoBXjsSArw6JNnRLo5spKX",
  "key29": "4oNWBKuWhTDnsVoFQVa2WgaFRf5N9vusTjwYYXbCWohJU6cJu4dieNDR9bYhUyuhrbfLhyXRDZbuC9JoBzFtmjzU",
  "key30": "3t1oPuXVVLc5vvfbhn7nivVJz5ZawYojcCp2vnW55Z574vUKGnHATiXmx8iJNdESaryttJG3Yq5X8RB9g21kxUhh"
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
