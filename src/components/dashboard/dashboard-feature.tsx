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
    "45hS7mRQVHAsbeQvzwLcZ7Ecv5ytptRhbaUTqWrNpNHmVYrhT8ShCdAQjZUcwZpMptjBRjqVz8BdHix6XS7z1fiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwTRza9UmW94XK61DS39q2Vmwn8migfju7XCLEoyyFkNCZ1bEnvMZ9XU8rRwZ6MiWttn6cBZip5LBddiiv8mBCR",
  "key1": "4P3JKUEQ8GU61ASprGrcCcK8bWhSfhcVXY8YVu6hKTVXJBXKMNQ523jpu4mP7wfESNWsQ1yyQatWQU9SjvUzi2fs",
  "key2": "58KRuwkiY83G7AxiWmHEng7YbdKCwLZh39K9rMbA8SPBv2kLzRA1Joie1W6ugg2iviYjCnhWeSQQ1wyzcBdX6PMa",
  "key3": "gRQyoMT193hXXD3w2GXWXUrCAwjxsGpWmNkYPoHM2yFCQxyVai9RJoa23pNsSuaTp9YgtC46ERdoxnAG8iqPTt5",
  "key4": "4EvHDaabkAyhQANW6bgfuxh6CFkBPj7X4drs13foNButTGgUJq7UqHzK4Jk8hE9XW6m7zxS7fyUS7zYMkthF1a7x",
  "key5": "aEtfTf1njpNTFJNCVYgKnoHW6x2AtHtq1qG4oCoTXYrJSjhWpL9kWUoNViee7sF3mEQh1ZeXLPqh9hwoBcVd9yo",
  "key6": "3kmghARXV2nt3bz2YfGKWiQC8ZVjBVBn7EAwMqQvYasdHByXz7EujqmL5C53FiZjJDsgmQ2xnr5sbm1KZBsDf1Tr",
  "key7": "21sd5q4QTGySm2WAxGkeZ1xkZdRJxSgRU5Uc9Z6rgZvCr6Wuy3XfFstZz49fB2XQyWFv69djdWct9GeZvkZWPYpF",
  "key8": "nP1X7Uuj9piyEnVuvYTCNLzSVFH7DBmdHLdE9e83oMmozZSQtUfYP2CWVhGExEZdDdaiG5zNjBXL87hPayxZkQY",
  "key9": "39hopyjg3rdAt2onvhQpRWDwzhZT2mCDF2323i63jWVbUAg1FvJGkqVZLPmAipQCcJyVMVfpEY92Da5vUotDc7En",
  "key10": "2tACZayM8xNamWU1HCcGXgw3UByyAmRRhe4E8RgFYvkXzJTRYQD8wmW9jQneLGT2X2MB562coo8kDGGKM6yw8QHN",
  "key11": "47tiUV4S8iM6u4BCdyWnGZvCkXKrJGTh53cuKAcNoHPqvSWoCFtdKAw6MjJrribG7R5y9MM8n9uQHpjv6QtWWc2N",
  "key12": "5H2D69uwmXJJC6ybguekewD9pjLk71TvmGLGW9cwPn5ebGnpgahVsyYvPLLJ7uoAqN1CrPUt4dpmgRXpcT1xS7ur",
  "key13": "4zVo3EqhjBT8WHtfYwmrXJFCeCAP5kD53hmAbvTjAxN5ERDgaZk3qP2tH9KVpMmW3CNu7pDZ1kKfVkhrU5RrS6pY",
  "key14": "3eamPTuefsFzYPSAKy3toKSXzLYDReRQG5XYQFaKzSGydsfVcEo627iXDA9Wyx3gxnRoFPoFKtn2tDx4hk84cgkH",
  "key15": "w9X71pJzBzzQ6MXBBN9Gnz9azbQK86GvhgKPp9w6nwrMiPEKeSYJVByZN22tjiit1LARwjibqtut4dw43u9Wt8Q",
  "key16": "2Sv2CJjtkGTSjTq35F2zmcMtEXeSgGPzN4RBqrm3xrTic7uzPdhPzY2MUW6E7yHyTHtfbV6mhNGJuL1fyZGicZ3g",
  "key17": "2fo9JGEdWCCTkcMJB9kdfKeRaerYSogeipA5rRtWABWD4fLGRefAYw2J8gPx8aP5dTkZy9enRhFc9niNNdBwjz7Q",
  "key18": "s2eBqChkCppTs53bbKJfZpSiAh5gqQ9ghrcg2ujJ8dR7wjfDPDrQmkgfjyWjufNUfUR4YuUNkQRrQXGgZDaKHzd",
  "key19": "4ZeVv1zWKYjYfiWZBGTsaSpsTZu27rj6eBYDUDMxDHfZZ5C7EAJbLm7moLGrdjT7ZHaRPpQ1zvFvYTpbgwj9nZrX",
  "key20": "3CcnRhRYS2bMa1jeNAkbKMgy2fx16KEyEqP5MzfzxmoUKUbiyRXQESdxj4ZwYQZTkEaxpEJMrggjM7XTZntuAL3A",
  "key21": "2UP6TyuxntcdVs23NHMaqmsNHLznXpXeS5YoGMfQYXMEBkDGnEsr2RwkqqQRHNjrFiJCmMVwJsQPcB4GkQGNq1AL",
  "key22": "2wdk2b5oJYv8dqTT4eVNY98JMe85U74RHMYnNg9C1uuLdvNihSkohgE7JnhSxQfjwnATEZkX5ez7TsXj2mgMBSEY",
  "key23": "2aB8S4eqrLQJiqCHL1C1Ltpd6KJTwXdNpxqfLJoU9RgDFtkqw6NNDzWqWuFMBSEQ6wZAmhYSLW66DJ3ANHi4sTkD",
  "key24": "3f5sw8EFTsTkB1GhHrAspPAKAfD7VDGtVVkEDjAqiBZR4kTgbRK3yLm3a6atsKaXSNv7ckt9wXnY8DqyKfMpUR1w",
  "key25": "64pmAh36X6iVwAJeeFg52gXd2YVCojsXgVc8dGGc3jyX2b787wV23FWJ1xCi6tYsCqvWMCkPVRcvdrRgGDCVYeFn",
  "key26": "51SvAhKrfY1Sb5BTEgAjCBjxJdkJ4fjmPR3W3xdrG84Q3nnjQvZWotxwmNWwYD8x38LW2Bi9ZUqK3dR7JNQwhNwn",
  "key27": "C852k66GJPYKgyNBddbv9PdWYSvjKq7kYYCgqkJdCAZtHa4KDok99LVXtnGxFGx6vd9TfZWSfZVnKpvsPD3FGRB",
  "key28": "3MZ1aXL4T9FYcPjpkoYNYtRJcXEsWgNU3iwfbdkyfTc3Sd98UVHEiKd3b5GZQMjBNKpqBJ87ecoeernhhjwK6tGh",
  "key29": "5195h6aWUYFMp7TpCZ8T1byKDkFhFoY1DTKgVtWNrS8a7cyezAmQyN7vFMxFcSqewDo1cEpSuAvazGZzHjLfEPX9",
  "key30": "VxzqpdAqJjFagk7Fd6AHpCdeZXZkjt7o2vz8N9t2Z6TxoUG8BVk3sDPA3gf3qakrDCyvQLEEEM8AhMZY6i2bkVT",
  "key31": "2FjxH2ahmqkTMrwm8cubAv4UwjNVZG1Vt145LqwEhgxvBAisuRErL3VMyjr3gzCWQTMQ15wK7D1bG8KDGu92Bux9",
  "key32": "2QTP2ALf1iWxZDQjgKcx2HrsB3sJAxGYPF9dx33KpFP87q8msytH6fFLrwqsMNFGQGznFFaatpaz2pz3v9YtCwS1",
  "key33": "3TU9PrvaQ4g1w1yMhSb1YMcniiZZRTXCRh9BahVhLHFWK3Hxys9aHp7SchDYpuJfBsS9Kcg21GtgS3yn4terTGbP",
  "key34": "64QiGd4WCMf3DLYy3E7pFgo9aJzA5HVA4RUdMLZeVMYanmxC2vEAhZXy1P36havsEDcCYdSjE3Nmb7Cw63Khyobg",
  "key35": "5QAGcqJenqoxtbCMUxerKAjngs2YSgxjrZfTqvjPwdkBp3rAMoVeWfFMW1gVtioQ4HeV5M7R6XbL5EfvM9itbZjx",
  "key36": "vEX3uPeYA4zFDuGqWXbbcWbBpzZ4e6nKovjzhXtgQR3vj9gd4jbE1UuJfT4aqAK1DTWyTER9W5wR7nHquwABSBH",
  "key37": "59NKaF2rKVrDgRzn5deqYCZ3JGnzCZ94yM8xdD9HVQDtUZFyic178sBE9HhWGoyBh9fqBMidQUUZLxwkaB9yqcdR",
  "key38": "3AAmE1eEuTdddzHK3NsqWh4ahj845Gf1rwhUWGHBUrv2TixREA4CEGFAn6FQaftde4CPXQf8eRkmWaQKLCSF3aQe",
  "key39": "5YqXYVLRfyptwk8fhy6udfJxCJ8P4jN4YVD5Z6ozwVve5GZM1TX51uFKtGGvNhnDsVWr1SyEaubvrARMBxD4CA5r",
  "key40": "4N4eAegyaog2yPxdPj3BCuXWRsEx32m58JDcHmYw1cJC49a7qTkLM72nhk7HKjC6KDouG5xVc9C8GWGKGR91MzdG",
  "key41": "53LAxtQNPmqDC5mkDE16JfbgAZ7Rp356gHFD9RDdJVmXjKEFXSdpMpQx8V8xJHTy8JkmvycUhDdBZNnsxFJqX2Si",
  "key42": "amGwqbw1mmpnqs6F3aVabfKAwvC6CSWxt3XGWGXyPjaKUbSdvM1AeeGEaDXVsqcAVeCf3EW6VoSpCK5VZSvGopJ",
  "key43": "4SAYv2L4uPutM7mK8cVz1Tn9jsKhsX74pQe5Lj79eDmSZpUyyFgiYMSvmZZgVF9D2UjsPDe7QuixzW79EP7dhf9P"
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
