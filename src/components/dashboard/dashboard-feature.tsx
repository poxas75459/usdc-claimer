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
    "5Hh5FzcBPg9wUSDy92bAocHZ8S8pCTXjDPPc1p6ZQfvsJ9XZtkt6pP3As1kjwJAP7dswzJ6oRHgdyvLpRJnjQv7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AYmkhfhD6LBeUepjzSBGTbtTwcphgdmX2XE6Vj4QRMq76kcLeQXiar1fW6WDfVwYPSjAGdRiQgLZh3BgKKdpwsA",
  "key1": "kkrhra6887LM1DEsmRP5hYxkK8b97tXeSQaDfoxcekd8YXqHShgzRXxrqhn428URgHdpKoc3LoDS5E3ojNEj9zS",
  "key2": "4YmV6aowNF2V93KiKTbEGY5ySvCcxr64Caah8uqrH5YvEkJrjws6nNknooLvunULyfkGVfKpj285mstqAihCqvaj",
  "key3": "1txKrT8uu8mwLKDhrfMQGnBbqniSwRmk2EAzyZo9o7mgMMt73XxMAxJYKaWcCvQFDKtXtBNQU5H7ye7NhDKZAB1",
  "key4": "afRpQNbSm5QwLWHpSEsZV9Fftrg2DQiXynEFTUWV5QYyo5Z4CMUon3LXb22UjSAeJMcXHSkN4X9fpqPvTAfwF4M",
  "key5": "25ZEQYksiCz2GZ5mdSrzvdnmtB5RdLHnBbPETmccwRGWX5Eq2MPe25oBiAso316pZwsR1g2FNRv7sQnMM964vfpC",
  "key6": "2Z6ZhC5Fwn9JGYN6bDijvu4EScnC4YWtd5kHHSy7CfQeFeTrepXjGYsswLtMipJ2gjUCzkg1etei8atmvLsAtvXQ",
  "key7": "2FirGUTRLKtL882mXsat7zMznBRUtanVejmAN6unLhHXLRe6nuFXg8i4D6Jz7FbpJcAUQxtXVDkwqCUnJqBxAbeQ",
  "key8": "5zPpqndnzt5NyFujC641fnTEWNeYwT7W2EMQiZZt5KAiYBtJ9AvYhLAfVzt6QSfwjXAxPoLU8WZEt6nEM9ZFRHBW",
  "key9": "5vS7m4gsRXhxTwTaNj4SNgMvmx6SgYNEP76g2q6tUqiJeh4DRTSLziUH4dwPN7ECZrJucAzhrHcKwA58xJDErQfG",
  "key10": "3aAEy4yKBXmCh49bEdF143MxJY1TSbsekBbdhCrEoRj7DZNgq8qPfJvm9mDxvaaL21i3YGHYuVkRjYYnG1JGR195",
  "key11": "66C4Lo66ETSKZDdBcrGoxbNSx3ChWx9vXjeYwwsTGQTZRbVydrWzcGryxssWBPYzPZDeZjz8eTimu7kBaKG6GjAS",
  "key12": "5vS9Cyq39qkSB95gUMSGKH9vTUxaRDcoFcDucH2NGQZvp8Lt7tPGyPfp79yHSYiaH1nneUStwJgyBWGsUsGfw7Hb",
  "key13": "46MazomSNB3ToMu8CrqMA3GkD5PuTF1BGc6Qz7xKZxzBAByyZuFSXh14TxhwZN2qaJLQ5d9t9tRnZgbyLMp5Sn6w",
  "key14": "5h9M4wqbewUhFyYSQuDwozfNTLZAWMF176TrybmYxyzQt9vVvVEzzFPCEhpiJLAPWFVgxQqKciYx6eY8o1Ed4myV",
  "key15": "3hYNcXwemYATJqaPKd5fhFuoYvrZ7EWwSKxA3kutSNQi3KZqr1jekXaFwm5hJXiC2p8f183nGThhqrvKMrLbg5Xk",
  "key16": "33jTRcR8tzRfRg65fEPbqdTxtfssrkJ6MvD4jP2bZFajsBmw7WfsLKog9vyvVCJxFBVsWShWjogee3jNF2JhcJhK",
  "key17": "3ZzgZmam7NxHauot8Anss1m6Khym8sUabwQSgY54PfEXy8XPhh6AGY3qe1YT3kT7idMX35YwDjjBn7Z4yoshLQhz",
  "key18": "B57oovBJdi3Hck7HCSRXE3BncN8LPZgUSCZsLbv8CSXUgBq6Y5GZDzyJhm6VNYrVxGMQArB2umykxrvEsNRqwPJ",
  "key19": "KKxBt4NeHkYfJg4VuyAMFANsmPiH79jFMnE69uv3iKJvFqvWiEZM7n3wSn9Rq9SZB4p76h6u2VQXfgBcEFfFiCJ",
  "key20": "5nTSDg4K8e5YRDRQDJEH8jsiA1Qs4eWGrvp4yPXpFefQm2UtHvoMFLQxTbDxyKKH6bUNFMbF4YvUy5obRmmLpS2s",
  "key21": "5z5NbEKw2M9B7P3BcuVWoywXPasC1np2nkAkcDJWXn4TQYmGSdh37HgGpL5qjik13xjo4dhqwXBVXatHZzezwJrS",
  "key22": "396ywmyU9AoZxjjeZycAs8sCbyBk2dRuHhM8SheyfDCuP1ugXV6ScnXbZK4bd9aoe9NVhs7rj31aSvwDbwmoyfGq",
  "key23": "DcixkqLS9zjsqNJjj5oKuNSKWVyt4EfbZ2Fm1xccFtmYZz9BdxupGM5sFJebLVzETE8uNLpMF2txRzrhJJSGXAE",
  "key24": "2oGjHXL9p8n2ahFsMrxCnMwQU5js4U1omtV7MckP8x8JwzyG6a2odovJJszcWvFZ2Nny54MGFqNMeeg5HAVrHebv",
  "key25": "3uFj6uoBsWvBqdBCqXPQVw8EiMbcKftCLsBcPtdFFzcwe2NPp9zQBHCGfoHn7bbyTbj4i36V4vraYGFtv9m2ZFUs",
  "key26": "515TTRafe1tWgbmCqJfTWkMChyAvkW4iFqXyD9bWKTUDpsCVAfrsCx1esvFini2bgjXYzjUZ4Ayui8zL3nRcrK7s",
  "key27": "2CLVq1mEBsKXYTUZTeZg63HXQeQeSYPWSzkqAVuxtDaaSSCFKv6nPfxAiEBw5PWVN1H1LbnoeSc6eDPEDw9jvP5D",
  "key28": "2H8NQq2xqCmwRvXyBgKNip1NfyswugzsyWCk2zxwr5MgmyZQ9Ncf9ELB7NVcfk8XRy55o9rNvUSWbjuHxcwXf771",
  "key29": "3XDxtVQR5Hh8J8Qhqf4DuRWAj6Xk9Cmr1o4SngmWCoEL4gsDN9QZ6XGWQhHewYqbc65S1JocH6692easAxjSSoA9",
  "key30": "4NtHUbuQdy9r3w9MNFwoebBSKzRGTkfUU2NUDjmEy9FUqtAk4GgZpQEkkmi9gefiWU626XXKyk7B8dZLW4KWpTgc",
  "key31": "4V1mZgHNVxXfxkyutou4C196MKW1vWBPVqPJmoWtbB48Z5jPsoPUX8gYDb6aZdmh465m6R3pNVnbLjX6M6fMMVH2",
  "key32": "n7YbPsMbHdBnF24vbxEhFJJve8EHfuEb112VH62LtFxCZ4rHtTu64nSb6oaF784Hd3BeCJfKs75XutWQ3SP3QVt",
  "key33": "54KDK7MA8hnzsgMaMaPhF8joih4mekdNy8pLVikGAVFmp656hsHpR41N6C9LEURq7kZGsPMGb4qUd4PSdjspdi2u",
  "key34": "4kDjyLphz4uPrm2qj2S8CUdcxYFUVLxnU2fmGmAWXK3VGbmvb8JCXAsKxA2MZzN8cxUPyLb8j1gz8FYQ8634QqL7",
  "key35": "5Sw1PEPiJN2RPYPk5axDFAkvJfra7AeXK84gpgXCvJkfbNMVJvA32gT54UCansiSB3jQuNBvejT7xczLUWmTGw5P",
  "key36": "2CKVgwEtuQEg7h8A826DHunMiZRscyuHVgfwiAWR22UYiuzjXmY9jqVrWooHCVMwvedyimZY5ahbP3zHB4o2qY6A",
  "key37": "56144cp4ctoGjG2D7fNktr9QETYMFKZXxsYVLzPAGmvqUhyZi4P57iJJqw1kV8eqwu527BtDVXHAC5dhxpXhaG9d",
  "key38": "5e2CJYm4nAk2HcPoavtcY5sRu3ZETqWaoyXYobFniKhUs6Lbph25g5SNVa7PXSPiHnShWuNovPDoEJ3nTfnQGZXp"
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
