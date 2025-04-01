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
    "2e8tJGErQ3SkuMYYPNa2niy1SQQFbCrC9ac9cSsQv3DaLzLPQHbGeukXjuJfA775mQn72rcp8GXaCZVywFd4UM3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNqSHae4tjAgZJc7SSjT2gKr4eygB6yzCqsd2BtKf67Kk1ZU3XWsu6yE6Wc34YrqymSkWZSjiRaMvakfDjEhm3u",
  "key1": "4KkeHEvamRWd7e364bAyzYHqDHQNVAQC8humaENGWXKh1boFC8BQsm3gho6A8bi8sZoB7XTWtsqtuy5ZmLFd99Uz",
  "key2": "2hreexEPhPPP83SGcGPjkzK7vdkcVTZPFvDp9WUSyLTJ6gqoX2Doz8tXwH456y34MCmGZ2jETt8itwjkySaxDmAP",
  "key3": "fEP6Z2LCMbRBQTrsPJAgjczwxiTkYCUJnTL5SPfui9ScHKjrUJewPupjcCXiYy7W8B3c4U8EttSH7Gn4ZtjKXgx",
  "key4": "2KkanCWj46qxeW3Y6NRpM3oBvkRgx27Gk7AjsxGa6zgYNEnegqtspjYXYJADzQYNL965omhi8WA3DMWnectB8ngr",
  "key5": "2N2fBM5J6Rn6mHPkFd1U3i6ZB26EuTydqoFnx13YNZj4BMNrUZHaDuaZ8LadrqyhjK5qsNZKbkvsMCL35Srr64Ly",
  "key6": "y65EEvk1rjgEccUdgiWQ1p3cY7bFFCxtB82XChvnscaNJWkUQ5LSL99mqJb8r62oM3qssAbD6JpNQBLQNbLFnoY",
  "key7": "51k42ebXxYUCcMcRY8A3fCxbWds4WbpFyPnfYU9z4LMUWCAyDNTr5SKjyqJwjQXE3XZBkwfpQsr46LM3zKFVsUHG",
  "key8": "SGFxgpgxsyzXREQTtHXKMncMzob9qWKxdgLitnjf8FgEZ87DHw35cSUNm17MTaJQne1aiCduZwxtTvSNxWJ1SX4",
  "key9": "4tfgkpiXQJagbZry1ze2sGanDtWvKTgGcfQ7EH7kH4tobXq3zLAZrQD3HBgGFJDBMLpz2kUcnn7ZHiCoFxn4hNkv",
  "key10": "MVgLxefBGou3ChuNFvDkZEkfq1uSmCNdeh6b2eJwCfdxFECBftJdjvvPKZYcyPTJzBemdkQzwjngNc2JuEqxcUS",
  "key11": "5UBXoKpk9fGpNJJgoevstGzbqW7qFANDhcCHWJrXKWwCc1uoUHjhu8UxJZWTyf2qhX8HzhtXEbxooYLmw3EQwCTt",
  "key12": "3GQgst9rHeDReC4Q382hqGoZ5Nc6u6jxWD7dmWB9e3BCFQPWEjmp65yfwRemcZNGxYx8ssqs2pAdf1AUKoYE9PLY",
  "key13": "2wDXhPHn8HZENEpipUpLALeirKug3tQN31NXFu7Vdo1WMgz86EjMd196ZR7y7CdUbQnAvYUJzVd36wwuhuJYqcb9",
  "key14": "52E4roqnTHkgVXwFWAQhu6xy2zF9W8HNvwCHu11yZyuJN379MMducGfEQczRYSJdLNoUGvY36A3gToT3MprTNKBz",
  "key15": "38qkfihWugor3wb3Q8YHViSmAQhLHscPvqSHUhY1z3dk2fmvmNmTDsAkyg2m7TNakQihj9vi6zZKV9YDJsmKTuS8",
  "key16": "4EpWeAcx84cbVS6mM5vu6NCepZWQs7TEioj2WoVasqqWnWbrcdJHqFGQNosxL5mY6KPur6gLcpFcWA3NykjYYBsp",
  "key17": "4N5uM3b9peSDEHtx87tSTu7r7N4nvYuCbHQigSxZpAXpEjwzxVByekC1YKrgWaLa5tEqkWroFGSkhqU2SFL6cuEF",
  "key18": "3rdE9SPVYjfUWpmHPTKZmdHv8itSR6Pru9Ahfx8D8p7UGQw3BKco3Y7mjpJxUqFKAne3VYueVm5MiZ6y8vRjjfEv",
  "key19": "5EDuvRKGSVz96WaMA6A1FyunH98AJ1aqT4wZZEAj2AVZYt4v7HBH7HW7mp3RUQCyBmo64gP46hvXUEtCaR3CWmJg",
  "key20": "Tc283zRBmqGv4dgyBi6P9fqpXYbecQ3H2uheV5qJib6HUQmbQ17ni3ZKa2Fp8cbHxCyVMBDEFe5N4q913ai5QsP",
  "key21": "9qAyGJXHLHb5WuSoUErXqD3zYXax3BuFk9oKxRr7nLpP7XriCEC8vE1CXMvBg7fiRYQQp5YJu6Y64hrFjYEaQcm",
  "key22": "3mxKTPYuQi8uK3uDEieHGqzPjUxcTRpYeFiw3NYzg2bDRhHGKSid8YHTzStacYSx3xLTi6csutn2gVatWh1ZygaM",
  "key23": "2bwa6vk4ppbiUL5398KJJ7F84933UzNZKr3XmimvZXFWLNEHt5GNfrCD1nYzmC9VNkAVCwWpXGLJ2xZh22k3tZQA",
  "key24": "6Ume8hH9WSH3NeRA48QvBpuHJP459RvccCoSxheQsBByqFRVc7a6q41wTkEGEi3rukZnnGRZZXed2DRn3o9yUz7",
  "key25": "5MQPgBkHoCXtpwhrKAwHCNy5LA4gohp3JvVip8xzn3EUQqX165BNKCWrf13jFPyg7PpxkCvX5jzBYuyhcSeFhcuc",
  "key26": "5jKFtMV5NXh7A4fTGxCBytPeUpbVB5z3UR8ie5sYayRxfA45XXRGmopDBZqGsLVAgaqbFTTHPPzC7TW5YoowAoAP",
  "key27": "9vQqRfcCRisX8ChDkwHyzUrzjuaJsneA1EeSV4W1M8U2gWfJWhNTJ1dqfFcDTHfyAMP89QasKzfT9ZjMVT8kxcm",
  "key28": "54VoU1CPrp4gw5ueV3UEUHHQd22zRZ2ZUD2ffGy3ngWpymL9tHM37eV112GAiouQG6J4BZKdpugiBFwe5q9jaAFw",
  "key29": "piDvcKkhWUCyetsKXYrWsXy4twuZkp9ebndMECbCuxWmZaCpaHBXWCFUEFc2tL5HSxpJNXUhR3fmmqjgVKcsrgQ",
  "key30": "222nDxtewyTR72q8mZtndyhs7K57wDTWeX2oNZCjLxpcGvxc37f34UNTVP3SpYnt5wuU19E3K8ssqVoyCHvgwnHP"
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
