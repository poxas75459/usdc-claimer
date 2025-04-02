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
    "4A6bJepkWzs5KWM1h5ujVZGxWEYHqS5xBFQJJb4vgwBnNwMovTXq7sPBaJzhs2JHASTZyUDsa3VjdP1DwrhVN82J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHd3cEVRUQPTaDt1X4Q5AtAafWRSNZo7KzUcCPr5tRiCshRHoY4wxfmoMPCnEc7yrr4QHQ1Xe9U3QRcfmLhJCPh",
  "key1": "4bP4pR4M8Ed9nQ1iVEbLdU5buz9qYtbucws2CUbUE69ZTp5ve1yNo9PZUBSrsq3M7XXpwpqwBokpLeVq2MQbQefx",
  "key2": "FKVHBtiLZVCXr8ydia4hZ6cFHpCbBLqhtYRhcYih3Eje9GNPEXn8WqyinRnwZXv8LbXrfLz6hwyZwMLuT85vGFu",
  "key3": "8tsRAsT3nHQZe4yFoXywX4SnZXdngbYcdu35LPUZtCPQSwmTUVD1CijAYqKdXobxqHyKgobLbCKDtbVbtVEQqdR",
  "key4": "4bFU8QDgrk6QxnA9Jcg9nuiiUYosKd13HiZHGJGNvKQ7oSo47paTxNbdGbycK2LsY4upBfJFrU91RDQWTUoi9Xif",
  "key5": "4xPBxyY69UWwgLF9JxiB9aTs2jumHHevfxTggTAVMgd6MkHppxL8x2uUYBmj4jv64feXPPbbZHxNgTuntRyirVKB",
  "key6": "2Zq7NdKyuWSViZyY84u5LCGp6aK5H98BFttZg7QfWWb8WaUNLDKm61McsR7rsqp8ieQQMzfDsw4PH7jjDXxCGYKr",
  "key7": "CCeVs5yLMuf4cXoCvZU5pppCSFKLu1SFLaZbjpUYHjd6Tp6ccB8Ri4KBuRtAfK37cKReC6yDXhqYmwQiQoYofwq",
  "key8": "2D98hwoEXszyjTJRhcJHVdLvbBh7nhHF67czjXCZqKCgsxe1pafLoysF9RxYZKHognozy5pm4rGaDyAntDi1Q1Qk",
  "key9": "4Y3ef4SAuycGG6N1g2vUoSvq3KpNh8pcYrBmb89tpnmEyaYh4xsMcdE6vGY8XVRjU8SedVWGuUyiPzuaQBZmUUos",
  "key10": "2UsHZjamg8j4aT9Fn4JgaoReKX4ijED1QJctrLhmCA61Nik4UeUNLpSvLwtTNyL6USCoLLVxJEaPMAZDXQ43jiG4",
  "key11": "2zgBRDNrvDu3JdVB5idgTMaAbG8WjnDAfuzH9PQwPQXEsMPLkYWQRY5jU19jEWu3LnhgiUomQdvG3Bp5FHwSpTDF",
  "key12": "5jx6rHaqihwmAHSt8xg9jv7rWqqmSQZANynFNGuiBEpa131E1DP8AfLwvHYKdUuRyxsD7niTQMREwV2B4PqCwjLJ",
  "key13": "5gcryX8fERgAqg7f2t9KncVqvGZRxDChdh1z1gpmro17C9meW2jePJCGqguDDHu1aVMUgvkjJrYqo9Ji541L8UTm",
  "key14": "2NxUCpHUJHXhCgPrq8sFQuLtFTvVP6d65yerkpKVeryrKSW1zaCe9nko1uosSy2RJGdon8n3qb5rhZ5WRqxC5SjZ",
  "key15": "5iDXvuVDWG1hDHrv8zhDU67ArbJQY37nXbbktTdVd6XNFRjoFcbLjaoLMeC6fU2poHuj9egQLiwzCotxPH7Z77mL",
  "key16": "5nkym93REMz91Gf3RDZPCFUv5jCaPTSKBdaN7M7Jxp7CrrnHeruxT9FBRgEccZWPAohykEtkgaubyE8VXMR9Fe6k",
  "key17": "4PhobyAyzxf3KmbwhRX8Sk6sAcDTYkV4vKQMyZLfpPLZs4M3mRR27gnpU5YiCkyyqor4fampDCrvvfSLxGvok6SJ",
  "key18": "2NrofaZZf5GaJR7r9GeD7UjHdKVzeUTCVrCgm6eyMkUQwueLNNzwih7oaLpEyGARGv6umaLL64GMz4aQpARpVhL3",
  "key19": "51q9wZPeeYwVhKrXzKbe5hYk6rU5Mmq9GzJLVAo9esGwRUgiQoSzhyy21NZd5mU4xyTb86baAHq2BPwNpUyiAfJh",
  "key20": "sY335v8ycaHHWhsVoZYaPEDLyH7Laij4ZtXaaMzmzmyu9mkczFS2ajkUSsXJVdEDWepxNso6s7Wy3RbFNbVZiai",
  "key21": "2JHgGwfYavF9k5roEyxpsc1bfSvAHaf8LWCZHVb1hjiVTAQpigKC75ryCNaWGF7HrgUqfxNhz9dvVrvCv1dt5cux",
  "key22": "2knQy9dTzMbEfHv6fb716Cddn2QLpb8oJGsLpeadgoy2EJ6Kf6QvuevB7t1Ez1CM7hThLs9PhLAvoshd4qECUuuy",
  "key23": "6fjpSMXimvR7QSLqStzfxy3GTusQpGGsGALkQj2jrWY5SvFB7RRUWJGqpxVhRTnY8cmM3FGeZuKskDBhbRzU7aU",
  "key24": "3qbE2K4b845Syjqkd1rmSUA2wS1s8GuFXzXMoUS1xJq13CGRJprDXgZbnNFyrJ7yJFpabdrCHnQ9tnhez3eqcNK8",
  "key25": "5uVbhscQ7xoTCyftnK96ieadRmTTnwVDeNTra37V5ykcVT9L3JJQUiFwrG6F5bGi1Sy3N4tsmyU1KyywATVp2riC",
  "key26": "3hfsuMwJUFkc2Bh9JjF5vLg3gh1Q9isF3PeCwMR2jVo6kvJBoc3nZpv2B28k5hCCRxS2DeLXEwnBnNHcVMVvsjnM",
  "key27": "2CKcKZ6RXPwQk5Kg42eW1atbmFbz1szB1Xc1gL4NTbBzaoKUHiZKYnH8SrH4VJ13z8571uVccv7pr6mJvDWzMwRY",
  "key28": "gkJ45h7JXWX4eW8ge4XSDYXUfAVzwi3zyry34CeGXYXREq34Dzi34nFxN18FrBgvaAyHFBWX8BtRixSSJcXTWJQ",
  "key29": "nKaTBEMMUtbjtJKxXCpuXxePCg88Po2TSYAXVVPr2fvd2MGys4vWdhGHT1C8nAS22QMRtp8QaFKDDzK1Ms2G5ot",
  "key30": "Wssa53DRGZKXhqziS8zhw7oqJ1jYSBBpcNbPz1VGS229HM8qMPQDsqNuJQZDXk423JHYKoJi9izcw76jGktuzCM",
  "key31": "FNkx7NCh4DjsozARFeWuPu1mcG7eH9kHjv7yHFx96at9Dvs3SeTTBEeBCwZY4WjeLabJMmxePXbP9Gv3GHREFhc",
  "key32": "4yRT4WtyjkgS8PJLCDwqfsvtKHqLfpPh2XmHGgGrSoCcu2Rq2DpeNCAu5CrLZqVkHhwUT4yG9MRLnXE1fyMm7r7G",
  "key33": "3z9ur8NTmdbZECSvudEkKb3pmpnBCNUTCLZP38AX69isF3uGAWMdnSbp3go9VXhCSVgwDfZY1AzZzG6ekMZa6QSY",
  "key34": "62c5KDtEYBYsRPP1TxifTE18d9q2jwxECmbEAxvUrJjpup86X5KCGbRRhXFYYrRrZjNWv5EDogwXPQGyCoE5hFid",
  "key35": "2ckZPqT4i4RApdNLt1mAAzWtCKkxUaUPHYMH73qFzBosS2gnhrxQvWUS22mBV3gXGUJ2M7RaYsgEwMVBg3f6yQ95",
  "key36": "5bXxmm4Mvs5zGwWYZwZqseR6Gogg7jXqAc9e5CN7kJE99CJk6gcNEysCaY529hae91zFmUcCochNDQdsW48moy1D",
  "key37": "2TWaUm6cPaAkitzqr5RotwdpvSP7XJ19S4FuqxXLKYWJX2N2FcxHmqjrHMFd9JadBFKkXzkpyBDw2YRmtc56emEQ",
  "key38": "3drwg69AdPB3gLBaRz9C3rExrYLZr8JhT2Pe98QkEBuWiiAH75hckHvVCLRJL1PmYdCuz6Pfm2FMSMtp94kySjhh",
  "key39": "2VkJk8DZ8ahm96Misv8TzbdXLg3pLEQEVs41SmDEsAEQzbT234ene3yzFBQXGdLfPTHe8mX3wamcbokQ1FXwuKkb",
  "key40": "qV68NaJRM9sbE7Z6zCmcj2U4iuTC2JntUg9TJFTBJCicEJ3vxqBKYFDEpuXHCyX6kcXp2irRC3YSLSV6UNHtqkT",
  "key41": "55ZnpuMUfUN8PZhpYSNa9jcoUYyc1uNx6FjWXSzSQBugWJ14k6iVbWfttqtsDkg8YjhwQMzjaB6373sTsYi6WkEZ",
  "key42": "XG2iN2wNzsixEYzH99oaTT2y1y7f3QL9vLhZWPoqZgetC5N9me4HCSAP4eoCz6gKU2juSDj7deVpcmYVh6bkkBq",
  "key43": "vJJ6ATKh83S8pvnopEArfrZonZPgv8nX5MxUAb7UMArPhBnDiGrhcMZSuyGNjuATXjwUTEPnoBavFPboyPKC7BJ",
  "key44": "24C9HwGHTuA3Q69XKY4LB22V2cFZbyjXi7jDkSEkZ6xVQ3Hz23Z9x1cpTkXj4L26HfUHYeuE57629h5bSTp8tpUA",
  "key45": "4BZWefo8WziVx6JYxCDCj2B1Y1tpt938K2YahZQZZJfSMGNJqBASccQF5XtZsT278zWtEhsDGBPXqMVLvUkSbo11",
  "key46": "3GJdBKip9WpNMbmxdigarKtrZ5VHo4r7kZAuBmUoKvt2xSSPjwTHsaZLPiU6esDFwtZQtJ6WsMSwKqjkfLGsGDFU",
  "key47": "DrCeNwaGcX8HmnZyYvHry8HuTS2nbZavFfMMHH1TpqRez3oBrJkRBvfMUtGLsUtwAW5xXRRZWya5hUPQamcNq23"
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
