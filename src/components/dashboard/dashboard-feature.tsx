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
    "FzbiGpQ6vP3KEYKmSc3Hcsgsm8QoH8y9hkB95RYXAPDuLtcBLmUwt6V4sG1EQX5ujo5qxqFqJwhCwMmWotnzRVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bz5PqY4WhuvUursLPtA8ZkizAU8GGa5Zf7R2ykLrAHuuuzXSNYitEfk497Mg5Lb68Kz1hhpmcVU75bAMJ6wjZCy",
  "key1": "5QZWQzbdFU13rWMSG4jxHMCmBpNuVY4Et9xJMwYak2HT4erVrpcHAheS8dUPr9rdaekGpXXhWxVtwuiSNRq9U6WN",
  "key2": "3gkAJAZFVRULB5EokpU4Nz9LfY5nYkFRpXk2vK3Y5sjimYA1N34KL45r1nZNtMdy1cSqeDZjkfPAZiBt2pZxbhUM",
  "key3": "QkuEkcmk22XRps7Ngon3XkyAoTaRBBfYtaxbc1o1tyXrWEG3Pbw3jQ1HUCKXQ1HDi3ri7kR9EcuBadYBKtx8Nuc",
  "key4": "5vcnXLyY3H2hPeiEmbb3QkGg1EXgjMrgwPpg9E5hRoD3L2fc19cDXG7t6hFeHsmS3JhrTtF2xnnDMSPTjwoToD23",
  "key5": "5MjFruVtLv3DvCE6w1QVHJc2kgKPKo44ETjtFfQcefVAsQuxCh2bBTwpwYMQzgo6HP9DWYG1taCosat75WGHPDvi",
  "key6": "3kVzYEZDExBpfZV51ECayiPfWJdu8D5F87oy838h11CSwGxmsQNDvBWtpjvsJPNPFovWxmMa367BuA9irnH4PJM7",
  "key7": "4Fb9YZUUZBQ6z8eXApaV2qohsiVnDVUTwp43wE4S9CkQmWga3Nqyit1xqL1nZVGxXA788cKNPwSAMS381sMakMjz",
  "key8": "5fjuGvL1z58HeWgHzUNb5uTuUJdtahWWvozUUJcxYqU9dCHsmtcpBVcKsh1kAf2uVagiCn4XkmYiQ18rgYqwfJyA",
  "key9": "3BmEGCziMekx8khJQjdnxF2bwJsXC3vKG1JfXYzEJyK4A72w6MwwiXWx4FpeBjtS7HcGgksMLLrx6xsSysCcJUdr",
  "key10": "3FeyGELNdKPvUBgcN7r7AyNiKhW85A7vpveqAuBVVqzbg9omoKuzqCmUS9jJRa6AE2hw44S6knbmYBQaEN3Lpm8u",
  "key11": "46s3BfKjj7kegePnp5Xe7GeMjceeezGGmdZnmGWoNXaTQFLkQgwyLrDScNZ9FmbLXz7MnhuWddsSiqXZyQDSSuS4",
  "key12": "53MBekA74zNjpWbdoR7FLkBzsGhFdAeGTLp1djHuVpcZToSChWQqXXruktFYQqAqXuQakQj4cKU3umTouMzXMFik",
  "key13": "5yRtFYoi8g6iwb7yYeAPx3K4uFFCqdssEUEgC1d58d4P4iM6Z7AKcmPtCe9qVmFXnwPioH2rHtBeGEmy5Xmttctv",
  "key14": "W8eEyDFjtAQxL5t6nJGxu8VMqehM8rkgdfQf7g3SgrfSNDSJD1M3fAT6YzWStF1gw5iJmWLZLTUquKJ9W5dmmoi",
  "key15": "3hNs3JUxjaW2Af1LBWyADHjJfsL6vvTpGuMEE217DJQT8Dq1dJZciHkTzWKaMQGa894yGnN7VMX9cwG67EyGYi3C",
  "key16": "62eManoUuATz15WvNRxoiRcmQ1q32n79WTocUtfu6s3p4MqNwZSDTm7o17CAzLukwSDVnxPJQuNL8jSDTxjG2Xq4",
  "key17": "5gPG3p2tRbTniX1N7ACo4mgtq5GfYKr73PzYM72J4bcLj7izGjfjUgxVezUYWZe67AiwK993Fj51z3i3JH5zSivJ",
  "key18": "3fCKLMo2BvAo5NUssAvgRvGUL6cPWEjA2Uj7gaf4v2VmmumQmH1SjrsaygHAbMeLMcx8ASvNZoXLK9V2CYiycMmF",
  "key19": "NDmQ7mKTz1PqccNaeK4uEmb4fxNZeguWHYnxmUhi1TYVkQWQ4p2tmb2egUKsPBkWgWFpdr476YLKd8CQbCCLx5F",
  "key20": "2aNSgXGBcfq8Y1jx7TusXNr4dy2A4EwrcKGMmf2se1NqsLEyK1y3ztg41azVhevrETrA8pikppXrWrfe6yzQTR3b",
  "key21": "3FAAYLRq4udfLBG4TzPXRXqN4h5JQQ3R7xoWwuyYtkLxqHpKFbPp3MxXEnEKSjTWRQjvkuQtium4NrMQGAP7AeVp",
  "key22": "2dhQvxRFPmcXAjNiLr5SwBNsmy4pvqqvYyXhfBScpD7gb9QvsqnWpxYi4V9FgKmQjDkYy7uEZMyo5hhdRkAkGhgH",
  "key23": "dw22nBUXuabBHg8sQSenZdAputZLHZbnkDn9dtz7ShF9dTL7QDknpWC3N14rqMKfaLGmLxUR92rwXaEwhXMaqx5",
  "key24": "4PSQPEZRL2dWsJ6JRkEECnw6Hy7gzduSVGea6QdtAEyXvTNcQ2CEUewYgqZjo8cjsGfmfaMJiq9ht5FAThPfsgPi",
  "key25": "5JvdGxLeo4FR8WLyfhmGkSevyi9HnyStG42WXkaaMgXqQpCsqNN7NfsE3V8GDdzM4rTmS2nuR9N8R6NNCjog8y6S",
  "key26": "bHL6evScYTgt5E9XfQNJvarfBiPPU3nGZLb8Z1yEHRn4Wa8EeUJkEzEX7JPQxGfMiD96PuFSzZRZrabwHiV2B2Y",
  "key27": "64UnfJf2QtQdVNnLYcf2bX8YkmScQ8AXfVq92ArR9Duj4Fui8eH659kFCYCBWRSPZAFHuAjVKSqdLkb2dBdVQDYF",
  "key28": "45xi3TTcYjoRMscpaMdYGiqXhAg81ACx29QALCuo4PnpUqswGo89w5wfkR7XhMLm3BMjJSE3XXMTWPdxGJDvnTTW",
  "key29": "2NoujpnpjVGYFWKaYQrz4jifuym2fsH4tWaiYb2bfokZH7vy8FmmtY6peS1TZjtdA9YNvoNSFsfWRXdfHA1P4eaA",
  "key30": "2iVGGT1VZWAfSAqBrT1xhhBaoKLY4bSsuxE3sXreQ5DU6GCpLAECNvBMCE9x5jqYhgTadD4XbtkrrwJy484XH6v1",
  "key31": "3tCP6B8xfMQh5YzbHWKG8kGAeJE5LKzi72MxoCYxTmF5nNXPfNnxyLWfJau66VZ3qxSig6idBV5jAndA1qrN8Sq9",
  "key32": "4fBHDkCCDPxQ9qYBhk2Q33MstkyzBsFuyqZ2sD5zLTLU7LR8wXyryh1hBXoh6x9fvS6qec2Av7yAaC9hL7vM6BQ9",
  "key33": "5J7WhHQVTst74gyZ27nB2a5emMFFNThEbgDQ25MvrYZQN5Qh436boPBBPkWgyeya3UNDupDLmqpnD6fXepxWdwWt",
  "key34": "5VZxwXEG3xwNTfTUwx4db2UaKJMVXKVmr5n5MM6Recs9RV17D2mG69njNJ59X2vvrFvMf8qxvypa6QPMZWN6kUBp",
  "key35": "4fCtuEdsZPmp6in8Lw9EwijS69ASR3mYtHxhueTzxcWSRpkKvDG8YkwAagTYKu5X79A1JUd79G6VXP1Gbypa6bX6",
  "key36": "5D3nT4rTwfBcTgTdBVZepbpB8qHgMP8avDZk5PAzhLeNJmCEUGavnZZQK8y2uus1Hfx1MZQKGmV9jCTpRuonXCRp",
  "key37": "dWehg5Lbuoc7ZSUhD9rbfGb5MQQkLJEvCxjHntjKcatrL5VErhWiGL2mFyuwaLfs2TGAEvKdGaUixcp3hLJQBW6",
  "key38": "2ASanZ1iLcvxX1WHbh6VzwpFUZKBEdHtCEDJ3zT3J5Ue1T9wgUttTDSAGnYAWh4j2nmme5o37pbrCfqs2vaMFysD",
  "key39": "3ae3orGqs9Ri5HBmyr881VWzQ1tcXvaCGZu6waQic7NknPtBKNxjsQKuzPA7qrqFEuTiHXyfoT2a3t2ufDY3FYrM",
  "key40": "4TaBM5CZh8k7b7UhdyyNASVSaoUmE2KMHH8knzZvGU3zyiYZr9SRNCtav3WUcpb9vFAJoevfjsQ5XvgaCMSJumGP",
  "key41": "4a4vtdpM5q2B7sRxZR81XGUC7KhLvLmaChNiD1UbZTpZuzhofYYngjxKCNuii27Br2Q67e68GL8FCQ5xAyazbqKf",
  "key42": "5UfvMp5HsBNgfHHEMg1vAQn8R6Ts5AXbsbtpf5x7FxTpbmkDHXBPxVBaE8xNfuCFxKGH6DVKqoSi6v5Uj4oP8Nbc",
  "key43": "2dxxX9KXx3FqHgyuqSksHAmLmjiyo4meG41Dr1FcsQoQFWFPU7b4BD46672g13Rp29snGhMTfamQA2KNKVepNSi9",
  "key44": "7rUv8AgShEfQoQpsst3d4nQawzmcZBLFpqM4PKq3v29xUFMnoUENagDqYgBnUCWAnDQ3JUM6i4KzbmNJL8sUL3H"
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
