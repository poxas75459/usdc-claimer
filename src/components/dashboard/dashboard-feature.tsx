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
    "3DgCw9bGqTZ8J4ezRwUBYLqzhWStHKdVME1Xo8gA5ZMAxyQqxvgJnKRpyi6zo7BVx3JTumNVNSkrcJJoPAPQxNtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kCp46is6cgFFkDKBJUxRCPmoyBu4AkEYy2Y2kgMH8eGeaFtE7WBrwNgywFfY1VrLRjWJakQqMMXh27uthG7AocL",
  "key1": "NQAfaz9NxCAFem2TSYgSjtvpkV8Gj1wabxdxmNrQxhkJ4wqTRN65Qn19paWE6BULCbCznrqDY1z5USDaQyvYste",
  "key2": "4A57TrxNd7r92Mkp3aP2PEyKWneRzLP6cuDXrd9UekLZEuNTPw5pW99qWeWF4m3DoCLeNopSbUaVvGGZok3iW2iH",
  "key3": "4xSB8aNJqoFekrkEXCiafwuXaHukbPkpZn5MxkcX6vW4Vd7oZ3m3FExcQeKYH1cKv6b8zwXegxAbuVR7Uk9HgyUJ",
  "key4": "2K1sfjwXmHejZyxAXi8i5EY8goWnN4c9SeA4cHiY5XKhApQZdAbAS99VwGzCAzHFJo34VA9KfspdYCn5okvjmFdv",
  "key5": "2xCSEDZBacbbXxMmPdbiffkUeqTEKnNh7SzpYp9n99kfAmRddzP5TRctEEq6yqeY44Q5D7zbw7y7f3fM6YGJB78K",
  "key6": "3QTaBtAPr2yFwwo6VcTetGpmEGpf1fU9wJKXtFagYkSADYWvZqFFxKuP3aHc7vGwLKeTqveHoDDMdzjdQ7d1TxkM",
  "key7": "c3iEgf7duXG5Zxeiuz3YZyisbGVJauE5f5XdqWfNPRgBxufRMD1xCehZvEb2REpUmvLyRwjY1UqmBuWphTXjx2h",
  "key8": "617Q9y26F3q51LEiH4HohNQDHmrSQFYFXTxTwKQLsicvPX522cbZzL1WfDNQrnxNGjhtyexqmMEpjT9GgAHcdLzq",
  "key9": "2yx8hYDscWytijRcm4v4UQm3icuyAk2evMTFhjFK74FmtUsEnY2H9RbRxfZcYn1v9ipjpiuZzf3W3Ript7R2BWug",
  "key10": "fMKa7nFoUPGbFzS4pLBy1cYJadD9sb3PpChrLohHG2vxoERa726z2jHmiKnEgpyuhcskWZbTioodLGX7qWVb8oH",
  "key11": "5GXGsZdRmMtEbykreqMzYfmpuGX2sjC7whZPdvgSAhcH1jgfiMcuMYG3cRyA8yZ3kC1GxzYCt7T1EqUzkdXBhqZ2",
  "key12": "37uswTkDvMcBEvra8d2aysmGAPZbGpmJnHinFGKJx5Vg5X6dYtYGeyEjMoSPQbC79mNcECBVEDyWyAmy48m2ovVL",
  "key13": "4mQbh123BXZpseQw4s6qkAJbz3RtJsNzdwp7FDmcnY8GrQdEMSMvgg9ASvhnsjW4APUwC68MPv6DYqm8NvGKBVwb",
  "key14": "5dyoM3xgPyAa18TKj9LzQR2yZegUGXBUpwSAy3KP13W4m4XADx5nbJ7ygB3UyHoXPxXreipfcVMDXVkvV3bsDPRw",
  "key15": "2C2kfF7B7BMpUPz5gCTUi8V87DLf9pcNJSWs92zxgNK5gH5JyCphzCP9tMuEiqG28q6eZ57Rvzyf6XgCNjcXr1eR",
  "key16": "3mvfwjQWAs2fNk9XXZ6kgUn2mxieqUkTh96ZSzDhaL8hpHWdB1bdh9EiCS3QByXNFERRqp9eiGAr7VTBZdRS2Nsd",
  "key17": "3SdNTTRUGnGVvUB3ttNHvKtzN2uaytGEegCBudcBs5hFvR3CVDk1pB3Kkfnk4YCqszUcVJLe9Pwfz2RqGy43ycE1",
  "key18": "Q1HL79pDDCRydoW5gX6XYWNTZFb1TxsvA4oNYGSH2x3rUdov4b1kGiV71XwKb7EwYi7QdgNymqwGWgRhusHDNgD",
  "key19": "5HpxgyM7WUNNLczHjS3qj5XeNuMJD8RqLsqwND2DDzTWKFLrcw57pPiwvZkjbeY5dcZyU7cDHak4JdiHDavBiEZ1",
  "key20": "7o26dunsqL7oASiSXa5tc1MPbgX8DjA5c2k9guCbsEuXRyvu493enS4ZzP8oTvLRPW5cN6tUCtBNXyVWAMAJyCm",
  "key21": "37VqzkYx85C5AqFyc1DHErBeLmnqmzsScrCJhh8jjFcb8aKAyrTYU2dAQf3uqGpnejPDRqPrVq3DifTaqvHhU9YB",
  "key22": "2DNwXcFQeadw2ux5YspJF4KggrK6Rx3mMxf5x6RiLQvDqwY1f1RKVLYo81Xn8SyaZQ8AxPVCG9gU21eUJPk2UrvY",
  "key23": "26wps3TBNJJ6Xk85uUKpphP6vqRsBPP2HqK625CXviXu3U1wf2Hxk1yUDyNQmqd6jW4djUXKaCR3Z3LZfjQeUpnf",
  "key24": "3XtatJqYit78AySiQtVGXEfPpyqiuFLSHpW9QJb5o9qGTvNqcMuBX2KAXGb9VNSBmoxPiiiTUW7dDtjTPTAbPgcQ",
  "key25": "2GhQnSUdUi9YesTgPtRoaB4mpvHg2Cvsrn5osS7qpr6XoqCyeztfY9UqVatEgwK4ijoT9ayczTNjbVE6L8YT49Rr",
  "key26": "64Sk2D6QSQp3itDfmJ7RVRZQC8zyL2XQTpUrFZDsAwBZfu2DeRU7MsveBqqmARozLiupiRYBsnSM3K6sFYKMXans",
  "key27": "F6z6cAAyc7J9Ex6rYj5oEcvQjEmaFc3eDFZ7bBtj6Awhpaa7Wvj48QciGyEzCAh4UGay9ir32jPZt1jYRqv5BQA",
  "key28": "64APoyceHf4VsWpo2aNKduu56WjS6BG6dbQTeH9mjthjNKNbNkeGupvEJZvH9xo5F2MSQxJjVJiM8j4V5ktXZYo3",
  "key29": "4TCCTpa4KGpYiS51i1nE6eythkuA2zq5fNVuxQW4BXpMfP4TgUuJrAtfGXK5bAuXGYvgWFH8oyQLQMHWTttSikCn",
  "key30": "zNqC1vK6zNjZWDq8RYb7xWSnL3yT3WGT6cDqAzZJM9McgFeNrMYNknMCSTQFRSZggzp5uMFnevTwmRH942mDMVm",
  "key31": "34eWgZfRXbaYkpeDpwGPMZBrwbL82oDre1TXKoehgait3BKMhdmsdVLrBoXAPVyZ8ocT4wwM2CLh6DyfcwL4pbtT",
  "key32": "NMb9XU4AQCoHs9MGVyNt4kL8GgZxQBTnoxybb7vzqxn4tSPxTqDRjMNcXkofvjT1hdMPVQxG84xZ6jopT1xt2JX",
  "key33": "2fNm5PRVbTSzMtWXBiCyZcvDTX1wQFUU4ocZ2ke31EYSyMRxVbeDQ9Nwq6GTWrv3UmEZd4DVRmKTDSU2hTL5CiTS",
  "key34": "4kPwM2fXLeMtWfVYuceN9Z7N8y5vsiRKJonok9WAjNjkVrdnfQH4ATMjqEbCtamcMAHpvjP7iBmCJkgi28h9wsA",
  "key35": "4rQjynWGCMsLiMDGDQzPziCfrBUnseYGhXfcejrmKGKpS7G61f6qyo2QXAb7mvf4kMppDdkL42EwnocVzZWZNM5c",
  "key36": "4hJnETriwt43LNWSivhoeDBvEXT7gND8rWM1bF8TsJMuzjcsjMWnujGQqoz45CQtAdLcWffVZU1RphRGprJp4Q7R",
  "key37": "3xbnavaagYqxvtyofBoBgRshrrSs3mF1HZ62BMMKc2teiARbHuHTau1WrU8DM3k8CGf1ouYog4Ed9GpHaTX4qoqw",
  "key38": "58MQQ5WEcxfHytSAYAbRaxBJFWy6gGSF7eH9Qum1rmv97bYihdmMafoigdRsA2UnNpFT9dAkBFboVnRwa1JfZq8D",
  "key39": "5J3EKQbmgQ1bjrVmkTS8tLHho82u7AiFpcBvaBzumN2VJmJBqphwwWvyx6MEE1cXxHCDG96WiDX3bGJNSVFUyqbU",
  "key40": "2EqtfnBeKCJbEV1c2kuKLCAsDQFqdfDB64Xh25UhX6wXP7tnQCFiQ7YaGvGdA2ir4tbqJcUa9ijipEra9brcXRUs"
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
