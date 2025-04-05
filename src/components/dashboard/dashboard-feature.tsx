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
    "nmToadY2RcCNVWWWNQxgLGfWfKH84pQcf9T9tagAAk8DSa3vA1NjPmbfDJfS7afehpm5EuwQse6PPTDqAJGGuxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pk9c1LrTFYUePAGpGG4kv6QmgF6BYCsUCupznW6edyhcr9ApJqwBQwrhdFm9YLdvRHY1Ymc6jmg1Vq7TKd71fWD",
  "key1": "3QYqBkZ9tKGbNpyTvoXZHdS5yYBfncnzNt9ef26QooRNHcpxr3zGJms1vEL49z9JAwJ4WC5xc12kWTqcUUC2saFA",
  "key2": "3EAgccm9NYNkKcwqRQHkhNqCFdjvY4XL923BGnvGweP5w84Fh1p6zZuBFfMt1KkUjEtsUhAqtBdJCcfXpgicxGJj",
  "key3": "55qvHtLvQTgZACpHsKLaqy6YVnG6b4imYP1jVqbyG1frzVAvFuoCe8u1ZjQfu9KmTcee9pN9cifyy8oga5sfmq85",
  "key4": "vkeZmWLMK4f3jsvHwoV6Zoe3KjYwXWdNsBjnS9mZKmfT2qCYMu8wsyouv1VgqC2KM3EPEE9phpgoRBGgBNynsrj",
  "key5": "62VwWmjGMxaBZeXWRiBVPQhL3WZqoeJCtwKrvgRZ3nder8h4EnwPYxog6miZZvRUAWkBmqh4ytN2zi3HY3zpnGKz",
  "key6": "2PaSFt8HmfxSQgx5HppAQAeACvpXDVDghLsAL2636j9nFXB5cTUFNKzfnfxev1NZeu7TusUQmky3KtyZFxFQBps7",
  "key7": "5nM1X7kBF8MBsYqykFR6qokG1STududLHeSQ41tp5H3vLNQwRoWws8audzwDPTtYtTqz4oWMmsmqx49gwufZufvi",
  "key8": "62w8G8kFfVnvxC3wdK79ZkeTa49WSmh2SRqR7YFHbuvSGZeiTh8n1QTnRU58HHdG3LAsWp2DKNLuZUMtnvSNusLA",
  "key9": "2UtFgxvAFibvkieopGsTcN55Sz5ppHJGp9F3XXseoPzZuzXUoK8RNbTD5VKAbtGvvwexQxM6JRzo9pb9ZEf4VJky",
  "key10": "647bWL7UgTTUJXMKMAFHy43zyr4Q8KNGX9sWPy6Qgc8dsKHFapCr4ZRkAnTnhYS53xhK3dMqrfd7BeLCNx7AvgPG",
  "key11": "bx1eJFhhd8iF7XcjWATKnsdyfWM8TzwVinnBgWhsozb56JUVuoBbrB8e74hD59yv9CJVqFpxLmeFZhdX5Rv8tah",
  "key12": "3AwmP5vrXXbCNyca25vo4KPCudA1KNNisDngM1eTynMPFzx7nR6dXWGqcEcRBEhuDDnePvcixsYnNJZY7tpBSBJ1",
  "key13": "2zLJkPy1rS3poN82RjhAzmrHVgRZ4EAHQTxACynRHYz7YHiCdKRyjKBKiqq9EK5mPuxBnMVCyLiVbUBJhqozLfaz",
  "key14": "jZABB7GXSMGsenTDZN48HMjoCcrasBDGEWd1G3kMjHcRPTk7VjLMpdWXXvFB6BokU5XFDtFo44JJsMMZ98Nhavm",
  "key15": "2zxm339iLq3pbhjXhA6WkygKmSMYu4Fym39P5ywnUhgAfuSYJ4dAsCxxduC93bxkZJT7vK96KR3LpHXa9xt26Lh7",
  "key16": "3CrFMhE1kx7sPPiQ1JBngUGE54S9pDtPZ2Xbk34UepUgVYFXot6kfcqS5syMystBoNkPNo7TW8SySjatbncrjfJj",
  "key17": "ESN6rBKXFmTcJsyZRAJqEoLLTEzGWzVLTPi3KJmgNushKu2rgp2d1TfMYSFKzx7mCzGV6tsJiUAwcgTZqZSMrZj",
  "key18": "3Me9WNkfVg1iFtLgGbebH6wGbD5LjcQPoKy3xdXNcxDRSnq7en4n3rTmp3EGM7FzP7ZXESpmD51ngfoavLcS44c6",
  "key19": "2wAMaNiaJEEEzMrsuq8Wo2pnhCSFXAhHzU8M29m9GzZwHoGyZkY5o6RvzmuCR8srQqHHDLq9rGXWb5t6Qspy5azd",
  "key20": "3bKFVXQK1aQkqwqcs1nbMN74UFCx7bsDu82gHxzUsxBNms38ZRiktJPGcFpaLZbZT3CMU5oBLzdexYkPj6n1cqcG",
  "key21": "3BVp1tHDD5aZq3ikGVgnMaR1xqVj5MD3v6pq99uusWsDKTpUhbna1Bnez6QRgT5ykX2oXkBChdaMRJ8gf4iZvP3j",
  "key22": "kcBrrJSGHTsn1nLuNXWqtAtUBcNuZu5hVZpJbZqDSB9U2ZyNVCFEPa3gxmQ4tfePqXW3JNWScnipQfWAfNdWwjF",
  "key23": "2x31k57GiHhB66AhPmnnrpSBokagM4ZA9J7X5wHHrgzxPzmSUfN9HSeEYwrKhrtgEeAMmfGLkHtu8CBatXPbYuzZ",
  "key24": "ruunhm4oWMh4BddG33ByCXDrzC4SDrko6qzryWF8mGDR1L5rcTtYXSHvhFVjnTZJpjzT3ezzMZBKnyJUkjSuRoS",
  "key25": "VixdUx6vLgRVRDm49QnzJroMjio3KhCAM16y9WU5rbhqBskLRavTXnm64xEWCtHAGtSXdPNn9uHaVFXnmHvjkFh",
  "key26": "2XhbSqz8UnkeJzZeH62BUKXFf2hyW3gNxaQ17CB2orUMGs2QRdcpCqu2S5GLzwi66QJiTSgyDsnbKDTBQ3Wsvz81",
  "key27": "GQg2d1WskQGDE1KLAzqJ3Eq7y7CQhwcm4BJxosXoP3WxAaY8HJQuBiUPiM4hRtQqo6ao74rRVZpYiuhNvd3bKoF",
  "key28": "2uGeiJ9KX84kB7eS6cjce9sUcCw94yBv3ZGaHnYoFYFT9gSYjRF3TuLeJkBmuZjePtpUuTSe5NTPe4voziAMsrUT",
  "key29": "4yrKat81awayGKZG2gnXodRu3VPJpT17hyu7XPzgA9p2ia3Nitb7uA2Wzj9DhsHGzGtZP4w53nwNxEoQAhx4mSv8",
  "key30": "3STmNRn3ptakxT9ZHdKNQ6L3s282Er13JVicNPZkwQC1SMNTAiwy5cyQ4UCTuRQZE5fon9kfLttM7R1u3v1LCZqm",
  "key31": "m3F48Ki169BkCBUTSg7Q2xK54o5vT9EfLMhNLoKa8bEEZP6LdSx8kykuFkJuXEf8hr82K8hZijjoEB8HRnSaBgR",
  "key32": "34r9VsVP2m1BiMhaKZj8q619Pe8gzJHHF3Fd9xbNAKroaiEigysCxNyZxhLupGDPiYrHnPMXWN6RDGdYS9YHJVfh",
  "key33": "UhwtJmKjP5NLkU2LHFem9QSKhBieB5zSApU7eMHrn8fLGU3559SW32DxH97xkwMTGaeG8q1r4eeCTXSsLtqdL7y",
  "key34": "2Bn2ShqkZCMgVvetFgG2B6cJbkr7LMtNzJ5Q4iATLDpjafw2q1qDrNxNHUqc2UFgEEZtD6asxh8dTU5Gz75bvQMC",
  "key35": "ECXjHQ5TNifgYyJngk57FWEuHiaaZn1xbiZgtwL3gpUvRCWvefdWwGA1aGmsK3TNJtCN6b7giMDJkiL8aQhGUuw",
  "key36": "2djuMWjaM2iMMrjkj4FVjycCSfjY9Z9ykC3KfxD84VezNGh9wjdbk9zYRwq4AjB1ecsCi7S949VU6wvuMg4bgjsF",
  "key37": "5m7ZsSeTASPwG15Kp9wqH3ecD47iBgHKeTXQS5x7W5bvVnYsacNwoT8chpGJGCrrk3VyBJcuop4T8Y5q2XZNX7Pe",
  "key38": "2CFATFXMATjdSxucoUFQB3E5kd3qopjZzjYgaH6rpojn3RwWbyxPrBcQ86agVHEQEdKfqRwm4uoujCbjcRZn85Qv",
  "key39": "53hc8PQRRJXS135BzDEPwvsVWMwZH3J6Piw8cBeMtTUJpusobeC5q3C9UEYtQ5C3z4LJpgThuFryEUiTjkejfoVK",
  "key40": "38kpr3zLSAybFjX4UoukJctNwskzFsncVZjpt27bQXdS6eQCWscpjBmgiBZMHdV6sQGh9gQN23Hoj1PdW8ZWdHMe",
  "key41": "5pZdmzxQXeC45DqGmWHmxTDaQxdXCSRHRgsTzRiuEgKLi8D7jQNE9VmM9wMXW2vTkoM3u9w5MSVc6eydvtXjfeFz",
  "key42": "L8psVppNixfr11eJEkFNMCVaMePSyxDHXsejpfpg3MWS3CFKFP2SHAhLjUxEsF49epCGgAo3YeQUhGtNnb6h4Fc",
  "key43": "66PceVf2UUkpsQRFzsRVkPY8DA1tPvrXwEW8rfQLcBTDtc6mHzCCktYvAeKf6wAcJBBMPPAeoErQBbLprrkVFQXk",
  "key44": "5yo7PPjM9ugjdWXN5me5mos2YC8BH34TJBh5jrenPXUuXx3GUdCGQvaNRnYjZD5FSABme3tzYprYpfgbAHoNT7p9",
  "key45": "4S52W7Xmgr3BUKNY8d4mDS2qhmoqJSv3C6bCzWbReCBfoZFs8VF4WaZyk9AgfKCngr4Hjq5MHg32VogiwS9JkfS7",
  "key46": "2yDeGNMzQPQKqZBxPKGnFJYNh2dxx7RExypzmQr39wZVqfcsEuLsjMpqx5XFDq2GzzkEpdXKFAg7LaS72U2wXYos",
  "key47": "4LcPiAyeNt71rdQEhZe3Z1nFfENVUQ1sE3JCHuzkYUu77YNUpjmPQszAH2KugQdBox142tewreGEtuxXjyYJZWkn"
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
