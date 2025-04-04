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
    "3kyRNgXJv4B9UM7VseZ9JW2YxcYeUZ3XsKcCqYN4GUmkaNfiXdYSt5ifBj4fjYesRapEYWvvswtdoNHiC67sajvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53qFr1k18xqD2A7Gy7Lq3RgP96Aq9VtfvanWE4LxbYS9SUH4vj8yyxdodsBWeb5SA2e8AFBmS5WfL7arDhrXzDUr",
  "key1": "DSrQ3QQ7XRmJXNgFhsBNDehEoppLwJfdhW95CjbJZ9kdNESEcpJMbxaZN3RHJ4WLwijsFLdRsq6bKy3tykdGAJM",
  "key2": "2bSGuSb8dNkeMiQv76KLqL4ep73nghTkBmEUeHqB9PFbFfEvuGBKggLFNef6abB5TX754mAhZeM2JvxJSinu94Et",
  "key3": "2aGBxJpHy1X5BLgSrTcF5poKHGTTyW9SrDLpeiJ9kB5c4VjfpWWESy34RX1dgLwwJQAacudpsU3PgA2xyP88t2ym",
  "key4": "4geJ5jT5kjXwpL5NsoUsSWdEsUiRvnV2HchmNahRx9Sc3WhxKcxi9hrxJoQN8gccU6jYKALXe8J8utoRphxXmvH1",
  "key5": "5NJ9WYKMjYUGNcYS45hnZR4ZK23yVL3jnAGFEA8TJmzbU1G9EZQurd9P7j3jWRwBhrhf4qJFP3YfuY25T8Bpzj9f",
  "key6": "3Tmij18jU9Ge6NVHABC5quvyn8BsCucovS9aHthBs76fjHbzKGozz8CvBT5ZXAduKnRHQwUsCgt9wwoi7tZdUHpC",
  "key7": "5F9AAj2zAy7tmCHg3xFHe3qMbyzjx6aSLjvpFEdb2y6uUKNaMDUCxRsTjVPtce7fzsx7aMZVpo4DcV4utbAzto5c",
  "key8": "2KfHwL9yMPVVL86rfP6Pi29EhsX4qZoiFGZadzrWcsQxCuRoT3tZ1ciKn2gCZAUYMMuTcc1LmwUCBJTiZBKDftPu",
  "key9": "5NiQkgjoqwMyXybpckqrQWKRmHhaRjq3TnfCDHXGaiRTidumQFdDJz1QP5S478CX5DC19VPDwyjpdMmfs8CqvQko",
  "key10": "2ExsKFbPnin59VGGEsLW3kSqbpiahwZSoVSUn4QFtfpi8Wosf4nbh2cG9BWDUqJNotYEDwSsZwDWecpa5NF4ofCa",
  "key11": "3vDe5SjxTKMeCXdFNUW1dNZNgiLHnLL5U9vMnyEACS73ykK7jM6dsPFuv9sXgP7ZUdCvRYMPijn3qazNyPNQ1ZmU",
  "key12": "5AVrGUt8JiSYQ26VfqQRKqZstLuXaJn2ot8jmJumAgYAQs43uDwgtoB4GFgY75zQK87PUeT5TqAc8c6Qcv4UnVQt",
  "key13": "3RDipRj79n8Cj9UPWzqp8u1MSStjQEqeooaMPSuqAMbNNwGMN6jEMGAV1ko5FiMXQXPqUrSSoPee8uByw7s8zRhV",
  "key14": "2ysqunGwNjSRgeH8DM8FTJE2bvXDKbrUz9B1cdjjEFdiYZUoD53CmijgPAMLyXwP3hwXSHyUAarKeurXpLFTs2oS",
  "key15": "3N1NDSDJgNNaPLaKwH8jK6t9SNx8ppC6TWpT2t1xq1ZbYPa9b9cBTnvXQC6YgQmsRogycqHjseAZ4wzQNkWf6uq8",
  "key16": "fjsVCqmR5SMPHVvj6cMyRRmLdhhau6hGC71tSX6hmg7Kji2s1sGmTdBfe6oEBa1r8rdcAfMQen9mJTwmy9jcdJT",
  "key17": "3iMt9tR3X8fnKY1e5vS1frAjUhFXorNEg9D68pACMc2GnKC6Cx4AAhmZQNWDXVqHLZXyYsKZLbg7XtzpNsZqgNCQ",
  "key18": "4tffdzNSoZaoNfKuQTeMsSTbYyZV5ij7muJ5WU5DCjx6QEmTnQMLfDfiHU7t7oUZchByk5E8YAFGt6AePxkQUGFR",
  "key19": "62nbx3zwxH3xM2nwJnFA7E6KzhhQhhucUFsUnNA31hPmV2PaLofm3mNEjLh8fxh6Ts97g2fWYn4DdVz1s6Xggyw1",
  "key20": "w5X9hMQP4iB2ecRfcmbV7gvJrycS7FkwUJH7bNtPLmyHgRqrRs2wtpW1hr9b6qVRXUa6YHuEFt6ah5Li4X1bhcc",
  "key21": "3VfKoMeFu2Uqqmrre7jBajNGw9aBfRajreR21NoBtdNHYXPdcaTfhzPsGW1ztBXRrQvo8gT2Sv8p9GkxV2M6Vzim",
  "key22": "5Wkk6zkKcjphaB5azGnoLYZ4vfJ4TNbkUcEC5qwqeiWhCoQnhUx1rCXjaAQKWEp6PbyPn4oTDeTqsdqLAQEfS3Uf",
  "key23": "3E8jzSgt9bYL9zVbzu3VtM3KfYkXat9vG8jxv7Nfxw6QMyRb6dEDBPsKHCAaoiZhx859z7HhiwZrsxH4rws7B2v1",
  "key24": "31VBujwpiViZBNGnmiCuhbrnuniRdWSMyChLytpKWxdNGpCUPj5cbdPEZoJ1qqyaBdqQ7xVtb5WHnupguhGB5zvp",
  "key25": "3Nu7PoKqPeY4qKAeYcmgEUn1vQkEHkDp3Df91PiWDQn7VzXqSBzLJB7Nuzbxr2wsZ2AtsEacDFo9Tok6GMTBfdve",
  "key26": "3sg5pLsDg9VzP3b7JPicRGvUP8CWD5vtRcEVXXbBQe5XNA5e12wbTA4K4tQqmUbTeNCMVQg6cfSiUa8qngsog1V1",
  "key27": "4DJvPZ81uqSeNwU3NMR7vRHutPU35W2tfb8veBJ6kcE5KrFK2ZPhH7K69iGUSFoFdxQ6JVuksN8h1PbbfiXGVm41",
  "key28": "3QS8rr2jTsJTyuVN4A3BNvhacxPPDKCAu11saN9Snwy5QCyR7YaZJBSYRXQ67MvUWzqB3KxYLpVYuBhD4bftjZHV",
  "key29": "sWWSY8xexCcpW82rtVbBW36sTyg8mpq6TYksRwRQgpZqz8x3zvefi15ZQfPWJ3pzC5j8iiCx47Je8vjZLoXisCL",
  "key30": "456NaCFG1tiRNLFJ8h1WVkD73t5YJdpWNq4dmk9Xu9oRN6CSgNFwrueJGxwPJqmJJBWbBuhNA5QCYGVtZuVTMdaZ",
  "key31": "So7JtTh2Dau5EMD2rfCgzq3gsvf4zi3DuA3SE53xJ2CZ34A2A1MNSjhEgMvJtDGDMFoLQZ1ukWHANM3kuioZ1MD",
  "key32": "627XF4bxyXbR9KbDT4shXoWQXyReb8aFKd1SnUaKhfUhuaxjXApZ6UFWUyNC7ZYKhxhkiciBiFLFKbivtSw6efMG",
  "key33": "3MHd4vGGxrb7kLoVza3vu1xHiehT3h6iS3hNj6Rnk8ZjYSNQVhZRaAwSgKGw6oPcFzJfESkQuqdahcwFksRCYAry",
  "key34": "4A4Gg8xE9ESq3kgWg94ipdefKqNsbcJEDnYGDovkL2UUz6N2n1LMqXBw4c3HrZxd81fHFDB37jskFVHzBh3gSneA",
  "key35": "4TBkLLaJLYZWoggptKZCXKJobgZTcC9khPP9AaPo7RtmUuwRyWrdvcGsfs4m3j9AEeeqJLBNBxMw9f2Yosa8cpnU",
  "key36": "44Q75PwutufSfjDSsPC1HhMzPopnfM9xTAATMT6Rv3BtRyQ7bPtj4kp2SD9e4TsTfr2uHgLQmJBtMPsWak1beKRU",
  "key37": "2k5WgpKCBGK4YjpmvV3cUNKJUDtDHB95fnMZByQ5MSmT7jza8sFKZ6Kkep3i5Y58pPWm4jw6Ca8oGyrCNLwdmgy6",
  "key38": "3sqffo5L4CfVJiCddSJw48UVwAsQ5yZUaVXLwL8KaQF1rbWutTm3hsoGH8bYcxFFKbkCYzJ2WwGb7fPFTp4Db2mT",
  "key39": "yk79bWz31m1w3xGsi2tWJWX52KYeJC67qtZjC4tmXFAJ7kZ5wEnEYRYFZ6DkQwCAayACvyAFrgVMxVCrbmPzrwH",
  "key40": "4qBmVRciJ9kRjNz8vaubziDybDDTWwmgYRiCi6Ye1Q3ZcPCK2DEVNZbokaZ7jusF5z67MjttrCRCu6hSKcnAafas"
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
