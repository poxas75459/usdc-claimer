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
    "3VPkC2MBAEM5mjWt4nKct9bJhhSUkde8aQNL2XPC2WHBbGKhWDSYMzvrU15wrPfv54pifU8V4sENZUVxeEYvy7ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vX6WzkVRbDm9o5NsyKbf51znhxkCCMbXgB8ATSEbdsABUBUSh7vugSBbAmVqRPk1a7BzZZpCWwrK6heJTeUyXgP",
  "key1": "r6fWNPT9k2sbYEW1spbnfd3LVZEmR8tB4auQZvhVwQJ5Z3ErdsyH4HxjqW423cjm15JBaZP6YL2v7RFDRrfYt1J",
  "key2": "3AjjDeCcR9ZE8o9kDz7NgdyoMC9w4FdLYa9diGoAzrLZ24tVK2TLQjQvXyN45RtETKUhyADYokEuytx1nmsJWKc",
  "key3": "2S2cZotzWU3QVJiv5GJ3XCSbCAMi1ZRvdzK7uKsrp6HsEzLMACr83NijBRKH3fAz4cWcr3sN4JMyPrYRwHdFwyLd",
  "key4": "2ouCtt71hsT8Nj3VCc4TDV8ECBUJj7rSSbYARH8LznzToquihFHpH75PZHDPxE1gtocf79wCzMmTdP3P7xAQuqjn",
  "key5": "4bH7esM9CsSWUfVfKFaMzditT3WtGKQwX8XaEdc6a8V3RM89eLVsjhsA6muRgotysWCXV6fGvVJHUwew5jBVYAp2",
  "key6": "2umLgV73hY1i35gbeuRjHVhNxfgV2y6yQhfV8qdgLKzUhTmttzcHbDdMNG64U1EYrgiixThghb1Xzr8ZzhfQUn4g",
  "key7": "3zwrkiB3R8CTfkRp7FomQ2kv8jrXjVRopBhXjtkyWZvNyfiGtLvYZyN9jnmULZyjRXn72A9S5M9kDA2dTVxjQfpG",
  "key8": "5vMUnh8CPekC3U9fuWjqPyZ5KhdiSdCpLwWPGpXnmSyksQZni7csyjDn1bzEFf42YUyhku4iBfjxrgXFBq7po8KN",
  "key9": "2yeFmGBS1iqf1oHYbUsabhkbGbGCQiC57jmXTJmSevavYNZr3TZTgG5ZP3g1gYGddi2NxJVnomW2uokNty6CAhfF",
  "key10": "32xvSvVnBURXQYF2Kzkte1FUuNHHVEooT2X2tBJWLztWWbWFvA7Y3XU6kRQpJtvHghdAbyM9wMRSh5xQSisYgYN7",
  "key11": "4qt5qgFcrkEuD5isAq3uboibnU9Fpj4CY6Yk3gqHoPs3pZnCBi2psWX1Xu3uKmn36EGKEu12drLjTWAqGoQ6QZoq",
  "key12": "3ZAw8XrJHGddFyAsg3G49tJXqLCQVuK13a6hDry5AK5sCsiWLNKeDjk1tREvuL6CqtwkqZabooTTT1dbXB7rpFeQ",
  "key13": "3eMfvqLT2vzAYSwd7rJ9AviVD3VK6wXByuDcXeRSw7Gwf8B1ea9fkn8WvPmU7VzVQKve22AXNmo6Kp62T1rkuyLh",
  "key14": "2WNuRhtY3WwrcDJf1VeScGD6cXtdyKoEbn1Ly2jVz8S2y582LW8G7uw2GYinZtn86Bv35EyAK7wnk5hDNLGiFFG6",
  "key15": "3M2uEY6mi2N9RHqK14U9ijj1hHzqDocMCVQ559B2QbJJbGZYtH2y6pgAV6dGqjWLGvZmtZD68tD9CdtUweeF2pmB",
  "key16": "47SYE35EiWncLAD37yJLBRFP2bs578MeNUHSDyXke8vMcx1Gppb8Yijg6Fqhb5DncrhLJe4SwdEpQPmefwCBsxq5",
  "key17": "3askVpfekJSfQzpLFq31JkHVMq7aPYgNXEJ5jgDzWAo7V4xuAaPbgAVxdFAG9ZP9kxyJAcntQAHbcdku8hudepVg",
  "key18": "2U63Q6hmMmVtyeNodbG86Jo76vMeyEXLDA1ibustDmS5NvdJ26KiBnpwyXSmFFsvVGR85LZcYGMaVkGCVtQ3qXaz",
  "key19": "3ViBVX37jCoH28sA524EM2Er456yvNRW93k6C2hikxeBvN7FMSfS6rpeM7eErtSKnChhgQhs55LLeRAz2PpBMhtN",
  "key20": "227tweUadjantUPYSTHYt3cyQ4oNEA5QpFsoiyTShB7Wuo3tpqFfTKh6sjUUWcuJqoK3fED3pSjLHZF9UgEDpTiA",
  "key21": "3vH38dwB4TgJMQnSPrS2XBKCcd7s2kwW39twiWEQpsSAax5VtCLhEUp8EZmB2whwzMH4YyJDWfFH78eari69jpkC",
  "key22": "3D4n2sC52dfi3wdVvoAG7o9uCX4R9be82s2Pbnm1eQ4313kVPFfmfvCPf2mpXiJV3rMb6YbZ8RniRSixNHUZHsrk",
  "key23": "4cUg9Kn2bdHvrJLK66aukURRH3Ux3F3jo4tcRduRPZtB9c39VJKcX4Uruam3gGFVCnKfSbdvkpCRqiV7MxC6rZs6",
  "key24": "4FavP3YBdiiHhAEYj2D3bLDJ2oCqwSnHdNMjCjDBtYgggDSp8zv9wuf33kgPTFpUKw4A92G819M5smW3hFUgFLAk",
  "key25": "5ppLKZPCuhAvqPkVWQiJJeFe8E4rybPZ7VPg3xZ44hdtcYKVMWtyuAFoh4ZE1jRAoFfv1S6omyFskaPs4C8QiTwU",
  "key26": "4pozwhghPUSsrCEhXiRWffbr4Mq71CcN9dV3aqg2tqA7msZBGZ286eZB4wK9VdNSSa4KoPRsqcMEnjyMoETNZZ58",
  "key27": "2UvU37s9UgqAwPvQyxXWzLCpjtRsux8RVqcVT9fehrkTf1sBGWd4GfmgBF6DukhDR7kJXiXnNgedrdJ5fY8VgFU",
  "key28": "3vX2uQbBja6RiQM4hwuuPNSkDeQX4fNoWVcz6zT2M6vCHru6S7Tyur8ket2xNvHLgpSi33QKdtmJCRD3vzWd1C5f",
  "key29": "egqFNgXtdFLtEGCUicVum6tTU6xVrvR4QCcbhN5xdpJD9v8jKFQE5HLLTXmXq9JUFqMrxwAYo6WgmigKVkbRbnM",
  "key30": "3WBjipsiC7xR7qQG73WHzW7QL2uDPACQC6FrwwEoA9hbQ49q1BHdMdkpeaXfgxYvPVGEMbbYgBm6Ha3pDAtHhBXW",
  "key31": "2GmhNumvcieXCB7ntAcUd1aGrMPiax858opbrwtW1A9TkpKwuEcmJyhzVhvWVB8xaZGDDYhj8mvMhtApNpXBrZfE",
  "key32": "3UF7PEFHUy8M8kiSrSEhcaZoxVtcffxyuU2dYVNeu9FuhUTXFSD3diAoUXSHEQkyPLGnFcuoijotRWZM2SKpiKzm",
  "key33": "6679VSmBQY93DY5rWUfct9mwFvDkXer7KFt4B6WEcAHznBL3rYvfx4Jrt7UYKHSfrjLQndqtnh4QBkqTAUnTzEkR",
  "key34": "2Re9kDTZ4dcC9drZtC1gKdjNbZwUQQFhfM3qFvojwdSh37SUFMvfvsJ3HKJXdQVfXaXVEGWkXz3eYyMqb3LPFXxR",
  "key35": "3G7vXrVYW9ehGBiaJQrh5bxmGqfNBFtdTjWdZB6aCkh7p5wiN41csCRLN3X5AscKZkfmFqqQPxDA3JZXzzRGrUBi",
  "key36": "4SmyBfyRzWVZsRoJgyP6NiNWeY4qMvRuSdAWh78ZnXhgucQvwnmysFbESp2GNkM8wyj3WU3DqNpMP5QkLXTq4C16",
  "key37": "3QvgymFLZGbdrVNaieXz2PDWMkfsgTfBV8G4Z596eQspb33992gAD6sRPT8xkLs49HJNC7m4tKyH8fYXZUuKU4EV",
  "key38": "42iDq6Fy9sjaf3xt64Zncm39jxVtieTu4Zg6BZSdwUSY1KCZfDJ9TQqoApp3XJfTfBARDZZVFZaZg5eb9czojfkQ",
  "key39": "4iF9Rs9HYnuDq6RifXyaGU2CU5QBQtc22vzEZmeHgxfDaJqBwgzNEhBiQEpyMYENBEx1mNspQ5wLhVxiKCMkyLXD",
  "key40": "2NoSx6gFaXdDLzqgAnSd2CEXncvBJVXczMgA9AixeStB3p1icYiR8KV6CGuNX2t5zGFLmtDDGYSbvCjn4m6UDLWj",
  "key41": "5tPcPSvzRKPRA6UVkvPiPDZrPhXBUUJsADeCR3viwjDdMhaSkk9vG6Cz8FLQN4yfCLSycdEHXU2CBBijZmdk5yk9",
  "key42": "3anxNW2NNjCE1X3zap8bvrpQYphusTFmqk2EnLEWn8qLNL6nwmFHvGeEV7eiqQfZ4RRDCEL2KjD5moGKbmP1u98Z",
  "key43": "13yf2anE2o9pAV3vjJ473cdkRcC2dVwt61SuA9giqXbHLFyuSG3khZqJoAboHuo2kcuqsX1DAXX3LAKpYjwwvN9",
  "key44": "2jGTuDYDeio54pbYokri9hwwM4h2sYjUURnyvg3pqsX8UHwhkf2bZSPQHjgx1nVyd7wFSf7VSm2zybXPSnHXcSWv",
  "key45": "VtmrBozkynbjAJfo1CNFNnV8nDCTLvoXLCFtUjMtH3yqKcCWbMXYGRP9uezmNE8hgpR64FXJqseu9mv7ZiVEAXH",
  "key46": "2sn3skSSzEev7JndrPBMwyb4JKngLJjPYMWAqx8ZuVoc8rpqKAokwfqqSUTukYisjjdx5fi6EiXpQfpUJ272gCmr",
  "key47": "2n2pz62GT7VxJ8UM1FhKTFBGnf1CfxZ4V4YWwuJjSCxZkqfDFaGHEQjNgvPuzzyNhBVPYxRYWp6FxWWGwhzSRqP2",
  "key48": "4UxTPYBjibruyrkszj4YSHriR1GbseWep1GtdtR8ZkqtP93NtcXfPd3mEH5dXFoRs9rVZ2NdUGoMer5nXKbwQaZZ"
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
