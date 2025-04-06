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
    "tQmtJEWoFVxY5CtP4VyWTPZkQYCANHrcdMtJRKfVA5EUDAp95RyroEjPmTkGhTdSUq9aG6hPZY4zV1i2ujG5Tac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XLpxS1tUA3KKuMLi3ZsSJ9fuwg9SAiudz34SuXCNAzwax52Y86i51hP4T9iebm6kVbPad2xBThX2bQAgyGyF5V7",
  "key1": "5gNz8kR7NuAFxYKjF1RAiJYyVNtepWu6kRweKZoNkVTQMrY272NfJbfoEdHDj9R547AcD4vJLcu1TLtdzrz9oLwA",
  "key2": "wddH85dpf3VWfCLjL5XCibWCZj49DQFD6EcKbmTx18ZUcpjW1fwsNjU5CXdwaVjBoi4jsCFuQnbz3bpMusmopYK",
  "key3": "4mv2ZakNyPRCu9BuKQrk5fo8s9uTGHQbBevfYix6UrGHNKWMkjqr4SnL1MctsHZGyF633eu98NBbNpaMMeuohWEb",
  "key4": "4F9ZUZB7TgE72aQgiJL9CBTdWtfEPwRp9GPJwN1nRvBadRYYrCzRL1ARg7cEGJtjwg9jwqoduMj9ufCFKGTf2po4",
  "key5": "5krBYR5w3a3aKZZCBfzYSkwomGbrsJHq3S9RD97KS2vHX8tVk5ob7qDu8cAXubY4YBGA19gsyP6rMysRNhKiHSZR",
  "key6": "5Pw28gs1FV73LHWbXpyMEJ5FtXBHxZ3yjVW4dRWjjr3GA8QQ1gAEgq3Kmy2DcSSG3xfVoqR8qp5WmPHHgXPzcqER",
  "key7": "5HHojs4DDu2BAL2VMMerazPH7zuS8MwDJjuDJtpnBhGxV1AaNm9HnMjE7nPTW96FZ5JYX13KHB7v8dPRwRCuGSzv",
  "key8": "3DfbU4NmYXekA6yc384ZZW8XPPFkUfcsP8L6ySBQpLjEmCRruttGo2VQ9geTYApTSx9JxmwWLwx3tgDyUCV3VfBp",
  "key9": "z43Qzi2bPKbFfDvQyj7pKzq8LKETkHcwUBfhjF7D55ow2YwtyxfcQsUjjTD2hW5KUejViiLAqtxmkogpA2SPVDJ",
  "key10": "5bu3KPBbnZznZsA7BNWCoeASNmJRmtpwyye3hZ7dkXibhRt4JVJwayfre68mwJcQBmFnSWd7F72TXveuShNkDot",
  "key11": "2uh41wdtkxtXoQ6b5iSZwvsxjpMX4xsH3qX6Pafj1DR7M5Z85J6rncfknz5yLHCCxFMgrLX8FugHikHePjqz9fYt",
  "key12": "qDLkTrCw7dVLXEfwmTNRn9tWJ9X3BrXK73ZJWzZZhASYxNefy1rZJpsruzsPcztPGjobi5otJKzH1uGc15h1k7r",
  "key13": "4Qtno6af4E4R2KJFcHr42keC6Anmt83epo3PKA8YDvZ9KZdsbZyL46EY998K4dMJfymVJwXs4dSYWLJkvqZCs3Zu",
  "key14": "3xob3zsmBxTKJ4GQd4fEuicwFehorqH44i1jhyQkDPDh2AAYLVis2sd4J4VWSTpufzpy2CEwAZtgHHDeE472hD5K",
  "key15": "3tnZvHsdUYNzn8V4wBRg7jmumYeJ9xeAPDt5dP3KnMFxrJTTd91J84FjK3v5437sab7FiChrKRMuXMXyyKJtRWHF",
  "key16": "2hQQF9rhQjEbc4qfJcjxVY5hbfNVZf19w2x1evgTprfcmyfku8LHN2WxacXy2AibD6FhzAVhV3Ckjg3iYfmYy7t5",
  "key17": "4ybqz1NXTRoKijUCnKj3od9WKjMCJv4NEbUP9c1ByxHZpijQSXN5VNyKMLd4F573p5KeAupsMcYM4NZfLLT3MQwq",
  "key18": "5Jw21n1m2PAdKCn1uifNJtwLZhTwkjqLKpMqtxygNCNBjGjJXnnCiZchuuSUe4FEsYPrpsKLjVvHkJdgouFWtHrx",
  "key19": "WxgmeUvCDPi46JxmqbE8rSBCXEMkHgwH4mK8DbbFzVWfAZcVYsRg2hb5wtRELKVvSCHXCyAxCJQLfUSAkyFswcv",
  "key20": "3fCC2NKjYzork6NnS4uhayx7p19JYiVJUNd4Y74NCV284gzgv71ABKtgkeN7hQk9MxoCTeWYHgDC2NhWYHaYdiZb",
  "key21": "3UxzcDhaQPQPE8QSLA3sKUU9NKxRrYQQqg1i2m3XKpQ3pmDt78MAFfFHg13NyQ4muxSwQny6LRwPusysLoqZP4zB",
  "key22": "R6CXsqtDA8SBVfHt5zZ7xAsDWDuC4V96nDcGe28U4rQK7rVwEYup9T65HRz7NavvGg3EjioTwePH9eDExTQtsvK",
  "key23": "4ewSCgPT77mxZskGA1zDq8vVbwwUfa8SSTxkKm4xfP2DKQaSGsz9hxjiL5JVEiuAJ3CX8q8wg7YecAoQYkDjTFu5",
  "key24": "3WQ9fJrQYyxAtpsoSgYx6zcfdDF4k6n5qwijjJozwC1DVVpZZvczwscGSiM4HWQUW4frs1Hb9EXCuCGiy4UQJ9Cz",
  "key25": "uCXivdGtBx7rf7WhxaY3C9D1gjcKUxRA4koqwrpsi9N1GwFuGd9q7Ch4BuFDuQbypAryS8sswwobiGYsjYq2MuF",
  "key26": "4xx23u6jo38pT2BUKqRCLgR29cCUzyNsrP7UiwDTzhG8pSpq38rLZJooWVZWm9q1Pf1WuSF6jSZFmbQPuRTvr5Ze",
  "key27": "4WQmdktiSfPU4WfwjuX1sepzsszKVe1hCbP84HpAJ5UJp2CChQpjiraoaZzc8uu5E3Gtfm2cTf3qmADyNoUjPD75",
  "key28": "3hShG86c3SLbfsYiM3Rb8C4pHbTerFofWnNvA98B4HHHTaJb86uhoAPcDHzhWmmcdmywbU92LRnoAybrKK2aytnd",
  "key29": "5AkcERGfDAmbjTMW2BaF7zjNS8vPvBXB2aTtSN86uaYeCB6CkKwYjo7q7dPsAoCfcgeUYrdhafJiikpEvXdvvnGV",
  "key30": "56RYDqtnHUwYQaFmv5oB4dREbDCStjCp5xTzEeQUChhn5LXPLErH1hdN1hMCNU1RpFRezcScvdGDbdtX9ePBhZKi",
  "key31": "3aVK4LbbkiWSnBibZh3LwHw6tU18dsPwtojkFYaKmQuC5SEndH6yRUh5chfK3HYgVqLMEze2p8iyJGNCWc2j5uZT"
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
