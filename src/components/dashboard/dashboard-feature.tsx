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
    "5SDuHSwXd2Sioc6nVBJmULoePHBupy4sUWpitGwRW8JMi3MENZcoVLgNP86JmvAb4FUoYMFJQbL2apnqbi3KwARX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEpBuA8e7UCb4SkimwVb1hkgzymKSeLWvMLLX7yb9oJQYtKW1qDBfJwPDqskUzDK5gAaJo4Uhzzq6Tgfn34vFWq",
  "key1": "2wW84bgbfc2PbbVvVz2p1aebqD7sWoEWFbZWLAK2fcFwBGeYhUpcdggoZBH2TEZMceVLeLum6UptQbLwAmbxukuz",
  "key2": "2fMPd8JGu55Daqq5tpMP3mwCnCG5E81eii5bYEr5iqzEwe8wVGwTy6kyX1oyLu7VFxzV464reokFpjB4C1FAp1z4",
  "key3": "2XCC7X94A2ZpwEZFqGoEcawTcEDfLC9qRmUFWvHhLAyDNjVjcxXWDaJvygby6npFJQi24kkUW5SqHqDa52uEJakL",
  "key4": "3B4Yc7XrezZrxi5xY4ZCXoptvMVnBQ4uuBchAtshXrzKzt6F4wLkg6XQqjnETGYTEcSoa9HrykGLF47AeraQXaNt",
  "key5": "2GrShZ37RepmjAnGSRRKoUNo1WCFnnAeQ2S2BamRJ8om4xvVzUQHvKwgiFdQi6vUP2uyLzmF8pdbHk42UJ9EF2yx",
  "key6": "4vJvaSVc8a8mZmes9A9nN7vxqv3X3N2ckHCrj3S5p2z8RViMH8ncT3x3mBMNwxhn6c5NZoewcAZGK852DyXpUfH4",
  "key7": "3t4d16VKv83UezAvhxGW2Q4VUtA7NNySLN31pvVu66W6XctK7ijfZhj1oUBHn5LEVAfXKmn8fMb5Bpr6E7DNGJwQ",
  "key8": "39vrgtUr6GNj5YA1XwqGaR91MACWR3S8kE1uVF9KmsMpw9P6EiB1HMZ4DuMpE9n7TcDRCppAmxqq33qwCzFmVY8B",
  "key9": "5LviwT17BPVs1gjZ81FtsFuumjF3sGoKJ4B5fum7LFTuGWESh8HiMkaTvi98bX3wj3fpnU6CbZSZU8eeuqCp7Zpz",
  "key10": "8y2jviTVtPTPccPPXKzfyGtKBXb1PpfPCxSSQBDCctkRhTPRTvS4mnW7oAhNKYvLejfLB7Uv2VD8QxdXuhtoQTb",
  "key11": "3HgfHRnmpwoJSiSAFE6DFGdohAjfukUpDj9h5SseYqeuQXkSRUtBtQ38ShfSogfb8W5Kp5wFVMoTsL6YbLSZx8HM",
  "key12": "31uwBP328QHMbpAkW915g9YJvFgMSaco3gkspErWmQQeL6sTQJcPt7JjMPnzbsfVFUpujtF1roh3FPb1gcRLWX7E",
  "key13": "izejphS3QCYcozATtQXfgpWYQrH6PjYutH5exjBGuEpy7MeutWRRoRuM7UTZYKVETzMY6JbdiRucYGraZ3pC1Hc",
  "key14": "5zRNxs3Y3UjsngCvzy49VfgeQEUvGSdQapQxmhXC2gQDufXTH9YrhwsE5GgpNCLXvLqVyEBQXsgXdQysmXtYbKUa",
  "key15": "2ELMdXyEM5nDdnD76PCQGJjLXUM59etwrtRXm4PRA6VmiepuLdMUQ4n9ikWEC4vtxbgvigRE3q2KNKLfbpYwhZm3",
  "key16": "2sHnBHBGxbCw6rXoeV75EDqtwpXPD2yAyzAGvLe9EHnmdJRd8Jg9MbajG7L5x45bvUDo4Jn9pNeLYgwvVBX1EDk3",
  "key17": "3twRR6g5bTNqp2Z7hf3TiZx25EUvc1WZ8nd9Hm4nRXF5ywU4D9Fn3UfTkv8f8PG1kVqmZfRoh5QUTnbLU1jhsk69",
  "key18": "5M5K1u7At1ymW8aj89DYtEQMp77uhSaTPeNcmX82wxJTCGhrKuLk14AXnCHxcQBkES4a668o41FJqB7Kxj4nUL5",
  "key19": "emaxvwiD1H9VSNUUuTXadWi4oPTYopg17BiVDq974Fb1NTxarsGvXpyZWMppEKEpdYztGhtVqaiJXChXeVVDU8L",
  "key20": "GdFS9shX4UzFBjBxrrysAL7nnZ8NtUvwCK1VbCf19MK74b93T4WHtwNwEGv54b6Z7GtkaWRqug5esrsyewsxGEM",
  "key21": "u8CLrzFeQb6jb1JU56BbrcsRks9NHDJ4WttmGX6CnxF3aAAZJNuaCmj6g4LrZtAyWxVzoiPbBDs7FaqoLrBdhfo",
  "key22": "3gD89vtRcbeQTBKrvbSxDNrPKXTv7FyeJyAQUyecuPMDCTM5LN8UtQDPQVG91GUxqcBy1FDYsPFmC1fk1ab2BhiB",
  "key23": "4sPHTiQDc52s4Y3nF8TZd4poEKXB7fzV5LYipUK57fa556KXHxTFjQfC9M8YzZwgpK1sDiUvXURpqo3wPGWPTRUc",
  "key24": "X9CouTU6j22WwKR8c17z33NVw4r4ww7hMGdXdeANybiQdJvRfdhNVKqkJ6XS1NStBxBB9kLzePmEpeQZvHTpgpK",
  "key25": "3BXrhG7aVM3fJaPEUqemYiKC8d1eSqftxQfUXpmNVjCYHLAkRJkA5ZuATyoyEvHCeuxDt76VxbCgfphtBoW917NJ",
  "key26": "4x3SUq2UF1AEAq34aDN9HvDB5cSsYFnqwDUYgwyE25GDd8pmAPY5bs15wXfFzaRTpvcjrFncVETR7JY2PmfiGMJR",
  "key27": "2JFjvrAxoBhjD3tJWkiBCpnKrFF1wbuRmHx74H74Y6XMjcbjNr9DR9nkMoxqh5oZXypyE3i9aJ44ZcnmVALXwag8",
  "key28": "46MVuNQHtKjdZrh2ggJDk7QAL2ga4ooZsvZUt1z6TqiB2AMYuMNS832fumEhuT4nSovkaL7e71JTFguqoxcnwGfj",
  "key29": "63An6c68RYu31ycozqUz738WroY3bn26GKEe8k78qtHoszoejYea81WpFnyCe434TDffJZs8Tx38FxZoRXDeiDT1",
  "key30": "5a1TQ6ySDkTFM8aS77S78j7RLi5NS4i8jnPZsyxcRdgAeCzqgXhS5qQUpT3PJqcJxufZwLSUpxEjGcvMW1BiuAds",
  "key31": "2kV2KUKSdJkhk9tGWxZxfeHGP768eQyu5RRKSps8o3hTePF4vg17AemQHmMmGxtPnFMHCK9c6JukVFZbTPQnT7UM",
  "key32": "2YjgeGR8QeqcVncyrGNNA3jekW7UDCcWVDT7TmCFyPRSS17eDWxZrqqNhSJeK9MQBLJq5JyRPRqmMPxiY5nptLW5",
  "key33": "5v7PvWRAkRrkwGj2CkLyqA4ZoT7C9Rgx8BTT8ipU9Xf6agjZWVeFZxttfMZweLyxVobdTcZDfHgFD7Rshafm2jkk",
  "key34": "4bbG7iiFvbSv2682dWV5SbBJdqXs33jDPCmTV8Bf6EhGxa93cXdqxhhTLeqgkUge5KXN57HqQ6UpY5v6jPn7HMs",
  "key35": "uFJmrvr1tiTVVqEK5aQZ84dW7MA8zfXLyeKZnoVWi8oZdjYzf5gdL1br2BKa5RUhpqZDDgW23xe87AvjFzxjp4h",
  "key36": "RjBK9NQXKurWo6jiFCdcSULjmGzyEDPGZXDBV9ixzZxfBB76uvQiGyCWWgJeEN9koyMfhiauApLuDQjQYVe25zM",
  "key37": "gZ97FNrsXCtUWF17fqoMWW9WgCafikw7iFCNG2JDzC8i3skQgQSpXndEZqzE6CfYmiCcLwAxoLKKriWSGYeuf1f",
  "key38": "2ryHUS2GCX9t2gJFkztVX9pmWGQQBC7U5vtCM2odt8xeE1Br6nKWh5W9RZnVwNCJex9nKNs89kNXPxuRYWc9A7A",
  "key39": "5wp5TbCinrpgN8rHB57Y7KUXt4Md3UDjxdNHjwhXfygi6Fwuatddw4RxtEtH5joKdkbjRbSUhcpzgaTjDpNEEJ8b",
  "key40": "ryyUvrftgHy8sZ96QVnocmtEgyjf2jmT5xwc6zvMqd9aY99DTQ1D6WZB9XdrSZWxTSPNXYrX4Fdj2BpDK1sgC1H",
  "key41": "4NnfopiBHRc559MPsBnK9bF8FeF3mvBBpNsYa3D9G4rACX1oqkdFfZDp7QXVZ477otFm4Xy5SdbsK6D3dpGutLDw",
  "key42": "2rZfVjkWc2cGhVbw2MpsPrELFYvK5r5hfoHjYGg3kMif4MJTScDU87fYhaLyVJx8GXPyyjfdA5mYE2iiiLqYeZDq",
  "key43": "2WySLeGwNrxrUNpcL6KC9CJTy9M53dwHhi8uM2otw6n8YTGuDpAth471Rwhz1V6cR4FC7p8mdGcr6EEJxWNZV6NN",
  "key44": "3ErdA11mhXoRoEivTChDTENC3paMEfwKvzeSaWHCs1VyJGnbPnVteMVGefNggqXXuUeWYPULqCmmQmFE3TcUi8wS",
  "key45": "3b3gX24n1zKMQwvZcMY89LhPoPDUbr2c5Lv5HrFb9vx18fiPkY1YTxrvDs6p4exS2164wYyy8bMy7moXWE9SKng3",
  "key46": "2kgvqb98CNDF9PknTagyWXDV13gduTjRmj9LTds293MJrNE8NdxiLzWkBZiEWtt9Qj8HfyLz3y8K1JnhhS1gznV5",
  "key47": "kzzpvLsZQYMfVfLE5X3gAcHVwjjoDwJGv993ViFSQYLRbGBzP6WDas2Do21sefX1sKrBzwkaqHdj7tZquHbLPcc"
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
