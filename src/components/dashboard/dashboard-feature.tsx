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
    "2p9dP5tnYhs4acKYUX8n1cfrkpPcwnGhYLWY1uUCLnozcdjhevQ9wHZqYUdqiiUELzvj9FDEYsCCB3VUuhQd4FDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CJQ1SeGN956NXCyF77rk3ydiSVgrQ3SbAqHoo1BqxwSnCLBh8KrUwjSZetLFXaRyUVgNrwwQWKT1r3cutB6HtL",
  "key1": "5DUh2iMmof1YcqoS8DzddYSZpjNRRM4bkFmToXEqfYg3WmCyrrUp83QNVkhPKrgiQZokfNQze5Wrkvej7N1kewi3",
  "key2": "21XttZJFmWHTYZ8DWwuRgSKmmdBr3pALFNxEinoRHf5q4uCJyjCibr9DhMJB5AkuZznfXNdrB767Vc6U9bT5aKqG",
  "key3": "2QGXraks1L3XKPWUR34Uz7wGrReaaxf4dbnRvRfEgVx6Fj9kSJw1LhNq936b1pJF86ptMwBPVjJGiwZYiDZrChew",
  "key4": "2ZTHwcfD2CbpSXcZpqjTTMUPxQc8HkK6hg8CboY6mQeVeNx9zdybC3fDDnrVahHwELA6L71ZeUo3kELAe2yEQwHR",
  "key5": "3bgwkQfDThLrDx6QFPDYEjtYp2DPAifSoExQuUZrnY22Ju57dC4yNvupSDAEm4jASs931qGE7y5QtzuXpps26Cpx",
  "key6": "ZV7VhhzDTREkbHhaK7RAX8df2MuuHZTyvpBEQCBr7cfjC8dAitHgEnN6wJ4UyfoLMRo6kFiVXs3hwFb9qrYtKS6",
  "key7": "2QJBN5u1Hc1cYbvhBi7pzcZUdZKcSYX1cfDDrHB5BtP8WAqdEsYoTt1mF4UsngrwV1MYq9LpbYw73FEouvSjr5Nx",
  "key8": "3ksgDoF8sDZLd6tKf1WrjHzv6wQAbT2jSXNRZUhqi1jJYfaCC5x6Z2BTn12ZLEGCT8DJwSGK8XdqT3SYP5Jkneb8",
  "key9": "5d2HcRg6U1DLS6wDApCcxzUkSuSzsLxzdzDTnmyn9uvp7rsNirUPbfi3dLbK9VhMocfZoRhAtvqgRM5TMoUh6twW",
  "key10": "3BQmA8repFybh9xfPk8GRemkh8LtfMkEsGhncsccpbLnrvhRGg92MvmHQ9n5JdEHK6mjq98hJmgHbRnPPzd8Xu76",
  "key11": "iMsan1p3mHEDn4NTGnLfntWRy611Qd6xwrQmGvd1ufLKPpXqeRyXZUKqY7tNyPCH5xKtJmNdzwDrZ64Aeh3FV5L",
  "key12": "ZtmY57gXjMaq9vtvGSWLiwRdbLzaBoxWTzPVLWnH7ZnnuQ3uNK1AXDbRNPTZUZT14ptgpt2ko1v176kfFoinKKW",
  "key13": "3fnR3tQAyWd6Ufzc6tQkmDefWMLrzPsG8LdJKkuwTTANmMFtTeR4fqsRcqZoEiJK2TWLPheUyA8n1nT733v8qA8b",
  "key14": "2Wo4KMfETNQLeEZN2fbkHLxBfghkRKXTaKMQkRjmQ49A2ECDzB2PYrGT7BvtfUPDmZU34KCAGMHMQxNjZo96oaM8",
  "key15": "5woLuGZs3NZkP8FmQqbEzuw2PEt215Cmz8oWr5AjvsMiZYE6mWRPxft74sL8hBA7UC6BroQ2AJsNHnyowtxKHKuN",
  "key16": "5nkJj2XowA71oPY5JjQwdjomNvdaKKQYwQRk7F3cyEw7dKivUKgvgdsXato68oQCwVJEYW5UvYrN1CGJ2umjFS6T",
  "key17": "TP4VWUT4zsdP1QHqaAb9Ugo7cWiMKXnUKe85K3t8xk8tq1BVsgPrJjPKj8WHSFd6mo538i53bPEjwvksty7Sc5T",
  "key18": "4ri5epvn6D7LotTvYYcJtTDrgm7SonBs3c3aFecvFLMofDYUt9amjQCecKeZZALsrfmzT5BRdXovJQ1VZv7DmXEd",
  "key19": "57y57GfnRJsj6eJJdc95jHMbH4JvFzqkde34taoKWv9iWmiV8CsxeCkZcJfRsEiWFfP4mAKcSSczEPkpvLboes4L",
  "key20": "2bcPALj8dQv8qTr2boag4fzt6YDRZqsNEe3WMDL4bL4fPvaCkMZoj7t28qb56FHnzRU862kTswoiFqa23PYXDcSH",
  "key21": "4VUEabAJN7SuSDGej3mFY81oFHi8xQdzMR1GoxKvm8wwt9Kbm2Ao3wDcAMUh6jsnHHSjoNjFUDpRwVYJiiF97CKy",
  "key22": "4c2mU5uRLhNZ6c5B8W1dhbSJKCwTXwrAcpwRWxrDcKFaXaCuwJeS9psfsHVwQFEdWCY8bRxCbwz6RTojfAWnrnRb",
  "key23": "ho1DD4pfL6UzCqfeDvvMgXr32Erz8yApdgwXpx2KG9vPSUaArNHsBtUWaTen3T3mbS351j6CWBar9ZhdWzTyJN9",
  "key24": "5Cru4xhx1ywQPTguAW4UJyy6oMMV7JRLvBEBowtrDK4EGBc1dXoRsbyZ4xgKvAd3JtwnfwD1D8WPqFKpcVrKLvLR",
  "key25": "4WbrfEVJ3J17PFZU8pbrwZVQEw8RRm2So4bei8RcfLWcZt23hTBobg684jQrH8XvBg8SLTXVSk7gb3DAPvQLJa1n",
  "key26": "2AMRpKZjwcViRjpVTTTra9KWTDtPr1PF8TufzbkTHMeTcQ14BnBYXWBCWj4YWSJTFnCVf8MWPpttg95xPFdfyk4G",
  "key27": "41WKwTDqVVD7USy3Q9WivfhjoYfLGQAnYwqNDdL4g5pXB1S4uayCd74HSqB5R9A2psJy9njdJQNw7wC2Vx64h8M4",
  "key28": "viXVGJyaWYH8xiK22UhjH3jXZ6SJW29qGs2tXCHvvq8mWMrLZ8fXitg4xCuG5Z2nP5wFyYr5Kgjuka9fUawkhL6",
  "key29": "3NBSruKxYw5Qev217kNGHJE9dWSNEtGN4gSKRprnYhLxxNxv4pM3gMAXJ6KpgMHxyJQZaBXyWU5cTnefh2Az4gKU",
  "key30": "QXSiHsaw5b9xPE4GcT8Nse3kJQybkgc633oj6MMeQSG2yANHDE2jNkHrboSZ2P3UGMo8XidHL3JVYyUKXZA9Jfi",
  "key31": "5798aLvrRdfiSxaNfp6dSfUY5AGKEwg8nUCnCkkvurzUhV8grNfaoTUkmm1XPvkJUniENPxEiN4mxEjFvP1ZSboQ",
  "key32": "34nkDc6ADHo4hsLcQCTDJAgqHRBrTGFg2KE8yCagLv9FThfD9BqnwiQ84vwNkZ5aicRtscHPn7LbfaboD8wdzcmv",
  "key33": "5VhsaEQrjGjdxjTLhASwAdRvCQbnGgVrZVCew27UJvV9PxEwfCCKYBn34vLamF4mEkEMjrEZNXoqBLpWZpvxvUjk",
  "key34": "2BqgnqzGrhyGpzd2UpHyv8HzMNQ6zxDjwTiDCgsQSmXWrH38SGFocpS8yAcJq2RoJErrzqnCBkRkQGtiX2XoofuD",
  "key35": "5WbWE5cVAMkEV8fN9SZ5cnBykwpdxtEQTQCbjP2U1VUSWWrH5qCcNuNLrsfLE7td4i8hGDFKgkMhf2dydBMPio1c",
  "key36": "2qhL4gEvC3ifVwRhanPRheUkMawQRYA9UALqL6Xqa1QdAVZkYKPLVddxWtnzLgB4R6pHG1AWJUvecRuQxrVwSLyn",
  "key37": "4giJ7V3bhWh6yDbtV7tixYEFSj7fWuB8B8Eg5o8i94myMt3M8tWKDDYSfz8o8YS7M4WzRC4uDviWMqa4YY1itxDR",
  "key38": "2b6rYR5nArstT5f3pbNWx8kLPbZTr7idkurU9ygL4rcm7D9Qdp2XPSFhigeyx7XxXZ18fLCP5fKQZTKbWDtkj4JY",
  "key39": "2w4SfgmhL1owrdxtaX5RBPdp5F9u37fjfajvZiTz1KHCwPVmyaUEDiUVxbrGpZEMY8ymwiWxrfhyUaCPEDV6RtFR",
  "key40": "5K9rH7RQzU18ZzdKXGRQYxwNrvAQdfEMeLrix4YQFFbF79bYEnjLH6E13qYky4VksVfrPPxdwgzT1veYB3Cpcyyv",
  "key41": "5eB3bmjRT3m3XA5WeatCFCZGcHT9HN5L3wnjvvYtkFsFs6RGkXct3wBSk9FgDiNrY4nt6uBx3JmBWcyMpvHDbTqJ",
  "key42": "4j5kjSHtcYzxWaPaxFSB2ckazdaivmmEL4jsUUnB89RCnsW2jiuBbnpf212PjjQ4GgpgiGdi9hykxa6daN7sQdfj",
  "key43": "426NuZt7hzV1NQs4csSLkD97sozY44KH9Zo9M7XcBXqFgEXPQReTR4BsrhduxX61bngeJi7frFAFg8633LvPiam",
  "key44": "66TRU8AVd1QN3BhaiR1upgCFLXnL5Fvs4qUD1uPn1pdK8P3qw143eLgC16Nnj3YYLDRdRzjJtJmUDAKrbeJoDMcj",
  "key45": "3NfAFTunCGDFi4ekRtoxC794Myd8UpBvSYQc9yPDBtYN6aFvniU5QrQ3mBBLFL552jrbAkm4ZLqfTL1XYtMqNKw5",
  "key46": "5uW3wzVTmQ1zPy6bFQcFYYu3YPDGEvkRJz7fp7UQA37jNmSrrvtYxr2BKwKyiia852meQYa32RdCmGzM61VCgF54",
  "key47": "5QroiD1UtVszAUaDEJcoFPGqDtQknSLaQXPB12ZtKAk8eg99UUcSVeRAGicMkCGW9pZi6pKVgfugKd82XBULBp6t",
  "key48": "4HftwMmj7sTsf2HiT2bySzZfujncXZV238dgxkEHSuJdvE855Er193pQ5KCZ6wEHSCcXiDYyMKsWqS2zzSgMqjLS"
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
