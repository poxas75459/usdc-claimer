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
    "4VVMwg1PDsKoGxJhMrrVXjRgp376SZ6Mt93KrMSSe9hnJUFPAFnjUfbKdvrrRPpMn8ety6c42btwVyAeh7wXPhik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oUxFB9XcYmv9P3mNxCLWWTimvgRcCD78o3SqCiSNL9XDSWUUJmYgWMkXrS4reTJDmQfS1g6vbfETAsNr4KBhQM",
  "key1": "27hzBbXswHejSz311tstZMPmy6CSnT69w8zoah2P8j2xkPdYyvMVyeUH7CZsPvn9gJEViapeMMZeCoqpJMeLUntP",
  "key2": "2xR4ikXPTWABrm8cynnC9aXRQQTG25TePcSDftfQvThcNbWEPE4AsbLKPYwhTsVeuzzhzt2LtrXtpwCjw6F1J6vQ",
  "key3": "5ySoqoGi4oaQXWQ1BYYAX55SnRSH3f4Rh21VkqtihwG9izrEvtto2NAfMvsmxAscHsqES8rz1azAakcUTByAYDiP",
  "key4": "3s6CKQPSBJNH7mUCKYGivy9YYsobJjVgb5TYs4P6GhZQ29SxDMWibYQyQxByon4UV9s1sh8vbD4yURPwcDikkvpG",
  "key5": "5pSpSPZiM3TSgedRq4Twonj4gWYeyjkBdFbuFs1yFDixJWZkbqKWeZMc8PjiShFM2A4tgdnM85f3VEhEpDV8xpzX",
  "key6": "5oJ4BKETjXHQaWE821zii6VQCDaYiPJnnsTzQEyuPrmEQXrpEGV4haYmkYubb7R9jyZdg6VcgTBPGuBpT1crUzPa",
  "key7": "2gyUkLLTMu2VdfaPEorUt65ftZydYp9UyvbVKhdQY1SxfobTDshsjrLyxh4CJjM88inEv2mAA8KAL1M4EZ262AF2",
  "key8": "2UUM3m1wxYEAi9BR3a1buFXsrLeYN2cgtxxMJ6yRr4BpMqaza9dnHg8fECUVtdv3r5rv26Zw2ytQBf3gooKsQbZF",
  "key9": "4G6GZU5TSJKXJwbjNDKkXLJbcFZvPuFKucmWtY1kooUpqzAC8Qqk8RhKM6rd4erxBcbsnb9sUVC8UcrCV85SFXwe",
  "key10": "3mBD3nwMf9pLfUXSwJAnkWrx6h5jPMa6yCc7EKbp3wuTnRWKMhqsTEJndgX3UZmZcuFUW5tbTkZnFRZ92qj31aCB",
  "key11": "2Ak3vmcdKuiZdcPQhyQHxhG64Wuuxy5cpgZbsx7SRv5kTeaVzuUz1XLgGuXd8vTCEfxZS584Yyi3R2u85K1u1MC4",
  "key12": "4E6XeM91REQm5vTLpSDWXqjwcGFa33sCWmp2GeeaULQPq4EWj9fsPhkpVWaCz8LFCKDzSJrEopJe6q6yiWNbKVnd",
  "key13": "2xUVZaL1AUpo7QTM58NgSTvgEdfkABmbHdGMmqW3evqp2dX7kZv7SjRtPSvCU6ksqFU3xeWsnKAiBWGWbYC3PgsD",
  "key14": "3Ya5XQ3ZvJhkQ4cVQCH4o9KGUUZjEKR3mvz5iNgjgQxxJenRqmkYJmVEdeXnGJDrntxAWAvhmAbVAzrjWPzVoGik",
  "key15": "5rRWdJSha48NFPzE5hVTeNUTYLPRi7bCqcTXSVyWs25KXwz3cPCm66GxPWy3TwsLEf3iUnNAHgk8YC3T2BdRq6wu",
  "key16": "zpGPsDGUq2dsH3f3frw8vzAtEuq6fF7BraiEMkKqn7YfDKQzM63m7qUFVtnKNdVhrCJAimDoMueGpTBtqxeW9Ry",
  "key17": "5Qap1SZE8uHKmP1wcGc47uen8RPBXCZkfoPfQcrxBZKqqyx5AXMdJn9vU3DV7uwxCmbVwBKa6deP4tmxwjvTpW3T",
  "key18": "pXAzPceARd2N7zEKWRA8JbN5YKp6e93hEB8J9qyxsY2Fd2ip1pD2Kuo7Q6Lb4Qh5H5QEEG9vC2eqZFwCLdBP13s",
  "key19": "5eGYmmc4FekW4d2yjLuGPfjAVEd5LKFepUgf7HaZnKnBNYm8BzfsgkGbPUuPsHWGkj91Vj7tax5mmwo2YPpTr7vK",
  "key20": "2bXGHsXaqm2qEM7LAT7u4xJC2B2XEya3H8ZbV8P4mfaLA8eztuvgpDpCZ4B2wvMQU8qLjikYvTKD94JV3anEFXzZ",
  "key21": "3r7VeGEhNt6uFmDryLbtuyGgeYnJpYnZUGzFktfQ5A89crsCnzQHNFnfVxxXe2uVMDG1gYf5LwKoewqtqzXMfqdm",
  "key22": "4CGQS6qCb4aZUso4q2RAZQZJwhM8kXCoT21umAk66YFE5P7AzuEpihB91qZcVDoBbxabByt3u19cbNZfpgz5Fevq",
  "key23": "3fUipiY1sMhNNavQbnD5QKKYB6yPjDyGppJ1qnrXBSKNrfmKfF4imxdFAqtkd9T4dVkCvfFLZ33gu3F3wFBgHjcn",
  "key24": "YASnDvsmC2iDjfD8gAZ148M9CqyS3dahKKNQwd4Wgt5q4287uZQ5pVyGenrTuCqZEwtG99QVSUPv7tj7dB1Gmvg",
  "key25": "3n9HYCqdLgmWypYK3BYZrKXPb7A1ggFVwicCYaG3DAhrEGzXAdGsM7kUHutyVnexq9dC7o131m1mB6zPnNBCLAL6",
  "key26": "3Y1ojdyqS3a1AV2rxUyWvE99soqHcp8DH5VB2EepaJG83caJdTegkwpDKTXtXKmSA8374twHh6NRMHH843vhXbyK",
  "key27": "39xyRtnLrApobrpBVsAXLNnUfA7ZuxwKDp5p7ysr18p72Rje7pm5Th7kDGC3mH74E5YKBsRtzr7ptYtvmsWHZ6ih",
  "key28": "3PeTsabwxoPRoSm4713trYoc7bzGxVbmb9Y4xCwv7GmPxgNzN1QyfYYjcddLKyMujM3siVB9oFBRehhhAPASsdL9",
  "key29": "q3FwqRdGmwv3gmF43pC4wp5pWtnMBiMLMuP1qu2VxY6ypA92sBxMmvXiCNixnn8WHnRkQu2VxYwR5yswddhiYmx",
  "key30": "5a9AvkoqoqpifPzG65dmGfArjY4rUR6KMcqx5yhc3VXdynRyyqH6hfB7dYtJvrvUP6HzX5TrbEjRF4urWxEjs6uJ",
  "key31": "22ymV4mbFAeejBCRte1YWf9xAPURg9ecQtBvWZFjuxHWKSRvH42uhzoz46VGbWfxEVaZti6Arc1vzA285iUYaswJ",
  "key32": "CqPbDAgv3fyBZiLs53rxKUdn14gqJ6HeJcdsyPohzKtwXA74UbDvMSWHJqd4GeACE7tgyyc3uzA4T6NRTMqBKmD"
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
