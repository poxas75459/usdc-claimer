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
    "5puj4iMW7MoKwKRbjo6naefWDhWurwC47GuUJVkz47vFZ9HZvAWET2mw2gdYT4tSVntH7sbXs1VsGmGnbGD2ctTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9FZesd8a9ZGDWdE4Z3FWjWHJpLJ31o8Qupo27GZbmb1eA5d33RLyWxJr7JLp9wWwNit9t639cRvkixayqSYXSK",
  "key1": "5vfqJBnaq5vcTTHCBqza9tdytDvb3AJNUM8pJriu9GZAYGF5BPaREyUGiY7GNSuBgiV2MHYwYG4Sjt9mMCufbwaz",
  "key2": "4C8XgsxdFSCrNddMdEA2ABiiVKwCae7vJJZA3NrZb1rYmZMNzxBGbzkiAriPD5pQXiKhm8aKfz4pvwnn14yPFE8t",
  "key3": "WjYQGKpvHYvoZkApkknL8Gfq1JNkTiuEZLgoKPKHC44XeuiJHtVagSmF33bKsuFZCcb5HTDRuZWeCH3U44PKNJK",
  "key4": "5xDKY9udSGEXXg4aYgEfsXiFwetzQThstg2cD9RTnjdvK8bZKEXkjgmE9rDKE9srHyAN1pCX1E2RiasSLNUNVCKc",
  "key5": "2ShrBt4V2UeRnksQzqpmtTz9AGnmXg7tEqEaYiFDHeK3ir4ae2fkemQEuFAcgfM4xLe5PyTNmWhvwjXA8fBA7jqk",
  "key6": "2xteRsRjF22nxPdzjekLeNHscmrkdVNwhMu534apBDgNsLcf8GdfEbcqf2TuxfiuEU7haWfRpf7Hroc1sdhMF3ca",
  "key7": "5Q16w9sde2bsmLoga5wXkspXp1G3RaA2r2hC15oEmfUvKbWYWbaDKiMBpGh44QaCBTFXnkiGWwHq5KWnJmKEyuwe",
  "key8": "3FFQfsAK5c6iyC1AJZR5TUzDiNxAtFG4cd32b783G4zkuVao2pREqhnDMjpyzRPCAwXBn5P3Aq2ohKctS739Na2y",
  "key9": "GaYphQo9C2eZBHWtrm9Y35YgycFoMS5D49mHcqJn5eVpYywxAXhGi3bdMB3Y1AyHiZ21365twqiMofmw3KsV5vo",
  "key10": "2phRvTmrCXZ4ugRPSCMRB6HgDZVnTE6mCnvkrfqAvGnKpCnxmu4pmn9MGP8ekgwa3jA1pYWqLXirffkRvrGrMdb5",
  "key11": "4qA9wMFmbcJrbtGLqfLRr84sgy3Hdjno85pakfhfF9HYsL6YomSj8nKZ3fASdqxKA7cx3eLj5cN2BE79pxSQD6oN",
  "key12": "46W3sYVgTrc6JNUCYDVcUGCFJwZ7EBWM1fmTbHE4Jhv7vtDN5vwL6h97FhszMTeRasNo6tFk4RN7qzJEXHy64njw",
  "key13": "3sFbaGpmnzXb18AjSwfE1vqtxryu1Vuhtb3pdGrLexfh4XtUDyN6R2j6su6FqTHrvPgNzannckpQmoC9DTU1iX9z",
  "key14": "3dw22yz9RUWsqFyBLdoA9G32vNgci5T6xb2b7UhquAi1wqnKPGbibMe8LcBkCFpznW7q4jea6NUGUdidrecpuYef",
  "key15": "2LVcaQ6gn2XU1KRaaYqzYq5tRUaxVMq7ZTHqCsXKEtAkCV4wvZtwHGqayzWPhFoKHnFi5oZn9zDZbBppAunM5hd1",
  "key16": "3FzN163cuiRNNnM9TtnAEeQizRMsiau3yxDNfbFBtFjmEdMpKfnZ3YhmwnvhbW4CpSseWDtyhrtbubr32ARLo7jR",
  "key17": "2if2v6kwaGpCECpvkCskFqm3YJZtU5DAJH9Z9YJouSbgmNKF2exfargvGfmQCERMWW6Wpz2m2T3XuMuUjPkqpF2Q",
  "key18": "62YJ7bYydpTpfUpj5Smd3cmUjgxvkdFLAcEpdCcjricFEmW8j7qbv52UuZWAZubWv4uKxYMPZRroLnLjKbxrHTpd",
  "key19": "F3SZL8kL6pUbyc9HubNhAu6NMEsoaLe6TLqMtFNpmnATFqPmKF2zsEYbzRYtpj1xHJoq6P5DVme8H3shGPVqZaw",
  "key20": "5KDYWcdV1fvqyqS7evBfdEsivNjpf7opvei9hNjLmQDht9sQijRFfbvtCBubhJVZRgR9CMb7pQnqxAHEtpDPA18r",
  "key21": "eDGmq6KSsDiB37QT79xPEZViJtorXaVao13K2TRwmSAn1Qq5MqXNxRAh6yJxFfQGs47Dn8V4awW3vWPVG5qxcJd",
  "key22": "51g7SfraihYmco5o5gkfutv1WXKHp4QxNyaivNXkKLXYz5htthkYMX4TrZQpmuRRAit49PJ7j5Lmpv8x826G5r1k",
  "key23": "2xZTKtgMvECtZNJ8eMRXn4Nx5zU4x6gpb8qAdtMLPPsa6qNGGJD7tAxdDkp9fEQdPEUrjSZefvuyKJvJiNicFLi",
  "key24": "4HX6ZJ1bVn9pxL1BrQgTwAjqy8ihXp9sLQiP8y8zPa7QymcoBX7vnPSfRb2QVtFCwY2P4QMDWtwrG23mHeAmKsAU",
  "key25": "4L1jcVmGJrtX1aHw9i2SqhfdSigBRyF7pf6f4ffqaipp1wgGERb3tv3itTPgbfaBSsgRE6WmcrvSsEYAdmb5pSeE",
  "key26": "4wSK1rQ7A7vhiHH9qBFWb1dwTXCsU1oMKo2M3A3rFwSr9p9WFDXXdAzBCVw7Ez2LpgCh3HzkWzny1vzFJWbyD2hP",
  "key27": "4LFwvQaeXYyRwuu4tkrB64Fmga4CdyRHGARpy3FqSLzM6uasjzVeZDnnhMtUcvGFtgYa6SAUZjD5PqAKjfJSpZQd",
  "key28": "4y5j4kGJrkTy2sML6tWF4NyyuZcoCoxiVrBgtddMQ1uRo1t8BdJA6fTZxqr6Gr8kZUaFcCfeV6zbfoW8NrmW5SJn",
  "key29": "HCBUULXfYVVkJzHynVA9Cghv9B75LnvBB1P48g967juySZH2waJvuf5QPx8NXDe33qqoJcus6W7wL1bDPsH1hwf",
  "key30": "4BXcS6reiVtYYXqsZoM8yFQRw23ET8x9R7cUsRL3KD4s79WFwJ8CaoxhH1yBr4R9YCWj4TdtJSW1RST48Z1rQk69",
  "key31": "3u7UP3pRtUncxG9dSfDg2nrUmKwaAcWSusLFj3noKe2Nw2VXAxBy6cwJuYBzYsj9dfzQEEDW8vPvoLHHdgUmxumY",
  "key32": "2SKF59kBogvaYaNAXuW7GemFi6ZpnhbCEXVcwjKh5L7Ahe9pCo8UCBTT9zhGqP4Mx9RrJxGGSRz4RDgt6ixzCJ9m",
  "key33": "iMJ9ggYv4QThYr96vD1Sc29fffxTasKnAXLkBiwVfBWbEpmLjYerQMLizhKizxTDmQbv8mxkPmsKkRCnnEbk8Jq"
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
