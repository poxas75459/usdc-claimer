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
    "EiT6grfVPR12Pypr8ZeugehKFc1U8U16awYh3xxcXcgUycyWggLZUS9geNNn5RrCE6yKckSY3aKuk6iLwdJMneo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36uD5STirLnJvAmwn29nT3vheAmrvdbdnPByADwpZ1eKebQqdKdRkXVkjURBYS86c3bzevGPkKNSKuG8hKCJKpp5",
  "key1": "5fu2hxnFEcxnDag1VMb1cNJSvsLTKcyt78QAZ1wvXiHP8bVCRWvnedoTLcBe5aZeMGnjEZZaPvfJZcYyr7LeGhV1",
  "key2": "5ogkqJFgD8pk3Sp42eAhmXhKMxYSSweKViejkeJbsrPTxATsJM9GQjZLhm61dGCwk4LWi4QTHwioT4hdL8saiotj",
  "key3": "5uKv4RWwhSpEJeq5Xqo6Ao9RiEbomstHDZorWmmMnkjfi4UsRqssvZGKPVhd4ueuW38g52MRaDhKpQLiB97R3qbx",
  "key4": "4HyFS9aCmkaMqax7ukEUhU2TCp4M3cWmwG6fbjzBtNsTyFdxTLEWuLJU3H6dhQU28biWRgjx6XikptobQdgpy6E1",
  "key5": "65yb8THehiMZBHgx4Fp71evqw8qkq99qMJXefAEExSDRcFNZLw8xfSccccsfUzS6ZrZFKiXFZP4PGETwDTvejcRz",
  "key6": "qYggywVTWhp4AEPoUp9TnvFQTe6ik1TvURaUSoYkMuogyQSBJfEcgKWjqXmK7bU474u7zbivM9ywQkSKZt1UjuP",
  "key7": "48eLBAdnQnopscxqsCv92bSzZiyy3B1t9ZVPF23iUvXMseNnp9nRfSccQThAwRK5m1Wg6qcLnh1Lq4MeYBWN5Rno",
  "key8": "2GzuGzAhRHP3qeii9XA6gU6Ag1tkeh5ZydU6zBzbYMq4zH5xUPWK9xPvRapMuYEs4hesVYW1tyuX2Swf1yVccCmj",
  "key9": "yj3twLHZbsjAhAx6k3TB74NKGb41VyrJmJPLXR44hqiVFzUgXxwbaU8kahSpwKmpGmPgxfhK6tT4NTCuWdUKeVY",
  "key10": "4xYabQsyxHAefsWHmDNxvQ7pJxAM61YGmyemMBSvS3JC2RY95S4VdMC6Km3sLtJ42re8YGq4BuswTMHZLEx9KSe6",
  "key11": "5EUtZcZzrw8pj1LwfGsmZSdCWrawihzBmeYn6P2HAchpKwS7QVvPALBDU9YXdsEA9XAaaJNxJourw197965oewx7",
  "key12": "4yXX4FxpaHGoMtTmorWrNGx913wfSHAQ54kmfrU4VxUMAHD1Wi9jedwP4hBi6xQFhZm59R98e3tfdGeDKc5iQUCE",
  "key13": "5K1M2N4DqMPw232xJ337HsDc1nksp497VeXUM3YxvnGMP7UjaxmUQVU6kegx9Dd8uJCgCUmmuiF3Rwi5hNe5Tmtf",
  "key14": "2wYHeL81kicV5WuUasfdWswuPjdPTJw5RtNMdSqL6CMD4nq7wwmEuedAFduk1KpVu8jU1Bupyt58K7KxkVpaTwQK",
  "key15": "3j7mgg4BE55ZwCrQEoHSqzdg3DmhNLMTzymqqUJbKnzf7Qf7ckXs5u16jrshEkxtSc79ejHaMFaR7KytkrVKKHsj",
  "key16": "2GsDTQ9ZZt74XWSAmtsEkinyQiVsk7oKUqeb1FgmFoUbL179rLvnghrpo8ebY7jZ2eEaAnYU38eQTP9RGDTe6npJ",
  "key17": "2g3abdCtDD5aKZXkjuzr3hig265KaS55Cd4gPw1nrqgVdY96rkQYM4qSNixtneuSbWJretgASjdhkTCmsAMnWAvt",
  "key18": "tA2tK3DnGCgaikzrfqgDunRVW4LDJKTFP3vrzGdtFjBcEjscvM2EbCg1m8wTbCu7tiwRUVrausYHiuVdRcisRuf",
  "key19": "2VFrAEEFE9BXdTiPi5b4sqfhZ7k2nC7fVTdzmjwv8ofjstQDEk3N6ErfhhWqgwDzSMv18RATp9HVqvcG6MZaP7So",
  "key20": "3xHmaKQDHTywmSjRz2Rv82jcG3aZua9en8MP9E8BWiSP9fFJpMQsVkKhsKQM14wZppgj1fEgaN5ZFP72peyt4Ee8",
  "key21": "5VXkxaCwXCJAQSXzrdfL6NwAUtHTHV45DUBxEEUq6b6LewSVxJBhQs7pMPaG1oNM3YmvLhjtWbqPjkFsQgjWqeKx",
  "key22": "5f4tzzgE1QNY4gMyAdMjVVH76nCvYMtWev2dJyKVh187buequ3syikUd1SPK9gDP5k9Nfk9rSHf7g4VcypKApd5m",
  "key23": "rDkkbDAHKAzBtKhJkgTghziyMyWrHBmBYmb6oj55bXEjoQ4724N7Nx2aq7LtZJm7N56mQnjihP3d9efETqCsJhh",
  "key24": "WtRmDdVwgfHNvwxgTSCUfYVtWXX8ogySCCuVwscwfkMTG6MXP5wAAfyKVDYFnGV55GAzaYCUZUUm34pb66wn3Ca",
  "key25": "2hrTLEf1q9ZQLo1UgojF2gr1PdAVp3zdo9apaPLwmRogPmZBQoSjxFejFqo9tWMk8RZRX8iMbB8feH5RVzTFcqoi",
  "key26": "3e7fZk3RHo2Cn4Moa4wUtt7SPEDhKV4nnXjF2uAynRJqPpAHQ4wY3Y2TqVtEeBYCSCjNCXViyyZ7PYvqBSmcr8qN",
  "key27": "2hvEy5XMrojE9wEMKUdr35okUoC39T7HrREAVNhJ2eHCvC5oHug3pR6n1aEb5MvnuYVbmg8kiunfw9ZNCmftGEhz",
  "key28": "5YpR5zJCUkTF4uchYyWNCi7Zg9uKBkmHgA1GK8GGGph6aYvMTMabszjJEZkCrcgoJkfkuNMGFR1dXkMbf18cx6fw",
  "key29": "Ed84WEqjoEJmDhAxWYCDB8PsvbW3XyPJu8mWXXpS1kcXs79yM3MPu784NX9kmbWkvLv2EoTsawsxuHkwDNMoF95",
  "key30": "o7u3KzZvB8p2RT5kpZkjYDckdA6EHmtY4tU65nN4uZTP1TkFDu1ME6jXz6HBWwLpAaufaKNy5bwQ9MAWyy1d83Q",
  "key31": "2vA42MqVRMQGWBfbspFR63wrUyqEgre5CpXo9x1LiddvdrYKbw5csFbqzwrRQajznsp7kUmCZMwRS7pui3zz1y73",
  "key32": "4cdLVjHuG1vgyJUueowPdQifUn14KYJhcShoeXyc2336tBKsZ5KzFoUSUtyYgf1koejUi8eVgzDE4mmQnFTgxt9B",
  "key33": "5qU1sVdvjAPNfnD2H2w7Tk5HbN2NG1H49okFogi9RMcQLohKGDX39yMUvamTzwCrMuWzEWCV1dJ1D1EFc1VYKp9A",
  "key34": "3R75REpxvJ1QBhw7KhYmW5vVGbVSynfHihmS4r8wrKeS2nXfQ2NpWWjij8ErBujKo3yXXvw8kc5qy1y4mX7wJzgC",
  "key35": "43gFpgcVwWATqXNDXN7BDkpVDqJ5cX3a85GEsEkn6BhKt4hhWTPXVAwZ1d1fpVmJEaxUB4bK7YcF2hNTK3vv61pD",
  "key36": "56JSk77F8k9jaBbdEfqxRN7Fb48MQFzu1kKX1icNumibEpH1RKvjX3dAfJqc8uhDBc7HCGbTCVqDjfon8Y44f9p2",
  "key37": "61Nd1WAcYNMh82RDbCwXfZ39z1DDmu6XYVFieiArPM8EzbvghUSq3Qiy1M1r1qx5W8ok1QSGEXYBQGVAUxdV9sVC",
  "key38": "5mzb5HC1tZozLLJXHhtjifdaTjsbLUGEJjzyNxDmzqkgNYvHXYSX5xhp8hvxAaooc7cq2d9juNzaw8ieZpmDDTbP"
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
