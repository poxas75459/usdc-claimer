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
    "62w5YvYQn1f5Wmun1hmWCfVVAMpjPK74FANEhTiRS4ygLEfMsoyzLpRcT4zH7Ay6ydjmU4AEKzgVrBXJm7yeS1n9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BY4bww1EH6Szp9RRHdvZAt7V9TETK7MbDxND9bNZbgsW8J69TgYZoPaTEwyBhUwV76SgArZtgQsXP34iHBfABSS",
  "key1": "2J9eGmkQ6M9wQT3ZwRtc2GrUojwGQhivVUxNLenCYdNQx9N3uKZCLsquqd2GV6xbNTcfF5K4mVpuxb6NWiRC1CbG",
  "key2": "29WnkumFiRxwDPdTmVtarUnLd3ZYoYpXUZRXxejDaDqWM2NMafZv3wLU26qDFzNHGuU5AmWeVN9GrpmiEcL4HkJy",
  "key3": "4ZDfXd7daExNWQeQZhzSRPBnuynMQpFuYqhhW4h8NwuUCKQLT8s12mfKuPtNPwLpnPSYKfneNjbKu5cLRnbW13J3",
  "key4": "4rhr8Po4EZ8yqGm7pHPn6aghcZBmYUbFYYZbLaCBhCbURQqgSLAN3sJUwUE1Yktsv6VhaxxDUXMEthZ9u4PkXCbP",
  "key5": "3auJnD8iT9VjxRyw1ugeMjiUvvxzWaiy5jKuQEpBL5ZF8iGS7rX6wny7jw6qpzTgofZPvn4uoB2JvwwUDn15358w",
  "key6": "2Cgt8TAh8PgWM84p5wD7kkpFL6g1KrrT6jxnuJ5UgJnDQgTTgmZbhsw21fb4FQbP8pAsQxSLUMSLXCyzJdbHDfRF",
  "key7": "abSFaxfPiryEmVP8dvWR8ws5jUBbTQgKDkMKnoYTHNDQdB9zHdSdNVBo2NmbkrKwwc32X7vDosQR8sM3qfk6BtF",
  "key8": "3Ms8tD228gMCNpevTWSKrX7WY5vusP7TNPpJLJSgcDUETvyPxg6UQixcdD7b9yzFdGMVVe9bCjgeY6LWh1NxwDJV",
  "key9": "FjC9VeygmYg7dzJEQrPoLQcMCADNRLb65VM1YQmHx5JW2XXWi7Gf1HQNXXSFYtTcNL8xYNQLcQmhTvt69T8ucpp",
  "key10": "2974qa9dR94zXUP8zaFnLfp88DyAxkkb66StUZ2MLPCNsXmypwvb9wdwXrGEA8CNUoKpY59HKB3RidAayHhefGvp",
  "key11": "RzBm6EA4W8E5gTZ4ZdjXzSfdhyWkJXBHFRqJHG87daGgas7p5CckXPhYNbgW3ZNXHZBDk8yN2tKVdvHxcZmXJ2x",
  "key12": "21gPoXALNVbzMCh377ghRoUebjrKxhXxKZYot9Ej6Z6zzGoccJcKDJjNWNP8taUudJs7zmDnVdmMna5ZY2DUEZPz",
  "key13": "265KoU6SuhFmFkf3RsmfEBCzoEF6s4YyKvgMVqVy6PeYHw7CTuYbRuw8PoTy5EkTXx3EWQufii5DcWkQBqjRAnD4",
  "key14": "8fZVMiXNiKTN3QEQnKWuqRRmNHbMnVnjhWEDMhCXNRAoYETNezsJyZU813GDYSRvKxubLU52XGFHHfNyhqp52Qi",
  "key15": "4J5oqKchr3VmphTgGJNAy4xNE9AZAKDV5wywrDCHkyZGU5aJ3NwLivdNbzPuTTXP5dWao6Mm89Dm3XYoLnd77NFk",
  "key16": "2FpsjySY3NJzvdsT2z8ngy6ZeXFNMrpcAcC4fPcKaSTa4UGaUhELD1akKZpEKU8N3UhfkMTuXBEiSooeqqorgSWA",
  "key17": "3CSkBUQrMYqKqWY3v9iqNmqacJnbSxfRsESNf4uh9K7cwhdSFgWZNCQQesH2mNpN91F4i13wndvxfY3LKw5PWkT8",
  "key18": "5VtTxobapLgCLv7T15opAGL6T9LoVFSzNTvoZGjPg7yv2MernsPwFZg9gahxRupCcfF1ZmQuo9fF9xcaCHY1NQGj",
  "key19": "2maCp2SMptrdE9yp1b4zGu9oBkiDZux4La9Jeesw8Vh3SNw6HvZRHDkMHY1K5kNH1tVYuYQiLy9bqtzuPb9R1bU3",
  "key20": "3a2VQZjgg7xbexR1hYeCykRwPjpkeHEsP2dXDiK86T2UGwTMcrNDfm1Umn2AS1MVq4PHY8uw8RLeL1AKYafrXVd7",
  "key21": "2QW6fW4LkAhv8cgB9jRNpcXwi1LaCbyzJ2u9TVX2rCtDwX5nVDtRJ7SZS199eQ3712Vqzm62zTV3SFkugLiTPGD2",
  "key22": "4s2DQbUMskBKPuLhTS6jqrsia4nYiXykEHh4Ljh2dWtv8F4DZF7LXYrsvJWuDaofU81SjnpfPYNqD25pzcQZ1HsC",
  "key23": "55BzDh8ophq85ptWC4wbRkKe6LnaZeenW2EAqcduT1wdVnkCDMseFW5LQ2YHpGNY5jQnn51j2eGMLd2G3XzAeuaE",
  "key24": "bjW9ceTMBorU5Lp6XuvL4sMVmgy6DBSK7peSx6oWxeqoTiNgspj4WhmE9NiKFfmR2UJ2Ut4P7mxQif2dA9YtTvY",
  "key25": "55GuVXfoQhtLUZR39S81cMYPC2e1mkxWFZpAEPAGfdHnZWnKZAPv3qu98zRh3GL3M6cGmsQbZxv1XdMSnQs2zPa5",
  "key26": "3nu9PdxAPSxxUKwm8HTCATVRKzsHqQ9b7Ubego8QxsvXu7UjJm5mGckbhCcqRwyLmbANvdPTezJ3BLWUY5w1jy5g",
  "key27": "4pzJjqfiJF8sqqMDP2yfcKnzcRhyc26yTzmU1HCazTacEXJmrxyBYRz3XTJ2uD6nVHc1eC4V4uEYjwQZKrC873MX",
  "key28": "5KFU7rF6guFUB7B9WTrnK8NyveFm4Dyrv8JzTSRsj82VnPRgvZC7Tkq1pDLZdrhyKct32hGmKTnGHj3JCja9Xx2c",
  "key29": "4aWf8yZuV36vHuEQeGc2UNBdbwUFZN7xR2vKvZvgjPcz5mZ8vAn1MypjxFW7PqWMPmj4po8NVuPzptp4HhD9nS3k",
  "key30": "5UnKTn12BnPjbXjgUGmYpuSEdnJybo8QFZwcSfXJkprCeubhb36GYSnA6tAJi527CfirASNsXTSMjDK73CPaoaFH",
  "key31": "y5LXVhLBCjSsih9e8z524g8LizNfV1UTKPDNRF35GqqbBwmyhGiKZucukGbxnzPxUdvUMiegSiq7PsXVQBXvYDU"
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
