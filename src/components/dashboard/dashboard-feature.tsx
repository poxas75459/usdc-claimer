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
    "5oMFwonFBnNx6tPPWHXYzMGMJz1ngJfpviLgEkHbskGm6DeV8bdhnwwZjGS9N4SkVkDUjAb6JZFS8PoNeStQkvEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L2vPsZftwLcy61RGtcxk7GZh8jyxHpgiJoPZBr6bRa55x24o1CSc3qq12AdQrQxQ3UwFWtRvuGhST1cFJahKwAA",
  "key1": "22QungnJkAN6SoE9hWPmW39qXAvWdb2ww5CWNXn45koFM8KFHXZD7RejtTLWDULJy1FF3acbdctv8ThKEqvC65NT",
  "key2": "384CRA3fstgyRSW3mgwaX4SVnVLaFAiVq2voXS6YaWmMwctUArHYoBEDfbE4Lv7qtQ5iGD3TCLLKNNnx6DmLgG33",
  "key3": "3vZHTqqXYYhSoeqeUudJaZYQXfE4a1t5ryYpuvDy3sL78NtjtXs7fT18xeNot3Yi2o3rBbbSRfQdf4r3yu5U6Yvf",
  "key4": "3GKgUgXCPktwWZK4YkpwP795UEd5jvvjg1yREGsEDbqQ99N273vHE3uJEv6ThF2v3aXt5ADq5dezY7Xfzj1GWgqx",
  "key5": "31SfZxfWbTMFTqpYwEQJgB8amW98tAcmzC1TS35Zq2esEaWVktU21Ate2DfxHDWGoVod2pDMBWrJb5jZ5WsmZYog",
  "key6": "2QnXZYDog4ysvBe4YJj3Hn1sa1GxaWtL3SJ25D7fjktnQGN8uZB7zWYQf75LDGK8dLUsKauUVK6Hg3nnzmrvL6uw",
  "key7": "XKRYXtwCZGNLrdhNseEcXcbsvrcBGKjdX7V9LT3dpqmjmEmWpYvUgn1Ab9rgPbq3KFbk5FDPKuTm2wmKiECuTfp",
  "key8": "5KgG7VyUYc2v93fzHMeystFFBmj9jYYG3m8qtTDG3iMU6cfPaysgTYDorAJzufrXpUZTBjxYPtLa7XGCLvPcXRei",
  "key9": "2ZSxFYtwyVYk9bFJGXeDCBSbgocK39tUr1WRyXfV6FNKPYeKXK4teokdk2fkvpAXbV9yxHj5Q6neTowRF7pkduj9",
  "key10": "2wiXV9w9gmCwyCi6VSZYbPSxHuYNvCKsiPUsbPZZmbmnEJWhwvtrbyR5c5aAznwCgwZSs3QrgWYCy2vyHoZn7We6",
  "key11": "2zBxbJ85VoayXSM5ndMjp2jjXuL9qQ62SuDZo9Y4UmFeNVPVciK1BWwCigonkfCddV3TqnedAMRsHHHkCyB49G2a",
  "key12": "PBb1bpuuq6NKrc79i6PWjBo88UExSBBVCEtP1KMP4bYs7Sdk3b4kxFytjJiA9uaApkwmyVNMcqPY11EJAhKpMTT",
  "key13": "2sXPYRXKRtufWzQfXABsWKt77EjnC7pPMD95ewBa1WmpvrwgePvagxgnfXcXW1jZp229EQZd4GXKb7nqmyfZ8Jeh",
  "key14": "uqjvGSUqjWXh6KY4QLKFBRSf8fQiZQxs47THSbzHj3HLCrSykdjF6uK61qX3PqUqPh3WqMaUa85gMdnMncXVw5k",
  "key15": "2MY24NcjLvpYCYCGPmcCFf7VEVRh9XSqvVhapwzTfqHdBeizFd8LrePHX4Kx9XdGXwTcZj7ECe755MktDsVJK1RY",
  "key16": "vE7aePNDZ9omsRkwVxWjqSJ41hJf1B86D3FM9tBQaQUxnccg3C8GNi86UsQWRkJeL5fnwY7rCzwrs1HTYGXx6ho",
  "key17": "36wYhttVGaAc4ZV393wVMq3cYS4gGhHMWF971dr9rdhMSA345CCwba6FboNF68cB2aSBvQv2Nci1VCg1MsXJ8FRd",
  "key18": "2CbfxMiE7ZMePXaj6URyWLPfamoK8QAAGi9GKFnZzkGzqNC2FfJNdGsUkyyM9QrHn91FMd17aQx2fPRHsJRUx32H",
  "key19": "3P2NKxxUSEHUmgCbVryZk7ywfLBGSyure2MTZKXhDQY4kBhiigv82GjnyKaw9jBd5gHCXd85fKyNafQcKcAtpByP",
  "key20": "4bPKm3E5AR5B8zFcZFaTfbZotjsoduscgeh5TpD5HH4u16vsb4CHrXNJtRb6dvs5nU4tCLGdPidwLdCF5gckXrve",
  "key21": "2F27hQVDb4b93gFgRFsDhdxpvpfzgH9NLGZBdLdGx7UdYKHxiPNSAXcNtvcoPdzzJo36THfiz1zHi9Bcabf1DSe1",
  "key22": "2VUt5CrFM4NiEKMWfzYsiwvGTRj8mCEoeWBvrzGrLLfqJgqzbTYWgizPTyJb3AJvFZnyLNUq56gqTgExwvm5Xuvm",
  "key23": "4157QEHK3CcuxmBmUsdBexDheKHaiw9m71cBZydfNPh4oL1w1QNNsCxbUzC1WHkbxXEmqVHHTPS9QhudzFJ2D3PC",
  "key24": "KVXteg1Ej61JduQMnCw6bxrWtMUrhouSVtosPAt16ffVqxJRpquRknuJLpGpE84atHdMCeExuQp1vfLY9F1CBVm",
  "key25": "3MVEntoTBxzGJdz9SVLgTNWnXue7poTMLF7vCchXC87fjdJCNbYZ7MHHsnpatcBWms6fmA8iVPtjtrZjwfqJXUDo",
  "key26": "zHkm21ihqXWaTUkq88eTqhJvTQfj9hChgJdU6udADrZsrJP2ZM7k4kqTdwtfKj67kSFFC9V4MiC6ybqbf5t6JzX",
  "key27": "48qmWsnKpcKDVZ7zBfomwbUCGkCnUVchSfYwVTPAR8hVu6tZS1jwm6Abxmb2G47wKEc2z33i8gCfkRw18yfXhZJb",
  "key28": "45QWjpwVugyvfCzdn2yiwMjc1JMsCVaR8pwfMAZh3JoqYFFBZ2vpFjMiPJhee575SsjtPP3eFiDwGuf6oMj1rHQC",
  "key29": "4HiZdF8sjkqWhAZHT4WkX4omEnf4MXZCDsf72zjPkjvsiP8LemFY9ZuLto79pHRwZfDcA6uaGXPsWKGJJbiTczPG",
  "key30": "4bWufT65zqRMb5sH3gJzUfCgy92XJVzc6nnww5b4VDVYrFboAt1TPz2zSM1gpetoC9YhkZp1iYtLidu9nV5MQcYt",
  "key31": "4XgFPWoZzjDzJT2cE9CWF8RQpcYJdNFKVtxrr97SrjHpLVeUjrookxBSTt38dBP8WnQDF7p1QbDVNSHsgRjpbwjj",
  "key32": "4Fcj6AKJ8fQVF7voUutLzwghSU6HJYYRrEHjBbV3UUEjirg2zFf2hW4SZy9zBdpQEK3QHZScoX8iwxXiGVHsprep",
  "key33": "1hxCijtv3iDM4xzaVwQtRQk43WPdhZMNtjP6zfvikTYa6dzcoqRGY2FExgegKCHnZfKueMGv8JvpTA4VB52jbvG",
  "key34": "5pM1JhbFfevMsF3hjryjE3mka93mNF2xo4pTjsoy8Qa9MG2sdMPnRAPxiNPCFKd9RSA8CNB1rbQ9tSy49PTnSYKS",
  "key35": "3ydsKARBaUrGoChqHiA2d7c1Zbk6dwbBW8qZMUPWgN9xhvSech7DcJsSzMF3AmP6L6HGj55FLU49gtQLviuW9PAX",
  "key36": "2Shkr2a2KVjUEFFYmiKiiLGXHeq5ez1qWuoFgEZKY3M6mE85wdnn6kPYZHC18SPt4gETvuwykCgnrHqMafmvJ3Xp",
  "key37": "4rC4i8td4Bd1oKq9BiwkHWFokGSUgyLTz3pmn6octqB1FYzmBUv2k9nxMhDb9eTNgxXNGqrMZxGcEds5TtZ9ro1Q",
  "key38": "3nubdKM2yTPRcANZQU1hz3thZNez6gv8YmMPuXuistwACYZJmbmscG8zvfB5UCoNWQHB4JUrqxrKbGHKndRmxP2n",
  "key39": "GcXtpeEsM6K9Pb8sUhZe9J6DGvH6wVo2k1xGT7hhzn8KTGA5Wi7K516hPyd8dd1Wr8c7ch9GbFLPVEdRbqKpScu",
  "key40": "2ZQzDmrn3vUuKLydznRJXd5qshhZEBbDfANRh7JqKqtURjcJMp9ekA5KaWDNbyW8f3b5AFWG8HvzisD6m2GYgn14",
  "key41": "67mMviwCnAGgf7nhKddB3q3L63x25qWGptfZRBxfNc2ZvVqdRUyRk6QrAtdSdnp8XJzj71jmSuxznvTPDNwntMQ3",
  "key42": "5R9ke8D7dhPUDk6Sra53Uoz3H2Lfn8KQ8y5VQZVix2EAfawwGmmZSXZLhDip18HeZDKduqog9UxAN4t9gb6wGSLg",
  "key43": "3zKuU52tuuvUFW9nQAvfKZA8FjrK7hSd65oTy86w6yhMUBhKVJDUjpqxtdbnY7Rk8M74vNCfQ8cnzsVGT7jeACAN",
  "key44": "4nVnGmsRj45a55iDMfYESETWrQtUUwV7xUn9yv5QcyqF8EGNnXsRhdavZbEx8p5mBbMmKJ5dGguCv1ApfKu5csd9",
  "key45": "28Px4kAMR3n5y2b9ZUnGnKFq5VwYSu28Ps5G2D8csGk5pfkEkUEKtbS3StjA2KdNgZdTx6oExe9CwGgyBJcyhfag",
  "key46": "3tmCXe9cTrTWo3cmi2FqvMEUw7uiF1tnGNTbh9SUgRpGD7cAPm5XbdNTV8cyf6j9vRsfwP8KKNMPwLaeXZpBaTfa"
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
