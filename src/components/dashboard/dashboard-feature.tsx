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
    "3zH8wrqNziiBDcQkawTf5EJJDcvo76ngrNkg61mksjPv9SvcwbjwbPop1yEY6bRceSVmc746r7dC9wNhMBBWLA3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGtbXQiN7jKpBkgygpDsz4scLuybSDZZL4y66vKXqmG2yzqt3pZEyf81riNE7XKX93JBbYVsJ6mUpKQmjWNjkzb",
  "key1": "4NnZbod1uGxJCWDnfLpTVY6mdJqJB2ce1Jczi7B5t5wfbW9jorpaFapotAJZ5STqsPiHX7wtCodY36dmKriaMFHv",
  "key2": "3zZoGNbmRkhuNoeL6av8yGbAVrJkgu1PjgUrJiHL9wsQrqv9UspH4a2d32qVVitAWRhxgETTnTJ59M3KhDsBm23Q",
  "key3": "4KjBTa6uensSaa7jYA78WdoCL5rt27q7xSy5WT1j61fcZx7fxbV5Lbdg16WYwE8nHRb6X8XfsDYVSs5p2pGTRa5n",
  "key4": "5UdZ9e1aTYmTCgiapAGPyhsgLFKcqNYsgAdJ5rV2x2TeUgWsehYZKHHu4x3zZLoENQpcwBJW1XZB6V2nbMRwLcCq",
  "key5": "4AUNv4VWWBve8GCMtytb3y6JbWxGYPAgPigf5q4XNBFppB3x95GUAha22xkeYPsmHdXBbBuKzEnWGzxyHr3AqxYf",
  "key6": "3otxYALuopp8eNUbp1TY62G6QvcxntiAv1eBz6AN44zYm3PNjvMENfEvcMdNCM3oDv4LQbhi3y1sUKGoKcxNbTrF",
  "key7": "2Hs17ePFCV69GSApeTM2L1RM7Dn4TckoTdwR23PR6HKu9HGNmfZJE4ran9ezcgSiTWMULRT2xVQbRmmnBWdydKFJ",
  "key8": "5HVHCG4CbtSc8unm53oNJfxQzrgbfBcMrbBUpcQSBDMHzz1jpvD4SHzRsMf7kYZXsWyo9LiFo4S4Nd7Kt7KSS75c",
  "key9": "61hfytEhtHkSaNXRpBc32nKMwDJxiMXsKAb5D8KymxF5tkdkSfgTbpoTYQLga6sYWhiRz5roXWWD8cqJsLtaL3WG",
  "key10": "5V9gtCKW5He1JUUFzx3dgUy2KZzKgd3j6aUYDjUy1CcgwCBLhRxJcLJ2PhuU8MoD87UPsSCP6C9RbzYgUqHTmm4R",
  "key11": "2inrWx966Us8eDKaLGF5WgWgviSE6atNP3SuR967LAboqfezEU9gNk3VvkKPpgfB2xy7MCxVVR9h5uVp8R3V25QE",
  "key12": "5mPJ3G7TaTFeiXgcbtpMADb4mNvi4npXWFvKBSzEz6J28hca2WWsVPcnCX5bMEr3ms1zavF89o372wjvxq35vpnc",
  "key13": "3zN4icvVYUWiZEvm3tFmxggAnZWKdjYM3AcqP2rUtZnGzdMQaKSQiv32yg2NPGUbBgmJk6XxiQcifXxHYpJvHetm",
  "key14": "2MAS5h4wqHGdFPSxcvLKC9N6GDr4tjsqqXmEh1YFqWvLPKb9ddZkMPCr3vYEajPxmBwPzCcgDgYR6JsVHXvzxHdv",
  "key15": "5uXa8yH1vchYvdxHRattgcLC1DQ2bXTj26HPCXynfSKQvXHnF23bHPAFCp8jicgGjaqdw96Po6VkFTrHz7nRHVZD",
  "key16": "25mQkZn4spcgg5AokKn8iqZzRHFYbQpu4R7zaM9u5PtcbG6y1k7PonW4cBeuYRfBXjhaoiqQGKVDWsuJb4at8dTp",
  "key17": "fJJyCTuznzvjfZNQvTVcUssL5qjBjgKu9KrozBBUFUN28xzEn5eJSnAntZTwfM5DxrKmaS7AmiwVGtgHYCvD4J1",
  "key18": "Fz3gxnEzBqMZkBp8vwDfAVmBdguknpTnkmRwsEQtcbe3qq26yDJdR55FyxUVmHc7dH3XJ76VioWQNcr9F23L1PU",
  "key19": "4DESUVqoYixiQVdFR1RDdGVAkhGt8G4in68sBELk7gvgUgjLqjjJ9h1rfegUfUQ5kKkAexoN6vHw79unMRjUVF5U",
  "key20": "2FMXpus5UptGn93UAyqTqrmok86uAN1ZtgQrAiLZjJZgfDe5qqtTBXUgCGpJFd45zBQ3RxqbZ8tGVH186Q8NRdb4",
  "key21": "4WecXFdZ8zuFQ61GgsMC8RbrobEy8STfSVugDar7VBhUXUFyM4KvbiuyEQ62kkyocyue2J7fSqGcwEUgwBN2QxW9",
  "key22": "3NwBuc2Xf1vitAXJBLE51g3Joy6NKybcwLvozkjeeZMzsEEEBintyn7RLYDZWxx62f4RYeVPDF4DkkHRubDyDXHM",
  "key23": "651wmT8598o6XpxKN7u2LBNMUyqRdK8czYEQA5tw7uvpLLAhrAVNYZXdbHEdceh7Wg9hCjAFULLCrBzdRKSzo3vk",
  "key24": "27asXNBGEKo64dnUpemW3Ddzg4k6oy4Z5HhXfZgXbEVQzvfGV5w9twAtMCdazqaDXnEa1Ps8NNRQYKb3QDDAzJXL",
  "key25": "2m8A1f5z4SxeMp9gdU63pQLFviBmE3W4AbpKUF8dbfvBSiPvesECLnAMrrXpaYv8Bco1k39xdKTZwzAxwrv18fwf",
  "key26": "5QsK8e8qxX8EyBDe57oRsH9dcgtSJnMXAnbuNxL9FkRiGVBmskK91TvembCNSKZYGi1iZd8nepZzKMJg9dGoDci1",
  "key27": "2v3szvP6NdJt5fYyfeDFvWS9Z4jo9nfAqBBtgK4YVumyquNG6FLHpEmXnrMK36xT7cXvh3SnhjrTafhZg4iynn7f",
  "key28": "3as3LLu9TY7CNZNuGA89fC2aWcxvGMxcunoRTMw9s1q7AP3YKz9tDeP5YrDKEvQZrmF3ceKZXsse9CwpmdzqMB3B",
  "key29": "63SqZTvDQYXMqzrLhmN9b1sWteSwCB1txVkn9EqXxZJJPXZGSDpdPyin7GurFKEvL6bwvWVdG7uvAo3D6zgK21gm",
  "key30": "zUMDdKFL3VrX5vQ2qxXahrWYi36To2nESxRhcZvdZQoFwUH2BZK7iAibYnGVXZy5Sj8JkJpysvpsczXnVEvmgGH",
  "key31": "eHwHHm8eUWLXMvALH7c9qZ56C7wC4mb99wBcQYgzd5xjvKRS6Rm6EUFpmnj2tzfdzyAPuaZ5hjq8NPXEfT64sRF",
  "key32": "4VVimvHdxVBgF2rVkXyVt2XJHEy8gKEGSDp2bRgBuH8pe1c13bTShiEtQQbfojcaDkkiKHTRWdyChqgULcfyP2Uk"
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
