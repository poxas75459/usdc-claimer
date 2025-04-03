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
    "5evoZLjBVtE7PisgZARCUdX1MGETcLzxemrGGSRwrwQuzz9YqMvbF59njxAgNfKHEnzah6RXfkM3ZCeu8FQAM4rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bxkr3J9nNAUNU17M3dfPDuwMxojPF6yBerW3gpCbs346Jjyr9GMyMBm8XioMgb2cpkJEQvX7S5ND9ZKq98M43Zm",
  "key1": "3bVNehy2trJJKx1GvQ69QYTNV2f585hbAK959u49xSrVZLBMazuqjnbP9Lw5AhgsNxKXr48nvL3seYd7X7KJVbQC",
  "key2": "5yptXSuTK3soY1LPPu8agkPHxNjeWSGFHoaEiK7JvM5r1nuQB9msEJoMvcw4fNfWsnQXp1wpqmNPfbQQgtGmmjUC",
  "key3": "5do8efXiEyc6wciaoWUz5qpR7RsyhwsmCp7TzCQFLgRYBoaqridXTLKnTjeHPwHtGCNi2C1SnofpxPk9ScJxToEA",
  "key4": "58rj5QBHZp3JMsL4irB37tV4UKTXWYwuEv9Bx1vjTXciGmyGAyP2SQuKTPi2gw9hFo4DJUWkvhsb6EnXAqnz5B65",
  "key5": "41hkUTiftwVB1RmCMJq5dAe4mFhEUmSNwuBfkMJm84n2S6VJ7m3NxsPY9myG7qthSBucoG1BTP8N7eqfHHUbjWnY",
  "key6": "4jwe7wDh73G82NNjyn8BwujEFgV7xSsB8gvJFJZhtn8FCgniXWasy673VDw3Z3wcZFYd8vdjtFVQTAuQy8qypaSp",
  "key7": "3xSMKQ7h5WFd49ULPbEL8PGocwzZXmaGjnia8cYpjLCw7gpSQe5zJbqYyAqJvucJawJV1RZbSqxjH1cLPib5HAG5",
  "key8": "tptaGqz4sVgj4PvrvXaJ5aui76rb2fj5aBqDpX8qMLmZbhVMVLtWZiqC3qCoXsCe6btGpuQwJGZLtbphGaK9F8X",
  "key9": "2ND4F5ANg9oxNkRSv1ppXKvniGFqqNjy1evr5p1ACjtmNuyFAwE7z6YRjdXGV777bCDV7D4zqsrqG1pn1xrx1YEZ",
  "key10": "3rxwkDewuG2TVbSuD5GFjLLuFp2taiYYjtpvVj28aDf1iqbuqq8NKbNmV6LJHRRq6cfmJgThinKkoeBiQ5uDV1aw",
  "key11": "5zKE3aDcFHDAKi81QJtoK8jDN9vSTHJdAE38VHdqPg5adBdpD64Ftix2ARRYbmT7bFkKYWg65N9ziTAsBApmFauJ",
  "key12": "5PKP869S1SN9owk2ardUSfsVA3byxt64fBNpbpSmWLYqjtZSeHgJw3T2gsmne9swHsLGnVkTA5MciCSP5thG1TKF",
  "key13": "27aVyiZxaR3r7PEX4F2nshMJrNdhESKDcyqMmMikeB7VvqQuyXUwYmhvRWHXQuUyrxRoovQZZeN2wp4tTA4UWaBn",
  "key14": "5HrPN2hNxK5pBTVWizauywPa8AmUKYYtSkuZQQ7AMeFN7ubykPvAArG5HSsKjR8E8EQFtgq7P4vQHUw4meuHvf2P",
  "key15": "5fq9ioJDHDYge51koXoRqFob2mQaq3BFo49JbomBk8KwgVRQqafqsRrfm8MqXFMXpWM1d9oeSgSHCLkqrDYPGSsK",
  "key16": "wcu8H7gQhbGEa8HfiiqHthoZAn7PSB7yYbruRZVoiyHYmYdd3QMMRNdCy3MXnqpxgAGCmPoNotHd8hYafXFQxu5",
  "key17": "4SzUBeBwYVQHK6xukx1LSczTtSzQGihK15ThYgDHKWqsPgRTSnE2H5o4YJhhBbEQcAi6wfQZgDmckcRA4WVHzEY5",
  "key18": "5tqJ79MnUDAcsx8eYZe9QeJkk597Z9guhsbdgXCoobJoeqRPuA4BvQZAYNc3pHshxSV7X5iYWGyokWKhhLnLFzyE",
  "key19": "2E3umZS1u4eft5vYM6XuvSZPhZMHiSy2FkZECCBhndL8S2GFTdjR88MB8DN35SnBgXF6dwwAgYyKU5Lrvz9FJ3ec",
  "key20": "2VaoHdX1VdHDzGdrzeD4ZL2w1XNcGAobxDjeyBXHpKRcnBESepi7egXrTF4de47fB6RPLWvAmK7mbYVn5dYm4ci3",
  "key21": "4o6MaCNxDe63hcaoPFRCpUsj264AUPV7u8HP3tjX1ftbw9bkh8ZiVc2vkcPeseyg8zMDUB1kCJiCxhPGu7PxTFMD",
  "key22": "2JrRWGLLPGekgo2dZtDxQ7S7V4abFZak1rCm1ThWYpK5jDCMpdUBCLWWazTp4yAU68zK3G4aqX6CXDUTM9Z5JKxY",
  "key23": "5V5kMwQbbp2cVd85eAQviMT1RfpxBNn3UsFYYy7ZcUNwgMDcx8MZDvXL1em5LZD8L2d15gwgFH9dVC8sKtAQfXb5",
  "key24": "4LLU2NnmKvxo44Cvg1CetNB1CQJcJYgMLcMnSBmLvFA4Fnyg1KngW6s1LJHmN5VL2f9px1SLqUDtA3z4VabnjfU5",
  "key25": "5PXWVBi112KcqcqEePsP5uy11re8HAy6Q7zXsxV58AGEBGqxjh5QTtEcB8RcXJzRQAku8GotQSSVbsSMrSuSaNUj",
  "key26": "5BjrAbnG2CEXpqtL7bMb2oe7aBgDfVinzVs91DrqRXjRY1N5skySLjD4FGr1jSBfkLoRbbFRrdzDThH1PrEpbNuM",
  "key27": "4WRxDffoPzhtArdJS6xVP3B5tt4WJNbZB8UbAfaZSZUnbHKNWPwjYAZTdCQnNnSSjtw2tca439xbGbThMcLadnBM",
  "key28": "UvaT1y6hegZvy1GyPJ9Kofh64GAtCxyHProFbRk1CRjCm4JBSpB5Z9dCyBysRFffeHKW7oVRvZwJoCc8pSES2kf",
  "key29": "2EvH2kA8HeCuCkQJtdFKLpt7yyi24CzERFb4XnyHi4HETGwwUCTs3DXnnBo2FKKCFRGUBJuZeFFfGHWQPd7Ffibj",
  "key30": "2tXLjMvu4YTmnDdHe5JpZEuF2vgoigY23jgZndBruiGYVNzTHmt5ZsMRAmxKjbuJdxmUCAPKUbpJjoXrnvEvt1iL",
  "key31": "61FHoASRrtvEqzgcQA7uENPqACrMnmi2mvr3YNDwsCBCxVX2soNMo5jkRxy48jWxXJApZYwZ7ksbGMm7LJtc2j5v"
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
