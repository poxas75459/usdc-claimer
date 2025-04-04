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
    "2p4r8oYYFfbedRx9sfWtwzrR5UtGPsWWsDmSigi3B2UztogdKVEsbTZLX6TiXPiDuRLLg57EEasaLKdfJviPUkjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ikhasuJV1PQPRw9k8M9QQQV9jynMsV561sxhzZ3jHyvn4rGkT8XjPqQqBAogQ6tjjSLQUUH4KiVfgoJCjDkL3wK",
  "key1": "5c5Szvz9gL9u1nHsXnAbMa8fjt5gy6up2GARbYBWyBGT86b7UpvNggAD156JTp1xnFYbLK5pdmcQEF9wGoCJKqjm",
  "key2": "38wuMG8iCdyYBkqs4gMYrQSf6tV76YfG7EwDYJhdGu1MqzcT14TbVibNM2q3pnSZUm4XEZXrhwcrCeeQ1fzYHQ51",
  "key3": "4YzqSCGVR9zxMhvVscYKNm1DVeRpH7aLaqAPY9FY3S6Xo8Csoh4E13b5AF3oZTULo9A75cm7YXcCZChhxuyKEomc",
  "key4": "2ndi63HUXTGMph6wZvZpBHVorQw2drJv1wU1XnFxhHZmSwvNNFD9QYSYbt13HHtS9Bghf6FLmtvmPnpQvCTnfrBt",
  "key5": "4gnZ6dXYRATFU2WeT4Ay4Ch1B1t6hFgp4jqcnxmyadd7QAeZSZ5LWMahnZ1GUS2qjexshx6bD2FGkofJcKmAus2C",
  "key6": "3Mx4N1nEoz1yFW3r2F7YEQyESpRPNkFkzB8nxLT2CBj7fLbKzPeBFFRuA8jFW13d6Xf73jARJXTj9enke1UX5pAJ",
  "key7": "fXw69ucqRqcu4ijdBfjZmmWskWuvXrbZ7t9tyzzwp2BejVHhTvtWqayuUptcWSajAGgUvjSAVCBVDMCrNSv3kGg",
  "key8": "4nnaBfg4JGtGfnZfEJy6JUSRhsG6sqzvCKxju1eWJ8ebKEb2pqoe8PYZEpm2JvNunqiuonhfj6XR3EoFBv51Z7Zr",
  "key9": "5gAvw8hTSX7P3KgQgLErxH7hGoQWs5qLAVRhncjFcsWEsQq8QWnb9K7BvrKYnPQJaun3Wi8i4MWTgZ8ouWMTaq3L",
  "key10": "3WCQgWPRwTmC7yfLYMTp1GHhPC1Mja5SRChRoTncgdYdeT6mc6H34XWDXhuCozW4FqEF2W9mfsUodRzcLU9nk7hU",
  "key11": "iaovTSuKDAk6md2CPaUujhNXYBUURJGmqaHU3C55RU5pVRVHfawUQM3eCF9zLWEnNom7itbdZXAu65RcxJXwrFk",
  "key12": "WzUNeQWCuSgTRXneDPaEV12DxkGhHrNo2J3pAQ8ZXs4Ljyz9PEnoM2G9Brz3AXbwobT72GtPbarGbx9TB8DrT7i",
  "key13": "3TJsykdaiaZZJ4RZjkeXvkANjQ8T9YZsRNMeLLnc7Y5LK9ZTfg2XeHcaJjWKRHavPrNjimdrsLGCwS6stzzxJdgY",
  "key14": "8s3eYhS7UoJrrDE6KA3d5bLFcJyJMm79pyLZNmNCe7D2wyEXBbiJoqh8dvTQXeKwqtVp1nHC7QzfYbGzbnPzaBd",
  "key15": "jDr6rWufcNi8Vm6RgKYvQDFJAP3jsyUz6V8nN5g8ye9xy7XjsVQ6Fr67GRYEJd8mSSXzmYzmiGQQ49An8VMgBKE",
  "key16": "2YoW3cX5CwMZyNr57GrUabyAYWh8Fvj6Ryq42JeGU2843MbcEsjq5XRQbEmXuTRZNXquyRNMM7Tn1FxCEnhk5edo",
  "key17": "4JpY3jYzRPHChhzd5q2XijCW659nvzWhVydBTaKcfdYh97qpuCMReum4FqWRpJJUK227tygUnWA86bqNVRAb2QET",
  "key18": "5LfL6Qm3cYecXg8s5dUycPQT4UME33kEVGV21FAKC8LLdjMzXcyrk3xw457w6QRyUBB93c1na4vmXBjsyuHSkvjD",
  "key19": "3zHAqjkoTQ1GUosdnsHu7PdS3dZWCSBNrTx9mTQHaqpiCyEK2g9kimpicUU9P9wgWPjd3m4o2j4UbhBJA5AmkWYb",
  "key20": "DBBH97siFG53PdP5dtRdRqByvmwCZFUFHgSX4udU9oyZ9ERCYu93Ps8UZTxPnhodcxcQaT1yfHRy2cRePE89ht2",
  "key21": "2uH3yE8xBBFybG9FgqN1UkQuUY2RSvQ6xz5BsYciowybVA6A84e15DpqtTHkWFqQC3mLbhj2HHf3rbLehw26o49C",
  "key22": "275fSLcbX2nWWtJo2hFZQAgNUyBqnyTqMUWmLWMi6L4mcZzTLgnmottvXJzuhYoshfb15tvQj4V7rRNJQVM47zZP",
  "key23": "5awiuw4fNB3iJA3YnELFXRsWrgFZNw4dEnxm7Z83LaAocHBmniViexKQUHJuQ6QfLWpUk4VRhGKbz23LzFfThPjA",
  "key24": "3L2TTe5adhoeYVcsJVJNHezvUPBxt94aDKboY8LHsACaDt42KJzA3iNF6S38pqsZJHexTAomrbNmPgTjey4G5Y2m",
  "key25": "Nm5fveWQtuxVKA2SJQFz5xy74jdNL6btDBuCb7jcojM3xK7kqQatoyfdecgZ5qfu7ZnDNdBgmaouL9R9dRqVEmJ",
  "key26": "4RzCcsXKso1TyikMHYKgGWHNZsqfv3nrN9jL33iAWsFFpRaCptz5LQTUHTEYxvWScFud4N1kXDRagCHkJhAsEKH9",
  "key27": "2QCX39PVVc4Ep1JpJzHg6XAZBMvvqMCJ2Bx8jNFDdJWuMDyARdJzenAWj2RVhvcMRWeJNrkWhi4cHKNfnG4u4rXv",
  "key28": "2gXMbHhPYx4X3Rf3XzquWh1B23bSJkrx4UKV8qsqSMYWgm3nomqm3LjvcSAktLUJUKSPkUcjk6K7BGvwQGQFQDFo",
  "key29": "5HuReVUFpMVwGd3qhtKZ8YxTYaHcnecz8rLMC7WAvfNxRSYwGGtDFZF5bfBvHgWMd9Bkf9UDXiisbRGmNxKpsVLx",
  "key30": "RoouH1Jkc5MyjdHzzvGdakGfXathaLv1jvyTygjpxDvZorrnt7RE5dCKcFyUj7f6SBhTXP5ix4Ss23X6PC1xJHT",
  "key31": "ASqFTikLdRrV1iaRc6ZDGk486LiteQU5DrXbeC6okQbh9RgvunSqmA2uiWMx5nfvZZwsbRZgJiz1PSYRNCkrPG1",
  "key32": "bgb7rPUMk9nKWEgJQL9mX5aV4KfFpViXc1VdMHERpMWYFHBM84BRaMPbA36QAKwBM1C83ZCSqGVKzj6MqbZFWVZ",
  "key33": "2emrJoQnypHYDn35VAqCGbZweSK1ar6eTL1BY5DJTWDRYvYgFGzufaJRDnNtNLnYvjNEasFVM9YdemAia7WmX6xE",
  "key34": "3y31fJ5Yhirj9Pzv5m7NHJGWq3gN2xTNknSfGHRkcbMvxqyCiRRs5aAbJu65ui3u9RiSrnGuRShP29YcuGEajLDe",
  "key35": "4LSWMQs5oS1ncW3PimvUjaDqiHiHBYN8PCtuGjYkFx8jW2BvmWj1SfbnrpnktD6z3CpVRRe4jYyjtBNA6Re5GnTP",
  "key36": "2wAkCQhTcL4wWz7wCDSRecSJPM3k4sYESm8ASLHJJbMMQQuwCGJ69zgekSj9mXP5GkkQw9uYEjXmqC9xwm4VgVYH",
  "key37": "5XqW4kaUA9bT33ggJ1m2UwzTgLsb9W61bZm2wczkMpxGXkHoqBVwrQAmBFmyjE4rRQPKaFffF4cJKRsN5UVbKgrM",
  "key38": "5z2TtkYCCuQEuycCqpaor9W943fkbQMCx2p1pTHgMcug1jBNmGH33CiB7w7HeFrGKXcxUPcX5sidCqKxYGJjgDC9",
  "key39": "2o568RSysH2y6FfQuyGVv6cBV2WpAqopCHmhDgCvRcj4xdUTnsaVc3Sc1vgYrtahYAVj1Jm6TtTSaYniqJSUJvuY",
  "key40": "4aVYS28Q6j6F42d3aRzmyxYekDyY2AycZgPwSKrPooG7EN9tgorwnhWpyuZuTv7V1SSsUZFH48YfBUwFafhtgco2",
  "key41": "5ybv9cayn44RR3rVTYf5geBTW1nEx4efE1nzQrQGyXAHKywDZRDc7YJ748mMbu4XiqKBSzAsXXXBqDpZqJQ7j2t9",
  "key42": "5GZ29n3XRLdbLHVuHyzmdW27PXxqj1NKJyDZ27r6JA6wRiTkcod37pTHRzmEvwChqzoNVB9JgKtwYiqRk61KwsyN",
  "key43": "3Lg2PobZzpGYVgb4Q4q38qYqNaWutPU42dHFc4vFQFfgxKEtCVqxBrMpQe8jWVRSfLxo9DgSTxD84j5uRwEHVnDQ",
  "key44": "3UZdiMzYubC4x2onCoNRtTuR4FNc1DNmZify8jRSFpPfEgExeJnPPi6UaDtpNUgYt1cuaX2SdBm2Cc9pFwKD5qRU",
  "key45": "4XEimYy6C6u8nEd9MWBGdgKaoZdMqzMnBNpH4yadTj7HbHp1n3fVvqRTgPPTx6KbG6WaqxC9dxjnbHgEkfRLL52Q"
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
