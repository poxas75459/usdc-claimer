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
    "2LACrWZjzSsHpvZdAg2gPa35LiQBAu1dpDxP2etj8jrMAnVu97WyE5ZxokWnMn8zYdQC8hbkKj2ANxPVtMk7YJrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBAb4vAeCTCdYFYm5eoAj58xLbBU2nMqiz6QuPP2YwW2NSkwSAY2JGcmEaFzfRyzuDKmqEchFSn3W5NwjWsanik",
  "key1": "41toveQSkdchYM117BS1uMz3uao5iMnSWT8ERis7UR5DAwPVYoPo9sZiRkBztCcL219Y9HhMAWLPq83RV2TSRsht",
  "key2": "3siamsaeaysi2uEnAPWJbUHxMKbuyNTonund62NouFinvw6kSYxwRVZiHQPtxmqhYT7htUG915EVemCd7LFbXs1z",
  "key3": "35TJFZyvWY7GhizzTJQgMhPS3icdikCt2Ne1pg1ojPHkUTWi2w4mQYZRKMVT5FvinAyL6NGTB4BA4K2SKEpuN6p1",
  "key4": "5E1JAZVwaCEzbuvuJvAu9RHu5WDhAJiUMN1bqRtHpzVzwKfwP6GizaLXpYx6VE4LQhpt1ngWHBpt99ivWMjt5X6t",
  "key5": "u4mGbSYdaPttUtEYMSF3et5DQ5NQkHTF2RRu6CuHpvfzgXXEWCft9YDL4jczLauPo6DB4tM49WLsL1XMbaqKEPP",
  "key6": "2sAdsRRdTZVdcBZ4BU6NTXgx85LmrE8d34eW2QgD66QP7dJytN3HyAiaw7TEUU7JRfq7LqgrhgLkqmwL91dFZSFk",
  "key7": "3UwPhDEAHXqFQgcYKqHzHXCkKepbVEGxCrTJ3w1W8HaayyiaBTnFNFAdjb6uFg438L7gKrrbfRKnvSSNsVh3eVX8",
  "key8": "5Hpnuvya7QwnZ4KrvE1HkVKgjrirVVCpPoapv7eF8BuJNvsv61EvyYoKTSAycNPN4QK3Eh487AA66b8TjpWPoKZB",
  "key9": "n8pqXDgKDitMZZmMo6xVFoz39fp2nSU3pHqjcihK1PaVPq9Rzf3MMcbhvKffkBhM8poMdM7p9iHZnnMNkeBvq5L",
  "key10": "2XyzE7m6TsC6S7S2L9et2FFVJX22xDqgyF8LVXYo1Wtav5uNVnFKZUegr2h5uqCzbFH45fdat5RSoC14QyqjwCXF",
  "key11": "484oUUDJyMjStB2Zh4ozzWoofgLU1Jua7ZPtuMK946ZgvVTUBWfftrZhZrjewfS1HQK6P23E1FvXrEdFUfM2rowm",
  "key12": "4fJmtTmg98x3bvBvsh3NZ62oNBUNkrhNsK1pyBDDo5mbKvhGJVrpH5gc5PYjRi1ZrdhWBhXADqYgjoqzjjatrW3S",
  "key13": "5UPLZrhZJ4AosTED5zFyAQVaDyLM3af2VpKUHxHpX9NntLuZFAK7JRkTs6HyAqJbAsoU9XeyBkX5oZLghtWdJKyU",
  "key14": "5UnCVHxzJ9iCVA7v94uLwvNitLuZiZiLStkYPqQxBQGmqdq7FkFRKotUqc8LxKgA1P9hAV3Su4gPEs7fZxT8GndE",
  "key15": "ip5RyhkNqLidzU8bGJtYd5oPMXmiMRD4uBiFpBpVgpoaUe5yVuvhPEu81Zbu6e3UGjaUgiAnBuGJv9U6A8f15Xt",
  "key16": "5VajNdVbrNuWyPdrcCYnWcw7Ktp82TgPEt2EnB813THUYwhzV1Xw1kVJ6GitEDWvpQHWgDPu8Jrf4F3oanxEA5YW",
  "key17": "3jepTQNYsCiAC5eVPGp8P2g5hTJG7GUMgtk7gZYZJrr4SHEwD4J84W7JVntpfSYZQimg56ZDkoy2KUeCLEb6vtKJ",
  "key18": "5HYbRvjgJDDf8nACChPet7mNkM5EXbBp1tAr1wFmB8nPetnPe1DsBvcaxvSvndZQfW8UfmkfAoHUiQxsSfJfv3Wq",
  "key19": "35C3u89qLuv3JYK5mS6njpGPpGpmJHYjX7QcJe5fZDEUw9gbfcnMKQ3A3ggFw1SqsCSrwMweNGnQMxqB2vDDnMdQ",
  "key20": "2Z2MZzjXwf8tax1mWnTLP7s94c6L6wrAoYgfDvaE4AGT23JvasxNoHiDnM95GP219nN5Kgn58PWfeuBdjwtR8VRE",
  "key21": "3Zs5EBFP2czb4qHyGyLtda9DPCoX2eXTjYWefdqpE2XYpcMsaaETn4nAdxGDfE3255ZeFD7RVo19kDYtgoNqJCKV",
  "key22": "4VvgeSL1oC6UsHEPZpsHMoYJTr8Ks2BgZKmCQrXzJVDgmW3LBcRLiN2vWEM8zp6AW2LpbykibXiA9TKEd7xvc23k",
  "key23": "ze4pr8yKrRRApj21WVn5V7vuDwfkYYak7pN7A6e5FNr9DDy9Gg7jefQvSq59TKaa9AnhftxRLiUNqCQvP8eC8VU",
  "key24": "2BYPv7aRdKBk2QsA2oN7oMV48nHEhYVbKpoyh5EWUaGH8kQ8EwZ1hhrmfaMFXvvycfSXFrAyJSA23L3xPAtPdHtr",
  "key25": "GGMasCSyZ4X9hX8dvhgneWBgsFVq3ZB91BS2bU4bTJZdDjn6ESmYrzfnssS6U895XW4jFYMFu67X7ciGFKkSh5q",
  "key26": "63zDWaSaJ3qrFKTBEres7VUGuEAKKp9aGMUnWtoiiQHDnnbhfG1jdrrCkAfbfUvVrX1JbT1jvW4WTA9en9rCJFsq"
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
