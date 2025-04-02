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
    "4rZdMJ8PPhASohVm8hkV7EFBmK9K6PonuHmTcPYDm1L6MCBvaz1h4FWepAh49ruR6nKTa5tUkXtYb84dqAdrwiVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1T2QeDz9pNbf4bCkqodsMddSVz2h7kCRJSixmmwhURiwxCsuvXGhZcn37J9UHLN6RvKb5kbWyGRrK9KaS4RzU8",
  "key1": "2SCQfQcDicLZoVxZZNRqcBn1YTajj98eYrhFxQyMcCJZupiSCE4edeWNdbwsugkLA8LogdtA592ggQk6H7i4adfh",
  "key2": "2SR3hQ2cvVbKrXPSKj8pvvq9wjMWqQkQiyyHuyJPBDHfL6tExJVt9WGBZ2cwbKjVuCTRge5gnZPYzdeMQQim4QhA",
  "key3": "2RoVqxXArFeDmDSQtzz6uoSJxuk4GEzsmv2adz96TwcJdLM6DWCdLGLK27h5BuTcmVr4XHNT5AtggFSArjjDixJX",
  "key4": "q1kepuTdPP4g3xipL43fZbB4ntLUTmtdrcHeiy8K2ywqerEgweX9zhdFkw5P3cL2xfY5FuLT1ypfLddTcssz5TE",
  "key5": "2Q7Xyvvoup7tQdQfvZJABcjhEqZG8ZbzX9GTB64KWF1FKPhEDo8Rge16HVMCXqwHhWWmg4XAQf9AmCqvGrLSqE4k",
  "key6": "3BV9HjjPgaWXTqoBd6zUjnEimf7YzMRF3Ck5LUT6ebq9mfKCuymQRfM2VLYeSkf2Aj1tC3LD64jJjEWrPVFURori",
  "key7": "sgCgLfUCtu5Lu3iJyqmHqRUpinE4w4cds3anTa6UbkyTnamuEHxiAKKDHz9wyFuPw8hQXRyzejCEc47JueFUzrg",
  "key8": "41bYYER8CrwZYt7px92r33AE9pdwk9Mxw2NydsgXgWzwAjV6rP46wbGrvxUMGEjNntLGxbD1XfH91K1H6fkupqr7",
  "key9": "473wcgiyzF5Xtr5XndJvMq5fTw95raje2JtLtoPn7mbwAhgkyimnnemtkddcNvQg8ye7s5ezqvF8JsUvxe33mkBN",
  "key10": "4CV3nK4Dqeu9AYaiSfRta3Y44fDqCCsw9ifpdBiH728poskMorp67Jio1sXui1EE4TK3Y3GeGnB4EDf1RZ14yjRD",
  "key11": "3fjqsJyr5URFPvJjFLN9DtNk3mcjZdHMLyKNjoAtnx7JbPHe2JTPzNYk1a4Pue5cc2iD5WzECTSTHHvAxwYVaGs",
  "key12": "PZzKq23wcJ5FALEcC5uDQiHhKgKzRXjcLQWWqZT63Ht55ccu1hjCKn67jJpTaGbW9nbGxBTBr1PC7e4ymxxXaFd",
  "key13": "vSiCATtD69xk9YRXYZMhSd2Qijp7Bm7vEQu74czSwbcQ5PCzPTPGWqVXeHCcLgHFXfcoNRHKHL9DzeNi5JxaFp5",
  "key14": "3KVMEKZfzTpXPrPWczyGReVfGV2HZMyCSqQURQ7cZT5onfYQMLg23QDk7CY6zkNcNZWfxGtxJwMtRUSNVcRo3xNn",
  "key15": "5ytyHWLGEoZWPuLtky5Rf8ZfGHCvSVU5U3YtPEewA78kyp5pNQjJA9aCr8DpUJsvWXUa2kWJFv9Ug27nm1wfxCUm",
  "key16": "4jomYiVKrkWKo9n2cdU1XbPRtCrYh4cKzLnqun2rzWbZy5vkKoHcu5hRjSvvGd8N4t2NJmeDhXVkdXV9Pr79rf24",
  "key17": "2gsHQ7Jdmi9vZ5RZ4YSNuNpwEtzes1ufWCAcCJpERmdKu8yjPZuVjpiNGyqi8uY3HuhQgS6beeNhKtuH97ETDoxY",
  "key18": "5HsC9bu2iz7AJb1EvQ7yGhAc3MXAdxScDaDBMjAhHmsPhyLY1CPC5KoYFryBmFo2JsxihZaVTcTRqSA87fFhsUNb",
  "key19": "55ujjxwCNwtNAGeR4LLsRCJPW5tU71hLq5C5MUxPRetf2kPfdYRPLkYhHSo8nAeuTHhXy6LWsU5wv5YELSYNPReb",
  "key20": "3qafWvink2kTZ6wBJ1xuh4UsMfgBzFySBN6oCb4574VM3JzC9zr9xYP25PsdiBfUTfGCh7axv8XPmSVCEm5tzFYu",
  "key21": "4XtDPi5Y9d119gbQUQMMSaE9MXMjyBo9qameKZCmgzScLs2SRHAPLZfmBWQBdghpGyeGNbLBknkhtkMf8KU3fVcP",
  "key22": "4unUMv8ydmZToSZhAfKF7kPhwJ1MTufoFRBG2UDr3TeMnQWtxwMW1M63wWLkXqQVD4GhAAkAsCiF3M7BsCfVZeqF",
  "key23": "3cUnwHRxYaJ7gWy5jAJJeEdmXuLZ9CFx12SXtW7vbaeaEgyz6PVD33YQPh87PrJAKYnn27CVhGT8bs9WYn3K2119",
  "key24": "R1AEhE9qHnt7U3VoWwjbiH5gEQNnqHawBPz3CTVHchZKGAGvnfWYnTGegefSx1DVuPU2LUELDyUbXbKfUk6C86N",
  "key25": "2c29wAoGzZ8JR6DvHnYYytV5rVR1ckthvhneQwXK38TVischuVmg6mx5LvrGykkE7QQ4SbJSdXrqKgBcA7BaDL7r",
  "key26": "ioVHv9jr4yc77n8J9jJzooForeU97vqFvJMnUL9GfLXS2V8jZKHAyYxwJgeYb99f86Awq4gwz4yvXb1hYxikrDi",
  "key27": "4s1hazX5hZ3MKop9JnGWH2ndruZJCL2onQbbvkiLaSKNTAXdEgapvSmJvQuoirspvi2MpJNmbhrcMiuEcf25t1JD",
  "key28": "2hGny1tMdBsUy5fUXVdR6RWoo6tuPKjxTArN2rns4uyuHPhezDdq85FngGBXZ4vH7J6wQ4UNp6W8jzT3Hwpj7Gt2",
  "key29": "49JdGX6gn1i7t2TbYYzXJcpnau4JdybuGdfj9LtZk6xyQLwhyumtcRfFN2qnqnopLcVFbDVXYWSScf8KRteBs7TR",
  "key30": "5vLEBm2Gy1moWrw8PyvHAFqNFhy9mkewLDmE4VcckdWbP6oVF7LFag1iVcYhYrLM9FSjCXCpj8TPVk5i9CuaNteL",
  "key31": "2D4SySh3X7m5U9963u6dp2hLbDM7jBBXHaNBmjz1g2t2DJestuvLHVpKzkf42tHsWQQK2LDM5JDKDsN2WABWR81F",
  "key32": "4ETQE57U4wMuVnnWyKoPZJeNFizY3yJmbn8vvAQTGb6fEgbaz3X6wfPF6DMWtosuXBJYSjZRA5NkLEwdc2z1JX3Q",
  "key33": "3mYQbw1LU3kkj4m4BUza3UuGu9Yc3hrUDJmojdFFe28t9SSYx6ky35nVUpZK9gLazBWxF8Kx9Ek4LJZ8bzBxxncg",
  "key34": "5EKdJehgdRezXKQDZh1qKbriyc5phZv2MigSiJmQQ1pR9J3bGtLXEXcviCkBRh9HQibf1MYWHF8Er7oMu6wb5j5o",
  "key35": "5sx8i8A776LsxVxowuyAv7kjZei56b76XcdqAGFHXWEwsPH9AJrW5Ki6C39Ss43UnPnqCZYxZVaqtwiccqU4LX19",
  "key36": "5qXmAxhDesqiStQ32qtrxd7rKNS1HWfDRW33fRB4U3bS4c9sGCsqJiPmRZkE4mVgDEpENeaMA88tcysTxLitBBbv",
  "key37": "Qbv8qyUm1hUd9DfPvnZ6r2QMnmZrLu7UuScPmvouqfdpvuEjXueWyYWRhU8EuBZe6cqfagg3wWCqUA1QvnXzzPf",
  "key38": "4ZrKNDLfXeh88rakEjijYDjGdVAc91uwDoUUjRMsJDZ8V8r4P8QzRh1DFv5rYhfR3dFLnAB8Fd6ukwEJMjU6YHAC",
  "key39": "4MH5fLCcvj1Yccd7Xs1qmTZLuEkysrDqY47EKJo3FYAJotqMcn8G9sVxWDguskpjmKMctjrYFAF3DHRRx8qs1rJY",
  "key40": "4NMsBVDy6153peDiZgzmU5vj1R2iUjXJsfePUpyUbHKwSskrb3fV8qQmgXEu1Wm7hanr3zpJ3DBzE4HcDH9WdtNS",
  "key41": "2uP5hdHKDM6tvQr9Y4fTeEm7ENTu6Wq8pPgm6QAkdfCKCLBb71XE9mVXUK4aP36HeuVhDqB5LPiTN3AQoXThZDSt",
  "key42": "463bHq84NunZt26cuBJ6MN9PQuRq6j8tD5CSWQXyJRxjHrZQPHncDLGfPVM2iiuP1BX6kdKJvh9J9JgPysESaGNY",
  "key43": "4ZXu8RXBhocXZPNy2pT37bk47xhqMzNYtCCm3urfw4smvnCkGLoQaksZzmShAiBqBVsWTdyjugz6sBW1u6U8gXhL",
  "key44": "5fUXWEbAYjaHnN7JFoaffcmaJvjfCyimR57LZtJSpe4SLkFapTLx5UdrJRnnkvhfGtx6MxLnmS1zZxkiexSXjQLY",
  "key45": "3fXGtMJ9r8XD53y7GY1XK6gneXas3UtRRKxWmHwG6GM3dsfxhzzcQLDvbjBErqrBRe6yTV6AmHR3XVu3tVFex3pg",
  "key46": "tCRCZDgYkWFx41zsWAH7ugV6Sq9rcxoRwwX9LQwP9SAmJLQBxhzMq8hqysyr5RzcqcnPUpxY5L6LpseKpgXnhNT"
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
