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
    "37KEMby9Bu4RKKFk2oTjU4dpTqCjFB2R14SkUzcrkktZm7hYFN9UYsfxhzc4GrvxYFjVYmVdHeMBHQ9UjdWLL9nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DqvF6d6K1T5YQBAntWNZ1Z9PETXFLQfKYhEcpbko3beYYPm5icgEpBnozQ7hLNnPLvSFob6C8WX3LDwLAXBuvf",
  "key1": "3gG2afCngPBef456DCbAZojR7qku4Nn3mz3hqNKviFz3Hk81kiSF6H8vPCaja52xN5jchgvHgqG4tFGXhrvfzsyh",
  "key2": "33e2TR8CVpMG9TdcLZbnvvURD4LiEjkAwUkMM8NNA1nDW7m5XwC7uU6j9nkBvFUTmAu1JNPWETctdPyS3CMMQgwF",
  "key3": "BxmtpQj7WjRBPdFPpvK5zFirnjCw8tg8oEmzeWbocECKoYWPfTMhrkKnzYygDmANpFFZUXpvQJybRXj5erTMUhq",
  "key4": "4D9CeqPKp7vBC52mchX2hNRLeapx4xYUp8ivbDkEpdP4U9UHGSbWRpHuKqEy2t5zWcGntdxKhXXAaye2qmnVq4wT",
  "key5": "2SU7epkSczqS5f7fWjD5hsqY6LMghth2xMisQuAmaUGkWrUxrCCfWoa8EahpwmUNTcus46U7R8ZFmqBCNmwAguXK",
  "key6": "2XK7Bpmju8yRvpychF27FAQL8tAaxK9csooJFuUi2cULspjJ2onnj7MgdhqPyUycykUhWkkyqppu4omnCHvmv6PF",
  "key7": "53s9VqNEbnPXQBPUH7wtPJcaeP1R6TMheEEHtGHmaFwTUDf1MkGwecq1BApJiTUqAX9Fd5VErZ2msMV1npQuoR8c",
  "key8": "32zDuH4QujW2JwYn52fg3QoMw32cqEB4uZLpQ5FqBY5TMvMCWLtF6TAy8sxJhf37d1DpE3j3AwucfNAq7QPDL5XM",
  "key9": "3cKop4utRHRH56mfXucenN6qLvNiyenqfjtGh1QCLGAQVLRbkfJZPvST93bnqtHfsShoy7SifY1wzw8AvAKL5WvS",
  "key10": "5ATaUt932c79uekn4yeHQsqD97qFH76La58Ph6XMX3JJAazUvFRNwZfV9RRQnvpLx3zhi6XgWjC7oj4onXbpqNFV",
  "key11": "3bxuBSAnE2Mzzzowu477FNDeZXZV1XNM8Yr4P1n2C6wmkGuT8Qk24FYL9LX6dWhMxDwAFNdg5sEj5SXJGMgFgqp6",
  "key12": "c3dUg65NruC5HgmbnVtdQTqMCf6pnmKims4k16VaWuHwPvVgn5JFBoSUcZMK8nKDbpqtGedekCpVkjJNeExidhN",
  "key13": "591yxNRGrBSqHEvYGG7y6qWKXnMgH8NMQpYDEifV4seYwzNQ2gkGczTr3JgcW8eQ4toZkArWQGdNSiH7XKPjh75r",
  "key14": "3SevhLmZoWMZdK5fBUzAWVUZWnM3xjkrqTgrfH1LLoVpRDBGcXAPBUdotapE8Ep6BMK6hU6CRxKFfrKnd6wP8zMd",
  "key15": "59xBcqWKdAms4b4Ph64qpRA5eaUcoPJab4PjEiE9t4wu2ntuCXBvzUaRrRS4E7w4chLRLfZ1qcCdtWeRDdJgMhq2",
  "key16": "2H1J7WsjE4sGAiPxsY54tSUS18qciR15NK8BLJiy1gb9KUnShQLZb61rJHW7gp9JgHWmSaXq7hTR2ZU3ERhMbn6a",
  "key17": "oHn9xxwhFf4348wZt5MPnP1AagUZUYa4KAdVEujwYzM7wDgrVBCn5w1gaxd4T4vbRQ5fHtcurRtuMVTtZVEbmGN",
  "key18": "47nZ62qxC8xXjYA45WrhtnBA54EdBuDkNE3v2U9xnMFLmiJDxDzY7uEm986RVtMjfPTvaNxWAkk7otqB2csC8X3c",
  "key19": "5ux3m5kFAS8yeHqKtk4dR6B78WF4wpYAaagtkd8PTxp2tZURvfD3S9K2WQ4SumEDtb1VfpjVFVgpp8o6Q9DYkHJC",
  "key20": "321DqmYxA2VHWs8fxS3r35nGj7fgo1waxtnQes1yJySCvmvRkxWuow9BnHzSokr15SrncSqgP2jAzKcrjoXuT2sd",
  "key21": "3kAHfP473TZYBsKumA19xcnDTvQs1BQ6uJGpPoGQg661QU5kmeUZXzaDD7LS68ciRFDeZU9hvYndBQkte8PsSqVx",
  "key22": "2Q6VW645GKChECqYx6PFWUgT1bksDKJWJWTn7EcjCMC9oT387VC5gDD2hEg4aDCzFZ8xDJX9gBzE89YCFu9skTtj",
  "key23": "5BSx8apzU3SkbetFbkcTJGSXL9V6hmY3gnYHARnAu26oYHN6ktRA3b1pFD3u6KhJH7tJBSe9YfZ2TdiehnyvXZSS",
  "key24": "5QCVWcb99qcYfC2FRQn3RJ7zA9B4XosHH7vYqG7iPKcihKNAaEfHMBnqNVv9D8qfEyWdSbfWkQv2hmGhQhT3oG5E",
  "key25": "5JpQxxW4xnLZ3JWWdC1AqaSji1t5T5Ga6n7jjATbadhJHxpz3KqbXcMT9BFN3XMYsJSdPXT6CqwkDdmGTxtTAPPe",
  "key26": "3BwSFe64JV47AtMhKgocaWqwes21KGyRpRjayay1C7ConeyPhN66qgchaaWtTW3sEkV3TtQthsEaSgNUSPcE5zEQ",
  "key27": "2RZ3wGxiZHp2z5NFckciGhUndJ27o4eEPd4pspp4H2aJRZPHwX5DW882TbSasvm6X6RCG1uh5BHyThvq1PYHZfBQ",
  "key28": "3PXnckVqsLApLN86S2joTYe1qgtVTrxqTYKvxwFrSTzukWqwSUiw2v9eAec1xDN2n9CyDJvFNkoTNoggxZgTxk7k",
  "key29": "3KsbbrWbWtVFuqoumhgANvTLFrYLT5vcNJiMWjcFrjRXRJfHxavL75hu8EUjnZk6KJeeE3i36WMQLhqhgzA8EvpU",
  "key30": "2JCam2DJ3TpfRLJiFTKfV51daPK99YmdL7s1ABzT7RmR4ANMn1AnCmreZGRb5dhgdx2tTEPVshu6qZSHHkMKdhtq",
  "key31": "5vyApDaui6bos81sjk5i12jorSvbwVL8HoGTyJg1akusAdSBSvTkTqD8QX77paXNKxBrgPg6zPJcW8rzCRPAzMZU",
  "key32": "fy6Q4dJqHhedaNchbqjrNy6YrNYsRXFmhhK7UStKox3PT3hsXyAJBVn5HnVqMkJDSU43R1yVysaaBHHGqHEPhPR",
  "key33": "hf4UPidrypKuuCn7wjPixEPd46KhZcbn9hXbdj6U24CCB255Pc3ptUZcDdA8UGzyQyafjoZxzdkjaxeLYQrhwCe",
  "key34": "23w9etmaFwe8t15qUhCvnej5twnuQ4686tZUu5vwV5KSSwnRRXBhyDofZVYB2YyHWddp9PYeZZDj4ss5CDvBJhyJ",
  "key35": "42LLVg4Sco8a5BZ2H15DKNinfUaCYfCBkuD7dr7LG3QRBRBcgYFGwp5jNDPLxpX8xB5p2VYfJFJAnp9LYbLGJPH6",
  "key36": "49Eiid88zMQ1nobNsEQ8DUFVUdhmTNgtb58MW1QmV2HNREs8m8DdBnMGSfGp8fwG1eAbRK2E1xSgSWq765fJZ5VX",
  "key37": "2uW9AqxLapwUPBj9za9Qpg5Dh3MBLobo6tk2ybEDwuNHuvjKqMrDBqrcSZWrr5wSRsjA5ycH1L2cnHRabD1FWQrY",
  "key38": "622tjtQtyk4JicsdwFqFMZtKLFeAbtPk1CVQfnBU5weTWBvP7k3daNfp2ZZg2AS7Awd7wgz1TL8TezU8y8pKzjsn",
  "key39": "2UUvfpAeJ3MxowYxK2p61hsg5cFC3WnadTTeGmjxAPqCNH1LimuFCo8bqPomhfZBt3KRyfnJHk8rpGwspfQQgZ4C",
  "key40": "4PFeCu1hmqyHvdvCq5rxqE3shvraQvsZPM9wsc4jjPLuWBmsb3LzGwjudAkvP9cDGg6AvHEJ1RMh2AFPuzgCXLzw",
  "key41": "2ktQ6LSMjyRCToEhyWuVBPEGGJPQrrgCQH6RHKGJTHACuDSLGCE3HPpgKd26HsmUoVKqvdfwXdTMoqJwGAAN4JQ5",
  "key42": "HLjrhKCnS44aYfXLNhVpQhtsHyQshAHUAaAn3LFofS1Ei65VkjRuAJWqqQCzZmkhi7kWnTTzj5rZJiQVKSwZNi1",
  "key43": "5mM1Lgdoga1512EkaYuD66JmZXTwGPhYcsxfjeCSuFSgcMpnVn6X3XbaDFZFPK49Ga5RRaP9gpK39QXk2MDrortd"
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
