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
    "2hkZTueGmD7Y4VwoiXvdmuQ7fYBtYQHNrmS8eDJSpdAtB4AJE3DrGwthq3fQEqpuM45RCQgyjjGyzuNmAoxkh8pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F2zcK2hoEimHWGJfE9Q77WCvVGrfmA47r2ZkQmi6bbwrPWpi957JF798E9N6tELU4YbGk3BPN5aWQUf1hCF5WSc",
  "key1": "2NeTbBaqAeU4E2UsPmMy21etJDiykPzixuFqy4rW214tCLZKmwr8XDruqeWfM8soset31jpSk9gQhrNGkWGwWJbJ",
  "key2": "2kJNTj53MpRLjtzpTjNThaXdDnDmuYRHXcLDynirMNjHgtCTuwKPFYTuGUAhWehhb3Tuo8nTHPkXvhoDYnc9gSzk",
  "key3": "2CtyacfeNTLFvJETem2jZUT5v5y1w3nGUvjk9fvG8YyYuEkVpDmCMFFsbHXAjpUm2dKmXkV5Dm1asEQXH425Me93",
  "key4": "4nWM25W1JRMAECvvxqPeo1uT6QPPBUT2y7PpmimgKUmnuzttfBMDgw7JkQWggEbFqR3e1q2dVNVWuDDrPTSZysGp",
  "key5": "MDPRb6yV1ABXrcYR5Lfmy2xpJGP4dPWf1F2RZNQ7cH16qkw41f589dif3sZExPgRJJb4HPfLwEUpRLna2XscFbr",
  "key6": "39XvNtwT6kRjxn1LyQNsoeXtvUsRTv94o1yxWEnXEtEtpyMuRjramMyn9m32Asqw2jQhyGzJUfzHaG8v524cdgHq",
  "key7": "H12AVBZdJWgycnDkF9kEMorAAkPvRsUzk8HJh277aTFc38yEV8d7bHZ1unQoYgoAAFCvhGEt5GnTqU4WRN98kjB",
  "key8": "4c9kao89UhEj5DRrKYCFxAbXDSDQB4FwYiVeK359x81Z6N7idPsbSk2WuneCTyji5ZrEtWaEg454yTGKR5cV69Qn",
  "key9": "sh9Nf31Mbx2ZGYrpmnShH78UuXqsDdG9aav4rvbr81YdZ6sR8fhf8yZ16fgDKijkbXu2gA2ZvWGxTFDjDrh7mV1",
  "key10": "ojMjSWYW8d52bGtyFLtgW4yzDSMD3djB7s2WPV8pYqzMX3m8vkcLq9y1j2MkXAeFDj3N6azMFZdw66EZytg32z1",
  "key11": "4JXGQeMf8NHGvtNCgsTJVDYAM9TJa8skvKmhZN6S5rTnRY8AkB5MJ34DX4p7YVAbdNNhx4CsS8gP424rrfwJ75ub",
  "key12": "47TuKTQCrDXG5ECbRdNniTZBLSB7hejiVbm1m2RGW9o6Ss7mD91Qt1Drt1nZpUWgQrSictMYTq9tkw9avUXkkK6",
  "key13": "38MkukcMhuTSw78ZsFebpcZniGddmJNyiVprP3SsvU1BSaoTXrCoFhJQeewjP5DcEL8iUruKwQAPwa2Nr8bDCQti",
  "key14": "479nGD26wNR7K1yDwpeQEWeC9askavbR58ZeSQu7Gy3sRyNdos1QWvsitwxhytTPMqtdrxTszXhMsW47XnMc4fs8",
  "key15": "nkqiagPrU3tRYWMegD7RTBHU1WLdE5f33xZ2DquCuq4EzhVGzRLNXw9hfhYqntAWBMtaY2cS7kPdzHXzhfTCK8c",
  "key16": "8Sz1pAWhcNrwzjRFXKh2zk4GmmuU9BghMBZr5ZFx1DH4P5TVYagX5vSKiyey7a23tz5e7iNAPUVwc5UsvvAG2yQ",
  "key17": "2NqrBjpNUzkwJcXE4dcutNDhHF2sEiWmYpaR1YWVhzUfwsmLrrUL4SrGHCrXGdS4JHFVN6TyCVu9pvpBYd9vCnZv",
  "key18": "5eweEdNDr1997bTGPFGFrs74euAjy1quDijtnC6zxXVea5X4FF353bB6DpCzXu4NKpd9wCBLqNEPEsfF99ps2iXn",
  "key19": "4xgHVRcmvbH2WiLXjRh2MugPojhNvKchi8etKB9TCnEavHE7g2QWTcGLqC8yd9p1wU7VL6BH3LAcYH74hSJ4kEEh",
  "key20": "5VPGB2HhTtWHZxK3DWp83p2rdahY9uM4U6Uy4MxBgvb8bBZvdAKxvop6m5JWstAXFGwENxSpZzM9FFuY2nuzaHwp",
  "key21": "127WYEqu6YF8wqmAmWAJDUBoevh2Ukwp9C7Uv9CX8b9ZeWMJCSe8Emu98Sc6P1RMYhCahhCf8P6fSWr8XLZJVNRF",
  "key22": "2hPGSxSXMgMidy867JACbXhLQ5naPXPKw3DaZaBdvuEoBkc1yDQHFh3gAwsPtkXVYp9hJiZNN7XxcMheecoYdtmQ",
  "key23": "5stwHhhkPBnPBuetMxniUsiCePwhh49Wzouptazh36X9w58LPrUrYbBhw4bsG5e1o2mPnKVpSpH7nXphJJBEz7MA",
  "key24": "wzG2fU7XZXYVwzFSvhvoXGrVoQbwBJ5QUwCoSDtMJxwdMC9aM1wpAXcezpDFcoZ6oCSv33Cf7QzprbZyjF9hTfq",
  "key25": "4hp4W7pdgVEygkNXapaDXFGqL4QFMKR7szgFyC2JhLKNWBgiQAsA98j3Zc7zXFQhu7xCY5dQPwJXZ3f82iQzH3Dv",
  "key26": "51TQotNisa7a7yyMfmrWM3pi7QiQ1UZfZ3nz2mq1QqE4LTyAwF3jUZ4VcPPuvJCy2iCoPyodWU8XSwnQFvTCV92v",
  "key27": "2YFWnRW1YrH2v9ykkVvLxfpKvXgFgEEE8ZhGGZUAgFjewNjm7fRWm6JwXaWoWfWSnAwaXqAFBtnKsSPKyv36EweW",
  "key28": "2qGyEmRNPxaC63Xvr5CGD8EKQr3gpVhw4ip3oPhjq1iHixpV1PfYivh7rG66Th2Bek1Cod5v8JMKvU3wnZwrhJjz",
  "key29": "46grqesy3FR4cGqNRMfwoXNccoUyZH6fvTsiKJ7EnACKKoRtrSy4nDYdkaGiMTGCgDzwSuTHrPK4i2ujTKwi9BeE",
  "key30": "4TnpfPjh6SdUcgdkHKvc5LCZx68RwZ3yWdhgbZ3jx24yHUruWqrQCRZFqffFbF1zXtGV4JC47DcNPQDMo8RHCobM",
  "key31": "3fJPJSSGF8auB4w5tZTD5cmxCL8yJC7q3PDBB4fUa8csotm7Pmtt1H3mtyLXKkcLNL3P5EhKkVp2BqfbAayy1ekT",
  "key32": "3j8N4x9sxB5Zgt9WBCTTSGApqFHpUM4M88a2iT6qJnEEzeqdKkZEw19DvJLxdZKF73qyw3Z1HRTPHzkmF5WLZ8Qm",
  "key33": "33haZtaz3pn621zYUpSUM3kxgWxHtEdYKHmCNz8QeNcLQD9m4nQL6DGVRmy3CLTXDHDyFqyfwGWUFdDfg1yjQBbc",
  "key34": "5sZtACnTWT3zLRKn7FEbs5aNu2PdxA9t62RkU9767kvABaT2vBZk53jUQXzAb83Ccx4bXoKv47jpW6tWRDK3396r",
  "key35": "3qFxXk3yrKQDdXpAJeQCya2VEY69tj8rvkLFXbWr4XWZvtsVtQRPEt8htpzPGXgQaQnaexThYdmaCtpRDWgDcEo8",
  "key36": "TvthssK5BxXt9ANa2991NffMGqq6M2PRHceyVcA3kRfKDUhwS6kH78e2GabmHXaD3waka2TFdGyiSwzZpJJVuHo"
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
