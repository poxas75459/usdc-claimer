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
    "51a2NbZZPX4CwCEQGs61jEHDzCFuebwPfowF661wyTC9UA2eXuja3JL3EnMhEaEBCXt8pk9WB6gyJJ52xvN6GV9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhrFUPQhqQSnBk71V2LWfyyEb22TZoXZEgfY9nRjN1DbaJowLcr7cc95RJgKxuCX1LEYAsXhbqarUoD1S2bVYEp",
  "key1": "2ubWYzGqUDKT8fybU2SpE6Bbsn1k1xqfHUE6RftKwU9qmhvHoB1VcAzsoWFXNyKso6m2R2y1L1hWuvGar4EjJCtz",
  "key2": "3B3ou2e4x2FrQvtTafeQuPYxKv2D3ryjz86TvUA6LJLiLA87CQiTjBfy8rngTHe65jLLCu6sPDqzBQyrxMSFhHMu",
  "key3": "4PHvE4Fr7xFa6AFL5VrYb8LFumHimsKCCPsxA7npQDrLDEoa4CBdCogYKpmxV53xat8XsB6ANp4n86gXZ7xDir2A",
  "key4": "5k1fo8AXzzsYFDvm7aVvNKfiihj4RivWdcqNEwHknAwY8eg7K3jkTYWiyi2xzBjjWAtSSEDJszonaHgz6vLHxDpQ",
  "key5": "2AxZLRiPPi5bAzyNCR6uckAyc9WtShuDquwnSx8L1oaoT1SoMcbDbX9hFT3JKXf67CV9wH3bhU2HeJ3pVQaurXSU",
  "key6": "35cVY4zk2m7vhRduGYMBNMydJYUmqGiFpnWaXp9y8yNppm2fpPYdJN2p1s6fFSPfibZyY4CAy38kKuMx3P2yMSpy",
  "key7": "2sXTHuBz6V8Cdrc7YQNg4urpiZjVjAE1vv9mFx9JffEdbXBmNQNDwfyJjpjB6mERZ52m8ZyrSnbcFequxwK9dxpm",
  "key8": "3E4rrZNYVBEqfibs2GpFDxLYRWmYWGm5MQuzk6Q7YWoBSYoRyWeYKXhLfJqBLjjECpPDsjfsCBmBrQHNbDEADCwy",
  "key9": "5pR7ypWZ465moAiT2MqHu13UtKZQuWNjKZS7kp1Pnd57HYmg2eEwPZYGP45dX9RJwZYqFQfQyzoxi47wFqYMYzMm",
  "key10": "348nC5C7PfBNzRodWLLi2WWzTeGrvcs8KCXTPYh1zW5isJGXfyYEme7MG4soEXMEXSvQEMb4TGdwTq6Ax49D3NYb",
  "key11": "5RLyFhvQreNBycCiiPgLXyVCRu1nEpHBYvqqo9ghu6xssjL8mfPbsMEc9F4mhhHwJh4A1zrcmHfEwUQrzgd6vHX2",
  "key12": "3JahcgVzhEjPFnyhQF5ou5hMjS6XeWHX7jQGMeALj9JAbdLBQaCgvkoiuXjr96LGZHv6SwdugmXCWqjhaxNWTYXL",
  "key13": "2VTXwAPD8JyZ5yaFBHokkebCQLi4mZ6jgtSJ4Ppju4yrDQxBmDv5cWJfaJFVrvK8ZUb9kS1SWkzY9oGz9JXTRV6V",
  "key14": "5432MgnSmihmseFK1HjCE9wsPggBsuzfbA3HEk55Dgq5nwQguLekHzgi8fWqkiC47fyaYU5y6aQJp4nGowgNC9S5",
  "key15": "oELf7TQrRAXxFARZsAAoPG7EWCDRLmbsNcXsCRFMSk2gZnaCs7PnfAh6SvrZGxJJ9aLJ4zET6qsDCKFrfvF8nXN",
  "key16": "3CMmzAQ9d9QchVjWnPJKs88mT2aoyCf1KbivPdRsxmWHDEY7hHw6dhA8V9J369QwSnVqTVS1MifEpTU27uyvjyAt",
  "key17": "2kjNr1UikYWCkC6sVCmUh7Phw3A5Xzh7J1Rm8nM94HjEXUbjCTfRJ8CLyaN1u96895dDwfeeZ12nF8pR6czCaAPD",
  "key18": "4NfUDCjUNQLmd25uH91fX6EnCBv83VmGwL68n9UYGHw2JHzhMweEG4CHb2BYtg5NkxFQ79izQyHXuhSyqnqyZ58V",
  "key19": "5QUE6UAcGozfZDBXhgkMbQ4UvATJ6REFCopvG6a7R3EAm2qEuCEaMVJjL31tmygsPVRrJvg3U76vu9PocNqKeSNf",
  "key20": "35VabARhFBJtRNNRYck9LG9xyLFUNCsQQwd1dz6rr1EkNPTwWfTQScoJzxGyN4abXvn7Cs7V1ZN2vzwpYveS9gw2",
  "key21": "n5nRGP2wcN81aCM9NLZ2tKnU26mHusrntAQkpHiWDjMGtaiUhmdw67Jcmt5zj6nuRwXPyC9v2UdNf3SCXWw1RJF",
  "key22": "yjvyTZ2Q5FcPxViBepVFaqsqSNbX2fWu3j2TgkPn5R2rPm66N24bW3wBAXZnA6ZZD9TfhNXysu4a38PxVxSFboM",
  "key23": "5neacw9jmtE7k9h6XAUhd6P69nawp7GxmZjwGmb4fmkaSnpp5oST1KyKWK8LPcUwiVvGQ5Ja1FxGiAmtEzuXbQYx",
  "key24": "ybYFjaoA2qBLHgKzxtdsPCg6k9qyUCTf4mGET9mXXauXozJN41mTA7MReCztHM9Z9CB4CGVbLa9zKbfRfdhQ2RT",
  "key25": "2EztQQpVvaMgkbvhhgBnj7vnt5Uq8h1NZsGALE6J5Huhot9FnhX87FGji7K9MDFyNCj3n4MxT9KP4pAKZhwtjH43",
  "key26": "582paVqAAHpmaM6TZmVe6GiTbcucwKu7zzaqhTbkTYSa851qy162meWpdno9tEQA4KN8hysYuNB3UPkS4H2tg9uW",
  "key27": "yEqGHnLxtZXnop8Zd6Q9dpp3prjppX69PGaB7JEze4aSfCoQgAvHostau8V8TKzRJyeqsSr65mL7RqQf3ytgLaf",
  "key28": "5PkCrBnz2twJSV9NjmhnPWfHphWBnYFkgqoL8zv13Y8aTCmjcb3R9dGYUh4g9yZpkVzkNHCRxoyW7rPux5XmTFM3",
  "key29": "dsCviW2cys2evmsn1eh7NJeFr6UMpmbq9W8LgT9i51jiFjGfLidfiaZ8cPF9SQDVk9HeuU6jHRwzVKfXUXi7qbC",
  "key30": "2y8DprsNuNpkpygzRZyNGKh2R8TYVDA7i2of2sM4synH8JzenXmLzkMPsCAGREnVCxa72YsnSSS8sm6dcyuk2hc2",
  "key31": "QKT22i6rYQVZRBkbx5kgQHwvYBj5ZjpyESxY9n6VX27Gqat6ipPtkNvvQxtBxAfDazp2qjzFTGhsM3y83aUS3X6",
  "key32": "Y8bVdMg7gGW3YPB9FyBYkMRWMwy2bzVoQYxoQKL2Lu7m2UZ6HbeeV1pBV9QC6LnspXsMTR2gQSDuBVCPECkf7YZ",
  "key33": "5XtEVhpCWs9eAvTXA8d2t2FAoKwEaRbrbWNyt413Xfqcc6QN8w2s53H2Nfh7L17hSoQ9u93srM3Hz2PHctq27Yb",
  "key34": "4uRcBLsQ51QqHDHEeD8Xz7MPvzJM3cT9E8wRcJqcUdw5tq2UCxvfLZEKwhqgG9NHHs3rW9BnA8VoqqzjB3cRqh4X",
  "key35": "4sjuj65YrkkKuJDebB6hp9QNsA7HtWvfse8ysGj6DA95xHZPyAPZhVsRNbQ5CnWv2TxBWmJUteAuDiXjHdhBSezF",
  "key36": "566QpRfYyvpM7xLymQz5qjampTWKSUtjtm6LQQvnwGFuyM9F93QvJTQCU36fRwb2qAknotdXxcAFR3ZE1HvD7TLp",
  "key37": "31C1HDp7vB3x3e5ZcWzoJFbRPKVB7DbxsLKTgUZoukw7qnekQHoAwjYooXTrK2tMvAgua8mzTk5jncSGW76PWTDc",
  "key38": "2p6nixQXy6rGsSoMMWBBBGKsXBUhbRBk7n6hQWnFXXU287vBk6GrQC59h5fy4RU3Dd9anJioFHHZHSjfoXbvqmCR",
  "key39": "5vDZPsNEELVyXpE1FNZjkGg5QvHF37UXMBNsLJ9eWBx2vKTtsv2YVvsWGsuQdDBxGh3iYVmqaGp2CPXncbDwBFk3",
  "key40": "28vubHkrYMdZvromWXQ29x4mbgogjfPMN2SQ9cb75ogNk8ZBZiPJEWFQg2NeAwna8kLdYPGA3hSCDCzDUAu4naWq",
  "key41": "3WMdyhN1dg6fp3ywPf5qSajPWVGqQosHsExMHmfWe1a4cDQuqceuC8KRxYXLsZdcK73toT4sn28JXqP4e488NuXh",
  "key42": "5WkKyTpdnM1UVBrLw45yTZdJytoL1mdgeHvtnJBugWjygWMvhm1TxLUVrpdEzdPcbmwR7Eani3euvTmS1dKe8i5H"
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
