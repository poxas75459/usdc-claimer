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
    "PvKqAJxLgJAXijWym489Zev3MoJkzGfwu2jn7s4HeLRDeNv8QCkzX55dP687ZysRgVzpng5mqvWs4cJgGhcuVd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFm4JZ5wQWy997fdwN1o1ocvt4TY3bWePUnyfuXzDw6rpYRS9SDhoxA8tDSdzY4DsVZCNuHRqwJr3rbjj4WAFMz",
  "key1": "4R1c3pFNGACE1cooCNKhhnD4RcNteSnKVSAiZX82XxadcJHPp6fPfF2jPrDiTczCHzDF7foqu2UtTmxD51TkDeGe",
  "key2": "5MmBWovUVFthi4wMgaKzHH8f7yWreNYCJXaWFyDdokXymtyaARL2psFm8hM2VoujM1R77SCvensqM9XQFRrmr96k",
  "key3": "3JUHcn6sjn5nM8thyws9VikTB7WJVmraNacg3PeavW4qaVTQTa22iZu7EYC4H3MNYaQ37SoC1qv7zbbYG4gSNg2s",
  "key4": "3XQK7ZAzn1uA7RZJhXiLHPtKUu9tJY4Diba8BhZkUQuECbWhCcAwtRvF8wE6wa69NVPUBocgqvEf1R7sjbogGAqR",
  "key5": "reQjAgc5czeLhCBsWWKGFDpa1keVQAaxfe7biuZPpxKgNBGqnuCbKdDa4zG2pbsq6f4xzzdRjYNSBDnFxipuUCk",
  "key6": "2ACUcgZeoiiu7yUNqqQY3kR3ux6XrStKHVyRNqxTDR7BdweweZtwWhZkPKjUKm9ygkynzwgV17wt9yWwykYTE6vy",
  "key7": "3AmZhX8P1Dxj3Wxjxqiq4aPk3i9quAbzQ9XVCUJumMVUDp1DsaNxLUjCnxeFLbg3VHXBSPmh5frvfv5kjNV33yH1",
  "key8": "5DjX4xwFfdeX38JkBe3QPcmPTrQy1tqus1w77vzea6H1BfBSCpuLDaZ4XKqGR6P26RharWzUchmP8m2SH6LCt31p",
  "key9": "PPMZJHcvUczniEnJv4i3mNasp3ebyNn8jiK5SKHoz2CerBRN2be6KjRvSn8CrBLoQdpgbVjdbVc3baXZ2H2u3Zm",
  "key10": "2ZrgxipNpNbJda8AE3wqRkLXKAZj9RkhfqgSAEVv38TrjAZg5gqJoJdueWqz96F9KQK6ijn2T3iKQGjb5TLqx6CK",
  "key11": "545JE4pevjSwra12HB55PffYtozvzKRrEubBEhGuer4WY1DMiEH4JU1ZKJx5WVeQ4hjd5Fmivwm5B6AegHUJcKcy",
  "key12": "4wYkctrk8j3pQw9kv8bybUEtEpfCqwCtqGbgGYs5ZKHVaQcdJkr1SWT52b93s7jcLgBvi9ASeA3XQztezt252eUz",
  "key13": "5QMfRZoqeagvUzWCvrUHJ5egK2QtJxXHZV5RtugcZGojguBXBFhyiNLqUoaBKjouASHuLv6DMXKTZKmXoFqE3Lr4",
  "key14": "4JbHB9B4DiGzV3WroxwzRkVc8Rk2WfrvqxMU8dFemrShQMazcUPmtMvMVhwbWg8sy9evmVcPudBV5eDxztdwiZvz",
  "key15": "594kizEv2s4F1gJUbeVoi52W9Tbt3ovwNNrods147N7aZqh8V6TB2v6bfTACfQjTqynFqrN9RbeEh4Ys33PxWjcn",
  "key16": "2Lcd3hkjaN32MuLQhnBeeiP2viqLNscW3Mco4vbwLxAi3UAgPnXdG9rxsMcTz9c48pZjyMWDTG9trNKhNSsVGyqD",
  "key17": "5mSSasAMkh4yy22QrGce3nZfgXpM4i3XuGx99KHz4mC1n5Wzx4Q6GYswxRNNHDF5ehzCsLs9HzaEQaWs1i9q9nRQ",
  "key18": "22W1ZALMsnnxmjbdj2FtdZDKkhrK9DdvEr2g6JTprTEzZ9ZEq1ZB1NVD64RK5TQ5oTDLMZUQiBZFiMJojna49muH",
  "key19": "48eY8XJBadS4KA4g2MVpAecbxPLQUQVxBPXmTuuzuZJHtxHNAsszLP3St6DuTboBgFF4EDxzhZhjugsPSBQuHSQ1",
  "key20": "4Y74cTcbRqAkjwuRaaArD51MR2mbumZA1rjTmGFju1Zd7v2iGrMVnqUuNGyiEN7tnBrSA8zrAso35gqF5jQ4etQa",
  "key21": "65AppLumgPybXquh1m5zyGuz8cPEXbqxtgxzmj6wLQXZnMgfkGxue8qMotjasvJJ5adjGJHQeM1VsUs9gQqjLoFn",
  "key22": "3CDBALYbwzSdmw5mLyQHxYS7JdGAMxsk4q59G1BSc9VLvf8eJYBDCv4Zzy3PsQnjSfjEmH9rxxcQhqX7qSrPFQM3",
  "key23": "4Y7Ky5nBerDZmkWvd6yJUwK7tx9WG4XyKp6zvCmGvHkJJvtfkhX6aWi3PXp4z5Dx93rdxmQH1sba3f5eSuGy3Qjt",
  "key24": "5744vfayNL8rvqXWxqEW1Dh5gJ8w5qxMRNHM6XoXShsYk9RUgDsJwr4SDeQagqNVMw3SpTo6fZXnhMmymVKVL9Cd",
  "key25": "4BqwAjgscqDa5cd8TxH5VXfcnFD59gKLbwtu6taCNAR4shj2Z2o55E73v1PRuQMd35DVZE5tDci4gxhsCjs1wcmN",
  "key26": "5RFK4V8fTiMzyJSiArEMNuACmfguwwRgP2R7NUBURbDAJtg3QdzThvffgnGGaungSUDZcLWq3Qd8Tm3ztEBCSiL3",
  "key27": "4p6kvBXQFVy8E9J88Vd9d9NDwegvQSPoYm9SPYmwgV2ofCfKA3WpdPfzoVw2w2LWTV7GRFy5H5pYFmrEp53DTKz8",
  "key28": "4e6WKjVqviH2XvWQh4JV9uTHPgRCXJQKHgmX2Lc69r4LMrZ8hJ6sf5PYyvk5SDJhEZ16EvE7YeNLBJEoqtV8RUqm",
  "key29": "2u8P9pViioXEN54JQcGLqYyimZ1JYPMBKKXfcsWHqiWCvXVZdQMehvpchf9qndzfpEPrNwqbVZgNQbRPgbYPbSbB",
  "key30": "4d1oiRJeBeGt68zcbtTJGj1rtg4PT7Y24rzxomCUotsNaJBE8MW9zyQSRVhcdLFcE5ypfc1kfEnfcK82mXA9pjG3",
  "key31": "55Ry4EtnbKuksHRx8SJXqbe1FZ2TqJUDsEapLKTQGanGdTUyQVQ6kK2SSfaU1mTbBpJezudDnKbcfuQFuH1yjDg2",
  "key32": "64SGRuD2mSJtvPAYxJDnKoxRjkZjpVD9dxfmuEtyaXoJuib4y8xg2bpAo1chYTuKsEdTDbmXg2trPZVVi3aicWJ9",
  "key33": "22asyA7i4PmXdX7wF7QGSFoakAJnoHiMwH4Cfj1JZUgdNBNiAXeotLSkGzxPX69fgNUpAx7HVVdqKeTfXFDXYFvK",
  "key34": "w5P7g6Z45AZXnuNig3Mx3jfXk7U9R5EbsSYDW9YdDbsQSLv6xSQoGEtRo4MqGrTEPr9zXmtZdD44rGv4qKPBq2j"
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
