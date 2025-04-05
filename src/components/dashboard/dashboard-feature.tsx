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
    "4SRCax8Rmno3NSzTnsFipBqaA6sx63E49sp2oUk7t1uy6bR2jAi6TvEReDDi1mgup27aCTKVFE9aLjFFzUi4ZQ6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22bg2EDEdzkujq1QEHnnw2ykhL4hYgWBbfBDKhiNuFQSTGRFdBA3DfgYzR4kKt9uWrZhzkVeeF3sdjefLQzFSP2K",
  "key1": "3hUZVmPzN9VhLJd7RY97dHAioVfsyAkagUCgXxBLYn9eTQ829cPFn3GJP4H7BVqWLpK4W1n48C5PnrcUdYQasbPV",
  "key2": "4KJDajuMpFpQ61ExvYgacLUhyNupjwdf4wHHjqVFJQHJvBPrVRz7TbDiXg2VvqPjdoGYEo7XE1z9DqUm1k4fiyNX",
  "key3": "5899vwvxxLpjADdSVTynLRoU8RStWvy3f4b24osoDUrnCDSwpF1UUsU438upDzN2XYHczWpLMFgswjDouJNqNQf",
  "key4": "31UAiXj9AXs3uS1WunfEiEdQXhjb7XjEpHGQecadmP5dY3bKNfVYaMj3kN9sWRoT25ejcvPKDPbkDaPtxrP7mz1D",
  "key5": "5dCcsv6YpDytcm4chciV7c87KaX28xF98G2pC2cpqz2aETPXJaLziyMwA63jp4N3kJDf1k9FpJ7FVP6tZeZBbXqJ",
  "key6": "3hvLu9oq6gHPfJZNMMsG1v8FE2qw4kHRuxSoccQweWUPeBdaYL9Jszssb9LdW8hq8T3Z1eit9ZYGZQFiZR4SC7be",
  "key7": "5MBbRBNXqD5fUfCoeQYUvMC4MD4Lh8d8pih4wbFg8ed3nRWjTuycbLU8NeUNbmFP98di5GLw4NGZuyLpTqat9yK3",
  "key8": "J8LKq4WjfT1gJ1o3xYvosQMVeVfNkLAKZofEYey5V3smgkeAB1HsK9DqHXPQY14C2es7JtmsN8X1MmyvG8x8fzJ",
  "key9": "kiePU4fst3jqzbkKGaLDGJkioW3jPG583DFJJBni2Cd3PJmFBUT7KvyKkiypvPSWfmG6GAg63z4fAyeRQZRSHfs",
  "key10": "3RYTbb37zLyS3zWYHTdG8qshsWPEKtxHe3YajNznoHxQupx5NKBiRp4ahorKEgfvz39a2SgXY7UHQ2DXyXxshDbz",
  "key11": "2zTByvogS2fo4hGxPeDvoam81YiWNnY7oz8oRa4az4GxDJSQhzUkKHxhpEFz2KLeLRderbupDoxUVNTKqtUqDTLP",
  "key12": "5kHD6SPNuNwugTZk8gkkdfkjoKNSKLUKe5q84r658iZ1C2D4UtnhgGqLDcuhegSsGfkGLNZtmEr7DUCafn6Ae7kg",
  "key13": "412ahfMiFZhPyDyjdLyc78vftPUwmu76QrcpC2uSbwHj6BwkfeG8sEegSzYH1r3P4riWXuXM1u2onjTQZWtSc6ww",
  "key14": "3A5q1VkG7JSd1wK4vxmisz4tPqAJL1HwMQ5nCNmBjXmHu6KLas5D5a5sWysZ29DYBQN2GBk8DhweYsHhGnYqSqe5",
  "key15": "d77NP8rsc18F9vrLPAMn1cF8z8yjQnVkLjxpjXKMEwqthtVQD6RaKCGV2z31XioJQ4mvw8rnbWrf3nxSmYm4JxN",
  "key16": "5TiZmCcg5EUjC5dEk6Xc2erbeaZTKHNDawsEtPVSTNwdcuvsu6bXuH6oxBXLm81zNcuf7YKP3GrTFSHcXaDw2iM4",
  "key17": "2k5xGTS2BuYYw79cNiAixGZpn2ovfaUyjBSySL1U5BHaXGTzgdT9gDZav137gFSi2BasiFMyWtwSNWLPzwK1G5Hh",
  "key18": "5wevLGBwBciJ81pAyYgrok2BAoj76sMxVzKmgBAE2L6hF3BVnigU3tmnaPW8JCSguLJNTR25us79XXkWCXtcEHMA",
  "key19": "2gRcNzgn4ckorGzbXMetFLVBBUCXRShcWoQX4Y4tGinEyLr8uL6EgVnBL3oVnnagr1b4wciDX3GHJLzVbQ3H33ej",
  "key20": "4R3LmL8B8Mo7TL1TFTYkCRkw6eSDWo6ENNXuy4r4pFaCsDCWz96bDSB7P5HtdHeY1HcWRy3fnjPnG92A6877mD7f",
  "key21": "4C56FLeHHY5q9NcsgSGLKLWYxaYykRHY4RmkhcLLvdmifY1pgToaBTfARBQbdTAYV5pR18UV2Hed9qy7DL16dHMU",
  "key22": "5fW2PcPPZMKdyQtrBLtKNaRdwV888Xyq67CSe8GEdDT8ZzKuvqHBDHYoBUpGkK7YXPDcZooLXsqcqjDMSfpqoqPM",
  "key23": "4VpTyzAEchh6yXfFreSvsCsxP1B2FtTzT193bvd7jZgiR9FHsvW32L4TKsMC2MZWrzGQvdpakvF1XP7zBr5CbjDp",
  "key24": "4KyoL3ieW417iHbz23G8VDipsbCrdYkwmZJs35R7dMca1rxxAJAnQU9E2a5bUZZxdqTEALgJHQ37ynnvYxgANwqC",
  "key25": "4rsKQtssEYtshjiRWaHB4Z3A7VfLFTA1kwnbGHM4DxfEBmSyBQtx8UwRcrZSbhcQuaUV19LJhqhm9jiz91tjmGee",
  "key26": "5putgRsUwZQbj7L2bLBTGgPcVGTaT7GVaiJvxfQdpdfBXcWT8X79ioVCjt5i54tj2RNuuR28y8Azzwd3SHVMWGew",
  "key27": "4cHHbhKL9JSETPMKL7stXAPeGHKyFwn6jrrR6qYAdLc9gJJ69KTqJ5SuwaBwj6DkHuy26dHFYZaJMwd1NcP1MECC",
  "key28": "5gnhQaBxJiNtmxwrrB43YQgqmCMRnEu5qrCHbejVcVyTSh3JZY4VKSGYTPrHrmtPd4QypLfso3hRFeEWB2iiZvKq",
  "key29": "4tTFN593NqQRWQJCSxvVJLjREiE2RmyPjuSN93v2GatPthuhvEoH26iqhpVhWuEhi5Zdizj7H4CnAFquEyPGWuhm",
  "key30": "3MKmpejXuZdtAEZTXH6RWptuFJpvUritQxmjxugsrHkHDLvkpkZcmDu52kDouYYdNc4WKhYymviAcnhWZ5zZ3BM4",
  "key31": "56bFZvX48Z66NMAKZMBYk9oUm37HrTZ9ZRmfEG5T8As4LyosB69w6max3c4zB8XbExPgAP7rHRpSRmDJVPXzBPJn",
  "key32": "4q3daPppKgGpFibTPLiFhUUWMwiS5qtFeQ4igjZzXyQFzDV3KBWN5REwNVD3UV1kBg2DJyBgFYRQ6MWwxeX2qFg3",
  "key33": "5DKgE9LxBGuVP3FYXRHM24t4Y9aanu8qYYtpN8iXhL16x7pur3XoVmu7adT1TyThAtHXkk4vccjrHZ24r3Mqeqek",
  "key34": "2cfojBy6ehg67kRtqiNaXDMMaVijvbFUmd9kLRMv88CS97q5uiKfMt2GcfDUw7j5RefM2sRTXNg4AiS2t8PJSfr4",
  "key35": "5GikE4AEgjMWSPsZNqHnnK2KPKnfTJAUZmP3km5KJJeHFVJwk8GvkhjUeX7Ah3Zt8FjDzwdhWuLXZSxNyxD5guxd",
  "key36": "3RzNyggQnptkLEzPrwMD8jLSEemqDFejYbzRJwj64nYto2xf2ccQ736yS9TZ13XWyhCqcPHXigVxkDRMDqY4Dgjs",
  "key37": "4dBYFQxMSGXihHHYNGwCuhA5msPBZc7ArwHT7kFZT4kauEutsH6gfQpLBjwpsKUHcNvWiqKkGRBDUbV4nnk5ySLa",
  "key38": "34mNucyVcZsuXnbAXfmdB471g15fMKZFRRnsbPAfMSP24vPBsowh57Vz8XASGpcbhKxNQNtcnacvChn1Y7btvpAV",
  "key39": "416NQkyVwDRZa7vYBad8tHqN8uav4muZy9pmwyxDJtWYTpBescrfTdHagmyFoTQW3Ka8ATB7xUbqALHFZUbKpNjU",
  "key40": "AKMGZHskNd7QNUY9umk52VmxJHm5oztFziA6EMeFtS7Fkwfzf6pP2cEtD2XrbnDPfPXyBpXXdTzxLivgXDEbJKg",
  "key41": "4AxGSRstcDvntceW3ra2a2ezzaJ65k8eebdo7NV2zPNJe6tZnTLyjiUFkAN4qGMDzBwBuxrzcXdBykVEK8hG883E",
  "key42": "2nAxr7khnxMwevVHGiBxnqxuAD9uTxrXsd99vKFT98yLAKW7BB7GxbQ9iPnAGAyQW46huG7EiAafvjLzcHiNvpH1",
  "key43": "2Z7rJJF8tGRPGQxBCu9UPLRvZ7aqz7SB4JzRopSNuKpFriMTxfAacKTTuiS5QWmEsvMmvwKJV7HuAZBaHQrFZdQY",
  "key44": "5zz8fQjBYe4dHT7y6SNQvGXiY5h5ceqWL2cTAWviSTYq2ToibvQXaEy9jH6bR2jj6QJWCNa9yBvCm99DaThf9P1k",
  "key45": "3AhdYHPjkpm7VRKibEkw8e842KhA6sN2S1sG9Sf9odeDAzqw2tT4uA9RJtPqZ6Pqf2NNnru25RUwKnn5vCkfFP99",
  "key46": "5Qm9fxRg3sqo6a7CcNpdpCKQAbheTjtZRhQPkhjk2Fft9aJxkfT2Jx6o5sXAUJNbo72hund4QWD2HKNbs1YyVKiG"
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
