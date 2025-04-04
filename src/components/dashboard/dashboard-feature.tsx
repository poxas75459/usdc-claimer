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
    "5udZdQosRmR8TiH8LJyyHV3CMJGHcYQd5zjis1YAiscgcy6Bfqk1Tdtx5K2Xau8aqJJap4zMpvhL2D9EjhGiATA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n35qG6X2KjcWGpEeiG18BXSNWjoozTKgYU7GE2UZt478UhEY4GTUGoRZvk52K5ysisikzXGswdMAtzBDtnH3Tfi",
  "key1": "2FVhCU6ccosLSfR1CwbFXJS3ZaggGGvL9WuuKeq8j9KTE96krdUkZwxHwynrTEfDhaR5xx78KEnEGyX5Q5nSywKp",
  "key2": "5xs5ExxbFGNzzuJr5XnTNTEXZtE3S5651gh4yHbaaarVGtw9ZyzaZY7BbtaoU2ck4B51jCvz4iztjdCQdNqDDsqk",
  "key3": "2YGRjnYbRUWDMxRVPt6aAqfHd19vgaf3PQddNmW3V1Nf4YgMur4oFGU8Ym9XUqnhXARwNxQwcV6P9rzeFqmKqQi5",
  "key4": "5J4UQWzJw6KJBN4BrhsgxFLPBzCgepZaLwBU8P76ta7vjW6BpqSRvwXRuASysyePPZ8svAZtWMTWprc3PeFsUTms",
  "key5": "4s461PqcPqaYX8MW3tGuTqtYENjhHY6z7HDbKcVBPGiL3SYLLsJAxnL91YEYBMXGZwge1XLD1uxXRYMRffpd9ScR",
  "key6": "q9YGgUN5wESUACQPAT3uxVLjydavsVDFPukWi26c9kYYPUG1gX31cgTRFjzURa84UfUJsfB1y3kC1SZYV2wnuU4",
  "key7": "urgm6AYSpX5qs7eQhSQN7Wqu1afTfCKnnNfYMdyXV8BdECPfAvx33A7G1J4d3yVDFzjJvR3zycnwQ4So4ULNdiT",
  "key8": "2D3i3KcDmuMjPXi11urDmWxX4z39FEWcAz3xDF33J1hnBWnTXtSRoE5pux9smeg6tMkRai5j1ugqj8qRHuy3Nv94",
  "key9": "31oGoYaysdEeQNCwdVQ6zYbiezBmJ18HTWhtCTdgwrHLcJmwLKPBUVL9JRkUeubWzoKuVDd6TVeQsvUzw5pHUhzA",
  "key10": "fq4DHt5hQYVC4Vfdv2QmwZoez8Lic1jNwbGkT4Dk3qofq3prGkg2niUiFpvgehocuiwJq4PKLXzsn8sTiazbCud",
  "key11": "2UZ1sTQi77894L6iNVKmyzTYauFaDARnXhyszLP1VzwiAMZtYpfrsAfzbo4z29osJXtHTtAQsTpa6uGQ17TZRtaC",
  "key12": "499YgHWGyUoFPwNczV3mFWgzRo7Gc1VjSLiHi1gKeJKSxi6oMwL54V8Vx4QaivS1Duf7r4usfrMMHAh63LBYSpLt",
  "key13": "2NQtBtWhSAGXiF873ZvMBqPBhgmSUM5puLkUgSusjfhgtQEou1t6BJqwF8ZrPEN44uigUH2TDmLCyG8FYW5mKuXp",
  "key14": "4nCYRTtLuxmMVfHYgpcy7r2UkUDNvHd85xqp4KmM3bdxdyMmpbhW6H9i8P1kQuG8Jva8EuG6uPh7W3YMY5ZMPH2G",
  "key15": "2GEv232cyH7yf7mBksACTEVK7s9cuZMmX22vumLKZMJz8ZpRocNa497JrMqWP5JV3PefK8y8BFcmQcZcAVauCuED",
  "key16": "23jcW8wLfT8qFLAGiMCs7UTgq1DgmSWzZMJvhMoTkQDAC8murdkAfcE9UaSK7rXiKwVyvTr28Dzi3KF5PtccbnhM",
  "key17": "5enT5ddyNViX4R1yLe3v3hAT7A2nYEfizFBR1NhstPNtks7iqXNorzHkQ1q9aGWyysFt78a6tL9t9PoB75baoRQg",
  "key18": "4evT7rYBrFiGFJcVZcwtQNB19gmfAa3ZAjtQogMHGJnwe33EvF8pZBTJjxYCqXam8xCpscKwu1Tdk5wLa1hBuyz7",
  "key19": "54qzaLCwroLHA2uwcoWYgQEF78tSkAqbPQNfkbP1GtDAsFCpkzwuriwAoF5LoojfsyxXy2ygWyRHTQoezcZi7iPs",
  "key20": "3N7uCUdHxrhUwXskBNYocNeXVrdy1L9dPMhywBowQxuqvNbpHUpe7FZRJT174rnga9JmphWKLuUd2U2NpnEW8tTR",
  "key21": "rvPXZAA2dD7zu5ssWa3LiEE7iQT3Me4Ct8doTFWcpuPoEfvomwncV1n99rv3YvvTUWb3SwYK7DL2GUXcGigRmLQ",
  "key22": "4HSMWsLDXzgy6zU6E5AHKKzHcSRNFzoPp9FLGdrXV1EtgnWu7tXmvBEG57L6sUoY7haJmS2bGiA6Ltzrfh1nxFJy",
  "key23": "51BubSRSHrCRDrKqoj8NGm4dLRtZbe1BEc38GGsj9x7wDVDBEHiAAGCet1gpKLNj7Vg2H9UwAJfRp4q9cwYSLMko",
  "key24": "5rSfmBw4JqcNZrUh4JrLS9xUWo6qhqFHA4X2gx1QLuupvGZBLz1eiPVx6Zkvzu8sA4Z1Ccbzms2vDzAVjGYFcxit",
  "key25": "4op1WqqT45KkMQWhMFTts13vDpLYZTyczZVEPiVTCnzxu6YHG6ntSRDoTBFVyPRLwzroifwTHzujcyMy8csNeJTJ",
  "key26": "2CfnJT74tcEYsYAVZFaqkAkJwngUFQcjri7e7hRXYkxe7LNMWYkMsvp5M7w4aTkf93crvgeLxz7QWDXTgDuXekfq",
  "key27": "2NDRCcr6v6YgQmKa8wHGK7odeuhGcDwXGsHcu87NQPX2GxNrHiTLoSJXkmmWwBf2QAo21skE6vAfUtCk9J3nEBoL",
  "key28": "SH2j8Jja3cZ77q6qRqjxXBCrhbZAYHR8MpusbXmAEwEyaCcvgWTZQtuS5kWaKfpwFvummjr9qbsPe5UHiLDySPv",
  "key29": "5GvpQqjUhowxZu1L3HbVNmhNjgEJ1yp5mZErEPuKmgTqhbqPGRQyJyYaPWi8qyQYkj4dPgWY3v97GdHNCEU8xe27",
  "key30": "TxLPjcRu1DVVUj9ReDxhUR1ftMLuvutE2pe5EFu9JhPSugARXXgwpQdc3mbuPWzSZVvUiYNUaVFHJ8zhi126TF8",
  "key31": "5f4V83tbH6PfftHgDNv5DRa6ybCvejHFRxuqjJ9Z4qhHbxnBQg3bCoK2ZKLGGVCLsyioqM5uDkjuMgc9yaLrX8CH",
  "key32": "2vQu2wYjeRgrR5zsPC7q3Uqk1ZrLwEdJCLUyZEZEzJxV2oRZgqdFJQzVtKZivwhUeY1Za16YZcU9YfMYdHwqkVg3",
  "key33": "3sdEsAWwkfq2U4bAQXALzozN8SgzYR12xkSyYKVfmHmioCbKjTa9eMh9UeNDgSHyyyHxJXDYtyriKbJET27UZmms"
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
