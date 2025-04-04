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
    "FD7SDQP3P8NsYWHPAa2vcpYwEsDsWQNS4kHcJvwdvbCPN6va2Xtd7vSVnigevUfLxAtvzX8Mtki55bRxo61cS68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5yV9WUpDrJMg1egpP1VF2NHdzXPYmLa56PcBeMhmfM4vTAhrdnxDqdFSkTvjttwFsRyGbd9cXPWWrVSFdTfzzQ",
  "key1": "5TP2RAH866wTMhCz75WUBhvYbdagpLz7UEsVqmeLzpsu4jW2iHwW9HNyts3mjfnw4wsTQp2FZ11aK8XrA5DjGu1r",
  "key2": "2eadDS55ayQ44qrMuTYfsfcgLide8akyZDRMERYhV169Ry8rFGwTrFTrKA9gxkLo6eaHBtAwTJzAGTPzDyZVauEw",
  "key3": "4hBkKR49Za5uu5t3XsF9eg3AhQMasKjXgV5iz2JM5njbP5R8ZJDS8cavuKXJDpsjuVt9LQGaqdfMV1fJeP2QHtfu",
  "key4": "4eWJHLkTHmhZ4F31bLg8Whrcjh5e4ehTy3G3s4aENQHgN6DvPxXBaCLVfFsebF21xMBx4ZWCY7JVLM8rY8WbWXhf",
  "key5": "37oNgqTxVZNcDM39ms97PiPXUKVyuPw97XjMPZVTP1XeGbzgwf9y6KJq2kA77wmaFHxPiJNdHfLuzQoq793HhtY",
  "key6": "5VYxjPxi3aL9rdobGvQR325QwbZo2NbmUW87iegK7xHqmBueT6QEkebfeA3213gc2hsmsCu1FMjHadF9ZRXndM4v",
  "key7": "4wbneScHCXvN3QMoTRMEeQu9hmRNyr77HabB8G6w1eMvMmqBwDqcVQ8gjTYCxxgqSsxFWwLf9ekzmXp7H9gMHvu",
  "key8": "3frGFiojnzrbPBbuQxkzhJhvHXz2eXX5DKVmXARDSpvG23DRUNB3y7tff2MmGkeaWTufyNgSkERqPFULLEd8ADik",
  "key9": "32ffQzJFHDZNHDcyrT5To9FbRKTkFMLoMHhZkLKtjthQL5yVenFYVQ94gQzvjmeZGNnUpmNZgNsY16T6ekRWbVSm",
  "key10": "2rM8qYLuTr9Qps1TSiHUN5KQQqQGtnzNXTYSxjtowhGdKMMgqPfpGrFQmTKDeAc9JoJea71thnUkJ2ayUuAWfKyB",
  "key11": "2L3L49VMNZMsBYRGpC9A9NuBpPhdq76jGEy9fKE2h58sqXNbkCkztkd94aqiLLmtWNrg35G6KVY3oqjb45K5oxJA",
  "key12": "24odQVnnguHvvEapDt5MZmMAQWY7weNGZiuZ126WH3eFR4dKuvENcy29JijFH8hUZcBKpg1q1MMM5eEa8xibhkpf",
  "key13": "336hqwUXgr1QYaM8QaJfm9UKb3NYXdendmSHD6J4Sva6JCmPJf96hVpYkJBWXSrBFQw9K7SanpuuXpqyK9KMXUkr",
  "key14": "2ntSPwLScoHXNngLzK8PKiE1oEZRvZdpuJm8PAdAbsdKCU6wZjTwGuPYaNgGbibvbFzP3r4VETdzrdjmHkZLkyFX",
  "key15": "41WtE2Nzh7cEGgEDxeh5Gw2PzvmH8EYStjNCYPAHzGU3TQALCj5mCLxBYGkvG1x3pQkyBDkNkPtCF3Hde37v4T9N",
  "key16": "3MvT4UgAanD2v4B8wQ8pw8h7RthQ6TUuPDxTyrFVVrZeHmUGdfHAx1ByzvrZoYzE8TjGoZcC1i1eFE6Qcer8RrQP",
  "key17": "64CbWysft61tkBh2K3J8Phg1ianihPtAYWKur4KpEHY2664GajfASujcciwLsnZhuSV8s9WEBisN2Me2aVV9ETU6",
  "key18": "5fqK2uJ7hqDeG6ghZ9UePaoZ1cXLzCcQC8tCeCtrhLbwrLXrSQvkq5EKKFRsi4irD5VbTBiP3AZvkcsJMjeWDtVx",
  "key19": "23mahHnzFBRkkTzJJj6t2kP2an5ndEs9HsUGtS7x898RErQ2jnSqPPV3ApfWme6L72LuvB74Hb8eTouwfh4Y4yV5",
  "key20": "67AF3ndg6zyV3brkSd1tELKsAHx7bJQdFtNop5n8A9giLfnJ4u4WhhKYKes1pR5i8kxBNjeEoXxE5gP1peTT47Sw",
  "key21": "LbW4ncysZkdtHcnqsSHC5RphVFXLB4bzpqxzcbCiQUJqC8bGhpRn13u2p74gYTFj9FKdLQ7fP38C7iy786Bq2ky",
  "key22": "4nk5u1SrmUZdKU64dTycgyzL7rTfPaGsE242FPCJKogkKJFS4RcrZPcFH3H8CyPWfAnwf1LDGhErnqRGiVGK3o4C",
  "key23": "2HQc7C5gDb59QNnJejX2VoqnQHWefpu2kkRniKCEqiFvhGne9iPhFZaf5392GbHBViGS3ymQmFdc65E3LKUqY6Kd",
  "key24": "21hqVpL4WFfSiFGKveZbJrekUZw3xmMWVGedLSvJBEpMujgoB9xZPrvuFYp8WNwcLPSnxD9kzNodNVmrciJnkWKC",
  "key25": "5qXq1TJZbvV1hSooQV8KC4LKgDJCv6dD9TJ8C7QPuuULKdBTYRHm6wQL18zy1FC2beB9ED3hyD2mdzpQoEcQgCka",
  "key26": "k2tEUXZZnhJknyiTF9yZKtyRMWyJ6TUuzP4ZZpANmKN7cbHBBn678D5v15Ds1JTqcJnRJKaVXJtjwahzqchrPTS",
  "key27": "294xmW4h8W7yZybFn5YTaDdJtxYNptGMWtqFbY4F6KaAFiRE1WSePpq2eE3j7ity4V6qyWZ6R2AvPURBuZ35yhej",
  "key28": "ofmuD4GyFtmfnXkDxkHi9rtwKFxKdwcs4THpA6KhpbPedUucSva52RonkUrTUX1jH6zp8WMtRmNbXgqmLKV94jH",
  "key29": "gfhu36vmGeAYAahaWfGVQ7kSwXoNvjqWQ9XMuTXHfGVAZJkZ1J3U7pL1PodApXjQFxgW2K35nRrHFLtxd7xknwK",
  "key30": "29UnDaXMAgsfaP8ojNuw67swgrdvFF68how1rtPCjio7edDYxxWReUmk9KRQctLj6RzADLTaPBzQGq6ostEnwgs2",
  "key31": "HgPi5MGp3m7AF2EY7LgnnF8SMkCv1T26b2JyHCqN91Ej6YYeay8yKXDefzyVQd4NwNdYyW3NkpPfrnPvfpEud5F",
  "key32": "26MZKYaZv7Hwtqbkmd3VR8rBnAEtLvigWvAyyzHYoBDzuLDk6vFoy719P3MuiaecVeNtocS4K2wgHjqDDtPXzThz"
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
