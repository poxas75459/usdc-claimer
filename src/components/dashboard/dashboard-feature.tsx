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
    "2AaJtVfvRv8KQJ9NWb8xW5fghM7Nt1ipcru5H6YqNuSXSHiPZz3zzV23ULoeLaNGNwM2qgPReuMxS2wUHgJ6ob5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XsedkPrnweEvpAg4NcKT3yWy1KNBdqEz3jUu71b2sND1mmVqws1gpvMs5egwYgN6NkUSHkfgxG9XQSo6KbGXjkg",
  "key1": "374zu3s1ibuRa6V1FtFfYLbqZpDsoi3QvxziSMUvT1jYXfgJVrn9hVo2oNFBpF7wytXkFSmYcZNejE9jmfpWrd6o",
  "key2": "31ScJk8eoqyBVg5oftUFe6PrgYVcTM4uGxvPHAbCcQxpe5Y6ww4Y71y8e8waiPkGbs16axNnCvGnufnWP1dqTGjH",
  "key3": "39JkKtocgDt1JeptGdiZYTnhLJeYX2GJY52oGkDpgj34CSjYLRbJH93yDTGvKfTQfE1aC4RvLDAqmjKCQP6s9zHo",
  "key4": "5dNMTFpQigXTS97a7eW2tALp2p48NZ3EjsZuCTfVTEyahLDL6LakAPpyB3pU69BTRbvKL5mYyKWFuPF2r9n2YF3c",
  "key5": "jrAjrLDW3AXFHoT45gwZmBiCkjCqYn2YbvYXasB8d6ZZEHVDa2LXebaUGhWWoatkhbpbGoYEPE9jkuyPxgc6R92",
  "key6": "56JJjCFgBT4HGGNEHZm8GH9FoQjeKGztWDoRaK2fhEtXabVUq6rqosK97p6vWgaZJN31wXiJJq3L1JoBJwFBmsyv",
  "key7": "128arFjwtbYLn6nZ6paCG55G4ac7rmoMqrV9FWHq7PbnHHrXV2g7X2WpsoUomgkooZNHQa42BvsGoRoLjbx5hLFD",
  "key8": "3tFWfiSyqcfyCeMkVi7siq48YPnpHq9uFRCRfTdjiMf7LVxvbC5h6tSNwkZtV9X9HfXz2ohs5ZJKgSCMjBetQsCp",
  "key9": "5x8SKishiLB6jkb2HxCQXdh7ZogQwyCsmhb6xviebk3cgBep6Qqsv6ZdsSfHRjYEoBJTFTkoeFYof2kEY6vfrKLt",
  "key10": "W9yNTLQbaJvpBryQZ5acHMWbGNBGr7crs744RXTSATgWvps1NSKAuayNnA4thvnJ4zRByj7oJzwNFT5woU95vTN",
  "key11": "3DF6pwBk2RXCxvYEbVq7ytcXtebFXnKMjTX5hwmPQ9xBGGCyMgkJdR7XnsoUQeQovjANayriMDHPbWiDCMFY9uuq",
  "key12": "124KNUpcDVvrFjvfEMrLPmdjKhx9PxecSYtb5DWyHcADRmDmMKFNKpKKSqhEcQv4PxJWqWBqCwQMwcEZEtEWQN5d",
  "key13": "4bBzd6vswPupc5wVmUuiteScfHrjMh8aN6z426562Zbiui7yvCHNepDH2zdg9y3aRmTybga5MmAaAtiVgfzbf5jc",
  "key14": "46fy6KxTsonVDuPE68pXhHempFRp45Yh17KwWyF86nR8NjQCLbaYR4uCNPh18xmR3k7a1XAgCyhEc3rm4yt2FdZb",
  "key15": "5TUtzoYv78qreLTkKJ4ygoK1p4MP4LNboTb2Zzohe4QDYjvAZXVCRYfw3DGWvM3JQMUpYVB4QDv8MVfPPb8NUm2Y",
  "key16": "3xsb8KjobWAyoL5hZdGuoogaM9ctt9yd81o8xVjUfFGm1HNchuPYuMomwwqKXeANnkTvNg7KQ81AS3ERLQRYDN9h",
  "key17": "5wrt3gPFqy59Q3qGyAoE2PheffAYCrSoTLbZceaLXcYVizEUYoidb7tbcnpkvkJJXjhKb8UrZSpMQkWEA92nArvG",
  "key18": "27cdeTNWaLptH1bv61r7WGEPjKLWRGYri7VDeCKV2icH5Jic23qCzyDnXiZEZVDN2Xnp6pd2UxGx3xd9PDZoz5Fn",
  "key19": "2SR5QYtMekJDSYV5cUYssQtzHkicPiA48NYK7N4uVMYPekoczzaMc9TA2nxoJbuYrC41UyeSnYaWVZpN2KrBaizc",
  "key20": "3HGQnrVfgRi5D6HrcA4cEy8rhyD9KpPs74i3kFykCYsyijyXkij8JMR4xjLki9Ngy9WuC6X3Sxitfyd98Phjz815",
  "key21": "18znMzTMrorfpQtm4qaeSDT7y3g4jvsYsrqNJUVfSXeSqtGuPJJjq6BoDhKAupScw43BYHgrj4fFJ2N8Dtp2KHB",
  "key22": "2cAFmHpT759WMvcUzuuj7yqZcGfAWKBCbeKFwJ4oR1xyibYfVETDto7XWYEhf8nr1fH2KQAq37M25oBfsbmBMAc7",
  "key23": "gbrFv281y85T5xKvpzxYYYd8YwMHgH1AsdSv272J65nnYqHRVKFTXVhfd1Qdu2DdbZPdZe7UU2aVuRFXLkpAydS",
  "key24": "3F7yVvypxLzkJ6eX5xW32xhQsrCbXoURGzz75NYWSxxsTZ3aoMM4NaVk1ycqDxMx99zsCjhWgdiDeMQ61aLkoHuV",
  "key25": "2qKhs83Ubmhcg26ujXFvUB5ndmN6pDcDPE436aVPNu1FCptdiyEZhMVWwpHts2yvc6hGH8ChzWPj7vEy9LZnQfy5",
  "key26": "4YtDskgEnWWJxnAaMKHQLrxEHCFx2Rajv77tpgmz6GnPbQG7ywiZMiPRcMtP1apTM8M88b2H5SeAUuKDZNJtZz3m",
  "key27": "3z2cBXPxa11ywxCJQoWkCJVhbDwYS2VJ46BskFZSVYjQLiq5E9UPSTKfPnrXdD551mHBEQwzMkw9rDQfVYJWz2vh",
  "key28": "5ZDpiFBdDgcAYPiKm9L7BppJe8mbrsKgSFJaZkG8VmqFnvrSUUernwSKJkbtHgKRqUcTccqDB3nNdQHYLuM8HkS1",
  "key29": "4DGdP6g2zaDJvnuwYrEUURUjqXq2AFyDYv2jfXiTqcMhxUQ298TKU9HT17ryU7V5kzfYHdx88TgyGWviUMkh8eXL",
  "key30": "5xmqBbfdgkei2jaRyX5WPcEg5youN1nDfhY5vP6KCP3ccwWLWwYLbcE2LBhaAHFHxb4GPALT66kJer1YLiVGt4AE",
  "key31": "2Q9dsrvZqn4up9yLaQkVBhXMPEjBAoV7gaDG2GX7g6WeFj9Q7DzDepnpMGen1nBRSHxTUGT4xBLkpq8FtSNhVLPk",
  "key32": "4nHg2inpGsbLEr1iAKP6jS1hEYL3oNJGixw3CE5E4K6S6ZCBaiswMJz5B3XQFgF57mjow1GjczQ23LrsMB9PoZEa",
  "key33": "49WS9YKorE7ZDdMMzWprgJsZz8qmDwjyWJu7k5VoihKPu2j9KfvCUERr39npGwqr74vw8vnBJ4cfMvXhssEpqg8q",
  "key34": "2YUgxhV5vVT4D8UiXMDGwxi969Fozzthhc5CWZwPLPNzYTn4eboDBcet938tqYgifYZTju8Pfjqn9R6zXuyWEMMX",
  "key35": "2xmEpFycmZyEXua7oATZrHc6G53u4qpLzwJzVvpiTucxG6Sw5QnVLYvrfRc2Cy9RoGHv9qbDXM6e6GYcHnyyutge",
  "key36": "VW6f6Sbd7NevcSTU9PCYCvmEBTpmW3oPVkhyVUtTStjaRBDGpagk7yoJomQWsuzj2LqvFJfbC371G1ZP3cxd8XK",
  "key37": "48PNA1bQyzRVc6fFt4uBBPVmsqcmhaiUm8aMX7ChbJeJYPHHrD3KJHXmC5VQg1T6SoHsbArqMwGqWpvv5bhzfnjM",
  "key38": "5WwXoCL7VY7kxdiRhC3URVUgVzysMyuENrsDfQUqmVW5aWKFUhsh94ytpLZ8GboDJb37nFaxXHbg3h86DCcqGUWp",
  "key39": "4k2PYUhEguyRGaKx6KwrvfDMJxYYPp35TYY54Tbbr2y3HtJhkCoNsEYEG7A27HpnvDdSwP8HtkfUAzx9zupXm1FV",
  "key40": "578tvx7grfvqdbpaYkZNT5CSUExDX93AHRmo1ZmzdCZBSjWLzqHt1Tvv7eUjMMFvz63XrnaB1vkFuKe1ZRfp5GT1",
  "key41": "48XSHeWS1CsQMyK1ax7zxEVjWTL26nFy8Lasi3bnPiwd7pRUW2btNa3ckMcudN8Eoxoww8SiqBwWmWaF9tQ5PkGK"
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
