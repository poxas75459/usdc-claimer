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
    "3cKc8m1uh4h4fZRUWq7bzRC6Se8YdCHanxJVRxUzNfozaGtyZz9LABJ3ES548WcZFaGKJkKBvBE2HauVBQVkeTBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VRaafguViExyyKrD1ec6UgkoFWieRXiASdoUVCeWeSUdKLCHCbZLGFnMQwXCVwRHbENC6KTXEbRpcT4FnCT571w",
  "key1": "vxidi7Azw67c9kXVdcoEMf7HhxeCF5uXMmXGTQ2qxm1xqtTjTYxvKxbZjEc9QwMS5rhDEx7teNxS9avVq5y5CsS",
  "key2": "5eKWguyrMVBXjdhhgDQdXxcZz9LPEoAsv4L2gW43NCgfm2kSvvYHrLMANAGAiV9yTcWibtEuZRG1To7KHZ5h5rxD",
  "key3": "pZpwjmCtqfMpugHRBXyDwskT6Dj456Tot4XdbKLTc3uNrixkW9uvCJGUvNLWxFTdTo61DGarhgtu5HLc2auSdZ3",
  "key4": "u4Hf4TcKYrhToeTWtV7AeKzsUAFyvXisBNErhRVoCuV2rMuYhGHKJYAgP7hsHPGPUskkHphpqg5w23rhPFsxVpx",
  "key5": "428kgxruThuK77HU69H8kUE5bXwXQMDYFr8ZjwvADR2YiG7x8arSentBArp6K5AfPF9YFTAfs6xrWmnEUuYovpW7",
  "key6": "2U4n5Fhz2Qg7t2WaGSsohaZ3JvfpSTcWtb5CuVcJL76AkRJoVVjJskxg2tGKeTjgYK4pS6Vp7uTFG8ToT3pDrLdV",
  "key7": "3gtBFQ5EMDFSQYBMe2SciUU7CzkofTktePXuGtXVVbn1bsqhy5vNuC1YywVhmCCFSiyrCuYvFx5ip1jBrg7yQLXH",
  "key8": "3BbfKH9ZjEhnL3coLiZ1EbT2KsWddLjbyE1He9kQWP3KMx6wgk4mVNnCZUqLoA3ZhUewbqiGf139VB8Hrbk7KQU5",
  "key9": "4ML6XGwy6wxhPwNbPtHHiyWY1yXK5jK6NfubaaLEQT5xjVXY5VhChS3o9ui7K3aqN3r97JCpToYRwBSBvYfVVXC6",
  "key10": "3yJqZyoJi4wkPXqNDGLFNSVELrFmytKDJyNP6ehD8XPDEoSyZ7z6Emdqf6j6uU8pvhZsqJ36vZ94yzd18ynpc6mL",
  "key11": "2TmtBup41oXrkQYR1GnHqvrZ7gmGb12Vr9vwPwswS6YSEbfgLpz1NPue1LSDVrfhetRbxZthCZ7FsBZTYMfLD93X",
  "key12": "5BmnGYgaxc7xAaHHyNxUX46MHw9mB8JkaEL43A4ToxFs7UX1dBDtEVeRkC4B5rrakjRUtj4EN2dCqYtSLvWKLEU8",
  "key13": "3nxxorb5U6bgQRCGanTcnbjj4DhA8PUqr5x98aL6iXeo7QTSM47PduqvswP4mduEY3RCqJouAQ29Mtw2Zj79Gc8n",
  "key14": "2xvt7ZvHv4biS6FpYfTgRZuuj66jwSYPsr3V6eeBDmBGEm7GRHAGRea7jHLSvWcm9nPDfnQRDzftk1dBPxHVZN4J",
  "key15": "2vNdHmqDqsqkHRtxEudyiSEbT5iFcaxNmzqU8FZvvPUtRbh6aJCLmoXqyCm4v7JtBEe7Vbs8jAqA3wvRmwBnnDcP",
  "key16": "2q2jaw98RAv1vuCmDur3bdNvd4yicP2nPA9wUtdGh8gAnxNzyPz2d7GmQVSCJoVRngfTtZhBzA9yVWt2PUdwMmLN",
  "key17": "4K35nBFWQFDa1dXysTf8YHsrEF4Fhxmo8u6gXvfGxjV98FCcn6w86K1Mv3Qdm29cugKnubwUjAgpgkrf8V23pjiL",
  "key18": "52Ejg9DPyA71jSg8UcYoqcjdpvFmGedaJcUoJySbtCoEb1eMKL3D821g1jqXbXoyc7yXc6aKn5gov6GduE5s9SYo",
  "key19": "3E1h22fsdgTnhmLfy3YcMwKLL7BavqB4U1dnJMn9871Ki1xoNZsJgmLWVrgGmET9LyQuBRmfpECy6QL6mimhQWwo",
  "key20": "TTbZjZykuxMXqSVQCJyzaHU3RqqUMq2SwAztf15fdkZszFS8piuPLvuDwRWHRKWXyqFPAFvL6iqwFPk1gPoMGHp",
  "key21": "3gt7GsN1PCZrDBgZbrM1HftVTGdcdKG9xsUqtnDSsHqZcmtnzQXRrPy9XdeTpdvps4NWm7eQi7GZ686aLDSPfjHw",
  "key22": "4RXixV4myGdr6Z7Bj6kTSat9fNsyun2fVzXq1kXaaCgoEMcbcDkPHBYV6hHYLr2DbLAoE9ouj3FeWRHRKpvJsC7G",
  "key23": "ccJJs35s9tYXTygWXwR2ErKdK5oEYw5n6rKZPj7LnxNT8AYjgTEM72DS9FmDcNP79PSS8TB6LV5LiGcHdLwZsBm",
  "key24": "447C6KguMWTawsmiD9yJgGWUksWMy9RtCZjFfN6CMLD4XGyC7z75P1vJqmn1ZndSiG8Y7u5kHzvnADFfMrqhWskr",
  "key25": "vkxT8WDrMScxLpZyCzyqnW2FpRDRUwVALFdzFKt33m3K3dikwA8DVxq2yjhuM3KjXYXpzHoTmZ1BE3i984EPeHC",
  "key26": "53rTjMQZb7akTizy48q6CHAcHFnpMSYgQQNvT24cM5Vh5T52xhpVKB1GuVaA6u7FMGkBATWXxXVzhtQi3B5BxZoU",
  "key27": "58RQ1ebGZKZ24iSERwMeGVmReAnn5Da6KAe8ER4xnt6zAufM6HDPfdrDnn6aoVVbW1iwjjWYAPH2UbgDpVCYRBpP",
  "key28": "2MBw5fDgbhu9bqjUnfK2ZKvNTyhVESeGLX8QnRUroycoA6NPcEYQrxL57kbi4t5VBvxjfJoQ2LKfnDfiz11JJvT2",
  "key29": "2146vpGYJN6LUJCYb67f4cu9swv1ppGGevE4jhJunJDEVaPZM9dMqGqdQ2VcBNd2WUG4ptYkXT5uMaJ66G1d9yBn",
  "key30": "tbaJKGhgCcL3YzCRhPG81T2vQGZrnEx1QvBEt4Edsvr9sAi8kzFSkCe5uqw2aN4nH195cBkh4hzXiqKDcQvvB3q",
  "key31": "eqaA9tCBUqJGAsqCLwfpg5pE2onEbe6Eo3weYJktUo2bnbjmN6MmHWCF2CjdkQ6Gh4BdfiNDxvzuUCzh2JQXLzo",
  "key32": "2rXaFkEF4HqWrpQcMUaEh5EU6tsfEmPkGQ59nWgkRLrECWzCwg9zxBRuqaYX6G933im7MZzcHR6nry74cPEnAeCq",
  "key33": "AG9G3skzxyL2E92LNNnv9QfqXLLvvPWYFGYpRvmbFdPCW2zdXk3Ba1rX3nfDHRq38es7hjvWjqxJEBDCp7sWhJ2",
  "key34": "TDDrA8FvnnPNEkeikfzoztKEjVX93pdq29Hi8WZZ4Dd98TB4DVj9rYBemY8G4aA7cTgm2jSPdc8yQK1qMWSvdep"
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
