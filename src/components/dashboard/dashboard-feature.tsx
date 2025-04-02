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
    "2E8z6tfbd7szvX2bHmZKZBNU1U6fbacqeAgz8p5oDji3izVokYt2FRFBHVdLJJLdi3i7oJjaCiT5cyc1cDrpiD7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEUUAQDdGKmLpU92cXeJ7KPDpAXBjZQJ4j3HwmPWYVgaqdPTSfj3dEb8Jd7fZPD6ZbqNseB8mDBUuQPeodXVeot",
  "key1": "2Td5CToPy4mi5AUWHCsQ4xUF1KUHsSuwvWkLZkbu7WxdCBQ51NggYJgKQzdvUHRLhNCnH7YvBTnWY6GdYVxGAWkd",
  "key2": "23k84SGDDEheB6srRLjMWFSVn1X7BVeZT61BcrKvDhYyG3Dri2ucV5mWzPqCPYa4YWnT9db1ANF7RAP5rbcmQhXZ",
  "key3": "3tDNLbeTn4DVQ7Y8D6E5D23LKX6JdN6Sset218w1YAZPDWF1eDMydNwi1vYHSPvhKMqf2apFULaDqrxRxeHU4UHm",
  "key4": "23AMLvLav8gTvjEAMavYR7XmPenbuBpafT7q4HF7ga5dvAibnwem6YHavcYEsVdGxv5tsW8CY6iJr5VAjzFMcXpd",
  "key5": "4FL6y16PoyMSkTwfwe8hcxemS74BaopPkj4ZDRxCURqUZSkFcE4thzPFrALodjfNTRtdNVq9Dg1zR1ii4ZRn8Kqr",
  "key6": "4R8qh46PymFUTM4A79QiGWGq7xTuHSwEjTsLrT8vmBoq3iPBQXxcyWEb7QUYZRiBCosC3PiArh8ERZtZMxVaDVwk",
  "key7": "4XNSvucguYvL48VaWmF6U5UR6GXD5XjJyRpc1WUKxt466nquf45CMdzntj8PqmV8F4sYH47Dq1DJSu2fZ8FG96Jw",
  "key8": "jiEKMFru4LBPyhD2dUEP4UBrpifCjJ8RnSPQNDSrRWmiNgLkYvsZqGFEqA53pWnvvtQYXXMDfUx29e1bjL3P7CN",
  "key9": "3zqP4tcGFCvepgZLZyaRzs9mbYgqfpMvwM6XGX6b7oYApJusTt8unY2hVSD57uFPAXiqrbwQiXm1xSSWhbywJg7m",
  "key10": "ANKP3m2eompf5E3Fd4uk2aHBrbSXQp8o1dfcYZcLjH6Y7oHp8ipbTPVYdaznpnU33ces8EwLHSdC8AvsSomXcGv",
  "key11": "2uTeZqBDyD7Bp2ib4tB1ciW6rsKyoTP6CFE3BDyRDceaPYLRbPXAmeijfKU6ZTsge6ffzLgueuk5mBapNRNvwoFA",
  "key12": "2ebVFNuyn2G38fJghQyWC6NDkVQbMo9pFbhciWPnzWANpopXRuJ9NY4WDwp8dvKzfQvpgYy6NT773XCV9xcbuXwH",
  "key13": "4Vr8ETdbY7P4Ty9g1aneWfGtgtXhng2YRvoDcKW2S9HM9h5vYy6frnG9CsWwNidhJTeWt4SYwjcXGecJoiJELmcx",
  "key14": "5TqRx7HzynXNzvkqnuigmK3NmiFb9gsXkVHn4thmx8okMDxakcCQDtVmgAzPJYqGDxbc3qEdzjStXnok2ReTHDCq",
  "key15": "5Zkh6QJRi7YimyX1FyUWmh54iBVpQk73v3yynm73JNofzKuPGUQp82XGQyNk7bXygFnEd72A5NzEjL3U6oMFfQ15",
  "key16": "2FSMod8S3LmW4aMmAq9c9cv8oPVh9U9rmGdjQ1GLaAYqckHRbjeEQUfCwkSPVjH92rjMWMeoWSfe3Xh1Ct6L7myb",
  "key17": "4rJfVyt1DvB4Lt68yiPMnJeurSsnc1dwnaTuGPRGfZscPUeSDzHExKYhy37ZFRGgSw8mybiS1JB6C39Vq8GWeuzP",
  "key18": "5vGQdDtBKc699omUewoZ36QaJbYTQBNp97vPLhzBdHk9emZRUR1UiQgAsmaXeph6CX5tVEHp8ByvA1dePJLg9csy",
  "key19": "3u7KaH7k6YLpGcocK1MnbQhApn9cm6rtM8gFMhdoJWki4TZcswgDt6cJeMYEZ9MT9drXwfyVzLyuQiCRnEXRojUm",
  "key20": "WFyH5NcZe4a5rnqvg5hCz1Xcxno6UBJrRbgqkQxmRgysHopDcdP7zi7DvEZ572w2fb2Azf7TAwzGDjkVKJEmsY1",
  "key21": "pzhnCTJ4TxnnnASmsHypwZMHT93MnEoYDGH2aDTM8qTxNCDHA8oHoQyuJYneQ21cwVBpbyqh2irroPY3dot95SR",
  "key22": "6YPT4KCAsxCC22SZwoTKTQkffqToefgX8VRRkGX4d8AZJ6RHrBtaJghb2X8M6FxHuEo1QCdNGPAf7UBdg9pEL4s",
  "key23": "tuiNEUUrTPjvi58tZRCq5NCVkVyoA2ezcc2Zyv3Q3kpCnZtpWXN4LiiooUmu984ixnwp5gogterfWTe3sWq3TPB",
  "key24": "D1Ln9dX8HVxj2F2oYcyHzGSKhfgYwxhwU6UVg8c45Gf1eHAjcpXfhc8FRdowRNSMT2FiCrB5cAztDqJM2jtwDwR",
  "key25": "iDv4Sjs1iPC8fuV2GSrGB5NJ9aVfXAhRviE3nsTXYMxVQjieTZx7e8gmuT6T3zb5LSdNY2jLkegA28WoapV6EUy",
  "key26": "uvQCcvAo7LEwnPE9YWXbLNxhJC1ybnmmwLjaKjGnQDtv8j34hw3bDFBgdq8FYnbjubrvfnhRMMH4kf8wspEp8XU",
  "key27": "5vNM8ZtsZvhgmNn4oQCGACR63W5yrA4oNmgeN6C7amaoVgiQYaXrNGr14xWKZs6NVvvrxeJjxZ7XqfonwL8BMtzg",
  "key28": "2JtDKoF1LogecxmVKKxE3rwo7XVgQgprfhGm8DgzDy1rTM2NTki7VNLyR4Uum9Y6rxWnpNvbtTXFD6hwFTiUb76G",
  "key29": "4yQpeHiffCjiXY5WpmR1iPyaf3YekTTRRt3kGgkCGUuACdNb84nkLV4X2K9d3U56ihJULnKh5DZ3U5o8Pm3EeH2A",
  "key30": "Wa2LSF5dvSUe5XdCA69gXqNw1wQDmqmp5wCHBfXeTPGonJjDgRtYfcF3wYgdxLUVCLa2peLXGvozRiraTZHkJAn",
  "key31": "5GKU8qJQTQTv15zH1t3be94VRinjj5ufTSDdfHkHbjSqPLexg4WGmq7HrUdSgTmVDkiX8yEoNm7hieZwBfbgxzfH",
  "key32": "4cDs1R1UBSchk65ZJbE8FHi4UTKYyStcaTj7QMSBQizTxDXaL3cKVgah4LDMhGqehRQofn8sv3yZUhxWrTy9dHoa",
  "key33": "4TgbczCHn7fujh8tFLvVnhyWsX1x9rDehVXLy2EubVgmxK3RqkooM198sF31oCw1oPuEvv6nwmxnee9Y7LCrNHjB",
  "key34": "2gfw15b5YDPNKiLBcTstX8TDabZt6RTeArVCsgsrm3opN9heupKCqFxVr4KuhC2kpcPvJ591kFag9vFk6P1yahAs",
  "key35": "3GdpAg6twJLLfDciPXYsQY1fM6dP162684pz35GH7oTqWS8Pe9nA7FN1vhtjWjWAaWGHYdxitYFyDpTephdJmRUu",
  "key36": "4SZcg7t1DFhwh2qDny3wgX5vzd95zXT8kGbajk71qVfkJyagBesLNKwky6SLZiHovBS95BAiANdYSm5ESda6bEZm",
  "key37": "5cWTqnhodZYjrARL5EmG45Kx7Z7QGiQXfYgUyLcW19Y2WZafNsz1SNihBFtqGgkJth9JPgRDv3HE54Zu2GUn7h3E",
  "key38": "5UewN475WDhTFC8fVTVFaKyyQoqFBRS8EFRky5PiHgoEgdrJZh8F8WQaTAtDJBUZYpC7Y5tFBDYUpXQXPW6fvbvg",
  "key39": "Cwqjd3Ev534G3AT7DM8XtoT65WCKXwj31keFaghXePvmdxdimYyw2BEVYNgKvWb8igN1e2WqvTLzrY1G81c76ku",
  "key40": "5TcjwWhjucNWd4iju5wS6tpaH9vkWEsEBpzoBuu1GspZS7Cqgib2beUs7wkgpMJV5RZJWzS79Bnhsr7C1WveKjG4",
  "key41": "cFH83WgRt6BRvSS7kKW8rTm6G4fqeK683vrc8wMbBEqQSAfhVKppa2py1WjsQz6Wbx3KtMwAWdXZKTq8CBbQsBA",
  "key42": "3WTAADY7v7hMkpi99iDaf144YRaTfPFhfB9xUgNpKdjYi7D1b1NRZSPpkyvaBdgeqy4FqFqyjav8jqCfkc2e2QqF",
  "key43": "257NNtzGNJV7oZToTquw2xtX7wRCxnZ1BBhhJ2oCme9hxqVNVn9GhwUJnHwSNCBNVigDo3L52wUZTjhdUFfdW2K4",
  "key44": "4CfQpk377VsRZVdphLmnXbNYpF1RMLsqcUeAKYVw6gNZ6SwNXViahM2G78KKrrGrsob35RoQNxPw1Xn52KAvsK6D",
  "key45": "2HoNvNzeY7c8PxzmTDgv1mW7feimHYyYj1TA8f61ZKX6VANzSqeXG97q2toDydHeGyindQDyo37GenFJUx9YY77M",
  "key46": "4rLPftQkrYtLPPqnM4Mdcno3NzurtTp4NWJ38xVyLq3pxW1xpcU82LkVT4rNdYmeyfdwY5x3nkeLyC1UF1YF76pd",
  "key47": "P6PiUUonqxbpbvcwgEcp6cURJfKyiAtFo2NGTsYr41G91XAtfQdBPi679Lu7QiCU9uwbFpjW49bAzWxLnE7HkH3"
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
