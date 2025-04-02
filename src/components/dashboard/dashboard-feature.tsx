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
    "5jdoeQtHhDDDmAWgbYm6ZtQHuS8zrPc6A6vt4tE7fVX3EyG548je4na6SzF9iRKbKf4ovPxhujwM7qQ1qZyywiXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXjiQu84MhkJE2dPnwa4nZTPTzNFzrasuUzyjdmYTjJvRPVigDUzKgesGjTCBKHkjEMVtJxK9tHJ3CsR9gjk4zK",
  "key1": "TE6nxZ4FyHq2geXketgu8Gx7tX2UecqRVXwP1nTrwKb9JDDdFZSWu4CnVtB9obJPdvU5YmLPZVmqq6aX4vYYsha",
  "key2": "5P1Rg1qcG48vjECKfPjDZYKRpJ6svtELUrU8TQjJkNUYCesayaRGPPY719jeTyK28mCskGWtrfbVXRpYpsi4MuaL",
  "key3": "4Ruw5s5We2YHkK5YaCgC9nAxTfghTFMQhYBh8vcrD8n3KQEsGfyBWc5JpXk25GJ2U4bF3wdrxqv49HyRXCVcPrvs",
  "key4": "5NzVA4jNyfU89UGnchqvZq4EC8KA42wH5XpaZQkfNM6QS7MXriY2EinJF4NxM17CUvXFjED6ygbGgzbNwrrwvEYf",
  "key5": "4jNnrqoasZF7ukkLvtQau6qS5FxS8HWGhveG4zNJtoT3Xabscmg7b94e8CX6LHnVZrPo5odQuXyr8rL9AT9BMREv",
  "key6": "5sHWenZrpdAxDcYrz4Htc5Agme8kepR5yWx8SpFxQEEMVTe4LqZ3Xhi8PLyo5xXKsRSvzJ3MQeKAFrf4r9ZLvN2s",
  "key7": "2irbxTA3S5hEuyHDmv1gr1TLmh5o6v2eaCMnU3ugcomyimxu7pL7iXShuinx4UsbxcXiFbJ5evQTkoaJksPWWjYx",
  "key8": "UEnHbQ5m5kujHgStYfFZdHXXdaXhEZ8dr5ofjPXUfgKtE6DDixAPPeDhAv7S6LaXgcC6qcWN1gaG8von6aRJLPf",
  "key9": "2icaA2mXHLBzjFVLmFfH14tsSmiGZSoeucSEguPWWjiopEg4QgeBQPT2CX1N1C875qs6YRHRCbJShCEAnvCCSNv9",
  "key10": "rK24NRomRMSbxjMsjaFryDR3MMeijz746MMcGKAH1Bny3oWRVWpgpFnuA4hoeqijhwVjh1N1hxWizRBvxgzCtBz",
  "key11": "4GzKb1S9Kf1q2pHtPVc7NrrXbiRVd9r21VaLioFAz1QMpWzVi7FxEAVSzV5AHWb4Kpc9ei7ww1wS4o4rENgcNmXH",
  "key12": "4RxMeYbzVuq6Ze36c5Zd7SNa6cqb7dHn4VQdyp1vJap55SsZCJ7HLh3JWAFTkLayRQobvr8MDhfgni7CZhcDErPb",
  "key13": "5CJoZiohwehpoTH1yHXAMUUvwuRg7ckw26NtnpLApZB5hQdGhQR1BoquCeNqvFxyLBCDDEpAh1sCgWxM4ATr4FUL",
  "key14": "3qHjDnSxM8MSWVxi6HZ1GJC8YxYLT565aAmJRcZjD27yNLLQPMfEPq1qTbxG58SejPngii2L6PPGNQfkyKdXuRuj",
  "key15": "4AiZhocGkukGBkyT3XtruYycMbYwpcKez9mxFifrxePaXbN1vukMa9azmU76Ao9uLUaV8ybpM1o3VaTfrK1yKsNM",
  "key16": "4VMDGeZbpSbpCFvZm89vRtCEYdL2SyLedA1VCM1FLLyrDN3T4rJubK5hfGTv22YNCmu6KNVZCEbPBaAwWZpGrsCR",
  "key17": "4cNTUr3ADSCvM52rbuhXLPwPgnYKjP4Y1dTotf3DeapVd3AzaZEjusRWB2wAF9y1m7V6xLQxAv2jdf2HWCHZcpqk",
  "key18": "QJK71gc2caokxvD6gZ5S6tx6hNedyrxLe1ACAdoHQqRiRUCWyf7fq4aH44UwtydoA1BEy3VVgjuTNesGTs2Vc3r",
  "key19": "5L2acLRVqXGoVgzXzRxp5zeYXK35p7mvRXtTpKh8i7zsbchNHXhFVZin9pZZpLvwYws6qME5R1vpmvEu7yrw75gy",
  "key20": "4cBv2SCpTXoSXjLieN1F45cD3R2AFvoAeL8hHd8PFSxs6AghpwrzynvSXukhtDbVmreNrE9AoWGHJuA6WL48totR",
  "key21": "3nJi8Penrdb2PNtaxptrn1DgehCyL6q2vJYcDocyevCLamng6fKTEzwTSUuR8iUVYPAuB9izBYS8BGB1T5WRQuBa",
  "key22": "4Un9tpuVDEs2pZc62HUfvW51JSKfDCFVcv4xyMDXRbFvAn9uPmhGvsdgZmD1K1rpXPxJcNF2vbs9Ykh4cd4UL7tL",
  "key23": "5KaYJxguAyLyhKHHzbLhGeaZfYLcog2fF1GfkyaGgGLxQ3u1mP72agnGpTtaHzGZXjtNke6e3XLW2mN6AVAFp9HC",
  "key24": "22SnU7y1TjYxvwVKrGGeJVPAeFVVDrckGVhsnKAaFwBs3uRB3G4YvX9ivw8ddcG1ASD42KGvT2d9yaDcjwhyjWV6",
  "key25": "21Jww4NjohosZPqTkfo91HcmKDBAXyAviAdTQiMVf189rkTHXkxW11nbjsWgzCQtXFw1HEQEP6yxSZ75e9GpCX1D"
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
