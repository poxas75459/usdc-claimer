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
    "5uCzZkAKnXxwTunGviaKcfJ7HnhBJ2oCFMd5GmGX77bEudtfwCahGMJdZy6AS68PtoERevnkXohPLWuERvfxiDaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AxkheUj23h21YFvBz24Xyfo28uRGMg11gE1kfn3yTRt8ZicEjtUdT9UJg4vJnVc4defZGHreb11n8hUQ92Q7H8b",
  "key1": "47yitCufjCw6rDKNHCArr8ngdsaxYTmgtVzXZ17u1NWtF6dsvQFenxT4P973ijjuKnut8egwhMhehMRqF59nZG1b",
  "key2": "4MUzh6ZG8ZSP3pU5x3ZVqoeHruMmxwegjYFivGQtqToJmYpVBB4VgyJoRP7crNvB17VFMn1XjdBBtpfm1EVQyub",
  "key3": "4fEK76fFwBFNBxbFkgT76BruTAfEUCdc926v1PqGrV9rh8SU3JGbmEPZ9NKMpkJXEhJRvwfd5uQjwf9FqLQ5Ww8r",
  "key4": "26dQwALLZSBGaM1ToK7FZq69MdRYqRS4uYPBagSdE3qiBFJFUNEPpcfYfPPUfNMLh29iFgifhNUFfHCTjMWZkMqY",
  "key5": "4bJnbWXTkGPTReqo6jpKKhDuTkMXfZPTVSnYLry7DhgDjJryGcgxLZqfKbn6bwuez8DJuBCTptbWqmvdvm4QrBTc",
  "key6": "5eho13VjQ1qfUXmQABpoJ6MmgNpvPE6aFojBL5MvJQQRtBB7XMpPi3SsFrQSQFt2ARSD4JfQLUejwSWzNyTeA11Z",
  "key7": "4rsWDYuJTXfKyVyxbWuCGUp7GALUvqoiKVY1UohrdraKEVWPuMDJcPDho96ZbP2jHxeb1J7rPbvTbWqbuiksCW2H",
  "key8": "3f2xcaic23WgQbE2UopoBa46opnC5p2n6cuoxqtsVvHyMLXF5bYL6m53JgXvpmxYUYQ15CxjXTCC9tSFDNDDzdoP",
  "key9": "4GiXwF1Rp6G7QkYYGWThMSY64czFFjGxVgcuca4XxWkcj21NL2WdFLw8QFeFdQM2hgzAhAac3iMc85pgCn4RGKQQ",
  "key10": "213uYbh5GNNWMkpT3UE8jLvCpMLR2KzBTmkcaQWv28dkZGePQ9TZP1VsarLhEQg8EpJzy2gv8ELLksLMaeFj49Xw",
  "key11": "35VuBnZAh2qykfcNqKw3F5cGv56pwRnDRmkKoHYQ6zi9ZDCWB21z4LeNnby5aoF9pKY14qqQqnFZTLvskDFUqgG2",
  "key12": "KBTpfQ6eZxbRsAV1ZnYswiaqAHnjKVvNDBMGLDwUV9twQWtQd4YTTgDgQtFFEiSxCweUQey9j9QvKKBjzL1xFdC",
  "key13": "4Fi8RrnuFbjsG33DYkYrfJ1vgFLGS4zztD3ur6DPAEbCrU179N4m5PG2sYSmoDirzbazLmDTKWPQqSx3hqz6efUe",
  "key14": "58iHmwmdU2grt14oJ5VU1TkkVL3nufq6xpo1xTTL9Xda6aoG9oKoLZZhUr42p3xtNeUXxVbNaJiBNe6hRx8CdoCN",
  "key15": "3cnhgbH6yGa76HqY9t9RtRqGanSgDoZaokgNBmqYD7YQLMuZWPuszscUD4qaFAc2G2q1iY5dwQ2tEGkfgwYwfR7X",
  "key16": "R5DXLyaHGpHyX7xNo2of7AHE6APnjCQ7pG1RczRJrTPyLftVdzcsphhC7kCZRggz1dLbKbHpsPZL7WguHoiGHFN",
  "key17": "5aeUq2X2fCYcVE7uRaQTF4Dt14xN55Q7uen6Zzfvahg2Yc71JozwESfvRh8xPGByYxahnxamDFE8s2DSjRTToBxG",
  "key18": "5dtUnLw7vUg5TTaG3GDSccVCz1iWZe8Q2J443B4485ekLhNahh4G8oNDxtASmcCRFrpCXHz3KqzKsKY5DK2XKzDM",
  "key19": "PNDVZkuJ6ZSp1KBRGBTKd9QYgqvnngXRzhd9wNJmqrorSxQuwuXR2aC6Af9kR5PHag6ATfBmnnHhpbC3icFAyyE",
  "key20": "zQSvBFFG4e8jjvcYrUtoJUR2ccuzjfvDh8iD4f3r9LJjPezudo6H2rwzkjB2QpCiCDvsJvooHPdJff4iqBMJonA",
  "key21": "4r88AFexAtTANTxSRm7sGn8vGD5ioD5DuhuYMnz5FiqUheh6M1Kr47SKNnheaaWDqAZ5uLATkB6jZrn6PyrLF93j",
  "key22": "5q6hF9SndFRmE6sP3ZN8uKvxyqYhrk8USBefvZVpAjR5ypiyfnqt9HS27BERgpwh7f2kbv1pRe6SzLCQxJvbo16G",
  "key23": "kMejMwK4RxMsnGudmywBEhNZ31fZYq2MqbZyx8TmjWwwgVC3midCjxP9aRrNuvw3aFgAFoNT4EUVcGnX83FhHsG",
  "key24": "2owbWsnbZYbQUjmABB2ZYHpaB9wun1tuUXEfAQxS7qFZurbSH8zgtgxHfLcnMyiH7N7MB75AxpdMCBhddwxp4QHS",
  "key25": "2pynr8N63dHfxXcrJMgqVjH34wmUWi3MQagJ9SQU92EN1CkHMrxRbmbxVY4VU2Q5536TwH6iNnq19LiKBJpVC5zt",
  "key26": "57nMhrzRXjC2mN4Utopw8CY1ozExs12QMFfBfjGHfDAR6Bs8PF1WDur1hC8nkkBthxaP1nXr7x5aDZ6Qsf99e36Q",
  "key27": "4TMB2Ctb1TGw7SkuuLYiXQ7AuH2ssyyTq3CCHCkwQ27PSaBbjmDBUT7yMDoq1pENUQCvNahzFdD557Rtmsk7bJcW",
  "key28": "45sM3MxVUfXvxZaMqYEe8to4x6M7pqjxQN4JSPsPQZ1XHCPUNqUWtVuFCoD2basS9s7VJpJdegX244HMwgF1ZFNC",
  "key29": "5zxrn9dUY4XtqmR2CV4v9PhLTERhwYKEx89Md5aHNGn747tmaznKn645nvw66TKHq1UuFvJokzS9aCyEJ3Uk6mh3"
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
