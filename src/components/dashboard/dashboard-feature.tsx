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
    "4r5QgUVN8RfRY9TwAKJMbNQfz2kqWnQh7ZjdHUuR96GFoVE2hWMVwXB3JoxiMmH59qNTa59NQsJ6dUAmURXqQKz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PWvLE8QfcDo29s79ojQ2jYpTu4wpJ4A1wDAXAJRwjXVRjbSRow28KiP6n21LGZksL3CeudoJ7D5vYFmqnDDn85D",
  "key1": "5wU7BYFvBn1HRW1tsiGaULXRxTuPym3reUEgyaVqmGpgcyEzLPBSBFezAbCv8tU26HhQeEw767LKoPqq4sPfNT9g",
  "key2": "1s4EAgSMKkhUQqYJDSd4iwBTzqy1omyZzYziFEsC5w92vFqsHb8xepcoMCNBLtpqGjm1KBp1oddnNvmCSsRaGXg",
  "key3": "R7v82nmy6QmRBvWABK2YE1CpSRpVcpAjAHnx9tyoFEYvw2yRtCD18jYScCbkSMiKpmhtYAYo9RJ47QcA7ymi46k",
  "key4": "oYPsyGeNxF8wJ3dtwhu6tKjeD9uFWnW13QE3KC2CRTqksPz8sYSmDGBwc2FULk4p5K2tonmUPaSZ7tCenPw4wwz",
  "key5": "5RucSLDEotCP3x2c8AfRbtseWjTxTSUXN5fHSe3rywGcr1EEfwkthACQQ3Bwer3apXTXLTUu36aFzpHMedat4XH5",
  "key6": "4nnq9ffVahi7EkvnfmnDnhaTa1uZ3Qi7KW6ypVsHuymbcs8xghLA9VTVJFSTk8kPVXssN3AkSYa2nzUHaapE9nHu",
  "key7": "3nGocoxg8C69m4VxKGPixA8kctaTxdXRBB361gRAsLcK4tqd1LyN7podbQJ3nqoUS35FP4XGhhFNzJzd7JYBd7PW",
  "key8": "28fVHNdGAKC6mnxWt3XyvjjiAQKMEtzfCyXzBgXG8MffF1N4ehqoWNyuJneePMJL5Bs1sVZWJPdX36DKJAiWHynp",
  "key9": "GM9e5c9fA9YCkjDFcBXwpQrv2ep4LpdMtq3BCkJQPtwtaFvmu41sCqkUustRe6vPh9Kx4NR54qPGPbsfkGCAqJL",
  "key10": "E5h4v6eB6255iJnvmsnX1rwekbrTJpNkjZaHJhoGaazNkuKC1icd4P9Fa1uabTnvcJ2GcZkQsV4aDdb39G3hUE4",
  "key11": "2d7QUuwt9UNc78RP4Ef7WpJGD49g37BssMXtzyJwUdF6oAoxrYdkNw29XxSeK2kRc3g68wLfKphNdq6KY8Ppguoh",
  "key12": "5jdYGBygyzAW2iCeVaM67nAvpjMnAYJJtk4msPU62Mvj1Dmn7heoR2MmJeoLnNA5ofateisatxNZMyJJpfxUa6Nc",
  "key13": "3YRNvfyd8PDdGAR1rj3FRtYTjZcyKjhpZWFZC5V84U4E8CWzSNKW7fJTqURnE5SEQxNGYzy8Ac537tp2phKak27b",
  "key14": "4aoomt9aTqGzvWndomzz1ptHYxVWperLCAdhEqpgES6rEUvFtfdtKqpRABPnwy6WWa7AzbEegrYNExLeBhZg1nM8",
  "key15": "4U93LDruKfujrBpNftemRnuyajp37LvJdRc66tViujdUdqNK4YZmtLX44udJ9dkk5tP8JAwnZXxtMJA48U1TNF7R",
  "key16": "2L8reuQZmWpoTLvsABsqFwED9rAdkXBzXmM3EsvJvCgvQd7omanzTmwPcZ3FLqDrmb9vBk52z8x6ZCYPEhHMUzqn",
  "key17": "4n9DrLcruotKfzfkNQZCPw1XBxWHwfHSNQw88AYnnEny8yiCPVZrdku1Vdq7xCkzQBv1d1mCZsvPUxDYZ5AytUpZ",
  "key18": "3WzwBmVgyKRQWy1HBdNxVgyDTmtemFf1VSYC7GNAUWReXEydgsBFWbUs5HKBt7vzNdFTDvz1dm1pcKzfAv13jeJC",
  "key19": "2PG31GcPtsMLAHqTs9gRxJ6WwY33zX4UcdpMU6ku1FhypAiNHvQrnKm2Tx5AUyRXRgpRD8VRZ46P3Aj94hMe7wzA",
  "key20": "UCAomR9avbhHjnC3dWUuNK75sQw7Yw9zUSnmmGUews87tZVB9GteDNmLfMtdLSRHBkaHoDSMQSFFAWJDLuktisj",
  "key21": "TzJ7ySgEpTbxPCS2Wfn3RKFzvNYcTwnzJYMeuAwjvtp4EDsfySHVoMrsSYpnJjwCdCW7DW9ESC8mkBXjNRzc13S",
  "key22": "9obDDgAaceJR3tamB6fcZ4yJWgQdWCNKSMEr6wZNmHxatrb9KQGYQGypEBqcPkJuf95yKysadzGeU7qH7q4BS5L",
  "key23": "3EAuyTnyGPWz7q7yrcP7Vak4v346114X6wc2XCZBrMeqTCh4QZ8tyZwg3erp2Kho62dTiAhGbTFJhQbcx61o4GVV",
  "key24": "X6YmRWoG16s7AdupGkQqK5Dchg7WCoGo6kWizmwNhhvyEQ9aeKY3zSzNJqecTMMM6ET8SpQBUiTDBzVut3iqjwC",
  "key25": "3E9UqeUNktiZMRM4k2nrUuVSCpZJ2MaMTBSn2h1A948J6o6tEPQur8qStbRdM2jPUaAv8ZzpyQY3LicY37zgob3z",
  "key26": "3GQSpyUXcMo6PPMaTA6DyJhnYY6fJEgvff97YMqMxP5fAtjerW5DcBeNA3AbqHcpDH6eo1mQKi23sCW6aM7d8643"
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
