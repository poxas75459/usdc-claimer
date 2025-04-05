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
    "4ZbeYUrQjhDx7tm5JkN95Yw8D1h1zzc19B9zAxoWbSHRu2rsLnZdsJzStBaFKp5aqWnnC5zsBXRuhV8PVojJj8eW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APmJPVsMsrrLe7NBDRjeBbgdk8wPtKLeespvy9ZFXiRBEeKWmzCgf2ui1EC9CNUfiLQzgHVDwL7aPm8FTP3Ymuk",
  "key1": "4oe9opT5pG7Ma9KxL55JWN1qdTehzjLogPiiCgqeqSKHTby8uHeMKU2dWCpkvWSDbTDxMWoqQ8jPv7CKuYpmP1oy",
  "key2": "3TDpzcmgMPNjM4LUuU3os9LRY1Nr34j7FksvAVehEag8D4T57RqM7YEjXjJsRYfDuckLjTYCjWYeVZ9YULVnFjDu",
  "key3": "5d15BRcpdPVQyZEqGdWonpAgRixAqgt5dLCaTkGmrHzfbxq23pM4VeoxQtgCVQg7hn45o4HzyAEtiy3j43VYUCsU",
  "key4": "5UwYXcvp37m1Nx5RYEwUsULJ5sCWtxy4Pg4iUYyLyD1ZBEeefm5W3fS7G86ugBXnZeHeozCkBLzi2a51kgoxdvek",
  "key5": "4MyaazWyU1k8gncNKtd5fqqj4tJ5C6vmcjTn7c7MQEV2Z6iyyAr48zcwxjs5Xv73jMWpPZKFYUe6vzrFxW3MK3R1",
  "key6": "5vYoyroZap448wjLKL5sakRwjMwq31MgfJCigB9GkMgKaDbWpoYeqpWAuCPXkvK4z9yxCNX4HzZLAxghoNzzd4mQ",
  "key7": "37DanCFuChAAhoHdk4X7N14agS8U1nwzxaATiB3d5H29pMB1Xk1HcZiS6pfn7SRGNComRNt7uqkjDumAthTh296k",
  "key8": "fcqm1n9JCENzKaNcYRqEZajBfbzDQfbPYfJyG4zce7msfA8RubfBVCiHBeND5CZdzJuzJybHeUpjQh9a4a9RrVs",
  "key9": "5hJ4He1ZWJkNvfp2k6A62nejkQS5JBs4yUKAmXAGfC2WY3vhofCQDHpeoehibpN6H2JfCsGytbHGs9UGSYxEtLgo",
  "key10": "3MFkzpNRtBh7JuW3wKxw1G6qS2gRvGcQEghGjKpGwX1vuFmvEx17s48zbkn9b3GhCpoaSgtJ69VTE7iGmGSXGdwB",
  "key11": "q378GXu5zyQa5frFfDZBjpxcUtyypviuRyBjLv6VkSe9NDPMVcjz83msnEaSUUFkyvpWV1tXEhLitGnDyAXQ1MF",
  "key12": "4FBazrTJW1iNPpmYCusndhXi52f12HhfC28s5VtZE1yrutA4z3pnjhz1vKSwY2imX9a2eDCjhGi7UHvswBxoRKr5",
  "key13": "5B4GzNw5RfdvN3eE4WshSDJnFTrY6Ri6nYeK2tsuYaMEiseRiQoPr99GbSCRaEuw1AroYq2pz48HwVQfS92NFHuK",
  "key14": "3YuuwYLUaqLBqbvTXS1MdRH8QTg84fv94NVg2sMGptjPFdMgDFMNst7P89jKkXJDqKwr9oYJAfkXJVPZN9FLusG4",
  "key15": "2tULmy4hw4DrTTmEnLzScS2yXMFBcoNzuBcgp4tGtViTukcxSJoUASM8KwqWZYiNMbEVN3es1juiT6VUinPpzMZU",
  "key16": "MLpaqxJU23oRKkjzQ7gozQ6cKMWhYBuYhK9iY82VAn2c84DgGPytWCpZNG8GzEuM8AfcbqyE2qTzBzHoto5JxbH",
  "key17": "34WoYzx9hvDbj9x8UR2Sumb94LQDTt8nmiw4dH8vprqNHp9AxVqWg7GcCKojrvenHfHFNGJXNvpTH48LS6efEVw9",
  "key18": "4jXJu1tp3dVdeJ54pkKG1RWLMgMGTTzfpJE3rcEtTrRgYJybuEJgXKPr7HDe8KBn6XcifFWuH8d1H6HhSfK5ZdAy",
  "key19": "3RdbUUDTB3X32MmekcHGRheghfnks7bYkVFGFWud9La3pW9fPNAdTKuF4d7nwyrDQVnXNn8jrzPLgLNE9WkEenBd",
  "key20": "259K6HYnCkWbwn5KH1kZ7zzYNv2q3BtgHrosBMQ4LaYgPZGwxUFMkvq2DQinK9a7MhdWVWPwk8dn9KGxwYEiefdr",
  "key21": "4a2A8VAY6rt1HwXeeRsbfBj7McVfm2be11SM4S89AQWQASAmdr5bTGCpPKh3CzzjYe5sCoB8qi1DP7FGmk1UinDM",
  "key22": "56k6jR73d9yoomJwj2zP6D8M53wXXHg2Ld1hFHFkLakCzu5kJYTvLpxmVg67dpGMhFEavq76fgpFvNTb2aw7DFKw",
  "key23": "6396szBjhp23sLT3wV1qbMQHvXrP85XfJsjY5SagTNDf5tZh7JHLaKqBLKo4z8vNTTJ6d4LC96DPZscbg7RVvzZV",
  "key24": "3NLfUVrgRYoLDu1dr5SwRTaLyExBPQegqJJi8pJNhcn2N56w4YWKPASUJUzhu7yAMXqu96VW8hiVSST3zaBFfG9B",
  "key25": "4rK5VB4ZfGPD8oV7CDAXtqfDeoEMBMunfACtLBJ1Z5toK2GK7QVHeBrdQM4PMsH6xpNxmo7SzYq3ocWhqfkFFKGA",
  "key26": "2DETvaP1fT4hytnk19D1dM1DoTHiYarbNij9m5hCK2DcKEW3f197oZQLvEbp5CpjVYmCQhyvMTvmMUjq9N1r3DhT"
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
