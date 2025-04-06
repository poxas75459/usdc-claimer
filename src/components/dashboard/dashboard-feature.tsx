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
    "2iu3JWBkkjSvfUWCLABvhUP1NgFaKbHBtBDEDX7YC6HiuoJ8SbtFXKoNwH2uAQoKx4LyoUCnN95ajVpEmHtVCa2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6eMCZUXR2aDWENCWUeMw25tCGry1jbmtpuHT2899BT2nK7mqouhWDUBokg7fJqjfyvhwWNdCmiJ5xEYsyqURCR",
  "key1": "tJvtgUxUbdPKqSwRZtHVyfEgMBjUvB9TTk94gkfWXXCqhmE2PSQQMGyAPXjZdaGZ5Ys2t4SktePwvSmEhucpZhp",
  "key2": "2CUVDK1ZAAgKEhKdAUyzfPVeFPMyhWWe3JsiNMEy2NjwCxqJG6KBx8enGvXE8FDaYvR6p8JWUMPX7wK6PWCo7iVr",
  "key3": "3RsY5nS4G4fHqw1zBmneE3L5B8RrWoPG2CmoqsZT8VRHdr8V1BAqub9L7wDL2AEPDCDpmfUTn7pXMeH5qs4A7zyf",
  "key4": "jCzKoQxeTzg4DxJuiFjpVXKpg8qWLroLvC1JSULdPDjxswVYaCP1qsJHaXAWqBqnoq11TEUxEDx5wgGRL4RCVEL",
  "key5": "3x77YFJPomgd6f9GMkFThaqsRK3WujVxX8ajgAuk4Gmb7dxHNAVh95CBt3wCSzpJfZPziQ2BC997A8cbJx4tefYq",
  "key6": "Dv5F5cii8Gf1vMQbyCVJkGjGjyBcruArFryakZ1XL3LdDXUUUarYy2S21C7Jg5p7nvFEpw4ddc1tVumrv8HjutJ",
  "key7": "4L8dG9qUaJHYFcrLCWceAK9oThSbZp9H1XccQG8irAWxZyc8N6FEjDqzDahfEfr9nVgqWA8zN1nw6yiBGvDe2NBK",
  "key8": "2cuurFkM2Vd25kWrcZsfqTphyzcaf6VcxZtiPG1rL3Dus9DW3KJL21VnvuNvXsaZKpfedteySdKxtBrvLyePLDgW",
  "key9": "5zqBSrEUqd45oDjhah8N5T2BJVKLaH4FS94X3jiCU6uHEzMK1KXT6pPfuyTHaH6455h1seXUtgyzZc7qfEfQtndo",
  "key10": "2iiiWGv1bDhkqMun3a934wg2LvieBpnurUUQCpY7qbcg2Cb7L7YNP3aqg5ni5Ab9UkWvfFyS5wYZjGbrbQsEzudL",
  "key11": "5AcKz3RwK8MGLdtVxYs4ehPNZvdLptxpfXw9XdwwhjeaGtaUUnfLjA1RLJHo1jdgMQsu6xGhajWcHRNR7Bjk1Uhw",
  "key12": "L12GBNFcBSqS7kGKCDJg12cqcyNspUC13F2eosMmMnUQoBKxNfu2VKCFkcuPDSthVTxpLTqGnff8JmqFbFpeR6B",
  "key13": "5PN5dN6jkCzAJfpdyuJyKJ96EqGbgUhZSHUnX91mx6Y7TK5jabJaRbtzMGPLgLrrbgxftp8JbpbSGwemaah1gW79",
  "key14": "GzSahgoc9RxGNQCcAdmYXE1FjbkbtDwMRoQVQARZgy9VAiozo33qy416JtTwMUayFQk75wACSnq3PXVhVKKArtd",
  "key15": "4hMS2PDPJrGgsP3pc8MFMk7DF1sZg8TZSjequvXTMMmB1jLJBFZKKHazuz5C3B7ESj4b4PTdoe1To2T5PgUtsEj4",
  "key16": "4osZtnriLXCxcrDG2jS2Thzr2Xsaz2z56hXGt9kRpsH2Q9xEYXhEPy2zsyEaXJTSVK9YAj41pgJcPVCkuqYat13b",
  "key17": "4VkPraZrMqShmPcu7o9wfyrhH9wWQU89EJrisWfHs3E96sV9nmmDvb3WCtXhwtDDxd2r3AQpAYEdahQq588uVoiL",
  "key18": "53rkxXpwnAk5YBeGjVJHyzewfZbTYnswQbiX1r2hvCMqtXtz8ss1yT1VfXebodhzoeCwBfvyZdYVzFJUxsXxFQ7r",
  "key19": "4vhH9eKDMkBgCG2PRMnciVyhNyT6WkiFnciwXtLcVndEND7zccM65NNmGrPVcGLBCXWD8Xia4LZ9yqEqq1P4xjv7",
  "key20": "2RS4zTq9CeRr9B98qsnqJBWfxwSMMHZyQpUUs1r6TLz4doWpEjeesFqFF8WnBc9G9Hj9SH8JHpbNGtMEbonLR9V",
  "key21": "5U7NBVWsa2vhKzUfZYWiPV8PtLApipdDXvHQt8ezWoauZpW8D6TiARiVo5c6odch32xy4CMFMk9KXuycbpJe4Joz",
  "key22": "5bWo7q9NNznuSZwWKDKahdz7CvrBJngGdcY4ophMyvx4idcebokfb28VARu1BtZT2naJ1BRsGQc27Bqq4ffV2Wfo",
  "key23": "rb3iKXp9EVo6CgmL9xeEaDs43b1VrBVpLG54ocrrhdSbNYVJS8f56NsZTuDkzYdQiJoiGzMv62qduoF3sGBDogC",
  "key24": "4wmhCMa1CD5MzwfXX8M29LxZpzFbc1YYhJ9Fimkbf3GhSBjZ1FVBw3x8FdeNVmJD7kJ82tNSvMmHS1tnQVKkoUKc",
  "key25": "E7Lhm6WW7evXH3VQCquxkn9LtHoQH4bZR17oAUvXxpwfT81sF68wpbhZLD3UdEHTn3fo3tagQRbGTS5CYrnpFe9",
  "key26": "4SDoQnrrtDhDfUJ98FgkcMP12mYCaMhL3SRnKaYuNwHB1KQyvmRjJ3k9QL4jQALsWWE2aZYRcnakdg1PsgSemzm8",
  "key27": "4NHo96FjmjFXjjFpyr52LBoSeN2C1KbQyBqNSodcNXdfoxbfsXNtw2NbeQCPVeqb9q5SYzrk247AVwL7HcWCe1Jk",
  "key28": "mVCPZBjuQfXgm7P7jkcBpfqPZ2ShLV2t5ycyn6kmND2qpp11sBJT24zFx82ozcMx6gsgWxSyjudTipWUbf2vuNg",
  "key29": "2uWMQvprGxvG5yC73F5xXDz7kj7CYs6J8DDt7q5q2RFSsGKQTyKMAM8NyLp9r8QY8R5QcBzqWLibPgzBUx2CzEG3",
  "key30": "4p71No9ynY5dysDy8t9GCnuEackev3XCMJdFYdXcpn1rdXu3Yegaf7P26yXtbX42LSGGqqyGa15b1K2E8zPVwkQk",
  "key31": "3AWiGuJmho4ybKjz9H1H3ehGYubWQCKW6qm6G9DKJqtwcdNN4xjZtj9GVd25tPXpumbFyeCBQYiV7fXJsdsdFxGp",
  "key32": "5tSFXYJpNJARrWCQMeia4A24RKx93EBVrj4yGvAtPicdY7A3mH6TuXx1kdHqZ9EPTvxgbfB4oUxhSi1UtLKsKKLK",
  "key33": "TfEph32cLhogjscKenN7z1Gm3szxXjR9yG2xwi6dNQUH7Vvh8qupToX3mbemBR7Rhq3f7PxxP8iXktQ2XKz6JQs",
  "key34": "2pPc3zzCLCQVtTBJuDcVpg8SC5siyhnxNqsVeUSqwp6E55wxEwoJNMDxdJuPC3PFvcrgqe59q49ngY9NoaVZBnbe",
  "key35": "f28CSxq5Qyww5csPoG3dHqWGSEV1nPbKDVxpwos2yeM9AQmwhaYyC19T67yP2dfUfTCr2gySTZJWMbtkKyDaGhB",
  "key36": "3WjfANJBhzgu11HpLmJEnRJptn5UWRy7GUnHk5wpAvVnTtt3J4oBYXRqrJGJLzMEBrRMPE66FLtqo5YUABaVUDWj",
  "key37": "2jutMPUenV3hASNx47dr9wa6t2KHRAeqUWYo3K2dV5e26ax5nn9g3tqNJf6GLsMMEjQPcwFvd5NxF8c35NF32gLQ",
  "key38": "4B7PGqTycQbghjoxCZ9frxFr4Wzo2TtNgQYACq8VueF6X6v6EVukeKUCVjj9hY4rgDqSp5XQyQ6exCVd8DU1ymJB",
  "key39": "2jMqWn4LbJMWjrSv236SvthxXuejgNeKABbdazZWZBgKNrT17k2D8jgfA8nw6MEVqyhkHsaTFuPBkhKFXNJbA6h",
  "key40": "4cSCxNSnoD7Cq3kWV21UuaJrrJi8u1KHRZBixUe4EZYZsLjUSHm6bMu65Z6FV5hDXPmwmiY3tyv19ZAAK3hPHqSf",
  "key41": "5xoFpmzuLbkQFtuBF4RHYJjHzkum7XFkz8gNPd9XzU41xxkQh8UoBRXt25hds34tpCiCbJvaBnV1pt33k17GATxM",
  "key42": "2Mzi9AEXMwhsF8ixsF2DtxAVYNk5Yx7KksTWsyGm57q5kXkENEDx4mo3HevyCcgabnNhCJJLPAeCPaHLbwXjL3C6",
  "key43": "5MdfBVXCDQnxn9a5vpzi3G8EzesYwJ4Bb5z4goCCd9U4JEpZr1wZN7kAPhpCU57QmsgSkRbGv8X7FPw1yZ2tQbTg",
  "key44": "5x8r9vC5pRyMgyBAi3aiUWjSSzNLgnhNhnsrQoe6mDVYsieaGvx866B3UmyakdBVebL4nL5m6dYmUzRHk9ZZvBPq"
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
