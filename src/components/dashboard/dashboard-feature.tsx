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
    "584nFjytbR2s3ksCgjApNtfm1U5if6ea8zypvcfVDmgrzFf52e8R418cusaZJf5QjRd7gHxQbNKgBjX4wCtcpSHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ecakh7uznNsagcLEd2YxHRbScG6ozrVKoEhHesr4bvR2WqvgaHBtdrv861Hrzm1qVbUrHGtzMozzV2stcGVPgrw",
  "key1": "4jzoaTP92f68RwCjbt7A5SouuDJ9JcMCwYQPGpXwz5ULL14Fn3xZ7vQviuQBQ1zQ8JN33Xeb4AgKZWu239vWYkHK",
  "key2": "2twDdAvYTV1iuE9QTcQdFwWqHLxtEsSHA9CxRe7fvhtbWQJN4J7JXnizhFLbVsc4oQiTJnFDox5W2ntQc8323cHt",
  "key3": "3YWshsYwe4HncCb94sVbpLnsRdqMji376GDFxzMS9VoWrNK36ZY64yGGAjJ2BCqJ7UAooKiaaQ7qTSt7bxiRDzpo",
  "key4": "PGPhhMCWtXi1XMq3ZskvtiA8yEtYRzJqmkQHKGifpuNGywuSidXdJ2LKtR8D86GbrQ3nzX3x9cufHpdMJxZvxQL",
  "key5": "2fs5xfianmB8xXz5Cs2UwzySPrGdixsUkvMfvJwZYxaxJKrXHPvAV8fuBNsZsfeHc5aqWMDG9f57U8SDpdwo6sPV",
  "key6": "3jP2WxsKwbyGGdZ6HTUUcqHFotPP7Hku8gg2fDCoWseqQaH92gqBrDRUskxfUskdKcwYNhFqh1JtKuikVMp5GXhB",
  "key7": "47Xk3NWiFrAMbpJtRdwy72KQ3awvd9atY6z3yqjqT2RDSi1oCGSWihwqHgdR2o8wHgLDwgnxshzv1mzEKP65GckM",
  "key8": "5PbTPyP51TnxFVswgyY3Yfbz5MD8Jfbnj8JbSUCtTpydbDmC1ZvKv1B5gTUHTDJM9gyYsz96YwXXSqsQ5Yh2c5vR",
  "key9": "bZQsXR5UUQvtgJmNkjXtEHo6LBL4LxpzJ2m2zBTMfwKuvAxm5hSft5tkE9xVdSRWAz8qUXdPr9yEHRn26RRJd4B",
  "key10": "4TF9SwAMpJ897Pvwc5J45UaVFqVp9fT4CyQ735hcEK888jWzncvVwNLoS1Cby26QWu9ZCS9DCHpDLK1hdfpKzDDH",
  "key11": "YWU4TRvNVD35AJv6MCrYk1RnYhhBAP1VUn2SMUMHgqQ3TJTL1iWg2SHT7K7TxrGv1A7ChPPTjJR5R8dpbpv5CC5",
  "key12": "2vCckAeBeSbbJ3HK3LYzMkfUKkvQxPCFjwxjKSVXAQE3xJaVdwe4jSVQtcZbdGmLryBHKmEuZ2M9JkJvnQt3NkTd",
  "key13": "bsVD56mbQMeMg2CzWP77hQnPffveURnDcnVGQkqbAsM9ECZ1BbNXDBckncS3M9VkyADzwogL72fthMPSVVUb8k9",
  "key14": "2HuWLjycgQ3rgabstaUvzbnotkVqAxiLX5LpLurxpE6oma3Kr6kF8KfDwKaRVSjqFzmcC4BQbUsLKBHfCzybMnHD",
  "key15": "5bBXe5dJJakzZ3bKTgtRmWGV6QXc7Mhz9giaot4Da1JmnkC8fR8rJ6NCCs9HKXqBVCECAygmtgZFSzEAkaRCbZbs",
  "key16": "4MbNkLCLUS11Tg9jrS21NaFDBwATtBRqu8CPGEtgUSUNaq5W1tSmjHrYF7fRT2dppCxwiYJYYML4eBiLkyWTtWtb",
  "key17": "369YunZZKDQD6NV2ogYX2McDGRdaBe9afj8QGxCSTbUv83zPQj1m4SHpkCZxEEd79jK6LJoyhZnARFq76TVtvQCY",
  "key18": "5hcJtxcf8Yae2iidw7tXSybfR4DNP3CaL4oCdPgBoeh1RPP89CytGSjycvhRKzioJz6KbYr9iTvLPmDa8yyBva93",
  "key19": "53Lnsi9UD3NEWvaLr746s38a3zR24G2YsKyv46sNKrvQwA6enWY7cpPwGGKZ5LwfH5JEUaX8p3SZf66MWqPvzaqW",
  "key20": "3yDaLttNi7uuNwW4DFJCyCQ5DFNaZstyuFDCUEoyU1d2PSNSgeQ8ggTRs9qEkBFfgAYcRVKoj8K7fxZULpf9C68o",
  "key21": "5UvzNYBZr4jTmZ8kjiUvaRCn6RHiskAwj7QogQuccbz1NcBR2FrRXxwYgdLGGP8TsuTy9d4gwKKsvnHV8NkBxYc6",
  "key22": "o82T8L6R43Q5WkBhjbSg6kdctdaeCAkaNqw9jV46dYm5qudhvLtdasY2tsbBdNyLdv6N24cU66EU3Gjuc4FrAPn",
  "key23": "21n73z3d6x6px2d82CCaeMwtDZ91dD4u8Ztj8Bn2oybHFGv1D15wBPzubyJtHsTMaiVLhqriDr9SSz8T6zsZL7wA",
  "key24": "4F2baibmmjkSkiaGdr1x6UEkj1RcFyJYUxPNKw39sJqdNFxQMXgEadQVJQvJDN8VZUTjRJ7sLZTWdvyWTonn77Xb",
  "key25": "5RGUmfaWhz4xVLKy53ZphGvU52FFQAfQf3TeVD9yrUF1e6C9j916qTuJoMWfTA24Em1tLi3BuFHq8Z8BxDex9Jfm",
  "key26": "rNtFMUuNZNX55nhPe9ggirbHzm7ytdSLY36SmZ7qGveKtU3pdRNrP9pMAVjMwngZHGMNRMqMdCYnrNWPuXdnHmp",
  "key27": "2zZP1w5eWgk2NJ3EW9yduWpmUAPwZwLNSbDddsFHvnjPD44p74k1GgKXputRr54UfHqBuN1qbwEXFK5x3fiSL2LN",
  "key28": "4LwUedJ6Lh6fJvJ6DZ1MuwdaUGGfgYA8AUkGKPiVK87xWTdf56WaiiL7XwJLxeh3jLrDhJCjK51AVm3h82yJHoAX",
  "key29": "2g3MoRKnNn43K3rj2E5cbgazi2gHGptnYx8fMoh65qRHnr6njQBtgikjiJ9RUeQxGV346JN71d8syREBkYqAvFgL",
  "key30": "3iSzRQUvF6L2NTwj7GcE56CnGXK5TjeiygidbWuuGCnwWkoeWPWJLEwmXEHKwJBwYuZEU9pn6LpvzQTKVGaygvX5",
  "key31": "efCvqJmtMkY5biMJ33BKDmAN6Vp5Wo63JM2QJG1qSsUJidsynt4tc7VKHV4CeNJBn1zbqhBbWyyBJaPwiCxSCdN",
  "key32": "e29j7zEY4FdmaZwD6bj9pT3PfzA9pYNK8P4rqQDAqBtBhNSAm3XpQhVv7LUem1vZ6t9zBmB9DkbmLdhj8YXKfqs",
  "key33": "5hVdx9AdujZfBN34o5FDZCbkJKx1Zk3bBCwj7kHHFzy1ZHPB6eGKLeQ6LXvXEGxgkWqc36UVSCQXBgqnPCdkUFzN",
  "key34": "5AF3DUx2Be5gZHouWwKS61sy59qAUB4aW3ZLyFch7fArXySz82QFNyPYKrSTBvAut98K1o7HLNntyGQxDCT3GcK7",
  "key35": "87ZcU3KkYNFg8tepPhcGh21J4mzGCtGWABtCXrFDBcUWZJVtw2k5ZAn5MGjvKFCGDvSk4TLSnY2eLRN8A6BR1Fd",
  "key36": "2q67o2kfNFg8cjMS5iiKdE9soAPCezU3do5sGoRHoqWFKEtSgazd1C2pFtSmehfBbPZWiQPrsXZamWSzLuRJob8a",
  "key37": "3PpsbzqaKrVQgJC5YibNUffZk1nQeXqPjCyibhyX9bZggVqDYxNMrR37bSg3fX5P3TYRaDrEMD4aYEtgWSqkxceV",
  "key38": "4eb8N1RLHVNJtsggmS4PADTSotnYdTvtTAkYqgzW5caLr9zmVu9j9i8Tsph1Zt2bKG28kButK6JKhRvmKoY87i2d",
  "key39": "56DAx1sGWhnCTFYsqVQ2E35kA7D7ySZ3UStDC88qNAWuGkkgnuzwh18m2kttRDtykKBRd7quxK1R2vqKPPpDqk2X",
  "key40": "5wmFYACBVe255TMDtUMbmdU7hFxN5puFLML3c7EFBAyYh2uWmALW85pTMoxqoKXajRWJXRZwTQmocEzKH3xaKhV2",
  "key41": "3q9wTZeFhoEfXHePdmJsk3ArfcVarkFFdRHsr2Wr7RL7tZQWqhoUaNzrBHoxNYHjzR31MfAaqssaPFKM2HNo4Esc",
  "key42": "2Lmah8DUdCiCwLsH4um9UKqTZ7CnbzSBPtPqq7BNYbWbvQ9qLWACvgrTsc6iMtS9jr3HqDsC7HsRw3AhaCLBJrVr",
  "key43": "2ZNa2VyWv1oC5z6nC3HxYCngMtVbfLBqES9W14WDturcrpFfPp1hwUhg1KuwT1SefvPXQLuNgLSKwSzqP7wkYdHc",
  "key44": "5KpUMNQVjsNiJBtzJNCx5CCT7aK91ea7uf8JtzHa5miZbe6jq7MkRmdXZTtbE9MXfnCXEiKqT7yjJz8sJPYXMhtc",
  "key45": "GsUwFsgFZnLf9cAcepGRtD62x1rwNhSCsthHhpY31V97S5pudFcZwzj1WXTdXco6C9ECJr33FNkLG6pjtshqRTi",
  "key46": "zT3bQVHyL2r4ct1ZBpsKXadAWP24rdNf4Vt5WXATc6vX6rwbh1MivBaz78VXq1AgLmjjoAJGSrLVbt9jM64FbBv",
  "key47": "2U8txw837KXj8Dgq7W325SYNV4QQnKNiAQ4hRrpfhXV7nvEkz1JN9YjHr9viRGAPQXfH7VowcaDx65ryHhH4574H",
  "key48": "2qE9HbfoHWtjiToXYHrHoSZo2XdyWh5B3PSMPrxyYTmWmVmFVKeuWsTnmi2gwHnVYL9k9ajjfNG84mcb6QJjWari"
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
