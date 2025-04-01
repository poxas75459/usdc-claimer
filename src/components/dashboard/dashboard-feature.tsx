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
    "3143AmnEUTWLEs1osTKz9PnQzxSzW2cWhnGnDKKZv4SVxb6yCubHSwAjAetpEYrMxy7TJ7Qsvvu6mK6SV89AE8vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oTyP1jeNBArRBf3aBMEaByfkLYPEfhnPeMvVWGjvYDAwpHeQDYb41rJzdge9kMpd4KMKXAc9qaPnfqvGtyMMTDi",
  "key1": "5yE6d4M2MfM51mX1773pSi6hCgrpioF11sEQeWcwRPp3zVK38JXEX9uY3Caahag6V2sQbrRwsredDT5pytuyskK8",
  "key2": "4yzhHpBikyyF2mW71VWVUDoZsUr8thRcd3ewPRXFNFfUb3WyiYVjnyYEnwKpvmBuDGQWyAbPJyPh1P3mCec3yJFJ",
  "key3": "44zwqqe6FFk745Z7geEdFei5ymsWw3mVHEhQg2uUismb4PcZ6qcu1uecqBuVnQuPtnjdi6K82FXJQfW8Pvt8qxXq",
  "key4": "4uNaQzx7rK6owvtoe2cD9dwGxaQWxY6xagW3kFXLquo9mp16B1AK5yfz5LTcgcLqKMW3k46FANAWxpSMMMvgv9aq",
  "key5": "4cWQ34F1ojgxr5jREmaxtv7D5HWFwh5kzQq8fgRXRTRcBE4nV1NGbVbnS8KVn94PSBtQXGcoexbchdVdxb738VKE",
  "key6": "gThnaVT6gm2KqtKKUyW95eRK6fbEoEi581BhhaYGLWd39CYhdLzJoku4WuGRLYL7iw7eG4vpdJNH4JJtxUAKnms",
  "key7": "4S1a8KpjyG6j7HJhrTkBfHPScXswsdGsNaeNi4uqBbFw5BsutemoN5wrGtJZXdUVKt2gdXc16nbMm4yUL2eWy8gC",
  "key8": "2H2JtFNhoiqPg3GRcnFUjJe7u6JWcXgswyf35MJ4jYeNbXW5kXSTZS64ZjDbhSLiUZW3MStsxEAzzMbZmM2zyvLt",
  "key9": "4mySKkdYceYgFwxuUsRthEH6upR53uEBbu7K11S6j5UM16tNzaaufmsJXrvH7zvTLjoXxMEH7pwYFt2kAogHTVFz",
  "key10": "2Nt7qhKuJiPeAEWruecti2FXthZ8EZeZARFZffXmoL25tau7KPAcAdP7RPXjnuRsRMUTwrkCVSdZpepcFUyzTvTG",
  "key11": "2LXhuoC16H6HmqZGEjbNfReEWTwRyhvUjTd9fMABWgZzAwzWdHRMuKrX72DHZdVvj8fW5vRe3q5AC4gByYepQpYd",
  "key12": "7QYSKjqAeGjy9uRUwHHyTUgLpX9dfc7TZfpinMzE5RAnEY6dSNfFSKpMmeKo6Wp9SL3EJKRQvnGX1DRxHVVGC56",
  "key13": "5FnjfLNahp9StMNZ3KHSVjh43hs6DisnBp1Q2iZ91xD5FAgtuUpZNRz4Tm1tJ2spdLZYRS8Xie3rh1vysCDwF1jj",
  "key14": "m64KJcvwvfotf92LccTapTGKia1rWmq4CMNzNovosbkQ3jJRMjt1d4tNqXtPdZJuJUhPbjERsKfLGno6Knd119G",
  "key15": "ppcSyYT9qkmGqW6RXZGJZved9gjeU4xzqc6r38BBi4987JLwiB6k6M6JtmRYaTrqXnbrupq82vsqEGg8PgTtPEc",
  "key16": "53hdk5rtATQUKmoAu29anr2pUQQEHfDF79t3f3pu5cSVAw76EmFD5hzTW1DQUX4NMRRb7bLC35meM6ieXD7e4B4B",
  "key17": "3FdhB2sTpbS2UWjxENnc81HtivdBSw2mCCCaKHyqzXNnV93CCbn1BZBHyXkhLTnv19Ca95yXkKHYmTPDuAgWd93e",
  "key18": "fLL9isnML4TqzNQiJ7uw6hrqv3Q3YemfsY1Ciy3pWZDcbi4HNvqoaVrGqBbtss3bucmcW7gaEycVCYGi43QKwUq",
  "key19": "3r28xpj5hoQd18M3sbbV7jfm8om37XnjMg2h9kkRvgSs3SkVV9Qht8c85VCsuU1svfrieGp7nDxmgJTtZYmzma6Q",
  "key20": "4AcWrbgsKyPdBFK9ZyTzv3SWjf7q9MuhmYBXAyYa8ZmRxzCD2nFdgBxgvWebienzgb9ZNBt7zaYomvZJxoQ5AFQM",
  "key21": "5AFzGbgWREtA8MnSQCTsCo9czmyPMLJi8H8iE4iQefSes6bhtitTpJUoQZ9fGNv7oKWkdy444zbZ9nrwmemfCsX6",
  "key22": "47KKuBVNzn6whauaD97zBqZhwU6dRZsEhHb8CW1uec6JEzBfUjfVWCANHdffTHXHsTwSxNzYVKwjJWZCWYvBeE1B",
  "key23": "2BPgiuiRQt1DR9H2xxcqWVLHZb9GhCXdJVraHT7gapvZuLRmkwaDEUdsHo2R2G993WNLM5f6U1SgYjHByjPwyAFQ",
  "key24": "3enQUqDYBHizxhuwGQskPw5JYT7Fdotnmcaf49exZB7zxsnKVm9A7Fizrd5eDoPwUNiTVncRqsjTvH5mGuQseC6C",
  "key25": "4cnx4kqyVC5JbXpxgVjJTQodLKqJS9C5LbxBPqWS9uKN5iPNZdoG5WxksPox5QoJjVSSWPy1qeG46ZgxnRjaeZCw",
  "key26": "5ZbiWBXGVH3uGq8V2Vpm8WQxNAm8aQczw3H16wPickGC3dVxeAKUXD93JiJmTs1dey5wikKCXmRsA7qW2KVV7TVm",
  "key27": "4vB9oCgWPNA4X5RLuGUKCKKzN2BqZGHpFMmdpJTLJwYB1QMh9RhQiJSRNVeFS6HRp5YMAdVyNhCpgRppL2rqXzJA",
  "key28": "2U3qmV2FRp5RBQe15pev6FS4bjjqdpP1SYAdrm2rit123WVZ31d9pdTYx4oamEKjoJTyy1KPXqyyyYxaCHHvQz24",
  "key29": "3aJXH6rdykp6AsrnekVtiKTvuJUrbs2ZHRcET6wvF4KLxpbXzigrfnvCUj3gryboi4h9WtQijeWqhtQuTNoAVaPb",
  "key30": "3qLcRLxLyfJFpktv9gpfuZiWff88NC9MHsZcQL1RKTPzr9CT2RDZ24MARbQU5YBwKdBo8yhBBWG5RL5mPvdgRWkg",
  "key31": "dBwmnJWeVeoo3rJi3CVNuSGwhiGBmp5N9BYfcAbvGRiKnXkMw2bfwon1aaeM4og8D7XkR9TR6KW5AtgLqisHoiv",
  "key32": "1DLcrzcUYgfJkLi9GHX786VkWbXbNqwGQUmUSdLWhyxWEHt3hoEM5yfS1ynDhaZK1s4K2BWceMsXg1uM3DXDois",
  "key33": "5Vf6pCHkw3wDE2wxYUNJEUhzFEecA2neT936PD9ai53ATqcAfuqfVCmSdrqTbhZd8BnmfJXticGNHp6paCucKeyc",
  "key34": "2afRxtD6zmiZakSj7UCLW5snKAHjwBTqGpUcchZX5NkVf9wcstmRXr89HNL3UraabUxkwYHfxm593SWMiRE3mhpc",
  "key35": "3YiRVs3VA2QojqUjU5gFaqwrcrxBKUnc2GJ62eSJKGPuJVxWRCn8xg3iEq62pvWmEqGKfjwve5qUTJPsxNso5z5t",
  "key36": "5PUNjsfx3HttNCmyEtPh8tQ2LJwhFURAXPTDAXrxoF2poSor6KMxtjSNfPBjm1f31bDbgx4Q31bUYaTYjkDaKysq",
  "key37": "3i2qCQNHQYNJwK23Egsu1726AdT1yeTRZJM82PLdeYF7dPLufqWUYz6MeYranexxm8BdRUCmNwL3Syh73kTG8jZy",
  "key38": "XqAq81Koctjrq8VQup9d2HNLnW4sXQJoMHWLb8FnKNQ6iisGLU2AiVDkaBaA14rP7Up2wV1U2CSXNAv8VjgRMmU",
  "key39": "3t99KZonE8q7sRjBVWfZyLsN4XVKj4Cm6sPLrFdVCw2NjgmCn7ENsMznK88Q1tPgYbHWvmMaRMLEXc4qDcx9RB6v",
  "key40": "wJGMWwqhGw5LeKMj7xYoSAS9VnDcax5AWiR3Z7B7j6X4LcpcMjDqDLjj8fUBMPGFogHjR7xYz1jocxkMNeFpk7b"
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
