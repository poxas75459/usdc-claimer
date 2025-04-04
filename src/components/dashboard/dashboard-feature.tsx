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
    "63XxUXTiRwL1SGpNbqhWkR8BrcsNJT3WuxQCfGcQBAbxD3N8ZfGX7dkwT7euZDFGkPgLdUDyz6ug5N9nziEGcRLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fS8kZQYXiJ98xGYQbKRcsQcHUNUHsKgLsagnYgJX1MPpwLBQxJuQQhV6bZKaxuV6Uxd312EYRWuCkxfHkgDkruu",
  "key1": "2aHtiyJwKcFd3AZGnUBVGjN8wRBM9HdSC1ffRNSJkfQK9CMaRje3g3JGeFBifv2DSQrQHr3e8R7w4ZSFeGmvqof8",
  "key2": "4BeQD2FF2VihhCpUVWqoCTAhtFeA2vVYsRyRqf6EfVxE9MKJg6cBqiMZggvyVDGXVHn3tX244xQ5Av8QwZa5S6Py",
  "key3": "4a2jDqWPvKbVpknTwJ5TSLak1TFqopWhgbb3cBtbiRzEafvLr5TxDEs532NFwQr5wpEeL5fVp6rKGJf5pdBKDQfx",
  "key4": "xChyQ9taHcQqPMCpQvkb3RY9AFpWoELuGuFbxr9Em4qLDyGPWYHZgYcf9gvix1xJzdS5axy5xYv25bV6yGuq5eL",
  "key5": "5bN5wD62m2fSfCM9uee5rWR9yYQw2YC1egUAdEz1KqMecN7ViGqCDPNY7zn8eYScx5NBTuKhtNkBCPhBGrGqQXFD",
  "key6": "5RJSw4p2hurEMBPaENbgox7CLfX2BpZ6MYKfHApdydGCZeS9vWUh2zfdBov4MC4gw9jPLxhdGkHSTd1NPqnpTVEA",
  "key7": "dvS3G54DiB8BSgumc6Krtidp7NFTZraRPXJTxoSfDgd3EW8uABPQGYxZ7TRBgwUy2QnuZV1SzjLTGQyU2b4fZNy",
  "key8": "2JYsyDcbHXy342a1uTWPt7F73w1LWPJ4bocjBF36TUJuRYxPTqcTqdKxrqUUM1WKRBHSduoz8BMQWgJkTDc65huT",
  "key9": "wDAMQ7NTk9fQcKeYwbAou2qcTb5T15ikPHByAhj4UDsDBZEq1RzBP5wVMaTkHRhVb73kpbLFCBf1nxZpoZarKga",
  "key10": "5wrw4Nxq3JFfMUV8cxxMNWLxzNLZtd3dpUYdCvb2C9wsEbGscdAGw3dyddAvHkjGx8AFeQcAyGWLZ4ieGBuV428f",
  "key11": "4Cx7REFRocRsK3rXrZoakumZCiwKNhPrrS4q5FfL3w6P2pJgvbpSKRBB4UGKVQmdgjaoxX1WL46QhD16A5NPgDd",
  "key12": "3pQaQnHvnAxdujTRr7QwDwFJC59uQ5y8DZYkhmvynYoc9YcuwFnaWgwawzotxwB1QPyMuFPGn1D6rTTfQ5zNr3ZN",
  "key13": "5yVHLDtXV4psrrEQRS2BmGp4kR2186NjDttTdDoVzzg9848JPGMFTQnAK2BRbAG8pZFB95nD38GgWucXpGuMJsMG",
  "key14": "4TGEV8ZZ7tbTK34zC41em2KZyjaBU68hSrDxAcxxh35S8qJkyf7xHswYXFAHnjgYDjF8G8cEm8Nx1E1XaxTwLVyd",
  "key15": "WhUyCN5L7rznLjFvWi2XPYKUKGnw3iGzTRPtVdRZT1hTikaXc3uKmP6d4uQjr1g1BGdaHRhcH2TXF6EGeES8VLy",
  "key16": "2VVzyo6vVjLHvEDJ3WQkUchaUTCBcdDApfB4kR1HxrGT7wJnsV9i2fVrPFbH98T7ZgRUvFJFDVYZeFpq3sUkNFTs",
  "key17": "bquCgmwXZajGEsYLWBRe4XtDkX5AQpHaUkKUWBn9Qtu9m769mBREv3sCauyUPpi7sNMLfUnStqG2CvM1phsxkBK",
  "key18": "2HYueM9AxrzccrXBmfpqWLLPe6qaaxazNsMTBkPCpJf3bifrdh7z3UohaW7R1F6Zj692Vw2uZXV4VPrriW7qstPE",
  "key19": "3BomQYKdDtxbkFcUWa4ZrLx1qz5VojZPDaHgF6s7Vn5gDwRSaQiLXKNr7ZSRBspnANTqHA2cDyNK1AhhCKnqYpNn",
  "key20": "3n5JXdVu5WZbzeT7pcEm836KN9oGcq3iTHbm6KsE8pULfG6A2TmM91ZVazZZZi222Bnhn2SUVNQn8sUBRt7Gs6RK",
  "key21": "5EqBzzc6Cv3DHjoRYxyPtPQDe1nK7WSEGHbqDNAPnyBy4BuSYqJSx5A3iSxnNtGRYWpGi5Xfaeg7UJu9yVXLoAH5",
  "key22": "4TTNdqLecFJnXXxqMdMCk4SXoGKhDj494eB4Gf8n4G38G2paySAJ1Vb8ZkbfSxYWgpi5o1PpaN3jEQnj9m7299LZ",
  "key23": "eqCPAkVc4abuticbxBUekCPZJMvqaFhmGSNAcj3kNrnHNd3pCNwBqnvD5R3B5eywUue1vypLcARC3P1SVuCDkZv",
  "key24": "4XiJQiJSRxjacUCs4yVjLrhDJb1631S9usvE8a2b9fQxVRpRWuvrR86fat8dFkFysJsJfD45mmRiGW8yBt6GKzL2",
  "key25": "4dRgSwUhF8KnQKx4KXqrWh5hG3NCp3XL1Pus2QwdZnsWFdbamPMSJXH4egMkswKRit6SZ76g24ii1Gevc47qqJ8V",
  "key26": "5CHidu977PdZ4GEf9CLcJrU2viMcNWNz7HKDhf1SibuEBKq9kwDXAGzndSnGM6ieKE7LhmBPVxzdPvRyqXVsG94p",
  "key27": "2USEH6vqNFvTD3mm8GDuAAQawtrmyZGzdaApWEYpk2bEqUwXFPMhaHkmoE3rjBX6dutfPgoCRrEMathVSvVaf1Mr",
  "key28": "3QFx75eKSW6DeUZtouP1qz6ers3BAcuxKMzT4WQkXGDAr8mbB2CvJK2Axs3eD6Qjx7sHduM59nBiX4SLVsA9edxC",
  "key29": "5E9gNJp1kqiaYuaqmvkYs55rjuvaNyoPKKw5pXAAbHjoEYjJAFJYnB4p4fvJXh3L3NT5JWyHg5wGZ4u2LGsGAuF6",
  "key30": "5aUDUHSES9gBoHR24DKJ99dQp62o6enQ2dZSNkUaQ7ArCznpwWj47f3VRAZFdvpBsQtKFqVhuPFEReaxWq62eBTn",
  "key31": "4NyJqxSVKPYbGW3fqh2pxbxPxuBuWVjU2tSfBGMXyWpZiCRUv6EjnhhM8bwQMzmcvG5x5XpkCu7Bs4TcFTATEhx3",
  "key32": "NUKkq4G2AeHd9vWNgzSVGVrrprgkadriJQemZY2jvFLSfyZfckdagWaYNoEFeWHJ3F3RQqm2BfB7LYR2vLcr9zd",
  "key33": "46eMwA2RmiErAY3gnK2sVabcf9UbBvo77wrmkPhazEZFbx234qJJoKj3kUvVLKqBH1JUhWZryPr7ZKy8RwtftprU",
  "key34": "5DNbJc8ATre1SjAXgqgGVB8S4T94YyQn5KsBZsXd4XRE4nRqJcciaQLMFLUooZRSfS6jLD5WXMRspuVkN1iW7HSk",
  "key35": "2oeQ5L91grCb5ubyp2yoS3kMMN986wW5XzW1LDYamfWHVHL8DVWdUuYbVaqUMbHnHNiAfoQkdfoKgZM3shgLnHQJ",
  "key36": "5Rycp1Zf3kG6YduNmVofTdbq3NFUNxEmgc3Ysru9fCTzY8sMKxVhPuUtLvGMb3W4635M2mzyiWHDkQhSi6ng39jB",
  "key37": "5umbDPvAe7asWJpC9Y9veBgvaS78RUPvaEKy8SVvT49qEPy575paGJK4ncGJWztbJhEPqQqnU7DDB3JhpJr6ydkX",
  "key38": "3t7oEzuFt2z3kbfA55A349GjdnQkRRgMcVULyNS9nCh7nb33QtrpJS4T5s6qTqvr7LkUfnZ4GpdCeSzogTDJsJvJ",
  "key39": "53T1HPQLXixnjZArctPbrcDQ7SgqvqdqngCq6514FMpxaZ6Sm6BULxd9Vfp916WAkTW4U2mxWcdS8yNKEG1ggNSL"
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
