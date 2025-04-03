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
    "4AcNpmDP3NmzfVwyajGQJp4ysLi1xcpRGK6cSQ8MNVbhk9ggHRSwzQ33TFPfGkCpawvUxdLt7FvzeCKY5pzJ1Acv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hkQVBKtrL68nXYqo5TFYYhpAHpHty7KzdKe6ac3Jy4A3TZGDoyR6GefQyWKQvBked9j7wmS2mbx4zqHMfthePjv",
  "key1": "5MqhdGJpJ7Xx7uKzfya91V4ERRUWhyKHX73ntSn4JCfyNdpsqjSs9aYHkokavfeXhhjYmsa4ZRTjCDQpHhBz4DkL",
  "key2": "5Y5zHx49RaWkmwmBnzr3N6b8hUyoiRxMk5qrC2GJ58PN7VtXuon1vvYnppr39rn5bEAY9H49cPQrSUTojChfqHFq",
  "key3": "5QDwvo9ivAapSzsYZvrMyGB3yJNk3nhFfyYH8SmexMNNQtBd6BhNMohbWAUW9hiPBKc5oMrMt2uBs6x3hvhAQm7v",
  "key4": "5tsVLzP6uY1B1L8W9BpD3CaJqWWVkK8G8ZoZK1AEGrB5FbEcACr4mkQt6B9ybDXUHRYxN1N86xwyDDNGSgy4wQst",
  "key5": "wqCSXtNbKP86JpFmNt82ZWCw4nigCVufo32azaLnK6Z2y1ab9rHeFBvHdrYbT4BAq9gt2UUv7PP7sjD9oCedjHK",
  "key6": "3UjpTdAtmUhjUXReXgdZK7zQv4hub3okvbwBD56eNL53qQo7xNSXJLTCKiE6pC3Wv1Rsg3YxpWjRogR3jUGbTvSv",
  "key7": "56DKtuLB5RP9a7DM3FA1Y9ps6DeAHwCvwrn2udUZjHyRqXkHaqF1ajj3agwjBMDpe5ST2ae3bZnMjK38JLXx8qDG",
  "key8": "2n6aqrj4uvBkZk8N8pFNMCbx2LusMz91psbRXhp611CnyhkDPpRTxjDA9ULhWApfH6Y5gVpcFGbYHR7FZNLG8ovA",
  "key9": "36fC2KLZEzTsZFij6Huno3H66MyQefHHzeSxQbKeSA4wQ2TNh6R4MCF5VsCJ6e6M8ZWGFmu3qcuiQmnYZwuqr89W",
  "key10": "44g8VCMVh4r8S6ncuQVQhdLSqQeLCYzjbBoi5RzL22DwPjaCQYJMUcJyKAePgunvYaAtTGB9i2CgykqrNx2Ehiap",
  "key11": "3UpaoY2pFxeJpvjYVBUfFbiPzwctrdbfxRHrSEqN62vrCJfmQiX5bQ75B78g3U5w9h63Qy3VD1EeAFa5LGhoBJ1v",
  "key12": "5wCeV3is1gAkminebvZo2wf47bdcqY1RkPNCVPE3RLfwTLEhJ77KaQjMNPvA5Z42etpi6pi6N9Xn4YxcFGqne1UQ",
  "key13": "45arzTJYAWt6YdeEhp36CAwAwPoB4kiD3swZXb3pSTtrLYxJkFiQCLFSZ2S46P3tKNQbumzTnn9h8Z7krRBke4rU",
  "key14": "5x3mm8Pty6tY1UR49JgvgediT9aun3FqAJRXejrc4WfNfpG3tWqDCUYMCQwKc1daYhcJABYAY4U4jxgfh3kvKShE",
  "key15": "QCFFEmkkfjg3M6cdtn1rCrNJcWpfaoHx3MMFSmMEovyy3zBmka7LUGNQ8NWK9Np475uxTnW1XBGdPWLoz6wRePc",
  "key16": "muRT4QLBv653hdX81NPkw8HTAa4PRjfWiyQ5cneQxPeCnZojL2QXa3MHvzRKm51HLVaMWAzPGQq4tZdQqj1AG8r",
  "key17": "3wWwjUZT8Qx7hUfF9Uu8QpafGy4VXU83kciSFpdgj3BMUNVsFsrM13dEDQPX13DUBq7jjLt5z7sZQ4NcdGEnBMMd",
  "key18": "5Rvz7BLp2WtopGgmuyWRQaXeF3Vi198HyKaGgApRvrohqc842BQCgsv3eE1zbKkjws6oG6VqmPmZCqKBd4znNEv7",
  "key19": "4admXpCitnfQ1yY7TrTZMe74we1UWrbFBLJn4nu7nUQYAcqg41wQu5Civ3Tn3ZJtVC4jMLEeCYHuq1i8DVr9beFC",
  "key20": "2XLYxSnEt7m1WhC4ovAYWSg8Ubjjgy9fwLcM6ucvyzNGRsC9C7uiMeaGSbvVp4iSKUX5yigg3ccs9MecQAsDkaE3",
  "key21": "2HgC6Vgjg4ZqdQAbdhM76Edw69STBoyP7CWczbaRFy6QGsPihmBxDrZaFqDR7tLcyMjYvfhHKFQvfzY4Neq91bKu",
  "key22": "3UD2WLmbtQnaqkQXesNnBNckS719ccasdWqqNKBaKkeqYWRenoFD1r26EBtNndBoVQ7X27Ab3N7nmk2GuCnxrjMK",
  "key23": "3hMb8HvRciA1wRCn8Th8sbPrzNQHU52P1sMNnny4N2TtMiszZfFM8WdZcKBDy8YTyCPVEAzgDSGpe912nJEGpWxB",
  "key24": "vFfaV6eyGqHt3tt2A9ayhbDjT29uwpEvti2LDWeLBH7QwCyxE8QFSWfVKoCrfQSUAn3xx6MareyRswQnu3qMKtq",
  "key25": "5tw6sR56atnL6KPSByJ25nCcEGXtpnHUEoLqWZgYsrRDwLUjDmHA8HgeRUBcNswq4sEUchqTUN2MiQtXmnaWntRN",
  "key26": "39fDCrMEVyiknPcY3Lz5zPKr6qJGSyovq88GFNeYJJP23fV6TdC1DXRNzQgEZULEzKbFqE4mG3k7hkXfv4ao9qhw",
  "key27": "SvvngzEuKcAj3f5DWQstjSvGn7DGNEyccUsBpEryUNr7cypKzBjPiBGx7raJt7wW2MSXeENbZrzbykqvnkK3Jbf",
  "key28": "2R6xbuX8U5PQtZn54JnM8UukQQKskxayDEyyKToiDZ575GNeSDQUXP5v9hWiBt3BCjdhnYE9RoxZ5RhnGW6iMdHD",
  "key29": "3rHzcHBBgvZHXCpX6AV42UsxcDzEbx89c5jh43c7BW1xRkQQrcr2KArkoABwNBfXUaTgSiz6tn8HzuqSjdZMaYgm",
  "key30": "qtQFPoBt9T2PY8eMDM6RbhrTJ1oUxoybWyAUAUQ3HYxitQksRBo5SHHxg6BUBEqeX8FWAaU2pXskKTsZvWd6s9h",
  "key31": "5NiK1zEKx1a74JQPKqFNfuT75YSLEb8iknJuFHS5gDqU27anBHB4y2h1bJh7aztsespJrPXXmqNMjdhnXmSZ2Hm7",
  "key32": "4a7qzge55kBvoQ4pchpEpvMeaVJDQ57yYHgLuktYvnEJBmbjggnxa7PbtaGALTF1wswnTnJ5udFnTLJjEVTCrKKR"
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
