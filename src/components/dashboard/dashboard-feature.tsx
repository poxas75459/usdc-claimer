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
    "4EEvhnmQAjk777kCeeZ2uCQh9ey7YKpVzPr4ocpsjxKJti3UnYyDbg3AwcfrbuYTQPB7ZRoAm96vETJLRjYvJSg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYxVAk7rvy3USi8qPHVsMi1UwbxXhpYVCoPgXwhU2nbMNjtWqfqQZ8JqkjWc2ZZyF4NoZEVPca8k7wHV7YDF79w",
  "key1": "3ht5xakNPNMwcJSSaxiSFF6XzLaBjykEQ6tDQfyemr74XQwH95DsuaVwkpr2zAaGim5JPBTTHFBZauwWUyiwx7dZ",
  "key2": "cpyRnTzmp2qc4XMEVN1rvAH8kNBJ95zwPaguCM9iw6KwNxJfVT4RkgVX6Citd31wj8Gxc6vx5c5xsWcsAgzxq2B",
  "key3": "VUDpnXpbjVAYQDuYkvZkDWRCgNgDkXc5to3xAZGcjjUa7jaLiidJxWMi9YTk2NdQz1q7T7wErxEb1H44nTZ2XGD",
  "key4": "8jMZQY2Z9jEursvytHb6qKcPbxMZLLMZuNxhtdvRuEBDXTEGUBhorx7BifUF3aPrJ8rSAzZTmEYJwHj2ZXXVhdY",
  "key5": "53USwBsnhPUXzWT3tzQE9qSbNtbUdt5oRGjdrfHqGMgSTM4xLf37uRJgzBc1DimmugGKSzaesZHV8bWL1ZwkdpKB",
  "key6": "5URUv2hGYeeWCgGEP3S2dqkWP1D8C95TAHgV6Mj793u66YKghufZF33KsHfncULqwyRt4wEoiTdjJUsun4nN7UqU",
  "key7": "3fvbrdnY6aDSaNabM6aBXeZN89b1KpeFXyaMc7vezoXQoWdAKr3JHQ9tnWABRLXoVNHQXtde1uNJf8oFPbi9ojKj",
  "key8": "4hPyd4qHbaxTNpnHWxgGqpwwcLenndEkvHUKRsXnpcRAi9Ds8iXxH8Y1LybFGKWpjGYALfvgzYPUFwvYyVxsnAPF",
  "key9": "2sacZDm58c1iNczS4Rmh8bX4EqiBTvCdNf4rCHitcGuW9mszWvJ8MBp7uVG3re8FCigotXAdsUG4BBF3v8nBDtZf",
  "key10": "5rxy9ETutp33N9tP3Akj2RETfeehkbp8hkrddHz5RnCGP5NYLZ5gKDfz5yJJAq1MvozMp8VhZy3KqFhzNZCXzTdH",
  "key11": "66644zxEmugQL9CzKLmicGUocJtURKVuFEVBBzscjF5z6pE63o6FActMcs9AAe4FuMu46otKXUu5u7aEoNdBCuFu",
  "key12": "458dHq6xptUiwnzs5CTowc4wfbxbDUkbKpVNoPPSRm3BLdZi1fENBx8wa5gE4gbr9P57Yqujgv6cCHvbUpbUf5Ee",
  "key13": "jB6dV7Wps1szyU7N2dzLMchyG3wdfJnCw36YkbibAHXiuNpefPRvWVjxhNzKUErFkB373AcLzmEw1tfMCq89gqG",
  "key14": "gbe4ZrYvaAmbdCe5Lwif7xnHVojUDxVChwgT5TyLTG2644PkMJPGvNp3oDbPrDneVraE2eh3Ax52pgbfj8dXTcj",
  "key15": "x6LrYCvu5gz4KKLPztZLX16Ry79be2xBgK84BjcZmBkMgVsZY6KEJaFPqxpvfmeKQpYAXjsie91QsfGn8YXDUj5",
  "key16": "2fqEvHaAcSUakhoYNLPFJNxcj8qo29MSiCDbSefFqS2qpKmnYKTFQtogSZ9WsXhrXRcYGyFJcbsckMdRttkf9cDi",
  "key17": "4udBgcgqN5Bv1o4C99syErP2eYW7uKmxcmDu6nNbDKcmpFXj9yiMkskoLGtYPEqmUtJoKYMFzAgCYg6bHxbvQdtn",
  "key18": "2YicfaHR4KBEHmTGCdummDZtffdrwbjAGYtFHw1f5PbjfEGp9TN6kBRRgHRhj1kPfLZhAbJvtWf99KdfLEuoru1q",
  "key19": "heWa8ShZ1wAMGTrvWNbBbNHECH5EwBCMZ8fgrp69uVfxn2Aw1WRofZ4hF9WeURnrcxLFJJ2TemeRrFBvPdxRQ68",
  "key20": "24dm6Zw2Pqck3PjcvBNeTkVEsK9QfVhc9kw5GYZaY6pKTh8VUVLqkLA2rXETXUhK2ztYuxgPpkPQRfSbEez9qzkG",
  "key21": "uCNnXrzDjPusz6w4gBLQg3tYzQVz6hNJVoJWfVeAhoh4SBpnG5GSCcA4RQqLjkNnkowTxRsJqe2aEVHP3tbK9vA",
  "key22": "5uHrCTvnvJ99L9FvaeGxG2xkkD7SYP5WWKHSYApaUJyJ625Dm1ss4UcjugphSpKwpR5q958s1C7SrrojXKCwmHMR",
  "key23": "2auHvuPJiiSXHkRN9T1mjtf2eReousTVH8MgmHUt4jQKecuL6kqDDLvYYuKx2kYyry6xbUtDHQNhskUZ9x55jaRM",
  "key24": "4tPezew4cojRHTkCmgoLX6V3vQ5PUDTu6XfxdXAJke8pESp2KYxo37PDVt3CMuqz7oKxMNYmNAV7HfXjzxnZfEgM",
  "key25": "3MgWWVKs4SVMTGfGtJxkRFxjCoQTGgXZPMLSvky6TNFXd3tQEHtJZ2BuQnfd4Wu8p5PSdzu8hNpJ8qoZ6i1WQ2yx",
  "key26": "62goLGTqm88bae21BbTqEJT75B3PcYafLyzUZEQLxKXAAEDbeqWnUuo1PY5Zoa3jEzyfypMh8wf9HbKLaqixd5B9",
  "key27": "38QNLPVCwP7pWhvykd6iSfvVa4ftNptJga9WbjBBctS24YZQLwnohUfJvAoGzLgbJ8CxJneXJFQYq7yYiRGfDbw4",
  "key28": "2APVRTbpuJ9Hd3avQJr7tJnYr6utwy6YwBVedrsxuM5hxkieKK3QsXG9TeMWtNZyHh1JNDGXUGdWArb3XSeq4MjF",
  "key29": "59VXPq6Tvwr9Xo1pNLENWhD5aJ6mK2kFjpz5CP6rs8UbNJCt98pYcJyZTk8nwMvwgD39Qwm4YN4rS2LkKQfTCDwN"
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
