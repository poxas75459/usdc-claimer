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
    "2JXsfc8t1tdVf1zk6V9PUKRgvHZbcZThwTVWkEoZDRmSaWnX6EYQpfTyDWu1ok1Zi1hfYrFamQLRySmvL2TeJoBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QfLePhTF2fPtdSvYtgxuPSM7kRiXa8PW4CYyqS8oyKYQcJoa4XFoGxSfgz7UQvAFMACXd7F3B6gAAM924rbuEJM",
  "key1": "5zjUaPu8kYRsDV9fERfaCcabvs26zuqxFanRGnWUNoZQ2P27M317LDJyR23LDKo4ZsZ8Pu835FLn5tJnDtMom3Xq",
  "key2": "5iZKLNmL1GGe8rUywRZFEJwYzQLeqqFovKYvu1FaHts89czmacrWRK6Fc6wMLsN2Qny6THg2z3UckJmD5HAxVpaK",
  "key3": "3yJYw8isc3rDJ29jqb6CSzQfi8PHQnTbedS6cszLMaBtPJrvvzCKgqTUmFAiua2pZ5ovqvATcRDhERQ1gJeiLNib",
  "key4": "5tJzSAmrT4Gn4PA6wwxa1D8p8Be7XXB6EAmQvDQpf4GQyCHCb4M4S1Jn5XDjKmnWCrEL1ATfdr98HaoD3dthNMVL",
  "key5": "4ZzLNifRESn9KscwENwCVnxqeKWQqM3KBSfc5Q7FJmnLPY2ozH7sEf33XEHT3maSVuvpucd9rAM6B4tsRWT6sxtL",
  "key6": "2g1wSR78Ctdn2L8xbZh8n9eP7o8FLSqAV8oQssYzreatKC65cfCVJvAoG3uRGo5kYtxWsuNHe7cqSmc1w9YfYJ4c",
  "key7": "3BFdpTwXm2MamJf9L4DWBE1eJ4Qa9hRoeecjmC6afcU155T1EhhaBfqskwXBSKCJG7Fu3NAFcsWASzsf39VnqeQ1",
  "key8": "2oa1nsErXzv79zuEdaN4UjbvNbzWP8JuVatyhPPjYyRjPRrukHPvrEHhUZEdU6U9xGPXmdLErYhJF12j679ZGFJ8",
  "key9": "DZwLV6TyrLwqDNBRPdBrunM8TuoXKAA4sNUFgERzCsZfZsgGo8iRY358a8BKaYnp2hCbJBw3UbUf5SfayVwUrkY",
  "key10": "3NtDEDfoe4qXCmFzz365zroLk5V5a6D6TA7rtLCppU1EQd1ZL7SQrpyC2bmCnDbWegKrcXKxuZ7VtBPBkACenRvU",
  "key11": "5Ui2Aj9koxnNprreXyEEnvJKwRatADALiER41EjKRSVqVs8WoTjpbGC9EDq1qj7na6mB35qZrvZERpQRszkxc1KJ",
  "key12": "5du2XKwBCi3sjeZtpiwkayYSb8L7Ua12dBYjAKeofUAkQ9f8CYyusWg73zZWPjdzTbCwn5Sp8fwAhmZYZmcgRgei",
  "key13": "3G2Yoe7WFxrTXMMXottsyGGmAiZSYC5fhYf7eon4vrUR8qf8N2PS1zXokL55YcSjEEQsh5fn6CbKcyPRx2YcD2WK",
  "key14": "2Xbx9Z6aNtRSVcCSZ1y4EXzEBGsAiZomfku356izDWtYhVxHeFKnbnXtYhUtCrYNMxRJo1DdG7onobCFwKLDjGAt",
  "key15": "28bEN9G7xg6CvamDtDVArWeuADsHYeU4s8bq1opT6hJ3Ya1di42rbMgLmzhw94n8FGQrDuAwNP2xMG6YoukPYHE3",
  "key16": "37DLPhUExWdcU6wdae71ga6HvxNgRoe3aYJksWLodWnYR9KhqfnGKLceHUrB5NiXfrQ4iUtEjBFJtiwGdr348xKZ",
  "key17": "uGENRJ75tNwgqPZLB4PP29uGUuXtLnZXhu3y883BKMxaynSy4pKERTDRrvkdVVfcHBxTqRAprQt2kW1PSRcyUcc",
  "key18": "BXG3r6SWKCAxQUatAn3CRamnTfUX7TVTe4cWEUjM44xeyjzdrbFyt5yL3AivRp4o54HGvBFaQgrJu9VK3vKNwy6",
  "key19": "4SaYvHomYYDEAAfn8hCosaAcuiUZgxYHwx6W5gudKchMJsqujPzKt4cC31nYAXeK27WGGgNb912sVV6DsSxeiQ4T",
  "key20": "4UEDf4gpXo4QFzogkCXK7dFsY6cSvpBbiWU1QV6nzoZdHVGVT4xdgDonMpVkB7LV3QpV4pgZubyRJ8VgdGvG4FwV",
  "key21": "4p2ymgNXBJQgKnbvhUAhTxB3reksMcG1sn8MJrbuPeSgyVQ8LZXHbxEWPoG9RpmFR1aXTTXyRjdoJ5qEHAgydHJ4",
  "key22": "3kxcvNXTyEmG8g3dejkAijVvha9yerZmmaoMgMXM2SUv1NNDT1JUzQQ5nm4JQ8MLYUEbSahEUFEzsb56xnXo9DKx",
  "key23": "5GVFKowRd86HNSxi6SBRZHuwvLm8KybyFUv3mRXW5hFa1qQB3CbkwkAgTu76vHT6kebNNTtzY87XfLG55S9kNsTz",
  "key24": "31donuh9sKCtP4Shx2LLyYiN5pkhnqBqhUmdanLf28yk39sGQU8wVV2WQ3AZPHrre7Vqv3fTJLWyht3nqiUwzy5V"
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
