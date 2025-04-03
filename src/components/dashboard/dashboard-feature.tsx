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
    "5Gjt9u6J56jQWRXtmNavi66aCnGc9fyxmAgKdiAuDsvPNjJkuEUbQypx7bvLo6PxXyKXPhBXSsJrfa3zkEQvhmSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A6jH2MVdNpMkkV5tWumtZwymZCRxhZsx7PYAV5aFHsQEShnnoDuWCWbgKeH3sx64jzv6rkWGVzBxARytZcpVzwj",
  "key1": "2PjTkUdTvbwejuSttbW8X1XF2uQVkVxqku47YEB7QvRZDVo9QWHtLFoLnrBt9j5YXk617ARxeeSimBbsjXoF1uGo",
  "key2": "5UYx4FdEfUJbEC1KWnXKzJ2Dhv37uypVPuHeVvcGeBmg3YfDBeQqJ4Wf7WwnLB9djH2aTmdewPZH6A4v8euTYg3G",
  "key3": "4b6AdteZUvYcY8mWXqwcqFxJK1t8NXT4JznxedTqzA1yagd5iTn5YzVtTrkKb9gJHJvJ3UT23GP6M8DipWLGnnvq",
  "key4": "3LAwtzZfoESf9QGERzE6j91Xa4sEhFkDqjGyTQwfdJVJ3NqeU56jxYKfSjbK33SCAhPHbf9ZQ5aposMwcZczWQ5e",
  "key5": "3ngbvN4fZAG4X78WaqsviWfpN6rFa9rddZ5UG7MHP4GU8JJUeNdg3S9eooj7T5ahMMoZ7Mxz93UTsoKHyjnjhAo7",
  "key6": "1FiZBEPPvFMz3s5yKfQf77Tr5csirQkYkgDjHGKdSK3Br7VAJk1mwJgrCJGJ1k1NP7TQWMFz9fiAwE5A65KgKQ9",
  "key7": "4i4Rte2grgsa1EUbb7LPYtdEikbfdTkL2m9Q5Nfrxn2fhYD9EbeKGtb4FuyppsjE1TBthinhQX6pfo1J7NdnGDpo",
  "key8": "3ts5gfdjki5wZRfyiy1awgumiNaQriwxuumQ1RmKK9vHMfFJQcbGqur6b43YPhiF55BESSjmaG7EyRLtnWivuctY",
  "key9": "31Cjf6AHa4V5iYxeTrrSiVZ7mPqQzFZmXBrdk4dZtx4rSwxBtci322yfQVchxarfzQVkJxFxwx3SnQiLFMNVJQCu",
  "key10": "5AwhC8WKt8yCjEwCQ9a6UrBqZ5arAqqfHftvuD11ySftxNWLB5pxnY9NZCVmyLvzeJSotJfZTTjf6mNVXyXxRyfP",
  "key11": "6iUev2qqJrShdDtmLcYycjhRbiGoCjLm8x8wW8Lus7TtaDY7pU5ZiLQcTcCo7dQfJzH6PohPuJkk6g3VLXCjZVy",
  "key12": "HXbkgnN39pTDoxvjAz3u7gespeSsEK48gLNNHqFATLxosqtd9CGx7mrTFggxrrURriVZeRUcNWRnBv3aZFntgcQ",
  "key13": "4Mnc3visdiZywSqK4sv6edcr4HLy1HWRqXKQkKx87NTGKKcHQAHw1GkkwLzNhfcXDzRJhdAUovG4gvfCWDLKQ4CX",
  "key14": "stiHYEE7upQoHDAoPU6NHFhNxFu7DNdVuNNm1iYJbRowYs7tiifDDXkzpcft6bi77TeSXAHr88PacSG8y6f6U9u",
  "key15": "4myRVPov99s7EvsYNguLNHbUKSU39kaJ2nBruyBJj3agou8LdaxgtUXzWtoHmuV9r9jA3mem3qRtk5nPrE9UNaZR",
  "key16": "4yB3NwEkzYQNqKnGeRoLzyToavx7LR49NFFPTZLLqhJCU9de9KE9R4dQY1rb1fhfJkGBuVU5pqUgPEfim3hrLyhG",
  "key17": "5W7CEPymnoFyeZ4ZGsasyKLQWoocVU4TYvwA2cE5p3wRnAWotUtxRW8NE58j3dfRDXcMqVVa27SSVoYiEqiYSUCm",
  "key18": "2iieCpDcEDzczuqXBZCw12LR2Yvy8WJue46BdJ6xhfbkkpyAa2AXytpcroHshunQSegw9KpPvkZqfE3MYvrtbSKE",
  "key19": "W1uHwWjLHt6yDTmfj8UsW1aCE2fY4dWSTPoo65xFRofqiAJrDX4zVZrteBREACTc7ffNc7HLTzqntsq4LuXLGJ4",
  "key20": "3noF482YFTvjktozSZu6VDLqwy3qHrxGQRWXToiDyjqxmvoS1smCN5xu7VdQN2DF7NHYj9vQBB845RgvZA58SEQx",
  "key21": "2UqsJHbu64KFaWQE5h8zZ7RAMVAtCCtjnwCHRxa7k6Cc34AyNrNLpuhyPDnEWzNJQXs9rR74Bin2srNZR9VgyFDQ",
  "key22": "29Uqrw9zGok6NcaLa1P9f5gHdDGW4nGC8y97Ap2j4Zu2C9vXHbujS6xiUhqfHJkErzvCkaeC1dcZUYzjHafee4Fn",
  "key23": "4dB4RPWXVq74SvkgR7VVQbGM9JLRuc3DmdvAWH8aMaofw7dueJYcS3Hhbv3MHLqreyMyF6d9FkoeicufaGiVbMWg",
  "key24": "5cysFwSy812NmTcgDPewTRKKBZkDksKZ6hCLUZ3Zj3oDNy1tdwu4LFeETzZtg8T2SKuPxLC8eJTv69jTXXSzCjEb",
  "key25": "4wJEGixpisQ8jbmgXLt7g6Cof8cPHncJZu2v27gPAudJH3rSVWVpNLobXRBtZw2BCtGfhXPx2LrTM6WaoFwhqpJv",
  "key26": "5H4pDsZFbrYdTu4MmUNT3832HNN6ztt2NKPi5oYRNfVUR8rP22ZZTdznFsDbnv9wY1eo5PzSHbHzjHvZRtnvg75j",
  "key27": "4HWkQrUnJL5Sjk17zqj7XfTRCzWCkfDiHUhXWbKoLhMGoQ9u4ktPUWLzomREpxdzWv8H9P7yUTrQc5Sv8eUQE5uK",
  "key28": "3vAXUrXY6tWGR3ZZ8zbj3DgBQbELaya1mpcgSmcEUNKjBKsc6g8x4ERLcqH4RpJ4uWfcWppmpKbXeZTB2vaT88Kh",
  "key29": "3RpBsbxchSVfkEwTkk9whwto8GLwzzYBLnLuwUxYzw4F7yVdoS23qcLWdNbqrQYDwv7vYznLCNGNkAbGxJHwRAHf",
  "key30": "2NP9AMECX5WeuBcP67jTSRSQE3D3caP3csFwBSYaaTbWYZsaPsMZ7iRCBgWeS8dqpPnkezeubhbePUEXvAKJXwYe",
  "key31": "3EaGrmm48j4Mooyv9ERP94mE65wSSTzVDgUkUXeypGfXfiey67A81J14ihqeDeMFh2d6H2c5wLU2L6jRywUkksHR",
  "key32": "6VrvhEAJFZ47WG9vzN2GfdMuJ9trxgMUSRcLLnscAyhvEXPP5NB4hi5CJVjEEpvxGTdz4qHyUJCGdWDZobher18",
  "key33": "4JbrPJ7EPxzNKbwDxeac4xybd3EJ1pn32h8HQnW7CLNunds9CnBLmMKjnjZWo4GM4kNPoT5aVVxTfdWbgpdrv7iY",
  "key34": "4XSVpgWcBgjHTSWuWwErMHTWr6NHCS1CgjPdBveTJajo4wf871XXMMNQKhCgRDeWWiEWwgs3Zb34ZqcP245Btt3r",
  "key35": "67BTYwBcEZThqrsCQP2nPHDvkkzEvV23sDdKypdU4CJkjGcUhNgN6VBnLaDqN3cnJbQHpbWXq1guXzfcWxbMRTbg",
  "key36": "3LXTwLEbVwvS9wPMtyYE2EmUHi1ucUkAG7L1XBmu1nmyMdtbES6LXULi4QfnA48N9VMTJ2MnvdmVNtaiQ6A9xiMU",
  "key37": "2W4gtqSQi1Kms51vVXnVc2eHNkjzvgb4tJnxUo8oW1jfZVKKAokgtGqQDYqKP5nAoPwQW6faTCfk4v5AT5ize1oz",
  "key38": "qZ4h2ym7j8HcsQYUz8Ut2nKqStTjFHgFRsx9eP9W8TeugzqQzXB61vp3bhnqjycv6e5qz9iGcidQ6FfwW9Eaq15",
  "key39": "2GPWweEG29XrmuJFdi4tuVyRKoEs6jJnYXTfU8KE6KKowyH7rxWh1vqfjEEMmk2Gufvkmhso7ZS6mudWPmpYN98G",
  "key40": "2ZoGUdoxAk2pa3fd4yAigm5Naavex3Z5X78pU2wqu8j54NrK2nSdC5ePSUdnZ7ee2a2VRoJmqrK9cZx9vFp5tXwe",
  "key41": "4RjMYJEbBpJxWoW7e9Uq3M6uwxbhZKbxwQTdyGJYULCBudeNyctCytQdzoDisXeMU4ZwaSkA4CjFzEGfGaWKranH",
  "key42": "327BQqFsKowDcyKqxSsGwbtrkTVN4gZgaPzuYARFuti3Evkmo2rAFTYBfkGGjeeLL9QyP4WWKRb4o8AkthB41Nng",
  "key43": "582U23nHSCn3PEACtcxUULhZaQ7ePkH4kpi1XFXjEmPPaLJkyJifPVvDeN8HsSEKHkLZWa2zMKbkxPVbyCFFBw5p",
  "key44": "28XQtT6275ZTM4Riu16fvKD5c7Lq41coAX3MWXe7GNYh7yGpTTFgPUf9pKDptLagUFd3uJCfpEkKsiiouUDw78Tp",
  "key45": "5bpDjpnNUR3CRvmGkTNchFvrrsBRdVUFN7rU98GbM2JJq7M47Z3jGXaziMxeii1UuCjg1SNd3yKxo6wc1qafewM8",
  "key46": "31RKcnHAprEfoCe6ao3cwLkr9TiENHPXtq6ttww4v94hwMr3L7AdPxtxBtH5yx7yepH37ym5z57mDVzHmWA1Q5M4",
  "key47": "5Vogq5yVDKDvF72Tp8vW9D2UGJcwyonkMEnvBzXpUVC6mVSBKAxocNfLKySq496p9TbcVPPb8b6gFb2cYphtFCPE"
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
