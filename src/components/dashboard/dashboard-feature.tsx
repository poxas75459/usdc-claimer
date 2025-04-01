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
    "2aj3ECg1C88R17fSEfvJb2fKuYESALWpyLwMGF8sdgoAW8WQB82XEnCkSQTzFkpFXBdok2LLZYrHmu1PVnXJ3W1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24aVzNYCGUScaiKJAPZ6iVx4CUqjeAfL9WyhMKLcoUptidPd8TvZfzrcfH3Hhj8wVSpiXYTMuzfewg42EjS8APjo",
  "key1": "3xjyGTjYqn6Bewjo2TCce9XhvSdp7LA2xFbgMMc26xg7veQk5ru4EfP2BGVWUexxACV6MmteWwzaMjNRJ2dy7SJH",
  "key2": "2ZY3WnHmqdVC8PYVbFSZ7NM9cuUV48dnxmaHD59ytmEJWecvyUp4mfTaW798xxCxHn5JKVyJe5n5FMma58T63468",
  "key3": "2p91pX7nojU488Zq1V8PV3UL3vLkkyt3YH2c9HVNVBWF9jnJYA5SThAGTsovuJMumbJftijbwwArRqh6YxsLnpUo",
  "key4": "3B8iifNHJtrQEECgQEe2D2CXC8YCffXTxq9x85Jc9kFyrYbvfVrh5xHAvMWSRJ6hB5eWGL8PkPcp5nejR5Z4km7U",
  "key5": "3PhZwpHjK9g5tde47u6it2sSake6PuwFHoAqYQ6WPTtVUT1inpmHEbincCanqfr5NMhUXhpUuDW3SdmsDg4UyghE",
  "key6": "2Nxmq3vsqgyP2WvshRcB3Fj1s4F1NoxoDStkUL3waQqAHh5ws9Cw5A88uwpmTaazszqRGZ2uanc5bBGLi6xJhTAH",
  "key7": "3xqBVvN2t2XUJagMfJQMTqfe5j3rkk57AJhNUefzDvZr59aCLgYRimYEmShfrTnzzmQPb8UEFbUMwAzDpQEZLjDL",
  "key8": "2LkwEbLaM4ff4ZnoFMme1YEkZ1xX1ThuTzzC87hjBxnH95zKbLFmRpgrMzzwYeL6TTHezgujQUyq3aV348efyRnW",
  "key9": "nUBs6Eomj5Y2em7BbxmjWARqK57csqPJZ8BGDN2NZBk3fcB1wCyb7UxfiaGoTdR6pr69STCGjXmu1iNFqfYrHCy",
  "key10": "4H2GAKXMYmpBquexvCaTar341DwGc22B1A9YZCmgRimp57aaB4bHpoudn3pC4iFjqn7SkcBWHimrWETPcLv75o7G",
  "key11": "3g3XUxBjfgj6s7doL5QQCw6EUDPJtPcLd7BWqpNpLzWG91myZWYvWP9VNwyuvmvWbnPKU65WrN2Bm2me4W9dfPGy",
  "key12": "FfH8VrapNyycYmNVC5NyZ6FZuL7tRi9rVH87LBT4ZrnzdcEwqnBdXW4KzgKREmXVJsXroYkSjV9h9mpvVZd7Bnh",
  "key13": "2n6XoF5wscniTxMaWmZ4pBNkZSBW44wLLpRxU4XNnvNUVqRAvz9g4GUdbDAEwHDsqSjPbfF2YHAbEoSk3jdpePSv",
  "key14": "3x5QWpyHdCZDtG4mbdfnCLThTYEqJtFZJWcR9eAk6QLdzRngdqx3LweaNrCAnGwQkZsboK52rek69mW1M2po9kxm",
  "key15": "2xznCEXUWWkCq6Frp8DVVDfpycjVf8wW33jtpVAGW21tdDj9GLzgLGYfa94QVpZeuyCdhL1WFMq3LFK1mvVS7QD1",
  "key16": "349cU6DzPnxXZa1tqV8NzRdHx51tJfH3R96YHTsg2AoUvroo7z1mB2Bex9Ag6EyMdYgSgK2HguxwngBugS7U647Z",
  "key17": "3R92vAqPBkvMWiYzQUrxp9YWCRgiM3uopoRq4LuLbifLgvJiHrhp7jmNZGJBtwsMPcgdZ5XBhVoANGVCDLPuytfK",
  "key18": "4vUc9XtV8BHG9xarLg2hTk4UDUjhT2g1Ais2MBUgVPx7dZNzWsJxux4sjPzMcezAwqqw8XcbBVpDHCLbfxyMcxZM",
  "key19": "45CmbvDkQJ2U8ahsZWGvjx26nfRMBpyqPu6bjhWu2isH86FNqiqdAv3vLB6KCF8vXciG6PmBXvBeEs1Wo42BYKkm",
  "key20": "4AjvVkdv5eaaJKQWrMWAP5r7Xt7PXk9V7NaPdh2MNvs5RBVsVKDQmLasZyu4a2orTSmgW2dGBAHyQQSJ2aLZi9XP",
  "key21": "4993Wn6TUAWKzKmwz146oCFChkDtBPt1WuM7w1PAjn4aV7wFfcNrs2Q4VaQRBazVBo6YnEnEg4qJXmAgg4MCEm1S",
  "key22": "zU2nPSzuAF2fednk9JBfceXs38nyhFpMhiJ5rAQaWCdbYvJjoEWpVTFfXnsnSh4DWpVaKKZPhECvoy4oSXKMfwY",
  "key23": "5af6dJUbEYZQEFMB5ooYCfRYGxXYvzsHJrmSZDHtPKR91Le3bK2PuX3KpSP1FnrFUYrNCcN1cLPgdiJzdhMz2UDR",
  "key24": "2UbdWduZ9FxYmrC3AsjxGybp8K9y7J6S8rXbLnbg8wrUxcf1RXWcHiBrKTYgEqG6oBXhDg1ndcbJQRnynihUFrnA",
  "key25": "3EpBbJeSUYpwaArY5TMhmwiHV6StqfU6dmX9AfvCAKRwh4sRwB3u545e9jyJUrqN1tiAKVmP3Q5Z5tqBMxzqp6Uw",
  "key26": "46hUyKRrGoqzLuHpvBwjHo5twtDwPw6HmSGhkPDF1aLzz3SJRpuUXWKQqrSq5NLYtwndk9xJz3GysnUqeUbzKVVW",
  "key27": "4Ze8XczdyAqKNtHq5mcKg1iFkZpHh4NbsVDwr2ew83zFLML3qjY5CDF6rcCrc2G5bbbaVFs54Yw8zjxNp8opQBqM",
  "key28": "4DTUCW6WcTp12pbstx5ZzMBbFSwWpxb6iyhBw8jzh6avCyAG59KSXz6i3eyXF68GqkoFsaPtSuRBWsyMVNd46SKf",
  "key29": "5qWw5jM7fPUXRVfcKuVEK9mCmygx6FTcZQ53TMUs3hxktoL8ZZJK5RMAPDi6aU3ENoDcF6gLfChN4c4TatwDtjTh",
  "key30": "3eQt2durc7MSquP6HipBBN9iEdgRT1BY3HyVKAEAHUWUfJgRBRxyFwvBfu9UfycjQbxmUSwJHPXe6ResnsEAqPpB",
  "key31": "4SMqUvYCVFFWRUYy3E9n5LP7C6BVqjPXeufDeGE4an4xTzw5Z9JaKb3ZAAyNsw3n4LdDQmtkA59xBP8f6oDTy1UD",
  "key32": "2Ro73E7bZ28DBgKJekW51htRAeU3PC2VwevqWdyo6Cux6FgKhgStp8y8RX6fNNhQZKgwwLivV8qvYCbaf8s141rA",
  "key33": "56tf6hfwoAMdgD9LR7pZCZxYDdoHGAbCJg33pv8FHry14T52wf3BZp2A7pezwEZ58D3JTE4dEgqHnpPTsMNHKiDj",
  "key34": "tHV43g5acK4VVHtFhrsNG8NY9T1YFBWUP9GAciV9Rtg9pUcYWbqgZYpwFLomKstxy3jzEsJvRXpPShS8rnF7jGp",
  "key35": "4Dbb8ZPit88DVX2Rt1dY4nC1XCcZxVpeTFoyosXpXTwCuPeUba3972oRQ2M7gsgW9oBQqdSvyAT7eaq7Xm5yo55F"
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
