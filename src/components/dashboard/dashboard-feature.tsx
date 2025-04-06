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
    "rz6yvbBiFz6Wt7EBcsNJG9hXqsACQXMWUqumga8HZqx4qKnmcsC5xMUGjfd8obRhU6vLW5cjBAHerXUYbzBPx38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QG6sv3PmSLsVFMukpvbmaRRFizzXe5TtntcBEFbMU7kaE3X98Fh1XFWMF2qLwxAPfnSJdZRJ3LRvnG4bW3YQBDs",
  "key1": "3jHyieVScgE6FNhGYsnwdwzSmFFmqgQuA7C5sSn1ZQpxPJiScZXKwZYrthfA3GNDoUJzxQKkEvLszcnuXQv3auf8",
  "key2": "2HCJCoDfGwSZNgRNomzqhGpVUZY2AMKfK2kDq94aGYfwHgzw5bKVggStD6XRNokdQS9whvUXx86cgMjjr9TYkCLf",
  "key3": "3uLY2ERGPCgYJf2vnmE8xs2pbRHxsQmntF8cSdB9RSoYGaQUC2UB8cHKXvrzHQcMfmWtryqujosg2SwQxqANJkyj",
  "key4": "qpp4UhSXqZP7AdcXhYw2kYtUbZwDtuTpdH6AZnGKTySF9Ez1ntoLEBuoZR3SxQSNBGZphFrzRM8bVPab2dquPZu",
  "key5": "64HqtBYH3AYLFDfmHe3H82kiMT7HHykPVmbp2pS5M7roUBfzxzNjU4dMFCpwX1CoEChaWLkJNrAL6psCbgaQtRZD",
  "key6": "3xf7hwrXWiASa4ZfgJRQmaEvtsgv2XK6PvFtEd8zQ4XJck6XdydaSoqP72yaP3Yy96P53PJ2YEBhDjUwufK4tcxH",
  "key7": "bfMZsmYBQujWtaxobfBq8nQhjKAKXYX1epCo6eN7VB8mB4g67zdzLSvNPV3719JfSLqCjr7qiUf2A4d9XGh5qdw",
  "key8": "537t9sguvdSEyXYz7mY5y1vrbcfm8CqXdc7SmPVdfoJY5Rf8XTLU8fB4gpJEDikpMMokTHi6CxLuJtANz1yhP5Xq",
  "key9": "wBidK1jRKDntccdfJUU4K31Ebxdk5f5VHwSKNih8Nju4pEjVzBqtMyinYRdFLM6mooVqPjRaGSxYmW3YYrukaKS",
  "key10": "BHgUMdLEJvEfNWkyfSjTpSXoZ2wXuqNdea88KwrEEaWWwtgyfYTtJbtYD6tmCcqToePQaCCjA6JqwkGw7p3e8nZ",
  "key11": "4FDRNt8rrmXGtRd88B332ZVgppoAz9wx1nDKTXtXyPdbSaVJoXYuEJnAe29mwXwrcTfGz5Auw1mRSrqc1uqEugPY",
  "key12": "3yT9cbZ91CJBMovrsr1Jk4fhStxpczt8e1and9yWy6gmb1Hb8Bn4DfYDJcxHNSA3vhiKioZtvdcwfEPspgrQk67w",
  "key13": "4BcA7iSSbyLRzsQX2xtV32proddtVR2EFehPGpBxtTr5XYtqWGVgnY4FWyHPcNVXMZCd9euU3XdUq8cdNTeC1puc",
  "key14": "4aEbRToe64a8sWHaXnqcXDC9WNm8t5J1iMzrpz75ocNr7gJsBqKtSKuS1RGPZbwfBTEtBoZt1CRXFARDZMzVv48B",
  "key15": "yCQt8L5MxZt2skr9cVpx6fUQWSrYTRpPbLxybKUPEtcnzZRa5SoxroDgX3VHQ3JEhvrg9jUXhrFsFhQ5KGPSFKG",
  "key16": "HaUU24fLziHUPUEgsyuGJ8hQgaBn9t3LRdn9GRkxGRW5rhxErz2JqoYjELWr1zqz9Qq5TFjXi7EAfGbiGDAkhyi",
  "key17": "44zaKHovQkuKU8yoSFz77rB1vXek954R1V22PU15NRG9W1G7ZCzXKnPWjATFHKYCLNeBst3QucEshk9ZuKxu8Lox",
  "key18": "5CPpydqgWDDjeESAgFrXPvNgQ5pYMNaQ42f8n7hD3Y6nGvM99iYg9D9PHM6qM2fbJSbG9FBokTWzjAYHt5bgSKhC",
  "key19": "XnFuTmru6sK6H1mWJ2B7BHPrc32bcrtJUbin3HE9WbGYN23rje4nNBG8AMrieCnaVXhKWsPU3hKnfuEo4YtkUMY",
  "key20": "2YvcY8KRaJnFFJ651X9ox7fbtAVDdasB84WkfbirCiBYUuBVWhKSo8gxQnB4BVfvtDTKDsbusmaADcAbCiin6f9q",
  "key21": "35rbjvRjVUV86WcS5hXrwFGCkLN5qST3ZTzjfsvRWaDpBxpVCh258pY3JzJspr8MTEtA7xxTZdmZBUATcmnEjJky",
  "key22": "5oQaofZLiQ3ESdbfKbPZaHKe1RPido6nfRXthThN5mtsoXR3wiUpXE98w9p4t5NsRM39xCdqUkHXzS6YR12c1dy4",
  "key23": "4K8ihsWx3gu6Jezr2VLjPq6iQNAQtXd38DNxhhyXpMjjfx6ehUCUUrGWtN2YdddWjgMkEuA1Sb3XvDSf31UazzK2",
  "key24": "41zFaFkzGJ2DnZp8W8SnZwXr8VYj1kLXYNfBNN7CcBwPYyix41DXE7my9F5EvZmPp5zyY5cksZaJXNrVGcgvfhKc",
  "key25": "3vEo8fQhQ3Y1PugywQL51mStBF33nuayQMjJJb6nXafYpEW9LF1dMfQbFrNsCDcDXUwHy5TGqhz83UHhr5ZPRgbm"
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
