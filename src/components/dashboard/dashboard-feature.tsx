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
    "5RqSjuAnDoLxnKkJfUytUVSjMUoboCaer1uReG2houmLAPvJddLPD8wDTnA1ypaWb1XHtsqp2FJ4zkQ39rUELu1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUhyv8DbRqw3ijWZgBDDZZntPs6VsFZPs8BxLdV2kerHo6Xv9CLgYG5s7KDqueahzMrrt8meYAf4HWkd56jWwL7",
  "key1": "2gp7eKw9cz8XpU8ZBH1raL95vwParMzU1uUWcBi79xMWxXQkoYnzMYhZyMP8E9kAFADNtKRREZwt3YCbGFvHLwLJ",
  "key2": "xVkjLZ3gjyfk5fXsUdMjrq2ZuEmLfBfT7ca5wqpVPGUFaT4hb41eiyuwBXyZsgwsFDbmaSpNV9S3PgkR6Qwa6Y6",
  "key3": "bz3Fp6tb75by8qL1ABTRQgsAN6KpuGEH2r28Ha6YKUJevxK55vaqMdZ9BUCx1WUqpEDcrJUdbmuw4CVo587yjuw",
  "key4": "5xgthP5rxGvrofDMP1E16vJyRN3qcuZKof2BqF1Vb6wvHi7khkfCD7BeBYXeZBBNogFA9TK8ythCLDPRxtaPCJcV",
  "key5": "j4sdWbxhPjMH1wUn6TBYws4ox6mRk29S7ZkY37rRXhEyKe5MTrFrdZiVTvXj17pozLU8q28u4j1VhT3Qi7L28e7",
  "key6": "h8qeBeLzTiZhoc9HqzSf149cFcBW26yqasVYcBbNEPtnhKW55qK4v9xHYiYeFA9gg1aAGo63DcR1q4tfaMZTnrM",
  "key7": "1uBcs7YkiFLGmTRwFoogaH8E2B6VY4mJsLUbL3tWRA7fSo4MfpD4fwrKuPGhtHKkrUtdf4uQ1cLVgXdudFDYumQ",
  "key8": "2kDg2EPn7pk9r8Ue28qd55a76qqHBEr1wPa2psKrWfdZVQ7Amkchj2HEQJZdz1tZdULKAh2wiEGbC2APB2W2fgKT",
  "key9": "3mW4PjqRjK96XPHY3A71g7XPvj4yjvaE9E4GZLtDd89ggiHpLNANPbM3vrMKfmGCWycbUfW1EmhtjVz72aDAYByZ",
  "key10": "5tWtPTYsda5jTaaw1NoaiN8jyCd1ZmRZw3AHaHn3knWGbUGuixa4SAcSWg4D7ug7vgsTw3MyX1c4civiwybUKSAN",
  "key11": "2qxUNxf3Wwpb4Rfg5zi4PM3mFQB8pP37WPBbzWUjwdpSeDAb4NzywkqQYoX5V2MqMXUD7QxgzHeycyeqXrbQBeVB",
  "key12": "4dZU58hmQTrAohJf3jSsX9JToiaXwXXtfh4sCZtJdcRgaGQUHZyiwaTMeSqReuU7vGwK9M142cKuDDc6drx9axAv",
  "key13": "5vCQbk6gVnXESjAPmKKvDZWNpeAMFHzMvstB54wouDWvQDKxJpLXVkD3WEY3R9zAozDXGYFoD7xzWtyLPTQWv73r",
  "key14": "33yJw1jjCrBf29Gph3xMwQFM3WEBk5P6fb3wSx8xEViCazMfcMyEXSRVjBVhKFGPeTThsZMPdkoaCmzeYtiH1xUT",
  "key15": "239JFdxdjvdA94iKvLUhWyyRmz7QFrChnjEshBZqmnnsskAvNFiBko27RVALqyXKEiWAh7q5ntxzFTCKbhESTmR4",
  "key16": "5mSGGoWsMCYa1RtADrRDnjLH5F2xz1KeTZSSw3s3nJ5WodSyzEP9d9wEi4pn4BeDqenuprqqjjbfbjXzFhtLKvu9",
  "key17": "5mi3TcyNmwAfGKhkPrVFw45MkHjRcnoLEReEGWp8yRVhWFReMEnXTZbdRMqqokkLT16n9XEzTJbAsma5SeE8Kpp8",
  "key18": "3z3NpvmFQ7QrGVKigEoyRXJLAcvy3JkWeauHYVw15LHcQWz742cewSrAz5rfeMVH5DnQVTR2BCborG2Y69NFmnfw",
  "key19": "29tXrdiH6Nu9zx26xs9AhsQfQjh6aNc7FLjsFxhRijm3L9w2f85b7i7eSrQM2Yxr8YBcofrP4EuYSVYu6ei8CV8D",
  "key20": "45FL7N6WkMkSb8ydnhZqhoXWqY4KWHzDBCcwCMjhvhPzkqRbMWQaeBQ1bpfrqXDaoqPHs1QNeti3d47wKwb1UWCb",
  "key21": "2FmBcznX4c5oqy3AoceMVg5gmtHiPnKFbXqiumaG3TGUs42f1ZiFZby4sctWkEKDnpyYTVzkqMUuHWErC6pRBz4X",
  "key22": "55GZ52Xv9i79LGoMBtwGkP1EoqEbFyWei6hwfW8yR3hK4jjEaq4231Fkjn2Wv576PJo95p5AiLdtNT8Chs86iNiX",
  "key23": "5PZgL2sjJYP7wrXDRnsLK7TP33Svz8egE2gjNvwEqfQvdDjchn2u9PP5qpSj6HBBTyd9VcDYMa98NqK48pJJci3o",
  "key24": "sGP2bEeYKjvJveLiGKiYH2pm8knFKkqnPEvfAftnWFGupnZD5UA22XxuRXn3X8FrgLa1iVCVSxSqpf3bb8i7ao5",
  "key25": "3uFHtmxbv4Mc9U3JJcDUwDYoRoESehnHuNVBKxv2quUVMKBCuBhUQun8xxscJEXKPr8PUBhPhR6SGpcgoHLGtm96",
  "key26": "W8RgCcyKLLQGNhPT4bFVmpBcW1VYcQ9wSDJBSLmMfzpozGfXGWB6LEdyGezZtmJfehQ3ghxzyTxSv5HtHP3FWnP",
  "key27": "5VeEJpQgQRFSWxnJQuBkNiiTnbJ6TKgUNDYNK4wDJEbHZUbjUuYVJue2mbQquMBdMrNi7qKSdN7RumGksTNZWVpE",
  "key28": "436HZoJguySagoeSbSKDgYXmvksd88p2N6g8WGgt2AospZ1DSBSuBjDBE1cYSAfWsPgwXaYNeApyPSaoHzrDe9Qp"
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
