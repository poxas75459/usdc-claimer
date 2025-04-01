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
    "4vkDXqrM5aNBFu396uapMVViSpxeM1VzExzaDxMzHfrdaFHECQcUzXx1nPEL7kATq2F3yuJeeECYvR9KyaB7bf8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvKzEa1GAtdvpX195ap6QHGricAvUfbmisYtGzUvw9mTxzCVx6WK4VEFkHq1LckuftwwV3mCc7wQJshsCpNFVbS",
  "key1": "5Juuu9ovJLSgiPxGZmWKYz5ArdoAtLaApjYvPhZJB6jWUCRntmdmtgap5fRMh4n68nHG74HvCMwxbkHR4r9eQBS1",
  "key2": "3iSzfPrbcrj8vG4oThwH2qvGtdHR6mC7uAj4M3DodB2Zg8siwfk1oDda9akxvseRoJwvz39juxaUDZEeYgD5ytj8",
  "key3": "4pVkNj9MeXSxQHELMDdHZ1K7BzAnoQiCsKGtQA4ZiPKpsSRuFJtvfhDQELbi1mhff4cqgAvMDdd1AKLNw1VqapUe",
  "key4": "3ZDf6j8V8vWNk8GRvZJXgnT5s3D9rHPYcrAy5qaehxQgnJyLBSoRT4wTferLGdiH6Bqf55W7ygFBqjH3Zr3AZQvL",
  "key5": "wk7oLDg1K7koSTq1CewusSrCVg6Gb9nU9GeLSDrmYdNKr4wT2T8ckuye1FiZoUNYdUB1ZujXe5uEhR3BM4jeQFk",
  "key6": "4McXL6GqQnDPkRKmymA9M9Bsnd8eEgL4SMVReXLNQ4LSzCAPRJw7QP3KRfbUopPuasfSoH9u5tPs4tH3GnbXjzud",
  "key7": "5zWnTPcXW6wKyo2V1wh3s1hHDXG5EnPo7iWoHWyJzSGKgLN6XyUwfDYHwgkCMvgnX3gizstQZM3Vb7N2P6AjbHgj",
  "key8": "PL3xA2m5Wf6kcANe82RiKkkVqrM82RxV3fgsNMxVCmoMGM6jMvV12RCvpGdfCjAU7jAXVepDG2YeAtbgukNnfo9",
  "key9": "3tFzTHvmP33ydzRj7gaM9upAjtsWvKJRNbJ5Udwa9fp57eptckty5Auwg1CrmB4yiirqpid1VXRNN9neVUEvaHGx",
  "key10": "3tDaDRE15xyQ3acQWzfbopzYaeKdyZek3jsYpbEA4jPSVTAKgQM5KrwXNvjDCEUop6B3M5kpG6nZj2DoV2xZVeXF",
  "key11": "3nGVjhLtTz9xMRsf8tfqRaskumGwk51m6FbxjLwnbjv5ZBY6QHGQJcM9SMoCmDsdsxhVQmekNUEW8b8aPygX7CkR",
  "key12": "3seYBZsnqP29oFKm27i81NrMkodDC2fYBUPrhHeNU6zfTPvrQncHZuhFj7RuLXHnxvGzR8D549tWmji9xGtdRtGD",
  "key13": "HRDr5DgNMMUjMbsD7guRq5iW9JFdL4QCcetBREdbc7YA7Mt5ZaobdSAhXbo7MVTXxk2JUR5KBmbdYXmyY4AdJ6f",
  "key14": "4KapdMMptHg421iFNHWhNcKEknSc8rNfYRc5AsxvPfwXKr8ACe2o1Ar8LmPMtY3SaaD2pnuPbsHjxXa3TyxGC6T1",
  "key15": "5doazCDsqFGmyqhJ9ucrPeU3YjpRQpvCP4Yo4ZjCN3pQxPXq9Qf97MtjdYQrWT1W3NL1Le4vt9fHqqM3gWxHR5Zb",
  "key16": "DK2gAU2eVCExU5mYPJmmw4hj2iZbPGapgNuk2fQTg5V9FsgWkvmHtzzMkjeKnfgN4rVGvuARGnnDfKusebLpAYm",
  "key17": "5ihAXncx4f521PnVZY56RizNdef1yFXaUsba3jqKZwxRdFnipskLGpBbghQ1YUcxERLacESEZkicFAuavCFYEPoF",
  "key18": "zAPx5TJH3oC6XdrkfDk4eVNyRak5yrNLSvtQSfprqvFYgTz2UuTejKou8NkLRE1rU61kAdQWgb6EGaX6MSgUrBJ",
  "key19": "2coSCc8PMVKXvAnZFjXJXtsxJfopVcnU6zPp2Qy39dqa97kUnM7e94gRXjA4QXyK9FLMTNNA997qvjmYBxfGNFCe",
  "key20": "3mXrVRFrFhZnw5HG2vmUeRcE48NQsFDzF4SCencE6AJN2ZgnBzsGZsyAWuPGUF6ZGVComzSiamujNfAXLKkgKRBG",
  "key21": "4Ff4GNqhUN9LfoCZ6u3izaY47BHdcWizXhry5vMvny2UzUxJNc3YaQZmrUhgpGkTiEtmSTiTfYba7CLBYJHrrsoA",
  "key22": "5VgnX2zPwdu7UWuieBaL2sW3uEkhaKka5B15WDQsVecArvwH4SFwHxUV3AcZSXvZwHZCCNPBNZxZRbuPDCvGf8WE",
  "key23": "mni4i9QwcM8GDKd4Cgt24sq3uMHRFd6cW1t25ygNfVYkeKxtE5k4H2MeqAeaLUU9u3uJkYZfMnCWEE9ZPEejBUk",
  "key24": "WBB2ZoLinTWatf5VYqFTGGwUYmDJVAX1FKrxiCEKY39QgrrYAhwbgexUukRQNxmgeahaZqtySNKkvBxmNALadfY",
  "key25": "5QURP6Axp9aPBjjjhgm6vDPBEbo1PwFXMDGd2iZxzZnZgBMNioyu5R6VFTE9tNxnMHdFnttcCGUrnpgk1sBbBrKq",
  "key26": "2o3E8gtkaWdsjMjMXzgzVFc6Q9GMdKG92TqYcDmuJYuLfLb6TSAmwjxUJMNfwadhef45QDAnqT3WGvycEsjHhUGt",
  "key27": "4DhY8iD5Vfy31Yuwxn1B7RaKcn4219AKyGXW4epcuSVmZcSu1rPmC8CG3sensyGfjC8ZdVKR9qZuRgpYvgi9kSvs",
  "key28": "kQzYjeZFNNj2zRGpusW8smxxvE71bpnycAyUs6FvBBJZQhXZmWyhPmsxJrW29qF7GLKoDByDCyaGWbX6d3zkHDF",
  "key29": "3tWLqfAPAb8q9SC1cvxMPEdBfPhjuYN9tkNb4TNWmoWQ8SnJgfYY9d1b7ApGUCTSkFq3rnvjJavefAGpTQarZ3mf",
  "key30": "4d6dFtF3rV7VL28DYo9DQzaWCTbW5T6Z4VGWXERuiM4ex9efnU1GipXCqz3AxEPGKHctNQ8vXmY3GCLK4a1FxW27",
  "key31": "5xKfKHqUQsXh84gNRLXBJqhgijxzggY6u4Z7MQmVCRNWrgRYDRVMgM3sQwLkSyVHLVhJN645JPSHio984JFE8Fak",
  "key32": "5Jtahs9LAS5v8JkYyEytWDWj4RBZj14Z136WEMoYtCb9nVP9cguyYXYzzHZ6b2psRrsfjDUYo8UDfRpufA6ZeL2f",
  "key33": "42YEgLf6ps9vmWJ1vAj1mike7eVsb8WF9ckzQoau8fkYqt4W2WUZtiAdcSJesPT2hah6sKKYHBjtVcpRVRsgXyCa",
  "key34": "5x8scxwVYaQBLt3m8JkMf6LJr73bNbXopt56VsMa8DFCLaqzi7bWVrf99aYX8VwLqrhrzxoWyxyY1ZwpMScnjyFe",
  "key35": "2uiv5cLadRMwBiuVprWPoQbdxaQP2Mv4XiR1voHYq1JLEzSugt4CFotpCJ41AgTdseNR6GQbgR8ypStKccZvgUMX"
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
