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
    "5M82H4FXk67sjbEd5iWBVXDbZ4E1vJ9fZ66rZsNx6ARL2cp2za8iCuugSWRMAM6uD4P2sXonXojmwbAtSvdcS6no"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJEcy1tHPRcFR2A8EX856LhzjPM5XGLphYkka1FcmGgb8XzbSMR81rsL35h263Wg5UchzPLdmpdr9SRLWCpin4k",
  "key1": "bfAdxXnGwnVSu6PimJWtr8b1ymJAXVYmpPYNq4rwfmybdJDD25hjKxKi4sPdHsgcGgXHrzHK5HpCmcPDCPzwEQ7",
  "key2": "397Zvcef6cBG6fA4YdRoJ2V664XYTipS55EVgr9UC1DyeLUDiKv4iqESANgQgwXcdzEaeUfh1aWK8LeyYzetVyeK",
  "key3": "4P5oFsm6VQFdvzdQkhb9Y31dv2RWWJ5t3qpFMqGfBaVJ5p33tFhgPgRqbtP8rYa2fupp3VkJ8Zn4uE8aF2v3Hz9N",
  "key4": "5SU98SgTFaBHTge5zRQ7GuVGhSqt8m2xhY1qcTJ9kVGKc21rp7RkBiKTLKyvAoPWismNnv8KRKU8q7hSpqWZ92VY",
  "key5": "3DdT714jmjy4VftFKSUsHtYkHxgyic9VkrksZHY9yVuhNQBPFdNRzRTYXpmsyLTt6eX66PiR7wrTtKQ78QhkhN3Z",
  "key6": "5eWJEG3rFxgHVnXZGJ5CYdNbXc8yHDfCZqArBvQuJLaYkRpRW2ZNZE94xCjLr6w3LLBjzhJP47XRZEBXdRhFPiQZ",
  "key7": "XnKHzxbtzBy5B6cU2crj15TB9w8qwUbZLreYqvyCvKivYP4TebWyhtzwegMuQoBupuNWgffSFGL2tQvTamRAjHA",
  "key8": "29MgPebkuqxg1NqYVtC9fp9AyNhVRnLLu7y86HpRpAT8Rdx6H9wEWHmXmtbBcviWzrsDS2Da4tPkyX4qvAgN3td8",
  "key9": "2juhirqiTgPxA8VTXKR924Gg1wogCW1rwGM4ZDLB5rACTDVDaJb8aNW2yoMVRWW4Xswxv9fNxpFRDfKcaK417wfv",
  "key10": "hPTYGLiWpjkc3zTg5rkyfvhzcyqT1uYcaFU6hnCjizeeDi87qMUCNB7VZXorY6ypgUaZgBvJLKpGaMjLCgMNAa5",
  "key11": "3cBQxNt88zrwwBS62xYutcGVfrLkD7UpFCHpX6jeXuNey9EUpVWzHbx99kdLmiQhwZWhPgC3uFGTe7BnVRJCPtRR",
  "key12": "5DjPCuY5AaFK4W21DFQ1gG818snk67R7iQujYc6BaVaJyDBgDYZa5W8nFditp4a2Am6f3terf3j8HmyR1QTTGyJr",
  "key13": "64kooiCXJNvVf1Mq3BgaTLdJP9EV7yqFkGf5KKguFJtdq8XhZrNBh2D48x7gXeczftpr9hzBxMB8FH5iNqdNbd3Q",
  "key14": "3Yt1RzazkX7HeNePMude1ZskF2zfs3C88RpB9rQUnxxpCnCm9hFjc9rGX3XGfNgFHyp5pAPLkuaaySriiFLVDYmy",
  "key15": "5s8McTE5hR6jh6czakK5EYQkTadPVX5NYdF8MhvrQ9ojnFTP2xoHamZE6Q64ZhFin7k3GmBuxCdWZu2uiXLueUFJ",
  "key16": "2rQvkqgkCJFiG22EwJWPCFoXAjFjykRQqjg9CJs9Q97h4AXXfmgk2Cg2byaMjaGLJWRsthXCwLmprKntYEscpVfN",
  "key17": "2bukt5rmp12BsygZHj3HstQ6GECSRxP61tTf1vBk6oNZSAabJoYFiG5je5ceXQDT1SkQ3zwJXymQJ9bWur9P5FgK",
  "key18": "26bpRJFd8fdXLXRMJtZjfszvn3b79iwrEEm15qwUPcE39EVajdzKu2YP8eCr49rHpAYomwdVVwApebwbmT9uxT8D",
  "key19": "bp9JEv75Zq7Q5okK8gntqMRwwdwkyhAunVdgf2vkyF4bYQ8KbGrMeiYn1aY9H1eSDpkJBfYhPZLthzqdTNDB2NS",
  "key20": "4hVNwANjd6xnYVm3jus9sziwYerCfLCSSiqAP8x8xBSQFktBzKmTTzBdKf1pFg5poKM5Br2qD6y6mpN9WfdAnJcN",
  "key21": "3UYQFVvGKTo6WQVUByWzgi3qGViLy5xeHVEdto5WJr2VQ9BWVhM1k6tECiQsUKMaSLMTQNwuLU7p8pw18oeJrdCh",
  "key22": "3FzJTP6eq9GfLAR5Vz2udvzmzLtghizd1VkVVJpekP3RBs5n8jhViV92cXanVaj4bAAbqUqimfYbY6Ts9titsRAJ",
  "key23": "2WUoCsAkM245KipvsBZgYpnjYhyZxMZZNERoEV3GXnUicTSHhsQU1J7PdWZjT7Ea1LCUE9a88aCaepVuryj6VyaM",
  "key24": "5B8gP97QqMU5R6t3ZDzJaKziUfj4BQX2eqv2YjcGRKzjfEM71Vks8LvbYNAnRkM839MBsWRgBqTgDsWvLx1wdBag",
  "key25": "5AihCQ8Ye7o253Qpiu1wn8BE6h5u5xCfZZeFsMnd4i3hSEzU9p2iPQEZvkRNdWJsuczfX5cZJWgTLxaizbbiXhZc",
  "key26": "3rUGwe2hBeAqMLCuq3Pt33T7MaPii9coUSj8SZZxvzGFnVYqwCkkUodGRLj8PrWSk3S7aME4svVcYVKTyKLrTGwx",
  "key27": "4ggd1peYBo3Ea61Wd2BrDFQ5HRYLn5fb4jU3njKy74THs1ZASdFxaJfXYkA63YqTquDhvS8HAT3aKncssAW4H2AU",
  "key28": "5om556swoJHeA2rHSU5ragZc8NmbhMTsi6N2LUzwuAUJB2sF9oLQE34icUtXRMcV1bJY91B1mEA2AAfYVKYqCsqP",
  "key29": "LvyiMowSUfihHAUhgJawwnh9bpNj4PNaAa4gVf9rxqeKXziC8BsfrY5FhUcm3hkmPmJZxYh4vSKudSWLF39t3gE",
  "key30": "4YFeUQa4vAiS53FPgUE2mnL7ieVrcXNSWVQzngXbCBuBv6T2Y4pE92JxnQQWQzYG193ZzMEw29b2c7KSCp8Rsj4f",
  "key31": "WSZEvYd1Fv84hD3LxqTRx3TXc3WkLX4J27nSoBGXyQRsRw6QCSwZDiK3iPcufJyg5pCBGWCyJHqaGKpED2rcqp5",
  "key32": "gtuJXykDH1sg9VXo2bLbHF9ty29PmH21tFuXrvbz6q5B4DckG9bQdBLu7NSWL1CCBbFwvvoFXhtLJP78C193Qwk",
  "key33": "2LkdZgpFs6kYAJRJPwkHmGvs12o1S4xUyFG3sXp88ux7GEfp9JJy2doagNWWBipD2kM4qjC997uy9wZBy54FY2gz",
  "key34": "5sjrosxLB5wJomGjPhrju7BfA9UXGdfmJxQYggZZScB1L3RFdLYR7SmbtaFd17AVJkiJPfKcL8mNkqB6WQbTqMSf",
  "key35": "BEYY5Cj5Ab5Q9dHD9Pjb8Lg3q8hgijUGVVUXb2fdGM1pFJE3mp6mNxJPWQTqW7PhFMqs9YC8tX15WZ4yJH7Cn1M",
  "key36": "5AJYKCuxABGRTMtD8fyCtmknwuUmSXQkrkzfQWBxoYeA9AYqfV3YQxKwXgH8uATfKhRPX2KBf7j9M2hL6E2tYzxj",
  "key37": "4qEqWiVht2Uu9ydm6oUEaR2FDxdhHsNZFW6BpsAZsrsqGcQKoGeKipxARpqC239jaHXFSYckTQbkfL813jm8iYq8",
  "key38": "5LHvMqxHT9i3jcSGwvow6Bf14BZ1mMM9dRxfRHe7HRFVr2J4Qqs5ZN5fpW3ymq78a34TSLgYHgu7t7XYUJRBoZbg",
  "key39": "4mzouk7sssWkuRdaZsdk7LUU35rfV1xPNU6RqMruWfb4ntXXMqYNfnQ8PsbKsXTNTaMtQbWZEzTpUL3npZQpi18B",
  "key40": "5pxHvmApKkwgz5GM8jZFVUojiKBwLwPMu8omTwGTvd1kFFtwhVu6sXdAA5iUgFsLyhCDD7tu3b2ST3g3K9ZcWrD8",
  "key41": "gUMAC9XykMWY2kEwqr6HPMnJGzc9LDHvm4pK5KZoYx8GwtT8QEczDfwWoN1TAiKYzisjH8Y7VS8xZttu7As2fm5",
  "key42": "3jbTDKPXTRzyFaepHmAjHqg1ijXdmrvfsEYg3aQtZfZ8Nr2ukXyB1whL4ga42BaXtCqw8SYxumEr4VJgq2cTsxpA",
  "key43": "5HKBUjrrhq82WtC4HwiwMQNtKftiqBsRw1DVWj8EtC6G6HGxWaEEY2hVPMRWb793s4byBowqPpe47njCiwQNyMYQ",
  "key44": "4BfZMvLSDFFAyU58pow4szDtkmEFjUUmobySAYqLCspqEZz3MkP6xSJ2qFzoXfS4NPgMr9NAksTHxCPAxzk5X6Yy"
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
