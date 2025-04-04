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
    "MvBR2wK4FkYTq7QzVFiv2NquaV1FJTy6JH8jLC8gWy6k5DdiHJ5hD7iSx99TEt2TZj3zHmEHrMsU1pjvVkZwTiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gspg1ZC879LNZybYqyEmD5vAWTbzjpS6kZy1Ru58PSPapyHPRNVauTfeviGnu9hghzac7S5aS6ZswqecYmnjikf",
  "key1": "372VLsxeqSkm2wKxcuoTtvnmVmQpgQf4VLswNLumnKYLSCLzoG3ckYcWydK5LkecQZ67koWbXbso6jC7gpWrCAh7",
  "key2": "4nxMYmcemSUUQqDa3zTt8iE3QRUszKqaL1FeMPzbbmFeEfQ8Mj97ncAS8jT7phmcWJfmBEVMGLTvbFQLkC9k3VXR",
  "key3": "26gd4cqSuYLcc6PcnjspGPKv22MafjwpKzQm4fVRdhJCnD4fbccbBFMtyXNFr5jTcXAoSaBFBPA5R4mZAz3vadEq",
  "key4": "3THQreLePxRZpw3gVHd8zbSJ5SqjbBrN15HCgedeVJQQvcMsb9eAV4CRrbdudFBuqLhqyecXWWH2oycsdvCvefQq",
  "key5": "44pPnad94vSP9aGJvwK1sQW4RpXCdHKYDfeA8gJFr2gXCqqyDyjawwapkTBgm1Q4Ckn1WiZjoTDkXw5doZMX1Es",
  "key6": "5hBqTfegmsfgR3hbfkc32vKBGnfjh4cmLZ9jTeRcj3aSJV2okAyKBi3EU6XU95zcahzDDBAXpc8MrEv8hrGJixLD",
  "key7": "3S4SoHtGbjDdBuKTXuY2YRBwxmmtveirhYex1uJvk95B8y1PQ3kxqM2XoNQkASfsFZsW8e2qWffX4B64N8sxqdgf",
  "key8": "46qk7TCWDDhk52xJ5uMuhvJBrLTGNc8nGinJZHAcqsXU8ZZFWjYpfhLTeCDZEgNhvHHr7JHPwEoWAeHUod2ynj1X",
  "key9": "294KapcRPwEHDxKQMT3HFisG6ckZnjPtSRgvNcGTs43KrzW8dmoE1FeEtEeXARqjh5wwLB9rSfdkq9T8r9TQsdcn",
  "key10": "59mvK7KGex5D6QeabRU6gVU1vPTu1uVJo9CtAWkZZS3NHvWjimDcSWopHydGPuDEYGuVnE9tfUUyf7sUFAaGFJAt",
  "key11": "ci8qVz2UQEgqo66qRBvLkwbiD8QLXVkW3z8Gkzw7jYjaWmm2BS3mZs7JVpGudMn4c24BswbAuV3W7RCWEg8qLVV",
  "key12": "SNcq9CKycnmsiSwaTNbyN6x3vfghDtzjgTaPUpmEdy2XHn1hSM3G65d823MtumTwQvQwqfBrVAsDkfQCJwdDPnr",
  "key13": "5Eza8vnf33N5yqjB8Z2cBUtuRhrSNDE7Gh4zAc5m3Dzf48jnBGVTe38vMn8p6MB45WtmGj3PL4fnk8GWPgW4YjYK",
  "key14": "2e1ScraJhaFSyxzbsvDW6pzj2qnGZgg4faxUuf76iPA3idmW8kCqTdcu3oisgxL6U84C66pf2qMhXWMFRjJvFqZr",
  "key15": "2WxyWmHLnMdsVUe7ftfeYZRbP2YcwzyU9wcyVRgffaAQJxLoRN1tunEtvKfQ5NpmcGtj4LWAZG5yxTf6bX9bAEjz",
  "key16": "fi7cj4ah4q3y6qdWtrDohpEWodv9QT1RDCyAqNYiKkdqQc7x1erNcXFaQ3d54NxcMMdbTtYb3fAxRYmcWw3QfFf",
  "key17": "33Sctc5nw3sGJYhjLWDypoZKpvpg1msU4JFpAG6LgQgtz6RE7BffWETNEymioNCL7LDnQdx5fB1jWSA3fyBmkibV",
  "key18": "KDNGDTwoDUHWs1cNzRyj4dXgmh23wHi1qLcKFQzK2rMKcXYFk3PdNXvF6eFEBh9yboQYFsMpq79VMxDEy26NFrC",
  "key19": "4iWrgv5cEDgVSpVs51Q5emEbYm4My2dCH4ocZQgusmv4ttxGe4xmz7Vc1J8rekXCejg6YvFKo2HbJERBwVymJmWG",
  "key20": "2YJ4d6XxKRdGZjXf8MW3ET2vi68sT2kyY96TF2fU8oK5TKCV5Evx8gytBL28eXsxRzxXkAphYUhwPGuqq627jkzx",
  "key21": "4s6WHkWgHZAzKPyij4uMLHmFGWWhkxjUWNg4rNjLSxeHZMgxZzx2BiUBXunaxQZD2DEcYbkud6zhRACFWPbaP5Nn",
  "key22": "oxep3gDjVtEzSPW4it1CQXSoSGvH6zZpR2sXyRF3kaSHaAS4AzJQRsd98fxnTR1FzoasNHSD9sq5sDVbuh6FYj3",
  "key23": "4s81RJULTF94vBJjwSTng1ek9aGpv7QcivEW4AEPa7hECGoBHSUrosjJ5eGCQLkUMYTvR85svSpBRW5BrDJnE8xw",
  "key24": "64sdyNbmwYzvz42KfbPaUCUjRaxwgThBkTmPEA8HdKUB1B2gXVaJp7VpfTqfy8DtySpAveqZKDN97pYh7robQxTf",
  "key25": "34jT635rDm4yFtJgQnvYyvztrwSZGnrPCpahigFgEzBx8pab8uyUkW2yGFqXGZQHQbZdbQtKpsZ15D5Cdj8v8oao",
  "key26": "4TYiWJxetVzMi4yuBi2YdQHEZ5y5VbquFHCZYtcp2nFowB5YvwfnYtAjY37mxTdb3mg3ihnPK2urWpx2NWSQHXki",
  "key27": "AWvBmjQEwdYARpNTbbio6YANAqyC92szahNDbFsg1y3Bq4FduGBaWb8QvvQ66c3kNYVvD5tkpsNZvCrAZMsHnsx",
  "key28": "31RSpwDzYBZKdNbPNnz7kUuxXQF4Bbw7zJAFMp9dfxuWXgwzoB4WzYxUPm8Dvfjc8Gx5rxdzaT52zebiD4z4nPa",
  "key29": "2RzCvjBuSS5KoUg4RPA9NbbobUPRAJ1HuFy1hDff6rSdDqiq4sjWFkp1poWFKQRXFAzx9z38MjdAnz9fxpsEQgJg",
  "key30": "2iXbAHGfgP5W6UtsACZovG5cHQj7CJPR8bobxiyvwngShNKQPtuFxj1bfYxwKjHBvLE1de2xj3ZqxbTo77wQyBrn",
  "key31": "62Xmc41yrZPo1noqnfnZGN9eTMC2sZxQQhd4g5dPhctR2cmurDbdjMMXsqyQjTufNdC5KFNiBHj6v855zaLb9E5w",
  "key32": "2MEkzJDZLNp9MpARhHCTq1piUvnM3jVwBDt8PxpM3fFhuzvZwXfunTpqU9DSV5WL1b8b6MAPPbKT9xKX49U3bETN",
  "key33": "2Fddg3LNHWjhLJzTdkt1VhGWN6YKNQGtdeevrpmRTVXrFBUpH3KgpG33ehTVVG2eQYZ2171ZgHR354T4cKHz3tFu",
  "key34": "5Yzpxd9Sj41N8X3YKZtGy4FjckEuca3fCBL4HudWv6LwfmJ3ivD5ut7kFxhocNtjz7MB9NyMn6NCAFNR7hvAJ37e",
  "key35": "3mE7xYybTXt9nuDqwFLE9MtgwRXidQbu3NpkSASQQStVukBEze2B6pFN812irQVHb4XwUaFcpyWuoKPmqx7m3K2B",
  "key36": "318mrCu8roEJLsYVnVPqwu9JvGUUPhBKFVFJTRqWNrGsUSi1bwbRrGNg4H9a9ubkwsgwG5Wrg41bzurDM32eygJX",
  "key37": "4pYcqy8JuBinJpPPUQpvyBu4wHaYgux5wPUZsG7Fx7dMRKMRfwWvaDSmLsTWkZWag5jZnt5uimRG83rZyG6FsfPt",
  "key38": "5WEm6bMtrHwCpXvkAn8NVYVjbnt2iXZpueSqULQNDrgQYwBHXTMGvvY4djjPfTy21W4pTxezmavZyYG81kR8Ycsn",
  "key39": "fyo8VaRMkiSVtLLfSkPywDNrrXqBFLMHJiXyHBrep76f3PAbrRrG8pKUybzfLExxyNLdFRp2zgEmm4Pn9MhXQZv",
  "key40": "3gPKopZ6QQEG9pJaQHkoPusFbgyMm3wmaz1Eh9Lm5EuwpZLx3MaSXnF1wy6KMsjETzf3dtzNdFPWQKYGziri8ayq",
  "key41": "385WYBXR8a7xg3rdHgsfeUcvqFuLTENwrTMsrsrk5g7CtXN3J4PySK18Fu18HaCGkwXQif2oDeU5Uebon6niXruC",
  "key42": "d1wj7MANCzZyq32xYMX4kAHpQAUtnNki1wWpWzTmShhQ82tGLxVTpB6UtGUism5nPQkzaARA6Kj3dJNR7cCng4F",
  "key43": "PeYxQakTRRT353dmwMwmGRgeEjMrr1X3FrHKmE8XrDBGpDnUPauxPzwU3P9aET1yogF6DYoWkNhzYoh8AbRp56k",
  "key44": "XDXKQ6Fyq55Cn9Euko15Pe6JYGqhrFjKK27ujVpPFwAvpEtMF3f3241bDvkZPQ4Dd8cNko57TMdj4GYPDsNTZHv",
  "key45": "3RDEKd5fm6UoefRp3nJmHLzoAbJtzrWYBEZA3G7bkefdbq6xAvbLeNtqZ4SECBxcsbzQPZwcYtoH4T2Vibv9acjm"
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
