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
    "25zu3MUADfiTf2cmAt53qsrZjnkcVZApRdA7itdwt1jsSZPhVELfPsu1cBKVxD97icMBX2WrwUahYGZHfYETA9r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnyHV81kSTMBsPk3gerkugZJKyM7R2WtPtNiP73NWvJLvLQgTh2SZ6jT4u1tMvNg7SpFW3wUS6ZSEqQnsHoWZ1n",
  "key1": "49A4qwU1qAPbZ4tEKXjC1WUDycV7QYV7N4iETNpW2kSMxeURFKvANapy4MVmaxaGCpD6WSoRdwAcxr4Nyho712vE",
  "key2": "3oWDtPA2vkD6gBXSYxC23uSxY1eTcHQWC6rGrHRSPQ1APbogWJQudqFp63mELNons1qFaGjK56CvMzydou6ZbUAh",
  "key3": "3dKtTCge5sNZ7QficyBJYBvgJ4hdMoTR6jBZjt7rK1hiHCHZEDvAHCvR9tqfxiJh8rYRkvuKRyHfiqnWBMsgdRev",
  "key4": "2zDXuE2pwFukRYmbujaynar9RQpVpyau8PTRYZZNppsYqE8DhmEXnRvJDG7ynbqdpShEUvT1RdyJbxgxRSqXXFS5",
  "key5": "3nVQ3bLC3b3uwh1zme7X7Tewov2CvVdhL3Uj7VUS3Rkg2kCg3uzNTJMJgs868dXDZGtuf3BmQrCnQRZ43MZeCQwx",
  "key6": "5JwkxwKC5RdnKwyVV5wcReXc7h6u49ojHBWrYBUTZZw2S84rtXLLDt7BehPs4xkT6VMW9URFYf1o78T2tg1SKwJG",
  "key7": "22mEqnpQac4eu1qeDi9vfgYQmooZYiYPfCWVGKSK4iKY4TCmVdCYMyafoXvgxuMd6U843tSbVUoGTj5pcvmJza1A",
  "key8": "5MKt1Z7jYtjvEoBBfB2dKVGjze48JGqoRFFDmbPMTwVqCJbmjFG91zsGYvpVbx3dZsLMgFayJ3MSJCRDrd3Fkded",
  "key9": "4P1zg4nCwb3Etv6jsaVMxhUErwLSwjv94vhb8pUjZEdYLxwBMkQLWa1W7WVSq8ZpLRLtSULJQnPFTc3d2JqVdVv1",
  "key10": "FRgdEm9vBgacUtNwxSPcRGoYe7aXTJLrAsCc3qfJaQSNqm3ExstXJSwn5XhTvyL7KVr5stewjX6ViFEwpaNx1Bo",
  "key11": "4mXmgphycRGUPZQ1LFyiso4KHMVmPba5xCHde7LGSz3nzhPht6knm76JZ47qvgNiGvj9TL5HXdwNQ6jbF691fY4Q",
  "key12": "5qPr2j8wFYz5UhcFiNcKAj3Nz5TTDzcNGvqRwaCsw9LueDAD6ahjRkhYhwuZRuHi2SCCWZt8KSCT6fxEMFaFUqcP",
  "key13": "31ckbypG7TRxJu54Sfh99B6AAhJrzrGLGKGpY5E9c5GnQ7fMDP1tDmj8nh2wYS1fprpuqE9KnkAC5TJgUAgCPQTd",
  "key14": "38BByS2makz5wVVFSiPLFs7oNFwWR263bTMBdT8MjG9g64LAU2VBbhguVfLYxQJf5XWai53Z8593ZFwTTqzfJ71r",
  "key15": "KyMPoYhieHEKSUBycmJ413TEobuDXAGPJcL8G8WumgwZYgbwyHrR1jNRws9mFRf6CJ2cdKXVnxyf1o7HYs538ip",
  "key16": "5y5PZ7XRUm9yAFYE6HoaGCALwgEM3mAx8u26QQ1Nf3z2xrqqGeq1ihqRZjd1mWw6N6x6yNEfiGjpRUMQgdNY7TaM",
  "key17": "5XUyS4MUKYLVnyLLvpnoSTumxzfmXfK2btEyy4CADY8KMJ2zU8mSiwZY9nuzQBqyjih6FgAihrP2gwVMZKQ3ud4q",
  "key18": "4qzqvd8Bgtd53YcRoEjTcA9W9em3nEDkJTPSPHY3RmWtR9f5dAL2FkHyq3XheFvwVrPU4ACiRJkto7JsZCeXmt8s",
  "key19": "4aX5gM1JWKZeyaHU7PPDdFfjdEtxJoJ5JjP1H5RFAHdcJPzVVrsqaBX5o1eAjuQhJMUtDk7stE4qFprLuEZGLpoD",
  "key20": "63ctZtdGW9NTpMgbRxoc9isuevMQGTPaiF23MS2F2w7EfnhbswyP2B4CZrB8ARhWDLxJYGdVvyk9yiMSC7frjiMw",
  "key21": "3d6k9T2RQd9T54AFPPJwPk49PKhC6gtTLJGdyYVYrhmwXTaWcCptRvL3J2Tas9uf8G6HPfHH1EFssARPmRSFsJNY",
  "key22": "7aZxdAUC9EvbFhXMP18SbVrrG7K5eXzLUgRbmvjzqAda65gCUSdqFv4uft1icid7MpApDM3ti3C6kceNhdixpHK",
  "key23": "3hRXwRAhNqByUUyXgUbjfKctXVUX8QT4uViJNBJTDt8qP3h5QdWfssBBy5srDUGppwgzTS5GchmpTeCvFGM92REP",
  "key24": "234cPQ3JRxXvJaQgvXfW7xeRcQUVWrCdWaxn5mPKKMwnUQ4G8ZDYZ1wicPruUei2nwuAj7SSg5pqZwHHaaSMzkDD",
  "key25": "2oU46x5zGNHwGhobamUceRAfd3HcqxkTnKZwGxy17qMGioCFmiJYbV1ihNuRbFfAUG4J2FEh5DJdnRMaLsRx2qrd",
  "key26": "3sX3soQ4ZV5viNZELki5g8jTZFSZXcofAWaJMUuS4N23BqsJZJ8Lppq7sB32kmVxN8W5Qv9QoMYFGs1gvXakiP3p",
  "key27": "4LsdA6gAe7QsCZgSGMpqXd74ZQqthNuivPihsq4V5FBvYb7ZZ8FHitaEf6GGtASQGGiv3WBjkwfEUQZsZnJhvRYi",
  "key28": "3tReMw9LeemxJJMeWbdo1zGt4m1RxQRGcGJSH7j2vXqLD3vKkYchhcXwPPGspYh6hU9zhAqhrjVrxnHqnGiVUvXz",
  "key29": "2ZxvbW1YfA2qht1nTNJwQY9wXD3zjw85CATf3JeDchnx6rLnPqyT2gmjrqiUKh121Wznr8SPrKe5zMjY2qzmHBP8",
  "key30": "2ULtmHru4xy8cfRhCNDozRW3Q6qz5eogHrzYYfLFSSGtW861EcE2go2MKvxGxEUD4maQ5z49HUMvfcuhFQHpv1xd",
  "key31": "3fYZpxYJeNfwKnMVnTr58oubYSMFEKoVveAxNfLysLVv8aExP51MdUN3NET1jS16jMYNaunVzcnpFN4AscP9VsUZ",
  "key32": "4dTwYLhZwtDSW2BNW9LdvAC3bTXoxVNzDucL4wyfqtDwbkhtVTDf5KqaBDAVHsXFYJtyJJpJLG72mbjsafR59b8w",
  "key33": "NfkLHiT452g7JYQi1wtEfZKq1Qvjwvy3Xe6UyGfcabuML8eHyK7QeP3qvn8RZcSUveQroBMQCert49WQeeZ68pZ",
  "key34": "2LB1Vzrs9QvmSoMXWqtwnwYTDtwYiX2vTFkbHNjZt35ZqGRCQvsyH3L5yrr2AUDkHSQMPtAKnUNacuT3gNAUTzat",
  "key35": "3E6iAme9teFJtrkdG7bStjmQ6T443aE3yenXgaFZ4euc8KSJnPCSBxqqupoVVMk9J1C1yHtZq7fAkeHnkgGhxjbd",
  "key36": "m8w7UC4aztK2Z8pjRgopSaaxtxwYKD4e4J92fZqoDdsxKB564n5YVtaxBRauDZwe5QbNfWJ7EhC1fw1Nm2vjGLc",
  "key37": "2u42anYR1UQy93CqoCooH543YTmnBCUsFWTy3Ad5NxrK8wLKGAKD7reJJZHRB9pKJiF4G2LtQtxQhMQm7db7wXan"
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
