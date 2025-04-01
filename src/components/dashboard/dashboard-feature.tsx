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
    "44hRH81PSDz5SGE6sHsBWE2CiRfXeUYSN4yASgSj9nUigYSL7YvJVhigTmsoJopWDzUHbezqa18fiah2Ca6ZhxEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4PNsiR5hZ4ZoSVWq1ba8N36X9y3A6j8LrShQj3J6vLTMYWzBPGKgtfB8TrFcHvo7e9sxkipnQU2BYSi4ES9dm8",
  "key1": "2JN15CZPZfHQ5cgFiUY7XfZWHfF7GCym4iWXPYPWkEgbgGfMRXMFaZSFqQva9px1bJodjZ9ezLJyfJU1eoSSdtZ7",
  "key2": "25Mg6gj9YSpKTa9ByXuiYWytE6vQ9dEaE9WfoC9csfJxJzWT2WB7zpkgp5R23uwzJ6dubNj2YTy849wzdRTLtZJJ",
  "key3": "4afdBpmUiA8tdT1wqT6nFpKsbeCQbi19r9QHkR5rghMstoRksqYjDzi9WikLWaiMcjSFQpAZ4qMPfS7R3J9Y3uUq",
  "key4": "4hXSEXqNuF4qwnpBPwgs4TzXMEteMXMPzZc2Ws7q72AUUK8aUN2UJQ6cUF6fMVhaTBnqWZTziwcmZ6t1KFju6dgy",
  "key5": "2jGaVMReMdEUh5qktH5LXrNvEJr9H2h9YYEo8YZBaEotPWaCDVBPhSNH5XSPZLJ9CMF5YZM6XG3B66jpttzoWYrk",
  "key6": "5hc13CQ6RasMciH5BSU43PHsefX4BRWG9g7c4UkS6TkSMKaBk1b9JNQaT7EYP5aq5zAM8KttaA7AWWBnWYJwgKNa",
  "key7": "52ZptNewRpdDtcFyuosW1DuM9Tz7MNoQ4RMtRtyyvfPNdstpCq9F4QvYv84sUhg6L4DyMJmvraT4K2gct1QVKuum",
  "key8": "5dCX9VGL4JfzDCdZqBEgYjREi3LyryMEKqF5Y1qTThVR8AfsfEuw8rahoYYVYCwcXJkrnX2TaxrjSKBitWK7AL5q",
  "key9": "xcm5gdiBX5N9GqzRp33FVxqrwLEtPMGpSLSMyiq6WyomMkT61biSqJovWPMBG1qhBREvoLjFn1Kfes2hktjuyT2",
  "key10": "3UBgjxTuMt42g9QGcEkqgMfKBcdzDCNaYdbANoBBrz4WamkdJ6DpEYaXGbPMe2Lz8tFdDPw1wsSncwziq21YpyKQ",
  "key11": "3daBjZ8maRQ5dz4FLHWpoApzUXXNZsy2oBBgMi87nU6BXtqhSx7qa2eCoYuoECwmUHtYnen9wtGCiGzXi6ubPe2J",
  "key12": "4ncVcsQoQ2S3pmmzXahSKmWL4yLba3kpRgVVyZ3kLUkPfCN3zpeNd5JsjtCYiHoqUqjCrkBsa6yWUg4bz3naJ7Z9",
  "key13": "2Z2sRVX39orBB3aUu7QkJAcUiT8fPqsVrn3hE1aitgtFPTjmgPJKTdLABR5WrLB9TvxEPfhrMNsdyCq8dm1FdqJq",
  "key14": "5T2DFu5whHTnGKH86Mj8JEPHVR13HxrshZJt1ZupZFgQvhbaDqZ7BxQJQCtr9SP6UtSX6epKWMwHbvydJFhHsXVa",
  "key15": "39xS5WvuLWCfmA4S8izcrJQG76k1Kd4PhrtWkTd1xL2ykjop7F2Xvf1qceQZWUP4z479piTS7XfZbDMCbN76hoNr",
  "key16": "5G1n2vxnzHFXE8HXn2PaEd36HNXJ8h9S3TrUfTUs2YPqWAmvfoqwQosa3w5nvrEC5QPaeCkHmGnprayM2Bk3b2VG",
  "key17": "42unUQKmMu34Mk4jZ2H5FiF4ChK6nrxouSnqgeydLbja7jn6MKjkiJQ3sUmzoiairx3p1ZXBtbCh2udKspQZokqg",
  "key18": "4RGvndHN6C12rk1Uv33Jco8Wb3VX3VFuh4bsazk4FXMSgGktMsXpyu1q8jEbo6Dhj5HWCuhaiWvvHBfXkkPByK3f",
  "key19": "2ZBcymZNCUdZaNpx7HrCjXNACKsGEKyX1xCY5TM1rkrim3N2XsZ5eYSKj8hyU8D37hAxeJvXPA19BWzUvRim89fW",
  "key20": "45XnpCoSongeKTHY6uGCqEhN4U6HGGb8RpyQzHCdz6QN7DmGu19zVQtFXx95hMMML7ia31r1SUEnkAUt4cbFCszR",
  "key21": "5sQz9ViPdrJEUieEetZBfCMjo9eGZhRox53CWUFy4zjrfGS4WYNfejV3iwcFKfRvmA9rX3uT1XvVATUaEK6hEYwP",
  "key22": "2QWxQS2CZ5LsFpapno3dYWXZTzYmsqepfquzXDzmoXBvaFT1NnMeutbLzSoDi3s2o6rvqcSzri4TZasBiphw1huv",
  "key23": "5RPFN5NjmsgVTrEoBhKrRCraaANSZk93LFP5pv68RQrr5EPnTnp7mtRWbZtJqT1rkbMfEq9w1ey4BBEdN4EcdQvd",
  "key24": "4fDujoBhyyBVVSi46572JDiQLWsV6ZY33Pm2kaCwgBANit6ZT6UdiTWT3DvKT8U3iyKjjjr2xTRAm9Lo9DunvYgW",
  "key25": "4naLquDUoWrxFDZwJPWJfJBfVsfyCu4hEzKGrzcAbxNzxMhVxjp7tKrjodteAxArRWjRxdLuGh2c7RrTUv6T3fU4",
  "key26": "3s8kUeosmbsF4NZyfHf7425Na49Mmo4Nh7xNrJemNmCKosDPzwHqmuKbFa6YGkgum21eSo8fJVpyDRPy4Nb9DU95",
  "key27": "4ioGe4agBoqqhkoJ1vPQkMLR6ZKCfi55e9qo4Dz8qg8pR4c5AMoCwmkFW1FCKxgycHS5UBY28ZUpe3i9MSpxADKa",
  "key28": "5rmPoLNAayzQiTbS92nZENrxgLPKSugc6moDqruT6r67ZDr86arPdLVX4RSdFUDnNu4B1MKXsNKNyCGDj5KEZz8",
  "key29": "4mKeRGVToVyhuPMKuAekb7n7RiFYNy4xCjSUEbKfs6iQnX7r3VMB3KNvbcNDLvE1UZrmHbUzNwxv7ZsFPqVzC8UJ",
  "key30": "5WownQyR68C6jAoZNvijmkZPAKcQm4prhbZnhb9VhbUaLJmKhNpxpuf5Y2hwxJeqKDFWud1fUVJgJYU7ipp54UNC",
  "key31": "53HEpNCyDcGrTbF7e2zsijADQvru18uB1W72p8xgQZTwo5GmSuv8RsDZi6nv7S8KJgJc7S6GTWwVLjU64trXvT6n",
  "key32": "34vhiu93Gf2cffLn59bQk3hmVbJzhwbtksnPpx5JnTHUS9vGkb3QzQAciCovP1w3GnNQ6Wtws2WtwZqYv4MsWjRN",
  "key33": "2y3ZZE7VMVofEpZgCf1JaQj98bRGJJtc3YmeJpxmnR5tTuAZ7ycXibhX872m8zXjJBhJLKNqoSQeQpvb1Y2XeKyi",
  "key34": "GqSigUbQQRtrxweRpjpdsAvrxWxUYHjFjRZwHiS1PbhUzQwViGYiLuyF1CgZ9iRd35bUjKHqeoq24dqk8bByLpi",
  "key35": "qDBMmihJgoRcjpcw4gQDqgGuG7XzFiCVSkNuPrR7ZxrpPW468SJmvnjEFsrVLzx2n4xpNSratzhZjUZjbJGh27B",
  "key36": "3EaxkZ4Wuts4PdgaGHALo5JMz5JGKiomnZ3KtYqiWi5oU4FS6hTL2Vaa3VNZNh6chf4dSS9CmfVyvpHqMv9edkrm",
  "key37": "4fAjJHw3vv6xi5o2PqbxnQ8XxiUMvsWjkXs3MGXT7PzFJ36aLGEzJkUaGgRLpa7kdPbybKKTbz3C9rTCm7tuAXnB",
  "key38": "3XhwKhKEnnnhJ2UUM7sUmtqqnNPLFHRuRp87qkdBZVupgy1Pt5VJ9ngkREVCKJHT4peVLgfpgQLgGrbPE4gGXE99",
  "key39": "KVDv4sx3vhKcXH6812VPsoVTWpn6ZQ5stYtcAMgA3xDDk2ukRPQz69tDjiw5LMphU47KcfsddPnNCDg6oZpjEJy",
  "key40": "3sXq4M8z8FLgVYTa5qjkk5m1EyqcxH3nkeaC5j19MfMGJUcuugpJ9DzWxMQki1MniSCdzT5S8dwv1om6TadR6Pzx",
  "key41": "2dzu24xsVHcG2rnXk7PFuEqCUJ6589s6LCgJyqyGcMVaY7BQg7zy4mWyaQ3e8EYfbzgx2SJQXtvBpENkPzMLb9uC",
  "key42": "32NkoMVTXV5ewo671GXpZHiFfNsHCMbw3687YArDvbARkg1pW13KLU2jy29DrvQdMuchzDiEUTibePU3HqRKDjj8",
  "key43": "3zLtoQCFBiPyTWCbQHDigV5NTTLdZXrNgtKRDUnjFixYHEGVqHF6RtkUE85s6gD7i9Tyv5EkZm7CF24xJgDYHJ3P",
  "key44": "55o6ZZ1LTp2XE2qs1LTy4D77T2raE2tFA8qP7KZbm57Pg1VgthtN4iLmsHCHsuTuP65TN7vDPrekkReDCJcs5kuh",
  "key45": "2NdYdtVKBibHUH2SZsmqCfLZDaYjmNganwiKwfvGvCzUp9zrnSfrBcE9vVxTv8r4KAd18yZpLn5iCWF4o38CQDEx",
  "key46": "5oVYUW3SU2PPC2rs5bM24nCW1bhSb7ywJU3ckRB5nJGbRjazfvCkNUy3ny3WYtgUoevyNFJFE1818wTE8ZR7Q3fs"
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
