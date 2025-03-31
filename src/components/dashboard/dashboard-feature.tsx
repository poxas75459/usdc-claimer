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
    "34cgQLfw3iyKhEpHAHid2TDSyMVXAN42hw8Ks4TQWnuTnM7bGzFhFsveymoqY4ANDrmSSNr8JK13gLHYyM1Li87W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwN3c44KrLK3wtYo965wvasM4kSkukYzULmrKgKtgNP9n6Ew6WnunUt4rJCRUuiVm6Me46UQ6xBqhJfWEE5izR3",
  "key1": "5N1sfWBRAToLSpG6ud2KwHKxQJazBJpbWJw2GVeuwer3DK8oB1LFvQGPRD4pbY5m9Cv3mioHucCP34nUg46Z2NZM",
  "key2": "5zXTf7g4fAw7CPmx7FvVtnmYiGrz6n8ptkKqCmaZt8uPxsMgVe2r4wx8CDTBag75MjzrhCc6SdabGnCVBmjErGuk",
  "key3": "KUeqQbgjjfDwxfffaKtuTHH3ZusAvovDoAbwMM9JL5Y8zYRVxDMHCJLCJCESR5ViZyCH9keUePg1M9HKu5WE1K2",
  "key4": "64qRcYRweyPBDKzUAEzSGmk5eFYFGmwe2GTeK74xz8Ab2iz3YajqDm1hyb2wNshZEA66pHBGDoiTFNeyFxrwqDrx",
  "key5": "2ybUhtPqmHMEyksRcprZK13sdvAtxPBG8xX7rB7uTJR58QjSqe1s21piPF3PJyUy1Pvnoh459b3T77kTbMN7KWPA",
  "key6": "2F6amBsR4itxpY46JsbX7DnKuQK2EXGETnYe9Uvb7nkhU7LvGB2fAYnHdoGc92yWr42Rp1EezskRcXNZJ5KMoGCT",
  "key7": "MHLHXQPz6JQquv6JJfAFVt99vfwv1MQSd2tC7xjvkerDPHTgLmB1MLzq6x9XEteWLLqmvJH15AdwJH4GQoFbAA2",
  "key8": "4eQo89LBATMqSQirgdywM35oc43iJFuTCfWcSZMfxaFPQ1Xz8TMcQKS8cYKg25y69mHYCm6WTNSJsiMM5vo2yYM5",
  "key9": "5hUmhgKrdSqoufw1ApH1QNgnqGgnm7NTUW85Au6pbJD4U738YdBRF22yJMfBzka43C33b19zqUTaPVFc2YiBgNg8",
  "key10": "3XqQrBmQ254S7SpZWL7NBDrKGUGHXnLTc5YmfuyNAibv8MpRGDt6xTf7Lf977XjqeogeRqXUhMgkNLzntakXdjbk",
  "key11": "4nq9XkKHsdiCeYdKr2LQDCQWNmDdeXgGVEci6CDe8c6u4kPUpL8CYVnVS1jiCE8CBb6QX86YH57DZWPUEE6FykV6",
  "key12": "4Wh9XkasUQFtPrGZ9VviGjXDCQc6v7zaBQRk9cKjoGrYNiw6ay2fMFsa61EP1eZjRi6ewhSS2HALDNPRUhbH9uap",
  "key13": "2CCziFFb78ActTUth4WTnRsLBbkbHTQ4mFobymacAkPZeesFisd1H4oB4vJ6QhQvSSR2H47PUHveuncM9raSQAaX",
  "key14": "5jr6NETB5px6mBBrApg69Fhwk7PpMquscygL4ZCvXiyDRJp7tQkNShwwBrTvZArsSRifJxSvTty37bhgsVSVGSb8",
  "key15": "4iT6UTyKLk9c8FEoRb8eUPGPixnuEDeHmxV812caprpMzQtKqiH64cce76jbyAM3NHBgW8E2hUUgqXPBVmfFVHVz",
  "key16": "228r9okbpafowba3wY2GDRRtJDeuexWi45tjwx6uyyJAKqeDf45zUWGABDSj71DgfM6QbVQ3TQCXMaMtuhEJ4ms8",
  "key17": "4VLktUTDAcXEmaDRuCqRfp6rMSGgKjzgT8ADdgfSPePpxDChUn7tnWh46Cr89AnN9krE8obTSaR7Qo6tMb7WT9Yw",
  "key18": "598QGgT33jp4FAQKaRzCuTqxoPJjGrU59efC6XEHhFPQQGf6JetvpP1Ve5yXC1fEwXrt6CkDVFtHFpCJJhunhmuh",
  "key19": "4U84bWKHPxkfxwpnWN3p5xkYywHGgZ3Qoxq6H5phhePnc3oGRkqUSTL91ekcmBoLw7BVYs8WLgaBWimQMRXr9W29",
  "key20": "5rSN3fzUnVGgk81F5MtFEJv6ocPWxUAJH7foqLYZx1AKQY5wLPu8dRVJ8ANXbGN9mWZ1j5HiBtFY4sSq6dkqC45",
  "key21": "4Yc6Z4Kcfo3nBxiSShFbGHyCi2C8T7jiRju9ww1eNE8xsskbfbvdFPZVWshy15z9sh4UKGq9u7rAvQEN5pYSQoct",
  "key22": "5weNUZD4bzHJSxcw3jDWRyf1yayT5KQUcScLkP7DmWFJQuam8yRLBTguBmx3vfzeG8TkqvF2eduYqgaaVfaogUdv",
  "key23": "a279otQ1ZYKmQfQMSebP14iZWsHqkVxtvAkVnkRs2tAWYn3cZGd8HbKTMA1J4yJCr9dUhdSiuc9YfWRJLkL5NsM",
  "key24": "kMxEywT3x5zNi6mAt6iCH7piEbTPPbsm6AkCZi9MjDSaYjoKf1kY5vuC6MKURhxQTrnLS5vGTHyQWs8UN9sSK3e",
  "key25": "vsE9odtyNYtrXHKesbDHYEYnpW5DgWtEVM3TtNJvGNpR9J4iiZnYKgMFiaecUBhTj8rmVkJqwYoxd8xZZeubkRL",
  "key26": "3Q5VshsVvJRaLEKiM3BD711RREwThanCJDFinQyaXbPEgi9JW9wKsAGRzAeh1WiXFFWDnSMtNV3h8ygpAUZm37Qt",
  "key27": "2SxUdxSPYspvydApJoonv5dVyZLX6nDV8L84TSz8tocaTLEis7dmawKsvvqCh9NHoaPNsj5L8otAuD8UeeNnhwbJ",
  "key28": "4nheyrKnCRmx8PVBok9Gn9MP64sBvnMEqq2biLPkCScuCUDKikTtiVjB4mXxVu1F1YtrsPMKA3p3bGRUQarx4DSf",
  "key29": "CwXrzQby5juoMFKvUUJ5AcAaYiLp4LnChZ7ao3zr963zHbuqc1esNmSMnpsYB5eZkzhkn5944pLnaLQt4dU5xwx",
  "key30": "3ojZyrDsgL11hW6SisbpKVjZi7zBpB3aU9vLi95S9hSMgPFTTcUMVyz5PbjjLNZpv77JiugTGpskwWrP9CaxA17c",
  "key31": "2eLUdKcCkfMQ13tFekZv4fJitn6ftm4E9uNBn9NcJERyFhX9wyVhrVUaXKYd2RpbDvbkb3tB7Ss8W2q87K5Ew4X7",
  "key32": "2Kf1iinNx4TfDt9bdDvz3o2DNWNFBVigMPQ7TEnGQQCC74rZATrAYc1fGxRG93WRQn7hYxVqAmqrbPwQsLjnJkPH",
  "key33": "2NpPe6UNpfyFv1NZ5tx97WkxJy9dJKEyn3j4TLuAJMCaxKzs62saUEeThQ9Rxo3737A5d4kCe4XHgwDL81u3zm4g",
  "key34": "3ef9oFepZ7zJBK45eH1pvMPzkcLjHVoGBhJytoPLuMybiGGhwhr7CMcWEYNi3a4x6uFhePkhFuC1FDh69FfQRNQa",
  "key35": "RzJaK3YFo7rFYeTcq1kTJdrTSWAiTtR5ud1rS96RwD1Psju9aHhJAAeNbidxWZLGzxEwXuro5YqCcvRRP8uhosX",
  "key36": "2d4fUz5bZRj89hMybrJmQkBz9gYysYxzFeaVshrjNSBe1TpnTjHEZXpmSELrPqdREc3jYbc2Y1yvidmgcxumEUVJ",
  "key37": "3uyfSBkVdPSLy4MXFyLEfPgxmoRbwnbPV1xrdJFaYmta7QekUDFRDdWJQDt3iqXpsTn3mACzb31ifgEa4sim7RJ1",
  "key38": "4MyAfdcHPmPrJ1xNyoaZLpmGDwXQ1zpZCNSkqwVvdtNgnYFnUkp9vfLp3SAbzeRxayhg9sg7nsPUFGQbPSN3sQxD",
  "key39": "4uLuT4dDriSvMmwFALcVDYR3QdRLTTuF9SYLmia7iCKGA2NM1Ge4P7xzZqWj8wvoSp6jND9r7i73UngqdexKww8E",
  "key40": "3AwM1KX2NYwEYqT41QMZepAXz3y73rRrxgnAhRxRiqB9uXhctL2yeRecoXDu4HVZqMQ65e2XEhqiWGsSyrD4QJWj",
  "key41": "3s4q9qvrmZL8muB6bBpFQqHAUmFMBqFwNTjivF42Jr5opqHjFpzxqv9aMZQyMAYqxnza7TrN6rAL8qhhwNNsyXEg",
  "key42": "5PmhZJs1fpTSAZxvF8KmKkxsWkibwuaNNmivAFoJMxK3cJmwBMPq9kYomJsXrnBKme62yvZDv81iiJmRwimpRF5Y"
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
