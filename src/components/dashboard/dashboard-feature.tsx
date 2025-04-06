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
    "GBM8ARTDHzuMAj8KQSQJnCT5qz5QKg6oRCkva59eWkW4iJwzLJmr7BRV16rpCaTyPaKwZFArKbosseK8mYXsMC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cmuKKceSa1AT2AZqa4iBNvprxv6T6Qnqg8G264cZ5G5nVnrUsgJqeHuKgxKJA3rqunRsLxtc2yQWrMe6VvEdg5Y",
  "key1": "WPXNnFAVktMKSycLC2LrmXLhrRUxfBFfz4n9Gxs2i2Q9emWY3kEaNhS86LsUigBmbC6zxC1JWQYuwkWsa2Ddf6v",
  "key2": "4tyFJ242Yudzu5A8ndyU5oVLp2FmZFhKa115wy8g7iYTjxj1cRSRdafnrwwJqKcyVpoTHNAVWQYjbRGcpLSfcZM4",
  "key3": "5CRLtBJiiBxFzpKJ8veLBdXWZdN4ycHL6dBreKNP4R3F858Zpzb8a9zrRbPFmu2xWoVppkaNp7ubAdrQ7EUSViDp",
  "key4": "3pW96wmpzDyp7466SC4zLgxa81FfvUxHLJcHimeXsNaY6xGDMu84YAYVQ49FT8wXVNJS3Bynkv6PTfwvfML2fbU7",
  "key5": "5wuFHheJYGwRMrtAXbC4DCpjUzznoTwq5rM7JwKDrUPHpPQ3RWzEV4zBwULMYQL7Dd1PcbD7MiYgmr8gbKFypHBM",
  "key6": "4anhqauDXh2U6xXybMNTjw5kYHter24XC6voeaKV3EaefgWgtCe4RT8b9VP5YFd2EfjRoNGiruLSQHJ1hYteVhLu",
  "key7": "3MZdPjmdLFcrC5vfdpKAfrYTT6YcLmJeJjSefVNy9FsCsT2R9jGTSc6g6591uxdJUuXHFNC5nTeM2wmU6QLR77xf",
  "key8": "k2gKoEoJj4qZoN7a2ffqg5nrZLRPFq83hTJSVFUFLYWvWRUaTeReHWCE1rSB2vS218SmTmYm4kwED8Att61AAWS",
  "key9": "57MqEVUcjVNVnU3gsAvP6AFEyAMJsLsbbrTxnpHZzTe2BCvBjTtKZyAB9vwEDw5RPtbDhrhTv7CBRoaBkMPdPL7h",
  "key10": "tHzvcq6Py3KNXe3wvsZGMsv9G6KNHv7yPbMTrBRRLUPSC4NVA46wn3iz8LbcGBTxTLTRkNaGFsswb4oaYKCRsDG",
  "key11": "5Q5mphi296fEFt5fZT2rrdghokrd8Ke3tzR56y3GHfcKLdtdupqxpturjxjymsfEm3hxdhwF94cLjBqGVuJ6bJC2",
  "key12": "34iBrVgDEYh3Yxq8ufAAAmH3v7kEacrEuBiay8ieuBySpxyTTE17pgiyaq7ZJp1HGrKq8mcYMDe9ToigwyoNyRqP",
  "key13": "5wpVWLi712UbFRAcDXA31K7XWsrKPF5pzed9RyDotunqT3cPD8G69kkkcQcJzLd9vC2GPuGatJKToKo89bKUcaM4",
  "key14": "xqarqPg1XfZb21txXQshAXp1Z7mYN8VnaLg8J4sv3w1doNPtgtxdhYJa7mgioD2ABT7G9yi9Bz76NxLTKhscnJm",
  "key15": "3kkibjfGPURJQJiaHB4YL6Avze6PEwq6bTEiNaFYhyTqKmLwZkmbc6Fg1Qg24aLZk9hnBk1Rf9iUChhTyQJLTi8E",
  "key16": "r26dZMbkuCFgiBNEPMw12pCJoD6mCX4XHqemKEU5jXaTMyJj6EhMCHMN82D96vPmLfwVAMgCato7JiPn8juZEA9",
  "key17": "4SaEQbaTmCpFk4ZWY88HkKFyfGoWmH8A6XG2RidPvbFMVERJFW1z2y7JhXfYKhF8XPJozLV4npQ6nwr5hTRmJ8rB",
  "key18": "GCWWAe5juZMxLK3XxwGB3q6yy4acmXjx3edYiePXr6d49ed9xx8EufuKFN3dsNciUVKVBPuViPRcVvQJz1DcJdF",
  "key19": "4HxVteSWxppru4L7MkxrpyS7FD5aLaGixt7FYLaJnPV62QmvG4fZjeWJ6TKgica6wpRm9wtKZEhH1RKr9CHc8V5c",
  "key20": "3ZXSN4FcPxaNfNVHDskL4uQheUEPZXXvtQDJsfdi268PPww9AxnarWpgKCizxcxaZe8Eh1pcq59eoqBxP6B2KeBR",
  "key21": "5eTkvwX37HNGCbXXnT14UxvMC8yJWbwwcWQ7e5p4xqKmnMDqvdTp5rgyEuT1TNAHgrCcqTfq4tfLJ2RWMzTHwEgt",
  "key22": "L3VGkLek9vFuWogjW2RzGd9Mpgtwq2uhKybypibvBpAnLENrPuR8sYCKVFcDDDwHDhyPogDEVkANxqWoKrXMJhA",
  "key23": "acNCbNYY8M4RcayY5ba621sck4tn9y2f9ohMmrA3RX4pxhm6QoCvnY35YaviUJGdYXWbSYH2FsrhJdfQzs9TEzU",
  "key24": "gRrddru2RNrH6FfADQwQpNC5JLzmA6v7gj7R1bfFB7Vj6r3RySR7ggLbWvCy2Y1VjgsrmZ2txPEsA4M36ZkQfNz",
  "key25": "3fxLuia7Mt1cZkmZuUoW3ksQcRdhyGNLhvE8HxRGNApVijJ3CTcEJpGhz2iVPZT9fzdLZgecYdbHVUxJAEnrryWh",
  "key26": "2U2oDvakjdkzVinVE2d1JKSB5tph7kXvH3g889Wvp3PqW1nuVFpReBVDc3JcKLA3kBkEYgJVxVPJbTDGjSnGMvy7",
  "key27": "26Pk4ZrwZscid2tt1bEu5meCUhzfN3TyVQXKRcRKgVczFhsW9jUXTAbjWjBu5WTDpPc1VSDURBC8AKCffrFDBDp5",
  "key28": "3wysYSNbA3FYQ3KWTD7cEr1KkAs2EKn5VQAPxq8zZtQ97Shtpgoq9c3Rdouo7NnZQsMAWk9NyiQL5QT6KdbzuKAC",
  "key29": "2r6CgZU3TcWRr2akdUh9Pk3HdgHdVongZCnngfRqnpjet1dSWCrPcQ72ZeSZtSi2x3uoGuNHc6kJd6FkT7BUqrbC",
  "key30": "5DgQ2KKa22Lhaw5LmDGE2JnVnuBdvCFxwr9idsuP4pGfi94N4QZf8ZrpRfCj7qeKhcpRNN33Rdp36DGiNkHUPZqx",
  "key31": "5C8kzvYJ51FfHKvcBaKN8VWtTG2ZBFY2cNN18DnsSHew8qvVrweWNUpA5YFovoa4ubk6LThtQnjZyjwDshmBSZA",
  "key32": "3gJUZb414ijM5wHLrpHisEKp4ow126mr5wXsQdLxLafjsXGR4dEwUjv1McRup65beM6sswjyaPmM2gorVLfcnbHg",
  "key33": "479AvrxkGLEwoSGPNYhBXgurX6UjeLXahsQRWJom88wtxjndKs3WNWfMtmw4don2jXGmyEFwmiwP5kYFgQLgjH4j",
  "key34": "5JRc5NDWQdQksXzU8taXqu4C9E9LktUTvZYXcscLTRwtHsNEpqkEeoTfCe9HAWcz5iAgUBxAVHALZiecp2GCkrv9",
  "key35": "3o5Dc1Dz55WfmCqqdLtUSF72qzXq1LN4FU1HTKM5vJcryANXg56Qq25UiMedA6dYtngtEddU4hC42fcF3qRg6dNR",
  "key36": "8BRUof1B1z6eEr2sn22QKe48XCNhnqVJ6d9pRvZkKhCvGw2xsrtQZyEeDfruA1pW8n3WMmsZVPMqyhLk1UaSVne",
  "key37": "43odXNYducYbXs6x5GpYLbYFXfenNag2rHRoWbCnmnyqUyxvaWQaZyC86BqY53P3Xtjcor1CGnvryTJwMnszcz5c",
  "key38": "4T4Tf7zoVS7byVoN5KTK5bYWNFzN8HwbnrCwcL4keRkq4Waj4S5jkceaXEj3ePFEzRmzU9RAKfNZyWxXvLtABky9",
  "key39": "qafDo6ecCPJ5AqLDHVULwR7YwhgdX6WytKzuoBLTjKaEp1hm2SxA6FpQd8vgE31nv5G4puv5KhcCMg7oo3JCv6k",
  "key40": "4YKkZNEzKec6TPZhvgZKVJRJSCW5RHszKUSN1FYKWndjhsBSpGJ14gd2XwbAYrqTxEV8dNERPHR7TniP4i1fbyZ3",
  "key41": "21JPiQkVWacZoVZ6khSVa8x4oF8cphjxwa3EkPzcPiKZxGCbVFABPRYmhL1TD42ZAHS7itBvuuqhUhaZAyAumQAs",
  "key42": "4Kx4VMQzK6qsQobpGNFm5z3fFXQymnw7c4GQ9dc72QF1gg9UpiyqEoPHphqPMCof4MPBPe8789PYDWfygaAYWfGS",
  "key43": "29yukrtBN5sJauUPdpVDsTcJsLhtcQowufok288PTDeUa5VL4bejuTQzsQXsKrkWQ4517Ds6juDgtoLAmjenmr3j"
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
