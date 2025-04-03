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
    "3rcBtSRdHAXv12Mxj3BzuwL6TThhMpKvD5A6d4B24uZWCQNQw1U8xw6y3K4XTodxYTumbU1y4rGckEKAGwDAdWbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKzHaqYbCbyoP9UYmV4jEw4cVkCZ5UM9XMChUMpC1x1hfnfqbo3ETbTMA8Uh4HdTzjUxwY43ANFFJFuaaVPS4Qo",
  "key1": "4XsQnC9DBd6VfaQWJLYxVPkGgReKGcBEd7FEitnbjSX4sw11BmW6m6nu4Hd9wJDd1AmG7SgdYFT2cb4XiKb6ue5V",
  "key2": "zAMg9gVf8ZnEr828RZuHEXt2GBPHk8GCfpvk6Kb1h4dN3EWg4FgEJutf4fmZA6SYDi9zX5vaDVW1VMPLy8VmwGX",
  "key3": "5tEkMdKUZufFgD8wNqDKfqHGsppoYWYyUpQfy2jBvt36DmgsWc7TKJ29uexvDySAsDt88ze2QEUf4pi4xzvB2roC",
  "key4": "5mTath5275ECkb614VnYgxg6vdM9dKRcudAviWhPNR8PNy4w946TcYhyRkMgSuaYPvhmi6ZtQfPyn6835aTh9AaV",
  "key5": "5LaVXUq8uNvM76R4o8maPfaF3bXdFq2JJY6e8rigJo5cCGq2ABPnKqUxvrvsd1VrDDRfcUf7MJi8LectVBVseSxG",
  "key6": "MrL1sKaHDLBkXRy7j1JTe1qZYEQf9wxhsGxsenki3La5FfnLGoobEfGfDo2EKfie2oh12mqL9mD52GsEBMmEaVU",
  "key7": "5p93DMk74mdP2UmDbcqTEXsuMASfawWhBMfEfdCQ9Fjkkm9RHdGHECiUBn2TzDUbq1p9pcE5KSEZ3ZPNyWm9V8BA",
  "key8": "pAhMXU8zLq3N2QG8Xe44eeXTvQ577skSwPcf9mcL7MEgzUYkyLoffca6QgE32v7dMoy6BwrbtYHyvtAVxK3SHav",
  "key9": "4iJDMZPEFJN37QYm25Hi5kPidQ6akiv32hR1J6h4SRv4o2PQ2bt41k8ECdoC42SJYRMGi8Rtr3G3B9pFVUPj8qWC",
  "key10": "2UfbxXigxLnLvbRq7y6SZzjXdeQxRhaMRcu3pJiL7X46C1fZFcfVPs8TGPyi34AJJCFMFFZghqDar3vcBbqJkKPs",
  "key11": "3dTYVFwHgETtfq9tyhXBWM1zFC9zr3FFWsyz8puWE27gNxL4kPe4HLjNFUP8Ax9bWCG8LopwaUt1DX7vRnfR9hDu",
  "key12": "eG7qpmVq9gz2BtcGeQh6dEDTjEFxeDP59XD2vxyGRgg7hkNRiDoKhM9nJ9frTTVxVhRT39kReTtjUXGop89fyoE",
  "key13": "2ZrgMQK5W1YXcabsUGCja44XN5NS6wNWuJCPQa4CUjgRxiZzR1sBkCvv89v3fWF7TYVvTmAGoQCDqZEkj7ozJ7ou",
  "key14": "2e8FSK74WTd3tuJeaaeoL62W6x5iRT2KMvU2Z4ezGYpCV1wJQXUk8hxGE66msiAnXvvrFZWvSbX4fgc8uiwZuoLw",
  "key15": "jjpzohmDFKXLbKpku8XAzGytNm3z8CH98uYxY7Vix3pZC4s4jHbZ8HJ4CGuyZQjjEjxvpsKVvPuDh5K4rHTBB3v",
  "key16": "26xqVipv6ftrYpnMrg5Zg9bNsrM9E9ZLcNE5PgTSwHMhw6BYCoJZFS724RSz6bAju3mQSK3KD7thMeupGJrU3UAS",
  "key17": "5tdKqRChZpfcaNYDWhELV1p1MZnDBejvDzSnGFakUS28TVcjuMJHJmEcRYRqbam1GkAhsjRf5754o6JdHVvLFB5i",
  "key18": "5h4AcEuBsg1kPmVUosFb6mV1891Bt9Y8cdPhV8ysXw7iv3Qa5Wm1XdCTbEVdHeKALHEA92ZoWraseoHwU6oKtKFu",
  "key19": "5aqu7WBzjduZWgugHrT1vZsVrtRCSQAZcBTDwbMBALuGN7G44f1HS7AvEkRKDJvqKSC1HNXksqtvB7LCBrAMbhSw",
  "key20": "4UdKjMpuY6WHETqkF1wwXoTx8usspsF8LBdJjGrr2azUcM8oKvjfPHb2mQUMVgcpWWRPUTprShA8aQfPk4k2kePU",
  "key21": "24ctD5sprNN7TvyzaHxdAKKJdYaea89fCcJybceV1ejAiRuWmbxAyGug96gHqMbtNzAFVJfzWAzUaamkFz4ossnR",
  "key22": "3kao5mWVk1q1jCN54XCAS66T4koGXCo7Sq9xFh9e9YtLQmz9PhAXs9CezPLLjBq2HPqtLqabjMBDiFHS3JpTiQX7",
  "key23": "2ZYrNWJ3qcenxMXuGj48vEtRxv7nSfz1qM3MhAib1pnf8R7cxigqpLfgaVM8tMRJ1h35NXCF722vZFEfUaYiQCBQ",
  "key24": "2YebDBsiV5Q4EEkgVSvVTvzsVBmffo1NhXcrcZohBVeCKCT88H3eBQ9M3ceNZFJBSNpzTRKUUoNWdk3u6xPYbzYJ",
  "key25": "5JAt2C92xnhPoafbKnvuXS82u2JL3TMs6dahoTya3iaUR1zGHmbSVvecYE2mBySYPnWeyHh5puJcJkuGNpz8C2PG",
  "key26": "F8DjTXEkS3jek7pLJqxnFSf8CzgtH6kdNcR9WHxBRY7J9jC3pfHC8Us3YqmLedSmkireFsTNF3mDCdDKtvjHnpZ",
  "key27": "2f1B5q4ACcAe1P4aHPPcaDs8HaW6ZSVjBknNdxU1PKgM5RtTgtJq6R4HX8MHHBt4pULxUkw6wy4MwyokNoVL2y4h",
  "key28": "3tEbcicdtLReoinBxCXAWfucMJB1UP9o8T194pAA3uyKoiHGsx2DDS8yVz7uJwdyPp2Swktr5VEGRvj5Tx3uu1HF"
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
