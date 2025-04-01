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
    "3p2Ebj19CcKQLvw9azrhyXbL5cZkfaXS9zFPKDTMmkSe3ywUdhFHv2YrC1KA6Z3TFMfsrJaHpA2Nv7hS6rDvRSEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8W2qv7Jg8aTMGFJFXeESh3Q2kxbPTQ7iezuvFWMA2xZRvonz7eqxd9wd28M287ee5xAUhUhB14nSBsZQVFNp7Q",
  "key1": "5at2K1aMtcM5HvN61SCV45K8mHZiXzRGttq2Y9wSrTb8xbvEx1tG6HYcjeb9Dp66D2figVZ1k1nwa9AUkc4ATmcY",
  "key2": "4Bd2A9KR7LjtzM33wpNq2wTB7XJhx9k6H4E8QAmNx6pazLB8gDv3wB61ac7BrqVfrKibfQgRdfH2z4CEasyoxH1T",
  "key3": "Ps3du3p1EWcKL5JfsXwaQVhY2Kuti4MM4U8Ru5moR7XAmP5ewGa1BhdMJnkTEBfHTAea5vwnnyCdosiwCF2Fxca",
  "key4": "4dgDssqntY8Goe56XEisfycTUU2EG2aQTR5HdG38gBewika7SAEVbBzoeDud6UM8XjKoQV2YqWwv2fY5rGPMA6Nm",
  "key5": "2QSQJD8v8isp9LiGQoNwZgbxjZM9kuSZGM3NFYNRrQ1pTRm6KJMx2hYX1vtvoaLtouvhhzV3h3LCryxvS7zAgv6D",
  "key6": "4DJgokkRCQnHda3NQaV3WQx8X2yMvuZ2859A8gHLHwJp1tqsS9c9FhhJUMEHQFYFUd4bAjeLjjVHq29Z4y2YNbwV",
  "key7": "Bgsge9jRYssNTCxvRx7zzbEngyPCmHzWYYfRUDafbANpnEv85JuLFQQHzumnUZzT8mVmunFnPsAhmaeRYkPpezB",
  "key8": "MQVbknYAQBrHsTf15SYmt1RFtSKk39Lpx1HhnDE9RRMt1p77aK7GPb3EKAQFwZS4ciTeUsz6WUgaMHqk9CCSgEF",
  "key9": "4Y52DdecA12XACXSx8R2fKwpWGW7HsnRus8CoNkBESis7VxjhRWcobFQSBdNwM5aNiEEsmDYj7VjXM3UVRwt5hZn",
  "key10": "2fZ4BFNJBTytJKGNy958cjkCiF8Vy32m1GeeHoNLv6tAaXDcj1bUuj76UBi9hL6p3dUmp9fB8MLrw2aK4egPc51U",
  "key11": "ne3a8trA9cupkCdabxXo7gefCLsoPUzmxyaYNJHbvp3vw215ZR6XmAThcK3xK7JWRSQRUk1j6XBqBJPc8zEuzyv",
  "key12": "gPcQxFNPw1J7u5kNfH4DrLdy6Ro9sojeE14u34MPeLhfpXtBeAHLtmwBnwW6sLkUcmXsMBrxWdsVQpCGERBXhv4",
  "key13": "4kTJPn8MokpA7sd8uWsr1J9yB2PzZAzxdXW8wAb7YZJaYcRkZLKjUCfmj9bWSadZ76nY255RR8r75hg1Q2Hv2FA2",
  "key14": "3JXo9o55Pj6giVeJ163st5umnwH6vf6U2ceR7cTHszcX3y1iu3EoRT9cZJsC6EJeDJpVNVE2fkJbhjWQYpauT1UX",
  "key15": "49JAe1kTi3WV8Js9Q9FutDh1EkP8XXVHCd5d58W8bkExvKCSQk9zxAAyWP6dcb6Pq99oUKigSNguB7ifLrcGeAJ",
  "key16": "2k48dQkg9heUTNPScNgi1nHdMbhZKZQCW1t2BN8KW6RTftHaZFPKh7LHe1d9gUMEDKBhFWQ1e2uWQTJijDJCnkCh",
  "key17": "3kpLAcUaKQoP21aBcYu2vPKVMkBJuBb3gZFQK8UrPDknaDU2QYco6zPtqi5bMxRFiPRTT6QHwFkMsy9fW5yvPai5",
  "key18": "5VZ5k31JjTQ4gAST168Q5JF3p2qeNCdhoBnz9uvxmbCdcG5XUH5Hy7Zv6rTUKvZ5423pDo81uoU1MrRsPniDcemE",
  "key19": "3pRqP4uJN2zPPGUHZxH9hchnsRKDmDepCeHNQxzypY9A8ViXL2wZCcszj9UzpVuGe3qgTJZV4r4JXgJiSXW92J58",
  "key20": "5aZHrxKnLrD2P25637Bz7aDkgNzpUUBktvuLbVZ3Mik5x2Se7SPi9egpxPDmoExjm1Jh9VnUDPfhPU2rpgThfaiH",
  "key21": "386ac1uRjo4ro6q2TJCJCcQuc4DRh1ohe4C8qNfBQtZcL1x5cepWajheNnjY7CpZ4n8JgA8hEWRUkaV3xXBaMHdD",
  "key22": "3VkgixGRFDa82WLoegjEeeNMQF4644DgQtieVhGFsxfNgfLTpVSuWb5baeD5MWQbXNuLu3yQuZFGLa3e6HgZ8V4H",
  "key23": "4xK4jTSDUiDhsmaFmzpkMGKLNhq1ZWpNQ7a94H7gTAVmaknRUQ5Fa8ac1TmpqgNNYL9h21RT7yoBhswTDueH93ry",
  "key24": "pDkudHT5yWkwJimt86dwv9s6augrQSc3mg8ajYCRXi4i4sNSzWx8VAcUcmun53o3WqwdEZiqng5Ygt9jTuBcbEx",
  "key25": "4kPpQN6MwTeV1NrL5L8XftyDsVpnNZ1LgtvJcBdK9jPb4LfJXQ7vmQFVTd1zY6vDQqGGkY9Tym5sfNMU1MNrPBwy",
  "key26": "jRYq8jLZh6zwDjYYGsHyK2yapXTpJXfjjySDepijSjqmoNqdeUbmqKX9QgPrWxG6qTWK6NctNSp2v1ztc4DpUvt",
  "key27": "5mzCYdKfXPtPrTSMidZJhrxYBmmfeaTGR7P3Qvny26sAGJhbwLQgYqnB5yCAReuoLibTCn5FonFpLRLcAZLRewG8",
  "key28": "5wpi4vGdECs79Q7TfaCrRuvvqe1EEZpDt7E7RogGvane9M9SAsr75ygVtpFzuctLwEc1dJkPeBDePiBowgC62Z22",
  "key29": "2DxtrARR9Gub8acTT7FV2VmeLiTUi1cCiRsZorQHkaypd8bGhXRqMkXX21r3jnRkejYFnTuuVwYrXVFJ28tCo9Ym",
  "key30": "4LGti344KJh9uZMKb6fWjz7J3sVbN9TgpUe2adewSXxhq17vmajJF4DnSKrV3Ep2Cr5DhzU72yTC7YAudsUS4gC5",
  "key31": "4uPrghkAA6d3SmfkW7vBiPz82kEjinmPQrn1S9mnqjfeBsZ1ufGWys6qwZ3ENTueLGpfExGrXZS2rLCJbmAKnXqL",
  "key32": "22W8t88eGRBS6CUUpJLrFNfT7uYrtmhvJ598EYraMgAMLyLXUnyzT3VvSnpGmLEgFGt5PKamqxh8XCzT5iWCfsgB",
  "key33": "55FqJXcVz1DG7htQhkgWCNUzfVHd6N38xWHTmrsjKMkPeLEMAJSaFT8oF68nr6acLiRL19gJubf1F68CgAwYswcj",
  "key34": "4abCXZggjWWf8SmQ2Y4PAf6Gmf3CV8QZvCqLtRXouaAciwE3iagbqETnAjD5dwYkznt2DC7R8tQbhBE4RzjSV3oF",
  "key35": "39teT2C72J3kJTiyNJdwJ83v7siMApANScb2GMz7aEPH66nNt4MaqCosuLJ8WQdL9fvjUQvL4QR5Ji3WbFcrKTo3",
  "key36": "4tt7TKxHUYZtKFKnkZRVM5DhDWGrLfLbYrRpvBZ1XjehPP4U9DkV8NtR53umtVRXbo8thzwTSXqjhEzKsnnFJK2S",
  "key37": "67V7zdXZN178KRS8zq9E4ozeMtdw6UziCFtDgf7wQywP5y4fPFD28BUUzEi73tk9qbHXfHv7iuQcdrBKreMT6PbR",
  "key38": "2hHsRJmCRrKkXVx5yechjWUJiNrv7moSfzmVmj9cAaqAC1Q6gj5JqhoaEYTEbtkH6gK7BVFi6cxTRUvEaL4xDfUd",
  "key39": "4vdii2WRbzQdc2go3p4fS9tyfiWpUqPu9XVEDjv7dB3EwnC5e6CwzGEQfp1i39FeXYNR6n4q3FNut8sJk5QAcfTG",
  "key40": "JbeTp5JHzy7iWhnTM5dyG1kzmewAAZZ5XJiCgGdbKs5XZZzaHqw7T7NdX52C26MrdPK7dvFmRY761cNvjYpdx2M",
  "key41": "4FQjc4EuaMsqZtN2fWqEZM47mjaqWn5YsNhWmF9u67Cww3oDr9vDSXmDVjewD7hU1weyV7JKDn7d1euzBRcdjDDs",
  "key42": "342JVqT8dAa3B1RrBTZgTCqkdEiscGTcTMHUhAx85Gfke1i8XpGoBmt1WcU8xJL6iNGKQ25buG8gqSy7nAnt2Aiz",
  "key43": "2kZVDkQLF3KCxxdAjRikDCTBXBC5C2nGR5kiUNcpvRJcoWtuTxpsNJRDhtNt8jqG8DiP3zoAXT1x6S53LTHrsBCd",
  "key44": "228YE75JsFM1tsv6W9q9yUsgPRstntP3n3BnxoqdXnYAggeYS4TjjWcMFKoAJ59sKG9jzwAwb8bcgwqMdDQrRgxH",
  "key45": "3yUXcezwNTJMxcnviHZ925BpWZk9UVG2b4C15wmcreuASgudR1j8AcdG2dj7yEYVD9KfQE3k4Yqt4eDogtqCdMFX",
  "key46": "3CRp3GHJdLcPBAQMKY5QgKX8U7q7WwodDoorF9Rt7jngoSPGszBzvYRWY4JqHncgzYUqXV6d5bQYWkzG1AY3LBem"
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
