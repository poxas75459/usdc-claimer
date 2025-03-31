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
    "2spssAzkUpTZGfGkLf9TTPjuEJtTWPCVBRn2w9io7f87QvXqko14HhxFdtNuT5UGUTP6RdJhmngQTufnMdupr9X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N83rth3Hm4Cax9h1tgD42tTY8kQ1YfT6Dk9ikGBescGdpHksyp2Pv1NPUodVnHfhR6qwVSu5ctvNEjHQykSKUbu",
  "key1": "5Za874rUmy4kW7MdnyEwLA2mNZCiK7A4UFXBESSX4tAbxEkXHwtJbNK33HMZ675TBbt7kbtZkJ77aP1jU5sFJWz6",
  "key2": "2HmX92pVQJHS9bHSLQjT73oL3jkFKtJC3oJf3rm3TeX3BKFaxbMhpbg9GwDpTiCRTYR1JEfqfCfHTS9YQ2G7Rgtn",
  "key3": "2kkHLXZr3wwbiuSEsW9U5HhQRXjJQdd3N2FoT8qk8GoJBvN38aNPK4AzjcC5j6eZTfTer7sAPsWUajHeASHx4Prs",
  "key4": "5MWxHxDoogYAzWUWHpKmRreQBmqBuNfTUEQW4Uuz1CGrNnDruZ3MmgSvA5Xb6H3PPJyoGkvHYFrgiX6ZrTJFd38",
  "key5": "2JjGXH8of2fqL9y61A3BkaXwigFnLE4HmyCJSJqSGQe7yGfx2yTnGEpjQoGhwjEA8gvHngQfrf2vHiFn7Kcw8ZKC",
  "key6": "3okW2a3FtL1weE3mxZhyYxZdKD7aK8B3TE7usYjxdEJF8UpuyQYsnas72wNyM83eX4gxQC2Pm4ftYqpARAtBHvZV",
  "key7": "2bR3TdMfzeftBYxrftgeCZtNjCct8hfvnP3BCY5t3RH9JtYjqCCPGqtsPpsDdK264LTaGHVSupEJMRL8AmnyzVsL",
  "key8": "3rnKuVAMiECdii6PXySfst3vkHFbrYcTfAYnmBxcRnBBVWPZsBfUPk8apL6egFs5ux1jn76bqSv95vL3QuwTKfn2",
  "key9": "4P4j1XLtd5DAut9pgi9jTZpGTVUZWAWfCA5LAvNzHdbVhVmdeZyNapWQAo6ewnG66Axo5i6KnEhEFdZSqvipvkUJ",
  "key10": "4ir4ySWhnii8xjWZk5xZWLC6pRqDDZj5uuYBPutEsejUw5yJQ2DYThMGfnzBbDf5iQX5pTJqBmzvEkoDd6Ss8JLs",
  "key11": "4pXZZYdfaiZbyScchJZVsfrjHoUjrMYKYjF5nS1Ff4wW8qTbnfyDrA1ecmRr3u6QWrU6L7qW9uNes6JKcrVHkUW",
  "key12": "2fCjU9CZUk7MHWmHJtYS4VRVhXd4NH6gKJ2vkx5AceiiYBMGnsuX44nJRucdjsGdmz9cR7bABJFfU94TcWgnJAC5",
  "key13": "o6shFcNUtw24p8ckxBSRgceTW7oesaFuZDd1JRxGro2dTvDD4dnzPtqiUiF9LiM5ikUurquoE3CzMsHr1zKRsxX",
  "key14": "5Cu2wNDZNwpUDBPg9gLds9MDFc1F3E3BAWv7kuQu23gE2pJ3BrTDWTRfWSS5tzAUCf4v5pEkExA7EhAeB8cftSGa",
  "key15": "29va5C1GF7DZETKrwS6J4quevvuHGubNRNKaeXRqyrUczoT8VAuyj82wKM2gPKC4J8FstGofcJJjkUGPY5pn4R1M",
  "key16": "5sC5bURpADLJ74iwoayL2aZpGgqHvAVfCthG3X5UFdoZxpvXkHAxu3Bf4zFennKEcxRYMvJ1LY3bjHfjhAwseegT",
  "key17": "yV92n7tZAu2YkMeGZ9WiTbcgMwqT4cQUwXidSRvjMrqth9Gt1u6KQ4Z77g1pxJnp7XdDhGqWnmBbfqWjL4Ym89N",
  "key18": "2WYwrLaqQu3gP65K7icjzZAoF4LuhUuPt3eeQo2Tf53tetSeDWYuYxbbUT8ajNZMPMk8PerFjxYPTvJevuPttTj3",
  "key19": "2UTviXorGWmA9GJ3hGJMjAH65t1qYfCo2znUFN3vnawS6m2LdHm81wb7Rb2wD1kuxhcynKmybSJFxB5tFe97Vqrt",
  "key20": "UcKS6uAixBhy5dTkVfBNAzBJFrwcuip3cpCz7727pHGB5t7DjFFay2shqZ4SeGio6ASUP9dUPNMK2LwP4FVJEb6",
  "key21": "4Y9WiEdEJCxQoinU6E9pEiotBu2eZSQ8uSmfUX7TcZZ8CVg5psrLWYh3vMssJjrCVpizEimK7hHWTCDkAJRzCJeN",
  "key22": "39ZrQXaBHFKRM6uTbVWyUcU6m3nSmC3hTgL7iMYvAPkEeraaH3Zg1hhgqt9xU7LrVC42mVejCoJBpCffbY1R4J88",
  "key23": "4xiw9jkVxF1S12YUjjtPhFX9daHHnNuZBj1Tqh8jFKSqbmC8HseLePc7KdYcx9xPUuuzGvqjpMkENTVbftitUUrL",
  "key24": "3XXvNJcgjagD5NBFGwyekZK7phy7MrPyEEyQhpTqvLBsSSSPxiSweyzUGLyqgWueQVaX3ehvsHzfzock3AiFfMYs",
  "key25": "jjy3RwZm52X2q9zufeo5tUS3co6Esas8RdYkUFkZ6Q4PfQGxfMBtdoDsotVYTZBbdiY4X17YRoBsiZ7bFe2q5vA",
  "key26": "qwoM2FQRDnMDZkF4sqpwKT2rtNg7Crm4iMDvmngc3yXgexD4iKwTRSgpnLmsLmMGDhGkhEx9AHq5AWegzuHNcQW",
  "key27": "4aH23Xt5Nm3YR3qS618BSgXPoBUy9XXQZdYA87xBEaqb2L17fnDSvWDusQk1chD78oJCkBmRkGuJu6pebkgGPjhQ",
  "key28": "4kraJGdcAo8E7unrmWUhVtJpQ2ynya3ZMJnAS72HkBaUTLVpLEmDjBQtq5cP6vrmfWCGHyA2nMzLDAi9nAPdGG2x",
  "key29": "5CXqJg7CgWHqWKLTFbE3MgY9JYoE71QnchHp3kzsg8CnGaS8B76QtdQoaJXLYi22opjc5CsgCY8kTWLgbQ4nPTgD",
  "key30": "5PSotUhm6wcMEVeUawwzdPxyFB6EFEAyoKr2hv9EmCPge8ftLhkYje41Z9wBkjmVp8DJVmwy4qaxaWuJfS3BJ6aE",
  "key31": "ZhZ4kNDNTTp2rwDChCapcqxLgxLTsosqCaD1Z22ngych5dRtLAuunzD1eENJXDWftiupwLRXXrA88keiBKzpJNf",
  "key32": "437SoHJYt66SGKSG7PCDWR3z7NbyYDnxur7PRMad6zPha1d6AEj7uNxJ46v2NpSKD4Rf2QsoEzwYcLvV6DoKwx8A",
  "key33": "3HeMMNQrNnzdL7TCPbfn6NWpcFMu7mSJcULMMV63GksL36vNgqqDiYmFtf9qPjco4CwZGDHtM1f7qxJiqRmUMiNn",
  "key34": "3GqLq8LHTofFZb8Cu3U6V5KZFLrqtYT4qRRPryTEvqDfYdT7UQfvkxPsLJDQxq6ngiGcjppyRdy22ibYzpDUCKHT",
  "key35": "5A25XcW1smd2bCwDBzKyPp5FpQ7uEF6PE97j9mFXQ6wpASjzJM3bCd8yFFS2E9sGRwpsFAXCHgkpLYJ4c1zkJLLf",
  "key36": "5qJGrpFbvSkBtorhDMyeZ1tzBKV5qR2hQMigYsSJSCZ7phjsWXvQEGG9vPZS17HiWcMkRd2tuWBCU5Ty9BJwuG5J"
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
