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
    "3xTbZSuW5QtBJNFzU3YvzqQxJMNRCMgCvgvsJvRHvEN4FXPv7i75No7idmL3XWU3Yb7F1CU3a1BXpyg4hWcqKzhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52gemGPz8vbkvpx2udBUP88nor6xrdJiDpJUrjjLywqBTFDRoQGRf5zQrpSHZ4r5w92LdYqEgSRZjmUMr7oiyt52",
  "key1": "62npwFCgmbuNXUnzEEH7JUY75T5NVV4S1M2PA2w5Qn3UufTwXqq57nRwe5iUtFXc7y1y1hQQVPURcehe78XqVAkW",
  "key2": "2pDNR5BD5f7xqCU2BMXbh4zPjizcjCSCNaxRcD9PxD8mvgegYAidPHKLKWiwTUaR9pbqqzMWpNF5v35DgpSsmBW4",
  "key3": "4snRgRYE3SKAQeiiGQQTaruK3snTzWMd5w1LDScmbJCym4VLnYSSccez4cwMDgp181NP9FRCGannih1QJf9GVmqr",
  "key4": "2bax5wwS6q6M7MbwyphPdKBreg9dLmJLEjjHMVLA4MKTCtzS4zgsE5eZkE6aCKN3HQXjMqrgP29YTF48tGUUgsF1",
  "key5": "5fmPqPKy7DWZoAgfKrQjBmWCYydpkytCrTnJ6gfcXhMnQ7ia9yAJGdrNJ2ddjsmnirBtUhg9ksp19rAkAgMu5not",
  "key6": "59TYttYBZRg9kQPfwRmF6z8vZX89adSc8ZyY2H8jaDQcj2Erv2ckg6fW1oRxTtjmskeV38uSHoetA6Deu6A6EfXu",
  "key7": "4B2jWSiX6S9TnGkajvnWNeW6osoFaMkMGFFmSi7HkyoeDtKKs9QKgkvBTgwV69VfmLN26vyfeJ5zJyGeXQBVFK3y",
  "key8": "3bUMv6fwBXrM6PvNYqQpjhkCC8hniUpXaNLbLwmxZ7JezEJiG47LUH2VTioXYcFs19AeTntmUQEdGqnEe4vcuQfc",
  "key9": "54jHvitK6rdUHqCjLkhupMrM4efWf9spAAoQAiLQ2hQ7unAriANjFujNPJgJogRYHbSsgn82GHqn74EVzKd8tRi1",
  "key10": "hGUX2ABtvU1GnkdVuKNnTSg7DtRiccPcYF8WsYx9pyyb6QheMHRwHthMEdyHssAmirZbsnqtUZYQ6bPgcPvLTN8",
  "key11": "4oN9bj7EFjGVB46xdZnc3sPypCCw8xnKms8DwSt9n7LqxVYuytSDt8QnMvrK1RcN2TCNfvaNwy4oXhd9EWQ8uvop",
  "key12": "41jsQNzbCcdSPxPD2vA4tKPr4F8nZ52UPCpWk4iaM66xsYDZreSDKrjsLAqmoepu8vG2hGgrRYebin2HCG37TXRh",
  "key13": "27NHng6HHyXvxGRETKck41hPh5geSgEbxJosR3tQXHLKKdiUmWrsZ4mMCa4vgEzM9etyTriYm5nXTsoD3UjgCAT8",
  "key14": "2YWGt4WXTRpbyhQuw4Gg22vy8odTyx3xkPfP7f6pob4ty8r8aSeNJ1NxCLMwsCUBrQtHMDk1t7vcAZxMVStP7MRp",
  "key15": "26vExkjkotcLKTwh1jMPVVbknzUJ9Q8DZEpUm7rG8i8PjWxGHqn2xmpzVFEMQJT9FMkNkXA49WSUNDy87J9Ngjya",
  "key16": "5cQ7ygefiDTTy8zYMYEcHcSk9rXEs4knNXAGMB5G9qra7iVuijb58D9WpZc8Dcddmrq6zmwVUJBRjYQSoNJm5FWG",
  "key17": "5AHQhjSpH1qLrnNbd51KaQ1dXmfdA8mdu9BnkWtDTNCfFJjbJeyVrLhZa4vHeKyAyVuNyCpcm6xecaaEd7Cn5Sue",
  "key18": "5a8U2UgWXto7bF75PprPSu3JdeU8VSGdNKi9p3LG5wy4jcwYhsgRQHrvmwgGc5WFdxrvKbRVcq2YDfS3cEqe7ATP",
  "key19": "4XAx1ex16g4eh6CDcRVVrZrjyJiKrKvt54NmrqnCgDV3CHFxuoafmAd2cQssWUMCGnD8WGbxtNzsvv8bd8otXxFV",
  "key20": "38qFXRsQVaEvBJ6FiAW26EMzmg744DPmrrGQoqzcC3zgmp38dxH2dY8cGXfHT1VaEUD6PkQUbWQaB7UTpWvk7aAm",
  "key21": "3zFegXXe2bG5PaT7cokmdxPEHnVZ6j4W3pY98eqjVFhw7qQ8zdsA7qHfPEgpeNEK9P937yqgffz4tcLehnNXTkQ9",
  "key22": "2YFffhYCqLzQnX8hKfT4ZF1S4dioHmKXgTe1jMC9VxAfsum6s5SpdRnrmLFUnZkKaQVu3CxcVnRjjdQhVxsRufGo",
  "key23": "3ufAzuaDi7BM3tduc16kiPMdWuDwVJyduSdqJj5m1us2ZRWio2QmnRPrtW1EyZ2MFuEuaopHaJ3Dg56k87ocv3Le",
  "key24": "id1h6K8moL3kYCsuPadmsvruu3H1L6dMR8RsCzamjhXkp1CbVx1PMSoZUjz5EWdppDLUGwGoGQXYv5scStx4MpW",
  "key25": "2dw1VcjJbvtRvJRoxcrVoR6AsxCqFiQsyYwwgHPC95Wy1S9C5egzCHXT4tUrFJNgN9gtqSmsG7AuCUTWuZ6ZpXyt",
  "key26": "5j1cRdSN39emg55frJsiQoVFQxoL7EmHBV6wXFzEv3AecP5frg4fBcuAoLVN3cnakhRj9kN1T3R3YvjWVX35Wdaj"
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
