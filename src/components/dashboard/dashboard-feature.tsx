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
    "2mtV9dokJ4VvtR5wzoQcrw2AyHzFpYkriA29XGGErqCZDYd2aTkhwRwzAijtDwQFXjtBYYDfN2QF7UeqxgNpPJxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pVR1noxQXBNJWfLW7sVYY7z8j48KZpHaR7FXw5akXnQ2V76JVo8PAataAucfFb5g4Cxjibkfg4vwxTmwCeDhGqY",
  "key1": "s8Uv9pwmWW7Wr5Xf4S1tqd9Km6BXYhocejGVUHTfVaGJKtHe41TNiNseeiUV1jsatMfa2WY6oJSyWbDvwwoEHH8",
  "key2": "4KL9xsZsAfGMHkMMR91YPzPigrsAQr5gjqXwuahjMtjsBd69FoU5F1ZHghaYieCPS2i76HsVemnBCrePVsA7ooJC",
  "key3": "tbn6etAZSPAJr1RMPJmcb53MoinDrNuS9HzKdyc5hViZx8Q8ZfXosUiGLzoRm9GDjqSgsG2emkLdUZGzDKXoax7",
  "key4": "5A7AeAxxScL9j5dxZwDijnwFBpLqR1Djd4AW7fJ3YrdZsPud9f3eb3GMq6y3tbGT7PPcFPfECsxHgGUUkb8AYuzB",
  "key5": "2S4DyVEup5pRL3LUWdhJoQbngAXQpBdnJZhHHM1EsfCagY6J1ZCuKejN4qcNc4o6do7dVNeNzR2EhoSN9dd9TSDq",
  "key6": "3Wj8zcQS3bpq253aLSixuWgChWvCvQ1qtrHorzcdwgvYuNjddERMeRTJXCnvTmgWoCdvEfFooYDZcxDBhqZDzFaW",
  "key7": "5xkJefB1BeJfPK9HnRzDcJTUm19osMnpTrd2AgpoD4XgKgtd77MBZKLdFCVYRNU8m3RYd1eoEi8rUZ5Z7MpwXjWQ",
  "key8": "aYtfTaZzXbJ8zMUzxcvKqCZogoZNg2wPVfVdh1iFTPofBFHQqdtjRtRTKsGUn2Fs3q4zV3kca1WpDRuUsBqq2Mh",
  "key9": "2LuThisLXAW1vLPyrtw31xucS1wqp9wkA6gQYBinvJxGiEaFDYTuCWVhy5LfxiGv8CSjfq9GrJpe9gWjzceZXaAt",
  "key10": "qSsfFzscCSBQCeqmtSx4Zww2JuELA6pXdCykVdD8mHwHQ7Jq9SR13oBUKzDXAVU2Ly4jxzXTKaiCsHnXaWgDyS7",
  "key11": "5pYoEPzuuC2AtqJWVYH68mq9KQaSHHvMvdNUu23NLND2EPnG1wxNre1gPzZUm7FerHpGT9Zbr4yT2LJq5GK8Yg86",
  "key12": "2cua2iAE1juXCnMXTRBkqxCKsA27q5aPvWBMJjwMJfpj8h3QCuYP7Jx6B9pT15uD3WxAbQ5J2gwAfg1M3XPRrsYk",
  "key13": "bV1v5BRN3EZBqLiaZZwq56NWAZZV3oWTq8rwPNnQVQoMBqNNrves2bTVJ2nBpSWkmkg9UUs79yZ9jx1zQ4goxxz",
  "key14": "3Kuv8eVadWxa4PY9mpM6zRhJoouR1kMaN6VFWsSGMa6LgegcmnjsCbwXVCfozdMpoQ1PJyoRKUFzGfPPdguRMTmA",
  "key15": "DUCMxL3NEe1RjmnoniUQCJeDsUr2bGFfNXb9qQSxxiutMGpi4yoE1ujsUuujd1SmUvm4czJizsFjZ7RaJs9dnRs",
  "key16": "PosyX6hfpk8Q4aRQobrfE35wKn9xtt3EKoQuKnj5rE5vFqNsTgrkg882FckiaFEB49Dt6rXNAtn8zxdChfJYVXX",
  "key17": "5MkdkPmLES1Jr8ZzYzfpbFsHjeCEDb3L6puk8YMUAM4NAEd1DqSngE7KU9g5ZDQ1LUiWKG5YEnS4ZnUkfdzaWmfM",
  "key18": "2AktCraJ1wkndckadySt9JMk4z722SHJSvQENAto4yUkivsqoSNkeifxNRffqhqacB7udTcsg4xrWsP6wWguZLJL",
  "key19": "65Xfx33fncXhSZFMk73vhYwSUuxUah4FvCUjqcnxBmnvNbbaTSoGucMx4M6vayt13nxmLCQA6wq6D2bZzcwRiQsv",
  "key20": "2tYGugTogpGJdi1Hz5xzZz1A3C6j47onKoKZZXMKofKYDU8EG3qTdaCtPaN7KUW67HxZM1WWhmKKRVgzGhmhqCjH",
  "key21": "23SFDBgER1MVAfXgtS4wjAudf4CGgwFeMUuHsJdPXvFumq3KgmUX2qeuPQ7wFZaW79gnpT3ZNbBaC7rD3szhGL3A",
  "key22": "2bEKpJz8jVLZTD3SKZ7nbBkrh95qdwGZa77s1ojKXuMDUK6rWiUCacYn1dHqQqHwXv681hWUw6fB98am8dDdseRQ",
  "key23": "2QBDWpFKLRyBZgbLRzgwszbGizbhH985oSyLAaHSK84NFUmZQ7xe8hqToQXwLyoPc9kXYjA7zNiP1mwZzN4QojtG",
  "key24": "43xSLz1ZNT2JcaKhannxASv6G1suZZrSGKtBpETi8AzaNwRjPkEotj67g43GMTG8dFq7dC2MjVNMqyk8sR4g6VmW",
  "key25": "2nHwWhCUrkBBgtWNZk2P4SxW2D9xAbi4f8U8dbBXGsZdsvcTt2AyDZ7DnjTQPk9Us2hJ2dASwVPjFTRpacpw9whP"
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
