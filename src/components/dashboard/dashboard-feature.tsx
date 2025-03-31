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
    "5nztqKCRvncEu64n2A9F7LVwWDWhQxYiK5xbSZEyEv3S7j6Tpicv8gxFPxBcuCvKNGY8sJexJyhnopVQhnHh3vPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646BHav4xd9XhMNw4edbEeh56nHuEK67LHXyAn24wSaLL6QzoEYzXmPbVeVGdvVi9jD7pKrKQ4RK1d22EAvYmXq3",
  "key1": "NpiMEudxWk4rwMvtuCGciLMHXtH1nps4K3ijjWMvnBrSpyx9mMuQWu6N2kZrnG6thrMrzGSybsUK92LyYGiZpbZ",
  "key2": "4c5G4xL7ZMGj4YiPSMNkPXfVQXcwSuefxHmYJUsxA9o63z1yXHu3ncee24LSMZwTuuRYQtsqKhnkEvBFxNZt79VB",
  "key3": "5EfgzrhW3SHUnbbXjvTYnyyCNyNRwDaaSdoNSaNBt9fAxoGZJqDNMgxbBnZUjsv6SYZNtS5dpJ2KChZtTqpGyUfG",
  "key4": "5EY2ScncaXFLp9VEcxBBXKWgAtephHLRQ2AwdDjuKiV7NXcRGGf1ACyNSMBnnRN5vahTcvZiz3wLqXamygkuvbTS",
  "key5": "2BHv8MviX3UYjE83BSaU5PKMs2nhrTrJ7i1b4VrJu7FZtKunFPHkSZVAp3bUqKMCjtoWkPudjxNYt5bm4iyDf5ug",
  "key6": "43GbYm2U24tyJHam4pprSg4rfuuMoyghjpFwJGcb2pKMuzmNkb9pAgAEEBvYGATSiKqzG9AQxHnLykLHGaoHjJhM",
  "key7": "Co5PqWt5aL5AFJJVhshzdmKu8fSMYc3CmjLzB6ZY1RrsHAFqiaDk8tx6jtvtEeTQpR8FQEpFWZNk33nHmuNCsva",
  "key8": "5NcweC9xgAFiRbYvqEX185a2SSDqUPTDHYRbwgMMemDmw5YpRnDLsPeFc7cgHMwg3Ns8zKvGmjsFbawfZxUcbrCC",
  "key9": "25mVT6dK96a9pBqmXwa9B7sxGPYwpPvcnuDHebCRxyCH96A8XnHwrDo8L5JoHCV782eQXqu4DeebqyPUZQpc95EK",
  "key10": "5AWTtHBZivex1xrVA6deArUotnguReoa8FHvh5QkQtBvmnPzakUF6nyLuK6urabBuAjhCU2KvUwYdGNKnumZSNoa",
  "key11": "5XP6qLEccTqN9EM5qZ7MLFpSo7u9xJcHEAfPtBWp2xxoWABkGUHB9KrohFnAAuU2Pm4sL2AZ1vfWGcN4aVf1y6DW",
  "key12": "5sY66az5m8N1BvZH7Xt71qGYHFMUj1kD6dCtgyc4CR1gnkdnsBgD4FABjYGhnNtEeiJGaTBgGmwyn4uC7V5EMXen",
  "key13": "sffAKsfNRxEK3Yx1QCXxdkqYZ2qREYNAUsigBkpHeYCZk8aT41QdcDVjKvJMdKxLFyaEyShkaw4bR5vSU12hSc4",
  "key14": "37rdNLrPMiuGm7y3FHtMwbJsU7gvgw2Y9q3Gx4DnV7dpbVfbPX65rd3Vy8YKJoC5hwHD1JNfzWRbvyKD5NHuJvPL",
  "key15": "3WgViqhxQaVqax5Ku5vrzWYYwZRB47CFG1mJJ5kFDyo9cY3yzcMVsj7YAQjXEpwJkPMTWCVFC8J4HUtSGJNpN7Ve",
  "key16": "3ajggphLhZSiVzegWuZuAPwri8WiSgVEUMQAp4FgFGj6ivwrRPJNKKFTDp6XNQkhH3HNh8sCz3ipdoyTKdLMNqS8",
  "key17": "2zqeHi43YSFLsTBsW69zGCWEhUpwwz5K7GvBT9xz9KWMfTqSu2PxfQmWLb7SuLgQ8UDmsUmegK5QdWeWmWpQuo1m",
  "key18": "4mUvZHiRwmFKB22eA5CVQNB2dKXUCXr2VQKTvzwFHnhuHrhUCNXynG5JGPvzh9ss8bPJcPetWCXErbixZ9ZtYDLC",
  "key19": "aWk5LcbXzeUVdXbji6TYk6qumnWUtK5pi7vdL7SGRJdMrmngtWvE8xJumyJKQvnLEng2pbCv9y9hAKQJoXPVu3Y",
  "key20": "Vmor9MrkcTJ1Gv5UrKjehWFuHTgEu1wE3KXypCb7z9mLp92cNkdVLxaECF44xxUmuSnnq9sm23ByYUDZizeSwrX",
  "key21": "soAoHZpitPovbVBHkDrGrLp1xcbh2e1w7WoukwbehgCc2SfzbXu8ghgsWJLiPKTPwAQdhRLFjDKw8GCNVDth65N",
  "key22": "5RaKM9uB5WZq6Bj8Etwbzs76reBHr7c8zAXQRauGATaQmdPyjd52qv65PxsHL51XjY8hFjwCV41f7RzdocKYiCeB",
  "key23": "5QT5z7XmMJCRbTn6ZydVAM63hRiLNYFRgZSf5NYWhQH2eiuTkqYg75jDufVawztZQvLpkRENe2bgZ7oG3c82A5E9",
  "key24": "2ZvnjwnRCNbgE6SJDfeMzWPEsSEhU5qnA6RiocpThq2FXgWE8GzMtfV7Y2J9Yaqfm6mEcQfP7gYfr5MmzEVkTCfJ"
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
