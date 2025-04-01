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
    "4QYuqfXWvR6Wjb2JkuDbQKnNEViWYGMMFueAWRmgcEmYoN5c8oYgYVVKxAuCUPu58dY6MEZUvTrenWHYEbkEpfon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iu2TGjjxdLBU4RGMSwdP52kyituQKhFMuGeRy1wgHBdri4rsNVFPwVpeCKx4pLiYFFPNHkGnbCUdv5yjkXdko5P",
  "key1": "5HXq38xoawHpBCvYLnftFKzrF69aG4YxqdSkTanNmwFKdw4zq4NRSgvVPUsvHJGVjmWsrVSRtpuCXVxLcewoNYHy",
  "key2": "5ahLZepBMtLjAtSsCiw18XEg4faWghjSHbBYysdGAWumvei2ZRfWq9aBsWRTpz1RakMzo2mQLkmyY2mCioLnjtJt",
  "key3": "44a6JvHLfsGMtstRDB9Pmi7MinsG7SzfAEv9pbxMK8bL7RppSv5TvFFxfQPdPnoBUBqKfgBQJZiAfnrNZa31YxJ2",
  "key4": "2TZDAqQSN6JydvhgMquWxYaNXJj5ni7K89n7KAEMebKS41MUJjchkLzKP4REYuxcTbL7LXbexqXu7SAQ4KLgL7MK",
  "key5": "5RzA3xW5TWJx1wHk3NK7PkaTyo28RYb8VWH9mSfg4XKJEcznDvkwGC6SXF3xxKPVftxmM6T5WF8agPWmVbFTiyDy",
  "key6": "2XA93SV6czdGwowoSzMU5iaEgXXtEd53wzzGURYrL7nKewwtg4iDYFCLnnK6Utt7VCfQwWFezS3sQJHaqVig226G",
  "key7": "48hUQvvJMMybi1DwcYPpYkc5TiAv9ePoidHmoUdwrumgwsb1i5dwhm6hAiUotrEXC5ErUMsJaoUgr2jHAQ3sPHZ4",
  "key8": "5KSqnexemPNfRpVWnna8e7qZyE2jBEa2Lkx2dLjEysUX423nxXRAQ87P4qqMLZXC3LY6o6q3wrBCVT9VGc8176Go",
  "key9": "2HopLfnGp4fshVmPQ2q3SoVWvTB1c9Y17xCsQmHdAq6uPNJY7qroH74hqD3y3HQaK3dGngBCNoa9bH49NeQmVhR8",
  "key10": "WGGjXVt2DzEpHjv6gsHdxvZr2NybBafYDTVy683UP59hkrmVLvBFntmZBJ2EGw4UttxdsTSNbhVte8AZmw8EAre",
  "key11": "5HC5JeDz1hAcpBgBkHEY3t1vxevzJ6R7YKyTCNzjLxtNgMMEGmSj4fWrkCuJCQd41UTtLydvJ4WQ6yrWZREiVhFF",
  "key12": "619AuySkG9CAYecpLSUBkmxhznDmKNiCKGnwWCR9czbLLRSgSin31vmqegu7PDkZFkUUkEbR7LQKjbJGzeHst1Et",
  "key13": "34nuqE713w3ZtCS1x3GuDE694R73jbnK51fn9BKLWqoNjDa6yeRoLEb446tve7UCzcuVJkzjxWKEFtVwF2B9cpxY",
  "key14": "3sT6C9wC5Bv92N7UJsM9VL5RFXmiL2SXSCt1hL5gyrLk4xFaEX95M5oNyL8gcJngZ5Q1heT2W2aSi8PZCegjdjAu",
  "key15": "5mEUmXQuaHkL3LbFLgKbHdK33xXn9Eu66uhUt3JTXMBtKpD1iUKkPtQb19ujQMHXckzSKAHkCRE5dqCsZ3ME23Ed",
  "key16": "3tKm72fq4WBTu5htXpZQ9xpXAmRTqyY7pcCVyTEe8fDZBjNBgU2A7S5GCH3atsFAfoP9H86VLWjhx7KjbSHv8T4e",
  "key17": "2LnuahLdjxkrgLNR4SwR2U6HF2oX63VWa32Qnzfv9iKjJ6LV9b25Bxm6TYBF1wknqBo1Fdi5s1rFdHMMW948Sn9X",
  "key18": "2yx8fph35Cd8RkhKL2g5g3gvhqbYbuDhpmNF571b2Yr3cQSta9AkxBBWq6C4fcsVMfAmR5aGL6htSufV8v8gfkia",
  "key19": "2QodNpZru8aEu1gGgr5CZWju83v2geYGMLAmK3VVSmA9jvXbM5uqvhoQx7KCEEezb2bXeFehwy8BHykuMmuLoHDa",
  "key20": "3tUtiJ8TFf5pQAtazza5NH8WL6pC3ac8ztqCjafNrA7uWrimkvdjNX6a6Tt5sEKCYZgUERMG3Cy14HrG48XAz5m3",
  "key21": "4TbGJPahDkkTHZfu55DP7PKRi4fYZqLpjjGz9jFHNyvLnuRq1GnJATgeTvDiWN6uhpEAqwqWj5CfTmTVxbQBCskP",
  "key22": "3NeLyd4mHcBmdaLJ6Mwyk4e1bPScqpWffTTpcUdxUFD9fURCRvhCTFd63mcv1P3iQriYksTdaxZqnheMA5jasfSJ",
  "key23": "41xFAmXCX72ujz6XHYnfXgCao9C3zxRpd75FNbA9FZdo237rjB6fZDpZuDoBVCCTVvZpe6RLLtWXjaJeQETQnd7y",
  "key24": "4Q5gp6rsZyV7h2HkzgX8azVJhsQeSSEGow2LfZgczCZv2Px42TVCxymRivky8hfkP3daBtgPFU9EwWiSUaxitZ6f",
  "key25": "4uKWvnuhpUSyqpctfHtp5F7sPtsRu2kKHvGDNK9p8T5sEp32CH9Eak3L48MptN5289C9HkFkWSwVvMsrUYBohzns",
  "key26": "5e9hRatTsjp33JK61YrSB4xTjdQJYQfiUw7GjWVoPUkUdfNbZgN1gPwY4FhFHAH6wsjDSfyDbwshcZbYJBBAH4BF",
  "key27": "XJLWPWsPvNC4nNPYpWv2DJtZN8GA5jSrTfKKoQqWRMkpgFeRi16oPWRsyogyarJWfi9z6XFGiFQsTpoceKQpUJZ",
  "key28": "2nX7NWGHuPwyAe9JuJ26YvjvFL4TCePQmGxzDEjvn9kFxZQDHWxyt6hEV7HPk1TryFJ4cn1eiN4uXNVNdWAa7rPs",
  "key29": "2478eEr1SLCKJB7XqR87tmo63BDo3c9nb2UykLHdtmLsyNP4A14obpj7HMZELcZ2X1ZuidqU7N7it6XKhJ4doDxm",
  "key30": "KcRX4JjTdSBb8mKAKRJpkuwBvQ611SsUt1KCfRPv12ic2bm1krZso4VTmLZ7ZxEqnrSC82mTBKQ6QPEuQMGQXVG",
  "key31": "QpkibjG8E86oSEXBPPLgfu9QNZZV5AvGtd91PmVf77kMbnhFZvv6iUNddHizktfLPt4pbsh6SeEGwgaGQrvD5nf",
  "key32": "3DfGQdBytSp4hXqDJoEN2eiuk7GLwgbYqAeJwLd4b5JE6GtGW5qm3ef6m5Tnw58RvRVn9f3oNjMxFzvTtZzV3R2r",
  "key33": "ftq4YT8WReRvsNNN5Yt9EZSLwr5dDbivjN1i2s4atzADy4HefKs4qyZU96MbD9Pezvrvnt6LMoS1W7nEavqHJmR",
  "key34": "6254n5b4Jm3gFCHUAgTPchsakVCzuicKmGJcCCiMbN9tmvkGsVgt9r455b8qqZgbJWkh2oJ1XNtjqK3yQP9dCDJ1",
  "key35": "4BkbGD5igbS5ww7SwxEkCEgYUTaUzfe2YhEKFNSSy3DJz5qR78QUN4STZf3RgJQYS9xRFiU59vrDPYxBMy6a7od4"
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
