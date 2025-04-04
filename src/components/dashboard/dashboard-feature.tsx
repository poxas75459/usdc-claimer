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
    "3Xpddh7yPwGhfayNDY9tYDmq3N7G98X5dBjTz21VLuFMWL8GKyY1zGidDZtaiRP3Lq7UUs1ZJA7auoPmdC8cYPfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wyuhK5t7VAbTQ7avCbRX8RKxfJvoXukw7TibDyNZV9ZwKfcE4tm61Pg33XWnww3e6REjmZsjLTRdrViwoxXgZt",
  "key1": "4jKCzkgkGocgFnAKgU5qMYktCFX6JeusZH5zKkjWSLEnos2hSiWLHiVrJxxhdrHFo9mbVKfBT4k37ke5x1So3ECM",
  "key2": "3FoBN2V5b6XfbhVGYjZm7jNwHhoWbg4nPJT14dfcKmiFK3akrFbbcmWz6my6tdEJG6Pwpi3WwHKZa5XP2qpQjHXJ",
  "key3": "zsgy41CwSctX5DKBi9Y4X5CpeJAXQxc67VAQdc4BdLqPCJsVjGidjtzgpWUHPqgZBjbmifoi9bGjtRAMQtaxwga",
  "key4": "2LQLG6PecjGCw914Je7noCu4Ek4zHZJHt4LhphTs3KLWC6qz7TNbpd4wkLsjaCR6UzkyD9x9vYgJ2v1airic7y88",
  "key5": "4Wjwizu8AbKuCrdE5Bt688xZncmvvVoBGKb9mP3qy7jRzjNpQgQqEATKaVjU6MvmbcBmBuxaK2Lb4VCjVeqpWWfS",
  "key6": "2nwtvGiVprkmEtw64KYiXH6pZsfScBN8mjkNn6kt9kHRvEQiP3SD9JcmDfvVDvqWZUBF1vC5buTJ1oRkSVhXv6p6",
  "key7": "3NfVXkMkf4pRsb5nLYxvn6SQkdK3XwtUsfbdz8GbeWV9uhxZxRKhzB8VrCGGcbGCbam74CrpuVHgkdtFwQczDj7r",
  "key8": "2Z69mTDcsTnnkMxhvQiGQ6Vyd3d2pPFEYoyyyt3vHcu6WTyNXynU9w2Y7z9wMsyad2hGQCaV2r8pv2U5cXPdm7Bi",
  "key9": "3paWywhranMnVDY8g3T4LYWrBXCcJAECgrZa1ied8KjkExazArzPUSWJyfN26QW1VBb2kkuAUwcr5WJ2etfHQhNz",
  "key10": "4YcqfV3ePyZWBaXN1vvjHSYj8Cjc8mQkdz1ERoR963MeVtaqKB9ueskNR2n9QqDpwWPNnWaboG3vdNmwrK4rQx45",
  "key11": "EK1SMUFXxLM9tbdUzjYGjNqTDHmThj9bmtBmF8jcP99PHi6AARuKFi9Qf7ohjF2R5qYyNmsi4rx8W9EZVAbrpox",
  "key12": "4q5nKEswjsspik2WHnFPNZtFWKLURHE2uyQPWmdE9RWxWpyWGst1vbWjKYMcVtWb9tAetKvRFFCQJrP1ML3oaNU1",
  "key13": "44WYPCgTc7ZyA7YEvqsPWoEtqEpUQctbvgkMWsbnGXGqTyeEsPP6AMGES7S2tv8tVF8tvysbaPHTpKG77ygaRbSR",
  "key14": "VB2k2rQTshPez7DnnkKcYrshj3prDG1JZ3x6H6827kEG5WaGre7zWp7fQ5F9XWhmEQSSipzT2oFxX4iuLi935yM",
  "key15": "4EScED2Mk8WrFRGGq3znCmf6JsAbb9Dpr3LLyRauk3vr9gxAZhNWS6ApMPdMH5HYiW8MLjnVT32krQoWcmAQCwbY",
  "key16": "5Nhu9F7LQWcJxAnmeBX1ZQhs3PzWrNXnZuxwm774YQytBXaEvNHTg7wNH6hqgH5wdyjL1wgnus86TfhJ74fMy5Kq",
  "key17": "C4QqAqbuGTDnNXLKgwNjxWigkoTZoUxqh2EUZ1hssMMhMx3xyABch5UzvC194RazSxp69DENrpBVL3b9DkmjZhu",
  "key18": "3XDGmv63p2vnpVfTJyD48VFLk8H9wK2yar5JBScbmJamLnhqcbvqrTA49dSu66LmVcQr47gvDjsZcUgjgqsUS1TR",
  "key19": "3vXXFYbJ1BvkVfY86WbXoYPKz5p9oGpzxMioeTknPKUTfKHfacQec89TvByJ5rdc8TgpfTBAQ2qotdJnLW7Htt6n",
  "key20": "LP3m8BwVEnfWxhTVoErap93xoBa9eUTQnnEf9PNv9Zt2jftDinav3P3YyV63CP5kghBMoA1od8oQ8K6Qz5gUnj2",
  "key21": "4fy6rU5GhqcuEVkVo8r8XEFyPU9LLLuBWHkfeSfzvKeXDkMeBD2p5mFai2dtxzLX7jJnD47KkMFWsqzpYo7rYPhR",
  "key22": "4Mx8q4t1E13JkUicUPSLnSiukjGDxKkGYYAyrWAzjtgRQxpzq5jFmkeUsoGbX6YHGejAGSCvwo1nBYTwiJzeu9aL",
  "key23": "3ZqMDHPkaGn5X1PwLCBfyAyAUggcjRiTv6BoxTrzu7r88nrfKa2S6rj3RTmHnJdN5bSs44zwvrJfMj6j5TSeMTaH",
  "key24": "n1uggFu5W5LwzJ7zHPN3wZBDXenRSahrtSCyRYNAv9yM2m4FpvhLPpjMKR3kPc46K8F9Mb5cemhQYAapo2zY7y8",
  "key25": "4XLa6zYMKfT1TutDS4zv4bnGkK6WbdiyusTVU76cfZnJq2dDchHVPbWrZu2FrmV3ko5CbDHjVtHee9Jw79ninB7P"
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
