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
    "5JGWCwNdJE9373K1y36cnEVyuVsc6wVWtJ8fqAA7rMr29iJBhi3xd7kQ4P3QXzqVAdGrr9DRa8r6aenVTRAiVXAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGo1Yo9daFdwpHqtYuzZchHi2JLZ6BeGgSwMTiFr6kXHzq7yknRegjiM3BNQhKV8wEfRop7gdoobzuq5EpV2nyi",
  "key1": "j66knsj1Wt4nKjokVseUEuD5s11cjCi8MyCWU6nmTozzhBHNE6nzr9xhqciHjiziNbAbqCrNLHSwgZZ7GQ22ZQo",
  "key2": "4rzFs7qEonmZ7GWJC6rYdBnZ1NVYFCqywZR6tiKs6WJZ2vDtRiTfCmh9e5hq6uPmEAis1uccsC59cSYCitRnL9t6",
  "key3": "5GK6pkJXi9n1AtPVgqGpBovMdjpz7yES8NQr6FkZzeAxna3BrVH8bHsxBmBTLo1EeyvL5Kk7SQg2Ku2XLsgsv1Jo",
  "key4": "4uBtb6YKwwsyJHn5hcpWnnt3vFPZYjk1k9SdvWdBjRvTR3TXkguDTyVBKrjmA8qERk2imRiGAmJYh8ukFfc1y52w",
  "key5": "44HYqx8f7LTY7HNQ6FNDPjV9vPYXoyY4C1scGA5qTy2ZCrLCeMzarGTFWP87DfNpJke6Ck4yUwEd9SZVCCcv7Q7k",
  "key6": "3oH94DAZRLZvEJ2zWRp48dR8KGmJ29KUJxQa7F8V7QbjYXxYTQEPYDiVXdzzHb73VCyMj9KJstArWy4fnipptnUE",
  "key7": "4YFa5Djb45H6VqUDSLdWjMSKn7CmRiniezmxqtnCX2HAqBqHeA3yFUbwsLR4aA6ytn83DVq663hZnxwGYFMRw86x",
  "key8": "4QvEt7MeTFDLy9kdhe1PrFS6ym2Bj7mnwaqztdGaM683hCupsAAE8mtyEDCbzSCH91Z4oVqtszxKRgVTzvDAVGhm",
  "key9": "35vKuUz9x5AyBNZ6ukUBs4KmMtuG6eSNnqiC9ZrVWR7eYk3YTvS3R99AM22UHsha4Hd2hY6bvPqiMzyp5D7UKJ1w",
  "key10": "3oZxSFv2EMUPuZ6BT75WXtp4tpjKCkqSK7MbiqGMPWBNdPsUXjTNDBsTdoQegG4PTuCE69W2nyfJTEVZRSbRZ6Ra",
  "key11": "SoMfrdkx6hpWBmsgbG9ob86shzTxHxToZ1yUT8ggnQW7Ek9gEwsLDtY7gUwUtS5eBjzN8CpSyehv5xKsHahebFH",
  "key12": "5ehDqPQ7vCLngu8bFitUiqaZ6nUzA4x4sD7E9kE5WV8gHGiGgpLCf9Si2TJiSksPz7juNM2XyuMDo6Hg9jhkT79t",
  "key13": "2f8cAxznxRH44pACAJYGRmy3cSwfmAQ1GMDzREMSN2ahKDFAAugpdd6B8KdwSKWp8oB9iufKsuLofjSLsRESWW47",
  "key14": "2BY2wvAWNifXydTM2XH8DH5VHxX8RM925YiH79pUFFpYQRUQMbuTgFffruUH6Y9yh66HmL9NsByFNAa9aRap8jPZ",
  "key15": "3Cm5i4JhYVhQdtsVybvYCcsn8e5akFMgWf7sdfSv2VBJm8pfc13Mvp92hfWaC8Gqa3JRbrBujDSupA5GZMFXe6kq",
  "key16": "2GCCsHfT5i5yK4RCutHkW2By26yAwghyGFvHXBR9UfBQRB3YZi7UmFv6cNa4Z7aVyJfMcxvvxRHbACd9q5UNdpQ8",
  "key17": "2fK443VgW7eGNwJ5cd5CtRe3dJEHy3RBsf2NNzmrANHhbtqN9a38Nzv98bEQqoZF4DuDzj6zNreoTgLtXjtcxv3p",
  "key18": "2uvGSPmwM8Rmjsma5bV42dDdzLudW9MSfZTeX3p7w2Ar5Acw2rfxAdX4myBhH4U1jsx9JjuZguSFjTUdiBXzy3a1",
  "key19": "4fBYoFGVQotVYHA1FmWQAvpgUcRbZg8UZp1Tph98ewiZch6HFJG1igW3UMmrFqsw6ATaT6hxqD9m5yysGVpnyrCF",
  "key20": "GnBmZMUCXFJ3RwfgehLMdRw67EW7bUGXbpmLV41iYFzMYcXVdXdA337BiveN5n4WGgdWQ7ZiGKNdpzZ95pykiWG",
  "key21": "4rTHiMni5nauLfH541v9yZQvSJ3ctxaPMBTX4JnMxJRwDfhn8CQ53epAhnkraANfNQFASkqU7zEWqfFX49Ev1f2a",
  "key22": "4o8CERdZNsQgn2X1MjbmsfNjPki8QuMWnzQkQew6c4WbAz85xvvyre8os2Jw3umiDpJJiNnU5rmiHPGwTALZuJYb",
  "key23": "2v9BPGRxyZDmLuqgPZfQ876d8Bp6FzneYyPUSZnWPh8ddE9qj1BAhrv9wUVThAP72sYz183SqsdSDVc5wQy1Lidz",
  "key24": "3EyZjUga33xsQuLiK64Lexo8mGLVjdFquPgS6gTb98wfN2iFyXR888nBgdD5Qb3njZb5gZYs9sZ3j1UokmXonuRf",
  "key25": "4zWQ4sAY1fggjFLwrzpCSbLDcLj4x2vcz4SaQgvGV3svB8KWui8y2k4zR7GwNAJEKMQjeHEGX2ydMmcHqHnp3n3W",
  "key26": "4CY11fXVgPJutyiRhwPRhS2NNtWgdVYeHgYExSRwosim2vqrNi8fhqrcxEicJ8QJee7PJMwExGkGtSo5qn1ogfra",
  "key27": "2pvhhFzUAwCEwFmLYqQoftQetZyDF7X2GUetmg62GHnDwfzhYY1fE6sqeGhU86wuDzZWCe6xGuvhRzYin5o59twT",
  "key28": "2HeEUrY9FQcu7Jph7b7jvYqZ2DD6MSn3ZZsvz2X2jbGnUAuMHBQERAJvMfJwmftJiLboMvYES4u7f9QVi3UN6vut",
  "key29": "2VptpjnUrgVkNEfweogMPZu3H5qqbAJXSoLHuVYgedKoa1yqcUmGfiG6R8yFHsH7sjySx3NJiNk1VstCYuCALtJf",
  "key30": "4MthpfCjSPfMrdXP8MnsbXyrA83CF4VhVC14EPU9GeDKETknuFyd9gNutVoKHggMUjkqgJjcpPK5rxgr9LcmoJ9c",
  "key31": "4ZznYrACRT2zYf2FiGuPnsoW2Jp67gBLefw9DL61nJNLyr263bHBfRSh3UtHKVKBuUKnbqS4mv9ipwqcpqrQetX5",
  "key32": "4NGmjJQYy4kxresNj499VK5xZjUjk8KmNupJyqEhf4nYAbhAtWFqrbgEUk15CUGeAbqq5QiJRpbx1pkcLTwoz7Rp",
  "key33": "33EzcN5QxVdtKatwVLG6FBcr9qFLXznRqSQexeDBRRLVhCJRK3hw82HRQNro99GNuEVYxv8fpiENstxkRCkbmUZf",
  "key34": "4AhiYtabwcCwFvA6Mg3NPzEC6MRFGqyCN8D9MZ2EPoJUf7ttjgyAMst8fMouLcmLaL9XFRAFV36DLVnh15UmHwFq",
  "key35": "3t7YuFKCddnQ43hiiPAJGduhq6e3vNuXqAvhwhKToca8XDdm743eFJ9ftSz5fSvBWotcW5pkCAJZgsiJCrzxGLgY"
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
