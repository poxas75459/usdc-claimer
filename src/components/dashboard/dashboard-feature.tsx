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
    "3TEXZcRTV5zLcEfN7gMjeDkDEXk16rTFJfmtb3SMs8ka5zXiw2aKNQ3XfVUq2FbcFqbDfiP8e4BV8Gy9kujPJABy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmGt83wwp1JLWsqgcx8D78RTfcN6GNSNy5v8vGgrrvW1W6WkazD2bimmokuUBo4Pc8LKeRUDwdVa2RDwagZcXJu",
  "key1": "7PpfphvDUsVRPaa6EcoaurgCEaetB9EpBeA7PQdR11K11QA2Fvx8FGqeGfsRE6RJzZsDsv5TFyKi8iuYmAqBLCv",
  "key2": "3XRe5aW1JS7prsvtwRK5xU9qnuLjxrhUWcfy2BGBus42yPvPa6JRLQ7UDnFyL3CuDaJz7WY1FiPj2hLDn7MjMNdS",
  "key3": "muNSUqJtxAVtXYY2VajNASr388igf4UWXyTdtncyZawchDUbGmtH65QBJo2VFiPw7aF4oekLFyQcxUrUjWjkiS8",
  "key4": "3EwhBQKNtzrAnpfpnbpJfQZFk222H6cE3R7EEvAD221ruYGU1fP9jWBGzX7cK5u1M4SspdzEmDFkGef95smepDnA",
  "key5": "4wjNtznwdrqMrSJauS82qpZdqAmfYhtERv7T4LWhqzwzzWBkVZ7gKoo9Sxhy7JYTBuMVpLZqkv9ZZ9mxYqdupTLq",
  "key6": "4q34tLd6eNq5w4KD2tWWk9YbtuNN2JPJEHqZaccrEBtWKerejRs59Lkx4k9Qnzrwis7wgtU81PhgSM6yTXnvt3CB",
  "key7": "2g5jWjnKqCk5RwaabJhLHpV6uSwwbuME6oVQnauCjdigUfCk4SgS8zeE79XbCgcMudoFTRMiTTKKjqJGqFqVfK2Y",
  "key8": "2GzXtary9WrxLzJDTzKReBCh1q4yZZboRm5EquYm2c2p7VwwqKe41gnm7zTiQZHrxqqt4GnisgD1zmKLrKCLFXgQ",
  "key9": "4hEHjBQkgPCvAr38PXJqW8t9gX31YEYNgWSX1oJzWt9RtnpzE8N2tiNB7yaWdP2F826shUERNhohBofMKMwTB776",
  "key10": "3WM3WV5asgL2XdrQwNdE3G6tDxkYQeHQjJeSxKkcwudy1MvEPDp81bAZiTzYKx8sa3PHtvkVYCCAhDDXt7812HX8",
  "key11": "4UQTQDfoef2GFp56MM1LBfU7QsVhf4juw2UwrwbEvWPfFFZ2fEkVCDBLaqCURXRsReESHeCp3RuEW2zCKhQbzfPD",
  "key12": "pE4whrZSrV3KNMFUyRfWQxkLPRLjw31J8o8wHRz4T2zAAym9jr7zBDJijNgXcwDwNus48xBNYG3USNfVuSdPjoM",
  "key13": "edddSjBG62uiEaFKykKv8ajv7YRgqzD8Sb9w4kzivN1JYceEXzDqsdhfjLEoNsXmM5RDA1BMVwH3aySD9kc6DZ5",
  "key14": "3ss4VSFnvqNVzG2N77ppAAB2ib4d3pGSBNJNotqvMwjJk6vYocoYokFSCoJVjUccGF89bSDkYqrC13QZx4VMZ83b",
  "key15": "4ToemmPKK4YqkbCcYGqa3d2ePQtciwgyxJsN3vW5zeBXnEZD7qqqRGaZertLRjgnZRLCyYq8x9LWCFuHNd6qN4rY",
  "key16": "3Bi1uXwB3ToPAqRecLtSTQ794k65jsTZabck4QS8KNTdUjVwTKp7EoCjTrKHEjCXYu17KsTz5gXgj2punv1vjLX4",
  "key17": "4uJhuyMeoDPGkdmnbFrVqv5ZcuZfosETsrH5CfopwhFXkLJRdtHC1QtAxvX7hhcdBD2NiJ1C8Ut9zYrjTL2LjP3f",
  "key18": "wztrJVN591U9YaigFaCTpvkvjLNpexuszoBPkx1KtmLsKowvfM81HsLWcoQFhsa8p9RWj1Gj5mHqcsaWnBrEcpR",
  "key19": "4thUwDMwEpPeWvu5gn9MEjwLJbKLinddoRVuPYM62EBYLmpKewBs7auS4fuJsyW6KQKSns41wyz1Zwkz11jEZGiV",
  "key20": "ZgbQSfYegEmRNDBHEdvzMyXXaNxTq7gW64cZovtVQnc4Xc8HMF836S9aL4izXTKRRaNV37cxTD3SZY96hR1mAX6",
  "key21": "2vho4UdfiafUBZwuK2nTVwYabe6wzDgSEP8LhUaCJ42EFcwncM71gLbyRrZVBGSc4x15YTZwwqSHBrSTkCLGsRf5",
  "key22": "53n4DJvZgLjXPhRuxtH3rwhoejeYZ4Yq59eaqtU9PK8q7ndZdMT5vXUqZ4USP636Tw1bSkx7VjtRvdyvMsf2V8RJ",
  "key23": "mDGRSy74XfonnKCYt4ERGZabawg9QVAjn8BHCWANYzUJHm8mt9qfXq2sQm57G8RFKXeACNQBA5zxvSztSZftqDp",
  "key24": "32LFjPBVfHTsnawPuWe3SiBacmZ5Ex41qR4HEocwxhsH8a22t77aJSqzXU4fUbbnC9QGejCn9VJgdajFnTBpdgjM",
  "key25": "5TBBaZg2QywPtmkAeLgBybNeJ6DLKbSUzW42PSFzctYuh6NbZ26u3PcFcZXmJcPNMxVwDYVHp5Zv7j3k7BHLjSWD",
  "key26": "3SLBNZCTCWxbGec2yYKczgVWqTq2agXmifaRz42gVak2e2HNjpdVN4Lt754LYyNkiBxVeLd4X2h4emegnvskCXwW",
  "key27": "4DfrarYpXdqHWmPJoaurfvjC7Bi9ceLhtgWaU3guHxdWABPD6XQJvPVGBVJzt61vAtY7FNof2edb9fo9UWM4yo69",
  "key28": "2PW7jHMGa8NTPErXpnaNAYGAWEQsHiayhMcX1A4amAvqK8frLVYEHcUeAPtBhXXp1A5j29ua3nuL53NuQUWRCPaU",
  "key29": "2UKgyE6LyyWE8761Qpz1tHxgMDzQD5ZsypFg16RGKdTVzttKCZCHDf1X6N68PbP4nkftiJA2qF7f2SVLyrGLooa",
  "key30": "WRxNSifWjL3z4o3GWKyxcpWoeVwPZJvGQrcqXFBzZCZ7nstnowYAnzg7pFUpxbxiWrbqMgxiHdscyCYRcNjUj16",
  "key31": "4Uy6AKMhVkjEW1KD8qLcvmuQtJkwKJPMkBZUCPiPhpw7SJNX8BfuGw2EU6k7N9Xq2Fqj957dx4qDC5mC1b31uAkh",
  "key32": "3oZQ1LFX8BkPG8oGUTqJ8Ck2RLnVZYosTiQj2KfJ6naxcd5bczZUsc7Cj2C6cRqFqM74hgycL43YFVRRzjhW3A14",
  "key33": "2hmKMEacA9LNFcv5hc43ijAjctaNAsU9FchBdoLs3FkEVvnNx2wXUpEEPzoCTC9n5FVsBatkaTc81maJbkZvMiuZ",
  "key34": "2E73Xg1kFAWMS5rYoeuz5wEF6dEbTfu9yndXPSUJdtfoEC3Jr3LKNXF5CNoDUSwi9FwpY2HT8mfQRC4wLjEj8bt9",
  "key35": "62cDe6tmW2LBV5ML8aN4EofMEHiUE67SvCWHiCi9kUQSUXM4SMDzNvEV9eoMJ88EGqoFPUBVRAQNHou3nnXDqG25",
  "key36": "4uawbcUz2njavHzBG64RoCXP2RmZs7DDoFPfKbacCnz3Q8JFtQbtJqo5TvvTNeoJ2qVaFPdqCnTMQmgpLWUQHBaN",
  "key37": "3sEHusGzeMbrktUBLay2HRAFadxmb2HNCEViumQSiCzimVNpKuY1rtCBh1mGBTu62LyvQweamAy4ZfRW849x6s7v",
  "key38": "5cbc7jeSD1xm8K5UdivAY8B9M2Khakvz73Thm3Cc93YJigBsvYhD9WHo3fZTtQXtoU1LiMGWnrYQv3ULxxPSPnuM",
  "key39": "G76BtEMEJ3cum23Cvarx7oYP7djctEknPAJssEfZ4ffcDWoU82VFyiCxTkS9jMksjon7HdKNNgypxtgHoq2ScSf",
  "key40": "3xZ579f8wvTAtV9oadJAGXSt4Kb2muMmRQRC5NQpDWWiUwbY4MnDm9Vj3RPjKcJWVX63XH3oYsA4txLFUJ2bxS6y",
  "key41": "3vRhxUhf2yh5ZoiptzmWzyf6qRpSFZRZfPV5jbD2SC7P1RPukA13QE5vb1opxouoe27S9UGWveM1cuiwnYg5qcJW",
  "key42": "4qLJVDgDKaVdfgDu5WqTFsMeM9xdziM9JngVX8hL1YMeEWZR1N6GNNzckHRLQbdh928jpj3dJ7qaWzpPTMFguNV6",
  "key43": "28t4seJNn4AYbxyL9GmPowe69uWdCLdxorYYxnaCw2puVyzWvG3tzE12eiSgtYgZGpPiiyPH8yJv7UVY9WPgYCWJ"
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
