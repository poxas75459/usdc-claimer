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
    "k2pH9CZ2dxGmTQf4b1M5Gd2AznAcCcJ8y5NqtdsnSP9ECAK2fVHHuFmXpJ7TAXwBUDfZ4HpQwDDMRzhdSJnVhiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbK8YHrgcKNj9WKfpSFRdyW8i85UraVto9z1hRfwzYVgcPvzTtVcS6hsa9oyi3iRtBrvi5cTPWqzbVc8XtsoodE",
  "key1": "2AgMFaRZHKpvVxNmK6GtHViPnZdS3Fks7xPAsasytJMivRtdBwiDBBshpd625ndQ7Qmi6we24YDiqSMrQHGP7snC",
  "key2": "5DSZU2BouQSNrdwk3pGPFbV3EtQss5yB7132CtWLJyFRr1Yz62kSyNpyQkNxcdEhPDraqwdsjJrxKjqSPjGnPvKi",
  "key3": "5sexnRmzFvQ9zCGYHMb32PdBoTx9E5uuPwHkRPNnviyEPxixxzmvTFWYtNsY43Q3GxbUXLrpo6MXpugLqDp44urS",
  "key4": "2sBi9WyhF2VnYetLV7RPDMvNghqpedENFWZzd13N3QQtV7FZapmenZfiVHcTJpYUT2RkxTtBiGXmazT47YgPJjMf",
  "key5": "4SGUdaUpoZtQV5ByFredL7bj3XDAU2iXo2DqD6MD5aYVXpZrqVn8o7mtkRbpnPiNWkJdSw8g2rNQAg5CVMvBBdgz",
  "key6": "2XXW42csRhSXRjoW76GFJn3d2CZJCvpBfUdTY1rRRUVm9wcixXZn9Bsqy8SHD7b8DkYAEkUnmRq8LzGcD1MyXae7",
  "key7": "Hsa86V31tgH8yQVZATP8gAgMK5JMDyYBPYg24McjUTsj2YVLeP28DRs4XRbNnkhjHHPJT8CCJnMVdsBqt85HKLy",
  "key8": "3S8xWE1JUTxzohvCRKbNh96ihNGJ1zp96vdLwLXyedJrTPpqHzrAwtF1t3YnP2CG6b4V7ta5kxggjmj8pDCzJrPT",
  "key9": "3ME7JCuyaAB4GT3qV9DaUX6ACA2d7acwLF4Q74yVPcK3Nb6ND9LNbZFSee6cnX82JP1P9teQsc4bDsMoWnmFdyog",
  "key10": "4V5WMFxBVC3MBqbkXuqBRamj1v5aKTA7Xs5cEYFxov8EaDQQf634SvFv7gbcAtPaFU43wMhsZks9ZvaGyEbSiydw",
  "key11": "ovnzRjFp1XMXswu1yyUwM25VwnM8kbmeEY9YKqshDZ4PSThssfpLoS5y6i3wKnvJf5eXwcZqCB9cL2AFeuJjtFE",
  "key12": "3ExEcfxvqgLbjoH1MThcHxXW6xpPsrfNjTzcrxq5LMoFgzyPG8av4e4jnuAa3n99F3MkeVKJ1se6yVkRYGKdLgoN",
  "key13": "dBvK3dfZi1MPSTmkYsFf37j68H323pUTYqnABzJEZ9GvvdD9yrMHFhv8H9TtopovhiKfDBZuugyEE1hVQuNmyXY",
  "key14": "2W5CFKbf93pK92jHuXNdPgUCusphQwgTacD6ynC1sokv9re54mNcCobgURRAGppWReovWnDMGkcYtHTNL59ZPPJr",
  "key15": "2592akLfHiViJ3jkaCKbz9HVXeRqeQxKfiTsRtZsSMkvG7PCvEH8wRh7aFJupN9jD8J69qiVyEBrmsEFG3bncU45",
  "key16": "2eMaW8zBqbMh9GUbAF6CeBS8JmU3FVxt9Mpv5qRrfgn4mJmLbcSnQZCBRceDMTMFkrExX1ckUn3ZFs8XQj4G3s5B",
  "key17": "44sQZUDCzQfRzDWvufWeatNpqCbDse9HEqxWXVkMyjNodz2RzhjHtQUcimuATSo2XhuWv6tAfapYss1a4Dzrdkno",
  "key18": "5ZFFRPNNJGW2buCDPdNudhjEu2mxUSzTFv9f9LxB1Zdr1grYf9dUmESbd85q4JJU8d5nWeqWSeic72EefyYHPz9w",
  "key19": "5H1hzRwb5617DQAEAcyoxFLGaU4d14wHEm9aigmS7hLsy2cdYvVJKFAzKDZMMhG2ZRaPEg1Lcgpm5mTGeWmYJqrt",
  "key20": "5mocJQF19aq7mGGZ79nvWr7qhcaE9Rcb9rs82ND1iBrgkSpMjbQuLfLFtHKLZCY9AYrQ9w3nZZ8JHfzqpREZB5Hb",
  "key21": "3CHasrnRedDrxeFLSUtmH8oLCDyPC4ZoSh9tRoZQzToehZvYkss3C7Mmjay3bmcoUx5v1qSdWySQJbEcKc36fVdV",
  "key22": "3EVz27jmRvPYa59imG4QcFoCWaao8vt37XKB1AzcBDyQUknFsUwp4wFWc1f8McLS61JHtdUzuTdAVtUKrVsQ3wnv",
  "key23": "1QejfFLF3MjwSj8ckqwZHH7CkmydSjrq3Qi9rEXYuip5WVLLLDjKLjKA4xb4oQsS5CTHzuDk4ixSdxgMTJjvnug",
  "key24": "5TBqCy8GXFSVfq4bEURSt26SFJUGWANMyU2CXp4xuR86sz8ycDULW1NQsods5smavUuuB8ahaBjaw14XaBmeCQ8X",
  "key25": "3CKWZyvwPXjEBPAUrJofKzgZPpcpkYz6V2KRHmG3xzoPh5a6oVpEpns61xx2dcartjjaQd9JDNLwTnYkS1AN1BVX",
  "key26": "39dG2as2yiN96LJRG6w3rjbo1FhnFuf3VzCiwQHrgbeyhV9m6dA4C8eeqW94ZZkTW52QRurHa1XQR8zJyJaZqcQv",
  "key27": "5k2imfxnXTmACqhugwKBFZ2d7yFxJmaV91Bq581Q94UjAN73s6RSWusNVaVzRhZeRCkDXM5Q16JFkDPrPhZqwYby",
  "key28": "39KJE9iSJLcYxauZrGVSy5YUXXZVfQ1GLxJCUEqJDJRLChD7uqeLcbsBJW3qyEcuWxCoQ5eDY9TKXtsg7iYQS6WG",
  "key29": "5qeK4swA7JDoF47MSk8D8KqGU48RqStu8kazBP7yYEaWSUyFYMFr4uLwTH7zwhjiJJvkYh1pFnzVbXiSEhPNB3qp",
  "key30": "2pJPWSJvYDSyN2PyUetEJd5yKC1euZqYN84x97sk77SHNVGYa36pbeoFKC6HUS72EEKfMc4csNN1g8ga5W4Bqqvy",
  "key31": "mCKtTXiRUYejCCkx61TZHPxxoVdTKjUiThn85iGWfDXwi2dYwiBqKrzenP1xYuT221GbWLrEnc69UEpZgJxjjFD",
  "key32": "4rUNaMoeKExeCZkMqhkZs9ikTTHNtTGvUZEoEaSow8KyvgasUpBAaTEzZgeSofJdm7PWgBJYzXWp4Xkm2VzPjgQV",
  "key33": "3k2T3twaQUPWrbAZ9WNmKJUifPPNzVGTa7d1vevcjuinHCYAFW1GYe2tLYhkKzHpk2sRGSQQmjHCAAWtYu9xTrUr",
  "key34": "vktz9yQrd9AMXQpzTw12ZW6LUeipevB7vJmzJmnGQqj32PsyS1NEwQZWDpfHBjRMBgKgVyi81x94g76ytw54zPU",
  "key35": "2JYCbgcbMd3hUzAF4LvkCB2bEfRmdsfEq4biCfxYY1LspS9CwNDJfTEYHXiVyNMJNSmYUubqAvGXokyDbgSCefVw",
  "key36": "2Gi4L6QE5ByvXTyszbyMLSCPX96hccN5jqNb2mTKethQGeM4UnLkG3HGBPAiwnZMv4ujtogfkPy9wVgXfFwS1AtL",
  "key37": "4Ro73oCVsakgzrx7b78utymL754HnMPKuJ5sUmkpCzNTC5oHgijRvH6LxVXh7LXQQ8woE8tx6THJxzY6CQakoy2",
  "key38": "yWrNcQMVzDm8FaZiGGWdRToMgYR9f4fL7BnH5iZ5CJiZiGD3aRXwaEUJ2jL38KURdw3U1FABrFGQc4EZipc9GF4",
  "key39": "3V4ETaa9WhnzqKm76RACJ7auUjbPE7ayWW6gyuHGZ2G3mvx3xkRBefq1bNoSMEDaucDPigsbr733fiwTe4GZnGyi",
  "key40": "3yJu8YhYSYyuTKktyJ82K6ypK3Ko4QRKe4Nv9Rok4EVgg9xa2j4hexVikwrq1i9MmJKo9CxeaR7HYACCJJnmAkvB",
  "key41": "fsifG7PAD79eGLCa583GuXGCXXbDo8SgHtPYC4QoXy47dUWDMHdaM8KWFRVJod1gZkTNEsDkxx2H92njotTsUMM",
  "key42": "4qV7BqCgckSrB4YJU622bkUeUtCm2wHyxBkwLdzbaePC3VMXfRptAznx4XPy5gH8psfLLDiVB2Q2tJDEf3EQ5u1Y",
  "key43": "3X8GnRWeCRjjyprnT16zAsxYmjugf8FPvUMtFW6t94n4QjsK82b6WdVKCCSZvjX3ATeHd3kWDVpjHgCA24d6REbw"
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
