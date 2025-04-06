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
    "3JRq1uCzLKxPUTtE9R3zRYhU2rhuQR12HR58cFUWXvQNAk5pSMTVgb7zW4Ecm6TVaHWeFgJC6a1rU1oQrqcqydAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FL9HobtqFC9vBQ7VXRFNBoJud8aR8D1yDs8JczGxtcfxD5SJanC8nC3rQfKhjDVhoM5eGLRbXQ7KRmwRHUmasVq",
  "key1": "5WAG82LBTNKA83pL6icPASN85FLTJfNtDKvBm84UZxhvUZ3Fhx8ZiGJ9GLTiqdewP8kw7W1gFByKGHEjXii9pzzo",
  "key2": "1A3tZ3jfMbHT8ugMkB7N171iKapPW6Ef1knHmaqijx4iVVAECX8g6dLuoPqxr9c9Y8T2LnCTkWrfJJuRjixUW6k",
  "key3": "5JtFueQrut55ouPphMVxnnbiytnhVbsbw9kUpdrZNBf6Z1tavSabev4dxCaGDk7WrhVtynNtej6d2QJVfuTreGyD",
  "key4": "PsEpHQePG5CjxsKEELHMnRjgSCHBNsjEDFeRoq1QKbFAzru3wVXxCncErDHBdgVm6kx4ZAKAVB1yrFzhbdg3v5h",
  "key5": "4Hvg7wG4bQerDut85mVxeSmDYyU3XEtPwmrKJMtBJZXNNjVLmEKfjTU14tz2aJT79Q2LitJBJDEPtrsufKHMDuuL",
  "key6": "5ygvLBCZ6qDASnsytXgsPhbGFHmphNvA8RAERNgujFTfUy5Jy43v5tzqfV4tjFASzpZbKNYf6FRi5xe9KW4Y6bfm",
  "key7": "5KrpAycLijbMaoLxpBDpGrQHCJyB8Rbpsc719sraFinNQPXveittvHB4sXnBsJQQFCUqRxRo9r9jngL18gEukswE",
  "key8": "4TxM1bjj47hG84NA3RUD9HF6gSq5wP16NRY42ESVHMp9b3YQ1ttGvrSDAJkAQbqDQfBBCpKsAD5XpuxH4vnK9ojM",
  "key9": "2nXG6oWxPvTZuS8JYJYgb42fAFqXCVzcWJN96ugWoWbdUmFgHGg8wjEKbCeMUAm3MNGhPVYDjAAgzXQuwUjrZFVM",
  "key10": "2dzKo6b2DwCTh5KtfvXpVaL53tafFak5aDe5B1JaCEhY6g46iP31hfrU1NSsksfzoQWbZKoYBj7acgKqBMG42FFd",
  "key11": "SoRLg5JNnZBxXF6BNGevbffqY8dCKpWiy8Sd2spgU2QEp7gpcP2mkAWdiZcYkTPv4yMyVAUhEdJyCmtk7fzf31G",
  "key12": "3a2LAyPCignbnwKQyECLaWXFb8Ny9DCGxWZRZHubsR6AV6n3M8nGBNUca98Vdfep62RzntWuAFwLQwgGhTYuDUBT",
  "key13": "3G5NTXpWihpBfX8DvpDMMAkQv76z1nv43JUa7SbdWD6DVBbPGQBJVwgX2Uny2X5v4grz1bZagsLCGvUJA8GDqwGg",
  "key14": "2Qkx6uucTq1oqBNuSub3dX1pczBPXHjy4EwA6R5FHXHZtvUcqAMCGUQXcJ6HEG85tFYhQXAASqc3GrKXba75rkz3",
  "key15": "4qcdu6aQXBuMC689AKMeMWEY9WUid9LspXEngurku7cKKMTFB9mQRqunmuS6i7BqSPMiPBha4wvhTt9SVn8zHTyD",
  "key16": "2wLau14FhqSn5dr7u3qzpGeiaZYGedAzpt39CzYRGqyDkuDQorS6Cj2Q2ACuZYWub9XjmZmVXerfB9jZiGnV7BZk",
  "key17": "5BNgdXm2DhKBtBqSnH3EijKSNfAxo8L2NV4rEYRebj6pyMWeCNDfWe7udrVG4mnNxwESB1dQj8VqgMauc7McukWr",
  "key18": "5Fusj2XwPY4Fd9pVxgKGWR3zekPATqDmAv9CQHTd3XmCsddKi6rAAwyeAwXgk1X3qLyFyF5JtVJdcSPFZz7ZmiiH",
  "key19": "3NYZZoJ8FoF441EwPbzpzbGRbZt4dZxnhRfe4xgrXG1jocqRJasPY7rnDUkUnzPpPFf6boRQcbBrWXDxnFwgWDkJ",
  "key20": "3Hwzf8aaU3v266qjh89oBPqSyz3V1wBPegSsvCKgMoXuyrfRp6mkx1PT8np5tXxrzbZxi7XJinFzW9w7hUGLerqx",
  "key21": "5kLB3guQCRiByzzAp6N8oeX7HHB1Zstmjwdxb4K5JqgQx59tmzv8VfV2jqhittacXgnB3foWFyLv27CRNqCaVmzz",
  "key22": "5VPEARmJDK5Woem1jmoKe31QGMiwSurZgoG31kKQY21fCW4c4o8DcfUQcdgrae6qG8uLHooAvr1wiFYojzGpxvcP",
  "key23": "36ZSPghdJQuxJnTDSmGJmhCDHk4DC6CzmYafFW4ZYJfzXDJDCTD1GmX3NjjozXHvD24MTkanNNfACUerPCu4RF6n",
  "key24": "YCSjgGXWYtpKhmFF8KcycY752v9Q5VjduRQhnyoMNYH6DCWm7nMUfhkRfwD3ummTmxCsW9XktEb8SmsYkpHFxWC",
  "key25": "2ntPJjh5w3XxnQseXxcRTj7jt75Hmh2WrXHL9mktnqiuESggsJP8gqVSmHa9Wp68ZCC8rRg1LwsKutPNUxy6TcnM",
  "key26": "4Qct78mCHpzxqTGVCskin2pHqZ9EbDGbBev5TPYRsw441SFkdQnFTvBDURQAQmzfQNoh576vdxPqPKJWy3UNvs8b",
  "key27": "Rw7NUDcpLpY79T1bbEWeCgd3BEPU3gbMm4dP5y4jkbuMf9snaX5VzEcvnN1g6uVrFZHSuAxoJ4ATawvBwkGrBZo",
  "key28": "QsVjuW1KCN5QehtDinMKmuUJwxPzXqtoeSiKYHA4foVKcvLQt4bsDnA2NK3MADv4UXUFkD6Tv6i31rzvuNiNfNP",
  "key29": "3Zj9ZRqyhoEzPuJH9KdPcu2F3xmA2dgKtiecc63wE15Fb4EjhYMTiDBmtc6oxEMcvH2ADdxViMTU8YRTosCuzKpD",
  "key30": "3F56jUSmvujhA2r3UwrFbLNpJ3gRwRjqYDmChs1Ej47r92BRgiSn5xe9LZrQEJ1TNXuPpCjETGeMLCpvDAtE2tZN",
  "key31": "3vGsGbPjzTj4HzfqMFpRhbzvxEqsfAbv5GKKASvaKws2dJHK4D6N4v5faEb1aMrSE9bjYkDKwKoiA1Hwg3xZtUzi",
  "key32": "5DWuC2q8rtM2hrhpX38n9AhRZds8gjHF2RHYCR3fYTxVQPA1czPmaLRguuW6NvqQWrD7L2iLkfur3X5hTcY1NSgR",
  "key33": "58GjgzYmHrvGbQUJemQ3DnNwu2DUWtRuNx6AcNz8eavb3mBJjK9fx4ggzRyAib9AtZfSZrSZ5yuu5AddDd8HceL8",
  "key34": "444wYSY3MZGYcsPt9aYB1vaGNbdet4NKanfr4SkvqT4Xi2RivmDccShL7C33k8QQX4vUCtdQ6VB1QzhMY3Xetmqj"
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
