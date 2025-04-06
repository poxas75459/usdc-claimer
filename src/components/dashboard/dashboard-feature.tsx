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
    "xudpQvtEr1u4CcJXjLfNiywreUkRYtYkWnrwQTDscckwdSwMuHHyFctnu76QBgTrnAW9QCtaa3pCKFNjXnb9HJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrvRu9EjtsjWeUxFbC1CojC5sotQSdCjGUuipCtCsGHseQzZfQa39m4i7jDBynPvQwLczbn75k6PBeYNKnPj5ww",
  "key1": "5DYq4Zwdfdf9SSQLyAhiovYDuvxq8u1LvQtJBDpzMUcZUzXKC4cjXVdzCfv9Nw6xokucWobVtmJLaKZcroU1qibn",
  "key2": "5wPmUhC9ZRSBDDwtrLEVcnwZqAyj64ycTGbz8A3RLwcxbHDdtgEFdVYgJbxjv3vBkSmHPhNZbLd7hWSTiEzn5D19",
  "key3": "NBSwZZ4NYiZ9A6E9UsWPoxomi1EqUwJU319rpiFxJL6FAsWmXV5bpvDJwd4Zcz9uvD9UqYnd716aJFnNYsYEGkt",
  "key4": "dyrYxnNmFgZzEMbV1Qzsg3tJDgM3kY7ZRMRksKVtQxKYj48SBP9QquPosw9o4JShx3TmjzUM2HnkzvVWRt97UEc",
  "key5": "5PD1eXf1Che7WScpwexjKJSK96YnouW2NrsetzKXNGGcBovCfTbsKptnWGLKWNRBsacgtW69rVthF45nNHdA3Dy4",
  "key6": "2zterx3eKfwMyXThiUXHbEY2VmRmaHSDThmTDLkMA2AHSfnrSqS3nTY3XuWALk7PJvwv1mJtSVahBRu6DLCtChY",
  "key7": "34HAKApmb6Wysh2UtqTRY5T8rBGxmXpPC61qikQq6BDVXE5cEM1XdkFb6gJsm5tLBxaxvt6fjixpwATkFn8FvwBx",
  "key8": "4hu6FXbMP8cRa8e3XkxX18ssaeSXt5qxgBXLkxKMmSjztNft5BCmT346Lnznd76fajQvr9dHtVRr6a99BqxPUJQU",
  "key9": "2uNogx6r3RWqHBmL6ZLxJs5qoDKeiNthjMG7LJV1CsyQhHY85jZy4b3H4VAhB42vS2vspf8uBgubp7wZGKmG6BNJ",
  "key10": "3c7haxUrMvDcwvbcELAS6fci6FfH4MuPMDe1a8FYRUyLbTS8wf9dkG6Uyf81ovuRBHXCQ4hUidBR1XPaNNQNdKWv",
  "key11": "65hRvmGysqiNvVsR6Lae92nWhrigq7zGi8FzZbWSPoRnB1EZQXDrH99F7zzsUYw9fguQA6UWfB6r8hV3bwULPJom",
  "key12": "2V3tScuiBuXUThp8nC1hbTxXkcpu6JNJWkWP9npyu4HjVc2X52Xdg9nXwWKkWmBDVNq5tkRxv1DYM2XU9fKv2Jah",
  "key13": "3WhcVPHp3EsdYvGsF98A5vpoL8toRpXnrUqYnYDb8jJ7AGfsjSV9eoFZcrkaAGidKq8j1GSoYgQRm198ibFkYLdh",
  "key14": "Na3GMiuHL6J1PJA7h7zwwww6Sz3W34tmJxoH51tGVHWo6FpRd2wdBqUbaatkhozc6cBmRUtro9wq2CnZFkxViSb",
  "key15": "5fhYdPwBtByzbSYQXqXAr56zVC9U7NYU1H4WRdbFmzcsc8a9qcLvsAa7Qwr6gVvso4HF1SUys5PbM3FRvAnnG4eT",
  "key16": "ftwgstzMkcYDY9i5TePYojU9afnt23Zh6YEoJjFjW6LMzL7tqD9wWnwwJKCCstLTfsFHVw21hjtRhJ8Q6kHFZuE",
  "key17": "2b7DqUcAdMLZSHPFEup8wCeNF8oE8ai1UaTkD5z3T5kB3qpdDaodWDLxdBjehsnzGiBbB4GwSjv9GS3ojPKTF17x",
  "key18": "4fc5vbMW5Q4VLDqZT2Je2VXPn2q4zNA5dzV9WyQuq41cZQFdWuf8eKUjcx1UDbHyUBLfPBrQjo9U2YckbykpXoPf",
  "key19": "39gxnRD9RXQt3ZktLCkyDXbid6dvvoZLf7kZTVVgA1DN1EQDACLsYrZYxKSeZ1oDhgqkCAGujMpXYZxXmVYZE5V",
  "key20": "5taAuhFkTip7JLTQDe8fjqRzCTCvheFzjWAh5bEB89ZPpxTuLMUg4EgXpCvAqBdnxnxfNnYZhag5EQB3SkEi4TtL",
  "key21": "5XomNz9fh58AeLuvntamVAZCDE3V6jGd6MWhrRPjRyXu7Anh8rqfzKzr4QqKjYWqTfDDRW77tJuhwxxi5d9fk664",
  "key22": "55xgjTwSeGGxFvDueWx7beJqJFZSQBkXt539caQjXaC6ELsWaCKHCyUKyEHrSDa6NxtGNS6FjGmrtnXFvTuBU8ss",
  "key23": "41BADvtEcrwhsnCJhWRWiHnNEetcaeZz1YqhijkKexeBMBg1KpfFHdb3kmzj9CfHywBXULaJQTjT1r9R4KBxyDed",
  "key24": "33r8iPbNvV3hJpP8fimRaLrnB98HGaLhyE1vf5gjK5xuiuwDQe8krkga6vokLKYiNPtVskgh1SSDsEEN1CUX63AE",
  "key25": "4WJnvmSzaaMyBjepwLXvFqtdbJFsosUbsJsxuKKXo7htXVLgWLnHFAXhs2URKpja5FWzQuikL8yzrhwWgUzS5wCM",
  "key26": "49TDD7EbMpM9rX6boFCwwKU2y2g5CXtrcNGJyvDu6Mnck66B3iqA5YxFxyso8xgUiYSH3LzPFGxdR58kWpSRDASo",
  "key27": "KuA2BCU3QEmKC5FyXUN4fnDf16muQaa5MwxmBPKNnPwcKPytFrgAMx8BdiZ2YxsoYHsTusAXV8F5H5SyTU3qgJM",
  "key28": "3k57CqCdLHo4qgut5hViv4SWWvT59AQmVGv3WkiCNn9YGweKTbJfweZhmr9FLQMMeeoG7y1jnfFhSgnG9FMjkVdX",
  "key29": "3FD61VDxaktrvpqSEXhKoiAuXqwRGGEjFo56GKhNLaQLkCHkSrnzJBSs361nszTepohencapFxw1EewkY24tM9fA",
  "key30": "3k74aVato1aEDgrQBd6C7R74rEQZ14dJN3jsFGxfYQVWkujFwbG5GeciHwna5Ai1Gy2cSdGvZw5Rgc5ETzczhJPM",
  "key31": "2MoSnRnLbqYBgqh8YzaL3Zbe3E4HoFtSQPmeuP96w9dhPyQEQhDKi9355CS7KqBdUUmnXn2mFmZnP3X2u4ic7zPY",
  "key32": "2BEaD9zitcHH7Q8AB8vxXEEKLNx3P37hBVsyMkB9QcEGwCJjTFirXQBJqt9YGerxz3Ps4XDA6JKfEqPjct5RPdkT",
  "key33": "4fkRSyQC2cyQv18a5iXWVUAk8Zz2JJSxmLf4mtqB127sMife9PFMWw3jgzjHewVUD9r3zDNktk9h8W1VRYRNSUxX",
  "key34": "5wGHACxw49goqk4EXq4mpDQqYTxHjcLFvBbsGGPymLQ8as5GazybeHguHz1khK6KmAFkPtKonZ1exWkmqWhrz7ec",
  "key35": "DaKo31Zn6DA42H4hMTSAEXe9qnKdPm9hrx8VfT7YvuXa1fLmSZVY6DHMr22LBcTbXnWokJcqCK2NEh9wJQmyLGX",
  "key36": "3zkt5VUoo4qHHt6fRUhJ2ARWSQBMhcJuJm6Sqw7Vq8yH6ppX3qcyGw1aJWWn5MXGQCtzyJF8zVzsTKxdw2YFhGLa",
  "key37": "3LQBmaAKiw589EQ264EgDDgi8LmdETC69XkceXV7HqqabvsYqeKnh4gKSdsVzwKnamwEUWGitZz2FxPZE5Howvet",
  "key38": "2p8LjAcBkEzt9cyxu8ZRWUGKQzhP4tvjV5WQ8EexeVVeHyZ5PPEMKg1SSJTUbBpzuhEBk7HuXqE5eeejuAjHDrwP"
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
