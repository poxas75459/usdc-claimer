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
    "63SXQEJsXzbxSMkVZjHEqikC2tkd1JJeFQ5cdAocXk5Vijyp9JhjxEfbiiggNZdYKv94eq86rJzr4t3PG9G6W2L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUb9g9YdEP3kavGPQzmdUjBXfayz2u4DL2RXPHHT1gDZUKFfXfibbP76apgxA8RhHxGkCe84q1sofvCU69ENnC8",
  "key1": "5t3K732XehgaatA8CpVjr85Tj1YTSCYcacRdrpGnoUnt1PqWLeQc7DBLk69fLZPcyWj6m5Mttsg589tHVnpCbTuo",
  "key2": "64JzqPpFe4pCkuu5gGEa3TJoRqobb66tMYv6iNK8FfPyYC6SMmRBmJ95Z889cWHoG96bhqn1rrt9qcPyaS8osZgX",
  "key3": "3nrd94hDHg5zYFFjc6vAfntYYatE1r5Lrw8BDGkGJ8Fsx9ThDRgMQpPZpgGpXRnjTjUrHiXZjKwngvUzJTYaDyDN",
  "key4": "WJBY1sg7Lj9uBLD2iANdfoPSMaF178GZqt7oAFeDFvcMwSZUGoxbhGVEBvfkJ9VhD69hqVG3e2rycaodWEnUmeP",
  "key5": "21gXzjWP97CosF7eqk1Bn5x44L8xZrVLz7Gpo1evm6VF2J7k6wFCVVcghnDN7rzgBSYyp6DYRyPMAwbttdxhMAPq",
  "key6": "2TdcqTaBVePD8szHMy9yt7ScT4GbfpGtriZPD5hnBRCZUjezFzeWBns2wwhnyJpAd9yiQwExV6ttkJEPqaxge5iJ",
  "key7": "5zTy4HjkerKpaQTj3LqjAVMHb3Brga4u3gMg95ib855LNbGWwm3UtZfT6rpVYiThwQszT3AGQ8nNMRUQbjrSvTRa",
  "key8": "4Z5dYDdLdSjpFTm89y1EpnfvdeCRzExDRzSRtfoD7CS2W2EYsgetR3aPWUh1eiczV5RK8KEBwDTh7yFzjuhvHru6",
  "key9": "3bgdw4cHVpkL2fai8ZxoeX6ciP3VY36GW8GiciPzeBrie3Ni31tqH14MmoeRC9FNuKB6UKpv1DEucaRiYjcSjngM",
  "key10": "5gwygiMRRZEDMjEHEskaE3w6u3jLUmu3cHjSmqHfrrHGtMduNpNGCj7CkPyyAe2FTESwh534CV5qvZBuiDY9ZNUP",
  "key11": "3zDQsX4tEe4ttnb1yYVezqT6L4CKmbPKmB5khLGKiyD7RUmiAvxkRfhLcH5YLBMMjaMRRYcSdW5t3C7JoGxoxz3q",
  "key12": "4BtJApbKy7DW7SfE6A5mEydA6Xf7MpbVnhxPq47B8rVQp57hYvRprUS8YZrTiW4KYB25bb5XRZeEJjRDskoXFG8P",
  "key13": "4KBgHBvq5E6onYPPLGn1yAsXWR5HYhXwoyuJj9yK5u2qPAjwJptTihYP8JQFuTKMkVZuJG5rW9feFoG28t6ghidy",
  "key14": "34y2djCfKy6UCZGQzJ8a8hjDeKN9e5FyVjGZ12HoKesmemw3kFrc9uPh65jCW9V9Z6LSmZgGgJiVoPJZKUaHuwBo",
  "key15": "5HZ5QJ462JqmdDuQvyj9bAhewm1vcXhmtfEAhqJPtaK9A1x5BZ3vyBwF8N5ccSWQCaaeQSd8FSebJWhtji9tszLs",
  "key16": "AgMwFDKADWZuwwthH1NwjD45sFgxfweMdFtrieve6DfzA4qk4sZPTwTgRPyGPSyYmspcSxfQWNgXTvRA4EunZas",
  "key17": "2GueXVx29aEtobF78camQQ4id2nBo3htJoE26ijWNckQ67Vy7f498Ner3a25QVWkvyZAs3pAR2gCQe6bv5DAdsQT",
  "key18": "2TKQtmjoBFsQRMAEgkKqWWrF2JgB7vLJZmyzqg8z5MLHG3a42FY4KRfYVRihMdozyj4umtD91XKM6JfqnSLGx4eT",
  "key19": "3ZjbJVWHGGE3sxUVVMQnb1CTdtcvAJZJPPMzAzqodMEPUH7cdh9HYvLvueBZ9swyXQxFDVcufe1GpPTskeAu8T9u",
  "key20": "8EKc9s8U4H5pp7hxFFray4ykhFfEsBsbXygks2isMjMRcv37Jc9rhTitJ5T2HyUN9Vo5D16ngBtxGNbso6ck5tb",
  "key21": "3xZZheeQNYPTu69kBGC3rD6Q54yeJfkLs81zPPgjAMwY7WQ4yfF6hpVfFfbcNsqMyEmTp7g1BecN9aBPTbSyn47s",
  "key22": "5hbcmq1S6R9DDdWdCKtRgP2dYzRHsp58fSzkJFhS5CeH2wYdsgBa5p9nxkJCeDySjMQKKAcKkSWGPzgDaDcp6SRv",
  "key23": "5rt6TX16ym7hfP2FFhufjBvxSFQeRMd1ZsTMVEjUGuP2tz7W8dT4TS3vsFtSJEGDcXhM6DtM256cjt9Tgm9zVCHg",
  "key24": "41FZRYaeo8EygMGFtuiUA3usDa489V586m3zw87o9Vghj6cNRWgswUJhTBZvNEeyhYnM4gyyw5znXiTauajVxwGM",
  "key25": "2WAofJphmtAt8q8Xh4Wv95ahwoew5zhVw3GHDjttfQui1u9Tm4192oYEFroFwwBHHCJbJPNsyKX9cogFVKXtY6J8",
  "key26": "63VXgynSs3TcSEz1yZgMHtqCXmu285pvubyph8tJY2aZa8xMVchu6usK5NnRbENJ4J9BB4jY9gVL3j8MQvqQZnW5",
  "key27": "5HezHVrfqdPuqe2sHyaZE1TEhH5riJsVeSASXUBkibP9BbQobxTszFdJNFouneq9GrDXjNUHrDnFo6AF9RjHP8an",
  "key28": "2RxeTFCz76LRgaM7dYA8QohKW1owog4TJY9JdiWZ8ZJNGNiPMDQnft7kQSHPNKpiBuuBj3nPyB1fW4Qi7Nn7otZ4",
  "key29": "EhCw8Evx373bGwE8dtAk7CGuFyu4qpH7tcnFe83wSPAJVWKJgxiHKNHynzNvjf1nkhSxL18T36gFmgMHw3m9Xt8",
  "key30": "5HQyuSFSAVAdCKitZxvx264mTeLTRvfmMsz4bLDemCCewfcGkQUuywHHNhogsb738smyAM5t6h9xXAnX2j4tgVwJ",
  "key31": "5w2WqXSHQyTuFkmowDDLyg2DXNJAjfr76JzaGu6qMRxLHBrsopXvj3fJY3HGiAQ8CnuftThTYkb865qhuVKa88fD",
  "key32": "2UJxac5vqx8TtqCfTWT1kuk3oR6pPeRTir6ZkV5UmhhFYdaJYmzwZvHiFfSVx1iVqyi9xqq46L4GiYqVEp52zP5H"
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
