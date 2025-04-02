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
    "kV1maU4pcL18CXHAhBPxqKScvNm9QXynomGqVDQDXoxaPefJCnjvs8EYjEgedPtQc19oKbcxkndtKiw3raB4eF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJKhZPhE9VVz6j6NeHSidy8KAe4GiynHZMmnRky8GuQwEYwcncFUoEiauJFGWRccxCkXgxU3gkkbNk9mx9YZqBR",
  "key1": "2HKqiJbumyTDxx3YFuovogfzmUP6UyUfTAPrTbhdgkUpyHUG7ykHSCiDMbcC6Yd8G4Q2Wqi1t11Tks6JqzW53evo",
  "key2": "34rv2UsNV8Zh5cHrnU6ocudm9SNFiFuGgf5zs9xF2n57W5o3k8jVVhfrfhDDRjYkAvfpSEct1JkoUnCTac1kRQWW",
  "key3": "2JeuGJ7GUvupLivWsiXPGb76FSKdiEfxU4MYvvbHc4X7EGs8EQbZ5Wc7mVLFr9cPkk1XsgjwD6je76o9xfESnGKc",
  "key4": "3yYw2ZQbpWAKm29qssrH33C4zzivc9f5gEYeMQ61UM5KyewjPd8LKZmWmjiYU8tjpCz3YF6947sPBbdRJViCk4gR",
  "key5": "5m1vCCQVUTcU5trgTwTdkREKG7qhGcMXyf25AdJFSsPEuM2qXApxU7aVxMQJPNb6KkSnD2snxK1xnBWJCQNCZVnS",
  "key6": "2CuPZatjmgrYnMwx6APjdxWjnrvEfu1EnNLiihu9M7MknTeMTYN8wuh7gKjDq97Kw15Lj8m4xrEmwMwZTAef38KV",
  "key7": "TqiCttg2bsuycSoir3SZxCjGgdhHY7uFN3jWmKfG4qSowJk7jyphtjx5rQqmXc7MuS1CkgPmKajUhhV4dNyKZ6P",
  "key8": "3V55EqoAMPxoDjTjrdgqn72QpoFtVCMd4mVTnduyiSun3vmRBz76vGkZywxj3SJfaQLn7tqDURNcsaVsddR5Gvvw",
  "key9": "5L2s9vgrSTWtqN5C6ub1PDicMABU1ohs8RAQFH3W7cdRumSZuDTqcJaMDwwukgAvDAFjD57fZ9f7CuiSuTbQgNWn",
  "key10": "5zaKN9xCCBHz3nJoiGizhcTSrXWj4cgrmDmNm1XuVAWtFe3a8qpZkk4LXQkRWDx7ciuJNy16Vf9TgJZfssb2j3ev",
  "key11": "2xoeoyPGKGrx4vgFNy6irQGqH45fKFLBzaN1uCMmVvzuDeDB8cfuMkQPheec8QnW2wJ4kHYB4fshqM41c77JBUAV",
  "key12": "3zZ38gpK4mspC8UgkqfXk4FRwc74KVqouw41fz8SwWxSJfN8RoSJe5ofvjBhAArhaqMTjUstLLQTux1Zw4F6k46V",
  "key13": "5FGpGC15ZUhMrU8gC5A8N4FmZ3MCYdB65KiWpUQgNNwnQVPKsqyxJHmPUA77o7mJEMW8dYuEUMiR59k8Qn7S9UHA",
  "key14": "5JA57HY6NmTGZWwBow746x9b9Yq8F68H4B6c32a76nJCm9WCeza13waKr2euV2htS7t3C3g5zprkVsqDixzVpoMa",
  "key15": "4MCnAuSn6Z5Pw8z9czkhX4V2ZScdvNDvyvSKju2DmTP6PtNBYJ7zQVGBQkqrvgNhF5XCERB3S1sr6qsdtmGbvfYh",
  "key16": "D5oobgFhLiWgqdmyBj4ursyijqks8TARvzy4nVjNqTi2pocKTyASrnycDLjxxRHqJoiyUeLR8db5ynR3azxqN4e",
  "key17": "MNYQzzijn457L3e6XXh77pK7icJwtmC5Q1maZvsgV13vvtzFTjWRWQgieKGpSvoNsUTR53kXx64NnQvmH2mtKfq",
  "key18": "PcMtiqPStw8VvhcRXz4zo4rVJdt7REPvbAro1SDrGGjnpkCLqRnhic8nE6bSvnt6Mnn7uxjfwsZf3DgAjVYqPo5",
  "key19": "4vKHiwzQdGAKc1iviKeA317yxihbPgrqcZ1gqGZ1pTUuNqz5VYDhkfodK38pF5iq7WLiFsvPdE88uCmXR84Y9yEF",
  "key20": "po5ZMDC5zHUeXXuo8ULwsS1KEQNcRwGR2M7tCUeEtg4cGY8EHUpokU6Qz9VhvptgRL7NsBXMoS9YghesaiuKDCs",
  "key21": "3QdkLdpq3AtSVTR9zH827hU37ZjaxzhB9Knyd9P9ATFgmDBFQphjJV7b4wYFcT9v9Hemd1gC7j4hHsVttpFxzwtH",
  "key22": "2q8ZDPw5YPQc5YY74sWqd8b1hbBXLdverqL3muUibLBfhSJfhrhTZCcHbf3F7Vw7bLqqbjSxCeqzE85WUihUSCA8",
  "key23": "2oakmvrtCtZPU3pJLemWF3GxwG1Krnve4TmXLPFnLHaxYLAVjrfPaEiEw9MaRRsAvbLCU2cFkTS4Rs4kgxTcP1qA",
  "key24": "5Ehdbrr5532JMCqcb1GHy8i7DoRgQ6LFm4CN3RLoGDTaeRMRqv9FMrHrwM7Ls4Whdn1pV7xABWqbuYQd8zfVUQPi",
  "key25": "48uagiUYt9NxKiVzVdv7rm6yAQS4xLVekhXoc9aLNJFZoUA7cwt3xQakFkekGguGPH1mb6oyQCpj6xh4bjKF6v1U",
  "key26": "HckpUi7nC8nREqJygnnoYQ59fcyv7Y2WZJyHTP7A1CmK3wARKSkCG6VccxKKAR2nx4Abcvw32FdTt2LqFiq2j75",
  "key27": "rwYjKRp936Es3P3bTmxGMa5zb31PDUqi6b4Uq4wppqADe2JKqwbWYXhrFgqytoMWaiArAmNAsHTG6kD4RMm6Phy",
  "key28": "4KUxKhaU8itHJUuEZtxcpVnkDiKfJY3Z7SpekkxcVQNvZtxwrWkjfdAET7WmnPCVFbwDGwZvaKnadtrQY59dea4f",
  "key29": "3PMQ4YYfCQikBud6acG4P2BWQkTrGFGWGGLVE46ztxkcGKyN8Hhuo2gfBMez3LvrdQdih7JU7Ldbx8VFVjFNu7oG",
  "key30": "4mKZxe6o7m2t3So5W1WSzSHYR5sRafBMnAwfJsiFUN6wYq9xEdwGpXYg9CNBKD1A62YeqqLExWeqggKogxsLU2kr",
  "key31": "3GXb8FZsacUpRXwFFqEZDuQvLPJJbCsgZvwp73g4V9ZzrVDV2BnLbgW6Woq5VywFdSrZ3gUQBJJCeGumEzFyB1mX",
  "key32": "4jo8NBSzezxoLFdANu25aK6b5EfapZ8nZJajjsV4ZksTzAv64npi7oiuDYGmeSCBvA2peGJhgVHdv7mNv5Wo1M2j",
  "key33": "4WJsbUyRnn845QZdXPNWZbXhktDc4DoR378qYi7qpdVPds7SCTyPZ5dmPgmjWFDhVMQYZjci9sRMKUgMWz6nQc5c",
  "key34": "5FaQYwBceBqWikCJda1yfR6mfhkFk6QSzW9QtVGTduUWZNeJcyU6WqBZVq9fZ2bdZz6K9dwrTtfF93Tzhoc6LRan",
  "key35": "28nttqVAvHZ2U4H1p9KtZjGZoA2BPVJhj4MrJ6K7UXNH8fS5AZqyGfKLutxoH7RKcQpuiWhdFweSnvMvF79n3Yao",
  "key36": "bQNWhz6EECyZLAyiTW27CAf7Jb85DF45MAejehiErLXiYQPzo6nN7YuxWZ2cbZPc17cNCagVKmp7d4EvwZWwtEM",
  "key37": "4fcWvqHuCHKwR8jmChoRNPmM4Si8PHktQxSdf9x53CVmkGwVx2E38D5ycxvBrzPJSWECvuzYeWX7kYkWuY3sTYgd",
  "key38": "B498pBMDYRxk9YnVYDpBznpxGGFjDbx26Ky1xygU5yF1yUnhKAACtePxnoZ4FZxZrmJUkCHr2iuXFcyPi2Mxniz",
  "key39": "67Yj4vuAxLC5zXQehwvMJPoReeJBjBF2n7GNhp1eqXfVQTLznQTanvX8qqtrxNtY5EkfbSE8eLa15cq3CNDX3WB",
  "key40": "boA53jVnCUVUSXFT12UtQ5vzpB7Gp5fuwL899dbo2CjfFwQFVCbc8EPq3BekVtQhwqUPvSQWPHE5DPmthbJa8Tj",
  "key41": "5uPGTMubArPPykBa33u9cW3hkFHCcLh4g1S6ZhqnFVwoqWfcbfHftUrEAfrK2SoGvJ87DE1rmsLPd8UZFG3dnZwn",
  "key42": "2gFut6Xryf1NZzgcXVAnKtvUAHHRWnYY7uxV84AvSEBSnUJ6qqpXdbWUqGWTUqckWzSaJoGFQnxSCotYkdkaWeZ9",
  "key43": "2DiwueA1NvLkUvcBeWP73ZEJs4xbTo1BByQADaBu22vu75j4kWCG4RkTJUB9ZG6mt5swd2NsoHuRnBoSiGKg1n3j",
  "key44": "22LWtwR7kBA3DZNwwogFP62quNpr7ExzX78nFiLZe2r79VUZExqmJvjfXsD2emTpvXQvM1n3hoCPzYGm8fUpE5zG",
  "key45": "4e6CwJFbVYLLQWnuaMJfLCw9Me1xaoSZ4bfrUa2or6xBrddL9T3n8P3gTWiAEBumAxhBZmWUCifPXmzJU8g8EZb7",
  "key46": "5hbfUvPRjUYbbqsxnp3runwS7y4RgaoUUJwo8z8VVSwbAe6Sp6b4AKf3nTrvZnYj8n24BEXckdG2cRx3RZx1J76h",
  "key47": "2rJWLBLQgyUNtXYS7QT8LDxvUrDcWXSNBD3wdHLWvnJUbDr7kXwATgeH1sPZhttBTY96r1cu4veYd3SJdGDUdDMG",
  "key48": "62i9xGdCPYUmrS1WQrwDCYmUGhs8oXri7h1mEqfvhPgGhHnXdgAEQetNBRD7NNY2eWcnV76BeX9cDofxoNvZ9iJ3"
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
