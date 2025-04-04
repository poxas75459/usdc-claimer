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
    "53g3ukM1JkxdZb9gVk8WY8LKPkGS7oC25niVtVwaHwFyRXFicRRsi1CYqWqUPV9RtFYqgiM9FoyjjyBxmVaDyRZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQJodHgEq3ZD5cqE6EZsvmmrJyrjT3t4qBjYvg4VKbtjpL9y4pbnvSX6zwg1jiN24MdpSi3LVHyxqbERtSLZLtU",
  "key1": "53uKXeoCSPSTPAoFyRgBBm73jjsqGxv19dSAumFf1NoCkvozKL2daH4jNfZetgdFPyE9Z1NCDwkrPvgQxgX3bvhA",
  "key2": "4KhUPJjMkKLKsHjkora8yeGfDsdTddwN5Vyajs1FnebPigtcK4HQygRbW4wQVtkMzQiw3XTVxKoVPnRMZYmwwKRx",
  "key3": "pMJphJ8yPmUEMdrorwggyAVDqcHnYKzzCZWxd8MsYAVbRLxujVBVKEccuDoJpbK268YR2jgpiA81HZUodkw2rv7",
  "key4": "4sLLSayPX3Z18yo8heu1NkvEszRSqHUPbiUpZj8J2XfCBoSdLhtd4VQXyWvAbm2GwJiV2JhLGevqz7mW1W9iGvfh",
  "key5": "3RdRcztL4a4kytkucqY37yqDTsZc3cF9kAd5cyP4E9u2FRTxadpJuN3fAbRX5r5wrrMdT66JUEp5DHeCPa9grDnh",
  "key6": "49bqXhmaZMMCfHbcNFafTsYAAqo1fm1yx6gHxvoqDy1iNBAbGLx25UKrpQLfhbSsbPwLhCFC6CURUjKdoP8PdMCs",
  "key7": "3MdqoPdEoDAiC48SRKujJ5eiowYL9j9nrLMQkZN67sJDmXVeqNWJuatwuaGcmDSkC4Ph8CJ9Ru6qTvbywrhzWzm4",
  "key8": "4m7zNEQq5ya3sNQgWnAHnbVq6bXYJPVJFRQqfb8EeR5STyygbPqjiUTvk6MgtX5nzf8okjiGqrvcrMp7axD5H3VY",
  "key9": "2kdbXJ645NdQQCoS8Nv8X1cRmvmKifU9nd3kXvK5yDNRGaJEgre3KbcnYvTb2cCEhpyjQV1ZMWms45bhoEnSsK4j",
  "key10": "4FKqDQnGn5tpzAbKv3WQ9jXab8uwMub478c2ZxqXGhRbYAJiqfaCCoPz1a4gXESCPzVXxW1SBD8DHjmKnpGWVkzw",
  "key11": "59SHgaPdpkWNMPiLHVX6g94wn8GTYj47ZEDBXkX5P19C1r18wYHveQ9FRc2hiCuG4X1skgaFbdVmWWnm1QaeVivF",
  "key12": "4r8ESAzAN6DBxU19AZxEguy6VMigqC5Rt45Vo4JisTXmaRupr4w4yyZ36Tx8hYQFMJG2jGCRivPGSX4i8X378ejG",
  "key13": "3jf9bL4DhsidgDx7fwe2UG5kdUyT8gF9JgQwSVBVxZJTNtj1Kd3Pv2eUfkEkoSAKf4QZkKAQNpLVnLURJoiCkJNw",
  "key14": "pQTgn4PQpBq8YCGfrDuVuaw5jJRhuVdrCvFV2d9jdi5b9dyd7skQNfXfHSYbdxRE8xRJrxyzJNiUUdj7qPav93B",
  "key15": "4mMKvB6eHZiexpipuchfiEyyPeR3kXAGt1kDvh879miTM6sH2FJv2HVFv2Vd74kXwPXKEd121maixBkJuTKtirBL",
  "key16": "3QnusWWNcFnAH7WkrR2DN8cXhHXP2CWwWyp8vZbBo1yCSJDQ1pjb1rQ38eGG5dqSpS2ruyvPzZqCiXzmyRBb953X",
  "key17": "4H5e3dJi21X2kkAe6sLCanPPNPwmgFpeo7Xt67EusHBz6LzCceEbrDJmubfCzXmUNUP98Kk5oENqapUEv6ANFTLm",
  "key18": "3gXuh1xRG5PBSQgko9hA7db7j9zwBW7LdNtpQfN6rV4sCfjXPp3XEC3M3D573T3vpJR2TBRLvCdxdzv2t3StHnJE",
  "key19": "yqifjWZJctvi4es9BTBMTZX5QGHBnd5A7oWeXMYUxtK7ZzSnsuLrYvbdXScuwuchr3mqUeRNesSjFC3McAVLrLE",
  "key20": "5tNx5mkch2Sy9i69ERyqNw1uHAC46vaD3VDFy3SpoW9C44yXZfyf2S5dsoD62frgr6f2VqgdVvHDDXQuZfpswE69",
  "key21": "dnTn5xmYWcMBxxqUXAuRHxmExVnzWMyXnmzC5dmRV6AL3m6ZQycLUBe5KewDTDDN9Nv32Tbp34eWbsZAxCZZZpp",
  "key22": "2agXbUqhRbPU8WTnfs5vbLawK3NmREbdj1bD2kyaa3Xuz9CMExFYBPu8RtjpGCxdxivNRbmKKcQLjAuxHdJhA9mb",
  "key23": "5348fntPWWYEe2CtiQgSEJsy9aDKqNi5gtBYJfPWkXGb89xJYrVraNN4bbpoCcWQ4d5q1a87txGAM4pwoT1akWef",
  "key24": "2gCPrxnnAYEh3DfuDA1ahAEAq37dtMk6orcLMsTsgyGrWg7qLxrukCWup7iPTMQ3d5XALTdURRtFLxat4DZnE3uH",
  "key25": "3CfjzHygdahyQrWY6UP8Bq7qZz2u3jCnt9sGrZuY6FRofp7EwP3qGbKA4zYmTh7hpzJo2uEWLfhki4ksBpKPH6he",
  "key26": "4iaohxZaLcjapEK68fGKizEFXkAEY3mJW26GfAij6i9cE1Qi4hGQucMoYX2PUVFr4mSSsM2KQce41iGsrWYxKPwh",
  "key27": "3Txp8zUkc7y1Ez56kLqgz3QqtHnWHwd1uksH2tCdBdwBC2i5juhTs8TRmP7bzX8gJNm6hxtJaQiReZXnecSU6nrt",
  "key28": "JqFdZ9h7c9GC6Kn4CPQHQPMTQB7wXqJvhczBzzjAacQNPqhuzB27wbvbofEnkpyG3DqL61RYog6rUSkQfTnjFzd",
  "key29": "52MFHcszky6aNP92KH9dtKnkSSNQJs7ZdySkTnAdHvDuvXLjtEKX7RprFHhw1mi66S2h8BSTfbmXKpLVG8HhHv5y",
  "key30": "5qm4zZYdGxPJn99uSGAmNgfptjdiXTtuzMjcxBwq3VLv3GEi3GW3f71TZ3F9Mf9PQ7Wbx5qWJbAfGqxJK4ckpa6X",
  "key31": "k8Wq8C51abKsxW9VPfv1W6A2nJ9yZksejD6itPUzqFUap1qN53e9vTT7xTLFZFWCuJeLzGBFthKLUVDLACJcWKH",
  "key32": "5hQaVCGxx7C9ttDfJpcBvm4uHT79tqseERGowvwJBXiJw6hjpAvT3PS5ncAmEVdw6aJvbnzyXd6rVHTULtgNZjSG"
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
