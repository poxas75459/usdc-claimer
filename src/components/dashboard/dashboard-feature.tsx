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
    "2Kbsf9K1nGeccrXMEPYbbhFKLJ1jNRtJPxFvtBQ4vEpSTGHLxh2bQFxdZYUhDL8za7EWzWMchPYgnD2W9F8nc81a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZoBtLPHaaDvzdTcbhe7M57KG7k1gBRyJfwVDSQaMFYZYy29n8PXieJKseSD9qDjc2bwTXvs5os9T7LbsbXT4XQj",
  "key1": "3etDomTw3gCc2sPcaYxzZ3sbEpM28smeEzmhMo1kvPHPKNYHmBmXTGXwSjumAXTjQunu6THDjXNwtPLppg9e9grn",
  "key2": "5zRxGfGx2y5DnvV5FMvZ4cUhDeG9FvvYeVJgboruCxPNpdJC9e1SVv73xU4zrr5T81t8WMguWxM8pJjyNGuCd3Ab",
  "key3": "2YpVbSAgHBXuQCFfARXLNisAd7Y3KbekUnJZYEtNds2aGX5QX4y53U5Uqus3URV7agCmgvXbANpTMvMUbPPa18uS",
  "key4": "3LoXVdtTKizEYsHVULExW8CfTTeiGgy7e6eJn9CqBXf8Qk58rZkqQnziAtXzZGhs352NxFJxdUTtiH2HuA2dXCxE",
  "key5": "CdpyXXnuG52rV5ne7DN8iLqTGQmbMjXBaArv46ZvLS5C7o59fW3j5E2maLr6R8S3VS6beSdtdMfoHDENg8nhsED",
  "key6": "4dMKYz7ov5hHdzs4tYxB7HGmYVrebAAuHhp9wBj9aMXoNfgzPYDRpbDRnum9a21S7HY3pbdZQVMHioBm8eBujbHu",
  "key7": "3z4y4s2PqfJxFwgAVXQi1Laq1WJhnzeoihHDWp1bgqmUPGfacGaxC5AucUKWgiHLypRFEU8R1gU5UFyqj6QTbuuS",
  "key8": "59pcKiYd66nbGsx5tC4pBvUqk8a5t4EKZWvoFVLZsZwJpmTUjUXqFkqpsEcdQGhT4Z9xLsZSBgcUuXQzxai1XVzw",
  "key9": "5gQAXHAcrpiQptkHLBfyihustKG866sLVTevWZquyUubaTR2FvCGGNqmn8gzabSyvz7jYepYmNkPYnuLRJ31pUs1",
  "key10": "39cu3FzutHVSoKZY71x5BMUj7smPtZ1ajqUsYoYN5b4iwn4EpVmBn71MknCJe6tQvF7NynxRjS1Y6TnChQSKjs1K",
  "key11": "2Wh1GwLEzPoZhnaVz6VVAj2gBaj7r84FrUy4nTJKRHYjz9ci6Afw4nWH5nT4jrYXgpc213tyZ5mjeSnVxzZr9Q9S",
  "key12": "43paavTs9C8A9JFEuQLH8CwseeoXZ6WiH6Cyei95dNr9qfrygyooJCpJo51RT6afPeFed8aDarf1W9f6VbdEnPgB",
  "key13": "4ZmE8BD2BUe4QHJDtNWRAmshATWFNd4xniPNfHXksyz3EE8tMKJdX1E9dXVnhrowXuTnNEBqzzBdQH4DR9dcqGeW",
  "key14": "sCB36JMCv6tHkX7W8LnkaSaGRhUZLF8VdZTqgZPNb6fkxQBUAdHTqe7PqHRDmDasmqYFkE7pbuVLLQXMSgX7KoQ",
  "key15": "4NrBnnLNyE4jzHXYzHxxoXntq3pmiubpucyqj6aHesc7WR1aLWEPYWgUzxr2A7Ef7kjB66BgMpdzisse6WXex2q5",
  "key16": "Qi3SYqGzUVkHZ2iJTqpkCz3BsnTM5UEEXP8qwM1Tp9yWGD67EqhHqLQDrXSr1jvjXiUXaB4CcUtxrVQVfm4JuEo",
  "key17": "ouxTPLQ74Keb5utizPSqS2sn4hxFUyGhxUPbsDRt84FpbGjFJxhZZq5tAsrVyE5rBSYQac6iaG3UHLGaes5nrY6",
  "key18": "4cjwhG4KVLqwrUZRbs1kkdMMywqoWb8ibyDfu6GLHxkfVVxgEizHS5c5iyVmxU7HrJYxfZne46eLtXY6hZsZYG87",
  "key19": "h2QzVtEYn891FLhgfX1bZdmS6imLGASDTWWs4f8e5GH2gToVGo7tGptxVcTf1j2qGfmZ6FffeRj9P7p55XkGV1S",
  "key20": "3Mjvm83xSFX5oL415XGAMewq4iLq4zfkST6FnM2uZpYdUdyX9i58BG2a9ZSc9vbtSLzbj31H67YadEiKfwArHWYa",
  "key21": "az6ZeUXdTZw9HUxafLpLejcgrakTXrpdUp86zn2qLTsCNqrrmqTU2hFxrNSRLDkc3cMNeA7y4vcLQqmAhF8qhJC",
  "key22": "45kHR9henUC34WxnBLu7siXF7KZ1PMugXTsaRGKVbHFfXH9U8vHXo3HEDpC3EeKYGNywRQScqry8KeT6CWi93cz8",
  "key23": "5PHgR7ojuvMbXQzApCRsX8fzYq4fjG93kQ65XAuULeTTeVhm846Lb1uZPonnGVg52pfJBaicwCdr2keXzDeRUdcy",
  "key24": "srryN13DXjQKrPEKeq48GEtqPuy6DtBNtWymJYE1iUGzYPwKnpQX8TyJ1Sc7MBNpgEVAjzP7RJgatLUnZ3MVfwJ",
  "key25": "4BWadxHgZLcUZQe87716WdPdDruitqY3zJV1CAzp9Cd8NVpYQpcNcyv47EnVtjB6L7SNY4L4eB3WEvJot4y7mDbe",
  "key26": "ob8LaQZvfA3eh76ktVo1ghpL7bFKNBG6xMSz1A9L8qKTaZbdQrdZB9maRM1UVqfP7rJ7QwZpsPMnhMFByZFUb5N",
  "key27": "3hnkkyA9Ybn72Ui66iEshxyN2L9AKZPN9CrDH9xyhz4xgqZ63ruX9enxhFq8k6ARPJoDwDRJZdcf9gLpqY3gbMdy",
  "key28": "2mrexHjr2dyJBazn86xzM2y1fNofK44uerbgTZTuwxrDM6XK3f4igcyoFPDDaP8XRRU45gybtgrRHeAL9JrbY4YK",
  "key29": "5JauFRRfxDCUExZc8oVpuASSVVtHeJLw7eyst4cFjmebxsVJhLEwuzJqyGCgjmv2aUNfpNR42tV4VrQUxQJkdZiu",
  "key30": "4wYe6EcVTQgUKGQB5pWcRDsvyX4v6d34qssuTomVC2YTwWrwRbJcGgmMopbTHueit7eBi5mk7cbnnHoQFwjvN8JF",
  "key31": "euCimryFg5ZWkW7UoPhsDFcxUrtbwtQLA9JYZb7m4BmsR6FVEgd1bL6XhynwMuY6CzLQETfazE4PJNgKDPj1dgB",
  "key32": "4VmVrDfAaNx5wuoSu1SawwudkDrVh5jnKkukyNHDz51yQiaHsPnHX6dtA5TNgH1zw4o1Ui1M1JyraMM6usdKJTvR",
  "key33": "4ERe3qP2hGJWxSdizyE75qpQd7ZmxpqHbuHcWw4S8JwKBnhJRcjiaTCmVAZxdzDFNiyd4c8FTGGbFnaV6RuMmh3A",
  "key34": "3Q8kSp9Z3fQxpehXWEaQV6simW35bBeojdTqANvhkCnLKR8wXKGCFyKJo93ZoPUcx7eyyngddpBS2ozvBnwGWX64",
  "key35": "4c1WgNmBteJL1okHs5jeRUodAnifzZcmb5TkcW2pbQCpCjrjLX4zR5uph6TJZ6YCAZqy4djPBu1bwsae9GZUen7r",
  "key36": "32r9EHQXcyutbq5eQ6BAZYDivRqkCxn4HD2D4G8VxSqX8UUpftqeLv5VHJoRpwAdyFU33Yk7iWQb5voqVtMrxw3R",
  "key37": "2p5vsj1387ZpD28hkV8JmX1ATvP3HnBsC3ySacfzfaM7HH7h25E3kxBnHHh2f9DpaAyq49Kas6Yu4eQ9S8Z5PaKW",
  "key38": "5qNYAuDeCg94VPvYbVhr725wh8PFHXua73SpxzZi7NrHmVyGdefYM7qrGDQ3xLYnfYKWxsJhdcR36fxVdZ5zJWEZ",
  "key39": "2VdxMnBWARKYCucQFXiBSgQRRgrbdsYACdUBJd5J5bf2w8mEKXvUEvs7U5RjpFasCECpoNVMTPVpbjzc1V3mqPXe",
  "key40": "2WpgEpyLT8sAhgBHLhMDMeVPSxMXmGLM2kj11JYwFsryerizyNE4t7pe18K3tM9UQxtAJNrRD2oqnHEn7FRvPguT"
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
