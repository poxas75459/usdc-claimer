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
    "2L8cadRhSNES7otA1sQ8V4da374gBUzjbeYaM94XiPtT9Ap612RwtsX8AQNE81D3PWTqsVTRhmrr3aXZu2kfmP1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qCmBxo5gun7bEDzwFJTnGLcVecc6J57g5NvjwFuZfFthKhorAP7bcZApHPhbHJyTCDCccSQaM47RqooCeskmDkZ",
  "key1": "5X6vyAU74bRSbkXe1zdFdCt6hmvmyQdKFgPmoeTKeh9Rp6FiXQZguVtKwX2mKBS85JpRNwoVZmMvYpngrzTmnt88",
  "key2": "3Uq5B94rvW6EoMH1KGNqDTfKyFGzZ6YcSM3PZoMa8LSG6MqnAkv55Ueiyu2L3nh5mFcdTUiPnWoC3itKj4ohQTCp",
  "key3": "5PTTw6FuR4C5GC3k3ZBGizpoYQhuxKCFEb61EtAZA4xrEVhCBRZxuRhyYM1A7jD7x6xhGfjJygKT88DRXGfyXASa",
  "key4": "2KAEiRgSF69Ur5bRCr2x5qK6bYnqmMVjsoUGKNwwCzSnT1gZSvvqWdNgawgmokZC4HEK2hNzoSYsavqfKu66R1Xv",
  "key5": "5a4zC8dzo8Ygou6omsX7DQf2ahk3WNa4nsyNPnh978kAaZ5Vszzba6WnErgrtpYUcsrZb44KonQBSAu6LPHnqxiy",
  "key6": "2A6yiKZEYhu1ND51tUu3zhfaqbAQPU8DG61v7vm7fqy75deTwkLoW1gBuyoNMeRX1X6LwsQdYxesBLrAo5rntwk8",
  "key7": "5ZuF6127dmmhPXJLsfNcxs3UB7uSLZeXGf95Vkxvo9yMatscw9YYm4HrabAZQkArLW8bN58AFS8uoDLepVDPE7dL",
  "key8": "3Htdz62aYSeDww9mwHcqiWq6Q5FoueVQpriEPakqLtMBBsWkWBiSStc4FmA2t9RFCey4o9Sp5AgQBR9AdDq87jzi",
  "key9": "p2aaez3KoJrF9uqqGJ1Qn8DgJUXF6E6PQnspHTros79SAyNZC6osUFKsx34Q5c5XkTNhTZVj3nifbEo2LBcBq5n",
  "key10": "4Qjz4CjNZuAscUut8G4htWPyB9fYtU5iUASNHA4fz2kJ51tNNwLPFxoZ2KUpmx37rNZM63crqZCtzpn3jechQXZb",
  "key11": "3c34dQPw4CidetKL8RsNxvfoNxB5t58Wz4HWGxCLH56JLpXdHhzG1t3fa9rHXuasj2JP8oFCLBgpUvpfd8uEFFjA",
  "key12": "3aJNUEioJxrGLrVLwFurNQTGEM4XkcKboAg5sgF22AQsrvPRpmGE14aoEXG3niiYADpJmAp618ikEYMnCYXmcpTE",
  "key13": "31uWTkJue8dpqmaYdrbKckm5nEnW18r5qzWiW158vvBkQrrfMMq9twtxdmnawDHXCRDeZnJ7gnD11eCYpf2Lkm9L",
  "key14": "4WhXsS3SDjZo6sb7bHeon32se5qGYonyk1dWUmknMuotssvCJpSW9ZQGTVdaoB5CqSqdgwqM8qRCF5ivqqkbxUqq",
  "key15": "5mEaqR51qt2y3bmEStuzHTCSS2G9pjS3EjV6XPL1cFuLyEwrZeVBuRzZ3SEvhSpz8pBV1rhbWVrrktuRqjfTeJ2q",
  "key16": "3yj2BQ45gK83A73Ry5ExS1tyFZTQWEQP6Jo16JT4EbeFmyCAtxx3zPxp5MFc5BUYj6HMYsjrorAYstgir6XeUNwv",
  "key17": "4AQurcfASYsnRiV5FLMCYbqKxDWZBjT6TpobyLFG8gx5TqvH93kE4xksQTEVAJB6QaLqbzouvGjNt936HPcRw8RA",
  "key18": "2J78XscakYgU7niqncDLDsDzDnAnEQnK5Hm5wxmTW9rAa2LD66xhx2xAtjpGHiGEwEVFWUxPNmkzwdHRbLnsuobc",
  "key19": "5JSLPVCFGT8Xd9SiU5ARG9FxBAX7jDJTiT1TVMdAxv9cYABkdgJr9B4jFeWDsuaXqJ1Bnk5nM2nbopFmowBYRXtB",
  "key20": "5BVk1Ytrx2SifD3RQVX5RnRKvaMxRJRstub4H4vGeTZhPUiftWaJp5bwrEAVrVni2K7bWkhaX6DndgQYK5vyuc5x",
  "key21": "LuTDGVwT3TyTmqz6hjEnFTec7qZYUR67KzHAdara3ZpVcP3U1Qwn8bqdMXk1pZgLummbSngxz9HYuvM37885ZCE",
  "key22": "7jcS89TvNNjYivzYuf1ttoxzMi3iuwMGMcoW5sy2TNTBA7eg6JCfTYcwdPAgJYmhV1V8vEg2sgTuroen43NUsX6",
  "key23": "5phWqV33fQ2E21sFsEz3vWCthfYZQB5JdXdPSS76648kNNshXMsT1DbytYaL6q8bwnaa2jAZapMMK6FTattP36ST",
  "key24": "2Lo3YTokzbipUcnSHGzfs9zqFNUWgqzoascq39PcQf55ngeD5pqfBFaqBmdLH2MSxFHdwABh5gFSpwHtDgxgya4K",
  "key25": "4NxX6d5iWh49qJyMAdVbBaLnf4hnVL79jUQeg6jkecxvgfQRKFsPZkcoC2PubGZ6a7zftab8AdNmQkaB4nxx2Txb",
  "key26": "vjDbHJT7cxVH7Sa3AoLEELmKZbjUdHdcTC1TbNXt5b9X7YCtEanvY7ig4VwDZ9JW4i3bQM4nhBqZv8TrVBUb76N",
  "key27": "mL2Yda8rwF3tUDiF9kXXUmfz45rw1oFovYDa4SrarKLtTJ5cuf37qC3SNde3im4G7MvXW7LSY8kRwqJwFgKytru",
  "key28": "2bA72vsgp5b2QKw2uTKEMR18pRYLJpokGNdqfezzkgeqqGZTQbt6UXv3WsQtoCM9M2GU8hmd5gXxdeDyQdGC2B2o",
  "key29": "5jyY7vnjNTJ8YvY9EVryaqTJpquqeTyYWiimdZ85dYdXQgKbKo4pALspLfGN6XsKyDyEn7yqwisV9p4diboeSti7",
  "key30": "7qAAXdJJPXZyP9j1AU2k9PZRhvE9paxQESiawMpqjonjVUMjdfTkjXUV64usnHsP51dN2ZE5oQku2nbi89t4h3N",
  "key31": "9Hv4y6bHqb2KAnovBQ768BeGdNTaYcRKiUSiHTDU3XShmJQa8xTTo5YTPW9DBhU2FZuocosvtmwbCQrAjqFNYwf",
  "key32": "4TzFMop37rRAZiYXptvhrPFkBNJYE8cEgyiPDsHCjH9Sa7yCJetqaxpunrVx4dq7i1V8w2oxWcyjZhQhMEjdgDfT",
  "key33": "3M6wKN5Zuqj78U4YSQuVfn99pM2t4CuEkPvRQKQd1XGULEaRrDYEpzhTE9N4YiQKciBuqvNjgeJ77srao76AyZVW",
  "key34": "JG2uvz6KrRTs61Frx76MuoMpfhsQSiMu21PNAJeiVJcWQycPJzZTmsL5RDiQ3bTemhEGQagfBep4wxbUPX6KzmF",
  "key35": "4iv89iT28kWyoKacTdR5by7rPz81qGoa8orbLWfwJaMP2ZMW3iSTxdjixgp1PjCZnthMFG6tShLJW5Tb5CjWeVL2",
  "key36": "5rKjmHv1Gk47QiMuNmH6UqQYMXGd6KPmGwKpVRhK9DMwuDhvBa77MWV6M4QDNMTQoD948tDt1vjCA71jHHoQseJP",
  "key37": "pXthPqCQ3Hgdg38gbPb3L4yX7PrABgyp2HjDMmdBoYBZupQM7w9tET1Ec7cMDnDXH1m67cuwzUFkArMCvQoU7Wv"
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
