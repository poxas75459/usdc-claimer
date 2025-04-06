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
    "3bZ3fUmGABSvFPTpvaMFr84dsw8kywbhayn58zvupjsYPyhziqDfLpghxPg6XZiHo9WhBmQYKt2q1sw6QgqoSUWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27huMuAnuqM2esGx9V5EfozY6fe1BPHSZSTqk4WBh1LSf5bYx2AMJxhfDa9bX1imicS1VB9cHzpc3CyQJoebbM2P",
  "key1": "35medrpQj1hn5C9tYcUJ9kZTFCtPoQBHkqZoxArZwKnyaUNPRagXxB3xMkJMRAn5Zya4Rzko2CXsqQbgMmQ3WznC",
  "key2": "4tWfk1ZvpfhyScA5KTPicNVZGMSW19ChmmPRUvkJ7YLYB7wdg5tzPAHARWmr1JRwGpbpZg7PQL9skGDT1VtYUhUn",
  "key3": "3QaTrBuRB2SdS8CL9UZw8uTJTq4HDD8KAhQzLWpGjWECiiDKYPfF4vWgLtL6czMDESo4A1N1LBRc1nwnmQZTaDGq",
  "key4": "Zs2SevdRRbQczsjohMNfGtDJDJqEJDwegCoVxfM3Z5y5xPi55BuKAEpGgyXhSzWNEBpQzDL9V6M2wgZFwssmzi2",
  "key5": "5tFfVJRUFE3PDApAf82yGrtKTuWJbfo8Qw92kgm7xUFpAuCzCbZjru4MRBywvbduvoQsWxk2RL9nswn8i8b9j9pP",
  "key6": "5GeyS1FJPBac8yTWnpRBV9F6BNDEKtySZ2bAohTc4FDPSScpeWxv6y2xDVrscnc1wHgMLyqrcQn4vMzcnoemwo97",
  "key7": "2it9Hei9yE2Je1vws6p3rLrKtXhB8pChrS3eEfzW643HvZEAaPpDXAchH1p4gNM1Ta7WQZKQtcZYMD3LQpbAZHKJ",
  "key8": "2qZeYHC9VQN56Yd54bdw8aS81XhS1kMGYjUoMKzfN273PDe3897SGp5FggXAoEGrHPZNq2gYPbKbaFfYhCmDZBZr",
  "key9": "4Y3WgRPxRbejuhvL6fSDc7cJhWn3XJCxBA8AMFL2aud2Jgs7FtHuBRiVkwGbKC97MbDsnJKVkXBLbT1BFRZiizWg",
  "key10": "NgnpxMakQU1L1BWw5FuYFHMbyFyrUteDgKkV2XoDdLF83AxUX3H459GB98To6NBzXdoUwztmCo7gcVhUhC4wMpM",
  "key11": "44ZDXviS4j9rxV8Y4orAKTBLefNXe269JTDeYEzQLENtUvarV2KzNyxUX92goRwCNN36B2SkoRvKwKCbKJXTaZty",
  "key12": "3ADtAznCbBGhNYS8Vbquit7PDPwaseP4wMQs7oZPJGM7D9BWKL9AEaXPTR8iyFib3NTbPp6vMHkuF4voVkEj8gMy",
  "key13": "4E3NgKtYUjZ4LuPARPXRw5y1zVEw4YKo3FpYZMKaTvg26bZt3UFaXk636sZ7SoHccXeDBY6neYURcLqBVc8Axn4N",
  "key14": "Jxxrts4E9XpGkrqQ32oTFxQNKf9yjDqSr8GJRNMrxk8aMtPmZTiMcYH2fhj9ZJguXPB5zQiaWRvy6xtejjnCmCU",
  "key15": "66ckDFkwdEcBjjKn7XzbPk7NB8prvfK3rt8g9sEXtZsVy6fKoPAP2PRBGzsnBG7crwKjP4if5HMLSYTb1TjmMDmK",
  "key16": "2x3MjtTWbHCbLU2rUE18GwPcKAYGiegkwVMLZZVoggzA6VEgTCqb4wypcVAGi3VQ35eVTckqC94FYVU3q2Kqcuxv",
  "key17": "3NCcKq56MUVdt2EhgMG6aqBd6KqEmH15kB7Vef6ycwqSr2uAZtu9dUcProMG87MyU5U7poui55ueCbqxSVq7WMPE",
  "key18": "5hb5d8ozLoGBoeNMAzU8N5xqzxugYT6fk2EjbU78D6PiUhRtsjU7jBv4njf27B6NrPHPH8LbQoKgrR11fwDuZH8F",
  "key19": "48Bn5fvQa1Gpkr5S6TMTzPzfDYmCBWKEcsSShZQdNA5SptXkE43n4qWn8Zdtoqfnqs2zP47rifd2gDXs5isc74qx",
  "key20": "3jiUxgGhRgAcJupnjF1Yy6ReVWJTM1a6vyoKmyHNXQD9MQjgrJEWB8PUT7ZQyVZWxk1qT4CsT4TKqoRWwm5VEcFN",
  "key21": "2oMoG3ywFP1uMEzLvUmKqg7MpGRaHAWQtkF1BfXWpXaWRTLCJ6vN3PvcqLwiqDu9dKd2cLmAqMHbjq3iXwR4jCwk",
  "key22": "39xtmg4dgCUPJoUKzLGaHu85nM6hAzMXj7YW3PrLpdEfDzbhm3b3ucJZCXLXARhxKy6fWbSCrGBFiA66q4gjYrK2",
  "key23": "3iVMdNhfpt91GGxQUQHQNJJH8LgNXWPH8EKPAWfcH8W8JN8TGbKPvn8q7b7v3cVDP2WZo72fAyKxw7oqqQJXXJ9F",
  "key24": "2ynUvCaRn1kTCbJqXkKhS1Yd3e8gDuHecpP9eyHS9zYEsRQkqEqnppWm5MvcXTNrvPuv5mPWUrA7SnEAvpzbngku",
  "key25": "CxPJNz9SSoMu8NdBiPPmhhoZHp9G87TAoqc4hf7NqWLiuwgVBNpMVViNZ5EHgidTqTf4SU1aPzg7CSw6aPmixcd",
  "key26": "3sU49efgLwtEU8hxtiAPuf3oHfeJnTFGx1nN8UqRPWN9GQ3VEFgRLE4fmpxaWJ9buj5nWwdYaujxK8d5qyKAcHt2",
  "key27": "yn9qvac9VD43apGVRVs42YZ4z3GziN1TW9uYqu6udJqdTMCuUfuoMcQ3Lt6an3UuvjEew5P1hZSk9uhS6ix7xLf",
  "key28": "2nBeez44XZeuZFAygsiQCSisVwf22m5msv8DfZ9CHZfqjTSTs7adwaKkKfUZwa6cvVtAzgRVDnGFpZuXREMHk91o",
  "key29": "4ta3Bq7Dvw9cgiGHJsL5xafNnp41TKgpniYayV3oXP6trZR9bYTN9tytv9M3MMAd24guFVLk9iodKY2x1QKBqaVp",
  "key30": "EBeXQGA2hYqYRk7DbfK6PQDPmLtW6GHzXMg7QZFk74PHGChiRTxYrxFYPXweGX5wf7ZoLRcv1JkmBixohhafGQm",
  "key31": "2G1reegvQiPuNA12S8EKzMR1BhsPkRY5YDCkkyoCMtszsNUSzs6w2ccXqqRbgAZ6pgi7QEk6e1PXvu1K36xro1Td",
  "key32": "4Nn9tab8vDVRn4YL8SCJYKPwQhdyTVBgk3j8EFWsMuGWduGW4gG3GfmU7G6gmp5Xvz1W2XzYQHEVn9gNbQ2VBBr5",
  "key33": "5nakNcD3r4z6Suf8VBpY92g848fmYxXM452AQjDyr94jyY9FFpgkACa5FELEdD6vyKAcVKJQ5TtyDx5DHqAojCKR",
  "key34": "27gB23uEFYTXviqVrb9XX48Eq8XvMjBUHPhSp7C7k2VNgDssxteCJrtCYc4dBjhhsSR8A9kPDZBC8ogSUgNJUGL7",
  "key35": "7AwPzQBYu2217HRPcWKjWLoyUEzKK2M6ve4yyBvDazoTzFHXSFHycErQ4bHwLRyaM4qJFzZeWgdGAEbkLDzSghS",
  "key36": "6tpdut1qyaknTq4iZxRi6zyprXHEjg3a9dbPAMFaetmfy3ntDHFjxNNP6o94mpBQ1p1Heq8QX3ru6oXcDUQvY83",
  "key37": "5mtGHDVf7XfS9RzhkWTcvLQN7mia1JictpKQBQcgGjohcEssQ1CqiLPLnEuX5eEMccYeMcPPx1aqDFVAXfLasLLH",
  "key38": "dt3mTxgJxJttBbTg9ntqsNvWACRZAesT6yiiNMJDF3PXXGu7DbLSeopYLkmcyr7G8cFwwhBEEKbVLtpnoB91gab",
  "key39": "2YApMe1aXyjGccwDXSqGyTdLqcFUbx5tP3ksZAJXmxVzh1VqXvdEPY2mxVMy2sqS9K8A26Z81cPokG17F8n7XGCs",
  "key40": "YmS62WdBau4ysgUTnpk74H8WXKgWzi3pUMWVJvBR3z9vah98HwQfFecxGDDaPh3v2GEHMxKbuUVzqyJ5EvYmkqP",
  "key41": "3prVbNLdtBvufyu9HHfGG6y8KsZYmaZGzPSQNij92oX8jzsJto9XpP6UXk9fzTwExQcYoScNfaxV4EzrXYJYtonE",
  "key42": "3x6zLQHPN2uY1EQgX9ZfYdWesUdD8FjXmnBAZMH2P4jL27BkXufXUTfnzK79KUQGYUzTs28ZdRFP7DWW6WmeHPF"
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
