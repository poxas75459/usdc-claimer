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
    "BxawN8MGSpvjqaw5za8yYUVqVawhNRh9YLUbGyigBjTDr4jHAfAhcnTxuuxgDye5DtzJWQKs2m8cV4VfPGszuEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HQskM6kCWCUvv7ytNqs7ouWDsBTbWXNhTpKNiSCGU78tp2kXSeATyNzvqb28hqWHe3mtqzBtNtCW7bJiNNwuo5m",
  "key1": "3gegJZRjZ3GLzaQugJAkuXmGaPA5PjGB7NF9hFtwFGLupgQhSfk65PcAx27QijPub4iSoWSfMStgLVd2d9hDKNqP",
  "key2": "2Ha8pGtLUcQi2WzzCPTaaJGJ4fK7Nq9iShjNg8qwZVdCPUeVwWCUx5xtN98zY6CexuxJ1Bnn7FWXr4yeKUjpbqgr",
  "key3": "59zLW4AHfXmWf2wsB9GbMGfRtyPMhkxa9Z5RXGqjJLXeeQTGATeN451xSd3MwhSHqqEssaWC3voCb2QVtjNf8L5a",
  "key4": "Dw7JhiGEntorK1Q66wTEZzWM72e4nJdsrfDe8DpSFCuUhjGBDVZrXDxAcmxgAsEV8rmxacFjFXKUcPEtpiPTWbA",
  "key5": "51euVXNvGEDMmboEH3jv4Sn6VD23kTpHq9ENKPMXbWLgCHxe1b54M1uoFfMAA1Q21fzNT7GYSfWwrikNRYHkZejF",
  "key6": "4pbYm671Ti4FNUj59Y7rA7cdfToRA6eucWtBXudmkQouZ9uJBREC3JUieQ8f4CnBKyHBg7mNHpYw8Vq5UsWpp9yA",
  "key7": "4hsF8hZyWdtjxwvkDsvuLfY8bgfq4edEzS2mLEavHA3qtdkR9zc2VBSpEr11JJD5VZjG3iWT8EmASJ1ATaBWu6wu",
  "key8": "44TZPgzGVLRte4rWioUaDbpoJzJJ8kER3gPYgyPSpjAGYAvn1tFGuW7QZH9Ze6gGkHaCPiy8rAMTAaRD8Kx3NWSf",
  "key9": "2hZufWPJpgaNNAHrUv7Jzwh3M5mePb62EwvusoWsPLBqnVPkE7YKHBtJtWkmrYBcJW7AXcs2g258jMxk96eMXUCA",
  "key10": "4A1wgFYynyG5sp4huJDhyRdCvZqcX861ttfEKEHcxvLUUapBVR65XXxFs2NZntxFmzsP3pVGEkX95XVLJQ2mSebw",
  "key11": "4bG9UzVdh9rwhoghwqCbdpAH4k6VCdjn47AEwjVDW23Gi67gD8DvfGWjzjNUTJ7ECBHEWBB8dj9NTPtWzvtitrz4",
  "key12": "4yQjP9dphsiCqLqYRrRDMUt3EwkKhsEFHvXdZmgSJ4rSn9xnKhPUCrXQoALAmE1P5bvA5kPTQjLKTZcupsq4BgiN",
  "key13": "2PUWV1XRAVrMJyGu9XK3gXeEuWMgRwr7yWxuXSmMmfNAuSTg2pt29fwuMiqn8cW58FqreCUK8d7kGFjBZw7EUK8g",
  "key14": "4k19aq8GCQPe2Dy3iQRrqjWWiGi6EXtKqg3GeD8t9gZHKVBieqtfDhTvB1pHR7crsR57SYZJm53HxcigZygqDeMi",
  "key15": "1ezUSkcAtEJxbFj1VGFrgTJ8xj6STyVm5DkwDwHNfoGkAtaLA4KrRiCPXVMG6LYwsPXHcawehqm2RBpkZmj9FUV",
  "key16": "3jqGo8GTNjTKYTRRd4LV6eBrzPHkKW1oFw3Doj6f1Dgc3LrHwQzf6RVnKJeC1S66NyQjhzg9XyhMEsr3VAuYojry",
  "key17": "2S6cveKRAHW6YbH3sJRQngEXqGsPJeY5tfBY1c7NHLUZu3Lf3UZFT3ETXFfFhhrjNRbsvuRp9SzFQbT5wNdhRbaC",
  "key18": "SfkdA6tGvK7dZAFUCshDb8ZTMsCFgo85T9TcMEHz4nuN9KATo2ZdnP6JcRye1q6NsfuAJ3o1iMhvfxVCWuKGQnf",
  "key19": "36JQpJu2S463DpuqT2xte1CxHLite2uNV97W9XtPPD9ENvHA5T3bsDLznNwKkJikH8yaJj5Yx5FLptoD3MdY24Te",
  "key20": "5vbhwi2bMG2632ddUmiDqg2QC2eVR1ypd16H6TqNnjKpTCvD4HFCZdSNPTXQDeZPy87BzarprU3yPXCFFvnz2u7d",
  "key21": "5qrS8FRE8Emm6EW5ZKSH5Q8QXPdQd1yAugSYAp7xu24CMb1Q39AX3JiumDs4fBvJLc41o7p2keFATpoaATfs26Dt",
  "key22": "3y4jYzus9NsNXRK6ugcES6tsWUjQccR4wqwmvFuXeLVGgTrboLLCgVBg84Gmg8nq6Qy6StHvBhCz4fxWZ2gV1Qhz",
  "key23": "4o2RbZC1HrPtNg7QKNegWosaVDA9iLB3gTFkT9e378Ktzvs5ibpzeE5ZQWe1quV3HX5n8dNWGF1AaPTLD7hcm8fe",
  "key24": "2pZUCGump8QnXfobQ8ZhyiVNFU9cFeQKJ4ZLqFQ6qGz3q3qRyEeDdhP4zze7T1o42VL8SofT8tsYP74raDTEnjGP",
  "key25": "5KfhgkYXUnC359X33LdYcmjFkRCPBDXq9hgakubhwHcEE9u2aZdEVuj2CZQ8KZeQpA6U5dxY5TzbzYq4AxViNJGW",
  "key26": "3vEHh36HoL8NsK6wQZUnCmuNavys9KwoQd9bZQY24DQmuryYCVtNo84fWfTAPXEHxantKjw7r86CyyVxj9bQT3f2",
  "key27": "3TXkpWiC5ZMYkP3REpuJ9DM8tRcUkGEN36aCHGaB2HG1mwXJbY6PBqapoNtMkYjjyjPDPqYVzaguPfLU8sE1PLwq",
  "key28": "5f37kUg58nAa79XUnpgjbJzwro5B7KwkK9ApFDHo1RbDwdQNTQpcMYwSPWmKmiAmp2vBzyCFMRK2EpSvMMZqyQhc",
  "key29": "5EoX2D4A1JgsSKeR5yKB7XVGNbPwasSXMWazaFtKbsfmGmyt6TAgrzYFCmQpv8dquRbpYs3coW2fJJcJZzpvKyzG",
  "key30": "4rwMqSW9mga4YFhhejUm4WFM9RFEDwsmCVh4whzPt2MwfV22Sk55QWDbZmcFLHbcsfnmJvg4DCkma1GBtYfpF9Rs",
  "key31": "2YL1LDYpDNHWFQdueVpXj6a2qPUdgHPStU2N6xoehkJbiiXD5dWVyHj6ueYGCCpnC77jD3V1Xs4KEBuTVfnUDw3d",
  "key32": "4TM5XXPJw3sFR31aQeJULwyUG9wAEVQdKFyy9D1AUPW9xXx1dbbtfobUcnhevP3i3WBQyDjDzZJKz6EZUAALgFtW",
  "key33": "639fKMLcstU9U6sj3inyoycLJotkvPPq2cfJdSvMHUg4UK354JH5mVoDXBvsSf2mWeCqPxmZFvSESeZwfjdUod8c",
  "key34": "CbcqMA2wXhs4SKEK5J7jztag8C5TWYBQNbDfpYcHfi3oMmRnDjrFRvM2EuB64y7snMJZzh4YKjYtfEHjJJmJaE5",
  "key35": "vFp6te6ssrFEtQ84E5crUMCijue1QoAh5xBHaFKtny1jAdTTbNUYH1AWA7NzPDvFymaWWJRSSYRyN9mjoqTojq8",
  "key36": "4R4ApaHsQBCCwYf6SwGkWqRAK66zk5mh8ZW2ML2xb59bCwAGhDfB8My8Snjm5DtB7PiHesejF5SYUh5s1rf1bGC2",
  "key37": "3GyEmQNmMMEETUsqttpsckafXDU4r48VPt7FqyABdZhHjkoPw7wyTfM5AiufqLcEvRALBkmFXnGh2Yhkw2b8d4fv",
  "key38": "57r3Nq9aRJq7wTSmk1x3yjPStLKDZQiDbfqGZBmkcmxfdpUB2UQDve98ydQR8jhwE4ZLwBuVDgvzsW1PWgNMCwfr",
  "key39": "4F7KttCc5Uw8x8jwe4PN5XWcMYLrFD3b8a9AoCXVxHo4Jf9Gu5E2fNgs5GoqZQXVHUYNah5pspYQ5isaYZpCHGzJ",
  "key40": "p8YQACmzkjMdUrgTiyNvjASUMsKL9RUVTbzaypQvubxwbJVFaVBfQ5yzBeGrahDvzEXXWHKCqBHb8L93EaY4EXD",
  "key41": "4CSVAzFgmWpiJHUuwrvbh5wapz82LeeFf4EjBqv3yotaXP5egtHpGqtxptqnj5DtQTqXNtSnRS9BGwwfD1CV3HXw"
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
