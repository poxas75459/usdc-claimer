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
    "4RdZN2GW2KBQLMS5xTPs81ERFdoBPqBsuJawibL4aLEJH35sm5zyKygtjjCrr3DgXCTm4CKbR6HUvXzvwL2LBM1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mF2aiKemnJ5Hvh4WeSKQoW7FzsfwnMBQ7m63bdNxHebJwE8czqT4ZfscWMWRrbuQ25KLB93zBFsKyjh2tFKGxSn",
  "key1": "2NLeUD5FAUa78CHiJ5vPvxSC7hKq5GpqEYiCHcYDniAX3jme23DzYXHwzLPW79QmDj3MyGqUPAkNDYxJWqMCMbSp",
  "key2": "4msTNaRxoiGWpqXHUELGcFsoqTmqvr6Kvw2YUUmL8EZNgK1tJ3dA8ynRNinAHNiJ4CJDuWhtENC5ZGS56EMQVgMn",
  "key3": "oov2XnxZZasovB8UiDxTpgNzAKcgW8GU8mzXNEqzTosF73q6oFn5SgrXPzqWU7E9dsZTnpiiBTEwBWu25ZbRMMM",
  "key4": "5U9HfevhhLDrzNJpoKAQMWxRQgkXf1YTWcZa2VP1HG7mHNZCXtZm7oceChiFNwkyri3DQBoMTjedqJpxdv2QrgYB",
  "key5": "61APKj9s8MckPip2rYgSVY14zLhegfjxoYnpr2iyk2XMtqSm9Lq95xrxXRjBxChjYM44kB1h3XUw26XS9XwhXZvd",
  "key6": "3c7xdjyME31VRhHmnWVCdAq55Eo67M9ZzjtwpoxpkPo1N72TP3XjD7CNrWWrSLQZ5sFQ7mSssVUjBTsZpE7Dk9Pg",
  "key7": "423ywvbZGGu5utJ3tF6795rgZ4xY5jPWi22sNuf7jTMAN9H7NbKrCkEFxTdPcV6PgGZGmVZZiBTzLwSgvUKqUPPQ",
  "key8": "3Mcbjfxsgeiuj87eREhuRdKMJoQv9DgH7ehXkvwjTL8aYrtt9xT1bu7CzWKAcQYqXyQN6GNspacKieo2GqXTWfgC",
  "key9": "54Q7iCGRa8ZtbdaJbBmd6UdXiCXAtgmEstj2y7DaGusDC7RDusiGjxWy7ojqpQ6jVuGS7NWBt9N8UW4PAPMwQ95i",
  "key10": "2AQy5tWQyGAm4pt9SdKVWEug6vsGZC6gukYRt7Xtd8K6gadNneAh5SBD568HXoXqawqWkoxhjzp9yZDLtKKkfvLy",
  "key11": "5DJLCnFdgh6MF2dPscnfh8XtEzTXBH44Bej4r2JtBuPnkxFkEc4iqDnPrUnZDqGFEhp5ruZpLLYicisLaQTX9qJ8",
  "key12": "67iyx2HekXDPsJmCYNEQr3oWDzT4yChcKVNbSzaTQBwVV738YZzsGWSCo6jA6MzAzBMStPvVC6EWfgmXovat5DGL",
  "key13": "3CzkYfnBwgjDVMwWkxDR97TYW6h7P2o9UTTnJCEWuSLz6Qa3TtctvkEJKLoQtMbrLLHqj9og13wyiipK3zhgGzyB",
  "key14": "5Wtr1VyUEpoDpd2ZjNXvhyHtcu6xrMKNjS5cngYuzkP14ivSU4fzNdQU9KWKe9gH9FAMXbLN526BpXmAhun8xim",
  "key15": "5vDR71L2WUVWtdiwaRkcQLeeor2GkSTLZKVfuoCJ1F2i29z2N9aoGroNuGgGfFhfy42CtMnzy82HR9KQDyQRBYmk",
  "key16": "4Zc42BQZPkkp4XXFLzgv1RMhiuhnY7RUxYqukvKkXfkxKvPpsXzFz719r6JbtHSq7NKDENbhjN4tovCarQdpAv2g",
  "key17": "3XDeK3LefrYxvhbHsRV6rTjiqcbZf3qfXaMBeik3oP1DMhwgJqbXzqSoKDh6V6PtfD7pHpQEKkj1VcaBXh33HnMJ",
  "key18": "2Rhygif1n4HoQUpE7YJHiNRkikfseH7Rfhs1cJ2qgXQnUwYmP52hYRLBYJBtzXxUSTLwLnWd1Jhzn5jX33qmGDm9",
  "key19": "3GYuAExJDLCgntjDZa6S8EpBxjDtXADLYnDtervT3JubWL94n7i3n2d9e3yGKjK6q4gb4jfarLV1xkYdfKurUwhz",
  "key20": "5YbuwJzrvc3RhVSd1m8TpyGEsHJEi7hsh9Nw2aqSEkufkQQW5c43ACsScZVYTge211dSkfuXipuoD2Hw5xg3vBWo",
  "key21": "3TSzvRSy8y44A5stpgLEvAmMgj64kmpfbR4ZJ8a4jN44skTZkqHjyDFEW8WRsaGcWU2fRVGnVbWsbvzU4hSBtvfh",
  "key22": "KaGcRYy6AoYtnbFcTmKmZyN7ueU5zGJyqAgdaYKMKFTe7BMVrpUcb2KWGCpen9PEvNTMaC7TtMetXL4nFgKJENw",
  "key23": "5Rxi7dBbXThryCnviZmYMjF6Z3TYK5xWQ4LLxYp9UUju8DZ3a3yuqyvYC9EU6U8ZP9HBcQvxrKx6pBu9ECHwZcAU",
  "key24": "5tHiGVvJ6iMQyi5bR5ASz5nys8sRfEiE2zbUzq9VTUH7DZnJiRBB9oYFRqphLmUkzmMYW6pC6k9PLfzXjVj3X9Pb",
  "key25": "kiDXrsc1wuVo6fvKXAoL9oHGfjKfoKE1R9EwV5qEMQbJEPqhKJkWEUeFWnvMrLJotkydYTceuTgbR1RTMgHP3V8",
  "key26": "x6z5JvpzYt9C6zCbDdEjYY5E8HU6aEMSzj58Xjvnk8Tc4SWSCDjUWfhYt1Ae1ViDZqVqCUqj14hT6rMZBEVtNQL",
  "key27": "3gnuX45AaHRTWq8Vn1QjWbymVx2DwvxjrQnB13JRu3eV48MXyhh396eP5tnmvaDqfyeACHKL9PKi9MBm1sSMXqdW",
  "key28": "mggQD2f1Cm6QzXFKM3Fqs4rneSbe2LhhwS3NDxEZ9uucaJcojthM43ducQoQ13PW8MvvdtgVEZqmF2UjLfxYuCL",
  "key29": "5fhCkTLgorV3uk69ho7AokGHEY8LW92mQNKt59fFz4sXGZTGPJDn6u3zCFgjy7B5pujViw1s5ufq3jgc5XHXXree",
  "key30": "2BJQkBysCQmfqjUeW7eHVgRBCok1pQhxM12SwyDUpXv6U9Fi4gpQWUQwWsDH9mtovYL2eRBABjFaQrnHghZgcuix",
  "key31": "2tak9eJypwRgR5s3K7gPtRoAzRpwca3bSNMt5S6BGMTDq9AabZf2pxZTC9rKawxfhuXJyw9UUxhj4WDwDJmTWkgj",
  "key32": "2AfsvfQi9sKP1NEhGsUYbszCTpuFvCHSacfrY1thTGyrYdxDMQaFTMBVZopFMkgcVkyXtY8AfzTY7487CbcHb3CB",
  "key33": "2TKoCfpgpErj7vxSPnAjcbs93LhAktmN3eX8kXgXmuoUMUNvuaj8SbKkYXCELhfF4t4Ds3jwtSzSUqvAnZvheLmC",
  "key34": "Er2fzjmNYgiRK2e5RNqfbZ2WPqk8ktaoxmxHqqJMuqytRPDvt7PAKR1FesQHcssWXsfTw1Sk7d8bduPrgusGWdj",
  "key35": "5Rmg19dTKBy1ivJ6YPBAkAKpDiBARf59vNpf27qJMqBNCZnaQ1eokwaT2sPZdae2ksPQKTxzHRbiJhhG1dda8A3x",
  "key36": "5LjmAac8oKEkLe533oyLXMo3JodzLdiDoQw8rEtmby1EJ85ERhXU2JKvHuVepjN8QqiLWCucCF5zdsXhUypPpcqq",
  "key37": "5UqpTamiEkTmBhk1ckrhwjRyVfjQpTarHiAW5xNyZhVDLaK2oWn42GThp4ooCwdrysp51rCHu6HRn2uCTqsoDpr8",
  "key38": "tpBb71gNP32jMt7Z3aNmtqFdSag9jUGUUAMxVurWGBo1H79xFxrm8U4ZgBu3v2f7PAM2bFFXZH6tKZ46Aho3voG",
  "key39": "56C4jnuqJ44VgREHxH8sGU87i672o7yBBkuV3pBAqA4WuXjbR5QQXDoG932bbNwEyjYW7mSDtPEQQsNv49aGyhKJ",
  "key40": "4gE845psiG1pnTgiYjwz47pXv8yv19MYnKZyfygDjVnjnfKXXgN9h8BoSwg4GU1KrWsecM2MQ2ezijKYi6vSwmNJ",
  "key41": "4Z7LhvNbYneuTjXJLkdoJZQT9Mry9XYT3YqJvvitRyw1RGsQhj117ASsBB1HzUQFxs4qs9wHpP369ConXZ6HpR7y",
  "key42": "Zygds5QJMJdA7T7sQEx1JKYXyEmFvkVkwmozEf1sf2qRCWB8YdYMYNkzYmRavm9WXyyPzy9MYkDwR7XznLinmGY",
  "key43": "5Eohi4HRwihStqX4BbuxAGLE6FSvU2koQDKFsmYvUpCDh2RbEsBiYfjj77fCiAbH1sKHUg7NbiZfA2D6GyxPnC8p",
  "key44": "4CjnQGZUQuEvhG2bWceaPhtwPwrmcca94SJ59dDVR3LxyEBTNBQuhnL2menDwNNyZs4ztmNe9ju2HGJAFv9gzdGW",
  "key45": "3NUj2zKD5gqPMcMF8HqCG3eogcocZT5M8Ex2y89ThiL1Rx4GjVBDSbUKbTrKRPUuVZm4o8A4MMXebhjmvhbqVoeo"
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
