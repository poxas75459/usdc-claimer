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
    "R7Su5r8fAAnrxeNb8rk3CcMVawuvhPjowye1yaRHgxsBGwiMtSKAdJRJY8iYiyj7fo2YS78oyiRmKJv7rbQUMAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JsJ8U76cyq95cXkU5JLNRfGEdJ4THJix3kstiAUzEHtNDP5oELtgrdeYE43EPiCgPugQKTH1S1vK2kzrzrZUq3",
  "key1": "5WuDHWTp74UPg2nbRRV96UgSEi7eLwY3TDvp1v8R5z17iBsQrzKivzEUrLuB9Vykh8gYLGXuKWHhzXFx38C4gJPR",
  "key2": "3uRUooFE1MhoMVJzZCGj1wpadb1KDRybEt6mnvuPXETnv6TqHZzvtQrMSWd1tHXgabaUQSgGXBZXx8MYL9c2M9JC",
  "key3": "64BEptASUc7Jn3BfuhE1GCoHgW7zbsMRwTqrbi4YJKBVxX7unkscEAGQSzP8ZPt9dwfJ3qQxxhaFUjHTQPFfmoCb",
  "key4": "34NJ1Rf4goXY2p158BRTuc8Fub5irH5KCTwiStNkM45x8XhEpp15Zykp1ybmtJQv2KGNK17D8FzoPrJ1r6dYg2sm",
  "key5": "3JarQBuyzfjGU8mrvhXioUFhQy5LLokkbYcfFBBwhehG3FJ5qytx2m22iybSTjZwH5MYw2738XzCBtPec5WUJ9xu",
  "key6": "oSq6KzPYgNh8Pt7Wdy12vh7NTyC1MYwi5swjjxGKaLUhBLuDHHWoLP1uFfkvWna91dNwq8rM652o11M3sRXYDyD",
  "key7": "5FjgBHRuENB2HhLHXEb8JzVRJdBsc4yg5DA3VyctrYzn1GNewuxVRcLgRCcwTdWu9TmRZzELjgvcDTZ6WTsCKQK2",
  "key8": "TCiDXMsS2PYHguEAnQypebcX6kjaX37P6KCq7zKSreCe6hb7nrjv7uSwmks8MCZ8Hmj6XR1r1LTFERCwr2L28Lr",
  "key9": "39836y8GxU2MurQAeUs4z5sNeYvemhuk4iRvsv15hCVa12ptVhvNF6xqjNVyzLH8pUCq3hVa37Vp7o3KMYxK3btV",
  "key10": "4BWRu2qYTeX9uUwmPueqwxTkUCJtQZ4qm2YJCQwSMbrnxs1yvXbWHRaApCdUBmhhaViG9JC4c5jnZZCKFh7erhN",
  "key11": "3gbrdcTRemQH1sGqodqK5NTzX2xw3gtDWgdSNsvB3oGBSQavFzMhRfwSXWJCTybPp7WLWZPsGHNUZr3BwsrW2oFv",
  "key12": "5dHBAqP9Ezi2F8LFAiZXHRg4uRv1yQjiFJZW3gwpoZUwKHU8CUCxzhsctCFrPQWRmMUyqq9pMcshAc3BmMJRvX1Q",
  "key13": "4vkaj1qCf68anmm1fCvVqd7Ky8XC4tcYaRpgZ83HjqAXVKUw82jbGaF5QJPwYzim5z2VLmgkErToTf5KpgG6EB7e",
  "key14": "5K6vSidgD8rCx4uPirGZ5awnoiDm9CByhBfTzBTPPqHA7Tbn7oPaRFc1EAZ1jPcfMrx36sXaDqSoRcBueJy1DAQ6",
  "key15": "2jk2zy1qPainRP6giLBZd2ZuYK3wavSeL2LKspMbeLLiY2u5Ba9miacQ5xq8aGz7LXJgihigaN6wgx6dJgydFBNM",
  "key16": "4m8zSQBkpCr1WhGajD34uZTA7wB5Wd6df3FN6aNzCyfuRZhANrNghotmGb71dGc8LxtgsGZRX2DEafhHLSJqMtdC",
  "key17": "2sXwzuQqL4jquYLBcN7yxU9JdWkkBnrqeAnjz3AYsn2c3piRa7D2jLbsARSLBbkVPKVMBZixCFP6DnDEjGRKTQHu",
  "key18": "2Ppm9XGdi2v1nAMRVLiH7G1JMars9mpipSBTLpUYzNx1dT2uCsT3sV3r9mzkcGWuAByrZPE2nAt6QbG6gUb5T4W8",
  "key19": "G8RMwAxqewhTP7ZrxonnVNGncx6mA4JYqptwbcefxvNr3h39M4139UwdeTjAtFT8BgZ2DYU9TatbpcV9FAwHj9z",
  "key20": "3zZtiGZamrM2LopNjhQoavaiVKtfySXbMnEEQhXh3ga4kXR8nsjTuFzVqRicrMpscPv1VrmCG5Tjc4DsY6xbfhKE",
  "key21": "C5bGhJ91qagQJ3KUSn6iqJFaEPbyM4aLP8GD3PrLXjdffDWaNxcQLNR9Le4hv4uvLeXRpRUzUMePpNqRqhqTtZw",
  "key22": "4XW4Ka85iGfTw9a5SwZvY4yurQujoy5Zds66faMtbNQAW1zMKWi5RszJv5m1Uxfy2vd9gFkC9gSihZpptcwiRBkE",
  "key23": "5WV7TcZGDdtfx7EQvQnWtxbh7sNXK2NudCXd4gdGXfNSB5YYwysZ3i3forzmMVGtcxwLaM2nMBbsa6SPMFHCvyZk",
  "key24": "5iGxNe1atEc1kb7oVM2QVtzFt1P1UECWzFiB1j9fx1TVSiMGC62tmh3QzY93iqFj5eFaLx97jXAedCUsg3qSCGD5",
  "key25": "2WoQMiX7bQtfzsxdgcMWBSTKyZmeyqs2kxya41cSW7iKbq1upxaWNd2ugCbtV9NhFH6p5iZWovRMHU8GB7aKAuT9",
  "key26": "VALg8oPJs8mNpEEh8xem9xzBKwyG5Cnjm3LshEJEamFoJ4GZYz5gUsSmRhisv5kRs6b83sWcsCCqQHzGDrNhAtS",
  "key27": "3isZvXVxLdMQm8b6NSqEFxKkfU3w9L529ZaUTzJyr2HKamSWofure1wmqrCM4j5rdfBE9LdFJZyYGgHwPiBTevcb",
  "key28": "3Us5nQtSR2CvzRFCCWeEmLzDghTsCuFBvMMEoSuCxLNHxLrNJy98s2K5hwwL5XrcdmLKszUQ3DXyDVPULFe2viVJ",
  "key29": "MkjN9hAQQeFXg6rex6MCR5YUxLWJ6Sb3VdgpPYKbbtyaMxSD83JDJYc8uuSihurTBuJCKGyFHwrG4BiuvaXs97n",
  "key30": "4ZzUjph1PRm9fVywbZeP5tToUfakygXHpixPqJz1Utxj1YL9NfHREbCj4EcXM3HECVMNxbovR3jm8LNPTRJ1fe2f",
  "key31": "3zaWudRTd4Y2hZdCiXc5xih7xGkGCoJdLKadLffMPrm2wkrpoNHLR9FFJ3de3HHbdPodjVY7NNJ3NMRcMYwrevC2",
  "key32": "2oyVq65GfckEv4v83QY8W4nbFGNVmcmib5w4ApMaT5ERTcjNo6KNEYaXgLuUKv57yZpyCS3Gg3naUsBBn6jtrH7N",
  "key33": "3gZ5m7zv12s1CZrKbuGgKikyQY8UTgBuHGeBiRJPgo9p7CZn4jMum8tvnxcc2S7faa11BcMmipkgYBhtShzrRjhB",
  "key34": "48coxhZxJcFXZgeFaMcuB8M7YBei5ZTzMMaNzr5j51bvsnhTaFEsdGQiLUPwDuEanridELQuLxnxPn9hPYAbix78",
  "key35": "3F7S9XciG3M12Y5B1DbqAEL9MuZhNV1xVNNiGB28LPfwZVvbift3ha4u3otyX1V9dBpqaaM5zPJFi7XCJ9AeqdDe",
  "key36": "3Rhh9M4MxMDx4REzV1cDQcB4zfekqbKdYoh7cp9YsNU6PrLspbCXR2DfAK5UgRyoq8GRHnaMrJogsf8Qs2WVB9rS",
  "key37": "5eV7d2RV1ocaJu8owwSSa2v7Ep2nQrY1mdqydFr6K17CRWu4HBx4wA9U7rQXiK8HAhPcAegBJErGEQ8gABuocyq4",
  "key38": "4yVnp7SqV7eZiwWQK4GLqniz1s6iPvmKnf6taYXrymQPNVT8xfYa6nvu5FwSZgtEsAC48gsChG7LzPb2d4n1fgyB",
  "key39": "g8r8jur1DoHgjk7rZZy7RMjLvyWFMZs3rS7NgvfYVbasBezCqV3M8WUrhPtUryKzYjQR9AbPBcKa4WGE7CvorC6",
  "key40": "5WhjJu6SRB1sdbs8XUqREWvspjh2FKExd8X5DZXxKp6GinuDAkMrzfr9ZMTeLjYGwfdU1McGa87NA66i3jRWPjrJ",
  "key41": "66RU1iGDttvhSmTfMRnTf8oYVKGnU2LpzbGfQ1fatpep9asbgrV4rXmHGktKDbVXSQ4pCjSgXHpxhLCDx2bMDQpq",
  "key42": "54aSkoNvNyZU3EN2SpUJHNdhJ8xQJwvAfEuSa8x7nZMySxrkhPb3feEzxSLfHuAdi231g3ifgcGWsiyHq1ycM8if",
  "key43": "5CuJvGbV3ekG3BZAXNVtbtcRtkQtrSGkhRb3xfzZBwcdebwLY8CUzc52rhtk6CosdD1xaQ7xcwQmndhWh8KaJHNy",
  "key44": "57NmhTEM9zzVaiv3RmfURvWSdHABmFLmYLr4Y2jDGPBAxHzsmQuYZhzT3Q8div3MKoSywdVJWQBLzg2Lce9UxDCU",
  "key45": "5LKz6E2bZ4BZ8513Qxe5SAmBNHQ2nqoXP4i98Az3QYpX7nMMtrP4wGaT2kxUgXCzkM6jg41o2iBvn5FzND3J9CDE",
  "key46": "2VSpdQrLc8woXm6LMX78dTwf6seTTKEGanzqqrCiWAkhjV8bFt4fxoYA1KBYzoDQdaZSsk2dnmAKACmVJ3aTe8WL",
  "key47": "SrpQ4BE5THy5428qqnyhUxE1fECNk4xuwEuCf1TpYDojAXw7P5HZFsmxbkFo7ZAyvh8a5xcbbLy5y2Mwf4K3R3Y"
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
