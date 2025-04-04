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
    "2onbAfewGWVo6DSpjK8JHcY9phc2CxUfFpREMJ3PVqgJDx4SPxivbGwuhnfYP26WxbRyDvvpPDDhAYbtrBN2NL3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GJvNQh6E4hKmdtZ7sGnt3vEAmBygkfxEDnXFZbFpK5VpE2encd4X8xuYZcnPEcadnQW4myw9iRNoeuB1YjZPCHG",
  "key1": "4MVqPC88TFL347LA6gNk9Mg4v9xmqSKs4jJ39XsCwxmHyz89FpHJAzcJ2GekQACCrLRVa5wQbr5EwnPiAMhgYRBx",
  "key2": "2Sz51HuvS5dMsxgar23pEKfKxVvkteWBFXwAc7M8d9jev73rNWZQMdaXEsrk5bY2kNG9GPSS7xosSV1ndfwcCMpE",
  "key3": "66kTCXutRL8W41pexbuZuaD61iU8ULKLZScUy51JSd2EkRj4hhVZCuhGSVXSN99NBEqk3nPidT7e6BeRcwJW3kZN",
  "key4": "2sake7D2qx1ePwBKR1UEYxVUBUEWAae3DG8ytH9MAAr1ZDMBMP6gSqDBcN7Go6M7kcDBCboStDgQVtNdDu8tCURq",
  "key5": "5Dv5SySyjc1gTkuHjZ8n3ncmFRwJzRmyaACw6RiWKHJdvzBTDQHPK9rNViV3Gg3QBBQG7WwsDXN8qrB7x9CZKrcD",
  "key6": "3P3zNHx6u7TsjVkmpx7BJRo56KxwjQ1ZE5Kzpxj9ipvyKQHEi63VP9g6xR8potrc72veAkk7U1asShcC6CY5yGgd",
  "key7": "55qWEUjiWX8681uxswUih8B5BRBEcFCR6SyadMcWsvmSe7EM4Pd37Fd4J7fwMkdkg7czmvqmDk43uEYMDCDTA2X1",
  "key8": "5Bsob3hzhdjgygFjNVDas44ZnoR1T1xoYk4g27C73AAPaJBT9j8v3AVTvAUpLHk2XMRmbhBvN4KhZ452LEnZ5fhN",
  "key9": "4ECkoxDvYcSffD8Kw6w8nUV5N4mq3YoMWwrtrf9Vnq7s6jnwjPUGvgYk48hGwvZQLNfUoHihcNhJDF6dspcPprjr",
  "key10": "5a4pidVpcELpACnYZp65yUxYJ6Pgo3uFAir2ujLTfS8iXM738pwtYkKLsStpd63XF1r3fvYUAjXohQp6dKpphVXj",
  "key11": "42ernhdtCQa2v9HKbLgZNtF1NZyRf8Knv6ELLPfibKAhDjTiGyzwKDsBwihfTfcdWytyAWwLjTuG7JrCQZhya7XW",
  "key12": "5ifAxcAokQgWu6Ksprd2KL5aswQQ2JTsdjBParP7q77buJApkEAzPYbd8UbzbhmeQnotazZKke2KJiixaN9T7hZz",
  "key13": "3GMaz55zegFxC1Cm3tiWD6rY8ip9pR6z5eWb7XYisJDoMjEa8D6DnYdJJXq6nc2W7PrtHYEZA1etB23n2AXAr3mS",
  "key14": "3GrU3ZCmyBvFpdy4fmuw6AiidJpZ6NFVdhoEcPBnNqqCahacsM1CRJseu7ebL5jdFEBpiFZQ4tDukX9JPd3xKGDX",
  "key15": "415yMfFh4VpHhWaQAMj786Umts7EXmszmf1zLUs8h4L1ei4eb9ZRnw3KfyYPD33uKjT92MiFJaxCu7kg9TfBztAB",
  "key16": "3PqeL3TjF3Y2Pokgeuu6J2HzQ2Gkvva3ip5s1NeP3i5K4FvE7VGCPmdnEyQxUq6T6m7woRBfvgKaTgNYGSq4nZHk",
  "key17": "3Jb46LqrSsiosNGGEwWaYufLLiUdS1KY8ZMW46ZiV1jLmPH2gMYHoURbENBeZ4yUE4bsa7RiZrFPuWpX5zz6c9jy",
  "key18": "3xaShn4JafvfJzZEfowLDQhtdczbL8iaFDfzYaVWNHtRF4Bmv3U4ZXR6Pik7tsJ9e5DrZQaT5txRneoc1sgqQhpS",
  "key19": "4ZhYkfQyuzaTXmZcKoN6e7sudUruNruKvDBjGXevkL99BWTENz7Jo7DMVZM7yooQGDYfswtsdcTFb5oEX3Ex8ZGR",
  "key20": "51nKfLxZ6z4rHvmr4B5f9se7j4fqKhf6vqKBCW3UeYfq9o3WjRYLSevTKv1NUFVsSvWthfXjbjBBytj4Lz7AZwBq",
  "key21": "2wZD2Gtp6Uv6Ee628eurBqTGJtEiQDh3ufjv7fcyED3Nb5YboBSt7dEGYs8zFNvoL5RgvuLRG86D2rHwhPEx6Q1E",
  "key22": "63zhUraNaFnYVaqmB89i2MWBKLfb6ewXjgAjJ35nqdDbXFFPfxH2YYfmCb3t2HM6Mbmx6Yrk4iztnP7h9jE6mF3y",
  "key23": "5M4huqxvr14viTCaV5vtYiU1FDVowL5Yp1rByHvwFmYsQoELBQMKMtqcsvE4yM4bXGR7Vr2cgnHUCs5ur4EC14Vv",
  "key24": "3kPK4MmVpjhAcrNgazKZG3bDn5W39swvt5nxySsZFEjbMroFBC9m9GTykj76NcuSSb5VxvCiWZv8rFyUkF6fFSsA",
  "key25": "y4Xd8iEeviYWiqvU7YTLuNg6wurV2cTRXUGxknFKckJyYfzBh6dmhS2XjZnTxuzsnagPmuCrav49BVTEoQgSbjv",
  "key26": "65yWfYyKKM5HARRE5VkQF1Qh8JFCw9E1sSn1ziLm7iU1UhXWcctZ9wfMisMvw5ZXR8AC48KA2bQUpg2b6fDBTShM",
  "key27": "osWDDV3CZ9Emv1u6KwFDZ9gvq5gKy5brNmBNTcoYgFckARKLaLoq8AoAxjMeUeBBEcadKFVy4H9vKvi64gFDcKf",
  "key28": "56aDXdrmmbbvurfqooYWDCJ2BKxfsBKzcvjhj7z3zrVj3rrYaoAD6odw3nod3XRdpN1rM15uM3vx4nkpsQYNHAx1",
  "key29": "LFmn6snCMQmUwm42BWoW7zVmS6LcwKp66H9GV1tFeuZjXQgMchKnzAbTKPjwU7yRaL1rZAWxpBYHyH4RB6DvVNG",
  "key30": "3gAXznVxaqDWPHTqKdmmQ2moMTG6cJUDwH64aTQeUvXjy7ViL7AEmBcpWaUbw1oU7JnSr9cFMaJ8gYS93VtQJNJw",
  "key31": "5eEZHx9VBM9FCWghdzSvPShp46oG71eUjArUXp7eBxiKdYNP1r4Jcbsg89ZZMNJb8h9xTWKUsjdzQZbBwfSYiAcm",
  "key32": "5koa5FZSHTMXguvVXnsSzxqtVFp6qXcSYLDd96M43o14QBWWjBVmjUJRErVs55uXZFSHsEmGRVNSP5rABgxvwZbX",
  "key33": "5LDPrTd2WWohdUgEGXjYrXeBpJJubmqVNBkw49noWhtTPMXwoztgj7wyd1q9ax45MdzcUsAGGBLf2wRtjcQvM83u",
  "key34": "3SeEcifE8UfakcgdHQ92tZqWjRoqR8Bei4FaBLt9GesGEXCi7EKViyTCjER4FWbJVZLdKdCJp69FbRKfLkjrCxvq",
  "key35": "3iQJrogeag67KiECs6H5K1b5TgqwYGLLBsTv4QHsxgsZPFkeR1m9j3W8ycpN4RPwBPemhLp6YxLReHvt3dkZZqBt",
  "key36": "4bYZ4vfYmXEK5x52PMUKCGHRj1mWXvxLepvcJv6ZdsEHALgmQ7V6Efr4x8GK7gemso4MrxBuVQo22qASyo43KEUG",
  "key37": "4jeovGH2x4uH11gXnZqtrxxuYBw6CTcq6FDsyyd6jxDhdUqR8p3dFxkcb7zfp9wtzksEShhYoRHmCDpxUWVxxYx6",
  "key38": "1MPJAEB7azvrKtqx5fPfu1v25Xpg7iQsKbVoHnyLp3hqhP5DBMiewkimqkPE5EbistQm4T9ipRBPfjcfY6hfqBs",
  "key39": "2Lb838tK5fzkT4vMTbFCDtMjBDzc4cgbw663Z9f3VYgQ3QceFaLQMDVHSdABL4uWRtoMKjDEkicnAoXpcXNxnaJ4",
  "key40": "3cexrcg19AdmC21rRzdPY28oekUo4Zk7yk5txymurZUSGnyxofQCbZ5iji1RJ1TfgYrqr3vYeobg3TJfUVKWLqsE"
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
