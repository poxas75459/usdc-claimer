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
    "4wqDoxE7dPeNfQb4Q1zB2Km7gyv4TjoB5c6FPZc3f6oU5nHwDDQe3rArHYhNUzgN1gNSg7rZ9DfecaEes3kW2NLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9P9psdkqnXsyyes1eftZ2NDCsAVv7ZrdoQ97QqZ6geeYFSBDP2o6Yy9hRWd1PZnCgLsRNXmyHVtUEz4rA8aw8w",
  "key1": "oN8BrF2RaeNnAo3tdjugBNRUzbUQTdZR3VHEA55F4oPk16AfqmT2LSmHrojD45G8id2nC5oKdyNhH29M63vjwTL",
  "key2": "393xjhePXPCyBiQDGTNPNeYQbZHUuNziy3q3XnZPnD16XZd9GNXmibU5gnHritsAufNFWmNJwhb7S17nV93YEr7s",
  "key3": "5x6mT4QyMfxzHezSFpssw5qEHbvtkrHaYtv4euoXXXyPhp4RygnGqZbw1aH1bLLhCc7KJxNyp8nMPCcgwHfn3MKS",
  "key4": "3TGSjW8sx6hbWxgjqZ3cqVPWWdbcq3KuzzoKa1giMkg1grGGvLrrDtMsdRDQFAeUdUjr5Qk8XhNJt73tWwjLQZJ3",
  "key5": "GRnSe81SfrE5aMctE8NH5ZDkDxQqW5wmmLipnF2N7JkjG1P1jgYtUzyM4w8vBokeDiveEqajtxSxaQiauJUYiNW",
  "key6": "oF2hQ4RJC7NrdrRxddVjamQEXURNHAFBdxrDcReGG3KzMEPbVKx4txdrHmn3Wfp3g4BEvub2MCVX9SDWRunaTW9",
  "key7": "AtHupG3P6BK6pdLruEucrxn7dhX7zg1V7XEexd5cmY4a5z4JTYoJP6ksiCDvpYZoEHMDV6QDeTs4QjSRpQpw9Ra",
  "key8": "39U7LAE8LULRR9g21tNxPBwnvRSzBa4847npQUM3o5gZQrDPFq2ocSVA8ikHekhaW6pejC9LmDVRUrXoYoRdzGVS",
  "key9": "3KEHcnZkZHG1oLLxP1K2RkZV4GN9Ni369z1AAm5BNZs2TixDm5e1natn5amFyCX4J5epnoC2b2GvKioU9ScqZhiq",
  "key10": "2i3rFEWhFoT9FgJEk9xsCoUq3eNd6485TPrvT16f3JUKizAaFSaE1C2fVe4QvvegRGJdF6xtAhtHGkqZLbtwfYpC",
  "key11": "5RvayTPzsmoRYo9zswpdTNgoxJSpPZfwZTLQGGuN98u2LyDEicEzAGBQyqR2CUy79gLna93uBqXa7mRMXMEjvEJG",
  "key12": "55kEUzdGSaHV7hgeAKVoTGocGb4sNTRo1mGwP4NyjpAXjVkSZS63sUAd2B9bdhisSUrHf2TuPXfWkq2EG7Cgf4i5",
  "key13": "5Q9YPV1gxzSDvw2WBNEdBayJ9jjYcbjwoiLYVpT3vPkk75ZyXjgAY5aapT9fPTXVhuYsjcmraM6fDmuC5jRfbR36",
  "key14": "3oVkg21YRMEJdGfhHrUQcgegUFdJXWNYKvqf5yJtCZ5ZzSjGm8PuTpx1Rgqon6C2CVasCKwyhb1Aktbpa9JtSPVc",
  "key15": "wMTQwLFyZv5UiUNWv24qTCtfvmeqSemQUdcHHaEHLVL2Cz2FPJYuLf2Ynaeqo3xKLp69iQxno1xsvimvgkGeeCd",
  "key16": "25PaZgSqekG2pc7Xr9iFhdk4vWmmjQskGFqmdSRRZ3xkE6GgMu3sNGLBYE4VojGnZtC2WN3YxrfYLzTWfkesy3W5",
  "key17": "2CSm1eam3uwKVKsftFeydhoEpbLB6TQrXiuhTK55t7nvVd4gUGUxxWZ4b4G5s3Njg5efPbdubevvH3tRdb2CxnnP",
  "key18": "hBg9bAZ2ia6BX1VM1i9xNoXifJjwrM8H3fLf7kz64Dkk4Kfm7CZx6tnDCLVjce51iHyKDZuAaLTVZV6E3JDRt8i",
  "key19": "3ZHDHzjo9cqJxWgA1pEsWM7ywrc5sDiuv4RhKNMtJJaLYf5iRXjR3StzBrN7LxZ3MFqwEf5USdZn46akswSPNNfG",
  "key20": "JfMiSRwpPmw8yfNubtoyGfJcvc8kNid1gQEu5JJRLGme37ckExyDhvdX6tEkGVXcyJHpXZqpsPW5nmoAP6FzxBh",
  "key21": "2uY61pZ2m4XfVGwAXm9jB4MSJLrTG65W9LwRjV6JHQ4mLbXoitnS2uqjdBF3E6by9zWtA1oCbvtUPwhfwLKLV3p8",
  "key22": "2rbce78t4TZVRxEsxF95TqRWAwUdPrhpV3aEBDQpjDX4DEhW9poJP6HNNMHqmVsW6jey2vLtXaeAhe2ioP7SUEX",
  "key23": "3acywmdxHAmqASq77CxPCaaSf3RbmzNsbE6SzxaRe8CxcWxyk3ouLC5yNCFPm9eg796wFV1ePabw74GX7VYKXjnx",
  "key24": "ZmNG9hcHRkr6EN4YwN62W4puZgtV7sJ8t5g7htoGcZoj4SnfwhkVFrCrJyNSxDnkfZjAWzkuCrwnQ1CBFnwRNr6",
  "key25": "2ZzE1RWy6tR2puRDQFfSZeDMCoEX5F7T1uSsvCQWPFnMnmyNgNGpNeRqNCBkV91FQdDaQKsDbajDvsCgzxCsUUib",
  "key26": "58eManoc2yKitnN2c1YyYQbQfaThdUDCo1PUkV8ZK1Sepi57rL6RAjdTYJVAqcDWm4H92AhN71pDXjtpjbpTBMV1",
  "key27": "3YXYVtDhp6FTQEVejKYiZgwmGZAzU3iXbbdEXSD83jieFH6xWHHEGs1au63VKtGMZ71FANDwAPTPYFTLnJAyZsnY",
  "key28": "5hSqdxrqs8KTrQ3UXw9xAZpm1c4qCdBU7zuW3dLtizEeB7Rq9NfwUNMPMrTqVbaaEDugW924mJXuBMyhok2hsmez",
  "key29": "5ZDcCWNMx1QSp96hcfeuf6hWPTWtCpc1Fv7C4F6PLPqyJq6RYqkaUXVVPbovmzQ81uTCxFggC9jzuWYtaKD9xjkP",
  "key30": "3CXAJz6Wfy2vUvMhn6UKLCvgAFd6aeS2jvbWucJJw97Kj1BfbeivE6HHCrdSaof6v6bhEQVZrY8Jukyg1N1znd5t",
  "key31": "3JSGBkAC27NuZNNmcZD3r7PV5ee8JiNUu2zaRjb69nwoHUAaRHZMQM1ajP2mVPL7hajRDxmw1P3cGYArF6DyGEH8",
  "key32": "279SqNzxBMr28KeSyCZmsix9Xgz421zxyqRXu4sCWZbjzvd6p14SuJQjBjwmyoQxMVWPyxrTVZ99Qv6bbg51Dy4b",
  "key33": "3aApaxssddorc17GPMgW2xEiCHBoAzhctnDjxxWaSsaAD59CPCgFvSJfsj9c82KfJEwo9rAJUvytFYEMD7xMjHB3",
  "key34": "9jFUuadtFr8aVyLohFzmdTXUSTwkz8erMri28zJhUcgr3ab5jsZqb5TM5LjDHDF6AQZWM77nbvNgtkAGD5tn9BQ",
  "key35": "67NK81RMpJzCWzrgT8ZhCEnkg75ttH5sMqGK2HguYy9Zv89nD9BB7njHht6KVgnnfq1zXEt62omcSoCjWRdppZ3T",
  "key36": "5a3ZearYJw9FBMC3NhEbdT1HZ68vfruGUQVXj5qWkWBXQxZ1mfM7JSfxQiEKFQbBmZv7KWegcF36qchZJRbMnE9B",
  "key37": "3bTXBUaWkikXARZn3TQEXa9FprJjsqpcrvBks5bgNtqHSY1kLZpPphcGS6zBihLGwf1jdcAP8NdPHxA7unG4hx3o",
  "key38": "51tNDsLe7wUfHgFs9iv5LW8MgRByT8X3yHGnGXHvLseX2YP17MrFUFHg725xfKFJsg3pBhAbnSrHMZ6QtAFS2Zrw",
  "key39": "2xjNwicBEeH5hyyNk9qtRHyruc6jvGq16h36D1jVZ7dDoJ9quv7jYMKB6Mdx1D2gC9vBeUUgVXVsQXnG9K56uyJz",
  "key40": "2XMYDhgv2RMKf5Py5rf43vyvXhvaUaDXQLaheUeD46VbAortB9mLKurWXaWJFX2rSLgwfcCMvZVyNJsFnhVJMFgq",
  "key41": "2YEz52qHYyMSSyFXX3JnT663cEFtdPYa5n4DQUjYpVUt7jvfHPMk94X6nhMY1bPZS5zutafnUTCmGZ4iTETX3ULw"
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
