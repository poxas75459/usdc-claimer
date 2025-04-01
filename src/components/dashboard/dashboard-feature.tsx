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
    "37YvVqjB6GKJWPigg3nSK1GJXr3MKeMr7XZS4yHurkEuU4jVhFBbSYjtwzhCnFw8x2AQE9Bf4jmrHZjQvJnYTn7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pJE5JPJKkRoMhsQZrfonhBDy1Eiu333HJaexqnTSLqdXbiPJDoQqZtz11JvmZWX1cZHYNMCoDmYp1k4bjwj1Yn",
  "key1": "bhcjZQfiSQWzNCBWQN3BNiyfLdRpNM7xYDBJsLC9N9EFA9opTp8VCFFBD4BUoN3fjgKL5syRrUCVpGV5sW3bF5A",
  "key2": "QzXofHv6mbuH7CLZQytVfiqjRsxBjCN4EvYUjwECQd7X19i92zTk39BDBtTacV5nCwNictiuLHfsEbjpbisY2my",
  "key3": "32CZdu7uaQDDCwYuzgCXr1qJ8SLJGTVa5MAUtYtgKN9rPfiozmzNfQgUD422rMiX1MVufgXXp66aLGKoofqyo63K",
  "key4": "66UhYdTt1Va52vfKatCGLY6AhHgn5HcGgLky5ieAr26fp5zSWTLzv67ETdyE4RBm2WZ1X3etXhhySHJHRLUSrvZ7",
  "key5": "36fhR5n2z9JNPk6xVTzgeQZWYu58rVFaLx3xDC2ebrg4grrtEBW5iNH9w8yiEf8N2XhUKdzQ2vtLqxuNaZYt4da2",
  "key6": "2h3hTh2JAiiuX8SwBi9EJB5cujP64ZychkD1USaoinEuprh14DUHSrMYDLhCW4fpKrkdub2FfRTQm983BRv6hjDx",
  "key7": "3sd9JKpzo4UjeWhKTF2WHRNW6aGbGpr76MYVf7TX3fepYy5v7tzHkoGTpzFWauJvdy1uuw4uNfUswJsHazhSq5LL",
  "key8": "4TsHfokSCQqpgaVMsYhDN7vQxEhvfJT5YAj6b2xrKMUU3yukzNjuR1MU9ajuRWLUuxUNGmTFUpQijGR39wTFcq1Y",
  "key9": "3m72hSSdTQiS9c9FnvJ5v1BCMNBtf9jJSPRK6N7hcJkrW3nTCfokb5ZESLLUW3vnCT9MsHp7YMbWroFA68KBDPJC",
  "key10": "3kQpMby6aTjjhMtiqnUrZgNH88cN7f5wDPpPFBEEEYi9gQoTpixJAbgX9k3zYgKrBphF5CyFpNsJRrZeL1vQ5yxR",
  "key11": "r5k7TkYZ87L4R4gupHuTxnEMLKcMErKWK3Eb47fUERUG4nhKoqoirWPmB4maGe7Xm5y5wLpDpbMxC7sHBfJ3LQe",
  "key12": "3dkpKidiMkHjAy46g3DoRzGtq5bNNd93sXMaMxoUfGk43CukwXMymd5rNPpBk6Kan1UqDL6KaMvDwJYxdTv78TKd",
  "key13": "sHRq9fWb1L3RbgE4LsSiJuKLRk85cfQ8oefY4NDq45WCLYqQ3pWccr2Rf29vmxFHertLvD2F81jz2jU4j1GFq2Z",
  "key14": "Ez1w4y9cVoAjAZbEn4SGcDjhuYRG2kTgGLSKZDvFEZYDZZtFmK4b4k3uL7mqqpcDmRfevdGqV5fVwbdYQ7frKth",
  "key15": "5NP56HdfLSwZhtDjn1ckfxpVFvvydqi2Rb28SrVRJPQuu9vzyYheVjzoNiHHQqCfgmiYX2xKGC5jt8n7DJUkHrER",
  "key16": "y2imd82RbKBircmmMT6QS1pzoLkpqiYP8eAQRSB1s1T5R3H57oFjdsF7LYLFW9iNjY2U5C5ckEnNcJNfNUQCiNv",
  "key17": "5EdwR4ZYQNEMAS9fwoUFq1ZkiwaqJzEVX8jKWPwTy9oR6aRdpysUxNMebSp5F7LmhdGvdSYQKxsdSXna9UDPq3CL",
  "key18": "2CVksR3qQ9ma3TYk3jz77FzWN9WtP66WDP2UT4HcCTAq5kB56qxHtCBcoCzEeTG8Kx5aNYCxoEYVtfqmSKz4iZ3d",
  "key19": "2bCDCSzjpC6BUnqYEuS8gucptjfz7VZnMoJHHQcGPN2e2y2C7QncCc5DoemKpP2NXy4LXY7cidyps6UdYSSpxFd1",
  "key20": "65hksPM8UpLuKyPBPy3dLwZ2Zhao3pj5SwwBVpNKHLJ2DFV9BesFRUUhr6ruTiaG2AiDPiwDDayYo8bpRncMmKqe",
  "key21": "ad2DPp5KDfuAJtwn9zW2fYgYZysSMV4vK2UfpsRXKb38PHM5tvD8ThL2hgy1VcUyku7NGQvoJzuux3S9csTsvib",
  "key22": "3Vbb9fvJxDMyEqwTVRhHrR7ELiDBo56dFLD3vor8mLFSMZPxKMjcE5Eg5aHGFnJvizLdt9Uce7gS8mmGTd38J9zG",
  "key23": "54CoHohtExZZRXZ8YuBHweqbRWb2ohvjaJ6khPpT1hk8wmzyiKn3UtAA5wuMWYHLc9D7QuEvkkbuTKZ9XpHWVM6c",
  "key24": "5Xsb3gsZYyTLemcDUetDkDX7xBgbUUBg9nVwBcciTBSxCc4WfQsf6bUswXqBLycK3zce9rXrGxSWLce3FEgTg1pP",
  "key25": "2ZGAWDQybdaxy5XBFxEiwFAf9sRvm7yonxepVCm3X2AVAKdKCRGW3cPJyJbo9NiuHkCBmstxMtnXuBSRrwMmVvmH",
  "key26": "22CxvjM4zHK9NBK9nE6DdHecmSMczjW6CYvx7pWxy79NhFjNpotR2NYVsciSVHsqetqwUQ1hBwt4uKpMY3qcBubY",
  "key27": "4sSyLJmzBkq3hG8qb7bkEqYeoKhGzeDrc9CypbGWwYm8AjRQKGGvaUudwHrZK4h5B43TCbAL3eGbUfjBrf87dSpF",
  "key28": "eWLx1pBR9e8THEKfEv4x4Pp9veCiXzzVqTGm2Eyb5BmeRutBz3wPMVyjX7bzxP8SF43EcQu6o8FU8DzuWK9K6Lo",
  "key29": "4r5i3uGn1CH88BK3UX6QscmXPQgfSLgACnsBiVHGvnakUfAxj52GAsvTnrRJZjGNihVvnmvKtmAs45R5Y7dj8Z8r",
  "key30": "2fPGdnN1EwXyMWP4rsePx5tM42iXPpRWkDvEniDX8uouYk5eT42q45NjpvAegSeVsNJEg1BFHDdTaabYXdzQTVFQ",
  "key31": "4sbcSD8pKeqPKptmCMmgumRXekJn9oNoPxCU3y1hfc45RFvz82xBT3kAYTYFmWT6LpYWDJN31b7EcPdF2Yv6rKGM",
  "key32": "61aFDXbchC3BmcujV5ymqccsZgFaPk2CyQJ2w35r9MER4cVCqKseAPp41TNZV9fHagNUNyE8yonr5pb4DeRtEDEE",
  "key33": "21sLoudyEZmuBEo9uFZYpDemxsmcjBGB9S6PYSarbzECchw232tWVLvhURmLr38RQ6vyrToZUZ7KqiKHAatcYs7P",
  "key34": "52F2mYYFXzAKmq12Mh1HeAZyJkZgG4Na7AYJpfgoYBWvPpEqEsDBgZbPWQZFzefaVKQJsTuBAgmvZSu8JqoTZEJx",
  "key35": "4cXLjhw5AgvAJs6NofZjmG15rAKVRTNeDbZpS14ocdYnCtXoX8b67uRFvg4qvw9P4zP1TywxxHrNUoKHFSTKwrYh",
  "key36": "291qKvTPrugryWDke62yeSsP5pSeMuSc6xDaS3UEV5oVZWpLFh4Ezj5V1JtCiSss3x9r9m4aauGA4kHPpDw6nkB4",
  "key37": "3i6KEh2nPZCpmtJUn4SCjtQ93dxGWrLVmWbugbCKPE5fXuU5UUHUgzq56iZnGmAJkwhyq5XYuRwHKpKdZTr8a5aJ",
  "key38": "2okntmr1Pxhk7tvvPuCW9dMMTq661LNqgYHTGWbDn1czYb4K8sverBuqLgdiHgpQqH81vjEut8rPUo2pTcdtQ29p",
  "key39": "3Z8Qgzdw5MeLUPi51kzkptsXu59FWRBwodogm5CyioHtok9S6ryu9hDs4swzTLrq1qm4yTuQ792Cg31RBRgSkTPA",
  "key40": "rfhzVB5K3VjCV4uwnGLiarkH7pTHWGEoKv2ZVHPnKu1auuyYu3ag6dfzs3ntRArt63Sw1MistYHJQyCkTyEF6U2",
  "key41": "4xB7yuFR9F2LRTTg8TF1s3RnG6bxgWjBFV5noYM4pxBQZTMFyRuxJ6Upq6APvwz6kU1c9g2XkYiPERo8U5G1roqL",
  "key42": "rJpnjbsujNtY9pjxTY1UywFqC2WC2F5rT4M6u1XYsRyh87xYiRK1CBgumzY7E4qvb9cXUAzsxNqenve2ZyLsg8k",
  "key43": "2pFApxBesyvfqaxa7Z6HEvJG567zukdMV9M7z1mW1J8ENwGVkyF9xyDqcGwMfcwgBeGT8TAV1UYBX9GyFibBpyEj"
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
