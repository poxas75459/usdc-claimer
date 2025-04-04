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
    "3XDqHJ6t7uGNci5xED7MxFASUAUZZKiy7x5ur7whS6uaDcEcK8KWT7YmHyDT4gLYnP67KndA2dfHG5MhaN293PtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXfJBo3CPQ8yJ4ZPbgvBNEUuTKz21dZ92pqmJiG7g2nQQCQrq85qChk8E9L1iQTx5omVbu2vybb4R2CW7izXhe7",
  "key1": "2THQHjuoig3urZp7ACuM77XXJoT1hFtmGaZz4ZPYz8cEKSUy7VDTZ8fJa1kdJddMUZDMCT8QtRBXQWHbjtwhXZ33",
  "key2": "3ZjBSZFdzTwdJMYUjQKkKA8HyMkB6efWq5iVNh2wJ7ybWaxJoC6ggozz4wMQopSSbGqPQVisWGLoBBpjTbsZuTqC",
  "key3": "3AXn7E5K6SNA4XrFx59LbH9hicryGtKuuQA48hWTJ7AYyrbHg3f59poWw4FJ55iopNNcz84oKXzVR2kXZSv2d1g2",
  "key4": "3wAi4yMTCbWWa92f6VvtiwZ5SMeokbXybt3u4xa6JGvhZh7uZ6XkagmWQBSiQioEKBvcG6bviQ7vcVQ5DYNNnGbW",
  "key5": "3Yn1NaAJqKTPnRZQ6x9tujAze92ztLQKPm4kV15hzBjbjiE6k8nrpe2TWGC9dc65gNkmNcgNTrmc6jRYA7wUZsU8",
  "key6": "2be62QMsC58CJ6x7PENZy4GG5v2LQ8rmjHScRHkF4Ytjt6okDiWx9ubsvv8PFxACAj56U8rbvWES2AnWKyses2Yo",
  "key7": "2ReKMPzXMwd7Eqe8q8y9PoR7aBAUA243gdUTL9nLR38tvKepZofSy9PVHzveYcW8f6pqD4roBJy9B1RauAa2Aogk",
  "key8": "2N3y2f8mUUwe4fftBjKr6pr2FDDbhVf8TJdXGfjtV8bYXxJZdbBNGpmW2KEzRhYHAKEwNiYTTQQiSqUtFoKJKzwz",
  "key9": "5vQySrEahHUHN8sXD95a7iAcGmhZA3RmtHdCybcWTGYEZf9jXRQzue7gSY5WgTif5srgvpMbpoHLJjc59X8nYBhn",
  "key10": "1s8p1hazAcLi111FRZayvyXuEHm7wjTAxBTLXnRumB4ewSyM3wUEYpHN431Au9N6XGTktQi5fQADs6h9H3zNZ7C",
  "key11": "3jQhraiHrnXB7qUoJWVmW3C7hwMoe74YUPNHvtpCQkPZTQPXbXKapx3pMYxGhzCkhPjhNAP9ByZug8PHh88hsZZS",
  "key12": "2jNTDinjmQamRquoFh64aHUpu4LUiTKt1e6gUnLBv4wWNKJ6crDBRzXvSg9VPwKKHPwyYuEGMkywFUAfjMgGayL2",
  "key13": "yN4R8FLshehF2UPunBhvvN5BMsbgnWge696LFc5vQdL5qxTZ3t96V93E8iJt26oLc3mSjs8LNWuW89T1MLAJaaY",
  "key14": "KXkEEVDZ5cW5M5iXS9LHst5ZgPAqHjmmA4zRZoX7LoTVs7PkMM5zdmkGYmmpNgrTZPxvSbcSjBd3pBpYdV7qaoR",
  "key15": "28UTb15A7fBHyKa7C3QBG2ScQfdrrc1xLsCGdpnGLJfv7kWCKXQUbSXZKzJaYVRg8mfzgouf68Z1rUe29mo7GmSa",
  "key16": "5cFHYfRXydu4HtvRQpgQziSvgGFNMTHuYzpSeUXdc2pApimPZYUEMCwU6LuGXJ3FSS7Add2uTwsU7RDwEbnWMHCB",
  "key17": "51jFD7AbpqThWGH5xgrFYsVJXZUi7RKkiiND6zF3fgbDxVSZ1ghTHJjmwRmsFPEfQ7XpHqWgfwbZ2b3rAJ3QEuT5",
  "key18": "mhaGzgAdsWDAXVbHBe24PBcrFVYxAiqnsxoTFSA6L2Zm1hFFFFMMvmLANGwM7gUjWgFxzf9VqH5br1NDZkv6oV3",
  "key19": "genX3LpCSnC23GpnQf2SRQazKvxAB9bDYmXjbyAADLcqW9kHtAtqNBuk7dTNSEn5SF3ufa9JP2R5q5NteA8ZrQt",
  "key20": "4c6XhewhMVnYTqXnWVmBZKmgU3naECLhqCXxtL5wEzwLnussEBZ5637gGAoWJqbjnbQ4zzGHisy2sufHgtLaryTH",
  "key21": "44fmsz6hCYe1kx5eutDY8cFx1rB5wzYkJMypHrU2RVzrcmD9uk1ZETmJGhWqpgD6Q9mhhG4pWU1LJ71dDM34wSKD",
  "key22": "35QrX61mzvLw8vkuX5RnvaTzFy1r3sKTCVCaTUeydtuhSEiMmhQnE7aQiaT9DefoV7aUe36D5A629zSWQPXTgRzV",
  "key23": "5tPseq1BkZ7f4ctX9S6tZbgtjpm1XftKw3qwtZyytwoiN9Lk3zm3xUtEG2s5LyiAQpnCRHWxkUjZftDWEAtAtUWR",
  "key24": "5LyQnHmorT2NzdVEsXCL3ivMAWkjf3RQinxWxJsexKuZq1DDXhWiS4mLmKhHZDxyqswRWLSbbomreJf5ozeKHjR6",
  "key25": "29uEzC4iwk3eZZMgB1V9BBLzKcuN5rQ2saqCU3o6HCkz1DhK7U7E1oThdfEFkVZ7Z8qGTd8tTCbr7SAmQB31BSww",
  "key26": "46gSzpUsYK2MFbSh5oNVTNgMXEygg8XtuajwYbAfny34UPcQ4Xuowr1PFc3mHNANw1k7RPpULCAfNwvyyzV9XKkc",
  "key27": "KiRJpgd2ZAPyotKoycG98eSyUuanVRcMLiizv8CbXy8jfFbQX7gqAXRpsEf4zUGtAZspy5aY8nBYvEV2z5y2K3j"
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
