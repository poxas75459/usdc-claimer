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
    "4LUDorXHhL2pwmeQevoJGDxDWcrcMSZ9HcYm99fkDk58sYPgnvApo4rJJJcJhZpArrJiBxjDWVg5hdi3xYMEcu5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i8uLBk2h1Pn4xqPErus1c8G6iQ7jK7m3zBHPLHMHXh6jikVSpomcDHcn5FTwpaUUBLuM8bccUe66K5XC8rgciYK",
  "key1": "5odANECeiYipqmL6Uk4fTpaFZvPvxoVKq9ALtZyHryigojnjAcqdpcJAmigsAejydRureZbmF1qUojgxk1CxtQcE",
  "key2": "2cs6zuoqewS6rQXPDrMtroGuPhoMNfcg5SBXRTR2p3mk5FpGyXW218vjTMftcbW1SZNd3Du9JGgND1jYr5SKGEGd",
  "key3": "4qzxyw4xyKZoy6nQNpGBw5y3LXqJNgo6tvbM9HgQExpfeKBpDqDywQjYCvmyNqEPDjetq3dSWLqpgDUr2xBszw7D",
  "key4": "DgKmfpMESqRBzJarN8LgmtvtqC7PvJAGEY6qRdA8hd1xduuDDAveBRnoKoJbgDnQPggPkwadQStqghxt2o2RDxe",
  "key5": "51PwLcy4jX2mjg2K6nHTEdVLLbkiqa6v6r7Va2cFFBkF3ZBAAP5jdeFGCYTKzHTkqtHya7m7ZSYKhetuKBjUM8hY",
  "key6": "4yVHpfLXRhiJiKGx3HFuv21PrRG6QyxGwA7D9973UynBskNNZsXEbBeQMjwaCxu56vosSdd8gPff1rztxC9Z5SfR",
  "key7": "3nyc4LJd1CNnrBsd2uY3i743FgFGb69yNazKFBCreSVsVQ3uyVkCGiDZRgiXPsonPoPMfHTncBqFVfGgtv1HspmR",
  "key8": "3eAXsSHSD1k3FMUt6QLB6N8GqfhQwZn34Yvm9XKoKs2RTUTWNNNFFuZkAdjuXv4Grdhhh2J4LwHjfVF3XJx4XsNc",
  "key9": "3G9y9VHkvjhzfqcq5FGXtpkdujwvyWEBrpKvqUVmzBgMd1PKmZCX7uRewintazncYsXyQoQg4js1muYUJ6bLoq7",
  "key10": "4h9V53aSKeggiqNEkHk6eTCCA1ZnaAGprdsKWcDH6gasvJbsV9wQEzHrtGYypk3B85bzQPo49WXXBi65otwXAmeM",
  "key11": "3p71ijq8u4qUe2PuRiYnHEQPPV3HgUzsqNdkHpiF3oR95iVa3dNdxAbykGhQJ1AkyCrR49FWe4Amk3brQMMMLday",
  "key12": "2RGBpjsbSJF4wbz4k1znxaXejpgBHb2FE5MVV7vBQCiYthawSbNuULfbPicQpdjrBdahBT97ci1c9FdDmgV3CiGG",
  "key13": "5vTZMr6wYjLLMcjVQhELCW9sCLttSshDk2VB225KjEkqAvkHE1WkwCfeeTekEXphr96qr18ferKRvYFJPU5ZNV7R",
  "key14": "Nrt2hAjkdSC8m8Q7KKrbdByvXKDqqFPkgoJxr3SLBC199ExCf5yYvyrFswRV4RGBJPtjt36GVX3PJ95hqwxeRo5",
  "key15": "4YTsH1R81Yc38r8fx88TKtuaxzzFDgd96sFvMPjt46TgJmX8mVES847iUuEKGs5qnJ6Q5tSgXBqGqRtExQ2gh74F",
  "key16": "5sKRYmgmYqCtvfXko3XBggYNYXBWkVTuhP478UeQsza9B3ixps57gtWamg5zFtXG5nrw22LNLH57hk2SV46Mw2n5",
  "key17": "27pxpKcMYcBzPStxQYXUGfcLFxHq5UMbE1HsmJafKTEXUbwSoef4qKrbPLQeBS42jrCXy3V7R9ZsmjFf7j9vnXHU",
  "key18": "5uVkfTZHq7YMzTcnvnmH5w26ZSvZf1S45GacMnsMTs4DR1uNJRt9hbJREm34hCZFdUA14vy5RZLwJ1NXTtSLCQUK",
  "key19": "517kFvbqgwh8hKaCqp8Dc2gtghN5vnCmrnhQpfJ3W1UkjS6HoUokxeUXDXSFC3Qn1LF81BVjqBNgehm74Vi8iUTm",
  "key20": "2r4TN3n3GL59y5L6Ynja7MJAZo9rkJt5qVqcZn3PCQP5vh8RDRLizBP2CjynLwCPyJyzVX5kS53fvGBXw95QSnZJ",
  "key21": "5ZjdJiLVZ37kJrMPx2XLntY7xpQQAPpfE6TYdbrm9CN6Hp58zapkhaKfuwPbbwePdHNDsNnAVhEzm7iLPTHEkJAu",
  "key22": "2tgaeiCihjwUp8nbWmGRCJCWiK4NqwBDYQjWtPbN8dBL6V6MiZnNAiNXHwZfCe9G3tdxxezvHnHVYX28vsYjaQQq",
  "key23": "EBWdbMM2rGGmGQNKP6vqvHeqesQyyuexz2gK1AFq9XC4UJLbYm1qzKYhcPFGhbPzsFKoyXVByv3rUUkoect52u3",
  "key24": "2NjTbjr7gUf9UumkFDdoa5rqBY2eREohk41kvGKeCfhar4XcA52KvMr6opfp6xd4RjGjsqrSHiW5Dw3A9kvFDFfm",
  "key25": "4yVDHxUNqpVcZvNoRcc9DzocwJvRg342rEe6HswDWPxugY8EgdGSYTHGC7oJHskug7q64FXSD2iXLeUSn8yoeWCD",
  "key26": "52S7JPxnrErRCmCebXiRuJeb4113Lpp1eScSSBdfNNyF7C8FFTQUVTFE96K6pYCg1XTK4861woNHYVnsBWi4bY3J",
  "key27": "2uSBiGY9uDUx6DvUtBJTsBoiLpnL9nac5SisrgUKieXDaYgdaDwigyXsnEf5mjWrpCrEJr5nsc96xvWBdbksRq1u",
  "key28": "2NDZyLivTNbPpK6a9wnB7w61Gc7dd3waMMevMLj7wQbSMHDQhuApF54ha2VkyoXhp6capEvxjGGj8fYjmyTJsd6w",
  "key29": "4ssVhtkZ4waUT3YmNjCPNiQAT7TUPjbHcD5kB7nuc7xRYQ6rb9rLVEeaM6rHLcT3iLWyBPHhBBWKzuhEo9xosaGM",
  "key30": "2qfJkLMNTLafQUB5Y1v94X9AJibpXt3nkN8662oPmgEyk7ysPx8ivyzLXtcT2Adm8yb23V32ZbsV9ZLUxXbKM9v1",
  "key31": "5P5DoiLEnvaPMeCKtrfmDCkmah7CGthByikHvmv7oQixmgDSLdKBxLo6MGPsnTQsXfitA7hhMr4eBEA96t87G4Pi",
  "key32": "4QWJk3sL87m7vPyp2J7aQvVU6bRtWz1BG5sWETvQGzFn6AHZj462jVUzQ7QvcCnPnEzRHb6Fri8xDLhYmWgjazNz"
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
