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
    "2qR8ZYdCtyiKMAF1ZU7zsbEH1sxS89UDm9YnknKmiLKiJGGuxRFSFsLbXRiwLRwPzK5ZCHTZAdeFBMqCsYHmT3Rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34YmGcaFGZ4bcLge8HyziakLgQ6i4C7RaAAcpppyUm7um8quXW5amhzHYDZQpUX9kwEnuksRmEiEwNKamaVb3hLi",
  "key1": "3WjZVTdmk2sSo3WeVtWXASTWMEsVRTH9yLiPPUUSWbscoEkgZZAAKHrqTZn2kCeWxpjVnqmFtdQNtWNTvHo2qhTE",
  "key2": "p1kSGccEHBmJWdTS66CLnFPRmqbdfUdtMC7VxbFWqEfKLMfrBcSdYdFV4TyAfdWTkvPQdz4nBxBroods433QJ8f",
  "key3": "63p3zeQhQwYpzqZ2ZafKM6nV8RMoW7u94gBGrDfYvVxeZaoa6Nx62v1b7wiiKXFMj2tNFQtmMhqaWV48SMjrVM7E",
  "key4": "jBZTbha4Y8PrJQCte3waSzeJdKsdof1R3p8hqsdiF9o4ePjazTcZ9413hbEv8i7y4rs15PYkyZT25GuAs76Vj5z",
  "key5": "7shvnZsaYgXXsck7L4xM6WFSmVD3o9FbD3yg889p581tvn9v9ZQkzxuZ9341gEMddfLsosTKgUnQ6MqsN6BwHxf",
  "key6": "3invSxAZZzgzk5mW3TaNYH48km5NKkSGgSjpTQmPgcGwgQQtFrYPeJKoYaGDvGWQhnLUAag7ZpR5fjWHeiXu3F8y",
  "key7": "4CebYXNQK3Wf7FVThNUaVuLGAitR1cabPSLnqwfGcCwJiXzq4EmxQ17oGnFc9rsN1PZsf5wHfyW1WW6RQLgQbwH7",
  "key8": "KHMYTJ3uWfGSpW6NJDCcrfn3PdRLGrRqkkUtBuPRftCvhCJ4jMY4vtkHcQugZ7xJDSUBfWGUSZQjMLmxBFZrYkD",
  "key9": "2hshfpnvRcwafoHcdvnQR9JmAW3kHFQUzzHmLsD3rN3Sorb96xRjuHMVNo4p2BkbdeHpy6HhjWVHTRokLCN5sSmq",
  "key10": "PB7sgxUqVPx3MwwZ85etFFMR72Uii89WwsLLm8zfhmGmy6tKXGowdD1RwZvnkQ5VQ6gqZbtwrKTCE1P9P2FisJg",
  "key11": "33ch4k3MfsAyrdSXniuuMWkWkLWeUeAgpgTYi75cv8NWi47t3x4EdJswDsfxeCx8sKmBwTcw2iQsim3SDEGSrBCD",
  "key12": "5v9xfogEx9xgsaSviUG635r1LYRvcJK9q6c73jRPZ3nC3QyD3xLqzXELkZcHUZAsczFRBpbWdh3r5GTSWvZ4Z7kz",
  "key13": "4SYEJWF2jXw5C3YqEM9fLyr58rhbU4wSEM8UpVzn7dMYnebuC3P72tvLm8Dt8GZkDRZRFxxeQyjJX2oiGAryLugY",
  "key14": "4wSqp5yLb3Ub16WRUJnnkB8FzNNzzMRWjRDFT5rhW5Yt9CLqg2whNn5R8SYKVZ5vZ7cntCQJYtXwg41xsYTYJSnn",
  "key15": "2zQHznEqtnuov5WPZ2bgHH4E94GanxAbddZcW76me1QZ7hnUyE1Ywqaotmai1L66MkdvXC1jTZCYuaKNp8W8wR99",
  "key16": "3oHxVQqzDepUEpwp9rDZJyJBQTzqm9wamwXXuoQwc1AzB3G6naVaXduNER467KeWZngFGGsySqkdez5fZqcMPmKB",
  "key17": "2opT9Gu2Cja1RBLacz9iF1i7ro6K5FJiebJvEksnztjyhGQ3iXrAZthYx9cvygi81eBu9DdriDZMrwvAmoCbjZWh",
  "key18": "6BgQTxxH2XexjWSJTTecGUetffSxzM6fSBJ8FiW9K2QVxWVaCqjnvWRLtiuwj27hbtGED9BgUnDXBBHkTfLywQ6",
  "key19": "32yPPEAxRypPcogH3ZzuULymjEabQDv5FdGqg96PK2b3r9S69W7QWHDNNXiNRyBP5g3BfMDbsNpDdEiwCqztV7pQ",
  "key20": "2iNVLsoGwbpQVjoeTSHXY5QV7mczJwNZHBits86mXNLZWdMV7eNCEaBzzGWKYfQSmre29XeB5KqzL64UYdaHo6bm",
  "key21": "4RWiLTKZFVUHrLLoZcJUVsMBSVhjasjSJ3FHa2Xocy45RBhw4GSbi66xPcCrbY44eDKMmRE8nfZZWaMoZ1NhzRbS",
  "key22": "2qJmJ9WHBcLFSbuqyTByVJmBhfHgypRVBBVGPJ7FhEofb2ybqUGQ9WC6PGH3V9s5uB2GQ9GVpsFN3spF3NKrnzX",
  "key23": "BFAhjRH63iQnfszoMVSRKhxQPXXEqZ6aWkwR5WnxJJLwuXSvMFLTVqvoPJFsKPiKz9EaPH5r3G3JpUgxnYxsozM",
  "key24": "5Gh22WcCXiRNbbZhpkU7qbz148AMEvSguGpM5PoYp6rivYFv89BseDT8LEVEEtX9aviTTFMeZLGJJYPXujshRWGM",
  "key25": "4NwJYTDDcsX73na1UG8AWKmXTSRD8mzj4QkbbxHXTeJ9Jzc9yYtwMZ9YU6GHkxuPTmrvfremT6tWBL6qjoA2DSU4",
  "key26": "4BzDLkwUgnLxxdoDX6vytCV3zp21LczHKQprGhNwjE1mA6qLMvfRp7u2VdbfV5bJP6iCcDjEt8PpLZgtLeoLNCZd",
  "key27": "5kcqW5KwiJcvgHLVHshbfgcEgq9VLvLqSmbYpnSNdbg26n7YVBFu1pXVfxwZDtfvBWCPfyHz3B2cPusziBxvwBfa",
  "key28": "2waLh3pLBCv2rPLgiL9k7p1BQ27x8HMjH6pVbCEUww2p2NDhJBxDPC8AoGYQNn3PpzDxgD9ABGTQQrwFndYXTDY2",
  "key29": "5h1yxkfLQu17sedsbTLcSpTuLJViRjBW4GCwDEJG3yN5MdX4JyDseJ9JFU2Kdus7Tos5Fjv6HWebyWKv4G9TAdEj",
  "key30": "5dyEvgPLQ3xFJaoZQbbinHykeJMoqMQtFNp5osKHCZT6zPTG2KgA6ieZFmGVbQwTZ5ctgnjFaAJXPYDqEe5b2epe",
  "key31": "XhLNfr5EX8L1mdLBuaAgKAub3DDmwaD9V8cRFQRH5zhuLfzAnKRxhNZDcqqrvEKDd35uL3TJDsNNzXcxdnnipvG",
  "key32": "3GgjiCqiKc2NyE6JNZyzKUUaJf6PT858WYQpjFuGa7RisjkccnGx8nqx1LJGngUyCqtPDmeHZwZvfJMDqMb7L6WC",
  "key33": "5RbMUKCpFP8zqZsaaSWJ6XGxsh7hsNRC7GpKEtSmDViGCFXpYJsrMEvsEvUjPNomN4vvWsJ7tKdWoiUB1tFsRoMr",
  "key34": "Z55GEfRBy11WPrifFKPLfzsrNxFt8jnKwns6AaVwmy3AiG4P6LCjNKa2AiNsze7Sdr9Km9TRuVGvsYNW6z3Um3i",
  "key35": "2AKAZkzpsbjsFikWNB1fGFNCtMKUkRu9Ebuz9Scpod8thd1T7oWLioub9JgCQuctCDCPWcdrDd3ncAzEUixgGBRS",
  "key36": "5EZQy9V4NV663WFyNVrpp9HCVHRzYv7q5iGVSPk1pqx3Umhg5nczR7xPeUhcQCyfru2Xr8zzeeGUjs2ENrVLxB2n",
  "key37": "4eYyLitg5YGrnxViApyzxen3WSrB4KkrsLEJjmm6chdBupdDmHz991ofXyvDXQ5ses2r4v71A622w38i38BAm4vf",
  "key38": "3qg9Pb6TPRmLpbqXDfsNroTHGmne5ikAmLjqq35Xaa1Pyi2LaSP4UZ1viUfuNwqUYunTFpBuiT4XNVHyrpeC5DpA",
  "key39": "gu1WUiJRFHdK6zRA3SY4eX4pPhgfbj58V4ZaHq4uHcwbYsSFxydYaxLkWxAGntDW56mDoV9XTduChsTjdFijg7w",
  "key40": "2wMzssoGfjWm3UTxqKa74A7CXpmSsZWa4XPw6JnytZVNL3h2heR3DgT1Ja9xLgt9MyfGJoyDdM8sffM2wbBafJjV",
  "key41": "5xtW3zJ7dsU2dpDz33X7aMRkZvFF7fZucKhqGfuEkpVSpTWGnhixjJKNEixdRysh4iGMUaHUEednMfLHwQEoLMsY",
  "key42": "4Pqt7EAHVzNL6kg5HtMQtNY9LbfXDyqdNKL1uKnrnfxA36k86ojDzRZUDwhQL8DK2USvnaXu8N1JZuXhepedj5mF",
  "key43": "14QHtQSEH8M1CTToaRXuetaKArBKGWQmPzpUVgV17LC5v1Ajwo9u8AyAt4S6Siqaf7xTAGXSh3LWs4cWmrLWHF8",
  "key44": "39g2h26xjRJbqykMfDHdLHtaL3R67zVfkPuh2624fRBuZDjvR4zAWR1rQrWbS3CiucYe59AykK9LPMQaRXtu2wvg",
  "key45": "44VDy81WRrU84uAxP7PV6YWwCQVSF6nZLU4LR3romUCjYNWGKnZHTFBNjzib1WqrS7jCk4Q7CJ2mmMg259DKVzx7"
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
