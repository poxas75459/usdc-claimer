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
    "5P8mB6x48gV12JLrg9ofSWNto7AQd5RHjS8Fz8W8vnbQVpVrky4HRQuh1i8nSw7u8GCRKfa7mzQ6uhMdUrVgaUzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZfJqHAWK2Dxqm4puZqvFdRcdXybzpS2PecVE5jhZsVvnYN1GVhinMxeWwCAeNZgjCkRcCUytBxyLTtcF8bjA7xe",
  "key1": "5nwEUukEo7x8SJUq41HX6yqnTGbxZBcDwSEhE8L9BqBZkWc1wyd51pqSPb88GhgDQwmrZ26q6wy7tSmHH9H2PBgK",
  "key2": "5qP9Bc5PDLs6hrUHgEwQ3omujVb8wEmwyvymm3n2EDKUYGhZfKG9VM4XdMTtkUdmyhMhtuzUSSFYgtYJAYn9WJ1M",
  "key3": "3aTaV5M8JQrPhe5fr3kzdDwLM4tD4cpcPpVcUVTfAW2UFVTkGzJD378bs8MrnJXLi9WTTognWao5QReZpJ9m9c7r",
  "key4": "4gKRhtFoL6GxbLYMrF9BV953oidVeREupLxSpMgUEvicufr88A2iUQB3aSxxomvfu1hm1kgSh5R74VMNgxHNJtw3",
  "key5": "38gxRAXovub4UbRA9dEgduHrNk5DXY5AaN4J5DrhREe9xK29czFT6f1pEpnq9fsddhEj8i8bmAZsh82xaVoieRYp",
  "key6": "4Q7jW8RhozF4EP4Az5YyWazhgg7RZRRFBCQ8XA7pG2MKme2rfsTovDFXvUrgth4No4gGqTN61aPbMtTnCcRji7Lk",
  "key7": "47M9Rz1MiwonHBtt86auwkeajz7b9UbUeMXqyz2o7tPaykShDRUNQRXfnZNnJDkvNXLtbf5A6fjoxqJG2WGo1WC5",
  "key8": "41V8hL1kW8VizV8Wy8KGfMw8ho2SgKtJMX2ETsU3XkMbMefSWRvCWJFNmJwWyqWMTLsS3n91EPi9BjEM9cRU14tn",
  "key9": "5w6VZWxcGm8ZBiNmkS1HT35SuhxxKtXcEo44JnMUDKp8DREgQacbk7hQRAZZ5vfrA2zyPii6Jh8mvegNsvvjWdKR",
  "key10": "3nGw7QUKaMXUJUftgss9UacsKyLKKBjTQYi5u16vS4Lo2af5NbxYsm7Td5rMVDxdDRx7F7bdhxrAtAscg1t4YRVS",
  "key11": "5JmBVy3ps8aKqHwv2kh7LJDmBjNdqv9Rr6nK9CwLsFQJ94cqDrCeXcaRaj6818o27pL4psTQzo3aPcf59F8bVr81",
  "key12": "3ArDuAVNfe65bsoePigzDboWWKaBAzGJbDc7NoKEjQdXq8CzSax7BWsMjtP37TCK2oACszdzXqMUsQscsqX2qYS7",
  "key13": "3u7kAeoPUtjgKeftxW35Uj1eupz5W8gPwmckr2UikfuZjynemmWQdZgUYr5BVbWzehbVB473gDdSkRM8aHkUQxoC",
  "key14": "ri2wQRG8aCVdsCG7pMnZXofsjvdCMhBExE62FGKSMwUkLeqa2DKsNMLEMpr6mt8UUY8wDGJEw5MDDjZNRwgogmM",
  "key15": "3o9g7tcu7kHEQ9uYnPG88zXmhwz7krEhRhyQctWk1hnbreRSujvnFiTwG7twwpNin8bK8UNjtSQPT4MV14Ltwngi",
  "key16": "5NZCG3379ADqQd3WzANrPQYKNGeUuY2NckTBLkvWH3Lqjr5K98nufokTj5T1P9uGgprMwm6XPnVChjj7r7VDwnxR",
  "key17": "1Afzw9ULN8VYDNE5Wh7SNX7bSW55MP2kyV5L1MwYjXXVeouQze9qEjdZ9GwkYGd6pSZbjVmZKdz3Y6He4F2VX9P",
  "key18": "5d5h7ZbcFNTrfrWuZzsa9SihMmVtd5S25pCeSRscPmVbbQncN9kJPNWXMpkt6mAsVZQET7w61GVXs6tyxrePpnB7",
  "key19": "2JLYmMsB1Wu3SnKPJHrtcTp5R2QPeynpYhZFZfHAATTZnM9rwU8qEaKZ2j6DLcqMXAsZZeviYoTh2HvYvmhXYWZ7",
  "key20": "52VjV9nxxzgJjpaAxPeGDeaMznXxtH6N7TprDJhohuiHyFPdbKx3AHxAUgw8pZLcYrPeyYEv5BbmPzbKWQiCtVgB",
  "key21": "4WBV5q1gGgSgTWmjbPJLifphQweiwY3S3M8cwLFJSQ5WmmVPcLs7iELQiUnjnSJJSRBkB5oq2NLdMcwHhPn4hL2F",
  "key22": "28fxHySuxBKkpCZTPobZmJXZdLSncZAC8Pk7jeWpySUvdoMGmHo2wvxYS4HPSW7poNEgjJUdaoGQmH1fLnd3CQQk",
  "key23": "Acindao1HH9jGyoDLE846uVDVJFNB7Q9xpaAgkanUwen3yBShxvpU2Mdsc6jpZcutbyBeASdPw7rnx1mJ3H5u62",
  "key24": "2v5Nauu6K7CyPu69jNSZHD3FML7XTAVonULWCMXQkkR6JPgAj8sSJ6RAtvPCYb6Fo9M4FZE92G8jnd8XeQfiaQTC",
  "key25": "pPPQ76Ex14qXyAVPGhDzJuQLXb46y4JrHbuY4ZiTKtvPEB1HQNuaTFtjGJFKWcuZS3sBvLd7sRPBMJcvEKbqYW4",
  "key26": "5euPmVbEgNBi5s8xpVmi7qMjYywaeWgAhWQKSZXTb4BKPB4x3G3NLyd3RgMEppsgBMo3Cu8d3aCrMzYMGs5nrx7u",
  "key27": "5RE22fLHN2FptMaiAQaKs41Sddjyjy3idw1HoxjKnopaxSgi7hoLbvuUWvPQW7YAdPj6H5UVxWsUKYu3YqdMvunk",
  "key28": "5RKTgP2N7YBC9muCBvsq61QEEowudRRsgrDaFuspHeV73rCj4FGk9Gr5nXZ7yQgKFY23eDZvqJGHtUjVw6dPg4Vd",
  "key29": "dncfFRkFnpYN5B5FsNFBM34AQANAkXHGkXKBQZLaCE4GtHCPpJRxWDJSLdwVgZUUg8fThYsbnuRvJ9CLX54MrFt",
  "key30": "5PPN71kwJ2cK6gaX2PeyxeA4irGrG3uoU82z78s9MJFJY2Y79RdgYm7JH6SGMsKc3NbkYp2ELHvTww26GfHFWwh5",
  "key31": "5QNiBsKB61RCdyNRbQQjLXDRj2QS5D8hcRC3dHmgPqPN2QysXLApmiioPgp7uKv44govWFk75nUQvUEZY5mkuCme",
  "key32": "2edJLQZZznAVyYjKhJpmFcFdVF9r2zyYsWePMGNsBWCMtvNnbWKQ1KbgMiWNdPRYuo2CSvUnTYYQ1yJCq5Ack49m",
  "key33": "5zxVnL2WRfVx7AtwcXh3y8HvtwXCu3JKKvXo7CqcqkfSShNh8UX2UPw3q68BuLWMvnvMkjdmrEexJ5Zcxioe1ntR",
  "key34": "5G4aKKYeQEwEXB32hCz5VrES7qm6enTwPCWekGYr4xvaijFbQnoh2aAjMo2g4Czoo4N6WnCY9XK5MWZDieXBnMX3",
  "key35": "3x6ZMeUi9MjPCqmL9GryaUqF52CXK3jcpBLgm6svTuywMSaqkYgaYsu6gg41wZirn6UeVQo41FAzJuzPkQfmYQGd",
  "key36": "5yrX6Sk6xQG1CrirTaLMEi377kimsQpdwxWGyU2r15RiuqcchgZQLKv7GWdM8wxAdhSvVBZDjWVFtZfPh7uVnfyF",
  "key37": "5KwrkuxXXbTnVYg9c1yGzAMZVka6mGeLdgzWk4VJ7QmVYrjLPtw7NampkViCEHc5ftzaYEZBomXpzQPYooB9n2B3",
  "key38": "3zj4GTuA2GFBzyGiNMxz2yMXbR3AdAYjnPoYuHAamskxRrSujCBweVEfq11yh11BvL79gfTAaSjXMJmjEhMpgaA7",
  "key39": "eVuAaL4y5wRhTdCpCCuUTGdmRw9z2SgdYUfCrhK4Tv3PtMt1Bx2YbTP1pzV4sXUeia65PdeCxKikcQD5dLkCLaW",
  "key40": "3m5r8vSUKon1NwkxrLqyodFbNkaAxzZyUx515nk1zrqbPjyL92ryzZZfjAK2ow7je9YieMGDw6xe1YtrJ97XtFAZ",
  "key41": "63rYw65ZcPCUCjQGnEBm42eZ4p7QbQHrikGAy1UXaKdiqVEZrfNjG5P2pei1Jm8YN92xaQNhhqciLmPCaiLay7kK"
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
