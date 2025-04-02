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
    "624vMLKF7SySLHdB5DrkaU8JVT7FLFc9rRk81RhAxKteiUTcqWJzF8yvSB5XqLnxNTiiL1PambTiaX56fsFKNJnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LWS4jutrB325sorf3KkgtZSANKgWN9AhcZprzCQ4ra24uqCd3urdZs3uoyPM22mMRvEU6yL9tkzmZBGBRLoxBrZ",
  "key1": "5m9W9VYkVBuvA3oEbRGRqk5MWHKBpHJnWFcvWH3U7VQjk9z51k3XRd8coSYUBZuJbjbGkaRnth9gYqB2JGA22VZQ",
  "key2": "4pN32uWq1exeqY2Rhs5YBuyx87Qe6SBRpmVd6TTcqEdVFntZeSLeEuw71ttJ3VD6KRsxup4tnjRtuXsxXpbYd6j2",
  "key3": "4T1Tcmce4MPQdcVgwBvgsUbBtrfHEhGkcZTNDgmXk1iMa68uC6WJjeEwBtyzKjjZS26jsERUc8a1Z1uTNW8cFAVz",
  "key4": "3AHKgypQK8SjjAmazwcL2DVqrbreFWfj3eHMTK7R4EbH3VZZZPwLR6aLijt5iVhLjQ82Cz2pBTvnrWoyskWxvoAd",
  "key5": "2ysJ5kYg78vzy7KJymQB68ajUbnakFs8uVvsPz3JQkDfJxC22Pfao3AvVfUnWzdksUPmiT2ZebGvEzesJq1VNdzi",
  "key6": "2Qnah2WMZM3YgRd7omPSwMyck58ozyVdm6rUUakQkaYJwjYE3bgDDQ4SfbJLwWfQ2zyQmhdBZkguyzgwL5XBsiCG",
  "key7": "4bazTBKPvH17ANPNHcTooxw3wox5FfRbkF4YSxW2EVyhTy9VHWy7s3n7HMrrvvEwF2B1vUQwyajJfMNfo67h1LZ9",
  "key8": "2yrfrBjbaBvsC6W7T4GpgFwX9a3fpUyvUcPbWwRp5MAes23rbhhdbagyZkWNbQodkyFMpitU9pGf7pH8D7DUaux5",
  "key9": "3i6chADdbXpuPuUBzvQ4AuPepKCzDhZ9G23etdBj6SAoXf2kUSeN7kXdmZKNCNdvGSRGoVMsxybnPjkB3KJ5N2PM",
  "key10": "2tTu1vuRYnXEJyXm95xCnhDJ9we7cTEHmLYyg4BFYAKxHUAi5E1ziCiHpacFfN8eNi5H3gQXq7tUvt12SLmTLFyq",
  "key11": "MFUkEsXGhzxkdZLxifae4FFgTb6PQkBpRnxAdiwv7H4i2p3VvCFAx64DTUhXkpkzcHo5qN73XbMEFcAnMuAJEoz",
  "key12": "3VAgbJPavktFgtjfDp1cnWQFMnT9dep7tFtaUp552CxEfGCmpTS8q5VcczSTPAdqS6hJo6A8LHovKU8ee52GHsCz",
  "key13": "4gPAj7H4YGAyAKXJy55JKqfY4UNTb6QhnhuHRms2gcxpwFaZS6CAN3YiPt7vH3NaXGGm1bmoFWi1d2AYv7W2QYy4",
  "key14": "Av8gBKPguShEBWbmBRwiiVSPSWcpFov5xSzUiS7ziR9iANpvcC77nRn2bWqiYuPgRLh32ShR7DcLBfMe51ax7ih",
  "key15": "4axbYHCyk7y34FZz82EunSYm3d7aCDgCakjbGaFsgU6AcXzNZXqUBvLLTPHM2Y692HrdqcofQKTYYXvoWksP64C7",
  "key16": "4jf3sYLxiS5a3hZoa7QxgH8onWgDr1iPY9eYNyVGUYp6UhMdGYvv4kq4DB4b8fkrpY86CszynEisM1c8zLRBthta",
  "key17": "wo8hQ9otMHCFUpHQ5gWvgQN7RzPmC3JryCSAZP4HC9GDDscb1VkKHXm5tGKrKjwh4jG4ZhvUZSRRCP1XXs1ShG2",
  "key18": "5dDyUFVa5HBAoDeJ7adrhDDQ5kXsVgRDSJMgQMaK6eDjSsQjzNr7EMpiaFV5iTDmXxTwPWcbY2vwr7LDw1PqgXLu",
  "key19": "5i5BLQjX9UqVEMqLqtxN4d2JWYHFiWf1PXWuk9scncrTXuv6r7KKZFmHZePXKBaaLJSewZ1TnCutu76SjThshY5Q",
  "key20": "HCQUVF49vQ6CNHscB4sGUEorbFjXBoqH7eyAKHeSpDw3VW8TTEjE5XoW1FTVbpFVoAMuBPN7JECq8bX6VDxhgkW",
  "key21": "2JfcucAPP8JytaqR22UDhdCVbVaPusfwNe4hPjin4hB5yQa6tCt9iHkAQaPLn6AhXZV4sppkPDs9wi7HYWitj9kc",
  "key22": "3wNMS2V1sqppTK5srmwS47ayKgPqQa5HQQBJ61VBob2D4tLW1yMdeKGoA8trALPFiCTZuRTdqw9pW5kuenE3WCoi",
  "key23": "2QwCQxHwuAMcFWdfjfub2xwE3WJ2S2HqgJWrm81SJXurizPjSgi5ka2RnBhujtF59Gf7vtB1uMDVx7Bq7jFTJ1ey",
  "key24": "54VKHL2VW2vufFgdoRyL5mLCCPYiQC4GRCP12jX17NtytRGj6kmiMHSW2TenbVCfMWVDvZkto3yeVtuoQJNmiSnE",
  "key25": "2m6FP3fdSVfts1zAGaWHVjf7bUZXXBq83gtm3WfJgovq3icr7qDv5zcZbDBWuuJMUFfzh7vUca8ST1Jf6bEsWnA2",
  "key26": "26uXnavZv5uwjSVP5ZbhGuJiFDmPDXGcoqEtLzT15ZBh92WGYmNaWJ6RiyrLTqNDHboADVSHF8ZqhN3n2KdUqTZV"
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
