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
    "4hwLbbMTBs4CQL3wuSc9hUseDGMAYzJR4BjKzeZUTovfZkJtvypj6mzNqCAvBWdb4wauvKkn8C29cRHPBuEJWdx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5omgRqba37D5cFuap3UTHnqTRf6Bm6uUXhNR9Z3SnksUzx5Lsji8a5W8ZSTQW2KVst5qCoQ6LEdJT4HzRTedpjEc",
  "key1": "58toks3wmgPPfnHQeWGekecR4Q5vsachn2TCN82Tx7pPdfsm6RPZ9WGgN7uXJgoY7PkDTMZzf3u2f6uH7UL5rBM3",
  "key2": "2b4gj34nx7nBiAez7ZFPKBjaahdoHa7M9QhVmDBbmsPRbygnvY9WyqbYYE83bw49G8YtBj6Gqf5zix3a7LYRx7YP",
  "key3": "3kgYXAkGBQi498JxSj1nLwUrp7G9qjBHxCQ7VwiSkfykrSEYXNe3zVQDkHiVy9qff8r2sgfzftspggxPWzT2Fswj",
  "key4": "FL5HdJ6GEP6N6aayWHBRGAMqHdvy7UmKZSrFz1jgSLviYjchoMhgXBh8icqQyKZuFqo195aGB9BkzVmJE81V6bn",
  "key5": "3fi3YJdmB7LCrcRAeZtrk7esexWr6Mtur9x3WKqRhPe2VebqYjmyBi1gmPRec9jXuBVNtdT1AkSnB1LPfRUcngCL",
  "key6": "UZtNxaih1p9RcfFDPZ9VVHCagX4tTvBbEyZDAhBfT3WXYMTkXHjhRdqM2pcaqgQ5YJTLemYtnFPogiuY1n25MN4",
  "key7": "59ZjaBMnWhgSPhPjuxvNSZBk9cqwHoE7zcvJbC6mp6j69Tss3oRpM7SKZYeGckM32qTi9oypYkxbmo5mZ46TNre2",
  "key8": "2MD2cpHaDs8rXXBkJ32tL3zqcnCCGucbejUGF91espxtMYLZKQ6sifKBSmSVJhA5C4tEr8VQ5H3XkrFLAy8JYkQQ",
  "key9": "gH7i4fEqYvMMvAN79v65YvHEgogYyFYG5729c2KNm7nd2qZRDUjnxCNm8wvoPZLunRtzWf2vVTD395vi3665Jm5",
  "key10": "2oRt2kubXpfFjsoootBouiGSSo2JvDc8WNT8S4jpLGQqTpQT1uiBkNuGDrSErysEtyoNBakmJcL1EZkVMQCB9PYP",
  "key11": "PRTyim9oTV9nSbA2GDx1XLt3m9eB6zLzpSvt4rjueSZ7zrRjw6x9Qim8rTjGKA1EQPHhUbRMMrvSwCQJrSBMnxz",
  "key12": "4dr46DvCn9qWbH6dSfZ8bcpZxmstwSYnkCGRHfREPUZcpejL7XUMw8yWVDbe9TDbdCDKMkU6CMcH8Y5KPh4XQH35",
  "key13": "5SonF5T8BwNiAhedmE53t6LqnvFTcfXFfLRe1UXR8NFhaxGCHwHB5yMJ9UzXuzdAmSQ5jxGf4gueqQoQ8HwkkzCs",
  "key14": "3aH1fU9SuqL8ciFeiuuLHeuThF7cjQytL5NX4PwA8Bb5owiDUF2iBPPw6pArBD5e9WvnfK6kC4aEqNfGhjdQnpnJ",
  "key15": "5qqKP8ePjAuQcK3Kfm8rF9GvfUJsVXgv6peQTzuAepDxTZzfTPm9y1JLMHPfGmYpLj9NeZRpLQiGXk2un8j9nxaf",
  "key16": "4aaPZAZabXtD6fCyjDEYvYyz9Gm1eN32oikgNofMg1tnLSR5g1wCHFnzzYV8kxCoAQfK9yWTuwWKq77UwaXgMCfn",
  "key17": "63kParwJbTtWMB9ufzjyXQaVoHiW7zNBf3h9Skcge1YMyWgndniQM7tLJargnWGdJQm7mbB5vrS5E3GvGPWqqRCY",
  "key18": "4EanZDNBz8keJ5EzYLaKnXrmRSyHWpwAoKmhDfMKFcqMe6JamU6xkW7DRHJX3ENBrnWKMD5w3nyTjXkiMiiTTqQS",
  "key19": "MmxMwrZCPzzJnnMv4A6THrHMmDcxTRVtPPkh3CGaFNv2my65jdVpGMna1zoyDzD1opZve63ByYGSJD7eShQaxBn",
  "key20": "3vJDBwzGxBtm8HqAfmtXgASLNgTxNoFZEhxT11SeZ36kv5XyJ5qRJGX8ZHehAtWpciKPzrzLGUgGt6GETRQHXTau",
  "key21": "uyQmziVq8ncHu1DMaZ7ppEUq7D6CFMh8WkvK5tCUVvbYPD97oSbeF757Zqi7xrVq6sPjemo2nWeGY9jtweSUHBR",
  "key22": "FyRwrZhi5Eiy1vPbHy8RwpCzXzvENt3AT3utvyr8KupckTuAFP8w5zwG2jApt4CJZT9zQcoNsapZYjjjqSHY7p8",
  "key23": "3DHko2C3tGmpcPd4FKD9gNkSmZB68uRveGnCCGft3bzXd8dP9fQUbrXWdbXgS5oFQwzK62xGWic38NQoW7tVeZYR",
  "key24": "5FgysCPjZMdXNwdhNU4K1Sk2nHaZRCZRq8hfk7RPTvRabor65RFMKxdhigAjRWRKYmsgHNvJrm15pJGr1V6CnF5Q",
  "key25": "63F7caX5hqqBtXyEbSBjDau55b98qrTFnMcEyZL7hh7kwQkNqHk7xYb4ZqbybfVPLDip4DQ9ND1rbuA72DQPtUPt",
  "key26": "4ZLQMuSSBrjHsanRYM2B3PVhZaVi7BMSP3SVbdumfBQjwnwaZ72VugcytGJxwewQHSQahmoM29jUriFZy9GWwxXq",
  "key27": "2eAY23TcUr8ESman7GC5w4GbftbJzHVo2JHZjq4pzqkjmX7D9eRiXouMsMnHdYKw8hbfQbqAi7HYCtm8oas7Lz7p",
  "key28": "3cnvCryDwiLbZfTYBNyJiWYP49S8PQAGMePY1a7x8ZEgDZNwpVvHMMSK1DtuUakeToYcdvHDBjrVicNyYKe17TZ3",
  "key29": "4cDL42fiBX1L691fBGfkoXZy1zigGnGUMZ4pnt2bHQUFXLpez2oHQtLLX3EnBWLMRWuGpBK1r47y6xjJev4WUfBp",
  "key30": "5uCjPz37PA2LuAi9ZxncRTMMTMTWSf3wENWumeXUHTXRgND95TAPhDqCkAZoyQgrkYHgKbxQVTfudBn7Sy46Tb1v",
  "key31": "4dv2MBXAjDh3tJmUoW5rJWRdQtvv9QfhyWjcGBqmhDWnsdzcyjQ4e8Fbyu2t4hnR1YjTdsga9GwEryK2XVHYPmBB",
  "key32": "62ad39hczyzWrCmsU7ApEhRvhijRngrgtZDT9vPknQmHja55tuvc3kaP8zx9ov6vq4roBhjGhG4hw2hCmWacLvbC",
  "key33": "5Z99aQxEAZowmVt5Pjxd9a9vitKupuQc1bB3Jc4B2Zsuui2QiJSwECJTyC4ZaQnn1voKevPo4wjPb9a8Gg6jU4F9",
  "key34": "5kan7aDRSCw6aaTgGTV3gxKD3oN6LporJhp5Yr43R51vM48t7dv8VRF355zt73eBXZ24txxidbQ2fQmVT885kjL3",
  "key35": "4mb9hDJ7RwdFACbJ2gnhPcLf1sqXtyb9xKCTxRa7r6VEJeoo9hXvC13yf9niWQF4hTWu4JSXBJvCAysytQ1nFxiU",
  "key36": "4uuVqPF9YmsFUEBHuMDZd1HRpD3zrpYmDAiE14Gcwj6t6pNEj6USew3bxAxC8fB9yiYTr4U1AHRNjgxStLpSwx2a",
  "key37": "3LTrBRyJMXPjMVcqZF1y3RhzHDDP1MhDWAT1vbQtm8xmjKAFSzsjS8Wv4gwniVEsqYbJVMa3FPZZsBsDfmZXTDte",
  "key38": "2TBQm52p1WdGQaThTNJrw4UTEbtAzpU63SMH9Tdxwh4m3BEso75s3PHLuNVNJhE7gRqZ3zAnTRiJdVao8oc9ERki"
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
