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
    "2F5c9CLTzfahNZjDgSqPdi62Rpjw4gmC2Wgr1uWXMuAUcvSKUFFebtRBhFtScWhDynjsi7S6pnXhMXB7tGjgajg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33C62ffiJKVrNBDz5LFRW3fG61rS82RBi9pc72eTFnbEqJLPDadpeHVDaWQoQDvvbvef1R1y8itJKCKKqwff5qSn",
  "key1": "3P5mMwbcA5yr7xMitowjmsYfN68W4QMXhQmL6JJLsm9tucP4mx7jDJWGuJfbpTWLSX3eLekeKLJPiyz77sUxwfm9",
  "key2": "cwg3t44iNa79Edi353MshNzVymomjx2cVtqsZPAYaSmHqT1UcSrgvYUK95c1VJCJZGzCTthkuupbBEStXs3RHgM",
  "key3": "4NjGHkd8uByiJY7AcKjALyJiZwYCK9HGPTVvk4LzECKAQHMmUL7iESzbj5Hcei69ARKfb5KojHDustgsRcLZsDi5",
  "key4": "31SN9zZwL7hdtn1YRNWxKmq67p94HQajnwK2VnMVMz2EeumaN1znLQ9SuPvtoo6MHBquiTFNwG8Jtu6KzLiFVNQE",
  "key5": "2D9KWAbY4dbG5xsUy6W9snULu4iGvXjbZJM7dhqKAfzACcBXLFFip2tdjcJdMBtreyraQKtYiMLyaHGGWeXM1yfo",
  "key6": "4pcGC71hKCjXGFjSva53M5QT6DxkPoNpmCz2pCzLdvzk2NgPLEzUjQCFnHKg1QkwundJJFNLs9niEjXhsihiWLyL",
  "key7": "41XdFmDegrHdNDiBP88QfqZAT5Gvn2th19Bq7LNKTR56Bmy7QkZH4ykyqtpdW7iEQZmmxWyHzs9sKu9sSSjMkfAm",
  "key8": "4UjQaqNJr8QFeTB9AyzBTKWapRcPqmogsyQUWkukSNjjStpFfKZGoepJ6MUGSduCRcvnh9B8AqEizobddEDCVTce",
  "key9": "43ARY8GGtoMKxQDWx24NwzsgksCRSLxmQXX8jeLp2Qgb9qpkEUTwgSNCfmhSUvg5wdPAz9BsWAufWUiU61FxA5H4",
  "key10": "evkjToSFMJGHBrN9Fevts6FK8uEHb4EanKoX5bruMBxpa3GUTBUnM9tj3qk8mCQYf7icARgXmcbVaBPN6Dm6w1Z",
  "key11": "2NYrqNGXvd7QYEvN3oPyAwWca1LfhsDUqDZCBL68hb7pdr3WSNSHq7iD76B1H4VWciRrSeRCb3BSp48hNrBpKrvD",
  "key12": "3EM8V1Htz6QTWJes1euHRasDP44NNW5kiiPNKj3q8UYLnEBPPRUexCuteczwP9RDzPjadYYyeCxyTnXNdKP4KAvq",
  "key13": "577fWnWMri23zHd9MuzErr9gzLeQBSXbn2bAx8NmPvXGf2GR5XMVe75pUJuudpJFcfsYWnHt7mjuUkaUryfHWDyk",
  "key14": "3pq6qxjniGvsEGH5XdMkDbsSbPYWFk4tXmycZBZffsc2kBWStYB8YivzrftXZNGjbLP1cimFTuU6pT5MbBTwdC3G",
  "key15": "3JgMVqJL1dcJDUb2Huw7DFSi9epNnkPMzCqLfR3Ha4gGMvwBGmtKSLgQkiBbrcHqBZe38HYxHRnvtqiWNFY9Czd4",
  "key16": "31HG3EdZUddQgZ1WWPEbFY6ZHL923Nr9e36HC7uZJu8wiCy173CtMQFuGbyuSRcPRKFE3DZX9W1zC6GUVeqyysXQ",
  "key17": "5zgzquDEqg2beV8aUMrgXGoGK9CQysyrdMGut74ESbgKgMbyQik4ZesF1PQXBLJq6U8UALC7ziMyPo1Z3C5HNYkR",
  "key18": "J91doD9qkhKyxpLsHmpBuKeGggJxG3okzbbFHAwa5sLH2QkBDHix3jHATtMWBB1NQ1tpHXGXMXw5XYT2gJBaWEz",
  "key19": "4j7xz2R8ELRWwkut1JntEievvBxp3LWnqmP8sG5e5rSz4DT9VUxwSy9DhUGPfSTnWykctaCdJ2maigH6xeVe3pLT",
  "key20": "2fGqysF8BGdNfSmm8V4VQx8SzNLjZj3ef44oS8Fry9oGAhqiixbXrD2bnib1hgb8n45ww4bYm6GD4en3YcxXWHM3",
  "key21": "4esWE7iEVxKazpnjcYZHhz1LukS2QRovG3f3gDdS8HQnerwYE4N2MeJddTNPRJoqfzpzuGKyLESSwpZCc2V1PkVM",
  "key22": "58qGQtqmwd6MpsE3J4TUMKquMnhT8QTWDB4B3q2NKdYY5daigSYquUzaTFzyKSkjHpebRYd3zMi91AKStgSmaiTW",
  "key23": "5Hq3sRxQQFVQYkNZsjcdbqpwLNMgUcrqt3ypanq1F65gsgaStcPso7uW2tTEHJkzm7jiVSQefwFy7L31wMCAvcez",
  "key24": "4o9KhgPpMubiZAvYHo7sJo33iAMvTnMiKR751EpoKpUvvZ9Cf4x6egzWiozEdDiPnfrD8kT6yKrtCP2cbKuJxvyQ",
  "key25": "2U41wEqMMpgnmt5oADRhTgbMFoPsd8in4GLYJxureAcRLTw4mrAxnzRGwKdbkw6PYe7yeqjJ63kWnmpLYHgo2jFs",
  "key26": "2GAa9TikGLgour6kKJ4HnWYchBo8Usfb4ioovEtytN7MjcdEcc8kMcU3ZCWNZ4NRTfgU6qU1eyrUXkQi4rkWik2P",
  "key27": "3eKyvbarhsMZp2ZbompH6D9ffS78Dux4hvbmHHgz2LmvoxKzv8Dvji8MwARVk5GknThgFfyLRZ2w579LPTT865s1",
  "key28": "4YjuyJoqfUwt4wg6Fwp4mNriNpWUrNCk9NBcux55ygUuZuJSzw7aqSTNR794iqDhnof3Zz9UXRw77kKDBrPD3Qju",
  "key29": "5UckBVSsTqau6hydNCwD8cfRa9dFq5rYFQ1kZZ2y4yDvPof1efxCFznyEZwsfSaGGvEV7d5rYCpzdFHYSoUvKz7E",
  "key30": "DeewTALFPUyVvpCdGsSquSrRQ27KZNiEPEmKe8FzARhKHThFpYKf5tfGMegETZ5KaHLxxwcSMm1yT1fvFUoW6pW",
  "key31": "3r5e4ZsUKboLHbqab2pZ44iBy4TAyfbhyDUv4xnrEpBRrBQ22WvM2fBB6oiKmY5TvyGyPVREevFPfLfikxipvjya",
  "key32": "34thQQC2qQwWf2phAPtVNpdEdKoCenhqrmfE5PWmM8qGF8UdPnCwiNh2poevm12neFjUrpTSJbjAVKvfoK3Ek9ba",
  "key33": "3sU7HsLk2NUjYKyZW9ckfFXsMXTLrDqzsAW9fLtvQ88rowMLR4A7qQE4p9daqkdonatZGA7tohkpeHnToFuEW8U3",
  "key34": "5PZ9FuLrXxm9N42YWmdXTY4ohp2Znk3nrR6MsHvsEKDsPP8zUurjLmfu1g2HnRmuPoF1M5HNFJuQ3RuFeHR564p5",
  "key35": "3vRyNoWK8h3hY2TszSJmpV9MFWhr764VMZVEeDFABtB3jiD1ktZjcKXNhDtkkNbPj7NKTASN7dUdtxFabRTRBqEq",
  "key36": "54jD7vM36Nxmzs74TpwVw6ZnYskRm787kdzUfv7V8XMCnU6eAXfvUf2goj2mnQSR7ZkfPaygptW3LLugouEXqK2W",
  "key37": "5f26YryRu8KLA2Lo6Ad8YZjNsVZiYXeSj3JzJSTQUZycLTGKeoprcNoEd6Q68jKbg4hM9NgqdRPh7kKXF54FPe72",
  "key38": "66wMCrim3kvQpFFpAZgqVaECek2WLLyoWwXNdG5PWbs9tRF2t6HJvkmNuqaKLMHCKz4JEfwaiFVKrHWwMgMhRXLH"
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
