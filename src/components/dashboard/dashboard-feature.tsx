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
    "BRMGuLcY5wif9jkwFYRSbW9Q9RvxxR7dJ9w4n5diseGRpjUpXRx9aZBZRQ9dwmK15mehKYJYxop9fFVRsHqG2Hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbpVArQU3XMCjHNSJuubZwWUR36WMspbKqknnvJ8DBXLYk2PM4eCue7jAHuaRzeSQbP2wns5193oEdP7bYWts3r",
  "key1": "yeeNam4rtHMQtMx1UWG9zyNmq4jJ6hH2SqfBQFvv96SFHLbYc1kypijEcCcoozUwQJcc6sVjwKthkK8xPUWcQ9v",
  "key2": "3YShsMdAdwAsrdywuK2Y6D38swrp9hDrtXZsrLyF5NF8Qj4UrhbekujXA93zGeYE4XXR3yjGafv8GM43UMd5FmAx",
  "key3": "3f17dtUGjgkoeuE5mEy68DMzFwQj4EXPmg2iBY6SdbDPXwMDBoABc322ndJm6VRupQc9VxBJWX4z5ERiNhyqPceu",
  "key4": "4jkHjLqwyEzvF4i1CzS3squXxeow6DuA3P82Au7E5zYpBeNFxgrMZ3XQw4CLMww2uHKBYbfeewNN8GqqZHkzjMMQ",
  "key5": "5Dis4b2cakSkfPSnMhkVvQ9a58cxfiD7ZSwmD5LovTm5azYRHC4hUtmyVwcXJEZF3ggAgGkNAz4qBt4xyqbb598v",
  "key6": "2uerp367hshTvZ8SLefpUrWXf65RDfdyxfc65aoR4gkMwjMTpXhTvBjXz3MfZj9XuKKbnkpBduSEQkxuU9wNVxLc",
  "key7": "5QKppEtQMN2dkkd3WsiESAZX91gPBP3WHuNQzkXBUFy9XP7EtgM545T2ctXT5NQKzntmShbPqtaeDZ5NTer4qRH4",
  "key8": "gg22BcPu8cpCWyRDoAQppZtLP9ughfSYHrk26fYJGvdPpn7v3reWZRK8cnqyG8T2KH1fUdcdUZfyCpeuvDwk2oT",
  "key9": "Ls7pn9oUkhd2T5LoEcDvU65iG9d7y1BB3YdWbVc4QqMG2KdFSHbzfiLGkNwvaokeDpXvQWNUgskYwXZRh65H2ZE",
  "key10": "2YZMxrL4qdyzGcXPNd5aANzApd7WPxAb7bdrkBNZVC9igGWcwgFETChgSfzHdNR5VwGegfFh5xg37UA53EURQorS",
  "key11": "2SDR2u29ffBV445ZUhioJjnhaC59yXENAe7PjEPXeMxBipCzGd2SPRRV5nP4ecaCAosu22Khd5kpRmJGQaYeWE1A",
  "key12": "qXLVF8SFfA5qyR61pqHFSRL12aa96mGaqN7Uo19q6prKYwt2iwkcthD7ZCF5yqKRaSNWDVyCYorMTNteejkhCyL",
  "key13": "5CWdRK2hCM1X27cZvftq9ALgbdx6iS8CxUHXR1vzo2tgfkmNUtbBN8FbkeoyXXuiyNzFw9DSJVM3JdRUk4Z8MxqC",
  "key14": "3Dbhox8sPmesHg5JYqDzzLHqyHSg9EtDkm2KhhG4ctL4367sKYog8H7Cd8V2696pbwLuNyAb1divBj6u94imvpWB",
  "key15": "3yp8V5zRLBQGdppW331N3g7jr9DLiHu7Rg6TxbqSWk2EynYDJzC5LrF4crGHZGYbxhHjeqKJYaL7oHqXY16T8geF",
  "key16": "hvA5wxQgR5PrG7HKzmfT924CBpaBFhCKsfquooGjBbpMNNZ35xCAYnFTzMaXZAHU67GfgMm1AYoY4JFwB8cuvfr",
  "key17": "2BmLbvWMJ13LHdyuEiX8nAwCQui8WJDdv8pMXhtkQRjvdXMahLQd78qjazvopK1QntJuJWHyATqnCASh1oMQerH4",
  "key18": "3MNnJobukbVzhJWRBkq4Dc2NX6ufy6eLumbyHiovmqKGU9DxT3GXbiNFnGsCa7FM3GGdEEZwFur64K5ax1Rr67wJ",
  "key19": "fgKhnMhaT3mtyC1B2TMBrPFxTKUd4aQ7JRJq4yBsq48Gv6adqF7VEykzJZGBThegWEZeUN9hdz8tDS3RXqsveH5",
  "key20": "4Yfa8QM3C8KEmAZTgcd6h5VFKMjVrCmDVsEZU3RxsiW6hTzSkZuGxBWmzc9c8iHCdYtdczHhNXYrruippyeNm7bF",
  "key21": "2tcxFbsNXipC3NHihd5yqPTVuBf5PbKDp2tEcRAmogFyg2xQU4FuBxLbCwEVUQ5tXuPm77NbUShPk5fo99SyiGW1",
  "key22": "2osuMdUX3aEpCxHpRnoLNiJC3mNFf1mY5exKnMJTXpbQQUJigEvmvR5UYyEjGkhrxkAqWKxVUnxXBFYbjorBQJ9C",
  "key23": "21dJEyF5bDhRR8TU1cNGMUyrBcSnaNP8ztckzrm9sigYosJtqeDWUiEXTYvSrkfDap4VYm79rgqui2iYy1STJ8Yz",
  "key24": "RppDnPtHLZSzbyJe5PCSqq7QTN14HANfuRMS7Y4ecd2L17MCNxW6yzDgQyDijhP2Ha8yAhMzPLs83dW19QKDEfA",
  "key25": "5f11kU2ZfRcmVa6DBXVexincZL6TC5AWWiPSjtmmF4ip17zPkonPbP7zkHZ7pJQzN5JFqn93AZtKnbCwv3KdLMdF",
  "key26": "5eGRDwg8v1Sd6UVNzY8UehEqYWb7hZQrk5niSxyJzU7mQGo424kSutBBBdexBe4XAmo8J7Wy3HD68o1dYJkvSWAG",
  "key27": "34C9VamYtzVdBnju9HjmDDL8iyfBzvJY8xvusQjqhiXSSaCnBtHryQJYEahuA5WhWyNcFk6h215cZ97bEqjEhhi5",
  "key28": "4DaRsNkB6bxiMdXpfuQje9ZJVppUQSK5E7jgKtZK7WPo28bPfn3ikGYoxecbWgzTRNXPMawxU7NDULAwpq8j6w9m",
  "key29": "kDihQpZUm3AS7qMgBWBJE4rqGFkgXC8RtCUwGmZtP1jDeSUhTpe5sAfJxxpRnWMqTt3tN1PyXdHjX3MEXzhM7sF",
  "key30": "BqeumMWoaAxdwRYPXTzo7F3TYNT3uUrQU1hws2GHU3RusDbCub1THvbB2oXHz4WnHfK4aEEJ8Uk4qThdSFnkJEZ",
  "key31": "33Lo8kqEiQZdrv1QF8dga5f1CM38K1pZknoZ6b4ujFGcP92HCTRf2FTU9y3dphngvchvC7FaXpCeEBRzQ7veKYwg",
  "key32": "2WDTWChQ3BxRF2iuaKrnLcRXxpj1ohw35WecDMUm57eHg3WX8kx64vFRm5gvvMDduK8gQHWJg8AqwGtNwHJtu3SW",
  "key33": "3HHowwzEkSZCPXzj5EDj7nNwzysAs28PGusHomT9Q5YtfxZc1fHEcMKKeT2JCbmd9Ne26eVUwEVL4ed1X79vtDot",
  "key34": "4Cess8H39sbma79vuaKcyeaHXaLr8VvRagBri1TKr2YpGWwjvLt9e15eMENpYbME6cjq3Xns1MsVTBxNr2WXCmfL",
  "key35": "3rSDQtEYvixL9crvRzpg58MKvF3FzPUYYsYLifTE85CiANsBG3Fh56sdigrpJsqqe9oFkWtrJuEey2rmYTKcmrrs",
  "key36": "2C7mDMsqpWfykZBkvbAwuNY7s4LsXZ4BBcps8NyGD5ibTwjRw3vyvkNaXg1hGRasZajhUseeqgT8H3VdWiKr8zkg",
  "key37": "BVYVYxDkKTMdr63XenzrtiodQLRGFwgCLCE3HwVCtP97jBp2RuC9fZrdY6S8FUaS4N1ekh1gNmafeqYWwPwR8CS",
  "key38": "51rqYY9CWk6a17ADt81sJ8fduvEgrcUuxaKVy2TjsbFLwTBYUXLactuDQLgEW2nz9iaLrvMH5rq3s7v3f1C9PnaB",
  "key39": "36FNUkKV1nVsuXJTuHrdGFK8umPwUribe184wDqU5rCexkTay6Bkh3oNZ1bdWJnBqe4MbttDpbXiR8GRpGirwvjF",
  "key40": "65Di3A2o32ra9g217Q5iq94CZeHRkJNphNp5ehSUQmw2sFMerp16Ptv61s6kTMsLaG5HEY46xEwvfmNpjc3Xt1ao",
  "key41": "53t2bVnAzPDtJRXSxfkAUfZsssuoZok69xiDHsz9bd1Pihw3N4HLPaPiEsY3GcroxhXR3d84EGL943DwS79PiEzi",
  "key42": "5YSTvv4r9SiYmZYvKy5NCmLU8caGT97ecuPPPTpiEchL1DzHGUejErhm1d4VwdytqGHVKd2HoT3Mi7Sk5umM9z8U",
  "key43": "2o8tL3nB2YLDphA1tHPhRn9QmSJQf7MTkpEtDjmYEzgL9DFsGBk6DBFmQiPyatw95hzMxE3kNbJJmRwUrRz4DdZ7",
  "key44": "3Ds2QNVRCKwktHPXD9NBsnNa64WSUMjUPAq8xMTVqpCzTHW29mvi2SXkSYxHbRrzrDZriwUs7FUZUNbbevLTntgg",
  "key45": "3gAbZ8g2go52WZP1JN8uJbjpvxb3uK6s6TK5hPa9oQBJ1DsLVRKaNjDpVUm9VB9ExVSdxbexsZBXmDjdHVnqq9YT",
  "key46": "2HCzKaWi82KHTNoAPnXDbadcmw88VHW5gEA1Nzpb1tnLw5mqauSxAdoDqnvttkttJdKt8oLbsw9P4JTrnjgGk6cp",
  "key47": "47928DL7yYcyV9wyuPGhUQ3t5gyFZuhvVBn37jZkJB472QYDTep55PTJbKdBZ8YvgtfgUgxKuncJWEhVWG8t8XAR"
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
