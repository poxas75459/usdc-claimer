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
    "d4wgWnoTVD7DphpnWz3VE3qxz8Dzs7TDEzSTsRp3WLezKNXfZL9Ex5Z6tozUUBAQUu7Wat4RYAqWTbztmsiNPS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311MJEE7QcSdhHCz8Le4FrB3WJfkw96NtrdPxhYzpkWZgR6NMeXXZmr9wtcMAhjuzyoDsZTo7S6JWzUejvbh4jMU",
  "key1": "33w7mQD3Mymy6tnMooB8GF4iJx1ujRMPjQBHuptRkbkYX3mXhWM471hPBLAPBQdwoKwGDpzfrAQyQFGp3Kp7gJe5",
  "key2": "4eEUKELbVbd9b6PWGo1RWxLkMwBtvP8qECzRjZUEVY13H6rU3TJQj2gWeeq6421tDVZNWHFj5KxuLbx8cua7RpqG",
  "key3": "4sJrBPHRttmRKGNmkq96CsYj9gygGrRUfJDM2Qvy8GAbkfK1qHSMXWXvBQjJjktR1LUUYGTqU5RrGXLfK5jN7Huz",
  "key4": "3Xi3Wfw8hN8BCpavdrXNVwJkKPQ3MxFwgFaGtdhbaryWetatZpAaaCHdhbsNVNp1Pfa9CFR544bfLyUcnxDuK3XR",
  "key5": "GdEm73SH61ZVmws7ZAo2T95bdVfpPJEJCvceQHms3zbRXB9mCLsyiz6cdbVDzYBPo8GrwoZHWuKfhDFZAP12cSv",
  "key6": "52arttE6PnjkuKdBXJwNbA7acQHvbqYkqH3QSBJVBJ8TRXNwMyNkDuSGTTaXhjTxFxbhHpW2Ve8S4tDZmHX8FxcE",
  "key7": "2NMqUGu2pwd2hwa1MMb4eEysCdfGNzSyviNQsqZ1ShTeZ7RruNoREGEZjy77fKw68Wk4FnHuptBRqndkvScV6nEs",
  "key8": "2aoRvwZVK6754MocJ5t6gch1FLBhQ2iH9V4XgUZLtYQ924LTTSqtnJCMzjgR9i69pDC8W1UxvTG4cX6YZB44wr7K",
  "key9": "3nFyaCKui5qgdCWa8u5SezutFkpsGeTyKSiU4P9jhGu7EsoFUnh65yY1QUW4BoxGwwBUgb11YB13fQzPq3qa9Dpf",
  "key10": "3EVB1WPF4TxxzQCNX6TT17VYuigNCCCAtxbqBSsZ3oBja1KKRa752Y21c1H2m8DV7sTcE8eDH5Wh76jzcGaKGb6Q",
  "key11": "5pckDx8otw7o7vpsSDRS5V9G4pefh2YgsX1FCDybKi4Lf1AByyYzAVLL847asNSxzCMc7YUsZhQ8npjGPeeFATEg",
  "key12": "1K1QnH1gb1JYeyGMQR1WRBxjBni4NUDFNbdLaJET1xaoiS1LvdfpyWLS531pB12rGw6jRUsmn66YvsfpGYPsbqC",
  "key13": "5VvWfBsVP6wFaSVD12EW7GUX6zhcyJ9NgNPnZPfPb9ftYJgbrSd73H5Kk7PThBveJEPZ9mnQccQfppG7nNmdDigH",
  "key14": "3Z3Lz4ounxY2Wjvd5MdUZfz6pfrWtxmskj1xSUVX7oc3CLTtMkiGZ5pLYX3HdFo72g8uUGzXUV38vWP4YG7xSfSH",
  "key15": "3pbS6ohzpMCVs2gUhGp9G6aPuxQXWyLYpp2BvwsPE2hFJ3zB6kHDGAaY5zCRJx76mE1YPXaUaBZjkMiPTd8o11jK",
  "key16": "5DqDbDeTX5W1JS9pVrHu5rMX5aq5ajdFXw7wKVVBMSqURFwp3U2vSGbiWejabVu62HDJY2XD9pHVcKeL3qhzXoBu",
  "key17": "5ChDh7Wybcz6uTYVFjSaXV735abHpzaoG15iMr2PKTMcR7jaWWDA2ZPwG4WJi1V2183WT6zLFJUbxGpU1LJopCj2",
  "key18": "3ymx28GGq9sV67chcAenhPeyKpkjSu1TgAkNkKbfXxAJQd779pBWzypZoJdVqQ3fiasuYMzqRYwh6rFqFgYPpfxL",
  "key19": "3ZPSRNK8hyFRJQM8vsm3h5yszp2vFfbrNetU6VT9zeZW9GoGhXamoGSoY8CWeB2sFHFJCUofBAdPJKaLVLpEPXEX",
  "key20": "2wgD5dPvXKTjJqh3destufDNMnDaixYkmWnm2XkNBHAeezBbDnSqyM7TncUS9S2WySNPLqWeF7KrRtBvWkBXTmsW",
  "key21": "2pgZJzt1X5HdmMDH1YP1nUHFq5jJyatd4UduxEFJPj38uASyuqoRYzW8dAtRRzzA5ZytQH1Yw7DDtAXqasufs3nq",
  "key22": "3J4ZMLGjazgibfP9jPZdGj4xXPJLPUKSZc5cbEpCuBXunmpzBRtEfdpdBEwzuM62wefHc5SZT9gmbiVUaQWkwnvJ",
  "key23": "4Twr3rXnjf2VeaGpzuhZFTNaABtGk1o8kEbVT2v8DfkjYehtmgSWdzfie54r28DjHcVYzeNLx2jtKAhNR2TE7or7",
  "key24": "3Vpt4CRyRxCsdybE7KmBoWPtEK1xAR38LZZoFdLGNMw4DpWxwzhkPtjzFp7ziiBLCRBXiaFCw85TtLUqVq38tr6W",
  "key25": "3DKi41fk1brAtyHbv67YCd6uUhRZNtkmYAihCh9iqTw2AjYLaXsAn172eSnF4YBSJHCyCGpTjXvhMQTxc1guFEe3",
  "key26": "32pLTzsirb3gSsWYF78m7WqXz8aWMN3PkvdJoPoCjfdhVWKr2qYfNKUBLGBXz12HX7Do5yAwPLiMUc9ZsHETpXoa",
  "key27": "3agbRSpEFSei7aXesSWbXJkBtCbqJLNotf5xtaNMNTT2t5LggWA8dsuaoLHkCfqtRsKL9XJ1g6nHAhADT1fC7cue",
  "key28": "5W2JSmRGwNMdcdFi7EQSBxdq2NpF8o2vqMAkdz8r9whdzwCNeGCjxLsdsGxnirrAWyAVxJv3BFmykUXEqNnnKmAR",
  "key29": "n1g9JWymph8Wkn3GPZHFG27kJ1xP8yzLSjLhmhAqvLSGSnTnYhbhmQXvC3TihWoYJvj6SQYvg3fU8NyRYeCbgui",
  "key30": "4Zg4qN4wCyaBAEMZSVkURx3e3uQrWAx4djBPPmTieGUH8iNUssodd8LJrdR3zAgcMozJSeC8RsHn3TQXeMU6x2eu",
  "key31": "rczCDK3wrHuWVkncfkcdSHSgcZ5N743p5oxL4xQPdQkapEg6B8BcTLmPBCSb4KLiEmEf1VLTjbqv5MT6ADhNrWQ",
  "key32": "2weuh3mmWckyExsCY2R1i7Km6i8QW1hVw4eJsjE36tEdVbT8qmUhXXVsuFSMk76U7d6FrachR19ordM4wsjDGBVU",
  "key33": "3QiQRFSubGtymDtFQD3KKqew251vqNw9q1SVKrJG6MGb8AQG6NGKox2jECZj2s1qvYMJ85A5X58f9FTVNCDZZX2P",
  "key34": "2BJvkuxeQaEnBekFN2TuX4vEGj1crugAMPZHddE8SrYa4jaB5o3tYaj8jcNnM7FjPBRbgZTchZU3MXDLMsUR41VL",
  "key35": "b65eiFqwLcjWkXZagiHiV7xH7v5NsKt7vq362gRHezzfHLvQUcM2yDJGzBa3peSpEUftWrrv8bJHZGrco28uqDX",
  "key36": "3LdKBo5cZaoscTncf2ZQyAY6uj7XFzfUSmCvrNQsq6SQk5u5cdSiC6GhMd44xTMK5MRpFx7nhjSWtH4wQYSSt1zj",
  "key37": "32QZmVLR9UCGVqCH8T1bQXZdgj6Es8H8rWjn7atj1evhGcJSVFEUjuK8XpN7u7KoPq9LetaKmYgjByVoz4r572aJ",
  "key38": "5JEts7ofLduviRsdJvpVUtxYViNx1QRmoxLHfTWqWyYZgFe71s4akqDA8ETDKgSgeLNNQcqo9pdJ9wPce2d86QXy",
  "key39": "3pEXTMuSwWGvhKEYRGUGoeuKNrZWu6v4kfyPPBXEeX9vSWT4dDgLnusNcUVqYrE7kynr2Ehvda8HnPWvo8fZchvF",
  "key40": "MSC6XaUFNiobFPHkS33vfFxiRq2dXuKSS3YpzWo2JEXyKyX7sSRE3CWsvfakYnpohgbGjcRYqpPCdwTTb7uyL16",
  "key41": "4mDVHcjR7Dfk2bSGRsR8ZN2ZjvzGPBdiAc7oprMyS7wJt1deAHLr3p9aFZ6u6wCMqmxQD1CdNqm1aDjc6CM13CFR",
  "key42": "3pyJRgcErwU2mhpSXiFZNdryAQV3N21riJ1kL4vqTYKQk1fq5Y1czztn6KUKSRpTtzmVyyxqF94cdYF8V2mgj16s"
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
