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
    "4s9NUDcWiZEJNX3vhsRcTQNfUJVJbppYuT4siSR5e6gkEavpTTZdSUNVjW4NMLQXb8Q3rASTiqv5XaQS89ySunNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2xZ7NKoTf4VKgA8UzAVepgbHszRfEXpLsggRH1YfW9x45UUHNGKMxhx4yegS44hA9HKY1uZNtChXPs5CPKVet7",
  "key1": "5UaCugEpqu6NR3RQ2z1R4Nj4QNSxXL5NdanSuUwVsXvMtGrfgnZVAwYb12xcH5C3KRrUmZc9S6aQMnAo5nx4HdwA",
  "key2": "URBC2NUS8nuwMZTRYwa8oyrnLWfQGsiL4eQDfRj8r5TcpXp6RabZqsZKWBk8HbW2h7hy8A69m1hiEueukh5b6XH",
  "key3": "23RWSqwBmroo2DsZ9HkPyVbVAiX1943pmHm6PPcVNenXXg7yQW53Jfsmb69QQdNxGGzA4KZwecRgPSXDfdnQ9xPq",
  "key4": "3VuLAP3wtM99NXJNFr24BAmCA6J7zVEsXB5xkYeZCQB8SVeJpyy2XvN6gUESFKaiKKNKWw9XLoa2GzJzFqxMXoAR",
  "key5": "3YMeRLHkbnvoFPXMmR348DfzxnSm5tN5zTeq9vNAtqJNrc9NFp7E9finHMFKWrRN54xKdsYnjshMBKDSnA5fEBsH",
  "key6": "4n3BpThamXgfkSMEPDW4CFXUtHAieWMXen7u48yQLHBZrJWqSsBGgV6RnpdRmCZi2pDS42pZDvkaeoso8DtkLZbb",
  "key7": "3K55FNCCXGu9ZAKhNymWC1HDfAGTY7BgT1kgpJW6dMWXs9tQz4Vqy5mdT2cofDFcQFS45cH2ns4ADDY6UKsDDhyE",
  "key8": "3MZHLnL2eJrnSzcGdJ7abUsSms2HtFCiNSousdEjjuFHEJ1rGpcUDsQGeTYoeh6aMEG7jfpsP2DiuoewfB43vYXm",
  "key9": "63BLTncmjBZCK4ePm8PsftSkt2EyfGCWofhfV4tx4DBKiPhWn2JBeDt2iwpyQr8FqifyjFjCo3UhJ4QYVKsnexfd",
  "key10": "7TbVkWQ5RDQd4EoPbGXGGPm4NHjHbagwnhyFzMy6z17PfA9Rt2UyU3ijoBjKH1LhtAnXimku1rE6ysXSmDGtezU",
  "key11": "3wGvTNk3yRhFV6EmNiqncpb8woK1cWuWaSEkQnBNBnK5Bim6Ntbugw5V2heQpyzEhRuR6vfUWTVZSJLTrDjudwRo",
  "key12": "4yj7Zo84Jp9rxt6EbbqRvW3XmpEcM2sW8D2bMGhvzoPn1oKuHsUJMxEYbrJxcvZhV8xF3CzqYKsycxh5tt7TgF4G",
  "key13": "4TN1fpar4H8jNKFTBPZrw3CuNgiYHKHarcsqHXgYPnMfHyngrdAraxGVj6LrPrGSqTwEKmiSbDzrDDRSNUyjuVjE",
  "key14": "28exD1ok4vFzwE8BVUKUaopdu446MienkrodbY7vrbnJ9xCj4GSAxpFMGR8xwWEnij43K1R4wnSjRydtVyYP8EfV",
  "key15": "4mMv58jJDn9c9J112xWFfsdUBhnz47AFyDW5GaVZ4pQC6MiNxLC3YaLtzSTv9hFoTxFWnWHqSjBo3GD6z4ac9VgU",
  "key16": "5rx2ymoXBqsYEwG8nizmELrFqwKi8U6avL3wUdihstPqMwTPTVkzStvygpvjzPXAMUXhGEu9n4fmFSScju17h3uw",
  "key17": "5mpZu2wKshr3Mb2wQQN6szjNGbh91EiK3WvZGE7DocyGC6ZcD98hgCv3db6NmQZ4yYG92Xe7xfKnSiACavdimNVV",
  "key18": "BFbekcyXJRrYDPXJvVG35wYVsLh2TUWFwGAgdLpJ4zjfKcftckj13wh72pCj9WJuSEyZc9AVS2reBCJU5E7qUk8",
  "key19": "4CVxaygKk3XNGdcaNZ4koWLvMNd9qmUKT4QUjYKUAQ7HDfekZwnyw2sUqut7rgHJhBVjFgZjHE8jSJ3DokrovGVo",
  "key20": "yF53q3Wpxw8Rzyag7EqzXRcja4qKZSUT19S6s3n6Cnq9wDfRudo9JdDg74XBtvekUnPvkQhtSUK9MBFkHmBq8EN",
  "key21": "129Qpfp7GRf99do9Djn6c1KHqd87hH3vAHKvAL2t9Mb7P7diwUwBrkNYTZgih8zKDrBT7s7ptuWdNVN96PeR9H8x",
  "key22": "2fefJhtTiyyCUwBhyuZ6TZH8FtDAqkmg7qXCTSxqJxQHSP3P7N1DcdSFBie2Pt1raUMJSDPp3egBE7u89VnZWbA7",
  "key23": "5iug31dAs6VR7TbXaAoCBUjxdbhsNEi7P11U2qCg5J3z5qCTcza5kLDihTftK74K38AcsopA5gxB19taJ7CWMtsZ",
  "key24": "2DwF8TLZ9Mr8xstJrwL6npN53sdZfhWvSFqJQPtqXg3T2kvfgmS9bBDFmiCxciq2X5QxLscSXq3hbwwtcgpNoofB",
  "key25": "285TBMGLfyfht4rXoL7Tc6rJxZpEFi4SYznWSddmczrTQLgRmyCgt1HEN8HJvFbqtYXEpLWxpuhnZAGpCFx7nn1Z",
  "key26": "5MDVyTjSC6HwEbPDwAVqWTaTfitVb5HPXwPrUXfxvVvLfWhA2sx3CZrBfu4VZMRaCAehZSc8ybwb3F7GnfvRAcGk",
  "key27": "TjcPv6aJmvwNphevoDgNxDGWaTXjBo9rhRqpmn8ikRGiLpEbwbczSscf19DutTtbGWogj8JvcG2nJtgmXF79joi",
  "key28": "3Dt7XoFqQDZ1qq3KtfiUSG4ov4zj6U66KreT2det1wKaUtifHM2vFAusoFU6SmYkHvEnN9rRUKjfBnJb6gbpxt3K",
  "key29": "4vHDihpsUEgWresHenPWhmfw1xqHBePBw4YPTjKcgopudecx6DmFXr3g8Vbreh52Ny6NheAXD4rmSmpazJL1qFXu",
  "key30": "45Q3Uq5fv1DShdqBXDgH4uXcynPHbWDZcx3khc5qzehQ7WR9XyVpwZPRiYXPJ2EkHFfPCfpJ7XQSjuTT3Sk1uPas",
  "key31": "542HdoCWN4EtiEmjuoFDp9DkGnnuJuUxyoAue55RokN13YLgBwPARtBqAYx1ERjFudPWvk6jyDwiVW9ekXCXTNjF",
  "key32": "4YAysRFcTMUnBKkURMmAjq2PWGqgVEz9zAZWiScJNuJGK6qC5ZAqWFqEA7jZotNURrS33vkF45je8pHoPgHV9Tri",
  "key33": "3o5j8QNJuz1DN6nQVdenSYx1L66xEuKYcJWh8N4DtgNPyqyQUui5gDBziXNtQ7QpNS9DPXvP2WWvcyfS7GykNwea",
  "key34": "JY8PRYJv18PXR7zQRF9JDbAMr3Ba9sp1gPVEfjKvh8yyu74nedKUMi1acxV16iozd9UqKyBYztTwQMxwSyBhtzG",
  "key35": "2xYpTquGnZnaDnKVyPAaep5W6oFBDomy1bbz1A2ZBx569ChphKqautFcL7qemGSabwMjvfPjcEHUu7hos9EUYxcG",
  "key36": "4TQiaK81ocnNJaRPSxjAft2zmeTC9ePxDjUiHqEznwxYtgGtjJDR9bRAU4xLoDkez1xhGnLgeZwRYDyMposvFxiE",
  "key37": "XhGSKYMqjcGVLyXWSGaWm26s36THP8vfJxyDbCzLGfzUkabQ6pVe4sBNf6DDx2rbSMfccpSPNw61zf1dASHksZi",
  "key38": "65xR6gnZBWaHFQaijbKkNFjFJhjW2LTbBepq3FqMy5p874o1HkS1P1XDUanX9MT5B7ura9JRP3m4u3qMf8UiobZx",
  "key39": "2EhpTd8oiBKfSoCQcQiPfzDuJxz2U9Pzcakxzw92KWA9y1o87KtSVU19YDNp7C7G3VwLFKxF96THo4HfRg2LAJwN",
  "key40": "AqmCYzyayhaWhhckXhgCzWtNzz8Z5Bd87fjQqELg3WY5fLR1VhoZg2Bp149iKoUjWtchd5dr3c3XovSTNCSZvKS",
  "key41": "3NUP6F8mSRix67X8ziYf2tiDb84gZA9cL4kBL5friAo2BRC4yLWCRj9o5LyB3LpE9mBrVkZUBWMs5svvnDL2cKyo",
  "key42": "jWCUFuviCZDi5QbouZsR6nBJBU7yrWTVF17NiVJZgJ5ZK6nuj9vNeHqWqJLVMK5ndkJpMgGVcNFv3YWqxypVjps"
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
