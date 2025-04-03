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
    "3VW5QC52fosbnfSxSwPjgYNo3ttq5bpyXZKSgQd46e6GP4e1wRgtHwAYjaXiGkPavimCW47vvpzWUtwjUMZg8XGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kA7qCLkQt7uLWrppJtH6F4KDrqmzvKj7qqZHx79XdDjbERxG2q7XRJFU2qgUZNTcMYReyVTTRCe7nuqMrQq9xMD",
  "key1": "4PySZtqw6ausQMDfYYPnCwgeneKAgGm9pUTC7EXxoE2TDyzBU8cad5B99ufGTNtyAFVJG7Y3pwETjg4vrBTQ4cQd",
  "key2": "3cWZKzG2nWBWWA3nZgLk3uxpRHRNUTuxWiFDAqchTCwDBTs298n2CHJEsQ4UVXUmjQTME9MrTfhiWZL6pVw8cUeh",
  "key3": "33m61wrgSWtApZUXGF5YhFMuzKLLk6bK5tWik46yggCxJLQyaDFVi9uCEL22HYZrhcZr7WMWhrLskJYPk2zWfUuq",
  "key4": "5ppyHg2hqWfPiXs9LTKtEm2M4VPpWzAphEgvFXgWtftzgGrzEYhBvWoMkhjs69qMtfAuBPc5BGQoKci6Xtu4C6iR",
  "key5": "2XQV3vddYXUtue8coDNSWdaKuTrJaRFJ1enwiWPVhjM5i84fSkErD43uou3QAP9TKGnu5FnuJ97JJKCSKAPHHeq1",
  "key6": "SMup6ux8NZfV1h2vvkLmjG6jXKBKs3jwBHvUQQYUrA1YdMH8u4Yz6sjKqYurGyeN2vkVHxMQjy9gFuC18RajvJw",
  "key7": "3NG2dV97zHBMxmCz1UU9C8mjPyPgVxgTGVYbwQHvqJMs75bdwbQqdJ7cEJwnitBSrFk3nAcwPjdrgKTzYQYieMy8",
  "key8": "4DNQ5SqgMzLwaa4c8U3YccBB5Dokpo9Rs4dcq9842xahS3jQD69SbPEhYMGLCiYHiB2k9ZL14zzLpSEcrG2QSpo2",
  "key9": "2jAiJc2w7g6GMHtdRhzWuyAPxWxkB2sthCaTH2nDdzWHzj4qmdipEboVPFN2tjGK11vjEd2Bu7yumh2WYxRCy8t9",
  "key10": "5YtLQKaSWFabEY32Nr8EfTS6R93XpcJnVWvjcbKD75HgU887x99yWZ811askAuactt37xoURhrEN9QQcAdDz1NkU",
  "key11": "3G3USVmGV4gEAXCBN8PEPicUATQe5fg4QwsAB96VrCsnZYmWC83a3VL2JzuRJu23GdMcsbQakpRz22vZWfyDciTS",
  "key12": "7LJciV4BW7bxWddZxJofphLjhRj4CoKuvYd6m4XiFGTEZifnnZnrSu2mkLPY7EXgNAeG9K11DuTTmf44rFqGnnF",
  "key13": "5WU3kB7d8ikYTw9u17h3f6T5MGcQYTdo6NsbSD4Hns7aYs4Ym7CLkcfnup2riw8VL81rCsFmCcvx11QGk1syhsMw",
  "key14": "2mbpz4vehoQY8Be1XShvE9xkRfCMDu8Fx7xqb2S7yZAxGdFatrXmj1s7CPxgtEBAws9YzY13xMKxnThiN7wC6p2s",
  "key15": "5we1vPY5Zyrayjj61W78Hr81tUKeg7Z2Xqts1K5wLe5FiM4VdopUuvxznaDYutUZynMAJTum57soWz36oMunk1R7",
  "key16": "2c9xxYzp3zRTrz87E4RHtwuynGbw6MNXw3uNB5pRGuEymBa6sLWDppSwwXXX7YupzSt7P537LF3qhEeEC9qyQbCu",
  "key17": "5xKh3zLXdLh95PdiKAcTdp1xucbqtNGP4RQD4JKGhekU5zaf5wLvuS8i8hb7iKYmHbtdiyezNsniMUhXxRTpdx7Z",
  "key18": "NZpFjqRVfzUeLKe3GE8BkZxQpWkwPUSRrruoCyASKJhEcu9xKtuWKTm6B1bGpQbDj1NqGTxbwraSpq2q4nTYx9d",
  "key19": "3iBr4TXonpeoY6iTwumdLGVTK1SaRkMqDvQhnwkP2ecYsidoU9E65FQ2xGrsxV93vGqMkNzZ21oP34NLRn4jtmkR",
  "key20": "2DHpXkF5ddUFbgpDCubSJDo1knKnRqnkeogd2PYq7uQSnUpWFKTGRu4VYzKJah8z2QEwPn2qnuaWdk2qJCmPkcUW",
  "key21": "2zvVV3yPMmMLxBs9gXAu7imotES8cKePD3iUDrYxiZoKGzRbPh1nRf5WUV9LHhHp8kYwZxSd1vJMq3kwzk11fzMp",
  "key22": "2m2vTtLWZGUaSMgNdoygsXYcGr22zHtE8ERFuQPm52iZbQ9zUFz8oJedPpZ49G4WUeYzU3xJ7tMuSAW5CT8p1QmG",
  "key23": "4KeTMVJ3hNM1JcbKr7da7BxcvNk5kByit35FGi7h5NbW8QVL1km8ShRU1ozZMz3Sb39u9ymhspkKgQPDxM63prwM",
  "key24": "3vXZewERjMFa9UdZYHfa2ftXEASzM8VZ4p66u9ELacAfGEvGoF7kBL41eHmosubWmnp4YAMfcWzDngAzdghMW3dg",
  "key25": "3SeeCEH8s5LKthbjvyGE5tX7A7hbGjDeKGnMBk86KSN4VcuyCcDgroPhvPHc487zppqHCA5ToQAP1dqph1Uf36SK",
  "key26": "5Pn8ZK1RSrrx5kRwgpNaGc9JYEA8YePoqAFDQSeRv6CveEX6BMsb4CWRT1uBoCm8xBi4xXe7dcM75zYGpdgPioxJ",
  "key27": "fAnKtb7RQnrQut1ovqxaKqGNeGqSXfw4t1pkecwKLDNVzLGQEo4zsc2MpEGPRkyJqgTQq1vC3KYZJ1bkNhV1Vkt",
  "key28": "4ELaQT76fUPfEQWU8gFAkB6XscTR3AjE67ReMnDAvASSBJtuSYaeY2V9eQmQUsjNoqrXd4YQfRS9UXTN58rbSDNZ",
  "key29": "5qrs972zvj9REp1GuWGFePoNEDxZfpe84GfJ9UYVH398yh1Mzn2HAQ226kxb8HE2Eyz5VUidpE88kxuTFyDg8W18",
  "key30": "47EcqtHz6M6f7fo8K5YBps4qYEFb2rT3hnbJD7rGTFfX8dSzrPRyjEcYGQdS6DApeq5ohhoWFTrc5Fe4vfegj36e",
  "key31": "ucpXmPM5ehNQ7F9gMhKLEBDPbed7mMWdWFrJyY7d5YJMAix31CyKTn4RGgPfdkfnZwYZ1E1tui6qJULz5xiKZSC",
  "key32": "5XdzDaYULitkVrM2ZjXXi6VuwtfkRpPAKALfhfJGyBFSP3XyAoiYBhqNNNtEYfTKTqzj1hx4dNeA9CD1WoTvyHGr",
  "key33": "5L9sJYgCw5qc4gSP7rLP525aysfCAbrWT1HacrFsyR2pMwkgeiGr8w6eMWodj2q9KZdu3EF6Na7oBuUyFsUQYi3n",
  "key34": "5WR7zn2tXz5DxcDPd5gzkhTzRRUZHVMGc3jrpmmpsouZJtj8fDSjCYb9PCSNaiSQ9f993gVNV31nBoQAYvRkWj8p",
  "key35": "3vyAufjmEEy6qV6dTQcXL6o264n8Y4Sm2i6eAY3aH6YDThbEPdEBTCWXzyyFV2D9gf8fpRV2Vwor4Lp41mcPWQqY",
  "key36": "2GWQ5hqoPjyvpgqfohszJPSGStdc3GSQkXRs6qFwW76g6Vv2GikvAdTuuppYzCQVfwFmcmQHg3sRczLF9Ti6JJMX",
  "key37": "44B6aaEyP5HTLqd6bnJydPzNBn1SiVXYKRuZpafrHtEb7xL9gdHhnignouwDbFF3FbmXH6tdaRUqmE7CAjUjv94",
  "key38": "3D6VaC6bnzRWGETgdv7DQt6fYmRxQWSt3aVWhrUzUdUi6fRqwoHBEgCVcS3cAQGvbJyHax7fZC3NuavesSTL7T7Z",
  "key39": "5o3xVCSoWYpjhHp3TdCQYYXdwFmf3QTRvejSmCktU4NdykZs73qHmkUo27UXyEd2ivrSttbjbG26H2PKSgzqAjwN",
  "key40": "22vfqn6DD96gdzm4fRKFN6QKkiyjK5bivNHVUDuZF7TVEJLenzV4emGBpTymyXYcyEBZhhw55e3LmUdZvmBYE8yi",
  "key41": "4a2M1paieoh4tE72PTkLHjsnhjMvRNFTtuwJMs6SkCJLsL7YL4BwHtbwNbxCQcqqqe4hhENrhnbzNnLtwgAs6Ezc",
  "key42": "89GpR12mB2wu5UqPFsXq62JeBYKYhqazcbA8GuhXchfREzvP9d6dZmcrTn4sQWGE6VxXh2BrYKWquFgxy9zdcRF",
  "key43": "2Zi9f6ujSqsGrRjUJ6bYvBSwopBaZm1wtp2ZWM3d4DahTPSwvNgqN7nXXqFZukBQtB1GuM15eZxtkjSvsV8BrChJ",
  "key44": "3Fq9TY8ai3NM6gGPs7PjeE48vLaPEGhy6rPGehhuHUBfcZhR2WFXj6UhboPd9g7xQWKVdkxK369RbRExwwBK2oFx",
  "key45": "4yfvmMLgMLJbTEP4L1nLzLJTcVVKqxBDk1PTLRU8bvj8SKkVPo3apFcNkkUGZAskJA2jdBoxFuwtjfNPNswBPgZu",
  "key46": "3BJGWB96qk31JsXf6KG6b1AdZJZT828YMCCFKuqWDffvQTzMWwCEwLmaNWzudaZdbJzvHZU1m8pNVRdASjESXPXz",
  "key47": "XHnhsUBhRHqAJvimKZWbaA3Diye7zjCipi7waFL7KW11NkCjpwmDdEVqVzMMxJn85rQmXmH4oAtgwt9ZYUqXjUv",
  "key48": "2CmuiqFW8tJ22UQEGPqqGTfkZQdVPZz43LJfFfEzJw1GEfAPzr3vP8N1LgDi71rUPxuqx5Xiw6j5nLsf3uAajxtY"
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
