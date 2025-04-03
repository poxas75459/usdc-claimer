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
    "5UHFVp1WzYrAr6YoYBDRxg7JtugHGmhEJitEyqrDhhsra1fWhMzf2vS4MubauqUFrYXg7H2RkNcGFS1xMoMagV65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shAMRBvgRdhQ5R2RE7Q1Hiv7PXWetqK5xPMXvCiegEdTtnwHdRWTLxQwhrhz9r3fSUFwhCjvZtJVnbxhwT3ANAk",
  "key1": "5AxvF7J3AFFxCMv5JyeqmaEwxJQxj4bEZzK1JCP9xYX2MrvxWvqQVuoMUgmuGWfALRpdDGRhJ5c8f8DxKr69TYwM",
  "key2": "5E3oGscT54DDt26u1aWT3siSugpTZ3Ncd9aixREeLKnVxuoi9zEca4ohNWkWAUoeqw7RVyMGwK2fkJTnCjMHkyEu",
  "key3": "3BsvJ9Fm78pfVFwB8f89ozEdfe1N6FXC9yo214KsUjnrYgVQP82q2Yr44e2DHQ1TnyLEahPM2wPzD2fmm6NLCCbB",
  "key4": "2Ug1PVq6JzUfwwHxQpQwJibLL7jJEKPH4TeaQcbvMF56JAbBcxPEXFg1kDX5EviiEvYuaPRBoPFb5g4dMCdCamp1",
  "key5": "2vXTfnP7YZFRg48MReDwRCjoeqWkSuCZbH93j2tgn5X5GY2RrMZLFpTdCV5PabYas9xnpaLYFNmSwPzu2eA589Cw",
  "key6": "2nbB2KTxLyh7U1zQR7niafWzx8z78gF1v4WwJjsWTHyZLFeimgE2Hsdiy62gJ7h6qcp9h1Vmb6yYPG35MvhkbqgE",
  "key7": "YtAzNuwadUVVhV1AGTSm1ptdo1BtgTFdXXjzma3snJ8MczrDw4tykdBXZWovLXsPUdGc6wCKZdTqjG3s4PAU5Q6",
  "key8": "5qKYLSE4qZRDqsD3JvFXogrgys5F69G59ejufRxYZ6sj6eE1hWm7ymYUmJ9CZQ24fnvKuacZHJz67ZNmWLckEi5k",
  "key9": "fTn2zdtJNFMHBEvqjhspfL3rRYXBq3bA3h5CSSZciF5vVxxPnj2tYT8KDGmij1eNCgmTkRm9DMXSoWCZvmEw19S",
  "key10": "4HWzDJ6HYm7hH89CUraEMGXMXmpsSiL3WhmTGeLMxQdWDXdM6vBwxfbHFRPFGj9b7UQ4icgiTLHqSutJHjSpcLAY",
  "key11": "4FZJG2ACuEEbrf4DFyboGBNmJMMvSbK8p9GzDHDA1Muw2xW4K46uqb64oFXBg9BSok76tdXhHMA2t7Kbq1utc4eb",
  "key12": "5gHt3UpkWmtWEo43yQhykmvtcau2MXg4v9vjXneyLfhMNK4DHcZuYNMMXnd3TX79GqXbZv79DzYbN1bpZHXBjRve",
  "key13": "cx1P8w5YMLvnWgArmmUN91MWkF614yYbmGMyyHGcmXvHjVaG6surzPCL5VrgZVt7hQbs6Di9DvoHY5Z5pM16ZZE",
  "key14": "3WhQCNzrzfDWjAWuqop6kXW4QBSNa4wyMEhQbDQYUdnizcCAMxnV3sMUK8WJR5XTXhRzgPcZ6nQQ4CbaFfDqSF8n",
  "key15": "4m3bYmXksSxJnH25Feiu79UUm6xTAoyEwBSZY7QJojxsgmWPXu4NqstqoFJz2eNDRNjXjdwKQgzCueoeShuh1fWo",
  "key16": "4ecV1Ucsr5CpXRq3biK3ETe8LQtkZh6nS44xC85ZBQTZw357KMVrVmr4LiRSo7HgeKBaTcM32i2SPXf868TxRDuy",
  "key17": "4U4h4gJnBwsANmjNKWvWwyxrhvzV4py8L3i8gAtzhZgRtzF4sWwdmnTKsPsb36rMqVwU6Y2eTTHQJ8bwBrsUkeYc",
  "key18": "5gd9oNpdxtwzMKQGgEgKyZ15sVo7ABhoftJVb2aFheqMuF7zaYE2d6E5PjRJ1F7oqWQuE1Y9XWscCfHZE6a3sMcS",
  "key19": "2SxE5v8QzHqEaBj65ZHK5Wd884h9diDUoUvzWnYP5JDpw19DRQfN4CapuUoyJTECoqR6pK1isBkdDeUaRyD4757a",
  "key20": "3LLykx5ekCJ6jPeFvhXoRzw7RomQ8GrEBUVjPvnRzmjPDZM4ima9Ce8jHEVz25iuh4dJiuE2ZAaZwXk7FUnkKu8P",
  "key21": "48w4CJyLkksZqt45hVr3dsLJKA8RXS6oovUbKzxgfb9DHrSt8Xjc8AwGRGcUGCZeakHfpNvAPKJRyGqaQ5goxFRX",
  "key22": "kK7hromXfgK3Ar8y4waLiUQSSaa1ogQruPN8U3Z836e5BFrcy8DjdVjHsMRY1WA463fZuWFM7nVzSxiWPkCnr1E",
  "key23": "QnaEfcJ7GEczZ7sHqAeyh9CVXKyfDQbFuAg1kuhK7s5r7GpbhxB3EQgPAoFGcSX2GJYwpCpMz25mxi58pqDj2b1",
  "key24": "64RZKgxdesZe4uVs1mddCgUcnfjt8P2Qb3XPM8zYG6jADEdnArSFUekFp1pUGohSTKwE5rPvAD9TedPaFqAn9a75",
  "key25": "3nKuuJBeCdQyfJLxpwHZVVwKoZYx49RQKAUPSkBgkiDdtTw62uCw9ePFFhPhjLkks96RcXaUeJLkoDb3xWUd6z4",
  "key26": "zk85WG9JTVAT8iGsmE6LdGiExy7nr9RAxyZs77zVUEEZKzARGkbLorPxXh2NN7XkjvSoPYcsKbmeDFUJk5A8D1e",
  "key27": "4BCKe8fqF9qtdG8No64hbaG3Dz5jnm4nKGn5svj1DmaNa3SsZTo2PFLTqb2cy7BjJmbgF6dKodXSWCzrtMh6wXNL"
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
