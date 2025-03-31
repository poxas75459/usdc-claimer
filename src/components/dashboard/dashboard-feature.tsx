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
    "4KLeLsz7gvRTvfGWfPdPGSuBV58yz1rtBwkbCQvLnDX3RRhoLNUSWSYGT2cNTxVDz7Z3HJHyqGyiNwMXzu5JiciB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXVMQgopgFmv4riZcri2aK3VTkaNbje3K6wvUAPKSa5jg8BrBiDucS5M9Xrcr8oA47sTFZmLF36GNoYPFsP6dcV",
  "key1": "64DjCzjYtfDu8uVytoWr1GsVWafAVQetP5Z2irYzk7NkxeiEYhCJNZE5o4VH8voUKX5koYGTH6qUyehPVvujE1y3",
  "key2": "2tKiDcRHFX2XtUz3iFXWLoQn6wPpGbtJUq1d9aYmigGHU98G5wQLand5P6BNyDGGi5baEKWyfeVjmwy1YW1hd9hc",
  "key3": "2NrXdXzLMsWHHmgV2MXK6MPRcAvDvxAyCbMxmUF4MUGG3qDkcHmSbshEZuQxBhQpCsnjLy4SWzn5An8pNSCVWzkQ",
  "key4": "2hzHVPCowAea9ur9w9EqD6DYN1SC6khp77Z94xbkaNXQv9GpvD1QUtkChB2YrdFiN1fSvUyEQmPs4b2YWTJHYtw7",
  "key5": "5kxmbhseG5CeAcxCJYk1xRzYYY6kTnyTtYKs8BUQ4TdtzkDrgpVV1b2WQ6ZQEnXmS2wpBBrm5eCbYDYSqGqmWLh5",
  "key6": "3ApLoEoucYZ5r64rFCWjbzZyGvkNp4ERq47MXazqDc1T35JFBxau8PFKuN7YPBcpTMF21xg26p8KQs7oL4usWFax",
  "key7": "5uVXRwK9twcLBeEUwcXsD7pEmHos3c61hEhmJv2MSVXHJjSbZZDNYHfeLV6AZyQNGvny1ypcEZoF1MEtoTdYHfEq",
  "key8": "3mzFXBSAt6dpX8sF36qzkjnynRCuh6ndvZa8oHidP7V2CC4VYP6CZC754zBuRSkf27NGrtJ3LWtgqJCgV58SX6Wc",
  "key9": "1QsiHv7HiLUHxoqbfgv6mi95Q1GqMgqCnGSbCUrHjdjpz3RVootGrSqP1CFGGQJGPrxZ4dSDXUSkVUm3cHJMaxZ",
  "key10": "JEJ6sPEsrdmRrVWAibPLv5BE2rfFqLX2QVki3mrKt2KGLR4SfSkfy1MFQmzGxRbQpB1kuXf3QNvzsK8Moz7P5Mv",
  "key11": "aqMcVpoxgkEdtgFXCNSqs5k5cejSSxq54bqZPgYNeBKXHkkc1y5T365DRWp2QDLcXMHSPBmqmDzv7ZTvZb24NkL",
  "key12": "5gLrzXxp5fx8Vnr26yKEPviEtg9ms9sgxv54A52jrpbrXWn9JNzdbRrHpJeAAMMTaiK1VPHVr5xe9TZiJuvnNDqe",
  "key13": "28bKpjHA7EW8vw1RGx3EPSS6ZfL2DE9E9H7PZUP3Y2WU3LGfnuFj3ka82TFj8D5MNTTsChZteRiBKKHUeJcwb6pk",
  "key14": "gHs26dbXJpSkX7tJjNmCHYSiWqTywhBxqtdQXxbZpvXP6WB4sgpKMhnVaNX7mctF7dKGEZobATMeobEvgZM5uEv",
  "key15": "5sRRksYvHaRBvqVugoes3yKeDNV8vt6dqjVkqx81s3TYXvWcXKVbBoL8LdTQUrFh3HP9QA2MSrGmwfg44VksmWEz",
  "key16": "4HRRrx34ZGE7mcvtq9C3vneuhnYiqyjDLX8ehiNaSHGMoXBb1J7oU6zgxPEbB2E3P84uKjpSh3XBdok92ZepbvD9",
  "key17": "4uDKnXJX3TWhzheBiqYo9dpUtvdoYZi2q3JrbKXoNiJBShYeFsnS4deB2CoRptsnBDTErpakYiuvadECkezLsy67",
  "key18": "3iR5YsLt95AocWmv68mgV6gNMEQvDayGaFzt96Jxcmf2Yqmit6yCqYBUYH6X2fZsGgvK3UuKD3oaVemkYbLmgTmK",
  "key19": "4hJ11rtkbcbMtmsScw1i1HrMRenossbfzqQWxeEUk6nG8EhW5d3XCPcFJAZDDmcFdwZcuKNriSVG4QP5p8FpG3Lw",
  "key20": "4MrtzPqycr5SePcXfAADKftPskn4tEjUAYTxaHbDbWDnnS77soqhwrzxC1zJeEKfmaSvMbQNyHQcNYWzhQTXNNBa",
  "key21": "5SLgYKCqKpnFBhuj23gQ7Bwy2Y5ieUEyLtciqwM3nJGcpavzVzohvRNaTjhytH5WwJpkzknpGSQ44fQwKRJrS9e8",
  "key22": "2AJgk4ULrNWLYFfWg6Evc4F53oTZufSnh47ieX65EorLq8DZPnorVBWav81ck9TMGKd9ySNs5Ggcs1fYMnWbAKZv",
  "key23": "4HqmpCLgwiwm86mBiTAcjrf8oHu4v6BTyzpNiRfJxRTs69PU4JH3oPheTWnUikiZ2w77ykB3MhN1qj4m8xT2UPSM",
  "key24": "4pk74BMrTCFJ6LLF8ufobfuYPjNNK5bdksKhNf7VUnd9529ygbKUuRa8doUxKsrzEdnQpBpuvQvXAJijyBbGcgBL",
  "key25": "2eQPXcpjmVE9h2CnrYBorJNX889cq3uLqTvucF1hZautX7LA9s9gymsffd1seExS9KyjBKi2r7wXJASMWNxkxTyo",
  "key26": "22kHW9pbThDsqcs4nAuAuicNxzpCizJjgkaG4J9zw3WCa9mNm3R2W662uobkVpxwWeBc56qaxxyTsCdw8NVPiJ2m",
  "key27": "4sDG27n9LXk2CcJpGv5KUqcPXyMR3YjbMgDB9V6sQJjNTdNvzdXqYdQbd5jjnNe911WJBysjLuGQk8WKjvjFL8wD",
  "key28": "3nUFo6v8Lujc26M3NRhReZk7dSDGfiChEaickKBGReUHCMwG5o5aGtqXMCZ6be9QL9sRdmaHJZALj9R3T9xZaycM",
  "key29": "2XKoWeY6v49iwkpisnHDS7WUeyKzhSKH51AJLR14Be874PdxDKjUxX7JMjKsfQ9rzxL9XATGrWP9xeok9f3FovUJ",
  "key30": "6553tYrax4VQdBaKaU5g1vPWvbgt8NhB3M43wPrKq9kCASKgvpx5gSLTsSj42Ki1KRuUNtbbH9Z1YeoEgBjiaJ3h",
  "key31": "3UUw4RV1nThXssRjCijVuacS9rVstELevBESaaaYEhTvSSKoDLuwDpp2ttoaUQGVgQ5qshXte29rAFCUQXbpkG51",
  "key32": "9YHhze6tyDVavVvUWMy9YHmNa1U98EsrfYrsYUQZGAJC1o9Rmka3NkNUxrSykhddiPYCBA7V2M45RwF5P9Y5YKh",
  "key33": "3bmYVTNLDaAETiFxwS153SUb4dtpfdLNVSsZtZU1FzgXYmnZVE5CYUKxENpRY6kd8jF2o4w56Vq3f2CgvBLN8iwh",
  "key34": "gCZSiYAU24ycJio9uKP9nv9Ziu8V2T77CFHRg26t373z4rkq96jVsxHBhQk9yQSh4Ek3S5xYa1mWGgyx1QGpjRD",
  "key35": "Rk46nts9re76f5F8Dek7sm9Bdncx1TbMWbJriSc6HqkUJHz5d83WdKXc9J4vZ9FJABT3NbFUVPrUGyEKSaTgMqD",
  "key36": "3w64g1WenSSfP36zEvAWkmKowhJbi83RQBpGqpTmvcBdfiv7dS7JtV1Gbr2K41HymKzjoC9pjRQNK2DVZSbX5qi7",
  "key37": "2CMXBfGcERLYcAaTCLX1dSfvjS7sYoT6zrAkR6Fc6VjxxQdRdVwyLDqS2mdfqQfbA9ELYUN9LVxiKEzEzcMp2feH",
  "key38": "2EA6AuBSUVX1uD3XyVajqJJMYvi86DKbTR4zGaTXaMcuCMVKCB9hPnsb6gDYo4VTM2nNhzNR3X4yJ9DrZHBvaqK1",
  "key39": "4uTLXVzGhH6Up8zEcLHwuBnfosNCAUSmkUxC3kG8AwEGrn53ZmfsQ86tAjRbCKsAdC7hHNcnk8EsMPSqgcKcxTXw",
  "key40": "4hSEFozND48RTQXBQkwFpfRot8N85piyNcJZCGVSJetDAxhq2QWaiWMnQV4MX1fSiSRQe9y3GgVJfynGGf7awDFW",
  "key41": "6bVeZhGZNZw7wtS4yiLB6ri1r6p9wMv4LvrKnFsHfP7u4f7EZfYtecDeL3A4suLzMwvZrmLnUVkW9jVv9nVR2uk",
  "key42": "2W7SiGT1tr1H7MeJDWfd1DJ3xGhSc2nqVHc3t9oCbpvhrGQyn9RUNXV1jDeAFwqoUsga9rB4jCavADYZsB6RMQWY",
  "key43": "NsBnfwscC3uaMtR1GLqrrM8xo7cHa4jy2tstnkVNPYprterqtfJ1YmzNDF1EB4mHMcAYsxjq9PBxUDTxnoWr1bB",
  "key44": "35r62NjgULKALAUGWDCJcKwsxMVmJkNzfg9bjojCcH5a8hz2ZoCSXemcMCZ3SHvSr7QYdUzsFRrjea9APEpmmvfK",
  "key45": "4RJP9r92tBhC893VAnnhAjyTD9uHv3ZqbMZFz7BqXkuSkn3xUNkeAtTKZ2nMSek3EuLaxKLQFUpPVgX5gffXYUik",
  "key46": "4ikNrMSY4D8gPKZg8Q33HCFtfPc3YwhU2t398SWmzvzdMUgxcu9BehQBfPJAmxa5JyCrTsEFcjEi2v9ah3fKaJc4"
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
