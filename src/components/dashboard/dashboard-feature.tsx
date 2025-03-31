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
    "5Ramp7vh5pkWkbvu8axmVpGHUCGyYKuzg6jvEVkqfRFBuTF3BXeM9xzh3NgMgdtvvmbWbHRzZRXULSbu11Y8cDnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5muBaJJQPgJcxhbjzDXNWhWisabp24jag6sdUjyyip5LkyUCqkrgp8qeJJfEtrY91P1MZCUQWFZR6yG7dZtzgoF1",
  "key1": "2iVakRYMNCv6P2g86ij8XsaWKyYTiDWaRYpAXAckHUudB2iHyJt4NxCAZPQmyi4cnN2dD2aUtRrnoPNLeBZgYZLA",
  "key2": "2kYfv9xs7esQpjrn6kV2MPXwD8eZR2ABDCUoWVCJYq2b9CLZpdwMwX6shV9mozpdH8wt1Q5VKHqWf9H3W1wR1ZKD",
  "key3": "3xjR4qSfmtKeouTyF9eKk7H5JYV4dTt5A5SWn9LpL7BQonGJQtQK6dn2gDUa4ZU3CjSG7P5YWanSpGrszP9cnFLh",
  "key4": "3aYPFxraqQsp5dwfUJmFs8X7skkHthprrnCfYE14drn4CriM9XzVvYysPTtRQMFZjc1PD5gqc2Ej8Qkt5XyBmfhR",
  "key5": "3pujYvfKKLQjWMmkoJG9G3CsZfeYUiYUu7KUofbSaQi9vT2xT9P6MJfFq89KXrWSvyNchus4q5jEwzciCV5KxVc3",
  "key6": "HQqQehGugB6Cg8JqTHvi4HqSEXqboAfHm4jHJoW4mTRsJMwDVfYdBhTRRxaxkc8u5etBM1gQK2FfhvDUViV9R9h",
  "key7": "2dBf77DNpofiX3xEbYUsANh7bWX6Skc4zw6izLSVqXHCW7d7vJ5RBJxW1jMCEdYXcskmbP2Jm5kTyER1DveJnq1i",
  "key8": "5ZjD5P3YMMnP8UiihmCr5eLmV7rAdS5L7jtLJ6gFkC1qoxWJh3U4zCizt4sL55GBdpBfCvNPy7tF1Ni3R29UqWmA",
  "key9": "3pmCBCuhsY71o12Q2EY7etPYXfDRhXnGFbLgC6X5HyPzEL2xYnhJ4BNqNM7UzEb9bwZKEkmifFbSXLTQZ5yjSjzV",
  "key10": "2CpygEFwosChzsQt4D9erjx6HoTJerTzz3GMCeUi5Z9d9X4xsE3rVJ3nKB8EgpPyxGkcueboE17i3Wa1P2cnXq3o",
  "key11": "4AYKgZQFG79FDU9WGVahR9cqNNZzTezCSyTa7BuL5VkYkqA1qSiP4gLKCUofTdkbrxadjyF6BVHm8Y2sqnJ7xAqV",
  "key12": "3VTxhtKhFNuQwmHNqmG5QYNE6AzccLdAHB12aLSGeYik1RPYki2vdJZBLYBaUHa126Mm7FzzAmg2YZ7eND68DFg2",
  "key13": "42GjYcimRnVwKSf3ES25b3wLDDRbm9rY9tLtArHqQp4fBoPhwqqZDCPQGYgWXA5NDhQoftww9iWbJypsEbbLz2fH",
  "key14": "3oNBKUJMC1SN1XBbQux5YVMD6VUJKsNDwJaS1Cw7cif8rypxeLn2odvPtEcQaQRh9TT2BvwLa4iRii9XdLwHZpzL",
  "key15": "5zUEMnRoRujWaPzv87kPVhHnnxZKbwt2KG8uMbBsZUST8pDhCnyFiC51swbQj7A4cfv8oMxDikGk3kBtHEYW8qwg",
  "key16": "C17hB9JJTFMz8oGi7phiiaLa1CzCVWt3WqrHiFGNwabqvxZpjDzaFc5CYVVEN9Y1jiUEwLGwpf4esUfvPSeTJgr",
  "key17": "2MfhTwexuvRHfXeyL6PYMkaezGwQ7watf7vZdt5FmAYocNck2MfeeYqvfdkukJ1bduPZWLG3P5UAvyWp13S3FF8d",
  "key18": "uNr7G6HYyAUqMJuyV6hSMJmnQRx1Hp2c5FzYCVaGpajQYuT2cJ1VdES7f62ZQqWxXoXvk1KWBvH3oqvNnoPJLmN",
  "key19": "4sKcYdmJUvpgwcYmZ4wXKTj1EQAVpfPPqDvUKMgFZ2zwK647mAuj8zgG7sSptVFfgofLp1kWoFx1UjSmXiqKvTL8",
  "key20": "2HSrBi4gA3nQgybGBg1GM2ovcmzpGhU2B2xmU2HXY1u5QCn2jL9ge1uicnAjgkPxVH1sEu9ELKYUWB25JuPWcrKp",
  "key21": "3aZCw3dyhkDXE394b7iYhHJExWonBCB21C8LTkwhbLu9PjEDr2WxmzxttEEHzQpEUy1egLV35UAuhvneJktt4vhz",
  "key22": "BW3NqGdFi1qcgCfD1MDg9SK9s4fDReweNJ81nB3VWfbEdEgRfecCJiCt1mYLdxC7HHUXozZk2vYJqvpAuxSMnAe",
  "key23": "4YAtiGWqQqNpCVexsjAYkHeeZh64F4RSzmxQtL2JiZXMPzJ8o7VvHyYvtYgoTn3QfAhcB2Ty31PoSJ622THRcCpX",
  "key24": "5eifT6aKSGxsCmXutLxzdgRbtdU1wzhY3tiXWa3PFfvhMXEJqTD1h8e7h7GPfRpDg7hajhuqderqUuRFFXjTNPP2",
  "key25": "taQMYJZFQaLAtRsNy7MbZD5f7tbnUYVetg7TABEQwuhBVWTtUxxpNsQ6Qu5tEpyGxCAmVyg5gT3SnUKymi2ffcN",
  "key26": "vWdwdAvSmhvnN3YaAEZT355HXS2YWTUP3kmTkJ52R38domYdjFEQZaTjScFkNK6K72n8oZu6SC3EY8nVD6KdEUQ",
  "key27": "3hw44DPzzrxtoNvMWy6DXzzXsAg5ndsUkGVoSRM94KVoBZThidaAq9pDMEjA2WbwBfj6jPG1mgt1kDjEMrQ3pXu3",
  "key28": "49n2jSWTbiifef1U7CXnw4n5koutU7G7dGoWt1xPShZkGKV7swDCbpuQXeo66kdcBKXMHpraQNEns93asFDyzBvw",
  "key29": "5Zz7b95PPM4HRMciCV4rQYNNPDsLeHvRkLLw2FUe9bjgRaSiN2c1BDoTK9yzLWkfLZzwVRnguJaGcP7tcwpqzLcz",
  "key30": "2GMD9ZgY4feCAf7Rw7UG8Gyodfa4W28aoUE4dBb7iQX4tBTD2tgSS8YMcsAVbJDpmwbxF6DhxboRLiu8Rf4zExXJ",
  "key31": "4pFJjEuX5NR9kwrdH2DhZMh69b5BSKWhdMYgAst5Mn11YgvsA1z6hfR8XVpGWViXUeje8QVCyAwrum3bxGgFQdMP",
  "key32": "47W1xUpm3prZ5geeNw99kagLA4NC82UuXVA1FR2KSZkW2kZncVwfH9dBFJT47euhcANXXv46wdRQ9J5Zmu1oaQxA",
  "key33": "5kbcLkX1JwPuKkYekY8bfXMasuEtGTioqRQo8srFfwWTpzzctR9VCiujoEADdEQUUebgrqw6CAjDY7GRQGPo3pEy",
  "key34": "HGvygL22bBh9M1xYvFmAB4NnNsFQPS6Eyd54agXMggzghqfFXsqmC28nKqwimTKDrgUuHQJXxfvbdC2HQa7dSKk",
  "key35": "29eoPJTMjdbk8jRKSpVX8bW6mJmtW5YEa7pHL7t1GZJR99NxSCou7dEjy37fsLDBZRkzs8axHjoMyMLnHm4fSuJp"
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
