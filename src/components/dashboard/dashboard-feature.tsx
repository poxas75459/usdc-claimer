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
    "o5e9hUzDPitmCyK2hptR8DTzJASFoCHinZLCsdxDzxAaL8HgHwGhvUL2pj5GTGkwGdKpCafsJV984S125775ubT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78NUmrZZUUFiiARMsiNSaSuvpeFyVEBqGQoixAMy34ZGSqwWyrAifhVYWJDaFrvQ6JruxRJBzKzoVTWmgLTJuFh",
  "key1": "5GE2KF3ZuV6kYyc42amzh7TJRjPfV3ekBAjQ1skTzFfHE6pH17RLenHRG8A6Nhd5pombDEF2B6YVX6vLrJeUp6HE",
  "key2": "iaT32aWbf4Hqc7y1a78beXnDhxF9Xc9eYYFyXDj2PAyfAkmV5dSbBAXirNqbqccHWaRmXTVBGKFWNqYBPnRDZ3D",
  "key3": "5SdnGMYQ77CRRkmVa9JVupmir9crW37rUi6KRQUD3KqRtzyVhyMTnR8Pp2wMCj39tRY9PnCWAs16KsTpmfVwe8Dn",
  "key4": "2YTjGGza33QG3kswmLiWrYegd9vAQsqbLviqTEtWhj7UiSJawwM2ZUsen3YkE3oPbK69ST3jpJdSLiK9JsgiK9Mp",
  "key5": "47rFwUa4wkAqdrnTuNLV1ZkbAZ758AYsXmHKPiV8ALnAURaBH1kRzYU9GXJbiAWSZqQoc4Dt2fLCBXVeCeJbbmCL",
  "key6": "3a85ZxTNfUDgUrvmwHFjHvwsn5xS87W5LMSkZBzLQuBrkqemWdLVChjCJeZbQ28wCj4cNahNdAajzduRUVdjGB1P",
  "key7": "3LTxPw77qc865HeLMPYdpdBN1CJrsCGLaMi1mLPcP4M5FCKhpKxnZY2GaPFA8DyY7vQbktf9Z1kMgRgVuxhRupVX",
  "key8": "4SEFEDSqfB3dGFunzqttaW9snRATTZ3WaiyoDNnPBN4Eu1WDxHomZdTWsp6Dm24C4A6RmNpUB3gi5HrkJH4VwQaZ",
  "key9": "43YMQT5dpqhbP6deXJks4r37EsdnJgowU33pNz6wXcqfAduk1SquLhDkbdiLw8bmrjXX1HFcPCqPPMaDSVPviW2c",
  "key10": "3z8HbEnAaCUvC9w3FxM3KcrySHCi2zmXUyBfFMR4Jj767bkscrhzfz88XkD5KyiYQqQoNMFiQa71goTdbZoGQr3s",
  "key11": "43uRT52uwSV3RddaHRHk8aqeewM3J4JkchUifUhscm2CbiLyn2uhNdAXAQ7Mc7WfBksS5JNqGw8WD4YsouiFTE2E",
  "key12": "2gcPL89khdYp21PxhTGRAofQEyGtSau8HJrupWZgBftuzZFxTE8MGUwa3TfJWyUtDQLDp2YQc8mfwwKXidYRTXL1",
  "key13": "2AeXuX2kMPM7vNsuVGHypGLSiGrsDqoWGM9BzmS8WnWudf9biKnAfhqxu9Jn2ACucnSroTRiDz6DxRpAXKq9AQUD",
  "key14": "37KbW9HN8XEnVgwzXpeivUki2Fdd76wrNfoZiTunqoz91WBrUBFSMgcPytLMut2nLdG4KR6jBxCB8ZZvKwsH5Gtf",
  "key15": "2Sobtd7MXWeKaHCNvRPdXu7CmiRauBipJSSQHCiyQx7ddh4W8nYmG21M1Hs8cA5J9qxK1SzGeYbJ6M8rdZ4ZBA6J",
  "key16": "2GvFGC3qKs8u7VYr7LYwgvs3GixdN5qsyF7a9rYcnQKCbTvVe278WSUn2oXCNxaThJ8gjWML4fZckcYTtstJztXx",
  "key17": "4zmt6ckkP2WLnHAaEbgC2fHcBChrxu2JB1piGZRTTiQ5CPaSMpGMkk2X139kcCQYk4jjzo5xaFqVzvqpJ4KcP8JJ",
  "key18": "2TfCvThG24UNZ1Nqz69htEm4DEpv9kR9FUYkzQrE4ASJo9nXout6iS7UodaJU9S76gnrhBPpgHvBcAcWvDv2WWEy",
  "key19": "2ukhtKygEqygFzJ6ZUrSqhuXq7r2NCbsNfEijffrunyaQoK9jqkTUAxiiyWkEor5MLdYL3DfAx3F1NELQyo2SAE2",
  "key20": "2hSa4wMSwJyLwj2ECSozSkbHswcfDHQyfAqTf79ZzKoDcWjpjqmhGMFRCCxNKLs72YMnPCi2hHmiWKmhnhTfZAVT",
  "key21": "VHYEYWFgQbsW6wQtDTHoutr39jBHfKSDmwYx2z83MUXQizoNjdH5aJ2UQZFvX95CcsQg4UV95ygiiTnCbQRXGPZ",
  "key22": "4CUnakSicJfsMZLnBsN7jApTG6uhPj8fohu17byLWfkbqWKoNjgdehfJgESkmuZEz6jWqYb83y7B7mzyGXscBw1v",
  "key23": "3wSFyhoXDJPGqRCiMcWynjFvnjsXajp6WvCK6qvvhCa5SXbDENik9qMzo772EiqVu5kzJ7pKCrxmySu1787jiAc3",
  "key24": "5afsKSp1bYRRuJyfwEg8T5796mSDYbXQLFerAGPD7LhRBM1c5TPYui4xoXpbeeLwTuAPYZHVjaEYkBYmgMn9GCL7",
  "key25": "LaPjLMdpnHrofVhhMMHcb41J2HY68J2SSaetxPtgqcgYDSP4KhAbpjAaUVQGCGe1C3AxSr5zsBtnMsvvqCC6zTR",
  "key26": "3shjNFN8uU556dKfa2L2wyEWZmooW7t3BnEWuHHcoA6PMbTnsFZBwUSPwGv45qbLzPLGrq2BejzRhB2TMTmApaJo",
  "key27": "91eryN3dQU87sEH6TjS4RMLpbRRVR85gN2HC43jq2jaeLeRNmepmx3KrHu7MxKoyX1h756UA8PozeupRKVPv59E",
  "key28": "2ZWa7Hpo3YnUozsCRB6gFBvG87MYTF6WPN2D5BNNcaTXfNmuXB23Bu65cFD6C1RvDXF41ufbHS4UniF1CB6MiESs",
  "key29": "4WcqkQbNFtiiTpKBJFZLsh97LHzxTMTNVJaCfA8K41bQw2SPKjtY83xeCeWg4YVDfYtqkQe6Cp7NENpzc2kLvcwb",
  "key30": "XTn6HWHXupVw2UNv5cqctCewYHxvcjtaFkzUanLjbADTQW7AyXzeGTi7JB6g9ECNTqPZBWhAicwLogxP35X13W8",
  "key31": "zhYn7fgyyYQvdAuDDCaXdfAcreSELasZGEU97pDyHugkrM9QVfhADWCKDRtJFWwFTTc4QUsj1c8eFwx29kEJ7qE",
  "key32": "dineLEoiqBy4iCMzwsrZZuWLqKTqaEcufkWSLB8UmtHEiKtBrpcAUycQjsRnzyFJShaaFGJBFZjgd6HrKd91MTk",
  "key33": "5weBQ29huG9Ua1ztGMreBgDG99D954aXoJXnj28ueKE4fTY3aA5XT9YYm6aVJGcLTL8sDcEujJwitR9Qdrmx38g1",
  "key34": "3Q757WLcxtyLTYPqruiD6NnNjHtSQC9ejC6Pk552rgKLYHX7wcg5hsnRDtbwPBujWVjZciF4vwLtueYdrtNYfz9h",
  "key35": "3kYY4GkaYWaGAsghAmsEEifbaSpY8gTxZ9dAjwE9cfJMBVd4eGDL124WE3izVTTef3phq6RuGhrGkXDxGGWygLZf"
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
