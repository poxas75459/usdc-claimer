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
    "2ZXLcV7J5sfzYTKpghNnnk6mpzFgJnQ7YvJRPry6yhHqpxJiXbgXR8USBWdYwin93b8wm4qhFHQstwTSjmXeZfa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4okXsD1jxV719GCvg8T4PCdTjo6bPJwxyRAzLeVNpGwuvmsDsBrZnzHgWboo4ujgtZFEL3v4kcjyTmmW3uSsDM",
  "key1": "4g38fnzX2ryqPEeUx59UwqhkxL382it4scu1FQ3hoiKDtSH8D7pwb4qei2waGkKZ9J4bmcF3z2Sw3TbawFsQeTiP",
  "key2": "GfjeDfWe17qiFF23J1LWMsjrYKcTXhF3djn8B9NWBejF2qahUFzWZe7Gj9kJUfADpchkiCTWNrKK4L7TUZjC6Zw",
  "key3": "3HKUkjgbmLc9TLLZmQqEWeRf6YZFAHu9K4YNanqaVP89PJMJ6PhhXdQL3VctK1tzgRgUjkXqjoMk8Bi84MDJdKLg",
  "key4": "3uGjB2XrLicua2aHyckWFWxqs3f5bG2WTngtBha8GZ3zD5LepmUS9MUT9Xw6qk8wFMQigtc5Ft5xxzoGLw8uM7SS",
  "key5": "z5RimkhA6BxgL3duC6RRE3ski9bnJKdGAogfgTbHMaMjVX6xjkQBZcmKxQ9T6UvxsD3AiwLhMyAPsFo7ENb5CC7",
  "key6": "4FDU3sB75DDd4UcTpkfa23vWLbzMZ2PhkYN9NjHEVs2wSMi8XzuM7B8hyZfCc4tGacgDwH2LnDvtJ21Xu8pdFQGZ",
  "key7": "2cHHvfneYCYE5LoY3RdNSPcxtPnSduj2ra6iHF4hKsBzbJSjGbJiZQNSBzh7sj5caYieiBpMWrVwsTkSPGE4QS5w",
  "key8": "5oq6gYQMwZuGsA3ehGPe3v8oHCH596xD8PVdiwLff3q5JT88zzJXfuGKcHCCpd4psLjyaVR28D4wqHMCKMgVvLGB",
  "key9": "EAFARveRNC413HHvjp9io7pDcLrwaShTRwnHXp5qokrm2DytLkcLrgDktR2basfE9f3DDkpK9KYxEiNpHz4RiRi",
  "key10": "4AAzdfweSvEUjXsGt3YxLEZXtZx3tq9TfBwK6NQXSiPMvsv5Sp1JQ5QbYPkiCaGi6UHXk8iHBNQLoWHtaYfHjjx1",
  "key11": "5fdn7DC4fmBzEeeTfJKCBgb8QPDTj3f4eTauXi2Z1CxcT55cj6iCMT4RXzoMHY9tpAYLokEQyKQM2jk7TWL8ZXRg",
  "key12": "5mf1sBJzr7BXk8SYKJC8NBh5BkEku6aNAv8f37x5zgf3yJTjZ6joiiEMkXjuGxTSLQUmPgSitQEB9zJvQpqd7CKX",
  "key13": "47Kt6Rnji72ErboKUoZswz3vXJzYyeUM6VJGHis4Eav87YK7Snb8JzJtRQHCApF12FNvRm2QMik8WAoLGpUBaxx3",
  "key14": "3jPf55DZE23VkJvGUA7htcNDqabw35VEBe8husgyAh5EpnM63Hj7w9NYV3JEUhbCcd6FsBHGhquhHx69zmhfKctB",
  "key15": "nXsMJfZEM4zRzkjVHGSnLxP2hxSUotpqrikKKVPjL6r7R7EP9MxwppUidxDLiE217UVfSEhq6CBEhMii2fH6rrt",
  "key16": "5f29Uz89jpsabKYYj8T3YCKsdihJ1LXVGw271vPsuNBjDoF4iBhxuTWbsUn21JaWoPSdUkD1nm8co4c9cheLeyBw",
  "key17": "3nLtrqTDyneVsFwxdqWd9yqqPt3Co88xpHy2jTTZNAv5sWRPzvs69W2ZF9p22FwgdLPyLsBZQWCXV35ht3qdreUd",
  "key18": "2MFm7M2nax3Zq4U9mPrA8h5WivGefykUcUoNc2fJZAAjB9nKyGGcVWSHguGSXdhBzgCB2Lse7rmfbgim7Em889Gp",
  "key19": "rCG7hEr8C4oTtNXwHtDK2VS3MbbFh8aZKV9humoxuvNedAjX9sugrPLkGXNvVtwkdEwog8CfouG8uzAWAJ4bKz4",
  "key20": "4rvmPUj1WwFhLrePqbdEYDyzGAP8M364MqB2UvkkTaA8TfpgsCNfff2eko3tP5h5kb2EXhXk3ACHsMNiFek5GYAm",
  "key21": "4Z9LZSfYgzr6Mq8qcped4pEr1BLaeBAbwa4WzWhFNNbw1sdZbkdjtWzx3JPntC4sYzfp11VwUBusvT2B6P2Nri2t",
  "key22": "3JgoDPLegtoRGXTW4mip6e3S5dATRmyaUDxXTpfEM4jRArzx4C8Zy1PvptHeoMcJaXbJYR3JLFy3p6iy2bW21xAs",
  "key23": "4nrdtEuf1EiRvarEhay4CLpJ8kABSzg8qcC4AX3P9PmfkZn3iVrTjiqAuy8H31Vrcmx53FA1nidmfGtx882YaFvc",
  "key24": "5yJRPXone8NWACCVpGd6ZrTSRJyyrm34ZKFrxitfTDGo6NcFAPX4YK5Eon6ZxZMvcnbuHf297YiTqAQAvLNDGDg1",
  "key25": "4BVb4MBLPAdPckNzdniVWd73mcD3jGxonZUNabHBAt7WzQ11jbur72npMHgDbutp7jxNukc9VVjKMSuu4wpwHSzv",
  "key26": "3JqJJM6LyY8XxLrDpgFziD2grtNZnaJhooxSJcbM82DMdnT7eV2e2TKkLw5httsPwDqqixKMmjiNJNbrrN5ytX1d",
  "key27": "5d4Vx9L4a9WZbcTn4M66989RN7SruAva7RXRC1z1KZ9U4MGtwooXTijaHWagNwLjUKzBUErNuq3JWXEB46ZmHvAg",
  "key28": "26cypwGborRioYmWE9woDxyWFFjydRPtTPR3GDkDiiQqjj6L73Dm1wGccyv2xJpGcZmV6H73KvcxWWXujFeBcgU1",
  "key29": "zdxB9tumxqppLJpPi4Xv7dWEK9ZUgG32fjibJF4CjsPy2bdcJqr3Tj2s8Q3bBEP5aygnjfxXBV5gK57Zsmy9L5t",
  "key30": "5o6cGp92h16HnGWKc4CM1faRgstfRbQVJ6L9hSXJ5zg9wWzMR4JwaXBU5A8G6fN2FKDdg8Uq5tdU1QSAUWu1P39H",
  "key31": "4VyCea1cuoY38j1M2ie9sTtH44raozerXJd1zH9jbCYmU3nv8H7J4jTGxCyos9UTCnUSRyGHhmabUwiAu3HSjEpF"
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
