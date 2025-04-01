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
    "4TyLW8a1X4dYrRQBptnpSvx8twhQAsagRQiVEZn5eH2aU26ABAZ4pjCjDRam7DckzVjJBXCn5vTLfvkM4Wn9NC9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7C5P5tjNHtsupzaCqmNpThzaBap45apb7TgTMAh8S2K2X1F8iyHxWEsZ4W1XHYsy5fWMYrhGabUbFeCASRABwe",
  "key1": "4v1fDGdzEZvXJYgE3jdizcyZmZTVpxgdctvMQa2VZ8Z9knNGCR9PSVBQojLcSVZAN6EDNvnL2SE9eqZGnZFmhepu",
  "key2": "5EVmkEvo7BmQawgWR8csmip1RHBHVhCPVrDqsxqdcM85WssoMLz3aaS3RZ9Fnd22JmZ3VjUR2uUnEJ8MEaFi1frK",
  "key3": "3WooXmzrxaBpPjqsVkXjeTG2umNyq13JcWtFYyQvPJqG4v4eMyyypiYz3Y5ZC2hgm48aqQCQGqysxE7FbxcAav46",
  "key4": "394iXerh123nGPFgkyPMtAdij9e2fL6Y9GfmmaQpvt18226F2nA2aXyQkvQxn7ziknXKpNbrpuutSXBtqggF7rdH",
  "key5": "4jgLhr6MHwdJcXRFLF4oQLxYoQuFykQnpPe534NcSHwB3c5kKonHLrpEduE8UCoYwqEb4gAV7C1sJ8jMvLRr4MFy",
  "key6": "4X9mXZFF6mMDXAQiZvWHenJp3Hp1Z7bUEpKw4CfU63QAkEhY77oq6H46Apg5SbiQNeyHHdo2qMcbbVHYK6ThyUK5",
  "key7": "5HPpVrkPATZoKU8a6yTSzem57VvbtP6YgnpQtB5NqphzA1tk8NoMcVbPFgyLH8aZbMXCM9Qk98Tnpp18MdBCPLwc",
  "key8": "3WNwaJboz6yie23SXVsu64roLgUco1VY7o1JXtztCTAqE2FyRA6TW2PK6d4PXWu2nxQYyy1Vw46NSfDoyKWKsVu6",
  "key9": "2n647Lbnvxf9kMXDXstZsW1Z5pE9jxRUdgPzhKdts1y9UdWCx8gXgqnG69qeCjDC6Dp3qy8w5qLCnJPh17v1itLE",
  "key10": "5ikpJxbmqyW4UxbWrjVmuQtFbsdZdJ5siVByYpBwSjz1jGev67j8hUibcE7peuw3xEJ1Tr7ys1JqhzYTFB3GpmRN",
  "key11": "2PwVmJT83zxPgAjKtWj7WJbHZryBCnHhP6Tgr6FgKUNs74gyooUKCdQpqpdHexJmeDhmeNCfvK1kATJBWLMUq1uT",
  "key12": "4DaD29gLgVE7cuHKFx3emE4KLq2qn8qY13hcLdUGxkbR5HNQjri4Bi3He41P88FcYwQ2tZwbETJJuj26nb7YKzTP",
  "key13": "3cvHqZtRx7YwFBLf2DcjqhuxkzjnmEofT5WVoRbydFERNNq5ik5YGiNQhe6ABoSS8k9oQfo59sZ3V8emUe8gkCcS",
  "key14": "5iWGy7MFJrWNvLhT1ifEwNSutN3Fw2vMusxuArWfKYgYRoTmQYPWGVQ4D7jAj5vRXmpVwSVyN3XjDCbLSNYfojNj",
  "key15": "5xMiMCkkKRYhubeTsr5YsN7gkDXHY8bEEjXDZcohtEsALMaKwvWdEqvayggjzZ2n2cmuV3XaVZaqiHu1HT5Eb85a",
  "key16": "3fq7Hcw7seNTNKq7AxuvP9QUHBps5WwZtFqUWjJT6HdrfYqfyD451jm6yX4be7sczNuYT4hKkbUZGLNz7MrNzuj4",
  "key17": "4zRUQtibaoTh1mvxpusHkfTmcqQPJgPJkUb1ye2Z6XPwEYJ9EwuexNYRj5kEZMhQq21KuquvD8AaadgD47L1opfr",
  "key18": "61nb2Y7PpQLgDpAADpezqhViyRGhAsFhVJg9mAr8mgKCxaKDY4J65fhmi4Ux3TRAhCegVRyvjEYDhtgkw7Zjae1q",
  "key19": "t4GAAi2cj2Y5S5xyDnEhjVC262n7pabodNcDuzyyivUKzCy55eBYpTXzm7qhYt4D5kQ2CJAYsEsmu5xptWhsEv8",
  "key20": "3Z6pK1BjSuqVSeg8axDBfPXrRtuonVnqioNwMCNazadWeVoDVoV43xg6PbkqXKB3ow6wiVHbRyBG4kU229j7vX1S",
  "key21": "3Dm2qHJKTeCM1EBuhzYDXR8Tj6xQf1aHeWTVrd9TtsprFqxhAThZfQST3WHjqpeTFJLkLwwGD2Rz2epZxCMApa5a",
  "key22": "3oNELQuyixz4Ap8uGLZWgbewZvQMJLa5SQgZu2oZ451q3VwXN86Ch44VoCvggw2Y8g5D3SghEogiwTK714Hf9d1C",
  "key23": "3JnCBBoosC7AEB7ptRVjNGbgYKMmTi46wf2QiyohdBPkUfUNHNt9igFhXwcM5ZeqKEUkjzXYi9HuKqfvszVrrciE",
  "key24": "3WTT7UyyKP3Yh8fe4UKhzZENAaxQhpQUYudAV691TY74wh1LJkKWmg4DKQCJ9KxDsetyaYCJStTjyZmn57Behkk6",
  "key25": "RxfXovbhyLmsSnRLAMTU65eU74bQfp3xafEGZBP9iPC9jwVFHDvgN1xx9ukHPNMKfi8UzU5hUga22S2pmQa8iwd",
  "key26": "34V3FP25h4u8CLpvsRYLLyXTqCvpK3AonJfrEeT3yFTiCpDefk9rhWEm5mkWG6cPMKoRyzNSSuwi9CaUmzaLcU1D",
  "key27": "4XrZZa2qnDvvpmpo8Fw85VpsK2q4ke5xnPNSzbMXBudwW274NuVL9VbM7QRonp4qn8vpfJgmGPEJaBUvfghJGm8n",
  "key28": "2XcUNNZfknHTGC3qwM1zberQXNCEiyMUiw177KC4c1TyxeEwXKgHJkzj9h6U1Z6eHyH9uwS55X63Yp1wuaJ5jDWN",
  "key29": "2d8KmgEB5fstuNCPj7joKevN78DjqRN2hoYYLPEVuBwioVNNT5ZuyQzfZKPiqYHtguxcHGaDoXeN4TnPfAqv2Bk5",
  "key30": "4qQtka6VwFxTpBKN7p2fjAJZNAHmQjnkSyKxPGjPJojgBWNwL6iRCZjXcn6resjt39fESGcnnxZ6pkjCYsqd9Da9",
  "key31": "4jR3fAMUaWdwK4pvjP4yqL6HNCfkimouEFHqL8srB6rxnW3VhuBhwJexvWMtwxd8qWrc1mLFfGG1Py2kZx42DjyM",
  "key32": "37SEeG5q3aEDPb7wd4dRpyv8NFrXcBdZAHqLsKpcF5ZgHt3nyzTMMMES1xP9q2SHquaCK9wS3FMM6TT8gH1gtMYa",
  "key33": "3HhM9KBCjqudaA8v2r5ry4n3rxPiX5RsEasTHzfQfCJ2RmDRn68n6FQRiKXmMcCxEdFF4VjuGUxSnX7o3TJt5NAU",
  "key34": "4t3Q5qvT6isEAXv5WCgXFvrCyHM1pQJS6HtGmwvPmUipaMvgiAwbgHdCBKX83VN1KmdL8VDkLmqHXK2GJbxpDAea",
  "key35": "W9efNjGSZEguMWqVqWnC5KhjD9x4L7ZxQWHmNN6hn64pfs7eyhT5peHFPxAS5cXW7PSQwZwu83RqxmdMjgW7dwZ",
  "key36": "4jiruABaj755GKbaMD2n7sT8SJ8HNn3Fxek5jJDb4vKHkfv6gGMqQAwqFSAPyHjXTGtS2sX3jdoGDUWvK1ssi61k",
  "key37": "AiifPgD3BBQ677AYjEx64RBaYUggWZEwp86pBiAVtLTEGevKSGaAtAZMAPx64e8qWkYpejmCkKhJSSmXhTkUXcF",
  "key38": "2fgXXNLBXKoPCt3tWaS8HVRzBLb5BwhmvQr8HyJHQ7fF1mPZDCorwvJThEKGS8fzqg8zc5EFZ3eikvLzjntjvPtE"
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
