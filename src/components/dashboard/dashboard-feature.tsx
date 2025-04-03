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
    "3wXjEn7Yv2Rx9jabPZ8kj5Pb1ctCwBxSRajxQobnWJXpmrxAUYssdwP8U5s8dfUBYeJcKfN965GQMwCwFBePCft6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F14xpkoaDz2v1M3aYRVf5u4Rhb9vEe7DyvrtdkL9mVwS5HCGGHG8gdNreUr6UC1Y4uTtYdchGfMvf8Un3BWxbCC",
  "key1": "5DHZUcYf5B5bNimk6484z1Knc6ZgndfT5M7RDJdBmMHBKbi3MrRri5Km4ZQrtq1dYBCfo9mWDtVFGtBmTrNDyjBu",
  "key2": "48XV7sUMV9Q5vymggThd8uGmcMeccCJA3Lqd5Dmnh6B8JgvcTQaHk3CJe4qWVKesDvPFySyn2NAeDDhaphakg9gD",
  "key3": "3gs7GP1PBuavWKwtYArNEo1d24s3Xj8CpSpVR68dgF7WY5xDXVUNLv18UYa1fStfgEDM8cvEmL1jYawPCDuBSXm9",
  "key4": "4SLbQnWzidEbJuMmKZcENGDdatqponBaFD5yKS8PU21p3Z4n1jQdsyCoTU6wuQ9kqiA5XuUEqUhLznTKcDS77bEJ",
  "key5": "588w65qraRDdUXP85fFqx6VGVCMR3NzpBWr3VA3eMJKCx89AMYSeisyziC44WXBcwdNJnHd27pqR9RdgNHijBS7U",
  "key6": "53aDyLy1oJkVdGL1NwVo1T6KpJ6bHV2G8dJnfqBKqMiyLeJik99K2EitSxeUThXt4ogUsreCW6twvb1WQbyoZXMd",
  "key7": "4vAVs8A3ZJk7o4KLZAnR8zoJUTqJRtoaVB5g2EvZLzMvZWQBqTkL4KeYPkoXp7mdjoRugbqnLi9GcbYSu1F14vkd",
  "key8": "2kfPL2xfuKpYgutv4Ve4zia3xDiRz91ZbSXDnLFFFKEriXgSGvGYEXt2x7dnFChDQBzEzkbkCA3zWDofA7WQXA1E",
  "key9": "2buyusYu38YvRFpRWvLovRvtoqwbKsqemU8S4xT5xQudTbTUS7Qe2mxC2cqYhPo6xBs7B23DoVVxTTLBp2cBwbaL",
  "key10": "4ub2Na8oo6wdiYez2Tpqj6MKjbLHrJgEgiW6aUvC8tC6ZjAfMm28K6ajsv5U331PdLEWGF5V8rk5UiUjt2esDwpi",
  "key11": "2ZEnuTEJKi2nco6RzyqNsCbt4NZ4BjSFuzLaSv8Vq3mtbQe8iqNLg2nKF7fKyQXxeLtExz89r4RLa597D7cmdetk",
  "key12": "4zjE6CGKFMDrsw2qWhfuxYaprzi9gjgxq37tYuQZqWjE6XUJbgh6WBAzD1dKTngX5VBev8RJn9DXYKS6GM3gZbD9",
  "key13": "4LZKEwjyWt1dg5UcRW9ukAGLDPdCo6qqigqeJQVqxXQrKRcehuWBHgCKfuLZjo7nex972NRLH8WJgE37h2j2xTqJ",
  "key14": "48dhMLt5YETp56bayLfLwZucmmE6qcG9zuhgdR3noqe3MDTeC8g3jgjTe429fhvPdeWjyTRjSDC64FTsdVU8Chun",
  "key15": "5PzY4sveyuzW8JBxQcauk23GZ3h7dmZFi4iwHpZkovJQFasFLr48ZCAsxGHvSA43qmyj17dSEpHKJ4VkfhzHxRxD",
  "key16": "4i9PGv9Q4aSRVfQMe7v59LAxJtPyoogYXKgeQDmAADaGYchsMM8roakAFostqv9duVgLVcXSTN3rhrv6Di6Vshxw",
  "key17": "P82HfxYqSNC8WkvDAnraT5xsNkmQn96ZnTsG5wBQerNxJLCozZGNUfym28KUXoEZTcGogtAZqNDBjnNhEKjQYUU",
  "key18": "wFkyCfuBDvU9QEEf8XrPmbwBYxQrfXKTrC4PMgMgfyFQjYJazak9Z1TzP1VC6TZn26CviE1XQvkNZB6MpNwogjh",
  "key19": "spWm9WBdCy7U38KgT9A2nTU1v7BYxRP6J1kyr8yWujQr5FmwJb54V6irqbFvzA1hMgxpRj9mR2xkjdR43sTba89",
  "key20": "ouVqzL2tRsYJRc3qD6N6fTuXPxmZ3Gjjf3Qj6qNz9K9dGVMTC2KtSxsSXuAjFS5KoJRbdnrkXq2d7HmYJEgQ5uq",
  "key21": "3JTfg3VG3ybkvrqnu5GycVmspDhRKX7tqN4hgsUEzDaxqsrt2kVGBKv9dtGPWneUKUGca4E66UC7V7BLcZKTP9e2",
  "key22": "5vhufuMVJGdf6Mtp7NAPtF1g9Wiobtv7fzHKXzS8SZJqB4VzK7k3P4TP4VjMNc2F91a5djEeD7NGB3EjTap3PUTA",
  "key23": "2tRuZrh13yrQdJx2vSKJ8LfyFqTkVmk7r12RoqdZc81UToAH7r6xCqnk14q5NgudQERHPSgRzo8b9cAuHJtGBeg3",
  "key24": "5py3BQExaJof9TzWAWiG335awCkCpm84o159kkbAYYkNwFvLak27HGtSZ23FxKdy6bVnFWhNetgkZi6g3o5WzDdv",
  "key25": "2c7nmy7wYQoVpT9NxVY3JxQtQgAyGw2bMWncQ4LyVB6cjFd5TGTXeZEr9HkL5GTLEY7D7KiVZCBHQT46CQBrCXoM",
  "key26": "5uR1D3QVLtzxNJVw3VcUxbWXDpUTg1MSZyEtvYo1H6yfKPmcvUycdNDi5o4H7VNPX1ZGUcbPWCdWmskJEUWb9bwX",
  "key27": "4mf2GvrqCho3nBfMqygHHNGhFBwFVxowXpgwUbZ3DiEM5qDyEWMUVaowd4dwCrqKSeMrPmDuGPT85EW9udXiXCia",
  "key28": "3iTteaZEYiduE8CRfzYnEo21KBQHPhTJuP28jyKSMSTHnQhmeEFErFGh9jbnNqqSiYpVKxViDbxRnXomhYHByMQA",
  "key29": "4YJzX65mtBVkbPnmj7qrg3H4B4m71E8LQ896LX1v2Dy3v19pE61EkxB3DQmVJWRdkaks7cLoCWTzzfLBKP2ir51n",
  "key30": "epgsA4ZCheSVb1rC471QhTCh6F5K8qTaxBrsn2AVHXXK4w1FiojmSU1wCFFZqGyMjA6vXXyQEWegqKaxrKybAF7",
  "key31": "5Yja9id3ivBqeutfC9rjzMcJKctLDkaMn9eok3xvHmiuLksGh2BaPK8DWzzPCPipsgMP6pctoT6JkcReaTFio89Y",
  "key32": "3xaZv19Erw2f8ag7XTbPwQQNsECTTentxnt2GiKHhMwcFgpS5dBooeiRZ1msJSxB8NHxe1sCNx9wExtZFQbZjXix",
  "key33": "3Tx3S7Rh5hMmUZjoUFR9cXtybvZqNzG8VfwJj81Rr2oTZMoFqKMZq4PncXaL4Wwm832Qy6q49Ddn8wZFPPH2DDjK",
  "key34": "35j2XPSDubE3uBkaiP2s4AoCL1h2DoV5zsEwX98zz6V9SS9YVeVx2CQK2UthynvjPVsMsVdHNwtMefaqgNm4KPvF"
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
