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
    "3S7BKQGTifakaskF6M7AHiAp38AU3ahVP1upQViL1CGKxiee7joF8FEqUHouQ9W2cUdadNZ4ycZrHDWb4aVMoG9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyNxDCEGnjCEP94AhGyEVjWqZhogqZ2ZSJqq3WpTRp9P9842t3qax5ZvJYFqsp7nFga5XGVjJ9jQxykvimR85b4",
  "key1": "51ztpBwkDpSk92GxjeLxtvVoyB49SjNCU9vxY4WTnYsS2HwuKcTfZ7UwDiSBYQ1PBe8NgpwaV3hWrZwgCFmSC521",
  "key2": "4RniyYn91rE8RNnPX334N5i8bHFMDXz49XDowGv6WzKp3o5KRmqhq55cUu4Lt5C1H5bQQYgCU5GaB7NaSfXaGaEZ",
  "key3": "5RBTDRRuUpHGyjSQN7DeR3fdc52bzX49GUtJwb5YQxR54UEt6cUQKggW2SvYzpbVbjf1MqfKs62XZYT6Ez7r1gXP",
  "key4": "65tztDWjXP38n1ivyphGMPLcKuZNhqQz22ydfD7iKLzceZ1LtXR57QijuY3m9Pm9SYUeWgA3tTgeDA8hvkwtVDV3",
  "key5": "43RPEeJsuxZN833jQaSgyAZaSVUfB9Y93o6mLt1Cp5ytLm6Go3Ups7hTffU8XTWa4zKrE9e2MQf1PX3infjsas1P",
  "key6": "jx2fmxj1oipiFD2m7dSeVh1KVQa8WpaYebtWpwCv7WuN4v4iSxnUacobYyzJwrveYrPHZZ9sguk39fPnYfUaWYp",
  "key7": "3wDSbNX5kKB5E9ux3o4DECGG6o1K6aP8BqszY4oJU7srqUZ2Q6E8LBzZpW7DcxKVsyv5dJKnVZrr3Uh1ThFBamXS",
  "key8": "4mphw8mfcPCsHDa9feB3kapugR25vR8TzQirdQtnmQwYzkGYBPJwpMdWoSEGZpzyFbhByZr7P9hzrFMeNFyFRX2K",
  "key9": "Y7hiUoERXopqo3RpdhZGKhH2TeZgQoA9FL8fckAVMQt7Da1kcTjrab73AYUmd8xSbFZfyQhqteeFJ4yzojXGN7b",
  "key10": "4Hvunzt9Us33zYH9PGnRE2hB5gPi6gQevkxXkkrrBrB4KUWojLjdV3SuCCnvDXYuG1f1CG4so5EuZF93eY6p4wcJ",
  "key11": "5gx22iyAJRPFKfuNv6U4RqcU4CQ9hDS5jERS112dDNbg4GWBZguJcfqS81WL3FGC7eG37E8N9tAcA8iQHeHMbRPN",
  "key12": "3iiDXiGuy4J7JCvVKKuQhWq5WSgM55Z9gZ1ZjtBL6PJqYr38ptgNAAjF7SKvgsk5r1zJnTDznksC439u4wUYYPJi",
  "key13": "5gTfjF289RpZsSS4rrGNLNtkGtuasfHMYNzCcZWJPEkH7U4JMk6vCHekT6tMp9aHQnqrgnmdaJVh67Q3bA68nRAL",
  "key14": "5e4efndajtcTWDgnbqRrcTdfpRJ4UANdo48kXBpsfJAb5dJxEUsL29euPRUfsNEGHtnzavDqN8wdwuqjdXiKRZBf",
  "key15": "4kSJmjthjtAHsLF4afzVidsXbjgqcKxSRsxiEsVk8Rk2kig9sdpLhDYrsgWNozV3wtx895bUhh5QicUrHqFF9KjQ",
  "key16": "2kKYGK8gtAapa1WNjYYQedR3L2yXwrXesaRRCQpBBAqG5bYSWotMwcrF6Wigt7VRVcmCGzLx2MJ1ztFU95yPZNuu",
  "key17": "4U6SEnUpiZZgYLvTG67HxUrnc1NMnojkk9diMA797umcBQmwe15Uvq9ZgN8Co83VQhJVLdroDYq4kcPKVDrwsis4",
  "key18": "4QCJBZfV35czBPbNJYYs4JxZr3jaz5MXNicTckiLpJ9LDPFW2VEmQvL4uxrUAXsjoVWndHQwp5oLTXrRbYDjx3Jf",
  "key19": "4WqjZjcBKpM7p7Z6VmyhFycKmixYPpPG8BFzrCGhLaEUYjiVwfcEMLHeNsP5x185YMTL9tS3koZCdMU3S8WPCiPY",
  "key20": "4kJDD6qQ7JauE4hAUx2CKgR6EqFPkV3ngAAtjVCtj7jWAJFZ4cKvsw3H3RbiVYrGPNEUbTEMw5P9duDwK3a3Q4qN",
  "key21": "5wVASYKyrV5xkdqr2drcGuWiDHNAHcaJcStREPKcS8xxqBaADa5qCbfwFGD5xunN3b6j4titkgFFor6kW2zM2sso",
  "key22": "5ATvNgqw1ZqkmBsA9BynuFZfdoiZWfFCmPhkTPeFHfzwPYd8879sqeD6qyjSjQkJBcSkPbVVcfGkVEjNC6kBFdBi",
  "key23": "8RidMkAK6WnCPSALbQPcyu8UUVZ5MpXoaRrXKiyEtBDNcNF2a1NDqnBxgLcinHhfK4SHmF84TqE3PwZp4WHgd9c",
  "key24": "5CyNVPuvY3GU41KPsDntrd8guWdcYkP5Sg1RkKJcSGKG1VzGuL9CeLQsPZu76CpzgBrTG8AoUYQfwBY6mxX67d3s",
  "key25": "3czrDk97aRYpWpfa2iLZNVdKBSQUCHXinXGE3F3NHXcxuPfQXQeF5gcPK2kEPwacsE83ZhRAjKTA44VpagsBXxQU",
  "key26": "5BP9M97bgFEc7mp3Cq9FDQfu3LJBkzi6FYekF2au3MtPhbMYL16KAv4H1HME2deM5Hq5HX1iUvo7syfuLUAZQ1pv",
  "key27": "4wsYCjWEZsvtVTqda88JBkA95RNCk9iNe7EkxQ5tbdvunfy1Uqe8eUdFtts2aCac95BASV223jJniGnUZekXK5TG",
  "key28": "3MP9bQA8y4nenTTUUw244LfCN7FUKbzaFmaYn8xNJ7LhPNtGYa9De3jZF9rYzHpXjsRqnhvwQgqWzkv8V8cVwe5r",
  "key29": "2Y55zMhQgmAqpawhoDdvhHSkHEDgXMkzfSQKz5BBhm9SP4Pg9pB7qdrgQnB94euzhvq9pgEPE6MAiTN7Tvjdiwfx",
  "key30": "4Kd7wiQuZhtcuCWGHESgdB4VEbkaBvy7rw5aYQegdStGr3ZNN28cGX2DQ79SDTemMqW9dR7Lf6nPhtxPcjH6e4sy",
  "key31": "4V2iRVM97S7jRbZH59UGKdKXPCYgyz9WBXPin7bArQvix6puioJVFhnta8XrLaZaxDrUKczMFKCcR6HEbWxrZPJE",
  "key32": "39S6e35KENGvhJUGVnyErWtbACLSL4ku3GkLYE3eLRtuomMeLBBr5XvyxdRZwjrrfDTH7fyacpLcXqYxgk5hj9JD",
  "key33": "4UKmJd4SbPzAdbsVh54hHwi8PXeJzWaiAfczBq2yPHELXydUJKtomM4fpZG3tniYTaSSbaS22uFCvZ37CssqajQh",
  "key34": "2vNB4JCEVqM8yDU9sjMTQvhbdyXtH3JgCzotEi929RtseNNYQ43WpHJxWPTds36mKEE57dgu3YbL2XWJyJnUFan8",
  "key35": "4ZG2rPqJPUjHupiKAXtEmFAXomTubHvktZM7PChc1afdiZh5SXLwduesj5nD3YNTPBGqBUKFo7TGuXQEdfYmiCJC",
  "key36": "U7T9tomuDGnAELNGX2pwQhXn7ABo1UNmvrge3WLx22Ya5fUV7YZQi1DdiLGCVW76haTmrjBHSgCDY6NDv9L5TT7",
  "key37": "YwrxrQHvH32iwra3dsEzHMFb1EAWLv1hC6U3SswX3mCDhRG1pDR92TbuphGgKU7aD1R65Gqh5LnLw8rzuzonGjC",
  "key38": "4mTp16rfTNj9pmDvRgmJVTBjky92dkoUkLRqCM7uU96UkVCTgNhPnirmVergLpQFp2FemEYdpGHhjfwhDf6XmKbp",
  "key39": "3g5YNaE3LZX4nvgrByiuitbKDo3ogkRFUKBdyJk5YoyXVJS4sPofwWke27dtH6mawfa8QVwS1iAXozRCLu42rvdj",
  "key40": "5nYwQoZL2t4QCc5TbLQVebpebUxZcBxEtMRUaK62cWa3G9C3J9EC6TwybSL1YXy9DLWSt3AQCEiwWTCGHaJYDioz",
  "key41": "4kceSXUSerjHFuzhr8QQjaoBx7UFKuZP9p8ETukH9weRHSSTm8a4g1YDo4zVEu81R8M3F8FxrG6HdnHjV8J8vEwb",
  "key42": "29JP36afNJRj8wZbkjxqojAWeujJ6G3cZXm95Rc2322vYsZtL1hPzacmbhN3GF59qSpBcTGABfifVN8P1TG3h3pD",
  "key43": "3TbVSJyrTk9QarGBtHMeXv3wF8nURgNDdUnr4Hsv1aiGX5ptvGgVG7VdwFa5UUBBEKas3b2DjtEiBduzSjvfS1Ez",
  "key44": "c7bUqwkScaRvW1HwvJLd4QcTWrPX8pbdKjCdDeMGCF8wr3ivjb2eC3McZKp6tcBRFgkB9hSyLTxgKwuBHobp1FS",
  "key45": "4Ab749HEn8tJZR6FKd2VKr7wuLYrJPTkwM3RkbWW3sPKVtfFsu11MQabK7EALLb84PyCJiHdNMxEvmow7U5wmJfG",
  "key46": "3Vf1MQWT9aru45hFiqAWhiD8M4N9jXsXkAw8MbNYEzjDjiREeFXzbsW2fQEEVvaWJna625JgR6HmwSwtXhErhunB",
  "key47": "23bawyVPYdfNtxzSLhYJ37uhPYrY9UkvfHSp1bnh4H2sB8y7HFVJMPcv2WuR6AwnbxymtqhX6nZdvfhVxGWzwdaJ",
  "key48": "5ZGPHLafofMGpgcNEQGkDdg2wmhcVz3Pgvb2Rat24xqrieW3NRJmM1GfC9smscZFMb4gmM8Ext6sK76WXCqZXmN6"
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
