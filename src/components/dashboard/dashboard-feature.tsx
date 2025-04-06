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
    "4g1u8bYuY7HnbZe1Lj36B464dK5dAYQb1mKS2A6VRwEpQrTy3SA38QfCoDMjYQCVtWehbidkh7ZUqXxoY88VBy9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4SpD7uUbxiNJaiGs1BKBZWC8w4bK2scECngmaEPyTG4L4WVmGeRNZEaNouUVRPrSxkqeSzY4BppYunNVupEtx8",
  "key1": "EwMsCTWG9dtTxUSjUAYXxW56Y2BS8AaaDkM3EJJ5VPjLJ6hiQXAQemeWWctghVTgtpFhsjCbxczFgjciqamLjvH",
  "key2": "46d5sbcEkmo3D8fFnG3Tdo2SSeB8EPQVbnGHo9NutHwYsT5gHttmpL6zRb6Qav5wg8vSmezDrTHKNGbEv4MeM47o",
  "key3": "5T64fyTkXRD5Lq6wx6SbC77Ht1a1bJWsLWLWy7B25L3ZLuQzpp11zgxmCCRd3vJjTe9LVRVdBRzZ9cPHUB6gjsLr",
  "key4": "5foSD4RyPYDNvqTR3ubMZTJf9iUFkduhrYmAES99cQyMgD6uhNTGCARLB6uVLN9yeBNgmtDMo6u21fRzC9ZeBSp6",
  "key5": "rwwGs2zvQgdKY7DW74Ndmvw2pTjg8sb5vqGyoJLHqE57WNa4ud2jdSy3HinVA6KNB5sHrUwobfvHfZ8cWsbmNDh",
  "key6": "5zPsSY1BEEGAzBb4AFecNLXG9BZoSbZhXJict9ExaL1uwDuxzTcQocThgdmwnPKVzguAk3n9jPF1SMWjGuuvzhEV",
  "key7": "3m1usKHhJj15SWVScisgQe6q4a6zSqVCiiUjqQnEaFsCWv4edkWgZpAh2UgcLGj5oUnjDkQFgfc33FgWZL83moaE",
  "key8": "2iycdvYpH4FDgwWqULbB8qqruhFHrXLD7jJNmSTJFuRnEqBNfXxWSDm4Zw6EJR13wLSzPVrTexrABT9wswkLH9Xc",
  "key9": "5oebYM2tuffLjBzVMqkZX3k2zJ9rYZsQZxuvUxEfRuubCf3598YNmCP3dVgehzaLquSRnoE7mhSCkgcuAP8SvVLn",
  "key10": "4WbRaK8zD5tP2L16CKz6W8rjLXvHXTwi1iEStxSCFXFcd3rXYPBN7FDRBuc43EqgDGqS7So2YjRea52NeWEVg8Za",
  "key11": "5ErrB9xS7c5ryrfrMnQ1yqkQZb4naFuYmQ2t29Ztu8dE3DGBfDyQDoFyaDaP2GUq76LxHuUVNmRZwdLrq8yKME78",
  "key12": "4BCDaR75a331FrNikq75AccHP1m9Hp2YXt7ymRVyLVCw1Z2tG1jXPoDLnUEskVQe5vjmeBSpGGNbVo5Pyrnzi44R",
  "key13": "5KmZLuqLiPxyc6coEhxk6oQAen2nJ1jszcyQaBpUXNjp2KRAjdPYgL1RBiXNaQPPXsGAHvcEfoVtE3byLwyAHZyL",
  "key14": "4LsTZUKWDKdHkJNiNV1ckqP3VETP87tqzbN6BFvmni1HkZCEDBc8cH8uuGccQ4hFzxSUR9eNdUHmmRnwzFayLYYa",
  "key15": "2oSPWt9CE71BKv3MZKxoWLU122MKxAATxu8Tg9gMG8QHnHn8iMoAHNRuxNQr1uF7KNEDM52638Ni7vBapswJG6UR",
  "key16": "5U3eiHMWQMK4Zf4yRMF88Shb6dKnASTehbsfd97mJ425v9VCNGL1Ns6ijDAZovcgpgB5jSuctXBmNRJ96AZYnmfY",
  "key17": "32aJLDsyASVmER4YKCA2xVhAH4PX3mxRfazCLSi8aYFXDk7rJyZskqoqpC7uaSozHwodPXsqENjEn6TLd8uKrpMK",
  "key18": "3znRrvcdSpK2eb9VswJDERWxAa9fD7WtWjQNjGMVKywaMNyzAqEZqKkaBsVRgQ25fRG6A8HyqNnpaKnarMK6KAkn",
  "key19": "48FA6GwXqZd2XMbBrPqPRAj8DaayT1cNEjckCQ4goEaXpBUnwGGwgEPeivLDgftF9uRUihvmQiZV4F9Doo8coaiP",
  "key20": "4qk9rS3CYmP2TVncqdpodLQ8ypuJLFGNB3yY1c4pes9V7481T2ME4V3qutCMNp4zK3nBMTfgU9LUTbCk7tPBtrfS",
  "key21": "5AbWpkKyTyiTkFzgfYjwaVhhkvA3XcKCFEvxJmdTH8gBp432XjYhBewpvnq3tv48MymQX9FPNQEZTevSVzaMCbFL",
  "key22": "sCaQMHNiwgePxPFv6CQn72s13sDqpL4hAqMbwGwxgD4serDCoePdaMyqcRSTxphNoKEc6aN7YYWNxTRYsxf1c9u",
  "key23": "2ugwkYDNP4MJgga4EnAUnNm78A52MLm7j7454nR7sN4rpvtuJizeZmphcEaifCwrj6hJAg44sYV3nZH1DAZmg6Gf",
  "key24": "3qJLpX2muFmxM1yMBVdLiiUBXMTwMNCqJUhJuE1XgJ5wBhrC9oAL8t3WV4iuGHf4rs4h6EdKMZxShpxqsArdWg7S",
  "key25": "63VfUv4HygGD2EV3VMH1TgRQXvaTQWJpH3nw9CLC8D8YpabTUtHfAbTve7Z1dPyaD2w9RTq7DAZABQsyyb7nRtqX",
  "key26": "2ovmvdZ2VpsUaphMEbeyLufyysrX4MbmA2rLLqL5UoJYHhw1pSvHck2hC5spBAJ652okDhJ9f6ENghoocfK1dfqL",
  "key27": "2YHuHADQMZk4AiNCPzxiraVUHiw2CyHopkVcvXHpG5sQzD7dcpMHVk88rHbGrEGbFemVwKxymDcwvLgAX7ys6nre",
  "key28": "eiZEVQUg7WHkDhpyoUmbdd8tEit1BMxCn3ydFJ2UTdvAmPejzqkjNai9JVBuFwwue6vLeLdhF7UtWENwKUCRRcy",
  "key29": "4EdURpEBaPHs24jseqiW9mDNLsvSjAk4MyiA8UPWV5YTgn2pU3regPt6SsgdQBwwaAZi8PD6R5CMsq132u8H19dh"
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
