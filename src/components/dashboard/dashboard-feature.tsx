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
    "57HRRuDSV22YSk6hjATWWikGtZHCCB1EhPMZrb9AoMPKJa3Gr9zA7U9r5M6wc1oy4XZsta3ZP9BBaaKqNCznUwu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FiktRFdnQ7bNTUVHhhu6XjEzZRBqCLRYL4h7pBbkJZnTCmHYVqLVUY3Qmj1SuVmMxpnuu3h7WRbnwQ2MsUi9HQg",
  "key1": "62tdhifhqJDU6V1Ty7Q5D85rCjDUoQxn7s5UmjeFsyi9fkF8a3z6mdwECj9yMRFoYybiBD8H8UnusTFyU9LZ7HyH",
  "key2": "23rYBVVEbjg94PdQULE7f6Fk8124rEXXwzsbtMhXEmTfyAnTqbH5jZHHD355S2rr3wgQMEjR7Dh5ZZSwqNHsZ7nu",
  "key3": "PnWHxZ7iqfsgaEvpy14ePArC7bicbokQYsGwbQ115UALDnTkFT13wP1EjChXTFxZkh6uQmMN5ij6JPm4BpJcke1",
  "key4": "2kUffqAFhPL1QuYvWb3Q14Cvd5wXfyhVV88MmRGY48M2o4XXH71xe8jj2DWYe7BAm9h4w3TU6b3K4Sy6fRwLnoiY",
  "key5": "3QSKNs4EnkNKSzGWVk3uPqjdRExJ9U9vhQ7RMS2aWdeWSeYy6gKyZ7smTpHZXzNuWjU1Gx4ZJD53e14kzTx9fTWZ",
  "key6": "2tawtYb6bvHXUcdmXyoXP3ShRnnvxshPZwddWkfaCymBLXN42CWuA4cCSxGancbsY2zqe81yvtXd3QV38Qmrxm9p",
  "key7": "5jDY88FBxNzp5b7CjovaXyP6bkaebeNq2b532tbURyJtHRfxmoJY9GvBw5UmjikBh9a9bPhtNmLyrvkprCddM9YA",
  "key8": "3CKTYmymoSuaNLTEff8rXKaeCmekzxvQ8FCMiDboxgFj2x7zqTciny3AFyW7WDw1Wbg6DDaeXPUKLnzVLdo4wByP",
  "key9": "5gNcGvUi9BmLy3WBXASL7YuRmZPRGHsqECFduq6UQkSca4XAUb7kXEWU6hRmAjzQy6xjhtq61KUcSdsS84ZH8jLM",
  "key10": "2U1LHCheKEJrgNMQ8QKGKmpD85T7XTjh1uLp4NxPsC8QBSgMed2pdhCB3Yy5siSkdoAzNrq91qBphNR4JCn8pm5o",
  "key11": "oguVZ4R8FfBjU7vyr4ToUQ1XnB7U7AqdEkpNGY9BFF9FGJKmGNM6cBb6LK42kccfuGPTJyD2ZuzaQmPnxK4yhx5",
  "key12": "G3seKacBEn4uyaxzjYy6V49y98EqYDVZUEzRGxaWs5gWp8ztZSNPQoFpb2RXV7XhuQ8hdh2RVw9nnCtvtynp2pv",
  "key13": "2CvomHWNpS2wydkon6Zevq7UHbWZ3k2XM5S2M2HAuspLp7S4ovJvE1pQ7wt2yXTzkMBimbFc2RuUGhk7WRy57e87",
  "key14": "oCzwE9ZdDfCjg1QADPaz2ZQ86uuFWDHgaXABZQUxo1DZkQahuPo1AcFzFNtCF2LiXrvp5FCptFtiQ25KfFAkdNH",
  "key15": "4zpGj5GC8P2ABqm4q3KnutssKDqc9SdxpL4oDgvo5UaH9dEhGYZaAG79Jw5LUZcDZFLQPrjUu2abvoefcCSGGsRj",
  "key16": "7URJN3446tL81KRj3TgaLwhxvJc4YSJZiDu5gphcaAMBnUPZsgw4zfNNoDKB1DyXs5QRLYxhVR1XZTUNNvMWuQf",
  "key17": "2dtpWW9YTtJyYD3K7yjsANYPbv9Cp3AirvM8y43wK6qMfUi2TBXWNkubwSB7SbUNtjpNMYypkyHd6TcSDJC32hb8",
  "key18": "5K8zJtRsLhKv62MAoQoLSs7VmXvBVdD3Yg1pyfbhy78zNaW2YU5TgF3zcVjksm8CrMQx9PkJsS1N3stBK8rWATYw",
  "key19": "5uMLsZ8HmSjmxdnVDoR9acB3MhguiRTjLXzFtJBViWnvNc3LFDP3CPb37ieMWnZWmcweJENxJbMLyyzQdfMXQz8U",
  "key20": "5rv9ZMM19vNTosRRf95ewaGFfFPC6ePSeqFb5dGsXiNcH2SijcBg8C9Wb6WFyGh3fkWBbRap6n29KGyY5n7d2GJc",
  "key21": "5928LWYtB2QZbnhycgs94FWPVuWRE44NxjeaMGMQJXEiWEntv9fDq5irzsPWboqeBX9oQbXhujxRkByg2atTWYiD",
  "key22": "YVNeYMxGtNMUaBnebG8NttU9aDLiKqQy2jBMVpWcfC2mp3HJpfsXVTaustmZhwsfJRc1jC8ptmYHKFTemxvYg6e",
  "key23": "j3HD2s9G9TC2eFutvtBzy6TLTRxrcuSAhLEW4knDYS8BWntwZtWDpdR1Be9PKD3w4aAAExusgVuiDuSkDXQeqi5",
  "key24": "5bd7HESZJyVaNXaFeUMcuAiTzKgxCsPjuQ27PvDwbzWgDptBeNSfPAoa32ncdWrs2fFV5rZrNNKCiwdXtX5rXzS5",
  "key25": "2hrEQqiKH6p3hSJnrioho2Q7TXFzomXQCpms8DNQm9ZpGQA28nwLzayQFnrhuHBr8PZyat45pTMReVzXzCkG27Lj",
  "key26": "5Jkr7WRkyvLcSUdRUWwXWzrWw7Y5s6xAJQF3U3sgjPf3p2aTcUxRPAdevLebwim9YKC7DUcowo86ayGt9S6oyDeY",
  "key27": "4ZDUEeGiScC2gWiwQcW2uESHUuGEvhwMeVTMSrguvb1Fe8agAg6qbP6EgxGddXHVCHMUhQP2bxAa9CYQri2mgBcB",
  "key28": "44gXtGXpDZwfQua42TNpz7Sq2g8rmAbR6mVteG4P92c6CfVStw823YQAd7FRztEVbot2D2KGFwS4Y4wsBRiNgZ1t",
  "key29": "2sZP84fzLYxyT6zzLRPmtz6X4wDQKqYXWBEusU8jv1uuZj47NTtTbKKjzHMwKcs7s7pzfK9Lh7cZQ83wN1rZs7vM",
  "key30": "5KVjuEbBa4jsYnqhVDuuhL68RjBu4Dnj8XxdQcmDqF7VoLwJY9src3j7KohNHiWiAdqyiZUFCwosRwYz8tYYLmxs",
  "key31": "2tZSC3LdJwvsM3PXhN7QSbFPtWBZPVaS6Vg6EXC8TKVHxEDn1k4rWCydyxACkjjEbaj15CuKpzxk4UU8X2uPyxKC"
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
