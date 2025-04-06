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
    "46WtrBgzz7JpNqH8rhjSN6bBjmervKk6wXftjLC59mniPec8npcSf7JRRhRwx482qjUGmgSf81APJ2fdJMuGZJu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQGvY6ro6odRGzsEwweqnqgKMTCFxkpWLsY1U2dvT5CXeexZ2BCtyEef8qpBgjQJTsxFd9vqZ7fm5bV8Yedp2CE",
  "key1": "39Gg3kLMmQoW6Eis1TE91wyF66sRdRjGPcNJ3SUiXy7zbuK7UjdSK4kzPCUKtWLmteDdFnNU9gf5YahzRFvQbJxH",
  "key2": "5aAcJneU5oSEckzg6fWaFGTkHipab9ZUt6kpZq351Kz4zvp7ALYzRKBagaarYxsxkrB5u9TEvTcLCvSQwAripABw",
  "key3": "3k9o7hCVfMJQX2Mw2QFYLSztKKMnWcDNdUNkxAJC4ZGZvaZvYSoF7Pjn4Gt1vhZ9rFLKKYJRRK8hDFyNxeqdUNjc",
  "key4": "Xypc7tNZ59ZUYSQ8byuY1DzXBB8vrCVhqxix6UwvajMH1XzVmY8HWw2QWpZ5J94Zcqde9BAvdUKatdPZmMGhY45",
  "key5": "2mZ1UG5wt7ytkkBNWuspikfinXQc9ayZL3DAJupqqfK3MzrZGC7JTZm7Ng6sysEbA5nWkAEDfm87nD1GdmgEGLUG",
  "key6": "4Ae12rJhkPdXVUdx3JpheX6L4pQedBxdaqdKnY5gh6KJ9SDPTKpFbgV9no317pucEPvLaYe6YBEWJTBRR6qCBzXn",
  "key7": "fN94SHGbNB4mTjDZ3ZDVjNr4mhemR81wpzJof1omAjeEZbuYFhuenWTpT4XCashTuUed19Bpd8PyAuBmcxbe22o",
  "key8": "2nuiJGvX8RkyjcHFxeEFPyqTzoFs16GuzfdHYRThuJd6cyne3qCPYUrL4bBMBDod4LzizpJr9ZYE2XShN3wehPNV",
  "key9": "RmQv9M5c7dZmcDm2ctAT6Q2vWq74ZpTPdKancKcinfxJF4jozVxG9t6WDChFd6HAVr9FR8FPDEgN5c7PUtefktB",
  "key10": "w6hEakSvhW7Adad1eopQiuUYXELDGY4VB4Ns4PyMDNjhDoZRcmgn1Ev8iim9DDeFR72xiLPySTuiZXuSrzTAvEA",
  "key11": "2PHAk5Ewhp9Hih7AZy5RbEh7MMt8yvXf3cNo6pvrGmxgWoQWz2FCi6GwwtQbzZSEqpT4CLdQTcbWtWM9cC7QPbEE",
  "key12": "5oj7w4DGu99UZVXaMLsA8M9bmS1amjDDL3wA2NoH61GG7RdqcjFETAfocM4iaAmVuzqHYjfyPMiK8ix8ugJKcEvp",
  "key13": "3bT8krgMFnDdf4Q7xrBbq5MM1Eciv5PUmTF84YRjRc6H2yYU6z6nqLhccpfGq5LFrhpKoV4uNgS2NSZaRq1BAvos",
  "key14": "2tnfYEU1q91vie28aoN6GG3Kqa7iA5jBKN2AkZ4JS6uwotjUq1e7hyAgt57mcsTMSCj8ZtWKnCRFS1RGPaMrbip3",
  "key15": "2ehRSznssRt87y5FuzepjUCELYMcr6w3GSNrhX9KGoKGJyTGkNny33qsoEm1B68eVvmAe8AShM6TFnB3rQR7PmfS",
  "key16": "2HnvywUFGiVU47UTcnEZmV1mtu2fsiDF1vvwMEa4kKLLwTLJ9cvf712kR8tazYEkqmEGrsgREDwL55aT9Xr2TWHg",
  "key17": "2fSEvoQcAatV4PQnCYuBfrKgLmxgYU928MXkT5XT6gm4tHdSEyZ5aMDEbVPWa7mY8kV4u6yFt5Uf1DX295hRmTQv",
  "key18": "4Q8UwVWP2mAXVfUqpb35qbu8VuNy4A6zkFUrYUtSdFMsnU7meTK1hq5qcwkZ2DxPQ2F6zfK1VdoSF9pCXXe88jGu",
  "key19": "4WefgRKE3QmgubKDV3Y4SyhJbCaCM1qqmsLbsPQTWJHtHBzWtudEa6nCpyMSKj4Rm43L6CE9UC6yhCZgTL4NwzKm",
  "key20": "3covp3WphTk98KLAUy3QbVxVEk4RTQSwASd36aeuALJN2EQvaXHDQLSYJwekbNtZ3FpN85tDXujDk2DCYpj24btS",
  "key21": "Q6FZF4yfupogt8L8E3DBfBadau3KofYLUAK9os4u3PJUTdnfBSvP62L748cAo4hRFbatLYnYirb1xGParjsJ4nw",
  "key22": "5zMyUqFXsHWs4WPiEThmp4snA3QbSL9JyPTMgeqZA2cCbJEi16o1LuFUqY7KVWyEnoLBZriDob9YN4WwQhUBSMuz",
  "key23": "4pxK5Jy6zgCjZCmHN5cEwtyBRUJuJMXJsewwiGKm2gT7huazjkEjBzBgkPUL3wUVJi78cpqsUQym7XweDEEm8z39",
  "key24": "AzzTLwBCyZfZtr4i7tQJ4KTzpXRZkZKELybj44bhb1TA8fcvvsHqmU6DoJKyim8oxb4nK2afxCWmYYBMFr3XxBx",
  "key25": "4qnXkuPRMCPCHBCBoZVhY8gPcRgnjqKc14rjhtvaZYb98Cq8S55eb3748xvRPRjjtMpNbRZ3kVux95L6mYCPTXm4",
  "key26": "6XMZ9YSCWWcvUgTkg2svopNGqdcNydr17RWTUnSk5K3GWgZCg2W6cmzLeeRzEWcrKT1eEg4eMQScdFn25rYUjD8"
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
