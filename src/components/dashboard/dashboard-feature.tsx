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
    "b9uUzFTnAQWeh8Sy8rD34RwD8tvyXq9UsomkuFFWstNukJro5Sy2QB73NadXKrH5WbHrXYbq8sdPEccFu65GXzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBt1kzxyexUX8nVncec5A1tKQcEnHQo6ArYgh1WPgmrQzP5TLXtCC5LVdWQDyza2YCANNf2PyZHDVPcSBUa6Max",
  "key1": "A2v2M1rHwtUDTyxmQARy9DNtMr3nP1DF7rXms8ev7dfPtLzHDyKAsUMYe4m1aEomsECHhCVWAFovopbgp5Zp2BB",
  "key2": "3uAD49Co7wyS4g5G1PJbJBHKRxGtnKwMq1iEJiZAGkvLBvuYnRxnbgYG74VqyJNhCvnhLxkcDSLcb78Ccwyd5iLN",
  "key3": "85ks13B2ZzzjQtkPsyoZyVVnA1YYBaVkQbGTpd7ATJEakcBHzgmzKugbo9auie393Gypu1wBZkap82oGsZEbQhT",
  "key4": "5LE6DbzUvVQWc2wEZtbbdoygrHaFtbzM9y663o156AAuvRPuFCjadCJiDYmJLaBxM65F3eMKFyRMQoNsZQNnGYnU",
  "key5": "5dFbnXEVJyGMHnV7r42Lmph29EvLdC5RVEmn4Pfo9ZAAkuqsSQhcMc2TSRytdo8Q4fSSEdFF89ZTUjnxf7xjdjwp",
  "key6": "5ep33pTq1GXqRResw6SLuHUHS6WCd5CW5F5yvjyFn7Gt2WHY6Vc2WTrGb76JxcjjQvTqXW9QLZioP8EUs5gxbsK2",
  "key7": "5rRndoPWECiNu9NKYTKZa92BynKW7YHhkkKwKVnqusjBhUhkkmMsFHjPgDE7TYq7iQ55kSDM8QGD3CT8cUFbuqZa",
  "key8": "63qheU5GFXigQzxkuBmkzhvWPsiZnNw3NaQ3wKBgCGEb5thvwLmPDdPJfLhZSFCP8b4h3Vg1gu4f4F5oCDX1QFBT",
  "key9": "29h4HTscZDk9mL4Bo2AeCo2esTYGBF5YAuZH2RghFAwRk4oTM9tEzY3TvShuNER3sQjr7ukeEP4ejEexK4mvLCLb",
  "key10": "21Sz7haHFz63EedvpRockF73QawBoCj4EdvhBxiKGvSrbvkg6KSZvRMWuauvvx96s1xxZrmoXGpL5VnTQmoqYbun",
  "key11": "2G3P5BeyKcAbZhgQLYBAEEg5hvoScHjThUfSDgCBiAA7ZyiXLyCrfMbLpxGYn5VjMaBAuYuC2rjUHZskrnfVWJu6",
  "key12": "3NmcxEjFVwuzBEGBntbrZ9KY2eWXh2GhRsrKdh6qu84ZHxiWNcXCNTJKbiaJDSGPNBqG2VQkTvaBS2DcmFu8GCq",
  "key13": "RdNUns46Ubz8P7SkNPzNE3SjkfganRgqnRsUjEjGhF88WkSwET364vXwMPqmVcsGMMhCrSQc8v9dvEUf7Sozq4T",
  "key14": "5rkBTyRCfMQrG2X8DGPq9ZB3UaCJeZHScDFgbrrjp428Kjo2TyGR5ny65uPkj3nsowQYkZMFnc822jWdNj9x8PK5",
  "key15": "5QsiV2K8Jh3HgJiP1ecosck6iP2JCLN2m8C8wEKNxVDiNAashkCVsptp3HVzUrncNpR3xsUVu4jMzUksVz9Ufdoq",
  "key16": "929Jr7QxNPj2zWhpsKg3knL1M3u69epbqboVuXUAukEu44vfWrPzwbkm9C2uGV5QeX8srSEpmUMnGDvALvDXhxf",
  "key17": "M6g6waRWKuG5TW1EmDSAz6mvkcGdBRLdSZjXB178raKjpr1thva675h4CecJk3wgjLnzKWLn3AxTrQKQKoSCJio",
  "key18": "5K5dP7M9Ew7asDkiivKaH23Ervoz6kLz8HvFbPwFCV9pJ8nrhXUXAQwRths4vYLJMbveYyLke8XZpiWfPxPwK48y",
  "key19": "4MvQg2bLp6u57goxcrGj7tjxHtB4KJ5WQpHmDWrcMYDpRXfaHyVfiRMiXz8VbERBJSdfKtaTtqmBgnS6EJCJQQtZ",
  "key20": "2j8FottVMF1gg87K6oXHTLbseLiRoiVCXNZMUBKu6jmuvarFQ5wCyGzjMgjoTZoZC6th1ieh6CwrbbR1Ab14EWwp",
  "key21": "2Dui4dVocun8FFHbGDYgXAze5rT3snoZKhmyefTE3rDcvLzno9fY2Z6f22GfSLT6xrujGGToTKnTFonGKxiNNnbF",
  "key22": "4dGm5YfEKiiWQdCVQ25BropEpRmCvr1792bUAS26jaScUH3dsA18nubtN1hB45DVkQ6ELeY1dMvs3vdyDo42voCE",
  "key23": "4si9jfbywLp88qL5itdep6CcCBSdjZTmbvHahpdxcig31CKdkRnBCfdi4X4eDUWgSfkDrqcq9kgFCjPD4LunSyQj",
  "key24": "5E7KgsugmgCbAjKYywXcbGKCgSXXYQ71dLaHAPcqj7P5MZd41JMVWaLJN2MzRzsvW5SZDf3382LDpbssSbcWn7xR",
  "key25": "5hCKcCJBrCMF95BPvHdBXucXxTzj5adYSFqB5ez49cJo2xcAipSScP16sGujFB9gX2EEmdtj4q63tgqZsSsc7Yyp",
  "key26": "2zGEfKjkovH6LLovV4DLXUAWL67TTFcTJbskTKHcabBUuXPs5N8cFjwx7iZ7ZoUqJnJQYc5UwMe9fEj8AuwXJBic",
  "key27": "KABEWrN7wff5Pwh1kccMComhoMLPpWnprHGSXJV4PRHcKUarUzogi1AkEvCBB4ZVN5bLtkjufxRrFLx1KCwBqBn",
  "key28": "5hyJnuXezPL4UmSgciCRws5wWUYZSuGKjthDcGSRotdh18vEsdCvpstEvyFV9oQevmVDTyaw6BDi9rSb7Lfg1ypY",
  "key29": "2x9617VbdWrfHbvtfTxFg4hPJ6267bqoa1PasuJ6wPgfBfYcxBwmVw8gGU2fQSahPy1Evw9Ri2N89Trqwb2qZfRy",
  "key30": "5atHdjuRHfWEjHTaJ6Jpz71km3q2vPbeeSXbPK5D8UkR2FU1ZhZiEz3jk5eVTuvKCKeEAbt8Ap7Yn6zbw6JLQZFR",
  "key31": "QNJ6hpv3wVj9UqrKruxxfoUv5hMYErzuMmUtora5w18wdLajnvr2Cq6BCq6dJYN7cxhQ8xTsyaryDaLHKcXLXrb",
  "key32": "4M5gx7vZ2rziGjRH4asvPehrGHuGckxudkkfFM5kezCiUpxzpE8tL78Fpk5Q5MaVkj8iFjuJvfHj5DicfbMD6S7f",
  "key33": "5JqQF7pF8B4i2VuCdHLq23dPAh3XXBsAu3GG8SY3b9mEnfBziewkZoVkXppcrTZSZASQUJZAwjGR3a2EUXMoETBi",
  "key34": "5js1wnQheNKz24seKARm2gtxDNBqFFeJE9BRpUT4kobY5kTAQ7a33eBLiuQ6iYKLAJGfA6pEh6JwktqQNKpppKrZ",
  "key35": "29r41TdqEbKmDQP4DNthqyYdcoepeozy6NHWeaYSe4dQnkuYW5P5t71uZU1WMg7KWqbbmiYdZcjbqTB8R6YVWkzT",
  "key36": "2NtASh4dmx3U29e39dYuZS9JRoNurxexFYYwhoMsmnL7HVcGiHAriTrcuL9acVSRqW9mWWKwNM6T4twD97H6wcv6",
  "key37": "4vKNFejYovLjKummK1a8fTGoXvP32vNhA7YPnmTnfpLxmRgjw31qnoU4QStkiYxQpatqLNGEDKAaZfQcjzj3yTz",
  "key38": "8trSDpQ2sJMh2JwJoWXXciajGHuaQaGHsAEnRwuzxMf6LLoKB63U85qiVWVRe1K7Zo57baMP62ZKJcwgBsKVZiC"
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
