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
    "4nqJ2dkrQ9zz9krcWhuh1585kjjFFvoQuryMe3uWszoWoeUD1vwTj3EhfRjMixsnMpczQRJm33B3jFzao8Tn5S81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fCQXk7rjwFTrX8yhQn6goEat47mfDTSoduAADvdesddrNdyQjhi2rHJho76w1MdM5HMng2CS4Y4gZtrnKUdDrbN",
  "key1": "5cWbdp6jVewxzWekc4EGoWNyDweA7dRHGSqdzfUHcSLnR4wt44gQrbkkdvHjiCCoxp5jyDkEA1t9ukABkGSFMMab",
  "key2": "43dVDBEUrEJnfQDPv2zeThyx4s9FQ8pi4VoGTAb3qH88N7pSX9Vxu8dqEwzczCbyRdFjg6TwnFuArtjo71hN7yBw",
  "key3": "21f1XsYon2f7swUVrArH8LCBNqPf9TnifgK3A362s5vZCfxNLweKStSSiJk1qXG8KYJDTkyH52vrbcvftkgoViuR",
  "key4": "4DqfGqxac6ifkb82muACvubUABxVBYPXXDkJNTxtkuUkbCiUNBT7GrpFUJcne8V5UTWKRxuRZS8GbT3Et4WYvLfR",
  "key5": "2n9mRsNyseKQidH7TnzJmLCn2NXT5gGMTnx2P45iDgWhZbzuErucAFp3MD8zhcXh8m2U5sCvJdd7JciwbMMWHEs3",
  "key6": "WSuzz3Kp2gTdNjh4BTxGxKUZJRgRqocak33njL3WAnNFuHtPJAaN3t8Cj1QZEbQ2cA2wQVsQhUcW3J3991jreqb",
  "key7": "42U35AzW7tg4WHL8va9YsFbFtoBJ8hDQALnzY2oLzvpbWXnHEks5F2mqmxGbsLi6xmYEy69uMsetCPaQMLCj54fV",
  "key8": "41R4kWrvxNJ1UizQJv3rENdA9Ze11MEaXWBwgjtHrNqT7oU8abeiXs2dHpDN92m925SR4YMaGAAoGR4pBNvAn3ur",
  "key9": "4qMMNohwRx89m15yqNmK2u9WkQQU1Ej2JGHXS2eX9R9QoGZit7BKSoywbzKkKJeG9acncCPrauhVhbJtrHUcHMx4",
  "key10": "2AXw9rdhYotrsudtQiqLUJ19GCByjpDhMyhAHriv2QdAHvdXKp113kuinFnDULtVL1ZJfP6SR9arfnU9xuB4j2jo",
  "key11": "CfotgkU4GhjbNWxmA4TAu313qtEF9foGGLT3Kc6WZtq9mAks9BRWtoB2XCNhWvCdX3uEZXka44tHj8e29yUs9Gq",
  "key12": "2jxQzpHg9HZ1faVrnW6fYLgYCdNxp732rqNCCFK46Ep7g11ybm92UWZyKFb8YqQtuLQvSLkctsKmTbXj68fLV8T2",
  "key13": "5fYDnufyda2H95cHERqSnZ2oq7HFMers59WngpzMbGS77qusBmMCkTk61gNou8Xk7eH38uKABiUztburBSxQ1Ehm",
  "key14": "Qw9Xs5Ti4AsDndxs1nB9v7UXiWaosjpE2qBxyv35kqmHAPjgSrXUrXuPgdW4hhfq9LEcGLXgPXDrbz2qgCVXAed",
  "key15": "2icqDNiDaFJBeoMjCHT1wiYejFzaML5esZMMEpCCpsActtnEfgEFZNcsT2A1mMGvwXyTnbQm4mnePuZJk2dF9d5C",
  "key16": "2CLjftNwtw1CV6cdT6Nvc2RAa4AGiatFwM3CTzmTacjt7RzFS6RxdvqD4iZqooAR63GQ58jypG5r9Tub1yJoeHEv",
  "key17": "2bn31o1RHH13bk7jA1Jg8hTt2RNS8uTXh7cKuSL48rMnVYZo9MvDheMRhb649mw3dXWKSwHT9DULDZNu5TCHSdjS",
  "key18": "p9YRFU6S3VtEsjJ7vkwznEo6dH8BW3skJna6TmodJ2AQ2yZ8YEC1og6ZF2qmV2sGuXVBwwqRB4X9kY6gBauQdkd",
  "key19": "58VsQKNcfvensf9iURSSrcosp5FZEbW2CjH57SdGCaTXjGwEc4EakEK6McwZ91yhPtiS2ma7vu2tRDgQg3MoYtZv",
  "key20": "2iJQGNtt19XT5Z1bS9TuNgTt49DNfZWEsda8BzvSw47wBwNPR9AYmkZL2hFNud4XMuo4PpGn8pawV6mykcFe29bk",
  "key21": "QSZEmcrG9Ly2qr8vJg2ckdVLK94DF9T6UPLc8d2VfYtkzBndD3RXBhDJvtwRSWht7epq1XtPwxbgvivbiM4mL9g",
  "key22": "2RS6Lf1nQHBjVUqxW2KsYhxyipkWiadvaWJRyvtoAP1yWYVfL5W2bh79ZnovxB9pJMQZmqBLk3757HxnE3D9uHAa",
  "key23": "5bG1mPSH5FZJoXzmTD9cpX8PpTuciN16X83oRh5RBoeKcoZ2S3XtUs885pS8FKNmfo1it3p67bZEHoi4ADnFJhYP",
  "key24": "5fGpJMj3UBcKQ1kDF1TCHywymsS4S9NtDhXY2d1hxByDSxwXgiLWZSn9m4nyBx4BVcwNfRqNdRbSSUdw8F4KXQek",
  "key25": "2tHZyx5jSznPuJ8hChY1ScDVirTdtQ4R6ujyRQUBox7x2SouCurXt9jaFxRdrr3JLixEM5fH5cHQJ7WFHEWpZ2ND",
  "key26": "yPJjU5NAsksgLUW1ZUfC6D92bN1Zj4GD6Yt4gdK1wQ1wp7NxbcDrQWv8PUjVSo8xioVLQBAoYusU8aBuwyYc5Mp",
  "key27": "3CTAoZQLeuuSxXTbAcXrDFQVMoj1Jjd6YSs1niKp2UYDjVxZCm38pWFT3jBo7PfzGdyvX3Y5fS6fLJDQhav7PBFm",
  "key28": "5HGpsxpQqXutKQj76u7fksyhtfhoj93kU6eY16saFeqNJ4xbvRHtJFrpGCcnkbXgMSqdtNQCuHqFJLuXLic9yM77",
  "key29": "5CrHtfQSyhPzerV2zcCg93veLGdmHhkvbax2FbThAxegDzZXgi7y8JESt7wMaRMHEahK4Cvh3adAP3HdR8Z564Pc",
  "key30": "3YF6j4pFf41nCWZ7Uk3cYaaRM9DAA8amhoZYgdNRsWcMxgRtLUHcpwh8632wPNmugjsN5v3HEpvsTdqCMDQW5SzB",
  "key31": "5BndcgY6uV1zRK2wRTFKZ6x3gEGP11K8NcAJTr51R943SfR4fFBivJZuUkFn8HyPxqMdBrzKA3Lj6GjW4h6mGbXP",
  "key32": "62Ar5BgNg9WX94do9WRvF5T6Gqqvv3JL4P3RsvauMQTYnGwbNEFFWjkuNh6xs7aJZsafqNmhoLrVDN541C17j5bE",
  "key33": "GeFUP2LDReHQATWNXkoCN5RdSbMgLLZ8pbbx5h2GUNdePpY8mN3RpaftdtxCZ2vGrNZUCZDaj2ZsGy9s1x5EtRX",
  "key34": "V2kuUrqWrMk7LVehfAGLpGApyu2BYzbTGNziUJgiYui6hJor6LNoo2tzrUYdhADBtiP9JbxYDM2kSiJsCMSGudY",
  "key35": "5X3jN1cfH94ZJBjjqpizmG3cjj5SrvXvcKuvBg54hQ41QQuJpL5ZM2nYnsAd61SkP39yby69bEYVsfr1j1X2LgVL",
  "key36": "2HGeXUXSk3jxCfP6MshZjFeLaxWCtCZiXGCk9JaXKXa3Gjc8q2ArNcrNfkSgCUu2F6h7VUn4bRiz96s3YsRZUTG7",
  "key37": "3TVMLStwzJVoiBZv9egC246otuPpiXX1PeKMjYQpWHMgi2mbreg3YSLzioCSN3BtPb2pUGXS68Wf76zrj9gYbNGD",
  "key38": "3hNanAMovdcEoxEUJCGQ9fe58ygfe5BWpmVpojsaKj8QsBgXHAc1Gk7cEsLVYVfqFVBPNH88skwE5WDi6Lv12yeR",
  "key39": "47P57fXY2eWQh98envnG5d7pCy6a3weTGC18jbm14ARvk2a94juKuV2vUqvijMgR4tfrUE9hZdDTeQMN1sNincmE",
  "key40": "rmDX3WvSvXeWStceU2JzWZ85dPJGYKcKqYdMVVFfeeYQamAiNwRQsu9WP8xrD1ZxBGJL4QxHT9UaUpxacCN1dsW",
  "key41": "24SMPU3DqJjZm74QQ4fmq5MJL6PKFUgPbdtdgpjfwoTYmGucvV3hjigDFBQHKgixEVbbMNKAb5j9z2P95htRYd3b",
  "key42": "2U8jMcxBP9B22N147WdC9VKeK21uv6pNGDAm6Yto5NdEnHutSdd7tG8wgRSegUJbVqsZ79am1yn6ESpjcDf3V2cN",
  "key43": "LhBwRuSVTEpE4Sisa36XRfw6NY6u2uZhwkusSSQE1T9q7YGru2cbQBrBzQBPwGVB6KTcyEkEcEvKRVQTEm9M1TP",
  "key44": "DCzsA1HsaxGGcGdjCYNHbfhqaSR23PHbPRfTdBCNSzPeJVtG3rQAnGEXSWEXThXNygavzvUTs7ADr1qdT81sayL",
  "key45": "5TqP5Apr5ZKpkzCJERjs2vs6kVUYNJ4wyEaudraAHanYP3qP7EXdVGq2crSLeDZXTx6iemHSG1iygYbbDGqmd9YW",
  "key46": "4ew8ZJ4jYYPPxb4tWTzYTXjMvTDMZpcpMLeVsSDaeSTZaRxk5Fouxwsg7fiUGCoS5hrAJyQymjwtw6f3LpeJxigb",
  "key47": "4zJZZqqgvTCvEZkMY8zT6YqnokvqaCBNf6fxr4mbL6dxBCT6n6M2FUpkxZfqYHrzAmDJ4jBRxTzKHw6ma3QX9rL2",
  "key48": "2hMHxrPXdzSMfLFZnzaU5YcataBMHU8vzSygD5Tk4mb3BBTv3iTDsQhxsgDpZ1sPSZGJm21UqYRadWVL8RkS3vmo",
  "key49": "CE4Va3XzteStwRCCYqMWTjFWchSWwjmxBzHP45sjRxHYeaTcAbGqrj1V9zw6MBezwJqJUBvKonvYngAmCfaaqTQ"
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
