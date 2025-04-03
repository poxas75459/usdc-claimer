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
    "3PvcxrNF3kxx9288nKsgvCa8VCtJPCGYmjBkLD1GtX3Zp8JvDC4FDeEuppPYTGvNzLeHshXMWNDDTNhtjeLPFc57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58HykLmWwGDtvav2bd8SCCyCr4mx8sg961w4HxwP61gDUL6Dk35u1UwoRT7LeybPWoAH31W2xSumucNo7QHMrxaw",
  "key1": "2FYVDi6fEbT77d7Qt87g7dFR79sRHaWAmR2GVGMi4i1hyGY5Ryat9LciFXuXRXGn9xsfDkLeDqjXdrWHBPif91Jf",
  "key2": "4fGbouMVY5kqUewNzicX7qMURygrUn2Umqd1rYEs5ttqZeiSeUwkKv4LnUXqa94f4xecJ92oxKR7iN3jtLqWwmWk",
  "key3": "4jfbf6Hzczz8TmtEVQHWBqyGNcSvtfymT6tKWG7RguyMSYvvB1LXEBnfc9ZqSsn62j6DgrBUQ9x4rqsCkgma2dp9",
  "key4": "3yKADhG1yNyeoxEAbjtP8ZqdZ4tWKJAshuNWtZg7TBYA84onaEDAo2iaXboSjPUdnyt4c8KYSegaGV4nBzQGPhfG",
  "key5": "4gPF5Je76YJC9vGgB1VbAxVmCcwhDNVDiqWhsqrk8aGjvqzedNKSywJemDyVGdBygwTEQiA89G7HASXmjowDregE",
  "key6": "3BENkALUcFP3cM6B9qaWCu4MzLgiUuekY4ygiEorp9sYZsXR8Kxq4Vco8G6yqAFjeJHJXxMZFnRurrxRpdoas4tR",
  "key7": "4foMBRo7vf9BCmEMMDB71HMZ91MmN1uaGd1PT5DymTCX5EVjZpfMJLPmWgUVCfSSqz9RkMktXivZVPHRFTcDxUpZ",
  "key8": "3xL6B5B5Hva1aRRPmnL1q1ic41S9Bof8MCH82Wgm447FQH5nfmGrqvNpGDr5QFRURV1MZ4XhtFGT7qjmDFBCEYkY",
  "key9": "fgs8ETD2M5yjpRPa6K1rX9pfdXXsdDCB7tfbzfSh4dcJSXNJGjbF99FzEH44ccndKBeqVE4yPGkWjJM3HARWakz",
  "key10": "3hGBUniENX9jHsJFCbUc92qGw5P93dC51VbyrX6kf858RmKS6kaYCuMN16UBxwRVp8XfsUwpVPjuEzwTgjbTeKgd",
  "key11": "2bRZomisQ7BP589Wt5maGgzUAc1WfEScTNbFiBAqSizgp8S25qfnvCTvd5T9YK7qvu6S7SEgYiAakkkPK4wybqt6",
  "key12": "5xRzvvjE8cqgxMRTuts23sCNWWTaaVvCQme9J2mquvNDtWXrbAV7d2KG4cwr3mJrFptyoG78MNBC4aaH71dXjQ85",
  "key13": "4x9xfmEW4yWmfLHg2BCsxC4fr1gEKJja36Ncm8MJyYvU1NSZooRTqYyzv3vjTJm1qUe3XEJpQ6kHcvgbFnBfneh9",
  "key14": "AN3iQgzb9DCiWRCyYjbDPpuQvketYk3asJy2bUZTD8vLTZ19WHrznJ3JpmxCyVcXx9brsHfJmppzaUWSdfpeEAN",
  "key15": "4FyaZ7Tvhyt2C5sbZdyEqmnFkJvGEVgpjBCxFT3RrBfkzUTNkgCZBjHjsTMFJMVDHUnESfB7UVWuQeBRMb8vAXVP",
  "key16": "2GAqUWviXzeUxrHcuX5iymf95pxRRnJLdAn5RVTGPkfGqFHu6RRoHoaESCT1PcQuiv7pPxmyRPTXN62QEy78tQoD",
  "key17": "5GnL6kqTAsbLkW7paDMiCWmxApSpthmitKhtN2oiAtEcH7tvqMH4gzFgPbKj6Zi866QHP4bse4yzxJkobhLiyh4P",
  "key18": "2Pd2QorQJ27xJCRMXhBgDgTogNZNcGUawpwE1ftTmyM8cpKfHDwfk7RF9TCQZh8J5YGZXssynUbaW3Dwe6ME6iVM",
  "key19": "3kmwuVchiYMsmj6fqZ66C2RfHkPeaH2Gc18xpnkGfxnR2GYgCL6cZac9JPW8fVoAvyZ7jtJNvhvDg7kpNLyckXED",
  "key20": "2G95WsLeuzDKTmCW29e6AMBPtV44xH47SyTBd2MV8LYJFRh3DkwapRAcASpUsXqzQyeGV1MVyhbpJD84aiMxgv87",
  "key21": "5A8y53e3YDT4Tnyd7aoi4ryo3sSvABPZ1MhGcmDsMUDsoqgFZDTWCXV8PU8EeyFkzsNtcaDrEUd1mXbWwRoqGMyE",
  "key22": "2qX4WQB33PLNKBYbi3vrz3j2bGntLraMAgnqk1sRG2dv29ZoB88swXiztR19SsULCbMuaK8L5REPYsfm6sB59eaN",
  "key23": "2rvxuqXF53mTn4pCshQRCwV2uajZz86wWpv1dyPCFPP5vV38fxQaUobC8MNkhjR2TMpLLV9TVeef6zX23LzYdYix",
  "key24": "3KxZKuvFc1ZSsH8nD4AEjv4hvfWkQyCic6b9bH5wCe7HSV2FzYjAFnjA2JqMVNz2CvmRQD4pJETgkgNdzEE1DLMV",
  "key25": "5oAnp3EWQhWKf6xprBYsxqY2b7zb95RCxPsWP5omYkjgd8GsdJnNA4rkuZTdCsVWSMnkHPREawkPazbZA8H9BuTi",
  "key26": "dYopShuMWUYDBCVgKUToPnp3ZKkZMqHr87kTV2Fq7ygsS4hcjx2X4ejBFM33jjgqm9u6ryvYqYNS7Jjdkng4BLc",
  "key27": "4TjZ2RNuBKt52i1qJJhqFPn8cQwtLs57V52TGY8x37Z2FLxmW5dqLkcazER1Ek2mi3mnnoVW6hxgxnK8v19LJGZ5",
  "key28": "39awtXQSPSrpC4ULCuCQW6bVUkAdta5RFfHfStbMr5yuE2kgJqewJSTKgZnLSnn88MMpSv3UWuEPZdq6Y7gyBUJC",
  "key29": "4uFiEDnRAeBsbRdHJPzBGBHkaCHgSn1MPbDdHQbEByP7G1psTddnnStCqrgioa8KK69mPhqe3dB7rvV26PyJDytG",
  "key30": "2WeNjrz4Pw7sSRwzg71tvQ75HDQmSb4aqrBSaeF8SdqkTTMvrVSKmkRDCB7sW3trMACvKATA2Aturidtv1qiQFFx",
  "key31": "491w7ajwBvbxXKgHpgYoS8ixCY16igEXbKLpB4hmx5hKWPtouXsZcUVKx67shkum3ApV2tFaRtFvnzwdupwG4ead",
  "key32": "3D8bJrDhSG1oFGw46uPYF22W6WmSbQhaiy6Ba67PtkRUiTaJ46P9AnGKxNDQKiDDPSsy74zc6naUBJh1qjWHPEJW",
  "key33": "4tkceMAExgpZLa4vyyDkWHQbCfeJnYmTp1SRs63vTyjWDz97ZLGrQQwHhwtZ5UEwJLs97t8rd5Cg6zvPAAEytryC",
  "key34": "2egiZUxp22B7sGR2aaLktRxPHnXepa8qLF1c3gsd9dVmMm2MvzPTFgudqpuo3pYQUiwkP4vZ71LvVeoQwBxB6bgk",
  "key35": "63KqSeDezRdrrWhiZdQFqtgWZJnfTeTBW1yMu3siNyAyyN11P5P6jE7F5TpnEVmaF3JGhx2WTCNurfKyEBU7aF5R",
  "key36": "29FmjFdfnpZtrbVxsvMrc84WUoqnKu831EuRd5Qbs5u4RzZw1bwCBD1k4hvh3iAWfX8JT98G3tkH5pqyMdKe33zZ",
  "key37": "5kYRBUwCJbR4YJLQ4SYhkFSvKUFh4MFvdtySBgQjY2TZJb81YsMxQWn6h7ySmygBqfAaphiRQ7jSxMChBAjwhYeo",
  "key38": "3ybaRgUQyWcGqosUUSDDMaGb8kxakXvtrY9iq6z88UjKSasLmMQkvdjoRmdjoqK2ojVAtYpvVnERFDUBdy4wD2a",
  "key39": "4DTuNevSQuhNiK2wXj3krYhAjJTyxrkXX7Pg62h9snLcsHSXmAamWunJYgvzm91dC2ukoRDqNGF2Q8VVhAE1nAR",
  "key40": "5M5zY4XqSsMtpYNz36iyZWBFbGnmEscZ9YJ3yKffzLtGHgFtsUsZB124wy2Rbv41c1bcASHE6sonYtcTT88AAFdm",
  "key41": "4r86CXdkS2QpEMXjy2z5z1tDGo7h5K1vAjEXPHr8HTFEYG4r7We91ejM7rrPQhKuraDhrFtPFxhDzgHzs9nXdhdJ",
  "key42": "4w8xxFfipFLzNvXTSvoRNg8wnT5KhjLQqjwWDY8bFefQDvsMMhttRCjCa335N5dQHefDuPDrdMLHqu8T68kaT1XD",
  "key43": "2gGvihhqvj96DV3er9qYZXAVejj3UZyR6giq8Tku9DBQj31kBZBLSkwXo9zqMePUednP6MAoxR6t6xmHqp6Ahj4R",
  "key44": "2G4H1NEuDwkL1ggQJYix8eA3g5oRSJ6pt1qBvuLaQhjMMorD6knv7uRrEBwBNwy5BUvZd9bguLb9FMTG3BF7FWe2",
  "key45": "4S1pc4qNG9TJPqL2do9dn5dntXB6ABEKmYKuPNDEV3epjWnQtNnyrBmYDNXSjcbLAVnAks214oegdUUoWLfJus2S",
  "key46": "n3ACXGTC3W5ypuVJTFXckqrdNCT2caqZ4iE8yZfF1cPpqvyCt6muvjwHXAQm6XAedJXENbk7bSRgJV2BT2zMrDp",
  "key47": "4TTxH42xeYFgPLu8bZqsAi8u2tcyHmHaL1WEvZ8amv95yEViU2BmXvzhLri3WcvDX4VhgsYQzRESrTtUdNDarwan",
  "key48": "48p9LUarhNKhVecytrG5HCgjeHjLBXiGMHFzgwCZVqCF4tPpb44PLqqvngRrUjcLpcdfpSJwsueeMXwxvBVKgnQv",
  "key49": "2nxsfkd8vAKdpwQ7qrf2HcwrcPKMj2MoNacv9Kfq7Hzz8DJqVMeo3jGF6JRrkNkAGB6zBQHaVRU5DdTDVy95X8MJ"
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
