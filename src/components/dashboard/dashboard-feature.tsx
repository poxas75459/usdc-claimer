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
    "4eJiBitzWtRLV8CPYr2LuvNVu5AVFvJKzhrRTrLoFENXsuE2zUfRXBatsMj3J6VmJjTdM3b36aoqHVwDGfMb36HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPtP6gyU4jGYvgTjdeWuppsMzPN7XhX1e2AhMqy9ZcEFzx85up2jP8Dy2BWBjSvtrScxh2GohD2HkoFvZpsihnT",
  "key1": "3a2yTvikoUvMgnVvTWRP7pdg9zpexMxFcEmtG11Ty1DHWtfANPJE68J6tBv3Tte3CJF15JeJiSGDvmaJPdXqGsCG",
  "key2": "qgUpBzneCYWrDuCMR6t6FsoV8uEgxpBNqAv3836manc8UueAE5EYhXB3bYKi7PduqTa2Z7Ni4H4ZCP6rsphZCdD",
  "key3": "2PCKKpUknoJq98QrUCCV15mqQLPFehP47qeQVJaXxLdqxAshFNMCEfVYT6Qc2sbWqhPmAbjYi2zJLXCJKR7R5936",
  "key4": "32PEBmwbrmLssEciaTEm81uLkcdvvasMWCrx8ikSfnLAehCT3UTs4TFa1X2JtcwjyXvqw4YaMU9NoRR7tP8zvASM",
  "key5": "2iLGzaL1eos4AU9AihphVAcdB6uwi85o7PZSii1tUU2aMiMwnyVJGJcki2iFw23y5aNV28xf8gTRQuaMfP4FuKDg",
  "key6": "4Fdknj4gW5JrKFrwHzwHfHdRR3u8GWrojnW2E28ZhAsHKp72t3jwxnfjpk21kJRwx8tHPaY7eh91Lk83HPwziSWG",
  "key7": "2pkFaaSSR9Ux3ha88XC9g6CsotjUYyC2vU41ryhJjHL5Yfk8Z1MygRYE5yxZKi3PDTUXA2AAbf7nj1SVKjqhf26a",
  "key8": "3BNx9fqdDyvMV1axKLkHQiRTk8iao4DGd6xdtfCBBuwyu5w5TrgXFsWzGjVBaAjnFLr9YNQzryhg2yR3Eu2hP9Tu",
  "key9": "61jMuTptGiRWv6EQn89zKGCFVJ8C7wjB97bQFTLmhEPNbHj9iJTc2Xm9WAw4iUJ2dmW8xVH3X2LuNRtRY2ZMWqD8",
  "key10": "4qhcJ5epQvGFcCSY7Ub9DTNPdNTCeLCsC4iCx5MkyKy7FTfrUsViqm54EEGN2H8JKhJvfH3X6fVwwgqxwPxAd3Zs",
  "key11": "4yVnLP7MmC1rJ75XyunTp4bpRzAyVZwSR4V6R1PyrMm4gd5iPNT8RoxqoPnT5hj1MWZgT8fCoQfWQfZRyaxy9GCr",
  "key12": "3nHY7JCWTihGZTiBQ8V48fkRjUzHfxLyzzziJBWMuMhTCKuskWkLZECHoYdPN2VrjXLEoSE3MG46MXDMgM4p1Fxf",
  "key13": "2A1SpN4yVyKXBnvFUGtcxM5zR5nWShgNMHRoFbPD3yPZHe1BdxT7biNXsVFme2Mq3SZWKZS1isX2qTyaZqMCyQRv",
  "key14": "w6HqEeuNCT1jXPxpFS6obXfx2c4T7M9BwP9FK1k7BSKZHBbQEgyWgzFLNDEwDH9BjWrG3aHT5kVsLJuDcfFJFFg",
  "key15": "3jTuxtqxfiKrov7X5k6j6FcdiYNesaJtTkLKjcTpdDjWYxJnqTEEyi6J9o6k898Qumhyo8TZeZF6Fam1sRiuW3qu",
  "key16": "4tjeSqut4cke3bo6AMCesPr2H6tTACnHLERXV1kEbvueWh99azevcg647YTJnTEhK7S614obtsgXoBeV3oD37Jt8",
  "key17": "5EiFom63FspVAfTuMoU6FwU5Fk4fewSTm8y3cv6N344cXdFFotTP3yJZiEb4ucMQGNCMKKnTuGdvXqHhPMumBH4u",
  "key18": "u9vJhqpmegcucvKdVxB5Nzg2ritUWtPAPTGwWQeSXdQvZBngmyo7iNfbnCmTCQfN3YeuJXLtFv3detRy7DVKew9",
  "key19": "5793BH1Jk9ZPzjvwMFSBkoERW2c9xxgwsmt3upa1Q64BFw7Gx6e4CNsWUh4x8wiVzu8LbsRy57HdApj9BmHaxZnm",
  "key20": "4nGzpVzjeRSgSts87vpgtvau54o78H3YyMYjsw4sweAqBpnZWtNAmTGuSYLKjQKmaGL7RbvBWXkEL1bE5CjLh8va",
  "key21": "4DGxxND6cvFEDdV6fQwVBjpMGsfefCc4LUTXATKLg1HgRVwSrmkTQXWVHrr1KnLsqbmctxF48j8p14ctmzgrL1en",
  "key22": "BN1gwwKHEXe8hKmzddrb68obbRzdUChvuTp7EriQprfYEkVW8TmxKi2LqK5r2k4mX9JdU85inDpWL4G1zzzLrop",
  "key23": "3EztqwXQcTkocDoXt4rgXRfAyvn7KjzdzZLwrDXiJ3hYR7RSQ9jNTZhsz9uSngQxry9kS53oYsqSkczr54UmSa26",
  "key24": "2BuFf2JmY4CSsuDK8qmtF7ZcVTwMx1qTxdMK9Ge8seBdx8yXNB2UtPPdgScZKKDZ27C9MrozVXzgW5pNxuktDJuE",
  "key25": "4rGMCMyxscXULju38NsU6vtt2cUTghXpSpa1xvkki2RnsPf6dqeAQ3JQUcZ1dkYTyuxPfG5hX3M56td2qBXwAPgC"
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
