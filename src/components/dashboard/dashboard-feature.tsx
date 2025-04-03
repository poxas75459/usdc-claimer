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
    "ihrYd5RYmWLiF1nYhSuZb7BShkRwmUbJ84G8EvTpDuGdmpLgxHdoqkkGja8uPxe6Mt93yTNUEdqkJwDDmJbMshU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AggsYaxaD5HELZKNnjmmnPCbcaUHjyohesFWkct4spNKP36mNwcPqWAtE54QqZqj3dAX72KoRkcK2fowJZxGvuL",
  "key1": "Xno7TR2RXUVq2obA8UBS8f1wAydyYXaPqdJscaBEiFj1N1wRgHKiXYWfFMcC7tPfxbf2fFHMsUwxm2H9dTKNVnK",
  "key2": "Cwu77uLA9G8qLKDir2c4TYVp9ywGKAaARWGPanNoXyHANue1U4SxCG2ZmTpkkziTfbYeGfwTxeNk46AQY7x7oWQ",
  "key3": "29mxHkaCSZhiLDiQspuRDkwKcVqXMtPbWNKUEULR8QdLJhXQUdwY2Nz8z6BchzRCD5Q3U9A94wtLYHYmTTXLMWc2",
  "key4": "4f8vadcMGp24a9HstUjHmrvMvBCeNaQPLR15UudPGHNhttqtUGcQEjikJGVERJFgLMvoq42VEUbstz4qidDJoRyi",
  "key5": "uVvd1bpV82piWrwrRCY17ydu2EhxcyBRy2wcTXjiQmr9unw5ZdqG3xCqNusbK8XjdLFc1cJCxeop4DFwAJyyGQ4",
  "key6": "Kmsb4A8yw64dGnYQP9BpDZJCyd3dH31sjeabFaz2LxfTiETYJf4JaibRoCEooVtknP31ijAXMQN8GFDY7TtnLbd",
  "key7": "5grjquUVoULcCJQ3MvaWRAW5AWatUPyfKX2AWxhxB1xXakX8upSHWCvTmq8fuRxfs8sY8CNjihnSAHxPueHrhV2C",
  "key8": "5K9435qPyAKHw2yFu1GMQ9xX9PyBtcWWZRLV7n4dsivUNoYqQ4u8aB4kZMvqcm9iUA7vncUxMA2X3efpJksQwyYs",
  "key9": "3nwQRXc5YMgWtTjCMdZ697rsyC4Mx2NuFzzFBoBmJw9gUW1r4oCrvYWGcm5dzdvkkPFoV2EmS3EM6M8iPazAQC1L",
  "key10": "5m6CNUntR2W6TLFi3LGcygcLNA3QzwHF8xSNT7QvD9YfGfXcXTRNuqo9BrWu7GVq8FjSsbRVZTdwe3uGPWjU4Dgt",
  "key11": "4g3SzJmLqhhqkEFaNiywWfKoasYHVZxZQ8ic7xzkXsjQaBuaARGwctbYKeHRAKg5D2sgx5b9DuSbX7MrqcLcZGc2",
  "key12": "5WRVLQBzh5LKdAgzS97JRvHFgkVYtnnqiUNETVyhgCMnfAQEJPpSNkGV4GQxovwHzCqBAQNRdDFJB7NueWuSJkpp",
  "key13": "2jAXfFC1eCd8LHmiYxNAMNqTVEHqJdqT1Gy6XXfhaTNEMKh6yRnctVRM7r95SUbfCYNQx4eGyhPYbt3SKMNXaXKb",
  "key14": "5Rx5r6PYkQKM4Di7HEYhKUUCVLugX97QLkx5HvYqXvJpXLbYcYq49qVJFfd6nDaQg47SrQiR8RP6PzbPDAmMnthS",
  "key15": "H1UnDpAvQmDrTzxMV4wYMmqhNReoJMTMortYQEhJddDN2GuBmE6Jz6jHgS5Yk7dqti8ut2gqe3ALEa95UELHtTa",
  "key16": "4gEva4rMpouqfp65SHts5DPEkU2fJX1CVbU2zyF7EgusxteH6qUbxRhB3HAMbk3TUezzTiRZvgJ5EwZmeiAgJJmA",
  "key17": "3fJZwJkQk44nbYuvz4eKfCXiZ2nt98ag4drXEL4Fazbe9GRt8WTTXFWw5NV1JGAfjdABCCD2Nnv971c3h5eGMHVv",
  "key18": "3bGudDPHKvN7bUydbHmkHTwf6qzVuUmgXg38TtZzVVc46YnFQDQUCs1pAjYUwXvYfFbqs7evgVheaSc3n2wSv7Rb",
  "key19": "2TJc6fG8EJyw4CK4zV9FLoEAmq2C6WrCxNAKpYJ3Tr57sAxDX8xhduJsLRVAajkJ3Za2nD49FSKeq5xtgQiUgK2a",
  "key20": "5mpPa1bPT1uZuFJi5kih9oV7nZWp8QVewmNpYRNLVctt8cyDamMu7U8sjkcAuaqiEPn4UA5DzQRc2LTYeRmaeqC",
  "key21": "5V2sDTVz2ryxmW9KgZQ6jrMscqvF817ZgU9d7Q4mxfXXVq4UporFRizuSc7SAvDGeuDPeWRRvvWzqTwrQG1gbzC2",
  "key22": "YGnsTM7BYuxcG8Rw5bnD5po6nTDusfkG84vCXa4Z4U9B7gfFiTNHaSQfUwUpmevx4AiiaxH3X7cNUGrkh1Acut5",
  "key23": "3fnTRvyaF9QzyXAQw7hk2zW3wuy8oFNuCM71s7nxYH46ZbSrCyThhxaxeg8gLCsbrswsw625HMA1nnEzTrqYxWmj",
  "key24": "5dSFcSv3DZnm9CDPy1emAS7tWWMm7wzUvsxhaPFEbste2psqLvPgT59XA8EpSbZC1QoyCa5A58ArQhtFc4kw6bt3",
  "key25": "2cY9okWajRMiBwam9HAnZvmvDmZS9y3G37VeQuTgLys55JrEdfFzXPCv6DiuJdbAk6gFyBBXYyPX5AWWhF3MqmfR",
  "key26": "2YL9Yg52Uz2qC6FR55LzFLeQNcXBv9DMGDyCVGy4NwCdS7gnjez1DhVcY6XyJqc9JXwu3P3TU622bPQvZPVb2P4o",
  "key27": "3cULA4gZAxcE7CMf2ivGHKS7TgyGeUpWZLH1vSBNGmcCzFpMZDvLwe5cQ93EppqhBZ3cLx61911YWXsEq31Ng9r9",
  "key28": "3HtSnctL3jH1dZ19GaRyeMBfdDwWYtVpomSkbXvta8S56xs3qiJGvPT8Mx2wTCW4Q3oecAR6zi28YY2htZmLfQVu",
  "key29": "XSysAsdazrbdwFaWn2ECFJUbhuNsmiHbMzSTbtw1SbBqg38zYogDkd2b1NT37XbAMgG8tssZ6vJouGxXY3ZgfVL",
  "key30": "5wysVHPtXf1hE6G2ykHCfsgcEbkoYsC5W5R6ApXWWU2B4tBdBRQPEUhE7SwRma5E1hc8P6Y6DAmgJetgW7YuNzBU",
  "key31": "67SzPtLLownBcJWTvocBm5Ha1tvaJvnunTymSLNyMf41BchBJtitb3zNhd8BDYhLJHsoUvkG9WsQ8BrpzyCPQUvJ",
  "key32": "4ad8v3FhvwS3ucR7VUeDg58TsKB8pxdr9Wu8Q1Bxdh5cwNXHemC8DByNRhnDaoS2BVqs3zoYf1gu2rie6DnjL1nB",
  "key33": "5btuqs1it63t536MbbBiVDYrsq5VKrL1s1fqKoYY8mX81o3qasmYpPNuN6JHwxsdqE842USWXmE2snRxKYQWTQ2y"
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
