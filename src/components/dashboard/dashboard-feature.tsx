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
    "3chzicY7WBr7FM2c9m2bzbCXZXFH8ZttK9cuk7WgF572DftQfufyGeQYoL7VuzvpLrbPEqETqgXhWvPZbN5MZ5Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAHHzFkaY4gNJWRi84msrojN9NsaMrEb69PQMA7yG9YgmXkATyzzprX33tW6jqCLcnGUKZHNWaoSmsprjh7tU3s",
  "key1": "5nL9KQdqSXgUtrdzQtJZC8GDs3CXrsmb8LvH9cqUFgUJWqpkucQhXKpiFNBVEMQkyWSG7qMQGsLXEPbwmd9K3Vk4",
  "key2": "62BhDyG7qvrnN16ShdbZFnbtkn1b8Jrh1e5j5jC3WzSMb31MtYqU63Hv5QicVhszKpZfJefNH8DGPPaEXzduo5gi",
  "key3": "Uro5iZxDNcWjAU4hQVFNyCQtTwzbxXLqfCfaWr6rPef6X357ksosRhi5QWn5oRoCpqfeMRGVSjfHzErq99W5fj6",
  "key4": "24qfEnrpsVkoi6kveJaJJawbd3pJrq12oqYeydC1NqDqnpfVAkk9N5JAytXomERvcLLBu1TeJEKJmibfHk2jDtuZ",
  "key5": "4t7U4yhBXtJkPTsYqYjD3P2f6iLDi6gDEZcjZXwQWgQze9wGgWVeVWUa2zo8zwPtoKJ9g3Yjv4i8UmeA42sMcYfX",
  "key6": "5yP321q95Btvv42VSnyRKCiHjJewdhoXZkeP5zXtzh21KE45wiSm9WodNzvDA54HMhZVp1bU7BGZ9sGkhZb6ofyN",
  "key7": "4qwKWvuPiVVmkXtHWJqzJRdtvAWprTNfGHFC89yTYh5FU1hFZUPHb35UyqvYqKFhL3mX5ETpFg421xUpVJoFbvd1",
  "key8": "4B73qiThtVumdhBKbKu8ZDFaqLuHggEVCfnHHqnki1bCn7vu4VR9XXqHnQ5Qr7CSHyLiekD4izS5LLCcVFBU3Nxd",
  "key9": "275qPMDRQeJ8beR9FVzaVfPsjZ145eR5Ep58NMGV7cksbqJtPbFRnfw5EFspV4vr9jwiGKyy5SJw4Fuu1i2HPpV5",
  "key10": "5owwy3JQetFevuQrA7rkwCTE9Q4hMZkMJEe7TS52NtctBJ4Th3d1juLshUZgXP98eBu3nSEd5RT15EfwyyDnVpap",
  "key11": "MvQUYkfUsHUeFPKRzWvLpdRCSmxbBW6SZxsxu1bAaHmyXBPoxpbPwc27fvnnh7ZqVwSpdwveKnRr2EQ5AXdrhYC",
  "key12": "23vZxEgC4xUCcgYge7uWkhouZT5tSzvUVMBCZcGRQ4snPfjoZhVZ8NnZLeWm6nitmZpDhG14GzU9hgD1MWxRDWFN",
  "key13": "DciqiJiP1dMWpXZARnE2PRhQJ3ZwRskjnyzZozN8WXfMxZS9HHhS7Upe9uNLwJnMT2PXesQEdqQCyehDDSiYkhm",
  "key14": "P1q6adhnnXYBWvkjVFVUQr69EMgevmay7VDALBaEpAqG79uVj7C2acGqF2VWawAQCERZTUseUxCBdYf33Z9UQ6S",
  "key15": "47b7Mpi7YsqgVmJ8oJJV9dWsz9JsDu3HrzumqtHfDFWh48Nvnyu8JA6Bh97qMjQcoaPbKooGyXM4QpZcNuk3CfnW",
  "key16": "2LRkrnJKysVJthQ5NEFBS2szjuz683VXFgmrg7BMSbvGTQtvNQ6eyZ2ym9mnaYAAMNY1apFGjbPWAzKjSQkNw2Mw",
  "key17": "2UvZfFb78wKY2FwXrZjEZY4Sw4wNnhA9HnFDeUoFo9SB8cecr35xJJbtVi3czawWSV5kkRg8wriYjT98yK7Q6K2M",
  "key18": "3Kb9eL46KNC8pEshnrqq6ff4bBrUZiUd35P4JaT4kDYgduv9pm7yDYW2phQnLSSHCHNwGW9zLjpLb986QziPq1pQ",
  "key19": "4SKs7k7zbpvP65kZ37sJ1b2iCaHeAWxDbrs9iz4hQxx2gSwx5iyC7bBguyje6UmFaKdPdGaJr3cKYEzFGCNHNhuY",
  "key20": "5GrnBVPPerRRNJBJ6NqRSjcGJcuLf9Jd3fbciyoMwuNMUhyz2oRrUFXrZkLyhNBq348r4RdhsW3YEe6FQTrTfnZk",
  "key21": "5RLSCzVD9TPqkEMAvibXqUWM4TRH4tVLfjjUsgwNHcqTFo3a4vYPitGXJwXKgTKsXhFAdk7b16txCYKL6qK7jFMr",
  "key22": "XyWVRjcyroqCyHe6TxXg7Ev63Vcn7eaJ6z6MTzz6d1ep1vzUGgVCihf7UDSvwozm2WuqoFeiPnpfWkxUm1izBQ2",
  "key23": "4swvHEGRpm2NK3K5mQuwp9Prei8cuLHidrBNuwD8fLWzoAVW66jT19uQLZwhwgFzUrkVTWbPkNgqcxKnaXETEBDS",
  "key24": "HFgWiumhe1uowcUHkjLvmtVCJBX5A6zpm1ybaqhaPuRLK3pruNYuUGsugBU2LLsPzPBToU2WNdZsn4tCXyqXLaK",
  "key25": "37D4zNLc9NcRoksopsBM2TjfiETZiJdvgrCUamrVSBJTRHmSpAvuKpYHUEar8AzUKGTxPdepuFm3D5uTM1Jv8N3W",
  "key26": "5bkzFDu32htrVxyz3CrCSBNEk4wnx2bfrgt2V6614MFrLTViUW5HrTP53rHw7NXHUfRj71Q43iYnikdX3txXUFoc",
  "key27": "3mFVM8W5mFSzNDGZWf19iMyqcLHFXL9bTRP7GnzzSLAugV8rvja59BDXmouqmGAAiuKdPHwCpAESzRRzwKRCZJA6",
  "key28": "2WYRQERCFwqAjZ8VVQSiiBqx7YTCE3xjTKt8zhK6mpF5BpLFKE3gcpqmNDJEAkDfcAd12pYUFkQNEGZH3GHN8vQg",
  "key29": "3jviYN6h6v7nFjwcLQ1g7p5JaX2ZibKCDcs5tuyna4T8vr8VLAfbHJaac5Z7NNKt2LzDToSS7kXk6Hs5KSMSzqnU",
  "key30": "4mDMUk4Fn8MNCtZq11BJTNGg2aEjJCFXv1Z2bFtxfgn9v2BpJityGXyavN4aacDi4i2RmTs2JdwgnrfgE1K3PfVh",
  "key31": "4jK2VfyW71XBNUGEfEJkKBxnypLN2wkCCnmenoYTgi4zDvMomVMWPbgvLYLusYrWH6BRCDCeGpna9K9y911hY2u6",
  "key32": "5dEpNcP8dDscuSn599hQ3eHrsgHSUEWdtV7C5BuEZRWQLi2FVvU2wPMGw6CjxRV3rMo2T6VdU2RrgwKDfX9ZQuzT",
  "key33": "3ediFgcmvQ9yjpnfvSpBLcjr4upZh3SdUPwAokQGbrWSf1wMSfpFh21MjKnKV13tc4h7ZJQMqeqhuuYe24L6Ax5K",
  "key34": "3KWgc7mr69UNpvu7ykXrDJC4RbFJzzB51ss6nG6nnyfsST69WtKyvAPkvebruWaMdmvrPW5g5Rpph9sA3xfbhBV8",
  "key35": "3vMqnCoCk2grtLgvwrk8P9t5Fjsf7c7Xq3AjWSiJj3XpDH1MmpaAYr8qyvG1YvEj8QVfzSq92vR7T8KZTp5gKVkV",
  "key36": "55MqSMmA3h1M3m5u8PXnr8xgNtJcF3zMpegCXEKu47q3f66WXHyYaj759hKBNjarwB2ePfJJn2KeB78L6YTYmmVb",
  "key37": "2fFECfDMoJWwkRy3QanQW7YQRzXSCR7AGeJ3T7J21Lt2G1i9dKysQu8aKHKnUvPmxXpR7DZstaZ1QwffowGfhBxi",
  "key38": "3KzpgpTM8hx4NFyKVY1gu99gZ5fL9v8T3qcVB1vbWtxTamYRwLUW8tWRvcDz5XB6vqdico3L4qcNKARJtZRLTVVj",
  "key39": "2PMaXWu6HnkYxh6rJ2xietwXnnEyhgfKsd6nvWDzEWDYF8X1m7ceJXMfUqQ9isF94LxDYXbogesNVRrtNXYi69ew",
  "key40": "swJvug6g5h84aCgZq6E5QQWMqXT3MqqVEfA5k2GRUsrTAX7avmiHLCyRh7NnywtbeXTR3QUUBwpzFhcCEgdTXN3",
  "key41": "4dDBoqE3k9yjLZvirBie1otpturfnNZQcJhrN7ruDbu6H84y4dMVpuGif57JYoUXhrZNjAWEPBSKyfgNZqCF892M",
  "key42": "5u4q2SUkkXVwLLu8v9rriG61MZ53MkPc5NkBqU1ZyYrmgmgGsKpUsatrEuaDs6gXUpGfzBKpP1tKoXyA3vLCyZgH",
  "key43": "2hudkfTwqgwyN8JwT6aAzjx62QLKxgX9FCqmnKFjucBax73uCkD68LdH95FPE8TvQeQHZ3Mr92daGBjSXTYBcxKk",
  "key44": "3ARjNswgNfXeqh2ekKwaW2orrqYGqojJKVz6zeqnzwDtyyRfyGoW7cy62w8qHN6k1mB8neXSBeFzkTEa6YCqB9oA",
  "key45": "3kXMdfzhZSTVUz1tdRpa4Df891hPxTRSm7FPRanjZEcRZ8FQepA3P4o6ARNfdTuXzHKfeqfa53JGzAnsinxatAoz",
  "key46": "3pX956Z4KJBLaSfVxowvaXDsz49PwGdvK2dw1FjBZBreTsbeNcK4dxk1WLbZLaUaK9NLXmh1ZzFJZV5csVSznKg7",
  "key47": "5Nc3to7puiYv7D296yqhrVizJEav4iPLfPuASWbTSx2VtwWRrTuedNeJp7STru5W1ZtMPmLRWNiu7wCoV2V45bZR",
  "key48": "3TkEBLUWCA2xwsxY6ZjPx4vABZiqbt6UoKb8qf2nCg6btp34yy3CsixJmKpo8PBTnLFYSxQjznUAWudRoRjzu1BZ"
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
