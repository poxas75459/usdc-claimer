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
    "3WCeRJL2gEmL3mMoGZvtLwa1s96j4g1NDZB2CmEcbBZiwXpdxrWSxP21pPexuTB7JRkzn1ZLUJgmGXiitkfXCu8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgR54KiFbhcJRaNEqveE3Eok7LDQnYVrXcmUUFinFu7gLPDn177ayWYxdjBJ7RkFkoLm8zkxmWHpRpVavucwHSq",
  "key1": "2PD8d2R42qNNubV5i1pBUCvhrLM7rj5zhdTspBSgfKqwDbr6mLYQqPvKnFpaTb82zaN6HnmzgMwmBJJNh6vJQN77",
  "key2": "A7QmYzKCMb25ayE4tBRqdLAsTfFqEnYc68V4GK1C4UvKQtQXzvbkNB18P1Gn19b4a4EcExkeezMeB58eCr5RBba",
  "key3": "4GnHZEnnzK1QNhPXU5BL1ciQB7UV18XPftakCG2dEh2nEzEQnrMGccF4Jpo9SFzqWFbr5hXva67B7ATfLme5ngi5",
  "key4": "7meEqe6kFf6bXq6jYt6XKxZ3caFMvQGp92NwwY33V4XLZT7bP93EZMumLxapJHCRLGaHNrwjGxvGxH3VLcZfL8c",
  "key5": "2wPHwNHCys3PqNJ9tMX8X7acLDjPB5gGEy18o2Sig33JArojgPmnkhGH8DzPUm3zwfdCtVJkfckw5UvLnyK2ZtkE",
  "key6": "4SFfyfYNQja1dRxFJiGpjTa76KVWcDno6brCWGco6pp1bmEAhYNsm84UUcveVrurFPaKkMZv7VdQzztzofw6qshj",
  "key7": "2FPeKu4yq7iyPQiFiVoXednNiHCR4BEYTBzuUi2PAvBgxb3GSYSqH7QPFegfN7EBHYCZZBN9wsg8gBDnU2FKPPsB",
  "key8": "N6wKDzECAf8TffUu5tyuTtVXK6rDVFiGDYvzRveMZx9oh1WddAUqMsUHUu3Y27pDGsEVdweTMb2B8Q38PHBffCr",
  "key9": "5VJHnxr6bXMjPY4HwMm9pwnQpzAuWKEGb99jTFRTpDuZEnkm3mQhyv4D4rmXmZi6Ht45S9XjPgCWrfHzqLQX6wxS",
  "key10": "4XxgVoMXjELeFAtt5pv3HBVTNSbQqVEywwqKaMxjUPBN1Q5ubRm5BTUwikc734sS5zAQ7cr5yZzFHM6avPQ2RVfB",
  "key11": "27tfkNTFTsp3cwtr7NLuaNn6KCKefzRdrpybRz8v93NWnyWY6LZ4pf5UwkVGBsQDXmdfcC6H9SzfMRTBy773NWYW",
  "key12": "2PDc9zR4K7YWTh3SsCwNVNPHencjE3kffUZf4tsVXk7bHeaf9caSUxC4ugHMY3WisJEVX8goJRfzPcgzWBHzX5kb",
  "key13": "j5A8Y8fNsdCZC7JdfZTKQzMLamcgQnPydEsoGEo4vumSQbyLF8tEwy4xoqcSFenRf9L2iu9p6aKJrYsFSXFDwLe",
  "key14": "2AndJTYAsPRpQRfXwzgHaH5CJsYHcpnj9PtgSVvmxR2Qd7jU6WZPzU8wAjyLoD3Jtrfd611WdT2Teju4eoVw7JE4",
  "key15": "3B8J7t2nyGTjJbqx8PbL3M7sMmhY9JdbEQAu6E7LXcZoCo7UYzF3EGj61GhPZAd765DYd29uYsZdz7DqhxnndAqR",
  "key16": "3s4UwJw16XaTPNSsfCH4gYbzevCDYKoWtEHnWeezfbScRU6YGbGCa7EwwK7n1kRd7uB3DUb9t1dVayz2CUuTD6At",
  "key17": "33AN7oA1jhCn9MggL81cX4dCF3CHLYgHD8oaekDqQ5gKWLfojvnKa3FGx7ANZ4hCbz86ZQqbc9HmUZYgUgRdxypM",
  "key18": "2eKY1ScyqpTKLZcKVT6DeQ6pD4dSj5ujzc1Asi8eXQg5b2vq9ixGoCJS6DU1mfEgrPZB7G1jPmangdA5pGjskFZ9",
  "key19": "298ZwiPy7Z8gRiYDhV6XJB2i4H5cWsq1HAnfsqaJiDR73her3fLbnoDse6gYk9zA6g5jiNJ6WQpwU8oXv8r1ZsZk",
  "key20": "47SgPpyfr2AEbjZy2D9pwWeMELBLxdRrVwC4xnwATr9cxjPZDjj9TGvQcgTevbRYxTtBqNhe8WUWbb8dQWwWfT7Q",
  "key21": "2LT1SVtrtb9PR2oyrXy4yNCkXBSwAjzcRKk4U9McqsgUtReNomTLJrFMgg2HQkQryZWABtf4eBgke5aFcjwVVJC5",
  "key22": "Dsm8cnr9Arr6UmfgD46cVUHP7m89rjAsXsXmJQsUmfUhwk4jFSh3Fm8XfHrWKr57BwkvLDeKFidpmeLusRuWvJZ",
  "key23": "5tvrg5PzrPh3KiYms4UZCmpYeqydtuLd4LQPN5p4XsC7QvpYwk4ThWM45ehDuEq2F88wKZ99RT8CPJ2V44LmRVxn",
  "key24": "4oEbBRVbkiMnPmzJRAuwwwpzZYbT6zmNd3oTLuGtd6zzXPgtcqfZrRiEUR2pBhXwuou1mPnpozktotXsRbHw6khb",
  "key25": "5nP1FNZkG2iQaE9XzY61eUKSZbasJZGECHc4mGanEWi5TrRie3USYSS4aFuZkKnWK7LDGeJU7TJJ4by8GdQwpnUJ",
  "key26": "23wbMNDtDvn5TEaYT8uafM3oBG8mRfeUA7SZ47AkBcRyE9Nvz6Mh4hjzHKbiwZcWAbN7nMHtG5cYWT9nmDGZ645G",
  "key27": "3FD7iNQypJFiLvBASckV8Z1Pm4adWd7DichRxn4bJRW39NyVt7GTe4g3BcUzDCZ6g6Cq4XnCbzpf4M7NVMJ8pt5j",
  "key28": "5ozCwNPt8obudFY9E5gHzpvHNKyvZn4oNJV92sjHRPtQMTUkmJm9ve2bFmfqU7sPgKcJU2tJruGm7VuTkbJgkJcK",
  "key29": "gDsQUZBbowjShiRSJaTjKUKHYYktrqLYUz8S5uVgsLo1iRZju2ZT8jWnncLkLS89tqNgCvYck3g7QRPs4JogZrH",
  "key30": "2AFni2pB7ggBV6b1HkJtSWZbshVrFine4pFeiazp4Ly3uKbZFJouqGLHHCwNavC1ehQ2uJ9QJa94iDAEbuc9Zgq6",
  "key31": "2ba6iVegps2odbdWJZENg5uEhjw6DSjAxCrZKnJSWz2ebBYMMUmeKakDzoijQ7h75MD1fo7W51CTdBkQ1r5MhUTY",
  "key32": "57KBPj65o28HLSGfTVe5ZsjMAA2govf1XWcevUY5m1xFn6TTQzz5Ba1dkYoDCw1fdTGsbNk1xh9Qp6dwF8emxtfi",
  "key33": "JXij3DVPqTHww68NHqiJ8wR4RLWKKXbEv6AVzDLRmWwnJd4xEkSjp2VqNzFm6PnxmmybPcJrip85EVBo63CwPA7"
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
