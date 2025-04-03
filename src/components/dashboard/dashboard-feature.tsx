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
    "2UrNhbREBfeAc6RB2xAE8poktQ4JFidHTqKNJ6ENxJ6gVhDLPp3Z4BN8TBbBWNHUtZwiPxJQXjU7qEcSxbYh7QCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvbp1wNXRogT2eg7E9w3Lo2h5S815H4paERiXcjuJKK24cVQmMtxaGufDL3EF6dhThSAzySqE5d4qEG9swXCGGL",
  "key1": "668SGtkNJTtLmABUHzvPX5MJzjdov7EZe1nfnXCCRhEG1HHn3FFWv9BxjCX1km3KCMMxpQ3jd2fPHvW3b9WXHiWg",
  "key2": "2J29jD4qiin9ycRqVkcZD7HvtTcVXZ4vaNzKGD8HBXfH2aj21GyhrTy8wQrurkppFGJyregzxL2PJP2JEucrC481",
  "key3": "2jWuQBdkt5K3C11Afv7tGKS31sDRwL7HzD6Wzvh56aGW6JngdkHEUtzdn82x5gF73XVkkFcN3WuPWyxeVcgFGxmB",
  "key4": "5dGg34hrH2khAfsNorNa8wFhLjgsRCZSCVB4kNM3tZXyWqMZrz6KX5EmWS6JdQbYhyAVJzzrXwDkcQYLM2Ccs8Za",
  "key5": "2RqnePUvzvfCxYHu2AHHJ8PiVLctVPaZJg9zCe7EtgtEb7TQ1zkHuTxCUp2AaFhi8piNBv9FzLQ82mPmk6Wbvgr4",
  "key6": "5iD7YHzYepWN6MCukxsu8V4oqQxBQ98CLa8kU7ZGybrL1cFRF8VE1Ff5HC7GLSSVs76Q22EKrk8Hn9CLMCnWb8ng",
  "key7": "242z6GqseNu8GEvWDhZVVnxDynNuWBighHCScd12r5A7Ybf2113r2CU5HR6RvFixmoFkz9YrM7kySHsgrA5heh1R",
  "key8": "PS1USY48ZFHQVbTGN77QB4Mrrb8KeM1f5MSpYU2X7pmQ5ee1FdWpthFJ7zeTMdMpjqoUqRD8XXQhSRvUqnPAGjT",
  "key9": "cN8HJUtFU18TEx1x5VuNR9VteGqA6sJstbK4jMUmdNym3aujhoJL1xWrfh1sQe9c67aYfTkZLZrJFyj2b7pFP4m",
  "key10": "5xSuNZmbTkujaPRoVLYrM4e86a1GGFfDscFScm8B1MQUv8kEJpZSmLDNw6zaVQpNDea7hbaFe1ZpwtQ3pthFaMK2",
  "key11": "4umDjmeA73hB2TTXfiEZsJj9LD4DH9HSoLPsPwJizBBVf13cHEH4cFLUT16gxQiKq6yfe5cv8MUdELfqtu9jhr7H",
  "key12": "4pfFAXgqTGFQrozCp6kh5by4oQHSkwQyErWubXui7CMF6jhjYWiHTwnAJi8jrPzpLEs6zCuW4GWrQ3qGwL4UXGtp",
  "key13": "26hYV7rye8KXG7K2ARhrDbWsMUVbGffbBGzsgSTrk5iSzpHn7PrTSnJV2F865AkoNSNteHt3xezr8jNDGCsduu2n",
  "key14": "4h91ganjertjAzNKsaGeRkaHQK6xEFZ9hVJ5w1L8ojBoYF6d4SrYSmBdbfQ9r7mCHaudNck66GF1P5EaD13R8ufx",
  "key15": "3Up4eBTp6ahP9wawvD9DmTUYmnA5xNsf8wKqwN9zE1nSDRrB2dx5wG9jTcufdZJmCZUCZPK6FspDuSKiJudgrt4X",
  "key16": "3K1XwtzjbDRHCm9ZbZp1i5agTWgsnLsaXf9bEW4oZGyCNJ3CLgTxKztih2MHKxFkuVQ6KKVrmd7wZH1ntVmQMLC2",
  "key17": "5ZSUKsDUYRfFJTxrGbQKKx96LFepVUC1FsDRHD2RzKg6eufHvhqSsEa3wHEaAuiqzX75KSLQ67dUftHQbe4cKAKt",
  "key18": "42TxxYbWZTcMRDGWyhiHoW1JupgrXAeC8n3YUjGGxb41qX5ME8qJEBeoFmm1y52fatXnLBGu4Picj9CGoAYztwkp",
  "key19": "C6dgptkLS5VyTzTRVNsh34eB4o4CSstQYb7tue4zufuNuYfzYi62S4WacR9dnN7VUE1CuT1GySbZirykU95qw6B",
  "key20": "9jqsQjQm6XGA68682nCeaTJCg4T3LdCGTBQcWhb81myppAM9YgXdJeAcDQa1nL5EKFiFReJChPxSNnTRZsm8qDv",
  "key21": "2KT9ctLgdZNKGuFyRK34jAqXFMhfYcDZHF3QaNwvnL5zGjv1qNmhUDfmc8Qc4WP4MTsKEsaMHk83SGKpS2rcmLZU",
  "key22": "3j9ypjqbnQZpEk7XbK1PCeteayVtu89kEHMwjEQwjHuMDNvEfAKkjpLyhbbM7R5qN6hcrMyA7SpNXyhR8nPHfrqr",
  "key23": "3dHE6kbtG8eFB8VPKiadEcHJKrmBinysxMRuBP9f4aAhmKdnW9Sng2GVqFvXfsRYGAAzoBDL5dVYeVXThbT81kBb",
  "key24": "zy1kg4XoDJh4bSLaSNuyTaZzRyhsGY4ABPGeHAVjiY5Pq7Qeyj9yhFDpNwwfhy2KXYXitqxiRL2egWb1KxMTmoG",
  "key25": "4eZoogddDgZ75ij7iViHToWrZzn3Lso6zx88nxuScYTTyPvdw9bJV6mx1ozqcBhzDWGMhxSAeRct71RsW6KE3Ea8",
  "key26": "2v4X4rwioCRGf1S9GQyG3KLoxeehpYM89WkqJjrubgy4gWzf1wXwVT6oE4uhJmbWLcKsKf81w5gftT2o1AqGE3yw",
  "key27": "2CxNpsfpNG7jZ3ZRYtPvcLw9JGgRc46wftkrF8H8UaXpBM9UcsjxCU5A1TCst4szs84JBGn2fYF6dbZ8Eie5h5NQ",
  "key28": "5XZnEJRDmtsvF4LkyU4MYHtXj3H5ddiCK2xPrXTAHBP3WwzHWsM1RBE48mwQtQQmPJ7kNgVNCRmXxKTia6CuNRua",
  "key29": "633WFhJFF2VhoD92QzAQ7zFRxsD4huZsG2BkULnYf64DARKh7JzPcRRteEXBwUopNr1z3HQ6JzgU4nkVEEwBrYtb",
  "key30": "CmXZCmcXbv2YHqm3Z96dM9KGVMBbm4YADNWebgVwvFbYqYL9wYiNHr6EQSMqSzMKbArkDwUWV4zse5w8MV7sjLJ",
  "key31": "Lxwzwy7XvfWUvETuJ636o3Qh8pjA2Q9k8wThBivKjWbQdaYh6GuNXJFW9oZnnSf1iJLSpK6GrCi4DYgvCTU7Gqu",
  "key32": "2qcaTFsYtnMqxmxG1cECuPJgsLqANvUYMaJ5SiLqWEmGmXjx2oAwpLYKBSqYo3FGMPetYL8zoeUFEGifpCHyk5cB",
  "key33": "4BqbtNpbrVtoaqQtG1NLdEEJERQuSEtWBncP7sKEktdHxScY6QMNHGRhj9gS8fW9AAUP3sR9eFxRToNGpZxPxc4U",
  "key34": "5L3PLqUTTCSvEyStDFjmtR2iw9HTkeyxdb1dwVgy8eskP61im5WX8kMMTnzDFgwrGwPT61Mh3T3r1UnjLgtw7Tu3",
  "key35": "65o5u912aXqnezLDL6pHw44BDTiCihcW9rJFAd3rRswfQTGengKMdwHJMGQiz8MGGxEhNBdoJZuwquGciCtfxa7Q",
  "key36": "4h83fpt9FKk2cN8Ra1XKTYC9sxxg1gfZyqFEYquGVduqnTGpgpg1Tw5ftcQkBAR51qy7icUfHeNc6oCiGsxuxsiX",
  "key37": "4UrSiUnuuL1pNxZztUzgEgNfgk74WorGyvUtshYQNQs4BdXGJi4EEySZ2APByP5jfQDoU2U4hjod6TDbCscgNYjn",
  "key38": "289smyMBTEoYp6rwzG7H8gDqYagyZ7kG1MC6f3TMAKDDeuUwbtBAQdGNUfL8jgV1hdpuy8UTMrdanvExe9KNra32",
  "key39": "2gQ2vznPPf4CdgYrdssRS7bdDoCpb6VPeZVTi2NJ3T4sQK8d1pFApC1fA6JvAhRi7s7mPeLBfXvZQuED5WzoNMnE",
  "key40": "57Y1svcbS9JZcToKcbMXKTZG2XXncCasDNc8oagjQu11ZbvowWF5s4ew8QyxYsBFpXsPrUQ71k9t2RZJU6HmQMDa",
  "key41": "3suooxi1VtAkgJk8Npzo2Cm8nUEd8NzvKto66duGKnDya155xTA1gYDYKyLTzBciVMQ7BVzfdB64pafiYEqa7MSY",
  "key42": "4vTRH9W1F9Q9xhfXfujCv8HFrd88AxiUVqNM4o43nyxejMdyDxCvUbejQgJ7y1C7ihzk1PoD82mryeS2Qw8KmDQr",
  "key43": "2RDZrmop8eSLRtDqDQ95a6SkW3bsZZmiscGnBvi8KeVN44v2CYxQFwjCXxPf9eNKKK7cWpoFufQhZG3XbGrvs7Bp",
  "key44": "57eFt2YNaTajZPeMXmHTUzB8EzRppguVMMJeDUBeotQC6JgSHh4rm7DdBXTWroAF8uEqXrESwVqeNysh1oi7h1Nn",
  "key45": "323rDCkRg5ntGeTF5UBZQs3dNJ6DMx4yrEwGwawDer4JjBqj6H1ryhzgjVLsTbrodaPfXQu7B8YDJC57girGLAC1"
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
