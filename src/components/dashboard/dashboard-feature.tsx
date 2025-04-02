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
    "4s81wgnDstDaGNLpwbJEFcL5pZJ8kea6LnY6WzwMo1b4WsVUjNzsL36a69XzK7yKbc4XXQLAtdUq34ng9ETrEo4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XN8GTrNtFaD37ZwGeH92e7y8qcDwuFUaByFFtsJHRjortzhdqbDgCxaN8iUVtvbV3xPV6hGqyNet8BNGFcBAcBN",
  "key1": "3jAtTqAqBKsT33zwX28ched3tK1VhhjeMSRHTEL6GNRY3XUuh3o5FSk5nr6GD42tVQ5UaaBuWy5Wau9gRJiciv9Z",
  "key2": "45eZkdesDfhc3n5xCNhWWKkEz4GyhQhckxxQxWGW8ix7JP1GYageUXSmJeMu1covMm2LyNTQKke4scFErjxkjkNo",
  "key3": "4QqZHQMmMH8Q8R5Jv9VPqmDg4ctGt556rvtV9Sew6uZsHQe5eVYnyJcWbhZHRwXAAMN7B872htbPUuatBrhcWLFN",
  "key4": "edGPnKomfdhwMjA7t6ShFAHvnifLTYnq3Lqk7shmTZEThx9eWirLX7cGgnqywV6b9kKuyyoY6zTGgrsFGw2iMru",
  "key5": "62FXFFkcn5eiVMG2u1Psfwf9Mye1oUsSDDgR3BCyRUmac9nyXtg59kdszQG22A432jqS9HtXxMF9MjXEYUyW9Kzg",
  "key6": "w6oDDCBMFFa4c6yR34RfgYdfe7Ck5qENywSWQn8N6wjHMNmkpXMxFLQTPwnnZEmMsdyM1mHUsTRw2r4dvJ3DLgM",
  "key7": "4SsD7Zkk9j9uJKvAEf3566cx3aTDZCAEMqrbeWgFszJxzHno7Yjs4mDt9FeEvff4i2VjxvgEmEjDiBsz2cXsqipo",
  "key8": "2rcX2N9iGH9oahdCyr2wjcV2KKHSo9whMpxj6MdS6yGNdqh7zSsAZjyN7dWdYKeZMwTdmGPQ4XzwK88JijEsyo1d",
  "key9": "5VrxoWoC6LHHgfQ7hKCCAVePNDdd7BBFRrYWkoTzJo5FXmgAZejvZ7dLg4Uo6SiftS1KNuy71fWpTHH7DUqqr9mf",
  "key10": "5jzy8fv17eFXKDtKvR69Xvj57wEMNTzTxPwGsLhcJkDYnHXNQWprMMz9yJQ3CJ1op3zWyUcDBh6xsWPCDHgdSUCa",
  "key11": "2yn7yDsrgfjBuUXR1QNRQckKE4Zop9ccWa9zeSs7ZzAN4ynx1HXEXZzB2DuvPF5hKCpoAJThTj5MsBj5EdhxqpXB",
  "key12": "4TAnzTvHPH7S3u88SWe5mLBAN55GVXrpVoJqqvCzmSnUPie2W7cAQCYRjKXem1HaRYdHA6kzHGwU9ncW1kKGer5L",
  "key13": "3Qca5Z6JPgVpfSVhSPE9tHbmQ5qnYB1ZcDFp7XG7eiPd8nFCSY8TrBhAfeSupsvD2XfSVVGzrb8pg1BusV22YBm6",
  "key14": "66R1z4EbvtvSZwHes9nyMS1MbrgknNQSzub3Dcy7VfhwG1cLrLi2F6WKUVercscE5FDCNHcQk9Ga4e6D3b55G1hH",
  "key15": "4AbvWZW6php2SMb5Pn17af16Xs543NFW3edkypxmWCKtnQYi47pL4b1tFfrrFJE2Pg1GraJpPi1NUwkH1iPDthzj",
  "key16": "2EVcMTtmNGpQgBkvQVqfozNRtePLLFrvXVoaVztSkMTTZapNZYgvfrf8KixV48ft8KmvULV3y69yQ3vRNMe59Hms",
  "key17": "5CJnUHE4D4L5vr3dbRCWg72SCAswBMGF9bqXm1P1YofwnQBnWQbehkUmaiFx6HhzVjsvwtjgYtz8kywhne1SoCq8",
  "key18": "sAk1FWWbGVbfhR1RjQNPm9C1ZCzUK4egXuobxXyBke2oxwofHgNEKtd4sv7Hr6Y8EigdpYpu3XFaqBwhPftaEW1",
  "key19": "5SDcpBpY7tUWzkVGAJPxQgN4oUuvxcETmGGZZAJesFWXPcLfw9jTFZVH8GfWnUugb2gTDKtZhjoG4N8NjMz63BPQ",
  "key20": "5fRz1ZXSa9EipreZRmagCdztT6ry37ZrAUkyioVSHBVEUwhUGrPrMzhQVopeMoMtaMb2ECG8CjwhFjsxkzN8ydBx",
  "key21": "LSzwLjzYqM3sU9h95eyM4hYYf23i4TtEyMYiwcGH7dnNbidopcGGC2FpPBGvkoj7kYuU7tPuPj5kzegEqYxHkYz",
  "key22": "4ktYcDVMBNnYqtbtMqUKrcVNGFFxz5tR7pLJAdZk1UNgejxw1UDquAMQquhvEaJ2JbKwdcURraHXtAz41z466LS9",
  "key23": "WA8LB1gHLZPQLkTcQuuyBqPFe4t7DBz8cy9FipB3zX1umfACecvVgpNBXQGJHX2LobfB8Zb1icEEMBdxwLML9MJ",
  "key24": "3r9xyN5PWbFxb3ACYj7jxFVizsni5KiiCq1RmanWbEHUxXcDFzNbXWZKNFLfo8ZHMXs6m1fRfMcS8djGxcoWRPFC",
  "key25": "VvXZjEnsjcmH1oDve6dwFtXvdfCxrvGjxeTr2SRWUdBoRHJVrMbbrXWuioFUD74zZzjvoF9mJLgFJiRW3fQaVTf",
  "key26": "356pM7DFyPanLTLKcp3iUDwPhNAgUpUJSddxwktPGEdEJogtb1p5mccFqgHnNnbbrBX9ZVvsYwNpiGvEudjQ2oLr",
  "key27": "R9cf3WFkZHRTdAXWTNGeEiv1Vy1awvRWfrV2D4Tbb1Me2UeW5eXPhW2BW7MPQg8nptpuiL4i2Mm9D1bQiPVMYFA",
  "key28": "5KSJQ7miBL8hBPHrNMhqDpAgGoA7hzpPgL8kNhNRsLbjKzUqrMopF9jbpKTka4PPpRG354Vc1eYH5DcNSMHM4VSi",
  "key29": "45vQunAPU4AAjmHwczsQsVvFKfQfkwJX6xzXZ6JjSZ6vAZu8nNzEUVVXiCRXu2V9bqsqCNeTymMsZ5timyagi2rB",
  "key30": "2VT4o17nrWL85F4aJUQz7NBtc3WuzwqbHeoFn9wre1BShQ6fEGjNzAm6HeMPNVjeyG7iaj4nLeo3ptF8KbhXgvvn"
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
