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
    "4nNEKJaamhJrwYkr7k6PMKVQh6DafuMDdWTUzvR8xZodajE9RjMdTZuSFzPKQKTeWxVFWmQo839xYPZCWJvqu4SS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZG2MAw8NEn4LveV17qwRjis9uYaTSHCSwBqxr97zUWzB6ZPo5zHtXvKSRoNvbbgLv2uZGKomUZi2jknfqg7ffd",
  "key1": "4FEjgy6ce9ZPGBKTuNtPPURLaecsujnoweQNozNEB2Rw2uiSPXjmNuw5t8w7iM98h5P3opP9RWYa9PyxjUHg1p1g",
  "key2": "3PR2qCnMdBX62ikNwEArHXzZCQdApUKpJ3g4ZutwB8Fq97b1j8bfKUHncsk1Aan8Aym2YE9odxA7z6qJzrUyFkUv",
  "key3": "yrtSTN735PJG5vTs7XdzPy9zQJCkyzWDLCtxT9faATBVMm6xB9Qa1uxcEg89oEobwVKGwNnaXXdYdRgzbX2QoPB",
  "key4": "3aAMoLDqSf1WReEoazxaJAhMgQvQh4ftwdFQ7PT9YqZrRZqEEZPVFuKu2WgTMafDQTBHNn9V66rP1NGbrWHedcRP",
  "key5": "5mjycRnNXfbK2BXdV5oz3aBqve4btijDCRR1D57ZYZv3J7infaftAcZ2gDRmXQyMpF6tGKT97yxvNwxgUrZENHiv",
  "key6": "2EWDGypWApstKvATLmQU8K5qgnqnHzDwUFUPCcvEF6jc2wvDMUmoh6HqiHsbGK1QeBGC78YHi7w1FKvDSCPv1yFy",
  "key7": "BwjmX1UYPGNxPUyuxKzp3q1rpqEb5xgXLwZtmBHQDYekVXC9Va9vnk5jg3vLBpP5WAqJpi1ZVzrtrBxdiPs3B2p",
  "key8": "4GRSspju1gTDbiBkTjn1hoYdXxSqMq9FSEc71BfGBt7f1NoPpF7svkpz9uLUbtzPijboQY4Jfj6PPSDy9W1cGRLW",
  "key9": "28WWDpNvU9vU2U7Ww9YnvvtQy2Lr7qTTwBHQuuNJ9V9UwWLHEG8igsbxBVFf98YE5SUmYGXBkyyU81nF9rz2yXDX",
  "key10": "2Spuui4YKMjJWQA43cYNyMuHAzh2GHTCc9REa7PAZhi24mCB28DmharbwQFQ9LqEsi36gFhXwQeVQRK9KKmYaVSJ",
  "key11": "FvUnEpq16KntqdPLitprG33Czr9E2MZDpYxkEP4ZC9aQez3PtRbHVzsDk7CcABB5eAF4nUrFXeDq4RWGm4C5nLj",
  "key12": "3s6mDpsEAPKfH3aCLAufAZXLGNKHA1HmswH9M8w8N7HJfjv1wxydhk51um2pZPoENcmk9gjLw8MVz1FbupY8q2Vt",
  "key13": "5v4zQwNpjF7UqzQNkUUPhVYUswCrRhEZ4Tu9t6ogNVMiTPqgMvVUWMPuXMkv5vzHjmwroks8pxMNJYUu25Wj5vsD",
  "key14": "28sYBjhSzvKYNgkqNGLMupLGFUReSC78rcS4rBXt7ghr7CYpVJKp1BtPcajZHbN5gETi22TWPpvHgvFGn2DqcuAh",
  "key15": "5t5okFQeUxXSDnYtCzyvkrbgJTBg4LBcRSnPe4o1cP3CUwthtmhVMxZ4ZEd2BUNDMdwCm8U1zYt7VFDumijZxtQA",
  "key16": "345Ds9GZanuQvGcTXUD5sUCGJnY6FeDueV2Nu9REpLzpzQ2cD9bmtS1dLQRcWNnMzocb8LZhqt1t4kogkGExNXpZ",
  "key17": "hHCJDqVXi5Zi3WMnu3oWVcDxitLx9R9AZHiKPnYpn79VFH4N5vNodAkwQFMUnJQCq2AGUDgUV27h9RrzDzQQ6ep",
  "key18": "4rQb81CDrYPYM5gJcZwwcMBVFb6GJ3xfbrzt5K5zv3U88Tm8d6yTqUbxfQuSh89W897vkDUZn2XH6rEiGcfeW1Sx",
  "key19": "2BZgQwGgE7S4a8dn79ujEpDMFDFu34rbJbqfcbQScPdRZX8wWThTetYRk4YLciEUjxeWzfuDUzdy67puDVQPXtcm",
  "key20": "3idhZqUaBs6YFJyWZkkPXXcvRJ13JGTotPvNaSLwCn8EzwViDEeXB9Ve2rvKFe8Gpn9jK8K2rRnSTQnSb4yWb9QK",
  "key21": "YdKFsJY88F77xJ3MEYDsg8NwiT5Tf7FTFnKM4UDvbEnsYs28yho8KhVQYbgK2u7CYNRH6C1uQCgeB2HxB8Z3cQw",
  "key22": "35zC2EJKaYmSzzD2RKbeqaTsTnC6iMt9GAJdbrxuBLWz2ktE2S1xNVnoDDyy1HhsPvDyvy5zrEnKLBxRvGdteBUq",
  "key23": "4R3QjzFNGtjKL3paorDJHDUrk7jvDz6Pd3Bzu9pxVgTr39QRjcEMGvpN98BcY83QAgE99Sj59jyQ7bWcwiqprZJN",
  "key24": "5LQ7UAJisCKJYPoR7Sdm7xJSeWTNcmcX28inY6psreruaepr58JuiyZQayxNbJscc29jReF3DoGfQP9uJ7Z5e9xB",
  "key25": "39W7Si6gwhjbw2jaA3PjLPgtMs2iQX81GJ3yhFGvLFg3bdXeKgdPAz39zHrNESh9mriEmUUYmxzZGpNwiJQVcL4Q",
  "key26": "Xum7aGfHusvkuBTnfHkBTJRKVGwFcPfkd2QZkP1ksZjS6bJNxXbt2q67THQ1dCqhgz2eYSzhdsg4D7dVafjfzzp",
  "key27": "35GdHqVECkf2PXiF4ASBm8W6mr82Bxaxx8ig4DzZVwjFxt7CMpKfFw8n5o2wSRSoHjJNmGymUzuVzBAaxiY2jBjb",
  "key28": "64uXReiJFUGg1WYW8CH97wUsu1DofSq4v1ZvEeARrrnnuwJJCpr1UMNNPduB9roEg1xPiQVEnJfutpwqMChgeEkL",
  "key29": "dYoN3owZZL72HHv6CpTZjAMpbWPg5Ce6gspBdMiHh37pTxJNUwBzR2nPLgRxhFsFYjks5oREdeqpTeJu8tutCa4",
  "key30": "3q8V9skHyQBKsu6Mzhy6mfGs2oLt5PpCg5WhBnVn9yiZYrDKiC3fWuYQHyQXhUVqm2HEGmSceYssoRmCxZN45iFk",
  "key31": "5ufYXaU9VaB7u3ZuUAX7NcZbzsQ7BkcMbnbuKYigCKjpmFwWKsYnYCRmhiPCRB6nKW9euHrWiyiEDpmPkFNHRSyj",
  "key32": "4LUd7Neu3SfXswFYByZmvpYEexj3tvyL218CtsiXUQJziAQpB6fB9SiSd3fYNHh2GUVFjUbG1MYgEP9peAvfGjuv",
  "key33": "2cmnUBC7bUvkpbBzgWCn8GYmcgiFaZ4bmR331NvV1JSMs5nFzLhAsg375H59sSKW5w7udahbJeBZGmHmoRx6H2Ze",
  "key34": "5fnwLH31GoDN5z6gXJqGAqDrVDYnkGPvg7emWQVRYTQ4qj6VRwoXKkeH4iTyX9SeyA6nRnwtntCuVpDdzwjUkGnP",
  "key35": "4xLQTDqURvDn5G6HnxeoR8qowJDvg7HvWmrJ9ir4gvsE6GqHPKnXdmVPTG3UCU8XsG9QGdGLJuJTTMUshrefSmNt",
  "key36": "5FDtmQpUUJVFXun6WaWkKzKT7uExe2JvGa1Qy2UeCj7JXF3JgMqPGVZKYv5iY5RKZJS9rMjyZ3LngVVMaoZmzNaT",
  "key37": "penVzHc4hBm9wXakYSG1PMCxMAPnUbyjzXkKhAWTixeYQWWxe3dgcZZ9FNX2JV4nLTGgczVoCfTtgsoxX62QnM3"
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
