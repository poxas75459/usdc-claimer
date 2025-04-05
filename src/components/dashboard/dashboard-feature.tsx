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
    "4ia3p5YsYthrvKTj8HXkm9AcJLZh2TNuwdA5kTqu2V3AAGeV3jrZt83akq1pJUXDf9BnNkeErqfLRKXbBv7LGypo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ScCJpkKqsUFp6wC6RBbKvin8hP1VVxvGRGqtsGp2Q7YFNreZKuKXNhnZxH8dximZcEGReTcJ5kmioMvwQ3y3SZH",
  "key1": "43WNCduVSUDYeawe7MTuaaF7Ve6yAnJUVbaL9VyAfsY27SJadMeZRUdzebDwUxnb3DmNHRnKYyAayCF9maDybg4E",
  "key2": "2HXABbsLNf39dnmFwoYHqSYEnzt9DevVLTQoehWsyNp6gbp1859KzYXF2ugczEfyT2L6P6aY5CMvcBDrqdtP33Di",
  "key3": "ZAsP2baxg12hTCNAZbWRkb8txntKhCKtBgU6DUMbDryMpF2tD9jhNrNdCJQuHuzREptMxt3pVL7LwrjDF8K75vQ",
  "key4": "25ZFE8c618VWzy9MzseH2mT9gsH1gr6k9P6pNQT9xNgB4KC9u4Z6gxpnPXj873oWnS9daA5oDj6mCM8SNPfQ17iY",
  "key5": "5Z4sW6CpPpBJqjp85SPtYsqygMAa1ovfBgMam3m1AZe8jpQTqJdHZ997qFZvW2XKyszMbRsZNi4bJMHYr2WP264w",
  "key6": "4uS3dVzLDKoJsiKNV7SJwKpbf4RWLJXke14SpNHnaGiaXaEKUxatT8tDbYxCD8C3DvgbV5c5orquom6VxK9wgeW2",
  "key7": "5bZtM19eguZtEBz6nhVjZ7eS1ywVwJBqJdG2gMSxb27brUdNvRpkiEWe27FdPYZxsj9CzG6JHJEPhr9p8LgWuosW",
  "key8": "2Qm8cFuQcZtxUK4hnrmdJG6VGBpfjiYHurxE32tJ4cF93P53C6GZu9FLGSVAm7FbGrDz3eSGis5YuwtusESc1YPi",
  "key9": "4zDSDsC2MC5JpKH8odNtnPDkT88YyT4RtpfEMM3H1ioSm2GuRbfxFCDTbGn14nLMoTzdix56aNAKqefKaZqEgpQc",
  "key10": "29A7QNptTjxYPL87WKSF8RfbuaTz4odJHcuse4Q4tFMT4EaifLD4Pq5ZyFhDZwPQtgdKavmZaEHGqCf8w4KUr4Bm",
  "key11": "3MEHbBsL6ZFxG7cPhJQ4hatuMkFw4uvRBHVevcoeLvLL61q47aLqVEowCPqpUN812DHJeguaA2RmLoiNyBRF2w2S",
  "key12": "3aJqqFnu8tvtDhbhBSH5fsLeqBmrA4dfNW7ZPLnQ1tYefJYsToq4HKuVPYhgrq6ajX9sd9VHAL2mddp9zgG1Bh7e",
  "key13": "26kocnC8WXrHMcAWrRvyuw6d3Zz7Rrjyj7wau5t7prwBNCCCpfGi3uYFsnhD9ZXDWyTgHwZfZhHkUDAQ5o1bVdqo",
  "key14": "5rsBeH9fVf48EwUgoRQLjLuC4h2jJYiMTwXM1YAsL4gVkm8x38YabtGhNFeCjAQ8HxpHwuerc5WcgumhM7vbsfN6",
  "key15": "43wyb5xjoq58ZvsZxr4PrRgQQNiyzCte3KRmsxM8u4LZrQhpfmbcL7DsUjDmcCagh7gaRmeQVcux65CfCGpoTw7k",
  "key16": "tneAdbdqoxs6YyXNjCrgzQkN9gYX1yzWV6LxtKgGBbpukVyGJWhtEi423jRKp2mE7CHEmGq14cRiGMg7HQKdMY3",
  "key17": "2ZyVjX5yrGeRG9995CWQU4BdPVxav3QMRoVSd5RrX5AGC2gpZYTeXaiJkhmb8W81BqsXhowk1NSoPytTRk4B9TPX",
  "key18": "2Xdk2xMeo77nemFguUR9ioJDEjibk1ow2BdSWWTDCLvcYaSsosFZTEVZuU53YvpphxpgBgTCm4tyBvapWE7JaqST",
  "key19": "2dJKsKQ7ZDy7SEF46YG7i6DxVxLao2RrWZ6gnH3srer11g4HgaSFHXxETg8BWXEFLGy3FVEkeTHAaCvTgKcnsBdn",
  "key20": "Y5VJdPmjtmhRxR5vBi7gddQJ1cTokyePJuvYLvYLex7XLStkv6t8qu4crbqeh4pHjrFEumc7WC4vNcKZAv5QzBp",
  "key21": "3Bxdj1EN3YZMXxSkYD1vZ8GdCa1m7K2EC8MqTvozodsJtGHmVzJJ2MS239iebvpH3kj7V5BetxTdSsbbhcwn93LK",
  "key22": "5KsQYD9vbbuTaWoMh3N3TBwdxEfC6br3LbN3hCBHmxoCaMar5UdPa4Xuxn7kciW7m5wQdCKLhxtnsjZtiFRKphPh",
  "key23": "iCnxwwGd5HnbjSHJoRBYHCRhQfLhcWKcVRR7X6mM3kuhtbmSgt4JTS4Lbxk32WygoAi7wigQKuBnn1YiaeUUFv3",
  "key24": "4NcbjDJYbr9KhGExusTKmnjos6jYohQUzp7dwqVj2a4TSuCahDHQgWC2MRwfraXJBfo4WxsWTo385kYQw19GAfXf",
  "key25": "2hCdgA9aonBu3yftrpmCsk1xaU589P6B7VYJpbDZNxWySMp9iF3CSoueGJqeurqJu6fGnETcPaxCXZhaad5qbYd2",
  "key26": "4akdNejRqajC9gFANi4U5VyRaRj2arD9o5n7dwjhksupjYWP6baWWxwvr6L6uyuSsKzUP79qcMMkZjorWdC2P6Td",
  "key27": "4YtowTYAsbn2pyzav3GifuTura5tVDDCh7FjE4KVAk195iCKyawHZh2NEPbHYctXiLpb9BgAKsDatt5SGrBR6viS"
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
