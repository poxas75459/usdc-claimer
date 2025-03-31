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
    "4qD3KgNHu16bduWYRXktCT2t6Q5TyTWcAxQna2VmxgVPZatCJDtw3acow6Mzm9VP9kP8vNQHcGNakgZdeD3AFKrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wGCZisW33N9EaTHHecbRZUFCDNZPnuDQEDtYLyb98uDndukYrrnboGP8MGC4wAGsrBh1McDEEdjBpX2NtjbrXA",
  "key1": "4qsQFhrf7tccW1o7rP91c1NAc6M56dPdZvHkPRkWxxC2Uz5WAs6V2L1qrGqUQNwUhg36TwYnzoPG8UhQ9LEKn26b",
  "key2": "SsR1C6JhpiM6SJfhtDEbhHKxCJFuYz9YkMdbyoV5HsbhorG9HLmnAyN4tMopV7UaZQcYQFS8S6HuC8rGVYKfGUc",
  "key3": "2UpX78LVybdrAQP1kNGL77hq3pAeNQXEHmjA2Ss8Q8qWFh3EEAJFZ81rTw7f2LXdWtE1TDwpp2Rqp626MLngfd1J",
  "key4": "4N3JqQ458BJv9PwvUwNTNb4BmER6dTT8921qqeoa8G28VKHAx21pt46BNPViwXqyjbLcCWpJj5RpRifymAbArgY7",
  "key5": "2V2ih3dhR3VR4xGN6i5rFHqia5AfxmC9pFsCCGR53FQeWHcZfx857UzayBPZNsdVfUwXaP4YbnDYSbrA4V3HBsnd",
  "key6": "2Bdmnm2Uii3EeEKPkYq1qvdvXi6Pw97kfpnd9VsAYfFpoahrJo872fDmGPuydRJdTzfVu3L4ZUCT5svq5kzVWk2w",
  "key7": "4PJgJppPHJCgYZy2DyYPJfcqtmMJtm7AKT9daZvcPbvooZQn9eKW7wbHv1PP3H7zV8JsbphLe7WFZyFoTLXDiaZr",
  "key8": "4XNabDqimDg9aSg1VmwxfYDJ4BfXcudDgftNNGS9Hg6PhSw7Xd6mkoQTfBqyG7jfwr61kgXvHJWi9T7DRSkncT7F",
  "key9": "4ysxFCnpqZ5vNMNbVctvmnUcE4KHx2Cu63n4QZrZfWx7jc69Rs4No9466ZsxwhiBs3RHna2RSNJZSu4dgP9ouGzB",
  "key10": "31fYNJCKYugKRjdN8hfxFJx4YS2aMRwARmkD2ibkebuS5TmYzRPWQ521LVLx79YPXpPsvBxa5HwNhxL6QCjv6JPa",
  "key11": "5DYiB29qLc2BWJ5nzAQ4Tty86P1r25gqCKrMR7zuHEg6nL2eX3X9eeDkVbpFJdWrvqmi8ZgK5nvj26vquuFfTL8q",
  "key12": "2dx3a9Ur5MEJY6kEMxVC7yV7FigP2WHKDMzZdK8zKtfs7wZJiUepSmmudJpP5mqgUytbXWo2XrpP3zpXGeJuEdGD",
  "key13": "2zwd2KrHvmeCkZxpe6V6pn59KgwDDzusn1ZcYwK2FqVT5MXGRMHDGAoTkGDZ7vzna3F2FhwrytiqJvZ7h9QBNkdn",
  "key14": "2ZiSYzEHMXVjd4Lm4SuSKm98ve81h1nkqBUpfccFVijaEXDCfpyKjMrNeFLmQ4yDccFRBPsvwdgWXiHGSDoZUDxf",
  "key15": "3tK46rdZvX5b7GujHy8Ukm4UNEeh46nyWsZU14URHnsDNdK5jWmCc2LsdBppgDcQhVUZbN9pZRpBvv4Uf8Uavnbn",
  "key16": "5NuCJdN5i9q7WdtU2KWSxv4n2F2FYvhbn15r1Hu2PFmW2chhwVU9TCABD3xgpFk21waGUQaMX8uVPNMQXUYJfLYs",
  "key17": "4QYsdxTthpZxGwAAPPB3SUSkTtQSt11HF61aftBpNKNfmaGN1GAPRfu6wxDwS7a5G7WB6ejPmwXBRHDHCzL5R3Cm",
  "key18": "3LSrPznKyAmRFFunyP2v7pQC4TjuQsS18b7zBd4bpMnF1guKi8Ud23m5QttwrFfwBGFZjHvVjoWnNo6rfb9L5iPc",
  "key19": "4h6ihXt3YkZ8WrgmJ6s4XEP71vUu2yXHhcumyjmrzEiuHtTjwvkH1zjXqgdiaWs1bvyjtBiRkaWZEfm6tn3V11bu",
  "key20": "crRPQSynGj6xq6BEushVnPyAseJE9Q5T52cpCvLpPqYLTEzRcMbN4CtQYqVjbLKR7wH1afTNSncW7PwZuLxMkFi",
  "key21": "242Vf41EQktSARLdxQUiG8htLVRV4xDfgByrzbKB9Qesjd1WEzHwBuvwBv7Aho4MxTDhzxG6pBQXKtPLk5c4M56U",
  "key22": "2qHcMAgtE4CmQXae8xqrP1EYiuss5wwRsPT7GTSiHNxirNiZcBjLCxrFASs71yHfauRustrnj3wwa67GNn9tUcu5",
  "key23": "3hWvLEtgNfLcGRAh2pYPQidoyJTqHP2ijZWoNFT8zYBQTh3r9Rj9MZBxUmLWxuiXnTZQdikTMLCLKSMfVmpgkFpB",
  "key24": "84MASEhS4F2T84y6n2qWqWqZUKEE3mr9Y13z5okjixnLjJuR78DPj8wJ94bJ2YDcw3jHtvduemKTUvqCVPpaktp",
  "key25": "4Ui4obvkypYVURGYNfwZfFgKC8hQYBZuVfdM3j7D79PbSJC6whPZxnJBpfMo8w831AYUHr9QHxSms4MegkpFApZS",
  "key26": "co8vkiW33YhVWacki1sBRKWbTY7fKGLEbBaA5FTfZwVw3PhUCfpRwngenpt88k4KSzBPJqKBGzzZpwXhYfCZMGM",
  "key27": "4kfma6KWeePBbAVCxR8BK7WkZzdgmNpg6CGCarTcYgPb5S2jpFQUV15kM9feoaRCXpxPVNu3QtZCi8oLtWTjfkRc",
  "key28": "5KdhB6ZAQxSHzK5oYZBAo68iRc2cQQumRee1FgSgbwZjzKpEERhc1r8AyUHDXf5oGtfqvk7UmxXSTVWL2q88rn4M",
  "key29": "47uTDaA8zsXx1SVMAuco6sDop4cKCbV8dFCA37jcoT8rUveqstFhbjtLj4Dr2rhNGYnPNrwJwC13T7kS9zmhmKdJ",
  "key30": "5cqUCiGqREa5Zbz9gDjSgXTx7U5B89rChdyDuyq7YCT81vxY98K4Jy9AJqWnRuHzPwi7pUdQ1beStvTVf3aP41W7",
  "key31": "3hQbX9nmgqUnDUAhAL1GNScwovQoxK3QTkGKczuemYQCejeSGr2xHcRBYBEJJVgYhZzpYmgPZYvz5z6vLgBoW9pk",
  "key32": "3AmK7fGjdFjMy4moWEJ6apkcbAqpKPwzZS9K9WQH1d7AbPbuKg2fmcTYHPreJcNY65Q9Xo6DNKPFZtUcsTwwWhcR",
  "key33": "5PRnDT1ExT5rALnBaowu45A2CHrT7rczsYwzRH4AZBBSsByuWQpLtx3y8qFQ1Fcb6JtAGuauLy1Hw4eHTXnM2Wyk",
  "key34": "3ueWf1fXJnamaThHUoZcvfaUGeGwSUZMpgEvNwnE4HSyikucVtg4rwBQs2HDx4oqsNraKDt9m4uC1nfnUgbEBVxL",
  "key35": "64kLxfcAUJ5XPcKqGCY7rgQweoJWxnQzmVzCD3aaRVhLQsciYakHTsMMdRftsZXACq7ECujZQNSig1nJKtWMLqSj",
  "key36": "48TEbpGtDJvVSX2CwFyBiTHR44WxnNZGHoskGnJz6GuvLsNjKiMpy689ef44rXkkHgCVC4mTySabSUpEP63oX2Zd",
  "key37": "5yrf8VjPEtEE8vpwos1cmZxGBZMYZseeTCZEx7BegHfLXxbpycuvm92h23Gkk9MVG3pSis1AQm4ddvKBCHBNP2gc",
  "key38": "2QESS4bsJDd1nmGRP5VGAKXfo2uMFr24bPwjMfw66NSPCQA8ntTNuGNRGJRGm7Ag464men9m4LKRfSMvgdQTPfvZ",
  "key39": "2wU29HrV6L4fu16LxeUhbSrnydviNeLqiZ3JJGBPGcRPDP8xnpPSCRCwSCkbCAwayAnN4RCfGGX7EbD1fCmzt9Z",
  "key40": "4PHrmvApkbAjmRksq1tFPAQNBQ7JS86xZT2948w1iamXL7LrBkGfcjnnhCPhyFiZTLjyWjwLEmcWXL2GVzjxRf9K",
  "key41": "31kqgDPAkjujHS6UtGRvM9hDETJ21YqzbWWaBU8bkp45qsxRkoD6uJqstYLgC5YCQoqmYdY4qtYDszs5UCE1BzJc",
  "key42": "4JvDjwuTeSEmdKCBGcKE3ogKgXEEHq2tadD9esDVFNP8vLpf5ixcFGsYfg23hKGrFFQiExqvNqAmSvyHJPFTWZK8",
  "key43": "4Cne9wbv8Kasq2SHexxFs6D9hPXKmVt1bCen6KopfDzPz99yjT4JySYUFLa848e55HzzDGuQ8FSUkUfqFWTaLnHh",
  "key44": "3JmVVYiDUsyMV1D774ERknHSfS9uEkHNuFqNqXJ18jrYH9JQDnXvNV9AkQHSjoccwqL83mSwZ1KyjUAhBjCzswGZ",
  "key45": "2heVBQCuZhdjCjg1L83iGZYcze7hCCpzpbL8kCDKgh8trdJA2HcsHtBAeb8rugQSaREVvrSNc5rJwc265DV9MQcW",
  "key46": "5vCDrTY1QPoEXirK3bKV3VgubaGZYBAd1sN44duhW9PhBRDB1orZFrx9VrggLHeYowXVTSgZZtyZzLsnpYRJ2dZG",
  "key47": "TLfFdLHW1Z7yKWCyPmzSiJH8C8Vwj85Y9QWVyL3dpn27DgZn4xeg9Aq5EEuDFPs8b7XKU4ZLyemwauMZwtx8CLK",
  "key48": "3MTP7oCYwxQRThzRqRvNcNKsp1U6vgboZqz8259r3rqJQVGP7C4nXwtyhUr4YAbytGGtH5WdwM5TTdvcbc8U4tie"
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
