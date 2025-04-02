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
    "32497vCpA4vbMyBveYKNhbZg2ZMtVjasLoVsaQXmigtHJsKqaJiuHVLE6dRWL2J8kXWTCiqX8vMtwryanGoGZNaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NwbVYH6Y3cLxNYptXL9CM1ugipqD2meH2Rxr3YTZNLMsYQPrt93tUKq7ij4irJevm9XaAeq7VmEQrDsdASczVdo",
  "key1": "5kAEEaLUFM6nyA829W1R8eZg6TEV8Q1gpZ1XVuoFoXwmwfbgoZ3ct6fMAXfpiaZnwGYq6qUs5XYdyV9i9ZkcyoBc",
  "key2": "4a9qYBd32MVkLdk6uRNLTiKHDW94ENZpRdTquQ8m9J2sE5DJFcPp4TiUkFgeWk9XPw144G2ZVAZGFS9jQnvLpXa1",
  "key3": "cVbns9r1PLP52GQCGWwbSVFAFVPvoBUkGsBGu5UMTTkGsb17mxGDiZegNocovh8FbPYYU2XFn6bJ52Mr96wRTyh",
  "key4": "326E3ETjWos9Cag2Tw8cCj29mYd6A5PoxsX8FyZTdMfbcZtso3FxYkaqSTT6cXcdzJbZ6dQDA7gku2AqjFzTBMft",
  "key5": "4mk7k1rE4cGtGeLW1g7tiutGktd2hrUU7hfryZnAxuubmwLxKTLwnC137idK3QGhkJTV2c6Zm4FBogQXa1swZFKG",
  "key6": "46BWmah2MmFWqQ7Z5bfkwsmsYJh4xyhK7XbX912Mvdng4v4jMZCzN4ahi7zqNMJkB4M8kAEj2L1ePdfazTUJhZ2U",
  "key7": "rXWKW2vwh9UAJbkVRqi4TzkhHvwrh9VUUgJcFaHiS79s6B1YEe6pQxtd1gB29XKv7ss7HNxa1jxHQsoXKcX5FhR",
  "key8": "56TDBpWfgtj4iRQHTGFKeqCPwkzsxyKntGiXQwSCrxEVLywb2n6Ng9iRcgzciyHVCntgxtqdsNew283wphoMR4XL",
  "key9": "4jWz8J8ixA2N491w94tcKNpnMaUxrKU7QzF3Mcmu7sPDtJihTAZgjnSY2c8z1PbmK6LS9dNSTJVjyCjBcJDDVCtL",
  "key10": "2jori9Ej2fPTpXEu2CHw1BNM3aR7nGFLbjJpXbVnnLJ1oAUa24bL6jGySydvkXrEbm6Nr5wBjmacuCGCDuVRmrvS",
  "key11": "5pDpE4bgZLVF1xEtFXAGdWaZzDxniLjYyUoMiuTmR5d9sUS3T1oYph5gYR7uNuXUsc4HmGu7TYD4UTf1aMySRuUD",
  "key12": "pDzKLqwjccRsrm9dKc7TQixyEvPdMDxE6zH46mKgSnS63B9odpURZ8dn3qnX1363oMkhK8ubEvPG7KUEk6g1N1U",
  "key13": "2RcXUF2jkpSB6R5gWxW7vjrtHttdRpxYYEkG2Aerh8Hudar2H9MMaTkNoYUovT1e2z4boZgSKCLR4AvpupdXHXgr",
  "key14": "4WCE314qEnBSEFb8hrt7BprFn6zgdzyCdM7KxGg9fMJqkVxb24rFqkochcKNkLPqjW36rhUAavfXRNixqYe8EfUu",
  "key15": "54Aotctnfyx77GtxfcxVFG5yXKm5RD7hS9ehWViCFrDLPGqBS3szfSCHBubhjCAhtbUe6EE8WjVNFkoWq3rQztgK",
  "key16": "fc7FcDxhE6TcQQLPqDqSBdtw4auKt5EnJaCzmxsN7ad8qLSCYVsBtFTic8k7iPgUm6pMkG8p1Ve3PUZx1oiBTdi",
  "key17": "2FySVgVrUNMEYuU9vwGHiNkmxV91HtXHL3w8Ws19Hj111AsFThS9bN1WCmsaJrQrYjvgJ5SG7daZgmdWpmKghtYu",
  "key18": "4ywPyvf2c8n39tHxXUzkFW4x13vRq1DBXTecgewdcW5VXBCw7izZfMSGxBSVfJRuxwfT9NYh2Bw83L1qdBWpuG9x",
  "key19": "4HLsByFCo947U9FXxtwn5FB8MRMp5VuXosgQLQ86SadSo8qjRchUnGa9fvoUQVTXRucaJRvhcovCPHZ8RyjBva9S",
  "key20": "D2Q2rZiSs5wX1rn4hDoGukH3uD4SGSsS6kvZfFUE69uSQ6xEAMwZdfsTHKWJF3EoRtzfJFdnVxnvHFJVtFhLkiL",
  "key21": "5RHTiFUTKy1mHwfQQdKTpi46D2uuMgz5RsZmXNCiZ58Jnz2LbKJPs1akXbjfMPgEYarWVtCnvoJe752yq7ERfpg4",
  "key22": "5oiK4hsjgG7UBghyA36btixEJCmBWHF51ChWFMhaWtkTRhgXskPvTfyAZaL5tt51kPuy6cjBjoG1xY9aYS1VufX2",
  "key23": "5vW6AW75tuCShBsawXNJ4SWcwY6zY9xWvTc2NTNjz7aDcz2PfnQQBbaUwNgK9VKPufkijFDWkQSdqcY5YmY9QQmq",
  "key24": "4ovecduCCGS3JSZTBuyWmnkNRRbRR1M9yMBzgnhBkoe97N5u8TurqFrKqtQ2QVfZQu7iRFPzTqSE1VqZfbNM1VP3",
  "key25": "2nygeCmQE5GftuAwpfDF6aQYa9rATx4FjXChBJhb8TEcci51kQLMcRhH6si1ob8vRhFJ3hReDkVhLNvMet1zaaW5",
  "key26": "eZJrUBY1GPupUyWmNomuGwKfgjk1qGapwcyKQdcCHzShUP72iio4yF2Gon4RjnM6Fzg5TXK2aniGREVY2mzP2jf",
  "key27": "FkFqxdr2EwLwEPJ3x2KsjF3e39U5BrE5UUXNvMJzE3pMPDry3bu7rDMK7GqhDtEwkAM5RK2h1i6iAb99gj2KAmb",
  "key28": "52gSsr3tMGSzUBX9Yddn7F6tiH4voxGuSJcZCQqMkDD1GNoMmyWo7996azbYLWgT8TZFkBsyLAY4GCeZiK1BWrpt",
  "key29": "67KCWJjPKgHUryLQV2DGVi7SzAKYtY2c78y1Btjoh4zc7tVKCjLFVz6Vusrnc3CnjXcv1589kmgRkcPofAFi1cCd",
  "key30": "61BkJZGXRdxTAC1UJjToiXyUiSuWdvb8XgH6W9qnTCTBbQpFVdYuPLVmT9CBoLBy2bNSvnFCHshnHFPt8gzCTLPm",
  "key31": "2fj4vqWsWuW9EwhH5Doc4UpMkNoASPKTYeep6HK79yGpBUC5ZmhzDmgVxkbPhWpc4ggLPzivu7KTCTyrqNh8jTj1",
  "key32": "59YvKJf1pXrkG9HfY8nThJVsSoy2FdSYFFyDMD3iHR6WqtryFjjh9oTsYwCjMuBmeoDH7qsEZQsFSRTLpqUkoHi9",
  "key33": "2TeQUZpVXrfai7j5ADfr44PiokFFXLfKFKFN5whAEB9w77EHWXfGGnFhhm2QT1DWvx5xHQGZiFrNaTNy5P6PcuMW",
  "key34": "44iQmecEguduicogzwbpcA8nWWzRQSPGfXDwjRx6aFSKGvcbh77wJpJjzbktYdXzJi2gMMfuSSrHqJDsKWRURv8v",
  "key35": "3NVu7JoX8mmU1qHTzwj1xHfdzJE5f2i4b2LCRuCPVHgBDWUbF3Ve5ynZuHrM8FP5SMpS2utxGrkTAcgkCFK5Tsrj",
  "key36": "38K6cR22obrBciSFSxpoQq7mFoy35NhiQX3nKpZBQqEKFM6sZTCyGxJA1KDbkwj6QuHEygYZj7Qj76amwg66d1cY",
  "key37": "4rPEQW8ynxC6PiANR6ZAfPAypokAMEh212tj7Gn1LHP9DtgGhzc9AN3TmgiHNg2KCazFbX9anQDCMSDn3WdjTnG8",
  "key38": "4oeV88WPGP7Ux7mea1r4zMgrBydxL7zDJFMj8hbF1vmcL61hGcmpeqvpy1sDEHiXxASSGGDiBJS7NjgYAoXxyU4j",
  "key39": "2gi3h8bSVYSKUFeqFtwaqxe6PESgKzRQcC5Xn8NMKi7pyG2TGQhBsGJi3i2R6E6ndqJZiAzfqf5ZroN4wn9X8uaC",
  "key40": "5zK6DwfmDnx3yjDmEcmn2AUaJyv5Zse6NC3zmhRQjkTbhvbdSba31PHVaBBEPd53a9XKgCMqjQH4S58huV72LjMB",
  "key41": "4giPHv8zWy4irtzPWCi9uUT68Bo42gLBXgaAewkgNQ7W6BjbCyjxRUN7NHUbdsuQFxcmz2fwFSQj6LVGe9pK8iCs"
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
