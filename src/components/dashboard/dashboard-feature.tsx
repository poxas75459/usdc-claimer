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
    "3ypx5wLgK3cv371vxekGHq4zMqfsyuRcZfDjeBhaQWrvjPvjjz3uEMnyWwcNBQbqUjNT8G6wkRW6jVEUHjNUHzNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NunqyJueAgdbyNa3FL2RDLne4eyGEVcwP3gU9xRiuriYQUi6KZAu332yCKqrJTNWhYbBH7oTRSpFpbnhsK1jgss",
  "key1": "5z3AHHSsK9DVfzykeDtBAfBBUCdubJCrJYxAX44NVmsxqDziatL1hYNe7soREfYYJJbkb3nJHNMGBiZcTm2eDmNe",
  "key2": "43yxa6YAedrWsdpMopp9f8VjPZpjKAF1bgA3WnZ7iWkdKepmpw7FxZfU6fUKom2XVmf874hhCekGuKz21zAMACvt",
  "key3": "3nLhdyJ86i9D6VbZnLx5kbyExR3pNVK8QGcUXQxen6DdKPTL4QUPkEWXQDAG5nD2EdpzNdQZWC4Qm35ZgqteWNaw",
  "key4": "5KLwmEmqaKHknpPAVuamXGqG2XBSJoqsVDLnGJvcJExj1LXFY11HRWrXBh6ywimqgq6UYpUrnBSMhQs8SLK8Bxjc",
  "key5": "oj3QBB1XAsxGDz6Yw66REGWXdwQYsXUp5SSLC7gFhgBD27vLArbV2bZsWJbGMCpjaqHAryk4C6wrRZ1AwxtDpGz",
  "key6": "4cKh8RteJqcobwfVNDLvBmBF1JHyEFC2mGPU73nP8GwSnotspF2HrrvtY8sz1NduznE1r9VdmfvgGtJTC3Exuo5H",
  "key7": "uuPk2kdBBmWVkGmevUs7bLrq9WpuVP5Vxio4A88uvMeCsqkyiCsnmj918wjkvETTA6eLiJyU5AzEiR3V8dpHvdQ",
  "key8": "3GE4pF4yMMWCiSYrW4dwjPBZScbdZVWpHpsZEP3twKCSsy1VZZxtwSPds6MYyXCq3w2dQrvSFRrwNMqidbbjEZ2X",
  "key9": "4kdgWcnLn1BMaznu95AWK2rTrtCFuNyzFKfMMUR9rdvRd9FkmPFtqt3fR7FCwz6TxtQxhnGzDCuqU23XXW6zPf4i",
  "key10": "4w92xj9kFrF6KerC5pikkk9j4qCufnFEPj4u2zTRZPGrPf1zfPcE3WD2DspoW9WcrX6A1yUzv8hbC9c7HZJSo7KL",
  "key11": "2pMqsAvMr2EFRYSUyvW78RXnkWQc8SuNfcwUkEnidfzkWmfQxBt6oLYQeMCKh9uYoNzDxap458VGzx4MPvFjgAPG",
  "key12": "57DSNEvmnTj9ZQPLXSAvuoFZj5Z14Gd8nJqjQMQE54yCh4KMxtiKbWAFSSv9nkCygtpXmHzXMLcPL8xpZ9vsJxzy",
  "key13": "4gSdktbPHTch7s3zQ5LypJw3LneHU171QqSKCa9cHPbTjkRUJ9wxKnvfDfY8DCsUxvMqYugXbxrHtv7vCU5gTUU7",
  "key14": "24GvdSTHHXf9vur6HYMeZWL2TFgcNS1LzkoHRMfbqQjt1B1gkY1YWaTb8szgoDMYF72g7AWLj9EZpqjUuML7cTyj",
  "key15": "6335dFbAY3h1pDXdtsfvA1Y2Umr2XyAyugc6Q8zwefDF4Gxg6J8K6nwThQr1AnDHyKwbo33UuqEHeLKbEUi7JBtz",
  "key16": "5LGtrZxaBA3mD7Jf8KffNArrPneoyJTjTetRxfCKeEnmhaCrAwF6kvze27jgNL5qHvBzAmWVDz1kfUehjdEX3qeU",
  "key17": "5tZL24yMMJcetKmnqfAy1AGV4U2Zed4dmBsArZZMM7ry4ynhHMPLPm9uSggGhZX8SbmchHA1EmrtsvXiLWCAdvqX",
  "key18": "58Xo5jipuUiR8H6AggPWgpWANFn56SQoULqj97CfjpgFrWVHVLaRF2fotK5p9hVij9iy77QP15YrWMpk1LWm1sBv",
  "key19": "4wAhaxQ5qMRWtymwPFMW3t1GAkNr9TFqwCfkFEQp8Pa9neRbRhsHxbDUi2SQBL3Ej7iJQ5RxSus7V92UZma7abaD",
  "key20": "3gPfBLFTLDa6WXStU1CM5E2bvUSa7ceKjnH5TPeyfikbunqNkPWwQiUZsv5HNUwJMnrN9DDHUhVZgB1K91in7tXG",
  "key21": "QvcVv3J5CkaT593mVy9gAPTEjYiJAf3qMT2jXJMDEGUPumrM96E6gK2XtowQpJ8UiFnSPBrmcwJg38YzyWpCBex",
  "key22": "5aGSarB3c77h6UqQS1zP7VLuKpNrKpn7ZefQWXET822zhjLy1XTH5tY46FJvtRJsrumSTZGWTLPxc7mBYwarntN",
  "key23": "3it3VJfzx4PouxvBKTz5hvChi88tByo5LSBH728qgyjEvkKiWEN5L6b5bkCsz7KnhxpRWcMHVdVCfPUES42SfCQk",
  "key24": "2SKS3B65TvFeepd8VbSvddzuLGwZH6N96412VioBZGecD41bfwkwQB7mBgNWZu18zM6TQLRTDWUycrdyDEZ2LNLS",
  "key25": "2iM7kRs3dnAzSAhtS7M8uJS4bTc4nxFP392Jyqj1UTQ3ihHrqRNEbVoehdjCF24ugKMywcaCzAAYkJdtA7miWAm2",
  "key26": "5h4VYmi2kAoTzZ1zgw2UjjtmqNgExy67madTQxsuqyr5ByRwUTNsLzbriJQgBBU1aY18n7cKGtcA4h3iC4WSo7zH",
  "key27": "4vnJ8zGKoDHbuMSnXZtAvCtmQmoHifJ2tz2WiU7qpDWAFZojTehHN6pvQShpanXX9AuPrqEUkNboL1wXBtHnSnR7",
  "key28": "2Nc9yzhxiJkWxyB6W9udHPLVRD2npfpfSnLBn6kK1CFXbPLRtxtZ7Lns1YoNDeG7b4ymFoghWLKixHctJvxpKagy",
  "key29": "4mTv7zrMudLVurZfLbx8ZPzNiF7x2HUfafACLKNM4AZy4aRPcKVkkgLRaPJjDezo996jreTschtPBA18LmFfx8b3",
  "key30": "3eBRg83wB4VsBfcpzruK3abLrVVnAooYmgy38bePsrZtX2s9ouKaHMG11KQVDa6ifWQHU18kyB9dANakjCDadczo",
  "key31": "SyPH7pbLnorbGTEjiPHkx5g3T3jvTW3REANsraQwCNhz37GmadHt7H88z2eTLEV8NjDh7M7u9ZMXBwBFu8CfEYg",
  "key32": "36NQ7vMaPvhNNbKA8U99zBAG3MXHkG6ovQCSkzZRMiyDnpVCtBNSTJYZaFjtRH4TZWRFCGN9VnDpDAeMGvambZ78",
  "key33": "2hD1jeq592RrKW9K8y6b16DhzDuiqkozw3zUjhSa2MJYJfaiFTTwhmzsN4v33mVKDMikFHFQSReNWUAsGwWBv9UE",
  "key34": "5WZVJs4Yf2D45fp5cT3SQPDcRuSVhepcY8o7JhiRYvjwZo2AYHBJAxnxWFAUomBhNCBLWEkTRNQiit7KDAX6chGD",
  "key35": "2JLLhcJRVLb3gWtStqa3WucrvuXmzV2NBf79N2cWHCStmtdkuhFduVDF3vAmdPiziSDUBkiCfi9DZDvojeHJZCBm",
  "key36": "4QnrQ8J6as41QyaJkznXaDYqGsT7JhV8oWaGCRztNra9SZG2wrtKKkpjwsDiVGq4ahJ7yL2runK5aDG2oujCUdiR",
  "key37": "2eLCP28JoFBKrz8TcHYEih7ijQFGS5FvsNwBEuw9gz1zr1kSsMRe8w43tto4B7p3VhXHxeV9s6gr45ZTvEUisQBA",
  "key38": "2bgbpq7VWGP5MxxMhWFigrKoYi47DA7uAR6B9Uz3JodkKpqvkBGGjHVq7zScvGKiRxoKT39mAhY7RKpWi4bPfA17",
  "key39": "4aMiT5fegU9tYivLkRdk8zybicq6BhaaS5QwwmbmMecvqKt1pLBQXfL33VtNh7g9d33nxEmDnV9CjD3L8ERWWhM5",
  "key40": "4iyDACxdPpnWNuQnEJ5v3omxwN2mhcqd8gVzt5PQ2p5qRKQmzjPWR7g9n9GZN3BkLXSNfx8CtaXet1761EypbiTr",
  "key41": "YdJTnvxBuqWEnYKfDwbAkdFLxk8yRKrm5gPGKkkmNyqdUmHuLvurNDgf4NhErM4HaZSCG4zamN3386BSXVVDquV",
  "key42": "3eM3urUftvNeVQEyr2QHo39BLXVP6uYXJ9ZRof4oeP3CHio8cyDkWssQLEhpyBg4R7ZMF2qm3rfmVbD2dR9Us61a",
  "key43": "4MudyNoLPmh1FMvgjEyh4btsYijz555y1cQdeSWMEuiBdsEPBaLCoJ7PZfMaR5UsDz973Z1N786pgPCBSC6BjLdz",
  "key44": "3cQnnTBtD6XXeHeyTJrmjLjXQPhu76PkLqC2Hq4e3PmXh6SBaCBWUQk8VCXFhQp79DEDzbFuKuC543Lk8gs6UJgM",
  "key45": "RrAy1FUC4fHQmGLEnZohTroP2bi5TB5JtdznHZwRy617e5Ys3XcrBbzaNa3uZcwx2yqvKXSXwTjvVt1oHUbAMjJ",
  "key46": "2dygzDh5ihAcmFC3tgJM6oEph1FijQMnAHB9PogxJvyYrB1qV9igt9tW8cPD8foGHRSRAnwJ3RhqvjAvwZ16obuT",
  "key47": "2BDwRYMW8QAhEH12fewFVMzUxkCt3nNV1AFeztfPytYJigKGTVvRrTwzqS8xRd4iedPMZAuqpg58XLneGus6YPp5"
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
