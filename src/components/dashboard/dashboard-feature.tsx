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
    "5CwCv17k5c9vSao4ZWkXJdp41SsURp6t7kUPQLzj3pXuNv35pzHtPvpPqk8vD7S2i6EAJ3uzJ2aSS7q1BP69n4HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hutt3Pc8gpBaaCRohV1qdUnHUbnezcnHu1nSRbiBj1hhKC8SgZExdChw9j7SBTPZMYGDmzKMLvnJSGTNbcdAmF",
  "key1": "3yHT1WMXiQqzHtGuKQc3WdwAGhwDvjqhdAj785xMXnvM6ojG1j2L27RLKiq45HUKHLnjkhqoky4HpQrZVJtvdJPm",
  "key2": "34EPDnT2gPDn2sp7r1uwxfqMuCG8bewxvbEwt13QUhFVnqnWMDCVaFjdZhS2fF4pRK1kzhjr4qP89n3wbN9xA9Br",
  "key3": "47Xto5xred1x3a1UN7x1Y3GTjdo9CjMkAaUsuiBaSJ5MSB9PcRz5MtBJvPQLTtwGuJjELzcPJgmb2nzBAP2PETox",
  "key4": "42mBT2HhFN5b1bnwEBpXR95T8kuz8cqjoeQ1EfWDWaA4AQnahyZaGPUM7k8Cc1QhpCpYc2qo6KkidJGMHisapctP",
  "key5": "2k3BVy43FY51qcEeibng5LueTwX8c2sDfyW7FpWRGkp6ij8SzGHqfekyzzQA3y4V3SUXTJZwBn9AcrBwMwocF57K",
  "key6": "7PMgJhKpBeGuhbtXX3M19QmeitYvJ9m2CauzP4Dt9FDg3rjkQYJkeJSpDZTnn31FTH9mNafW7CzUnjLnFDuLQTE",
  "key7": "4G8KLtqfX18hVCTHJHQK7LBR4ZX4e92vY27wq3qLoZ5eC81zYAsvg8EcYukXJoh1Z674CjfAjJSrxUS3b7gd5tJ4",
  "key8": "66iRp1zbPbVXT8NxmH4Ddu5nuuUgTshaUGwMj521z9E4oWeQhGLaaQuH1BHXgGvHkug3RrCisJR3UiJ2PTupguzW",
  "key9": "5nzniUhKKqx39KYZd6WKyhye9feSU9fhYhnU8MD2YPMxS9oxK8F5ZncXm1z7nKUhxpLCCVcdWbECS3NWLBpjH8pw",
  "key10": "4wEWGAU6wjYHuUUq5nKvkVozVq6CFXq3pREBjKz2VJw7Cq7iRvGhFCJTLj3JzqXtUAQJbVTVz6LJj2nAm4Z2Pga8",
  "key11": "26xeRr7YpARPPKX8DasYenGsC8rfaBAbE9L2Zr9L6nEXiX74qnS4gF9Cd9dcJabqVoYKXaFdRkuD7StjipqLPgeJ",
  "key12": "2wcYmPCZqQmS6aegD1avd5zqPMnY9Pgz67YCu6cGJJwaVBAWoKGeELHK5Yt8gfMA74458RkwPwVvPZ2ZMnNpjRzP",
  "key13": "63CGgkMPoMdykyfCsxfijG1HN1jbYFgnCfZ7Hy1XW6QQmmEfM6CzwzUZ2uqxAqJYrGChhvaoXx7VnnLjCjU2coxg",
  "key14": "4cSHUdWacedCgqrfwwerSE8Y4sGqAoJ44QxJrjbnXe3nSf6csjkkWdiRN6NGT1hQjTERHrfDq6AGLLafLXq12MJ1",
  "key15": "FxQHYNBhGnGCpzbmKRDMW9VGhBFjCdS6fAkMCXTURgtB8SwwacnVTLfnoJDQRVUeVCoMu5mgMHZaBvpeu7toUyG",
  "key16": "5mdfBEz1b7uyWpHbTjYe6anWHG1ALGdotyYC8pwNNCt5pxhPDUyzpoonJXZkYXRT7vcfLPiBobVSX7caG15Mfr2e",
  "key17": "3X2tATBQTwsAsk96uEJCtA1dypABoAxQAyHU2QJ3r7iitz93feXWnXUUJiS2VDNk1LGWkEQGUUcoeV266Cvr9LUZ",
  "key18": "4sqBxp5DUinURD3FR91ikwJJLr9GwJbdwGvuU6ndk7Lu65EuL74Sw5cVY13Fi4gThM5j1zQ194PHvAY3DbWByGNQ",
  "key19": "o7ouvm74NQMXbc7ED1HemCrLLHY51BGxHYbSj1491Hj5hxoCx8S81fR6tgbTydeiphaBfPyDPzNtmSHAMQEd8Ty",
  "key20": "53hYsb6Y84BoJGVxwFYVe7RpmvqCoF1em1xSCRkofDVSos92DMEgnsMJGt2pTaTCoVSixt6QX2V5X9SNoz3pJtzz",
  "key21": "4oEhbyYu6QonfujdRxWGo6PB1VGqKUppbrdbYRp8jPxPJZmFeYY88Lscf4bZPk1fkS2BAJXKimgPccGcv5by26jF",
  "key22": "2SuPk5eCJAaWseNwMgFF4n8EJ2Wmi66NcaYNWKUqaNuM744eQJktfiYti2ADbusNTHqBrcrNonj5FjhDvU85G1sC",
  "key23": "3EL6Uq5Aie6KmWfnwmRYHuPeoEvcHaWfacrmTPWrDYQXgAtqir4DM1CnTAcMD898byGa6dv2QtpvdyXqLN2J78Ed",
  "key24": "3P7TeNkyDowyhJfdWpm3yFd8nyM1FKTU4RwnpEUo1FRx5gH5BP7ey4ZYV3daGGnEDmhisdYXAnHLfY5EtxmoS7g9",
  "key25": "5r5q5HVePEAK2sitUBtprtHULzPJFpCC2jjbKvD5RkBFDfdAyYXr7v274urphDdzXCMAbRGgb1Y513D23fcQazUd",
  "key26": "aQRdh6fxPPDFVtZ4CMetdBezGmcqKiAeihaPt5UqBQoTQc3wLKVGmua6ZifthV3sUHc1PMnsk59kiS1dgVp3Ysn",
  "key27": "52EPbvYyBgZgp8k4w4qxhD2ahRHSqsRQ54Mz7zgKffPTdmRMnpEdtcizQvfnmX8qe1751Fper9HUDwzKheyb9ru1",
  "key28": "y5SMctbQAeW5PakcJw4vpU5jJVTt3Jxa5k9QX4LyBxsMP5NeDkGhupAYWKkrJ6mA25GVB8cfEb7EFvJQYrz5R66",
  "key29": "rmiD3trhC1zfZyMKEfGMzf1GE7fWLExm8Bawbe7Br4La4AmfFS5ysxWroEJ361gEsTvD6PAcKrEUb9XBtLhCsv8",
  "key30": "oMJyAsMDNvsx1RzA1XyD1A5KxghTy9YXVUXf9BovXyojw9TJtt39rdDWz3aN5WWjALxwgWfSzzznX2PXpVGn92n",
  "key31": "2HNdt3CEY6dNuxSYjVd8YA4a8mzXo68sDpVtyRyCuFcTunrBfHADnRZZsB7H7AnwZxJSZzJZuXYRyrC2J4K7MBCL",
  "key32": "5JcAqBU8zty8CgDx6x73qVmAahjs9urHK8aG6eTQSn68JqVge4RanQWUzWmhLbFrwGhdi6HkwHMUYWS8VNDnzsyd",
  "key33": "7REFj5K1iUha5AqmYYKu1wKfz94j4XkysAscr64Js5cNhn79ZicDekBEnNAhz5jc64tGV1uPMDwDogNT95yW2Gg",
  "key34": "5ZutuVPe11WFddGUE5ZFVk3bQ6K31Z6U2YSXDuveNm8A27WcVGZLu1pCfHZbabDh226fujVsfwC6mMMcHNAm5dGK",
  "key35": "78gmzFQmRZfFBaAgcjpZJgmoaNH8yQsxg96m1oc63DH94Z5unDiFrCzFhNFGZEE3T16JPBHTdyG8FvVD7bbkGeu"
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
