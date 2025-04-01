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
    "2qbyaj79eXT3ZtJfwtFZjSeEZYghN6j4ynnaGF4SoGvnz7FaGeXqvURVpKN91ir9TGrLhynyFcqpvLJbQqX3JhMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7yyR9daA6BrLGq152xWtrULeQEVy6yM3BHZHF4C5zarBoz6Zu2njKLaZwSd5bRra9MW8MHUgFNNQTfwTbD5ku6",
  "key1": "2fmaE64eDzgwxrH8MGox3cxhwjx9tqMSqchbyXmosPeWLyaMC2z5sMFKqBUSZfinDYazwyNXtuP4urLddx1jV3nU",
  "key2": "2BpH4Ev1oRR8EKPZRv7KGbVmffNx212QmUsV9BnMnsKE4q4c27thtKiamoExTqnsKAUbVo79uW24p5c9Mnij6S7h",
  "key3": "5nKzFKx6Tv8zRjGi9BmHTLW2YhX9i4Lg8rteh4bd64BhEkLPt9QySH4ryryW5HNyoyyD6qYSQeP46yhwkHCqjwkf",
  "key4": "2iK1SLGELCjYcpZ6ytWNCtXKdS9RprPmnGn9Ztbd6FsuCZhvpDkzae3axeernd1UDqCrqmEPTBJp9LoAeVpnbV37",
  "key5": "4JWYUyUiKUa92sYCQZp9kXphjqU8EbGDM3AvB1oosQGiyNuPTXNZpRYQZDMcaHF2e3NHCtSA45FpJi4gCgPSa3ZH",
  "key6": "2BTsGgq7GBqPmbtUrBgxJA7arJWGQP3fBnJwfNrYMA5izZcQ8TZDsLQsLnghKgBU6cGGeibL4oWtUnet7FQRUe7L",
  "key7": "5JmRaefB2DauL7bFMJ54DCL3HpaNXWwXVa35h2MnS7caqTpLuvGKNSjp8jq8oBsfBfzPBYB5gmzhHpRrYA3kcX4u",
  "key8": "3DDGwoFUkmwcBCqtiTCZasggDBSFKgWqJardy2nntme4LvZirKvWv4yGvRPo4nLtzaRxu8wQZWZLPRVGUDrJWvD",
  "key9": "5vpeLhCgLFBkGNXknDLHfkv2ZWQeGdqeSFe3FUC4fxawxNYTb36RBJPRtxm1SxPFJGadmoCW1gTRzjQrAnwAe6cd",
  "key10": "2zqipfpfT6rgvw5QkgF2kYZk3JTJEqWELt3tnVNQJ694C2VscTCbLu4Gm4Py6e2crU2V7xDCGcdXYMoW7948gaYW",
  "key11": "2B8TRwJ5BvvweYUPrBMjUWW2yer2Sh6Gr62u7Fe3HCmy3T2XaakJwiVaxCN4m2WhdQ6GzoN9FAn4zvrczt7Rf2w9",
  "key12": "SmbynouEYWh52JpHAvHmkezqe2rfiJuRkCgQF6dgupxWuMKTXX1NP7y2mnK7g3PKiWwVUZoibmKRNbDuv5czQcG",
  "key13": "4ievp5mhd22jgW3qgu3fa9KHy4yD11PdaU9E1oPagjbEStUrhVReRhTh5Uy79kHm9VBsU5bwcg3pY9ZQSC885TYq",
  "key14": "4iQLo7UNJ8WYJXSi47zqHAL9pkP4bZP8mHY9L1karGHBtDP2Nwb3hqnKjxQwpd5LZDNEPgtNPHRnWF2oPcYWnbTk",
  "key15": "3AoNQNLF7T8sAZL65LtRFy8pQE4VMKzUbr2YW7Bo8rH6YKnb7SxCS7ocoKT2yAqRtGqhBQGdzuRW9NZzH4mnv44N",
  "key16": "4qptDK4HdQ2WpPMu9G6jcbNLNPS6Vaw6rGYzAfniMWJ4WfLQzYoNrJWMv7k3fvbTkFQEyWBmAxc1FFDM7qrjwoDh",
  "key17": "3vKXqB7vDzBKrjauJu8sgkCv1RjL54UeDyRKt4DfgobCytvAWYeb7CQJdEhDbWWPCQcePkyCVFirXcmPrTcAU3jz",
  "key18": "25dF6PP9rCRWp3sSLU4cY2ZUKFAC1G4wBbnbsGo7vkc8xKmGqBxKwEqhoCtxossYhYaZ6pPiYUqYqpJLTuiPRHER",
  "key19": "3rVWSWmjyDMspk6U9kvHSJkysQLbtnTWZYFCMG9L5X4XZdiJ6FZ5C86m8fy5xkGdfZq9hub6LCZ8MjabeWu1xJhG",
  "key20": "wfVdAZLtwHcUgkKUhkneuF7utkw3orMf6umybv3CYPzKJwNrdUVYkuvzSa3vzMJsBz7PsDGU8sUhbJFEP6aD5gx",
  "key21": "2QpyxxkeQfcr7tfS85wjT4ZDV8raDpqhHuWRGFfDMHP7gvReXutmNEXFfFYnVt8mWXdNxUcG1qfArwidz5tFbEGo",
  "key22": "3vik8ywVHWEAXt7vMMGTuPSoCH7u5Gwinkh44BWiTSFnEmy7p9ZUMn4h9Lbpc2ZUhaoridBVVdQKdX8fbAju67pU",
  "key23": "56ti1fjYkCXtMpUBbby6vxqhi3q3nZoZubiGQUAABVjH4Eix9gprX7jxCVLWgh77dyJjJx8RqCaGRSc8c7DTZb4X",
  "key24": "2eLpnfVww48Yq5hKTAtPdiuexxySmNX1z6Xc8XueZjUv25hout5qo8SRPNph8wJn4f3mwPcigrE9bprkfWnz7Tkm",
  "key25": "5aWoppcM6vHGWMDtsrxBTuuxnaS8tMrvsSMrUpBGaB4VmRJK17KFscLNmmSVPqvaNUcTp5op39fW1HdXbs3Q9TwC"
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
