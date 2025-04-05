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
    "4vXadvUY5i5TCoz5YhrZArYZZUq9whXQzv2w7E861FXoZp6MmHvF1dVi3Tfn5nG5Zu1CHmSDfXQBBpJZFSn5Gm6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JQs4SiuXWfCUbNCdtW2YAhFMkVgeDKYhgJJgiivGbv4C4kBVsUWtrRPWoh32bhxcd9x5Xb1RxiFtppFqrj1KLn",
  "key1": "3qrc8t6BEMfUEfxmnwLPQpSff65itDUjEzJx7azLv21syXtoZ3jtqqKKZ4x2bgTbPBzrSzSga5Xs4rVcUZzaWpwn",
  "key2": "5U4zFq5cb4Rgqq8ro1i1D44V2DwvGckq1cC9HmfvoksStLnHvYhWNDn18sM3ieUhoAWoS5D2et2sMLyhVCFjAixG",
  "key3": "ExPhtcmvwnGZT3JxgxxGzTU4QGZf5ffVLJvXXAcNoAppS1fEviBjW4LkkzEA6s4ySdXbUEGNqWYNtf6fDTF4dDt",
  "key4": "5Mxt9qFVQVaJG3uZL1enCtTyFTotuc423Qve8maWjies4x3oXwqtccBxK4jURBLEpb5MUETqNxvVcbC3tGcvz7F8",
  "key5": "ZVDnhdJx49FHY5ecinTjxBq7MjpWMoFpzxkN8D3eZuSvfFpdddpiksujWhHb5YUxpfs9cHnRPR2bVRsCmqUbyZL",
  "key6": "nsg7cV4pz3ZuBJ4587YTrSdx8fLb6mMBGaqHgaNsve3LEPsH2N9MX97gvzD1wc3xGLVRoSthy5QkNVNHCBq1hRu",
  "key7": "3GGKs2xL9m3iigfRDW7RQ5f5jU7QgPug61nnPpyVVySRLKoXwKRFQRHWnBTQRfh8Mn7PC7jd5ZxA1JAGD783F6B5",
  "key8": "3cYeR1JsAx23tzGh6cytzEG2c3jatxWPmZfG54GmpL9wz5CRb18c38yBEcAJzq8dCoj8KjvDQfaeXiQ5uRyREema",
  "key9": "4LcsiMoHDx8pnfit2UBbtTnzExQtjas6uj4m26QVMV1ULNnqMnkcnPxaGimzkYbQXsge7te944ZsbUDC1JFWVs15",
  "key10": "2L5e4CeyeBBHYj8iu9S5y34STGQ8mmtKbRSZTHUkdAgfHDJkBa19NQbyr53sKmeWSch4G5Ru2MoriJruHQ2rwb2y",
  "key11": "4Hu98DYDJ56A2bq7K4rBvRxkQbCh7VEXcDpP5v2XhHMu2afsNAA3TjcpxLoYWxM2eKX8mBjQskoExpUGEZRQ4m9z",
  "key12": "2BUYfMUNcYBNJRMaPx4dsAMhDkYje6KF74DnfA9HqHnuaKn5bnh5G4G1SyD3BpuyxLQFeGfhp9315duk4WcC6Wfn",
  "key13": "3o1uMPz59g2rmfC279i2tNY1YVB8HAD2SgpiYLz1u9XhDttKQ3cYvLxLBBBxDWeUzXbaHQNBYZaNSTSeb1qjrCvX",
  "key14": "4VLGwcCFmk1j4HRNDYVu3h6g9YeT4nfqFvSPtTis7iRNCYgQQWHCays7WmhSfruzGm97pWrY8SiG8TvrHMZaeFbD",
  "key15": "263sovsqME6NbDMyP72zGSzPHagmUGJcjHevqaQXNAvUsD7DFZr42UR7Xs3Xn6NhbQkFisePcqQotmWbRytA8dfv",
  "key16": "2wwqKEvGFL52hJjSX8hYwAaRG5kkUYv6b28kBrhiKQQaiDANyopLWYMzkDHyeBGJYabP7c7LEEZZxp6syNeSgY3U",
  "key17": "579Daiu1CqxgKqBENGADkrs48Ft1Bwb1kE9rcNoMZfeeSzyAk6YCWeFXujwFLzaaVjfVj5rwWgFjKhmuq6Am8nJy",
  "key18": "4V3ZqpB3V4Y18XpWP5btsC1agqFPE5RTLpsd5kcKY63KPmTGQsSxkBw7p1VVHYDWLFEU2Y3tt34YBpHXrnWn5Lz8",
  "key19": "4XtrMw7Av5ypkqmbjbiNA6BExnEq3ZuUNgiA2M82fWFMGgmdJA4bbbhg9UjBJWPkevtYMoQSjiUKZAfbUtLrNLga",
  "key20": "3ekbbz97CRc5jyapShH8pZaidRYyamVKcJ6A9PCz38K1vzjUNHuipqQKoGUcS1YPyJc2t4K3JmNNQbQZBf82idYq",
  "key21": "24ACR1LzHp7nXKGRm4bpkNt4xt8eith97gKqS8ACao1Mdo9G8eY4fzXwFRdS5env1JmMNNLhP257pBpvLs4c88f7",
  "key22": "5jHXTtBJa7ZHMUaT2MAtvm5umwnP893SGtpXJe9aWCWQhcivuhqcEucaEaN9n5RkJieyHpt4VMYTDdrsgJdug28Z",
  "key23": "2QjFbo1DoAZDFUmEZVh2fPfQ5GDstawYbHA1DXfkkgmmkeE3oHnx5xcMKhxrPEsJVnHWF4cpCPsdxPrZQregV6nw",
  "key24": "63xEQCbxVPzqQGLDkzNcTVJjB89Ukhx4NM9uGHxzie6JRDeKmxwQTTagR6bTS3aaojqFggJd2d1vUuTM4uUYhhTd",
  "key25": "4D7gzAQExhctwUJKcMMEP85fkEHjccKviqCz8dKxk5hB9er45SyzsKLRV5enLe2GntavtswA5c2uNYwJqtuNuSKc",
  "key26": "4gd8qvLvUvBwPGvmiimLD1pPxntpKY2jB41Tb1hXd7YYjD32qkZGZ9fiV1vpmnFb8q3FzAQjXbYhstgnmV2ZAra",
  "key27": "5pWSJeeQZG347yTWHFLLxCHtD8PUcuKEFvG1iKiGTpog271gHY6TYzcuf4BmA9CJNkR4K6rdYctnZBH86CSYTg4J",
  "key28": "RQk2zGJc4WR8p919DCJ6T6izfxqWGTbJdr4A1ar8GTShK9WfFqG7K4zXrfHWicQkhJy7Cbqg6PrPBvyP1dKdjDg",
  "key29": "2vUaiviT45YA71PQmE32rEyTuw2VXJEojEbnnC559cGGyCJeqZDrzdTSxQoLStHtWCFMiQyxZXPaz8ShuHvkoHX8",
  "key30": "5vo4UoFxEKdDYCqK2YwSKK6mvwAJRBLXkcXVTQxFPVc3hwwsyVcfZrTDc23Sc1YwicgvpLYDKYWatPj6LWNztyvB"
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
