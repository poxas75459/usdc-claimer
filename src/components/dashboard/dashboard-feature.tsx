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
    "54VZfyaEt5oAMMbTYFgwu891cHhM5GLw8PtRwbrUpcDu2eLxaKHCGTMvkejZ6z5YCnrNFYSikRaMcMemWRcUgEVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oXizMKTbnogKDzqBsudry45BWA3ZQggjD5oHVC8fDA7GUHV32qjGHvWSTqER99ZWWRnjojyKWvv8ziyEeRZq1u7",
  "key1": "4QLaFPdhxPjnSLeqYDLTsGE7oH7HC5CwzGyHSgFoBk5iXcDR6AYpYHFdQy3742K7MHyBibuaXK2ZE3kqieEKrVo1",
  "key2": "3RfrwHps2rVf8r5NDPLAu77VsiNxn1DZH4NU2qJdqpvy8D5np5tEa8GedYmgc7K1Be86KsfQQqhQK51efdmPFADW",
  "key3": "4B39qyRPursD8JPd2qGf5vgBJEb9m84Yjv1NN8r5wrq8KqwsLezX1d8zYLHa5dowLe7sPKwEkCv4PsS6YbEn9eSn",
  "key4": "4nc57ZXHPZn14TFkppDxJedJfjDGSpLuo5KE784kRwxBL2BknVDtb67rWxQxbm8QUJTVqfyErEzpTiPszuvr9efh",
  "key5": "3GmG6j1u1PzNTe8EhsPmgzcd7bUk4PRirqG1nns3jphCGvxrqbMeXnc8eW69ue7YLFcUiixDGMrJ1zcjr2aXepfK",
  "key6": "5V1q4Kfopg2BpjVcAbLmRDu9hi86FkJkTK96bmWBuhm4CZrbtDB8ZsSABTixae8fu1x17mFUZV72FZ31ZEQbVVn5",
  "key7": "5ekFz45d868AvoS8griF74ktWyXz4TWagxRv6fsG9UNhuz6uJwZZgxUwVTRK5j5CJq3PRBbtg2jnm1VDP6zWL7dC",
  "key8": "3piuCD5mNDe2ySSj9JUAqbwikZ3wboEkJWgs7hWzQMKjKTkSfDQJSLf6c12rRPSuwVs5HviM4iTeQh8x1ZfzXAq3",
  "key9": "4m4niwUD2gSJGZGuKgfKXt8oj6jgs72zR5HQeESYMFw8XjfNXvML9TZ9wHAAfEhvLc8pcU9iqq7JA11Ckh3NaAG2",
  "key10": "4CigDLiVk55LJ9xUJNx4vcRW3XKdHypPkiXoxXFiEPvhbWKTXKnsHzLFRJGCezVdxR1HTmNErCspxsxrFHJbyWdD",
  "key11": "4j4kzRbvEXbF9rSEssdwnmnCugeNRpPFNXkJzBY6ccPz33AB1T5uVKEmJzd7xetAnzwRe3bQoptDE7jKy2fWGgN6",
  "key12": "25htzhPf7z8dyT58BWfhGmDhamyJDZPT5Z9m8vbKyAxX7vq4F4Fq9BmZx8YnDen6C9gxQAZjgpmnt1gQhUibgYh8",
  "key13": "WRwcXENqy16MXskVoTTYvws2BvAW9hFHuHc8bzuvyuKrdvdf2YE6MHpngLcXgGARRNKpLAnTg8spkFjf13PCw9y",
  "key14": "2Z4JGcid4BNDbhdgLWBwvLGMWchdHjcwHWTTrnyFSrzA7HByCaKZvjvBFyBfDxWazMKcks7LDPKwZ3izNgeeUrt5",
  "key15": "NfmyxJ9oqZF5JdQmReYdoUVHZyutxQ2S51w6J8jk6NDJW3PobY1go7biBApeokbAWiMYmKYx6NeaZsoVMNA8JGJ",
  "key16": "3fStPmbXKL3itZRcg3ghPWZX2kHQLXS9me7gG4kG7TZiU5dDmprWhpW8BenEdPq3gTFq5MN63Nnzh5qbdVUDPQTx",
  "key17": "5j7qYiZgQCEKPftTwHuFh6hVGDLQC87Hf9zuFQAcrLXB1TuiUSjCaFfgxi4Qe1X6mCEthiPdKZGm2EJEGYtHjjeE",
  "key18": "2DPPN81HMVaRYXwupDqJmTfYnQpm2zuJykDtfqANMNkKWo8U97j4T7TroPbJSRfzm145oQVkSN8dUeE8qSRE99d8",
  "key19": "5DFsGCDrAF52MNxqntoVz5tpBZxidNap1wQW2JLZRKxQjuq9ojXrfDJV7dKRN9eDjyqzggtQwi5D3xfrSg3PndMY",
  "key20": "39JtthnYp2vN94oeQKRevrcGr4Ab7vxwxeHYk5nDHDP2kPrhsqgt8hJNY2uq8DRroR6numTNfGhaaE8Z2W8PmhBb",
  "key21": "4bYATnAbHY6k87tPr1onX9tjYb3xxyt6fVyEgcCQBENubGNFdj42ec5ndA8D4RVyuNq8cjvFoyohxB9bZr3KasBk",
  "key22": "v2yu78JTsf2uj7BpABKqQ6c3BQ539AZrqdSkfH31gaj7ceLuo2GESkf3BJxmcim3vLMJpD4o4NRvZR5uXW8fcWX",
  "key23": "56sQg2EbrXP4sA7jurz9BSFiLc3oPm6GfR6xMiqHnTz5VaoUz1uic1qf7TL88MH8VDN1qs1VyeinPLY9diyrM8TA",
  "key24": "2D6WJ7Ki6KtsNq2Vibphm9yv24za3JiLM2HSEi7x5bZaPaQdc6L6uchNX36UzpFMwkYSyjLoo5HoLoZKdkCE5vFE",
  "key25": "3Hx6Q75ENuAUb6ri4JZss8Lr2G8DQo1VsoRH5Tm9M8Zt9AZEbaQ2X7WvkHC7562iPQC7n4YwEonivDQytfxW9HoB",
  "key26": "4bg2bdunk7nfeSghsuNrED5orRDx8Ajuag7sgqDSuYaZXYwN1GBvYh2cBWQrynU7mh72M7tijgkoQbprEWCQw5SL",
  "key27": "4gsB9oCBxdYAw9GVT6CfTYVFbXqhbWjJSb9S6ptr1vRNnPJaFj1omeTq2Xbk7fXhbgcsFzhDxSAWNBsA9DfgGT4v",
  "key28": "51T57mQHe7Wsgb1YTzWrL1wefYCJhLHMJptYqrc5Gsd88TNegP7y335V2xsKjA8KJGV9ZuAjCHuD8KgdVQ9Lc6UQ",
  "key29": "55PvxLZBMgMgvu5ck2WMBgrBToqWaJFxpqAEqeaCUc6tkroPrba9BXSqntNcfPjFJv7SRP15WeuGaKF7oWqNsm5m",
  "key30": "iBZWpHyvBp6VAY9ggqiLuZw4XesapkWyF7P9fibUMMjPn29cAPhoZPRVG4zpdkSDHKXc1xbvsHJZXWvG21mq4Zt",
  "key31": "3fgyfhgYTp74mkRt57rRSxSm2eUk1vJqucUSw5JuszhFL5NuLiQ7ZPd5gxaS9EkQYy1gXfz5Gn3tMtA1Q6xGJdt",
  "key32": "2inoztsGpsNwa61B3et6R2Pnhmb3UsL97MqukSprph1cv529aefzAACz5obwc6vtbdXhUHSs8isoJKBQayWKB8yd",
  "key33": "5SihnumaBGXKgS6NzGef7dds74U1nkE9Dk5sci1NXeSjhG7AYGxnoYgDc4pE8HnNkUQxqs9U6mb38ftPJxwRtVXN",
  "key34": "3xmm92YgKJrgKaRfj5WWQqvRVJd54ZF4A5A9Nfz6iTnMUmERMYwmnfKnSULJKovZ49SsZJJyjsD6nUnG23r8uhkE",
  "key35": "433JEEDS1VXWhnVxohS9uuEj3yQEbcDFKpZLSwXei25Bxa1EdDwXShMjMt9A3swusb3DYqM5FfKQ2JZfdRCN56XT",
  "key36": "5bNfrktwCc3oRzrwhJWiG346R3N5S84Bep97tExCbZbC6VVJtRzr3evf6v56YanvoMkg2PNXwhPWnReRGJ8eWC6u",
  "key37": "5xcBpacARTJWNEPUQoa972zksoSfjp4HMLZKXUGPvaV17gPgqggnJ49VfQRAmypJjojmw6QZSFnhqf4GanW22fsp",
  "key38": "64AaXmqQFx7oPW1gEpUHCXQhdG1z3hTgpZuFbRbDXqPkXYBjuC4KokNStTj9Xkbe5zdmB5EawHcmU1ewiJe1b4SE",
  "key39": "s1c5Y224YniVaD5YE2ePWPdLNB9kbnSHFQZzFpZHX5WKfLfLV4JQTdg67tPULbP1jU8jTLnnRhaLhDLVG13273C"
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
