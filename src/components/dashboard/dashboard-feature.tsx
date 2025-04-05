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
    "2vzh8k9nEqRGGqVJuWFo8QhS4iCNAybHzfq88fZRspcKzvo7hFgTs8BYM48X8Y5Gm2XHu7r6rqLB9kDjLzbqLJ1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c61MSNbKGwgJxihjEDrywtEAvhDGbvCo6o4XGnhTr1GBzva5DE83tFQ8sVwXFaFDJmqvAYiYx55dK2aowZDdChG",
  "key1": "RE3pFMh3rQTxQgWPC72Kf1ynzDguaAKscVSK4r12BAPgLbNB5TTSaVzc71hG93LBDK1QiMqCSYp9GPeGwNC8kw1",
  "key2": "31f6mDz7B3jxQex9gYKrDCPv57fc37xtXRf8SUUupANdRaGkxjPLwH44qGneL6gAM6CwkRb2wyKJR8S1K8mBRgeF",
  "key3": "3WfMYX1XPdLR1qrB1CpwqgvTcuJGFwhnV5EYE3zmcVjvGW53ak18L4H3fJvRFkSbuRmoCTDMrDbEA8EbvorV58iG",
  "key4": "Wz1M3EnUnsgyXp1suQ3LajkLugPhzCXVHvzHJ6uNRh4LHXs2n2syeVVYtecwnBdpMwpTXdK2QhKK7LDFo39oqoL",
  "key5": "3LBS43f4UXjbdGLnq1GfuLxEs4rhzrPgG2cqpX3TnNtAkSF4ycF6dWLRDMLcp2fPRSwE7j3sb1BThq82iyoKZDwf",
  "key6": "3t7uLwZecYai48q43crG62b6aMohoTVg57mtiXQ4EFEVzfL8DYLryAJPmfpsEPuUN2N3hRvUNcaKLSdVG9zY2zFD",
  "key7": "yk1uNbp2HZhLV2ufkvEbwCqnm72rV3mLCQndBakhncLQCAHXZLecSS351hHhWo6DbcujPtJfvSWPYifeoCPUQi6",
  "key8": "cBkWEp8k6Eqo4nRieUhcPVq4EehUjQzAUonXF6XGLWy6LfnbSpGNCuyQxsxJixFvDH62wJzA7xeS2VRrguneEet",
  "key9": "3Egv3MprkGAZTHExbHT6TPx2VFooby7qxi5EC83GpcYUW3GRerZzcbxhKbjjnzK8hHEqQtG5sViJT6XqH3MjZNdH",
  "key10": "5Yaogk3u9GaQcbF5zksFxG7WzNNhUy9vpit92hQ9VA1KP53vMiPZ33beWgZ9qEbehDjmKNhQ3THyo1DEE6oFRyyh",
  "key11": "4Gvwwck3aZtExPFrhDbqpFY2va8hJvAM26kzyWWMKSJjmPqvGhftNz1PrMFmVh52fNE27n9RcA3Z1f2UUGxFG92S",
  "key12": "28ppdgSr8ErmsbSMESTzSe44RvD3PV3eGCVt5F3q5brH18gyt273NipeMchTVBCfLj4MDT6ccnxa8P7HLCKeiNp1",
  "key13": "42vGS4ca7eWhkbwVPFYTLRyLSBHiy7mYbxPtcU2DxPiLGUrNbgnpD8Nsf8F9KRtDLLXvi7L5sZckrFgzD2cqRvER",
  "key14": "39GaAYn4Y7dHuSpXdvdVT1mA92JZpYLAzaSrP1yg16xGHfUQjwypuKzueow8SWpHNp2Yw82rPdwMagacZ82yEwkg",
  "key15": "4mYi1t312X2shG2PrWVFME6sPwGpy69t5siqbmuDEe1h6GZU6xepKc11jScL7Sq9V3UHRLDNocnQEipQi2NDKMve",
  "key16": "CuF43bi1SfE37HEzTbWbbyZxJ6MsayN6c5v1NAT5qc3cAvHYY9SuUr8LZyc4mAtXadDbVYiLGDV6vJa3oNwGNaC",
  "key17": "47TqYkXimvNiYyuRKYL9vnwy5UgfkKSKKGtJvj6dpoSfHsU7cqD1tWMJXXLDczHRtP823jn1JLwPF6AB45WptKmJ",
  "key18": "9tbpdfcLPJNscAdMMF4TiDmvARjfGt9NVX86xFazcWUaLsLZdu6PSo3mTAvUCBqR77hXuPCRXGQy89NyfaFN5xY",
  "key19": "5GouCUiQNbd97uqtRKVUwxxtUJ99WomwbtsHDHhWeyKVmCU6JZqnV1YsmfK4E2jqN7fkTbmyDdraFvebeX8qsCVk",
  "key20": "256eQd3EQaaSYjD4rX6sVCguFHHJYDxvkitsVJJGnM47srfGDeGUgbC95V5sj7wtzVPrCkfN7SEbMb52uNRjQfYo",
  "key21": "2RZ81AryE7pMRc2a5SGMxAefracdmZymA2pLLKwFYMJTK7diyu7pNpMMxBxrBqYeoN6DTgknbhs8rbz5wp3SidW",
  "key22": "s3tiWcYNF1Hgj17U4bqRrwS1Tx2vDQfBvayEwM25b8hxnm6ucUJxPkj5GXR8aeBF2sFTmHstRXpRqudCX6TxVWk",
  "key23": "5y58c6qoC7b92iZnXrhZP59URH3j1TmF9qVQ4BX7P9JnPMhsULd2u6cPNGEi1vN5v73uYCcQD7dZvfsB6gfWGXLS",
  "key24": "5BQko3v3DQMsUisa761vAUgCpXu7XoWyt6hBCJr29sBw8zyzTTiNdPruiFH15tfDncCa4ePdtHQTUULwkUZfYvgK",
  "key25": "38y9bzrh5wEi78fKWERCYBi7FUnSM9HMgMYHR6FccEMbs7ibbkCVyikqqFppFB8HL83CNYn7dp4QHPf4f7zefJXT",
  "key26": "5mrFd5KuvnxVTCWuUqs5zVuQ5SCuJoEh19QceD8sQpwuANtfJHGUHJpfgT6WceGL2tEu1n9KfaFakhLon6fn4XHZ",
  "key27": "3B9LgnfzKFHeFYoJ1CxL2qZrsbF3S1E9H6XwXevrJnDTKptDaHDfRxCd2zKYUeiJSTFcUGhKQgSmf6iVXCdvRzeG",
  "key28": "2ueKVx4XngDYfsMcMEqUcb3c5uwRQygtEwxx4TLzddQyCNNXbHLYRuz1XuQx61ey1w2g5y9R8k36KRBDPh3wGXqM",
  "key29": "2aSaZsrAAMmmoDYuDCpq6m5MM3tRHzhnEhNLMZNFfQnsrmAsmtXePz7stvcRGQZL2SAT9fz57sMGjC7SfQdUQGwz",
  "key30": "3RiWKtMDJskBdLXVjiu2TPjFMemT7F6Z6RZQa2AMwZNFHE4t8Tx1erpbZMqqVoPTAQrCrtJmxUS6aJspkqsCQX5S"
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
