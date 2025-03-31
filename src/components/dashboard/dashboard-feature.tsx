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
    "3Xvi9yB6DhH8JTxvdBDRguRM39Go1DXbPqCyqe7ZxNLGAmgZdGppx9ZptNdaaFt82bNCV721fmoeU3cAPAHRP29q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HD4scyMzB9cFFjGnFS8BoXK4JwCe7DgPgXuu43KNAHMg3XXJVCC6qdccpZUp8VKvi6Zfmq7aanG7XxFhMtrgKqV",
  "key1": "56CTGhsytk71NfZYFpXKETbSCmGUNC98RJ1hpC5hgZPjEumbwpTBMwQWSsiS4uohZ7WwaK9bzYZCBpbWT379GG2R",
  "key2": "4scXZ1La9WXjVw3LPQHDBYYSZRdogoCeP2NPoo75xzEFXUojKCJxUESFen8AVe71ZHCgag4vLyS52qX56HkR5xto",
  "key3": "369SqzujbK3qCBReXzoWt894CNpXmoSRvw51Xgi1D6icyzxC2z556KeX6sA9A9YP3k8rFxWFokqzVJNj8A2YaimK",
  "key4": "27JJeyW8MphZaKeFcjJFtQJQaxxYVt8avJ7EcTNnTfDcWfByXjHmg9qJKGGAbro3wr5redE6TVgwXx1DvJr5WR4s",
  "key5": "2j5qPBxFSqyxB21129SttQHRSqoH39vChMdpS2f9xokXto1vLyMgNdU421cnouqmD7ajuwSKPneeAPq8LcVoCQZn",
  "key6": "4SFSPSkS5c3UP91SfaToz4ooJRJsnrMKFbUW6Cgnq492qDkNCZP7TBGthEsKHww5msfzY4sWwcgziHNsprsgXfyW",
  "key7": "3eu7SfhmjPmaiztgqYUtmK5QBXVzWYp5z8wsYjEs9CkgKarJre9R4QqaWv1MZH1UmoMTdoxgS41wo3M4LQShLKVM",
  "key8": "35VqQGZFwHa4ubb1dZUUCYWicpMAYkXdDrJSgdm6KU8JWpeK7oNA6cCffABKTvDG63jqdkyM3ETHqk7rcZXqHcjG",
  "key9": "3VFCZmaLVHEyDXWjzbg7fmzsJv43D2mdwLCjzeLaZ3R9gonAtyEuPZ9gd6QC2BTGkbukQQz3ZwCaaxLaiYfJ3gqR",
  "key10": "41KJ5g7BmNKUSwzSoY2fm5VWyMcsovPLL5zDH5nqNdkN5oj6tvdp1aQ31eWGTpBJpqUC5ud4u4B8Y7mwVVqvSaSe",
  "key11": "5sZMMTrEAAfr7aasZLJFuWCVepkQWV1hGHuCAaXsRqxsxs9cw1cPzxvF3Rit8u1mop9sWvrmTDe8kdBgduzFBNHQ",
  "key12": "5We8oiBZAqT1hJo4P4MsfTsa9hWkceymQBgavinubotB9eZjEWJVud9qB9BYp4ypKtQUX7e4i6LADQgCnbJfbEsK",
  "key13": "4BrR7QW2XayaNbgbf3vefNns5KP8zH8s8QPw9C1XYq23Tu2fmcikjeHxcuyCTZJjjuVTf99JCJn8t3skHQNDTBff",
  "key14": "248kzwKDTBTXNSgWFjQ7VdJfn3jEJEatMppzt1V1hs4pTqXHDAEL8CPMwkeaEksCcYPF5QmGuhGS5anbupYgQFo3",
  "key15": "5nRh7i3zfQ6kmAskBidihkYNwgjirkCWL4TAU5zKgEsjzTk4tP54jhZ4V7sfRqyKkkwSRnhtTh3GyMDubFcSR8du",
  "key16": "8Qiq8Hen8aaL9Cs5rRgmdqzepCZP259yCRG49NmeVKpkfP3GN2iE4B9rPiKwSVHGmvQvXQsBn4u4iCnDbuyhgZk",
  "key17": "3fqd45aqpnRAS6D5wWArY5jevARVEDyNfSYTsJqmff6mw4iBwcTf9YammQqQrVibgHDYQsBHGhFex4xy8VwKzhPo",
  "key18": "3T2noizCVFHZfyN5DKyy5Ghg5A11ZFQY9VHr7vTHe5SqpFMJ5dHYzuMdPLWUYquXTMPWszG41owL5kfjhg4nmSB7",
  "key19": "SrWMk6wY8JBt8tPTBwCUeGXoHVtHFLRGREiiAcHSwdtNEvmJsxyRjFtKG4nnqyetqnnG1PSABqebV4PdVDFr9sz",
  "key20": "41xrB1s3zzt45zyNmqg4Wh3n23GqoiKvnvEXyNPWS7C27QuktWF93LPXYgZeBJEHEqmUSFKvdusxtMMyASmsQ89k",
  "key21": "4UMSohYamiwp88YVN2AvcskcXCzNpyzUHE8eepSo2zWRtZtxYLv7Q5s6wMsgwf55xDaRQY9V7rKAY7UXLfanVyDi",
  "key22": "3FPeGyqFAMFYgout6YiueXjZsuv6JrC3bkK6QaAzHocMZtZx3h3FusrUck6XDeEqtUJuijXDvtJDYDFe6ztGykwe",
  "key23": "3vyUyY1n1RRY5mACJM4DbwpeQZcHLT5huepgqxu65Qo63VdmajfDeU26myLHBjqi9LrzRCBv1mpF5VEffPpR4znL",
  "key24": "2fzKt2qCnKgZ7s6Kd8Vk4u6VXeGWZsoTNjkzoxRc8nbuiJkHdsUYRuJS5zNALK7wKxLLiiJotpredwrNPo8Rw2me",
  "key25": "4j3imbLjuTh5bXL6MuUTbB3cGZzZwDuF3mHMXYzu91HSFBD3ZnRooUrouA1hMZsZyquebtqPs3cEfJv4Q3RGcDWg",
  "key26": "21uBMT6AwSMbUed1q36bBEvfV4Y1EMDgzNrMHje63FgYJHry84NBGJM5Vz5ynBBgGZTWnAW6P5cuVqvX6pamtrRm",
  "key27": "35z6YjWeCSE1qJeTLVLXN4uc5nR4yYizCMTSYjzVJisqWcoMCSmbi1kL3LkW7gdtGxkpJ3VafnwWvju3zyc8KPLH",
  "key28": "2tRHDt1g9TG1XSPsfWbZpLG4nYFSuEWPCuXFWUUtv43pPyvB6sX3BgR4jeyW5t912Zt9HrEHdVN7RDLWHKnBppB4",
  "key29": "2rRU8DbCjFiZcmgk8tM1T6uZskb51Vw3HzcE8PtGShXS2UyUGZJg3BvouigSnx96FFuot4jA9rpcM7Rz2nbovMtq",
  "key30": "fwVgbr5sap6m9aTHjbvkR3cTavW4y4gTTJ9scM2xCYqECpwPY2nRSb45HFHJ93nUyqKvV7HK7dy94L7PARgEZNq",
  "key31": "3iRcX9W7b1n7bSx2ptQrkoTQQmdihDGphxP2Kz5CjEG4Resxkde8iFSsRgnfVeYdVyi3n4xRRURPXg72v3pgGMfv",
  "key32": "FFkgGoiUn6h8t3MeKG85mzFTqRpAcJ17s3U1hVWg9V547ArDw7VJM88fwyPcUXSRxpxzEDeiWTfpTAsy8yWKj1J",
  "key33": "5yxmnso4QKJFoc85CsA4KwFCTmitu6Gha4R2d9XGjYERi8o53mwmTUZxXJ7qPTq9omtK3jp63ae2pyFncVSxcTp2",
  "key34": "2RDhPBUPRf5mQMYw8oQnwavGCrMiK8HhaqwXXvQskGMgdJXKs8n4TMBDAW6QMJGkwxeGYvhLTukTPvosbMwiCfFq",
  "key35": "525xjhHCrqZt8hrSUFZ8FZUMfaqczPWQ44H73wdwTDKHSaDm9EZ1nrSEXGSPaWx3BFqjPXkCCYfegwboPovieVmK",
  "key36": "5qt6AqtSXyQXs7KhRJK3UgwEiBY2B7tKbcB1UYyi1Lnvdgo1Cnsc9bDV2x2v9MC3SpvMisus1nq8A356hjunZhh1",
  "key37": "23jGv1jT1RXaYcS4A4HY15sgWZ5rTJaj5RcLAdpq4ri8gTTR9Qc9ERuPY7wk1TDbs7AUwjGqjxEAdzM8E8ePZ6Tt",
  "key38": "2unBgyYBJ4JPtjL9KMnv3k9W96CNyHpqhmLRwkL6UJt63VAmyzmaYJHxiUs1yTnzpz8SfycGKKsrxfgnmWG2gfkq",
  "key39": "KH1n5jGqDpyoWnGpteJToq9AWAMgbMq9h1hy5Kt2x6qpuTNtaqP76q8YD5xpbJZ9MK7jX2PFTHboeHC7nw9URP4",
  "key40": "3CGex4MhbNiqhEPz86FXHHRJconhxWoeBkrs2JEeUoUMpKnC732R4KhSdEpeEwwGj2zNryAJJC5VitgQHVfDBhhT",
  "key41": "2FrJpQsbCJbJf28X78fu9eaJ55bnMjd9MR4fDu6CqFtNyaUsgeDd37NTRfcjiR871jy4rdAcNHTYoJsQ6ptV89kw",
  "key42": "UEdFdDnbKzHSheqRQV8uiRQqyNuALLEze7Gbzn2yYbzU7ayc1CAPE4EEBud1HXyxcriZrJUMfJzTTtw78AyqgAQ"
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
