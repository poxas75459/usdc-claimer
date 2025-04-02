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
    "4Tn51ehEdigYLUfz7U2JTqGM37E5Xh6KCErmKXmmoCufffnp1rvV2PhwVKtHF6SFHPP64CG6TZAWoMzf3SQoU2Wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UR8EiCNWsNJ8kmKMJ9jxKS1ekicaFpRvkUbttjWx2mKwRYCLunP326NRb83pu1Q7DTvAFfBgvCSu3v4enveMZ8R",
  "key1": "2dbfhwBA8HCRsLFhWEcfDP1FyZGEKzty9y2MmNuqcodkw3tdrVcPTuShuUBWLqqGQECoT2vPjHhGzkir5tzke1jV",
  "key2": "2bbaKMYS8D4rCV1od21zUWady1jBk8VyhCF3XD52ei1GGeD4uaZNdEpsJ8tsdmgPTNKbpxejSzJizqvgsZtwW9xd",
  "key3": "JScmsfyxUEP4HgXVwpeHXjkJDwCwmL3AWH9WTyBZyqBvREvAdhz522kYNeBX6B7U81MazA6bZNWAPHBqMDXWpZh",
  "key4": "3NqRCK1yZWArmarLDsteq2dJBduF7coh2tnteo2bjx6PpJ7hemJsRoHNsEw3mZFUyBv2Azcv4qTvKXwJjRmPKAV3",
  "key5": "2ZceCPwhyPySqyNYxNWuzARrYKfTvsNvcZvbRuFRGwS41huGtU5up4638apmaxMB5fVJqJFcEHZgXPbYVahGBjBC",
  "key6": "3hbtAVZ8Tco9xjiyW8KNkWJfMDWL7RfoTtP9L5kqt63ATgUwF5FGoP5XE5NhTppWGwiLwhxCKRaugPstDFCgstx9",
  "key7": "iw7ELFW6fYJkx4qMPeSy5PMbBCZwmrFHGfmNzZryMvqmyaXuUDFBkwV3UDEtXbfqYeTud6k2FWLCBJr4KppvED8",
  "key8": "4393KNJQXUBid9QJRf5Mw8nJgHg7SQa6adxKi4MGBnF4pTWh1q8ckTM2VXRHu3UZCH8SThsVewZa1f47VA5Lbfms",
  "key9": "2oCaEzXnrkofnBfox2Eh1Y8ijM9rH7EvHbqi2BW2QTbqCykjR3qnp2KEXDvN8Ad5oNaRREDmaEh6ryew9pzitgtg",
  "key10": "5G18JHEVePfZgJFZa9MibtdKabgM4Hds5AsMVayFfgpL9HWVXqfCkrrK1MEUDnWxK9scGNZb6uMKRUAr2dwUbs2X",
  "key11": "dfQsoMRDWSGGnEk1kitMQKnK9Tok3pzKo2dK7QbEj7EbJnp8kqksjtuas4W9gnx4cUjtAQjWio4kKKZ2tTrhLCa",
  "key12": "2T6oBMf7rzvEEsTf1x7YAuFwGC7netW3w4tavVYJLuxYDeJR8MiW9JDE2wYBpLVR6TMuKQ6wXGhgyTS1NSkopT1J",
  "key13": "2pRB9qzA2JCXS7oNDfwFLvzEKneM1MKUxN6kSNq84oP9MTrXKBiGGUJbTNbskpEsEPmAswgL1d2HginsZN6RqQ35",
  "key14": "21zD4GRyqCGTMWhd3ZM6A4YwXpmYyCCt791GMhK24Ja2HyaPowuhkQNy3mDBUpD3iNcfHUny75daBK7F9x71rAxR",
  "key15": "2A9inBj6PuR4YyPvvNFt81MVe56VmKbWDr181Q3DeCvhAaA1TYdLaoGdTEajLfPjU9T8T59NG4YQtybRZgKGHVaN",
  "key16": "4Rb1xPYa1yGnP4oKEXA9dcLEtDnPNV3oTFfrxmabH5AEkp1w7FX8JCBCjMNgxuCL2bLpEeRYvyyxFhxgHGjr1iKF",
  "key17": "5NNuRYwNkCAGa9H9AZ4cjKpfqSaguN66CFfByh7PACKxEorbUhxgmoyrBiVGTAMgFLRqD4QwJg9G83v1zUHNU7Zh",
  "key18": "32Kgu6EHobmTocicmWqZbRTtftNN3j5YveJMRULNbePUWbQXqNNMQ3ukEzWc3zMjU7d7xQD7kqy58K22XrmgUo1B",
  "key19": "4apEY589uNCnViAZHzdR8xMQ9WDdq677CidyH1BUxsFS5TNHvQTDG9QCFwHZKXQUhNjYEUq9S6FfRLoDPFGQEJJs",
  "key20": "5u9VTDpkQN3koPpjEXANPMTW6YY3SuyfxzajcXyEpuKvEX4tfJLbiVJExDjZt2NZ5dzRabxtoKXHkP5yvYQAdKFU",
  "key21": "3vRNRR2fmRLiGVda2X28GS3QtgwGY8sNVU3Ew2pyqWTAY65rv1rrFAvQomrMh6zr9W4S2XGbDJfozyjirx1CjLg7",
  "key22": "5vQet5DCUq8FYY7wi1M5AQTZfGGfuVDRn6Xdf6YJ3Ccvxvp9kTFQqafyyxKUoWrvdn2E86iNFJyCWMcZgxi43ieP",
  "key23": "42j4LcikTZbpYN2aNhaWRFcZTZwBGJ3A6Bjip78A86gPt5oDuzzua17sbxKcK6tqekU6W9fdei43wYNJX5UVrcQy",
  "key24": "23hFWR6RxUurWCiVzCFZsW6MQ1wJSAkCBtxmHaByUCdzTsPtT6Da76ZLnWhGWfotvm2bLadR8PDnbtVznXFeav7f"
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
