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
    "TxoeC9Tt3AGBj2UUh5HbrvqPRGhMntqSysBnXrXNfoDfXX2vdJDuYQaeyY4uYgkV8Azx4ntYqt6V9p4nkMJwKFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ups6n79ReGvgvxKkBv9y1cFmdapHfvkajKKXGiY9FguarjDfjcbqAjDsD2ZFbSgh81pH671tRY6jPoi3Lz1BBmW",
  "key1": "5FuduyTAph9odiTmMtZ8t5G5roxaZor1rdY1qgcSck59bWuzh3e9nF1SA2K9NLtcjVGeW2B3QyAwy2pfhcFDeVGi",
  "key2": "8evQFu56TCYbneWLZ2ym8TshKG5LwAZXPpU2AdhcWcBFLkhxyMt3gHocvCzzXWWknrgKqF4wfE3sfVs4Nfy1b8v",
  "key3": "41wgGXrBP3pDynPPCMtPYiTCoc1waKTrWdBUKfRguNLj2YKHQwMw9EWeoTK7Vip6L5mrkmG2obVk3jVa5EmYYRTf",
  "key4": "a4ZwWDH6ZLeTPPWng8jfWim6xcuYnuNU7jzjdnUdY8RUEj1m4qHQaiDCvH88QqXBw3JDH7mH4Hv3y2HR728ty2Z",
  "key5": "syc2uMygrWodkkMvknkhR5FHXRKVRdbVum2j3CxT6cYqi4vHhwKZ6UoDdAQevDvcu1GR1jyRYH6WNwAV5qbPxpH",
  "key6": "63aB7YXvLmR6FBLSLapMMo91GPjcDoW1LwwgMfkKHt2vXVcLRrFZv1KWLVfeuBZY7Md3TWbTptb8yWpRZV8dDii1",
  "key7": "5DehBEvU81JkmmjG6LCmeog63oMkxokQmX283SgxYX7KSb2CdycF2mDP6BvimJ1xUiha35fTUe7cFfonenZ43XEz",
  "key8": "2N11jzjB5G6t3e3ajLMRwUAbSVazJ6vX6Hfv9zppWhvoRw2LfBeEgUyCF4hcmGkvTjLEd6mVsYUsKqL3fcetH92q",
  "key9": "5WLdaKJphjnqKPXypirfqQEUYLgv86wQDG1xoXghrEJXxFZN4qTaYAJuPUWwEPWyUBAMmnBkEACH8NxkqG6ZVku5",
  "key10": "2A16eDmsoTG8fqZoxASAk6tVsgECfs3E8Xa2VdRjgAiLy3x8cxM8cHCSd5GdWG95pgXxLoSaZErgoGcu8HwpvPd9",
  "key11": "4MDZGocurWcWrHTXjVFo11BcxWNVLtmbPTBKC4cqU39ZWZgpLX3TJQ92SSdrB2ZYCAGwRXbTHSVZhC1YcjMX77oq",
  "key12": "3dLv29ohNwWnpNU6SBDxdPJhfYmmjHhLCEUoCS9A6puRdLFhgWFxjeLHZxvJF32vZ2tuPECu5nAuD4QNrjCzR1kh",
  "key13": "55EPJ7fQe2Fny9DoNSVtCwvzKXA2iH4xvbaY7Ef6WNYqS2z555xismrcTzLKU1J4sXEKipJqkqT8y5R9MEuaas9k",
  "key14": "22wE4Z6jv2Njk1LAmQbhGsXfb52WXQoWWrjFa2u8qM9ALAtFyVzWmQrh7os4wffmtTCiG19JG1kjUMNEZd1tjRJM",
  "key15": "37vxL6mB39tJtbg5uDXcJhTE7uwZjF5HU2XJfBmz1ZsLpbJRyqfj5TzQdzQQBsbDL5FCsf62aHWFBkzhQDyGPhwC",
  "key16": "5aCpPqDz8jambkRpctWebKHXL1vj5dyWc7GqypBDaMHhjXouY1EJsJ6qYBmqho38AGTb9aFJbqY7Kp6j54bBbA1x",
  "key17": "28TLFGMaw5mZA6r7DVDFkrZBmYisoA548CLbAcHGpWNSZYmGLux26fqYBRfThzvyYqzBSCEqLj3fgkP8Jf7nDnTp",
  "key18": "ztGLJmu6Qys4VicZ2DELe7bkwZpLZ2644R3XcwmfuvEEuB9UUCZEuWihtXcTUE6GFwyxHegALsQ4pSezgssNahC",
  "key19": "2wEdkXuDjmGffzja1qVqnjLz94QjVBqRtx4keGR6rVsVnw3bLm6jnHeAmJA2PPaSvCNYsJ63dMVCx2oL6z6SxU6W",
  "key20": "5APWVaWm7hs63LQG7bWvrK2gsLcuPpwXjv2P1yEXLaDZcer3CsrV1BybWV3bRCoKx7Q26PhDKC17P8tkwCmZ5SgU",
  "key21": "QWnU3c3dikhNW5i79BSttsQNa9q41TAX3TdeyUDbyTJLYvpG2uRr1eBozgXjGGMynCGaGYwcbFHd1y91X379Krq",
  "key22": "3frEZnMgFsCgBhm57RE5bvNXqkX5pm6kaCTkp2dQ9CyuxpjcYt5mSeMJ5QqdaGSb5vrSjqjnKxq9C4XXRNwjnsPY",
  "key23": "3dDhUxAn2mjqso61QG7KviNt8HKEr6sSfJveuap7uxM7VvTosriDkSwGSqzNVpgyVzaSKd5qUxQTAdFBZuyt92Ev",
  "key24": "wwpTrZMUT7gJ6TcAxNhTFcKGRUH5tXrQMWUptwMydBRZzftFy22tGcz14QgcHnQxWst5124SuunBH5NzYrSgBVB",
  "key25": "3S8K1NFz5M4iFvpXVb1eqWSRBUp42mEcVnUaYmCSs6gYPn6S8sqxxXVMwGEvvuKSSBBLJLjzUcmDfVkTH2eJK6N3",
  "key26": "3gvm3hNYDQscEPAk32gDtUbLMxFmRg2eWBC9DgxxkFoK639cjUjLTijnJD9KiHgaofx5d3Wb4V7byozZekdyToLx",
  "key27": "ZUApbYxC1ECYF9j61BnSRTKuASoSYAcKMhEN48poN4txuEmabWCjRnCr7PtFzniXRx1Gd4xhwVXcFaZFkrkTscu",
  "key28": "5iG1AmXqKM4NEGFi41z2KRm4u469g9s5vNdKMw27yiouiLoyiWhizvwTWXikPNaQkyfUgEwvVSJKEwZrtCmnE7AY",
  "key29": "5jrf7DqmmDVMXP7osKrQJFTPkXK8gGYFZiB1LeMv54jy4YPM6eRuf58Z84S8wZ14aa1VeiC6wC7NUaUnsC5Qx2KT",
  "key30": "5egMU8wAf5ALsU5tWDeomYq9aSY7easSyHGn8PyfeSjV6E5ocJXjadtk3HLFApVEnnKWijVL5aAeTucSbF6xn7A6",
  "key31": "2pveeH1A5j8ga57Q7tzajAFUQR5oKWq36vqw5AHJjuR4TFuQyctm1zLCXBEE8gWY6UvctphQksTKB5tnNtcJwrCf",
  "key32": "3dTNmWdAqt7227AnfpAc3ak8kfuzx6QUkdNXzmDHqvhyWNZNtRjJab4KFYyaXL4KF5oBKrpdjA9xdxBLZKrw93kS",
  "key33": "54FawEaLCffWL6SDAuxA5vmXkvFmzq3RWjMfseQRj51M88NKe3qjFZeQ9bdLpYhgG3hQiiqaCcugXtNCzy1KCjxw",
  "key34": "3k32Vn1rtMeyDN8MuYnVeEy36mUD64cKfDroZASTnxFdgsiDmQnWHCuJ9YDCtimUeXNgeVZVNEdDsmCWk1UPm3wP",
  "key35": "4bMXCSep2QJ8GmFGvDPyicyYGTzBksUsMRmsWrJHJpcBpCCDsovjBKf93LpMk7ttUw4a422NgvegoLVrWA9gcJPP",
  "key36": "2d3b4UPqYejeg5xCN85ygXf99YJ9QLZZTd3WSbPqa9y2DZWRuJCttjwjWNxfUmMGNG6FHUxj3DDEuScpvXdepfa1",
  "key37": "3V5v5C3kcFsSXsjGRi2cc4Cfo2uGRNEhuntZG7ACapAHHJbaDMZFbJtXik64kb5UkWGswvfmh6PBd8TNnwcffNaH",
  "key38": "61G1ZMQwYp2X6ouNJNb77UodX6jbomXXUVFNAhF9KYesG8fNUERtBTjdvsCQaWyWEHp3PSB1wKCxP5NdPVmn8VaW",
  "key39": "2Tc8xgjv5V3NPp5rDmBDzraCB1KaKZ6tSF9it993VEiD34WtqN4Z6DHSdsU5bEXGMdeitvBqqt2JyWjEfv4AngQJ",
  "key40": "67gaj1LnqbjAA1mxGJZf5NgqcXzQvFVN9dgcBuV6QfBecSdD76cCEKBko34WebvtUdAhEVfbTUoJCvE233ZUuXrd",
  "key41": "4SYN4uajqQ9t23BBBKiUe9m9mo92ZMBU68XoHDeWXoBZdLc275mAunpZnYGr6yKh2ocZ9jTY9mJ5L2KQZy4rTatj",
  "key42": "56dnwUrjmGA5gBECMjteJ431HD7fYqG9DRwZBYYpznoDtuJ8UtgqvH5dPiQHAPpkLw6vELLrcNi7j7XuCEwGr4s4",
  "key43": "2PXnj3jpMmkVmoMfBAW4sBkeravAfDQwerem9WEB8piwZyHrMqwVjyYJqLjD5547LFrTdXd9Ensa8RaHMawgqo9N",
  "key44": "2PmS4nGpueeHmJdSeUTzH9cv2cVEmJaosDiWLQJcst2ZjNkiLLWPcFDE4jrgcuTw6oGnj4wmuAqHhz1htxNeHMyT",
  "key45": "3X9M18gHvSoG4PC8ixfoWwRBHzHT8njtnCLXUAf4kzHY3gxJBEat6KK4hEj4MzEmpDLCg6F19bDFRyR8BFui81cT"
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
