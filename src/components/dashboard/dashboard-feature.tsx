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
    "2upHa6QkJKcfDneMfn8j5qS6AEuSGY6ytcfeZjSmg7XckvT6qCQ1eH9dzQN361JMEQkCZ4qySekr623vWKtS1hCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2exr9tLBHQdwATBPf9BoTWrcypM8pbpi8GKPmT1X2pg5joxd6icGSWgd7PridvxpxSDYzz9WSRsEh2zfGpxUCM",
  "key1": "3HfXZ5ks6NHF2XN5uPPqetm3AzUGhnSShHG9tC7E7VmeTePndMuBkQeoEc28VNuRfw6AUTwkVbkST6bf76pT831R",
  "key2": "2qfxwZ6dU1wXz7jNGHfanYDAnJ6RoffinTmTWsd7fBxMNnAdKxFpmuGXJdvhezfsjeVUGiW6Bgvoi4A5cicGKxUk",
  "key3": "2ig3gQyYQvTLc8sEyooXVSqn6WBcXkZ3SwbpDsCg7ocRDV8xgQfnSF1UYB46mxCdemNWfqordPxByeGK3tzRoQUM",
  "key4": "oAQFuQQmDd7qReGeeUgwu6hFBzaZwqvsLMDk9PinZbSWEY5jE763N4V3EgkjMhEogz891d6qqaqLtvHZayzr3tP",
  "key5": "5YqxzejTFhykYsBfPLKV4hL5du5qgwFujoiaUH8AThbqi87AMj4s8x39wVZJEP6k1AoPmvYuMYudJmL9ys3qQDXx",
  "key6": "2e2M12u2asmNivLF6UoYme11UQiBNTPKbmpHYSpurp6a5oxP5SNqfRVxE2F2Vc32UgiHbzEKRLBgkLAJS7ubujG",
  "key7": "5ZQKgftXYQxAE3e2MBuuU735UXzCNNEkn2raeukVdJZEEqaiChafFBzVbvHUkzuMvKrthEydWsra7WoCMLQMWdwT",
  "key8": "3V8uHkCqbpDRDhVYYNu9fEWeWyRxRfe5UALpeShXj9dVbyYKkic5sSJ1Gqh3QtujKy85kovrG2tGmvxAoysMG8C7",
  "key9": "2CPfjXmB89gtwChP9dAq21zGUzc8PxVaxewj8z26wmhDjWPaKXkUqTGk7Xk3kdEac7LSPnkfM1x1zdYnmqZWeV8C",
  "key10": "58bEmLgj4cFXSmH5uTFvimgbgK4vJ6Dx9JV64N6aQcpyP34RictEr5LyADpZcb9ciDKnFF2Bo9V7Ur3BqDYhsurk",
  "key11": "3bf7CUXK5pVsbuWgVCJaHkcdSDGmPAWT2HDZtsv1WMs9EePGuojXDhQafQKshTRb5eCT1ENjFhGhBbs2NbXeYgad",
  "key12": "5Sc7iCzgCr957DuHxGL6E5FDTmXWQ2tdUkGevEUCveRdWJ1Lfj5FifaFB7d6kXGa3vZzmojG5racVSQeW6sGiLCB",
  "key13": "hVjhicqDUy4k4SdAo1zJepDbv8TyiWirGhTnP5FCjvRwwRji9gR6iuGHkfg8kyEiMRAe2K7USVgy7MTtyaxjWDx",
  "key14": "656biVxUbQUtqj8uzLVxTFmnm8b3GHxtMZFRqWxU5ueZ2genH4zuycdRRcsXPWvoMNAnVxYZx8nXfLzfqEpp8aNQ",
  "key15": "3rXigu4LSYy3639JtkofmurMV8rSWnmqzS3GftnpjmK6fudzeUCi6XSaXT9oYNhMphTbGq9Reg8fyoQKwskZf94A",
  "key16": "3P84ms7gE2RKViPoxJJDZwhhUQ5hXJq8qwHhE3GWXupehJh5b8JSJVVnvpmvhZ1dDZKQBvqnTkNCXGbuLWprH4f",
  "key17": "5aSte4NKNoVwgKip28H3JQokaSsfaYxpyufSbcWMyWqwus3BqZcfuPRaJTABqWcTkTWcgRF5A8qggmDwM46Kz8FS",
  "key18": "3ap6sYEH6xuibyM9DLWjFgkX5B2k4RWSVA3x5PMpqHiQSd23KwTVUqoqQPGHXiTowbkWwqKMAXKRjKZg2fLxJQVV",
  "key19": "5u8kDtLe95oTT6kZX3S5qfH4RyLVRC5wXnn5caaTR9XqapfR4jknTToTyTupfwiGSe1xVCRxhWCzxR4JLEj8cHu3",
  "key20": "uYTm1nCMFVj2uHCwWCh8KfSywHJg1UrYYokvZd4qBhT5PCpr1zJ8fxiL6H6yH8eVmqstCtA5Aq7bHMgH1wbPyVa",
  "key21": "4ww5Xe3Jbxo2Z6UJ9CySFjjf7TkUEiXcAjG6guLMSbhWGcyWeYtL5yUFQdm8v7JwfTni8ssAuKyhGv7RzQxjuwL5",
  "key22": "3gTu3nGEK5XfjeaiPWGXFLoHSxLMSJzf5bznBafPU5iNMYrq7oVkoSVQXmbf7oZ5yXbFQ3x4YD1DSXhDxVgude7n",
  "key23": "5QSUZhsyiL8sYC2pxcazhN5eRtXBdDNgPhhYf4XvV9csXQB6nXPKgAiMh8VPwXNXCPFzk7fiThHosCaNsUjUkDiF",
  "key24": "63op3YEoVyZMDVNYcHNd2jJVwnqvgqsewXVaELKja7FFjSagUpppyVpMkHU6YRcNXYrHS4LNB51by2m96BRuixp6",
  "key25": "cUR7dik41dLUotzV5W5Erx5kpwNSt11ieT5DEZj5RUwwgftRtY2Jv73sgapT2spqaHqLswNkER2exJeHLNCRxPd",
  "key26": "4BE4WUvBUiG25r1ChSdBLLxiT88fVtCm2dvWVZUGjoERtsBfvYTEKJpmsZt3TcaEcBxSmp9qH9jK4u9B46yHTAH4",
  "key27": "3U9vSTKg2W84Jybo3XUn5dj6xQsEP8djCqhdXffHjwN1P9qmYNujWSLqRiNmcM9D7K5WC9jyAtqDnENLQsCJ8hiz",
  "key28": "5Cz2BzF7BYmYZR4kkdijUN9GyBxp1vXjof741irRXaeBBv7dmiZPmGMUCMWuG8GGBeuPBaqB7fs7VeHxFaebK4iP",
  "key29": "4s5ea2yYzfca2sajCauUgUTxsW42bHJeVi3FFXM9VE3kMQCFWcmfbAQzks2atsUrn1C7CnaEjNudPu7N2Bty9BX2",
  "key30": "3FWegRF3Ra9jcG3RQobPwajxw5cNwwPFEapgdu36DnFhsxVM5vm32NbhPUNCzsx3pBya5PdxtyhaBt9eDxnf1ZdW",
  "key31": "5mF35W8czsmBfyYtCyQdc444rMjPaPngbALYUEf6CKhkamRzw1emZhqqTC77d4HeB7uftUdkMb3ZFD5wvVaDDH89"
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
