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
    "5eTFekHT5xj2us2DVfsLPcU6CfRXCvXHdiAh5ekkbPrPxZHwrtWw2fTa667o6uva5UjACgczkGtAZoZ4UFa5NqH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Aucy4qRdMZ9pBeKcnDeYtTjKubdv2Z722YwVmBHLqADejYCEMCNLVzRFW4k2ZAkVzDqxbBQUbGMWRFeNQEBtTt",
  "key1": "pZbVyP1nzzApKnR9QF58j2yCUtKKvwziFBDa7YE5vRCYgqhSFUUUqRGTZDJqWbW8t5651ptE1MKmQ5aBhb4wANJ",
  "key2": "4W1nocwphC4sUESTCnfxFfS5Bydgk4226zzSu9RFzzQjpaHQQZSNvvDz5Hgxv496ACLArzFGsiptv53uogv8u8aW",
  "key3": "41R69LPH7BFV23XDTGfjZxsm3q6AdVz7ifFopbBHzRXrXSjGhtrkiGXHReNVC3Fn33trTsmvVGdPbABHXfeT6eoM",
  "key4": "5ozeW5DkhfVF2YEP8mKvaB6KNYLcbDr43Rx4gzLYPQyadafRKXRDCkK832kVjiGUYbR1DfgMYWZEFWrcwBYaxW8n",
  "key5": "5Zxx9jQ4S7LmBQKJs8X91ma3bvAWheA52YCnk94K5UwSNB5s1dSCSR7tCeDh1BtuTnUr5gTseMTjTUZXG7Ltcbtk",
  "key6": "5LuRpas1Ktk5pTYEaGYpzH8bsuG7ZHujf715sWRuX3qXh5W3gZcw6HS2qUdVmVt8aLm2NPTX77rMo4LyfVyqJD4H",
  "key7": "5z9jf9KUVBV7CUcHSynAnCFeq5FYkcwu1xhqPZwPUJg68yRuJouUv2JAN7nDqVugQ57Fe1sHkpZMzcbSe8tfdh6i",
  "key8": "w9ParV7EHSdujkivPFqdRQA7kVso4KcDJT88yBeceMVtr3f7So5jeTvPb4U3phn4ifoANPJqkuFWCFvyRU4XLBg",
  "key9": "4oMjkJGv9rqe9HiQyQwKevAptZenmu7rL7YKSKPScdqvpDrMj99aqguCqnhZWL7A9qbXhVxh2QUeHkpnuf1vuQK8",
  "key10": "2bK3UAnix78XK5pASZmjxaZk1bhbKVGBZJSLqgivUJrGzkDzBS3rogYnkaBzJ3mJJYfG21JkGmvP8o9Ph8b4ZmTA",
  "key11": "4CeyRUhiMnArBA2xYVbwWhZeoXo6nm6wUDUUKi1aMbpVajyFmNaUq9SeNK5nZeioHpycwiDMkrrczMSVrY23joEy",
  "key12": "4pTBttyBUrbzzWxeiPWJhTsLSgjXyXbEBJYuQA7wLcNd7JvFE6TrgkTf1nhqhmJyF5K58qPrcA6eTGm9mg7CGZ5X",
  "key13": "3PPTXZyhxHt6kvYtXD6pW4C6kAuPo2m3kwcpnKHnt2eU4KwSWvEiEeobNyLr2goWD9wFu15Jun56SryF1aKDzu1",
  "key14": "4wFCZ3V82d4nErthp3cySiUJiVFYxBnpLsQGuvsPJYofEMyj9KfbUeu3dnZeKAhA2mSZwWnHidxGeV3aj7EJkjiP",
  "key15": "4K9FkhFzVHziC3vYgbFabirkUzsoz9orrWbjc8B1PTSzWpxV18vEaC4r6eZnAa3ka36fJLGaR2FG7zC7ShEssTTi",
  "key16": "2PubuuiM7abU8yrDYXtyuV6DFTWuKwphWupoe8jwAoQziGXxvL4sRMm3SJa8PE6foA2nP342EWUKVqT2oFKSfeKD",
  "key17": "4W9jSENyHP3GiazEBRmNfXgzYU7yW74dwH2kX12MpDYoLcvYg3iztEjvdfrt7vP5gA5xLzDAnvzLdCTrejgeQae9",
  "key18": "4G1vf87Jpdn8dPsbUU1GKroVsusxs5JCkQQXXLKARqeD3TG9p9tWRLVRdxK64ncu2DzUfT2yPpoCW8M86BRsxSzv",
  "key19": "TZkwmxmsQoTyd1WLSawWcGgBpAaPiuDYuSXF9ksYk42jCpU5dHVcfD4SpahCQ7r5jepyDLesXJq6A223M8XS378",
  "key20": "4biaGna5BD6cU6DCe6RTe3Z9LBMZ1AUdFMCJPwc9y9qgNWSt8ihcdLBxSEHstw8hw4ExP45q26CUAFvLfMbnWx8a",
  "key21": "2gfrtE6vBTbmwDnRm9zjHY2iuF8bBrUu6dy61oSiTmZtZoa8aQjo3jw64cuEL7UkM1ub2f3LtfUwRRQH8bunYBBm",
  "key22": "5gABqXNXt4ARHqqFgc2DnHnKUw4TWgkKsEEmY2mwECj3krznKxGdLiQF9W5wjPJYxYjxWcuPvj8UGVzGE82TkSEK",
  "key23": "3gJV1qLyeJrCmXpbXxDQFXsstVjb6pGBizJ17Z5iwH26eEoukmEkNCJQSg1hPQDfqSiAWNdmFUYfu7pPQVzNUKid",
  "key24": "tbWZSE8kz5yewiGg8KVVNFAxPbuq2dZ947i6hP6oCBJJh8WAPjqg4eG7mK2XFXjSsohFMac3HqojjEqz4GcVozU",
  "key25": "SPLt8JvVUEtoh2J3Zg1MaeEQEAam3wsxVhn685HLmfSTEsj8ehQwCokSJ7kvPRZvcF3KmXjb8YuWEwnTPPuMvq3",
  "key26": "48x6iG8UHtuoZoZmmgeZnR4XGDzKp7igouGABKvWHtCtvsJzeTMiAPeeGPkc35fcp3iYgutM6n2Szd6y9V8aTNSC",
  "key27": "m2U9GTzhfYsgoCCMRZB5LGmVfRmAqUG7w1QDYQ5HxtzZrn2X6bjzfUDcDCNcNTPSS62BxMNQLHVCihZtszQN9N8",
  "key28": "3dNrdSBQQTcYrQ9P5hLXvNSNrhDDoHRGJQpe2QvF5yByNTo1vLy2z2A6XuQAUiRRYrGMMDRoZiEpVNcRJMePcbAX"
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
