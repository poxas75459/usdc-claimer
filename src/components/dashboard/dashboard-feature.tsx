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
    "acTBPAaoNJV1UZzr58i71V7zqh6fytP9dsJzW4L28cBkemowMxW5hK1YMmYH4ZzL8jpDvNXBDuKNL45Y1k6YUxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbV6p4v7bgbwD6K8MgpcfWDo1Suxx11LSfoQDLRb7t422mnvcUu3zoj6hPMSkQRu8Tkgf6VCyK9woghrZ5HzWKT",
  "key1": "2sYQYTrE9WDvukA2V8jmsKL4CQrc5EShkASfSqSaWWM13UVR6J7235E3HW6nG46UFrSjk9fAax1gbhLan6C3qcip",
  "key2": "3Cw4FCMTa5TYzVobyzUpbfHQhA9BccQPMb3WUsCTe3LpAZ3xnaMpu4QXAmPuDe6WFfAPdVNMVGxxxqaPc7NmrZsf",
  "key3": "2ctfe7vPAgMEJ5SJLsq5UweEfRbWdi8saKrqfXC5sRmSb6dP3EayYA9EaggeZzC2vjmWay2nMkT9NVq6rjx2EfuF",
  "key4": "2ge3sjdRtyAdV6ifegHX7exP3W9T9fQhuuTNfCfAvPLcYNnisFEbmqHd7DPqMEnHWGrmQU6wFPEKCLfR7GczQ3tW",
  "key5": "21bJvi9bKeX5p5P6MpyL2NezFYxumcKzqmZDJJQeJoYvKCBQbqDL1riSS9tr1ACLFnxXhD9DpMMECgvoY1hngwBw",
  "key6": "2ZAK1m3wxrEo6NyHrfRhJTxkwq6FdwmUt8zwGVNHAXg8mhPXWYLoWci1EmM7QrVv4ZJdaJrxrodNC5Vw1FKcBVaZ",
  "key7": "3tHQArzqzw9ofmFDDeEgp4q51JtprYC3sQYcEbVxnPkXerriR2aQKtrMwtDY4HseUoNVmqVXJ3rFW5JtbBfLTEFT",
  "key8": "5T7YQT3LoX8vZ5kgoeBn1Fdfy663mt2EjhY4RadUNhZSdokwF3wELY71u23Cyo4zaHf7UdKdTgLLVy4Mnky17Ajh",
  "key9": "4KNcRNRubrqocSwDeqL5sfEg4NaHFR4G3eGNoUk1q3XoojAfDgouAa7UMb4kDJZP3hj8mNZGHSMN1sKtSdsaonyB",
  "key10": "2wcN1d8qjL7C8y7Wt55hwFq5bJbdApCgkYwv8LrBEbSLKg8Dm7eGxSW5Sy8E1QCsGjSrhMAr5UnfCkYQ2X3WgEVe",
  "key11": "KmQu2XLJ5LB7rWoryA18Zyg8WE8ciwF6YWM6c2g7hXnrS8tWyak4AwVEHo44HF9kh2zRqwPBK5QHYTmaEviij5b",
  "key12": "2WbYHWUjqS7HWDJgrcUKr5daT6NSXTACRCnprGq1FTPXuWqNBQ1XvtGdopBU69ZWHkk6Uy7r3YL9FvfUDWhpJtdd",
  "key13": "xRMjFYhC5Dc7PPWR1WXTDaPYHfMSsBgx79SmCVyx8aN1vBuU1UXtyLXRpJZi851ipqBaPvYDa5d6fCcRhMiYVRn",
  "key14": "291nkssTR5XLtWGTGroGJa9NpTwzrAnnZX3Y6Ru7fhhfZLjUggPEz451FQUB8f95rnBHrF6AdpyaTNZVqT6wKbY5",
  "key15": "5iEUB52zxiVfmuNAd1LpfchvYiAriBkJAgkrpE4rWAcMFb2ukeTCrtHFWpMbL2EA8LjEEnSTXtmcVRdyynaE5huZ",
  "key16": "4x3oU4GjDwEXaWzKw2a6ibckTybKrp7xpQdDiEM8GTVJe4WzTW2SK9MA3XjgWCPvWczoBuoZ8PPQhziy42a61zU6",
  "key17": "8aYUq1AHz9G7Rnh3685PdwZHYLMFDtNa1EWosWpRk5woNUU2JBQHAVeorxWMHhVYEmZBFqyt4vmGySRyGMkawKd",
  "key18": "5dh5MCnbbTaubkfwqXbXvu2NC4Sth861xbr6QMmhkEfHBH9gSVqjFFVbPAW18mMKdP4sE8SzizYdaKU3dzDFj6N5",
  "key19": "2oMVyi9aQaocoBSYHiVMsiCdDBEhPfM3E7TUtTUkfik8cVXDmpuAx8Uq4vrWP7XBgLj8R67qJfww35isSqQSoB4N",
  "key20": "5Fe9KUJvVeqsnmr59eGBWXZKLzq2Q78U5BrmiHn63Yu9dXXvbC968bSDzPw4yFunZnskE9KgRr2ebtjbrxgt4Qju",
  "key21": "2jHyGbWHhsKVsQKXdusPDCiTz2XR6sgBHsosSbTtijWbKpdf8pJyKZfUTkZfp4GR1k15SdMcnTazsJSBCiiyMkdg",
  "key22": "5HSQemmUBic1UzQTat5NkoTaX3PofzaaWkyas3dz5hM5KQCEXiDMA5shKDYepDyzty84BczLxLwhKhUiAC7pZmgF",
  "key23": "LB2TfbFo2vhhxZ2qEcgiswYuG1nvbXVmGSYJQu55EggpkFbJC9d1UNogiNs9bEtj32GP8GHJQsdzVgzpwrRNv9n",
  "key24": "3f89R3dUyDUsSgj1jaR7SEkFsSwKhBLjgZ5fRutKXe44x3qyRSEdJJMGug5moHavJgoFixnL2bAhfjpH7FsafWsL",
  "key25": "4HUpFVAXsAwZmY1uVW9x3faqi3XdT54ZVKtRxGFiRzaJkGhkLXkDX4ZcsH5bcN2cQymUoMg23xTgWuTKHk6BERpq",
  "key26": "2N1BHas5rV8A5kPCWcTnuM6DQUYqsJWnbtYqJW86jnBbrNma1LdZMbKRnnHowtiaVkekCjgBH575R6UkTcmMWnPE",
  "key27": "V8VfRNiLeVwMMnSB4aVXSZs6HRYUwcHFvbac2cWMZ9Xa2aLtqTUjqzp8hueECCWcE2dfMUWtuPx6zeRbn5eTeh2",
  "key28": "22Zpu1EbtGASZRpdnoF6NBJEAoMWi3MTXDDVWXL3iXJR3aDxcC7tjkVjuGsYfBgXPJJg8BQNUp8DgQ3NY5V1iPc3",
  "key29": "5HVXuofrhmbrhZpp4qyYkY6hQwhGmGBssg9qReBFiBw9BpZy3f5YPTz24z8dmvvr96cvC9t651gTvTGgx83wdd92",
  "key30": "4bYEg9ESpMWEasQ6EtLnbdVApfCesuTBZW4Xgi67tDVL3A2q6jHhpNSQvE7Sx2U5RqqKs62ReudjdiAvYZGKA6J4",
  "key31": "3NWkZ4cyemDtYPHsHZFN2jiBLnckRJCSSv8CiKWr178krjVNUKTvWoUuXw9G62K7RP2TmFTeBGbS5HiJU5H8MVbx",
  "key32": "5VwudFJXPucUhtYSX1JDcUkbwmwh2mRvtUKFpmcnJpXzP7q2ZUDSSn1TKUKgMY1HcjdwEfULTNHwaj2yZNvSVx1",
  "key33": "4js8b4f6deWPQo74nkj7kTiqHQxH6uPczGH2U73JVs6qog9dGFXJtwDncSbjxfQDkdV1v2hK66BEsgmBTMZ4DwZh",
  "key34": "3LkRcreV3oREqyBG9UHe5fCPEYsBFruGJPfaF4hWxTSwH6dmRBcNDCPUkqJaNEQhj4ahEkUZb87fP7nePL3cnLgh",
  "key35": "2r7cueUBRWzDZJfEE7Y3jfUUjWr18uWMUFykBqgSWuymANiiD6fF3C5dXWfoKuEG6nNb79FJuU6k6XGdK3ad8w9o",
  "key36": "RFkSk46qxriDjdRCLusRHdkECbKF8GYsk8UwaeSaufFg49ar3KoRaTFVzoPbGVK2hDPYgETHo5QtykkvH6Hjgz3",
  "key37": "4JH4VFNUzhtRnR4z4VD1yhfwEf2SziKAgpgB6D4yaoMNohHhKcyFjhsJBw5ZnAMXa9jCEHj6RYjK95xNbJSHDt7R",
  "key38": "4Vgs93xNNXfw9sgPRLbd4taK9mh5nxDmigJrZY6hY53sM2qpYwaW2LNCribkNTU33T9yVVWLw3gC232QiCyEro2L",
  "key39": "3NhEYrgNdki6eMCGa1GTM1kFHqn5jaEUBu8DPXVDt4WBrad1Ba8tXSy3updHPNr4AnqiRpWkMmqp9LDUnsfR7M8D",
  "key40": "22WjaU28sUPmbVTNZ45K9HDQcY5LgDwDfdwBy8jM4KheNiuA1mW9zR8N9jPghHw81fZLjBAQtW7mvwLndRVPdgQx",
  "key41": "7YG34SDj9TznexZcvnSevuXcWpNGzux3wXAet3rCDygD1WF1XqPrtgTufkGZhG4of3RWDETLXq88iwyxVMeHqUN",
  "key42": "3RNFFYtQkvLPFAKai4Po5iW9tp5QtjtbonbF3sMTMTb1KMUEMF2WfF92VZ1JWy2RXLfVY9RNBSmZwozwEncCrWRs"
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
