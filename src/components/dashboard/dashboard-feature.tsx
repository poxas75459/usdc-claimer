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
    "5bPp3jZ1DXuocJQgJqtTUSgTFVQdoHgWGUtLnadGW48a9MkWnHmBcWvSwoXzkErhfzWU2oRFnEJ7f16v3K46dT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PgVHCR5eFaKWSJ9N3XLgBED93JKYZXNZVK2fswnsivbBXKVZLCNdV88g63LbjEvuy9Mwu4nsa2cxe4yN9B8RoAd",
  "key1": "5PkMPweb7Wy5PDZayBeNkfZFv5GzmdVSPc3TPwQYfyUZQ8uF59nP3gT4CSc3fViTvMn9qYFZzVTLdBBAwbqFWTjH",
  "key2": "2r4KswGbKtoRoLwDRCXTkvgPcnSN2yYCQnxMQsGTYmRHdDpCjmdbYzFFXwTwoa2eFaRf3paoQJgEwNb54efMULCd",
  "key3": "2U6R8HWaeksf1s88zLHpKW29bdLtCpox1enqjQ2qhAoHEoaURUPtS8H4KDgWMWNPJnshevWxtMZMXYJZxRmsZMoo",
  "key4": "q8V95xYQBYaYebXXy9hFhsP8DfuvyMQkMhSu7bLJMpvBnjZgVzS8rGEdpfFEUPr5qEBXSXY5fWBxFD6ynPsxrEz",
  "key5": "5Pq2ZmtQgJivcG79YZJGoAmtSD9RvHRUCo2KYXwa7WMA99X931yr5pbpNnjhiyPswoqWXghtLb1fGn4koXDDfkrM",
  "key6": "3b21aRjQkPgUV9v68xNtv5CAUXgez1cw8wY3tayftqBjPUmAEZJyyCiVEGTbWnDT1mdFoVaA5nxfzbiUAxEZ43sm",
  "key7": "xjjQNvatkBtFg6ReBnxQBHM47Gohk2txJg2BBCa6FRn4iz1Td2WYGjoJCgpNVcnCzWeEF68Z12ggCY8xpGzkEqm",
  "key8": "2P3QG4i7JX1fJ3ufFzuBwsp361TFdHutgdUpf76BmJukJXhkS4QwpVxSyfJaZGNmo1g88VqQcAhReixcpEu5q9Mf",
  "key9": "4UBPYQDDbjnhT3yyVYcZHgX3mpL72r9FNsJ4UBXKmzKdtWi3UiVEke9fF3JDPBwepfcc1vmrpkrx72s6b6868Vy9",
  "key10": "5Vvj1J9JT1UEbLaojgGATXAGy6edNbp6Q8xWha3TR3tkH1ajiRK4yVPQMPYvJGgC1dRFKRnd5DZuPoKCagabJR3X",
  "key11": "58JwYLVfAjAmoZpGtyBA5vQqmtWXVoTxum4tzcrmZmMjeN4q2gq5PTTDDh9cZ5qu2G196fbhZpmmAdw49bdsZTYd",
  "key12": "5U9mtfTRCfbhcCmRV1DLGXGM7p6npLL4YKU6vy4ptWj8UhUnhGH8Vd1hsxwQzz6Mh3koJ9RJv4tJdZUSuo9UXksx",
  "key13": "3YPC8yiUeKNdzyE136Wg9S99BdLDgAAddQgaLD2fZS2mvPUChZMyFVbeiaxMvGbUeCFcqDZ18dwtaK5cSugcjvji",
  "key14": "4A8saKB75LLrkUJcUjNwtTjGhL3Zj2xbUpVkyH2tJnYmv1P7JMtLZWe772arJCbRTMmgGB517s9UEQGB7LLqVE3Y",
  "key15": "4iBjMyAPGHFoXPqRm9sRWWPuvLEGHPChw99HLogFfPYHHTKJJtGrJ7sbB2kdx6Y4Lb7hm6GKiAqhVKe6THgR7oEN",
  "key16": "EuL27iJfkwe2nzuK8ro8WJkFWim2ds7LeFfDH7F97ykNEJuJvi9hvmByghDysSsqXBX5farNRNFDYRwapqS8vXp",
  "key17": "26QmeBi5V3yMmy5kmafLKGQdKaHnYhRR694GfkKMdGtXUtqL3JE1wvdM4ttJDYZH9Wiu3MUSS74g6QMxHiE6X8uh",
  "key18": "26AbxdFAmNEKLRVaHFHBQk5phyXpKDtsxKcPRXJmm2kaJxHXPC2Ckr7nf3Nv3vsTzJt75TAiqWpiX4yxTG2Jgn2G",
  "key19": "2UAG5UD4KwPSwPgxnNNtRNM5PMycTAEZqT8dCzZt9mdf8qdAHp99ERZp5eQt2GC9JzQv7QF4FrU55WnyQLmD821Q",
  "key20": "4XCdEjx54rzKV62YTyUkfFc5boJGidpWmjrPrPmiC7ioYzYqLd66u28qexhkkKnoXfWq84Xmv8iy9pNqufMgZaTZ",
  "key21": "noKzS2d1F7o91N5arAPUatsmf1o5eZPT4Myf6hrw7Y6vLomHysmE6q2o8xp774zf9Fa6StiLe8LHwCyhmztjaLG",
  "key22": "3M6zRJBr66URiqkdwxr6L2t7qmW7gGgL7C6ApDdNigZHLM3gH4U48mpnWhBHEGX9yiEL8JPk5xj3eEYE2rTHvvRf",
  "key23": "4LH4Whaw8i46TxeydLzvcXa98dnrTWG959ZCCYcKTyqma7KmM8fpQdAU7u7ZGQEFvEJMgS8Y4aLZWcE4GU8d5s5X",
  "key24": "5ef8oSLZyN2vCBifqkSCwUDyhzWrPzDpyGe1CKXuBPpyfvYXYBhduTPnMUt4wNsv8WMcqo1XUSoMxxpRm7aMof7q",
  "key25": "4kQgc9L9LJK4tooSn5dZ2uoZdPSCCabVu8gAnQcoDnqb9jWDp8wQiXFyxtmfJRbGSNMFXqLkteM3pnv4Z4tBwCt4",
  "key26": "5E7fNePj7pjnwGiNz7HfiDGFNoaypPgZS6C34CxHRpZvCV2phqVHKWVbUjaUggTBoHWXztwcGyuqtYysjvz9go3G",
  "key27": "3fv73xiK62JHToxXrM8smTbTGavpp6uGbPUKiBnX478aTM5g4QYTD5ieJSy2euDKHNqm5aWyYNFyFFcj5uU9RXYE",
  "key28": "5YYBMFKGyPZHnKMRVBifShZbyGFDmZCpja9JkuKs9ELVMN4PxBtgxd5Mekua64J7bWPaCCdasdzLnbpV6T2JQrT",
  "key29": "2aFwYXendDnJrpwXETvLVxUczx83Wc8GJN9SBvNcuEJ8LU1W9fZ2vGAUppjJ1J9TenJE2ZiHfhf2ZJVHFmcPNc5h",
  "key30": "wk1q8stSmAMavPX6HtCyhcw2uxJm52BtLA8D2o3e7ZP6UdcxASwDUweCBSH2txkbPSd6NEMtQMcMavpGe9RhE9N",
  "key31": "5EQ49bjDKCSL8AUxQ5PwHLVTpFCe58T3GyeMQWCkxpRuDx2pH5aLa4y7whgZsnmodWwfrRgKT86xhiRzTFwNVZGW",
  "key32": "3MLA1DiCRKnPRYeAn2aBvhMgQUSytTkViZJ4WGfDsuU5bdRyCXnNNMhwLa7bwmXwYtFC59is5r2LQoQXamB5dDw6",
  "key33": "2WQSyVCCFK1icgUY8DKrmcZHD5NqtLg4wHQyhANmqHZ4LqmBKLuW4U541hXFJbGq4BDBXNVZbNWES6ZPzyHrzaQH",
  "key34": "2WsqnZbR4MLHZXbvoHy41pbcAMZ3HgYNE6XCbC75huMdRG3VtdHh8NDucWtDasbHumHT5njGQn7WtFqV7Cf2thzv",
  "key35": "3vgaSNUGmYraMfjqjij51Uqmw4uUeCtGCXHxdEfMechTQELKeSw6pc1GLXoDwprVXU85JE24erfBvLjkbKRes7bs",
  "key36": "4h3nMFb86utb3L6CjBLrYHoXxsBh8b7BDAu8DTfXVS7KWRiuzAqGy3KbdjNX6E14ZVf5JvXVhxYX2cN4FEieH4Uc",
  "key37": "3ejmvuQFJrFwGPMVCoqwcxZijqvMMvf8NLSK85oidAEgAmrT7MhntKm7fb8b9FeNWnJBKPwQKKX7wqnakV6M4jhP",
  "key38": "4eHCWCkdLfFWUBT7CPizWZ1LTmeR3U4Pfn8LGY2b9X4ynDpaAaWbSStMvpUodETZBmX6pTwGgcouTZ8bXohHR4fy",
  "key39": "2TukTbgJGJmA3bv2mVo2opQabLaAFhshVX8Y5GDk59PeUg8drd4iQSdjyaZVrJ252tGzJMEQuZKU55gXRDDLbu3S",
  "key40": "VGkeimgQeoFniTRw9zd1TxrBwU5HUdgMGUZSxr3NeCNNoYimJN1b4ggtAUehEJeH95wHiRPcy2pHjsXEHyJFoaM",
  "key41": "fq1itV6UTzrAm65f3e9CC5z4n7PZ3B7RfYsT3HJRYzMYE7VEbhfGZsdLuBiuD8kB4YbeDbZph4ndERiZMhb4gJV",
  "key42": "3UvMZSWpzgqxKUnxzADH1QKW38ceCBFeSARYpYFNBxwQhP2CJAqgHK8mhU2ttSZPbGw8BBh7y2u2jZMSJRSrh7DD",
  "key43": "5P41th39xovikT7VopLbQzYF1zBX5SRSKSMYSgX5dKpXqqmiV1AgMjkZrT4Hfi8hPfmY3ybdu4fJ8Kos8F3iWngL",
  "key44": "4QPMMDhXdZVf3kao1QgTCDUTnEdyERP9k1iBzmuik71vnoE8SC4uiHfL6ZboPyqeN96aRycNFLAd38Lr3RLqB9KN",
  "key45": "3L95fqDtkrjShh7iZuazryNujLDmje4eNK5V2NwHGtVPHsjcDe9BF5dPuuZ1gVKxdGMqXtEvpmSujE7wrGF3Y2qV",
  "key46": "2k4cugghzeijfQisNqrE8WSHtpNSD279Y7LvFGGNQTHkTgY3b6YCQJxmhqwM7CbEQuf8bzF6bYUe1e7pizGDhXTR",
  "key47": "44NquRsZogY1vDDFAJWgNR2PQ9ogBJNsKCNprYcYhqs5uUJmdw6x1w4575wCPbT7VUvuEMSjUVtF11vs2VLEuFyf",
  "key48": "5mZrD6GpjjVCiRmEQBKH57w6psjZ43RT1NCdS4MEUKVNF6vynJrFX7hVoo6JezTGkuyYua88kahJ7tTH1hQEib93",
  "key49": "4M74MwSst2NvRg1Yrprdf6QbcCziXXdhHFEno57KGqxpW56tLiHc2SK2hs7vMYDrxXMfGArrCLGkA8jt6Jw1W9he"
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
