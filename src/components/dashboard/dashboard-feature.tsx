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
    "4VViE15qwLqVkxY6jsvYx7WHjKTToQfEHgfsWWwD5PLhEvq2zLxvv17WeBpLGG8p6qPGUb3EKTqytfpQ82UH7B7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52UXWMSWvMZ1yFoSuqCU7ftjhxaT7N2criH5FMgsvxF25E7At35dtxmN7C2TBBFoEtwGMehbbDvQAD8qaqgaeoYb",
  "key1": "4HPZQAQq5iX3sdmHXQVMzmib3jFfPoqhu8xmL1xZubMWxr9iaEZzNKLJf3oLbGvHrPnquLtCqRiL2AJ2jygAXEa5",
  "key2": "7QiPToV7MsKdehWVdrNEoYJpFpP2jQ6tJGyEbHJhATfzYt4v5Qyx5vJZxWpTmGqNBNnWfTdDEGcWC6SioREsEyx",
  "key3": "2ToxMGTWnAxPq3KVFrcis3X7U4gfKkuL7YQHCc976rM9aYkrZFSRxBRruYuznUZrkJfXKZFCrjinNq9gGJj3dXCL",
  "key4": "4MdbHr5ZgJSKFPUwfkFTuwmxJuuERhnpZU3Mhym2rWvHrMf5QuHWTpa5fWKqzRCthrV3rSYVpStwrQX84REn61FL",
  "key5": "4188ax4CUD9CdgdefArC7Nuzu1f9yqfsC9vCrVGMX1B8oaayhYBg3YJ7yWqZ74mmus1SBuNRUkH8fAALFJWYsHbY",
  "key6": "4omNzvw1gfjHP9yLJSwN6cZvjefmRKHKc1mdR53s9pHEfojvpT62FH8qZ8FPwCyyuiXCikt3u2XkGHEWHfpUrb4j",
  "key7": "66HakrqcPgZceu5enneRE2hqxwE5L24ehrnN5hoVTyDFS9RQKk1cuDpByVvidsJSJcojeYKospjsSumX3AnX2HGA",
  "key8": "46vE7XDjwxScQWVsx9DYybfjvPzuFKRwgVz2EqWj36MoESNGVuU35qiNSbS28Qsar36f59ZZfJdV3UPqq9F6yvzc",
  "key9": "4vs7aSZLsQ5a5Wo3ce7heQVnvQNubsWKHBFBD3beKyhNnw3FNRH5oopnn3x8UvvwYFuZrDpeLYw5Q6UVt62Jvzhj",
  "key10": "4Pdq6fAvNisafepNqTmMZo3MKDe6B6qCWTbXLPc5aamcpePRVPyU1GssPWFXFPD6zQW8AzLxYdbKER6W5Afq2g9C",
  "key11": "5u9fE1TzxmpBiWxzkHgi3ZFCkEarpEihTmfQuPoevJDzt6ngaqm3CN6Y8PGtwmxSUz9b4AMV3FJsoq28AUxpJdJo",
  "key12": "4WYxyEZqbF17FnLbzGYcyCvkDJzDkNfde8XJq9MmV6ZAxRcZgEaq1F23qgNcWmTZUdmSxobdFt1YmLoDteKQfMjr",
  "key13": "4gs6nvR2ZzDq2ndV6P8orH85UWpT5zTQzpTW9r5mYtusnGHMdcVTad4qgLLxi1tLRFLCD7TRU3Ugm8pJrTSKLpFv",
  "key14": "4dhpssE4b6VpTwsxphXmwrq43b7j8SQrQf1SXMgBR6nedRgXQMEu83HT2g1kh5oDEMBNvPhckrM4wpJbcR19yYCH",
  "key15": "3123aYw8jLFa2WqM8GvEnV2yaZRWiBCANAhSbNE4cX6Du4cRwEaBhpTpP2HeWxEqHJkQxwmgZ6LqH6H9FAsA2cXc",
  "key16": "28XsVEyaxuAdSwPiZM16uP2NZqsEY7Yn5GpifX5wN3FYy47KCWwaa7RdeTjjEba3X2iY7TL9ftFJeGjsdA4LKCVB",
  "key17": "5BiuK1SqgiUmRUZCyR4LXLotYkevaLnE4NBSxqSfLaHAW5885GaGByxWQ8wxfJcyVfwUgg1bqcXdNVXe7R9epDXu",
  "key18": "5KUdKQMAuzTz9a3E6EcFyKkfG1SLn373nRYwFQHSKF49mb65FKEB7QGQ3VUrApgVXiCA9Eq2pCmBnt6iFkFe1BB3",
  "key19": "2qb2weEhMDK9jGWRFt2Kf3KihSsZDwY9EWs87wr8Luo1UV2SagPd4DTkSPz5QBXPAmzrZRdUoSNQFFtuMnRr2iG4",
  "key20": "3vE7WPgCn5c1HyZsxzJWc8Zcbz9anWjkGwpyX3DoPNPT2LgsXg4zXy7uQs79w3GjEBUpP72YMhryRMTqBV8eRPqh",
  "key21": "2YnpAs6NgtwnRu64ZMGQXpSSMeX3YvnYjuzHeLhtW8HchqFkWb34Ym8gL4NE98RLTdhfRCUXvG2ccLEEyjo4pZyz",
  "key22": "2B6nvrZ2TQd8uT2cjMwxuUgX1SnoUjrP8AgTkewQM27P7uciWNTi5RVSCo33pPgPAcmweiG4yZZFVVL2WaQoWwsD",
  "key23": "apbQfB3fpPvB4a8KmYJSw3WAaDEyGVCKP8YKhGcw3K5RLVWSsYanTC4pbfsP1jBZKRdd9idRoqwjx1BTFQUvbNA",
  "key24": "5tmTJZdrrXU7rTGJJZXVGMys6A5FwoGo2UQbiF6isyWeafMcV1jBkfqSG8nG2Ntg77XnueSJaQeT5LgQnwyn3KiF"
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
