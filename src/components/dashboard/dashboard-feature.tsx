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
    "3FkvRNDwJxTYpUbz2ABGaLWrWJdYQJKopp1a7sZZPRtWgyajCGZ7LmZChyk7WdYG9e91r1bqPNUZYenQRJJUNzvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kaV3NraW9Lq2xSznJ5zBaxV5xKAVuAKCJ72Vdt3Hc8oUPeeNYoYLtajDcZcs99zX934gYuJC7APxH1DusQcAvpw",
  "key1": "2CyKssdbm3dsyU6EFv8N5NCYPmi4QJjYrVfmFppqiMPYbVWK1f6CxRmV45WMk2oEccyKq18q1TzXYDg39BTb88KV",
  "key2": "4VXC3pU8rbXBTyK4itQqgq7BCRbq6mgUptckqUGW1zdyHiPBWKRe5NxDM6MbpkC4PcVzC6wEDVjd8uBo19fFpsSZ",
  "key3": "3i3oRj2SdrijhCLzB9ctHi6f8zapvRPMyDKfN9wGkBDbQ1T1PTkyWMKoZ8cAGcHjPFPcMfTM7H3XQ8ptpaxGDw9E",
  "key4": "ig3Gnosr44sWWnncEKCJ5XpSySC6GmYW1ofj69tsPkY5GN7beaauAcrkvhE4G5sd5si21iYJy4JNbYh3ZCGg9q7",
  "key5": "Bih6ZVG1VxKC17i6dSpkomp8zXWgFRGGxrEoZVrQQ4iMxZo8L1wWX9d1jXy72JornsYyWrC8vHSJ2E4GseE7A7D",
  "key6": "gZFSicX7C4oejJiNEoLnXbmCzKpKqdxAH6miStVYQQJDxnv42jA6aKNvHTAw6ovyAMXPu9kEkVx9ZWbZ11yzADY",
  "key7": "3UB3TPRjkjuVCizyRGM8Fuf7M2gX7ZAEMtVB3itjqHAb1CkMzMPpPUb9S2xYqfGSpms1zEW1EGeXd8vc9yCVKF5H",
  "key8": "4qF2DXVXnU6C12yao4rD3KMz23Jo37MQjczzuGGLqnymGULgD42snxHX88MFjSqxVJh7Y187kcH7zkDDbwcqo8do",
  "key9": "YgGqZR5JLxo3CyoAmnLATpFtqGntAid659BcYtBoA6YegiTwWTQje4KcqeG5pNKiD32op1UmUZ5u5MWSRPsB9fR",
  "key10": "1WQv41NxLRmDAQpk3481ZMYDjLmzgGF3f2LtYtimxVJA5HoNS5GPn7ZC5sMZeEmWi4J7PdHF6Nc4gsf7QdK8yNQ",
  "key11": "4jJoqZ3keHQKJPJT5bCpRyUGRVDAnLAah9c56aVwJq2tvc1SQ4Upd12KhHLqtoHmmRpkFERg9XfH9kRgx2DFoZfo",
  "key12": "5iuwpKESyD7c5Ro7AfCPc1AJN5V97iBSdSKj3UfMCGZPZqPXuFosEWe66xpFaXExXAuuWa6WrHZoVa4S1ArpRCu4",
  "key13": "5Q7DgRdCLyh23T3CHwEgYhQJvHbyumPiyFjbczC1WKgWD1aHE6AuzJGj5zpLdC5UdGo2375KJ9C9Dndk8nJR9x38",
  "key14": "bx5KVuiqsAiVRGsW4PScrRWqmr4utJCJe6EDzDj6wKGHHyFkAWP2bekQ16GeKnqrmLwsNDqSYCU1Z6gyv6JpfUn",
  "key15": "36b1Q1Hwt5aJeLg452ePyeS9HZmkRVVQFWj7pvX6acK6B8pvVYBV1n6XsNUKZh3HQ4vwX6TimyhwY2UkRstyCHoS",
  "key16": "3h7o8H372mAT2vpwi9KZ1ykqw3GxAz4hDfBd8uhnc1tT4nB7UK4BsgFSmTEbJjpCmuiPZocmfKnnQq8HtZoZkyab",
  "key17": "3bE1KsKHQPfCc4nNhSXR7XNo7guFpVG5Ldr7aNGVBMQQ1RQNdN4iQ2V2madB9v13ksJgrPNQWVpFyFZuP7vjh54F",
  "key18": "ffV4qnQMYXgy9y8QXjcWvVzEdHtmVzvp4KyDzStXBJJ1uX8NPeEMKgCxF6N6vUiM3sSWPJm79YK3ERT8x2rYroG",
  "key19": "39AdneM97TNb83oqwm3SSKnRAvUrvEx94rvqdsZJLiFPfHtdVvKBobth13gqS4WwdWxfrzo7mwTijDnEUPymRJdR",
  "key20": "PAbE6aLzfLdnkXfg2VyiFNfNmP2QEdPN6jVdHfUen5YG517Zbi1yebvEhTouc8o1TViH6NHb6RKv3HMZHv3ukzQ",
  "key21": "puQNhLZcAUaeWfddRFcFbPv8Hg5zEHS2Pcr9UKC4D1a9FMQoABXY7hTgVGMKynKdxuKdCvLyL8KctZueKpMBauG",
  "key22": "3A7LWi8dCeGidY5vvSj1JQb2E26SM5biry1xyfdLyTcpXxdAyZSx24QU4bPE333xaZCNtQnjF9dcSLtrDmtYESH5",
  "key23": "23j1JMTFHVhUxiDbfE2pRKrdKF6HQrxffSZo315Ehgpb6Ynr4oZFWQQbheJFdfm25hFR4eyWGmAzMkHD3ajsYogD",
  "key24": "fdJH55YNEyZCAgJCGZsFZskKk4eZWg5MEHuQ28SqYNcpn5fWeh9pu41usX2BZRTdrpnH4N5iiw6u24LBYg1UnV9",
  "key25": "vvegwxKjpdQphpVAAajxw6LJTFxKTay1xQgyVNzRAuWCfD34WxhnK49hk9mDLqCjCVwF16KkBDFB4pEGCxCZ8tX",
  "key26": "4qJNF5qrNCMRUjLf5cFL4XPZxR8AZcHfWec3rM2yUMo2wDEhNRVTw7BYdE57oKmtrBBjitSoGnVT3XBXhCgMp98r",
  "key27": "2rzP9mWZbRWgsW6ey64vS9PuPnWpqbuzvaCtBoCZ99JEGszFTZqbysQZe1KWcqtAGBiEZLieTD7VS7qTnDf7xgh4",
  "key28": "4jV3Am2FQuQqPANaX9GDTiN15SwimNNgwFaW5AbwHYdJY8UHVtouFAJEWuGtUzXfSWmPgYFLKsXBv5uATyt9jr4b",
  "key29": "3EoiakiqQ67vht8HtPWByBbibAxf4GmBABSCna2z2fBTiLFQeVX4W17tA7k1ATwPi1mhegCvEAYfTGjsGLaYaGR",
  "key30": "66opNZx4147imhV85zetMhAwL6EZU6LvCw5XGXeQK4Waja2ps1dpTDYwRNoCAyZhJ9VxSb9pbmbMvaXaCJqouRYz",
  "key31": "GMfx7yUkepuyniA8UZvnYDNmNG1bHJ6WjT71YRXemxp8VJunRbx5yVsVLdWQgMBhb1nBT741FSVbZRcyGY9KE2A",
  "key32": "VTFrDFx1rUnnCPFuTS9sZj7MQixY1VxP58JheFDsBtKwHZSc2mXrxESGYw6W1MBxgHU8xKDoaUSb8kJjX9i8mgD",
  "key33": "32EGgSZu3gVSxwjMyBXAyGsaRjQNZN5rgHKgMLoqv1p2GjccRsC76ENdmNrGVz7qMtc7TCvbJYRNS6hLGbnREdE6",
  "key34": "5M53zunWnU43sc1q17HtLnvvRe6ofLW6Pnq3VvtgkqMMi39D9t92brDVKHSJnxez57xh3xbXNh5Hy2GNAiJuRQ6c",
  "key35": "4A8xscLKsFExZEx1WKzZ6h9vJaGDpSDho8wXBUUedmsTwFsMtBZFrtSj19LmjZW3s8PzBGTBMVmDZrxoqwFaf1Gv",
  "key36": "5cdcaE75D6ewRPEZYU2YE6hMP2BfWj6nFmvFFf1cCxG4we3CZJvqm9Gkr53M4oZcEqsymzsvfoMqVV1XBMgb7461",
  "key37": "4fQeZqYD5D9nVSxbB6D4rvq5QHXySGo7AVVgPmhuf3cRpsp5sZvj9A6ZREFE7A2f8sCWu6d3cUzZdUJt4humnKaG"
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
