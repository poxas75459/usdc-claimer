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
    "2G5UbEkGVHLZ76Fcuu6tTUmKJaVjaR3twbKiU2YJvwoHRVj3LMzEs7SE3RmQtEGfRZ1Lp6W78HWcDV9YcgJZxD8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XKhQFuxokU5HbTqQvniSd73ZwTwfqynYqbCRE22dMxrHyiKs3iKg3nGYkdQcJ1dJAhDuhMCyDd5EE1AZge4qYfa",
  "key1": "3ztNSgFy857nAYTJZvS2RBQkhPrqAi2YBfHgqAEVzqRm8KJFesEgmy3Mq9CnTiSfSK9UFE3wHUbWS8sYHqYS69t8",
  "key2": "FXLQ2cEu7oyryJvBgrU5pbQLt19op9WX5tuRKFPgp9u8XkgstN1NZcWkdnBZdAyyoQNoLNCDGVCGtU9y1WJ9tAh",
  "key3": "2eDn2i4X2pA9j9BgYgGiNZh3Hpon1rbD2teyLHSW2TffVeRzMqQqseYn4sFaznicqeBuPtYSQ3SLnST2pc6V816k",
  "key4": "3QgdsDhqCXmdToqsmDY9SjAH3ekSNV7obLE9UuwmD91R8wjKhicz9cA4VyGjbysJhydNbN7M757RWcAbJbLD6Y5K",
  "key5": "4ahTm7FV1iZLrBXmrmugJRJiNdAXWLC7q2PMuAfaiw4MNdbV4o3Fajy73VJhAyrsmWwRP1TyGVLNiHk52PrFPbqV",
  "key6": "3J5SJx5B5hBnstzm8JqEgPTZgRpyasXW7NMRPuG4n9ZUv7Y7A2iQ4RZhiFvazy8cjRTwHDVxAXLtwYDZZfPVZUUe",
  "key7": "36LAxcAKJibkWzteF5iSgQgz9nHTYVx5NEaePvg8ZEjevLY3UM8sHurz61yTV72sx8TCiuB2NW4bFoBw7rCK27dZ",
  "key8": "39ZKD4GwRKkH3WhqnUnMT49dgZcsrzoKeAoTJyczxNbPfKLkZUmcim5qAF87JhVa7u4zbEkui44CEE6dEUramTPb",
  "key9": "24WP8GZAg5qeVLeehLQcueKVrBW6E1wd79bFJxnoWMtoMXJ92Z2rutSJWiNvm29k4ekWzCUw761zye5YkoT2vvSx",
  "key10": "UFjZEqENkkkE8KmyVkHiqCAkQUdySbR5eDEJXoVchJ3iNcNa8F4fJkk2Y4pw7muEDnoh4vaRtsT7Swhy4wjdJqV",
  "key11": "BnwiWKzQJQLCSDpWKDiK9H3LjbLmVuMquoxAF4KhzMcgTtTGgzNvqsEExCn85ynk8PELiN1wrCorZ9zCbnwL1st",
  "key12": "tg16oDi2J7eubxy8Eb5QEBoYRGCXDXUsQcQu2v8LXb6ZERpowqNws6Mbydgs1S5AA3VaCN5gs3ww6wySQnN5w2z",
  "key13": "4hnx5Eer8ESgLMuFKeaYTpHNbJ7hiSDMwyKtKSFf7JbqCE81Hx8DWKMbvLPK6BpU5qb3tuzd1NUvCEvSLLsyBPPF",
  "key14": "bcudoW9AAmWYDiwyGBBvthQanwVxpdLS7xxso5Gs53QCEk5GKam7vjJZBVEwe73kW8z2QxMZY2EAQwLFt7pvhaf",
  "key15": "5H9eb2Yung1upy1JWVpN3jAdFtPMnW8CuQoSnb5MUmAp1QDwksWrSfVUf8KoSWGaA3QTzG3RRRDMcJ6sAELtN1Sv",
  "key16": "5Y1gdvSxpi6HmncPKWQCTP9B8TJ6HyWbLHBg5BqcFmM6L1UcsYgxJjjhQ3umErPNs8Xo9TjYu4w3acpnZMTucQBp",
  "key17": "4Lo3VP9xPoZ1w1BsVXmBLcHg7FejAdrZreeESQ16BAC88oN8kJ7QzU1G73hwBoubjfEQM2AqdeyFrmDUSiA4Et3f",
  "key18": "ASQD3icRwmT1DJhgDJgECVz1eDTiNcebhGwPPMjvX8SEJ1ZJh1ZEPv6fRmYCd9WqCFjcHgcHpJgMdHnREbbLa1J",
  "key19": "25KpVfPKvz8wdN5rkvDQkGHLgYHNPNtMVrB4nV87Bk7wAwNGqcHjU6zPMS6EJQSpXVFV766yHciszAztPCzboL74",
  "key20": "4qssafuBnQm9k76d2MaPRnxk4EcbRVvsbPxM7Nrne5k579eUSvvjGMryNT1o1sUe9gvadakR1wJE2BLwabXHrq3F",
  "key21": "7azRbFGWoNx3wecq1WdcnYyVNGYiaWyWCFSFg9By3WNokmq2axysonMns7D1fvuCx9g7xv8jdqnBtkWWwSmyQxy",
  "key22": "455a6u4xvSNdFP5unDvvnESD7qZEBwHazsU8d29HNfhWbdCFCyeEg8v29b6bxd6EucowUhrc536N53cT2zbykKpY",
  "key23": "UfkhCvzY85QPLFcC6tLvXZeUhMNCm9o9brWxTA8mUmDoDC9TSmqgmRjeTPtiEGHnny7zb3UGB1QAp9GNnQTxPS2",
  "key24": "652jgYxhSVkcTizfrX8iXdXu2ZJq7xeDaEfcFUu1rDPeje1etQziXt7ZY6bL76YE8WNY67A3wKS2Cbig1Hv9bgjv",
  "key25": "2Gf4ncW3etGrUMUsqMSAzcBiGBveEytzejETCJP21MDSfA5TnLWvPo4i7triu94EgeaGhPkidKaDQh1FCepWeEPC",
  "key26": "atCsUz5GKVnjD8hDSRSKu9Qd22Re52HLBUcwcsGxLB5HFcDqJGxPCNUdPusuunK26yLnTXMgVEPd7TYimZLd4Ua",
  "key27": "5fX1SzSDZv83x4DSoDMfXxKfSYP1CFWdhwX83TK4cdmegAX1eH7ssDyrykWWoRggRiURqvRYSLHEZw6mV41MkVvg",
  "key28": "58qHLa182Ha5bq8NfD7sQQpjMStXCU1SnG7RrVrtmjGRAyZ4FXog5ES5WeS6nhvGZ5pRh5YhcZZHGaxGS2uVXSzk",
  "key29": "2CCgwvJNVCND8CSWcjZjTqkSsopxcRFRkRrcPGoDaa7XPEJeZVWvamKgPS7BtTVkAFXnakwYtMbyPvVSFPJc1wyt",
  "key30": "MrNWtUrcKdXAWcbLZWyPkciksRJbZX7UGf7gTPyTXCyYFb5S5zvt3XPAyxxj9fiyXAGo7RG6p3HcJDX6EvSr17W",
  "key31": "3z2CXnb3NGhWVWkSBELLk3r5RPyJs1jVeqAimEi5LVFbBpNsvDTyibS59zv6DcpbhH7tYYiLaJk8B5pexaY19SHj",
  "key32": "5pBwX3FAnFnrUEHMBREXuNXsik6ivKsZdknnM3cEtaLu5fvyjLNZX9Coi2Z7pL9T11jeuuTCe26bUb8L1ba3nrjR",
  "key33": "3jy5FzpnQQCTinHaHQ94dH6Vqsn8Gpx9EvDZ3pu23PjZTkn71ybW8uFY7e5iJEzBMvu99TMkJJvHgE5RjaFNQ11d",
  "key34": "5xmhQ3YJnky3T1psa3LyyDGPgVFdGsYRvNh3i2vw5R2P76ugUf67HD8BebncLChpiv9MoHzwhnQwJYQazMk4rypP",
  "key35": "3CPNWPgXVX53CL1dBLDiKWheMByeD2PRoobZDMHUZhmW3ybRa64GKWnTc3Yav76DFHtKJnMSpjVWkXs62kkD3skJ",
  "key36": "nbqok6Xh4Yp7GCcpxE83Wtjs5MPm3bucq4Guq6dL4MtSXraxLmzuZ1tNRLiCNHG5vtFsRiFSqgASbXp3aMSruW8",
  "key37": "2zU5jd1kc21ue1Gsb1VdLsNwaa2FDDPEMpQHesrMa9X8yWoYxvJ9A6j6bK6pJ895EBFUb34w56rBaGfVSqNozyBY",
  "key38": "3NQKQ2UK7F1my8xNVMn3jKayESkX57TsFcSHmCaBAt6E6Mnw8m6hZ4hBAjshgyHWasPLVvpwvVKxUcAD9zgku6qr",
  "key39": "2XCwcRno4QA5ChXRnqbf7i3Bm5kwv3jGLnVVgZFnQVrRh9nwz3JVm2jwRg8srBZ5ZkapEme4DsVyUmK8ohbcjqLp",
  "key40": "4HR5iLddKnWw6kLZrNgEqTS6GEfda8ehYQdo9Q6d3ufvDAgvEHCqviqegv6ovzDCUMGxy9ovPwPLPKEQhTqMFtYR",
  "key41": "3C7veZnxCdpXE8249zGrVSttDpA9cVuANQgsgvFgTopADVcmhLNptexK8RVm8UjqrKqcKfBbGLXLEyKDCc4dFChy",
  "key42": "2Fwtf56rWgpKz2Ufsfr2oRjuDaTJ7QUjzYgZhJYq7v6WKLx3oGNc6qVhdY8gVKifncVHdRrUYW4Em2WjRFhMtmNX"
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
