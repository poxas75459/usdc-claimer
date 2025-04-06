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
    "iC4jtsXq91uxdCBh9PtGKGoY37UiuffzmVrF6exT7C3n62z6peqcmKsQexvKqCmpKEQGVqCswQvKMgEb1Ws9SGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KuBjh1zX76k5geS73g2AEkC2ebmdZpTWEWzbnVvT4nw3kcg8JQZd4iDJYhGDuFfBLXPiLhWNnnmG6kTeCft4tHq",
  "key1": "3ewySny9wJqGJUCiv6G6QCDh2MUB559fSd8yyQtTMMFb7y6tNtQXAaWfSbP7Hup3J1DB1TZTZrpEH6cV9XmQ2Had",
  "key2": "3DJSwSKD5LF6wvRkwb1ma8s496qwJnCh63Y6RTe3cURq32i4WQrWT4FTE7CXkwik5EgEDwBt6P4j9rDmH5tUitKE",
  "key3": "457c9QE8Yt5feHB92qhzaHPKrA4B8aURLwb6QuPJ1N4VWQyKu1MT2oEw6PzHdkXSwtp5kf4uQ5DtFnm2S283ULyT",
  "key4": "4U947Lem5xM3Q3aevgY4WuZNaFx5DAH73ayyrDgp3wqU1Fss9dHos9NXxUtyQUczBNqc7bVFCh3VUr1p2hS2No12",
  "key5": "xDJB4LhocD5NNx5pW8oMGFusVTu31GLpDCp7fdx7sSUTFkBPbdEDZvn7exg4fGrifpbfLwfhGcfcGy4ZTrFWrcL",
  "key6": "4GEQTQdHugkWoUpce8fCEAqYJAVwVbjBp7dCVAGBXxEhF5avR719HvbD5iAoVqb2kUeUQN4mfrR1jjjDwf8weUFM",
  "key7": "2ih4HZHBkYW2pfrBQi2BtuZ286eMawhWGvMdR86Y9Y8kb1WoMYhoZ6s9VKP63jorjyb3mMW4ck9uN9U5FtcDjANF",
  "key8": "29eSGi2rS55aT947QNgkvKS1SG6KtASi1Xn8GWvZzmfVSmDP7Y3o2NJ16WsEroy8v23ViVvapBbMKscMtzwjWEWU",
  "key9": "6RtNbcePodJ3n9gwHepbcTW7z6tVwudcVcj8URNJjaG9Xi5LF6VEw7dnFiCz6NEosJyyg26ppzTNCfrp7VhZTFP",
  "key10": "3ruHEiFqo11fj3Vhq9A9Hbo1JLq7NRsa97Tg7ykVs7iuKMxhPff5N2c6wjqwrcsLnuLVNeCYeMPVYXbac3hjKgLB",
  "key11": "KiJGe6d9JYZzbzsrn5vyCxxxjBsVFuVjCUuGdJPoWwcNw1fNUEZrxGj4XHTpgaPuLBa1m6HmpZ6eTtEqcWqFFU8",
  "key12": "5BC96MWut9mCNA7QnE2SqxNyhVR9vH1N7SLxWS887vudLphVwaJR5dJdpYTb88erURctmzquMe9FyjAbzvMDWt3S",
  "key13": "5r3HrT5jxWLAgZPUYSivGUa4RXcESxRSdN6jfYSvU8WSZe7qjGJX43cDnsyfGq5H24UZi1HqefkXxw4ZfYGr1BSN",
  "key14": "BhHRZbhSAf2qMePS2QziUBqwzNf6BDnZuo2VpRsrsNw9aEjhWawGivkA2KsQaN4WgSeiVmqmyVkardRQ8HYTr3e",
  "key15": "44z3uVy15gX8miWhfQfGmX9uS6TaXebdegndL6XV6PNz6QJA4JwmZ3GpH3RsxSzUN9Fo99GmB1372eVxxNfTtKhe",
  "key16": "2zDn3Gbj6vXNQBW2DQ3gJyRh1p35caMrsPDRptKVeVcK5HborwVGZcL5FJiMZYXTyfwAhMRivR3mVBvcUr45g6Ya",
  "key17": "65eEBTH6usE8Em85NBtD3AqgqYsRR7rk4oP6UyBL7goF2AGoDvJpMD3RMAeqV3KPPMDaA6bivjTxmBnbeN9zwscb",
  "key18": "3cFinCbQgbd4Lqjdeuy2Li2X6JxZNqoURFgPCwYQUPznyEALiZJbmPAWjCdFx3drDhKNH1y3Az896xAEj1LCR7sm",
  "key19": "jUcHkqnHTbQWH2LvTDmvqtSeE6xeWM86zwyPtYRVKhur5psoDDX7kovgP73HBhzwNo3vrBTEnfXByKfw3gCoyNx",
  "key20": "nFGKKBvmXJpYRY7mv9ictsNzsyPBZDRnmVtx7SUrvR5TVVTU1Sxyw2fYuzHkmXsqX9vdtsHAnMYFMGvHhJQx6uN",
  "key21": "5S3xpr1sC3voA95auQtiLrHsea8BC7snZrRQnPUs8iH67A6AXpspzst1yaAphC3KPALLHEmc6jmp69Fx2a1ntPpc",
  "key22": "5h3ULggLDB7FmbXFizrtPbaeHpdZSB2uuUeZmAUEg8NBWNup3nmAnpuMYb8P8AL8aXfH4ZsXUfzujC8Ze9QRDjEc",
  "key23": "2T9RJavq2u512vBd7X5hGzAVHnhi8aL4ymjPADh9FYKfaYpX4oFbjniP93XMsmMtxKdXNo6kftRZyXTVo8gJ1vTr",
  "key24": "54tBnowQBJrEGNVVJNiBiUJNBaqC7YKFwAB5axq9T2dGJD5Hdww5Xb9m4MpvSYHTY3gtcTKgquNKKccDEMrGEYAC",
  "key25": "2VNeVAwBEqrhUV2UwcM9sP874SXs9C3ADnsbi8vxNfic7t2cL3bMFiVb1DTiii9tTzAp1BFqJXbUmKePpFAt9Fzg",
  "key26": "4DUqGWXPZHNBEmh9Pw2jLBB4YBubd7KFh2YDVJ1Y1aCyN7NuuQxu7XAPAJxzcqiCY4Gg9KCby8tE18ehY8racBhJ",
  "key27": "3DsPcmk4tQXKuc8mzpPeQnNNbq1cVB3oA8tvLGhtYfkniFikuksrwaj3KNgBMKw29tUmUQWWtajD4NCj5ERo76dZ",
  "key28": "542Dugmy265iWNQztbDPKSWuf3wakw9ad6rVYfuPVEFrJxFz5vEuVHtJeorqfShRv2NV8uU9mS8wC2m9B1vTxYMk",
  "key29": "t7YtPJ4sVgHMvKsaazicWT8UUt1DBX2qrY7EPC9sEcffQkk43dtRKp8bHR19i5FnJEA4mHMUMQK9fXvyQifMRgu",
  "key30": "2ewqfzSB654zNyj2a5dxffbqhJtmqeXriL687bRWFxjS98F9fja9pKvjjT7SJPb6M3dkTNQFjQtyNzREPapbWsA",
  "key31": "2mBsc5VesbHsqnrGFmC4eZX5JcKpfwJadqZm4PjZkEx1L8eQPxypvZS2DP2bbw5pY5H14hjkSQTEpXxyb9Bxjsb1",
  "key32": "4QHYJn8WstXJ1RAAvgzJrdmMSvDr5eEerfpo5JeU8tYFH6jofyBKZaAcBXtdBqGok5hicvdedMxhMAT7xjGDTpDU",
  "key33": "4TtgmhMAtQop8my8M9MoH2ei55xAKRXb6GxE1gfdi9qYA2habhNKrinfFQTSyYqAvwRK4Ktmqxym4NmQ1rtqUV89",
  "key34": "4Ps8pmEACiQJ1AHBQGFoGweMCjRwQ4mPQYXgGn6bFRaRUTTRzoyBprEDyobxmRsqrajjTERceZYRnDtvXF6NGD9N",
  "key35": "Q1dCaZy3PrAdjVA9wjKbc8BoeXftNpUJ6K8Dh1JUvdSZ1ViuZABtz5twEsrauiL1m381PE4B6SUF28BkoiLXS2R",
  "key36": "5sYPFkNYP6z2vWmtGJV8RZGMuymQkGkvbiX7zvJDanwkKSMrFu4wzoir91qLyAhSU7Hjfdw1byCLFJJtmVw94cVG",
  "key37": "3jk8zmsuStkrai6fmEsPF8u8jdV4ThwrXuSqYpwGQGLNkYb8UrNCqLQSozMeoMW4cZ855m7WMSU15X7d8rqb74Aw",
  "key38": "4X7sNtzQCAh8oPfGnP1F52ed2xP2XB5BL9XS4kk3jHXJrM4FSjNkZESKJaBGLt5EyYsvbtAtHwj79MgqUmzou35d",
  "key39": "5eLiLTQSzhNFx7eMBPpgDKs4XoypLiAdBte4DA1ghG4HYfFV7TumpTvNk6GNs532SyZMmYUrUd2wRbbEjYGDSzj",
  "key40": "24NQSYxqxkJi6uLcTLZ3bSueAhp3HosufecGAues5K3GiXDJ9zNCVH2rVvHzYhMW7Kfc6Rr6FhrwPbnXogCRDuJT",
  "key41": "46FaQZPWToNMvUVor3Xd2t67pzSPVJBMH3yDu4REQBP7gSuhHC2TS1nfv6H2LSBr6J9izWphrfyEWg7pyy8gkEh2",
  "key42": "9QSgdFQUTgLrzBUC4yd8VaG9sy5ESYR3j5FPtvrVckmqW5wE7KTV6KhkQ6VV4nZ2mpHR6dNYR8YECjbYa2z8G4i",
  "key43": "3BKpJPJmh77dWUhy51vjFoZWMenUWzjwZFFEemSdjL6jcmkgKsfGfa6RvTrwc2nmcX2sHmefPDH72mrVDD65Jysp",
  "key44": "pWQZZfYfdcZYxkCc6gu5g6TDZFrNXrd56eoidZX4cPWDQqTjZrEqMigrc1f2PQED2JQGGU7Ehu9kShUjtBisK3t"
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
