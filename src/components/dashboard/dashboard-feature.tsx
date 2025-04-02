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
    "57aHXcZ8vwV16sXksKqHRLZGyR4qfiwto8jCsnGdG5BAWn2V7fn5LKgRzdc8cSB4mjWrn7x9mc13AS89i7RvEABG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7Boo2WmLPAd6edKHazMNQkMhacDxTePTib7ktPxaK8ykjBrGr6TfjD9bks6bEE67rnsTKVEZt3uKQkxnXbnkEs",
  "key1": "3NiUzBKvtsQYc4LCoVYpRyWf5Wbh9XLzh9baafbNbun2Zo9nkxFNEESyZQ6o4chR6FSAyN9M1PWVDWa1WdniKxeW",
  "key2": "4ADDfPJe7uzKPZmktMvcXd6s22XjZUXqwzumu6dLVvSM4m9VAnQdJMk5CYHbRrBe8tR37T1UwYpQvHBxnDv7fLhh",
  "key3": "tVqqRQKKxrriH8rCpBHysRXSUkURRNeLkLNPdJyrWe2gEbD1ekSpRuTPmyjKUhXHP1VhbqiEYwDPJj3njj5ZbCk",
  "key4": "56FrcZpsD1gmzodLGs7F5KbXfVHnnL2gWQfaqCiLxZBfo43BVxgG4ZPpiztJUAtodw9Dev239xaAVc9GaHUArf9U",
  "key5": "5cCMy4sgyoyk6QA7HqXR5YHbPRnCVh6RTx4J3GAbXH8fwh5jUGBJ2bWGFjBuT8cx4cysAPRihgnSxkvXGXCfw8c7",
  "key6": "3WYe7sTrgeHG3FkonDzT7AAfwkqawvagobXnbSHJr4WwwCVfnC2ANafNUbJZnnquNMNRuSyeJAGsJ23CupUGx48S",
  "key7": "4m6ae9erNLEFrQWc7Fopxb2LaUxWEpCkeyLErVLU3c3tHNHoDQ2wRGeMYfteMhpjprWQ6EUAZHGtyXqPT7xykMKb",
  "key8": "2nrRT9hycMFU6kCFAevNi34A6Qi2YgdR9VPGUWnxJLabBaVA7Rkdqhn1vDRbMt8PTyLu6phgvgaWr3KumJLTcYdG",
  "key9": "2RjEZFBpQbHYQMY2RpdTnJWH3srK9PG4sbtKTHK3L83mkVfnfz7MBm2WyJUKtGSfWBNCFY29gDwuJrT88bgo3erp",
  "key10": "o8kCCbtz7bFt4PD9jVxjyNoT2JB6YSuTPrP6vBsz7D94Dd8cWsAQYoNGhn9BmTb9gAyR5qHRdujRDBt5Ax2RY3Z",
  "key11": "3cof3XSuq66Wm6cM9YDrFZ4f1kTRsnu74NX8qD3hXjmKir5cin9EiE2sNdsx3Y46AGgjzEXtnDAiosSjixPCnKJZ",
  "key12": "vJo3orjqhyXzofMV88R965nA5KagiYzAQjFFKY7BKzVGEfsFVuDk3LtprC3SeAsF9dWcZ1dEdcGfXAF5Gk8oWWH",
  "key13": "3PrCfXNhmWBfk5RA93ZMzCreaZFkyhxr2JTcxuDNyh7PUNdPA9K7NLCZw4MP5qfGQoqbU857SwHSGyDsJ6xb7ZjV",
  "key14": "2Q4AUK5RievWVMRticytnDM38fQM7LG3iDkSrquvbUiB2p5RiGmwYVeNX4b7tV6bvgM2F7PR5KyLV1aEsfFdTtYW",
  "key15": "TABJna7fLCaq4pEgPMByjiEUA4ujhV5fvq2Un7kaaEP4JUSMTWCXmasokGtjnz5YfmYwR81KUUed1FDA9zzAZ4E",
  "key16": "3k4wQNUmWkWra42rVa9eQXyhWtJ68ANWfdCmSn5AJUzWeotY41oZnCf1ipT19SxqFmsRDjjBg1SipZx7ynCeSHYW",
  "key17": "3D2Eobuwwwsg2J5yM1CkusMe2eYu8tZ7ydkG21BrNzzG7kLMFGhJcuR7njUswakMqmiSC9uYZfPyzTfTGypSCEAf",
  "key18": "5tsbWcDgn26fZieLU5edXfrbx7nzabvztVR937NSYW4mW34VjidUuqQZHrLZyQeqotx7aKhoKmL8VCjuo79zp5xD",
  "key19": "4Fyxpy3A32HLgupgMHa1eER53saGhQkG7wKymA5T6g1yxdPw96yr5LYxqukoBVgGBC4YP9c8zV5rijzRfzzzPJuC",
  "key20": "5gowncxd4wGgKU8rhHaWFmo9H9yy54U1xrF8NUUU5GaSeCLeNWPGaitLygUVAEMU14mGiF1G3viZ7WjCLKAaQLuE",
  "key21": "2g2ExBENt5jrf8tjeRwdHAzCfN3yzPe28rmpHYdJ7ctABFtmY4rNVgZrkq8nWMqZJQJgZyZFgrG91Qmq5PWrdusT",
  "key22": "4EWxrJhhGtFUJFMS84iouqJhNUf12wt9MuPrBTmPDJAF1j4rQ7bw8oDvchHdvYGT11w4E3F58jiTvJtkTMgL5Zsj",
  "key23": "59HqL1oaScDpiTSdTvQX78U8HMFmCNXDgjqr3cZLeFr3XjZRPQRysbLGUGUWNBf6pL8MVBR4xdaic42J92nSsRdj",
  "key24": "3n3KrZg3vLySToBtAiRaZig1iGWaUUy8haovxC6xg79bPuRrY5tftxhTTi8LkJpweAv2mMvgWs9gZayzNDFze3eS",
  "key25": "2f5iHogGa3MaYQyKYQva1XdvUytv81PoTmCnSg1mfeEvHkES7T2tz1KFo7xQTaD14eAtJxk5G9Wp6tdNPdNdNGAN",
  "key26": "QHsjjz7z364EtDJacGkU7Ye2QxZ7UCNyKDgiP77nFJ9bUAp426jWc8Ce4NJvjTfAjZJymvyH366RnjWZNWhScXF",
  "key27": "w4LwuN3cobRgbE4LXnT9UoJmwtC2fmDwrKCifhiTuTrB83i6HsyNdE1A7T8nvvw7xXQb61p8jLpNw36xxniF9ZV",
  "key28": "2Mdic9oBcwRecmKhSmNYf2oerNwJ6ovX2WnyYveoMCsJEA3rCa7NzxAnVAiQz7ca32eSrM1EqPmdGgzvk2kp8S1u",
  "key29": "3rNsQYysMdWvPAaV3x28SeUgR1wjU2wPQjUE3kPsXM2f7y4tVrnstTy1UXWyUsoQfZDS951jB44qYJdBghZePqou",
  "key30": "4ZUhpZHiYyYok78yzKucYoybPy7acDNBa6jrgJk1z5a9LyfMbJMHq7XMJTcSbykwYZGC2NLzhb9T416rL69MEf3G",
  "key31": "4rrH6R4LVTZC9vzfh1grq94YMofs2ausfe5nwPj5g8qS9HcmarVVPzhLcReEb6KEZYXftpvUZTgwNfWgbTbpqp26",
  "key32": "2SikLgAUKhwB1JUPiCrw6A54SG7Q6KkCX3ihgDb1kAyA8uxDVqRLE1xULPTkABxfEdp5JGqo4zWcPH51fjXx7ybK",
  "key33": "66SzBYiXAgtCtJ1di9n4GZY5dW96d8QnHCKvz4bd3biV2eSabTFtutfpgeEoPhMBRB2YskumymsUjNCSaoPdDawn",
  "key34": "5vB8PS891tdvU7FaLCasLvweNcnexVvkHficKXDjFyCyaNSnvi8VnuuqKT8B8nQWnyTvwQAfWSn51FWubyPrCged",
  "key35": "5ekNKAWRucoZWzzwRcdEMNSRevMJRrn5egtriekv65A8AZ9MrGcuMMcvYUbvKyWpvJZuPLyGoiunRycfa5Le6pwS"
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
