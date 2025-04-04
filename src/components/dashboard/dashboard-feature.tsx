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
    "4MmkA8CVtCq8EDqbaHQ5rJtWcECuboqBXtbiL3ziSf6naSdPTfgrQmyCuRGTYRvKojLqZtf8Tzj8oYcbSt3JsyH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vaibTdE3vQ6NsdjZMB4ZzS6TveAuQeA8fPDB1E9hsB71Em6izZNZYcP1PiBuWDF1d9sZc7rbBX8RkFSE5Cj2n2s",
  "key1": "5ZpGLww26D4aqtFagNhwd8tTnidaM1EWbp1VnTn2MvPCQJDxQuTkUT5oUZx8dpVxoGqHeToQMfwGuiMwrrUnNkUk",
  "key2": "daAUSZhYprWv1vmM6gUmDAR18yTVJ9BAYzrGwjrN2MFsivevHc125fkwD53NUHoWS9ixVAu6pPm7SN6eBEPzgGu",
  "key3": "47NAoBmqdML7TL5SuM3iFZWWGf12mFtRUkRU9eQPza8HoV9YpAjBaiXABJNBmLfXw6Di3xoM1HPzihzci4yf9KKc",
  "key4": "c6UGsK5t2dGTKEb9T8RNrCSkvSoz1Nj1ppqxf5hBvbFewgCgdYbm5mgRmMmmv7B6rVhqVw6SvnvWfFges2LG8wE",
  "key5": "4n8AX2UYFvPGP4aoX3EPt1chSDoopES8CiEBLRGyZqmxMgPt6BMpRDQkxaQWtKqAb56vM2AkB4WcSoMqNXAmq3JG",
  "key6": "2rxCqUxSoEZtGQSt4ydSnnjPCL7eH4uWmou1hfBickme9q2hZdchZehcTGqmz6cQ2SksbxRyqstCJQEPXg4pwoh7",
  "key7": "3NwDMpjPTM4bMN8C2AwbHKaFXQCZW2eVL5KzDco8KZMARB3yW3xwBVtV9n1EH8DNV5XJ962saHtMMPAQhwKoNrXr",
  "key8": "51L73NtGfMVCJV6BQCQ3TrKLAwYC2xMwbuR9vaZkH6ESSJS8kAjK38wpKPK2iLbqXkzcQkFPR9g6afnTLMRPqen",
  "key9": "2Y63Qguon7in8CkMrwjri7463Lq6YQsswEccr6JigRRacWct5c3GHYAXg63PCFXXwxg2BezwLkfYP2DTuqEQPkw",
  "key10": "248Bg1g4wm9KFioQ78tELAvJddnBL71rudumtdPqJRRGF2UK1GS7R9VFnTjVJ9pkVBqX91JGqnwo2Dt6nHS1wJNv",
  "key11": "3UD6H8ZeGoPWrmbbobDSzr8mAzxbT2iFUPw4byoc6SL1WVdS3mM5vNrvEngN7n7keg9y24kPc9etxX2W5MrzDWPU",
  "key12": "2mHfWEz8Nudwj3epeLNnFVFNQWmeFmTkqB4P8EmXuqPebX9oHe4Vc6BHYTbfH4GPoorkp1sAo6Qa5WL5YKacUCjv",
  "key13": "2njMdo96nUcM3b6JCHyZoszwnvaFcb2jsCJiPTmXy39PmHofznUQd2DhbeecZMf8ecWZUnDV81sDpPRMMBGAXzWa",
  "key14": "2A9sGs4t3yGp7zJiET59Fi7fpGwFbkAiXci7c38tWz7modjUZMhqzWSR5MK1F1zWmhgfMKCZQwbQBkzRDUnL9XcU",
  "key15": "5mf3YQdj9Ej1Weua4iSwVzvQbGH62qmpWFE8XxMHxNdDqt6g7uiv2d5ZxUyyzEe9aPAuk3KcmzcbatWLCVVZGyo4",
  "key16": "5RPYowKKMP5w5YLkuUpYhUWQopnHkV6n5C51CeD9smDzsV4E8GQXpY25vspukwfD649pt8ctbxYMFJH2CbikTqTg",
  "key17": "PgsKNCEfo3oNWxiP2T5GuyiMfAELPiSwjR6DkwfH1iQYxreQDZUPWwaQpvTpLRNhrnvjqV3BpQHARUQHDppCNiY",
  "key18": "4dbsJ4UQrYbm5WBwPNETwKWYy2WGnCUsnj78wriftrEUtM8UGaNmRrq8B4XoofxBmrrjto4BtTimosEunNYi2EmH",
  "key19": "ZqvGPodNTaKRU6g1FzEY3CovQ7xEaLk5tiEDsy6CNU7D9iUunpVPc3tie2gw3jsXpyK74BMnH4wRiSbr28kaLwN",
  "key20": "hE2NutkRKWfWtUtGGMXprGm5TP6tkMXfq2ZNJuMAiBzbeHDP4rgqxrLEZS7Jd5AfDf6rhRW5uF1nm9ciUBba6ph",
  "key21": "4aiivgQaRXRoC5P7hWAwMuRbfpoD6xYL4v1b5NCZTzhaFudfGgebF2dt6ZaXFmaCWuBt3YRHR156RZGNtuVoQ1LD",
  "key22": "2cSCMmrcd8bier82adEfWPEzpHsUueBWu7mo4dbBDXrP1FPjwRy4q6E6mMJmrk8q83ftQ4VxkiCk2XLi3aSc2rBK",
  "key23": "4nf872ArhLq4ycAEzda9kdiytNiTC9VDjnz6HBLVUaVfaVCWaJaS8LJeB5wUUQViGDHouWTB47U6fE6j1zCcLfrL",
  "key24": "2jLiKbVP8MGrPSwysdtMuxDvinh8aKwKswMcyuqmAzC9MNP2vF1VV6pj6WaczdndRVCwJdGogRJDRniVRMf9vFWk",
  "key25": "3LzL9EpsyWUgCot17hQ1JwVNB2d4bHV7JiupPwcmvzmfbTqPjK34ZW9Firag4RDTJ5aqG3uAvRfqYQq3Rq3uU8hm",
  "key26": "Jy9AohJrkVec2PGSAsbKYk4YVP4AcrApsnr1A1qi267g8ZteLwFVzZfATjg1cq2F8JR8zeQx2m2u9a9c95nUmtJ",
  "key27": "2Wir3fP4qJ82emHt5sZoZaZgtGwVs7o3TyAVD3YdyfhxCCxFMpV6ffseBMfzKHNZ9yqkL8ZuBBgvdCJckFFfgPtf",
  "key28": "2qthFxQJHzSocTsf4dsWhBH1ecR3datirdzdWJ8FiCYVh9xSFYKnXpC62mu6yMxa47pCgMhAZkeDA6duNo46w78W",
  "key29": "4fsjC6t2NqevrsPDY2UrCAY2xncuTFMXU5wgQ5nbPGxhUzdD31mmXCdMbm7REGh2xBusVcQFWMW7Xn9b1rjBk5Mt",
  "key30": "3M6EacFmmFRySNLGm2v75uiw7Xk1Q4gRDvV55N2WZJ1job7pfAUTkVqsiHWpEHWYmdRANokwwYe49kLPqDEjn8A3",
  "key31": "4iovkUWNWXrPCGU7aM7kKyL1xDoVNPLnGMopLqzMse7Y4yyuLohfAup53w68DgACLWRNg7zGKmBR1kmQ4weU4sua",
  "key32": "3KhirTzwimuAihjFXt49jLLyicVRGaAS13TwmVUs8QzzzcMzxmq5zcVFiVGV3vHKUUCspxbMreehAvozr649seNe",
  "key33": "iWT6nFsnkbg1tRj4kFNTfg4yAhgsuAMemCpxyA9ZYUqSPQGbpoQ8cZMLPKBtkkUpv9gvdT8MTJLdci9Pfa3JtfL",
  "key34": "2rJH79X7HAsJCAxkgxkFob8beSAU1bjQYue2JjKBTydbkyFcaPpe2xkkAECkGHRptMYb39u8i5Wm2LP3cHv3mxe9",
  "key35": "5CsBGTfazT2zB1gBmi2wf16s1HtJ6HRfCAwcNbPHG5PEN29D8eJeFxrndzs9Qqnfe9nkDK4ogsGEdqKeVLDcBXNM",
  "key36": "3btDYm87CNx9rmcJMjrjyFdnyEdiAzxMGGzsiPWfjwRqCctbxEDccJ1PxHq9okryw9yDJ3rEz1kXedUtPER7a7oJ",
  "key37": "665gtc8jqPEcgLBxiBCePJkSois5Co3PwSSj6iCfqafrWtYjM6CSzZbVVDFnz8F4prEjmSRDUCCbNdTy2MdEvNfz",
  "key38": "2Q95wjm7JAzX6tUAqLqeipxiTpvgqvkKYfKonp9jhh9GXbpVdDy2aRytfAUnmzC1hXACW7G6usgUFEhBT1jxZCi6",
  "key39": "KhgV1BBsGSkXQPomds8fkhaGS9ecMb51tHQhB5jW86CUxLEhEf2wFnpCCPmKNav7J28kq47Ltd9ebCYJjn45DGe"
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
