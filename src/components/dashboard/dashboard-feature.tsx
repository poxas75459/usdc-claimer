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
    "4ejVwzj6uiT28RBDJuA7B7YSoQhmszpMbXRkHH6zMsb6YPHL3hBzEA52A4xqRuZgWjRibSNpjcJMWq7JBwERJqSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ppFqQLnYuqYSdcxPAWUran4NSUu56KuyPhBSEWNjYHro9Z7e2T9TR5MGwMso9CodnXZcFwDXAd2CgFtshjQ8q8V",
  "key1": "43UVthSsvVJU7oSdc3AFBKm1PYUTudA1686Q2H11b6XVXokQ1D76bjnmFv3Aenpk6d5L8AzgikvzGJAmGjEvjv2i",
  "key2": "eFS23cHtyabPvxBnRGWmzQtUjdrq3cJfebkr9gt5qTM2wCCyrg6JiMAqPcEPVH6PrZKVdBLDJ2r8rcqJdAcK1K3",
  "key3": "4SKx7BTDj8Wc4wwWeYwuoaZHuoyJpnaSKDA245VoNMdxJqCwpfF6nG4hq1pRFNetDSusT4xDb2GPqoSXJ1HzcBAD",
  "key4": "5zvM732Z3RG6spdy5PYkSi31pLf1xniiZCVyk9SFZwLmPy98qqfGG8BMk55ohsA1z3TscgpcSRGjLdmNBHFUVwjN",
  "key5": "5sBTkSeiH8d25k2F5AzF1dZv3k1Frj5fGZw1EJKQFpKxUuX3t4hUQXPfLmAFJMMMqHzJ8ZETq7NM3oRT3xm97iYi",
  "key6": "QjGVnPYcrdbd3XGQVzWNv7TPf5VmUQg27eroCnpk56aC3SMNMzYt2misLv6QUwByCYjwR7iW81s7JzfaSYvsRey",
  "key7": "5A2HoD2qJ9vvpjM89FRzt1WgV2Uxpy2wxu5fL2jZnDe4rYnLBESLyUvZecAjHAxFsbAwpnJkuJiV5u7wQYA5izgh",
  "key8": "wuvdJDU6PtMprfzZsZLNzhnyw8JBSeoEy6HksNz7S39SoSPNuTLnwj2zpraDoLegbt6sN1GhmcRmSypFMJiJgdb",
  "key9": "5He5fmURVSW5s4kc52DjM89Jq49sVyErDmwJ1ogeDBxRA8kpQHWpjwYSb2yqsVaa3cMMt1TqKVjBdHjyYS1oWwfp",
  "key10": "5w8hUu4jUYuxfH4DGRYr3Nij69ipCeNmJkjrEbasBjz92VvVZYwSCSZ5xVZyxnZGjFvEd7JWeKmPL6pVspeas4b4",
  "key11": "2BPRF8vYmArGTiaS4knjH4KVX9TY3rstW79CzLQiC43ZrWLCGzsg5DJjoKpYpf5bqBCiutGNhRewUsn8tnHN7qdA",
  "key12": "uWvtT25cG7twvqLs1w1GnWDKpEiQN3SFroBYqD1cHaz4BGSK8kDi3EJi1A7kkBB8LUED5CYx55QVAts3BcfiFHi",
  "key13": "29eh5BVbrSNLPFg8ZVh7LaeWGzcshJR51v1wty7X11JHzbEB2oD1trgk3WMXJGQXBcTKPDX1ZTMzyYjDPPTHSuZu",
  "key14": "46WqcYBuuQWtHHQ3b4TBtWDwWKBuZe6v9DSFpDdSzA26YWbxvGiHXB32yH46DFrhJsbhDAWHxYgDS3So3QusyQur",
  "key15": "HdQRRNyrf4YuFpr7XbzYgjdw4BEbM86u6T1Xte9Hb5YtGYQVHKd2F7H84dkrwwDY9CiK2QsZ5W1f2Kzo9118uB1",
  "key16": "47vYx3Msr8uSUgutLmHnjVBsebW98c6BbeUK9mZtoWHE165CwFnm2uaD2pAR6QK4os9N96aYpJ8z5xPpX24J7cEG",
  "key17": "3oEWNa3mqoqEZ8oAKnWWCRWJ1wna5kn3yT6eMN9FkaHT7bLagZRznaAcW5feXgwwR3outGo6caWG3hR1JSkPT6s6",
  "key18": "2hLfFN8fhGq3QFxZWsdyJ7eHJxcZr997GW6TqC6W5AwuVV4xtvvNuLEKAzJv2omJi5V3s6P5tbtncBPdU7WMdxGP",
  "key19": "5mogmPgHmVQyrDhopYh4NHTR4pXMZhi6FdFkp7KUzbg3MjGzJu22EKbfUWnL8zajHsTo3v73EBHhQjLpTheLqb4",
  "key20": "5GYUjFwk2HyheUagqtWYjNY243njnSrsQEnVij66AJmMHeAeVmQmpwKGD4hjbGLPujrxoSN5JVxRFxtpxPn2bBCQ",
  "key21": "4r281kfevNTDKEjLY7uYV327ce1RbrpSjcHEUi6HhBzGedTgetu1GtUwgAPrFN1kioaMtJNBqvmg3f6dtS5Qf3p3",
  "key22": "pg61SRDXmRwqFsdwa3BUmjALPARVwjEPLgT8gcGAVArFxsxceuka8heHZHSLyu6jCQ9bfX4ifXj76b7zmtVsHke",
  "key23": "inB8EPjdvtTnfHsLJCmp1nAtAP2etAnMM8F2kdMDEHNCHZGaErgA18VS6DxWcpmdztxqJvN8Lmx6BZmpNZPYx5j",
  "key24": "47UNvK3D6QKDNSa1hworKRjv9c6ZabNBHHitmCFiFKd77DmhFQibYRgRoGzuxrMnoEEZa3EFrhPc4TmRg8VGPctA",
  "key25": "5X6sS3VTAp1cS3KN8Uy9YKuSZGgCWauEQdoren1mPYi4GTmjqqHEp7yyPPsgeKLVGeSvVthATESWfRBzjR37STkX",
  "key26": "2yAcgvKYMCJWCQvFxyKBQvJxLDAVu5UWBDsEfTvVyqfTnnsPNKR8dqmNGYrkUKhbyM8XBgAfsasRr9dCpZnVteRe",
  "key27": "3Pn3ud2PznkV7L5wkYqN1azYSQyaV7L8prhmwzLeFpvR71KgKMTQhqNKipAae6BmpY7Vp3TWTR9mWY7tgX6LVFA3",
  "key28": "2bmmZqLR9xyRfETddjJdSfXzjUVG68sd7AWm9XqZfwMet1Yxun3JY6bmXWkqU3SJXvqEPvYjCKBYW4gQMHifBHjp",
  "key29": "3xnu5sCd1AvuzHansH996Cx6NrQ4MrY4X7TArSq1HneCZMz9ND4KU737HLn4ZSPLZTrDkut8FqZCVg4aDRibwZaW",
  "key30": "2ZXZhRvR2mJRCGvPjm6DgDUVbSGGw9DLF8f8qpPoeka77mG2ktxtyAVQ6pAfwZdkSBxq9XCo4z8XswjnG9cv5Q52",
  "key31": "Aiyim3GesAcjGZdJmZp32htCjedLrucNV3q55P4LPmkSny5SVMt8oCzkH6yfBdPpqEM7oWWAwr8pcyR3mQsbSRb",
  "key32": "4tRhjK7wvx3yQz42fRRZutW6zseKitbRYJoDAqwjC2MKypNWj8xCHHanJCNvEcG1d3euScmjA7NBDe8FnsYbVRft",
  "key33": "W2jXPJtQFMcwuBSTdQiE733FavosJmnDVeDe5EYxZHFTUPvp3RsoXrYW1yQ5QjruYXRrZRtavEDjZUfB7res99o",
  "key34": "4KkTbLGcdHdc5xPDeJtqgAQSn8Sbtat2ujyGhPwnJRWH2YkYzLctXEA3zjeAM6mKthhrLpFS5ds5VLz7p6ET9d3t",
  "key35": "2GkazZRifm5iSDXs95HdWirRG2LxvTviBLd2AEFjiJTNU8s7JQYGHX9yyjYSUoEobAxrwkQkeBM227H7Mvs2kyzN",
  "key36": "2YojZf3ge8LD3kiLeuqERGvnoVL1cZ8zjhUBymRnc2b5445rNzV7GTKksgd5UT1Y4p2ptCzmXFdqhXQMifnqrwSq",
  "key37": "2avVTRnSKnydg3v8gpfoc3hC6RVAiz6RpBjAxhH2bVVRcpiDb74y4nahjTEYiVmr7Nd6wdPPDghNaDcvfeUMXW2t",
  "key38": "k9AHytiEUYjU36mDCrCJoAVHbtsbMcYCkntbUAJG5Dk6DDAhFxzpsEChjzjidmw3fA5W8i3eYZ1HC1DebEV139Y",
  "key39": "3GDNQ3MaYtXKPfaGd6VcXrKEjXkPNF7QRmcYsgJubwXwrx438PshZ1kdULxHYoFtj8AVqaLRwNtxY4ySQNGV3Nq",
  "key40": "4aXiVGmy6E9wsWwRC3kjEiEXJSoP4mSytTh3gjraE8z37XnZb9K42rRZRxL4jpi1dwA54J7WGbbDqCxHt57MiZCj",
  "key41": "4fZ67JvHpoxN85MtAVfqTApdmG8PTkPpAV3WFfijWy4qSPNW7JoGwMnu3E8wcBWG9PpnTrPbjFZU1BkbUAtkQDVz",
  "key42": "2tT6MbHmvG6ML52Fz4gjb7Je4gaiYHygYM6EuxsSoBBQrEhEkTWWNm1QoNWgzbkcT37BhKZcdPtbJJY4Q9MJfbky",
  "key43": "3SsrNdyZdMK1Ew75r3fTi9gJx1o5qUEo3Ujnc2GS7BBgd8mbvheZEMFDBdzmJnetMdQ5evFj5EaPRor5WRxnSDT5"
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
