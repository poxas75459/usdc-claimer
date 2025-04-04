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
    "5Nqou8kFgg9W7Q6YxdK6NypH2HDTGTH9A6Zm9HxkwtRxAQapPAYKeqfgJAJMTh7CqnR62S4ZbD6dUf24nkazJFQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qu5u25npmpJVi7YYHJCUcDVWaqe61L3ZdVwntVxkgU4BUcEYhc4CTCAER63tpZTVWVjecdy6w4RksRR1xGbWEvQ",
  "key1": "4Zo5Tfh6f6nGtvehoYHgME1mdsztjd2x7y4RQMrP8ocEbUmEjrAjTvWVMg2DRxedQe5xTZAH8TGxdfNbe43tKCim",
  "key2": "2Fhb8s3QZsRYfvitwnTXJyBzjWe75Hv9XRWMNjVJF7JsHxqUQwj341MnMNjSTW4LHr3Jur9KTK5ER6AvCnpGo8uj",
  "key3": "4uv97xT6LVaAvz7sbHpggfSeV5WWGxpVMQCpbVVbZy4wAZEDhTmuFkv95jqdVwxiPDv17kct1SFxTZpbmG16wefJ",
  "key4": "4C4Kc9BAopPyJGQREc1yW5ops6TQfFTU4DWx2iEeAU3zjFXVNohizmBKTc4g9eaqFWVjcSebA5stbqbAuXpziWMV",
  "key5": "54cusR2i34dVAa24WtYzTXhSYmWorqDriJSUbefi2xZessbo8ohsmgrmUUHjBWECFLYwqzcCgkfoQpSh5TnBXcgY",
  "key6": "4HxkhWSBfuPH7dTQYdHN9DGuGkz6sPRz7YBDnhpy6dbpZxkQFoWc3mNf1sPqByU1rE9zsTKESeru6iMjqnDxfKqa",
  "key7": "5PtMPS54AD7rHELnnsUWQW5D5KgWriR8huKtMjjPBPWYuBX9ufac2PyvCgHb9p46cw69jAhyFE3oBRXUaZsVdAi5",
  "key8": "4m7ASR1XiztjeeMtcdZYnBBdMd9EppiSZs6jCHucaLs7ZEBQRdiKHWTAmKoJUCrCHXAmByyjTyjNZKwLLSWCcFpK",
  "key9": "3r8okGJ7uwJhZ69Fsk4oQW7t3V8wKSm5Y37w9F2mc7Pv6MwzsGYTMA5V3g5SmfuC4bwhBGcHEKTkpLt8HSKpn4oe",
  "key10": "4BZkDt2BJrYoiEfzPFFzjK3JfsdduAHQM2HdV3Hy4DCsFkmEjDtU59WRmPSRvJ66JDskdfuC6SjuzJJjZJAZNspH",
  "key11": "4ccWn2A64qj6Dika5PFzvmwXTb4tQzwXNhsHH2MQdhRKudcY5YPVf8AcT63uzyyzUdfb1Wohx8ybS94d3kCJUMAn",
  "key12": "4BNmU81aw2C8HW2chtztbGLpt7YBiv2Q6PzZpbR9paswtBRBE1ocgBkZSBzsqJyuJP8A15kJQQKidLgHBsXKHrzA",
  "key13": "2XJqmHKsgfJg5M3gBWLGvVd8kjjyWtCivmP6uudJgyfKDEDfBk5F4FfhoME7f9t1DeKZeLENdkd4hkM5tTei7PkJ",
  "key14": "2HdmFPv9tqkswHJMF7DpqSZPhcE9hdYyVqsymFzy7PKYQhMLwS6tvub1fkKzfvuJH6Zo4Jqo7zT9acQvZJKQgnas",
  "key15": "3jvf2U1o3QJ1wwPukauHQ9dAyGQspXdiJrs7qEFMreX33ng6C9ju99rhd5CbpD5TWPQFgmbbUCQmyf6CHBRAnA7y",
  "key16": "4haCxNrmtuqnEJXxVHEfjmKNZGTZa6aeg2Ua3hR2fT7LrWdmNT9d2cwJGR2Y9Yy8pSkNymwCRZqUQLYUDHhrKoHt",
  "key17": "3tJ95oHVvWSzagyb3Xs5GWppjtcx268svVWZya1eUc4xmBBpZho5SCVvX9ZB4cLrN2TnbdGbSRuuJnzXkLhmNzgE",
  "key18": "56CDPYWfMDawCYgTT6uuyc3EA5NmirmmyZSLu3gfnd62sG74wSQ77xeVDw8k7E1A2rp6ATuT5c6VEorpt2kc6jAb",
  "key19": "3SzPfLHD6gnr4Ac9nDWeDe742uHtkYijhMU8NWYCeYV3UPRkL22muJTEpKWcaKPKV5EUEKTypydyAy2aLRfFzVeN",
  "key20": "4VXr4VnjD3cmo7E1LSPd6qFMduN7Y4sxUkpBR7aYGuZnw3t17aL3mUTVPWrx817jZGRF8xDwe7EcmvA7FC9vH1GR",
  "key21": "2ZToMrqPSNb7cukgZQnQhyc6fChW8CPfeTocEaGXQeK7ZfGb1YveEHzH9uMCntCmgRuRMWMHKVz8RwUuQQP19Lp2",
  "key22": "3aox197tpjALV1wpP8qnFJ8SwsED15DgmuG7T6sdBaQKkgf2xNPH9vCsg7F7zkCoTqdpeFVtokgLFm7QEhTTKvmU",
  "key23": "5gXGcRRfdSTCuG9XPzEsSko1rNwQKXQ2egy7uXfLyM2kuCywNJk33gEgFc9GzR7b3YiACXYKojWqrcXkUcz3CJq4",
  "key24": "2wVqKLCoreP6gAfg2AjVSH65onukazDosCnQsXSucVwyx84jHv3CBMg3Nhmac2kv3cRJ4dPTdN9rkip76sTd7DWS",
  "key25": "4FwUd85jVcM35mDR45wD9AFU6J9RZJDSmqrcnmSNpFauREi7vArpVNV357PYoZWiG5MgkgkQAgi3KYXPwazF6BUo",
  "key26": "3ZiM7zk942gh2FktyytutQYPfmQuzdZEGZq6DFeu9tNtoJ4BM4HF7VqTUcdZ1gSeLrgW2iRu5nUsdE3bdbBQ87oH",
  "key27": "2iv4udpT8pYHeHs8HGy7MBXtbYnavdskFMB8riGDLK4jH9PzcYXBTAVbtEPG6kCVC3wfzMwMDWTZmSsrVqi3g8xP",
  "key28": "V1p7B77hhnAnNLDL9rCW9cZrUdUR7ev6TepXxzV28DMRuJ5KN4sWNb5N3dvbghpBr8b8cvABtTPWFUPSTTpXGWw",
  "key29": "2T5KMVtCzedYerRBBQiCudSKDKiEXmfa6YW1RJjhLiYzwE1poR3gmDqPEiYLi1Qm95Qjcf6vWz8hmxDGykMdDjmY",
  "key30": "4EXmp1xz1qtpK7jsyyzEAmEGej5VLGcXL7hKwW8Akd1YAAUJshUeEVLH11GghHBN5aWWMca4X7YTvNX1FcWSq1TY",
  "key31": "BPdWwGCMHv2Q24RiacXmkwhEAHY1GWvoQCvznVLtKMyz7kswA6P4CxZubqNPtT1EVtaDsceU8UA75Y8rUs1tQ7f",
  "key32": "32LTtja4Ri8piJ93aAUkBY3FBQCPYKoKzoLGxgRFYSEJTMSshiFnwRRhDKmAUjb6mppz2Ayc9AB9KrEbnDiwN9cm",
  "key33": "4Hwf4Hp1VseLHwygzMrGwpfCVVdpDmXAcwxsCFF5KmKHm69A2KZ91jTug6TS7hq2g6FcGhDx55G7p6UUgW4osYjV"
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
