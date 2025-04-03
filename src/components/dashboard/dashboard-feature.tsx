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
    "5gAWXXLWVTPcz35gEJeZiRWskQfmXm3ATZG9ffc5cipfT3NworbaBnYP5ZS3iYHfR2WQaGMe5TwWugJUmPe9evyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hgHqTYk6W9fYfoZCcgHkSfcXTHbcyHVf9caQdoL6VGFcAx7N9uz8E7d7vMsNXctjwhC54wHgEZHomHMY64VVkS",
  "key1": "S6JXtgTWPLwxDiaTPiNAG9AfKHusfYnbkhpBWJP7Rwi8LhrpNgjHuZd1LjJg9h2mUGd8DiNaftnD5zKK29dth72",
  "key2": "5o8MMEZR3AG2VVR4Ym8aa8uWM3cLFruResqm5QCe7zqSMJ1cLBVbWkTp1aLcgXEzSoRfv9YzQWN4mW4KimxfdLdL",
  "key3": "awjt6WCyiWLpAcoGhEndSruhMErQgHpJ6RVmCXye9udzH91mbgtKRT9CK7oTDp1hHpXhD88kVb5ZqQgovhstWeR",
  "key4": "GtLkJC9MjbswNDNapNgyHkF3ZvxpcpGr2Q3Lsq12tyS3U95FCqocJYERUZKKSyLmhbFeJmqq69pp8xtEqYzf4AP",
  "key5": "7Gtusxyk5zikpT7GbkdqwW7yopXiKuTa4nT1uUextLTDT34fasni3z3MmUjFGMTg1bf2Cc44SpLJN7KJaCqF5iU",
  "key6": "4AwgYgFf1rpUPn7UYW2VGCWShBdWnGNkP9FMeGYq8oD8UsqXxBKxbCZfFcMUGfK5pmBnq48dw3WaQJt9uEhyfNZN",
  "key7": "uoqNtV5rs8BuAsMZkuQSHaHzVszfEc8qJ1d8c68LWws4QaaUk4Sye328Evvr5vzMsDkfDwLA47tGwaTDQuoq115",
  "key8": "24PA6VeqyFm46cWd4dC965HWN4AoXBCK6jv9AnzTF1L1TE17LroRDYed5HibxDhPeeVms96NpQvV9K88uGCQBA9C",
  "key9": "4PxXoKrAG41hd2tPDwbxQrjFz8HCuwZ2aKKC8rbUFUJraRBfBTcUzxEqacPARtPQyyELzPWsiCZJA5YnXixm1jM5",
  "key10": "Ah5Vo6d6fw4n1CMFUSeJyWGTwrgZgcAvvpqZ8mEGRAuetV38745i4EXdMfTwUTbQ6KsZLK9irYe6oJ6K6M6JJev",
  "key11": "2hXgZNzkQkpJJqApFHb3d5wqzJF7Y2BtH7wKE85EmpDeahoxackrJmqadUhtEdmXWxbCFKfTf3xXGaidSQwhPCzM",
  "key12": "5UKLoU6RhBBpb2DLXkNc1QkvDFS8cVLpuHqkzGXwtjeatAKWcjTw5wVH9zmE4796W9zSt1JbicbunpaN3eDypJGs",
  "key13": "sCQocwXfdd2LXA6PqGs3SMKYzZiy2aH7GwnUiq2xuV8qJW6w82ZKNLdE2cNfj47SXmNddh8Jqgk7P15kWTJevkG",
  "key14": "4WQQydoA38fw9mnWkUAATgjSdSFg1i1vyzDdnjXyr7SQQpmyFZTCaHJmFNDR597u3yuvFdodvdDzWrRppADaoAzd",
  "key15": "5ye7VAvxQHgXy9MQUgUFMJXuTg3JqCzGryt6eEGeYLVtVqrfQZYZcks8PGAnTZVskSARyiKkni2DCv7hFTFNkGEy",
  "key16": "4DYAJS6WRktPxYogQADJiUWCcGBw8WUuMyMCiDSEK5LbDP4nFJFvGvXVKu5UEhm5grm5QnLzdkdtr1BQQpWdNwhB",
  "key17": "49WebQ9EAbLQY2HdUsGPXXbpXAN1vEkL1cS54YgZkbHwvGfJUqVhiomEBLdtf1kHXmMo8c79LPAF3fb8dQEAQjyL",
  "key18": "2ZGB7SPuPbHjS97tWf1S9ZBLqoCRpBvoDwZKUnqMCQP4RASfjniiLmeA5h5kZYCPtFzUQvXeuEjonwZnWo9pXj9K",
  "key19": "32g3FdesahLLsyHtfnPyyXso3wvUuGiZLH3djwrAEwB9Achoc2sKP3mSz1thyPUDSPxz31PWpwDCy7hFqok9Bzyx",
  "key20": "22SnDsPK3NoSFEz6FWz2DHBV7vyXfktYH6ZSCHs9LVJMgAH9CS4EWY3yfsEPUTwQbS2xzUgTvgwmz1ELCnX9Dma1",
  "key21": "2awEkeV117ugVuT8d8WUZjxfJQ5nGod4YK4RACUWSDjAg1yxUEXHqetNexLCiB9dgdx1CAMXXgd9SFkmdQu8jFhW",
  "key22": "aue7LcB34AXERzrpUNkQgQom5ZurfREhZY2SgfHWd2yAbXxLW9NCj5cvsXYsr9LqCjAVG6pHZQARB36cxgpLXrT",
  "key23": "3BYRuiyrJ4ua6NVu2VD7ZYDsDf9F4vFU2ybYJ4awnaoFY9BArQrTsS2AEJJhxRAdFbRiMSSkinhZ2MmxXH51y99K",
  "key24": "2rcDxoHs4qCLRXNRpq2F2ZBxBjmu6pt77GMdUCUMjFKJDRiBVDX4yQoD3scdqRpkQEQct1JNgjt1R1m6JzJmvkhg",
  "key25": "2FPKKrK5yjRfByFS6BfjwNUSPMy1VagSBqZqcmmUdjADTGzoc6mp2TRWjjTurzTuVvGMyFwicCMgN2NwWfN7xnDs",
  "key26": "VMdwgpb8CczbusTz57bor4B7AccnZd6GwgTRakAFpV2ZHkRqSU4ZqjMY3xytZGjXCi12EK49nkCPCkEAqboyPwT",
  "key27": "ZopMambZgS49fuNc2xHuhdWuhNKmsnZKiJxoiBvpfByjRcsR2ih9LXp5aRdYNvYKg4uXZzmPrJqsFLQ9xyV8NGD",
  "key28": "4nZyoQg1Ks9y6JRGBWudWZuM8r2bTowYgMw16XXTSjcczmhd1gsNiVZQCNyX1VeSW9wFTp24NPnpCjaDwuQM8Uw5",
  "key29": "2rSNPfnRtp8awmYaZuSmABR94im88SKhded2WbLYE6ZBAG49pRL5DZaDpTus3iURJauGjyAsFNu7GSJuf7Cd57vK",
  "key30": "5HMfTVa4sYEfib4rZAxMFcTX2SAXUyuwLZZLPsMv2TC61MRoS73HLaDqrCSA26cvBgumfoXGwv3gtHYSdyHn1yme",
  "key31": "4151pdv5dgDwoUUxip9V7ydhZQdfjyvDr2ZPfvf978q553jmUrkpx4DyD6iAxXJ88m3z5N6mQBMLxtD1xu7qvNWW",
  "key32": "bPGgdePwa3i6myToLMxxuKjDyQ2K68KZiDfWKJGNyBsUAkQjKXxDRsJpA82Z5rjXpFHbCAa21SvLmTgaSfnkstz",
  "key33": "3BU74RKT42So1rgSBupX1AAvxKnnd2KzEGad6j7fRtcBrcgF6qEChyYwuCngpreV7NFMvxyDo6P2mz3QxZ7b8t4k",
  "key34": "5V46HYYosyiNzt8qXN7s5F71xV8s91pu1K2TWXduRWLJpfyWFNYffYZkMrMkPKLRJqu6Akx9UCTmjLFYZ31tv6Nj",
  "key35": "2FMo6wXUBiJEwFJ96Z5dQDMN81Air4hiDyy8Ngdkh7ACpBDwPUCZYhEsKJ9o512in8eAhULMtKCttnPAfXZ4D5zT",
  "key36": "5jvQxBrK5uphkhHJivJqZqZcnXoGstKM3WmokpCyXgmAWUH5bLcrhXHE2bW9ywjNvLSr1ZdkZ69SUbJkvtxdMyaa",
  "key37": "4sautagauRBvgwLjp1TbD1EU1HRMKk8gUjF7Cspd52oCJRavVEwh7CbPH5qNTjBTJvi3Pf8dAuxaV5tahRVyG3Lc",
  "key38": "5r4Lti35vGJpFCM1Wps3H3YULm2EmgeX2qCeVkn5Ld2FtX6fRkXmrtZ3qSWeaUb3HogHs8Hm11G6SXsvrK6oTK7f",
  "key39": "3BhH1fhEQmACgxF7sjpBeWsNScnRuEMtxtkNjswTz2re5E5xZ33cGWVU4fZnSgKckLBgH3dqaEhJrrZk6jWHxpJt",
  "key40": "2wzHimJX6c5KWoy3aFShtFfZWa2eRCjTwaY9GB5ZENSg9FgdW644afvEAkPrS9JrDxxKzNVcBMsnVCau5NZeNnYP",
  "key41": "5BNRv4WErAvKmiMUB8dYXXuZmziSonMjLwo3XMq4KXnSA1SYi4HJxmhqStXNpLgcYQ5bEuhspvzZ5FfFGqpQq1SG",
  "key42": "54PGTVU7bQWQoazFj1PePpG6sDJsLRJRob6NYLMHrEVpx4eV6KjJKWfKSPAthTXKzA9rfguqxxzv4V55XUER2WGS",
  "key43": "47N7zu5rLbsS14E6ehoxHSfoHhe5a2VNEsn5KYp4EEEoLtKtSDNK7kCfSWHuuQeEzpRPg2pWy51KbYj6SFmhftYm",
  "key44": "2qriUzoEejHcMiWBy6bFy32DoQtecnbg25tbC6wEASf5RsMK2r9CwhaVWiE6FxCCTGha24seEk132NbgNdC3RotL",
  "key45": "58FSPCkbRFYzBaHuzgnjP3KuTkCd3rkHMMZZJ84qs6Gpe5W8rKY6CjKtmXCqua2wfG9c35WqqCCmdfNAmYt3TBYw",
  "key46": "5ejQGve2m9dvh1xpg8rhPm8AUVyu31tW4LENicTRGRKnKrq2F1fW2qiido9oGaLptMvwWu4FqQGbWgGTZdWEvBxs",
  "key47": "4UxZ66xHeHpYbcMv9XVDxk2B6w497xrRsZX88XeWAqaZCz2agQHbMBhw5XPW2z6efYep955X6GCeHQmmisdBKSRq",
  "key48": "5aJ3jK9U7ZCXCosp2njyN4Wa6xmZa4EFKcPJRN4Y4GCH4buQ5AxxwSK8AG4EBHtNE6kw47McT2net1Qv6LX6jY8G",
  "key49": "4RJqyyxMUhkVEEAmB2zctftPtrY4JByGGfWaG4zWiUeQrnFP5seBcyFN9nsKnxGjetjpGQAexCTsMv1GhekcY4Sz"
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
