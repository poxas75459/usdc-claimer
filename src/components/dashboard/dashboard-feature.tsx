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
    "4woykBnzzbMaE178f5refXbztuhKEWWwEAFgS3JuW8tEGbtdZPvAsZfBReDaZwaEpk5xkPhTfcJg7uwzi21ffWjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f5hWvbKc5vEuKs2AKad75SRfzFoa8BeeaoKY8cZAuRHCqdKwhUxRVh7TXqFdPRcDVhgU4jKcMTrd6YE44QMTMTB",
  "key1": "5Cphc4e9x2X6qbkhHqSSYH1yHDDZcfRWNvBWntZ13k14S3sfYuCEXbjdb8Ydyi7Dth29fbvwhYU4ro59vnwN8Hgq",
  "key2": "4hqkyNy5Y5WXywfeUwvRDQWx72Ro6wJEzNjPSyXq8KoPuWxPfbqGV59k77cZ3otYdaCqpynBz98ykBjtApZiPkgA",
  "key3": "2Y9SHQmDpjZcLa9Ag2q1H3CaS8JDvZs4g72CH7o2NZVimcsxa447yqCtBBmsX6XKQePDMmAnKGyxnoVXEvLzkvNh",
  "key4": "4cDjdyc8tGeDMkUXEGJ4CiskEm1uPAdQuZhR5NYhySMfu7rPknq21X2jZHeMNWded4vPmmfCHri7E1jvMfFqgL4D",
  "key5": "5MADYEfWpFWMZ3E4VjU1GvbdhYRxY89N2LGPCj9SbtKaMNobSYmNi8V6mSXp7sLtX5kkE7JgxHZ8v8NXfV2TKPXE",
  "key6": "kuk8pM9YKmjQKxbeviAukuGUpx1FC2u8fZ3UXpLYgk84CqTYFo3fyV6UYiGvzH4vXavsBqWJkiLtC7x1KSDUVK1",
  "key7": "65smWAdSZw659FLixA6aXKo8iDsT7U2XM1JfWZV62JBVVjoy8fUT9o6aSAS5nEjfC5akbM7CyMgMaBeFXssvESH8",
  "key8": "2xW5x2Qkc6py6L7ASgft9CVdgtVBZimt4qSAZTbjxWxY5PoetNwNCPXYaXfQAC75NSU77zJEqSfPfYi3JoRiyGji",
  "key9": "4t7cacyeuhMuR7CsfNjkNXezjNFsqHgL8Nsn28URYEQB1scyYp52fyxRmQNZMnnRXCptb4bPLVxKNte6hCthDZDc",
  "key10": "3wA4m1GT1Gkd3pRWKDW2MBgfTVvRnHqKRzGMKCG8tYGsDFgBEukLkXw67QBXWMAHRwDFNagnNJJa81BpDFnQpg4Z",
  "key11": "2e5sAto9zVEx9RW3PAPX1Qkxdmavb3Cq7UPBUoXkqQKsNCbHrKc6TKWXBQ1uAWLSt48XPTCoP11GX7yRp1BnCRvR",
  "key12": "5bQp8AJ12JPxecGqyjM2eb3Qofvq6pd6stB6cnaLKroZ2pJP9d3k8J6FPxTodYfFCnSzmQTk7KctGkiPsRrhtd18",
  "key13": "3CkTcmCcdPQD2TbCNCGNozcJ6s1KqWJvxT45Y4kqgR4e69j4WXK25tcTJ82DwvkpEWbEfEBGk9AwAP2P8iA4xP67",
  "key14": "3RTy2CehGCiBa7w6Bsur3a254Dy2fW21JtHUdhVtdsxhmhnZxPp4FYo81rptewXzVKT9W5e6wFucoZzjUKcmaRLj",
  "key15": "59qdrv2ByKhhXkUuWj4eEpRZLNtvhdwJxihA2zgjXd1i2rrmHzUopPAfLHTiYudFGJ8ZNctNiiFxraWZ1drQudxe",
  "key16": "5txyHioC1roiUr4VxzeyjJAmdb11PxM4kMY8obUkMXdNSd1r6Ymc4eHRU4Z5NwavpD4kvZyJDZ9hQxZ9WvzesFib",
  "key17": "3LfGuSp9hw9x5ExyXw1vP8KDWMnj7xnRX9L2Xeb6KaDxokWdPiNCZ3Cf8Cz8Xt7BJTn933aniqErkNKYue3rvHnS",
  "key18": "4D9cwvEeTvMyeaiA1Yf2XuS3XAAiixYHcz4XwTEjGYXUYD46KEYVtG9vgJwpABwZGxv7jxK3Tw7YrTFdgjM4nBfg",
  "key19": "3rfEMxXAMbfDQPgzcAL6wphfVwbYnv9D8BZrcu9BKfdHBYJxh5GBCKssAEAcb3K7bPvKYNrE9jJrdkceLwveTtkf",
  "key20": "3mxoJmgTxgXeqQGP9g3JACw4VPhoHtibfzDpSyZLsYZ3KiGWxfncVgdonkDrShELFKsMKmfgpBk2xFX4G7XSGuBh",
  "key21": "XBRvG6qHCeNre5g1rFT5HtMErQAXsvWJNmDGins8dpyStmzJmxj8pHUUi6ZFimwyTzRhcRfpQZfLe8VCnFBB9f4",
  "key22": "5tCVYkGgpUQcy42vrPkTofAMSyPXCai8KMMvKvqEFbLFMra6vEhhAsbgXTua4yFt3MheYQwYykg2Wdg7WH5rp4UU",
  "key23": "4wRMjk9FCBH91PDWiZ79y3x5XMYnBSYYv8KVGDtxB7PRxaenUHmJzhR8aUFib1xnUZPvv2jmZ2vX4c58pJvVxbe9",
  "key24": "2K7PTBw3H7rT1U9BcqjDfELMdDqs8iWtgmbF9mxU5gRDdhvF5oeZ5wuQA6AefMrd82MbLdnUwjh6c9iXjzGvqKJE",
  "key25": "4Y4agkiiMbWWdNMUYqpnCRUCYPRVVMxJt5eWLMfAyNzb6bH3UvkTKhRrZrXboHkE85LmozRyiaSUfNb5DUqfP3dk",
  "key26": "3yEWQJKuZJCfbiSMpfawksHMMwArKMB88jJeWg8W5hA9sveRaLhUb2ryrhXBNg6u5zJSXgK4VYSdYZPz9539afk9",
  "key27": "5UuYw84NDsJ2MhM3n3vk1qcNEYiv8AmcFzKXgx5KDZAje9PThoRa12RtrgggYvv9d5TjqLn7CXQbMSYsYaTNfxcY",
  "key28": "5nbbt5MMvVeZqsxkTMkuhZ6LHXzvdEXP7cQvgkSMteHWpNncuT7CrSsdrj2CoBfyjNnxJzMMyrsHRamz4sJfX8gx",
  "key29": "EqAsfhxhTP19UDCT6W4mcN7Lf2tCwMjqM3WwZQBwKa3Ntj44j51Re9S5h7qnM1sJdHkKcAxKWEB2LgcPmsE4Uqt",
  "key30": "2FYAJVkFQWJ5quf7sKbNuicTiU3BY8HSarc33TTAZCAT3eFLzuuQSrbqYsWwWX4yb14PaD6eD9exZZ3QU1PZBcXg",
  "key31": "4Vi8FyJyX22eNmXgF9kDAx4JjhcbokUwF9EnyGzvnwqKpvJFxVURcqyQsKAsNbiNDXL7p7Rm54XK7Sz1Vnw6dkT4",
  "key32": "4uLSF4noRv6PEvET8FQwvdg89y4CQRGvCgpHYeWegFyvkYRJEwuofJziKMmU6uQY3z11LhgFsydzeCqTR47ukTG9",
  "key33": "3ZX1i5rdPM8tpyYqTeJQgP4YubWg8PCoXC9NboXyGYwLAnuyB2gyJ7DU1J9f6ss5CitfnV8Ckbh5dRpX41N5CPqQ",
  "key34": "3Q1PTXd8XYnvsabA2zcPaCdzqdyvFxhsnNnyzCKZ6JytfVDkcy5Tp9AHZutSidiaS25FWAvYaWPPDVkXFTuzjXpg",
  "key35": "45xLe8avajcvz1JF9yUWLA9R8RdtsrbRsMQoLMzjbwhJP7ThWPh8TAD9f3ht2dwwBt5KZQiA5QFs8FC3E3Y52JPj",
  "key36": "65MQxhpc3kDJMxTDJw1Tzr2Y77TQfJUpCZRrbKvB5thDTHhubjrHTFSosdyHFzyNZXSyQ1M7usgSN4XQoQwaBDSF",
  "key37": "52Pm1iFJ8JdDEH4pvMma5CXfpc7b3bkzfnRHzEXfRH3bBZeW62191qnbA71WyPNUtCnJxrYZv6ddcqwT2WGa8umB",
  "key38": "5NxdkFJBondQKVgjwrp1f3kwC2g23fPdLu3UNAvWfWUotw6u25TLs91iEaoo3gFaCA8hpycyK64J1mRpmFdypzFW",
  "key39": "45XeZi1g3abrzqYTar5hSN1FC5nsNJBiX56Wgx8PomMtgrKj9fE3RGoNMZd4cRXYZqQLRJn1FrpANjG6cBWHQvbW",
  "key40": "3zHxF8p3jBSmpRLCMy2AnoNdf7RW9KcfoVBe52XVvdGHoBv1F9GcoiaZFEdShWTG9XCyjAkKsGWEuuwkAepvZTDQ",
  "key41": "3LVb6E4WLTNWoENRCYpCtXDWUSKuPjM5JHKgu1wDZphYnBrBpXdc3djVAQqmoXZYXA4F1yrtVZT6UpNqgeYoqBkt",
  "key42": "4tgsikeTcC5j2LWf6d7tYeUeu9KxDdiFZ44kTVBqBAbQaSfEvBYqkHxTTco4qzqsoH9zTj6ous3QZDXLYQwkyUnG",
  "key43": "3pF7KrsPx82xhZWBSbS68LpWGrRrtXAuqLBNWQ5ETAH5N1v4Gde8UyYqnoW5ERpxtucxJTDrgnv3P91dypFYo5av",
  "key44": "2UgcjMGi8ZnA8DDhDCvNKb5si8f1rcP4Nzyv2y4JuTroChggKycANzRAYoKGLknjFxF6gCCUQRFGk3QLwVBueomS",
  "key45": "5df32w6dCQuAnR9VoKif2Efz9kEF7FzA4gLRJNMh5icSwW92K41nLBAVkUbr4ALgoFbgqShiYfF2aA3JG9Q514na",
  "key46": "2UivRZjCDN1XTqJyLAZES4QgkqkaXKq9BeMjRcogaMMG4ZhEe3xJYAqawgRsytPXK92ziM2KmUtyFMfMZiSGzWnp",
  "key47": "4thrR9rtNQvyFKruDGWjLMqYw24Ct4Bgi2AEK7xkXdCf55BwfuSHqhppc4MbFgnBD8YnsxwX2zc6737NujFDzDNY",
  "key48": "5pjN57Pk7BvYJZk7dHZ9wxeBphGabqwh5byKU2qL67DviTvY4QaiPMhSJFrmHRvdK7EeWErVHBgNsy7dFM2kWHuy",
  "key49": "2dKeqyRhs2jjawwSDMfR2QewUhbeoVZQGYTd6VrgVX2Kh1pF7u6iz4mQALoehi6hnbVaTujU4GJLGheMSGEqhZYQ"
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
