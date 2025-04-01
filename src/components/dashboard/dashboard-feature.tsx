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
    "3io4pAnrDWrpQgN76uhfL1wFs4AEB98F7m3Up2od71NtUzK2bwo6UPREcJ5CSNB24TkW26P7p9zNnjTVdpzWodpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DTQnG9kcGXBbjycW874F1vB9h7oJGvC8LQXA3nqqF2TJ3f1nXie8zvxVWtyb6sxAqKPTYP97fiPe8yMiCVHACm4",
  "key1": "27ugCRwmhZU7M6sfQAr5gokHE7mDpfmVDHVe6cxNo5jXYedEn3zosfW8d6Woa2y8zpnwGw6T75GRhbJdhdDJFm3U",
  "key2": "3KRwYq2YJfdFUUdJj4dDGYB5oX25bouHRFEKN62yupftRaw2a4caMmsjifD9pSwB2L7Dfy2a3KbQYCb3F77uy73E",
  "key3": "2sk2LdtpququU9zCD5vaEqRnT15xqMtSvCn7dqxX7gT9ZZK3dhzkDYLR6RaPEU89D4tBHuEAgu4b8SSsBEkyDAM7",
  "key4": "5uVwwtRTVECALcr1X54Ygcv7jKRTkRamDNAF3ikAV93fV8YtHgJ19Y2HqpCqRnxagrfGCkEWaZK7vE4ijv8ePaXd",
  "key5": "4rkpYEuRDtdL3mA8FysY183cg2mnFBgGFzvsbuEVmBJpiS3Wh3bEbtmnHR7xR1H7MZuFNCTqYieTJkMUpnoXnAbq",
  "key6": "3hbKuSbZAtf5tozSpj1mcLWR7hGAkPBC2VYtXZHNnroBCyds8THZgcNTX8YrbSkf67rrkW4LM2eAJYihmFRXoFwF",
  "key7": "gx7GR7tRvwBS9ry7VvWJgs4Fc9QXTx1kEcvCZHNrvpksY3LFAaqdij6YTjQhxxzN39tAUmAfJ654dwcgKXvGFe9",
  "key8": "5qAu2crPhuQwpXN86KxLvwxFVnuMkPV2BAtEZkzQoR7iuesWF13bxBZrVwaEs3HSWhNQWB6PcEXcqdT4az3DKE8s",
  "key9": "2mBFLdhjsnA88p63vNv6tTMC7bpRXqMPwa6CAm3cEsiji7BdGSGsifzSFYzy17MJhMaURuE8od36RMFb3LdM9L5U",
  "key10": "3ZmfuX6T7sLsFZbdTGijxgXqswmzcefDk5bAe4SUWeSdBwjg3t9KYYJVM3QDUZ1vMytgYy67xYUVgiKHxAx22V42",
  "key11": "3zqweifSfRjWGDCmz5VNm5iuj6K3UZK3uHRjoGeFtStj8a9kSNkcJYGmP6B18ix3PAKY9x5Nb6eCJUBPhcSfcPdQ",
  "key12": "29YNb7XYLSHrz1S3VPq1ojDHyMf2Mj6ihAVyy6LtdkqxLjdVs8V2Z2gM9JRxK57rY5PxmSYv3Bo8eMEg9TkF7SUF",
  "key13": "5mnM4JYYvn8wtpt2T2fb53pVE4o5C4QkncQte59h376wqgrrw7UAvRzij2k46AA2Njiis1JLqASuSzEtq3f27aRw",
  "key14": "5DmWmM9nLQU7RiPpuYxWuZxKDENXGBmxk7B4XGmqFYriXVuetdrpAXCctK5MAyjvz8GSeNf2foFxBNxinhRC6ZNu",
  "key15": "2FDDvy1CmNsvE1KamPjqoeSvMTNP5gUf3jkaFXVzjxQw9e4twjdQKFGUZHJxHrfqgouXwM44bmSQRYF6VV7rgSv4",
  "key16": "2Pbu6cETLKkNBKsAPPvY8owH2JXtnWt3EX6eK4uvDh1z2uTpWk6kvrB6pRTX3k9UbveofNGZ9RyXhjrnVPGM5xi",
  "key17": "3zp5CDfNaNWAe6gyNrfwQDd9GA5Qv38UgnJEdvWa1sT2yZXhEUyDXVzrNC5rju4GFpaiDGQhFM2vp9ABPjGuXBvE",
  "key18": "uiQeK8xyc5FNXkgTkpj69ktWWJ1wA5oT5AV22gBUKH1jwvyCTv9kspXi8qN3gng6B2zha3w3t8haYD23DwbUwJR",
  "key19": "3jPmxsJpsXd1ejFDsPzv5PBAKKggn5as8ZEvDjufzzi8LwjiQLc9GDvqXdEz6YyJ3ADmsJXQ3fRmJTjm5zT3bDwm",
  "key20": "4PfJAQvaxYYx7QXKhNmSZis9jvzAJo6HU2BFMpntFhuYPuWxC2bFTEG1tLdmBQRD4haWKvqnuSGfyhaCHNDYL74M",
  "key21": "5DLuXsL6YmfVFj9uGw9kNQjWEcbo2LrLuEqTJwkgvsMYTRdy7hQ23VASJLmVsoS1AYCPT81WEc2zvktmYsfkdrb8",
  "key22": "5jRaGF6QmZDeD61GnpcAELgU4A4apEX3F8c29AoDoWxXgfwRXX49cKJbbXdrcR7hGTeTMkYy6fit5p4SaSUZnujm",
  "key23": "3kGxNqXFa2dGD1NpW8eGaJGEm45DAtF3cju5Egvyt19arbnEkLAToQLTzUhoUemA7nCuZaynjvjhxHbyfUGz1n2U",
  "key24": "2TV63uLvwXW7fcoAXZrF71b4T4TeWRAcjvQfk5ci8Lvf7ZRPNqgnRSRjeDYuWwYymNHANoMZ1CtT7zkBP1rGQViu",
  "key25": "2r3VL5LAWeSPPfDFwzkLiH5KzV4KjGx9kWSddHtZA6Ymzitfcx18gFHpF691DnniqjX6JKhuwgkUJqVHkCxg9Ez3",
  "key26": "M3EKVdKR4mKC4oJnqwQkZc7rrRKmDKmZfCZ6oy8UYM6exouUnxEmg8uM1JpEembNSwChFv5bA7WwvimpeT94NPs",
  "key27": "54kmVMUkGV9LCA9M5XSGh8VB21j9W9w5BdABtWvNdEozzp9chzacKcuu3UQwK4LXoKiY62d94BerV5Bb5MCCWzrx",
  "key28": "33h5osLDJBPyaRUgmR5nY4Ccp9d5RKKS9rrWuyoyD6kLzpYdyzh2Pbk1zbUh6pjt1G1psdx97qp6iEcrmdcdTDkD",
  "key29": "2u81JN8Zu83cLBsg1bJ2e7fWj8q1TfSfbXa8PoGeyKU4uoxJMiERSYXHn1cCiJXtHKa4HRs5TDcR6MqdifmMzpq2",
  "key30": "a4ypmng1kKAbmg3GWnjYWkkNgMruD7YC7wGvzeQD1FafTYJJDPzi2Acn4F964KqFYJNwDgxviZyQRszNHRougMS",
  "key31": "TezYr8uGeVnZ19ZSs5AKmMQMkDr76WvZfxPP1gUovmyc2Ysco5SVm7JcaZdmRLTyMogY3qbPZpZXZc9z31J8d4k",
  "key32": "DksDv8wsz8ka6WubbtawXVdEXMGFC1afagG8FNTXtshQWi6PkgZiE14Caa5GT867esHvsJKnBjAmvHaQCcBQui4",
  "key33": "5hNsajRQrQbsEa1meuNJp2szMUSH6ZFKAPCawoLLFGX8f8BZzMgNjh4YZXGMgAWJB7YigrYaY7CnmEuskLvTJKLp",
  "key34": "3LYXph8jFQRssQMwfJAXx1nqBqkPydC9fKuQcs6LEHhFJ4cn7gci5yTD4U7BzeGazSgVBKHdc7nPxE1nYb1bFXcF",
  "key35": "3VbTXBKRv494LNtnsTES6hQkHFzbKpwS4ckSm9LNGDyytraQstB4SBFANpArQfH1uc5cDuFnx1SZ8viDSoDdVsYL",
  "key36": "nLrm9ALg4MvUU1simW2rFhik1b4o8ZvTTzjtCzYdQVTqMdkzREk4HivqzeYmKcVv6TDkhwjFccpi8G3TiKB2Bhi",
  "key37": "4QJyX3TtjFBmAzJBbBArUkadFP2mU5jdZXFQJevXh9arGHw9djvBxrud4L3RtTjG7feBYLMFrRpr4AwSTogbhhnG",
  "key38": "UsySkK9DJ1FhTBX6zwTdSCZQNs5zP7cLpH8AxPruPF92h2ZrCqXFywR1NbFiYMk3tcDfB9hgWspmYDekjwyNda4",
  "key39": "3cVXUc9u9oNyXpymtXTiahhem2ugGbZ9Q5YAjdT8gjTkw3hdhG4ZBkh4yPvnoq8pgbEUtpANzmWE3xNSEThvGLyR",
  "key40": "56vCSsd3SZX24d2HmjMHWHm4E9QnZfxf1U7AEkfawpBtJaU6E3SUCaXQEda1LcbsTS3ToSxBVmeFUCAR3KdGCBqm",
  "key41": "2sk4T3NyNM5iq6bzSXc5npVVkRJe9mwHrbq1Ff5ZQfCewxBu23BLu5DEAhNBjd9pG9TG6jcKi9BiwYR9PEhtHXX8",
  "key42": "5QFzTXQeN7qNsigvcKKfC3nw5PjyCvCSUM7DTH4BWXGU97QS9gXja9CUxC9mNhfPFNbzi8HcAibL8LqJgJNDoqkJ",
  "key43": "KtpKZft1vmEuWeHgwuj4SghGV5JaWejvEqjYAKAm4u467UBYDsGa2KMKTJ4mRz4cySmJwcBP4PD8hoFUkPkNAig",
  "key44": "4JwJK2fxYKLAC3rXNbvAB6PPFxpoJYnncWBeFeYtfK4D4SwUuNjVk2LEPnM6cLoqP99YG4eY4eWyCC2UQbtUHGBL",
  "key45": "2t9xWrYenybug9vFyibJnm49ArHDcyyvpSSqN4GcgZdUH1CPae8cbEuWUia7SJr6JW9pfL32yyh3iudRr3QTzgvG",
  "key46": "5nFoJrrabs3YEWPLEFcXKqRb6nLAnmdRnYR2vFasVoDkTb3nos6ycUoB7cskgkCbwH9fYp8T5mQxqTXutNUzbM7t",
  "key47": "3wqVNkmbE83DYhCA8MFs9CEX2UfJpcqz5FDVq5Pkxt2PDn2fKcanyPcbDWgiujtbncVMvG3AYEf51w8Cjz7zaoV4",
  "key48": "3GYYRVRpp6U58vUCQEkWhrLBy9ELfUdxAyj7mfQ6PtkTLx8KAqeKRFQM6ZAM8AbxqadeWL6nBJn6hp2depmLdhpM",
  "key49": "vJZz2RnZAQFc65gDyWNhGo1mKHqztvyAeu3C3Yd8G9bdL9dzvB2HnN1Bu7Snqr6iiTa4xYoypKgj2VFCaW7wSgw"
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
