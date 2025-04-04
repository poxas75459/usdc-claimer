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
    "4VEjM3WkQt8eBR8pDX3tJCZifQ7tujzSphDtvSGjj2B44K4ZcFekPM4ZJUxeySuHa7e9dTEmP46FVGeJ3ZCjxvNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtaoKEiXBi8cLrQQ9YAoXeMkUaWCbeb3m2PXxHR3NFjH8DgrENHg45FSPENUyVwXP8BiPTC8786jJBq7VsLZGL8",
  "key1": "4ED452pkZpj6PDwFhpjKibMuTUnJPWTrZzRSx7cJ4AjrDgY4vwmnazEUjvAGVCxMPvMwmqGj4iAFwx8GZn5e66hh",
  "key2": "3c2oXXwrXVyvdkYyB9uLgDWunZv1KtP3QayeVQBNVwTj1ndKi1YHUnWUiLaLZBgCVznGZ6mScYSbKvA9x9FMo2zY",
  "key3": "359UJYjtx8mTZxkFygNpMAsbRX1gU32d6ZiM993BjWYVBoS78PzisWRK3fMvTJdJPaPy9aYHuHScc11aJEfuQZXX",
  "key4": "4fkxwhdB4mCgRiEQEH5A48RA4gHiw6XK27Aqmn7Ys1qz8DvUEZYUZJD7iH2ymFTXRwEPVMD1VTKW474hWb4QftU4",
  "key5": "sAoRtFQiwYQXbyoSUJxxi7LUoDBqrx3r3WVBsGgXyePcgsn6W3Cb6wuF8QPoXWqVaYTN1qzGujxAHG6vT52zsKG",
  "key6": "42AgqjVr4gU8KZMucn22Ka1Z4bTJWLyJUfgBkmkKwugWvWQbb1D2uR5W52n35YTxKjcDqGUkKUqt1QLKgVJsgkxg",
  "key7": "5ocDiPU4wg9DpxgfjeQKX9mSebkx76CbjgLNDuP36NAAtn18umfXCdycVQqrivcdoo6XHJUfpzJ2tjkEPiKQ1E6t",
  "key8": "3Am5NczmPJbLQYWmqT3NQSBZw6ePX1FMgKVnH6xdWAgpCMG5wemkupcRbHiAL98rKE6XbjY1K2WdoFkPjF55raX2",
  "key9": "3pTMBjzoGJK8mAytJ9HLLGKy5YLSz9Y66Nk6y9vFvaJa7M5KbakPDuXtZwfn5ivGJsgwaUgYnCeTxzgQuA6kr8us",
  "key10": "545edFoSQfU1xtLrj6oPn3WJYD3GcwETgF7jomUGvj7acqfCHpeucWiZh5xo7PVWYWDPtRqcuby8hjo3sdahtL4x",
  "key11": "3BAgxirWY9R74YzMh2TNUFb8Qg387gEXpv63o5uJWnbCBShrD48k2b9XTnK4SZhCjjbaRhZ1hEtrRXuGhfHjYS9n",
  "key12": "sNbMGa1HNMVGVbfkdgbPTf3VNZjR6T5cgANpAp51nT1pKVtR4LitoZNPXUPigniK1G95FyCEhqGu7YSMNzEtVut",
  "key13": "3sLbS7cE8Tt4Y4KtiC2unDoXxY5hQx63CXDLVKX3ytBxHg4R2Vu9ZvbfyNnbeFaiHYDLm7vBTpjzs2JD6aXxRbpL",
  "key14": "29uzzuSVVqJYBsBom3npsAxNVF5y1nMEEzwaTWoEe3QRE6LypS6RhbbdVB15ifZpf45aFrjvuYHE5ez7zVBYdKT8",
  "key15": "8D8A7cFJ41zm94BaYQ3jzKno5AHka38aCcyoFVAdbTfBtMbt4er7zaLxqqiHkfQ31vVZtcBJM6DoyuMctTbMD2o",
  "key16": "2xhVGQv6Wvys9hfJho7ChPR7Tp1Qs1BPhhh3RAYN81Pc6p9R3LKyLjsPrd9mMp5oDmUSDrHwTwr8H5BJNngWyn8c",
  "key17": "5Znz1LU5yHCpfhmxef8mNEJsr9gBTS4dqKxBSYXKo9xS4j3abn3TWSiiBurzRqYsy4mkndtTxMosdcWP1cT7Eh6m",
  "key18": "2q5yBvSJkvtKWknYeJ7PHoVDGoWJx7jRbYePr8HPijFbPuGR1iwN1D5B3W7NVM3JtoVmm553FkfyNjHgxSmQNym5",
  "key19": "4vbkfc2p3P9tAKFadf6SffnH9qfZFQQ2LXXiVtQZMgu22Ww2vQQxDkvdvuHg43SSZzw7Jq1PL1TRVnsHKxFSMgKg",
  "key20": "3EeDjp1ZxEWByMgBo8GCUGPgCmd9TH3AvwWUDbUXZedFJCigPQMhMb3kQck5g56njpuGBeqkBaqQ9B9yu7hUrEJh",
  "key21": "5QWGTKTrS1woNP6CacWnoaENGtY4aHiBqpQcSkhWofRD7jLZXGwRS7yAV3EVuSGDCaq3vB5MwPZQbiCnSbwpdttN",
  "key22": "5Skm1R1synyveMxAusa98kVmHPMjfsPmNgwZk1cjTA9ceX9GZQ3HTxobAtY7anVEoQ97GQLZKMQnNp2XemeC1HE5",
  "key23": "2Cwy99J5qfjZ2n2oxmvG7thS4wXKdBDm37EyAPqHb9GQXtHaLA2VVcndsuZYHpjqKgUQGSkPBkmSSmXcZ5FVZ5er",
  "key24": "35JreJhjrE1h5PkJTr155M8KYXjVo7WMhgvC47g28HhS4F5eDcwLMr6n5s67VNbud9LaSAtzLKvMcS39MVFW2nJg",
  "key25": "33fzL8HVT8BURr7iYTDqrxxFm5minUFGsfrJWaCCT5Bn3RPBUKW1tGeFnzLgwVSMRtPfAJaHQ8saCNgcAEyttpeD"
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
