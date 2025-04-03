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
    "3Wna8ku5cLGNsp7yCifQHZqKcdemwXU9s5AYgqXfbjmdP9SEP5JkuZEvMiaFa9U5WTCtcJE6tx9NRf96nY6RA7Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWrq9QenWtHtjbgPCWvYYjtca89ZuPbsmuGkVAmhf8FQaCrUqY8D4qHx2pd9rnV8B8bznXjjf362cQkfiXqbyH5",
  "key1": "LBYV8LxPFhVAwtzT5d8PfGmGhKhGtSeuEaQirEKmyhz2xhdhkvBoKTMTfUuRZBXZJ5gUUAMb6oe7S63iwM3SQz8",
  "key2": "43gE4Sd92dhCyZuUy3uQDMSvHSStoHKg7HUEJAZafA1mDKdNdtwAMP2KtDKDLtwXPGsz7CViEGb1yGaWbGiSGzCC",
  "key3": "61fXxSjEwRSmCa6Yq1c6jmTnmw8Ldjk9pA5HYbdnhFzUdbzTvt4o4USSiWFVLfA3WsdiK91ZUdGZYuR2FqWdbLxw",
  "key4": "4MZsZkCxNHhkhT9bhX16JdF59QrVH7BmNpKrCLqndTtqXLAuXYDg3kogfvaoPy75XZ2jjGE9HdG17iTXRLv1aF8c",
  "key5": "2Urh3ztHRbnmgJG2bDn3EAC8JzRLTsZWQm2HyqVygVT1ghGANj7NAvwvEY8n5DENTmEEF9yjPUyScqroDVS84uZ2",
  "key6": "3hCZgv3jPcZeN8bAhxW6FbhMkhRzRTjcMNP1Q3B1zYKarJfVW3YgiCf6EaZ23tw4txCSXMxoTVX9Sekn8F6BJE9V",
  "key7": "AvBdAkBDK8u9wKA8UU6Q45LfBSemeNtrZa2x6VjC7LTvRmt3oDrpr9xhV1b9J9w6PJSQJqj1jkjjqt4MJ2MM7Qk",
  "key8": "3QRrMT5VXStNsV1bqs48215tU8XD6nvSwar8dLDaPzF3eSDC8YyM6eWC3HKWm2NskuztCCiYbHpugyDEuZrnYnP6",
  "key9": "35F61FdqYRyVsbHFDD8JGQgzrNj9jTJDeTyipAGJej6JFtbqN4kAYacxVqt6NUimx9GT16nzX6nMy8zmrKiTK4UW",
  "key10": "2y1AnJVNymJ5AFghYjcvUuYtWkbJWWVAzhYMBDarXog4fPaDYrqfy11ZzHVXu7Jxu8atWKnMajUta669rsMRpxyJ",
  "key11": "4m2eVQZHKPhR1Bi7NxNy6LAjao5x8kAFq6q4WYxhH1P3sp978zmkoG9LdDKyBnmGNtLwayFW71UopvrjrzswRumq",
  "key12": "5EC5Y2qFQD7GEwe68Pve9LZPEzSEMRYwVarqkrg3UWagrhFRAB3rg7F1LsDRpxM71LWopWT8hny6HFkELdfbgdVG",
  "key13": "2PXKwi3xbyR3ym5En61BH2kAbdGPsHZrfcEAKMrQj7WMTnFGj9jjdXiqZ5xnLHHeDs49nCeB1ay7r7suChze6oFM",
  "key14": "4qjvHCr1XxLGp6qWHB3QjCvF733WoCoJZxuJSem4xvVfE8zEyKxJ7QJN1Q1tkKt5ypi94YtJSHJYfHSkfinjd6iN",
  "key15": "gxR36Ck2vUNrhzo2RdSPBKsn1MbbB6yhnubJT3Dn2EZUSEtb3qMLmVjM3Gzgzo3f6ve3sFwwJCTVsGFEadusNrP",
  "key16": "zLBVcBubxr5T57vfHc5ZhutT7xVKYJDE5vdVr1Bp1ED1afymUrX83CGJ1yCUSwrsk8kGUEKzUcXetgogh2Y5Dke",
  "key17": "3mnJmkwkdRjUgvmqAUebsWqLSYCiowQnsTdrv9Kmh4KqnyHf2uR1JNYnRxzN3gNK6GBBmHN1LdHZSsz36HaxdM8Q",
  "key18": "5s9PC12N8Wj7i3U46Y3ro6e4w1n53gBFePSv8fds6pyTdHaDyTSRy1wjzU4vesuGsm6vNaetRt5uwveDnP64zAko",
  "key19": "2t1ra33MD2omNmrUwKaq1Tk6tSNjD2gtvJ47dkXVTmszeZWFRNY6ASJmVWU6FkcyHH8vyrKgvNPUDQK6skKyem6A",
  "key20": "2oeWMH4TmRZn3xX5RkWbPtRnpYn5i8ftFryEEipc8aqZtrumyif28XUvMZSBfCKuvXnDikgEqvJNWiiw57FyzzoK",
  "key21": "3ExXpeaDsszNa7Fr6qs3gNN1q81atDwJGunVXSe6rUtaPdhkT3xEgtjYFkZdZPQt9Hoafk6M7W3cSnRmEhgg9ZZ7",
  "key22": "3CAj5bygogvm1yDU8NCSWWCZXQLH4mUsdfUrtfnAdJBgUoR9k9EcuhbvRtwQbfSaiAADdQCB3jZcjuDa4uQiDPrP",
  "key23": "2qimtUZhVKtLhLau6Qusi5oqM5n6NZNNSF1jDv1VnhsA7ioCtvAza8bz7xd4sb8NeFcR6groKuwZc98E1A1nFNG8",
  "key24": "2g9eW8x4Xzpjbu9FEfrwteChv1dkpUjDXVNH1q7a41W5bMo2NgcvY2osT7SFNYNy5io2a3joRtscg2a28bk5JMKs",
  "key25": "2ixmRb3Va9LYkaqDq3VFaVAvTpJ2iABZkeemjFufCqJzFA7y3b4UcadQ4sZJAGVKB4GAzH8vo86cFBoY5wzMmyfV",
  "key26": "61P8iRGXbgV3FNCQBMsEucUdLXthcSAhnFnuD6dhki924SS37crjXTRzVq24QLeEvqJgzGkEL1AkZ7bTa4qNp6FT",
  "key27": "4UahpsCN2DFdJjiassWeURmsSsVkSV9D8BekCtJN83ZNESLyv89bbbYBBhDGAUjHbbXyCawGtGLAPqKxbA47LGpD",
  "key28": "2dfdA2U9CwDHvnW9WQXs4YXFtX7y66MYb9xX3epuekKp3WNFJnAmYDNE8K2ebRYzKmXC4NgEVrgtqCNmJDtpghLt",
  "key29": "2ovcBUtt6RKmCV2ezdh8Kkbm65Z5YjL1kG2xaumFhXHU889t7QcJcFKrnJ4P8MSqarWeMy7iCqvitQDs1XioVKTd",
  "key30": "21b5gLCg9YRRTeqvzAyv3tfhb5Y5LthM2n4PMzfc1rZXjC53zWatVWfpNCbaCuLXrrtHJeXo39oM8Lxhfn5D9PBK",
  "key31": "51tp4oTbyxV2S6ut8QxVWvWwr6j6R8X7vtXCH77ehg2uEp2oy3eNjeyAtTFk5aZnpiY47u18MWSipswFuj8MxF4W",
  "key32": "4hHxmvcTNBkjpNRG3TAgLGjWBnayDitW9k3Dkf8k1BwLeE837meuhzt4K2izmtc6Ux31C92fP8hJ6aEs3zBd17Ky",
  "key33": "3Bbwn5WQbV1M8etTChm4kW8muqs2vpREuEhVQ1Q2quTQbsHCNanm1QRgtswKi1DrDmntJPJcznekWiNk9mRxYzPi",
  "key34": "4nDwvrMWMfhLKDGMfBTApAYNp24Nq3eAaWsPzKtMc7gadrDVt4J8uVrYkYcsuc7Xj2jL7uBr6AGpLKpTcch8Y5AK",
  "key35": "39fzbAvd2cT4j19akzyeyPhFdBk66H382F1okf9mBYNjmw9HhLSuJGZaY8gjBWgetrFAsYih476qHtEWkTYWTdkb",
  "key36": "ZyMVjkn19wWvA3jSjD8hhTCvzeVqsLGrLXyHoWrT6pC4MzNypZvz8TmCt57Y6XCWrZhiuyWuSoTdn8qjRWVGbau",
  "key37": "Pb6xLd5kS7vhiG1WUbCJZDeWit2oFzP6fVz163PNR1eHu8q1vs6gMeFduUQLU6U7tKDnsaQiEy2EtxPuDVuTpgz",
  "key38": "5Kqdz5JorEVLTub9DbYJ1zVGDfmwCT13fYQ8YYgSaX9caLJJQ1hmE17t18moa5h46gELb63yfPzxAgHfQXzBbqST",
  "key39": "ss8XfpX5wLSAKzc5cKLAmWk2cXNrWj8ZjeCn3fC1PVtF9e8wGQVdaPpzpEZFwMUC8krFhdzAWw99LZshMShSXX6",
  "key40": "2PdT8AJnrJb6W4iFkisfrqxFaM4nJyZ8sdsLrwafkWb1amdeUDWvqvbCQ2CSU8QA15HahFqAWBtgQAYHzA864dm",
  "key41": "2saYqBmnYoWtFph845ETZi6dHsbqxSCU49cJgV2iTQYw61YRCBjAkCoZjutfGVe6PAxwaoDBTdm7cFK6Y9qG29Dq",
  "key42": "2tfxfiK2UDk8jQJkX4vTrtn4FsX7o5DCCkjBEU8A1Ps91JQ6j2b6R4gtYm2DUzRaLQBvAvB26AWRY7dYxYwZaX27",
  "key43": "9zeLLbHg9XigWSNyrQsXFEBqmtoZytQ2fDJZ4ietDkAFxAimP6LqRJt3iKDCd8o35HGAn5eNCDFFUCUkdGKHCnP",
  "key44": "5QEQhPRyKRFNCm47TipF1jzms5MuUbJjExD2K14TtgNXPRqv9CVqFCyUGEyjR83czyH7rtPrtaVka3tu8KZGJEPi",
  "key45": "3b8vGJZ6jd8N35zxqe9LVj8s2rzaDHgSBKPWot3mA31tHuyLMwsBHnenP9PAC16HRA6beCJjJ3YXmcq4K4u2GyRz",
  "key46": "42uo3rfu2j7D3gSNG5ykL4H16rCdiy9AuszGCFhvGum1FdHjXawwwESajkmeAQNDG3xMyHnFcJ3YGvtMahNc75PE"
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
