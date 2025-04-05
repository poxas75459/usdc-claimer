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
    "4uMPkpEbqMn69MHjEfrwd5nmPQsR9Y2QpXUsio2qer8oGTwfF9xY8E5U8Yz7Cuuxqb2BM6PwTQYY1gZST5EE6Dmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491XnN8WQ94UWFd4AXRieB9AD6L2wUmkTCSiuPSk9irv53jyZVK5J6q6dXAuP6zkfJiTaHYbU3ZCJzLmLEZT1Vg4",
  "key1": "1PbzjuQ6wqMgxqmVwkR9mXiiSCmGsdy8J9cecgmgMesfKQNyVwjnsk4L1GwqpZ48a1CrhLPrYn9FQyaWrdiDmqV",
  "key2": "HZp8qHtHyEwjy9gThojEaQ44Gpr8L9EqxnEWFNY7k5S1pdthQGJVZkmY7sFVpwQUXwf6uGo6ZCxAdsgPqS3t7JN",
  "key3": "QMD4m1JjV3EPa1FafbEQm6qzykPmHdfzbTCg8TCbC1QsrW6Z29K15YhTmdmg3MWBzvnZcLvnjByiuzB3KJEHGXH",
  "key4": "QHEi4DkFENFnCsqz4py91ptLfHwKNqXpT567Z96gRpYghmNFabBLnoATi2QsE96HYzeJ8wd6dEuBFhJMnA6m1Dp",
  "key5": "4k8azkYuYujPPXNyTJTugNxXpAfqENcGwt25LNTkQy77HXsHBR1mLXb4nPDNbRRnSEx6zqqqmc5mqbimHDQ2gWqB",
  "key6": "4GqZDzkh5U4vEPJm9LX13LLP6zD6xSTQ9LsivLV68Rxr7S6Sn9FPDXTwrUpFjMrgGxvtozeV7ssKMYv9918akAn5",
  "key7": "2cnGWqr2K5a2S1CZRQ5qCX9GiZth2hb9bQRfWeZ6RApXuiaDrJ8hbdNAvy47NVCjD2NR4XPFRLFF71GoWSvxxExZ",
  "key8": "36nUVG5mM7C6mKoYrvn5UrhAWnKXJ3ZxkTCYU1LbDmLXrWp1J6QLCpN7mNcH55CjPtYy2Wju5VSL6TFcpwrWmeLm",
  "key9": "5GEGaxhwWJB34VgqFowYUKJm72eapMFi6HBy3iuiJaL3qJPHVWD2aRx3z2xoVL6gSwPiZb9qin3irxSrXaiwq4Lo",
  "key10": "5mcYM2FiTJ9zubswfkU4N8nvauz1ApqNuabVcq3SAD44YBNPDeRj2xsAfLHXDrgr3usuAhFcPxoiBXWTnKep3MaX",
  "key11": "2ccssASPLUrniEqT479f812L6jXqwX5LYsqibLMswfjt63TAcifReJNRs7FmazG8QiFgvF14t5Tus3AyqoCXDTnq",
  "key12": "2GXkXMY28EjJddDLDL25orbojwip3x8VikUcof2SJBauuzKwsN7EnFuvziHRK56zqBYa8hQoR9BXNGFCJEWzzR97",
  "key13": "5n9pBBGupjN6sCK1UPNZuW8VVhfpiKqYqTT5TCjdSivS1rux6KksuyJgVwYjAnySfSyeiKSEtujfoTHbkY4agyHx",
  "key14": "2BsN2DYgn9aAkoxAnGYHQQeHp1Mcaq2bCNSsDgstWoAu2CQvomqc7cQxWvLqrASdUCzEP1G642admJ4xVAJY5UsK",
  "key15": "TUThnmL3JCBfmb22yuZ35B1yc1ZBA4DHDQMxoFedfzek6sn6AD3m5SRhK8bQJ6vwvTTgqS7R9EiUfQ2rmLpvSRT",
  "key16": "4oG1KyCXubyEgL76kX6VDFGduxdna6dLGkB9u5eu3G75KP9XerSuU9zWEMXGhyTWAwYLBqRqawK5NuXKdqw3vtPh",
  "key17": "5eLKUq46xafhwFdyTc8cvLCY2mPNyVdL63iR4fqVT6ppVVRpBfvn2rGh7FFPFULxmbTrtjzxxMaLvWzbHreqvSeR",
  "key18": "JPP1LkUWdTLerkfZU1jPUerxFYis9YyTTzmurU2HuspWkdehJyqwX5nhY4R6q5EJMT7EiVgJYqN4zVPMgeVnLAb",
  "key19": "394TWSC38pkRm9RftMT7Pq7CPZWbraZy5tPeYZfFRd5kxrVcrPxzwqn42X47L9tyXX8YzSP1PsRcAQtYDwAvXKFT",
  "key20": "DUhoFwk7wBvxKwY6M2ysvrEYCM8poFnVec5X1VYCp9euWexwBq8QVGA53NYVMnpMukZH7kWoanfv5Btd1mTFUdW",
  "key21": "eTEMkFJgeLyyVYps77nzNnDDFgvkg6T3fBSCMDDoj9Qy4c6FtkWrkdo94LrVBHGURLZ4by5XQBB7MgWYyUge75E",
  "key22": "2wDy6SEaY7EyNdKrVeoyFE6rfPNV9kQK45uAi75EkNBi1HuDLjXn4J135CPi3FrpFkhXGgM2uDMG3wQTUYPsavz4",
  "key23": "8F2UmykD52dFGGjtZBcriNzRjptCevvwaeGgYz5PYTDPT5f19V4LZzaAUHFSmxbDSaD8v7xfisSmRBL7PwXNEco",
  "key24": "4h9bGM9kEjtaZ87wHeYmrTzBqYN466WTnZ7c2k43DLn95fhGanAR7ESBzrvv46fSZXSsRMvxht6C7McFB2yRGwyQ",
  "key25": "3A1mkHdbpzsxTStEmeZoBCqLBG7A3XX594RMPJd78qRGEDikP2hYYVjkUAj6xba9RLiX5ybw2QukFUccnCd2NU5e",
  "key26": "23zAKiAyKDU7sxKnPM1aE6xswQBaxuNoNyoz3LMBxXs4xxhULL21CL7yKfncA8AEay9axVhF74csRiZnhtgg9EH7",
  "key27": "31Ze9wzbNHfKoNMmSQ9ecTXQuicKVzw94J4cXB4G7AYe4Upm34j6QzRVbyVnMjfF6dZY3NDTftKWAqTPXj7ABfDg",
  "key28": "3HrZLFV8A1hXXLwmrUwjVSKB9huB1CBVQoLrvJ2KFCmh2mNdMzKKHRqVCMym62Akq3pDxEFnW2x6PjA6bvXfP4np",
  "key29": "4Wxv8QwTc29dK2rCdV9YNquCg7XaDKmcntEA7NCeDUwC3xGfQSW9NrHf1QAevT5hnHPjNFubNg7qioDwAyb5TJMa",
  "key30": "VEUdMWU9vQNd19LjpKBdFKfPuyeUSaMUbZG5yRtPWL4dDpDPc6c4XSMd2cY1f9C39Cx9cJaMtmEqymhgYQEfAwd",
  "key31": "3WmpHAe6X67cYCPZvA5HKrz951MMeFtvXXYbzrBaRMj4Qn1vDv8oDwjhjdoaM6BkkQEbRNjdsRb7VUKrczUdtAGA",
  "key32": "4jyuBmoG9b159MJsnJF65ZsTZ9s35w6V2tgNQ3y6AfxYfRv89A26vr7HX6D5fX94xEyTQJH45ySiSJLazmZHhaWQ",
  "key33": "2YrhNZCybvsVEiwZVy7fuhB2DGnaYUBC1FgUj4q9coFgCa7RarJq6yNKuso7WYqcvS6CpjND8CTZZ9VWgAS4Ez8C",
  "key34": "2aFRrmvk5cD2AGia3b9mR48knZo7QrcHtKcnzcGigLDWLxifxGAAUmJZFebsR9UxiMnynebbagBvSDbUiGJXXqa4",
  "key35": "2zPjopE6MCcRr7FnsYFakRXJFfUe3zYpRsbvZN7g2XFi9x4yFAqqZ3A3rRoGGSF5rmb4jZSH4Z4F38HFoQjUqu8o",
  "key36": "nJobCwj7pprYRZzxgykUjGm59zv7YdwmaPN9KuLxWKETT4YXnVpvpTwBdCpHAj4wACLzrSKXhGymzAgwhW5kMBJ",
  "key37": "42S6AP45aUG5VJ8xD2xEQqBswEGCNao23jnemCM9YwcffGPc2w5ZUB58FS2gZ6EUoSCVCzfNPerWhK6m546ec8RW"
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
