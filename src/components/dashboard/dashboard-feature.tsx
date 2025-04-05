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
    "5o8te4zbaP1wgprHEjP8k6sL8J4i7e5ZcyAeGGebj3fMVvYX4A7zPs1NV8smss7Vdsdu4VC541m3mzj6vZDnTNnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJgxJcjCHs5TUdETxnAdAUMxXuqkcgakdJXeiP5aGARAfDyxHAFnpnrd2RNDZ5AkfHZbJ3PqDiHXio1B7CXYWDV",
  "key1": "5AKfkXkFJ4yQZe5w5SPoDfcLRseChigaJaHbp15DPzdf2iSk4EskDzpknjuFJWrEsSm2ikYqyUcYrU4K44SQuLJm",
  "key2": "2bVJ6e82GyQKHo7GEXNjtmoieXdUbzhKJDNyKASzwJ2fYBEipffEmF4bPzL69bFH7RUfo3takB9H9Kbz5kHWLspa",
  "key3": "GdxAzXEdXsGUcu6pz5ARB6AZmq8pSRkS63coJbAR4QZqqtZmrqPmSfaWZy4goZUaGrBp9UoZD2DiNMXgUPhKBPS",
  "key4": "ac4YGi9QGm1D6KCVXALzj4texjc7jLbzSf8whVz5ASbhKyrjS7mp1WnJWTZKihy2AquK2YLSFyvur75pPv7jsgb",
  "key5": "3XrpqgevLHbojkTfLmboSvHfdTTnWAsk8ify9mxfqFXm1La5TW3jhYfZ8ryRFrxD8ASFWHS9dC274SkvnFhoitQn",
  "key6": "46CZCU6jTwAmMM1NvdbKup14J7HMWzyDVKmzQbYBmaUuKLFDZ8FcVG3jp7UcvUZdLBHZHYd7BUSpWYYrPpxhTesz",
  "key7": "3ryPJfVNydNpz1Tb32pTKiyfnWXbTTC7m5hG5BKi5MuU5mApCQmWGyj9oHtdkHXgjugwWrAXmFw9ziN2pz7vGPqm",
  "key8": "4hTvy9iphA4MiFPqjykyB6EFQmcbSUkNtQAm71AZEb3qqQnWd1jzZrzgx7YGCAgXxH38wqipZLwaWm8CMT6RQn4A",
  "key9": "Xn94LHfJcr32so1d4xnLU6mcSNFi8tXyU4Pq26TyeiAbp5X3eUAuUtEMRMoDfBYypC3bAAgcMEsaLQ4r1uzEkdq",
  "key10": "29MVDsmNAxP8qgctMUWLFbP7aiArKFHGyuFfjpcUQThDa5T5uM1RTP2yfu8oFqoR4c5U9WuZLk14bHSzMqTp2zfu",
  "key11": "4nBvJJzwtjUeduDw7u4mwAZ1gwM8QLeRe1j34rGPgjhVbNfxk3EaENir9Jw8cF6LGEHhZSR9HGGb7hrKNMxnKYQM",
  "key12": "3kYfXMCY7bK4iZR83MgHMQHEUsBELaLpegVmfDh8331UPFxUVKCU171NnTURbLDoQWd6eWH76cuzQhk78oyvhhvY",
  "key13": "3P9UYF34J9DVzqsQfLtcQGhZPttpD4nxrm7eN1XtmS5Sj6ADpND6SFp3aJzKd9w1NSc8g7zgv9L4Q3pW9sZ2WEtG",
  "key14": "2hMeReEGxctwSe8zbhKJuqN7NDpFuLTw2wZZrweiJxuqLgYGoiPHWadgeTC8p8i2qEFhcGfkBS6FRtCQRAcV5reG",
  "key15": "2ZoXLjWwBuf35qQG3CidRGRJdRvfM4UPFLS6JRX16eEEEk22DiBpxSRdK7n8LX449YL1DgQrnycrfJLQJup2VdTj",
  "key16": "2PYAyzQKwPE3Jve7S2nDABk7G2UZQjxvEW12CGmaPbb4edKpno3jVuR2KTWUoBpHbKWEJ89j3JiC9kLowU3fZh8U",
  "key17": "51jkT6x6DJJwBZvLjbjWUUy6FoBnjgNzjuSkS2ZKnfnST8xqDvFx3CoTJ9JoTJvJaBhc5c5qyh8fk686S9SFwFX9",
  "key18": "RKbhptEDbjGWxyezVFQWcaHTgBDHYabW7ffhFcQ5bEPaADvRm3AgYMTmTSXWPVpuVEsJDbReMku3hqvVtKayQN1",
  "key19": "59kjC82ZjqwHwkLPCbnDBGoP3TMXe5bSStYBXLxdixNWgmCWj951f6jq3EBjuv3XWnkV5DQMa9rPRop2SEu1TSPX",
  "key20": "3er3CXMjiqCqGkzH2kfY4aDcZTbrbJFbuQGhexR21fD5LjXXYbPqs9xNZJDJjc9HB26y55auaRvgcfdumnVfzKBT",
  "key21": "41nmBx8dqVQqJKCRAHpgurjVBxLUuEhJeja4jymKmH6jX4sQXysfJAsmDe6KtVApwYdkkVRFMTcGrHteXMNok9Ft",
  "key22": "4y84E9y2Ndo846dJAvnHcff6F1GHsDFpcotjZmRt6jE9hBZnxSKaSjNKgoEerD65g8TjN5U2La8TWAKFq4Fnfqcd",
  "key23": "xHb888ZGnHKWhCbku8rvdTMpJqAd3aGhjWJuC15vAbfvH6uufBV3SQBZaTxvZvaQRVCBNKygjgDZC8g4mymB5kG",
  "key24": "26gNp1MyGabJJ7M8FNpmPsdRZd8yDFxy35G5qgR8PdQGkBTBXyABNA4SU4r7jBX7toEUZHzhioG1sUVyvHtTThk1",
  "key25": "4n8hPdF8Gq85mxAnas6QqDHamTD4PtezM8oZi2SH2QijeSbmC4QHtfqFDNZufqdqGH9y9BzJBhE7U2KCRriKURvx",
  "key26": "MRas1dmvGmaw6VRgMSghxUrMG6pt6RUWnUfykEDzASHfkTarYYfTnB8MyYayBWx7o4YTXRB1DRsbkwhvY2dPWRL",
  "key27": "2QmuzpqSEfXh69RUUGkRd5WK4Ybt6dK1SfzNLPomWmTUd9Vi3Cs6H5jkfifXD3NkkZTSwPXpitSDrMmEYqPskGAk",
  "key28": "w52irdevgeXaxk6GHkooPYKH8zH1HxU2ZLDhjBT9pWek17s2rVmeuteXNUH7AVFhDfat8urZugspqwGoZo4XWnt",
  "key29": "GvHyRzGMhWU5SkRuyEq86Z2RFASZ6fgce2wmASVjcHaobcdakTscbdrXHGtw9Tap75zKF51ScxnTkVsLVscBcSS",
  "key30": "38iuCoVqfkLpAhtoGghRo9RBZ5gWyxwrVBASqwFFZWpiUnCVxhXzWdKzUZkrg4rZk1M3c5URimg2bucdHyEJRwz",
  "key31": "ytbqA4PGmkaEdQSjojYN1R2tAKHPEcevRbiMkdg7gZczrHf26gvzaREW1uxmpypNq1soKTQRKzap87xap5ULN2h",
  "key32": "caiwQjU2z7MhfgVt96b62y3UJUVHk11mP49jYxE7arB8gQkdt4sZacMHKo3791B6VzXHBaDbQCHJdT3a1BWLaKL",
  "key33": "3e1bCkUxhZTGN82oFSofR8CqAsfa4aRLx9XV7jaoLDYWAaY52tCLY3wc85NSyhirCdxJ1Wx8myyenLJd41khW3WF",
  "key34": "2zRGH6ngmM1XffNPsWzyTtbE5ueK7hkn3qZy9WucJ3hgbmj8wiPGpBi2mLweafJd1KfFiuQ2rkzzKCvQGEqf3xAj",
  "key35": "4yiWx4H6sdQouoLRs6iTUvfHZ3qF3TnxiQK6qCct8QKddfjpEPXbgkfKDuSzDtQD1438mcvaxhK93yaKrMD6AeTb",
  "key36": "TMDVnSyBForJanaqVMrLiJY7gtH1Gq8513GJgLYn2L7mWjhWQErYLG7443vypUCZehP8XUFgr6gfeNC893gc8vM",
  "key37": "3gqZWPDp9xTtdNgmmqenukFzit3pHcfhYqZqsvScjpNRddMLZGpguq8kof4rKay89xog1yWSgXnXMMD4KyDeTUsn",
  "key38": "4icePueWVEEjL1UmAwTcts1fPkEQ7RCP4jYiNs6J9Z4NqfkxRu62dBzw1tDsPSiK9k6tABD5mfxP4gERq3WbMK4g",
  "key39": "3SCSxjdLkhy7QkSW29vXNsjVGtxnscGaNDAKxh2Xk65SakrQz9E7V7T7GUz9A2BM6yp2gMFFzE9psWXAyxBgWk6X",
  "key40": "3UnyQmjejCS3ttRSvQVWzQu2iFFo2dJFpqfz9RkEHWDGPXuALAHsxF8oBAn5gX8vCingaXtFJa6CMyGzvurPvZwR",
  "key41": "1AsyYLuotYJb1d6tSzNYhqhFUncanvwZFYqVgnvbzs2hLXWdZZPPGJerigorpUjwbw2FzFjn8vL51XtiVrQFrr9",
  "key42": "4yhg345chRBtvAZ3Fsu1xM4K4mf97EGHNPcjBNCohDiNArTPKwRWBytT7uVDFCCj2hZBUU6xHa2s1e3MJGsUugSs",
  "key43": "a4ttEv1xpiEXufyrroWZt5wgxn865EXSbc7aAVCTXxRDg3Q691XtYFDsTYY3PPNYsHaExqjyaofg95bzXy1D8pV",
  "key44": "4p7QecH8Auna2DzHaCeMdhaSYyRu8pLinDnEosybQ3mbENyMyPzjmEVZvMcTrh1Fq6T7sbU8VqvbGXdY8buBGTJn",
  "key45": "4YBLEMfbcF6ZVGR83Nr99RCZT1VMctJpa5NzhAAD8QLV9VMeeV4dqcyfYvZJ2YuWwuqR8sqaFfHAfQYTnbnsVdqR",
  "key46": "2Cb9EXjQeU492CT7irixGbXXFfqgBa2sMtMpJA6jV7mDWJXKovbvvjT6wZAfgUrQ5DvqfXhf7Uy1fTBMSGAp2e24",
  "key47": "2qPsWaGJAvFB1SpSL2ot8iytqSZdoNK7ciV4hCdRhkC5Q8kcVnDaQtAwtWzMyDJ3hGttorN9gb3HnQ31d7Mkydz6"
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
