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
    "5LsUXJTdkDNhTeK1DxUw2cMUCq6osrfYWH7roTuXDfiDbgkqtzF6GiJipADc3HRtWuphsxcWGJzjKsc8oCEYo4F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULgvg9MqvtiqRK5hMtE5TCAMqtKUYxgetm6zDBgCk2un2cdAcuRZR4H9ZPwoyn5mZErQ3n2AEC3717iW33ePhHD",
  "key1": "4QCWirjJBBZDm3PJ84Xrr4GtX7ZUic3UuFcgKj8VwXLJ9Ny4YbUXQBYF2dJx5LU9PDkUbyGjrxNT6MymuCT65ZVg",
  "key2": "5RUz8tDWUypEfNmyAaEf22LH8nb2YcVnpjvRJVzMaa2mhUYpY1GyscRURdn7XN6EFpeAb1UbqVux29F8F1eG4Pc4",
  "key3": "uMxXidy1XghNocQB7aw3c5AeLKSQkWw7N8WnHcU8pZ2ssRaZGULfW2FSmdEMXpS5zXqmTtCZUGtNKGTqHijAjPY",
  "key4": "oPbuSrt7W16SjfgbLp3VcbAJ6BWnd9frLUGJsSaKksM9qJnv5fLQv5D3mE2AgJykmWgQ4ZMMLvRraBSfEa7pjf4",
  "key5": "4iP3dieLwcj3YdpGXxmBiEazpN6n6p2xQYWn4UPDaHeor2XH79w4Tki9EeRFXTfqD9dgwHqmgwLpCHa5BJtEjCpY",
  "key6": "2jbakQHeQZ6FSaaTGicgdAezcQyut1hCArY5cMnd8BocmSJ7tapF18rJtfUPayHRMb5rTFkTXSrs71krQX47riR1",
  "key7": "45zBnutcuxEMPj87xaK7J4Hcut46H38XFqMj7bb1kcxCSTaRHmdSHdY4D2f9HXsyjPh56koWB95QKXvdkmdR58og",
  "key8": "3sHTjXbVbV946uoDeLoQE4SDAXtmbykKrzNgvhC8qCAS98Zc2381RL8GUU7Vn6goScFVDQD5RiLWJjeUrqAtcMoT",
  "key9": "2yCWns5WZztUEgWgoJ5rBeGQHYRiCpvkspLEe54W8VHcg3GfomFDN2biYZ1L4QfZ9WUu7t5J4pv4ajkAHjvTqkWf",
  "key10": "453p83MMUUaJ5ve8sFRFSsQHmBLzoXmUGL3MG967X7m4AQKvF9jeKam6xqsNoog67LJfa9xG7H6b6cccr5CP12o9",
  "key11": "3KmH4a1JVH9bA9xyfQcgXZZNHX2W7bR2CjzPEyaKCxmZ76jmmxdaQJBQzc4LLCDbrQFBYhHYAoYjnJCj4Kk5ifTi",
  "key12": "3AsfZX8EkEcXLjF9stGMY43Vc73PsAiM29g1facJShRccHLaMHr876VnKCmR1h6G73JhN8LFBkc3uivRS8hboA6c",
  "key13": "5RWEzabeNXUiCS4EwffLgfE1ned4W7eH4aZuAvYHjLFabnLjxAyYbMpEwPFfT1xjeTiC2rb6ZrEVc3c1bLZ1NauQ",
  "key14": "43V76kjru8XYWYfn6fot4Lmqt1kCWuQKHxAmjEMV3MwT87inE61JWfuBku9o5YnpFtbWc94tosZGLCb41VEQGSmM",
  "key15": "3KJaDPUzrdv7NtcCL4Z4EsqcJ7TgCJgPiZMsPkUy1eWru6TFQ3ymep1Gf93vp4KAGDRYS9CapwG6krbfkUTmfwSb",
  "key16": "rPTrhJwRH7Jyqz7725NjZdTqJpDCiNjJjRnYnW7MG7Y3symhA9BgV64aFXwuqbTvyFbzWas1QbPaEoG3nmombUm",
  "key17": "66ThW74C8it7p8ot9Ync9eHoT8sEPVY7AqzgKaGLDdu6B9PRFNE717a3qDXWvRQ17ChbHncjqKyLbJChfN6Mfq5K",
  "key18": "2UKwrJDy1BdP7RovfaTHzE7LJqm69MLu85sLNoL3EZXe5vaeKqtREWKyJFVVg984JsUD1FDBJa382PKuCaE9uinT",
  "key19": "4efPfW2RVPmU5LBa7qXffVVnabVpVAiVh3iQQyAqUzpLuWx6xJjyQtqcLAaSCQL8xapWh51m4VtzSM2o4XsB8KYR",
  "key20": "2umJkLRjpFLU6TZyoZk1eSxtvtsxsNuT4c6USy9U53fDfu4CydheRFRn3zmfd38WKngao8HCpnaBmK3waChCBh4H",
  "key21": "Y5x586igqr1bESshjoSDJHjBcBTr6yxTGGF785GWuo4Z7fsuAx12YjAXDhHNJ3WQZDhUhtuSFhKEvFSuDCANJMB",
  "key22": "36GY8LakGYzvDXdTKrJg7WqtVwh97HrsU7RU857u6MPGfp9rokWLMzg2qdcEVpkgAQdqePG1U9W6TjkmxcNFvtP1",
  "key23": "5ZVARbv3w8F6K548uePyj5cuDBCwN91jt95jAyxALiy2TmcvSMF6fvdEQx2XHY5Lx17XVRwnJfrxr8g4x98cM95R",
  "key24": "2osjjw1ihUfzwx86v3bJLxg79VzCr8ct1kTWmyyZiUF6M7t6nnvTMW4cEsMoQeyS8ixaHvPmXqiT6vDGLsmMt6hT",
  "key25": "5GnMNxobz5YL1vFxz36XvtZwzhPpthRZtjmMYsDpZYmu7KkLULsUeWfZxT9WMbHdEkuYVUB51obgDTNydhWyGxnQ",
  "key26": "QfmaTPJpsZkcvg7su9DZKb38Nj5YpGTVgcvULcfVd1oaixb3V1TgfCdLpKdG6d2LpTwLo1WNiDsVHmz22gEiFgD",
  "key27": "WkSurRPRzz4P6eSCt75z4gJVjgKAvwFSNWwJDYL8taZScGn8FEvqSb3woZ7ZPV5Rwn6C2JcLTAw6oSVXJdAJZoD",
  "key28": "KdZcjBJFYYkUUKjyvh9vgCCQ9gG1efvvoB2SmGckuCyNwsiywHYJvmboZBKfTPYZtTm7XfiWmKeaw2LRaS4pHcx",
  "key29": "3zs1sggUWTnAAsdEBD5Gn84aCxhrJLPhSfTzuGfZpAvbpKNzx9iEYh4JM9KTrEXR8jmR2BaugL1pXJTmiebhN1Xs",
  "key30": "3kxAvwvFzWzdWnW4NNYZfCcJ7NvpAyb7zisk4eFW1S8xYPfhTjgGu7cm4JpoGMZAbGSnTxaw6rRVaUfHiqPUVo5d",
  "key31": "3oS6ii1f1msmcnM4YfcuEbg4MatJ352okqGFXarPHi6EhXmjh4jMKVAaGKYsX4gCuJsJjupFJdAujSCHdNdH7XpQ",
  "key32": "5Hn1L4B1Udand3zXr7G8ws1HR3C7AmJxyLyexCMxAGViesig4SQctsKFGnXz2Dgh43ne1qSQYhV4AGmFxWjzfynz",
  "key33": "5v2EadNS16aPccF4zjjsoJ8V17iohJAZTm6RYYMsuHqDZhW6H7ipD8QN5ejecWzjkH1ECSevnBDWdgqAZk6DjhYB",
  "key34": "3bCMYdYcaHQsVEAHcR75aWP5YHHPd1h3HmqpUX8vm7Pv9pgpH777FNyjX5GGpQ5isQaF9fN2s3xdwPcwabmHnJ3A",
  "key35": "5DzARMeX3mpL1cGvUPmGc8zkEjor8yZdPLdRvGe5SrRT3z6QxNFa7WKZgEwe3gnT5tAbnYGdaS2N8wQzHQSjDExA",
  "key36": "2EpHf9idRffrzz4hTzRvUxNQmFNdL4S187j2zZu2Byn7USS5heWCGitgZP1t7Jqkwoim8SWCk6sAci1gD8S3AUi5",
  "key37": "mYSQz3x2vndbiYSxq6FNBfUEr37i3Xd5BrfBWYk5Rf9ukL2HTjhzC5DSgkrDGmkKYCyGQrr9XEu3SsXkVGCnqSr",
  "key38": "4kcykSvooo2qbWer9ZqVGTdoJYMHeHGvXE9VbTo4gDQEwHftsHERx5WouFxEjbrZwLiK1rahUrZxKb1KfNRqy7aW",
  "key39": "4GuBE1hZey4JrNLG296KBrnk2ASNhE82kiTa2AerH69j2K6iNjAGaWD8XfE5y819E4qDFRDWuagGpGGCJN2q6LY6",
  "key40": "45DkKUuu5XcSip9o3yhDReAZehJQRLdA3ZS2rc4q2uq7k8d9CLie1maPPfmMmikAJTnZ6qmEt1eAVMuqdoUP3aJg",
  "key41": "Vg6EF6c8wZ9nU9tnF2vAZFrbMhULAY5m6yxxTHE6dcyxCEYEcrPRXC67i2N2QTEVuDxGfeTZ9bUrU4UBLHjjjmf",
  "key42": "5dhQogqNhGkEUMwSpWNUxSPHjhiiPPcBwsuoqmhFW4tyasdyevTwfx9sxoKZ8Lj1ymQ9nuWMTvoGcqrtxRiTvydP",
  "key43": "61SqLbsyHNnUkKY27YqVkW9eiDjsadf3Xd2LDxjipRZSsZCqr8tMEyexcq468bHrFRefCtT4XDYShka9cmPfXFRM",
  "key44": "4ndBuj3ucxBkXdFaWd64ukwkF39agdSmqsaVVCkCGqwns2xjhWmzGoASWx1SMPYhkfzKRvTT39mC4FmhTqU6RGDf",
  "key45": "5sKHyhLDVLV6tQriJgzVncH3nSZ6tdfucLMs4SSaTAxod1AwF3XSwjdPitQxYZ6ccfGNiQsXnCFCqzX6Dpn61kyu",
  "key46": "MLN338xcdUvBV74Qvdx9vUTk9N4ECBJhw8RHjbeUtVYr8b9S8pTYJWaNA9DU9PkSVebF3LythaW8nNdwvnS4sMJ",
  "key47": "wmqCr7vULvsFC7qRLNV3seoQ7dYpNfKXkPLeKaFw9H1asL5PB6pjCyAmQJdXSKEZvYJEMSUHMLjf8XyArtUu2WW"
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
