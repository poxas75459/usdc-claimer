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
    "268PV77mVU8cGdjCdunQuWfYxCQ5N7yuBDRmirmofrY7cwQNCrVCeaz5jof7LJgmtThQNG56EZeVCJGdaiFAbz46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GdYdyjrB43AgoDzcnxfFLnCMEWUBqsFKMKj3zCY7qbKdUQUYfyZSfyebGaU7x39yj6hLB9i7RucHBiEpwy7sRQc",
  "key1": "QirrZkZ9KjirojFR8NBosmFev2Hr1vkTLhJgLrZ2Z3WCw3o8r9bv3TAq5UMFHE852J1vwFP5KwQRBcpJzDebFMK",
  "key2": "nZuH5UxTDru1mTUwChXUEUBckwZWkaNVx9uRL48uvY8SDA5QaYom5cGtawEC9duQ9722yPX35YGFpfSnw1DEXuL",
  "key3": "4rrLD8zhyHbzHUtpD44rY766Yxaq1bfJDzrKBQ24f7JZ7W9ADPLv1jEH7qWLBseMayh1XXEZLaDXL6sDehXkjism",
  "key4": "5RNyCxssgdDYBX1SQWLTxdPt73uLDyLFzqEJjNyJeceYThQo61ZS71HSkrWMLHYFxgnvzrYfPCFYF25ukNNcMT2r",
  "key5": "2b39zVXKfMjEaR2duMofUSkykGQByJw2omCfUJeQvXVqi8djMomCkdYfXsumCiLJS1ji7rZUbPrXEsd3frGJwfmB",
  "key6": "5Mb8uYegaZ2ywV7eSKz6tLmQ4o5h3VXsaryyCwuW6ZUaVUgCjiyDb3bdH1JZL776DjtKfV25Cwpu4uFKhWTFxKNd",
  "key7": "4xVQ8dNJTYupmdx2DWEKGBRqGfSENi8VwFvLqiorbyPBqYaVSyGwPgCB29itojxTWPbmbJ67LJVWFNLGBCE6ZtX4",
  "key8": "4k2fB26928QKrAk5vBzcSo9kR8QTszskTg8o7oGtc9U4NzXWVJv7B6nfB9stadKzCf4NiyYPydMPKv57tMnCbB5z",
  "key9": "3xJoL9rNbGrqYZ7XSpBS2KYmXRpm5W8qae9mFkMP9T88Kg4FwH5wyfUxfHpxp2opnkerhaSQAnMRFALF1NNrUHmr",
  "key10": "2bE6BBJKSueX5xsifkZkbTSLHTp4JVJLrcds3xkHS2Xb3HzYqFzv92o6m7B6yFRZJH6xXypCED1SMg3PjnU97kQX",
  "key11": "3t74x2CbDvCTR9seyUrKWdaWHANi9Cxosp1mnrrwj5j3EUHcoX1MQNygWw47yHhBUojNuPMyKjn15QLuuK6xfP9x",
  "key12": "4hnCsjfWXANAj6Akphg2dLrdyjPMgtxvRxFLFEzLJsbjJEm2UC3ySYZtZ1THL9xCKAWTPuyKScFWjXRM9EZdMyuT",
  "key13": "TRqrsVfQz24PjXid968CSqMBzdBTR9oQ9zAFgPeqepZLz4yRNcBJr1pjmGp3ZtZK8Q4B2Dvy2esgehyHwnuHizh",
  "key14": "2v8cpRCVD9iBytXiqqVrGEFoUD5fLg5WsrmvPW9W6ubFK8cLdZnsEGqx1c1Ev47eJwNSPttDtcE2yLpBqrnBCWT1",
  "key15": "cP1QxxgRHVr1cqM9nukQexTKP3u3HhH7bvBjYWWtBJsLjScZoa1jz7cNunQdk19FzfYtk1jDw6LrAWvvsuxu6QQ",
  "key16": "5snT1QyxtBENZEjcfB8jn8HiqzeiDtSLiAHGzKBYtUWfLcRCR2vxXeyFZWEk8woiSFUEHcSn84JVNsstYMSBgEEJ",
  "key17": "D68S2LsLQTJRP2Xsu2x5dQ8gdoBbqvw3ofshBpfsYzCBamX1ugF8CJ49pMSmG9GbBvXEL2tL2HRGooPrXtXEmwQ",
  "key18": "6iaxbF1t275hhtbDGwazh3PuaMsTiuqKzK2WgrU15ppyA5RJTWLXJDzcpmv1pMxQ3d1JZoGPNMXgJ7M3qLvzbYc",
  "key19": "3cFfDedt99YRB85TE45MybENqLKGxfrTWPES7tSz4872bVLPuSSnN4zjKm3p7JVPqq7hYvN67SUDrHKncgb3yhdD",
  "key20": "SoxR1dQ5BPQqCYGx4Woikn6ANKoqVg8WeKpGU6GczRbXWUUDxWCMhJ1jUXMpB3oMoUuBscCujJbaoTVqKhXGxkb",
  "key21": "5JKVW9nadPbzvszksqRuSRRpm5EvakxrHzgDnSdZAgNRwKjQp6CAVYdd4ovc6WsjazmmLy67a2yx4pReGsFT5bxJ",
  "key22": "j8RXAtBGCD8gydmePebesuUbanBcX9GYXWY63CcLNbxcos22NQ839BeLc2dnCnZffURCpyugiVtENzVZh4WTEUW",
  "key23": "2rkJPx9BSxEKC2PRcc5HWf7aMMJr2Sua85hmruV9stNfGtbUcAFHJL8VeUbCbQyX6TgR8h1ehTZEte3moi5TnEci",
  "key24": "47ndUrvEHwtJRc5DFPWZ2V2V6Ysv76xePcx9f8FKPe6Q14rPDioANH6CbM5t7cUyGiAKKVHkBojcvFhrgrnxte7E",
  "key25": "5UL725XswbMR2JYbNJcP37JantnpA7BtKTuwVUf8qKedG4CweBiTPXSHPCCaBXBJZcPqVDAukC7r69SSdWbxvSDF",
  "key26": "6nLZaYNvvJiwD3VES8hAxGVQbRxb5QXG3dFeCp7e3aghZnuMEWew1ymK1N35oSEjGAcU2H4UFcKSTo72QE7D8ij"
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
