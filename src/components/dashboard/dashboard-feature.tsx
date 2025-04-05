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
    "43V99umtnmQe9YetVuWDDoL3HTnkQHitqi7nLB2tTVpUiNBHQyXaNWwK2Zoo5wbZ32rrPqMnk3S2m5LVZKsimNbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4esqSpzeXGaMGZWcsLMjVsaAjsR1SrWeGXx1644tEq4Y7KoiztpKnvssNsAWW9ELFqDsfqAeh1gD2jKFCFrj2qxQ",
  "key1": "5JmKMGZNn3oA6eLwP6hAKXuDvHsRE2kQU88v3V62JkVKN9qqEXb1axLFAeGSVdccYA24Ufr97eT6XN5aczKssuMd",
  "key2": "EzmzjTYdpHgShvqH7EscCYaeL1xQ2v7Q84oRB9Wfi9e1eb9ZiengrMT5pmBQ5aZtSpkCbnyhNJuKcg4LYqxtCr1",
  "key3": "i7RNnnbxkMbhWxGmhPtGkN5998MW2F1S8Vi7JRXU6awmVMwCRqbogcteMfdVJwwyGKiD2awAEZvap8mKdtas24g",
  "key4": "4CFxhEALxP4mRzQe4HkJLGy998BUGK7a3GoM9UPmZAdN4LdM8PvzBoteDiDsG8RFbBE5MbXKFt2gx4EY71pc78E5",
  "key5": "5BLS5MAUiR6JuR1atdyD2S3NBkTYvfJT3LPbZBdjBzGBKUnUWQFkGtCEnncrBt44wTjfpU1xUmCkz64vGpWku31Q",
  "key6": "4ZtiUMDguw7mVnWXPzSMszRhvot7VQQ8VTtgCQNUqZQXfvCy1T2t9rMxCyURvJsE4SXgsMGdw8mBRPjK3Ya4fobh",
  "key7": "25qX254y98mJgC2pv4TFtPNDDoZhiiUwCXbNvjjMUrvcJBP725ghPVaAug98cA16wsmg7dWhZnduNBJ7px2Ev4ph",
  "key8": "3yfAs5CH2HpDhusdwDCtesnL9bcQ7bJpcSec8UF2YSYmKTioMGZEPT749kDsLsWVVHwyDrsqzDyLWQfoufit4xt5",
  "key9": "3MU3DfLXhkAU4PL8HGWDr9qpygrQZNAf8SUoQqdcWz2FKwEQMzdFXJ1KawuJ5v6zPxrQFBUsfrsdGtw1MY7Di3n2",
  "key10": "54eP4u99u77PqRVkktQeQE2mvhPZoWRbw1SdYi9EeatY26rXEPc9g9WTQWTYKQdkwjXnLYiZYZKgrcTrTj8kgb7K",
  "key11": "3zj8ZS41buHQDKgsFLxLTHpLy5Q6MhZ5PMiEVc57w4FzpVjQrtbQK2Eed266ssyys8hckvV16rRMGKvEs4g8fDZp",
  "key12": "2T3AWZibJjZuskjUJHdQN2K89mY4ejfHXaL4B7iMdbxY9uDPbHEjJS7oWoUhDnDwytJmTCjmXMgssFLyMX7vEYMr",
  "key13": "5nPauyMzsxBV9fYvCa2BB6Y4WK2NdFDKZZfdUMYDGraccjyjqj69cJiAYnvbyzz68RXS2SsqTvoQs4jhmT7owPYE",
  "key14": "3brqbSpqPsonCFcNFQt3NSLGBYSYaNQAwv15rSAzi2FhMRJaLRDMyx7m11y3F7HLLJ4Fu4mvEvcT1WFpNcmvfEwf",
  "key15": "61P52EWYKoicPmzoQLSQvmCMHy7D7C8wbRb2fjWeuDyQn3VSEkKdPb3JDuzbmuTtximP3XCCStpiAM9V1qENraDZ",
  "key16": "4p9UsULy4YfAMWrbWvuex3Hi62rKvvMCpwZcnYmL8jWpS5uQthggQ7Xmz1CSLrotSsbkyR9AsbGZVkhZEbD7ja5P",
  "key17": "4fJxyXUqBw1wAsA6ozxUTwFL66p3uiphp5NDjXjRvL6yTeRXwxQFfyKcztD83aTFGDvSsrj65t89Yv8Za6DFbfs2",
  "key18": "5bgPyeg9q42V1z8qVoo8ZXmyPEmmTk57wLgoy7ACzKQtjUm2wU3zUab8SysowLxcMQrvMvEwq5URUanxvEmhEJKX",
  "key19": "4rR3VDNBqGz4mUteKsX8mEMR9a1q6ZmyHmWP8j4Q2S8kFAKeNQcUcVBhzp3Xzv3mekFYLv65Dbx4edamyMKPuBB8",
  "key20": "2DEKcCzhKaABZL91ooYdJX9Xhn4Jc3VB1ZF8stzSWjNhVPhTpf1dPmCXnVrWecBaHBd374r5awLS2Vy7a7wYHphg",
  "key21": "2wgHjd5o54v9R97f8hpeWHmsgVMbQqM726gw193iWBe2zr2ZZqnk5Horx52GeDdgLEQU5izSpnBNu7VeapkiPed4",
  "key22": "zM3gRc2LM9hyUqCH1aZB1tZKvb8uRqKe6inW3e91BoDfuURb98MEwNab3WCY1A6iZNtLby3KgUNnESsSEtC4Ng5",
  "key23": "3bdheoc61jJ1co2NX4Ms9rvk13gYoQ2PAdLLStT4Yby7YJTa4ArhkPnEEJkt3p1j1GkAdfZ5vRTrT2HPPV8XUJB1",
  "key24": "4Y1NyjTs7yVzg1A8da5Y8nD5kcqonHEJT9TMMGBfpfYDn4CYbDtT7WSdb9ao1kb4Y95P65xmtCMUGu4FJ7YYyNsh",
  "key25": "4qCAQ8JsVmMabDvE1DcsgSrqXo3V2WCGCcHR8HWTLmRfn2Qnkvec3nis2gDiq9igZQ6gnsFqrHhrxUGD71bfGuFp",
  "key26": "5bZu7QHoCYjPsmbrSbXGL3DXkDPeDJEk7xS1gbGHXFMuDq4KPUje8ucTFC2G1LFSfU4XaGgMTKFfQNVncsrsNz7S",
  "key27": "2UBaadxW2bbbWfkNgyLsK1xAyoYzn6nyBpnHNJXWzWduvijfScQyay19A991JfotZ7kTcwLbeZnkoPtYmjBHf3gm",
  "key28": "3WtTScmymzjRE7VJPzStcdBDtegVYPsx2y8kwGzYycSgWGTESJF82QzgF6VxPE2dWKRRAYXuRBVwhH9Ny6oa2omq",
  "key29": "2JUvHqeDb2ocK6hfiFSEfMrKtYVWDmtngBovt3DnNw93e1PorU414F4RXsfAiP75NKBxn7dGytkTKf6buoFTPp3i",
  "key30": "25eigYRPMQ9CuLyNUjaxnGJqu9rY7PyvX6CnxHu92eEVvopzz1jjxs4h71c6Gf44kVgLSeg7oXVdFP5sgq2jDV3F",
  "key31": "2ee3ATsSE2yz5QXyAnXUPLHxEGWkX5neZRXaVAfMhTs9uZ8UXQahW49gcsJtY2LXm4zC7cTaJUYjDdvNkemkxPvZ",
  "key32": "5X5SKt21ikXEU8zjUpHX1hmi2DraCBnwDvsB6zt9egf6454QFBSQF94namwVKPtxRy1bzvcRwdPYhRHNyydwHZSX",
  "key33": "5MBDLFcrG4pASYRaGFbi2Thg7q47Fx53awPXSS8KuWisunorDScRaAiNciSrbSEEghfEc9qrrHw5gRLvrJQTU5uH",
  "key34": "3yPqL6LqdTeHzJFTmCqu2n2A7NsixThWLio7m8AFjYUFx6ax41Lsvde1rGTUwnUCRhQ6PUfw16j8VzT244sxEAfU",
  "key35": "4DQmL9GYCTnXCAcZ9Do1eX3kBpK3DFhUQ7Ap3H8W4KM2zTR5Js993k59qwSRg6MnmSKpJJids5RZhdaaK8GsuNyu",
  "key36": "4nS9x7tURFFpfgqCc2zwfQjN6ZkzFezDVxEEoPrQ8xLBviX219ikH2bZMHKD4iePTWP3C9Aco2oygg7y4wkrpfEu",
  "key37": "33ze92Pzxx6FQKmhJnSZRh3hENJShUm7L27j5SrxUDa3nMVd9g9diPtr184QhNGGa1rf91ULW3pNbcyYyJsQrDFt",
  "key38": "4SNXB68RhBGgpdo9HfJLbf7Y9D5MXqo671Wm8gRhubNwgtTS21sgdCL2S3pkXdpsEmfji6UL97UkC3iU8Kz3AGKF",
  "key39": "3uQiLEvwD7aoyY74XZouo8c8e2nqMR4PPcJFZo8zCqvF9EkBv9rHdSLUEaAwUdyT6sfrWShgMH8x18dj87kGAwUM"
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
