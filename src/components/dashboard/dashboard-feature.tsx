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
    "57JvjpFKqrHPmMXn5HsHVbFBhLfsiBTdYSdtF6xPF5hFgrgJKu3PFAWgBPhAwoA3zNboBXoNeJtoz8w7zCqfLZD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZnfmXcnrzKkouTtNo24JQQnbFcZVVeSrGrzzjaAxPus2KjXmshjZ7nefNDkH2yro5hWWt5wkwwEG95b7SjAui6",
  "key1": "4agBMTT8YWRYUcjP8HWTr56jeabhKXiBh8o3HrgMzPFiaVGg96KpKmkGRSX6bT5Q64rxv7ouxjGU1papsZrUWWv8",
  "key2": "4y4B2bHwND1AYmZh6Qdmqq2a9qBDJtxJAmdf99BWRGgaYwV6CF75EZWkB6tan5hfN6ifVXgrjeBfs26JU6TJFHWB",
  "key3": "5bKi9WYenArszbT2f4qq19BqPsB9oMXV8j6BWeKgE73S24Ys696EXEUs1Zf9UMTPQYGKxxDff1qdkwtQRKQRxH68",
  "key4": "4XA6j6v3drwfdwdwp4q6TqivDpuamkKJUpzGzvXm6Rrg74BvWZFtJHkVsPb95aHaJ9KyRKDFCQiXERpSe3SySueb",
  "key5": "67G3cKYhAqaBaBtBeSKxUNJqXY9RXH6PsgNdXKNdfRtiueYD3LSDTANw751HTWHF2YPuf26fTsPhKwSMwcMq4YFD",
  "key6": "4BDZeLPaSGxVka9XFyxyExp9X6BhzGMNh615VsxCBT7zoZx18KftiMSEEJXtKr1RYKfrmNE9BAVAtLeueHZEByuR",
  "key7": "5iZiRHfJ1nZ96TWS6FbMSf6hp6vdAKbXZXE6Y7u6y5Mf46TBzKDDi7Nddvd2SSvnG6NTVpYGxkENHrkq1fPWvXpw",
  "key8": "5pfMeqaTKfTqQ3hPTJd5cq9jW8GzXftZyeTbFADfWQL1Uw1g6xvqVNod3TEAqjxqubtmeZnam7X8tSuf45caK8fD",
  "key9": "4YLHdB5U6j6ERYDfpNraGb6qVvTJye2gYQ3yJh35Syj12fq6hSwQPUBNhEBnBwMqNj74QPQZHaZqT2XwbVUSsxFZ",
  "key10": "3h3XwbxxbeYCtNf3wcVCEBnHU3QL3d16CdnnSbxd6x4n6dn8YSprPeT7pWpQayQYKcUunTQfKo7EgU9j5vtg8VgT",
  "key11": "kZogawtDJyqRKkBCkwcaoLMG2FDG1UD8SY2JsfUmsNpvA2pvQjXgahCtBPXitWsjySbPn3HQQ47y9sm7jZN2mFR",
  "key12": "2hhRm9WGFnpqNd2ySLiWu22cYntDk97qk9L4SBp2NCJbfM5XKAoPf54CAkM8knYKYYKvp7c6hAHzQ5Q8FEF1UCb9",
  "key13": "2MR9dXnFqtRFj773Pya1XnGFp6nekKAPhEv39e4g7URQuDUYqEcksfgnqFvcUVbB9JoX9z24ohMA9JZuiZEGto2E",
  "key14": "3ntP9Vns2UQFHNx7UvgqRGRWPQtxin5Y73wVewDiM4snmkaVayifk5NSZuxp8DHzWQ2KL7FZBFdG9S1Pwuqf1eKz",
  "key15": "uZBD5Xd2dsk48CNN2KAjBoCMEx5uynRnVhbVKf3zwcycJYhR84c3xkeZm9qNbngZLoSLen6uNCUvCriUuf44GjK",
  "key16": "dwUURZ7CtUhFiC5cozTsUyp1V45EKxb3dHdhoY5CffVKPgG2MJgUt5uwdq5XeJqYfpi5Sq6r7uVraDpu7HTkUdt",
  "key17": "5XgXZzSpnNgyFD2NXPcRoSehWri7BrxfjaQTETNwzY3Ho5GQTWjFePJNF6UZrHmtvXWQKQcPU7eLWeUTNNuTwtpV",
  "key18": "AUbgfBu6XJ11VRQMK6EQGWsNUeWBGaSYdUBxpyUPptgYE6bwWdm88P28mDXa1aNAn6eBRDiETefY9S3NS6ukd4f",
  "key19": "4Ct2k6Wtp1LNxQvG7QoznaURL3gFWGDWW4uJqEFGD6fETxPzzcyKbEmFD52nMT9k8eAue5VSzfy8KXgGkTgAi3MK",
  "key20": "4rKge39CEwhNvRrkajAQSgz8LMnHnHWrVQ9bHYWZkgdAmZs6pikxiyC7acUmDZ15ARgMmtkZMQQdkVvNFU2CQEUJ",
  "key21": "24ymXpnca7uqewFuzaFAh5y2rdNAhCqk26rHSn9bWt5i48VnP6cPFFeNVMiSC4YssCRToohW9fpRuqF9QGRkp9Su",
  "key22": "3MzMu8uKnjWRh2j673RJSbMMGoufBE8AKQpDFPUTC9s5zoSt8HBR7NLG6V8UXAztxG8YJGttKfpe716niCo5jumB",
  "key23": "5hb9Bd8tC7qQZJ1o7HM9ETtfLqDVJkvYFmQDnz3WfB19Lo26Pz8mRjTMakibFrbGixXwRVXjqKRFMuUp55ZPqBZN",
  "key24": "3kZU1YYGLtZmawnDS6tE7mMMBKdsXp2JVJAUQY4SsXiX21oqp3WC6GixMspqHKWMLY9MmF7u7j3HfgBzCpmBrEba",
  "key25": "38g8i5dPiW8gwrYsXZ7YzkPRnp4nS64JP7zTYsLkuB8wemmtMqsT5EjohmWvhWeQ44ndBhV9bayxDasARoMLhqWB",
  "key26": "gYtvE6GK6PYrV72b9AanqTKT319euGMoFQe58on13pWkzTwmM9htJici51RXH7xXZaFtsA5YQLXaWGFAgskoKoR",
  "key27": "5RCYh1CQwd1UYNi15BLBeqEazNJ5iBpYCkhb3ZRxVW9gPFrJLwMcrE8RT2AipwSfP7N9Vm1ziAzQx3goZ86X2kK",
  "key28": "5UT2xnvxWxdLVemv8RbKe3fgiq49j9cSURY5gKBD396mFsHedLesRcLyysZy513hqzcVBXG9vMhRGkjJNMP8kYjb",
  "key29": "3x1bJdwQvcfFLCKsSzYVvSF5bZs7ivE2DpzVtCCXeW46pJRakVpubEvfyD2e7vZ6f7ambhzxPDeNT7BKk3hCDS6J",
  "key30": "3WZo3FuRsg2sMRKaadwq2YWyGPSttuxBt7zpmFDErCP214CGxjsSqoLpMfURKPnErj2ZV3shJjU6pndgE9PYGcyu",
  "key31": "i3bArC5KQufudoh3mZjVHTJSNLfpg3SUGoVAhgzD1mvxtJuModT1EoK3FyxRZXPFiFT1qJwvd1mjfxPyZ1X2MAm",
  "key32": "Y6nraMcdAzA7oPd91XtFEfMqzFz46b9ZCorrVxx2evXiv9PwSz1X8QsgMcipsRi3MGh5mvJQrDPjT47oEh25r3G",
  "key33": "3oHj4wX4U98oAAhfbtPdhHLMZY7arQheB5cphzgCiZ9mhwie8csHLRRTjNDoHD5Q6dxk1kqfqaRukYskMzB3iA93",
  "key34": "3jWPmHqb2bMnSeXndiKn8PvhhF49hfMxJeZz96WCgn7kUoZTBGbo7BXPw8qu6wXEDMCmf5hJkVzGMHsLPkffb8CM",
  "key35": "Kpjq4tEZjf9PArjsrAKegtQL3Zsfysjts3kxfDQRLYZP42bsSckMysvr6Fje6dcq36xeouBGyKD8ReYPWnK7hze",
  "key36": "3iykxLjUzZ39wZAhhKRFfCtmNUdkuDLFMqLAxRPKivxWtJMfLMU4C7K4i9G29aNKEBYHiJfog4fuuAv8a6DdwTNd",
  "key37": "2nkcqR124XYdbRdP6L6bNKXQZiVMEB4iMJgs4ge6Wmi1y6X66BzxpH5RQp8NP7juMdBwijCRwt3PgLT7eeaZCZbD",
  "key38": "nfQzhWM2N173K8BY3JBwc1vbE766ZCcPxAZCta2zQEB7aVKR1DKKaB2vk3u3bkDWdoMMUmYsaSG2EDxRPrzFtb8"
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
