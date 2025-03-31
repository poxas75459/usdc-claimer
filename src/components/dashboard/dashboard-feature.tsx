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
    "5uKoq2McUYLRZTMZ15Ppph9hoReWuYm83WKZxy74jVdTfBjGMaRujPU9euiRbNWZoHhgVYspfKHy1dsZLG3cawgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cy1QiwhVwTSW9YeXHGeTmvTVNGymDNXhXEFPiDfyQ8rVaVfdMorBeme6syZwuSUYLLDZR9r82L56ERnpd3UXbQj",
  "key1": "2vfEKn6GNgnxxsY9Jh7DwCRZMDZTMT7ZSE19s3PNFAn6TN7fvW9Av6S74NWPHczHR47gUmRGzHx7Q29q8kmqgD6D",
  "key2": "4mb5BgH6tS3Q3JxrNZyW9oWgNL3krvHqsu9ob6d9brJYU4CCnYQ9NZcdc3JteMu2h2aFLpDS15Kfpkw78fUnxtfd",
  "key3": "HXXARD9kven28zN95Nt2apCgXpfUYzwaHEFvE5RRCFiHBM94jTUd16QUV7zaZWbPSqMzNURM6xLYHpg6zGoSTJY",
  "key4": "2K2GvWU5mtb6TYce8UPoATRSxR7meJ1LYNbwcpvyib9ikvELyFA1bSPXpd7m4NgQ6nodEz5rMuTymcYEGQYnquEY",
  "key5": "3yV3Uw1embgaxK7hjL9VTfzGPhcDdTceBVUFDxJcHGeuErd6vYTYsDbAjn75KtEBjVj4PEnBAgQpMnWa8Nc38TRh",
  "key6": "2Bp5CpBTPLuQRRVTuQZACWxJvg9ZxkT3Ws5Sb9Rity8exbDaD9hL6zCaKbaoXagqisHujAWGqxBLqifBEAYXugFS",
  "key7": "r21joJX9B5S9fjaGLsQTmcnRowsUKydje1UFSC8aRgjUjz2JZjyJ5pkwcxwJwmrHCGXGfCFTKPSnQyEFUKLsUMA",
  "key8": "647aC93A7gSNTZqyfWdAEjSZtaQJcdsHde8BtByrLQatXyEiMLY4nGta5zD5WJeUZ2yKKUokDn4vwhUrsXaJWqpQ",
  "key9": "4WmpqCbokaXGG7nT8X5sz16SGdfYC1SbVtgoKsrVsrUJAuef7S7qQGnhJUH4vVBEQJcL6pjULe6NX1HHcrwhPV3h",
  "key10": "4UWCPp1CPXBkVDk1e5re1LVKLqqzT8pcQLKgbDSZLhNCChu1QQPvyE7qJFyJuc2rCqHPdCjW5rvnQcJ7eJKJPLqy",
  "key11": "6B8JGoSeMfTdcLUFygYZtRP3zLvYJzZVKZnRVL4hL9Uz2SDD1YZ19MJpVrT8EMKRFFy1YET1KiV4nTtjQ6MYq1H",
  "key12": "5Azx2GYGHQ7J6qna5Vepj9q6BfKWJFeixn7EXnFkAK5tFpVgY2a5VKUd3wQCFyhBLYHM78TKBvAp51sd5v4JkWUA",
  "key13": "65XogDy3CeVF9pdY5pLd5LqtDjqiDDtpuLJWBPsCJU7jArDNA26h8kk8UTd7CN9iDV1fttjgm8FznGySxe4rSbiY",
  "key14": "2wzAqjunrmqMauHoLNLddT4vCdtf1qQi2ReWTi8aJ5bjz37Ch7ECXXDn2ML48qdTGfSeWYT3KnFyLffWJP8vbVC1",
  "key15": "2STmhREDsqpNMdqri8XKD43DCiv5kHc4xAXhbVT3EQcDSKkTqhh7b89g38DFge9tAf5aYte6MGww745ByUCRinYA",
  "key16": "2uRCqysiVZf6ndE21x7JKhdVxHzMh9SorL7W1jLpNwYsgpmoDGZipz36VzzQFLEzeBK6R4rFKwj5aVTXgekqNNxG",
  "key17": "5JSAHtwwwoLi1ZfbWWPCy8aoWqepdSXsfCWG9n4KRUnzjtq7RYGy1d8ZzdzKm7zVBZJLu2Unen9bqMK2V1PywWxg",
  "key18": "54SXZjxt5VLMxvM2hVAhDAzaVedbtvAu7QqqTzRBT59s3suH7rasSpoy2m7kbjQAMC9kvw3JhuBEcrg3suNjpdyT",
  "key19": "2PQjVYQsaJJaTNqyxdwsq1t1iTNyXQtuF3aRB9CsK58a7HVFj8wmjUZn9V5QvAgVHNVi8s2GWvNzN4P3cirwDyHS",
  "key20": "rP3hEVAFBFiroXggxHA5iFhTTbvCg62PdQ2ZHiKpMop8wiqDpaWGBZs6uuqjRY6BcTiLBBAsEYf5qTbzr2wNXDC",
  "key21": "33aY9W2xnaGbeS4ny694cT8EtryZgy6P8U8hXQQr1Q2CovJRCrpmM3tKMmcfNs7BfcTAhf37kAWcwmhtEKSwjiqd",
  "key22": "25dxCLNCYNYwuHBwfAEAnmkH2vWhA9U3xMpjS5NJr54uAtwVWN9m8JsLvPSMGgKoMmnqcRde7TgNaiWzVcAtqPeT",
  "key23": "3861UJyo9oV8NFZGtNZjCun73v3TbSnJUBkq8s1dq3gjAEdMBa1rKP9DdKjyHFSHa5o2a3HSXKX22kV8fbi9zwBK",
  "key24": "cMH7LLX98dDH7fo3m9D9UWJ6xuPTnGR16oJuLgZ2GoAE2avyU5k4ZCch1vELnqpcN7MF8xRRjqn5onY5cLuMabf",
  "key25": "4zDkSxqhH88FmbjbdYSrk975kN8pSiF75RCNWLK71Ff6NfVo4TwApsADyU8veRFYgNw66nk5hsz81mVpofmBwRyM",
  "key26": "36Nm6CtZPfzjW1BDXosvr131SrpxBfP8WjvZ33ewEKxxnUQAzSz5y6wrCcXXmsbvU9jfXQHgrgZSsLz22wSTxiBG",
  "key27": "5X5DoRaJBRQWM15jExYM7WAEN91cyh8fDrJ1ZTctWJPhiSRM1mmdnqmeHMcSn7XS2p281MxwkZT2CZRCEddcxxJr",
  "key28": "2SqdAL2tCbV5ebT1DbyzUMw5YrQGQMAVp5BN7NtuHEPX4wACVBDNp2CiSkAzoEcab4FPYTTsdZKszmQgYLZh4ufW",
  "key29": "2H81LnqngFyCG1sxGZU2jddvvRXfzhksG62Gm3Yp3geZesur7MjWUGeyXjFY4fNHfRXsdie9rvP4Nk2rh7oDBPY",
  "key30": "4aGtHZYyCtrMV7r3d4ptsWbC94FJStugB8Fxxj5879Frq5N3SyXpPcZbHC8ikcz8m7py4Z5JmrurXKNzdEx1dJPE",
  "key31": "BwHuHr1YHmJfvLeD5B4PcpFJ2Xk1ZknS9gZgbsAupU6anGQ2RayTcLHgEissmuZkmqRn39sNgTcHyyT9bNVm4nJ",
  "key32": "2bGtUJE4PnjGDtgHh3aNvjtzYLa5rCzRZySo8gJqAxQJMjNJKcFWQqXpsYnxDTmSDzowteWg4CUfUUCRnUq6fBAm",
  "key33": "3jJBv7T3fPYLUEZ71Cw9Y98svinDAL8Q2ZQUeEcGB4TdQnUq9NqscA4GSoZ18k9u5pFw9eniHkPR2WD3q6zYtP6u",
  "key34": "4Q1j2DoP8Rvkoh4DJN9RyR9HBMksadcjF3FY7R8C1SxDGgBMZ261A8xQ3ewK9Q6TyUNcW1oUGeNqAuyQ7a8QwqTs"
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
