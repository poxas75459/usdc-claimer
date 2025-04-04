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
    "2CdSbBLUyvnu36ADGpoqZMo83xX4jCGJV2gkbYhJPxfaG388JZno5H2zNS6gm1P42UbJuPddDHQ2YgNqCsvDbkQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WebT4xsDCaHydZsdeGduKoeDa4bUwQ8KsN5DnmRQmnwqFmsAxeeAxBzaKYvuTr7LiqMZ72k5hitoefsR1m4JqTW",
  "key1": "k247eMQoYt7VVsUkmkABpEYUQt1aeCd9SoB2sR7LcDsHaUtoRX1fa9zyjgCcXoMQch4hBRfttk5WRNjFQp4GAzJ",
  "key2": "2eG4sH2bt16SynG9Rc5zvUsjEEUZNnEdTVtdZuqcX8Q3LLqWp83q2QvoEesYyefPZcJGrB3aavxzgrs5Tur9iLVm",
  "key3": "3Gyf9Z4QZMgTDZCUGm9miZK59bhjvpmGB5eeoU6ZiAUVNGYGMRYRGKFF769TVo36Q4VEegmbP3CxnTfKdbxXuWm4",
  "key4": "5gTgkjqdVdhFbuFHjjBTwGD99u8HJ8qLrSy8vkiv8DVzRSV13x9QQwJyazGw3QyYYzBprUr5JxH8DSohvXBqXEei",
  "key5": "8xab1jt9HhDHPzzVxxGwPBPcRdGGaBC24U63w2qbcQyf1cvFBVDtH71aQgjeosXcefcwZqmhggYZmv9UT9HdQnH",
  "key6": "5fSn9NUZrBBqvpND8CaausyuUq3TFfmRbnzswZbL1zhD3yvBjmgVAXfGSteXUy5SDcQkxDqeNF8PLM8Ly3vijac4",
  "key7": "2SFsF5MaTF5bVi1enUbTewjnvrqwdRttrQN744ot8xxGrY5dxt9dm9ZraREaZ7TtVcrW6hcBTgaBoLPaJbQZ289U",
  "key8": "2kVPvnPfPsQkjUdq4YbksmuAeuPZWuQRGacrYNyNbEhCXg5n6HVWxQ2KKfFzfqtXGCDyJDSaRJxJpMHCWXAg4tg4",
  "key9": "2jrh8wKa2LB33o2w9DfywWhiBVv1Ey61VtUnHwLJk8xGGQQCqts7VLoHy6MA2imBK16zc67dyRtCVkvNzKHohKTc",
  "key10": "3NQrtceobeycuFVUknvqSPmhpG5FF1PMUnAUTVBBWoumh75zRk9teS219RwYivDuE7UG3JCWkrhBJPTJ2qjsLx1t",
  "key11": "2pt9GTyJCX6nZDnJCkAA35Wc5SVzChhhTqo1Sos9rv4PN4vDAp5R8gpz2fAbaCc56d7Rhb7Y72grhS9JV9zyunhV",
  "key12": "auLQ4UpWUjpkAg9GYWDXnR6ETpbKKaJ1P7t5ouXtKoEZnEkDgQaznrhHcsav6k14XsVKQoB8MoD5ESWAGtsHMtm",
  "key13": "66oDWJPmyEEd4chDqaaJza8LCLMfRrcd3tWUUU9fiM8PgumPWVn8D84eivptTaeGuVT7Th8B91EsLy1dHnFo3qQz",
  "key14": "3QJJa8ygpiBtrBotPvtF34U5kvEj6JsWpzhvfA6e7HP8VQ96R1UKMryCKLFndWypRDQUQsSkVh4dKrHMwFhXEEd5",
  "key15": "5o455rtqrrdbh7WG3xpZyp4WttzLuwF9BWh3o5qxu3FqG3qxDeGkJmU1iJA2R1V5GggzW3YCmGMj1NMpeZWdtNWj",
  "key16": "iFBsBvMKd6McSzbQgsRjPAtqL16hdZHLb1V3Xsajsvz5H3VMcnJcrJ3b7JSV4TPe3Vuj1cvvpmgsKqcNjsqtRqG",
  "key17": "2tAMHMZWdWBEbDQrPZhJfR9hANza1Tj37H8pVScU6hbx11E439jid87rSLtcSiAJR3hE8sWNJU3PrtR1rwQzC1DS",
  "key18": "27P5pByUStUVoCxFWZbxaxz1EDszZetfVNw2U6YSQFkF2j6C6Mgxvreo36gy2eZL8BE4zpXAdv86PU8v5AEuZBin",
  "key19": "2xreqWU8RhK8dSfinxi4ev6ZCoJFbhtkZAhj6sTXSJjs9yNDtyHJn5CUuFkQu4gvRByd3qG95ZoEsASs9PjtqNqt",
  "key20": "5i3rABTut2dtnBQdWcKKUvf8GMUqR3yWhs9YpPg96Xc2JLS1uF4yiyjFz8dhG6s52jKj157B8rpxPYZJ8yjh24Lu",
  "key21": "AqS1yGbAmiTD6x7gFq3BrUqn2Q7f8GTEJWBqB4pJRDzr4zETznvu9TFLjTdwH18pQS9e8TeSPUQBKzv7H4HYjec",
  "key22": "3XCq2uoQFWDwTrVzbAJTMA6SK6M2kBvgb2wNb58xeLfvAhEYHdVPA6eTRtobofAzfuXf5RK9KTZobk18HxdXwqbX",
  "key23": "3NmDu9mntcm9Tp2kJNTCEHFMfsRPRKMrVvbjhrmHr8EKHkxQqgJ3aNGxNmjs84WTWcZrXQvEXQeUQobzXboGcdo9",
  "key24": "35Av55EWmJkP7s69Gd3NMdmjWq4ZFjDqHCiqaQvj2jRD4BLUsZfhHrvJfJNUNXMtZYMHbHUMoz8rUbCDq4ELuQXg",
  "key25": "ZHQ3Mv21SUMsQjEjR2x9c3oFQayKc9NaKUSs57HbCRw39UbXk2ATcwrN2CgUsYVYVoVUHZLWEQ8YN93F6sBvUgC",
  "key26": "63dfsDmythUeiYD4kZYdZ7p5ahDU8qS2BvJZ1UubLX5n1rTUeCpJnE7Xq8GY8i4Qg8xWhnfx5ezGeTLM89NMrZRt",
  "key27": "3giPF6zotKeiEz3gRYHhekA9NGykzZ6A3p1UMyp9xLGjSX2J5Sy4P9FdUc2N4dxoxrRec7jExYSFwKbAS1Aii3MG",
  "key28": "U6Zn1P2o9TGipjSEpTnLfjCELn7siiREBzzBPfxK63eaEov6LRvbH7qYkPiR1dmvQTJDe3kmxuy38hfsDLWFR9U",
  "key29": "mKyF4MopamNaw4ZbepoTez7mEfGRdDLeq7R6tZZYMoJ1xShhLsi57ycmf8g6eaVur3KLbYAeym5KxVt6vbDeJXK",
  "key30": "3DKz2J4ci8XmtoLKvAH1DMgUiVYXJLJqbF59VLVPBdfQDte8sLfpWL2DStz3bXeHn9VpATBGgu3h5eGJNxZpJ6gL",
  "key31": "4eyZTWCcbtCbZxgiteser3vMXpma8JEBQzv6NViwp9oXC8NxbLodySJ856UgKuD8AVCVUCyn32sRkrSDRE2UxJA8",
  "key32": "L9L1sFqYcVisLhEm1JddLgrkY3Wf7dA4mUFRhofS79MaUgi8TE1D3uatGEY6TgyHnjN2gY83QJqV4Y9fzRjcKZx",
  "key33": "4eFgpkQb3bfFft9isoC9y3RqeLbsoxtnh3qBDDYx68qnMg1P5ceqVW52Ps1CqPBUSGoMsNRuusMg4Vs3LRzNfGB",
  "key34": "37yYKwLow4d5KSKq8Z821SHacj31oUMUYvUgkGEtHj6HPwrJZwUvVNrsusroGweTYeD5pLvfrqC1s2FFRGeVRADo",
  "key35": "29ZbNjwTERryQyX55h7sHRhg68JW4E8hM593uTer3HSRcBTefN5g1Mgayp8GVvqUbjKyUNBSousiVQaBt9LMRSij",
  "key36": "5V4XSaSRvMguLj5qZecRf83JnbiNRVcknRv7SLd3x3KLPU7wnsyB7vD1tbbUQsCFTkNWejjQABpB6iNyX3N7AxZp",
  "key37": "2mL89dG9tb6HHTfTmkXCX9oMsSzMMDHCj3ue76DapnmDLXYsPCKqVT8zTQEMJSVoSr2oPEEobW1jf8Ax8j5C8izV",
  "key38": "2HFgPUBrtyGJQ8CVLfNuFjmprTKHWyhn9cRWwVQDd7EkE5zR9JypwEgf77Fv6xht6z1VJ4geqWGhtmHqnUbHm1zn",
  "key39": "3EJxvgPzR3UbhNygGEgBdExpPqbF961wvgKwJb5XTDrXCtNCb5L9HcUgSMgnkM6EZEenpBuWtBK9KRCmFm1gunPA",
  "key40": "3Rz321dTk6YPnBfe6pePiu96jK4LSFRDHVDmFj8ix9rs9P2P3NCEjsj1dGRT5cNUEpJP77r44vSQBRju79iXkgGd",
  "key41": "5yi1MJomBBLMkfDzRSPgBYLCDWcWAWJ5Akd8gQ5b7K1Y37zsChvbudHKCeuZXkdTxJkkUb5PuuujLG5YuKfUdJ6x",
  "key42": "2P7D3z1s5MBpBrMFGqGkF5H8fxVBUsPjWNuS66iMWzcC36DMyqYN716shpoj5xdEaA7XZkWpG1ZctsTUWbxfU46g",
  "key43": "2ZbcFXoBejq8nKsNEKXmQPNPVBFKT8jLDftTZcGkxvkcHeRCTZrcNQ9zxwYVJn9mVV8gDaGesh6tPgJgX8ufTGhN",
  "key44": "QjJTz26v2j1YXqEcKKKRp7DSMM7KdZugXUpn5K8g7tx8h1HU4nxoozF4bRu8zAu33HZnB6K366QnvbpGJcWxKbb",
  "key45": "4yaa8MTykWkeUsn7Q9dPxV9y8r26Y3FxP3S72Cpy2PCEfr9Ma7RYo8KAj5P3M3Z1AyYWB2xBgjdgPZF3yYRWhR3P",
  "key46": "4nuQULbfPWBPWWEEvs8KpqX8qjFQ8K4xt1RapQwQshwtxEhM5ydnh9xSsfW5rtK8gcASSCFvz3f1wHqZLy4GhWMJ"
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
