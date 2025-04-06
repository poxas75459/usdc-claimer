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
    "3Qc6K3T5igJ6RqG8wJRD8wi4kM5qGGms6ipsHWgUPz6WfnEYemHZPJ6ipzJTAXPM6kX29edgfEavvBkJYhrwwDK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6wgKvx1ZqKk1FanbcBMh9bXeFqgL491z4CKWSwD42vcFLSeJiq4zxFBGyeESvU2vGqEPFPkvNc47NZPbMNqNaX",
  "key1": "3hBYVCXE69FGR4pQU4ceNRkmjfRniEsVpDw1Z78F14qfZhxeqbZK8k6bAi4cUup8Cen9pt42crXv9Y4Nszju4WbM",
  "key2": "2ZaTpD1HZwic6nhhw1ZLbaPGLAcyY9n6LZjGUMoxZmHbWetP3bHyBk3xZ4wsCaRh6zrD52VPqEQbbh4SiSgieKTj",
  "key3": "5QDX5S2Akb8NBVrPhYQmsbQ157w3RZ9KctGqqVnaaeswh6yQBPzYbhMiHPA9YAW19d8deoyPgq9E9YYGkdXzTS4v",
  "key4": "5EVpHr3ov1mqaTdcJyHkyPipabjzSEQjvBohHsUUX9dBwGaSGMz1iCUnGMzYrcYMiQsfK1pvMqyYVPgqNeW2fEfw",
  "key5": "gV2XTgyjuJvEM3p22gMhK6fHaG1TUQh6TNA691EwbcLVKukqdiPwCb4Uwiq856ZkivS734iW9nUSMfop3QtYznB",
  "key6": "ewwou45qYUiM73AvK4TpKmBuBessKhBPGnpq7t5WgDXUbhbE4cb2L1DYqdmwUnkZ8Zob93Kr4Gmr4ZSNWtTkCVW",
  "key7": "3fURguBSHUWVRgSTJFgsW5uxcTdZrqijhYyBDx4EGZeEJJdVFoRUmiZX2dqP4YKu4Bjsu7sVNmG1d474B3EUGqdR",
  "key8": "348rtqeuPCU2GgHjF38SaEQrf29UnnxFkwYSwmCHCXnjvw45gqhrd99726KCqdqhF54z2PnieLTbv81YJW82gUYe",
  "key9": "3AoubwUMDENK4vktEvgEZCJ9JnPckFv149JMB8kQGzWDHRVNynayTckXWoyZaKXRE8rnGK16Zv3Sm431LL84Xuhg",
  "key10": "RkoToXZg7AEWyebUsXSUoLp2jo2UNx7dw2gcbq49eeeLYjJkpq2fkGyowkNNTPtfuXbdMk3rHTzyhU6de7fBYvB",
  "key11": "4NBmvaLQiSE1nu4YiBnZc1hc8JkdmfTw7UEVdinUuNKqQzHAmwxZiskyLY5UtegjPf2jhwBn4aajMJ6RFLb18A99",
  "key12": "2o97E4HoFRMp2gTwBEWNegmTLtkbPurdxmYiq5tUa93CgcjCN1DaJiscEbaaMQFUpRzzwHgbTU7VzDQQUdw2B3zQ",
  "key13": "5gxVWT7QmoEZ4qmYnSJt8JdzLKbnRLvHw79MpMnGZCcrZpTb87cnEa5Xdg9QauqG2WNqugTeHagUnrhGVdvTqqwq",
  "key14": "3WeNMoTHXPEtHd1qsWriqYNbYukG41nEn8WH7bz6Wmi8kAmykEpisDfaLsgHkL6Zer2sWgM9b8mGDJJ1jEwHM6JH",
  "key15": "5EGTG3Hzy5XMkxsdQADEmpnLNWoxPDWk8jxNMVr9enFwGG5azUe3dR5KqZ4hb5weWSQqPVAStPgeJVBWWZFTp5a1",
  "key16": "GZ1bJS9xLLmhn7A2fiEaZM6dPYXkrAJm6QT5UPVjBs2xpnGnWFZAtBv9oHALwSy7trUDszGe6j7vVvbhNdXmXZz",
  "key17": "2PyBf4XrYA3BFxMmRPZQSgPz57JjeNHDKEpRKifLVXGSQddGpTLUb8mbHj6NTvHFV59mb6BQT6x6a5VJcUYbW1G5",
  "key18": "5qqhwskNf2eYLTX5yure3Vsc5jAAcnNx4kaCBWL6RMeyEX9EbNo4znC7JyEGMK21RoxDBzQJvK8HfvVWiCRdXxBM",
  "key19": "rsNTQJ7kno2NzW7qRq7Ah9w2ZzSq82h7cD1SGDqJvrbE4vTjAGBnerJJqgiQmKmCjfBj71gAvYuhW8NpqWidqXa",
  "key20": "2C1J2tcCnfBSzyAfMBmVwxLty22Rr7Q9G6VsieNEaDYGkahvN1uxPijfoK5EoYa2Xs6yu8cHes5oHCTNgXe6ZULH",
  "key21": "398p3bWJFjx15eTXXQQ5KAFcbqfyeyt6kxWCSenFxLVSGEdTH3r7b4KTQqEYTWYkbDWfspN2cbr4Vuqfw9cd4pxv",
  "key22": "2beqMZzsi7Wwe5B5mknY7QWPdwURbfK7roCPzDq73TTDspYSv5vRuHszHZmTN69aob1DqxqKaGhjjbjZsLZCVkg2",
  "key23": "2aysm1HhC37wZzZvnDK8YZiTF3zijkXiSJsyjq46JhQsehe9rvbhGy5M4CEcqWFrcRzUCL4wx1FKtuz1k4XZxKRY",
  "key24": "FSE8EFaPhCxvedzM7XqNjT6Eaa41QE8okU9Yp7dNKYn9s696NUVsg3GVTpmqSgEnNxbD8QDQ72HVs6jqYPB8xpY",
  "key25": "3fwHXWzWTUM22b8iK4cBPXcQmf3pZedF4K6Lf7pcjcBc4KhiAuGnM6aT8ZJgNaMUgYN1KTV3AjaGv9kqCroYGbBn",
  "key26": "LhUhooq1mLUoMkeEsBmfMSAkHAQzCbbgQdWM6WQBQRmGxwRQEmtArB2MWFmrgcJ6hB7CVZasci5xsyrJFcD7TMP",
  "key27": "LXJmd75nYhzo7XybhgCJeT78tandLjMAx78Qj7wWJXvVWkwhx2Ebgc1V7bFQmoPSbxhPGhRbSWaodfFyXsyqYuU",
  "key28": "5fH6H8LBTXeGJe9DvfxUpSFj8yQAStM7CY53c1Z9TYhnaA1UUMZf8cfAiy2Bnv47B9U6X88iDTT7pP8CiRY4hcbf",
  "key29": "5NmEtbX3qYUu4pu4dUezep7x1kBES4N2xnEqPti6EcH8vW97GN3njMiWgee8MQt9Wwt5v8YUpt2h2nfd8kVskrhj",
  "key30": "4sMRh9GB56kPCkzEvWNBx2L5tGWD6Lmdq7CKVW5nsVD8uHiHoX5ZWUusgxjCzWrSuupCMYEnqtdGbwyez25ftZh1",
  "key31": "wZPuSebvpVZkNt57R2sRa218vEAbv3piP3qEAeYHyWpsjX8AezaWcPXwSHTyiDHU8Dq7STj8wdp1hh6P9Dtdtu6",
  "key32": "4kGYQH3Cx6xeJELbEbuLnwvu5tvuWThcif711ubABwbQevkE49RaHTJDKw18EVUDN31CcsjGKydw1bc94GoJBm7F",
  "key33": "WYrdnSywNhiXN1h2PmGUmRPG4cwkWW8DuCCR527NxtDiUxS8RTMsxfT3GKFJHMjErU5v2KJBsAzhMFH735cjfUR",
  "key34": "aJjdqua2k3sKgwh6m6p7h3y4CjGPjoKjsRCqe7UkFxVkiT5KpC2X9Q1yrKTjLmcKK9cEGKkdDHEUMpLk9iJxhoM",
  "key35": "3dZcb7LN7hdfqBHcvzjRU3FLRro1ysKjzC6qKXFdUtPuz6HaEf6CNj8xj4nfeRU9grELyca3ZR1zuZmKj4Dm1eFZ"
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
