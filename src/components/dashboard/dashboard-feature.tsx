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
    "4kqQqnSKpK4vfmyQ3PLFeBVcoggU9qHTLBKiixanAuS3rqGjKCK6r5Us3SfwtyjjtjrmAdAJi1HLDn38Dcrwk9EQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUSJ58uMaiRQdXadbR6TEjGSnuYHeMQvn7wPU7vdorNa8gN8zr8TMvXP7JDSciiFgSyoeTQYWhePhSmsxTFy1o6",
  "key1": "5wjor3HiRttDK8RMJ4f1oT1VaLT6Rfj2qtHobRkjm3KK5QyNePT6VM9uMTwAuxJXBM1mjQgMViiUyPKRG8uWC9Ev",
  "key2": "4wpSEgetTkVfKNPEsWEuZNW54MurShnvuWn5NwPMfzU9eSNQmzikfLoc6FKz9yXTzEky7XKrnkLMxPextMF74Ydf",
  "key3": "bTX2aVcZ9g8NoXoifxwUY6R2R6jTTrBez7Zokf27zjXHAQdsKRMPdDnqWxMh5fxoY4d8keAkQLxuSopEe4NYE4u",
  "key4": "4dfVWj5XH3kW5JEsvBLNXuBbpY8DZeUp6cXqeR7jJvAyMuhUSvj9SEbPfu59ib69fMyb5AtwCXqQCG513i1FxKGC",
  "key5": "2nBBkUujgUxAbGzx7AfDhjtWXX2bXxQRZvSo1nfcSLcboBJS8fgpCsVaWU3RXEYGuwWMvBo8QYeXda4Vfh387NVm",
  "key6": "5RXCMyFApcnHRAVb1KSCcKuSQm8FrR6XWwfPbtktG9Vr5KfZrTqWoGr7XHzEyHX7ba4BTorRijw6c9PvLGpJBS4T",
  "key7": "D9Fq47ghS7fJ39NDjLNsQcry4YX5sXo4tPaKNU8rzNqDP9pE8C7pmorJM6ANbBeBgD1qjiqA4tzGLLxi7usQPmK",
  "key8": "3PwuvL1K9YhxuFjmCR3QSAbdBWdu1ZaRjzWdhjzXZYYTgAUZ3NPEK3LvxWJfNfPkKLvo2HDMiB6hdJeNgaJDchfZ",
  "key9": "BG6w63raY369cE5Kpp92M5iZRmZ6vSMDXnvFQtTLfk4shMEgkxhVsoKwZaKP8WVj9zSVgGXtu3VXLdn1vR6ZP12",
  "key10": "32Gkhw1NcGKRKwic7RfSavqqAMcAefRtD3gBkegYrvAQGKJBXpxmUPb9RiVdxwWE6kEE2i9o755XHA8LhPuKCAjv",
  "key11": "2nk7pHLh9Y69KPCjkcoj1BsQPGZJuXLkb9K6nXQqdXCdCuVMVpAD78jgkBgHFaHQUNCjxG64GsThhaERQDp1823Q",
  "key12": "38RcvoV2cbeDyhFiEETyE3xyVNGwvewt3GMEexANDwnNoNcGpWzb1viqLbHjXxA3JGCbx5NSstAdxpwhPh8nFdjT",
  "key13": "DTyFBve9KD3HMVi5jjwiAMemkXsEt3fBZFo4Ys2dPgNF1LmSkYG88Wtqief3ybLoVZxmJF3rNduSqoMXhTgqHPX",
  "key14": "4tswLXeE1ENUWDngpcvMpB3BSAN334GgrCsRmd8M8XbR2WbEnjT6ni3DotrUGEJtQN9UcrVnGw3ZGhSosqK4sz7x",
  "key15": "2MuZyWshFkFHYR5t4EecgKL1kj6DdmxL4v2XbbbkXmtt4sJdG2wr5wADDZQyf2LRyq6gFxSktG28huoBcYNtMs82",
  "key16": "gCJrPEe1yRvyKW9MRdpt2G6W1x3w89ouPcU8ydfFB2myjp6eyCBP8xhrk9E76WqDm8t9Dk3e9AsETjwfKrmqhRf",
  "key17": "54BP9Bv17EdHG4d5Bv33bvM6VNRC9oxt41g4YmFbveZ9hoPMaBvUhf9Fkh8trpZyG1P78wRUPxV3PePGhrAeFCGF",
  "key18": "26Tdth8kRstSn8MxfLwkwNpNxBEfY6npkUMxT39361p42KmLeN7Ukc3ji9b9QeRTs6pBJ1pqZWZwHrqxSP9MRQMQ",
  "key19": "QebjEbozAHHbxn6My4KXSoY5w7XNQ8RVPdyBwLb794iJwP9T2cWbi3DiUH46n8JXTBmKLfVAgfVL7UBtiEqF12u",
  "key20": "2SJPhRti1fYHMAAfPYr18WtJgXRGBXMKmS73Arxb83W9vYaYSpk1umMv83dx3fjiNKxBTJeTvAVDpVTBCcwb8WEV",
  "key21": "58BMDzh4cYYoYadSpy5brAeGWNurNAqkLoY7zfEFD9FSNYtxYDhM7JR5FXNXMYxEkqq5SMYNw7EpUUGHdUakv4QS",
  "key22": "3V1Q8TwUqbVttsdh6pgEjUtLBfXpAhmdjo9Qe1TH2KnpjS8JHruhwefsevP5zzPjqqGz7JT5eTPsi7E5FDzSFUav",
  "key23": "2fXsV2LdGSBCVnUCBKjvVcsBhvfawuQXW3tCTAEfB9tzKyABEf2v95fJLAavjJ1dFMSbjVLRXzE4iSXSn3QSDgdr",
  "key24": "21PeJcaX8kzPjZUYdLTsCr9m7pBEE5qxaUSfBZmVod79AWkuuA6ifm5ELQ9MX8BQ3dLc6nL5z1mRUeNmPpixHqaj",
  "key25": "2g6hnTXhDcH9TzLAxj4afLB2UQ5ShribpPgvwo3PDJN94fTVbkQ7827zw3j9KGi9myQCSxfjPAGnriKig5pCwzar",
  "key26": "4YKLRwJoUwcBXup1AdVn7hoZHgwJkBN9vnqp9j6jW8VHRuhGyqPuEDJ3tLS9eZdYv5ap2MpmyKceob6ToWQ9NCU5",
  "key27": "MCNqCd54XMScWaqC98Gkhc6dqvmMhh2sGhXuQ3k3KvQ4mT6kfMxCkgW8VqMvkUG5fTV1BB1ujQdiUoDnjYMjNU1",
  "key28": "5aJpm9FrFxgPbHedBz58w3VM3ocXs8WsDcRtyKXtc83xEQPjVfvhEGfdpMFCJBHBTDcwCXQFKMpW5PqZ4hGvULt3",
  "key29": "5US2kc3dadvjHUYXtBaZcUvqYfRmHfyFxh1G5tv1TcCMboZ727DdswxEziZDhv2tGGnWEB2gpsHfaCfFZUioWc6z",
  "key30": "4kUidtV7CG3ow6xnibDsRrz3EYF8Pdjz1373MfmiXoC1ithhgKYtuFNTT1dku3p2dz3tFaB2ibjenKcxQs6QHagf",
  "key31": "2tQErGdh5ZGkzqA1GsHcG8sHUAPpoHSPZfPJ3aYTzbgvoVRuFV8AVHvQdg49maFxNEjdiqgZNdtYe4iEU4vaWPXS",
  "key32": "YP6ZAvtwp1FmmzZsjUnUbfzjntgyb2eANRP7qDcXmo4L7yWnVdRmH3ocaRcaGwKD7ChLL861QnFv4pgi2FPGFZT",
  "key33": "64cmpPwN624Mw8Z28uXwcszVX4E6ssxibpRQfkKd4gkVfT8raf5a1NJsEGPKaie2CzVLmTuWLhamL96qDCxEshc",
  "key34": "5ASQwS48s5qgCjtcaippwsCvru18mRh3Dp45WJoynGMDNPjAo6GzHo3YQnCsvTT8RBfYWsiMXzrLSRtCnxfzuwBD",
  "key35": "2aLDik6ahwzt7SCWrJLBLh4P1ye3EAzs1Y9rAiK2ZhenXwjSBMUaySoFvSWDrmrFYfMeKyoNxUQm4wg6NpzkCuMY",
  "key36": "577W8rbiEKFyRXQcZKLt4LFMsLQDAU2sxBG7uFsEwaNhPJd2ecEAYJnzTG6WjJA9y5fw5UcihttbZzqXw7bpfP97",
  "key37": "5NsaD3f7rsvNifCNCevohjpnV9hpw76LfrHKjXUnCQWXjiUMQEfaqM7Kz9d662sznuHEGQTNx49H3Moox8t4cRDE",
  "key38": "5FLcj7YqP3jsiiD8jXXJGgsyzBEBiXgfVfa329ohjf2CBQBCQTs1RBWDBmzoCYRZmDm1MAEbzjtM4YTZ6vQd2ssC",
  "key39": "4ybP5KTqumE8iRiw8TGAbdBC7spJ6HV5BZt6Vz3xUV3563MLXFMEaDfKFa9s9KjLV4M5jFCju3yM8gYboALXDAfT",
  "key40": "3V2WAK4hF5j7EYkrRfDcom2CvdCPqgkffXthCbn7ozu4e2RvoecYegGaXsBkzQZeTp2iWj6PrwKx6JirPANQE6QJ",
  "key41": "2AaBUQ1MVyXxEEn5T2KdUbEmRKY47H9XBs7Y7caW7Mtmjr1FFiBVY924jKhd6yyQ7FbfvK7Y9o7dfWHifZzFXDbs",
  "key42": "5dxvgQp6BjyatFNHHWDTAni8qiiS9wqU9pyxBmdsEcDx5H842KUVm7nb5cBZCQ8sB2UPxQiu5ztdFKdFP6VGcCgk"
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
