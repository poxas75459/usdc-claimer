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
    "37snciMJtthz4ZQnrXHddMpBLH4T8sJqg5sX38maYA8YkvzJEa1fmjQGjZfsMFJipzmNafszg8PSuwQPiCVSBg8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aj7QooYZK7UEsZDWoW6hg5bjGwR8n6dYToArwqRB3avdFaVaqcyvBFVSywNt6MAvp7No2xAuugEcwtHKtsMqkap",
  "key1": "fy6qqgTc4TxiGsAgY7EL9H22QksPSrT83rQwJ1AMThWuoXEhyAiQzeWZJrLp64TZzLqArZQMgurJnturDZfVShy",
  "key2": "4muJHzadJ4FqfJ494nEpBgeik9kv9fZp1tqDRJhGhJfyRja4wWuTVMSNC8Yj3rHtAu5LsbYHeV2NhTPSXHVvqWKo",
  "key3": "8ipw4bFsn5Jy6k7xLk5Q2EdHjupyjHz2FZdQCXLr4dNbWVHbyfzx1CYUBrV1BvhNqsKxbTccHhea9pfBmDqqt7r",
  "key4": "3ViA3rzdBpq5XExidQedyfBpxBEmFG9iKYHXUyEGerWwoAoY9N2yCCLiRUEkiyEA989KLDRhveiHLBjEe5Hpjod8",
  "key5": "3NEMXpBr1Kk6DKSGae5LW8JFZfE6mAukiJrtQ7F3ccn9GSwK5rFXNvgG6mJUGycpZN2XDiLDMWddpaJBaSFUrMHw",
  "key6": "y8yZn7wMcPipyvi1EvWj5NqyNTdkZ2TXoKNBWnDA6buVBqmJbdVBkv7deHt6CHgT8RAgUHtZg2mdJyt38beZ9pn",
  "key7": "4eJ5iWhAJt9wxPb6DrW93PE1mdQt2ctfkgyaPX4Z6fpbXUKDErqNgNMxbssNzUDKbkfDA8oe9yBkbGhGWxgFnvKi",
  "key8": "57LhPqTyaNHVoTL9N23qdDcRDzVo32GnCQbeRf5Tn78mwYpsXbaNfe1qEq8uoz7Exu55MHTHn7VypVrZ5rqnQHwH",
  "key9": "5ztUurQoyPdWzyfX865rGeLWzGbWWL1XbahHWvA2uTHQW12opHJMAfGTNgh2nbJfowjFwLFxPsjgoiZnjcXXF1H4",
  "key10": "4BoCYEwG2LDk68EkHNvVuDbLvezjYGo6Wf9YLZBbEcX1v7a1Zqnvk5vHCn52dZxbeaCKhw7RPXmkzn8GKCCfa5DR",
  "key11": "5gs71Urhp1uS4fehz1iSPVo7MQ1JMmzNj9tsS6SqNuBMB1HQfcctCHWs3248ZBZhDVjC5ytovfMHi5YegwdjURmb",
  "key12": "sFLuZarqeBYKwbapBchepnsmnUyHTtze8Ra7hGXj1Ra9ZGGAWbrLfoWvWKRMNbiUp4YiZEpcfPcrBVqouzaoJ4u",
  "key13": "2HAjrQxGijhJ1xT5ReEfJBBxARy99Niy7L2X7AL3Wf8RLZ5FDNv7BhjMdXuX9E7LxvPP15MPpgR8F8JBfquwDb1g",
  "key14": "4bWvvYPFdwdAEpd4h5ZfAdjvYA5NL8zL2t6NoZonzG1GdcQQyERYuB4eD9MVnCBnRAXhKrEiSFRRJvcpxZrqQ2zD",
  "key15": "64FqGDrkuUyrukhPDpUnycHWWBdu9XBmcevqnASkEW8rXfrTEeELBC4Gw2NUJ9ANkotW8M6ka8X9Q7RK49WTskhr",
  "key16": "4nhSW3eNkX2YHPMm7cd1pQrndUoRfBH4C7GMJLDfpNBhTM1v8t3fpBjoNNdvypb4GxKjY7GmrhbrYa177NZGGAzo",
  "key17": "2c4ZA5Nrcp3aJEYc9qQhraQUuyiYshtBQUQozoW9fQFFPCgBN17CQQCKySpFJmNHpPBwohessuXCxdAYYseUehUq",
  "key18": "ge7jfcZKsi8zaiuxfS9qTqGDT9qvmVURoY8UheodeirfvgDur1ey21XvYLGvsavMrsWra3uyd5LDSR6Q9VDizv4",
  "key19": "CXyu9e7mTUrCg2jM4FTKtcAFEny41FZzgZ8gViEQgwZ78jJYtXUjbjKKTRkpFTFKxBXY64D4xJpWueCdT5KJj7Q",
  "key20": "2TwjWciftK39UhZGysHffFsrBGbLoCWeLSXDSj74YvHsSGoCKzxEcWg7f5EwgtwZsmKUwuowffLLY2U2U5QpyFZT",
  "key21": "4uHLQXCvarfcz2wQSoTkAs7DJkbJ78etyK79XJz7XLdkiumsawY85atqaXK2W1G3T54CF59kTZKvbhMMGuyJz3VK",
  "key22": "2TxVaonbqpdujEj3wqotHiXgZJuceKPnHHw7Hd8sxTukZqH8E2CYgQSuEumP99Nz34hHT6eBxnvkzyrkGP7bmKC",
  "key23": "4B5bBPduAYasNKmz1ddhmfQ8cPoPcnbsCH1quJdATGZyKAcpmps7nGeVdzvmi4NoPmQF5VYHrTNpDopffLjUsuYx",
  "key24": "5HTiT2fi7AyNdTA8sw78T7UEhSZodmcUoZeKJqrLmuwcfB84JbgKvBtDTtmm7q7XwJpBURB6QXcvSLxbNEuV35d3",
  "key25": "4Si7tp3x14mhGhgtwJXXBJXJscscjqa6Nkf6bzo11VsYTqr83kQHLHHH3gJB9dPG3cP4gnf3WrsYqDnXV6rYMArc",
  "key26": "2uV9355vMDTmB2Tv7xtkcLhBYnuRJVzuTdGgSBmS6pUuRtViHiGCk22SfMs4AB4ZLsbjmyxvwsKBmBY5Tw5eGuXr",
  "key27": "3g6NXeJLw9XicJ3wQ2HMGutcmKN7HPkoYNbDssU1hhG5BRkCcfDaSBySfGrupSNyp39k3X2f5P9NXR647akd5vYk",
  "key28": "23ZBkLqi9NNHAFx2N4A3DnbLiw4Sht8pxyYnBs3C1xadeQ4kt5MTwgqWfFyfPqZpkZiX88MBdsPNPxUM1WbcY5h9",
  "key29": "5SKoRR7WmFQ4vbS3J9KtcDNjNJJ4fsAPQhp9MkjLgWqTwhaaTwMfJemMkgXwkh7jqj9iEtM4c2qqoSsDRwwLVvX4",
  "key30": "3KSYL9AqHkrGDUiK8URe8EeKTPnJssyYZLegp5N7P2izGR4BXjPS4RWozUT66Jswzm82AC73Y1fjLV5UmmEQrVTE",
  "key31": "3Lw4WmkNxt8mWV2MiLtVKuC4LxUDzuEgD7KVLJ3yFKRuvdhUmkPAEZUm6w1PG12LsQVAbLFYj62Km3F6YEy2HcxT",
  "key32": "5eN6QnWS65LDoDEQVarVJTMXMqHSMy4V4WvdfWnz5GCSqHwaKUV3T4TZeafU7sG5FAmayAXsgwBnzjAP41of9ZwU",
  "key33": "7wSoaR7XNBtVVtavZqDhXJkxaBrpEeQSM7pMsZfF6JeJGAPNG3T8zZf5Cse3pvamJvTwsjuaQSBC4WVJcYiazpK",
  "key34": "H2ypwtXNJ5V3ukttTHfGiouTtWhE7uUmUnxGA4RNPgGkYPjNZL81wQbt7ARfNEtKbhMeMESkyW9y9UyHNC8sKYH",
  "key35": "4GKTg9wsc2RvvRV5VoUpyxbPth82T9eYR848RdbkrWam6oNDLLTXdWq8RtnXR4Tim28D1tAk6sArYcBwUNssUZGH",
  "key36": "3LKCabGvioFpJ3x2hTFG6iKuT9pRq7JtjL6aL57anAEipxZj6XNwACGWx57yMd1jrZUpSR7YK2njDUYTCG9qmyPN",
  "key37": "5NLQKxMchaXyk1Zn2PwA6zKtsgK2skcjP5E6tEMpfhyqrCXZ3kXva7e45STBoTxY2hyxL43dmxNJ2NFj5qmv3brZ",
  "key38": "4u8fwUrXs3AUhisQ4f7nGCeiJjqgTvJfketVGwNnuUmvMA8nCfTqyAjf6nco6GazxZgZZLyDML1y36WnyinhUBzH",
  "key39": "5pyqREe6z1NFAQ9oTyrhjcfdp1GP9BL1i7bQQfB8kHvhYyq3zVziZLFjVV5UXmyvLgjgKZ1uzBZkHxYCo4z7NNyz",
  "key40": "2pCABzcvwUXC3o1gWj4D1c4cDPkViHLD1RwFDAHSvKWPxmrYR8KNAgDxBb3WgzGZh1NdGwVtQ5vLofUCT5zY9sSP",
  "key41": "5jhsWCgC9F7xdaDQ3XWeMc51fFD4pBPip1V4hVHf9my6NZA8jhvCMto1oZZXGWycHuvBCM9cy5kgUdDpZj9gLKMw",
  "key42": "2NtEaKwoWQGP9cuCWJ2NhwpEZ1Z6yCs5yNSCeqRECxRe9jeHud5Lva2sojz2gWe8CwJruwKN4uvCGeveV7uVhmEs",
  "key43": "61HoVJNs2WQFNE6PC1ckPDS1nCVpqBuHAD6NwmbjsBKehiVxaBx2s24G6hDU4LZNBBud1zmi2obTYfRHZddK7TuQ",
  "key44": "5UygZv7zXTLrKX546UR89Q7MrpwiRJz69wZ5r1kWDZQB36fxFhECtNyv3V842NZLcmerf5BJdE718xePY55agb9W",
  "key45": "37DJnUaLJuZA4xCpjFzt8hzSXjcf63UWNKvnYrKaKg7j7cVhXbv3ziFAnBfZpdxec5c8v4rhyrjW7AT2vHumj627",
  "key46": "2Rg5iseFFKpBWhgGYd8wimbZ1TwCXtNpKZjEYJDBZ8AiUzsWYxeYfCgf3Jbf7porzLG4G9Ans2NjBckZttDHp1Jy"
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
