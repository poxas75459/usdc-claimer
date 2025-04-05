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
    "4ej5jjzevssGqCMsNkVEFcgazgxTrEd2oD1P5CvzRCaJu1CcpEsoCrBdBL4eCUKkhzKPKPscMX5LUYJjRQSxSvBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLvXi3sETVQFRXaFn7exe9FoSLdKH9e3rAm6S38bUxbAL14XaZFTqE5Fm3PRezhTDoQtdUnHorXvwyKfmxvpDhn",
  "key1": "4CuVt1XQZAde9ntr19vo9MFiPFrCmVNB9D2oqRuLQaZ51BpxLn5CY8vgnphb7naRNnSndK1pHe7d6zhAQddwFYaz",
  "key2": "347d1N6L1TQbFVK3YofbBu4TxxTwcXbwVk1RCWoXwsqdhVC5jSrBxmqHvjwTCimBww2Ecqdqj9cVhC6ByXCmw9hh",
  "key3": "2bKvr3tdkYZ2xUwnhQk5GZS44JWfJDJcRTFmiUmjwJ2UMA1g16DcTL2qoFFpHE3QMeeuutqNbjnYuJ2qjUoZxYGk",
  "key4": "3orjg234uohJ9QCDW6wJD6Gkat59F2LjfsMuRLmdihxc3i2utUtuaYd4CwxHfLJU8UL25pbR1jjpfvN1otQjGkQW",
  "key5": "4zvA99vja8gm3J3ns4AxeLruBpSw8QhtXJZ1NT4Rmn7rmpzTuceCJwhNXPNhRcXwzvGPtKXLFWGk6gZtFvb7noSM",
  "key6": "4BMeeCjWBmtUMUjWtMk2hCW13m6XUAChjVdw5cnKT4z6pmUgMeeUoTUKtop1uxH78szjPxxY7hXZZhyPedsuD6Kb",
  "key7": "31ZunVMXcpKG4XW1JSAhf7eUmwHUxJbw2zjXrGA7ncp13tv8gf1zyFiFvVCxrGWfu8s6oucEhxCBd46VQyFxb2MG",
  "key8": "2ZXdQryKhKqbiQEDdhCusJzUf1UNuxR7DXyzdKr5nEHD21Uyz4KiBS9WoXqeMmxGtEtLGiHTEbsqeaBVRhZqbzFn",
  "key9": "4kW9LvwRpc7UTKhP8i6bCPL7cArRV7xwzWkLyQ7TLM2phCUa3cEN9Tn78Pniz43JcAHtkRXeqqLcMpo84aiFR9ET",
  "key10": "xyBW7sZsMejvSnd66tNK6wmhA19CYA6SadP2HdmYvZkAJyvrJw6y1a449pxkFaNEyfLHCGqaKMXNyUwmGvR2Efu",
  "key11": "5yxXdXUDVw76otgcdBgKb8ksVnb38ZKmFq97n5ktxvEwQRTMwE6Gd5HLQn6Fyuje64t8MRyW5PhsAS4fMp7EadcD",
  "key12": "4QjeLa6dj2q9xjqrGgrGmkPEUcu1hRniT6R71nX8XF9oZtirKoGthwB2ohHmZJ2Yj8qUEcXaVBQjjPNTar6sWt5Y",
  "key13": "Ds3dDAJaHbZoBykLSP2Yf3KUrd2dARTRYj5jNrrmGKTRcqJ9XQb2x4ftwNC1J5dToCi4mbinsyipoHZnDJzMZND",
  "key14": "28cVRJcDZZgUvZZG5wz3RmnZKf2EHum5HeBVWWk87oMGFB4pdWatKd6Kw31x9jmUPhTr148cDRDf4fA629QNhNKp",
  "key15": "64MMzjSw7C6gWGfMNrRB6VNsJrhDY8qCm3N3pntugqA4Pa6HueTCFUHtp2JjoS7GrzCdVtiYNSfgY9XMtzaJGqsK",
  "key16": "5HiretgcZs3Qa1WNWYcAisvpUHUXM38YSbqNac9SVwr454QgouYXsL3y8KHYCStQU6vaudKCnjdJZLUQ7SnsMhMa",
  "key17": "2pq391dBMJ6jMTcnZdE2gxuNDmDmAspn11TUja7AFgLKMDPwUon9GcbUXC247k2UBTcpAqJSNxYYsVrQzVmhPH6A",
  "key18": "4oaabQjTajW9NAPH3r7YhXEZJMhxBqg4iGjbEnmgopjr7SsSZMk4dLFSTgz5gSQWykaE1veQCY3gSriS2VnC95no",
  "key19": "4dvq9LcjZpGd8d3gHTFnR6UFeDd9iPmzGnSEo7nKCbWy7c9BEUJcvPtBW2uEM6zrsZh7ii56pC1YXcnB8GNLH8sa",
  "key20": "yeh1ZH8fpYE4MsrRP39b4cydepFdqpHhAUy4SKocrmyq8H7QsZVytKWPmGynDdNw9U5kVziajVDbGXx2BVu2Vdw",
  "key21": "AJk4vbqBLSyZQ8t2hkifTV4exwAFJb1w2MoZmcr3ay87LbtABHCHwzfAmQVfZtxi3X6xiqsKE2HKB2ggSWir4Tm",
  "key22": "5hfyRq6C11XwvyB8YHdY973jqmRi4e4kz9zcbjXw1HNVWkjjkhDn2RKZWdZKKnwBhP7AP1M5V8M8XqoPrSSNPjXV",
  "key23": "56Ada8eZNQv2SS3pQXVwmc6GfQW3raB1FA65CSVypNzzL81PXtypYmVB18oHZvkuxQnWKCLEqWKpmM9o2KoPUtdt",
  "key24": "2dozmFVdkTMTBvhS2nLPL1mqFzDUA9D5pMuUP8fKpcVSbK2PH3KxsWeAw7rNfxgzv94Eswr3sucFzDKXZ1bjViXN",
  "key25": "4SddkKwzAcg5eXo9EmN49h2MKsxWy1SqCvox8KHkk7iV6kaVXBTJvSTQ33Kck4Pr1YyizV27sMRYF7bcHPzH2TzX",
  "key26": "fM768f6qoVBckjtAfwQSnTrP9oKMaz6zYxdMkCZvABru5B9J2SSTPF6u8W5wykDwR3QDg6RSMYH8Tah926HJoUY",
  "key27": "5wreR8qWndkigrBSs9GFWyKwUactQbqeJuNbSQNPaggUP1ybx1Eb7bE5Qn3siRuocgRWMqwPrAZJ5V8cSi7R533q",
  "key28": "jExbzV73kRQRmzZMAvfeKYumx5CZ7x7z2NeawAu8wh8AVq7zpTuXVqg62bMa2QhSbchGqdmFiiVfyZGr5FDAHzj",
  "key29": "34HKsjL688GnT4SQZC2f9f9Sjd3GqLGCmgZQ4QNJw7CKkuFRm3WtuJfbWB9WGkTAZ67Jw3JbyJzGtRDq8azyLENB",
  "key30": "2BfvqRbjomSp91iQkDnuY3v8C92pdFv7eGq9kjJUFkgjpwFWNsZqL8Eq2uPU4g6zwtQjnHA4LvgZAkUeAUannwNX",
  "key31": "659KDASAkkC53crjKvydZUGfvHnscdFFrVDCfRUFSt12ViHMzCPMrTwe1664Xgu6HMNECPjV6iW4E3mub3oguHkA",
  "key32": "3X9qYf2jyMe1NjHBoodLr2vtBArvRm1sBHfW8SXwuHsphhkWNCR4hYhZox1dqeH5ebzG2Hf1SRGG7iGN5tYbFW6Q",
  "key33": "4Gw1ZRsT2TLuCDyu7G6LaEYbcdMEoffSwXA6KPEMpNdFkfPfDyLWNsxRFZ7XvnSbRw1GMFTNz2BMMTr8vXbtXQEj",
  "key34": "y8gLZxmHn7BP1zAHxrDrT2FAxFDmYuSNBQQn8ieaLmx8sUsWvACmMnBcijzSwYz4cRYqEJWVr2xtbzYQSaf56UJ",
  "key35": "2FuNn8Q91K7p5beivDEqSKj53wq5NX2NdfRzXWu4qq57DdEWtxhcKY9amTrzvizGWK2bgxr1pXtvaH8pJikNbnma",
  "key36": "2MXiQtrdhYQSd7rhrD99DvBux1tT6AHQwFCvHmPvaZo7MFbxpB2RxUPLqPhHfN9w8sX5BCAJt7MXRWiKANQy11o1"
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
