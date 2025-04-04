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
    "3wKTHhaPqA6VnrfF1RUp1a6pWSN8PTp9o8LnDsKYyM1CqJVzPRLkdz8E7z8UepS4ErPKxWmok2UUVEJvKpY36xiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbEJ28LVdGxihwRzh3S51KqTCuNbBiazS31bsdYVeaPJBCV6MuRdyPPedcbt7rfrwJhGowgjd2HEMdrvF7Wt3Mo",
  "key1": "4Ai5zFcSvdF4nBT2rLvze63GDy81J8qbhRCFYXSqzmCrNMnNhAuq82QZDJ94jUUeuzzYL6LCvpBDPdURkSLoTfCk",
  "key2": "iBuQGPLYtSaGbX63KcZcneeRkeTk1kdd9Mx1Sp9kinaMP9soYAXaCT2sp3gcfNhAXB67FjbnBDhjMBVgizJvaHS",
  "key3": "92827eZ1hM4Az32gwBUrMkEAQkXWyrbTRZTsaUfbHakUPkWDZMpmkiiW9TE3PTgzXvffKJLH4MPgVWfADJCht22",
  "key4": "2vYjPUMYGyLhjc2tXKoFKJCRvPMwSeg1ArUxVEX1QJ3C8jKxcJocmvpL23CevTPCp8hazNRi78WzzriZMUmaPHbK",
  "key5": "AgzykMr844iF3H36pDzSdJTQA4DEWoWrtbxnpPvCGZsHJZH4BmaDNyRFxwnNpyrbdXke7XJfZfwhvV4ZWfWmFRn",
  "key6": "3tadjYbKxADax5fiY47NgtK2dGuCiB2643w9Dsa45r4f3naT2MRdtvQHFrqKb3T5d7QkQWTWUMwLxVYBt2PUECzE",
  "key7": "wQ6Hgurjh69uzGqHU1epCKb9aCSfqikE2y2WvLseUmPYzTa4dhP2yuir2uoaC3Vc8urQkstz3ZUjK1jMUor5e4z",
  "key8": "2dBZhU9SjVCQTXQkPnEjwcwYojPVBryNc3dJHiTf4jMMwfTsXbsrcFAJMmGWDV4zWcA1M87xGiw7LTdpkAQUMuWa",
  "key9": "2nTiCEuM4j7c6iSKdJaxi7yiznMbGfvpLV63HZdRCfnRrodNvcopmNsw76wJqfobmNeiFWNsoqZTevr5bqD3LiyG",
  "key10": "T35UEKrJzE2DhPBjvHoH7wrPGGRhLnxf7XZuEtytkrsoNWtejkHiL4jtYVaSG5ooqrUaanJteHYs2isWsqzA57S",
  "key11": "2cMznNiPk8taLN7JdN9JP917DWprUgDzY5px52bqFV2FxZ76pgs1aUdBApyCgx9jbELNaV9ZD4Ro2J8tUJuBBEW3",
  "key12": "4DXxb37FW4hM8xhhLXHkVR3eJtmCc3R9jWVUGNeA1cGfDS8PChEnYt5GGLVbw3HemVbCycpjazdtmLRRqKc8JNYB",
  "key13": "iDpnnTbvXmvQvMR24uJmfxYm6F7A9KXWvFQNVX9EdDKwTazocehEtCbkLoccGnB5Fy5FcbBD5Dva5dCF6up44aN",
  "key14": "46nUXjMMdJK7Xn4GKGBmXmeDo1co6UadkwRYZuSsHY7g9gkkEg5GUkEaTzyEwZEeoi1jfJcutVvqjcQezzeRcx34",
  "key15": "21fAjdfPhUZs4EmKdnWntiqKWpVS3Gvd27ajkJzZsHTihxJxLxWe6ccD5mKgt1AjL5YK4B94Pe8ZeqTBEnrbhVsB",
  "key16": "5e6e29rzgkpuvC7WwWfn87cy1uze8p4zEDFr8dR22jPp3azfnLKnUoyydXww28xBBat6FEq7Q82U3FvrUhbqGYfQ",
  "key17": "koYUQ9aKfRzguu4mDVB5L8BSVG2Q4Ndd3yfYH6JrnXNzGSJUsdSiD4mB82ML784r5UiPpBR5drPQevcd5GgpZcB",
  "key18": "2Z8VcsBhM8cWMtW9DyMVjf1H2giqSZLsDiAC1L66vLekWMoaQRQ6yhfetFXbeNSXS9sEFz9iSkutUKYDMKCSz5Ss",
  "key19": "zQjQvaPNv9vzMqgUoJRPERLdYiavdxyWDiFQte7FeQX9CV672wBAbdqoTEwj5R3yQP692851ULsfBXjynq63mEQ",
  "key20": "3FQSsiShbPTj22WzKoZXYxHVbmti2rPWGhkNHzwHW6fx1r8kpRRiPQSAWkBKCKbV547v1EHeAxDzfq82F2eP2Qt5",
  "key21": "2U4DgEiN1MFBVajD4FvnuFSp5n9bFv5REGKaztn9taLze84bMXyqcbxvf9YYhvtc5vDG8CyGN8dAgKKfSGjtn7sC",
  "key22": "4btFpBVsQ76B8fRexvUxP2gtaAAJQhHwnMU75q9iA6JsyhQvLzB6jTTao9e5kKVoaURUXrAgqrwyrNWftTL1mp4W",
  "key23": "5gAtBYAQtqkrc2wQQrVxbRwkNrPNUcBQWYGkbkuBT47HPJFvvGS4wiSrVeq4rUGbGw3jE2dxyFdZEyo9rMRgrXca",
  "key24": "3CUiKAU14Hi5V2giZud8aE994vHxizwBY4S5SdU5GnQXfyRuy7gjZQzG5GdP3KRSmJiaTSykY5PTdfFUxPgAi5C5",
  "key25": "2cXqr5rEiPBotMqWpUhHgZB3L7d4sUKrkaxdq6sArt6a59XYQ8Wpuh7CPo6jGdooRtnvMhWCyk5zS2H4VeiGwX3Y",
  "key26": "2HPWaukfsawKLzYR6d2KjVKMWRrTZ8aPVk2MU1Wbq8xhPn7vfojV1xAGj5kH66wjivGiscX3iNif2dwAKMeMofQG",
  "key27": "4DjM3qg68GWKjHQwYSYjT6GyH1Vfceaq9Xaduwc67DkGYL1rEebRiPYcPGNsM7XhNBV2zEXkw4f5Vv6ZCbey5y9Z",
  "key28": "2mZMUJ1iCmcYbykbDbJn2zAqsVniPV9txwJf7eTEvWCqByz4z1cTcroHS5TL9CTmKcj1CrSnBi8KbRy5LuGpnYdp",
  "key29": "3zEnvUCKNi4FZWrHiXzVsKEBCmmjjPwBSU5SEjZueWzjT9NbWcE3b6ufphZFJgjoxBMTByjH4gMUqJ6VueepDndW",
  "key30": "21cna7Kree8bMfGg3m57G6RpTErkgTug67tqWteNkbZY3FTJbXWMvng145SHdqexAewhwSRRjonpCp5yeBQkcqHz",
  "key31": "2S7UpoGwCD59VrBwrKoAShfDj7BFWr8XX3W5rjeFJ8WyayFkfk3Gw26XKPocpU3iBRgNSbYHzVTCB3wkE8jwQn4o",
  "key32": "BpX6461pMd4KqSDbsthpFTWMYGsrn9GnCKGs9NL3t88fsuLzbnXaDYY93QTFDp5TknYK6pjBUmGHE5aZdZB8FLp",
  "key33": "2WFMTYtihhpCZphLcoSoyc657L4L9hfYN6QY7KnFgu8a5Xfi8UEh7RxwddQ81S1XoKghNZTeD1TueBgeaMvChJiD",
  "key34": "3rsy1AnZ6dV8omgARodRM5Ex8wmMPPWWDedRaka6hCUGxCaAZzWAWAAkJ9Y4rniordiTUHA4VAjJSwdgohcQoxnH",
  "key35": "4HTnpb2vpU8PnyRj5Pio5rzvZweak1qGRL6eu6AjL7f89voQ6cC2yJn5dTrBvDEXW9trbP9ZNPkpuU21zfCSKgPu",
  "key36": "4BpECAtsdnwzQawQnPDYZ9GJx5zHP5aBVqRaSTkdniE4YKyW1gC21PGwGwKXgkUu6jajLoP1H6btEAWx4ZNtAUAA",
  "key37": "p3a4gDp5iYwxd3yDo7axqjZE6oyGcPeAZSkRnDgPM8wC5s9A6s8KojsDHJFk4HcxScgGXQjvE1nYS2HwYD3zjXT",
  "key38": "5S7MaEjWcf9dqe3X975AQVPbppBBdnJrpnQnfaRatYbidzpmjtNjcVG87PMU3RxHiXrLMP4xCkNTvxtx7bSQ14C3",
  "key39": "2m9Hkj7hZqA9D6pX9AU6ViNpHE88SRzY6zpVx7YEQeUfVnJK39EQFMevqZYw5jbbYGaQ7qCwjs5ixGR4dNmFpqf6",
  "key40": "4hdynn4XaaKC4xwx1GWZzdeBqWGzun7s9Ry2Rsd7MKSuXpafyTkqiE8PjXBfT6EVvCZPXCmphZvu8PnorRJLYP9n",
  "key41": "2jHFZ2BLdPXTMbpzBtrzf5f2nfCrbfhJTUajSQEo1pCFh73TVDaXQHRQaZVvukpqr9hKY46VU4F4SmsJN6kBn9Hi",
  "key42": "44EoSaGFXjkR2nsCpik1dpPVz2atjb7J9LXoUFMJoNNYQRVBogjnA7Yd2Zo7FPo1xauk6fg2DTgR1U5SzHXcbL3X",
  "key43": "4TzN8atjkHMufvZcyW3twefFY3hKnEmENT5usGyy9NQFy34mLSkRaN8mDwyBfjYSq297R1UtQBTbdpWSeJhgmLYQ",
  "key44": "28acDv2Ebxu1Uz6G1wyZCxYTfMiD8PbEq1YgYfLbAMefLEpMGWoGh6xNURcL76D8Uhg9EQDkpw3RvgzxPRn9kiuN",
  "key45": "GcFL5sHXU4D2Rd3eqbzhZjrkRCLzrtbpE4MJMZ9S2vmdUMHiCMMdjA62V1HwW4aArkKRrSULaDofbFk2wr1t6HJ"
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
