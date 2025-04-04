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
    "3Jfz784tPbrUBrmU7S191cVkYiJQh5FpFqDcZnSPPbKXhFmCASW1ncHqXndj9R8JVhg3TjoMiWpPxXPJURU8Zbna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mizx4EiExJRNQAAR95t2PsRd6kmss1xbJkW33LDPHzCbPCNrqzVkCYHrxPn8p6CaCQWP95k8LeN6vMhoJFV7rcC",
  "key1": "5MtqtNqQnESHR1LMwto6KZh1bZgDNSkzetRMrgrxqKQoZoK3ymxbfu6bioBJ4j8bYw6xVizpEdFWknjmrh96CPfv",
  "key2": "cG7L6FEYoLQsU1nC5vR5CS8cGTZPCcK62fKv7SfsRBXpVat2S8TDAc9Zj9fQUtoB5dYPKPtSbac2XxjPviweJGN",
  "key3": "5beDrCLSJUAG6tKL2U9CVPCGRxnDr3uyW16r86KC6twEvpFm7h41UyFexEqeQzkfHLbV7e5FCYYsbApBkxHKaLbZ",
  "key4": "5GTDEtS2xHV5fVwQYem9w5DRaUPzFRXTSVmHVcPjJcePWvgEjJkprK2LvPZcXZde25cFhhGyCzkRzoDqiXP71p6T",
  "key5": "Use8Rbk2518DVKbpXNQe1tyoa8RbECFcrEKuXHu7oHCxTELUc9YcRBXXewhF2jSuhicsvDVvpfJAQUmUPGX67Z3",
  "key6": "KHk6YFuY87NAA1tqETjbnGQ7D517EmKigP1Z8EeYL6sBs32T9X6gekkEDBbCHjRRhhP9xDSF6eQg2cGH2tJYtu3",
  "key7": "52AMLszNYedgvfBAny4GFLCXnfAAbQQteYVRUiPgi9CvpKfTFfALkwHXP6PB4Y4k4Xx8fD6E7KYuyj7Z5XFyno7s",
  "key8": "5iRV6kg1gXrX89ZvAdbeBpN5PxszPDCjgXtG9AJSi8xKPMbJwrfQYQctMiDAbjvpBWkegVdBBFwEvQHiQ2rGPRde",
  "key9": "4n6meAwxYUazWYfQ9jJzTLTyXGdsyvMSJLnrnEL8nSEGnmBAgQZ8tHy8LRsZXECg73d68P5RAkcUH1tbQXwV7Wgj",
  "key10": "4bAC71M6eXMcgcfCVwTQn9fjbcHgZTdA5oDZRrLEpr3caVox36g52i3MPVgCNXqEngBrhiC9LPk2Rq59UCPikmaJ",
  "key11": "4T9pGzF7bH7SdA7aZutUrY4umZqJjDN4CoB1SE9ykB6ih3NjGU9h1DcNnGBcKz2tiA3SVAK9rDEQy1ePWfwrUcsG",
  "key12": "3C54bDoXEebm28tAVrEwx9DsQ9BrsAkgLNestKnT1sFJdaYsWUWKorwqrjC4TnPRDT1TB7D38q7y5NA7RXQ9cyeD",
  "key13": "54tzznFQZA7JYGuRzssYtjgTmPFERLStRDXjDcD3yfKgMiQAsbKHbGqgVM8EFCgLjgMwuvwCrKoD87un2Cc4x2gU",
  "key14": "554MbfyLzTPwnjfoFHaGcoSrXap6DsgnDXnYxx1zWRbvRLhMpwkedsWbyXqefjwVBVMGN6SCpF2RVCcy6tg4g9tY",
  "key15": "51DSuqTMC1PxWjSLhTaDuDB2Muk2VgXFF8AQB5zPDKizLvJV46Dkf9RrxvBQcU624y7WMjF1C57iXKVqy3EJ9Ddr",
  "key16": "2hZKxkgkoQwsXsek5hvEJemZAq5pEbbaQzEUYEBr7ZFGYMGZCKWZP5s3zS8V4t5TAzuQ3FVnfWAWJRZJ3UzGx7Tq",
  "key17": "44eH113KcMHqmNnNPiSpww8HSYeZAfDTkFwP485WD8vHr6ucRezmc7TkTbLDTukmsd39einveHwccmEwhtaspRQd",
  "key18": "2ZSAu9EM6soSY6vRXKj9PCNbm2t6kSF7kYHiHery6GqQnVp9TvikVik2rsMtzKD5i5UThE4Q4eAvoeAhBsL2SL3K",
  "key19": "53DB8aZUf69YtB3Lh9xx4szyx6g6bj8S349hpKJjbRpdttLrjJS3Lm7YUJ6PkbGYXPhDw4rkTQyxLjYqaBro1P6H",
  "key20": "5xcehyaJzEe8e1Ckdbgd2cbs5p5JVvyCTkbn4SjyR8mGKiqDGDQoT4FBTK5yGYRRXag4CqcJqoimqq6wX9BECD8g",
  "key21": "5o3Vp994SHHyaMgnJK6wmfKiumqfj4sKzdGGCYtg1AUuVQYyrmeKKxvXum3MSdwaCWngSJBdb8fEcGkJ4vunj7Ug",
  "key22": "36VT3aVFtgfnTVHfs1f4y7g9eiEcHy2EfVkD5MdefvJPVXjspygfbPbKdDHQgqk4KXPWTrkhEH7tJ1o7F6yoDLH5",
  "key23": "2r7Z3mNqZCqq9sb5BH3ZGJ1j8PqwvL3LVgSysdJTSp9H5tivfLPMmcFPeEMscgPtgztPtMNbFM7PuzSZ1PWZwMLr",
  "key24": "66ePmthsqfz5kJovKfc3rFMdvixdEmnPix6JB53EiWbLqdibTZLr14eywgPpH8oLn9HGJByyuLAYSWr8Fn92VU3Z",
  "key25": "3cFLHipvf5DHpgmZf34dunaQYEgFSsDMxvfQ1Qo4ETVHSxHDvUs8VWoGdSXfWwSq2r9j3WuCuZ9559ar6kSTd9k5",
  "key26": "3ZP9x4mhUaburtdn5ioDbxWLPgpJLj6s5mu6CyNLnXFDuyD4v1jmP2EoSWNoPaj9gqW66EnJnVpebWVBFoFisat1",
  "key27": "Px4g4KBsQimt2GcRnNooN9fevRdBkGfa3kxpbG7FoZB3Sfwx4T91WkrSL2uzbBfktKxiHVFqMPK7mMVsqJKWBKD",
  "key28": "3nmMSLPpEK3PYjERmX8orapodyZeZiEMKk4H215VfZxe87D3corDuSwyDHtd73d1kGQ4koiJJe63JNfNajj3EUGb"
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
