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
    "4ddF4L7WCF9YoN6Si8kxcA42dcQC4Cm7QyMdvKBU4NFGHyM3cLJC3aZKPtzXadbzDtTQXdNfLn14zYRZWNL2FKss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HbNxnt8KUcVcwms9RHr4bJe2koptvvjk328v3sPjcad9C2dWFQfTPR4oRK8nHMVE84bEpPnoSef2UBpKVGxbBQ",
  "key1": "5gdEawYtycFsWNkvauTMHnLxGYU4E8bNA2aHKN9eG8qjKhUXVnZizTHn6SxEbctPNrnGpFYaAqHgwcD7Bb3pr3LZ",
  "key2": "22oBsywtouKZDYwNBM3GRE4ULnueGnB3Us65EHyX9cDH1W1ow4QTamHwF25yHVjUn8sKmUBYZhbiqJpLhb5kuRSr",
  "key3": "5CWwmpk6RvCtiprvv2RnyVEVKxuo6ZQkuYD3W9HBJHqwvxk6deCvjuE8yXhZ1KzQUYESCAzXr7gstQMibkhcAXyG",
  "key4": "4Y7gdLZ31FkQGtrjTs7NVqYTWT67kwhfPtbfXKEHRAPoQ94Gm1ySjM29MVXh2q7VBCc5H5g3uebb2dARU8RkUFVo",
  "key5": "3RjAiTS5ABf2PCcheyhmVJ2jzfqH73JNT1moYSyzvpAsbn8hAErhjDVHrubqLSggUzFZJ5nWqAvZkx3QAD71YNLe",
  "key6": "627fhoREKfTtZC8PdpiZGnqe4YsMYtt478473niiZkSt84T4Q5T2V5Y5dUrCnYmcAQuejNSZKqYzvYXcC5PTMHhS",
  "key7": "2ZybmYTxak7HFK1hr4aGKG1PbsZHsUxqtVd8YE5EBcfCwAC2pUth2DpJJpc7xf2KT7qwGx6jkdgXQPHXhzaEEzfx",
  "key8": "4WmFYAp61YEuY4sFnWshbk33dYSkW5qRfxzcmvLQarLypwGXUJ64TUfHDM39F3PGAfVdAmDjwojepR2E6DyK8LMn",
  "key9": "2pKsRUZ9KtdHFVQQRM67ANTYNaNy9ndho4c61C6Dg73PAfuzrwvtKMGVFsYGBUEs4kvj3zjKX4shHBTw9Q1dj6Ti",
  "key10": "jc8NWKZ288tUc9DgoqiQwc33QVqfpxgJ8Dn4apX431XHsNP7d3PPQEH5rSSWU8DjuWHndUDBqTW8Zt1vHGLKRtL",
  "key11": "646JSsNS883sifmvNQxZrryWg5y3CPmBuKQGfk4SGNZZZb1vaaWkrFAa6Y9By2SYv519ws3huEfTy5Kvo1siizPW",
  "key12": "3m259UMhPJ4y6SnhxiMhwYyWGaR861cfSSnKS7oNQnKkEsaUnquksdN34J6q3Xoiez6KAqPjNEUuLGnb1mWcmMpV",
  "key13": "3Fvky9bZBiG41GFUDtju8b7ZGLeSEpdkQwcYvPRDKrk4Sx35HrYcyxXPH1cezNab2wYuYta71iVMYqfk7usfysUw",
  "key14": "2vU3kbr4WPoLempHRptzXpGmMKV1sazV7nQpjL6d7mTeMKF168NWxwWcZyBBV7kXom355vp8ERPuZsFgb174nDv2",
  "key15": "47jpSkCsjdPqTLVPJYQoqodr7YMTYrsx2tSwDVQwyzUbPqaEcFyBbLNduA3U8AC4FGpnmHBLYmxFHwVj7UiZFCKA",
  "key16": "4jWLCYpKJke9i1Ws5xch4xaCUhD3pUHkQzG5zQiR1Q1d6DJtZNXk1KNTmGp7BrZbzmRaENhTgTF1rvMmGDyNnXMg",
  "key17": "5LQoNoJ3AeSW3Dnc2XCxucmWWY7iWdHhAGCF6kQD5DsWyyUgS8NjnHZVxsgpG2tLTZAJQ9ggq9vP6PnfA6gQeYrT",
  "key18": "5LFuWuMQCa7CcJ5cEqizobV8iPVJoDznnYpjLnpt11gPQwX892D26VS435hrtJZeMH2na5FMTzwuXvGxSiiTTREB",
  "key19": "3hwbGebxBecPZhw17N8x73kTrumYAxaiLkHzKF971GYMpVgUuqPmcEMWLqLwzAexTfkpVqUZ6dSQqLSwJs3Sn1zt",
  "key20": "3tM1Kfn7hVQ1Cb6MRsRKQff8KGv3KbtNL8RVry1M3yz47kNjNcJmtjnXzYieA9tBHMza3uzCYUzykUH1yKr36Boj",
  "key21": "46BSswNK4MRwBCAHNAmf28FcjZtQxbnPE7SGRFqNs3w2RgztksJPN6HL4semQnYSAAFkVuKzv7jtvUiqQ8AB6ERh",
  "key22": "RW5NCQWNTR6z1JSrAJqTnETYeHSCubFZAFK2ADx48in8haFkaBSMo8ke7gXZBFdY18Z4bvAEEPCFCfNKCn5xAJb",
  "key23": "9k39Qx3rWUxvd3Sooyozb6bQEhFES9WAH2kR3brCWq4erzQBHRF8EkQMaWinhoA9VppohpDrcL41gYyjQJeWuUB",
  "key24": "4WAbzGJsuQJLHbv2JXtoV7co8B5QPTQV5PNhJ8QwXzBNMAi1C7qUEfCAunY5GSneprCb71NhxTQn4vsPt7CtZhB5",
  "key25": "2FyEjuC2Ke5ffdZsDe3CkXLVsH5xzfAcBuS9iZBUZ2s2pWMMaP7vZ183eR7V1Zwn7hWNGRA1th1nJtVVEXYWh4Rd",
  "key26": "5UL9LrW7jkWkge7xekyJFmiTRW8rk7DC1wfMgdZB4BHdVLAUvApAwYPnK8Z2K1ieHDwxM6LsGMsvkxYgw3Pdzos7",
  "key27": "3E6kSxHG2RRXTuN59ACAjgjA92oL4H6nwTJzUdkLequohCGR3h5E9mkSZSLuzoDaXcJVFEWz843JLjn9FmRc5UtB",
  "key28": "4Kvo5DYJCCDQJypbTFi1gRX9AXEqphW6pbrYLWHynUti4BJcVaKni2b5ssnGCjgKgM67wHs55dGUbDyNSewBS5bv",
  "key29": "3Zzm9XDUm359fXKwYfVUYe7zNoVHApUXpCsLYs2javxfCtoJrH2zkAgPRDnX4tQ6YLTkN6wj7d97QoJAmhjmFZdC",
  "key30": "5GfyattxSSZfsAHY4MLGsMQJb2LHm4mUYARtSHr6Wet9rGSwnxsjsSiYEtUc4B76FhcUD4crxpcLu264YmtiaRAU",
  "key31": "3PNH8BouYyyZujRjNX4yLSov5xZKKYph3wuTWo6JS4urVHfBXpNZ9aDxVb84e5ENCNm5bxQHnKkYcfQMGnhVQCae",
  "key32": "dHiyAtYCvcBptC3yjFYrygZWnjb35uhkBn6qrxW9TDn8MrsMqjFhw4aJcLMeJAMKnZtcvbKowfxxAtDunaifdfC",
  "key33": "3ncMNG7mjtnKoE2nHoeo9gbTPHk8qxPpDQH1sYizYePEDJdRLkwTpav8bQyifyZFfM3Ca9ftSPznpSFqmBmUaVhP",
  "key34": "3veTPubWv2DeXds8b7SM417xby8imVLJGkwokT5pKF8MVRwfLHZS2nuk4pnK8BHY1ntH62pfLfmVsM5dm1k4JUAA",
  "key35": "3fmYgV79eR5a9ReXsFC5V9o1nUmiqqqkTe9bGLSLgNYdbzw8qgV8uJVgFgXFCepzWyMNeKnjZjJ9CHKSr7eyfvcT",
  "key36": "4cBbGWp9SqtBypx6xuBKqmEriD2xft7HWDaeYpLjsQZcNuXXR6aQDbK9CJSPKabWg2yhCA83uTbbLJFw9why6stq",
  "key37": "4wapHwgMbmx526SvuUjpztkoMFHULwMsXeZidEiXkbTTLcgfwUR6NsvaiuMzDDpzxfD32sfRuSnjDbuToe441MDq",
  "key38": "41uPFyNgvYjbP8CxFq4oRmefWuQwE5h8HpkfZXPKJLJzL82B4QmtJThCzhzt73jHK7j7zahARFwAZrkbV2zXTapy",
  "key39": "4hc4EQLYsF9zV6yyJZQwmqkgzL13wFu3kDNHR8n2UvibQo1wTkqDpA16iM3iCYKRGbE8BGTPNkq5kXXb9cgSsJf7"
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
