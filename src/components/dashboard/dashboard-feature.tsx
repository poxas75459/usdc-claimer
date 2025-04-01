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
    "4A8eM6FqfLJ9dLEpBZmDpYRxFK8SRkNpi7ji1WhJEaaXPTtnsGN3JyXoe1hs7KYFZUGCLse3n6vs1HYzKgf9APML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vERxmscL7K6zaVK3K3eRRTpuZRdd9nYxRf7DEyRTrmJ1RNy3FwVAZWVXP8V4pLzo9KZHzoaYzYXH6aL4pxg3Ljb",
  "key1": "TEzh7vP29tA5zxeEJ76aU9dUVpu8idTMbDwGeD7zYiiSpnmpaefWm2cEa624GqpLAEq3ZfU7PPbofLyQ7c4PeKg",
  "key2": "3gUsGcfsteQE4dJFzSLeY2gb9RoVFKmEhtshK5xLZir8C6CE16Big5EAvzQctd4aDesw4MByt8iquDX8cmDoXisa",
  "key3": "3geC2b4DRizFiBHjAeTfF1bS2YYs8oFogrt6UagHTuheU1FGvHAi89Y2QJWk43yLo5CYjhcNNRt8cPYSotYui1Bx",
  "key4": "2NJyXcfXdUkpatVKvshARYr4ywExWEnSzBp29mypEiK4qaw1q2h95H15yrCigC99SvGc2u8oDBWwUYacyJeYg8G4",
  "key5": "2NTL9iHqijdkarfjmMXrTMBBwkogYsKRWpmgLY1fMSWKXouTnRJDhukWifLAM9qEKqcrxS3gdj16o9Mns1n3Fj8s",
  "key6": "T6T8Cz8LXkd5BTKjHGqTMxmPVZyhiGGjWSLGXPcsYK4HJpCBgzEH2F7nGHQPLb1DFd5Pw849DAvUzDTWhGqL62c",
  "key7": "fGRiYHWt9o4TaKBqnYvvX9bmCfJ9o6sxPztYTkZtQL6V1UjX1pBbxnvsjRVrHzFotpMhcq6boP2wQUspDJyxpeb",
  "key8": "3DEEwq99tkoRHryRZyJ53GXvho7N8bZ5vXrEJ9izgHZxaWGr4K9CsqFZngCkZjGuqY8GxosAkyypCwKrDPAZuNZF",
  "key9": "4FkseR4n6eEVLeRc1gH63Vq6wctCLb9FUqFWzEpEkAzB6yMcUA4PPSAs6PTrB5KXzaKLt8BzyoxUXjFpQvAXEBch",
  "key10": "2MvzLb4GXf6ESPXj1wLRcJCbmxhwWNVuSgXTvK2jR2hmbA3G72rRV7utD6VppydSf1UQjhTcBZvLsLb4Z7mz81RQ",
  "key11": "58rhEnkLnu5VhoC8Yk2kTsN42JRXpFMbTSD5bnRNWexN6z5qnpB9P18KwB3iMjparhEqEfExcoo5VF5BZpz3c5Hy",
  "key12": "C4U6wuGxEufonYu6m5bpjHBPtQn2KrafQ5PUGYfAYwbEJRgQsvXFu5D6fRHoFCC8DBX36sdKPWRYaKYyTiPZ3tj",
  "key13": "57tDPicLUVTUHekVsGhcbW6jQDzwnsbbpog5H8UQ3VqcKnUjYVymJLhc6Era4L71cd1AJYbPmHoTik19oeEk3TDw",
  "key14": "TfiT5N3TN6daxJFKP64rJoN8gwY3teCNd2ByJDj4ChABLdnj3EWUbnH1twbqi3QgMLmsvYtAWC7b1iXie2JMJS4",
  "key15": "4URuF3CCcqAm35LjoaSXCJVSNQn58GCmHPsCLAzzBnHFUAv6UqAJ5RGPt8u33CeqVkagADxwM2tv7p51sxxkkhDV",
  "key16": "VGomTjVFXijE2aQXA4XTHtcPg9W3Jr5kfcua9eidKEaimUycJ1uvN9sso4daewuRoUJsyxeHn84tiaDTaBzrRFT",
  "key17": "HECCd7AXHiGgyuhiwf3LAC5Tkn6fFpx6D1Vga6gSZKfUMfcL7tbQ5uf1rFyXrJsFE1WE7DF769SzHBFeeHrAHST",
  "key18": "3Wfbq4hUzM2nWmycSt621hexxZGGndqCN882k6tEKWTohjsSKq4i3ZgUa5SMjyUjf6ovkujbX4VgoJAaqibVEiq2",
  "key19": "2YRGNUpTCDPtNDo6UHoiHt2xmeTh78KwR65xVrfARHGpq77u1W3oKhAxWDTCfdoQTyy3A7gonLFEtYhmu7HvSQRb",
  "key20": "4BXYqmvVkAPgH8JVRxxwDhc88eknqqqaauDEioDCqX8Nsdf2gRGqzDLt5mRdq9LJTubY3F2GhecvYyTTeGQDZiTw",
  "key21": "64rMF1cEaW76ToTbaXisWfuctQ5QGnjGhEWU5zWHsvFYgq64oTp3jNB8Nm2uHH3cS3cFuN9vZ3VTuRr2ZUGrsgZv",
  "key22": "5FqUp9HYvefM1eRcgEdcy7dk8LeChkp57ucvBrauTZTr3NPUQxkfCqpnWev38VWKq7R7qQqSxhgB6vBqd88YRmtH",
  "key23": "5C9qCJ3tHu1AKJ5sLgScFeskGdw9GcVcRADbmaQtpxsUqnH3HFXw27EUt9TyFuGkF427HLHuZiJQCfVaa5hqzmcu",
  "key24": "3WfVv9ptvfFcafPGBaD98XYenz1zspVzAkAsrw7VtCDDhKLtgfjq8ZxiCS6kJZYrRpC2fJFLFNvnG4Lq7XqRjgTL",
  "key25": "3Z6fsFscMiQq7UkS4VvqUHouoCWfcpesCRt2zviW84p7yAMZXR5kR1ZskV3R1xJGMXJcTP3zk8LxuN8ZsLEDAkLM",
  "key26": "2fjqBAxSmfwSNK9egqcc1NuHbmLhR2pumNmCDZLmLi4XHRcBcf8KvLQqYwmUz6D7E5NxwoQoryAN6G4eTZACMBu4",
  "key27": "2hdwTmbPSqkeZ1BAXXRN8fHnxUcoBYR3ijfZVV52Z4wwotjnDC2LLvDMjJNYWo562biLERSwiLWhnuemny1mQuCC",
  "key28": "5WTuEiVpWSYiU8efu6fGWBZhV2V1i8n2iVMkLBiKTB2q6d9ktwEgQ8S9mxpiTrumwVTfAayVgCfJYvptnVKWLpcT",
  "key29": "2YTnTk5LthEwWnDq1JHmAiFaWRG5n4Yf92uLJBtt9RA88wKYmWXNvLqWSfdxa4m34PCtBHxkNHgXzuW6YAxznVeo",
  "key30": "3SKCVuNRrv5cUcYzYRUE53u9MjueSpS898pNeAM5jVG4dnfCPjnxUstkZY6n2oX2jk6bJNzShXjwT12CBwKka244",
  "key31": "2WK7KSm7JbDjKv9Z228dnsQMFSgczUpGJxFiXuNWs6pU8eYC1GDSe9WUEKu4BQgMUworpb51qK5YsDyyYXKsBWJL",
  "key32": "4c7Sw8c8x9KHqyEGvRSGRdnLEfDjJc9W76Nh6EPyXXeNMxsxKQyqsELTftKRYCcLJ9oLd2SKxkNydgTKRG6ZFckq",
  "key33": "24gvsufMWyBudNzstCmvrRowjo3ugfhoKHhqnmJDKCPuu4Jcd6JzChr2RkKUrzE791QSR1iNmPHMUidcbeCTue7W",
  "key34": "2KdbcPi3zbD6rAGknoVTfnCkVnD2nxQbUTPfZLVcpguTdt2X35yZmMAupkSbyhbuECYT76bwVQayn9v1U8Xo6yyW",
  "key35": "3SU4JyApWaAAw5BALEAt8bpaKv8HW3s2z98QESNuuH1Uj9uxYMNCxp79rVnLyT3JSVymGpKkg3NNzeK6dwJ6eXaV",
  "key36": "7EF5pveDLwXXtp66t6vykTvGwX2T35zF3gm3oaMKA1PcTDi1wXW1Epq6JV9mANkJwhBcC7bobKos4ZQaEUZBh44",
  "key37": "38M2WyWEtksXR9MoTd1rq6suSkmUkL19UpVgbQ1vYJFqUC8AjprcprYHsxc7xqGBjLXRCm1Kq7iZEDLHwzz99Xdb",
  "key38": "3XwxqaerBsgkoL3AXEUPJJPLXFNi24NWDFscn4UjXU9TbidE2fxwCZc13oUVSkhzTWzQhMJCbRt92cPcXM6p5kKq",
  "key39": "2CR6wM7GyRqNtne49y7apBh7xscgowFmFrfZ17GzBzRvyUd7haaWMG38XuFamXoeUg6DTSuZSmGEr6AXEjPjkbVk",
  "key40": "JKBrc1opiDc9ZhiTqKimbkYL9Sh1md35m8thU5ERbgsVE2vNEUcwHCxpm8NV2DpJ3y11k4EFFRox3nEywGQnpvM",
  "key41": "hA9DpE2JJRgBM3qXb1TrpHkQZAjffgGZ2SeCWEH4c3SnN1FXDpA2MJobsaUpfwuoGVzPdZmzNDfJuVw5CDyaaa4",
  "key42": "y1rfhEo2xWefbBWSDCxdJEpZEZZaT7wgWrYxJtqamrvLEM3kwTg37yoCDyJkB9djVjn6LGWiCRmMFjU5JncR8eU",
  "key43": "N3cxry56aSKkMKw95ZqdTvMqTskbZbL7AC8bPa2RpbJsafqxyt5tC8hZHF8EPJSk6haNE8rEjrPose2c4BFTX1C",
  "key44": "4JrNwKsBWyxQb68seL83Qy59fEMzsnTMc3SHTjbR7TE2PckHXPakhP4z5Xzb4FZXFTWwnsu2uqkQwHsiqHVirJJA",
  "key45": "2Y9oLfwBcbw5CG8b1CGmqKrkd9Rr7hPQpgP3LCECj5AceZe5K3iCCSJwMiDmPHcyw5FptA893fiUMfQvfrKsg5o5"
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
