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
    "3j51v9szfMBTKgETvPD4UHpdhLS6w61VBbVNAbywDdcgxX6saH4NfviYnYBKpLRCXPNC2wkcMjDRBjCorRwHe7q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vA9ZKPCti1UwyCn1Ydvz3374f4Y3qz3NxPVEdVJeriEvGv3cMnmss8ZQExAvffm7ggbq3LJN6W6jDapJheof1Pk",
  "key1": "5Yh62mGhPiJU2wnHkZdhLoUBqYsHXxEo1A7miRSKMTRJmVGXGLB99wjKyFrJTKZrGDtt99X2aL6CyadPWhgahtjs",
  "key2": "4Q3J5mX6EJBFsGXbwiBxqUnpm75TPPozxWjMgZY9vrgX5SsqQp7Y7z4WDDVMtA7L8sVR3d4B3Si6RQ9o6pEP9b9i",
  "key3": "42hB7evu85exYqTDJUUxjhTmoHrgmA2maTsrbW5JXWA9G72ygSFqJGRYRDpMtTbXpYgh9WxYHifk6yE7QUxCxdLs",
  "key4": "2erx94wxY1rTbQyxo14dyyWdWLgvTjuKZEWZpoAeSX4GuTDD6sqbdpdy9zUmbzKmWBgv1T4Ns7B6SXCwjKt3KGGJ",
  "key5": "YWAq5ioBznjJVcRZzzvHafwbPyQok9YD2XGzWbcPsyecUqmeEzTgLWy3tzSvieQAkex7EgHdiYLoZXoSwWroWhk",
  "key6": "2EggLrygkWqJaNWyKbKc42uMj1LmCchaTzHxWkeXgCpYu2TtqNyB5W5yS9FBFA2bk5Rw9EC28EWrWiT4z3psot2v",
  "key7": "nGxJUyDNjcWJggPp1URQGKNkEvTDZTFqGxQSjEFT9HVGqBqqLkr6E6fMa9Vpq8cdmS9FkY76XELkechA1Df6MSU",
  "key8": "4KB2kZyvKjT6qo3nRqBbqt4RKWv8FqHWY4P19UdG1WcM5756jtrawTUcCczXpi81hsd7WTeasYtgmhtycQQEyNFG",
  "key9": "4kyierQ9CYt5fRidayCuK5ey6Pcuu3mTsfzyZAEWB5TZeur2g7PvvJNMxcgCvwCKQofMsJrDoZzZFqgHUwVeY7m9",
  "key10": "g53mZr8x1dPhcoJeugsp82Ph9NzY7q218sQrm71F4XUnTBuSd5s6Fw2FdCXXHQ5ss7APNbFDV3DL3ZVcHjtuQHU",
  "key11": "3k6rn8Qp5Sx9n8GnWDssAzBsc6e3nr2xDmdbFULWcyf6E9LJtWncXPQcvwF5gZofnMcgXAKCY3ETkiKN514RwE92",
  "key12": "WNZQQT1oc3i4WepDV3gBct9AfRnFt5iY1BtjV6ugTs1wemdmDYewsCy9qaytqv9cfecfp8U36EGFXk7YrYnJfqS",
  "key13": "v7ampt7XXMGZx2uorafCaFujibjfna12FsBDDnP3YMiDwrasNFcavpgnUFZUn9RrgwgSn3ciy9HzzPhbpJKtYm2",
  "key14": "4KD9V9iHP1mWyE8wDoEqjR6y6wWVdGA3KdSXQJh5vQTi12igw2Zv2qfS6dLt3szUeTPkxpXMWnYS4YLkCU9fp25X",
  "key15": "3o2qQYqs5WEeDnwvV9N2ayAEbwiG1jjK6UDDML77vmhV6zhf4sKDconeo9VUxrpjUg7ugjjigJSegucgeFQ7q5Eu",
  "key16": "4JRnd2NWfZYuhjNLfTAsjhvbwYn5EFwZAxbi1KPU6WpgQtQxP5rwvDG5dHFJfhDhak4PB3ifvYGKQTkJGtL1iysj",
  "key17": "ZLNM6vggmrV1w6jyKGxbABLy9AywuvWkdbACE64R64pxMJtr3qig3rKFD24Zc1cNr8jRofeQxpTTu5aAp5eYY8d",
  "key18": "8saTxEX7e2bafUkqWoCb45AZjGmjtWVmF5exWH8qjdWoZ9deWDM3iYWJ9orVDEwiBrYFWqvdtZHenH9npyjtTzQ",
  "key19": "4wNGdFzoppHgbeY9Gf5nU282knncrhgFJxrMHeUB6QqMyhs8dxpxN6jAMNrM1vENe4oGt7GRhraCpwAxnGU3HAPX",
  "key20": "5fTiVWzP2hDp2DBHqvSGWa2RYRkyn2dvvZ7Zg9CNJfEUMuxZ9rRKKdFEPAmTVQ2iWvVxt2iskiKbf7QL55h8ZD69",
  "key21": "3dypswKwsKrjfBL8ovpKzHTdBdGWzdJVh7FanxbPzKBvWBQQum7dnYdWgYHbLKpmBJtmczNH17MNgA2fyaLBg3sP",
  "key22": "2e3Afbpne9FngHCPTqKg4Z8P9DyGe3aEhRs97MedEgQLw1orgFQbxEm7y2JLXN8B7iobdwFSb76MyXVVHBmLURYw",
  "key23": "4gkYe8QmtaHcqJCy6h5tk2ZhcaZf6knX4VtDrWWuWzxsiEb3WFHT2RDqCbYxajocko4eFXSiRvVPxivq3a4u237n",
  "key24": "3Hqzs2GkH4Lfhg7FJL67FawQDp4EGhpTokqDYKBitBhdDTTEHJCRUTUkmyPe4UCxWDo7D5S78KNXpNibdbZim8VD",
  "key25": "3ZYdYaNZdhbkxGHwU7QcAuwUmgvRFBXMP5Cf4ZFZBD3kxXatZggSe5QomNdY1HnWzZr1C4XRWKPjkEUBgWT28gSk",
  "key26": "5yKYjcciUbZTiYHHAw2ZeoZwxW1SDZ1pE1gSuUKeTgRbEn9SPSuMDK1kg8Yw5ZJc2BL83PdjqEZjwpcmeNhckKwA",
  "key27": "3qxzs9P8vJ6t7aUVvrnPf1yP2PmsHnAZy7BikTKhZMSTLnLxDbXnWMkGgkapJ45H9bN84GGCyv8UzaYD6vDKejzW",
  "key28": "KjPEkwXKf29XyRtjkqo5EswaTYFvKqhwU7v3SfmQYKWuBgL9tJFdP6T68Tkc5fW1YyYMYvFBq1YPbPoZHr7RYX7",
  "key29": "31fBEgdyagqAMHqU88oo13DvRTLCyUAbckhjMwpS5JMzHZHQERSQphd9iK6w3fwjmUE8Y5ei31zYDUqPoL2Qi3xm",
  "key30": "3oG9VeWqfivy3mojt4Epwpg611oDnpeda5yyT7G9bqRQyhwmiP4PtNUAC7LW6CWmTEHHo9FwBHx7JbXjiCLqdzYv",
  "key31": "cjwnmLUx8X95RxA6ESax9dDCQdb7QfuDPJSqn7UttfBEyqbTZCZiVRoLcGVjUpfHyshAhsPS1xPNa4Q2hHbb7e7",
  "key32": "3owszTMpst7sR4c8TuXrd1oYFWKf3N1437yui9XnteLGajVy8853yy7UEmByDq8vwBr1J9ShL6k84edBYMWxSiJF",
  "key33": "2jAquA3BGJUAJ6CDkLjSeHkHnVDhYi8EPcCKFa9Q7d5jzvSU2qNQVa6xBGboa8nhZYgGkk4krYCv7L68avfd8JQd",
  "key34": "4vqWZovkpvcrqe41bhzhMBLbWSjbmH12AUTzzkcXZMd3PdHSX69FhvUWebuxB9CsPHgYeAk5dBk4Yajh931D14E9",
  "key35": "3bRJxv7PAVnnvef985VtvESWWY4yZA77yBqSwW7LPazUXDpvKFmx4zBFJ4aFTzhXy3ic7KsnDnywZFd4j5BWJL5n",
  "key36": "aCuwbP9HkaUMH96xgxX2geqAW2CDW54cxjTRkojsdqHuytaqEHmw8txAXGd2VToEsmxmfYtoKBbYrshC6Doy52s",
  "key37": "2CTcMnEKu6TYhfCgcN6XZKmAxNpXyrRV8mAkP9CkENmtLiixKDrLCUcuEoBtgE55DEiK8FmyUYA1dbNSgbveTUW5",
  "key38": "5KabMWuhR7rgJwmuTjcegf2bVTC15Z1JUwLdRjsCLbbZm3gTwFgCKJ32wbDnbhSuxE8By7m4cBvymVVTnAdVQmby"
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
