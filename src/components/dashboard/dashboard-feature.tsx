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
    "4TVDs88YazeSuh1R99qFvEGkxpSUWqTHGGHaKhN1AtQu7onmQFcAGc852W2zy2HGTaMnekjitgso2CrSimw21iXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ei1iDKtdQ4soKoRrSNZErJqAiihS6TwnF4pEZGkkJ9aiduxRo3CjmbLmXbNc9ZWxUZJNQm1Jk8QQtfFNcVZiTL4",
  "key1": "NmJY6LKxaRQ6hQzWwd3eg5hHQc7wSQ1UdRWkteVMR2gMrSxhw7UbLZLNZL1DdcELeyAbxFb4Ppqj7daRiUkWpaP",
  "key2": "rZNJY3vYZoqAgj5WiZJWma7YNkcnSxsVtoKpq7cEQWWJnoHWJTBRb3ZMTF1dqtkMhJMsH7J6SgyrSxiyx1nMU9J",
  "key3": "3AqFkKakaHZpneoHsFiLfc84Z6WTVmG6Eg4uQNUrJn9dpgjiiKFnJMTXgWnST8uK7Y47Jquc33tQ8r4vmc6UGHYY",
  "key4": "aLj2M7YXNXiW3WggJ2B7rpJvXo1wFHtoYDfgBawG7SDREax91Agg5Hfa5yWtqF6kVTe7hfgABnMz27hAiAaGqxf",
  "key5": "5Uf3bBM5nMNm3NPh8p32RRQH33XcdUfCFSGze3pcaxiWtYPnYRQQqvqp7RaoMCHEFBRFSsSAFGXLQXhXiXWQm657",
  "key6": "56oDJDNUA94UwD1MCwQcHspcSgT3hTfdJ81xN8iy5x9kjJ4dAJDSP2hyPQdvsDRfRfoEwAR3BwH2VtjmHgJrkx45",
  "key7": "pBANQJEHiEMrRkZF8yoY985EDteANZQyGZgL2xkKkkSvFiTmbbQ5QStkUmK3BrYD5iemhUUi3GgwxrfQBEXESwh",
  "key8": "obQ7SpX2YGxeGGvSk873xM8emK1SspmDoAhMCWXD8ifHoig3HrWL5iuW7cyJZG2BuZiVsKnkiv3uh1LfL8KPFAu",
  "key9": "GWHW5TGK9ZX5ZhdKXe4NXHoZzUFQq1vF7tAn6QpCKXMova77CY1GrCRibAVQTZFXij3qHZtgo7UzoLHmxS8eZG5",
  "key10": "4oRf7RXG1kzFZm9CXEH81GUNTnioc62erUk22NShNWrhSrLPbbU4B7NfxUWmQTuwuxAHgm2UYRxr2wy2KRtULZC8",
  "key11": "cHg5n7Hr3Na52HBfbvRoZrUsuGLu7qhMcQL9k7vqNn28TwPeQyZGNLjJ8T2HAugdGU4Rnc9LBkFYm9dMhcueYJC",
  "key12": "5SMBoN6xAxax3pQbkKiXGmE62za3HcCoXS2Bp5Ce84XYNwJ3e7kKbqCK85aPP6L56phok6uVhAFWoRLs2zknsFMa",
  "key13": "2oZLJmdT1Y7woikrFmZsB3djZK7L27VgxoVWvqe9cjfzT17WVEJyB6BJ1Lcjwd1cv2yRhwpmEeRzKSvr6hhoAWBP",
  "key14": "26F2Q187Qozm8kNpHxhqpxiWjFSGSEuPPJgZFZk29t1xMfLuAidjX38SMYSi4ToYS7jQTHTL3cH2sVtwUDceieAb",
  "key15": "33k4T24iGMhnc73KLT3nc6jaF1U3U1QSGZaugyrpvrjgfy4mcn8BRs1ggybNYd2gWpxDmbWvbw3bxBCr6fyijD2B",
  "key16": "4WdteDcQFdgsFps8dBumG9MtzpWFVDDynXLBzcDrDXDZxS1x3yQNzBVd3fdhVMUjK8vgUs1T4Zx8gpoR8mEFCKGA",
  "key17": "2949TQqTBtqBu6m69i4Yqbzes1WHUWn7SWfhpXB5vP4PhmKebDSVjnfuca1HyYq4wGTyJ1wfXHXs9bVxjdnXEpbu",
  "key18": "4BxpTrmKE5YKoAMt52VhQpWcJf7MEvq7B8kLXLxKTuW51GQ7WnSJLjgQy147Xe93hPhogaN1ZRLcm8f9hUKTGN1E",
  "key19": "2DLrgPYyRUeKMrXsiB28kjbsN1R4ABfLXt2jovs8sruvHaWmRxJunw5sN5aadB2EipM5C8sGakdxQjViiS6TZtUY",
  "key20": "2brtsnsKcFmyHphtYgp8AJ6226iPUxzWka4XRRDMqYzwaFhzYbCe5MvsCesLzJDaRJgCU65D5rjoJpe7F4aZRan5",
  "key21": "er569DupPbLBbLwsh56EGHkEUm4sQapwGN6Jz9i3WSrsb4uv99YSo619sTwr6iJVj5BUkioQMLP9Ls7ZbdeRC9A",
  "key22": "4mZTpf77LqCRgqCWs3wPorMwrookPM54jB5GnNmXGHiKscbAHtQ9hd7JHWtimS3WjPuekroLsuojQFR8xNFkBbfY",
  "key23": "2z5T6EacwbKnA4ZbRuaYuVvpNqTK7vsQ8n3Beyh8dxqxYF4bjUodCBonBdqed5wDiKjUpvi3BpsarcMXZEfdx6ob",
  "key24": "66h1NdC9Y9avPMx9VQfmyBQw2fEAMaLpwzCYF62BuvxgQXjEfAM3ue8CKsUD2USk3LpqFdE3f1bSPdebC3tKwKRg",
  "key25": "3QNhg2CM3SZsno6qE2fR8t39q2QiTrqt4359a6iUZNUmMSJ9kY7Mj1sJ4rEDe8c7n46GBrdU3bQVS52eTPUoykD4",
  "key26": "2gcKeSbu3LVpJS94UJR3Z1gwBiu2YWswtZ2rMHDC8wDq6sxrHaUZJP3FNost9J2M6dCLSUCEtaSnRv2wZUyNG9Su",
  "key27": "51phFwvBrPdJse48pJ13Ct9Vih2vDBr5GpUR2bQiWrR4x4hXcqBkoe54cqMUmHSuBchKU5kjPjbicFEo3KsciAeH",
  "key28": "5S2HcjSU16F4u5GtSEWjwKiJ2eBDsV7mvSazBg2WmvpHTPjHzEhAwkornR6K9SoU7Kp5cd5HtyGnevDN8F1zcFBU",
  "key29": "3bnwKBZ7u2Gu6fwLvKvkstUuZ5JqwuUKD34HxhTco4gYrcJRRdqDcJ9PYFYsNtkcCBH4TyN2p2DjwTgGvxipF3kn",
  "key30": "4B3TGgZQB53Xyr2dSFTZNoEchh4m1Cm121AFVbYMroaJc9pZehGNprZRFhxAJ6Mq2Tw7gPkw9AHWcLkuCkdaip2t",
  "key31": "3aUCqwRH7sjWfjG7h2gcNp6ThH7JmWB9NLCgGPAQcZLZ2fPQhP9ypAGToe7Hsng8ftNQicXGWJEuQJKgmExm3eeh",
  "key32": "3CeSjhYChAjTZ8LGt4CbnYuVyZV8a7PqSqRrM1CQm9tsyBpJFBfANhqjEuEeBDsRRtRohawtSNjzAqSAVZ6yjLdL",
  "key33": "4MDdv6vWLTktokdv6eqGM5jYvTu86YcGNmK1S6XqQrhwUB2CFfBBhJZVxjYH7h98eXWvVTbNMdZPg2CKASf15afV",
  "key34": "4RZGB94Qn9z8SyPcM8hEEJFkv5tKHxoh2chSqLP5h9FGtYKN6FitmeAKqzHoEQh6PCe3SdGv8LbWDwNB35ReMKJe",
  "key35": "2Kj2rWunWaTFd4zFZKq3jUM61CEta28U29yaEKTKeSuuBiNn8Jg73xfMTaXUhzN49rqbmtde2C23eRHu5d8WdpnY",
  "key36": "2Yu9nsNLC8UYtS3ezBb6LDxgDnysX78BZ1H68dHsRmyfTrgyGiuhbDwPKhM2diRKpMgHqSGrKf6n23KWkBntc5CJ",
  "key37": "535reDk6C76txPBTDZ4Bfgz4MmbrTZE3GiN8wrYaDKZdads6tZqYNGRX8tC3zVWv4TL3wJ1SRzNrpFoyBPhvhE5F",
  "key38": "3eJS3pXH9gAGbtYYh4A7xXrViaV1rpoGBc4KAGBsrfNhftGbFNzVnFYX9ysGQmeQJrDsjdstLhgjK6aDb8XcNSZ2",
  "key39": "4GZSxoX37YoLbzx4Za6nxsQKy627G2Vd4vdV9yehhbVtqwcMtzvVhdajoX9Mxf4mSzE9rQMS3aWQ4EyYwf1bBcCc",
  "key40": "52d8ZN9QRonkbP8WxS86XdtPoasWNnJF8ZNHumNxkxN6Fb1g99DgYK4AK4k2KGLeELoAhTiCAxi5z9xL5YaNUb6",
  "key41": "2DMpoMY83cA9vYY69xspiQaNXr46M5r5nkYZxEMMsCWHEJV9LoqdLqc8SkEwm6GfdadF65ArhVTPekJiBrbdiQYb",
  "key42": "3T8sMpzPATtchsuLJTFwVZxHjRXKHoENikACke5vZrk5sWVoZ3bbSJ1SukNGXFrVgHVJrAqXNLHMppUaWJyjwgrS",
  "key43": "67Z4BdxWbGJzqkGS6ZdtiYa77qMQXRBvNM5FsamKV5tT4fhftJ58dCMvp2fhCzFXHxcyEVJrxXQcLvcxFLoqDuCq",
  "key44": "dmahVckeXz4ADD3urBtCbmerVRgfuCzssJdrTut3YqqiFS5GTdFbmA1kTL48qjzFVJjwHxKPCxCuKUmHzrGzF3m"
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
