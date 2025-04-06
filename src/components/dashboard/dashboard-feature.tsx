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
    "2wXnAHp4e4hQsRhsjkdSFgTZkTxGBjHZ7nMnkjmPsMhLxx9YnAoesBNdscWJanYLDxQa1nTLeRo1LRv9Mv2DUPA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCiDkkLQgFfvRkVGiz59KXjbyxdscE7hRWjeQnQSCo8hTCiCnkUJgpR2Tp5ZSkXbDZrnv8ZkzpcfKYN7vYUU5QR",
  "key1": "4g1iGZAM7ZSFiFYkB8gYVVT6zpq3pHXvfvpw343VTxqH3Ze9rFfQ13haAYNCgzx16Yv8xs2XktzZReXWTCRe1Rho",
  "key2": "4yGWypSQJoKTsq2HVGf2RiRhhaRHgwqTB1Gym6SGw8ZnchyaAUDASBnYqXBuErEeYtAD6LnaBLpm5QU4AsHAnFXA",
  "key3": "4E7ryp6m6Mod1XN93eTGzzMmagdkp9k6384DeYsDQiXM3EiyMyaJdyecaWL8oPA6LirrfmgiSYTgwu9F8AgoELV4",
  "key4": "RxaUCuCCJ6ZbeHZLtMzeQtJsYEMtR7XTMXWXhNjpREhA6u51JxUxmpqpm6JLkpUbve7oFE8BQgMCmMTYAPJBH6Z",
  "key5": "39juYkgiKVeW9xE9c7VfqgxjxbitQxoYUjDnHsgbgjU2iSqm7i2aHTfzSoKpwa68yy8M43RBFvEJHJquWgSLM8cM",
  "key6": "26H4nmn3aMNR28ejA85hYHxLsqa7dZ8Sed3PdTMbKMUyAcenMTMtqXiJbTYGv2wP2bRcsFiZgqaF4b44wrMkjYVo",
  "key7": "3EKcAwoA9Li19EUdPUZUZot1EL7m2NyYk1v2xESagRqYR6bpff1ComsYXERdypJ9PLwkZgZ7Q1fHCoNzfLbhd9d6",
  "key8": "5HVvmscjhimbnu1rC24czDmhpoW3b7xk61h6yioaZWkxaRJWEUxYhW5hXHu1e12JjiQvGMPmZLbBkzyTWvnHhdnB",
  "key9": "56evMvT9hiAUBCtXr8WDt5Xvm5FJ5rPV9YyChPMnEwfnhzRcCt3jhQSBxFQ8APjkQSDG8g2Vs7tsemmfU7CiS1a2",
  "key10": "5Kpn77vcjeStqKyzpC3CHYM6HbWPcUKUEeELZLjAanVhsADXp7nu9ddANLMBj2JVhLVmm4JzEMd34aWC7ziyXPGZ",
  "key11": "3jPLW1HAPMGjU1N79jgGQCMJvzpcU5D5UmdM9UFaNmD1J8wHX8uVb8MYtF7mUfEJBu5t63qDwVTatxnTvA2eYqpt",
  "key12": "UUSdRSTktKyaX54syKfNybmoEBV1oS6L8HPju83efVUwjKwcQZS8ddQrH7rh1TpxarW7ZCB6yGuhTT5KWqSRgMR",
  "key13": "ixJhVe3EbDfkjN3UK4bsWgReed3ktX1frDtdjs9NZGPi7n8Pq7R5tAdxQAv69c5UD56zaSLc1KmeLUbsZaD5jmk",
  "key14": "2pbiUhhRv7CWN7vLcC4MfoQrmxySqA6BSsFEFMfa4PuW7DXQXmxZEu7u1DpR7cPY1mF1qSDCdGJzy5TqiaeJNueK",
  "key15": "4HMZeBBXWSoQb2NBBLzheFwrDZzNThEohDCJPpLoJ7q4hrgD8rgQ7GYK4WWe4J7rZXomV9KBRTS6PStj1LVnPmFJ",
  "key16": "4meNfGtPjcAn6FWPVJ9EWTEby1g39zx4t5zneCqCSPVZGwiUWFmRdk3fYMdBzJvzo7gv62TfAvQSeJi7W5eYfpxu",
  "key17": "P3Ajpuydo6EYat6xPaSXer8forqw1q8gpiEgh1bCscWYcf2DcG86fVZJbwrYeF4LyJ9ArNAAtsNS6CcKSTAq5iZ",
  "key18": "5CZRkk5JUJ9rYM2Ecw38nZmGKpKtxxg4rYTTNLgg3PMGkQrJon9pEoQYWbryKZ6W1RrUbWLtxw9QKnzS7xcysrbb",
  "key19": "5AoUHWiEuNaBUiPPnKNb2Ne5ddtZJtWGWNc7pDEycqZfSNUsQrahrVKS1R581emZARKhQ35YFSS4PnCqgPUvAPFE",
  "key20": "2nyRuecX3aqSgGmJdhSFdPnN6zKUmvxzS5aH2yjDeMaxL1nRTuCryorQHtevg92YtvLZyWfDvabuWQWSxxfs55k1",
  "key21": "3W6NzaaSVc5j7dPzhHTbNCHLvYNWSRPX3ztaQNqRhfko3Vojckrrkz9AwktSfw2RQhK3BAN2VGsiTRcJegkd8G8s",
  "key22": "9jiYMNBsQ8eqn71crGEzbVmqjZVz9vubWo9vWAkZZEktfv3tqEJab7jt6ygBRRW1gTdRA9CwkJMrQFLuTk1G7u7",
  "key23": "3gUyes8V2wrWRAXhkgTzEqD8xmUJ8bZHPLLDVn5yMF2JLfhBwytDKLeeqHqB56PFKUtSqG9fRYomTpWvWqDzxWmn",
  "key24": "2UAWfDe6uBG4BUbjL49k1bfMYbQmBwigWuCkB2nSXGzzECisCVLZTzeMaRkuzsdsiL7dT4bJrYT7H2SxeAA5xZzr",
  "key25": "2mWvozSVa54fh1iieoLRzgbfdRoCmcyvWFTudRuQyJFYeKqypUCnu237rty7uXXcmmgQn3zXgCG6rHFdn5nfMhWr",
  "key26": "31WZEnTPNRoUKph9dZt5xSiYC2CfdjmeJTKXMfKzfHXPdoaGSD47tUPPQZsBLT4RX6xwBQXf8UnYqUF2CroUUqWk",
  "key27": "4Ysg3Ej8BTk4iU48A43Ya5imXWQdAT7KLTvMpBfjT3LYmiqqANCDCvQZmhhoDEvgKrf6PX9rU5CBXJhvBMraURKf",
  "key28": "558CxMWwvcJxtdiTaYX8egDwtPVE28cP2ojpVvv3rUKrdib7HwQWRZUjwpB9YVUzxvmhbqGZJQTSZVGFeARd9zrp",
  "key29": "61nv6ro6bBV6wHa31JsWwPFtnSqRnXD7FiK19w5tKKePsLXMR9fEqXuG5nYVRfQ3nnG79Xo9a8Jg5azbkHeBfZzF",
  "key30": "33DoLMsAvCMjZ3yUtehJVZ2fvLwsg8kDGyTgXMb5vzW18UdqCnNiXHDovbeSYBGpdzK4j9AVtGGd7XLLug1iZToU",
  "key31": "2mygs4kXW8vQf7bMivsMqFp5LQygDasEBrqxJEiqXVkxVnY5ytB1R2QaHKmJVo6CQirrVnmw4pmf8e6QKS1KdAcu",
  "key32": "3TZNSksbsZ1buU6yzSScsFGJXC8ySPGNBPDCEYgKc8LjLCWgbVJeYoEe9E27f6JoR4LwZRyBWWi9p2PcTJypctAe",
  "key33": "61EyJm2GpSpwKTBrMVoKLq1SSWfNnHr5yVe2Kbxhr8XZvKmwiaRrcPHKMhugxf4ciqUTGGNN7Nk4pukkvMvvpbEB",
  "key34": "221F3GxVAQbQZ8uoAEJnpkQueJPG3MF8WgrcibJbyhSRfVyS2aRyqnsuZtenLjHSvkVLi8CUJCSHcu9MZpGfTc6w",
  "key35": "5Qs5ne1jpG3rPKFDs1NHktgvV2woBRwnGjgcS6TRYB6eteuDuzC7as3SfB6CUquPCpUL7c23n7XhNb4TCwC8Gk45",
  "key36": "iTxsm6UbT566Co7RApopxWJoAwANXDTsWyY3Uwmu5Rf36zCUsNSfakFM43gM2HwQQ5JcMgj3QhWQH8ZX39EpTGs",
  "key37": "2u7z49SSfhiGspN7HK5YfCQKjXrN4zx2bgtnGRrT61ZrUtj4ZK2PtSmRtzCEFj4zZJmdJyEbuE3SMxk2FSKbfvzC",
  "key38": "fMbuGdxzT5DnP2aCZPdy1orNWzwxywzaskpFPjQKeHmZs8mH9ds2QPvojJZcVWQkTdnKuU14F9sMbPvkiSNH1Rx",
  "key39": "62UMxbTxpGBJ8GBUCKXCJ5UJV1qxkMDL9nRHoaYGvXiGQVvKq5UFPPKh5YFHggZ1yJ2odHjGeTKva7wqVwupEhnf",
  "key40": "4coRZXzPBwM3GL8sjGL8bXwvzL23JfG6ZiYiFveSdGzJx8mPpQAYNU1CySuoA1ybsg1xb24ere1VT2Cp3EYASdMj",
  "key41": "UzQ8Si4fugQ9D2c39psJoYpdPKVh8WbUjV9QK5c9GchWpaUrtgneWyBhDCmy9S5Enf5NQFxBHfUQ9QSXXxRELWu",
  "key42": "S3WKPexPBShhFWAkrxBPZmKMLCPjPoJcHknBPVXuGjrpum3HRsD4u9YXMo5MSLmBdVnj6s5q3zkXEUoABMVxQvE"
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
