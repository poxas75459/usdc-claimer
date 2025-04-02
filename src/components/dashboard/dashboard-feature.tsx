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
    "rFFBPqkPNVBTu1LnkbfUugQyHJEXZP6M1uP6g5P9g7VYebg65ZsYaZ6abBc5GrjSHbXCn3hgXKcqQtwQesXCVWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UfobHpAQCq9NVa3YPPjTGGfpS1Wy4pHfi5Zkog6GSkWwS3DWdVf5w9Y3nken8m9Mrsdy1JDAv716Wsxxp6y2NVE",
  "key1": "3u9847k4PJK8iA7PUqrRzxxYedJxbFwPTxZtyqePJ6FpoTSLxizhT1n33adBntG1AkVrWCLkK8HrnTxbm1PR8aMP",
  "key2": "3XWZJodQqgzEUzHXo49eEmHhimHegPLmCXHUPtZGYj2isPv2xenTE5UxMmfCSLH3gE8V1Dy4VQvpXEknprUqvb6V",
  "key3": "3dHkG2LSDiFh8DULFzoYKSYBfxcaAsSeLJ37hZQHmq4YqrwxLdkz2WLCzc95ivAFFapsKGtP6gHP9tW6exipjnrn",
  "key4": "2jGtyq9fsEjQ6LmC9wDzr1QavyLaRMehzmZnezaqXUEuMgsGNkgTHk3bXPhnBfzUtFkCi3oKrJacD1ruuHtTPr7H",
  "key5": "3J4ekNrxVjchqK5gnzLKFm3x8PNTwNdrXtqp7fVCmM6BQvovUArx6kxaB3rJDDYG88ALWjQkk2XNsP67BWZBzN3S",
  "key6": "36GZtwiJ2oKsowc8edKnP8LV79W1LM6aCLZQyY6pFZV4VpUaD67UAb4KnKHAcDj6fmqztbaVQ1NFjFTenbM8QVJj",
  "key7": "3pYt3AXX9Q3FhNgByzCQeBNbDbdZzneB9EwRGzn8FuMz1ZoopYLBe4NqAcc5ZYt5o7UZsgcgsNuw44voiBHcpjsG",
  "key8": "23ycAwXXDjSQ81ZkCRbQ1gdVrvdxg21kdQ3HanUBQd4J5f4tpQMayqjX2n7FPogGxdyJLftfXFt9gDMTFCbQZoHB",
  "key9": "2Cm8SNq5WvN54TcboxZMi2EuE6RxgygxFJKuPmye1QvyPZRW1Rdx8joabaEms7X5TmaQUyxY6qmb6fGyUHfpY4Yr",
  "key10": "3qrzK2ghY7Fp2UqW6yYWLSCcNqEwZaQApBUiLwz8z6qiBnEKCXYqrxBybstb4QFR6QzbXFqFX7LKGdkbGXycFTpC",
  "key11": "3VAFGqh4NH6wK4Z8mRNXYsVSJ3F9vYiPfXKDsR53BybCq6cwcHshvL6cf1eM1waVBMaHB7v1gNTiZGwcarcJrZL1",
  "key12": "2H7fQUMGT9ZbUA4a8aLGPdNsVtNNrAaF2JfpwsoFc3H96e8mqmnpEeBHLug2fuwKMU3HBeKmkNR4KXN4L9yZFzCi",
  "key13": "5cNTMPSEFqvkPQUceEnB4aQAkn6VmD2xGt44QzzKGDrtimNZci9m5pjgBJhqtA9DdeQrnH1v2t29FtrvH18BWjZS",
  "key14": "5qXYouLJEi1YYfep6iAkPsuweBHfDZtJuaDeHbDaGDFgptLX5YBnHiS3LbWBKkfjXsuup2ej5TB3L4UYRnAVbe6j",
  "key15": "5rMLAyBqRnyBFhHsp7SFuK493SsoTMpRP9rygrqh4AhC1nRQQRJ3aWifbRg8NucWCToJFs6kNuKp3pyPqy3kkJVi",
  "key16": "4wLGXXRh3tQkpwxktSQNRqLGK67bUjEfyUSmdtGDW1obhaZbXPJzotJYyUYGpadAQTbPgD379ZsYcVTgvpdyrb5L",
  "key17": "3QkB9sGtfKXGZCGV3phKmt8ogkkSQWHmK7X928wMe775U7xEtc2zvHYkNHhSPHMxkWi6oHU3qNgA1WT4TvwuvRzk",
  "key18": "2d5AqNf1TU1kwgqMGkGXW4m5oNBVKfkUm5xZp1akkCXtW7Yb7NpSNmJwai2tZ9DVxnRXMr6STWUyEDTwLHbu4DPn",
  "key19": "3rVDHMwkBfhxzrzxcrZhpfwmoirgcVEguidBu4YLdwL8QEyU2FsoDkziGX7VETLFvnzHM7NwXxv59Qx7LvRLXzAo",
  "key20": "555sETHVV2FGYYdgFjs75GcPv3NrGjBm7uGNfwY6wvHY4pzRoVVZE7CXCRirys787EjaaMjsLtEbajssKdHN6Nqo",
  "key21": "3NmQkx6WHo2WK4PaStUefijc1AcLJpYC8WspfHH3uHNsfEL5216DhUG5XgqywYoeBpZZz5JizfNZRgL5PUbJXbmy",
  "key22": "3hSmRp6qCqGAB4EkMagT5Fs6bWD97DMHdzHZbGyoqW2mqjMJX9RanioVfP2FMuLXDWRc88LRk5NVYBGAtKAcLqBk",
  "key23": "Nzg6qScfpDv3b9VXEZhVvHBrBjDXJUT316m5t6TiyczKH1rwGxz3L6FjJ6iJvPQZiXE9SJATBhNidaPpDaR8JJD",
  "key24": "3AcbeAnRcaJn7Gg7tVuDrfoHkxyxwNU63BU8CULsefPQumqTJqqSbtbFmV9jYUwYHU3TmKP3pjtSPpuFCz3y1iAj",
  "key25": "12RHsdiDTgpVAkDPTgQKSWFGGUq7rupJtLb4zboVsJf835A7SSosmwnYSkzGZ9Zf6eDiuuiRzraTcL8v79Lb6rr",
  "key26": "4hUDmepkQB1xCNmqeqgHWQUtVSjUS8Cw92o5e7xGmx5785ZSQC6XMabXJMW7vLLNZxoYiTWWtiW8j6LNF16QXnJh",
  "key27": "45a6f8jHPaNQCRsyeuqwm22bVnn66foi8w4iEfqyTmevtZRehaje8xMzvoV4g7uwB6NAh7s7NN1i84Uh18jPDXGJ",
  "key28": "3w3bZvpiyUjcoutFSdhAhMXqpvChBvw4mmsRiwqLYyofTGkHgTKGkVqBFZkSWCKxb7GXRnp4LxtLkB4XShJYK5iR",
  "key29": "2d6VZD7EnrSKgV3WPvNLuZZtHivKT9foU3TicMbXgphk6MYXjVXid1ztCxfqVNSGbzN1rxhszYK8PAUq6XCUJzw9",
  "key30": "5JioY4L56RaqrMAA6Xyeo2AtrLsoFXL9cdcZdRYZxDWAfQ5oVD8GGWwVi8L3USKF29BnYHe3JyRD4X5VUpDLQWQB",
  "key31": "BabiNB3JCU9XidjTDpd8cqTz5jqdfqPHNhnz9323Gt8CFxD6h7S3pWmRSgKRpnMLhx66se5VtpZh8b2GhCy2poC",
  "key32": "4x9fC5rUHyqBvmMnExyquWRLs3aDhMd8coepc6WyQcyh4q7tijEvPXkNNhbHsTsMUuNPbnY6RAqU5zUvntDxZuYP",
  "key33": "5EK9mQKqb9jJJPwYVQf9XNHUUjwWk4zQNRNmqfrDH3EXrziiQwf9NrNPGjG8zFWT81LVnje4cUrXX2YsUCn5e22T",
  "key34": "2k9G4JLZGHhHXshwgii8L2wgrijs1AniV9DRYXfg9uXBEqYnkQMnVqpkMKeaDzPaytWpESSjdb1HXYwR8NgTaPm1",
  "key35": "2nk1PqrUGTydGMLwqcYbpufdtZLyVM3VQKMZimnfEzmCjwbhwNn4EsawMEdALwgiB1ryaWZbFkrX9ECDLRT4UBn",
  "key36": "645sXgXJeazLVPw3VKCyGLv5NdYRs6UHK44HFUTHippJL7K9GosHxGXFKUAJx5YH9japjLve35uVEojBAFRWpy4q",
  "key37": "2MzsbQJr2PwFoFWMKWZyjySnNhDzHbAq5wAACCWL4u9uc1gh3C9EAjF2ZDA2UefoUaKjG77vZ8BM8t14F4rW7dhU"
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
