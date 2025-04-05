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
    "4K58CY3b1H7oScZJaoQDGRzSSFHpC48VwFvreJivTaP45UJ7SJFAFok9JbTYf4yp7TnDG57ysyfuxCqjzLopJe7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kAsRTL6puC3Phv58cFuJ5ej7hFLuUqMcyFRQW1HFxA31dkATVPbmvGMScHA1p8iaRgkxMQcNCJCHCLABAkPajd",
  "key1": "ozeUkQY743g9xa9Xie6JqQZi2FV8eXMGs2QuYHEWQAiLuhaM3V3689pQtBcA3tR5xb8jTi5dQj3cvRb5Mxz9xuY",
  "key2": "ZRtseTVe7YWrWc2AZpQ4Xvi5cvFY6NZGPUjwZfbdmXJQ1dWR7akzMvEPRuNRs1n9HTHZv3s3SCGkNx4whkf5oAt",
  "key3": "5gHMTiqy9g5E7EvHkciw9vx3y4SwMjjgsq5FnDDhNxuxawoPWJdDERtbfnK3bgXJnTh27fpqHTvmAtWKDG63qnD",
  "key4": "5e1cUGQ1CvKJB1HNVNb2YiycD9MfJfBWxaVT9ztBVVoPwTBD2eiK6bSAgSAmvfP1PLCXbBWRNk2Y4LM71wgG9KV6",
  "key5": "56kcnXBUE9YiNE7CVKtoteqoiTK7ozFwQsFTkbrjthh133J647LMJ7httAc6EE5EJa3cVMwpFypwGbf19umAgSRM",
  "key6": "PXCNdhtZ9PCEwr9AoifP83N3oRuz5Ua2pNDV8s1PkTCmz3MLik6KneByeHZq1aZLiMNZB66Zcy1xFboJ5sxibna",
  "key7": "4X4sQhW4kKt6VjqZ3PpUiobBESNcbUZaQtzkwhXBY9YBN43Xdc3qT7j8mJtCbGiN3VvTR8r76WuKHvc4Eth7DGPN",
  "key8": "3zMMk2szkWsJYArDn4vxbRvFASnq5ru5ETAzS3nyExGb41puxRZaJfSXtc1uDhNHfSPa6Q6BhbCkDUodsscz4fyU",
  "key9": "2wTAm2N2562YGhpxf7TtMtxzoxNJX7bwa8dvxDDe92sv73LtZVBqsMR9wYQHphN2hhUHUhXbxeggXRCh7WhK6Q6g",
  "key10": "5eES65prF7DQScqZPAoTGyyHRBjYwURPtwUaiPzLQRnVnGNx6WicjYeDCNdCQskLFxb1nDG8GGJS9wpupcbVKWzN",
  "key11": "gpfGKRj9HvoASmLWuCcXFhSuamaVsSzSBLcJq4TTdAMenUm3Lb6NpfasrheThLZmyJtv1duxXWzoTcwzFUjqCko",
  "key12": "4jPJV2xsNb7ZpNCoYxoM5VYSZKXCxF4HbBt9PRSqUqjgWf9hG8rY3LTxrgnm6a32L1o8KMS4ofqpcqHhpjnurLAZ",
  "key13": "48bnWheZGR9jm5fmosBknGwEaGwXtgPZfPDwcMkVUPTriUmGqS337KdK27LgYEUVcqumM8KNP7P7b2SmSTgzsVRg",
  "key14": "32QpguJSxaSttcJiMEaCC5DvU5J1GdyaXEqAhcut3tannenT9LqVdCVSnebPaKqVjmpYQcDVbQU6NymA4g9wbX8V",
  "key15": "CLsjUKzQA7yDBLwLzCKFCE4PQ3zFGdYCxGVyQh8tbYFDrHocinDvtGUEesyJxzQRhdtW67PMR5V4w1HA4T6H7zS",
  "key16": "2wVgmVAVnyyWiQ11QekVGBZjkYZzaX8BstREhx7TQERyH2nWsSfh1zyW5VXYiqrcikx45m2yYZdQzax7Ls8Yvb82",
  "key17": "3r4kaNnrKK11q9ipzJQPQTqvvTmsFsjXurbcHS8eQPou3EAojnwWnCfjXKv3vDsb8jPvwvowMw9PVa4gfCcMycUC",
  "key18": "4STWCp1djnCNbRTkEgSd47e1ZqPBjKDAAAAysXaHqjjiEGJVj9YBUNd63NHa6g3BY6gy7jg1mjLWBvu2v4YaqGTM",
  "key19": "34afQ9Jo8PDum7n2qLaW7LuVxjiuqufW9C5ynvRU4Pz2aU7Z1NbwUFrdpArfp7oTnX1R4MLsPpwHP9eFF3ntN2v7",
  "key20": "4xTJyNvmvkb9WkEQbh4RdB6RgvvgdxpHV1vQNkQokJXgtvQaXDPnWBRosv5GpWqHk7uBYuyCq8g8cpgK8H38XUgU",
  "key21": "56v6kPK5V5kUTmooG2Mdyk6BwiA3sUsGYv2aHiqY57Z6g56LJPqtvqg4RJgjnWX1LAeh1KmL5EQc648gpPHTd67A",
  "key22": "3MVHne1BjFy3Cn8t4Sdc4rixCjVUbwWnGMg4iwLgef6JpP8UQvk5hvJmDEWx3dhz1n6fiCyqdY94AMqerRPQ3tbf",
  "key23": "WRF43prLxsQGhVbVzxozKSGXiVTHbwFhr3QRCVMoLcTL4hpeykv6p3BPWX2DEyZkvsYDyJc2SLEtBLteBtthuCi",
  "key24": "3ya1FSB6gpAt4CRf3uzazkyHCxR7n26ehPz7MmVp9ocDEM4Hi6STqAFQaym49385ygjjKWd14vXHGmrWmFKV9UZN",
  "key25": "mttuaiyqjuxRV2L8WUdPH5mWHBGwVnFrDr6TkC6eZBfLsoVLWH8sCCXjDmfh6Qz9FjEgDz8mx2rHeh7JKekHs1r",
  "key26": "2hfnKEvnGvqzWLokCorPE9Dxh3jaT58KH688xojwnt9PVPHQwR5wBdfbLnUf45Lrxtdk9JNYmaobFwYiLHYpULUp",
  "key27": "47miGFiZXFR4fdKakkpynGNcbXzC9a8Dpg5k1TqpmBPEpWmJrggFV7xspvxLe8z2rjMJANwtvRnUZTSAPFMw82cK",
  "key28": "2sVYf3fwpuY5bxGrP6eGQDGtjCam6M1AkTA3PRS48qX4x6wPbceh1n6S72tGjFWA61fXSdRqDkU8V19SQBkuHvCb",
  "key29": "2RzYMZCZXnH3GVkBEK1m5UEck6avDL4EKRxZbNVseJtRqn7D3feZaDmu6oE1rbE2P1W2NRNskASz8R4T28dpULTo",
  "key30": "2yFkN6QFwzgPMh2ASFNFrZXw6bFrsNJuNR5GXhvbiuwuvvro3jbMThdMViH5k4XNS9NRFMv8yYcMNHWnVpeEyH8x",
  "key31": "5qGgx8EauYcRYjYFwrnwoyTmDWtcj5zTLC5Tb9e79MtMAmQfWSZhYvvWZRC5jR8LJVRxuZ2Fw9BxoiHe7BgA36vy",
  "key32": "52TMNSBCoLCW5JhXjTi7raN8varrjLLt4tmmVR31gomGqkt6keWPPpBMom2tmNXA1cgCXjDDHeBoXharoR7RKuEs",
  "key33": "5Q5SgHezmqDAgamXemKfeV4vuPKa9kSmsC5kXtFAKas7tEtUJ1VRvHxTQh6n89QmYHgwt4du3UeRGMTFsPhW6Nak",
  "key34": "5JEXGuqwnFcntcfhsBPfRLxu97zosodMeBRRkNx4VhyfaqFmuAsZc5VXbJ35JrLnk1yUohN1YrQ4C14a6hAA1Gmd",
  "key35": "5XYLcEcyXtwuHeKqH3wiViPASqsQn2MUggWR7PZac6oUhn8Q5MQBdxQSsgJUQRLv8zqFFT3HEhfpDdteyPyGXzHF",
  "key36": "fpBQoE79Ct9K1VawbQrJffDKewBGT2gwqcc5wWfF4ah5frDYHSiGrj1iKnrHg4j9KGPrWBvpmeX9rAMfGdcJRnU",
  "key37": "5Q1GrWufjby2C7CYLS9LUpQoz4A7gQF2C25WNNf1taXK7v14Li1d76GBN5FiaC5RAhakfpMKhuLDTKGDyZcrjRZs",
  "key38": "M94fYte6CeZmhofwzSGHLLh1MYuBGFtd1qsNYrik4fpCfnGsXG37iN9D7aas8NrxPVdn3mx72Hb6KasK4FiTVJe",
  "key39": "5HQNHRMiFwvnBzJqzhBYQk8ayzgKNL8YJiJAoUSkSLPvZsB2Lwtc394DhZEpFRzZmW6Y4LvsaQwJoKEfgbGkCEns"
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
