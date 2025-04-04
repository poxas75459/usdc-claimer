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
    "5cTE3NViVcYxnzwkkqDXZzVTcDWeFz2T3it79yWGX6cxqZ3gAC7wemZgVHtWvWgDpR3ggkmkRMh3etrCbCCo7qwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZP3LDyyQfSFQap9fSpQn61n1pEdfeRMNgSUGhHcSX3xQiF8uSHJPAyAbXFoRBkPtAm8qE4a84wcDXWZSQDNx7aT",
  "key1": "JNCvB6GnYPzwqrkCDe2W1Xswxt8XfW7cL7KEUpDQfGFGTrWqE1Kz2dsRsjsFtsay5nwx6KKdKjrAJL8mDpCRJXp",
  "key2": "4y9DrvCGit7Ek4KLX5rmMtsaXCUr7zZoqbTFRT8eXk3AbShVrDBhtTougYyF8HJQeKPeTpTLiq8GCjqzmGKGACcX",
  "key3": "3T8jNN9e4WaxR31xeCENRoJW2JkKDNLGWryMFH2dDCubTyQryc74RbfRAHEdSq1bbw7RTfT6kZBYaG8ZoX3pEY3K",
  "key4": "2Tagpmy2wNwtP11aH9BVzLHi5uz8GToFDWnZZw9FPd5JqQgAkkThjr5ti8s3rSMb8P1bqoRVQ9isYLiZM7qeF5PP",
  "key5": "32Y75BPwpTTddxvzW2SJPZZcNuxnvBD5kLkHJDPLwKUQgdTr1TujJhEtLRA4hgvaYFkfenZ61a8gC3UExDN8d8fG",
  "key6": "ziMqj4UF8PjEsueB6NM3jnjx5RJkHkUTN5Y1g7Fc7H6r74hKUCArDs13rSpJEN1pzPRTGg1g7C7q1PkiTq96RzJ",
  "key7": "6pF9WZmzFan1ZqesP8hkVxeUEzopnfW4PG7uW4HBZpqEhobc7uyiAXSmYcMFzjygXUQh8DaEFEYmFTovRvbiquP",
  "key8": "3X5NJ78fZLb3Qne4vK5gbsrT2kX1A4Eg3mjrUUno9FUMWF7hk6gSYXw3VgjtTUvenfFSrWvT2hJkKx8vbmMF5DW6",
  "key9": "3Gxdwst2PBp6Azo6fzYMuv5YREHRGtyM14kGFux2t4p1whSTdNkJ8vWBexE4izKWg3Ba3DMquwS4ZxgpJhT6aQot",
  "key10": "4Nu5prUKQLNQmsHUoVSnxEoUEYTZXRckRMY7N25WLXCMF23Y4VLUNWkq8P8NN8mQKZRQZC1AG37LL7DEZfv8nsVs",
  "key11": "2RBPuuKLCZpzqkAPZcHPfhbyGfJDk3G7djmjbiG8FiAAaaxh2FzBv4CKrtpnB66tM15gy5M96yGFeCt4a72QMre7",
  "key12": "Jcp2HVyURfxcg9K8C8JLfrifk9Jm6t6cUesKzEXBACKVuLEkocSJLjdCJznqzPTN7RPJ3BgMBvJVo3JKSTSBKLL",
  "key13": "3GxUDdSpTacPR62VXPB7BT3PXxGpweBRGFM8aYfcQLxM2j1w2LP5WgKDd9yfnKymBt2P5TC7MfiC2yKr4j2t37Fx",
  "key14": "4nH1czcAZoquC2Grd5wTKJZzHU4TcswKWmJ5e4gMmHi9YxiinKRBdPsMJmYYT4cmTfTLfqrDLmD1jcbqLtXPdL2e",
  "key15": "4TnuwjZXLEHWHXRKxdK5BvR7GCK2gLQoxTMfCqCGJXNMXj1SVm1pbdvrte5GJQyJHsJHfZw4aCSbVWCd8WFqFfJy",
  "key16": "5PUt2sykc6vBzJeXyDAYzeW4qeVdjas46fXGbH2n7yKYaBHULhybTUwe2yNNXP1NxBiqee9mQafTQ9eKu3sCpGts",
  "key17": "2uhDvafprWF9sceuitMKTBfunKrgne2pfDAgJ954zEo4tRtgavUy59Mb12Jbruj82BghL7hyjGZZuALohF9Z2djR",
  "key18": "VGNd4tuZqpLqXaKaUCCpDQ9rPPaeCUmphz3JHdixnJkdyoV8PpoKajLJzapYSbg2hukZaKH9XFDnQsmUbNJtZXU",
  "key19": "3rfV1JDwFpHNQ24argmcuL6huq5prxL2ZrT3uipj5Ate75WyPeXzqU7oebdthv8HaYWVo4ABucwiNWJyTtkH4iaa",
  "key20": "5B6RQoSpfErFuDhU12ef7BLA3GjRw128nxjNeTbFd5Z9hY54qV6mSf8iErDzsXDb1XgDfsV5KQAoitMGvJRgHVV1",
  "key21": "iTRgMxnd4AQGVN5SpAREpuzZv3dxGay2ZeKpFS5jQrsAcQRobzFdWmwTAVAY1F2zhQqenJHC6pAGSVmYtd9msyX",
  "key22": "3u2BMCFWE1azYvY3B1rmP88vvpkBBxiB5TrQQ3xfUWRYNf7Jp539hAADGLAzNCv8s2AehYLU5gxhsECAacFpFUXU",
  "key23": "2kXpCsipB7t6NUxKus5PZQEm7e4oAap5EG5PUgRcfnCdFSTyPCCkGyWgPDAkpG2Cck6V5aEBDDnk1aCKPfSjeUya",
  "key24": "5EJM3spLEMFyEyPFtgTDAF9dA7aBdWZoVzE6jJTUWiQ3qiV3WAmRK6tRuFQRnZZqH3sb3QG1NZdE4XeQLtXdCqUp",
  "key25": "4skQWcy1Vb6eSwDRFUPh9o8Jtqx6RG9BEfqBcn3LfqCLFjERT6KBvpkHJsUpy6Yryxz9nBxVJfvn3qovERRNAUMR",
  "key26": "3ABtxs5ywtrTatRuEkhnm7L82wwoLbdamdUgZu5DxndbRPpNsQrxkVWqcXUzp9YawPTWf5ysAbMBSpZkasjXGF89",
  "key27": "53eKrFvz7cCRQzeswqwBrK8PJPsENvqs2cukEE1onBixKBCRdi2zbF9KNSLRVnvSjbHpnWyksaRp2a1SZLXUvKp6",
  "key28": "4RSaT116w9GZ2nHaaqet6n1nmNxCUFBPC1EJYY3fvd9WEjfDByTBgs6wss7vzGYUSH7HwMaQmqcMgg6bXB953ByV",
  "key29": "4PPsvqfBAmTjmHCZb6qDVLaaFetAp2xJcYerB89gXZNuiZyFEKq2xsj2mKiA8ymrwrkQ1N993U6Z3kBo66nNvCoX",
  "key30": "3MgHsJ1xyxq3LRC1DZd1SYvB4ttPAvkEgUzrW1EquuXUhzWzQgDE4CEyrNVo5ae4MLpa9b3rGbtZKugXNHU97gDF",
  "key31": "2xq2yJLZXYorG8xU1eCpxgdu1SyzrL7qLj1iMJz2wHbXNuhxoGWXYV4anquwEU1J5PRfyEM4b8qWCE8RbiPUabNA",
  "key32": "5oN9FttknwKMcjjLFzmUJF5KUJ5LQXEg5zDddj7RGEFuuepw5ZoZZ3iBrZoquj3F8Tsn8r9UwzGtoh8BvmvmdJNc",
  "key33": "2tEi86dq5TtuZU3w7GSNkrScVPAozATkVmHiAkna8WidnDbVScXkbjuxxh5CWz4dXyFFTxprNEDdKxWgdoCCX9YV",
  "key34": "2HeP5t7cUZv3FSCKQ1vA43UawPYWBhtQDT58DwqUwGDA16rBtBw5zjJAehkATucmfepgVajhXvabgs73bTsA47mr",
  "key35": "5y6x9WURZMwX5kejdRuH74kHE8FmfB5ZoLUp35YVnreKyQD7jbut5UUYAWXQd1YZJgyDH8z2YQYd48dvqikpvKRc",
  "key36": "56pU5JJcf6FRHznZxvXsV7Y5BngWvhzBwDoNGrqVcnu6uVVzmoaBGGLpdfr6hFr2ozNtNssoPqiXzedLZrPwV5kX",
  "key37": "8y2wjmNqA5EctQULg8U4srvWoEEBGz9nGDW1UuiDuxydnAY76LZVA983Av45xCDH7qgaQ1KVkRhqLheS9ff28m6",
  "key38": "4c9WV7eJhMGtXdi41rfzU8fXF87HfdTdssrqfeDHncMY3ubvJ4mVVWh3ntjRD7sBn3Y2upTFXDH2Nmx6ZuUXZeZ",
  "key39": "2CNftkSos8CzV99kvYkjPvJ87YcmDSXdz4UkaJcQQ6HEVKGFkf1cgUM5CpAqgaRuWQFTHUsEZxBYgJREtSEHB4Gq",
  "key40": "zb3TjCPYhrU7KUUpQf2oRgQUCaXM4pidH8bM7UQXr6zDQMy47YVBU4xmfYQ3Dge1cXoKkXW4WPJcwzw9xNx71aq"
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
