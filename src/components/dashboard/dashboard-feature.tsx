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
    "5TdmjpdP5F22Qm8i6f8yUb8zCUksPHmeCUfhHKEwy4J4YAgZ2PhJna8rKjKJrhcs4R3SV8j4EJ9KPVZBUwRWnAR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o4Y9jJKwEEj2S9bVvwx7qM8uaKYMsNd1SoVi2rYpn2qU34VUTjBgoDm4JUQWUm9zReoX1EJjCdYpcTxwfxb9y8A",
  "key1": "3Uf5f1t4mcKozCQuAhTA3BVz7vGAcHr5jcMNiA6yoRAaDHJqdpQMGyhs1TipTNbaR3NSxHdzRjiMTNpLsMscHtdE",
  "key2": "43HCi54cN4g3BZfqdMWnf8DCHwUZx9Xsgy8Zjy1mH4gxP5DASRXg4FpfhybDiPEQkgmDsRv6w7cj2HGY4XG2aYxe",
  "key3": "3TA3zFzS9n3kqDTEBekskokDD471nzftizZ8vRi3ttwhGziG3KBriMo6n1sorRWytHNQgiNV64fsk2wuGg2NoLzn",
  "key4": "5q6vXdWR15KdYNE1ZgGmnv6Cu3JAiB9JSd7DLLYgfLsTaZmKbTZ7giBJei19Fp3G8nB64gC1Hrd68Lf6YFUCpXpm",
  "key5": "5rrFYNCnbFsdFc6f7esJAjn1MivXjYXe6hrvRP2BSpykfB5bqczA56DfTdCydiqmh9sJNhakAoWdk1jjbMgKa5DD",
  "key6": "2yrSwvGbL6QVJxkEzJhNVTfVRTucMDgTSsqAr2FQ1Eod46jEW6capTuczXwRAjYu2cpjyD7XYCbjuQfCQPmXqXhw",
  "key7": "Ay6EFg1msnzpafm8w7L9AqmcyTFReR8VEvQqkaRavjFSTaD6HHgryH34PvBQjS6Qi8N1qMCYU2SDqLCheh2PCrR",
  "key8": "3X7sjVGFtdG6Bc5FN9TyfAQ7D1uAgmHiU8qM1D6jr88DQWhBhr6kuBwY6BHwvXnSHCWqSzsB2hvqhGwwoQ1YxE5v",
  "key9": "53yfugmuRRsjHZYK9zwqTbVEpcx2wryrRsC161NBtLsZUCoj2FZ5K6FbH2VVDsbguxvSsUs28mysz7WFCPFj1bb5",
  "key10": "2MvueYDcXevKDGSZ6nK4uE1h8RthjqsCGHJVab7C9MFg69W2fhE8pc3nyeg58H59tjAM4vqrUSMJBcTer2UFPiYd",
  "key11": "3dW8vpWGpWEoDSNs7erW5RQhiiy3fH2RecGYbxmdKipoz3ybB2e6CgEjgMaUr5Vouay5RHYF8kDeu6zYHSnPFEsn",
  "key12": "3CrRafUkpz4ZQSCAbxjA2vmtrhCNxijiimey5BxTXSaY74bWyoy7cNZvEUBbg4LwKzmNxaHr4HFc8BNu4jYtCGWR",
  "key13": "2q9khm82Ue2zdzUNKSVjnpd1ZxZpLm2KhhJX4NV8zSAQAHpQEov23r8QY93oWucSGMzqnqqkqwR2TkXtixs3Vtm",
  "key14": "5fdxNP84GMCBWNg9rxrhK49ixY9GFNS4sJRZBL4VnCbGHmvPKKwbf225sywLxVkMgYdRPChcj9X3AQa5XkszFaMw",
  "key15": "2rNjTDeP5NXtVBKndokMzWKJJScVj5DHSn9x7owQqmAX8uLBZycfPxHyd2xrNSQcUJq3ifEfypRMZvnzHQ8pwW6S",
  "key16": "2XT8RWjbXLkW7kY8r48C1dPGh8wWv78zW6LZp4ZmPyg27Ln85LN7MLXjEnj1RCzNXC7YHSmwmnvydbMEx92Xk35e",
  "key17": "5fA5mdfDsxBSMjHj17NUapiiepGpyaNMaqQhM2tKjfqNLrsVNwXPRae1RVVXwFC2gNhDAH9WhwgnVYpuNN6fkTCP",
  "key18": "EWmQW99pVVXx63HBVg5m789L8U1qobcegVFFAA6iAeBQYEqkNssb4g1HGz3gMgCT8yK66ZeEwnDfpYmWahjBxJA",
  "key19": "33xGv6bov5WUuHPGBwydKfXHX9dPJ5hsjyjfRUw3csXoYsThMyTLcZE3nDC8KGoa7Mrw9Zky6T8SfBNWERinKVHb",
  "key20": "3bdFfuWdHQiYtTkKMTEppBHj3QMLhWQxEEtDRh13iFh7NpawEqr9uXx1vzVbu2sLUxcZSUPtSDe4HwpRvjmhFA3a",
  "key21": "43tXDRmA5vCKzN8oriF6bj3nBkqCKtg4RYxmu3LsXWiXgXPam8vrFRPAwu7XALYuaWcEJCaMmXWuXy9JsTqGZZgM",
  "key22": "5LwK85yRnyTSCHNnryZJx5ZEz9juJa4Jkgn8T39VWnUTXWeJbfK5BgcAp4KmXu8CgCQxkGRkko7FMG5MJq62PHih",
  "key23": "3amWf3CCGyAJZcSTfisop7RB7VMaM5eeKfpUnJjnLksRQTNWmgG9CPspUsn8mfvYEsv4V2K8exTitQWsbX85QuQ5",
  "key24": "4Zz3LVfR4vgyS1yMT71ET3igsPog5AgQmeSEkoUHYkki1VS8HPEihznAQmRXzYP9LJgAp9M3Q1MWXycDmt8cxQoS",
  "key25": "4yrToCcEjmXmm8GHpKVxjHE1gySMbnnBTBVUarLyYT9pPKRZEihE64HJfRvVmwXF39RCKKPrtadNJ7nJKcQq4a2X",
  "key26": "3qvnLsS1BrdiRiGomdopPk8rvbywjJg4qxMUTh6fxy8r6DBexxtzys6facHkU8SWpbBHtLkBB3MPMPqG65WY32oK",
  "key27": "Ns1zjxzn5QdyiNkeCppyuHCDfi6n75GzXWgaKW5cuEUhgMCXxUHkUxbc3A235MqaZw2vM6VNijnyNBB3LHTuadd",
  "key28": "4MU28B3J3PaeiBLfXAZ684ax9iFbBbkL97k4SKRgms2rVvkhcspim5EZfzaYvfRJgVQwKQUgLXYVLbhidFRNt94q",
  "key29": "3MdozZisM21ruWaTfpoHDmzYG1K1xn5dyAZEVysu6fJTSHcnHQqVLXYKtF657JRU58P9sjPpMns52SwnFUjU3wck",
  "key30": "3yigqHjkvXnEBjc6WBAo35JuGvTBNb56w2Ep8Xp1amwKTKqnTobsCkYcU5jGPNqd1oNXozqYgQn5esoQtm1YAehb",
  "key31": "TWYFoUt8h1nUN98yuEUYwAsjf5U6VAPVY7cazvyUbAeYuP1mDFkCJgaa1c4QcPghKwneBobM2zZd2PjbgA4x1Ev",
  "key32": "54vy88iiS25XqFm56YMd5WnH5W155R7gqoRnJ27Rt5edwf6zUuQjxkqPRjaf9t6SpWDPWi5axdPKTDLXndb7DXYR",
  "key33": "47NmXPr3aJQMBGqzvSycTBjVnyL5zKpdUnfLUGoDJr25sBC6i8hWdUiXwMEb7xzSVXfC3wtmyRgyRVeBnpV1NcP1",
  "key34": "xV1RsSB9jYNJ3S9r6xFm5gB5yhmxYrH7aSEJELGTciUzAKcjf95YPmhjxAh8mGJDaKfJENgr4G4RpqtDFcxmH1j",
  "key35": "mYpTNaMDrYtVcn7ZbDYRcF1dJobpdHSDuc2vzS8eu1vTQRwejTW4j6spRduqYShekKEKMSB87X9GcAoWkASDUQM",
  "key36": "3RP1XVmPp45UmSXcZQKvwAtAhDQiXwa7VjGkG84FsVMJtpXkQBGKP7RpdBjpo9fJe9KXxr2YqzPhavjk6UFo3vo5",
  "key37": "qBk78Zut9cjjYxSPh98PWfjoya4hcePnhyHgfNtRYXhsJNH2k57icMs6K9NwRuMRqEqMuGh84zRuguuESV8wCLe",
  "key38": "FwUqbiPBRWiXPxz9FfPvhp2L1hnttZSjnZfNmJAMBDcLuPpmM6eg7evP2jVKkkBBExcH9PmiXhHqyiQ9VEnrzAQ",
  "key39": "3ECEpi4u5YrgYdFP1cKNBJfEgAkcUdg1mASvuBNYfK4gmE8NYRiaKLCfZnP4VdToGS6nFcc1jRN46EeDjgujtVE",
  "key40": "4pc1qLCoqMkX656vagiSfQGDN5PapuoT3NfiyPdH9fMuj2vpgKVLorxFBgJjBybeSar9Nqh3d79e9rTDACjTtu1M",
  "key41": "2VQcCWgVLA29WLRKcfCiLyfWLwovYLH4AMwTb2CPrZMyzVZfQHN6M1EnUtW9vsu7u7dpPVJfzmCz5HLBbyCUf1PX",
  "key42": "5pYWmqwkMcjokKTBU25hNc992HBaePfwr592JSWZ97ebhQBDhAuWiab33w6hDg6FPrY9GwV5XaHLM4Gwyxn5m2p5",
  "key43": "2giU145zJ6iZnTQ32KjKcrt83rfYbnzESKWZEq2NQ7UmQFpb5WMGq9N9ScukGGcqsHdwKLB5hhUYkCcis1jSN46C",
  "key44": "5eW4pwWxGGgnsQ4jSJrhZMA211GYswJ6JE7aTCznC4qfJk4zox7sRCqib5rSQszxLNT6LcTvRSwkycvPBz3BiBGX",
  "key45": "5ZXxkmhxR5PKHQSuQrHA33tvhS8HetwzKXjXqdBhM3DuakNJfbF86XW3wV5sgTJKPtYCfcnBGDmC4T2ahyKu4ppK"
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
