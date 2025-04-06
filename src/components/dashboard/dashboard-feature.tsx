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
    "5R4JEUB5vA976WfPwGZ71DH9iby33DoC2MXWp4LBPeyqtek3Zq581pMshFYbPktc4Xf9khL3XGkt2SteWfBEMCQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S3cCMZTjPcscZWjYHoaaSUmHYxWtWSqTbVfMzVa7kuEGTwFs4QYCGDC2cUiPKsVLzgPQZyz6ghLMDRBzecqPi2b",
  "key1": "RTiPZWqZc2oBLmsMx84vRWpwfkVJcwexhtNkJfW9mhZsguNhnoLxpQa7sCoMiyrpz6pGpNxbFj5nG9yL61gwZXg",
  "key2": "4cDFE7kZXeVtRDh7eJUyxHoxyTwgLFxtMChvLoLTXD2GSxFHYLpVFL1a74LPNQYRoL2xXPuSqbXVN8xFzYubc6KN",
  "key3": "qNNVshoB6EvzFNFgKU344yxzqsVCKXCkVsp6GcPrLoEAiWju2ztFFcyntuyCG2Fr4MbPK6fK7Lp8AAjjzHTtSiv",
  "key4": "ENqVAJDbaY4z1zH89ppFq8Ztgpbj9GV2kbiWufdbpdby2ZfL7tiaqSCCe44wwQ87i2VossUDV9Tok8M27M6SHag",
  "key5": "5HrU2SPaAwHea3JoGJ6nJ4ohvaB1P8KztUymZHgCa4qkmp3udVAnex38rJTTCgHtTWtNovjkq4gNXBKrVmL7Mvbw",
  "key6": "3R2rjiC3TDkedzVuR6qgbiVAyEy2i67m5ZbBbjJe2z4hSADgqcLcSiXsCPAcJqpStV7yVwAjm43n7ShqHaVn5b4u",
  "key7": "4d6m7tp8LXnotiBbCNFNinjyUnWN3ynP2AER8bbH8FoXUVqnFamcuxt5iZ84jEF1ELLpsS79fVsePnCR8cbSX5ND",
  "key8": "4hwHPi7ndHKvRg3atzT7hFEgXYzZNJytkMqmZFFVD7QX6rM7j5KqrCM22yhsKDNNia9RqvdZFY4Lf4zmZmZoveed",
  "key9": "31Y9EXiE4jNtAkRSRafDiksf83QmSdEN8dXc3Q5j8nM9yzZcLsji77rHVTH5f1MZjk824DXqpKNrcRRjW6ZQb6j5",
  "key10": "2omT4UbNGNmbv2mi56eMgc8vtCxV9pX2MWbizu3pPeHpAUukFgG85iqGYA9sA3ZfVdwjx3zV6cAvm98rQ4ppXw5d",
  "key11": "5FtZPftMRe2FWKDjLiStb9iyL3JTutpfHt6hnhBSnD7RHo1pfohBRgN6LbLRuWKCJrscR5eDa28ym7hnKJh6rpwL",
  "key12": "K1cKFrNtdfSqvdRjoctUHVjCS633AfdkbViujDnABC2rvdkowMMELP42eUaxJvTbqxnBXR57hq6jLMWDNkjm3Uf",
  "key13": "549vEsNhow82m5vfQWJ5tgn8DPN6oE9EKq73PXnW81ohwpqSXN2vb6XrWVUwPLr2cRi7Jr7rGq6C1fVcKWrk6zh4",
  "key14": "47S4AJc2MtRPsZfJieM8Y2y9LkczqkkfCi2WKY62uykey1xozRpPi6srdgBj1L9vyc87AZv9aVeVAHJ8MzjKVTM5",
  "key15": "5opCamZTXF9xubmZiFrepq6HFhnXEArLwornMVtuVX4Sqq5hWHbEsE1d4qZ7VzgZJKcZwuBKFHmF49M7fALtFHKR",
  "key16": "58FyXLn5AJaotzCVnqxWjngTDjW5TMEa1jADUE5LyvLkikvhoHhXPvHAUPre6cLwD9C5dVSyVvQtDivmez3fWuVt",
  "key17": "3LFiShVbui7Y7qpt4pQX7u2ki3Mjmjn8o7Fxm4VnZGJXTjurbQYmw2EUJRhXyibhE65ZyxsGTa7Pbxp8VReiEmBj",
  "key18": "37vwyx9MqtsQNhi6Aij7VzLLCbY3NNovq22HK9Ne4JTyS3vD6CsNzj9958rZphQbJX5MfG6TY4rkasCPjx4gUwNY",
  "key19": "65Q1xgAhBzEBnfSPbvAoeyrTdGJcmgUnYrVQzZbNtuzbGdcpospRB8VGGBEq1Rutq7MKsZxXCg58zHXqafKc28Lw",
  "key20": "3UUMK7YLKPno4mZadQ3pHacCjXsAD1xKKhWFCd7wRpMPk5yXH2jevSDWGmFwmtznxan42unJvFqW6xotBLbACxAh",
  "key21": "3pmtDfi8aCPHueh7XiZrEvXtC8rp7s4k1pBBkyxDFyDH7SUfmLa48WJX9NfyEjNH1bk2zPHasd3ZChJpxZjqMzqW",
  "key22": "3EDSr4hig8xwFvm1ftpKhgLX2LFxGozdvRVqzPNKUANWSjh2mR8djVLFJUGwS5336pNpsjsyL97wnxh3x3YFxEQG",
  "key23": "4sw7dAHwbCXctJRYdoDADLHkPFivmnojgffHN27DMiXo86bBid6cSFPksau3Kd6o3gsFturBgDSeJwfjKQBWrKi5",
  "key24": "41dfZ58cRMrVVUws5AfH819kK5Z4a2jZGJSgYWUoLuSePzbjDEDD4zMyNoWTGRTqzrM5osCaSeLWbD9QzLfU1nsj",
  "key25": "8yXKn7CimeficmfXgN2kMUBNRuRasYwC9YSPgFR3VjaKnYFqEJGiCBSbGbPAnrDNMrficKLKCJFUHR4PJHHtdjj",
  "key26": "3iZbxWp4HVTQ6Q7LqEDV8Y9ME3eZQzANNYa53qVVvFYdTnJy6Rptk2HN8p2Psw14HcusBEq9P8xKSCSFBR8EScDB",
  "key27": "RRotLuMKy78jduS1gN3FJvZGtX8fMsyeq6dDKRUiBxdhZdXHzbudFcAkgYB12vkoRHcYKYi2nnoQQYpLkWCcwc5",
  "key28": "jMfpgezc3u5vuMPVVDyS2sj4VxdiCf8jhH7zrmLnewK6oobpKycwtQyLNR23NqnRZRUWmw19agPiR6rq11Ho7JZ",
  "key29": "3DHorbdzmzqEwfkeayaJHtVgBaPntF71QQEQSR4YfkqkSX2gtxvQ3vpdB5U8aDi35qX2PekLrnyaMp2yp859bBsf",
  "key30": "5z9REQuf32WpU9rftXSToN19FN9CEzfzETQ2j8FAYg6o4utiSAQJUvh7rcLTBx3ykzQCGMXZaBW5qS47BwArwFQt",
  "key31": "5J1UyUZ5bEi5hhXkUeEFuStnsVG6xNrbZdiEBLqYobV4BS5HHz3mo7ez5YydZPJAVcRzUw8cui3R9343f2wckF3G",
  "key32": "2QjxDJ1nTTor6XKh5vSXJEjUhcarx36bLDLa1uGjhxdqVWuHb6BFYm7idCKTfMbZwUPQdYBFfR2xnTDs6beKLaRx",
  "key33": "5meASFopG8YtgSLtGDCNiYdtMH1owtvuKkkGNFteVyaTearf5mVdpYHMuCk2soLcS1t6dMGmfj6ayA1a65YwQ8cb",
  "key34": "5Q7TwEpxo1ui9UHz3GpTQe8ZinyLXtJ1npAASjs7r9tvBAt8FN22iAjaHgtBt523uahB3qTYUSFSRABAAQqSaGgu",
  "key35": "btipCZxe9TtF15RHkYWsekG6UJUgNtA8qrcNmqfrPC6U4ZSBH3BYG4XS3v2w9W9ivPCH8CuyLXDayVoYJLoHrRu",
  "key36": "4jHBvVFcAuTKu4GfgpnpzF7T8ePvDJegJauJbg5rLYfrJUTmemeJdysk4ivjja5sw56Z8dg3GB5HPyn78HNK1BJs",
  "key37": "36ycYgGeXQGFWg7cAG5YMoyFA41uEsybeTSU2QEVCLTqWCpX5cXEY1JW1JFugapJ3m2dwHJJCDcSv29pAd2SydD1",
  "key38": "3scS3ZTd1vMnZRJ9KJyiyoJ4doTSNd3fAp9CPfgxZenPTVsBK4fg2QLLxn832qbBHY8WXCB3Mm58EaeCS4cfzKY9",
  "key39": "2gfiaxwWXF5kbrNWznabdtVdcBuXmXphHDSzr4f1wik1pLd3zuGLM1Hav6nkTHsdGzNZJE3rN5np58VfPTeDg6GV",
  "key40": "5pKVV1bNQTknzc9TPTPru1gpCtsy1KXbKZUWp83ANW892dcGkWhV9poDU5LTVAiLjHLkBbTuDrfQDRWfbDbp5jde",
  "key41": "4P8SPCdzcUrAafi1v1i7J7UcLrTvKLk29ffKeRBcv9Q3VWD3UbiU48fA7rHWZGmAecNwtVC33T1qrdpZ38z7fFrR",
  "key42": "YcFgtw35nXwTCTeriffkiMbfxieNqaLhcu9zonXUh6BZwZix8pTsS8iUEnx96rSUoz5jf5bmW6orqT5tAs4NccQ",
  "key43": "2TjBGEyMyfq9Hxyh5zVuxT5bJqJ93ZNLrruhuWrCDgzefjabarqRufxJpHg59fJShZ3rtv3uY5L9SuLMyk74tSTx",
  "key44": "3K6JdzvTzKCAsG8QBtNkgkxEZe6nUVD8fivim4iKDic8vrk9bJVJFSentnAAtUWwA9Qi16cZe9GALrEpmsvAsqFK",
  "key45": "rHHoMWB1wFCLKm8kh9duHyy6rtKzfevnvPxV4qT3pMAZw7Xd5a9S4YtGsXMTWVCeG3L7vTvpVVGYZwKr4XcLbeP",
  "key46": "4ZrxtsuU26E3UJPSTgL6KFXHjjGZymYALdV2Jd6JhVs9z3XuKHwjS59qCLLg559r5JrwZsps3XsgKmgQ34P33AB1",
  "key47": "4c2myTHpnC3ArWfxsZN2fAz5RXDbC5KAfJ24WsbYSgr9ixRpgMqeeabA8u4aHp3f2a17L6w1NJoP9mE2aDoF47E9"
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
