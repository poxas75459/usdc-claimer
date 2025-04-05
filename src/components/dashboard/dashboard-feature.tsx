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
    "52Qi9tRZpyNMA4qjqjDp2kn6DP5ktDjf4KoheLAJzSUhYo7dur9uytr1mks8TMuSrz1wNRctkP9EgiMi9xbsFry2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283n3hw7dzK6CS5rA1yB1yRcHda6xNr8hARRFXsBLF2GVkTdNSVzZy5Xe8HCVvfpKCp518KUBvw6xk6BxN5vDGAQ",
  "key1": "g2aJBynKNthRqAgVkmndpMM8Ch79XhgxzdaPAHbb9NTg6S2QkjvwgDHXVfiPm1WXAFSwDkJo563EwyNU1XfDie8",
  "key2": "3HNLTcqYPX6ohNnLeuQHDiHbqi8fq13xyhgwoUM4ECq2vpc3fTiypukypfh4UEo6LVh2JkLR9gRkPq8samS2BsiS",
  "key3": "3RQLqkCLSoajvNQiNofcnAcWDJBxaCTrMwdzrpM9Yi16WJsMMJUEXjH1BUxUDCSHmfv3Ym3Su23ix12yAco3HPZt",
  "key4": "GaFhdibwegrK6SkbWPJi4yKiEKGPkkFGPbSkW4kHH8zskLz4ZewLfggW55b9P61fESWtgwbPvGspYQfEgccc9pm",
  "key5": "25v7dsAxziuCY8agHdRVL2Wpq4sDEo7RZweFVLtzNt1npWwgdV69p1YXEcPxwoGKv3aeGkXLU5QPTK2PBdknzVKe",
  "key6": "5qbnk1JAZysS4trb3sipiiiESErPyVG7v7eV985LdgnvfN8TncTTULwDVF3yY7N1ESkvBjPiYp1xLDrL2unJq7Ab",
  "key7": "61f4a8QmTeRETXc6VxCyz3Tvfwrc5izfKZCPRnPtgBNGhL1LjsHjyHHrKCqWF4Yw8E5YYRHC2yH7KvLgepDuo3KK",
  "key8": "59CvZYuD6bZtUjgzQcvBXAcRGGAg76iSVbdjDiZctMzEWEaMuGDzZadJj48Zt37dRmpSvdCivFzzT912NQHASFjE",
  "key9": "2aK3kw4ctwX8Ycr9The3fXac4wMvi4kh4bR9BDwtMnhBgqcnKtxYPFCwX5SeY8TqCJxicdDNjdRrqQPGTWSc9R88",
  "key10": "aMcF4MtwVLTVAXjYK2ki6KDuH7XNszrG7Ge6Beev59iyiquD5hA3p93UcVvCfmvBWMk22BgqsVvkcrwr3MVGCuu",
  "key11": "5HPLtyKKzX65W9EjHmZGhJDJ86N3EAuZamcC4dibCgZD4KT4xSpqNqEjVkFkKPfQkN2zp1bUjpb9CkF8sboCvpbo",
  "key12": "4yz23B4jn747xM3p99h1Txs2wzPffFRZLtnhKdhmTBNkbx6Z3HaQ1VFFAPnNxDDntdfcC6b96pXPWfBW2DczR2i6",
  "key13": "4h8Yn6unoRhkAZJzuttkh9dBcqFPgrK7hm1pfYvpBZJ6hD8vwJw3Xkfq75fbrnzZCK6172Vqy3VkR3VzZtUztACQ",
  "key14": "41PikrLVjAXaUHA8WwQetQ1T43KLLZu591oct7PcrP5fbP69rM6W3WgSfxmydoP8SiWa7J6JJJAed8nMh59s9r8R",
  "key15": "4TM1CXPGu9F85E34rSJuGKmfhWxUNQ97fXLpU81VwWRmW1BZBZe6qWMnNguUWjGTkdhaXKWi646VkGMswL5v1SXD",
  "key16": "QzJsjcxkdHm1LHt9vVWJ8QYcq7K8dxp2Xfc4HYS3WzVnQmN2mBSkpTJsKTMion1RqHJmSCorHMDVm8HmhcdkrHY",
  "key17": "4KzjgppGfGUrQuSyDX88NQbNpRoVsyA2SZTiiGhAGYajBaHm1X8FMjvksW4Z3kq4DCDugmvBd1DPPhK5NQ26QcsS",
  "key18": "5SxsbUQogyytCQg2FyCzkp6XKLUTjLUNcg4Qdnm5dZJbCsNM1pvBLCit94VXkDuTkC7qz9rQn2mZGKpspLWtgZm7",
  "key19": "3VsKkEw7Uz25ZgrwvwJ9Bw5xdVTzou5rKhLJJSy2yx7oYoZUv3xY9UDqum1aiJj2ungFa4garcCe7ZfvkGZPWLTT",
  "key20": "3GJQreWXBW71HYKkbe2BgD5CVa8DsPB9t5qeBDiDxDw3vPnStQsmtB69ViQDqmV1LMaJhqNAabaGWyLDwD7ZAGoQ",
  "key21": "2ieJ5r5EYTzufkajEbBnwZGVZKZ1BXCrQAqgZHanogoHbPCCgW5zjbKRisgJrw9kKaBEoc1eRmj7zWoqZSiNzhgA",
  "key22": "44At14EDNayXzigCeDJbNrV5fZPcNegutbJcCMJ9LZyfq7p7pNo2BDevCw2zxpLeyd7dnjFakvshPhWoeACaW6y",
  "key23": "3T8a4PqtNud4omZaZMQ86doZ6s5Bvyj97ZSySPmfP5PEzy6FMhsi3LnsKxcdAgmQT6YQZHMqcxgS4rL8Nn3hAa36",
  "key24": "3YkQqQSF3mobLHnaPFH5h5LPb6fDyAS6nnm1HQ726iX1BzEx8QsNR8qT9xwiZXR4hXZk3n34WpQNMevnVPA67Vqp",
  "key25": "5k2zgAHW3PmVBsg8rbgnFUy9crU1sUPPdgQt59EWVXzYeJRjs4ZG8cQFzrMHknYNzK785UpiyyfNG4khVpKRaDBF",
  "key26": "2KUSXkLuYMCuYCj8VVbTviJxt82vayD7rhT22eZpBC26QkzaCBEr2aE1nziSnvyVETSu5YsG2jQxPc27S5d8wqit"
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
