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
    "3aH88TDgMLSbxBr1N2k8HF5jvnakDwAcYMqbZpcCUyfM8aHRbkLgYaUkeW6hD7CTztcvQEtkxTAB7afMfDxQCrbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k41kwA3L4Ftotw2a4NbzQcJYSZyKXzHb4BcL2BeSwu1npaWaxsVtALuygWQV1nXi9BQg9ayFZRP1cVF9PppRQSG",
  "key1": "5w6YbMZ5GvWEEE9e7JLHzvp87gKgyyvQLWy7itSN741YXQY6h9tqCh4AUwoP85mT97WkrQaXTAw9GhEt4yFmPBWq",
  "key2": "4RYWcH586amwKuyrRzyoyMa4mcqXvYaQxG6ZbdPBF25Yn6Jo4QuACmLjn1UoJK7sxaQyH1vgFP4jdbsnLgRS3ESb",
  "key3": "3sUMJ5GCsDcAsBAzuap12nEZkeWLSvwTonyX6PuFDU1dnD14qA6BJYrPFW2NSTLJSnZDvzxFX9xMmVNQkNZxUTf3",
  "key4": "2xEWLxH3QUXakYfsk1ptq9q8gSz7UNwXqF63mo3sTJkg1X616pdoirzKSmPfYFMNctN44M4HdxasZkAXC9UXCBLP",
  "key5": "5WmeFhtHT9cFA3pvHLp9Q172ZLNtyHsMYqUScbrbMf1ctuKisjKUnc29fLtKgWnyBgJaBBLziUUdN1SZ36u6iz56",
  "key6": "4DfdGezz2BrWseeRbbqM2yrA1XTqkr8m7gXMEK2oD5xisUt53PeCNFuNm7oqPERuKVH8NneBUwKhx7CfgaiyiC6K",
  "key7": "87c8m7YtEPLEsomVd7AamBdBqbFUDipcR1Ecit7KA7PA4CddYMCeJArYYZSzE8b7Go12gUyhrmRdf1XcajCWqJ4",
  "key8": "3hWd54AQo6981hc4xpN2741CfaErbJM8MXKpPVwLjYBE5R1HHeCNEwFVhumodFuGqWMXMnm56Lis9XYzN8z4wnmf",
  "key9": "qp4SUeELM7nCGi1XySS5o7ocL8TfJR5GHeGqn9M6UoCLwESZsBEaLsPEDwib66FdUm2GonR4bjEPgZLitzYAD3W",
  "key10": "3rFpScNNFw86XHpgtJFJ9KGRMHXNiXNmjAAGka3shLN5T2XYnFVth5R3d54aCZ1XDf2fSKg5zhctEKuZmTXBLZst",
  "key11": "qoz4HFUuvBY2fz8GrbtkSSjNsZyWb7hf38h7ddTmXm6x72S37fwK1afMvMiVpKNCc2XmuMdXpQc1o6GXT3QNJC4",
  "key12": "3msGVBWQyzRSqhkBoBo585Zr1YmD7N7ekhyVFQiggQSSJ4wM6Gr7JU1HBPeCQbHAyEr4BJy7kg5cXWtEhi6Ve8ju",
  "key13": "2Y1CgSB14cyhVQUjEYQ5dRjFp1vgNQDnFFyPtXmMkJDpsvD78fixBc9QPJ3WE4ePjjJ4v535CUjiybqnHewnt45m",
  "key14": "ustmeqBNGKssCZzjUuoVtcD8u8LjtLNYSYjF6sify4BLS231scfAZpjDVfKeQ57b7Nt2RdkTNyLyNRpyhrY7Ukz",
  "key15": "4j45Dib2hZJ5huc6dTzxWLSxWjCXPLqLudmiSXz4R2vMRPxZyf4iE8vrJ2iwuer3DtyibWkj1voCUeKCrLMtRtqc",
  "key16": "5mBJtHVzDGJUroTwKg9ZARN3PD9wx3WhaD68QGQ41ZgMwyZcNZZeH8SdWGRzBRaiDgWDe3Sin3hEpkJfk91c7PPM",
  "key17": "3u4xbxNLCvs6SK8NiTCDPk49GiVBRxqrpfQoSF5HAP97552ynzWJT6fCCEPYVWxyJ7U6ce6Zo8xEPobeTPyaVKTM",
  "key18": "jakfybxEfXoauVyiAFqeVVoDVzBWYaxtZhvBL7Ln2aRJ4u7n3jFAUBEJHUM8ePMEyqK74ywnAWUe6Ur95XvgNCD",
  "key19": "3JAPT5vzJ4QqWsxCm2EMcCe9dfk1wfewjKh25ufRa7XsyD6Ltdeo7WX8Moh4aW2uJ1U13K3nCnTb7dVQVzerbJtf",
  "key20": "45A5ws6wd9d8LfWXSyaSZzuBAgrUjo7bsSGAbDa9RmpmqisopQMkAnjLdAv7wyY5x6kNX6S3VoQj8bECv98x3Rrt",
  "key21": "2f3iFhNcLtpo5v77BVbipBhd26J15XuUnS99iU6xaSYBG2VF1eZZQM17mtUfy9d2RCkj52eqzm4h9TZTYxLuxaSt",
  "key22": "3QPmdBsCxJ3APeU4zoCihjruXU4zQozrbDE3ipKPVUVbrRDxWrxZenXUWpDnWAuLBVzzeM7xXT8PKY87hsVXBB5w",
  "key23": "33YQKmxi5JUNTrghn5dj6zpi8RoUM33xuCvZ4u3Hfyy3XoNzFV4JKhE94hSmHWTKbycKxv1ASyHmefscf4DED8kD",
  "key24": "3XDTMFMTqqXThXpDPsoTPyD4JX3TzJZsLAjFJ8UFsN7KgKd8j1kV7yX3BNcnhUmdUNqQ9rNrpjbztfs583tQHeax",
  "key25": "4LrRAhnGVuFh8bHfhz4qD7z9Wwud1kMbDYaYNNqsFrKVzXQWBLB6kTHBDJyEBcPUiY18UQs3abu8pvjnTCa4dnbe",
  "key26": "2UenHixzvF62P19EBkmSTVQSnXhGFjexBr1Dcv48J3zcDGeXhV5VwRQv7xrjaPZv8ToE91BohYKN2yyBigLTpCRG",
  "key27": "DQBHrzaLZ5A4Den5aZ3Dppy4H8Ricf9azLuFRS32vYR1oYihTNQ7f1tH8VAEYBY3XsKQjmKYb8erNnzF6UELbpn",
  "key28": "FQJS8Y52rt4qnh7z45cmJErE3AhLAmXxJwmvAg3mefaDpTexs2bKqo3YpMxVmSX7YBT6MaBNjfwUGdvCsnxLbVC",
  "key29": "49YFvKv8gGRP54JCAUdxBRJEUKPGuYQg2x8LV9rQerJufWyF8T1GWcMcVPTtGgYQGeVd91qJtxp7yvwHv1ragPbi",
  "key30": "2muJVqn4hEox8MFcFQeXhfe5LC5GPPH77Uey6MVjBjQVSE8irBSBP8UQm32fU7mw4MoEPKGCghLedxLQ8P9rP4MQ",
  "key31": "2YreRufE9P5DWgP14fp4rPEnE5AHouHiZRHgeBy2D5YGbKd5UAx7mtaZWD2dpVKuY8jpb7QPfSNeKo6G3xqjiE9p",
  "key32": "3ucimKywmKnZp7T25hS7LcVvjkGVkRgEW58LVkH3JgfaDd4gLZSTRLCbJ1otv1WEjAUbZArE6TdiwNZsLypLQkJA",
  "key33": "28gbyaWn3uJ5p2EJULdm7dNiPCJWCxHvxWUUd4Fkyhhbrd1dovf3au5Mjv48yBfq9CecAGXW3sNB1JkhBat4Bkjc",
  "key34": "2HtdpsPWx2eXs3cayCRHqVySu2CsCPnZ2kMkQupxB8ezgAsdxepRg7tz2h5cSu4SMUviAdpu1qoKRd83cSjEP8aG",
  "key35": "2A3VPbmtXjUFvFwsRXwvSMUW2uYJ5dawttYNRBehQLD4aXdMDv2xGwi6oVahsnSzwsHegxH77n6BXipfxmn8oMcj",
  "key36": "5cw2sVBkzug6xdevYABwRqJH66S3h36QMVJpWdD4uwkoBe9AYi7iyvR9H2vhfVY2J2MQPcHTZeR8vcpdJxqYG89",
  "key37": "5tKkbEydN3MDhiT3pHQ6JBnCgWtaUN5R7gg9tNZVGys7aHprPtAHbF73pcrm6ZxLDimBh7L8V1obCyUupPwA7z7L",
  "key38": "3W4HqdJKbTGuopYJVEnHMXpYF52MNXQZrTwwCDXj7z36BcXKERof9FnY4jieLD7PqqqbJBBwGqwhmTTJJdwbLp2N",
  "key39": "5L81Az4sUzkcx9rggNa79PqnXiGM37caVEonTFa6SctiPPrDcT6o8DUg4b9KKBR6pkPdo7oHGmRufPRchYfaV6jV",
  "key40": "2ebKyrDyRi486hy4Cq1UBX3KpSQ4Sux6YzFfcGSgaQneREuJHAt8EwNWckhsNozBXnGfuP1B6MzGyX8DShUZ5JSe",
  "key41": "UKj57FMt6f7YLvchSmRZ1Q4T8pKQpdn5SeqdK6L8C8pf1pJ7NY4nL7sggAH3M4NdCEBkY5Qfo7azbAdhYyYUi8p",
  "key42": "5ooF8VxRHMyYADjHsix2YbK85ye4Pnw5Mhx4Un85FBSMD6een8Edxep4v9G95fyo2uABKPrBzmh16nJEd6bU2Be1",
  "key43": "5nrMs3c1sa1wab1B9KPVSwFr9KixhAm6XYHNQYp5RmWn9P14aChzv3vzSZJMM9D9ZBLPeLyzw5Q9LG8JTxzhJPT8",
  "key44": "5sLRuPCS8VpdicHTtyhSEVQfjXZmHYf1ki7KD6E4KNNTQkv2MFZq3LStPuxgK1iHBQ26MDBzddaLp2QW6y2JzZSn",
  "key45": "4jFdtshuRQXMYZnxGeqcrNz13ztHxVkc4yHNH9Sga9eujp18hPsB7VoSykwMYg4z73xWptb8MMryKoZ4q3FVCqDV"
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
