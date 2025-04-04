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
    "5SU9burguashYx7VKQEeXe5cn6j1DZgPxfx2FruaESNHESHnVzFmmoSthnBzF5gcf7pns9rPeHtcAVWFBfAQGusv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJeJvDEkb7uJirNzi9wqH4Bq8J83DBtrFEPUhHfqxbUbNzA4rbEoEuocZyuoe9eiQg6XkNZmQ5p4pRooNUVvAqX",
  "key1": "6S3NW52VPgxUZ73QXtsJnKG2k7PXhx4kPgBA5CLhy6LcEp4y23PtW3xZD4VUZ4RHSaAxzSkVGfdqbNGQ5snxkB3",
  "key2": "3oufe1cKTNqjwmmRU2xpvseSLTkmhuXTZV8bWKv1ZamaZBd6csfS8UVwjewrnY4J577DuwfoojfGNVpGUAwGvf4a",
  "key3": "34dQz4qNgHqvsp5VZPDeaveQcdeXMjPf5FmniMyXUXEJjZWvPttKvoguDqXJp1ZnmWoBr8eNZKSZ2LsAoLrjnFMs",
  "key4": "2bz3F4ByBuYeyAFRRgRcsaiCYoYVQbF9hGXs7gAvZyYDuBupMfZWZBfZvsRi2macZeHd3evfRoKSY2B7xX8qVup",
  "key5": "3Wz358YKNMRhLYVtwyxjaHvXJ3o6bRphPRBpCdetRx3jA6iYmxKyFmiMCEcczGf9m7q511QNz7pZbHANhu66XEgF",
  "key6": "qa9PByeiYqsFxREX6qeWLKNKEbpGLDqsNTAgJDoNTw9Y86F9CNPuCFMjDpnxSZaXY5L68smAMTRDXsKBkWKT6vA",
  "key7": "52uiLuqTYmX7sEb6Pw2QTeSppYk1wRyBWD8GcPt6U5qaLTbeiFYCnJas9SwLL3kUojHkmtcsaWwgGHJprSYqhv8T",
  "key8": "3pfXFu5F7pVRNsAoiCESW3Ct4x9iFfjWbESdqpLpiNg6HxowWm1b71KaEf5rdPVcZKpYw2xKUZR8M1881o8FK76x",
  "key9": "2ujhGTQ4ufD6EDCXjw5mqqBVFPMu29v7nrzQTrw4u2SM1TSpAHr5tEQrTNCKqnemYpBxkNy1pzRM7gLU1aYsDeZ2",
  "key10": "2ZZ8U1DSojrVXxu1EiLfYsWiyBHRQqM4AXdFb85GfkLfTEKHaqDbhw6QeKNWLgYrNNCPcCkSH4LY3Jjr7ynFYmYZ",
  "key11": "5YMi2wnfYgP2MmiEyJkgRN3NUiyDrpSQbDVWnKYD21dShkxx6p7o8HDEqEvpy69JFho86kS1HyYjAGqwhgFSGBRm",
  "key12": "3SDCBFS97JmUzSvxSF71J6FFCddVGi96WQKP8dmhgpWA6wLNDkckyBt4pC32ZJCB2hGnYnjQahGjwzvYX9snEM7H",
  "key13": "2GToHEeafKDejfjivj9uxY93tG8d6Uczkeg7zamTji6KKbspJsSjzdjtUayJL9hH5MnuJbUMmfiizmwnBySaEars",
  "key14": "fxuYGVDHcZHNKCbogxC4tQcgLep2T989hnqLrzgU5goFSSFR2Rhq6oc74qAcGwUYsqewQwm8BZC1AtXCfDim16m",
  "key15": "Vk56q9cx6a8dSNnNF894ngjysHAeUiob4RQRbbcx4haEPwDEzcByTLURbVbphyvGXYwjNhoHxtL1jWHUhqggvKn",
  "key16": "3kBp5bMjfCiEMvqKi9hn5gchr3aDLh5w1F9WikXoNZwY1rRegBc4A2E5trTSoMpQwG8uJLECrZNS1Z1dYNWWvWcf",
  "key17": "4UkWLFmWiYW7abfWLuWnYgmLXNUSRqWhpDJAqAhz2ckXGGQKnsjpsgu8QNVCT1aJQQF2jUkNvmE9iwmqgHWnCGeQ",
  "key18": "MjJ2RthQdBuErxg76v8Mu12bA37WAJyEXruAmNyj1nuEmF9fAarRdEZytreR9ZdSoQhx6h7aitsZTPodxAYbuAA",
  "key19": "3aTsk4X96vEkhxNFbUGWRqsxktXHdmBtN9BtvBKbDbq3RqzbJydtDfYB66VoUuNAmE95ewz3gWoixE8qGEmNGgBH",
  "key20": "Nk8dTTLiLdHLneDBKB9VYxBaKZtZXcppuikvbwmAyDde1kg6WatuXZMP7ubFAj2aBdAcRNLxJMUtAkoeMC4zus6",
  "key21": "JoxZDNU7QBWRncBBf4vVDnhntYvPKRnUMENdP1gQu9hCGxis54tcdCnfkRSRCvcXpxDsDjKVs9SuyyNG7Qbw6mn",
  "key22": "3eNLMGdjFLhhMMEgFRznwdikhj8chYBJFE5P5jFgQoUvN1D1oRbcJA1sT7kPe8MZnisHCqBG5caCZm2inUcuirn9",
  "key23": "pERofipdGupa97zhEKhPocH5AY3xtDGwBii3afngwJCDZp89Hi82dtPn8ju8VU2pDsocSpzV7tXXJCLb6s19jGp",
  "key24": "5ezuDYHSkG6ZkRAFr9kF1YC8LNnV4CUwVzTd6FAbzUMUBJtNqPkrMNWj6pSkXLGmabUnUvvvTriU6QGKQXtaAjtZ",
  "key25": "4SnVR95HabTFkyzBFbaPje5YVwK5mCQDiqM67mBpEisUnfVqr6EQKnCc7fqNWZMtj9Cv8qbQfks9rps3jE2wh1Db",
  "key26": "16cLF4nhanXsPRSsxQuVZsDBgbyNNcRv5e69Z7ZtBqfw2ZSteZyvgJCcLMUaUuykv2TzFk55VWpA7DxUzZ94v19",
  "key27": "mGbcXvZYBx1ASL1QnZRfiCWjVknqjXhf1ePTzYX3tp91abMMbwvGkfCK7sUoMqNhdh3wCcEHuFCUCfY1SNhNhr2",
  "key28": "4Ld2ZozN7CH2N78WP5EPqVY3XYeDvpPj56fjKkA5SPjGyZko2ME13YWkDgDzz36pUDqykGyiDmaCVnj5RC1oN8be",
  "key29": "2ZBFf99QFKZoELqnN5HeQFu4hJVKG2bzGLqCeRD39UUjYYEfETmZfqkSyapuj5B5iped8qYf2iMNQAuYCYcBTehR",
  "key30": "4b3gudgNtvA8f8MWaxNJgSzBgVBNNXhZXmq6CxYyiLvNR9h5EgyFiak7AiRz3thMTwmSYfa35CMMGedaLLHSYNzJ",
  "key31": "MXUojXAF6kCfBUE3yPNbLHaxpkE71yR2EJxbjwFU234DS1CinVcWnDKkncTgjz8jwBxeqjGdUfVGGdhyZ9dAZD9",
  "key32": "5tBv6F44RC7HebXeEZoB81mYW3s1WDYkGwXJZeBxjJW8aoM2yQ64H5sAbzqx7aA6RWbXtSpGeC2hJ21DvVt4mZD7",
  "key33": "2LHFBrSa3CYeJJzTJMuZqJHoERU6FWSmY1HAdu72E9Nso6aWp3QqdYFwGHD3SLxqzruXWtiXQu9qKCN5ivtaYhAY",
  "key34": "4oLdWhHf4qSLfPFQo5rZBvoBVs73fu5j4Z7Tgb7AuGgwqNDpaZPaqerViy83Tw7mgfSGBMEf2dEbyAAuhWE5ibxn",
  "key35": "599UB5XLaKpF3HvY6hgZJCgLYBRQb3sWoMbPg6cpp4rWbuVfKUtLjv8aW1PeQ94x27TTdVSTBK61c7J41QGbdqXb",
  "key36": "3NhTp2WVJqqYYDmhq5UybHrBF5XxxLfeu72QtJW9fMNzianGHYcmhJzjnqJu4CT1NyK8R4GgD32wj7E5sUsogphs",
  "key37": "4UPRG7VTosp4Xp1gYLQAqizUKDYQgYUPntPzNCF7mAT6AnkTsVbPU28BE4KJJrUWaDMJR6RBg3YxQrL6FFRSqZnj",
  "key38": "3wNyJwKC6dzcmhedKBDjSbxoZXXAJFDs7LJfBWH1tEgyhPkdpVTzQYadYCih5iUSKHWc2R5X42rsChGiiFs7dZAa",
  "key39": "4Tz2MLvaBXXaBucBLRQ7jYficJs2mjwN898hSAGDGmkCd2E9ZV34cfKs1uTmW8rTmMzoV69dgWfL53UvPF6vB24Q",
  "key40": "3tDWKvaqXwJCrCAq77YmHJphnzirDSFkJ5u7mJFc8v46svPto7iws3dFKnET5CDgzzi5YNc3RVaT9Tqz9BmXgCYs",
  "key41": "3kGrz59jcGoyDjcTy2hvJhzRGkYzcA3yGyoHE2wdPYk5xrDyNgToGSrTVYYrZMqYgbtNNuTGYgkTCKvNandZL5Zs",
  "key42": "2iqBSugEuvsPhqrayr3HA6PGgkQqWPuVynfwvVBEJkmyrA8g9gKMwJUUjZZkhuEWQUgPnVrxuV9ME4SJKgjszJMg",
  "key43": "y4JVCjwLBQWLmrWRz5WnXb3HXqGSZvKKcmxUgdPopRkgE87dHZhg7UFsQuFhc7d3Qg6ggyn93xS8qkNReLSxh6Y",
  "key44": "9jkBAgCLtPfC9wqVLmHUD7HAcfgmM1BdGs9TvnBKasNBY332cg4GeBou4Py31emJqkco34VjbewbAexnFDGWvGG",
  "key45": "2kZ4hRHzAaok6nCbEWBAqjj9N5WF4QQD4E7ZT42Rb7pZAKVEhMzWb2TKGYyru8pAgeRuBQU7dXSxHPsw2RkNfNeN",
  "key46": "3t4WJr8uLcoqjt6JXqSEBHgUJpr5BZNAMPvowE6hM2gQLNER63eQ8bpggpG62aJdwFJwNKTtxQAwssdyQEtfwexb",
  "key47": "22Y7eiNPA7pL5B2UQRT878CRN6MMy8rrFWxq8LQshW8WsY97TDGLgF2MKkomKBc3ZKB2xmDtBgWp96X67q1QdPUn"
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
