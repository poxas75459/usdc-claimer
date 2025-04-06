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
    "3cwpzBgZN1fdQDprkW45CUNe9udiuTGEc8s8vMftLw6AQZ6ttznkscFbxrMmcokC1YRTyMde2xJuo2m6yRfXT186"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQdeAaS7K6tbDnhCRZyaqmYfSH3L7mibr26MMtVB2JCtwKgp3X3BzcFEyHVW7Zq1nFBF3WTxifZXjBHAi2cqpDe",
  "key1": "TaP8m9XTiDZcwoZp9CjtuGeWWvwFW5f8gJKvWqtghb8waR5YFYEuUaVLNdAjpyHdUexAuvWmSup1KdxPD2TVtY7",
  "key2": "5dy71Xz9t5h66D4vC9XkVksUA5qWacGdRvr4rGKhp3mbeh4wQFqMFKsojrrrzPKtSu6bkHQzG4hoNLDjgehMgjt1",
  "key3": "WAeoHwphXSfAbEuLMKPdMzmdq6GSpefs8QvSxcwnw3aeZQQpu281s88ciAaawYtGtmnnJDaUCuHPpYwSeZcNLED",
  "key4": "ZA8gcYJ2w2ACy72ygkNtdSqWHVL3r44TBVX1ZxksEFoeKbHLWYAtnAgcE74YY96q8iATPqfBqwUhjp2RzzuqLYw",
  "key5": "4P8jBYYCVCUSpNhwF8Bggst54gnUeK57jLaCBjwForjCpkxtKX3GMryNe3PRc8tqNBsYSAJrHASVUqSUcD8sxnrp",
  "key6": "5AbwtTbDHpdp4mAaTT7HEH3v694cYzMGZcDi417NfskAAXNnS8xKQ7yShrzb4rGdLsG6xHNUiHFgWFm9Q6727uWD",
  "key7": "VtGFh7sk26wu1PV1xx4XTZSgQG3NkpB3dyt9uokLussWosPBhj8hvMnUinskJhMLkGjFgMtz6mAZCt4vKp4NciC",
  "key8": "5xJqm8XX6GxSyP2VQLfwbaA4TmtEnbfTaSzfDRBsbZJdsH5Ed58MUtfrZsHhqZfJj4aCsbWW9nqqx5axCVBTQmxP",
  "key9": "32LcokXpR2uoNU9FSk6G1sMcbhxYiAyxqwgihzv9Q3SxqrBxyWySFNQoM7XCncMBtrtTzTvNQbQTzy7Yhf1fJk9y",
  "key10": "DYTk3De1qUsnSpMKGDwWsDbYEHdjrBD17sLokYCtCJXyYPECQqQaYnMJ6sTM3e2ncc1KRF2N1fWE1kXvkgPtUXi",
  "key11": "oaaFu6ziehU1u3kPRtuQvDW96pqEZsBATTmMcnC4GgP399gZnFFYkRU7vU3CpUM897fni7REqE9mLidM1i198Y6",
  "key12": "3mCBLJyVXqKfQ2zQfnVpvYdhDmk13rRYP6TwUUrWtESV97ErVt1QEUyyWMJ5HkyyB2nrvgCJkBQDAHru1TzBqA6N",
  "key13": "3XT1RCa9MhajQaiwuUKB5yhAQq1aeWLTapCBjYn7PjcSrpXkUW2fknB1wEM4qBNPzWiiXTnNdC1spJxSMWvZJuxq",
  "key14": "44euSeooAw6MPj7NT6uciPDBAkXadnCCqwey5egiSm7ULEeXqk3Gtp5Pu5mqtTZDZsjYjwLtbzY38teVFG3H8Zd7",
  "key15": "2PSYM956zXfWp8fXPgvRZsEVLkCDa5sVDZeJKUv9EvpDeaeZQZBKnzUnUK4dRoF8CTTdQ2DiVpP7bV2UZqpyQuDy",
  "key16": "3Z7gpPniTy4eUX8jUM6uRepYNyuXE1VMt9ymuAwn6YrY6GgCriXN5N7QLnN1entCpVnCaongWH2wtepQhpmM6wyN",
  "key17": "58GeaPWpjGzr9RJSsSUAZ6EMnxogZy9DtryPyt8Gs7ihGr3udQMcnRnUuCpVRwosSCLfXPXsmFvSa4vUDH1gE7Bs",
  "key18": "43KvtnzobJLq7UM4eMw2FdQXf7GhpB7ot996KiANC42Rvd5CM8L9ZQRsasPwXvJQwdPv2MCAAPNfmqaD4EJSa38v",
  "key19": "3fGeW4rebADepQyQvZFSMNSJNpQkGtkMonyqMVbQh85WcmLHB4ZvaVWdQrURMoNG2bi2FhEdonQowTaduwSEjLAc",
  "key20": "3L3UNScV6W9AV9muMR96BRGNbbCNMRAgrzfPuT5kpkZ7MsgFNgt5CXUEnJGqShatx1wRRAvjoXNKga8X5QmMLWG4",
  "key21": "4op3SSdd4zQS6FrqWnA7wJUTHPX7KuWRdqcvWGtu5saUMuQwg4DCbCMjEhoqqyCK7kUfDjbLsv9z87oNSLSGuH3i",
  "key22": "2JMucc4eb6pR3FLG4hyvwzxZJDL1S5urU9YcS5DPNvLQUGsk1o1aXR2Q1NufAYe8WkDf8hFkqsBKbuGvaoYcwoe2",
  "key23": "2TmQ57dFvDPDVEHfHZR33RjUNMXjnf1FwUnKJS278wGRETmomUUVTXXSKGWVirsDyvLbnJXKHeoqDsXJqCWc2hZn",
  "key24": "4tyFEEhQnXvD93juC7CbGJNZQEpEnAS5xuArcShPoaZbX1dXLFLhikHPYUjLcLi8idXopgf4fKQa7Lcu6kv7GaHc",
  "key25": "4GjgL2zJixx6yYztoHegJn98jn5bjH37ZULReDZwZez7kFYN3iwPkYbsRMyTNQrMud4zJTWvrBVHGhrLHd2w1mYW",
  "key26": "62n3hCFXC6LUsnk8B24AG5gjU26ScsWQdS1ubq3PJbUQcWmarxrJpiGXaLMZh4Du4Miq3sjx4JH6HxkhXbojmfc",
  "key27": "2rsK9ZWVjAyShGckwW3xBmzby6nbM7dSJExme2p2C3waYJQWkdA3e26SFnbEZFT19ZvTCWZpgoiotUPCRVuzj7SL",
  "key28": "5uJaswz9PbHPuXbF1a6BSpcbaagJ3sTUirENaXgXKcV7pvFmTTWi2cppiwD9Lvb81wRNeKaUYJXncdknYiGYWEvB",
  "key29": "2gmBPqkpLB6duJ55oWeBKH329M9xbDEg76db7n28kNWhsA8Vy2J1TkjTL9jP92edww1BgsENSysNKGJUyeZTfYtC",
  "key30": "52zXwxz1BRGdCox1xjkEC4JveZHGAsgE6EsNQPutKxDzKU1mXLpEHw8WpEigonxr61TwsCQrGKCKuE3XVz1BNeMi",
  "key31": "3vwvGnFTKrGhR7gV4QnF4EJ4XDPkxedpMadZ9eSGbYnJwZ6BkwwyoNGEodg21Zpvc9fbRQrq4Hmdywi7JwUxrfSY",
  "key32": "4eW7592h6sUKV7v2dD8jgCJNfozbTfduTpJ3sJ9yGxyicte3GAWyb5a3MYjfEtQHZVaowuczRZkmHcwpUs7X8nhH",
  "key33": "4GVm1X7DQLHmAxE8mAfUssuCXVXP6UKgBTb3mM5JTP4YJE2QFpTv43kbVS7wjRYev1NAdYAgfzxq2avo2Q2yuQNm",
  "key34": "4baE3Jvo28oVT53Z2E59yEhSP7cEwq8ByEt7gxMX7gYz8xmujCG91iU5APsc1yjCLzKEf7VXBk2tDM7iyKMHJBm6",
  "key35": "5AZE4hrxRZQJWARa7jUs1hWpnsg9yTy32WXXaGiMh3RTq2czLa5wyBM4rSVTQsGivSenSweDVa6kfzSNKtEdWRF",
  "key36": "4Jr2nrERzdq2Q1u6De8gvwNnVBkumWHLPanTHtXCYEx8CcQfsL28mkvq17cnzwUwRcWvMd6gMBLBGpCLYoUCRZvL",
  "key37": "3ygD9PmwKcJXUX4d66xTVGzoXW9yJE4qcbLxHjD1zn7gJo4hm6JLpMBYjC4tswdFZ7eTbuJFZKneSN3WZeBXKCRC",
  "key38": "3CFxbp8rxV862NGAD6WzKa8Tj12VVy1EaZXHU4K7Afq3juT1jYCeF14VVkpFAhcYoCwE1eDosE9Es78RnfH293QF",
  "key39": "5rnciduo9NKJuG9vwuLoXBgZMJ4WtFJiHbAVe6L1xdDX6sVaEWBkDsgYVVRk3NoeBEurnANpXiVAbeuGNk25AAT7",
  "key40": "4rPXNBa64L3K887rQiDsp6um8yEpGQoXakdXeWz5K6esM8PjXdddqLXnF9keuRrFC3zM4Uw6LCEcHRgxBhRsrv9J",
  "key41": "53d4oRQLJudwz85kMTQoMowZnSqs1TzZ2e4j4rsLBEVX57eE3Nq3z3jHcvwEK5tjnisLCAfWrDJfRPP5oF2rhsQK"
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
