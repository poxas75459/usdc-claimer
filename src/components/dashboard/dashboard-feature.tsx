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
    "4VXahkEoZempV4LxbUA4vZVQcWVQaTxY8vJQzjE9giwmNqPjNvwbT2HPk5ad1fdEtBUHPc1H9gtQenpbFFCbbvt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59iXQinFAwjyTD6zSud4Rrii3Ew5m15m7sHaUoQW66cYxZN5cE9Lsqhs2nan7uARDqbHfmoEfgERrvYp6jKqE32r",
  "key1": "kLqEmauZnt2qMGYa5kiaqtYx9hUdoYxwVMewojaTF5GpzC2UF7qku14nq9qeRkbPZjEgmeZk1GaHqDgVP9giEHK",
  "key2": "4hydVNfqUvHSvQRx1Ei4BHcmumczWrLE8JNUfkVCnwUQJtpHAa2ZAde4k4yW33K97kWzE7Gpy5911YQaKUmEazBN",
  "key3": "4gQKUZcs8Lfu6GmMDn4TPEwfn7MtRv2d2etAiSQJVUQihQURWo3w2TyyEJmMQFuLGMxZ5PJuJyJfhxzSazur8di9",
  "key4": "5M5xLYxswJzVEmopbR6m8gHP161EEyzWJaE13qnWptMHb1YTr6SdvhbotWJDTP8MasKiNGSZgwWPEiUqmdJbGPbC",
  "key5": "51pH5XHTyVMcYT48SmpYo8q4RXxNRKsiWwnUk7HCJe2JzrTNeLe6Jq3iTaRPpxhmrrAYhAFgV6bs2WtzG7w3zBDG",
  "key6": "29nmF6ZUym4UcxN7xKWZ3hFaoPg5v9XYNr5k8PSZogK74pdNZp8b1R3WrEHMPDWrcB6cDgrsNLs3HJjgVtXAhbkH",
  "key7": "2CDntXTBRpo9dQ6drQYxWzrZHLqtv7ea9cJJdP1QoT7pYWfKRuDzmj6wNYVEi9eztN1RGVWChrG7JauGhTW3zSjj",
  "key8": "4PTtQtEJrVeTrbLRHKLd58ma7xzKjiw2AdMqeNFDH6eHQerBvT56YKcX3N4fWS7gNNEvNviM6eAGWLKefByXgGRE",
  "key9": "4r2Cf46BxktLSkj8bGvfs8CqZeU5yh67yuK3Wu3C5niNTmmd1kRiQp4doGVbfdqZRKb35q7ThAcaAUWkD7ccdMCJ",
  "key10": "NZDWNbzzTY1KDyYqPcEjSYydTtsCXvFrBBsh5wuRU16WxPGUU8hAUrtsvVKXApL7PvEaiPgexACGTadABhZnitP",
  "key11": "JDWPJxgwS5wPXXqqqoh5BrZRgf742WaYnhRdyu8wRVweNLkgG1n1gwCCwTHNVvDN8snbPFzqjKaWsHaySqARXyX",
  "key12": "UDw66ZcesfpVTtaS1d5GaFTWAQRv8PX74BDGQborKC7NEAz43jhDf4N58b3uvRCGfi3MzyNKnqEKMNoHXtzoYH6",
  "key13": "5WumbaEKGS51p25UvMK34WbTkHwt7Kn7bNbbrk5WccCicFMa4fNq3cSzHZUvzDNHyJfutbi66Co6TJEKvGYvjF92",
  "key14": "3v3LpXkJxsLrhoVpXb8FpFwbhStJyM33TECQDwx1pWPCiCvkzTW6EatTa84B6Qkb6MpbToMBhwhJtRtYkWuHcG7D",
  "key15": "DkJC26PE6FVhLz1CiPG8HBz2yjSfmWHswhNC5gTQv4qcFd8sEKdB2pMWknWtdUMCwihjWFbJx7AcjV9tn8qaS5T",
  "key16": "2gEMTFWUn4rovbByMDLMWa49WVc3Essx4J7Tt411XHoEzE6FLvUX4XaVVuw67ci9Di4QWAQ6V82yr9fgQayzBkQj",
  "key17": "2bALWBHs8WAHo5MCAAHTixZCECsMULjpfdWbKBACAf3oFBv4xupRfh8kREMcjAWgUP3erd3kjT7yYHQLGDSWwq5p",
  "key18": "2zMLaCYJsYkfHevynwsU7asxxqM4weHTR7xzqsrWMxB1kHpbeHb7AWwhxfdiEhud7mmcAJQSsT3zEUdLqqCA8BvK",
  "key19": "4cFr9HGqCmug51DCtaXmnX5wFVaL31nG3LCNKcq76b1k546x2M6xuwgiKY222FsNALgtLETgG1imMp38xL4AYt7J",
  "key20": "45nyrgdWezst8gv2AUMJzSjGEVd8ByZ5HCsGiezT4Bt2izi4WxXJmyE6HBMczaHpzdLZifwgvkk8kKnV7PBoDgK",
  "key21": "293WPLqdVGzD6oaN2END6u3jhqrtwUjZ6my8D4u73rcz7TKhykJgauqdzwvikiEvGEvu9f4enr1GTh7CQhEKfAAa",
  "key22": "5PBdWsw3yjjqjyd7YXyjqfMy8awa3HB1mTtyq1NHFERZmyXZrYQPABsYrwt2bNDD7rmB68zGemagw1vR1L5uU4oW",
  "key23": "2EfwS1q16DDtL9AtRx6uCQeaczE2JHQ5ikBjHvq1CY6ma4GjQNjVfJG2a41NvS9ye7LN5nyBGmaegvaDsLD173e8",
  "key24": "5Mysyht5qKzfgX5yAHSHbDzonhHpcuaCiu5faEG8GBB6jMc2kUsgWjiG5qMr5bWBAuwSAZRQMWo319JFmCGK64ZJ",
  "key25": "5dh7kEErD5gzUnyHYaSG1sHWbjyiutwbGXmztFM2DBXCQ7Rw5SbX68qPSB5TWJ3p8ax8fnZ9YQaNMqQjvDrCREmi",
  "key26": "2TvjanusvAdrrsrdJiwHhFzvped9EnMu1B7caL2nP8ck4RUsW6ZM9rf9MmudAmUtpV2tY7faiWUfFEmKSMfhNwiB",
  "key27": "UD2NfVpCYvbjC1qHNDGTg1vEiVo1FJB8xTkkWg2UW3FDLNT2Ub5VQnUChBtmix8LKTa8n8Vr62bjr9fuHmBd1d1",
  "key28": "xrigwPSSZAcXhZCPWxrUHakCC6h6aKMG71G8Tj4sRUun21qigyCErngiboJRW2X3gBsgsfkqtePUQqZHLjrQmMG",
  "key29": "i8gtVjY53HAAVcF2da1xbGFKfmUVVN3VivzxhmLNE4zbetd3udMQJwBMzAYSkidva8Z7CTEiGitDk6FDBzaH4CL",
  "key30": "2WrpXo4k5hoiDpfC8Yf4YqePgqe6xLTeHXd7gHktFSL9RKyLSbzruoiomiaqSt5tQnQGrFqgDB9DgoHMv1N2tZsB",
  "key31": "29T6WXfcuKz9ygmr4GNpoTXKMACPCKsxURYBQKfHhrJYqxyMErPwUe7E9zMRgKMeupWdiS6ViF8iHz67ToSsboBT",
  "key32": "2vaYrPGTbBPw9korx9QvS3JNptrhbkWP9hL1eXXhRTGNYtMMqr2RbqGf8fCQqJ3tqjBjUVRMLYULJ3ACpFiYzTXi",
  "key33": "3XDbhuuFAcz2aqqM5B5RNveGXh7GRWwJ7g5xDi4uKCRXaDv6cVfBK3h1P45pCvSVCcGEVmv5CeMJr2oxckujcU7v",
  "key34": "4kBVrUxzciKsCipsBht1DTwADfJReu75uKVafyQ9NPQVwLbQokudxgjv8oocw5vhxTwfQaRhoKMuzgmcJmmbxzM1",
  "key35": "3zsqMBG1dSUMRLEMvTYSXtDHPuz7wW94dcANSVkujSR3QceBSRkXWwnyRQWy8oqxatcEC4zLWbHHiDv6AwDZWkor",
  "key36": "5xhZ8tdfr2W2Ae5qKySLKXvjGouFk8rve5E3zUeFskqyyyVQNB9BNLJKkkcsbTVrM4Hp4arRWjJSd4mUhvedJ11G",
  "key37": "59GLivLHTHXhVWn32rHebWcLWWxfmrtLhPDgQiFoY8hg9wJUAj1DokT7anSpwJ3pkHkx9DbqWnUjq8tVbas4A1zn",
  "key38": "5xfkicwRq9kx51eT5P19PNQzoR1WfC5tgsvsGpqvab1xyyXkDHS5ug4mmmgN1jHobGWakkdXFpiGrR7QYgBeop5R",
  "key39": "53gkUTLSYkdJQ48xqLSVCvXR5AmzyZv4iua3txVy52wq7LPJHbU2PGdiYDyZDatTftfd8MauBWVdbfqKno3eN7mh",
  "key40": "nju6VwH2fVnkK3eobEL5AbKCEyE8MUHp2HfzgjGXkdTcasqD3riZR6BZ9rtyjuCh3Z9L8mGzdMy7ShKtAhR3Lkt",
  "key41": "4NxPnn5ECnzVG5S4JQRHSQBwgVfH47KN8uaQDTeszYpZqYFRWXK49AWrF8me81vv6M5n35k7GovWSt3aWL9vtESn",
  "key42": "XBrfdHEvR7RBBMWNmZUWkks6wera3RcoznLjH7J9UJRjSL89F7cvE7ChSUEt6jQoGq1es8jwEGBttv1VBvV41gx",
  "key43": "62kXaMiCJeTEwXjBoXEztGQeYpJmgoEVcxgrUBP3z8obELnqPzBHktPCNvL2iArFMptPFUnPnD3FRncKEftHMTwm",
  "key44": "5d1KvqBc5MGBxkedHenpL4PoNXo4TLgz8hKZEBzMc8Ym6namincTGm4hrdsJthq6rbFR4YHsAHshZYeZmWpGp9Up"
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
