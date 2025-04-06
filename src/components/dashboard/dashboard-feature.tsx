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
    "3MUpf3ZM83QsPjp6RkJWD1FTxkHkmYW7qVM1irFDpkJM1T5R2XXUZ8ddyDueWbzwwSruAWcDoFtC5V7VtqGpguL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PraA77ZWigjUAkaAcuYGnTRcNiPSaRFwrdwqPMsS5jPmiaNCckiKxMA1H8BKe35vnekzHGbkqB2gMkVXLcZzngM",
  "key1": "5et3db13ptMwaT9L6UG7G2zkkUPCCVDfTdm6CgjAR6cQNz8kFLgsfi4oftpnvuorhzFHzFyVgZBFsdXVE24xFT8P",
  "key2": "2NCfTiG186VtqBPVBzfn4i2FU66UnoLXfhhsyha82YtB7Kwaqn9i3UF4ZduvKd3xR1CWPTn4scC2ctop5bWEhkUW",
  "key3": "3rXATcH9sAeWKrdcoWBPcHQZMUc9k6fULqqMqo6rBsazkkCiJAopAQTQtemR5y2CbLgoWjv2khHAzaiphWmGKUJu",
  "key4": "zM8vRau1HFwnPyZVeke8ywhhWmS7Xas5v6SK4F6q18iY3yLTn4s42sJn8rSD7chhnsxgjNntu6T6BtTC4hh2ygM",
  "key5": "35RHQKXdXZDv5bckQ3FPfyFugykP8qr6tbJBc8Y3np4pw6KWa73rzUgRzkCWDCAbx1gcNiZMZy89mKru1xdczGtn",
  "key6": "2qVfdvjoFb5oQvn6S4FhxeZKFtnpcJt2afn1g8QzJMRzFYqeSqxDiEyPB76oZAvCGmENwUSJDHt3mEX7A8XHCJMZ",
  "key7": "Bi1naduzqe27SdYoyDYfZ9bFahXgjFQySrJNMNhF4mZDMKwKZhPJJY1N5K6J4vzEiSkz3mxUtTuFKmfzvhxsLr7",
  "key8": "2LFhYtSs2BFN7rmsksS4YeEwYjMTxZf9mpNgRTVy3HtAQsmZenP43KkwgwHcL9hY5H71jLxDyzDXFJeeZcHMdx7u",
  "key9": "5t9UdY2Vzz43JXDq3tkjCv4FWKum1YAFBAxsyJQvyuju4p9hCpwMryahtsNquzqc16mGPfxH2EvPDAKXrXfAbDX7",
  "key10": "4HoNpvuoYPYdGVw7yQzbs6YU9oCm5im8UJWWpZKt6849wro47YUmRenawg3awBMnMBHHe8hE3isknZ9cnUj4Hi2Z",
  "key11": "3FqgjxaNGt4uYbJnCbbFUSprWFEXSZ5fPvJFAaKBm3GTbpMW2eSVP5dpNjM3gcnBfbz5NHhnCc9V9RLCsjdr1pCo",
  "key12": "5TQ45rsbck1hDLtDKAZcLRrmumrLXZwEdVMrmPM3PwowJX846Ef1aER2tRx2eBRy55QhRNGwJMCwF4WYC634J3kH",
  "key13": "26mAmbFBJKKFvgMsK5XPdkW2EuF7ofmQn1aKhkFoAH8puU8BegBrKBhehp12Cg9PWYS3cvmCizEPKbmTTjT7Rr9o",
  "key14": "4wfspZZcZZLXMn7JH6hjLhXHyS6zek8BNADQTXnnv3SGRq5gk17e2f4cB4fUqqKdz2GSfNVZKqwHwQc9VgdRk1tK",
  "key15": "4udRhEJtnvGiogZUJn58YCKiJSvRiNHawA4oM2XWHuKYhkV4tid9N1B2PiPEDQEeQRzkNGjoL8JURbqTwBkUFVAt",
  "key16": "2PACHdjSX5GeVm3ZzN5RXVJ8783z71zoiwgng6voZuptrQS9oAfuNuU1fM6UwK9XJq3FQS1Bbdb1NTSiSPL6vHkJ",
  "key17": "3uYtQnfMGMr25DAhHWoNjawCcDkYbroJ5jGjqVn6jcbeR5K6kzF3nrPVAGdFyhaDkYnm5oKtnFQf7eYGdVAq6RRN",
  "key18": "61R4TYMgj6revc3XEysehUMY47rH6oqC72QUQxDu2y3BRXBVQqSUsACRwM7ao84dJ5Yb9iCR5Y2hCcza7GcBDgqd",
  "key19": "34wg9g348qQb5KnoGHMXD6hAKvRnaP5Gt6kPj4Y9pgK4nBg9uVXfRMvqrCQ4xPUg562qvKY2gmDLmvwmNpieScz1",
  "key20": "2VzfDR5uy3REtGAYNfttb4nCRPUBiAXPVYWsmSZ8uTn26aKQqRVvnKR1F4gxdztpWGSrrhvjf7DcQUNaLg52TK5W",
  "key21": "4q4chMTAyLSG4BSKa51EPPZSG4mFm8Qqk1pKN7LwEFDwMnYwXUh3PX2ZzfaAG3QvEUePRCJjzg1ijhwhRweDz3LE",
  "key22": "3mELh213buuJLy4fHGMSgSW9LdKTwTmsVgoGBetvN7A2kVSLQHYob2KtpqSE2wcV3v2oVcMFUkg3rZ8A6otmqWwu",
  "key23": "21edHufuap1tXH9t2rmKB2CqBEHRNFv2mcWMj7HDkBrjvroheLoVrjFCFe5jYqYKLTAKJZN1mnDiUd1jRjyUMk2c",
  "key24": "5TXvu4fnntpcubRSCzQxe4e1Nd6yW58aFqvKRP9GL62KeiXGmCWpe3n6EcUNc4eitr8Eyj5NufZCdAZbkPsN3KrY",
  "key25": "5AYKGDMogVvubC2J4MVQUuLYihNGvLrqFJbJVyBkhtgvXXoLbTbXb3GmcqMKGqY7ueVNc9jRFqRGLQgwFUwVQmLk",
  "key26": "CLJnGYXgm91m5D2Jo4hmMwKJxNwXgJUBs1EQEw6iQoTs2wMoEL5a4MuFxABAubHvVc6XHRZcuRkCyUnHW86siLo",
  "key27": "5coVB8Gx4vgKUq7tnzCW84saiE98xjX1CpFSHtW8U9BgM6sRYLu3kBksZqKZiFxe72DzoP6GHPtVzm2iEX9ntAZ",
  "key28": "24MzkDrxvR7jbRo5yyfYgzUsCoamheXjRKa5NNN7ozADmYPqTKxUW3hYwPRoxN54kK25hczDcP7qcBEjTtZpeYWq",
  "key29": "4VyKm3MGLepcJfqVfPvfsqJWLkS1zQp53TM1GMhVPg1xHK1GJUfPKU6mgSU8Rk1Jx3LTdwqgFUM7eDGew68RuC3u",
  "key30": "5SvxeKJonVejURnyAkUJMFzyJeUsZanQJoRrPRGotATdqqMnzjC7B5SkoR5E5QjpXZtqjZRtv42NUUj3yEmXey3p",
  "key31": "49WTkDFAW6vV4b5ZB81zuhknvdwyeSpbiHGZVY4BUSdWtY3sWNobVAjHfHCXTwkTzJ8B7qm2nyskinS8GUE7KtNw",
  "key32": "3PN9RX865UmMLQWETuXznExKS85L3GAkNFUX4ig5aw5QbtXmzbbafHfh7eao57xUCETrhofbf2K75nYC83MgZaKK",
  "key33": "3Bs71iTq6vuYkL4m13yJE6SNHydBeVhzYc2ikLvGVom1qHoPLM88nVbE5ycSMFnYCkM3ne6NXAPNCc2oC6CCM4W8",
  "key34": "36zY43dyBaa1J4NyQtqMdLB1VvGXgEMetMe8rqwBMemv8cBf1fYyF72SiybJExPJQg2zr63Ad9Xktpmy3Akyf7Mi",
  "key35": "yPogG6dyyGTPMgHQGYbiRnn8DeWJ5DRVv2fYKdDtNhk7i4ajufbbzitKf57hTGnuk2e35uj7uPe9aY8VznJBuAm",
  "key36": "xWXAv5DU2Fkfjp7VZod6LMrDxT58yE6iR6cmKKUiWhayp2PKR2uQWjQmjtbrcCfAyfknaGBnSbECa5qqy7NXbhv",
  "key37": "5nhLTBFt6NNUH7o9b5fXNeeio732tvWVBXpYMaMoXwpR7CNwRs2Yex1iH22i39ruT75QN4D6TKXdkMXrvzMh5Ko1"
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
