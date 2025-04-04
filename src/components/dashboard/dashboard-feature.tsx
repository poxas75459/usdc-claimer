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
    "4iiTTthcxErUWBTpGoJEd21dEgYXbYz9NQyPMjN315SRhRMCtKxN88HTWrYhF7NeM2S4JcsCEz3zrkarhffC1qp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QEiZsgZqCEVj6Aa2p666srLCQ8jt8hY5SWSGpr13eJBFC5DRX7xth2DreFgT6tMhNKdbRpWJkEoA6m2dN8PEq85",
  "key1": "5dqtmzWiUYtXbSqPcq78XVPafAyp7eqtScuAW3HbtT3QiZi31S5D2kY3JoHCTy2k7aVRyMLUueiFRgzZnjEgTUw9",
  "key2": "2adK4GG6S4hA8dXUb23pMML47Adiq3MJ1ZfikGNvBGkApySG367fWosV7bqkKw2rBSfm94QjMFD9NZkNk24D3K4D",
  "key3": "44M4DL2tNJjbYBHYxrmmo2vj3uGSgfyGgiVEJJ6FvCu8BQ8bqxoYQ2oVdZBj6Hmvh7vCmFH6Lz9YSswZiDjcpqSb",
  "key4": "39rNNY2f3VuvzzAWVGL8mzuygmHZKPNqjoUZ9aVU8itzGu7xGtnmKmzRQXsuouxD6jyM24YqU46Q4au4ppQaKHpy",
  "key5": "4Wo7TTEewaeuLHYSYRwNGdi6aqDnqx4EwYGK1AiWPnGbdxWPexZTg9cyGXwptzYyGGK6iijSzSZTDL3A15qrwgap",
  "key6": "ikh8XRYrejhzWEFfFC718wDDpbkGfzt724LP1Cc2oQqdvVDTNqHXa89MpVcs3D61NBxyJCU7uMw8KBduezQP4Fs",
  "key7": "2BeNS5ZiTi6gdsmhvfPUA81EpiiQrAHAhQvEyedVfo4HjY9Js8yE1scnPgitd3169bo4yjNL6uAryHrBFwdx864g",
  "key8": "3PsYRW1w86E1nVBmwPqUgLST7x9bcgqdTmGARgiVtzLtFHTtmPkhQKY6D4tvUGXAfsPr9V8V3gkY2QWKgx9YfhQW",
  "key9": "JxFvctDyhx8WyLq9hYd3NZmsT4PPMvyZBz2hGjdaHwevK6ifXSc3jgqcr7DUjyVqAyfRHAb3E4kxt7vsWpgF9mM",
  "key10": "2KjYCnD29vzr7DZfdGpJ37CcXpTs7dk18tBaPyg5oAp8ZWPZ5yZnMqqmSEExoSQaVCraFYq7rjRjYyu6T9nikKKp",
  "key11": "4HubEsc8jt12yVbCZf3W6LRs78GbvhKSWBb187Ny965sXjsf8B4aJWthCaV6aNMZ3niaKVLCCYUcvfUPcrL2LcP8",
  "key12": "4vp6Z86T8XXGdPfZsjvd1tYmk3SnV6x6DUjXxn911qEyf2E2W4YhAAoWqmdugJ9aHcS4MSigKSfzr9G9XU78rjTt",
  "key13": "RD2kTHiM1EwaLoV4Uu7j83nDAAeik9LVv6JVw1bspaimsWYLoMp722PgTbuN8k8Fo5kete5DKkFub1tShkgGVFy",
  "key14": "51GkmYK3XcQrzRtiEp8cmvTHmJSM8rWT1hBCrvouDhyFHnx3EijiNvqnpLXUViMYcR4aqBBpHkCLe9XjFpxiRxQA",
  "key15": "5GsDbp6r7S6Y48ihNdQeXohuefDPab1vBeKxU9wG45LMqtDHK5uHaQ6qT9MSroUnQAc4LWGCFJ8S7k6NfJEBcwNe",
  "key16": "3dEV9XLzmGiwdAfV1ciBafpyqkBw3ZzKri1aoohCDmEfZAfWX1v9G846BnZ3w2ZBgCZncpBpDUCFtW2P1yqBunSh",
  "key17": "ZpiJ4iomP8NEQ9eqacKREhwzmXUWGi4Q9DCMuC48LUaknP8xZwN6R6WYXz7tUf7RqSrAhKuhVaQiiPYXNcR7zKf",
  "key18": "ZRy9fKFtTuHbXURPiDqFXRqLhKSSzum4iQyre6d4EDBMTwjL96fEucsnDiyjKmG86EkQ6Dn93RemHH9ggT8vu2h",
  "key19": "FX2HPjZvju6DVL4EGcRpFz5ikgPZpP2EJFt6wpoikxuGgy2QdbKB5msfE8sDcD4G2K2PnpopCG1pGSNKMPEm18i",
  "key20": "2c3XmRzEE3HxcUrQHxDmAZcja7ZginchQq6tF2c8eDfzKMu5uStM8zXQcxufEPtYZcyjkkmoM9dLNhUgoLjNmu5Q",
  "key21": "3KWom4CDRk9ei6wUuePDwaT5geiZeQqRejzWxSVGiBXTmcwKs91omu8ZDDLDqu4GoqiAtNjrYQB6V5VHvPKJVuL4",
  "key22": "5tLv5vTNNkeQRu2MfjDkjtV2ZDrdVYnjQSe4qPVsUemtx9vzTCGzVChwecrfK224C5Rqx19FyAeCey1rm2A9RDUF",
  "key23": "2NBraXcYNottSVdiLT8KF4EpszNbpVqipyVzr5Ar8WU3F5Rk4N4asAHVqZMAbuBFYWrmKgwPodqXrxFkqCT2FwWb",
  "key24": "3nQn45DcxTYwNtfeEXFpzXjM6u8M4dqjfK8scfj8gmSKCGvMaXT76uFzqgQTeLvpXpoPayZiGPTfjY1E3aV6vYsR",
  "key25": "kfeThbDR1Kk42RJHn2QZvnPNWFrqBvUkw8ExocQHPVVyTdspmmNDwwQsp7r2K3wbnbQcRrBwvpUjLosUPBnkQTk",
  "key26": "4Ar1zWr3KtsNw7CJH8GDfMjokSoEftpiJbpazdko77NhPfnRRLpZVq9QT68JMzawVJN4itAgrXemkPMV4KsGqquW",
  "key27": "3GquDtWheN8zNdLJz27EUXbPc1MGYB4bUhfuCtsu5VMYF8hhZUHXnKAnsbxLvMR58ph6MBJXzQawPhVB9qtt81TH",
  "key28": "4zeKf1JAv5vo4yJf7TywjZuTCDvknJFC8JDzUDpLBh9jVgeVEJqqe6R8FVodvoEeNBWRAchJPSaEhbPptcWhdcf4",
  "key29": "59Bm6THsPZQBS6Pm4Vjou3a3QYyhMMhy3mhxUCrLiadp5KcQfN61xpyRbyoR1UYYP9Ha137gBxHU1DCDcmWTamZB"
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
