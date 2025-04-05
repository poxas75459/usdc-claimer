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
    "oqJQ3DyuzbsYzjjM8PuXnS65GCiCLcm3N2Jxbt7WZUZybJr9iPJMMJSQG9Xqnovu1g2ad32RaQBXPWrGrJKU1ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKv3UUQF82H11fwPWfxNifiNyKBxtW5So72nvi821E6c6w5SATFHFXxxitL843ixDfQeU8ctbSWk8ekjf4LBH6J",
  "key1": "41GvQk8EWrtTHZsFZPxAJCZ6EmEauGtU9aLzhj7sExi5UAD2DZBjMHFdtKQWDhUsXeFQZd3ftFAe9JFxCjN2hUjM",
  "key2": "jrb2EsYJCzx78SYm61xyogHmkcHAqbi2JgZYTxb9EWBYZZYcTWmVrd7DUtTakGA3qjjNi4JpU1xMJSkUttZmuUe",
  "key3": "5YTf2gE2Y1d9jhLJdGqzDuc2MsmY76i4yWt7LETBuus8WJcycgZJnWDZieyHnqtCZAfKVoNFokFGrxRqELWiz8KP",
  "key4": "24b5NibQniLEc9cqh8RokrUhNQF4ezScxD4U5bwjyfjfF4mJEyzRuPspmdwBctM93h9WUdaRGDzzGS33d7o8ZT4x",
  "key5": "ZX8jcuRtF8gU7Q8ooHB1o84V54VXNU2LkGhSEnXn1gerRRvQqRjyK3HGjfQ4ANb47UBD4yvfYJeBQDnJVDjWEGG",
  "key6": "5WNMPD4JqmyzorJAVH2jGCqyKWT6F1o1bmDHVQjDK4SfeQvuNbCQxWCSeFg665A4JEzkqMQsfi1d1MkoAeECeSwk",
  "key7": "3csBLPkuWEbxvCcMAvSnLsbXvoFLzT1eqzDsVLnJgfuQgE4cBcAnDNt7sVZwgJMpsTRnDD9kpazJwt5QZAuogHjF",
  "key8": "2bsbWX4xDyfqZsS9svcRpdAeq3HzdmWsUyP6UPxnSLTSvByRqsbvQaCSQEm2GNRfQvFvrMGCtGiouEhoPeUWGVz9",
  "key9": "3z9ReWMAuXJQ7pfHnJ7EQs93ydvPYadntiPaj2jt5mt5KUTSrosjGt4aKB5aDRgCxoYPmLtEMacX4nFQph9pcioL",
  "key10": "5Wz6NdaGu8Cp5a4V7kXUbfLMGE6GV9Jh26EeYgm5PiT2CMY1MPr37tZqcAC8xeDbC3Mvqd6mx3EwqYygh4GmX4H3",
  "key11": "63uEcg1T87ZziN8m763qLh2GtoFDssZZ3tYH82q3tcWjJkYBDFUUiNiUUAzjdpKpgWnJEGbf1DRZdnTmS8WyJzy3",
  "key12": "4nd4JwXbmDxi1zSGS5EaHxE1J8qF1Z1gwuz71a4rFBXjfNf9V9dDEn4Jm2EiuaYXVSuwqjrw46XMbTNFyo3gtohZ",
  "key13": "5bqA2ESZg6ZsGJitUYLbhgvTwT2zNCxcbPVCRJjLgUK1yP2BaHPHfWjDx7PkLotzs1DRXk6BJKQ4FWNUtZPCcbwo",
  "key14": "SewXi2iG1Ejy6T9Tiom2L4k3AjVi9SrPKJrmCYaptQPkHExL9fAKZSZEmE5Qh1VcrDrgzF91Vgd28ABC3RcDX2x",
  "key15": "2XXyr5aTxdWfi7RgQeRqg5TznUyYya8BivpG1atNdV1qpgz618uZVNJAtANPx73jd3jA2bvNxepEoEHNTvLAKGmR",
  "key16": "2AiVm1nB5behpNcsctr6Dwtvp7JYdKLZJME2MpBtgtfZXHcXZeem5Z3p2qjR4SKpmXf9YkPvndYyJWqJmM6xhQEK",
  "key17": "665tdxtCHGy1zUYNopM9ZEdGAXMCT6a9981Ztmc5tUQwtaXpd6vdkKQVmzBGouqTZ7fxyAQDEGbxxmKpb8U3XESh",
  "key18": "3KV2Ashe8qGjbNC11Mn37HiZyGozbTmUhFBXr8QmoLhagEhSErcssLg18oxNJ4f3yZFdDwJP4XMQredxV49SUKQf",
  "key19": "o4m3A4Q49b5j87wR2q87SdEdFUJypbTPXvVNGgfR5vNS4sm5Y6oKTLQp1jF53auSyUgkCvLsoaY9RBB7f6XrS5q",
  "key20": "4LWkZSMUDopK43B61cpACupaDZimkkJKG555Un95m451t3PXHE6oaPfLKdBZFb4tC7tqafF7TZw8BLndLr3GQCNG",
  "key21": "5CgaARB854BuVw9URgr4HnLaettSFH2RTCFENxJjBCD2URKXTy41xYXV34z5ZdFKHKyVQhwx8zBENpAABX77QxgS",
  "key22": "9i3i8jgDCndHmLwfxksnUu2RA7Fp43uXtQKLSYdGTW2W2MZ8E6hTPdYP6gx8sEu9Jny2Tn287pdHcTa9VomMeML",
  "key23": "3qKA14uxjyAkeYatWmyFWe8iqZjMgqgx2DiWYZXuLGnVK9dEXYWiktd7WGECCJ7dx2VgVXZU6t5RXZt4NUHQnKqc",
  "key24": "3RMrG5qemzTGsDTi6aELM4fm2PAXDEuJx6Y45qcBMw74BNrCShvgiv5oi5GSGaZEkrZAZ96kPim4CfwrCvLW3Ub2",
  "key25": "4Wcop4yCX1JivabsyC8Gh9aZT7mjQD1p6PAhJmXpuuaMq3HbKJ8GrWGAvaSU7LEnLgSER41qPBS4RJeNvuQ4g3qW",
  "key26": "3yhKzwdQJyZMiJnqTRL4GAe4oGNDcESmxLZayDQ6v8itUz1Arv3znfyP6P9oFEgXveTBbLjGamquLFUZfsUacVvE",
  "key27": "3x2kfCAZNBzFbWNmUzYqkZ9sjiAYuSs7U2wd4zkmUbbzHCn8C63nmQcxJHy7uSrAUuHuNawDbRgoT9WfAQVQSWNf",
  "key28": "3WZF4VFhpovQkk3TS3YxbGYtKdK3cVuztSTckSfJGxx1axaB7UpXNuYJaB6eNpg26wqbVktUxvaiu6eTTmtdvXGm",
  "key29": "33kSNcfp5CvdPKxoN2BaMuAmHN9HN4MeLFRKdFaSRgvZHYLP555xoDMtKeH79NDjxvJXGwN75dDPsWwpSTUWdjaY",
  "key30": "2wuFvq5BK98pAEFMhGhpFNwd3t65G5Hr5uNr2fcA8fffLfgz1g7fmHwHeU6oUoEoc9La8Ki24i3hxGAQumStKS4x",
  "key31": "5zxV8noXsXJsoX7hPvcbmBFgVPtFjd3X167p6Poq6dDWfRdwV1GZxLtLeoYbc9DD1qQBdLCSSnYcyanfqXxqvNo6",
  "key32": "xphy7qYYZqfpNtSJZ59NvAjB6d5ZjrcQBRbBRHTxdg4jp6qnXxb1KzrTs3TAL8aEtdKD3W3Maze2sbkZq5kGk7h",
  "key33": "5DutGAvuRwM9AwMXX3NJHoRzeskKNrv1yTojKUn85E39YiBFnALzDSby9kTLRzhSQf387GXS1Dcb84GV5Up2USDt",
  "key34": "5tKG5tLsDij6G2Re57nfiETaAk1Y5CMsQbdzt4Cgqrw3SGtqZo14u9uREJqQi3tucqEtRUX1b8nufBaqqmYdjXZe",
  "key35": "FXRPUtnVf7UPLLBn1d7tJPsHqLaH3ygMQUTDzuudNm3yWhwyAbn5djDW7ZAU8PAcNCy3LjU4zpjCbUXiEf37zAa",
  "key36": "5TBdpfUKKuBxWPd2RErvjZENNCEuC7hjZiPRwALgFLzUx9MnFAcRBkLQm2mZ8dCXUVxzieDGHrabXYpecxCpEsqZ",
  "key37": "2ftWDU3AaSAzXzTuVEAegigJx4Q9peSHVCvUjZivaENb2WiidkWKPE95wqjGXe1Azm3SvnjxkV7tDQDjVsK7eXM7",
  "key38": "5tBrHq9i9WvcEK896aL6SJw3a5eenUSgW4kTervmWZQD2ZMD1sA5X41ZaFxRZrBFcLBbpbn8zmS8FHWe7fsxGqAM",
  "key39": "2GDHgEXCfqvKvRPGkwXB169UsJC4GdwTWAv4gExyuBuDxE3dCou4mzrQcW5EsUN3L7tqPxGvqmA5GY6DtS2F9EY2",
  "key40": "5Xa8Vu4RYSZJXePm7V5Zs8fHS3YxrETgy7rci7d81Zea5tySsgkAsCTVLkG7nqMfNXPeGKFsUiSLfjfXeDmZFiHh",
  "key41": "2TEybtRvyYDWUKA9UtkCWj6Khuv6TxyBP5ScMWM12Nh1h7WQtZcmTPSUGNy1bWpNrGqevJofi7FsVDEJKvJmCKNg",
  "key42": "3RDwFsgCFFsv4ADZE3nUmEJuLQtXqzyfAYxocyXtkSagAxhBg7w6ztkxSPzxfRyM1xZbp894wX3eRY68tF3tEjRr",
  "key43": "faDwETf45pdbNA4Rx5j59mgfsHtF1yqS7pXLjgKyr9EWqYrGaWvkPUciQGMc7jnppjzfGyey6v9BNzGxV364jxY",
  "key44": "4qyscKjw7UypqgfdcLkP3qw2wu5ePEtWZkUPrtv18CzEFkoGsqjiwh8xx1JoZkFH8xg3JkNKx2QgBAvS5ktXVJpF",
  "key45": "3MUEDrDkgM9DfzRC1VvyWeLz61aUnKzc9w5zBcAKLahJ7DGhp8bZwo4pLeWB1TbgByqCdsfgqkQQG1oVmTA9fudH",
  "key46": "3BoufNAU21oq3P5jgYRLwzFk7wWGMXZCKXwnbYjaF4iUY14krRt1hupqgbwsh1n9Wm9Y3piegWdRGmHukRqgxbpq",
  "key47": "2orxAdRSC1WX7gZGWPWpdoCcGbjZxBRU9Ah9nqQCFS92bPYuKeNL1Lf3i5iYuEYfKnD1o8XgX9dH6PoxCv52RgS",
  "key48": "UpwitFjPoSkzDxsW5Pgws83RusAzQdig8v89f6bk8RZg5YdtvQmcTn9p1N9FT2n4ntXZhkoXBfvkaFH9DTAN3jq",
  "key49": "2NmTMMJbCbENiaj4pzZKpbSWsRGS759tv3nPeWj8vmgSUkDWuCidHDhgtaWKKJdPk28s4susU2LCzqQCGbRibk3o"
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
