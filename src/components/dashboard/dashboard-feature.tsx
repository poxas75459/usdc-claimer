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
    "3TAYZFy2cSqFb4tVzhpVRt8SCkfmcrqPUAa4QSW5XxmK3e7Y9BQ27FDaPyM8Bgz19ngrxB6QtTX3Rvp9Uqw5Wv9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pktLHWRBccR3r5PMbiisqWaTvouUiVXhq6ppZb3GPPcbyg1GB15KKUuiyc3JKJ1CTNjW75AfNmV1AzxH3K7QczC",
  "key1": "5KgvgXETxgEbqAfTR2EuS6dgR84238GsmQdVnhQmf2V9SXzkvnQgMnqj2XPxEJFJ9T2i9P6qVsFnAAnKfBH8N1Q7",
  "key2": "HBro14b7EtTQ5b7nEdQuEqSJ2kD44CFKV6s1TDjCHecn1Gp5uCeHGNfeFFhwzKa8A8eSkjuAY6pSjvSzvuuuuGA",
  "key3": "5B5ta8bVzGGY73Zah6ZUP34oyFKrJUswvv7pUDAREbPXU5bc8rkA65CWQfPYXrexHtxdxDSwHojcPGB4ApzYU4Xd",
  "key4": "233VBLH3t4oEUwKjqstZtRKDy93ssq6tujHvbFWonwfbTUweDxX2LrVe7HiCZLq7ozeqCB9krgZaUuvpJ9xy9g7Y",
  "key5": "3a6QGDQNo3d9UvDnu1bGTSa4nofcrgPhoNfGkHCamvnbAdoqLP4KMbQthrK3jRNktGF3PZQcXebVfQR3XhXEaN1f",
  "key6": "MNugm5dbw2awafLMtLG9ZuH779iFzaM9mo3BvcDyqLzwFhfFidLogE5gKLwZ6q3pqkUS23tT6dBnuUbHe72Zuvy",
  "key7": "wx3pj7NiSihDix2wiWs5B3618TU6B2sGpNd2Sa61TnptohkTUpjeqefsqP5sAkrAjNhUFk2eZkW518AWpHSPmsd",
  "key8": "22dEMKxqNUCMf4sxLpV9tesgKv17fDMBYK7MfXb5pHRi9xswQyb5gXHHuyF5UiAG3GMHMMcE323GcjL7crLjbPRL",
  "key9": "5s42QmPT53vxfAJFQC9X4g6AhXxnXWS1FiMNoiReffLHS3CH1VY2hSRUYRKwoWW8jo9YxwVWGvnJ1K9jnE4tuFoz",
  "key10": "QWLkat74SnH6oWpwveHDEoyhHCTGV2Ea5UhrUtHQ1ChZ9HakKyCTCYvCjA8FvoWnH5PLKKACUKYHTkNi3WZDMML",
  "key11": "2oPMywyWRGFE4RK2GtfoaZ8fF2ecJJMTGQDk5FtJoUAu7X7R983bH2qZkG2zezc9LeKCMvGHH9gs8H1fxG4faSBy",
  "key12": "4P985hGuf39mx2S4kvdeYahGn2HJaTmSgNpWJ6xJJPX531tnFkJaJNtVmgyg17PwaM6DCF7vsJftG4ewKnuRfzdo",
  "key13": "3q1HgjTK7F79Rvq7HAEjg2QpC3U1i1jFqxWLn52pGM6uAMs7FxbR3Qzx3yzhYASXT7EqvKANBcYqJdjf8hSCcray",
  "key14": "5etJC3hexwDTVGgmKMQwo5XFfnN2uEVUa1zt9hPZjxfum8FaKHdz9NtkfcKPZoCBKESWFRFJRN3JXmbrSG1zu62C",
  "key15": "2YjWQ6vdy4mZvdcXruqcUYmjmuKJVcYLXyvVqjnBNQ2bJgjFthBnviJsfB97X6HdJsfrsET3yY5MCLHqMxAKurTT",
  "key16": "2WuyrCbe8D8rXQN582VmmFP5rxzWK3D2kFLRptsyBsqtbRqDz7SDe1CPgiEqyPATgKvwqxPRbp4v4Q4jitb1rqcP",
  "key17": "YyBiQTgm4i5Zf8cnKKEVmTTawQiCsXrb4W5KYVKH9r1s1ABJxkSuCYmfeCsS4AMWiXyoJ7cFrXMgqMyFv7NZf83",
  "key18": "4oJQj1qHNt9URcuqqwHuQrWXyGYBdQvhsF6GcJDk8aiUYWANencP3rJtT6dPx3TcUdzsEEUwjmEu3nP6yPyGoHai",
  "key19": "RqHM9K7XeMAPxv8NtKMMn1MBWbr8MhHrWUaLpMkVXKA4vhFxAuZYYwUHywiwE89krHC5dZuGFBsefKyvAqtLEvu",
  "key20": "5eWdidHDkX3kjdCwFozK5e2tG4UfqVN44zo76zmsTMqL4eKGRZ6BAnWpt6gfaHuZPkWhkDdcJ8nf1xAUNGLRTTdq",
  "key21": "8jnwALbeHcb3U8oAG3DyRoNcek5Dk26ab1SebudBNkmrgJFiSr5kbWPCF6U5HofUnCWRZPSWc7mw191RXbpV1cZ",
  "key22": "26Z4baJHWcj93ugtqjyeEpSNJaf3tHtfWyY8axx47BBpqPpNAaBWrsfAXwRDVNrHpCecj9p6cFbFMjuYXfiAetNG",
  "key23": "6129y5KJXySES1gCPuoRiJEdGDNAxeXvmtcHXpabGqoKsd9cWDCp6iZEwDx6oqev5gUseEELnTgwy1bRK1PwykoU",
  "key24": "2GWPPpZgxkTRBkJ6UZCJeJuGqNEmFsP9P1NGeUnb16YTrs433toQdEq4KnPXDoCSMhTE37U4donqVtAL1VSzhDew",
  "key25": "3wYTvE6sdswi6j4kCcu2AMQ1PNLiW9QuFgE7QgCpddtUHefiYKSNZ83uiCrtweD2iok6sK1bkwecvFdFfYRjWdSm",
  "key26": "2QhrwUz8nPBrj9gSwoTJxJG4k4c6Gw1jDUWpEUbdgK4FWQqQUqH6iAaCkFTf1Gvj6aT4pWYDvAfUp2ShEzUDyao5",
  "key27": "Hf2Vw7oC7NZwqDePWRWXSits3vuCPHREscw17w7fRMurznAvD7kTE43SPhNQ8L2ABSJoS54MTsr3ReA5W9TnFSk",
  "key28": "55DzFH1gSZcQX8atGipppFRYYiomizCQFXYvWJ36TaoFXG14V5TNh5UarW3i2P9zWCcJhz9xoK2KscvWCQdAy35N",
  "key29": "4YAbvZBr2w39deryuzJqdgiZQQQmEJVkBc1ZEk2RNo88JTjZeSYkyRDVtpUk4Lh7df9rmnZKBYYH9AXF5eZsddB7",
  "key30": "5WJ5A29mmAKw4wDPxNPh9LuD5s1AevVLttJkmFYGBb7aqA2B854rhKJYNjXBFyR6p2wgtH47xeZR6ogvMze2w494",
  "key31": "4ZDqPJFRye6m7VEQajeJ2Zrg5qxMHUGfcwHU2SvX7hScULxV5i81PjwC2uXTVDBVgMQfXaJo5L9LznsTUG7cHZos",
  "key32": "4HYxW14Zh6vur9TEJxWoeoKFapZJ7eXaCHC6bdfhoqYVdpigzaFWbzafPxkC4wLiEjtRtCjX9rvBYmqGg5wTPexY",
  "key33": "2Ct8QGDEPhjQTTHP3FtCCFYGvkd8xWHk42ZfcAt9eWJxZPGda42gsd2nu4cjJrG9oPdAfTHauPL2pbmBQ78GsDyZ",
  "key34": "294vH87LEzSY4MqE75bjim1rheUHrrKRmoRpjeGXqUTcg8oTRqksLHkqEsN4EVCYVoU4zYA3qYYXFN3wTVxtvU4g",
  "key35": "61uyFjyTsNFfMZ551jAriVY9jBAGaD2t8vbMiqPwM8V4Bo7epT9nT6p5Ld2ixqhavprxxVqyyBhXNmPq2YTdbY1v",
  "key36": "2iSZ6Jydz18xjw9MPrZwsFncRrWjeQqAiVtKFZk6WDW1EQ9hKD9oPKuWamWe4tjRXYzJ129cyNHnPBjNtXXc67c3",
  "key37": "5TW6DQRbAe4TghxbyyUNKVfXZCfVrKTRhngKrymAxw3mzKMjM2ty8f9ASMaZh9aqEQtLyLa9onn6Ak9EVBY36MgC",
  "key38": "2Wu9qWDsvKaywuKi2jY3ZbN786L7FxRdjNrsqUA6idB3Y3wwbLz18Hum16ZY7GsiqXfUrfnidipp6XGc2tnX1yad",
  "key39": "Bwerka43UfFtBd7A5GipsMiov4bg6wnMYfSKZf4BN7LLor1u9NUB1eFteDEMRAHY9exMmW1tuk2GvDeonGzDtxc",
  "key40": "63wR6EMoPP7hWWaigAMfQdyZPd5WjvdQwgg2T2ijkeVffhqoqVKkCBQ92h7a3FEzD2KdKat5NUuYCgkecp4411Kw",
  "key41": "5fetHz2n4WXhu3KPvHpMD4rviALFT4X6XMyv1fkprpQAfZ1mr7EY6vLdizNpAnZFdma18jnZBtBWuo4NUyxZHJDu",
  "key42": "2Tkd69jXQAFmDhzDfX9JfMAM4oYecnZi3ipgssZ8wsk9Y8uB3jerHbvRrCTVKECpD6VLRSwFJEGbwB16XEYe1Adx",
  "key43": "2rD3UjU6n9Snv8bC6jWjqt6oLVYgBeE35oEZKmz21DrDybAtqeC5fttjHEocHMiCyxYF8AehsFoVRpHo3Sqc5XDs",
  "key44": "2zXYFtCFrjv25FYQex554LF82ma6sJfyCyfsW2Wu4VL1zYR3S7pG5eZQUM4iaRF4ZJYzg1kHRg6vH92Lv8tivABu",
  "key45": "4z2ypHvbm5vedkv4twhCN3buk28r1K8zuJXkzby5yCMGp6X9LifCrzqAnMpQkQaHQbXqvATNQPjvF1WyeZqDn9t9",
  "key46": "2F3WARvGFEAM7RvkfWpo4dt9tsHJrP6BSdZ3yZPpK5PfUVgAXm1k2ngrcqpZ56fpGPL4tDrdeqyCy5GNFxxcELxT"
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
