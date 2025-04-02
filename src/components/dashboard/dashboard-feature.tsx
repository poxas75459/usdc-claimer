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
    "5MWgnBgKmoEAcs7GPGHxVk6gD3QkjiTU5Sikh7RKY9tiktgJURmpK9mh5k88HdkbUu4FH5ttZ8ppaBgiEy2cJuD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqizEuqnHSbDyHGG6gggobaGTbC5ZHRrAmN7x4CL7UQpL86ReYcZqZ7yRckCvhH4z8UM4UZM5eNmeLQUhACoYdK",
  "key1": "4Ar9qwzxgEYWmHkFPvnFTde4tMEBFfnzk1iyGiHfUs66VzMHyNPGWq29JdS6YfnxFta3EXcuQb7f6RDQWpQVeRpr",
  "key2": "3zMsbpfsjYBzUKG8txXzz2dngGUWpV5xU2KwWxWiHmLaEsqZ3aocXwnCLTT311ycicP5c1yhL2wurksvfAoWVjYL",
  "key3": "jDarnYh2UU97d1mMkKBcMeVENEMkLsnAE7cuTsPBKFtsD9gKZeFCKnecAAVXtpCQvowGiKsj7CELxheJjd22tSH",
  "key4": "3pU9YzPXapS6vy2zyYssJNBz7jAkFPiSarSf5P86R1rQwnM3hwnVdcbSvMvEjHcX4H9ABASbxSqJQiygFD7MazZK",
  "key5": "2q7Dx91thy6oLRCy6Zj1xvMYyGZ3D85dGtrezTghaqr6dDnsqGLy2ZL2oKUdroxPX7TSLBiz7kB7CzDJtwS1zq1e",
  "key6": "2GEtCQqGCFtar7txbGrPJDahrzBPronaKZqHgDu4wuGSNg5yjfzAdWhEPfWd4wyfTRj66jLU4UbQAxd4FPDX6cH5",
  "key7": "2bGzys7ujTEkAQsTQrGzJfX6WzFLFhKvu7nxzVSaprJQn48dSnAR5rk5444SYYMjxQ5wrBRjTA9bujnzB8CP6qZf",
  "key8": "2tT8ufddNHDbCbYz3zUCWx8SuR5Akc2ZcxUNjQEC4YMHiXuWEfj5hmgvx3G7Qx2EbGdYtUShVXB95teUjwiFnib3",
  "key9": "3sh47mZqD4HJjcdtfwM59854cf1gZV6T4XDR71PKbcRVAsmDUmnPySLtwCrujgkB4iSZjLyYmAhJHj99JgVxrSwr",
  "key10": "36LkFydXtTYtugdbHSEyDhTcsmayHBsiBCVPt9eEqjCFHgYfyKrQKdFm8intYZE85UFJdp9Us8MCEBc6rEzh6LXg",
  "key11": "4SZ5h6ZbXfP9o1ycFsuvP8iK1G4toVD1J3b6jdAVyAY731SLusmanJrHTFrP9DqUc6PaUSkm1UgzUiHQmJDKNf8a",
  "key12": "5cAdSWRv1K6NDdtevR36dnGXNcMY6PNh6kDaEFZudC62Pm5cpHxP3v2o3RXrkgCdTCh582NuoPb5FSLHxWiNKgUz",
  "key13": "fV7PTLrDVejCT1r5g2ryqwQqw4JTQPZm7CEajMUZHMuyXHtQwEzbzaCvUMppYfrM8cJTAxxEsaBTG8XbnpawwZW",
  "key14": "3uBv5cRo95uZsCK4u6PT5Z69QcWJcSSBFvU2Dz5Tz4qvjpDNUvkrX6Co3KDmSa1f7yuz4vX58S3tFQSvWxKUfsdD",
  "key15": "3W4uPLM2XknraHCDuZTeqkekjYG5QB3dMwjsTSt4Uer94hkQSMyafvw7MumhguiSviVuqD1LWjqye2hwC3o26ubD",
  "key16": "2uph446gk4MrtUsQHc4nNgQyMHxvTQw8nNsBoqWcnbLYnjJgrJjUSk2pHXJg1aQos2ZMNmJGCdhW3G8CfzkgRawN",
  "key17": "2WuLJ6AxZPBHnTR76f3Xo8kTuEq8JfDrtPwGkBatqFaj9xUpS52h9XocB4PuZ2brydRR1pPVNM2SuFJbUo2te2c6",
  "key18": "g1cVJVhGvKa5rpE9NTu3KGU4RDuuEDtm683aXcaXuNfjNUGQ43tEYpDvuJEe6jLMY9guj3JNrzRYduDePVqxHrQ",
  "key19": "5tBQwFQF9WKTd4k2c3YQANk86sbXq3c6S1dHqpXh9vwsiZHzhyyUDuCrUEFsuQWFGMKPDiJtBPHmqxvLFL7fXZm3",
  "key20": "2T2b4qxbREhVzBMPBeQTU7SCSgijBtn2TXNmo6sq2QFFP4Yjs1mtxW9wEGDnwjTBcFj6W1MPhFzM64QW5tPkNr61",
  "key21": "9N7ZgiQSJu4efTnzQ8b2a3ScsnBgP9RGa7r8RZeHMSo1ep8uqvRJ3o2FFJkpw2CQTFDE11h9HmkozEvxMZa9r48",
  "key22": "qWEdGZcJ7QckTk2REdm9aGCcNVUip1SbWkvLkkKifQepKsF4U6yMQxR9BgaHnSB7yCVLmYkHCpodnz5kRKPUmAV",
  "key23": "27WCZXAb7qvWCAZHTTeGXRrK26SycBXGQ41jb2njVbbvyod2VCNPojWsRvdPAy92P2Rvxnkq8BfBdBeLe2mDXmTP",
  "key24": "4xvHXbrjS9zNmkMzm8bSq3p3Yvccw1yyuYYMLBdB1UH67sweiNxxM5tscGwzM1zFdTc5DjEMXkL3DqQoCPEm1TFz",
  "key25": "4UqJEqSM65kjdwXQDTRXnmbE3VnLeBN3bEWy5WU8WzP5JMsaQ18HVGPEKm56Na33AbfVJyHnY4XyHn4VZQGRJEqF",
  "key26": "oYHTxL6YpwaKmWSZdtrCY5246zHjVJRCif9Lxee6Qof1YGNnnnT6nKFgmyGQsjZPmewqKXQ6SEe3PUr9fCwXHPn",
  "key27": "3XWL7WdfwUcLLi9pFT58YGNYsEJodd2amq2zmmTHbwVqzJxNXKqjgySziFfC5PNk4DriMLFc9ihrZkYErnzbLdhB",
  "key28": "4Eb37Z3syk2zS9xcP8AkfpM3hB8fVFPnvgAmdKHEVd4peWrXnjekcE2gAw2MoCZH9V9syFuTvK5Tx8FFHCo24wvK",
  "key29": "2ptC4AT8hTdvKjNT55MkRpiNH3xdDHbWhmegAmY6SPmv2PE2tgpE4neLLH1Db2dnjnLTqonZcdwi8SSVWmjS86aU",
  "key30": "4LAuSXoW59F39wwKsuAWY17GedsTgzyYe1YkSxXinPBvxeyLz1xfcXnvTfZu5TfC4khfWx5caWEQQhYPNUhDxkF4",
  "key31": "5nWHFtUiKRNmLQ67XE1cYp7r8EY4GBEAVdHxTp8SmHqE2gojG1CFuQh2a23FRJX2fjdd2wpy1pXEENntgFS2NRLf",
  "key32": "bapN1rwcTFdt5Xr13e6uyxYXHHVca7f569DorV5LNG7htGmkU2G9fFkjEeUcwPQ7jsJF7w9DMtP7Yom6j4z85nn",
  "key33": "4kmWsFJaxtDW2uEq7DxjfErRSUmUgmz7NcYLjw4bxKgz2cu4qUsvBgAvsaYyD7d6K8HLHqn1iUEVJXUK4h3LebUP",
  "key34": "2QxWUHNdpu1T3LRtvZiPgjqNLFNhy8AiretNUgm1Q7FhZyRCCWJzbHV7yWrENncDm27omyVyrR8bU4iCuFTkDq4W",
  "key35": "9f2NzQxuAdGkpSkdmzx3rzio4w8CuQhikXduLcTbZb1t9ggBf5o5sgX6GTW48PcAmMzwjFzNArMCt4j1VX2QrNY",
  "key36": "4cKZ25Pjw9oLuvLbHTEZEHT8KNwJPsc8iN6dZnWrC5JAsKTG9cmb2QB7fgJy9vGELcKyFJna4Ca34HwcPWSUVqtH",
  "key37": "HkPbKDCms9RaUAbjA1i99kdPSvY6oFjKVR23AUxwihxE9aJTSpAYUgXNJUmdy43zKT7v9F2PZhGuMweDntpuPcM",
  "key38": "2GCiRYCaj8XUDC1YGVdo8KdG9JvVfZtCQ9K2ssxKaFxJKo7r4aRr78LC6jiPXyRrttbpS1wipdVzAeX6HkSBvsMY",
  "key39": "3rQBhkspDAbANkCvdfidcbFgpUaExHmYJPejWvb7DBfBZvvUFgNqR7ZdzpX6LTMtfx3T36esNWsbBxocvQMo83sT",
  "key40": "XqkpYJnfp46RdyGevV1ER9t6Hu3W3M44jvrKBGJtjYkL9EmoBhcwbzRRGbhJEvJsTNwpCkmtkiRqcMwWBqSMzDT",
  "key41": "QKMvXS4CHQJdUeZ6wU3oMEbwYcM69w5VYfzhnRRzsdqBY5PTnyUQzhx6GXr4teLBxZfGtMZ9mkM7ak95uHqDsuL"
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
