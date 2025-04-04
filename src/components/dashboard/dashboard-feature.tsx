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
    "2ApHfk5zCpeGUjaZbX3j7UAXBLt1NoDUt88KfqmnE6FHDTMQy72eUsU624fe1Zo32KDhBfvNFpzXpbKWaq8gidy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpRYSDCxfCXpqJArbxoM1n7nzcQGsjmQyC7uxuFykfazem9tFB2mudyiTxSsytwd6DmfqXUoxqELSq2Dop2mivS",
  "key1": "rrKcGZefy86bDgVWDQ4PMbF3h9Vty1pxwB54XcArHDj6ihLgQm4NJh6U6Co7JYhUsRr7paCXXAFFCTH5fBEdqbv",
  "key2": "3MT2HaKjYx2SYHaRQq49uEVkYPC5qpXFySW3R9SmctbgjV16sfyxqFuEFAZTPRRiD6Sn6VKYqjB4io4WkGGLpDPR",
  "key3": "5QRLTYwoeGu2ZBJ4dT6GQCbjYimXsvWhB4QTu9DRVuTYAZYoqSzD5wpu9QWPc9gZYg1WYimD246vUU4Xs7aooxYB",
  "key4": "31QiR6uVdyM6k5S52TsxkcJGcfAWwoyuP1nk764hTUj6uG1ZM7aT9Ys9nwAizrcDUAZWbXV7LcatD57ch5EiFcH2",
  "key5": "G3vekAHo3bT5cdHcBsQdnuJwj3h4ui9xk2wLqFJQHjdgbSWCEHRb2PqJKnhtTxVbmSXJr5oV1Mv6NNP2g2VY3Ms",
  "key6": "4KAy5xPiJ2NpmCnex14mXykVc329o9cqoXzK2RRbcLY7zMoudU47HPNWBytfxCffSkT9VSLK7FuxC1jk3UBKmEBV",
  "key7": "2F9P9bxBoYB5VUjzQt6h7eDFLyWACb4S8FJ1oDnM7od3bXkFtxSstd6C8yiDH8DhxLvF4wJEuZnBkTcqc8txDQSs",
  "key8": "ee1XkRki2SyU86EkXgEsi1UJvhQJKBoRZV6nTTP6hfrA9UdvT6VXNQS9PhHmtbTKvgkVXRmwZt3QmT8icEMkBy5",
  "key9": "49MiD4UpfM1K9Z5q6ytXUt5oRfmrZf5BmgWYhbXGvu8tjxSWYs3tqiqhiWn4MSRoLHdMDBFGeuqTsBXiPy2q6Xyj",
  "key10": "5Lxo87KJCtF7BgyzmsofZw8dLS8WQ946dNGnggoaZRDnbWCtDZm8oyDvNFcthSYFFC9MUqWyJTQfKw68xbcpyATo",
  "key11": "66Cvr5NpyEKGTkyReoHEXAuDWG2a9E9SVJ1DeXRwPAgwiEywQdbPxB64U2r8Vt7fn9SZWWnCxNMPLVGZDkGduM5g",
  "key12": "2epnswXxV82mLs5nDVv3CxdRN5fjRK6tUbA9i93MxU8qHAS1KENzfeN6LqzupoXDzpMMMWuKDBXcHf1rqfp1h2Q8",
  "key13": "25uHkJoZewKoXZ2BNKq5RBX5R91y6r2yNGkwW17sHc2gsRegSAKgpDQm32T5e4TS3Jmk6krH7KCncf7VgeGkFMdp",
  "key14": "29UHsm9bwcVtRopPuwYoHCKaUmH93wAQExn3xR7rER7K6uHA6XX9dYYGA4pwEQwReJDbiFDV9Czyh8kDTxGxYVXj",
  "key15": "3rRxYbmzh39TJacSFc9JuxB2PpRLwZszGp7ghgw4LTmw99apJnAoYkF5qHVG4pePTPjLAWKL2bJFc8for6v4A5dr",
  "key16": "3rZKDpLFWTMRTUJFGcJ7ebqwGzfouR7cmNAJTnt5tfBbs8Q7z63ggirb7wi4unh8DPknw5dLjYGmQtsyUQaV767g",
  "key17": "2ZNSwRhMrfCjWoMwiyt9pr8JTSCDY5FHsPTnot9gSzSh5RBNH8CjKSP2jP4HR9HprLXFug3W5c71EdSLxW5ofYhD",
  "key18": "57jtoAGehatjSym49qaPZ6a1dmS6UTQWdYVveBGxLc3cb2oqmJpgZk9mg68msSZMnxEfDC292VVYsgC1ah4BpbJV",
  "key19": "2EVqbZLcUPzC4C88eXocD41x42JXm4CUbTjoqufaYh13u1nMLvMcxoZB3evR3gwLQfS5SsKYtcQhLBbU57RYf7X2",
  "key20": "wdC7R52eXq34tzM2r52XeHhgdJiNQxzeL6RtCHBkNrFrCHsBYsQk1jFkbagjGQajuJzg7bSiz27Hjksg7nwabgr",
  "key21": "2bFrcrrHevbHtiyi94mGhMTra7APA6ym77XuKz1YP1wQeD6dHzHrSdwM4j1oAdWXiNUHU48BmoNz55vXMqTMSMFY",
  "key22": "5AR2Ki1Z2fFfEg3re1BKL9iw45pAMV4uDn4JpiEW4cT8yh4nhU8UWpQ4TWnKGhqgfWdx1ofH6ckdag2upNPV5A1z",
  "key23": "4HNwUkfiKVj3xYdsKhJ8jNXC3rf55jsaYGVNRcy8YWBNjbGRDLdewsdyE5yu6j5jRLMCE2Gtw4EzupFEDK92Hzc9",
  "key24": "3s9PdWGGUatbyBQr2coCDAr2YdizXXSxERf3MhfSM9w9k2Wm2DjGDx14urWdu4FcesYQEpSY6aeUn7nhTbFq7NeY",
  "key25": "3ix8jwDWGGHnsm1vMNVo3zrqKzPA46sHn5xQcxNWwE3wAJaLDANJYNeTVTAqsERCf5vtEuiX3xENiSmMP3m3HhzT",
  "key26": "jj2deBmfj5M8ZV8UaLqDDYQNXpJW6z2Mjb8b9bwS5a517CtAq72RSCDdbPUPhxhvATQmVCtHPfKzWeRYP39aEHj",
  "key27": "4PcCome5ZuFfvXnmXegMyc3idExErzGffUGfcRdoV5RmgmuqWgbP9m5w6g3oPvbDd4DuPCPQhioXxMsrup2so7nj",
  "key28": "4jALKbHoxxt5dfthAn6QN7pXEmauZ9XTxoYXoRzK8o342rEGcN5rpbc18ZcWK9C3Ckvu7xGyCphmpdf1QGac5CPK",
  "key29": "3So7ta1514Nfzy5uutxQj2JMCbNeUDxAxNZMreKancgDicz3AXeLNJj5tXE7CFfwPXpicGgRZwhHbpBkYbBZxLg5",
  "key30": "25xtFRcBKh3yBqxeMGYidWiVJTXvzpW3or2XXAgsw2adS38d5oxPmPHxnG3LNMqTtFpb1JhFLpKx7JQ5VptN9tT2",
  "key31": "2jR63pdy4EtF3ZBkkg8EPyuUDgG76Y17m4n7bjER1jdhTY4dgdhx9h4Fg1zNyMrKrk84hympBcHmcmJCsPyj1Tz3",
  "key32": "FxinZiXs3thCp4TyMPaR7BoUpCc5jFhiPARTK8yepfxAGSTBZitKoeeW5iWSobfuT72FpWteEmixWMss6keHa2V",
  "key33": "45GevUNG8ecqxs65xuTAZLTtK3rat3i9H9quHLeMKdmHWLEe4k1LveF23be1MCyeXJWvLkZebSqpLQ6nDmA2sGqD",
  "key34": "48asP1tmjPcaesUGziycBDdUncukPtSRmywZ1Kv8KyauGi8uJwbSNUxB5jR5Ftty5kDoAL1udeRBctLw9Q7h3dG7",
  "key35": "4hYjfHmR1TzE2p6KNhp9DF3epnPVym1t7T9j8u3faBH1EhnZsHKFxTE373okedmuuPhUK2ogAsCsnCb7Rzc5xAx",
  "key36": "4bbJxddUVaviTRRVU5Jfwu2frD9DgEoLXV6Wt6J25y5sSSV4HRPF1vh9fJQvcE1ZYa1DR3nfh6JCtDe7NuhzM7n6",
  "key37": "2rJQ64Q4VXiyf6wt6np7RV2pedPt9kd7NqieMncvvZ16Tvpz6oXtKBzCGUkEjLund6nGdKxMD6vPsrymf3DUagcf",
  "key38": "3iDZWxeY1Y6uFDyX2hENXApazSJ7opUrh28uYnHK3mzomi9ehkFKFe7pMMZJsggNUiiGR2wf9e3Y4u5dsm3u1scU",
  "key39": "4dMH9PziAP613cgosPZCacxt7wPQVGe7KMEJC1Du92T75Q95vQXofSVTsWKKZ348LQfSNEvarcfGetocjPoHTxia",
  "key40": "4iBBshxZccCo8PG8Ebtr2odhdrmnYT2MCLDXuVUPfcoLNZrGTnkbXxtAtCgPzasPwT6aks3Mk5V5aeDAtcdjuhmy",
  "key41": "sb3rvNqgWHtrpoTVMpCCiuV3zTnqj2jS7K98RihtBx75u7QZGm1DVi92HdVYunEhLuC98coGjYLgLvduk1nVNaL",
  "key42": "29LDeU8XowndngrmpLyjVuTxfLCaY256etsjTLx6ijN72DqV9wfmKMYQHnrEVH348vgwzKqP6PUdo2SxCo87GUrc",
  "key43": "2ngDeoUbnrsu28AFhd7JgzgpEgnKLm3HkD8SEpwtu4azfKYCcuTvucfJec2ak7VzNREV3aJ1i9DKfdidZJQ1crXC",
  "key44": "3tW7CD1CeopidGdYmc286PEW7GSeVh9cv1koi6AJJ4Me3gkBtcLnBZEtkHpPnHNsU9uaR52XnJhpjVqS7YYy5GWH",
  "key45": "d9cni31bg5PWVSgW99hKdc7HyrQV2GRNeZgwDLRe2k7LhFdBwg1y6PtFruHB48tRdfeQNvvMN6oQBsbwxCeFvyd"
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
