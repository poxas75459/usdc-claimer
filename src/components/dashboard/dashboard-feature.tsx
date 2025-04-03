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
    "5mpJYsj4SKoFdajug4X9g1ufdZSYFEoPcaK48rSbG2XtcikkcWVTYYuqjKHUuQyTU2XCyVHjK9uvApcZAiXktaSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAyae1KF3dxE3hjXrhdyu4CqrTmN2PJNrWp4S8DL9n2kNnRAd6b4qW4wBnWrUgw1uB8svmvyrKJ2r2VwMPPVDVx",
  "key1": "Qj1n99FUo4vfEwPo5yHXeSwLrJ2FzgW41mx1Mfjw5vv8EG1sQrCdSCLhrdzd3yCykfEHUpaAwEPdcNN3YRwgFhB",
  "key2": "5JK3cyA24kkweznp5JjBeLmzsddjptmpj2xaDC3gFSFrLMhUT7vqBfBsRrfhcorTX5SMQG1Rb3bHVzwuDb6LNqAF",
  "key3": "s9S6WmY2UvHzGqNJbtK8fy61rwipMVSqCCjrF76mJBLyHHrV6D4q6sDeq8qfiLZZy9JNPq7LJTbTkGfPG9K2j5R",
  "key4": "44XGbn7FgvzZZ1rwGUe3AjemmgFrtwQqv2bBFDK9u2ea6eBU4qEa4vzBLdmgndu7E49dczHF4TXd8ppw576i5PpS",
  "key5": "62tkaW7pCezw7rpL1Rq3g6xzTLuYtZRHJgYCcLDJCLmGb6tPSQ1oDz2nLssJmq6tf76FkdP2tk4ALZXxR4iDR1YE",
  "key6": "2T1JkmJzPrCFagc3ui2JwoA6EHPv9JdQAeSBYCpfDcZ61zYnsiEH3ahro3ixPtS2Xz3MjiytDkqEBC1LK9vhhdDV",
  "key7": "4zgM3kx6ZsGf1PvgVVrmQPySaJMW796UE2t7qBspn9KRJcxqTXX8iqzUgtMyoETSXqKFM3sXiocyCNTyPqK8kCFG",
  "key8": "5gm7m6UCLfNAjZfBk3eRzE7ns55qdLkQA5P8Ait61pBf2fANjsWxoB5LJDm6KRrpvhvwxiU9EQ2mQhqqBZqf2M1i",
  "key9": "3SX9sKc4yjC7jVncbFDDwPKit4pxEjHFh5b78DCK3coQoFM4rVZKmX9ffXBCueqg8BtusFMLEcnDTPENNWPS28Eg",
  "key10": "4Vx7B8qeCuUViZ1UPGUNr7daoyzwsooRrRUZWnFb2cZEA9PBvXwytxeKYF6rtHoBn7WaEMBQ6t4ogJke5c3tTa3n",
  "key11": "3tF5VC8Rpn7zd7EdnSScbnysUn7MWH5skTXJbeQr3C5REKPdcbKdEHVdkhBKtjuLU7os9WrYUoS8sxKKCodd9VQ2",
  "key12": "3k7KDbk1F2dbMFZ3G1mdCZL6WytskyA5Vvmjdeyv9FR8PPGf6PUKF4tAsSLefMY5q25XHNqFWqU6cFJsuPqqiu33",
  "key13": "64FLMAc6ExZLQVBKMZ94hutcPa6GnPY23JekTeo7DeV4iJTrEHDixmtUs4FmW1Wh6UeWaxveVYHLYtGkHVP1PD1B",
  "key14": "28qznhoGK6Uo1wfY2dv2ib8d9ECkGtCsSJiTuEapfF7zsn3i4y5HuP2vzyM4Bm8nmQhfML5UMmDbiu43unzMFZbx",
  "key15": "4HBy8u6XztRVo84vQDf9BtS3jp5REWSagdQk8u9CeTxK6VxBCjeoz8m6WCUps3pm8q7VKycCJN3QZ4MMT66xb31H",
  "key16": "6476sb65pK3zpMMNhswXPXrzadAPa2kVASgyBccSGMA7nFXv84JiN31DYd1cmco5DkYXLTM32aeaqAxcJii8MFTV",
  "key17": "4Gg47efF3mJHsKvvKK2tkYsPSUkyt1TFShBRbY1Mi7pNBfWUBhomTKPZ4iU9fhhVCG817fsRbrJtiVbUEAParuhJ",
  "key18": "38rG9R1XpMcMQpS7hdxGSkRDxudaaKrW91agdD7cnGnkBbCGUYG8ZrzVtr8vLqau3bZdGP5LkE7N5TYnwdJwBcv9",
  "key19": "4E5gE5qVR1K466sQyw6tGZL2C7YQ5c8B68NrERj9mGR1sVxBGQxsUW4LR9Dgd3QZjaznBTNqt44U72cnDJzWBFh4",
  "key20": "5xwKpB69ZHiL7hs9swAWYaxxbqkNoTjtteXKExojsZpGkeS4jKpBfJubuL95nKAqbtKpTts5r5kqrdvPRf8Zj3pT",
  "key21": "5abBJznZuvZvLECL9GoC5gjxrHPqxoDBXUEkoiugk43jcoCv5gu2NoJz9JKSmLvhMq12gzXRJE1fYAvvkK3wyVuh",
  "key22": "2EXPxRNMZPPHXNQecE2f5PwV6uErFzqdAf14w6hsDgicuuJBFx9FnLR4P2wwzuWBTUoHd42Wvo2spECMWbrfdFZ9",
  "key23": "3tkYN5ZBwxhfpwZYRaV2E2RkAUGcj8GjGfud9NcpMVniDFRWcVd2AChNdkfA4S9H4QGpnFwxsWKTkjkp7rt46t2o",
  "key24": "4dkmud5zzpNwZ6ht5abCNq43b4W8nfmEvUWYyG18Z29XRMsDkxVnpxtBDGtZ8LcwySWRPinwJhuBNAYmyrXt3Jvc",
  "key25": "5j29rzhjenDSJKRqyro5noaCePKDWfQcxZHyqg8W6svYb5RCJ1PgoRQxtydoVPuq2heHr3kNZSJa6uPwaBwFE8Ar",
  "key26": "c6EHFiwa1wYMFCjVRex95wmuBB5BzJwk7vV2sEuV5XNbesFoNv5iBPNtaZKc4K6ZP9Py5EMWKCeNLUci1TKB8b2",
  "key27": "HHQgy8EQpSYmKPvELtmea78qVjgxc7jGCEKWKRYnn2gchwZ3u2ZnMuw5YqrpUNMgJ3rYVYk69xXuD6CsbLkwRKc",
  "key28": "2DAScpJrKppnoze7cSJDZWD5wdgGgAHcS2QFV4pkVLFsnc2qSP61R5rBDVyojygd3WaTdpyGQMKiYYCHgZJN1qBr",
  "key29": "441n4tdRi8fFQ3jwsJ9Uaj3nrdDoyNyQ5B3t4XtB2ovxCYkD9jG8qWkq5hN82oHS6QUnT4Ks8y9xWKsvaqLUm4kS",
  "key30": "5VQV6vsGtMNov5QqbXCqHBtKuZ7RcB6t3Wnz93h3sA1Z2QGPySN5SK61yhaYTptHGzRxNeQTq9jxd6WRTfuvZCXA",
  "key31": "2qAVj6eyh1JofbrBgwfMd3E4mfSr9cT9h6eVjLFNAaSQskAGcjtPundPZP4q7qQ2nq1iG2LyRT27uVXJHVypuNr5",
  "key32": "4kJic7Fxvv3sTeAXHebq7e54fB45xcFfTHXFdrFkZwF6DfN6HWGZcCZSD56HeP7TZMizvMdEH7XdMoySBkuBeRvg",
  "key33": "5F9JpbtsLaqCA2Scv1ZmqRpiAWmcknLjT4vpAPuKep7CxHm6MJjC4w58S4afkYygkoEWE1gd4JkzJvNNojLU9N33",
  "key34": "2yduYPUpSsj81Von8u9Z8stpav7ZxGYthzJBUjZCJb4oYcu8p3EYxrNa39JEDAeSXA7QH7Tm871prk4ToQ1ENKZy",
  "key35": "YrCTifTsHa3wwASRXy94sCP1T9ZzXHT2DG8V3S4u1V4ATJ47fVLRqhFFUEcLykLZRmpZTTqsdpXRzTTiLDmdaub"
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
