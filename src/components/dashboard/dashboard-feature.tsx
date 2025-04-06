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
    "3NaPATd6A3Z9v99CMf6QU8NEmaEq75hEVSPnmNZEgpVc7Kkfp1aWn9Rg1xrNFKPmqn6ATB3CqnEqZJ3ifvNPAZvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5TCq5q3snmw837EK9HJf5DxwpjpE6GUwjgG4uAnS9fzxCBgeoBDJhv6tfeLo7ccpDPJcBpWKST8NFPiPzDf3PJ",
  "key1": "oA3EeqJifwMmc7uZrXR4fN4s72JNfpxpcvoXniRjPJGFTe2Ci2eJsWhFAs6Ma1wqRmsQR4TSipZxzNyP1kGJ1bM",
  "key2": "5hVGZMWF2zXNHNyXaHZfG9vEkGUTQEnAbDz71hDdo6dPKYDuSRFB2t18Hkuc6qZArfJwP4Pw1ToPpz9Ri397VqKJ",
  "key3": "2nPmwNFLNpMxrqnzb2La7nmUk18WfW8nfBKP9TfJqJq8PKXuxkrcQK7d7KLF7EQ93mmWc1KGofTdcWJjowAUAyYT",
  "key4": "om1chkgG3t9v2WqvWikf87cRXen1ksnwpwLkpuR5wELgcLA8mEptFB28x9iCFuF4BEyqKbyq1MG3aioxY8i9h2m",
  "key5": "3ex95jmVy5LengqXCWoGyvEpMCgTtGPnCqqScwL6hUzLwQoRRNY2SuTptiejwSDrWSbCksQfv8wyXq2z3CkgejYD",
  "key6": "BadVGnSG6Qq7yfN4PHxDKwLoucNT7PSYchYbQFQ5nSoovkBW5eTe2TWwpjLSukXkeYdfmJUrYD2hK3jMsBXNNeJ",
  "key7": "h6aChHEohdKam8z4xjSpyYDLjBjiqvV2NnTc39PFQm54QRrGZbRQLNgvs1upCnmwVJu9sHVvuerEnD37RdRR333",
  "key8": "2LJRKJxUydqGfiHBBnARBuEm47DeaovxZNvwZWnk5nH5LRMAgJjoppEQybcPZxwfBBdFZH82X38obGP4LppxBVMT",
  "key9": "4iZQNJjaFonknPpC1uR2UtNJxuiv4FcX1xM35NcqkRhVTtVBHYyqoLL64Ab4nN1VbxQLbEyxS4QGTQ7oLb2YrUP3",
  "key10": "3UVAsqxAZBiTkXrwAsSr7FWNvuyG5rk462SzMY4kAxYqJZa5h2iXBjGekXksEsPxiVL1ap72wD6CYqk5w4EivJZU",
  "key11": "PPa2zLhUdRe5KQ4UqfXmjxscxhTZHKHEk3fFoGZWrCGCo4EDPMsXyzjjMQWwVLrU8aJARPkFgVj7RNceYwKWKng",
  "key12": "5vXpkwqvG9yB6wJKH6wbr8pAikARvivA2FoZVgxvyPdjMxkGoZnq88AtiHf6DrgaWnBjsccGpE2ftJXwbW1CDgY6",
  "key13": "61UWV2KFhAWmhLR5t9UWaeYc39UWJfyp63V6djLqJbZEizWjJqEG1rVvtgzQJAbL4PXRSfYbLRHCyLcxumMxTYP2",
  "key14": "4rZsDscnorxD55dRTP4T7ZmBChzdZphFKT7dmAd7tkUTJjUaStHWW8zvyX2JUwcWReU6So5j9zLkhYDb3au4UQqs",
  "key15": "2wsRJrqaFbzGTQhwWKM9WbLmHGZ5BYVr3x3ExAE5MpnJtz13KwCm5WPZdnddfCuAncJnvRuNKuXLicdE4pkRAHs7",
  "key16": "4DQSrcuZHfAzvoqV449CRy7TaUaF4gTVT2hXJLFza1BZL3wqwHq7VBZgTmKNb28fLLuAVXD3ECqsxnLHB3Cdem1M",
  "key17": "5Efi4ZoCKVLzQgZPbkRST1vLuZgvxTESqhk9QYeQKdNeaDtjuiWdRg8ms9pkNu528FT37qN9r9z7fJhDHiFTXB7M",
  "key18": "5WACQubqnu6nAAfiWdtwovd9JPK6oHg54yco1XEiutzSd8Dtf8TMtAB6t4j5xvU9itKbE2GG1HfbbNRT37C86j1T",
  "key19": "4fVDjmCZYfiXeMZfxayAXNLnKFR6764LQKzqcRfAaFyVuWGF7kqKcHVLZch5mpsqii8QHNPoTRmRvkryyETxVbjw",
  "key20": "5i4DkASQGA37VoC7rmee1fMzPLvkcN2adPD1Pn3bbYqA6ZXmCvaMztVi6xGQvfzYYPXNMVKBa7asJgu1SniMyQLg",
  "key21": "ENYUjEhKyQnmxdBHCDLz3xRYvLhyHDxf1GjFSKQiX3CFVad2no8cQYBPa8oXULHWeujGxmyXZN7WGDcAZ5D7q1r",
  "key22": "4qsri82HWyGEza7en8dEZvFrCYifYz239pawvfUGFMHfZR4mSgk9zaTx3nLsXAJ8vgdfSB84GXcnyN1ArfBqjjGd",
  "key23": "61VpH1AJ9viPGFB8jNXTRjcQmHR6NETEhZb9rpTHZdgZ7KFMZJ6X8SSAvMysGaSx1nF1NG4AaaWCTJHtNgWhJcbY",
  "key24": "2DyqsXdWdKzVqodgWSyKxZGSdnYVrMy54DxmKX1vdapJRY4FJYytwLe7bufWaE8xhTFkAqSGjuCNBU3T85Ke7RFF",
  "key25": "gMuAnnmNmkAc8Haithumd2izMrP5hqBpfaUr9NQ2j4bazqEbVADz4B2UJuRJ4vhjgdTrvHHikYxaiurvCjwYuRs",
  "key26": "3CB2YWRYReqELGCyzo1mT9g7TjKid5fuFnae3s4SpgAaeVtAysux2zffQ2frii9rRGDGWbGt2VVksSPmTJb1sZyk",
  "key27": "4BHTLobKEwqg5a9AvyFV4RQ2XKkW9USUtcGbWj9oLAyRmV4Yq89N9RjKVhXLtpMXsWdUcT5vkUFTVnvqPLWWm6an",
  "key28": "5efePEsCK19KREcacdVfPvUWXMpcyumWojT1R77Nm2MhrogX57SVDY8cz43uGX1o7yfnbzVKAT1uNsPzKp5KQ7nt",
  "key29": "rZVZd27azE7rtsdwbCZy1Sced8YBADmBErzqWBvtCpLjgHdhwH7cPHfQD68sdSXTkqjSCK4xaJd7mwy47dWmaRs",
  "key30": "3McMwZF3qCJkHneyGJNYNLVFkYKcfmMcDAMb6DueH5GPAgtQnud5L1KPcBN9Si1NZdvYqhaTCbPtwLWTiiAngNXM",
  "key31": "TerkCrTpe4f9LWH17UuzHUrhz6C59wcWkTzV5Q2M2FsAUP6F5Mo6Ptthr8rPCkQg96s5QmfTSqzg9iY7rg5PNXE"
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
