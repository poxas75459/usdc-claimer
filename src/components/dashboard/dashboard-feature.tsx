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
    "2HKhgCDQhYkTt8ACVgwXPAgVtBtH2cz6qsfuaqp4BnQoA6oNoEuQ16D36idi2KMH4PpNQC57rEE9H7WGJSTREajo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsqMAfPDJFeAZ5gwder8PuykJjqpWbxokkip2x74eRJvY3G8Qv7MGjaAGNRgkfYsPizMBGTjGRFejFKgMmMMVRx",
  "key1": "3bYcpUfnDRyAZGGNDiTNd6k29XzXL8jXEBwxFdyFm8VXS6JzfsGqetW5qzxN43dvoDAQCh328oytLvx21vXpdKff",
  "key2": "hvZe35QuQEDaAnUa36j9ek4s89iSg8uYY1ze68r5uyy1yJ6MM2J6fQx1jPfWnjd5zNfXw9r6QjMedeVuzDLgpUg",
  "key3": "3MfP5N7987gY2rxxurgcTyXig9FfwtjX9s6jfU9h6rRnZhRtq3PCzxMDdrfd76Nvu7qfPRuAGhhD1u3ofAkA4hEC",
  "key4": "3ysrtpAJr4BwniKsomvaG2Swu6yTAG7j9itRviXm9agpbfKzFMP3toSpMEveaPe3sg1QiEFMZ1REJSdnQF4YynZc",
  "key5": "3DoYRUsj9htvjAWz1FVA6LBuKSMj4285KBQrXrNB8ZadtXajFFhH6Tpo6PzE8Y4nswECSQZ1vCVsajxoBRy52TFK",
  "key6": "2ar1qMzjjHNhr25syUYFxrWo7n6A5QDdg9fcBW997AjUYpZ3hftU7jnfhZZ2WheV9BRqUQURoPrq93JV6YPDJTGF",
  "key7": "5whd6KBBvFiNbNH8mApnTu9tFGN1MjrGoxKNurELbcrGfZzH1sg4ujJNANTnEeLBKhfgeYZvu8K7xvwGxwaNycAE",
  "key8": "MFyvbgnRxcSC6EtPPsXcciBDwa44x5pZC28CXA7cGfJz83Lksyf7JkUCfyrA7zos59QGwWZ94zwWYvhSNYKHf4y",
  "key9": "RJKdg2yeUqf6fXcwnmMPLMywy8JuD3HCJVstkoW8CspvSqA7GVbSM7mqKXvLubokP596Jk4VL1iaEBDuNTUSZDW",
  "key10": "26B33nejDBCmUMUKQHK4BTzXKdD1PPrmiP6ahVUZWHPeM1F2sFgHA6vkevn3gLvdD1aC8hRSNByT3SSEut98oGPP",
  "key11": "c1vAuJy3CU32CbpT6ipp5CiCk2WoWCG5KBWnmBCnQVpNY6fE4yG4BRGXmnTdSp9e6xBcQNSZN8gEJWGiSjieKFF",
  "key12": "zRAFwzPNEibJ8dogneFwVx3ZXe6XA89LxTSAEr3qDcCMvJ8zLu6gHixbsciMY2ty7J1BETuF8oxQeaCVbc4qZEx",
  "key13": "Rpamo1xeHjFv3q4EM13q2o4HHVktVTKRdUgZQGTr3DUKqAj883rmiQh2L4JeYwuDkH5M32EPVZHg3TB8CR3ode4",
  "key14": "uvNmmawDLTEbSa3UvZbr4qYzzo7QQEF7YSp1fJB9BLMpFdvzPk5TmxKWt4tLUkuyMK3u4wrWWuoGCCjbBT5dzTj",
  "key15": "63VrwXCUSAKULGMKue9HerrTZEbFRv6XgB9BJM35qgGYgUGhdttN1i7uf4ygxP6tjs9ch1dE5MYuJTr5QLQDp4CT",
  "key16": "5beFiszzXNLSeGGKC4eDrH4TfVehEQDB1UeFLh8jefPzXh2JFyCop4CbA4Jsqs9oQq9d12RmyCoQ1Y1StYJNognK",
  "key17": "5Q1gM3a1mtHXrB8W4R5YMHvUXAfDvcyfBp1KswHumNF4XHd2hn7hcTMo8WKXGqvz8NkDdDcaf6QDujS5gXXHVcWh",
  "key18": "217jT88TeJ7iHHB5bA2HExxbFuLHEzSRmfCo5mvJqPu3gN38YwRjj5xH2xbnxTTDzMqh5zW9v5fjo3P68fe7SzPm",
  "key19": "3ssbA9xtw7g87aMVxiG1jYdkDfE4WEmfpBHHPuzKC49znmogwqZUo1V8toxu4VnaJTCPhAx2yxAtNnGCJaRZz8eK",
  "key20": "51PNaVw2Uq1CnWvnwXmyHaUBVELVcXZHN8hYb7La7ubXa6Yvj8yxKdbcn37TVAzcCJuk4D4KEVvt44X4GxUdkgAu",
  "key21": "3QkTKmJ7uzwNjCkvJt6CE9Mz25wZ9UpTs3hTXxFkQaYhT8PZmDpCmxoCCC3ecBz4kDVJAMYg2Yirodht2W6u61Qn",
  "key22": "3C61Rfqy9eWsqjvJW5PgxSdYTbwhsMZfmH9rBakftUBMYwqdH4D7kpiBtGoA14d3J7w1MPsW17cfysLMRtNZcmmb",
  "key23": "2L7McZtBARGn4GTSSrgYxcAe9RWWp4Vj41ib1gGqScVa828VJuBrQTHi71KUcQzWWS317QEYFY4ydLhkycPbJrH9",
  "key24": "3puGs9Ds7YCfdDPcM3ptNSpoy9jsMnQiXtemaQYa9HBuEk2xG6KJrF9MQhYPMa2gMkb9aPg6RCQ9DbWJjWuuZidU",
  "key25": "22KSYuasHbYkg8sd87ZPGjzivR8QGQJWYqp5HM5dgbE4Tzi6XrdwEbE9EzdVk6PHg6HVvm7KSCNPEfo4LusfmQyC",
  "key26": "2S3jEH12wbphrtdQsHv5sb1MUG2QPgYSANMm7Tkk7WKHVaKv3br5YYMFBfeDBFhoa3vF6Vr1vA6btjZBH3bW8Fdq",
  "key27": "3ndUPxFaaRT58jDtLF6Tuevq94xp94zG2YUgBwK4QPG9bWPRRXPb5iYd26krckQGAMrMumHajzpPaK36GRpGxr6c",
  "key28": "37RTcXZBGdr2NdQbVBmvs5pC73uwNt28XjNe7JyAKWLhNRgcXaiskmjZLxBDPvaXGFYDygoAzjx4CJm2diBn8wje",
  "key29": "2nN5mey3YTARwnyhd27DRLtRLRW1N1ueQe4tp4LMCwPYmmgrpg7YiBSMj54f94UfU3AyWX5kDdniHdSRYnNNdmTt",
  "key30": "5YmqTK8EYqAxiLGjMie4TG2cG6TfPVVjy2LEKHjaqcr7a6SQ5yT4cs5szopubSjMARpSXnGmBtLKPSAVuNd5rLm",
  "key31": "2cQwWHCcvMsSytREJMPkp4TuBiWdUkp6RRhWvj4sZRvGzrbu1Rzk8Po3oMtsFX5n4JwkGZTuRZmeWocJS2d1Tpwz",
  "key32": "52xEJ5oqHuyS22BTJL3ux4NHysij6K7nE18TjeMpbRasoXj1bKhBVWo1sJV62X5itQEHwmwUgyBBjA18deVfMdfv",
  "key33": "3UbDJ3gciAZU5heFD5phA8i2M8jdT54sczeKRpEBjbRs3WHdCVEYjFpJejRrPqWbAokSydXsQQXxD8SXaNHMYrdA",
  "key34": "625Kw5CpBgmMpic9MmafW7mH6k3MCi7DGvse1u9kvV1Sgn6hHuebcxoZW9dhHpYXDefqd2aM35rLSqnShtjfenR2",
  "key35": "59A6RtvG7EDTj5nNp9xRFesnpYVbYqo4azQ2nt1jDra2RvDreDY8Yvun6d1QzKzXRRvXVk6TBeM1cf1FpJBny6h",
  "key36": "5UhcZJWughdfZheiFbmzUid2J2oUWAoqDVRhZhzVDfaTtKWjbt5VSu92r6TdUbwQFAC4kMFzSChhXkKbfQvzv3Xx",
  "key37": "3wmP5RvHrrEifzurCEhKzFjzLUezP2qoJ3HEpaua77kGFD9wG5wRp5i4AYVAz4B6tkuhJc1VYBygmvAgj9aGh17",
  "key38": "2QWaafqR7HnVTTDGFTzW1LnM8itJsjRWRqMZaAHur3x9hoWAv1AepsnCxXqnF3jEVDC4tVjntt7Z3gQfFazceax8",
  "key39": "2s6hYjJcr43rtvSVEWBetSPACLxrP6pH5BoyHgytsRL7vboAcKdjmxV7mUC5pjrxijhYhasvi2E4tphcq6EsFk1m",
  "key40": "25TRmUzAbS6cTn3uZx9yfBc6HGEvPFd32uPyS4LcvEEsjm4FTBx6hn5KPjDbT5imJW39heRUK6wFEaP2fD1CGuWP",
  "key41": "h3ukZbiZKrZvRwyL6whBU6WbQtoF2EZsKeHLnbtX75avWTyeEHHRq59FWomr7j6ve6JfTCEfHdhGqk1PgcnVsBP",
  "key42": "5WLuTfyooWLwT5wXZ61cQV3WUdeADKtZThzqSCTewrPu6RkfcLFRf88qbhVV9sSvtrKccmUJzHnkywrSHofdfwE4",
  "key43": "4nYvGdv89ejtqu7k4LHuubg2XmZNimZxVsEjYSHt2oYWTPecx7gDYDdASXJo7wbJ1NiqyXZPAqLGgXSWpAttkZGw",
  "key44": "5c9rkg5h4BQhgpTnPH7X3GpFSBZ1Q8do5pPYjeuWvZB1P7gGibQmMefKRxgyCijkAmv3bzs7NGwTNcCspWbcWS1N",
  "key45": "598YE5Ajw283ppLHV3u71tenb57psFG1PhGGP18sK2PhZ6wx8CixBBZbRH7Kr7k4zc2dD2kQZBQ5wJVgZ4z9N5jm"
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
