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
    "5Ckh4nkpzgjKPPLuGP8XtpXKs894hAw4XomiTwrxbQFFFH71Yurm4h6gNr9nHZmo9rNyvQsq2aF14sTRDXnn5kn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uj1SUr5VrTzMvgt1XN5Ae4Lrww24gRQCv5upJg9MCoyvFxXuXb28WDjvfoZmgyZWajQ3h6adt5mmoknhkvqoNid",
  "key1": "22TJpJadfBnetzfL6kToqWup6u5kbf3JGhywrdTFz5iGDARouNVUbcMh4AXrpqeKWB3RRzd5A2STs7YNc8oDcTF9",
  "key2": "57hJK3UJ2faQdXd1XirSkqoRQn3FDJ7SkBB3tX4ZsJa7UAeMXZS6RoSFoxpQXPmtJzk7SNRUGpgHUxmZBtCV9xWB",
  "key3": "3SYZLdEgqStGTix6c7RMPWEVjZeGYgnjMT96fFmbZZFSbB6pBUGPkj541u4qwFhE51Kaf5MtTZUR5nmB8TeeHt4C",
  "key4": "4hK41yxfvG6xCvDRmeAeSp21ULKA4QRS4bckcNj7DYzYbRonhvxaJr2JJYy4h9R3CpZ9tGXBFD9c4piFXUvDx2DB",
  "key5": "q7s7CV2jiwm4wHgfy4RjJ5Y8CNbF8rEckkLR1tPHccnJ8aqKuwjcqumRa5SpwvmXHbFsV4MmRfuRSA86pXQdvzy",
  "key6": "4kaEaBj5yVvMnGTLccfrPpjq1ePgJ3T4gH7FyKjRQnafpdvQS7EeDgjcDbieUX4p6MuYVisjk4z1JAfiqjs4QY4G",
  "key7": "xZ7fezYDBnJHjLMW7gss1hdvbtj9qNrkf8iWp1wnrPGQzDbJCkjWGErEKZzUALS1niHhw2DvnHwKBn4PpNoLeFv",
  "key8": "3pB45wUokYQSnWDa76KZviewHtLgAFuDFfZdxyER44gCyi5t6zvvtVU8NHpVkkfxTTroijHdFsnJwhGLfimnh3XY",
  "key9": "3Y4QXB4giPJUtrGRwRjeG9M5ukkCjpXDGUBogeHzZvTqdkz2FpgsE7q5YLQyGh1tEhrfaC1WEDUwiyw2wr4WtvQU",
  "key10": "hA5SuVcXgMm9STqxiq1ufY8nGkqEYBzzJpo4zAGPUWhCNPQ7NEaDMG6kbF17zsKUaR2LnkDQfs3qFk1krrWzPDj",
  "key11": "3P7DBmdNVEjFBoD9SRnzVe71e5GJYT5FNp8orVTPwFP4S6QPCxynpQaMM3oWp56erP3UmcxVZtdUpGRkyHcQ2EWS",
  "key12": "1xWgaTwUqXZ3HGfuSBf13qb6Nm4wx4u9PLJfH1UUtk5fsFbZKbcabHrDot1cgzHktwum9Ki8v2eeX4vjB17a2ZK",
  "key13": "336PkPF7rUrDFzFpwML6irt1FVJ8aTxwujUqfvQKw6xmEaKijdNz6eCEHP9JVoW2wCYuXuXomHsKKEu1nUzk5mHr",
  "key14": "4uqFBQmV5jRZAjB8Cdmeh2hWMhSGa5YNfk8ZB155UntMK5TTgUKgiT1yGByYf5QPWnReWjuLDCyMWkGg4rVDaDkK",
  "key15": "4HTvDLEBWXSYaWSURMj1aMztGtdLSoxYrx3s9GuAEs6FUFJSnV69XJDwHRrAH26wE1SNx3fcFxJk6LLc2UqhnTJG",
  "key16": "4vT7TtNzgx1wBKUaDJLnbAFiHrRKPdk33UvBN1HaYMPZUC7uV3YQbJq4QM94qgH6kpSNNwCbQ2zynP5qDswF6TM7",
  "key17": "rjeK97PPGaNMVkgXQ29tpoDxmJBaDXaaGhCMQL3sJoyzyKoyifM3MBZy9iSyhHbKCiaun84qeeeDYe8Za8RNDQy",
  "key18": "3LcDaW3QLazEnqUpGeFbksZZQKLrAkfP25oiTS8zxqNJhrHrvVXS3UWfkGthg4k4VREHTRY2XhGLU4vVPmZHFSeH",
  "key19": "BzXdaPN2vyc8aLyRH9ehNTi2ZDBBdpt2SGdAmgTnuJHUzEQ6Q4gVwwGipAY2FmhJ89CNFqiR5GqjpLyozYY2kom",
  "key20": "4Fz4FHhbRUUq6gmzd3t35RYn9V9g7U79GrBFUtQQDCvgn6hHmZyRhDV9BbzRMhJ846PGh7cksWPPmzmCU72zJ5ER",
  "key21": "25LLMasLqrBivqkRwnYg3bk95QmpC7bEKA7u9Fk39x9GqizuekRtpEirevF4xwFq2aNLtoTQFYa6cdyp1B5hoBV9",
  "key22": "4BxSXgP2rKAnp7QmTmjknW8bKE6Xsb8ePXaAYqXhhqiyZqiPmfmj8aqMra49WD5soMYguYYGrhyPhdU67k7hUsiZ",
  "key23": "47NeGjheNSv3g482q37obB1Xpj4r5ZjT1fg1mSZWCdieLLbamtGjj4baovEcG9CEaAFuvzN74zJECuA8EVcRRbNU",
  "key24": "49ACzkpy4pTcz9NkSzuEQ1srHRLGgGzWfxs9dn5rdjz8xgfEhus2HYsBMatv7zCGacfNXTeQyWKYdWeevhMweyu2",
  "key25": "2FhdGX4cBFW2m6qb5HJJJZpLEsTDiRUq1MeBJ1YSbwztRnWbhqVe2TciLL2soK6k3RFhZzrWgZj9JcxHzvG1wBKt",
  "key26": "5tRhsBr35ThD3LYwazg9XHTNLF4wZ1sJkzhjwH4wXLwky3Jozwbn23WGoq2jcCdW7ETCWMiVqC8UuBLa9hyFJLDK",
  "key27": "594nmrmE9DEEDNdfiqpaKMcVJKxWmXgAg3ufRPYMzNc7qewTJETHhyxYqtSsTVAbJoX7LYiZ5JW81zzFjygjCKbH",
  "key28": "419YcapbVAifhZqbaJWiSBrj5DcV7xd6MVyusNEBESacQysogpAkPzxFtFsNcAytjmS6AopLnFN4WS4x3LEEayNo",
  "key29": "3RPAwaZD6w9HHJ9V3ZKEoT4Ji7tJeThWyDAyWF9KgVrDw2KEasnWLGE4ao5EWnezMaa5kGqTUiMPGLNzBgx79T8N",
  "key30": "4JqSRkcUNJaxgde7M1Evzp5yaDewjPF25jupon7fW9edKKFerbxTo2Mhy8H5bCARiVqoxYUes6btDTvmQ2BLMpde",
  "key31": "37ukipH2TkAVbn5gzyQLh9set2bAQBk96YPMCCds8ECfmHMh84W8RZgDbaQjaw9wiNW1ErmLVNnEkw35HWjsco1c",
  "key32": "5VA9L6SExhEyw4BvvKXzSTTKciMToQNx7XBsbX1EqE3ozNANuWbPXNFo5Sv1LLgPjd1yG6XuqC71cYg8AjZm68TV",
  "key33": "sh9pMtwF6YWukWS3cRJpEfRQurFwdEuy5HKRaYSiy93n1wyffNzCjHjpfKeJ8pD6rwrZ3C4Gjt92uQ3Q7nfP5kM",
  "key34": "yFMXsYJmqVgRsMpCba6eoyzD2bKwfdYDPwf9Qmu4NRZTAcw2hkyhqiQrE2odaw7W5fRjVjEmRhxq1VhiL2vdcpo"
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
