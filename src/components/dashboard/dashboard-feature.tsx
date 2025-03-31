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
    "3DgNcy3X5ktoxJxpg9vuXX8DXLSTTSX7xwtfvLRLYwHpYnHJ3MYwzPmPS4dH7wByKTLJeK4nSWQ3VFjCQGBb1CxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GurUtMCTauBkjeUgbqQCtLGYJrBdHSZBFwxiAd8oSfAgT2GfXX6BSa16PKX76JYBqsqZYDpNseLGEr2TRk4ufbk",
  "key1": "ZGzBH3d1Y1RqrUXXssYV2z4drzp5Ae62sKw1sMdtGqBC4spZvccGdce4Pf9VaTiSLLsr5XypnqkqYrrFkpjivJU",
  "key2": "3Y6TTowzC6BxZhozKGbaNseyZZz9auofb9N8c5ifdqF5aMhS9yasjvCjnoBjoXEkxW8ViVD9B1ZfkCdhcXFG2So2",
  "key3": "3Ahx4tcXw5Bx2HnSCKCiBoGBa5RhCRfV8Qeyjb6ArH278obggdHfAzaXx2HNVonH6xE9wLyk4t265oRHZvNPi6Cv",
  "key4": "4LjxyxHnHxxbT43Ehr4Vskh1ttVTgBsqQfXg4jpWdU6jHZEEYLKHekZsM6XLwK65VcHYaGJTqckFriNWKaXb1Pfr",
  "key5": "2JJaW4MJnCA11VEzY8qLFzCHbWp7oF45x3URfvZd16RFNs5eQWPhcV8PRFdRoTYwADjmr1mMHAxCaJ7JhEcV9Qzo",
  "key6": "4aDw2ZvfwQzJqaHg7skknEGo1wmzA9Z1N7T2EKtokGZcbCAUC1GdTet1yooZcPGWvoscQFCdujsQL38P3qfnbTGe",
  "key7": "32NvzPa87pBwAxYnymXgQ8G1uuqAqL3RJcT4f9cBnCAXrPHSeTtmtrAZQW2jWGfT15QddeB8tJFVagC8wZMaBSaw",
  "key8": "4683SskTfEphD3B12mT8sLq9rrLqUBVFLjFbnDSqGjAXNf1pyw5q5fnnYBaH6iiR3JiFdoP6DFJiQKgBHCdFkwTX",
  "key9": "ToKTb7ViigNd2tUvQAtJ8BxvRbuvhyMQtTRWu4s3DVk4pLr8smnGqrbXmQPT8kJQhZXDZVua1yhpwd7JTn3aKiz",
  "key10": "3AkHCnFc9SMNkVMqbhccCm8BwbnB61yjYNkiNvptZQ7f25A4cYysimZjusjKXpbS3ioNk9j1XKRxGixZW6vdkqzi",
  "key11": "5skwDd3E7zupWeSKUsbb3AVRtBT8DgCL4558tULSZVyoeCAkinPv2YoMhVFGnnn6mkS1YywSk7hXVrH6VsXKGuPx",
  "key12": "3RWBR9dDDKjUMB8aPwH3TajpDtwoGD5jJY2QxMN3eVLvrf7zEwM9RbTZFWMXYZbmqEk5habWaM8c4RR63NW6NNJe",
  "key13": "3E8vjnVfS58dfk2C4ZX66tQDbb2hXDwoLRAFqPgX6vGwLX9mK4UBVQ4UYsgG3BLmtAa5QwDbbNCeLAdUrEAS7uD1",
  "key14": "72cpPz3ST1EQ4Bo6dPRFcbEwMqbzt6oy5iTY1o79Rc8y8v8kEKHS8DfK1RHcg8mL7cu83TAowNt8gfeQHCEqKks",
  "key15": "2Bcu4L4bpQMWs2XtRE3HZuiuLLDwZwHgifyQp1hV5gAo4m7zQ1qdGMRHZVad3G9UdoJBvnfJtmSMjhbBx48FfSNZ",
  "key16": "2psFwTbQNu599QJev16iyF49AxP7BNCVyLqbERsV52LijzypUq1WrWmCUKh7UhRsBeGcfznqGZJg2D4vbsPQoMSR",
  "key17": "2V8s8jehpiUb9n5R9BL2Ry8KXtpyG65ncLhedN6BcpUw9cBf27NfSB39zAhypXmNrVjjNywFa3qcWeE8DNCc5pCw",
  "key18": "2QvqeXZ7BKrProkFd3f8fbZuwPZki9zBTJC8Xr6p3YgNKRcCXvXpAMaHAxRTDwAhbyYQN4FGPXuGMEDVpH2xM9au",
  "key19": "57Pz2AwL2AVkBP1oEC5XVj1WJWaNDmxQdHWqTbRJ7WcHRd1WCW3imL9PTeB12mfFZ6j2vdvkVSTHrXAkc1LGvKSn",
  "key20": "35Eun2HD4KgZVigqvgULz3JNEW6qMAodX3gdJSVxna5Qg4oE8bRyNKQ7BxfeYViJ9ua5gDq3vLnMMKyA3dbisgao",
  "key21": "4Gbs7rbNjvhppRMnayGQfGEBcHvqg48NLrejcVYpuCXr4RnZ2YPkpTCkmpyn33STWhE6G24iosVNJHq9abibsF4v",
  "key22": "2p2sYtNyfT1tmT6VpNbzFPASQ8fExi1FezwTcEqLEEi5E5nJ9xUDKMCk6zf35aiMAaWkp9GVS1MKnh7jhQJ6tbTe",
  "key23": "2vXtoYH7mvkm1aLdeU2ERwyPtBfpeD4sgAVPJTfrAYrFs8VuTLZWFxhjB1GL7c7ReSHWPmxrVkToz2QduVtVcd1u",
  "key24": "278Y2CouKYjoUXdShejGkQ7hvcSvTu2eXp4RU9unWq5UBvqoznEPuBoBK8AoC8TPwMj95Lkej7N5Xn5ncPJWFLri",
  "key25": "2cz55fqoYucTvvBtdLPzXdd2M8vXr9E7zu15fH6KANnMHCNsQmpuyQuUpWJEwN72jA8WvBsMAwQhe7GycUXnUbFQ",
  "key26": "2fGfUH6VCUwi8Q6qBMQfZfPYXKn5zqbQGU6BKfwUMx6hX94gAipAbVdpxm3eJp81nYReTfEPGYdzFThJp19r9Wz9",
  "key27": "4u7qTgkNdnewWnwMzYo1Dph4KjscNFEj8DWcozjVZSefHY4wpLmhtub4x9FkauCQvoHED2Vm2VX5jZ4fCN22cAx8",
  "key28": "SVmY5DMUQCNS1uexy9V4EAEMt1eQQKdvtfY433s6vNNQnYjyTtrAaPhKkizBHy7JfmVCqmQghMD4V2UUXLzrgFb",
  "key29": "3rmtSN8kEyCvF6DcAx4xYkuz1HgeojwG2TvDBHNAT3vv8b29yMoEkTcUwrVx3UpiSRSTDJh495a6mQWyfv2deEfY",
  "key30": "5DdBN9MwFagFqM7hWUyEGLAsG3TLTmHVUVLXuEWnMDeiQDnYV3c1mYsCDReR1M3hz5QohWCaby8jhBwixJ9GWc2G",
  "key31": "6476GhWyFtNCHSs18pViVG7vgFNbCUVH8MWPF7qujKi91E8AebzKAM34GeumJj9ijCaq5VNQJcVw4DLudJkSFLQN",
  "key32": "3m3Ci84AassxcRSqNihXbxnc29h9VerKzYRq6WuTZDdR4JQs2TirAMyqxBY3mKVpMafJWPC8JiMEyNuXhCeNrjvt",
  "key33": "3oeAfS3ycfHtB8qtdqZdmXQsB55VjAECSd2XZh3k8JnMYqTyoc5hVLZNTJPwkHYRNetpxZPgVo6aA4RUc9J1xEDw",
  "key34": "5QVT5Fh1VePbp6dLyrhxpWPtDRoRYZ5xFfvWVJFPDE5z9C8cFX7Yhmw4LhDz1N9oSxMnh4yM2qNBWAcbrUjJ5a8b",
  "key35": "4jkCgE3dyZjLJZgKRmiivwiisR2ZuXnE2SwdXCaCLDV8oXfarUU5Bdj8QqVHcJvbzjmkxbdqbKuuHAGcoJcVectK",
  "key36": "29VYVoyHVxSZULnZdyzbcfRekvc6JL2hzNtwrSjBE46TZaTTuJUjfS8fBaggPL1NuquR391hFBn1MtQUbLyfeTAJ",
  "key37": "bYSPqmpmnhYqppTviJM8qUtsUWb6pFmj1oJSTPoLHeF7kHt4KLVF6qsrCcwMtouzazwtgC2Sjt6pYsoQXowsRog",
  "key38": "51MmNLQ6e3zgE8tKpG4SKSXSYiL3zrNXgFHQNuMM3kJJKZXsZJgMCpXA4wiaBrkoVAfb4hQVGdmN2i2bGBY4PyHE",
  "key39": "5H1qP5cskbwpW5W8WQmEqzPytgJ8A7Y2xT7Y4VXTodD2fgzkAcYpGfGLWTHuoXN25MXPXGjqXe23zrYv2D16twmW"
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
