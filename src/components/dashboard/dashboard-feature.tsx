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
    "P5EmKvWN5JrVrUJS2LrddSHgUSirbtdJtrqgdWHWQSrFWAhJdzj5mMgpWhk1yEHfEiDh6jY8pAPEDiWjQouHrta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NtKDX6b55TUK9r2xjhMdfpSYHp3rMz2bUjAwQV3cKzU1YWCJZbVWBJfYyGPAxAnJpy6daMGB9wZhJXXtLcoSUF8",
  "key1": "48SzMeK8cnwYJxcFfyhTmoWjY2EQGZMZ4bvjhpGJstGp7K9qFkm3ZEVqAUqhufHToJbVMVhiBFmjWpY1jHuUdsnP",
  "key2": "4hKATnqZGwTKqXtTkhnrkcqDjNrd1zXjS8VxYr7HoroFpErxeKpsU5cDYrY8fkC4wmf8bWSrvM4zLXxrxVSe9yYa",
  "key3": "2w9k2JRiFbHfCYyS6uDDVsv18uBR2YrDW3Gdbz16fKfB8TWTfBudjcuBGU8DVgBar1L86Hcx2Jp9kwbVyYCM7B7E",
  "key4": "2G8Ra4h8gPbW54NWfqzRAjPbRpqzHd5ABWXU7DePivebBx67JheovgMrJv6F3GkhePig8h4ukdfvxRh4uqb7fuPp",
  "key5": "4TKHNz4M1Eq1FPXYArXB3Lfsxm1Hns957Gd51nvtECHTWLfguYq2gkcaRQD91qgb3U4Kss3BprD9U8mNgxKAJ4e2",
  "key6": "2e98XvfSpF4KbYwFwBmAzENLXN4sUxfsoeXEURH72DT9BxBnfauB6Vi2o7mReQynziYd7kgZeUcMcy4kRxe9eYjc",
  "key7": "3miQ2soxEx2yYzAcsv6vmavV7GZv3efnwtodn267VAhQpVarzy8UhihcGevTNtzQdK4gfh6C8vAQ3kHJKhExdWUd",
  "key8": "5RcXQqDsB6CxVFLnKZREb62uQxcZ2vgP23y2GWh2Z5SfYspLaREmq2cDrt6Bxy9fnThGfihi2iMK6exVoKYUUTpv",
  "key9": "34Tdx1eobm7eN5vAMFxsJEfyjhiz3BMCsz88ZL83dG7uMUXBckQuDy3fGWytM8hSUH3qNfRMJynZdovCGvhmSG6C",
  "key10": "3UoqQKDcB8zqbL1yhjDVo1j5cztAPFyjAhE3dC8oFUUNigEFMQykKpZqBGKAT2a2ptMQELsqJSynnoiCfWfwoDAi",
  "key11": "5CJmUMVkMj1BXwx3zKd4NxB5WGA7tZZKpB79tYFtMxjQbqvNVq8f1LJHAiqcURhNi7n88sSw8JLwoHkbtQDnWvXr",
  "key12": "36rSjFtBXdSMn7z7zwDedrgjenxfcFnde9RgsG4geMkcCit37NPoXYYcQAoPRCMGc3rmLsi4ouTMLpAJoR52BZzT",
  "key13": "TQQyP8BuEyNdtgt2pzasj2Pb7cTCg3dhexXSEyKFyeydVYP1ZQu4WEMQm5ohvVcaVBLtuUapCQ6wMJefm4XyKiv",
  "key14": "3AekCUttWdZuyr6L7Ffn348FGzJXMR3S2AtB6fFML8ncz2Kz1gYXvxrkeHxm7TiraGY7ZQHJzmhman2AuYzKkx4F",
  "key15": "4LRgoHpG7zVHUKGNUjvRNmRfuxMvCRpAWJ7pTavDBnJ76DkVdRVif9Go2SBhw4d3PKvaP9LUN5ncSF3n5Sc6SX6Q",
  "key16": "4ixxtHTjGhxQ6H5Eo2iq7qkGMmNpBofExaNZM4MKRB3tcr6FP7xMo9XyWivxJNnug6vXLcEHqnE8BH7Yckifa5yp",
  "key17": "4Anve3ezPRCwur46spkn4ZUVLxZaowSRcthVAwzd6BS2V8dzFSfzNxfXCgWnxGTQKtqchxBNd6H43MGnYY5fTULu",
  "key18": "3rqcbxdpsZwfxc3g4SfETRwizJzynf8ndiwJjLNQGvGrKpSnwwFAevtoh2Ls9mERK3feCP8kBPHpjy7hVzsPTWtH",
  "key19": "4SjiCURt9CxpZbnUV78Uku5LG4Kza9Uc5PBVgHyzaD2wyUuZvs3cRaabKXXqA8uWsNkRcLi2xkCc42FhN7H3ZJ7x",
  "key20": "2hanAyudWfqN6SaEMEbSNFTLVGE1ozzVCUxA6Aqy7KZv198gVWNCD8ar3qTRKoEcLMRzq89d8bKXT1RsvTXmNLMi",
  "key21": "4jUpaoK5ieJxDyBvtpPaM7ovMqwGuoqVuXj6aWvmBkvzMa6g8agBAFWiZjbS7XQSUd1C9L7w8JbPmxL9BQn1wspL",
  "key22": "35o119ueRXt4U1WdE9ko4rvFGhHcAEAkJNvDnkprNrtVGngZQMuFAvVFqGQttFsMtgwxm7PoF99X6EAZwCc6wcoJ",
  "key23": "3LF1JN2o4fg4md3DaVtuG3PjF4hkgDhe65zGUKeXL499XRwE2jXGUXE1oU6V143KZWFnbhFbGvDazEjK83GRgjr6",
  "key24": "3dBauHRDaQeUjGV6wi3gv2h6dvMwviqNf35zGLSwqmXSBzNb3r5X5A9rL74HJBa6nEaeKN8arjETGcmzVsyUWw2d",
  "key25": "3jiRcxdafk7tRGcWD4Xb6LDrs3KisVVddoxSFGY3TrCspUS7jSLjxg6GoMpQ9yFuxmpm6d9eCbY3znBKPypBvrrZ",
  "key26": "4zvd6fwnNUd2CVi72ixkAJ8haQv5ir1n9v6hLyKMGkVNEFMqXMDVNUYdKh6FJBu3qNkioL9AncKiwHoGNQmHxweX",
  "key27": "5wkX6KGeAqB6dFn2u9Y3CEyLvMrhwMrFPgZ5dAy8wXUKwCkohM7rLdJJZ1EN47gFfZC5DGfSHC1uvxdSwYv7Bfnt",
  "key28": "2mnXLjaNqeNeUpad6qmrf1kr5KcCgzfEGo4NiooDDymDRieD3BiytoLbDArwsgRYYoRjMxTKCupB4Bhi9a8LxSrJ",
  "key29": "4F3Macp5jvxnSQJppcnTSkTy3DkH4cRtY6UjHS7gr4jA4vgGXT48RGx7yxTB4JVvK3zk95suNZRW4Fnb9rS6sBsm",
  "key30": "4UipKJvd7ZYUxFZsatjKoH56M1emcehXstu9vwWKQar7rs156afkuZxPucvtLnj26W65W4C54qz2Y2pBNBSrdD9x",
  "key31": "4844HjLHw7FmhEsGasobacqX336byKMGiFdqREWzYc2rFSDw1JJCidBkP4oVmmyiZ4dWGpYr8FDobR2zYoXfRnvZ"
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
