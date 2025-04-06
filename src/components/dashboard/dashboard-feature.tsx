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
    "48r25st342TCRPUHQ8AWoHXLQxWyf6ws6NbbngnZw5YNPNeekusFBAnjE9dWriTthJYqVaqUG6CWkFh4neWbrkNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZubCtGSTopruPtuYzNz7vrKcVgeVtPsWvBny2h59LtFfo4VmkT5ehGEtyWMEtmcZqD5Ug7zHBMvkPehV3CfZnrT",
  "key1": "5ogbSCveFfg28Nbwrq5TxPkM8MB9CYLTQRkbZ6wYYczJXkfXht86BUCAdGLDph4PRj32fCVQRAiPtYLs62jh4kAJ",
  "key2": "5wg5Hk6z4ddnTk71efECtgWYbHvGXi4Vs1hncehXfDxQzjsGvAsjU66zvDXjtKPUqbn1S33sNqAEVZtohaHAkxNd",
  "key3": "2sE6D75U9JAF1BwQMbNitmNNYdMnRiHLaoBhPueMM3FUz5TeaPnPBfCx4VmF6ofTqSpumcVDa7wEtnDDoNTCQeZV",
  "key4": "4gNn4FMua8aajzXFUc94FYsT16biDVz4yzGVbcLTyCBYG72zrDiQ1PW23rdhnAtTHiBY5Ci5KmoUUDzsrTLBCfZp",
  "key5": "35fmB1R5FyPXeuekQJnLq2c6LgFixdqxWfkXsL9EEfLBVDcXBzPYWbRsVz9agj6AUwAbZLgG2zoqXSnUC9cVRDvt",
  "key6": "J6x5qugkacvTpAR9GzKgquqQtBhcNK9N8NAEvt61h9zd8VLKXqCRYqHp74H51GMh1YoC226KwNvz6foSEyQcsFb",
  "key7": "4uTPQvBM3sL7UuFAeVrrg6bRmcWwDJ82D3yM2B8Dot8LCTmrYjDt4P4duNVkUwh3Wp3nC9Nyot3x2LC24PnSoQ1T",
  "key8": "2e37dChd5FA1215FESFVjSgWyNgs4LPo2uXMDbabApszcnUT2U5weoCg6Rxzzwoc43QBFkdXu42dJEsHSaFpuQ9F",
  "key9": "2nXQQyYXVoPiUdAG62aQJ95G9LFfVD69LAyKyBNyFYSWUnXuCFhQEd35fx6GDT1GZrK4RpvbomnmWnZrg9rPMXJ",
  "key10": "HfUHpGetknPwK74QXZYYD1MrCZkgVLehSdgkyBTHTgoGHt51YAQJ1K1KCADkhT2GHQ6Xae4VvqvPF2xDLSBP4TA",
  "key11": "5Y8xgoKevERF2hBkkWHXXHNAmbAwumi168X4bXoZBJmHbH6yq5ycveP6WqbcKpXuRDWY99RPg3fjc8n9cb8Divax",
  "key12": "21jCAQd3nsdrnDW2nwm5TBqijJ6iQzxEYf5RXbKFbjVHnBXiA31NmUEDX4ERZELq1ZcYuhNKpxMv2m5NGByTs9aQ",
  "key13": "2jdNjr8kMY1FAi8zHB8mUMPPYyRanQoNP2PnoCAXim9BnpUexgcNp41hLRAGirsr91Mu386fdFTVNPbBMdvC2Ls1",
  "key14": "2mrfDK6Txu3hcLzxej79WckNuKx5iRbuov9zhJ8uFmmZamSNChDqJtPKXxWE297kYDeHAYeuVeUNzSxdnUhP2D9i",
  "key15": "522zmAhMTsWjoH6nAN4GKX9DgFwoVNkopiYerofkXMgkPQ71YT4xVzp3bgGwGzXCiPn65xrRPTsiqGrhZbA5UBBd",
  "key16": "27uhYg7ihomgZx3XbVYVner1EYuHH7K13fyHyL9NgArT1QujZuymqqVpRQwhiNCqF59AwNHi3z7W9GhUYgtXZ2aF",
  "key17": "5KCZESjjtY6bSifk9Ss1g2JYotjUXHoaFoEGJk3mDpvWcegY8Pc7KjV6hG7YJVdj8s2dJotZtXjoKKsqtF3qDqEk",
  "key18": "3uD877VUL2KvQyia8d9D846uyKtx7Cjkw7S4s5gtGJDs2CsW7pVT5xS6brkD8RC5CCr1iMsj7m19dBgePb3w4tvg",
  "key19": "6WFN4GpKGwEquXvhYjJLTaZvzxgjNzzcc4fTxRmjNgc8hMwePTQKMK2sJ6hXvnEAQJQzGYuQwFmD2rQy8GtHAeE",
  "key20": "z8yexRiY1923xZUij3MzzGdnYbzk5wNRVU6oucmSDnhznxBoiApVPs38dsGEJwMU1LfWmppJqceKhduc23qJDG8",
  "key21": "2oTtkH4Xh9jhjv8nY9npQqqX7AA9xE5hoxQbVahLtdHWBYAtYm2fkVr9aL7WPUERz87m3eA2v4Kt2MB2EZwTtz2J",
  "key22": "4WeWYqhzLtw3qeLmeAucNQxYMZYVwHYxLijZr7UufjXbdiPVx9NtDHXN1YHy3qfyuAhXGC5iBYaN9gEspDATxhqY",
  "key23": "5vbvPPXBLZxQqMyniX7tkFGHbfEpZeCCJ6iJHbHYr1mHMgPZafsX8uMjSfnygbGurCyA6LNncKZSv1xkXC5Emi9m",
  "key24": "dYaHWosH637VSC89K5dCyHEL3bgFSjkAEMdAfkt6LVNQ8xUhGd2bZX86fX5xM1WR4TNkSsXAW6v3Q6TRVDLTLkZ",
  "key25": "274WXfs5Uq1QodRkLsv3Uy5mVhS1xmBJZduxRZtanS2himudjNqRi1ArWA6rXZqMCRJcbSPNmMVGgwsaQsiZDf67",
  "key26": "bWcZkf48Cit6gxP4pHPPDQzABBKbbBAAQXbdgRe8NX5xGbM4jrBMBmMs9M3EqMfFyP8DtW8P7gbtdt8QaZGAkp2",
  "key27": "34dFi8yGLisFtv88fEp7LaB4cSFCvqvWj5jkQx8sj6vnDjMYXmz1bfs4ARaZxTHBbpBRdzZtUrjWEfTMhdQsoExo",
  "key28": "2CK3xTzFuXnxYEK189RW5wUFj4kFnKNpektZG7ME8SjqgmyUeVf2pLGTiWVLhactNyLAwkcJpQbG7GeMBZQfogaL",
  "key29": "5GS4eLz5AvZ8EzXqUqDHsRtSLa8tksiPz2L3npAB1pq1CwsoKackAJFQUEUnd5UQJLbWaBfqcnjXMDLYxnbyPhkB",
  "key30": "2ZBdhbZ7X5hYpMiwNd4ENr9SZGsSrkMb5Npg7a9P1AVyHhZzqwMxaSTDbLk4DyMe7S7PJjnj9GciLeonodn87TMQ",
  "key31": "4cPQQrkVjing9kKtjMXYUYLRVKMARxhUvewYhiNskPt9EZAKoPSfcPJ6s1un2MDmTpz16u5BPJCsQZCAjrVyrQ3u",
  "key32": "VRvQ6sadL7BcsXzNirvh6Kx7Kw3et3w5Trfq5ar5z6LP2F5fb2PoKNpbgEKj8wxN448MQG4JYHWSo9yEQqe4gnr",
  "key33": "4tD8c4zcFP7DdE2Qa7sfxpADsZ3jL9ec1v7xCigwda3hwcZ2pmBDWLhAKF1AFdDnBTJHpo9r5khwXYMrCmkr7YiL",
  "key34": "3WstEkwkUK5zm2bvFAGFChAGn6ajQZxAuzbZZTfqRutwUfqsxCWbqAyJA2EqvHLGPoXp6akpi2w2uXG5rwLywRir",
  "key35": "U6q8pJGu87rtbermdVSgC1QYjeVBjWKjpvcpcjdT5zmcAZvX4sNaDXHWhiYwuEeaBAt6pRjiCfn6o8EJay19ggT",
  "key36": "2J6RmVqvVuJ7QodxCXsZnrxBiTwxXWMKeX8TbyPu6MwVaAQbLUuUZ9yKk2E79s9pisjZHe7Fxvr1KSB1RWcfa2EF",
  "key37": "5v3b5HQs6QkCtyMGXLbE1js9W1c4EWzpbBYv8HHDPaoGX1RVX2N9Xfz7CbEarvAmXRQ3gJrYdrs9BV7jys3ue2tw",
  "key38": "Ms3K6EX3bdXfdqYZVGVxzwS3v27VM9N2HP3YFcMX1s5tEcQfML8Sp3a7NDdQfAxSx9xxw52bEsg4upaiKUJy7c2"
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
