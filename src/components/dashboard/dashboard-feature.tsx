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
    "5TG2Mmfo819REp9FUmgHXEkhmyJdSe9MZkRcFyb7KELjQFfp3Kf22fFv9JoFMCXckHWL4v4ZiYHxGgF7KnHzywPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QFkX3b6bzeDasxAHuppHMSjQdYSZ1RV8EZ436ZRsrAL7J7VJR6eusGDDroMUdxuzxiNhobjHsN5Cwgf4fTF69t9",
  "key1": "DBaNXC28Pqb3fqeKBPfDqGAhrAynWa4fgKRJs5Yte2wZvBwfw2awCAA9yDDWm6yn8d4xwFRsJ4o83LBk7ZKa2oE",
  "key2": "2rn1qAdnCHoFqayqab5M7duzpCZmn5Aek6reJC5Qb4bZDqqVfsDLh7kHitMzT9uftwPnu6eqWURY9oGAhRwLoQTb",
  "key3": "2Nw8bemJF66jdqHs9cefq67Kn4ppknJ8HdLXSqbCvczZxCtYGeB52soNujHo77eFkdDtFJG9Ma6jW6ki8YgUyQc2",
  "key4": "4eyBJhhEvs6ChSWQ1LYSPXB8WrphP5rS9f5Qu3Mw1ppJgDbhD2PsjAfzYVCx5ZfmVAXCjLPj8PnPMev1MP6ADrVt",
  "key5": "3UMVNbQhsz3P7TybN3PmndBrKhEVQzegk1RVxFRG8J4ha9b3patd5PyGU7fN4RaLVx8LcCP7MgrAJyW4ocD9epnT",
  "key6": "2DtK6a4iFenp7k19h43ZpNwxhzzkV3eVGsTnziANH6M15t2hYRn9Yuv5zHfBYL8mPkMU8EZJetmd8zg6Gi3x3mai",
  "key7": "3wbjkPnVHWdc9JADHgd4o6ry5ENaNrBxeRtgdsNwxbLy2Xw6wwPLdRNqxA9jdVpvA8sFX9vxXRAULHGqnggPxheE",
  "key8": "5oiGitMjXhjpyxbk9oSa8DSpp3kBv3HuXdNpZ2ReWUaEYkZAdS4zfHekXZMjvr9kTyT1NZad5YUgGBUKqHd6qzTP",
  "key9": "3S8B5Pd7EtLEHfXiNGLJmudoXzdxGJisBuT9yKBKK9UrtuuE5mjdaeUuZ3Wsb7khVgd9XnonYwuNNsDqPs5rqCH",
  "key10": "8WuTDemMmjAM1V5K1H5C7QjwWL8hJ48ioVXwqMADsBL5mWwHy6rKFv6hCUj3xhKFukD6xedyQibbJxjC5LTDh8r",
  "key11": "65s5EMhf4J1R24gjUHRT5G72221tXy37HNMyDHZyoqfMYZENUiEbmwjnfvKrA4982RaaJnDYJy9UfFzh5JuPBzKb",
  "key12": "3BKcbgEeeLjbgv6z5W9Ex1Yj1eZrpGNnUE7s9ouTGtz9WRxs7yNAuBu9NVAxVgHMiMUWyoQAk9fc9iV2cerxCpLH",
  "key13": "58f6jJZ8ETK22sn1aLSNLBwYg3624k7qTaXsuDJMbctfj4oPsYxVCb2qAAgFJDF4nUpD8RYvHC7CnP2mhexbwVqW",
  "key14": "5rq9BhZCucXNA2qjF9RLwhvS6KFmLAzWGPJTDptFEU7qzJynEqXgwct9xpuoAkckqjYZgz9ztLvqAy6vA4uNGfTJ",
  "key15": "2HrSWySNYjA4LJVGAQ7mx3DVrhq6Js9g2sWnowS6BqbBP1vPEQY5FoEJsJ2nvJzYWExDgoYedCA5aJ9i815JTWzZ",
  "key16": "ADUFYsGVFtVPMjgJ9W4h9KhJRqHxaKfGamaz6ExNWsWVHcv1AW8xA4B8VRgx4Ubj48ooU8Jtykz9wAM5jZGqkSo",
  "key17": "5rsNaHxExoVvRDaK4SNwjUtCjzBnwAaAz5Y9ZXmdQgT7CSkEGovVS3BtUsSSrec1FaCGHAHGiyPzCfxsmj1EFjDS",
  "key18": "49DSQyNv7d3Yw4ij4xCf4eW3iXZFh3s9R6cHUB9ieYmPe8tygGdirkHbqmbkHEQpa7HdppxwTwyp2xtM7yZFXW5H",
  "key19": "2x3HZvKvFmLTdYx6FjCZNZSqovsokLaoqzLUA2vJrPh9e14HH7Ck7j91aDaKUcJbB5DA7SHtAkSGL5ycDydpRBwo",
  "key20": "51qbmTfhamwd2PopmgdqdYRYVQS83p7nLLN7g7DEd8xKYA9cxj78R7ZiqZJMhQWXDiZqbzJNkfz7oKL8nKjCndg",
  "key21": "3utrqNuUqCrvw3w1xfswjwPMGHCrn86NW4Q1bZvKP9JDr4Kc9Jfgrdf4dxCuU9W3NfxUzYXJpfyZ1VB5tQmTJXPF",
  "key22": "4Fz9rxayj3SAvJj4iYocDEh8L5aa2q4M7WNmMA91SZuEHFjiov1qrowmNAbTw9ze2HxZZxqDAicxtwqxYgKa68fn",
  "key23": "4cJbeye3y2sit2wcNNY59SztKUPJZT5CUc6ZCTtHNQDYRbZrBzHjE6foHboiK4VN7y4juv7PmaMa8uDUTwmks52J",
  "key24": "5dpEouE2dTs7kjqCVqQP9qzSbBw3MtoQSg21HyezGwUeRnER6eDHtFVrnhcjiVTsqzLPHm1sGLe5fcamd1egGJgK",
  "key25": "CCXmFkFyz7dhhUbArceyFHCAPwd2LMDGUftesPkht7iDtqT1zHfGhoT1HG67JZadqf5DWrPmYQWfwMuVtsLQaYA",
  "key26": "R9YGZAH2LZuAtR1cZhgFimJn1CuwRVBeajEC1QmtLeCg1zb1Ga9CHs4LjREnoMpLPTX3mQeoHjuoacB16JwV87k",
  "key27": "brdou1ZiS2AzcEeLfTHD9YZE18TXR1mNgidnGhyHCDCnyp9Ppmo5hxjU5k1vANzaQXpQqw94oXJvJTA6kEtpeQJ",
  "key28": "2dXogjoJNaZkGAKMU7Bsy3vc71VjKcz9xHjt9QNv7zXsHhBpBZMXnQihPat9NhJL9yRPVT6wvo65FYH3CXnsHCfs",
  "key29": "2oLVP6u1R339SeNharri6YXMvGe1NcE7MJbLomGc6NvZZgY9cZxEfp5rCyHgjN63YahqFzQyTkRTdgPq9Pq9BK7x",
  "key30": "5RXVYdhB4r4HLAKEyzzY8KWBGBMqbBhHmK6Co28bBbbUqETU8JSfPB2rM1tfKcHY2tFBBhm2WgbDKTQYJeBKAjsL",
  "key31": "tecjuQ6AeYTShVK4ED3kNJPrVNQYTSbRDrVvxfrZ3Aa7XrSfsDewXmi3hY9c4nEMGRFUCtT5Ns3nVMEYE7nydaF",
  "key32": "3FurpXwMsXN9gVpqamCXRmMcx8GzLoxccirCoowW9nLf34YZvjPbM9uWbRC2b22saDZGuzeYw369MPQZCaLwjhqs",
  "key33": "E3hJr3jgW3k51syY5ZaeNCENzS2fWQ8HyPmB4rMx3NdfG6ARD5G3MwYrtPzKZC2YQX8tp8ny3kpSsptkuq8YSm5"
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
