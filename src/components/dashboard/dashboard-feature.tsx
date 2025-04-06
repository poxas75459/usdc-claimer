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
    "3BbeoEBxwY2hHxevQbCi75PhUKZNDGuvhpvjLojuvkh4C6c1AKFp1xcKjuCn9Xy8j2JF3Zc83DpcKxw6ZkBaQkmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTsJYTqWy7QunRrJsW8BX3Zq8pqRaSETAUXNpdnLGV7yb6663oxVdfLxXX6RdU3TDLJ11ao3dAxNgXqivvtrHwJ",
  "key1": "KsCwEa5rVQCqywGTtW2fFGKKhUQvFr9oWvBnWmhDB4iWUHf88paqfXVpg1r3MQr8yV8wm3DowPHh88xK4SPmq35",
  "key2": "3VnDEPDUqqhKosboSrRTeCtUvHWGNm7b7w6TfoUnfdcRaQmxWKwuoXsLo6gwvzoiSBsUTU2M51JsaBH61YbwLWrw",
  "key3": "2fbSR8HDcjV1gs4XNUXvPsmcY6JjPgJQcFse7qrxkRVjAb4KPhv4QWGRZE95MdCS3u4oGmUvqh1N4yfMioc46doC",
  "key4": "mhNNdxdCmxzxx3LCogSHpi4RpDxieagKKJn7pPGeRUtgyGaVvkqUSckCGWjjp9oMFNMSquSFmC3buemuB1C3UMk",
  "key5": "2Eb7RbJrCMTZi4gpu62DPhGbvgCKofYAYaJ5wnuWBRVFWgarFznzBDuP4nxg1EWbvnEdYjWe8fmrixgAQp29Pcgk",
  "key6": "3ztQruAJuzq4EKN6rTSwpJh2kmkFaZRam7ZavGuc389qpnSJBFw1A7qMTnHDKxNWTsdhpbGoAhTG45qEpF9FFsEy",
  "key7": "5oUDvQy3q8HWgbY7FjKneiUnLaYRE3nUvDaEUvhEaX2gdKR8kdZDQ8MndoZVoTMBEfJSSMwJygoaavHH4vPWR5dW",
  "key8": "2Sma18kh3QsVeinXzwMKYxxu3FCyVTT1UoVbnCbtm9QuGqjWi56ZeSt45mJMeeDuiQT7x6gv8SgcUnufT9GgAEqo",
  "key9": "4ZpoiofMzg2KwLkUvPpC1esh75Jv2kHGWrvW2eAm5soiv7T5uoYELhCjgbFr79si3YZuJLkL8iWHBAUqRe1p1zBv",
  "key10": "5ZoKecNJ9k5JrbS2XkaNEhD4psBUw2dTkcgvsa9zSesyLFHUXydYrsiHcphZ3zbGttfBifpg7KqHGYquVBqd9Rar",
  "key11": "3RYVDZNEKa5WbjxQLjdmRziJJesQkFXjXFchucg8q7TuPVQVuW6rVf1bAH1R75FELssNjzKbrqyYVGLvYkbcCacJ",
  "key12": "35ysUjFKR1xKoM6AZgKQ6wVh6aPJWSDKQ3swSr73gZ1LZZo1YJDaLcRkJHU4Y9rxRipBmcgzXKBTHP2vDbVSWHa2",
  "key13": "4mL7VuySLwjWDDS9iMraiM2FrHSBK6vLJgnABApfY8UXQQKzyT7FrVRDeue3uUDUweDJ46LVannmDZaKvYQnUwza",
  "key14": "5zUwepLcFssRtizP3BH1j39h6kiuAydcgJ9fwidL1DZNbHNbX3EWdJG2JGJBnbem7njoKywvkKUfajiitkmZkr1W",
  "key15": "4MUeRYhvaqm5E24g1Giyq9HrUNDHr6QAS9tWRRRcCAG1kET7jgkAgpPfSz2XtUSCg4CY78979vuh68gLpSYi9nM",
  "key16": "SSWe2upCpcrjsdDDQex92ZnRbq3uif3JLkr6k4UaMWEdGnzbVvJuXeNmGx85LEPtg7cSu3up99w5uJqPkchoArd",
  "key17": "2tPQ5Z2MsCYJncgdCXjVU38hZdytcKAC6uJmvnBx1kXUmNbZiPKFsYhCFHDJaRGPo45h1eap6ECPVFsyEBqnFfBS",
  "key18": "4gF2DA7ZzmU2bX8YGcHQ3TEfisYvKjpsdwNSA1NTLnruZchTwQwgnBbWGAiBABWWf5a8k2BkeRfWqFnfj748zBFa",
  "key19": "URe5n3gEurqJZ2wMPZ8aVMgsJTmMp4q5wbyXT98Kup8ZwXCpS1nXHxiSvCKxkf2kFNZcmZKQ43U4ZqWVzC9vjt8",
  "key20": "59KEkreX4Df24dnxBxD6uCVdwgfWZ8xq6rHE5evPkd69noAmkbxhxrLhQsPQ9XTHpiDXGdtQYuzsaSX5JPQ6VCwK",
  "key21": "3dtahEPrJbZsckaNpfxQTBAvE8Ycqomu3mqTtTD6C6oANcogei8dx1G1vhJaf3MJ7Bkf7DADVk4xa3SiorQCSkcS",
  "key22": "5RRAWppKta694MkcSVFDquPTqpTjpg1uorpwWqN1Af9mkix9dEtMZgt3Z1NniLX2CiuDMvAG5fG3s9yeTCULm4y",
  "key23": "2nuAqUk13zvyWeMUrRQH5p1DYeemUU3ZLtDbGUD2SmSa4CjRh1VEFb4xqMjaSQrbsZ3hkAEfcYMFFdCqmLwKASa7",
  "key24": "3Dmx1gw6f94bLUjSEoohFWV6acvP6QZtC4XzB8ryzRLqF4gR9ukSWuPLWxHyJEhNmAc9c3rU6ptzdcSY8KN4hiDt",
  "key25": "4V7Q7yN8DXkUbYRgQXfu1EZxSnWvENpDHySqXc1yPtyaF2dvCkf6G7X5eJm8VQ6ay7CxR4Fwmwqd19nz6Hy1iUHG",
  "key26": "3Lhp8JYR3yZ414ZWY53Wo5Le3BqY5XQCvHvjy3Mpos4Kz4wL9QWUPZJ2V1MAWPMjbLRTn5moWRsGa3nYjfMfJb73",
  "key27": "4cebG5VQv1XHWiuCVTa3dfhUmfs3ykLBJd7BTWAhU5nMpkdP1GPveT4j7GSdJrfKQDt7iiqRi6tF1BLWvjiBML8x",
  "key28": "3nMB73aPhkBqwNsDh1qhM6bH8M7wMYjqZbjrZvzmRYCHB4SCgYU8bio9eafvqcN1nhpwGBo6RLDcwsyNiJ1CDZRp",
  "key29": "44V7yxBS13m4AfwYnKZrTBvPGAu4BXqJtmAGpVqmggqrZiuWQaHBJ4CLvjNmkunYB48S4gmx9qNKNgHnSdUaGnsm"
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
