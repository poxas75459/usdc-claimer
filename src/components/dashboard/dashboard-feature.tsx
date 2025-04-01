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
    "3ZJsPG4FmzZA1kmhgGtgTouUUxRiYgs9J6aT2pawWtie3dPrCRfL2EtnGvNRKKwH3p6dMmva3UAedJHjmpBxMfrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZsM6Xn4zkoMyX3W5Vp9NkWh1imk2YopfacpsEWpiENsJspaHNJfARhR7GxxMGxP9VsHAeNZMMCvPrrgN9QrJTcC",
  "key1": "3cBW5SyFYSxe7xnjzDKWTuCZLhjgXasaR49qCV5jy5nNYmbL66XbgVzWsd7rVicBxZaw3kexJdKBvYwvGCCXYAPA",
  "key2": "2xmSWe9bu3jvXDKABrppWCQWcAgpdfAEiSxfpjojxeoggoAnGHTjTqwuB5fxyP7jwHDsytwgfUtBMWh5kyfZRfom",
  "key3": "4Epw8qD88vZ1gaDjrDzaw6SfH7HW1R2Y98g4c3AG2vDXcH4y5KDoaAB5YcD2daQSutY818LV8UMfToRWzCzGkCNm",
  "key4": "2qynQ92u6xVyTYmzvimh2FZFAUL54ySvpJWUmhwCRvGMKn49Mne5i3t7GeiZevixMmTjqphoPcSLX14qRLWBJxr9",
  "key5": "3KyGuvw98pqM7Zao36MtbUJ18UTEiqyzorVL1T2qheGCw8Mxkr4CfddEjpwUq79LPNo3HQc3ndkYbdBivFrQJgjS",
  "key6": "2UZCvpL79krFD1NMtL9exZwmazNJkZttK9XGXvTKVYLYngPU8hSaDrwPTJcURMGtH3JNsr7cb4nYxUfAYKqpTRTz",
  "key7": "3ofMCuzvk9nCY6oiCqaMN6pRJSS9zfXmCp62mEBdajoto4o5oKrMbtLTEgpAfMtWFoR5dj2fuuP1y3QtHQmiGaMu",
  "key8": "GS3x7LffqSdyCkhNeZH9mF3AaRcBVJCHQ8LkmRWFGRnDinxTHHfnzdk1wJNQiQKqsaDcQr1mbtXrDNegVtxZv9y",
  "key9": "28V2Cv7uWeSLYMSr3zDAvu9CTe2A2qMJpJ9SopXn7F53c4d3N9rXGnbvxXYsTCDHrqf1cdsHDCe9ystgDrqwrpMH",
  "key10": "2hhVXyvLVArtkPWsuT3SCjp6SsuHmhBbvNgGp5QotzY2nhBXAVGhfSbQzh4rVkjFTiUBF8Q2iVusVyXCh4vXu4Ap",
  "key11": "5z1q5kkDrcGADVEh1x5i4jXUpjMy1KwAaybB165v6VHinvEjskCgU5njHrzYHFm72JSHFXsLfbqEVwph1Hn4nP4S",
  "key12": "bUPLWBw2aiM2LhDqaioSo9wTEfQ8wdm8UcPWuWunxK1UsPkxV5zND2bUtX2q4hacM6qSqZV1hMXni8zGbQ4dg4d",
  "key13": "2gTpYvpEFaBZp5fHe3zimBRyYjoghZ2i8Gmbfcm75Ekv31wnJJFQMY7JLs4zfNdw4RNgXnWai9bANTue4cJtRk7u",
  "key14": "NbX5r3Sq6Tz9Aza93vf1fvuCBzf6EUkFWMadCtWfdTWkYjrFHDrR3ryU8RMDBFcofvDh9pMjtwNRUZavgvcLH8F",
  "key15": "jTVUaz9PrLSEXcnu1q9iDFxN8hJ3d6ruQgTreHsJHp2inGTGt4pBBvqTVFTX8TPt2jjQEKQXTv916mFGRGftaP2",
  "key16": "4DRzapcY9Fh5zevYimf28WkbqzFUj9Mvaohw47beeXG6Gn3dwfoC48UDNQKobmQuRedwjtv3DsVPbnBJdzAcHmRb",
  "key17": "58uv3anWZHHMjHR24bUAu2EeztKuaqXJAfbE1SaLAttZZ1joKN5siE22BqzwrsLJKVCDdsWN3rLzp9yhT82p4et6",
  "key18": "5f3nUnSm3TLxf4Cxbf2peXhYTt59kukBxSUzmouBt5MSdswuvcm8N4pXgXHr4ZnXUYJVV3dGtVXTMMwJNyHiyByC",
  "key19": "orzJ1ngcaPpHrebvqFmj74D8Bz94urs9sEitGRKZpcdMUvgAsYuscUr8T6nFba5ELMvJ2MNAfqXsDFNR5Ti7xXN",
  "key20": "3GbABumoRMmDdFWU2jzuSZB5yjGfRvAswcXYVd8ioRvw5W3UWRhHwodRpuPqHBYSqrKfxEFHhc2gLK3kw1kwfFSJ",
  "key21": "21tKRYkoetZ8vc6q6awEtHZkYBjYdmxasUABim8B9bPx6LC3XyrMNEBBo5VivfhFZQgDzdX4uUBv5nTPM1Z5YzhG",
  "key22": "5ed66qkMjcr9EHxt67PcP57m3cs6v8ozSx7k1JjWAjeAV7w2gK2LQPLRovZUo8Y2LwiDpmG5qjpVf62hFAVAUwpf",
  "key23": "4amcVAK5ZnrbNjUJohVj6L2uyePwxbU1burVifzCf8BFNfdpsSucXbgBF3it7hckAD1utGqB8bRwPssnk4BehWwN",
  "key24": "2yAwBPPe33aaDNg2Pgbti7bNzHNLVjsy8QUa13eC3FzpDDFq3BiG3nDjBLwZyMbtg4Gi9LoxisZecvuuaCc86Y9L",
  "key25": "2fpHuVDNwLt7VtDtKURn6MjbpPQRGgWZYXi3cZ91MrKqc2bKkSy5D1parCE8HnkGEzXAZczggxWMN8futYspAcG1",
  "key26": "2k1mH4dX7xyibufx91o8QMeRBsbFPydcbDAwPmbm5U9oL58sf5n4BTDF6krku8qfzxVuHW8AdRgdRTMzdutSDk26",
  "key27": "5FaXJrj2vVEc1NgQyWu9MGudxCovGYnJ3L1Fwv5dZoUTu2NCT9swZKUMxx4XJeURFWMCZr78LC2j8Gm9ScZEheRH",
  "key28": "42gqgpFNJAjKTg4FKYM8BM5RCKAKzdQzSpVWN9Gzp5wsWu8PHL96PPmo6aDYJwKogdXqTvWBSBCCkxA7y9B1saMc",
  "key29": "F7H5hGqkCPrSmGncZarRBKZzb4E1sXGXwmdxbmTWV7DYwSKHhiacB6y9fMYqL9Sn6eMFkejyvWituEfEccsbANb",
  "key30": "4UCoBqXtp8kQYPGRvavJEYyMYrELvErGz4r8WuKPfESbRBNdwXiCWw1iZD9yiR7LHYkcYKKeJfXf8fLagfYTLcP4",
  "key31": "4eQmKyYxCxpaBj9jaKjVhV6F7FzCJ7vbcVyYWuWvo8WqxXrrjwthhxDNb94LG5whUEW2q4NW8sj4Me7ixvQ4AHf",
  "key32": "4X9YEuhgkLACniU318q2Qtqdu8oi9jzpC9ckvNdZZczREdF8MRxTSWxuQrc1cTTn9iNPqnLMct1Yi44agKzu1nb3",
  "key33": "2Mgprm9Cq6b3JabWmTwzKv86ZxLhkrqKWnUNt3gdLUdbwfXudWDx6MPkfUsEC9oM5cNa1wh6MvJh4uPT4E63VcC2",
  "key34": "ByR2FLkLWpGm5br5LSjLu6XetjrECB88DyYS4majipfaNDd8eBqNTVyACWitXTJ2PX9cf28oCJvzGBFYEWiCgG8",
  "key35": "2MpYWedyys8W8L5MpXgj8vkZvkW2XzUmHErxjfFfas5VoLT6KzJSfEQw1pToxvpZiax2egSb5FrYgTfuHmuME3qS",
  "key36": "4G4uKzqo4RCvLmoexa1yfBQcoBVEGuiH5TFPNQEcdRnLzWkoSJyLeb6gkF1RRomGkMhbuPa4gTXQT4JWF5ohen3H",
  "key37": "2uMW9CJH6dkKV82ZuHvAHZqmr8rNfsYkCQCUSmg5nTF5mG9GWKktWLrLPhDH7vewvSScSGYWk5v6mdujKrNAvuDm",
  "key38": "4EdDbaVHP2s8cccwUPji7JxSmWgnfQFe8WoHiXEa4Xp8XzSsksaoEqCyWJ8jTadTrqkCXAWrkgjVboVKA5MYiuRV",
  "key39": "3jsfLpZQUK4PovocSkQiVgxFNmaPsSmR9NjVU8Z6rsqDUiEAURrkQDBDgTdYZ9ZhTgD2cim3Lw4fBFbAUMjBuG4S"
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
