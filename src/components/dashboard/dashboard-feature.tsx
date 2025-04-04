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
    "3rAYaGptZtAvw38tXfPCg5B7Fw3tKzMrqZDk7Fuw5FE9ubwjnGnymERKGe1Y7yQLu7agPVTGjn6yjSyF1drpBGn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xSu1ssB6yLwZd5AC6euxSqGCS9R6BthrsWaHtQy9Pmqp3jy8VSC5HyHCPu2mSAXw2XbaZLerGMcV6pRaP2V2aK",
  "key1": "2Reayb5UxyJmn3WM44npGBUCBthTBCMdFV1MdHwRL2grriefqH8uVBPhCP8dMdWNjna9dCNZToFRbjfXBz5AKjAE",
  "key2": "4MyktPV5myezD3AoiJagT53ajLNDmhU1U8gNL9J3W3T2MLwkKwXbv6sSH3UnR2GdgzWyfJ8kedPPzzE9RoPqYbqM",
  "key3": "5yn3hZGb5q4PBx6douUDwkFCGMi6kw1AJR3XGVvGH7sFrph9zh1DGSxK5PrmEGak1kDbzS49uH17LoPZ5GFeJzRc",
  "key4": "32KbSpinuFiKAznZttumBw9K64istdSi7NGnPsL4g9kCMPcSnfTbNLUNJPURPHztjnnjfqX4BR1HFHNg2RnVyShy",
  "key5": "2cdjQNbURAuS9sgNTuT3YaLvp27yQjYagjNpJSM2v7qx4VHh1MkRDcnsBRFWmvnCkmqZBtm73qqwCbkcErAfXSDx",
  "key6": "3LY9tQ3vCKtqRwBtdbxQPdcLecQVb6fPfXbHtczbnMXnLRBN9dPVsD5aQRPb4C5Qwyy9HDspFcJWSN2CYWp3NjS6",
  "key7": "5HY565uZT1aZ1hsr8r5oP5GZWxg8tsjHZcewV5z4G2F1Ux27tfSwpcuwZ6ShEpkYASFpzUkaQ4nEqPEv4r7XnLDN",
  "key8": "v9z2c6LdqMVvJXFj1qtgMW8Tm59t99rNCQbkHSxhoswEPH8a4V6ZkR2M6ohBpJagXaJ4Cy5GeY6XPzvH2cJH4Kz",
  "key9": "526CjVhK69G7MaToycGqxg44jdxH27NRWAPzDfAu1D1Lvyr7NK5Am2UpytR9sYrdtNwqyXGQQBbMuVAWfvNqD6it",
  "key10": "3imNLHG2KP2ZJhaT13626Lfa7UowR1yX8vjRE5NgpJdJJjbgs5WVLZ4EZru6an5kXSLJmMchHkjm4Zd3hDZUpTyk",
  "key11": "4CEskFgWQi5aEdknWFHfEdLgoBRgNJtq6gBkcVfW7hFcvt76pWn29SbwBsxu1xxtKg3uonyb7hXHYmxmycmVWnkP",
  "key12": "66NzA1syY1iv4RJNSsSh28Ggm82seEbtGP8yHuheuq51SrW29vo1pxWSLsEzngJHHuviWaC6Lys9D9C8ZdvMD4Li",
  "key13": "XCHvfRZKjsGDo55o6gZMMg2oedmpJGnNGnr45WJLzQcPBMuEk9Yvg89CV4Zqw1T1oE3QTKQioFAoYYpvidWmijq",
  "key14": "51q93DLDh7jrryEt1mRsYrPrSDEgzYPbHuhbHaSXH9RiFWkbibYKu6R3ddPwbUKdwhxUvgz3d7aHhQHri1Z8zRf",
  "key15": "3pbKd1L2ATZEsbAcBfPxn2bkc7MSM1wGybJTqewD3TZbV1jvNioFyx79yaK9apwhT57E32DK16Zxcsogh6EV3LWZ",
  "key16": "25WT2xq9uYrCpgTqMnzKY6cbSr2wnPXp24T8JVCrf8Zz4GxT2m1pNzQGb6Ug82GSiqEcHxEsZbSkeaPNY13npgqM",
  "key17": "56bQfX9F63suSbMvkZEpntJeih1cN13nMByaEocU1FQXBh57fK9SCZepqTgRdWERHSQ9mS4xwdaEZUMGkQLAgDk8",
  "key18": "2y6ypuHKwWqG4mXRWZ4oPQpdN6B28Teo1Fq3ggvKBxCwANov3tbTvNEcB86FaBPXSYSj3szZW4DF2iPYDRpN7abM",
  "key19": "3wCy3g5SNW6J2bhWB1ugtHCYhvA46nkdmJABVi8jAzB9zmRTUrPvFVwVVsxL8cwzgBDzQUUhcjTcymmcHVSBGZSz",
  "key20": "4XYuZui4eEQ5vHa3thaUPngVS6jpKazk2CVCiPRn1EorkEytGDkRGjbweTHoSNkmNyXMzdNWobntSu5pgfuLoqKm",
  "key21": "3Sa6VTh4FyCwaoB5pXsvmtcHYo6FUNeV4VFCWjj4P8Bv65jZgHQUUv6zzx2ZPW5gweAQ9pcK3Z5oG7B8ZcYTv2Ar",
  "key22": "5Fvr3uynSHq6QLG9o1z67BiZrw7XjRQTRj6BN1KLeMHbLJWa8kohpGcwmRrYhsQJRBq3trxAfpDJnm8YyxqNh4SP",
  "key23": "4sLeEs8Shkb9Sr1QFXK2MLn17m1bKpwShbU31uH1WraHZhFyCpzu9SjL1GnbQP9M23h2tkvsR1ukGunGJNegMoa",
  "key24": "fbf8pTimnDuih7wUa71jMyW4EAhyYTL6jen5CMxQYTcjcd7oxwr84Ler2PNTafwZyJCQCVtdbeWp4RMNdUYLJYo",
  "key25": "37hGSZMFAEEWJmUrDQwuKNxBGVLPrdia2iBditr4nv5stEHJgMigSUqLYginWaa8eLRWwBY7K6GZ5jLVgqyRPmD3",
  "key26": "5FgYpKiDY5X5Kbsj6AmV3n7MSGyPytwaZKNWEHerUNQbNjnhMNR4bWnCNDM5odNevQXTaY8F6DyBx1yVS6mgh8Hj",
  "key27": "j9uTJUzG8iWUT4Z2YQtBVXEG8CrFwmSkCqJaBpyr2MKHpqr9MNaNriahMc6SNHMoSJGixT4o3FS47v3njipAX3j",
  "key28": "3mUaPVFtgdyPphfPcKs4Es3tbBN2kGYM3pY9BXZX1Kzmon8gs5HiCkGr44xiVHaNQC5GeSFPQ2EuaLA4k72c2Adi",
  "key29": "5HDwBzRuob23Df2BKz375puRq967CMWLumVJ2PiYtGcAefPfYBPbgTJH2f74aLPc6G6m5yGpbtSznRPjH8bEWZsd",
  "key30": "ZXsY5XFajshJMVf2QQTAhrdDkLPssZ214bcb7hwfesUNosipCuF9m1URdVhZnikqMeDRZVYS2Peqr2JfF1nVe1v",
  "key31": "4isGznPUUDWjNHmbvUPAJtDcCSJddzzV9N5P4Ls9qsZDpohJG2fhkMqWKej3xLNFr13gu1YJ1gcvbs9hZYBEk5yq",
  "key32": "5DzQuK1m4SfzxKn1MWktcP8iqnSg8kJvEGCCJZW945u5aQxC3bKVFsNYthyV1gKGXWyWWFLKCmjLBTpbJ3B3TSoJ",
  "key33": "7soqtH1giBhgq2F2cdebSCPQkQYAGcanZ4vsWbUJuJsRZyYU5pw6RoopXHtedcP7Pn7CZKHSHi3jSAeyu7oUy2K",
  "key34": "3Z64zJu3KRihtGjqmCa8gPZDw7MxU9DmxHUK1iqqUuiEGcLD29bhcaqfjDXUtfJcu6H51KjEnvxLnucgWHnaEogB",
  "key35": "3xKhmbmWfD9rqdbKGAG1mwuPbvBVSP5eEbQ1znyqpZZ4VSbHLEeG1hfcE6f6fFkFjWAE5NdPrgNxmUm2Br584wW9",
  "key36": "25D8S3BE5r2UTxYmHbPgUEMfuBSSLev7iDG2M7zjq4nZ4vPCuynPsqYkdng6UKSZkhC88huYhnxUGChuABgCRyc8",
  "key37": "67eRf7k4pn6dKXqkD8seZdyCEX3C2PwfM92Y9LmNEkzNisURqNgEtmueR9DRsaBkVtTrbRvSFcCj6zww4Y2igJXr",
  "key38": "YsbxjxPHFPkpWuy6BvejyWa5Cpc9BfiD5dksoiiFcKmUzArfJE6eH1WHx6dUp1GmM2vJLtThtiRYczK394F5d9F",
  "key39": "TaXYYWCivufTRFXXD28AELkqB6v8WCzMoz2abrwcGPeXy9mqvTYAwJeeb2ZiYfpFUeSdwGnmFmrPw3f2CtuYDC3",
  "key40": "2V7aWdQ4zWEt1Uad9suhjTpGqxg9hy1Ue1DwDg21K3wB481Kwh1D5K3LcQujXrafwCz4zBoFr84e62SJtYAykD4L",
  "key41": "2puwwvL6KXk5o1YJrQcH4okJCFZ3NKd8oxxZ2yeeABUi7JrATj4tPrL77iiUiNcbmZgdLStk4noAf8xYYJh2Mgxh",
  "key42": "5Aw94WSicJRQH8ZzVk9NR9AUwNPLHGRvnEXL5o2CgfW6cvcHyXNZdTt4QWqDkcPP6CFCNQtEVyiyz7JUGbdVyvRt",
  "key43": "4oywnz7eYyoqvpFVjiW3kq3CMWUs5nfmhYMvfnd7Rrj7Dz5ZEByYUHd5C5o2oANMSK6Wb8WXebgojFDnj6SuBB5H",
  "key44": "5jEksumrc2zgSjK9Qn2tbYtQbHHoysofemZQTMT14PYA462PohJwUpKcVAz2C8k6Es88zAgQnz2TDcC1ybNi4jMQ",
  "key45": "4yexwgiH3df52pFBo6N3yYH5CcMLCC3GV3jsbAHqdrUAaDvAYvH3fMzi9dzrsJSVut9uFveArF7PPX4Byw8iDJr",
  "key46": "3QUqVRbom49ZwbyEvCuVYhiimXDH6bAHkhdWQeK8scsyTBCg31GPk86YyPmJvyhMbJ8XB5pzp2RMbQCjx2HQ5z5f",
  "key47": "4YHkACu2f85xnMKw5WfU3ZGz6tXpt3XeQuPXnfFm8oU3yVjxZ5t6AKv766RGqQmQuVyqRi5Lpyg5Bs6xL7riMF8k",
  "key48": "2hr2XMJYDqqJFtMhBUNnh5NVw1XaRdnfGg8VMfDzCTDnyCnE5sVsfUs4NRPgxLW7x5UzF1tBrsK5odunvNkhKLD7",
  "key49": "67iawLML9ZwnhWF5pG8H2A5eSZH6pbbXoePKDdcoUos6mKZnDehQLKWUuJBFrabAptma9rX1UreWgJxg2gtVCcr8"
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
