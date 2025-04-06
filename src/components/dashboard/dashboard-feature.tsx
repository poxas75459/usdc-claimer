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
    "2CV3PW3owkKBoq8pSqZTndvdkvquouVWu8ySbuZcU1AQyTuPTFiWgUJeonQSQU1EtB9vLjZnTYpRLcUiGkA2MJe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oR4qQwRRsepaoGMnveyXTkHuJpMtPQPs6yppkXK58YsgxLaPy3q9HDZZtnYGhufZMPtztj7qPH551FLiXEeDTCJ",
  "key1": "3b26jK9sCD2gvwrkd4qXsTAvF7gazrwN6FCRP8AdATLLwdBD4qijeRvT9Lrs61Y9fkSjawSaau7GfFYzXomkPxAg",
  "key2": "Gf6YRaWXLrUzmHGENg1nWvhtEJDoz8QaWc6czBxwjvnLTyvi6vKN8U1xLrMFvqXi1pMnG6tfxinJWEj7ovnPTzT",
  "key3": "m7wkgq3LkXt8bjnTWfBKMN6ansjMbQ1kTVS3ywF9LbB7GFp61fEBexStmukTfCj5giJoYKviShVdv2ANLRVgu1U",
  "key4": "4eEQQrAd9E2s6afLV354U61nAqp7pJJN1sQUdHrtYpGnJHNrYA3oQYT8jAK3Ko9cADHZQcGFX8UCLPwyS59yZ9mp",
  "key5": "MaAvZQBrrsXfbwCJGjk6jxeZ5t7Q1Fb9ZGjZ1LgioCDNaqwnE4f9Y5Uc6TiybhKA6CBdjPfCDa8x61dJzrfonzE",
  "key6": "65g1XJpY5HeKrk914W5TjRKWWUnnNSnGRwFf1dqrQ2Ysc9q1s98r2X7buHMvme4i7RbEntr45DnwWEYLjvRN9P8K",
  "key7": "3iT6QMeoeGESaCBcKFGMK6XGCY5KJ7Pow27RgGzWT4rRFDn6wJcgWS1UqSrvAGbH9W8XqhVH2RXji4yWuEzXAr6W",
  "key8": "5PyHjxp2RriFhEYCpi91D83V1rCwTDAwtksn7bAkhjRYopF8w1bbNVuZ6hSezs39v8yH8HC7m1MxdKcZWGXLu3os",
  "key9": "5YcwCb4o8geL9eRxMYYp5aCzEu1ZTJv3gC4KejuDWze1JTTbr3efZSufJqPSFnmj7FHM632tEwfZCCQiqjEtDrkA",
  "key10": "3Fg2CQQ8gRaEokXa8jvjVkaiaygxtYNmQ2SFtfuXLTHJNCq89KpMbmUGBk1fBmo3NPm6paAYSHnhAVVVJvKyEP2u",
  "key11": "TV2rXxaDThASpr4ogcmZxSvSh6k5chYk9wywgQYbgfmi321pzyAAuCuDPXebG9wAsKNvre4q7p1jLjHw5GnDgF2",
  "key12": "4zAxLpaitf8DTLjbVcJpLiPMVZ7d1GRDp4opnf6uRntRHCrxTdtq2FZm1hro9acKt4TsgywfdBGyv9RDH2tKkSoB",
  "key13": "3dguxUueLGeJYY7mp6SNqty5eXWLQRyyavQC8qwo8baZVR4uhGbNtqxXsnaAzC5UssCPyjBqbjAzYPmU4JwtgTZy",
  "key14": "3osWFySL8GP5u64ppqWw6nK8VqTH4eB4sio9a8imfcmQ669KPrMUKjN22SZBu1VK637k6RSpnk3dQMDBuTZXBJ61",
  "key15": "5Vq1da9p9BpLeoNQtzn1dBw5n2Z9pqE6EPb3XNqSBp8E4rN1xsR7622RGkkChFyAMvCLa1wVaorZZfu3FGHLM8Wk",
  "key16": "2Hf1mgQfCsJHS83fuMUbBgSLD2DHZqu2eDjBqvc1TbgGiasBwo2UWtbrEPKeqBXf9ob4r2MYVuUsQquEJp2BgsQm",
  "key17": "3nn6Hi2yh3VXLsc4xqQ8EoZFDCnU8ykQZD9b6p1vK7xXZEdDdkkakNgtQkTfWs9BqJKGxpQWiGvcA4YNpzYnN6dH",
  "key18": "2Y14M2og2WzTKAmfGiDYNbbaFrGYfFbpp7C7RkAKxprJtsjFgiiSbxo1UTNGNCX5R3GbuqCt2WDJCnxUi2npXszX",
  "key19": "3jCRTjeRQ7Xr21LkEUqMcRn5kcNidaWbtF7ioxLk3Z3SD75f7MLiwkp3u51o24oYLEdNAgLuPKMUKPQyDRqEsX3P",
  "key20": "5Ng6Xc7sy8fr4ncTZrkzJavWsAbfygnRtkEL8bE2owbaVEVrjzeAVwxDrhfshDJ8zP4jEupKkjebJvzGRfzPbMh9",
  "key21": "8b8YXTNGYbsLEvbYeyRG3JMTMztrXriBRccv8RSxsG6GfwcqpTPn2MtfV8y6P7UP2j9phL8n1kPyF88EVkJ5vqa",
  "key22": "3cQc54qZcuPB4kbAvmBCT3vaBS5oD1j6WuEkyuhBPNprQsxfQJMTCrBoGTSi1kTzbiwpj5F3m33wMFvujYTDEeXE",
  "key23": "sVAPskwzX9uCbUcuf7DKhuCepCE2SVG6bzqzjcXMnngn9RRRJS7zy8Ytb4BxJVEpKzb78sawPTXizjSMVApVoVH",
  "key24": "FKpqX5MpK3QgxDs3Uvmc4nCDYmYoqjVGHmn5vnU2HNreqJJ6bm4DeLf1qfFiKtfg51Xy56zgKUaQiSFY1gRW9xZ",
  "key25": "46WLTGFNfNKtUuyzy9yoaeE2rS7F9RmrHfQc9hxRx9JkAjLnBLU7mVfKvmVXSsDix6o5Xzc77tEG6yvUKBy9qhpJ",
  "key26": "3yD9PTdoDjAjNmFodVuUj1bYsr2DkeDQGxDou2NVpFERccQiKcUQ3qEGjUFxsT8y6bqJbnhfMnFWUTtairKnsY8p",
  "key27": "VfqikAKMBrkApPuTv9hMnKJKMTV3zG4jBu5U8cmw4pxRm5jANxcX42Bzuo7xaaYwJA2rMXdoc43frACMWkhjmvC",
  "key28": "2MXmKGWBBBCGkrRLd3fvFD5HFuSng99YRgfpWCiy5vEXrPmyPJbfWTP6ucACgz747DM1NmoLVrMZDQTQPYTNh65w",
  "key29": "QbM5TyyEhDuK9ZpFCnWtNjabzKT9MTvfqtFmodVDY8J6SEF57DhLEFweyNcJLxz3GNVLZtCtrCa3AFu4h6fUCfD",
  "key30": "4LYP6bNXRSAnMJkM5kzVzTGeHX13ZrHKALW4yed9aofcwvpKEQqyKo5T4xPna1zJjUEAUKjM3ErTiAwAuQ8HGp6U",
  "key31": "2mB7CqDX5VbpNj64dZzcqqv2Zcgo2YyYVRMHVwoEYCESCAMGhY9Z9yLTPzoaCPz4JtMHQm8TEsvjkDRyM4MofXwA",
  "key32": "4is5duKua2QFVkyGnrvv57y1wrBi1CiQixVRyUDgZjSijegoNLAH9UV8YAmEnCj4q31uGSdDRCHcJUNtk6xVqx4F",
  "key33": "2wrRYgPmHyniHFfcDsEbmh3LXCzQX35C2HcBhpWf1vJroXqiZfLrUziRupexvD6ZyLak5DjyaGQ7GejTxprp5L5T",
  "key34": "334Djjc4Ur3dcmDSENRwZnSkq1szfsM8ZWSAH4ZdLLF13zwVVWVmr2HZkpY8R6fE41LTsDchUpDuTCLUARbzFCeU",
  "key35": "33NkBTvSQDfC9tkWNJoueFkdQFdipDby4kj7ZWj2o2Jq4bLQpz2wpxjutYDCRBQCknzGqR4U18gCRiC8fKtBdfPy",
  "key36": "2DTXYoev9MJk8giVc3gho6M894evXXJQ5bwJGa3F9EXyLjjw8ioHkkCwpwuKydbNc8CDPq5XTPvb9vXA4R11URF",
  "key37": "XTMGhvRvhdqUvCdgLczWoyZRnC4KHPvr9XuSMrr876aDy5PYx5VP3PZtmcVqATNjAySogzxJa4daCCTD3hVdkim",
  "key38": "4WCK1o3Aa3tzhrVaZZQkduy4XJxX9bFLiB4BCe2RUUhLwqwgagtS6s5L9XhuWmFMLyxpDnpaQ63LjfoAFsc1zfdc",
  "key39": "4HmsrwEZePQyHTmzckyzENq98wHRxGkzYcVeY5xUAzqWQzi22sSmL3RaQQ9vzKNnRT83eS5GnheFYucCiAHGtfFu"
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
