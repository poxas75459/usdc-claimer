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
    "5cADwanuTDeKCzFYLQaR3SzD1ShiBb7z8CrxdbiH2fwEbYC5iQyZEVEPNJsVsn4qD2bjhfaAHt7hphC6pHdhwSNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxRPTWR8o61jMcZvWYxMkzEHLM4NvyhbvUENWDgg6UdHMSuUEqXhMvihsbyGENj5etCzrqcKELw4BergW4LZB5k",
  "key1": "4GrFQ8mA3jjZArpFTYwLaVnUQzCE9n2WQtBKRHqURqM7FTHupjU7QDqGtL5kcyqjqh9VjK61fjP4V4nekiYDsUE3",
  "key2": "5av9xHZgP4w99r88dAkqVqyiSyxZRnqTRfUpupgZhhmgaF4yonEpaTu2inGWKCpdAZbCQdirywFQ3q1UxoMjeQ6",
  "key3": "4vSJ23w4AWNbSynnYxX9kbt3QdBUCGha8KNWq8mpThhSQJTxsynyLLFYQJHHMVwgi9t9vyTR3D9v8oHxrdkVL7MW",
  "key4": "4bxBg6WvBiz6Br6KDVB4P1gQeEV3sXUqg8Bm7g7iQtjRemogv7EmuCxX7Y6xnjunTQgHkm6bCaDu4im7tUtCXMv3",
  "key5": "2KQPQMfNmUW8xnWFvPnHz3vnReHzM4Hn4K3EiB7BNqedXpTNGxi6XDf1bzSZz2W6pXGtkxUVBwxqVXjDcbB1zMKB",
  "key6": "3aTwRZc6RaCtkxH3c6Kt4MuwUDMRKQQLwDHPkYKRqHiwU4oyjCh4ryv9YhWE19cuUHVbGfCcxyx6ynZvtvHtccje",
  "key7": "2YoQn1jYp9HAdkFP1ksDFqTzgG15R5xCgGhnbckutymMLXXWWmoVcHxQzsy33BUnRmfxoT8jbmP7qfeXhG698Enb",
  "key8": "2fs6GAa61ctUTTgm8gUTaPfyosMUsz9FX8B2BQGvrwxcwwvyYToNuh1oqpNQhip5sg3Z1ffa8uTmJMifKUqGzoMb",
  "key9": "3Lg2GKK9YdezrtvAXhDjEj2sTXBxRGNkurRMuaFfRqNf9WafL6mAP8PKnvD3fqwXdoJ91FU23u5n8kQo4VSGJGuD",
  "key10": "4PXuME7469aDkecLEv4qUPSxGRTKrNNwqCJbxArAMvZRnEuL2f6ru4XcyuH7Nz9R9ftBGuWy5mXYNsCodvSL4zEK",
  "key11": "37foMxL3GsoDnaEMLVvBKyvD8CZMWuWwTn5oq3bLEh8qrv4sayXysj3TuWk9rk1pjMvumpCq4V3GjnBm5BtvraK2",
  "key12": "2fuvrETRFvojKRU5EFnud3w98Gj4qZsFShUqcU4MFcYFjaUAhHGLugo4ivEiiAjofkd8jCMKG9f455CDCYDCn66i",
  "key13": "22o68bVGvVfDeA5wjRAijktvGWDUWUCs4CL9fwunns7Xwr3C1ke7pDmbUBSPcAy1acRSC9e2ubpRsLCKLrS75wgA",
  "key14": "2hxUXCsUXG6tbdYEZ1dNRbREi2fh5EatAWKp56QEXkxU43f2nw9fCF3VwRzGg6pZJLUsMcaAKrG3FaRupwawFRnf",
  "key15": "3jbqmgR7r5QYPP7y5HANqLKU8ziG1odCrqjri8Uvtg9Y1wkTdbd3hmiMCgZSeHbmDdiL73jQ5MMrEkjuyHchEAR9",
  "key16": "eFHxWpCv4jNefx7Zt9fg38EmZ2nkLMiJXNaYVg8forKik1GMma8abxELoQy4F6RRN6aG9zxTK5gha2tHiK9SUZc",
  "key17": "uhPUPzgLy6KAidGnH1KVAJ8uLjP7XqDKscS2SD7z3uJEkc4RBdJMFHsC4zBVienqirQbBkEg1DgNfcUEXniTxg3",
  "key18": "611768WWLdSmBCuiCsbXyUTdWzXeZhg97PpUF2ka7sBtDLYRwEGEd52mE7C6GvxTKd3PLHLsLYamZNyWrJoo8GAY",
  "key19": "3CERnFaS628VVVVQVQHCwxCLyzCmvPhEpq8xKayymgFwnPJx4i4K7sxNgcov44yqFyQyq7dbfjoLxseHpbDfzfVU",
  "key20": "5rqUpvcSdXwJ1ynESmLhZSSST3fDhoxFLSBiN3Z4rbdAW254ETVUuGbszQrMvhLiPsiGd7LD2Xoj2JKr5b2VKCFT",
  "key21": "3gkEHus3TueGM7K2J6Qo6NfrRJ3EJ8RvyRCCsGfcJeyTLtnwTgT5m8H6gASQPidQ2BLsUEywNeKvDxtZudNr1G68",
  "key22": "3izwHvwpmBx1Er9nDchcNe5LXnPZKBmd5E3oqpnC9hTmhkYD3UqmiDCeNXA22odJasp2jUcLnz9to398MK5VPFpU",
  "key23": "4cEzspTgYxTd3epWQxFpTZ4JLU33pvEBJYWaBHWd7CUBfUzhXRDkd7HtPWA8MLfL4pkrWLdjtARchaQHKhEvSCgG",
  "key24": "5ykqSD5d9DYz5CCHw6rNmRrsdQX7YNnRCVMsGfKS4QBxJPUsseUMJGU4LV2xgWc35fviAW6JFbPJp3RJfAAkX6wy",
  "key25": "3trm32fseyfN2188wLbwc1eRd3nB3jweqix9YZ7jDADUvLiG7UjqFU5hTdkpQA2kKsJKcxMkmQ1sydi5wATZoYpn",
  "key26": "2LWrmosN94yq5bq9FXTLZGY9ccqnm9zdEisdHH6BdHMs3Xx3wMn5n7ti9dexNKHc5pRNoZGucUQsf3qQe2rBsb4u",
  "key27": "57BnN32bncsVVgDa1WHSohwf9677nUwoVmANnvj7JbnV1pPMvGdarwqjcSVa35y9KNe8bEoPgGpkUiL4X21pBuiQ",
  "key28": "gsPV6u9wfJiByQgJEwqpEaAx2Z8Q9VkvMMDgKTLQmLk442xmTvitYuHos971QdHa9pGM3Femh4pc3CLGkZqCv2y",
  "key29": "3FMdYgaMBUm5CD98TmH3agVVSPMmpo5TY8xjosc9NsekGAo9hnGZd4q2SxRaCWqdSSbZZteFZpbr1S87y7jAnzLb",
  "key30": "5Wma97N2FKwUPisQUTP8ert1EtncPDFqJtK6UL8fZhP8ZANFDEqQMUDyN9GSyaKQdZgCVmfhu4mYUcT6qN6LkJg8",
  "key31": "2c6rzgm1KmAGuwQzXnh7bX5jnb8PeZeRfdaSArYc6z4c1tzqwtsXFGm4sV6XzUyy6aaz21gfstRTonoNgZmY6ftd",
  "key32": "5shKRuD1zymaV8skA2h4F5jwfYTgGsrM7mbbHMTedPBRHHAzXQZJsAik3bVhA8mtf9JDu1xecrTaHrtbttbURfb7",
  "key33": "34sVLatzPizCZ7JqJhawrNkDFz3W8XicGLwwKRwfADSFsMfrCq4wF9qLY5zTm4N9mwvctEsaCatKGYSVYffvMiW4",
  "key34": "4NDWWc9hGxQ93ixNDAheFSJWWcXwPzyA54jZMKDeZi16pXrE2rkjt8frSu4ZzaRBNsVrsv7iYkWZN45gGNJXW1MW",
  "key35": "2ydC8NbBwr685CkabszmK28KpK1GG6Nogh38JsVVpvz38ybmTKVuMrjcgRhcZqJb39uXwrBYEqQjUmBsVv7dVrD9",
  "key36": "PRSkfKYFVcUFhN12ELxCjVUFmJY9ipRfc2aaTHsZSagNfDXMN2UZqoYSif4KQnz71iC4QvScSnRcbaxJjdtGKa7",
  "key37": "5wtPsVuAqQvYrJdevZua7EWJdC4sBM9LoccKofQAgvCrqdG85dfgq4fbuxJ6XSkSm7aRKq6JDCjynxKeN6zqfHhF",
  "key38": "3VggMzwnLzzK1aWcnXbQbbmxbLDvvuZYqRuzPJ9QKVYdYvaeWwmhXSa5d6JsYYpT1YhtCVmwxiFDt8MouWYutjzX",
  "key39": "2NUWaXYRMDCncTBZTQFYYBZt7pM987UF9WWk6FNTf25adx5L2yYewg6aYMQLHx8q6RCVg1kxrX7q73YXdP6WnDWe",
  "key40": "3XoJTXjuJCau1hJM1fxZ99U8qFVwjUwdRySZi1MGjprVQVcwa8oBdbdEQ6Lo6NUEK5b9m3Zub5xgjBT5Lo8fDX6J",
  "key41": "5WRxHG7AEsrtEpAxQSxL3NMmn7MMPSvUM4qKBRiGCUUMaFC4AvkhN48DYxkEznQxiPH4Wrnnf9dDrzfN7k7tDEPp",
  "key42": "3AoALRKToRgumHYmRVVwCoC5q3AGLzC48yHwra6ccTLaJGVcU3egdyHoxLUQwXDipzvPX5CoiULsVcQx9SdXNaMp",
  "key43": "4qZkxzBAsV4otW8aJCuA4YNkSr7ABtCRNuTwdr9A5u8CKPK78u5Z44xJGFAWnSZ6Pv9vJbMVVMUqrhnsBxMWhAE7",
  "key44": "4gxdafSAewVjm8gCwfobp5G1aBwbYDnm4RYou8DzuYiC72hVdFhgMVed1Av7X5wqgAQQUzHRMHcW9ctwgAoV1b5e",
  "key45": "4ZxxFos8vQSKACxZBSJPNz6pBeB8qNMPRjdYjr6ZNM1CDZVXavrRuxbgNC48ZKcfYNhEc8TLUWCaKJPTcxQHSE8",
  "key46": "4RCdEoPYbVYa9z4EnRoi8sKjA7wX11Eko1TPjqGXpixb84T5BSJ5MfjA5JbV4dUyyZxXJr1oUk5yXuPeikbqVsqY",
  "key47": "2maigyW1c9TX8fDpe2mP2SUDg9fF8KqJ6gBpDx27gFLUqu7oK37B59y5khQGJMb74qnzvioMssMqTbeBzsbtjrwQ",
  "key48": "3EVPU4FeDAxVC3k16PRTVadQci2N4vv4PgUyJocwDA4SbJeonyoiS2MBpcAfX8vCJem9k8y4yc8tZ3drcAZKnbcX",
  "key49": "22qSfhbrtwTTjKwJUUGQSjjz8T5NMaciqapV1bfjVk6YBQCHxzccHtJg3EytiGXP85H1BE8EvD6V9yeHgXt1n75u"
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
