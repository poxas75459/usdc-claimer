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
    "f49mJssHvopTXxv1Qf8Yrz2BkiEh8FbDJdw55wi4nNxQCcbbEoVRMPs2aik38SjaQb2omov38n8EWk5tt7h7Up8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "256nKEEb5RUsGvsFJruZ94oZcQZr4DXqNHBWw1r2WyT4CXwFvSmZMyhzYU6YYmMnGE562f84Du8vucbZS6TqnbhR",
  "key1": "4GWYJwuPoQ3poFuf6k5V4UFTRYkvpYza5PLRFPAjSzeF2g55pKMLH7nsGXHrZjHv66mP2AqHHyJZhf4rKBM1nt7t",
  "key2": "2Mvk81mmrrJiascRJWJQcq2Cd7JhuVVktWAgucQKyEJNmFdj5YFoHsm4zk98tTMWRgSXp7u1cGv8Bm7ooSdP1ge8",
  "key3": "66LejSnZvehEhWytxrXsU5KQAqh7Q5VQgdcmppCo4EYXKjM7nvo228puaoV28QAZQQyJksBFyv3sL64pagxivNbw",
  "key4": "DMCiUoveyrP9oR1VwgV9c1gQQb28pLxyk13L56iTXyza87aWVaQH8wnXj2bgub6LyekHCzCSqsz1dPHYXxYsh6t",
  "key5": "5rxi3SyN85eQ5rLdMRBL5bUei7NYpYBaoWv9FzRcAAfze5rdRNt5SbjFWJZG9nLY8MeAnVsK2CSRaMrF89VsK8RP",
  "key6": "2mG1ioVLTWJrScvvMrDb6RD9jBj3NcgcwezY3rVZ6pBZkW6QZ9dGZDzfvNc6n95XsJ8YvnvsWG2ZD5fh9wLCPAH5",
  "key7": "55imh8amgumDzxULV36X5gj6njhfXn1MUUrka6uNXEtG39oWVAj92NTb3x3wjZcJkNERmLeF35K95fx5RHQbyF8y",
  "key8": "3vLGtZWsncLjptrZyY7L6cfKKJRoS9gJKEMVmWWfg3ux1o3SCn8vxWZbUHJikagbKYqU8BeH2pWkJ8VazopjKbiU",
  "key9": "3A9qXC9bHRzUBYZU9qHiDR8e4igyRnQiBY2hpPdfiZig43eGRgWn3fyvdUcDMVy6PKJVHL4aMTHu8YZWJK4R9Aug",
  "key10": "4fhoBHGUvgJqkEHTV2iPoonyKCpfVJmZYXvmGkAZ6t3w1RB5uTZZpsmsNZwodp2fatNajM84Lis5Lt5r35wiKQGk",
  "key11": "2auHw4TbtjnTrFXzsm3yrdj6ExNC2ULtPyaKrYL42TV4tLPuPNm4MHF8kJaTQxY9f6HvwnaqyPkYcjdTtYUpv978",
  "key12": "RSRqLifVGB7qw98wtDYtdnDJTmC4wJFPvrhCr8uqQNoKrtAmQrb76v6K96E8D539ANjX4vNGtWbNtwJUf8JgxFz",
  "key13": "5Gn58fPhdPcJoYpDU4FK5o3e81xW6bxfha5rsHVLnJTJPisAgoQ69nJVmyufb2CCiSe72N6veTmERLwJXZzGSmvX",
  "key14": "4tZqAspEy1fwuYJwTJSQbwp9aS29ReeA9Ux1PH3BDW72mUrh4f9fzLx96C6AWC2Rdvz5RF3iEihVN5BKJaDTbjwr",
  "key15": "5ACk2oZd8ydYZDUkgPEx6uer4G9wmy3xQaAqKvw28Tmt9iRkHoeBuamr624YyEkEqUfP7JstUsafwXKnxFJCKx1L",
  "key16": "2RjEb3vSud5aRiB4KPBQVZUwSF8RZ7x8SuvbD5eBhtbpAzjNQYgxWrjgcGddtVewHMnNYYjwFF9t1cQ7tabiDDvo",
  "key17": "QANQfpoiBMTZHJUmqPWH2p7QNcwbKrexXKpd1fJYKLuiub66vsZijkFh6GPAaxkZRqCq3TGwoZuzQ1GEVnCfpfc",
  "key18": "LNjbyrbVbemD35igHKJdtBgGNQeouVeod2rmvgowTPV8pPWibVCkMxhEev6HGjkdJdugRXFnPnhNFtaEL9M6jpB",
  "key19": "dicpVxKoKoT4qarjVBqtPPKuknzUCiyd2rz5SkmQyRy84wu6tpqGDmx5puseWnHjkfKnULykEJuckpNsfFB7eYE",
  "key20": "LaykAiTnZ63Qz6Lu9VTgMTctxBVVmagYJTuYFDipgjDDBhAr1YfUZuHCHh72whwjmMi8RrT7Puvg7eXijGcx9xW",
  "key21": "5aKJRBKiRVvVKjf3QXuDNsJ9RgckbWcXj2tqtyg56aKBizhZWRG7df9VjnHr2TShqWMCCTuJ4MKHbxLrD8z12XQJ",
  "key22": "4A6mx3sz71hGQqNHYtURkWJ8JeYixQoGEUuugSEwRwvHBJKpqS9sebDq9RskxCNwWMGZobSpasDJLnhubs1k4TXK",
  "key23": "2HTmjHNrwL9ktv13KuL8LzpHEzt3dA8eZBrk221qzkWFJQ184t7uVJhTKGfWrwKBdCT8LLVXPcZeVbjsWDJkRuH",
  "key24": "5AJ2AydFUUr6KtXruwD5T29gmfpVTQ3tk8EcJff5JjhxaSeta9E6amKYG5yr9vCtpAR1dcGzbMmhJUPy6veDRbfA",
  "key25": "3bmkWmDGY6KPmPuUWWmsVQzFLzzRm5iUZM3kYPvTt55zQfCH8Ta3woNUfTGEcsPnpzTApmUChxb6D2uuTcfvcbrw",
  "key26": "HeWeGyiCLkHabHYW3QtwRXvxZMNdBKUUejdevBvN6wANeZkJCoUjp91kr5E5PmcahN4opNrGHDFxzehYsA7nBPz",
  "key27": "4QbvDKSCc8wpTrPZnZzraZfhS3hDj4bhvbBV88Le2E9YmVwdSCGWHaiT4uUjZv2XUWwgUxf5WqNAkF3C7xRrdxE2",
  "key28": "3kUU73PTr5P5jpWuXoAC2wwMKDjou2N7ENpLTgCtuK1Fcjt2o4QjGGdc1MVAapFFSsv7JxM3UN5GY95PGxE2o4MW",
  "key29": "4AYXkQ88WGxMoknBHPpSBnNcJEvAWYUaKboV5LYW4ukXs7xzhW64BzYEivxBonFo6r8ERPArKq9kvCbV7xNNogTP",
  "key30": "4xHghisaTW56Nu65hdES8bD3wWp3UjfGRTttW79jynJRgQS1akwwHWsoawCroWjkmqVb31aHi8zi7Pn5RqjPazGn",
  "key31": "3Frih4zEnL4SsLMeJv7D84chvMesey76pWVtYRYDFgEZkn4aWhdXHWUzY1EmDGvRxRitNb9VT8m63L7ozGnfSJka",
  "key32": "2MpFvNZTA5eRymShcvr4yBmjiGdWsM3kQa1ijZ9GcY63FnjXbrMuxz8HMb1mmufcBD2jH3nEWerSXvd1hedVoLLP",
  "key33": "5icPVci9QmtA9tnU3ujUcCpzmwn6PhdkJnPgPREeZncoPQzHTWgwk4RxBPgUtRfNZFR8xgQ5TuTG2PmtgnUvEvkS",
  "key34": "qqZZwUTCZNULBDpSZzkCRYCYSqfYVj6kcwMXP19s2eVbR4o4bmXtjmdrVFh4wUFYZitLEzQwZcGTxdGXV7s3nSh"
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
