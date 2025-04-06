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
    "2NXKAmXPcDov685fjDdeYZQfQNNAibWCoxZLjQmX33jhdYWQM2PydZrtokNGFYAKJLMCxxjWeNwXBpyFWcwYSmzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55bd76eT8op6ssQ1JWNwBrVTx3qTcjeNTcDHj8dxFpYDTzJftaPgBwt78hAdpD3YiWmmJFcuhFz2WVYQZm9tSMBx",
  "key1": "2iqZ6aocCN9qTTmgCdjptzJC9KEZQExrhkW3Kzh3A4Hibts7Q9HksrCJkiogEKuMkmgsUtzRhhZTNrvJodDU6DZs",
  "key2": "4gYtYQCqzdksjHUYpd1fxmYr4CUHoYEUnzgJswhE15TrA8vuABUZDU3xzB6KFz7tGRC81S96z3cD5BRGZHEmRAEL",
  "key3": "4LgG9vPBrqDAhRpVH9SXV1Xa3giPisSiYJsnLn4ZUUQagUhqK375HGriboHdLoHV4pSGtQ8qz2Zyghutc1dfq6pU",
  "key4": "5bJWFsqBypgL4o9THTNT9dNaUotXh2cFLmVqTJFTo3got7VLC1QnG4MYNT1Ho4iNwHcwXSyFruYs9nCXR3DV4LqN",
  "key5": "2UJvRzc4g6qgQJfog1MwRARUcJr7Nqv2fGoLvDuszrK2FUrLPj468v3MYenHWNEc71enes8JN1DrYf5YmvU37my8",
  "key6": "5sPD8WmMvfGLWMRxpYm4iWJbhGTwuuqmSsXFddofpR597yj153FkmQcKjDhENUsN6mF6XJiSvcPqTwSKteqNK8Ss",
  "key7": "4SUcDx5fJNVT1gi9JRrYtZbdfnB7mjE4aLDCKpfAf6ayRYxNQcNQvaosqZxP4MTBnPdD4RvZWty8onZ8kpc19wRX",
  "key8": "i1TjdhhwLC7bywErj5rgyFkAANoh5gGncBaupA8mwB3mmWCbGZdg5LyduyYwM2hA9H81APFwiE4QSX6V2M2Vfw9",
  "key9": "5pGsd3PA6LPo6FB9mgsaWiLk1AobjQNeMrgVdLsGtf3iSiJrBmDGQ6PZU7SEzRrSLmiuyjwFJcbmUAQEKwFHcZsi",
  "key10": "3XfjLXpZj6bDvEuVoPde78FLe9KJgzjjF2c5sxhqEj7hYixZKAcnGcF2roM1RMrzHMQuWyNxH873Q5pEu6zo8TmW",
  "key11": "5Djwz9vgzKdQxB8hwCLsB292WQYBqDjQoghXAQWTyWodcnVoA6mnnGJf1G6ovDfQbXb7pseroWkBkWpDmXE7yddi",
  "key12": "31vYypdVstgicgrew1roqgfobPy1NRx434TjZL3SGude6xUo5LNeV8iZ7e2AbYHNJWishAX7Sv6ED7JPfURDmMFv",
  "key13": "4N4rXuYGReDxMY3gopVDLmVXEmq2GKKhBhAQccsqDQ8Sber1sWQfnR9uazFiKohDxXVjgvmC97DECHSsUX5zmb5X",
  "key14": "xqUn5zqKGeS7t8cwFq8ypohnJoMM99tuvkvSBzPxsqMNKYvhUrJ3rTeNmH4dKPpopR8Qh8QwPMSbTvQ1QKpanBd",
  "key15": "zp64nPPbfyWegt9hmuSQgiHpdFJvN47vScpSNPwMbRAC5jANPwezrEAYYSnahVd6TegRxNkRt4StaMMWNPTtACV",
  "key16": "32iMRYVoQaATENMM9vkEgpuysueo3towoVn8xSRjb8WPQgBvwADLwTctPrskEcQZMTaJ1mT6e925xTT3MiECcDEH",
  "key17": "2sTD9qkKYjsLqXNDsoymZx22jk6s2JNwhWpreFTVTLeiivo9MMYMteZK47SH99t9hH77JiK2yEv2Fug9rznr6dWL",
  "key18": "49Vk1o1LgYFwhownrLoKzqrS1H8ekcjNTbWEg6PEMG6ShNFDRgPsHSB5GXpHJyzYvzcpCRecW2wDbxbbncCnbtPZ",
  "key19": "4zNFvnX7sy8bBNyYhpwPmatkBTwjP8Sas174gJAMTw4FKi5djaPuK6yjCr9nqFJxFviyix8HHQNXdNvRtPjnvoNo",
  "key20": "enEGKdfpvHumH7nv25PpXq56dJFkRV9kkRBntJh4YvM4Pv3EvY7fsXbBYtBtV6aPxRtVHvHRrDgEaoHAv226c15",
  "key21": "5FJGMfkUY6UBXcA777enU4gPR2ScizS6cT5zHQwUE4J8yo56wAduKPpVQinPgmU8TnrUNgtq3KyeE81yY1MeA1vV",
  "key22": "4whT4XYa3wKZdn5J3QF25KefoaoPTnD8VmHpfscYcvz9eg4hbjnMs484zvZGxVDwSKhTFMssCDiTGcKkFGwuqEQe",
  "key23": "4zRzQawp6NbzGBSFtV8cb2URVb9zzRKus8YtXejkdGvKPcqTXDQUdL8LLWAJ438N7wD9juM2Bto4o4Civepy6SCG",
  "key24": "65AERvtaKZiE9p51j5xcvkV9sJHF1zcfMR5jHZsAnxU6aaGayMFtW1FJKA7AmF3mBa2Z3FVJnta3oK6kqH6RJrcX",
  "key25": "426AGR3zAzbuAmpXtKjwhRQVC9gDB2WehKZxHjzpraK2ToVCB7tEKoXuQBYr4s38V6iGRnQMnR35SuhLV7rcoWgR",
  "key26": "4TAWePAQnuYrtJNZAUjttapioLQEMbXoCupxwsCcqv9VHe15aW5RhJHAM7j6BbYJztbNRhofN7cMSWP19EoVsREr",
  "key27": "2jajiZTiQXy13xofbDmJToc5NqDpSPTxxm1L9cegSuMysfLdYvsMVHwD5uNc76zN9sh16G1yQv3mT4xr2HThcr96",
  "key28": "4XYzSshTcCV2stCziehmakU2Lv3nsQ9QXN7no1MiqvoyABqTTuceqrcvLfb8oV6ws4tn1eLJTSjd859Bj5Hi2isT",
  "key29": "4AxE7NE2qk7Zy14dvFEQD6gFaYgXv35KVa7C43pEmea8BQ8tqfFZAAvAjBCTJiCCaxRbbHMy2Wthqpf9Mkca9hjh",
  "key30": "DSkPdhCJ6SeFS5Dk5LG71WT84yETFfmw13DTw2oPwb8vxudtRWeb2w5cWNNedKHVsihLksNdo7XkmZbPLW1gKMK",
  "key31": "2XKc3XcwnWeZeFrUZ1CjaLMbxbbZNxFpYBahXJtrrs7S59oNCmhCBQszvaanSy2s3Uo8Q5D1tVQ5p1LQc8Httack",
  "key32": "gsN962UjPRq7HmREmHFBY1cH5EZeQmQnhBvoD682GvnX3otLkgEotkTDkLT3oFptyrvKddrowgPpxCAnnbQSTbj",
  "key33": "2EmeyaRJyRspxU9v1buT4PShMZWgCF9Ux7iTQLLHPsvpHJte7ETrYAnNCATw8TAyAcBSigu62dEN9gZGEkg41wVA",
  "key34": "4J1NkcKz5vQ4pTSckYcEBmDs1L3bDW4k9SCoVQYBQ8QoMhE5pfLht3c7ETX9zFyfect82k1yHyubDBNZ6AuCPmhd",
  "key35": "5StERJJozef7Bk4Sq5QhBrwWf44E6QAGLHWkNSYzJTEfb9ohRDM4isVoZfmf3vJtbr5bpJzwToR3KeeMyWELRSou",
  "key36": "3VypT2q6QVW313vtQZcPbBykesFfKRSr7DcrsbmuP3WuTvD1FpmCp2ai58Emv8n9rrek7tqNjAVACEuUtfv4cfoV"
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
