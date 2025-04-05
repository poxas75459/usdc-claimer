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
    "2eqw8Ju543LMJJxdVCKCQ3yQFYauGMMbA4RuwGN44pNN3Eybz17UH6PbPiBV8ohoowdZQLdh55wGDdw1VHxpyrJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FicjfNMs5pnMigd56AcY2fXn81uYnt2H4KHvmB6wPKAzcMpGCaxKz9JKQTNnpk3WDCqaXWb9qj64ptJHMaqnJ4Y",
  "key1": "5dXyUJTXrCyfHkUYUHz3imjrG4J4sdqDb6xNTziKjSooSVvZNrqZcVGX3fZYPFgho1BGtK8t7ZvLUQ7bWadxFaTj",
  "key2": "4vAa1pkV2djcX9DkVTqivfZAoPMLcvMXBbnW6uw9Ya9PxfDTnrEs6q1mqk1FepNpY8Hagan6sXCu5HjowypoYJKX",
  "key3": "4WYXnVc9igU8BrvHwikGEeyzDroMzNnGSkw2q3acoLoGvgMN7ZFdnuUMzbDtzUSRTLf6Pwf49BBy2aQVfRJTny5P",
  "key4": "28CMjDFvfsiwubJg881wd54pGDb1ZPXmkxYr5EpzaBHBw7MLMREV5V9cDp1zXpDAcKTHapXDF3pscfLeWM9Ms3uW",
  "key5": "5dNBhgdZaQ8FfLGzudQrU3ahJsgRiLWEpwHtqueP4yghJAkyi3bThhwabU4BLgL8wydLSqMXbykHuB7ebbLBgPXh",
  "key6": "5iToRPh9xu8xNC6ANVoJrYzXqtn4xnuYM91Zsd3PDHzn1QK5SeBZJaxnYZv9aBwjwwHEu55cdS51gbQYXDqd7HeY",
  "key7": "2knTm9wKeAS7bPJREEEmC24UmQ4VxnQmxPbqBxn7x8t7eGthhJCBwxjD3x758QUxFaoy1Cczf5mxTP1JtqykHceT",
  "key8": "uhkKHeYMvxG51GjNkasYpnarmjgjTNc2cS4Rhp7iFbpL8mErjEHkqrw5TcqS3JPhB67cYL8wDLvWDufSDTDKXJK",
  "key9": "56rYqi69GAMNEJxBc6CNWH8XS1Ci1b7MAVLaPxVLvSX2j1PHZ9zNYZMcWZXFH3NJACArzkU7nP5Gdk2i8ii3bkbH",
  "key10": "2eTuyF7qvRjoBdawpfGwrPtKJGmQizDYxq95VUijtxYSYiaKcjyNhCQdqwYDQG5vvMJWsxSJ66jVETSCyTiNUiRa",
  "key11": "3RDewXkTPmhDdhkHvszjbZ6reQhm9H7usQM8vQW5DctLGB4WMGVfLaz4ZXHXFgNpZ9K9g1wCa2YsKroBsMKoeebU",
  "key12": "5xbB8g4sUXpfMHnH6mhZMX9HYkwU2M6cgFdYaS4NoDtiGfH67Gin8adfUaZAmPAVXRfEYFsdux5XkUH8quDLg4UC",
  "key13": "3u59FPmNbqtesCRbLCcUwspykhLGaLVS1DiL5etg1fGSD7DLH86oFN5wW9URZP6YRFWuKzbwpQmZEJU5fpTXhJ4s",
  "key14": "FXtyJ9HHq25SPXx9pmimwyHc5rZaeDUzFqMP3UrFWQn11Aqi2SdXVoQrntfokYedRK3JAbLdz4G2N8KdULwHiZg",
  "key15": "jRKToMnYJAJn8D1PUgDXQBbvX81DCd8LudG1DrbEzZS2reFsbNQUz1SNFsVMHxxUdDBQfLHRVKnpKwq7M9PFnPf",
  "key16": "48LJpgiqH7riLf9XQD9SPbdoWAejfdhvsEZ5fSoX6jbQrbCUs8pw4g8sFayuzvte4KWpDir7UMmiEKR2Jidn8MkK",
  "key17": "f1Y9V7iTCoekvziEPpqGsFHmLRd5FU5JjxJ29JBXASqkDfe4nop5EM27xr2bxAQa5VvvdybbzcinLGkoLApMMvC",
  "key18": "5CakmN7cEHmn9CdUp28HkzcHJag9t2P17pkxoNYaQTBcauQ7C4mGedRLger6PDVJEBgz5cgpUkui11tnqL27qPWo",
  "key19": "4qtb9uQeSVfqjTRBZ39ZaM8eq6GCKfJiycYMXob3sKuuYxxLREPpVDaYmoXUfYxXXKAYY4G7frjgMvmgdC1nFgan",
  "key20": "2wswLzt2rA48yc31jbGY8788ETRTr5u1ivFd4FTaKPff3Js4KVogoCXCNStoVDBjf2rogeJtDnt8xwBeGdfdkarX",
  "key21": "4jFZjSEcSU5oKhBgMj836uUhcqPmVWxGwzdj8QYHLHFUvRHKgs4XuaeTZwjgWb8tHNm7puAACF7ZuFnHUc5eUAHj",
  "key22": "3uVApdPNn4rAZUvAnUEyamKeVc3VJKvA4yQc7ZAxNEC3Zad2nPbmMJfUXUDYc3zW6smeuTmQWvkL8rBESJwvqoSj",
  "key23": "22Rox4wtpC5YbF5TyHbZeEGeHeJsRDFfuRBMiQWmmP1sjLimnsHx2QvmEJTUmq2sbhL9MqUGHT4bfTf1kxw591Cy",
  "key24": "3moE6rymU6qYwnrRCnjBovny9JZv7VR8cy2VLQd11TSsCVEjfvDVgdy7v4AKtyQUeieqP6Jv6GuU98RMC4xYvWEd",
  "key25": "4ybkCBDgacrnkj79BMwX3uQV8xfF7BZEcT9oFZjev54a9DFS5FWyw7BvY4YamG7Gb7dYLf3411cvLZxTo7Tuj1Gh",
  "key26": "4iD5V2vRzrpP856qFMfYRqnA6YmyxSLkdXn7rkazuxP6JDcsi24BDC5wWdZ5PLiEGaVfinQQnZukh44hkx7WTSFB",
  "key27": "5BA8UpcyHsCGyHsDhHNLhcjamPjrd7Ma3qUi4G88AkfQzmzjkaiLYuaA5wd9v1gveAWvWs7JvVQZx7asTxHqpeAS",
  "key28": "2pCmvLi5dAyxXpikchSTHdt2biYUywi4rxvVmNhpynQg1B45vTEw8EsTd5aXKdZ47TnQx45hgTpdLv1DCj41egA7",
  "key29": "4am2KwopDJrfco1B6hQkn3PZYTzGh98yzv4jobrdcVf8KZcKk6c6agtQCMsiAV3jcpS3eTdZXMx76zkk3XZk2rw1",
  "key30": "2exE8chuTdeFkmSR1NLpL8214zTBZa4HeLmEzWB1ncBUuioEwhmQUWgCT4URMfUPotFp6mpSenCVnJcFPnu8GWBa",
  "key31": "46jZiAdTrHsxRq5nFCKnskoAsMrwZfWf7Fpp2KMxu3D2ztitBwZdwVypv7BNNeK5iAMBECkqvDbASNjnPLQ5cqjf",
  "key32": "66ujzaQ7KkhYCYmfKJMUTbzFkL8M3DZrzRQgop6RrJLUZZnV4DpNSHwmcuKCV7D7zayk7vG48WyqVra4B6p1CNdt",
  "key33": "4q61HKVLi7enQaKS6Qk7VRoiTf1Cv4J9oHG3TSm4vkE9auVkgT8wKk8bdLfNiSYkpnDvdznErQCafTXjrNn6hUFf",
  "key34": "3oMYfitivtYEfzjyutcD47qefJ9pzoa7jnEo6dq17hoe94rPHRUQMGVcjcaTo3svuGWkxm2NMUrhcFVDQw5KvK7Q",
  "key35": "5DTQ4y6sCYgfCGXwtsSupb47j2MQq8cGkyiTK2zbutyZzDcDmEQhN5PY2Jo3uHg98gucPkuvBiyi7bjc8gjNyUku",
  "key36": "3aMBjcBavPJEK6RKPe82fRLBbqqPREe1UKxYwQfVJjpYNvCfzF2wDLDtfbY7bofPYgQG8KiUCXZjXvHbGcvHw5wE",
  "key37": "659aCk2GjJ8EaQxYw3o9K7uTdb1CARqdcUH5tszRdwU44AZ1RxUwEPvLL7GrRSZabozc68T2fXpZ2upShmij7HdL",
  "key38": "5bKrbyWZHExNTdFqcX5bPQacp39qGoE6dPXswdkoMuQhZCn4kKTSue7DLw7uz9uKi4vGCmNaAFQruxSy5EBJdxL3",
  "key39": "34JPfsxgi2fqKiVZStUHpvvtrbHLZxzQEuwnSrDnZ5V2AnPrhoU7CsP2UQxQAM33Egt91sx6Zv3mNs6UAzg3woVH",
  "key40": "5UKniMJSh44hhgH67H7vy6g9mwVxgzDkBGcWKsirZuj6FDCWgxcp2be1JUMi17XmrT4jrgs8v6VgocAnWRSwBKrX",
  "key41": "3izM8egArCdpfvqi7Wq7QJ9h7VkXrKf4hbi4h5zkGJgjgBjSGUdkS89WVknMBbD5foAcPpc4Fz1D9C8AisPDvPi",
  "key42": "3mekm32RC5bxfjUpJLNqxJMmQcc9DnivBAEDymd9umBu67ugjutip7ZFwAGwU9nk5nhWGwE2jqLzhP6Xcj8fsJVP",
  "key43": "4owhyrzdtWbXe8efnjynwtwABGaBvUthV6uUS5nBi6mQnq8vsXYuuBnUWTfzfzCd9jCdmjv83WPjDMJrekV8A5Ad",
  "key44": "2kmEcN5miydGJMM8EFTBiywPqFp5Q9HQMUnAt38YZUexderHxMktg2odtyRvcdCkXZfdezLz8xwGZ7FLRym2Msnz",
  "key45": "5X6HPFznPvjJRkWVuKZ52bueuhmjPPPDQpsLw18TfU7FU3sXi3SyyW4wyJmXPPPaUvyY1ZLab8YGDvgZ6VcVpW8g",
  "key46": "2dA1Hy1rznTfv6ATV2Pi7AMN4uyNaqEtNKrJBZUUc9qfVKU6UPvuqRLRghYmjKV6ecV9nhEeGbQFZtSPXGiQJR61",
  "key47": "5C6E986BxEGnxdEA64rrfRWPL7JxTRi3uDydL58RPNe5U3cPh3zNTmEfpod3cfoPbL4gGFv8i49G1j6LMXwfWRs3",
  "key48": "3pKNWEEZPgS2ztF7WPL5yXzdaHm3rciS1Acv69sMV5nCpQtnjGvnQXSSLQhLwM5EqXEdrAZBodrmHcahWDaQBhZN",
  "key49": "3EV1Ejftdb4qMRGAuzo9No8tnas4gmd5deh2C4Ga6yieL1XVrgzXvRzvb6wMZFLQEa4SH8TaVDxAd16GEL3GsoR9"
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
