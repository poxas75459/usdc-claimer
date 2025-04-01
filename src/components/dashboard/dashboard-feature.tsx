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
    "4K5xTCCaDk9ndp3QCPzCKsDMrbZGf9cjwdCu7ZTGrTwmeStZApMk4GV7LUmSqquBvq4JoKSqxSo1LYMy3bjn2gNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iRohd8GKEQgweFxPRgLU7FEXGe6ySGuihuPBTHPeGnjfRECBFcG2tTtucBk88VvQYEKgMx3uqQdcP6kEgGiDBJK",
  "key1": "1xjkcP85gLEKc7BRYqrp71YiDYZ6TsZuGZ3wtsqsrfSr7oTjWn8A8JYnGz5wk9NLmT18CCoWyXTwxzMCtsWMhn9",
  "key2": "5nL9rBZXVLNPqYNuCte5GkHG3zwsZKXGcL7jviyues6FitCMYxddAqPFZX14DHFcRSunDfZNJBFTKCm94tEqfkPA",
  "key3": "3DGnKmYsV2yigQU5nXwGtZKgc3BDxxS7LgWoEZ9VFvnotF5DtbTF3buP1k1k6tNrzMhvtSzYP2P2qjKNUvFN5aqh",
  "key4": "3tCW7DVsMyLxHvpnvHYPXeoaSmhD6tXXTyfhFEduyft4YVxxzuPdoVkNp7MP7cWP8mNyAJHGFXSM9r2vpyGtqY1p",
  "key5": "2RJ6zHHoYxRypfkCHWg8BQkvabA1TUiVM4L47brBPB8VEWBdgUCFgzaGLqF9YUHofB1nY6KmbSRimACCzU78w8K2",
  "key6": "5pPhZVg5RXjbGxU8gC2LoyrKYg9e6Hr9Rxw5rgmNxhuDPZ6vmkpFn4RKuNEuaPPaskbbfAM3mcF7kdMtcqMEtCsC",
  "key7": "2EVgaQBJoeT7PdgSbqNwDYgMgR83tmhjBi8GMbZXNmGxFMf2Ys4daas3avNJauBYCTXcjNQE9RURunU7xmJgV5D6",
  "key8": "5xFcrM4H2TPnRwxTtTVX6VkuA4Tkr33CMH7mjBsAhw1NB19fJJ2vG7fhqLMFw51BTjA1aGEjgoXYUeRyvKtMt5Qh",
  "key9": "4dTXdGZiA88NLoHJeoGfoCew5tgRE7y5veir2TCPFTudD9Mhv5nWy1jWB6HUzbrQDkRqQS9MJYZ6po72RcvTFkgQ",
  "key10": "3nhkSoA6YnmMKC4BB17sEf1ZYV3NVHWdt7AbY7Zv9PdBGcsMDaXZ2qmEZpAPAP4rXWF4oUFWiut2yqnH2wjqss6o",
  "key11": "2TRwyCQkmVEDXnxDjg2akUPT6inkiTjmdKrFJsuTasCoun51c9fCJeTZhh96SkEWBKQp5eZdXQsXvRYhqLmEx9Ck",
  "key12": "4ChxnNoQahnS7SEZxTMRv9Kwx52Uv6MAo5YxNiU6QmTnuLLMEC75xbQ2hAG8P6P2tUnNu3pic7mPTerjabmsdiPe",
  "key13": "3dLut8bEid9v3bEfB2r25aTQcuQXhPdWB9oByoUCg94EiD4gPhJ4S83gFBaSb6rTfJPBmobrTVQtDu96GMeNyRdX",
  "key14": "dKvFpYSahftUzjwuMAo9ZdZ75F5dPh4tP8CHXVRxkDGmuqUdzLXuKV6VJuF9gZG211Hn49vrxjYSXW2En7UEGo1",
  "key15": "4PaPzKXhAAxr1Y6rdHKztrd5XMHuoLWFPoQEbe15iFsTgduLSFGkGQg4YTJPFFZQyqdFwiZ3HjD3mPXDVvZkiEKT",
  "key16": "41viUR6deVGvRcpLweRbjpGeRBHXiwmwV65fnn3ioYZeAVFW3q7p2wcYHi3KMLVKRAXpjGbEX19cmUQFbW8ksttj",
  "key17": "5TEZA8HuATqQtBqBnfPAXvm7orGNgopJRxUf3EvSJ7hJ8fbQtUdKqiym4RTYArbKSSnAzfvdv7xHHoRgkpbNqkY",
  "key18": "j9UFE7QFd2wUwxMsnBWSNHC9c7hVFwc3BD21sCaBKStLp71EQ4H2zd6awaCaYQrWjNH7aSizn6E84PKBDhXno8n",
  "key19": "5Hy91HMjWAKCMMy7UPiQeng14kRTsjTB694JqmcjqdqN1diRossEfjRqpehronhh84E4poZtuPaYqqk9UyB7EDoP",
  "key20": "39o7a48MyZK5q1QGKiwXjHTaduwy7QtSmtvotSXXPKZZWHUboVNyRmttvxngK8EFtYLYzJ3NrPNFkkrVVyr8kdYw",
  "key21": "3s1WUkEYMyNrPmUyA8W8XsVQQi8gx3kXnv7bu6ZUn2uZ1eJE17nQSJVujteM93oRqMsQYhkr4A2RSx7ExwJJoGdr",
  "key22": "4cSenYqEaYdeVLQLwTCTYQm6iGrrNGSz9RaMBvnbnMG7Y6bUMq56BweX7PeVo7jaNofisTyyuXoqD2GKVWJUFMcP",
  "key23": "5asoruEFhoyjpnfhAXjMpLDj3SLF32BuDVm2MQpBGtYxrcUeDgdw7bhpcecmUSotUkKE4UiPnXaHg36CE8MVfv9F",
  "key24": "85aKwJtN1KxcjmFeXCm2haRZWAhrJ3cqEi4rmGarmtvPpfPe67yEAtfDuuxGmKnMGXPufhhhcSwxERjn9Gy5RUf",
  "key25": "Vb3oufRHbmE4BxNbkwB19h4KaMxQpGojjCZdB8UwEgiQH9az1QHP3jbFgHMYFJunfsjdkc9rzkCgX317KiGwuj1",
  "key26": "3tudHK8vc9yWuMxrK8HCFGMParoZFAncuQ6LXocfofaKY7ARcNBd4NSab1eXiABF5wCgAGUjMALBgWoVknMHGopo",
  "key27": "WrBszzSjTagpoVsD4MKUeJgnfmTuS28dKgKKPTuWXbPC1kv66DjjHiB8M2x5v8PUb3hL7ZUJcT21hg4bC7Sz37v",
  "key28": "sV2uBn6yq6ty93cQKnXaSat3LhD2bEiK84GaeN2XaBEi7afk4eCeJD1q2AUNnXhy2ttgwv6mQAwgWPRNdoA2Rhi",
  "key29": "4xJvi8JUDxBa8sxWDyHfsB5dVEKkNKGpB3Ganm2XsFd15ZWoJdt8xXXFQSrV7mVWoYHYmpZa11gEnbHJZpAfp4JU",
  "key30": "52xsUKijttPPtHaSNxafHBbKZf3xRUZMoLcGMKCWkgHXGiunWkELDZ4S7YptZGBqVEuhrZ6wooT2vA5daaceNq7j",
  "key31": "2ojcSnaTbVFoKWMfN9oR7H3Mdjpt5wnLxaM38xyYZFYaCbXfjE5d8pozXUNbaZJgeAbncbvWWz8BCFwyJPwiVn6B",
  "key32": "jUL3jWrAufrujj6kd7cFjbHtjEctv6YS6wCfLarrhAhM2vgJs36CvKTqh8MZGBaSo4LUM6rFTZE5Wy4eqW3mSaZ",
  "key33": "3oh3nJa5vP4CKcbiFnSXnk1XAnqYixDg7Ui7HqqdDPFX6s9KzgTZzwJGWQo6CbLWcmU72hTiPSntgZAECLSqjvXT",
  "key34": "3cW4uvqb8vayovjFAJKY9TadKR1nf8pz5BqpbfKKnLmtzHrF8P88c5CSQuw6Z3ULmdb3QzetD2noDRRcSyNjCUWy",
  "key35": "498YqtDETyQCCQpV1AEZquNRP7Sr97MuJpXxbrsS4AQJJoUWoGn9xNPdnesGjVWktkMMjHU9MLgh3N4F9e1DSQUG",
  "key36": "22Rrn3kxNiLuCY3Pw5CXc9TH7Dc1QEkS9eArUhWHBcSXGuuGBNczzJVq62tDZfhfcAarHDyXNjDXShnrEwPNdzkx",
  "key37": "4dYQRYpCai8Uwwx8BnpTfXiWTiy42QFTRd5NoBsEkT7tgRdJT3VupzAhQhNehh83EzDaMCPJpqutJng13RWZCkNe",
  "key38": "3vZP5UVjRrtYTGmpDVkngGPXJJveTNCVPnvrU6RV1QVsuUqiExrWAV67rbH9BWigP7QrsCDZPSwV2KLvLtyKLsU8",
  "key39": "nnfffNTqRKuyhxQUE6yWpPkJuAFrFoxZ5QX9DgZqLrJyKyDzp8LvxSmboL5pW2LUfe7VRRpp47sUi5JyXMoj5iS",
  "key40": "2WatVAqiaHRw1Q1fecwy7stpwtt6asbL9ycRycQQhRzr81eH4o8pbcfYcf5Qea4R8UhTa9cLNbhJXtKmtD3CSFyh",
  "key41": "2zTaUKGJTT2SpM6JNx48W9QjWHCyd7jWXwkBxCiVqnPTMdLv3qAido37KaeDfgX8u2v51VHjy9qesvnw9pStKYCh"
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
