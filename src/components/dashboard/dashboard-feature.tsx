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
    "539jWvT3kzQWEC2e7A7dWnED2upGwmkXTaG129rMxvz3EmzBQisV5JRishAEDDtiF9cEFh5UD5AvYwVr8ASyYmC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zN1vEamzakMTWynAuU2BKRPnwamSqNTJB4EtVXtqwweYDUxZXRSoCWfSFtS2KbyEF8kddjh3S91eP6qivCEMbrQ",
  "key1": "5RUxwtsJvtEjqZ9KfjMda7erntLroiWRdUYFaktSQspuKZkW1rKCFvpRK62RJNsGPtY2rx455o9t95ReLyEZh8e6",
  "key2": "is8uCLLTDQQ3VW5Vb3eDyWPCQ1iAWih5PnThAL4tjXrx5iVRz3a7w51sgGfdXtqMN66ZKyZxEcvegmndnaqC63Q",
  "key3": "uvVb9YBZnWuCADGLZ1qjQ9VhSRNAJ5KcLaccKut6SACDeGWKLNusCQBqG5DFf3osKcMo36yAqc7wasb98Wwt8iC",
  "key4": "2S6BoAhBWBNivhhbZPwY5UXHe1tLX2ST93TT62fidGGn946Hbnr3t4DmCAZFNi2seVBE9rXC2XyCHkdTYj2zqJ8q",
  "key5": "iorvJic54XhnL2PnfQsiSxoczUKEqd4hP9Ah6VZ3Pf6yfYq58TpmuWQS7X3GyoDSEg4sbPVu2GWRRpDS2B6PUsy",
  "key6": "BCRnt8np29vggn753fbTDAELTKPcHcMgXy65WCC8s1xu8e6NkJta6K55Rt7BwE7iMMGPpF4vmBrZiBDTMXGuDXK",
  "key7": "WxFYZ2By9rfFEdqXG6zH3XWDJQRfuX8vFz7g2JJmdST7CjRnC2hzYeAAcS1koy1iwWgzohCgWwJmV69SGLVGPzC",
  "key8": "3dXzRNAwNrdnuhPrwh8p3YQZRr5draBbsBuCaD7BHHqsJ8HzFvcAL2MqRLwYRaYS6X33MEeBXPibcRY3NnKTTqnT",
  "key9": "59wMnRiKvanXW2HCuPrBFhP61cC9wgrV4Sdan3r9Xq9QtuUw5NN5ezTj3t7wuALccVVMbZBC3eZumqFZZm1qzy9j",
  "key10": "5pEDcpmYEjExk5xjyCMoZ9DJmeVG1DkHy31AEd7JDJ8SwUb2nMT3fiMoNSksWmb86EdNiUQbai9L1YuPaaRrBr58",
  "key11": "3CDRnkSYosVrurbWYK3HYkridwf5PgdUyzZAkZdc9H6z1YYxhD7WjLMwVPGcJim9yWwo6eaw7PPxs6yWNo3MdihR",
  "key12": "2R1kxMoVM7CwCkkkjeK1kYFjnKDqS4Ha4GMB7BqQPcuAhnygfFW2BBnKSJNnykY65r7kgYsMg3ceMW5e5pwBo85q",
  "key13": "2cqy4MiSW6QKJBYwiZLFLrFhuCa2HZCrNzCsjzNEiTyRAgJw4XJsy5n8HRMUXkymCJcEzPFqTY9z9mSVLiTx68SJ",
  "key14": "ZPbjZZpbXPHd1CJtmtUNAuf3WGytJQ9qmUmmbi9QBt7HxMWSMnBk4drM75U2pzB1D8q96DzowoQS5sVAx28tQSi",
  "key15": "4kg6G3RpxyXwszWZyNB6rFATnShhExtsf3QTDzvfz9DW6R9eiUJtEWEjwp2fASQW34SQNJyZRHY7gg8GnkTANb78",
  "key16": "3AyHR1oVtF3uz1ucdvagU4gfH4S9ZadshnhH1ApuVsMBVrodPEDyrVq9KbjTMHekqGpPrgjnD28RqR4yMrtgc99U",
  "key17": "3zVLCGTEAE9mikLzzyb3ajyVoyiMDjHWzQxvwxGgFd7L7SbamUFostFwHR9fobMEnPmR67QqDjvPKP5ZP15fxcnJ",
  "key18": "25ndjk4iqgc7kpbnfH6boB8w7Kz88ELq25fqHvfA87ooWAakxr7SAverX35fu95becdT1LSrqdRYzeWPo3qWCU4H",
  "key19": "4Lukm3UPNLeFgE4ur7MVMqxw1yiKcrpHZJfjASvUQdyWJcnZiaqdqTiL1yJtZkBDXLAqtJVqFQSXhwCeNnx6MYRX",
  "key20": "4VXmHL41B1eNozgowMbcFysBkL5JAYWy8ypaF4WvmEC689HiFbZMfhZNHkbV5QXLwuAKSchdpGLwe2WmjXAhQecL",
  "key21": "4iHvkDz6ZV5wtqKSRuQw47ypLVjBsQAtWRnBYLuuRztANPLcH63pNHZ5cYRFKRgx3PYWxzbrCjcuXRz7N8LDiW8J",
  "key22": "iktAVapM9Ps9U3jZe2SrfUXbXQ3Tu4fmJTy951Qupk2rtFe88ZFnnjpfuBBjDvwyrUwipQnDzhrqABt2sxuvp6C",
  "key23": "UvHrj86WZHC7De7QHdW9uKudr4vGfBziuyxmhjQzLQKuEXrtAmSjnaqiMwFjzkJ7yKVrEWc5fu6tUd3T812Pvgi",
  "key24": "41t4bSqib7ZmgrxvqcPVK7tiUXdqj1v72JyhyWNucCWSkRbRj3UXJmZ1CJXwcwkwaARGDnSB8js8YWzQRgvtYEu1",
  "key25": "41jRiLyDJtDBqXtq94Dh5JbfFxT77Yeo9DpHWgcqzumnbS9EUcZF4wjWt2VMhtW7vrfyyvrCPHgEvfavzmX4tgUk",
  "key26": "5S2ZJazM12BCieuL7aNiNicqWqJX8NLvbNEj491nY2nZBhSvL94QG6gkNTwS7jb7BbXTSSXM8uVndh5Mzp4twYYy",
  "key27": "QR9EUqk1MHy6L9F3ZE8DsC7Qk9jy3GUfZbGBm2eeUfyUVXECA7pe7d3fzEnArNfbZJ3NutNCmqmjfkbgusEUrhM",
  "key28": "3sew2K1wZyMH1XvhrQhfSkpfdSpwVG9JyHNRsSCozvGa9yFs98Xy41hUAt38VLndQYFYbncg6883cnDkbtTXHtE4",
  "key29": "4K8qoSDQjH7tWNmUqyByZsGsHrZMVDywuP5gDHvNqwc6aRX1s8po6UW4FboskpNLFTBpm84oREsaTjL2LDE2z5qa",
  "key30": "2RmZgPywy4ChQ5yG32BM1uwyVCQ9Q5kTW2r58UK3NdGcKX6kpnkMzYdueQsqj6US8VcoJTKSZScVMU6fLgJzojdh",
  "key31": "3GV9AkpH7BzKrU7LQi5g3dUdtArz2a8Yyr7GLMn7WGFoQMkjRf5LeHoWK8LqoSSm11nioKc8R4wRbiXK28kKxdQ5",
  "key32": "2mBnzLdvj2ZBByMy3N4wF12dhuteCnsE8wBCWmmq4mEVvVEU2GMpJ4PYQjknYr7ZXjNQfLGuNfdxyCsWwh5cg6YT",
  "key33": "DRM6LCurQwgETA2ViWAm6M6hF4VzwZ4XtuXax8Y6H4Dsxr9MnBrqV9hZgCNvYzBHrgNutK8T2Qet7HvJCeqJA56",
  "key34": "ELG85Grtit1MCUHJB3i1tFyBwPyjfnpiPST4maSsAwksqxJ6Hc3qoqo3Wwjhz9HLnHNpXsRKPDbnGax7Cm6D9Yh",
  "key35": "5Xk7LGxsTmQxfuy9HN3JdNrrxmaEa94xHPygvKgAkiwa5r7DP8ZeRZ7jqyRm6qLvL6nHHgK4XqptTTjGWd5EM4Dj",
  "key36": "ASxmd7hQpYLLoXBZTRj16dqr7PpYDwyeaUniH7yKucfAUNULFxFNzbweWNcYfGBWnvQbp9ZYcDhFYQW8amaJ8Hu",
  "key37": "Gjt6XfJyshodRvWwbQsWG3kKNJZPg3dDQs5isA74rEp2qqctXNqWHyGy8Zwn1G5WaPSyPgwHyzUug9xAAe33igN",
  "key38": "5BzhjmvKSgXqngcqcdhh2UTZnhxeTMCSTBLKJBXcauPFmcGeiMwDxzfGRqW82Fk3Q5HiA2KqjrTJVFEYdZfuzLtw",
  "key39": "3JMosQRsoBT3F7rgUU3ATenw7kiMQDDSLePuVoJYy8Jb5UoM1e83bUgtFt5bhMz8drDgQqngfYTFswuwB7zxHSs1",
  "key40": "4MoVDKQJ4n9KqGVVipkzXtZtuk6Q5adudtYzhnLni2RQprm7DbQXE5C3izhb7uw9vmu2TrsmXdm5N4tBiqSz5ikX",
  "key41": "5nEQab26atvFKp37oCZgxBKoMM129A97WyRbkJEPLdAQYDxWLpsUGR8uzwzADRhrz3BjDtnvo7azs8sEegjD4Q5Q",
  "key42": "5oB8JCzT1veoSjAkZR8ZpZah2Jj2G3w5Q2sZ78r86dpq9nWeQ7ye47jNgUs7i51UhqDXESjp1FnxhUxj8Tt6FU7t",
  "key43": "5eEarYxonrZEGowPBWdRhjFw2sTwHAZuunTn4bXNF37f6urEKeViyJZebDUUc7NZuvnM3x96NociSibQRB2YsMdS",
  "key44": "63CQaL4NcxfYNpADn8DrAZ5gNm2SrtcXFeucvFtie5Sz1AyEhf4AGFN9wsHdFhkjUzYVeG4HXQfRVLe7TJrvbA3U",
  "key45": "71BP4ehkthLRLyHSAnmYKvztXKmzVPRNahxodQXV8FN1Wm1YAW4sCxYwmTsik4ifdhYj7r6PdQ6H4fo7oidWVZg",
  "key46": "cLvQ92assZYRJn99AJAYBjorAxTb8BZH9r8bZC9i4xdZmgvFh9pR4XjJKRECZqyEU5PppAQTULY65QxGwx8QVwh"
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
