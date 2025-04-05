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
    "3msAudmBWDYUCA3md9hPihSF43JoJGTHY8pu6JhdUDtvqrrsCokbDRfcnFWtvc7Kp5NZnLB6t2jdfpVJLRMFVXE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rpK7hipCHdbo2f2X2ammTgPs728oWFqSN5QeuS7Ke1MWFpGi7esAuddLan3qCo4crmpWtMKn5Z4SMv9n37VHZJu",
  "key1": "2TtikGzLJjHxTX3jzekEg5UNgikxDPYUZvVuLiRmuSiZbtY96Twws86yjP6YYTWGCXZqZHdRSutNcJkiFGPihKM2",
  "key2": "5ajgnH7AinVBDNNXjqUcD6QXKFYU2L2YbuUAy8yLTtqTA9JHFCVKuJYYJpReVLMVQ3WVMz6dayfhSFBBbTtfisi3",
  "key3": "QbLabKxQiwayBSM9upqBu8Lp6bXRNyRMGVVmAV3FngYU1HuX2Ri48T2UgCHuq1wotZwSnFzjhGVnTtffjjNzzme",
  "key4": "5FDnsKhiJts63wHkKH3LYygxfKcTA8kB8ysGwnPrnz498omZ14cbfwe9frDsE1M1kAtpB8xSsGLBzPhUryN7v8tE",
  "key5": "4TkhgVn9WLABp8uZcfKHWeBr5rpj5aykdxYQ7FJY4nSA5Tro61cvrtANSna5Qb6aamziueoED9FARY3GGbXPMrpy",
  "key6": "fH5XEQnveP1cpUMzVBXaQQpqXRVA9diENKx1NjTxcTHqi1tniFZjiqRvQGSHhs8UabDUoMX6znLDD4ybTWKvXuv",
  "key7": "61E56mnGSrJhSa87pe8jcxCkEJvn2o2e1F1xYzexPjukSXpHx3jmjrczgR1mENR4ay3umQgMJ6EQcyiEQu76jFqP",
  "key8": "4oUtFHmWBhwHAW9CsY2kBbQmQ8d6zYhPd8cJZs9x3kzdZS8q6XNfYy6QF6gbh49NyeQZRh1RTBnLxee4Der4LtMa",
  "key9": "4caCWjbrx98VRxMWE4o33ziv3x4LieKp6Sg9CUNztbsfSKpYtRwmtRQo6BJm5AJ5wckwPomdQfeRwXJMGbX3SYBY",
  "key10": "3iyphJcP3v1bGDG7t5gGLHmbpuET6pmNrisbFkEaggjugAySnnTAEQqVYkofMwhGccdXTbHAbHr3ZbnzTQwJXaCT",
  "key11": "2b3f8Q6Kvwd4UpgN9WDMwivWotxEdUsJrY4SHZywisMaDVvpuDQjwQjRzYQg1N7Di58j7uEq8oBBkmim1zuzo8Cx",
  "key12": "3rxNvVt5Jp8LsjRFdN3hm5Nf7r636zTAEMeCSoYQsVzEqJ6mGe5L9bfkd3KVtmAWdbLPDS6vk7FWVQ65JVAG8D8K",
  "key13": "3mGKKZPAawoP4n6XaDCCagchMNcLuwDHna7PB1SxazvTiaL5W78M66vDMzNXBQwvbWpirtWcGu1bGyN1GSB3Jok2",
  "key14": "5yUwmjqvamhjtTtSoysR2zajrTPz2Mq8QMCBmoSpb9kheYS1MFfYfJFzfekKBC5vyEDUAv95zb4giR3dgsqcxyPB",
  "key15": "2wHr5LSQbtvaY9ksiuvadeKFZNbMtr7WUaLmNoFJx8zfG1b4Mpke5HZu8CyxfKKe8bnQ7KJpmqiBmmAjFRMUrtoL",
  "key16": "4b3f4yRVHhcGamWmH4upb7MoeecyVwJFNArPvz63mNSj1EZnq32vv4nobzSEaJGKurKFRmaPLNQFGMDkPUbcYP1d",
  "key17": "5Xr1BC7G5uHP8Ax4HAwWjn2ZZ9Q6fFk29TA5opN8dYLf5TWNExsqLEFJKah3JV4Y2CbEPrnAnXvtsLSLkC6WN8a9",
  "key18": "2bRzUFsYnmSpNqGoQLQJi8ojLPRxQi3efQJ4Jb7HprJiqR45ZAtKyYrA6bmU59sd7BAofAF4YrxTmSWNcvC8m14m",
  "key19": "rwb26dzYuVK2zuA9jiPMRBVHbKen7f6VbLxMukn9HT1TNsyvDj6fsY7cJt2fZU63aqP7uQRUxsTqHQCDjtfmoEr",
  "key20": "59hw9gUronw4wFg8ZcjfbzxVSFpP49znJjcJcF2sdoUfAxXeP12CuPdq3awb8UqeVCRMFFyYsoMSnuRgEZzccn9Q",
  "key21": "47B4YcEh5z9xSDk3vfnm2GdkCAQJV76V7BMbEkALX3TvsdLWnwBm7WuzWFx1GcrLDcnMHMQa758Qt3HEmXkmVVCi",
  "key22": "26tfRpyScc6o4GHV4cxj17SA9sfTwdRmRMdPczaYFudUhzReDhGt89S9mrp6ftNXVwaiDavqxymae383v5sqA9cS",
  "key23": "5hdfKfeg8j6g95HamU5Sjv5agMnUNFQEguLYdNxFZnRxaYPCu9bXaLiGfDBki72CjkDWXSU2JzCfQyPfvuzjQVtQ",
  "key24": "2WcaPm8qxxWUiRtWvtPRpmqzCinWLd3VHWrbikBaYumfAPHz4DWST9zBdYhoK7rFzk2z1wwc1LCxuJzE9M8m5CHn",
  "key25": "31NYh8jqPK87LB2RwqXkAffQg8XctwcXphUQfPNZwDEDwCADHX3bt2krFricKaMfSfi8vWsyLzHW81mMzesHu18Z",
  "key26": "67c3bbT2wQLHpJAGzsydVFdwBwM7yJUREBE4ynmokoq6hchrdiSpz9iRpQZEhdNbPW1REwHjJu11ex5AC4a95MFg",
  "key27": "e1ASzYgNiqXRNutfGyeu1Y78jisiYNJrKRexRhf2dskPZ9xtqLKV3WPYJRHddZGwxmogTGVYMc3oqkapfY5cWSf",
  "key28": "38Y8MfTCYH7Sb3PWEyRbUkLKYYRK432YkBQubfT9s6xtV3CLfEETfgKYtAaw5BdpY3G4whuYZhCAP6o14KcLLqWv",
  "key29": "5HjNwT12vLCPX7eWssNz5P1yo9zmGFreww327STziGP6eRT5iY3CfQTuEXPrg7u9XgVKj1fArycyGGbJAw79oMwd",
  "key30": "vcKUSiJZtYmjHag9EcWoPL2hMbgVfzSueSrdnQbLw2JGuagy6Wo1DMJmSooCT6Ck1aHYrz1oux1NTgY91TbTs9A",
  "key31": "3tR6R3eZebff73sfbShPYtpikBuUAdJVQcgLAGLYYeUQa7y3nBnRr7XNdJaFnS3oYPVRLw3KK5EUUqvPB7a46Ey6",
  "key32": "CZGz1Gc6wkoS1jQBDrwbGu5uVpuJrGGxEFoQxcXEFsy4Cc27FevQwdciujnszBXAAnqeVkZMZVkU9sdWQU9kx7Y",
  "key33": "37HgmNDzs1k7e6U6uQ1SXDC3xC9dUjpMg3TrQDUZkpd5uHbj7V5VfNmaRxAy35m4mC5SuwXtXB14dXE4ZMxKfFTB",
  "key34": "4oXKmryyUnPVSgzaC51WegzSkPULmUbX7idpAeTnTVMWkJHM5eZJyKiXsf9GAd2isKUn7KQGGPKdEoKE8m2GU9nK",
  "key35": "5UoRpx2gvFFtYjr9u15Sbw3LLwdLTwPn3bJswio197D9UZ4erpR9Vegx6onKsp9hiezExeEh69GgJj1D5TQ7Zjh8",
  "key36": "53HombsWkLm5CQEn67raEPncmDzJiCTYDDZQ3j8dQUL7MCKX5HaRbfqwpru1T2Csv1VSPpHANaxixh6U1QHuiiX5",
  "key37": "3jg2NMeY79NyxcfSp1xejJpmBnUHwbqtoauJSCmDjTB1HyZooiF9FBkvjRqxyecpYrrBDktdDfiHoZbWi3CMbcHe",
  "key38": "2wZHcKXdVwBKh3qumz95jDVW6AWgnoYTVnLQ17wiMy9uncqs7kmVbA6mMALN7DwQ2mARbiVdvwtVrg1qdqJb9SNv",
  "key39": "4HsNiNfaFD3wZDGaEZob6jDYmjxjtncLtLELiocMP2LzZu2yroHBqP3uaN1ucas2yhv4RkcmZQCB2L9r6qZBkwK4",
  "key40": "2u22tyVQ6hPTLKxAoCLy11PD9a2rLihZoWXdrnz5WeHp58mbW1eLdEwVa22pLFNFHJzf5XS8gaCX1xmF43XV1tdm",
  "key41": "5DtWcf3JQMUVCZaHuzUbMQ6WkuTA2Wfca7H64NMJCUhf7HP1JoK1E6kZohTAcwV1JeR24gz3AwJptMCA5RvUSv49",
  "key42": "5rP1EwpUkpv1SjYLm1Cs9BAbph8Rirpp9Y7pBUkv88hf5MPyEeD6YZCTvdKXv43hj3VPWvXWb4gTAPxpzDh5GscF",
  "key43": "34Eb7fGbRog6NFME8JGJrwUM4PeSpuBeGN5F4YdDfVwGucjf5gEVbSQTxA9n8DAGkTCW7sU7u58HV46YjkXge5a2",
  "key44": "2LDdjr3woTXSTeJXVW128vH7aS3Q9X9v7XUQuDjWiCLATHSCLgEt6N3zYAb2AgyciYCLedcVm5RKSNhxQzJKSBka",
  "key45": "39Px2vWj4jxzW1VgaUr9YsGrzFXJbYRe6a1YwR8GFakkXWGw68xCZe4XsCRhHXU8dc2b53s2TVQToUSTRRdtwzit",
  "key46": "3FwDkfU12NWP4z9iYRnP15S2mzYdWMVsCRMjq8NvqFgYtgpS71cGZgYRY5dzkNuRmMic1SricaDT9aaCGqhpncyj",
  "key47": "34sQR1ioMSwfBJx377GsoK4khEA1BSjKvfy9vXZ1gBDJBEPeSfNNL5zmGJ9g2mwpfg3ms7SgsGaLviQVX565Ac6B",
  "key48": "2kcCigvH1S2bgyF1HAGQtKDxQfzw4MNN5L8tWEwd5FSrgvtAAFg6LNUeMpeA67AsXAW6opEEWv9PuFTUhiPGAYqs",
  "key49": "3ch9irXz6hXotEogexh2wiQ7dDUJPMPLN4quqgrqjAJNXbD4JuopqynAj6VPzmWj1PnAxbH5F87ysb3ZDHyUCfqN"
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
