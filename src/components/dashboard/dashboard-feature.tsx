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
    "4dWMHceA36NgwuVa2cwkyoWJxe94DepFs7dC91ZJ8sK85PNbCbnnUz4uSX71B1XSmkCMLkiWbq7zafEYPCTsXknD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKzkJuRUmoFrMxJwg9L9X9PeRJDhqtn3X6ehDHFNrcrxesi1sizGF4rKBhsryWvREMvCjefKiL2gmQzSWdst5P3",
  "key1": "3TU9iTLyRmXuexajLoScQh2kurcwoaArKgkkrXUbnmgRMegJF2hZWvfQDamhP8TM1pJm95EBeyCr4fMuqKw7c867",
  "key2": "5p8JbuX1K9Ea98UHghi1hLzkvRSu7U5SqXtRAyYmesv5hGauoJtTKJqp8ujKRHf5qtXauePJULzLWQYdozD64rYc",
  "key3": "55DbxkjqEsb9NUZU87SJtvyuaqnqYo8KFXbmfyak4zERcn6iYpnQLHbGCUosys7UgcLrpYS3Ec2quaYxy9GAm7BC",
  "key4": "5FpakNcWKZnX7cWuY78bvsyskcCejuqJLg7Xuaobz4YBPciD1NkCcu6SdB8PLLUYEgpe8JJUqz3FsNBqsYbgoPHY",
  "key5": "4NC3jK1D77XSqmHcXbUAhTcvxaC1Dz9116pCMnBXnMTUw5kosvw5CNbwaSTRw13pz6NeRAbTxU7J1R4yyyhgT2MC",
  "key6": "5s1FFy7PBedqPwHPazEn4E4WCyYA3Xhhn8tPTz7D9VkiD8p17u6Wg8moVgvcuUg8QFr8SmSd3JR26oaJq5hbhwfq",
  "key7": "4oMCrHmyj44im1bGjQwJULLtvfwbPDTNbbmgc7t7ipuCB2RnaYVGFPUUiEzqjwshUpVSnqYhzPpMo8iZb3i7zyQM",
  "key8": "4DG3duWLZh3ZqU8VNRSf5q5ridhop7c6otmMUVHbqLA5kBYzuEo5v1yTMsgU2pe5ZDferaSzEMJUsMXDvrq5z8HP",
  "key9": "5dVa2Rxr7iHtb1ZjEBFiANjXrmUFz6crPEXmJu6KNtvy6UF5HCCfW9matXPTML1D2tMzHKGC6WygkQcuR2Wc7EhK",
  "key10": "2tDekeHjjZMN2z8ayrYtL6GMCVTufVhLwRhxAN18YLabp76sF9FUnLFBqmFbQXhQSmkPhBixD6w8V8NEUwvochVr",
  "key11": "gJsfdcWniN3t1Ft3YPEB9eE38T1TqVwaHf29pkKipEqf4RQNJsw8gDPZcWeGtVbXRbBjnjgxxbXGbqdJyHeqZ7F",
  "key12": "qzK5F6wn3SUaTKNZ53aWue11euAV92C1zAYddDpf3Anf9QjhA4Sgon6MHRLxNUz1FAXacuXNSe8gUMkgu3vxRRZ",
  "key13": "2WgYb7Pc9k9dJ2Me8x12UtnK8U9HdywHvZcicQZA9ndzGG8Yae21ouG1EbqtZsdVLcNMFiQiBZzU7GLctaPyCEiF",
  "key14": "4chMwnGoFwforLa8naeAbLj1mDFduNX62UFxKAgzsmnMpkJxjckxygEFp2f8iMdwHsZgNyac4gLMm7ju6jqVs1pC",
  "key15": "3g1AKnJEaiJ78DhsUJtxnitJGQ7jQhUnwB5S7M5UTrhhsfwcGBsrjLbgTHz3YCW7y1UVEAN5nFwKYgjtWp4V726i",
  "key16": "2UhmJwxP14SKUtX37mSgXG9kkPGHfUyRYFSkMbufu2bwnrJugeG5qPyRnzKWcTgAccEfcT6MWSosVPf4kxUMn9x6",
  "key17": "rxRBTYViNqucv3NJRde1jSuv25zG1bMFzFemN4afHoTsBW7BgseoJv3ToPgF2AmYvoLCwi2eqZRGAeKuN4q8iJq",
  "key18": "4FhMAKKTapQQU2yAyqGHfXmo2GuuYxn2gokv6JHuMcR3odhw5oKt4GpG8WPjHL4hkc1FTNrp6dtBa12gWg6Xs2to",
  "key19": "3tgvC4L9sYQeH96Hx9YzWWoTkJKSgHq4J6kmk4UAx9dTtCzQx2Y4fcYft3NTCKgTgg8wfDNrAxzK6jboZcQUjzRW",
  "key20": "573LyCBiHmp4nCtTRReXFJdp9hXfQoXuvDyeGtM2FGJVJodCVSnveWC5BHobwTHfRTKY55Fw5aLvEfjTno5WbnAZ",
  "key21": "4rLNbhdsvEyVpLg1ueu5qVrn4H5LxHYi8NPQtssYrtFMqHo1j47jShAbSXF7MMg8oW4THkoHfV4imGaSv2BEk1kT",
  "key22": "5bsvGTNo8LMPG9neMwHPHddE8fYRxG3nGMmdCXXRutH9VgCLrxw2iNU4rttHgwz18hyMDbZhWrFY7zfHUH2R5uhq",
  "key23": "5Wos2HEpZKTSZUFzTvjCGBGNoWLJYWwswrqQV9qscbnVaUrowLmm3uabJyGj4nvPZZnnRDv4dgnjM3i5Cn3Xoo9m",
  "key24": "4kT238MrbCQX18oJkwdnZMsq6xDrpeNAkHePF93E12cTb2uKwpQ5eveKypwWG4oHuHtL5zNycYSErxQNGtA7tD3f",
  "key25": "H9vcLv8Sduom1pgJuQWAr2WKhCuK96L34BhykEXCekNfsGS733Yzqi6hQMN9syhBVzWMu6sJ8NnSdC1fHmBZmUe",
  "key26": "4qtM6uE3EDFZnhXsg3dTskPggscJYzuyFKyBXUqMeTsHQTNnDgkAgsLXAKxs9oJqtjYGKCvKjNNj5JcaCyaHNESh",
  "key27": "3YHSsgujoeEEPqUFCxo2y2NRQfWm2qJBYcjkJQhhpFUi6KgfC7K4WhdPaHs5uyUQEbNfJDA8LmpD9pPTPTCZAjC7",
  "key28": "47JnArsyh3w41uzs4xwAAkBFpXwrpSiu86SPoHk5fwSbr1BW84r2ZdWoDv5EL55roVbAHECnNVYFvdW6Z1gLu1kN",
  "key29": "2imHu4Qx5Gf4FG13YATVW3QberJ4n8ZuXhDQsxu4vqsrWH8kMdZVSnvEqVs1rB2NiqK42f8CgQWYpCjj9A2zd9aL",
  "key30": "3UnxgiRWPnUieqSwrFk6D7xoUzzmYY1eJqthP51gU4KjbiZyUoprvrQbinXRXPTLtLpFxGfs4ySXid3kcczLLi6W"
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
