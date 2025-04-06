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
    "5hqThgGMaHXsaD8xq7VgPBxa2zmpyUaWc3S32CXvURC8ckJYGoHy2YQh9UbTzNjBnHbUvuAUAmVmtupZiFx2gcWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53B2hR42ApfY6djkpX1soJR1hLg3HJjAV8F47GK6q6yG4PZ74kjpFipSrTc3f11uufZRZ2vqZ5uRb87weR6g6R4R",
  "key1": "5hhpDrrqk5HVMvSAb9Hor6XAJSRnQVirm2sVZbchgnQLcxbcioayREnF22uR5YzgZfrLfiq2nzPzjB6QBBzw8bmJ",
  "key2": "bAfEpLNxyMDnf42gkkn2k7jYsrWiY22akh4TgRDPbp7PvXSaHKJkiiDRmFVzabGUtYGMPvt4dua5wmpWfiJEoYi",
  "key3": "4YuP3C7N4b7tZQnAG28WaYrhhqcQTLN3FoyszQEe4Pjvph3FhNszdRNnnjfhkEo3VAFttVYUKiKV5GWvpAXDFGTN",
  "key4": "4zn2SEwMbR2p1ubVE1YzfM7RidVAoZBZnHk86nM7WPGcFVaFMNu4N9chipV6ycnkLej9uPqvnkPmmZo9EL6PhyrE",
  "key5": "kAWXS718aKVGugPjqe6Bb9ScnNr5qRtJmGZUgFbXDzQMJiE73P9oR2HAqMzsjEKpDVKKF4o4RyLAT1qK2xGoQR6",
  "key6": "v9YvRQHcMdVS2o1AM191LMY7GcW25dZ9cEVPsPtj4PRfHTpYJHgMMineP33m5vaezPMNWhAew5jkhVmjAHQR56h",
  "key7": "2THqV1wRBcNYH5hTa1uJnfEXnNPRRYnSFuTB9a4fJw8aR4Lr8n9dDYRzupfX5LDX5WMuhoVuE5aVByKmm1sWdFqW",
  "key8": "2n7TgbGXrMXqbj1QhpqNLq3eo3EuyVPBcvQ8UhZA6UjfpKq3Su2X8eAxJMudTfkQ2zYsjU5EDsPfeLYypYmAgTxj",
  "key9": "3L9hg8UryBvLR2Dv5cPUeHLRaNuCsMd8ivj65zM6ajYJSmNrso2XbFfNtHoXzNTZkQCvKgnrZF4w1TBE4FfJzEgh",
  "key10": "twp4djSdrc8L1STrzEpgzPaNSp8Q67R5Jd6Lm49UtmfdpP7VqfNvtFmmMnLsGjUuvUw6pzu5ETjAMc3eRADRfnh",
  "key11": "2m3cc6Pnwo7wNAA3GM6y6Uk5X5zZrHGVzABBYg5Z7RFiLyGJuaivnrdhgy9L9LTfgNAkDW1GCFw7RnFBQ8cyx9xi",
  "key12": "2bKs16464WXpCbExrCp7pdZ4SNqz4KFqvYFcqRh3Rp9GNabHZfcfCfgavynnkuMx8EkuJ4KDq27nuripiciTqUpL",
  "key13": "55QPzmb5NPqrTHtW31TLkwdQxDXbAbxF5xCbs2HsTrnBu4GiTURsboHZRrR4jKUANtLkMzFo28g9PYeKnf8AzGsb",
  "key14": "672N3NCUVJsXqY66A6G1B93NFbaCR7gZFsBwGEEhQoo65kWUjsyRLiqpqpUx6p5it3YxemWeothxo1oDEkrnPrZz",
  "key15": "uk3kGicDptqGc6kfuUW4nLvxhoy1RLMYFzQcVhcSsJQcCq23zTToSDkH38NTCEsRr1RonAZQ6XcVMY3kDWeAnod",
  "key16": "2RKXnRURAo1Ad7dBcNTjje9PQZZ61kRVDNicpaCk9EUwXpa93mU5UW3zBSvCgSuGfU5Meie1DmZ6Y1wCygQSGhq8",
  "key17": "5SnWWnuQinsJuE69Li6A4KPeREaSpz4bNvZeAD11NYkYrb1wgpeoGcNNfBvWmdRVL4kydvizPhUYpMyxPYU1ohBK",
  "key18": "4mHje5LVkNjxAyoHDMMSrVD3iZ9HjT26QM1erFdd3n7ftWuVMKAow6cuzKSfsPTePdvpwCVo1zfMwCrCiQ7AX3i",
  "key19": "ALnVcBBzU6fzw6jaaNZkUiPeCT3VCnDZrSa3M1ZHdTzPFcPCjFmKR7c25KNKNA2JsyVqRezhzjLQ2JkopaCkPyw",
  "key20": "3NY5T4ugQoNvRdWKpv1mEYyyJ3NPwV8xyxrcorH1wYVwikRQx4DC5GzmnuvHAKuLeFiFMy1ssHaMarYcDbFR8667",
  "key21": "5E4RC4Udnvy3SbZDptu9or1gCiHET5uAd57ZgrBFnF5KXifftbkP4sw2x3ZhXhPefmfN7LWdZ8wG8i81ST8VHHg",
  "key22": "5UD2maugKMQT4m2iSsxG6qQ9EbRMmBeg656vbxaJ2RK59i4pneuheSLfD7b9HAEmkLfVViWc5vyVhotAN42ACAor",
  "key23": "3j1jpAhYfFD8cLwaUymxnFhSvXrwPScAw9UH5jPLrc1qz98w2hfXaz17x4b62hVb4iyVMHHZc353rXDCjSXtmf6Y",
  "key24": "2EdK5fsKBgRBB9vUUdP6KXadJfbD3rTHcAuu1FAvKPKN7irHk5RLVHUJGaoQgD5MKsjG7mpVkawXaX2XNsipMmQq",
  "key25": "57jdmimcyjZQ7uLzh56of6LQCHuMGy3WhT4Qa1tAiLHAuy11qtaZ7MUm4krUQa4ziDNBtYiRv9v2xAKntNCQVBNq"
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
