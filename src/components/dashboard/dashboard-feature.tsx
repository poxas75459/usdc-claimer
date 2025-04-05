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
    "3pnFqeTTwmsajPAmQgoiqrBbCeKmKvaaTFLyqwdkb9YbLdD3GJSGyRsARtgq1nvPmBsW5WU3ceTQoSpfDKDCF5Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M2RY1fGhD4i5zQrCzhsKWtUFpMKETVne7AQojJLFjddCbWBdkQ6L3vHqNvvMAxuULznyGkZntVESjzaBYxm7Kjv",
  "key1": "3fsFtpJ7z5sV3yQaSC3N4duFuc7Bhfccvb7akwcgygSii9qYKutwTR9v6WZLppba9tNYyn5YMaqwURMs6bFqEPtF",
  "key2": "47p9ADUnve911P979YSSp914RK33PKb2z5PXhvy2Md1Wp4RCUGYfJpgfGtdoVLUgc5bexQY69tpdquEudvJChYif",
  "key3": "4tDboqdBZSiqeptFKuPHWHY2VD5u14gra67XPwLgkkzPHdoUMk8FprUTpmJWBqsBDfQ1XpbKPoG2g5yuaon2mSah",
  "key4": "49tBDNhRYMBEBtcaoZRWGSba4n9a8s5hmxyuJQBE9HwciYPVVL8mNVamA6WcSHsX5RKAMWJJNdcc99jcizipaJJE",
  "key5": "4h5rD7fF81bUCL5nLezNnvJPjw8P4NivuHgfsDdqzUGtLNpWwNHoXQBjb4Hcb9Qryn6jfsiqs3YWpHY5LQkdjtFp",
  "key6": "26MAwWcrLAUYpG4q4vVK8M8W7J3tSydV3zdbmCNNTBamgArWg5fzfXpTvR9zyvdP2cGfCLxBxpcabq11MZSxB7Nh",
  "key7": "2gM3ucRwErH4H8C8bnoq7PrnbWe89BQyMamani7DQKBnu14wCVDkKBnNGasskDx56WeT3ZMiJesEvhHHpCSHMWDz",
  "key8": "4LhRDEoVZRtwtiBTDVBG23TKQ5qshukmhMJxCTdoAXpF9N5836KtzqejRtAb5Ly1TLcMMkrHG1fueKvi69csSMkW",
  "key9": "4pJr9YDYcHdTePgWJnDM5iEnLEyAQ8WDHKeZsox6RtA8Bm7BjVpB6CmQxAPH5jaPUmSAHzR99q4iB3fW4UPKRY6m",
  "key10": "3722nasnSRxhdgYeZutu7HXwszD1z1dhoYjD8sAT5xhsVW1gtyd7c2PeVvPGxEEivaK8su2woq1XDpWn44sRMAGB",
  "key11": "4zBYSrGwN5tRFeGa3cJ8qHY3inEE3RY7K1TU7LTkCUri2C4jtWp4dtjqD5BR8n5xuW4pReQponRTMQ9jYc6b8Sn8",
  "key12": "Yb2Nm4zRNwAL3VFy4jeZZDunvpRg7m4RuGqA6J9q7DDwLt5Cy2Qs2RiLpCGGgaB8B8cgA25USAtAVyuV4Mkp2t5",
  "key13": "4Two6jXakY13zVjjsWSHaWWnZ1DZWKyqnz6ZiXworoZrVM8CB8YmAJDYfPbjRQTnEJWifHkSwwvL2FGrAUcrZQKT",
  "key14": "5HodVywG2k3W6YGoPawUQdWYAuUx9bZVLsSYszzJBD4oY73d4rdUFn45QDUfdrGrRtfJD1iZCUfudXdD7aQcf4f6",
  "key15": "44h7YLPL2RN4EZ8VZaH8mxebQ1HAM8bAnyRGpSoCL5NN2ZgdXPrYzhaZKRWqYog1S4MhginCWeCSp4YKp26a8bdn",
  "key16": "UNCi4AkkpdftKvrpfntsEt2aXmTzxKcEikQ9cUVUd9M9d1mt3i5Tjh5i2DKatQRLJqyZgyDiDdY6c7tHWYkSMRz",
  "key17": "4YUqMP25XXvpi44btHzUtTaAqP1oNvKsmSRp3ZZbBdhqxdbGwCWCpJM9uWkz6LW4Es1inY9uegweNc4ZiLQFH4fq",
  "key18": "3EPk3KqUJTjHyoCMQiddm7J5HYSTzqkpDXGT5ouAqZjK9RmZ5rukF2LgL4yDAkAGi6or6v84u2wqAngzgsVuBLkS",
  "key19": "38ASpJsXFDJWuEhG4MBpteskfSXzqiFJCCwDyvVVMfEVM6Umb8CjZQiMaEtRrRKByZ2Fgsh75VfphYJ3EihgTL6y",
  "key20": "2tuoza1cGFFzMco3WhtzAyDZhEocoRR35LEisR4EynDfrJSS9xLVx3gQUCy231XrgWFpQ4QoGM6edo8LQ4kUv58o",
  "key21": "4x8fCLhGkghaTLeK9RTryNden2DHDXoyZxpjNQTQi5FioFsxr3MzAPRmpPxrZn3tsedESuHXPPksH9MpCF63QYPt",
  "key22": "3Uvm853Nm6LzcNvZh1EchpsJRuBE7TbR6KkzjnM6t5weaoSiteby34k7W6srhb9wHhN65VhjHG5Bnd3KTe4dyScE",
  "key23": "Ae6G2t2EjnJp3oBKs3cgkuEX4Qtxi4aP5cMoigf24mRfJDQnnwkWRQ5C6QRheHffcFd57HJg1rmi88kXBVrGmMY",
  "key24": "5CAdpVJEprvHgPDXyi35hSEPCrUXq56AcYTcdUU8PYRQHiFovzQG65dEJSvzv4uHMSdfTgszja8QFirr3FpKZep9",
  "key25": "kPcaiZnUS5ntF4wQbwnj9YcrGiAWj2JhuSVGPUN4jcb6vjBu1wmW64kWiuiZiJ7w22BUyJ447KsSPRqKt1h48aT",
  "key26": "4tDbMwBgytZeRTcaEmmg32RDiawtSKiv3xsJUafT3yd7RRYvU9LC6Eek3j41oHbtDKS2MGd9fPvxeiHfA6JVrPZs",
  "key27": "4PeHnP2prSZrTcHqdqYxtoAS8FKfTuX8rA6KXpjZfLovyx2JjkiMH7mJNbzX44LGqoDZsTtLpYKnNU5tv6uc97RF",
  "key28": "36y7mRFdDySWhhQUJaArRXuJCj5kDipMYghfzY6xpaytq6jSVf3EFR1f1coBi8wva6bV2h2KMC4DwkKEu2vXAxLs",
  "key29": "2Le4yiGsUnArrthig4wdanc1yZNNhgXRze677L47metevVgpo7iMMdBESVEEaAeBSnGSaPQW9Tx2YeykHWjeuTDN",
  "key30": "3JmWQrDLVtQV1joyq5iAfGcfPXaqytp6ZBTJ6LeAddxy3J1aNeGhUCsvbV6zCNkbBBwu2DKSsWakWrxZDQNVAwGK",
  "key31": "3RmE6x7Wv2F8PZPmnc1wBEwrMwc8EbgqWsaTWFH9JXq12kvjEpqf4o5WAEXPifPijyK81ZsTQ59BSarguyTY8LR",
  "key32": "5X9toKfu3wqXtqpfCBvmBmdGhnMFE8UUqqyPmGrxejrsQGqtjEc46sJBzzzpryeUnYPF8tdsE46GQSey6rJxy6CJ",
  "key33": "3LY4GcrMdzJEWjP7ea3RS5tsNAeTbMQK4YH6es4L18i4X4N5WFw1aQtDkYvP2YXpzn6V3xWeY6r1ov2gTn1iax7y",
  "key34": "63tDCKCuBYF1m7dKg8WiyRTj9WJo1E4p4DgQ3LRt9SMAPRtV3Lc7BTXQtWiknMpyeU2d7wztLfRvfL8SwjWKGBZo",
  "key35": "4RWWd4FhNfUNr5xyJTdusTb9pRuTPdZjbzyT3wVDw5HWVZrAnhNCtUphdK67tyf4qw2NzPSrSezKv9hKXbZFWQ5v",
  "key36": "3arFhdA1TYw9WE4Wb9p8icMwv2D3cKL2chqFbW9UrEhcNAojtB7AMVMKSFEMG9p6uWehUmJcHrYTsdG3iDWXMgsM",
  "key37": "5PZM4q9gzQs5YeaKstjnLbQXeMHAMgvWdR3oyfu4UDuGYwHJPus61Jau2JeEYY9JSjQBKgcJfyvVEaJWtKPTF4ZS",
  "key38": "37BvCrPQwTmB3nkQFt51VVh7ZZTTTfjEPYJFMxbzRqXh5jEBYF13Mb3rJ7HL7LoSdfsnuSCqfegSZB92yDozH7m3",
  "key39": "WqWjn9X1VWWai7R9p3md7CUTYSkQbER9CU2Jm3LosnqWnfEKfEcwtXEtje8iocXNtiKS7EzHUaHVArx4WbSPxfJ",
  "key40": "5bnfNmyMDnUupFN7s57kkpZrDgUGyMiXRfWUn1mvePKK7VWmJdehYi9Ajcxt9JyDrS5mh9TBxoXF1jPPSCVhvjdK"
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
