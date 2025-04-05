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
    "219Xn8wEWoXUuNQ6mdFVKkuiuTsaVTByD1Q28XKdiKj7CoynzU5xgeqkiR4LujEJ1et95rxZPuGK375L7ZVQrC6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBfLTAGoDP1FR4zdxbL2uRHHhzMWWwaNRvGDAdeXMnrbZx2aHm5g2KAbA6d94gQr3FbhcuwT6o3HZ89pVmYWsb8",
  "key1": "2qrDvKQT2vNrpXapmzjoLaoqJzFTp14Wokg1YGedHAVnXsoEBY8gUq6ozxuwqePoNQXmM8BLf66JNnSvjQUNK5wo",
  "key2": "32hsjL4YgMfcqf8jb9YC8wA6yj5fAJe8U2MjrHxp1GDz8PtkkdWYq9WbUvr96LuQE6rNyEV57ay9uMEgnZXq3nnk",
  "key3": "5kNQGJa79kqiUofdX5XD2wwBokV1yRv5TafvT7ys5ZNvNCHgF4FENutfSNd5kEopHdWjFTvVUhjGiwwHfJBuFDdp",
  "key4": "2FBXsKyd5mGdgay9Dr4WTKh9znSH2v4ZcpLyBT4BVKcpEKDiaPUi3WsVGAofQqQBJaFXqJUnieEzxibTNMonMRxU",
  "key5": "4Vfvb9PDsXQTg7fuRLXZFUjZsct4UU8BuxcCmt7RXCEjdtqdnnfhfws1WKKiq2cKJpfBkj9ZtRGicWdrjwEqWkzo",
  "key6": "3Lhq3KWEBr8piXvCfHMoNpGHyMamqVPsGJGXtBCBhU4fcx3xAqF9ohR1PyuskG2YVhqKUVRra9E7PeSUX7qYLF8o",
  "key7": "4idKu8r1kZDwxNrRLMx1XJ2Huvfz1UsTRE44Co2sizqMME1EEMGkPLxjvasufQndCvUUSvBqjbLgeVzhYaw7d83g",
  "key8": "4i2HfsoEYxXETiwNiTkkPm81SnGCzsmqxsLGaEuirM86TuqydeSvcc2kD4Wj369pYG7zhVwygFZocmBoF96EqUMP",
  "key9": "38PKYimjXSivDrHpbJnoG2ph9KEgEhWTvxv43wLPg698JmFoRzxYN8Ln5C1mhjxsTjrw956fn54MLHmmtej47Jgw",
  "key10": "2SNXTdpg7SeQ5WGCuQ6LmVXgFA3X85RUgerHWGz6DsVbJSK7KJdQUzQsTUVHi86bbz2oFz6Kiaxv72AFHkEavdiZ",
  "key11": "UwwzMY55bULFjZwEVjG7q3T1jh7nUKqk3gyTUiqciN2YC7ZVdcsxaopchds11nbCCVud5yCYdgD8QMhtUFiQPC4",
  "key12": "4c8Zx9W1G26rKDE3ZyZV1kN62wxLfTuRDaUsLVPEh6G51dtHeTgJAYkkSaThxVTT6TpfozQEkNvUgJGuJt7F79P1",
  "key13": "49JiDabT82ZKyPCURMe8tB5BF4LeMn2HccuBRNB61hLSJBpp9h5LRNYCHVDsWwhDbhphAhsP8VJPhiLcCmhUEJAS",
  "key14": "3x4qdknozCCE9V7auSghMjjwYUs7Tb2qAQ8p5tWmxcogMpebfneWjuD7ohkaqbqBrh52LyxD4qqaJ7r4MQe3EsAZ",
  "key15": "3UXUwEfqWTc6KQfWn8zjfxsw9JgbcWXWdcDag42U1dKpTcPzyfWjHxEuyB5fpFC1BREW1iuvA3xS7MCLJf91zTfm",
  "key16": "UwH3rT1ybzhBfW1eExQy6U9mZRtpnq1625F11h2NoQxoeAJEPNq18JoPqJ1PuHDpyjTEyj3YkutshDSUp7z5P1U",
  "key17": "gYtCbHNmFFcBzrTfBs1sMfSS8EEhrv1KoqE5Aupu7bXojPmeNk429qvMM7X76qG1FnpcygUb5Zxa9FFyUPsFhAf",
  "key18": "4EmNL2wTDr5EaAeqfv4ZEwGixBwYrJr8U6xaj8tnw9GCz7rty9ShYgvqiHBcPr8S9dtVR51RFJGapDzQBTE7jGPY",
  "key19": "5zVYBY7KuJpTbPfdBJxrGtpkUJCPMKCRpmoESCAbB2YBYZS37Ww6XX3o41zUCBh71CpAXJpU6j5Q7jBzRKsK8LhU",
  "key20": "3qBFDWMFtbDW5xzYajTszNRNDKTERysaM246HyTxZjVP1kZXtom4abZ2gzhKeyw1Kxn95YpebhnJPPncszQpHh1K",
  "key21": "NBteBtVGJF2w7pUBrRXo7cT8wczdbY8kEjrXCbu1FzxfF8TfACg7GY52vfZzuhmtpDPG6HwfjNZ5xyezKHg9LVZ",
  "key22": "2HtJbtiG9v2ejpvrQM3FUXaoGSt3sARWiURUpoJA63UGofVkc5SK98VejRDztXn7HTqNiRfJCGEmePDEFT3htf6i",
  "key23": "36uufUNQJmRpL9yf2uZERKBt5UHpK5aa3uT8ujHH1XUderRGiywtVKHvcVH1pEYhqFPGJqYiRQv4i1P5TzxdisSS",
  "key24": "4u2qmRgnXGWizfxVHF39ieXh6f6NmGaMkb3hUAqmWZyjFNycvKafqGe1amPLdcznipPSUTbLXj4Ep2HFPX3ZJivJ",
  "key25": "aYLNfhJdrpngNGAsGokpXCmNeMSCg8xKaCKF5R595HtMUUEza6uJs9JmekEYUrQuzog74rLRSs5CFMo5AsgGEmm",
  "key26": "2TJhTs1WU1YBxKgBvLMgUYXFV3YGY3uq3QBVtXewtuA2Z8nRHVCY2C1KSgP4smrwki3L5QoSUivcyGgw6LJ8Uaxy",
  "key27": "fiHJBZGFCRQhb4r3Mmym8QDaEGvysqUnVvJPyKhJhpz32ThGXgQNTVcnwpAiQhbpLjjiPt76BwDLtoiePqXLVo3",
  "key28": "4k6nnXSSxZ2VcdX8LeNUMApDthVPtZFkoQWMhBhVtNymbJtx259yxVgJCmy4HvF7qfFf6ykbrsRG1DbjHkAKZ5my",
  "key29": "hc6dW4Vxq11XLxXxX2xucbJEDmpKcMP7cbM4JGNz59mBqawb9nDBeQkFyv7mfoK16E8PS89cesEZLprMFLKYMZ6",
  "key30": "43Cdpn9nEKtrMRpLWBYi3VfSL8v8N6jmNbjKav8Ffb7S1hpgCBNL74wzJRjVcXCZhmrBQarcvQGFvXDStBHHz8h7",
  "key31": "84x5AzKmSK5XmUiancw5HTeBqTyRbAvZGrUxD15FgZP3zSkMiMagmNWYVLhRUMuP2jwJbG4u3HATkSiM6aSitsE",
  "key32": "211UcsbZKfBLbkdB2noyw6H98YP5H56htmqkZ3yQkTbvMCb8V6kRABrVbXaBRmBSyGiVg1g2hRyPofRk7SzZ4jMt",
  "key33": "3157eKXHCie65Ae9NKZSNMBJuiLkCVi9d4JbqHEQQK1EmZxdfWNwmftNhyBVKtbmgoiqCGM28YkZgic5rjEt675K",
  "key34": "29PD8bDcCoEK3uLZiqBkKeRCpf7B8hr6hJ13BunyE3rAHgmHmeCQY5SuQDeUN7Pgr9KUZkiJoREp1M271dXAc5GU",
  "key35": "2jkKWaG9g1raqzTaki4TqyjcjciHXEryaNwR9oa8KmyoJp92R8XCvLZh16xpripAYUDr9gwbN5iC5yiNraQM9JdW"
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
