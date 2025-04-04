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
    "W3GFr1PNsQa86bUvMiQ8G1H4t7j7sHWNy6bdEvC6xy23XyQhsw4tRwfVobeEgGuTKsDxNX8GtUkUGw3JSrXEqLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65b7CwG16CBwFy7ia8zRU1EMy2b4PoNkgxv3F3CAoc31pyRXFdoreSW51qpaXLDCxQmFRXMC6z8NxqU4ao839o2F",
  "key1": "3XR8awaS3Z4c7guqJ7zRwqSQkRq98hrWzM2iTAg2To5LYJ1q4q2LsXGp9zRt3SnPNpiMDHmzZ8df2sZ8GWxmA1HY",
  "key2": "4y4bv664yK8o8ucrxetNbhoteMkFSguNyD1pVHfSYdgEtL2j94Z1twmvkdXkF5k4ZL1sdJSXzGu616oES6tzmXRo",
  "key3": "43Qh2Qv4AJHiqBwH8sKn5GRw5JMf1capCxbP7i8pKxe8FW7rGunQAbqdPYgDRFqPyPWHSaZ6DVdgqbcxzQ1YKzyT",
  "key4": "2FSDkeJBpNBVcoRMbZJ72Vq3WNy37ZeWWJAFkNYmKUKU6sWW8N94v69Wo6SAgttWNAoANGRHp5dZ94WXr9d3zUD1",
  "key5": "2TmmNy9cuvtHndMSPka5ZGPHAxHwrqjMkbqhYC3ciKW6VobSUZAfv62rt6n1dhSQtojXxL3LRtt1EiYbptDLnap1",
  "key6": "46QJh6krPPYHDAtWQ4z9ugwddkkcYyg5Wu6yk5yHL9AQEZr37uETpRpFzJMQPRQ7QysBH7EzXinoVPYYXohY1BTp",
  "key7": "5zVGxtqGbK5QSByphuzynQang23uv31n49EMCBmQFENC97wsHxPuKoyKJUhzzwtc8Bd1B5i4Ec7YLLyeNLeVQfKF",
  "key8": "27Pb5x6cCp75LnSNRSdC8uNCLZPwcBu3id1awxqMNAoEavLaz7ERAC6BZeKjD9jS672MUYBK2n2z44TDFcyBeR9o",
  "key9": "HH5Q7fc6q33nM78fqBWA4DMVUMTqR1bAcNofgH1sQBxvR9DEy6bKmzrEahJABtz7QAMJyj1T4DCSWGwTaPtJBUU",
  "key10": "3Yv2vWQcmESk6kpYJ8oXC2YhDtXhesC6fCEAqfidr1MAi3sHQc8dCtyakEEoZEM6wA7sczVfv6jPJiFmFLEEk7pd",
  "key11": "2tFEMx43mPPg52YhDjP4JCkyZLJ1viU4dBnsCrt227VGeoQMwzz3G7QUL488SdcN3ymJKVz8rNZzDN4SCBAR7cXL",
  "key12": "32nz9ZJbzcTuzH3fkJVuQT48fNLp5ofCK9mnRFWSuNjb1WnPUBD35Nb9poQ597qGPxEe3V5iH8W2JkwLzRCa84ik",
  "key13": "WQEqiYreDHYuHcDLCpzz5AJHbrWV1tDj2QuE3yrSwr99wRPKTqV6EAdgcQeuzomWsCxhMTx165SxpVVZczztx2K",
  "key14": "deynCHPLoZSjLExfYzaMLmZX3Bbj3yuLbReXHiMqu4kGqV6n5Zw9BhkiiUtPgM95iUCfs8cFiN9NSTb7u3nDHaY",
  "key15": "2Yurs2nz3Q55HwedL87MVyVkXRsEC2TmuScf4VeG2LiuZaKQtVPyMGepjsqr2bq75zfJXPKTm2kMc6kuojpcSv6e",
  "key16": "4jHSrGLWCJHZTugoXrZEyya4SDZe3YXQ83rSCKdZ1ugvKLkpvshk2BWzMZFfPk1VmmFHcAjfeERoq53BjLJxKL8q",
  "key17": "3sa7LJ7fCcSCVf4t1a4rtzWtFXcth6DgoLswtT9bRsBthHZDRqgGC3yPjRpBz6NFA9FCzUnmWSmkKRHaTdQgsr9c",
  "key18": "5fKz1VQpZrzmid6f8FGs59vTJ56YHQ2ttCv6sXJwiHzDRfE5UVcPerbuDZ2ryu4nDtMyKWfzTfEDeWHYZQzcEtmH",
  "key19": "eKjJFhPMMMohjhc2vSyFwrn1MNsrPNEGYeDnL3WWdbs26CQfxC8RTtEVWphf7i2cDf1hi2AtU2tRmgiWqjkuS1n",
  "key20": "2jKtoW6sDZ22jxqvU4YhL36tBKdHDdRMfExqdvePY1RSWwFAdcwHjc9WSayQJp62AycrhqYvof3sxhQTbvx4MWsz",
  "key21": "4xMxvRQgBYTxDigNLAbRd4LQvyVYnqQNGm4x7ZwBSyfm9f3fBLBa7GtL9R9x9qzWjnSUUuPEfiC2LKCB1iUKVLsy",
  "key22": "4PKLgK2ppoY8CmNkyKtyzi4fyUPL8KuRnM8BhPCSHbgMi7HvKwhQE1PWhAiUHauwUo7UM58De5pVDTNKvSZCBL6d",
  "key23": "4roCNaFWg2THXdSoULZs6oLwXwipSnj9AxraG3dxeVAiMMqFC3ABAe7k3fAzumLNWFmaypxQ97qwxam966JhjpXA",
  "key24": "BwFNawQwaan2ycTeLxPg4pnty3FeDLqpz6bQYMqSBKkAErTrCeVe7KAcWFRJUe5NtUQ4GefqkjyrkV2NFkpPqM6",
  "key25": "2ibFVVZE9EPXehJQT5PCKtJUwPAq5Db4eztiFyNmAFrRpwMwyuTummaN7jFEF2fPVFhTezCEaa3aJ3jxH1wjGCTw",
  "key26": "3oS1W2zRrZ2AmizE4LFi7L8DMjzTsy39CxrPoifLgbceELY1D7jzBmTe2SvyZ3hyhQYrPJ1f2ksyYUicYiEiTcdJ",
  "key27": "5TYMArSoVUGry8SADb5VGnazDeeeyUqZvDcQpUP4nSVULSfvRzFAuaw1kLR7abhmqEj1APb8vQU9DafErrrAmXsN",
  "key28": "RgYLmDk6UDxDmRpXkRnWsjrCydUN3vjw3sg8WH2Y7pp8pYaBpXjVyVfDjBhoiE5DesVAqv1ic9j1KE9BXd68Kes",
  "key29": "5sMej19C23FMS7X2Kb22hMSmFqYGrkX67xPxNbBG8vmBNsDCV7StaN2PzarkrFpcssSFnzmg8KdVifWbZqRa9VQ5",
  "key30": "33UqH7UMxpT8ABGCayTNLw6dS14ufdvAJSWEvLJ4caNFomaasiJ2EeFe1bdvhu99o6nhWJnfccZFvGgc5E9HCm9r",
  "key31": "2AaCDeRJWQubHURyCzcM1SLdsBgDuh14e7sif784Qvchy6GKVxchiPwqytKKZgoE7x3j1L9t5sSv3nv2GyjfzpzM",
  "key32": "5RyoEfwyEWh5iJxhsnQ1FULd8aAmuvM9NiYnZ4Beo9VADAmdeBLSQHWTbaFqs3nanjSenyXi7MMyULd8nQ6XFvyH",
  "key33": "2GvBBcHgM5Yhp4NQzDwGoKoBBm5VHhJvfHCdLykJRARgoCG4it3MBL9GEf63rk82PqvhXFwLDNqLzLsFTMRY7xLZ",
  "key34": "PceRe1LzuciHJ33H5BDb52mro9SPiKvBBkPRR5QXeCTFBRJykYjbHcxcDJGtCnjJNBkh1RSNj81cieZXJRvYAxt",
  "key35": "2PLec1K6NX6Y37LTgnbAxwv3KB7HYFTXSySSRDRVTppS6ay59CNp6dvriW7JdS3AWUZQhBCgTwu89HhT5dfnCFXX",
  "key36": "2pZkbvzUETjdo288jAV41e9PhmVFQxJt5Yp9H4tuP7t2kyFN6mwt1Mjmyp8RwCsyZZivqPtqPuCQx9zpPVsQYAqk",
  "key37": "2gtNbivzvziD1NMu3KntLMFKkCTF7EytPC7ZsNnPHaZv8BLn84hyoXn5NGmKh5HE88FqeaG4dfmF9un8GVpmR5Gm",
  "key38": "i9ZwfJ9RYyLTW2ZXyLrCDrDHAQ5B5527yfjqCtBjCnn5g11VJAh569aEmmmsEbAN25yDskxaVaYrJsMzggFvLF6",
  "key39": "BpWRmTVAsa31qx9ajVK3bEsAGvM6M1kuhF3R1VhLbZ2bxED6KaAEtrhMZRdyL3M8Y6EUVPPGwSNvGL5s4tmLDMA",
  "key40": "3XX8hyxb8pGkZwiHiidFME3wP9qQc6bjeASGfxji77fKQvkKCXkPmdiMpgM8LGzD4X8j4fBYM33JA3Yyync5XHnR",
  "key41": "2NsbckNkSyXtgMDq3gi2JjrW75xHQ2kZ5Z5DWEdeGtCPAF4paUZGhJJW8yofuAWx9csfvWjw1SpCtHheGeQ5jWAh",
  "key42": "5Uu2Z2B1LTkL8VEhtTEWttf4JfkwncPs5rUyrwm858fMunft3Gqo543hdumjs8zgQUvAvngAS5dv3eCxJo2TdEyL",
  "key43": "3kJZRR6KVsutXeC3CrJP1yT8gYcAbHWcmJtHQJg1yoy3qhsnuabWQe6aPcgzTDa4PxRFTR6AhRFdbcEM9R58AuGq",
  "key44": "cdhkZUnJxKUdihudMSW9UttJAGUrHY6rtVokLN6195trkYcuMnjWTF4C94yoKWiLwtKXQBzshJ94ji7cF7Jr2Kb",
  "key45": "5tv8NJpz1YmsotSWRBGqjKUYe3XMpjt2BBvRL889UMe6AngS8AcPvVfcAGpKtToU1PL2AAjsMfqsoR7fQN6JDJ9",
  "key46": "3atCjeRRy4vQ3TfR1CGG1LqUmWodbFtPSLdtMXrpAi6wHzb8PXGwBfEu4LkFBbUc8Ek1vRWMJKsPe6rdrmZm6MBB",
  "key47": "5tzPFtcB3STTzEhjmqS9ThpDUSb3JPVYxe4waYEyosoHHGnr6CJjqcRSgiLM1cssL96VEeWNikxBUpZsyVeYEBuV",
  "key48": "3Acc3Cim5MzgFYd2T3Vgn8E14QGm9BPJiT97gfqGj6nP4HCRfpTp2TDNPHpS1qBYR4kKCeofiHRZvz926TpzsPmZ"
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
