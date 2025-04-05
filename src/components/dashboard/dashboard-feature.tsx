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
    "3nnUQcD2iiTVpbUy27fTuLZFhsee2yVbjZqataSSu6fZRim3EEBWhs1ALxTyo4qWWcNUnT6fLuE8cj8h5FnFzj4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UjfHTxy2k7jqXXLBHJMQkJwS2TbUotKBMW1ro9WYeksWC2v2VSU7QqihrDSvGFsRRBJq6NxNRX2gYgrkEc7cKHE",
  "key1": "2N3VkCNNUWqDEWRx76FzQAVKNTjNkmmkQr7ZQWqV9LAmQmdtbyhXu6D4CJghZRUDWN6AE4VNtEZKJLKF7hhM2whx",
  "key2": "48n52KXGSifXG97KPkwAdY26e3YMdZKxHGJyNTZ8wKv7ZSmbqRroFgHu3mgatgDGFthyDU7mp7c1ojkrgNXnV5cv",
  "key3": "2eAij2wsZedEakKsDFazGK5BRtBRQmuC5vYSPRC3CYrgtoM6JCsk7FBVWTY5RuvUsMNKDEj9GaLmFRqjYjHWxMTY",
  "key4": "23RqR3REQZuGzFho793TxjkuX9CBu6P3bwH7zKjFwzfxLAGXN9crdqZbGF7K1mPHLXWx6WfJ6T1uZJFLcj55eWrz",
  "key5": "3rPyEbQp8rHeGehZURUHjwb6RbNpCECTWA7WyZ4BSNZQgWvvHF2XcgS9GAPxz3h4zx43zTQiPTvbUTtsfEM8iM6g",
  "key6": "4sQrBpQtV1hTkuntTf5h5zsmfYdsn9PaTA2JrC66UQiyGMvYASLpo3fEg1Ji6FLsssLNRaoYci81rfCzVCWzbxbw",
  "key7": "3dYkExFdmtr5Mowk1UGmB1SPprfzA5p9Wb9ab4LwoaRxMni4sWt1e29sYmD3seAG5S2xHGmFAkgpSuspByDpTezY",
  "key8": "4UzVc2wXtMiyosG2Q8LPCam1JN38FsB5A2e9NSfwn3XGA4ufcUSfin7nk7PJLR6znbWFSmt8zMiqVzs6QftyEujs",
  "key9": "5x2BKYJ3RtSmQQyWAgsWTJFCuHRgWgorTKcHxrYEGzYtGBdJY69DS5nKuvom7J9Usd6zz6kQcCYMHRNXFe26Berj",
  "key10": "BvqFJXFspydc7Ubeg5tSTf5Xx4ANKCqSM7jFBc1dcvijjYr7jjjT4GsxZTA2bn7vtoBiNkbJbYuVJ3Dpzfz5tQp",
  "key11": "56BBxYncftPzXQ7ZDyfN9ZPVa1za83m5JfUpz5Mz8Z5t1XAQ15faqM7v3j7bGMFF32wWrBK2YseZM5aQe4oWbP3F",
  "key12": "2QAag9MtjeHwXefLHSh1zbJdBMVT4D2nnhyk5itigb2rWwPTPN5HRzeBMJ74CDoZYo8TxWHRke5oMnF1hEftwDzb",
  "key13": "7jBkRbCXJg9tS3bHrNsiJScQENjwwNYtaenQkFbGZfPPskvk25WTAbcPmxGeoYVCRUfnnGVytKECcmGiRGernLy",
  "key14": "43NMoBzoEQ6AwJ64LgVShL7YnXERY98gXSUDP3H2CA2sdS2dmmC6BcXGczvGKYmbtDH91JRj5GqhFcmaKnawLnGj",
  "key15": "5VxRsVy2jdyRbKnGZs2KXbvB1jcMGuLzp33wJDGuS6Lwvrbi4z9pqaq7zaJmsM3hEBwGUT86hvekiMtuoGqPveZM",
  "key16": "mDGR1dvkXoRksQ1YcrBS1FwhSXd6qFfpotYs3FZyo4hJYnLvoCdirA7qhg5eC4SUN9CEvZUV4wwDnYYeW3MEzTs",
  "key17": "2AK88J5ezCNX9c91vdFHqW8Be7kUYcJR83gJ1MgUkPqpPsiFZChDrnbt7qx7soYNiQExqEAGrLqGbaKfWPXuCPwy",
  "key18": "4WY8LFaNg8pmHcs8o6C8K3ku2RAiaSbzVVEqZwvfm5LviMvK4s175SEQhjhiJ1AzoM4vrarB9f9AzGZNrE9UvPZU",
  "key19": "5pUSQozddpvAqikEvEALvWkcbX4dhFL5vXTwNAL6k8TswGoxZafx73F5FMLsFUvGokVibEUnUgqaS492JQDtE2Gy",
  "key20": "4rtcUKBPBZJc6rergNB1JLsu9HwGreqS7EHr6G9HuCgc1aSP4p6sdnrPmWaNpSVtD8piCbymfassu4wvS3BgUotC",
  "key21": "5TdGaHbhvKGicUgYJeHmKVRX9KLBntnAuG1q6wjPdRZcvvNe4Hc9wdsheKtVLX3iGbU6644CK8ryn99c3aaWtxRi",
  "key22": "4itLu7yHH47N3e4GSKS4dGVtuMt8arzt5j6GkDWuNcT6mBV68KNdd8hyxsnX8kNGh5GnfcxZE12scwpUt96ba79G",
  "key23": "4tK5b1BTgiFA5s1ZxwL9wktp4JCVh7onkP9SmTwqKbrbZFjcwJBHsjANUkH2Z2b8M3aAhUrrWj4mcezHVFMwZSwX",
  "key24": "5qvGhucTat98Ws4diLSYQpH7o2P2wFgdCRE44QyAhVbNyCRmcEXHNTcZYgTjPY5VxWV4isuiKm2qGkUGq8etAf3H",
  "key25": "5h8bjyWpVwAPzSWhztLp5ncN29RQGF5aEkNGV7FKpA5nvP58YT6bYSBC6wQD137Xcws5amftH7gBfXKYG7B4umih",
  "key26": "3jaV3uPXRpJmTaGUiivK621mE4XA8ox1WxAmgJV86JW1buuYXzMnJJixTaZ4aYKDxKENMpyv1tzjRaMQ4eBc6Bqo",
  "key27": "2N1fmMNyqpsZkh6wgGeCLS13Pc5jEvG1XhEnUUjP9fNvmoYy6sL6Y8H8DvshB1pxJXA3reQmG727VqFfZhN1x77o",
  "key28": "41QphxXVz19CyEVmfXtAgyQdJJx6D3ajRbxwBd8HW96Z7d149gTj1JUHHuZLQ4GoVBsHZ2zsejREwH1VKVwqEVdm",
  "key29": "4CyopvtN1d2kjWnTK7fuMjfNpvEDpNTkHT4dY2W9rqmM4VdaSsQRYkK3XwFsZ4zGFmBcXzAYuGqoDMBoQpL19hhd",
  "key30": "52a4Zf9eKvN7fJGshWuzD4TmcQcfaJTmxrEFhbWgFiMv64nRsGq5uXDLv19Z1sPHWzy7Aza8ZfKuaiHqsZ6JY8D6"
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
