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
    "5VDaZkpQVT7xdoxj1Eg8dbfZCcunbJxnW2EeZasfbvXTWLrRCdF8mcqRroUXyTB8viYWfWDYeWfsZPSxgm9md2XC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ZKEBtGL5ocizGp75R8MDYYm2HcFTKgDZq1hM1LPaJfFVb2asRxnPXXYbFFxtWXMjFUiiF5RaNy11bwSZXWKzK5",
  "key1": "59VgmUa1h9kiD5KoefAxHo1cFqkgyMDTBqqeGMf4TUhwUa9tjnGYqgWS8W8cYV3YGZRL871nwsfoqc8tUGrZVqKH",
  "key2": "35Y5G1ch3tRVq8KjjKYnJaYJvcQDakjoMSD5viRPoFWMdRRxoVFggq3kFZpe5FaLifyyN1jwLAcvNUNev7WhVJsd",
  "key3": "5QBTUDvkz8EgGr6sAfBzzK2wkHPudmaaYf7X37qd4wGM4kuh58m4wfeRzXUnbUpFxFZnvTpALqWGKgt99Rb9LzH",
  "key4": "5mJiTACqNojxJPN5Q7bo3QVBXtEDCGjBnufRgVvt8Pj5h2RwYCRUFrZmbAMuK2AMVppyz2Vctapppj5dV9ZmQ9ev",
  "key5": "3Hrhv6NRuvnS12zP1Tj9zycaBXrBAAaC5aKL1tKtvcJNJVW7Ui4HNeonJg5c9NsiJoG759CoiEwcf3MrVeBoBUGy",
  "key6": "2rLPxkEcnmcNqeHnRSipJ5Uugh3sq8ET29orSpz46W2UmKXyqK8o8uDD1D6fTVvKqHXFehjh6Qmf9fv6dyiS6gQd",
  "key7": "5v93cNMoLgpyp5H4D3nFJdfcqL62hL9F71pzYN8of3uEraAs3RGHZvrYGmF9sBiKogBFRqnMeFZSaRvsm6amNABG",
  "key8": "4CRZZCufygCNFB1iGLxBR1qyAHSEmFz2YpHPCVKH3cbRJUnSL1MCSdt2nFDeTSwsi2bp6rLHqB6EjuFXg8j5hcaG",
  "key9": "3CBVuss89LWM9ssJ3kQghwx5ZtMHnzX5B4D19fmajEVRXSdLKJqgEH391M2SyUMHdAxoX1Z4gwdFonEZeFSUoxQt",
  "key10": "2T4TEWzRdxHiUPs7gfH4A4WHGpiYX6L6i6cqgLfaWXFmAtsRfbUJ1M4VG7Jo3VZio9zK7r8DwtPShAvJgsT8YG8x",
  "key11": "3nwKeLYRDfDsGAR87yCvS5PHq6iqkP74CZ83rLB2LwGtS23UstQ1xCXjpjm8PbSzFivSfZSUxscbjcCdLL9bcAjY",
  "key12": "2jUe7DEzy4KCs5QdJLdftC1MUEpPWdU2xX4MbpkWktHxQiEf35QvmSjyrvJ2BFuTe71b4gFZ5zYanvkdNyfnTRoK",
  "key13": "3vVEefKoEifLQAQwmSMivVMhqtxX6ScQ5R9iTawmXsBhN536nDeCbsEo9p8U8fiAy7Tc8GnpwswSvByyzLoWsDEP",
  "key14": "3nUCk7Eb7HxwgevxkYgLnfTZVgHYujxHMNcAyNnSCV4VqzPgQjxKH8ixHyo5yhJpNeqReMby6vUePhURycZYT4JS",
  "key15": "4mJiCa8SMnM8oeJiLVLp9Ti9BEE2nkSr6yTh6Tu2SyeSnwcRAN5iErA9cLcfQ1KKH7sUiMC1f1PrdqYQb6wigMTX",
  "key16": "4xto5uSoj55R47cMZHfAXY5eLMgwdGRErCygHYbYAWcjbZCKyS9VpcdpY4QLFec3UBQsz3FLmpsZpDfqBVX8L9KD",
  "key17": "PTZfCaANwfAVCMkroxfvwXgex9zGR9wFtBH4YDviLLsoNTuTMzvquNVcx2xEPnqo17s5dx6EUUGZsTrH38uWWv5",
  "key18": "QA8wT82qWrmcVfCwwrDrrGk5LdiH62JhwsirHBPfUwA4ndMyHhuqUM5EQ9rzMJMjt2kiabqu9pFu9jrj8hzjkQx",
  "key19": "4G22zaFB5PSyEwHLHt5bibuQC4Ht4f58FZckGAygTCK2ngbk6RfmLvMbe9NWMcDuSwv3My4fDyxfgbNjRucdyHbo",
  "key20": "5CYYrf6rm93KyrabLw4doruNfYJkamWaAbNFACzEBE4GFmbCVRCFdSb87uZiWkudfZchmbqeR6e6i3y5rqe1Wg82",
  "key21": "YppDkVwkG5CXcVGTc6FTDrFhwtLj46gZhSc39Yh8XvPku8UbSihoyPQ3LxpW3jnxvLMx7w3CJNuKFFgrdn2MA89",
  "key22": "5oU3vvUURJLuY1nV1GT9RjaV9gz51UcWkWfDcwgn8cVyDTfRoE5so2xdFjecEu2wCNRq6eQ62s5axLpP5SmpFLCy",
  "key23": "D1xAianZxkeNxu3Lt8JojLhwC8nSevBiPcpYwNtcuaCbuTCqXk6mYpwtEye3HSisyybJSLDdhAAPSiMgDPjfvP2",
  "key24": "5qoAXD4VjyhFgXpfRA4TxM7PNcv8D41iV21eiru5WML2M3NcH9q166mmhp97rTi4PCMc8EiFiAyQw5NFVyJcibxZ",
  "key25": "2A4S6x1DmGskRZgocVYk15s5yfser4BP7B6zoRjfCZKryizycvt6jcsMB2cNtgpQRJecJhyjki5fbAsGkhnGHitL",
  "key26": "23WnG45yTDDuXcLJx34Riue2DswLPuWpMiHQS7VN4vXyNmksrGcTUMCsX74S23PQiHjMzmt9qqLvE3u5dL1k2wzs",
  "key27": "5r6MnvkvMk1fYLWcyCh4PLf4AyYBJL2h5bSEFckbEng2YWkt7Q41rihqA7eN4MvMYbkr3UubHJzYv2QyyJxV4aRx",
  "key28": "2BpLci3oXkmW18bP6J2UDTNaSWNyrUWDmRGeLa2wj1dZjETC7R48mVB3uRPa7PyA5nEB8QAYWMNwotrv28hpoMs1",
  "key29": "4KkWH8JZhBU1f5gRvqVnBJAzwKnCqUwXar3Zf7VvCVrfKA8dvsHvwNT2xSmx5o8tyq9rwhxGFsTAkodB8yXVHgjG",
  "key30": "226dTTfSiN32BJ6kyJLBhpHqcuvzkcngBdXKi92fFsxabks7NdTPzjn1xUeGeryP12QK5oYXtG9yTvRS7mV6x98H",
  "key31": "4VWLw4GEReEab2S2FgRU9tq1pzg6GDNFu7Pf2Y4Xhfseo8oVx6LJcrwoSdTone5JCDnGPRB7XSJw5dzityWbn182",
  "key32": "9dLcyBM88xF1ZaVugaEcd8hErvu1ZXWvtr9CDGbHsg6vrrGnm1LktRDTXEjmiLMRqa4HbDqAkcXADJiRjK1SWpY",
  "key33": "2YEjrPM2guyQTcYjYwQyaiqJUJpRCn1uX7Q1pCJZGUDuMFQiS7MNUPrKApJFAg4y7fRgsB4sSt7xMPyRFoYEN4JN",
  "key34": "3EyLTeuHZt5g8b2M3PmwZzGFDTxvERhdhYhxP6WLMHRBVubvWx8M4QAy9FJj9F1JDpCPHSzfb7pUV89hUGP8yqaj",
  "key35": "5gHqbvyRdYPNTfH1Pc8se1tRq3AyKTr3BeT5oWhtKYjrsdsM9ZHDr8uXzkW3C71mxXYf5eQyx2hS8KU3xSkHfQEn",
  "key36": "2o2TV5LP7Ren82bcMbZqNzAEfGCAaGmjC4G8vmvSnDgtQRwJoFRF1n5PErAMjmrpwpjMk3N8nZEpgBCQ8Q2mVgyX",
  "key37": "64o4niNdmM3K8nnwRN9BmRCVpUbSPRgoJAPxUDqAmLaJMD99HP1eLBUvA1pfVmRTLWE2DHyNuFu6ApVHYzBKGKb5"
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
