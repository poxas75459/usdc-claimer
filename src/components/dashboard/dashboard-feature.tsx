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
    "2nVWpRopHPcvh33LJFZVfELA6hSpVarzAyWEAA2U994wwX8K487yqjjiKTNq5PQvHyp3s6uJJbXu5UEdEMUrf2df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrB75CkofKp5y64NFD4bBhHCqb4FLXVR8TiFdbmQ1FbVBTK9VWjbRKMaoF2FGvu7NQkGigKHrgGAUNshHXq4XGE",
  "key1": "2cxSUsdkv85dpzp1nv5FfJmhEr55w5Qz73jRygAK3p18uqdGutrGaUAXDSVBBeifJhKZK8Gp3ja7mxfJRwZyCNeL",
  "key2": "3HRNqnsQh25eaBTX9LBu1346dAduRf9Sfm7nMyznPCfXLq3QQLYTn5V9Q56SomBe5gkZ1mMbhJSVotqyXNArBMir",
  "key3": "25WgYTM5T82CJKkeXMiScD72KFLxhzyZnE4mkZ3LxmmL7Fqzn5f2KqGmLa1YkisUtjYFagD6NTdNH8qazTDpKsqr",
  "key4": "3peRRXfmiQUaCrEX8qaaTeag5ziEcAZsYDtYQZBe2CZNZ9sAd34bPfTxJTSpjqFJHaqM2tVY733gbaYWGpEtfZ6P",
  "key5": "4tBPTLHr4m9ndUhKsH4R1pg4TsKor72Tq1pJGqbYkZRJxaS31nTJupPNurtE8komTW8b3gSxiwEgPt1PRDQZtTg5",
  "key6": "4VgMfaEKnWvzgMqQrq3qihsgv1bJJF8fU7f7X5tnopnYmJ7VuDZ18xpa9mFnHfKBE8P56yQfSrR6Bb5qGZxSjzkG",
  "key7": "5akWSKPi8GkcRyh6WAqZufbkNNzvq2K7RmAv98SC5LotBTfyu5NJW84heNaEawm1Crh6SuCoizZ8meD2h7vnwrTi",
  "key8": "2yYLR41jUqLVJwH85pj8scFynya3AqQhSAacTZjC7xjquV1YbAV1Rsmz6zq5dYxVJVRXMxDbbvgzXBz63nGtf4oR",
  "key9": "3jH7ukF8mgw8eThBXqW7mTdugUPpeDkfX3BEUp8kzJNrR7ofaFDBkRHYxcjFKt1Q5RyHPoKwpsiLQ7UnG6FSVgtZ",
  "key10": "3QPXvptucR2dqwMnZK4pEfqenmX7dM4ZL2XDmHGokME97XmH8QFDzwcFfvbUs5HCabTgGyaXctZDH5RZ5KLB95Xv",
  "key11": "52APJJhUQ3nRYpdgD2yQoB1xRQvvEKaSaAjQXruZApggcj7L6mLf7toL5TegLoNQErY4oVUu8YaeN7y4EmSBTjTt",
  "key12": "3dPvxU2Jb5hJo7StgEkovfiC5aDWEG9tMvqcBurKZqQoqnDRcVwJ5Puq8Jx22H8SjiFcQEe9MHwgSZ9icTgJbibh",
  "key13": "3F68yjSHenPiBrskvteyp3oQ4bTgTDrnuTF9p9hxXbGfwoYNxVmaCMHAWs1o46hawonx72j1vaCw2aNhbNHsu8ks",
  "key14": "48oFnFRBMU9DRgTeXDZvfPKhDbn7rizt6S313i7SYJ4DXjPE6niZcAV3Qis8WS8uSurx8uHsg13F1a7evGgLV1mv",
  "key15": "2D74Lx6k4fHj2JdSHW9Ruq2GcaChDpzGFjmwmQgQoEtZ7tTextHXLHaojxBSWV8vpgnSyT7djWjDCfDEnKjF7YP",
  "key16": "62nCBoQaZVvgtZM6HHCQrH9VC12e7Py9oGE8U4VSDSErs6yC8mhNnV1qF9bnVTKsePsTmCS22BJ1BtQofzCDo9Lc",
  "key17": "5ERN5YUsYDuLWtR4QMrN8AK54c9ug2J4Azu2Fdhk6pmeChDWDSzmBDNB7aWZ4SvZ8G5mgQG4H7JctiboYYWjDRYq",
  "key18": "2HkUDMcK3e4jHfYeQ6Yq6YARSWqN8jUnSMVcgfQEq6daj1swPn58PXGBnYbKFB6dkeixFXKmskE3Fz5ABDjaqGbi",
  "key19": "3xF45ZD3JjjYwHZgEWVkRScxXy45nHfoM9TD2z8o2GRo3UYr5YZLam3CTSfmUt5A1C7zcvZdsVxMCyQuwX2hFZrF",
  "key20": "3d2ZMScvVHnFngXMwMbEofW5CkZKkHRHMATiSkvHuW8FbuvN2E1yVVGjiVtsEFHcyCjYEPc8hU9DVwqxnznbjzzx",
  "key21": "3kL81cnyVFp52gm7u9PvKYzSsySVTAiDEVGv62tfArPqHphRMjCGX8offdVFrySdQnBjwGLye1mDCyhBHiEaNSmc",
  "key22": "2cjrs9pyhYdLFn9pFPa1nQKLswxqxtGr2gSU6b15BwgBotDtDntuEgZogiuhMne3HwtWcNo6r96ohQF2u22KyH13",
  "key23": "4BT5zwmqpYQbKEXbzfUxUoMB5shkxNsxwpB44ieMU5XPqrgEyZ39AnqjSiZnuqDdECNpa6XUz7bv2GrQuH161cwK",
  "key24": "jJZAjVMc4ZKb2Grqme2qEaQ7zAgzb8kNQxPMae3w2G6hgMBHfoNUD9xsyxLaRRnkHCjqAJ7yNgU1D7SmHs2BSAc",
  "key25": "2kfr3BhyFjh5xRL89K7xeKLp9KmoQZGKUk6JCNKR6qszzuhKowx3EnfevTxNMymp8QqXnwNrtH18nTZHWFHtx7ee",
  "key26": "28whPNEtfCru2kwNjRi5LUKW7QNbngRbtsuAnhXHxrTHXzHnXGvme7zquPUvaPFQa5VLMBoHZy8BrZ21esH7jn2n",
  "key27": "3V6upEfA2PyBicVMXg1GnQtgo5cxQw3pBxcPC4TLmcCqNaux3ZzxgBAzaRYBBTK9vavicFp7eELWnb4feKwewAY7",
  "key28": "2JD343kY9Efe1EPreSf7B4wLKoi1NbKBKnaH8a5ytUG39YyT9uuLq8HxdF7y3rCDy7KsTuCrunedJBPijXGbHact",
  "key29": "PJxMWGUAALESxn8nhNsw1DCHMND3BS1juC1ob4BezeGADixBeuM5LWJEbbYnczHqwAFABSEk6z5DqRaY6mJmNnX",
  "key30": "4Kj4HuQuwY7aTsYBrPVMrpHNmVo1C6TYMmUDFjExqR8DZJKHufWcR7L21rbpd8KJzoB23ytDBENHzkyjv1qSWyk6",
  "key31": "22jCgFL7hGZM5iJWgYzR6sbATGXjWqUc1Y8oZcg2KBJRvefrHBkU1Je7xQJCDAhKrkJoEW42rQxt3N5ykGNaPUix"
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
