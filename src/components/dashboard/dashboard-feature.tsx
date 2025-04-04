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
    "4nPMbeu9dhxp5S5dC6p3Tzj1Rjauo1V167L2iW5HuWJ4vNsTaNxPGnQp7GjtnoTzeCLA3m63SuefyYY3QiAZfBeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n24v2auCvtdSWXzZiqtZomRb8bCarjXopabnDmsYuyHZqiZ1vGA7iad5F12rvzMiekNPWwHTYNAMy5a2B3dVmxT",
  "key1": "4491UB7uZUUyuxYgAdhwa9PUVEULEfKSBndfWnkxQEG4UXyzSRAopvVMW74eRezJxAB32xpnG3ihWrRQaGLSeeeY",
  "key2": "58ms4ejVyjJrTDdMPvF15BKVQDFSqexrWrTdru45y7T6kEP9BokKJSLtuGNKR3PQokrVGU1gJLdKeeNPjdz1W9Zv",
  "key3": "nCYbWTj8Gtu6tLjFUABGSEupw84Cmo9bCw3HzCbJfvX31KEeCngF76vnFJg4kj5FRk79wtMojTCD2rSg1rosCfa",
  "key4": "4dnp6pQUozbS4ev9cuFDguA32rGD6svUk3fBrwceVJxnbzzSVNNCnscjnj9wd6bhk3CWYYrs1teGRPo2kqpoMrwS",
  "key5": "2WVwf31ps8kEjqE6EzbDqJC66ZyKttZ8jpVqVsXr7WiJnxMZV1SuZFCTzdTgeeFf9Av1XWkgxuuA3J2FGP5xgVtw",
  "key6": "5cRj7tz6zYCPoaFvj474ZxRh45m8Hf4qtm2hoSXQx3xv6Va5ki2WvBTq19dTZwZGD18m2zoJPymVPBJFAa6ZrwBG",
  "key7": "3p17KFPvc1kHrKBKXMCjFsbQi3MdtmFbyqD6k625CpPzNqTwnYR8Yxswc441vt4FPRUd7ydT5xiokMPFakLJSS55",
  "key8": "5cv18XB1v6mtGph1rTxY6vpxy9rcWifCP4D9Mg8CYkdbd1FYCRxAU6ri7keRAtrb9AGA8VJ98ZS495P98HBzAW81",
  "key9": "4sb4Sm8p6kGjiPTL4AqCuqTv766o8AHgeuXGGMqhL4FW2bMaefoCkxcbmx6VE1VxfnjeKhJbPQCvPjSNJ8RxokM4",
  "key10": "5dk4ZXktpoXBM5sHHqhEZ4Juh6HijqdwGocLmz31XKv25LDCjFaCn35EGHjNFUJJuhRMeR8csL8bbUW1EU3vQbj3",
  "key11": "3zebkQ7w7C7uw2FX5Q6pofMjLAhguQi7hdUJcidVeYeN4vpC8smjtG87Xtqn5EPrtDteWWyQWhKMmD3JGAGjzyQ7",
  "key12": "275WjEy9cRGsxuGSPTWqEtVZ8ah3mrXG63XU7ta2MiHcNEbuDBAVg4bt7An2vG8xTRJpC1LzcBMhhmeQmtQ6APcK",
  "key13": "4e3bNJSCNrdtfReiSMQX3veuMguoWXj2Ho9g5SZ7hDYjDqPzfoUFneUUNMffJ3d6UKkU5DKHFfWqvPzhzBFofb31",
  "key14": "4PU8WNM4c6MebGdWmE3PMRUNS38x852cPssS7ukC1ikBTTxnnqNsZaoWnTwfq59CGQ3rmocb7dEbUThohLYYcMXC",
  "key15": "KSFgF4nQzmaSu4NPj5Xu2T4aSGERfakYEdsy6QdAnLc7n1nNbSHwSeA3FTm8HMfigMwfW5i1TsVnSjnHpdU9MzX",
  "key16": "4BzdVRZPJjjRoW4q1gXAfua7sxivii5MXqjuVFpZnE89eCit1wY9CcfzgELvCMUYtSXYj6wxi1BnkP3eC58eKhvY",
  "key17": "5hLCdeVQzgcxUM6TdVVrX76WLpaT58kCoWdneqd7STvqD4HKwL6ADdQERsMZUZLw5KdQ8ebuPbmihdm3Bf5AFNrh",
  "key18": "41SgZw92fjxDUh6QHVbQUEvoEhi6i7PxxKJLybsUVghgD8xmEH4nLdW1UMJmDeE1CyTiCpnL9M4UMjXSwwVq3eyA",
  "key19": "Sz2mRxiXhCVnKGDP7yfYVgz9ANJ7kYuxPVXS8ZKyvimoGSCZvEsE8LwajfnAwcsToordA3fPjemhx9hTX6jPPW1",
  "key20": "3Ldt9PA9HSK5o8danQJWC5Z5CMHa6PWHKjjK29GrDChfMn952fWwRgCqX5eHBvaSVJREMFp74aRq37VNNygw2i16",
  "key21": "2SsMeSAmQN6LuHUvSHcBsHykttbmsvywdHiXciZxHzbQGP6MaKhKDqdzjzMHutPk6oEhGMRrK6vfGnBKupKta2Cs",
  "key22": "2stPC2S9fyUH4JrcWY8Kyuob1C6YSDEW65Rz9QaNiJ6vyBgD8kPUJLVRypZqtrSad14vbdv1Xf9SceYX9gLhW9PF",
  "key23": "3pVDxUcLZtHkKos9NR5f9FYu24ryR866ynZWg1ux4qNxzwhfdWt2SdgMbfBa77zwcr6TE6wMyK6Jp6LpeSCsYaor",
  "key24": "4sE6bVT14Lnnf1VYfBnmJ5CZngpdXGfvLa1VFpx8QkNviEQo9KyJgn5qw3xLZVLfoJBkWmAqfA1w8UQesqq786zJ",
  "key25": "2xMyxNDcvL8rekTECUqqQQAgFG75nMADSyzayoZ7noxkSDn2u7PiU54yrdUJXZbh1ixXKrJqydPWsyWguimRp4cb",
  "key26": "2EMjQ5VyD2pyFFspRGVaRfBTSTyyecNzWAf5FzVBogdSxLVKsevULh7BQCThaz1Q1Fz4i57EusDH1frMTwQZaSC",
  "key27": "42tKChbdjYQxthhuQnje86z5TTUkRSyguXoPfnsC74aPxnxZAnA5NNtWCirvwXvoEhwvudJP788kbRuzbEJLUtiD",
  "key28": "2YEGexHkUL1Gv99hQyUYhiAVRncaJ5GRWYxXmqQcxGUgx5VqaTwfGbkPpA7UEGC6k87NjoHoqXEanb3tku3FHmbT",
  "key29": "T3Mb6sCSTSVPSguAYB7Z1JFYhdmUevz36gTvTwz7BYjBATdSqfMa4PyPgPxiN36dAL37pbxUwTT4NZHCxygtRbm",
  "key30": "3SLvHGR4CCNrY1xVDQX4TRFNkdcQAHCkN8mx4FrqTWmi1BH2fBDzy3LygbDqiqr5PRM42Z2JcNFpvn6uss9haUyr",
  "key31": "4fxrryBRhDoXoFi2mzADQa3tTngyS6ehiaBQRNPf7QBgfPAHzqvRFWdWCSBvVgBZn42hFM5PgNTaHK2GkfDCLYRq",
  "key32": "W2ivprzs34xDgDim8kaMrP3qH9sSVU4JvSUrShPmJjU822NyK3rJFqW47rFpo1GaYjYk9wfhBWdMPmXCW88buL9",
  "key33": "E3WCGX7sXqffyYo1tzvn8DWgJCKVpfpn34UdQnKv8Wur82JiFnJYh91Kb2kQai4mCHeTEY7uw6k4Yve4cyyUjkq",
  "key34": "3N1ddG1QzFr2ExhsBsYLSCfhzaUXpECLX6zjT4J9wcHi4EZUZ6xGXej1DHM5PQeuBxksRuwRynBAm4SHFURFjvhX",
  "key35": "y2zQpbRGEaZnrny2ZkAHw3N1rqvmffgRYhEwwpmKUGvphvpdBVQXDmwebZpgvTgcg9FDq4JBdzemsGQQvDBbXWL",
  "key36": "T8cCiaLersUADwcoUnGWGGpX72WPitdX6vFJcFTZFZTzyUZwtKDuy62nLjZ1Gmk5bBwvNkoBRXcvwi1hDotcje1",
  "key37": "5hS4pdgBKbbNxvGr5chXFA8MdbCWzvS1Vmr3Fw9wDqPWwzjmq8XqTUQ2xAN7uNbangiBwHtLSyiYwhRPAbjXKR8Y",
  "key38": "4hXnaTszqU1juVovkdYJpef4mWD74bfNzQXCVyrqBmMSdBF6RyaL4PtfXdhmZCYmBCJ8QSPKxVpXjtztgf8Ng6va",
  "key39": "3dZueotqSLxTMvh3YP7KH8CQm9wXxLodBYtHvv2fajRLGZKvrEnzWzStUAtcEntejnWN9swjboN1UPn5pqPp38rM",
  "key40": "4gbLUGaFieZKYDr5rEQWtTbie9jz3Vj1PJowHAyutbGLaYxrsnetHiVLP3Ku9d6RBHaFJWqF5EHvYeYo978tmfYL",
  "key41": "4fBvfLptuNSvkadeTfxmyCx6nraH3QJ4dQPMVTfapzPFSvEALe2NW8BktkZytLR67NWPctaAsvuRx7FmCoEWbXtD",
  "key42": "2QAJvXPWms8YFqw1e8GLFtPQMFvTw1jyYTwpJVMCPupgqGq8miZo9jt8Zw6djEBuPsqZeeTrNpyKxcBWW2UVsEAj",
  "key43": "3X6Ab5vBWFyQp4f1AAF6Mef1k5UYyLcX9RHjHejLifqBX3fbSu8x9dTEqgfVc5xSk38gZzMVGSfNuQowh7FcxMN4",
  "key44": "5UgQJjmvuXxAodEzmxo7G35XxJDQTVoxWM4FqxX9B1QmZooPQaomqcB2coNcphKaJhi9nd1zPeLmUD5DKn77fdmP",
  "key45": "65kXdirsKgJxFwfHdvB4veJvnFYgjW2jyzh5msdybUbYpnVFrRKDs2t3z3skD1AGFqYxbeLpdEJF5Go9Zf2scx9y",
  "key46": "3hseThZsANtGPahedidow2Axnm1nCz8VgB9r1o8dntXaANcT5nGp9nviR9E1Cs8qoYBdGEVUhS4pNuGNoRsc3MTR",
  "key47": "PyfRzczsRpuynKRJ5c4XDc9g2h854MqPNuuqn74TxSfjAKKPWGSURtzopdiywUBbkRKfrBwGqjCFm9654nmDApx",
  "key48": "gb4vvoTMjpf8wcBwex5mKFhcA1MvpK4HjsNvE1gBMytjZw8Er1mdTeWS9JWxyMHWugvcdLdU1csj6FNwifrByyu",
  "key49": "5T7geV5F7LMennrqsWP1RzwyQS5EKxkCZmAuKHUHsxB2ekavyJV4NUdRgnTsPWGEALD5Y5WurNccYrjdVwusXjF2"
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
