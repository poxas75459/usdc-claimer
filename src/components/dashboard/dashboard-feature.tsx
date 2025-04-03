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
    "5QW8vxXACbzHfDRQEvMKpStzyDg72Yo7WNueL6BXuycvzeiRJCastCSjAdj2muSAtQLE7oGfRhD7uDZZjkfM1K2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "384MyoCVXdFGJ7m7euMFiGVKoZXTF4N3BJdbhEcGhFbtjyy7N1zB5dyitQjo53xcBfY8jqXjag1A14KQwCybUD1K",
  "key1": "4G3QfuEqJf1wf8wGvUh6KvsixEMAhadfbpcTy7TN48DMT112TC5SdkU6QJrFNQRxKjGiFWWiScYujfsap1tMY9WC",
  "key2": "57pNzvCehjT5QZK5Vqf8ruLLuf74NAfJcVssbvb6NQBJirizE4ZSorhLBr4fx1eewBcSBNnUJYEm8cZ4uiSrpbpC",
  "key3": "4B4tXSb3YUT7Ugvi5Z22CZzrdp5TJzsdvkyLPgL9LyQCrM2cDSZwzDNU4nKn9ncnCYEXBqJioJ4CrVCG9AMrS5zG",
  "key4": "SjEReonWweidjvqLCwndzKgaikXBAaPZg1p3TH32neyxme4kLZFxh7qoTDdFp8H7zZirDZrhNCnvYhsYjizk3Gs",
  "key5": "uH6qQ6Dvug5619TAd9hj8UXKxmczsD2s4YGSCWz7fzCbQbYZ6FaqwNya6QVBZE1hqNfEX1ioHh6mCBWg1C78zLh",
  "key6": "5SJkppeRvAy4dX3dAadpmY8j3c3pzKi3qZc8SqufuXELqyAc1csZaYajWCuCyd59AWJNM4AHRvRtpdq87WpWA8Xh",
  "key7": "2JrwA4XDtqKd1DcJi8zRaJ6E4oLoRyyY6ge9gH3Cghk2v8D32hqUwvv2PiapVusrK41Fkmh7GBpzSoiiZFKBfzDK",
  "key8": "AsVNYkKzMYRjekaRZNd7ffubUvNeCcKmBzAEg5vXCtTVqWenW4g8MZQS5tqaUD8Tjx9rsL2regV7wr5dfD5vdLG",
  "key9": "31eoRWpEnKEtG4TngPxkmitbTH7x8vuQNJtpR7woijPpCGwBzE4DrMLWNFuVoJgEfBHXu9prBn7FNNKdcBYjEdk2",
  "key10": "4iLGTSoQt3jWjSjwH6kkLZ2eXi8TZDEucFvBNKskJuu5gny4k1EUKZGrdZiuhKvooYBqdsuCLmgukikVoyXw6XFG",
  "key11": "5ojRYqdiH5zwci6c86LfcVkF2YfkbLLPKY1J1t3AiqpEUS7ZVjtFph9TfavfnjsQGL35beMDWsY9eZmKTQtqa3zC",
  "key12": "53E4eSiSYEYRNLDmzpkWb5jaXUSVXFiJAWF1h5eSHEX8g7GN4RghbyW32WtBdHreYZPhZbuvggTaX5SSMSYZpPv1",
  "key13": "39yCfZLzTF9aD7Nfqk16xn9gLTidYXPe9tRcnqrCfLSAWFAEeL9mBarNQ9syu5nnwVfktnbytvBDJqaY2svLaVEf",
  "key14": "RmhaRGU45arDe9kGTWQuNyrzJkGRqQ4aFhaXtxSFYTXWygk2LdeT1wUnaJxKNGdCuVE2hwmvyphqoJp255dPQ9N",
  "key15": "3k4zzmreJoTbZW5gW8VY4fykKqYqdJFZa8tKULuiS6BCF8NENbE4FqALFrpzEATRXwk69qEz4PDMzfV7yBZfM2q4",
  "key16": "2fhxPJJCfhuPqQ3NsGRyQwSr1Xu2ALaMqiUVepPYsN56j1vUDNtjPntCd7gmGfUpNEgNSXaW3ngAWmw5kyY9n7kR",
  "key17": "2nG5qCyYrqpc5zJ6vjKE63N2J5Qb3iwEHj4TDTeFUwiDU29wCVk1DVBPT93oXNdwh3RT5pDe9si8BqaQH9BLBhFz",
  "key18": "4UVQMvWC42mm3q5zgTR7tEx7L5Z1TBQMbKrjYEjA2KAzNd3K1qGbfT8hksxui7H3YbkEE6zcnSQEcQbeGZwFwLsS",
  "key19": "3kXpJmHt5tcvM76CkuyFhZgtHkyfcVmnuaVyQXN7oLktwpQnpjWswo42ZvJzgiHYF9JNDpM6iuwDa2EMNH93Pyvj",
  "key20": "CyaK62u5LsfNLNJtjdN17zs9mK6C4aTfDswZnFdW6dDrL2ZZaZDRZCqVVk3tgPbpp5hLtRgkrXQ29NH9KgdzfLw",
  "key21": "66ULHmj5ScSbT4BB8g3Mx7UqYKciScHw6mmfvsff3swmSStBGUvSvg3KBbWpUsjaGXMvkjHkZowkFQJGPmmWY2Ss",
  "key22": "4WTTrgPcwF8T4bMe2ejXo1HJrByg4G4kZLgMHaercdgC85tNG4kYomXivwCakebAisjm3uU6FcR8PJHMbqNNWeQ1",
  "key23": "2QsrkCXP3BBUpwEyrhKzzEDjXWHXEnuS5uKAxet5xFrgwN9KMEzNRNynwUE1zBbRBAXeNZNMF98ksMtXN9HtAbXt",
  "key24": "5jN8Gb9hPPVpQBhSE28DVTuE1eXtphD9Vn1zJPsDhjmSUMkJisde8sRibPQCDytzXJXpaidKDiJhhkTUnc2mG9mq",
  "key25": "2Sgv4ZMmHCR7qX7yw1DF7Cm9NhUe34gmFt1MeWUk4mrLbozbU6c1zkK6B6movDWEXHMRvMxQzsrzzCGLs8MyRgmH",
  "key26": "3W58FEGQjFZXWRMqvw94iYmC3wb8xHRC1dx9GsWwKUSgCzJCTzgJXWnaXUwan9KbhyXPChLYXscHCfi9maU3terf",
  "key27": "2JmEwMu8LVbg8uzUrhL35EUJfyu8qmpkBXCdvCDPtR5W4qeePtefT4BqHq7GeK2VDx9ayvk6Fshow5n8Hx9U7EK1",
  "key28": "36odnwHpmr6HUo3Pi96tqEynDkbaqwjeqwk6iWjHerMtpdihA2iyLKhwQJznRWdvX5CJhQj3SUDtUA11T32pSGhJ",
  "key29": "5BE71ZbxDucgHiCCXb5CoVbJyogYGX2vRvmVvR1PHW4DZZqZgt39PcofnqWboY7ZxcLGxKRxEEBru7dmMinREbNZ",
  "key30": "4DL1PTUV7xBiDfoFytXMaLpBC9XLHvtpTwzoXApVLntxnCKc1q2AcPoJTYmjkSRL7X54btiw4JVcsgvUfh2ydnhS",
  "key31": "VeS2UL1szgBhRPzNmuH3rM8htdLnZErfapB4d6hoV6YUiCioe8Na4FMLbFLgpqxaFVq8FM2iTLvKC2GTknmgjPK",
  "key32": "hcVP7vPfY4vPdTvkDDYShQRssrgoWHA6eDUBeVG6p5BkUsKZDxYQCCQkT8DtcrvuQK7A5MxnM97stuULRYuRdMR",
  "key33": "28CFj71nQGj6Pbc16wVHetoSK9bidHxTLq67VPrQRnkqRLL38s1EhbyPxudV4s9DKkzPYDhBZTnzyByYze8PeV3J",
  "key34": "2oVi9ahwnb2GPu9HeaoMegj48JPJiCuf4QZyjE2N2V3GXrxtvJogB1aiXU5uGkykNUJBpuVNnc8NrvtEUBEBFoFW",
  "key35": "4oYfdFfAzWqSRBTGVZBWbbwyY4mMuhxveruXbf1pcCSMdYjvy2WejNwAYkeV3uAQtZGKhkB2LDzbGorL62pzv77S",
  "key36": "xgmnxX6QbQFrKvQbCrY2CpkAywPiAm49R155EqvkNZJPj2kP9bAevXdXCGiExPwtJTRu6W6PG7Mwfc563bQTqCU",
  "key37": "22kWHcTGGTjGzCyj5wh6Bjep9QACnkwpb7UsymRc6GTMBzxN3JqLYjKSMdd5J5DqrrVXxfpJPmSzfXqk5wrAubqD",
  "key38": "3pLfrit647Rb8212rtgcEzj756rEJn8t1jsz1EvjDvDiE4xgHpDErjShbgDsijPbnESJUL1hrdNm9MELebjdwMx1",
  "key39": "5yTcAzb7Wzw23hggMYPb7WAtu4EJ6oB5NZvcoJdfGYuDWvPEDERnW3CwBj1xW7mkn8JcwGu6eAd24wWCNLq2EmUr",
  "key40": "TqMofSyc896Kg8674KfYEGgHeVEdTTF8LMWs8Y9gFWQMnbZdP5dVrFvg7pkEheeUiHWbchApLuKiPnMmrgJkMa9",
  "key41": "5r4UUqcTb8n2VBNcmu4bXsJyQnLZjwftCNBmweoLPePynrP5eAarFN6o4s3KF2yNmV1wR74tiN34pL6rRHVA8EiS",
  "key42": "5c1nPiGzzH8YmbAUr2ZycNCKbauyh5vRcA2y2eXUgjpKwMaiSZHxtN1kDjE6J1agwrSdaLyetAHUdDEaCNB3cb4m",
  "key43": "44hjMpVJTVEike59B2MMP9AgsN9gsvfZC9ubBYV1HuU4GVrMpcTMNYUD7QokA1ofFTQ1cW8p22ZoN3ivKYuPVK3q",
  "key44": "2YLtMr5epQuMnJhGDRdhfUZvJa6xUaEccTZT3GbisZRzzP5ZuKrY6tsj6xAK6JmfVg4BryveatXsVG1dopoMLnja",
  "key45": "2jc3Wv5JNRhtgikjv7oJTjwXxHqHMypqgD3rcM2rkH4TqBE79Y9NELu485P3DJRqvqugHDWNkHFD8wj7Au3EXkJu",
  "key46": "KGgt6fP2vBHZTeCyboUQztWHFhEmSu3QATbfEDMpb9VxMMUTL6iaWFpX2oUAugXrqrQWX9N2NS82vKs7z8zNoU9",
  "key47": "48DJHoyKt5etZWCXap9EoCH97eLaJLyFXYgwdsDMBtC9mQp6D9jTD14cbQwtMytjvqb36NhmEPFi3sMTbLQMPppv"
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
