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
    "2AX3HdEzneLeRYBzMeyasdAGRQxUzQmc2eVdE337QQpEHBce4FScnHQ9Ub4E5NxtFt1yMFPYBZNbj7aF6E3n4T5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQboKPeRZ1UfUdvZoxhTPXccEhrpqRHKtNVvymysebb4QfQb1YWxCrhUejSBEFvdn1FKhV9CLh66oosJWsD3mbT",
  "key1": "2G14UCjn3QG7mwPSfN7tAum8HeBpAjRYC1ZK77hVTtQwAzZUVFef1yqAXrh1Ei8nSoAeAr4erGjo4YrYkFU8pmz2",
  "key2": "4t1hpYV1D3wgu6jYx27dRuGTni1irbvZZ1na3mqr4XQn7gvHnHeuvh7oCYitztSfH5NoV2GCC3PEJ65SReJeA6td",
  "key3": "5dhAwsQyRDZNngxRgSHBRF11Lhy4Nkpf2s5C5hpjzBo5KFrsRBNZ8btzeqxBHHAfPNep14wSju5k5ucCHoMa6P3a",
  "key4": "5J3vkZVsrAdV1NzvM9YuF7vw3V2sYk5bpiGniVTqpMbKd9p3r7iFZwB7xn6xNKyYJ6RfY46VC5xnp29NjZQszMg7",
  "key5": "2cpXHm6X8hqE8JqNWYyWT6sJD6g5cahhRyqz547Y92mxAGKGB74TwyDXEqs3E86CNoDBe5g83FtsuqagsiU5cFze",
  "key6": "4qDucjoUHDfJDbePtdwLMGAdaLAJP7xNc8uVujztALBche1H1fJs4P5aEq9b5vdsSUaC2rvEEF7ogJbd6yaJ6wbi",
  "key7": "3snXuq6AkuX4CwKmKguPCnboaJGPebf2Gp9TnWLaKrW7DmmAnzFTLNikix1EgsVEaKNNsUwvJYgqU28tgx1S5AXv",
  "key8": "3SgiKEP7vazwxL3yroYqDB46Ffk7dhK2dSFW8taBwznQmaACujBcbAfR7R4roFixrgyCFtUh5ZD8QXxHhb4vVHFN",
  "key9": "4P6CGvxFXRtnuWf8TveiVSwHM28tX4J7jiiTA3RD3mjj66WutN8bS2tYphZSK2Zn75UBqKbmaLK1BAQsuhnk9n4p",
  "key10": "3vbn15w5dy45ir9o2hji2n2pq2mXHZHXTdA4v5Zvohmrg3j75Ku8XncrpgWnosd53Y57LmH8o4vmNh5JJkFvjruk",
  "key11": "5LLvXgFdpuqHnze5iq4Nk3n6yt6JKokbmZ1BkVq2xZ2c6grELCnUhM99P1ixAY1JjYuft3h25D8JGFWs8tnwg44D",
  "key12": "53Dikf3uvsMR8pFeLUDzbeRNpDeBNbjf6hFpyeHgVCSipqd1ZL8YQnVsMsZhqv8Z26QtHQR7v6dndY4uWdkk9DKk",
  "key13": "5JzqExzXzox8TbVmRt5mJNr9An6REGn9VCBkvmNLRWfZK2BEhGJVp36F8Gz6Jj72TL4Pq76iP2YsvVP2KPyoLWdZ",
  "key14": "3Nmj9kL4CPvKhMHDRXkbJZtAYFG4xLNCzmoCfNdMkFhB6Dikvxkcxn2H7AP8Zv7kqU8EnrkheDjcvzADQypryJxJ",
  "key15": "5MiGUL8bjV3KZcJLP7V8QVjURZE8gbdpsT4u6DANhw1mdoNp5RXnuRzUQWZZJDWD7zviERupcX5mB79xPEBkYAaj",
  "key16": "3XkWdpLDbqsqmmg7qD3N8ZRTMLANHeqxxLU7LWQKEjSV7JiEEgr3GELxChmFihWXLcAkzrMyk1S6r9YkzgeUE2UU",
  "key17": "38XQGyDQRJPsHhGBFphAKe828CJJzxX2pUV5N599Qj5jN8NJp4w8WcD6i7RUh6hMtkLah32C3nnq3RnabYvBYvFq",
  "key18": "2L7tHEk9VrQRaNFYpvZRw3ETZcAo27QHb6TRGt8Mq1guMmuPzWwmHTcJu9AZwFssZkmbUN3qZJvs44ULCTjZHApy",
  "key19": "4fptBAcxPdrWVXr2X3FacydrEw3ZhUdnMTcbEdQfW4Rxkkt4WqSkXWTVD7NQ8T5oJq1SAHQAzCnZ9EZTBBzRH8sD",
  "key20": "2fK2P2yv6RSeavm6Y6251ojXfZHuHZzZprcYfT9LHAxWjkbVXcQPoQ4RrDutocCmBkKyKddwCYguzt4cpE17oVXq",
  "key21": "5JLKoWFftzye2ZvYbKLLYuQsALjKk9GZfsCCiSajmTywdZuVDgnZLdL6996CfjbwD5AjrmQ8DHxpBFmw7ExzQr1z",
  "key22": "4Y7VmwRpng9QwCY6PbCngsJyNvZ3cUxCJ2o1iNoUstHgVJtkHEYSBwJzEFquS4iunBnG2cTw9usawMiyob8fB4pb",
  "key23": "2ascFqcQdGaJGytCoMfBQnAdgR7TmBnQU9XS8iUeyedafkhwhQQuHJeS9RCtDFJ1dwGnqce2pVUZBuknqfJGfdtt",
  "key24": "5u1h9FbitUPifwQbcbEpwLaZFjFceeSeFxbqUpGC4E4C7MRoikE4NhycZN7gcxqs6XVAaHozAZrZKkoiXsQEWbq8",
  "key25": "63fgo1zjTYDJdHNmdn7Pd1NruFKhxd5hPjDsPaEkxi82FHULfuJZzsuwMvKZjWr9WvxRnzrvTs7LXUmh65ZtN7pr",
  "key26": "4cwz6RTwVvAnvkK8asaqfBrTGW5xWuuYT92m7Ftp8YLMCxbuPQm7Cu7qAVpuaYxcnijuQjV9Q3EaLHVjRDi7djWo",
  "key27": "5NyRojW4Hi1R6xDLJtvqXUnheMcRFB2Q5jbGnWzvNocZpe4QfwLH7bo3wKV3idMuz5rtR5f24be1eJuifP39z6Rm",
  "key28": "4W3TKnHma2UiYyRKQEBtT6oPCn6EUvTnXMqyxMf7EciZ1MuqzuXKxogZNx7c7M7WSF4fxe21rua2Pff2tkqSvhnc",
  "key29": "3e9PqZph9CDQW2TjZE9bmrHW9RPCUzBZ5gHKc4NwgsMArYk9TYYwhDzRu8Zz61HuWAm8bdeV2hG9HyVZQUrJJVah",
  "key30": "5GJ1TwYQEAqUzPfFjPQJqv8i1AdSXPLpbaDngCuswn7hWBTfuJk6Re5x1vK2x7jwu2xGUXrEKUBpFEnyi9uUjisS",
  "key31": "eP68Ybefv3MPbr1fokMuFjh77W2UB7K5DoESznb5x38JGfap6EuQjbhYSTSsH8zhZxnF1qRvEzs7EARYK1RwTzs",
  "key32": "53t74FHd5b2o2ZLQgadVbgytQZUJgLkFgfk3aNnKH988gNjbvJbK6WpUvRWozYYukwvb8Zr6SwFLG4AGyn9CNBWX",
  "key33": "3PPPsz7yZqi4y74wePSs2EQ9FGC56uWtXQ63Foa69W5NSJrH4vzGurCTYhXCDKrN5u8ZfNKLpgUeSEecEfc9YhXD",
  "key34": "978PqLGUJkRuzi1Jp1RKkbJJAn3Dydu7Fkc6xTSTvbvYYbuy6AZiK9MvioeYc9mniQfhLahNXDipzZy24czut6L",
  "key35": "3LBidEJR1TurdzEs95uQBNmTXP4pzD2kXhkFae1nHaJgwJn4iATLAbxnxrxGk1kCNWXhJc3k63ZHpTXunF9FWpD4",
  "key36": "4w26WdFZJ6zLCsJtZbKcWkiFqhSgUUeiWzP2xt5YGBwWYLG78xqwGZx7MqMDhFnQqk2YFHPshoe1V9EAQ27Pd7Td",
  "key37": "5qNt9KvcbVD2st2sNrkaWvkUB4UUgBbvurFaaUmsGRirVLXsQZWHyR2SU5KHRXyfqsrbsQeRM1MGnsVuB3N2Ztkp",
  "key38": "3aj5AwWmiyBkVHcxScT5RPE3cAMJLLmVM5qbB47MqNMt1a3sNMLJZ3tmZDGtuTLiLNSEpT6rFQDRz5weXaEUzgBS",
  "key39": "53T74KaXsxn16AsCqEf3Uy4tKnVKZh8iY3RzL8x8Tk3N2MMtXCjsvueCdm1jxQxK57oVoYiNkEMAfnaJMLgxNnZi",
  "key40": "hB7sqfe9QhmXu8pN4wSyyKmGv2EiSGf4copiQyZfzshCv7eoWKWDdd5DgCk16FgzD7MzJGdAVVCj9yrz2QqZJm2",
  "key41": "5gnALEotQv9zUUrnZaTp8pmpRhteCHDLg98rwuDEoDhePZATts2zhGL4npLoTtFbo9E6NpRrQx71h9tghQmsphYk",
  "key42": "5W5ajF6wA1468kvpUqKVuLfZLHexDnUBELsff9tPf146g9KJzrdqnMBNSrEQL9wG4s39cNyLLi24Adon3qYSGeK6",
  "key43": "VsRjCQgvQYqDKR7EW7Ly6kQVUmQ66j2ZCJo8M4sCQMExtYx8dK2DqQA8czazRa9zV8ri3S8ewk8nxodQ2Eeoqck",
  "key44": "2HWbzMhYXHArB2LsTA6fkK8WAx7tcrHCPc4kgMxrNBPZVtJxYy5bBADg4Yu7ytyttZbZYnFrDWoMFYMkEh74tyK8"
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
