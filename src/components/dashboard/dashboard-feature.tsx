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
    "38q6ej8riu6t2jFfFbL9gGAK3c8xKJbGEZfqQHphQHG1psuYeHUjFnsQ2FdtTJ93dKAtLDKrKpR7SgWQqxCEwjfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sdTLqJuZZWhisY88xbda2WbKXBS7gkFxPjjgUvwysea2VKc7RT7cneStVrcBP7hv6QMoPJQqgKzFC8ibRrBWwXk",
  "key1": "Hsu5U2d4G5ueRouZB4QgbnKxcUWvvdjSKSFpQauRLkAJxT4f929pWax28cru5wW3BvQSUamorRHcRyxH3noxvgs",
  "key2": "3JXKio4TPdQ3KRLa6MFcVmdQDMkaqpA2QFDg3f77LLdr3nAXGfeuBS7nCYRxFooUZVbVBZvNZLSKZvB4GyW7wdxL",
  "key3": "ucLgceL4EXnj8qD8nJii5UR2Xsa5gUXbQ111Egp767ccvxTnFRGyxpPAFToLeaEyVPgYSokomkczhxFryxktykA",
  "key4": "28jqwMgK14RvTjhXDL1LPy2ofcqK9bLjPBCVonXHVkGk9EyfdZammuK1ps9LknnjgzpJsrCtHL4rwdPzCtePbQb9",
  "key5": "5hEZKctDJZ9GP7m6Q3dgKXdyMjfdq7RdCUczWvHwuXtagQDsDDEme7MNTAAyzantXeUoH1pRZnN91HRfduJk9GaE",
  "key6": "3CJFefXN3WCsxsmnHffMYvZ8bU77r4jys49kq6ijB6TGCXxgNYxJbcCtUTPgWMuXEbaniPWnkGW1n6o63UxypwAT",
  "key7": "2zhryVk1GvEKS1ixobjju8m2akYCFsrfLPkfa6256XqN7JMqR5irDf9977JXygejPCmQU41WQ1PsKXgxaqe9GDM4",
  "key8": "3cu6wGFWRuvEk925s5LWouFNJr8J8oEXp6KUe8jcrdMHz1rLKCUx9efm2CKq6aJwdZBYc6M3ewFnthUr4Mozzsfj",
  "key9": "4u1BpBEjTLhmYbSLAJ6LT2QCB8S9Jb3UGDEDuCxFyKzzDdFUiyzzwKjWgVYHgXNw8jnTWX7bigfGQUTQ9GMZ5RUr",
  "key10": "3vZEvkXxu3CVuM2j59SZbtxAwz5L6skU5L53YZDbxXsnkJFasb7hxinyHooevan4en2iQSzMmJkFRoMpuXdd65Lq",
  "key11": "3y7mC76NLj4iJBh7kjHudsvmcn21KCUzfXD9LZhyu5rAeFBaY96yRSUc1ftNuVqSMF5vWoVJUXSUF8uvnWvsWiEm",
  "key12": "M5KzjgKKmgs7pMmjPVS92Puhv6SPxw49qxXwPLoF4wxDHWKCLyH9zUCjcpKSuNFxz6fQjKFdib8aw5Amn4fY8SP",
  "key13": "CKT6MAGQ5t1Co6FGiPa1aNebN8miHohb9McQiRRKyP8u9ngqbPn3iWV5HYQb6BeWX27gGKFLq4XmpnXR1KuRUHf",
  "key14": "3Yx1zhAW5mgQvHfN5RaNF5ABAHotiHJetCcAzgPLtn83bDKQJdPbSRN2yGnQHeLLqJkV6jDkJo1T2DxX7cQNjDmS",
  "key15": "4F3Pni4DSax9SCwPYyusxNxuqsDHLgnUBphVAcjXNntZyBsZ6rpfeaapdyTokcqniX8eya9EzVej7QdSCk3TBpuv",
  "key16": "5AGBooiSgJmYgtkgHx5gnKQQuncyTDDAQ2CukYFo7joHKyhLNkcEMDXjqNYMYYbmNyczAmZ6c4bMhpX96KiUjDNF",
  "key17": "24b9SDYsa9PLu9DRxHfVoGgd7B4adKZ5BW7ERp31tUmQqCfmqDH1kmuBPMwcjZRiwfJAADqZHUGCfR3Buu8kx3FX",
  "key18": "5JVtwsrKqgPEaUR3WLvvYnZCEJFfZ9HmX1MK6dXdgYdyw5Y6FfEQgyBYv8TvyAZbNVp1wFXHovgym2FJhrBDqYfZ",
  "key19": "mvYkg5aEtbzeukveFGbPVQi477LXqmAxyYtDNB1B1LRCeavNAVjf4QdT2utSRJYjqxwRNPrM8eYJuYVcHNQFycM",
  "key20": "Cb7sVcRJXieF478wqGeXxMpmedPUjBedEmx5Dk681eHdfxTuzFx285UuyaoZSMCUZANiqYHT3TigaroGoTZRi3C",
  "key21": "3NKYsh25hK5DseizAkPtu22xy9FGFNxGko4fF5kjA6z1TKD24qDowULfWwfxkvdH15JxFZ2wjQugUGxVcDxoUSdS",
  "key22": "3N8u58UeJGXtrMusZcnqHuoTdqkiToCF6coyMhLV3kM5GbYT4NhLh3q8tRD9nK4WBFCLr2u1fcCjUTh2STtdho56",
  "key23": "2sJVfrqa1cGQAkf25dc6KXWq8n5H1iiEi94fy9unwMZkcAiBBpB277hpEdyPzGjrSVMo5zan5bqcWb6XE2dQ1AXu",
  "key24": "27uqi8bFtqtVKDE1vLK7bC3n3SjrSGXeCcGLdtdJLyJPkvrdiX97zvuSgPeVxWP6cxtPKriCH8smoJAWPUyprWjP",
  "key25": "Bv3a8u7MWfY94qvJeyZZ5gxDNGMkLaZ64sk8Uo41gSizTkTzJTBhwgK2V3bmi5VxAxVjKvDGcw93rUrh8NSvXhB",
  "key26": "EqjAH9uzJ5tjaXQEKiTfQRAGNcj77uN7nPDz6qs6UR2KcnvN26HA41uEav9iNUKHnR6QzxFiM6v21hJwoiDrZTc",
  "key27": "4txa5AgPM9xunzyGQRS1ZvhKqL6MQ5o26ZfAW8Bo8daUmDKwAWXqNK5BnBN88QFbKgCGnv8nfkoMPhzt6QYz6LdU",
  "key28": "2ZMuyPAM8r5pzadoorAq5P27iNwg6FUon479KynKSYuCcnhHJWZ8SD4z7aFgPpmXXjsoPo27D9yVjetXz5Y6vV4F",
  "key29": "4NNVKkZhWx1Gbc5C8ZhL9C2iXv84DWNBQtc92foTW8iViYHVAyRfpTLU2BYfLZasKsR7YqRZkva9KubW8M3CF8uN",
  "key30": "kPJ2t2TcQgVGDZecZGubi66k8GiJ9dEFB1rMANECYN1CCdHR7Ss26FBVDyExgv2h1kmmed52UCi6KyABUjRWEC7",
  "key31": "4j4rUhEBfTFe7AffQ1GReu37Ruv4d2UyhmiN254erB1pVwSyzw9QxMZSrZMqEccombS48bagSt39ZVVncAhyte4q",
  "key32": "nQ4m5pEymPFDPhhf2gikzx9uBdRkk8nfD9tTQSYi2VunM1Ln1ncnRpeBpHEvZJNjbBAwJHMutfvmThJUYCfvcWw",
  "key33": "xC3Y6GxApzRgb6KnMPJKYKeZHBuJV4btXTwaX1Ra4DbQZx6SmEMbULFXnYeaywpcjvhsk6AjpBJnVjuPw17F9BU",
  "key34": "3azxnC2PmchSoBGmPgouNf3yaDZk1FtQCE4qer8S61vio49KntYdh3xKtHvm5i1oGgr9v6ihQsTLeqRZrTmmK5K9",
  "key35": "4Dpv48USvEcmRtkK2borWpwH96wYwp5cZcYuSNTjoU2JCK894U3h79uRhgrePQ3qD4nztehZPzyfvVcusnMo3wws",
  "key36": "2Ch8UJHLp5yHodpfPRdYxQJZuc42tAhFN4HwH3hG8MR3D2jqYQcmm49JkV18AGtHyDedqTfsSkFCFUaX6PJwq1ni",
  "key37": "2rM5pQZPrWxB3eaCT2rpKgXQbytR9C8D5gJw2u74YycHAKwxKc8RqJWESrKKmv7PvjGsT9TdsTKKLVNB7ALoCuJR",
  "key38": "29D6snW5y8iKe4D8S5NgJ2EMK3qZesaqXRon6SeZyQvXkUTNHSDv4k9kH7KAf8RRWxy1wjYxaZCAWinDDyYGE2FN",
  "key39": "4hudQLVCQ2x5smGX4GFawmTeFAmcC7shZDQKcgwLdFG4irS5Qx6o5g5jqTFN2F2QFM1yZNJT1dqqEcDB141m4ZUp",
  "key40": "5xPazpHpJx57eujzr9rgc9PBv3JVWnFuEKhWpoVaCGSqGKFdiZK8HrhuY9fztgzAa3pkatjA2QHdUykcLBBjTgSy",
  "key41": "4wbzAjT8irr63sZFjwrRdds4XDfxbd7HxLgGD5wYwGSRJ6YwJ7c6Da2b15cEEp2n9A48qi3iQUiMhfcr1r5hSeoU",
  "key42": "51sv2zA4ZtdjJ2rVsrtQDwEboK4ZHHG19RJE1d1Tg383Ge3i2gkh7JXdEJjK5tyskcuSKWZ5WLRWiWihrF9vQu8",
  "key43": "2vvMTTuHU9eHjUEr1oQwMAxHHBXhLKDYSeJpP9LVgkbj2vqaDmZUdcYmN5gmFdLtp1GSeb7Svd6etyMRyJzhmv5r"
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
