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
    "KPEeNVvqb2aaxuCw5MXZy35836kNckAkJ9F7d4SHHk8WCUp8oFpGG7vZq3QLw3bo3TRwp5TAgf6Angsj6YFmVK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QfhMux8GizqqcaQ6LPifiNrPBZzDJwbV5W3CWgyDYLxtaEAkGqKEoeya7Urj6qQYjHwMQYGDsaSz178EyfbNyf",
  "key1": "2a4qZa5Fv9ebqRnfMh2WgmPtqecJcApaLknfmuEGBxBSkugzVPhHFfhZu93ARLEvYxDHfeYxaZYg8mpJXsnNafpn",
  "key2": "qSHatbhEozeZ7BQyQD6cNfG7jxq5ZF2fRVEBwZ5WnoBB5HfjxHQHyhk1daYADCpEJp3J6Fw5ev5tFBqqPp9gwwB",
  "key3": "RYszkcFK9WZtCQv3zWTzgS8H9ig3Mtk6SRCt9mBCSCYZQ7UjhULmhdaJDSAFbDojsTtLaXWJFv7PcBhXn5myGbk",
  "key4": "5HHHeNCfTRYMJLwwdASdTJrGoRTtik6h5MVrJ2MrT69L9Go3pRsZEXBCEhVKfN2yCjcy7mKBe6qNxEE7q8TD5rQ1",
  "key5": "4fLu5eg78ZdivyMRNDpBsh9RgKC2y8pV5sxYnnG6z36NahsyDd5L8FBTJLEE64ZQyDhQFgrAnUR5gUGzXeDf2vJ4",
  "key6": "2E3kXN5tSjgXYx5iD2mos1r7nSmhVLW4BewnQLU8yK7fjPpe4PCEyEknZqds9TFbAJaAKiBaczzowh9NuSGSgrXj",
  "key7": "4cPUysENbRabVoAq7bf6RKk4Ex3jHRAwRud3rppHjuSkqiBCCHzhHWfP8bcwQNvBoLoVsV7Fjq1zqsQHEwF25268",
  "key8": "536NEViyvhhpEZ9F4mnyHYWWBrk1tTcTQEy6RLQ5wdFgVtHe3vge9fQSowwzNXb4M1AVCnT1swvfBauoZ2RbkePg",
  "key9": "3pTb4cnLnfTRaBixvwmUDSRbPaQ24EWNPUVQz2MJtsMDhSPdPr3FSurWMkBjnZPGseRqzVoRqU72eytqVRs4zub3",
  "key10": "5LcVnLjvE7s53hTnex2ZBs5YbWyZn6QTAU7GRdb3FQzyRDabj1kFW5peBTnxPVAVXWkaTsdSqAARQ9cwSR1eg1p3",
  "key11": "2tRWZhsNtJ8MHE53x4pCh4mbQPQE57D97zu9uZnC5r7CWNPLdHNBtcmS7qRNJTMbLUB5yDjvj1KDkSKmm92fiA41",
  "key12": "4N7UUnThWFFFUzUT5GR6W77sacdPgDd45e8nzPSgEbRvD5edcmgqgWTCk18bvA3LyEsJnWwsneDDpdQfUPyBKQB5",
  "key13": "4qGmbk43WmiPEFmt8hrnp63uGGgmKKq815JUbysN6CBgoacgN9srnKMvAf861j81EuU7W5JthW8CmMUtCqss5Rap",
  "key14": "3e8UTjPMpmeGhN7XTsnUaMGjRLuARGJKZ5Mdwv33gKAAm6mCk6cwa5rLk6rESBoAp1vqDXb7mCdfCSj9E5P2dY23",
  "key15": "2fu3ZjefES3gCuFBhXJ78ozETHbkTipEyUjBUNHfyqgFChV5daFF1GkouZsRwK2veTD949Jx85bbprc2rFC6ENdM",
  "key16": "4Ahh8YJ7u6ZWscWyrAKfd8sCcjDLhEJembJPQYMXm3SyxdSLH3YRA5mXXvQHBGHF5Tus7Wf536TfEsqnn8Yyyt6Z",
  "key17": "3Z3vmiv239sraGGfb6MqBK3yfwwKGvXXAtagYAH5qwf3qQ2yP7xquQj66MPpLxRmrWQeWV7uR6wauSUwWE4S96g9",
  "key18": "JRX98DCxzaCRTg9ewAQij4joxxPBw8ar1cGA9eV9skCZZ4hbP9R3u8PTy449fpoi5RVZ4MuSGFNrAdttsdiJRt6",
  "key19": "4PhCPX6fL8KikLht9X2xrGZ3dSZSNV6SpYtCgcSjhJeH9g6fVqMAgxxdohqx25N48p58SpRoHPoThXonbfGTGrgj",
  "key20": "31gkjx3rExXuR7ffjAUfpPFQ9nPzLYDfi2SgoKrjLTF3vDf7XfvXVx38AobE5CFEiGUz9nJKS3RnUon3g7pbh67p",
  "key21": "5nDX9k56BR4s1h3e68yEkv62gTkVAwJNoPbcfc6HCg9euq67TaVQZQ5TLWfBuT93dtnkhvQBB3mFaK47QUE1mD7A",
  "key22": "3csD5F3gTxFE2KubEpcQ5Tr4xYPu5W7SP6LkjqsfGmoLrDT2kx6AGhGLkA2hTS9Vhk9b1RrEc3mTmShvtP7U2Gyc",
  "key23": "4pVifwssGspz7CDm6j6Bs3D3zCKGDXkPQRMq4fvvqCTzC6Uhywi7XF33pDZf3X5gPbez7RVBUN4cVPPNHLt9k6Go",
  "key24": "3r77p9CwNrddBUt7jxbbfZ7gFQ4oe9nh66UzCfT2gsc3fhDDkc7gv3ZRupifJkohAj9mpN7KMBHye6nGaXNggNWu",
  "key25": "3vYa6j8u9tmemow2bWjhzRgg195eP3RaXHTR58MRR7bNEAjptudMNNQxKMSRjVSQDZW8PwZSB7gKHhPwiEuwXApL",
  "key26": "5sVzu1dpdWLUL4WzNaVCztfQenKSHEQTTvkvsCCJ4JLshtPHmcsdToafKpRVAC1jNFwuGiS3S2kEEB1cWFuUS1V8",
  "key27": "4s8UzkZCYiQB5jfVPsdTynEJQfys8TX4y1CfDFpvJgec1wBZPhGbQhGtbCcnr6R3vhMfBcwDEwp4vrt4uGtKqyVM",
  "key28": "2cdL3hN4EZfyt3YURYh6vqjC9oFnzNFthMEovoQZonRhN9huoijwpT6hr5QjStbmgA5yTZt3Tf4xzL7zuaQXFsa9",
  "key29": "4J3KvVPjsVn58sgZsmrpJuccWnJ42TvM4g2ZrDMQhJufzR46CceDcNYMuWzHwEiN5u9AGRGyeYFoPrN4yajsScJW",
  "key30": "AgLB167KbJrHyoQnGtTrmzVWunA57R76xsS8YWLqVYXdAj6kkk86zWn6djNsPbbtKX91p2Z8M8aSoHCkweYdiEE",
  "key31": "9MyTy98LTbsiX8rx18sZHwJxUdfvo8u2GpexWpAtkRBNKvDvrm9qTCiNgyD4HHTXr8S5K9vrbWAwNzWpFaiapG6",
  "key32": "5y1cFHhFDjfGZ2kuhhop6dMwPXxkFMt1puKJgwrUDEPdWir8Zj5n13wZT6CvCJ1S6PW7dbdQVFJdKozdpqyVgQr8",
  "key33": "5zdDZ2RWwcXqZFYeU5JiaUToy2tS6MpUbeussbRPQYdaiypEJcfWJbNaAcfw8dBsDPWSBqsRQcvFdoNH1sziHCGB",
  "key34": "4q1dpgFoFVF719Cv8AtdinC2ZkTGRE8XAqAGrUJxvR3iZUGpcUnBd4SgpiTzBxYGMtiCbyANjyhRrZQonyANJfuS",
  "key35": "3Dzp2fk2AuJ5nzTEkeoXyct32CVFyN71wsrnxW8rwbZH6T1MCtSLKk6whZvuKCmYjVhUQRaMutwaRs2j4379vLvR",
  "key36": "5Gf39xvtsoqHNAxtCZa1kxKkrLxm7V8P37b9ciqyYenHAKj8y37pQjhiEA7Aznpp8Aarj2paQybyvtTKzo9UYSog",
  "key37": "5jDWutYukTjjLRvnhUH1DJVKjG6hxTgQiay2X4UBxbPUGH5xJpcoCcaG4xevVxpKSFHtEJKqPmWczv1J6zqa8ruF",
  "key38": "4akw75JZS7mrZc9YZFPsw8T6EVFvxErkPRoZSwjBFhpWHiTWoeqWGpzTXHc6FUCnQMtwBc9vdjrRS88iQR1SNWqd",
  "key39": "2fFMExPejETBG7XwKQMA2aWYV6y4YTgM7v8iMA1VpSUnM7rYDZNZUCwxhmXkBE336m5rnxvd1A3DsRsPZQ2JGhKP",
  "key40": "3BKr8ewny79pNhxN3f26KNgm2Fa2LhZFDKS3x968TV5kw5Jxzh8FdtUGjJppPW89NSKf8oft7euhpxhzdX3UZUFN",
  "key41": "426m2Jh4CKtyH3eYxNmDLWbnAnj6VW34j1FhRZhznUmHsmtidwsfM7Vk9GqSPj1zYJZQVQ5xwrsay6xLD7Pe4ZhU",
  "key42": "2XiVVUbZxqcys11JsQ6vLTG2V4hMGai17Pu8VLumbFWr8XkrYVkUHPg5SVDfVXRnG3orc6XGK3w9qskvYLBAizJk",
  "key43": "3wgk2P2hqxYUhxMQViXjEWQxSzmxNPjz7fgzSwV3WJZQ9uazaVvAEvvDiuB1aV9wyXneDf6ysvNpQQMjQNaYby3S",
  "key44": "54QeYFtweiKhXqpGi7CGegjxR7WkJBZCmbEt4STp2y3pZszj7DufyhWHVk2ghAifUbHZkHoAwJdAJByX6tihWeTY",
  "key45": "2hG1FvGytzK7amu6PnsRNt7g3BHvXRZD6Mdrz8v2VNNcPo7ZG8TfntXgmC9KZ9W8n4g9JPG73HhFTRJ4b5kdzfj1"
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
