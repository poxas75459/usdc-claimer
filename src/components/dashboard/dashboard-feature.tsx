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
    "wZq3wEv1GKnmg9a6zVTyJBLTS2czHDT1B6xi5LTXNj3oRGaGKneC1pQY5R23783jRVkqdZ4CQMo8vfMgrj2ZVMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKH1W9ecYCoMcAGCNAz6g3B9SKd1wDjzsN5mJ443SauwYHjUZDTqe35gZ7qqkgbwgAwKFZMWwYKXmYq9sLppr27",
  "key1": "3WqSeqrVxyc4ZxZ5Q2NqPQnAqqgtWhXhYeP5i9XB5xDpSATYQjymJZYhRPRgcL85o1rKGJV9hcyZKKYgjYtky93S",
  "key2": "4JSji8zQykmEjpDfSAmvGbxebCCXwyThWcG85dCYLHFqvmXaDN2gg6UPD4hzXqDdx1nb8dzNRRBr1NELKzQnxF8v",
  "key3": "5MdQ2ixTqCvwtrjn7UWFbUKoJyNRRJQHo635bCu9e544JxSaTNSywrQk7uvuJvpKNdxdysksR1UPGUqZq986EeNh",
  "key4": "5itthvWuECGpDvMF5b1w1JUgS6efKNYLmTPY3YURLnrWNc1XVZABACKN97y8QMpowYYeZNoKokhUbEMcyvDqSwRy",
  "key5": "YPRUEubW69524eTLjAhfhkB3BEJ1DJJQ1t5NyRpYSyrs1rQ424GxC7ffpyX2T3neAb2uRxt9xnQTTYqT4t7wuQK",
  "key6": "3UBxcQKzZPrTDVU8cxQZsmZ7RcPHFPsDiuFeaViTWMrbMtx3rnpZabqTmEeNVoS1CNzkBnZh8gmz7ouvvYYxfG8N",
  "key7": "2fnJnTpb54reXeeMJNQjcdZowsNzkJRAnNdFJB1fma3ppfqvbzcEAC5JxTdkDVf8ahBi3E2nFQNni7shi4NV6md6",
  "key8": "3DtQ8pxFBoNM8pSpuffM9HEFe8VMqJHDCu1tDCWtHZcqsnuxKwsmhN3W1Lva7rQaHETTJUEmRrpED9y5dJzx3WYz",
  "key9": "5hjxJEw4bc7yHsz7yieuTb4qbMaQxUc2erkVvDd5K46vUiC7qA8BFM4Z8bGALs8zNmiK3KmrawFAWfc5z4gZatqF",
  "key10": "5BJL33u8vu52gVnpvb4U9M2oc53CsgSgM3KW2LkfUtG52nU6jEh8jucy5JAJARwUMomhTb6PweHKcm9P5BJKby7p",
  "key11": "4fx8GczwhFJX8NbUkm25itUbvnVEtUNEH5iD9PZMVpX11kk3Xxfw3TrgMiZiWZH4ztSuU8sM3pCumaSZBaF5GEZX",
  "key12": "3cumbufLwFEdQpYZjXse34HgTH7eavJNmVsK4kXcVJa45gwd3cYQHUyWhKyPHRRhdNkyVdaoqF1eBzLWV49wGiHp",
  "key13": "38CKfSTVXMpXEobNmqizQs6EVR3K8gmV5PCUDAEDRZk47PE47c96k8P6VHTemjAjKYyPfz9VJDhUZoKbvinE3MBw",
  "key14": "4V8jwhW3rugQReTY7Fx7gaS1ZH7SgVhDy87dx5pBnbBd8bbrCssGDJ7kFVF2bya9u7opYwFGNX2PSNjthxmayDg",
  "key15": "26f62T2iG26n1VbbKEV1dJdzTpNnK1LTbuAKuscDDmDhLRabnHtbYb8Mp6CXqCyTocJYDKdL9r5tb8LKbPs9BU9G",
  "key16": "22r4qwo5HGpBUJi4ASvGHbGVG5XAVkJr4SpVmgR6g555nnQFEso4CpYocWj8917AvQAqAQC9Z3G2mHh56td52pc2",
  "key17": "47MYmN5WqwXFnhWaUXDaLzyEs1Zfu7ARAXBbuzE9b3EqWkcgpvkGeMvb4icRshetVHhG7V9sGcpoYhTyyyM7NH43",
  "key18": "39YW5z9S22jg1bJfANSkYXGum2XuCohoMgPx8RHVVVscJ1QF6wVL4eQ43oyz5xKpNnjKL8vs7iKLvaGXY7ycWdPp",
  "key19": "5z9WXspHB5J2GPmY52f6QkG4ZgBKc5ssZdgR6FgSfayDUeUsyn4UTULAiBPSE9TmfZ6f5UxStk1jf21s3LDTXc2Y",
  "key20": "5bu3poVhKefMAFquuYuwTVAZP1NE6N7eeQF478MTaKWwrsK84B1ckXMRgvnSAstV79ArfJtwNtAUHyUmeCrLbFs9",
  "key21": "4ZXvV1fYMkuvCRwtosnAg1Rbt85HJTi18A9Gyk8MGSkwTXHuEwnsJimeqXcYtESXgbkJ9uJkvDYug1Kx7u789eRk",
  "key22": "36oEMXVCoADai7UmGpVfKQHgLiEeo12PetULT2qqQ5WnWXd2VgXgcr4K3w7vLopS1jw952rDprM11urhSynbgeYk",
  "key23": "5NDZppyttDtTJi3rWFUP6RWDHcheNKGHfVUqny1d9qbrsHPKb2tk3Ur3qvJMHHRZNhBAQZNVhDKPkZ4YPpG4cYNK",
  "key24": "qG16bTqxvJ33MkNzasBcinvm6LyHbBSnukLPUcQUpCuuXmh9XMiCuTp54vDBrsuUqjryEBRaT755qSSMj5gzBz1",
  "key25": "5Byov43zR3QKQ4fSYX6a2535zx6qkkFyig4VJ7dHWqqYHYMqwyqkrayiDgFsGSrn4dUGBRGbBHH846xpnNep2TXE",
  "key26": "4vPvbJRW8zyjW2nmgKFJ6JKB3KYkbnWUyPPjpGCkDa7PtBhpDyCe7hofB4M7ELGL2YXHTrwwNswZUJ9zxjSgAUSb",
  "key27": "kAZKtHZ9PK8V6Leci4BsdPUDqSLsaidf58nrKGA9NPNc5u9sjA9fxvH5fzBRfcts53hHRRuezL9KFmwpUcquqbr",
  "key28": "2FehNgfgDVNTB9UAFA157mWMXawiVqVy4cnmKGRBwZvxSJ65EtsGy6kTiTStxnEpUtXqTi3MiazLmQso4UU57G8H",
  "key29": "2V1jM79w8VSfqpEoHCFqJ2JePHE8vHZsLWD1DzszfT8e39N3daGs4AiYA2U41pfwY8jw3y9Jo8G2XoQmsqRTjyDb",
  "key30": "QHy9GokHvSb1kedJNFmpcXp7EyVADa4UKHznXy6usFtziirU5XFbJho85Uv9pKteGK2HQtA3xA6fJqJvgjxYg5Y",
  "key31": "5R83PRnHCMAPchjjQWa8uQnNeJZBHxRUirWJ1nW28iT1UfzC5ZAXSSfALq6ATdWx6VSC1HHLFDbFkDFTYdrfWzS8",
  "key32": "r71Wvf43yCswoezYJS6PNZg61wsZikoZnaBpB4ZaNoiaMUrjY26P4mqR33oV8tkmmzzitwMXNsQETiKHxQLAK2i",
  "key33": "2n6JXogyvkRgJueTCqPTuCtbKsnUEKmQpxdaoXCzAoSD4cfrFxo9Sqy7yaqNKBwWS2Wqs4gcFRVS7sUENRgYGRcV",
  "key34": "3i5VWxh4TENxYtQfMNQqQ4XDNcipNY9mng6MdYbTdKrj1ZYHz2sg6i6G2XzMcf6U1UeXnFgxRvqPfstiu8AZxh67",
  "key35": "3xVPkPZphGs7qk4T8TAcpS84Z41BL5dyk35aEgAUqe7qNtcsMP4T3vZcjbUM48SiTwwCLqvw6LMe1HjvecRMb5yo",
  "key36": "4uNmkx2xU8STAy8UyMQZGHFwL5aDUJiu14YiRVzhaVWDCcufadGUTf6o5bLL7YWuqgkRNPDYr4w4319EyXvBG7zS",
  "key37": "4pavo9P8nV9giAwYB91kwzc4XB8YBbfPiaLDS763TT3ZiNueAgwQDqMBHXFyHMk5iegZY2kWo64WWnsYZnuQRzhu",
  "key38": "3hNV4cDdVdFbFkpzWFvhYrX6NyDYEoJDJiMBVSNrntT9Seotw6gbhi5A3B6QCxumYM3jXkfTctxV9ZMR9XJHqWua",
  "key39": "4y3TauaKULDbn7ibbfziBYyksAqqtu6MxXyYjPbbrxS8tm3ebpXjkFg6P2UBJMEEuaXPELFEwmkhtP2LZLoDiUqY"
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
