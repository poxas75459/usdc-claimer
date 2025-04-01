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
    "5a7EM2kwnDvSAqxTiHGxRGmBtS21q2MEqZgZbwnD8zQ3zB4S3Pca4JseJyADXnd6nc91XamBTRvEeBFgS4cZWfY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqYptiXFBYhfNC7zt8rq5V3aqXwmw5kgvbbT1ei5GAkXLujsveB2EAQS5TTTgfCZLs3yjWhczNjoGBs4WBsu1xJ",
  "key1": "63gzae23SksJ2qQHQ1ioWxcU7aDXxB4mKMWKr61fe9GpDTjJMxeLCCTo6rwj69xFRWLQawgQSvkounPo71rMz1NV",
  "key2": "2JTfuWu3gFm7iwzVteBeQidgoGvkNTj6DXWFKLVmhhbhMgKpsvYrvvwbHw6g1JosnVtMXKRSsRf4batVZNU8uhij",
  "key3": "5zUgf9zCbVk1smGEFxCoLLx46Y6cyWnSQLx9Fg17j4upJs12eaVLQdi61etuj7GTmTS4ZbWdm1Bs75BQSRjCYggP",
  "key4": "4R91BRTC9xchAX6C7UZiL6brYzRo1pxksHaWCYuwCZBexxBVfdSPNBxAyK4tdS8DaJqLxYQAFNXSys65HofdW2LM",
  "key5": "Qf6rpb3c4qjaLZjJRze53wEUr2vfJ77hdNBENDW5uheU8hBkctto1m9TZQ4uo3sCbkD1MpBwy9odweo6UtVbxuv",
  "key6": "62PMYWKE9v3rD2fZWTiGPXxfmsrj28UF1J5Q6kpy5w9nSNMmVQXkwBKnDfVMarBtaskgbEr7cVLsv268BNku72Cc",
  "key7": "5YJdwNRRrYy951DmuMaGe4uoxJD1brmpc14rVBkFhQrRfS5y2VGbtxc7vyBZNjia3C9FY9yhrdAMyHjZ2KMcmXXZ",
  "key8": "2odcftKWtTqCnwdZZn8kV2x6dj7FN7gnwLvyue8yKB54i4N6DVGmWcZfCJADXpPj4m7XdmwGX4GUf3pnVXCLmDn7",
  "key9": "kZoegdvVDaAWxEX8Ha9FCPayeXzZUvjpf1hYHRaGrv64ii4qJxR6eHbiUfwJGYQCeGiHGVw6qFJWyAMqGE8ek8Q",
  "key10": "56KYDpGk4mfZBpgXFgsZd2xXoRqVBCXn8SAbtjJN7KmbX25xx3pZWrCDhekmeXixiqrURrT7dEQjZbg72NHuQMz7",
  "key11": "e5cY1ZLt1JML7orq99SrpPvypX7fw1SSJv2Mc7z3zZ71RbMSrMaHvbN6F8dYgusHF2BZeSCAnLaopaem6DHwvtE",
  "key12": "3CvrdAMe1EkvvHHRUS4UQix1iSHUh6J6JYP9LdLm1479WtsTk471ZPJGTJyTXgZNhSvqv9Jfgz12Jb4voEsMGZXj",
  "key13": "RHCgqzav9shJMJQ7gHKPsFf5vjRwhZouqcKHgGktmyoJ5uEUwCKbc3fojFTBfHZV5dyaUixpwZiv5azD4sPLXTv",
  "key14": "27usV2m6HqDtMUMpMAFC4gh8Nzve7b7gFLtEVnrZJ6ZytUpyASYk9yHUcELLkJ6B6kctqJu88SKCrkWQTETFx635",
  "key15": "9uXPgh3ZfDcFf6nc4uMX4mL2sc5RReY6883ZmPJH5RYZ6pYzwVJAR9mHj3r7j4wygrkVFkm8AFiTrQm2VCT5EdE",
  "key16": "2gMdTG78ProN45Fr71ThgdUYkHysqtYK9vB6czsimRcm5mWJNvm9deuoF7JwWovNxfk29HhJ9iwTGqfEKRA7twae",
  "key17": "Hw4tYrZyyL8Rs4XRkMh2wR9ZrFfe67hdXjrSjbgUK8t5TVXov9R8Sdw6KUSJin2kWZPpHXMTZpwQbfx2k2QSkkj",
  "key18": "3ohcpqfNrw374XbDw4hpScMbMzHq51kiCTNhzDMyuZ8KJftXxanAWBaMd38L4riFcDgeHtKXihHbNAu6jYhQ4rP4",
  "key19": "4mcz1i5qPcY1VpJ9z4hvJB84G6rWi1CAWmTH61gsqQaB6iLSYa4datMxCusv1TKSVDHq2816HPXWYPhPNuTz4woY",
  "key20": "2ErWYxgwcrkh4CjeetrfgnHGpZdJ9CRi62THmMRLaC8zXfG8LMdBQdmiMarT5nsptW43xL245bkpjvkoQmoky4V5",
  "key21": "4gzN9JyD9t6HLeyxx5mygcFj7PMbikcQwjfQyx9E4EBHLBnB9YqGPbELkXAP5je7CC1YGKHEwaQeHM2Bz3osdJRz",
  "key22": "oqBYD8uh3ocPqdu1xU8gohGPkA4v4ss38XkL3TRgqdBmsFg6WNj5G5cxweRoR5AMAbYtLkBdL8vhyNid3C915Sn",
  "key23": "3RAsKCscmRQb7bJrrP16EQfNCaPLkEjGQUcCwABFeV3EiyhfKQF9ntEL9WZMuavRH76aoQhWeqvVMXxNbnW3nDb8",
  "key24": "4vMMNayaVDP5wHCWrNYfXE9de1bFGUX2BzUW3w7nFxHDfRTCgc75otHaN2h4EDBSBRCMH2qbd3zoxJRzw4SuZEDU",
  "key25": "5mMGRnHAMQHBnx8MbNMxjELJbUjTfuYmAh8cPEDiT4Wu1YyAG3z2fQkcWuPyvD62TAoCxKycrm8EvLDEuaxFpxRu",
  "key26": "314zjbmkzMTQesiQTdrxfvX7CTXj8tudtLvtHnKNTivJkm9ZCZv2QpZvYh59pdkU93yvESXpxTr5nMxZj6ot4euz",
  "key27": "5SMLddkpjFPa4BubvdbZDvHLLFFZMZTEJVshZnySnKh7wdEZPdBLFVra22f9h1dYb3vrv8fCNfx6nGJJ2c7V9VBj",
  "key28": "jASkehrzRpHTJSPg51TYajGkkJmhFwLvi8WSXAFkDkkJLRPzRjXhCXy1Eh1nVURF5bxhYNEhUJipvshW1EFvtDj",
  "key29": "5pXf3A7z2YUmjaNtaqZd6nM8BQ1ecDXighLw9V8ko4BvsWJWTWkD6JGbTngEo4xPeHrGW7HJ7ttSJEURs2eXSpfj",
  "key30": "5trBcQYFLnz1EX9JXJNapxYEXiqHz5K81ekP62N9RFLkMXMbjefvPBGoMTJBrik1ey7HPQqR6hAcozMW1zgTkKou",
  "key31": "3JTfqHrhVGCzGHCjCFgmTFH53uwcUtyG1boWpwQEUcGShX1dpauNxpGxuzBFSYobshcWFCrhj3Tn3uULx5J4Ufvz",
  "key32": "62gvjKmjA1oemMwrc4ob5yp7ic36bcyR6Jqjgc113MQ3KPhjNLWChwz5SsVRNWEqP2zZpLzBPAURAgGdFfWTWGG7",
  "key33": "3UN3hy5PUWD2gbTHQECJdAimZAyENkMFXfwgnjCcT48SijKLpeWWHgs3tgrApgogxHm8HtGghQC6vpad14K3c9yA",
  "key34": "3Dm879GA8AfJsy429DGskVNKw1SyLWrvuqpFMM1aPGqi4VrkZDNPufi9jrK4Qrbdm4q3kH7bVWah4zwsF99c9si8",
  "key35": "4Ec1PYLzPGkSvXoa5D7mGoYH1U2TcqnWF5NDHSn75UmQx74ysfLVZHgdoQqwe3Ybz8wJxY1bpjMbGKewj9Aytfp9"
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
