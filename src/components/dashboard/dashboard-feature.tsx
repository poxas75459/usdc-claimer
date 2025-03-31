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
    "3kKwSFEqGy44QQRPCX3B777fob7GTPWwZULozaP4qczWCyrfHQdoaptVEMZZoBhNRNFi3AanSvMatRUNbqe4up3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6g5z884Luerg7mHCJX4MP9BefdibuhTmW78sSAhm6yNcPG1H1BXSyWgPy4KhP9FrqfHYhjY9GwvoCVttZmk1prU",
  "key1": "2yH3azvtDvhpYQhSDLwFuNzt6vL77Sr9XxUr78hbhtAvCYyBKVk5AWDu3EUYr7PiFJeowbrZxLN5kK1e25kgKMRE",
  "key2": "2fnSKBfx8RHm9j4QdAqxkCeuJj6tn3v4K69M4LXSffUtmmzEkEZFjhtAJr3DKhUqdLRihDekgGemoVHWsEcGVJ6d",
  "key3": "52uffhHvHXLmv16X51jKVA6G3BjdcP5op2KiLGZ2qjWKjLdGknuuwCHDAr1BP66d28BFFiBGzRnEwCDufg3qvyF1",
  "key4": "2XXCgjo2Q4ubp4fx2cV2tHFm58oHeWVKA5Sqn7LsSMeB7PkGJELLhbiEhiEwZrGQf3jxMeibBRQwon3jrAVD1vjA",
  "key5": "4tdVu4goXcBLNSoAJh34f9t52RnAj7GtbdBSTBh8bCQuscQCdiLuvMHu8CUSXDPA9yjCbprjHRYufUD4dA4mR7ZE",
  "key6": "3boNaJg7DVk1fBUfBJAxv7R771r4NDJfn9LtrRusrK3cCvGvxkrpt8oxsmWGwYLEQMZaGRMiQwneM1axu7g28Keu",
  "key7": "58G81nkcST6JUXJTW6hLjFrsvG1hMtzCPxiSMHfHKK1do958vc8mxi8A2Wx8K4Ui4Qm9wV3TaLa8k9Q6c4uHqRMn",
  "key8": "2XGfVXAnH65j1iJx878sn7fMwsN4atRcLGz9pPonhY7PVDSWQ8VjwbWcxTnZr42SwXEKUoD2dREV16XwMiPEHp7U",
  "key9": "ewsdnyu8UgPmrws3PGntrWZNAfEYU7Pxm5xwXTKJk9ZFH7HixWLJRn67KGJEdw1oa3mhq1p8taBPvCqQzVwvhtq",
  "key10": "4D1qpCoSC9aEpFZPqiBs5xjCEDDfakW7rd7KVxbFvjh51bDkJ9uJzD6VwNyobjkzNUPNHRCHxPPTvpRqER9dKyR3",
  "key11": "dmNZ5Kyg2Z7H6rfpMEzam8vwYKjQ2GBd5Txkadp3z3ZCqnU3r3X1FjBK6zm36MoiWRTPjBhZQkFPH8W5XeQYuiv",
  "key12": "Qh5wRazSs7F3qFeLv6NV4ZBKNbF5U2bnF4uU1ofJqcL5sfJbp2RywqMpvG2KCqfvLhbgPKvhNo2tuBkctAcTj8E",
  "key13": "2zv1ysV6Ay57CRjMjvQbVwfXeb2CnAXcTxmeUgMyDRWmVB6iDt5gnErjdswnDw9qr4BvszGXEYFVuRbfwyH7UKQi",
  "key14": "2tY81MVW54J1iGbmufYa4prSvgb7feB6nTQBMn3bGWV6gss7KRsofnzNxHPES9KQ8JCSNY7fmczWn9d1nQPNqWjB",
  "key15": "5K9h7Nwa8bDJd7GTS3mMhwPs7ngey3mPdzw63FmVaD4wtg3XsNzTnsEfhf3yJHjrgmoaVHhsxEXEQvwa1g9XAyop",
  "key16": "2eQkhnS1SuE3JGx4MMoVos4BezqW32mqtqUsmrPdLrJff1CjF5MxeXp6v3byjzwoJ7pFcTDnvmm8c3Ak3g956NMR",
  "key17": "2Aq8PESwbZic2AdVtyuceReGhwrrWDckm24URQ66kCccSC5E9QKtnXifKuywmUZHrkEaUcDJGTq9KaWRFpgNxcn8",
  "key18": "5D1Cu5CzKLWJHSZeEEhpZZ9X3p8yPxEGTwPAd8Rmp2vtLSmd7P9qYyWbUPnCboKAKqvWhdD3B3timn6KZbVZDB7G",
  "key19": "2b47B4YdpyRfaUJPxtZN56r4H8ZumrgGW7nsN2MTmzb7YJ5YALsDY2bz7CK4D82uLgTjDd5pvmuq8EeFNLz7QwDg",
  "key20": "43jp16hTu9ApHkc77qegk5UgZjDASA6FZeQhKzMRgcjzpFNdRrCnYNTLqSL2YnuxoNxo2Vj6WbQdUdB2onKfW1gS",
  "key21": "5WR4bcmBrP3e8ddG8Gf1TmtZrubsUQ1tMeKBdNUNVFTLoWk5cnTDCZrGpZJ7NWXBUSkum2bXLZepY853mEbdaoSr",
  "key22": "5ag25sp4258nSFtk1Cocpir92hazC3HZxFCj5gEGGstYCgu6EKEkPoz3Vvu5Q3dLqWFUNT5Lm177qNsz2HjvYpWE",
  "key23": "3y9tdcKD31eHDJYDuEGtbNykxmHbnhsXkHx8D2oic6gGW5Kb9wThQFKS7WuEW8sfMqaufjC3kLy8cBFT2NNMrBYJ",
  "key24": "622DMqqXMEtJY1uBLJj4Puvy1U7AjAuMcdXxX8ZvkLkmiLy7EUWqy136k65oyEDavRkvcQpv9fwTKeDRe9NBxMmY",
  "key25": "4WkwBzz3G9uh9Vz7u66BUGioyc7sohv5RJwiFw7PdqYtskvh35YLtR6wvs7vA7XHGw9ULurjSzuiFNYGZYA9Q45G",
  "key26": "5wUGdgg5pXrabzgyXhL6mqJyxQizrjRChTue9mD4Uhuv82gTpvwC7bq7hRQQB7MJVvTDz2QAJk87Vr2XgJ7YtNbL",
  "key27": "2fJMRUa9FSBjaZiRQEBXds1LgGEhGumeP4YzwfF5AjcCkaDZqkbWuYBe7LA2S3v79otFPVdDQfbntHG4BNF7YZgN",
  "key28": "3vfEucNhNJJpWeVzzszyrJXsMd6bB3Tb7o8ah9mfMqRnMwS5eGJaneq6kBHn5inmBGJgS3Y5MPXDZ8A4TW9CYsfs",
  "key29": "VFLmccapqRCMLT2XtPnSHNjcNhyocYLbXePBqTH24yCskF3ePqPKMNFEr1e2m27H3ffxHLbDKhRm5zgo1rh94Pq",
  "key30": "269e5jdqb2vBj9GssSWct2Fprfsr1UShDiWLYw46o5gpzufwsUY2EmwDiSXBUQzMkyiLMH8c5B2hPf6skein7Q5f",
  "key31": "5CZWcMj8zxWyKQfKNThp8vyUEDsqVuR6F3aXxXatmi23LY3ua8i1ULnxvxT8puL22uod4VMaXDP2LsTNApBTyfNv",
  "key32": "3YEyDWdsx973zuzWj98mgx66v1u4MxnCTrEYsogF6MBcAUYw6AtDUNxiiA43ZYUaHZcKYVn6Y7wetHHdEG1zse9W"
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
