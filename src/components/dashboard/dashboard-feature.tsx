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
    "3RFSiG7stMfEH6Xsn85kqWjX3EBYZEYMVmR62igzS7VVytKNNBjFkXGUViHPsGcM9bLc246E7T9bWn5fmc76dz78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCak3mFzZWehA8xYoz2iKxbmkni7KFTQqCdBf2Fy3c7AeZEbq7SGXQrgECZv3yBoaR6h7i3KiWSGKnzfMo6p2XF",
  "key1": "5iV3DqmASgEBzPTjhRHPsmrAwB4EYQkiFLea9Qi8vt1DURGz5PtbFeNGhtwpp6Gw7p6fYuYEVCfsxNTVNBDvLhsd",
  "key2": "5dqqtJTbhjDZpMTN8ULF5ztK3dhJHd5mydTuxUgGXw2wQWacuNjGyj2j49XuqcEYAae1trfp1QMEhCwuxaSJ5vgC",
  "key3": "4T2ywBzHjXyYB34hVqYb7738S8YZ2kRXb6qyQszh3GEkgVcTijM9PemskawDTBUme9ZuUPUZFmf7jdjt42XMoxz9",
  "key4": "ZD5r3UsSErz96xxmuBwwso3khEDJ7YcELCBQVmtcLiAneKdvrMYpU2gExyer9iMrPryWgZ8pLqULmSx5ktSbe3r",
  "key5": "4VwRKNcZ5jrfCTUXg6xoB7vMLSy2y25GXXxnATWmmRnKnXKWhXxREgC9LiY2CtDW7tX31EUn6LT17U3mSdGt76UL",
  "key6": "4uvX6WvGpmBVmEFYByDtGjXic9S4QQpVhjbTxa3wYu3Rx9E5cKmkgyBEALcG6AaNFYY2ToyRNS2DLQvdYNmeHSCg",
  "key7": "2bUqneHYNjx8BKcnbKLLc43Yvt2x3VzjhjMpqmaMXnu1jK78dC8erum4pZojz6Mje4Zi3h42Aq9p8p7A9urZ4VNs",
  "key8": "bUu1G9Q62QVDPpYsWxsDCqrydtJZhR9HFs2DA4RdgLyVySbHrR6QGqfX9PMdQgBaNGyqgrqmitZr1TCRJwVEtFu",
  "key9": "DNKun3qTSZAYrCPPNnfPGPNHgZcECQjgadbxsD9HX25ubsB19QaSixtNjHBFwEwgtxvchtkQjYtoFjgGosvQ7Uk",
  "key10": "2tRsdL8eBybyYTrhYEHKqMG3CoA3Si5a3AV9HdGE7iP3RaLvBxZndPyZMBDi7HkNrL8gxXpEuHoF9uUgbJ68eEay",
  "key11": "27FEqyrLK6AzfA7rZEd8CtG74bv5rC97NN3ksYJg1J3iurwarF3qgMZCozPtQsFTJwB7cwCr5mCD13cS5dx7TT4L",
  "key12": "3BJDXyrLhS1V1VxKZQWUVtUFCB7R6RnKebmVyaggjdXfK6G9MLaMvUu17kwAmJu3z9MbLJMbfqMY5XdY14YUjCXc",
  "key13": "3Xb2petHaZJic5c1WRNRL2cegVV2PvVE6emLJ3bfsh7bBuF4HV16uSyAHMw1dxKgoNx9KyvZmq7rEg7sxSqoQcSz",
  "key14": "4PQ7GXYmJ5wpGwVJRyyk76ePqoFkCHDgB639GhDekTYHKnNJfu3Sapst3UkQgsyX3pd3SxKafH4tSLRm3tX3SU9o",
  "key15": "2GhrvgMXUSYgtjWf1tG56Y4iFAEVHUknrNJKChCsQJciZQLfmwPkiiCwcQyNM6dg8ojWbmFjLy6wX1C5JG9ADE9d",
  "key16": "36vrqpnJ4fA5RX1X7uhrcxRncpwgvNWTxTZ98sAkfVZCrJ8W5kafunWRFB1GCq4qXQAq3XneKhnK1D3mDmEHC34Q",
  "key17": "2FqsDwBqd5ySgvNV4KSMA5ThPSNH2JkzBA32zzMfg8WVsAv1qv3BjWqaBmNxoSbPsnyBVEjhtAnvNF1ECwyhFna4",
  "key18": "51g13Ubz11DC6vqHvDZFEUjzEE77SwZVWiuqTF7STYcGS8arPQ1ZJD9vbGLVKxzemVZG39y1RYm7xuZj3MtiKBFv",
  "key19": "eBitbzguVehPVjiZpryF2czJurFVa7SdUPLwZeRTY3vsJK1HYH4N7sXuEHFRgbLH2S4jabdSZdGCmkqtENJttkD",
  "key20": "3FoGD5CbHQb4ECGB5RAUuEYX254ZbNWEBNoYvQL6aW4ncQK1TvLfbAWdy72LLvmEMcM8uzMM6YPgCxBidTaaTDFu",
  "key21": "36xHdHZTFGFahuSWSm59BTkRdmPcjryV5pmmah8iefNNn5v5aMTHLbGx9uW4GeQ4i3qrXtEcjtVzPdiDY61twniZ",
  "key22": "519rdQdurg7qpMFLAGRAvUzUZfRzDnf7ZbDoDSfTqPBEisKuzqcSA7ZcMEPvVss9U3uL8LzRnSBivSphA6i4vTwM",
  "key23": "3yjAyNgYPoGhEQWZvFWWbo1WarDUyZmwBVzv15c9iVuSBXxE2KJZRogcuU4bwYmLzJmN6pG7iP3pCvq5JPPft5CT",
  "key24": "TdCKeiL9fL7wpxDogU6WVKRNvQTwQ7ykMiLC264yHt8K8XuPsDmSD1Pw1MeBuggZcuoxettjMi7vLV94uW9eX8c",
  "key25": "jHFyEDbUv1yi1LMoyifKytS9sQ6QjAKEEKtHSjzcQyzmwTbnEk8hASbR8oMUMNHLkrFWSwj1oA27cejQyx3EoKY",
  "key26": "26amNAR4eNFGsCweSqgrmTGRJQU7EJCoQqgQVG4SBvo8SKGrCX2EKChWBqu2PXAxe6tqQSXbqMTdBsUbKgi1wWth",
  "key27": "xJdqcpK5A3eqy9jTtskC2FF3L3FB7bfDpQCuhTzbRU8LAzczCCFeUd1cvSrK58anx4mDXhFhXPC25ji32gBqQQt",
  "key28": "3eUadzngURFBGbG7A28u5tymfmP5fpiaMnExyU5C4dkwxTveBMSTTn4VKwe7radeomraBzkpvjKaVfdPgeTbbqfG",
  "key29": "5kyTY98VpBXpsLjgnuBtYWDhhKi5A46UPKpFTapDxnev6UXovN4QCvq94ikrdpgXA495pwoFf8oQx3Kprs4ecJAV",
  "key30": "4gTbLMvB5tQKsW2XnzGPG9a2Kr5R4a37CkyNndt3RaWmcUxQRrUGi5gjRTJhsB33KGuosYEzApTji2eACs4QVgP",
  "key31": "rMEXqac5UT9ngNHe2qGAqTpG4fu9qzuDdvnECNPZebbN9CDssnsGTa9Gn3ZLsuQbhHEBDysATat5fbmZDQrHs4u",
  "key32": "5WkmEKd9sHx15S3uP4DKe9Dr52omiM6wN5LAzYMMXnMmaqoqy84mkcnUXFKBeCxXeK2G4135cwUWQau1xBDTzmmd",
  "key33": "2rPPYfQgypoZoM8UU32vKTknNodDtc3gsAu7zxwDi7Ckxs9pv5KPq7vqhV9o7GnkXLmMy11DF5BkAZsjZP5Yr2za",
  "key34": "JRHLbo721412sYsfws5WKTs52US9kfkWD2wzTUfTW9aLdxBP4QqYRS5AovJotvb5BVfgoYKmxtRxwAnrHxRj2dU"
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
