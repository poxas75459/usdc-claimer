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
    "3YgAWetm17avT912N4rVrHoNvhxfyksLvui84atiJc6JigLBraJVcmCdghmmnSCekU8WyAkqYnywVDqLnW9cu1Et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vB1JMYdUvXqDNNfGnrX6uaNYb4zeQPTgbERSDjNxEnSUvg2AJf1qTmRhiquA96mhrAmRkeoQaZMLdJECpRhUFKW",
  "key1": "3mQPSHqducgn5YSFw4wsLSgaisW2tq3anJCnWfjgjoYv38ziM5HZrUBUF2mNBssh25Ebe4pyuEdD8Se3dpUZEsJx",
  "key2": "2amX7Ya2akBvjLtYN3n7YCvoty8WsSPNfhWthbwxN1HrtQzzXaKNMWs7DzehUpriXaGJJvB1ir6cMwTNzbN5kVfv",
  "key3": "36TpkGxcm6NcbWSYgyCwr2eMgenqrcgn1myiAoKoXfMDDMxJP9sN7Met2e4Ksk1YdBboJzEtEdZJJ1pRDrBckjEf",
  "key4": "41jyRrNjQh8sw9NkmnEeYSLzMmiDhQaBqhJvsJemQfnvz9msvMWx1tQ2EDFiJ9kc8jxghdgYjVTQqMBhNrVbqVQZ",
  "key5": "4W7PbPSyGRrkfVXYxGAn1M75ncrafg9gawNxaWEKT6tDppXHAybNoNgJrezmEsKNxgncHgp7kDpVfE3NbBYRSFFc",
  "key6": "339CxpGZmjatxbExTpezuhB1h1BzeEBR8Jc8XpYkwaBMx6y1Uta6xbpDBciBDRavHuxuswo8pdJvFAwG7hHXa9Tn",
  "key7": "2TMCqbEHMYum8bA8EijjghrpWTeVnT6aD4VG2e6rUosuRonEGsyyFCZyzmAF48NfW7WuyK3Kv1M2MkTw2RWrYeXf",
  "key8": "49qrpBbVoiH7mFmCCe1t4g5zHuLn6UPiL9fYfKbmoJowmi8xSi5JCq1goW6zYFpD8krM9DGxxyHy2VERPbSCsyHb",
  "key9": "mnYV92uY444w4siVqX3RZ3QNuaTFTxMUyFwDaJ3JK2UVN4xy1a7Ghbjmfov9U6zRapCZrHRCvys9SqFKAqBtvF1",
  "key10": "2Atazcmn35yVnaopfMzJKkEgj11i8cmAkSvLy6uy1TE2mr7z68buWbXFZuEv982zHhLZDp6rmWdvE6Uqrypo6iAt",
  "key11": "qBARfWjQZa5woPX5RHqeFj9DeARfdmGdzpWzGmKPnrWdJ4thtfV5ftPtYNz2dPR3Ls8TPZ9UBqfvysSf8zohSU1",
  "key12": "1Qf1sWKe61SAVmqGjmcqjwX9yvXfadzi1FStD2LLND1MjUfphN4TkVWkYm4SFnf3f5sAnvpQRyyqPVPQdForwBf",
  "key13": "FhqsF3j1kLUoHVdkVxgLfzZRZ267XLSRgYR1DvJTu5LgAfmpc7SbNGEdqSStm2dTfzZqE4k8vAbZCsUUcemFBWN",
  "key14": "3g2bef3WKwfFL1quNCkZtkw7uuML1tQnPQfS9stGr3SbYWX9ui2V6sCGvKn8VPHBpTRSYYMvPjhES7mfYg9dptdr",
  "key15": "QcYqJvTyqaPAM9nuxLHzPP25GMKTwdyLZKqnRefofXRJ5435TUswWAKqSSjFf9uKtUGXPkYf28gtLzzN9YWRWqW",
  "key16": "3ZZ5vExTyJH6YQ11g6Sd55ScR4K6mJ3viYxqw1YguVJXAbpfVXpvLVjxYdSXQ8nRKQtmMDD4RJoiZnnWxno9NnPm",
  "key17": "27y8gKnvBk6b3S2q1coKtoDQVFZQQdPqLD62hsUAfofUtDZHNw7N3MvKCZgn5xuaFnwDnUpZq2bM9TtrH2c3nmZW",
  "key18": "kempxgnw39bvmeGcU1t7Rc7iSEyw79YcWnjthAhB7o245MK1PfCAYK76nrXiAS9cb7KqWEeVre79LpEHT7tDbb7",
  "key19": "2qge7XbhkiVYtcr5awZtcFzYw2NscroHzSvsprjxhZqiGGYzA7cNcHwiqqsj1xffftwcAKgjbo5CfAM1bFRXJ2dj",
  "key20": "PZ6xbW9wqbWM1o25Ee6aexvSAc3oBKqhrF1ZhDKagQDBg7v1UifpuykQ2PBV9cx2NSLBwPQ3PkLhTF2nfvZS36Z",
  "key21": "TA2RX9nnxoeaZnvZRL3fj6trdZu4zcBCAReTxNyFHRConHcAExYe8k3NsdhKxmZR45cUn5Skpunv2GzD5v9uzSp",
  "key22": "b6PDakTWdwaoVpwoKLcQ5xUne68rGM9UEJg55RACKQYSh6UuTWBv6M7hZpfuQQvhdTBYpJS5UVgxcr8KJ9ZAWfG",
  "key23": "GPgHJLsTxJdL41ANh5SrEyBju9yhs3AaRp16Y7XEx6HX465RXd9oP3z1HAv3mRK57oCKNNMC2dBGmfXEUDMEaiz",
  "key24": "44SmSaC3k4oHq7XjG94ELkBzk684DtvtKPGoitgb97cRUw7dhjXsw4qzse2mYCxhTciFyNLGShT8kXth7B4MbB4d",
  "key25": "8RmcYQHkD5JGk4Sy7LAsyvSZ7WSJkLq37zdBss5ENYTpPBiQdcw4bQDAWQm77Mh1irD8gduYvxXKQwyzL4XNdBj",
  "key26": "5ioxmAcLPRmSxErcWbq3xLZ2i5wxosjnpBMGxunVmy9GMV3giKyncXh34mkXPNyybTaJtynrzL77VrQTZAYyLGhd",
  "key27": "4hFxGQNRGhVeDgCuSAKbkvbjQUxpmGYTqCsuZqSHyc4ezAFfrM4j5DmR7j2xzRhiJXq6Zqe2Fk5hbFa8BUiEhE7b",
  "key28": "2TYaTRnK37xjcyKQJde8jMs11r5yHbtBgH4yS6orbETo2vYeVSmWMyukyDpon7MaFPXqcqTrpvdnRGEyzgPkm1S3"
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
