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
    "5eEzvCHdfApe6R3yJdGqc3SvRRvJhGHZu4vPdYPKTKdcNDPn8n6KKWfbDMGs2gs3bpi2Kiiyx49qCEYzSPsUCmNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpwswrW9VypMrf5PT64zk98igApGWiBoFjQUqvxjifEgasU54LMy1f1BAURc16MwwBPVWtpWw3iB5v291xxvQfg",
  "key1": "3wrc5jK7Y4GPcE4MG1kkjqpj7NM3zTcQDQvbkxQ5RjtnSts8pTgSLsts8cKSiYQZZqfpBZq53gUMwa2vAgQHNixS",
  "key2": "4hbXv2JFR5TgLsaviDBT7HJLCDs8fBo1EZt9V7ZtRP7udLfkdxcjyJVHnyo7n2bKQ4DiEZFsACQFhnPpBshYHXvP",
  "key3": "5jLM7SMUVWAfaLFiW1uQaz7WEWjCnhY5MpmmwSwUeR5mQDmcVLUbL8Qmpdd5WF5SSDqbSRVJW2LJ8YhRBXJ1dS6p",
  "key4": "5dvHMAbU3TzPsedHQt59nWjT9U3wwqYjS8ez7nQpnPY4hVHFsoiq2ndQRVYGvUmBrpp4vjcMQFfyGGacxq5t18mr",
  "key5": "2YxFAycm3N7PDUmmF8Lb5xeWqCKtsu6WoEaVjHHde7b3PTVLqwZgfCuS4stKvU6DNjKu7ps6LkHGbwexcH4HNiqx",
  "key6": "5Le26qvVSmhKc5E3g2mdmJgfDyLfzEqzQ3zie5cEBGMmzt4ork9PdsWHnV5VeYP3zKytiP32wdjzoYc58qJ6Agoq",
  "key7": "5XWgjerh5g4Rj7i1ZNR11xT5ij7nncsb8CwYXLFS11mG5sGa5wfcjewkLb99vEJM2y3N4xdeXinn2yWHw8YCds2K",
  "key8": "24tzFm3MRJ1azszh5CjxsBuMXj3zMrH5LhupAAPBRhp3EZ3WEBdRtwpZqUiS896rX1pShDWRPxdyCBYuzdtZ9HCc",
  "key9": "2JxGhUcZFrEDDvUj8ELPupES1gCkRvoru6LWQk6dnbPGmkUQn44HvKxrgxWX4bCwCsH5BAsbW7C1LeqFB9vELEjQ",
  "key10": "4pBJvPt1pNXTeL3yfX1WNaQKq19C9V8hovRAAqvSkatNxkmmL6PRp8Np9m3jt8g7WXzs7XYRwqMSTuzfAhi5DBQn",
  "key11": "2KszMy4igkvnzPTDJJw2CRa9iEt6D2Lh6eg568qPzVwe7SHfs9ufmpH5izESmyzdrnfB6HWRxWjVdwp217LLfcGE",
  "key12": "JhRTVqujGAFt3Lb7zJ1SjBvXoswk5N4YCZJWjVnqJH3oXUnYxQx5EaFhWHqRymXVpUTXhNVuuowAP5emjGCkmuw",
  "key13": "2bPbyLLtdkXorntkSxTjjRwHYPU5FrjJwhDq9Rc8RmuwgWcVhqWQAz9H5jrn53o4usb89GywYQwoNPKdZFGQBc2q",
  "key14": "5m8Nksd2iuivDgyAdb7wtNLdAHossGzG3Ae1uCyDtjFpZ8b9q6GqM7PKiCycLAZhRpg1wxkbwTNceH9EXcQMNF72",
  "key15": "4HPJPK7zmJDrqTxs2WrkdytoiocVcyCeJ9L92AEpQvxZGjj5wPR6WDBenc5E4weYZBge31fVWF5Rud9Q8d8qb7BH",
  "key16": "JMsAcxnpY43szx4SZKj9QSQ67kTCd8SJzJduhjvw1gZ7KDxYCcdGZqcs8RS5CG6fs3CkzAzzYvS9ufsYNugrKZv",
  "key17": "2Lkjj1GQncc2GBZmpT9pB2XPeZMr7LgsXF98dRkP9yHB9bcxqSYvHjav7Qw7wU7ZV1hgjmKGQEZgXD53oJ2kDxf9",
  "key18": "2aZEfm5j6Tq92aUA51rD8PXVcTLnXstdaFCRCSeqQAFgfNqUwKPxMqfjwxpANE9KfYBxH5MTJNt9HnqWg1U7PgER",
  "key19": "gZH83FuEgdXqtkygb6RXvSP3JxGhLbhWDfnd4ZZKTyw9VxQBAsYjQM4No6Kmn8fXP6RD5hTexDPanf6MSfYCTaH",
  "key20": "4eBT5kaR1AFcYrCg4qhraQwDUFaw7tSVezGVujGwjqadXja1WmbuemRcRCMoBt9EBicVGUhG5fnjLEXZCZ7Udusg",
  "key21": "yTX9o42tjWVQjEr6eWR4DFEfHfpNP16aHHXecqDSAPpMFgSEaXdx4EQZRwkTvrk6PLLbFxFRJ2um8kS4M94qKKJ",
  "key22": "3wqMoEfPvXYFsi6PmBujwa2bVHakttoqruUA6BLUfZ42JC4Uj93LE3whBs65oqG19YAGuTs8r4Ci3hj8m2jPDNXC",
  "key23": "4G5h3Qi6r2oPWEU3nsRQmr5tcDeyn8dteCHyJ9GBfQVAgATW9C4CMAmMf5AH5SWVzJyexenrki5DD6ZaEoEicaVo",
  "key24": "2Q8qkY7wCF9cuAfTi1ayxkQ6mVaLHF7VtoxiwAjNwvix8o6oVZFRNehhmGShaUAecwwAAm7NzvZ6XFJ1xkZUEVu7",
  "key25": "3kffC1cXtBvPuDk3gYURyLqtjYawc1VWS21hVJmPQoN5LHqGW32h2EttGAKhKhdWFrkyVTskEQGoUvtBD6xP8Ps6",
  "key26": "dy1Uh6M8JnbSvX96Yerr2yRvXoo19aDeDnxWBVqyiPBJyP2Asg4jjRZVNe2djwXyPxaxakXzK9MKgX69REScWGo",
  "key27": "5rd8X8NUfZhVjoHzidnnfkvwgutcp1Q48EWkck934K99MoqwDjVBjhaDm8kYk88PcxWjmnBnYowNFUeATKThL6Js",
  "key28": "AhcAq5PHQiAimq5cJiNa44jdbH3orYToTyBk15GUJtFKbv7Z7fhzUBaoyjLrcidLq14o9s2yGXXrhnro6dLB7s1",
  "key29": "5H7FJm92XEP8MgYhZLY1kTmWtnKc1hmiLv5CyC3WgjVt5YuXRSEAVRw14VoBJMPhApBBvgfD6bna29CdjthzmucF",
  "key30": "229aBT1f3iAJrVRTDc8YnXpk2RgEF8XiJo1d2gR4SHk1XaUViEJRVymuTCedvVLpXtaNDP6Cpos1LRtEMq4EvCFx",
  "key31": "4Tru1T1h9DPGJi1vYeLLWZTDhtTRKhks5CjshoeBbbJYcgNgCPn8DkL6GCMgE7KCPsoAhYYF36Lr6f4by1rVsTHB",
  "key32": "61hx1sWgSGUDau6YmPJNRFRio6XTbh5U9bdwmvjn4ox4uGMyBAQkyMbyCdsfjYKpcnMe8QqH7VLEQPNhLNAwTf2F",
  "key33": "2jJCjZjeCLVNBonxWATpQPNbRFsoHvFaSZ28GmRn5Xr96JtyU1z3LqBezUMr3SPdQZ74VA6v5sNdTeb6nokVRtrB",
  "key34": "3BehZ7ED2VFUncWyws71QauqMBxyZH4b9J7nXy79PnVRAL6udHqfBmAKQf15yrPQ6z3uGnZ1s39Z9ZR2u7vXWbFj",
  "key35": "61SZNYMp2s8ZzhWacFBbEHVkaMBJcp3mdZ3NxxXRze9eK4F4AbuzXES5NNQhwsdGNuCaTyL6uBMqQWrPejhENGuv",
  "key36": "bh4QSKZgdXGcJuJaec1ZtoL6hxbLRfrm1iDuB98f5riWCXxpoG5eGqjgFNAanjR2rWtTZG7yPWsQm4HiFy5X4xx",
  "key37": "49rBoW7xgmgFHEqmPxjyT6eWNDotNkFsjsLb5qBBgQsCunERAbuGAWoUg1bFCFPgCKuTDT8GRsV7Jahinf263DkG",
  "key38": "s7DafFcShwXA7c8jjjWuAFRoVBxP5cnZjVg3h3qdBbaFa7oK6HvkwnX6yfP7tfcVevReLjUT4UGpJ35h5TaqWb1"
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
