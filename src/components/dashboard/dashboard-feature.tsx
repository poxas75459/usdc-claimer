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
    "4j3B2L4RHRvz4aA3thBhVQ1s4vCqyNdkRGwEdF1bJX1Ufn3G7ZfESRFSzoKSmJt7QeSMcVt7LhCESXH3vyZpFZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n7yw8wwxxE9D6H7GJvLzMzov6kWQe1LW2ywZyZLo636s8WrcQZHtXdzLW9Cd6FGdrsAoFnho7aGw7PR1M597Rm1",
  "key1": "4PBn1QKVQWrM8YVZVWnkBakyKXtFV1Dievo62uMdfxDdwkBno4Szce5Wyju4bQDxrAAk7FH1CQ8RRWBDNVrUkBuG",
  "key2": "3kxxqjjjgXSiBgDhEsPc95GyY9vgtiRCAk4z3erRHZ8tUznHL4HuZkeu4PmxFSagt5zLTZrWzTo8B9JHsrX3WraE",
  "key3": "5nSodFHyW363hj9Dn4gE75QkgrXRuCAL1UWLccUjx1cASDqr74yshixPJdLiW1aAcEE2TMBECTso8jznnoWp99ry",
  "key4": "5rwec8G42Yny82FWUtpmYBmCUTrWkcf7YDLinveRqByuKCZ9zo3F6LKMP8evVouKdL58B36BpGqj6h8GTuFbiRWV",
  "key5": "5VHkL6T6oHmbCB9Rb78gpjYJGnMY3UuRJEqU5ATwi7X6G3xVjQEvnMJ4oZT5z5RSYwpadDsp4VrrtvKtj5kyvvsy",
  "key6": "4SJhzmTdo1yj9pnXu4xLjuRCDANjsyC5kBWd9U4V4WGjzkiRZrGm9HrxSDQa9Z43uDtH7QqiNkG4p5hPJyEvjHRZ",
  "key7": "vmhyWNwQUesoEi7nDBGQVkhP4Dv2enT4cABvTPoUNU7FYMrbhgD9jbYvBkmbTrswXYg5T1Jocgmpa254gC4NYWT",
  "key8": "bEizK1mr1SeeCUrpFjFquXAVzmqLVZyBBRH25wBmJDQftEpX2onCrg4p1U2yjbKs6MKKVQkmMJPGGGYBd7ZV79f",
  "key9": "4qiAaaXCCvNgqz2uPb9mNyceGo5hzd6JopC8DitUvTuphLyEmRUjEBgyYrQ6AVHCPrsbBY6BpKjGd6GQftRoQPx",
  "key10": "2jZT9ooehrdQQX8GbzEzUTk7qbJxbheuRSVrEtnJm1TkvB2TZNwNRWiRxLHeGq74s16xAFz2YCkqvtYYXjxbadGG",
  "key11": "QDnra3D88Ddw1oWhFREbYzY91x8k8gSkJVRLyF8GM5wibjJwvxMe3E1M2h7Pp3Wmcx3ZXXB3o7k5S6q3F5WXvdw",
  "key12": "5LobPp1By8Pr14mCvvoTSBqQPYK8jS9vbiR1Q9MN5uk5C2WMMp6a7pjqCkwozZybUFEqodr2FLF7qPMmer31WnTQ",
  "key13": "4rng2rc6MrMcrMjYuEDfS3DyNuUNygFtSpWYGDj3CQam715nqtiWYdyazCf6RRydumdUTAeemsL81U9uzksrg91a",
  "key14": "4XdsVh5ZEaVGJMFKqQ6gKytEpkpTbcFRFSbrPUfTF6g4BGBeg3BPaDtuRC459RhavN7TYWA4dUiWV2XdpUwicpz2",
  "key15": "UUbSiQusk8mdrHn53bcWV21ozRY2oUBC8Jaa3YuftYDatCaBtXcUw2nXE2WNBs4iwY2RNHF95qJPkezX9YkF8Bm",
  "key16": "2DgBiFSGwqSfrVUt5aGYBDR1vgqT84YTNeqSXrDTUWEcHkUAnK5tPbNKpbrPXMVaSFqDYCva4wdaREasH4d8nUpU",
  "key17": "NmNCmfADqF8iLKFNAk9ZU8cFqWJyiSBERmNZPz6fihEHvzU6UidUCbZksNyGp9fubUyFZSAxrrx4x92CBnz5HsM",
  "key18": "2z8a3ytE6BNJafBQA7JHgtuKUwRzFfG1wqyrwJeN7LGYUTZx3NVBTL5BnSUbH2j3GKHuN2szpRTrsen55oDWYNY9",
  "key19": "4dKQ3sYMDubQYkd4WWVPUpWacikxUDzBAuwhaq8ZNQ3d24rq6csjRvM5ZRL7XdwSDNNirxAMakoRcfqNFxwFYtn1",
  "key20": "3QLAYuxt8mx3A1akQBv1Q5iVFv5eF5fdgUCHfpztGEuUdw2kukycg6SSLMnEKr41Xae3FCjdo2bhCTgMkn7KnVzk",
  "key21": "cbzgn4VK2BWT7hi4iFRh3cTRyXy4tVfPS8WyiAzRsEN3in3syn7xRgVY4MY5ZXCAvmqxaGxdwEBez5tUojhCo5z",
  "key22": "AtV5AdTySfscYdDjqk5rM9gUS1KWpF2hPJ7nmEn76jfmeRdRgwf14MhVQE6wtr7ssPNW6nDhFHL4Z2grJuXwuW3",
  "key23": "32AdK61PAy4KXEckZVeSBm2sEbbZ5vA3p1j1V6oi6w65PQUEEudTXhaLg7rNZnZdxSDX1LxNW1bLWtuWuFaLEdvB",
  "key24": "2oVLHV8HP1T3kbz5kR98Z67bjiNmxHGcS1UgppaNR9U1XcWQhSXqPPRhSNZZQgrtivfLDdbRQvxFLQJonStQn3jj",
  "key25": "5GXLLuX7LB52AJHs37tHaGGMNd4GPYDDUiRgu7QwUGJgpzYKnbQw2CJ71KNTupoxfugFagXNPJ197qmqiEt16fXW",
  "key26": "j4tFrWvtRHiTSkTFMtbRqC97zWfjhemHPyeMgdmpDCv8KQgqB8i7rLib11rytwXeSbKhNK4e19mbAoCyS9i39L3",
  "key27": "3qTySrk4Udd9qBVY9nTz9utc6XwLFoeTFS8Qro5sLvq6aAHNsEzdifuo1Bp9R2AHvNEgA1sA5uqYzbzy8xbveK2K",
  "key28": "3P7oAMvZ8gX1q41L4MAsfPtWb86oahpixDdGboJKSdN3sbid1PqSQGw7VodeizYspgBiXDs6z1SoGNAno3H7Xu1e",
  "key29": "5cqVcStcGMb3c5dEJKtzoEHfiEWc7dW3Vjm7eQvXzcAp9swwry9Zu7adXT3MZQg5sawxnLhym9EHHMaWuzZqiq41",
  "key30": "2G7wzHg1eVdAAWq6QyZoZUi5c9wKTYLD8n87kDk9xu9J5JgzMQbzKycqZYwrfTL5WBf2gPZkTy5ue789HFb8Bvh3",
  "key31": "4DT1KyubVZ6pTk2GSLLs7MZshfoGb3Ln1C4SYovwT5afFwEwK25G9go6UxGbWMsXY8dddAkxBaNoYXdcr4Yyfs5N",
  "key32": "5BNvucjHt8haa2wxXxHqy6fRCMBg1Khh4VtUwfWiWdYmZZXyFWZFBbCtSdh7XiXyp6HQWnK8c4oqCaW7ZcxemUmk",
  "key33": "5W5iPzuZy4JZ5uB1smzptd5onkFe8EVmTJHFCLfbpcE3nEoisdwurLAXRJEXBA6fFQbApvTc3Las76bZhrciHVXJ",
  "key34": "23Q7C2Mfgm6baJTD7q6A76iV7WKtczqYz4fDnzzhxnwv3eZ7QvCbk3QPE8XP9i5APu3ym7Z9nt2D2i8B4BmX2T87",
  "key35": "27roxRu97Rh71ozZmCLomaSRgWQHmWxeT4emVzWpcpLb8v47iE3Lu3KhgatgTD5YW5A7b8tueE5eQhMaBRHeXyQK",
  "key36": "2LSPohP5gZt4MSsFyzsRfwq1nAi56RMy6uCUbQUJp9o34LLr3R7ZLAd1AWz763MNHJde9FWPsYzz5H5UDHvNp3FP",
  "key37": "3gzxfmryMUCqvEmgf7X6gEf7YGvHBbud7j6bu8v565xBgCAdDDtxaEKuhBPrqzVeC6rvcFpqzJrag7yNf8d2LgP9",
  "key38": "GBgTe1TupKbrvMerS6WEpQr1ArMvfoPBANpPd33zcPPt7tmMpCSohWS7Bgajppg9vvreZN7mdTpj54VEiWpKLLE",
  "key39": "2mbozvkmVDS8rWYzXYZrjqyjTMHnGpVX95fEZbr2t3VVsGwfexScRYg6187VZ6463WzMLR4c4zTNDVTBBUVS1Fb2",
  "key40": "4pdZT1uHJ1keELPorzssPqYfszCtJ4L9Ag8nR91tLvYkQCby5FWvZkRa4jZseX26nKNvghYkCQjmKYKPUMw51qeH",
  "key41": "64RKXiESykiDNVJ8TezWsJcn2vnWoDSrymcZx7qQ7Z9jMb7HKR5zujxYBvpNaXrCqWiF5Ji2wTxudJwLfbGFyMxC",
  "key42": "3TQwQRN4SgY5rSemC2dxV5HHt9UCReDGjaLa6zQH6ALmDTrJR1UrMkbKzS4fwaFMLaYyVFwvhNKwQAF8bVp9125p",
  "key43": "3mh4kFPPykJTEiUXGn4jULrDHXVVb8buLA1VwmVcWGRYB32ZDFDbD8wXuEtPeRyHYxWJH31b1bb4ycdqRt3muBYC"
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
