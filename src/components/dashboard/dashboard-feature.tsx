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
    "3Nn3fDQcqktcQ7ADzSghiDmCYLreKWYuedBr1zBtMAcNMcEL2tqjCzwEUy4i29a8GnHj5uf4zaASMVKRzDZG54Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtRNnXmzqmU9qC72A7nZq1XpxRdhiyvGW6HPaPjFDkjiC3TjnaiSxgTkUwEGaaziges8WcZpWqhDEBviEqUsvKW",
  "key1": "341Vbczs5EzQnYEXYCw3wqfN4rzJssfYQgFDcsKsWKZVQgT3tbi6rqAhBzKJWrAoQLoQNVovMiuEhJLa9nKcPUYi",
  "key2": "3inMZrTU9pB2i2WawCX8bxDwK6FvbDigjkTSwiepPbmjqVuBLF7868EW1XHuDQexANESF6Jn1JRo6vhCsfiS44Mi",
  "key3": "5vbLH6qyAoWCU4AbLghVLkgnvMAYSLnUcPJj1du9m6aC4KsYci2xvtEveKPUCA4MVFLPAN9683usoZihvxr1a5Ar",
  "key4": "5jcE64mhmi7xG67Ah41RvL3QjHSz7A9b8mGTdbLyU5yr1aKUPbse1PYqHr5iM4Nb9fiwfWDQMfRdT6DzVWkkvAVU",
  "key5": "2xDjWTo8YgZoJA6yzcr2RcGiSfM5YwjreK85jALWeBGvx4AG4SM7uwSk71vKJ7KFgzQcjeTrTNz25qZeuhhHrS2r",
  "key6": "5hrnPeHH22dpR5XvsorVuMgsajWhfSR2Da9eAeKjhSRP5ZmWHyosrWCyjGFNPzuQj9dEssVKK8FpLKbx4u74BeWL",
  "key7": "3eg8dZ8vcdXDyqzEhdvov8ookh85k9vnDyTtDXKutnwoA4WsuknLvG1tDTuqivS5qpRkhLXVTVGHARf6gt2iAmYA",
  "key8": "CDwtng9V8tYi9i6mhcvjDGRRVT2a26FBYwzYnwDqo7uKJYThZABVVy7jxkZHcTM3wnzQjhXFkviepc3j5TYyGo8",
  "key9": "3zxRBx9DXPk6GBbSUtLGmppKzZrjPsUVZ8RCmVp9uvwV8hSXZ2zx4VqxPX67L922vp6y9TTQsqWC9xxdcvzoY95Q",
  "key10": "4whu7rzyvoL9KMJjjJNzFLnLGR5rJMS8z6Bn6H47sVqw3YnjM2QMrPTXF4aejnCef56ghXYFXuC4csPN5z9WZ6CQ",
  "key11": "QXUGZW1vhxAiJJwUoY1ABjsehT4uVi89zUJ9QhE8uhPufzfq1kLd6PCVYRc4BNdd1sU6AUDPb2PxJaabsmvVmzT",
  "key12": "3fE1w7t7uokbL7X3EpCuKKYyGdTMPAZ7z6fwzwnaVdSaVyJ9UdxaZzhGznvBvpW7eoA4jFV9HwccZXQA57UnKEcA",
  "key13": "22sthHAtmUGhFgLVr97LBm1PJx4vXj94RzUTcWrKz9pNsFhtWqSt17BMj1puQmYqN1GUawCGnVwnap8q7weiAoro",
  "key14": "2e38CnHqmPc1go6Aca6th7tJd2UCoBMs2oqMBfhMHaHnaAjBLxzs7GqZaPDwUhgW66n6XDESTJ4WiPsgkRw2F7T7",
  "key15": "5KxaQqtdMaQnXAqfPvhNCUMc1x9b7gMAbqT2fgcfoaZtUjLq91j918o61LVQ4TDhar8hfmne9xw76QsVukYrMPbE",
  "key16": "3NY5XWXvo6h3N3rngCWnsiw2U5XNjzYMSZzV1tqm4e3d6odkzqdKgkTjxDTpR6Z29w1BxjZnLw4h8sYjcgd21X7N",
  "key17": "5RFeZJhiqnWZdskGzEyCD39LNv23px4o46WPdNNumSxnaH2rzC6geMhx3H82KS7LeBEmLQW3zx4SouE7mxXBrsAK",
  "key18": "22F3wmk14kKjptiKbwqUVYgUuvxZXY11bCKNECZDaNVYrdPGE3vjvUMoFmefsBQ3dretEkUe4oxbpnd49ZSeFZBH",
  "key19": "3bCZMcnNL9mhgrGVnTzdvBDQqYPDcrQ2kVRH55PUPpp2JR1Nrb855YJQJRv87KBRbnQd1RbFd9SkRLE1Ww7kWZs",
  "key20": "4Ucxw2tpa3wduq2pG5s9jkZVFBDDg8Yq7pt6GBekuEgqx6RdKsxYjyve4P8XFju77A9oPPCqegPian2FeotezQ8R",
  "key21": "3RQzwssCrFWgtGRyGsdenH7LnnWBbEYgCnKwxvDaYw44SZLuGnrhaUrrpbf7RPdqXhCTvcENv3xTCE1CWhgDTWWV",
  "key22": "3BNbwJemeCtcecSdcSoTZjYugHri5Grp2h3VUGKQksZEcbAWsaiQPnVn1aCMakPWys5od8o1tFXg5ibdpuH116BZ",
  "key23": "5vNrXwG7nPMcW2mgNRH8wDpUP1WdcdwiwpZscCXryQRH13wAgpKMbpGCwhmzthYtFj3fBm3bMqiFy6nBR65sTkkT",
  "key24": "45jDnoLYuVQqvKXoBzLHCC1PbRB3jrr3NtFZbQJmEi4wXqs7yxSsnMuGWNuj4hBSREPnavXPu9gJhCLqU7XUb3Xn",
  "key25": "3XYU5SxumtsY7deLGyfnagob6bVEZc3cqzzv3hmWTsbQZWuonJ4Wue7TrvpDY72kasNk6cB9VEc2EjZgVz8aNUqU",
  "key26": "3mHCxn7GJbDWPfGtkA7rPCYxBWkQNvhWsSSND6pDFUV8AaXat4qG14M3ZpBWwrQDAyRVkv7iTeuY82Zet9CDS33A",
  "key27": "2e2HYHBdgAS39JQpFMESNC6NyF7tgshc77dMdP3uifeQbTU9otFz4RppZqa7jV55cVqGSHoURD7Q9kgyKgbN1gFi",
  "key28": "5psH3BnX6Ap6HKE4uindt3Xkf51DwAs5j3RDqR9T2vNmd6P2srQwjqmKZ3TC2tzRBYevgn87mYGVxLnA9kupQxhP",
  "key29": "3TtKrpbuCTEUGcz9LSdbPAYRbAd8Eha6Rmz2W5XVhgGiRTEtqSCwm1ATeKdALW6UddNWW9exBaHTNpWw7A6Q4MAc",
  "key30": "5YKPjbmxQQwuHJFL84Cc2fjsGqcWDgShMLL297ri5usoUXikMDJTa8BNnVjVrBhWqapUHc9THRKU8i7pVsPzozDf",
  "key31": "3TMJ6geUneqSdg4Kx7xHZGEAGYGp4PJdQvyBXWxxsS3TnaeK7M6qb7WCYVrYH4m3LisuzuT6CEjkLPm6VBg4GWGK",
  "key32": "2MmDkqYei2X8tMyRsvj7XmxJWqknvDJfSkLqUpycMEupsSJzvZeRLKnnGgd8qhWXk2yYsGG8e2RD2ud45Gqi8Wbo",
  "key33": "3hSpWFa9vkJyztymQRYBFk1B3DMjmRYTEhk1G3z8WBSK1rW88eUNW1NgpM7HdX1d3Y3KzpdccSTo6bRqvpVJd1So",
  "key34": "3gqfT8unpwoqgEdpuChB6teu6TzzB3bzLPoME2dSLbPmj1emMahj8kk3FoWAkgqS1FnZpkdyPBbDhiGikXLBs7Xs",
  "key35": "2TFHLn2n8snmghfAPSbnevvCMyU1S9GZUVuufBTbnKiPpGbY5m6S13iNV291kdbCbFBD4So5NeW6uLDyDtKtw1uL",
  "key36": "2jArHzJve58sqaV1vgq7CJeX7uBMDDFsVcWRJ2CqWkLRwT1LRZ4eY5sYvfZLsMS1Qfv3c9Qh6ExwuhyscBTNR1YH",
  "key37": "31EWqe7oWmMkqyDoNXGRqf1DoPQn9DcrXnVX7mQsAEPWjxnKrnRcSrFdeSjFMA7Dt5cC8PHcu9hPbTaF4vmqw3vs",
  "key38": "43QEA2VDgYrw96g4gcPzKWTeHWmkyCzyRDnUhBKTq6X2ZmwAModeZUhxAuqbWHfCUrwX85e7RDci84JTFi5zYJiP",
  "key39": "27D3zL56HRyxyG1qr9b8oLyrq7hVzHJjFGsL7khTNkgvCfGD4TFeYMsHtkKt4UGLVqE2KvgLc8NgSqqMUdRH8nwQ",
  "key40": "4XQw3sNtTtrFnTEbkuTxdVq227fVa2qyqhbiKWkGRKgztSGRECdG7F2DVuKhjJqA9EA1ndU7ZKerq9P8D4KPZn4Y",
  "key41": "5o7ezFBiTELB3EikqCFfi8gCNVCapeuhB55Xyyaff7Sji2jFVkGnrRYQZmEEcjPjsZHK217DWTmy8pGoBZDjJ33J",
  "key42": "44GUsQpwhLrrbLFLousQKBKpR8VE2pj9sC7CU9MR4SadafkNgEEwWzmL99j347TgwpVp47p1GAsnZxdRbfFmivqB",
  "key43": "4fS9ZYcxZm6QNs1AabxJC4SeFYgXgksc89geVGMhjJc3HrEsJDVTaD8iKrkBWnXhrEG4vDyJRpk7A5bQ3uULmiHB",
  "key44": "2hoVAenFPcbFyKHrxbNxbTcwnQagWa2wnREVmfshp4y4zFnshe1SbrqraUjWmMnRmHMzNGHqHn6oPZLphBKV7rob"
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
