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
    "2zkXJu9qD2ZALaXWQNYLiDGoDza8ZPy6phxL2PKFsSif2k92UbUzPDa1cALxziqvjQFXWyZdh6xoanWsLrgShVab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHn29r5Lp4QP2tJ5tW7BQ6veu4JFg1TSiWWj5YmugaFNCT3jViU9qvmewStUDrmM3hZoLQuSZXAsgyp54hAYPvA",
  "key1": "4p4v66cHtZftg68ZA4HARkfLiYrX9cKa1QZeTtVe4cLtgTHNNZbM7EAxAoPStFTZnAQUjtziy62asc64UCjhTmtM",
  "key2": "4GE5qHg7ETELKGnpSbRhXQL32X9xMjo9ukL4hs8qJGgSRnqN4qrfJhYWw2x1a25STDwDTGx4z9FVbkDgWKffBAXy",
  "key3": "3pDZEgBcZArGtghDPoXd19fFa9MYbvKaqw1FRwxErM7msgwbjUkS9rHYjEnyeNjBJCaE4TJYabSAw8s2aMPfQ1wJ",
  "key4": "5cYq3nb7wFDnf9teeUNEgoWmCEgENssBQXVQCU4XgFQDLAgX7sWp2HCiMC6GTjmYRjd3N7GQDhy1Fscg9noaZpwe",
  "key5": "zvDf946cu4bqd4eiaECymaqkjA7kJ3E4ad6hrNBATcudwMr1fFeoGN4sKcKnYEfd15dXWSjJLujFpJzjqm1EGE3",
  "key6": "5BanF5t4968wEaRU21SDWRhfPywg1GtVbirt7XSTTu5F6f624yXZ6ShcDbsWcutou5E3btbDRvSMLt3dpSQyw8Q2",
  "key7": "2She2rf78gqL8FKok5Z2zCedHbzgW5GMxT6P4tfh9GNUUrRAV5fqK2i1bBMBm965VoKvmDN2jP5V7bFFg9gt4Gwz",
  "key8": "4eXey3uCBtrj3YzLsY5v4bgSysPrUxQkeUJ7KNTDXLvVPgPDiKwqZtvpRssGADKCZUUszBUPDonRtVfZvufP6nM",
  "key9": "4BD37LX9Yut8xeXQCKtFWNJkJqPpsRn6sPnTzxiV7DkvTs7ZeVNn51b4vvmVJ45Arh8qgeX7fFbq3RMHsBePxcoP",
  "key10": "3fP8TYZEeujicN26YiSxswuBzeVUcMwrkiBwjDoVfZ6sCVF1KK7AMQt9YwWMwcPmNHNg2nfJd6wQfbSfAHxStK8P",
  "key11": "3HUg6numtmE1pRZc3poa6vtDFW1Ljs4TnyucAj72QufSQRrYDNLMx12GNH2XMuepX1XVuA3aKcxh7QZyrjXCmup2",
  "key12": "5b6KKtnV7VTBnYPzCRCJdnDtCdCjRwxaykzQp25zNJsdEEDQzuhgZHd7XvNYag4SEXncFn3CfXu9p1XTWNCgmc3B",
  "key13": "2zW3LfbFCScHHmN3GmzEaJUanQBSbYsus8XEJKwsjyvdns514zR54S6d4mJnQMo5oJnFJjNRsxpmpjgvZ9Wki9rP",
  "key14": "4bdCNLPNqjBbXKvQgbSDVZLC3CAWKgFKGPLq1sRfpcZBgNssmh8jAG3qgn7Y1ErgKx3SUP6cJ5SpxVB5yRnETXri",
  "key15": "3nCWe84fPaHoZmnizbnyZfWEejj9UnFhSg9CZ6xUohB8bF8cC2vdNuwH6J5yVVPWGzZwqp4RG4n1GCStwmb85F9",
  "key16": "23WZZtDuXAH2tdSQEXH9Jo5ZJuZASSH2nzqJowMZgysdJd991MzgejGYngukCgNiJVGqNJcv1NV6ZojCu6ekrPnu",
  "key17": "2iDBEVAZ8E2HWYkrJoeH28qd7fHkifbXmhxSJa8gV7WRMdRVfrbRK5WXXBDhCjYDH3aKjNkXHY34aYurEhv68eV1",
  "key18": "4Z8HzFu7BS32vwgQ8n2tEUTJwFUsXFZHvTesqfeWfmkCZPu6x165MvNL7BHdmCqVM7BZ7brGvxQ11JZg2d7a6wpH",
  "key19": "QFf997ygG5WN2nKztueE5TigXyQ4w6wHFNkGatzmaiqvqikxt3TQ8o9PQ33B8cDzN5dQYD4Zzs6unL4H7o41Bh9",
  "key20": "5iCDY2JjhbdQ9CWT5kUcDJjdwX3tWgHNnVrkvNTVn8G6ZqTqp8nrmctiqV6AUcq6Xp9MWmyPyuAas7PUb6ss5FoR",
  "key21": "28NVdu3ubcGsUNX5VLd4odm7m9wrHoFot4AfuigrpMC9F3noM4rRLRk7tV2ik8f18dfoE4mXsPD3kNKxswp3deok",
  "key22": "dNtMVma2DtJj6a7gDVJbiGDNAvcUEQN72JK64KTZRwkSXM5dNbUkGXmHrdTj7gJacjHaBQkx1bj16ahbQ3Jyd1M",
  "key23": "3C1LU7PobDHMfGFpMv3T69MFNy1NjhRTYXzgBKr8rBvqT5wLXLSmLkgFfjJKW9qN5fRhqZpyDzFZufKC4hVKyhao",
  "key24": "33d3ZriC9PgbXwsiE33gLaCDTMKSj816z3Gh8LmXJMEJvHAq9p4uHL9fwzQHnUh1Mir5QbebxLfXMiAdeLnqxt3d",
  "key25": "31HPBznjLd36Eys4LPppdaRDYroyEAh1XuKWYHRoWs5Pwg8pNMs4pBs2FJRiW8HuQ9MB5H9uK5wywsaqLW5uXV1Z",
  "key26": "fKmQCKFKtn1HQicyLDJv5YqtgbeWkuA5h3FvsCq7vBRq8hXHgFoHekR5WPQhTsdQGvUQBRAoHNdQqPReqFppyH4",
  "key27": "3UXZsAVDZeKybHQ4wJgDcqZsnEm59RrMWyCoBfnuJKqhWktBSKJS1KPxZmLzcBSt548FaxNCUJT5JK3fuZfdzgxn",
  "key28": "hbDQCrABBczsShegSUiVuSi9KgrCTq436cHbAmpraRc9GUXvei4DYqUKDGdtypGadLWXC9tSMrzR9K1E1NFwW8P",
  "key29": "NdqSnpmwrJutRSYzSPcjBGeqikNYEXFQUkotD2tFw9zVe5ThsdfbRnHX9i5VbyS6G8kP1yjVo3okFkt6Br7CZuj",
  "key30": "46un9fyfJoVjLCui1aUceCcn6xRQdYkX87NF2EM9tiUWkJQD1To9Y9CVbrpMB4Y5ymNDYApyxoLbKRD9KCz95SZq",
  "key31": "33o2jdbb1cDMR1cbbmj5tMnsLbVYWmMWpYYC58PLmottnM2QuR4yVp3Ud1vkrghvBCWcUvc2MTqTPxSfykGAprga",
  "key32": "2GUnwJ9n7oNJNYjBmyseNtWbaH6dA3Jv6LtUu9LhCEGqcn9yx915dK9sMmNzA9zyDGMprH5Y6x9gr6K2YpEuW7BJ",
  "key33": "5Ut8UvuRakaW3a5DwDcHdvQjZtapshyRUBhBA9b9RkLBoWjvDSvPtgPNwEQJ893s6GHxV6qzfgLewbk35XZxABA3",
  "key34": "oa688jtapxEzBPHAybGNjXqPmAB3KRTFpjAbWSMF341ohv5MKWcTqLih8SYsvhZSNjrTBh4FyRQw5YZQjRWdgSc",
  "key35": "4f4rLy4CrzVcwhE2P7YqU8BzrsvesNSbrQcwTagm3r7F4AQ9KTCo3dTcxu9FWb8Z5RwGtSArmeJLRp6KKSyYt3hp",
  "key36": "48rZiRQ9ik4S9ha4MxbYeu1Svx8CdTmwyBAzsAoxJZU8Rs976xxwWqWQjX1MGZfUSmvYezHeDubpHUhYgdKodqxF",
  "key37": "4VyMeAHGeyZZCxZA7bGUxGkZruvk36AjcJ2XzUmC5L8HQ2p2c32ExztvzGZr3FVVUMeC1GJgUNPfoPmbdEAvWE3k",
  "key38": "24Z6wZWvMpntg2xiEKoV5kRzKEYgsgMQgQ7Yr5sh83s9P6UqS4JkiMASnwat9CMiqTbz48oGkKp9Mm1zRWcjq6sW",
  "key39": "2aTq9ZigDNYMhTRugMNn1J6J5pK31MLUyvQ6iGX2tVF9hpy4L8sCzy1NxjJhWNU2Bk7LXHWVwsnJJs6zxgLmbvmb",
  "key40": "4dV48DYdSKvZBVFY8w5nDnCpGeDf3V3tzVjH23DJ5a6qRPeVXe6S9QtnWmeU3UwyYcwqNJgKvv6Zp4fxirjZu5HR",
  "key41": "4NRC1msexJVRDXqWkCu2ziKH5L2YSoBomEBWqku1gYUKM3vyMPDiNrBmXa3kPh9BvucZ3uYzahNfTkx3K8L4qy3Y",
  "key42": "5EMZNGiRZV9WpGrqP7Pj5D3Zstadv5uKTd9b4ibtYNpXMKESkbjogTFAStU2bDxd3qKGo9nLQHV6jBMCXRK3Y8Px",
  "key43": "2pFWZPX6VcgiyEDwSzFMCX3vUJPod9rUx81oMf1uR15ZQ4qW9yu55AStqt59cXsonxUn5sF6v6UesqLSaf3uLTUa",
  "key44": "4goRt9DdQxk9mcgJg9HpPKSEHWkjMNFZBH8K6drcHGwuiBydhE3RKiP3NthZHbeWrMUNqH3DdYwd9PLh14n88uQZ",
  "key45": "2NPh6TSaPgnMbmN5uMmtrmcmyCv6HvXKdGWpKDvLcE2Ui1timPfcHF7A7jXcuLcJ3kXaesSgzrWZ7gtmdzzNprMy",
  "key46": "kVRBtPTG9rh4SDWfvwEQgpGLghncYmj6EfegBSSi5NZ5c6ocZpfeAgaDuJDkChdgGqXkWMYAgB3fMgmVdFsLeTU"
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
