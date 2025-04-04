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
    "51qwu41QZ7yrz4qLKDQC8PfkVbcK6Z6rPPJt6gArQDs9GX2ijXgktEX5NP49u5pqvWZMrtNZnsajeD6PGjf378AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nuii4fHMz7W9ostjF8YSGhSPiHa3bCXnwhuEv8LMZmtG2viKkseS4KfNVz4vTrL74oc8YCsu27TohLeHV2WdimQ",
  "key1": "8FZyDE1gqTK2LqgGECkbMgYnJCRswuhe4ejKKD8oS2RjjmNKMbdXv7sJHPMWsdhq1im9amU7LLRYjAupMTnzvkw",
  "key2": "3r4zhDfBhkAJ4ohLKxDgq9CwFzPpb9AbUdLAuDTASzSSHA2fijZzm8F8Frgt8AWhFvsi2doXTJ2T7VWKbf1L2q18",
  "key3": "Y75ge7zFcXAUj33tQ417fHTFWAnZRwYMi5YN7QJTDw5xNYWN61jnjmLbhfc3TL4D99M7zKh4362MzRjAPPpVewC",
  "key4": "551iVUNeDfUn5Md51xXyMedmpUSS5qicCLehgqEq67w6vWmyUhkQMYjgXLEHCCHhaTSPgRPgvuV347GH1Env6MAi",
  "key5": "5Lv59tLqBnbdiDRCb5vRssjFCXM4hzi6S3ZUaD2gbvWcdevNN5w8noHaXMcLk3eXZZcH6Ugfz7d7GpDWjTvfvbaU",
  "key6": "UC39mN884XgHLAxcA8AqLignpHaCLrdCNQZyTxZprH1nPoXGGeuo2W6CGwagcN3yMaKeZTwKzacbaQHrnmpTLii",
  "key7": "2stPMCGfAH7P2iDps5GRvWTwugXhsNGZW3MTX1WTXWMp1Xu8JKAxFgU9mEdaoJabYpX3opivBJpGXF4cY5FzNqsF",
  "key8": "7xCv8UxZWG9daffhU6Ceqm3muvEdk4QbNbwz6pxx6zvLQ8WPUoK36X4VFHTSCkMyp1eJoqsm2RYoNEteANBd1bg",
  "key9": "4AvsGm4ttLKzLS4aVxecL83L3svJE3iQKRrTRZ5ow1pPkXtmBBTKDdVSnPqjg6CpvNdMFUnAbRxQtoxXL6YazKP2",
  "key10": "6Fhy4QajEmMz2XgPQ62Xy88QhhDtEnBCZVaEB6W9SAJx8JzcT2aLbV34AEDZ78e5qgXDeW3k8d7LkGjVwhx55to",
  "key11": "8ACXBRZy8grQUCqmkU48PLP4FymdrqF3VcBBuEFY6N4ssyJaYyFhQsz22zXNM7wLHbtpv4Kwoz2gxUSavtrcUDV",
  "key12": "3JZmDkU7tUWeXHZjCYRQFBRJuHhJ3afRHCUTYqujk8pLZFUwi42N8CVkqwaqPUPg7HXk7fpM7YsDbKRpmLtxBc9u",
  "key13": "3rrZGBAJQvT6aH2NAkvC1eaRhTz9tStNKS99qzdLpupJSU2iJybggJg4bpvUNZrWrkiDuiPvMotazjcwKXRs25rB",
  "key14": "2wDCCeHb4r3YrqWjfeyYkN1F6z96hstjNRPJvuBUX3ciPptATsExdLtE2AejQvJZqwt5Ai6LQMY6ejGxdGwsCQTg",
  "key15": "xbnQs4GHxRpMvtWFEkFkDpDV7MdEVNAD7zCaoSh8XUVfkanhbWWJY7Fs6KRZAgpamthii49NjhcS5qKmzoAmKux",
  "key16": "5znn6KkbYwUVWba5bEpnKrZr5oaPt9dovhQKkMC31DLWZfbaGa5jj9nha4FDoUzK26wsYXdKS5MA9cSb74Y2qpXD",
  "key17": "EjUTXueG8JjtbdQ7xbpZTgBW6hDTVLaQkP8N2qFuXfFHbwpp6KcpXzjoRkQG9vRX7MdymDn5t3yvXzG7DxGnuPk",
  "key18": "5XKDKq7CasiVufSdP1P5YFZrbfRh9rKu4kPVmM5TNzezzag1cfn32To6YiQWGFRBvrQs1vNG53EGMzwe9Vw8Lonm",
  "key19": "8FgL4v8Jw4TsEffF3Z9w56MCpwYR29EtzBFHgjqNJGDJdMY73VwzHrHS6Uu4f3k8Ed7bbxD9pgrzM7JKuRkziUr",
  "key20": "2nmQSaVeuG3R4WLUdhH7gFfFxkcLqcABXZDyACSpD5LqnL8J4i1etM2X7EkY2FgggsJ4dSLSJcT92G521xfBsPs2",
  "key21": "4i43AUBSvRj7YYXQbVEc6Le3pPZhXp94TC9qjGEVYiznnxMwctXHeujLXtZZ3FC95WowSn1wnKqmdF2f3ghBfF9L",
  "key22": "jqkbzBKKeomTguh5Pvd8tAFcVBFfhGWb8qXqWxc2QG8uZTRQHqjKJm28CCc8vskrHHd2g1A6MMTqq77YwrV486T",
  "key23": "2w5r7vjdCYwLgjeMu8E7mCVhST3JcTm3Zv5byJK4ZNvDkgWBncS658emzXwxkVDq4VxVxyGRPFJp8r7smTWYzyY9",
  "key24": "4A7osSK6cb8nsvUrdvDxCgKC5KgNgzuYVVcwndssptr5K4Djj7FDNKQfosNCv14JdTqQdmjy9E2AeRn5WQY22gyA",
  "key25": "LC7teosFhYBUBSFFrRFo3NJbB5fWLTtpSX3aMcrkjpZ4xPMNJ3fg5Yg4bUgCMvXLD2xXVPpX5AH4janNYyuiC57",
  "key26": "c1R2mt8mjJAKs1GCZjrg9TL2HuoAKEW6qWnjX2NAXhQHgaYdWoAW3q1hMNPX7WJWwSaivcHKnCDyA6PdsoQbXYK",
  "key27": "2KoWvytS31nCYnYys6iQfifBcWmr7wUtM9gAehWpM15FnA4ZLkT6Ju54i8xLc89v92iTV16oNEeQknAu5uKR76Kd",
  "key28": "2YeXochHL8a3AamCZu3PG4d1WWoh9UCDV5XjnAXoELNcaj5CgJQ3R6co8VwYQP2pzhapgKAxuYmucJANXTRqJMD9",
  "key29": "Tf84zeqtVbVMdFELy6qJ3fbys7VytP5xCFKV687JxAd5aEr1WVHwCZtQN3NDk8EPsRGENXhuGYCmxbb2qFrniSU",
  "key30": "5fzZSH4bnWJuPuxH7Rz1cNcXDuxLrjC7DzEouPkFJZPhGm1X7yujsEuiyv6dJpXNjgYeAnk4dJv2esqgxm2nwjGg",
  "key31": "2zUYfjBWyPb8YciJx6k4FrAAJw7ZmwtrLkuMt1n4BrHSzXiQxurhd8tCGakt1mrwtp2QnoGpQPzWHVC9r3wTze8X",
  "key32": "4vPwkuVoXbyVApFCn74P5sXwM1ky4HbkgPRLCSpUzpiouvDKyqjY8q39pYu7VxovJLbhDSoS5NBT1oWRzoaMdRvE",
  "key33": "5Livzmz3QuwcWQ6imymca3MCd1zC7K1YUCkPrS27kncZqKgpEWvmnvYqu4dGDmGWCZJQMgmQHTgnqmRT17nUf2yc",
  "key34": "3F4msHgTfpho9gJPbtQBzhBsfFoUHEBR87B7wi7Vx8by7VXE1deg8qcEkYQqCMUfKH6jqqFhs5UYbnKUm7FmZKwJ",
  "key35": "2BKhHrNpsMCKvZB4Y49vy2kpYRcVEJiWN9VKmp9qCvmGcPxoLj3YqPyxMjUFjkJ25Tn7gtUE2M75SWSL6v57us8o",
  "key36": "5jHrfW5WRL5K7BfDs4VHR3nvbmEtPUCnaJLR9i9LAQbynspN8oQsMmue8bzQqv72ZTWkrt9eTJTtFHa1Po3LZLQw",
  "key37": "37odx8umeGA377G4fpHGv6wLsDtACVHmp4bA2n9qZjezcPevZcYdFPWPPFtgNMpfBRvGJqpAS8KyRJG7v2umwqEM",
  "key38": "2AB9ZejwkYpvNpnY18gT8p2cPeaQm9zARN4Yr9fPBqDcai4n6aMQTLUrEGWnkckxmwGqQUoY16XYW72TJViqWAYb",
  "key39": "64Z8WDvk49zTJXRC1pjxZosptkfJmtpQ5QH7uR9PQRt7DfZdmtRjci5qKVXu666CPQR2LwqYorRaF9oRiS7SJJby",
  "key40": "24o3jc7v7UfbBN17nCe32kb99C7SMNc8Ni7KFc9C82yy8wJ1Cee8XTUpzfyL4swyU8QcmYww1ArAEibwBoDYjHMd",
  "key41": "4bEwsL2rPrfjtjmUmiDGJiAru78hzjxQPS8Vo7eJbtiY8QoARhXQaHhwh2F4ATxiVs9bLsj2qJtREuwhJRgQJwTr",
  "key42": "59UjNioCYc8ZvGwZQisXLXMcm38wuQhCsSvYLQxTEifsjmqpXSe1Qx6NVz6KmFocgakbJcDYpcMYnTcYmmVzFznV"
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
