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
    "24NEaxjjHJy3rd8H63ur6owceb4SAjbRUZH4LYJUkCSJHPwipXcZxu3hJAqBkc1zYb2NEW4ykC4xBDyEE7wcX3J3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7UeFmsVKspNJZcpJgaasp1ubZWatajX7un5Jv1FVq1dphg1L9PiatybQ7ecUajKgEsSY9ZGK9wq4ZK4qSz22Ei",
  "key1": "3rfeo9VrqeY6N9kAvZgo6vhV9BUCw4GFx8sPxP5SbLKgtsQ3xWsXmUQqFPXPHEBbKHN9DJrAVroj7x3K4fC8kZgy",
  "key2": "5ftEBZ6WjgiLPoHGiNX5dBdsu6eagKeaDMDoY3Rcf2JZBDpCFGxbiRNfCkFLiL9YRty7aPSwQsgame3MHoiuTtma",
  "key3": "3r8gS4DPXoZfHJDAC9mjfKMqGtzMEndJ5VGYTXhRGtpopM9waoPeYHstSwpRYcyfH3GjToDNgoo64LWbrThzXJhF",
  "key4": "5Kyq17m9mv3pAq4HgzVooNwpUxqcd6kGHLqAEJZeE5cBG6q14WQPt6tjXAfXEckR9ARVhQLHNCNeEV5is7pq5cbP",
  "key5": "7uPyzEfiVNNsVJmr6YBGJnDeg7kvfSZAEYPVfqRapp8b1WyXVWT4ETado4NFPUwop9Hepuobz2W9vnXMd4HaWWo",
  "key6": "1yGNJuiY6QzpPiiqMGgjgSXqqazz7dxwoFvKLGeryxSkeBWQ3JBprieo35cwaPF8Q6TUDUvSgQ9VyQv4foW5cgT",
  "key7": "65BA8B7jfikLsTsTffKDraMCCvj3mkiM9XGXJUUYLU8GZ4dq5WyT2sTL1Eg4tqCKKJriUi3iss8ea9mqN5gTVBxT",
  "key8": "DcAGYpSQpXKu54u65qgi83Zo3uWy5hXpWEWYUvJSR6zG428bvzvVfi7SKLvmJoKW7BegUuHmhKrSxBVgAibNVCi",
  "key9": "2PrMay741QTc8Mjq2JgM7ZUggyh3BfWTuHaGG7ovwV56g8Vo5iFqCEozu2gaZ5PSiv7FdVaCk6bzuoJg6JGEUrgZ",
  "key10": "3oMj3GQvdhniFPZoSG8zbxtthGsjLcjqU7DiHTn3E3GLA9jzcJufEirpR8mM3yXoHFjFxrRJqT3VMxKC8XhcMg2S",
  "key11": "3JwMRnH1rdFkoA3JHxEw5pwJBxPetMkhH75GMvWgKZLQivtvYQ8anxTuGGxnV8EUKfwTSfLio7dJx2buBwD17SSE",
  "key12": "4FTLmAebz7QYqhWcjWmTF4eoQppoSHdXcuuSCfDfWkHQqv3AqRuBHfL54PSjL5nxngM3HjkNNNZEan8hU5Dvp47u",
  "key13": "nmXye8DxbHqhydhHiCHHnJ5YRQDtUWLd7wEWfRHeswDkaA4jr891Foio9wjF9qfEtm3LGmLqh6zkPK4dqxdysr4",
  "key14": "5KoqKqXTiMJDUBrcMXW11FxoAZQHHhdBPH8pzwvemZ6DgfpQtnB4fRSM9PB9UQVveubbM1bCiDbJ2y2cQCsKyJYs",
  "key15": "44Tz89qcMTsQ6GbopgbagKZaAC7xDbWP4WWuCuoR5rvKnwRgpz6Mr8rxPRZnm7SVbBy8Lgggey1jH339E47SqnDE",
  "key16": "65iXniWHfhYN5vzyQoEQcaKZRatA5VCG77y5BP43Jmd8dPJ3rwNAEiyf4uwzknGkJuq56xpsijStDMFrvzWyhxAw",
  "key17": "3mNTptsM7YxDmWGK2cEUM7k75x8zbq9nr9jmUTu33pYP7GWPvsxH12rnrAfHE8kvG92GNBjiPyJXYCgkX8RTiGFv",
  "key18": "2Wwdim1Kn8D1aF4CwE4kxKCB5xsLJnKjUKogC3eS57ZzsHZBqHrDNvXKa7mFQRgDqnSwt1n8XpfLiMZryixRqFaU",
  "key19": "5aeEvk7MJuHtWP3AtoCbZpaRHgVa9DRprimjtVooWfqc6FHQ4X92ZnDNuqyGBKCdqWyUcbf8eMpZdjDka7r9ZQyf",
  "key20": "3fEfnWXe2oaEucLuPQpvJadJENDjycNPBzWWMKCBC4SksewwCJZ9yEcZrqFwJYXTLRPJC13QBvmAsfdgNwMVi9HD",
  "key21": "2GGBHEVte9KHWoXqTe58458tK4WpDfQeDS9BTET1hEGPtoo4UiZYexpi86zET6MuehUQGsZwW2PUviSbPH17m9iN",
  "key22": "34ScCgq4zhjjcuHR1YNF4ufCykAXFmcDacSPRds3on2FdRtYMfTFAcPLWY8HLvTFfvP3McQwB95ixC4dFMVSwoad",
  "key23": "4GW5H6tfTSKmRoJoKw8eZb4xRM4xgRMTto1BFEpViVFJWYy5g7s9zubhLm87PhMonhzZKAdFAKyQuAnai9SGs7kz",
  "key24": "57hGcyxj5Dpdtt8ZiorhyNgtyfVMEA9jm6xXWjd1NCBRRBbNKSRh2m1uypM8B3weRLyTNdSvScmk3oYmoE5unifM"
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
