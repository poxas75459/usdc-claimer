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
    "4izeEUURyuu1VJ2XMhrmyTpRtt7e9t2576wjdgrs9JsXFHy4azniHPFBdeGemGJWviBsQTMZBYmSmJj7QsEtiLKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxfmx8rrxg7GqP95kK4kNHFkGYfbgcJUXWab1iry6VEFo8mqV95VnH1ii6NxhuPdwV832ismsRPiXKNdUTGeRGo",
  "key1": "4JCDxCwfegYgym47KdSz3rKE1GfDFXZj2zDGUz2tBPZ3gV4beXVsuCTPJC3S3ERs3HJzwJUTJoeZHRcvyLrcZu7z",
  "key2": "2P8vyFYV2q8TCwCon3gqLYn2cDddD5wLEwVAhwYH8GRyNaLqj9JLt1XCnwuqbNv7gAPXf8EwXDBwKQYv81GgxABQ",
  "key3": "3T1Xp6nnPquTTEy7DdnPFSDWTQ6SVB44cyZsfpHSwUbgsyww2swdwFCZPngd7QyJ11csaev48PR2MRRL2J4Ch3d2",
  "key4": "4ERqUq1MFSXuR5uHJZax2DBCc9nbQKDqsk77kU5xJUZUB1DhoQxxLtf4SjBU1mEBAfomXLuvji8hou4eDYRTLRQa",
  "key5": "2FbC7bjdDTZ3exnofDBwLJMkMiRYwHRPER93DPQiyfZFRiTY7ym2RhTY452AZhcusHh4ZkdmArXckXpQGogPe1ss",
  "key6": "4VznWgfNCycu8aSvpcvBuqRDGL8eZ9PQv3ZceXgewxUrjm2SyEDtxaCB4WbJBjWBXP8tLn4G6HFdt2v4sMzCd1M7",
  "key7": "2UwiJLLtjJBncrY635wa9h9edLmdbyYcoTYeUNmRrE2RuKqauBBVfF2SSY6UbmustcYAMcNKWZgZ2qtHzrnhjux9",
  "key8": "26kcsZvDdK7HXYC9Qt1KpM3GGEwb8a4xBTaPbfas4Vderd9ng6WYbqgYLGEvd7y9H8PCvfKdFmq19uDZWHmf6ztM",
  "key9": "5umrkMj65kPHfLy4v6wHLNFhtJGj9VrEArb7Dr5ZBdyNLDfvgShsJXtKLERrmTz4kwAjydNLjxMcu1GcUw48u7b1",
  "key10": "3j75zdzLPJo2kcZjZue8y5bSWW9rwXNg7XgK5nxe9ZRoPaZkeRmrF92CEsjLwFDgSPbnz9SUns7Y2aXMPfvMoDm5",
  "key11": "26ktrehR45WTbG7ZUoMiBX1Y2Hcu1L7n1dBMoQafLTYxbd4gR8gKzQzXKgRRyC26eC45eTKWGxyGSMetTy8anHVn",
  "key12": "5WWU4NaoGWGnE4uSJfmhDzLWrKxQtsn6F9pZjqvXMjjBAnPe4G3vZLbs553mg4JSZbqAmdFTB4qHTGecofXVqucA",
  "key13": "2SvXvRqXucq8ZRwAZRef1MM7qFAUvbrXkaeApjKYAWcHGhnzCyfBTcCVss1RQZ6D5xY3TrPRrQ6xXA9DfjLSDN6Z",
  "key14": "2iad9AuvAv8i59zKyP36c8t4V6nMnGEeP38YMDMWJgn7idmytrjR7PDxMMDCUgWDfPj3PV8hbS47fQb29VGhVHt5",
  "key15": "5Hdz6TVgDyncvok4vBkHprJt5LMLJGtJjEKtbRRwW8BB4pZ67Evk5GJaiivtkMJ7aASuCzkD2dmr5jdZEQbVtG8J",
  "key16": "3MkmKDcabzn4tMDPMQJNVs2muo8ax7EThVfrMAewQhCaQDpt3W4GP3i7wmC5RcEy8ivrbpSBL7ttQaddfKYHVyEi",
  "key17": "5hG5qfJ2v7GtMrZrLmy2XQjiaioRP1GvgcQe7RdeH9diBrt86dim8R4Qqi4b93bL77ybJKg3DAw9pPPxyaVS5WNQ",
  "key18": "64s3LvddK3CjXq93sgHam2g8Ac7Gje6NtWTEMTtvgF87jiKgpdh3UfD7qCNVKX3gYJJR8yvfV7uJkNxu77PqtNb3",
  "key19": "4vbFScsY1PEEX2sVD9jqKE9vXmrQUSLUckp9cS9L9Zw1RskRN1KjaEKuwoKBb4VpmNxui6ti5ZwDBtUPNhVEygcb",
  "key20": "og4numUSmq6vSTQ1ufbgkgGuy2N8uY7XM6dmYLSi1LJ64XcfyM9nWVaXJojrTBNjRiEoyAqr8ELcF1BnUMgmpeU",
  "key21": "3DzJKSqhmv7jkrjYHYq67iMo1S2xxNKna6G2Z5vydDfhVWy8EjQe9r9FgZjebmfPwd4KPUzcvfhMjhhtsZZcfJih",
  "key22": "3TjR54bnomSktwezBhpbPPeQvCzFXVyybB2KTwsWCUhLgSm1LEADQb55KTvWjsA2VZ4XrSymCbWEmuwEwGbd8Wkx",
  "key23": "25giTuK7gEAaicSR5QeVVxuRZPAkGGyDG1GPhL8cP58NPm9pCmTJ3YBnK3FfoyrDSmv7JZufqeqMNgPd9DRxjsYr",
  "key24": "2PbVop9x2fZo3dcCCtpjQjKPuqJq4BjotXU2XsUmwRf2gWUB3ZgsAgjA3qRMpvdXQuvdY2ALNUQYgYTPdxgqT7Qi",
  "key25": "3m3VupN8drMu6zFvFVfeJQH3bUGZqYj1sCiAvDFDNBiPpA36C3NDUMKuB3pFmycjTKqzFqA3YhfnmXHAPudCBsdw",
  "key26": "2tQZ6vTN5DeVWLBtU9jEnnrhxMxbTBSFXuNXcG5YNQL7Dg3fdZ241VcMkrbqDoKK6qV2nCGXX3Lwch2uKms98Kfa",
  "key27": "mcXwUbNWsrXokXj1AKByhGQdbsffe88Hs6aF2wY6a7248eBHLSqVdM1iFKL1cTRVGHax5JUcgetcDgnQLt1bnxF",
  "key28": "3Edj2G5CFLFfRApjpC67ugu3AJqJKqpv85Q72bYQMY6cnoeNnE9GEgPb7mVsLjZHwmf4vQ2zxgtrDF1JpRohwXp4",
  "key29": "5cTKT4wBx4n819MfKVqC7hZHnGQxLMYQhyjRvTuEnH1Scj2cUDXvf9azgvDeoLodfL7oPWcMvCPigsUcBRZ67kPm",
  "key30": "3rujsYfuFQEi1LfNu7YQZ2CCbHExqDcRVR2eYM3sEMvfS3mojhvBnS7Qu7NAtiSpPL7mixyY2r8f3e3ippqanH3F",
  "key31": "4QXVTceBMaSKjnoNUpQyLub75Cxu1xniLYNRLa1rSnMWLssH7vS6dcmtgXVETRK4JETXhxxkxng69xCAjixDGJiL",
  "key32": "4cYwE6TKq9m7m5CGGRjCKMb3bTj4WWFRvSYiGhZTnFxkqkdEqR1fmqzjS7HpxTMXejan9ywjtPvBvf4Ah9tcduHn",
  "key33": "47kprZi2t7PugDergDvburjsX8JasNETuWksqTLXsQD623etZzWp3ozSmJLEGGpx4wkZrXQt3vxYHNxJrZ74LCQm",
  "key34": "2B8aJWeBKqjCFQiTeQaucyRSWzwvbE1i3m6N1kE3GcuGzn6djQTcCk5TXPiaK5724j3Zsi3k7SMqGpSkeSqLoack",
  "key35": "5mW8fmmGNNawHmVn3stMEdVVT3GBnUiCn2Ssa694faExiJWQpDNU4ChEVEMcqisnpFRP3nEwLsAK6b1vfpbBnm7h",
  "key36": "4Qh6A1yqcbEzELUubz92hxmSNrGtMrW8JhgPrurgL8APGQoKpcGjP5WHX6hdziUjr8C97Gk3m6v1Y8EgyHxpT4p9",
  "key37": "49FcvkEoKfZDsGP2NBR1VPsc4sAkDPwkjcM9vvv2naHJvMffQwLud1CvPrrKonK6E2XwN6PurNRQgoTJ8ieTZBJZ",
  "key38": "4cbYQKxJdVLuxtnzDBXMQBrbZ6gsVf1Wg72NYFn6GSrnSuDUa3ExASBfQmbNEMP81MmPZr3qZD2GvkDGcmkCXfb3",
  "key39": "5D8VqyjAAejem23FbpPiQ5mixJ3Yb6fzdFtDsGCCAL1HBxcL4MyiNDzAPkXG4LEXnNmzCuJye8VAFSVUh5zpxkT9",
  "key40": "2hvU4RRbRMryUquVMNN9A2KtMqgnGkm5vN3sXxckXmGiwgc243V582fjt4LQSdbnj1Mx2MzqHEykSPNG9e3oWDN2"
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
