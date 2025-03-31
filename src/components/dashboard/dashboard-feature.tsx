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
    "3XrFDYGuZNj2w4Fr3DYCb6iF2KkPsSfhwLL2Bpq1CADfEN6x5xnpVijTWQkHK2VmXgwz3MojQfzZstexCS8W9Wg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YqLrbVHizRtkhktYHS579NyhZdbocTgXeE9EYFHVPdNh5RW2d8BFaFHtnZsUvJAYTqMT5vucTxEVEJFjy6VoYet",
  "key1": "52Z9Tcgo8vNm6FZ18vWg6KnnQuu3S31oVAkCQ4RAQgc4PZRydymx85wXcchNDC2vnEQnNfRC7SkKMa3cKrqBHBxJ",
  "key2": "6CFMJ2GfjKSf5Xcmd4ArQgZ9Z3WsLd9e8MzpZvrqGSbEQnJunaSNzXeYy2ecN2CLritDeDDYjrD7zGPK7s6HEuW",
  "key3": "67WYqKRHULXPms9iEA9h9MbprF9vxqLt3EJsZuiwPKg1Hhm4q9B86AXMiCuC7YaH4mSLpCJKKiqWpUDFkKPfJNcf",
  "key4": "2KhY1dBFNQ5qansjD5uSqMJVfbyxgKXGUdYXpbkN9hZGiYaAY2Vr82hwoqxMDBYu7MqMSS3FTaEuA2kw1D5RJtWq",
  "key5": "2FDvyc1i4z39YiR9CfAHSB9DEnXqDMeBa6D4MJX8BKWKERj9RfSwEr13pLv5BBtFfJNccgYCHa2oeQPdKf7rMzVq",
  "key6": "2hERjyPaoj3KnxSWdecFe5aFt1Y2Zs86WMP264HTj3NLhC6kFB5pA9wFa8Q2S6cLsTVK9BCa1ygvHpMBXA3JFeB4",
  "key7": "5d3jzYppk4hajoynuUQ3DVdtpD1U4ZKMM3esWnS7JkY2yfRTiW3dPDX4k9Fj4LTARAGtAkz3ny9bC4tG5r1k9wGL",
  "key8": "3keYqkvrzsZQQSxoyVUnCyALxepVpoQcioNMsvS2tzBsxZ8WLSpQ2GxHbXtGUVcVEeQsBQYAi2drzx7JbYyVV1RU",
  "key9": "2du32iwWBdKUR6QYgLwdo5hAvco1hkSdo1ni2UM6yVkAgBqwAqZjceErDD81iESpuyphEYtB595JRB53RG2Zf6WE",
  "key10": "3pNzFTjzPdSHkHYvQCg5kSfnjWwaq4jFThvifXT3GLSWJcgffvQ62JCxBKGjDgcCF1C1WTwE7XXPrMdSRHEcys5F",
  "key11": "3TmT45xSNXbDvASwyTJxxsbNfre7jNBHYoSDKK91gQCAEwwQtYiKWUWe2sBdkEjR2ZUTEYFUUFb6R4GfJr6DL1Yg",
  "key12": "Lww1sUamfqLHHEgwo7YSyin6cTfkFDY5axFPBFJJ1asJss72zm6oq87JEBEmyKhUFR4fzsDYfCahsATBXdFuSni",
  "key13": "EjkZLgTgat9fA3qkiHB6SNUGLn5ywoQ45RHqntPfZ4QdyLvie8cKkG6pwMq5SkTbwhMshfgLszJbKeJMayApdKu",
  "key14": "5DYx933XJWkEkhusjCGsndxSCtaTa9Ss1pDdDGPzUEnjx8TZKV7XZjBiyoKsaR1uMQXc75ux4TtFqFG4KU7gGYgB",
  "key15": "2a7LLQfPfXUBnnrD9sV4tiXmcVhLbvfzVGtywzUCnRWwT1rgL1bgZwEAS9Mg2srxAwfiJBMQk6Nhr1Q9DUorrjd3",
  "key16": "UznwD3fcxwEcgm6aqg7vjFt1QVNaoydfNvMLob35wH8hMzNqDPu4N7bzmar9ysmzYH8UiPCqfHP96agFt8GU5E1",
  "key17": "dLCH8VajxxUMrjWsZpC4wepS9qi5JNDg7yeBytjLwHqxFqNXicZDDjbyJRR9UAoNWFKGcVMxo1i7pidDyni4ysw",
  "key18": "3vFtXnvApMNNjVJmYNTQDh8BL52zW8W9mc591bZWPGVKvjYe1QqPixKqZVn66aAuhQNHPwHjYNJiBr2eiE5fxzBh",
  "key19": "5A7wpiyoL7NuFNNM8SXCHseKdPJSs3xx1kvBKYqy8viWX6kb2HupVpXcGRYBUrgxYxj7kw5Fxr8Qray6dixYNS86",
  "key20": "2fHog6kK8ws1zdvVQbM4SbbKgaPCCpkNk69D8YYAUvTpsCM7j4b51KXryT4Jut25rZXrUSxNZjZWAhr33ubnR4Ge",
  "key21": "2W3vmK4HKq2Bp6uFoEWVFs2m4Uz6Sp8BEBmgZG7kUcuNuGfGnEmWBGwE8tUa7GuQY421B9jFKP3fd4qdnfq4sNen",
  "key22": "2mtLjzJrNo83jdNPwhmrFazNRULU4PVXHYf9bn6XSENxz6ponK8vLoCfcLtv912gWTVmhVP8REaXBmbigbSLHdxg",
  "key23": "4amFXYedLyheEjgMx3zdqR9AzXqYJ8WCuUQfDqH7HBgps8oZy67JvoMb8SCnWgPWnn1vDAR97yPLSp7S2htk4dni",
  "key24": "4GHwPYWFsUoiNGnFBTTmsoUTjrGYjT5BtEN3w1jtWwxoTKrqJnXpGHB2HNu7PGXFBjhQuyz2ukRbXVscJtZE82EK",
  "key25": "Ljw3MntcAKENbe7AofTogJrfgbBKhQvbXgYnZCgdCzNYCsGv8uKFyv1RWRam3phFxX67QtFRcYqL2GLjSBrrJUb",
  "key26": "2DumtUBsfUa2RwnmgiNKZ3bTNktkLcR2rmQFyH6jFGbxmLQ2eQRqmHWJ1rL9EG3jTijNJZbXuidyscMjbUCEYwZY",
  "key27": "5yjkjwUrKXsBnzZTZThdwFCLZnYJbCQi6V5xdnJxvi6Shq2cBdTUDmJUHYu9EiBBMAvoYXXHWdBuZPyip1BHirFq",
  "key28": "3i5W9CEhQfTLvuNDfN8M1gtb9veWGCePLjpwiM6znCqmD7UgY8YpxSQCqFgK16Tu8YQS9G5tGsqFLzfBPxVnzRXr",
  "key29": "4ebLSSRL26xGj1YzqPKkJdkUCpg25GjQz6idpTd6YBoCzein4VWgudmrLD9HEYq3d1pqqhgZjZyoyWapWjep3nAo",
  "key30": "wJfqmRKeyz4SNpKiQzbyxFPKJJfCpAVVgZ35NT7fFLrx4rppDDjjv9Lj4jq1HkAp4DPDu5KVD24azLbGuyJLRX8",
  "key31": "sWbaJaXShuQiGwPxmGXCy81h1rkpQom2uH4QZAMv4AsPoqNciPzCepNNGCiJHrk6GcZgG8ai5d9dzkFHmaMH9BX",
  "key32": "EU7c5c6giiYJ479Gmg7gK4UKY9XMKjRRUiG7Nqik8JNBgM7vY9q2ZapJda37SKbowbJndT9FYP2trPKtJHsKgyk",
  "key33": "3pvyj43Vgxd4Ty1mWP9rJ2syFFCzG8Z5FeKrbkqPV8ymxaNsJoadHRCTtEbLVzoqJxdWnw3s4dTwwbjcCyV6CwJT",
  "key34": "3m8Qf6ukbHwENfFT3PsQ2kZFVPXA9Qgoy8STgzDBeiQV8rGwnJ4qdyB787yAV6iEYg9LHGxhPnBFtzwuAu8UUaru",
  "key35": "2wGvmawAEPR6tysWAdnrSRucGppnupNmcDBd5jLSy1q3ycA3xmCAhHBSJSgtZZgSB6mFgCGB5L1vM8sZK53bYY44",
  "key36": "5aG9w2EtHwVZEoDT8qbEov5wNwzaDQqkcy2YCC28aB46315Q2BjhZANFtxyscMBFFZ9Z4obFJbkiGv4uNeGC14CP",
  "key37": "2PGpXSXJQ2duDwRQG8c6c8gPWZDWCqb9qMvXi1EPEKrwrhScs1NE3qiqJGTWqGQ8svFMcDr3oWw939Dn9vU52Edo",
  "key38": "47Uk5jj4gp8d5kaxQDWgqitt3MxEz2mhqGewQVEdCS9fQcLRDDtsZGvTE4Dic2zk57V8nzSjEWXLcWervVDQVDeX",
  "key39": "4BvDe9jA97fJRSarhtrVet8JLrWnCCb77AjPth5m7SHj5ZkhhfxAK4xh5P7MFeQnGAvkU4KZAayz75X3jbjKsbzL",
  "key40": "3nKycvaLKoEcndrS67VVPQUPnhqdhHMjfFHN3DnYr63unD4DYoFmyfoXkCGe36tcidbb1dDd9SvZqLKBDxGTLngw",
  "key41": "5yBvSUBCr8N2hBFo7PeSqgq3CwAjqnvzWzsDDDoE7JvrAkL4SbgGxfZYRxxTnneriRuX7yZ29vqYhZQqarV79coX",
  "key42": "5VpXdxcBc9K51XJ8uantuqHVoZgVnDNn4wgBJ6yBqbGHQgX2pnrudMsDFudtyQZBSh5NHxHNNguJYsXZuPxFKhmT",
  "key43": "U6WKvcjf5kGfDQanJWG1axg5ouQki2K15ecbjY8tKfMWVxWMyfK61g2xDKBhQ1CzmhKhCS2twBcQkrUDWLcRN2H",
  "key44": "4as64MZ8zh8cFBNw75FwYWwqNktosdckXUuEBXwyBaGvHsqzUKaHkfzQmEUh8Z5p8t2hZYavHzder7bERETfXFSU",
  "key45": "5kYgK3jWJoQ9Lifxotj1eRCopR6rEXgkGPtgRikUkXfaXsXNqFnNCVDdvW81tkuC7T8K2orLxgq3gbUzMHurQnBs",
  "key46": "39sWcHWXFjSFGf8TxkJxBH6D8zpr981Xo43isxHxZCn4ERUtTiFyHPpX9ZMvx2pS5VjSQSwQN8HJvykFFEYrVwwQ",
  "key47": "3t9fRmtDfQMS2NcpQPBQwGngYd31QUJw1PW5DyhQ7J1RMsC2rAVeYgvACSQTy4r3C5dmvjB6K8YQeyex6HRA1BFE",
  "key48": "2VHJN8VevrcnyYXSEKeAcqAwQbEDKTmTs7LnFcDWddiUEFC6kVWR1BoQBP7xXHmduVkNWVMrGNYXSygH8ooaL3Wf",
  "key49": "5tzzmhpYPtXgsP3yup9fDCLDgTorkQbPYb6VcC4mFqgYobmNKvBbmN5rLe84zPaKTa6pZ24CArNtax5wGZfoUF74"
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
