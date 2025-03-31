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
    "62z8ojckGLT9dcyjcK5qE1Ntu3m9Q1yxTFaCfFXpAtYRqXPUcaCfdv9WNPqLUxXvMAN2nqVL4TuPWdc9z5jEN5Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvYvt1NGyqHyB8TSdyzbKU64poZFKwVwozdVD9ae8EMrkUvfdvqUwr84UucJstuEfXcRDZds5JmmydFLp5zKECW",
  "key1": "5Z8jxxW22J17PC9cyDCoF9D4rYrKTkTY5B6RoCVbfVWuyVVmTVy37NtW58vxDb3CebDqWVtqFyZEhTvG3g1hfMhi",
  "key2": "31FUj9dN184959NiGL2qkKEJToi7LXMkbhHcLigjqPMe6JG7vg9ZP323iPbcCXUgsAYzBjGGU2HtrnL4Ghnszehq",
  "key3": "2rQS1Zz21TFAQXeYscR74znXDYbQGbk3JbpCrS7TdSKQdNga3tWs4FuvvVDhFcuEq4QvyCY5F56rpWxm2c5PPrB2",
  "key4": "2Wo8HWiXXBaJ98yeA9tCGodGMcZXot51k1CFPRWgis8u6d7uU71NFvCgUnnNL7DMuRdZwChhNfjoXAEfq4jNUwTF",
  "key5": "2BT8FUQqL6mvn59MM2sDkHUW3ivFNd5bsZFQKtPQpWHYErPMmrQk2hwvMswJSMkKY3B5fzLNttYinNyYuPJM1Zem",
  "key6": "26FvwKResu5fvZo4nPHSycakVimLdYQ6bnTrk7ZQFWxTpSq6WPZ4iifvo7HpN1jnjgWbNA31jCVvjd6dYkAV63ZE",
  "key7": "4yhxeN96oSV2R5kx2A8bGRkA7xg9X4pm465zqqe7Kzbyzknwh4bq2e5bXndcryyvLRbiFieTUoW2iGGavV6p3mpU",
  "key8": "3Mr4K2cmVGFJDbm92QoZ3cenvf9p9PFwH6TQQ1jfw2Fk1tBBKZXHHzjqZzpDaTh8FGx4nhmaKoxFz26x8K7vJcwp",
  "key9": "3kyVJ2C5s34y5Mxetze5zaXg1a5gnq6nzjmvujUnvhpCWKmh1eahGLjZfaJbapy7qZJgW2Nv9MMFqgaCnTSQ9rR9",
  "key10": "5o7NEQRVxMMQeWeSZubNPFGifnnZq5DAyaYHv9WhPW8gndXF1LJarQgGxbKvwS4txRpoWaqpwu7DVbFJAXHLHhJ2",
  "key11": "5u6WNbgZS4um8Kq1hxzCF49r1dj41oNAt4xEPs2aXdYeJq5iZWrYcxLYejUhM1guWXrKPYHaC3br1LxsPnH71naN",
  "key12": "2FSR4yNPTFNSRgvKDVQZBFtXqDjXehT6oS9aEF2dGDeL3kQyWBvjhAMLLyY6FniEmE1MNVgita4nJaJfCvwV4hMo",
  "key13": "4dv6DxT18wJbz8dUbZuSqwxZZRbCA4V4QJhvUcL2TMZU3tG5ufzf3h2CPt5N99uHPszWQRmVjuJUruS2151CFfiE",
  "key14": "4msRnxAGzzjau3y5oRmtDRN4L37ceiHB1QoQtz762RLhHEkQn1EyuqgKv7hJVBhvatGDeJk4Rpy9qaSz7DE6LnaN",
  "key15": "5V6ug1ExFv2uk9JRcDRESYEvFWrn5rJ2UfPnXmLwurK5VvNUueH57bkU6Zw879Mz8NzcryA4Sn8s1pyeqHQ7kgPd",
  "key16": "21ZXec1sYhdCGiACpYwXLAdvyhiTTph6hztMXtY4FyCbwknaHCCirshETc4mQycJBkTaiujSESuU8mztwkwd5Ry1",
  "key17": "2WaahN9HCwhEDSwjHe8FAaet6t4GPThnMcE5F7iJvXDZx9uXHF6s7vkwVQrm6UXGdmWoYf48VY3aXb9Jh8GXgcbb",
  "key18": "XHSALeeMaFk9MjBs4tVoEiG4iFSoYvHbxWXGBKR8mmZZMMcoYMTCuH7FkmNcffgJpRzXegkg5rxBnnvwC3YmDXf",
  "key19": "5xtRnpqagLSNXDguRWror6LdB1xXbkcbS33rZFrx3tb6PSyJRyQnu1BpMwhobixCiHZL1XeqQ3VjX71Ca77cJzq4",
  "key20": "2SNwsjb1PPEPMRNfKytjZo47eHF9ZJ1YqjpJPjRqZy5Hv5GGd4FHueeuYgS6FcyLXLeNygavM5oXXzuTjkjVJw75",
  "key21": "4Wg7jr3h3fveugFWCZRHTvs6HKxJUGDcbaiiZvDcLux55qd685KYayzbNs2Co8TAcqSCc8dusmr1cHi78cAN4sFt",
  "key22": "2ryjtHFzt1GRAGC8RLWfJ7vzBGsj6bVV8vRq66UUts8E7C3bDFhxW7uTPZi56FChRWiCvtZbd1Taxj2yz5DBsrKA",
  "key23": "2CpKeJVqWpHtG8L8RnomSBmpEuZS3bTNSwi1z44B39oQHDibnux4iAH4G7gDqVfZEcgRyFctCrPCZkvrYAaJ3Yon",
  "key24": "2K2JtqZ412ZCmN3xiQbtQsZyLfdWYJVMbmZbJeHSCMWud6hPB8WtzuUHPTP2Fzg72Yr93S6pB3wUFjRGuVwfTJLX",
  "key25": "217o8m3UQqWo4QfaLLFo6mhUouQD2fx8z2r6QC3rVDkV1DBZus6ndBriyG6td87WuXXqZJahzdJYAKMSN4mWdkrj",
  "key26": "4C7oJcQtPJ8MieBwsSFUDdxpn9kcJVsb71FcGsJsuv4HB8LjvgssQjhnDny2WKLJTJstqUd7YsNR8EW8CkD15XhV",
  "key27": "5HFoDUSq7KxpJ9kuMUq2UCPcbB9iB3mfz2kPySLFYKoEHuHEppWCKfTDgHhJteWDSbSDCGUeB3wDE81uEH8E5TQi",
  "key28": "4yYb61B2h97kr6MAgUih4xbMwXYU8S4F992eHwPyehVBWzUyPvKaNpwCgnWuH7ng1axqA2yU8FDJK1fsPu162UVN",
  "key29": "35fHtqRrwKfu3yhGC4nY79278ZKCy25d83LXrFHqh6LS8n9zX6cF1Kx77DqvzCHjDHWqfmDbKpVi3EKD8qvpMTEF",
  "key30": "udv1hQ7PRYhPs2kzjYuFYJpaE9s4vuBDuTDM21Bvg2eXp5MRxCJxBDDj3P7w66bGPd5PodPkrCUdkk6ENN8uKz7",
  "key31": "3HwN1FrhRKbqrXbhz8EffcSKryL5v3CHJdrBkAm5hGJAhxUDqfjXQ8s1PL8WtKQmzTZEA9mV7xf533LxETYTu5Mg",
  "key32": "4hAWZNtfLKrxsVdJvoUr8DtNDsLwnc52P1VbVLrxtgG6uU78dSfgCVymw99LRCXtTduquxVvwmXMu3wtCDwLZepq",
  "key33": "LKdVPoCtye5pVLu4KTfQcEojh3jrH2JN8FZs1UU7Sz1xQ22oyc87NrPSFcxNz2MUgakuDbeWqXXkkK4VH3MnJkL",
  "key34": "23jq9vwtVZUiAyGcwbyNZsyM2K2XaWB1nGRM4BcWtW1euMhyg7fF3JDRfLCKzVKSxfiWk4c5wocudDr8dgZM46DY",
  "key35": "LyH2SgqBCjGKCLezug8RF4kXaiG9jYeNCrVjrYbDGpwuJSE9rXKEu4S2oUrheqcT1TCRedAAXCqK3eMHFkCxBQJ",
  "key36": "CsnpLQqhqHkL4ET6EdBS5GtP5uS9tcAyUaEsB4ZvpQ2ZDBo3yNikLEZxnz6GcrcyTj62QYk8bWeKt2hkBeyF1WP",
  "key37": "3XgH6vXuPXLAR6VDYupEbV2ipWMQDZaowb8jJLhHrqvKt8Y5wAk5TvrK8A1aCqzNAz2ie9mMSPFoWzyKUM8mDBBp",
  "key38": "3CEKLAuhPeB52vGxM7MPx4aGg5JHx18v7cyeSvkarb9ZSM1aFvvpyFNa7mXiQCKFdPR5EnfQbvGjWkdyfu2JAjdX",
  "key39": "48cEZRab1DevGsLbiVJKAGWnUkvTwi48awEmZ7zVY8P9qL8hsTABfYf8pgqQLPcbjFAXJT477AHqUcCCrpntk6pm",
  "key40": "cZikqYXpZVHESQhZMJVDKHpYy5nGoSc6MYQn6QAZsCPFhKs7kb1Ycx4umFtKUmMw2qCA1hFenoZnQ1HAJdnMapn",
  "key41": "59Duqpahgen9GZTcUf7Z2FpZzGYjArPSfuZUsfvo5SvKXAcDeGGuQ5idq2zG5UJFiAHMP5XyjkCXwDmwiG4AbZST",
  "key42": "3Ef58dxQewsoqnzgtZgszeU37zikAuASyxpMBvRt6B9c3W8LKCp21oYLVFGhzVwnfRQXX7hFobS2q9jRiA5dkzgD",
  "key43": "2WssTmqBSMXZMNV3CRuB34JzpwX2ycPapvAMUwj1v8SXF2nae1c11mHdGQvqncZL3NABaePD1zsc9X7LspcFzhwJ",
  "key44": "M2UJn2mJzVFbzswupxsGWo4BNS1AQD84n4BxzEWqp6jbHBCVFbv1JH5NusK4nxJFohmyrQN5mcgznxPJpFsL5Qq",
  "key45": "3xJe3r4NhXzaz9smQigChhthF8UdbeC2eDiZWVXrw9RL4DTrCXCR8jihGMAxcQ2a4kqnyvHBHi1wuDaASaGVorV3",
  "key46": "3wXXpsN9UE9eS8BrChAT3Bejs5gpZbKNjdjjRU7yXEP5wPeQJ1y1k4F9HQHmmFY9agnGgq74wgdQGoJtfaC9igvS",
  "key47": "2LSigi6yYwETBFVN9UmoFeHQ14KqNmHkRDJmEVkvWwGYrxKt2QJFcqpdyYqNY5cCNy5GBh4rso8aK1eRiCUXa1cP"
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
