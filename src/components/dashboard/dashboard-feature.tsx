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
    "4EpTCCPSzmK6JbfPiFcbXoPGAKbojZFShHC5AwWY1LSWWewTuMDREySWAhRC1w18CoBUZKAyrLtU8r2oVPyanFJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUuMYJt4JPw53TrLRpreJkrbABozbcf4SmsWR1VcnFV3M5p5j6chnmUpCSaxWXNRLY8YYZ1bhFH8dMSCoMcpVUA",
  "key1": "24xnTMBT19w1GUjwJFXTNxeF1YbLSuRL6Futxk3pL7sHSMq3Yfa3264s9bzxM4e326j1WBBWdWnmPTUno3JiHybW",
  "key2": "5tPQA8rEsTHcghWs97kJqQTnKDpM8Sn6okArUhT1sWaEzQteusjNJ1fumEJdvLb6JNGAVkbjucAbMCXrMhrVRHgf",
  "key3": "4bEYsZWGSDQSbW2og2dczUVQ2qL1fR95aqZ1xkkmaSapzqX1LJL1ZgrveE2bjrjXJUu9PiP2uHjhrWmqCzatWee",
  "key4": "3Y19qLsTjnmzMiKrqiswXaCysf45wBSxb1Fe4A3CEXDE8h7zJduNzTGmK38EirWz6gpFWRdqSd65wTu55vpS3UET",
  "key5": "4C3ZoQZ6xriMsSLLwWWr69VytjYEESxpToG9x9F1b8aNNBQJba2iQJoJvcEwLuwmL9oW5myHmGRPtNMwGGigBdfE",
  "key6": "3RrEETJYu1jC7Z2kj4bxagzNbttSgpkJbrmR5kL1DZKgjiRnwoGsfgEThrwNzcDHH5E8Mhr1ro6DBpciFkpRV2Gw",
  "key7": "5sdKdK249fjqPKDu4uZvWCJvmWFaqtfMQRSaNuHCYceJcLfCj6Y6MbKGNFjTVfmHAoeDa2zpU2kg6AvhsUqmfQuJ",
  "key8": "2UL31YyJuhyhiPC1mVzbbXatCnswqcHz4u8gkAXzrZkZ7nrtFGuWmeQWRkjhoHFz1AcbGQKro3g5opNiQxZaVYd8",
  "key9": "3uBRGrJ36t2iwntXTeCDxjLNawzbkePamSPHwn9m9G4idSTub65mjDRg7K6b9Q1PHBEUa8tYJfZa273rKcxeyskH",
  "key10": "2TKN6z8qeZA9LUbkRPQiuFnygV9kBF3Nwc6U8Pnw3X4Hd9CHJFQSZcoCjfDExyydeked7tBSCkMV82HjDjzCxFUr",
  "key11": "4Re4VnV2FArj8DuMNEsGgDJj95tjMdp2jNPFZuBPQczDHvT2CodWXv64METuQm52LTaLxteib5VoQgCNY6Gu9j4w",
  "key12": "5aoyS8T13hvyHLgw8d3bmXT5m3fYgnKJmbLLVBW3XM1AyTT9Xut48GMxjyKaNg4FLCrKijpVAndGLmJqQpGLncvY",
  "key13": "4TDCzUjHnri2fbz3EnuUUVjRGnDtA4Vbr2KYUM2qewbgZop49FgMegwfivnXAJ6okafNZPEPi5CczUg8ccHL6Nzk",
  "key14": "23ws5hTNjJR7Lcib5qyxt4NrXGGprYtrjFYYPWPLsquD2hsjNmUSvbufU9w5tCzzteF2nN5NLm7b1PpQsCAXtsDa",
  "key15": "2ZozjMyPW8gKXqLYFgLWNRYXvkTnB3YmDoU8JKFnpGpkXTb4k9cfdkxPa57zAKjThCKd4FkB9kfEKV3df98S1rJK",
  "key16": "qzJSEMKpTREZpv2PLMGFj3v4H1PEFrEbAwakHXJBkm5exrM8gerujwv3W7pd3VsZBUf5oMEgwf7B1hbLdi9z9KG",
  "key17": "g5SotRpWCJyUMZZk4ZPgAjdM19qShpAhqrRuenCRKPvJxasWpzCAf1S7ZVCe8EnW2kaBrhoPvPRuBPmj9TYtrD9",
  "key18": "4HDJdkRjhFACChRdNaW4BFSdUMHVSdnypZ7uJjnRVHeZnAmEs5RmpEHJnfeaMUmsSbVhmYUJVGHgrGWheUdYk52E",
  "key19": "3qEWwSp7cDoVJZiUVVMXDsXKwK6oumHhi7oXdDys9Q9gpKsfAj1J2jhKriby1TCNoVMRn5hB6AJdZJFfBadgc8VA",
  "key20": "4kR12Q9KEj9PC3SkjGpY966sLWaNtRECsNnwSsx9Bkf4UHM5zUyDmy99soMB6TDYR1nhnUnfJVJnB6Wmfjb45y7j",
  "key21": "gBW2MQYURf3q77tTgmKAsyjjp1v2uUbNWYXhHGZUYqUSmLWZPDXtc38vqnWmJAAcSQnBfCkd8PCkonrVe8Rnqwn",
  "key22": "55FkJunLr59msea9fnsTvedSeHvG1p5ZSpK4jYhwoiN8ufouDytdZCWhKGNAcNTwwpXKoLb2QqQrNUps5LWHqoiT",
  "key23": "27UtmCfLF5gdoY6utFKfPyR1jYNddzdeNu9s2XKh82zpZtXkBfEgwdZUkw7guGYcyioiXjKhSwrkyQvbCAGdn8eD",
  "key24": "5MPq8c3TQCtyJfQs9VkTkjrVJDxnnuk7ds2HwZHHr5DGWC4basNFdtEAjjiDT1WG9e9zHqU6o1etvR965h2ZFckj",
  "key25": "39en6UtV1Cb4GX6SHp7d8Rq53pi7rTPhxquSmNncTMjwKMsRsw1nocyNhzqwZDnPV6BdvAs4TWYHnFqGfdLMYyws",
  "key26": "3NYvAM3auwcoETxVPvKEhWuHsxL68oWMPLNqzdPjmouvmpiHaz1PUnnpn5ZHqKdS9oBW6CYtR5h6hkuL83Ctb7ne",
  "key27": "8NRM88sj8JCW4npjB8AqjC6KfJBmKsUUEsfXciAmnBYuB9ghpoZfeb17iQLWuuhUty61R4xeyByS1gMimphhbd5",
  "key28": "2XofTmNx4tUThosSGrJip5xtTdWhfzEV6qQwsd3qxYnKTNBFKDALJuAm4QsW7D3nwqD1cbddix5Te4yyVEoFM9SL",
  "key29": "5STukMFR7JxbEugEcWvwbuUdaoSXk39vtnMWUgsWTNfu3Qh69iZE1gHzMaraWjKMXroJgV7cwq3Hyrv3g3wt7nuV",
  "key30": "3MVkDiJ8VnjP9muMBagBywsjb3mg2beeNrZwDGhRwP3s6y2nL5PJq6XTfhCnAXfav1R5ZZniLbipVu2DpgraF99J",
  "key31": "3RRnRgwkMpYf12NXSYjTa1ifadfntzvLpfMgCxw6L6o7N6x9zAJ4dwSLxj67uTV6dDdFnJ2bQXfxtSp2hQtVho67"
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
