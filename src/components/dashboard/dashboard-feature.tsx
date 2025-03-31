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
    "jT2CG5Umb3mWrFCkRGFTg5iuEefdS1cFiv42N2TvbLQus2bUpkvrrf9jxR917xPJcVrr9zpNuJkKfAduwgzfxeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2198t6wR2khSCH6MBDr6Bar1LVKdpr87W2Jm2ncbbpPcmkn2H2DoREebdGdw9umZPbCXMAEqC4QuycS2JgTiuqWS",
  "key1": "62HmU6jogTLug7hj18hCKBGpiGgnRM7xgcYxLtR6bJ5BDRaLUcra4K7dCgX3xhBNazPpTRz2hf51rX6kVgMLgQaj",
  "key2": "33Rx4uZWUfTZQ5dwjVt6D4sZtGVfVRP3Sjfyoxrvp1M4n1jWojFtxkbQGDy3snaExxe6z8kwZSNDa6Sd3gvaL8Sv",
  "key3": "42dZMYuWXrCwF6Rs94N4tVsZQAbmUcYCpJCTV378jvsXWSagoZN2RbYKXxzmhWyqUw7gawfCp5ywPG37m7hvRqKm",
  "key4": "312d6RAh5cHykfuB9qJ34hFXxy3opiUa5NZfLuU5b7Vw6Vycv1nYH1Mu5HK996RpyM1se3TpvTZaS48sXA153xiu",
  "key5": "2KyVcY3NNi4hke5tgRwA12DVqPm5suo263xFLk3mGZsQcihzTwrBQf6tPgHmCeJscErvyHEMGoZwLevJqkzNzLEE",
  "key6": "Ctcd9vuK1GiTeWCedqTLuubNNbVqt95r6hDkgKUMgS4N1EsxhsysiMmZcHk1nkssNabFgsHNGCCEPQ76bZHGkTg",
  "key7": "4MDPycrXKQQqoJ8oLWpC9KJX4RLLCHWz3YEZZGChvYVVBnJEZDx87dJBFTsLVKj5rYQ7JdgqGjebik4iuwqK8UNH",
  "key8": "2Guf7jjLHNSVjMdRpGdBXJebcGnZ8VAS2fRswr9XLXzgSi5sTnVtNWsZJ5hXPZ744rjTYjzDytuGZCWHh2CAP26P",
  "key9": "36iafvL4Xb3MnhqqodFUBGYHKUK8TSxLKMy3qvVV4nKbftd5MXoacyd2fWwwBmGLxXoFdzoFLiYxEaTLgUK2Ynrh",
  "key10": "3wSxD9p9WqrsjvbXy4Xcq8gUxv4zG7ZcHXPcYPCBKZUtkvbonyU5TWW2UzHZP9qbt5bjfputGQ1Axff8nDa1Wvuh",
  "key11": "4JEon5JJ8Z7ebJc39j1sznfsxnrQJb2MYJsk7rZZxBNGdzT94yPYY7KAz5FMj3SqTQc9ZtAULE9J8aW5SYSmKnvr",
  "key12": "4fvQNCDbJAyC3qacr229kNFP5XMQJaCtgCWAaVD18UHNnBnh26NeSUtqZvGAyygoP92YWjrSuzg4YbCbjG49getj",
  "key13": "dremwB1uj7DMRPGZjNost7tz8uxobHhJoZ2Xaw2FdtVWNiVoVP2SLMgDT8WiTa6xRaN3nhEvSWZsEXuktjH4Esa",
  "key14": "4Nw3wLVufpZbZPrpvFhGPJ1CFUMiN9eh5sdvVYkeaWoKPwN8mvuevR8kWYp4Nem1AZ9fHD8DKgoYydtEPivd7PUU",
  "key15": "5oqugbiq3mW36gnQiJeq6Dph7FBRJdjroVG4fuoGD6CDV479qoj1gRJesrVa6k8QCrGY2rJ9p1NwM1i6aS1BHNk",
  "key16": "XGa1w2Q5HzFbnKiDirAYFSEx1D6QHUZTdTWvP6VUgR27XRKrbhfYniaSrMsGRX7kKps8wzbQf9xLfoJoUjdWFmn",
  "key17": "4b78yhtPij3FannkKWpLxw7tNnM91edQvn5ojvrJGghdtuRN82fr5LabdFFX5XuKKDPGiw2ZhFut3NNXhS9h9HMJ",
  "key18": "UEuXJnKW1W9JaTVC9gzCYupHhhVrTCncBckDJzuQB8MVbWB5CD2P22MyES1DWJTkVEtGphHNWrruTvTqWXBFVQN",
  "key19": "QMHXnLDj8NXGtNwSNCUbdCx5ZbJsxYM46rJywCE3De9j53fm2CmW477keQiJEXPoBY1zTUPtxdWhcaW5achqGRP",
  "key20": "5zu43AYgAQB2sx6cdFSCQCKPo939cFiQE4EdoEQMqTBf8yeW9ze8gkSVM5mmBvf3SM22uLyTxfGz8sNejrMFJZfF",
  "key21": "2ScPVA4UZcae5sGGmioVjoJWH3mrfZJPELuAiPryQHtb3JHdbBoUAyrdhNyQre3KiSrjR3Ug5gf7y4tHMnTeZnt9",
  "key22": "2GBqGcfYcECAt8cPo8zuipRb95ZtCEbWWyRXfJmQcn8GAYTfQqqMu7HEVLX848SesrgMMeaP3L3nYTXq3pcNZJU3",
  "key23": "xjGRcjRHWdqXT12kRWvVLw9XLaVPGXyWz4D7sHuXV2uUwzXBtL3MTRxz5daA2faSKc6KGs24uQ2KJmUs1AAYhPq",
  "key24": "5a45GjqF2czixeemvVZVcpL21yWuvHSDSVRnpVstHyrQvFoW2GJPKGax2o4MjGstnBpvdXjt97L6CgdnMHncWqGN",
  "key25": "38uHrRKTNHupYY7Xf3fmk4asXpujLrvCaie5tRVHZahSatEKTN9C7P1JbgLCvR9dB5oeWsLjqmzXGJsr8E3tBxBQ",
  "key26": "3FZornBgYcnz26dQcDQxwYkpGMZhnSV762rSaY1ahFMyFKgrq6Q8SVKwkcj4tkwgma5TMo9FcSZw3JXwY75YzRmG"
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
