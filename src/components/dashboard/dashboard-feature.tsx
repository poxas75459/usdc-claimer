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
    "EY5SUYNvaGv6KLytLNsuCDa8aTRMub8NkJyQqvGT1eoau9KdiK8oGLwEgT2r82fp4UFRk9Wq3xWWHwkF2r7GG1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWDZft1mjaCh7WigAYXZgsxrXk4jWuN13MmvtyTsRkoPSYbSZPcFreqFMdVBid9PSvCsbhwGX1zxnk4f8FryZxq",
  "key1": "47xei1TLsc1vJcKNM4aMD3wN67xCpGit9dUT35qYLsoRNtXZdsh2D577NSYV2qHa4cQxPARAAUikM93RVhL9puDb",
  "key2": "eXuTa3pNcivkbhHLZh6Rk12yJmDyFnmd43xZPeJYJT1cjg3SzRTH3qokSGu5ffWTpa2jjtqsDjJymLex12BWsNc",
  "key3": "4yWWHyXnkYRQRcRG9btA87GnBhbmdbT5pcoJfJYSMCqvYmNK71zbV6tPQc79Hgpo86kSteMdHWSR87wxan4WEvuT",
  "key4": "DVrQcmmT3RQrFESR97cAjSSXui1WTnkCiBsGU5WeT8WipeeGnDpkfXKDWWYLDGpj7jgYehg2b9dKb9diLgAbuF8",
  "key5": "gXpo3T5ua3zdw7BQbVKccn7bcm9R71yq2bMcz64jJTzAC7HbjL8rib3P738t8AH9LcFQF2QjPyLEx9LwpfprhJN",
  "key6": "5NdWhE9GyTKo5XrwvbqdBBi23xs19eEonaFj7cFewoNekmo68YLVCTdYR76BydHt5YPKqXXPUVqNGKLw1buzQP8f",
  "key7": "56bdaKBiZDhwPfxb8korwqATjzp9nGmHBXGivKbAd8hHc8ZmXN9xQ55vk9G8PAkAp2jwphDsHKKmDzDsBa7VJtGo",
  "key8": "4JTif8FtPpX9ujPj5s5YyfmN3bzn7btmoqAyoJVzuFcpTwcLpKF8sc1VTJzZ17RkNKCs7q1hHaVQNcHWVUP8mEf3",
  "key9": "3VpPQppz6XiYrURNMJhYK5kAxhdCNJWJpK4L2j9c5JZS2A4W9h7sJ3LNCwcthKtZznHuUAf8JQLYYCpXfxfKErYK",
  "key10": "zvgLZ4dxBA2hCyLoTFNMbH6ZUcQN1h4FvBMrmBhnbxdfa1qZabCtqjqSov9BMrDeAnFh4iYENmjY3zRSBdBEp9V",
  "key11": "4azbnyXsG5AfXSC3XeaiobTxHMpRhfdEb4oEk3iYwjPdUc3cKBWkeJtbDi3S8F1TgtbM8yoHUTgBGi9ckQwNLuSZ",
  "key12": "514huE8ZuqyLm86ae9FSFQaUuxPq4Av6T6fVqDtscbZmDyxbUQ2GNL3EVRYVjKXGhn924gQkK5RTqp1BzxsQbLSX",
  "key13": "4YQgjcx9vPQ7osL6qvZjFVQCy4EqqgZ3Yb1cDRKg2zPJ58Vox6M9H8BybjqPGnMwi8USYoRUoExQjAxxNwjvKYGZ",
  "key14": "ymLNgaGjiZdgJtLg2ycE9jGh4KvZEF5JA7dmKiRsjKnPzxRMRQQGUV6FqLhty8V38uCUURD5abVCSf5bnFbQTMD",
  "key15": "4N5AVXzbz8beY4XmfMfr6bY3ts3ZWD2rf7bQhDykCwREYh2fm9bTcbQFXxz8hX3c13EArJbjmqmU2N9bNtoPU5Wj",
  "key16": "9oLyPAQtfQKVjmhb3Y38PPKiGa9DHsBtwTi76zJBqoRDB9oEJz2c3B2YD5uM7MycTZQRDZ95SJ6CMvPaA5WdpEW",
  "key17": "4pWEg1Vc8W6Lcztfmqyt6nv1gJfd6v8ECtBd4Pd8aQd8n7oGoibVb2KMW8P29QbTXjAxJJz1PcYZydRxJ4hVyDpo",
  "key18": "4JBoygUB2XXKkh2ZZzUpK1gU6pP7BCybpZJhp5NKzY2VY8L9SYet4BMtepwDU1JmLYtVhcBLRGzMJ5DPp9DxFqRW",
  "key19": "3YvffVa3sFSkRLYKikqqRpoo7jouY9hwMau3DurPSxzRdiuqVgfdjM5b4PqDvAXaJuCziF8JY9BdTX6efh3dZCoq",
  "key20": "3L4UBevTHsQ77ZEshDvZvD7cP6aWX7WUeVsy838dT2o1HiwN6FPtr9vVcRNK7EyZaguQB8YiKSisFHNtZeqHh7iN",
  "key21": "2n5TbFuRKPHhbbrZLzvd948EgGwYt1rSQme17uXK2dHm1e7pS7dFTkDjpofUieVJq52XjuCxP3C4dexMAoCsii2w",
  "key22": "3ckUob24iXdkgfTrSFP8DmvxVtamZus3TwAa7mRnu2MUfnop6BahQ182xQMt9yHRscsodvZc9E9BzkQNRYU5jyAr",
  "key23": "5s11AdmSFGYqN9B7Xx7QHgZ7o8J6B48YEcy7bnzGTQCUXDxz45fDd6PorL66Z8fRuQcLareuTg6Je68VCmgdTMoc",
  "key24": "5AkNgbdieR5nJf7eN7dhEVDTKGeVASJtUnk9igQ2tfiizSFBVRf3xDgDHN4AdHCzGofxxsJ2LxhoSWSE8VSZzZcL",
  "key25": "vct4YKiwG86417Vd9SFGZuqSLpH4wwHcGt8R6NFLvw247g4GzyLmt1f1XrBCSs5RN3Sthy3Bdx1AvNtKBBrZWcL",
  "key26": "4X9tWPoth27ZdXyim7Jrg3yo8u76gu5yNfvGskieuGVFFS3oytY3dAJmCKKRnSU24fCBENE6kg7nt5392dYrojNF",
  "key27": "2m8uXajKnQxGdCZZrNeU1XQKhgDv5AtFo1ZqQedLJ3ubwohLN3Z74aR1CxSzp74ic74CYqc9n5fv5J9sj94bh4Ke",
  "key28": "5UdBCER8ZZmKECCLVgAmE6o7TJPRwxFohmsnwRRXdLxRrgynKPUMzFxvTmnXkwjw9LJfL4oct41Jfck4PwqUD8YC",
  "key29": "2o147hbQgzhW58Fvx7zH6ggFjK3kuhECqqN4bCbTk5VYssno9phNCZcvzQ1rZMchmUJKh6YbaL7imAyNR694qs2y",
  "key30": "5rfrehGgPgZkVQ1bdyxFxXP3hnz1pD4NCxMTenmZPcrb4usydEQJ9DikFyGWUuSn6gYquQPj1Prk9SW2NnnXqPSM",
  "key31": "4Yorh7ScVcZWCttkb5NbJGcPQKqfqP8nBM2tGCVfRy48XXbF7xrDzxgSRZEjy7U8dY3UBqwmwi5Fj2iATyS6834P",
  "key32": "ZjwMickS1hrsChGs5fNNUnRKxbxCgeAwATX1yRN6oVrZQTechVPwYyWxfRNtS8xvmdxckJeJpJiit2gqJk41jwB",
  "key33": "4YVoLjXCxPcLbKB6HaLiDVPtbLowDwvovrC3L6bFHjCfeddLTG7T3RmmxVZ8VJZPd76Zb67U3S2nX19RHW5WGfQS",
  "key34": "2PJvXzKM9TX2ca2SmcsNRHZ9ApNoyLBiN2aFqqZLYLFV16iyPDohu5zjaFo31MKBrKNWZLUHWLnAodLwbWupfUcc",
  "key35": "26G3CcQbDXTTcPY1WYskDUgXr7fd5KPsJj4St3tUdXZrNAm96QGtUMMkTABNSZ51QTCbF1yoZiegZVboDUJ5Pmyp",
  "key36": "5anrGPXJZDCtYQy7DH32oTcX1VWMHxmnuc2PYB3qySgQ8Cwy7u3j4hPpWaF5w2Rs3KJWBcMW6kuWUBHtxQQSWiWq",
  "key37": "5rA5RnCpQAExmCtGFWiJBaxVNNEx6u3XEZBCnvx9M8z3egoCpd7GVtVpYqZx9oF5SQTvob5MBgpWF7t26RHDRHo4",
  "key38": "N2Qwd6NU2s7BBQa6P3goohpoTbGFkUJCtzeMarTwNfT3MXYzJKGwr7jAuJzfeyMWH3UPWiexNL3pueCkUeUBdsr",
  "key39": "47CRkMCrYDsCGdxtf5HWDRpxA2xiKbqRDMRyW2R95ZBL3peYTift5ni8PEyzkNYhfepxj2asjxhvo3TgHZpvkkuk",
  "key40": "4miZnS1TVJ5YxsVqyJZasqekpvcYr9qG5vu4KQKYUHcSgoYQL2NZpdYPgqy8W7YVAsVJ4NSWZPoPEuHx4UYVUwsh"
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
