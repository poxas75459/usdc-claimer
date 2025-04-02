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
    "2DxAChuQdoazZja31SZf43qg4kAJTYWDF3bSTH7aTPK7cRFjvdvwSKjWB8o4U6Y1TULkn32Yr74gm38RDRg4K7D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHNuqCg6RRZZTP43wGiyNt3t6LcvvH7rNLQWQkjb5oyUniqS6LnCNvZ5vshBpWRztYdmo1wdmw92MQSjWcJjXuZ",
  "key1": "HVJWv51SLYusEhHrtq4qS9wLon6jCfaxnn21bQZP3jRDfL6bEmRhqq97X5WS5q5djBCbGCuhQbYGGhv1hdh9Yv6",
  "key2": "3EK4Lwrgadn4snZrY74EYa3KsZp29UKuxCx7EFkYczyDV6d4aA7FmaJVxBtaVdPM419iAvnjuqyThNKnzAsDvEar",
  "key3": "2FnnrnNQPpYtwGAP4hRjhnjo5SSeniXxEQXJqx5x4C11h66w1UY3tGpezKp4bNxVqACofgTEK6ussVQaVYqCDfkV",
  "key4": "rqXX4D465NZJfVcXfr52K3boKe3cB12X2LQorbLR1P4ACaYFNBnetDH4upVjJEi5DDufwxBXbtennDztp8XMU7i",
  "key5": "3xqSdybcV5NRGNcBqDi9y2agXas5pPoDruE5B9FEaQUuwgxzUfVYiLtkKHjVyNcQepRfsBQ61fQ11s3CqYWAhAki",
  "key6": "2MSjJPc7saf5NECxLGwTGSV7AdhhxQ1cVxULtaJvv9nmALVQ62TH8pLJVAxjnqyUNeyPVTRRowsneRC67hTxqnBE",
  "key7": "SAASBvm3WRkHHLFEryaWiqtBuVHU1KkUXXsrc9LEUyubKs7fcYg89sPs1i7GvPF827MsWe7j4CWrbrU39fY6gSG",
  "key8": "2PsJXq8LXcY8Tbgqd19QYrS9B57JqQwKJyjdMyN4Cr218ncGxdF7TnjD27Hkfiq3YsSix6dqsEUc33789gotteVH",
  "key9": "5yLrGDS1bJJz56gyZa8n31K96QQ2CRXHvXnJNdmkjCWVMZjPnHkiTYAgZmyvKMwQTGxkKHe2wCicatNauwgPWVrv",
  "key10": "2tmG2DJ2FtKSEW2dN1XRB9oEPL1RoLzgSrRi8XuDXrs6aEHK3zTVd6FpVs9BuCHhVYXRNHh3E9HYKmvcmBBa1y6z",
  "key11": "3vDTGHf615b8hZ33WXcDtnqWkct1KoE9DtM6AuyLD7wp8pgxpNrztkxG12qXhkLXWyALYPUnqyYziFpku9ytXZe8",
  "key12": "37ByqHZMVDKwQ6vUMp6wTrYUR4AkooFS9cWMVEqhXiTgW8ugtgYN1EJZtWJQErKk5iiHd6UiGQEmt7nEynVBR8Uu",
  "key13": "5zR3CxYtLjo8gyhydnkPUaXXMxqJsSHCsGCz5UaYD4iEp3nEZL1XhEBQw1kc7xqeFj4EbsrXGmp1bn4F4yDDJweE",
  "key14": "4v8fZ6j6TW6Cwsi3DpDeZxRRQioa7UbghUVtou6rEdt2MHsow16rV3csRWkWAfuqWT5Y6fRH9HaEUC1MJ6drSFEn",
  "key15": "3WkKECfjdwfH9dcJ8CPusGTbcwqjuHS2jCxUqoeLNb8xNii1TYs4GXxqK2JhgbzDncd7X1HJ9LQqFmiXupzdsguQ",
  "key16": "3BRm9yPVYZNejv63a82mX1C2pj3Pr2snnSH9iM3TvHeXz7C8cgzypaCKMXn8bAWDZZ3PNCCPAMtG79jLK5qGww7M",
  "key17": "36ojzpRDwEPXgsReUirBpcs7FQcSVSEDjap7TFTHTYRmgTa64DKdwokX9uWXDabGNP4SwMHzvmNkW83pf9mwVqmX",
  "key18": "4hPyU9T8y9YYBr5fDteZNxEVRXkof76qZrqTodYzySx9yGtZqKJChHxs96HSHXNY25n5PBF1on2p9621F2HTtzAo",
  "key19": "5amcaKQKfKqux1VjMZx7CgJP5cV5SjUNFXHDWr1e9Cinq8y2H6h1gMLRWvs7Dg23fwfDbGCyN6EpPQoPDFb4TFUN",
  "key20": "5BUMDatVarCFgWRvbH98vKYjQWUYzQJssJu8TCr5QsyneMnjeJ2LtkFrbCLniwdPm6Ahi6H5VWFgYvuP3ryPNuEc",
  "key21": "3GAqHnkLeFjVaWyBLEfumcnE727H3KcVY7K38LmLTKqWRprenPS2yFk5oq3zybxSoc5cQTeXmjEJpBNoscr6H3Sz",
  "key22": "3WERTGRtT4bZpSuqf1j5E9SBdSGQ9UHdN1yyHmWH1Vmw11B7qXWKcD3CkBMGXsyDVVaVTZokmdqyo6S7vuKsqEBo",
  "key23": "4EvZuarhhfCGEEmDp9qdVt1pEqXo8pqeyCuJr3rr9PrTvWqS5xBJHPJSU7N6oVU45QBjF8HMLHhYjFeTsBSBZ5AB",
  "key24": "2EJifHYagahHhfYwVCQu2wDwDm93e4qipfA2NW2f9M3BDS6gs4zveipTAF7e8j6B5JEoKRtGdaH8U3VhitAWq9Pw",
  "key25": "ZoDtCv2tP6WBU8b8SJWzQMvQSCKe5rsthXoE5qVv3fQZHNaK8YFQQWK9jzbhAGpp3UCYehUpFjW9NNUefF19Y1u",
  "key26": "3DNEUBtYZ1jixQBixRSwbgzK32HA9MFYL3trwLLS4FVvL2vEuBNVJHjXheGxLbZgbQV2pgbVNbJT67YQhPDhByju",
  "key27": "4mnhFv1JgC6GCQmAkxmrLvCsSuXqccmmKcnFEy8TZVdaE9wgicz7w9eXKChkhHYrYmLEJ2QkmwpATsqZQhtQ1ena",
  "key28": "5zHeri1Ji38bA1tB3xrZ4jUezBoBofT6d38XkXPG8mtNJPZQnN4PRdVZL4vKo47feNvtpDDoSgb4SSbZowqoW2Ne",
  "key29": "4PTh2rtRSaeE7KQakHZ7jn68M9K69eD28CiWsbhS8BAYkwVuuBcsWkFsiUM6WKz5tfawC2wZL5hbGmXD5uqJsaHy",
  "key30": "3igUB8MfLKactccs9JM3yh9WHabWAhce2Lq8y1dzXDDYqg253Z9rKKHFeqR5DU47jURNeSztqyaY6a95AJpmvy8m",
  "key31": "5fr3YCU7S1erg7ih9hff635McsXgmXphZNFjhYPpoGoEHADTftcaH8jJ8a2bTgY5m2QpbMqnjNYFr7JjZrevJYMi",
  "key32": "4meave5hMJz3ffB1mquf3fFXbMj9aKuFL75zAdN1mPtMb2B4LBGRf7aZYiyL3ZAD9rTLJyiY3pg9rVUidyuaStSe",
  "key33": "4kvadhcjtg3DLewMY4y2Sgs5Y4YA9YASN5cUzLLZP6PumYzCd1GL2giRdw15fVNx73mxhhyMbcbkpRsK9XbN1uNK",
  "key34": "5EEopBV2BdjHbe3CrXhAFqrNzG9CsVxbPkmJEcTqp3QaehiSSkLDpfpbQmG2tnxHeCJhydQmKL7wSVN5nDzpXCFi",
  "key35": "41KrbZwSs9RbwTdoq6BtCbXxRQ2up6mJ7MN9HYLwqizrBXXvZHJZGq1z4vMvMvfznGQBafUAXSa2Sjv8Hbp4ipej",
  "key36": "2YjdBpyWGi2r96DfBf81Z7FBQduo7rN9M7h9PQMuRdjRQMi5vSwLvsD5ggt3paA4UzehrxXUADBwV9PhwjHxcpkf",
  "key37": "24KJ8676VX87kj6mNN48bWnzyodYdroMxkMvhJuEwouNFzQwcjKfq2h7ZRn1xgGv1FPL5qGy35pbteMTWbPErMC1",
  "key38": "4iysfV2REi74UZhBKSh382NzeeyUA7fj2h4q7Qf5RkuyADYqRwDa8Dd4yZa3ESpnKn3gNdvtSp85otT8SbCJkZ3g",
  "key39": "3x3wMLNxCwjY5ap3k7RVBAK7wKmd6nT4i5crsvz9iDX4M6ZbxBJYWXx583ZaY5sw2NqhSx34br77EVpHFGCR4ekW",
  "key40": "66we2XxwBWnacTqmftVRwMLyf1o7XTKHjVQcKgNEeq8yod3X9FLJ5n9QXRR9cj2niZ1ZPabUU4jTwYzHJtrfMUR6",
  "key41": "5rcu5sNLDmTkNxU1gK8vHLQJ6eUpTuSBT1MNX9B1FfAVCtKcwmb1Zhor2r5V4qbSzvpekj7MENtG2PX6nQMiDkWn",
  "key42": "5Crqh3Q4fenR7YiH5DU2jpFwAauW6L9s5xwLqeXNnKJXSNmErvvhYdjhZ4sajRTrCBG7v3dShE1DSWMwsxtMvcC5"
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
