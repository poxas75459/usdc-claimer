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
    "57Dfx9UWZ3PM1thHgaZJGHXcvPKdPgBGN1VfgMSBrkfNxd4v79u5mf1TtcdNVe6e8jfemWmGWMVf9hMbBEzoT5jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsrKGJ5xVQzYf8r6TSXDKwTXciFuowDd4ic4tSdKNmYncScfH5kLndfKeYVhwfr58WNytbeM6gxN9EjwpbQosWi",
  "key1": "4uGR5fvbhcArk3oND8rLJ24N2JzvwdNv81QrqgfoCzpfLPxnhTenS4rt4arfDdX1PQbShbFYhnfsGwShCYEZjBvC",
  "key2": "29weWgJ7mXJBLTFpgS1nLcWW9AfFmMH3NCej1tjr8RvkUzySXpChxXbCSurjUgDgxsZ1oRSsSX4LpoY1ti5Af1CG",
  "key3": "5suWsVvDtY8FGvobJ4zR79WiAbQ2U3cqaWxPYX4q4Uuvu2inEbJ3w6cNCvZAjRecKBC537w77rjkkWSNzLfuMynZ",
  "key4": "3QSUG9DBwjR4t2T76nZCmpXtPYJF3isTLoDzSox912RMf2wd53S7iNDXpVPmq1TzjoMEcoZLmJCMpgQJxtBUt35J",
  "key5": "hrwwGU51E5Cd7LbiQvHjALCpYuNdz2utrbuobKiCw6x6HMXdnvMcpZahq2JBfi8ss5t4xqdf7n2uTWVx2rDA89R",
  "key6": "5Cuv66jA2FRJm2foTvmxnNVkmHSFfgbcNDUE7vbYF9T9QuHvTk51btJrKajr5BEoBV9e2XTQF7zh9qrybLWSakxG",
  "key7": "2HpovuNka1mo6eEn3v7er69EenPueZCoA6qGv7PJMSUTYYv9twftFosFMaVcMmJ74DAXjaVYP1q8bF6SdF5YfmLt",
  "key8": "5cNVgSRduUaVTPQAdyAATg26uuZ79F4abKF2jRwoyAxEE4j5HiSn3SyMZvWVy9DE1NGS1fchbvLmTyy37rTouB4A",
  "key9": "4jfd61RoWyR5LtCtkncMTeybhYZpQ9DR1tGZXPMtUpye46X8h6aun43Znuv9jJLBpKrk1aGi5PNMYkQnvbkp86o1",
  "key10": "3ZSgNSJ7YHE1FUnbezzQktxPFdCBgYvkfPfVpetScjqhkHi9dzJ6KxvY3bC3CJUjq3jW61j9VYJaDRcykbLV8nM1",
  "key11": "2jUFjwmVucFrsdEhntfzRvREMJrBH7jUkZ16JDQ5qcmsdfPSiTYRPE3UvVAcoDJdvsoy1EbLULowowYj9E8pR7d7",
  "key12": "5ooVdPEp2AL8V6P3Ucueaebbhv8htCXzkMyxzHipC7mzHka6h2vrDkyRvpWSfhD5GVeARi3QVo6N3h1eCsudvA9R",
  "key13": "5kcgLdk4q65PmW8fUwRQ4bgLZbSHk19Zp2wmeHNUcKduiosphZiHgxXAogNDy2Mbu43CynJjdtVYQ5kR65ikVwNS",
  "key14": "JvpQ2dppRjubBYkmU1miLBynbigvGQydz9UkDokFZyQbWHGLXEzz2vk8zg8XNzTfADVw32XAngcFzyY4bAL6cgA",
  "key15": "4zkCjXabJH95wHD5tawAQJsRjHHCkq3Ge75yTkWnhphRvxPSmymNjgnpARCsVorMevCMFNVvEDgu5cg9qi69ruxc",
  "key16": "4y23D4Cqrs58rGTgmrBdCt6pLdb2ntJPBxckjAtfkbixCufLV1PFSxUy4ZEe2g4jxxbabjmVuzEowG8MhURzMaXR",
  "key17": "3tQMxto2f6BQnKNaNS1C7yC8TKz2aeMveahsy8TMYgsRbSqjkD8HsVdc4WfdMxhpmLcP4Pi7prsTxG9HvyBHydjK",
  "key18": "2xuALk9KDH9ToxTYGf87SotAfyUZcQznRrXKt5GXykvtSzaE11p24Wg7PVu2ic6osqgjFbr1zjvyq6fXQurSYXgp",
  "key19": "4j73Yww8AsXHwhqw6safYgU7UnVGPcEmEG7PrVTp6rJL29eN5bbdtFW8mPTwVtoGAQy7uSiDh12RexhA7t3WJBYn",
  "key20": "5WLVeFbgFV59mbF7jSyWpL8bYzCFwiKFjmDCfTLq9wp7tCyyoPCnyS9JpU3bCjz4rNA9kb5bNynoY7aTJC1jJZdm",
  "key21": "3uzWZwDakTz3gtmnkeMGiJkpdnzky6Pp1pEAwY7P63bp5FAidZiq4gpD4xaxNNg88iWbCa6fCdoiYFSR6KtNiCuk",
  "key22": "4oLs843DzJPhy2Az5kdaDmvV8FufyZgPz32cAQXpFHbRcmMB1CdVfgBQrZ9rpV7WV5dVChknf11cUUstnUcDe2EP",
  "key23": "34Xz4tVD8d1s8j5wwP4PL5AmkoMKh5yAwbMo9t9UCDM7NPnxdHQXHQwSQBxjtSVzgT6emMP8d4ugkb3oiHuunc1T",
  "key24": "5kXDcPmWGPF8YQ93rbBHrm779wCnx8Zfx4BT8cwTtG6mUARt7CV93FaR5rRh8j2sL2oAjRJFd24F56y56tqRBCC3",
  "key25": "yhcJg2AaerqtkQieHaPK5yKyQ5ds82bxxdmhHtkwveCfbeaSHC6k9aNwemD9ufkFDB4hXd9WbmKyvPPtbzHQC3u",
  "key26": "mAHu4nDAdk5wu2u7MdxMA55fCbHpw1v4JipB2vbw9Z4pFy3iCA78eZZRUABL4ySnbQmiDMnG4rMvp1ADhQXyotJ",
  "key27": "5LqT6t45Ror93v9a5SLumMP6GbRGR5eQfBMs18vdqvUeW5re4VonowUHuy3bFQzYF5an8zov5rwoNUwAkPsAZ3ob",
  "key28": "4goZwdmJXNLvnoKTLCJrJQvUPTLfA2WVnToBauVceyaz7UnLPsvXG2JprgycyKRXy1D2CTH4SJUTZzwBVM6xPk2y",
  "key29": "DT2sL1GXc4Pq4rSYPdNjWC8VezVPkG7rPAqjb1nE6rZZ4qo4fFJn9cTi94qQdMvYJkTWG6y8QJGLdirHrwtZXzx",
  "key30": "4fypMVbmbUTNJzcViNwensVQ9zSZen8DQsFAxERteBfHrhQf5bFYWJLdhScsJDsyDXsRJEepoqfvQkbwDjwX3oHT",
  "key31": "3aXPsPJpWg838KUoXt2P3vdsQz2v1MxmchQxhJUNRwxUZkqsDyK8THCjq4EVMX2S2H3jv38ZqBkuNYWSayDRtmAN",
  "key32": "Vrbm2hJx2UbhJ9sKXtc36wpi1ngFVAmB6CivwY9NYYG7oTnQXaoMz5YkRfY7phSbz3ynWBEDViPiF5xzFoR6P2D",
  "key33": "2heuqp37hcdrK8BntPSwrLde9PjHs1ipon8ev457rzkJ4hc4r2WtXkgeZuH4fjqyZm91pti2zQHxv3YwTNhLaEMp",
  "key34": "qP1MWbNQusN9LTavzTjawwxnsL7XqgHcMoVEbGSEU9jeXnBsy16YYAxBzQxhVFEnGCCapvTUenwsTPViGZTa9iS",
  "key35": "573oVY1EjUXKJnvXf7DYYeH2i8jSBsB2NvTvCE8DyvUux336CfJyBG5XR9pY3uKsxdM9dGe6WQx8EQ3npRgYjwtW",
  "key36": "3GENY8mxzxZ8AneVzaWFGuJTJ7GTBGqAdX2CdWusiidMvBhoTFDURcpLgcHgR8ZfJuhm8JHrypynsSFWWcbGrxYQ",
  "key37": "5pmyXLtk1hoiwgnzX2mu38SEJT891nHvdCc8e12ssoyBC7Reqx9sz9dnBFJFLWJNwCN1FbMQDWFjdsoQgsuUTEUf",
  "key38": "2GLNCtfdZM4H7KpjXhodpSAX6jN5dchzmwBiRjANi6KzcTnUMt5UHaLghjmbLZd1JcKNyZHHCPmTD1e8sAw1umJx"
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
