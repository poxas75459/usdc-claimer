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
    "4882JKvzuK7iAhzb7o15XVNwkQ1dpEmrnYyRoTnjW372p5133CQoBzNvDR1Wz4bHnBcfHyy31GCpg7558MTYBTc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCo13SxdnmUuqavL4Pq8VP7BBhV3bB2sGANRnowDB8uRoRFYWD6RFQD16EiBiUsQvrsErFL7jMQ7Hc9qV4Ea9Xb",
  "key1": "4j7tZK877dZ8Dv3EWNfCAq8hZmKKd14fd8VW8hr67LCAmT1yLK2z5FUeUGXCW2qZVsZopc1b2ZWe7RXPvzFLGkLU",
  "key2": "miKaajmPJMbM1SV6ZFJpMbdXsHjUwe7bRJUWhE7SzQxz9nqkcJCrA3jo9nxHzmqGUQAhs9rpyNv9VScGTyUvtBK",
  "key3": "5nXzeFFxhuqRJyYVCG7V9RXZ9dt9uQfiE1yb2XfrXnLto14JvNXfKrJUoymeV33dz7ogUaB38WCoA6uRSao74jYi",
  "key4": "4t5a55Ybm34NErpCaeErDMikZZEDrE8t2LCWjrsyvVoWKcSHdHNjA3cTwN94JqPmgc4CXfThftfHmYAL25ag3BLx",
  "key5": "42fgYUq4G3QBBj87YpTKs9ferWU5C7sZ7iiYCG1XpmQ5WcQDmjpDAeAQ4oa319Y6uUFY6Dj4HPSGcL2g1Awbtdi1",
  "key6": "2vWrdcPRPqsVxsrXBhpK9Mz52wi9ayjYx7fS3X8U7qrKcbQHCdArQKoTNCGSoDRGvJqVpf7eJ8wRvRmjUoYUVM8H",
  "key7": "NTEZJcvSNWoHBH7VCi9UGdR6CbU9xquoCvJxTySDJzsud7H3ymYm9yXAmQz4FtYecAJ1xTBdU7HhpKnw7qw27Kn",
  "key8": "3yCjqYzMWckQMAXFgJHVz87am1y93w46W6iYuGoaHmt39zKgpDKfoe4J6xoKa8j9dRkSCYfXGBAiAjhFRQ4rgdYx",
  "key9": "5SveUxvbk6N6p7urNPzEqBWmZCmJn7pwcoJ4mty2Bh2hUMo2P7jLZ4u3eh68LQGzqLpZhvSuJ93Da1MhoJbS5yJ4",
  "key10": "2bd9uWgjNNLWPy58fFGSFHBARpc4cBAwJBiJqVFxcopAAQQ5bZ3rHUAyj24xr9EGXTwUfjrpsaDHqCLFys2RxvMs",
  "key11": "62gJ1UMBSEx7fWWo2KMEnC2UTnsrbHcLJD9L9sN78J5ZDBvYcr3dzFUvGTH4wBJ7pHb4EXidiJ6eMbCTtN3kHNUE",
  "key12": "Ec8Z5ukb7e2J543CKA5SNPaJFYtEryRwMm2BARc4vXZpSrsukPeausmCdMuEERJpoUvju4xchnoRAQRpgu7Uyh3",
  "key13": "2E9pcwhRzveCYPfHKRfFGDazhK4X4qk3ao9j1acD5grFJtYj35ysxHcuNg9RhGAbAdLf13Dy2RcGby64wXBmJq2T",
  "key14": "5tg85zH4GxwCE3Vub2bfLVT8b32UNPkZjSCkKREmHzdomYm7ADFNxT871LGZ1LF5G9StBCgLM8rX7882vw7jWBuq",
  "key15": "5eT8xc11MgP2ehChMRoNbKFQtchSPtCq8Rt95iakyGmkHYFfbamNLgeix8vJuLYK3Ez2kCGXvVArpeuue7efX2hJ",
  "key16": "22nB5UyGBK53XVYTG9DDngou4a8wbSxwP6DjLBzago648heZjLWnfSyBYnzCWsppkyFHVqL3R21mz87fuvLjz9P4",
  "key17": "2KYvRWtR4oK3NtQY3KZotvTz41LFsMbfdHMbMjSCmHXRxKeBL62bQqwSzcq8Mx2vrnUDikDh1jQKT4NmnMzszyva",
  "key18": "4DLfV2cTZL3ZrKwRpaFZU3iGwsJuKx2FeCvb3sUqy9Ts3ToZ8R7AwotYTb2ZoJLCjGE3oNmjiro56GvBhJnJVAuv",
  "key19": "4E6fMfqNq77sqCt7qqDe1SwsS4GL3BQCsqT7dGGAZ91ifFsMb2nEJ4uoHpfkxugzQo8zcjTkFkLC1ziWE4zgZa6G",
  "key20": "4iK8PXnp2zWZjRLXc4dKdJKQ58UbHDHiq5atCq4awVHjqMmait8qdVptVgYq5BMxdQX524KyRS9rtpYHqU4jRsmt",
  "key21": "64tgHo76YGTtQ6d7fHHFdmBvnctzNxR8ASMT5jTFH2DiPw96ZZM9McdsZE9kAaHXgC75NBM5Tom1UEaFiiWFUL6q",
  "key22": "3tY4Vyr3Pz3cyVgjgynq7cNeNR7Adbsu8JMLmdJSeVXePaY6zExWztVMHNBThiAi1hE3vYkxqied6dhzpVnWfogC",
  "key23": "5txseVtLJqxeVkdiX7tMYFtdcdmDPgowfz2ZhZek3hTt2ikNKi5hu8MU6cFxWsFuTCZ3qcZU3xjDmnWAKezb6Y1q",
  "key24": "628WsdzsicCQfCeEYmdYsYDtHaSQrmUsNB4QG4qhWoPxT656VYpWLLVt8jd1XtaJ4Lq9VPd7gFvSBkBWzEEEtYdq",
  "key25": "2nTbJZojCAhf2rdhcDQ9BiXpLXCz46ELTKNqWyZ43kDHzyw1qXqnWx7JHupTt459PEw3kTrzN1QHHkvx7ZbRcmLX",
  "key26": "3pp925o8ECbMTmEE2f3Z31pyqv2niSzdfdxf48PCZykyFGSYSn2GAsBQwuj6kFktdHPbzbzvdRNRtCu1K7RnVrDa",
  "key27": "4GxBbmMMnzht2FfnRMgY29b9rDA2Eoywf4GbfhajaSnGJkQ1XdzAb3a34pUJDopoWN5NWwWnTjH1NzFrw25jMGex",
  "key28": "esFkKe7zVtw3C44tJ7X8DmegABiXBmmfY8M3v3RGLce9enwA2qbZ8kTaEBo975aMfuSdiGwsRskwdbGK9bx7KVD",
  "key29": "3aqbJXQkwWyL12Npf4D6SxN5xMKWUeTFhtXLxSsGptxmaWDbM1G7cA9PQ3vaseJs9ttQ5v3hvZGvLk4A4whCijYv",
  "key30": "3s2vYoccXWciGC8JQnDYiNoAHcxxUzY7ixJwLZ8Vw1F6UfbRTeajmBPT2bndUSZgU3xqWocEtv57Jb8vEekDfU1e",
  "key31": "2EGmVnsRWgcjAtYc5odcvNjaXT7uCcvuCRbaukKFbknNpvyGDVoMLoARq9pp5tYuCVEEcscKS2MX37pYnBSy75jt",
  "key32": "2gZ1Ys9P5gyVuRNo6XCq6hYfwHVj48GViwa8rzVeZcXWTtLATS6jikYXbPQBgh44X3uGU828E5CHcLTFMGYYcFVH",
  "key33": "kFouQ6bbwSNdHNcUM2sZ1fYuhZicocFW7u2bayqKzybjAebfB7eVJgysRjSCmheRwabuY4CDKwqPu6AtcKHRTWj",
  "key34": "4EFsBCLkR4YSediLm6ZhGxyevBBTzxgHmaHDbhXszPLJRcNSZrSo5FsZSbVmHdFseTayjjV2xSRfN3Azi4aYZdMP",
  "key35": "5y2TnTYerpKZFyMfLb237BJonNXyDxHeacTyo8DFWu6z4cqNNbsGrUfqEvSX3Jckhk9TyKtsCKwcLLcKXwqziYaJ",
  "key36": "3kDP662AiehupXkJeqompu6JrYpwhVGUyRGTZ5koyVRjZnJosc9WBTDDtMShqwAsMxc9mk6KXUo8U6CNpgtjHQDq",
  "key37": "23JNqtP3toqiwkNiHr2ppucVt1xWuhj4xkR7rYCfS56nctCKexGeoyrArKAoX8cHzgRZLr6JVFQ7WsGs5m6hdrEz",
  "key38": "2ZfivxuHkwcvgyph8V9gFrkuMdym5roM6Tzd7EmZyNzgoeC7nuQ1DCjLPJ67i97qoZ53bizn5HPA5MdwiYTCvS1k",
  "key39": "66oq9SUi6dw5x3grHgGoun5jP7597pDRFoNkETPrSKtzybVY9D7sZX6T39gRP8bUZ7CVSxcXGbUr4ZHznMDL9ppo"
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
