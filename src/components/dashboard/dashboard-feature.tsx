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
    "5Yaz17UrKotMmkThrr12P6tTV6i2xVw51yNX5qZBkbAovz9qo6gXT2o5U1TSwCmLqq9LYVCgvMd3USJgLqHHZ2Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31v8hAEYoZQk8yozjBmeweHzRRprtSxrqfq9ENAgcc223oi8UbjJWWQcm1XJ3UJmLp23U1bJEDDUuc2QeRTBWFGb",
  "key1": "22ix1AqTiW23JGxMrVhBs38ZAvzqzYuYpEiZGo5Cr3ENLkYV8ivLtQE1LBhd5CXpSVRnnqNYVohuXGNUVbg4LQgg",
  "key2": "3cS9J4kFzrRyvRHaZuwuDVE3GX8XASUZoAvSrGbj9j7MQGF1cy432Vw3dUaqVzLQVN2vtBPYpsW3NrzVnBxuRQrU",
  "key3": "4iqYZD5tLP5XCQMjghgqskrRuAfF3jXCYDMaWmdFWXKh8zsH6XxssvnekAf4Vh5UcCYKSPZ3c9zmxZqqcWpjvwtY",
  "key4": "4kTpzG5DY2QqCfBQpf55J9XcRSnMfFnPAcJ3inKfMdFJEjTFC6pbEVgsCSq26g1YxH8exRGnGqrwMyjSzeybm8GX",
  "key5": "5SmKMgPbudT3X6mvAtSzVv3agTjis2iENAsRvJJbmEGSNAP2NGvfZnwXsUB9SfhuQk4WNZEaVaJVdL6Ltmatd9yL",
  "key6": "3LWGrN6MjqNAMZHRiqLrXfWRfXXEHxh1RGW3DLZuin5DG45NSdNmr8zpcJ1VNt8akUyrMjRPSoXA1Xje7dA7XMLZ",
  "key7": "5zvN3w9M7rDRgxReHMp6jLXshQ3Sn3c9jaDJJMG6qAPbMySBPRTL9MeybfeA8pEzN3STq1BFN2bfmvUFNhStbFF9",
  "key8": "2kxPZUZdJSEv7CiqbYkATA6XJ41kZ9pDvkkWoDBg3Jb1dWQ2bmXSyiuQtXaiJgmYPNctyqmH77eot1gFSD4rRDdC",
  "key9": "4vcCpGPsHKtsfFL6d2EBm4mTYsK4zHR7P1yYJRbeG2VdkNoZ8Lz3hFGgxRAy3wAY5PR3iaCi1xXKTHYtr33mkahu",
  "key10": "4VK8PVVaFf27HZVnE7xmoarqJJyQDsKqPUc7d4eZMijjLwqofMZNF1pcgB9oXzzo9bAdraKUetRpfUDCNYijrPA9",
  "key11": "2XegmEmgtaH7J5a1hCQiyMw5K1x5nhePRnNTXsrXDX64dNbdQGDnDhiQW5GwkobVh8yhphpcVeFra1WbhrAWPK7k",
  "key12": "3tGArXEjPSYQUNnHdgHahrCnjzMCGAKrJD9yvxo489nE6oCr2NN7USBq2tBWM1v98jQFExxXMjAdtm3X8NWViT83",
  "key13": "3G5byGXgdhKGEA14QUyMBK9wunkMZeWY6aaCRQoQP94WQ6zPqnAcLeHJ8K5xBDdWBuu3JtrcQXMMHe7TxLRoRK2h",
  "key14": "4ZMSQRxHRTBqGGUUuYFkciiLSrUAc72x2WqC2fJcKLsj6pgr5Q9ivgxAXrUmx87WUBN3L2n1nh8mHNf7yZhu2vwH",
  "key15": "2uFJNdjnK7S7Zcab1JyC476wSu4iPyvADe9gJoKU4Z7UspdNDhcXSYPEUWZdWN1YfC5Kgk49uSFMXqHBLzFfzrGT",
  "key16": "51m6aomL93MTJmCoLAJeWB5MqoG5EPx1KzZ7nSP6QyZBhWVg4QaZfWZsLZxkBpuqyNCFxKDvJ81isnS3fSaF36i9",
  "key17": "aSpFFRwCBFKaNr2LrfUJ6wMB8o5vCiuNCahW46QJ1YtiwyCAusL4KCoEoC3x5oLVeKVzpXCMi89ifWTGEeg8oJi",
  "key18": "2q2uALTRcyw7u6wuguUyG9idSeXrqQeJXjAtxzoS8Su5VVqES8VHsWDahFs3D524xKyFVD3HX4tJqZWxkquksY36",
  "key19": "55mztAAWgVjt3CL5PzMPhY1yEWPKryVBL836YrV5G4hZppdN3JDdK5ESdB3XakzXqYdcZE8bzUJ7mum4yAwkHSpe",
  "key20": "5E4iJhjdgZn6pMTV9reXj9KnranmbcwtLs16LEvdwMGkWTf8TLZJHSfWkyBgBhwd54UF9pemBMXZvxoLku9WpVFY",
  "key21": "5jyy3q6YammqgmJQMdu4hMiHpjcVDzkncT86viKF2RPrmgERkwAJnEGzqrwtaaiXd4FmL6hYjxrPUL1JCLjXo11D",
  "key22": "uBt4ijKutdDeVQA9mkHadJJ3iCPn3JdgevbW8GEzNqLYBXP8xHcQi5nLvRU1hJSF6JXhzv8xjX4GGNMLZeNtuFh",
  "key23": "5siDcpDhfaLmGqbE7SCoZwFzgYHQ9VgH14DucLRrsTGU475sZKprqSABvdr7f1ggJgg9f8y2nUy4jyqhebd5vb7M",
  "key24": "2CEr4hGi5nWUfjtZxiM4uXCHNBLuq3ANSgczfH1rMNpUZgkb2mHcTbVAQDqfTQTsTz9cma7Bn6sNmdifLjrhxNDh",
  "key25": "3TF2HitfzaRUxaFghtMES4BYgQqnu4baYHPNEA5Vni6h8ta2WoAnDaeqxQDNUqR1BBuHzF3zcCEk6JmtmAs1s5PL",
  "key26": "2ZTYZUW4n9Dhz8qfsP6WDy72eTyu2WjDHTiQjT5dN1hBW4r2PEoaSxfvjjhiMRfG6ww6JXkBcFb83xB1cs7thxV9",
  "key27": "5aUvujHwVKNqby2AcirqNRrQmMShGGc6cnL2BNJKioqTUHf6cBtXd85LvR79DG7MeRfxsuTByrBtrP6hUuWq1nhU",
  "key28": "3PcojFaCXzACDghxVDTyciSPuhHhyRHgzAkEp7rU96a7tzm7nt7XuoPnMszvqjZ9sG2V5GGUrv16GMXFsAET8FFr",
  "key29": "5YiDgKdvczRtBm85Ge1iR4yZiEEWiaFikz3nMinFDFM1DeHWTcJj9dwybVCeZgWLSvhNVefrPiyjRzyQUrEYP8bB",
  "key30": "4gTidFhGxYngizPeHnWEY7kjmBUVuhqzxKiTdZUZsFcri3mp1jGx1SGj2VEoJhH3Mg1zEFviYRKe7AMZszy7nVhv",
  "key31": "2zgG3FqCfhiiET46YTTXCSQoNFPh9C6nSxwe5Wt9MgLj2j1UAtUdSfBYyqp8SFGHfgz1USsFZ8ewYbPKJPsbBfNv",
  "key32": "27prJCVVVVrsndoqnSm9C2EsNP14EEf8NVwQEpKQP2nsutqHDGw58nYjtBwUMK8mcnaLm8iyLka4TUno2UmxEyU2",
  "key33": "4jKficcfHBWeDRquckfSaZhNDoQQrLWek8fxtVecSnzCbrRGZFm9iei4KijvjqJzyL6tKEJXnZBx3Y1FpANbXZYZ",
  "key34": "5QUdLcyKKLGjpnLBvZBQw35DGuqJU2Zguyh6DaUeyf264va67TknWBUD3vwQsfrwikkcMCEiUJdaqbB1dNk6jSpJ",
  "key35": "5c4AQMBB5udm3ZEPkueNH7hNakpK779RgcTDAnibz9o8vC1ZLvAtYjYwL1A1r7nqVvaRfPL3cqcxzdQZ7W8Wo58V",
  "key36": "5XBqpYXbicQsc7FJQfvSJCrVXwVxcPBuB5bJXy759apqKyjkQagoKYSPZpHZBQjmF25mQQ5f6vQFRvESwxqUniaJ"
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
