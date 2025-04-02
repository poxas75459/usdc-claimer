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
    "42NukR4dqXMc7HrKAFenpcsoDUEicvZTCBux2VEc7QWdsAj4ncQSLN6FrMUCQHWWsY8vf9b3f1QX1xr5XxTpU8fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6JirA1cmwmXZ58gV6cMtVq9dcaJry6btb7A88kTJ1kbgSNHaRd3aeemedwCzPoM2ptnvHbuECu24nQsjxpXfuiK",
  "key1": "3mhaARq6AeJiCBHoU7DPoSepTw48qZ1KqQJimB1HtYnkFdXxzNbHCPNtdqvXyJiTw53WXbpfPdJBiRheytuP2ee1",
  "key2": "3zdSjjNW3WQsb2bd62dpHAZba9BZugpfyz1fmVjLL9489k2b4VkzoHddub6qKVgnAcL4i5hSzH57QcJrG4Xs3vu",
  "key3": "32Gpi8b7ebHvYVT2mA9XoGbhrqBMPQMUZ41jSZ71tKhnZshog4s3Wesnk6ZU5pFqoEh3BUUpBxcuVgfqXaoEmcSS",
  "key4": "4wps3oELHRYsEZYruWcEGbVfs7NM53FUUjvmV7ALi8FPW6M4xiMcpKs2vtkt7yLMB1GbzZQ6nq1eqYpgFdyehk9j",
  "key5": "5KyA2ryANj6BaBrVpcAfGKSUPmdbeKMjnSVw4phb1LLEkMLd7SQ3DHUSBQPqZvnbbWyeQN6uRGpgEv6G6xQR55LF",
  "key6": "4XWT2YtzeiNbXPsenhRaVPTo3QG8Ji55DBbTi8M7KKhCmuWR6dKGDBmhNZgpKBFPdkLGMsTKRN2iNSxvCqwUuzBd",
  "key7": "631BGutXpm8yJeVgKQdBg4hPU3bdWQ2EUTBpepoFjxwNhVrZiU385QUdjw7A3NsexHoa2NgeVNtzYxYcirkuVwDA",
  "key8": "ZU7kLUwXN3ZbmUUr1sy6KdphhZTZ7R9fWL5Evxo6VSKQM8QJQKmSUwseNA66L1zsJVzd3rbLrsrJTEgZ2Swakqt",
  "key9": "jw1P8T8Axy3qUYUcopRDTMscvHUQN1iKnKep1c2kTxNNgXTQQFQqvZ79AontjguVv62aGhT99Sgxk73BLkEucRd",
  "key10": "9YYP4D5QyrNMZWnEvE8HBcDGrRFyZipe7TwSAiHqLQRfT7hhos5mYymd4EZNiYYT11zB8B5QGFNymTgZvLqS1Yh",
  "key11": "3Zp4L81iMS2rPSfk2E6oighctEUrtW9Xd3cHRky3SD9Fy5cUJm3KE3Pc3UmbPTn78WY7GtajtaPE1rM8hfFsNmwA",
  "key12": "23BoAvBJ6Fu7TuVVSio9gE3HXyWRDEjBiyDpVmoHnTdRdvVLZNZ5Tv3dupST1QoVL8w21UC7D4birxSTRkquxYoN",
  "key13": "3S99yHerKMqaWRGuvF2GSK4dqmrgKDUq2Dkc2BRsJikFCB5iw8wPn2jWPNGdjBVRLQwRhqqp87zvR4rAwdiWq83m",
  "key14": "33aAi1Na5L7JpWQjWZ3J8YZYXdjpFZAHKnqmmRKv5DfjU6Fa8MKUFQQgcZ6VTaVEFn42rSymDwoPXU9yPJM2NCv1",
  "key15": "5pUr2CxauSdESXXrfzwBt6WyXtYsN3K23qr7hwF1hLCiZArFq6LLWCmDTZBMxZu75wj5nQKMMr3YUhi5ihNyLKmH",
  "key16": "2Ey8hc4V7uzacwAFf1oYm9T4Wpkgd5hcAt3Mn17mu7ypJp41gb4aZrya9n1S3w6EgY8duStLpHAZrwtXJhsVnTQj",
  "key17": "5hiWBTzp1gCaSV8e85dSfPd6i6LDMqqNM4PgjBsD6GQaULBREkiD1YGCe4LxJgfaARxtXXJ127m9e6DxzqaN9mJC",
  "key18": "4nLdUtecEoAuCBEyqV5nvAZ6e3AFh2W7CiAiJGBghGU2ciQWmC2t2NdVGqSQr82iGJEHgbsrmziSPGcukNmqLET3",
  "key19": "5DyDQkRnw6zZGCtqHgz14ucVD7xHrUimVkZfvo7RvcgkyN9APsiCpfnQ19CVc3dv396kieKCV4boREVHu4YK4bm5",
  "key20": "4ETdYyU3pbFRcVAQ18NjrovXmSuWR8sKaNuXe6zb3EsFuBMwznhfA6kDghazwKpaqAh4ZdY7uKnWPoV7zV5Uq4mH",
  "key21": "5qMQkPJqE2BcLvD5M1tbtbQQ1Dcp4Rv2sihUwoHJXNqGhe2Ls4yAo1mhpYuVystpSmLDHQ8b6J4aSEqJNMeWQbai",
  "key22": "3yJ1qeioK2bTSgJvweNw7zA3q45RqcfqaxibB24TczKZAn9SG7zTm7Hv4Yjf4y8My71LE8s4XJT9NQ5biaCYztgH",
  "key23": "Zh6XQ4ReZ5o3ZZf8fMktK5vABntCqGQWgU6mtiJpZDz1pRGe1ka41rhxcFYmMeoXkYSEArkLEjsnGiMDA9Z5hke",
  "key24": "o64AKgBejz3EHPbFjTrE8A1GWzLLwTR1uxKrnFqs6dzhyXN2h9ZYvxpD88YSYQ8GjRhwJqaiXgBKRuAdvgoDE2G",
  "key25": "drzsAaWNGJypzZMDxNTFMKSoMtyDq9XixoYHC8Ha9faQkdHyLQx1wei8tmrFNJ3Pxhoe4ZUD9ADcFjEp86aefUy",
  "key26": "3xd2sXNteY7sSefApdQcMzfru13s9MpGKXbm9t8DHp9EJRZNpgxHB4ekPfyT7y9bSsQ1JmEitC7frEKmMHAj4GU8",
  "key27": "5RseLn4qfHCZ4z8ManD6T492BrZcUVhVR5n4xa7CzZSYWaw7NFYN7Nv2uhST3qCqsAXD1nvyt8GxjznpBc8m9WR1",
  "key28": "HYQaeTSSBKttXerMiDRPHpGf63oTJMQV6ULJ8DGssaggcoTepnRRYzGhaL7rZ91LvRUxvXnCFA6GZnuQXa2CnVb",
  "key29": "3C3iWbaAPNGj3ZfUhBYKH41s7rNLV7os8Gv4ZhWZ18x9abYs5Pxwo853AdMqpfNa2w21gi5b6xzzCdf1dFQw1zKV",
  "key30": "5v8f774rn54dwgfsFq6JnwUDVoqvuyLGKgyRhb1x1N1o6m1qcLKYo81swRE1j2d8CWqqfNVMciMHxx6mTHQPpYz9",
  "key31": "5V96FrPjbsza4Z7pHeRgzrLW5eGCRif81kbmMt1eSrYnMGwDyJggLbV5gfyTvmoDSMoceibhiSKYYbxS3B8EGarq",
  "key32": "5uFXjdRWak2JbTfYFPbCt6xHHvmBS6Tz98dTiLhJMSPR9pM53jBGzo8JBDRcXSNCom9c7dVR4i3znqh5dSi71GnP",
  "key33": "5cgotL39jbxwoTnBKvkCz825oiRkz6VBDzhDsCDaUNaGSrZozBfNy41oVPzFaYe7NEeEEgLuM4gG7cvjiMjLbPGQ",
  "key34": "oPYupvDk1BRRzw62suVDx141F9XtQPSNb6Yuk4eHwGY3Y7EfX2CJYfcP4Lx8jbNmAwT3TPaD7UxNSqaPN95meUN",
  "key35": "75tmj7ACEF3yhqvsm14xecBpCTr5gCk8FCzumT3px3jLgybw4FbMnimdKYKDh1qnBq34KdWwf1urNabFYoji9cw",
  "key36": "XeRHueJo6Dw5CF7vyiZPzbyY9hVjKjBkUpKSwnmtxZU4ag8SA2RnFhdsYyBJCuGvoZNm7Y6dPL98fJn1ezkbHhQ",
  "key37": "4B3SaN9LBJJGA4h2wVzS8ZBmrZWQquQD3n4FhkiYGd1Pou9hHopiNiJEqNjeFY2XEWjWK9AvUbVqYHnQ52P2R7aW",
  "key38": "3zx84y3UkcqLegGC9mtc1hRWmiSX8fCX3kKfT5Zrekdqc9dxeEnjhS8s7RFy582YCeGsexvRvW8qYe7uZgn9Un96"
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
