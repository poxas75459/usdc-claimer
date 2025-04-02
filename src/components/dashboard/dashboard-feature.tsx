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
    "4F45UXtiAZfPJvLT4LSKzsN65EdqMgKQR5o8WGvRdpbDF2KFntJncU2gALy5Wo7PhmSXAEGKzwzN3Ncczntmib45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izuVQXLLw8E7kB8mCrfWsuRX4DweYmvh6ruCow6Ebtr5t99UA5771n3tFqvvBN4krXUL4rx2KwRzDPFvGqw4mq",
  "key1": "VvGPnFVefhZGz1sXNWSNEFrajPwt9YDxANz4W4ecKagz6GkJFLeUKwnA9zxmtRq67g8CxfWGy7PGuwrnZuvo2z6",
  "key2": "4R7hNCU3DTHfPuzZz3ydcpnAqYStko4iUAG48zxvsgnRgb3iFYY5ge8nWK6YyycRsx4Jv7uBHSkBgqtWJL54JEN9",
  "key3": "2qFQksC5nQUZLZBZoHEbXaHSWj5Nft9KXKrkxM12fSAe2TtdAPBL6t3VJ4LYtJ2Bg7VF9atR83LsJXq2h9mvP5Lb",
  "key4": "p1t7fvGfxpejLSpfx9ewgSowRj9gVzLsXriUEE2XJo4AEtASVKrUarP92ak8WFDtw28pF54yW42WwSBEbSjXHqu",
  "key5": "qLUVcxgS3osF4ohzx69UU4SxExQwisxw5ZHJmCb1NKG8ewCqAvwzJBemLCwAxgJa1HsSrEPjWCUT4cnZAseAWtT",
  "key6": "4o4rtRymwA8hZ7JsqzDw3cMmdj98dnxUWa5FimPRzqJGcrfpaWrMfVDqMbvczSHhU1ires9sq1pWmNqtDHFNvHCo",
  "key7": "3qua5hDooni3dNecRRxJshwyq9bRGuSs4suYxQuc2HrAQ7f9xngJZdStgF3hJJNcVVJBSJX4sKdPVfBjLMpMfGpw",
  "key8": "5A1DHBSCrq6Q9ZWycsUWxXcJuHgcH3PZ18un7rawnWyQwrPE2mayr7kDHANAThem3yuNWErw33kcYAGrscZiq3ca",
  "key9": "4FsajadutHMxAFbhgLHbCDkkGy3LqZJuMw9mHLX7PfVQTwyc3NG5cV5GqsWHQGMGwL4WMxVi23V1b1ib3ERXYrKr",
  "key10": "zwMBFBNYRiR9bDi5PPMdAkUWj63Sc4EwXVXbbeLC5yqwYDGoCp76VFsgDwGFkj6tJAD8xPc5ddcxskzu8b5NDB2",
  "key11": "2ZNbnn6oQLdhBMZiYv5AgDRwK7zroRtiDyzFd8ewZzARiVQiQEqdH1kB4CXR9Am8bkxVRdrDtxyZcYq798g63HKk",
  "key12": "2XLdi98qbo4TwDu1VmxnaWRRyg4N9z39yZGXK6hCTT4LjU9KWKqNfwZQJgLmUxZ2RVtjKTHhCvcYRekgNfapFxNr",
  "key13": "5s56twbwBzSktqcxi4tJDKrLdkbd4TGyNESiurfE8nBXvpXA7F5TAduxkFtVfeP9a7fzSzJCw6tTPsaXibLgK1ZG",
  "key14": "2Wz5vpWQ1x7BmrNt4iJAiQTqKyKkp5uyqfGjwwrruAxA7ZFibmzMHHJDSdBJ1SDr34taJzi6LGQ1DLH6nWe1Bh8A",
  "key15": "KWQYqK1SwcybRJ1dWLrFeQFfbemG7rixzshTZz5fgRjDHGVoddjsGxMz2n2bWk2kpZzWFr7wgrx2npeo4JbrPJ9",
  "key16": "2BnZ17DBWCrr61MVD1thKHuw9UNazA6NA2ow9WKz7bw67gx2kbd7zYhJ8CLEQjoMrB7YhpzgFNxvFyRSgGYgC79N",
  "key17": "2MGjamY3x17WRvyChhqbcYss1G7KqbPCKmuEJd5xSM3nQGY62QekM9TZQjNKbn9QKbuhgGHigDNsujFLDZHkdXAG",
  "key18": "5nmQF2jVB1n8uaL338G7kS2Fnyu3pgeCbmz2AHN71QWM63xu9R8EidVNkSJsdCxR3WHZXdBFpvDLQm2vrQ5Jj5BS",
  "key19": "5yLirWUWYScc3tRAboF65j6KHhYkHDFfcWgdAUuBYgnVBRJdihjzWWXj25fpyewUDPhwZoQLKK4sUsbPWaVGi1Wh",
  "key20": "3HBrEEbaosai6sEJRRto61B1MXWNrdfuudQHb7SFBJJfu2FWa8mNzLv5WoGmtibCiNf5PhVjoyHf7xcEg5eSSuf1",
  "key21": "Gx5UMt1bATuHhUb8rTXxkQ6vhXtj1xP3ZrKzKBc59mgS1DsgG4BaM1G1RCVVFttRvuan1X6goyLi3DKNeBnnano",
  "key22": "5hPB58qE7iSUsqLAYp8LrF2M7a1sFRLuTsVS2Tnn1YknwFYE93eSKzhNzzAH8RMJzMqG5drpxv9BJxAcfSLpbYmy",
  "key23": "UnqVCWvCjtxrwrKs2wUaRo3sqX2AvuV5QK3y8M9q2qu4aUttF8bCniZeMe45p34gEkMETuDkaYFpLAs2iGwM5jk",
  "key24": "34YKpej9yD4dqpcX2Mz9NmK1KUAT5pEaYJKtxbZ2sEva2W25Q6DXaA5nCnVXUNemuqBmXmwUUus9vG3zqGhJjbyS",
  "key25": "2C8A5gsZoQA8ECQEHHYoXnQfNLXN5F1HaAPjQa6zQEok1dKzWPeG6VqUaZdAw4LgR7pFGvR5rWjJokxpgEsDFCvc",
  "key26": "3bLrDFkraqwZsMdYpeqbYgC71J6gfUrHiuwvjevt1GUcin9HwT6wBR1kKiiLQEDJ756zp7fFXoYvVeCjabfLFqZb",
  "key27": "5CBvJsYgcpuZhNbQLwktUdMHybe9hJewT6oHtjePTAaCg3awQgKqMWQW13RReJ87ePNkBz5qJR86PthyvDsPC9tj",
  "key28": "2oFDKcUDT6d16n3831LCgQdGWKz93PUVKHd2xDa5bwy9HBXkEE3XoGdb9tE2EUu4GUuT3hhoGqSTcMdHPA4DtpJ5",
  "key29": "2R6eMk4Pf3YHDW1WsrCfdP3HDSnoX91xHjPoSxDUMok3is2f3sNaeHME9vFwteu3DQJBrAKv5R6DCWCor46V5RuG",
  "key30": "uFYBHw2RTtQFzNzvMLgUj7YkCxYNWrjbCWmAuon3vr82uH9v8q3P9EiwX6kBiLaTi8nqfpMT1szJFF2BAW6BRyb",
  "key31": "5PNp8GwYdMyNSomkS2uf1AW1hr29t9rVNuxepL66C766Wah2Nwjpz1STAJ4dLz3oQqgjN6abmEwcTykWQ3Rq89y8",
  "key32": "o2DMwPbSZfsd1X1DKt3uUWW1bSef9tTopymMtQAJe5KMpML2DcFoHgJNHWwYC3SXUC1GGKhFPxhp64PYSB3uZiU",
  "key33": "5koZ1TP2Yhj8zM4N6wyzNH9hgunXcLD68XY53UQKwchobfr7paDKKy1jKPazbB9QmfrSoZYPkPZy7yYUCzQCUHzL",
  "key34": "2u7onWdQogPjonWN76s69unQg6i2N1uqjDFUvT3TY7Xyfb8eEbYTdDM9MgRdzppmdiDVUxfKE2fQeMejVFVnbf8s",
  "key35": "24is5KDoFGMfjpxts13TaczVYaEMeuTfJS1wwUBsomLDVGbMUikXBwvswmi1m3Jn7bYjc9nmVkTWyPfHDgKJpZKe",
  "key36": "2d4ofrkaKpFS81YpGvAumD3wEVwndFPonYUMFk9eis7FxHKYYB3eY2cv1v1FjLKzqMyyxTUJZRdYzucjf8WKAxNY",
  "key37": "4aEKXYxMH332AdkbF8LY2K2VkdSH42WELJUBVenSPTCWchyGstrt8hGH6vioTEjHCWgGpY5gb9No9p5nGXQhj92N",
  "key38": "2rG72oMMKZ3szM6GbmVK2DXgbDWrAbijL9meFSg87Mb4Zpa2vu7zaqMWs6DNiyPcZgNHkj8kESCWDZotEWwhB1ie",
  "key39": "xBMGDYfFNq6oEJ7HTCzBp12271W72nwAgck1akphDmRGDHBkEoD6iEaJ5T7Ko89KuuZ1kcvknc22WQKJ56pt77r",
  "key40": "3GQLhUt2GDKGrqYS92tZoSq4W9si3gSRLzewXiVVKDcW5533F2TXeXaexmSLJaaxyfpU5rEzUu132NZMYWU19DuC",
  "key41": "Zatm7nQbTEjrG624TrGU7StjM4mVu1aE4awQpVezTPdyFoVM3L85QznqwvUeUdxU3Mi9D1ahuVGVtxKnuYzXpgL",
  "key42": "58gvfaS39opQaQQhZ9NM7LA28pRH9Lcx6KkCNgu6aawxtXx6SJVxfNiTbr2P7N1Ucd4UXN47iVTvPs6hTkfN8LZ5",
  "key43": "4V9pMFiFfsxNsQphFY225uxzYx9zZ2PYW666JRSnPExgkNtZ8MwYnhhQ13FrP51hK7akwrbLK2T3RjcEmBEYdfZU",
  "key44": "4TCi2zraS8rxXHNz6aAAgCc9roM2hi1kDwJQEMPmNwkJqRvE9gNE7poxHnPvw8JBGQASFGC3RLCh4r9tg2Gug7GB",
  "key45": "3CUzTZVHDn9XUL8GorxQJhRSPFJWX4nKXbDikPCWQu7E8w5m8zMTfwFZa8AjUhUYYZ5SgoHi9qPTEiDDJZQ9zHwC",
  "key46": "4ARdoSJNMJCSBMo28NqKgxTsimnfXGEBFazUHNz6t3bo1ETUYk9TCjHLztnHK9fGfczYezQf2isRZ8vAnFW76Wez"
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
