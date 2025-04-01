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
    "3zgLtFDnhLZ7ceteZdjYrP2fntVWaK9hPdwCRWRRy8c1JXqEsnGXTHZR9Pzw81vZ5KK4M8QVafizhjtkkjsY8MBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Gjthhp1DAM3jxedojxay9xu7WbBw12K61awmFwUijJFR9xVV8fe2TN1w1ypNj4NMLv1QzLqpuaaU99tXSQH9ms",
  "key1": "65KVmn8QSJT15ph85p5dYoD3W8m8q4w7QZt61TNRVwkxnZAD5JXx6o65aH8GmgaPMwf2kUWf2UpQBoQp4MFxD2xm",
  "key2": "FgxBWHYq7NP1uL9mC5qE25UBD6RXPdAoCL6DTP37ySvE1W9RLPkKKrTLkhrYtcmZtFoyvzxEjJ1K8VMX8TeQz4X",
  "key3": "64YwWMaqB77N1kdoXedcgrbaFd71ugoTDCpNyJ1dhQZYpmdu65sjXxXB5qNk3Mf3KTschgVXSvy1jhBcXWjR7oVb",
  "key4": "qAxvqeoM3DmhQpLk8o9YqbfvhEqoky4TARkREY4G1oTY8r5oybdjkDE9qwzghTcZqX3fKqVyesPELdBZJXh6TRP",
  "key5": "2W41WxBAPMM1GUfofJJskHKgQmY3AFoeAYCvTeXNMWoBKRAWqJxoa9aegVYdZEBes1hYfgkrZDDsUfnKZ8gLsWqt",
  "key6": "3o5XK62thq9ep2uDUBzFPcwc76LxS2SWzSMGgjdSjNcJh39FQTYgX2A3QWRvN64zunjUZZZVaXJ7HTotb5zzajeP",
  "key7": "2gfUdMLq1aa54pMYvgcn6nJVRzAT6qcrJonQYR1gnkvaMxoUwksVgtt7HAbmWdiB8LzVwYJDx8KBisWZ9qVDwXNM",
  "key8": "P29Fg2PRUs4LZk7JEBkTApHMY515nXi9zWCeeMS6RxkEfXfDknosu81b6zQ6vqubKwzJba1rDgnFwU6H1tNAArq",
  "key9": "2yty8ha5Pgtyrgi63sDChXqnEaS7nc3NQivuwhTsM7M3jHoMp8aqfQDDxtMUHiZvkTgZdUE7Yf3jZGtVX91DHS7G",
  "key10": "3tomb42adEhiRBci5UVPPdMKe5dBFskiCKkdSHPmGscZGjX9DxxrPYfoekneStrk5it3uewiXMBEarSkJjxg5x1G",
  "key11": "4zwbxkwZuCLcpGYKsmTkWceV3rgGvnU6Lpr6UXnyHBmQmy158rCLTDseFzjDpNHdxrZCn6nACYUFhJSxmhmPYPYu",
  "key12": "2cCfwmKvKSHBr3bWw6LJah23ThZLisKizdbosJjHAqD2MDMtRDJ3fptNbuG7VkPtTUPmqsPM5VU5LvN4z7LQgP3a",
  "key13": "59j9N6x6TwxGMvtsaEqfEmpWjGJpDLRwvB47vMwKVqDqC6QH1mqL2oBY9CpVMbMVxV37PiVftMnMUjZhPhV5uCbd",
  "key14": "36NTyYHDqxPM9LytXEmJ25nnCB623qYmpkTYkrABbNCT4WEtGKpxto15QzYcGGKxbPNoG5EMFuxUNSkGGmABSCFC",
  "key15": "39TFNDWrX63aCR9DXiT359XvPXst1f3BaPuS3M75x7vZ5QV4Cmg8xKFvi4yCvpjCdJuZhqveTaMgyvAdb5dH35xG",
  "key16": "2s3saNdXL18Yv6pxETQMKTYeY2zrPzRCwQ6gVLRDZGNmKZTeXqHWbdauEwTKJs2aueZ1JUfvYPpTY2t8f6c6fcbE",
  "key17": "5CBmmGfhXtk4LWp9v2AUQD5YAo1VHkF34HTvmfkD8joGfrQeeXFPnwXuMEUKeKdbZpjCFbAB8pCw1ocvvToXS4RB",
  "key18": "3ESepvpNi8wsZWRKhkDwb7pZLYaHrcZEjsjJtQVVoW3cLr2PSiX2cH2EAqewpGMgtvSKdNtcAVoASxDLHpF2pvGA",
  "key19": "2UHP3yJS3mWcQD1rE3TFmoCK134n65DVxHqM2LfsDy3NE2wAv5VBVqS9oPhJNcHukSsqb48i6LB2kvhNgiMAKwef",
  "key20": "3WQoffN1NqCdVPwZWTq1bmhpzJxk8UPzQDDoS7JhFUvHkXyDB9Q6hLPvKV4vg9rehnWw5KXaMa4ohTsVYL9zAdp3",
  "key21": "2UxCLbudf7WKoZKvhEwrMVC8j6XqyjLa8H1HmwTU7fHDhZHHwmuPcigc3mbP4zZZhdLMtncHfUSSsSBB6Rin736D",
  "key22": "39e929zFvgK9KFpPKEA6qpUWXSuCAsZMyH9ozsAsK1fHM4s3nZLEaLtzYUPT2SRwPSTah1s63AK6TCnhvitASzTA",
  "key23": "UWMyNkMz66eodgqCyd8SwVPER8MyvvUuWa9WopReMX4hGRwPoysvK1yu7askH5mn26sw5huK1T3JnUc6Dvdp5DP",
  "key24": "5sFJjweNnGLawL8fHY96QecejtENdh5Lj8CUdLDooNriqF9QqGsFiXVVAVmgv3W8HDNeuvBQuppxXA8ZA88S6N6A"
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
