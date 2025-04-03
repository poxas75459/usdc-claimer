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
    "3piR7yCqv2o6TP74A2w8RrfBzckJTrfqzXR9zpefTa23TxfWYYWYyzwQvUFpVJebz4GAnvEJphjQCvNVTD4kpZmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcVe1e4aUbBX63hx6WfH7YPUGPMZnSXmrDJviqpbMDucb7JufGUMKxm3kBN6uMJDhiwgFhmjTpXxaezjGTm6Rf",
  "key1": "4J9GWRmWDwPWnufsFYP5UTxf1JHd5W6o5RX6zQebvSpBYbueT5p7NYjDB3nksRFku3GQuNjdRDZe67rHACNnmQMf",
  "key2": "S3yEy2qPL2ev7wJnFtVMxZKE6EJkbXK734qXzjyW4mokahnycavXXWXgnFTbNBopZcxpZtkCYUzwg21C8CLiAhf",
  "key3": "5e7GrgSHZWNAurYLAMuDUMUKddBsXF6AG7VXpG7DwN4D1CAfsGum1z1DD5fZcVkWVc1hYteJuTUGAAaviaBnB4SM",
  "key4": "4YRJTdKp5b6ASBhRdJLFsig6bgk2N2FV8bmu2xd1FYXfLRTqqo7mnRXKtSd78yaye3QTa5JEqK7yV2c2kP81jxUY",
  "key5": "33gKUVEZLrtuech1m6REMPM2YS2xA8KFiBJQ3KqyR7yqPmZRNromkRbdqrhr7WNRndE61VUuHhPhd8vobTGoNuDN",
  "key6": "7PE2JaXgyzSua6os2VZyYW1hB87zG7espG6Uk5wSHUgZzsXwCJYoDGJdpqBoGEa3DjmGbN5mLbUvAAn99zwaSse",
  "key7": "2ibcKMYUPnKhRJ4gAk3q7toCdDSJUtX1yFvKmL9bx9HjD2N4JzHYso6cvARxznjht61zYL6jxs8drgJayUy7Uj32",
  "key8": "rBy6oU1PCHsnP8J7i38Rbh8Wf24GFfRq6z58B27tTNPthk12Vfqu84g2hnhzbsJD6Y1CQJxAHvRxpSWZB3XHRPY",
  "key9": "4Ld7NnfiMrcFoBc4uaTbC4e8vnVfG2AToYsyrAy7Zj5h24nkGHwNQp3pWL5xhitR6rWoGUTdPvE2wVCuRgsyYfw4",
  "key10": "41pPxC2oxkNBUB77CyxTwyxdrREXRTifL8jj4xujahCv3ZGPfzoLHfNsGEDsThyTmwssAFZ6PiWkD8a1L2MZZehz",
  "key11": "5dhUs2MaHzv8RhjRrn6MEB6KeXZezuPYCSZagoQKCfAsmJ8kSkovjWHYXtHXx6oeEkTsUxXwGFiG8KY2pd8YQCeQ",
  "key12": "qbheEcKF7xrz3Jt5cgAm6VrMBvSyrXsrM2odvdjujh6bAsQEp6FShKwkHzB9bsVFfapiHgbjPX3QbgrdnESRMTr",
  "key13": "JLCNNZrboM45BMnqB3RBRgUisrPzyfoYNBcHVezDk2Qm54mrDY9mVX7r3oyiSAh4iPYA6uKCA59c7cqme19oxJK",
  "key14": "46cCrbvogriW6jVfJ8nEawRZjrL7Qs5B68UFxqQCiFCVmi57YrNWyQdceeHYUVtZs1qCcvkRj8MqekMNznz2BhA9",
  "key15": "2dtfeVQZGdh1sdSpTd4tfe67NXh4NMgJfg4tN8kEZqBA3RMADjVj9yp2hHJcfMkrxPV8nR6bgqhAgaS1arcKriDg",
  "key16": "2KtUkYXDF6tHonx9cBsNUQ95biH4ZpWpchFTNeYQzUv2J7DZNaPVPDMHEvtLAuKkSasQDrWbXjDSzvehGznZUqKB",
  "key17": "iWecPk3ZnTqk3wW93M2VZBGRF278LvXRhXjV2PFHowiqrm4orTVqrTpCn1q4WXYKAKpAd2JAdpah7kGrTehUAtn",
  "key18": "4LF2rZrHms3MZpmXdNXKSrzwPRi2pi39UKMKFBzMai5NmchNSbWNH21ydarPYg1zXveaD9zhTxwaaMCDgwMGZDMA",
  "key19": "4CiQp3o19daWNVvT6NxESxPFmoUdfAEMeyPLfYQV775B58WmZYKWM3EB3iLx6xExQWFk3vmMXqjz4RvTxzSNyzcZ",
  "key20": "ntpmeKMRYeR7v4jr24uu9HB3q1pQ1eEPHs2g4xc2yJVVbLXszY4noc8UCRqBdiYVtqaL1is3fY6mMpQdm8JtGzw",
  "key21": "4EKkFwGLjzzVfXBvTELJPa3vNqfTzv1Wbuj51XVo7m3jCiR1jK5ysyRJH7LSmiaQ2ZJZxsV9yZ4bDRBAvuMXfXoP",
  "key22": "45oVJtigZeMZcHHJAC1bqNnR5ygpwYmbNeFFKK11drFhEoYYHwrdYYQXnCcMd9eoQhHpz5EfuBsKg8tPsPf4duda",
  "key23": "5meTLX5bdftK6mBRzp2XcFTt7uM4Swto4EZ7w7whx4nKNoWw7JBEE6mzqo5V6LiJt5BbQLGXXie2YecPUbok71Jk",
  "key24": "4gknVMgeq8eU3smMrNQqARdgPM9L4gmNVkSc9PwRikKTq4iuUsT1mhdxNJE9HxYfFjjB2yQ6aeKNW54YtjVqsRey",
  "key25": "3uaBT39X9WsbGLb6waetcX8pcpP1hPNg12Ao8grYxNpBwpAsKjx3SGgHgG5jox9xWWRU8bijY7iaYaG1CPu3r3rh",
  "key26": "2Boaov3AjgavcZTEvQhk69UW7aijFKqZtaTK2zxSDh27NnUAtaeWprqUFQzkGc3voEpueGqF5pPneUDcx7droiE7",
  "key27": "2KamqAcJd5fJVwZLK9Rq6ePou1vC5k7sWghwyiqPkR6v1tzz9zBEAw7xH924x4LtYDAh9ReZB1TzM1cpHzDjSWhU",
  "key28": "3usHuXLMoXTqJF3EBgmAtKADXmZFedypMhJUF61Awu1N2PNpUD7cW11ZJfCA1r4h5wti7DtzeCBEQfi4f4rrVLNc"
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
