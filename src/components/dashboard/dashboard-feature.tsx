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
    "rw11KzjtQ3CqUKP5pumX1zMdArErc2MUkmVUdWqsZo5e7QYHFx545NytSczMZyJzTd5jQ2MqvWibHFWWrWke8Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41YoPc2xmhbF5DPnmpwU8Gepx49a3d5NqqSpfKYu7cysMQcZn1wCHqMMQHhBpBLyBPtE4qeD3EUSpu6ieBywPCNz",
  "key1": "25hvSbm3H7ubsXdJWrKeuF9tkfVdgJWk91jepmidoaKhsW2yEXNBkmJoMB1pVpYKZW7c5oKBVARKmoKG5AYNaPq7",
  "key2": "4g3tcEYsQBnYXrJVDugk8jtLyKvdareYeRwXMs5RpxRmU86hVgq2KmHRugqG324rtSybEnUmrRhsvsZbV5f6yLfB",
  "key3": "5suqghvdC7oB1iYBttuL4WYM4E9S9tAumgBTan2oC4z137eupEynkF21S4r7UUu9ks6n786vf798y6a11BB9jptT",
  "key4": "EQw8wjLoGbpUKsyysPj2tLg9fnsWXuLMcAyF7pxJzGK71TWn2UXo1UHYgogFh3Uk4uf4ybfFCyzD6PTAfPPD2Me",
  "key5": "2tceKShdmxSC4pNUi6hVEXGeFTkvxhAhGZvN621a8wKG3wbsXkdvsVAJ9pBaJoqNeAFyA8yo3oWB7accGz7GvNU2",
  "key6": "4CLhT8dCUUKQmy4jghTSR5TAvprbLWQbcSSEC6NaSyY3MRAFo99GLGPAdF6hLGnNdPdBhTp18EFW8VH7gP7JwL9R",
  "key7": "4MVV4Ywo62XZL2PEcY8ft21tkJ49Rcz2HYcWsXTq7XwJe2wgTQHLAoSSu9yjEdJbdNeUeQq4VZ6FmzkUc4QVub7D",
  "key8": "3hNSbiKVjyNaTmybGgeE4Mpdg4axHRZs2MZu3WhagUfZGNDRFJBrkz7W1u1dBAQBnmiRDC2oSCvWUNPZ7b58S2Mg",
  "key9": "3MwKkdkXGtZx7eFFZ9Bj8YeBac5TqNErEXvcJdX7h1kgngpEQGKzbvEzQ1cZAnrBneHuogMseT6omZ5mh8bGwfyy",
  "key10": "2TsKNAueSAhxJf7Abj6ZDJavtP4yJFwQ9rT6VcquJ55YkLVUvBL7pfCxpgSg5p6M24be24qP5ZjtxYZGysdEc6H7",
  "key11": "krsxw7ie3nJ7NNTiz58zaAQ29NfCFCjZ9pMe34GRmvxbAhd53YYTwnwza73x3FCnFZdxoH652CpkP842S1RLe5T",
  "key12": "441hmYsYbf2T5BwpP7SRwh1KcPW2TSeLq1xeXdVJpu5va1QTpbMQr9oDgUYy4rxG2cKNkxiS7xmoRxm9bjwCTR91",
  "key13": "4WpcWyAopTufwhuvhxFfwKenojSxWKYVpXTmcZ8Cnr96igpP7NhsM9PMD9sUHpswD1U99mGqRHeJY1ivJZszN7V3",
  "key14": "48Kw89Dg3VR1oVFNpqSj9qcFyARSXr5F91ToMmG7ERgWz7AtZnYEoDnZrBjYWQsvuEocAxfVuKDfunLgWksm6YxY",
  "key15": "f2eKP7iQ9B245YStfCfAC7BKcAaPb71NSWZBZNtRSiJjoNoMUtq4NcYj7fR4VYRM7qo3mkGnoZYNw7KW2vqkPdt",
  "key16": "3ZRTzwaBxUFRPvntxkXCgJEWZccWb87SYJs9Mw588TkfnpsMeXSmL7BxfE2rUy7kWVZCrPvxJvNzRVEQfReR1H5H",
  "key17": "5sBwumDRGHRUTz1KGbDUruDBm9YGYC54d8pmXeD5TpsYsp2YyhkohAhMQ6RGA56iS4fLCzDhnA7WE6HjgLj3ECNv",
  "key18": "5aUsjsmqMdkTRh631rHBvJW7yHH4N4zGb9vQfdwgFnmm4QzMoMfiNvqCYQ3JU2M94VuEZiXkpxhQbdLS9MrABP6Q",
  "key19": "MgiDMVGeqD9xL24useEcaCz6hPwGN3igXQa1yXgsfqqRpxDTQQzALoU7RLZHegUXwLHL6oxd19v73CsubddAn4V",
  "key20": "4VdV9J98br3oqTQnB4D9UAd4EuPsrJ3MHhgeV3CqiWBfm3rQkhAUEvNh3Jxd9feBcop3dqs2xgBdm2NBV3Bz6HKV",
  "key21": "59FnbBRzCbWeSum59c9gW3SFWSmJwrxtsaqyUkaCDX6eyQTnLKgk5TcTC5bQJzVNLo8qxEiS5PZvpMCL2wk4JiNw",
  "key22": "5YQ2y7QZxAxdaYWM2mrero6JJgnFCR1cTF36duxE6Ski6FWagRuJvu3rFqaevBG7syGPVwrqzB2nNabv3P3Ldb33",
  "key23": "3RYkqzKE856nXxGGLLpG3zgjfB4KzKH4ZMgCUkKwaE8MMxaUMH6pkS2sU5xH3q73WtKh783TYFqCYt7sujzBSWk3",
  "key24": "3droa7GCc7U88f2mKFqKcCAZB4Vb4g66oxjMjZFtsddcfQVsD7EugNmcGC42WG4f6ZmBQPLyspZ5xtXQXQcdyMiW",
  "key25": "zYmdQudrbto33ZjMcfJwWRtPSoT9EzVo3JGjf5bqVRMxkRHD6v7AJ12rxYUSXdMGUGnJQjRqYxfQxuFW59r5DTV",
  "key26": "25RwdqhVWtypAhKg9jHR7XXuhfqzTfPMxThshDSFJDKMPUSMAnz6NopZeacVmzCbRmwkRE9xpHk65bc5YjBjM6vP"
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
