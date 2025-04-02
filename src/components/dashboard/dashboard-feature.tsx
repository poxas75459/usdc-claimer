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
    "5xWQ9Jvi7KMFAwtcn2YrH6gGHgfL11zcZMjAigFQiCYh5ywYJQLywCmVGciFvF8J5tVVxHUajQfXZyJgRaHDERS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JneuHAEC8ctna9vwK53wRbAZzSLAeSCAmcsWvjEurbZuyr3mibPBzfKGQNAhtYQNqL7PSgAMhCJUCXb5A8cvqgb",
  "key1": "29mCNGMHiKFMofA5mvdVnFATzmiK6bNrpvCp4Lk5w2scjk2SUfXpKnX7CYSo7FbHRGjoGxsTrY9dcWG5QTEuVfBF",
  "key2": "3TFw7y2MwGbFeKLyGv1XJWuRkviXRABKRwRn5zvoVuc6nnXaqmF2nyAFdjfqPpC9DLDTpjMWmtp2Hg1sdincEQvQ",
  "key3": "5q2uMKRzf2D1kfLYNz7tyxnyy66fG98QZMvhScgHNHGUFb4bakpYboe6pA93ZDckfmLuaY9FoUvZqWd1VBrVGauS",
  "key4": "UJP6zPspKbCejz4NHG19pEohwcmqiS8PjFfoXsGUNuiy2GHgY7aSQKC2cUJxHStNifAh4bem4cNZpXM8BmfniJo",
  "key5": "59WdUknVCzKS6Ufwvvi5JyDn5bWh3TwRf6rDpDQxag6fhahiqj5FpWTT2JXtMfZkHfVEDhFbNWYreC5LzZ2Mg3LV",
  "key6": "5DXyccGTX7KQHo6zWAfo2jERMYBtG9fpBhrbKyToWayD3s6zvp1QbiSSBWu5wfyZYbN2VwM2u1dRtr77CFVwZGeB",
  "key7": "4Zdjz5Efu7Ea2tRvve9414egRcXWqjf3YZ2S9zEcuEdG93rLYgSvf81TgdhSP5pmuvzpFvpUomqMFtz8ZYrwys3L",
  "key8": "5S8DhjTvYrQJYtrDY8pTBtdg2AhuzSyDa6PJpGTHKpwvzKvNFrzKVxTaA24xBDpdCgzGGipysLMmhABe8f1WpHc5",
  "key9": "3X2d1NDxudeW7JhjYqzAp1i8yQhcMmtJ7cQPhuUbF3hPe4tCVvx5CiVa793aKUjpsnudfufHPqDiVok3Xkx8AFLs",
  "key10": "peBrfzRQBQk9VmtW6P5NbzxkL1qezngPeUqwu6uZEnCmvUFZmuD5PP95wfL3pi2hTBihvr1eYCsmHnDNx9tiEND",
  "key11": "3YB4beVuWuXXk2fnsvxZHPWNebHetWXW9Hs7yCxAgVSiAD6abqmxE4hKT37fuYpKvzmcfGuxp9SYPAdCLZDWWgqY",
  "key12": "4EsJcU3hgegFZdXutwz5hGPa749kCj9GGfSgAG1av7wGbQnbS714WBvc6qhfJrKxNg61kxz8GBrH5AmQXtTL2bHv",
  "key13": "3ox2mqiU6bEc87KF6vD6Wbyr5J2Dnn9Y1D6uW1iPHSrgkmNc26TTkJXqszqeLiHQdv8FmpfmDzcPM9sR1oSEpXy4",
  "key14": "57euiuckHbduK6qaRwz3mJoejXTTWC8SqW3Efz1x5uGoxrXcrX9rhw6CYReaos8Pf2yYfcKTxmoREyiPGMiZfF72",
  "key15": "51VtdPzuLcdWt6FZUP1GguCbNQ57GjTDc6bYocLuJ1SZV3ogK8tiCHWZCMFKwnCuozttBnpwQSMNGj6VVjyScYQj",
  "key16": "3M4QSvcL8UbkPZgZ5Jnou5ACzRy1U8X2XXJpogLm5MR7vwtpgswKNkGNUtYGQx7KDh44Pp9FMHiDA9jdqeFGbNDB",
  "key17": "3xdyKBsAUocqLhgD83LV6jE44q1Qkt3Q6hGC8dyyRY66bKFdh3vy1g1SD1zyUgxagX8rekMmPefNgknSVF8pMnr3",
  "key18": "vaXNxcER89wiYGduGt3RS6UkyCiEcV5TJ5o43ao9Q8a7dv57d7LnF5dPVPUBm1HRbCZ51oeBoerabTcFYtCHY6Y",
  "key19": "8nFAccZaFRwCanecVZxa73113Xv6NMmaDkqjQ84tzYTAqBUDh15VjJF9FZhsiqYoKfVjMGyLP5WRJmsvhydxSrs",
  "key20": "2PJr8mw3MqjtfDjXkagUwmsVCE6nNzJ4pS1fbQGw479eAd1tqNLRi72BEg1Q6kAnZtmUz6CvyQe4owCQ4AUHxmD",
  "key21": "27ne9H6wecAYW3meyWEVieZa9oZXhNZo2iu8ChJEHCGKiUjLj3nFsd6NEPznTLV3vJRNHRgZngZDerT3uuWL74Zo",
  "key22": "5crfMWrDxzyzUwryrWqua1pkd1a4mFGVNNisbPmEcZqkTUzc3SAu3oEnbe7owm1ZxPRPeQdxyLNh7tqYcfKRa72u",
  "key23": "5kfUUPFAYteDB8e53zDsoyyZPNrHunje3YPWb6JgWqDoSQVcGS5eLGDqHxGA7aWBo15tuWHmWWQrH2aXnKDiAa2f",
  "key24": "5Xi3ReaK9wQYmBnUeDK2BStArDyF4FSXkchceVwDZ2H9ohjkGPqCsxZaVaQtqtq78XWknE6NB3nyDu3jqDiY2Dbk",
  "key25": "Xg16ByvT32aGiYKk3V5BhDfAsngp5pub1Mh19SDS4abrw17imgJ17Xt1YHuDVKoExBFng8asLV5BWE2KeKgpcMo",
  "key26": "37wKiNUvLkV6hPw71cfQTFXYJwiSKhWbwjqiwLnm7wieNaJNcyYthaAU8PwgAoxGyJxPLkRE3Hs2zxz5Wkxdn6pq",
  "key27": "4FEBJUUqrcrppQrepShufPVN6VzT4N9ZxLfG4stN8XudBuitCcWPmTvXjExihXRPQkFYYkBhLx8sKzLkfLVDfjqX",
  "key28": "364wHgizezQcUHxzYVpWx1e9MQ4kUG6ZqZ4hUhvvQVjsj1eGyKNg66ddYXSHJjAzfTQBHC3VXqXUWGYJTLoWjYUb",
  "key29": "5b3MSayZEfaRCdAd37LuHG24e8w3K1m1xJcZeZoyVMrvcyoQyLyvwN6eNjV6Us91FHEfevtSpNmPGbjXFUfQYnDY",
  "key30": "N1cuJgp9PYgJeeHtQnjM8RVkSmoqKCVHFs6ZGu2bmbPhhGwfi6qUDAVzCaMov9GPy2nP74iwkGXBodYcN2DwKjU",
  "key31": "2CZzvjAacvuAcNfNNt3fxU5ov4oPt8MkKEyMmRo4n7nhRJN8DhWna3WkbH9RJSs92gbjp7ZK91Mgyxjnria2eAmF",
  "key32": "3Tk1R6SEc7omeFjJAjB4wzCY9jBZuzJBYhMHbX5UDwCXPb3Dzx39rn8cbvt27mjyCd5Dve54zRT61r6fXxHmnScm",
  "key33": "Z4JvqdUW5BRsQrEuVRAyrenkM1wXfT9DLbxzdwFjyn12WHJ3EHD53AdVzgpoPLEsad4aQ1VwRbaKCDvS4UxtAwe",
  "key34": "3nNiogvcCjPR6XxukQdPxFb34dL4bGFxCzsGkdXQe9p5mMSceaEjUVHGqPz9UeemmbVAbHKpkdGFm9sT2SRxpL4t",
  "key35": "EPAYiaNvrWnsbqJpSitrS48nqW2i9sV78LJBMRAzDpetcxrspaKDo4sSW6fq93EjochroyZS8BZDGNLgmgR3G3s",
  "key36": "24bHCx21RLaAxH9grvvj4g4DCnGqeX33bcbteWz1PWYwFbtN72uRWkswqfM7j2eRyHGKadzNGNMhYfNTyY9vfDxh",
  "key37": "4j8LSfSYKM8AuQJdCzzYzaGJvMdBPFzid6LsV5WzACshVR9AMtg2kBHJBakvFJaCh3FAnKFAVekLcY6e74fSh3yS",
  "key38": "2f5QVPu4Y3YbPi3GDdV9qFLyjT8GSEfSvdpeX247qLWXj91b592SrMpqkz2ABLd9nEt6wdz3fJ5JWSbc8WpGQCwV",
  "key39": "3T4UNByFLX3q8Jite3uAW3DboWPVKjLAAWDizgPQ82zUKtcGzqw4W4WCGi1vgyhfipX5AXr3AWF3m4GrftxmqGVa",
  "key40": "2ziYfkRjvdW92QCeZGNAAcUsnDAhs666urVD5t94ayAaJPJPWcfR1fWi3RARNgNsyjPSFsB1Mj1oF3gphuk8zWsR",
  "key41": "3S79Umtd7pupfc17UQvUAAzrJgWiwbvKnUvELTDvRChR7nACdewSh28JCs27YZabxg6KmYaaZecXbB4hTqoTbZgJ",
  "key42": "HZrnRfH7psYRSknH2ZhmBt9Ah3qK3ndLU1ah8qJ5EbtFvURmxk7BR92yLMievJVAFJBdq9aVw65J1wBJSP2CMr4",
  "key43": "4hVwFzBKVPNMxkaUNnSjTMq8nTsfzxhPTsrkUzH18P5j75M7gMUABWT5ag8RLux7sRPdMHMMbXK2t5qYJ8GET4QB",
  "key44": "mqxJBGphEFLaPn3qnGwbN7itNbnLtYF3noksdmekCkZRbHNpaiEk1rUVD87w8eN83zg2oDv8fZv2pEd2cMq1tSA",
  "key45": "5HUvRaTTvTv4QR3CjpXP118nosBk8S7YZ1UMzNL5qYv3TLtWxH2TvL6kHqs1LU9GTSEyGac369jEabRDt3Bd3QF5"
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
