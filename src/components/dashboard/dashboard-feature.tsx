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
    "2b4syq3XoeMmVZZbz3BkPyJ2cz1uuCNbt2m8q62BjHJfL4AbAkUFt73ig7Ks1ubqm7jyC5Be4cR6dMXmJuxqQFye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mn9p1DTpeHCTNxxwjxdGj29WLJKHhSiY7UZEAVQ9ZBhowNEWL7M8QxBE9v5wvSfJVysZjvTvKQBLxdm4nsT9KhC",
  "key1": "DEuf5AyjDWRGHckUzpie93kbfTjaumX4hsaUYQXx2ZLDCmXWkEatTUAdBbpGvZSmf3oAhDsdbxMAD7iiDub2srL",
  "key2": "5NSZg8bmcs3hcV9MSqExTxRXgN6DjQLytNdJJdreWqwLcFJjioca3JhN5tfqwLXMM9ce8uJ28FsUzfRPUNQsa7dw",
  "key3": "HQmfAgAqm13wehvd139heZNuTBrf2muxxVAxNRT2w9hXKPA8NY89xs13AjuhRXwVJkyPQngYfBBUkGA6P9KSBBV",
  "key4": "2nEKMAoFdBqz9KCHitzinHGEJmbB3pVry583f9rrBkZCBAdM76NfKDDgZqUr325fD2H4SuTKpwPzhtSXqje24yxK",
  "key5": "59XmVywocy6pLQSpWYAm4N9idFZmcpwsw98XskY8KAQYXquhrRPCYDSva7M49Q5zk8kTxhW3EmbgKniFYRMdP7FT",
  "key6": "4XuAqfRARiSASj7yNK6MBYKnzoW2SZGizJ1PPphPqBuzoD4bent41m8PwykkHKBF5G9PnFZzMHPpXY84uaGuozUV",
  "key7": "2jVzBjzRMm7LAKq4c8Rgt83h8cBTsqRrBNEYhu2D8VWvpXsiRLGdbFB2wHS9v86TxpfVZtyn9yEEGcP4M4PDALeJ",
  "key8": "3C7WUjCoim2L5smxcQSCrorBN8BoPfQ9zkFYt7bbXtdEk4qHgq3S6M1pc2iwYnraRSN2MBgda4m8FnJYMtoVc33L",
  "key9": "5ZPh6v52ZfZJ2vHyEaAWc7y5Rf8EbcnCoKFpYfMQXKb6mTpfAaV2RsazK7HZzo6DJKFQWcVWrekbVzfGUtVCJvEz",
  "key10": "38cJtBqiqNFQdYo8L6wva6HKrBMQECqgmKVTFeEY8fjn7J6UwdzhzWiMnS2QVE1TBvV6hfAqkEYEv22jPb1JC5P7",
  "key11": "34jLdX9dtZ6pnWJjJjhRMp8yey478AWnXTFt9C85ntRvomr9A6ZxhGzd9TvPvNZefDZPYineC6sUPevmpYHpcxdG",
  "key12": "2GjVH4FWjVCqdAUSMuEPb6oj8kEqQXFshcVw47RKmaQjqmDRnKHRqCnjr5Zm8mKFhSfQMhUiHsLbyvw1NAA1BHrd",
  "key13": "uC8C6ASVJkqNxuw2RPJjs6A96JVGAhUiT8kwKJveWSaBdZHYR2YL1s7tFATqhsudstDdGBeZhmJ85wCwr9nBELr",
  "key14": "5cTDufE1G1bpam9pGHVMYF33pweLGrvSV9QcpDrVkzbheNBM8roG7zrJovpEhXM44kndRBiPYuP4XD8etag652cT",
  "key15": "X39vE1vAAHkMyDZGkZGkKpfqb74MoCa7FPHjs6erwQ74FRvYgkPyf8LV8URnK65AixAmRz2rxVTJGKWZFJtEzqF",
  "key16": "57HBjYe35E8n4jZLtVRy9QVrMCppggyenv5DSSG3zTMd6BTXqQ6VMYw8QcRRM79RogXN2cLiKX9XAqNmAcT42fiS",
  "key17": "5wicP5RMkZ1FQvgHTmZdqwMFbNM1zLbA4pLiv63QCThbAs9Aj8oB6C5A2x7CtZFtkGUGriUa9K3TWJg18oqNjYVG",
  "key18": "58WDzy3uAtXn2WBt6kejh3wSTbQw24LW2X99e66ppktQN6mdcNemLDSijgzzHgEQYb98QLN3KpwGh7cZ4CZV8ccH",
  "key19": "3HcNyHQQmcmAuD2FCMF11yzPmF6bNM9etkHnzgRRDDh2TytvmwDAwGYX1aga4NXsTzTHopFX9iSqZqLiNB1hg3mj",
  "key20": "2bEYySuLtHaUhd9uezcPhENeEoto3Zd4Fxi1qC22ZyMGDsPLcZERQv9XDDinAse5JSfJAomme9Dq35pgpkYH1V3r",
  "key21": "5HTAi5NCSDrqBCJktLayFCkcJbGgsXjciSVK5Vd9yeQLMZQptfm9f71tsEYr65di11i6TepYwV5HVASpsV4qgwYf",
  "key22": "3HWofiSN3G1HH5Q7xYoWGzPu7wkpLaMnz5eyciaEWSAhdDUJGWDvJoMWKtSPXATHp8WZ2w2Haco3fZwX6L5m6Cqz",
  "key23": "67euQDd3WFqbwiUiPRDHR4QvpppDPzWege4pd3nLzBnwiPpLjJNBrYG4mAU1CmnLefCZRWkCgQJWt2UU7oZc3YGX",
  "key24": "L9dFr4frKKVDWN9qT1hz49usEQK2TkbWG5AwBK1jfmBLcqRMurphgb5Ux4B9FsJPE16VLanjjvFW1uoz1Ah9mUZ",
  "key25": "32UK6GDnQTVsCZzPQaHoitYb2nmzb6dQHvTb97xXXkAeYkxG6HWgpZK3EFNwoXBhy35atP8ZvTiJ53uyKMA2ydPs",
  "key26": "5oq7t1R1JSKNgjPFiYWfLXH6BDEvKhcvVsPxSLqnMxqJrvir4iu3kgE3F9HX5ta4A1FTmUdcNGsN7JoMgfrSRdXW",
  "key27": "43LDKjUSNpagjHkCJu9FRWDMkjDvWtoq8LHfcsDF8uV1bEi9uJyjpTgyH7gUVVrpkdYCRAbhsSPeDwBiMQsj17t3",
  "key28": "adhAypXqfM8c2CVQAm3xiiPKBRz2bjhDPqdZmhZcWtbwtAdjmth3rETdkKQF8G5sSd3suf4vQhRi2ioAosKzGjA",
  "key29": "5H52JeZbs5gZFi8dz3uBt89r9E2kCmJvB9EXhzyv6yXmNMaNZoist66Rss1dtxYeig2fTkve7MKAPmHdv3HhXw1M",
  "key30": "3EVFoofmG2X2jkfRe2mi5Ezk6CNk5B9TesgPhhb215w1nkyRZnn7AdYXxEG7a7Rxx5n66CWeZ7nLJqQTtyevEzQr",
  "key31": "61yairW6kvvUpsUH4QtXjfAZe2x4adP7qBVvgSH9v6zMDEdyFmC6JDDaYYF4SCahFQuZhBDQ4Fq7j1juBn1GVAUc",
  "key32": "3tWJjNYsVoJoGC3yimhaRtTJC4Eb7PdQNV2i8uxt3DrBHGXGfaMpEbSpKtRPMKwYbUkkUxVFQWVNrPDYVfNgYP1k",
  "key33": "5E9KhgtdWuNhLZ8aofoqrW78vXSgfcgMiGFaTeizUuLpPr5vH1Yt5rbTgLgxUeJQzfCZhh6JdnKCAZZ8BNqFoHkC",
  "key34": "3o2GtAQ1Wm2MBQfFRzCLpniLXkbz8gzwjyqgcK6wW9eCP5UCRdYJFYdqYfqMXUAAeb1qCq6xqgVFeyjq6qCie6dd",
  "key35": "3AAYs1QoRzw2JZLxL9qaPMfJc55drsewoYyUNrfCWKJjaUau8HHb41oXEPbjKYxjAdXF4FBic46Sak9Q7FAf87DH",
  "key36": "5zgo3cecgX2uBmhP1KdYteb55k4LsWncve9BkxcBvvB95Jkqf4JEr5XvNrn5ATGn7pHZJoPVVem8ZTMPTeTHgiTu",
  "key37": "9aH9eMR1P5X8F51c68t6FawknrRiG4XHLPiAYKkkT3xK9Y7Ni7xmGLRNyTxko4EhovtaBAS1U4nWi7kAZvsaE2e",
  "key38": "58EBbPCRPyrmapKZkAKqUF5bi88JvqnwuTvNX4pTMEeeqgvjrWEXGifEi1jWGMBS147SZDhEMzeWL4PPgV1Z3wYs",
  "key39": "2jRCfZfrTCb7DnDTBZywp7KXL9Fc3cTs6VNtKEP9vng238yYJZBjvraCnUF4C1rd6JyryvTod8cT9zQkWBxFy3VC",
  "key40": "4nGHJWY3FVAtALKpX6euMwkFE3LnYXAdZMu98acNyPaU7v9cq5Xi9jyPEhcY7Mg4hBfW6fCAW5DAmvkM4mkz2PTB",
  "key41": "5y9TVu56xvof9SUb8iGn3jXfhAx4kqQMRsoeA2BSuuXC6URBZiHFdry4N6afJWt1EUtUugqBNPWEGTiCKx6AbuaC",
  "key42": "Y44bY3yQN46qxdXwxp44B4if9CbH6BQG33LHwntoJGuDxdGK9fYGm5aH4MwgS9N2YQSk9E8MvLsRViapMwu2NCg",
  "key43": "2UL86J91KZ16xV4MG3MuwVuwsjfSF6djC3evz3FXTfypBHKh7L4yE9dYKzzVPT4nvVQohUQBpCD1x2tRDduhXhHn",
  "key44": "53DKpuonJTWqerD4PW5o4P76RkcjzBo99kdDCqE1GmF8hhMsZiz16D7WAy6XZ46r7gDZyMa2PtP9EuncmXrqvaEp",
  "key45": "3G8kGtvxGnbS18jhYDtPmwFstpMZRm9FX2SVuTdJ8JB7q2q3dXpMN1WbCjdaKk97FBeJUBxsvLDnp8uYFqLjAQaP",
  "key46": "5iHg4kHXiYTS4NoUpNWuu6d1SUQN8Y1vVWjER8W92ddiGmzAUFfw7H2rnoiSNMurxfeGQKmE7DDydtAvgYBzmYcZ"
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
