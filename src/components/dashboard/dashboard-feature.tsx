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
    "v6zwnTgBe9ooFxRcfs8DtXrhuuiL3cPftbzJkkMbRKYXdn66NEroihGUavRAXrSQmfdhhhmVPsenC2fFCYubhm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjMJFCJwaC6Ut6LVxkX3ST45EEsZmicVq4aUn9zL6MGYJqCUE4kxQYzbckiWwKHSDSntGtysUykn98TpkUudZYd",
  "key1": "Ywu4D6QCeBb6psVUAHsC8N9bCBYKC8Wr7EvfEkkxJ6oamQqNeTnFmxqy5iDihRsHTmi5QeLBRgLHPJBFt6APxtf",
  "key2": "4mxRD7eJu5zCQFgxShR5h5rKFF7xQYvJRe8PKjkFifmeBnYqzafP9FMuVexQMzuWhbMNaRpAuNUcmFBNcXAZAsjh",
  "key3": "3GkLPtdnZXHH7t78gwbZn4Wzt8xTwXY5dGet4rWTkAwnsFVYhTe1RJi9HXiDmqvRFFsQPsiRbJJ6LBZL2urA7iBQ",
  "key4": "3u1f8sMK5QqDbGBPkjTYVWrXWYpBH25KNnHUq4raqbtTn2bfkRtesVUPdmcLiGZ7yWbzMpCdkehSZDC9Qa8JaUaQ",
  "key5": "5iPCALLBbUfj4a8YahgCTK95kKt3UpeV5YC7Gx7LNL4zovdepgZcQ1BrgvnfYbD4tn3bhiM6KXc5nqtCfRhcMmhC",
  "key6": "2vz4JfhiHSFAvShJosqDDkkRE48twmMUpvufWRkYvnooazBp3k1DZEFr3sMtd4FzqcCvDDoMiEUFnpXscYq5TwhH",
  "key7": "4wjuV4utmhgktcEZt23wipjn1JAf9MxsFDAj54mHWwVFiPrTnGDyKpmhq1VETVvAVSwBn2pAxaidERSjxUGemHqu",
  "key8": "3WbkMBftKCmoP9NarBhZtfFtjXLQaxNt8NK8K1c69Y7FC7mBZ4QcNU12ScBfy3uKoSfertSbJtKktLs58mvyNQyq",
  "key9": "3bMXTET4ytP2rHRo98VeVDAvnhFFyHTC6KmPgx4dYTsbeoz3gwAHcHivoqWYcfj7kk3eTuqV37K7gZ4Yrup1maye",
  "key10": "2vZgUEby3ZT1HSwwtfyLFMCB1stakp5eie4vsWnUjwxGVLW25AhxdvU9EGauExiW1FoCb5R69eTwt3cKrBdiTLWu",
  "key11": "4GVqrgcpvDNGfAWTMVKR6JSPEbkY2dnHNAbSMLytedVprxZbfzwC7XJuQz4fHQd1pCNywgL4E4WFzTTkaqgbLNxL",
  "key12": "3RPDKq9s2U9VEbphjct16bhhcTBhp7QZnaf5kcVKChRJJjFPLSxuQP1hLd44wsuj4JmowyzBsJqrwKuTkZNx18VB",
  "key13": "4s7ApoRQ43Gj2GWZucQcoTYhW4QvJfrx6SYEepLY6whCvCWa6qZpqMcAAaKa1LSz7PaQa4eMw7PJhD95VDH2TGPG",
  "key14": "vXageeSRVRWgntsUgsxoTXZiXbCdop1AMf9CHA6Xm4aiMKzwynWvxckrDoy4R3SvQtYvSVr22UCiAkF94J7pQFH",
  "key15": "22AGfdoykZjhReVoF7xG5uzxcxHrtY3zSSzjjUF3PG8kbFbBbt2f8HUwfKUiaJYeJvNrcwibFXt5DeDKVrPs5U3R",
  "key16": "2CmWwyEU1neo3KMsDEizCJ1rHB5buRKaGjxC7TM3qThDJRCNVqpsnXB2WJorboPywNomyV4BXG9XbFzwiW9qQ4Bb",
  "key17": "4HEGoGYhYG2goY47WKPE6CeLQHiGnjYjoEdZAW1TtKBWEWebvZFGttbDgj79m38KnEB6fxJsMcxFdPVAny8nVGZV",
  "key18": "4oD6AgkG5JJg1NmDguRUWvZZdCAiUZXXLN2sDB6dLQUJFV7PWTk4ru5nHyy9U3jreP6aa8uvsu9xegRND2e1WLvv",
  "key19": "2sMy3u1FLFTPxaw1gHBYGAiunUgq116FvynB7QxSxENudsxUP6QqYwTWdkoi6PKZCtpLGkd4E3Rcik7Mh8H8Hdhj",
  "key20": "3fS4hGeZp5QesjyunCJfqoShNuGy2DsfXiXYHcccKj23trrPH3PL7Rkwg1w3Vs6QDsZnWPa1zdpRnU19XqSmz1mc",
  "key21": "31XGtLUULF4eRubUYZcbydyxdTJf4Wt3LCZ9FqPQTUQPySvktmyGBQvzvP36kNFE65zvSHTKoZDuzwRSYzQfaHDv",
  "key22": "3eGFucQX54L6h4hXJtUiUpyqWqY1cAk1MRf9gwuADUxEewcoPZzptkhX4njLKjhY67CXiu4vsqQMnBCUDQtoGXZ5",
  "key23": "2fZ8Lnwr8QPGPjq6RpKXXdaQhcwmaJ4YyLoG9sxtSYBv65o6HeEEKNTXHzC6wTK4yBVApQbRi7gLMNRYm1r7zzGX",
  "key24": "3VWP39L73KREarEADKNjHVAfBRcH8r7ZBFoJp1Hm43sgHjKRcJLd9DCtiRm8LMMmMGeQGcDSBN35mpBRRMmKjAda",
  "key25": "22xgtGvBeZpAQGVwg6nJwAczeZhRTW52hD5ia79STsmMv4hTHPH1tyLXfsCPE72NaRRfZa1eZ3zWurAmcTkKftaH",
  "key26": "59KKmQi7NnzfyPDJSe7WZGLuA4iigQYnM2462bZZYXFtwJrn3zCjJJHmNuGXaXn5p9SePCTS1yZeArWDoDhNp8qJ",
  "key27": "2NLcFeRFCnDWLBXAQpgDbyhUhoZwobAHrj6WKkM4nvRbrF1jKvo5q9S6WkPbVNMK8t1XYkCVgAPMsncML2WNYQZz",
  "key28": "4QxFK6HqNkCEq7qAVXDZ9QSQZbCiUrAKcZVGXZibzoVSFPhva4k7abAneWKCqW9im3gbx5pxfFGYoqRrYgBNhe7J",
  "key29": "5EHxfww1K9kLKp2ej2NaTH9RvcVFRaKqpoSrTLhapQEPz5pkCFK8EEHb294eSDYfDYh1v6BSxwwYVKyxNdRipdB1",
  "key30": "5foHYo2sCurg4PWMv3JgvNTdJdxhxPs64seL9EftSG8GFXHp6YXe5gLFvJKAJH2iBG9pTUk3X29V5usEdTx7Yaj1",
  "key31": "3gjx86NtzSLwFE4Uj9ZphsKDaskQPem7jLR7YnzJ1NAtqtMD9G7eCutin1ts3EVvenURBbZzZs6RAsy36qwbEN8P",
  "key32": "kEVxABFTbnbZrdHkTz4yFofuEjxa7eAPbcScJDhQM2AW7kVdBr94HqpKjQVp6WjgrX3idQjhfLKGXTmnvovH4Ea",
  "key33": "4MJucoyveepXf8x5xVmp3fwEqzXXbcLEWT5ezWPwKzPj44i5Hmj4XtafCJ2mMUCLKu6Vt5W5pog9Miyv68db2Eym",
  "key34": "41yTpVmpx2bR1TSBtRD7mZKDmczr4JjexbL26nUoMJYBugTazH8Ta76GKeQKDEUNgXSTWBxBRnnSFM85UwtikvLc"
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
