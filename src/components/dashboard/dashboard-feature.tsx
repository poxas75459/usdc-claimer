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
    "5XvP3hYv9WSddL1uXUSU7XiJvXAenf4KqDN2tqBgHYWQhsBjEVfHqUSmAYmgNs7n5LkT5JRHidcNH97sZp2WF5Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hMNG3XxRTpFzw3PyrKhWiyJtYkeBf1bzpKA1SjWC7BKyv32mPD3gczWS4jLMkxm4kTNED4uFu3bJwJb8uhtgjBc",
  "key1": "DSXdu5ReZMxQaBxmuEKR9mvhSpYfwFcZxHuueppVKWhpDZMgM79gdPGe6JNWYGESb1BGYxkdQbbbBhRgGLzhdpc",
  "key2": "2WcGKtV2WkuGVDJJmvGGhE8U2SHdFPJpDh6iLRF6Hqfj285zbXzo669Q1EgTrYg4YdCpb7S7dCG1sNjBxK2k8cJs",
  "key3": "65WaVJw8W3hu2K2rH34vRGfrCWxrDpb5tzUkXXCNzcdDkXJpShNDhAJdmYCaKZo77dFBAhvd99HNHHRcQkeRk8jd",
  "key4": "2VK7F8HoH88G3DBFRzJVseqiuZno2PKknXVRYvFez6zF8FWCdbE7c9tTR4qvdb8STVXKa5wJy6feSmJmoaa6Dhea",
  "key5": "2zzZYVhGM6Ayd6pkCT6bj3R3uJNZVgJGbwsDxmCLEQQcKiBqeBQ6JbSY8pjcHwEPYyRYFktdowXs3kf9mxsjYwjH",
  "key6": "2E7V2fmYmqDQN5j9wgrbZmu1BdbpVGHamAgDz4EcGuuHwir8wq8SFmDhZJ1kddBahE4GrjpY8zFYErymzUaq2bxJ",
  "key7": "PSrqxaY3XXC2DTv1xFiTRgK33Z6751bRe66hix4iPGyg5SdZwReZBR4JjfxbSTmRz8xwDVfV63cy8U1htryJxwL",
  "key8": "36aFnW5TWGJpxyqPr2uzuMCNGjmSQTdCmAhf7puZyBCoxb7ssTRnqHXqw7jehKqiEWSDs4Q9D6r11McU8X8nB8Co",
  "key9": "2qZMkbJeD6xRwuhZNvSXoKj4cb1jLv81X6TNWE4uR1JrdzmphxLUND8MzrYDiJaebXYw7Cj9FJbHHA19FPSjn5k6",
  "key10": "5C7nUHYNzzWH14qK6NvVeFaLbBWksY4NaEz98rAVJnd21BnVUa9TcxGgHGUeBgHj6ByEsCo37Rer3EeaoBEFFfx1",
  "key11": "65gdeqDwXhtp82oaXUyH7jCDUGD41y51js9LwUEAcAsgyQBwN5GVCByjQr6uHAe1UGgdeiQRvwsdXtsiAWFzNTJs",
  "key12": "5XesEDawtk7v8kNmFG7qm7fYGyvX4rakHYdqf43b3rGK4Trgz3dq8fhc9aZ1gN3AGAxxvXzBJpTU1MCBCpwnpDaF",
  "key13": "2r4MubjTYNWbVuBtJZoL9bDaTrv1qwwg4G33PbyNfyvFXpd58R3jTCWjJqDXeDQoFwyYCjDeUFi7XAXwiabpAATc",
  "key14": "2X67RLdqVYFjDGfEqtWHw775NuzktfMs4jSxTBAx5wiZtgfAxmPju2yYxusMdSuAQRtVcNFKcUuor2EpizgnSuE8",
  "key15": "616rjp6hQVAZck79hwKewq1kKgAX1kKGeMsH59vBscRZ3S6Xb3HxVLTqhXNWqYKJiQuh1cwLqYaXoUb2GT2o2KbS",
  "key16": "67oqHgc6hYVDoxLTaGHo6UPm6nPqTykwD7ESmKNHuSpFfes7U1hxNUdAymwjNW4T3ps5Q2efcNVh2WYgoXBdmDNS",
  "key17": "3J8JCNByB2nWG6RWwNrBRC4rq8NibWZvtGgNcWjqVMKMcMXV35yPPqht84qgP4Yohs7C4zm2W3L4tRPfW2nkoRp1",
  "key18": "3Crtp5tx8KYDsAAjWKd5HQshhiuCfvV5Bhq5kLWYnHWw9oMXcX7hqNyjUTadP869Z8Gs1MjdxcQy37cw4DMsYFVW",
  "key19": "67U57BxXkWMA5xzreYgnFey6Nnnt4UoYtefTpuV7RjkdW36xDi6qFLSBoebkj3KpiiVW4Cvvjav6tckQK1HSLZh9",
  "key20": "267JBb2Qm1z79KgqXdBoRwWy7VX4bSrEHrfRvps1t1LNwiWoeaa6V1kQc6zPsdvesriQiDT5J6TpbWBuxYXHQ8q8",
  "key21": "61BikiniNRkWSkcfnd55oj8jqQBjp6x371rZpusWzvFVJwHdssHMZunexLQQEAJiunrX1CXZM4Ggsn4vPBwmpQXF",
  "key22": "2cv94XCFDk6Zcm5uKvuDtpNv8VLy8PfXAFpwMfZZe9VhTPhSeR2baMv78hXMQaG9kUuHwPNyTeCgm2MRuMeCQLhm",
  "key23": "xrLbJCZ2dPcZjyNYHgoUf4A1n6u5DJCiihf276zGGZ61t2KGPCZyhRGMAYCPTTNtAecMbeeb2pyMoFyQT9nccPS",
  "key24": "5a2p97y67a1DGh1CVCGbT14K8cDhyEnNKxUNMkuvGZUtceaG2WZ6Hf4NfvA1xhHR4RfCGciAfgMPQVSL6yvx4rtR",
  "key25": "5gP2sFeDSC398QNULjU1S8jm34wrwNdqmCsQiimTZ7j4SD9mVggvtrx1dTaCLsZchuUj3mcqCXxgMNtDsKQhXXDL",
  "key26": "5xFKVfzHBJW4sQ971Nr1g4cREDfdArBmt7rXWcVxVstMUDcjoFeZuTQbmspR2cMYpvodGGxmY5QFwzj2zhnbY7xT",
  "key27": "s6wGCMqN8LnQg5MSxkEFnUiQ2spLE5GGkqjL4UV9d8FffAw1sghk32opDVfPdZv5vwmMWrsMHf2QR9WM3uXSJit",
  "key28": "42vjtirHaaoeM3YkGV7vZ5QesNxCVHTqXfEQyVAgGeY8GTGTnc4k9PTaGgTx3jHJxrQ5LmyQyMtUbDf9vXG4z39",
  "key29": "33KoRQUtm5Z2ngnUab5XRjsWys7WpUyUaDK1cXjd6wCQMg4u6x7oukj7YwaMAPEt8XLdDma5EMuXrSR2hyvTwnuc",
  "key30": "4nuWrz1cGDwntb936iBVpt1htnkKFb3J7vkuSB3TxgDAucx3PZ5sC9t2HMxttKoMCvNDMJceUscd2HbRoiajUJ8n",
  "key31": "5qW789jnvTQY7xfk49GoWrZSpDhNQeJs3GhXZD7air9Agv1gR9oJYczHT1AjhLwf5C6EX7pAYBQhJ8pcMDNcTPb9",
  "key32": "4WBonZcmaTqhUNfV4RS94zqrHu3YBbzCB6bJWm8j7XJ1HJgBE9x9Tsei2ARZJzSV1TMkmhTQdwttTZeN9MXT3Q67",
  "key33": "cBwXzyEnfRhTftSs2sw7tooHxRFMRGU88bih3vFB63JmKo45u3QFdkfrfrhpgHqTuMazAfd8hm2eGDB5C3mC1Fg",
  "key34": "dx8UUwP11ZB2247xtPHweRrp8jUdgo1anLn7yekFun9zfpXCWevc97pnkPU7e4UkMU3r47gBMGL7uLtFXB72xB8"
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
