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
    "43dtUFAdYJ6DeRBQ7WzoMcjvZWLXx8P5HfavCKkbTVEGj4DHZgm3ij3J7636ugu4PBjbjL42G9yAFSaE9s5ipugg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUr5ytcbmWDYkr1chnz49jCb8dGN746yEw8rEtwYWmx1i28TCWUjM4eRW737aNWecafJwhzhbtU1um6zyso8z5F",
  "key1": "4iFBcP2xBgqk7qDhiyiDkYmPTV4553RBjAEB5UJvXTvTFUCMt7tTmJtH5BAsxf9D9bWh6QvF6KbrhE5ntVyFcAPU",
  "key2": "4mE7hphJRie7zxBzqxz5AwSj5XhAUohRNVU4T5op2yeyDmPVHwaWL9mMNpVEjr7b4ZZnhb3PAzwryoPvpXzMCoy4",
  "key3": "4rfPXeE8rM8pPRP1DbUbAUm8EUbd7C45nPNPjCwAzwCvg4PLK99FWDEYZi5TVXe2sVNd7ewCfX8PteQwK3nuUT8x",
  "key4": "2kqGcqG7t6zRdRXdp2tiaVo4XqJm3LH5bzQeo1e3sqjNNFKgticKjKeD2M3YqhWnH5P2vpzDid85GNd7JRmoUQo8",
  "key5": "3eo7QHRv4WriPDA5dtYir8YMsXYahgReAsamyTWNXW7D9NSQ2jD5qxjKX6dpwaGPxnHNRs1rvftNLwQA5rX8yqZp",
  "key6": "3T2SfGGbsCj7iuTbaJfLW9FM2vn1X2jYsTeqCVyw9g9KGgv7mAievDCWNer2Y2kkhLpMnQvNyxifFrHX5fnXfsKn",
  "key7": "aCYvaUc9pcxtBnexgPqD5wtB3XJfaEvPZbW6msEXqowpTXHNKhUF8aoPG6w5v9MUnqRtfKfguPg3D9eEMK7fCqR",
  "key8": "T6vJbtpFr3iU3NgcQQzi9AMrJETFR7iDcuRNjqbmMaajmyMZQFpVwUnncDjkiX7mFJvpat4uUV9mnuSJd37SHjd",
  "key9": "5UPsZGioCEtS8D75jDnw1H39DGdkrcxXiCnHf4egapddBNJeVBe1UPs5qMy3aTorSZ3EPJ7YAPFoF6HkAeNeBiKF",
  "key10": "1HKeDGDQhBUe6hYcLG5wjAhZc9HgmEYsptxemFej9ZEBUPXJiBtyh2oe8bszJbGQ6KsLm563AS2m5eN3mQE2tzN",
  "key11": "4DRMEzREbzfbuyBDyisnVsGdsasekP3tjXa3MEL9tiHnkGyx2kn8erUgRFtrhAwcN8ueDZJr2nYhKces89Lkq958",
  "key12": "3UUdEexZz5WTva9MHNME5js92o7jxvL4JkhX5XVtoBY1HrzZCYuktLtc1W8aGAAggBYsj3Tj9cBq9jGvgUEmkXPr",
  "key13": "4YZ8tjWgnU5qkwjBAXNoawvhHn4qCsbLhvLFAv8dJrneDRzRtSXa73it9EwTha33DUkrrbou7ku9Q9x8jTDy9Jwr",
  "key14": "5xReR7U8RUAEzLPGB6ULj1XqAE27uZoXDrq3v7RWLhetne1xT13uVtYoP6B8AU4xX1iLaUNGFuMHAczyu71mHLLj",
  "key15": "Sx4JwwnGPm7XsHfRgDmJg1P89TvGkPHkRseEqfd9tofiaiZP1Zm9qVAzHNoUn2Kwwfthyo43XNMAVL2zq7G5bAc",
  "key16": "26RHvEmNjsrgndwSTFspCzraWjjryQQmSk8Ug71ypz7jkgH1NbHFwQTPJGA5knYSDheWXTcfy2cBLWpWR292mK82",
  "key17": "4rN7ZmfxCApbW285DinQ31qieAbZPi6bLPXn1xF7DheriaDKahragNEbPrZMEb6zpfvCdwr4eD18wKNrVGXCQPxr",
  "key18": "MztXG1bDKXNk3YyBtiawLuVQ1eAQxkDmwAgaZKRVGtBR415iu655UNt6AyKSKt4APjrqjXp7rVdZpQM5R33ceCr",
  "key19": "3tELBHXHhJwPExRLokb83q7xiZBcnrEun5WFe5cu3NnoP9hGNJYvFYDqW5rX6VmQA5CjyugAJHHXMjkZavGVkZ1s",
  "key20": "361gj7e1saEA5Jd5kxPYsZemPQG88X4Enc9KS1RDvfovAAdbFWc5fQyEtS5b2CE8Yu2YRGXXMn9aQ48dPJbtwbs8",
  "key21": "AvWAat4SoGS27Jze6MQg7ZogJkGJDFFwggGptpAawyYx5Tc4LB4egchXC9sjNeDHZH1No82ftfVQjL24SvLqRBK",
  "key22": "DAjQTBQW6eXrb6zMp4e59eSJZ2ko3R1qs5r2VM6C9ZH7u9WGScRiGRy37JVfBDuPMsCagsuRip7Hy99MH5neJA2",
  "key23": "33gmvZtnvHcFECMdx7HmsNu1Z3ohG3LSRHqdGVXznaCoughV1i8DZcSmozLsJ3TvPFkuwNqGJbKGJybPvdUbLVQJ",
  "key24": "4epiG3C9fGSA7WAYqqTKjFmh2sMEwQCpVwZrMkmqSs61ZXmKMjR5fEGp5ivAqFFdAqEPH6FQMXaz8d8NFxSyRGtj"
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
