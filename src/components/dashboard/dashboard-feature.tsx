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
    "QeqzMpq88Fu29qAhVQQtjAb3oweRCPsTGvW1UwrdkBVqpG5wAC5HZ6qsFQYKCyZ1tGXt2ZKsqKDGR2NxquLhdCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pArjefn2VpgNJJp8hbh6UuSTRTSWbT1DVN4F7spAbMEjeYJLPTY9p81s5rNDMQG9GTE5PojfdNP9e7p5xNywf1s",
  "key1": "B4T6ZJuF2z5zHSdXe3TcfhnN6GijVF6mNRiE3YHRDgVAH9W3dY9BRzWqL8NSacF1whHmLJUDY2AmM2kqXtrtCY3",
  "key2": "2Bw1aFtJmV4Esbipqa1ZK4fSuz95FXqP9i6ZvSUfqySJ4948G3Gyntx5UMWaMaF4nc72yKiJwJEDjxTzHh9FmtBD",
  "key3": "2KR7z7kCsfRqPzSLnDoWnscPCrqLhvaiZZSezpxmCjkPkxF7kZpXMRvF4vi95RpgV6NsL1KdoGcLJtRqLYDRsVTw",
  "key4": "3dSGtSCm2ZYnKWKdnXSayPn1tqeJ7g5VCoNbP2VjLsWjmhbdvEcKw66zgbdEuC9FxRzWJmxH54hM3bevhwW1A2m4",
  "key5": "4fhHhGN3CkQX3F8y6Kn6fH1RqMhuCKUiSdtowr6eiFYMKeZkNMu226pAdJFmz7aYtmQbiL1kcqDuSJYis3sdsDyu",
  "key6": "2REBtQEm1NM3kvXWvb97aNcLhr9tCJey5LzKEovAW8aMCcKwa1nt7YpXdqqkdGcNf4QvYQ9bLtjfstkmFXqDz9Ev",
  "key7": "3ShmGavJy6FwHpYY1ZBCrsrxaNRJ2VyjG3aqsrC2PMQB4vJfrmMvuFdyjZQZXBxYko7Fu7HYoG8ct82gsBCQ9iXq",
  "key8": "4hJTySJSvBNn4t4CuR87WDa87yVaQQwHVUMvM1XS3u2tpKmaxMdFJwHxBMPHZLht4nkUNP3oKGcqSV1zKj7sdsZq",
  "key9": "3Vv96ahFcoLBDW5AnAoDFdv34JKLnx17winhZmrXBvvsBxvGiDEU178Zgo2pMmoDP1qFGhbCUX6wWMPebjwpusqj",
  "key10": "X64TAwr3L9anC44iwpCEsraszHDUSZ7zqdNBd3kmgAdquAHHYwNxpcQZ6c9wmU9WSsuFCENHAtqDwpv4676owAc",
  "key11": "3JMWF86hFrNvkyjSjPfxzGRXq1gRSRPvamA5GJgvVnyBPkz9FzVtCRwad4zFJrQmM4hmoLgeJDxmm5eqYww6bGKr",
  "key12": "3TcGrNFq6A4W3i5YWsCTp2oG2K6xPeb2qNP5SW7sdnwRghypVD9qFF6GDMWZSB78pGYSnZeBV28JP8PiRuUFRpWG",
  "key13": "uDg8Sna7wzgZ69zTyY7kpbTipQUrCLxRrrv6FBZnbgEpnpk8t7wS7YGj2iy25EasLHNMft4Dn6vcRqfMH9HLbNv",
  "key14": "324LvFVZe5aUE3y7BmvJb3QkKP9X4FDzgRLfURgaTCzCF5CRcSSYmmDCWF695RShhkxbYgqdWxTktF7cA3geGqE2",
  "key15": "5865bMZSrCWdLANYWibzuaQs4groRHgP54rPvM6jWD1qe8QhYGgyW9SjbPCwdN5rDLX9RPgpdjtUc4Z8ZiLJPkdq",
  "key16": "3cTzFHZJoZxLkVALTtMxBVd4vjDWZENcVpsKrbqPv9EBTUNAphbLPA9BhRa7t4eXoezXFVdmjHakzCyW5UWycw8D",
  "key17": "3KhNcARF5maezC6KQNTzrC7zyVeVzp2EvHbGsT6cYbdmNGGmP6aVbc44iqu65zaqExbLZCG7htuLL83N6MmbCTpB",
  "key18": "5rnD42Mjo4P3YvQcreGXFTiwok3jubtJCy73iMMgoUDH7ZPnjrPZQhpA33CRxtQLrgATTUYqLWRLZW2RtVcdBzYc",
  "key19": "36zo2eYb9b36QFT817GM9iJzAooEM44nV5MGdFVegxH8aHkHJCB6xCYbCcZe33FQZMy4D78Sjr593bkrd8rhdWDR",
  "key20": "2BYkTcXcYCTZkjfJmpLatnFn9xYbhntrPJc91z9XUyG9M63W1KzZ2ZZJBAuTsBe7kN96KHzaFJyxWWt5mx9k1dw3",
  "key21": "5UVNyFpFQRZyFjsBRusRyDVUe9yvwCLTuYVvNWnxiGHtWKcSvGAiHrAVy2oyeMs81C7SLtaUVsYC8sorsmZMrp3e",
  "key22": "3ULhF1xwogjMcupoHLBhinuXAkBWgiWmrWT1evbCrVrUmyVnNCMYouHTNZstftcykDBHcgKVeH6bAaW29Nwt8Hft",
  "key23": "4Q3GJGA7qMP3FUcRdLCozECaB43ERwed2obFGUvakGyBDf8Xr4ZwBWsmsA1pSZqntR4CpJX1UzUTg9TeursBopSk",
  "key24": "4arpgbEfdwjY6T5GWaX89UEPQXa8upLT7PHx7vTj15h8zgT1pTtenNqLz4wZoVLJ5gv4ftrK6pHiNiHKegrFUgw3",
  "key25": "5J4ZsWrzP4evAcuT6RNohXqkvLLjHRgrckaHXA8SY1hZmQz4WA8XmpgttAJzQqtwBzehiZYMzjTTWGYwbCZMh7Cj",
  "key26": "KSKJpFpQtBCkmtFEtUABibqYjBy129Fhfm2KGn2iA2ANkqJnnspPnk87MzNZHp8vjFDRSpqEv14xUk8BkHM6LhA",
  "key27": "raEcvmi3GTP3Hutqoi8VRHNtCkFTuQDG2zV7c7dSd5ne1xo1RJxBaYGgF9TTA6URCYGd1RswiWWEAKtfDjfjCr5",
  "key28": "Ndjk1y4gbzMLBBpB27JQkXQPMMxWaBifyAXARKiLszWygQA4y7HacD5JQYgs5kfZ91an1V2c25UM2izdhQvcs8p",
  "key29": "49BrxtBf47thhjowLRChxWGG6jH2ASvjzGgGMzL4iaSTkR4ijAFe59mhRtH5aJtEKWZwZcDtmYu8tHbB7Zr16uX3",
  "key30": "5SvXJo4pDGSYMch5XUr89Zd3BZh8A29gcHp9crGYTjsmXrdsQwwZ51iKrXWSjmZfJhCzkuyjZ1m3oVyYockjhchj",
  "key31": "3edCaRM7cvocfuUzjYfFKvccJZ6uPUByiKT18MhYnNf9ukcEGeTQR3jRsp6hcXcC5UR7Jjw7MdFUghNQLtW2LFW1",
  "key32": "65EF7k6EPyRNW4C645oRnndZwxBgR1oStLYCLsm98ZrtPbkhc1wQWi3BNVgp1SyNcsAWwEvgpMVXAVF99HAMJvY3",
  "key33": "nLAmS94W4PqzTdgrHgwNCJ5THuLTR5heFP9cANUd7jLdbHpHETDLpTdefYMTTMp8m3Ffhwd4QCamH8CCCRr2YrU",
  "key34": "8E5ed2dZ9P1ygv3eMTWWZbrd97VMLePPBFxXRPARy45LYVxH3dcEHkoJgUwQiCpPy8nUEpYo3RkDYMaqBUXZYiq",
  "key35": "3xKUNUACMV5ArJTVUDZy2FCak7YRxWoEcF8WJPib1d3RLNoiAqGgbKAzdd1SZqaD55q5Poxw3pE6GQ5CJTq1Vrzx",
  "key36": "1r8zyu2QFNeFHfEGP4nQ74cMfdwwXs1JdFPUrT7X3GQZjP2j9ECN81k3zH3LwdYzdKTRskjphs1muyGaBFcooU9",
  "key37": "ZjP4i8TBCwxjTsqrmdK7nA9M3EnaGky6199XLyWbnyra1NBVh5kWhmL6KpWR29r8jm8D9xf5zane8hgZWVEADF1",
  "key38": "666YqvGyFhwJgAb85irJqXiRzYnhhi8GgDK9NwfnJLKvnTRjViJiSQcMNF4vpKJrM4Jefd1wNJxFyFLJhy2XHcRv",
  "key39": "2LPZVW1VSxnMCKvevUyzcFYp5psP9ugV4g8cPuFc3oxgC1F91CSp1czWKhixof4UY7qXuTTJzdzTYfWcWJCJanJc",
  "key40": "5k6i8offmzmXuEy98ghw84zWWB6WD1mnNHHvmWnB4BVxQerHq8oVd1T24DXMQ1jrGhv5MrdurM1gHJ4MAPdVEdx6",
  "key41": "bSgy1b8mEtJ9M8v3xhJWtzEMHR7MJyc11b5ZTDFiER1afDYAEwZxNTCkq98sTErpbAd4bahxfWtWoD2sAGQYYc3",
  "key42": "3f7EX84e3dE7RvZkLh1sxcEr1DymwQrn2dMR86tygByVJ9fmjwuQvaE3LS53Fn6bEDFE5GKFmiYfrajWjooAboH6",
  "key43": "5TZutP2nejmis3sdXRkSCcieSUiYaB6pQxmJF5xGfP77SHs7msWKKHiV96F6PiUNo75VH9ne6gA5Mx2W4hmoh2jL"
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
