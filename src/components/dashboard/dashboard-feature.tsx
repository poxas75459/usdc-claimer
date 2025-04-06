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
    "2hYKTZPQTLiE3mDSbqjNvQzvH4BdtcBctDGqtickfRAHnu4huKiLS68b3qzo7q1d489aNeyT67F4XKTQ2mvwf7ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nw71zPEw6fEpCqrXsUou1HbDPnPPNjwrC9DNdGCVfca6N1aWJ5BAkxK1gVNFGpKFwEuvBznNVzAcpTZQ73JEEw5",
  "key1": "Dwoh2CCxRc33AMDKdugEinxY4WvX1QvZzEupeajMW8PTxZnMELudizL9GuQjEiUfuJqZ7yEAYcEZmAjzHnMeUCv",
  "key2": "2rkSJ7QN41UA3MCyXubVkvWV9qP95QxVHuBcevQZwGzoHtXQufoqHKeHbUjHkou2QFRqaMLLedDnt3BiJeSc3sxz",
  "key3": "2po16s1ob8y3oHCVFBFQqJLKrK3qobAuYLZaBpg5FfMPEKsXeQY6RNeQPxsTb5YhJb8VPUeBSQ2SGQgu5HaeYzbJ",
  "key4": "23dzsd64bSX1sdPKsByS3dvA3vqnbk9js2ubww226s5qUJnwAGLwhNwdwADQkbxVshT1Xx74QNUky96Vor3AeMuE",
  "key5": "Vc1sAREXvG6689RCUU7VNnpattWR3Q7ncJ2M4wGwX7sjLHg2xgzAaUJZYDjWTRR7afysf4tEQEU9cfCxFvkCKy1",
  "key6": "KZpKFqKJo3mDkJYsE2yoy8rzdX2NXTbacYpadzP6eHDQhq6CutFGtEbc6YJGWjj7ZfxVSfXRYrMGjhnELp46BHZ",
  "key7": "2MYu1skRZQFqrpxiU8VJxyQdL4uzhMmi2qLk1KwVNVwRUrnvQcmLAjiFkyyko5skZUvh1mEGrgjat71CgbYZz3mi",
  "key8": "4Vk5SDFc1Ec3AYbriSJ4i6C7nLvCgzVypfJHyApG1RQHZz7TKWGVwdSCBeyU55SPgLo8My9GNEbjz54Tw7X2Gf7f",
  "key9": "4MxdHkF4LQoSCgnukNViAHYjSnb4yXuE5xULUALWyqcsB5S9YdGXuD2i76AFqeZhiQyaUZaTJb8BjeXRSqUwBDww",
  "key10": "2ZBR6yhjHMjJMBS53jxcfZZN5tdHgWixbzVYeuReLZExkjeAocMjDfMd93QtRt2UZVWsGYUFcVvyGmLxzSw7NsUe",
  "key11": "58ZUxNGcMWWWmYp6UCSNa1nipwDk2iLeGc1PgcxhMKXF43H4VppiRVncWMfxCUYyMvZASKZUF1zv2ex1dgGmJLEx",
  "key12": "zkVH3i9tfQEe1hamNMq5QXAM9vrUR9ABrTfGyxJPYDZopjfD9Chv8u62xyAZ6FzXVi4k5PVYiwU6owe3ZrUN3a6",
  "key13": "3zkM9KitL9mZnXAFsHoqT2bK7Yyn1G3u4huYkWRsXj2tNEjuon9zBCqfRMh8FaJbhi8jiMzeLn4bSzVUJZNYRHfX",
  "key14": "2eBzGMD5q1sVFcwitBJVtNDVLLKayjXqxJbwACCuXvazFu6jhdc3LEjviug426wt7fw7ssUGC1i8oXnJ2xqFwxVD",
  "key15": "4oMZxAqzcCSQgqVQRVmFjcyT6my1YwybQzzeTZVG8Nw7WYFQf8v45vjH9u4mGp5Q7C2mgiDWb9z299CcRW7ttaTX",
  "key16": "v6VWcMfCrg6stU9YKPvjskR7P1kZj8cwZiNwjJfCk3G3MZTPh7cLg3cWhMMnUMXgyTmfJgp5GRYp6DmMfKFbmRx",
  "key17": "5Sy5ZEQBNtVaB3Dq3G5erQjXrxp8gqQ3UGeqHZyG4JLUJN4USm9Lt9Q8FDoDzVYF5ZUxBgb2LtqQTah2b4Zum69V",
  "key18": "5Lop6GbaMS6EtvDF5x6NKJfaDbQYQ85R7zxuLJoQEkQYJGcoNsKcMpAQuyPtpvPeL2FatVZTHFpf7TEAvo4gES2u",
  "key19": "ATHNB1R6ZqmN6kUtjrL4UQetsA8ucC7H1rcWEq7azfBsmVgeotAEtZkJMfa4JzAyW4RaTFkJ7XErR4wQM7RaKvt",
  "key20": "5W3uQCzLZScEHCZC5fRsUHDk89ijbZKJB3L4ugsRYRM6Atj56yG51E5iqDNZTQSHixWe2aEcrVSrnq2aQrKLw8h6",
  "key21": "23XSTvpKBXZfJACo4i4tZqS4JJevgvfh9hiVpnNYUkypq4Tpd3ar9YqkSLT8z7kEBTgagVJ9BCMtJpLqAYN35Q8R",
  "key22": "4YZqnqJscshNxjp28ycYRn6uWQ693FG4w2ref4YvaLZfHAGP4eVdiJ9KCBTxqTLnzv3Xzv87GbVKzmWYxnMDCJGq",
  "key23": "V7PiR3fUmWAqbjqYZgUREF1qPEGyRmXrvKy9oZMSkKfsNhUacNhp3cTJ6tk5oxFS5JgtGvxhNp94YbAKUA4Mdfj",
  "key24": "iDQCY3nXuSA3rLoBFm5Ck6vXf7SmEWHYBm1JQPvHh7yiDkdeYcERZvf9i599VEbKxNkK24b5kD4srh9DURxPTQZ"
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
