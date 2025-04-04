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
    "gguWruX5VfX2tmHmqQzr9bgAGLrdARQ6te9mtBHuV6S7aGpq1Q74Zh2VhRgUBHUGRtfq9yDveCiwdYuUXKiQ1PV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54y8YmBzFUPw8hrCqxbC8SXVwv9mDuLfphzqP4PbcM32TSrXF7bC3P9r9ojMv41MPZNsKQkd89jDzATBq51HKtti",
  "key1": "3ntdudQe3dB4AJJHxkqhmkcTsyAmJAWQc375An9Sb8eyzAWgbLS6jCRs9zDUrb2Ahczy7jaH6DEvinqY3pW4qsSw",
  "key2": "5ANavj29x7h3biyBZ9KLGmV89ZcG4kae9RYFQEhCiCQcPqiAQBpdm1UUV5Bd8NwArSZJ9yAqbMZY9LwPftNhvtk4",
  "key3": "4e155wp1CpzC2KCozh1h2ek5Kk1ofofVpMc9fKkyPwU6nGTwAVsWfVtLRyePMvUFXpTXaVUvQ5VEcQT5mLKD9rxZ",
  "key4": "4228LgXmqKFKap88hQnUDaf2XYAJDHYoJMQd46mG8tqKFveggGbgE4ELQZRn5G59zC1Ljiq8oZh3X3DEK8WBKK7e",
  "key5": "3Tjk8hGMNqTAgatcdUZjYtYVgxi3r9NvbvyBmW7mdrZPGQ85xy1fk3o6cnHSjQa16Km7W1TSTHCsp9bXUWXoxBA7",
  "key6": "1oBSht2vSPTPKjFf4KcwvQWCxzp8LpQdbVMBuZ3D7bUWx7uahbmmWA1CfnTMzjAi9hhRdE613F5DeSEePV3UZpR",
  "key7": "5Arv9C9e8FnziFQBWCm8jcf3kSYntHfGdetD4W3pupbXeUXcw45VkiWR1e1EPYPo3Mnq3Djy1GngGBuS97DXstMS",
  "key8": "2ZTrkUEkqTMtGCCGR2e7v2Ng5LaTwe4msG3gWPbcU6td1nNVcbHY3e1gy28PKqe9iNpmegQQki1QmPYxYgeS5aDf",
  "key9": "3wGg7pqwrX9M6t817xN9HNwNcHdXEbATcSCZqFaQDf7hE7upZYVkHqrwAaJbWGGzEz3Q2hPoGJm8YabiEKb7qgs3",
  "key10": "iTCzY9pcwbn1ESEkfsmeBRiiSGhs3eXXC7mew1y5z2F2Nv11vW5BFiAPk17h2VkT4VecemYot5g6B1eMWmhKnsM",
  "key11": "552gefaCSxyAtF8oJ91XjdXG1oqhxUcrjkWmKxcfYFMb3E5EKZsTcjQYr8EcnVQST2Lj3yf46LpwYtHx9qPV4Zgn",
  "key12": "2aqEmcLb3EEwPDXn9xqTQ1ZUTdr2gHi4GyQu7nn3B2ivc5p1PoTWBtzCBbShRXPeH8jyHq7GA9nu145W7AC2BvZ5",
  "key13": "4Swi37oPkrkjPVTjDqnRf3Uy4h6Gtuanj3ytzYfGzmdoWBWonZAdTyjGRsh4oPajeMiRVEsegVbhP8KxHunNWo4G",
  "key14": "2N1bHph4EJau4A79RxFRfuVGdL4BknGJ9qLdRsZpcg6G6DGdfeTFWRaghwj8DgRxfxGXh9hKRz9jNu9E2zuwooTN",
  "key15": "3ZNaZmMS8WBkN2MwYvdEuh69sBHmQDAypa9KQmC7yv9g4GzA1Q3svedSLXs7hLV5S3V5G5dc3gz7ARQAzrr11bV6",
  "key16": "G65LGzbQ4dUcJMWTsShnv4DWBTvt57EdCT6wxDN6bCVcii3wjcdozvmporc1YwJ8Kf44p7wmUrq6ESwQaEwDyPz",
  "key17": "2uYpr4rmbi6guEEQuJg4UmDrirVifUif63vq6VyqfPXbkN5jDXbAyuLN9BdmtNgvJ2xCQUQ9VqPyNyRb6dnt2LVz",
  "key18": "PyuG8AgWB8f6Tpa5RSghwqKycLSiW1H8mRT6e5xDnF9i5VtL4iRtrWJGLXt9YnCAC8SWUUx1wHm4awvCv2kLeXG",
  "key19": "5x9GrbcWYio1QP2q4AqC2a3zuW1pNvyWZNbECyv4fvk2xyKnaCCLbkvyrx6BzcMWpJxCrMCDgGDsm22y9V2zyANs",
  "key20": "4VQex2eu1ha7Lzwr17n5DhwuYi5zDnFBELeGomCR41m5j1zEYiWEWvqtp6QTebverc5kdTsLaVCtnvKd6rKGvESZ",
  "key21": "5rA63S4BP3NpNJry1aejH781v2QreXZYs9UXCuTEYFBNE7zYGCc6XhGzqBaPsFDP45mbL7cTSu2ZPa2oA4Jbpmvg",
  "key22": "3SioAJeTvJSXUC2FcWAELWnz879jGz8WD8NGaxTmDoRAtHAz447Fdxoi4kFg85Zk7YV1fz35NBRmY9KQMpZmrv16",
  "key23": "3ggo12FKdjXachsAD47AQz7Pnxj7ntzEEWXLUtDdxmeKWjkBDVwPwYw2pYCNr2xJfupdcyTrJ7mnKgCnLhZXy6sc",
  "key24": "MsFGfDiVnPEhWxGwbZZfgrtGd2TfP9Tmq7ez8gtJJHPFCAbtqFQp6cXVjXZ7wgArjboPv3zqN9F38HyEvAKDJpQ",
  "key25": "3VfpSV9SisrtBCTd6Rvpyc8XoixBgdezHAhkqZLZJYTe3adJ27aFAgP2n8kBmu8m4xXP1LRMMutiKoZebExByies",
  "key26": "5oCzrRjXPW4B9mFP3K81yGbuYEYxDSDQZpwrTxhrm99A3roASuq5BL4QTR8FVazvsc14vkZ9Qbv2v5ovoaQpFiAR",
  "key27": "4VmLue9z5PkLRgPADFQWG6HEq9YYK4pfQofs2CFxwrHscjAmUe25mvN6jYSQEGAHcz3QN6Lf5GgCASN21xGwnSYe"
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
