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
    "5EPhFsYNRHV5oy1uXSCSujyRUobej4ouWZcAMnK1bXeywekmvEgms5kG9tYAd1P6HocWVv6w3R1mx1rfSyniPLrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aXg5s7C6htkmV1n3kx9L5QSWWWeGBHr3TJYjqpTFxAscxr3o3EoiE3TEVS94bYFp4iCsgmpN7Y8CGQ37z3a3smZ",
  "key1": "4oE9Pyr5RPnn5xk33oVyFLUgt6YHTBfaf8juf2Zc8sHbrjdwFYm9UtgLaMBNLnVrcAe2ktP5SHmCXaNyLGqg4nxf",
  "key2": "4fPw8X5M3rPRTXJt12VD7YqFrdGFHyrstCvZYhUfkYJB7F6ym5PR3xXA1CKxJwxPMm9mNDB1PspUZDEnRxGVPfCQ",
  "key3": "2euUWbHFXyVWrNFQeUTamuvFKMCw8LrvPwFxhkmBvyeSZx6jJ8UD2DaDypUMJdYe5qhnmu4D8WpyoG6F2Mn9zTzc",
  "key4": "1XEbn7bxnvmudx8Z9ohrDxz46Z9nuPZJ74nazb1UV769vmBSuRbNZ5CuurhwQnnBZWnG3JShqpCYJVgemRSFADz",
  "key5": "3fFbxBoUyGWoTeqpfQ7tdMViaWcWVSjVUt3QKoAQCXZCMDACpwQzYA6HuAYajf7aDH6wYfntTEeE7zWGr9a1uGtC",
  "key6": "7nfNwM27CvzgA531nRdWPAh5d7ZikmJtRn82KCUcagRiewM1JNiAHe3fxjDKgVMEzSyKxnHMpMcCpH2XTrgbj3X",
  "key7": "2cVhPofLxF1dq8GzFnbypYLb75yMiobvdKHS5WBWxBGs2BT27Rezib1aiCKWR5wHMsBCKM4La1Bo273i3ZkQR7SU",
  "key8": "4mBBWRPeGG3v14RACye1kD5C4e4vi2gMhVcr4eVAye9ioMnPscVG5M7rVcevUA3DEhCB1yFvq5BKGsCAr8yJjU7L",
  "key9": "igZ4Xk6AgRcmdMyJouqA98ZmaBwRJHqLTsc8yaUdq4hCMZx8zGNn17TVTGcMomr5VUU6tVXtsy2N6Z9fHix2mM8",
  "key10": "66soEZTA3ZdogkaU4872WikJG456M2AMagQ5aN6TSnHHdMRiJDwvq5XNkvLpj9E8b31rKDJjFhExUhGuHwxEMizU",
  "key11": "5MxzeRF1f8WQ1wg6BGMCb3PMEZHWnA3M1wphFPCPbuXemgtLkrSpYA95t3XiLpcBmZKHZH8qUhvyLcqY1weFFVXe",
  "key12": "23SCE22pYMjpiYJSG2Hb49FiCKRPMo8YQXMGzRwap9WucvsBK6EriSnYhAYx6ow16rkx5MpBC1ZF7uwrTxypCCuv",
  "key13": "vYv9tjra1qVnn738Aoj5jm1woajfJkcXCH5yBRUMiG7oHKaCJCoCHGrALhuwavMfMx7piP6GHvPM5BK3VRhkoCo",
  "key14": "47fX4U29jWW33ZtUBgi71CSbNbCk8oogJPd4K6S5r37rUaYPDFT8WgjqAU8q7mfLv68Lhp1HcHsryzTnLnsR4thK",
  "key15": "hgU6z8EdoAChasvo3rwbwds6No7PvbP4r8DmHoMQNwrP19WsU4DxuUZpQpwE671Y5bryUhWVpLY49h5yykrfaTv",
  "key16": "2RAKjKhWszjpvFFbEQuaJay9uuG33HRqn8jMvPodJcezDSGmu4oMTVxHorQtkS7WU6MApDqVVWa4pEgxNUvRZjph",
  "key17": "4VBVFQqZKKyhssvC7WMVAvWCh9aQum2rRXQs9FGpcDpwEMwYPB82UwYUga1eQ25cecRogChjqMrMxS854ANkuAow",
  "key18": "5ougpEZyQAs6nDxMFhQa8h4HAJPLwnijSqpgoZPjWYNxPer4XvqEiT95SxF9JByFRAJhbnjQALGviZfbymMt5Cjb",
  "key19": "4KevZiUwszsekPuap9vN2rUBBfhrVxicNsHUBbHT9ZeBoueKkjS19z6ShW5aNp27badL8ukcrCkewXVv7pjaPvwR",
  "key20": "673TRrkcptsJQE8ihgDAmDzA5r2aFZHzdBwXTaJoFodgRaqBX7j2zfGfGHoDhQZAFCjn4Nw9oekG4LdoBbD41AJB",
  "key21": "5CP5bXwv8jUdi5WACaYhiZf4J648Rx4r9TFJbYBe7xfnnARK9Fm3eqNzQVYJHups59wWqKRPnYCUryZmPQeEND7i",
  "key22": "3XpYSWUQtfXxS3g7Seb44nxNadwvJQDcFHkYXs2VHDzjCKCek1JUiUVKvPzDFCCYaBu62juGBQGZc9eicpRH6AkB",
  "key23": "4KCLtMKFsibD9oa7wSdTvA5tKRxG5YiJEn5769ZKP8rt1tBDLf56EFNbtRSFpngY2r4muSk5vhouVRjiSjgcsTRC",
  "key24": "5NYEFdLkGa7qYzmMs2eSxnyZwk9mCArBTy88x244zgK4QrfGa7ocChqKWkqqeEC26qnc4ZPs7zMnYK6HgwejuMzq",
  "key25": "3hVbLJbTZ6qGhev6VAJB7kuS996N8gRyVhtuKXoWJw3T7UDnh7HdjzHoKkUke2NuWrtwgfS5T6Fi29u22DPtNFsy",
  "key26": "5RAqjzSJAtXoEk8qNXfSb6zpq3Ga5ALxrtnA2mhGNdzaX818zBzSrqhJ3NzUsQAJF9FsY3MJYWHNxaDf5dTUu4fj",
  "key27": "NBYehG78CU5Xx7oLjaYPXPbQMKoRELSiAqn5Qkh6uY97HAJn1LzVrQx4xFmTwvYXKxe1s5U864iLuXpRGsd6t3u",
  "key28": "5Et3dnGJta3ANTRfEbWbe3wGSiQvqAFLtB2trFi3iapofeWgekTVweKQCQo2RDiutUU11W3bttHd3Z5vS4rzVDjd",
  "key29": "2Saja9cnfV9dFmzXzW6kzL3NLZoS5fZNqyHNeEdVAnTC1k5KjbhUDSf5NprdfwtnWeCGpL88uDZnynd3655yrp9p",
  "key30": "2YN42iWve4cURnQYy7GWykTQQdXddbhRY1qmi9y4e23pQF3Q86YFXbvtRSP9wLQfb7EeoSwRp3qN5mGzZahgWoAj",
  "key31": "3tzhMVbq1JaA6XqzPPjScVBFo2iUPqgLjcDQC494pJMdSJXuV9JZQAkaTj1ry2czx8cQnxHcVxbaNaaUf7E5wCyN",
  "key32": "4MHy1nicUfQQw1tGtwjD2kkq6c77dKgGr62heFnHDPYcSjfR978n6dWf2aEnY7poDToazP8zkdjCRNttooL3Hhui",
  "key33": "4GzBai98SA5wCLKTVyqJXyij4d6LkVC1J8TMSY1JBUzfbeippzebL2UWMV63apXoXCFpNRKQWy6fDmPHXFJx49W3",
  "key34": "2X28BfoP8FsgxKqydh68A3GqMeaWdwYDuvsqJYDrt4tNEgEWJXN72uxpWnjGXcMCLMMW4rz4Bob7KANBxLKFT7j7",
  "key35": "4zSq5mHWKdgg5ztyrGwFFVQ8Bsv1JFTVmuXyYiGFMNfQxi2aWdt34A48em1G2eo6CJmKr2CNdaGTQ1aotuNct44y",
  "key36": "5F18QaejQr1LRnkmtHqfABsFWfpy4a3sbbAErrgtLhBosUacHaK69y7DmzgQp3G3SdxqJsRRh1xn9wY7WENfL5TM",
  "key37": "5pa5jXyEFqQvJDZKyR6VkaSqfK4HZyCMrD7dP4STkhNq3NtVkcEFkrHPCxtBRuFujUwLmt7dkotxD9JYbLRcaRqW",
  "key38": "64UyVj5cBYXyU7MuVkzb7SUyjNYzPqSUqGJmPTWSDGgYfKfAKhdQwZ6t1nZgjh283EwPk8tB3a4hjcp8nkiBHC9R",
  "key39": "3KgoQVdWquw7GVMg1dqqcwKpZ7H8wAh2hryuh6eeXttiXKAzkRs9CyToDifhagQHjnvTCWVpRMzahRpb5BruYdTW",
  "key40": "4eJtFft1MurNHCW9eku3z4Htw1pGZ6jzRrWnkNfZSgA7Vwwjk3MQH9PyvvMJYE9F8JtsuAVJoxKjRdoEmt9jyMhH",
  "key41": "5Hvc7J45VTnZPseBTpVZ7S5rzynP1JvuoP19U42bjidUbH6RyZ2eyt9Uss6QqDDVAQN5vQooizYo2SrLntGA4To5"
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
