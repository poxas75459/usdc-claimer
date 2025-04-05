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
    "26rGi6vZdwyaEcBEh8BFpsu7ojvzT3yDg9m2CZi4Y7xGeA8Qs11AZSrN7VV55EieB2pD4biRqXZp4CnB2ejrVq5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJjJ2Umh11s8N8uPSrKFpANQvuWJ4JPoA6S5jzXw7YbZAs9WEEfFdrpja3JcyHZ7YS3t8AhPe8dJhdn6LnNYT8W",
  "key1": "2ELjtfR85Y8VRiRpzgHTXZzMcBLgUBG3eXotfG1W2PvYqLvPbs1Z3cSHvPL4neyQXXXrcExYEyEUUjki4oMTfPKZ",
  "key2": "1fuyq5gyhc28hnSmhHrWr55h8JjjhQWP2sqBhNHufCg6d5CBtS4LdaEcRPkKjzHhn7G6hrD4RMpQBLV92F4h9Jc",
  "key3": "GZFCTp1LGGtZT1xgS1UYgSNUx1kbFEkut5dscKei34DP7QRKdf6BtmcUAvrYyjt9wrnLwDym6ZSWh6CYsa3cvJj",
  "key4": "25t5j9iXNguYpD3PFxqfQUfqWXv5FYe5jKbpXxF2HXm4oYndgq1A4ZENFuxZ91L6Qf5QtyT7tJTFAFXgW5MQqNp9",
  "key5": "2ghWG6pFXBfHbyiaRuAFz3pmYuVceBi9XJaWK2AjNMYFvQoWHBrZNYb6kTExJJKtw1G4QDT2RAfKezaaf8d8CsnC",
  "key6": "3KRA2LnnkYpEUjnsrpeZZASKmKDFx2VM6BFuNa7xf3Rc1fPYJXWsMJaboYKxB9umQ19HUPJ4fZy6VVgJKxSv8tjD",
  "key7": "5UFhrxwDbcUCrr8zAuZXCHwbY8ZCBVhYid7xTYCMmdW4Xjs9zRMR67ooozUQ9mMcQd7q3XH7n1VK9HEWdgHTKBTD",
  "key8": "2SMEd56Tt39C13kcbCwZBXzjVoiNXEB3kgAhtn5oiMSThAZ9h596DoCeEVSm8FhUWnTP97CTWgkbz2YX623fSYLa",
  "key9": "5yeX2iyoecUWwbv69riMUCKHAHHkPWuHHXLL379DBb4M87hChWsP7DaxwfRYPahAyWaDvoGvvseqG9jaPW7wSsbe",
  "key10": "4nCtPXKaNg8k15f5ucRNbKd2K8U5ZbGyYwYrFVtPPEXV2wqi6rebdWHuGM87wAbqdTovK3o3yumq8zYugsYcuCfv",
  "key11": "5qBcx4w6PncW5ZXmtdEjNjXGDGQ7r6KupwRfgMd2TLDBR5BPeY8LoeV3YD6HGVgPwksg3Lb1agctWFjF8vZGtBwh",
  "key12": "5rsdQeUzQysu55mgqF4skeANSuXbNQ2Thkk59t37SE1DCgDcwrHj3XJjwRFwz8kmGtBvBK27wToY9djKsvKKqfcG",
  "key13": "2WuouPjREeUfS73bKQqewwv64phYh3rsJoaf2iNYstXJTp8JBy5R6vhyAry1JCneR7daaoQxdq5YGAa9hDezzdGz",
  "key14": "KCGTcNs8kfNd6qqaosVWxZSHiq5YH91QCLkQ8kRX1iHxsWS2vMjUVf2sjrdnuaaHQEPV9hWZopjD8aFbdURmkjv",
  "key15": "2MM8bedZdzv9Cfbb7avuYHtuaR3JCDvUMtLTona2PzKnGL31aLxxQ6MTGQ9p6qCnUC4HYgbJMdzd922QTCUM3WMc",
  "key16": "3mufy2r2hsaZwDY8suj2abC6ECF7mzkrRM7nmiGhFjEgAojnCo9CRj5Ss7Fd7kwHNobhHdX9QEU23UQVGZSeiYMp",
  "key17": "7b22cnnrVqeTqyxxmVTBra8QAfdTXcBbynj1wHbRjKg5LJUuC7qwf37norTfKW1vQ4qSJyJzTsTkULw5UHDnXKS",
  "key18": "4WXQW7SkzxPfoJ4vEzbj698B7CbFTwmANd2hcNcG5rCT9Vf7HviJTxqJVNeE9aMaC4U8QU8WLHZjmrcRMs4yLXCz",
  "key19": "4Tqy7HuYLjFRrW7hpURoFys7MFvC8NBSReAcKqkT5uaX2UkexDiiGeCZpuXbwE8z6TUViXZezUx6LcSuS1mqUJRu",
  "key20": "4AFemNr11MBkDj98Kebst4B3hwr3YYjDBzkgVfrQi5oRuxE9Ww3q2SyCTkwxJX5tSQ81cn6coafEH2XRewhkLw1i",
  "key21": "4grc5hbWktqtQWgRpXokvUFpyAQzgjfAt3U2THZ9qkFzRTqfTbmx1RY7zzxYvHm9Xd2DpjNLfdvtTp3TRMfFgzqT",
  "key22": "5uTrKXhLg4xLDmFH24gR5wzB4a6Xm5rJeXrWAcNskgX5XbA8TzAPVuCMBQeQwpq45GNdELmY7vQkNMXBHp18QB2B",
  "key23": "4RP16yBrgwrMfN5zYCH2ycSHGRTEZAHwMtdxBv1xL27xYdL68S5DaBMhDWwdc18ws1VE73aPSXkxFqgARMYz5gW",
  "key24": "2oY9jLNYJt5k1jVPG518WZJsbQo5tc2LseQSxWG6AF8tcNiVLFdYPMxymGsqK7BmdjakgYBjNkTdufqzNSP4XcYd",
  "key25": "3ATHfPL4fH73N3yyVQ5yAdUcLCNtpLxuRFWDFReustWkVKssLy2Ha5NBYnEicEM8jiBSGTSJjx3Js9A7qq1nV7Kt",
  "key26": "5k7v5D3qGZ5JfFJSyT4xAb9hYGxsH9Z5mVcWCTjN5yM9pUuEYvyHPUoxHppHko6Uk1qU3o5w9YMHmo2DVJ73wzYg",
  "key27": "487f7wAEr3Fjy97TkuTacVh7aToLY2p2jNRtQsexYjCHbwjKNYnfove9Lte9Ai3jbHQPD5cQBrXTQD9nEBiDxM8s",
  "key28": "zydvfhEVNqcTXyShaWtRi1ACyfznWSna3nDffbEgNSv1dNyW4CurQ84mJ3QdNeGbNvr1jBxLPQhpniZnSV8StFq",
  "key29": "M54hDE4dzdaZyZksb6HB5AHiDGyhjeiWRBEzoaKDRsWaHMvfxvsbn5WqgqGRnJWWhxcsN2CTi3goe8HzdK6oh7t",
  "key30": "6i1XEg42gHmfnEg5t34Kq2hLNuXX7GAx1Rvjfs6aqry1L2TkF4N1XmJeqxyyHDkozjX3bMVQUfw6wgBaqFvxY32",
  "key31": "3Loz2mDLcqJQmp3MZCSPKDhvrchB5s6MxZQzTtTV5Y275vLJ2WrarvPQPbFSsjnzhYdRHtY5KrgNP9J731JwgpFo",
  "key32": "5wajxsyCDHFrAt7AXeWC47ZbnXo3vnoaTvEgzo4Nv3TjQTf3Fj8aTSecBJXB7iR2cRUBDmhcS4eYrhYNUFqbcB7H",
  "key33": "3z41sBVjmkys42PqbGxqWkNmLnbGu9LdGQLKhaX9LUbC8k2K8VaVMuYKSzdAucqcbeGj8Yd5grqhrHr94E5zNKua",
  "key34": "3A4qRrodNT2VTixnQ98Dnj2ZgKPvBFt5KuKBPbwV5pjacVoEDEj2gGgJk3757x48CdhGe6rwGZP3iMDXryZE9Eec",
  "key35": "dBKRqkwDcCXkKowdmcQsR4r2iaUPpKMfFBfSFE1tZsaSnCVuW3H4wLRneUVGEXWmcHSkkCtFnFbqg73fpGwGSTc",
  "key36": "5rVMJjj5sqGuC1LTvUgywapmwCZRQqUkfaASy6oxDY5Z3RAdZoxXZDvncg6FSyCyVyvWSq7MPFf8hNxCz1GmrHsR",
  "key37": "CmVm1ZVe1javUMG1xHcNsf8qHLDJD9VmikAxyeF7EWSfuPRcwuY736nPEfjkp6qYdp7jTWEcv88ZMEZenWN2nT3",
  "key38": "aVSTKUmi6PTuthsQRNVsMPvvmDzjQt89RN5vFB5MKm1u4jN2otGUrVjcYv9VKF29mVtjKnEeEypDSs7HYeXjH3p",
  "key39": "2H37vcKhP8fuu3UWuTyTg3YaPiFBAbxZzn28iaTCikRFkARUAymhEU8DWzVKtDDpyT3msZdMnkzpzxtUvujX2EeM",
  "key40": "319rPJ4dVLNKaeotczGmGyNfnrmzQpjSa2XiXGU6TpXnqreiUA77usFy5Jh2ESd4Zpnb2dfiWn4gDqLvuvCjcbS5",
  "key41": "5vVmLhuXNmvivAFLNFpo6ThD9FjPgpPbNFhixEPKAs9hqEC4Ud3Mdgq5zhMpnu6ovqx4Y4xFY98cVSJ6U3DfVsmN"
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
