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
    "2PdSdHBA5ErtwRvZktW5pDXvtTpdvwZTziBJtcG4d1P2RuegCps4GhPdtk9FGxPMZjAXn9vTmVhfUKxycnp2WN5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6GG5VFPviF2ppEzc4vYBbCPm8vEpHg1Rs7mDZtkzFGY5G6vB4Wfnoj1Gy1SscjJsMWtDkTr4kRvrB5mCDs9Kf2",
  "key1": "5iFMddfALUxs2hwnzdDL77F6okb3uZXKzNNvxky9KpCvLmqFaAfy8nPLhvYBK1ZdgbLCDwB4A9BnhJAJ4gag8iSH",
  "key2": "9qi2U79UmjsVjJQT59ioPsvomRthbXDVdB8hpoSAioJhrw6SaWNxfz1bS388ydmGXmFyCBmmfwCxbUkcB12XWtG",
  "key3": "23iE1Wjq6PoDfud6WHgnmZrb7fK3X1A4V7vzWBrjEQwQXpmHa9tM79VfE8yJTTApYFywH8y9V74f9brbbsUBQBL5",
  "key4": "5RXemLnXKPnurfCm4XrpYkVXsz8vJuF2LD322HgCs5knFneBXsk94CBCMKLtJDvaXTaMjzqMzrcuzktoiFZ473wk",
  "key5": "3V7y74t5ZeQZ4AbDbfdeVqXLoMncLYJ7E6d3GY6NeN2Uh821CabeiqUbfhveevuyiEoBeKnBbHM4CJWRfS7ZrjrA",
  "key6": "XERWH8JyhJUEhFSZP3JMes2HfLk9YvFoMWKLEMW2qmwyEGiQrtcxt9v2YPgLzuHGx2zptP73CrknFW9HsbfT5eC",
  "key7": "27oHmDXMNMwAjPbkuy7mtR3zzpPWq73o8kx7dRNZWw99DzHSCrzxbdiMjZidAMzto4CHjAXQYrrovcgBKYsKbcV9",
  "key8": "4mFdKCauJsWV62i8XviCT7VpeL4w8y95FBoJGvPxoKT1CExCCw1V8G59jRHC25eu4bzSt8zbaEg2uT4FCEZtAGiF",
  "key9": "4s4StV4iDEy3h69PxG2Yyzv1K1kJn8mrtYK17Qq4J7AcfYVWmdJsrV5itGLy7CBZHwfchthDS6D2reTBUSs6DhhW",
  "key10": "5R4MrEweUobx4syyDsBbDzXL3zELonHGQ2HGCFTEwL4fpNtrvRRtCm8rQGZ2Q6bKjiPW3FQHGJmo9qs1w3AgX8cT",
  "key11": "3HcWe76MtdB3L84ztzMDEVfLBpqtbscUMhkTNXwwKAeF5gLqJ5dfWx5WFPGJiEEHFj4taKv6zDFjRG1twvVDWoky",
  "key12": "4mymedtStfMiN55QS1vJqXhGvonT4fCE1zo2xTh4W9dmQPC4ZietKSjRQkmNN4nq7VDexDUXvErZpZsCjp473scd",
  "key13": "4UP5iTGeuszTJRXzg3Q6ztGZTB75kgKpoV5aqMj8ca11NZP7Md82aLzaMdPAuQwD44GZ17G61ev3Y3cj5kGXDnCe",
  "key14": "4CSykk9HshiiXpt7qQWszizP4xpSPmsdE9tUo8hLX5seZZqCCMM8gPwp85nT2uGh6ejJdYMDBVcAd2fAix5dn9sv",
  "key15": "4pxCWi8grvFrp6a77FdkgzjrHfnvm6ZAPusACi5p2XmJ7W3ztqrnRvhYREaNMdjeXsifv9cpvGvEisRtrd9j38fe",
  "key16": "5sc9SJiGiYps8hD2rQkLiCp3uN7h94bfW3PrAa5eQ44hNZBVpD2RTQLepWtPRtQKYbf2LgbF6v4jeXLBfsb7bWaG",
  "key17": "Pa8sB5h1bAHsg3MYmYd634sfNdna5FTqYB7QUkLXyU8tbYFkKJQDvfXC6L3iFxssgGv1Ax5UKyPZTfxHk388aTJ",
  "key18": "5A87KESNPrJoakYjVqiXpbiuYaRfT3GE7QVUvgn5UejhUyBwxp6URxEGQzefkNA9FNzNKuocc14YYUE93FyBd6Hw",
  "key19": "3JjsptWtSK6sM9uKgzZ6WeohCEeKDHSzFYCbZJjSPMEBcWwmUVvMYQU9T4LopKHgq8d8Ysumt5RNsszetWvVjTVv",
  "key20": "2ocToCMmL81LCfEBqNDm4ix5fn3EifeufBcz6magiWdeF7pUzsSWQga5sJxK1f3mS7dw699J1DLECp3y5AmUDbkj",
  "key21": "62N1kY6PtR2Xszowss8Sx7x6UHquh3ba3pR75Yxc6dPvecxK4SWV2xmq1g7ff6BS7ksHcRPhAbAYTgMSkA8azTCi",
  "key22": "57aMGcGwYMUaPsKH5WMTwjHH7e7evJnZ4gss4XTvKYTMwmVUZdLhMMZHpzc5zvnATZYeNhpHHeD8vhuJhyz8tA9b",
  "key23": "4tDqdUoRcD8mfcZnQqm52oHr9pCZtXYhwPDCfFfsefDK56UP5ECwu2KfVRpgeBs6gD1oPwmWHcy2FLsjR6fv4YXr",
  "key24": "4YpdYk49UARQY9sUfxHbhrdzgDhpYortqQ2nFHFJr5Ei1hqBSNahDDtHYmRMTfnd1auxBMFvm1sFLJf9ThWWQnzJ",
  "key25": "3Ztpm2UBnTrkBNWcbHryp2PC1nJqSeQNGQ9JcKGQ9TM7d3buDZmDApo1JAfM1cvrzDF68axrYofipVNbacnpRMbg",
  "key26": "3vxxBbMAD3iE1CTVhRqsHDXfme5GKYYiLGx6j7MAa8s1BEsvwdSEgBVwVZkdhvpuq42zcxVwjCzTJdehDX44r7Go",
  "key27": "2B2wNg3xD81jyBQhtuuLEJSKHuqmhEw4AMBRXvgptjaqMKzR78DXavAxNWjCs4Xoa6ApyJ9hvGXteBobPZy3Lib7",
  "key28": "2hEYST9T1mDqu8heeSJ1y9prZDSZT2xNN4uas8yRVBwTMhutviswoMWt8RYaWQqhNv6oracVbvbaCXaDLRi55VDb",
  "key29": "36fw295tNzkVyALgF3skobQj67A8TWGiQi7WvCeREEYNBPgwNtaMdxhvVvRwvm4qMXnD7fDm9QbFuVUqCNaaw5FW",
  "key30": "2p4mh5p3YUp1ymHuvYk9by1Duahk5UMUUYy3dWV4DDvVTKVTzirtDcvC7B8YSzGPnMvH8WPUDTqRZrVynnfZkomp",
  "key31": "3ie7pCBeTMAarrrtytRqzZ3wQ1GfPUKDP1ruhtTaH8uGecYLMzUb5jPzvxMAknn5riy5k5KKHMSdytUKXAg5APM6",
  "key32": "3yp5WTc6yP8TehgT7b9LxCidMPoKnxMsdMP2huryjz4Pr5uaWtbN6uXByAAze1qD8dfP76RuVMVxwmYB3YnkY5Hm",
  "key33": "3cRrQrhYzn7XNDxxUzNrtXPkDVM95dm2EZ8RV1cd9fEKzGiRzCyWxrDmmzhuoaWcapYVMfbMadYtUKrzkG5meLrM",
  "key34": "2zLVnRTgFyLjAGoSH2oEwNRH5otZxDMBvH3R8FKSNgqdaefCGWTb1nEaDLvFmGHGVvCBtMH6CbYB1TjsrNqq1U9A",
  "key35": "28ZGFNtJRUi8HrRJYaPsGcwUnBzsPVXvCLaxb9vZ5ezuFzr5eHv9UNQRp2Av17N2M1tRgQ8FwmXZdojAXprrGGLY",
  "key36": "LnUHoFmaTQ3vZh1mkirkhkQfPo62cj657tnScaEoizwnbUzHX4pSiASRTMcVWKyKGCbFVqE9WQgAtucksEUw2yz",
  "key37": "VVxRNQC8RN9JfnsRts2sJfV11mApBS2BqfpHh1FK57y7U68wrKNKT2Es82Hqjb7n85Y2rvhCBJtQGwZgW7ZtmUG",
  "key38": "3pYzKj1PpYmSMVMHJzSdGkrJbaYztsC1m7knSsUaN7cLwEZyMVFBe4e4PZg2EKcKpG71v5xYABou7Fa8uNCzM9Ri"
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
