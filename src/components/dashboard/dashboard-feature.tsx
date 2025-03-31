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
    "5zem7BDQ1XUzej1LrYsYVHfEyjBYCTqge7gTnFWrPfBhg2E8yphFqv4ReN9DjKoH2nqppmnjTx11NRhx5wP7LDfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RpwsQw4qmRtUp5nizx5uZQg3UCw2TT2sfWaqeeC8SF2eeroqUoP3c9G4s1w8fBRH6GNapR44jsbUgLCfHCcipXr",
  "key1": "5y6aiJ88ebUgL1BBxjNU7UtcgZ4gyzVLTFn5aahxwZ3UPpV3jeorAhYk3L18JmgrrqFHh1ZZSmfoGH7v6ms7ZrWe",
  "key2": "3HrdSBR73G25jxAhjKQZU6sjSiaBpFHCsDfgDkM192LGtGFp9SNHq85pkT6TnPLzhm2kq5fhN3n4ZkZ2qcMogKJq",
  "key3": "3mSFYtcqXVYKvRGyhVgi5CdK9CypJtPDDGnRfVibdxqn64pm5zLEHg2dEXyHewyNbFiUcpFDXuK7761BZEtUQzzu",
  "key4": "2Sv1iiGSzyNdaXEcdvTXy3Ew3Mt3upJfBCpjds4YRpFW9Pj8ZGfNy3yn8YjbFcNycNk6ohgjvWnFbKnitVj9pkYq",
  "key5": "4bkbHssz7ckW5v7onCzzEtqAc27zXYPFTJdeNstLrECvrozD753f9v8Bmdq2uCbWSFPqSJVWjdLuGk8miofFGHqC",
  "key6": "5WFZmGP2aUXwZYcyFQ8Z1vHnteVCQDhfp2JLzikAmcyDJjBacAUEwvnwhAedvLNGtUA6cfKt5tVKK88kReyD7rvr",
  "key7": "X5qoeuJ2QPt5MG2L6RKBMjqg1sMSdzdr2DPsE559fqSNQqg3waLkubEALRBLYbkpY1uvKERDMvuWb24iuRcKTx9",
  "key8": "2RUAVLCkb9d2ecJsdPPdNapArt28Wbjfo6MeEDurfCnZddxR4qFJGswXCoH1Kp2oLbZLoAuervsuXPvcH2EGKstL",
  "key9": "54wY1CwCZWm23bCVxiQ7cZxSWrmFXeVaH5EiabJKLAa99PST6FkXPRfkxerDhtoFddCMpHsgja2DpSphY6HGvUuz",
  "key10": "5Mx7PLbEjWosXsgDodLy1dLBFZAR9tt6ij5WW9wZiaiijwNXvyxE3nDTM9TaZe6u76axF5NoSfKsyMBvgUedQuhf",
  "key11": "2AuBrtvWB4pe9vp7jKrLc8rAj4VJDZAePnjFufVQzJf1F3nYXxFy9TR5umKffwjetYd4MjSmnrpj7CVDfASq11nx",
  "key12": "4x3vG1HbEh7xjdxwkU9w497GVzAfo7jujKupHDUgYTYcVx22aa3JaztgYgtXxu9aMMfqirJ1ULeMif1R5wJoYjEo",
  "key13": "5wqAaezNeagnxMea35Ku5bNby3p7GQocpNek8WfopU9t9WpqEc6MJQtMMXdvNnWi5z8onp9oGgN6JAGhB9msDr4v",
  "key14": "2XxWANaaqPbATL6z7MKmzP3H4cgaZo6rULHfg7o9UfyNtrq1Q9JxchJRfXRu5yAbHrcdUk4r5aDZcMDSgcEZMawb",
  "key15": "23aspTwpziesdpJfSGknQpYCFQtcHDwStqGkYzQz8UR7Eq4i3vhFdrFHnTXfCdKDzdiJNSpeXiTB7pNYHhQmFv5Z",
  "key16": "4boNP79U5opvRtYDqG34yJjzQoS66vTVvW9B6b14JYUCFj4RZrDdoYKUfzxutMriZQtYo2WLv26Qh7G6aXK8Gh3s",
  "key17": "418E4AfiF9hEYdnVwBQC4rzhnd6XpDb7nEMPDCoEpshohk7BntGpN47LwnTfsewRbHHX9hkQN6zeChcQeJBWJXPE",
  "key18": "4cspNhJDk4PT5owACU8ppCKZV3zBMUa9iCxFfmA22h6BsrApgQcfr567nUxfsdRsKHD5DHdGcwUGDWM82omntrdg",
  "key19": "4THcJm7yQLZUotqzv1sx9sUfVwyHSrs8XtSdxMqEkV8vaxDc9PuDsF4K6PJbNmCKeTy5UKWcQnR32CDvUnECh9k4",
  "key20": "4QTVWMZHrMXsFr8Re253uM1pU9zQdMtKNnyfmKhism2kyUvzX4jZTHrrgZxn8ji9mi271HPbxRNT4qJcQX9rqCqN",
  "key21": "4ojAHdcoaxfERrvoNjwsd4eyaGs5CPLhj4t8uHynxpTrnZbDjHSvjvnW6su9WkqX9LbnRbqjKdscpt5PhWhaQrzN",
  "key22": "3JZXisDZorpMLMPc4jp1EV4rP1zgxyoJNLGrMmzHjy2ai5ESt86oWbaTXCMkwoPR8dMhg4mYfq6JZLdd7WCkifJd",
  "key23": "5YyhRcCDjaK8z5DvW57hHdyr6sLTWQmQBRyGDBpNcj4tVm8YKfr12o99zhcECg3pQo9FymXJQcDqu2QV4Y9rVQaW",
  "key24": "5DVvigrNxNs2wPvbNdJwbq6B8paPfiHEjgE4DrE8HcRdAjxumZgjmqucbADNX3X886wrCWDrKXmFAjVUCqrzKL8h",
  "key25": "2W5dQVMQrpAj2j9pj8Th4gZts1aGpUXRETWijpCn2Y6kxxHAZjdHrMedorsXFX81hqZcEZCgPfVJ7Qck2qeLmdsn",
  "key26": "32LYTKx5nPhAz5Fm3xx9QcnnEC2AhphmcXNnZayKeSTTze6X1W6TZx5LdougSRBz7LRFrAyPMNvahEiubPqQenn1",
  "key27": "kmQ2BCdATcKAeyRHk52u74CcT71pQhYd7RPqqbTBpu6iUMenbAofUX4HDRoxb6UTnbmkkR321WPSxkAxqyThCPc",
  "key28": "SqyFbXfovmC89q969QmZJjyR8kv4k2DVYQnSdx8nmF5v7taHt2KcvQBNw2vqstJuzxVWMCXtcbC4diNL4b7kJ6i",
  "key29": "5GGSgdT2qb7nnHo5zQMp1hQY4AjnFSp7FLWS9qaDAcmwmvmCKetcuSu3zWvGQgEb211sDeJsKzAgRWKkcqXFuzcK",
  "key30": "67NkJPfa1zy2EdXr6aRXUWCscJeXn11ZXUqtcQt5PqbHA7Dpa2ezrxutH4kUtYzxCHmQ3ZJESW57SVanr9iJXUBF",
  "key31": "5zELqtQYbiECnaTFaR3HMum38YcLaoudi6yYpPqWvhQ8j7QCGKygyEAtu9eaHC7vK9P2AD32kU8wmt1jXBK8HzFj",
  "key32": "32HUNTQi3nAwVXpqfXB29SQiNhERYJeZ7tGzvwgM52aweDUCAXHszF4GkVYN9PjR1168Wq5myU7utAKR7rjAD6mD",
  "key33": "29Cyaj5DLQf8ki6GAwHYTtnJELFHb8wSUevL8qpSdAqv8NcYPN9t5oHem3Bao87QFiEpqfxhB9Gose3Hesh6oSmo",
  "key34": "3PEB8XkZnnfDRZyb4feEhQSwgwFcGzTVvpP9Yc8NzwqFrgNZmLR6sLCJ83sXYd7mAqeS3LKSjLvzNN25cjHowjwp",
  "key35": "4t71BPtNrcnBuq3r7rBmSMNFKXFmL74CudjuJyYDaYbCiYQFNzfdLQbvp57sPzniHC84eN6vaLJpYk98pXpCqTkF",
  "key36": "2ByX7vFZX56XH3BB68RKsrQc9LPhCac5EgPnfhRyfzYBiV6JDwzXwSTJg9RUSmj6HXKo7W1Ci3qwoB7f9GozUaB6",
  "key37": "4ENYBCfimDk9DtKixY3KuksDcrfNVerAoGTNekh5mt3SMs7BdmbF5dJwzi9kAAAn7ibLFCr1phCE8mEkSmr6CV55",
  "key38": "4LArJBSxxEVfgkLvsfhgfuQBCjMMJEZ7a1Ra6ouBMYJmm189Pcvtd5pY4dDSZoEn2DR8PKV3pVkHfk2JfvgUbrG8",
  "key39": "4WLSoYhQ4oCJ5DXKKSz4a59mYUhn6vsnrNaJrCbkjhqB18tT2vVKua8pFqcvRf9pjGtDdCKhU3Dfcr6Red8JbDRQ",
  "key40": "2rGVkzc7gxgpAr3y8v3tLBxUYTEJQiXpr1fJrDXa1CdyVUgAe1SksBKNTUxkD3FftKGxqAeCUBEJRp4y1BYXNy6H",
  "key41": "3X7Y5zMFzg1jk58kpJuzfnRef9Z9KbiiueSWH4Eyqkf9MhoRYabUPRc6sgZZE7arLXhGJTq3SrgrWAtAtYjA21mr",
  "key42": "3YoEkhh2UsuMudFmgA88aGj8CMuPcK1eQpRE8J6pX15odXuav73uw4jdiAdAvJKSYofnCAGuSKtKvviPfDPBneSN",
  "key43": "4CbuqTdEV2cREB1xnEMPRcEHM7tvtFR5igxKzzWQ3EfpTd6kd9PsQ59Q6snsFMAH8bydNgZqUdS8ddEgDdxApuiR",
  "key44": "4dCJ8f7XjHwjzyjSLXqv58hA6eBRdFLtXWnunduoAcnCeLbz8Exmp8Bzq7g4y9wB3VCVCDixQcVikRhU75voD66j",
  "key45": "2p5PsDiN6NRDCHjpA31Gxrbco9y1AWoXdZtTbNz2W67h827jRvktWoZoJPU6p5Q8BjdScuhAoVC5KeZv3Zhx3g87"
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
