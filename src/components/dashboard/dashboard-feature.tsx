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
    "5LDeevJf12xbJYZPryzvahkpJpJR2r146qZrg9V3uiR9bt8Q8finejvD2q7u2yGaRPNHLz7w9uPVUi7hZQJf3g2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndZ8pMuKsdssAMQbTd9xYSaazUSWWbgGmpU3A5aKAbRNzoCodY8AKJ369cdMbuadDrjWkEmp8wHG3sEAdvXTztC",
  "key1": "2QcbCK8Fn8PiSxBaXvEFKLMucGozcw8fvZkkTZfe87FaswujdoxcvoZCn13KCiMohAoShTksE7XS2La7nweJW9YK",
  "key2": "3aj6cfy9R2gwPyoNnj2oYw4CVvD4A816CDr2jmcRxAT5ZCNg4fgdgbcZHD84rB2bL8FedCezp7aEztf9QdSGcvhH",
  "key3": "2AFMqfL32e1tbwy1MGS5mNT8PXU2F5Wnd3qv7JF86SejG9n2oUCwRig8JfRgqRa2hTaYSDS3oDNCk1GzYvLAV7b3",
  "key4": "5nH9yYwtTAu74givqMFcQt6F98z3PArD4hMQNSoWJz1DQ4xosNHdXmDQ6kFxc2UFAM45CMGXC8N8XYgn9PSHpKoA",
  "key5": "UheD9gs2t5G5GquuXErdHqK5gGEXGJWAA7Ns3FoLDU4FxKZEfE1MGzKmRUSXM36eSVncrir55uwapqeCfhenVzu",
  "key6": "3zfeyfMLuvD231Km89CQqsY6Gx5JSJLRoEtRuwVRhZ19VgxVegx4e7H2v5mqhbFMyPzDN9Ut3QeYqhQWXyzY4c8V",
  "key7": "3vSZSYgXAvaV21xnMjEgftdixGQsha6psxmPBTKKLtDWbamye77ccQzZCyJx2JveCzjvAa6mDXfBJ1Q4ayhFezSp",
  "key8": "36ANo2DC1SMFizaMjPqW1osVDKqFkFMBN9eUCp37yLMVGynnTEDSDoJireFE7bjxjQfDCPUAfArz1tUorTCwmUER",
  "key9": "4Q4FSFNYW5Y7qJe7jqQ6RHwyfkvsUNbXzGZE4tbApaRK381jV7vSKGEbf1i1JE9raREJG7a9KzG4f5pF91P3ynEL",
  "key10": "gVcMTuAYJxNZnNq3MxfGkjiH1ZhEhRBQfydufFptp9QMozLjhfp2g6VPQZr3FQC7QRxj6wmssjScYdvCuzeQRmq",
  "key11": "48sdznx4oQZDSFXXh5Anhx8aJwr7MVSjSghfGnenEpyXgTsC2pJSF3m1aKFST91NtdXUfXWPnp1bdtzmacW7xSP4",
  "key12": "4zC2yD1kFAV1Wi5CwZwsHW74m3w4AsWj92zQ8tordRXTX6KC7JHCc8WekdDgiztHTaNjEc1tQRbzQhQfhSSWk2Sa",
  "key13": "4wcw2EFmuRtU7S1htfsfNyBatBH7DydooztzJw5kvds8RYaGiTGtJK2TqtNf29YGBsPzE2Dcv4JcTyxMjGBDRyq",
  "key14": "1385xNwbJsBMjgGeKxhiG9SLQmiE5xeu35UsJhLeQ9Lv6Xi4PEnnCoVaReMp7jhZ8dEp917vFyDDpBmBs4zRrx7",
  "key15": "2uXwpJuvtaD6CXNfx7gpnBvuPXMfK8FPEZ85Y9dTe6gvtxWsZWzCUcixaKacJ9wdZQa8g1z2VmedxAQLp7ENi2Dr",
  "key16": "5ptF2fRbXk4PWZnYewoG593bP9aA5rcdBvW1WX5QgkwXtqF6SVYNdSSbWwdVTmV7v4JgqjsPVyz1McyFz9SCWixw",
  "key17": "BVR3U7KLheTnUibQP2b8H9gvuL9aULzZvFSYhca6g4ckoe4C3u9HxjDG5MB7zToM562UZEvjZ9d4cFs1nWeK76a",
  "key18": "3qHzbM7fpbUH7UM53wcCdJs81Yxx9or5EvQnRrH6LbmFo9zEEPgJXDmzUqNEvSuMzEATUhbKcVpBpEkFiG3bvJMY",
  "key19": "24SjUJkjjYLMTwCHcHkUyxs7UNP1gEQS6LR5VCpLygpifFBXsWeg2M6byUF11aedVjw9ZsjQf3AA5zhpShPTE6Yk",
  "key20": "juoHwZgbNrYUvyfs63g2iz8yRhR2WqYsv4mHW1R8H3YoZyhfzQDRaXDfxFaR7DXzTMK1SjZB7FDTzcG8qttL7wx",
  "key21": "33E5AqWRU5YiwagzpPYhfrHu8j4yEhraNM5Lec4aHuyFxPsmJC3trNvD3ZgbzvANTC4Y2pYLVRYzK1K6ZnSyEkaq",
  "key22": "3RNZqBzLwj9ovh4KG1NpuPAT9x3TGuvLWMkR2boGDcdi2AvEJw46mrZ17BLmRvbpYZFMbVeuw9ZiV5FuX2ALvs5u",
  "key23": "3joxNxXF1iqPFoHekkDFSbfyYRPDkhUJPCMsZmuN8wLkeaFN7xbhaway8Y4qij6S38XgCyRBRx2LGEKpRidxbWGi",
  "key24": "2pFDJF8uP7F7dbjHfzKxRfGbDjJ6LouP4R2YsouA6qmsYtnGD91SSfKqH5hUSiS6qXvGxeb6JcpaZizWNXrcn3ri",
  "key25": "4bBmUtg1v5ysSL3KWoZr8x7vVwxoubuNwvRJoZG1zSYykN53V13vLBxkD9GYpAXXHQWMBqBeXuT5QTFNNAjsvHcm",
  "key26": "5oRB2TKMgwVeYbQArmcB8ihnSWJfxfWbQBagDCjdd3wBQs9NHVXm91VbKECt7yr3SRmPpbTZoZ99cF2pbV5hb2o1",
  "key27": "rnnPcw5n6FmVdcR5XT3zWJBkbPC2Rk2LqcaH12DUzqVcGV3khhJy3JcttufJ4tVF9mcqVp9y9riAT7ErMYwhF6L",
  "key28": "37wCUXJeeTBm9hFdM8f2bd4acVCVZh3YUUrb5fPpeKFkqU21WEZgUfrwwtDyqffyjcAPiyQen6REk24sBJNekDZP",
  "key29": "4oaALbDjzSxdL78ZmV6XWWBAUMUh7YmGJqiDhyaARLkQTEPVi7orW39QeRj58V81q5CNJzSLXkkeizRQ3mZZE1ae",
  "key30": "R7bKZzTDSCLQJAL1hZvWyQBHNuJChJKEahtypNTojigs9G9LndYJD1W6Vc73a2q8RGsXhg5Xh8uDM6iafTyTebL",
  "key31": "ZKHhyM2sLuT7jLF1N4DHmeS33VP9VapYtFzgjPZhmcxDtbT75Vzd3V4V4pHykgfCvqM79uCEZ8VX6dAL9M2KvYD",
  "key32": "3jsEGstbXmspQEhD9BweXZcCcCYG5EqsZCWdoYTewPpVYpMEpLhD2mGKVzBFTSX7kh9mAwCEhDbh4Jd64HSzcq1B",
  "key33": "2yzuy65ANVuNU4qQ2AY5v2JUdb7B3pp4UqCZR6v48kgrU7aRHB2KF46LmY3mx8egurUdJvXxT72azMtUxKdG2FsZ",
  "key34": "5xpoPuHQ4w94PeS6NqnDwr892vB2ggBS54hMATPZ7QSj1zddGdFbnCSQoG3NQRqWigoMbP4CX2Rgx2HB1m3AQQuc",
  "key35": "2vd2Ldry9eoK8ghGnCYUijAYfrEcPriRL4b5VYb4cQQjy6XUYGZbPjH6xN7N7CbfNfrmkcc59AeVGxEgFFfHYJPC",
  "key36": "4D8Sq3Svg7phsDHfiJ9Bqn4J1W7SdsSxuvNwoN2W5xirPBQGu28aCgLAKE9oVJ546sx9adJ4EWDxo1esjvbMGymJ"
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
