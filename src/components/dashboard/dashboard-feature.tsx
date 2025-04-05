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
    "62FCmDTiRPzqD3GUXofogEKKfDxWXngGTAjAD7vwaCtijF9ZB5Cpu6wibr6vuyMBqGejnDbE4MLdqwX62Jz14Tn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bptJEqVzvKbUrTcmnKz4uUB9mbrX4WhKRt2uxdHg2U1GKM3kswnz1vak4RwBRBeyF8daSnAxppoQZQQNJUjFCtB",
  "key1": "49PCjbdUvHs9SWJh646TDpNoYTfn3ybC4Y88y9XbMoAQaaz5oL3c6B1tzM4i1q6MBvE3RqZRj1K4xAThqoLrygYV",
  "key2": "3qLoCXAiYQQRWRywwpyMT6DHKnMQoLJoieahPMpMJBhfEewVqzmtCwVU4sgNm96LdmWJthrPmMjsRufyWenfDP4L",
  "key3": "3WdjNng7fQgjV6m9HUwaLNbbJRfVNq65ujXq6FcSNACgVj9DXr3dd9yWYQNpry7PVVfBXjyRsUQvhxt5hggaoKgK",
  "key4": "2qM5XAKroTru6BrAeqm42tXjf69A1BFfEfowP8a5nec1Sh9nT1NzoLbSn3R7mTjtvcdHQmpoUXDg2LpZZTnM2P5e",
  "key5": "5aaP58UAoFEUrc3FeHFy8PkyUAKnh2Ei5RWKxBc1fo5k8dRVdX9nDS1rPWtTKsihn7T5HFxuTMMmyiB7jDW1zymJ",
  "key6": "EBxbQHnhqhtempDamsmGbb9Feci7Ge8XBE6kkFduYdQvb7zKWTUZhgU9ya1TXQEJQZaapRzbrzk66DsFy81BoFE",
  "key7": "25JamShBRdkCpo9ef4rRtQeCXNuGWpDZVFC11jZahY7dAf9vGa7UfnUCgE1EJuDyqsDXwgJAmUcJFPY9bypY8p5P",
  "key8": "2FLpjH2wni9WQxW1Jydch2fqekGzkn7rsTzeh6JefC43VnZsb6pdWB3EvvDbUkAaU123xuJW8hFxRAN6j7z426EZ",
  "key9": "2UQ3imc6st8dpcXabQq7y5KPkQNpRuk7dkfhifnxB3iviKJpAX5NbEzgBez2wE959xXHKoHuuXcFLbE17PcG2mLM",
  "key10": "4CVud9xkYnHZuPnCiPSC48RMha6vR49M7whXnaCyWaGbvytZXp62uA6W6vg4myG1Uvmfy42FnRZyNmAkFWp6wRfq",
  "key11": "5qn3V1TzH5R2gZNXF9wdFUyoHFxSSKifvodRNKCyiRromPjWeH2B9z5AyzDfY7TJMCCELsqwnR1AMoTF1YiN8YHB",
  "key12": "43Ehnph3iwiPNqLG3dPYR7oVjjaioNhTjTfA32yqyUFNJfLxzepnKA5CQTNDpq1T3Ke5fbUGFFZz7SMmyqWBn1qq",
  "key13": "29ESkr94343i22iRZnyGBrhBSiuGVZ9gUMc1j1zFSSeoMPnsedUK5WJXY5ET6RxGpf1gYwd5Hbw9Fs1HHiyc5qRH",
  "key14": "gXJ5x7B3DFc7TKaKLEuLQQufsMrk46tzsF9g7nTzUCEQgKHP7G9H4gNNLM6dtYuYb54wV6M3C1oi8wVxif64TPw",
  "key15": "3XhDfv93SMbByAq2mdnVW7Bhm1diz4nSEat2wM7yCsRB5eAMr3745CVXB8z1g8EJp4ZkeD9DuqzwpSgyojJAN6po",
  "key16": "3DjEJiQH6Rvyn2Gsub9RoihWgPuGPkabkCqpqMipUPsh35U6radbfZVSAM38NZYmz1g28iA42BTemKcK7fWeYU2Q",
  "key17": "3VpkKwYLeYihtsPobGRnaNtKuc4hekwu7ukiz2sh2NM8pnZW1hTvWBSpFxRpyL8J2gKXWTbo59zmP3HHseengTky",
  "key18": "2M4S3zoFrPKsgf7mv8fh2nwNd5tzWzkwxfBaMMgkSqoVPDrGpEDprBFmgGe8DtmFwYSmCv6t8hmKQ3gRSQvA1YH5",
  "key19": "tjKvsUVuo8nkbRnU9evArYVwjRCWZh8x3QyQ5JRzniBSCFndDvY1TckCKyXyEnw4HjLidGCFkXRa33w6qnAMokV",
  "key20": "3DxCPUP4jsLFW5d78udCPbWC3gNNjmn3KfY3bnyJvzubT3gB7FfA3ohXXMs4PxfJ3jWbByAVAg7un2AbxqSDjoDy",
  "key21": "4hBiVG9b33cVJhYKALmdUnmxG4KVPeW3NhtwX2e28RYY11doczXqVZTNvdRKY3EWkNX2USaUQjrNZXdpQL91ejoa",
  "key22": "Fv8yx1gvgrLPgi2TNTExmEAcWjgJ4dptDsne5cJk6urmRyCbeX37VUpKdGLkHprHmhaMQwv5o4L6WGvuyRfcCSJ",
  "key23": "5PQhca8bkADRfUwP1r1hTFAbZEge4nhRB3pqNU58FbgVjnZqUBEUQ5oFkjnHeYcRF3zrLmAX4qWHZcz1aqUmtGGL",
  "key24": "36DSvbGEueWdBxWN2zdbUGLqiFEgKEL993eWTNtP1xXzeQCEyarArhbo4i5tJPHJNMjpZM3fdT9Az8Pit5i44vst",
  "key25": "2f5T8PLfKTDToS1rvEdp2bdS2yL3cmc5ckZ37VCbJRTidQGBVq3aEv48PaGvDkbuPtX7Jh9V1onqmiUPF4JpCwRB",
  "key26": "C93MsgZLv9i52iiEqP3JidHSEq4fhhPDVrxv9wXEiRZwBDAWMgAYZPSwyvfV4yQXzsp8Qb14nmQW12BYHkrPNi6",
  "key27": "5ebR8GRZv7ZmNzGwodouwuG1GdT5Ja5JRvMBGHzydKAnqPk4rxVbv2PUMjWpstijmqZYvDdFWLZcG47T8Czm2dgd",
  "key28": "3FnMHker4jL7NeKcRTKTfsqBUTcsDaQKHwupcBm2CN4tHq1CKLono8WLTZ3gef3gDQmGwknfV11YQz8zZb59Eb8m",
  "key29": "5WzSkF7sW7jbqxsxMssgLrp9NLqib1yqavbSPQb6cCsgd66WzfnFYDsW8KTMdEKvNBbNmH9UsU9kZd3jMYmGFymA",
  "key30": "f2ymUAMw3qSDYhGDHSLjmZBfdeWRLyQokg3YjdFpfDV9vFr74JoPLSudrAKKT589LfYTGZBgBLppiXBxorK31y2",
  "key31": "S46xCC6cYNXSPNB62TcwcbTsmFjqVb5FUxvrK4yu7aq2RUH3Ec5YcNW7Gga7AQYVvgZDgAL6GY4bBkzrBx9Qx8z",
  "key32": "3RtLrQXg182HYfa1pvnq4Mvnx2sCpfvSSwwP4B6SPB8rajR4NcAxmD2oEbKDqz7iidEpC7eACxJeygBQjJDDaNU9",
  "key33": "37Dd1eUyrqiBXDdtECX735PHhRD8ETYE7eDeLxZEb6S1qYM5nMZ8958Xqbs8xynJG1ogU5v5oVYQV4MrZquuEQt9",
  "key34": "1n6AFiKwDVrgRgghcAGkqcjDPK835D1iPKYqAime6NjcdNnE8gEBZYE3cNNtgXm7pi2wozh96NXuV8oAdnNQrBH",
  "key35": "59aig8KEpqci2JY52dbpWkFR8LxmFVyrKLck5MGNDKHgUjnVBHAJRNZFiqBFf22N7tirLrVgey49rCDZs3X9MLKV",
  "key36": "52HGrKtnXQdL4mBAxwk4nGDLkHkULUtLZzJHWpRw6pkbBV1QiCXkK2foviLFPn4UujfSMEDgFjEoU8b4MqhyHjTX",
  "key37": "5U4dKm6edwat6CuwnK8iKrtJdkmPNMaduPuBTVeiPvCxcMuTPcW3xSTkVySs6P8HhnFQjez4XUU7su4jB9P3jDaz",
  "key38": "46Y8VhcLQeV7tPGHZBKyo9CtzFFN5DVZCmmesmgrf6cyugzdR2qXkZ6o6LDJ2N1qYPrfxvdvkWmr92SpTmQkgpQF",
  "key39": "58LzkDvvKuTmXsD8CvMA7SZESrD75SA4UWv4fD7Etw16ruyFBgeirpWaaCv99gT4uAjnDxjRQuJk18PJZh9x97ym",
  "key40": "24ELZy7uxYaZ5PfNhve1voZJjchD8CukPSLMoPFAhbFd7oxWBqYtoXPZL1QR6jeCphrQ24SdVyBvrK8y72sLuJCe",
  "key41": "2vhdhcJWLoh641MM5cWrDYLedtXgoBUha9ajMw5BsM2WiUvdE2PhmgN6f9bNQNsRrY7Jz2vypAqLcheyX6T5C7vg",
  "key42": "3sJurfnx49zg3LWVmfdtYMxuBnSP2GhthYHxEu43coqZpexEYnbtKWFqoW15GEkRiRjDaG9VzNNtEoxcS9tRhfmN",
  "key43": "3sYcFVtV57NuFE3BhMgML3wrzCAD7Phgg2kRoGuM3RR3bC5hF6fgXjVL12gnbNUZGiNy7oe2ThAkbCt2HCsXxNKR",
  "key44": "5Sh7vEAaZfoU8V7qhKjCpskPYtX3dZgjumZCGAxoCGE7oNx4Ri8AcFk5B8iivnMFHmr62Fsf7ADPpmkNjE7tCtPq",
  "key45": "3dqedMAEv4vhsy4K9oDvDqkrTi85hJkoyBTg3HqtPD9VkR2LmcN4hXgXefnm4W6mHnWhPJRfUyRyDaxQ3VKrpDz1",
  "key46": "3rtm3LKR8SrwPkisPd8YxGKC1U2r2hHj9EpEKiNdwonU6SdH824uGZsFhYtosNfo5pHcxpiP7jPu7m4Q9pFSinTB",
  "key47": "dRuTTEKBqbVUKk6AvaQxNzZ59VJSHaknvcRttyufYekhGNT3WrwWcoQmMANcABGzDSktJHkQUUx8YQ76WgXRgEt",
  "key48": "4dooLejFW8p5qT4ZXSomL75yWZyTS4nhVupn75yc7FYStycej49Yjwc4tFcXtFS4BHV2uskZZQeNehsp82NxYvZ5"
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
