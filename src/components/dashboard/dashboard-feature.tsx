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
    "3En6sfW3F4PRAVdbBhjeRBPePTcVaAe5koAKsGxBjABRSzraAocmgrpmJ2V3CPJCnQT5omFJNWtAJosDjqZEroCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iTiAf6Vu3fAazkMwNo9oWUz1VExs1P1exwu5SUjBmG4p4nAMMkXPyZqfd2FQqk6F9wqzWMvmqLwfaruY4rJajnF",
  "key1": "ACTA6cinPtSRs7kMiRgcr3wwKdD1gVoqfAuWqzpFcTDyYz47ejKpjKCZgom3jd81puWiZNyJcRSE7B4VTVnJug5",
  "key2": "2GEPnPAWMknZ6BwgYgr28V7nCqKkK9iVY8wS5LoojdsPpo3qJw79zco6K2u5psGzHRdwao1fWngdEiVQ4V8HUUv1",
  "key3": "5ZqCUNtysSgWxTbb29h7ywJDq6ftVSTNjwuveXUDJzN817iMZVeVGNMbxcxCg3zysd8Zj7ZcncWNAbfM5gW7kNKc",
  "key4": "5hXfjFRRW3mUGAhCWJLHixQRF2gP51r1D3EtQHcqYsuuuM1hrLh53C7rJkcuxH1e7ZK7Bx3Ld3cHHQCNjuNar1tj",
  "key5": "5JN1Rs5uCW3dMpfuWR7p8oraL5cwT7q1MocT1zpDiPgUmVa4qSwidXrXPnwjrHfamWX69a5NfW64P1hACnv6DQLZ",
  "key6": "3NVdas4egHsMe2MjTo7qL4Sx6sPXd3CLR4FTAR5H2bhcyQxaJnGEGkwi9w7DYabFZMJygA3Xv7dabzTVHjsjBb1n",
  "key7": "XmqMEiYanzif2BKrWrc8qg8PKpZzeXzMck3cwg5HZb1Vp62BTA61T7FD3FtHeiGtyST6A97J612DJ3wBUSmdkfb",
  "key8": "2jtqnzsUiEeib9qx4MoGJmufNGcP7pC7Nphu5KjNgTpycjxBYp5nsFPrs72MpP52ZutL4W7iR4kB95sZQaxVZYcg",
  "key9": "5PYbwtWMQU5jyi2gx9aQcriSkwGsWtKiFUbLiWKVZBVF8zfbF2xa8vGUN7wf3VjUDG3EPkNVmLM28D7cWiSnG6ae",
  "key10": "4DiB841CtDqyHovLkfih33hyhoKgCcVw3aDXExmw6jU1ktGacXcv2T79ZLaLwEFNgGcu9qrHKfLxGhfDf77xauDa",
  "key11": "5G6o4dEJbeTf97Swr4Suk8SHekEWrD9ZmCitTSvV7StKA55yepDKBpLLpXqp1hFBuEFmEwBzjTuQR9LExCtZbqRw",
  "key12": "GWVVTUJPpUG1a1zaYqRLWEKN41Ew1phi15cFNC3ZQtgY5PyzZgF4ZUseXN7gJDCLGQRnF4wr3LpYExAJXozoLKw",
  "key13": "5phKTGTQ5fc586QCYVktFXhUbygGkjnMQjhYkBKbWQQ2tqA2XZLe5CWa1Sw87G3wB7AhjYMT8DZ3ogm9sWAWpeia",
  "key14": "3CSVbGQoU3rGmLGUi2ArvX39bTDHTAcYCxrwt5g7TsCBQhLpRXsMrMWuSpxB6T1N7xuzXUCDbWixRoWUsk4T6Mdq",
  "key15": "5AWGymQFZ51h8kKbGQPhZht1tixfkn848jGPqJKRW3XwyU55addkNaHTq96jeUE3JQ6BtGx8A24hmqnyZ22peCfU",
  "key16": "2sZWmAZ8XAL6MpJZn2URcwAuhwkB3gCX5h9Me1ukiMjpecqbodnGwUen9gfkMLv8gRnUJDrWAGu56SnVhs84qdDu",
  "key17": "5W8xQkPVqZMtFxyupaZBy3fgnvwU8cHdutPF3DGHWFVcQ7ca6LbRjkGnu7EhTVMtaz8FBDYooqM68QCVNytDTwK1",
  "key18": "35mrDbEoS9BkWjPZQ53uN89tbXeVxiJhTanLRcTBkdG7dm5nXvhs3T6eYXbEvxyknZ2rXB4eXxSJMvM3GuoatbRv",
  "key19": "5yajDRmTqeEjL365Furw6ZjPaQv1P4k9sDEeKF3fmcMqb123bbVKxPz5Z4B7BAhrA97yHxCki1kbfjk3PXP7r3Ra",
  "key20": "4ejAZqKgRL7UmCFSd5p71jugtT4Y2DH6LeJXp45rqET8ktHhMhAwBRaVzV2XDE44fxnKQd9jkxjwjnq7zC4qfanM",
  "key21": "22YiwXoVzQNuRtuF4DPaMq6TyirevCyeZSEiwVUk48r6kfQ5LWTLKyb9rn6vzmPquLubizNkBqFoZ1tM8PrWQuBV",
  "key22": "59ecMrdqnmNQxhDpyrmhZg8Yz7zSG3PFEqJnffCha3RDZ1RLZXJXNLKD7KSJAXjWeGumjhM6T8HJ5PDkoiovWirZ",
  "key23": "3446Nj6Fc5iqpqhwndX1LMnqmNc5hC5JqMC4LhdR9faiH4ykFd5Bt92kmAT9YtYEAyFUhUU3YT9kSBz1qkyUyUda",
  "key24": "62pFKWyuXQNCAni3ANYnseRYjxEqNLKQNw5VfH7d6bdoZtuQGeEFjTL5RqeR2eB26kXUGnhwQD4k7xzTgBuLX9DB",
  "key25": "CqinAmgvMyPVDrwzAFAdJB68YXUYPBcctMUaKjJ2S35w6zH5iaUUd7FtCiZ7x7vYPjzn5YqhzpoedX1p1CWwgfS",
  "key26": "5GE7JXnvLMwboLqPtjKqd7tBc1K3GSD8FHgDG1yyQxTSN9LfrzLCApyfVf377Bfnz4VcE52y1AhU8qHkpzNmNSft",
  "key27": "5NSo5u7FV4FJzBqswFCryj4KRQe4hG4gTTprYXEgzFcbbZYB6PESpnc2ZfEhEdEbGATqEvYanpfWbo88NgPwAWWn",
  "key28": "2Hemke9JbAUaKNapfbKoLFd3H3ZbUqtFFaTmcoK7PDiWk2tVrhX5pPTWBQncqpgxxjuutJQYvpab6tCjTnxthy3X",
  "key29": "1UkRUQMm4pzQgGrH3yHteTckDLGZAzGbddqHtwqWFTewnsGe84cMvW9rpgaahDLCcqtXkKkJkrW4H9jFi5TxCvR",
  "key30": "o32rPCWPbJ53FWFTkExUpLLmxyQjrHHWK1snTMmbKwxrSja937UuPBRudjBdqzNr3ctvZ1f1EF6R89g2UWDHcyM",
  "key31": "5SKSbLTc4AT8tP5yRRELRfkBxkvEcR9WgP2KpR3gVKqdtAzGioNcQAGYYFGepsvyCX2MdvNjrP1PJXia7RzyPexm",
  "key32": "4VEmemNB11V6pNrNzB7NjD9msYqrHjeRBerJmnZzNhcbVEd5ocMSxntaaRPsVn31LVZEb5B1YtbV3a4e1nEN8C8h",
  "key33": "3BBCWcMC9bZrVXSVQwfyD6SE5Yx994sWRiH4Dj4DtF4puzitsGVrmHQCc9gwh3n8qYvXF7myWxjHs35AGKdFds4R",
  "key34": "5aNAEbDquBB7c1PhwcxmMdcJAWoE8XprpNReWmCd8LuwfeqfMUrMsraPP9zkhaAbgbE8WssiRqp1JVT85cUjBwt8",
  "key35": "23MC3VF2HRuywNkyQDbEE4hEB8uTBCyKrzGUGCQm4GKciw4yXhbfk4Kq7w3ZDtJicosCTYi7qMFPuqJoGb8PnMYe"
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
