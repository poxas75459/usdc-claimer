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
    "5QF4wP3Vgp7FxN76kCpMgfEcuEf75h8Z7xvXJsbqod95atf4knmk2CgncBd864PZ9pxAXGjiChyKWriwngDADA2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2teB1cLvB1tY3HvCNf674wKLJdqZS7tDyAzGW8k8DzuvZrS6g1yUbTwYABvAkVidAHtrcJEUCvRuk5Ne8i1cEZUj",
  "key1": "5rKWzpozxQhqn7wPqCMgoGyMQfgqaMhYpsypYWWsw25597KnRvMRHZZsuvv8J62LgdTVMuk6SZK9xUBriwYzuXFh",
  "key2": "reBzbdEuFMwbAtwaGkTm7vVHaDKmKJKsHWt4Z6WM5nYZC37bkz7UN3f2etbZVRg59xTR342wRkTp91skz517Fob",
  "key3": "iS6dLFpEPnJbrP5TLM4QJPHbbXCkAiHYrntPVwc2JX9ZZ9jyAyvtHgQdhR5zojBzjmVTomESEbrEasu5ZzZpKxM",
  "key4": "5yK4stdvVscDRzRgVLppJiwDvb3LwcZHCHVSeu67vi3MA2DMRx5pD4c68bxJUB5EmHi2TyBVEMZHD6vHquy2gnz9",
  "key5": "3NEtW53G8WJx4AhcuGRmAqRQ8t6njpYLawGuhbyZW8CThnV4jPE5pwYuSeYYNKVFvsVh4iSLG1cHPh2SXJwJkshg",
  "key6": "51e47WHoZ3X6fzb7m64n7Haer9DwUJ83xjwCGLg6pL7c41kNF4j1NCX3go5gnVsZYiKCo6ZyCWV9tm3wv4seAxFh",
  "key7": "46BfeQMUs31F5E5RiSPXeA589G6xkEUnkJ33xX9SyPTJqobQgCyGJC1kvZY1TL49nyAjGszDKNbdYVuuS6c82h9Y",
  "key8": "5p2UMDcgLEH7BegpT2s91x2EWZ8ESfpY4dM19zZuR2nZMAqFDvQ6uCmzSvWyHzBtWZNjNxy38nxZYn14fs7pkgAe",
  "key9": "4FnttQuK9hF64S6AhHxxA7e5Uq9sb9a67qeH4aYLg1PPk6oRcrWPtEsjEFhCXA35hLRqXNG9ttagmc21oxqwJsF5",
  "key10": "4TynSA9AiQPQitikXL9eBEE4UcRCqwvkB3UdRYQhHMaRko1cZCReUBjLfuRZyLq9ihSjo61RLS5iwHT5epUwTwrj",
  "key11": "5mbSCe3HZVRqCBU3e56u93prZqRDneHDzvyPbP2ek96iGvotFGQLr5h68qevUM7phBohjXMtNqxG8z2sYBgMmGdb",
  "key12": "5miyHJdcMgzNmxH3CcCMwXa2A7JkaDX9ucCV5gVt4TwbJGsPxy9vmdjdteq87NpBCddvQRF9HhQ3gWzSxNM2kRxN",
  "key13": "4S3is6PDsRyf15XU9gw2idd1eNub2doGucxSRRe3kwtzeGRwm1KzAD9rsnH1QwZNtdUgWsu6v3xGexF96i6QHrs6",
  "key14": "ETizmS7ZyGtNhmVDpBK4cuA8otQGGvMoGT84fVPwhMdr9L92bCxG3MEtJAYjM6YpSQQkFCr4EwXH9kdMTX5ncNg",
  "key15": "yS7wMoip1XnDfQqXkYLxn8fXUSdZgAsESnWv1tuwxJGi2jVNmEJN93xCknaS1YVLjg4xQnm6jjNejyxQNXfcw6B",
  "key16": "6NmExaf9nWzmxisQaE9WCMCDYQKCsLfGmV8VbJbpk5iLEo27avkc75WnYxrPCXzCsZDUeW8FRZmRPnvVbEd8z89",
  "key17": "3nv24dd9V5La3R9J2vRtVoiUna5uuzUTitH42pNHSYCwE8Ra6vRBSuiCCsQR4ixQ4tjjq1SnmAUkbf5dJyhFzRpJ",
  "key18": "KAeUnv4iS8UMZvYCf3deyiYazDhfBVACYA6sKVyuhtTuYuf5atekEH8EbS2f1QZYWW91iHT1Y5gKGXhD6jfPZrf",
  "key19": "EADkuuAvkyhRLDvUNUThnfs3LozhLxXxqXd2vEoTiqgy9M6dBYor9ut6t7vzLSPZZHP1yjswL1aHeJyVcGrLY46",
  "key20": "5T4HcijiXm4yYYJkAWJVCWC48Yxhqxrba5x5WvQfdsLwavKsUGivXtyiX9fDiJVpXfh6CDUZ6PEHj7GUt79ds3we",
  "key21": "2jzmW5gRdLkXGT9ziodmvicDLRnhWBMDh3TDmUmMAVN3h4XnHmBxyuKzvgUnSMG9NgKTN6e5Xy4f2ZWFvgwAFBvx",
  "key22": "3zG9rSoTLDNM4LKh5wAPsJKunGfTdAU47BcvBq75xacc8UMRdtvTV4hS674oMyqfbckV9D1LSMb8ViiojRV18v2C",
  "key23": "3kh91fbYkrCjMu36zRjxKNfHz1qJv96NeMs9Wm1tZaWUTWz1y3yExBRL5KinZxqgYgUc9BwnVFdcHB5nfeMFZQ4v",
  "key24": "4GBv9p8vV8RG3BsKwp9di9AB4zKnwQY4RxjjrxPi4Xe8adtwKe5VFKJwcpFVDENt7P8fRViK3QRAdDujhrJ8LheK",
  "key25": "5xjzBuTf69d6ij6q7vamMMSmArXskf1PxLnYp83hUwA93DoHfSapubykaexAfvUZ3DYBrWbYwBt6aKrTgAbdVp7q",
  "key26": "23FZaRrPmvio8ckGeYQ5x1Et1g53myBZNhCDb37hD8s6g8gRwiFuPR45QmoDbLewzVYA7SNs5ZjfjQ9NWnNNu5om",
  "key27": "K55NCZNiv9MNtt2HNSnyrthfYEXgakhtUmTcwhposDc1YnXexLfJvLr18hrHw4JnFWbrUa2q2iu1wFKB8a1LsT2",
  "key28": "2v9NtHrWvC3K8L8CJHSFiaLcDGeJMC9jA55FuJpQJqLc6H9mQKdG6QtSMfanwPS6fyncMJkMps1pyW3EMb576bqT",
  "key29": "wNnSgJG7HcLgrfDCgAJasFqkESbyL4Se9QGedaGrVeC6inmwNwyteFVk28n6byF3AGjXxTzMdoMPQtMGhWHCq7c",
  "key30": "4KXRNwVybseFfaaDN669cKH7vQMfGZWTH5VoTCchWurEKY6c4kFR6QcHwzTGHLZGAvGwD4BzzMk12zvp6QUuvQ31",
  "key31": "3LJ8iP7YCCx5NNe67XZbfrdNiyaF92Fm7HPeDiJ3dBKjoSwAQ4L3y8fgr63GYMaDZfft9yLrYhUgktRQnHC3PRz6",
  "key32": "4DrcDayB74V9XX8dYBb9wCxqG4PREQwtgXHDtYQ6pYMvtk8ZSjkesc8ZHAM5TfutWBc7Zy2kotJNVsd5nvfUbhoZ",
  "key33": "5XSxAuEnxyu71c1jLB8g7qu28i8cRv7H4ZW82bVDH8veGktdaqX4teEahpGpmVscg3Uf6KBDBy2KfQfp8e3Vbq8p",
  "key34": "3Fxq3Zv9LTGyJb7fbyXnzKHRjPcxBQLnF42pqbh1CbuvwPAe3FDVrWnfNJ3Mb9AgkadZKrr4nqhFAuRnh1Vq4oZq",
  "key35": "4SYUbEc4t5RZw1Fpyi9tt1nyuZgv1FSG3ZKsxhLuygviiyno9ubVnUVb6swTwkJD4JzGXQiW5cnRDKypCpPzKdDd"
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
