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
    "24vj8HgNNNJskmy1pgnTigvqGP8MUqz2pSfLz5adrshtHSvtdKRSoDCbpduRYFC8hyWjHHfiyWNCRydrKeh4atdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXGY6WAeq9x6sMkpyW4uNtvksCPjE3Y8fUmSTSfGHDD2x5bE4tLAMCuJrP8uznvVJ7To44CrKiSZtC4uAqQqi2B",
  "key1": "4j1tQRfRssXkhynHFywaQ31Mm68a66ER1QrxzXWDqtyWa6KMn8vvXNJc6JKn3b51YqchMsW88GC8imMbBjFWVQ8",
  "key2": "3v64bHAtnY3ki4K9BEEap8eBc31nRvAbSGQkEK6R2hifx5C5Y8AdVjtK3MhGezTRmzCXAT24bW9ijSQCaZAYw6wT",
  "key3": "39YSTW3LHdCXYwUoMHf2c7Wzwyzp15dkyWkEa9KwojM4Hdt9xwaJr9YUsZmLfRtK825F6DTMZrt9jzdRArrhsmzJ",
  "key4": "5aBnsgW6PPfoFdXEFcj1K87L9KMr8bowcUH5hu1cEgtSqFCCwPzmvrLLvEEmFF7eVkMSaDzBNoVSvcUR3TtbFR6W",
  "key5": "5eGoPfjwk4uMYyWow9rknMenER6qpBx6Q1NZQA5gDz1M9SmVUVF4jey3ENQgj37KC6qeL6tqJyrhYsj9FREaiokN",
  "key6": "PJpPC9KifGYbttThY1GJqKzMUf9LcZtdmNn6bmpyNCFJetT8XDUk9vE9naAYhYsWEVFNoq5g9vkPhQKYyLRSE3Q",
  "key7": "3CSjZQmfM27nbqDcAVu6LTZWbJf3x7GBwr21GapQY612YBDFzM3aYJWyUeLKAxGgFWua6iBnCrzaa6kMzPojcAZy",
  "key8": "3Y3BhnuyY1PB9v9GgUkh1ZLeukfj67hj6F4eZXkAVw3NP42szurdspQqaB7UeF3icEsSjYcG2uovSFm1btJ1CUyv",
  "key9": "34KxmX5Q1vfWcCFhekKkLZeweqFpob4dQnTps29smG8Kwo18CeojuEFC9kkknPCiX9j8umsedHXrxHNamcYjC1hW",
  "key10": "4ciYrdw2MvxFza6Yf9zqLLDcbyvb87FzCrvhto7ZmMCFuX1UNwmXMMPw1kUiPKxo8tt82PoRRRd1bBAVJiZmE5Tu",
  "key11": "TQukyCZ14cnozR2v9WB2y8LCwyGqBpgFniK8a2jPCHkNqDh5sNQv3PCPfWpMrwJwzD2hN6BqAkGa39KSw1tVK2z",
  "key12": "4qnzQv9PZfBfmZEeV65v33scexcNHm9Gi35jxeZzAb93UnVsUnoxmfmFFV7ZC9m9NpxW2PRQdj6xpuH8NPFYNQF5",
  "key13": "4tRRjqUjGdLNzcdUmWYFQRKTHrfQXB4CyZTivKcx6CbdJTbdPQ6YRT23giGuTpqsCs6w2E3EnLUENdbRw7CM2tST",
  "key14": "5h9gn3PAanEhddRVukpiaFEU9B3DyToRANrQ22HRwnfbj1BWPdBoNJ3Ldut4Pddar6wC7tYbWRzAeNQU5MJdsjdj",
  "key15": "5iUxDkntLwwGTenkRWbLXgsZd5nvGVM4BPHe2k7UjK1rJSmBYz13Gk7b5avXrHsjJifA6oVR71sCj5pjvkaDvMqc",
  "key16": "2zVqEKksLEYgvonZThPxm5U8cDy1YEmuTfJyycVfEt3XVRWA9W11ZinH2YdX8cu6fwCMJQxBxpZT6otR6R9SLRTN",
  "key17": "HR4p8BYTDhraRHTjZUy9EsroB6tJE8dW4rdyv2MHHUuVSWhCrtC2yGb9VdQNaPJVANv1niFpddBKpbho3HXwoKg",
  "key18": "mez8NApVQgq7n3gTQ9nYG4xwTQgSeSLSLgE7cWswfztdVdNaJTyWbfz5PJLMtfWoyKM7RkgdTBQpRZbpBz5yy6E",
  "key19": "3oa23cq5fvMgTn2YsoVKuaHohczmuXzMUp7CcqvQ8W8ZCpp978nTrrsGVQBna5mWo9iykPmwYX63TkZKhqLb2K9C",
  "key20": "38LuH9TUGVtoZvVDJd6jjRHXQTufTS3kkTyBSY3U6PT4t3vqUm7iUdZqXFzwQhUR9EFt6nYgbQA2i1JS7CYMiyB3",
  "key21": "2HCCgKbHJWGgu3PMktVVD6KYAmijYuHkMNRudaytQbJ6HqqfeKT12suwqYrHwyasWvEHofYGvchdiyDiAUYhkLaN",
  "key22": "5kDN6idxDRGRPN3gcjArNr3767HA75Nx3zUKJH8noeNsrFtDppGfdbffDo5YDTAer9v53jQiDh8EbhqbLoyCTcJ6",
  "key23": "5diwSDAAAHEaa9htzPrps671QaUdHV5m8qLQk37AYHH8xdbYvu568eucmDPvgQ84snHqnVXSFDmmmtaSc1KvTrpe",
  "key24": "4WWNEJii9LH4GFqsRb4cApvMnz66zprVQy9QcWcZY4i6dwxErWW6RN4VoGZYg8ekmwgstqSC9sAyzN1PSXVzx3ag",
  "key25": "KMbVZU31G7cRf2peMpdWd7vSGLmXwLEPmLE7noXLiYxcm5dUYBPHuHeNJy5sj6EpMVFuJ5cWSGqQKRdbge826sR"
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
