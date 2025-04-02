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
    "4GSEn5Q8svKSxUG4qnxrTZdfhkDfkxcNRrJ6DufryRKw9zoHp5w9pEQmumCiqat3c1KVSwQHevYn3kKypTGakSaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fs3R7HvLPEBLWCXzExdQ2DaPQMYJJVrSrUS8Bt2uhv4HPCSuQ2WwVEg6bW9o2YCD36svWdoMuVpfo5t54YtpNLA",
  "key1": "5h73QiU9c2hy3nC9j19rvTA662X7J81x28kHEiHkgFeCXYSy64Mmys5Uepi6k6zNbqVHV9aYWoiW9jKi5QXEaRGN",
  "key2": "2EWzMuSXNZp3DfCE63xMy5pp4obDV3igXzs6HpfX2AVM63fdX462FXEkczJ4xzWsjkpiaPbJ1nYCfTefK7Gw7Xpa",
  "key3": "c7ErypV3C4P5q9KJkTipJhXt9KUC6mPkuitDphGKhUcyUhAH9TGkPnL9w1AJV8K6yJbLpG3t3CbRR3cHfBhK74W",
  "key4": "w54VT5VWR1FxXHvRuAA5Yq6F1nKUAm2hADLjbzr2hNRCRAbgQrJr4a5viwpvy4uDYt3kbB8Da3Pa1YLPyCucrVW",
  "key5": "3njducDkXGeC6pWJsUiS2fwpciXx2s3sgAvEbUrh3ccfN2ab5DzQTULyoQsyBEUegbGJhkb1FRHJmTL1j4fbch9Y",
  "key6": "2jBct6pq7VutW7p1zJrwxUSv4nXKXn4fmKwczWnWzAGcnKCp3ZgSEGyVjvHBFd8r2ztQwDXKwyWsSgi6x5nGEA6b",
  "key7": "6iExkscmL3TPyJVQWDS1kWH8dkWZbR1gj6PexCKTDWjEMvoZhSbLbzRV2zsFYVenhj9njgpMt6RcpNZHMk2jj1N",
  "key8": "5yN5XAxXfp3y4SkuFQLpDRq6ay1hBu97WeEVojgTLfqvEkFH5mx8jM8k7ru59ZD166P3Ts5eUqgiwpxanG8aRXSp",
  "key9": "62wDUeD9EhnjDabfsnJdMJ7k3g2i49bFWo2mxgDXtLxTbzpV8qbKVMmGKVZUC7UMfy6nzVzgzf7LnDwKyTSvsVaM",
  "key10": "3Z2yqWKEErH7TAyeQfXDpXJTU3ApYzrvc19Mwm4kXVzKT2HDYwkwsthCa919fc7K5ZWWCY9vja7GZNpLKFB7MTjx",
  "key11": "41W9qXdpandrhfeAGPAa6GNWz9VmQeZ1C5NDaRrkw7PgTrrudpbFRb6NcfP3W7jSGYX3i7khKJ1YCBP2ykCafBXa",
  "key12": "686UeF5oNuWqLhwZBCF7UwE6qXgDxo26kHQwJ1FnWQHWCdjDn9KkNgyDwH23zohiGc2EZKN2DNcUHCu5NgC7JQc",
  "key13": "2tJHX3sfnzFnejMaCHsxy2quTyyrzTSzv8hGS7SrjfiF7XiJxoYkaSpDRRCH7EoYN9iggZUqxrC685S2KRVFwTgZ",
  "key14": "2MbMPzrDAhoQpoK9BcjqYNZm1Y8E4DqcE1jdBwHAJnmX1FZafqvg8tPtNSMt2jEbUorp2yk781wNimh2e3xgdoE3",
  "key15": "3FXaVnaRHsviKXgiWAbs5MmmrgDKuq7sjMj23vt3UcNHpEkMcrReJsqJ6d9jXccSNz1GuAShubtnGBpJ6oc6JsRA",
  "key16": "54h7QYVyHEeZxKxyftv5RDrJKkU3yEJvHCELpwbBgffDBYzuC6wmRoY33gguU8QcfYgCvbWw1JC3BruozAxFEa8q",
  "key17": "668iudFDnSikkifgsoAL3e8bMiYw7GimKCd7M1W4h8efymWJ7U7nmXHV5LuqcA9HizrkjzSMyL132u85DQjJJCHi",
  "key18": "5TL5ecUMnwkTdUAVhnSvD3YtzVJZJhFzr3hGwsteFjDTF82dE8PxURikSGK8pwVdwmKESAbxaEWYWj7LsAt8smmR",
  "key19": "26YeRzLkpKrtd2YJDoB7s7T8DNb8CDvNTop9v4cQBzceGX9JDDmZgehVpyyAdzhLEh7sa4GqKsCLFRezkP3mEUtD",
  "key20": "2KsHkveeGPrL635Y3y26vgvk3b8jrYtPCp5cWvjwcjhsqL8cP91gjBGBctsJAaxn1rhtEWVTJMptgUTMzgFWEkmF",
  "key21": "4ny8k7zG4K44N7yP2NWCdjfTQ9q91aqRkKx1rwRTca3aV8bq4xCrMLRF8mmYx1wt4S44kdCbHKHsdbmXnUw9T9D4",
  "key22": "2oBQw2FqTFZ6uS7FWBbwMfJxrm8YMeWmJ9Zjm9cS5nmqMiiRK6XzgVypWXGjFsTay7RLzXWAW4uSF9HAbWeB3zkh",
  "key23": "YS39hh53jcjFKioJm4FzLw6ZGjt7evmBVZsz5xLfpQLmLs3k8LY7iN4ekmNaSCrhsbitVrCcsLDGsfgusmAtyCU",
  "key24": "61e6U3uo7YEx8MQrLDfQHNg1fbcr76LEBU1MeKhhuQK6PKBveL9ECkqmzX1MSM6wA4MXerVWCKKb7dwSzPqbivNV",
  "key25": "2qNyXQ9pB8HDgZKHzbw6MSgimqbcSkV3WgKtetKrSWhN3JXhqcz91WSFNNsqyLF7GosHyeftwZFMm2qPots4jSVz",
  "key26": "2Zzv1ChPj6EhXjj4NZsxiTAgvA66wwaWoJcknNJcUDYoEABuKpESdzksk1mE775PrY7UbKHA6BT7Pf8SA9mB9pjv",
  "key27": "3LiJuku2wrtfgEgmK3MGCvBDXTDERed4XxzKmXBAzH1N5pNRwegziuQ5hAgiRt5KSt6x5gALd55fgiK6QVwyaRci",
  "key28": "3F1LwAjTkyAromG3FMqkSGStPx2YXojH5uLejjhco9mHmg6XTKLdPTWN9fkHw3cCVQErw1gSsmpVttTXd8hKAHsP",
  "key29": "3HMMFwV3wnMiTQojzn6VxkC4K9SDLnScuHnZgx7UK7ebsBBTCw6J55fyofTMbXWbAV6ho1t1vBDYBeoZjJWQk8Zs",
  "key30": "56pUydEdmgJ2HBFWS7gj33PuhuGLN5SvE6tGZytawpXW3xKugn5kVTtkNKLQbtvahsFwg5uGYQTRsU6Qu8nj6MmD",
  "key31": "38tHAYbwYWTBeW21LxFGgtWrzBFcFYtaEthJcM3bn6kPQ4gfFkTpbTncH7743b53hWTparCdRfPLsEfXTGLdX1nr",
  "key32": "BA5dcMmfUir2vHVqHJ9BCeoz31BZKjry3dZNPxpwZcYStisdXFcUYArp98vyFLdGRwmxydtqMhzPGNZ6pgkAuEG",
  "key33": "4eNgeYyfcAb3phdhM8Zhk3ip7Gw8bDu6VYesxB9YFAfdUCyWv33euMC5fxmuyHhtiN38A16sKn8EDNPmSKSr5SPh",
  "key34": "5gQ8jRCPYDSRJHzaTHybJgtf3wh46GnxBCHyDMge3VVrWbfQMgHq3UM1PKn521AKSVpTrCnH8udvBuxqdDAT7vCn",
  "key35": "Bshw5JEGBvRKoWAyeCpXPJxuC2P85ZX458nh964CheVKYcxXjAzKjVrV1wiQ4JihJG5xCaz1xMgunXSRKwtcu1L",
  "key36": "2ug5viJrVxxQFZFyonPrpP9PNZsgUfmnnAqmBvaUnRsore7MbZrfFjdqFmkVXp1uPCNdd9xy5VmaNdvnCYnNw2eW",
  "key37": "4u2X1BrCUpJBJ7TFq6NTpB4FGpyx5wqsyxE6cHZJWZXos7FcG82KFnLyF4qWGbDqQBw7ZWuTZgaA1KETXriiHG4v",
  "key38": "5XoSfJq3pvP6t7CxrpsQ8jgWPZsQ5QW5kWKjRTneypobTo7EL9HEqRvuNWRZwC8TFxs8jc4AjqcK87tonkMQFDTZ",
  "key39": "3XeQWraTVbNviDjYpBqw7c1MmcyFqudF5qyeatCV24uiYdCY6VCVk4y7VJPqf3Pv4F27kcZSbpHMXw1kJLNDizDL",
  "key40": "55TpgoCzhcMF18caQZ1vPpm8wdCDXjwSCjpR11upwKA7UK6bw6PFNoQhGCLekfsFCosym3R5nrraCEDvAUCYgHYe",
  "key41": "53Nz2gK7HKG81WAETpqd4ba5aAKqp44hpbWAqTh643vfStcm74GFUtCHC7SPMG3zPCaWDFdNjAtsJMNTdy3QX8VR",
  "key42": "64yDxT7s34p4FNfvqoSjvCrfutpT2HtFwHVeAzSqeRisPDYgJGN6iCBKSLmcbXYMMgYRv8BQJ6ha6ygHFAr1W4rc",
  "key43": "nir2cKTmhgafhFPs9Xmj8jxjuBAn8UsRxYKmEJ4izm3MDerH9527zKkwUtDDDGSBuBjyfLuoMNzBBFt5McTUzyX",
  "key44": "5digpwmCn1K5FFfCQ7xwvHSmC3SE96ozBnHbE59RHdACNRLZGwfomi1XBKmyrAqNUJZvBwye1JeE5k9g2jypJRos",
  "key45": "5WDuUUqH78pyC8Df1K4NkeDuKLmStqpBZfk6mvuz79A5hFjfu4SbWboe7zrtrPgosKjHHRiZ7iv8hyrMXwkUGxtt"
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
