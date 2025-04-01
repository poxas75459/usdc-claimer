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
    "4sBb9pdLaA8PdjUxj6yLDA33hbbxRQ4F2poLAQGaSt28SCGQRo4scdtNvVSrnuwj6ksbG68unUXspsaTG2iyY2fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2991MVophNbZvk3iU5L1BS2fVFpUebyAAbTz51iHWKR5pMppEaR8GWts5HZSLnxkVueBndMFUbcFh6mZx1R9tZam",
  "key1": "521V5nwLd3uKw139S8qGbBodE7GAYLQHfbxek4n43Sjp3iJVpZ2EJCRp6aMYd8kWYLmzRtjcvUygkNAaTeJx5yef",
  "key2": "2CRs5JpoDEvpn2vVgriMqQDzUdfjEFpJDwy6pfbazQyMVucjFtj8CMMu11W4T74tojjvHcQmkor2zin8JwuVnYKu",
  "key3": "49Y4zYrtBttJW5xxeKohLS5SMF9RotonpWL6ZZiH7PDM4idnFCDVdCWcPCEvmCbNrjA2cUjha6e4BcgHJqPK7ofK",
  "key4": "5EjSdU5x4dKoGQ8UrDzVHw9NrTCic16cfV5JCFn1cbiZ3pUnRuRaXyc2FVKK3eYM297iPpJGEMsQf2xY5StwZ8wL",
  "key5": "3ev6LQRXtStngYJ3RcsrgJ6YUQcaiUUjkbT5XkPd6bL4N8h4D3G24jGV7fo8eNH2RgF9W2GNMGGo2D3tQJeYgt8n",
  "key6": "kKNznAuXr97F7cDEhW1MsswHtcFdQ5BpHhFRDgegwAjuzTYoDvqRzpVxhyBEy59ELNVNDGCqvi8ezK6hf7wmT2m",
  "key7": "3o5uTqmHiDit47Ln4WKK6dfk6KnEEqrEhEWfjfLefexpFTGtqhSUwcBy5u3sf7b8q1QQ3AuvCzbAQMG6QEBbGdMh",
  "key8": "3qUnSzZmR9yUei5NCTjrCmuPJHzFSQZYTRvzz6X1b9t8LZ3Po3fwiJuMB3wp9Rb5qayRT6FRyMkwW5gBJ744MjHq",
  "key9": "2t4ASpMRZX4E1si8jKu7ihcXY4y9aBoEsjcKYgowpaj6G2GZcDhAANbgjNXExuMEH8WjH7rYVCgMTwyMSh4b5EpS",
  "key10": "61MHW2UNtpRub6FVP5Pgewt7ZCPLup6hgtTEHMiX1YCMaKs1ZnDRX6wWf6TwXJBmnqfdgrsYs5vgWfX5zoHXGWrL",
  "key11": "2pqK5ReDdiQVnz9K9ua39muvZ9v69Dw2wwABC8Wf3GvbhyQHqMgoR1W2EZAXQDsUFt9zXBm1pNsHTrtf4YucesCk",
  "key12": "k4MyDMNEdLifAkgybg1pU83TRytLeEfdAHa8d3UPSzqzWNyzKXkJJbtdWUE85hEPBbQvTyGNrHp5cJfuyiPPRBW",
  "key13": "5wkXMgxAAfkTV9niqs1jEeoihG1V3Dci4FXWaxJgWrjQ46xzQX5YqUHr7ou5fk6Ae8q3nas82N7o77aGsihRd4XR",
  "key14": "2L9f2Vz2KY5Umaaj79qb4XU9LeXrDK2g1QgNxvuA9hZftz1rMhEPYXpBaXsuYMbuZCn273D2XXQpWYiPbEBSHTqu",
  "key15": "5a6yauvont1NbRz5VWX6kWqQ47iUDykuTBidTu5zTwGS8sw4ZKAtJC8gn2UYFwNbpGCAZXZJSANzNgmAPPSavKT9",
  "key16": "2BkRXc9yXzNmH6KhmT13UbyrMVotBHHhtCRaPZvTPMa89LibCtxCqnaQY4TMaUp4W3vkMFK231YNin3dUXBfHXCr",
  "key17": "2GPUeC94hxS1sYUD9r8TTdBXsQqMTmcE6eTaJXeYY3w1iB3zU6fqnAWWH7LCwt1JZaRviAm7YrnXCjsdrmudgvQ7",
  "key18": "2t7mqeDLGeKb9THUWJPt6YhB3mBTt4xnexbCJfWrJ6otUuNSLKFv5AqURN6hLc6bHDvRQYAFBWiF8p8Lh4AvrnrV",
  "key19": "4EWduLWWBhNdRPMk96yJXTJLt9njQEpbj72LP1ChYkLGtUa7QiA3iChaZcTBS9MtUgvUvk6veanT2N5iTGxNAzfr",
  "key20": "4jTqPSJeKFVjCek4bCmsuJ99tSA2qbUiVYCsKfpEw58T5E4sphib9NMq8DK6M1nyR2hzfE9Co3qhrafDMsTr7bbo",
  "key21": "2eFojWCaZcRGRW4iJq8hAFeqCDAmKhUACfPsRBHaGDKHqaUyNZCkq3aPdKSpCkrQZvTx9azjBM1Q1gWP1o4BSEUf",
  "key22": "4Vi2GNAbmhrXPRYctz7jJnNiTL6qoawwJxVQojT1aeGYzRBWKKRfRojsi2FoMMxFdJeqHzJbang3DV7jokqk6NgZ",
  "key23": "48bfXe1fwAGEmGXmnq2RvbpKEuMv1Gk4muCuQJVcZH4cvV5mieVaWNNVoMPDzHxuagr6H69kvCKX1gSHVfXkrWVJ",
  "key24": "3sUym8ULcg8S7ZX17Qn4gyZtTkY3UkT9HJpm24B3WCKAt2o82Rny1rPgMKNd8cezLmusqg36SkQXj2E4uCJ34aU",
  "key25": "47Cc1EQY9r1qXKqBsk5tMYvbgQw2tNrg6QiS1Fj52kthKYEEJLqDphew5tsm78HabgqCwjGzjLYHdANotDNqydbw",
  "key26": "2KrPUkHpsuwMR2Lesx5TZbsCa1b5Mg1WseCw8JWm9UPkkcf58PDqpbUA3vegyoovoFcygd4uWmmeXiKd67rTnNL4",
  "key27": "ocQ9zvcYYKzMZPFaxDtYhFMVk1hNnLdxznmRQ7n5cEetw8yrCqLWgzQECqWxe5ACcfqwM7wmAxWK79Jd2t3UaCE",
  "key28": "4HwnKRrGQUQ2dTwynTMgxssYsvLfnp7S9z9J2GNYhQeBbJ92cxv5VhDWrbE6VYjknw3P7M69uFm3RuDAEUNktg8W",
  "key29": "3ry3j25abqRLNmnLUSded7qHKSjNEGkemAFPQ2DeEVeTtBq5ZXUEHKtiM4rmaVgKQGcxff7uCJGsCSG9i5X58q2V",
  "key30": "4VKszac9qxFipAuFRv32bFkNYNiZ3WXREPtYEbZnJHhm2DSdKJCHKEF19s8UCrjSGLBFEfwiEu5F1LPEXL2Zfmkq",
  "key31": "2sYA6NdY4STdEQ91KMPBabLWRVv9d3zUGBDKKTXHgs1oA4sU2oWLvPehbSownmBtJeJPPAtdwJNDw97vNPqvWZDq"
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
