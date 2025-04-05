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
    "2VF9N9XZNvr7dWtyJMLojmhgQHXBiReoVxDpEfRj8UghsPvzdsBd5iU2A5V2YZ748QsZnz9PkUVVENn8HWnwn4oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vuTtUpQ5s6AGuudT3hWRVChfPxdP9DGxECyUH8kztJXbzAWBdxiPJVFxve88RRqKr4gEB2QY3t1GLK8m3AVgxmT",
  "key1": "4T4zgwDMYPdXVmQviRGaHypgXsmiAF9KtLUSPEdnpGXtNbFwiCiuP6SUDBC87bPcm8hX4VV8N7q4o7qyzLqYsHbA",
  "key2": "y3TpJUzTsizfeK82Cnt9jUbC8AQqoJn57aPW4yoMKnBzGmv31R5ePxdnDJBbAxtSD32ZeKanrWykxFcr3Pu1Bbi",
  "key3": "2Ugfmw7kihmVhbLAwL69dehfx2eUZMSdNPqgYvpYtU9yHHX2hTVg46TyK52xZmK4c8brvyTBSAgKLkzQNDKzhADu",
  "key4": "4YejyQaeQ1gEQBM37xjAS1Hue1MAEStNndETwjqxGeM5HLhKULDgL4BzGmBuHR5ffnbV2vsrMfeN55U1f1cZaNGS",
  "key5": "5MHPTXgftrRAVNp6Fy7YRcoZZoPS8WfGfqUn7gmdT4E66oEhbay7d9Vms6AANsU1XRTCBe9ggMkmT69NB1jWkgJB",
  "key6": "5upxTN7ur4vp2ocLBoxVcobKz2MLarTDX2prCkwk65UFe7BPAmhdfhsJf4nxUDzugzSdTDgpi2NoVNiFsFGc6C8t",
  "key7": "62cmMnWJz6RSMhcYoJXfuY9pxgBUXuWDdcsj66GsWnm9TnUrJkoPEZAUr6KLcMfEGAm9mLSNqgFyJyLEvmY7jrri",
  "key8": "3yPmGTR2bXrTQdTwFdoUW45ywzmQ42s5oadNPiopeewkynoNBdhTxNcoAeBwPhWZYV8WcmguzKUiQJ5iGhT7kG6T",
  "key9": "tzMzuGeiGnEJ8xQVEyvJBRndSp1XL1Hbvd6EMo4Fv8ykwLzb9ij31ZyQRV5odxEd2VTZ6A8dEGZ15UK5jwTtc8Y",
  "key10": "KREgJiTxP4Gz1FBCaDMXTmmZ89zNPCngxj96xwYYkgzLYN1dzcGXyAZpGHTEhDkmk761K8LYmUzie434KA4KviE",
  "key11": "3hN2jSsJ4PQtqqv7nLfpqXv7PwErBbsxc39yhn3esoUmaTndSjNnPSwFgpZNFAEoeBnTjmA4KQiorHSMXaMZMCEm",
  "key12": "4rhU4v71xiMaBFocqAYbdwFxrouot9AiBEjZLzJ8dLZFjtfkyRhSLjJZFUrrEyjCLLgDezzhqYzxc4Hi2v3Qs9Hv",
  "key13": "iYdtmstpwoLpXC4y14WtCzqU3TDgRYYomzBLiERAjfBgx8THq5vQpM7yCUCrYzMeVfyrfLUcyx6GM9k4ExYRfry",
  "key14": "YFDm716EvxNhyQP245Siunxic5wJa85r3FcscXjmw6VyZsW5rgQbtULFiHJ73q1RkvVHkT788dhQqwY8WffwHHF",
  "key15": "w9ZV4F6SontNmZ9PfgehQsERkai6xYw9Tzfy77DjccUbYzbjXD7XASyJTqYQtnx8a7yZZFgudVwAHkxJYvCBD2x",
  "key16": "3VAzrUf7iqz1Zo8ENvJisqPRCABzRgCyBEFm9ySv2Wop4Z4kodGQhmyp1H3j7bR4aYz55UqxdKYgoM9gJsm83TEg",
  "key17": "2RpsqU4PqStho73stvLUQurPkpN8mzyPUmpk2VyTq1SfKQa5QRBxzqQJzAHjem21jZ1mSeHjSBG9Yz16BciKD98y",
  "key18": "2uQw75WytrLutTPbmhVrwbxKaH6UmrSk6iRiTBuzGyB7vuyFuyf1rkhYFnPiivRBz3Khd2R6pVJuFevnH2592msA",
  "key19": "3trn7kDrUPuSnFdZzzDF7WkZ19cXXuxLsziaN2s6yTdwv2iwoXRabP5mK28rTrN9rVQ2G7oh4tLX3tCEfVNe2ouP",
  "key20": "65VQXozsaomCJm9gVWDLNNBAjae7RhYWcs6jY4xjTBQXBMEYyR8wuVS5MwzNWHTK2naLR4gnsEVUSC1D2VuyWc2c",
  "key21": "fVrBwrDdvkaDdhuJMXexRLzoa7NXzikpgujjgfwSe7qci63vXKGEQqqL4W9KBufvPCkChuv4DCrYEfgjSzBQj53",
  "key22": "R4C4gGCmWiuAYuXQZDPhSQrQk5pCNGsbXWJsQUwX9NhkgDF2fM6tcQdWKdW1TXaDR4ddcGYGp8R5YvyQszk4xPi",
  "key23": "3KcQ5Fu7F6e8NaKgecFP2A3ZfvYBfe5T4GRijxU2X53xZiietuRBFr7RiWnvT4eC3RcCmBPUL56CUjMQF8XYSpXp",
  "key24": "4e4fDgNjJHVPosEH2Yp59WgBR8kGhLxVQDyAMc89erZ71GhJGTQrBfGEsSRFZy7yQ8ZBowFF3NWUH37UXGw8c2vE",
  "key25": "5Ppu1kmbScHCjPfcoFmK2D49MYqUrywR3LZH1cgHToaAK9pM9fi7DyuSHENf4JXzUzu4wd889TgFBFgLTPbKmway",
  "key26": "3oKs5FFu2ne2FqFrt7zSo4G9Fft6DYMTEEwgFe95GRvSHy1LtYCA8B28PBrXvweznu8ennSk37fTdRJVK2627LW1",
  "key27": "4Nam8Xcmke5L5FhsShVwm4SzUFZPEjBFDoCWQkGyTa8wCYhMe235kf2SSrTwfu8y73Amy7D2yKzSBAUpNavP7X3P",
  "key28": "512EYkhp4vz7v4jGSUVEQSMe3rM12Q7qmGgNARr9oGYxQamcZ3xU5Xr2wJkjQByUbpSsSquMtEXJ4RbtbPoYX8uo",
  "key29": "4UfJwJAmxs6sH4U6BmEpFQyymvdpcVmGPJRF7QcXNyKhS8bNgXxzLSs4S6nUgKfLo15cGCoRRMufFcj8xM1PHYDn",
  "key30": "4sespCRJBGPvFEnYMJpLiQrwCiyGJyMmtNr9Y7T8Qbjd59aZQdBdbDTbhXu4bzUjiPzxEYbicTEdNTJHJWqqLu25",
  "key31": "29vzPM9hPw6LiVijkzybk1HDA9jsZpP4GkFpx6Azv98yGyHyXzMHbfCSMrjVNd2treWMPCzvAcK4BPjLdi2pzwJE",
  "key32": "4wNfiYUAGTNyTNnAMwGmzqvT31eVYkSeEEr3Ngn5FK1gEWmhz3ZEvFmfUw2zftcsxra5dD3e4MEej4EsEULtkFAw",
  "key33": "22uoqe7am3ok4PaEs2yr2pd34Hm82m5AQrgQH7kRG5Go8CfXnJj1RBojNJq87rtYbebGpUiKaJdayuNq1yvqMsMt",
  "key34": "2z4rQfu9WZP89Hx7Tvwhs55kBT1QJ1a51AR6xQ6GJzoXKHr72r1rho8Xoh3qfugmDk4oXZNoXZUvqRgEVkkZFGz3",
  "key35": "5vL95QzAXoTenwhz8jEDVMkpUyBt9DYpPZyvbnu67j95uPqYwZA6QrwmnRDD9x9EgfabR8v7hS82fUhUgNG9YGCg",
  "key36": "455faiFxN33VZ1oP4Ep4dQxpdmtUiqMUPNCLawV5BsTnd1rZCuzoY1WbJYvsSDmFVhXf2zv9BQUARaUXjUHzim8S",
  "key37": "PH9dVBLBUi3TtFfm81DbPem2A5XomF42NcfJLbRLzDgLcEb8MxUarkmH7qhewNqxZdJdcX6drVcePKELZzbvPiF",
  "key38": "3v6TzHiEBdFQ5DpnFgQk35eokwePuo4sw7o1JuXy95W5XA6VWYUte1ZvBmXYisviQat4wKgzCJ164PnPUXe7EvaQ",
  "key39": "3wgiY5tNBnCiS5hHNaVxCVXfEHBmnQGhHRJ1wPDCCRmvrc2HVBCwJKAe5zoJdrZnDpsG8DmAN8Qv7Q7Qs4xSc9uo",
  "key40": "hAXfVTDB4ALFLiFggEM18pwaz1ojS2Sq4Mx5MWDybnu2BymE1YELhoikxfFHiCCyE7HoQgx1aqVvaEd64WNJ6e3",
  "key41": "TA75ziBhtebWnaXGx8xn5S4W5vUzxys59yRCXpeCzfkSzgrSHMQh5jcaqJme2WDjGDWHzziNRoUtyho9CXSYFmu",
  "key42": "62zvCEszXuH1vv8eRH1A5EFPb99FvCdfk6jUKzvMu4rgXoCe9V7pqKBFCCjBq378huVRrL3BYBZ9XvWwUtoYmqbq",
  "key43": "AJbu73TTy7tmGmwPp5Lv5bhjMVCb4XrosdmQLAw1t3PhDSpzLhNLsfLDyH8thKCk8nrCJHcG8jTuqBkpR5ytdWL",
  "key44": "37GDah9RJkqmTEhXHekhVsMhhUunG8wcP1hqkjUbXusaxPbvJQeP5hJ37EiWd5u15ykkmZAnG2d2KHxcRMT92bf",
  "key45": "2wmxzyGUHzSLuwgJhQcdoq5tBGrU22feZF75ZLsJfZPnk16e6DXReRs5eMG65HS4ZgNxjTSzzDrd4vvp1FKFDGxF",
  "key46": "4t4SZMdQXnboRKJLovV7ZWRajJ6NQaytikE3DneW7RKBJAjMyjJG2p34mXc5cLg85dBKi2WmdwkoU1GoDjcPdWrn",
  "key47": "SesvBg646eAE2LxnBaABoKe2au2Nc2KmtYbmDR5VNv1tf9dqcHCbg2y18oHZUjnE7BfkiDonDxjWVSPmBmTjJdr"
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
