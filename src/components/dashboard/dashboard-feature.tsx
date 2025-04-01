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
    "4XHWxiN2w2AheMKyTXkbTvJpy9qtwU1372v4i8JDvyzsUwzRUCELaMgDdQsYRA58EeavUjAaU3KQ7tPVhgtUc2X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnpKoLn7GEJqtYZSgF5kk8rwjHMLPeAmJc8FDeVt4AaJhT3P1HvENDNTzTZxbMPe7RveE2nkffNWca9CBe5JpFx",
  "key1": "5kD3SU7D2nutKMNpxFfsxyCny6GfSGD7hkCqrNtDNXCNbDXGm6Z5yTMbQRyFTibjeqwCqciPnqTEcQ6r91ew6oHs",
  "key2": "2qHeNMy4vauZ32gUGr1nMEeKGrPkCqBXz3ucG5hd5hZ3G2DAzpmFRBLZFtQ3cTEQG4Edc1jvD9hiRJd6Uv1F2SHv",
  "key3": "2hXYMdrbnGqk5sReu4UmR5xcuesH9nG7H9dEDxtPhpD7vdxoxMZ8gFLQJZx3H4noyhwFyfLjAETdNtynVfuWX8iz",
  "key4": "8osy88ZacaJ6smmRQjUv92aakrLWZeYnBrYLxCMWDRsHspLBE3jLTMeNBsYCB6n8U241b17nE16qkZT7VUNJzpP",
  "key5": "UihcwLUnfxFrtwQLJ19WB7y6egvWqmj8XE6sLNwEtDeQGdtaERsB8iqMojfEnaWe1ZnikJ1zG5Mnyeic4hN2yrW",
  "key6": "3WR2jXRqWyysdWudgf7YeZc7sLfbTA7hSYxCEu2z5hWLtAAmYZGwUR3kVrJGADu4Ju7hXaF3mcYL7aehhiEDUhKa",
  "key7": "42JveH13s8GH3xfAxWvXFmVJDLv677RSbnseKTh3yD3DDgvpXiyHWH36VgnuCPTh2PVGTG6o35Po5g1cSHY9eqyG",
  "key8": "2qf6xmQMzVAuKx2qCAkCFuyenmGFLArH7TTX1FiUdGyPfhrCAmhJgdz9sScv4Z5BChhRnezLaHp6tnpFpJFk7YoQ",
  "key9": "5o1nViS4ALZiAFciS81rZCLbV7UQxjhWZYZEb3vN8iGwcpUzgFko2w59JRc6NEZq5u9eRvBaNgi8s6nbuMqtyhXR",
  "key10": "5xoWckiG4ArfQwJtnj4NLJmTTQxgDp9gxFRUm7cNBxqGTQBZAM2pUPobGyatNYhhw5S5iKEGdgGDvaCPX6KuLhtA",
  "key11": "5FZBkN1vXtRG4GsrvJ9CjFuAbmKepXYC7bMdum6gLkQwyEc1T6TdYeDvJDK7D1rCFbfJAcdyog31LMJEx4Wdtqd5",
  "key12": "3cTMoydjziiSK7Lu8pCYEypdLnZGsEPngt2g3RsvXc4jF4xFKvPsMspF1p7Ct2d1tciu2Zh2mZFpZbSdT3Sa8n52",
  "key13": "63PDFHUAJuNLaahLqEyLfCVCPpisqfmF7oakJ9jA4cFfNutxxfvY69QdxbaCNSKXvp1qHxqYgNHkp85b3qWgshue",
  "key14": "mP2QoibXRGVq11tSoBbd3ws7zqY2v4ZBiNFHT6rMcZgqmTybeax1WRMxUYkMhwp3sBTDzGSPpNv3A15mtqnYUHX",
  "key15": "Uku7sjrZhcBXLLXT77fnCU7Nu9mgiBJtAv37T62nTK6FEL8ws67x31nDEoswFSr1udjruycNdDgM1HfQ6b8B7Ku",
  "key16": "V1BX5s684QHLvtMze9e1nGH394UDfoZNaVQ5EfB7XthPZSQ4J8aT2KdRdQo2U9fTcSF8TSrc2441wY66yKCfAGQ",
  "key17": "hRtPxfeY5DBmjNYeZEV3ZyMqXNoSBWYkpar3BvXaanUSmWPZTmJqjRfDGRqM5XCLJquh3egk1Qiuu2wg48PGwor",
  "key18": "41DLcqBnxbZySzAQ1weUTrfcWcWmzYqFc27VXHY7n9nATLFvsppUqbL2UXPexRsP9iCdbLAiJkevE7BjDpgqdoU3",
  "key19": "5cmKgzXUqFsuVtReVey3q59Q4hAppZ98ZD2cV1TXPG2mmXUUZBHg3HqrFzwgBiSaPmFECLMwvUxf1Cr8xpAHVw1D",
  "key20": "54XqM11StecPvZfvZmR9ihBiEWaFCuuobFW3sgVBxk4KQbb368KH8sKsL39yEw9whCUPEU7oEa1yzhjeLNce7Wha",
  "key21": "3HF9u24xjM4FvA4JwmF4StrRzitdAYMiQCNpaxMnYKHbDovpNjjn769D8t4HKdyqxv14YCuJVLe6umZ4GQxVnyKU",
  "key22": "5hvTGFzGUymUSjtSpmD6z3YZpqmwxp2xSXWyVSbUqLyNoguPwXjTwxNPqourR9eWn8CT6auzAJXj5h9NCMcfz9bM",
  "key23": "3jz4Pk65b65TkLZf5MishTsDeaeyfHqjH1xo56FGNVkhdy7EMrpQeaijwJhnzXY4Fm2gV38hHPgqrHsb1Y4R6siE",
  "key24": "4gkXTYqDYrXqbvRFpPHMWJrH34ss8aKneWTzavjXQ8dQCM89H9v8X3XedaAp88MnfwgLA8jqryuUx81mvYjodCYb",
  "key25": "5MnkNfmADufKp5Zi5Y8Rt7mtx9VieoARw2mtskvoeSigfnZZCyyRG1JPB3wxyngGfrMQr8bfiSdEmKgbGrCyoY5V",
  "key26": "yiu87MY7pZgNf9pTaUezFG7HkouYdab9CGcY3XPXupuMLPGxKpa8xDPAmd75psidgTQ83fq46AeAjXDWKBZJqNx",
  "key27": "5riHyfZopZHrVMaxPuQcbHMmryeA6taz18tgvKoxsvbvityCZkJXu5WYp8MQc8XArnvznhRghWqVohPvGuhW3PLG",
  "key28": "3Zr2dwLJErFb33SjuP3x3Tnnzd7C8F9pL3gLtZVweMszYmfQKqDeSideivgANF49Lj3ceft54touCYB5Uk5cP3Bq",
  "key29": "5cDUaabaEcQmtRDEaXTvVfXhcFDGYnD7hzuz9PTvghkN85WsoxWe9uvdc8wAqkpRPzqsi12QkyzzZbDLgUhPGno",
  "key30": "2NPXeSQzWYbS2mo6ruBrUThZ59BDEwyPN17AtCaguwLWmxme224ztN5xod8d3H1sKL2iV5djYkNWUafDgAaskFtv",
  "key31": "3umTHDT6RqivPPQRkUaYFcdQtfHN2Xk6DWv3tpodRuaQooNwDGeVYUmjnSRTZkBCYnFnw2useE4CjQRaQEfPQsDJ",
  "key32": "5Wh4g87wxebX7gsgY9BAGE1q6HFHSLjN4SrS2o37m7CadjjqmwNHYuYb6NStV7keL6K2DpkDPBaH4TvZtVibGv8i",
  "key33": "3vrikzrtfxNFEid93ewwnzY2TEhq8Z98ft75C5jihbBxjjgxtp725ruHPytkLz1hK3jRX7m2bdc1LLeFQNaCjr3K"
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
