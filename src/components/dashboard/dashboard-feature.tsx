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
    "671KKthiiEBTcnJutjipBaGT2sxtbKLwfaWTrGL9e3LtyxB9WBqtJWnXnxksFK9JqaNM4jKLPK5sXVhyCmPBg1E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rdNF9L2UmacSMGmcZvu6xfqNoR7YMb9dHdx5FUPdZCeuFgzsiSR3bh8ZPaq4Xmmca1YBjQokQhsN8zg6dy8ejAF",
  "key1": "KenwfMCgvnsYA5bN34PoftpHSW6wyS5xuVqL4ZMeqk3u1LPB8rfL4MDdtzJot55bUhV9TJYepJYSGFtvLgSw8y1",
  "key2": "5TWfo9pd5gs6SUAakMjMDjfqVTpien1EyZFhcpM17cJwRJY9etjMhqSscY6H57TMTfE2B12dU9HYNAcFDd39Yk9M",
  "key3": "5LtUFZfSjP6GH7LPrRHZuxUr85rUzsUTsh8MhavKw7pDGUTeBYZSqM331wAVwwrhvjt5GoNvo3e3yfqSCsdCDuEr",
  "key4": "duofKktRAtmCgRpruSh5FSCbWZyWnv7nEPBw4a5bq3WZXJckPJFUakDn1RpaYSQ9HXewbAN7SbRJosQ3qNnUXqc",
  "key5": "387rT14Lx9SW6ZiXARThdKpJktKkeqrgthsS6XXboVEJw3K8x84JEWQMattG1nKMcHWLSEvximcgDt6XJGv593ck",
  "key6": "4X9GmnScZVyREiE8J89Ls75CRtW7k4zVnG3EviW5ZMYkjmMbDTJbEWtLitZLJSezAidMh9yUHhSapSqkaXsr1gTu",
  "key7": "3AgwZof9hnR58Y1hnjLx1gpSQN6NLCphqt278uRf31roeiz5t18qbrcLDvftW5U6vQtdx5w9Fzb6FNDJmYxGPAtW",
  "key8": "4WC6mGMZr1SXBk4jLekiAEPSLYye1jqe2KwCMnTVchWKJ17DcSwCKVksFNaUQyVdUdPuzGrm2kpi7T28saixDHMm",
  "key9": "2cGVTZLhfGCbPSjSX9iktvLBtWQ8cxpHBjntCSdPhjJKehzQSbS7d2CG7exgxWS16XQrdrNQSTAM2S4YGdZS2M8",
  "key10": "5aLmxhVQTFmGVPF4A4bXA4p6e1bRq5oR1wNsMTYvpatGFvg6gc1Vi6UWtzbNkB9EhqXMAU61pxUCPEGMjYkXC1fW",
  "key11": "2iodWMMnjRQaTS9pYUhEVKQj7jPwYRDegze6UgGmFpGqXdt2c4s7cssmBtKpgJxn4xWV72HPw6ZLJvRBZKZpSy28",
  "key12": "3NTtMQhfvXn6z2LzXsWCAsmE24DHVJxAa5bt5AmkK9LaK9w1sb4qHB3azAtuDhtgYC8NwaqgJCykigzkB6PxWeMj",
  "key13": "Lb3WxozSWpQ6CPe3Z1jydgUEFHxCFvh5qbsg5DoDw5NRuhxKiG1GWMNCus9DyAP8vea2pNcfbzwT45JG82gE3cN",
  "key14": "4P3XkYVQjPknamxprBXPGMVWHfVhh29XaUYqEQwhx4A5k26deuSQaxw93ehQwuDfNLN3oGJ9DMRfxS2m5n7vSCoi",
  "key15": "2oBKZvW3GDUFvUi1aiahw5jnRWPBJwsDn95hNW5K8N5BsMMaSTuJZP4wAim7xtfLU4UtDwiTJTFfysznEZLbxdku",
  "key16": "3F3uFrDYYMBTGLBBY9qqjgR9dJdCx65BvGmWNmPeso3ionbTwpNZUzgFajnaxKNcP4bKgjLjDf7sKqbdat9fLZPi",
  "key17": "PjeSNRaBHisd8LeYwwzVQTcvN4e9VzLnTJ994UH8EUxmXt7qq5SfM9mbgXzEuQhh1xVKJhXjTAW6eGTEDpTcVij",
  "key18": "a2hHUDZWkfcdEKXYEfyPbXMWuScQEZVGDs9g9ZyMtZJ9wYAybJTvr7hDLmd4EV37F1LHER3T9EWgwLdLN4EsXF4",
  "key19": "2gKSpPedCHtDFAfCznZ7YztgymmBXvqhKAjHw5z28xkXfdaDtCSYhqCHpkMBxCS8HTMR5VbgvziKPVGDpJphBmcG",
  "key20": "4bHLCkuYaq2Cm6YSrAvrXwXk7dTvkNjHdoajYnSMJrv6Yo3bW2APrNpSTQk9A1UkDmjj81aSapXzeo7Rt5TuyYot",
  "key21": "3UAzr7WNJjcKk8WLQCzJ8tWCbG5M7CMDJU8GaE85uvo9vBtNdWmCeZigzp26yHoyYCYUsWMcmzNmpSQKwA7uUTKd",
  "key22": "57Xur1WjZKDhWXfmMfqQTiUts5tfcG148XMfRz4ycoKpSgkbEgeN9vGqs2BSpZBaYTqj1j4c23kMhQmFvrx3JaPE",
  "key23": "8sd1GT35kHAuyE5EWpPZB6T5nyedLBdjWbGLKLf4khBC5AwMEUgnyCJiRNds2ethkEsbhMTGBJVJy26FmbyD7CC",
  "key24": "61BVSHxFwczUdZvybVtETuV6GMj7Nqrfy6AAFG1YLD88AZf3RxSFv2FaHEZoE5tVaLN6a5AXhq4uz9iuaHTKoo1J",
  "key25": "2YW9CN7xiERbCbJjxdbob31CmDjWAYv5QVu2pTEV3Q5sN4hB8mHop8yCjz3jZG3DcWvSMMKXqAngXcRuzps1ynu4",
  "key26": "2ymKPKE1QiTLVwLdgs5wXnr2sCjcETrn9fo42GEfc9zsgdRvxvNYR3CAHCiwU7RahPCda6KF5xDPRBKTP3dmuoTs"
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
