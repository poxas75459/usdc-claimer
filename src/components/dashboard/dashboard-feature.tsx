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
    "5XzfDUzMrUKZmp84M2JWBU8spqtjfn1F3axzhXqT5xDLy6Q9FtNw78qK1SzVu4uY6nXR5Jtq8UqAxU76SKjzfFQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQwFSDjfTw5bBBTaCVtYcVYxwHwc4viGiVZkp1hKMFPytnXKZdtyBTk1Xu2TL5s3i5uWnag4XT7CJxzCP8ZjdsV",
  "key1": "PWxudkTRoGJfD7Kj8ooSxHF1YcNkC3n76rUQ8ejExG1hhnDuq9CiQSC7GaV3aNn9EYs9ikNfaBmaD6zJYEinBSX",
  "key2": "U6Ec3onMsAc9rsPA6H2ruRJsRQTzP92PNugBBWQuDfK3jg6KcTJN1Ew8x1XC9yVHCCSeDfLGd4z5NcKmVbvEHWD",
  "key3": "a8CHYXkByr5wQwo2g72mBobRjS7fMdmANbawhSf38Cd3uLXzysAB1ThTFNfKMWKhKQtpVco8MVyz6EXWLbrevzC",
  "key4": "47PRSnDR2CEYgrKua5nHm8hVsitMgWeJRqKBihvaMY17wQKzy67ePC93QoXXyi3W4Lm8sgH4rCyL3SCYuhh8gCww",
  "key5": "NyBDdzwAnwZDwRS1aJFGUMAfA9NVewEKhJ8T8oi4isVEsFZXTA8e8okbPecNyM7gobFE4CgJBCN4rCMCsENGNzj",
  "key6": "2HjhjxDD2fg3Hujo5CpDeCMG6xJaFBW39syq2FPJTWwCxiia1L5TARjfBHrypBxA7UANckjmSN1wv1NTdXeydshX",
  "key7": "2HXmuvaQ5gtCAWeMneYf9LLn4Dj58wtmEdLvDVmXU5bdkRWhiTxTGBd1SSH2JAxhTtBJTrgDuo5LLqCtMCQa2A6B",
  "key8": "qNSe8DtxnU4TfYwdGzFCZ56YYeyfe1ShzZu7XcZets54K8QjATb38frJNbrUq2NjKoRHJQUUbicqogq7SbLKiPE",
  "key9": "3nu2ozyJPoDgJ5t23iZVnjnHmojLt7cZ1EbTEnFvRc8NrRW85QD2BBAS7EcWq5LRvLGETdBtvVZuvTPkpqgDp2yN",
  "key10": "2WdgABf1sFuTf2KuyjFSGAqX1s9fD4DaqnJaczF3BCJsxToLW4UXd81tFsKdjyvxUU7C1EjrHkrL6Wybe96wNdh2",
  "key11": "3wKMv47J2sQpXAgiJWbaKg1NPuiqmNQSCUvRcVzshNhBiGG8s39ZeuhpVC1oZ3yuYs7fCUYZnbJbDGbAqnyBBGdk",
  "key12": "2WWbQaSGyWhDBM7hP7H2FCwTaZLcF1kDHtRd8RherVQXPjTARe6HtarYtmo6s8gYHfLfVeqiZ2p8GP2pWiNdrAvt",
  "key13": "2s2jTwmrLuWwTKJaK4EJ9uGKCkvaTdoVffhBbHn84M4QcoA2WWvAuZiZWCryxodmSrt15meV9fs7AzhCWLsRwuxh",
  "key14": "35fuYjpQ4TA3qGzCEbv4mR8vBSZ1UUSWptyqFikwLaNkiNAQPGvL6SLLQTApRwV8N73etbCAZekg4AjhRKtoMQaR",
  "key15": "36cJ3bzzPG2ydfZRhePLVHtTZdLpGPzN6oPHwnmuBFLemVGEC6n2guZKiGHq5RGks1aapqfarrwsZQTxv8AJ6LAR",
  "key16": "5cPTgkNP89JYce3EC3bC2yNd2kxzDFMwtDrMaHdhEo6oTr9SpQcG9LCo541TyBL7Xc2zeLk2xg3h6wuKFXGeM2oT",
  "key17": "4zhNAe4astfKNCfqEctj7sGCXNzUECKRqJxsBmnc7d8cypAP6v3f14ZiJyoRdmHj1y2SuA97wfsqC2NMATceKcMC",
  "key18": "42BBUkQ7RzSzW2kLQxjwMzS6Z1JDAcR3u9Av2sWABfqsRFtRAzEPeYAXyDkQdihHej7BigxSZAzDiLNZekybD16N",
  "key19": "JoTwPPhWLftmrBNikDsPkoDkpDpWMF5URVCrp5PGkqnkxE5jzr2CLYNSgWMqUrZHFtrChDzGqHjuXmiNASfJaMk",
  "key20": "4ecFgaLZmWQcy6JHEG7XMXWKc9RKoRG98tqXvyXs7GKebDvESSAHyqfK1piBpscYVpoKg9ydrKcJHnHVubuJCN1G",
  "key21": "2yofrrj2Y8EdnRGoVJmS9SvN5FAy6My7EfuUM2FvAcm1ooDUeSgooihcDDk3xEcBiX3j8GuWjuHoCos2D49wQdVr",
  "key22": "21Nj5MCazsJ5aYMbcVsACZMTuTA75gQF38kXaLVJ5Z6q8e765hRJG61sM9kGQu85YXRc6DCuNBvPxRMigvSvKf8r",
  "key23": "34WPFrW2WpY1Duxux8aK1izVQDmukHv2PgeSmzeLG3UuYHj2LcC5tHWxLEQvLHQKDyqpxoxCUQSzP1o661u6N6rn",
  "key24": "3a4kGijpXXMiqUBaAGCz5xZAwwFyT7uD2ymvhBv4w6Ci8rQnsHvenpUyQ9UsqqeBZ8KvLBgFypc7223ACkvAM417",
  "key25": "3UGQJg3yXT3ZVCdX1CLesLUuk8EHpXkGWhNaCyJF5DtcwnUUuSNaoJsb4w778aqFoY4sEiY31pS3Mxug82MEVn1",
  "key26": "Vcqc4sZPzDz1HXJuqfvxg8naXgxC86eempTK4PJYRWUh4byKqjNkXGJpNsbaj3boZB1RouZKcfj7uQyRGuBnt5p",
  "key27": "PgnTUpz18HPhkMfFSEZQqhRtzc7cUrqsnockZ4zPpBHeQ3Hx1wm5dxKXZz7SmbjQLVaa76nGTXRsB6Ecx6oVVVX",
  "key28": "5EDDhTESGkJkXyRVSbrXgw589ynCbs8hHVLAk9EeeR6S7ZeEQrUefDYDC48F4zZAAwhRsLbBY13XsxpEJ6o1QUiX",
  "key29": "MNjQUxGfstmoq1mfMdC3VeuKj3bzLV3igWGqzbY7zEhFnPcvx3dk7FwapLy2RaoTkXPQaXQBAB6BZbrprAXwRGf",
  "key30": "29PvJyZ12siffNyvyraXpkLHGP2RDr1XErvrd4htf79F147LWMXYg8FpcTfYN84thNqm2FM1q7hYhXUvVXVDt2rQ",
  "key31": "NudEanXKT6MCdTQ1z8xaKMUADnSuf6gsGojTKoWqGHXNh7R4DAsw71XqjyZd8fgQTEwnRuUHsdtLMyNEcZwwmv2",
  "key32": "2qja7ZEsDP7o5i5MG27TrwttFkWayjTzxuJzjGYxJyn8gFbz3TGawtVT1ER8qMUyDogrz1eTF3oGnF7ikXpeZskm",
  "key33": "2WM6Jp9qXEUcX5VE6RUpGkCTrXQuoZm7ZbA5HzAMh7Z6zhYqugKyNnJWKTkRVReKfZEfGF5cq9eMvBjT6HMEyV45",
  "key34": "4CTNcBq8YrRSYRitNJdcHmmn2BLxT1N2RwXPgjR1fFAU1d2H3MLV63jPFVSVifnsw6R45Y91xgJGxc2myDLcgdyN",
  "key35": "29kPh4z5Nay1UYmiiu7iAGrJGXJewwZrGju1PGky7ZC9BjUSW68iToWs5CNgBUdY61bw2KXmWVYZF9MJdkZuYxW9",
  "key36": "3skXPAeqht3uJr3v6ZLU5TH4QghR2BSS6p1u1kZi9ssvEXbmiqEoz4TXt1kTviETfoGbFoM71XC4oM98VqCe9awe",
  "key37": "4XemYu9nQvbZxFn7wqzLx7KjANhqHYtN4MyZNPwUoLPYYsQniqPpdYQiKYZ1GFsXVd8991qtWcoaywKWixBwif7S",
  "key38": "5HZw5gnszrDiTh1S642EoekGTRzuvSJHktswTUHfVGvyexeZHrdDC97vF1RjGr1hAnmB1duYUgi4ZfEMM6yyWejH",
  "key39": "3wvZeMRkS96cg4h52m4XoA8RJnG2AYHRnLjLTPtWrnwuMoQszdGsEe5muhQcTNGu7G2LiyAXfMjf2yRSTczaZGuF",
  "key40": "4rV1QfBEjEaQxydvuMkVWJsTophcMf9ix65VfrRnejbCHZXf847HxZyybawi1bFyzRoik8HH79qkGRtBuiM8tvwg",
  "key41": "4gmqo4B8Y7VqPNJeAPWEHadM6XrcZfZ1U8EFC4D7VVepifAavjDSSY8YcXJMSrGrw7paxEgjYnfaYXYoSPzAQJxx",
  "key42": "5pcj7ESZfVka1mi1984rBmxNQXBtpjV2iLoASw7zmRjpKeZuxxppcZDY87aP75TKx5nvZ8T9bRvquRqHyXvPjtR7",
  "key43": "3yTPjdBUpXNzsC8b2TyZMNXRyPCdHVW34GpBuyFCLrdzydLzZZJvdnUqy37CVTZctXVgs8ApSm9NN3pHnr5j6d1f",
  "key44": "5CiPbHKMTqeqLDkUkEwtpuwaCXbRQ7BEkg5fje7mAYEzLo6h2GQjf69fM9PnbFVKEynfFc9SoSkdRMRvrjmfQSXb",
  "key45": "VCXZEzkhJ8EHnuqmYC2ByKu5pJJ4ZWmxv9QwCMH9i5yh4DmBaSGVUYJgzEPrSio6XbaWkB3p9ap6AooX1dV3SBM",
  "key46": "5S3FnpB5CvzFzjPZTF4stPXWHPnpiJtqF7hfS1a6xPBzgopAgsBAj9sNbnKz9RCs2A5aQVZGVdVhhpYV9AuV73B2",
  "key47": "2EKBKn4iNUr3DQWFhAx6UaVbgVykRzSGCjGSRCx69e5qUkvbX37Kt2YJWtHZ9HN4qypG7FGRX4DNjYXPKv4Wv9ed",
  "key48": "5T44Qiy4LYhqBiqELq6LhqCVPT5vRpNa5u3Bp2XpKFzz8UbzebfVZ8mqviRZHR7XPhVihgnxmHpGRkBdW4BkkWS7",
  "key49": "r1G82w9LHx5gKkqNgfGLne6c97TxBTvpZEWgKjvbkLmueHZL5fJvhKLK7gSwCpTkMdnKDuctZmTcG8bvd9hSRNE"
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
