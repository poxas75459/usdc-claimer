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
    "53oxM5LqqzL8wdkYF6qjv8usSfasEkqttRBA1BH2qrRX9MwXFZv69HuggMF5uzomzmAAFyLTNZh9XLbESjcGRKtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EnZH8Etn2FYJmSRVFikFPhfSYoX7uQeDPiMSgJKmqe7dc6L5CzxCgtdAiwWFeo2SF6JaPDAHHeY9KFtn1ALRYoj",
  "key1": "4AxBMwkkJGwyP7FjeBsGYAehKmEN6e7ANyhscroHyKzqQoNeswhNK9tJbqxjH27eA5TiFbMvaEoxKfu4yiqGYMYX",
  "key2": "2FkYZLNwNweqJsQ9J64vhooyKDRZT8cuzCwY6VTMMBhXY2d4q4A5vaaSemXZQuxb7Y2zFJZbkmvkmnmiy8TLhLxM",
  "key3": "65aNEyRL6ENyg45fNAiy7goGweyd5AWHq1BtwU31YCJdtDrgEJ3BMx7ZwPvzs1p39mHsd5t8nf5RtnvUVp7k918m",
  "key4": "21qwjfok38S1CmwAHJJG7SwxXsWryV5pG2fvCeZujwiGE7cnBKXcsS46jSCPY6VUsEWXc88JTb7aWng4RwvmQeTJ",
  "key5": "4p8ubyfw1aA7tQi1aduRpxrr5zpq2S64dQNd8Ut6iq57XSV4yhf2fXRxz8C9fWugnAiK9or8vpBP3adhibM6xACb",
  "key6": "4FdueEnPHncfLyr4pBJaZENDk1Gw9NptY3TQkKNZoiNTxHRNDaGiyskUPWH1UFYgtFwV8vZFCG4WMgyWa22uSvVn",
  "key7": "GVPiUdVEWufexQNe6d8rnjmESgMg91KHBcJ6y5yQNNQWMVVG5XwGMuKXKzMuGZWRCeo5NXzzRTGVn1M2AmcThLh",
  "key8": "3H3LhWtGWbdrn2vByD3iLSrpmztEUYKp5bzvaMZA9bh2STWSJ98RCsvAAQdTLV7bec4jGQrR4zkmd2f4LSp9PZn6",
  "key9": "2YsTVuNrqCRE9p31LpdSkdBd3k3uvdvtQSKuz2r3gzM17sWgoHDWaTBuoezBi694HgMum8uW5id3hjPo6fD6QFXH",
  "key10": "34HEr8DRdov5VfqnZH3vBkjMoma5Qu9i9XC9WzHDitFxmJje93BXgU3f3dCxFmbdn5KwUhoBivtpe5NzTuGvvyeB",
  "key11": "3UUQcuxLUCGjXw3MPDpWMeEiAwR6G9wTfBV2qZKeicXK5ccmjNfyXJFC7aeJDFDi3AGVok1YhxEPuSFsMpjkA2FQ",
  "key12": "3RRocjqoqmL67xJdB2BbVRNKvahgfHnY5qVtYy1g4ExsFDMwdibHzzSaAbvxLY2SXchE5x7s4XX2bmbQSnxXVPnU",
  "key13": "vvfFCmYcHWFidhJiR5Tq1H8gQAPM1GxmQ8YsYDfhCP6VriGMhJtpXE1fz8QYboUhR7XgdfdfQSsTUSFXzSgiq13",
  "key14": "DicU8jVVakbcAzkZ1B9oGfAuBTNZvcfN49ZY1ktJfgzdMgoMacQuXEUSRLiBCu7DikPH194xCxnsPhoQEYhZSYV",
  "key15": "5cVPkK5AB9y6Y5LFu5xa9bjLwCZRXSXEDRz3vML3BtTzn16oQJJah9MoeeBcMpgFRf6gm7riyYxUcYX3pnP7jnc7",
  "key16": "4nMDE14UJt4ofkkeAptL7yAXNbdGBcfrjujzJJ6qqbswvEdTF3KsjdsXf8omWyRs7PgWGRAipci9RwPFwUAfe9yE",
  "key17": "4RD35RHkK7eWUxghugzbLE9xpLD5xeTEinnJtbYkqpNZas7Vx8HNV7jhD8wSwDJisBEJzW4VJPuZoRdUeBTrgMzU",
  "key18": "5LSKErarUBzRSM7cPoPHntkEJ1NQLyChxFwYGPFw3kpAc6FgEoZr9R9CV5ggTsDc6VRrcbSNN28kbyqWQhf7KSao",
  "key19": "5QnBW5uHHnNpCW3rLjrs31qAQt5m4WQ51cbdDHrWKHnh24cSBSDM4RRjxU7h7ZCcUBTcChR4n7hyC8PuqF9fLpAr",
  "key20": "5QmpcaPzWfic1gcJfWqyELQuntWixXM8G9mDrrUEUVWii96yqKn2LraHSTLzvhEaTm4P4KHzwcz3crdv8jKiagSg",
  "key21": "2WHWqipkJBoyf8FFAyVahi4zk93achDdhYKyiAWCFx2hKY6jUnkP43CZp6RjEVtQXzLAGE7L3PZbXTv1kRj9st8K",
  "key22": "5toSZNn5JL5PqgdFbdkSt7yWBwPz9eiWduJxNYWVm53T6LpD9yGoeN9K5de5aF6nzbhYwRzUxFzX6mY4FUdR3pMv",
  "key23": "2o2fMPzeUqM22oAPbHtN16XZouT9C2B3Fi6Q7w46gDsx5C8MPDuvAVvfwoQNrLVUNuSsJ2qGgEpekKD39qPcwHBy",
  "key24": "hZjuax7BHpE5bT94ySui3KhojQxkMLcED3o7WEC26TQs5w38fHcGjMAEjpRoymX9GFBVDBrF8gSPtvwbQSQ1fef",
  "key25": "3YZA3Nyvi4jvu5EvarrrrgwBksLbL9rYCBXAGqQeVs2GqDga8sbxURFmaYfE8tPHbaziMuvnqsz27XFVWvSJjYjv",
  "key26": "2x8ABbJaMiY2jHdzpcgtmLpV3s6aHsZemnsqGV73gYkGcTVarxdU7FC8bhuqdWu6ZVwmvwP2DjBJTmdycsSztuAN",
  "key27": "4GpfXjhASLjdu3fJveYz8EpKnKNTbrbEKFbG7FAYzyaEAiRmgkvDdpd65hLzqq1BBRRA91CYwXy7FBDZCkczq7oF",
  "key28": "38njtoXK1A7Npv72DUKefWgGrqKeSFos9cQc4if7ZgYvstMrEsEH8BXgM5FvBQQTFhvTMg53HBV3L747mZ1ADtHe",
  "key29": "x673AmMa2TL6CunPgnjj6Trj5ycYQ4z95w7ZTF2WLkn7VvUzFNhb8yxGwqZshvefMXD2inupu9KV1AgeHVzEamN",
  "key30": "3RX3zYYKdYiVWZx7D3hXsdm2HjW47Kr7AzzszLWdC1uS4doENV3NmH3w7exDNg5hwyPYJUBDkbHKQdq2CYaYRETa",
  "key31": "2jR3hmba5oAwSKjv6LsmDM33Fi8SXYgrNawqVEphSZjjNjqCkWPjuSVZjnZzsPyPXcwsyU5RYLFAKzNoPw2PbFbd",
  "key32": "321az3hJuVrD1z7ZZBQQLw3Dinja7RRVD6sGLQuhTSXuXiuoCiPMdo22RxN5LaSNsLGBqKB8983cK6xbD3aJGVx4",
  "key33": "5GtyNFMR2XamWjYzDiTa8QPKebTVPCBBBj1nvj3sN6oroA4q4QvDMSEgg5VJFtt8NnSurUDYPqUEhc88kAMLJFiy",
  "key34": "2h4t2LoLzx6Qf7SUR19SNanupinTBiVaHgWbUte7jzUmR7gqzPCsQQ1PCRb65emxAtWE9DUunxSDdE3E7Mqn4GVY",
  "key35": "4cRVt1bSjphAtufVeA58JChBEks8wwMyfwqYCv94GtmdicFZkayp1G6dkDRThv34FjM283TbE6qwULYkFsgSYRrf",
  "key36": "34PXLKdU7oLTj3H9m9E4jAbzyh32QSN9Ubwe5hU29SbEFxu95CjfV1avRac1VggQMt3Lma2JS2K7xkvLnrDjc5Lb",
  "key37": "3WyXutPPSEZyPgvJezg13iqH7ErRvrnHt3R5tbicsqEmYB3k558R8E9RKny9HQgrTt2vdq6zHfH6WUG3xLoXoVtK",
  "key38": "rZpSTwSgwsBpdEPUAKE7XU2Qk81r1FNaTrUUmLCELhkhZfVSE2xJM945jKthyUABnsKieJPvYLizteAcy7ynzrP",
  "key39": "4RQRVBPpmF2eLtRJ6wVEFUFjNFG81C2CT9y9ZkqpUtEAvqgT6TU1Jor6RJxjowd7THZUwe7CEwijteNhUWj9sFvJ",
  "key40": "5CfZBnrei4vCQQwYXLojNHNvqnD2XEpMBayDsFCdWrAMZrsiW3GBkP2chAMqUqVXC17SitmwDqMBEJPz8ht4XYqH"
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
