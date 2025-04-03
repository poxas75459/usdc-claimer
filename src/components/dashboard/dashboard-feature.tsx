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
    "5mQc1U2bcWfFGSccWTpiZyP5PUrwAtS3Wn7WRqwyA4YEBrSN2GredAdtkxyYU43txt3PFjhD3u8f1vitJYHngrw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61J8DoCMX5YjDtFpS1D78TVATQmAJH6eYgiMYW5AkGsZb95GrA19DjoW6uCTiiZQywUSUExqZbZVwG1WRjYkqmkq",
  "key1": "29NYTqdiAa4BeGa4wCd8JpFu5NYRpx4bSq7qDmx9cob1UAPVrLeNAqBhWD9nt7FV95NZ5e7KUaZrYhViYiN1gwN7",
  "key2": "3cicDktMVfZk8dMnyZoGQFTffF7ZqqN1qobdhXVjjmRYsoCDeuUXpjLFPALVvhsHyr3E6cLaBnfMaXW4khpLkZxu",
  "key3": "CuPDK3KhbCSYzQtYAbDtBvuQkakFb9EM3RWaVwqf284jE1Zc9xuiyAPLeXqCdxC8P796CQjEABp48ok41J5F3pt",
  "key4": "3ubGMmpCtHVwnK9R45Gq73g5w2hspWJPExuB7juby3e9mgNf7D7dtCPtp5vk1vxC8rrQ1NhSACYpVJ9S8DZRTaAn",
  "key5": "jNNdwRFPp9QZVQ9azJn2FjTYgtwAt2y7NqWA1cZz6zoribFokyBESy3oDnydDdvTphuSSR4pE91x3Nif51peYfL",
  "key6": "2T9ypGjBWfuMmbRYDLkUpXJArkXdQzi9TTQUu1efv29D1vqxEfbEufv5fM1QsaHfxw4yJ2FW7pPMWTEWNXwVsvQE",
  "key7": "5BhFyQxoFadNwmspRh9RUur7dusi9NK68zUynk5U7LfUHh1ST1BQWXSWyFKvkDCk2sEEhTngUDscpBpSdHEtFTFd",
  "key8": "5kktmiMfjMVcrAVoCgy7q9Y2SDBZvDdGeS3KvG9JBRE41ZNRsZxss7GbwXfMd2iqqj5UpGW8FseupQ4NRWuc5szE",
  "key9": "2QvjvYCjyhNtsZ2rLeHKW6579MM5FZV1phXfYGwDv31UDcyHSJ9CNbUu4A2wpoBiGJJAVv2ytSdKe7UpQxANJDyo",
  "key10": "4r56sw6ukDkZ2Q8ZmCqtoGjmwz5EY1i3WbsR87jzQAsN1SPKoYDvVq8ELkxWbTWVJ7zLWG2Ke66Nveqe2BopqR5h",
  "key11": "5eaBrGG7MU929k6J59RZNXHQegDkehr13161dxjrRDxow1TZk6XjmuWQtWPVUo2MthGa8ZjY1CbkkuLDkkj1111J",
  "key12": "kiJMoefdu6PkAhSKTYXmXUce7zEjU661vU1oyGEZzUS7TDawHYZ2pzWUavTxBSatcrCGzoCV1XzuwBCaD5VrYTE",
  "key13": "42A4v6ZV9RjnH9t1HFtd44ddYkT4EhtLE44Tm8MLgZVNmN6G3MwvYnekUyW1azgS67sk5iEdazh8uKHB5EdkBBK3",
  "key14": "3foC4fk3Hs1a78caFs6qks8NJ8n8yvTf4N3P6yLPoeKEx41mxs784X2XWRS2r8gsUHVZbEua34uqKg6tPUqwU7vr",
  "key15": "3qcvPxJDKhW3UFAZv5djuoG3YWbBfupd3S9Gs7tZVFgD9iMHQg5NYpNFKUyU6u3JyBWoYz2f6TsfZZYYPVnbCfpe",
  "key16": "56YZLdQtM61gHA9JVSg751xfoHGuaVejchcWL5KgVsLNCrrJPHFUCXDHJPtDxCMxgDLjy3eu6vnTwipZhV6HVXQx",
  "key17": "5FBeBZH9XL7RuvBiBZenXQJaqeXgNtE6jnjnGKmRGPLQfqMEEaesKsRQP4BxnKiR4wP4fJnXht6kkQD87W2SYHEb",
  "key18": "uXdS9Aej48oSnzuA5q8M7EUxGFg2tBYoeSb1BVrwUjM7X7N4fBD7YHPr3tHhoCeARz9wF47DTEbppGida7Ma9aW",
  "key19": "4zsvjmi6UrfGsveM4HNNPWh2VR39NqHPLxviSX8S3AutqpxC585mxWXBBuGASfLaJxLpbpJcqx2KQjq6AitiSauw",
  "key20": "2ALJbxEGWD1iAxDWHvFP3E3DdwtXYoi9n2iBWgva6cwRRQQF4WyEt82vkwPFru14do1Fz2DtQ899ZFzd15ETXnuC",
  "key21": "3J5BmDB1L88HTFy2bsmUenDUo1R7keHNZzR8tYDdX8KHqacQxvm83x1m5ebdMPFMrkRh9p9XBGAjwcN4pf1TCoRx",
  "key22": "5awpaVUcEEVNYEadew9HDYXJGytAZm8ZXHa8eSnJHzKD4D7ZPQM2ffSP94xRHNob8fHZdhtTuAGdTEiYfHW3hhfc",
  "key23": "66Axz1wxxXaz65HX7ne9RFVfGv72hGjSgkhQjKsAxpxbEvz2tKWC8q7n6CNWMCh8SZEAYW9BHLuagkiY3JAUkwXy",
  "key24": "4oL2AJUu4nfjRpMh3Vbv5GChHioRPFW1szFogDSf6j5tkXVAbtMoBTVVsbVFJMXpE8ybd3NwFpSryfSSmhLP6xyF",
  "key25": "3J1C4MC42DkTBhYAxpGMAs4pagVT6TCAMsRFRfkUCtwBz6WW8PdC8K7nkdUV94kvbNMJVHxkxrKhTuAv22bWrqf8",
  "key26": "4CexQthK9hf6VegyGnDH8JVQeLRaxfYztxYtR9jLbU51x7Smt9MHVvoUU6YEkMiW5Mu3Gx8yWwuWq53oVo9taXwp",
  "key27": "64Rq9TjZVxJCb8W5zvgQNyFZAfVSogPJ7t1MAkxZEaT7NsxpbyS4UJjMiRVTmaSA2iQXkzpQotqEMVNs9D9DNRNj"
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
