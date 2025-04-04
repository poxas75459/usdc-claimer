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
    "59GbRWqTWr3baJJACeq7CGihJeeJDcZmanMD2qJbZ9XBma1R8zhEWMykQToTdN6oTGdnRELq6zWBG2VfZegorPbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K5nt9mt3DX6ErTgiaA6nP2jFQFCjNnRc92yAfF2kPzkLfruTxtvMYtL7GjEtUcmkVbRpDXkby8otNQKJmVBeWw5",
  "key1": "2HDCCZUYBL618o5uGmmRYFaxphaRDb117PeFqfNUb9YrYvhjt5ttT5bwksk1AjG4Shx69yPGuWRPnRn2ikdH5uuU",
  "key2": "2Hcu4P5b4XRur4z5n8meLHSsRuhm5p1ipPTouExkyhqKTqK6xDMtohpMDdpGB4LATTM3nRBwFtGq8YNJXRHss6cc",
  "key3": "n9sAgLq326YrwMpAkAUrSfjPEnNh4yZRZSJ4b7JAsXVLNtT4AQ48gypkDxy62GqQMN8dAowjMkFdDdhHSgA9hzR",
  "key4": "2LATwngVmDPyHUfcJBUZJ48UefdgCLuxNWkssfP14FvguYPjyhsHTTzSh9MCWtVsbMq4uaf5r7VuoqbQMzMgN4fJ",
  "key5": "5wG99xjZvqgkNkLjaj2W6uranVHaA9rjZ3umdgcuPRkXhx8rxYE2SbgpCJCY96JSXCDvSJdjHyooHzheQGtcgXTE",
  "key6": "5BW3ozgbpa1PkQPhe9ZdWfau7btQjBUDke9QZreHDfAsGWdHpwqGivq9uRvhiqiCtbbzxK6op3TrnmwkdTTjGD1m",
  "key7": "3GnjtK1N5vGM3Dh3QoJMfmZEFV4PyzCYepud5sr3UHU5eCbjr7CgNKGp9QBxB8LQmiyZbbbjGEXuGXL9bomTYNXY",
  "key8": "4QFudHJwu6yXCoG7ZALPaRNT3DhoZBbskYxMMEsf53CJKFnXJSeNCdHhntd8eVHyVrgxJeC57sJuamnAKKTAya34",
  "key9": "66f3cZ4eHMSK4E1CCpnVCNbc3pVtV6BPvk6NpRn1gpLksibrUBaTbVY1e1tGmxddJEkQxFVNEFynaj7i59FRdpPC",
  "key10": "2HLuJxQgg7u7SsXT5pUBpSfWNpb4nnr8efG2rgM2Bgt2zB6DgQ4TRL28zDKSuHhL5QGVnpUWFAHmPBERaxU917Fg",
  "key11": "5Z7bHUhqqcp7eyztoqPuQ3yzxY8q6ZD2y9CwfRjPE2vxZ5Xp11b1uynmdFkAcfzWQWrn9w4MEuiJTHytTs4nwFx",
  "key12": "2WoSnNuyXsePWwGnopfZQwgjVfyWiuvQSPaKCwn9j1mCA7azD6qnvVA69qC5wrHdzSB71UzkNUGMBwUx7UxFEBGq",
  "key13": "ExBf4e9eXWrkKjXyxKwNkNBnrtY3BbkfehdeoFH4GVLtjsWDNzBuEZx2dSaB4GW6F1WUySee5sMNW819ihnjJkM",
  "key14": "459Dy6TcqWNbFk3arCViytHGN6tFP2TN6qFtGomDv7mC5jeyv1kTZA4RkQsNsZr15qhSYUAVcygpLKiWyRQ3aDAF",
  "key15": "317VPVHQ4rF2DbcwNq47nmzQE9Yg9x2diBELFxvGLuqmvbr6EAKQ6JW4eNj7zSauQveybJkoEQw677pmnNL4nx3z",
  "key16": "2Q9sN4a9hpic1cx32pqEPsMbNquw5RMJdvAToMTNu9CPEzj2vwBdd9MMw76uRGdhhUULi3jD3XqAaSuNTc5mHuuT",
  "key17": "4giP1gN53hRTsBwPYRcAi7rS6xRrjuFGL5nFvUUR87B6rjtCfjuCGvw8cSs5cgETeW5TCD1iazsYNz6ub4pVAGtB",
  "key18": "5yF1MoYx1HzYgY9dS1G4fq2MY49QusyQEMxS4epZF3mebKLdsbm6U4UGp6DavMGMRpGUh8LeLkvrxcwJgC7wQzdh",
  "key19": "2FdBMKHPaHzG2QyYotSpXWwrDHNXiXDBpLtqttbpDcfJDBaTJf3YTVm4dxiS6mYTs7gLzXa6tRp9y3yccs7iPdbS",
  "key20": "4nymyzAh962rv5GX2CknN3scaxfHWyHDHSkkC4whk2VHaM5wUYCFMBdpqhKKKeZPpyxc744EgpLmfH4HARgPtdmp",
  "key21": "4F1L9edYgYmwcwSFCNdVLak96bTeYDevYgVJPcmdFmA2wmFPLbiqK4m6kPwDS9XH14RQSAqesA2Y9p1oKRWumwep",
  "key22": "5QjvcV17PUNPA162sNNCTqDKXH2wFddLpbjGE4n1aDkGWHo5QeFPWk8f189cTnYuebyqQ6u6QPTmzdiuznPLgjiA",
  "key23": "5t7F6T29JwnaD7FQXjYR2LtTGTXaZCPRYsVKaz9x3MZ63b9JGtTqGkZ5zuJe25TD5zaRmZ8vxE3NLER5YDLjrgwg",
  "key24": "piT7W3WfLhoUGEwUQkm8HtCEWcdWYs7FctfT2vuFULMkXyKiDz2M68xDP5iQHFhV5Bd4dZyXqYyHzouXNJM6mwL",
  "key25": "4StXTiNDnvytUCrgh1goSYXaQCq4CPuw1w48APNeLZPTbUScTQp3CS2eH73Jvm9MXtz26acyuYBKPixgWVVS2Lg",
  "key26": "3UeZRhYB5em8RU17iDRiBSzFuxMbw9s7r2KfdFaBgUUjWuDQFTy2Lg4KME5iQF3FXZHxJ91aekspaM6BuUy6NrAw",
  "key27": "iJ8vTEvXTz3WB5kFqAM48d4ybwMZnGBQPEfDVLEwRJTPNWijwasobR8njQVJFQ3G7H1BbmxhY55ZpD2LMGkzWHP",
  "key28": "4G7Cie6MHp5jGXj4sUbmjPhbMkGeoq7JLey1jNTHh8fY1ksavfxDno7Xqd78R4EF5fLJu15QYC84pRcLHQBkrafK",
  "key29": "65vPoyF1EyUF9JQUQVMRiJJ2iuXFnwGF9SeoUjfrLBPUyYJuHwzGuNBQnJ8gawJEamakJR2F1rfEFWRPdogNwKUg",
  "key30": "X4V9VEFP7JUy1Kq1MoZiVW21hdzM4BXo3EC3X3RT9ZnRPBfC2PirJjVoCmn1EypZxD2LG5HZEsphxQryNfjPeZ2",
  "key31": "4rML7NSVFQK8sENyWsFp8e3prZNFCunyRJDatztF5cdfppKbsPszPhNEuXad2tggk3428KedSgDedUvnraaPuqKN",
  "key32": "4Xd4HCaAunjWHzkNA7LugV52e5SAo6Qk8GhtWRdanWGpakyVuXvRr99WtyDe5q8aGnSRiHQZx93rJ6S8LpcvG3wN",
  "key33": "C6r1mEKenbWqifbS5yrCqPBvfuhosGbU4XFsd9vXajhSfjwqY93wEMYBMJtKeo9S3jB9q5o2cSWVCgCkGorBHjh",
  "key34": "5CdzdkT7q2Hq3RVPkG7UwRDhhQCLB5b9xhysVqkC9stxv7sEmXHhpxjNSio5Cg2XhWog4PBna5vk6YgfnHtGEYWd"
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
