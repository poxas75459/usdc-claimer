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
    "Uq3HVnBLqD3pFiBQ3cBNm922vR7UtQNWXHqYSfBcB8wkmy1VYZzJ3sJYN6oF6dHpkq99GFwWsMb2cVXRDYX7q3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HD6vieY7w5XKBeBoHnwDV4PgEGWHsPwBKwHQvQhFJB36ihiLYUop3L9boP3bsrSV3d2HFpEnFQEeeCpDaBkVPbc",
  "key1": "2kF8D4cRKTc8kuR8b7mpC5hjWcRcojMxvayPV3NSabG9UpgYMx4FLBYziCVmHLYQpS4bPYiAwu2mhUTmeSeVkpy3",
  "key2": "3cd5A2jS3ZAEWJfXRZ5PMNpb1Vg76cCg8W4ygoebyG31VkUeE1EcSKUZ8AjvRNT7GQhZKjuLDHFpeAPbL7TGxbXm",
  "key3": "3ZbDWsNm4hiRpMp2id6fKiE9LHtv2wBxvdK33MYvvw511gt3dwfX5e4irMhhBjH3sUqTxv82i2CDN5skHQxVuaJe",
  "key4": "YzSVYzCLvkbsx2KaM1LwwJiA2Cf6eVNvrGL36fXqKN9bi8g1droxwXMRBM49gQhsxVD2cfuvgKvmnDNoiBPs5xh",
  "key5": "2AuXaHTexk635DJBF9kUTvxsiLWsTsaqk4Yuy1BQpTAkDbtbo74c47C616B2wtjuBqGdFBE7em1ZEzcNMsxNXcQC",
  "key6": "3LApqbhmrTFtdQpSymq79ehYf9x9VpPyskpxDorYMS1ZwMsWJfQxhmhEs4CjoKToAeZ7TnAnoftDuJNLfuJtVcTN",
  "key7": "3A8jaPXg2JhWczF67JfzVS4igFWWkLDgnTYCiAvpcnr5qSBLo9hvoMsWvZYJUgVVjCSu6BwMhiLxtUsQGbz6npVR",
  "key8": "5Y4GCGrCZsFx4aD9Naro3xkfNSRQef98ZzPXp2ma3wifS9XpneHhhy1j45mxBBjsdHMHkEGLSbp7TZdH1fTJH9fR",
  "key9": "3MSSvYsGFJKpA6aTPFoEb1ZCwAQL7DewhhRiepiyYwGFb2sTLQuYJQYncFyC68Yg956jhky5Rii86rkWZd7vbtog",
  "key10": "3Bd4UcXLYXZbxvK9fZeQ7cwog9nugPFNUMMGNf7RCFuQCnFEQ7vP1v1FdTMjS5ra3AdX5qVhFv2gcYxKtAyGbft8",
  "key11": "2k6RUbid4cY4QQL9aVsHfJXbYD2mENPwJfW1Jasnzvafbs4p48AyiFRqeJwHkxwFhc7nxrvjFvRiZRxnBmD13RT5",
  "key12": "3gT3o3rrP9NCtZanGkdq3QL6Dci351YhU6pkKPKGDdCaBTtRBG2Gr6UudUTRmdKRUvH2Cw2piEHggUtTj8rE3EcP",
  "key13": "5k49B5RycJvYzXCZr5BXi47sRQbEAAZEHjj8A7Fki81qJDfjo6n9xtyA9vDN4QhUAnyTzjgtNiA5TyaWpxeimkbh",
  "key14": "3sH3mKjffeiYKXibthQJiUKh9fZvdFzajxFCjidHah6YoMLEf8aaFAQ6JMZSCbguvwXMGvWS3tKvyrtSFJBvq5Jd",
  "key15": "5TyRckxSCBmFMAZCW6k1dmRM8jXTQgjntSg4XP5gCnKnZ1LXDyeKHe7X5yQ6m2JTRR6JAbf1vpq8AL7iRoVXp6MS",
  "key16": "21Y5xQSsArvZwLLagevbiTGdf1fFaLoFdKDBuJFWrhL7mR1SK283auGJhmnZnvX5rGBFFHd7SjR6eQa4iq7ySmBN",
  "key17": "2RHXDsy5PBQnTgScnmWqoS9WTA4KugwZkA7HYKbmg9BiZJzT221dMpR2o8gXaG9nS45ZMSfMGejhDqWjqowF9AYV",
  "key18": "3tFZJbaCLM2PTUJVauXBGHPExCv7gThzENwFxW5k5wC3QXPPXY5V4rdYDPRiQq8vSxqRSEYDd2Wf3RPX1BrXWw9B",
  "key19": "3Ns9PDPx68ET9PekXygNLMcgYgoWeFxhTQYFboiMFRT2rbJFEmYBDAnty8JJ5q7h8am6WfQBBLjRg8yw1Qm3ZBTs",
  "key20": "5LaUxt59PMW2R7eVe5zdDbyuQRPSfz8hpibGVP6vCio8bzCXCAtsANxKUzZVX4WFGuWJWQagA8cDLgc5M6XVoVkj",
  "key21": "3YCh1uBL2EEnNvS8j7UaQTCaXUQxGkpZHVX7Qe4BVCAEuiJsJibCcs9eRcMnPACqgXgo6HtAvFHAjVnhGf64T8tt",
  "key22": "59c8AvCdCYNDi3ucZvyyMFnLNjbYCe8hPf921dxARsVXvaz4cyuiDDtv4vecamq7j17HAADLoxnBMxE6WE4DAwKu",
  "key23": "3hFbGMYXJzhte8616YG99X32Zb9aNDxyE6128hv1Xog3z2FAWZHspP6hfWio8BHhAgmNB9q2xJSQbXxA37tsuwZW",
  "key24": "23ULRx634omc4JcVjoHfkdrzmwP2otxvk4JkV3PFWJFHPq2nsgb1p7kwAGQfx9PEL7GkyCiqrtenYRtPd7TSouiv",
  "key25": "fbXMtJqurVpu55YDQRnpdHE4nt32WKK7574wBKJELVddwRkyafFLUPkR8tDkxon8vpXSkQh1stgC5L7xPydV8hT",
  "key26": "c4dkUxm1NwcXzMgjq45d5nK1nsSAWguXsLe65JACUPtUw7jtrDEWUuX8zjQdv9VcLhNFRBoe8MavQAL7AhecBoT",
  "key27": "22Nd3EwkG7zQxxnKwJfqExJK4XPuFk4rCwzJHznPq9pXFfV3gzuDodFgW1TzXngjusgwWBi9kYoBWbdcNtiHfzph",
  "key28": "3KnnPWhmUamXeiNYheiPAKXauAfd42UMWbKaP892QnZCzCQ9oBUbL71w8Vg35HtyuFuxDRwhwfRdrsbscvob9kRz",
  "key29": "z78xksdwSsgNFTXVjCrQ9R9YbvV5L1JZrsRRUv9rWPSKjr4bYbFdXPm39fFBnwts8PYifL1LD7vKz6p1xgnbW5r",
  "key30": "2dvugYRvruTKdH4jFQQT7PNP89kn7jcDEuE4fFyjGVpLgteKPPfa1YvvwAXt4TwgRTngpExN1yYb4zSJ9EKmobt7",
  "key31": "2DGmABTrWZ9JRaUywpC1mU19KpojDhi6rU5vadasvACqw5J5kuD9DUsgdfw23GBP8mZuL3dgQ1tuYgCXZxmf5KMU",
  "key32": "3UXawcYZ4cMmZNxStQ2sFnnHTtPatEsvxXrc38joJYUyL2fMffXLdmo8eH4Keb6bqzzFwhNqP4BUCwapXa2ef1Gb",
  "key33": "4wtC2Lo7NPd3PMevtpUu1YDzPUFMXuiuNLik6HtrxHfHyozmGsD3JeXGyuHBuoBwnzVS9TuzadsZUhMyPwPsGiRN",
  "key34": "PucEDvB1mR2vyG4yiEj87tKnfSvKWTJSGPkNfoVTRy7sMu4GNq9TTF6Mmp6CS61kRYcaf13A1UbuAj7DUXkeV4G",
  "key35": "5VR2Lp866c743BQbjPrcvG8pu3ff6pbWrkBcHWiVJ4Sp1Vx6pPNHDUfs2oQRnKnvo5YGBUg6uJ9anmMYjaBefrtH",
  "key36": "3HKMp4nXg9LqvQ5ugFM86WjqH85ouoEn6369xa26ViLh7SYKfJ7mNMu4Yt54SUZpS592meb1jp3myH7cVq21j5fd",
  "key37": "6p8Y4iyhx26dXDaTMnryKWTYMniieMzUtBwtuKA3mTTFCGoDLL9Xyr1MJcxddRx29Gyinis5G2axpU7KC5bxFnH",
  "key38": "2nSymQMFb2o7rgnDQ2CqeADR4JMGoTVcfRnGNJhPZpqarWYhHU5mp5GDqae3AarJDbsGxLmnvEMLCvBhqAqKcJri",
  "key39": "4M27a7GQ8QZtk4Yb2ULpsJFLzFzRhx9JaKxpxmSYVYmtDE1UfQm6TTr4bqVf6a6VnY3dseVzVtKBP5EhYPjXnAzV",
  "key40": "4hdy4LLgY7JMZEB8vHVjjweseQYr6GQbbYVcUYJhqoQL9Hmo9LtPVrFBA5dhZ2pRcCE7eXWC5KC72a3z3fWd8fa8",
  "key41": "4MnUUie32vxYoybfry5KirchHpqNMa4M6WTonZYDVr5PDfKSosRRKDfSH9Wbyf2XQpfeCx1n3HCTW4rqHWTkZ5BE",
  "key42": "UWNJw2tQZdpPbm6x39mpiDaJmdhdtHtk4gFfrgaxSdbWxxGTHhUDiScH6v82faBx4GZsHy3hpRQZQcisaba7u5g",
  "key43": "3hMoJn9ZfDmtXW1iz1LxE48kLFeyAdm6Gi1A2piCPVJazR73v7xvrua5AskEWouWeu9Xe97jqKmwMxMsv8fCJeAr",
  "key44": "5yxrjZK9SoXoqpYBjnpmVDPydc5V198pPyCCja9iqzVVrLq38Tzc8Pwh1hxBvBCe1Qi9na54EmDQ69MGHYPaamq1",
  "key45": "3dFLGGwpZcvSUbzcmsGHNPTuFq9iofzSmByMLC6zErcFawNzuFd5mmbWrbrNZMLPjZLmCfhWGAagnq3UN6kEoySz",
  "key46": "3gjFqEMMdK66XqZ23AuvJey162u7vkP1VxXnnXZxt5yuoSqE63CSj7b4F7HsUpQDtZ6WUWZf4ceQmKLn345NvAMN",
  "key47": "43oe2ma5cBD6gxMwfszoGUJjSwgtRYTZHwuBtdukRtnjWszYHLej7PT3MYya8osWTpymAn9xYnGiU2zDbFZdzjXT",
  "key48": "G9iySDJ3y3xtW9qEFABeTGZ2VSj36YNHWFbKXQwBWYm5ga9nC6hsSfzYDEVtTqSxKhRbTPY26i9nwffAvYissbk",
  "key49": "5vQWh5oZviudPeiqnui8brP7Bo3L3c4y2VpvAAxmpujv5THWbEukWJSLnQw5EHPZ62MiAGydtVLZr4JiqcAmQuHi"
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
