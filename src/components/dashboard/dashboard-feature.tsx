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
    "4WJJnNF3GwT9YbvoSojcuv9dRjhw6VRfKL1vR5ErhR3cHrJpowzahiYNewzVNrU4jRrhdnAy95ukVsmDhzkE38Ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vu9Lc8qWFbskubykXhwTADLQ9TWbjKrZTrp6wRVK3G1p1wxbUDcCh1hMvDzXyv52eFyy1NuWJfkDGqHsToXJNqd",
  "key1": "4s3LPKzzHPCQ5dZRKM3EBzFZMntCEjEZLJyV41zSngFpcsp65wF2YZZLiXd7yUqKngB1r4BLCJ4LB3PMLns36Pbv",
  "key2": "3oPVi3TCgDuT9Lj4kmqDFP8Fk465AHBBFzLZU86R9q3Vun3Y3PCpbdR6VrbCayWrki3eyphWUAA63AmXwLo5EnVZ",
  "key3": "5Hsx9YcGSh1X2ncTg2PQi22zrXgmCDtT4Synhuesoy5UZsz9FXZAbMkHbpsJCXUcPZL9BZCcmhMBLCHoyvxHG2hw",
  "key4": "21o62wLhQYtJNAFhb19kHbyGd7HpP13kiQeoePUeCH7hd7TqeTW5sT8y6jeWfQb3vqhV7f1yRt4L6WcaescA7FEx",
  "key5": "2KYswmHAp1LzXsw6yjvBK5zXo25sZerXHQJK8Pn8UsS8MtfkhdYyAAZiRttHwFKjH68Y6xRAcF7jKyPCtKmUXHvq",
  "key6": "R1WTd6gLuSAFpzt85CswRjUvqShhxHb54TTk8bBGKeaaVpfTQojTEMeJ6okawERzWgbMCwCGQdSXqaWpEGGBcXe",
  "key7": "59iCzQpfyrHfeAEaePtDtPBzFc4NhAP6mBniwVjFny8NT2d7XcdCn8fL7ZzQqn6njyCVK4EeteCeCRcXopJ4ZCDF",
  "key8": "5uED8LWVPqz4ijdnJ2Qut8PwNKwVCWLDdUYnQ38UdKjUj9AaUSsb94iNwMeDeLzVKa1QSoRS3GwzYWR8QzTGzFY9",
  "key9": "2HrkYfVphKxJBnYK1CdTioJ1quVqdcFAYh5jKFgxVNcC8FfmgSaPoAdp1v5JvMQshGGzzNBaeuuyC3Ny6N6qRE2m",
  "key10": "53x8Th8uzwW65We9JDGrzQLwqMday53TNFK3oQvsPJvCZ1j5S8pSCqwdD1sQTpNAZ1FBgnbx8ErhqP1SPTfGdqVs",
  "key11": "4dUmt2tsozdthX7yZuka2K8EBk6pYWwHrEHJR9JcCeqYnMjwkLRmBwFSLpdTe2cLUtHBxWUVgN1vfqYrQeS5bSor",
  "key12": "4mnJSKEqrm9i3FjFNLxwS4awxrVMEcv5nWLddVjjtjbbbFQj4aGjhqZwzUKf4QYKJEccsYLH8EMExmidS7iRd6ch",
  "key13": "64D1xiBzTN3pxqM53RWTtoaLZwffEvesM6T2ASbkKYHwA6ny5U9TyeoKfL489Y9D6NXzWmaCuzVABJFNrqmqvPSF",
  "key14": "125hbutvrBrE933frNwp5frESwrefj5M9pBtE1sUcW3uB1QR8o9kRaHhCtHoGMw3ETz2YS3d73mQHxBNoBxpUXPZ",
  "key15": "2Egwzei1kSxRCwzKAwHEk6TrBGL6TBp7oyQuojP8iFyR36JMDjoQGW7PpNZTFfEJGSq5wpJtYe3WLcLvw1AY5785",
  "key16": "5gL6PduSmnfBui6j73TGga57zHJcZgxQGuuZyXrtP793bLJg2PXe9vXbJxnpL9JShjthXZMWSpGxvdDfwedW9D25",
  "key17": "3wd9TeczFnm321AdbmFYXYzKMRo8qm1vB7WBgojRfZ9qLc8g2XgrZnET4e3f66RWrPkXLHMSGqBxfUzmFiQdJxaZ",
  "key18": "3DjeLcn1bLopF1RcrKTpvSshFqPk1VFhUpr2b8Ryq4T8PwrvV65671w1Vb7jXbDG9vGpZJMSW7xsMxBPXwAYoJHV",
  "key19": "5bFiFkGpNBMvFpLYfYRLXFs3wHVTiRFWwFHdu6JFs2agvZ1THZfdTYukMvPpCBMsnD45TbN8vnqBA5EH8gHSnyV8",
  "key20": "4GaEApHshriYfRdKfqsNXUqxHoD7MX9QA7sRvuZ1hodqfB8YFxh85NQyWk9ABSJFU3PCUXuHS5c8GLT6M1mL7ync",
  "key21": "4k5uXWBYMTDdgu1maDe9oVZa5ANXzaiv9uLwJwCz6qhaRtwLyy3q54MNHmfoMiZBdBBp9DJhS5LX7CDa3LSap7z4",
  "key22": "5wqwsqDzBQzvcT5U6fTQjCj6VE9UeJqB3CNVktKBy4gaUwof4WuDuMEDSQs3zfngQPcm69P9ikDszzWFMf7WcgNs",
  "key23": "VuPLk38Hz39pdQ6qrz6fyB7BQF2tNVy2YRUVtosV8FqUAgsXTF3gzf7g4P5dSFgKqTgoUhLswx5Nkn6tPqhXU3Y",
  "key24": "4AQEjUXYgFDaEy4o673wnxuPLrhDjm8rhBFQbMV3P51Cb3nwZpKxnfowBiBCU1NmgiRsv2zmTFNbd6A6YfV2KSxo",
  "key25": "d5te94GTqjAm3JZvfPJXVcyjsmeMDYMpxLDbUWdZJdF2LghuLyGb7aGsErJaNvwXDExXGM3WRFsrLJyjfWESE2V",
  "key26": "5KGHk5S1iMkuSJagxdh4gR9qWV6CcWpNmjyC2ywp3XLXqwwTRs6pkv4qatd1GWrtJdhP89g6CEy3YY9a2YXZziQn",
  "key27": "wevDynEQpDPY1VzjFZjeJnpaqkSTbTtVa36LGu17VP9UmK8gPh3j5BMcncBBakb5pZMZgRXNqGqHxF9ffiAxhxX",
  "key28": "3Hb3LXgPb5GPB25zJ9HD9xFuVNsqhn7JWxrkdANqVsVD3yqnWx7yjKLE7KGSgoMZwpqb1Z94xHJ3HrQsEQFqtgzz",
  "key29": "3PVZaovYn4WSbfs6fZJiz3PUKBhB5o4rbd4X4XcGSaC3dp7rduMfEEyhmWGqFetuEyREcewJjo3mLVj35YFfnsq5",
  "key30": "4zWVyJpJnUUAPvB6b9bYBN1QGgg3JiR7jE6GVwRDEQMsQqBwUMjvHjZvcaMsQYrVvAU1BFkoj9hYw72fBaFXD6c2",
  "key31": "41hNgPwHtCAEpJZ9e2HH7KurHS5ey5TAMsUCtkGKySwpYSGdg1PUy2cXFiyaCTTTjm1KjAWNT4z3FPEFXJYQ86Mp",
  "key32": "3p3N4DipbZKJQ1jufKS2Y4jzu8xLQ7tVW2YqBQEEH1KdfbNC3gqPm6DSG4TtduCQ9WsHmFWTZNxvhkqNHSaRb1XW",
  "key33": "Q5dYcRsVHh94qjRLsQQfjQdNNE3EqYTkGNSiaVRKZxiUP6xCp3G42v4eYUNj5QXZrQnQuBLdy3dfhWa5XpKjAPR",
  "key34": "5wqbC5v9SVXT2qGuobs68EUs6ePv6c5E5tHq4CztxQFQQusA8NVzJHfHhbSpgCymAbuhzuWQpptR5NuNAycgbrxr",
  "key35": "rMrSd5z7CkSZP8bcsgZrnjcA2yjgmgUeJd7JqMeSFdB7ddePSa8aSP4rgFip58V3jmY3p3uizygYZob6uGb46Nb",
  "key36": "2GZnhiZcCPYYT7owjxhjsaMBPeGk3vD2Hm3rhu46SMLKm4GzsXLakzMeutqwrcqL6cT1n3Xe6cyEFLHNAHdMyzwj",
  "key37": "5kRLx5syWE5N49wG9JQYgZSVtqH3Z8Fz7kW62LwrD5TJqN1csoYbrnr4A3seoMx2hpCWcda39jNAhys746zGKEtw",
  "key38": "5fninWeyTd37ciXu6ZWKktR3ovngWrkGraRz9dHA5tsZRUAGmBQ7zg8AAWVbFP9KvuQhCkqxtMXauHPndTR6wrzj",
  "key39": "3RxsXhiwe5RT7bbb25HTUiugTZVke8uRu5Ph7tKLSY1KMHhug2qQFmzvJwRbxd7G9Dhj8jMRwMgDAHDstzcXKtc3",
  "key40": "21EqYQjyZ46ahGTBWofwXXYtKC19ZS52CBYHyp1WnxoVnaBWF1Lr4FHmUyjA2Q3E6AMAxVgFJdwviqVBSEmZ5xbd",
  "key41": "2rLtTPNAFQhucUudd1TAfa3YRpybo1xDUe5PFPQLzPZ8AFcm5obYRDdquLV9KqZ4Hc5MuRg1rgqQXm381dqsSaa5",
  "key42": "3A9p4FXy28oyQHmgwfJhZRvMA5yduheGkdj212PJYdw8N26ypHGwRmA2VKm4qtc38Frj59JwWNrY55WiGPBfj7cv",
  "key43": "3hE1ftDH6Rx4NB6nnHGZ2gTM52EnrdzWLiYqmwJGRsdSCrnbWGPRusQ1VQw9FpzgDziyHi8YrBKeZmSahdYBppVU"
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
