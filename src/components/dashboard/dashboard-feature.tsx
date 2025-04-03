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
    "R6LRoXWrCyEo1cWg1mJAWYQ8RLxWqtWvgNkgo3DuGUmRMyw1HG94AeiNP2wsPRLV75HQNZz5T7XrQLCCpsZyNnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MiE2cmrFAABepTYYPjzy12XHfrnBvNwpnvvwYdV36Mb1Cr7qGpo85nqoG3RsMim626F8zSddLQfBmKsB66kxx9",
  "key1": "4qRg6WaTLfGFj55CBm4ZDPK9VoBkostXpPZjWJzRkWirDn5j5je35b7aFKgNNz1xqNqygfiGgPFCc49ePcckNfak",
  "key2": "2DbZ4URAgT83prz5zqWkohkNt3J26bvBNCptexcyvZiaEE6tDtSTV1yAm7vkHr1qhqhTTUTvwbLb9X4mmk5PJAm4",
  "key3": "7GV1mWQkKNHXPkrsBwLVP3eG3MUzTLF8hWBW74Tk7qjBuaUeWcqDS5dhjjpbGB7UtaqBNRd5TtetUbcBTCQriAw",
  "key4": "21SX3ApFKzHnpKhacufFgvePPrriPJw2yPWYQe1p14iZLd3UT1RFtai2yazCXP2k1rMEPhHYSJYDeXLMM3RBV9t2",
  "key5": "4ZiLkC7Ksypeujie3yt9zRPFnjVRcJUoV8L59cj4ETV3bQzurmmR1RiWXudCPbPPAKNLHntgW37RwDeYCMMTee4G",
  "key6": "4yQHncd6Fh2mh7d5M97HEiZJxeaQzYidPVNNeNAaGtQXymcnjmrqZxdYDCmTVCoG23MaS5F6nWVM7KPUqAaRXgGq",
  "key7": "5T2HCRo23rJF8YJqPY9XRKe1GfN7twW9X2k3RpGzaZ9bFknW8ZAXjHT4MDU8zGnGdCvZnyLVvUaFa7HM1UmKm4sC",
  "key8": "51mhiUKPfPWtQcwnhAKHUBsiXkhkh1bJqo3X1Prp3DUMPRq55kiqqihT9uiR1wRu7eitBLvBPgYGXp8rYCAZsCtD",
  "key9": "3yVCQ8PiGUygNHL61pqE4U88jFWeQNsurb5MAuU6hN3qwWfDMsMWJKZVaxXFhzLnaY7xHKHjqfpQ4u9jZxobkHyd",
  "key10": "2qrPidezFbn1SctmNKGWzz4oGBxqQYpDeLh4z1JovqPhmmGqGKbpNRCnuvg5RSaugwccw7Xpy5Lfh2dvXF5ezQ8j",
  "key11": "5328gHkSJFXNYBKiTVeZQeTk4iLLtMoR4efytSTEV28KnoDMeiXDqmDnVJL2zaECaoWnCo6EQkQm1uNAFEfrSynx",
  "key12": "3gRqaCrwzj4sPrTz6QZ2txfhYdRUcoDHnAr8UkcRDwtfntr8cf4roG3JrxQuxBPBPXw8fLd7aSGZpp2QF225TDBw",
  "key13": "VHdVX1chPgDTXwHc4JkuY3Z2VRnf5AhgFfstAKDVskY2MmxEpaR2NnkP3FrESw3mBPyywkxYoTVwa58eqfawVRo",
  "key14": "3Syvxk5YCkWZsEteQEDo6TMNUqqenG3eQLbwsT9fjuGxfdUVGsP1UYNmvDgezGvFct9stUouErmKYbRJShgqVxV3",
  "key15": "5Ci4jMYSX1w6DXNxgz1pHAZs1TnFZaJ3RgtEwH9CKHkoN5U56DUGMKcYKNGc9H8LvYAs3rEouFhQMkrPVrgHseMF",
  "key16": "4nAZkZh6nBnyYN8w3HiSd7nvRM5Ur52tSYAu3229RGiqv95bcGwLxMVCYrnZ2z2zmj3K5Xr5s1QkxXyHvqHJFZ3a",
  "key17": "57YittUsjBpieYoeyUhd7LyMm2eHu1vi81JyKjdcei7DKg9EQgfKeNzy1NpGbG8VouyJgrk8z6cxbDnBbZGbLwjV",
  "key18": "5xQcFNABgWExbpEF3Y1eR4JKJTKeUXbT4Eovx38Vtiv8jodM5xQ5ipjVFpNFjtBsHXLhbPCVDDNKgGKY1CyyTshy",
  "key19": "2prsS1FpjDEpc3xRc5FTNKoq9nrcbFZQUEWnAVKStH2cpXrHiznj7auYcsBUKVpsgGmG41vnSbpcDUU1VjX1JmpR",
  "key20": "3eYfrVuPv4uLhtHt1iipBiqS3zpbwfBnBCsivJDzmEmEfgyMjoH9WL5Ftshn5FX3x38LHDWCPkXAesPrxWwLVrzo",
  "key21": "2D5DbnU1gYc6sf36FavVEftwd5EkdD5WkUwH99x159ZCmFCZaF4bWRbPkSgyFsa8tsr7ruFVHcjoqr19ipzMdhQM",
  "key22": "hC4VvHGxXVMtMohBtGG8Zaxoh8tBZ4uKzsecEzqjNS2G6gS51DYxJouTnE3UUXmfR3gt7o5CVugB8rmb2o2CMRF",
  "key23": "5PQie2z6LGb276Y1GaJkUuYs33fbiGiGzFJWUiYQvaqMSzhoxTp79Su91m9k1kf2cJXgJqem9JsPAbpkFYwF2EWG",
  "key24": "33Pok2Ft9r6YMfPUVZdcTHdWYoiox1CZVHFTpPrYCeFwR5np5BUJFCDm2fnA6tQ6hPyh2BSY2Cc3APqWAydbGmvh",
  "key25": "susgca42UjmZSpjhKueWQ13Jhf54qGVWWBhqNmB6tWzkk7mtVNw1qBxzt2X2aPizCKAkn99ggM1osX2N3CrPU56",
  "key26": "3wYqgiAL5NufwfDpgHJr4hDBpZDVZwi2LHbYTCMa4wa2GSRqqAUz14iHWnVoGTJ4E2qRjmNzZBdekjctY81q8tMb",
  "key27": "5emo7HXqgX3NFbV2xtfsru3GCDyPxMuNtfPx4oVfcVCPMaeCKVKkNTkrpNNayBCufTfU6SP3FqRXkVgWyhXRrBEE",
  "key28": "5cXW3eo9JwBkVWPuELRTLjv6qWcz4Aj5ZZFYMYfEooTXj7ELBNhM2NMUwunuyPnk4Gmj2wCuPNTin54bHk3hRjaj",
  "key29": "21ateBJQ7RXmV4QG2ZBenaePcZNBPmFe4NHwNTcGg5ckdFvCbBvsQicBuPJBNYU5ZsNJ4Cseh2m2Qqgo73AjNLmf",
  "key30": "2WPEXD5KrPKMKkR6GLtswPm3ward5UfbE9mUvQbkbnRudQM49kVB1UonB6E3FmWsxnU8W4XbT9CoTuM86xFbHDW5",
  "key31": "3dxvyhMPFHMUqJUVEDVbvGHp9Nopu8TyAWUSGt8s51pf8V4fZ5C7jBiUQv49yA1YG8K5E2gQwp8YyC8ud3axKN6r",
  "key32": "3BTadi44Upfd5XMYmnfwBVXxZyyAhtJwqeqA8Lon2CPn29U7cL2MYLL8vjiYpmHdYw1x3ExJeW9sDfL4VTgoxFJk"
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
