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
    "3Szok8za8kgYz8iV5LVvbm5WsXav55yoWtYPh2dz8Xx7Nb4DkYYV5bwMmhBU4hL4NYwYFk1pDRs65o6JAGEBizBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yHBtNsQs7JPpnLkhrviBDr5riuoHbk6kGYB4dEfMLpU5iDJu8hNc8Dq8zzynFvc3e4jZDSsahZTVHPXc6ZXiwwU",
  "key1": "3f3Tc6FuLi6B9Vgc4HrrvDtr3zacY6bYcMDYzQSMcFsc9Jt6k5GooqoysW5igSgH6btVbu6DddK5bLBygMuSPTWh",
  "key2": "4cbpM9VMjz5VaHqrSQnw8Str4NBuBkmGEGusEvxLYSgUULdDRyfqpixhiw6RdyPmN82bKuEGJzY9YEftAzGQBe2U",
  "key3": "2RqRRkeYiUj1WWirPCK4QGZMnqKmT33VGuNZEMsGrfx4nm1aXhPDXysNNMopVmGzRaTtSoESxHBmYkKBgPna1jYf",
  "key4": "JQzyMFezCnHfgjB8H1KvTUZ9dA4rFGwh6jCiE829yuJV8mBqg1M1DBAsqpycuDThohrJDGmWTws7G6QR8zVsV5F",
  "key5": "36cJc7fXBU3EfrV1jGa1vPYWkGGZCbpybqyrYt37yEqfMELL5dfMVX8U3K3zFuCC4cdyxQXHQDWKVCW6GoiGvZLb",
  "key6": "52gPVzwDHfX5XxTUEjUkJFy8Cp7T7SYErcZdEySB1CX3fJJuuiGUAg9hRdcKRcdEKfgcgbpjFcaQD9EBZCMNa5s9",
  "key7": "35BeVS1d16hD5cRYq5rYzF8sXvH9GBfUCDRhmqnbQhs8Brm8koQAGpY7XKgGSmd9wQnA1abfwRJvokuxCnmFruqa",
  "key8": "4xvMB1sQ2aC9azwjXTn8QCXpQNoPjaZXz59U3PL9dcPd78WRVUQDDDjJ57zbNhkKrX93VL7rYJxVoz121BQfge6B",
  "key9": "4UrX45jKALiiaAtFZv6DRcatdtNmxGXUsVWDgcS5KJfQdHj6GYK8td76nVjKohJAwJbEb4WRsAjcfHgQzyTKQ2wn",
  "key10": "2gNV6JbWTNr6EVbYsgXCPi85uJBseLAYy5X1QZMeajYiy8SVP98hwyU35YuhuE6UjZ6PNnfEWPANyyNEJyM8Cwaj",
  "key11": "xGDYkJZYYAQcgLLna6niJkCUZs4reieu3CEC8dFfSVTKccHcYHxufQa4AEWSeTenQ2ZzQE8CyFQmr72acQ6f1o5",
  "key12": "5Lf8MCkRHkhXRqnhcZ3U1fXgXVJhZcroQ8ESKBEatn918M4eHxC9B4CtDtZSffLqAruCiahBoyhT4KMHxdEWzr32",
  "key13": "7UueKWZdLh2fKi7quhH2UrTpkcsdVmzBLvaWdYp2sseEikzopF73FWYJF73i4jqn3eazjuZkUSgzd9pYpNwZuDD",
  "key14": "2SdHVcrwGZkycWXXADfs7dpuYcDxB3Aaos4jR6sUYqeKUWHHBws7dzDNywiPTtPcSBNmNvGUwdrZqzCAsTWSmJgY",
  "key15": "5RWqFZk5kWtpQ6gU7saKdXzvamHoLgkJAfyfJP28csdexZQEHs981jfbLUb8n3JKYcwZa3FDfyj3Qdvxhiu7JLLB",
  "key16": "3XJ7FPYdeS2q1s9BzBcXbGbibt7PSd7wcbXsfWSdHmASSy36DrR6eci2gfPXU4CJiJr3t6TQg7JUNb2TthTAvhYM",
  "key17": "5Gkn8m8vANGmjtyqA3cWigsCvwj8CvL3Uf7wtM5woAaStg9cyW5YhhFyUVxo8QfRswQiPzpTQG62CkBroLDo2v7Y",
  "key18": "9VACvFK8Fx88pzMFdmyEPnDMzw2Xnm7ySGjsUxEyfmsLcZdaA1GgpLqzCbqF7vAfmZbYzXkgro8LUfZy1ANgEDW",
  "key19": "2eahwz2KCWGdgfJssTxnhHaeHmLpWQnswdeGYvqLwtvqDAJQ8gcDyytewyC7CAiJmGReMQJa29FwT1eyzLjxteYr",
  "key20": "5BaKryvxyPuxLhaBY1ou9snCz2gV789KEGw85bMsVuhpcf9mbmdXy383YBEC5mp2X3sTq4LNMnun1p3SC9XfKrns",
  "key21": "3QAUXQyLLofgRTgZ1GkoEsVFxkUn2wrCvPBKjvykhzAt8SgnC8ex9ymVst4zXT548cPHJTpG3eiSJeYWtVVn2Yd4",
  "key22": "4QB9NeZGVCNHgtwXNgA2p2GWpbvqc1uwmzJkENnRWCeRnKo5b8skJ971JsfVYQMyuQxKnyNm9Xppten6acx8E4Gm",
  "key23": "5QcmddyTS71tqDBaC3pq6SY8Jq8mCcq6iDmqLsBZSVUvLqJ5o6UCwsjSP7GWLnFPxKCGnszufxwaMb8nmgkakhwN",
  "key24": "4TfX75nVt5qnGcWYvq9gf5fMPPwDVHzXphjC8vXrqLVLHo9K8y9wDm87BusJqcidSEGBztp6hrQhm8WzzZGffpXQ",
  "key25": "28LxWxHi4KYg8x2PE4z4GNhvxSSpPX2HqY5U12sCnx7qFXUCKtBth2ViTgQrjRA7T9iRHRiWM8fR5jTnce93sQfg",
  "key26": "35VciFQ17Jx6syPJ9BXRp9wqkhBSf4hHTGNub9vWi7rf6H5oGYQbmtW9ndbH81R8DewpmA27yCzBcZdtYMGCcom1",
  "key27": "5akN32uSo8wzooEMwYY1pnCNhpqBcY1Dwi2numMUdQKxGAaVDfhT8BCBVbFq4Mr73aroXVLuEvQM5cC1W7zMt6S1",
  "key28": "5fHz3vFVv92jET7wn1GE5NDGYzn7FvmDUoUWF6MxV7gzdwNdQ2fcxQYNoD8ZFcpmAHX6ymsBnhFGEcyAcXQQyiow",
  "key29": "4JTLg2fpGPaMXTr3pnUsAYW258zi4FhL9uffS7xbwsMiGJmYhmjQzzGFyR5kZ1ADqmFBHm66Hm69VuDD7M4dyGa3",
  "key30": "UQLmpqdtGhhdyjCKTfv8JHLNXLnhC1FMRnva3H1JTM7kMmYVMhsK5XVBid8MQCfkDLitG5gJijLJk33begmzzvZ",
  "key31": "DNDespeWHyhGD2Dv2qbkncaJxVyg4XTvAMVr1CQPVH4jPL3ASSh2HGjwNnztMfiyRH1N89JGhXeUbLUY6CGhSAL",
  "key32": "5RA7kEihB6W6N71s28wGXMgEbrjNwwYRH4gyNKJRm7PreUm9iVAsUwgtPMy7N77My6iS8tYim1vqSokw1upsAiJQ",
  "key33": "4xDRS9iV8Wpr2J2v1ESwVjPraQp43avH8QvPWnbFuGB72kPZnomwzJkF4yuEwL7aTDVh3m7XxKcj4jypniXp5HLb",
  "key34": "4tBMVTp5ypKD4xDUDmsDuzHUxVjp4321anZ259YAgR5dHBtc9Q7kBARpA71V8M1Zyvc2hS6P6Re356Lkf2ttVrnd",
  "key35": "2VaJkXiEwz2kQHnbJWsPeAZmdubXJMoRrbsTp17CrFYfaJa4HewLtk5Zbo77CtMeVYCNNRqsh59oRNcmFmabZkXi",
  "key36": "41CEF48w2Vf66hiXudYpGSmh8Q5r56XGoctB4iiAztkBgg1XveyBViMA388KLSqg2uJrodamjr8R2uixCXnXf5xN",
  "key37": "4cEAS5mA1Y1HYCAkoBEtEr5oaArRoAGhwFrmZhAt6HVxXVhP3ywpx4wW5Lrm15b8kuvbBKFiD1RYpukr4nGW6ewv",
  "key38": "JTGRYpHppARBbLLFZnDty5QhzH7qu7mScdKxzhhK4aQYe4zVH15Sz6dfE3wr6t1KMmkJpBfW44uRdqmoiizZ3ey",
  "key39": "Eucjtg8PdsHrUeuKGQgkhuStERKawH5idBjurPPz5A52MrCkbpnJXnGgEUHaKnmdXQy6VWX1xkCG9evFh39xyba",
  "key40": "4f1TwN8Js6Lq4jqvxbbCNLYqqvZF4BRVm5iL5upWuFUtHyKyLqeAcbxS9jSvthA2y7Xii5YyhUSmNzbkBjmdUHzj",
  "key41": "26E86FzurencdmLxA7SnxMS3qmiV2Rn9n9TiGFdLJvLCo8hMbwN6W9GXERUBo4M76UudRfppRJhFZvXYrEMXZ6ie",
  "key42": "3xCZWHFQyWNG37PBugV3Pgm92MXoEcik2jVCpQ28zii6aiCKFJzdEwGbJkKNXxwQshpopbdiKnkpSh73bWDHdQNs",
  "key43": "4fvDu1pixck45bAqCcEdKjb5RQ4VabikgfRVQT4aGbWNEM9KZ5ksDfEE8Yhih2impE72q398R85bMPBVJDbeCV4p",
  "key44": "2nuPemQSeSTcUxpe7EMFXCxaNh9MXqR4vN7HzqRLBNTMVVD51RMFPnCvArgnQao3eHC9RGtbxni1s17xQ6VsD7n",
  "key45": "DoRxHVi88cuHypwU8MbJ6D4i1vmBcJSTZVeDYUC1iWtR8uQjsJ7LVMZutaTrNJ8fexXMw3sZQDq2rVgJSv4Wptv"
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
