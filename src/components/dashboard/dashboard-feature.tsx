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
    "4er6evEwite5xVCE8LenKrkjy3W7T3jmy5t1nPChKWtpRMT6GKSj83WYVxcAQP4oxgd2DTBudBnAKxDQ6S9iZXeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmKbt5zLS1vRmeifTjzkd1suPPNWp29S4HKacJbd7AaZbY64uWQV96xAmXdPspmRjW6ayG3ymFo7g362Te598au",
  "key1": "5uoLTA9uLDvUg8PuXNjWvVY6ZLFHWqpmo7tjrUz4Jht5P5bGN7gh2X5waTP1awMRo8LYCHeMCKVR9NMSu4ekpMzo",
  "key2": "3NgfSE63udhuBo87DmMFmcdNoNv4g4oTop3mYq1rAGSbQBH4FQjk97EDiTLd2cZBDjnVt63fBTmPsHQPg5xEi55w",
  "key3": "63ZsAuwRYFYk337piD94nV5h8uoArFfRWCE8wugkuoBTTxTBsSqGvNhyf9JC9EfzwywTxZXqjrpo59s2UmtrwFF6",
  "key4": "5YqkJVSMKUgWAbEE6PmRUDR7BuJVSMhymCtDeoRnQBh4ycNKQDuvcMaL5zBtucf8BWvPu4UG2QqNPrDAUKXSRX7w",
  "key5": "4TH6ffRsHNLzEueRyHYzaoQzUPaqvy5qkxT5uFe7TeboWZzk4CHexM8cApRQeMFEZfGKFkUMrJyiADH7JajNdumR",
  "key6": "3wanRRsHBNQviLnzpbFFZp9gvAJP6YY4YnaGMTZDWTimJunL8rX8bUJLH52ya427xcfWXfqUsAHhJYfstwbmvTiF",
  "key7": "xX26K11AKptWiBg8McUR67nSXDVcoY9X8MMiXqzNacawvZnd1ZvE5baNzWGckHHeVbo3iPxhP3k7iYUQVKbvhA1",
  "key8": "5BfEwuQ9WVgzsqUYDS6neeF1W51er9uKUKfAEsZt6mtB3d54rnB9B9DtimPwLb5MMmH9gvpQGUFeDTat12sXms6v",
  "key9": "2WVfAt9Y3JWirCKTc5BjNoUd2MkKQaftcAz5E5P8kZAj4prjeuuSqgLhimXXyRTLFeH5xx46cj9LNTm7cZUwxF6y",
  "key10": "3uckh5RxPfj4bM3JHnVNuxwuRS3oHxCWZ1ZjxTTdQKC26LdVEomLzuwoCjnawsAhXh4BKiEWP8569D9cMeXUTofU",
  "key11": "4jFdH4em5r5Xexn6GsEFNcxiD3ejUapR4qYxgMVyXW5UWaLB1aRdQM3x2W3ysyDiHCi3qxn8rzkNVGdhc8dySpfj",
  "key12": "N95nj8xYtcPwdUAKA46XogMyTrxqedcF42UZ1tzYJTeLCo7V6a7Vg6rKpfTBVZbP9AjJm5TErbgvvUGPKD6T65j",
  "key13": "tW8KRed4EiV7NcU5bVbM5AodHu1cMJSVWi8bMBDwJhCdMpE5R3K3fuk1arsh16gBRhCqa6TwwR4n9sjAPkeNLhJ",
  "key14": "2ZfgEPnMYDUwoUmiAuDLJsy4pDPQXc6nz6EjsSsX17FHwFfuDvtqGzT5Ex5TvfQRKFeL5kCqHKZYnoHEu6Mxe4HW",
  "key15": "4GZAtGRNRdxs3JFDPXxt5sVKTHTJYC4tD27vcy1vE8V7CEAwkbEJC4SKg4MTmoVarbeAf8Wrm8WJNeBNmnozirQR",
  "key16": "32ULDxEsCCFngZ96WRTLocSpj75z3BF7fSc94QTPJb1ugbXUhxtNxL3ytUjX75oREMJK7TzKdrms6BZJKrRc5623",
  "key17": "2w9khyqAnKDkzGzeSM4ZTYpvJZ7QzEtST584B6wMns7Cbjvpxv8drLuL3wv8SEK5HBTmd1tvUMKifzHCuaYH1eWf",
  "key18": "2cS8vmvPZ8fKzMh24QWKzkby6fG1m9qsTA5nMu4upRncWRKieJ5m7Nsyq6Yi38XsMP7KtgrczvkVbucQrHPBsk7d",
  "key19": "2AVwo1woCwmiLHFq9ey2YAeEUG6NZnnR1ccXsHqFDLkgS76eiZLcXHNURjvwNNvfFETpbp6ip2U2ix2FAg7EB7va",
  "key20": "3t6n6VKavr1hK562xnL4fXavTJNLsYRmSVFxxafzz4q9hvs6Ne6trWNFvp3V4ec46SBWns8EuP81mSY57rSRd5zx",
  "key21": "5RqkPYLwMKbbJ19jHXPGKzWE4AcN2dAWbgTpMEQ7iZZWk8LhayqYpgMQCEEM8ocQZ5qTZ86LsFQZVoRprUV3LWQA",
  "key22": "2rZxHgbcQY1wMqL7N4Ya3o77VNvckoURDscE2ue1YT5jUjszyAoBqCYLnXAvBC2FkL6N5NciVMoaSmb1JYdzJ4jP",
  "key23": "3VLZXB29vDWa14UHX1pxv5SDTPo78EymhFumH34qi3cUqRwpQ7Tu7Tk9FD8pY6n1Vkm2K9ft9Hd3ExdgjLxEuDJk",
  "key24": "5r2jXn4HFYJDX7cmnhoEvdmM868hQnkCufMDpLFKFYkVAHLQU8vPDSCjA23TmGAKAaymA8VLzRzXwawvt7GQSrBY",
  "key25": "3qBXyys73RJdfq7nZFpPG1nbSi6z8Z5sJ1JGts7XF5VENGkhZ1322MqVggHMLhvymXZdWMhkAvPmAnLoaFMWdPVR",
  "key26": "351tecbP2UfhbErB24X4n2cGDEYMFLL9H7PRqxBxzVVfJxvKgwcCjDspEuu2HwHSqjfN6RnjdePCQeKtWPa7mcN5",
  "key27": "625k7pyDz5p9DT6bvs4ADF379Xw827qVbkZm9DDrjZgX6tEtQxRQ5tbaQnqyqumPtbSCbrq8oVNMwQ2hxyi5nYbr",
  "key28": "RYSL8Xh9pLj1u8BytfJgqJP8FTWuQjsQPwLVNobDmcg5BYto5kmCfC9hAjefyh8E98kn7ZBaJZR73QGZo6MMFE6",
  "key29": "8o37U9jFxRRR6MqBjwMCYbca1a1cqYak25L2AUeF7zUau23K8FrdFXGQafoFPn2s5EkPCTmXcFusTtSSRrYUynn",
  "key30": "5Gy6pQaNTqv6s6fxgrudjmtBkeb68Z8eHDafGqD22wqBrzitMN9LYknyB9LiChmCUkWCYYSeqv9WaKqoVC5M4fY8",
  "key31": "5sDkzCbenBkWNbe9v7hzjdN9qfhccK7hej7qKPcU1KhrYLYV64Nzijxz9eLMNZYMytz2g7SdjDEbNWxAfL7voJHe",
  "key32": "3qFTtehm6Cy575bV8qoWvRxEWCCczfoQ5UwESAFQLdRZnRZqAEbHrrumHXugZjjoD8TYtxFqaiXof7J3BSeusGQm",
  "key33": "4mHKaZ46a1fBQ2H8PBuncf3GCqPUmDYN2yLfoUuYBzFe6HT9SqDqzmTy6sRTKhYzmCg7LvKrotZ3M6cbXCheW3Z8"
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
