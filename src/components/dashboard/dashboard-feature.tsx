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
    "5eajpvNYMKBzWnnhRmE38HXKVamN9x18viwczYz9dN8enLBEt3Cp3RpoTwR5xoTQhEfDT9pRzQEzSsCbVDbs4k41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eo8ig98NjCdHhe1MW5pSgR6fqn1XaZpY4Yfj4foWQ9hS36vmexP8nBD2BvqmmTJwL3cUb4RFCSaVpczAm1PqoBD",
  "key1": "YgC1s4vEzFjPKGeRj9aFun4TosBuoJXkkmgbuqTCsdB7vuBBuCq7rNkRdZtZuUHZPdtsrRGrT7rh6sihYzmfjZa",
  "key2": "pJPonZj9KiqVn2JRsj8PvbHuG4L7Ghbh4PNwpekEfU9f9y4CmGkvG57MrKqWVa4ENMFE7qkXcpA6EXn9fXu4kS1",
  "key3": "okwqE5fz6HZnEjnBtnPJkDRZSFC7xNnqcqYJ17RXwV7HgA6YZAKBfj9MRmXGmSeCemixqKUwwhmvp8pLQB8VeJF",
  "key4": "4oCy4JeB7XbCHc8x1uhKuT2TBzA2LoT9VFqcTs2L6RKQL21wbCyAuW2ybDue76qbtyu7S3yMp2b8tsPaq8XRqkQw",
  "key5": "3Zgp3jszw3ST2Yrb1VupKMwMpkJ75xiXJydUwu3WUPkML1N4tzSA5WsN1gmbW8ZBrgfzsvn2kU4158VYJV9NUK4J",
  "key6": "3C4eNNUpF6D8t3VB2FXaGTsDuQ3TJ1RT2KwU5S9JE4EZKkD1njNUasvt2QiyjCoEq6QCLSXtAxzpNbwF39e7We4k",
  "key7": "5ghHx2ZtxYDJdtWD43TFCHXDNGLoziDkAVssBEj5zDwWGwryjpwGfZHdgr6YH9rQRTbXKMT3ncD3hN7CV8ncRByH",
  "key8": "4BawqbSGzrHvXkLa7GHw8WwaxiQr2zGVgBBa63JiRrUYj5xy1KbFqRnDsywQNSj2dfeRKendFKdmdGFmPbZqWv2p",
  "key9": "5L9yZKagnEUtSkKvu21WdDqiME2woeMcCiJhxPDbxwTiAt2eXSiHsZjgMQU2ZbFsWCtu9WPS5YjLXChFu9yLvRD7",
  "key10": "3JQEL3CM4Du4TphKAWWqoFxPxSYoz89k4WWUhXsczziHRQZ3YDLG1zZscy5VnU5TsRdkUovAo49Qi9EBzyagFypx",
  "key11": "4RJK9G5jTHSSjiyqcSHrtTnTG1Hhz2hNSjYC6Pm3zPu9FqiH8Qs95GEgLqXzwaEjgfJ5Cx1hg2anZHf295whq9xw",
  "key12": "CcGsosQjtAZKZZhYSiyc9TmYQVXBG1Gvr1jEdNdDkFQV99MAbekq61PXwpWAtFtPtRbnu3hZGZjC7ZLR7r89LQg",
  "key13": "3HzamiMgvC1XZsnjF3VYj3UwRbVPhLC5HqYgxR3jm6xUVgFtaQ4fDRNA49Z9yRSPvy7tRNq7xzR5bbNXGc6bpq97",
  "key14": "4bdRs9yksrJhvbirorfs3Yf1RcuiDY5dBnKT7tyR8vckiNmpQazzJtVy9YZd3QSZRPd7WPB2iJ1vcK4epLSPFr2h",
  "key15": "5D86CVNLFHqdbuZsGaPfazVPejR9MxctKfKaL57GXYdAwSWUnn9pGGueK3DzEx5VRyJCcNks59oppr4yFPyAMUrr",
  "key16": "SWTttFyMrMFF9zaZTXGEi1ToB6zykehtquQ43aCiinaLWuAfL1gYMHmeaJmXKWWq3NWKVF66MucmyGXXusPtxYd",
  "key17": "4Bx5qWkCyWRaWMc9igkhtCvYvgz6U23YC32BNkc7vriYN6vtsAgzCFGa2JS9X5FLKRSJT5iLNdwBxaa2NpXbH1tK",
  "key18": "3fSsGK7wgSsgvHse8FeEJDAZfycUKuBgnoFqwQgVhzBJRgun9Wzte6uwjjDNJuw9beTNNKQBx1NbcVBaQPq1X8Fi",
  "key19": "YiVfSyJMn2pAqbh6iEHikiWt5ABfGitHZkeYrvUPUTjGv7T8uZtjK5k7pWtMxyJumDtEoSpUCw5ehxH8He9GcjQ",
  "key20": "2zVmv7K3S5VxQe84prEPdFCBjqwT7nfJVdSMW9DBfWymqPDZbUrzrcf2H9bUF2QqzrgJTaXAUq1BoycGHdmepfCh",
  "key21": "vnHU4hufX31KyTSGKLKpFf7f12uzbGbGP3e2oNch8Kqv248J5zzcF2gdcvWz9tV2a1NWYbfmtp9uD1JsLid1jd1",
  "key22": "oB66ktiYXHCDodcVPB5cFz5pZAV4q6DMfdCBz9fZPKirbzRH5r8FtaYyUpRvWUN8SiReK3YBUJQYQkGxgSEwNkn",
  "key23": "4zFciUnLZSBpRbZSKR3RGbe27zGhwQAQE8EtoHsSLizeZWJZTtzwGmSU1ztrMp6FitW7BVXEi5ViyR1xADjH3g5n",
  "key24": "FEpm2DZHbHWGTj38Qb8CoraDiHGj4RA5w4qpSdrVVGM6hqwwdPiSYhnJdmH24qyJ6zH9HkmxdoognQzneyosMDS",
  "key25": "3AEJBrwFzN78SeHvU6BBRseKV5ynjZ5pMsXepXHaDHG4Vyj3vdnuQPmqXY2r6DA512AtQ7JtW779NJqGcDhjLs2q",
  "key26": "whs5QEgZgSjYw1DsJz6J3ibaDxv81htT7ortpsEpjR8Gz7HszzysJujtxxkgHZgHjtYDoCsxw19xqNqeqth5zTR",
  "key27": "4YTem2EJMtsoNA9hG5JjudVSmwVGxyZr5ihnBWhFUc4sP1U7AbBJwy428rwK5gZxou4xELyE9Xo6sBXyyaJUzjs1",
  "key28": "DTbj9G3Tei7PWxkU2N6YhbfRU8ro5Taw73XrgF8EbZF6tyMbbJNz62etoq2RXoP3PN6kZysX5tMbUymhEMNjmVe"
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
