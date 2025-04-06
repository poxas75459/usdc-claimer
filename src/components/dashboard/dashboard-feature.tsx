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
    "5CLHi6YzRyoyuFYZfQT3g1eVk9dTCd19LhfZdh7WPzcKFe4ZW3Uk1db1ZxcDvMFrVxo4sYXhqm2arq8YhNZebiya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pt4xcxubrse4CwqAybM8NnHi3xTtWjBJoXRXj5feu92c1hnRMYbipK3jV9i8ePQ27MUndW4gSkhwiVN8eoNrL",
  "key1": "5Utdkgeqa599QGikGZMZJ1W9RhFw4ZgeT8a5D8KpPDSyGGy5MNDUuYXCbu2SeZpjRoh9dX28fFBfxLfiHDgTnwJV",
  "key2": "2cDyEaozEwSNdq8bbASTVUYNzZ1JhdtDGcM1GGEDsCYJeLxTy1sYhM5MMf9wh7q4aKF2e7rYuVhTvPJiZToT582A",
  "key3": "5P96jnSTEkWFdvWe63cVZitKnKAmeDtf2bjMEjPuYvfKJWg9X3dezmCMJeZnYYyuZHgN9GRUZ5vZzxMofASaYWuv",
  "key4": "5mr77acVBCMucymmniJqGrj1nxxr1Zg4x5UGs4wznbxyfCeQx85gSSqwm4M6r95UttHYKuoibzw1waKbqkJQGZs5",
  "key5": "4jivViPrT9SCyPdUcgr9yCDt46HEWAXMqcZF2z5fz57KRwQXBBcKni76VvUNxRjeQvRmenedFQJ67vLBEcYBC7YV",
  "key6": "5tdBWgWNvEYq6XhHNG1tqANciC392TPqPpirPfCQERb3et5Drcmg6SAaKyLu71VzRXqw1FzKYTqZBMjy9MKDLiad",
  "key7": "3URpxBRDW2q4NqNY6DZzxdqLZ7HgeMnV9GzBXwHQuGAdFQnhxmifjD49WWhNt6wsKQQd3j2pRw9t7tzJtKFNqrcH",
  "key8": "4xfD2C1xRJo2qirUSNV6BT6CjpVq3n4j7udSX18htdn1j46BfTdL79BsZeAfrpfU1C888tte7mLxNw7HCQnRhyQq",
  "key9": "39QWJUxkR5dTJBVBdiQa93Bdd7swzxeazKAPKL462yGwn52MADkxvJ8iomxHed2KWM7E83BdSRp6L4iS2UaVnXej",
  "key10": "2NyiMztxhicYvahhSgxKjv4eC2kVwySwCXZ9Xb3BoDXGYPKr8p2naGJuK3VangvMU1XyA9r78nRCg56uzsvxM5Bm",
  "key11": "nnmo95uKjYtKtHFCNTNchsdUcDGoYzuBushifPJto1VLPag1GR359FCFzwCDTUEhqM4gcgCuiEbtiYctKvgs2CN",
  "key12": "2ZTJR6u632Ry5wRD9hjo5L1sm35Gc5wkfopkuJ3Ww9HSzKCV8ttcSjGqgNr1TBceTnRVHuMtLPjV7BSCwkrnLBcD",
  "key13": "4N2E62n5pi7UYPAJsfjZ73YPeXQkfHRxL2MQFAksP4HsBK6ncYBeQWdioDmdFiPiayQiSgfRTo54MjfdoExpYA7",
  "key14": "278mE581qb44t5qHx1Xgrkp3U3DAVpgm9hmbs5jxH4xLHddH8zv9Jarc8WgSSRBjtxW7Z8UwyRLKQKTWnrLK838Y",
  "key15": "4ePVRkuKprML4jE27M2NV3WH9UXUe7n2DT7GvDFJdXM2xetk3eqkk1ThPhCRL7NefZ9a6HudFn1oiQkKakNnRrcU",
  "key16": "5CoVPsDSwnJ4PnoBRYuawjVHwFv2aAoNPskW6NsfzVEVuEfyxRfFUzPSpre8dZuvXiweDmstbEnJJvK2eU68ANP5",
  "key17": "6278oixXFhEyK17hkyerBBw9DVNCeKuKNJnoiGBKSUCdKz1nrxVD1Dso6pPggFgM5orN3jvvX592LzqdPM6nWU8h",
  "key18": "3WXBiY3GyT7WkDuJjy6mspBCRYdSCTkPMJhhyYexbnk72MJtmz4imkmsdCJzMWqmtYJhnQSb9ywtm6CsJ3T46CrA",
  "key19": "3Fx9ks6ZPzBL1zijwGGcZoCYC1ptbvKgUoQKKu5w4frFNgawYu1NTRDwTjxpLkgvfbSGC4WivvbnZjZhgKLcqmCw",
  "key20": "x5E8Z4P9Q78pFt4AiFdP9Ynr4Fyujz19nZgbhFrfJ9CEZHS8Efj4trTxGBaZKGKaihn6cDzoD5HXjGkQ71nEr7A",
  "key21": "4WDj1MUwwvYE6Nj4n4TsxYWxoXtUYDgg4kx4yAh9yhuTM6e6HSK3a5LFEhLzPj7bb8KdhVtq63YC6Ud1iSGEyYEx",
  "key22": "2eEApj2pk3iRViRdyr7GDwAq78Co4pCoRbAn5biuBAW3teFuRuuDvVsVvEm2TcPHaFtAYKwy32coNPhV7GDK8uWg",
  "key23": "46d8m7WhiyfgrsaiWPcPTHQbcWZe5FuRo25Xy2fdr2SzLaGPsYV1MVDfeLfAW9USJQUbdtTkQW3o4wkzaX92Yv3A",
  "key24": "5a8WM4tQnmvAm7ETcnw4t6vdW5deEFuhh2BUSMA8acE4JjLFEYCZaLaySKncy1dSfocEnn4FWRATxWEv4W5Ah5Qk",
  "key25": "5GsvY3kbS6rFMFMc4zSk6yoHeU6SkrCL2JkhXZ8hYuxUmSvWLYtTneGFUsY8VhUexNSSX3HBSv4jcCRiY33xthCS",
  "key26": "59r5tfB6RoRP4yrGV1ZrUHwfGNDaHrrT2FGLTNpzRHqLsBxNg5Hk5kzbtniphvwLKKQzKRNwsdygETF9j4RGXQW2",
  "key27": "2NuLd3rAbjS8mujWMZnQAg4i7S84NJsicY6XAQqFhH9aZmMTbHJkfKNS2fc1EyS4KdsoEo3nUBmuaxyWxefQqsvd",
  "key28": "CdXDZGVcSJD93X3YPSnGTnpEig1WMKXj8N6fKGEuSeZ5viQzEcXPEY7hD9nPDPJTWv7XU5LPbLLp3P3w1aSUPAC",
  "key29": "5fNH7uviZQvjfgmkDjuXSLymnkJ2U8iVwTduk2VLfSUi1GRvjGjTFUw2xqABE8pZ9yBCrNnbTFs47U3x6dMbPqrn",
  "key30": "2bBC7Y8eJYi9NkUbXqbcASRwVhh8DSoCdxZhjNDC15Zcg3QsZKx5x8Mov7SNznDNWNhAgJJGqA1Qq5XFkujwMARt",
  "key31": "65zVTHxkKbGDkRGDYuJv7cUuru9Z8hYv7bPADa6i75s4r8A1AM4YyA9rYyH65JpMVSYGxUkwDFW7QVVX6AHikRm2",
  "key32": "3hgdU9X2NacGZSmD5T1jCpEqD1K23ToiDXEMyqRnAC9njgzyrweMBiQtXudSmb4PNRoEFgMBzqAuqQg92Ajcbw9j",
  "key33": "pq9uawzzTkbwY7t7BWVoydZL9JNDQG1L2McsZwZpGCDVDPbKquYz9ByWTc2EYZEWGT2wbPsEaJXTUyewn7iik81",
  "key34": "4gYumc6afpGaNjxA1AvNzmyreuQpZyd6AuvZ6rEFTZCW3pCFZU94d46igiTWaAWUhje7Va8AR5QhEKaMQWtxtCmG",
  "key35": "GFMC9YqjRNNni9RQN2TspcNj7DG2nwPMB3mKCHnWUgLcTb6HSrx1DQ27Y1Vup5pKAhTL4qWJ22ZmGTvLGPcywm3"
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
