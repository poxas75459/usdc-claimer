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
    "DTAQXT53k7boWkHq4bSPx8scrKYZvaFUgJQ36KKkGRhrHJnWLWbo4yjS7db4osKGY1e3wrTv6LWj6YJd4eLRxm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLgzSZoxeCVBdpsJZe2x2v4DRFbUMsfhWi1Ay785WdtEXPri34w8fLz58ogoP214zJVmfZGfNL1nvD54wHht2TP",
  "key1": "HgtpLuWA2YJDiBK1PBSPZbsGF7Api3wKnPv55GtqrGA2nq61hiDxSQE6Tiy6Bw4HTTQHTgLVpNMY9PU7LKwVaEu",
  "key2": "4KuNTFhdXGyNR7Pdr68pVTUBdxwjobt8xXBrtQbjLoAEuhvAGsoZWf1PzSTkseV5vqkdxsPRY8EDsfruMuAuy4c4",
  "key3": "3UdLciBL6HQQYVEvCejmbDG2S6AbqtQBoEjjbqd3fLRxYYnZEgd8eUedvBHft5YyWeaLCQAyVKtMhKVaDNV8QhTr",
  "key4": "3b4ZGP4QxodmBZp1PNpiqrebZpYS2tuizQq6Bu5haqFV59QJsk5eoEFKoY3AErawohN5UVdrUxY8UC8zYdFdc5j9",
  "key5": "5GZEc7eatZswnjsdja1Uy3As7bipaiVYQWMA2YTPz87jFCwGR6ThiXADTZoNDwkB6snKMK22mriMpyBsW6t4CkKm",
  "key6": "3byUgLjjtHmoNTiWTWvpym5J4n1o2JSxAJbk86tpj5ZvqFMKUMSTxgP3xfRyBTYaZp32YYNFeerstPjUg9wx4VrA",
  "key7": "59hPaS9gD7Tw3cE8HZnkmFZHfmHBSoeJr7Rhnf74H6eekovu6SdeK4xCvjvK1816zsQwqZ277xGYd58XKVYC9m5m",
  "key8": "x3vcdAykRToH6NCEUZouEJ8yrsuLfTgtdZwPGjWhsoAjpTt1Wtc3QXmYtPWCPLfU17XR7osUWvwFd9ruVGjhf6c",
  "key9": "63kjBCuu6JmZEN98o4T3bVvnbqY1wqYwTfVJt9bJ8HrULCFQEzop1cWpnD8m4WKXGWvVfLaMzvwkAbELBxaSuAVg",
  "key10": "GDNyhwNoBH2hTAxyvcTjb9uuNwMuthqjnaAtXubacjRphNSdkpZJbDT9hSWEnKmpR191Z8EPEEdToBtBsMDRNZ5",
  "key11": "5C3WDMiW3yfUq3qXzyduG9EV9v1edPqFz7UZPLhijJ7QLBpxjVEVYZfcAkrLwxQa5bHSXHnuaVsaCZUqiA83L9as",
  "key12": "4ymTFxbRUgFY6gkZdjsDr877gZfpzkJgeKScYjXcJkpXxaWVMqSZTws7fW9junXWqc59hq4ZjNoXeTNZB1erKMzS",
  "key13": "4GLbVVtEBJh3xZbQFK4Hy5pwuBb22cCwyhzT7KYMGxFvLCEc5W8gXgDZbC94TVWSrivMTfNCf6wWaiJSa6jjAGNw",
  "key14": "fSaWgmS4SmTA56LqN8LhWrtYzpHtJwPVTWwYvxuqJx6sCyHGpZS5GFerEh4uBV9p8vRqeqzY6UJ4ZotYZmCtPny",
  "key15": "GsaQpCyP54jk4JBisa5jBJJD4VJSiCmjtt84fyQmWdE6heQPv4n6G4qwZukX6ygqYDhYcwXDHCTccjghdNEj37U",
  "key16": "5uvtiXRKVJmCjnuxrLoTdVNCpjErNR1DbMaRv4EkNQPNvyvhwVQZgVJNugTLPFxkpMDYfNVZiuALZ9P195ymoa8T",
  "key17": "3MP6Cxpc55v1VymqewCH3n4VAPBAHLfG8Std4bu8HSqzYvR1chWA2ijjwz8hGnfBeN8UUKdeCPLNL2tjZrTLJ94K",
  "key18": "4Bjm5djAqAwd6MPt43MAicinvKtTWx4Xk163TCBzvJMb5WEiJbTR5PSDYeuEWEMDE5zE2y7DDs26sfAs2r8HJ61S",
  "key19": "4HriZSnQMCgA51S356fVTSb2Xgn412ujSpJXPtdTj9HpdDguyYtUEpcAfqAop9UEX2MuxMHzbKBPEFQ3MG38tdLC",
  "key20": "4yJJQxXgz6NkJBZFKdrnknLZqwx7dnANZJ8EFYPnBF337upumNHsygcYh4Y43aUZUrUpc5zWWiuknpZxkpXhsLJr",
  "key21": "e7NXnCAumCUXMLf8SWK9N5hGJyHNX6v5QNnCpSodu4PvDMx8LWanGaVLNB5v14U9eLSXPurJHaZNQbyQkpCAds2",
  "key22": "2qNmRXspXMKnuV9HgRaTunRYgCZqz6urV4Yh7mBqumtudKQMsuMneucM7kPkwPv3p7PPosmgQnePDzDRa8TAeRY4",
  "key23": "2STpJ6jcsJ1vnphc6sqMnu8iKrZzNhYc3WT5CdjuTSKyGhGs56g3oTAcfcQt88Mdj4TgdbaoCrDQ3ae5CibVbnLY",
  "key24": "5wstLskaUGLNnExcokMqtQE6HcEevyQzFEewLpG8njuSCMAqvJPSkim7S1KtE3NNaFup237MtUM6yEbwq2vB5A8L",
  "key25": "eWGh4t8KbdoMh2pd7p1g1Cq7nCuHBmFLoBkzYGDFdSb5EDU9HnCFsXJbB6Xw8e6nYBVMgZhxEsqyTbSea7T8det",
  "key26": "3yt19RrhLVfHiQjh5ThrqH2Xs3rzwZaLtV4AaDn7rj9Mhmf5VeLfBU6aKZFefQhZiDprTBC4uFt3gyw9QHU6RQvQ",
  "key27": "48mUJXv5i4Gt4U8ipXJYXXS36VxtoEaWCBg44GpVofApMazgvNuhn43vNKFMHHapwK2gS6zNsJPargV5SBC5MakP",
  "key28": "4auFLw5cTS7dXnZPkkmwedpDvcWNbVvxxmUxng2Pu6ELKJVDdeVWCkpx3FouJRfwES94SFvymLNXpCf1jXDoDGqJ",
  "key29": "5U78sGjFjLtogdveGfTbcJ9CPxbmTnsKjtCWzCUcUhk6PptYNkYUNyNqvzp5q1WaeQCKRnXfJEkVGK9PmPFzQafC",
  "key30": "4KSVskskCW9FeSz7p8PbEPit7EsxABxVMSmkF4zTBJZgewUKrkDpezkTzdwmamo1b7Ntd6NUsBbwmYSRvZzs1TrT",
  "key31": "4MchGd1TpzsWrSHGky5dbNEv5f6pYc6dse9S8EmZLuXjvZEWd6RyP3FwemvfWBTt7CHLEqrbifLvtmVkYn8PQaZN",
  "key32": "2XASQd8PF12f3rPJzw324Cj3yvBgZPw65h2pLKWe5WwqfcLAL1oWd9uWtrzVuEgh9GmkNHcXG33xWsYJ6Rc5SMY9",
  "key33": "53odZkUf4PRNQCtjYPgrSKUKwXiebVm2L7MsNoWPqoj4NNPVe2P4Ri4ziCtFvn6Woo7rPRZS9Q76YnTzQRgjXgGS",
  "key34": "5MuYyJFJiW2t6ZqamnZKsaRVQ8qYSM7v7ZuHH2YZzJLSCTdbsXB6Sfy4Cs2AYoMKrzjGxnmcMeRM6x5BfbVt8KVo",
  "key35": "5NPqHHSWbyfioaLcoVx6WoBvBkP9JaXiYdvn4wtJVYrdtrx3jRWbefCzodiDZxuyMBGKtp6AUhySyriYzCcypAMG",
  "key36": "4b6Nk42KfPue1WBcrzN8bGTR8wwpA35DL62vkMHcyG5NAufzQmLWFhPca3WuZaZMqFT7Z2Th5R6FZ3B1mZ56qBvC",
  "key37": "2LwC2p3uv6A18hSiEfYkUruwrFsNKXGMFWJkdVrXBrjcSUJYXxhqKSR7sxfPoD6sj2a6Dn658pXGjpxsvN3GBoYS",
  "key38": "xQLco1qAYJhK4YCCgqrDxPDxqUx3VfkZAMNex5jXkGd1yA6gFDypHSDS4UypZwcZJhoLAQ7XpVAxDZvre1pP7Yg",
  "key39": "5dUnu9W2t5ubeGqVY633E5mUmQBQciBseMXZS1o4sRt1AS2dq8i29cSf7VujNkVBqz8qDNzjUitDwjcRtKCbnuZf",
  "key40": "54xToBaD4imLK6snumxZW67Wro7m2XaBkei1DvDs8JVLthRaaoE88NJxuxbGzD9RnrJxnGVzw7bqwMrH452ucKCJ",
  "key41": "2BKymaAiev41hJEg54ajHU2TD9cfYMqfzy2Fbmh1DK3QboCaHYJRUJ19bx3kra4qMrvGJhRoVosx6irb76hf5RJ3",
  "key42": "3nSTsHJ8MsfxVhzmsvYKgjTGvooLnk27vEBY9eruwnBP8Nw5DUVjqd963WcCkU8xGvBLZUicGHyr7HU3DbNr8Ddp",
  "key43": "5nbw36VJBC2z6KpWQZgsUsoZ49sSnjLL35xsBD7LJq8ffiCvG6FJrk1J6yJTaCGdXoG6ZttiL3vAqi4JkbnWLBa3",
  "key44": "84K7r4QZwSEuzMWS4UXPukyC2jHLA6fj17HFSrTsZr5752j8yS9iaAoXXj4QzdL1KYySjxwS1HZS9j1tQSUhSpu",
  "key45": "4thQwe4RU18cT7aV8kJM8iSLk9pz5fKJb2rnXbSAjgTrgLyc66yShe5UiodQC2Hnp8jdP3M8PiBw4tmu73jhHXGo"
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
