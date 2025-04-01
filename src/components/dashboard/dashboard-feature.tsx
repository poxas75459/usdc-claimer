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
    "RkbwdMwH3MuNWEHYNNH8un5EaifitgP9p1cc7wZfAHMZ9iLrf2LNT3CRTRepodxfuzjuf6rSyqQb7HuiriqTRpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GjeJvxW7mgaor4WT8TEmcoPwC87uueGHXxLuCnny1e6U5iHJia6gEa91enteXAGs3QfoJZW2vtwDQTGZXQGZbu",
  "key1": "MgA1FxjCdQRAu7ZHfCjmPxiunnPE6h199AxP2ABnZSpKZnTDcoqhJUZ5HuNfAyqRcsKMbBFCHwnoot6j2LJ5QRv",
  "key2": "3TmL2ykkhFny2xq3LHksPbz3MLfPcpCgTapAXjDmpvj2FejMYSzuE8MoTva2cXu2Q4ztTFAhhL4G6YmByqZqTKvH",
  "key3": "4q3Y49rHiZSKvKnxkDEMegPXEsZumCaoCJr65HpHCJ4ZQp384pndqSGeXadcttp8bWJBzbpRL3uC2Kq9NHrXUzVu",
  "key4": "5LYJHD3DhiSs2Ecc54Jqontfp4Uf4hxPaK9F67TLSCsxxJecgwLqwK9CBvp1bFfrrPz6JaNfq1GTAUTmR4Vhxhj3",
  "key5": "2ZzggLgSL9pGDWWdQWayBdpCjVpkGsjYHRFuckk9enDL2QP5zFGXakm215EPpFaN9kVJvJrqhnYpHSJWSN3KW8na",
  "key6": "2F1dpraAsdQWK4d5KgvfVn4JC4e1VdTcNH4nAdT928Zp3n7kyMf7DEzwqT8dKyHURy8RssUAiatGbu67SZX6Jdkh",
  "key7": "2qrqG32VpQuKaT7JggcnmNFyV4YRrzr2t5MX3o3Hxby5JYXaR8AALTqRjEoRXmJSvGRbsUAM8t3tzJJsGA9ZfeiM",
  "key8": "XcNK4XkcZEVbUMRM4ZSbhsmEGGysU54p1ufqAQgWL86HokatDwK3PN4dcKJhq89nzWgnHF9rTFkCzkYYgG1tGGt",
  "key9": "2fSTBGta6QnNB3AYghdX5eMFQ3TCpYnuzNKo4bXzgN2MrvGiZ1Jw9VYBaD1uwUDzWESsXuQcA5NLrCWro7yY7ztJ",
  "key10": "4Jac73PAN6VnfnFZedfEp9U6fW3W6HPNxXtLXdSwCuD8yvGvpxtUnUzDbwgZABRT6WBtAyKKFDg1SxU5wG4QoWjL",
  "key11": "4TzmUHzHi1Wvb8BHFZgdaEvTNBodwpaPeaatGaHZU3ydXX9tVfTkhZAe5ggQRtXMyArYLsrzvq9WyMe8KzdNj85v",
  "key12": "5j3qhFC5mJv7W83kmWS3gGTXQpzRtyMQs79zroSKeydfHG2pX4Gi6gbHQ41r5GpN9K6f2njhHTpDpuLSsZqPJbzM",
  "key13": "3C6cxJbYwBJuuoYk3zvKgk39XcTcZVwtDckRKu1VaGM5UeQ2JHvgeQSFZwK2jXXramCkeKWHfSyRAjYNodpCJw9T",
  "key14": "5xvjRQBvKWTUjq9kq5G6AuzQueTRxB3qNLSKS6sBfApQSA6zLUmRcqjYdk64QLM1wnpEyVLRZjtCAcqb5nbzR3a7",
  "key15": "4yge9r8DNEixQXhyVvPCQGtU8Mw6TErDF3itsnzj8E8Pwgv9NZ2R9M6HkG6MPRde15gk92n6gzjqm1iG7scQ6aRo",
  "key16": "2Zy8top17mQSeBw8eBD8DWPxhA3AkUzEo8Pz5d9KZabgNEseNSFpJDTpkhkKXVRoFkqaEMhnjsZheNDFDkVdsVF4",
  "key17": "29iCND4G8Rchw2MrAT7Vfjd6TdiybAX7ab28wgfZy7UEEJot525jVViKGxwXwZYxUp6HbLdLnqjLWwfWaABi993n",
  "key18": "5eQsuNss4VZpYQQHjxGWXLcT2h13HqtuAjhBgP3ef21Z5TcyP4akycHFwMtFWzWoa6DdZH6U4chFfCX6U6q9hEJi",
  "key19": "YNVMvEiaF2zX7BkQDc58QNhThYvFDHDS2NU6C5zVeKmrmo9uQM7P9zQoKcV2pdJArbBmqkhBFtZkAkbyKuPRRzE",
  "key20": "4NrLKwHHewmduD4ybjkfSC7eDmKJnXY1TArQmEoF5qDqMps36xLQihVT7H4AdfBUFGc6rwSNcezSaN9JbK5sdrw9",
  "key21": "67dsgz8aPqgcrJCSETKQ1RjB3dWpPc5MQAuRw12K9XmKaiU7NfyNcFFLhtVVgNgmYTLk6d2WfBbrjtuBv44yAMJC",
  "key22": "2k3hhW8aWuNAHVhKHpqfFPZRJZRmin2KTb2U6nBPiwu96nqAB8fGgdEoxsJXuN6L8Jcqn1nFa3RaMu1yWVWEo2H",
  "key23": "66E8bX4cYdcgeHvVWMzqzKYjqwEV23yi7yUAN4vs4zwybfLwPt2LDSy5NctSMY8mk5sHeZ896YxzWZFnHVp85PSu",
  "key24": "4TNHtXGsEoVbomBLyaWBeXdai8vkuBWC2EoYybFvGU1exn5FCuuuZRNK6dUstdED7WRZ8x6H1rNy3W5aQ5RBM1MF",
  "key25": "4JkHrnApuxgd3A2qJbHB5C5fxx3wUf1m7S4QkyqDQLpZDrqhbjNDXYCGyBDuyFbDSWz5umscXWTPcy66M1GCf5UV",
  "key26": "2y5Us77x2oQwBjF8vydHgq9qggHnYZbJstmY4wbvzspk6hsmWq7P7XTQqBkwwdem4toXtPEGJKYM8WggmQkn7Um3",
  "key27": "2MjCXvQ5fikovDZZWFNMt4kWRv6RBVFXm8BXeyRMWnDvdL5TQQDSuXdZdhJw9hxq8ugfJxWnBzrk8YnZkGRySBaD",
  "key28": "3VhAoXuH9rykdxomsr3euYQ5ua9W7LugYaGiiF3JXvtkcuM1SnyaxgtZixYxRp9cxS787Xy25RuPYyNxLMeWgBYA",
  "key29": "5jXhpiYAZuBzxEw2P1dZGYCUJijSV89qESezwUdJDgPnDhBV9nvMmTVy3qbRvS9sBMWwiReFNP8HnnjYg2MeQyJ6",
  "key30": "2SwiWHGw4qmHX2pDZxJsBnWfYFZMCYYjQbatUi7asshHuBav1VVRV86sgLd1HtFuBzmV7XEuAKgD4PUMvSMFy7pM",
  "key31": "35CtYRXXyo2nR5TuevYZGWC3FQufnzVb5DJ2LqWQsiBQDS7ABngsbmRr7yQFgREwyHytHDKRzWnWDBjQeKc9AZbG",
  "key32": "5Uhf2uJHo4c2g5xXD45hLvNfVqdhVputbyH42qSFFyDY2xtRWK2NJSgUMnL285FaHxcc1kEJ5ozSAz5vEvyczdDz",
  "key33": "38wJDQThCRKkT7aNa8hUHHRXiwY4uNM2egyEi2QCLQf6eujufMupQ1KpvzXVFdRcq5LLriBdp1AhPPz1BUuWPXb7",
  "key34": "AC7piXZjRoqSrf1swUDLCLeVkNRoip94QSHQ4L36y9Ubh5X1dL4s6PMibUDSBpbk84iNDgVN4AUWBgs72hjGRCj",
  "key35": "zX2JzH5SqHVv2iGo7z6RRLXTNNUPn4ikgYiW6Cj6MKb6GMDYyzUVtFob3pAr49P26jJosR4okDPLv7ZpQKtTUUJ",
  "key36": "54aqHxjVaJWCFJgTkNswYQ88qRvAv1cEC71wJVLShGdVHEQaKFmPkAYfajnxP8CHKahdx4qmVkZ7FDUTxJisDT75",
  "key37": "n2KaNd864yKAQNQpRUwv6GQyitDzSzu9EyYh19mZaD4ZCqzxLpXFm5oZGQwhz2XQSGRb1HEkgDuV7SmwgsbpyLS",
  "key38": "42eo2QASD6KfQMrwwPsbrfAi8teoQi3TrbwU1Rw6pk9w7iCa2ocWuEErnafKQxuFEdubav6sGTLBXxwPY2xoHssp",
  "key39": "3HCM7Mk4yY6u7wA3gmh3g6EAbo62XXkmwonRAZTkTNDR88u4WPuCSH4MHCQWGnmcdGK9j9ECHXCc633i5x4mfB5v",
  "key40": "4mf4vyGhpW1gNguRMo8YQzuJX2BLZKr1nVfWumbPWYnkuWLpDwpT4N5DSqxmWD8o5qiSPYNV65rB7EV8X3W7bj16",
  "key41": "3EMJRsWnjndAvpSPsuWBwdbxQZV5iSbhr4cMDheDPwzEaFzHLcWWB21NzUV9yFbzQLdt5DSbYVNDPWckpMsYKuKg",
  "key42": "2KDzWaRQ3n2okq7w4kSr4Cuvs9K6DXWdAzTpMkpTHjoweSXydEr4nBfdv47YEjrDaAage451vrwACqhP59THPZbV",
  "key43": "38qHWJLTByBFNW7svm7xxFHJrh4pAW8epuzjh36MmZ2XgYFpjo4KVFzmvxw3d2iaffd6zf1pN4r46HRB5WjRahwV",
  "key44": "2YNF4FbTkhAHb66ULpVdGRNZjkQnQ3HnbBQsDkvixQ7rAeBpiqHZM2z2zuXazu4713XNyhaSq7mWqb7w5qFbyNo6",
  "key45": "fmQVnnCc6ba9S9mwxytptgBwSTFjHtHG2cqCMkjs3QN6s9aywL7DmUsiNznZ1GShqSdXj3K83EkTAdP9Wy3TTSa",
  "key46": "42ZAwgm4KB9hjkqcBKUKq7R2qDDiVGoHb3xHEx5YqdXWqvhk1zTybrjMe3oBjSEQwTeYqQY7XFwphnhm2Dg2thk2",
  "key47": "22aha4kjDMRNWkEoH3ahFghQ2WgGeZnvwHav7R6vx4vThxKdpuzDwUqRpHXaGmqhxmQXYdQLnPAfAcPf6PQWw1YB",
  "key48": "2331CyJwDmBgDZds2LXubn3pQgKB8sZdGTnieJhscSRt8s4mmbEW243JqeENdDPfTtYfh5wH8YANCNfxHsSTW7EA"
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
