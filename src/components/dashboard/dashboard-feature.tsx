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
    "2zyqXgXumj8RiChCDX8Mos6Ck4Y2QZDXXtvrMKKKF255QnGtXPEvr5MAdXKuiNidDo7oFgE12eMxBcQ8h2SLektG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDxv9nr4o8ufyzeuWZQrDhkFZYqHz3J8Ez2DYqvkSQ8ZKhXhsk3VV1gyhjFpB4fWkcbn4QJr3e5jvB9a3xmmEcn",
  "key1": "2aMb6fCHKz97VXLBBL8N1w3Q1sF5kN43rzJWc9bPZsuK7bfjz9vLcpzeBPAjwTJLEeMX5JcJ7inubVbFUr9pQCPF",
  "key2": "2jt7YgavSaHcmGq5sHceMP7n3PGMFn342u3xKeqUDdVLvTWWeLe8GmVUjGAWEnHbAuE4b9RnMNonGcgQguiqoaAB",
  "key3": "31YwZsHS8xS21emrWtPHyQCP2ENj3oPGaiuRp7SYpApkNJbZioctx7dHP8iR3su2z5GWTVtfKdWgx1KmmkTguh9U",
  "key4": "4BHmKtubfA652Y9PcFnw5JQ1Vkb7kUcLV8eVr5g72si9PyH7sWaCf8fQhiD6EAccUvHoFCx1yMGZjb1devxgCZao",
  "key5": "3QgqHokfCSmxF5mvmbRaUd6qakrq3MMQn4LjAijmujKP6r21yVBDVswrgQovcZyShtzqVDuVHfwSLBCNDQxnS8eS",
  "key6": "32J2cjAb5S3D1ppccFwjaNsqZKPwGEkgj3hk5fqQoncTfs8atYWDPSKZwb9oujyfoA47jmh4XSw9RoSjDfHTBVmc",
  "key7": "2YSePkKBtauKau5FSCkLF4fpD6swmJba8L8y8iYGkSmtRpGU49uYu97oHY37rBxuoGeth5J5dwWzbsT7juxPA4Wn",
  "key8": "31MAnC6tJgTuW4xipLBhjfxnVwqWA4E72vZKPUqdH72Xw9iifeMhsqN52RzsEX4kYsLtafaSJQB6nTLRQ4Ct6bVN",
  "key9": "65D5yqWtmXF7igSs92dcDXQAwTLcqr1WtgAtnvvDJyoxonstmPYacJ7p1kWatTnzF65my3f8gZ1BeaFspAkp6H25",
  "key10": "62fQuPkTBiKyRs56h6Xs9AinYDULtaBQ2zxJfiMeutteCbWyui8wcFqVd3xL7jAkXGw6MXEa6UofRSri4kgADzJ8",
  "key11": "5M9tQhRcyMvbwoFYSZWKtmEiXJwYuTCXuMmx5kku7sjk8WB7zmPypVxXUvqPu1Cy1Rti2sMdmhhgrTsiumRuiFpL",
  "key12": "4H3WpUmjQkZUu1P3AxmjYxss1Z9LZjaTzMisDkN63Aa8apQr7wBn2ywLxK7RT3trUhAQFa8jDUad4trFZRnmrUQC",
  "key13": "4bFyYvwGPbqZJiiJBj2gCSAE9gP15sKoNe79m4pvKWjtTFkte56RYekusPta2ybL6zvTPxGr5DGRpeVGFk7Wy1bt",
  "key14": "5Ydsbrbqf3xTtLpBArHbqUb9qGGajELyTuQZwmc4J5QrXuoC7aHC5SjKieqVgozKQajAewtYze8zUKqVQyt2WTEv",
  "key15": "ryTjLdNmFVMG8uNTiZkPzEmKqmjFFkJ2gNefdDuFiy7QkqbiPzLGD8QLq8U73YKFhL9RUVzXZiLXhLQUHSpvXFc",
  "key16": "rijbqPR2GgdQVrQLzCkwhPyPhinPqCxHemiZmgk3fNaA64w8iibpFuZCoNKg6iHMPJt3pTcPic3QCxTYsXQFGE1",
  "key17": "317v9saXY6EUmFrDYKJuPQiFCDPTxdgu1wZz7KzHFy6aa4i8nJ9To8vrvFHSdZaEYVL3AdtCQW1xVokgMgMuL9kR",
  "key18": "5hy6Zh5C4D3yXfb4ntj1nzZ8CWWFysjSNC9uBCAoQh9TnvHBAjCKkKGnoz9EGHTnFEksoApvkDoRnhuhLzbfM6fN",
  "key19": "QVLmG2QJYKXa1Qzj1hmxf4t6M1LAfFTU4w1amzJWy4nkR87NtJt29aQUbLFFveEVkc8Yj8VtVfFRVQgMcTP4Cas",
  "key20": "4vVdr3ePH6kiFH5RC8ZBijDhJFAVir4uaPspLcM3qRxu49kD7pbQeBynk8mfF3GTPB2A8LD5YSzhjFf8tL1zTrQG",
  "key21": "2wizYDfobUeNkdsSwoDVt26tY2iWkquMXCdPLjWi7EEZ57UTVEy3tShEMU1K4jKDx2dNYKxjmxtzBEUCNtajod3S",
  "key22": "4W67DDLgzVsvBzvn6u5p2t8bpVHGTBxvdg7ui6idUEVFbfexDdHH9hJEBZ3y8Ta34Y9gyRVaTRQwcub3AYmrrgYf",
  "key23": "3mWQDwCvnbo7kbekQFKHgPFALnaBRr1gdzu1SPXywxqvGonb1s71uxU4x7mJmpXvmCUqHpA5w2hwkpX5E44uD3e1",
  "key24": "4EBcKXG1Z7KVKzmEYtAx7jesHaMnkUCbHJ8RSFDVRH7VmjzstuAEjPh5JGqbRRJteSLtVgbfV1i3tgwQSV2t5qW2",
  "key25": "3JXTAzV84vSxEDvwapzUYi8KHGyGooeV1QeynzpGTcaRVGgU1byk1MWzZ7eHkRFRJs2fm26dGKJM18DgoG55H79i",
  "key26": "57brPXACNcXbffdK9C4SEwcirhkqqLRTqULGvrsZNAyJGAjMEHcK1RSkKzXwigtmLD6uhL68bhGDhTj24F2pFTZG",
  "key27": "3c9ZHLMxHyBRfMEHmJE5vx4yjFbTqhbSovUDHPoPsNgYGCqK1gswGbBjsYAifaJq2qXvFiKoH2o7ythYS1tNPwzM",
  "key28": "3P2V7zynkjnMY96rxCZuy9jEsi2DEyAs98PboVpXfSPt1AHrEKWa7FdCVcS2tCQC5nCon3b4B4fuCna8bLf5yiKT",
  "key29": "32LSkJRqNDWRJYXydd7hB36b85f1HnKE6aGFp1g4aobA1Jd7wJ4S8f17dzH83hysEp9uAJSCr2bAkoVSW81ZNY5e",
  "key30": "4rd8hFN2QACgLobfCXm5aqvWs3uXH11JW581Myd4tEhnjnYYZyHrPKSwqh4r3hAgDsXDFuNjmTbGLX8pVBVzEADg",
  "key31": "4kDrekzRNjHzuYa7W2tZD3edM2zsEY94gz3iHKBTXDFfEHQJByzjGPKQQ2JRHx1a6NUZvz9GwVLgJYgP83r88ASV",
  "key32": "2ozYFpjnqGXJip3pEtQrnNLcxf16cJSsTPWjXvHVdEh2QD4oAQ2WU7GHzFjVc7Q6L3sb8fdG2DYp62hSCGwNhxnT",
  "key33": "4XuRnwjkHesnsvonLUkXShdNv3khdf6uskkq7xyCAMLzY3cnpPJPMv1kPoT8n2hHccE8m4yVCepPHRjerBXmC3bS",
  "key34": "2eFC6w6kLT1mcS4U3GygCNwS11LeKApWLof2xxF6dteYjrgtNxqZFNw9itPnTxBRHbY7XzsiTKybVDmWgKWvCJoN",
  "key35": "5QCUQdktqu8CuWo48rGQ5RbqjKDdroKtDacpdHT7AECPWczfNnBES3hC3pn6hgwNJDAMdHNGnR5cFzPB6XxfCgeR",
  "key36": "5HcdGFg152i3KYv5pWLcg2hc3yaBCQouKrx2Rk1vC5FxrDHabU1rSSzA2MwXv5b511Yn1bwuFe1V2dWVsrL9DSCp",
  "key37": "5qCjANuoACZT2DETeAzkEhrpxBdkvsuyW91HLjyh2k1KwxTBCXRAdoE2CwXvp4h3cvBRNyj67y1Wr73pr58koVQe",
  "key38": "5PhVCPRDNAwBwoSYDqfYwAnhAZqpfCUBGPyfiraBrFcoTrXrHsLTk3eCcEhGcUsv8QASutSyRAN5EUFsv62NWUhH",
  "key39": "5vhEhqQmYQmGj4nYAqSxTk7tXhKt7uUa9MEjjuXxc4VJvowiy9WHWZ5FKCypxxi6zSGMWh39yhzdfMyjk5cSUaCH",
  "key40": "3M93qyXogZ4jLuoiJcoHqF8zvTBPpphuvR8JFo12sJ7QCai8m2tcwRtZ1sEuFgY2rUjfnJ7L4QzYbtcyWheWqyCy",
  "key41": "5BBNNk5BnmPhgaaM9nDFzsCrbqE6TfXWM6FK35pYaNCNbxhfHEYiYinLAhZjaBV1zp4MDN6sFzbg3NiAeGMjnee7",
  "key42": "2eE7tJpaJcUZ8gHotrBGg3ev6BvsvXTj6NrU1audiejYME26sEAdjp3j77AxCBo8u748xWDTyxhbbRTDBx3WCvFi",
  "key43": "2zJLmaZD5ft5g6ZX46G58uRSiAmnCDbbWcd4cDBHW34twQ38AnGEiMa3jY1qWi49YvcnaFAZeRvkGgMUC49JgezW"
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
