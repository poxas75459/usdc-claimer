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
    "5pEFcJcZF9BKNsU1wcWMRPN9HjnLGQD7rT84Ufo1zeEywPs13wGD5GaP5JobcGA1B1NwDDZSeXwYUomC1nqzN11H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXwzRjzGznNDJysr3MMLrfq5TVYHaMAztEgYe1fbZho6A4BQAwHA3qFKvuEGGDDiGvwe7TG1d2EPKbPSqrsjAy4",
  "key1": "65KjfdZxzwAWYR32mNmiRxVResFbYB2H2f7neEGyksv6cx5knHso2KyyUyg8ecRsXF92hD2Ki5RAdarn14XXU8vc",
  "key2": "3JNkRQShrdxKN5G7kYFn8yEu5cqdMmFb1NnwgeBBCVoaevvPxexUd8fNm2WuNkJje5KnQ2gcEs8Utr6GvSJ1eF9Y",
  "key3": "5sHFg5UwK7BtNz6j1QDn6te7jo4AsNkU7nXcQUg5Ys84iAgjRtvgRHH6pDPCueAo42DSgiEiJHshmkUFFb1P8t8u",
  "key4": "56McnSNCxLGPdM4z3n64YKrCC6ytRVzJDrhhNnj1g8TVAh2Ys78bLBBfjCSHF7DwLnyomRcUjSbgusMHbMR9fRmn",
  "key5": "3gXL2iByRB9pMEjZL7yD4vwbgGKtgQWgUcgHRFCf6oLKDhk5iQzSUKCkJ7s9ctM47Xe31HTgnT6PuE9qoQsEiamv",
  "key6": "4i8HfyDgT8MhH9Krk3XNzkhaUWTt7DYFNtxhDzhLSvigZbAHihxcERpU4v2jez9ubCP1GgkESYtJUeFXhC4pUSnq",
  "key7": "2fWoPMCkJVgc2ucqcHZVJbkATB9sf2Vs1gtsicaW9Hq1Y4s3AEWd8g5UdAmmKtf1SRQNvo6FUEeNJJmxdGbsfQuW",
  "key8": "4pBSQPcjy6qeYRgQ9urDfJrGh2TTBqhRwLx8r2amYDXgFds8kJYbcgBGCKWgyPeZa7gmyK7r9yLjwgui5k4zsZvJ",
  "key9": "21tPUa8iS6jEMZL29Q2SEb7yVPVAVcF7W8JR39Q9BcPeL5CngFx3sUvMYej4GN2L5GqDq59F13s4wgpxCvFgomsi",
  "key10": "2vL9nTGQSTC3p6eWaiEXoQf5ycZ6iv4JVsLKQdDuzGRHbGmLTuuryYm8EmrwaLeuoKJmVLX6fpBtibyPEAsu4GUB",
  "key11": "5DWqioouVMY7CfFD22wSStMZDKpYB4W9TEt3v5L5GtGNGmc7sXgztvrG71sqpsnoeU3fRPhNYCbrpZvjH6NMzedf",
  "key12": "2EGmDjtTwSsRbr8JPELrWEsoeKqybqX5rGVriyqVvxAN4UPesK6W1ewbMWTxQxNRkjgKo27s8fr4g67vQsbCiHDh",
  "key13": "3FqURGjZGcc2DYzXisxJN8vhtyAghyvymUB7xCcPkFST2bamcKXU1R7X4df3mJS5sz1Ljm4qaCBPy6uyGfuEhWvQ",
  "key14": "3ZLtXWbcEvG6AWJHz8q8Z3uxWFUmV1YTCPisaTgVg8qv5h5w9ykJC9yMQxhLwdxUixQRKQtaKceS4Xn8BQV8dV9d",
  "key15": "3sXN7XhXhMb969XMZmvqqA3KVEncDXbBEjmuy7AYfdyAWHoXgVfxvbHp3QtLPxrmcSwSPLKFK3NS6kxCGvwQjQ5U",
  "key16": "5sxksC7gyR7ZCrugXKQbJ5iNNUuVhUuDf5JbJctgNQMiWafrrRjtPEo8bNxEMsLfmALRHpgRiJfxUpfbafvEfuJr",
  "key17": "5PUM4Yygmt2frvZgAMhohmA3KsbNzPo9y1tR7Ciz4nYt7v65JWgyXeQt9LEaQcfmj4FkYw2S8QEmLhuNbKHqH1au",
  "key18": "2NUALGXkgvVc67MNEoaf1yzAMrKFESxvihn71n98aUnM5TcDi7QhxBwP5iYGjHuCecNrdRUcaHwKsY8dSsd1JaFq",
  "key19": "ywyHx2D8xVS2xU5qPxVbUwqpJfQH3RsryxGqkG3JqazFUctFBSy6u7jMV9JLvRVefuYNMHdgZPJcUicxzhZ7D8n",
  "key20": "shY8hfgatn7gzvr9pJUwPwdebFa42fAtsXNgf8qfe66UqSr8xMCRgTGVG64kCQZ4gTNgPUWs47ESLkKDtpZtXEg",
  "key21": "4wUMvyEYCZCDKL2E2eFHfm8T8H3UC4oLf9TAEF3ZUSwEW9vBub99ssPvfVTd9PfjV2VyFGwSoyMqpvPSzn7oG9SP",
  "key22": "4PaBdfdNaehRPA1TvfaE2Gvo5DETJXuUbzabgeCa3e9ArNRZjTCVhQmf1MkVsLp1wJJmXF5jhbcbZaC6xYrsDP5X",
  "key23": "54FAwauoYJkNvTNa2TjRqe8XLK9nPGpnvB7J7Lo2AzaTdGxa7fVHEAWo2iX8R8CxdH6wVNh5mMeccxRKyd9nc1Jp",
  "key24": "5JQTJ6gvEmVgpkk5CMN2u9hPSJazGsKrVvfx2NaLfNNCd3hSBTzp5n2VWdFXY4fSYfW9Qoi6JMo8TrqHaUfG5C2j",
  "key25": "4iVhe4L3yQxPq7rCU8Cg13bDTXBRP4W42q89Uxmh2dbs3DkcfgYbQP3aZU4LBaauFqzRfYcpKn1Z5iY1YZPLjsvj",
  "key26": "4PeZHHxWtAcu5iwvUoFBHm9L63Vg4odDrMm9kVsGpsMDpyLsvbNVXjHpbGYiQ1SHdN8fZTUsUpDPHTbXPHAfimxi",
  "key27": "2tsQntyKUwajvt5v5utuLzp7V3J9pNwZ2J9d9DKL4LKqt7fVmqyQXkyKQvfJpZic3Padn6BYZ9cYRZXtNXmPQM8N",
  "key28": "2nSkodA2MjU1SeaPpdHiiKWefaGbJDhZY4KZMT3wrRtQUku4yfc5NMP2kvX3KhhN1xQ7AFWu5oUnyH9772HARZPY",
  "key29": "2ryfeQSbpwC36z5FQWsdkzZeAB1Qqznv2W1o2hog9FTMV83yQPwy9BxReQpfbvpouZYz5cUAHEJkr5QFxaZvPVH",
  "key30": "5p1fZa1caaZjiMJiuBmxi1edrP1tLnsKRjRHo1Lu3d5389GSnFnotfynjUVeQX9wXzt147FqHWxJEaPUS7xutAYS",
  "key31": "4UHw5fehfeZ7uugCGiwxSAfuw69FgdAY89micMFRXM19SgyjDY7kx2YDD5kbzPij2x3LCcHnFgin3mmJw8S8VsYg",
  "key32": "t3aEajfwj17wD3wDTHM4VuL6d8mKTvscrS1cYyBKAabXCBuS3p6oRqVGTVstuF1cVkf6noJUNnzPFL4Vnd7XCbQ",
  "key33": "4jy9YsmNhJtnaHueQEL1KsUya4DbhxZjBAoLQzPSG4SXQE2bTiM3V8CHB9UnL2UD51cw43KjZFWt1rZdBijaRQPF",
  "key34": "3aYMXntwb4hA5i3NmPSvszmejyVbbCYGgGQaNSxs2YFFmYEJmLDXXm3ETHTfc58t22C2cy1RgbW9kYt39bojgZiw",
  "key35": "4WLxAatN3zJpjTkrPEYcCnnxCug7JWQzw6woe1GavywRvMoNDmSM6zyyCDUh1peJyfTJ9YUC4U1wZCU3DptWzMV7",
  "key36": "4u7bAcgFkqRVeKJvDX65kNcBqrc6DP7TMBuMUnwizMHBgS4ijKv4uVLBiD6k2tjaUZ7hdhhsBqD8Cg4Qw3EEX8Tv",
  "key37": "44GBNGwLdKsee7WgBoxmMvvHZZGsUXKxwrpkLyYAs13MPhAZ6eiUCjRUYBE88Nf5foBeE3DxsYi7BFNMQSEtLMqc",
  "key38": "4bp6PvSHLwCAjUdAKcHx4srEc7rk5oZ96oSq9DXPJyKzyw3w6eJGaSm6G8NDQ4DJMcEu3vFPSsArjvde7Cmn7eTy",
  "key39": "4gnLNenAkcyAdWHynYAeNW6VybydVKK9E3FZoTcW85GJtNVWDQdibFa67MzxkdrFu8xB3BxZvjsEmNFQp881y2ND",
  "key40": "5Wru1sXZPF3pHAMMvMMqRdxqD1ZnvYcdD9pciHm2urNFTvUz66koyMF7CX4E2FhXS5zyKwSKKTjJNNckSr59eRfd",
  "key41": "VZ7q5quEdDZnn6jABZUXq8PswSpBph6YK18duJtYC2hCYyx1c8EBoCV6E8Bpc1cMyWkE1mNbBaRbwuscDc2BiqB",
  "key42": "guJetJHv7WPXCjN7wnQqWoLXemCwpNS1wnwU8NEbWTgVkipcurwJijwuafVCUtHddbMTsZ1QHyVSc4CYHL2DdTH",
  "key43": "2NLGFcRjzNaAw1q2w8EacunUQwq4gdEE1SpqoEo3uLjM925KWtEHnoZhH2fYx4ReqkSGCRR7VXYMHwokkyF9P1Fd",
  "key44": "2EBJGkQqSiMcjmrQUwjyAWWgqMgkeee7j1x9WXyYmrxfDh6BWtsNkVTmqDRkNyMAHihxhyHHoqj8sZ772KSQrUf6",
  "key45": "sDUcewcsD7JuquegDD32Hs6L5R9qcdmKSjfvb6UVxonVoSoKQ6Pc6fRwZwCp9iVBo3a8hrsfPZkEpoDJATcgAZh",
  "key46": "4FHQp8okmmE2cTHUbmsDRJdD2BCr6Zkc1ST4sKuJXYNCY7ZbtVoWu1VH85fL8dHSvTDksUFPPk8i9VeRsZEVEhur",
  "key47": "65kDrjkFizCS9KPYFTTtxYa8cTQUYtPR5X2De7XaiPNhjsxxX5xGG8y2Rveq581ofw5xHEkzfAoB1n2rTDmQnSKp",
  "key48": "wbMGExNm1uhTZ8MjJP4iiPN6c8E3UUMsMS8aGr3ZBNXDNsnWJbMiS5P7cXrbdGnFE6fZvNwMAup3gjUiGKBw431",
  "key49": "3QS5AxsRMSrXr8JoDExaGXErNQxqJbtohWV6fWUPpU1bbPdLu492bPkbFjKTxJHcS5NcGQpJjVZ19Y12vzTHDW2i"
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
