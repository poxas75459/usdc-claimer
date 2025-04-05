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
    "45d5tgCuc6mFjgMKqi1LR6Dw1j4eKxQf7wC4r51FC1VLBhZYdkzbggjd3BQjJeu89SVSDJnx95Mjd9bca2r9GaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WPEwzHwXVZAbZW292XPL4cPYsUaWNZtvmFqDrKpwT2jxgLGt5YzmBmxwAmYCACdcxXgp4ksKyEWGQCp81LXsbe",
  "key1": "55HdsFrfpE7SqHiLaJRn5tuspHhGNDBB6C5ERyqPEKQX4SvFevenSscdy5KaaAQ3A8VxQ8P3fqN5i9cVkrihFf1j",
  "key2": "SjWnmN4TEUSk7PjUJprz3AenLNZvo1FXfYjphEeSBVCSHxWVtXWmnqUMHUpVD8VFZBX96wEep6U6fNT5AGtB7pQ",
  "key3": "5nE8mRnjyAFTEKjjeGrzZy1yt3VH3bHZuMheijDgAvswXHGiSWXkoxUNGoJVFDzzZDzFVoiitKzEyMn5mjvuPShT",
  "key4": "21hEbc2di8qycp4BTd2wb5Xwguh1Sr5fkdV6ThXCX3o631wCPgDURw8HRPzBEQWUqfQXQp8cdPurKNzBhz6BKnXn",
  "key5": "4qncXhMZ6SdxyTo2ywsKSNT1SjXntLJ6MvoH2ZcBbd24K5irH3jrf46gz3uD96mZpAJmHhE63JymbN3i82vYSoT4",
  "key6": "3KXBdPYZq9HM72X3CT9N3UPohgpGjyXcMm1xXKCfAWRMGubhijNvr7ik4YcMNoAY6ywBnYVF8bric4RQnCQvpm8",
  "key7": "2aLHerG9uPsxzCj1xPeCxeSmR5uhs9Y9KsnPduydkpKWDFSwD4ZreNY4oBev1gVArV8jbJUMmtsMa2U8anaCknCm",
  "key8": "5q7RCGbn9SvTEtwBmYrdeDzGEfc31kTWbEkubqcjhPui22PekHgrqRzNa5RsRgEmdo8mm1UMNkLyZpGZTsBfyWLC",
  "key9": "2DAohJK8fQj8xHEwD3etiPtMVSGr7vjLMMy1CiF4fCVgf9STagQmton4uM7NKjZePVrwkHSvV59ubo1E1BVySTmN",
  "key10": "GkWru4sBJnabhz9swZ2Y5XZrV2ap7ZM3d69LEmDvSicMa2RPrdKZJPqV51uAv8yg94C3ddpLJhQymripeCRQErC",
  "key11": "4mokyKLdeFrH5ZSaoohsdY8MwEGXySWYjmaDvb4u7SD33rpjrp17K3zhXVRTkm5UPyFwbzvQZS57uG7T2y9PLab4",
  "key12": "5fAdZYQZGMGBqdwgtBUnPnFCh6WSNo6nCSNLKpYTmbCUqpffekT35xoKXaKHPkM3WaTJDdacpCEAwMw4bwThzzjB",
  "key13": "32qbzbRwBULK7kQh2Db2bQC5789LFS8GzVMF9om4ahnGj8affBqshKGsrES6ye1X5e85iqRtijjepKgFh4mWmyXp",
  "key14": "5uYsrw2BmvR2p882WYd2tVz7mr6BQLNYPVmp9eVBSocA8UtWoSCv8JAedSugr7Z5NxBMeSX7Eq951Vc3m3yU5az6",
  "key15": "4LMaEwZUHL9VVaS7iDAMdhVBArgKf8cMeTcHc7TSueHUjjW1NohGWP3DyGnkE9oJEk1aCGuaf6uFHhmMy27QJRtB",
  "key16": "3uoCNcrsrTrNCDYqeUrviomEcDY6bMmHxU8B6mNqT5cc7N9Br73TSuhXxZ1PZjaBdkc4SXWK92my1zyma3Eo2dTo",
  "key17": "jRRog1r12hHhuACFsabUdX5SpFMj2639MDkLMXBsj92QE6NXjYUb8ptHAivzMWWh4kYWiHWAEzaD9nednbfWmJ9",
  "key18": "556taJ39SmyjvAWX8owbBj974YiTcusDAoTALGRxDm6SAwB9b4qd18hdCkwY49ooMVUeaHJfKETWyBAVUxcJUJfX",
  "key19": "21CpsKduX3Lg9EBpGj8z4q12sraMEJt8gNJ3MBKCgC22yKQ9zPf486jR6gVPMBo5RGvGUEn7krhptAbna4cqmp62",
  "key20": "3wj3ZNEVqGz84FYSUFL23ujMN6yVwN2A16eEaWXxuAB3RAfiy71F6xkmvYinsrsj2Wz76EyQiDvFDMvtk9GekMnM",
  "key21": "d8vavvB7qLB9qYuAYsChUSoJmdGsuHLCD8XQW8ToDDpjFaG8cfWFX9iV3QvP71udLzaQkxfVFp2cFXxzVst5Ukc",
  "key22": "3oAKjAZX1oyzyD7BJmcfQuYXwUErfmUEbYXxqaGxwrJz8TzU27MAg8RHQoY2QngHEox1LQkMpTabLxtCtfgNfbnv",
  "key23": "4kNa8PuZjaiyd3TdmA74muxTa3mp6Y3dfVBzHwMSkUrrbE3fbxoSCpqD9iHSfYPCGTBXSicDLLgHAeKC4uesFGTU",
  "key24": "3z9rj5R4FRqQm762MM3f9U2N6o6vpuYNNt95X9Uv58KvKfUiQaS6DGToGejipF1qbD8vQHzRrJrdHer8Gcah1Kr2",
  "key25": "w3bzGArF5jicRLjkLd49aLw4846s48L4owjmyzWoyapE412qKFH2rso3ZQE4W2bRzxQeSyYpy72qx1gT6KMBihi",
  "key26": "4WJGiFkRc2UDT9KhhCmfVH4Kvv72YiRLLaY9LsgWeTdC1m1q2vk8d3emYEhx8dr8sFfL9i2dhhDeSVrwAC5t3wZK",
  "key27": "4uHy49hf1cYQSKHWk3ZucEAj8vzjgQhQtGhowpYihZ6bNcDvcCK8q4D7V9uUXaGWzJpqhaGz6mY3prWCWGUrWQGJ",
  "key28": "RrGFXZcP4itsikVamyTdUDxV42p47kXdjtwQpMkY6cdWnEwnM73ZyXFb22kiXVhfqJqUrwn2jfSm8XM6Q98rnTh",
  "key29": "3yeMRUKG2aQz8QW8E4YssmFMHcgMEGu9dDvHFyPMNgn3e7wGjMyWdxjNRJZouk9KdHm5QSEGdRwov2kBf1y8VtKW",
  "key30": "63p7zYUQAcHRizPmii5GWtuc67rr6bt3WW5HqSKRmJmkehKChB5HWFbyunqKpiuYw94UeEejkoJVBCMDGu6AdbgU",
  "key31": "zZVjUHZsC97ouGVPHMqiRZUcPBMmpqQ4Ronz4zJWrKWRnqjqcVNiQGLWvQVfEPMXtEKYzCsa3MambLTJTgk9Tzn",
  "key32": "4KSk3WKuNsgKfijqdFSaaFeJiq5FjBe4MrsdogqqBF3E2RDiZYhP6xJaacM9JCsFH5y9gBpDZAX1ZynS7vffF7KP",
  "key33": "4BqKCR8HXUh1nDAz4MBvYCX6QWgpxXt2GDgRu9C8QEFUuewmbioYLxjryQVGqozWTHodb38ZjUbPcavpEHBPhKEv",
  "key34": "29jsiz54tvv8he6Xxp3k7hTSKFDDhG3TwJ4EKq4pj7SdPseRvkkssUkDRxsv2dxghcTBemWoaRartnyhikV12g8p",
  "key35": "2aBfUDmchSrKquxWTJbjpEPPYo9QGG8KkJnEt93z3UtJvHNov5yz1Kv6YasmpuAapnxa6m5FKXaE1KLAxYUga1Af",
  "key36": "65fK4igKGoAR4BENPkYPpnsQgQJ4pHRdubQhjYzr2fhyFJLQew1gi9vPsKSu6pScigeN1XRumqcy9iHbhjNoaUcT",
  "key37": "2Y9HgHH1vWSacbvmh59uYARzj1tHXc7bGYbtSPtnU8pMmyGoQj2jpzziemUSh2uF27191N629xvAa1EFkvxMVz3A",
  "key38": "58WxuFp48DcoBFiX2XwEBRGmZWhRkV48Ro2zyLKrPA2pHiLmw4YNi73Z9VChTV5HEniZuCfJW4eVgA1Wx4Q9qysj",
  "key39": "3KTNax1enqzDQNiLj48BSrKExYVT3PdMAT4rrm1GfbSCVU7keaznc3k9GgpDD5wpo222a8hQkk1WrwFh5TCcydnf",
  "key40": "5E8oF1fbJ6VtorQG5shUDtgFBtRtXJXix2Draf2zZSfFb3NEBGbbqRavbZHSsNhDDqhJ7hS4vHXjrFigKfhFxycc",
  "key41": "3eZqpPEjMHYgwEuhEoGRQ8nJNdHsayZRpWn5Bs7y7ZkMVsNPDYGpCDgtXrHKE4GT4EswgDp1Cgg48dyDFx49DgCQ"
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
