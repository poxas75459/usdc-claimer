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
    "5pru7dHeCxXVVczT2SJgGtzs88dxq4TpbspZJj4mThLa5y7LNGwSntzNfkq3XJgJBWNGMGF3GV8LhNfodjcjCmwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JG6noGyaNvAau9gmu16afQXRgqChTogcn4MPVaLDLnTdYZSeJBgU1RAgHYMAkrhoWopnfdVzMY98KJW18SySKg2",
  "key1": "3zAERZp4418CDccf1hXyY24SJw69JZECjzt7kfnhjraZCE7dvDhDktPyxnixpfoSaqRxrWNT32GY7aYPZvTe6SM4",
  "key2": "55CDcYVeCEVU9HRJMBSeWDPf2eHYmTNwsMFjRcSVvL64LMudFa64DMprcmbnPnPodEu8KEKxUbCAg4ynEcyciYkp",
  "key3": "5X6oj2Lcthx72hSvrGBBemqWs7gPRMrCDcwb6fWLgGWXav3sPoviFihZQUQaZidQDfn9koM1HQ4px2qkqSdLSycv",
  "key4": "3n41rX3xZHo6x5uR8bkHiMGWN2nS71SigtM2T2UivBRG5Au82EqQiFT2kwN7KTSko1pNNvDYAQBPRbVP5UQjLk49",
  "key5": "2CGebexM17x4qKeuBk4F7twYWMMnq3baLXDS7BMvSbDknSBV3MmhN5JnstbtMyCcwJb5zoVU31GYUqYaDuiDofQZ",
  "key6": "4H7sL5L998FLXZTBmqSpCY9hwaBxTzoRoZyuXd3gNAk97XxZ3DxViCgUESMni6Sk2rNwef2bGCTNgKpYzt3BKUGs",
  "key7": "3cRQpS9nGP5bqaXJideZyXsUoaKsL1uJRGN9pN8AXhADGJs7u5soerumcPRuPuqeaspV45tvWeY5jzcq81zzg6DD",
  "key8": "Bx5YUjDCzqhYcm2UfCsqwGByGG5PgDVsyNbp5cseRcKVgcZ3zDwgdC4Upweq2ZVvdonB4H4fjjABAZAdSRMDHnk",
  "key9": "7FLhSLTbpCDgL2neAnLKDzq7QbTrhmJ1CBwQNm7LKLWXCi39ce23diDTWbvF8hTMMjmdVYKVRjPFPnjVnxE2HTg",
  "key10": "58JYHVJfzTQZQN98a5JTGA6K4tQkpgyrKKKVWXP1dhZ6fpbCizijw2VWuSMdG2xrb8vqM6UeUv7jYgAVAQg5rj9y",
  "key11": "25dHmQkUK948s6s92CVzNPo9PVdVfC9ADkZPPVgokpCwaNFDxshbDpmxkQSjpoL9fHQL9biioLHbobpUzP9kj9tG",
  "key12": "4VLiZaLzADM6uzt6jaK6tUCY22wFzETLnYKadSE7x3Ux1bUKVYk1RkwXuu3GXCAHM5jSdcvz4AycRRTzwdatnaWJ",
  "key13": "2B5EerJfs2xtSDac1e797RecdgnmzCRMrgMQFULz9SHf9n8ttXS4SD8CiefNE3LMAGTk9cQ7mo6ohdioMbznkWZL",
  "key14": "33KCfAHMyhq1vP4pBgXAKnwK7HDU1Bz3DgrMhKCLjaf5EJH6P78yNnowDQ5XdYJysJFbjpAyrt6KfmzauzfDWRSc",
  "key15": "5mPNApscdELSWAeeqKgQnmWv7XiYGziKRTcbwdTXViYfvzgu6gv3fdAERXSBVeAtXAR2wqgqGR98EmLcCS6oU72h",
  "key16": "4j2jdHnJkwKNS6Kip7nZgot8eeeDEQh3AmBvj2pEApDpmMsiTKmczqi3PzMHFsWVRjN1f76VpFPrhT5XSZYNmQAC",
  "key17": "5WxrmiNvt8xp69XLNXBvxannhmaCQ7CMnW2QUqVbp4hPQtjYGFX7kd3AEz7cn3PnFYMXJC6U9W8ewgiJw2gxokxv",
  "key18": "5TGByvqYSG4txutN3duYbg56BzAmcn87VFdLP4k22o7cNQuU7AjsrTWbSM5y6ZJuDmFTbz8ZjGKuHbr8jgxoPo3r",
  "key19": "rggPnpqmX2DQA5GwJx9NEKAK9QDPVPGK5f2dyt1fRjMLDRcvFhHUHnSxAEAYsUngJ54E47DbZueGFGHKWaWDXLs",
  "key20": "JncENZLnQwmBmR9dtM7mMdfPnPUuwLWscwx4YFSLHndP1TX2Fvv4CA9eUNAfMScAizXPjUwXs4cqSChbNdkZBtm",
  "key21": "2FyYNAVvLAvTHSAN2FFV5tXecRLr1hagiXKfvsFU9HAqLxG8UUCSCqxTiMqmXitGQTzD7WWCbmiyCuzXN2cQuZA2",
  "key22": "2xCLKoKNifpLSTVnPWRmgm55ZqwXbMueQg8375oJm85Fudmz8BbzyQjU44MDxnuqtywsv8wXsvA7cuGQUyMoZ24a",
  "key23": "5E2sAJHDgr7hevaYNHr2XcNbJj1Hu9MWhLKXqaLcaLorejivpYBmx3WMHz7u11p78ZNEfntP1ACVS84M892q6mbj",
  "key24": "4woQ7UX8xjnjKwCeC5JPDoUuY5RVWcbx8XMHwPinZHbzWqa8UjFDYeL447Xp4rJzKGeLJeL6gBUiSTtLE4rTxBrV",
  "key25": "498mdz1Sitqq62qjFhBiJPL66J3wFtVpyc6pJFwnMuRWknNRKAiisBecjdE2pp1wVUt7kZnqCKeQeMteo9qdeeKu",
  "key26": "5XogtwqAC1ukVvVm3aRPM1hvzqc3ZB118KJ3oCYjxprZ79K7aaYz5wAe7wWrc7Z9Ticw12zsKmqu7G6qbvCjhh9f",
  "key27": "2NgrZm1Hk6bTAf1LtoBZtEohZJ91qsKbzA3MBF9zuxS29hgRw5PsezhiyvbihY7q8onNaUJn79iCaKyrN6AXgW5s",
  "key28": "2xsaVcphgyN2zcwmgZmR6fvdJZLhwgJ6feudhRRzBcnaNsyKXVeEKbBnVQ3Kt7fdMihHgjb2eDnJEbp8KBaEvLTY",
  "key29": "CRany1HiWYc7ziFW66Fc5YYodNVE94ap3pVUjujJdxPmNXD797gj16dxbsKsojZ3Xngx2hZztxNqigE46RYiPzg",
  "key30": "2C59BC5k4k4boiQ9H5tWfDoB7DE6G5WGpkAZnTz1Vz5dV8GmRAYCdBrnfc9PvpN6q39FtnzfB2bkNqGjDD8unbcX",
  "key31": "2VWt6w8PiyHN6m3zQbnB26fXQuDtcHCv57DjdkrXs5xoDNz7nY7Zua5pAS1MLKQVqR9ohwN8xhExDpTSTtrifAdo",
  "key32": "4ttQSCsPuu3HqDyLRzzciCqZuSyyxAXGkgCuV3Z3me1EUzYGbFyT9fsGc7YyGU6o65ecCgYdF818LBk51xbTJ9su",
  "key33": "2YmswYNhzuq7G6j7JZQ4wcc5ztbouw2gseSDcMf5d1fG3dH1gvPSQedkpi5RgJ1ZqdPHAxkFuTQw6NNsGJhUcU3X",
  "key34": "5uBBYFHroRdhex6Ugi1aer9jL8PdATj3xSqMRfJ7VghgvpJxwA45vxdAebzr4qzvq2gxGXoDyBoAbLQgWCbAz4bp",
  "key35": "34e37QmPnKRTc5Jt9AkiKpA8euLdW1ytNySHGNrVJPuww5Qjau4HSq9QXrLjvD1Mxd1TLMwX7uXRBeGcfvh6cLqX",
  "key36": "5vpXvmAbY7dFmmtNoZKZETmjh1Fwb3isGMXjguqaCRZ91fhobWF4g8SYqdp88WXY1eeDC2GhcyTTc23DmNUuN41y",
  "key37": "2rPqzrUibuw6ovLmegJP2YHeHFcNszCDmFuNkdN3oZAfJGUumdeQSnaoNrDG5R7vwM95GoZF4rKq7n1P8wcAJCAn",
  "key38": "4TmUF6G3SHnRUeb5GCQQhW9mRum4fmtHWoHxhbr5FzhCkbKPJk2mZHmX1AY4BFbqXhGDK4fdv7vabUH55jdZw7vK",
  "key39": "3SuJEs1zvZ4sig2vBjtMrf7RSZLG7xhwbkT4okWXnTJtZwy6kGvwudD6TEDks6jgr2f3nE6Yf1DcWrpxQ5QtoP6Z",
  "key40": "Y1iKZB7RWNWnJfkCksPPjWWcaTUszHbQn6dvAXX16Uc8KG5gWdWgm42fDtp7UwtseL3hSoq9mDT8o3Mag5ZjMZS",
  "key41": "3EAFfsrSdixVtTDZtjWbmBTitjgoumqcKU8mApbJY6836cUZxkYBGzCudrBR3JhS8vFwW1eULJgWFd8jYTE7xoWt",
  "key42": "3G5AW3NsuniHgwoxQfCHdb3MUKgtUZ5yKZebMD7s1DYU59MbEF57rjv26JVwwM81KncHL21Nuy5iDoYh6hUD9394",
  "key43": "4482skBVxyQYcTVPFzbcXzRV15t4R6ZdbVFAxz1fPKEhNYQvxKtYcfr3wcJY2Lsm9zrKhvkRE2Dch6ppvH9pcaoy",
  "key44": "5X18GSybyTtQqHSdisDbYmb9UB1Kfs72dSQB5JpnY6KCfd9T8ohd7znCNzrzDwBDknRJNEJ5rfJ1qor4i35thHkc",
  "key45": "5hzQnC6jmNdaMCfcuTGf1okfiVePLEoZ2bexn7zVGZYvGib5YYE33wcnmNrVP8kPpkN95kyFPXgYL4nT8unmb7yE",
  "key46": "65me9wL59PXdjAhGhbXWQCqLevuNSDPqa4CecRJBEtwZHKeziQkYE2trkX44665D19tfwtDN3XFgYR2tsjTWUmw",
  "key47": "2KMmDX4bWhyL7S8QC8gPHk61551eHh7uvVqY9wW5xZp9SHeGHjz3z9JXmxcmUEYChkADRdt3VYLHuZ6T1sHEGgpN",
  "key48": "5qHtK7iTr5ysKhSt9pRpJQhXT524siNjQGwo3uZCb9QXoepUqKorQgyDRYDy8GQ6GG6SDfskn3mDv6oMmYqka2Cq"
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
