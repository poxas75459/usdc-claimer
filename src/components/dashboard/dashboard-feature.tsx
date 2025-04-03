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
    "2ZiGuKxnzWYy5GgXAhcDJfKgX5dSrh2NfkonPUBy3P3QZW54q9GBVqDRzoskr3deSJrNEWKZdjiuxMUoRXAp3uft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvyZ1v8kxHtiUp9PSPUW2xoue4SNHndXv2gZVXBVeaTmnrT6wZsMJELNdvPuo6DzD7X8t2ReCmDG8R62aPqJwaJ",
  "key1": "46dd9C1hcmGsqc4p3Kj5AM9xaLbAZfpwaQmoHvr99uTpCdHwqAXpWeM3TZJ7C9PAP96eUFVTwfrFTX3PPwV8hPSB",
  "key2": "E2LytNxFYKY2AGqhc3b75dj3t27pmxwbSdtvnoLdymwLzBGqvs4pV755auuk95uSmRAbrVY26SqQqQ7xB6aaAA7",
  "key3": "ydyJqL5Unucn1gauCgJwRCuL51CHewwxwumG2aTwYvBRHvuvPNYtXBZ1sHD5DQPVwFP1Sug3w58ejqd1fZYWsV1",
  "key4": "4TNoKSQN5bvF6Mp4x6Q36McKHZe6PehtfW7mrj5fA6h37t4ptPjQnZLLQ4vTYoa7kHTewFeLD8AtshyNboubLyZt",
  "key5": "2n429zHx4tW8pzgqggTJtJ32JCbM3kmvC3sFJQkpZLpX8htTakA3LE1NuavcswAVFWKD4GGVx4ZQ4MwraMFgU4hp",
  "key6": "65S7Fkg7vdMdDRYw6sCqZmzmJpyu7XweY55jVU6Ey7QVb4DTJ1MiP3XtCiV7im2wWr1LC2YVLc8PNEJxx4fbnY1R",
  "key7": "5HWAFdRPxprb3ysY3TMa6D495CLxhYzQCeEXVDmJ5dpzNQNwJF8etbW2SnoRZMRsZpX3o1mQr4689HzXPEZZ5S8N",
  "key8": "2Mt55jotm9QTTTsVciz4BAtXwNJXD56vYhJTpBMWLMWbLdbqEEgRKz4sjQznYGzYuF939o56AypNjqvzcsPYZif7",
  "key9": "3tgdACUCrHfGeLkk3TAFz8HLmkZWZ8X1Kv7YHRDNpoomwYCCreuQNKV5y1WDEmGekF1hpJvFRDj22BFKmZksaUj6",
  "key10": "4qyxDpK4W3MDesPEdDCcMiMj6ifWbTT3rEamSLv9bvEK9J8KksMqUtFUgpVWg9f4wyTqmnNVvxLLSVLBJBud78Bx",
  "key11": "2wUAYfBukBv2t7V9PUwTsD4TPFda9VpSfdSFdynXB3tZWZbooAREV848eavtRJa62FswxGzH4Xiy4ZmYeNaxkEZd",
  "key12": "53TsdNparGaMxBnUxa1yJt4cDgmEAWV6DTfUVYxJKdG3uUT1x2p6MCV8W2ZkoQnFtpyPUCcvamyq4WJ28ysA3xog",
  "key13": "4rReCBYUBvL6mELwATfoyaUKXXn9r67fCiwLyZATGQc7t2u7CytV9VYFSZNjTPjZQxQjhcfcMUjCkDu7GNnFqtTQ",
  "key14": "8J1mNz6aFMR4EH6QMt2LXbhCJZBj8Qwy9tYCKiLyVkaxne35yZCtjwmiqyhoDontHP1VRShWWR68g1rb5c91W3M",
  "key15": "81JF7CBXRQCmXg6LZG3NCNM8y2s94QKTYEUUxi9yuUaZUBtpeahjQ1oEgJjHN4a2LqQx5GC6km1TDQKV3cZgn3w",
  "key16": "4JkPyRbKw75zrk6xZV8Xrx7jNDZqAK32xGtDC1RXZvMNujtVq5dcE48johXaHrTJooGCTVva1b3oDMmh1uafryb2",
  "key17": "4gQkXTYqGrn2cyuGgYg2dnGttpFYcbV9QpyMYNhfoGKhYMaGJ1uz1QEzXfy9pqkHWGdDQwzGhouQ2rxSZAChtSXc",
  "key18": "PEYHuSDLcamNMu3jKrGXWorKN3S6zrHkbKywtwrXym5p6W9Hs5Y59z6rSqdgMAkgwiYPt6BDvBWhWFneKnsrGDt",
  "key19": "32vEUkm8183snCdcytrwwDcjZ59s5xBJ6bTKZcReQYRhD6a3PDwPVcgX3YRRB7zXhuYTny4y2Gkuki9Da1gePevz",
  "key20": "4wH6JwjhcoZPQdQGRpkAyWqwXFuyneRWQbx8qH6pvRkxZSmfA1p7SJBFTUg6CMGXbwnX7hsSQtSG5UYp4ogG2EPg",
  "key21": "5NW9UQBvpq1EdP1oY7naJ5JhoamwLZpKwjRBoFNgeor5VvC1MCNCYnEm7wNbuFh6TyFHygYpti3qeiioDQcejwfv",
  "key22": "4yFR1eGar62VKYRQPRWvanVCRT7a13JavSphDUN1mTXU3AMLRgMdnBLeSABuADTqfzTBk96Rnj1peNHWfRe4d6vp",
  "key23": "5EMEMQ6nVPrBJ1q9UJo8ozmT9cbA3VkPMEy2q3vbwbZdDZdHHxVSsFE3cHAPx6pcU1GM1DMZLH4XgAMdZWWe9z7a",
  "key24": "5ovYepp8xoP732qSPi3CyqUDbJ6EHyXM376gjXN3vnvbxKk2XHZHo16ZXeFskbVtjGWVp34XgWW9DunsmXtH8Sec",
  "key25": "5LL2zGZBTgAv5NZv5K7iENs6zMBCAE96SY2LsYQyhwHJFC21i1B9CVvHdRxc7a9ZcY8nKGVMraoBhwMnjRR7ncyU",
  "key26": "4JmhhuPyiWkqS8BeT1YMbyZQz2h4MXSx5gNmAN3TQ2nT47vuBNiDgDWakbGEzWGkhniohZthHAQYeXmv7vLXktkh",
  "key27": "3jZVj5awMG51KzZuQ4ntmz3DRbhQNpNpYGh5d7ArGmAP6WgXUG3k7xPKk7yuNDtEEnHPpw7xH3HfN9JhjVv3JiGo",
  "key28": "5LzFpQzUGJxJvbcqKT92VLtrFtbFpT6Cuic58eNxmp7GchVxGkr2qJnBZymQLPs4u19D2AEANf6B7mBjsy7WUezE",
  "key29": "nRVpUEpsdZ12ePcXafoUCCnJiaxJzRHqPD3yLGZHVPgWLrFM5fbnY2g6e2RyV5Se1Le9A5jTtLFCTCLLWtvHtnk",
  "key30": "2j9BCY98efCaJ4eyhuAxhDrPzAtuAk4e83QTvdWsmzwSqyKA1Ky695dLxoKiuPJNs5ufLJz5267uFX5Wz97J8zNy",
  "key31": "5K8WycbrVjE1s76egaQdJpYxZWbVuocw4Lo6Mb4yNKuikBHAJPTUMB9REotYThT4Zq9QnQ1jbu2CTcqt2w5azxcm",
  "key32": "Jq5oBT9ezTzaWKf6R6GKDypup3a6HgfRmPTu2zQNgT8SagUH6sjgYmUFbjfWTVwaA6pVbT2KGYjHnFshmUcQ7zt",
  "key33": "5TaSE9vsKTNF5rHYJA2f93NYK4gG7tAuSo55DhVY4oNx17sScq2ZHCLRhGLAS6A89qEGV7bZuZAMqt8p4sy9FCbN",
  "key34": "5rAAoJm4ttZiVBXh3jGDzaKW8MrsU9qQWbjjKNRh39E4VBBQV8nBcQNZvYF9qR52ECHro1fVJgXcUFAgBdB6DHYh",
  "key35": "4r5rRZRXjSvX82kkgLnFuxPPeYYJchYcBggBEZXxqNMkeHLTkxp119EPpRdHgxxviQoxXtu1VzUhmh3T84fudvDu",
  "key36": "4YhbX7XMRrZRwd86cXKVe95H9RxVjibFk96pXuaTdYenEZJkH7fTeaV1qDQLut9NVhhXGr6ZLYe7WHQmAfgUHfte",
  "key37": "qLWSoUrjiDnux6TE9pEakiTT3AuLezKv2Zex7bZ7LGPWSoErRkHjgpDVBkri2ZunSCAfWwHz5mC7o4WD68hsHrg",
  "key38": "4tgbWf2Km6yvkS1XMRDC3CWbebpfhqtsnHXhdm8DvkTEyg82txemy2vyMC3jFCSzK2aNyPtSXRaarAH3rZYmbJe6",
  "key39": "25dwx6nfosRY3MkGdixYmFRthFoni7S2oEDwwjd39unDMN8Me7kcTnUp5LWvSd3R8GerqNFEbkFnsWpSnzNLADw7",
  "key40": "3Bxd6pKpT48BtdumrcXu9TbbJdMXgoceboL3eVhZymvs5zUDchmFW7JsxuaohE67A2g1ieTFzt3T3gj7WshZSJG8",
  "key41": "5FTMZZpdC34Jou7MQkmMYdYhmtuaDEGaKWheWj1hMUSXRYdwj1gYPo9mYwyHgaMfZjorrWKbzVYmoDUuyhkFVu53"
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
