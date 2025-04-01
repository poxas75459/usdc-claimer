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
    "37V1wwunRex4uLbqnFQHcZoxgs4LgsL9zotfM3AFh5S8jrA5K5Kdi5xrN8zZhqzxTgf96yNcz6HAbsk6vHPQs8qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cr2kk4jpsz2Wu7cyF6M8hLNDf7mYtaLWM2TKwsMk5widj9wcz35yUqA8Gkp7UuU9pCK5daBQwSG8wDxFdpHT6v1",
  "key1": "4nW6mYhKcQ3LuHYjUtUeznvYktrq5F3MjLJgAMLQa9vLmr9bRPxyAG2Wrcx99gU146ksrj8FJvMqBQsiTjmvXThE",
  "key2": "3S7if2UenzhDKdtYjTD81NekyXjRprB6om1vPc8znUte6WUSrKKUUfkdkKPAFkacjxJhKBuVT5haMrrigYLouBuX",
  "key3": "4qs2EMdfzZVTQpCqaswwJLsfTCzZd7AHyb8CtZhWK3gjQon1QD2DF8wpoTjorU38rAk1Tjx763r68TnkKEAxTx7J",
  "key4": "GtPXRXmKt8FStat6W5hkrBK4u9bvfRNrNiVTFd7vv2nnqb6oYm5tGejtHnYN5aht2EJkJhkbpqZFyc7J3u1LKBw",
  "key5": "4Sq7hxa3opHALmhjxvp51PxgzLKW56FbDNDBWivqXs8ctu4jJQwrRWT7mmLTA2VSGj8SsMf4SdUwjjjFm2gxZtRY",
  "key6": "3L8XQqyr5BtL2doMye3s1bYdxUQqBQtjZbjzPWLTfedY88dmBRiyQCKVvkWR896nPYPJgW8XgFyg6LRiE3BHbawu",
  "key7": "5o73E4aSP5tH3nwFt36CJ4mbxi8bxYRhU2hiKfFWS6jGsL2zPh8myYp11aJrdbmLncL1KD8NRdktmi6N3ZNxrbiq",
  "key8": "2PXCHUGcRCY5F3hWhfGaip219FiBz9mUtiZGEtb6ngoUjJEAW6ZSRhgt4RLvzfB5X8kQ3PGCFqp1FXtrJTZWwkAe",
  "key9": "41NGnv725ppKbd2ZDw5uVVYbhhaUzoGkogbFZH9bNETcTHWgdNE865b4HHpkcjKgobGs5DEdJSrPqm5JgfXjKetj",
  "key10": "3EMbuUf3vnuUzLxufwFbVz5TLCU3j8gvYBrycLynoTjtfC3Gu2WAuyyNdHybTCugpFyxYroKWGUY65QsSot1rGv5",
  "key11": "4H3PYg2aGt1W2xuH6nN15iueaFZyTHftCdzfMdqGj6j1m75bDPHVcxPVHQzSYPSohsa8V1mMtwMMHvkZ6k4VY5tq",
  "key12": "4Yoo2HqdVSyfpgcA1e8whVwctTF6ik7VzXM8PgJKW1tc1ZPMVmVm4pPmzfYoFN2qN9csCRhiSXPSUnvHqhxGqHAm",
  "key13": "3taTuJ9LPb6YWEoxihSpcsCmooz6qePuSfptFN7eZcvWEAtGBDt81BpJMbaqYrFQeYNGFKh3Ftf99kphFcfm9HwR",
  "key14": "4iPSPZtzp1yBnnoqhNUSSMGEmg7UyEsfNG7D3hAswXVK5P1o4YFmK52kX736hCxa7AmaZyYJ7NNSdxcS5sHpW8WD",
  "key15": "29pjDfSQ3E7brNnQZHjfHVVrpksEvoRCAfMaiMiPhnVaDNQ39V338gsfXLdMdJaz6dYbVhwocY8zPhTjNVKce2Uk",
  "key16": "5H4GqNAsMgoi8VVhEzksPsiZxN43kVH62cGxYiEDcWCYzPthrTEi6Fjnp5KiPB9B9AYCYHNLFHfeEThHgZ728Rrx",
  "key17": "2getGX35VKN7X4Wu7zrhk3vg2JtabiGE8NfAnPr7VcbFE6AjkoiDy7quqYdyDx6j5macgDJQby1kXBokD87XCQJn",
  "key18": "2hXRbc2UhUyQYEmeosq3zdjERcbpsSM3uP4tzwTQc5h418xxRkHvi3h8EEMTaqfMpoQ4x1BkWPVfPTSUGNmFkkWx",
  "key19": "54sX5yVD3bTmoCPav5rrKLJUU7w7KtBUbSJUU5QezbHwL5a4ASWwpTmxhuBHwdMLuEEk4wov2Q2yBVZVpeZe4eR1",
  "key20": "3sm3xcdHh1EfjZzutmkhbJ7F1zyqHUCcTLDiYnRhT1MMdJmvMtPxm4a2njdBDwe38ez5BzJys8CJm1ycGQjPhGAS",
  "key21": "3WuKe1QrV7fNPWmsK3W3dueQsdJ3JfBDJF2ubddKdYtV5Kf1KTmcgjMLUwC8q1H6ceNFma6Xm6wcnSboUVWBGWrP",
  "key22": "2ZVdGDiN9tfs8zBXs2dHknc7yvh5winbry2P8vx7MyLG7B4Vcbq9cJG92y44gxWG5NEoZS9jk6QE2iH8aZ4qttKu",
  "key23": "24z5HNV7pABEYkqs4ogcsGJKJ5z3GTdn2kAAXeAjfrb48GUXzZHJUsE1Akm8FNRmNfPNyVASJLCZkWL9J4Rf2a39",
  "key24": "SMfsBTHivcJXXFLF7Q65anshs5V2zEnZX67zrrEPPsrLxLndhhfE6rSvtjkBkLCVsDqVb6pBKCWYvUwJuNZku83"
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
