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
    "5MFvKYqRHrATZPN9JmvKcRve1pk3GuwkdzrA8QbqpyaBqmqbYr5BNV1VAZWFubvkHmNGAa9h344CNHeCvZVFpjLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHX6JfStn5HcB1rLHjFUSyQCy7DHYiQzrkpfPRM65WoyWPDUaHEKcUCCFnb3M5Ae1HiCD35boSPQbaCu6zD9wzg",
  "key1": "2U5fSYmjm4yiDRjurQTMNXzQDcWcTuJEqvR92zn86xoFhWdZH9BjZA27mS9qK6sY2JyFmbAdPMGD5vXHQn8NcCaE",
  "key2": "2Z4uSNNxiw9cn5NidsjZZXvHPySEjZMGdwr5aCniTHvPLK7ixJrwg44PN4MSKyuacAgnsGd5W7DZqjHPNhDBsxxu",
  "key3": "7MyCRBLz3KztkadN5f9K8MRxC9yhZrupQkRbNAjQKfGmpQWHpN5M39ETYqxtMHq9RAaiytRdXrvJAJue3jHWN9i",
  "key4": "2LRYa29dNV2wpd4iyoyt2x1e5CymjBsy8osHBfQtTwShL1VqayTBiTTx7t6Ru8PhHEnTd5CEU7wXsAT85yhqW9Ab",
  "key5": "jUeqUqRR1KLVSjSKZSyFM6ZzBNL5BrS4G8RQfgAvzBUmcNM9uVA9DGGvQdG5L2fiAgkv7PSZZytCNy3Un8Exft4",
  "key6": "3P1PUJ3zfrdserrdkLr4j5NDqejG7CabCuxQ9Zh83EGJZqNxXw9iiGXLfkjp2UFtwdTy5JCWoub4QFKTzHNKfgNx",
  "key7": "2Af8PeJhmBg2t8AzAthTaYq12jaH3LBGfQnquKgYq36voAK8h3GyKaWS9bWBWpQfjALsFA6MLbisaua3KQVN8LtD",
  "key8": "59UUu4x2FgtjxXWXWYgrRZAHpE3uijjb1Bp1xLLmxPyARm7fFdxRv4sdrrLvhnhuP1HFANjfN6wfacmsjpqpN5DX",
  "key9": "kkbjA4yNsf7knPS1DxxJhsME4sjSzTQA98UBnyyFiXSTsgKX155emcYSzXi6hzV8yGCg2qXT9AQo1zUtWjtfxZL",
  "key10": "4MC32NrKavUmHYy8AwjVAmMxNjUrE7yB1vExjBpxHvaXjYqpiow7wV5SAYkdZbrVL6vhY2rzTTXSCd1hJ8brqVtT",
  "key11": "3vM1WcrB4L82sHZxU2cZ7Eqdszg67f76BfJ1Ga9fSKojNupr9mLZaKCedsHFdzQ181CX4j5D9ap6ETycZLuok8jF",
  "key12": "5Q2q6KeuuvBq1wZkpKLkTBjk81iiM4S5VwHkc5pfBrDXn8qbzhiJ9jEEhcToQHxaEXL17BPjEsLNJPb66hZ3kGz9",
  "key13": "4VcAfDsBZw5ii8NscT9TR8Chm4SDJ1uuK1ubsWCcWP9HrxCqWWPX8fbXGah9hhfkjNk9CvfxY1w6iCn8EFY8aySs",
  "key14": "2x5SeAYjx13f5F5ZUKuFiEEYWF3GimyjY1rQQVEKLawS7yNc3cZEYPGBUdM99zdYve1uswxyu2HSSXWqf6z3rtSc",
  "key15": "2cx8g1b85Aau8jYwNEkFxFun7ps95VjzM1mowXPFKKj2CZrhGgYiF1uHwUFE8kMwJ4rNhDbURBo1dQwSJn3ptek4",
  "key16": "29Bcao9YSdXWLdvEx6m9xtJaJdusztuLsad9iFxx7MAbJqwjBgdqQTFJ6AGSdBZaF5k6SVRJA6GqcSZ4tHSkxwGr",
  "key17": "b3FFscMgGNhnDpQfV8izso92NfYho9bqy5UFWeTuArieQQaYJ3bN64BCPRvALUz68pqcrGVNQ8uUXX7N6LjBCoz",
  "key18": "4wSc3Siujmpw4jmyRV4yiiQGcX8JH4MKCS6LdiyUaUJtow1fDqzTpmiTKqZUFAVB2Y3mycx3owZgupMWoHVjaznA",
  "key19": "45W85FwwwsDENPqAng9gp96hwcYYH89ggBe1Vyh6zY2qm6nHia3J4mPtdHC36ZGvQs6UcV4aV3iz7dF2sjAQxyCm",
  "key20": "4GFqKaexfndtYpUhVfsNFoniP9zVqKaRxY5gfefcoqTiGaCrbm6fvE2FupCAmeZo9mWqNXwaCZwTehia61QXqMDu",
  "key21": "2p42ZQ8jZhy4PZKpRiTPDYcbomd3NuJbLx4gS7ANutZjf7LM8GYyjbbH4R9sFbZcQRABgZ5hBD3aa5hK3HksQnJL",
  "key22": "3iS1f5aAiWhS6UEjqwn7agPGqjbocpUFgMrP7m7vzauhXEobfiekPiW2YQtZBZGNMNgsB3a2JJpfp5cn8nL7qe3U",
  "key23": "5HMNJmKqGDMp7WyzoA6ALZx3gvXkDq8DkvK7SBGkdCdwdHXKk1EL9R28pjPkMvMcpvTDDa3LsF2LPsG8dPVgCDMB",
  "key24": "5xcEee1ptNrdL6eMPRmCotge2wrBDPimYG7E6uB7iQpEs8mxnEbxLRHoCDQ5AvJVkPDVUm5LncaXUA36ZgG5iqwB",
  "key25": "5XjXwMFRwh6Tgfo4soYoSH3CxUzpSem2op7bDxXbCvz99AP5K8bCXsuaqSRJhLJJsmm3sPnHz1wggLcydd9UaMk6",
  "key26": "5o3MDPD4k4dCD531Fog4AhkZqZBSRUW1MTsowEkWT7q6gH29mTeKKgDg6DTwKZ7U84ECYKqLhjLph7nLYv2KXbui",
  "key27": "2aAzmAak5kAS4eGm11CHpVjhSTKwpcatUGdFiab1hXjMXunNWCrA8Y2Mnjmzg6u6U1AN5TfKbZ4Mv7acxA13xjfD",
  "key28": "5mjKdRu2SDKZD3jHsufz7Vr5ECJR2UGwpMSFvPQnn9ijcY788ZEVkn7etnkwr8KhPAnfRY5oA2uBGuieAeZyDaN3",
  "key29": "2j6KFL5BZEArThwrcg9usbhRwyJo14pDnPf1R1VYuWo9CxhYQ8BySrzYEDGLV3ZLs4n8RPLyw3KNrQGprmmY1EjC",
  "key30": "5at575hDGuM5gC8GgShrpMMCGRhA8osnF8emH7qRiBTVdG8vJijgNM4Ua7rjRT5Nj4QvW8WXkH8bM4TxCzHsHV1d",
  "key31": "4jvnPrtQm8dTkToU1zN7bpq8apcEJXMm7sKNcRWuUQYePHZPEYMcxYrd8oxAosWVxXK93Vx2ELdgGzu4HbKUuArr",
  "key32": "2W5QBvdrLJ83KvJExCi7Hopm4G6BMwcX2c9VJ61Ta4e4kKaHGf3SMT2DdehR6CUwNgCw9GrFy3d2hEfQ1m9r53Wi",
  "key33": "2fJskhuixrcG5kjhiBUtN1vaBA58sj1qtD2rLUgHx5YT6mPdK3gU7Z4dCxAeEzZj3egQqQxU4g89bZymZNJqfGf1",
  "key34": "4dDoPPCMB7FfJMDcSKQNA7LuiMGg9JCw5vaD5YzXpfUTCXeWnJ8VwiN6dhQkx4h9GParC4fbgK2UwdUwM6FL5rgo",
  "key35": "59d4XXvifxukDf5uKHPv6enB4x5LeP8yHBjfmT3HZatjqZ5p1pxywUiFKs81ByUGp4un7e9qqrxckNF8Jm7gmQ2i",
  "key36": "2LMPNgzsDfTC7rUUPbSYE4qfhyYRpLgM29TeAyAd1BGHWkBSsxKffCTMedqdtuQgxdPGsWxCq7unG8nHopZYQS1G",
  "key37": "35HTnSFhhTwnXqKMnQBb8eWJ4vbBq3Gxzb5WM9KkoaraEjeqiNTFRnqY5Di3kkyMbVsmserQDYp5GiHHf3JYz1ad",
  "key38": "oVzYWtweg6FP5N3ueUtHFNx2KfqNCLj5guwobwUMxYwDBn8YnL2ABb9CDwRGMuFp4cnThYdAXYkiF8Z9zs9r1pf",
  "key39": "2rw78yzV7AaT2h7uJwmvg4EKFqGB5d76YCrb2KRuuG1G9C5cKebHdpQQJUDyFL1eHNhtPhNytKpZmiFgfGtJeAe7",
  "key40": "66QPWauKrMh5i9VavJ4CtTNhYXhmRRNgrX2uopB3NCXmfK73HPdHFvEqCB3hX7SSLRiwy9fjZiWYEJUVzWSjqSqi",
  "key41": "PXjvJ4DzfhM8zjZYF58sWmi978n6v8bXF5HquuXKZBKxQq4fFuwk97RGsUS4gWpkuYddN6NtyXWfB76AdzmxKdQ",
  "key42": "4Lq5gAKQFUG6oqygEeNiagvY41KuEnM9uDdctB3qp1q5MTPQVeqBj7ygUKcU81KcpK42xS3JLHffCyWcpxzBq8cZ",
  "key43": "5sSFkL6EZxc7HkFF3EhwQjxjQNYvzZm79fSXKnsUEYPgyco7rEpDjJdT7YDMVMWddHo6vLtsdTFimt2Pn9KqHF8Q"
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
