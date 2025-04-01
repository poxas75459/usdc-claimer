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
    "2NGgNn7mUwfm9zuCL34pL1dvmAAsQ9tBZdFerrpjAmtYTFeLfMjFdrzy84E4EeDSLQkAcVM7SczWtg8bYwsRnbt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7pctDJUNWdEZxdJpRBJKgXZQ9WHpWQqhow9RZoA1FbA8oRDtn1n4PYHg6Ryx5SECWHkARhoHjnoBT735M4dr7JV",
  "key1": "3d8Bm4DhSTWjMWJ6iTifkc32QUoE6taDaamEDnQGXLF2cBjkgGWLEPevNijB48Zgqx1zHAeGadr4fSXB995NfTYx",
  "key2": "c4coZwGgHiQ5oVjJNz6HvRcLCgvTnwihmPYsPDTwMi9S7xuCvom9a4GAYyrn4hoDFsLBB7pyt6ELDHsFX6W3aat",
  "key3": "bWDCPPWEDDCViceVfrAJATaUUapWZwVAfSc3GNmBtBxjgiFyAPwJ1SumbfySbRXWA7nBKb6fwjXGdnmTJQXwKnG",
  "key4": "2jQ819jaipkjupg7SqZJ9M9VHC8nxVt8mru9owkXWxUDBryLhTo1HT2mvBhEWbdNBUoZNys3aJifY5qYwbxUDJEZ",
  "key5": "5wtKjWxRQ5f9L8Qm4aDh8h4kHcnfX2F9H4mEGCBHKGRJrgZ78V5AkP6zkmGCCpUXdUiJaFCsg6JKxJEG5TgieLEH",
  "key6": "qyPREg9PqZ1uiMkXgSwhjeMLReRaeh7vo8qafDDtnBo27376ZDAU2nG3LxWC97uXRwVEtyFrVXYEXQk2xCiPNwF",
  "key7": "5JeTPEKa3c9BaVFqKVzWLcjZoWhqynPqKnuwFVEL4zBCsWNQCEB4pyD7WSqMYP6sHZ7zZopyf1QLRfvKkzF9YyCg",
  "key8": "rMNNTG4dCyvsDQ1H7oaa9jThyc9XQ1otqX6FZ3o4BjZJwh9upmMAHDbM4aAv3QBFG78SMdXCMX27mPQ9zGAgQLR",
  "key9": "BrmS7Qpywzh9Lv2JFC33eN72ojPBhPwW4RJbeGZorsNqkbEeGFph3wSd8WCRxrLGVWDiWZo4FaTRgGzmUNBLvMe",
  "key10": "2VBh8qxNmNDssaxyNcVuM5sqKLKXmfLSQa2rAdtedAH4wsV5w7UGH3kqmF3TH6KiBFLMxjVmqYMVB1ptbS5NHGq2",
  "key11": "3Ct7yvW2J84zDLKVxKo3KSpDwzP9dGHicWvEgDjwxSKm9g7RfjxV3qmKEwwB4LHNo3txLGuvDTsAxYCMRWacgBtT",
  "key12": "2C16qfMzP23fHZgXuH5fXMtwV23HWKNVLX4Sdmezf2FiM9Xp8FbXmveNSfdUXVcDj8KQdy8wvUTtHTN9b9DeAHW7",
  "key13": "3u1untPs3H1T5rnfjvzGWFjpAzD4cYdegc58XQbdwwStCUDxa313M9XhKE8quz7dSPU95UeFMutLtxDFdrXPH7Kk",
  "key14": "4FRVcU4p3cmq9PWEiRpSJgtvkovUpU3FqbjQSqCPzwn5wYuDKqzxcHCrSjN1bsrTpP7ugTmRkk7JbN4nFmRC66BN",
  "key15": "2er9KVv6c6J2HLm7MA2qpTiSDbNWYegXzzB4w93kLLt8F2baqVMEqf2BX1KVAwNqNCG6GbR1Nqtxu6KfbPy3f6Pz",
  "key16": "4nDJ1hpMP1nA1KGYLGgAgiZ7whqAZTNYL7nAeLxP8W9AoTtngbqeJhF7cjcpReddNCXbAn42JZ4amS4FvPHiqvaz",
  "key17": "5G5E2kaoX3UauLhgwHtoTDV78XfmF1UznA1iwvkKiPCuhsSpCAzPkfi3BqqeKpMF47whnvkXKxwFJN3TuYkunAZR",
  "key18": "ccmVcKdQWDqc3yDtoRJYh2JAsSj2okKR2Yu7esHL4iSPpQsUxgVtyuF8UnNwZk2WhPMsvUG43bkPHfhJtgbQ3hM",
  "key19": "51HHEPb5xijA337MJrPiRBZUra6JMnNNtXG9bgBoEabhcQejv3paXGVSYLrfA4haDpPzjvV5B8VCTzqwtr6eskwE",
  "key20": "2fZeN1EtetxtC5qNNcTZ1JJKs9XJnxBjk6MtvfGwecDuYhsFJmBXVXxqNMpj7rWKFrwE1Pf7eVcD2GZYPuPrUrjY",
  "key21": "357n3kEcLEz6jRZcV31H7tk2Hwdge9gy2zu6un6FEhq2y3vMaveVHht1cNCbcKHJwUdCtJAZSqhTC3iTtRtt1BGo",
  "key22": "p5CB5qMa2JBGynHQ6RqqHS4gmXk7DMusQzd5ZwDQRkzXQMAcbqw8DsNqD19N2WFeqJFPjA4qTpeByXdP1pasLPn",
  "key23": "4dqS2giWsToXBjBA91p3B8c1Fq7vKHbQR1w3pdCjJ6hHKrThHQcAKaHfXFGQWmEQXzrx5F7NcPp532outGya3fX4",
  "key24": "2Pr34vTnRfSZ8cwJA4CwAVwdF1aUeKs63m46PP6VeffTBKyEJaxZKGDh5Anip54w8XNmeGoMzgDrucR1oDNwbBRy",
  "key25": "2GKyLeVU8Lq22TKQYpeb1DZMP9E4jaChqLzcsp56dZWv1HQ9QRtiBEFJU2zHJ3g3qcCZfbYRqvjhVYsTAbn81CLA",
  "key26": "5oEU4x9JXvJPRzMaRsgCkFMCNz92nyubnDTVaEePtmiTMgzk46Fuhoj3nyQG4BgrN2yAAvNHeCNtAPbpGJQg6LHd",
  "key27": "DPzfZXozHd8JQWkbzBqP63MQVtjQieg5hdFgCBZ9c4G1VKP68gsYfovdTLdqfbR7jeezNEj9LZ87GV9AgxrFybD",
  "key28": "3kWFAVtukV5L1GHYJ6ea8b4L7LUYhCkeFd8VePExkNztBZWRwjBmrkwwu9MvGQdMZu4FzriLgiEBTrbnkDhG93jA",
  "key29": "5CsWEzntQ6EXyuuFhmVkQ6JZTR6ZfoKiHwRvjvWz8TRHDzCcZgKAmKHM4UNiDeJrZodBjjGJf7jJhkbsA8crW8hd",
  "key30": "41qsNgJkVG9tBdSqoS4jp44qah1P4NiB6kM7MJkgiuWze9QMFe6Y1t45JS99y8fs4atpiDarJHasZYLw14DUXvLj",
  "key31": "2j5EYkyaXSRbseygQ2EXcKvtV5YjcVVNwCaXcJ3UUR82daXm8QUnvJNfMAvX4o8dkwpCdvpWVbkTLxXmKZJAYbUR",
  "key32": "5ek4rqNC1NyQCXwDx6JyXKc72KmuJhkoVTQRzcqTFaoUF5HvgpobNhKKLAGCk7KX2kCkGRQsbHu8sAxHvYVLheX4",
  "key33": "YKTxRr3ttyPNeWpBcoyXJnzndkTAxfpGc4ex61ZqrDYPGBc9t8AaoJaZRhgBxevMjbUNAF1JV88iXH94SThMa7F",
  "key34": "qSCYjnbukcDft7Z9vjjhuMh3gThbNdCASMMya4nEeM1sL1h69S5pnAgqy6EPznhRUuVrVkXfYZaroqFFNZNr6bS",
  "key35": "5p986EoooMRUdbMYEH5GJqdBVGtkC1Z1WiR8GcuY21UauM5RX91dsQLoXnbGMDeqeSVAhiXMiJs3nGx7BBvFG8vV",
  "key36": "2UjtzBCGjKHP9vV9LmkyLjuZ5EsgjsxFUeyStVBhKJUGqypoaPkojouz7Hp6Nic1CKJ9UDESfTXyhjNhryWJiHV2",
  "key37": "fuphdx55Y9P9aAhZ1dq6z43AnQtcn2T6fS9xAmNm6muddQYkDZoNZVgsL7dzULinjDxjof7TLGZAbQFwbooWpxF",
  "key38": "5SnXRqn9tSxduzYQpzU74otq2awy2JC26ythove1VTyTyxDke6uC4wYCbeoScsQhfuTxqSbmonceVcLZFX26KUsF",
  "key39": "4hMreAoWsdb4SKMwBnPxqPsP14wj3X62Cw6kmQSR5exK1b6yNfSSrbgKwgPfjDqLGrG4WSgofxXMtTo8x1rioHui",
  "key40": "4JsF3JjPBaJFJjHXp8LkXFs2GesTJyRzGLptWUdvGxWC9eFUASDDH5r7pFNL5uz5sCTeLNXXA4Xnh42MPM5Hy9s7",
  "key41": "48qYk9uTd5oRGAsneYCLcwfkpK8VSX3UGxzCiC3YwTCWRa8cJ5QgRtf7dtYcMEwdYSdc3FswhzyotoV1qT8Vc64v",
  "key42": "3g8TFKzRZtUWBWoQ7r1ChAbVno6vY4Y3GCkkakT7DHFN3Z7dYuKKwpdoLTqGtDSy7AwPwZ3brmjULoPmDkaCyqqw",
  "key43": "4tkqLg9wtRdsVY19cDzSDfAam4K72YgKBKSxhapGmwMPszHqfMmeRQJ4o2PHGLwnEbPZh8zmXiM4j1HsbyRTfS4F",
  "key44": "3DxucAVk1qgDYvW6DSJGWdoi2NAVptj1i6SFZ9ztz5YydAdzGMBuufCBtF35x2Yxgt4SeAiMrgcy8dkFL6qVS8zR"
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
