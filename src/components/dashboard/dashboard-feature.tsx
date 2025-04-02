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
    "64DksJ1ETNvqLbL9RtH9VY41SKwr5DYYkqu3B8bJhhSBWWGZPPLVoMc614N42qoHDgRLDwr7weQWFF9JNXQhSK2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hH4wcbEs74Pd7pgcwGcxG15eWNx1esSXMe8WqySeMjogyE2NWZrL95jHJgWfSjgUEGUao8rp1dfR1px2kUDpFtU",
  "key1": "2oD5sm1yHctjt1WcGmteaHv4Ku1hmH1Jcg7yhFH6waqzY11UnD6Q8xPw2w1DjsGsbHCuk4JFHRTvSpu2mzFCWtsa",
  "key2": "2Ge8ve81nJNsZGRTynEjAjxw1uYxraQsnWdhfXkMgQCNsfjKQ16kXQAQwGPjwuYTn4fAE1ZCwxshs9GRSA4j1RPx",
  "key3": "2yiRqPCrkfho3scwnuSe1mfUtA19L8Kdh7P8C7sZMbtH349e9WGPC8cs9szMVm4JtZpfLFNpuoQVH3W4QcCVFgxM",
  "key4": "536opFJyo3YcVjikeeA28W3PpuhGWmeoznXZ3VYbDRJXeZNVMM2GmzPi9rHVhTFzBTCh7QYr1cE8MqdGgNUSm7yB",
  "key5": "3YYoEJxNRFciYiwXRxLeHFw29dFe8i9J3t7Y9pqANTKCUV6Jv8YeAbHnXaKxgivo1geYz2bcAgt7wzSGyJn25skQ",
  "key6": "5gZy2sYfPaVppfrhb7ZU6thL6VdQau7HtvrbQnTwsVgXcpi73jy3Ru6By4LEMzL8ZtmsLLse4ZL69w281ZbczUSW",
  "key7": "4QCn8Xbt8852fHDJtgcnexo5FrBRC2fKnp3Mx4XnxxQKpiCpoPErEecw6AD8oU1UP1eaUGzJhmHHRbZ22Fnogttt",
  "key8": "wLWHgzA3mbbUyn7fZo6xfrYe7kuH9BRW4yYcUNmCBquNZptn4usphfJx7FAc2SqzkjUK7SNUDXH3vyAU5UpsKWs",
  "key9": "5o9JSB2b1idAkrtF1ZWTZEksZSTSoKmc6gf9rt8dm1ggWgvAQY11HbTRrFTuYm8uY6KHp5t4y8XPqzvetjmVtecc",
  "key10": "4Yf71CLaH63A7ERDodvma2XziaYenk5ZzTKKmhQsrr1XjhPyM18JwfhosGR1Kfmrf4KxLsMMwHcgjcb8oQaQKV8w",
  "key11": "2gBM5Qjj96UyQ71vGucwz6A8LQwurD3b9fWamZXNezfMgkP2GXB9rG9QDKJNrASwm6SAyL3Mx5NvXHwcofSKUiyc",
  "key12": "2w5ZmNphgmCs4zdwCCFqiLBZwS95btCDRSCbuKBXL263j72w83qq1jVkx4PgC9rJDXdNTKKr4b5cCShcc3Z49xzX",
  "key13": "2o7MxnuWEtWfc1e88c8a5D4qCRrUzAzjSbHpXTPuDtBud5kGqPTFzt65k6q32N4aaaQHtikqUr583vzZ9tzvyjre",
  "key14": "4pgLfThEwW6dJTBfRtCzyU1yGrCRJ5XEbskrGJF3j19RMwVQz7CdkcULpbvJH3HxbmfBCShLhYmhX7T3dQxWZNsU",
  "key15": "4HtJ2REt4zM5BAJrYeTMfo8EyyovKFaELt1dCmCZm9LhyvHwuXASNQcJpo8Lqxf9Dg3fd95UqgoV4zNTZjH2V9fe",
  "key16": "3P2853wPBgxj9jXjh6eedkxJcPF22c7DLCX9PZgb4av8iasff8rVw8J2gGuj62V3cG2Xr2CroJZUQsHnfjYPCK3B",
  "key17": "4nGLwP6SDWpDnkWTaqdSbpuMDnc3c3qxFNwuJaqvpAU5i7FgAe1kFK17bLdNwp1wDP8sHTKe1gXsgSfxgEgngZ7e",
  "key18": "4A1DzbkC3BL2w4MhpZjAE6sHTDZLaENq8XzXhhB6Ewu9u1YkqQxspm8r8g2QXuWGpgPTmduCfwgspiWPSUXf5EMA",
  "key19": "2ANEATR4nQvcJwYMkgsNP3c7JXEuEoJiuAH2RVCcmLYM2DmN2HN4GmDjsdjZuhJ6bDdTSNTbCn8WRg8uipansHQZ",
  "key20": "4uPdd7YfdPFcaCPQWXxrnphuPCDEtJkv8bjcQsGhxh5y7RzwC8JsaMMtqMPJ3126F43LAykhLRtUTnXfnYaTCB7w",
  "key21": "UsJhGbyrmiSqNxm6qdHUqsht72pnucrqC8V61z4ETypm6CmmFXGCM22ogYyKUbQRXHKNkt2vtsRwkqrcg5S1EsL",
  "key22": "52GELiBuKcSvvry3LjFw7vXDtkPziHGokexX8SG41PQTgxXHXWKVaeTfAP9eRLQgXagss8yZ9zvywpxSrTaJ7rKd",
  "key23": "3aCo5n56Ek9iKBRsKt8Rgx5JmVf5RpRjW2aj1DkFpMTtxgSCiu97GejhHVfPFycxRbWJJKrgeD9hESn5SUpKSMRn",
  "key24": "57gJZ7AzV2Qedx2P2j8KZ9ShkYR7fV4A4ZWeu66QwGJoieDFLXA9Y7WE17X5aFLhCMCoNhZMmbaNNfequtsinUM",
  "key25": "4raBify1zdjdAhaX9LXcpMtrhiZ1M6bGYJiFbPBW75JetRfJbF48BkzuYhBdkWdamwZq6g7C5Q9FB6uJAxpCJnQx",
  "key26": "39DT9dgy2MRpeQsbbCzABQr8utUha5egvCW2mU736KLvm9fQswCGWmXHA2VxE1NrRArme4McQLH7rzXSvvz3ZHsT",
  "key27": "2wn4krxCCfwD1sDCBGmaRcGvHo1n9WgpjdXT5aAJFQ2rRETxgqZsWf4rJ546fcqGs7kQBAAhYRTopdfhyKYigEEH",
  "key28": "4SALMimrm12audBtLcGZaFETmetrkuEKp9v31iXiiEfL9xgchzB58xk6TgJxzDdmCBJ52ZHkJKmf8T1fDmRE5awX",
  "key29": "463L3zohEb8d6S14bdmF7rrQ3EPwDN7mEXtstPc8rHM3JUDb5afYVo8TTxW5RdyWXu3xzaryDYPrdwyrAtHgqF6x",
  "key30": "31HiVqtKdEXke47eXRoHDKJ5kXt3evSEGmwuwLYjjMGjPjkDNYvrmXyPNJPfRAF2U3h7AoSwQDdZKJZ7RzuC3gVz",
  "key31": "66GvJrRpqQhJ1n7ViJVvLeFvDfqdgZTzbhfuC28hzBJeYnZvUL1uL5nAiG7CaMCTfj5kE9CzNBwHEfdzJVQzUz3k",
  "key32": "2VSmfoGFt4mrbAuqZHK8HSMh8Z9YAhJqoMvLgUJZ3gEYASu9eoLkAc1bYgvKXJo4PfuhqJ4hJHEUoipYuXvkUL5P",
  "key33": "3USGCBkqTMJKHbUpyCSe6wT5uXQuzLbNp2z8WENrd5yRNV7kNgDRojrATadz6qtx4kTNhR7HUrdvdiJCGJxTDXmx",
  "key34": "3Vmi8AzACatsatb8sksJCRNLW99WDznWWEziM97gUDHscq8dMwd6UZvpJMqR7B2jdNWjYhuu41ncM5S1psj9j83k",
  "key35": "52THfQFqX9DDJtuQngYZDCzKRmp151Ng19g9UJkNfRSxg37ZtyhvzpV3rXWWUSxNQX9htHT2h9gyKixyz5ttmKVT",
  "key36": "65biVWtpCEnAhPaVrdpbTCbJKYkN6V4LXJY7zB1kVeBbq3Mip4xmqpNA2JXKZiS8QU8fVKRmoHnmFwTh6Lr8dgae",
  "key37": "A4Gp4SaBGnTM44Z7DsmSWy8hps8ruD5LixZF6PEkC1br4J6JYG92SK1etuRY4UAgGqfXeKYrCXCgPdj8JzZdDwQ",
  "key38": "5KAUfZ9Jr8Hd5gaAi36yRDhD5NYkeFhC1zMZ1aWuhZ7a4ZQAEV9QxUNr5tUKinTpmXNndSsMTiQw6oaatH3i264G",
  "key39": "5hunnFw7hDoRuTCkhPdHyJWiJTMvYKFCNSvkXPFa9UZjdRKXSkyn4FnTuiR6FiAsyN3Bv6gzxGLMB93Jg6YrUahJ",
  "key40": "5AzANKZJWzQdroTTjqbCR8XC7E1Las5VjQ4BeXuVi9ZTGfweuoPfNGHvyZcjnkFmeShpM4Jfygp9Yqf1hf57ZZW2",
  "key41": "efz81iVd5MfByPs3aLqApn4JzwWr7zhrdoyfmVk4T7Ykw9rXY4HCa87n8PEGMaF6Vv8T8a3HhGassGmXtEXZ1hP",
  "key42": "5xgRSuAEQZc9fFSNXSwbUN6VfUy5M82kVmkfrBZZ1ReYVaC1DYNVTExB78aa3tQEF89Amemh8iQ1z1ENfR95QyWf"
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
