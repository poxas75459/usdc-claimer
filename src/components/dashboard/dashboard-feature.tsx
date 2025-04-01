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
    "4U18SnjAsJ9ok8YtC8mtitoWX2BhK6VZCYA4Cpypmt9kPYEomW8RHmN8dYWbM3jPSacGoQSdAbuZoGsCz3JaXicm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7PBALjdBy8EDx752MbqFn2gFmjsfeuo9rHwqpkDGv2svnnHZ8HGMvb5V3NGmp5omRgbFNJZdSaUagAZWHWPJGC",
  "key1": "FmNVta8qzNSQp36is6WPU6DfCXY7CJxJfu4ThZVmc5Uqh9umR2cwWxQcAHG1tMjwa1VFRhRB9exefwEGNPKhi45",
  "key2": "64eZfcnuUpLVWdebH94Xj7FA7ihErGdYW8Kra9nZhqq6dTt7nWs2EfPrC2yTf363hUMLcDJ6JEKc2iWc33qoEYYE",
  "key3": "TekU27PsnaL2vAh2sSgjTzRywfDri8FX2sKufM4RVDKRF1Wbt7vrq5KWn3cCBBD8Xf8Gij1HtgBtAZcyNt1agDD",
  "key4": "4hwniLTCgabwSgFiNH785Q2J62kjpbfox3EdmkpJXNwxZ552g3N7DNUqc9nZ1kA3uozA7bZ91uknR9uYSy4cx598",
  "key5": "3ttc29s3urGYknzRyrua4ZJ1hXbPcwhkmyAejqyy6eSLx9Qn3EwQEbWe45o9898MkuDjW7DMXVg9KaPwUmvchMzP",
  "key6": "3Mc5hHRXQZyyPTLrTDrHtneXWqnkZN7XDeYqMnHx9op1pyZFm2K3jaHwrjicWdVtn1Dp59VaiAPXd4vbFFvDNmWS",
  "key7": "8hQodWeuMhwRLmCStWf9DN28MEmNBHD7NcpXE9EHB4ETya7oDbVGRzDZb9gML3das1HNAJh2B6nUjYT6GPeBatV",
  "key8": "4JFoGFeRghsNkLhLoULhcfnnzSKKeWuRUVxeDdKStKUn5LKNCg2YxPi5KLwmL5QNpnPma18Z8uGxnh6fuFpaHFBB",
  "key9": "2xDTrqatiggMUNmScZwQuFbobyuE9CENwrGiM31p3inmC8dNqs2PekvrxWagHMnsCkTBbsQ6VTEiFPE69RvNLv7d",
  "key10": "2HopFBwfaFR2Hoi9cL6QyzWVHK4UQEnK9TzeFVJP9XHtaL4Br8rnBqWfZr16QX4zB5GrVNNjqjquqz7JhD14kWAu",
  "key11": "45sFktMe9KkaYMvZ5LRYkknZ619nJ955NoR3qFV3x4gaTBbfut5zzVvZaY4ZfhYCcWvi5qzsy1AsQq2S6Lauzop6",
  "key12": "5E8v2rpk495yAcw14bm84zkFaNFEeNvcxUQF7yX3tTJTpYm5PKDm1rBadvQkg9Hs1TdPaFLGRaKpMgbux6zPQjNL",
  "key13": "2z7Kh8xQvT1313Bc13gCjYBXdtumA7M1BT2kLsbCuWZHADFD8mbpAiPpdUeooY6pRPLR9f9fcSMJf5KY3EDHUJcj",
  "key14": "5ur3v2FXXefTsvJANRfWG84jCNPTi3YRFvu1xWx819XeFN1dEq1i4hVuHqszgKCBMJHcG86nLoZJdncu4LNx7esV",
  "key15": "5a7jZa1nFqTQWFGJYG2U3Yh8fnFTuW1J5gumV31iaHDSqRxTKBkqLo8XXxD2jLgrpu2dG5boQNGNfFtoSL4NwXMq",
  "key16": "4wgKtQ3iFWmyUbrZw28DjKpnQBbtB9cvjDLRmeYZzgZTUU1PiU1UqiNCcdGqZEe1BvFFP8HpxEDvvWGRZogjpkSZ",
  "key17": "2VJpYmNFP3JYmCoLPjn4WazNuxtqh1NKUwTZ2ugmBjUWJSNNJ9NFJm2GwrQuzMv3jZsRd4VAdBzDJjswFQRQp5LW",
  "key18": "2mE6BGwbCATs3kZiVCAr3FBQ14pjj6HZPq73EkQ9kYc4nkZ1uQ9gqjpjwcbkmBuYvHYDFt1nVsmVDPcTggSC9uZc",
  "key19": "4Bscn3ZqUmNidk5aL7XKDmsLVtp1wmjUUMkEHNgFApEmixNtqW8rL4UxQNRuYkPhfyar2YRQG69cF76MnH1jtXtR",
  "key20": "Hr6Csq3XWu4j3mp8zkLrHyjmzbmv5HsSiqA1SCpnYXN6Cyjo8s3xAYF1yV7zwUkVAVpGEYj4x8QDbsmWfL6seQr",
  "key21": "uPQ6fPwiRrEphySSHqhz9A7467vVoovQyXkYjjDBnEFEwJCJKjwvYrb6zFEmq3m7wAjfVTsJ9ibkHM5H4EyDr5y",
  "key22": "3fC2bFm4TmMpPRFXytdSutcT44zioaQJeDACZoA8CqNNUzVeAYTvfki3ZJ42hwtkYTjDprY4JZjG1AWhL6iGNC1C",
  "key23": "4ZSio7WL9p9fDrZtbrLi4izMnwVp32Kat4wEypq4afvNJQje6PZwZX4nVDqxyWVoZBZYayM27EnwabnKd9ZNMu7m",
  "key24": "dsMGnJ6Pa5j9wWBAjgX9umnJuWuyrK6kGC7qTfeEU6ZuPj4UPtFezYKz4QzVyEVxDSvL4mCAH53uScL1e7Efzrg",
  "key25": "4ErCRwzwBDnBmLeknWEMcfqLjD9uQkv6NDp1txQJwEfcxY9Qhn52e5XLk9SttoQP3RmTA3FfnSPf8X3DKWmctYTy",
  "key26": "31rPKgauSNzdUiHnzEJgkL1pPrgEUYtysqvwt2fqY2tZqEQngZjmahaAfzw6TWvMdcSUQHHbaTb1e9QhjcWJo8aR",
  "key27": "5mKFrUdPw2mKnPoSEHn6oi7ajPLJo35FdPp25tx6ARZf2D9L4u9UHjD8b3nv6sgwkP3pHgXFj7rT2XW6dG59XDp3",
  "key28": "32CMfP87z4UcMZjSbtmL1cjQuCZ2F8ueNKjSYbnjwgQtamPL8CgVWn9YNFpXpKwNwKT73a6Vt7iH3B9MTYBjdFSP",
  "key29": "npPjynDhWDTYdfpcEM29cseA8GpaipGvnT8DndyXt9LfEXBYhd6QHk9AADV6AwuBoXH974hn7WHNB8iMBFwUEkS",
  "key30": "3mxD71JJf8ZcQJ2A9ukS1AAjQAQ7Ed3jgg5Mv1bDZSgnjEgNMnNoexNJScZuXNsfkGwZjuqbtK2sste1JiEJRr9k",
  "key31": "5Dhaqjdm4KDmeHPhU9p6CPHsGhVW1abcMo58mQ41m1kxkgXg9NnRtjUPgFqFYyLyouNDgnvC3dncu1rF4j2msMZN",
  "key32": "eYfEYKirqfdYj5rFjMrK1ayZSUerKiJ8o7Cj1vnVNf4t9miaCJAspKPE2xHHRvHXGCUH4L51iXfkxkUPXxxY8B4",
  "key33": "34QdxaCP7WBuuijaZ8RdgUCqYq2QarBAeLpxZS7VJJSHvbXyo85ot1R2mhQoSxxs2Hczs5ER46iZ5ahmeRb2b5Kb",
  "key34": "4Vgi7Q5cvaZFSS4FWzmTAVQBcV4n8BErW7YjJQjwbm7DRjxpsoxe3xbe9hpKMUZXTiNGeowwQc7V6ipEKYNukRd5",
  "key35": "3yLgSagfcnPWTkjuyj7oVQFeEoEJBssNTvmZCfzepNMkwWZeTXps4rza5LDkSHMi1A21wAX2ytaq67vCPjyoAQQH",
  "key36": "2xtcoWdXaeRZj8iTpA9FFTLZW5ADFmZjaWVhZNUVFKhzuRmEMv4iARk1K6NWBBmqQBsQAtuVhe4Zpaipb6euUJCn",
  "key37": "wK4hMnofab9cVP74DpEzAdBuZhut9TuWWJkingKTyNs47KjywoBbTDDaDZ21rMqCwpWDYABNf7zNgGoRhQJb1tV",
  "key38": "5rbcMYRCtmuN9DHZHqqJPd3drPdNVM2ktW7YCujBxB2Ypu3SYPMvfY2TEBT9V4cbthckoJWigMhz4TQGV98FPtsZ"
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
