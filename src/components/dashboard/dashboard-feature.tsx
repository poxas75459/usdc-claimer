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
    "5EyYg1t7DTU6KXeyn5nc8dVHMDmW9LvRJvRuEAn4bwr9nN85CP2ePqa9Co72cW3VFQLupizqeg3ykMfvJKNEZpWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPtyraNaq4FttvgkwKwh4RNDAVMefsa3LSmGgtYhxLGihbLmpSG597aYJEhUWqNUDe8PpGcga8y2eErcaMpCCiD",
  "key1": "4Dq8ymvaHSQK4cwji3XDqomRJEijYwViH5F9Hzc8wV5a6co6u3ztvb1w6itBBQvHUf72hqz5MoHhbkTgTkVt9kbh",
  "key2": "3KKe8EqbzMrbUq6xLUnuLBCtLuABu8V4s5BiRL4rBmYQyw8HYqt1mBVg4rkJVCasUipvvqfrPueb844Er51phkaj",
  "key3": "26fhbYN4Xomky75QtkQyHXmg9umgkExBftScksvJinUtqNKcG9Tb5x2uqHowk2U1SQczBVNTJUZi4F4K43HNcYsH",
  "key4": "3uUStm4uQRYkwPojCvE33BpY5JaaiBeN3mYHopXwUMWJKkik1SKb3Vofhk4g9bWfnyvxBvBad4ZERSpE8JAkSXT8",
  "key5": "5GU5efxrKsFwS47LxfekubZnTNYiUrrDEykLWzPsGMQReiowr9SubZFSc9VFqJf94BCxVRivdUKVGseWh3WNpfgj",
  "key6": "xT8CCJVzEUaFu6wSNCbgwVX4ThzUEBVvTaT49PSsTpNj2CCQjdoChRGWPXPxvCR86BRfkMekSYreqJP5BuJv5jA",
  "key7": "PZCiHPUA4W5V6Tm18xjn8KFvE76wYckocvqp24ETTwKRv6egSG5EtCx2ghM631vgUonDkahv27Zqefxv5rpeMBZ",
  "key8": "5r78ij9TkFaYLgCD6vacHhC8L7ZbxWrKaF4yGP8FuDHUTqBsFRizWULbP7UBrqGc4PhE8ZatPfKpax5jrGaYY5rs",
  "key9": "3E3rWZh2zp91DghWRDbiQALQ7PbmbTs9foShVX1bRWQk7ZdXkoizEdFQ98L97VivHn3zJFCUStwGbtfBnL8b8h5U",
  "key10": "2WySj87JXiTFnX86EzSxvNgdXh4DCyGCrQ3QBP7xGtPP6U1dwA1UNsGobw5ANaPioHeejHM23vFJ4SvagCBrnEvr",
  "key11": "3NgpJi45qKXhDiXpDEG1fmyL2QuJLkeCjT8xQuGZvYFbunHXqNeTK3vEqX6mGn74wtCbbizTK7NR9VuU7euBnYmo",
  "key12": "4JtwUvATzN7YxRsyYcqFuhsWSwy7XQqCsXwVbedQKxtU8Ncza22uonPXWJBJ9H35Excfdn9w2CGw6cjVnTb2Wq65",
  "key13": "38TR6yGoEdm2EnXkqKgPMXaYiETCRwX7ZKqV5SJQN1xXB9716VxC6rJiYdR5coQm91m7wzdeFzcrPvThnbEmHNvY",
  "key14": "3VqFwpZZyLJ729dHtfzBWi3Y8sQ8pECuwvVTaVdZT5mCRnAxT7T4H4jDEyYhF14p2Ew9AYxTtrc1LFWMPaQKhi3U",
  "key15": "5AxFWDaLxrAgKt2p6mHz7G5wZujAexujaY2JK3LrqKoKgMGDfYUjJERVrsQgTjk4LfchrmwW6dE9sFTe5rLPtR6D",
  "key16": "38vRRtyPWVHRLcGUbhGRGJkKnf1RpE5PrwVkQLxk8bm2Ec1mKWKrW1dRJLvN7P7gLJUCXHvdEv1pVCegHVJbBn45",
  "key17": "rEHyQ4Apotx7ferTwVdANuGiwq2LEJHbyfWTd2WMv3fhMSJxCHwqr3EogE6VwrkKpdngGnC9CRqP48fDZh6mHED",
  "key18": "3wpd4HGrVhnpPUWAgCfMAKpUofeRR1AsbpReWmfh9scUXho2KxgWZzQHdkTbmEReJ9G2yxE61WtQx2ufLRskr3b8",
  "key19": "zvtTjEVd4EjJ4T5bKWhUHqv5wmngQwmfA9kXgM33bWrUmYg5HkyFk4jPZHLGYxZefW51xVDnPTKFmwExfMk6Qy2",
  "key20": "2Gv7C8BASy4uh4k7PDgsvA15puzQV4Ng3yspoqMFK4dPogxmtS8BwHPkVNxD5dSTU5pwKewk3C6pTzRWx9XcAEjE",
  "key21": "vxFvxVhuXbA4HFALDUsUePQqofvQTQfS5D4Zr4D1ZnE3PMq8o5PUGxs2U2E5VQo1iWEwVKRDdPwq6mMMGp5SvWp",
  "key22": "2DiFwd3SzFtYVsM6yrqiYhFU9xaBpuEKFn2kvnPB3D9b691JvKXVEErymP3Q2wWHopMGxX4FKxawrfMtBVc5cfdL",
  "key23": "4HGLk7iVWnvTrNTuB9p2QUMvfHXsfHEUombV6vQehucnMdG8JgY2wekmTGU1ckpYRJPoqaLnaQf7hDCgnEFUTgnc",
  "key24": "2swk8cAv2kQvP6YViQUgMMVosiBEh5sAF49ateRq8c8YkduR7jwqwk1HVaU2bi4Gys7tazCEAHp4Xbh9zvfVte3w",
  "key25": "3QVBgKnY739JbZgAcNYcfnTNbUAN3iWBYwipY2wAGS1ixVseiQVoCnJeXZz7pm9mLQ2f5SZipzdtk37bpHmYmYKm",
  "key26": "4j3CQ4f37Ym8YaVDvYfypP8VKJLAR4h76kFYvZrGwRv7M84SGzCqPyaJN5FXvMfVE3K6uJEeMbYNdxEWqz64SVnE",
  "key27": "VxQrcEd6k9JxoRK2LUDcfWJZoki3bwdF64omyGn6fvbkCkBpN7gqLgcNyMDimdTtPxVBtimrmyoYKwobKUM8EnT",
  "key28": "2Hu5nNqRqgmE42A7c5V6c1Gtbknya6YhpBuTUR9tS7PyiQ9cvZhJk8KptvA6XiGEo4BReZoEZkseYyYN5uBrv2HX",
  "key29": "3vgP9DeKeqedBzPKniVGACCPHw2fXJLV39oNdw3jJT3XQTH45ZC5LQeTq6ovuCiHZkA8ouDbBYgewZVxdxFPx7AJ",
  "key30": "3uLQo1is6JzsYophkJuFBS7F3G4inUXK44AkoEkg7BdZmYa9eGKALZy8zkGbpzEKWwCVEjT7XjjTf1u9D1PYgCWV",
  "key31": "4zbrs8qGgrasPjJcDWAUgTd2eaD1p31qcLFBFtphgxRswW5Ym1uG7DHohGGrDyuXwE6yREnBrF3BWNiW73cYzQtT",
  "key32": "54xvyeaMs8GkPhdL9JALL2NxS4VbvV4SiwcGgCYYfbnRUVZMJ9q3qAVB5c1PJkEXEWj6SRfqcsaExdaYNnbyjjU2",
  "key33": "j9bX15FJUcmuyB9XYc3DVFU3udMfWhGX7HDDJchW3dc4LTP6RS1c3TvfrhZdFfhVq4XQj3zZGcMHratRmj3nbtX",
  "key34": "2h8RjurwGhJJGZj8nwFwuKeGurYDxANPfAoAAx2UPzgZE2rVqjvtiommwVFt6XLoxu1reRVe8WC344SzVMJ7pmjS"
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
