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
    "3HiTWhP7iSa68YRtB6aAEbK5BFynzCnkDeeLFyNWVB6hUBFDkVZf4h2FjcFXTx7FuS4f3JERabADaTVykbZTUk5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRoNUtbiBiuK7h5puGwNRdb9Hrn2aySoPhJ9WYTF4WAEEy1XMn7xoiguMv4GKh9QPrLzL4dSmBZeFMXywQiuTnc",
  "key1": "2sohyeqjcthvwTFjxjEcux9pLowR2vFC7amqBj2TZtJb35omFBrGi7AiQxPwv953DRG7tkcpxzw9gmjB6wAE9nsa",
  "key2": "4XBcmYx7Q549fymrCuZSufrceBZJVdz2o4MjmVSy2n9SZ3yAc4iFPAF25kqQPwVxjMcPQ1W4qjGdHQcWPU753JBH",
  "key3": "5RWZ2ji4YijpoUr5EJB4YGEk8Ds5Hp8tALKXmn3RJxAFbJUTKEMXtJyWytZewDvx9xJvzCNddyjk7JuE8Stu6dq",
  "key4": "5dW6dhCdLnWb9o6pudWZ5ZZ8dtHKVQvYtrZdewxj21yq8oL3CU4jwEg12LkSYv12W3pom841CDbNz8NByfwvbNqq",
  "key5": "4qL14BowJhrBQN2Nh97mg1z4ixoULVtkCoXvoUt19csG2Rr7RSz9Gn3EUm8GAWqBUbFTJArHa9dp8YdukAL5W87G",
  "key6": "3oczKBEh8QFJaHbJoMrc8Z56u4V8zrotkcqGed8E3iWxQTvCkqWhvUd7JQBy3Eei2npENzYG3qyUZcGRfoQSZqzG",
  "key7": "3vKUwP4nhqGWLwXJFjptwbYYdondGSTowbMQaDa2xNUCBh8JjR5ThaK6MXD9YExLEMY6yHrPXgtVuw94Ctk27okJ",
  "key8": "L9UwsMGaBEPZiLsVeRqjJ6EK6crih9WX8xZgFhsqkW6AsU7RYmoQ57yEGq7XACse6byfNTyHjhFNpeNueBnBQJn",
  "key9": "5dUUFZsKvgNr9CXt9uHdw6qvdqG3V9JC5BpmeTYtJUBffXfE34Po2JzZfSYFE5wVHv9PzJVkKUB15J91N1YCQHB3",
  "key10": "2K8xziUg2TeSNbtWC5NqmrJrZAVCFhwYVbMUvr4YMXL9cRQNhUb9oRUxLkoNpuhmuebBEtQ3t1TD7v1jjUvi1HLY",
  "key11": "4aUyGbSaoP4S4Vf4JGugs6ZW1XCguEQDbPoD5kjRs74kCeo6YYChkhooxkrFWHB3NUrYbQvRxUB5ztYExEwyvvy1",
  "key12": "3WbKB5ye3RTmoCQ4Xda3PXcJkB7jseTmmGNRApSLyXi28aJK6GKqidWsc7PSQYAXmwBVAtc4MDHnf5zJQp11oqJ6",
  "key13": "5nRSh44AuYXscs74zqWvRpoRRtQDe5Ym6FyBvpJxk8CsZecc8quYM8MP4xiqVRKPZjepZfeCFnrYoW8m6SecExow",
  "key14": "z8W4tkEf9bRB2SU6V9EqozFnZHEtsH5tZo4kyFLMcVWod2tEXVDcEa22t2yxiyeqNv69YM1uePXATjHWawhgjti",
  "key15": "2nTf1n2fGtDiTfM1LVFW3nS1u4WmUhJVdHDCNz8WjGbNscA7X97YENtqnDSLsJWbkDRZUGMUwyh6FuFdyttc37Fu",
  "key16": "FiXSFTM9b1NzCqFQNUtAQMQb1MxZ2yA3zEx6r4bG9YreXfx36iGiR3emivcsEbV5APjxMRfi9orniYMFv8QiDJ6",
  "key17": "2GSaEgLDauTCDziENQTge7G8PbSdDV17uVBaH5867KbkqpWwqEvKuZMdZG5gZMuA91AYemm4wcheSYdPePzbTYuQ",
  "key18": "2a4qPFokL84Sfc4AtjFPL8C2T7vJh9CbcxQC1xuVoaTRtmwH362twMVn7eRXcLnG6d1ErbiSZD3V9kHUkgipTfra",
  "key19": "451248VoFJrqyht7YzsMCD6yDpRPbvb3Ft9qv46tkXXj4dYUdMGUbpBDa1Yfjr2huN6QeGFeV9tWe4iANtSSbbEe",
  "key20": "57eP42dTCkVB8UK3a1WJVbud8jFTqGMofqioVsVZpic4zGZXKJTAexF4RpTSwZnA5tDnvAz8ESv8xCvAzzGvoz8T",
  "key21": "3nwwF3hzznzNt3xsDwZ4rda3UpC5ykJhKbNiy7qCdfkezBHvZxCff6W7SQp2o6dLm8Cr2ufXYiZd7FJ87sNJ6v1K",
  "key22": "3Krsa6ivajhL76QgkTAGtQPVmQ1RLbtVmTLZZiD59vXv85oUuBUThMk86wpEdYYepqwP31xq8a9kFQhUqGZiimhJ",
  "key23": "4BT1uLoW1fReDj2WqYTdcNULvdH1tLQfuBDi1BZ2g8R7jivc3puXUQyaHhfCiKuhhyjCnMMhazWMwHyspqhkJVnq",
  "key24": "2VxXKko6HeSd8W99RjYPCWmDEZH2VpV8JPBhzXQPbDmv4mLp8579VQ4XYExHFWXRT74RSRVYd84qJknwsCMvayJR",
  "key25": "4cq5cQLVbVHDXvgG8Eudmug4zt4P8xff5tcBchvKteRwNNRiq2ygrznydEe18mstCvYmucDamhPwn1WXozsN7myB",
  "key26": "3Pr692BvskEE2Z1r4EHCmacKDYn3An8yJkwVaPqPy8QauBNeAVoMubjxGxSjr6CzfsaedASy6axqKh61SsZHHpj5",
  "key27": "2C7BhEZ9KBRJQEMGnsgfmoR68gLCPCyu5mgMB9DEzAbkMiWgNL7aKG5AjEsFXRwfvmE6yEJC76BgrH78awY5MXgi",
  "key28": "4DtxWk3HyWWKVYZf91dv5iQq8jJvRnMpRMBQUkHPZuYbbY9yKbgrphQhPzJHG4Dhq6tzWYxErN4ZHTB3YEgdaXHy",
  "key29": "4R7PVcaPLkiZ9h3LGwse55miVMJA2sqP33D4Ag8SZZDtyfq1cV22Xc5zSHvX1eLUYtTfjiNwxXocbW7hMTMJQYax",
  "key30": "5CKKw2HwFkPCRgU8FMEJcmvnTnA1qHkgAjjYmQGSYP9UoSiY7t12LZk1E8ByaefKBeSDu89fMSTqfFBtZDiLiksH",
  "key31": "2ru1dhQQSXtoNuRSYSDR6Ka6jKrUQUrYWVHs5UvSqxY7wbtHfdbYfwK9c9dmxbBEGFhd9jPq6huUetrBBuSyoqH2",
  "key32": "4p1VECxd6zxxgiQdoqwq9Mqajq5th1JsPwYuuyJHd4q6o762BeKsNWig9BD9fS2DYR5X6LL57w6CUnVtEkq7o3Vs",
  "key33": "3mxLBLqXCJXhBzaKiR7F3iUBt5reuLqRyS73VXD51GAbkgNz1YPqBa5ah4C18wh2UUPS8c8tt7ZP7tf2hFvWpuKj",
  "key34": "3a8rveqmEPMATzeZuvFhYQSTZWaanjKoMY5H7r1q344HR92jkEoDi1peQR2c4ZvHqYztBT1ndY35RW7Jeg8A74oM",
  "key35": "5ndNo8My5LgX4BWRQn5rvbkg4QEEXNShZuUR7Gt7LeKgLcAEqJS1zYuuVKkzS9tpFbLjXEovAxEc8BCndxwAi1Hc",
  "key36": "j9h4LqRNznZmQAAPXDSVBhXys2ZoACmyNbqV9N2Ee6QBe7779gitPcQtfeDmfkesUSj1PgnMXTV55yeFnaDpwJP",
  "key37": "2H9fyHR6Xo7cjDGuWzRFZXSyjoExDq1BDWFQFuMHBYe4GvLQtaNhq6NMLBDTSSBLXAvJsiq36VPct8DWJBwdXdGj",
  "key38": "4Lns4SULWnx9K4i7gNgYSPYsa7e8hcZXCVuoi4ato6PQfQ64GPqTNLLfRVNqRi53NGTnKmzuMUMJGVnrUiqFkAxj",
  "key39": "3CwSL8uzhye33SaVz7YihavBb97tDVRVVrvDYjKRcx6eEYG27bqPACi7ftKAxFv9WsGEtwrsHFXvHQ2ikGhYhWZU"
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
