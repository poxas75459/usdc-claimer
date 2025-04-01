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
    "3ba3LpYPDFRGtgJdysnsi1fmL38KRz5mmUf3bkNYP8R5dims5h9X8LDxJpegurMZip14Tt2sUASadEx6Nq81rJzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46M1jMsJydzVwneKcWbAgW5d4oR5tGSssGuGsKHcSCD7biJBAyQMEYKHGchS6dDAic8Rz1nEfvMC2qWuPwtc4Xfu",
  "key1": "5Zx6hd28RWjVGd2eW8cb57d2cjbg4F5qY4EkT2NJyrUUXfdsRVLQ8zgi9va6pqg7oTPNSWQYNCZRN2w1N3g7qGw5",
  "key2": "3Cjo5JwMxvnoaimuGU8qzi5NzGTeW5hzMXFzbFzGHRSSwz2ej9Nm7XSnQWx9AXisQNnYtG7m8YW8dhngnkygAWKg",
  "key3": "6vd63X1HzxP9bN2pbEtWK4LwfQash8Nz9vGpZvX61E2on1jFwsXDbuUr2rxmNBhivbDtuDLCWTsBqbxfxHsw9Zq",
  "key4": "5ss5aMAAA837QjgkSByi5M24dP7t2V3xaZHnyXYDRYXQymxUU3shuuD16v3zFtCqFkMH7ZrGcP7rf57dnf38xgte",
  "key5": "xZAGewtBoT5wja1xMpJp6nZHShyTwNphRWRMVeRF1WDsDd1WsHkdwdQMYPf9btkprHjjbhM18gdoHJtdtDVQPZj",
  "key6": "4eXC5PpUM1NtVw2vYFAXos9XxEHJzTYRwGZxcxDdGpNEdq5fKaEVW8AdVdqor6FDgwLaseGXxuuHFx7KnABKzGdW",
  "key7": "3T7hqdsArhdt1TKY1DsesJtLsjvCZfLrm99Ao1jVBZvazjbVq8P4YhpkLZ9ndsJkr4C6FUY4BBgTrPFvZT4ucvzk",
  "key8": "48KmddzyoQK5tYJKWP3fgkHuhaR6hPYf2pmnKfY1RWsjunjnBtgeX1PyErK5SVhHL88Y9z9NFyxz7kYQWqNjkhDe",
  "key9": "2LWrvSWSvC41gynqPga8jwuBnqqHK7uBgmGMtnTnn6MLK7XKns4j2UZKq1in8KprPqHLXUp4muG4wiKD9YtDns9h",
  "key10": "2bf9S4YYhe7DCZx61VMdTeNLxo3q4QvBdB7J25ddrFH7ydbn5FyvVMXFqh2Qk5vyZmbt5iszc6NXfkvFFag2CADC",
  "key11": "23huQa8k7737pZ9xD347hy8mgPoYineNNf871DHsQ2By1hxuFaPSwvsWH95cnSDBA6U5DqzEHDRPcRMPTaMQuTbk",
  "key12": "5Sj7np6i33rm1JtxYxuW3Xqo3x3rcMvj34ktyAYanWUTd2ufwVFJANx4bCERvrNZGfe8BNgLzZzckKzi3dLoEeaH",
  "key13": "xzWSGnCRPuuKwBF5FUwovBD3JfeLXRowtGxxrghndbbQmB9S5EzPDdt43EwzQ3dSWwDZ647dfWegGu28EvAv7q2",
  "key14": "3iaeAeRbMMhAyFkbeLoWotmVRuRSiSptu6g3ZrCLPD5JBVVABHRGScNw9JJQAZL4LF7cLiyn3HhVkRXAg42vKanW",
  "key15": "5QwBud9z1xRqpu7WKYMGbCnxt42xwxyUdaSidomsaQorrq2P9c4gaoeKSA4YCtbWdmR7W5AZBUzAdX4VBmtEQL5X",
  "key16": "63Z5WRjrhX4KcuGuD6ExrkBhBjZyZsk4aYTFBQ4wuvgcFbUKdGFkNmuiaSzuPmtcXm2nxxebmKMrzpFmYKWj428f",
  "key17": "xQFKcZPyj8F6Cey5e5uERb2iD1ai5u7ZCu8NnFvSHWAhU85qaB4me4WJw25unoDTYnFXEFR93A2drNKP11ZkcDN",
  "key18": "5AzRurc2XDqG1LdBBMEFaBcb28fDdaKuySNqdpLpHxfYuNgH1zC8Qpr3gPHM3X4KAF8ZwgL8g8Wr4TaM9KtGE3ma",
  "key19": "j2z1rXpx5Up2NEjYxp3oBbGWBxYGM52m87rAVJEQGm8tbWtjE5n5mMgxnkwPFFk6Dgye6zGAm8FxCHPKSjwEgid",
  "key20": "5fKVkkb9uwNoswZyXmx4aNKJmexjjH99j8AJzgwMuHLrP9rLbnmcato7doVg4bVAE4LEd2nJqoC3dN3GSQfDtudE",
  "key21": "4LLL15GfXefNmZJdWmZgXUydACA2CmUxhbwGLUYKRdLwHsnfASG8g1UbFvd1bGHbMfQoaABsEMJnjLDZw83tLwL1",
  "key22": "Wyne8A7aS7A252rNpRBJRcmtxbHXa2nwwWhuBmqCxm57W9k8vTm9S1EvWN2kz17U2pG75CH9TwamjvnhrS9PH7y",
  "key23": "4KhFfdBhna126c24xPVS1tP8fzNF1fMiogRS1n3kcv5pkgb5KKXdEkkJM4aEg8d32cyQeADNhutwHbZtHJ6cqDu3",
  "key24": "4RiEbzNvtdi7zhuoUZBzoBgqiFnKHMj7dubFR7kTaRGVZ43RXWS5jrwnCa7PqCw8wBdTbVJYnQmUp3pHsND1zC4L",
  "key25": "5DxHJSj73Ax7jJgiscQUTmzuYXS8p2KEFd2GacbuXYm9psqM2izPzLMQrnEdsYK19ET3x1arCw8bJxgyaxGyT6yz",
  "key26": "5iQHLevkLJgeKcJcwBfvEKPSno21N6qRsUSYPREK1De4BjYGiURjE9YR5HCAEPjBkiiHDEmpyupQJZfHAwwWb289",
  "key27": "rTXqdVbqzJu8znf7NKyotm217yRH7JTbYmGoY5krNNf82j5qHyuvypT2xKVpn77X6cLwdWaLSPnxvKRWTf97QYq"
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
