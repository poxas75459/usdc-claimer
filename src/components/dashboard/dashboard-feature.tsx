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
    "2MVyqQc9toZYiJChdWhyYtBWpbTRZ7ttinJutm23zffjn4BZNjjv8EXwKLDmGVpvZQeV8ZAfEDYhf3wX46epTdKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mm9sgjyniv1UGh6oAUUfcgRrq785SB87hqjXjwhD7LfLxv7Y2tXVzDxKTqCLerToaoPF8EniSxEZxku1qoBp8BW",
  "key1": "5WFeLVy1ms8uaEjQ3i9KyCqGx3UzTAuKj9ZcYVhLsbK4SMpnWc27c4BWkFnjbUjZ64XUmiPQ4sn53McEE4NokHqR",
  "key2": "2XxXnaqcdjh3HRtnQA2J2xaNRD6AD6uDQkm3J6fJ7Z1JAHYkQeZuawJjHsadGAiaS2GJ6jrr8KQhcVZaJdcbsoHy",
  "key3": "3EzE1NZZWXMrxCZ3pPP7gRZud2mXiLAhwadhZYXLByetSEfmocai7kU1Po8RqystpUM3SXRXbuPEySZKNZhby6ty",
  "key4": "5aB3XHQDyAR7hBzSDEKK7uDGvTegZFxs6kunrrHbs9xWkC6FXo7jFCGoaFHbaMyLsgJ4oyjt79vrbryh1PW9917t",
  "key5": "5k9cVsBYgcJ7iQZTArsNez2wLqmTomS5EddhDT9yVLYwEAFn2cAcGH7jek5QLePjSUVF8dLi7yc6drTss9V8xRQB",
  "key6": "4PquYGGbuZkT8ZfirY6NrCHE6hnRG6jNYvoGty985m5bPAZv1hnXe5gDVjDemDAYj973znHDbVsh8fcLWe1rKPXZ",
  "key7": "5WLxp1jxJNZCR7hWC8B7SpTScF7Mdbe3rHw49u5JZXYAWsr5DkygTKhPU7k78Q9u2dZ7FTxMGutBp723LHZYpNW8",
  "key8": "CaAHuLajHh5UmFyvjmvRQRjWbBKhG1PaGv5YuVgDpyVPkPoTiyHjMgYTRrzKGDYcg19k16Mi7PYeDb9UwHYyzxN",
  "key9": "5MU7db5ruVv3fUrxbXn7D1uUnYysErsnc93nRtgjVAb8LMmVTUEZw9xo84YR5AB6i2Dm7NAsu7pk41BSE1aa3SU3",
  "key10": "4mxFMbgGfcKHFE8qo5VfBJVBehAgyA9foTVBM22nfKAz1jiaMv5jURKvN2LTDC9tM8QZJvzyegBLstP4QtyhgNq7",
  "key11": "4DvVbWmDF2FMWZ4yC7xtt94J6JXkaRFo3FB91VxMwzzmbTC5ZY7yFVjB5jdJfSgYUgfD8H5fvUg9Ung7UDCTc8CS",
  "key12": "5yyhdv6jsGcxSgCNMYjBy7vxgpnYR3RDZFPWTe1aVkdRNFj14FEze8HE1oR1K4tmMW6uDXjjkTN2CaNyVSUtLcuY",
  "key13": "54dPw5DpF539ZtybtBE9wQ6EVMqmnGDzzUhWH1F4PYbK2kmxXhb1LMaN7Ffkh3SrV6CVRQVPqHFB5H5qaSzgEAA6",
  "key14": "57eJy6HX5iLLjCCjHdvDai746QLGz8pcKLUk9kaLgXyCuP53DuvLHsdQwSYCdYUoZRBkk9ujyWmqPkJnZ1JjwCRK",
  "key15": "3AuGTXVuTQu6fjBWu3wLeb9jf1A9WUiSvnNF2WmpqR6HtNyW9o8HNivUrbdL6XfvjphwCMTz4FBcSz4E4QTwaCug",
  "key16": "55unXPenJRHQpygC9PjBphJJsMgMWn32tHxz7NozVKoMFE2yGTwLQkA21Rfz6LpHWAArkBfP8KtzttNEpB92aaRS",
  "key17": "3oYpXb83YZ5NNeUT5zBGwsgzx5VdfVfnDa7Sgzd5fQeM6z98NtgBGG1AtxQFCtW8gQFtWAcX2fR4BsBForULbD6k",
  "key18": "3XadMerU93k883w2DDsHvgxU9TDQMpdBQweRcbfiXivtR9C9ELasjWjP2WJM7rnSrtyBZWZWmY5YX1rN9SdgvF7e",
  "key19": "39cLZTNuS1BP1WGpok4DjjNWrTVfciffRLXZ425qbhe514NQqLC2H3MGoWU8hYBbLhcqqmxNj2DG8NddarEYZjhx",
  "key20": "2fpMfbpDmJFJT6mBf5FJhoYMeFWyE8uoZLLJnqC5NXGUkoVGP2dZnwx9SHErBhz5FrV2QDtTekQ96j6UMoNPYZxx",
  "key21": "m2jaEaQ4vHQZcMntCyASwVa9iW8FbStyvQRVktsuCMWtLARyjMotp7UHKev1teJHgF2NA5gAwLdtvkyBeDtkanG",
  "key22": "4ZgTbhut3dgifhNxXS6dqXtZZqUyzCCiWwaE8SZcUsaAqfaBtAFMvQKgG5cBpighRwNYceCAXgfDS3zzyYyTbtYe",
  "key23": "22Zp4pMCn34sYkjPrHVgFYY725LkmBAPaFtSP1PBCUDcdXdARdU5tRF1UJ82jvB8yqWx7xDcAZQTuqLxKRHXtgT3",
  "key24": "5He9sB7wijLEQafrPLNBq4V9wozgSGgcuYrdwMdbYcDCGQVvhuY3iUe3Bito6nvZg3v2bRqD6DgKTQogs827NSfo",
  "key25": "2mVigXDMHvL8GgSC9PV3J5zuMTfNmBdaxLWdKHY2KKxnis8xSKbrLdHZTy7bFQowAMrDHRBgV82DNyswj5YmpPTh",
  "key26": "4qC3LH9oVnm3noMoHvchuSsuLTCuBwmZ2sAKQr1b4KVTYenV6NXZ3VJfzvuPatMXoAypxVL11t54oxY4UHBQFi1X",
  "key27": "4AxyR9xz1ANhExBBBeXoJhscfLL8tZ56XZo3MtQFTLML6tch5tkNnXGcj7zCsf1J7PW6tDjjMSZZSLZa9aWuvPj1",
  "key28": "5gmebkEH7CohWqMGpMbhSnQrz9f2DkcXip22Wcsde9vkBLFKZRXuoh545qdybDVK787CkrhYK98nL6JZdMYGB5xj",
  "key29": "4AM3YmuepAMbVGmVgJf3HRkC2GdJ2QNJATgK1q3ozQEy1mxuqR4DwL38vR8VsegLUjc1DrpFMsFVpL2BNWLQKmbw",
  "key30": "3VVvvADjsYCmg4eD9GWPG7Unz5TLd9jTw6pCBkm5BEcQwFU18Vq4WnysK5aB7Q5kjEhVQtGcPJeENzXHFCwuteYk",
  "key31": "4spWA7zXyG8zHFeLWH28XBbwqmit4EQBYGhZLkLxZ1qZwaTeF35ex5RLvFSLiGhbFTgD65YSg3bkHTHQXqhMKS8Y",
  "key32": "5AV7nLn3qpwFnoR2WegxBsbJofQx87RQnqkrWQxz5jsMN4JCoik6GtU7ZAPgsHKJLumo68p3uhvTbZpqryDgZUTM",
  "key33": "52svqSNdocbjf1ji88WPMwPQfz5Q2GhJvaDSEZhPdnforQxdRjsQCacNR8jbJ8Wx5pcWb24qdMcKNMSdvrfEiv18",
  "key34": "BnCcgbzXJ7RhoZBZmgbgWewxzW9XDtswb5C3MWNu2Jw7Z27A95R3KmXopy1eM7ykLfMxWjrnsWAdbXVH2y5LLth",
  "key35": "3QG8ZNidtuqLLgNqd9ArrP5X2urKJXc8ycrLhFXa4MtTAxSQ7ouAkLVsGgPYGpbXW8hrpaBfp5CEDsqLgsZWJPga",
  "key36": "32M38dFqsxtESDZQqvku6FVEBzHgc58S7r1NSCQFzhMg4WUVwzzn7sBHcWxhRygcvpH3oMzZVL6LHYHmFCg6sAFk",
  "key37": "3Q1fQwg38vTRzRfXhujavTAUU996Zqz8KdMjSw4UCFqufuhBgnD2MP9NZUJx6bJe3fYR2Uw1av8oxgiYv14FnXA5",
  "key38": "5u3d8QTDnm7zXeuRBcQ1dMGrYNqzMzeCHzDd6TdTjVvj8MH1tx4C7dczDPZpGokJZSPeCxBVDZg7Kpa9bHFSavWo",
  "key39": "2QJu6tL7NVJBt8k2T9FJSEh6tNRRxnf8j7TeqZjBwJF5DiJ5fBxfQFWmjmDmJ86kBzxufd5wc85xLaroLVb24Lf9",
  "key40": "5bPYVACehKCRkRmqnuwVUPkxmmeceedLKwAsGZ2ijoJSXT2LoUyRYv6Rmjjx3zQr9XA8zopVYwQbFXcBXkjFYm38",
  "key41": "4bcAC55TVongtNs2u1XjBsbuVrM5Hf8Xx6NZM5Nz52zdWipKWsBmU5apnD5uyKLrjCJvBvLymZCzmhCSqwQ7bMAX",
  "key42": "5bCrREbjzP8X5aocK6GnCJHdcQJ2TygrEqQnwVFi2LWdGsfHJkYBS9muNVA875qZt6fwYyNBujvbhxU46Cxjf6xB",
  "key43": "5EuRYoBNVbpJWCfJXDBVRkXvN9uxk4XBfDTDFZhZzHTZx2myzTsNXJgiozJfqBnoJsmKjy3d9MngBdLzzSsTB6jg",
  "key44": "4di8Rgo3TC5estNBgRX3VyA7FoohCyV4CmYmsbLxG19SCPtgbTNN44MxkKvxiVNazW4Qw3zZte9MeKkGHmcWaivL",
  "key45": "3rT8eqgvNDVC2xP6NZyguaK1ufjX7KrHkC17axjHKkQkYA5WCLdLevHrDNjFmoDZwZvmGnEcDPcQfjQJYHPNQZhb"
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
