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
    "5gV7iJY9z9crF8PCpnFs3K95rsT62MWb6s9XTE7pHWULMcAFYT2H1Q2VKttg2w4yFEFZRA2cyaAKnmvLPBSNb3Ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JxK3G9J39JwdmdM5eDCjUcoFu7dZTX8NM7wqdsY2FQTwnw6QXqdFSogdHMBWFryMGpu3h9WHtJapSSo9rQ4j3mY",
  "key1": "3wpCVusdFE1C2Z5bfgLzq1bNX18vDtAjhy5waDGAxekJYngQiG7BtadUiNVQhWLpJZcCMUbTdpUFCKha5ZTR2C7Z",
  "key2": "3JLPqiJQWpxiTh7ZbRwiuirFrYfD1uMVv41zjL8a9LXqVSEkfqfMqRgD5sZsijTcTMk8bVmJJaenaamE91WKEsCJ",
  "key3": "613FF2b2yLS2guyQXXGMDJycBm1WT7W3YK857caGs44PBf5JgLKsnfCmcDkjJfJ8uPR8rMuSCYs9UDZyvWsocZaZ",
  "key4": "2pNBSppnUWQd7zF6VythZpdpiedvX5VLzvoAjKxws4t7LtxrfS5aypDz8Qvq7dVn61oYLcycMeuTL9sMSM47k8eK",
  "key5": "2Wp6k7EmCA64ynYUaCtyjy4bvzHssC9daQQNUeuBDEnaz24LqPEuk7FT6gPWi7GuCoRoYBjnu8vdLVDQydAXuvVY",
  "key6": "2uGVSFoAcGjcsfjXUXi3VZiP537jhaXeceX84iAB8353W6jdBr7Ehf8VYb2UnDoSe6m62PsCXFsattwjMuAzWxJn",
  "key7": "3i17ibK2fTFtw3iofyUNuSg73oFCZQRXi8gY2uJkNf1NjfWzsVwmwq23wcgXKmoYJCL2UDnbf3gAg7kQQ85XWYMJ",
  "key8": "5qU9hpQRZEVHJedpnEfj2m9NxQkqLfqRAPmsypfvNRbrtN1T8WKFDLNiLmPwAeHD1V5doihuwmHWcTuCbvitj4nj",
  "key9": "wwGg9bcoft6NpABfjRwtt763DjK1ApbQSLPzykLoSrDbZVAVTMhfp7fxkWGoYqniVQHxTmDsK338d4PwEVbpbxM",
  "key10": "4cgyvpgB4LKNG5S2h2VSmQ1sxGqgwkrmWcBmn4jVXxT983gcm8gUD4hKcaGPoBBj454XSogLkivxMUmWbrzSYDrD",
  "key11": "33DVnZAT2SRycLUwbTKeqjxbXfEWcRbQ6Cc4UsW1XkqfzP1sGgJ3p5XLT29Tt1RKKBcm8FEWde66HptCRRBYKjGw",
  "key12": "2PY5AMfEo9psNdDoKiapzGQzwkRKfMdJcXJuhAu3N44y8R1ysCTCQQAyCNwhMsVD5DXw4gvKtK8eqyvbjRDhYLCW",
  "key13": "4o1ZaWn8H2gDApzgV9VU7M6GaJ3K57GaH21Yc3hXwPieFffAkWtPzPPHCB8qYGViM3kWTWJEBEJaYqaGSaagfQJ8",
  "key14": "4N4pYzsj5GmatdoSnjAFjd7bi8dgks9Mr488wKHHmSUyZtPk5BVdeJ9jvsLWmLs55K1Ef7NYqr8Wqh5TKi6Cw9x5",
  "key15": "2j3kTJyqvV5raaniYV85ALvzP6hRCwPcQKzbUWbdSQwJNeBayUHEmMQ6AJhkMhar61YpAcLefqAcFpKvkqnYmBVw",
  "key16": "2boDrjBmSypNKwtLM89k7kJn6XBTp6W2schE2znGu8v3zXKgtmxXLZ43CyXdT4nqzjR4Z8odbWR2TCUKGKpGfAau",
  "key17": "3Si6L7Ey7y6xeRCnSEcWeEpUmBYg8wY4N7LVkFSbWzEro3QTUBtT3N6vnr1bpxG36s2RjXooGe3uMxgKeDZdodFC",
  "key18": "YW1PnDoPF9Hs1GCXEdV7Z9yZGY7eHkFtxYtotoS9AqMyNFirKTZsWD4EonRTEtjLbJCth9K9QCZB8y8hs38CkZC",
  "key19": "1FvzHd7XqJTURsHzp5nSFNhUki41DDcBKXCoJVnmd6QRjSK3z96TuW4tRZxCcWB7W922mrdBLWR94xbCC7LpxFs",
  "key20": "4MNaJtSybFZYV3HP9HG8gLh1CfS2DSjDRV51Y5BTksaYfsx8jimKzDgg3tB6SryCiYHQMjSRqZpnNqFxELnMYPHw",
  "key21": "2tvEWSwKTTTmDdSAVfhaVGhJN3SZPwJTWfr4mAACiaQW9K2k3Jq55anFux36uvt9JhwuRFz5R54G6vAMEiDPRJED",
  "key22": "5mPkJsGuwiFY8qWoY6xkMeZDURAMfBsbN4PSuLTFehDgae7QL8MQiRE1wuF8CLquCPwtokVv6QjmWyqSz7Rs97ss",
  "key23": "5MZetM3z3YqhGiaojxj5azoocxzSmfjdZiCtuzovJNEjRGbHr9WrWQUdQcfm9DVMux6QY833G8SKkneevMQX5yhF",
  "key24": "2L8pS6txJVGCrKu7eYT3dhHXqmCyHTWZjTXLdJbwfhNkACP2Z5d77kt2akoTk3V8hf5qonqL9iS2q3Qojh83gVpE",
  "key25": "8XGqfhE8a2qFVSXMdLqMGZQ71GKUQD8J477jqw5Yg5EpVWXAwDETHZw3ELjvRqKXzUqWMH6kPmyVYiihNV5yovM",
  "key26": "4ctc6x6YWJ2StmWvPmSPgttMzrgXoNKp9gr2QNyEZT7VWcMrjpRXwgo9DMszxx37G2eFh4JAo48vrVVimroyXZik",
  "key27": "44cUjq6HbAny7npoUJCroUupdqQPaB444h2nxyzw4sUaB1L6oL3mY4pD4sCsZNsECzMtx6AQZoMWu5iYiMZGBRR7",
  "key28": "QHcY3Ysset4fmjQ7MR5TnL4TWnma2fdkk4bKogtnrG9zXJNfHeUYWZna3x1vQfvbffNDYNfL45WtKdKpLJsNio3",
  "key29": "66jUoAFig5j7PJB1jnDZLt2AmcE7abn9g6upj4sikKvREfbPbiVPEdpnanFA71ag5SjgkELnMFdAq21QoErwHBqA",
  "key30": "2DCYqHptvznkBMtieXiSMyL1wyMheGHmFD46BmT2KtErusm5iyh2LnNZHbCjrMTfENGBAT7caiAu1axAgEiXKRQG",
  "key31": "Lwi1RRfpt8cpyW7zs99KAcC4kJd8YXssMpYUVwtCs3coG3tjCvxyELuSw62d2RQx9ZrE9x3Tdrg1KGrMWPFWoef",
  "key32": "3cEGJhKy125fDnJZJhd9oPxfPq8QQbfCtXSg14gzknzRWcLd22UmYNkH3g8xqKj6jRW6bQyTcjFgyEAVX37PUEnL",
  "key33": "3gjncUqrcDvQNNeknALJhW1fqprXiYyngJUicrjVXNEsEhewXBjPHdU9tLPPfnhN2fWBF6jbfWpVHjTjoFasf9tj",
  "key34": "41JNff5Xw9zU3Codiu9L3cLgnkuYCuZkSmTXcYm9Cz4G6sbJuBi9XXtRgLfhrFNF8YYHgWN2pnMrpz6pxSArpsjK",
  "key35": "4PsNUVfpnW7agzTy6421THhBkV8oWipFs6iABmSBYb4GqgQ7EzkP1DkWPPBmQCsum1iLQL5i2xSXaHSuDvYnQvPb",
  "key36": "3gErorgB19Pdq1wpzGjjJ9bpq1mXXXVECXB8zJu3zAjjW2ysSj1HyPkbeT2FpdTQbdPT2aUrYP1wn1YJZgYXToTQ",
  "key37": "5GqU8tTgviCWJJv6ag5z9UzAg3hnYGmJw6ijsv6fC2b5ganSUV6fHm9Q9BpGFk5UBq5WfBjRMK6iY2kkpD1VsS8s",
  "key38": "5nHBgCVfavPdcufKYfuySCKAggcAumq268U2ypWk7SCpKSjiaYrHwhY7cw9fVYGmwiQrt9mxWhmKTNaVwRug5jUW",
  "key39": "44uE7TCiWsbBJtefPxqSPyszZj7GkhjXUoqrNwLFvZg8pLpAjG9u2KxbqLMPhLhpCPVZM9KULTiUg1JtRE9PHh9n",
  "key40": "3vcq4SW5xkedHoM71Xz6r7rDkE5AQJyUxCWZyYZKAdE2jiZ12f7UZa7MhFUDNqcUxiyTAaNAwkpe8NSfewqnrhE",
  "key41": "4Vch9ySp9PnNnwX8EZ7qyMiY5p4wWQYkXaTXViRDK3SvZky9r66haTH9KD9gL71wb62Rg3wVz83wDszU7z3uzSSF"
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
