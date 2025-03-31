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
    "oRAoZUYTwaigDYAAWMjRrYfrKFNqHuSwWtUGRSDFoEnF113eiKUGpe8HHvk5Uc54vxMBNGgYrZPgBY4TULxM3Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bvo5q1HF26CuYtfNKZM7WrQcpnmmry2LsYb7LdxuedsbqK5vKPvxhqhxhBHSvFQd23kHxipqGhei7c5jTAT3xqY",
  "key1": "51734dtw9TCiAcnJ6okh1VxKN2j1AFsn2DkQfniRGF7uZPmXpV6sowSGG2yf6dUgzcbu6ZV3EEdbdsb8mHjL1PcZ",
  "key2": "5MzjPzxK262jUzEGDLeVs8ih7eTcTAnCR1iV29YsqXXME9vnbqQmbtJdEQGdhWTRaAmWuWLa9ZWgnRQV2D5TSyFK",
  "key3": "2qmHuztcpmBUPHkB1SPMJHtAxSj4HEZfjA5Bxq4dTnGcrmLxJ9vVVtV7dgHLQQ9ZJTycMaGVhR8jL9pGqF5F1qK8",
  "key4": "4fDMXr7Ac2JoeiuwwUGdBBsGnRaww9JFKfoRLNBHF9z1GHwNRqig1jWQft5EWC9GXj4dpG1U5Nx4tb25ZMXQUGYL",
  "key5": "4hobY3iSbydqmu62MQKFpDRrWC5MNfV9niFLJX5dPdqPBstxwYppshGnauZ3sTxBtaLZeFfLKm4ugbsC55M1W4Tr",
  "key6": "3Mh2ckdzwRRJJi8LCT76gNUJVwRUWEKrfWDuFuCSJuXoNmyidBMrRNe4YseFkLSWaTpWyKem5Tfjr9whHu2mRD4R",
  "key7": "5pcqidUYu8kawxkzSaonoxEUBMiWqfmMvPTKSaQP9nD3GXj7Yk899dzHW7McnXn9ivuitrCYrXkQ3R61yHoh251q",
  "key8": "4A95dR9atZtU8cgxYG6KomdzBnz7R3YCnxKJxcpLec2DGFLWFDcCdEBMrYitKr8zKTvppbvAU3QR8gorJThXcx9N",
  "key9": "3yeS7CDp6APJCL9DuZXfDqVDmaMLcEeA6EBCFKXD1agZJ3pG9Zq5vpdeSKpKcX7juEwbqfXEsM2zrzgYTHm5FT9H",
  "key10": "3tm6NodTh8q1hs3GUktWiL3jkBaXuDreTMEbJsVLPJzPk837BihDPx37yhzFySjhBoDtfVsiqVNJgAsHsVTGFPD9",
  "key11": "3itHVvMiZ8YCrnJm5Y9GaiYfFhZp1nCEP6D8pA6MyFcmZWiWED2CFtQHaFtS1hUYgmJukHuo9KwYnCmecptjixhF",
  "key12": "uFBt91Tdg9sAMcG6KJrs9TKBtt6eCNJosHvYtUCTLg6MfET6vERFWRkmTyLi5fmdnY6JAns6fzvvGLCiXR7uU37",
  "key13": "h1WXDh8ALejTA8N3x5DZf4tcT9Fq3qNXq4Pam3vGry2WvZaGMWvt2EUghGDtWTknTSYmrYCP5WZkqgn1uVQEJGF",
  "key14": "3MgNY7NuC8GxQLC4hVHponS9AzPPKDbwvfbFvZDwPkkbM862afHLpVHWe6n5SsnYMz2QtH4v3pSLFgtiRFEfno6h",
  "key15": "BE2DDRi9WSDR7v2w3LcDXFpqKvvF6pumsKrag9rxYtTG5t8heGkzWD6geCL2pg5ctkc9GKEGnxcLnmtby7EURHk",
  "key16": "39ATt3Ftv6kMxJ4DsN3roqgxXLYTRrPjESZ5yC7eCgtRmLtov3WHAaJvPYdm8AWWZxVr2BXnbEqyHJzAj4Azo3CS",
  "key17": "3cLwqWBYd1Z8HbkqNLyfgvk6tjs3morEJratsZ2rBingnXv79fcBpBb9hjF4fdPppEBrqdZcQKGoLF3Hz4ZCcKXB",
  "key18": "5fzVHtMdbWeTk8xH3poXkmZERjYb6hxQgkhWCjbudZCMWqx49NMLYaGYoJGbJKUZZDrX9jsrSaxpHCXKhzZYupUs",
  "key19": "zSXbZDfq9q9BZmWPMcnUqacQgX24EABHds96JqXP4ro6HwH34XRS5fnkRj7sdk6DFnqQnbLhnEYg2nmvV2svco1",
  "key20": "5aFeAVZijW6ggRAVtTG8Cx94tvx35VQtLKpAXqF6xwHrwCvMyoCJPVR4KrqkbCQqGTWnrwC3QFqhkc5TgNMRvuJB",
  "key21": "2wTERgjbAa7u98pNT2MSDVjHESLvfw2fTAtT1hzN2AUUBk6Ht7ZmXemibJmFPNJyGszretfXh2hA62tcJwCKirAX",
  "key22": "3ygbzG6y7tKjmYmcvQehpNChxkXxv3pnfGJ52QCkqdaCcvi5x44K7yC5XQCfeiZvoT2F4AjDdJnyAaSwCFmGWpk9",
  "key23": "39yRrzGTJUHzq4avLgicsJbW9WEa9kaiYbtjNs9dZFzgSkxwLxMRHrsXC7XJzb4tF4SKwezcxmdqDFxK6g5UrvhH",
  "key24": "2RKdFTANASKhcCfDTMR8f6bnV12VqP54AxoY1kb97HoFg11xwpsNSPMtUeWpHrhGWiN4JEw3ddsmNxuGkeNPu4cx",
  "key25": "eKNo3aieRnRmHotcGv7SHAPV7UHmEghsKUkB4H39FXix4BfiVfsMMG5hZ72pdZBuySDcCTEuXJmTVs31oGNrCoD",
  "key26": "4ujRcA1N9NXqL6AJnnKwAiDcm3Y82yX54K4Q2Ug33wVTenUSDkpC66EeGdDeB2n87ivJ9CCJx3rsKfbUjKBgS7Hq",
  "key27": "2CdzuFeoZFYeCkMkgBX2KHZdKUPiawMdRSQrkFAfdhbHPMj53qAyfhnoTfJvXcXLyWTcpsgL7hRstbf9H1bTfgnA",
  "key28": "3hVkbhNomznhnMUJAqk73hhx5z9fLbgt8sw62YzKxj4VwjYdvEpVSdejxzewusCTMpERngrEGTdSzEfw4BrVhxEJ",
  "key29": "24rQkWn4DCNJX6TKKAiACUtQmjEVZ53dUPmQT5K9YVmM4ihWbvu4WER1Ktg1z4yPDeScTbUfEwK8UGmniuMooDf4",
  "key30": "48gCxaAEqvq56kLv8wnkWiC7mKGscHg1waWubnSTgXGjZZVnXgjJThPizGYtAwof6N6Gec9K4MU2rTpPVBCx672F",
  "key31": "53839Nq67ENkgTD2TeG6a7h2JJM4snYEPa7uKvBZWp6aUdG1F4VtTtXHCNnwGsQ4iroimByJcj8gr6HufLRvAtBP",
  "key32": "4CoD31WU6c2Q3tmSvzvctTtfwMEmEgWVt2oF46kDACRFMwq3jcZARJ9qP4ugj9y3CugPJRNqMKEwQQdRAHV8KT9H",
  "key33": "5JN7Ts83fXaRbZDpJAyXEChciUYPVD968hERGPWW1NpJghAZFQRmjHPRtHdWwXUq9SoABwLfPRSwxDTbUEa2TkSQ",
  "key34": "5kxHJbGk2dcj1hAEJmArfcPLSqGBxn3e2VfPduWUUQCpQr6pAvrcEYNdTjx3N85Q4FaKaXD1qfgGTNm1pUSmDDWL",
  "key35": "rPE2An1NRgYtCS1x1GiSS78BQ99ryUr5inamBrk8C1UX9JS97vsKKjMZAPBKeySRXmcDbEJPKzKdcJavEuCaUKV",
  "key36": "wGybjJyukwHpV75gtyzBPSBwki3FYQ3Mx6sXmTL7LjGmQ57mYKm6bQrezyyjoTN1r9VZmqc1MhhWqSAsdoNEp6U",
  "key37": "46yYci79RLaikPB9rUvxWjaxDBiRdM8yLp1R1DhcSYJF6CTrZ3yJ61hAqEuYHzbu93Zkq8PJF7ytGcMkMzTEkJEf",
  "key38": "2aWczNo4ZStjFZiRacDJBegVRdnXUtUQuBui8wDgzqD7W8E4wjF1ykbTuGcxLovRqchCEBJsYEo5YtfRqkWNqun5",
  "key39": "65nNBz5z27NWeQiWttcLWaBCRW9pJ1pYQfCuK8HT37btR1UThof8h96t8zMqnemhHU1uG12D7mDWxE214uwHUy3k",
  "key40": "2P2MrXoMktK6xFxbBKPm69WKaknV7ceUoVefsrm5McyieiMrkCwhJP5Lb8u79jg8UFRUjoCApm9aiUApA4HyAqvL",
  "key41": "41rBQmX8i4yJpfjk4EJwtHXLphstd4F1S8L8BheMxtPQQsKEMJSJXCakFD5EfhFngfYsDA9YZxoeTuxUKXt2Ex9o"
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
