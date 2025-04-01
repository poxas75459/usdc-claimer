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
    "ZjDaPxqJMz581hgmNg2fvQH8U5Wj9RpiLvwUPk8V3vfT5Vwcd32Rzbw2HN7p2hb7zKr7qEkw1LeCucrtKjt1bSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwUCbDXdqNH2ynm2d8ECFeNN1uJD2KtXXVAZFumAF4Vv4cdecbtpeGCPXSWMJS2fxmqc93V2roYBw6a6ZMPnjxc",
  "key1": "4wbJhMro2KKpvmfKngeSVukuvdPqDLtpEm3cW48vziPTdyMuZRtbHMxfRTME4kiSNyeLKvwabWLPYDoSfYhA3EnU",
  "key2": "5pfA4Pm6Ub7p5hzbXPotKaPmmAquKCk9fv8BNbjqheGa6GJR9ziZdGZcZpRjx6qrWsn2WN6DRDD4m6jjYsaooMKp",
  "key3": "3QQ1qWMSzDuZvJJ344xPBoyF5hjG8A9KKMcPbykLwQiRVSuBMTqjz7KeLgxtTkewYiPJN9t7EYx4NBtGWa6SNjs4",
  "key4": "3NxpnKB818ounGsxVbdHE4RGh3bAGzcYMtLDpBGuSsUjauHidUMu3R9tvDdvnhPbvPwJCMrNrmjDHDX2Sv6yuNUb",
  "key5": "3T5wdU2xw8jNDCe9i2AZqcGyFHtzV6MRXC2vnQNPZNqu94qAebjVbax7snojRhvWyfhQUFTFktbzmUhk2ziD3jgN",
  "key6": "4LttFjPS7MJvAmuisVXnetRz6pJqdfsoV8rja6ecWvSz1cSEEnFmkxMGa3u6iHU1HtikL19H14csXCzxP4iMptbs",
  "key7": "2xSEaadWDX4GHzBAfyHYwMdtaPLCYDXkmUhis5JdnTk1y8gneo2haqUKgEGPU6Mf1X1JWLq5dDfBp1cMMFzFCGeS",
  "key8": "2fpHoNHoWax7V51JU7yZZ4XV5JGzEtXBN3kBp2P9aAQLfBFRL7AvVmdeWkbvUnCuwUX22LwH4QdKmYmyTMxQ8b2G",
  "key9": "Ryzx7HncqbbVPa8kRyrvmimcbWTChsJ95B6jPZShbVw8TPaPjP36Zmx49ib4nn4iTkzydMrMAr3r62xSRXiaswL",
  "key10": "ucvMkdiLydKSZMqFBAuYeMJcHTexjp5YjBxRch8ebk4gYMpWnbfp9UStn1RDZn6URYxHm5UiGsmRHCRdjU4kLg7",
  "key11": "4ybnE32forsCyy7tVEQR5DH6szVn7R1d4c7GkXtPrfWUXREa4318XoVH3DbToQYWHakVnqezevfCVAGQ32HF1fBy",
  "key12": "5EDEVaxo6rpGMGSkGhAKd5SNhJskLeJ4HqBis1MFd4gYBzKLEdudmgiAbjq6aNkjcAfJYfUGr7DkotAKyYC8xuGX",
  "key13": "3cFk1yhdTEkFhnTfdQECPNeFPRhFWRzKvwh6Q2UsfkVY6WuBSABqf9eAwkAJQJte7k93iDbXrYQMubfmLQf9yh4Y",
  "key14": "5EErrY1kBDV2kwj7KKzM6SbR7PHYnVMMrkZ9jHBFrCKHRzzUa7eDuSiEAmkcESVTYv2iabYDh9gPHcB6CT57z52W",
  "key15": "36ayShWi6NB4mTSbgy5UponAGNsRde4Lz4iccmh6sKJpibg94nvEryJKkcRcGF2U2Qt8WB4uHe1jvCDKmnnZJXZR",
  "key16": "3zoGSDLiEu95zpML7LUiu5ymqN67n151BcJdUpUWx5HoypG4wsa9WoVozH1pXcAL5FZnHnRHhw7ttvqewZD7PaGP",
  "key17": "4fYA9EszjXwTnFRwu8FAUsuYQW194u4dNYzRwTe4dF4E2R7dZ5eDoPHZh5AjCiaxJX6ZtrXLavVFfjJK3Cb8WUSp",
  "key18": "3MiewSKvgaBYtYTxNax8AjMtsnSDKskzMrZB1bZrHkEdhudgouv2DCHhxyoBGs2TbmRbL1Pwrm8ysN1iH4jgzP81",
  "key19": "3fBpDCjCt7qoxVQS2xcsdg11gH2VTFd7VhWkFYdp4pUyoZ2JMwN2KWDJBwgCFAqgm6ZeMT5fZ6gkrg7pUfLBGEwh",
  "key20": "qoLd89bvMeL7HAgLyAA6aHydtYQojunYGVexKFnU3h8QahFvPkHFodM1ovNj3yJUAqn2fiSxQTWxdbwUfS2UuSH",
  "key21": "3MkJAAxsxX7qTM4sTv71wPMtJcPgC4CfaUSGem7VqLAid3KEjaN4ELJKfYosp8R9j7yaPn6a3qnxJAy6AaTJNEG9",
  "key22": "hFr3XDMRfNUD8wAfB1L9ThJFYie9E3JoC45crZ3wntYhSXxeZZdUaKLYTf3ResH4B5rCktS56tm3e4vbJMMcbhk",
  "key23": "5kaFuvuoyLNNhv5PJbyMnN1AeDcL5bwrHronrhRKm7HMNR5dkjPxvLMn7dJzS3H6mCMYgQNi4XhixmpR6e1syXYT",
  "key24": "49ENX4uoqFuyBGrCm64ihjpeJExT2QaEEgYvZAyDh7GZL3JKtwVqrNAubSJNKBBakHkvDFduB1HLqabwkKknXuSf",
  "key25": "23d2PGn9JgHP4DJH4Ctxu51hJNLuHYGykqvLE7qW2RCQnFBmNfEthzvPjMbDWmHwpD2NYEgHjV9pwKw7mvfkmx2h",
  "key26": "33JEt1TNetjYmZX5fkNMd7BQrzkuhXBcSyQkDAXf8hfGtf4MvhNS6NzuzXkvgt4pdDAm7yhCEnXwEoGKLsNGDPjb",
  "key27": "3MnPNiB6W74zQQ1c9JxiAHHP6CC1XuEHh1ZbtdDbvd5nRY4VYQ4S2xkxRKj9Ccfve3LCVne5sRwMGQUaJK9LAzAN",
  "key28": "4PrXjJnxwpF8q6tSBviN8FPTN75nVEuoU6h4jZwSskzjAmf3JAKG5zUKF9D7xb1AJS5FuoeKNjgkLaakVQyefjSV",
  "key29": "2k3yRZ7nyP6nBTkRNCKiEBt75z199nPaTiAFthtT6VT45tN4TxaG9WL21VeSns3FxoaEThed9NKuw8TBxWuUbNd2",
  "key30": "2HqgGzHxoM661J9itj5G4LH2j2XredH3RqovR58SjoRoB76ZGykFvS58HYMHHk3LR8KqBjqk2AqtBCMXgwq9cHgZ",
  "key31": "5jccPmRrbjbAuC6imrWCabCzepWBYTWHnaES8jPoRjx84rm9YgDNRhX3qnDw3kccyoCG9wfCrDKV1vsBD1Tt4APj",
  "key32": "2QrAuakEHHSz6WYZFvxhdBUJ5eRSi9F8PCbrMTfWBTV7LqZHnPMs1xMayNZg1mKxEHe4nJH3QHtWhiCA4P6rzc7U",
  "key33": "5tthmcejH6pw9oi8S4xw9NGMrTi35Qvw7qsYphJU5rKCaMmxJbtYEEqwXRbtLUgC4pDk9SCEHtKYREBXatweX6yP",
  "key34": "3J8dn7ULSoisG3NFXJLNdw4AQzAvxwkNXGMgbDX6Cwfc6k6sD3gmUBkMv1SsG55oDRScEudSstdMuV1vJC8dRZBd",
  "key35": "3hnf15z2LJPRenVz8aNEZeeGMyBG3xui3p91o8p4CyMUzY7MKzhJscXC92j7RLam5x2rpdBJyVNNkRaCezTpCtuE",
  "key36": "5aifmAh4c1bnKJ1tVJ8gU1KHrm2rF8fHu1req9gNSPbBJQH4YqfTQqfcYCjiSWkdbVXVgKWRZFAwkUdq72qmVRmQ",
  "key37": "2wmoLuE7b1L657SqTDC3YtZGJ1n8fnzKguLCNjcnSRyPSJMeWeuoWrY8khNwifagypwwZVpitvyVSCMuRB3R5xCH",
  "key38": "5ewJUmk2n4zwugeab9BEcvHUqmrqpqKKjFf1SwX1jgDQigLiU2DCuJhotjrfuchSjAr4RMCUN93dJDPsaRGsviN7",
  "key39": "hg5U8dpXUBujwg9AGHCdz3w4wMmNMhmpFes9169uKqdQ1RaZjHWk65WpLG1nWVMc8KDe8YVRU1tn9TdGApKKDQt",
  "key40": "2pyZXxfHda6StQxnuLScjvZ3krwqbzoyRtmhCRewHb2Fr9iU1RWGBj1PeX83qxdnJNmr9m5VUkmktirM6URt8J8u",
  "key41": "5LS5Qo9Aq5iA369mRToMvAiLVJLWuztwME1421dTieSuyF51bB6U1Lvxud1xfo4zbKDFMmYpbz4EEAzXGuLzRPtA",
  "key42": "4KLwCibEX7K5nivbybfsEMBVKfiL5cX1DJDAqmrkdGdKiKJ5PNVHPD9dpB4umVqar1XriVtYXv26NjXHwzEiZaxi"
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
