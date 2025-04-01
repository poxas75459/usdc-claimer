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
    "2DPHWWponFegYcaSCFYQFkxT79i72HmSzzv6yBSZ7WWjT9KBftveHpWXnyMC6K875PELbrLjCrNYNqt74C8EJvJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pxsp39rK2X7ArcEqYVXKQ76X9ieDwKAeACPQovtzExZh6jgKenEw2mDTBjMqpQFPkdQbjkWGQbx9Gsgy4gEtbxZ",
  "key1": "2BCAqgGzkgb6CGDoz6PS1rDLDocpALg8LDZPVVbBAbAzvq7WA75owdSwPJg4sdYugSaPujMR8mRLRkxYYyGVBv9F",
  "key2": "5TaoB9hNnc54trtgmnKxRkBffNN5z4RQFaTEN5uPPpJRTaWDcrV6Kv3etbJspeU7hpXjrJn48CA9Sy3hGgQMvc18",
  "key3": "4NaoMbqTydyqvn3z8PygfcAktUBDCB5ENBzWaWtP3c54fU26LmR3AG18Vh41vmmMLYEfS11PkV9kUoPkX6LuMhMW",
  "key4": "4CNn5Q1o7m1dwZaWNjGq4hAvz6GnQPGAWekvC3RaG2n8cc3c6YrAU3bKaA8rY4oetgH626AK888YoCDueoFtcXHe",
  "key5": "2NpVA28zJmfRCh1TPnzANywLZdMUbkaEzwJbp6pkDDBsdudEh7waFgUnoig7wtkCw8Rd1YRaXzEW1mRE2XWhxd5g",
  "key6": "4SAdmeAxTg5TmniWKG6V1Nhaxxi4H8mFADckEBCvcSbvH7iyFRUsvWupT9kgfgj68gXPV3sXXvPyUf5NCxHYXoE",
  "key7": "2dbKZ1AZLpsfNJ7HC2mJ8eH7gbQ2rWxLY79qyf1sannfAhYM45fZ3gvs4SDadAUP8kFYnmq1PcUgCPZuESyupV5K",
  "key8": "2A9Bxho3B67i2LFGFYLPdAJbQV93und3tVT4yguFFhdjTTv9TaR6zxTJbrvhZBcnLLsfZ9Sha6aNTzyfrH5ZhfBt",
  "key9": "pefoK3orSa7T4BavMai1JatcbpvGZH84NdMnZSeLo5PBjrwDRTaV4gCPPqSgT5jx5hhonGerCCQrwVzS6QvD1UB",
  "key10": "58pQKS86mocpgWRG72NXemQNvWTRWjHgbXewLPgQwoJGHrZa37otWavgL8L3mn3vDQ1g5YTPQS9s19GgYp2bWFmV",
  "key11": "5Jodsj7nQjdYSRDR6vV8oimDxYi9ECY3qPxp6VDNPhfvRR6dT6PGswF4uNmQvgmoftn4ftRhhkMhfUJEUUGottZF",
  "key12": "HG5Dya75QAebSA1w7oo5PhXX9z71RSaRHVotcyV9xZJ2akKnKRBqoDftPHLNaM9uXa5uKrEJhFgRFBPCeTaUZJR",
  "key13": "4nXSMMvVtufhQV6vDxdstzkGHdQMQsjRjvYDzjdwZa62HQ23hLtawpgFtZxnXvUiYHWmEmk24PoZi6o9SNgFywef",
  "key14": "4EGvMVvRyx2rLMUYMDLQqA6Si9qJMiezc4XKNCwFfrK3731f6ZREjwsL7TKh6XZHd2pWUbHPzdJNdHhSVMQ6hjM4",
  "key15": "5yKkGrwwJbHmXsV7zFm8skmsMJYYK95V66tCYU49DmBN5c5RdfZWAg8H8xzh1CkdXRuMVDf66VbXj3a1xFYEZF8j",
  "key16": "38Ra76hzof9iW9cdSJvbjr3vDdwese6vzU1EJrwufbPKJbUGbTRDPdLw1ihVRcqyEjsh95pkn89aaXwM5mpiR7gz",
  "key17": "dym9Dq9ny6wfw4NFMhEs9izAdG441WQe93owah6qSG2vonoNMnrwHdBpmT2YcjSMcmwyhaeyzNQXGsKEaKYjHds",
  "key18": "2dxsmYi9Ax2d79QfsGZQXDtPbvBS8Uiqw4PeRHmxyW5yb6nPx5Qei9a1wmdnpVvtmQjykA8aARgbyAABRpwtYHZn",
  "key19": "PWtoMzQDTYSS4D9kD3fe86JmabbVmhgSpgLBLsweQathL3zVjgZgMtdfwsqMjVETZjGHCPD2hAc4TC2ioNAgkaG",
  "key20": "1UVwuetCmYPmBQaaV8SvtwuXaYibeEucn6K5L3C9Twgg3az3bRUVA2guK4T1bkF5geNLBuHEqcGbiMrgGXoGwEk",
  "key21": "4Tv381EPnVZzjJBnTjmNqDFVHhcoXRJpscpKpgX6iafiRnowHMXwfMZHnMmEAmDDDVqUgTNQu6dhsgX1S8BP6ZZ9",
  "key22": "5ikf9hwHaH11mRmMtvct9jBErtsjwHo5qbiad22XXhidTX9pWn4fdukruZAR6BNK1GgM1uyfnha6Qp45sa2BTcpk",
  "key23": "5Ceucc4xktvXXNHAPq12oGGjzBoaogkuotNJ5aaKnfHMjMa5t3FxZnjkrRbGeuuC19mSxwZeyy8pie2x5RMfE4JU",
  "key24": "5qbG1NWJASaoiUxyHL3ZGmT9R5naWV1r68VgQBk2bW5cseqz6ZrfAeTaMR3UKDcgrnDE175VfhVdUmZah8Kb6Dxb",
  "key25": "28zvgjXwXdnTFNFZeavuRMve3gzbzYLvxtNznnAiD7jVAc1WcyuzRwpKPsTpDFCGQUT4jNChTdh4yRS1TAN8f9p3",
  "key26": "4GmhybvnaGybaVq2QohDYq9njTEacsLrJ1cFLTetcoNSx8YwVX2XB5dFb2vpAAmqkTNxeqD3oPevN3BCNjJ4GoRn",
  "key27": "5eZ6KvzKMtHwD1kBBmdBJomrSmQvGSusxNdFbioXt6e9YSRxAXyW9uaQEQ9MrsFySeTmVVaZknjK5CBcTh727gM9",
  "key28": "zJXroxJ9jzshthWEBKhRovpqt7aXhTwDaXfhMQm9Db9m5v9HYbQxa8kzuguGkbvkzjpu3Dppe8vFiQUhv9Chbc1",
  "key29": "KGGKm37JuPUf6UcAFxRBeJKHTeMeAbPgwVpYYBdGi9HQUkVj1uRp4mc77BoF7W7NjPfKwQ9xMdyxaTPAg82kK8g",
  "key30": "3D4GbKY88wWjsHAVhP2tw1TyJiuNaREmJHyi4kFwfY6xMPu9rE5D4p96NPdQdfQDkGWfK35Hmm2H1yNYqxiUmaMf",
  "key31": "2gBaqiM1gkvNvoiuhxVKPUmD2SEVxDuZFbMVWg5UkZqys3bEN293vgmq4Dauq8MiuzG22Egf47uZtmeCqxxYM3w6",
  "key32": "237txgKocugn6U26K2WN789Wibq2pvTjLb4HgR5qcNJYELnq7TnFBoe9K9nrA5jgkZRmCHagvUCQQ7oQfj2dXCs5",
  "key33": "5vnqFDzXWo2Rya4zuXbzjjsKLSR2yzDPc481vBjX1HHgyQT6nsSxjCgB85siuPCXEbkuWwe8DU5AvZ77jgGNyvbL",
  "key34": "2F8WjEknkp4NK2roDjVjsizWfqVTyDoadMmvD2iL3FtVLNoECFy1ba4vvc4pmw2urRJWFjmpFVoBjzkfhQsXrrnS",
  "key35": "23PWNxwhVvmen3L3S3EUDcqjVkvThPuhrfsSFg7qUhHKrnLk9ZQ3MWhNgknmjm34h1eitaTUtMsUaUgQSPreAxvM",
  "key36": "4C5WjYnHK4tMvWmdNzzPhpSGRu3Aq6AJ52vckvHqdkx7tNtsKBaEnY2GECAR7pSjH33C9Hr1P7TZiBiRKWPFnQvv",
  "key37": "5aH23PNRJr6wgjMf1DzypwLS1YL1xdJGpEFYUyynhiyZjYivYkyUMdrYMDaJqFjsqyUVMJzmbEJs4E6odXn9GMTC",
  "key38": "2dU9U3VAeAd9MYj6DycwBRBc7WsiW7VoKJ6BNarA3M6iy3WcZob9Y7vV1zogo66N7KKgZxLvmuECKHbA79VS7wQF",
  "key39": "3XMohKLFf1y2AtAZHZxfaF2qhcFiEXJt5WsWg9L93VWz8HtMYmkwdLSnUVYzazoq8hE6tj5u1Rtqf8eunrpiANFs"
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
