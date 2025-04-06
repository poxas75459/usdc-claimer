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
    "3UZGXnBD1uo6WzFTKwP1mjPozCBbgBnqdEqMG6Ck1gNZCnMDn1uFjMXUNJ4mdgkUNJ8GgNWngjzJ9JPmVyByjs6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MMPzcPgYe9CarUQ3mqT5dsCS5w33UGQGrCynoD8iXkjSMV3bs3FwrLMrFMPQqmGKouwaVooAqJjxDpeHz1bkYa",
  "key1": "5sfgMebuXJqocjNRNskLksM3QBaonQUibtkSmZvkegtL8SfhSKEarhmpjM8WXZGUYvGchhpnuhzjBSMxoWWrEdTs",
  "key2": "4gTmJZ6EfT37dGc5cqCuLkSGoXggNf9ua3NmbbrnPkcHuWzcppQ8zA3ssjjLNPG4FvQEjPnx4W8n7wPFaA5guSme",
  "key3": "z5obJMqPF5ZJn11P95uBwvTRZtYTE5apxi6T9SjBGrQYoPozLgfF4CT5zjxvYoL3UL5jBERYGPizFxim4rgQAV6",
  "key4": "5o7Su9bM6swi5HvqumfHHPUbZ6tYecVN4dQtoeutZDL49BuUo93L2T3C5sWYrH3rT7BebxR1PAuQWwRFJ3eksNao",
  "key5": "288b7y9RErdyBTQ3zqMN546eEh71vAX9Ua2BVrUqUnM2p5dpCyGDGq4s3HKgvtnqicQSmmWxm8mcj6uxKJkxSX9h",
  "key6": "4QWn7DY2pYvhjBMpYpWsyP8xxidNku2YFutMgEQLnmBB6ksMbzQxxE4bCVJeSmotjmbS4pM8nuo8sKLPi3Syf7uF",
  "key7": "5qg4wk5TEDCiNfFGgiCkQXzYscEwoK1aerx74EndgNJPvp4phtCLF4ranWg1CP3eMYEXY58B4HMJvgLHG6csnPo4",
  "key8": "2ECtuUjyfDsA6xLJkcphBQquyZwUHtKFqUxxkmS2EiGPmdjJn8TqNJuANEgwtCHpxyE1sJhEqeATXaynNqWssowg",
  "key9": "4NJN8Hb9AQNfy15yPzQHqfnMJGX7yaUjLj2SeVwkKvE9jW3YgH2jM5QqhqH4ZEtNAywmUuzD8gdPR8L3ezHURWJn",
  "key10": "V2h2C2sviFbpho7Q2AjQ6z7LLcHTSGitRprgxm79nhNph8vmN1sYyoTkdY8N1YLF9gQtkLV94ce4paHKoWvQsdE",
  "key11": "5zCxe4u7tkL3AccEhjha58gA3HbNNi9hKemfUiUMM2WKUDWrXr39y9GjUnJ9wcPZ4fwWT6qrQKyqwH8niHJk7Cv6",
  "key12": "4d6krxcH2BUr6jP88ccRYkawz86FjUjZmah4P6Uvf6vCSJ9sFjjEiwt4o1o2xqu1xFQuPu95hV6T2kMA2dVsrLjj",
  "key13": "4TjjVXuMqGVRGX61wpCUX1Y4a5K62Q6c1QVyssELwcGhvJ5Phkew6DJjvbkqj8iewEyntLruQK6CCpvwxaK6Ajtd",
  "key14": "5KvddMfRzDQH99Qfjdj2HoKu2ifuWmFxoTcuLGPii4ufVWtmLtbtgCRE6RASGgStRW8ohK5AFtLRJzDWQAw2UaQ7",
  "key15": "4Lm4poEGWmCsjaXxqjmNurT6TkdFm17nCe695Q9eNq5QK7tKKJixWmn8L7gfdAZj9G4FqAaRGnQ6Vby4DpKU3e7t",
  "key16": "2YEVb8NBdDns6gMhsVzppgSjgHtWPgs9gMw6U9gWxySPhFmbNA6fwZr5i3d4xeq84RtoPdoA7r4kLtzpbNmdUMBJ",
  "key17": "2MnLEpNzXqwg4q2miumJf1Qq589TupQgVo6Q8GrW9nCdr6h7qgQava1ZA72iq6X2Wns7ZiyPGDp4Djgc9RJVKg2q",
  "key18": "JybRFihohM8Wkk2Ac1bhxgf1sMTc9iQ9dbz6GEhw2gir54zKhMGk3RkT5A7hQvd53vXjfsJRMiz5kDM1Y2jCdu2",
  "key19": "btK7JBLgLeW42EUPdM531PB8o44mQ4UDTMUPrPCJEN86z5qeeckgzpZ6pKvs9MSijZqZmhu4WDKCQsgAkPaHVuD",
  "key20": "58Upqf4JHqWeqgNZxveHxQFXu7JsjRkyD7d8Z5XP4Fn5UV5WVPgCifFknhHMi5dWaYxPuxBaLTuCyjZN8y4sbJw2",
  "key21": "4vXG8yrJ1ei9TdKFni3GUbScusbtRQ9voqp4GazCLEN4twQraq5iDiv494foRqZbxjGvhcdq2CZdzQsiJFh8L7J4",
  "key22": "39YCokLfvoSrtYx3VHa2aZy4nNQwZg9DxRoBWr1p3ShPidbUnxiemJbPPaQvZSrNS87xSYdMoFcWBkneAFfRheSr",
  "key23": "tP6WrA8xQdxB9tMekK6LT8MYJQk3Bxfy3AHusUp7TmoK4YZgP5YgZDB15cvHaWksibUFciSgJfD7P8DnVD7qWFq",
  "key24": "5ZSh4WFjyL8XZ51RMSTBrbbh7vFzwHr9djKHDi22SQojDut53sPiG3FWC89VqRNxMAj5TfboFi92rep6BSsJyqLi",
  "key25": "dGAUweZpZAqR6zjp78s4CYAhpWykhrwPnZQN3nRZMx6LfQS2WEwBARfjCEpnMbvQdnyjT4GsZmpriTZ4wsBXkns",
  "key26": "3xod8s7PmhzqRUfp5qRtnSJ1hpDdyx6Pp56YDjXauvd1eoFBqUTHPGv7azfb125TxSmqoppHLTs16qgVzHETQRUX",
  "key27": "2gFPJtd8aYUL1AevGT7oUiArG9cyekxQvEFXqyM59CUg5Sq9Cv6cu9VUdSHe5MpY4EWZxcX3QuTtjicf1gG5d8X2",
  "key28": "52WF3Bx9xNLcLWS7Ttdir9xYkAYnmtKNmVDvgrtpCbyguFuXRC3Kgq1So1ubaTDtMhNMB3DyzwPKCDrdQY2kRNjV",
  "key29": "2MCkuXeekFo3oe4TPYtthD3ufQ5yYChi6YvfFcPEQDxJYNKG7pJHjTnvwHGcamuTwrW1jC9fV1Wmkv5roV1JQA5H",
  "key30": "42ReqKBwn9JzWM8qkRTXGk4cGfwFJnEgcTTLZiJ193nSKc1hu3dToDvn9ZmQe1Du7ZTSqAYpjuYBMwDrCSpsMqqB",
  "key31": "674uR1NFMTTunqsmbiG5NbFfLgcBX7JMUcT3asrx6qwEH1u8cnxoaikPjRw645jJFyfSUCovisBw9jnNUuPztDgB",
  "key32": "3Y1sigbxJ5ZZf4YFxQVP5xJCmAEomzxU3HTJ7h5hNFehvJUYRsC68gvKxmABsMBFvXskykbsChwyTpkPmi5V3eu7",
  "key33": "2YxhW4az2wSJv1jDXNkBHfb2McHs6iP7QQnJq1PyUJS9FKoNEhHnyoUTq6iNVRRDghdxxZqfoVL3irGqUwdHqRUG",
  "key34": "5VdiQfqY3sLVxjp4KWNjbmpFCNhDNi5yvL1TSxvQvEcqQgDypjWiYze3dv883UrCAppntFjH1QcRYozX2h7iEf2d",
  "key35": "4Xjrk1uQWvGbicVtiP3Qiz96pWnbGrBuSUjFjajjUVbyXtVfTGZA45VEQky8wxU2Q9AxQyCcU3qV3dgSCyRKwutb"
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
