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
    "2PdLX15Pu6TXxstJ6QitdRdroidRfpa1FfziY7CPe3iB7gv69fstgwe5koHETfGEb37rf1f4jm4naAMWP5BPZrPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29C36mCZFpppy1ErHQd4jYFtyUGgFw5m6QZUPp14DVua95sfQJC48Az8YjZ6Uad86WYdZxjHMeaNvzauu4PA2qDe",
  "key1": "5kFGXxdUMGA2eyVCqrbZ7RBJgoxn78q61pVQAFRdmp1yoz5PVhCKNK2WR2iDnLeHGA2uy8t2eiSdYZYVzn7KssSn",
  "key2": "3E7oNUsvHhC2ikbyJFpFmSBeyv3PLK9DmLgG6iraCeJBS976hb8dZdNFtf61PKoqNpAv1reyRVu5e1gTQFqzp1zQ",
  "key3": "3xkLp5E4D2se17ucjrakttSQHAyP6AP7qaxvoyeVUyoScoQwGa5dLWho8S3HBww9dQfd7wsK7dWxXmLiaTcdnVuG",
  "key4": "2C2mC1YQsrJaMyBnpsfaCwZQZBvoFTjwMXgm6xjPbkAXNHpmvQU2wTcjPKFZno47gJqjcQeA4ZgX4okLxc9x4ZC2",
  "key5": "633DEikR2YWBYMSDtcdJ63pK6qV8iA38aU5SJezXgtqFaPR7XsVU3SYq6pVyZW67J349KzVnf6GrERJ3piEastYB",
  "key6": "48XbzseLCmVCedSf939XG4FvbCUzxuZi7Xw6d1K1DrcmBweXSEBzMZxt2RBE2r31DqKfjWHGcxQNQLs8DcQ6E4mM",
  "key7": "4WAkNpzVCHyqeT6uEVeUEnrMj1RV8rfW8n2A2ziw3CU6bUYSEir75aDszFNdozRi27ex2xokmqJiPVipQ57ci2h1",
  "key8": "49coiDRaYf6sFuUh5k14GNJnYLFzFJeipfi8jZtYXL9mVis3ztwCFUjmocufbX6eq9SNTMqhqFJr5ark6XUXnxtu",
  "key9": "3FNsg6S3CpwnXYATzTRc9tT9VGsA9sACV3cYmahBQ4ZBHeMC5ZGmfzfe4RgJLu2iZdQVykbzqgcMajHuB5g6X7j",
  "key10": "hxhXivF6MxxGP6okHwAaq6NWzUgVzCEgyWHh6AWN71NPhF3FuGadDrw74bJWB25ERb38CaHCMjry3hgZRHjii5z",
  "key11": "4SZtUAF2Vrt6z5crjT4ATLiqebXgdUVzSGTFSB9kubWqcZP8DKNYGmZJzqJuASyfgojYutuvGqB3A1arL6dVvYBN",
  "key12": "4YkiHXMv3wQBQfqVQXBJ86SXuTefXYwyBApG3rvx2i6sRL54kgd1nzL9M5eA8F4K663HXJSFo6PfFPUqasWpvA5D",
  "key13": "49NkgPSLr764p8puhfurSqpsJBHubVhp1bhDGvyBFgacy9qNSMnE9o7KD7QgkaP9pa76o25vswA1jhbWJNodrwBs",
  "key14": "67gaYq6JUeMk9jz9baMzDuTEmaa4n431ShrZV5D8ao6QUagU1HAjqtdMDQoc2vJYwXPa7WKXCFspuQxdet5hRqUG",
  "key15": "49m62QdEDQrPJWzPmWLjSG9Y8xPcJT8yBtMU7sUtPharQZzZLuSusYYk4yX7LBJ8mXL6rHjmdeymUttsZq32twX1",
  "key16": "2HGPE8yvAqwXfw2g3yG9tHyFdeBZSPthuoGkwuPcQhQGJxc98yzP8rejqcMgjj2EhnipWo44JVKjzvmMBEUerWfw",
  "key17": "5ziNaDPY1XeFk3w1ZTsjRwDx8Lisv5m6TNngCPum3hEMzZf5aFMpLRzWXfRLSxf4bD53RCaY6vBo8krEf25rvnHR",
  "key18": "2JHrsiyMDkLya6vMFZXMiDSZYwXMwPszrPQqjXMAnZFhw6NtHit2BKHvZoLDSyfhmV3fvp7KBikP8kwoDVFokdLZ",
  "key19": "5o7B3iCUecaFnWHCqgNe2vja5P4NqLFGQnKHRFvjk5QQCh5JduE76bTrLhVCCRJhWtfFJfvpMkUgahyXDztyLJfK",
  "key20": "WgcnceLzXmR9TqNnwhUu6RLaRbqiv8UFY9ogeyJTm1egK7UqV9sgpM8XySJjpqdRC6ccxAT3Xod8hUhWDgjtEA2",
  "key21": "3DF4xgk2DK2fpzGivjE3dwdkP7rWn9gvuWsq9uosXkT7uWbkPBzniFwMzqoqPQP2gDY8ZEBvotY4uTpyyNecPhxP",
  "key22": "2NhUWREkqfNRrnwqn7R89SGb2JSdz2qQPZQURVfV9YP7xrgUgsyzeoA33QfBWu4dU5ACsxPryS47wVYauS4Sw8a9",
  "key23": "WuEae5p5g2H4MgyYuTuG8nDPd6XX3AgWXQL7f69Tmwvq2AzWavLJ1cUcMYxq75E43rTEg7pQb4L2geMRufVB1jm",
  "key24": "2RqsdsyHyCGfdQrf74S5CWXUwaRQamNFUGJ9vCADXoH1Q7UbrgUzH2Uq4Z18wtne7gaLYtiSvMteHmRnkLJtr4PA",
  "key25": "4mvBXxQbiygzrFSXYhSrEZecBYmj8FM8dsWnBm1dwMj7yzdimydEV15fSvyzGUg1xArvqKQd44WpkHFNgD9VS6LL",
  "key26": "5KGeWpdSjkUZvjAqsbrtSH1wkkCdx7CDuN3dda2n4qJty6qtTBSEF2xh3dxwr6bsfHRnqe9kwk2AdZnD78v9esVs",
  "key27": "5axBwyaunjofTyv5VmKhHZn7nWtF3WFLpnwxzTc7xJCw1pMpyzSnwh4pzVz7XkjeJUpQKCZz9KM3reFHWY3McDZK",
  "key28": "WVBRfFMuct77EN6z9Pvc9dy8MLt1hEyVgLDnBSAyc53ncuy87p4XintGGGWEsxHXZhcDrbVHmuyqvvpPKzeZkh2",
  "key29": "T7vC5TWoz73GHU3UB4Uh3WDUwusQjLnsB3r1PWPxDhH85rdwwkjLzfx7t88ryKUeLziiLRg7GhsFjvrnkxAcMqT",
  "key30": "drzrEKfy1cUs444aMF7YN3X9wQC7qP4pFTgGSgareujQWDgPgbQEEtuocfwVcN6MHkwwj5CyM2gj2UJY6b7YeYE",
  "key31": "43L5jL1XY3Yuh8snxoZq2AHKSnfYfRGYpfuCGMLkcMzy8Wvt9Zeg1nrwyzcukYkPH3ioXmDrtqiScsTWPkgF1mRm",
  "key32": "5Htr1ZATJPnso5Yu4sC2D43V9YvoNVnk28rHoMkcq2SMVgtDJZBmZDZDD8Dp6axme8zxSQmUdG9fSktfMsa13ZD4",
  "key33": "48w4y2xxZDdehGBEhB3m4n8pvwF4wgeKhHf24wDBkq8YnhWgeiekMozGXSZD1h8KW9GSpT14Y4XottprUYypm9UT",
  "key34": "3QdccomqpXuXsoZ5ahw1tjnjePF7wn3qfUpGE5xPvCFmCPQF3qfdc65cXcqSCTPJaZBDiZ6qB1QMgJvzHheQbmpJ",
  "key35": "5HShGZ6SzCfZHE8Z3Rqx7DYX4Jedei9yS9hSE3aoQgdxg1KsnPEBLkExVPBcKCLwshTtch6p7HAwtGq8XzaUQMQv",
  "key36": "5d8ito5ci2Sm54cpr18dyjyqHvQdCQ8QQKS9s88hND1xfmnWx7Q7Xk6jW32PxVWvWCzADyP82rHRV3EYEkdgscst",
  "key37": "H2fxqyaXRZp8Nr8iKAEE5TdkHKkQ6V6BvTXMzqnUVwttvaJ23kZ34q52h5taik5w9qmX1FZZzMAXxdE97z7hXKF",
  "key38": "tDYyZkPjCuK6jshzzBB7cG8AWxdvvaj7yGZTwqxMKf9T2XaDiiKwirL5EfqLBuYxDJSnTRBiyTTQi84LkaM1ohJ",
  "key39": "4VD6TpdqJoEnLRSGF2iqT2mrsxr4mqBcp5b8MjaWhZefbinmCHjVduFJt8hpUkJDQuS9VsU1A2reJu3eqyRNgMre",
  "key40": "3xUgN6ieH5w1YqB9gJCQHgiv1poPwGYQfZBZRT1JeHKdishAqkQjPf5cK5cwNq7atT36JFU3qhX6A2BR8korhaVR",
  "key41": "4w7V5a7TRqVnuGMC1paKrDVpGUuCBfizgFtNkcBhz8aBsY2tdVJsJ5jybBYUXLnFh6FZY9QoFmm1VViAMY2dwvzT"
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
