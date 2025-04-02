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
    "9HZHi4id2B56SXAeukyYEzJDh91boLZ6r6uChFP9TsnzDKWLZ3NQGZz2PpEBNYmUMMPY4HF7UZHvgBXATVVJDbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wZ2XQesLRRCbNidbPngkadMN9a9zq6GFrHnsQEZkCzuZxnzESrj4CVmZvXEqjK3keiTECddDfkAJhrVerRRTNBc",
  "key1": "3xMWhupvxLHVHP1d7bFzSCuGZeBfXZYXn1PyLkfzAfM8Y55G53dofHQ2hiYYLPduyQPggYauLaTuzgW5W68xYK5Y",
  "key2": "3iWXDKKA7rpfstTtAVT6PSp6tjUisvsrrXaP4DUAmV5C3wGSxxiir7YvfEJVm8qX2co2qrgBUPKENsgvbNxS5hsP",
  "key3": "6Vz9gawtoq8gRMRdaWMoCQBCvENM95b3XPuuGCRJxUj96kJukttoRPP9tQrXv2ppiFCpQAqLvCCNgWRuqJJmGZd",
  "key4": "5PQb3u19CiLe7toEeruCDN54aCVjnysKGbgtDQtr3DCfLWZJua7nXpiy2e49duV9C2a92nKEVeP8PYA1eaSoZVFW",
  "key5": "WrNAoxRgVq6YzdoKE4SHCHLXfKFrhaBD9f8iHgXGW8g8ruQCVZzRMXM8maEodX7bBt7SpaVpDLD5qt4DDdKDvFk",
  "key6": "2ZeQfSQ3iDLRC4dW6LrEyNGPJ7LyVsqmskxUYfvZjGg3bkTCFNDBSHWbKid5VaH5SSTpRr46oCbFoqjnArpkhBzu",
  "key7": "4LS3ZRjhpAT47tpxiWfBmo7W4pqKFRz8RpZimLBB6BQHZFZLpvm7sSBxUhjH9dNjMuzDChRRrHroHFotiH8tGgkY",
  "key8": "1c3vAu3PEmyUb2TeRk6ESzppEn7kCdNZCpFfhLcnUL6U86NqTRTkDL3Jjcv7DikQLC33A7BrhAg2hjBtMCs4pvr",
  "key9": "5mnmEDd6nvM1E71jRBt89DKXriqonQ52fNG66Wypy7jch7C3jqLWKxzVzQTRR6zMfyK5kN2ucfnHc1GdMPEUhfmf",
  "key10": "3vc7sg2ViX3cCA8rtZKUPRH6pSozQ6Q2N8YDLJGdU5nEx8xCQpzd1Ug4RkWszHWFunyTdCb9vmx5NKfF8G3ZZFm2",
  "key11": "589cgU8GNmdvGmXNhNQNHwYtegzrQi6AEnaiqSMH6dAHzTx4MezgAJS6S7PMgfeuahn6gc1wYPN88d278TTdrSXE",
  "key12": "VzugLu2oraT7zLCxFAvn7Ag2UuzL57UaXMx8ESigg9KaUqhX3M8ho7RjpVpPjFjYxcxSSJ32bVNRp1UqmExjhFp",
  "key13": "4fNXJkrjprhc2XcDhnWSNJentzsAzw2ftMbxCPq4iqC7obpqEhXT2zxWsXPwBqxEqGGXeBSADcSYC9zGd1wGwzT2",
  "key14": "SCTWxS9aeSgUQdunBt4b7VzfCQstB3cZM2YUNFhpYA8VmgWKrMDMQHL957DyNMpnxj9FCqZeYbWDNQ3ncuqmsiw",
  "key15": "26yvPweEZWqg3Dunv9Ch8t2dGw24ybQ3cf6ECj2kgbnmWoXFzVypii8yQUenBuq5U7gLQg5jSL4CctsPYR66vFYS",
  "key16": "3QZ5HX85NBCJ5NbbUpd2G9FTDU24wEBGHMiHqPhytXeZzufSxUjfRH1AikruvDw1bPyp4dTp3XFwn3N9hxiudxwD",
  "key17": "5jXnK8zcFbHhmdELD7UCtTs2hMkKNMkvubhzETpLD6KP4YvgTXG7uVauFwtDKpBMVLDH9F8hqxdHHKw2TbpYFQ5C",
  "key18": "5MrbuXB6nuP1N31nwTqusLjYUMknRHJNagRUSh7kti76CVdApYHenZSLuT1kyRFXNAWHdVrWJv8VVcGHaPP1hMVN",
  "key19": "5b1zqqJcE1iRLNF6VMX8gXPriMDNHDzFDsGk8aKaLsGmkkecRVSLmzNJgWRHMeMEkjYPVknDrN4oJkh1xckoHxcc",
  "key20": "4FSEHqAzZuGxEgVu64FNjAbsSm1u7KaAyXVfWYXA6vwf6AbY29S1HjhN1MWn5T8TaubcPCWpsP978CiXQZdMnAP",
  "key21": "2iNwczybK588UrDfi43GwNM2BikBRPZZoCaBo9Q5mwJY7VyvE9nbf8tnUKieC4mbRVDbdEVAzNtEaM3bf5ZvJ5nw",
  "key22": "2GsqnqjqRD1bnz2U3v112o7PcE3pn98QsAxTR7SarJhdm6DSrPxLtyvg8tFtQo8CdcU8BhzFHu63Cj7NCAs8kHs3",
  "key23": "4eUJEtMdoTae8LDNzehQ8TQbRXmEPvEyUfYeJw7GnqDgg18cveitYbNtAZwHmnTfCdBHtzmDExV8mjSnjARYJMzi",
  "key24": "63P4PCy4NLzeF4yfs8umjkPWZfW3B1rsJn29f96QC8LGyqCPoSf7BaHRfxGRn8w9bQ7Kf4G7AsYkKgXDjd875gXJ",
  "key25": "63TAbeZvfEfqJNeVrdw35UkQbhAeT2jJ7vFmGQkWzosrtFnjnoXQQRc6H7LFKLsCDr8LkZDBxeacg8zqRDws1pVs",
  "key26": "2RtJT29ozYw1RJrgkwRxMp6KzkhmPdmAbufD1ua5UkUxMtXpvekmSoQ579v6mR33gUnF2U5sucjMHhFZm6yLUvzf",
  "key27": "5YPe93Uh8rkr8yyRjdUKVffiEADruLMTApBbLcpZxAKiJm5UMKLP5vfao4RSEjbbHyvFyU5FzJaUM2tarrGz3sgh",
  "key28": "4xSf9ees15HHF9gZ48YyaVTr2aYZcoYHDvSv2vxauPmco5Hw3QKnR2rdTTGxYy3JKZKGMF6h3zjLjapbPsGamUcF",
  "key29": "3o8JvR1CGCb1GqsriiQ7ema4Fi9Sx3ZoCJEj2ZgWTgdvNAjdBHzpJNT6uagJJaH6qHBPXqN1HD1eFTjQS4VSRTKz",
  "key30": "5kMhHAHccrmVaiAXEGpdaaMgqgN25iVrLhJh7peGEcX1gKJKeQAEGiCSDonKyZdBoCEchhPRwouMAXPk9D65HTeT",
  "key31": "4xDw33KQkMPfYUSjFSvPC8xbfbRoKaMFeWVHd4Tr3godwYNHKvg3jurdT2WG35wrtLfKp63tfaUsVcDU92zzXByT",
  "key32": "4whnXHqCAjwncvVouX1TVGYmyPEVkY7FdCQQEj6xhQqStrJAvSpNookYCHUsvfFhKgZtnGo7WrYAT8McYsebG2Y4",
  "key33": "5ZRH51VU4RVYNvrQ3X88nCQJEpsHdcaxtLhmEmLVkj6ao4LUJKC1BCjKjzUgwmyeCJoByynoeYxuks2Au6bMWF2g",
  "key34": "283QsMU5hKNB7qh8PagJymrkJLJt1MBagxSv8UNULGzDFd2PLqJezcxtUQ7zcEGbfCSyeUhfwGDcUqJSYHJiYMbH",
  "key35": "39Qi5AQyDAR7RNSPzxEfHEqujs8GojddYSA4e5cvGzSsK9najct1qpsquFLzQYNX5wBzdSC9rzqbQUrcHmat7tuG",
  "key36": "5srrgVYNhwgt4fpehAU1vZ8fxaTnity57RjLK2EHMWKc94T95RDK6bHRNiMxMnmpWdkHoMQ1eYq1Q9ZTxvwEpzM6",
  "key37": "3YLUZwoGb2VZWeyr8w1TFSYnZoFKy8p8jEPVagkXYtk4xE8JutX6HzhG4TwSWtyM1C3CE58WEhw5vCzv7szSitiv",
  "key38": "3ny5EpEZf7B6YgjYMYbiu1TYQSeh8FUBFxGWZGAmfg2fpjdVvvrSBF6Zu5T7o13BNV6zgfPRMBY4x6z4urmCAiqQ",
  "key39": "3AAsD2QJgBhN3TLnDtkCcRThj5beZbBSKEMms8oET1SDzqbWAmNwSG5jAi9W4CJxtWa1pakZCWFj4v6r8ngYJEyz",
  "key40": "5f75LgamuTtcaAM6ts1JwiABjkXpXJjmnW1gZw5QrHRfTfsXbN12xPPxi2PFmPasnj9Xsf9tZcq9DaxePYWEzNQT",
  "key41": "4G96Q2oBYgRAYAazYMasXqVfds2xJghSksteLqxa4DzDe7XiUDDuK39eGSHj4nrME17epSL1kEs3nnPG2rSJ3njQ",
  "key42": "5wrKTe3wAv2VpJQsyeVTzikWJnshSYDM3AhKsgrzhe9DuPqSjLCsg9EJKm9TgadAi9XC91GgFLYAFqNh5EKjU3FD",
  "key43": "WrJgbMwbDDqFZGk9dfxGPkAiJj4tYEFsijmHonyxY5jhotGsj7bQPfVDQaumBLYY75Q6wHF9T1H73L9vws3y7i5",
  "key44": "59DsZb8BFiNfbKvRHKxKc2AFXyJVNKtZ6RXL8AtiSetJJFbCRCZxUQNcpWuqGWX7EW8o2f7EdHDVk4f3muYGMQuQ"
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
