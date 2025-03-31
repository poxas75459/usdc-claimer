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
    "3CDbPEdztQXXxkuT55ytSeCH5jwZbYA5DwdvXsLUY1VbJh2kEbgJNb8Hrsp9ABpVFidTqCw4KQjoeKWiMFo294VE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7L9Ewjqo4JGAyhpWc3KsFfDbGUTEAG76rk69caVVtLUN33zz5qtqgFEDonNucgC3UfVr7nN3g1BepFdTToPUYJ",
  "key1": "5sk3JMipdHmALxUfDi9rArKJ3tMNza1tpCBzxAVs1R4u74WpaUVwvZjocNsp5arj6Crbszu7wvN2gxSoWHATVi5n",
  "key2": "2RLaXZAKnXi11BtGbVj2bmHCAzUR1GniprS2hiNcJUvoQnF6C3rUx76p8NDnJ3G7Yh27CYTvxsHDCygyUsazHpoU",
  "key3": "CYRvq4jZgY7qjYp66TM8yZ6u1RPxEDQTpfmhP4AhmnataJcEPtbgNhq6Zhzj2RGRqkJR4dQjrntMTmbK6UcXb9h",
  "key4": "qPg9AvNcMTLcgBtzq738niqzGMPngT2A3eRKBPiYcVNZe6Pu1S7WD9NT6CEMXzjjWuccDKcAj6PGcuoVWCZPjbC",
  "key5": "3wJSGfkCFB9WZkLLd4bZ3tWtf8pPya2EPnF7n2p6iySsgGWFH6GHssHHgiXWYXLk4k5V7wJGU11AAaBWBoYLkzJb",
  "key6": "5ytegi2X8967yVMbNk3ja74H4oMAwuSg2GZMqd7umFt2ENoVT6sXikMxYQU8yn3QegbSR7h7BLvQNsZkj7NkFkzW",
  "key7": "M5AuBt1udcf4c5BUzN318XkYJWaQVkH7Gy5zRkBYKtwPiEAydAadyYfz8Zqwkoi4ckfmmN8FoU1NRkZMB5s91ws",
  "key8": "3A4C7XPUshJtBGBmgxGWQuKWaT7wApXEC29mQinZedFd156zAWiHhcPHPDExuhmWvEW2v31jP2rpEV2UZYurK74m",
  "key9": "2FchMiNzJqjsUuBtC1sBc4rx839Qj9np7exXuczp695DhAHetWYeWYFQ5XWbwGGYJMvX2tCqceEGUA5Unttv5VMj",
  "key10": "5FinSvZn4BJkScAqYZ4xRfqHoiVVKX49nR1CPgNQgQ5D4STLNDgz2azRt5ZmSPvYfyzxosNA1P2MZgqQZoAgWvty",
  "key11": "3MhXqCmBsxrVcvy8eEmCLPFGYj5kKoh44kwiMKWoWSBSc4cac3jv4ovZE5YP94i7XoHHF8caakLTWajNywHn6w2S",
  "key12": "64pQwWTHAaBb6gyqg6CCkPzRbpumgtXJhnu2ci5J26NKcpJvmxoEgaubpHB5NjiUzrjjgZbcBwh6vkdLMoXQHMpw",
  "key13": "5xDz4nUNMbyXUQzjfjnfVqBmHtc8htye1EYd5JgWf3nAwoZGzzagAPaK3tGoa4BzD5b6WxAMncPjrL2VGvfpDwmu",
  "key14": "JKqqFiWwLyPeo1rHNe1WrbeH81TbQRnThd4eVZXW5mkGKpjaEPTVAd9oGxTAuNTqYQtkEDh2maaZsqFkRAjkQEx",
  "key15": "APs2YgC1FJ8G1aVkFmWuYWDAhbdtKN8zzx9MPbSWEtM6D94hiPoVC2Js3seT6YmGgLGzdwmeRWmbakH2yprgWSX",
  "key16": "4zfXGrUL6JF74mYc8XBEGBGk1Vvf7uGTxDnBXrDKJ5xPYa5qgUxKPAUXqmewmDYCK1w1Exdf6PBFaa8fKrERtJsT",
  "key17": "2Rm8LduHDbApAGNkeAecKyiEzkdSZiZ5FFeBZJfPpgLWZQ9eKjk2wiQDV3sGnbejQfpANRiP52WnfdMRRoxD5jZ2",
  "key18": "3aQWhDfjKgv65BLszusqdoP988B2ropciyswvpZBxiogvjjs7ovNs29D4ZVTvQ8Fy9NdDknxiaSPQs7H7GQsTxE9",
  "key19": "4XdXucGNcrhhvr6BUbcpdCDZMHGFpb4JQo5UqVbCFZzuikcT93kJq6FkTZH4H8jzB4JqD1x46iyNDMLSA7wEVFdh",
  "key20": "27cpAGXSET6mouwkQYxYmFcbTMeC4JBQcWp1ck1G5iDCj8cpEoMzthbWZtqWMfY5p54t8QvKBnqfmzynugMrGjne",
  "key21": "3JVbAjiQmBDYn9ULSHg7PbXpvRkSjoqLBtAybyPs927LcjfzVdNAXX7nR5hpaEa8b9gWkbpA1HmzVg6qaUeTx9kU",
  "key22": "4dAkKhvRjfL7UNFgsHyKFCx16UU1rYYg4TqCBpnc6csNnnRbEVvLUXFsbn3qh8LHikbPNhjBUiK8BjY1vG2bwP3w",
  "key23": "3Fx5cCXr5CqkXkJpvbWuRSWtVJaRizJ7myLbiMJd4FMJEz9EdARLrbh1AXun6d5rzw9CuuT8m4dp6sTMz7rN7fW8",
  "key24": "2fWsyQ5DSmMUJAVsAPuRuU3NRxMk7YhVbUtgf9nazs385TvqUrfuPjeQJJ6nc7G2BwDfdmdJ1sAyTDnydXPVHKeB",
  "key25": "2s6HySmWYbbz42qGG8tynsp68muGy58cqqxS7GyXLwbe4GVbwDG5oqyEaJviQ1aLNdPhvYfaNmGG7Mnma3Xeo8Nm",
  "key26": "55KYx5E2XKXtWwLvhQDV4fwE3UyKggNTmNA3LxV3Vn9CfHvsPVbYQuq9Nf5zJQcThLNXUubwmS3Nk8K2euPinud7",
  "key27": "dxZ8jiLYNXnFywot5JRVBB2SEZWRaWJ7xJbaTpVbpuhyYymJDL2ts9C9PterhMkiw83R4WyVp9NQPJNXVL1aXbQ",
  "key28": "2hXcB85Ho1eCT5eTWnUBg9ENfgxHSoS7KpZp4JV5mhiTW41c6oSs8MPvAKXFY15emKgimtgoPabLQvTaVnZys8x4",
  "key29": "vTL9Fqqov5Rt9XPdc9brEuakYyPKBHBiTWNtMgAFyuHr7Hpy1JC9TdkVvmttqGFS87sXWpwafYXkerSJYLRki5o",
  "key30": "5KkUb61rf7mALZKkz9wfTW29okghHKaqqUiYJUCSDerYd6XJge8fEXQsTAyzmkGdDcKRoJQoJHRoGGMsq4NDJASt",
  "key31": "3uXMzMWxWtQzKg2MSVo6Dfd43AAt1zWES2nNgxABEcVqfpfWShyqTYauCVrRaHfQMsqf3M5D8Z3hNFfx2fCmSuch",
  "key32": "35CdA72VedpaxBucajNay5NpaYKRCj6P3BmVfBQhVS2F7bWzNvaKYibeVDPL5GZYqUP4geUgTzDD3UfWXfujcqGQ",
  "key33": "3LHA8mGAJCwuqhAKcAiiuR5D9sJ4qFK5S2RtuS8prpc3ZUaPSsXSqZvudgv518wM1gRjBhSdoLErFoTgfJHYnbQL",
  "key34": "5bFiDmiDbQvqqPgfAkjEvf9R4HTAwdrP84BJNFZS3hqxreGERVke383nh4QtHuZmZd8chsqX1TGA5913hnAfudGE",
  "key35": "2t3y7TJHjhkKqyCCv9khpTJKxH2zGpEaxRb1qsuEMZ2Nw6KrLWtwEJoMjC74Huw6JywynUEgtLCC1wXsUePuPCNK",
  "key36": "t9yB4ZyuPT9iAipnnvt1wfuZuZRC7K1ZTXngfGxLCvv8tTCExrs78DsoNkxSqxvdckzuhrUsxZTYe8uFLhL4Qy1",
  "key37": "24nZrw1jwc9TdpKF6LnX8s4B3wiu6BACAvNTjvmwZsnLYRZcr8GRPfFK11vJe5oeeJk3mBooHTYCZtpT2WevBRwx",
  "key38": "5LKZS1EEH1uC1HAo6Pf93Vqua6GkF7aBsV7NLY1kCQYJv7hKiz9qWAm5ZZiK9taXnW12x5Ci6rft3CDZA22iK5mt",
  "key39": "5avjYszV7XNyDSfUXY8mKrphSGuwcnArQi7wHVx5jMrH7YJFLEuSZrrUgnr1q4zpjhfN2D1mLYN8v1sJJTnUzGLp",
  "key40": "4sqkvtvzVwp1EbmZLq4UBiZZnaQ2KWLjP2vx2G5YRkvpvtiPaoTXqR3D7tU9DBNYdLviott95JcEuLAVeAd6BK9d"
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
