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
    "43ZLEKqqAaiMJw4rFrgcS79v9acGyKqoq6z8gUs9T6SYaBzBsKfKmX7hb92Fo1mp5DnMYRFqVmEQrUVTAincatg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2QfYWpWxjjACz7mfYsoXHoe1Q4jhTrpy216Tsepm9oo2gqiGeTrqFeyzYLWZ7D72E882xMqbzYzxYDEY2DbB7H",
  "key1": "2uLHjk3SbWJGyos9NNpPFBSg1Pkb2dAuLqR4VZRgkwp6kA3uJPiCMTABaxV7wn8sWAacPgCg59tR8AWS6KV6de45",
  "key2": "4KwssTiHBY2wcWHwXHVs6ZTwE8GFwQxj6b9otsdgwMX1nfZ66Qe2m4sKjBn4A9kNUVikaFWFwEHUmEKJc6NXVWwk",
  "key3": "3VRcfNqSpSGYcieDcDd9MHRsnH4tUUCudYZg1NBaNKBeK9e22GScJFsoSeopM9UKWq8QiAgXooQweEoi5LzRAcqT",
  "key4": "2DQzemUnVXdh7kWQiVLmacJDmgMm4W91d3CUnvtjAuGDaWUypWWBXVciLMgJuVof9BYmUP83UNbPseQFj6bdraAn",
  "key5": "3DYbBm7Rdj5ZnC1Vk7GNnpYaH3mzj85vqngVXx8yoUiPFieuDjJX9pEn2RE6XHSdpjnYXaHddgPB5vkjM5GnWTe",
  "key6": "ZiN3idbFjreJTpk9dQXeHtTHjUiKNG1zXHTtQbF3PdnFCgWb8uetRv1GjL7APbg8Re5XFjS7mjKasx4v8ZwKFNR",
  "key7": "2nkdxs42Ro7B4Lao1YcfcoYTtuM5Qc4P7LNpoi9K7qvcwJgVmUGWaP4mAQJkA32LZ17Wek7oSZoj5jhi7FhWRRP6",
  "key8": "5TuneCQe9uH5duN4zAmRY3avB1WgrSJrG91yrqUqjrweqSEWnuVbihqd3XqTS89tt39o2Mu4Q473P4THABzzAPa",
  "key9": "2QF9XHCdoTC7BtAe2V28caFPcTrL5ZiuNJKeBrvBhDnRRmhcvAN5X6qeS4666UkxYxtZEheiqhyv3Vkeyeyo3nr8",
  "key10": "zZ3mXMRxr9h63NZovvNtvjQKyPZ99Jt7J3Fa2xLDMPSJRiEBs7U3nHeP9qQkHEk2L6tFG1khPXAu3iWpTvkiwsh",
  "key11": "4Vp2vdzkFwzXpZXnchwk1WyBBDDUEpc6AGLf9zPCnd29D8r2LFsKwfoP1GtEn7UGrvDBHso5UD49tsN6pYVGHcWn",
  "key12": "5L3N9zaua1R6GrYcNnv2pfxuD7Ten8f4BPxisu17RH1kSpRwskCYT5QjEiHAyxtQPZdLTpGKC2F1LeXnb3P4ZcmC",
  "key13": "AL7Gb65JGi3nhiewgwG79m36wpUZsTCZqeiWoa5q5aWymmQnAzCHazVzHGPMgxy22xeY4dMkrKM5g9PbK3S2UWz",
  "key14": "4KRDTizVdr5B88LcKePeQGc5hM3o5XUhuSrdbBTrpxWCBXRVo8o2SjT6A2JztSLnK1faKxz2s2CMLE2EdPsnwM9y",
  "key15": "MT8S1uxdxRRX5Vj38WJg9VkUxrSZ6TQdPUMZzLJYvTfpMpVBYKBjvD88rExq5cxgphSvTicnPDjAA2YhojEfUsG",
  "key16": "42yvG5K4kB1h9EnrSZLabPcUF9XwB7t3dBSGWPN4u22XV79ZaLXm9igd36FbbEb9roygMdjWwcRzVCx21xyEH3f9",
  "key17": "4ieWZo1aGd8HBnXJoJPXWmHTacsMhRozEidYtznGfaX4VsiMed7Sqkx1X8YCqkSFZFzx1f5hkv31LtDvBrSL47No",
  "key18": "279bzMA54FMLHtkyAQcFd7QVDATtLxq7wWnoJouCkDQnxKojRBVPwbwm4H3s6NYb1cvsu5YgxF5UR3Sp7zgrgvjE",
  "key19": "5eA5cszjqsHA1cBZYyxe6MqkDVCK81CJ7GuBaMoLFdr4iCKx986n92xhwg5Su6DsFkfLTMNPHYDafX2Rjr5ffU22",
  "key20": "39JRCzzPbWLEH7aSNZEswtni3a396XDtxCyPKaVoscZQ7shbw5HajWzg8VJAy1fKaBHqm2iuw4V9oprTbU6YLqZc",
  "key21": "31gGV4fxQm6NdKWSsfTuzDoP14EkfvbmP6gGdNp7sYGCqsMPxTpzatfeWRBZALK1zDijQRfQPKDkRmiByU2GxkU3",
  "key22": "3hXb7HCwE5ifNwQvY2wCY918EkwUgCfcYMnQoXYgtfJrYzg5RXmY1NqDK7rTqordthmTAx9tN1p4USzjQy34cS3R",
  "key23": "2arPcXJEqK5jAF6weL5ZKZ57XZxvyTALeDQwUKERxXSjm6x7caUjj9PqwDU3Y2yPcjwCpZby3xPDhnEZ54nZqAdC",
  "key24": "3NzkdcQiBXvZdkvsLS5sRZsk3xyByB4YeK3ASqBMB42w4bWUJc8jzPH4kQgjCEMBTUh5goZa6jrG9o2Fpcuh3Exi",
  "key25": "3T9WWSvVaKt4dtibH9thjKdmQiYbvQL5wtjfcW18FpsSkEi1hvap9ySqjnKmC4cyZdC9TFiT7T7EgTu5EKMoUt4L",
  "key26": "4pBm8u72X6pPMefLKLVHzZfaGbX5tK1gNLsRz5iC1v4D29YoJqgdBKBihCcyP4sG36fTj37YkHbRR3cUrzFVYsrD",
  "key27": "S7hLJpLxh3sV6SyUEvP9esvHwPVR6yHvxBrYZp94L4nMxNhfrFXjeFY13a4Mf9sobo87WDKCu2D7hDDwPi4uZHz",
  "key28": "5Ug8CtZPUcja3eE2uQGorDNxWBPsyoFJpL8DCoY8L3LjeHPiaqyYBWzPWTZHhCgzVBRwUt85RJ8mBYcY7qtBnDAj",
  "key29": "21QGAtbjHRgGK7Mks3JVWD43g1XnXoQVoZwpwkRGuqhghnnTzBuAE8TfTPun1sRT9Fjv7oFZ4zSTAcBtPUd3cHVx",
  "key30": "Xof8XpRBgVrKJZkpuhwbxsPP9iAX37sGLTjyVNpnxiD3uVxx6zpCY5XhMPdgJVKtJTW5Dv1BVpCQt3Rcyykk2yb",
  "key31": "5sWKeaSEsvyYG8Wx3YeDtoTJn24mhgLEADXAbN4sqap46umMJnfHisQR7bN4t3gJPHRwBjbSrGLwG1WywDzopduJ",
  "key32": "MTobL76GvF9sEoiZFoBKFaHEJ37VPdGhrMAmKCpTuT7S2zSYGcqzWTWUxZELBA3E9vgNBGDbxFuRo2njzjmmxK7",
  "key33": "58TCm1Ghej1CmUedfGeoNLBSCj5UpqAc9TPpxRGJuq719Vn43CT9EAu77SMB6uLKqV6cm7Q8U8cdtk1YEsCFLE1W",
  "key34": "4H2D1pHCYH5VurCoNQmzrVXxFJbfiijgdc9D9qti8M9oYCuVWAvdftt1gLo8GxxAQaduNgySWjz3XD9G9zL1gmqS",
  "key35": "3Rc9vsM5PJ8j5h7rRMkjbfNPN4ri9dJ7JeJuojdT6QoUZSHTJwPdFktFcNGEysQZCSBF1jCZayGt1vXEohR8mzz1",
  "key36": "2fhsXR29S2R3dX2cSyxqgL8ExX87Vz9K8fRnf2K8XsuX11T7djkaezgfjd2vqHGgQ4GjmuLq5vrzm8D4QkgLBsEm",
  "key37": "1DoBfvWzZW8WwqxBsTNtupt3JvM56ys24RShzM9sW9f2rC22KRGkDFcfsr4VFEt6QfBsefBXa6JPUbjBMAETpTi",
  "key38": "3tayXSaaChQU17Dwtj5rRZGpJTopbtTE2bjx9gPMBp1GoBj1Fyf3nFunxP32URffguv5RMcqvuvRUfkUMrLNyQkA",
  "key39": "5MdGqSQemeYzyUpJS2LKhHZR4pCzped5eQuQJTQ4gc99eA8bxbM37CQoqLUnPqsk93wH1iQ6q5ktehNJvUBtg7gS",
  "key40": "4HhpacE7NqVqMWx3eQDkEr1LkvaFx3GCxBPBXHRxDk2yKKmCt3YGP6h4F8ynYWNdj9VbJ3wFfy3sjY9JegbFvZ9H",
  "key41": "5KVrVdU5s8ATU6Z3E14uPX8G3WGzMqVNR6yDGf8yVodp7cdDLwfnFEtgY9VJ3nAcSM9JFaRbuRAcWdARZCPkporg",
  "key42": "5vopJnwdwXgvYoQhH4y5BmZB4JrMsYNkcyuNqSU3yqyEoSfniEYmvngvDFf8eENHuR9qDKfruZp5DvETMMLamiu3",
  "key43": "5WVyTzBCzmdvuP8Svgfwnd9RgG3oNtmRWTVJxcumEmGk4tsjucfsQ8Jix9afXWf6EAUHDyh3xQPckcmDAS9jJxi",
  "key44": "4n5PoR1ETwkr2CZRPL2X2icqpyEDpt5EbRj3RKNW9SyUf3d5SRefZW3gxqrb34WRAqiciEeXJVFVNJnLAfnXVUK",
  "key45": "2dDD3ofHSYCYuu15Sj8qgHirVq9bpWa6A6mREb3ti6UAw47YZXrbuHLiMvBZbDKXngasZz6sL9c3NUcMseUP3qta",
  "key46": "3gDZ8rsoN6Szq6mnY8sJ9XgSUTZVnLe17j2ZsTHCvcnEaHZeMkyc6zoHLgKFmNAgpysNU8GB3Tc4mANHcMYePeJy",
  "key47": "49N8La2nJFY8tJDnnsbxY2MTAzpDhMLWhKHPmvsugo5qVAr6UB98NyQJAUAB8ESE6x6APMGKb2P1vMA4sG2ptpXk",
  "key48": "3A9oyuQHLQNjMnTL2AGrs335ZkKhHjyWA5Ey7ynrnxpmCm5Sg2bXKvTsqdCUpHy3Rb6JF7YpNLWNAPorug6qyXjr",
  "key49": "4AmB5dQjThNJsKRCdfJgdhMvDMXqig3iYEGEKaXFCvoCaACN5J3uJX7C2T8a7xBkbhQBm3QUWQ3CtfSPBsT9xv8Z"
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
