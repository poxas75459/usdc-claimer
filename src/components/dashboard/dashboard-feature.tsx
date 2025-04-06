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
    "2kC76suQL7DnZuAmXLfy7yEFd4axvt1imXqKipVtuqhJrkbdiWMrnkFarMCPuYaRqmodfzTMqgK8xoYwo7UGitn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54NWFVhUfb8eXTFjfqhNzJPnhXFBExzr3oHvpNMaURkuJBcSgDDcT3qfDvNGxWVG5cBPqAMKuHBmgEn4oVZjvQ1F",
  "key1": "4FqVpbbqYtQDWPMy1fg85javxhQQjNecrJYoUhga54JSMfixkz9CwnGRVEEDQskNMNTAxDo6zucZTQUS55FYtjDv",
  "key2": "4HAuRVVWTJpQtWzicSbWSiAtjehTxFEtkNMuGeN3MDq1s7GZQzNXM3gNgQfb29Z2Ka16Ve6wpBqbr5Hf5drVyVUV",
  "key3": "21NioszjGo2vfRVs8MPsqGCTkHf9QPTv4CkDgYk8TdGA9TsKqMNMKtCAUUoVU3JdWWHirL37mpyzQg7CaSd3FZQb",
  "key4": "2GK355mKB9s846ynwGjwTt5JjK2a5ifWdDoy9e9MXwHE24u7sLNA4K6o1NhLRhgMZ7Vq4CgzvV7oBNcMAxxtuMiP",
  "key5": "3SM6F1p9YdbaCeT69R27kywCCHN64bv8QGDvZpD95ZJVwFsNvDd1LWop7WKK1EEaedqRGpE5Enm7diyTbLWbcQYL",
  "key6": "4FgUnfeDGGwDqm7b6MkA2n61X5JEjYa153Uon2cBoq4fcT2t9V2cozc3tm6hwE2gB4sKy7iRxCL5HFYhZrMLw6fe",
  "key7": "5fpsmudwstLGcDWYvHLnegzMBEfSUFRUTv5NUNS7f3jipqGKxwa16zXQgP1ZSW5eBwR6keRrykAKQNERbXQYuKeU",
  "key8": "5vj15GETB6bV9JanfsG8CiWHuPKdiYNjH54Zhd4GN6M6xhGaQzwqj5fYuCCxqFHDvFj8Kcm9ukr8JGoWajspyi2N",
  "key9": "4kpf6zfCBtm9tQnQ3QNwfCZUN82wD5JPAGNji42pqHWdDr7BBr2LbzVkEk8EeXQdybgCw2gE51i3uKy6abnYTPxp",
  "key10": "3hZAi38KXxNgJHRV95juQcQo8fSVHWwtxcRGaC6t9Qt7NR4N1moixoKruACe7NiDCXM5MdrwVGC6PkCUhpi5GCse",
  "key11": "4HZ8S5UqXEi7AaHLByS54JWxHWnsiTTm8yeFaExksZeaKsQoyj1X63aNMBu9m6VLU3Bv9nPwWYkLqMPzNr3ZTMVG",
  "key12": "2PyYrz4Af7wxGCVJm3rcdGipWQJB1azUM1BEmpWYDgQ8Sk2vCPo8r1TdFEP7idaP74iwdezAV2NzaRGkUwHQBAYd",
  "key13": "3P7j7Brm3sUpZw78JjTycRh6Jr9NgRn2X2TJNyGT1KcnkWnC2bXu8tdQv9vsbCaHb23WjbKumE2rsVsA7q43gBBD",
  "key14": "5Q1fbJF6JEC52ry8FSbR1t8ToDzPxkaBVCENfeFrSA77CiPP42SqBzw33gx4WNGtiwxSgTXfXRPoDhR5gRQBFGiq",
  "key15": "5oRGMZNGX7G3TxWdrQTe2SwGuVLNAq6HPtbNYynGkwgERRAhPiJqHuHy69pfcxb9xKDW1GEhYzKX1rHRUHbwzyDC",
  "key16": "3B5HWTGYu9zNJxBhg5L8wj3myZj8HGzc1jogJ8kgBoxHk8H5Qc39EUDC8ab5Qhif8p2XvAzStUq5ucG16Ydm5qmb",
  "key17": "4qiDoK3n3QwN4QRtVYBZc9z2ioSvzWNX1wiyLJ5nCZMJE61WHsbmhBKXux1GWfa5jF9XmDX9NfaNq5bk8931JGfW",
  "key18": "pdWENdHKqN5oG2b4RVqmcT92Zm3g7qtaMBeNyifRPCHVwWP2UVUyz6vThUa4VCF3i5KnQFUoYHhkdSy13rh9dT1",
  "key19": "42a7w76LfgvEbMYqtTxLsDaKcwV6gi2b7bzqcPpU5jgGWmQB7wt9eThUYW4kv2pYXFJ92BP5mFW8dZrPQHMMkxWJ",
  "key20": "yRgWB2xFn7ytxDnhhFGiR7cjh4G9DiRjVfvumCJCujvBTye158QxiBGnybuJxN5j46dSu2F2tfYb52thmGEio4C",
  "key21": "4Gu3EGFiDx98aPUbeceh9qhr8kVsx1vV2ABc4oz3uNjS7wfVifoVzZjQHLQBHXKnHq6wSVusD16qNWiXixsUSthC",
  "key22": "hdpgWwD6EdzvZ4P4Zvuc1pzRYXeQDFmb7W7YChmJAUWN1SYvctgBEeGxu2hiHFXnti4CPHoDdDCEtr7bcgWUZtB",
  "key23": "2465uS8dS5mwFR16iZFK3v47XAaDjhBdDLVgNanYPAERqTp6AEsP4FZzFesFAARRVh3YWvjYMWEbpSsSmC7StGKW",
  "key24": "3vrUwAV3KwNtzfSpg2QomDw1DXY14gC7DxVHrqfo4zskukB1b2EEL6B15P14Fn4wxzihYxxBZ2587R8Ga3uKrHMd",
  "key25": "3YVSfVBm2MENi9U2VDDMyUUz1MaZSpeT8eDHmpVhT9bCmg7ZksTjCQ28kCwqn421uVoQwruEj7jH1B1UPgh32626",
  "key26": "Q9g7UpNQctnWGAWdQpoCbcXNmVBFFXCBtMvPFNdcnCf6Sj817fBBDPq3GGHYk3roDY6sKoXos34qnXt716fJxUb",
  "key27": "2PhHsiTKpf2M1WfNF97nMvLQYcG4bvvhTnwsqcYinRoS61paTee54zTQV1AMx5iRgXEUA8ABEfo3qdBBwGZXCE2n",
  "key28": "5ZGo7DgBRbFsXnwUQpgr81pgiJ8gb7ew1UfJpmYNq5wJaVQHUnvGyRcXseNqPmuejVYqNjq5xTvLMrSFPAub2JRF",
  "key29": "3xHq3N8VgANbnDc9nBsFR44CfYMrSPhgxdz6F8piAfjFRsVJHiFcSPLqSGVDQbGptRg2v1xuxnmYWFEdd7X76nj4",
  "key30": "2DQUda8RNtYgBDzrm2nihFgNLRUvmRGwHVEDdXn4YbCNABFjEcohTLXjtXihcyP4QUnbQMC7LR98J6xSX7YiXJm7",
  "key31": "2HbELeamUJSCJjvn1HNPySWPSPW6tqruZF5tiKLf7ZvEjyAATcUkccHDqRF97GA9UpVsfL6DrGdJVN84poAnen1T",
  "key32": "1qFD3SmgmGWpUvaC8LgwZH5WGHVe5yJDTPAsT9fncayg48rmzcuh6KMcFWTEMGAmyvvxd2EtbvtZknqX942xS7K",
  "key33": "2dxgqBGpJRAtx9GzeFXAenK9uvYxi8nwox75zkroHVVSQh2UeXF4uYxwJoQppzdFNKy7waG6ck2MkB9cYrXxt4vv",
  "key34": "2TiNjLxhaF6uf5o66tRdu85fygK63tERz65KvpyY497Bt13KgVe7phMhJrkDgKfReDQZM49bRRWdD2ZmJp4BbWwW",
  "key35": "65tzHe6iqb43RfHUxZ564VGN7e857i6NRH2gkvDonwAGL8TFcVCgo9ZUPzcjDpmkjsaxnboQxtped4RMeyK2YcxE",
  "key36": "Wuv6UWJiQ2qjk1uukLMz486ber8LN8SSQczNbMdibCVyHDgiNfv5cTBHQ9WWF3EEKudYLoz7JAZAuyP3ymNgWsk",
  "key37": "37rYU4UnTYH7A2dNP1qWy9cZNT7cBSThfFPYsXyeu94cPDFiJwpDVHybnYbaLXAk5ez87erZPRePorte8Xwj9y7k",
  "key38": "3QMDbFjzuZjb91LE6GVBpHSQPejZ2aPvhsc2xVSbhFSa1BqJGj9fsMf3pTc74mXkkKH6PcXc4CdKuwvwc8MXUtir",
  "key39": "4dFyWbtqGU4ceLy7fmQppN2fBY5NxvVsDzxqYPRyBkoqRDRCczSnEvWChr6YcJjeQYQ1gR5CZJHoSnxCroFhvQAM",
  "key40": "NMbmDK2G8Nz9wVyBJQ7KkKBk8RF1iEp9x6Q2J4EsTDTE9NLbzUqNkEJu2f4bo9FEkt7p2ftTiw6Ybvz1CtdDeVG",
  "key41": "28RFgnaPuyxYHYE892qS1eihQFpgQBdhCJ5T4DeZxYHRbzt2Dq2RPUCkjLi8EnUG1s8t8WASuiitup3gbNeWnjP2",
  "key42": "3br6Ds5azWffbP2vzmcW5vKcF4Am9t4AC6kVJEowBBwHnX9kDx7EzDfjrErSTUfBazsMTiiNjN6ez7Ed3N7UmDyR",
  "key43": "3yaJuFPVNyeXHq1hrut2L9ybQHSpVekPXDiaFUQ6iJKzR2mz23V6UvjNNiGHQWkW42BMPRBCKwjnAvd3eax5ukoK",
  "key44": "2pfF9DTBvezTa2d8fCbMgyhQ5hZiFEbbQgy9notcmRc6r8Sw9EFvtWkNqFdhB6wjLTc9KTi5AVyqKUDw8yhVfNvG",
  "key45": "4w4KYf7nLyUyGNF6bB4WCRu33X3Ah6Bsx8nTMv9J4BpHqp9cPUghd6hveSWANgYqQSeVT9ZZzxqUDCRzRtnik2bD",
  "key46": "4w4p7CoymxqSPYQV35HNsakiiSMeVNycdhnANxgsBv2yCW6u85NMV6LuGYBFUmTq4GtjWBNqBGHdTWJcTygDY7gD"
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
