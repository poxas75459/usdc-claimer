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
    "4gJzkSQeTmjMgaVbdUPh6TDpy5J3f7dsLdFLkyXCaPaTU6fPgSNfnrpHwxRWsiX9FqzbiP6nggnZ9L815oV8FTAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUEKnkFvv3LuSAYv3iN3si76MZtsPvwsuyTAkri67rMKkexEjdMezW4ZGsRTXMAKwY3DtUpEovwJNUPUH1SaYUo",
  "key1": "5wisxGFekdVS17kDYYrZCzwvpDzZ9UkM9a93osXKe4QpAiCiVMChYbGT6jbFt9Zt3rLK7xN6iZiz4wsyxjMSMohu",
  "key2": "5fmnmA9itecj6MAvv6Y1KLr3qBnisZLXDqJzJCgJUidu6jGTVdwe7NeFuWEC8PNoP826LijHEYSarQhzyeB3xU8a",
  "key3": "c6CaEHbEEPv8tXtsyNHCCEW4bFnqjjH7JKGDzdVrfuytBoaza3zFGkvdGP3HNFU8hz9dx8QSYGccvNcnfAsr55L",
  "key4": "emAQD8sRqmzhzbpu2Vs6c83pDkKXuhEds7qBY4XZ6xx236st6uQPyPGCvQFbP6G5RhFQ18DdGNtfvT7ucFFDEBN",
  "key5": "wz8DzN61ggxBHmGsbNQod1oS9NyBmxSm1qNLv3HYjT4iyT8A4eCRagd2e6fCPzEc1wscVo6tHsoACuxWrJhVWB7",
  "key6": "3TL2KHqEs2QbVcc9quGSNj2uyH8NkAc9THk9dLR665z4w9Buvn6JU1rP7AiJc7wXZquG65M3GABnnH4UXcGxr9r9",
  "key7": "2eqJfuP1iYTSkMVkFFcU8ydoAnEgLeX2HU1LULsBbGLfXVZPDJsNgj8xTfo8mKjiK8NT6v67PjdGyq1YTCVyYBrv",
  "key8": "3jtazVYxyVoVmHHdP2z5ZduDdmUrudM1VSgtahmTxSLdgHYXtJHEv2iNr4Yv9KX2SG3kTg15i21xMrYSBDHGVi3z",
  "key9": "4ypESik9DHt2pZKxP1ejnsrKMq64f2Q2tbL5zSKxYLzWmWiWyjUxCwxyDRknQiCyxYQjWNHksJfqJBxGGYgqeKgu",
  "key10": "4CR7kXveJXvcNUgxZXJ4i45twsxKAzUEpytt58gwj4b3kNzGTngShCsJuH1YSVeDJb95GoM5uQtXkBuHDLLGpTSD",
  "key11": "4FFwQRHsAUGho9wSM5VpnbdLwwjxbjMS6gN9k1aKZW88LvxXKHCsK379WVum9bj3YXby6bk1F8CJr18TKmqctR1p",
  "key12": "23j8nTKenpE67XTi464umc3Htzamyxqz2mkGZSdP8h8fSvndDcYFMBX6kTjthBA895Ge14L3bDfAx5N3EcMgQ8T9",
  "key13": "2oSg8Hu3ruPx7VazpjKWq7uCVH7ZXotFuTvf3V1QgR5uarXyGoUg2wCSYu5GTeGcmuG6oEbPqpzZaoBQa42QvTg8",
  "key14": "5VHdk1Y9U35YDuho4mJpuUjCTd8A5V1NhSbv7bXSBMoM4yc9zaRumZZrhVgaBcXh7nXW1AuxBF6wVyVEGfUH45yP",
  "key15": "2pnZhiuiedS8EXSYKg9de32yZjbx8umkCKfHb7K4r24F9ErCMr74oJa9X3Pu9DFL1xFDdxMgppaGpDvwRGxV8n6a",
  "key16": "2qRu4Rzq2GjwdLV7UfyAFGVZLpzpv6XJszii3hkCUnx4RFQk5uGR6Xy61Xw1NVe5ac8mVV9hYmArRrSc2TricEog",
  "key17": "qbgpG8DY3CzCrrteU4MyMEKspytgCfETvDrX53r9739D5JirES5dMvMpsdDqsFXX9vfjZZpRmh9YrRTx2wQHMps",
  "key18": "2gQULFsBqiu8SUxkZ8eA2ooK2RLWF7TSMC6JwJabTsqfyV4zgFeyyYCh9HUjpBJdysa5XnofDjYbBCtrRwkm4zjc",
  "key19": "3b39V4dRozf5V3PWEzSxr2vfhHT4vjorgKv7QyFqS9fGh9AD6iYcZJZamAMLRjEqqGZnrU13o1LPZ5NkpMjTeGJP",
  "key20": "4RFL7fpRLSSkY9366AYvJRP3q9GLTGwFJqq5npLTCSGm3M7RLDYp8hn5eEEHSrGYxCNggFsynorByoeTnqne3dFr",
  "key21": "5YPQBj7XckKMNgomzRPD2NxdvoRq6P3C5bp9RbkQgRe3xWzdVCKbf8LoVqbPV61HDA88zg7ZABdZemcvPPKeno4e",
  "key22": "4NPVwSRWszYdshUkBVqQ94izggqDgPEcCyUhXd5MnaiMNtzxrJzHDDrpwcnnRh7hsvqWDLrmG23owSN6Ua4cWvNi",
  "key23": "3ggfU7QDaYeWcZpF5YsyfzhzeWbi3xQY7NKVwTKEUWEtKrxqnKDa4JqUdGRim5TjthUNgRscbhN7iBgKE3wccavd",
  "key24": "53qPFJdWtU6YuB17RNyj1sxnumX4xiw7ADqaddwiLShWNo4cGP71Q3BLy7QwrkFdP6WQ3WFe6qXeYrkytqwKpghh"
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
