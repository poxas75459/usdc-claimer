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
    "4MqqdhaViEdibwvZsh1GVedg89w4XcfG5Fe8EHAzD5s2UQYfpe6Z5ZDdC9McY385VnWtEZFLzTeXxRQMiQTTtAFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6rRKL2BFzq9b9U2ehPeP8e1ATrJgNENZzZEeUFNPPu5hkDFDSMe9WC9VSoLcUYo98mo9JoVLnd8YadrxDaNjjG",
  "key1": "4F2bGbiKi1ToYCHLVX3oEY37nuwGqNud7qPrf3Qcy4p3Z7fGL5tDPVRgMsdchoiwFJbfE8SqBQ72HipuTg4mrDB7",
  "key2": "5NCjBtmMgJ3K9R8fMhgr9JXMBJ1UaSkgG8rM9qj2dpTGC6T2zPfVRjQsRG7oU11Yb3osARNyb9YM9VdGQfHgrtbF",
  "key3": "5LAdM71SRnZTYEVcqRbP6Fk5FjUQ14pVjQFbqBRCaoiqpMM4FkmSBEYKCtq335mJxBvju9BrfUJfxw4BfTttKvoa",
  "key4": "2zUCCYefyXwGdr1Kc2mPZ5AentmzyvPBp67aeTafgpMMHtd8obMqLyAi2F212UJjTbDLxEBrguLvSXC4t6SdQ4M7",
  "key5": "3yyG8FWtsRWTbTQzyQj7DrAPGw5hAFiQ5ZcW1XKSNXPPLd5jiMfi8eJsuqbVmUNQz57FmAk3Uim18WqV1ka9os5Y",
  "key6": "3sYQdNC8Hoqm4RCfypvqNR55g5rnXrJ3x7RJhVLau1EhsudKL3XC9q7kfcsbmgruHBfKErUz3vv2x5vqVbX1iiTi",
  "key7": "4EQdRS9dzp8iDjWZCUkieeAky9emNc7rZSizKNMADVqMngU1c92SnM9EuUKXVmqa2JW19tSNiWkVbbpNrw2Wkoz2",
  "key8": "5Q1EGFzwReR1fnaYzF13Bt5d4MrY5N9RqYLnntSGt8UzWA9z5yQwWqTLYhGnz9U5LPWUtTvuzPJKc9rcXU4yVqBf",
  "key9": "5KQbDkcCGRadFWjL8hDyj9UPXFPYF5P1Y7QnUz3QEoM6uKWGj8QJYQ5p1sdeAwcvm43c4voLNmQL7xrbGUqXiUri",
  "key10": "eoeSx11U3oFYEF5yZHiYCVpUJw93fP5rv8TKSCUwWiEhUtbmRAYtZsaVZsKRTnaMxP5w7YVNkDF6o6akFSL2DBe",
  "key11": "3iWvgf1AnRJyiaKp2MHW8987ZTLH274euYVBoKg7J2UGXp8eePsXy8yaUEMti7nDu4Z2uchUP7U4RhncJ3PhyvEq",
  "key12": "5ALyvKtf5e8kfm6eLYsoMApbTsvjTZU6MpqbdK2UjV9ZLvVwAafpwdi3gF2yxKsAJRoJyhboSudef34KeiAQPHMk",
  "key13": "2SNpucBfB7sH1k6dU5j7uiypvtGxB7Py4eLrcoAbFRLUtyf6pZMqvPXFVXTtmKogmVieYcjhgVFqqLq73w5KWUuN",
  "key14": "5XTJcC9xMuKudsnjhTYdzmSg3nkckLKCytt7zwNA6X8wjP1cxoqRbidzw1RzpMu7DutSiUbzxXe5p4YfWfm611XX",
  "key15": "a6j3iL4VetDMzp4HLCJLAexaQJRSejByqKiswoAyeQBd4UFoG2KxJgMzqhaxfjAR3uwhWRBsMcB65XF7nyVAXsB",
  "key16": "4ZiLzRSK3Gx1pThHwLVGjkCYxL14WcpTFWS1gme355NuGtBWPHAATEvnLC5mjkyW2ceCnMLtcPDz4g6HXw5ghy8y",
  "key17": "3PNfL3TJwdk9mAcowZ8xiu959L3YF1aHLoGHZp1xiKwvd1EvjhNWg56DE4bCLmoBVXhdsKhGYU6wkpSjsrqcjAqh",
  "key18": "46F2qNCApzeWutRqZVTWpDoziynDpe9hLcrkLmjod4onxkMUaVnKAyrigYMFXPmXFEby5XEAqNgXJ2oXS7z2hmsx",
  "key19": "26wjzvA19vVCUDmX2t2zXKPhLcUoNkfg2qgsrKqxxWRUntJ4Sv63rc5HGYkymU22jeNAddSZmM7uP7CFJ1fP6F5G",
  "key20": "2sdDipc8p2GWwPv7Uhydp39195fL2mB4FdAKvQvFhma3phgPKPTVTVfY5iutYMvi8hk3B3GncHgE7GdESGYzjS9K",
  "key21": "4BYDMHtd4EuWkryc2zA2Hx2sAedF8Fht3jkpywSnoN9bUr9maGF6FpYBKRu3WLzHdMrdy5m4nxBKkvRDfuas2Jk7",
  "key22": "Q19ZVF4gtGocHv7vJQnLeVtsWm5LFhysmfAwXuTH4JpPP9pq2Hrv4WuSzUFXTpfcSezWLBX6XAVEV2acZKxw2LA",
  "key23": "4LxFri9ekfpB4aiNGG7TeWmdsC9iR4JmNsLLYgTU8HtUEwiQbHYAFbsDzjv5Qax8s4k1HTaqNTfBUJed6eqNGqHn",
  "key24": "Fgk8YHVGv4XFqbhXyfm1UtE1PXpg6vhdEC5qdKMM1k1Fv6b9gYymu6A8yEsBuaYEUFjUvAraoammrXeqySi8Qqm",
  "key25": "2CN46H4wL2DYf1hAAnZjs8EaDCx2skfibYxCoh47HHz28hQqB2xUDvWJnhGFQtXfPB8K7puLJ5iy3KAU4zgEimYu",
  "key26": "5xgkB3WQUBu1RT7uxxhTZwGEWeed9gH9BYWzUXiF5rCuSoNNwA5vL5jr17aFrHb5ACEgBXx7epmYPNv4ecpvUxeg",
  "key27": "2DoTcKsdF2d6pPUEQDjymeqmBSn79b75HjU298ryQbrikB6DogawAsk59gMZytLdCsJJPdEQtNS1omW1JBpFkhix",
  "key28": "2tzLe8PX5Sh2g76EKXVjtTMHXgYdpU2WEzHeSdf6ubA3rLjBHLFDwnZ91y7fVsv5H8myERwx3t5neDoeF2kHFJ3x",
  "key29": "4BaKNdQBwCarcidDoUZsAJmVBbQjMaT83x2g6TZ3mauahNp37QcyfcXhp5rMVxijjm5gAoAxS3zEWYiGbKWc9TpY",
  "key30": "kxKhkfwKh9wt4J9XhG6MLvDGS8WYoBmvczmiso2cJgtRCibNmbCEWDguM7dbYuLor9CP6Ueyb6PhNGqSVinR7Bz",
  "key31": "4gHY8QeBLNYrx5RhMgEgMe4GRzZFaN6Bqt4n8V43M6MNQQGSvaB5SwW56Q9HfJqSM5rXx6mWvTw3osSw5eQM55kW",
  "key32": "53tALAnPZSHbaAZRFGAaYxAzzhxFaqyXP4B8CuMFKvzFmFknTx96siJd1KPwMhykjcCmB2L4dv4UcBfxLwHxtdtp",
  "key33": "391Dn9Q9moqCn4AbpGdRpRHTgiVzFrZqGdjSgQ9iK1VuvA9cCrzMtJMKVgNZLToLQ267Hq4iYZMT9QjSHxpeoobZ",
  "key34": "mP6vAt4A8ea7TorKY7nJFV8mDuEF1MWPPzyFJYtxW4AEYkkzD9D9am8QnWbLuzT6LjDTiH3bT7E1jvv3MUdt1i3",
  "key35": "5LYdoL2rMJnJnz2tAVxGa7e2mh4FwJ6y8keaqGwbVWe59qs1TDW8QZEyABKLNLwqjN221GhBuFmFh4J82RAgV2vL",
  "key36": "4RDCpko1ypi4LZJLLPEndu298JwM7CHgRRYg4iUcvmWkeKS1oq4tiazqBJ26kvLyHQCn87fpSKSEoDiSJB449AJn",
  "key37": "2b6Ur5nmtR43pQ4CuPi6AfFwG1hPNoowQESQHC5zYfDbrTS78g7BSLGH3A5gq8bwhskHpR96HCL6fxFYmDiTwMEk",
  "key38": "LdsxUz1Gwp1X8qkw3A2ECtZvt3aZVaLPuiTi7HquA8VCscmLnTifemA8EQrWKX1E4U2cEYk3WbpLdcPBQoLXnHp",
  "key39": "2prfESfZyXedb2dop7Gu4NU3BaJBqwJbcxoxRAZnLj7XAwggP8e5kj41RUt6ZPPom3XUiJ8KxnPXqnyVvAkmKAkG",
  "key40": "3VjhuTKf5uEGuX7YYfCNGiw4jJPJneMcP4FDo59B9KxUcXk2r1Zc2AvmEEwTuPjkfmo47mQ5W25RgS8d8U1GDkda"
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
