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
    "3ruBXjhXrCrPnDYtPbNGGifRbigC74ABBQ7g4UXLZLaD38fsQdd6Yf4VVwSBA6DMywX749grDrzQiNzdmnQP8GqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sS9VUK3BXKo3BXVLPWs2DkxA5nW61kjYivbp7haYH1Jeu7rKQ9K4GYHJjNp614rgmHqECagXTzRmHrrNmn86eUq",
  "key1": "2V7vbFBnC2vdcoUSv4Kyq5KmXmywxe7mPofD2ogACgN15WMVDQ8ZM2jRmcU8byzfuVgJ1eqTAD8Zq6A3w6nHNDEM",
  "key2": "3tWBYwvGEGFSMwoun2FCbgRfAq6Q5j4XxeberJEkbcZohd4s5fWeGc7dc9muPJ3CWdyLaZnM3gxBen8bxbkP5TXi",
  "key3": "Q1oen4jkMCqofq3Gfdoc219Aoh9LMV4BLkRU9ucXNUriJbJB5cdN6jZxL1gynZpNUnB9ShLTpQ1DcDXReQFKQJs",
  "key4": "2PTq3j3SCEs8U8VTgGuU298qPntokcJt3eFNnE5kCcFEXNsBgSdQBmn6UCXo2kxnnPfGiV5uiBPJRDhaAGo24gg6",
  "key5": "5XhubXovetvoMJZZhNxcVK6MT99v5vaCQb89MSWHstXJ8HCAfy362TavrDqh5Dmb4WkqvaPDe1ouebFNWoeDHxVH",
  "key6": "52UjLnrtDRoTmTejB6Q8HEmiQ1nAbBa3fw52PRMBryqZUj7U5ghRe3i4dTS4DdWFGuNNzv7KdY4DCNEok8aMKFuE",
  "key7": "eHrfxNw27PodZkBLibP391D7kuJXkWPn3ftmqqsygPjq3KxAeqmPQVcDf9CcPRAusUyuN1UC57aVrCoXfqMAYWu",
  "key8": "4Y43FdhnJqytboW23i4miAFDsqjV52jREcQf1ZAwhtwaiSw4EMTRadzKjx7dePWPeqgjLYjuZ9VMU9gEWRcMVmQn",
  "key9": "2jE8BY3DsGT9Puv11nmJeZhqxrqDqtyDz5avq6xa1kf2LLVff1q2GwMAdQ2p7VHSjbNCv75QdP243QBv35HKrGow",
  "key10": "5t25a8NtmTJQarUPPWYGayScpTCv4X6g7XiN9V6yQf3kkyq6zjcHGqxP4Hpo39iNjebCvmiC7K4vm9KzWyoyGphj",
  "key11": "7tPGiF4jPVDZXCYXJeHjKMb1cyfyfBVPhGDL55stEAxEUYn67MYDmJSKuvqSHgw7JgmzW4Wmc9ryPReFvGdmeNf",
  "key12": "3PAMoRQsL75sVXUQc9o71kwa1GDP1qVCSfU3apv9ZTEfXWMHt8cjt9wf1CmqEmkQGNnDLisjRgoW6FV3Nm8b5kPr",
  "key13": "2eZXQvmWWXdmjFYzvWdS1g9GUwgPt4vAZVKK1MVdKPWpr4h3oQMjxqVC25BqnsRE5TJfbwAdr1fX5VAmKZkXoPT4",
  "key14": "5rpUkG8ogogriAxaNeHTtU2d2RQ92Gi3eriyeHatGzwSHLbsJkD3AwyiZcpK88YmkArNDhMEHYiJ9FUmsrVAzSS3",
  "key15": "SyRRPwLB4QqbtJQVRAcU9CkeN8QWe3pShFrspRPS6guTJjcAiS46w4YVXG7dY6yxLDpJSmFpHcJpeMieBky8rX9",
  "key16": "4KVgGRW7TUxsMQEz1YnHvfCPFVnpjBuAw43pAn2AW8YnZzcYHWH3jDi1Y17xAARnMbhVeCmp4q15ueqXXcAyKdyo",
  "key17": "62yxpqvh6Bwd61vrsvtfq4kaEF53LhZBcCNvSdKb6dFPE6ggaZjM6Wg2GjaUBc3yvWMbTKNYvtqndfP9JW134JKX",
  "key18": "5qDKUHvkFi5FJNpD9hsoEfW6UraGf6HdCMZanymx7QfyKEatfm4UxCnjih7DKvx6P3wdyxP6oxNdhJq5pZ8EGoRH",
  "key19": "3GR5ChuXXtQWvyWQwmiviEch1UmPu76oETrRBXzGKiucG37huTgrTDL9eVSgV196jRLSBU1geXsAJo6FWJTgkY1x",
  "key20": "5zaSnDBJYk8UhuyBUXAXyK4XRNNSKnYR1EemGWGgop1nXUadEdmMXkrLJaArJdHhT6m8Jiuik5kFN6rUMRMC8s2k",
  "key21": "1KnKCxNfFF2hqHei8ukr6zuQtjKpYo4msWBXTWeNFLjvHwxyQtvTVUqTUp929UwQdrSws71oEcWyvPSpKnAga2T",
  "key22": "5CvPEhMg85uFGs3ZtJU9jdxtyPTQbqCr16siodaoXuA9qtGnuFsH8xjBTaXcbRRvDtcJNiAbyxYCS3F6VqK7Stvt",
  "key23": "9qr4Z2Do3oeyQmnveJ3MVJDi9WLV1RgVxQsRTFGf5t1CDANeyebyvsJKUu28EsT8jytmC97CaTipUkn4CTWuxsB",
  "key24": "5XFM1rj22c3KhxvjGWtNehrn83JED1oNvqrSfNpA9FRs6dmDzDNbnqd2hFVGMoGeZ5Lj6udsAENmEcjfAdAhAfxc",
  "key25": "caF6VFxn2uGiuGor2g7SR9JQj41ZUdq6gGQKvqYByUHQEs6ictR25H44a3X3qfUavf6VW9DqsBWQ55E18JCC1ho"
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
