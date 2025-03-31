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
    "2fB12XFKCv6fCwpuqhnCtj47NkALmWsUrQsEPToaxXp5gw3RKwZ1f4BFxeNnAbjamtoPTQgfWqPq1V6FmTVDNcd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Rx6TwK5n4FMvsFhvbcGweXnmPTdw4ffCGDBHj8RgPykA13zbPfUGVUbHmtrpoSRWKsY1w7bZ4F1o5xYbKh6cpt",
  "key1": "2yVmz4hhnqKrLpFBnUHcJrUoXcyK3XxkbWqpjWtAXsqzghfTjVMRw8ydn3fQx7ipozbRNDZyFBEMjKhtQib6iWM",
  "key2": "3Xt77y6m1FkQo2dndYEN7pT771v6bwTsHkCxVnDvuF68x4FKvSE3ERyTTv9oVNr4oHhJ4dfgjsTgQWY8WYQheK1p",
  "key3": "3Dzn7hVuhL1zwL2St4HQAunSF2cKazbqbBnp6UnkUdvYL16FdVbNiz7ohFqtMDJpiQ16QwB7Qb3ABhbzhnpyxUkQ",
  "key4": "4F3gsZzvLzUT6Hy71NYDDq7ZsKCg3BEpcaQSzEM39p1WYss1PRz8n4AHnMtamYPH81BWSjHxhYqAe1QhrMaxgKzc",
  "key5": "5cCLqPGiUcLYLwmf93Kqf9X2fA4B6qe2yhVJw6EfXRn8536jBKjdRM8SZVbxE2v6dWjMrb3a5PKkBaeHP2CaXidg",
  "key6": "4piBo6LBjM1W4hXKB4KkB7avrXMaLL7mGj69JszsPmPsbhaKh3GvxjVkvm7mXBATRicxmkhza3CkWTRhH1g8zmx9",
  "key7": "jYuBqpX6dmMXJF9WqwJTx4WwYVr96STf5U19WWWpRz1iLVX5n2ATsrkXq8SPCPo14WCBhSDfaTMpBF8A99HiGy8",
  "key8": "5Wo573HJWDgFqWoeGJkexMTqc4bPFyvjZRAEJ7oqHkkX1krwgijZ6rnF2Po3oJQSvwHUH4Yxo9NuLDZFHi8Vubtb",
  "key9": "4VFcvvDCmt4EuzStshjDCvH71jTao9e2D8WUsUypzne2yPX5fFExEcswcuv2jLrGBBdxmZqqoXGGyvssab65xJmQ",
  "key10": "TXHPaMHUmQrMGeVLrpREGWjrYfogzJeVBzB9YcMssg9ULKK89NNqm1FjmUxQeiNr9ZE3YsPkVdRt5d56TmJS2DM",
  "key11": "cPCaaA2gZgy8TBFzxpNz3SNvxcTSuxnniJ7wHszeZam46LP4LyLK2KcMqSM2mWYYekkXG2FnPMXWXwxd5LMFqHT",
  "key12": "2QzndqshHZcy4VdFrpVfoYNotHcwzhSjx7Ga8PeNVYesLM4aXVBB5e65M6YPVHmpWHWhpGsLBbtGuR7qra819znZ",
  "key13": "2T7MuQyMhfsoUeAzvbB6Q1VUdpADmjA7K1RBvYzMxddYCJckrN8pbQTk6wBFaTUiRpg8oav3DUA21NmEKXXot87M",
  "key14": "ssRa7TzbnS3MCVu7TyBfxNQ3n8DKYpcQqxj99rkDmaUuPsbYRK7x4qsUAD7bE1HiRcZDhxbNB99z9jZFSfJWsEH",
  "key15": "2WdnxjPp9fM3aLoBKAQucB74jy1vAaHc7gbXvB6y73DPS55jWQQ8xdeHqhunWw1SzTEbBqkmfiXViBDh64viRjo9",
  "key16": "5XougCy3HPMCZwaYc1QHrTHwfKZ4NDeHPYGFwHZgMCk9nDLoHqLzx3d9J7PnWCKFcujtKMGLACme51jaKyJmoJ1P",
  "key17": "5TactyBhFH7FSdxEsABeismgf1Eu78Xhf1v9roLQTZ8s8NTEFLnEXf366pCHoRBEemGHBQym5v1Ws962L3QvT39z",
  "key18": "5E5yAC364sBjYQK8eDpbdjkT3rgvPUZ3cYCqLLZSMopymvkqzkchESgvP76W2yRdZVW257kbrJBuc7wUfRh481z9",
  "key19": "34oCELMWmo9utUUNPAXUceYafr86iS4895vApLjjTHehUC4A6fgRQ27bPKWvhbmBVwM5AMcF1G7cBNh4AqyRBPgL",
  "key20": "2H2bXbrtR4VRbg9iMng6Zk7bQ37PjXvsBZdEBHXFKyPV7tKoRyPDCKdijYtLdoSiB4PZ6yLG9ifpgFwKesy3WEUJ",
  "key21": "4LyU29tyB1qVzpbcSubNWMVET7fEk5BUdSEALmBUEZjKekqbeZqHcKRv6rGsNFKUUYYsDNnf6svx6WaS2TweJZ6g",
  "key22": "578DgLBVawuD5Q25SVAJ53zJFQDURdbwCpwxax4a74H3Tj6R4fjFQAj65qgZmw6gozgLw6t4ai7rkfkS375RqGqf",
  "key23": "vu3UNjqRA8PxgxUmTDvocZYF6pdZUcfh5AqreW61niSQjvw9SfuKDybnf2RE2pQJHZDuFb97B29iijRNnuVZ57h",
  "key24": "PYRwNXF3siWVjEoFpSxt2gd1DrjcNZBGu5oBVY1t4TAuoe886LvjKUdGGbKTCmaS1JSWajS2zXJBW9PJEesHiik",
  "key25": "XZKiqej1d9mG5QMvQK2V5gJUuNVHqJRRyxqFyD19aFpWRTc6jnZhssmF3aWput2Tk3UTL6pCmn77NUdRz6edM1G",
  "key26": "WNcPxhtgJiCKB1WYTAimi4ZgnfSvF3Bu49r23zqz78GK7rhw6PeW1frfsSR2WVZiYx2tgCikYY8AEUE3o1UwQSf",
  "key27": "2NU6Dr6TfyCwDVL5Wz9HGJrjdsRSCvjZwaBGBf4xeYvHnWUc17TXZVuFcWNRUSn3zfwt4YWs67AaGt8WdjPgwPng",
  "key28": "4X4Nu7yvuzPswSVa6uQMjKc5uVeNauxS9px1j8KKcmPz1oMSpx1nU2b7gV9ZiwjD8ieAua25md43Ae3kWF692udc",
  "key29": "4Rxa6bjnjWh8b8zGkjMNhwJh6utYvS2ZZ7N9GVQ3yukPEgduBrJaGS2zWvrgqW2PgA4ztFEb9RQBxRjibEfFT8T2",
  "key30": "KpPr9b6MHYRxCwRSPsgPUKkyqjfKqRBY1NwkVksHit81MmqTmw759pXjt648TmcXywBRG5GboWAfLJ7yzkBmiqp",
  "key31": "3y16RvwQJgUcKssMp3efsMJjqtCkAgbvUPiJTevggdAYgJoJuFLo1v3KzPYEwsAhHfk7f8yP93ZF8ff8n2HiWUtv",
  "key32": "2Yw8Ws6qYsaaN3Mqw1NgM3VYGqhJyDYe1yxheZac2Vzga8MnFN6ycsjgxh7tfRYD1ZPabn2p5B1LBGvBET7SsfbK",
  "key33": "4yh3i9ZGtwFPHoP95VH4Y8He3r4NRcq5dA1dUvXfpY1pmTZ5B3YVafHXUmyiTcaNpMXt5q6Txrgd5cemUrhLAVv4",
  "key34": "2CJoRVDViUV2Zxfy9fQUSNjQUMrsyLD3RrZxnmv8MPfiwbE8PyY1vwd8cPEYypeJdAccqynpQr7LgU7LXZfqzaE5"
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
