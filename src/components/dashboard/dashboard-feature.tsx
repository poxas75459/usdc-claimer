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
    "3QjWDSEeHezgJVP7DDjMhWuFQWS9TbNNy9rAejLbgPNELvQKdnqqyeDNhyorfyVAG7prTyi7x3g8MzdR6RfDRQe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPGB5WqYKTmE2z4KMQQtoYRYR2SFdodaAdFdnzMQwDpvaGymegCnVaaHupMbxHMimQBUL37RHNEp5rTJoqMQYF3",
  "key1": "eynACkRY7yc5Esg4oQiQAjZuqUnQrvScPsZk2K5ftJvZMgcFVwstQjLKKdKRowB5eLanAWJQ6vGg1GBAa2zLDNV",
  "key2": "2qsmXd3pSWupGivQiJmmBhNRqrvPfV69Au3gAo57wLzqVx1z7fzUKCnwJWnSotSB4ftR1twQA27cW3s2XJtR9Um4",
  "key3": "qFF3hRzzLsAFtzo3cwNKSUggQZvRZ9T582bh3FAcW1V3gJch4PrjKQF9Mddfr2KE3Cjg1G5gLVYxYb1Zqm4dDd4",
  "key4": "5ajFcQFWZdAoAv3bnSH6FtGmmeYbk5YXVsEYhDEr1Pnhi3GKgRGLhQHUVTQLZRGoyT6HfstMUEwF3FuPqME9dFJZ",
  "key5": "LMzKFyHFTryufLFYz4a2tHzbzhdQ72ghfEVaNTABGqzxsCBB3Frdqqkrb5E3zWM1a9ufsbzBde1VeJmznn5ZudW",
  "key6": "5bBA8YudV1YLEvhxpuFNhX6cQzKFW3qJcsR1ThXDLPD5BvvvkmdiVmY43C8EiUbRVEG26aCrWZWSHShEnrwwN6tT",
  "key7": "bC3pDc2JnzmVeh5SjatM5zbbx4Gcd4oibs1EYvYcDfR4enozKwTvPKTUY3JiMo1kVko5t6Tk415NuTXdegpg9t4",
  "key8": "4845Evzyp9GFWxQJiA8T1TCyv8WdEHquvxKjquSTiWfjFjhDTDrVEbCkPJ3TNeinkfgNcyUbbGmsruiYbNnAyut3",
  "key9": "3d1r7S9TNRsP8iF2TvLxxEu3eYgFg22wiisPDYxTqpeWNjHLTyV7aUmpVE1FTEAEWkntU1maPdN8s3NgUGAuFCab",
  "key10": "2St4u9rYCLWzFBmpR4KxEzqja1LoBfSexgU1MjyCke84D8PhRLLwk4bCCE5KZH4QTLRajbZcz2EMCbu4niKqifaM",
  "key11": "3ym8MZtNhTkmCBAZPkCBMkY6cP1z5vidGDpwNtuYDetXRi9sLx5pN7JxDR9yWN6oBf8RYKLhfP4sWaZ473PfEdcc",
  "key12": "3ao6HryKqjXptZjHx9yVAD6npUv73AhVhydDDZH5baXs1CSzqyvcnjBHjgp7Pq1o3eCBWKr3hYgANRVaQUWvi6zx",
  "key13": "47JVCbqNRuH1aFxjBbbucMjRUgryMthxZiXTXGFLLLNoMTvpaNJUy31hoRhvr7jJZeNbFD2bjPBMvKKe5Z1GQqsu",
  "key14": "4gxrj19guQFnAxtj1jrsS5jxcJTmXv9Sh1SD5eFnmf9FwvBMJCs2ohR5UPBEC1GipHqLn8NsXhLVQGQRSxtJPbDU",
  "key15": "5NYR4ogTvEucnQMYFHh38c57yHvxY2ZCjLKiwei6eofFDAjj98xEGzYxWaoMpEUV79Vhvukh8ZorQchN9WH2WEqM",
  "key16": "45b7pdugoE4XxDzXyXBYteRBDXA1VKikGhYCrxmMMQR3t99r6bxa4Yxz6ANFFhuxE8dbG2XZbLRSV443LBS3LNbE",
  "key17": "3Cta9kT2DBXzVHDQvK4viMgD1wWAb87Fj8YZF7n9SVNWuQVbq23y7sHY9ZNnam4dHSHuGad3mt9fUAwwMQ3dTr8d",
  "key18": "vcctJdWwt5zAPScC9p68QRhthQN5KDs8cwJ3CzRPfzY9iK4YPiDxHcZoSMoxGdvEt86CBN1xrRocfGiTa4fjMXV",
  "key19": "5fb3kyNcdoPdtgpoG6qzmG2PsUnDRtqwFZ7jn3K54d5HrZ7XtJiEVupFUhci6pwBY83LNJYgRyfgtorQbEiDcSqM",
  "key20": "3UKPjQLpoiEQcYjyV5fEU6KodDT5ggKMMmmQKt54AU3F3Sqvx18b2iuYhmLmNPpML4LNbmwYm2b7nPwQdz7RMrqK",
  "key21": "38TAk6AC9ForU3ehctcKn8YyFdQWxbJjBtRHFcywCJ6ehCuCDGmteRuTqo4Rc5FXjg4iU36gxB8v6T49qX9sjfx5",
  "key22": "5sbAfcVp4T9kcLeUB9SW7vpib273qmUE8jSyZ7QmFzXCPYTVcgWZM4Zss7gAi3pCsrupidr2gVuHPraJsGtvSEKn",
  "key23": "bydX1KdZnD8xfequWYX5W8fgZgvEqcLn5TtrvxbE1mGBDsnNosoarGintaWJ3m1cfmAH2T31DZga2xsEXPvxkCN",
  "key24": "4KXEBSBWUMxY72taPnLhfhjdzCgiJjocTM4QH9q9rWDx2Tdx2vX7bcrd7PVtTNkGqL7ichdhHVwuWNqGk4yJzKzY",
  "key25": "2DUz1RHLCiSFbFvWrQaCbR1zU2kRSxWW5UHtiY4NHZQwwpzyvTUhnicGRRxAdm4DVY1gisinTLmLrc632rGTAne3",
  "key26": "2bRt5K5orSUENnSbttTrpd3bWLXDktpkJhzSWuVrtmGqWnSHXs93YWXjLDH2MAMfm753FasrbPtgNJZ1T5byzfq6",
  "key27": "4pCPrcU4x5Frruzou6qpEuFg91EjTgqCn4fLYrX7fUe13ncfi2xyTrrT453k2TSed6QpKrMSGExYAQETKBAyQouH",
  "key28": "5Csm8V9CuEPWb4unqXTvv7z1aHAWHjePXaBXHg8DrRg2uWYRgwiwztafBRBwE5Ym1Vw59XWZ3xZNK7WKcyhwmi8q",
  "key29": "n5aZet4TJSSjeGfyAq1qru5aJx4SiWzfCzZXeMQaPEiidYZu89TBFi1XYMcRD5bkxgTWrf3mvwjMf8g2yDapyqZ",
  "key30": "S23SULwvNiHWen3PSdFMkVqtjYHVKdf1rSDsYxN2cNZNHaJ5dQHjZ87HFc4bZPYsGCcwU5NnnNFGj5VzfcjNzg4",
  "key31": "5wxfBUp4m8L863AMBn6y2kMvBMDbSfoJApTtNuvBmV5gzBQuECi787DWynA6MM4KKGn464o43HcLrH55j1GTAAoj",
  "key32": "4aaYMcctjrwDbapkNrmoxkZXdvKy5LWxvDdpnGD5rm1jSgqXNmr7byUUBfWfBpW7SNA6zjG5xRW5Xd15RNqX4oKX",
  "key33": "2YkW5CQKmdikdw8geRx32467s7nuFdvoFQ8L1J4bv78vLChRGc6n9jZNyqWNGxGM3GAbuHnDS6ChZuFpAPF85YSK",
  "key34": "4LZDRYi1fgL4p9DjkYNK7R4oDgycGvpj4RNnENHKZgax59Sbjaf6KLf5DYbnjpz9Fp6dtHC9fRADDNDcG6NbEra8",
  "key35": "57r8sPFFBPTbW8vz5GUhDAD9yPSCc4e1HnMszf9mHXwR9CJx56afygiNiAmBZmTDRrFvxENs42b2TxmMnQiWB1jh",
  "key36": "5Z3by1kfTsgKRUzRV8Wo3UgTrMyFRYxb9W4yWayDxCKs7acZD4uBjvFBGP4m3oqk3wesTGLd59bCUSsVeHvb9TEu",
  "key37": "3V7udcVZps27xzssefF5TcPZfPrxBT8xpkKrDn28HzMRfH9hWq9pskg6VwZymTs5DEa2JD3FDCznAF6u7MqrDRSb",
  "key38": "AzmPveWGLvRa3XZRebvNNFLq4JLZjmDDjCFHBFSzL6Epvq6AQehnGgQjiuM6KGHFMYqHeS2mwGgVutB5TnXs3AG"
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
