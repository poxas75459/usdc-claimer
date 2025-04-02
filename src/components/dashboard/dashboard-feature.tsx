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
    "rA8iUrcpFwHHSQsASD8GGHXNixYaxUarfoPkhY78rERquwRdcRqgATWER1PqiEUfvwmkpA7BzotjpKuyLz8crTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTqoGM96FKshGweUk13d9rTx3bXiHxStpPCM7pMVkRfQTjgtWufnwyCdCMfmaTvEreUfDKaULotHaSvhnUauDhL",
  "key1": "54pCVCPHictKdg1dHUhbZFeNnvbSXoFNfVUqzAbFosLBczGfHP4fEmzKmQoAx6jykxESQcJMfU16FrkwYRjFpqvP",
  "key2": "Rd5Qm9a6EENBTs3XfPurtQa4E5arvzXUZYr1wud4bex8NBUHvPTtoCCXxYLy7hSJq4JFmntgGfhNFLcpmhRWhPK",
  "key3": "3TJVufvDN1v7LJ2sWiuEd4b59M6hrbYUk1KNoGMVrnpLVKV6biSRRcDoqoXuYgmdpzKr6xf8PfMFpYHkKEmXpJWu",
  "key4": "59xMakzr4vvhyZ2e72k2hB1XwY7tQNrL4KfrXArGsJ4UCgLJFJ1RHZRNJaJwVT7LwhuTKHmDSb8BxNKgxjTYubKv",
  "key5": "4XGHj99oVjwqraAYn3GafkR5aMGLmC4wjLhsoLdoaZKJUkjFXC8aBfZfqnYot1i35X7J6jvwV1isrn3pJBGtPfxG",
  "key6": "4Q6TfJytJv9H4fCa46buw4LQpVf3tDRAqgH1WwBDTA7EcYg2NLSafiYNSXRF7uGKWjkRTF1TcsT5MJcBcDWbAHUA",
  "key7": "5j9YhpZ4iojFcCkS9i7w7RzpxfcMoaTFqJx18Yf4VdkcFtWEZPWzLHGqeRBtcJ71C9gARPCxNE2XhyDQnVcaUFGJ",
  "key8": "4gE3Yr7hEBCRviJWyjHG5vHcLZpTWtFEzcN3xYV91miGY4rDL94jnn9TDeaGrm2tk6APKnUNHNuT1e7Gig9trg3N",
  "key9": "2s6Pu7rGXvwJk7Vm99v4Yuba5YD5K84cKshSapo4NyMgWiR3r1LvFzNJMzQss4YiZMF5z8uYu7VQKxcsvkUbHNMf",
  "key10": "2A59TQkjYhDQoz6s7WmbjcCxAMhBpYjRzvumyvumBGsbS8awdwRmRrQLxwh72D9EDmW4zYFbyjUWAaZQc7RZh5st",
  "key11": "54GN34DT58WfdvvUKW5g5dPfqeKyjwUTY4P9wTHrs13Tbvu8WCx1kkVXbmE1JHaEcTm8Lhia3empH68wzF88AtV2",
  "key12": "3GzdL6Gu1WAfBRoJcZMoc9UBNefSo44EtN2tUgwHGW8jCghq2BjWnkbtzcqxio8W6VKoK28sfu7UButjeB5qeySg",
  "key13": "YV868dEwpfceBgybAjBPY7y8dFRVesNB9GmuPPf2MmvNbhurwon95xcVqyJgCscc2zj9aiyLbfSiqRnDVM9xGcb",
  "key14": "26MgNbAdbC5PvKybBbQwPZ6gz7Ez4tNzRph9VPpMitRS5F51ash7bgph1XB5GpuKHPaRFBxFSc1H2hCMPDZ8dsd1",
  "key15": "27ePkqd8fDuJUzuCFqcswKwokmXk6zVAkHu4bCjkfkqZ1gEYaBDC9xevrYSoSog1rCi8DNJXPKDTTh5LXN39DCER",
  "key16": "3WEKzjvNV9MK3yfPu4F2ASwpzAWMY69Yo3dyMcN19tMjyP4RxZTW61h3Md7z3UpWjnmqCzRT1oxtmcSMt6gKBwBe",
  "key17": "4gdGbZctkHr4cE3ygiS2BpaXpcC1GnuJebx94JG13TwXw4kUnwvu5CKxbytuANZUow5XBLJfM4wbFbwXs7yf9H1u",
  "key18": "2So1ZxnKkbQ5q9JiabpNK76q5WLNFnDNqbqK5Rb1iuie4oN6kJqeeWucvpEP8qcBma1tpY61PMbXWuByX5QHPN8C",
  "key19": "4t4T7hsabBq8mVKUrYuMNJwJeFM63ybNPvMfTutzoYRXHg2rdZiJLQHiJ1erCWu82hq66tyeoQTmuikArvt2TDmM",
  "key20": "3AKDUhJCicBJDrL88iunB6TgcGkpdtHaQKwLLgiDwWRwfSSdtkNoGdXFUojFphX2WbnhWGrjaC4qdTmRsn1kzndu",
  "key21": "2ufK7S13m1CmvNPaGUE6ZsUGeQ26ZNby1rECyS6UhB9x49NGAhBQ99G1GuoZND9egJHdKCmqZpxw4k4K77AFjBCV",
  "key22": "2RXHnsxY5U6qK2vVugsnbTWK7TXJVrbGB4taXDr77XFZzAyxvWyySuF2B5ZVXcoBgFHcDekwgU6uDNaXH11nrEaX",
  "key23": "5ea4sQHwQWtyqMreqA88tuGXaDb2PRdfoVWvYMgizKCsGchq3BgrhJTy3iiHAR9tNyuCV6FUbYi9UBBAzYntTbsK",
  "key24": "PPPjiFKz9u798ryK3aYfYLDB2hh4QKFwRaGPAsR5jJzqPDCUNL9gfuP7ar34bFzdYZ2nZcRV7KUmiy6Eo7byoCi",
  "key25": "2PB1GGBtHzLCFx12b2ttZepB3Kxp5mCx1jziNQRbSLfen19LyEMaNNeLCCnRz1zGZZ8oC7ENuNBntnGXdLZAU5k",
  "key26": "FThciJXr962weSv5eGaxKnfDx2UduQv6WPPChw4E3a215SrEjSJReyzwEPGibuWjDRe6MGm8nB7UvSeBTcKYX6m",
  "key27": "oa65CEds6ZFXCDZaT3A8RrNs4T85iqMvuWNDay4H2SuTALNLU9BJb9KsgBfjaW2NxeMB4bFRqzRqY9Bc4rAH5kY",
  "key28": "5VBb6Fnf1388riUy4EPyPbsaEymgVPgtGcuabe9pgSyNpx81NPNFvS8dWoMCpRBb9Ws9SbcNZNXxFtchMTqwyQUz",
  "key29": "2RDeHghrdBCPAJSkrKz4NEZcesUB3sYpxZ3GNN9sfkSczdBvj76Dv441j1UkBmyw5dyW9RZCs7GE7Eo2uXkoSyjp",
  "key30": "3v67Zcnty9SqEfPjYhUstYQpbzCBufzQRBqj9wrH34FhmXCWfY8sWWktytzfXPhTJYjhKhqovCW3iZkEfnMULBmZ",
  "key31": "3Lwjh8n1PQ3AhViEN2gkRMzL89EtQM1r6SX8soiXnQ4aCdHFUZKy3Qc3RVfEb5HMaYijncHSDnNVBam2pDddrekD",
  "key32": "5FqC2ZEqUUyahAd3oUiu9qexSphK2dXQ3DSrL7QJj7HYmmoc9XBEfcJotrfzBYbJiqjTQjVvQireXYKjnfs83HLR",
  "key33": "ghRNwPt6s84b2C9XkGREs9zvgmnFDhSbmq5CnJc32zKTST7Wm9vSQ8ATmdSxnQhXvkRidJuEyBe2ZALymBvWiyD",
  "key34": "4BjjrJguBq9Wg5ZPCLaGtggQcFHszQqLQAtY125FnLSdeQcumxFuCNHTsuphRrJKqRhDwAek5jmppoyLukBrKYjF",
  "key35": "5r47F5H3BQxE6BTi8Xujc4hPTLUTRjtJfnGfNVuZumsXcAFfkGnVAbBsrJy1rrXYVa9ow5rK386oRxP8r5QbQfxU",
  "key36": "yCxY9vTM8G5i7yUr9iXKhbuzZr1PjMsay4FuT14VMgrEru5eqy7Ug8fKm6sUf9vrCcJdBTWcNnXrQBSCm4PaJMk",
  "key37": "3kFqaEhsF3ntU1MxRFSFQHbLQcQfSmVgyeeb7bKvCEc1zsPBW6fXsNHyZWFASwiaG5r53PyxkkC5bDh3jmKjscGN",
  "key38": "5hrVuYLsV4DX7tftwQrhJDVrK7hN559bVyQBseuy4FwhfYQNV27ezh1RsEqejQN9ZBpHndWYyRQM4q4Zuc9fMNwC",
  "key39": "3ght5MiAiuPgUv49GCckpoztsnnPfPYBxW1NEsithMDZVxCHvTxMxLTvG3r7AenGT8Biz5Luivg2aJq9BUz4nqy8"
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
