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
    "49A3DuRjxNNViQDjAwb4yjvmP4Ct8dSVrGFY3P4DTAqQEU46zmkbRyUa4CQKq1nzSReiPxUvZFPXnUoGoGJgjr8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PSS8sisVHW6dzi59dFLXKtqZfVbou1efwdLuMx3CMCA6sxczK6DoiF6r96xX6kDbzDw6nwQ4Mb4pezZygPou8yS",
  "key1": "3Ro2jZpZ9E5QhTb1Lv6wGYomRnsaSdUEt7JzoM6wSN5Ss4F4Kv782Ugo71sYdn7QvdvdmFtbtF3HQjwhmU3J7y5u",
  "key2": "5Y8sBGRoC3JZtHQaMFjEpC5QDwn8PF4AMxoHpEqn4F1Xh1BiVoPae1zUuQjQ8Vy4wBYK3wT418aK6FQRdSAiqdMm",
  "key3": "3sG6qpWzqv1XgX2G9eWWJb24gwEDmJnG3aJAkvrnoGdSi6m8k5b8tQZko3KYb4aVf5rGALXnyxU95A25dEr2vGQH",
  "key4": "3wMnAZCWHGKMnPaecVTyuMKU4nPMUFLmYSrEM5mHk7bodZhv4t9r36Ca6KhtKLtt9KgtLRiQnV6u1XJ84WLuMeED",
  "key5": "3YrcuXaeMvQ6o3bRDQ297ZhBAuBwaPvwjzA37rsvd61MZCP2eEDfKv1Q5UQnTjqn8pa5skcTvh6AWEfsLG7XmVoV",
  "key6": "4oHwomFcEjKj8rqB1wVGx7L1Xbk5gF8UJVxtmV3gBruzgwU4SCbW7wLzNMotJxvHb5qYQw4YYRafAux35dJ8eLgz",
  "key7": "2ZBQ6NGTK1PSdFQzGvzJ3JUXE3ECkMgasUUFrv6HuvmTZQMBkQzCqmdVzVNAecXMgn9y2GnRWXcAF6CYLqTnNAu5",
  "key8": "2bM3dcyNEyMxwqoXCnrkCUK2nkjwByGwWG1WH72EtGYQtQA7GbD1sD2Gp5vuvsUVmyTF1n5CGcLMXrLKeHo9Civv",
  "key9": "4V8SR4poCG1h7Z5W9fftT8yCr2LT6PLmWP72x3Gyu7sHRGhRxk42KeW3SWC2NR94xSzU6KQ55S8wxoRCwJGGM8Sy",
  "key10": "323PDXpqU8CEJyJHiBYASKRRbGED1cWweE29TBTyRmgJeQp9uGN1q9n79BiPuiPnsa9nyy5SavNtNfcsZto2NoQp",
  "key11": "4a2htwcnfLRMQSe326S53otzUkjDvw5x2ZnciT9ABEYWtTLHF8ZxK1VyURjZL7zk3zhJeH7n1D3XCDtots3Jybmw",
  "key12": "5m68fgwqQgg59LWiWSkJszLvVn7urt3FULbJWzp339Gb9791UH3tH9FnVJQSKVeXcCuNFJ2NtHF89dVxdEsKjhUu",
  "key13": "3PjDhHMdAaJ9jANJLp4ohsRR6YRzUXmmFffD5yYQBE7zo2gHmYiKCr6ZJzPh7DvrpsoBKzTpUWZxaVqPuqyhYA5u",
  "key14": "3tzssEUcjdh3Rs6XHcxBJFRuTqpCni1YNL2rP3YEgnbuj1iUrnP6wSWinZyRkc32nwmpKxnivMaSjQ1TpyzDysRF",
  "key15": "55HiTvr2Mzn6qJwDmsBBidZKAXZjuuUbSiDwqMKqZ8dMX8CY6B4hhJycJSRZjfTpEz5Z5vE25G7RE37dhQWuvPGH",
  "key16": "2NZ8SRj7rf9cc7SRnJPNxSm7225QX8pyiW4xtAP2xYAx4vZhXPwyZoSS654bWHsNqs1b3CjXGpPxA7q6mZLRPw8q",
  "key17": "4jpJgET9o5b94ZMQdySKjghrCJhuC1nj28i7tikQkAHRt72ptcguQkLDyNvumQ6r3saMasV9yYwPHQbkZMqcntKo",
  "key18": "2ErjxhhTjtt8bAh8JdBufR7gFMtFbEdi36cy2rCYWMkiwzZGWNihXSVqBMkyqSfNdFE4KBRN5EpEUCCRvqMi4uAf",
  "key19": "2i1UJaXyvEDKCgehk9TtLRm7Hi173qfZcer5MksBU4vr3983Ztqaru5f7HRiPQw39eJM2umUH1MGJtoyeQW9VZek",
  "key20": "2ztfSTnYX4mF3ymaMku7Se8Gnx2bbUCSzzuFrjVZGw1bMnkUwrhYf3GByxq1MNB7xL1A488JRJZYMSkwrAYogrwV",
  "key21": "2BZorudrPWDMXxUABXMxkxPFZFceMAD3MHRWQCBNsmYQiKaRCJnMpc4mBdbfAyrnu7rRSKES12TKLLPe9HVPWknH",
  "key22": "4wsMCcukFU8xdJT5sdpzA4nnbqrz3mJJn2NmQZe8bFpUbHxsqP75z2Lokp8aZrU4w3ffCGXPsrkUZLuhWpDb1h4p",
  "key23": "3tJsNU53omXgFmm9NafZRHhR3Qn8nQeKGpijy3HNMS9vzEirjC7S5CLkqDCWJjo4AhLMdGYYngh6VBhM4tkCE5hg",
  "key24": "4xcQ4Ja1cp5HpMC5murL8L526CVcVZypc2sAYj4kYSp5jX2qydf56HGZYNyt9Vnu7MXtSCtx78HiTAvgrBa1Wfpj",
  "key25": "2TVKXew6WDLiFse6MRftomAWmYyb2FjX6LXF3Y4P6qX6Ap4ZCbf5sgaPTikzLsKmR14GCybQe64vpPm8vyFuwRhP"
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
