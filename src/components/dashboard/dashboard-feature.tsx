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
    "38cE6WzYDTSB2M8KLAxRmaE1t3SRHSex5pLBdgBvGVy1FTWoJ1vta7HH22m66dQJQQotBjw3uyk4A4iPTwLoDvCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFeoPVUfZo4oTciWyNXMF9K3SFj7ktVJBEmc6D5K4HdM681boWa29FzjBu4SLoHHcp3JKLG1DdX4G7r4TWcmVPU",
  "key1": "551KjeChKD2RNPkrDW5CitrszjYYauMLL2khF2Ga3QqXrXnH1MKKLMC3GxSiduTyp9GJ2KUYboYaSQxnFebvBasG",
  "key2": "4uwPUUjuZVnX2A4w1i3bfXai7ftyHeRQntWAJt5owYuvcJQ1vpHmoXGNUEJGnGgzgDUT44sNnMpWyxNQgykQ6TJ7",
  "key3": "43Hw7FCgajHcrDJHV3R74TfZoUVoB3eeb79PaHhzxdBcQ1vNfxKTBcEtEoStowMMbAyMRCJTpzPQj5ixLmAh9Zyg",
  "key4": "4c4SbpKhDidNXA5PYVs7HosRi3RTg5DX1R8s7dV3fRBzsZNduyWvkwj8fH2MR6pvxMVZfbxU3rUypygB4qk41eS2",
  "key5": "2q7iCDQRaa7xrwd14yAUzhM2XVH8s6XQKbqV3u9CMcPk28YQfJWeV88vGwDs2dTwJocaB8ykxZj4NurybCrJHty3",
  "key6": "3hrujiyY8c8H4N8HmHqnE4Z8UHYhhit4YweHAhpgm8NS8hUWax9zVBwMYANemngTqj1ZWMRnCjYNHvn5M9q2oSgW",
  "key7": "3CNbqNjvcMaCsLf9Xu9Pfb5UfhrNyyvadpaVFh5HwLhvicG3ibEt3ykcXKnyqP7sAHfQr6TMZmP32G1ukyx6kq6n",
  "key8": "3Dhtqq194wRtwC4f9rEaLpp2jZquPLnoJf2Ubffq82ThZmCYUKwf6x3oXYoa4erpNwQffoXNUR5Qza7tF7HU6Bio",
  "key9": "5YE89xqJVWXwQXUyVyJy5QkwnPyrn8wKQnYZ2M7JfZfcNN6cRACygbt1oXXUdARpphx5DcehdpD27rw4BSZ8QfN1",
  "key10": "NUeHsCncjDZ514JrGNNFNU7ufbVnNY6iJhsgyWMH9yznpPLJBS7ooUNpt5NwFRpcS3mvUWvTHBYgeRxVzG4aP2X",
  "key11": "65QCNHx8Unu4YF1Jf7ncLMDQYvaKYNKfXbvn9o8Gm3Ft8xWfaW5gLV7Sx3vwzSHGLbnLhEizpPFkETPqbjX4YNg7",
  "key12": "XyErF8KSa9C5uBpexAfzS8JQzkayCzpAy1U1FYvQxybPCDUgfvFNSHGg9B7eJDphXca2CLPEYMCzgWVm6KwwJ6V",
  "key13": "5baxsNwFfQpS9ioqWJpYvU27iYcxeF2HSJ7v8P9JRu1kshgdBQWA2biCGbJAbBguWdBRjfHF74YUSCDyc8BSXc4u",
  "key14": "2ow3kEdbd8qb9iu8e5b8JiqyhpH3JVSSegFbTyY8zYmZpGbw9uwJeKrENwWSLiJzgutiwQTms3tdLZffng3aCxAn",
  "key15": "49Bojr8HjqXv7oS8q2aWrZmig2nw84vDTjhthgRRSW9qWEX5MK1EUTY7PG69cQxnwLoMjKd2YUwkRwzrYrVXAVKb",
  "key16": "45bYr6TA2xiTxMUn51MNj8usHFiCqWCuLp5ESvEkVf5Ph6MAmwqtWUNB5RUoXSZkHDDqAZSaQ2FF5VL3yikwaZfV",
  "key17": "5SZkqzwD5JEhxBuJ7csKY2YW63KE688rPt7PGE3utudua5xVjZDMRhDugaNEAT4LWVWQHYuBKUrtQeuEGzK6Vjxt",
  "key18": "3ta7juVC2TvouPwzvcrdi3foTsjA84kse4QPZp5Q7pntKKNGQLAT9Dot7XkZpyUsYYKtn9hC36KWWnX1tw8aaZ2",
  "key19": "T4k4BKsA7PpuoHLLCTkJ6BhiaqsSDSPULKgDV25UTdHmW9LFezseC4o93jSmUjTRajoAsmciXCZpg8vTT4qMztp",
  "key20": "3Q7y2fRDjtYWcrsugi8ZRwMy91ZusnRgyQ2DtYAXpW4kBKNoEDyXXPL6qTTnYaVkx1fSNg8ub2eHi99w3fkSmPA7",
  "key21": "61xnaWtQj65tC5H3q9zN1Jod96NTZBVKWWiUFMC8kmST6uAaFKsGLUcvyA3Tj8PmwLWTNDinfFj6kqhcVZF6p8pN",
  "key22": "5ixeivJ89Prb84ft3YdpfrJe2xPj4oSdW5hMi8cGxH9yEbF1KsntnScZg92r3sG8bcQXvCweUpFAP9Kbn3HhhGa6",
  "key23": "66tU12o7TXGDWxC2uL9LNmki57qYYgUvQwXBbN7ZQkY8DwRnPK62REqYhnkg4m8My95vozV8KRvFSnSTqB9fW1vQ",
  "key24": "31SobbE4V3bBVUMaW8mkffmQ6chKr3TKTRG2qnzj8DouABVJpF1cLpnLkTirbkHT5w762hgtTqjqQ9Bqf2sf2XCi",
  "key25": "2cD4Nx1kPtc2cGCaGEUAaKk9EmzChVpepka5wc8oATz4oVKA9PbJeMgpDQ2tpM7pB35Rj7oBmT7jYEFCWFe9TStF",
  "key26": "3RoXjYYA33pfavYj53wVq4TZA1d4pyDxu3SXLBDw6Jf2FG5hSeYspaU19AAn5CbvzGmzUrZCR6FYNhUym2Jg7DFe",
  "key27": "3wQGssUjjtj6Zc777c5D3bQt8fFoEk3XDnWV7uBGcfoceGQX78admB9R5q8QyKPvo8f2B9oZrtxKWQDPKGtPSN4v",
  "key28": "3ymKFcFE9GKFmsXhG8oLjs5mXTS3NXq6JN2jmHSnvPq32XnrxQgVRQhrp2gQddVK9xiifT8YE4K1AgXUxvSchz1i",
  "key29": "wFkRHX75MnCiyZBggoQZbsq28RxFbtYZgFtsfQyUJng96oGGKSHQhBc3mk8gaHqpwfbqSxM55YrNkcFGRrohepn"
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
