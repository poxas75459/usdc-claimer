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
    "35qMWLQFme8gMfAq6ZYQzhRF734jwNDPaHKm5TaAzrzmT5GLKMtDkiw3VQq1RXbNr88HtAZyeqRV2wGiTCq5r72t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47bkwcNbwhjoUdFSDGnfbwdTqp68CJrhCK2dig1MhkRWQv5J9TeZjLU7bHZfjx1VxSaSzFPMzpTQJkBvi3qSsUc8",
  "key1": "27kQs5QRTwCioS4ikfsk81aBd166xB1FC6wL1ZM8vH8QBrL6m4sER1avFmBm1qF9KBeR5Ja5Q7bptjwXSi9YY3fx",
  "key2": "39fhC4fywF9KQvzaL4LnTYz7GCBxbZsrzbEM6wgqBAxNB4Bvwub8LWMkwzAQsQA1hyDq7h1Y47Ax9y5e1qqVsX87",
  "key3": "3EBrexpow4WBfzyfBcfVrpJJ7XiDKk1De8dXSL9uAJXuxHkHiUNqQcU5b2UWBJX1kfSxh3KtVAfrjj2wo3SowD6i",
  "key4": "5NstUsKKgfWiUcK3C3YvvorM9VmFzFDeJ4fPjqNT8CEdvpF52isVyQGEcXqmUxcJNrmnAka6de5hKvjLhQetRzaz",
  "key5": "2Hsc5299WkGaKMVej1JhQar3cU3XdWtG6UFzBXEdXV5BW9bkkuTmQdncACbUAMqN2GFRWKnGCLiFABomY1f8VjUF",
  "key6": "5sZXznAWazqsWYbcmLR6yvw6yb34r1b1Pw2i9aGox8J4vkCD74kXLktxhY58LF55Ujs3EEXK3E1eavff9ujQXqCV",
  "key7": "43vaHMTZkbkojhk5aXvs67uMwWLbfmLN6ujUwCfFPz4tiY6oxn7x2FNXug6r8o1UZ1oAPqudvFQxSHk7gQJDv1xV",
  "key8": "527ykQU7w4SbaFhRaWGZ3b6x3NQR8R5jHFgR8K2B6ZhbV1P42KSJJHPSdNEKRFx7sUbFEWzQYPxS4HJMAkADqPoC",
  "key9": "2n4o1VpmbxqHYXBUVSsNj5swNt35Ufn2nh6Hhp7rxsnsJtXRUgoorQRXPqfy4UHZGtme5i1cYWZEWCpi8Gnnrnno",
  "key10": "1RBrMUvTHvKuhhFJaEVAw1thsrHJvd9jwUgti2zqwjCwDFJFJLpz6qteEGSnLCSxweXDZVoicWNuYmbTSLpADwR",
  "key11": "5NYQ4ne61S2rF4i7xyhspaQg79mwcXmz7CzKkzKobxezmXouWB4BoqxxZnt1sZkS3mNKUNrQH6R6fo3ghzeCCHdS",
  "key12": "5dea5S4ngbfcuna9Uzk1Htnvhvy7anomiio2gbGiZyYPndu7Za8V4oSgcmmccrUw9XXU6dJVpgxBL2WDJwkHBQCy",
  "key13": "3jqgMj93NfjGcjtwc3KCdJqYL7Ex89ZR3oswZhWTw2KG5py7hk8hnfyH5BzTrEwXyEemWhbUmW5EoFS3u1bDcVwp",
  "key14": "2Cs6jzQDpcK4vPpVvHkSSUf8fzd6YNT3ju8bfrZeUbxZX3nzmPUEqKQsQGPdR89M7psBLFMV4VnqQLBd4th6jt8m",
  "key15": "4pTD8xbTdVDeEtEy6513k8eRdGr4WM4Na5k9s2YMPg21TaB5WQjTyKegMaxjEYou6AWArKbMgYDvjsZ3aiCsz6qG",
  "key16": "5AKCoxHYuv4BD5p61qFZukcr2886LaBUxQg39hfjfwUJqFQz7mUiU3gY7WV5ofVSYeLYpSqGwAEDcvHGKTgWsSkd",
  "key17": "4eh6wDPmwzr14nACsEdxpxJfFgwhi3wft8rWDRzjSGW8GeQ9hoJgAYLXodKaJ1VkSHe7rrc5GD9qs6BKUzyEcmYB",
  "key18": "2XwCsj6s5GVZ71wdoooede3DdEeahpPxEJXvJ3XXyuNbJdKcCNud43fenab6hmrwVhGVuNDfVRpxnbc5RL92ZFEx",
  "key19": "33qbxyZJ5BYBZCDu4o47yio4bjKmahT7cepKiXFcqNXerUQV8K9xnKaBGVgmj2oGQCZs1cAD3UzK3rCqgnqNFcUZ",
  "key20": "5Xs8HtAZMTMQdc7eMgVUNKmwEdD38jCcEEBp2Gbgkjmo49fUNZTyjUkHMmAGBktcGPQFQxb5sGMf9UdSeLF2r646",
  "key21": "qt3LBx232Q77vhPsc4xTjYvspMMzcbUEbNMwHqTjdHqJCdQSdtLhBapSAFGat2QFYWWpzsJ3F3xBkgGMkmmJpzF",
  "key22": "4HYsYT6GztxucHhan3DNkrJKQnNJf3FXGQ7rREwda1o9Kq1owhuBSEBdxn8t5Rjrq3DcNGinhTZZUZxeBQkbjVaH",
  "key23": "4irudkqt1wgc4mAReuNkpGs8xU16W4qiH6X1wr9wbMxMd4c7RNmosivomVRjx5WXfE2wN4v9TWsa8LbBAVFyAeTi",
  "key24": "3F93fPgiVqxzwnJ7fdREVuL6wZ1VoZERZ3sMgZgrHyDj9HWTnBpzRj5dZ2pctacfvuR4LbA2yeZBttjqYDrns3qT",
  "key25": "3EJFs9vWaUpxAFrEmXw32ixsXhBRTX1qHgThpn1fqbeULbuhkCsMrbfEvH72CC1g3qP4FdVjjjgoxBbidY9tCBoc",
  "key26": "2HSNWiVpYptGevrCSKh55y8YDciRQ2BhZRCJq8212L9rrZUfRxXpQTKzuk9yd2qZi6j6roB6DeWP2oyycP5vvf2h",
  "key27": "31MSykanzaC27te5kzSv7xZ1EVkNwJgUjE19A6xACUtE96HJJTh7ss2Gwtj46H9kECXqUUz2DxjD6tTEpANENAMd",
  "key28": "3N1kKuxhJmsENoJBLuzaUbhtYArxLqGomdFmeLSqjqg4RSzbgbHYKXysNwDErY4WApYjGKRvSyFPSHFt14ZCSyvS",
  "key29": "51uED4R3K4hNRZwin6gLu8NnhbscCpVJeJzDYihuQDTTPZi77m7BZq9UzTT23yQJmgbtYUg5t8othyNWTPm8fVTs",
  "key30": "3KViciqUFM3DyPxzpPY7ddn9XxstX6Wjpg4xSLmkZfcxndHSuEsuR9UEVTVZ22wTPuRmVz4FkZfSLQwMh9oqhBbs",
  "key31": "2CdLP9kpN173x89CoNpLmQGfHdSRCjPeGNqg9iv1uDLjVbBpGE4B5Yop5mxDyonjVDUvUr6yUiXEDCnvrDTvR1zJ",
  "key32": "8yBuzy9sUiYMqFQUyXNwtrvfaqEWELnKTagvqPEEueRXn1vxQwjwq8sGx1myXWWvH62frdA4FT7p6qsLRbHfMNR",
  "key33": "3TzduWKBr91KswLKvaSpvar7uXCBjtNnt91Uvd1kTi9dCZbkjoUbyWgAZkrRuWXL3CH2KaLfGxpptW6t9qaYi89B",
  "key34": "2BAVXxNBS4TD1jrGQQCw5Nkr4PWvcaTtZpXpiHBvCooDc7GsQj9YxadcBuAMNLt5nwk6Jmea9qXaQSYE74Rq3Yvp",
  "key35": "5AxM9v14TWhbiDLz7KijanrjYNUfwjqKuWAY64GkdJ4nvQQa4sUry7T6KzmNfbWjaVMBB1mgiYrYJemHrNsmParA",
  "key36": "3u43f1FqKQfhaFC1QNfeTQ4zPGwQTB9uKZHym2Ssm5Qq6RAJboh3GnXAWoNTutZ4bRRvAFmCnM5T9399vbUG6P8r",
  "key37": "26tE5gtYumK41Pa6z97jJB66ZuQ6Qcqb6FseaQXeCNA7iGhVJr7TfJ59C9NJKB6zxAhGcbCMmeRGn2Ji1PxfXtzK",
  "key38": "54DXxXBPcei8EQE58SA1SRHcetozsmwR5LeCEsi6RVd2R1rjNsnCHHNRvjrCZXHVs6VNvX6Vn4TweNgRK4wRzaKb",
  "key39": "3NaFFVNe2iumPux1VWazc25aknTHFfzxixPXvBLRnQMa4wB5SyE4mzUrpWUbTGWF79nTHGwXnKPpuHXseirDiUaX",
  "key40": "2Brs5FaDQhyMwDMr774yk8qMd19vcJs1xydb9z5kqTrV4aa37fCD6hP67wKSi4Tb9niFKryYDKcq6uyFf3kbUWm2",
  "key41": "2F6g4aiszHLZ1EzccUrBmdL8t57UfN4gT9sv9tvoKhuFBMJX2m5yjpQD9NpTMVHjLGtDxmYYHaWBjEbQBricgHof",
  "key42": "4mwBGGY55BhazAZ1uptnrFLZK6VF2Y8yvbqQCaq5iByxWAYo5qiSkJyv2rzoUcuzaPXcSzVQY9VQfDopEeP8YQsq",
  "key43": "3Zb4NLKzqfGjLsvf71JdQaqUs4JKDyHg5FxXndqPEVhX2UkqBdiHqvdHAkWcpg9pge1QPjtB2iLaBowh4LCzi141",
  "key44": "MXw757LQZ3QN6z5hGnmPY1uXB4xep3JjB1iqQiksbjPiWg3aKKCpRhNChxGNcfF1GMbHG66r1wRU9wFRAYmzLPt"
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
