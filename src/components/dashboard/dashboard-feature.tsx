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
    "29NJCFtrNvkhnk4pq92zLaQ3dW2c8GkmmVfkXzabZM13wGBDuBp978KMuyPk9ics44w2vcc5zGVHknPhtw4nVb7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsoJpNvo6hc6LVhB37P1FLJXtT9Bt5NaqyVU1PXfBqcpsTfv14kypzuFUupPdJEtnerZmkPViVWiKB84eTYVdzu",
  "key1": "5BTgTbMULVDJ4K4A3ebHaYDfNqH32BiBajLBkH3Mw7dphLU2xzFiZCh61JbWgMCghaSgpfRxbJWsVXNXgPDMQYv7",
  "key2": "3vf689SCA1SU5z3niEA78uLY69KNSgJbQbrfGzkg7sJSXDCiT6K1PRuVmJSvXPrAcneNw9rVXT4soHuZVeEueTbP",
  "key3": "2CyYiSNybEWkaBLXKsmNBZi3hSNFBDFYTDmR4Wgav5X8jW8TGgHVZTuxBT9D1vfuQ9Z8QQUUxoFXBo9FCQraAyvM",
  "key4": "3ghvZUdPj7kJukRXNjz2BvYAEKnfWqwUrVipkJYgn43vDaA7JN4isHvmEcxnJWGDu5bRnoyW98jjPnQ6P23LLs3U",
  "key5": "5eEdGbvyyeoaUnabb3PHqRj5duwbQxdZakP8zkcKzPdLsrkT7NYVvriTgQyYjH89LVKu3vZSdQd6Q8MeuYKEyX6u",
  "key6": "5qkNLNSTxbWczKjAXHGybJLyJZ9hEMc6qQgAeh5zSgorSys6nHXD3B4Q7WczqgZLJfENEC5bmzdqzXMPDc7cs5Cu",
  "key7": "5WGBGkYqYoZdAZQAjUfvK7J3bt1b3XYwwD6G32oBYofy6JX1qwDP1BDREYTvQ3bnB2jHvDfTtUjsaxTjDUU3P4UD",
  "key8": "2PuimGMiGsjYQeuHP9WhtW7zxqbisyPC5hfjwV2Jcq6dgtWYwxBZup2zjL791thsw2FVABw6yVJy5UYAhr3Z991n",
  "key9": "KfW4LnkNRR2LtwPysYPcMUJ3HNNVy4qPandcTxyhPxns1xWH25Vqo1Go97beNaU8DBzgyQt3fgvC58b2FpL6bE2",
  "key10": "5HcmYPNe7wkXb43peCaJV2dpZ8VdRtcwyXrXptYkSuAwJvX7H3dtVoprvSMjcr6orGHGmH9ECxBXrWS7AYqLinYs",
  "key11": "rHncY2eyUFezu8xksdht7N7MgNJVSLMhzcRTq45YKaMJWHiV6iRz5RWVtUrECq7Zp1FHmFNrmN62ZUh1NAg1shG",
  "key12": "3cs2NoCu2AUruT5EW3ELWf6rEyep29zKk4WsnRrhQJMZiysP481j7mKGHRrFK2WqvcK3297E9otZDrTuj8MYjY8H",
  "key13": "4V7hZCqEw9v8cSne6y21jyXSyNw62x8gGbjeXX2JtKe3fPf35peMNFrngvNHACLLodkEBuSjC3MRm8nGRwNSA2P8",
  "key14": "62s3EeRKE43CuTnMbQFvfzUks7t9Qw4vruZ8wUoMz3tAcRjeTh3czoiWMwh8xCpdWpdQEUeyDgSg9Hnf7qPTAYAN",
  "key15": "5puoUXKd1DERffEKJP7rndhenJCpTSKikjC2K3GSZec7wbVjRqF5gX8brZGNFwaHz8BNJhTzQHaThb1ct3FCLiMd",
  "key16": "5FZp65AqdbZPc8cLvCnfn3ugKLxoYFGD46AwEWSU6KYugNmM4YSudhoWA6VUgweBeCXqfg5bNbsdjFxXARujKQHt",
  "key17": "2jGAczrcEqEybfN4NTmTSyKwJDGaUsh1HjJozy8nNJKeccbV8TXsM6FCC6ag12F6NPNDFVvP3Ytjs5sSzLf28R2b",
  "key18": "2MjV2jmjEUL5nro2U288XrAJLEyMcAnXq6w1wbs9YAXQ4aZMKnjk8AE6RS1qQYZF8A4C3we3VNfcphcATz5adoN",
  "key19": "4g882Ve5YTQRLfjZE2Uw4druT4Yxh3JKmvAPBK7DZxYasmGYGrX1WRvpFWjmpnQ2g6zVEc6NZoFVugzGLfcQp7tE",
  "key20": "5tN2r8eMAsqZFJPafjbeakUDHGSDGAdCxLdZEVcc7hAAa9j1CwW2y6x1z1sUoE2Qbd99eeaMykKJEmQmfGy9q57K",
  "key21": "5vihPjJfcQq2ccU8mm6236ZE9KjYWPYgym889vzuEuCcN1vFVso2S46XjwWvd7Yah8xuvQcN8L5mtTZctUSw8oEv",
  "key22": "H8YuajQv9oMkq2HiSrGVaGLExFTcsHNCCPnzu1BZ8qDo1D7vTAzafctkrBjLQFPzETLQ3APoRKfHensm2hxaeTY",
  "key23": "5q1PAx9KBjX41N1ZMSEx8iiHYyb57zr4a2rwpH98iNYSEfGh1H73fbptcyokQeqgmwHqV13Ji8NWcEV2CzSjkwgF",
  "key24": "2FzsfNGGZM7mJTVHDELq2D6XHj7icfpzG6JZxuqRudWKAkJfUR7vurQmP2eLySAtqWyaCoJkgMtjQBP12y4cyJon",
  "key25": "3q9YqpbSLvmpFNkLAzZcvxGT9LQd7SgCzeRfswF1oSNS6Qdw1P6Vo3S6drhpysptvQTkFsavJ4KGzqnd7uNa24wV",
  "key26": "2Nq7T34Dzv7VsGmMqiRf5x4nC1JkPiRwtufL7PsXhCuhsfrJD1HruwVRB6XV5F8zhX7tsXtJDAQJbHEZbhBuaLBz",
  "key27": "5icuEGs4LHBp1RewayLngT2x3sDcJJkPxSSZz2e2UHURUajsi948gjfb3zFqHzFfUanxPn4ph24C4y7k1aB15QF6",
  "key28": "WtVmUyqx1J7XFNzkim5MLWKFPqJkUWpLu4nriYPhCJxvwkpstpHTEgNZrybYg6oWutygSK7yQASdifuG8NyeX5x",
  "key29": "2xRQaSrfXyT44vm1KL4EfSEjEMRx8dz7fVzMXWkzKH2WNRgcCX5rYc5ArqfiLSFBdAKwRcFxnRQsgGwgVmbc8MfT",
  "key30": "2AG2r1ZpWN7Aq2GzY2ubdyGBLvSgdNenmfAqfWZ5CLugKXkTbHag6vc6sJajv29Lkw6kNmuCgxbMdoMcSNXJ2TyJ",
  "key31": "3F2UX2NH66fhJCjQXuSnjc3nKNdAqcj7g4ntfivdfwwpoamnPbjCsJsb2q1jzqoXMp9aiyQ2Q1gKhw1NE4P3tZPT",
  "key32": "5XJxNAe3RWHG36MUtPWmaZyEhV47idA7LpPEtYu9BXacQPNuGVM43Vo3cMDkQxVoKFRySKVdh8XP294wRmDESgq3",
  "key33": "5w9p37uCQycD9tq6j3T1DvdNGkGhZiaoRD2Y9p4tNkVpFpmVvHUjAZWF5TP2CT8nd9WYztBvN9y31bMNwCYQTKhb",
  "key34": "3n9EMcopyCpXpnW1XNz1FFrP8PUbhTX5XJtxDmw4yZBX6VLLEZZmxY58oACckq1HuQVTzbFy68JBWQJ2AwCt63sd",
  "key35": "5F1GmXWHMM8GsghnL7W2YjBD2VfFXphbseESzPgij7rLZbGCob31kh79VUQargSyMd6Gdhm6b1hjXyEA9hziD6F8",
  "key36": "2nsQYXvF5A3so38nHq3PUMs4ke21VjrseMscPTWmr5MaFFy9Fm1RQEt1iBNMFCmgVL5SMhayCdY3tJ65Ghcj9Ygj",
  "key37": "qdkVakVqe37mbZ5UNni2MNgFbjet9BuuJNNwSoHV3mHRQzH8tjoqpAG6P5hsaiPfGPgrAxtUHMQ4D3pii5FBTk8",
  "key38": "3dBmdcQzKpdpAeN4deGvkyFpWtrWPVW9maTcQGzx5RUmBKd7BKFf7w18uqb6FbBDhHFJiBmEi3cWaCiP71RKCrAb",
  "key39": "4PEEeGPY17dGjjRz4Ukr5AVPi8VBFAMLCBiHKbsZfnBBYPvormFzYEHdakSDHPQLHVGfNvd4oFU6AnYCQwt6VVEg",
  "key40": "21hiz7L8u8ADGauDMhJHB3tB5o5uHVTetyLsLeCvwfnrdRwFTUP1SGT4iwdAm5PjmqGABN7LRTX9Xd9szRKxK3gi",
  "key41": "3KyxkUYXQT7GLPvdMYRSwMgwXeeryKrdCs6HhJt8QF9qahj5MfLvPtaZxoMALWyQKMLdpXukhjJ5cZ9bvHLo3fKJ",
  "key42": "3Cbe4ZxdivRiscRtvB5qdKwxEg2D6QoA56j8AVkPh5Safo87z2Gt5QxBXqEFkcfJ5Kqe162TTPmMKnbpVh26hvib",
  "key43": "5PgttXQQ3iHeQMjdWy4Qhf1TafBKMfJ4hKqbj5rC3FZfmoEjzgnQLbJ4k8ZKt7amLdPJG3g9spwrQiVcRhzcBxQC",
  "key44": "8X2qk4ak2q3ucRjirzHSVLLpzopGsygSTeNPWu5MwwE4RJEha68rxe4jUrGk9zm6EYZSwRfaYv8qo4QRCmTSvPx",
  "key45": "KzxsKGHEkqJuh8tGusSX2ums7z94UYVTXndVyo5UR8Udw9FQUFjUs4H4y7Um2tAJvWL5SYNZsq32pyr57JCKius",
  "key46": "4BCYXs27gMgAmugra1YktweHiwRF6fd4WuPzvznskA3532EMsSxrZghm2ABUQMhX4buENg5EwWi6LP87cfN4vauD",
  "key47": "4d9H5frexW4EmTk1NG2yNarqfmVHZBpK5vK34jBBjqSC7iznqj6NuQ411CPPJnZAf5DT7eYKnQpJMBDB9xGffR8z",
  "key48": "3mPho8w64PvyujHswRdnAaHV6xpws6jYRdPi64yYKiYY6PSQbhP4XibimRt133qqE4Q6tGJzj6y1N4Ddz7gvF4sJ"
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
