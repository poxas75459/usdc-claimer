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
    "2BmAkMBTMCNEsmYjvW7tVnASTnccQnoJ3Zt1NxmfbgtDDSmyXnyNVuNiSwxC7npyV7xB8YeHP85x85JceiJ3SXdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kB9CbXmgFesQDwZWXqu83eVcZEFBFjv4UActjLrp3JFL5NuzksgLaPYi7JizUrWPWnKdEw1cGtyYuiGj9vfW6mq",
  "key1": "cshjcNV3snYMW9EEb8nW1WcYtyovX9URaX6mmgo6Miiv7ReCNVCo59cTvu6FfwazmTpCveakckVVgBBYZNHvcEe",
  "key2": "2hkaBXzt4hUDrvmNfC8WeTNBkqio93JV774ihhtLwbGt68KMmbmBVnALcYVoLt387wn9vJsBMoWZp7jTobVYgNvp",
  "key3": "3wu7LwX1M4eED8CwCwauXN1hkgPUbQznMZmK529ScqwUDQYGP8pxcXMSDzYEeJ1zKAJa4NugwUS99xpKQJryYLYf",
  "key4": "wq73gsSgkbqfm2hudZ5YzrUdMb9etUa7KQny86FrVTtvHV3ZiPT6f9o2eH9PCtmdaJoR46Y4H6a2kbEfaMmY9WY",
  "key5": "67XgT2XJAKU4hVkSBGe5dyRkB7yXg5LinYKeMjmfk1CCiFhdqmJ5LX7pdfe2sEHrvaSw7VpdtVBd2MNmMeGfdoj8",
  "key6": "4DgCKkAZ5xcmFtZY4t9CFLFLDW8YS8SU5NPnrPnKnFZ8gyNQdqoLA4MuHu6mXQCQpxrzHpcyF1H3vpJfx2AC3eTc",
  "key7": "3TLFCHk6JbqbDNujGgx4aqEVipP25TG3FA1K7epPpE9FkkBnFmQ8wDsespLPzrRq3PAt9fPpVVNUTibBqoZJKkUv",
  "key8": "RXhUvi2vQVtEh5DCuDexBEiEhXZfn57E3XPyrdqALAKnxEZyo9TTQvuNWoMUPtZcg9XM24C6hmpvj9NvMxvN5Dt",
  "key9": "581TVBwQaVW7fjisEjXJ6qRpyezjWcwo2DBK5KHiMMbXvEo88XxukUrkkw6BPjfgNPu6odUpFi9KJGDyHaiS8H7n",
  "key10": "2QnPM5oaKiRGwSn9N3dfWjNVgK2uF5BqaFzTagJwfbG9AeAXzP9im1mN2jbhRwA8qJJHjZn32iWJJpm5eYJuvxuk",
  "key11": "3oy5GsVyVEQBdEvuo7E2C1Eq9WBSexU5KHoYLusoG2MmQ6MC8g6b4nSDtPJRrGG91uQ3ey1sYWm61bm6SGXbXbZR",
  "key12": "2W1wfALrAjKxcdpUxZ2ccnvkHjAEXac4jhpc3ezvrNFZFKdNUGvVMsT1Sd2Qy5upAubiogT3qz4DwhP4F1uLqzhc",
  "key13": "3SqwfwRYg9AosFDHRUe62ur9AhWPk6A2wpiMF8wcRG9yhcg538hZ94mzTsMbmBYyW9FxincNgQhVdafK2xbWRbQ",
  "key14": "gmLxvWDJMWc6sLaD5SCSuLuQczQtBSZhrL2k6UUfvNJtvSwppGSMMX4941C9jbNz5SVdqu9uN2QyvXXqPsNzePQ",
  "key15": "56KraSvGRcp2hDPshu5vzDqPQcyDrKsawkJuz2XV95j5a7zryFHM5j6fth9P7JMnks7etotzoErQB2ipV517EJne",
  "key16": "3Z4CEiJhLHPVsFBbpYLJ1jCK7Wn6TPEywsxnccGGumhtdeWntohGYwBbS3GefSw9nJgNJXL7qJxqRRRWSt7rtJ6v",
  "key17": "u3hyNmgXDfV9jxd7rzuBfntDoTUGBCZgRn8H5YHYTkLv74LJJpBpbpNk5jb2unSdXW7Kz8FsPriZCjKPEPQD7V2",
  "key18": "2GyLqokkGvDogfN6CkdgMhgjimkjXLo6chWhMZ5trfe9jDDD1rqFqnjip35sNiRuyTyVzsSDR42LjhXgudDKC81o",
  "key19": "5RxkS73DwqwTm6RvhAXnvGWdad5SN1iWu3bpMV9sGdg5Aakk1B3ZHDqy3TpSLRGQwjfh9uuJheiztKDWiMd9waeA",
  "key20": "3kQfiimhN3TDN49ZDZfebTmMfKeAQdox27zV5xSYs7Z4zZ6BVNt4Hp9uKRL16zm7AC4tThzuHxao4BhuVw64cCvV",
  "key21": "3cXiDnVeGJ3hDUf5EyJCJmXZScf69YENP4GgTprUzt2A1kMj3d49fCKZish97VzqncqLpxSgkkTH53JgGDHhFetE",
  "key22": "3EMLJsZMuNcE12B5gNigp1ST29mDUZZGsuGL26XkC9CrMMR1tvULoFDP22fmr4y1bYj1UfWx7tRk38v58LMdBNWQ",
  "key23": "4yoPosRCpPZVXyct19ji5bVkn66hQWVfJgML9S73gxbMuFnFaZXSZLSsYNPaardDQxtD3dXCtqDyYRpPYn16BuKs",
  "key24": "3MimgHHjtoDGuxpezgJxPCXqZUbVrthBXbJwbXCPzssNhZQHChMRCLiW6VEPVgTvkF4ehoqShLSgAN8LA76u8hVV",
  "key25": "26kSRKuN8wRcQqcQhVZdbbRNGX83P6iyA5d3JbrkHRHdSUtW7RVuTjBaHbSS9PfsWgn5eitXVqvxuYptAhBZBNsR",
  "key26": "2wsPe77AnuZe2kDjMokFj1xnWsiKhQkQ7ps1XH8Y3DkSHqcDpjagUDnYX4AFyjdDjZYfhJC2UvVBSmAr6FzQm5H2",
  "key27": "3SdrFtCRjPJijT2HLUy8Sroun4oFTxaWy1Rxk5pwnQFSQZ42VE4Fomksb9ciNS42joFBvWTUM8AUyPhFeiQTZvti"
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
