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
    "4sTzz7MCmZEn9PZcw2nfH8VYF6UVxYyvVGU56Tazkzto6fuEtV2XimuM6tUjzXSLGxdCyRPNAn3XUM2CzGBjbaYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjHSQ98Dh7GrcKkiDAeobxMzgLEsjfF2cUBEDcvjyPxe5No9KYGN2CCWBBji9FS6B47BQZkPCobfvX2Ubjbtipv",
  "key1": "4rtcbwH21dvF3EtSt8WD1djeAdREQ1vZ2NNh45pBBztipFsy4otroo1dQ8ANkc8pKaApVDCSyNyWr4UDKXwdDcEv",
  "key2": "TGFTU5i3EdiPcQJsgtM1Sd8RjPKsdzcF5aTYge4LrzhE2VQ7qdqJLU1x8utkhZDvSamKeyNKrBxKF42LCpdLzE5",
  "key3": "2kg23C9rVkNWYWqV8471QaVRkEA1dvyxRQbhfVRtVYgEcd6dU3hQmAvvYZgc4mBxtHW7bB4Kyo9VnjDGCXfCLtQs",
  "key4": "2A6bw2oMXmKjRcby1Jgwhm3muFcRiiqJr4wYrNHLuTuRarZK7mmeL3YuJwSdLqQp6kJopqfWKykvpe5e8SsE54L8",
  "key5": "5VKpFEU6DnERSLTMpyvTCwbjYo4tpoqXoawnP146XXL8Y5YRTydumVq8uptsbUJj15P6XMzxQwEYb1ENSdGqGhYq",
  "key6": "DrBUuJCfT4qkqbVk8AfQYtRTXL7Skw7BywpFb8GvmH8rcihBU3qTvxTreokMeyo7uKd8c8HY94EWcM1KWox5gpj",
  "key7": "2h1u69FPtqyuP6s715QHoucZ2tVVYqPLWjwA5S6aEQZv9PdtEKeaUiy1K5Mb9MxBjYPELVjjAagwVd9BHK1v3vPo",
  "key8": "5m2q5F7Wi7HnEaoRux6EKk7ueVaccujtGqv4L8morxroJSG4tRne4xBXBF2gAf3rmVPatafQPbmk8gNYgF9e35AG",
  "key9": "3QgmC1sWYhoBwRfdqNk1ziEdGXFHTTcdHhZ9BbiT6Ux4kxx2wYW9bLqB5vCdjJkzj4cCKYWfFfL7d8t4ZEeoViv5",
  "key10": "4NHRNgp3No9iR3x5iRwjG2JfpnDDxLvkHArJMgDMVBWhW2MWESvZKyCpedHNed6QSzG5cHmfB1q7i5qwmtfkaYU",
  "key11": "1yyv8fDgPTBpoHnoHr2EnY6J93GgWba9mJWG8PCZvAjbemE9myPwJm18kDVqKz89qWH9qEbdpV22K41PFtTExjv",
  "key12": "5hfzxMStzZo7tjtJFGiG3SiY8oSFyBfrQgi1EQXooDWdsBHZeLDyJjxVyRKtqjfbpNhzTYX8gDeuAZGBtRdxQi6D",
  "key13": "5rjrns94Q6LuPUW8F7yCjApuCTrrtybRENrmvxt7Ar6MHyHvUbjpe8xSsQF6hgQtvemGHuYx86TruT1YftaHF8Co",
  "key14": "3WyZ6MJ7yDeymHR5ApxhH46vgpkQMSBnXmrUhnFYQAS2shWx5M1upS7767rhxFfLTadBu1hVb7zEUj91MG3foxAv",
  "key15": "4gBzpcjrZAVej2jTbBrbevxkrw3FEqaF3SyjNxniu15YLuPpL47QnWsyEBjHSgjs5Qg7Cm9xG9w4gzjFL14SyukM",
  "key16": "5tU6MV4u81zdeoSpvQrmGFjT5pqBxKd3aWxxemL1KBXG74G2CrJdjNQR67d44VqFKDAJCsaf2xjWoqtgKjNf6ZHp",
  "key17": "noBLw1eqrG6XnC2aJumWXfCyHPHhsfkFgARtjFRT2iqB99ve5oaqZUSGsYwxAd5Zw9RzpYraJHVRLmfMbHNDt5o",
  "key18": "2xukrLkN87iZbusJW9G7c6HbkLjR5rmYUy4K1JyeE7sFrGRq3HvaKXufuzrxidR6VjYdsez7cX7NT4VLaVUQmsN5",
  "key19": "2LesQyUwHG3zCTad56vNHR7etKoebywAhexrCP5HxQdzaSeNyzFb9oWEiw9UiN1NWdzYDwrDCg6KPzSGrpXtK1zX",
  "key20": "29UFJYFF4dqP6Lgmzg6KLacHTRoDr7PTSZrBsCFYRMSAthzjwkKEBLsy7m79FvWGVx2X1Md8fJ1dUf5DoQyggYrS",
  "key21": "2z9k7yAUszzLdTRrUdSLD9dUZrLFSn2bnjbGi4npQi6J7cUuHV6fyPxM8pm5iorJsXXb61hZnB3o6v3QAnLYgWGw",
  "key22": "5J7KPK9tAXmhBBcXSd4ukFxpkmowWP63Mgp2bcmVn4z5GyFGMobi9vxAeyLCHkZaLrB3nQYN6LD7YiMB3dywDT2J",
  "key23": "3BJR5iFVCtrXN4dg4n8suBA5byKX4ncJ1BeXVn8wXqbjcVTdy1r8DQTh4efteFWWNEoU1iGwZ5TUVXVrCcD18zcX",
  "key24": "3KVkSoKMyo8BaCg9jNJrtCDRLGmJunRTu8zLM1qa849mFrncxmNv6HvZbAztHjz3MRL7MV6bxHYJKgyVs3onifng",
  "key25": "WQjnbXm6nLReS6m2D5XLhnFAmNJUi4644Qf5t9e48x8MxNzvxS6ksPUAwU4heNnD7EUcfzzVpXskv6rf2YeUpYM",
  "key26": "2yXzZy4DdcXQ7VhjM1qjkmeLfHR3eYcN9LY13SYHBNPChXtauoWCF3VjAZjSjYMhSDRpSS9nLUnFA8jDMzsUPUAM",
  "key27": "66L2xHn9VBkSLbNK71i6T8Hdzqh5NidAf97qcEpB2dua61bnCeKoJtaVB95r22SGjD6TJkBcXwWU5uTYQ1t7HUoy",
  "key28": "FGjfbCPW19kRy8EX8D7kpdNj9cJe3BzYREQabHVE4WgWZNrwJ5nUm6ukQ2L793KBSQYaLV5LHADq4rNuntJKzU6",
  "key29": "4ML7RWC9K7sqxQGr7yWKTZLmcrTjbPJXyoEN8un1nqDwQFJZ3uCzNMeLcDDRwTd6k9jK4jJhks85zkqUZiRze7tC",
  "key30": "5g46kPxYXWf3C8FNKFJ6ms8jGrC8mCqgzuyEctp7QyvMb4xtVZreagfAPUav8CHZ1vmTgrb7CStRPXnWqEX4pf81",
  "key31": "2j4h7UJTicnvD4Ku1YnrDiY2yQ8bpTqiMoY7gaqmkQbkVrmebxTe1z9H54iqmDjBv7WP6qQ2tAozLY81aGhfYz9y",
  "key32": "5Ua5XBHuW1iGbtsYNbzUveKPgwVHR6LKoUoamH6odC6inxmKsK85op4kC5AxR6VXbeAWis5mvtTnD7P5WmGWmGpc",
  "key33": "2vQc5h9fmMcLwPZmS1UmtdTm2mu5NKcr6nq11ncFBhAf78W7tZoLSVZGvFaVfe2dromugBQ3V5vgc6kzf17p9tNq",
  "key34": "652dTcY2ygidzaTiyk2gNxYvLyvCRMd64z8MoPeiqcuxkVLfDqRK6mQqtCkcRUdV2BJVyndHdTi4DVYzapSCzu8w",
  "key35": "4ANWiGC8tkPUm8CYVqoEbGkQngV7GzBjnR2Py9jMSfEXna9LEq1F49pnfmcXS6qBXe1z5kgmTKNTnbpN4VCKRnic",
  "key36": "2ZXdfLmGY1V8usRganxojXpqeWbHwcynagKiZTpSGF51RoqqwS9Fz87F2w3xyRvP4JamXHGacWnijNoe9Bd4KnUe",
  "key37": "R4vagpYoAPVV7mhvEpA8n92LhWk6iWRmdd2rxS4gou6mjyLDxppSQN7HA7cEHkjCah1DJGw56eHjR4G6yyj2kPz",
  "key38": "5A4TdJkgJw4Bn6k219G2ztS4vX31i5q7GSKMkbxv7vyMSGSEhoEcU8E9Hk4PcDmGryh9xKEi9y9ajKszeDUcKBVq",
  "key39": "3sCkStLb7uXufFXV19NJeD1pFgLsfjdcufxAJJ9AVbzHKYSefxtxHdFMZJZvqxeSiFMTy76Lq3xH43UhzbeNZj73",
  "key40": "5XSPgcwgNUFWWL7qKCeV7m5HFk41iBG3cfc55qhg66NpWm83kEJSHUY32ifdM7Nf8EPr2vhmWoRUDyJvxQrbQgJo",
  "key41": "5LUB7k5wKEDAqqVjtks5bhBK6itWP2Drq3iBbFTPSbaWEdzdLy2XZzSyUiC9cALbhtHAJXFhqikQ6J7trobkoMgr",
  "key42": "7PqhQNATWLj9ECCwQhHanyP7fE9SAVLHXNvb8qodviJhwKeNFA46Gee2WiLWCtpAZsE7hGNax5kxEPzEBU5Dei3",
  "key43": "qf8zwyXTavgMWqfma1mEsPHbbUhmKJ9ZFngm7F4fzaSZr9jDm4nn84zcZ7Uw4Lq5RgUJNRdJkvKuKus1wyc4y9A"
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
