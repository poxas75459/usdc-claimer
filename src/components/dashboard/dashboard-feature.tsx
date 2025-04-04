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
    "4Sdq7z1xkJPTQaj6eBMbei2xq2o7xbj2fzMhmiTYRztQCbPQGGnoQXLYsuYK2aqXdya13FhAbuQBXDbeKcFYtb74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sg7avs3c6q68LxcFqPr7e3jGvqUWQVqY38ZXiQZB8s7RDsQMkWGNy5k1XF88QQpn7dFYXzLoZQpG2bPerBbhHyP",
  "key1": "5cogDi6RF2yfA6pwc4yCGGyDAvbKQk2kJG5cUeJKWS6hYNxKqY9azPUGar8ajh2P9v7j9dkwoqzXHhK4PAbmtLXk",
  "key2": "3fe5iMXYEujnLSXaXTnmTKzmhCnG6SaiASNrCGUwyWVkjVgekNiygbqEJfFatTQq7WeWiZjYWbt8N1qc2tkAajca",
  "key3": "5PyMsyVNuEsnMPWcWG6QyF7ZazK2Y1eQauowpb1yhHyxtcV6f5qUjNB5i2d8s5DwybZf29Kn9d1xsvFVrzAqEq8W",
  "key4": "3cyoWGuvxC43TgdjDCCx9L2Xd6n4grVx8ndXXEDWUFvKBkMVkURBqV1DiPkkh1CRWbRritrPgLytzYtnvStyHo6s",
  "key5": "3VMHhjGGHqdqwKgNNGv82ozziKThvvUpRw5BwvZge5nETcuhYPuvtjjV3iMRCV2j4j62XKNLdyJwfmXQKfo2Pvvd",
  "key6": "5853HjjN1sNP91S4BxUYGkVb9weiBXPmzkF4GxThyhu7fFBAicFD16eRZEpuzGxvzajVyRUymowjmnVamWwA8bu9",
  "key7": "231cUGQijLdDLtW6gt6knWuKCc1ww1LYMDtHntWamjE68TcHbG4x35obVPgn9AnrRew91a1jxGLGjDo6VzC8oRNg",
  "key8": "i4z8eembraj5tqFxpkxJRCgG4FeHS4MAtwbAcWNj371f85KRtL2FnMQYoqFxi6ffVPaLJCTC6xekURCJr3xcyPT",
  "key9": "3ftM2GML4HcvkwcMqjhEweMNdWXJRaSojn7iogaAj8uk6Z8ucbfgqqtWkHXKNuVDjB8iEPTBfzZV9aWwEEkC66hN",
  "key10": "2gy2nCvRFaWiaJtPWTdY3qYbUy4xSwoFLJ6wM7utrccy6sU2FWjUk2hRuC1DigtHQjtgSRq3qY6hFk7HdJN32K7w",
  "key11": "5nfFGAjrsTq6utYoSzFDRKhX4Bv4cx6fc3J9k2d7h2pwsdikLGnZ5J1W7YfwEKb73D6FSNyLFLWKw6HXVL9WkisJ",
  "key12": "3pd455sRHTCX4GkkMYmdiSGxh31rbrTEqM45P7BSR9WTkQDXY68rSxjr1EtLLedaDoe4oLpg7VPPUSxRPkC2Zf89",
  "key13": "3BB8eBYwhcAaX4qhyjSPKTxMXg55uNW6CzaRxAK1ShMa9YRs9WrYYLwZKfvH2L74BH2oyP89J3T5rCCqxsVRk9y2",
  "key14": "46GzCVg3rdAyL4ZiRrjtaZeqwH9K6epwiipX97LpEYX83zA4KGwcBkHz7g7vr2yHiZ5vg19WhHJkogDSfMSFu81u",
  "key15": "5KwKV3KcfHhLHfub9XQFUvxUX6ygBFCKA8aBKbpuU1HqDRsaNvyfarBrHP9eCdmgGoFyonDYyHqbaBgFRQCxxSRH",
  "key16": "52ktYRK8n8CViHyno6jTRYEF1J5UaLtJ43ujMyuRc3uUY5sMxpsWWug1VHSA7GSR1Poft1tbpyhB2XM2JvP749F3",
  "key17": "4VdrMB9KDhdrVJTWUGnQ8zduG1BsSFBn5x55JnRkG1tG1FF57GcvFqNdpDZseSbdxdDG8gqEDiT7K1y4MR9bPGCc",
  "key18": "3M67Duv6dfgyanwdJ6aPLAg4HfBHbkN9246XyyXRSVVirXMqnWUqpdVozhiQgERxy5vKtdYT3yiTiMHeTBK5QBUj",
  "key19": "5eVrGiD5gVA4T5PAySfW2w428EevizErQFfAezwcS1HjJ2HHqC9QuHWzDmxE48uQeZUnsXRmF7aMRRUDj2vQjyjJ",
  "key20": "5J7diuKtDdfoujbhqieN2UUo9kpAMfRwubsUff82U94Cdo1pQkNG3RToC9CeHzUPNYjBvmUW2UGvJQC7nAWXGPLy",
  "key21": "2ax27yfz2Mg2WrusFXUKMxCwE8618fcnW2GnH52PK4eK8tZY1wW6xNZoWAbe2ZwErfjRo4NH2uTTpSBWGpwbdjxS",
  "key22": "u2gKy1a74srwM4U7pErpH8M91WmCR4CbzHuEWyYn89jnKPMXbbyj6DHELAvJMYvA1jTZn83PcNgWgYQ1DVXT83o",
  "key23": "67EFXFBixdzJVLJ4JPj7KJYMKuViS8R2z2fKBqKcSDybYDbisymsBd1i5K9cMBRR9zMaKGTTfyUqBcsB1NeULUxQ",
  "key24": "4hqHaTWWBmAw7zLiBiX4CDoC7vKcL4NGnyN4bpnzsxpvxka1VPyNW81hugwxwqUimNbEExtou8FmyaLTuwAscUvm",
  "key25": "5t2WhbF91jfEbTkzk4tHgQGfCYp78zqkspmKe1vPRY9C9d5pRV2WUjL496dHr49NFMbpZ11zj79GtKxrryVCXYDM",
  "key26": "CAYayjodqyNzArh3NgMa6PiAZuaaS7FQkkTPtrJCzbXGdmFjFWZySkSsKtmfew5LNf5dDhejWqcDgGrgZahTvBQ",
  "key27": "RVDPhkYwDWmVUxkty2mmsxv6jsdhCCi5KEXJi4V25mSKkjpbL5DSXxNSMHgRcs4j2KYtSJcDW54h78Bhe87kbR2",
  "key28": "4jfZyU26jrz47iZxzyXry39sjJWYTa7VG5oVdZUyJizUzMjmKWYhNoMkGop8YzjUpdj5HPiNm6iDMnNPmLmy5F9Y",
  "key29": "2MxzCgEnSxPrko383yWWaacytg6oJcnisTFuDxzyBnYNVEuq1hiAwjkZMK6eMCDdmPZqWt7Yea2oiubtCM36nHsa",
  "key30": "2ikAWr7rcKK6n77mFHL4qtfCcHHFvrVGDFjDg34TZjpXLCsUybfq6UmfeZGYiSusCACs11j5M4N4CEtFSv4yhL3s",
  "key31": "2PWidGv8RN56TvutpejovTU8tvyVauT3AwW11YGG1gPyWdQTKxi4CEc2DjirmVLg6ajmY2GyGeWi4RaxsmA2vmsS",
  "key32": "5cRZ1d9gMQivavx45kxfeyxNHpDRowW9WvRMxkCWWDysukWRdCHfbsYVPQmSzDyQygxuFLCKtRJFwExR7DYmKEuk",
  "key33": "3N8n3b5ZJALTbjPVhkYcufecndP4cYaHga48o8LKfxczR7hdUEDx5o8GQMUQcpQMAAvADd3LCocg7NWt9ESef27g",
  "key34": "qCBdeMWbmU3mY5MhGcWDdM4w6vys9SfSYAR2v4mBCmWixDyQuuwi11sR2pxa1hzavQ2HNXTW1C5MYLH2eC5CUFy",
  "key35": "jPHKXpQr4qMVWNGDd4TAnr5SLdcP7L94VEtdAxUMUXoD4Smmjaa2TWPR49vbpLfS63UyNHvFXsdUJebBTNvVZfm",
  "key36": "42JHrcKPnw6gBXqum5bwdBME2M8tJGHz62ghLH5ky1KixvPoREt9i9zWH4PXft75eXWdEFAYh6kvHohYKSBDy2EY",
  "key37": "e6xk9GshJmjFxvbGJ7sxswb8wrKDEBWj9SSqXm2iszsauaFnovxTawRw8eMMyKzHPJTZtrTUAoFvThNCuYEscs8",
  "key38": "4YsniZHSyqSewwrcFkd7zvXSLyCxDH7euRVgnHnGmmAzep8iq6bvhnSpAjfrDjwSf9tyg5dHLBxihneDSt3jDsw8",
  "key39": "52tDAJnXxAAhWsD6k2Rv1JNAQCyPBg1TCcvMiWJUc4qneYDBt2f5FoRX1cjPaHMXTH2V3BRVCybDaoSJvTuuyHjz",
  "key40": "iGoG7pGSjkhpRDSmDQwckc8qEehj2Zrh738udjGvf9Rt6umq5BoK1U7sBvyEULGZdYMFNFTbk7sHmH8ZJLuDLLC",
  "key41": "L2HZcf3RcepzLP69hmQQBxYTzWWgifH1dreWZWFgczeb6Dq5S18uNLPY1z2ZFBqeCjPvWnN7vF8MBthrBwBpbNx",
  "key42": "5idCSzb9VHTcgUcYjuJiBaYaDL6yVgwcusYzwuHYuAhVtQ7DX6r27xgfW8QkdbuUYq1X4SwHqsncmM8uMuYxBDzy",
  "key43": "LGvwAtNH9DmDEewXmcQYUwsgYtmdoTjVMDD9KsDszcGuVNHUn1qfFTka4QfCKokfuh3PUmGWy82Yfx5MnH7yA31",
  "key44": "2CpfBSDakL3UKnQNi8b6vJpKDcrgE2WX42za7Ekre98MkGSzTzkUXmeR6UJMHaMCaASfZbsqsivGpL4nFAf4xjiW",
  "key45": "5ocMMNQf6rkUVoBectKbUDxxzPvR38ZV6LhzfdruZVEmQjCA2pthjYa8VD3W2WKSKpj1NSVqHwqrx9S45tPD64tH",
  "key46": "4HYaCqjsFqyyNF26Qpruq9HzHpyHKV8PedBUtuTTeaT5gXYmyNzPGHAfnZq7aX5SRPkinmQUNtKySTzCTwKL941b",
  "key47": "3Dfy5gD35jueDMmmZbsqGcsCEY2Vykk4NdVJP3hra9J37rgsKG31gXc9AmUNXYQZxTeKvvrQue1mGXEHA4GYDczv",
  "key48": "3JHdZw9ErjgSAQS56Hx44dLJmdYnTH6a4Y81qYLjCttyncC3mMsiasJPpzDp7bVEykc4Kz1Xo6eP9rTjwn2Fzgfx"
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
