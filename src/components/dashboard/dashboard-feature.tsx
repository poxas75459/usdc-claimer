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
    "3mq1oWLteJpAcSpJWecK3C6F7wqgAfBae1Z73GweMkbwJ2afBiXiiuzGjSJpidXJASr9UDC9PdwaMMtS1U8mUzRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MGLCCVDSoErP4GPSVjFfYDjH2rjadueezo1cqoRtQvh8cNGovzGxiR3MaLrKtkmxcUGCNnrDyKuPVRYSQFF4inc",
  "key1": "2toZ5gpPC8P41DwyjxUJdSxd8TKX6cDUFXQTG18MR2nzf48nscBfMx1jARJxaFQZjXkZkQzhKuabnzS523JbWCjG",
  "key2": "4azA9tjaYNSUni9cDBMS8gZD2BvXCskizUKMPV4wz94wedkDAuNPGKigYF66NFQf2J3aEhZxzrx4s5uCtjqT8g5F",
  "key3": "3gWzatXY5zmRWnxEiWWZX1JGLniPLpQfC43h6kDr67Mab5ZaHosuyM3zENMmynx6MYKGY34AWQ3D5ReCDStxehCe",
  "key4": "3T7c4BHRkaU8x5NWTHU97nXWQmpu1uNLT5DQfZhYbTrKpp5ADzfVRCpbRPkmBbLP4X5uXF1bJHMRHP3VaXXC3RVY",
  "key5": "5xdQ7mGfr1BCWAtcEmaEdsy9MgzSt5tcnPnQxdXfn66KdbK4oFe79yBvqbgtbuR2aj16VG3yNJPYKuNiHAbrk8FU",
  "key6": "4AnBPpuPtrm5fuxMPMCLUJvD7pPfc5kF6nJMEMYGNWRqFjkFvnfXzSYUNJBYFkqSsrh7EHunWLq9PpKzzP83eQjz",
  "key7": "4frpvYYjcKL2kZJ229HgxKiTvTEEEdRcLk95kzQmSckYPVu6JthMyqWbQfb5J9QfFw4DcEMygGS87W3XLmVgpcag",
  "key8": "UtXcLrkCmgMjHc8Yo3QruJac68nWoxbhsKVkmyvovicm9oXGcfWhHmBf7VmHXKCUSPREXeh2Geu2Y5oM4GR2jez",
  "key9": "2DK9PTpzUiSXDHvzuG4WHPdcyZDSgM71QWFENFXz1aMGrDhFMtGjmD7bkDFnYnGYpMqKn8d2UaJU4g88uhVNfKpK",
  "key10": "4QLpFohChDx9L22jYWDtBb9RZd5hprYTcBZqeuQX7GB7LdWkYeyqrAXTWwwP4s7UPFBXa4QtTzafreYFtJf9m323",
  "key11": "tmofuT3mphCiEmBHVtx9SPzkx1nbRGijf9zvbiZRbeNucVFTaWS9shcDjBhuFXw9f2vtNzyQaQ5rYjf9Q7jBrsb",
  "key12": "2AcgAC7eZNBtZ7yio6sKo27yAtZwNVhNAB92VikBKtEbdhxMimUicp7ipto4TPC882AWCSu7LSc78sU5ghxRRUaX",
  "key13": "394xr4PVzsppu8PVezFZ24weZLdznxHaMTTYnZMmb9dZbmxxyPzsoTbyVDtShH8yJVXWXmZx6uQaPQDLt4zTeGTW",
  "key14": "61M86ZmVfbuHq7jFsiHEzNL4F31C3yiAsjrNEuAG7jq65imTj6Jw3Ypt8XdCpGrHQhnrvnwz9XNoXDRjHz5aaC9R",
  "key15": "34xMC9fK1KKgc1kSfGpN4GseHphLcCsKB8ayrabiBSLr829nVLW6FGYftpTYGtDc3uZBzoBanTwH55kXUW5tijYT",
  "key16": "4ryo6DaxmADqTKw6Ys5SC6PQUCUQD3yHWLGhEZEKYHBMWCHXAJE8qVUAj4NfcMSWbaRB9Nby7VruSrt18rtLz7jW",
  "key17": "3NinfNJdCdspjFXApQ7QeYhfkDzNNxfN9BZBMVNET8wwh1yVp2CDXR2Byns9prLfuahVJksWe3PogpSFGZFKdkYt",
  "key18": "644te51LMJkiHE8f8dYV4iAxsC7yx5J4dWBfGdLZsLkQJkdQqiWiMsgGxon5CCW3CFBeD1W8gTcFM7XLgK5ubFK8",
  "key19": "4bWB16AmDk2aS1Vv6JpJArXHJG9D3KNmp5GDTehQThD9VKbvsG8eNziXRqKnScz3Rv4k3CcgB87C6anFsgW2RFkV",
  "key20": "4xvu9oE4LctcQVPcXJjSnWDjiXLgCfqNdHr7ftUyNbfHTWgif2rMrmqyiuPZuhzKrkC3fbdjP8WnWDL7SukLVE6E",
  "key21": "3CfDCNmBLJnX11Lt8vUeLi3pRr5Pd8UsvQYgAwUPekZheFTZKpX83KVA6dtPCybyCVpCwE6SbQtaRTFqS8j62hBb",
  "key22": "67SaNoxJc43CBKJP9dg9D5udybJGvpfASnjY216UnjNaQUkR842V693X6KpNd3qWjd1ABAPtCC6SWHoAVv26PpWS",
  "key23": "5gGrxAuwgGQHCT9b9SjDBe7wy1CDpfNRcPZC9VEtntitsrKxKuZKpc7WFvA88yJ9vADiE1fD8aUQN7hXr1xoL6Ha",
  "key24": "59GqKwhkXXaZ4YLreGcqaMPdFUdc5qVPrycfyw6TxXEAT4SzpJi5DyxELF3kofBcUxusktoEVEv4q5FgTRAutvMX",
  "key25": "2EZaPATtFoLU1DUjTxCqgFG5nig6rZag2BquTE2nXp9YStGERqH2x5p11Nffv3Q56JtVWktrEbwvFKLCci9z8FQX",
  "key26": "2gGNBEEEmH5ZzW2advCsTkrGSFB7voMYFQ5YzhCT3JpdWUFcvigqswyUyo39rpotLqCD3RQzh5VBi7q5dTKbe5o8",
  "key27": "3eL4z5RctvTXs1WaW7bxNNxoTiNaoGWx7W6jdnW5GaCDZL2JcmatFzuUsGjQ9K6AqP5wD6T5AWKH2DjN1tpsVQ5d",
  "key28": "JS44L6Ho8e2bcPjoNFxnpDkc2Vns7Y51gmFGrYcETxDTcXSZoPGPtaKv6QDHN2fHgLDJZ9UNGCDxfok3ANeNtTs",
  "key29": "232JnhdvnHYvxpCLfqcXZiBEtRy13A9hhhoYEqLZFH2tzEh8vWJRPBEF7KEFcCsN5fJuQs899dkbXLsSFKb54pCm",
  "key30": "27NURPQuxH6jp9KbCGwo1etmv65dCxC6MFiu3ceUoGj5VN7bpnUc3vPJBaQqvLtMXrqUGvRxWDG1KsTXckSWqv4L",
  "key31": "34QoSvpy7egDZabEhR3JxFhDni1zFuQfsoEgZKvHNoirFC9UbCjiQ9DxSLnH9RGnt2UKWRgzj2QTcmUnpLE5bydK",
  "key32": "52DNzSMtArNANqFmnoHpncHaz4ZSrv4QyMmf9pKRFFPvaAVTid66ycDGNcDhYB47vZnT836BvVjYsE954cBj5sW1",
  "key33": "4VPHZegedZ6d4LCJocdSKBDzxkMptcHdyxL9EVyHDYizD6NetT92d2SFw4n8QU42mu1MmhNjPBSikYRvGCgvoqtZ",
  "key34": "58trpLdMRY3pFb9ULe8PdSWEc2XiHLHhJ6M5YP2rk1Wp8VnwpEW8asTV9J8LS66pbrjUu5yEhdEThr81varqRH51",
  "key35": "gz4pzAuTvwbZW79iLNnjbWeZBev2NyFzeVQvwfVXpgHbAXXoWy9zutW2p7DtG5z9SWn9b9H2YWZkPC4Hhk39var",
  "key36": "4t39S9SokuM1PenQbXBezMnqn4Enbz5C39wumSyJMm4sb8AF6vSdvcNNwWNep3RKeVjq6iWJy2ufcREJjdcvwHor",
  "key37": "3mUQ5VmQ2rh9dcLFaudER78uNxMFuMGsnYCAnakJdWp8r6oQzXi69tBGXoGcxcABgjxFtBgSqsxo8BoCyU4hchEp",
  "key38": "3NH9mD1sYsmCDafGREY7veFL8pthFnHazTYDLbeMb1rxHDspS467JUoFpz3Qcn3XNzXLeJLJyncKxeGUn4R1xAsv",
  "key39": "34WcNoX7YVBeVKWRpZDpYRcgprcaoDaDt7rUSFTomJygh9bdjJN8Fn9x8woyjF7sWtr1xM6bQRNxpUPmMuPcb3RL"
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
