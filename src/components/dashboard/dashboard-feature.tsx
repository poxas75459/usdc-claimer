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
    "3oLZXC6aFBSCtvNB84pTDUq41AEbBDKFnguWt1JyzYTbTd7mLq3oJJYfnodkZGELtMmB31kjyY5J73UbHjxSWUT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WcvJjMpEGWr4ifSAFBHPzQ65Hy246ioDGaEbR1yighsvpQDBTuwb8jU3rBZMdEGYedx88pR6zjMzktmqivjjhwn",
  "key1": "3uEVNrR8rKCjxPdEFqDmEzravduvjANbjKRSJi3i8QheRSZ6NWJfUkQtsiv9s25ebnx2iPoWym1THiA4AusVmwjC",
  "key2": "4pbV3GTfJ19Au8VRFWWoRPupcT9VvSRyMou4kP1mJuFuHgQWAq9xkwGxQU5FsefByKLZGhsRxWs2GxtN25xSFgW",
  "key3": "UQQnpAxw23keWsarrHuGpUaiPt2Xbiq4gCLqAtLXqwnm4tA7rgsbxt1eMD1PDGdQf2H8ETWHTEpqGPbrHoA436d",
  "key4": "5XRj694WyL13vMnPYWL3yPgapQ1vnXrzRiHErx7o3cdWZiqeT6FoHww3WbE1VcVYgEnSx7suDMzTChnAzBRteE4C",
  "key5": "3naSKaaVw7PTPL5UKwULaFVUQiHRCGJYSLckjh8YtQkWrJuUvroTTWuuWEF7nS3qW4gm82uGE4Dqtt6RHJ7xZ4E3",
  "key6": "2LYqrPxDb6aSkG3LKKQY3qktVrGW2tAv1gMd8xxiViFFreWLsV6XBn5Rcs3QaSPGtpLVaSNv3qYtu6SegKCAbDGA",
  "key7": "3Lb1bxEDSCiMAFKzxW7u9K9gKWYdHsxRTa1ekCPbTpk2N9Xk1vRCsnBh4wC7mppagDTTfVrkFYuoaKK1kXRRcWQm",
  "key8": "4v7LH9pCAudECWL8DAhdEth44wyEqXD96dJzHee3NZzLVpG3FCnDYjXG2A1jWyBFNRMtqGbHFNS9SkHFn56JFeqy",
  "key9": "TbTXMoLtFyLeeox7LZgP9df8rTXhFigGXdyT65zF4aXzQLGT8Gn5Q4KwqVcvJfKuAKMoE35rC58ZEPhac6HZMKb",
  "key10": "5c5LWkFTNa7eLck9p1PazbE9i49QzcEiB8fq7YKBNT3ssbZDLC5jma12QgyXGUwKGVVm67hae7ddzVWvxRT1FCEg",
  "key11": "5UYL4L8Zb1SvNK4XWk2xXn672nddmRiT6SZ219jrGiFiM1ccmqFJg3ure5CQ4aDFSx9S8SKiBHUsiZ5ir6uEFL7w",
  "key12": "2huZPw6MT3AqXQ84jc4f7cNQg87uj1FPLDAC1e4tFrEYJrbkzScV1ZMrervrV49RzocnHte3bpmCExKQuFbTkeHW",
  "key13": "4avrwA8QqdG8KeoJjfRxwdgVFkAFRzt3KhN4AnDVsHYoBLL84gwyuZRBgUBMc3XyP5SA3xJgDYsX5NbtRtt9csFU",
  "key14": "4vojJDTPJbS3gsGedkuNM6yNqJBfHsMJaMNen14FsV52d9qGRENrBD2KrFRuY3TyHfMnhshkSqrGEJAzJeqq1swW",
  "key15": "2JbjmeYwEqXQ7PrZk9eYMyUWXi2WGmoLGdqJG2jy1v1zZEpTGw9JCW66BbfGkZsnRYJVobYYnPsoUQJbCvhH3cW7",
  "key16": "3KwXZfSm5HCmC2Cvjn9uwPXBPQRpRPxchWDw3byY8N5VyZvAEV4D68RSdZVV5ACfSsHszwGThYvavrLENNmSr2CF",
  "key17": "4MEoBvVjaBkzdbJZVBEsETrLxSb7C6xNpHM8cmn8tc7HXP8jD2kTTnkXbymgdYsUNk7bRJPiSN7yG8aFNK181J3q",
  "key18": "668J7wtPm4d475dPCmyerDxSRC2z2hACqmd7RArF5GwSSSLNPUh7aKHSsuaksoV91bRv1Smf5qrTg5n5kWTknrTS",
  "key19": "3ymHwz8iVcGnTqHqrfGbLGVVXgLD5XyrJBGfFhF4tEZhNJwn7mMp8jhUX3wPagnaT1xdDz4s1JmhA2UF3PkHws7",
  "key20": "2zVxTuhkQdjgVFHTb9B6TeJ5wZNYwQ5VE1xrSvumDqrYwgtBAzpkRrDLJP3jeETqpgZrFS19YtbfoDdmxNbGgAxk",
  "key21": "5y9YQNhtTz64iS2opvDneqDdTAh6gNAMMBRSGbup6yLMUU9BT3wrijRgehVzPxYgR1KdkhoVak9acT8ejM3ze9DQ",
  "key22": "2wigtqdKfhS9iCSn8zSqrRU9JDHmhAsJcPnQ18RXNCn5Pdfm8ehwCLW5iP163qBcLugJPCwmtMKWT9aTSMgh9hqz",
  "key23": "3JBv4DzxfWW6CJBeFK1zzF856v6y7wYzBtaW7MqXVYunK1bur5rigqygkei5CfVSZd9N6bdFPhfm6j2MFDum2Fjk",
  "key24": "jabyPNab6xaRv4dCEeFiJnLYv6sDocDX8w74aWwFkUCKjeooSHQkJ564zct9VnzrtowrRDccXSTuAogEescKvCE",
  "key25": "3SNgeSoo4B82jsRAyAzTgh47kW6rN8Kxb2uF2YucGuLTSD8VdXNhEQ1mJ45UMVGgxRNgDjhRbBbV3aE5MoPK6QED",
  "key26": "3dA95mNbq6TjHmJ4xaX8jCN2vzTp417sY6ur9sogYmp2y12MJDs7DP99wS2ggE4ii6qwGYoygCmtqkoCFp2VCFEw",
  "key27": "QLDSvcbRknXTzyHspwSiz8Q2NZ8mR5M4VHfcXteCzeaoZ8JE3qKoiJ1LLVUaT69rNutia67y3eoMZvBZrj7Rtto",
  "key28": "3sgS4pwShGtnqTAxjzgV8BsYvrnnjAPpaw7dVusBLQBUPaxDBksNpfBFKpiQS5wfgyt1onKGpncogejXMsYyNSVH",
  "key29": "4zUUwYRdznEQ1PaXoNRsVN7UrHXF3YvGGCJaH4awEVVLCG1dr1qeZmSrbsW4Xe4e8TNFREiEsvwiD3PK78tKPG3A",
  "key30": "5buuy9wYN9vDVRxNqdJxJSNHk5cstBAvCmEm8CWh5mkdin1eNPSVkYby3AhMLJ9CkgDGMU3KerLoLRVVn87d2cUa",
  "key31": "22vQT4q84b3X8N6wSP6zM9RtNuJfUFMvUF7MjzeXa2FK7dw95a6VcgvQPZVpLHyWA648rg1ecDaFzgPRV5WvPwuH",
  "key32": "KdJwBucomdooExiVpB74txSF9BaTfXT88K2zwiC6FTrzxgqq2XxHZj3vqtD1FN4tpA2Wan7EXSmjRcdi44FPUaj",
  "key33": "2KFMB4gZvQawCJcca8Z58kMtY7v2t3jt16rGs89UBoRQEXQbekyDLJi671YTfwTMGBW1VF6mwVguZ9KuoGGz8wB9",
  "key34": "bYyHpUETpcj7Prnu5Wrd35cBHdGa5ngFM4aCJ5xbWcKqJEgPVSUabrr1MyFxMy1rkpGf23gyj7vFAqvcGJ3RNGs",
  "key35": "ifRxyjfvZkfFYxXsk8xKabkDVG5M4MaSx8bh5nL6Pbq1kASYhowEzayqR5B1wwcUVfXK8VRKeUB2d7HRpZK4Z8m",
  "key36": "2hc8TykzbH3uDRbUqFcjx5vmGQPL8yWUJwuyNmYgJMcsAihAcCkq9Sp72XUMGfFsdMgzmrUoqKrhC8gJrf6umKf4",
  "key37": "2zevnU7B5dGRWz3rPyaLs2cE1zMADja8FTAkgYobGpDdp1zhCRZrCBjEKXcpJdakwUeRQD5FPXWg1kAQHfCNeToN",
  "key38": "4KRDnU1nURYWTQJz6226EzGpyEqqt55AvjCenRDzUbw91XsQZ245ehvripgSue2kDQt7yvTSszZ4cU2QJYzwPsq8",
  "key39": "2nRXxM7amQhWtYhSM9tkn4rivmjdv2hV3wN9wuBkcbW1GVzUNkpbZtGVjY8hJNbump2ueDFFK8BvtvuCdrYAQPpi",
  "key40": "3Ng4uvrtLJJgmoKf5LbBUw4thdqmEKK7JnaAWBqH1MumMJSASNfrBfmzsTDt5TEQnDn66HdncbMUS6Wk8WHH9b1M",
  "key41": "a1QZwpXnWgssK1qFKMFbf7MpJr8dA7AE2DpqRSetovveSbPqmSDGVbxbmJusFr6kgVyHymVjJZ2ntT4T8uHXYbM",
  "key42": "3qBLQn55W5bpSv3ukzBvRNTDGBMvcaP5xDrzSTzgAgfFL56tY9S69ngAt15Bn2VFsq22Sxiro7q5tVE3wYGib1ZM",
  "key43": "2P1He4AuweHLAsiWpVyAJ2N7sNMfcXpn2bkwcua8bpzYAVwGdgV4VosiGDHbnko75UyuQ6bPpsAfVd8UnLRA8niZ",
  "key44": "4MN6gnbzBx58aqRzrbN7BNo2fQVc8wLdN54HXEe8o46T7dMa24XGqBdrbPm41yKxbyh4D74yoseGxmyoJ8hEn9gh",
  "key45": "D7MW4gaFwHnHXiTmPBoBNSJf3viSqotCqJpWtEpPWqYHtULNgM1GyEGa1tSRS3dyaxMSkN9aPCtVwFHHSgGhQhh",
  "key46": "5sZHmso2qA28k46FpRCjwjWC3DPdL3opzXPnwWirViKRnVwiwbiBmRzDeyz6ymTm8iBSw427SWMauRXg4vU6j8zS"
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
