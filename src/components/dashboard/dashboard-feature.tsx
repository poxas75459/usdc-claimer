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
    "31BREASN436rN7rNv1xA5np6hiit7C9mTqMVJ9VebeoryPpVU8TAVgc71eakEEyS4ow3E2Te8wkAN9DzE8wCZVf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZdMYuAdhr3CnwANgrLddMkNNvKtytmQzVc43urgQNbfW7Dgw3FXXwRDEKW9sm68hTzqmrhHAxoZqKiCHSqSj2G",
  "key1": "4FdadDLgV9oEMYwj2BgzVj1D3UsZXWpbvbPBjrYFxDegY2y7VsastWowc4UnVJYgvhrTvyUENSNs2ReKNhqFpdzU",
  "key2": "55j9uAzc1onL8UV2BQtwtqMc6TN4XdZ53gxPX5TUFexUHnJv2ARbBJbAFze3woPx4NuQALDJdMk6rvPzjC9kLFEs",
  "key3": "4WKp5RLnTm5kgkfvCgzoqNrHG5s33md9NetoBhFyo2E4YGjR9WAfmxMZNaARYKzknprxWeJrs3ekBiaAavrx6W47",
  "key4": "4dVkSsdpjDHhaojtzPo58kVAZrfvtS7EK4utTkqafo2epZFTEXyxGL3h9MLg31NPrjuRHS3UURUa5LxLMKmNJf6o",
  "key5": "5s8me36kE1mLMMoUp63p73cqFeCvRRKts5oZYvdQJ9YCkCLAxpWH9CVRMjzdVQ9oXzgMkJdKoeo7Ko7DE5zxKxtu",
  "key6": "8DHqMquAa7Ja2Pj98TMrUg4QvgUKw3xiNHvxVS42LE11KpFdhk2GQdgXKEtbNPFv2XZh1VGNjpogWfZanAC7TN9",
  "key7": "4K7SgoFCURhUm18Hjw7XhMySzhsWCm3j8LeCUgofQjavMELvJ9HSnH8GD4192xMdJL4fFzbEgdADYLkCtbU6GVJT",
  "key8": "27Ua4fvUSgMNAXVNb8BDASKrq1AaQKuMmtZzEGhy6QSVDNhx4gR73gFGo7hhk4c923DQmvZCHq8badAvKi6ZEZzt",
  "key9": "yx88Vy8JqJ1p8BG4Q8vyfAVWtuL5C15CYBqyESnyLZJ6mFiYwA2fswqoe7dygRFoc13qu5DdHKxwNL5L19m3Qsg",
  "key10": "4W2sVNPp7Ge5fXXeEPz9WDoWRQdxuiFVBQBwnxFnbg56Gab1P7ByNbJSDSV8kmx94HkaTCnV8i2q2h8M6xD6Zvrr",
  "key11": "5bqqEDDwKKdzMTo2nMdASXKnAs7YGrGN4uCPSYrHE4PCNiBZtGHtXS83NEip7z1BVkYbTsqEX6pvsgkTVswnMyrw",
  "key12": "4sNKCqAL9DYgTUCZ2HDUv9JKF9AwPw6sKs4VUPCG4CXjT8d2BGkJpNcSQpAB5c1JmhKkz5gtZ6A8RPDT7RsZG2Ln",
  "key13": "2YiedMiEhtK6hdPdEhRQF6Tda6MCSnwXWtYYJwEovWnDCWUCP2gTmScZA1ZHJuZUygRebg74gJjqmLaDNDcmfWZ2",
  "key14": "3LrRbcNyi12abA86WS9NBDNpdyT9pAFY3ZPxPvpSVcsVDaSrC1uY1bNbPh2ALWKniELAsCFyNWbc8ZMbZ4X3wv9i",
  "key15": "5iDAzuwSBkyKnjEzb9XxpotXaHYQdVGikqLpUeztUzeu1iTKQ6Najq8weoRFisfacHUukEwqDZDi2wfyCPtqHvB8",
  "key16": "41b3iyZUbsEkEDVS2FKNu9PsSqAHoKuaWgYHqcPixbDTY1rpE457bDBQR6ZRuVoFoLvqHtzRYD2ocPvQDcAQRzR3",
  "key17": "3dRGeohkVqK8A33X45ujWK5Dgyw3xqN29WmJVfKsFPBj8tKzUmgD2JZwzCnMqnG7KdDz2Y1WGDkFxtUKzvWmzs6i",
  "key18": "3rz7HyiJsBJCYcWhRiWvNSq8BuvcBmDcPLemwZ8JX8d5SPtSZ7B7qGf2xumTmKHWMJ7USgAJ3BsaGH9P4CdVp6bt",
  "key19": "5afsKd8y34YbNLmQB77M7dDkMsNNbtUZxV8mm3VnK9Z9on5txmosGtE5mAbuJX5cXh6BWSgSBdp9w4WCcARgs7QD",
  "key20": "44o3jqpq282pQGC16zzxnUrLbgDjQmFvsL51YrC4qcn826ACPYMPz8appXSaAzVgkh79ZrSddKk69XrkXJWMdZVw",
  "key21": "64xWTL6k2dtpC696FeRwo4vrg2QXJi6KFiLhDimW5fej5kFMJpGyK69uwvgSfek63BijtjTzfPHrCyFsGNenuQU5",
  "key22": "5a5LaoE2SH99FqDD448whJJg3mK2Rwy5T3vTKj7nCUYSujyznFTVh6EBUw6g2jxRKqDjbfQRNzJFYnkxSBFssTM7",
  "key23": "2XQjd2spPKJu2ufEC77hbQjkpLuRdpWmBGxkAMpKfAgoENuFuJbvhEaEA5R5TsaHe299ea7P19pDg12UfGJkvGq6",
  "key24": "2JdNDHibAR3SKcEkTE7tfCcMknjPhqvH6C4JTgsivrLT5HPMvDmrNK7VUpfTTr9HK9a9vpWneCLzqU4F7drb4DRx",
  "key25": "44TemVwakrUtqFVRWchqoAh9VC5f9Qk6Du6Q4Xfu2pycpu6zTYd1Mm4yXTQrbcijQS5Ltv4md6V5CxvhoBvKcUD7",
  "key26": "3EZN2mNPUsdpzXweCALvpGAA8tC2GRaHTp4jmgzzocEQEqC5ZSajjieF2z5kzBguMTPxM1VqMa6RC8jfCAX7rXxb",
  "key27": "ww6XxN1vXkhtmW95tFByfDooL28zAEvesdgnjdBojzdePnwyetyQc25iyU25tq9D77iu3WDuSu9An1yudyLcqgk",
  "key28": "9qYZnkdECsekLfkxcKzRGLomYM3ASoAiWoESKFTdKMXH4BKMzt5VJFGCoSKX5f1wcD319eAjUqGWg1QKb9Uze1B",
  "key29": "3MqNAE5hGGFSfAYfFrCKfxEnfd57Ly43TczUQB4Sg5eAGbqHrD6ApMpwRXGgknMWeahE6icEacBso3qGnm4HAJCT",
  "key30": "2wa78iXxMvxSksfDZP2sWEYQgPzfNKtH1EHxjLK4kU4EkMAk5bkcy4VuvUwzyMe1F7CdUpoGVwN5PDJLhqjAzmyQ",
  "key31": "21UqKu2unAsdLovgH4gEgQygEXwu8oK7CGPb9sqrwCNvBtrDPezQH1pHonHxBJBsshi8cxZRyUmwxm5KYacPSisN",
  "key32": "3i7PKYfyovZvhyjUEmWRybwcdFwCrtrzxobwvFjXQvX8QVFutMiL2xHageKiPX8AjpgZNd5MWDpGn92jkvS8DZPb",
  "key33": "5Mi6xfauZBX5PCK1g3MqXMCGVfdQkBvPJv7rQJK2gdbp4gYungicZQLpBXRhtqx1u7ygbUsJHNgAqTAn1yXMGt68",
  "key34": "5J29SGRQmFCL2xQ543JhjqcVq3gJBtGKcGxg7CzXQd3P65uCbs3GHGydZ9KJoXJuYYkj7XMSYysnVQTp6AUNxM4i"
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
