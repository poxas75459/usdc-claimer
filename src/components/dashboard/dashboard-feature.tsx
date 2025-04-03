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
    "59YZB72qCNimHmjmAkvkuxRVFAzcoqPxwe4eAyVMCu4EX3tZfzuzpxTJE9qPXEEHrtpo62GWmkRzqcvjYEG3tBag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Taq3sbVwgBmz3h7MgCfH2XaWCtWQj3PgKGAph558phfa9UME4TqbeqYXTQNqHdW9d8ArRKeSwKZbZ4jMcwCtv8u",
  "key1": "5hWf9mktFAu5PCL1BYSmfcQJqT49wx6PZGggLEPu5m2PhGxo81JHx8QahDCConn3jYaNKyM6uRbuWDVTyjpn168x",
  "key2": "4CbKGQnCeUo3bzMmQXnYnMbhDEjedCY53ZZXDC4ae1hH1DoXiU7bEm8yntdcD4RHDh1Fzx2LHrt8GWjUu2D6GcsV",
  "key3": "2Xu3eREte76Ccmf5oxhjhCvu5mac2jgP2HMu2nASEiuPAHHhVZW7etbFfhyVgQ7ykH4NkvMvDuaANVMdty2xsXJb",
  "key4": "4iavKbMQG2wXEMkic9EVYyfrcMYLJ1SLCUGdnPCWx988ev2xwLE9LUjGuGV2gTGyUNARRWjyY47ssLTCN4RLuizq",
  "key5": "4bAUMVvt96tVLL4TK7KTfPATVBRNcJ8d32NLRzTAFkjTcSieNMzD5WCoN7ij11EXTHc8kRxrsjTCFyQohF3WoHij",
  "key6": "3risqMKUS7CtWkgSEnixiRdqVXb1mhUGCZE1BTpu2Uh3fWAepEZ45XfQCrcvGp8qTFTu6pTFJtVLQz9PQ3SAUQyE",
  "key7": "nT98WHGym11ZPNrxhE67U9frPFRAQ7r4q5Jbs4JCaao65JaV9E4bYmNUCcc6x4KBsCLmfi4SgP1v8ttdxoq2KGF",
  "key8": "3icCauHF6JZ1R5wgUqL2dag2i6TV18yhWXrPg6VL9ocX5oGi29h5VHYZum2DTNsfNuDAewc8H2Ueuw6hGwgD8Kx3",
  "key9": "42bPHEy1shL8rqxxG4BTrbX68nu5zcS4TrsLpMZkADgWosAnVT7GQzBD5JhXDF5dmMXQRyjSmZM8F69uRuBKtDph",
  "key10": "3UT4TRH6vGzwv7n7FUeidiVRTej4N7Jk5Mft2KnnDSmjqW9F8TgJQYssCf5Bggk4oKz4o5GFRkZNMq8C5zEHmAP7",
  "key11": "64JHLoBmuh1h9yu5uvisdGbc86wRMYPUaJfw9f9sNtEHxtaeqmHgJRN6J4MUG94CMsHnejNeZmztYLhjFwacryQn",
  "key12": "2u6ZMkjj4WrzpNXLaYD9synqs4RrEg5X2jukwW4YZ6GBXitGZ1iSXfehDYxQVk618MNY5NATqNd4msAHvNWbwp1b",
  "key13": "2PRpgUawyACy1hCPdmPyxDq2XegWDci6R3782KGLHJXeKPYu5wyzGTHQGZAkUaDjZLyhwkMiQ7sP2gv8SEyWH6aU",
  "key14": "5ncbAKWhiJ1v9NA4tEgZVRKZHr3NXBzky7eg8tHsPbNaVa35SYyiCCV95Sha65XwgeWgpgZxNxxrHxj9TXE8SERF",
  "key15": "2f88t4bnFsEdt3SsLEggJwPeSFejD7RSX1KqoY2B34EKhsm553njBRjjRycm9v1bHwXo6uMQcRJPrtXdU4VbtVTB",
  "key16": "4jDiZT7Y8LJLiP39f3zpbhdcrdHUincxcmnhRseGFFv7tovQSNYxSp1ua3FNjShBwusX9cU9mTa8pqMjUc4r1oiq",
  "key17": "2o341aqCGo18prNq4tG3H2fKDXaBiXB1agtbiaPzAptmYWeKH95wFn2u9mSSEVeqadPZqjS5ZxGsnrm6gQiNv6DL",
  "key18": "583kvqBKfK4rz29Yq9o9tDi6XW3dzitonL6LDDUzypDWxUQYBuUYgBSYQWms3LXoRZH5pKFRcRfKWGHViQe6fkrk",
  "key19": "co7nXs9KyGdvsBSzoT159X8sqgWFAFXSfZVtTM554HjkRN46kQs7LCLEK8uya6Ryw6TZYBRpGxQWuKWXNcDk8gt",
  "key20": "2AxwkwMDv8siK4eRS5JAatEmPmYwxhpLhHVLzDue4KZhBC9eJQJhPyaPYfNmjSZgz5giXgYNVTHKqSkLpjr6bnMh",
  "key21": "5PZTn7icjDZcXAdYTMJeZFRuijshhrZAdykKPpzF7g6fyaRAvdoQx3iTdExxn3vr7JQppxMKF4q5e55hynidadRW",
  "key22": "7WdhC3rYYnVV3Ce5FdKDKbo9FKhciMYgtGSVSR3MJ3S4utKKyVVYHkg7CPynVAcqEfzcmSmbuXkxQW67vNT4Hgq",
  "key23": "51axrtRW8uQyV3XVH5aeTjZAdjhx1qFeYdYbmrLJeXMUHNsYfgCpzP8Skbd5hLxRgQ9DdKqVNWvbhgJKbnzHgBuQ",
  "key24": "4ij3xS61L6Rgf6FpKaZLLEZfPCzvxZCNCcFyEZuPFsWsc4KZWHrS3s1PkLQ8es4fe4wvQs1q7HecGRww2BPv62qj",
  "key25": "5QG2PX5b2uJ76N3coxRBsE1DLF1DWSxHMTuYH7EVAuy48GgfQYKEyKZKVbwwU24PqWMdXAkCzcBMZR8xcGzS5t8t",
  "key26": "3Uwh19VCo72QYHF8UfoD6aAfdRuzx65GjSLBvqj8wj3FrFY9D691KWcu3d7ieRWEpvBmUVWPKSzACDMMNsGNnPgg",
  "key27": "5JgW3iajd6QoX4RcALskd5NXjiGFcVdpD3a6soMegYQhAGyYockVP1k8p5Pr3czsd4hGq41UX4KKZxjnhPEgoRRH",
  "key28": "28cdM28ax6qun1BFMuCmbrWVQkN7bHVHmdzZXnH6KpbL1girbAxXpUUHQjJ4DcDURUDmrwKrzo5EafDFqSMWFscF",
  "key29": "gRdTCPMmmFKJFKJQznYMm6xmY7h5mVVQtneg6YG65XcUg8oEt5RD3M1bo8aKtqfrZVUwWFx3gaTjnkjqUBCsiQt",
  "key30": "4bzWYFhxaotKEoi74cJRWhkbyJvnHArUFRF4EZ5NJgREycwkuizeJA5L4aDQe3AbKWtm8B6cxWSbuM436YxbcVf",
  "key31": "5cbEWaoJSiqV2WCPjN2NeV8ikYbXND1dxhWrDgdyCMyZCBj8tDLmEJqZdRTPRSfLuLXCVXAStmiJ6zXTEF7CJStv",
  "key32": "4Rmq1L5qaxs58HmnLP16WfFFxkj9Cy8iKL6xc6D9L67uZWy4FzWBmeTTwozeQUR7GQSfQmgohnSaFvmpnsZNcieL",
  "key33": "4JJaPXAbmGPRvEkkkNSqrpUFN5bmfXE3PXBQYN7getaLa1wWJGgYinVXYrygvbX9PXSn4Wndnus2X2YxvFskguNT",
  "key34": "41BU1q4yLXpgdsXWpr7WygXdszn8iyiZcJGz5oBM9FdNg1gKv6ETPJENCqdUXcxUyPsUEQbByhczK5RqJdikbfQB",
  "key35": "3rgRhFZaTzN9qm3USYkX8z7ggGtN2EAgChaSB2C74TYFozRGQr9dSeGadYS5pARhrnuZhSG4htcmMXdcB7yyuCUT",
  "key36": "WHMLtnHhNUag8XXZE4kNbv6M5hyzU1x6Tf5b3h8gG4it27S2wUvmAa5Qnxn8NkZaDxen1x9YrKoje9brsQ1WwVA",
  "key37": "TgGgPjzbPjuu35LfLpfCso5TS4eViwfE5hzVgfJ2QQyeBKhzEB7dBai3omZDmQKcoo55CMAbSfRntm513Zqw7Uj",
  "key38": "3ZSBFCwbkGyzJM9U8sZNHKH4VHvuU6GFfocW5HBZQ9kPr1Pd2jGkLHw8B13rTBhTkdbHx5C3dabkUSJ5JByabvjh",
  "key39": "4T1VKGGnJVtAhBpyyKrqnt7VEW7rWMfNqi36NWoVqzb5eDCksuVpcW7vzQ3TGn77EP4h43zVb6GRmAGKp7YTTBZv",
  "key40": "2FM2pnhLsGoa547cPk8sKVctFBSFDMo82gjQc9T5YmLYkwqJbCwzwYWQE6B84pyLv2MsEpHpPBZUnHscj6ozBMDF",
  "key41": "2dDG8G1vRMZHvCzxyTtJvz5CZbXTT13MCiGw39SVC7jbgegkH7rbch7Z7tpBtZQiYB8L3fqi1QxkVbmX2A7gfAjA",
  "key42": "3RWwDHCdszV7KHhUNU4FeW21uYsAnQPVRkKxN85qbYXJrvpmwQSSDJt2GHQ8WATLnpdDdw7iG6rFZJfwyQCU9skM",
  "key43": "nNmRhmreNeMrxnAFGuwcdfYobm2yZQZNHdNPsjuPtYufgAbVKJdayvhKN9KHLDr4CPnUgYrevsvYe9PsGCFWnxv",
  "key44": "4S8ND19qQiPnpFUPtS4qdhdRVnBGoJruyv1bg3zj7ykZFvsbXS2xPs8YynH631QPkdQNtKGfkj6V2kTdTWCCgyrH",
  "key45": "4dYfrDMxy3wQKaR6ZyxyrZsUkiUjEqAwhCBnzaQyTrjLCcPHLaccoCGSpyxT1M63CboifLM28vyTji3DqkpDRfzk",
  "key46": "4KjMJQ9kXQk2X4TqE2sAfHsvPJWAcFTJfVyBx1A69nrCDrtMG8zTDyF2ytvfMk46fTH5t3vv9TmpzdRaQYJRh7Ct",
  "key47": "9eNWc4c78DGTR5nWwrPdNMf91yKfMwJHZgBwrVyomReUiU4TSCJLPeUtHSuwL6yjFFUoLh17h8eJERGbEi1qhJ3"
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
