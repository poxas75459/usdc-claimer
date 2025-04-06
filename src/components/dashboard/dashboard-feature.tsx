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
    "2WP2w1rJnQCRwVHnUCB15SEW71Qbg8TR7sGsCj2WMTHtTU9goJuhctA8QfGhkq8HXy2ujq7UDETm3acnozZQufDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27D8A5foPSFzHfpw2UGcPEv32SfuxJQspTH4zP1vzpRrfJGqAHUBCGV3dEk1A1RYZTmqY7zTPE8n3nZuwZUc5HF9",
  "key1": "4xHKRx9WtzS4m3LexpmupgYAPnMhMKfAKmF9UZZ3CZp4vRcsYcxHqy1VkLedMJFWkgDKhYEB6hqSkT12JQQLowfK",
  "key2": "e8wzJopohTaoCuYh8R7DU3cTBnXWqrDzQ5Fo6KAdd1uXHee4v7WbtZ6cbyXkYRh1chiNRXeEQPfQdXzD62nWowp",
  "key3": "2YMujhoa9RBehCjvSWrDnoyRYeNviXWViM3ZiT1WkGXX7JkAewLmRrsRL9n4RiK85aQobFmmxyA1y68W6jyMuQ4F",
  "key4": "VBhg8WJ39e1Uw6YE2x6arkqcU5Q5ygipw8TNnX265uSBRxeNpSGG7UZgb62JMfzkbFFY3Kzy7C8eFFEnxDvvZMf",
  "key5": "kkxuu2R3tFqLPJK4F1XMJwQ2UfRhy8XhAKaYA8XZpKT7TnsCLjqCtLhAhmLYFHwo2CNpoiLSPc8GbHAbJtieBk2",
  "key6": "sPAHdUhZYMRcdjcbaxvnmUBZf3BbQLZKLESSiadU11FG5c53Hz8VgYZYpLqPpZtzBKR7Vy4Uawf9aUZZovXSHCH",
  "key7": "2fM5nmCDujUAqJWttngxuqiTjyxmE4GVPguDkFc5YCtdWrE7gFLwFWNkha7ZvxYMvuMjk2kXL47KzUy1HJW9gSBu",
  "key8": "g1VSovBjopi9P6Eh9fTZsGZ9kjHFfq14TMB3AmjqCLpN5JhpGoQNgMRo8eMAGHVosPmCQVkQ4uAvxXZwSaZ3Fh8",
  "key9": "3w8FmyMkiK79P3A8Ynu5f5W7c19wYCHeB65YWjJVLwebYoT1ijdt4iGiE8gGUNgXYUSqnQ4ZigGjDKSFXPZBwTe4",
  "key10": "2WrJ6uEa3uZrTZwUeH7bPGg842zcMzWes4sJozb3cjgScYXwnZm9CgTTyzcNmjftPQmZ8Y2P5tHkpHw5116q3ugH",
  "key11": "3NrzCELNeT41GoYfQv8StCDbBjbtRCUtC8T4SDAa9iCPEDFAq4H9LfHn2AENcf678x65tE3DkvTw8F3Cv3JVYVdS",
  "key12": "5x31hsinwcH5i5VkdNDqMqPt2xCXV4QpAKrgKusoCKwqZDq6gXdDL8rPq7dRvNTQuUsQxyQRjdU2CnLZY6yFFH8X",
  "key13": "2xo3eHXHCTyuSaFNdtrnoMqisH8WGUmqiSEKgfsCx8XsCtEqqBuzWCAGBFLTs4SctDP2SkAatM8wotzHBXgdfBs7",
  "key14": "2NGDqiNX9aNg1sJsER6zhFUW343JUEKcshDdbjgaRwrPmFwAt1jY6KrgGy2mZ9jxVZfaedFguHJeft1gmCfoxaHj",
  "key15": "RiQFYzQM2kMUHSG2zKhUgLyqQB4CG1sn7VVKdrgFMTRihTJ5D3ig34ynr5hf5rUCExpuJA58eEFuBaQwt2FUfxt",
  "key16": "Xqy1bdyYPE5wkx8fdqDFwQGwA7nRRBciSxneTXfCCpqhnS3Dq1vvXBTGrNHWePWm7DJSLYCphfAsJsXEmUJ9puh",
  "key17": "4RKwsdLTVcFaLj1hfA2NH7u9YRhkKA7N7kjHmujDwqkacwi5VNGFeQGQJd4YoPXxKiHwhoXm9YXY65cd53raLGru",
  "key18": "5YnZTzDruY4mTYhFSTGcAtsDBs95uoTzKaYJqxBkrFy2huSveshe7GEPfAhxB42dtuqBCz7yKYkhWvYtg3L5LdAC",
  "key19": "2aoZ4ExpLwFbbULe6iQQ3Yt6TtJm1ptVyGqCZV2fD2LVwQMdAgiQb3JQPvZSbsWWZ2HnkW9J7ntNQ6uGWZaoJ9BX",
  "key20": "3eoXjTwM2pc3Cr4rVyxybZu75eHZDw2L3BUWqMXA2qRgFM1pfHr4k5Z5jweGkUbuTPSibhXqcsLB6meGKnqfnyVk",
  "key21": "49qes5N5ufmbyfEvgdpgKERa9YexYwSceMBE97iPpQkCXgCQyWMxoxPpNtq6d5T4qPU8EXEvBwNDuXMeYQ3Jk1oz",
  "key22": "2iZXrHPnhdAoHWamCPqbrzTjEzmB8XjTbsvALpanoHQS4FccWAwG6u4K2sxWpWxjCGpPkTSVZzS3K8xhHBzySbNk",
  "key23": "5zUnc2VT5BLehgHcwHFNkeEoeBgrMNdEJL8MJ5fedgmvZRasQagN425FeHN3ixQ9zUd6fQUH5HQw5UYSuAbMD9Xk",
  "key24": "31pfyx3v34rY6naZZMWd9M5Va24fMcuoijxFboVumzYMRK66iUvQSr4FDCA28GyYv4GxJGaNj6J97aoBVjoYJUUQ",
  "key25": "2yoSTXVrbtiCExraPrcE8MkU6HLDWEma4pLBRq22Lqo4UV32S7FxZC3vNGRtdXDuurJqYSqd137opLddsaY9jVgi",
  "key26": "2sp8DSXxrF2peuVVDXKvseKTakVAjP57tqtmzce3Y6ry4CeTJEH9c7Rf1jeesDVvMaxE1sCTZnyYnb1cjksY56pD",
  "key27": "3SmL6aacHfRATntiwBFwo9GTRWKeqMH7q7S3ax84eGWpCCjKSVHH6ZQFTA7Lp3AyUTtgHUgpfGZSHniaVrt2wrUX",
  "key28": "33YB53sMZXjTqCPEykAVPsxWrcu6us9Wps1KYVdEh7Jc7o9Xdd5Tun74FA4HZ29e2u9PvuDzETFyBjeBdiVKNbHe",
  "key29": "4d7xkpdqemB1pnYRHeehcsjbFfX2KAXtMAJArwaydAFAU4SnG2MCPWYFCLBu5aqJ9j5wMKq5wn9sAFw4R4NpqzXU",
  "key30": "QVn24iAAgb8HmnyGY1iGfrTP8EFwVaxrEEHqokQnLhtogWfRWd1w9mAjghHrmWYASKQxFfNTw5ayS1t84bYZTe2",
  "key31": "Gm3Wm7SvzisyzqXB9NhbwaA68pjDDAB55CDTEhskzqWSGFHf6D1WWe5HehBp2rodwzVejgWj5k3E8NJgJD8FiXv",
  "key32": "2j9wWh56DFVs9s9PaqJuPFxiCe53krvxRdK4A8ryheCgaZca8McescToPb5uX5nr5vBRTaV3eq4DR472FagH2Q9g",
  "key33": "3SUikj7f1VUJmJXB2TCFHYv3btSdda1Ps4S26NqcAebDYxn4FELHwDAAYUPFTqKrJDLVWfoe51Ym3useBRqRRcgK",
  "key34": "4WQ1TMsB78YJSsCtsTYqc1beVn8L7FMHA3SC2LpWSUGwK5EG6pQnVfQaCZuJb4tgMqzvE1Rn6CRDsbuGELdVfJHD",
  "key35": "4JL5YPf923ZwSb543fV2f2pMYYSndHWRpZDbxcmfJD484UYYZ23Ed2v2gPiXfMBUKBe5H8L4P2bVc9eW7BQmoekj",
  "key36": "v4HFe4fUYsVgy463tCwQnUiGXqr3FoevErphYBdSUDFR9nSvaF5cF4K9yB3mqdQXkQUn9ei8nPyfGHbVHH7tbgX",
  "key37": "HAAogJ5Pj6MFpHsiufWXYMwjLxZtcKeXdQ1pLh28XLbfa9KWYHQ6AmbGmpLWPM7x1VJRncb6qxAdTVNtbByKJyz"
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
