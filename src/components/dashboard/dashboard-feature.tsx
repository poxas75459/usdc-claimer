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
    "3jUjiTUphBLHw8sZbB6WXao5UfeFkf61hHbzp8JXTE7ZAy5YKfWvTP21tb6Yt3x5ctVGwew7R1BqRxfSZahS24mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5zbJkwu84sPpg6p6M58Gceydc1fGtLBDN6aJwR3N41c7KfVkvaVExEymm3QjKVicgBGzQG9U9WBYXh1Hvtnepv",
  "key1": "32Mr64KjavKZUNzrTyw2nAvmxaZkARi2vgqpu8RR72yNAH7X2KCQdSGKdRozA5EFmrWboQj72edPFyG5VaRe5SdX",
  "key2": "2VX23rgbyYiRJXk8htEW9rkY7yRsAJzrLoADnTFo57WMz88NLQDKxyPgeHQctCBSnSpCbniyVo1my9faHnsF1p3J",
  "key3": "2NTBx5h2SdBTJ31e6XEifnWawM8n4yh7chac4ctB2D7eh3dVFus8ifRNu2om3BQtH6hgRsfm5KKxcUcjoVWs1eo1",
  "key4": "3wggQFEPiGux95TEEsUyeWWecFR7PNW7aipfHFi3wxdq3aw8CKsZ9hJm1dASBvw2uscUXuNuMmcNthrUn25BZXE1",
  "key5": "3VbpU8WEmvKenLdAnCFXJHxoqNekhNeJ6N1x51kUnjswwqTbc7ATV5QfxVDNsQ1JWhWLv2aZqw1vRerGd26j1fvK",
  "key6": "47VmagwZLN43oC6AXgD7Sm3L5yg8VbxAVS6u2toDs1oiMserA7bRHt7TEF2JBpmHFydiujKERouHsw1ucBrnD8cM",
  "key7": "3hDqft57UcAwFwQbZ4amTFQAyUeESUL9ag5Jxi1r9KnmnTuxTNttcdzp66jCEBRixjgSiCpmNbr21WuLtHTQRT5z",
  "key8": "jUhrS2ZFw5EWDDirXLgGdYdH8T2KZ5RaYL7J3JWBCi2JrVuimPzkrmxnthEfAjgZLz7e1FUShMjLeo6317ET91B",
  "key9": "2esEJAzLxbtqDNx2c4yEvrzvx6J3TweU6FakZS4P1Y4F9D8HbwfhdrN8LR2jfNXQJ1t1sMRikhZGz4XSZdydpBpM",
  "key10": "2PZEasSzinsXz3KZZx1inAJymKmcJrgzCSCWikVckvcWjitCJW6TKeugLrukMYfWavEU9cHy4KBmVhpffabc41m1",
  "key11": "3qrzZqLXciv3e9NdVL4XrM8CGq7BGyTey5sWFSu9VnbSavnDCPX7irKboeGparp8WttjYevY2hQ91cvZEKAA7q9n",
  "key12": "34yfs34Zrrdrb9DknLVNbwUBNzd81wmaStQ3XK6xbbJjea5bzdMHiaXXVx8m9FxMhn1iMuRofLWM98Skt5TacFHS",
  "key13": "3GHBTpbXo2Tk1Wr6SxkU6CLW6g265txMFYmDxRhWYqSiHcMh21X5HHRFxm16vc7nE1o87b4xaXMuL3cKwaahJsUU",
  "key14": "4RaVWhz9jkGi1KfiXeEVH6iwospvNAZf1uBWc5uUjACr96Rm4oV5wZmigPa43eU9DJ4drX8k4SZQuEPyCA5MBFRc",
  "key15": "wQRqWDJB9z2EnrRu1HdULaDLwpASSzYoZtnaj93KQTApJd6yE9nJCxCMWZgsYETy62YTHM438eurgT3JuE9B9WM",
  "key16": "5YLSqFzH87giYGx7Gty4kgSLWu5xx5TdtmUre5KQfGQBZdDEZCTAqJ7JscJdBLRYtPzSub8bX7AiuhZZeSrrqfEm",
  "key17": "3KiHMs8rPceheHgroZGFdorEDheJGnL7nnbLtCLjAAAqCd3MmUCJcqrHBwYnRLAv5QZz571KcUXSfAX7iy6CW6F3",
  "key18": "5wbDvsh6hnnH62KqQwpLduu3R6DMDtHxhhkGhWLFV7qzNg1aCqfgHXBfnzDVdQ98GiFrVjFNT1xAe7vfToXBj2ZZ",
  "key19": "2w4FhcPidaKJLPh4nTqfonrFRWHDCwfPg5JRkXRjyLmohBUDUpH4aeP8fTMPyjMUEdZ1TUCkzE6MfNQnTSnon917",
  "key20": "3wHM1dcKhJQH1d3yymkVwdsYKhGy9NWeBVekfLrzBV7HY5HsRyELvrsSqx3evgoBEkjTSN6wKU8Boq2c6o14jPFq",
  "key21": "2QMsdVqNZcC8zmLYbxscc6Lhzofj8j854o8y48XMSy6xztqRBCXvJc4auyU8fdPiEFyT58euDEiQe9okSwedHTnn",
  "key22": "4HFJLqKdcutmRZiZ6M6J7qfEWUkfAbVvbbNswHuU39butnBL7MsmYb5ToRjeS1AKK83LxwGs3cXFQczS8mhdm2Ak",
  "key23": "5eH4cMpxRM2s8FRQYcQeFbyMHQDcurMMyVa9KGewoCL4ny1cfLzVfSGRGw6G2ngCuZb1mfcEa3Z39qzGHmZYy4Mh",
  "key24": "2mZVZVF5PNeyYzE2Hr5Tf32TNWK74uqDzXTtYS8irS7JQQtPREg7DHmxqe7EaxHrPSzKtvwzoUGFfWtZDK9acB8S",
  "key25": "2koMhdVW8j8DxQeKzB3QqLNFvvN2GSoJvkzhPT3gYoMwQAVdFqhuAG5j9kZdnoYjMExKSStycQF3yrfnM56TtSLe",
  "key26": "2B1iBF4jP3fvyyCniUfEVGk692wSSrDQQmWThWGjm8bU4K4bSNKuVjPiP2Ky4wkFbqdoizjq66y9C9Gs35WPJVkw",
  "key27": "2Qx1NMrr1amnk5v7VfW15hGSqdqb2rLHxqFSrL8K5WVLAWv2Q4CEQxeTxMe9Cpumxsb3eLCeZNZyzWZ39HUSUbDb",
  "key28": "2XqPnnnYSWAaxZ65JRzRaz6ExBSvyZicvZo3Dzk6SVcmbBCQp9nWtctNbVHotAnpP46sTi8w2C9ZWFa4uMXFBmLd",
  "key29": "2QhSAFYwH6DQRoF5VZR1oiVseLSupFSEprnieUqmEL5M1CmWYwzCAaHGRXgLuk14NB2YScSc19TwtGsjErp31gnP",
  "key30": "2KG8dz3XkRHFgocr1exAMLiHXpE6RHTCmbPxm6rkW6xsxxrEmm5hG8w5B44YdL1pM9Ws8ekYy1Pcu9QQiS83tpJ3",
  "key31": "54XM9LHoed7KoUmdovQN9Nrj4pS8kK45kiFnBn5FFabtBwZs9ig6fzB4b2dMPp5VBRTXebwstzJpFhttEE6w2wfR",
  "key32": "5LjAF94YL9ug9WjMg4AiUCcMAhvJqYhQwppc2GtrHGtnZVW3s9bc5Gjf9kD6P2FvNbAiimjamqyqpddbsNR1oYhp",
  "key33": "4maePmVDhUiwyXJCb7W7LK2qLiGB7q1uXGcZ8L1CVDL9xGipgc2YyBHvh1eDuCp6tu71hYE5frSSpcGGrU8H4E3o",
  "key34": "65wC6oiAjU1nXN9xHxShfBVvwPi4PfMdYc92EqgjKJwQPhpaSBVRLQFkJHNPUWg6PLBVaxtjmd8og9mBR6nKbDdD",
  "key35": "4xvePU1UGSJVupxriD47D2yG9wLr7oT9kXjEkEkLNPzubq8dusr9mPt4G92Nuaoa6sKCMHA5LMknNtcCxDotuJkF",
  "key36": "4n6LcWPaXeWSxCWBGf2burN5MDM6P9tVDicZ33d5DrtD6nZM4bAe39s8Eqpx7n5U3rjNHuDfnbom4vW7xk3hhEWr",
  "key37": "2FsR3RT2LAUrB3BruSVBXY9AUhKJwKpFPdT4cLssqhBZiDCno7ED8rup5k7cWsUbaQhJZgm8sbsouXxQaycuafVy"
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
