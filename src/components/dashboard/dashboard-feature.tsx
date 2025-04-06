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
    "3saBFpA5m4PR2igZwuntWUUn2n6XU64zrN4qsamT1DidfUWB8WmiJpqqJ9UvrpjMYKAKufAJd1TA9t8xFsgyvEaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23taHmwAf77ockUnpVDHndEq6tZ38yiA8v3N1cqFRaViMczmHxoHD6Tp6HsXWocRsULWNbz1SYqotMP6mHChjiXs",
  "key1": "38sB8GqB6LZmorKNSJYpTPVoSoMB92n5ga9TdGnrws5zDmKcg6ioYXt5ompn7DhnBTRZ3vhPASCSAFjmjdRWd6bH",
  "key2": "29DPt2pZzk7A3QYNJzUHbmGkUWET4uwzw8gPQs6ZgGW7p1o9j5CxyajihepgGti6MSw8ooNQhS5a26N68oJRakJC",
  "key3": "3B6DJeYJMkknCwsXCK84ajf4GapeP1rGAi958ZHMGQAkiEsjiapUEsuzJgT6sWks1sa2HDZtxm9zCtsQfUY92nHo",
  "key4": "P5u6GLJyDfnzMeE3UxTpyg4yiuzunNcxP7gJ5DCL1RXPLaJTcU3itiCwZUPzF1FKPoj1GbXc1FrysyRsrCg9tZG",
  "key5": "3FArNYAZra8mE3zojhS8NYaaJJnWo5AvP8JRREm55gSwFaQGwFwz2YdZUey36PHwAMxE9fd9dc8FVij58jN4E3gr",
  "key6": "4Z6dHBX7jXnRUCrMrNUPtMUmX3ovhZJEF2nwTUGFcWVec8yMNnpeoYPuZcjKDUadXEDzxX9ZYNDGd5dpyCHgsoH4",
  "key7": "2CG6vyjiEvoE9oEyQFxwZDGCtbvFeVW8wGvy3zs8HsX4izq9xkikZBFd2BB6ukGESzysaUo3iauMipRqTgws93Vd",
  "key8": "39ArZ5Ng4jJq4fFCRAsdT9bwCvqxXe5oXm8yiVwCY19TuSRU615EYT2vfRLXf1h8sTkt41a73FEQwCAytWvCRmyS",
  "key9": "62w9WzzsTcVLd7z2bhpYBhdMWgrjXDjRcU4KnWkhxBbSiiyJJ7ipacG8G97SfAbz1wsTzxj2Gn74pna1vVpgVqLp",
  "key10": "8xt9rdm95f4mK69PvSLxQk7jhS3kW6bU6K7NeyHd8Nv53b1YFKqc5BcV4M4jYSuNMT9awN6HjbzGD8YSWvweXUC",
  "key11": "37m6xGGCSbb3b9VykPbVTDg8F1KrDtiEkpqpbWHaDJyTt1fdsFDYax5cRzzZRVgBTPpbbuXgeDjFT1xUiSM9YFfu",
  "key12": "3RmK1vGUaxyLBwhGbSy7aL2zgb76b6d5VWu1k7s5WyZFcStz7GLw4P8Qzbw1Ai8VUUpGPdc3b3kJuTdkiPRjeWqi",
  "key13": "2y9dmVfKM1wRkgVW15jR1MqEAQDjwuhCWS7fG5py7AGDvbgZaDTK72cC1fZgAwDUJpcs7QXjSZmf2GNVMhaj19VQ",
  "key14": "2DrDJ4kGC223ztKujyCY3qbPZu2CMmLrvagUAMVvhEFRAFj83uyL4mJfbMccVJGy7p66UNvHpYp6EwSz6FNENCGR",
  "key15": "4Ezwokcf4Ra8G67Hfn3pEAMLKCQFjQwW4sneWeRp4gmUW94Q4hkPfc8DW6DQDYikwnDCGMPDYDwFXCMWoXwyRC8n",
  "key16": "4zo8FaRu7uH9DyG485YFfR6FK8usPHddFCg5BpYpziYkgZDTyS8Cy51t1E5YBz9hNusCkpT792KD1fQJdx2Ca6XB",
  "key17": "3fqTXqkfHxGjcF3Y9C8N46AqhjZL8zK6HBPMqWj571FfgXmrTB66chhR3tkTQ8LoCpS2pbg6rC6f8Yp3VWPckSgb",
  "key18": "3rNKaMw7wk4f197qv5LmpdfAgp7tZHhk1aTeNJxMxHrPxHZcC1fojX5YENrnKTikPJijqJoG5KQFX2sFmaa1zMB9",
  "key19": "4gBBH3rc7e5ewWpvsaJrLk1JxMRehdRFMCCNfmqrzLe7CFUqsKKen9j7UoDMS8rjMPdtcCgykv1c2PKMSnM9YshS",
  "key20": "44q41METDjxXrb9SCL4yyYcUtAU1FsBxtMVpKibEUk6PVdKh2yPh6xUkakwXAvi3MrQAu7oXRAdzjgEQHeCbF38M",
  "key21": "usAi7f7Q1ePsJtbJXwQ9KP2MvyYWC8MmfQQntx9uRuD41TsFqFqjU2JY4Ak3hpY5FMbyiqyRBEouCjEaEvx5L3Y",
  "key22": "2iVtyjfvYMe1rcuCpzDwsR9sxtVDNaTjcenXXQaDV25ZhKbzyhRs3xnJNXXJNtfRB9HBhg4cepyfVDtx1TfxxMKu",
  "key23": "4k4qC39pkF4fvTcCKVrRjvQDTfA8V73PJhzejrBGtzhnjfAbVfsX3gqg5cjLsfzWQeo3ot2DPiacGGA3MTF8T5q4",
  "key24": "3dmHBSTXtmnTJTD5vS71eQrxrJjvtGbrAgk1SXRzVPMpncKwhG4PuzWkNMRxbp94Da9q6Tw4soAymywFA4trAi7L"
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
