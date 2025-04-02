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
    "3nFm6cC3KkXQUaUosxcCZsFfWV8QRd4ffhK9LYzsv75GMPsJRo17eX9AyuM8KWXECcCJNDZXKxioinLxCso9BrAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W9FmWBs2JRbKonvYmHToe7mkNUZYgiPiMAZkGENCo2y7rVLAqk1p35Jk4VAyVPGQX8qwwKQztwip6MGqV5RutXY",
  "key1": "5Zffh5p9rBr8B8fUZdoMdrHnGKd5LjhFJTBntX6jz18V4MPvHzucYrdnapKbe6BEoNZq5JsaStGQDRtBvCBDaHoJ",
  "key2": "4wGEW6KRSJkpXWimDetpJiZTvaUq3o5VNhYYdMNLBLinhiXUM4VzEqfpMmtGvRYdYXwUqnJVLE6vMmxU5DYXcneU",
  "key3": "2GCLhbTeMe2kuNBXKKG5eWrsEek6PhiNdu7B9iaPJryND7goceEDKxHCUxVBwaEwELqovCV7F9JGyn4k7g5hXgoK",
  "key4": "3N56UkqMKYa2pU6wJFjw8hvt9XtGYUZ2A4euG3dXkbgEoXcyk3xV4GjxgMN6Zqr2zNKdox7zBbiKoShaq6kkofwu",
  "key5": "5kd2j7u4s6aPErGrk9AB9gvptM1CymLwVhwKPLgTBcvNX6BBCeTgfGANRkpxaWxJy3k1q4wSRqU6Mat7JEorTtZw",
  "key6": "577JDffwqdTbYKDoBJ9rihSA3hSpFKai7RkEL5ht5UVtf1u9DEdMcbQHG8yW5DNtepRLTdX5RfqUf1h6Bg1CSd4F",
  "key7": "MieA8FiNJXu1KKyexLixsady9CeMaT2VKHXKMgiUnrPzaiQswbkpLg8FiYggjw8cAYe393L6yqPA9CtZeAeQQVS",
  "key8": "5R1uq5mqndALcg1hm4SRCaUcXgo8AdYTcWma2vmiYuJuktvxkXj58gmZbMdxXpSVkim9N5YNhmGfyVQs3JKJ44Bx",
  "key9": "2wTMXdhdcmQ8casPCEdXc3Z1kdLFU6bbFUCfa8iYenL9nCFT4fkszv3ZusYsumqC6ypRRQrkbuQvfK4vZ87DAapy",
  "key10": "3MsfC12zYtoSXLYQHQLKVThFocxWdnNYuZkCkv56myd3bLCHXs53U4trF2r18RYdwBc3qQpDAQGuXuDfgbButFLf",
  "key11": "3V1bBxQEyqRqEDfBXCG5ZiWzHDewTKpqDZC3mWg3BUhffmcTBSkhqb93S5ciAt1Ab2ftx2RtG1jfUrN77mAf9SGW",
  "key12": "2YkVDKDM1dM6YSAohKBgpVdwnzEVy5taoewcHxv7xQd7xDczSTafw66FzWWGnimreUdWbk14iwgTWpCGjPcwQWCj",
  "key13": "2467dYoF2r75QVJy8NBFDtpgScaAURK7SbC7tJ5L6Mhb4siNUKaQWrni6SLkCeuhVWqtF9rZa5k9H5P1n46dKLav",
  "key14": "64R9Mr5htAAZAjT5UMGvXo9fZkwRM7pprGpvcJLC8411oWYfyTy33omeAEjr3WDnw1gzwWFrqAu4wNkkDisyzh4M",
  "key15": "uB43G8V1Z1m5MAVXFXgGD4SP3s6oxvUNj7bcMsQbWFnXhQMNgS4poJw9EEoeRUG4afHogcqtPo8d2YDovnwC1QG",
  "key16": "5dDmbMuSnr5fgSMxbF6e5LdY56bG2tDoZtsM4eBn6Wk18MhBMwyVyBhjCwGkrxrBEVB8t5WHkF6XAYBTLJqTt1ZF",
  "key17": "5E8rNzHT1aaPj6JUWWCHWvbfPNvkQt4FJfgpMzS4JzzkBjmRWq3Q6fdzkkx8kCdVgY8XHMFJxqMaof9FvVMRvPMj",
  "key18": "n9heNsmBRrvu16hL6Y5UcnMsfddsQbGHZ1XykKLREXrvhisRX3e1oGBSMoD8jMesxmUdAmrR8JniScdzZra43jQ",
  "key19": "P3fTTJJDKK8Fn1gAwX1nmzEEZ6NcWvqCcyHMyudJvjkmiFA3BBzgpEKHrdKeNWrQB6q9X9vatr3bEQhNoSXNovU",
  "key20": "2wXL7X7dQmoSyeNcGFQ7bmfDpMA35JJdDNYAziMkJzNyWQToVXbCWPtCrp9M8VXELXMNe2MaN3W3SfoYvXxKx1NB",
  "key21": "5NTzyznCUjAqNvJx4ygwDfrN91JhyYhFNQb3gFYaPgtAepo9R61qbW7sbaC2inn23xvNsZW4yT6WPomEFK5inyVc",
  "key22": "vUvx4avgqXCKve1oKdqafmM6oYJSTXWxQeNnExVjpYDQNuEhjSWn2EP1rWiuYgyETPzmQuS3RYFvt4X8GMFTMFC",
  "key23": "3vZsPRad8FiZFn6JdxjJLqRiGBTyYi2ZwjmsCbAxhDZ2v7xHnmvvPAuMJPBUmzGxTiDUQaeYTb41KWQXg516nazS",
  "key24": "2rmUxLmSDRkuxfH8kVUCWKATtdTPjVi8ebmL2htowCcy9SQCd89DjjNhuLRPBS5RZUc7uA8ockH2tW1Gf5wSwP7e",
  "key25": "2S7e2VUi6f1qohgGHcWoHn6DhVRi8MY4avYDkZC18dHh6VDRimKfmGnVxA88vuPZTQ7ugy1qCNkx83e6SQn1gpDf",
  "key26": "4N9bDQKxSDFkdNaT8NhMsD8LDzK8jqYftMtWpKS2nQDAN4Kqh76n6vCw297NXWZejunDiobstkQDEkbps7ZU29mw",
  "key27": "42Sn4jFU5JZUoRZcGfQp2YjjC2D1xoAtys3vsbXrb3LbtippYeFuiMjRrfkhGdywaQugn1bmcdJbgKWEAqLVYgTk",
  "key28": "5k4dQ9D39KCV7hZvmkEFFy6du9m6bftw1dNbPmPToE3EWQMSMocKTvXeoGyjVKkuQWM1R2LJiBRHUfyL2VuoVxvD"
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
