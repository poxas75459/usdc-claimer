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
    "5hbz2iMJDSsftpipLRjqrDTakkXLcdXdUoYb8eaQfLHQZV2zAZUHmBdyjos6zrNtqxj6fFgfYLBHPc4wYsNeZnsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X2UVvFvTYqvHc9vHypy6J1EXHUNaBGvcJapbqRzY4HtAWvbbM3LEFKGLViV7jcPvTKG3NVSYm2sBrMEZcXnkCKz",
  "key1": "2fubjHVhMdZwotYyCWxdX58cL6td5D1SuHHxZhs9As8JWbCVFCpd8KfvEan3vHFXgR85uewqb1S254uDFgpbaafg",
  "key2": "4X6fWmMecMaSnwU8K6U5zQCVLSadHfNxcB8dETHbRHPyDvfJLEoCfq351SZ8oLcnQQqU8i3v6TuWQzx3K6zxrVMp",
  "key3": "2RdXQCeRTScUhqpZSM5qR4XpoqiAhcewMCuySDjqYnbhfw3mX5vmP4wkatiwx312zqZnwjTBQH77no3z58UNvFhX",
  "key4": "5c3vdPXQmTsuS1YR5oML7MDLmPNdbHzz6W57iQ986DvQDh4Hqq2uwAoSdK1QEJaqor6CxuzmPS31K8UHydBSmNsz",
  "key5": "ZEh5kXtAciA8r3HAF3fLTj3tXAabnaduXSpHLSGtMYe51FLNXFSLssaAitfWPjCsyPrfLAJc9LAXPtsb7pGXVNN",
  "key6": "2y1LSAFJUoghMj5bSSshVpvPgufkWG3cGVHis8nm8eA4iNJa9suPRYE8oncJyYwWQ3DmLaE4HPQPudkh6XmQpY8N",
  "key7": "5RCuMLESt8PHc2zJozq1vAxWYG3G24dESNgbq7fsCw1xCcfj4nkteywC6ynnQuRjqmkAUs33EiWoY4UP3WwvkysT",
  "key8": "4wMGprHeLtNTdDaHWy1AST9nBHiChtpjpkXfQhfpmyA28NP7TFmZSSWCTJ3ZtgffAbj8XNZ7LtK3DbchYW1LUZ7N",
  "key9": "yvwA3BF85wKyRyee48VBenhgxtzPXEN5tNvXadRqDYBS4EBXjVS7MBEqeSuMicm9Lrt6JG4sRJVdqJu4pftRtoK",
  "key10": "39h7PUdaWPamTHWzXXfweC8TjmcHTiffUzHWjtAU2qEe2uSNFLxyFVqjdCyyN9YfoX6RvdzPRvoojFd9xbvzugvu",
  "key11": "2634EdhVJ4in211B9LDfBj7d7Y9PzW58Rhq4hhDWgz1cBcoaNAKCL6DTfqAMQhKySdxV6YGiQEjy62QXresLQyzs",
  "key12": "3G3Y7REuAEqNWGTEspyRtjgRMsV3nPnFK6N86kRyQzxXQuihqXnenWraXmVckdpgmyWYrGLgAvb7V9xNhJsp2SyL",
  "key13": "62zMexJrpapAaWNA1FY9xXRxPLMHPpgJgaFvDaaaUz4ixweDYoBFp6eGTaYSa4dhh54t87gEcEupUnXTA7bESrsr",
  "key14": "2LaMrcjKSyUJDeS8MEL9XHFbeMY82kN2r4Baetw8WHFf6PZACXDRMDuBoyXqiQV72TopSEgGjVdYnZQLpeY3NnAG",
  "key15": "i2axbykLKZf3UcAZVa5CpGj2hCgAaUY2fRFPLeNHLqMF6GNX6SnHjXpYVjGJhBeovorrGhv5j1Cp5jfaTsQ9bro",
  "key16": "3J8QQuv5MhhY8zVifma8rMT7bstpjVgkhhiBNqbvYZMhabQkgPP58ZDwj7xzsEyAP2VAhVnmfoPYZ8yfCQZLivxQ",
  "key17": "2Vhpn1zZgG1dWruYbCkystbc6Y5b8u2D1csEDU5iNqkQkxVe4ncc7dN3UpTsz4x7gXEweDK3pZt7dWwfabfGENif",
  "key18": "4ZzKmw91r297tE1SUaXs3hdCDWCNARv6AUnPWryF6Mr6XTixGg1UgK7F4A4cfRA5ywT4qDs9rmqZr6MtWPfCYGs2",
  "key19": "66Uniq9RxhrQ4h4H7x8KTYD8RXL7GqwtepwXr1FE9wxZy7rAtdba4cuSxrwBMxfPJqicVvV2nzC6X2nK1ah33BfK",
  "key20": "uhcSrYPUuc9E3gTPv2FCPNpy7tfTbqfjGBZpAuzfHmQrCKNBrA6xLQa8ypxNTbK4Zf3X7NRG7k3m7uX6Fygvq3s",
  "key21": "3ZkDhBpM1jqxkzygmW8yESKFoR5y22coUBnrx3oVvh4qxWg2eqZWeSUYT4rXjmoi1dSbJZoMAuXd9cwWjTL5qTxi",
  "key22": "2ceJCzQa5bUu7UUBjuVmvJ1WrMx8sUF3DLA1Xg3RDnVVBGXXYanVXZvRDiJ34ZmF5pSqMpaDKFY1WGijar1DbgAs",
  "key23": "5xMXGaHFRgagsLugUPcB4oar6uJZ158w4WCFEpacR3xGo6QHECLoyUf4rMXRFBLegM6YPJ1g3ceJVPv4nAJn1wn2",
  "key24": "Le8nnhtPyxhNj8qcgUDmCjqkuFqmxPGxm4vRjn1jBJcjULypALg3cNJpYRhbRHcCtdQ65cmUp2aS7T7jbhwFTMq",
  "key25": "3sjndTQHkaaFDiyh2R9CAVks84AC88L3iCNR8Bur4cfhiHakh8uiVGyKTrk9yRCAK4oJNXSytQtrqHrrVc4bYasc",
  "key26": "3NVzYZdPV9zRxcDdKpmkes7CqXo7T6RZER4gpGbgQDYqEk6MJztUyaqaGcQ1rHTdPcvTTj4npkcYqFRLFwAQVE1x",
  "key27": "d5fbfcESw4qRDLmx2ogdrrgCnGudizsCSDDVTMCnZrn6mJJ3QtiRWqH2ZhNUkbewjgfbfKcJ5rXDHx4YMZzEhF8",
  "key28": "2vRZKWG3FVsxExWbqYBUrZ9L7LVW1mm8b5FymCjR8EhbCuUb7vzG8Y637d2R5rm6Qtp8v38B2gTawTaRzRBvhWhc",
  "key29": "3t4JZdmVZj7SbtRFybYirVaTHJAVFcgcfEDPzXVdBQPXAfGQ43E74XKYtX3KC9jxjWt4eDpFq5wACb7p1EGTi3EQ",
  "key30": "4vTGMUY4xXPvLGstawdoT6LFgUVrLBfKTvJPXB4nbx2Dq8dZ4hMvziVf7UJwQjmemZVPBUbF1fo9ddFJvTYzhDfz",
  "key31": "L6HkGYDUhqFgWHjHKwRTChvfCx9iQJY1DmQzMeNKiLbxCNrbemTg4ecyTjDLgJzU1zQapcoYqaqGnBuTXneGUbz",
  "key32": "hcRwBi3uHKAuN3424rHaRVJXiUwznAmRunQvpDuo9YLVJMXXtCint3U7VDznBiFCm9kqe4ndY8XdTvtjkTJvaQU",
  "key33": "3fH6zqfYiXVbeSd5tLtDX134CnGrSBRoGDgH4RWmL8jrehn1gypgrTfQymoVrFv18LdDnAY4p2pcfAXTZmWz7G5o",
  "key34": "BxNowYEu2x8psGKCPZHcavNGkWSJvexhx3TYVnHL1gykazQBq72UaThoCSeiR7W1AqzBj3QHquqWP7TqLwnE9qR",
  "key35": "65gTTNwjn41xU5kjEGLzSa1Mk1cFMT4xvcUU2ovxCVF2Li7KXQZc63Yt4pZZ9M83QMUiZ3TDXjggKrYTHVnc4PTk",
  "key36": "4KS12914qyeLNwVdn575xrEncDXBZ4DvzfsHShSJDUEywxMkbu9VyzN23q8uyQMgLSSX8J55WJcgY1t4WQMraFes",
  "key37": "4yueRKAEXmgFnrEyZBLJ7zhFsPCFPhqLpQcjcUEkiQUjYFoeromPiP6a2UigG8HtroiCymYY6XhdgU7NEDKQhSFV",
  "key38": "4HCCKVpEJYgs5QuyE59tMdhqHiiVoVFohPDdgVc22BhqwNsDAaemKY9Xv4n1SCp6WGJi8JWeNNYuwQro3m8SNitC",
  "key39": "3bkZ5BkGktzR7KiPfx7vMYdcfa69jJEvKgUVMNYNAHAvqeyccFQy5mkJtwRdZ12YVsTeDQEgPVJo8r1UqQmPsdZZ",
  "key40": "4P4vUYAkoFktxMbaufpehLfZgqcYje2ffz8UccyTqZQ9Mafy2oyv2NZJvUfH9pNUZu9dQFqLi6Kpcksu4qUfKFCr",
  "key41": "2BjrUZmJA4xtjoxkKmuoQvDDMUiVnJvbbUbNvFp8xBBGL9iTbHH9bciWLBxP1mJVMBB38scncdgsDyM6VdLKt8dN",
  "key42": "37YF2xfYvJnxZujBnqWLUQHV6j3epCgBZPU6apZPWgRg94evSWeTtAr7Dr87EX8oeZy2BZqAJPYu5STAnDtFP62e",
  "key43": "hGjA8FTi2Dm2AbCXNn2sFohFezJAeWGHXVi2D1ZP6MknR7PgrVjYPYVoby7jiswncQxPaRDokb9PT89v4Beac4B",
  "key44": "4zehU7JqpUeh7XdpMbkAqSLbhjeXGT5tHGJ1zkGGrVqhMqvd2mvbknQ344zeCwdahM4pYgfyBE6cS54K5QYpkGC2"
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
