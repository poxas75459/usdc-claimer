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
    "5XW1MY3PMDKWVEhXBq8s4JbwEyBKwZcmJ5jhBqyLZN83Ei32yT2CLof1KdehHRDXCmJM7bRbSe1SfbpSd9ipEe6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXKMuKYexPyMDde38x9d5ZAhzow2uavm57AQ5RmnWyHTjifTND1wb9Asfns8U82HFJXkYigynJqLCqjQZiy7v4E",
  "key1": "4eipwPhtb1UJjSrg89yuhRG49DXcr9w2NwyxVSguP3LP874613ucuTjyf7SczPZ7CqKbQEbJDRvmiBpo7kt9NYzE",
  "key2": "2yx1EU7WNNHsoDrBXQvUbnkVWHcC2xuXHJZDq4rbFB22R4fRjcoaSJqRpupyc5hLssoaU6bo7KcELd7pRHZxzBCm",
  "key3": "3FTeUEDohn5gm5Lziix3Z6bDvAHifgRCxNkLgB2dCLErSDmcUCJSCUM5urgxvsGrzscSsNkQZxrwU9ffqCvS9KmH",
  "key4": "3nkyYiBrL6rRfNsxVo4inVZKG4CnFXjvcQ1zjQAZjh2ucsWPxf5WQvSFfeTv2aJPmNYKMqBqQywFLyVXR3u4Jdqy",
  "key5": "21CFQLC1oMPn87xQ1evdTtRxcBFPrevGomgiKj2n5tzBSSf2vwTVUAZ3YogJxARHrWxFNAUobD9BnqNLZQ1LtNtm",
  "key6": "3dchaLBYGQPA8hVQAvfjEDoZbEBq7aTQy8n8hAA4BxiiYdEXxcYEyQ3ji43v8bVrbchEn7NbZPgeZ5jyVED9Gcsj",
  "key7": "HEVFMNh1TwzRHXiiQaYX2qWLwQ9DTBjCaaGgD9DEwDMk4yxpiJ9YwJam5TfxLdBf9AfDW6pPkmn8gjdNqtpRriH",
  "key8": "55pMTVistP68pbHjs4NgWi25zaTxN5cG1WsiCK2CNgdvqeT5uJFJ6s1McYwDMxJsmWeurkcriX5ahhQ6TB62veTH",
  "key9": "45eYgsVc6EhvL8NoXXeQPbzR63azUginFRCvscTLLNHoqjp6DR78xUuegVTEBJTG3A5tAnHrB9QwAGr5TUUxVdGh",
  "key10": "5qFYNRaQ6SSpcxK9UXM2QrwRsTBgg9aS9SoRqttxAJ5xGpmrg2vPXo52qVjbju7nF8wPSD4mZHznm3tDYyGAvvmk",
  "key11": "46n1gBdH9xZXg7fEzocooM4RbG7dPLEYvLFwnrEn9Eym4PhfrH1Qi43jP1XgAdnMZkGUJFWdRbyZYYSPbTJiqbQN",
  "key12": "61CdBvDy5nWRKd666J3RTJCJNggxF4uNfvRnSxLww1azddLTGYezFMguXHbS2gBxNit42yEE2DNFPN3fVk27DDAe",
  "key13": "63kgc8ew1zDfJYCSzZAN5MD3x1DiJ8iJtV1Fvr4zfRhweEzTzHgZnkosqaD8ZH6LvEdVVE43nzoz7mFqxb1nLMw7",
  "key14": "4PxrpzTPi8zVy1SxD9nLcj6okiLkfgAvsAUpdnwgi2VgqWmHvENfQCGNuLgVCwegsCDvQgr73UmB9izJVcCqcpXr",
  "key15": "5RvamcZGvJwZ67ZrPfuN7s6q1jzRjD7iumhxCEAExgkjdCTziDRoqr84SiJQDhYembF9tXU6XCG6jJDZAAwGFySv",
  "key16": "1LeCjQ6oa8H74qZVnZRnkQeXTz6GYBHhsmpCZJFiffZKGpQT1CHupQSXpANHLefGYweh8zDk8nPWV4fzWkM9gr",
  "key17": "3qv452V8eiTUxUAJBjdZNMb1U6ADpx3EfaSPC52c5r4vp6nKTmoD5PWR1p5KZg5meoTTmy94dw4eZLbXV37gZpf6",
  "key18": "3vecBvrPDeZ6KU4eJq6KekwCqx1mrd3dFc8UYChub8vWZRBKJ18cxABasASvQFZbnZFY72tc8vQv2DkDXDbqAWjF",
  "key19": "36NRMcx1SKJiYjAkua15862344z388nuuws1DBmaCTWiuhQYGzWFT9cmpFpneuYzYaWTvdjk59q1cSvcqKkN57MB",
  "key20": "3GYX2x2AzvdmjjtBFjQaruvRSem7xevnoYuEPqTEAaNkPCtYVCr8mTfzuRCXHzoBVLGhottnK91m117BkD5uaKYm",
  "key21": "28a9ufvkoBHvcEjBM5Pi5UqXaim1dQTe68mbgnrMXgRVLmv42UP6KijYXGwm5DBd147gScnMjswAEDwPPoeygCdJ",
  "key22": "293GBnAVDZdH44rNB4pBXTv2twXtRUw248Ue2sMvAxwesxzQAxyAqWKXj4PpnXeWdcBXDDLRf5Vzn6EaB32C8zBw",
  "key23": "4ZD2JDzy94mQrDTC1XfKadWvAAUMtfL8FS3H92GoA4bu8j7MAeNsYGqTZLZQXAPQC6qooighjpq4PwRRhZn1prZa",
  "key24": "tCitgBAJ8ECsbBaB7EVvxytJ58jezn4ag5QxR3U7NWQ5CpcFKCnvtbrNU2BHHjBZE3WQ36sgDtLEq5LpRfaVLjQ",
  "key25": "ewxw9pdJgvo1ZZ9namEBk1VFXTCGn57HyfRoHVoy2ePZnuH4RWb8nBDfnG1sNwqLWuF4kxEysRAaVGUiYoh5uq2",
  "key26": "3EeUykT6mi2mWQMr7zj9V2kZUaSk1GAZUZcLKphLKhdMppxavCto26XfDfgQ2Cwjmwa1VerJinciNS7ZguGQoRhn",
  "key27": "5Bi9VJosWSRujgR3kUNUDusMCnoUjovSrPDTkxH2pAs5c9tHkoQa84fzW3Ncp5NsDjTojDe7XfQZfALyXvv9v6tC",
  "key28": "5SCNJ64beU8xcWJjNzyKbKiyYcQeuPWWjoTmZaVmjHQspziMBUyjPkT2UJmNPWvCddfHMPAYHEpeMLw9Hp8AkfGG",
  "key29": "4rYiGEXm8efSRjTAszHX6iPYgA52n92Db3Z6VS9jxQGqkmANcvePJm3qAgHfLXTpmtpXu3QEbTqmM67ZD8jPNcti",
  "key30": "5RtPqthH8QZye7DqqodCLat6sdw9wtvomAzXGxh9REEJ1W4DuwJeiJvYoe3HQK2nn29hsCyfEExuRKfD4WGpVuQQ",
  "key31": "2ts5czWLr7eo6MzZVFdLHUMuha4nvEpUf4pTyVrdDjgywGbWkyew4vYnvM9tDiVZtoyKCDdptGXQ8sU6MWgM1CGW",
  "key32": "4mAV4tMBsAqy6xuYKH2GkAVThCyWvdBah2hyatHagHdpHMUQJaoxka1r6gh8QLLSxLtHX9YVqoCRL2xC8z8wjvW4",
  "key33": "3SACCufzmYfWfhxFTmwpa7Pqn2eBeDzdc4iTQhfRNhDRVnBKGfmU7KDp4xnq15urauGGuutCKtDMCiipZm2x5hXM",
  "key34": "31sbFugwkPrsM9V85MEyVV7L2dhTdGW3VK1c8RPxQNt8K62aH4TgLvpVNXNVyWBVswpg3NjhF26SEy3KhUATtGfX",
  "key35": "666zvE8W4vkzEcAhQ1AEewzntzAEXTo8ksuDu3yQe185kZ6LSv3nznkAZcTj8m2HGQSuDvQwQUcTGSmVN988Bdqi",
  "key36": "62bMfBk27VPho2Y3fevFc4FLRw6eopbXuRWAizEasciYwtTseac8P9HUrT1SZAyvsXXbEn2g7BFjUCCm1JYpNefH",
  "key37": "xEFmZjgUdq3kCT8z6NfZ5xf6Fp9Ubkk19N5Nk1FPjYrwfzo3f4p1rEWsWB18bg6mjtHuSuoQiAVjCWqTxXQWfsQ",
  "key38": "ByKfnFu6PThLedfKDpzuzrjtFSSC97ZogckNH95qTxjryaaDQcPQduEUXsPvHJbmcnPdEU9XQJzc4FsV4N2AD2y"
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
