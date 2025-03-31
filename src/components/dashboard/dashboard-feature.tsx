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
    "2mZzckW4zUT4Yf6jnKznnPcBxtNy81X2LV9irZ9mrESQyfSpXVDe518BJ9LRcLqvB6VCDgQmR5GXJoeCGxqansGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxWypD1DQbJWobkUYwwhgGprhQXioqQxYQRyjo7DZPCdmD3YE3uVoYjaYET9C7CD6EC8BRPz76SWYNcZkGdr1Ax",
  "key1": "27LXqfKrXE35dcZLFBC2m5atCRPSiA6FpUhJFmRZ2WVg4GcBDHVLwCqMMzWpjM6jQWuW59mVut5yL2sDV3jvpRJy",
  "key2": "5EvFuHg39UMBzovm3RRLFfwc2VX4PuXgD1GcPfnrcvyWq37poa68FZbWyE79da4JBrUs7aHHkBh2JBpm5gkL3KHT",
  "key3": "4dQLrYw6gmdAn5hz4khoVdgmV7uiMpw2Ay7QxHikpHcUSzv9iFNiR16nZExgHkYvF5H7Kup63JtamtTKyxcK5Mbv",
  "key4": "2o6ySTLn2jZHmsUmkvTjkUt1wnJ8e1JXCKao4oBJcD4Gr3s2wBCzaxGHNwchpZFHyHF1qRqKj8n6NHjwWW9CyKLc",
  "key5": "5WuQoWAgpWocpw8kEWVgjVGChEhtR31PEGSq6CBodG4WAM14gV2cAEV3RBcjjgN195D3tDKQNxYusypttnB2q7YB",
  "key6": "56d74DMaeeTdYtpJjSdaHCffNhy1kVQ6iV4B6osdBSUY1dyo5EP1qmYRsDYJjBzVbRSCP8P4Y1JXa5agb61itXZL",
  "key7": "5pCJ9PAzr3XwbgR7UsiSzt18WZnSUPbvyr2DcQeGir5iQFt7YTL9gXKFzt5nn3stMidAGf5tprKQXwgdnLAGtiee",
  "key8": "586kj2hJ5qeapSYxJQBszp4ohJtmmY9mYigU6M14CGjnPPmeDj6ds9vQtP9e6j1R4PXkr9hV5mD3X69MF2m2NLAB",
  "key9": "45WyEsscmLdDyCKNqJGJ9ERxJTTFK3fUNx4Gsegwhye1Jjwihd1i7jBXghzHY4wy65bDWJHLNqRKfAyMzFxPZfs3",
  "key10": "L8zXCmVEMAV748o4z3RoWedPbXJb8uF8FCJnSWiF7bDWkWMRGbMCKYjvbqmgqV3PqKm15wUsqNzTNAm4ae5U61G",
  "key11": "KKSUpMZpRujXSy1KwGNFLwVvjk7pjHMtsnZKSmbdQTFDgo1691CJ3cBx7t9jFAreiSMQSxnk6YsWbjrQnK6iPs2",
  "key12": "mqzTnu24mpXMTFNxct9NmZfwdFtDozF23EaMCZSymX2n81dMH13FCaiADAbfKJ4s3WaHiVy4apgzeChD2GnKPp4",
  "key13": "5JyugApLW5HjjSewmcqQvTConfomsSj7BQ2Z1Upf6wAj8ptBG6TR37C1gjJc9P5mdUH1UDgdYhrJvao2AHsut5a1",
  "key14": "61EfVuap5E3oEs4a4apG7fNeXbaiS9M6SbcDZz1oypiGXSqiMKQ5msUPvSQsbCzTedPepQ7oeMjDhaZwrDhSoenx",
  "key15": "2YYZrMJrCjdHsfWrpYBuYLDuv7CWmJWkyxnRZ9qSLaiGNgGUp3e1se5q5UMGPH6dWrZDF3oKMpbQmHFUfQXQprDs",
  "key16": "GVNFxfEpsvaLukaV5BBNfvZrtjSu83Qnastp6cUsKEqwocypdpApfgeoywVuFSaE6Coz84kz9isH3WDJGz9Thor",
  "key17": "4ibhKu73x9hPPCMZirLgi3Jav8m5w79gBW1whsUJpX4SRQZ96EMuWCKD95zopfVZbKVLRsAD8KwL7Ga4A18TP3QC",
  "key18": "2oqqgnY7rAxR6c4n5qGBu4hF2gqUF3BkCDa1MpVxD7RtM6Mt13mTQGBsLkx4bh22SQ6YPPp7KNwt7Duw6F372i36",
  "key19": "57dQaGPHb1TYXXLFKtDWdLYcf6LKdZCxTCP3KpnYSrT1xDAeS4Q23b4L2WTyPMfsGwqiFBT5AdkcTcF1v9sj8rqs",
  "key20": "M2hyuPdC736RBTwS1PegHibDKjz25hvGQ3TWbULa1UAmrXDFuZRYwsVT75MtmLdB9cBXR4k1FzoXgzRHKTLX8eX",
  "key21": "2heMFNe8Vv2DGuJjZUtjHTxdPFhfsoZyJUVdGZtNcUWhFewHsF3EJmLe2224ZSemodHV4Ne6zzq6au126XUb43c3",
  "key22": "hmAPFB4m7FqLoBvv1TtuHA7ugUL3fqCqvKjTCiocAxGvjk8U4HBUgvdxPQG5BfUv32sQf4E15MkQJscsnuzbMyH",
  "key23": "osxLskARjbfh4iKDAU3LH6kTCrPxWtxYTseamj1V5N9nYErEJvQnGZxcztDpmXmhGVrREcSHHztDz9FbTV52HBn",
  "key24": "3XFQiD1DLAaibeFEec6SuhY8V7AzK15ZirMPLiQsfqKoyUpLftYtB1ZXUsTL6CcYXh974rTdrLLr5qjvTRohCZLm",
  "key25": "Ut8BHNbMMAr8qDwHWAD8a51ZWt7HhpifPf8igCm4NQzonvj4UWAHEZEzZ4gvGNE8r5GjdFSFdQESLCqSez6ZKBf",
  "key26": "5iS1syhPw9ckAL6p14PGXPsnpkATMjZttPTy8xErUTnby26G1yvD4c5QqBokFG1u4LeTfDyGdGVQmLRCSYi6Xsb1",
  "key27": "2prAcLncNJLGzNZfbQL8V7f1DCUKccBJhiJKWbegNsowQfvZ9jgahoKC1BGD9qrxL3UC4KjZskZ7LFB7PU9uGTrj",
  "key28": "JEa7sCyzaXuCCFKMfPBH6TN3aeCFZh5U4rvsNmUBQXmdxnJvpKW6PCbWtooBJYeTaHtzTU3Z46PdtHTC6smQ3jz",
  "key29": "4ozWYXXcvRYwAa7VNq7pmPZhUxL11R1seeoVuvcbD2D4FLDyfNHLYMJvS5FzWdVyNWEccnEWkQFqnife7hVYBALc",
  "key30": "2QMz5hCJZt4EjChBRwTuit3D3gfg9CHJgS977QaGgUoWm9y5wJGRs3V9Wd1rsDUkz5HUcNGxxdDngnGgfTPZj3hk",
  "key31": "5SKHKQVTuCgiaQXpo3p8zQpr8LruX65Dv63LgjZ1sjajBAnuiSA2tSVxG5HuMoGxGRW4Hs8yjBcr4zsuYQCojaQB",
  "key32": "4THsHgW3HowxE3XSopF9rRnTzpt7uRcs3roVZGq9WXT2GCig3YYmr2NMeRag9TSBmfGJxGvupv3sR4ZGcmUZsha3",
  "key33": "Rq4PDnjuYqXeyJ8mVSrCPi9Wnzr37hrsvqJ23fgYwYdkUaNzoUAHZjw2tBhmNwXVZCz8C6JsDz6NRjAz3szdaC4",
  "key34": "5z4LwQ3cwBuL2HFE6t8bzqWWbC25cAbamkwRTEVBiiDcunZwwcqCWPnSQsMNhvbxToc31PVRnYx5wiMsMpr9Goyr",
  "key35": "2JDNEpvh6eA5ZejApbv4B5jpmjkV5CFNTJ8rJZrHSj8T4LvviKzDYsaFMggKCzsdWBbzxjA91aXdT5gYo1Sp2MXv",
  "key36": "5BL5WAW4yejE8TLoJLsYPjCwjTaTHaSaGPfEzX5uZrRF2H6F1J8H2eNMJiMTq92YHrjwV75DX5jF9bCf4sjYAdPV",
  "key37": "4dVnUUhaMxj7zVQn3B4Tj6J6i8X5JvK2ndUePqXbdRCWtm5ZPK4w3JNLY3kTbfnftVuoPB4XpjDJThBM4UqVpjUh",
  "key38": "5DaXtc1nuxDNRtLzQaHyxHt9QbTqYVCUco2nXyf5JKTQhPpwCKvfK3FtPZyzUdYaiiHC5hxxxT2s5Beg1SsXah3G"
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
