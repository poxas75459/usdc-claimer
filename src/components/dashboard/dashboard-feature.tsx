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
    "5bRZQH3RQtd9WjypEiMWintYUhS4dZVQxvBFYNoQDPE7TbdjQNgbKD2Zb2Qknof4U2VaVGH4PdanTyf2ugoR4xKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBoZ9zaAFDYVXMQtpdAeR8CKS2cDt2hB8hkUGYNBgFEheTrUDU8nGsyYvv5MmotENqjWJCfNjEXrqDCArLwsQwQ",
  "key1": "23j8RtiRWCSzZn7zM5VX1WgQaUnKo4q9jZCTLWsEjudusizXSrzeWMf6dZ7p8pyLM3FXzg33KqY3XR1mzCzNGmcX",
  "key2": "4E8q9JbfRqY58tf8zWyMdHmFaudCxLVhSJNUke7jmNSYSh9AEMewBKHk3tctQFDnJrd2vr7e9ZhLtYdTZRZR7T1E",
  "key3": "2jFDKAUEUgGpgbJRUbnJTTnzjuFu7aKZ3KKU2hDBiVWvddRoFvonZjv2uU7qNaAvBrhwCqddvuY5rLfVuWMY4X74",
  "key4": "4tP6g16sxNMtnWcdrxKXFSWPgTdUeViXf71xEHQu8X4mAB6c4dj9S9GFviw7ZrmFdDpv3kw6tiM4C1UXAzvx25CR",
  "key5": "3FML94g7D8n7AKHomrZ6ijmw9DNF6xL6vtmQMct4wNYugHNgX4KrAizWgsCoME6Z5PrQ9CENPJf4KEMv2W7AiEkM",
  "key6": "tRPCrSrSi3SruNDD2Z61NhR2Funy4JyLHVYvAwviMzDZnPF4KkPsxcWYuhVhquMFGEuNntARi5NYCqqK1c6G8oP",
  "key7": "34GFhbfcUvgeKFTuw3pf9J3XDbfoa5qTHYo9P8KtuAyH1CmuPZNaafQxo3Cm23o3tfVhMbBjXXK5X9GvyRmWVX8z",
  "key8": "4GKZpJ4z9WRJjeQPy8ee4nVZ68MWgeYBhn7fdECTDPGJbBYGXa9q491wXp84uJiDqhTK5J3csnDcgiotsgsUv14t",
  "key9": "4vYbGpxyUmmFyr2gukXTHqCZpAUbxcPDxTJ8jQGCs4oQfQSfHox3CVokFvNU1c3kiM423hYdE4cvN1Rr3r9W1V7K",
  "key10": "4wziLLE7TDwDXvsD4xLFQQZdaJnBCgd96HUuwwioLn6PgbqtSekn8WgtvJ2VmnJmJb5sCZGBjf3123o5MzxLqex1",
  "key11": "7MmK5SQiDhvhC1uEAMSo1HrHhREHkBTDyXhTCvALkfZpeTejjoGbKc8AnMgGJ3SWvumgHg1pG8bTgzYNZPe4nwD",
  "key12": "4fDvJDwaxjY69Z8WikvVZRTGYA6FBcFuDAoBfyHkXdbX7VnUnQcGTFYHQ7VPdBsxLa7szUaebLCcxJrAybgrpU9h",
  "key13": "2SWtWxMb2pThuP1U6DFmQSFwvzppSMyfgBnGsLaECXaWPn8cd22K9HFRVU8Z5NeRpPbPnSM7En2H8wHskWBpWUp6",
  "key14": "4r31xbhxVUDMjGTFCY85G71mVS3fCwXBfyuGABErqh4qaqRcQwd8FbB9zdurG1kZ6Q3SzgXqeq2HGVGpG5665ty7",
  "key15": "249n3VrCKD448BbiTgorHMFmnmUFUAFtJCRQyaACafdiR2f6EhWEmg4kxV5eiuuD8YH7FecwZH756aGjyptYNxaQ",
  "key16": "2ESao9Z2YWkbAN6vAb5Qp2Jf3c37nqYa7gTd3szPdd9dY6Bcy1UnwJY1CnLNgk4558eoVqV77aDmRt3uFyuG42VA",
  "key17": "3E2i1G8s2nnSznVDuDYGZw3nmxhUeYJs2y2Aj7tbf2LQ3kU7Y5b1z3J8We32PaFH4e6vUYxnR4pC3ANCx5CEE9vB",
  "key18": "644LotiHRfEbHCRLXDuU7cuk9ZcFN4idk7ufQW7hSnMjyHvXwH2AerdmfvCd52tFV5QFSDVgWipEYWiAWsqBqz44",
  "key19": "kMbS5S7e4Y9RgwTQdsekr3uWbHxLBjP4ZNakb4jUCtj1cDYATnhrDgC78wc1RtTnUQ5facroZL1JE7CFbMEBU6c",
  "key20": "3ktjbyk99vMvyExageWE7GscDzTUxeespGtUiWPT9Uvwpta6723XN8JEX1jSKpftXwALGW2k4dGqBWqhVYKWKvEd",
  "key21": "2QNKFvoZCShykqgRXp5vzCcDJNkjqrLPFVCfbHjRrZp5jby3zEdxLnQWaXRzLszqBF8SX3mvkyxU4LUGNYhcuLMa",
  "key22": "Yz5CyZpHDAQaZ8QvWA4yTUiMjGXc4yPSUUxUkkXau64HAZJjBN563765mhtJm4RH4Z4HRMdssqBCX8VVSJwekVV",
  "key23": "4obFfZoGpzM27EvaDoouDb6qrshMyB6SQtaX48znjcor6fq4WgZcKY2rR9ugnNcJtw91PwQhJc6z9NwPt7owFXHJ",
  "key24": "3Ff5VGmdodJ5NkrLbjGGNW5iGenB9hC7buE5ysUCsCFbpYcv4BYrTccVz8SyvX2nabHtaKYetYPyqrgQY5tE39sC",
  "key25": "2ramq4GSg51z7uLD9yyxDnu9N3upKTxG68aBwfzsv9xQmpUPuBrGHTRvRjcDtFQShTRAdapvAhbETaZz43kyqhym",
  "key26": "4WBQBzwATfRN6C9E5bwUPtxk3VGQrYMCzNVHkZM8axda6Cknga46uDPXX6nGKUag7TUVr9jcvPHPABJq3gnbPvDj",
  "key27": "3y19uKrefqzUpQXt6K1ZzHVYehWiYw3kJ4zMVzdsr7sCQaPv4HtGmgtHsJcuw8bRooDtbFiuVmd9ApLrpknkhafF",
  "key28": "329iSmdY8snMPdWjw4qppMftHxYYDd6BuECM15vDPnFN3C7v6rzgwSMLkPnQ88hvBxc133UC4szuYwZa6zMN3LW",
  "key29": "3eC8LDtEhBgb2B8inATSVwX8qhENj6fXMQ8cqgLbyeKS4pheE53onD2wYh9jnSP3K5WqKqNgcwbAyY5vUYDiFwea",
  "key30": "3MXyrDSJ2ZfFLQNsjuYhjqRsM6eHiHugrRF1mA2V4sudr5dvuCAVnVkRp9o93L43ykFuEsTQQ2kRc7Uh9aKyUvjb",
  "key31": "3aAegeGoF7GV3UymLgsgJUiFXiD2PSV3LfwZmA32jUGgkjTH1ML8rXGyvkLg5dy1RvYkVECUo4BEPtSH5g3q9GgM",
  "key32": "3rSERtNtC5sic3FZ8CQc29TRoEraV3D5oyvxxhNZqH6gt5ZQJAMmPArmo5nFdmhtu1YfeDt6c3a9v9jZUvBFZwp9",
  "key33": "4URC6ZUEHD55ztWqFhRZFmKARD6WRP1tj6WZmfQAsTeZDxQYjfox36QroB8Z71gd8SsvMYPf7AFxdEaMK99rP14Y",
  "key34": "2mvfjKzmXvZGJ8a1xico9DddHppDNSX3itpojgjCmxi2AZekYZr8a7P32wGrefS3CWBKsh1fsmvpEWJpdQysmpfY",
  "key35": "4i53TGgApKSLAmAjs9mwtZtPC7JUoCAuDF7ERJmFGyFYypT6FwTFYjb7TPUwDySv4S5p7KUKdPVZgYYbRQpLrddM",
  "key36": "56BVbUiiwrJzTnShgjYhg4kHkMDCEMVLtn4fu4sBTTW6e5bQj76ZtjXph1SRSWNr2ZD58xpqJzgpJ5a6MzfVCxwR",
  "key37": "5zjP3mAV4ne12YNvtzENTeKJ4hHgV1Wr4BiadvzcabT3boQaewFieEN63nGpAM9otU51HmG3hPoev16GcLqZ1dBY",
  "key38": "jfgUAPxVXbxMq36mQqSysw2t2LCwYND7yqpChKPTtZP9iGigw7tGZQpQYNzWsNdo6U8qHFnszJqvZHYUB36YX8x",
  "key39": "5xcvLZojMGGCDv44bqeRa5wNko6sBhLf8Lh7CwSNhGXCJWUChiLXKCPGxtDiKhnVN9FG5sJvJDGyScWvuJocty6j",
  "key40": "5mCgSB46A6xVGXyX9dg1SyPyiehjP4caxo4oo7vWX4aWbzreo8ot7xgM27zGosZYsWbK7D1YCMr6ZtNJLu2JnVai",
  "key41": "2WTiMAzNHjBB9pKm7ky4j94iBGgPFRffustJUG2gfvgc8F93oQYaqUSL2c6EsyyKEVqxowmSf47MxbLzQL4duoCf",
  "key42": "2YdCsPZxovBZSfTLxV9YMHAw2BrgLJSYBs82LCCLQKy4tciiMGQ5j5sYed5MspHuPpzWuCJnySn8S1dKhb1vviVu",
  "key43": "44j69bZTGP93jyBsLdaj91gARJNh63KuwDXdyubiyqNHSWuFJ7dS81QXX5rZvipc4HGvLzQs7MBnGDqJnRqwft2a"
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
