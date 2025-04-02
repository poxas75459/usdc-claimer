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
    "2RXZippPKRrdHekL6VszKReGSky4RKXmyE3JiJjNygM45tbtMCkwkZxppMpkA3bfMxCYCQsxbwEAb4EnRocUXe9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaTdWZvG31yttkCkQPPdbSdtL7sc7fzCtRhCpQ1W5C2Qr7bkqzDt29kyrVL3o49aQYb8mSXk8BSydrkqDNUvzbt",
  "key1": "2boDbLYYrCGydi8SDQzRikgLMgVn2qP5zBnutiXCjjKnUaqtMVNbsJDemmx2ePfqADYGzBu6oQZfyvk8puQiDXTa",
  "key2": "5XEzgbYKEHE4ASrY3rKsvACBRyu3yBntZt2Yvp4pmNYsNrtHoYR4JAYhGK29abP1ogt4Kj4eMnZbYq4yPd9KViXp",
  "key3": "6VuZ4XfgL2Btut2xNKWjVrbt4mtSHqf7RxDEe8BX1yXmuboZeJa5iSNrKxqjzPRgpix6JRpiYamVHPvdZ1c8yER",
  "key4": "2HD3tC4zXvGfRyT2qX2AvGgrK6w18yzNDmZyzTp4P8xk1nRrjgR14geHk78ednfvDJXefDXcAQT9WDvvA96cVuEF",
  "key5": "5xpUR2E4B6ao7jQbujxdo5hZdTDojx7qLWgRpjCg8ucsrd8bT5KUV85Dp55Xfoak4zwTnxD5g3XRan8yeNdHmNam",
  "key6": "27stnmCQJRMfb7agqc2M2rY6mi2dXW3uj76rwbnHQkR8C4LfrDZnTcRvJFHo5p5kKmUXXXqBhGeoRpD4eN4PdPnK",
  "key7": "SSWSGnb8FDe7xSggXrdgDUD3ujBT3EpHRrymuXbYcAiqTbjVwbVYd5P7JmrrWwEetQTdjbvMUkwst2q42KE2rgP",
  "key8": "79o4TvjT4WHwK5gjPCcvnAu74zu5N4hsgEtScvWoU9QaDz1ZXKv4a798y2oT563gUxNQ5nd2wsvSzxhQ1781puJ",
  "key9": "47vjQHYWnUo1WcyJUUKtk9L8VgLLghxfUoNjhb5rJCDs4ZjEbPbUhYp7pfQuHyry2VtWWr4z9FRhU7P13sJBDqFq",
  "key10": "3Em8keKHw5nHiZAdkid8yeSaXzZNGKMYKW9ST3fuuRC19uFDLvjTy7iQgVSpu4EaDXuv9FYBwo35T1hH4ZbNBKS7",
  "key11": "5dzq4sGwXfDtrv7Tps4S71Fjuq8yftXaiSCnjSD9tg55Rah3CaXmeZ2k6tjn5U3z9LRcnBCssTbQFmBAJfbEQFbS",
  "key12": "3erTRAdD91zGSBz1Mh65U8vHZ9Ry5ejPLNVchXahQDK5p1k3TvjbCvfo1F2HLYTa5MMam66bqBVop2A7mtPZaHWi",
  "key13": "vneS3Yvaf2DC86S8Px2ieF84BH5s6iQxfsR4uxMKTjswmCr322DMwdVNCiEMpfoptUqFJvLpqivAS1sfVJQLden",
  "key14": "2ZibwVFAUCqZrGhqff8hRY9YVEGkynnvuPA2sVHExm8CpE88SRnkLwNspnqj2h15v9VP3mpwXqraT7Gow2UdKEDG",
  "key15": "4etMwXKjb2SUBMACbhY9Q38GqAZfUk1u7QoAGTk7oKjdKBGXbkib3fETvZ56HEmsYHtnKcf479m2dmdsWpSjJMZu",
  "key16": "3SD2KDUYUQEdih28E9zxZtSSjzwzPujAhiHV9GfCiHRDdvxmAAcGAikVjuuB5uycV2iaPbX2fEJjNxUzkBFZJwot",
  "key17": "o8iCY9qmDndm3E2RXxz9FhsnywnaqwMVkuWoWTHFZedLWdxL4Q6VceE96dbTq9mE8GNTFh7SPLxX87RpKRs7s6s",
  "key18": "tXbZEVineUQw3YHs5njcRMFpPHRKTa3Csi8WsnGZKuoU16fsjU1u6LY4Yg91HMmTvJMQDCbAS2Zgf2fC8maZDvb",
  "key19": "42HNXvjz4dVH43g3ynJidpqMx1MsAKdhcar3C5hd9L9jadK86N7U1m5N97HYd78BZruiuSVr6B2ti886TGqzkJSJ",
  "key20": "3BuqrVwUCtXjbUmdazMmexG5umH2SYUT2ndpCcJtWYnSGz7M4HPiKVmUT6FKT3FWnfa4ycSM5bbxdkWkhiyXwnaw",
  "key21": "4yNW3gVJQKjxt21ynrq5mrbueYJKjAca5eGeeM649dHjb1wv3sDGiJFKZhtJvCzRtatrs735WaNPzCxGqKEsTF4r",
  "key22": "4czm4xqBBnyES1b3inTsE75vb6MgEASuKvm5bQGzLSsNniwgKMUmmnVi5yGwk7HK4ZrDPpL4ZQDY59aMFBJaKK3x",
  "key23": "3vxLKbS6fgPCHqMnHD3vwJqsmwg69krRJPJzB6MyfiEZ1FAbt8fyqYTmdoPc8iREHHGn2CkpGSwThSC2cwdTwFqU",
  "key24": "5c3ojwiu4erVcHk9tbCMmjS49DBYn3zoRmndygQJ6cFF46K9NW9PUiHSD6MT2cRhSwUAu8bse7NhZjm9dnEGbEzh",
  "key25": "2qjo5MetoqoSchJLqCEEhDzj648FAwqSd78fLqWWtGvVUFTAPHNEcVRiP8rtaokCiwa5HkiAFvPktVyDcpSDQdCh",
  "key26": "4x6poX2F1hpkffxyuAFvMeExsQdZXbYHWJ39wb2uTVtZDFd2nfFz7Hkt2uCpcAeyUU3o28eKEMWpLgx1rtFvFQFi"
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
