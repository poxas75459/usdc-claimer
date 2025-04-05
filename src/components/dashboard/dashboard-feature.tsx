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
    "5DWythxcZbGYhNrDLSa1FgpEQQYhbrFdrV7oRtpx7RGGn1ix7uD9aqPRr5cYHRjgXuc4dh9C4Z6QVqfVW3WNxzn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmHd22cch5Sf5XApu2Xo3dE1BhqSrDd4gY1w6xHF9KPxMqpNKcSMREmtpW6cNUmh6eZyB1MRAy9ZKvVhfBozo4x",
  "key1": "3DBpyphtjJ6qnCPdjPgtYwrCzaJKsP7AdYUx6A1VgrzLQgztTSDV9PduXyJeBNEGBLsbiHErEveMkRZaLHkKL4Kd",
  "key2": "2SWpYY2mJsk6e4PhKsixVZuupZptvGGjqzaMkH4HtGxBJDHZfWDbWtctbfu4iviKHKFMxhsT4jQJpZVTzerD3ZHT",
  "key3": "7qhU3doFehjCmfxu4BH3Hskj11JkFAg9LnQNBeFmczUzsEkU49TZJ2uRNPxUHegrsS3DDeUT7gsjMwtNuz42JNS",
  "key4": "3qA8rGGEepxhSd4aj8ZXfKRbQyTY7YSBaciQhvzDevDDpdnpsrtcWXzAcyLV4GtfJNWQmnxdy9ZM7D2Ns3nZrXnZ",
  "key5": "3SmPfdKEwQ9eqrrZLPFGF6gFGUzMeqH1FUKSbo8CnLajc2xHVakmppHpTkVYtCLHB7wXFmAyZ7rLvhZhhg9wgEMU",
  "key6": "4JAYAgWi7tEU7q6iPvV2kejYCqRdQuSAYhkD6TXsmUHdrwtf4LJi3p1Re9Uz2CzZfu9P5axXeakjd2xtXZpgkfEj",
  "key7": "4W9ha6zhCF1tNaMqWVCavo3zjB7B7zbVzM9C3FiiCxnojRzTmyXbVvLA4dZDfoRf7T2a6eg5sXEi6dq8cxaXubgk",
  "key8": "7pTbasQTFy6owwatGzdSPuKf263D42xZAXDFdShWfon9nHRzsP2iKXRMTfxN67jgNxWBzk6Wygr7qGpDBjaADvL",
  "key9": "4kWUEuBTwo9Kc3Cu9YEAQnZGbJ6NG5yRAsCg9zrPCeE5xPZxooeXeYVNHVC2q8dxLQP6dtDafmKkNFFwMUZRpxYa",
  "key10": "31Ja67nEWoNtczsx6aAtk8z6SCyJ5kPV2yEAqohzy6NgYXiWPKAN4oXTSeWHWp9MtJkoTYJtjrsJofe5Zir2VGTc",
  "key11": "iQnLCBTSVKAyo1nmACnKnzGw54x4aC5hQm5foGkMHasKLW3FRXx3hBnLMcy889V9ALjqJ1a5vHYDtVC3CVohk4e",
  "key12": "5FsiNnoE7NwYJ7uqqJ7jX1D1is1RYdSmWvMYMgNsdbg3Hfr1K4TWqMqodSKxv4UqDvdicgojDsNPPqhJeq12QLb5",
  "key13": "3j9KkWSsqydJ1rNf3ajS4KJGnhqDKcZHWTfcNeFgWZMQcyaBTJcD93nPeoYWBp1FxqZEHx5ACXvv5aaKNpXV2Let",
  "key14": "5PVgRPNnY6Z68HBLd9MKtX5zbQ7bHSEEQkcLnupXivinQsPP1a8BCjZbdnYdBNC4Hy8q59oLZY8cDTEQbWyuPBpX",
  "key15": "4spAQT1jTfL1b8AbBbtyXde2DTXeHyuM9RvysyvDMwD3DfMiU25cj8U4vJ3TXXc8DCdzJEQzj1CkpQ9GatUiQtcP",
  "key16": "5UMU6QTK9Qi3axnY1pY6ZeUgA9sF2ewxK3ACAioBJjT2NCLWWxmf4pwaGBkQxE1iYErLFaie8A6yPUtHrgikgTTH",
  "key17": "5cJq2K1SzimgHGvYGiaDha3RGXAKnHBj47fL7yVnYkTh9fC5PmQTZz2Fb5rY4JJLCnPGo6dHueaxpF4FUUD7jt9z",
  "key18": "3Caeft2VQnYze4PgVBPtx1R8FRbAdhY5v4cz57TwBKfWBpAzgvMy2H73rMy7obgii5m9QbZWxbhZFcmDApMnX53N",
  "key19": "5Y4MVNKB5XMu9rtRXhPYVnaZhMmbgHt5ynAi6boqUvFYSMgf154ibsZQ8ebBnJ8UZVus78VvKkqGPCKSL5ZCZNyB",
  "key20": "3ezDAXeFxXGYqJ4z74qP5ykq71RRynMiQPqwWGfRc8t6YA66sCajhBrWXaeVKgwtQMdFFW1eahbCdFguHfMsvD7p",
  "key21": "59ebFVA7SsSSaMx39GH2yMikpw8hyi2hNWSGqvbUFGWVe7QqjLrwKgswKannaxEtT3cv1tRkmqpi4RLGAZMw5cgk",
  "key22": "5Kjz8Mdo7EGMLZBgeeuPadu1Kv5kJLyfFQfz4MLA8DwsYwPYCeSsvC8R9tEyYpMrZSQdSupNP7xLi8unuzDyjsFW",
  "key23": "2AwEZcsWrzLKJZxubZhhRDPk5B4jx1XqkDaUd5wtT5GJk7Yem8TYS6bno8dhcQpB66yK4kkQxQjarWwekNuhcqCC",
  "key24": "DFqji24hkB5u1WiefAWTivqjywPjyugirQbAp9GQg2kCzAJbspJ2FHLHn7Yt6JHDMPeTuguZy8DxRbAZvcbkQp1",
  "key25": "3MoPfVadLo44yqDFpYF67RSUtrTF8ubFexHDJqYPXgoEr9EUj2zfGr8KRtjfBbh5aJvk5K57nJtrBhVhiWEdZh41",
  "key26": "tJqApyd7sf6JPRWU3xAFeQU2JMWL7RFHDiPXiWTJgdh4QxeypLGj2yUTY4q8HRb4hpe7PTQCVqWsMoxZUTQhH2q",
  "key27": "4ouMNmTcFszbkJL8L5tXVJ5JqCyDabQ8tiWEyVbS5Ta99ADPMZdu6cw3muV9CbgE2sP6qK79jr7Vjqmb3hzzE8Su",
  "key28": "52d64o1yGhZXrDg1W2XPjsPuDpcRurLnFGLFDkkLCqFAvhCj5ciaPhq95rQ8mWZUMcWogFGWkowgCdT7nJW8eSyA",
  "key29": "4bSg79JDp2A2xvq6cqkDWaWVe3V2SvDXV94JNKUBeUuE5tPrLFczT7m4mEzo8D6BQm84UCnNkLTRfgS36c89t5Sq",
  "key30": "23JS556Uff6LEGT1Deza3cokeGxuksbeffeXz6enV1EeSnt1mGStCE9Ub2XhEeaZXgj6fvn9f4K5VufJScP3WRgU",
  "key31": "3X573HhCD1yJuZDm1FbEkh4T1oBQ3TtqgRRtssxSu5Cog53S6wCou2vncE4bmqNbkx15SZH1Vo52QCU9FioyAfgC",
  "key32": "FRUwzrtGatPMXihHdTwrYkNZsYS4e1PKtAFgZVLK6G5Yw7awQNSQWDMfqNTcFjchYez3QVji2WfvCpGTdUHQ6Vk",
  "key33": "8pnfHysRFKExjCfrkfTUD9jyM4jTdkYYuD4492grcs3djxoUEAeEgoSiyZmtQK1tUXkMGwWpQGqJxQ3QwPqSrr8",
  "key34": "45wBJMxjQZcvzaqcBHY57uUVNey3X6e8sMXwxYrE7CDVwcPhmtbJUSe556PfmJjZSDm67Xb4tmCyxsM5MKJvXiFW",
  "key35": "3Ahh2ho6thP8UzzcctpSVQwDhhURF3vqh8PW9z4AtBryjadcQ6Zzdm3v9BWBmmssxzFnEu9qk8yfmsgaxkh3FSyo",
  "key36": "8Bd6syRm19M46FdQMFQjRFKdpxE25ggmMetLHWYxxSkpnXNG7L4GiNeXprdf5eoPChqkHCc8zgvQYbce9bzruqf",
  "key37": "posWCsaVV5j2C4rVGJhRNwQiXcM4KKcKfemC4CxXWJForNjTiZU3JrSRYxtyyUpc9jNTLVujHha3jYQ9uVqj3Sa",
  "key38": "5CXqhCRAvvAGoUeNiRQd5vPBvKDKAZBTJcBteAk42ahjCSd3EKLk954c2kiXcrypzhNAPqUqjo5S2L44EjLL7FTy",
  "key39": "4vMwPgt1Em55fJm3YT8Rbo9g32dBXjg3Z1BESmW9DcixbXKJdXxSVw8UxLWoMMtCa42xjceoQ9axAd7aGduEcJ6U",
  "key40": "2LPrWET6LHycfz9dk698DrZywNkdDiNC5yfZ5wkzVupCkJZv9gmg6x1qZBKH1SYLULVDTCDULm8z2LF5brJGxqhE"
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
