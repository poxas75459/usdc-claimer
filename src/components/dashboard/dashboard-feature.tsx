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
    "4G5LEasVih8KLLDcvQBMkoRWMAzQ9PCbF1TGVYriJ5SMZ11CtjJoxof1Bizi8Qay1teX1JD6amaDNpT3S1f2LVmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZoZSaKZ7fbqyfKiusPoZYPU1RwGE72ARHnmuE6sKmni36ohu2BJ4oK7DeLu6UJMDarcQJUqMsQqzwaLP6T64X6",
  "key1": "2wD3521xqJyJw6Jp6Do5x6j9bW4P9CTM3rRdLwneM7DUE5c8QX94yG8GgMBNm8DLiQbaNQz5DzinRJmVtkEg55o9",
  "key2": "2sJQzEYBMXGzVnPQ76UM33UrgU8jEEs2QhUQSCzWaAJS7vhXSAR5s51Ldkpu7s1hLDC9hoJPrRQxaRumWdNZGeLr",
  "key3": "5DHJL1Jn7KxuTQeDE6Eb37f9cppqN6E4h26MkSKxV7eYrBVZZ1DCuaiTQ7Us5oN9g8d16rBowxhfFc8cxtCMYtAm",
  "key4": "zd6uxpFd6TUcvjh2uC2W8EEU8ro7Q9Ah27EK7GwSa38C4Bvtt6keT75DFjxNjZEw1xaRX1GG725ZXrHWJatLJik",
  "key5": "2NNfDFZEwTTKn2WUKbv6rG8RxgWejxNT65ankMHqJ7FYnivE2y2HU3fcJpDmXjGr6Gcw99bTS3n72ebodyxiXTXP",
  "key6": "31LpYnxhRDREoVRV8Ns5ukNRnbVHuhwXdoM2hLJoLtW4ff9mrkPPyeMTsJvfKrCnrxcaAW84vb2r7uBdwTSMsp1s",
  "key7": "4ZEZCzh4UQKVtSEdq4mKQLa5kkNjMyNcAyKR4grgkUnQgwrSwNan6swfGYuNMTGE2vqWUJv22hiEQtwz2W6utGug",
  "key8": "4zJUUuHGRPhpr9Nxh5P6gy2kVN9yNrorrHVbhXZW9dKZB2h5R9onABHFUM38SraL88jPc7irQDVjoEdDP9rFQG2V",
  "key9": "35xkKUs8GxKDnDBx5TG7LnSa9FvLXhNigaduEtjbHTNq1yJJ8KfSDUdqvphbxnJnYc7Y7JPFZGP5FT1PAjHZrWtY",
  "key10": "45mPAX2pwUbubdDcXgqAYQ26tVmTDZ5csAm7jFQ5asMyr3M8tjsZ1Go4VAUKJF2sR6s41wUGvUVFHikJbj8yqtjV",
  "key11": "5gNRBbk2dgtonUwGXQmCrPzauJdGx8Z2PeGvwStLgLquWR8f3mEfZjYuYwoL8cTh35PJGofSHa79Hr9i8fSvF86p",
  "key12": "5DhMZkZcbv5PPwDK1GFQ42nRJVU9cSQAA2jrSpPh8uozR2Wd1bqvfVqizkj8gEwomZC9hYqjiyXK7JHbcawchusz",
  "key13": "3RxmkRmYAJRzxayrZCHgC4LShctDNEgrY6v5qHBfCAeGPHupmzmLq4emyZ5j6bx2LgEd1QqNJTQLTJbecV58kHr5",
  "key14": "Ju4KLYkN4guV3wHzLa5ywhFLYJL41jx9jsum9g4mPjByAYz2LYsBRau6KmJT4iiyQQbTkpB6Wht5hZ9fAJHwC2K",
  "key15": "5FDEXxqz7Ae9VhmZ81tLeoKaUtew9YrKkM8h6T7z6kW4ugwAB8tEWeBjQ7GNw5kymXBeGDobdEpMPW8N7zzkQue",
  "key16": "2njVLyHUaw1AX5GBy8REZqR9g27JYkTk1NndFbC1wpMcBefbes99Lbkfummfvoxxs3MLze3b6s2GHKZRwzJXJd6z",
  "key17": "4AQEgzDc7ZjS8ng1tvEVefw8bCKRQA3CLZY51zqZ33AFw3BzDA2xWHGARJ59ti7jD4Wf8qzaJYhCAgvnnzM9xQQm",
  "key18": "5UDys9o69hTkfwYtDvEZ5Lj7mX6P2hG5Nfz8VpwPVTSuuHjCeMWHHC13RAnWGB4tZz5jyDoHJwDLWJFqKiXJX7VM",
  "key19": "53Tsr55HxV1BZnh69ys9tKyymRLwCw5AQfgKN4QpcZcB8uiRhKtDeKusAX6wrUbLLJS3wmzGLJRbB9DoSyz3fNfF",
  "key20": "2ntKgvNjpzkWTTboAuMFqHTkJDxbCQsUVdvBPnpyHt9RMvGkxGKx6p5YxCz7mTxixU736itEGN54A9tHCrEgA7yP",
  "key21": "2yVVHvtttYFAN2q2t5QbGJQsM8W8XNLxknvNnVaKzjZFgjtXuLB1EoNtUfTM2c5udrz4zMCrbvrnBznWNE4H5kS1",
  "key22": "cPc3obBPdE4FnR4RahiXigY9uWfREP8EWtEaLvaiL6rDxL28WWFubMm4o6rBcHkmS6qsrZGeebRSLxEA74EEfcw",
  "key23": "5mcUkitYCHiS1G81eGcHEVijo4eaAD7hdC19DjSqDGem9q99jJVWdZyjms8S62CnwDup5VNxv9Y8XLPPxSPdRAjN",
  "key24": "4VFXEeaNvasHkxLYjQDvvTZ9mPURcig9vvBPh3ACRzbEQz3C1joGzWb2fVaqgoNcURWzHYufaDwLpCf3hnyooHnx",
  "key25": "38ge5uDdC7sXsDZivsCc554bbcRx3bGEXCEeaaTeJdy4NZaFpaoLYJQmxCGV48DTErk8yrCRYsGcsATK9v76dQnQ",
  "key26": "QKbBGBpJtELqh9ZVboAVxawSVAZJgPMiXNVHZxZS5qdLn3RWKHvSkC6rnTZxuvhSV8PTnEUZngzG7TgxcEBEDsu",
  "key27": "3SPYuEW6TR6hT71CYfC1hZVQVBsfFhLgUKj7gXxLpeeWKzyuUnBvGWsSetyh4i6U85azxVrVTb1gLGacHgz9nuEF",
  "key28": "2KoDypY8tGpj92iQgKVepCj1XFNSAZ6rQyb4Hr5b9RB1djiKyzkxuVE1LxmaptH6onaL2mnPWs3QXEYHbqHwejrZ",
  "key29": "5ohVBNiHByWdeDPCEuz8hXaptjsbdsgzqCY8BDB6j5ZxMnJMihbdxu3ssR9LDwhGXcU4cchW2u29zfGPDm8RkCdp",
  "key30": "5hoF3ME7NP6fgdvbTDq1qAySUKMrHXktFBS4NRRbkmc1ywEQSRVgiEEtPjsiVKLcs72UXgq9TMmKBiXb775DZTWD",
  "key31": "3HcAZSJPhPqowVUiDhyirSm3ShCkifX149LJ1KqrSkHpt65vdoT87NTmUaA8HnWB62ebdpfNc3hX6oBAaHiyPSwn",
  "key32": "5TXqK9Pkn4brZ2uLRQS1nX27jVa4CK59DMPT39RJx9kF2oPE8B8dFPiAtNNbFK5Wh8YVrQWkxTGfk5Be2R6aB6LB",
  "key33": "wQiAFbiqCGPSmbnHh94oMR221qQ78hxmi9L8NrqSFvgsysSV6mCiGZkjqFzRn9UAGvFB9nQ4rTRHV2mNT551LoT",
  "key34": "LRt4tgRraC1SHwGs3PggMbKpQuotz3e44xKKsCgttgkRpKR9Ha56EzGBkvvG1Q1WhjnpXC9c1FfSzuWCVC2jBHs"
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
