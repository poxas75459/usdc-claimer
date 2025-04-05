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
    "3Ctutfs6vhKGrPqgHozsP2cW2dewSEbuCyvq4KGPe3k5nUnCzjqGHPxHCGhQJAYgfJwfC76c16oC7sXRGfN1vTGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tikCzn5EBtH8dHxQj7pdrUrycuUuo2GBuCE8LWeacVYpqf4CaPz2Wbpr6gNzAQWgkzcqAowteALg34yZy8Qahhw",
  "key1": "28ba4jGYQbaCQPpPjB32LvkKikPxgoLqms2DtSPzXfFn3Ah8Zu8AyiGPCwdGFsCMNsMEh4bE2xcya2Lsk9eG3uCL",
  "key2": "2HDYGsVXMYrJyQhVbvvy4njkeR1pSxdV8jrvo16NsWt9HgyUyzqewfszS54F4aFptNQm5tvrFRfodvqATneajDkb",
  "key3": "4Hsp2vbMe1xbQc8PuHLJSW94KeqYhecZRGjpZeh3MznPiorsXLZNxmNueXZpbmgEHFtHiuugCG8nDR1rzWg2oaCP",
  "key4": "611VZsyiWTTw5saKoRQ1LLPM22KaARNrqMD2VQx57EJq2zpdcXXnxt4oXoG4KG4uDPjprQaUtMmAV9dm1TVmhCRe",
  "key5": "2o9FFTR3hiTxC5UAaXLvrMPzYjD9pXKCe7iwWVD5H5kTHqwdrUwQ4GzwoSTdXxfYZ9CVBA5oBPKhifWoEsNKaSP",
  "key6": "5UrdiQwP8TEQA3Zg29YQPZF6GAqABkXWgQ6qNps2caGJ6dFv5HBrXTkWT449djHRguUaRJbmzL3qu1b2WEMZXrxf",
  "key7": "52w2VgLZzpJziE3zDC4g6Fo7igpmm6jF3kZ5HsLjhhAiMYh1KX16AegUyP4shBPmX5kpSyqSEMN7Wd4ivqsQbiRC",
  "key8": "5QgM2R8wx83E6JrwKBgfXNbRjBgJEzqLy984SpwTH7c5cexXy8YChVoAaGHPGQibXfBuQeeFazyh9uXHF4swhYPb",
  "key9": "4woyaGMemgp2tuPtWmacnx86a8sGe9yKoxzFHUvtvexohftz2K4NUgNuyLHtweBVsypQYPq8VxuQGqieLStErJUv",
  "key10": "2ZiWN8dwUf4cMc1DYUQvZhxrvvt3vBEK9fA2NtAxmM2nyPv7jCM5pEHm6stiVdr5HXXuh7T3yzQEbq2tpEUy8biu",
  "key11": "56hbX5DLTnAVTFJt9rafsxrxv7s4q3WPbZCWMNzfdWTvwErcjwYRtVQF7d1CT7rzGhS7M1SUMb9aPtM2CMLep29A",
  "key12": "2Wx7ExEKBw8cdUtYDVbXUfHALBc7j3aBYS2ECdEn65Xnjd6rf7FTxNe2MYTj5QiB3yQNUWdsM73FWcCAQvDGSjmh",
  "key13": "4zY4gMtVamHyQakVmE8dwA2CV3ZUGTY5WqZf91Mi9sAxufTHA211nM8NK9haQUtVNhDs6uYxRqRVorkCBdjPz9Lv",
  "key14": "3RSwTGJwqHVWJyEw4YxTQiUomDgiSWDRBLzRqqRiuV19VqZGMZRZ3czrN6fheYwmNGKoGfoggVKxjDBdVkUG8WaB",
  "key15": "26yXf6RSVoT2JSLfuFCTubQgFX4a297FDCxStBiwuSmA3nTMbHzAVXqso549iwVGoFxNyGQAsr2Qt5NuNTk4vUtJ",
  "key16": "37oFjKKsa4dEgBgK99vhEAEFcW75eRVHgR6PyHvCrFu5Cj7V4oNCgwVNqA7FET8EfEgVtmHLfw2CUQPJ6U53VeCW",
  "key17": "2SW45MdnezLbqgHhT3t9xZeWPmCUwUMQT8GCNRKCJzK5FfvqBAmn8wH9hMVaZWjfyRjP13WrQDxUUowv1Qmx7dkt",
  "key18": "5Dus2PM7UPzNHrTgeXUh89d7JyPwBTU8xSEw1xVFqa8gRLZJpQMG8WTi3VbYg7XP1keiieVDc3NoXPidBB8YZ5Xw",
  "key19": "QuakY6rB1uCe1QTXpwtTnwvjyDscnxWF2pWCobe2CL23aEZMhCS8QGWMuiv4jFChAQzs2ERC5ExuqKh7D98i3Ts",
  "key20": "4wXVUo1gbBBijeFVnMxUNcDKiJjxLpiCmYmLpyPuTtU54HcTK7mDJ1yRHEodR2RNkc4Djdfwr3opwXx1TUvUaKee",
  "key21": "5UooJ9cfWBxxoG9rffZhgB36uM7oc84P4ASfKLsx4Mh7Tn4MQeWskR2UnFgjZgYouWfLFzgaCBEbSr77AWeirxys",
  "key22": "4KdqeHQCtKjdgquCFKfooWvQufgjKnaVSocKPcuxWUZPTs2onzkjMfsBW4BPPbNA14dLfCK2hzBJtM4PFegUk723",
  "key23": "2TZ1M3sYenAn4NeiTfbe5rwHzv9NkNEop4rCegibRMYyY2dGBHCUnoSermVnXkWV483LYp1R1u3UNHXAg3VT9zPD",
  "key24": "5QWQ14XyMBz841QubPErRuKGDjrpfJLkyEVjK883cGTkNfYQ1FyYwR8Df3E78bdZrgdXaipWpkrvkWtpmHJ7m8MW",
  "key25": "4uGoMZGodmkYy5fHRUpzeSZpXX2kASMBt4KoXPdozNNEY3h6SRF96gLVoLxi9J35BEqFPQsyUdufoF9D7ihzrHeb",
  "key26": "cANBeti3kyUxtSBxjBJUVaGVtWPaKUpnAVC9gw9PdZJkUz4SrV6rAikUKq6BTKPzf4xkrqDyqVrQmdiutZnJX8a",
  "key27": "2iNWBcFLzoTcCWZLca5dbTs5kGHxgSQfsmLdDkeWYxCEfK7StUbx5pKigJf9XYNEekXDXw6HHm7kVypviJ7fFX22",
  "key28": "TyEiA3ZYN8siorevgD9XBJwmX3NMtshj8rbCd6HCp8dXkG27HKZu2Xs3PcMPkUXAtZutpjm9H36653nNjDKre1N",
  "key29": "2a4p2UKDA5qtbcgPVxi4R1qRAtzsJHuBdedwgeAZZDPPMXRcnBxQrbz7gm4tc5iojFEtXVhjrYswVwAQAmnNyymV"
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
