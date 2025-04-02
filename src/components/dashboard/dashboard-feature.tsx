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
    "61iUitqkTJuzJpcKL5SnNt11yxvemqsSjGQeyJjVQE7SLZWAd97tgpEAp3vLA1KYr5WZDabpr9bZ4kQ16q8DNbg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSMApbRraertvQAz2uqxTLBZia3EFbPP2yLxBV2ZU6HDpETyWmBVA8tmGENahR24xdQJUKEJGntBPZJAKjJGfYp",
  "key1": "4bs46eHRxKZHQf1gLPSxRhLQNUfyRsehWMjyAyWDfHTPZ6g4dVJAA8N2WmkwtGDgpTDWreb19JnG9G5zJn7PuQZn",
  "key2": "5Exqc2jdZPSuYgWeT2Qb5t257BPg1Abqc381UawwZzDuAGcJNjYkyhWCXtH2jZo9Pp7ZoeU3WWKY9F73paw8V7vG",
  "key3": "2kX2uM77crPBZSFRcvj6gFPKyVZJXcgeNfJSVNFsehivWuwHw9W9SsGYEVjVG3r88MK2LuNimZHhbp4bwMfVwr9t",
  "key4": "1cGwrjr69nHPjJT7g8wZxta1huZuoRQ4kz3tAr8833FcgBcArdYf8wknaBgtRXQxwdwS2wkYujJnfkrRmrsBLU6",
  "key5": "3rZPyfuiJQ1ogCxw9Z5BTENMhcd2XNPgD9CVt2c6MVa7TCd2PF8E5Ejxuoo1iewghcxqwRqe4AXr94aArpdMvJFM",
  "key6": "4TVKrnMFZp7DjyTf7jYFabpZN5QFfDPZu9d44yeBK5S7V6LzvnYdAnvkzkRmMWFUVrvT9nkdL7XD4h4ex9pFRbE2",
  "key7": "38Q5Bt74ApjEA4NTmaNz3yKKottztzdx5LTZoXburGhBzme9iYz3q8cK9GsAVuyEanHiAHbGoL551bU5CpTeLQbG",
  "key8": "3KbTPzNSigdqTu7KaUPFq1duHWjv6JhyXsa3YLFiwhrKegE5uPB7XCwWdb7ZJUjSSN8psQLxEBuNaCkCQokYPvi4",
  "key9": "3j2FV1QpeVuPeHK7zaWoeb94GDpz2K8wTcQPXKpR842ag5vb5NRupA32cvDaGmh3AeC1Q3FMwE3B1fJRoJirE1G6",
  "key10": "4LAtzyjANCPZ9h6xkGstyTH75YU1jSZ1QAYHSjXJu3srh3egUPRjYiB9N3tEKCppzcoPpgUhiwvUeJYeVGwK2KdA",
  "key11": "5dKmnkebrheY87ukcRy3cEwRWnDnxUXMBqJPiF83fLBe2Mp3a7Yt8k9m73F6HG6feQP1egriavrFjurk5dq8ZCQg",
  "key12": "DLzRMoCz96g6DEDiZvy2tBFtRj4p3QUHT4CZxaofEQs8wcXq6pGaqWvN9T7dp1zuKsvdrKZEvXoseucymbc4nHP",
  "key13": "3y4AqbWP8pQGA2kWK8g4QqZCPtXWvhQ4LykjNRyMATV4qRTU32mEwRSEDu1tCHgRLK7ythoYw4GPa1f8BPx6ynA7",
  "key14": "TG29riRYXsTNDMRiL8VpQo659z4tH2mW5ssw3mKdAUa1DUihgWZcjqp9zKJJHfFu2uThVarhTtHCELSvbbaj7Pd",
  "key15": "4Z7abThff689sm9xNnB24VJPJWGDbx1NDcZhzF3aNpucajNpP4GyR4MfaUWzkCW6E1MXGUWoomt2218SHxpm3c4",
  "key16": "3KmvStwfTRwkvuqEuyXXurLCuV7tNZq38py1i4CZqCpV7oLUFLtgUCpWcSV5ZgBNFMN7ig3ihxsqhf7xe21Jrqu8",
  "key17": "4aWS2dnAtxe6EPhH4EL8HVbmZq4AoNSKN3onLCw4jYrHXvLY63LdmMjUebFSDmfLBALXvMUx9oeancS8dPxakZD9",
  "key18": "397mBXC58NzXfxePo7qdZGsPnootGaeMhH1pYVLmEELg2RZDnB1qq4VhVvtURU7s8weBw6akygeSWXhRQTa3hw4P",
  "key19": "2W9EPZ9WqJnjrJtcfGYEeKmfQxzVXeD4xMvvM7arPkD13GzcE9eHbB4etz5UMyQxfkFXc3B8ahRRVAobrJoJRcTt",
  "key20": "3ZWEEcczogi2PrXEzvRAv8WkesunuBvFYuncrNnHLFhymwJRq5aVWvPGf3F3TDvBywpGEjJbqz1Pemi41Hzf1BW7",
  "key21": "2zyrzh4nmwTyVoC6jjY72aWcuRZks2xyUsPf17Q4t2aXfHcYW5ppStb8gUMUrq1UjbDZxfGFZHsKyNEH3t33L7W6",
  "key22": "4Vm7snznRdHkqQSnp1RiK2Pbo7uL1gumFuiFw7NoUdRnPj9bWLdctA48CezrLyk13xR1YyzkzTZXXwQraNusSDLN",
  "key23": "3bEax5pMXTbsxTewtH4Zdx1rVdEf51oKKAPAGP5nE8epXFopJx2Bbu3fKpMxhqLQ9i6EaAQFWCj7jWWst7KXZtXc",
  "key24": "HGHxgCeNGqdbcutNiMSjT2fkDtzxi6GrG7e2bipqd4as4yGaZT3KhvATdkehWSX2AzHhT73HhKCmscs7kr9de2w",
  "key25": "4ce9GUbp65nr8snaokLFh9g8yxaKPQHzv11NVBSKRVK78vTJGLYKpyFWWX48coKdosBNvKLHy8zp5mjhmP8D6czw",
  "key26": "2ykutKjeyQNWzrA3zAgEF9HkagczygRmEc8Xa5WuBnRWLuQR1qd5kEZYLkUeAMgBh6dnCpupvdp1q1jWPfjRLeV8",
  "key27": "NuBt2hxsAvrjtNqSAvF3SozpigUp4CydhpQRidyywiRzyKrAzbVRRakWe2F6mkXHZGo2TRshzergoXzXwQkGEeG",
  "key28": "5JJSM1ckhoS6JveaqdjQKXwmoJ2wBNBKi7aqWssRqHcbYRtVmy1HtgcqjqAzitNYMY31PEso9HK8FTg856iVafnX",
  "key29": "4YELTyuvVQxzh5NXsqdB7VmrSykJWYKFCnMMtUvCr88ZrKBugzS4upFBKi13Nq7Jaba2VM64gCoJHXPUfGywAfos",
  "key30": "4mjmbfNXeuKMvZW5CByKwLCafCaJDtPw8Gp5vQFEWsuHQ8neXfjDfHLQXy5W18CP6C2uCikweREfXdAhePNaN2WU",
  "key31": "3MYAn6p3A19z4c6LfriD8oNmscRfbBexkuQLeXRcte4eh6Vfk6X3cX8Cj1rwypph5BEXdVyCF62skZVW8FSTai57",
  "key32": "251xSf46Ce49KGX2sr8F3YVfVC893tjRdj7DLnZE9nk96oBnHc8e6fLxaWpuM97fK2AMXG5xysbhRn5wNCQP9kv3",
  "key33": "3qTUHxySXaQYDhnD7HNyvRH1wxYQik6BRXDB2umrPKnfHimJEyAVkB3bruoj132k85RvBX61Q6UREMfLtNVdmZMx",
  "key34": "5pGFBDHTEsTv8kzmX3nap9WbXsdgvFf2yTjwbe5aguF8jGjXVu93KwW61PVJDZU3ihTSK2Jbsf7esFqyE5BjP9s7",
  "key35": "67jvwgMBEdm8rqWYYbQJSreKfq3dq8muoxk2k5wmBFDNzFjEC3or7eDa2CgGrKRfR6TcxgvR9EDVScHe5cr2Zj9u",
  "key36": "2iLnbDKm65usKoACQJhgtyNnzkCSvKtuD5N89g1xTa2BUkRCS1CiQUg66y7ist5ELSX6vd6uhN4ZjLzGRsBhmRap",
  "key37": "3g6nJaphbeEmGPwEV2yuTZ8GqsoZbEGHR23sC7W5Es29s2WUXPsxbUJSCjyCyR2CNZivZ1PGUcVDhwLiej7YFSRT",
  "key38": "4YAyTU9bQ4Jt1czL6J2fkZUx8WcjTvPCZNYHLPrsPjXwR7zFJ8V1YpyjmHgVGvLYe99QCKs9i4m8wfo7s2jXA4zK",
  "key39": "5wXYAAh9BQxpi1DgzKrqQVVGaFNo18kWxQXGBRoJnsSGpRc567bKRzq3i5ooggQvYhDGUQAdpk7r8LUuRvGDrEMw",
  "key40": "5BKs8eDpNepohFtWQZC6KAcBrw4yNQWewKBZAHyYJuDzJUSTYoP1LiXkrzUtu5jzH7RLHvsvdbLZstQktMDifot1",
  "key41": "U4tpPfYjWaWgWCeqhmQcdXFV8MrWQJqdrxANb92qQWqyxoLrKUbWaWDPGhedwoMLKp4cgP1sWV9SQTZbQyRpBEZ",
  "key42": "4TsBiw5QYqh4nZggHM55SGc8xxH9vqGspFykZ22thUumnubVLJ5pZHFCsSCcEGikmhrEYQB37iX1qg3XXgnzLmvh",
  "key43": "5Wr7qoYFzT52FKKfRoCaGG9UtKBg4YRZLAQN3vH9oG9qCK2QK4Tnr8c7Waby56oEQuQCmoHoRvSkzLRPPjjWMJ8j",
  "key44": "5M7TzCYiv4yyJSRknGN8bJSLUbNvwSXPCAW4euRiLEryhNZh6ftHUUrkjwUd3Ani9Na3gXVawvzWbxBwhap43VoW",
  "key45": "4QEgfXXzo6jAdsAYKL1EFKvNvQxwuzVAGhwMp5iBT5BpL7exwiiAeHqh1c2uU8tzjGccqd6i9nBiVSGWZHzU8Sjq",
  "key46": "4H7owiXdEt4Z3to5KFcj115NiNzBDkHxNtCTjohCXhERdQQnsf51CK2vNefrw248BNnjB2zvhoQfbswh3EgvewbE",
  "key47": "2Ss6jjKjBxwTWxD9Aubk2vHXP1FiVXsC4Wzu4Bd3L6WA9ek4HVQ5kZb1gzc83da2km8kJDzivA38kC4E9R7jRynA",
  "key48": "2XucCjDCrNGCjay6yLxupizxPujvR2vc95Uuba2fmpj9w2RJ4niNb9TiV3u6cPcqxtjwC9ZZhAm6CkAcyNdWNeF1",
  "key49": "LzxkfGLSBnWkYKeCL6mjE8UJnFZfTRBFgd97iMTykMY314xTkzcrUkRWZGHRPRBBxawH2CxH9zCoP4b9aC2JfaG"
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
