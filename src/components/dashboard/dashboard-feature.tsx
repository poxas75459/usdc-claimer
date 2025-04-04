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
    "5PkryqBQN7xrarMz6mAFKocTATFh9b99Gond89caZLoMHYsdb55eMemM172Z2JZxciZqbP5vv7pszX29twLSjSjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbRDSHM38Vctb5sGRT3Zkn2wFoAycG3VBCyTk2zgeuNC3XeM7ax43C4x69efyHGzixVYWi7fXbm8txaSAR8jDDj",
  "key1": "35UGCTzZxByjm9BgE3B8iFocPan4MPqWyzqoFM7pnARdDGUphtFFX13q8tzXjr1rcFtYaeM2VSbg2S1WWh7KzEde",
  "key2": "3Y9j93LaJqNiXoT7MHCZtNb6ZkW4u3EQP4DiJYZBf747RVSQ4kUNYkbPP6EV1NuFBZb3QbgL8D2QyyCp5MkvMayR",
  "key3": "5q7MKmkKrUHK3Y8LKL9qXSGVGatq7WsbjfnTdSCUJ3ZVE57ntHboKg4XWz71PxKr213384mYig6kqTdxNcPULM3q",
  "key4": "7bP8vcCGXQ8qq1ST6ctZsKpt3NWWuwnWdwBqWL37aMdNxQLbnkDcmiexE9A6EK5mPtH9xScpNu5xAxe5adZr3E2",
  "key5": "4AJrx2ec9epEpAa2RhyBJLygqiqbHVift9dni7WseREign13Uh6nLr4PsU9KzAqE1U7AQe6yyDWn8JwsDoemRS3b",
  "key6": "4cX7n5fofa5bCgVkpp4defgsKzR8zf1qT7MaG8wFigVUwEB82ZxrxRRsr1v1rwg7Z5mngodqMeHTn6CiqZ4n8QkJ",
  "key7": "2AHV2GYnX9jcxKvycU72E7gmku2apeCF61Lu2vgBggpq8HBrkyxhboSAmbJUD9X7yCEqRLwPzvU2bHozePTwa5ST",
  "key8": "3oWgbTZTuodTbg2HxrPLLUKC5HAw9H1hnCXvjZuBRUGGYyBD6CVvqBwTQHNtBPWFyTL2UjtfsLVeqxs6jFxEebhS",
  "key9": "3fNqvQVzJBxPRKTnZN6G9SsBimY6zyKKXDyqC48RtBgNAEhg26AkTZt8s7ptYoqiXkpibLNRqMFqPa9ULKvJYzdu",
  "key10": "2YXYEUiGQYwDG7QVCx3wWEtduGk1Pb1HjHJ2Cv2SZCHAjVgo4fvvJ1ZMPgKiDqn26hb5ovm4Hx77DcqFPCbaaFRr",
  "key11": "xiJ1rWWotrg8iWQsBbbPh1CE2hhZgWV1cpqVyHVEr9qC3zqGzuCNkqoBpcxB573CYdtTR9HL5m4QRvi3Vm5PRMs",
  "key12": "4cShDLRuH6hz1w836AeqKX6h3jPCjj26uosRuwMPCbtmWiCcEU8e1Ct5ZbQMea3EJvY6hTjGDGwip2LaKSKoDKQQ",
  "key13": "4EbkGqkuSgXxhoLSrGrXR7avNT2qPiT2M7m7bKeo7Yvnac6fYdcTNyaPLxGyFK7X83rFdgbnykW3n4QxFZUAX9Qq",
  "key14": "5oZrAkLJpsDyNTXxij7dFUmbjQxf37QgZWfpkfdkrJsQLo7sS1iEaE1M46NBTJRaFSZ7giZwGGB2zK5cbYPzgL4h",
  "key15": "2N1YhHkWqYWedYZNbuf2KHtQPdnnFyh5C1uJn6izZ8EZPDaznnsxbSx3UBTRcTzkJtTAuVxuQqRLXrHZFRRpqEin",
  "key16": "2PWgEig3MsM6d4zejJrqdUWxXwLpXcQyZCWkkFUmY4bBb9kkoq5KvV7W4hoESLJxzTsPcE4KtC46PSnb8QSsZmUC",
  "key17": "2qMtMxFwMmen9yZXAE6HEQ3KiMsF1CWa3Yw5DMZxVLS555mvVEPoWGpHyYm8tEw4nbXeZnwAChg5x2ViZkYWjKt1",
  "key18": "5YHonwHbf4QC9KNERir72PTEjSb8caDyVdEUhJzV4UgHW6y2bDPrq52nzjzdhy5FV3AEvBGQCxjD8SZihWKiy7gq",
  "key19": "5FeCU3x2vhU7MsLALARXez7ypRi3Qw6zcz99f4fnvJWvNixRg9uuqFKaw5yYV6jgx9gkMUQT1PtigBUkvRdk7HTb",
  "key20": "2su4EtpPN8zdLNf7Ti6XUutnmqugmjRmVa2qJmZuCfsEGH1fdShhr1UKB6rQm3UkUUXbxbC8fX8NRoTupbqgFsFv",
  "key21": "4c1QoXLyHKZRzTRRrF6LCe2MGiT2EohDcJXWY2d9V9pZjP1BchKTMNrD69Ymj9oJRijNooVd9wNsU7B28pPhF6yM",
  "key22": "HCxf9cjZrtpkq9wC8rqAuqSS2yGxFUmXVhfithwhtWSw36bu2BqhNhy4aaj4xBgegiWqJ1AA7H48eoeSCbiPL9r",
  "key23": "3FtNJ56pTc4DdJnkhUC95aMC6dCn1pkP862CEc2bRrK7yztEGMYpYTGtSURd5ZXfxr7tCuUXFAvWTNUmGhPzA7At",
  "key24": "4qweLeY7Ct8VATaxHqygkaJXyRmoShvPVVLobFsLGSi2WtxrGuPqDzzunxtXQeNbYz5R4xA8Qo45LgjY2SJPG69N"
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
