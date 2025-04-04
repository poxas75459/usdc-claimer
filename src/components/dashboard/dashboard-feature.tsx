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
    "4DKjDpayVNSzERQnckX5YQUQ7xqxk1zCdXPRCjQpz67Pq1xXEXuszvpfEH2i5VwVJe24dCJwJCZdD6o378U8YZz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47oDmjvTnYw6hHXQxYQ9k7FVyLkJeFuZ1ciQudsG89X7bQKvmqb8khFvzRnjqji1jqDw7KHCmeVtutpjcCHEk5KK",
  "key1": "NDxyrHLgWz43WfBL9C1qxy7BGexfKcNSCNyyA9Y1ZWHDuGSc3piKk58KmfpMa9VFfoUQcnxqnrngLCNSSELKKBE",
  "key2": "37RudW6MWEqdz9jsx1VLJvHVjJjbrqHEGuWfkJRyNopRTrEAJzStbRYgRRQfystKwGUttYhz1wuyZ8UEzQAGvvSv",
  "key3": "5HN93gBEhy3fRmKZEPQi43ovub2HH3NeByA2q2fF3hGJvWn6SPynN4CJrN3rwztJQkoYNFoxC3YqG77N9bu5ksTK",
  "key4": "57r4vXNZbcKLH7kN1sTUVBDydPf2rBW5Ztn3btArHQuwZXYPyrmcxotxJS5iYkk7Q95rawkF8SDJetkLjj3DW9Mp",
  "key5": "2srZm8b4Qh5QrPhMgWgDnPzYYWD4VNZdqfrGjdzStifEo6FJuLYK3N7wyDDiFVfa6Lkha2wyksoKEx9edsAjdqyL",
  "key6": "Wf8JzLZ5iP95uXsQhqGN4njxwyvNSPr9poq8oorC8hov9hQzZ3Pi4kQxpMGMZC7xcKvJ8N4CddXSSQu7r72e7cn",
  "key7": "2iT4j7hX9eSLQHJGK44W7ndPqASDfM3QBTLr1AnK6nqc3bHcTFtQMhHLpH2NkZ4DNbEz3bThp2AB8ZKNoT6FCmiP",
  "key8": "WfL2KXM28aEKae5R2BSPSZrRgGfeHpsagc7bsepFnqde6GodkVy1EqKWuZKWRoqvhHxNtxrTpRoa76sBuTQcAMV",
  "key9": "39PgmeBWu66EwQDST6S4GGH5VgrntxsnfkYuG6x6VSusBtpE3PR5cmBrSph4j1Q5uB1X58M2uydFFS7VD3UxZXJB",
  "key10": "5SwSUHJAAeFTtzmoo8hQww7NXbYwwUwAwxbW9pUXiTEa7svNYTF9YC3gFNGzKU1vStx5QBcqYJggVf6MDaFMr4T7",
  "key11": "5P8LDMuB6uM4AAX8cBMfaysdCjrUCkBEUJMMj4Sk6Jadv2zwLHHDam33fQ6iMymdN3RYQLHz1sNuhy6gYHWHQWVW",
  "key12": "2Egm4LxymbHjZySY9FR6gznLyQ2gVyj7skSaoyNjdP5JNgkYAUCoCuHEZq5159gMWQhtW4yZ2jdqjVxbyfeXnxeE",
  "key13": "5oTxU423QJizoyLZXgNF91WULRr5ndjNVedrAjaqhtBx9Y7EdDmZiEqTts68wHgtPsM5tkqLG2VGrxeVVTh5wVyj",
  "key14": "5bxbiZ3niNuLpjgUDUZyvJ2wTmC41vY28YMyechs9T9cKaa4Ls6ep9bSuKsob1CuXQAJU4XVgWjrfUC5Gw1YefV",
  "key15": "4kA6SvcDWvYt4QNfRVJarbcPtiKf6otVLfxYfDJJgZZmU3WPc4Uv4fdHuq6oAtZC8xLKykc5zRthSs2rajngjmyx",
  "key16": "rDA31Y5sxRT6aSKEQJBrdkNCgRmL7fG3rxn7DhmL8x27dB2mfEknQNWjkPsbnMn7NQ4GRKRuzCjNN9g3MuB3tKp",
  "key17": "3tWe8HEMKdeLJx5qpHTCrarQkJegNMo8qtz4RYWEQsXSnSyTRG48uZER42gTJA64JRdRaNq6K6fm8ChymnmGc4Lr",
  "key18": "5uAD1xnMmY8TRVjggfVqPrWhRKiVz1Z9671CfMJT5sHCzQnCMzrBodEKVgHzjxJdv4RmZS1JS6FgJq3DmyoWq5q1",
  "key19": "3CoGwfBkCBWvmcooARekqvFCxdim5dPJbc9s4saGsNZ4CD1SgUH7zPFjEuQkr4gQkiLAoHHzrnvW8uxi1jcExxij",
  "key20": "49fhCp8KTGcqnC56f9gKkQi3arXiKpyJ7HUphcGurKxzAAnuHVJftVvrdGbV96LQLTGq4uJdsiUVjAgNzMKhsZDG",
  "key21": "3Mfy11r8Y2MTJ54C11i4dYxzzUoX2hs2PyR127Xq3u9utjHN4cznWPWm4ReQEtoBi7xCDmohseZog5h7dG2RofLw",
  "key22": "4EFyCMsUyvnVhmo7jptyEf5AjNJtPgzT4XGsbwUcaTeV3c3jvthDkjzGDGvw6BM6PyPnZ8WV7a7rv5znk5Mq1q7g",
  "key23": "5rZwo27HffdsKYBstBfXMNQ7ZJ7EwtrD2UmX1ibdCx5RtYLhuB3huafseD94T7XgzF33JqQcxqz47zw8Wt6N3moh",
  "key24": "5zE5ZJtEpR7mCw6UFKcetzuqQqqqbv53yvSzba2YzQQ2Hr5r4f852D6FVGfGSAwBd8L6Vo4YLyqqjFGwASE6JKJs",
  "key25": "5m546wTk8nEo4xProXpAYpT3RDNKrc3pjuFXeoKtd24Zy8W4HKBYiMCm6h9VEnwQ4GB6ipqdoFGmvMQdbAZnuPUZ"
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
