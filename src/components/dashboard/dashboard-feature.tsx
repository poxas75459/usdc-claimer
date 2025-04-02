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
    "36CjuF3eM3cqYpHimxBByn48FFiHZpFe1eEwhWbdhXGb3zMD8LZUwdftQJtyP1HcR1fL1nU8KcqKxgqBzMwsZ75t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KUg6dREmvgqAALTCAvjno2wT3M2LJnLNmeXqCK2Fz2dsXj8THM41JKNnpbYUsW7i8iNx1mofZduK1qUkDsbEgy1",
  "key1": "5FbbYJi46re2xGaqwZMYTbutiGkzBFRzVnk3gceP6chPtmzxsn9kR8ExPMy4A19twBY8549jUegziaYmN6725qmj",
  "key2": "4K3S18832FUrqqhnhF1e3k4j4P6XRF8PXPShQAKvXH3Fpi5w5eGU9TozwSWeQrnFp7W2AbH4DGs97ZbR3BxDehgF",
  "key3": "2ExPqk2uR5uLrXvHbSVzL3hAT69dQSXsUt9Xb6Y2zZ2VowpgNB1Rt8ifybttKMJWc7B5rF5B3K2KiyJ9pyHURBqq",
  "key4": "5wjgvxdagExCM9uKMCjsXDJNzebMVXbLRGSedmm5gHrbp5GcwE2dWekzSSW71V5ixeHMV1wmm4yUqo3TLuRBn1qJ",
  "key5": "41XTCrEx6Xq5AcY6dT5zpFv8bYgKSXndSTvGtoqfMsTjDvoNr4YK8u4dxUgC84qTw5fiydbpdHcjJrJ7tfqGtBnr",
  "key6": "55LYHecqXWJmmkUJMGpLmXW8axsNzdGHiSmtbmanLkZpauLEyVPMAcLrxzBGpVz2HEJmW57FbQtQSJEgGCNtbUV6",
  "key7": "2WcTm9AvVKZGY1aBqpwk5KuuKRXT33B918zEXtMu6LEyx6LAddp7GZn2gLPbhzHmd9VEQXHcodoNmdNLfwUx9uso",
  "key8": "9bNoabrWC2bu2D4V9YHCtL4KRBWB2kbtoHh4F8yZ2N2KoNzjPyv55VyGZRubfiyP8Y3ox4CrdUjJM9uoLU9FtvC",
  "key9": "HjQUSHJuSRTmGiknmNwUG9vcyqXH8riRaAQ53q5jReXV8CRuZ7ew6gna34BXrHzcGekJZNb9yRAd8p6smBjaN14",
  "key10": "NF6ZxrrGmnvGEiC2FPMuPCnwYKqS6QqqqMbXtHVeEPXDT6Q5EwNc9GxC8rBXHCqy26ko95B4cCyrzZSipZCnnFG",
  "key11": "55f3MshER34vn9XGnuWUg896EqDYuS1kf12dL8EyFWpynnz1CcRbHW2fswtLaNekPDumgjXxdpGTyaUrVtkzFvyB",
  "key12": "5mLjmyHun4ZjRZhbeXN9zkGhAuDgVqsJLbmY32TxgEBd4dPP9fBPvXMGWe4VWyVGkMTYz2tkNErCPiP4pubYwfrj",
  "key13": "4z6vb86kMkyEvRZYQFFiyB8TNvYkJ1KZLwCWKVWbXR6UmG8cRCpN6JPpbfjvySAwFQe5EKVuzrXrCgCamJd2EKnG",
  "key14": "4efQXBWPu3FZwUdM41BTfqxUHgnbE9oRpdmZBXqLmxxdSbwZKjNUiPwgqhe862f1jqsgYSm3S4eXWvjFPQjeWoG",
  "key15": "XrJkN2xqYuR49hLe67eiD5LX9GTJ8XFP5JXJqhYLjSMnC9cobXTEdNGsafELN8YTrMhoRNWi1DpJhXeBhkH1FrQ",
  "key16": "PzqBXsfbD48P9H6PqY3brLxN7aFRDMTF71YTRZ6d2Eo6rLGwXUAx3NProJn3nupWubpLe1zM4CjA6LVrPgyv7zu",
  "key17": "2xomg72qWPzrnDnjQa2XyuW6kKq4axdiKBUUHLvS4ViDiGtZ9KrGekcaAmfyEFoEJiB7M5CscfVQ9Pj94P4MrzXY",
  "key18": "8hLEgqYxhzmQVmxrpYPE6aMZ6tq3ZJ1ezzhyXP78en3eFJGeR8DbLZyBFiDRB39wh5G5S7YhntGa1jg5zohdSLr",
  "key19": "4riJ54YZn39C4qtbUeJoPyJNZefrg1n3uMoEpBjJ5DCY51MSwizr81gdabsWYwYNZS4bYfpju6x995xamTR3Cf6N",
  "key20": "5xs7B6hUJQyn7fdcgXA5W3WSP74BKstgLyPCSV8hvLzGfXJgKAvxhRRwFTGJoVzExTcUgG5PwV2Qkt8PhQfVWpBY",
  "key21": "5enahhU4b5EKSrWivj9mGQozmwwK3cRL8uSxCxch6dSMwd5MGXG5bYPeW6riU4UUqCvk4vTRYVkz4pzrGgFMmTc9",
  "key22": "4cnR5jj4qdD1CKHhiELCV7BpDepGMZFt4ELyNxKpDSQHmZa71BhqRDcykH6t2P371Yi6dZXp87iicxp9b7RY8HMX",
  "key23": "3Fx85s8C3RC2Z3BpDUo1eNUzhJAce1oLoy4dAf3M7FVbyjhWvxmJEitE42tpdqGxLyjXAMiTKnbwjZthqwWUXSS4",
  "key24": "Xn5TdCtC3nfMGmZbaFVpo7ZF7kvBHbqD2muioXJ33quLmGiZKiXbXW7EXN1ncji8R92m98SXUghFLMT6m9QHiBr",
  "key25": "4j8yGBtHoCPYvJziuMekkoVBUycgU4tFjX4W6uJiL4b4iLUafAg3fyF6wDj6jkSmVMcztBh9xi5vHgjYkwm5bkGS",
  "key26": "4XBro3TY9g524Z6Gkm4C1d225GRvo34U7Bquq359R3YEHg9XkQZPgSQhW3kixZ7wEt5QVUga178BPz1G6Em1KXEM"
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
