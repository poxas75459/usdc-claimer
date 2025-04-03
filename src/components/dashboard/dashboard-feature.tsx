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
    "2f39ASGLusgiyyaszboHsHQ362W5HgYwsaQq2rESKQUNQUH3yC1uoicAnjCwkK98uG4dfgfa9D16Zc8URDCHU2fN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGCoMpr48yS1cDmPyPpx9MfvFupagyQqzexWm6fpXom4k4YGeavTzgsyxsg46qLXXCbhcM5pCUtUq9qNWRJDAJj",
  "key1": "KoJU2EuqK7M7Je5xNDjpeq1pLao19wcKWowAHhGdm141MmNZZg3U2cabf5RBWmKQWkLxjw8uCkJAHpyuJFHUcoe",
  "key2": "2p7eNUkK3jUMJtWMcdzhqkjdkU3Tis6WM8Jzs6XweGnkybG7CgiuWSowyGsHMWvK71HX2HKRBKByHnx63HCHkt69",
  "key3": "sqCTjMcWh4ie7fN1RC9TD4w5NHmUcE6ZfTPHrdVGgmaNkvr8myJjqCHU6qrQ2JGzMLYTqQpXxzd6hyMzHy2cnt1",
  "key4": "2SZq29rHv2EwjZzn2MinyRa7xfDmrkj8NirE3ZA5iXcxNCDAZBvbB4xNoCKnPCe2ebHYQyLa53S3ZXebvpZ9iEf1",
  "key5": "a8j6hw28yJ9zw2374iugfzaeYDEiuiuYhdxXvWLXt4CBRh2K3bdkfJUzYB1uiJtxk7ZK8qSdShVNba7SxxeQJyB",
  "key6": "51HVNwEeGF8jJroJRK8nG1cxqz5utXHwsFBjJZHFLWfSsTypAA9mQbNS5ZmDP2266Tw6xwkrB5EtnkYi9NCtXpy9",
  "key7": "5vkpbuDgQdw6FDm75k6vkPkEbVR11oyw7fxVUZqEG2a9yF66B2B2H5UASUtBc8r9g5fvHckmTJyJvHKpksQazkEL",
  "key8": "5P3pxNSBs1EMeVNmuLWjg58RaDaDjDzsNA1zk15jWQuXYijgnwXiXxf2K22Gkci2eveenodiULswdvk3hpipDNbQ",
  "key9": "3vLMdvR4HjfSngWW3ip5dRNLPMYmrW9f3taMG1exdFe8N5uFyRCnpWgoJNb1nZNLpkh2Wp2mhK1YQM8UshVRmRha",
  "key10": "3NCtem796tPQa7JXmvagvWVFeGDEsy9EuWj3n3xaRBdpNnAMxdchKQxN45rW9Pz58bFntaZjDVS9qerqUtECVPiB",
  "key11": "RRo7zy6kfiUYpC6Hg6DU6Z67ihqWFm2sXQ24BkhPQFXwa5ceyNjy3eFxnSrjd38dUrMQQqvZoQRPmhFWDxZJXPz",
  "key12": "BR724dASQxusLXzrJ6mGcBCvGkmkddEdD3DZkNqnrTmd7apizYSzkbvbtawss6DEu7hBpak5tdXyyucCCbCe1pd",
  "key13": "5seQBNvNxEJFaYeJhP6WSc5UDUoGqtSqCuU2jmFB2VbpzVfxoLM9J9XhqPwzNGY7yhmEbzoipFhSLmpo53JRuitK",
  "key14": "4pF5sRvxrpzz8RwrePJpBGQA9boapXbETovxeso4iN1T9EgLqQrK5iiR1LZmsZEgXcTAGRLEwP83QhtfoZdbhTRk",
  "key15": "5M1KPCRYof8DjNbHmyWqUV4sEZCNvQjJmXSMvyb3JfujDSGeLD8R6JNkgRe1pqY4sqiNTx5nbujbYhxwqFi2FpVV",
  "key16": "2WFvKuCcFmYjvaNdKNM85uzHuWL4iCijrMpB1J4Fss5hedbnXZ2p6HBFqvuS1DxPubUmfJTn6nWow5iRjJzXxZVN",
  "key17": "26Bs7yqMU5gZv9ukMh2fA5bDFKmhcSJHMNAF4VXv5LnNQBgW3fv3vaPHdMnqhcQj3xhEoNAmHFdEeRvcDSsTJnTm",
  "key18": "3TpTmGR3B9zVDL1d2iorzSYLjvGcWKCJVw24SMxsGkv8nMUxpc4Skwb7t3di4CGoFdV6WPocgoNCLCNNdvB6i69C",
  "key19": "7Bffm69nmzXDbxk81J6uwDNmGxF1g4i9HRTnaujya58KD9uFNzTkicPzTtjK7WUHXr2hYRAErfZGizvajLkWcz5",
  "key20": "54nmDLD13LQsqw511wdtxbuapbbcWChef1pzRsnksvUd4JAcPgG6oskJp74EjPGAvGBmMkDitNjSKEMUQeM9CfED",
  "key21": "4dCzbPqfRGo13ia7utwiv7vcCvNtv7vCbqwZUE66wXdiKTaRN2sxrKkdg7yD81up9GRK8PueiF3YJFForRcwdo2Z",
  "key22": "239YDmrs8Ngwtzhmt9RG8ZQwpCGPpi9rMVGPNeZvn5hNbV751xVzsPZNbahNHEmcJFVuCag6Sohi85Rq91Xc6iJW",
  "key23": "4eEjP4Ym99Nk1pgbDV3rQ43uqigA1KDG8VdrQNMG42vnSRqZjrCdGbAiS6Kq8d42rxSsrLLFuaG31qM2Ycmi8Cfp",
  "key24": "5BMeyrXvUCevHgM2xNvZjZm2pMYCS6i6Ms4URmxYcCukF13zMXVM6qxrm9myqUsjykLn3GdKqeTXwBNNyzQV9ZGd",
  "key25": "4fE89X4wJXze3A89p46bHCwsYSbXPau6kmYAQAoqGb2c3ZVrcKtxQcmYWoNDxNAtbzCYGKNeQyoPkw8jjkWQfVKF",
  "key26": "4EKEbgE8tKdndG5tncB29KqFBK7qrGBHQCaPyv8iAbZ78QSmiMPMYT1LVLeLUfqXFrf66C3SsX7n8BELNyGUhbWr",
  "key27": "5nUjaCRtv6RspZSRA5BstYQESbPfmchxiwhzwSYwaJ6821ByRSETd6ZStz8uPoiys6rkC32e8qxFuYJye35Qo9yy",
  "key28": "vS9gqiQhM627cnuzHPJErxZ2rxCzi3aJ5SQZUqTKbmE9biEafmiBkxjGQvEo9WChdMRuBZTPoQYR27pdnBFCRB6",
  "key29": "5MvcV1QCxV986yLyDcFgUuvG9gpCXhpnAwfBoEv3bvQYhBBDD9deawaPwvcMrecwiZiZHTDbUGT9UkFH7K3sLjB3",
  "key30": "29nD16ybr6mZfMvo5Gte88X37TWddwaqVXgAwy3x8JSRuV6ZEbzbjUQqKHDEW3RSu9oqWKvpoVARJ9M81jKQSUtL",
  "key31": "5pZ65DCFwXLrbmoMof6ccbRmLeVDuknantBe4XQaMtTHQgeRmnE8itVcNHtJBBNztVEjQYnivx6hhrKpGKZF8uqf",
  "key32": "2Qq7ubMNpXTPqLY51TxmA9AuYwcu4nMyB8YLMDfPEbFzJaNjTNYSN49nwihDhD2SLCx8FGZCajKfZLtxLEP5noht",
  "key33": "5y4qRtUuSYYsR19PTs3q36sZMde8sipDvK6ejyQ3mZdAmLuAhQh7JUzNhSeKEHdCZYiuXRMWeDSd6uozuyMzjfpt",
  "key34": "4VnfBxDGsLaWsAK8vnZmpWFpw9Sve6mQdsppiASjyDHEMFpVm2mH5WmmwHbS9PB5Ay9aawmd4HFoUuNzU3rd9Q5N",
  "key35": "5L2kYaXQJH6nz8dcwtbabRqD75Xf41XD8YC5NaKQfEUVJBgoDpQFiH9jSmRSvu5VHp33gQUoUD462nGqx9SXmb2n",
  "key36": "3D51U6pD4RChHz2Q7GuxVDW9cvC28SxY1ZR3kLcZM5HWgSYbnjKYG9i4xN1V15CmYjKenAiTX3LZnt5YGbKjtqbA",
  "key37": "4NRLY6pYh7E2XFtaiuMvZtDuRUGNfjMR1hnTPvk91bn1f459KWXudfQeAwQVzjbu8xU6ebY26kCSxRqCVf2hrfEm",
  "key38": "2nBF2ua8TP54CZxkhr6GRgYuFa7GnFAyK6vWvgiZB7NMGfr4FhtxefmBBX82uQXa2RfQNfQTak9D1Pu1nqRTJXAP",
  "key39": "29eSpdkspAW4iDCFfuyU5exLHy2NRUiYUQSUUxmWFYGQGpGnKEqZg181YdJBeLnnw9MbgJjvLhLzQtbycSutqqZk",
  "key40": "4UvbsxyymoFEVWCExWEiwsHDJWtRbs8bTmgbRK23BAdMeYVvMPuuLmJdWVbnQmTXXtyJK7a7h2E7X4Xy9vP7KmLy",
  "key41": "3A8Hx6AUvGLVAB7yd28k3HDVSxKkdW1iWyJX6tXRV8hfXG44BeZ5vBCijCoUxz5N6gc2P6CZfiLDQwgsEjBn4JDt"
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
