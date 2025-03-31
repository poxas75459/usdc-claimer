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
    "2eWfa271TVKk1pmPUUkh7B72V5VuxFoDrApN9WxKuTMSBneqn4ns6h6hCJpKwuhQnZ7MhUrMbtyHEND2zQrS6RnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cFAn8oEmufyxbbtJFToU2xYqUBpKp1o8poexNWrQYAa1N4tjBvUwUq7QVtZwRo3FcHqJuhWmqSH3nkQwM2mEdjq",
  "key1": "vkgtG8N41YWhfbJYyJeMkuPBvPaZhs6xQzpVh2mp1SiEWaTk63kC53EuaoPa81oiKcTw3mrcWwMSBt8b8ZPzr95",
  "key2": "2XbX2KeXAEs2S3qkXrUGwswsG7SxfBMp4K1oDB4Nhivv3oRpUKyfxPZJjZEyNAYFksGCoi1hL3kY5xnmj4sfGAzi",
  "key3": "4tSzjdNecZQi5oL4g5dxMiYAhmvHizBePAJhrkiNKmncHTyBxSn54RHPXTX2KoNvC5DXKcTEryFfaXTENsnAvx63",
  "key4": "3bJsTu6Fa8zBwNMss6AGXvCSmgor1ebUu3ZDiQXGrNYXamyvuuqnJQzht2rpRGJ9HQXTLw4s8sfjQS7Yi71KNsr2",
  "key5": "sYXWFozGYDBTeZxAoG59DtxqcCLZq7cJAJgF5KSWZN1w3NQ57YrQzHHFmEP8QYhm77eUbLpfvvLnuAcoNZu1cC1",
  "key6": "q51GkKVhwG9t7c83vrWBQzn2raw7A2SDu1G9SzweEu3bs4K7YbdDgHPY88Y4gJgFZSLiqfWWZhVtvnWugxFB7TS",
  "key7": "5kxzbFEC7hgGfXSgW6531X7D3yiQd7g6c393e1XHsg4RvhaKGN6f7gt5XUJ1CribJuaBxNjZSWPNMG5JvJy2N8nn",
  "key8": "g83tYtj66EYdJYRVYTPQbSJbFtUhigDjuGPi4CKcJH5cPzsQfJB56XbBVafjdmCDfwraSm7WMvq4jDMe359gMs4",
  "key9": "56v9FZi5epychXvy1rWdaV3DWuvZC4bbBjNBpG3bMka4ohxgKjM7jLo6fuStH7qRtrGfWxQDWCms64PSzzW2affe",
  "key10": "5tBjrWYcAiDW4js1pSP7X3BpBpfNa6Um4E6cHxxpgxtKctYHD33XJ21VW619LZensM1BL2zj8gMcTMCfiH8zXSfJ",
  "key11": "3eDZUx9kLN6Hgh8FXhLbxffW9tRBozcby7uCqiT6RRU5mBhbzWpLwCf2nshcvobXD8Tjz45hxPb5sg7TkGfvDkg9",
  "key12": "3L5wqgSLzMWJDUZd4qsfzSYCzmGfSpuyFuTbBdEkfd6pgpTrwwFciAEeXGSZt2e3VDFr3vL5ZtUsGiVw7s7LeYZm",
  "key13": "4MguXQQUJmRJ4rcaFbLBzvaUN8CNU6aKGFkeMagLDFcHVX5YKCiumkBAJA26g7ZgvBuUYgj1XEMjAGgMkEQWXNaE",
  "key14": "2KppFXGqQhxo2hDV73pAfAaGL1p2jBNdck8xPioPefeAo36GKmgpdyEfYBQ6KZhxf4WvmT3WNvwPSAgzfguXgH8T",
  "key15": "5Uk425vt5LYkAPYZ6vP7aDjUHKkTySSwd69HoQrwe9XDVtqDHu6RbhynXiShAbacuoSXqLgwW2ax1iLvck3uJAPo",
  "key16": "3w8obPBLYtSwQeeuK5VB8nvwXz5r2TDkB3x9TnhSJSyuMBo74s6puDv2Fi7GwzgVRYycAA3gyqNNAd6hJfBbKq51",
  "key17": "4v43JxYtzREVKWEjfXm7nR1asm9CgUFg9GkGmrToYd3hEhHS4iEqo58hGVkeArA5m6XUXD37ja3kgyAC4t4bGNYr",
  "key18": "4FRcTZbJpDpTdYS3yURLJK1GMN1WBNU3M5w1qwZkSg6fJJT5xXfMhFbzfApWp7kMqdZ28pEbGLdvzZ5S1uVyfMtv",
  "key19": "5hJgFnvZ8ctUcHsCsT8agaSUcZjdDP25nN6g1a7fXZz5exSnxEn4REPCmujP4h7oKATkbHz6nBpN7TRxxiiDB7oQ",
  "key20": "23uo2y1f7UEQrkBFHeAGhf4Kfe8zALC7mQZF3MkjJSAm3iRRCHTRvbxuEwQVBj6L9diLaMd4Pz8DjopVgHfHpAwg",
  "key21": "2YkvE7RPKnifZRFGH31Tn8a8kY4zeQRZfmUJKbKwQSJyvUqKgbHrjVZWQLTJowrxHkhBxZsCAuniUYKiLKypVd2V",
  "key22": "Hp8iTQJgGEKg5mRwrWXqKgvFZwa4UDD9qk1PZ96Un2f5zEQy83wEvDRTYsveiJYPQaBJsqnCguDhReusrqCmV6n",
  "key23": "3SGrHrahu6gwqKLPsbgN1hxmEsPQ4vpogmMSkrCasrmSAQxhtNRPZxrJZk3L6h1ENMAv6RzsMjhwLKpqiR3VX4zP",
  "key24": "2gFvnWCccsYnivWQAkjZa7Qn369VngoptLQBjZknadXwprauN1jfyXahLnQvZcBtppQH2BE2mBcKevsGo2TbSg3o",
  "key25": "3EALmhngoW3KrBjd8xj9m5hV1az2FwXiGvtJ4zcgRewyM5LeVV7JtLKb5QqS5pcyLN9QXcVPidxpceR1yvQtEiMB",
  "key26": "pp4NJmHWD2SrSU5kBU9dQXBTjHrJUwqPVGXVidQPDqLyCe7WEhxMoWMLsByQb4W9q1fRncpRZyEx1kbhKJMWdrL",
  "key27": "3inuiMf7prYL3gvoAo3kqXLY5uZGh8QfB5UrPHh3vQn5UJkKvVZWUBkYZCcRjAa1ti4Mc6JDfTvvhoJBhrWKHBin",
  "key28": "4jWJdALnVC6Yb1URpW7jFrdhBcwtxFX9wGNM6qRunhyFXrnL5k3HKpU7QbwZUNQ2kc7mYxDNYXuTX2fqNjKWyb3Y",
  "key29": "3gnvKaZi4urAxmKB7mwESofsvd3VKbxdEcWXCm8YHDGSeJ5KTuCHrosGJE7KsX6H74aVMqbR6fyGMjC5nArTfTMv",
  "key30": "3cSZCwXT3BMVUoixxsSztQHjxzsKCjBLcTTswYHZm7PiGgMaR2RrFZTF2wU43drqaLaPhTqdyyNdrLVk5bTDcv7V",
  "key31": "c5g3GSTtDxhbwoKypMtWcpzrMVfrVbusvTx1daiU2YGEJ9m8sDG2jLdWKRg2M8XU5GmAAnpby5HXm9jDnkAYb4G",
  "key32": "2WU4mCGJjbgq3Smtyo8AdDgvaTKUBssbo2sSHUX7gqdvDWFeFBP5wDpT8y8ejaStJ6Y2xJyd7oRGbkmH1LqLWgbb",
  "key33": "2ibmvnPCPdmnocZHe4iifkRfnWmC2F3RhZdARZtnQej72aPe2NHDZTEgYVegieteyNu3FCuFNSGfsCqct7hxNqm3",
  "key34": "5zsmm76ScSByJf28SFoXXoMnJVd2z1GN8NHpEJQYbkBAsESkJ56zvmsCG2TR5Xj74H6B7FP1q1JgZbQXy8fvdLxm",
  "key35": "VGaY5odqqSsbWsPWwGej1WErYSr8gde8MsiMhDVJ5s8kz8HqVuHGoXxXyMNEfakfEYX7nXdLGUF5mcTKHz91rib",
  "key36": "3fkMSj6x2zqBYbNFV5hZgbWAwhSLaN5J4wWNgAE9G6E1duqGuKMEnwS9jeDxoZ7Dyswaj6MiytXmppTYSd98kciM",
  "key37": "VNg3H97RpHcXBU2Ggvgw7oegRQUke8gxvy225uFSVZvM9ZgdkeyHFR2vZL5oBmZXnhtY9t8SW2T8EoWZaQstowo",
  "key38": "5jeTASedeT9nR6hh9YKGFBQUSdqZaLcUGwjbjNKxzzmirpPyLRGWB1KiuhzUhcuJqVGhvxUbbi5dyoYEVUEQtNFt"
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
