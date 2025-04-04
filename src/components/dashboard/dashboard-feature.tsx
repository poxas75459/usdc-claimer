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
    "mB5BaQns2YjwnQaHMFBYnkFueFewKBytGiWQKxZKQ6EU6XhHzwz6xz7vPqh4EQZneBkD3RrtxPnaK4yxREgvNPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ohZPmzaP5ErVwnnYD9cdos47UsFXvkhczZuwR5wbeRqPNbbbTZD3AhXhHQM44RAk4QvzpKKiq1cK49ixLYpBUaN",
  "key1": "3EKdsRF87sbAzX7RXApyN1TLpLcTE9HRwTV3DTVbLeJyCrDbudoh1RjmP554H8568wvPKSJaMrmn1Subg3fvAKMM",
  "key2": "QRqsMae7BQ2XB87XhUhHFUskh1A48uc5MjL8iPKEAi9JTJu7Zo7FwSQDFHGqM1LhWrWRRHqjqNQaPJ7S3NKFbkg",
  "key3": "5mVK2EHkESABB6nby9qoNjBe5QxGuSX7yuqE3SsDKYZ2YudZU8Z1vLoFhWSBf8TLQJrDE1jMDkBRinpaTGLd6yP8",
  "key4": "3GTNusQESwsJGmbVfiz4jLNkXZe28qAA3i1r1DYk5XDZyq9xks4z574uqRwW7oZrMX7982A1PpiCmXXgQCyXGiPe",
  "key5": "4QNovDjdUD9cCQhG4ebxQjL3hgMASNHEchYuTdz29pZ3fCusM2PMngG4F9Q984xBTwASx9eeJQ61pfhiaTy7cjbL",
  "key6": "5svSmuygSz9hY7QancuB5zeYSe5HNUUySw8inW1QB3N5yfDLf2GixFmgZRhiLyjeh2QvWsAcN7adapaB2ENgux2A",
  "key7": "2AyxiUSEPEDkrznPtH7SYbw8fJTxNJoBJ9L25UKvzkWpQoZKpTFqyBxGf7ip45heU6Z14d8M4ASYkqC5dsPxmeKa",
  "key8": "3aUM9XvrVKgkfpR3kk4FGAxFwvSQrzCw555r5pCCPbCrE7tGGBRfuEQPzZJ29oq3wpZ3pqeSc69GzhQz1caa9Ci1",
  "key9": "5xxiY9ARwK93x2fTcqeuD97fVhEEz6Akn2kXPAtjZMouDW1x3awx5gQhRY1LqqpvN6VN2w6ynVoXgn6CPBEjkj3i",
  "key10": "3wsjPAavFt8naqm39SWZ6Zye22NNXKNdpVDsoVxg9mENjySJhn7Asa8j5j7TPjF8Qo8EGVBkUkdd9XKrvf98kgwu",
  "key11": "2zGZLVVRVVMDgPTKfMJqJEMthnFLXwrUdKBmQEPDyMm1yW6Cj3P8WMwE655ndVfF5pefhrU2poSkrd4AJBYaxoqo",
  "key12": "3GVcTKqnURpSwRwLwgEnS2zRiQGYhYtFBU9kS4wgeWLq13B9ny1tdVxifHAnRToPb3ekvCxo9xVPWzn6hCJT3uWz",
  "key13": "4fX377vFJ2WLAEJYjuQ3A5foiygQ1DnvdhYFJdzhwjLiXFoHzwgyjVA4W3Bcb9Qb4uyQ4bQAkS6oxcBGdcYiZpEE",
  "key14": "3HEia9xkVVp5XumFRLzmCBByRtooD3Ktaihh14GDDSwdQYRo7ZP8Az6JJe5qPGGsB4MxnpkKfQZeauhGx4JAASC",
  "key15": "3Xb3CQsiXs7XKy2LdP4UBQ4fJn4LRMGutVNqzXbFQjDCryt1iBg2rMoCUQj7J2WwjmwAMHH8VrTVob65vj8s5Sc6",
  "key16": "43b9zJ9ELf5ZHZHwZ14Wef7tvU1A1jhD3WmAa1JELJsyhFB5KH4QxeWuGhi4UyfEPBZWGzAQ5R4XVK7XLiPCh3A7",
  "key17": "2MmXvnHSUhQkpNjgEWpiF8Cn74Pm7Az43owyUncBXpoTCUvJUfKMzf4HQcMhpiRJSfRjw4m1i2DHpPnto7jajkFU",
  "key18": "p7gX7AuZE9ufDqk8U1UCKy2N3fe9jfQLW9u8k8PW69ctW6yR4rDwonxpGG4WJ4Tmmm53D7e1Pz8pwetZPLX7r4H",
  "key19": "3yuDx6sfCtC97bvQ8fxyYZrexdAcHB9LFBgXrMPBw96Ua2N6rmAHyY3N7netCzF4UgtkctuMp9ZX5s133o3YprEp",
  "key20": "sCcLYzngt8UBbCz59yNK2pgA5q7hA17c1RoVxbUuvzDU1egUrBpbcSmXh2nZSSX2JroxtmzHYSwC9nory3NMDQB",
  "key21": "32KedRq9EZ21anhwhZc9cmDeoys2pzP1oz2cZ4YZmogFAhS7hq7GMmWZbBWsPwehUAxX4V5ycjFsy1dvpzhxGvVk",
  "key22": "5e19nPFd7U2WrF2sn8jUGdbfLE2qrAuySkijALH7wSLi6rrAdX1MXFzsMDxe8Zfh7tbDgFyjSdqzUytuJF68qzxU",
  "key23": "2nVieCUuKqZ9tqdq7aAo3ymn1hrdQAXwLV3AucPpejeWWSGDM7UT2SQMxxP3KrAb1bEnKHjekVJwpm9KRTnFk2MN",
  "key24": "4vQwyPusfjsLPtEVebRESCXV13xvCAUJ4oQBjC3fCcnwRBrZdymHkwxKecc4LdojpoxXmUWrwusRDHeg31WecWj5",
  "key25": "3nvCM9AgjhLfQQC6P2w21vxMALvrT25rPmWxDkNCRJU1JR4PdrhUGmR9DX3r4Hqdzkmw2dbGKYmNp7MnzCwM7b1D",
  "key26": "w3SpRsQEmv741ZUS6U6kaKH1o3BAoNoMieCsjwtZgMRzJA9pxazsraxYuuTJMa5zBgiw1qZDQV8vhe5DQVna3wM",
  "key27": "2W9YfJYYAhUjUZmKpCW9N14WFwV4tz3SE9wxunnkG6HwNJKcqLLP89Sqvsq1K9x3ZA3FWWhhcidpeiuFHEaTtU9r",
  "key28": "2BERP15LB9Vk6aQHzh3MJgrizGQApTe96JShCKqzLtM7L5kdqwrSZN29ojLY8AyoSygbfjSXk9CqvBy5DFp9spsf",
  "key29": "Djbw3nZr3yDf8RAiyCiieyQ8tct16efEqxgG48L6qQLtyQARjPtaxRrhu2Zzd8XjoVwDG9Ye66s7pef2HLorSuU",
  "key30": "54fcfwWpAiMPFnCs346caJpJivRXjM5HjyYyMbVa6PXuoWKJoDSysKP8VYe64S3SebyWHmTwZiU5hnjFvQKD4Usj",
  "key31": "5BUZuLuEjQGx7QwngZwCrzFAB83ZAzcCLh3z4JbVTjRadASwqxiDoN3irTvbX1keCZkosqcPs6dqXw4RhMhE6aq",
  "key32": "3nKAixNmZ9VMu4JCTyFs5UQmUpgo4A2XzXQPgx39SEZ2y3M9eWooa3FbJAL3mVcVL9XRYYSMq3snTETE9U3KXwJz",
  "key33": "nunf5YqPLk938Dt9uzKZdMxhLfbpETR9A4td7fydqGzmXrzzV9MzbE6142RnpvREMS2Hhojdgwh6PcSHEuHzMiE",
  "key34": "23D8vpeHnuRRkqJMkgbyHgMGLqT1Ac39LS9HDinmH7591HWVGgpFpdjZzBYv2dDcJzhUQoLgyULGiVtdz7SYk3C1"
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
