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
    "4Pu11J7ehTp3oBRJ2kzj2n443BAshoGkUdwUrd9JyByUwSfWCG854kah9oWbLffSZ4YZKMau9vYkPGbjBRX3p7pL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Ee1qPJsJwhrenBfKoaNqZHuaV99LbCGp2ypixmm1FQMZmT4nuBmeph35fxeY4hhr8vm1uwFiTYAy6nPSNmJMxf",
  "key1": "QdyhJnyC4xMPfqjX6vmiphRjaEKHEVDxSLEDtGTRZLAo5uKTeRkoFxTpSwdKYS7CmPzwRBgRbfA2FKCK4H3zuqt",
  "key2": "2nVswyDCJGGBpoJwdqYfPBXJxr1L7kpzyZwDqW6wVQ41kVXvkHdaugVzDrCJ8nraGKCcffpBW6GgBQ5jDDSVAuwV",
  "key3": "3BWAxa4eS4H5yquhWTaoA6sDbdeiYLcz2dPvc5A7E4PTgqpU4LxqXXSjKtLBd2trAsyJhrrUXYHYLmKDBBw4mRfh",
  "key4": "45ZJpqBs3NV9hVQ5YXWn84Gn2AUdgKnnknyj6hNK9YSxbRZBeVsr94z9fHPDKMhJmBhxvySPNjMi1hCPr53tdJW6",
  "key5": "3cSepmZ4HSs3yU2hDet43PrW7hAcHfPuJfgKLfjWRJFuBcCBvNfyYGsQ2qMtUbL79LpW3vMvdq9s3npujcxqUn9U",
  "key6": "4VXPspJtPYMQG8jcVsV4Mf3jLbCZWFBVpDXxarUFW7xGZaiqesDg7rMpuHV8PS31mxJk83NzHWJq5c2KS3wcHyS7",
  "key7": "5N1NKeGLG8aFr7yWBTfiuHpVfQkHySDRDTfwWmSACg6rUbfH3ZiVMzfgAupLQ9duAYPzUPYLSwSh6mBKpneHdNt9",
  "key8": "4kFQLgAviWGGNZ9jd4EezKc54ExLuyWZwnLaucUG2cSLeRAJVZJkEZupchfyuKPSBLPpcwPBJQX82PP3ZKuc1pRS",
  "key9": "3x6nkG7kqp8q82HTD5ARaEWkrDa5nz7PbKPaUqgsQ3EnEbBw7JubX1QQdmZRMgGTHjBvxjn6erSZeW4V2WJSZTwb",
  "key10": "5sz3wXdPBxLL6Nx2uiWwypEJinRuJZuNN8BCiHn7G9yVnU9K8GxTeiixywbZbMngReRgPun33xWbCLkLKQNRizmF",
  "key11": "VBs9udcWuUFyCzxrPj4h5pvBeFgF91XEZm3HMeJEzgLQB5GgLraRdNKToe5qYurQ5XWRnsAtCwcEHJA9zisY1uC",
  "key12": "4ytAf92GsTQWBEHK6fopLGXcBsiQKS1bUnpwFNkcPiPTC9vVvTikTe66hr5z1pCpkp61EGG4mx63p3Wb7ggqvkm5",
  "key13": "2pYMQMcf3FRKnrb71CQfn89SdE5E8yARoTfWX6f8ft6rZGirM3znruQFGzVTRizqEduTqJzUha1nUjg4fKf7EtK2",
  "key14": "4zQ7aV6pGPcNxiHJXsBQCfyYKStHsZ9f8eC4msRW3cDsU7suXdLGX2QbXRn2SH4ZuxNtJq2MKiix5YxMtXbVN46B",
  "key15": "CqBtd8QgebnKyoy8vBzWV3T9VEBp855KwkPBEg4DD1VViiT5XxRsrNi7iUq4TVe5RUfMhzeXym6J67GRJ4GdEYb",
  "key16": "4mH1HsJkimuxuxWLEVdATcTY6RLPnZ4E7vxmjL3wGZrWPQfUxzBzkCMTdtQ6SzdkWqvcY8U3qjcmVALHyqazZtVJ",
  "key17": "4zFG8sb5N3oFKEG76LBWZGaXw7Vi7dtV2piD7uPSLLmBuTfHr1YJWWBv65NS2LYyV4ByVov2tvMA4QgLjhak2ux3",
  "key18": "3oEf2FrjptCDJoWps4vmFK5odDnGMpNbEbxdovf88A9PYvQ3Q1bYFkTqaZwqA9V6uz4xdYcvccd3hfExd848iT9k",
  "key19": "3yhUaF6JhyKA2jHS5wy6jkHkLVM2yy4GtNZ1kN1gQYbWW9GYUmzCWAKWWmWfhcSaLrvgorZhHeT1APr3xK9pKN53",
  "key20": "5bjFUNw1HNbbSLPmCwwpuFz2vr3S3J65PtthiWYiE2cqmszLTzyp9bJiLwakmwDUqfEpJ2t8ZMPjtMhLBFcCLwJv",
  "key21": "3ALWoUeLyRqaFLgcG2P8YU79jf1Uf2oCYK4YyJrcRZkHntfzfmbh1PD5i84myUMu2MAHAMhXwRsAvxLVa5VVdrmX",
  "key22": "4PJzFmj4XxLrre5fWAUfDhucRTphckePUR51waiMk7kZsJH9RP3pHfUcJ2kB9MnEVGkskqbkhPBLt3AgtHZq92vi",
  "key23": "2fZj9AV7ooS1CbtALKfvnutqEPSgxFGexiN1tWWrADk7TizEfefWKqR56LQwzT9qPcjXrcbmzuC3j3WdgbiZbmP2",
  "key24": "2CZnmJhoTNvNTnru7ind3RQcRpqupwqL8ZHKeuPJKziQ3wAS1529VC8WrxvV54JiVH25j3YmTyN9zWBkc4cR7v2i",
  "key25": "3AaBm3Yhrziayk7KBNXVR5tpdT7FVE68xHVkFeCMh39b35fJTVvXimu7jrdWcEeeVxLB2RodD4KxBvhP5NwprhoD",
  "key26": "1KRpBJ36bizQ4tnNgafhy65Uk2VikfaJcr84YtiRZ33gHvSrHSWdTrV2YTPhTEodQvL5M7ZVBSjYuTeRALrqNSa",
  "key27": "255i8UXYGNutNcYC5BsYH591G1VWDuj1j4q6URfPrzzY9aaGSh6chMPpUXhYyVtLkkfY2BH7vNj2fH819QnwM5hv",
  "key28": "4HtPgf9HCqBnUJh197vXUMi7PRwzzKZRFzNA9tnVBuJY3LhkWBtg31euj78SFAFPSrWKnkh3dMZ8rQhEmQ1jMzwP",
  "key29": "1Azk2QXgKufpYdQNdobn9LTDUdekthxhJuGQvDwcwu1cAmdgguUoBr7GjidQgfLzWrjt4fQVXWKjb5Vvr2jiRCV",
  "key30": "mQDkyt6v2NZB7cDDVFKZAW2QkMqdkGomL3QyBBHUUg3mTKZ1xcr4WbsNfS33p6PRv2motbpw3VtfN14aYgBUZVM",
  "key31": "4fPn1DDY21JQr8RGtVhzwjhihFGaLiShtsd5fECZqhGufVM2e1Db2R5kcbphjAXMwaKDFVNZsf5fmMd9iLpVcChi",
  "key32": "5AxC9dLJMRmzcGgeXFJySjzWQNiGQdneo3aTNkDszcQYJgRrWKKp6PHQULT89wtABjZ7h68f3styUUUUUFJjWSWv",
  "key33": "3e5Dm4aEuufi7Lv1u3Ssj47zQHojWCmSKB2fBMs5eu8eFPnzz5XfJ3Vs6juQ8ZBWk6XhZQH5mGWMJcHqtJm78xTe",
  "key34": "5qA2dSTHtWjvShmmAnEE7U9cAK8QfGRU4qFaJZLZsrPjjUrZWJjrmRzYfdJ79w2VrxMj56BiCH3LrbK1EpcZzTvn"
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
