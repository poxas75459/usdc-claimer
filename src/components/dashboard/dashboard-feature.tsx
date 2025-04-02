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
    "3L7J6P1VYnBARh8Wxj5oJiG5RW6QcxRH9UzaEeLiXrve73ReBABEt85pj1k2KDe6i9RH4XRG4rBwB2DhGPXf2Nb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1yvwx7NF68wPNegKpYx3ZVDDdRv4oNuceygzYRDKWHrXRN659r2quk3BhbMST4hK8sJcJuuHRVqRY6sWdCNV3HX",
  "key1": "4kph8fFgaZUAkrHMP698HTv5UBmYfRFCfeFVKUEDi9f2X4xLvz32TS9NuKndxA4iygrvDKD6LmCV4snMCkeXa8SL",
  "key2": "3ZoCsPmeVUKRLB1no66p2Znw7uTfQg1RGDKx5gSaWeQ2bvyVGri5LtofRd3eSm1FLcGUiMtnh8YECDNfjmspqRrp",
  "key3": "47du5QF6EvTqTxQESgwLQwByGZtVTNVk95U4zNeCuUTfMRSa2dtjJ8b4ma9Jj6BMGTyebaWKie1roqK7Ast6TaD5",
  "key4": "5Nm2UtbRyThdSS4fpbybW95EZX4nCTieRCRBuqPVZqfJvgda2WxCHtLh4cAR5gD71szBYsLWeaufU51ddjewGet7",
  "key5": "34CeZLWsnBe1KC81CGhea9b3BgAfJEgF114voJTqcZtMJcrGs4aF6g6oW4g1ZzyJPQEzrGdTbcnuFAprgV1W3cGs",
  "key6": "5ixryYcN5vGML1vacp9PG7AXsyE5TfzvE2T7LErPYp2o9284r3rFjUVnoh5JMFiULPVEFmm86VBpobYrCY2s31w9",
  "key7": "37vwDQxAsPnuCx98fdg11kK93D3LXWypdEYPtociYHb7kZMnjKTEhZMPdbYi3vtrQdXEF3tFfjEdoWbYxCU8GJGd",
  "key8": "4rQoAPQMMwp5ejAQpnVQkYXDeZWzfTCf9VEnCK4e6DcipNB6UvbP5GtTWziXChBrGuV5ZxwHGhuSnG9dHb2KEriB",
  "key9": "2txEvb6a86j6yeM4bEkZnnZFYTLKHxGko2kadSMc9yBGTRtiPzoP8iMSdrygZmZra8oJcFZBWZBETGoSebZEhUCR",
  "key10": "4kx7aVKP25Egy4ExhaXyvg7dZm7KFsUXY4PMaykf7xy5imgGJ4aL57KFGH3oSr31FqVGxb8xtc7KEA5oqwtyAd2K",
  "key11": "4vkX7qNAEKhtW8qZULrvxqTJAyFtq9HtsKPBuhuWihVbLWM6ATA1w8QLXwrrCUXaUGAFY6dJSWdLovfuuccU9hCE",
  "key12": "Z8ARNBoEE4KC6XWFRs1WucGTJTwfqw9eMfbsUAcPkxvdo9vTAUfFcaaATimZRG3ytoS3AuR8S98ScKzaoF2Zv3P",
  "key13": "67BahWw2NwXfu5Pd3G1uHYKjP8tT78QiWMB9KSYpK7Ykr9phb2mcJ34BrCVndYBkWSguaXsucTQs2oATr5k8FDeg",
  "key14": "4vKUEZLjh8LdA4dXQKt8uTc3qSCqXnriqubCGkNS6tsRoLNAzg2SHW5dYJ87od15okTDT6gFwNuompu7secCnWmU",
  "key15": "3BwyRBuKyXvRpKx2rwoEWrQerCgpnSe7ohquqKiHSUsFsaTKim8sRGK6x6LzjWbdYCdoqNeea917GAoTW1dQK3V7",
  "key16": "xRbBKgpBnrtHQ2BqHuxzWfoCjXLdLnZXwRLXRefRX9LnEfWybavzuuh4ccwKPLZW3UJGFgeUXuFcjw84EuN8CZQ",
  "key17": "kzC2mWchB3sueqgnnFZt7xzvCHRLUU3yDrnXvPBzBXW4XpgijyyXtPsKXjVSHPX9aB7npBMMS49mZmEcrs7HSRu",
  "key18": "4795q7AMkYJ56udTEsLgBzXPFEF4uToF9xEyMsPf67duTSckiLdgQYXM27yaUEmicZNQcDVugGxWQAiQ7TiLhcvG",
  "key19": "g1GVdEVMENM6qkEZfVSe6zZn8rSYkuAfGTCBgDt5itN5noCyxnVxXAgP7FCBZBXueffbV1WvL7t1pSXuyE6FcFU",
  "key20": "2iu7tVsv2DtUSvV47KRTfyf5F46AbfryLXQUZraCPd8GBk1r3Q4xwGqww8L7GZFmR8RTNiwvvQZK3KHx5kTySKuL",
  "key21": "5HTNLBJPjjGi8VVE2aksEqiU9Ejs885t2TEuadsJv122KYBcstDeZCCbR53FwqDyiqfSTXkZ1S5bPr82VmBvvPEF",
  "key22": "2iuDSMRpiicFESnAeDkAqWpXbxnMTvWE6VriYrDUKfLS11piYYn88PMBKm94U1ot6wF1Bjk2w7RU2fQZy2CxK2LP",
  "key23": "3sJ58bmpPihxsUojddRmUCGwcPa3x1yALywtDHu8HdkikLWBdZz2RjBEcJgguNPGK5G1QLZnXnGCLSAaVVFjHUCY",
  "key24": "5GzgDMNG2dCkBgDEJD5zDeg2fUx9woqVtXYd9moHrzpXSpcLBStdsCTcZB51D2KKARo5UBBWerx5k8cxAf8G6CeM",
  "key25": "2iJEXR6eo6pKUwGBFokyUF1mvczJEDQn6KCCTSbYyTtji1dm211hywXY9euX1bscgDu4s1WSKtzwyFqs7Y6E4EFu",
  "key26": "3hJ8umjPpaHbBFXLoj5SSuQupkFPWuAqojP1NdinHfc9ub9SjG6x54zYLNWvAazqXLyNdzaA2Br2bEYbkRkLnrXE",
  "key27": "2K9MUUNXyJsSixVFgUJ2FRKYCvr5y3upAFShdYZsXB15RxTTTBnssbxFdkUmEW5w5UecFLEV4pVDnhLnyMEicR2n",
  "key28": "5wSrNHBj4MpeXNPNFuWnCPNvc6omUcGyqtUL1FwrhmfgjeSCb4B6WAiDVy6XeWxSWZTKfA5R2nxEaXnHs5ebgYjL",
  "key29": "2M4Rn6UHwMBeV8PkpdodMCmSTtfegeQQDBiLgrj5xaDjbMm2adZ498pHhwWwJRfr3WPBUJy5GDKBuub8CfDZLbxE",
  "key30": "36KdJX82E4EvZJsGjj2coaUG1Urwt3WpuShMYCYG4voMsimodv4f9BvEeGpWCERDpzSUaXmQsrNgwc56xgU5co2K",
  "key31": "5EMJ1UeMijRQQLu7ZrkMBHw69YrjtBjL8e9dExCzKRpbA8Ls2x8JRSfwQRaHPpSnWRspMjVooJkfDKWGeykTYNzY",
  "key32": "2qCE5vKDmbUmymJrnSAcmb1di84upHwWQ6PnMLeSBjooodNE32gQT4pU3i5cWE2a8KtJnwPqkYXLmmhkdyPEghwF",
  "key33": "4oYnLpT6iBBLBu4rbt9Q8xSN7r9eRms3xKh9PNLS6yCt9tkksLURetVo6H4qv6QmYJkuGBnTr7hC4WNZwcnQ9zwe",
  "key34": "H5w4kXwtezaoHS86iKxjHxpc5P22DosMRChV5mTVXajYxXkGJQxsQuwNhqiHuLac4oa8uwBXN6XjeNvPqBf89ym",
  "key35": "QAKVUK5TMAaiKi7gZ2Y2Twchu9sSWwcmbRUtrHKp55oUsZDL54B4oJRQro5U9qn8tbi6QTwa4M6NP3iAL39RMuy",
  "key36": "4WzaEduLVNKbbs8K8oSfJ3SiSXeSDc4UPYX7Lz4c2bvSftPkCsU82Lk3aAbmK5MJwErTLayKsoPxxzuJ2Hi1fuux",
  "key37": "3F83Y8Fy9DfAZ4aWsgVh3PJATC5SjTLmQFBez6r9sZWrb5szSCcmSNujUxGJnZeq8zfLRRkbvrAofEKtHpyc52ZP",
  "key38": "21EVJX6ctS7Y1DuYgRS5ahnWBpdmby4TVQZZ3LZpiTugczyvfL5vUBE91ffqer3Ui83rwwgLBT4z7g9ZAuLWk1PB",
  "key39": "L98PhcEJv5tEHeSMMxb27Mpk55GsX4LgyhJJTkZFiSjAW642chV7dmvCYgzzJ1r2mCtxoxQPLDkY56MCbpKJk66",
  "key40": "27u9Uct3M1Ur875hNvFKsXZqaTCoEft7wxYYsDGmCDe6JNi7xCMsNK4RmrRdoB7ndT4qP2BsNgMhe55rz2G6LQRe",
  "key41": "4abY6CBJLaeghnWf25djzARZ1BnCv5P88WrnkPw3LouKVJGwh4ffpK1nYeGXEGmxJnCJATz9W23vEezJfujw7xuz",
  "key42": "A2DvQbcDqGGYXbyfFDWtUde3eXzW36hfvg2nhjuzqUdoG9mR4QeZEmGzMNfHTYNccFnDuVPCvHtMaWupP1cKkUj",
  "key43": "3FJ2prgczJ3w4qx5W9X1gmUfDctobXMQJFC2fkaw3zAVzQBGAhFGut2wukvdGWUtgpiraDHdDADN3DivGxoXLE9U",
  "key44": "3bqdsL9K5Ykv9H3yxPvvELT169AtxCupQofxRV6pjZs4KmDt6AcAL3VxBVp81JZoooQgcC7nHYmzKLtJQF8uPtpQ"
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
