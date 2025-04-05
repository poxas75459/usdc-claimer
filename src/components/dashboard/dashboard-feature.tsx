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
    "ALNULacLtHDmLz5wAjBQZ6pSMrk8vZRY5Fub8kyuBfvHtf9FmKK1DyZadFjA1fZwiEBznFcnLDrjeTFD2KzfYjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddgkhngGaKxvZALFTYjkUg2ZhtpummGmJfpdzLgcr6MzJC6TLuRM1U7GzaHJ7DtgyLF9mRfSwVPgoLoYx72wGip",
  "key1": "51odgqMJkaEX69YyBoqhth4fjhLyVKZi9A5T1updTg9fQGD2jy8df8ViaWQnhGj4qkTgxEYzQHFi6Ud6FYP66YoA",
  "key2": "3X6Kg6eom3cih8QF1RkqznvphVBwAQrhPWJoahKQ4PXZ7Zg19pVkYFoKFk7T6gJEnKcQmbmpiN2TUD5xmHBifMjG",
  "key3": "Z4yYBkTWXpUAfbriM9r93kjdFkxLMYAKqPVoD7fXC1x7BYNLRUrJfk6GFGCKexBU5SHttq3Qn3PzSwTQG1xBf9q",
  "key4": "4UniREgN555m5nhCvzApp87BdgssZKE6M5VdCqGuHtX5tKfhNcaHKdnHrSwz4wakEXSe1MNg9ztnfZpBMz6RSKJ2",
  "key5": "3zAYhrn8aMCUok3fSHq7GeBfWSzfLUULkAXY1xGfrQiwWoMA12TywZXpLz4mFw97HvAJwxTpBf1cFJsFdwR3WGwP",
  "key6": "4JLfXrqhBDsba7ZNvJ54ZvHFaXufj9bX4yue9CkT3pt6xn2FLieQcPg1zZyPA8pBApnH648ozfpo9mnDMdvNkuBF",
  "key7": "659JNEphRt2NWzAydZP7g64kQaTo7H5dzyyYsqRAdUsM73EeGbPWiEXLQvWMWHEfUCfdRwk9RtSPfEjUeXsaHVac",
  "key8": "3z765sARDQimavLfqhGYMAwwmKgtUkk4DhaVTNiexVHamG6epB7kUayNyHAfzfYnTA1HWZnCDNPzyxBfeE4QFEr",
  "key9": "2TCsJ4YnUVuGAV8bK3wWmVCsa9Ypt65TDMDiBruunHjtt1Qz9Wv4jgd8QNtB3bXKFnXZtX85inCHWVD89xFL3p1s",
  "key10": "3uA4UcFyPmASWyPFvYT6kCEV5mNEAL4R68M3RDn6gcDkHf8nDydNqNX8z8vwQ5m31wLyie9GakBhqALet3pfVuxE",
  "key11": "rTtygt8M9x33j5aBUKkbH1uo9y59TrRWhfSbnvQFdYpRJuis1x8Ms21DvV2adiqTqDo1E1M38SQL9iuxhhRuqq7",
  "key12": "2uvv9pnFu3Bja42UvdJSg6R3uYXtajMu7smy5ER9yxktg1XLZJEVqcKHUjpaERQHLWNHb7qamLZcpchJNxPBsXcd",
  "key13": "4iTP4imgq1F8pMomSyXtJbxraQca8N2JMhJhL5aswsKynJFSAPdT4bavCN5G86qt8pdfQ9Yu9ufV9yYYqLLcszhC",
  "key14": "34ZSe3YWgikdWm6Mv554yMsM4h6s8B14rDmKTvZZej9mvTVr4HJ4MfqdukApSzEQhVQUPE2XhRXCABUzRhWAFU8",
  "key15": "oTxDVoWoi9Ms3sdDb5GYA9LMebDMrYvoJWaY5SYG2nEytwBeNqbibMBcze1EUK6R8sbACXfohUiN2axJyf5p3Bn",
  "key16": "BnAcMTfCa3jdQmLTWNBgkgC55hE7ikh3rfxbmXTZicptDSr8zqt3Bp8U2rdmoDe4ke4GjaZqcUPhGdPrjbJYC9u",
  "key17": "5op4NR53WJctdTP8njqHWh8ErEgJoUFW1MZY1hKwHt2vE765gmxRXiVbippnZWqEEtHjok5aRXgHX6R7zmNt1spx",
  "key18": "3vQDEXNaY9bi2YabvvUEscTQZTmN6QvrdtMdDXkrPQ27LrqSTYx9JhC4SKFBj6oJcq1e4Q7Pwd1UWydg7VyS29tm",
  "key19": "38q2UGjnD5t8D9JX8nVkmycKCBRVCFKCiCctUSnJgxQny4djtbrqEzeyEdt4QXJcwKEoxijsbo81bgprkuw18YRf",
  "key20": "5M5tk9kxw38bnn8G7cH3vyEiJ7NXvfKvaDhhRvPSxPB6ePYoufUszqZeYkd6AcvKtm2av3V8qvozz8tkfPTrGqwi",
  "key21": "5i6MA4dkpyfzVg3fs8ST2jaF5nUE9zC7YTD3w8KEbeS5mqGiCTorKuGctA6XBQzQjkEiR3LGTKpSsjsMeAMj6ZtP",
  "key22": "4nMSq23MYZU8i3kxvgDXLB2BD54q16eAo7KzsoHNzRQGuN3jnSRGCo2qGC8ZsS6uhDJh6P747Me38QLSAT4Uaask",
  "key23": "21GohVGvr8Q1cS1a5DdSi5vaR9qjwwMiNw4YteA6wU5D32prsTeQZxdhpAZWaCRAEBKmREkzxemWWBzSEgmp94Y4",
  "key24": "4tapfKTkbYLVezR4qqx1SiEHVYTnwFbAoGqDs4Nvd6GAakDSj8ibL7fzVq2RsWrYJ6wJCtcN3TPtBA3ibp3niThJ",
  "key25": "4GcXrCpAqfSgHQYC1Z6cqspyK2iRx6R5tTXGn8VijRDHNRENT4tPmsXYxhpZdfQnC2uAToJuimmG28egvj5ZGEXr",
  "key26": "5W8B6etvRddPjBsrmLYbLvAN6czzduFyFoTp2wvBazPsHSTHDaMSBVH2KqSLagMKYJ4n9LQacxxxM7rhLvXDvJ68",
  "key27": "8L8p2diJkh16FVbBjy4wG1GdxviFcy3xsL61FZWbpUqywyH4ge2QTvfXFUyi6KHYTYuGgdb37mNtGufTHpBbeqd"
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
