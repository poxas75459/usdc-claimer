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
    "29Ea1Q5s6MaDy5bnH2KF3mRom9ZsVCyaqoojURwqLyzJHxTLCDxpuC7LxNYTuEWuZVdRJ625NTweCiDiYikpYmm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCbCUa1Aznf8dSsj4afxvYEUM1jSbpjSQZrFsES8vE3GQ4ntWRUHYuWTRJdLCTxx58JgFgY6PcUy6wdGqfaW87b",
  "key1": "Lqw2ob5eUZ54UUyMTuKfc3VaagbBgyEFxUjpDrLyMTWuEGUDqC7MnVM6oLkSg5V1Yh7KyR7dE9sz2zqdkWLJqzv",
  "key2": "ysCu498UqtHGfrzHGTEs5H2pAKcbxnSXs8FmdKkWGu54rabGJyurn9Ywm6ybWKcHErUT6BoWV3K1U5RgAJDUdPH",
  "key3": "EvFSGbsx2dyEQ4GjBn9ieA8hA76uYcZHgXQEmWoYW8KEP1emQNYvwtGFwLJT6gxtzhikuRewm7F4891f2J4Xwtn",
  "key4": "3cxNE3wgH9y6dkvTSknj5eL9WHy7C1hXppmi2LVAAQVJkMcvH6BJKgFGq6ih7f8hfPgnK5iPW64nNg2rvBW3pRf2",
  "key5": "53XdHkTRKXq6xZJ2RU3EsjayBfo9EafMJvsGR55MTR8MyWaBj1ShHusexbtAQPv8tm528R3EjHAP6aU1TXepQYYA",
  "key6": "4QML6FN9BLEX4VaeYqbGJTMtZhwYTpSUSSb5hENNhZcDA3qfTwFwP5saJsK274xMkvsotxMbYF6yY67DroiFZQCD",
  "key7": "3KtmJfRnKmCzzWkC8WfERDM2RXEqymBKRWQRJzZvCC2VR3FgmPKB7Kn4v3xXgiTAC5ieLfVLRqd5E7tya1Nida5e",
  "key8": "Hj5ZcGoAcDTcjvgkYMX7WjrgLPbRATNMKQ4LzAaQLLAFdmMyJV59dMSNP5N6j3c3AMMSsj48ZhW3sNTWqGY1oXa",
  "key9": "4SL97kdA6VHVc89asneqqfDSkbNsUs2ktJqroyKPgAKWLWvxxvjMLjsV2zKEs1J6KUyxJhxQWWXcrHdX5vtgXR3L",
  "key10": "49Y6iwEUBuQJtFvugKdqXtZH7kHiaG7meLJ7BZb448a777c3CdkUnjo51AtU4Z2qLsZ16Kkipbfx4jL6LWAnXahg",
  "key11": "5AkNcC1QNWsq9zmaC4Lqn78CstqfGrHNvgxGbLU8ZdbAB6tpjdVDW1ZFinXCRsdpx8TgdeKPLPGPcVeRJjJqTSNN",
  "key12": "4z9RGtuuQvZH2srApvWd6Jd2SWgFz82t8awJ4qnM3kZSbNZ2JVwgxip2CVPEhQEy4JGrbXDEKN3DCjK9MLGF3dAK",
  "key13": "2VdaKHjD3TKoUeRxjYFPUP8VTVjwuEPBQAXCnfN8wWaGFxmEoyD6RLNScmvMbAx2csoRQdNhGMoQ9RT98vDKdbuJ",
  "key14": "5v7YXoEzhKNkpTAYXPXFreeu1NYeMvYjL9oJhQRD8zVkHGB7QgsWijNPMTWG1x8rpySz1SqTyj2jfNKq7gAUq2An",
  "key15": "2J2jBrPkCM2s7J123v75M1xPvjQjFwKTHtqZNc2dHwAT2xooKYRtYEJuRm2tq693zd16CGDqMtcDseKbMYAEKsnH",
  "key16": "67TLacExAKJKwoFim74mvKj4ZAZFAwYDfvoCpntiDKoW4y4G4MaSryaVaKQMefGYvmJrHiZQN3VLvnwsXsNzEUs3",
  "key17": "axZ8wbmpkCRXYBbxsjcbQyPZKgck9GnC5VN3SAoPjeUh7HysCoxY7FA8QEzAYxoKEqkBBt25AXnWyhKnqi3kNxV",
  "key18": "2kNBgULCv7c7WXJJsLX4YZ6Nsj3CAUpWvTPMq6tp3t2QzQvbehygb2U1aPoCQpYU51Co3tGy7mdyJAtqVkuAcybb",
  "key19": "5kJFVAAd9oPhcwujNaL4isTKkTAv8MKxxLggAhpDfbzbWxbE1o1Udheq5BrAa5gJYSTMgq1zLNFMLsiFQfscv8r5",
  "key20": "m35agHFpUkLN8SANHNi9LXA2QNh5QnfASy4fjKTkmXhqAQi3wrf4Uf6YmdYXdCtjmM6v1AH7ZAcwMd79rTzxz95",
  "key21": "4CcGjFEiDkDSHRFktKVe46kYN5SVczVMRX2KjaMXW54cF5PiR1ucSVzMoLiBSv8fgfqSzBcy6Xrv1GdWuQGBNiXF",
  "key22": "piahfkxjt9GpQjWdmKTGNxepxRjiujavexY3nCh3MwRcVxLYgFkDJMVYT8oMABWZ18woGdibee8fcxWSjxtigtg",
  "key23": "61bX6f5g7WNaSunLtGBjpjm9U11GbRA4dhSzNp2diBbmpets8SN7inN5FD2FBGddASHUQMn9FQvh5UQJAatvS5wN",
  "key24": "4aD9N1ZHhKS6i8KYNHt2aNW9abnS4m2Geq9oXcJPmh8CywpcfSK8AkZmLh6DqSz4EMNK5uece7KTVtAvwMc6nphC",
  "key25": "4F3yCvx6UKU1AXncVNf2YB9punL46LP9ozskVMmFpCaoUjE1ictSdUFbH4AZUqQ2sM3tgCxfDMs8Wc5rMhffEGRX",
  "key26": "2dT4dSsbzv8cr5GfsdkzsPyQX1dpHqR6eeDD1F1wTb3DJ3ozh7hdDQ8xAzJ61NvjoFr9qWkZ8NRa1kK3eX8tMLFb",
  "key27": "4tLkF4M2oLfGFJdW4s2AjXsqFaN23uyvxvGpRagdc3jcX1RXhXLsKdryRbUZrNSixnAuBwDUfEH5G5AWkSYiBP4m",
  "key28": "3VZB5cPx6pvdmXfKVQ9txsbDCv45bqdonqHp6QZXSMBcCbzTuhuc3wpUKMuRux8aQgP5mYiPTJW2E72wYhtMqHSj",
  "key29": "2sRsMKCDyjbRvZ6sbChHjJ45K2nfNKtdDu8W9Ht9iXsiKXUNKT8M33pYQN7vz11ArmPGCECZGcLvgj6sv3Rmf8j7",
  "key30": "2RixYJtMBxKstfr2bnjDSMVxuKwj9wDu4kCWw724PkRUtRhpPf8uwEjL8SzfdJWKX9uxckM9L6a4SYKrfeWHhVAQ",
  "key31": "4osHkuHqnTcSjLkMiJLDoV4VYoA3NkWuvy4RNezPf34md4JmbvDqcjHt9nDyhbdxw8N6rtd47PTCdz7hyuavfYbJ",
  "key32": "hVkdztxpHcwVdR4a4foQqhtX539dnJ4zEFk2xgHavkDZ4qjvs2SrqdJkAb6V4rPG5mVfG1KPcHyvtttAqGbx7Xc",
  "key33": "4JosSEiriQG3VX7nxuv6gUwVma6k9XdkroiM2VfdRp33t36nBBfQe7xaQ1t3wRkfVoQLihcRyzxUQmq4wQFgn5XQ",
  "key34": "5EUqejbeB3eACWHN2DyebiazmVfxiJWPzpVw31TQz3yUqQbq2uQSEoHaPUwNS9tkAtzKnknotThs7aRTgJDDXFRG"
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
