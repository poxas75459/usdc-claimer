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
    "5jcuGUFTJ21uQwWYbbi1iY36QXpBjQ5uGW8tqyhLDjniF7Afkq8WfqAaZXiRMbYqfWETDEVcb4SR8e1T5hPcrFyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JthwwU6jjF3um5YFFczhv5tPyXbUGHE5urFW9YCZfT9hYhifVULFL8GxPjtmEw2ejUzeCG9wxcTpwwGySJmqvgD",
  "key1": "5fzD2eUpxrsJj9vTLxFT2S2Kp8cwaK8Te33yhuQshj6CAfND2gm81TeesFNvGUBKgiRuXorZaEAbxTLfnxbLV9Di",
  "key2": "5jd2ft6r2JJ1DuQdLnWNZEDJKFtEjBNAq5XuKKZhz1S7PRrL7u6Yeps9Hmo8stccimwFXi22671efbmLRo6yCUQW",
  "key3": "4A6oSSNaKueRb2JaLUrYLzFr6wxNBGDMNv3feExDQBKfTm3SBXD61gknP1Z3ETkXJG85RKtb1Vr3dDbHj9dLAZtE",
  "key4": "3dB8AzcptMst1LPhvea69ibBCKhiqMuwxCh8LGzzQi893Q4EmUwLocwTdyNi8uTBX2AdFhpnYMSBMi9JzcqbHJEW",
  "key5": "2bfYy91wUT2vXzUWiWQb5k2sYAd9Zr434Ex8vSU99jFfrKYAdBVHCmWyaMVYurL6R1cCSStXwqA3dohM4pPhoHJL",
  "key6": "HyogR2wsgxa718xGsxEFBSnFp3a5Ww3efbTodGqo5Nt9SA46MMY8bgW42zfduUnHJWBnhisVG9amANaXgj78hu1",
  "key7": "KKAM7npG4ib6jrugoUh5rWgiatbXiLSGm8wu9eJET7bV32hHagxiUQe2bagemmt9AJeezopvbrB2azGTfMqXQm9",
  "key8": "4PBNMWupeHNNdh5rPsZULRiyRCFkT3RKFUMnhcryNrZomgAoXbfxDfb6KGxxeJvLEDe86zns5NAY67SMuEPNXyNq",
  "key9": "2oN9nGzCvBtkfL2xpcrGZcPLGbvFNodGKhb3XHhkU5VvdYnxizowF7KSJ9PVqdEnrTt768rorgZWMRnp1NNviKub",
  "key10": "45vyQa4DvwZ3ffdpAZqrQZu6gRqq44QigUhKvHDATMtNUqrF6i5g3keYW3Z4dGXTf8SteoKidKNuaRRdU2MfQ1o4",
  "key11": "2ZAeAB7NFGxnY76X5UGDW4DLjFfu9TiRQGnryh7foT8Pqkdhzx7sNCZg8foPLyRorzSZGPHhadwdsRHXFwQ1638X",
  "key12": "2fVEAviWaKmY162YZr45Jz3rbNv3Y7t5gzejWD2jVLWHb1YS67Nsp4HbvpRHwy27Kmn7RFv2mkwV5vD4aLGGEVfs",
  "key13": "5x6VJgkjqMkuocV43fuDcFvorAHTCv8VBqzHXmnwFMWjCWDutghrz9VW7ppD32HGQ2zaY93wCZ83K9RHbYdDSFVy",
  "key14": "5SLWRgVqhqFTqL4tgrQmfgGtSC5H2q42qim17AfsV9YtGRM7D8JJpKXJT2rvkYAvkZBR2pUvA1RyPRtbjrMy1962",
  "key15": "5UiwdkQu5gSGJPbY7a1mg8GxrW2ahxeuxa9rQihYjVbPPTEhE7xCyfeqc8Xf9JaY1djSPnwtuWjZ63FAsmvR3LGJ",
  "key16": "4Eqk7Rv8mW4nX5jWw2CvrsHCDy57j6teuULCg8LEv9R5JMvzZMj2o6aiNzPopA3Zng4VvPsAu8y3MbmY4QBR7bcC",
  "key17": "3W8m63HWrPA7JQJSwPPU8LvBGko77jMBv5cFLv9E3SscHoCDyG9QtyQT4VLmaZunknCRva3wexnnMFcNjzPnx6zM",
  "key18": "27XQnN8FV5rq9XK7wMC4VbC2zZ7xxCwpzABjNo2mDJYLWQGX7QxJVm1aMK5Ghm2MGY87jXGp3QC36HANg8TwZaZr",
  "key19": "4yvMkTWzu3suHWDNmYs7GqNyy4qofwbkUfXY5aKfcbu1XU5DJ5BBYVNHxjtgcEcvTjTcPQpddtcdvFW5wuCZssVN",
  "key20": "5VZvCgSzU42dHYHWbTgh4kKunrm2whTV9zooroRrmhTQRy9bB4G5foPNqmtgJTCHk1yx2WU89SSdjQ7KGdiVUT5Z",
  "key21": "ML75LFJ4KqaJFhfEXghCGE1f1tNsBjgKYsxT9UVRUNTjydRT29A8mpZrYDGCBRPFTGTjzrEbrz43B9yVjF8qJ6x",
  "key22": "42pVSPQbjXg6ygybGhaqzSz49BozKwRN9FS1j2WRsNBL1CvGS9fnBZepfGdwYbqi6PYAgpUDPh44MYboKm4xoRqL",
  "key23": "46apNXbBGYbxTwbXQh8WwNJv8WHP2bZwq6Yi55s21ddwJWJsDD7tBGFN5T7MkdjYPkhX31gHNU16zEHa1qjgxeWm",
  "key24": "2VGfo3MFZWwVKZDnRSudMAZwweUPNZ5wisWzTYoE8euwT54W77rc9Y5a3UGP2XeaGm4y6bTsheahJA42J82dW12i",
  "key25": "39n9Wk28QWJ5XBhhyvbDVaugBWuiL294aEAgEUkKHLrxwVNpXNsnsnhbokjdL71zsfHxyNWuCAgqbMkvsdVFfFGu",
  "key26": "5gnTU7Q8MVjfRR7H5MoRqd73CcSfK9T8PJVykb8JDNyTRbgwvhj4cVhwntjsAL94DC1B7W7Aq3b7DYEGGMDekpD3",
  "key27": "2ojvqy6HLTiPgzk8tGnu45n85f23vL179rrDWPHeHAfBz8LBQCVTJpVuyWQ24wXhLP2sboP66FMLuTDBcinFs2QK",
  "key28": "2hswECk4kJZcgEHq8d9hMrDMMg97BLfmTH2SqxMUfCKGNNVdvFMUjboy5xpGS4Xqw5sGu11ZyBeeLcGUrSkGSzWA"
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
