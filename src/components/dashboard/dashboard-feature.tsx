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
    "s25XnvH9ZLMHEUp2CuxDeNmR1dRN8FgK5FqDsXTCLa4b3XcRs8vvmGpXN6YdivHEQWuH9bMf5ZnxbHaC35jbgR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1bm5z1TKW4gmjXSWREvHezDyASLewf6AVCaomSZpRPx78dJxLkc7sbHJBA9Q8FTFkexNSrf3efeX2o8oKvsXer",
  "key1": "DmgwqbPBGZu9zrZuhhNV16qJzrHnMKGqdhXGgTc4fWoQ86HhZr4b4JBPqnDeZMqdWMJCobgzQQRpWKY8wJ8Mmk5",
  "key2": "6jcPregyno1YZUVwpBeSTLGwkmXTcY9fU6Na1e2mCaU8vLCNUySfVFoRxwE2JSZUxRbF6LLqjR8e5sAnPJVYicD",
  "key3": "4ugfMNeP8VSBKuidzrB7J94uvjkLbmBXTZ6cErPzk399irZcSebSUZnP5Y1BYRCp7a2jUyXuj497ck8MkGEohCoc",
  "key4": "8fpUedQYA25v1Zr8xFqtUmHUKYRd4E6ixRpnw4kANH4RLjsU7wMCUobteB2u2J6NyP37z4nvj6FUrEyayEyufMT",
  "key5": "TYhDLF9B5iS587XQrUi758efL3dBNC25NRRJ7Tr48noCzHYJ28eUB4rCcoMHTX61vZH9JR9Zw1sr1tYt6VxRvQ2",
  "key6": "DHnyJeuQZ24jmtaEkKhQpPWVufytwAokNGhELujT2r62FjnSPdKtpXkjXwdgBcsbKumUr8d7SozfkTMbANRYqgJ",
  "key7": "R1R8Gm4xcUh9m7kemXmXiHD7cfQ6apqMofdppaWfn12sjBnkEgG5eoc1Z8W4qZXfGghRoNnAv3yfz1rjwoZrrhk",
  "key8": "3c5egZ4DDbSxmhHv9qwyq6HTbX7hVQSn7pz65QsYQo2SxFdG3h8eThSmFVuZxeEdNyZKWLz2tT9Wx9cR71enZMxW",
  "key9": "456F4axDghZ4gALd8X9hK8mPDgw4TTYDXUR4oyukumWL9PDTqMkwSRrAga1nvBeKLWmYk7sX39Ct2MJqwUEhAfrJ",
  "key10": "2RsAdjSs4kJwqFcy4BcvyuzxscGP8MwvcEvakyMDm6iNp5pHdZxgScXwysWrnapnNKzMmX7Ax2QME2YPowrhsVxn",
  "key11": "2KRaAZBCiuY2BatJMfyvqs1DAaeraD7FMJHSPe6kkWM3kxaJJDUf8ESfBr8hxBXaAbNEm9RydPq9y3W79gABsduh",
  "key12": "3kSB6V7i4gYYhSCz8P4M9Qcmfvzr6v4fJZALhnEY2nVfQDNthJyPt43PgtDy4FPsCgrYkezaPkdcQ6ckzsT2px76",
  "key13": "2akwVMwfkwPvSUPAbHKTHnZDPgQxNzgpVsLKGZGTQU9Bf5X5csRF5Tizj3a8dqUyFqzUWwRKzv1HBYCiTtiUAVQc",
  "key14": "4UE1UXzyn8c8Y7UqQ7HUpw4FGpg6SsjeSMZN9zJfw6rFjHaKdzWEG4omYTqfAtqjee39KLL35nr8WB3xy4DUEahy",
  "key15": "3kW1yU3tCPy7a1zuBPvRteUrT2ZE1zQ9N7m1h4geDFByGn4n4bC16cQugMHYMqdkmchKBKqoMXwWM8DMCeRkqSHZ",
  "key16": "55Q3YRWudBLWWcondNrDyWJjLTmqF9cnySzTEDyjCTZ52HKDemfpbGSWzj2HSTtGnZ4a71YX2iE85tUmdkiiMM41",
  "key17": "22Zc63bezguAYJZanMJkXWDtWFPxPsP4s4rBb9E2KwCBuduDk6czycgKkAs8jUe74v2JAQioNbYzE2oMyHnBFavS",
  "key18": "H3Bmr2fJS3gmeEVR4xJSCkczeZBsh7NPzmeMvxC3vzZVpwFidm9UqSvowv8eZyKZH5Aqk7HaSNJUMmPKCNLK3VP",
  "key19": "4V624ZGQYGWkf5Ln9dqZGVrVqcnTcDU84FyzjLwcdNqRTjLKgYYWxYcw8EnRadNmebVKuMT4jtNZTqF5Z3zZH9MR",
  "key20": "4kKQ8auXJbKtHUjns77XsS1n619pMrtJUXufKbfNzS4ZH1fL8xq79WT15dQZfd7rd1QAHUeSFArJEU7sZwgEP3Av",
  "key21": "5g4zijd16NFnSFb9veCmDa2HNeJjUQsUSXizePqwAzTC2RdANwC79sYMqTiEZTRiF5BcSMHs26Rz27EXn1T7u8YV",
  "key22": "5efhk722JtmLKs2tLMsunj742kkwp7wfqMVCUwyHHQVftRcp6KFxKWXKm44REd7ZRMjdF8vsy2DktRhkpAyq7aKD",
  "key23": "2hkyGTBdLzQ7voReSsGUpTEg5DKSwgrY6nRsNwBXoKueQW8V3DNDFeoeEfRaCj7G55u1XpPDrHGfPxMhjytndizL",
  "key24": "ipXZN5AdMtorXRddnN1Ph4gHJyqQHph6y8S8DR11tFW8sfDDv7YyjEPxnA7LSUeNNVK65TYjRCePVRKB5DDPA9P",
  "key25": "3PYt5DRuNdz86SSFCYxMhfRuSUKypUUtMTXss6W139t8NB4Q9si4rBt2q9evEb6RPukTuYa5TFjMKmHuVT8XNsKZ",
  "key26": "2HYsR3pyBJDNBJjq7pLdYuVizqnqbUtrhHbfhW4nJa1kFd3jGXd6XEtJjwejTcThX4WSr1ZdSXpcpRB53afh9QUi",
  "key27": "3XbNSzeNbTxpKjt2RmVVrAfcXEck3j5sbH7apFbnNyPJnFGiQ1qfHMzcxWaRpB9GQKV6woXJE6BZiJL6NRBMWSCX",
  "key28": "4wTzBVpSYm4Cuoys5H5fMVeFGraViDP4hhf8GUiRqpjCTY1FFDUyoUFn77qQHCnpv7oAZvhxvbKLMqz5aLw4TSdK",
  "key29": "5ysL3uojAVZM6k6cRGJv4BtBhqRKLzh1aD39ewP13TWB1EbRQKTv7CodVYvmZBQyVdwKtSDFengN3fMwV1rgSFGT"
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
