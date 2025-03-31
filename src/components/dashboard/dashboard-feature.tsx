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
    "629vgYZ3LYD4d2MNCLLV8jEjEaSbJbZP98zhJtd2kfMuTrgRGGjJWsRd6fr3JYPQzCNYMHT7ZepyNYdHqMEsuZox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxNki97aseAkz52yMNM1M3xknrWnaxe7gpp1qSyDStN5hunocnHGznWFYKuUtW4mjZGkP1hTXY6gGuoKaqJv7Sw",
  "key1": "4QYAvz6jYF6uNnBbh4FR4pLLN88QZ6NX44LcDKziVWhyD7UJa28CMaUrqz2kZXMNhVae8ZrVWUHq5EbY56KgocEX",
  "key2": "3smRvkfBSGWyFKtFJV7UftPf9ewTcJszxYRqJKK5V8unAURTALMxrnkGBdM21iGaWhqJKi2gYsdEDH1Bw2L46S6A",
  "key3": "26wgrCJZmx8ni9L1QRWbXCTPEpnQpc2fPUxCAkGfrm5aK92rGdr7woc2Qgne26HZMNo3RS8zjArXC2FU6QoYRJu9",
  "key4": "5vYrar1Geoem9oLbcUSCZenfALGgRKUs6XLXET7cGLppeaGznN4NzBY2CSXKL6VUKzbFmD66tFhn56UoLGhaKrKJ",
  "key5": "4LgDvrJzf1Wi15p4emwp8PZtGwGa9cNqQgNF8S6qmZCMt4YRmXrzs9dhUkEAFCz46o1gNsKTRNAPY7XRCSSeY1B",
  "key6": "418hRotU5LGMx82uF6BSbbAQpXqmi5LMm8L47HjkuGSuAzQAXT1u8bRhkRZtNonktTy5dkTKcADyaBxy9JK49dnA",
  "key7": "4YwD1qCsxLYckBnJ2KuG3oBLYDNAPgnuKQHj4RMNiueE8t4PStiZYDdsW5ZpBSBSdaCJTWgZpi8ryEpyxSuXRzD",
  "key8": "3BG9o1urCDX9xP6JmQ5LzddsnRSdAtPTvnxLr2u4ZoeUVEQMTM96DCQ3vFFHn9JRMTiSZFArVBjMiKMqPmsvsGAj",
  "key9": "5jLdwYnkh1XDurhRhGr1gWoGKrXp4eFQvQdTDzS5kk2T3SsxvdX33YPwp1YNiXuxK6hKi8Gyh6KZzVYzNcagveQ6",
  "key10": "5kjhzyy2KtGyLjfSR8uLK6Xnw96ZEKPV7ZnynSKqwHzkKztc1KaBDFDMQzMjex3ukUXwKDSi5GZuGmuJ2aJDcMYt",
  "key11": "5Qqk4c1Bvs7vEK5ddwir8i5s1NDS4iF1Mfe1zqRfhiHeoLNNGjApefK167HVZnPTVqucoWbn246w3Wf6SzL9BKso",
  "key12": "5jPE2ppCNb5uxqGo6RPsnDko54qWkrVUMPNi5ipqExG8ex9UQZ3W2FDChqZDJ1vMF2MhnXdsQDqrPnyzUxaACYNK",
  "key13": "2WwBKN34PceuD13eVofQ7FZpamyRvrpynut1sXVStJApYZ4ueUTAQakkPe7ddg7t3eUjFBVbXXs1NzVb1cVNajou",
  "key14": "TRQJYYU6vHYDzcdmDKRmwwGLh4sb3sckqHHbaovtiojmvZE1CgS2bp3yagYztq1E9249JWSxVxtcFdD7wCGTZkE",
  "key15": "5jWcAAdUvHaLKAvTfvZwnM6eKR9CMY6yWdenwFAUaZwy9HhyPwxjqCLFgXsc8hbmyGiBpk2884HWWfUaAsrgSWzJ",
  "key16": "24kaLqVLb6wbgUiwdwAuLBJEo2yF4oh7DruGTUtUk8LqoZDae3qHg11xWEBCBH3pAzeYkK7LgYF5LyYaunrvPmgA",
  "key17": "2rxongNhrogempnENLAJhYoYxTUTjDKqDx1LSGzmhpwTaA3ia8sefgCFqzJrqyMpvUbhYVf3jD3iSkfibYA1L9Ro",
  "key18": "4d84PXKCq15G1gBuJ4Ebb93LkcbZF6ZRc82tSGTyTa1y2wdEMMDEw2SmAxLuu2AHXfNivzwzFhFPpj97j86mtkMz",
  "key19": "49kXi4a8ZsBxPLqbHmBp6upFa3Po5QQvrqWyrk7CtwyzXzuGCQvGNT6GVz8K1vgTGoXer54wcg125q5CHsH5X6zd",
  "key20": "bvq3krMuioAoG2zWj9TPUurhV1B4CMeD3tatYWUQdb4F7h3M2Ch5WMCZo7HbG4ua2JHyJSbShVkiDsYHXKcXq6F",
  "key21": "3mocpG9jsawnz8Vx4Y53FSn9eDugLGG3Q46ieTVBhePgCnw3mXgrGP8MeVGJ9sp6FaGqmLMhxEGrRw8UgMQXpbgY",
  "key22": "2ffyb5R8GBjr43CiFoyxqixe5hEoCWJe1hrjXkMJn8e3URpXBZaF2zFGFGT3nr32wbJMKd5XHqVWgRcBNi1GESgH",
  "key23": "4d2zDWBZaQ7uL5PeqaJhnXRvB3UnrD1jTej1rUn4hecj72W553jgTNGpDPTajBwxu8fLYLMHorzPqeqQKhYQV3Bx",
  "key24": "4x6ao6W4GBqRtTjiwaQCg2JCa4ryA4J2aS8E4839SEVF7L6dMptWX8tyGneZyYaS7JVm5PF5SsL5qgqfaTmHRqg3",
  "key25": "4FH6vcXCfx2ohknW7VxKd8YPjqFpPEPHTfcfW9RSqtDF778bZW1mmEjyTqeoSRBNwwrJJqYBrWtkGmbkpV3sswn",
  "key26": "X3wVjcUnipeuzpEJeR5uiUvrT54oFTBSYtuH4147wrTi9LTrXzTAwAhF8qyMwJ1xVF2C4QqPqm8QgmFGTvKR5bX",
  "key27": "3XAbWKJwS7buNAKnZ7bs8pitRVqo5fN9JQxUUttsSHZK1BjUi5a41tFNVg5iXRGYEDPwNvsJRBqQcTeZN73TnPpg",
  "key28": "2snMoFNbZG4XrKo4m3wiwuuoqbPm83oUy4ybunsU82scTzyFvs1xvgpEC9n1vuj79Nin3gXiuoeYJk21dwaT4ir9",
  "key29": "V2bwFTveY3PJ4A4hZ5jxn75ZiULBanWwHL6hdyAF6rNuuhjQqKBYmTohCyqb5WmdU3nggmErpQjiLDr35rs5P1g",
  "key30": "jQfLoDFaVZghmd4mnsDdNvropzqFPb5GRB8HvFusDiwFUvkQAgXgNAvBghmh7rwwwfREnizYfFsczgNHHpDBnPk"
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
