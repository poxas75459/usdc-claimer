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
    "31ogWp7PT1PyrypfugSVN9fFaikx96H811kXiR1Jw4ruYCXmmtuwed4FZL7T9LNEiio269TZksdXxjHmGEqMFQKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVJxYZs7EE9wJb3fgqappbpnHT8f2LjFd8ukcwsmosVnBEFsCB4s5hBEEPus7DEbwAz2AvtCuNbs5fgs8RDaXEL",
  "key1": "6513WQt1bGvw6x7SohG2yG5zwM9XG1Lgx2zTdjPpv73B8aTTTwygvLmPW38VME2DpWp15AzFtj4fyJRT7LdsM48p",
  "key2": "4QznLeAdbwHmdG1Tx3knqxF3dHmsaRf6bUtgW81FkNs9cqZK8mUNeZhHTbGJHXpBoYRngffdw9Sbb1gaE1GXPgnX",
  "key3": "5JTwPVHj2va7vGvEpuKRbnWF3NQVgNMcp2LteGAC1K8eAnqD8mYYudM8TTXTDb6WKWAaKzAiLyywJ66eRcyySpVj",
  "key4": "31o1c1zhh5fopkzEU8gC62mdWfqcXRWRd5xE7LDRKeniMZCF7qcdibJ2d5bqdDtRHwoB8bDhbWeJ3kppvKFV7yqW",
  "key5": "2j5phiU6i7yKgWXeL2X5jWKd7Tqk6UrpoWfhc6xyNeXSiAFXywrmT7ytaK7EwzFSnMYP4Z1xpJNQU3nLh7fxRHNQ",
  "key6": "2iFLQngYi32SYNH4BtF28BJKuVCcXHofTsaZWh3UJSXwr18wizs1MHmzpkBdumkrGKzFyLAXDQPdGne7C1SQkZ7J",
  "key7": "2nPff2UXjnVf1ZY4QDidWP7rpFiX68g1RWuFtFq9wE9yApkgrmm8W5dKhau1BqUNgvyw45sPXN8MsHR8Yyn5TQA8",
  "key8": "Q8JCm7BtX2iafL7onxcSRaoAivHkwGGxBB8V4yYtja7XjbuhTzbyHkognLfPnFSKbLBL66BkqnyMyVDif13Pga3",
  "key9": "3NHWknGHr8eptmswdiqGhK5fK4fzBW4kPA1Dzgz1o3jxDSAdx8oFckWPwwiGgwUUkazhVHGxnVXm8QuefjMt9qmg",
  "key10": "5C6zrU3k2k8TbSzC3vTnvxUa2pQhE8Up3wD89qrdYaqBwkNxqfjt1xDACk4QHwURnNdsnfNhbc73CMhDirQkXb8J",
  "key11": "5k7qg1UTV67u6FQ9RZywJb1XaRqTPj4wqAfYH7F3G3jWCi8GuhiWJhQmyV6BeNTaVNVd5s51ANnr2ruF1DT5SPXY",
  "key12": "2hve8n7HtRt6hLLBrTCXvqAnzz4YpBgMuDEnwWFmedkXukGCD4SzJ8pcVP7UffHhUZWFXWT6W5s6SxZRLM5fNEWN",
  "key13": "4dWVucv7Em8G2K73ZDG4oN9KB4sxDYLenb1pcEPrkm1sL9g67CVog8sSMPxWZ4miSyqwDhrwJTJGKh5LzaEuz5aS",
  "key14": "3AnPPDhr5YgmhYwQMRQzRHaZ5dUSANGq4qW7edrqgJ3t9pAJYufiQLEV5UyGpLYEsNea3KtrS6iuZeduxzuUU2vS",
  "key15": "4oh4K8nUPqwPowXfpbyUGg94yBBi5tjFPVoii8UaN1JX4Af9VoFoMLVNzMcaCe1bjBv7QwDw4FxznzqW6MhfLvvb",
  "key16": "2wABx8ZgdcJEYuGDenS2rN6hDZv5tFQsWvrCsU7BBpm3XK9HqcN9ytYr9g6bNARdqCPwZfYGu2LhuWigQp3FqCLw",
  "key17": "3YRL2Ct8XndZCKnUTcZSSbtxFL73mck8MgrvXdkXspmQF9LM8ETBLD7MFrbxBdsPAzXmdB7PcxRqHdgpuEhhfg7m",
  "key18": "5koDnWDzCTVUsCo6Ua9zJbRV3AEWFFhvvX3en4Yu7fv4UHWBKeJuZwGXZEWjLAEFdFL25q5U6btVQxPNXgAz82Kb",
  "key19": "96LMPcEUZ6MijsqxqAJBenX3AeDzPVX8bfWPwkWw912HBY72q1LVhG4PG9WXihYfThp4NW6JTNZQwgfpwcfx51c",
  "key20": "2Wp1fmSCcmtSSFhGmwL7dSmYH4oesamCb4qbFGo61TfwqzyC6HW9XwqRjZxCjwxJDQUQNYaDQ6qNqiZBReh191w2",
  "key21": "33QscpaWk3RKNkNZbfse1MWHXveHP5oFJJF1RhQXqKyit5fADhc4Sok6QnMAzuGoMKBFJHJqSnCoUuUocj28NZ1P",
  "key22": "5oP4G9Sr7Aty8QfKXHdRjnXn8QCVDYdNEeoTe5XBtZ2uaxB4RBSyV5FZUJ9WGxBZQ3YjR5sAfhRKZGY956EznAf3",
  "key23": "4sJr2kycrZrZVwkt9sAiga5wHaMZKZT8Xd2ihZCRfEW8Wa1fAvzVzD47JxNPNCEmMo3HApH1sVhe5avy6TsEUytn",
  "key24": "5jgRNeZmJ1Ffy5pbKueBD2GVJ8isdfagEgNDXfFcDwXD1K9Ti6V3XP6ChRiDhPmLXetB3RyWAcoc23RUXGqGNCWQ",
  "key25": "63Afqtaszn9ookUtiQi5byAaCHQL7cLmMJpndwp9rDdFzAjXk5JLCg4PDFNjLYHVExWvarLcqFZTbXA8wJB8VSN",
  "key26": "21We97ZNy3Tem9m3L9bNS7MC8kQRxNBVVMBYKLSCmUmhGPZmgjcURbkh2ZStXY9QG6N8xBndmPDsR5yKTMeyGLUd",
  "key27": "GqbHEezkXLpHdctT49B7scjjvQhoZGU6fJfU2KvR4Lc4nsN5N2DSk4U3F3GUBNtcmpf5qvfgVJ8r93oAi4rJUq2",
  "key28": "hRoeGvcJPtj6Dg1xZhAG1ThZyi66cQZyMMhL3UaWKF4AECvHtpUyu1TMT6VzMY5Na84VXidrtZbwosWA7LWFU7q",
  "key29": "5F5xQZh8bJAGE4KYYTbwqfcWvqBGwCzb3NEhqNBQtrNd3vXD2FJCb6RKiaRLzcGXRwgmzdPT15nmedZ8JeRspGr8",
  "key30": "4CV5iyjthwuKwmskWq3wu3YWmzCfXJR43DmGC9Vj858o4sUtfvW9wCD5MZzKA3j5xZigpeRMrsR1es2r958BZFMj",
  "key31": "2QqEm26TAnjuXeNuz2BNK3prKXJm3K5xbUaRpWiKW88MSqE4Jotrpq7qWtQjaUSmdRc63oNrS12zhb4fvJrUhfkA",
  "key32": "2w1AeSR7LpsX5kBocVnfaJd37Swz2yJXzb4gzYN5FDUTNoQXUTXWiGxXYdYvs2UGNaVXz99ntR7hHVfPKdhr6EsS",
  "key33": "3yd7kFW2GfHQsQrhSpRdSN7ondhGJiSdjtq8cTQ3z3fz7c7Q27DDorSjwQSmNGnuDWsGGYiDygy5MQuBszKTPsYz",
  "key34": "4Y44ZibE3XGiHfipKxL71vUucop6WRsMpXBPJsoChXaoqDCgCq6rjzWTfRGeus7iaQb2DPmu6F5Na7ELRPEEm9dA",
  "key35": "4rJT4xYBk2e3jtvqB4y5a2Xcg5nmW9ENEWFXVHkt3EijaP1bLd8kZR3g6Jnh5KdNadEnRS1Pn13tD6d98pG44RHr",
  "key36": "cNUeZeuNGwu2zACZDgu8eRRXoB2HmrATP88UkDz88fA3T5vmTyvjpjg9YA5LfqD8wwMFCbpgdhwmC6E9spVy5oy",
  "key37": "5d4zSjwxWEMoc8vRWpzEDc64xQTtSDZHyukwQ7q1CvjFfhF35rcLEkY2L8Zvx8hBfT3yD1B13yu1iVkaSVojLCKn",
  "key38": "BineXPYVpaDXyVbiCgoQfX9sqJvh9HRwm5yWuaW18gSa8iAaeqxdGWtp64vMuEzwFWvCByFAcegM2bfH1WnaNLS",
  "key39": "3j1gZiWNZCCnuMZLbFEo77s3BBd41Cd5737cR9XEyWGb4z4nREMbi6qEt1di5ubiNN9nKxXVZyYdrvnw6pv6GHi1",
  "key40": "bEMgjjSnbD9fssK33Lcyoih16NMqdLgnF5XbM4M72Sfzd7Vk2tKtzUuk3Fx9GC84uSPsYE3FmGj5BNhwMq8GcTk",
  "key41": "3uh1YEW2xmetfNtBTQVJKRHGCMpyJ8nVSzv6WAGw2qPzwqG8NCMVxF13DGe2BsAsDP4oQy7tA84MHdA8eMCKSxAL",
  "key42": "2C8HfTUxcanqGVhqzRhhFuLQ9dhPU6Y2r2MzaHhv18CSyGH1bujK6Vnuz7FCr3QbARbGwydDtTnR6uoSTZcoErM4",
  "key43": "4iTEQdiMRdcNPyA9ScGRR5GpsvvLS4QvcDhFxCgPYg6NR7exFeWUpU21urG3h7Ju4zbXkghJ4PPipT5Gmduwn8o4"
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
