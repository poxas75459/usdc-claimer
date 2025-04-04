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
    "5Z923Nj6D88d6johHGixDgySk5u6oSNCHBz49CjpXxGrTGLt4mBbsNAJcKsnqFyCoR7bE1XyFsa4RNMhoswdF7yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwctR9uLewejXqRSWGf8vycgvwZrM7BvjSbXShcLvodYK8CetRuieqTjJbXjjbEHYwpkojdVwwSW2n552JRBGhP",
  "key1": "3dEF1PCsdCMySrCCtfpQn5xsRBaiwDJykXYhQw96pjMXxizovf8S86RQ1TTG3mcpisp6t9MnU9BNiWRHTF7QATHU",
  "key2": "4AMmqGKJ16XsdDY6QbbVQRo2yxxsWAWpiXR5R3AeBn7Yr7U2GQEpYBrVw9GnWuC7RzjinfTesyhNd9GDggdx9Qqa",
  "key3": "4LkS5ogC4vj8Sb37Szbmd5jhUo19UiX4kJjrYcCPYnjtrXp5N7QQMuXGv69Hhaz4V5ULk9NkJE3eyV3xSpK2QTfu",
  "key4": "8tXtpzGJJBAAJxZUukBXPD8cMx8GSH51aKzxqgjwFPym8ts3bZiHZrjAbwXZA42SvizM1E538NFpWM9RM7ujkEE",
  "key5": "4g98ozw1SmZerP2QHmnWGUYjAQHXCs6wqt8NcfmYbhnJAkYF87242JsSZFBNQkUfYJPwqy4iKUJmBpainxdnE5St",
  "key6": "WApq2urzU2FTrxhTVkrwCNKcPiNWodtSAHqwwpZ2EC1oDKWs1gbYehtuRXuve6bWJ2DgqoLz3sGj6jBbuQ6EYjL",
  "key7": "ZxbEJSwA1jNPDXQ3VYdtoWLJcrqHQT94jyD6AXqGFNKFGYyX7mJsFCQTZqwnMQCVGLtqdmJBnUTNAPLhKrgQHrT",
  "key8": "9KUffj4481PnZqnWPKY9S8eFpKnCzBtVxM4kAvuCVJj6LDjXtBrvtMrNCkw6UPfaEvRjTj4mvsRz6EAP2rSAvBX",
  "key9": "5PgKombQjSPXQcDJwnVdb4uHZNxYaxQXgrchMRVrPB27TeEqo3CUb36e9H1YhMvP7adSgk6vgA2EUjEqJemCmg31",
  "key10": "3mGNvuCPbRDhL2wzC47U3mgFFptCqbeizYDzrWCFEy6we87w1koqN5iWzjXJdteEfMWNN4ivFVsBVmvdFqjf9STC",
  "key11": "A1Z4z22DQgeTgqXKuZaWpaVuHEabHNuNFTo3PqPtTKGiptVbh4t1kRXZB12F35UpK8v6AsGKE3uGcGQghQVvN1h",
  "key12": "4qQKDCLU6gRsXn2k9KXG1SgvKSCmrowYZGNqmRsb4Nw8wKJffiHSxi2XW6MDirCTrmDYbZ9z8QYsUu9LxwaKZXqe",
  "key13": "3MTqoUSK41FxfB5pCV89n5reQg74BYTriuZmqN1387N81Vbd9Qyx9gVvQk6oqngP3TbjKA9VYaHHJ3mRKhbmqHS4",
  "key14": "uLfDJZgx6E7AWvP6bwBaEB8FwPUMDygHGTnRfp5V4pqXGQ4qrU6YiZmbAbYgz2cswrNStctLJdWBvwEKDaqKB5o",
  "key15": "5oadq1UPEHwmcME2EQDAJqnGSJDm3vyrBYGGJZEPZtQsHk7SBur5AVbM2ZSNVDWGedk8EBbASauZKzkvKkJWrWhP",
  "key16": "2JWuM5k4MdLgC8gwUeM87k7qi8BfHj5geWCMfeYtySwqUUy6KXmbujCPAGSbygAquUGCjPdnZ96BvjdsSh5Vdkio",
  "key17": "TkJVzDzr9L6gTFymgsLnphwssnJ5WTWBUru2qjHj2URYiqf8eqD36LmoaoNAh8xA7nZGg9TL6SRad5N8dPpTvnp",
  "key18": "2mZRMv1BAn6wksDG2j2oA437oaeqCsyikBZdj2XYGhN27g8SXZJBYFTWRiL5Bp1YS5N55QhNdKjb3ZSK1Xbo2L1B",
  "key19": "6DQCnqncmobnhN99PFysG5TyZUZNvrf9aL39C3SHJB88UTC8kJKvMspuwpNEUBKv5rrGhv9RKfNF2c9TuV17yFJ",
  "key20": "4SM4125cN28hbad56g535AMQsAYBxZ9XhtvHvDQXUcU1pgygFFh8dpBvxYC8MKHHroRg2hoJ5L46eMgWstjwHrH3",
  "key21": "ggEc7U8d7u7o5h566aESFZosiY47Ti6TaCoX1Jvx8aVtr2uVXmvgBvb3CQb1UrdvjCxMmBQYwYuzbo2NKkFvLp1",
  "key22": "4iuR8TMP1EzkoJC7bvPBXMpBCA1HRT3bG2jmf2er2bc8gMTJyVBpf6iKVBUKumWHjBfkKsvbRLE27qsgnij9NvZz",
  "key23": "4gEM1ukEgK5ENUFZuTRTxcLwabvQyqC4c6886d3P7SBckFg8gnmWj3igwwnVEXYYAdFsov7fSqHQTgBQDvkgWRYz",
  "key24": "4DNjpw8tX9Vg4zzRSF6wX6ATuvDcKTBUFGxHchQRGMWYuWD6KG9oqJQVx2ofpqXfnfZZRJbrtosNQ1a9sdPG4qC7",
  "key25": "4GJxfMRjR3qP5P6gpARqtVx4X8CtsWA2Lrsbq8Nm1YfyfvKYffgt7sNXaeG7VrrLViQx4ozdyeCbKsNRMtLoW4MW",
  "key26": "BzRT2Rp9UjboYUSaF28cF7yZGnRLSzxuVMeWVSojwsdTzTX8R9RPBsMLgFhm7jjQuYTxxHCssd7JDru3RT9DPwU",
  "key27": "5HfzUqq92ymu6HCw3nuZ4GpDdek1TuzgCGiUjsVojYZM9FvcTzLmDU2ep6ncTTTQ3m6MkVDM56psVVTfwWoLpK6L",
  "key28": "2Sy8bkDN9R6LmH9BMbK25mEXPy2dhuQ8RDqJq4vsdhNvmcspyfmofagsieMGbrs4AH7fqjG7ZYc2zA3t8oXnwBNR",
  "key29": "3ZvC5T9PdoFZF86Vj7DcssfCxvKCK8VojNZYev8gvvUo8fkmnBPaf2Nfo1jEfcv1FLGtaEU3fFcrws3QSMYE4rgc",
  "key30": "46wMQ1ZyKzLM4ydZaYUHVqfYVTP5tgt4JbTGvcb4JZCop5gRoP1aVQxfBh4jBpVYjomg7eaS6Q4aeMQ95nJAuVMj",
  "key31": "s76G7oYsM48DvujbgFH211XfDy7kAnEC6N6Pe8A68MbqVHmD7XYoodb9zVr72QULNEooy1i6kkT1iukLKCauZeH",
  "key32": "539q4SbiP9pSPy8Rg4oAsuSS45dvyq9SqBGEzpXPzyP7LvYjK6MLdqr1dkdm4Dh1A64Mw2n5hPdDxor5rGiNquYj",
  "key33": "2wd6oDCU89ffBDre7J4i1RcnPpL2voKP5asGAuoRqUcwQYWAsLPUM1PM7tFYgrmxB9Hm3MupyKGwJmamTrZS9cBD",
  "key34": "2DzRpS5oXEGPm669AKLCmRzxZjh2UGkxhEuqjp4R5ehCj2a1dsMw8bLatuyrp2wtuwRAatAYab5DfTp2CRwcjS1G",
  "key35": "3sep9jP4noBNntcT4PfytnkUEYZgEgCGKvKgXzt2tagczFsq4wB5wdxDLBHUn68a1sePpE88JTtkWTCWNpB8bLBi",
  "key36": "3BB1nFrQRKEtbJbdBhvF4ipPueJTch6o9T2BMRyJ27vGwSVLwTngWy6JbzYftv4iAFAz6QdiWu9Vy7L9uvmKREx8",
  "key37": "2HvDa3tsJ1GvneU1AAAzQhizFweBnPyUfDY5ejSGGxd7uFnZJJipvYfg5W8ifG6FtUNsp8ZJtnQGc6R165aGsbNV",
  "key38": "4a7bpcuqAWKfjZ6KGU719bY7oyQ2FEAwUDUwevu8ByQ3ejvH4JTsEzQjXCY3ivuuBeFVpt4RxLgDaaVA5DWqGvwa",
  "key39": "dPqgPPp6krUxaYaKXMeBn85qvHYZGN32d4NfVxFLLZUTEZQj7bsREghcikTmmnG4AQwnLvxUskxRjpe8wDTUdJy",
  "key40": "2uMdXrvUDRPFCNZ6g6FGxUf4RBkg32LbRm3G58XX7Gahsfft1zkuZHEeHhJgLb2pkeUajmMjrmmgYFh9scTxmzkU",
  "key41": "3mJchByCLngmogknendrEqGahG9WTiiadG2z64fgisHNztuXvJLgFLUkW77fyw6xg8wCpiS4CJJR3J7YfxqNfExq",
  "key42": "4zttUxfYcpHKX7GHMcX5xcD9FJf6h5D3S78KLLpD1norMMgc5t2cGPib1qnnxn1SVcndYFEe5HYd1ciQYtY1QCMH",
  "key43": "4VQS5BhrA4fP7H23wHZRsHpzUaETk4VLApgRA7eamKo42xgoHCwmNRFjcPURWQhUCqbGNYjM6s995cCqBdJMPZKX",
  "key44": "2oN4qJLHysEjukDFqXNiioVbzSodkNuQv66j15GFQtXQ5XxFmGxMrRKQYnC4RcvjdS31Vg8zqXxHPKAdgWBYhadg",
  "key45": "3QfrtK6skzXmBLzx6mda9WSscWKNZjynpYTcBtXDfezSbXMc3UDTZc9yvKVizRb5xYF9d3Mb7L7YkWxicNbvJr8k"
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
