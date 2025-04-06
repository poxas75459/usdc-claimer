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
    "2jDjpyk7jsCmGMgTGm8vNw2wL1WLh9XhV9kmQd9J1zBNvurT2MrqJo9RKXVCJakPku9BD22cajVWmddBeLDUztkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "woYryAs35Y3jU8NioTQPSxqp5yZ4BaPUQNpCujygBX6gJercNS5T6W6tg3bp9h6EKtzeD2jz2hEosq2fcBG4APD",
  "key1": "46VQ13yBqLp9JYDtoguq4qkHztC1ytWuxGGP5eHq3AhZqXK5jvvH1MpEQXwJ14tvcD4C79m25UNcbHqxLk5iUEue",
  "key2": "5pFkTKV3veNRgcES1xcJW6ptmn3T89KZahB4wdbN9ZUJxzne9JLJSiQadd47K7iARqodcUNiF87nTW7xU8iqBj3h",
  "key3": "3xvYHt1BEMv26J2tfd8bPNhDpfH8vxsGhXK5jCSkjxdgyLjonLwVvVskwnqumHENPWz95wftskzuaXX428FN8mjw",
  "key4": "wxjJ3r4C3ynXWELEsPhRLLJJProGKbSqGVJY8oaWaCw3Sihi2vntTvwQDvNe6SD7CBixYnNBNudxHDbvTxLVcMv",
  "key5": "22j121255QU4vJoYnXrVKJaSg2cbCqrJfcU7mdAsPhcrBJBim1LYvbRis9n2r1ecKKGW9Qo9sHBeKurRutb4eAtA",
  "key6": "4C3t7TsJZJymdJ7pYDi2WRJVb3NrMTJ7cdT36nptx2uQkN7JaNtGP45Ljcw5W4x6JLK9XCdbUYwpsTg3LXpEsWJg",
  "key7": "4MRREUfjriZEpGj8piaAH6JFf3gEEsrJfJYwYryvQYgfb9XnmP6U8FVzVtPVGrEWHTAuPSuKBABzheRQ5Sfut6kL",
  "key8": "2F5pirTQzcZugQ1cvgsUc6cuwUPuFcuJXT2ke4WNhW3QFWV5Fes7suCd1cARp8VBfW24S8PMZQkRqAXU1eN3VbVb",
  "key9": "3pxp6tJcsaJp7PPWk2b4UrXCMx8QoW2hzZDFJHkQ1DrNBsMeeeUC7P4SuBtazprugGZme5Y2GY3FoySJzGU3ED7p",
  "key10": "2RAvtFkDkxRuydiHX86pfZx2C7ueLr5NiYFWkb7giryNYrNktBbb6dQrckn9QVyyb7tqneiZegrLKh8LSVMDK2Hr",
  "key11": "j9DSF7c6CwRWQ1s2DjbhojzNDVRKqQYipna4y3bMz8AMFg7giDe9KBMP7K9muL9pf4kfSYheiWKbwpLxPej3iWF",
  "key12": "3WgrA2ojPSkDCtDNco2rBYAMycNFBURp326m73xAJQSv9rmXMZR1ZEpdkw5gMvrnU6jB14YdJN3Hk2i9k3RpcT7u",
  "key13": "5HYYEeZG4KcJFhG9A9XCFFckNQmBgVXT652JKaPY1tUzLVuqcnyEKLHfrSBTtruMwPMnQvqzYBnGmRinA25xDprJ",
  "key14": "4DcELhwh71ATUEYWYaaxc2t9DCTpYq1FnEtw7Px2NG62u9G2zSL4mJxaV5Ro15uPexCP8A85rr3FxwMbQxpyxQJp",
  "key15": "52mrRPZwmoj6SWJVBcJjAYRixcoorE4VdHvooMQVcSscBo6YVBPE8jv1oYQ7mS4ioF3obvdgrVwKfz4zpC3nK8yz",
  "key16": "3cw1zSNCMX7cXo1ABm8HmQj9RECZj8f8zyxEsgBRtUUV7DNP4q9AeQ9skmxeRn3ZxEvHKKBk5rDuHEECGat4gZvt",
  "key17": "4fewS5Bb1FnLScr3oNCdvCPqsSa9iHhkwsG8Ai3kwsZYqpNgNDh9H3mbqwMmhfsu1yg98fKTEfEpqgPVaZ84W367",
  "key18": "5dWqq5fwDeaMtuyE6A4BD8eckyVCbcaUAaG5775rfyZn41uY89beYv3WEfzzm4EshwwUYRUMTzb1dPoPM6xE1QSM",
  "key19": "3CLp17KukWno5KgMLTSsUJNef4b17vZ7J4QV3k2Fy7Y5z44PfNJ85bSMCvscS1eWfpCTER5EXgiicYK4cC7U9bxt",
  "key20": "4vrjQqgKFcAhCnPEvd9nwpyFSWvqHWSuE5qy1sET7oDpvswhbH1gcrAb3JSPppTdz3MCuFmFsijYh235SLZsgt9g",
  "key21": "3NyaSmV4zyYA9axpvY7ppfB11zR5rxnvv1jfX8Ak5muFUFTAq58DaFQzSrJ5HgaphTK6qJEoBtA6qTGdLzVaTVk1",
  "key22": "2J4aiHpboixgWvHQcF1E2GYgNwBRMRD4E5KqwiC3DEQTjjrCEnLZFySH4kXVZvXxLpJNtGtu7r9APm5n19sAdaCz",
  "key23": "4WKf3MvaVsAutgtNaMhmN5oEZ1Ui7g5p1zpaFxFRWsvwghzXAMh2ygdwNaQoCcf4u4ty2Ksm2A6DUFHHM4LnL2We",
  "key24": "5x7qNGAvE6sh9iBLQDvCBpFkZZswHyPojToCYtsFb84MAv8GY646gSxdAcHAZX1ZazQ6zWg967S3rhKbeFbfPM3C",
  "key25": "zHTLfjJVbMRSxZ2r7nLKUCSTj5eAwxzJ16wuhspT4w7c8ZT9tziiG3SV41L8D5qFY8LRo2jJ5W6k4HJbgU9g92B",
  "key26": "2aiizee8brGAsvxrjMEbbbCjHbh18hbhrKgiUCdL5WjNd2bVNp5bmLD3dn4kzLdv7uzUAge25jMuJ3kjbo8dGZPh",
  "key27": "3Lmf8vtDkZaDJiZvL98AN5DRjhFbPzkaCb3L2eb1q2NeExnTdQAUfgk5rkaNL5oxGWvQ5LLZtqyHapnPMVgrdqfX"
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
