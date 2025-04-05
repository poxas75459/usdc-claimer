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
    "3v9CHszqv7y6swnKzX96DK8AyNhx8Bx4SHxwuWz2zPfGzkMkxMH6prp55KLLmjgXGHWanFHNQJrEtqP34ui2dAgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43A2ZCqgTMrtZcYwowWesCwhxoFdi3x5Jk83ugg2zboZaTKq7TRcXcJLDMG2bckrBzSnF3KPZ2d7SjZrgmQpdAE9",
  "key1": "25S6QUny4yxZRRnhNcJcmpjQW4qSyrTGSvEJhHd42ysu7nBMFn8MYMrdE66dVha3BXknt3qwkpuRAnBgNduRPYKY",
  "key2": "2vi91AcriruJ8svX3PLi7bR5A8g5U4LCGTmrSHr985HRGUqCaboaHzYExYxm2RmERKPquXncLbkk7A1Ldq3r7SFo",
  "key3": "2rxUguxwaZFwHbMcXeAW8BcC4mueFxAqDorTLKb1kQfSKqaKz8zpPozwN6p54qPGK5iqAPoLuPEyGMUoctzSVWzo",
  "key4": "5qDvqL5yV9RZNB9d1uKmnaT2hGvhFc3KhUWKHnQtXQhFTbU635zWS5qbvNJNCgbRBZGXNLr1Gx3znYSaoCdWwWdQ",
  "key5": "5yx8BMAukyuzgk5PGmeaeCYJNVU9kNzTiBbeJKV2iLWPQfVqtmCUVZgppNS89y43C5w2sNpxefZMCJuUpedW2EZ6",
  "key6": "gHFFSDP1kg7qgSiEao2AiEew1NewyyPQ4VV7jcqg7uLDZL158wyvKnAhi3njdjgxst4mQbFmJWV1RiWxKDQULiQ",
  "key7": "4JVwwWu66phSGnSm31ia5sYdyWksjG2G9WR7ozrxKc6FtLHjjKeL7o6ZGoxh4nWXAPvjq8ZfmbnTsWm2D6BaBYaW",
  "key8": "4s1m7CQLEE9cEZAzmTT4UY2hELJ1vdZMLCyLjhKQvADnoF5vt1DnBFoBHCbAM47x5kUpcKqiYBt482nk6SThbCPi",
  "key9": "xtYg1HEhryWnWyiGs4WRkya5g96jfdaYRajC5hawziRQKugsv8Kw7LA6F2ArosBg4tF2dUoCS92HwRjbW9mYnmB",
  "key10": "AvuXvfTzuNM2mA1y1xy9rdYZMEq4rWVnkV751Fzmff2BKaHyVckFmFecGHxZD2opDqtuHZYAGdZXoSKJPuB3XoZ",
  "key11": "4aaXNeTvQ1aF2aRar4RTrohU3qBCWi6rhedRKgqM5Yaem3B8ALYkhT99A1Xsp3Sh9gmvrznJCn4J1twdieRkY8wk",
  "key12": "2NMkt6a5Q3R7DLY1VAWFyp6Jojc9NbtWYgdyZFqZE9sReM3eg76uSgcLeDRV8Pvb2juALCa9Q41KNyZLVCCy3jFB",
  "key13": "56TKgAM8UcxTtUNZCeErVQnUs3PiYaSur2TjzaqcvCXFVTkfFBTLRssKo2hPKVS2eXjysRTVKoPiV7dF98UdY3FG",
  "key14": "33dTLiv5Y6R7zjg48mpSBjWQPKnApZhGc6G9kfcpo4cLojvQanngDnW8WZ3ApJhKATpSSoKm1XpzZ7KuFEAhnw1",
  "key15": "3aAqQLkQtfZuxo94t1vf3ssoygd9P2BHwbT9qkj5n4BxyRjXEknZnggr1sHnFLrFG6HpZu6GQHN3HTUzsBEX4dAD",
  "key16": "5dU6svUFKxUkqAvavAW8Hqz8x6LoCQfnNMCY5eKEXapBXvdao8tUasNB4AFQryAwaRJiZpWgbx27tQFdQ4H3wnKZ",
  "key17": "27bhNFq6F9ahSdNAubPStii2uTtsxv2a1rXsw9Ss22gTTw1jhptfbeUjpeJDN5wV61pRvcMkPKQaWtGuLxWpdUkp",
  "key18": "2R2eieGUT471ERdfHcpQgsXMA7L3o88YdKwVLggxzkhh5q9uLJcYkCLHiWQD6BBmuBefeqZo3fRdcX18ENNTyAYw",
  "key19": "63MgsLDmnJeXka1EQeih2obK41YmYyxhY2s1zU2cY7xtKwrH8RYeqMeMBmLG3NHKy2MGQWxqnAxHLchFua1Uekz7",
  "key20": "3hCohtxEsZSKuAC7N2yMozNBppeoxWSNzUpb92cczf4eRaBCBKDzkDstSEMaUNWfAX2z3DWHwbM8BE6NRFK7RUzm",
  "key21": "4W6CW4PmCDbUKC91T4hyARmmkzD8hTnwKNcF8uSzfs5gSxfar7k2hAGXWSnDZJRguA8aH8EsSS8sY94pSi3CvpsG",
  "key22": "2tK2Yy9Ekm9HvrqgsKqQJeExBso1WrqQFV4rYctSbqdb9SJhSRVp4kWHDUPpZ1eqgxj2AmAzZV2Vs1M3fQJY8dp",
  "key23": "48vi6K5G1UxcdoZxDFnAB5UNotC1rNnn1ioEvMiSffa5uJdNmcEk7a3aSeQUS2B3erDBy2eYe1in1zwWGFA2EAkh",
  "key24": "3rvLyFM4g12SmFeBskt8JX8JVZ4tPnZg6wbgjymZNXCA9TLxXtZ7gK3Kg3aNjR3ZBWkqU1pq5QYFBPyNP7kWz6YD",
  "key25": "2g3r3p7yzMamdZ2ck4FuJewPrqen1z7tVsiY8pcCqc18Z5D9YBXJQhyai3rZdN5BbLeEATCgticUEQ3uaWa2yGyS",
  "key26": "2wP3LJtEsfngAziauRCMqNRSjVHSkDLHVs3YmcYtR2NNrce3dTcV8LUnk9QHMuaMpRpwBD7C5GSjkQHBzECLK776",
  "key27": "3UfNQpAGvmRJ238yU8YEzbEoNKFfBCT8zp62xMcXhuZEvmz4kTJG9fZo7CYqWXHDkuBPRiThs7zM2UmTF9V3pFat",
  "key28": "2P6dbUCE23W2qD4n5f5gvZGinPayxE5aU3LESHs1Ef1jAPnAF4YMEq4N8jBuXFyPjASCFgA81FMVt7SnhpLGDhxk",
  "key29": "4Mts8uPeeeSNRHQPR2Nb3kZe6NdGkPag43jUPYfVBK8kTuRo5zVgiHzc3cMV7eSnfvuyJtxZ6PjkxBkVTgVVtACz",
  "key30": "4fDb6mpwj8DbhM4ieKaqnbiR6ZGdXCebbUbx79C4pyUcUkkC6hfPmwvnusgDtxt56tBLPt92msovtLhPW5N8V7wc",
  "key31": "5Wm4sqfD9CJtigMhgsASPUTrZjaQk1Zoa83jZpNXH8gLoQwrD6tjFhxWBZZ68sTw4k6oCXp9wjGZJoAHmjf6YFXo",
  "key32": "5uCVhzzxrAE1qmkZcmUqx17b9XRbVAn2W2KoxEKJfrrKr4VgtrbkGGfHD9EX5QN9AdT11q8aXXVa3rougvuGecQJ",
  "key33": "dvzbmSvTmNRgXQPSWgrYykCFYTdkxpNDDnnkrY6uFDq24Bgm164ppKaBNvtHFd4AtxhLod22sZYHKitR81SDWh6"
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
