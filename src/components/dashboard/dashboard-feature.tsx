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
    "5oKfPEQvuy5JfcdQMB1caDwcvQzyUQtJChcBx2rw7s6KRYBizyQswpvk3jnT5s4AssUCsRwpViYEEp4UAB2RjojV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sSgruz8axzKasB8dnq3vLkcUEjcJuR5FDc2nLaN5gRjAGpgq4pjmLbUQZk2SQta8LVNzERSjabwtUeQAQGCvo2v",
  "key1": "29vag3HJ4VvUnPUfFztruEXUbszohXQuLBFx4U6BRe8MAR696oFaS96xrQW97iDJmmwcAtyN6XmW3NxRYvZw7Xj8",
  "key2": "zgpS4JMYqG6rbJCbvw3TZsd89HT6yyA3tKPxpasBhyHNBaFbZnyYsdYqDci3xx5je7Py6WV6sK9hLpByqk88pYn",
  "key3": "2R7MD7zisV1hcmdtGrE1Cp9sGenxa9efbiBUir4HtBwpiCjPhNXBV4sMwZZmYXPhwe7FTfrkUcX7eFZnnXnEhaHW",
  "key4": "2e9n7tEyRmqn3AUMFHf1gh3FfMVv48rvaFTFzCcwRGkmSL6NMyTFfbaf2ZJW9uSzB2fPy18TwCR7yTFx7Y6AX3Gq",
  "key5": "5PF2zD3gU8v9A1du46BJh8d8pDQMSQANA9NoHE3EMnJiHxcFzrPenYGeFVq32DDJRzHLhfsc6jg6vD85qgs1hmtR",
  "key6": "4BXyrrrms18CTrTYmFNQCGHc5xz1SF1xeijSvkstEioWNwiXjpY3nbYTXEN4EVAj5DEWFmD9fmvUrWU1nprozdEE",
  "key7": "oiUHMeYNaq7BcHpLHRT84KEfsh34akRwjKbDgfy6hYBFeEpTrkeFUD8WHuChQxk5639s1B3fDr68jD5UinYFrBG",
  "key8": "3Gss3sGy7gTzhU8PYvbbsYcDKkvGYPbVvgSVP9DCsz3B6G4f8a7B49UdmsRGuk9G5hJAa2jvQ2LgdyfHFQvr9sdu",
  "key9": "kxGiSxtirMsQgAJVTPYBzhGmHSgvr6n8LGtLndGpnXcQ2JbUnTwfFUvmweqZxWvVvParLSk1JzWQxSyP6eT9dj3",
  "key10": "24sMPjmjq2WUiNrRz7rzhF9XYMCQrhD2dzAmorv7eoBaiA46ejVDeu9nYDymywkEczPZ6bnkhvC5xUTwdDdiWwGR",
  "key11": "3HGhopcLBUXRbrfFcFhqDjxgtAjepCcFLJ6D1nJYaZZWsgiUga2kdidAnJzhsSGavbGydcK3DYGxt2KkDgvj9WyG",
  "key12": "Zo4Ags6aiCwhzsxXZvpSsQWfBrnbPBsnDZ1uL3LKjbPm47qGN3sbSNJRAEFsGuAuJaBqm65Zafg3FyZsvj2s4Rx",
  "key13": "4k4CqBhwrkMrGnCXHLQYf2PpM8RwCai2wemx8MufKExQSAV7xZjViKKVei7oY55ApEeesKxX837TdtfyDqTGUs3P",
  "key14": "4Eh8nFrNuPws3q3SjsS73VW2rm6tVjuMJ7b2Hk9o6SBz4rrkTTmWD4FJ2WiBQHxZxaBdtmZWmQQ9nLzc6tSuxEsy",
  "key15": "21A7ypexLeqS3kqv13CYZwidBZ5YFUxGz1GtDdpih3Zfb54QaBToa6qf3ZUioPrNZjjK6FZR2tyKsuiMny3r84kg",
  "key16": "kZsEE6LbouAmonDDsghMBUPi5Ezy5a4391wfAC18xr8hmxMWopxhhQanDufx6AxnkWhMvrPVhFxpcETEaXfYT9x",
  "key17": "5zyfonpqk5EAGj9ry5X4f1qigEQpt9hcrXfiZ7MuvAdLPfRh7A27N9jhJp7mbMvzD8jDv53JkMBu5EJURRjtsefz",
  "key18": "2zjZ8b1rLV1hf5pd5sLQWdhCnNS5R226UQfFpch1RXJzSTGWHygT8BB9f5uH97trpwELfh27AWt2JGy1W5i4kt8n",
  "key19": "DPjX6pXHHyjBdwfo3jAszWZYnipuPitArkPgJiEBmNh4wkUmWPG1iGdGDGN3LDRouQ5v6PSkbehMfTpsBd2Lo7c",
  "key20": "3GdtCqakSqiQyqM8u7oiK8hcFdkRbuoEnfxe4E58ee7BysM1RcBbxnVTbEoQoejQcSPePXT2d13zcvG6FsYXoX4S",
  "key21": "3beK2gFSwuBLJ2oen8FiXMqVYMojphL5J9s2ioF2EjXT6PiHArqzD1gjo3FwLdbtQkRZy3uEv6KKS7BsjBQvpPpf",
  "key22": "4g6GbymsskJzfr3Gx8b4jEP3zZHmNFi3PYJ5EnU6VDqa2GrjcSihiPCRZifphqpfYXoKgfCgWa6DqFjZykCwgKgU",
  "key23": "hfxPUbH4tYrNABj7Qzz77CzynDDmAX5jYCbWvF3SBn2ise85kGFwXnreGp54GeF4fgoiDNoft98HnmhiDT8NsW6",
  "key24": "3zzmgTXJTCmTC3KDMHQBhFGydKxkykQvRRJPjS7gYLqU5vHwUckXL3H2qguwNQV7jCRpeJv9U1ndfwjRDsvwWRTo",
  "key25": "3zKjuyknCtUccPwqxoBWwzCqjLn22GoN3xzYe9bmrQPhxZuVnDNzSTFuGUtoZE9xm1s9PSGLJJ1B41bbBJwAdHR3",
  "key26": "3QpqmDskD1WokQrGPrrn3brhA2dQk4irpcTs2AgSSnNRGLohYqmnCfa9dmaYb5dot5XLgB3QzAxZaBDpxLVRBkCT",
  "key27": "2qmiTVoQiV9g5tPLSnnL1Stek3N7y5RPJa12AeMkjVgW1jt7j4jVkugSn4MseWRTqH9sawRdiAHX2oUC7YipEmfL",
  "key28": "55NsbwUaAy9VvcaFneUjws1hqNAwcMqydzZigi3HoV6khPzWiFRWjRPUh3y83PohTYkADToHecoMrgukPExRLbiJ",
  "key29": "3HtpYGp38aCMCDjQp6QZn4CnwsKg88sgd8CVQFmxWBMppqYadnnNK3nvfRe1k2xSY9wzAyRLH37wMRRV6yNxqyxa",
  "key30": "3CvguWKAxechpZBEfDHwML5yyx8Xc3SXg82YP4gqMhfPHc89p3VPfuKmAdh3wn56jNF3mE4TPsZ1PBjpdLnFPReA",
  "key31": "3Cskv13xvG8vuQN92z8dbrMLo29LQv8DoCwPySGe5CP5duSwB3MGftytKhYhxvk8tZVNs7a5DvxdZcbmbBpJe36Y",
  "key32": "44DqjKQz1ExxmAH84Cu1BkR8pcRQufSvF3ZafeVEPjTQX6ThXRubNxPjQnD5ByjEH65aHqNr6bwnf72PRaMsoeVp",
  "key33": "39CVb3w69APYAvr5GVcGpXD1aFRcuim2vVFnQqopj7DVXgPB6pL2R5RAYoGokW24QQvHEuEmMvHuZLooL2wxqR8b"
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
