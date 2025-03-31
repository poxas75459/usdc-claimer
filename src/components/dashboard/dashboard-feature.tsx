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
    "5zwWqjqtrV1aMaRkxA9PobEuLBxFc7QD2TeaKD5jGYmt9n66ZZwA1g2hRPUQA44cAWvMsBJz9RJ7EnN2BiWN8vsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVb6Vc6R27BJQqxBsEa1vfwkY7iYjVWoD9q3njxR9XfVrnBNvD3SvY4rzEdfnBed4pfgwy9Em4wQzThtVXF3P7w",
  "key1": "2jKoEKjzGwRHcBkrPWUeV6ZBN1AqotB9tKNiMAraiZVYU4Nm5nXYSk4JcKm6UM2GjEMfB8bQhkSa9DDgdVZUwGMU",
  "key2": "5rrgqgQKuooKZufqpkxvHhU9NZXWXmLCdx8gh2gTZ7hc19zGHnaqF1vvHi9Nc6odswQ9r8wERDPeFKwpC8349331",
  "key3": "5rzDjfEcuWHCTbFvHf7BumKzMmPPyT7sWMpnS9c7uRj6kjjrsm48bPubjfZBfaJpzJYffdM6GQA71x8n4FzLSer",
  "key4": "3G2t6GNEsPqWtauAds5YBb8A9JyA79rzNy43s1HnUcSwdxkfgimgfPFNDNopBbspkNRwGQd7UhqxuLhXAmavjzeH",
  "key5": "2TGzsZufMi3VV2jbJRyNM6rxcTJko9DexXDWGPXwiDVXyTbYRxYivyJLVgPfHeTRE23HbgR3hY9ChevjFVy9DZFt",
  "key6": "3emCbdfxWAP51WfKwv62syVYFU8D3GfpQK6moybwpvCJ3XJuLWwbip4AXpwWfmEDktuGjbHscHzQYZ3UYefeW6gh",
  "key7": "32fCjzK7d8QmYVUfgyEaxBmbgA3F17RwpqyDJLzDwDn7eHCb72abJKjPVzmXSpKYJMsaGGwZxwE8fxWNyHmr3oHz",
  "key8": "4iSc5dAvrU6TjnJ2jRk6CtQi5LT54EpeEqk8RDxr1L2rwya9YqKs4VBMVPUaatE6JD5whDWSv6MsZHdwTJ6CEdY5",
  "key9": "4BMr8oAz1M2h3gN8GSBNj8eGLuLUb92xeK8Z6sUzsWKrYYihDZh2t19aZy2q4DdY4haxJwKcYcCGKWycCbRrvvRN",
  "key10": "42htq6UJEVB23V14AvozZTgu4uVh2wNS6X2UrA3wyMRbLADaPYXG2qwhdL4Egf324MA7ef6w4frAf1V8YjCxtaDX",
  "key11": "2qX27dC5eweeu65nCdEweXJ9RMemszdgpXwKNqpsQE4b2RHdJsffpLzFx8PTATenqbtwagQYFTCNATswFsXGYuGQ",
  "key12": "4WYdFWE9zNUuPsH4iKQf2pB6hpDq37qh87GuNwGnDwP83q8rHbqr2VKSK6FbPZX2VzUGtXGEhRfzCa4Fq5QT7zxf",
  "key13": "46N4VoqtnDguniHSzZFyk1NpibvMrnb3FxNdvL8pmVDyp7EAanRwvjJhbCwz7JmCtcLgvDjYuRKsdGPBYKaTu6ET",
  "key14": "5RDqCG6mJeHX7RTz2yDGUZAP8g3hT6VTevPsA4n9KsLibGc4AEwVDaVc5YydEUXiJLoQ9KesnmrYnYmX1yLz1gRf",
  "key15": "3MtDEFUNmedoGDSe63GoR3YRWVPueSzJYY5aR8xc7u9rqG2QYzqzT6MRBQ71qerC6rMhp9GAdLdzkCx7g1G45gxM",
  "key16": "2DV92utgwWkoyVwh5zAtggb99Per7BvoqKVwhbhamcKthjDVNw8tp6mvx13F5mvrpn5anU6WcDDU46q7uvHbY7Zr",
  "key17": "2GWf4LryafQxs5YYfHG3W3GSpE1WdhkyRmBBfbb4y1LwffgCqyxmnHrPpFc74pj8ihebobaWbAqGhD1GGinMtvfd",
  "key18": "BD21kxdzCz9QGUxds52tuoDradrKcqQH94KuRFFT1xGbxLGftSMLExQZJKpPvFMMo1QhXUHnWTtMXdayp7Z5Zu7",
  "key19": "4cNcyDZUVfpRZF9rLR3vXaVRKcDqog6hPJY9ozWHD52LBAKLphDo5ZMhTiyLKjxFCm3LD5WNejcyNXHebyqajiia",
  "key20": "5topt9gFUhuW51XxHGeEpdK1bix9ZYHVd3fZQhrjcjb32vudSQt8gKyBMzocCRR774wUytNUPUKQ4w9PWZF3XLN2",
  "key21": "aSBdR7ddNVruESYiBfBspkYnii3hLrQm1D9CSrHHSyrt9Y3PwQmBMXt7RBs9AQXtjgBkneLRazKwCMrzJHGxLzy",
  "key22": "2UD4cRBFjTrg8H2gntc8Cr1zH94x7vQtyAte8LSVDoF4pXmLZjW6cbqKqX8CFzp93xeWbdBXvaVZkBdru8APkQRp",
  "key23": "4zVJc4ScUjpKu6LJcbBZDx2Drn6AmGD5LJ8JWWPdikrtvZr5wbup7aNiCDYsuCbigXHWjvGLvPjt9mvs4zCaYRL5",
  "key24": "3R2an7rc7FNREKt9sTpTvBMnNiqcX5MPwGvq8KM1QyTv2mcmrKSp9Jk9pyTsgjKqcGUxpUAXtzxtmgSm1ni5PTLi",
  "key25": "2Yi17D3VDA7vzmge9xSMd464ZGn3H5oY8h5y1MDLu7FDkCpU47PX4A4ZmQrY6AVwV7M4MBH2XjMfWv3DsecM3mKK",
  "key26": "5VguKss6nFGLv8zRXAV77a3FmHNe5uTpj1CfDbgE6eqPcFi4Ny4KT9eVugtJTcEsUSgs5tyhLETSFXTJDy1snLnH",
  "key27": "4uieoTtoYyUcSLZtGPAh1SE5N5ayy3ob8u3AsszPKriEPeVqFHjQG5uqBSXLGHw2tZvVSz1UqvBN6xcqVdPwXkWZ",
  "key28": "3vGUxm2NKvK6Th256QjVTQU5aKL4kuyGRo5D32xiTPdo5GNY53rcRAPgVA3A7fEgEA4FRKBAfg9mQ2iBLaqnTxW7",
  "key29": "3niemZf2oUk3UD2txQBeNokyhgBbyMYDGtQ4gcVuw2CfKpJT5MyfCYtSdq6u8FhMFh9TgiPE5kwAbVtjcBrzXhvC",
  "key30": "3VCzq8ockTQ59LxP5AFwRQgW7dRuLRufEFmukuY6tU9Qfo362JtJPYeEpdWJZbxmC52T7GB47yubnUoMDpoN6pcs",
  "key31": "2M2SuEau1vGjJRNNCmZTcKS7iij6mERKdeVfHSB2sLuF9r1vd4TjsvARiWQ2G94LcDMnYy2bJnCjFEYqbyRoPjCT",
  "key32": "3Bj5Ha4aV7yLrABAqE2zKEGydWsfrB4MdWJvfXG2T4cq3963C9tmHdSEdrQZATaaPjmWMoHuqyLoyYg2CJDq2QMv",
  "key33": "ZuzZnR6k8vShdSYXQfns61umCFS643EhoMhjbUh9m1s4y7t71fKktGCH4oDACmbwawEaS7c32tQHpNmtJmrggSL",
  "key34": "KezoeHCSefpEDBJbTdgMj7cGUBC4fKNvrEvS7xPkwFPjDLMNELd5gMjRaQH8wtVQa4e7w28ZYezPmZyD2eNacnD",
  "key35": "2L3C1VYZoK4dNFtBzFQT1b8JyqDpRzSqZnhMdndS9Qnber4AHjfaFkvXLJPoAUniAyQWdgEh3nFUfzb9b9uLLKwN",
  "key36": "3hUzYKucdDftUcNGcFPj7yFY1Cv75tG6LagQdDbVCFE3dsBv1sHS36FieZBjYdhnQfA8XpyphihQLzvg6bFyWqNe",
  "key37": "5uz29xH5LDgqVZdZkQ8f9brdPjQHoVTSbR7kiLPw9hh3NnRhAh8yMqWoxtDmPRiRJtJmVXHW8zRSkZU93bDmS5jL",
  "key38": "29oFhupxqHPbkEc5WowgmHqnmHGiTp3q5K9AB1SauoTuM3d8rXG6uxZgGBY7EtnYmyb8bYZ2r4DvazGsqn5dXcCB",
  "key39": "4AnYP1HpofD2hMWR5qjxhiyQywyaYKMjgxSjCg5j9PQ6Rkegthg1Ch1FXdjhUZYwU2haGQitFwU3rQrv3cw6ZvCJ",
  "key40": "qkgGUV7qgeWPh365vpKnpbmnLiHCxrTSRFv4ThBk1UDRkMkgteEAvWF45xc4FjS7UpNoCCgQXW2yRGSfkNciC4D",
  "key41": "4X3dAcE12mnJ5FBUkJ3YXFntvYAG8KJQQV1ZNXE9Lht3TQXe6aehauhYsGPdpe6ExLGonfd82Aq87LMCdSkJtz49"
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
