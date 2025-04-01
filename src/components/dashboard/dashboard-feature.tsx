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
    "WyRzsg6NLjwmdYoYwA5YYeiRGmuZTfsoUx5H4PfFxaph2ecFnJZRTdun22QRDB6Xfd9PVC7Bk6GyWMWkrLXQGRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqz6tvQqARtyLU41XuAHZReZssK2TtgD5grgs1WDDH8TmdmZM3NG8XrVVtsdQHSSTBnAFVhzZpNbgg4MyLEmkjN",
  "key1": "2suFhjS2ymbuhUtDTvCCLKEA5m5V5ShudUYUfuigD1AjeejfG5FQiF8TRW7gkZ35V2yw31bYiCkivUxMY1ce11jV",
  "key2": "4NR57b7knB5M5p54M5RxG3tz7LCNgkSg2dVGxfCgRH2VmcBGaeaG7kXi2edenLooDuD4F964QsHBtL6WJTYNu8yw",
  "key3": "2533JtJqkMSqoSP2koQ61JsKtKZCd9ZQsp4wXyR5jGP1JEEcLmHW3wpL8TanwnUcMxS4KT54ToFMJ86QCU6n7ZtE",
  "key4": "Bs6FeZ3Qyu52EafF161bZPHjL9UuR7n4H6MyYUPZBF7dV2CPm8GGe4fWmFuriDRsoCFYFT7t5NDfFFFnejseFWy",
  "key5": "3wVqV8eVKkR6xLUAwcff5MVTBsNeKmqUR2ToUZtMz59BKpmokfP5yqYHdCWyB5Nb65tp3kzDmXW2jw4F5Ln7PBX5",
  "key6": "2nB5inHyFsHmW3gpXjq5jUkQi5ajyvpXRviFp1Zvyz4PSJ8gRJUgCMsjPLfeXvey2hwbKWHhPzNTP5xkieaMerH5",
  "key7": "69sCborTY9PFxce3YVPv8udoHE1HNVZy5YHvxVBzp9SiizDweefVVroADPprVXc9XQ9appYppeAYLNoPeHufm57",
  "key8": "3EmkJaEc5ULXee1XePZqfGDd4Po9QAw7gEBg7czmz4WEW5zmNY3kF14sYkSvnHJLPcvnGHEebS8VMQjTdMf7Acw7",
  "key9": "5LKpp2qMB42YAkNg3eVCaoKdwPYHoxqpsChZ54ewbm3TQpiEMPyrZxrF7BTjom9teZLKCY9vQAaMpk1vGRj16GFf",
  "key10": "5SL7zTA1ygPKZh7ayGFyYLUCqP3Q21FWRxNSFxPJPBfEoeroiKguhv7unRWHBt7XK4kkRat66h2RMpwtU81AQnB5",
  "key11": "4J7sVNjMyC4ynBQH7uvWsjzaV8HExDW7D5PDFmwafqfyLCNairqt41ctbracWXpgs6RvktGfRRaZ7XYUfizFbKd3",
  "key12": "2jbzab1D1LTVqV4KNTdgeYkgTYsmCMSm3ZMBHRF1jRHsgt3AZ4cbbxuobF7zReHYs8UpeGSk6BP41XgfsuXrGjmg",
  "key13": "21hcnki26F3PgrsoewboCYs1rGSd4CQQLN4ue7wQmP278feKbv75MoHnnwG3chG3vZbUvqUeqtyJ65DgC4zbmBCz",
  "key14": "4y5XVJtozk3X39f1Cav1S6bo6PyF6pSVGYEut6fCEt71bn5EiZyodV47DxxrXodH3s99195kCUhatNkTSV8pJD8t",
  "key15": "4uh7Z1sVNazW45UQBLaPemvQ8cGVzNxmGJducBeeEiKYCErPuuDcvNUVbDrhJPtE7bjf6KhToBisfg9pvgxKEWd5",
  "key16": "3ryofr5h2ix4NzcSSHxebLF6R2eAN91xyXXdFH61qVKWxXVnDK6iEr1hYcwBXsco72k17bY7CMehLYRvo5bNfCp",
  "key17": "2RcBHceFD7qriB29EFFq6nmm1nEkZnSdPw3UHjFXWmj4sT9rRV5qvNUmnW3ENGBdfw4JoMyaX4FRfCjjc8NfbPmZ",
  "key18": "4s1dqFppYGS7HJZT6eAuZFL6HfBGtNHaL1HrewjVYLso2whwDqNdCWxwhjBsn73L3dFUkfsA9HpdPmboqct5ti58",
  "key19": "3394fM7yLzYT8rC1DqC8en1CHVn3iqT3NUe9czsq6gQVBf74xKyUXiH8TSaX8eMfAkfBzuxcwMRy2nZjgxEiLH54",
  "key20": "5Lhk27Zm5a8p1QCuAKMrU7Q1HGKr9VDYWGbsbGuf5XMxHG8BBk4msidd8fLGqMjcp5bLeP997tmKzTnHoMRLvm4x",
  "key21": "5oJp2xwCMR7ZmkAYYV3nY8JhkTCRjZYckaPTtQHZPHj3zYsDm2cwni5uVEtbrhYnYA1iRtyFLBknB8MpRdWUuEqT",
  "key22": "5YGQm3rQKD9D5m6eqXMbtRH218FStXDRT9ErBrs8qkAVp4QgCrCivVQhogf7wzxBW2yCpaX4Grxst6c7YaX3bBXj",
  "key23": "5D2fHDJmpeJYCuMfatnuATfDcaxfS5eJUPBF4MV9RYbdYnd9cB1z1QCBpDqbpi19DsHmPFtEtvp5HeqBc2a27ASQ",
  "key24": "2K4r9cc9LqhTEbJQrvpcvRgMCs4n18tXnjHRJ7CjM73rzwFA4ZLLw8L66xbtqyf1qqmMNPyLToQDSz8vB98v3Lqj",
  "key25": "43Cm7u4fpDBu5686BNB7X5GxjkYCFDUGRjxZEbWZcDRmzu7AE24we3FkkSHgDYV1bWsZA6C5K7UeSf5ebJLgfTKA",
  "key26": "43pwLoLmpFUjkn923tpoYn36nMCbVqraunFVxQrNPgD6XsFvBXsub9NJe7xDQG9Smpp9xf4yjjxUCCjVh8Zqmwta",
  "key27": "32pS9t58zHZ3HtjWDvxK3zNiFXMniiDUgYKne9N7SZc82KsuYpgUPdPf7i4fQv5iq5Zd4K8Gp87v8EdmX8ZWo24q",
  "key28": "2JsRqLVgUeDYfbY6iVakdtTmDWZbuuVhXmCJGCdkgfukwEs8gSBUMitxSo72SHzvXp9vHLFL7RyEk4kFx97jBnND",
  "key29": "5FNH9JCTxZ77W2WzNwMCuTsmLAzfHEy9vThbYd7BAss9QYKwRKtkGDpJK8MuMJE5XXdhFkqXfFJxDiEExa47Czt1",
  "key30": "2BUzfRFn12NgtbnAsBsA1apTLmRQZCTom2TL1FqqcBmucEX3jix7p3DXr4dQiB5sPFkT8HqnpHZFEhwKbj2QoYvU",
  "key31": "4135pSd8RCjPsVe1ErCRBbnFLgRZonA2Y9GTvnVadyPjTUjZbYLvazHCoZqA1eHP38PKKBPq4SSJv2PJWWRV6TED",
  "key32": "26xTnFyP33JT2kbozVhYdcVAekS47GVm9MnePmTw1UQ5V9SA3BfQmBEA5NUkd38SX8qJ8xKJ7A7pmy3us6ykBUw9",
  "key33": "4mga2KTKMPKwG2qZJhhFXTfY72RpKpp2EhFbgYanRKqH6GXLH4rYRnMmVCYLxFiv5QRKVouY17kJDCXovyYhEyxc",
  "key34": "CnBx4qtPkQfaHA111kCX8zcX5PWHAMrE7rh3hgagTchWeDbVZxk8TGatwbPihoUWP7h2pqM85TZMqRF6K2jV8j3",
  "key35": "57GhqshRGTroVmRHQireSYdgMcH7Xx9QktfUP9LzSVyjdh56Tn8ADtm7Ryu2s8UMCPtgefE1ctFeybSvBqFhwSM7",
  "key36": "5uWGk4TzK2EnamS5ZrYSnZgsijMqw4EvAR3DQHUj2oCTHVEdCib7P48ZLB71oFGWC8JNx8QKpWu9hXxTYGa2bRGy",
  "key37": "666vJ88yVXYTRPW16R6AysQjbAfDo3yCT213Z8rpvU3z8qZAjdwtXa1p8cMDhWBwYqzGtchooQqu5SowB6VB962E",
  "key38": "t2J42yV7srd8hJaEKoTgHmNpdPSKjfXGEPttBCfFQqXCyBqWSwPo7RDmKz2mjWW6vAZzG7xCtcC9Nafa3KYXY2y",
  "key39": "4LYBWPFhkqZZYfU93AcLSG5uedBSkMwo1QyYajZ3ujPZMspnbYuAjy1tKXTTLFQpCbVqf472BmH4EkuZJ9iECkfq"
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
