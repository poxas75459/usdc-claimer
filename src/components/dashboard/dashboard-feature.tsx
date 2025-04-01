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
    "2RVh2kTmpMWwuksrTaq5BTcgiWy5Yj6Cam2TTWBtzQDgjcNs3nCtS7WxRoBKbXF4GmJXMGd2zbtWYkhx9MRu52Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541PEhZc2gb1Coc97q4qDqFcHwMov4wEZeyV4cy8dQaxMjMV2w9z19M7ux74s62vWYfHa7gZpg2WvDFMcM36pUrd",
  "key1": "5Puhg5xjAb368xyYUEpqfzsQdWuQsHV7Yiy611MAFAg7VTy84BDY6zFsrAcEhTTP8Niu293bvex3PACZ4MrmSLKX",
  "key2": "btDQXmHGwzbnAJbZsKsmUGMbXzqLCGRVtiDoxiWTbYxSNbFdZaQ3JqLfWioKz5qUg3myasF5VWWDWSwmAtRnM4K",
  "key3": "5M2foW73QVURy9koRcyaWHKrZVfX3exu1ZxcgXw6zcMfGiquLLirViWrPRnGE4qXLdZqZ6aQFLUPxD1deHMb3sec",
  "key4": "4WBGGCk9tdFhUeTHX7bUj1GcfPD6oUgZbWBrQ7P7FRTj8V5CJhv1CTeLmKV4Ychgmq3KmWkHeuz3LPGLGFGbHyYh",
  "key5": "4V8BDFGqLsvWUiKzM8C3gFoKWcQPaUzQdUr2DQddQbfCzfnqbSbybWDo6tAdK93qEUGWUQJPBsQQXmhysfH8ZmqR",
  "key6": "vPkz2SGpWnia75jUDog8xnz4SSHwdCbjjdT9h2K1zE9ANBHuMCj1Gnkkuca8K8bm71TYGHYkY5ePi4EheiWKrG8",
  "key7": "3USgzjXZKQEMpvCeRgQmXaUXLWrjRKUezAsMZuyjvtXugHg6CcUDTUrofXhVHn199yRyPNWCVvQGDEMZxk3rcAMd",
  "key8": "3CoAkLeVxrS65P5i65tmG7Kftk59DQUxXEhRfvpQbwRqdFPG8Ryg5CzAp93dA2yuSe3XQAHSHBqRsJnP4Thn8d3z",
  "key9": "41oTQrids9eR28XfkaCtudkYVvQgAMSntHkskQ6RUTExzoDSh3p7Rpwgmd6PB2m8vzJcGbVYJm1gb9V4N2uhhStR",
  "key10": "45aLVJJFciwb6DYNmuWEZpPXjxoEXcroS5VsWr3uHHdG5Gb4TGtuKqwWTQ6MRABhm7YkU1j4SrQM96mSPjBatKwV",
  "key11": "2qk9UsjXQZsSd4bDWmT6DfRZdom6jKd6cx3FfD7W93D872EH1HxQCBNaGH2bbVfcsb8SEAJigPhG7ukwyLjfU4kF",
  "key12": "3efYoXysL3NE5CzF3HUQ1oXPa3N56rntoFpA1kNc8PgEpVreoRRNDwte8PeQoFYwePuDhUXDv2Px6Dh98QndLuoA",
  "key13": "3V8dU5vVg1Jg5VAafC23Y5WfexgjeWrmVZFaxzx36uYWn5Zfoe3bExJkXS3yrpCpW9ibUd8JXtgWkZ79BW4gteZN",
  "key14": "3p8B2TquihvjhXYy9dBhmXSepMbkkt9U9nYN33eRM5hs8GbMfuyV7mcvNKw96jNdz4CHKCaJ9ynKgrjkoFXMkscc",
  "key15": "3prPdDea5uR68BR4Kdymr87RNM4uHmJSbaiJse2ZhFBfQ7HrPD1oZt9FzpM7ouyDj1cgH6c8zJpFtoxdYgwvyfUB",
  "key16": "2ECDKZaC5Pk3YjmyDwreKYmxM6p4hT9kzHRLcyDntqKJm5aSukH6SBzKj3tA7wXQ4Vs8Ad8SByzbce3KoPbADTpY",
  "key17": "Y5pftfmJY9m3FEaAVNrPMT4wrvz2KQvRpefHjZ1xRR2wQtvHbc3epK6jMnCeNGWfwj7dqcKbf4hVNSXJvcGfSvM",
  "key18": "5xZLHtugpFrsYNpXijom2RgM7SvrZNRpj5DVyNPWCNqVjnrrdZa2UNPCkA8qpxeC4VcWKx4SbZHWwrqzQxeaDUuS",
  "key19": "2afZ43QgZRs1kFooW55iWXGLmkSH52FhVdwRuU634PV7mTVPDSDEAg92RjJVr4ksAYc2ZRz2onwpCqdWDSPWH4s4",
  "key20": "62DrTJrCTBmCDA5xwwDNNrXQLvcHe4HPwWbv344kV6uNq7wN7UzBJNudJudHa9C45iv6q4FNmVy7Gc9kKEDh5hxb",
  "key21": "4FiDgPUgwLydsjhd1HYYhA2eeaxLZt7FJK8RB9HQ4MYq5hQ8iMZDDzzkcVLZ3WJ2SSx6yqKtS6C5oHywueXH2vUh",
  "key22": "2oqFnAdRJtQWtMNWrDFJWK15es1TDXqgYiJcJmC4B17exuxCLYx9C829icjfSx6sqP5jgqVws6DDFexVoWn3hkwv",
  "key23": "5mV2FDWV6Ld8S3bhMTZvj9E4pATPfutMWmd8hLqoki8qbvoM7HKXXNuQti3iTqcGUvStDymN41JL2ZWacSk4NbYr",
  "key24": "3gxYbmPyxdR7jfNtsn5xToJkCEVJUc86RmE5SiyngieQ6bRCPLsSthvcKsA8akm5Aaaqe6UzNp5QRwjtqAV23r45",
  "key25": "2tMHBPPPw9eLdQzkvscfEeyoXR7F7goHgiTMEFW6TigzCpgYhhSV7kxSjSnMDSSNtduft7pZAPHejSHQLnzSz9vd",
  "key26": "4jDn4WUARc1xYjxoXBP3t2mxYWt5DCMjAVfUdzNdKQqTxUnZzfq2nUczqMcV6oN4Y87KXqqDRtm2SZ4gMue3BGuf",
  "key27": "94mEtnmYa6CQnuBY1CbSF4LMvddKFoWpajzCHJiYC8hYxoVxxCk26FaDAePidCTHHZCxJNiLUVKn7xECRHDsSRV",
  "key28": "27XbVMeAcxRVdTztnrioCheFshT1EauxJsyRyhRffUg1LZN7L4pkSsbRyWgArpStmeYCFMy9r5SP8RGvM1oVwDQt",
  "key29": "2uUB49hx9SwYiYUZqMFxcUo8AdqGigwnBfdX4oxSSmDMCvtmku6GyUXQWnpdoJQw8afshzcmgpPjQLFpEeYrJpf8",
  "key30": "2HAEVvR7T1C2z1G76HVeZH48akF6oz5hn6RkE2y57SbeV37jaTLoeaaM9EMkNosJPiAq1jSUsHJC4omfGwdgWfoo",
  "key31": "3J4gZDa4wCJBd47Qc9MwAodhQtLFM1P9B8RVkAUg9Kq9DxDfrUDZX8zz9QHaqTzAYPQpCsoUEZ3KeBrUy7qxdQCG",
  "key32": "3j3r2YqcDfSNPcLArscfFnmpxAQv7fu9WpRwBh9AxcCfNDqqNEf48KUXfZ5jbqgvAn23GvC72kM38pmijHHHzxNi",
  "key33": "57Ahf1opXbuEGg2XXu2YXsV5d5mJpUya2T9RtStUYbweFmDzhX7Ww3n4yUajFpv2yQZuQ122oiX56rsikpbYizof",
  "key34": "4mdJdvWFVgtHC3HFEisFZe8fLEMW79K9ELZ5XWXjnN9nCbRGBf8cCb1BKSX1PTg9SFUwawNVr7gFRgTALNMPNKTM",
  "key35": "5JCT7EHRu36BD7p6JQFZZszvt57HTyjWboFeomfaDadnoTwweFxnp3gi4msxuYGHBwqKphQfk5HsBWfnfXyaQzaE",
  "key36": "3B2dFk3zqgP94fdt2unVWbtEVFjtYaaayj8TTFS7CoN3WFHBMCWpx8WaVVx1xfFHYwPDzaV3TZaYV4bqdfQZZ8pg",
  "key37": "4kgre7VTPx8jZQEdxrEnJj5ZWeg75dimtrdbXfZqLPKUcNE1y3dsaj6QnUUrv4te1AkXXxHVnE2WvdL1HeAiRLkm",
  "key38": "CMkpqSpJf7Rw4H1avRCcEjoAg22MS7usBwhz4inuBkNWudMkgam4ugfwcKMcAEwWeVv2UE4LNzpxgxkN7UyqUdk",
  "key39": "5m8i7ymLBRQQ1vvcReXVLq4WWiovXGUWSff3kibEqpiRrQuFKhwu12B9aHEa5aiXhq4AEpBcewZwPzDEUyuHTVvw",
  "key40": "36qTdokuN3eEBCoAG27r8WLQgH8d8rjVW1ZF1SQD2N4fLU3zXx6PdYczWEjFvXkbVqrWVXEpw94mbgAUK3G55g91",
  "key41": "3xZkuuH2typtjzxpWnxygGUw9Bu58YKGmzJ9ZPX52EJDiuVUs3bs2RpiX7VgEQ98eTdfrinqFmqQY646taVYupoe",
  "key42": "4h3aRZRQTLjZsTEJsi2WXYzj6c5JfNN4wkdzRbgxS3tzscApWpmJftChRDbXyU5Crxhs1HvGnDd7f8AYzANZY8Q6",
  "key43": "5vaBQA7zAhrws4UDEdD9gqxKzCjJA6Na8YQsXZay6srWcYLiPwGrmc9aJ4hst8rWXxvtGNDL6zVJXmi8zbAg2B7r",
  "key44": "4frWjpPADFUW1YmmxegAgrFUJ3Av1uwqxvMyxENmchHxzuoMEGiWJx3KSmV4XL3h3AY5XwhnMRL58DPrhCH2CrA7",
  "key45": "3WUvZYK8tKc5N4B3FXcrpJcgekTPda4B7UhkfyUF4Qu1UJXooyidotZ27C6umyEwc1Y1Los9e1UUUYQSwYGftLpu"
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
