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
    "2osZ4XZ7Nb2kGmyGGmMcvQa1gfw1y4mowQEWWuvK8cVruhvJ2Frt6tgTCrk3paVyUnnBfBHPAhMUbm52YYwMxiui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJDQXc3UkKEuFH8fWTzBApevCcNt2ZpaXxJ56uwq7vmXLG8ycE3L8ZQrrj2HG9zvsmD2cQB2ZeZKEr2VZ1ukKGP",
  "key1": "54JPWwfrAgmp2y57AVodrYiNuJbWCi7n2Zb5JUUoTDcWdiScADsXjVaq1EhQytBN77szXbbYPPXaBX78QdJpZfR",
  "key2": "4DBiH6cj82HHWz2CJjz5Lm9this75gTBSuuCjtmfxTrnDs5TeaVC1gYZT4fqfX3Ry5MgUvY24EXdtg9hpp1DTZyS",
  "key3": "4D7vCuh5pC72tXuZzVCcitSUzcFx6Ezqu4KkSvG8Y4ErTkLAd7L4aRKF87qN2ry8tgxWYSWW618wcLF12rHBda9C",
  "key4": "2ay7phbFmBp5H1jsfbmU6E4EBaqfTXUzz4d82JKx9S6EM1kNDgT951JbkyEontWVaszSLRgt8jEKemVcbEigioMw",
  "key5": "4ifyZ2RizgxVLa7pohCQepkVktE5nfGZnpBc8RRGd3JDtautNYgdtqnxtVPGqZHDmANz935xw2SBNh8wmNrDJNJw",
  "key6": "E3deWA9y691UaszLSsmR8QqYVh3GB4jiSj3MT41Azayk3Q26N3x7N3zDWLLMm4AM59hduMnsNHwFEBWvrvkdRVa",
  "key7": "3SYStMQwvPE5JfLZs6CBBqZ1vjGjoF43aJu9DsLB13EjEVdS8EDEw5HdH5GU9K5DW4M3QnZWJbttoix2NXwLy3WG",
  "key8": "2aeQPVBD4HahUn8Mi87Mx4Fk3CspBasscmjTkBYyU9MMbWA7QidenoGtzNxSLn958699MpwWxZ2Za2Hzq765JJ76",
  "key9": "3KLr4WqgE1QcXvxXxpE59b31x7bUvFvLmMFp3jYeXJtyCKS5MAWnyL3sN3indPWMvBiSDiREj4HrbkKbz5YujuQV",
  "key10": "RA4xmYVBL3eZy2uj4wDzfXVUF6zSxLpXjm412fP3qodWwEXLXc52vRUArJJbX44mhhb3XBS3kcRBZhtyPeu5bTV",
  "key11": "3gcMGTCpKbQ7V1zkLeLnHkxPvaMqGf2REVBsVaP4AuXQEZegdC1VAP5Weac8dMGgEV5nw7FaBFPtmvVamH4pZXJb",
  "key12": "5wH39X8g1Q5V3N2kTLJXFouLpL9CXQcpjJ4d3fAWpubR2qNbwXUi6QLWs3e2ukebD5LkWPVE2z22joHGwcf9dvVP",
  "key13": "rStApogSHQAFxihi9XMhGvWLxrFvDQXkgtR8P4hcrEqNkDtXBWftz83oS7LvGquYMe2inge8UyfKmsb81rRo2HF",
  "key14": "4UCrwpjrSaddLKTyQJLDZDM2qx797L2urR6QBkee5wLSuFWguncK5pFL2xmgU4KMXcbpVTi68iBw5JU1isv6n668",
  "key15": "2z4jaX9FGZPK3YGWEgDaPBVa9zEP365wnYXggnqDLnT15voYr2mJmwfC5kXrcQB28xnvsJWai7CTXQ4pYQhYBPHW",
  "key16": "4UHokSm41dfNf1A8KjmoyYMgmhSXSzCYbBBSiuEgHMzjUJE5EjgTha44Qa8VmtLsXx9iS4me8Y4ohzVvtvo87p8C",
  "key17": "226UNL63qMZxc9tbqxvzwgPjZBS3r5wogPyzanErc3LeEEpSeWGw2BW9THusbKnBV1mgxT1ZW7vdNQ2LU6r2F2Fh",
  "key18": "239eoDjP8BEWyFLNTYJjuYV6rm48CBZB2P7g7fhqPLvDWaekiGnkCqvpVZ1CjaM45YUJNRioffuMoQq9TCwMoYSj",
  "key19": "uUR6Q9dGWAPS8tqXHt7ZSBFvL8iXcGoPti71pDs3e9jQHFPSrPz3hY5CNUo2c3TVJSWkk1hL35yxY9DkNBfAWNU",
  "key20": "5g7RraaUpJePbWFHHMAY7kq4YxkA1qJ33ahraz1uUusQ9QM8LJUmAcYh7LCkZuqwZdyTHHR8v78nMGYpmsCU1MfB",
  "key21": "3ZXKbbLJsGg7eAAz8DhMP1cuaHXBG5KN3z3EW8TjzFfz22BK6SUYWtptRrkgbBP5Y4K22uTk7cJ1pQP556efzuQT",
  "key22": "5GEbJVM2uaggXn4eh7My2bH6yrUHLD8Y8U81ubxqfDpFAmbaZW5fD1LiBCzfjSaz6AFTzriBWkGDcVMsTZBZ91bU",
  "key23": "Jk8zFocJPKJ6q3QjMhMDLEzZu5RwmdFpodZxK18LSPyG15hCfjg8QG8crYGV3mqbqrJM4KcuuwhXv6b6vwyxzNL",
  "key24": "431JtBKPA4Lx128utcearx2D6ZGdty4VggXQaMF8vzLhFA3D9m5djRAwHMWEysisuDoiry4792CVUZdf6dXJMVae",
  "key25": "2bcBQAdjQLdEoU9MYNKMLcxmh5SXDkS3CwNGZrZapgtGhXi4cibkFwNxWbKxjF7WQQTj3heGwxxSgSTgN4553pVC",
  "key26": "63ZcDkySPmskzcbNSSYyQGtHyVmZ3VH6GFuxzds1wRk7BPrTsWHvu4YUzCfX2dC2fgJpUQdX4ocfsCktgHFJekqu",
  "key27": "3nLZ5MyrmQgEzZSkqP7mQLpJXEunHV8xd7Ckfr6TXgdvrGyreyy8pPThSKMnkFCAGYHPEiHvnw9WPbJkofveuj6e",
  "key28": "5HTS1Vz1SUUqaG6ygD3J8PDFByWuhg1WAedPJDjD3wZNPCAPS5qTvzT7wZdrcjF28K15dT48HbSA2PAAPjqMrpX7",
  "key29": "32jGRrZepEaXpw3J7ExDoo1nht9hG9jgVxv5BDWD8fpBJne6ZmhusaMMCuLoZWVP9QqUSgJsLZ2zpg3B28mGH8DS",
  "key30": "2fJh18xYJt6xaHwoABR1SMgjG61SvZCTLykfPTPWwpofAzSFPvVUwQXWsBYqCDZTagn75aPYucKRPRQ5tnHPyai",
  "key31": "36KVXG3gDKrzhN6WyY9w1uq1tP9usEfAaU5PZfKVc66MrgtpVp1ygFzGq1hEGFz3Der6ipDpdXfGt9mr57HesnVY",
  "key32": "48ZQ7QGT6ziECKhrGYMeAChWieXyDZXEG85ENRHrFGXU7xNpskRH2ExWCDEHNLrpyqRPZxDRLfpEVfukSG76xb3m",
  "key33": "4qWGfrTt1rBaJfgCujshCTe4yapGTSGutAJqG89mPXAJ3trxgu39qyeu8ARKazuh6P3EGccgMMSSmeQfParL55Yf",
  "key34": "3vwC39ogKukpY2WMZzP2VYcDpBreQbjy91HXugYNo9t9QhkWPWCtisGwy2jJVjcdEB5D6nLjs5XxoyAmFpaM5Ear",
  "key35": "3py6wcsKapo1y4fGANUGsKhq6nWGJPbP8UQnPtMufrXgMGWjLj86v1AAt3r9mELYG4cxXeWgsM6DKzYUd6k9dTjM",
  "key36": "2W14HzArvDwDMuyjSESHxM4KMUAzAFgdTEF2J1hCNQTqT7TKBMQJfo4Nz3bgHoiEhX2JRs4LuVpvHKgHfw6BZ6MS",
  "key37": "5J5a1phCRs6wfET1jGZXC1DUoAuFHRXaiYzgLSSpo9DCTs8QUUuatiTRrs8D4TqhKzLYsAbkN5dBFj8sv3K8KVTT",
  "key38": "VP883qbu7j1VZmgt7btaR2swYKvBurQKTMgd4kZa5sKrEJf3k4myPMmvzDvJ3ywxBWCTA7WpE2bwqW5wAfEXhDf",
  "key39": "2H9Fq17pAGg3bFqcL2Lpqa4YbXpFeQvyHSeigyytL7w5vyHgSeEBftBGLE9wxuwarvm39khDxWLg61MBhy91J25b",
  "key40": "5UjJdZhDrM9ThL3nuVwUN9qAte27Qf1FP1QC4noMJSC1XXvGpFn2nmp5qctvgDJ7xTc6JvpxkCynCczu2FBULrz5",
  "key41": "tFx72S26UNSfwykbPPwCcVis2zk9dRyBW6UAYt1fNZw5Snyg4Vd4orJENxLbsMyzsqyAFKbPNmfH511c9QFjLUG",
  "key42": "2N5n6um8AnpJZfRVEgYNJuQaa436yWvQwr84FFS6FkPDjkxNQ3734rHjXQ9RErW797eUe79Zn4HXEPqqPLnVPvNn",
  "key43": "4tzcZgis5ek5v2gCDmKYyzjxVm7tX4LZu6UY9w8vpLZLPg6x96UdHbEyvyCwaMp3iWTQxazrPb2ExMyMFWpcH4CF",
  "key44": "5dJaaeK56RMbJNbJWAZoMzSGe3ZVFGZue7QvbSpsz9NpmCJzeCtceD7rJyktfTDf9MGkfgwCKxavZuV4gy7kEKWc",
  "key45": "3T1jbrZxpHaGotdPGHXp3pTKRQJARDkpjnbe3mb11s8gv3XNfnchcXrckcw2uzzNPDZtC8FAQ62J161pCvgHd53f",
  "key46": "4ZhE51biWg4rfS6WPTzhN6K5oMtFWrAL2XHBmfi4ZfpKuNTdTTM6nDZbuXY34dxyA8MKDJhdmBaYpaJ5HMmmePua"
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
